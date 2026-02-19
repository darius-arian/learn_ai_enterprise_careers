import json
import boto3
import urllib.parse
from datetime import datetime

s3 = boto3.client('s3')
comprehend = boto3.client('comprehend')

def lambda_handler(event, context):
    try:
        # Parse SQS message
        for record in event['Records']:
            # Get S3 event from SQS message
            s3_event = json.loads(record['body'])
            
            # Extract bucket and key from S3 event
            bucket = s3_event['Records'][0]['s3']['bucket']['name']
            key = urllib.parse.unquote_plus(s3_event['Records'][0]['s3']['object']['key'])
            
            print(f"Processing file: {bucket}/{key}")
            
            # Read JSON file from S3
            response = s3.get_object(Bucket=bucket, Key=key)
            file_content = response['Body'].read().decode('utf-8')
            reviews_data = json.loads(file_content)
            
            # Process reviews with Comprehend
            analysis_results = []
            
            # Handle different JSON structures
            reviews = []
            if 'reviews' in reviews_data:
                reviews = reviews_data['reviews']
            elif 'product' in reviews_data and 'reviews' in reviews_data['product']:
                reviews = reviews_data['product']['reviews']
            
            for review in reviews:
                review_text = review.get('review_text', '') or review.get('text', '')
                
                if review_text:
                    # Language Detection
                    language_response = comprehend.detect_dominant_language(
                        Text=review_text
                    )
                    
                    # Sentiment Analysis
                    sentiment_response = comprehend.detect_sentiment(
                        Text=review_text,
                        LanguageCode='en'
                    )
                    
                    # Key Phrases
                    phrases_response = comprehend.detect_key_phrases(
                        Text=review_text,
                        LanguageCode='en'
                    )
                    
                    # Entities
                    entities_response = comprehend.detect_entities(
                        Text=review_text,
                        LanguageCode='en'
                    )
                    
                    # Syntax Analysis
                    syntax_response = comprehend.detect_syntax(
                        Text=review_text,
                        LanguageCode='en'
                    )
                    
                    # Targeted Sentiment
                    targeted_sentiment_response = comprehend.detect_targeted_sentiment(
                        Text=review_text,
                        LanguageCode='en'
                    )
                    
                    # PII Detection
                    pii_response = comprehend.detect_pii_entities(
                        Text=review_text,
                        LanguageCode='en'
                    )
                    
                    analysis_results.append({
                        'original_review': review,
                        'language_detection': language_response['Languages'],
                        'sentiment': sentiment_response['Sentiment'],
                        'sentiment_scores': sentiment_response['SentimentScore'],
                        'key_phrases': phrases_response['KeyPhrases'],
                        'entities': entities_response['Entities'],
                        'syntax_tokens': syntax_response['SyntaxTokens'],
                        'targeted_sentiment': targeted_sentiment_response['Entities'],
                        'pii_entities': pii_response['Entities']
                    })
            
            # Save results to S3
            # Extract timestamp from uploaded filename (e.g., 2026-02-05T15-12-05-487Z.json)
            uploaded_filename = key.split('/')[-1]  # Get just the filename
            timestamp_from_upload = uploaded_filename.replace('.json', '')  # Remove .json extension
            result_key = f"01-aws-comprehend-review-analysis/analysis-results/analysis-{timestamp_from_upload}.json"
            
            result_data = {
                'source_file': key,
                'processed_at': datetime.now().isoformat(),
                'total_reviews': len(analysis_results),
                'analysis_results': analysis_results
            }
            
            s3.put_object(
                Bucket=bucket,
                Key=result_key,
                Body=json.dumps(result_data, indent=2),
                ContentType='application/json'
            )
            
            print(f"Analysis complete. Results saved to: {result_key}")
            
        return {
            'statusCode': 200,
            'body': json.dumps('Analysis completed successfully')
        }
        
    except Exception as e:
        print(f"Error: {str(e)}")
        raise e
