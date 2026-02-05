import { useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

function App() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [expectedResultFile, setExpectedResultFile] = useState("");
  const [results, setResults] = useState(null);

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    
    if (!selectedFile) {
      setFile(null);
      return;
    }

    // Check file type
    if (!selectedFile.name.toLowerCase().endsWith('.json')) {
      alert("Please select a JSON file only");
      e.target.value = '';
      setFile(null);
      return;
    }

    // Check file size (1MB = 1048576 bytes)
    if (selectedFile.size > 1048576) {
      alert("File size must be less than 1MB");
      e.target.value = '';
      setFile(null);
      return;
    }

    setFile(selectedFile);
    setAnalysisComplete(false); // Reset when new file is selected
    setResults(null);
    setExpectedResultFile("");
  };

  const analyze = async () => {
    if (!file) {
      alert("Upload a JSON file first");
      return;
    }

    setStatus("Sending file to backend...");
    setAnalysisComplete(false);

    try {
      const response = await fetch("http://localhost:3001/analyze", {
        method: "POST",
        body: (() => {
          const fd = new FormData();
          fd.append("file", file);
          return fd;
        })(),
      });

      const data = await response.json();
      
      if (response.ok) {
        setStatus(`Request accepted (200 OK) - Analysis in progress...`);
        setAnalysisComplete(true);
        setExpectedResultFile(data.expectedResultFile);
      } else {
        setStatus(`Request failed: ${data.error}`);
      }
    } catch {
      setStatus("Request failed");
    }
  };

  const seeResults = async () => {
    if (!expectedResultFile) {
      alert("No expected result file available");
      return;
    }

    setStatus("Fetching results...");

    try {
      const response = await fetch(`http://localhost:3001/results/${expectedResultFile}`);
      const data = await response.json();

      if (response.status === 200) {
        setResults(data.results);
        setStatus("Results loaded successfully!");
      } else if (response.status === 202) {
        setStatus(data.message);
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      setStatus("Failed to fetch results");
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>test-feature</h1>

      <input type="file" accept=".json" onChange={onFileChange} />
      <br /><br />

      <button onClick={analyze}>Analyze Reviews</button>
      <button 
        onClick={seeResults} 
        disabled={!analysisComplete}
        style={{
          marginLeft: '10px',
          backgroundColor: analysisComplete ? '#4CAF50' : '#cccccc',
          color: analysisComplete ? 'white' : '#666666',
          cursor: analysisComplete ? 'pointer' : 'not-allowed'
        }}
      >
        See Results
      </button>

      <p>{status}</p>
      
      {expectedResultFile && (
        <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#e8f4fd', borderRadius: '5px', border: '1px solid #b3d9ff', color: '#333' }}>
          <strong>Expected Result File:</strong> {expectedResultFile}
        </div>
      )}

      {results && (
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h3>Analysis Results</h3>
          <p><strong>Source File:</strong> {results.source_file}</p>
          <p><strong>Processed At:</strong> {results.processed_at}</p>
          <p><strong>Total Reviews:</strong> {results.total_reviews}</p>
          
          <h4>Language Distribution</h4>
          <div style={{ fontSize: '14px', color: '#f5f5f5', marginTop: '5px' }}>
            <p style={{ marginBottom: '8px' }}>
              Detects the dominant language in each review using natural language processing. This analysis helps enterprises understand their global customer base 
              and make data-driven decisions about localization strategies. By identifying language patterns, companies can allocate resources efficiently, 
              improve customer experience across regions, and identify new market opportunities based on organic international engagement.
            </p>
            <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>Examples:</p>
            <p style={{ margin: '2px 0' }}>1. Amazon routes Spanish reviews to Latin American support teams</p>
            <p style={{ margin: '2px 0' }}>2. Netflix prioritizes subtitle translations for languages with high engagement</p>
            <p style={{ margin: '2px 0' }}>3. Airbnb identifies emerging markets by tracking review language trends</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie 
                data={(() => {
                  const languageData = results.analysis_results.reduce((acc, item) => {
                    const lang = item.language_detection[0]?.LanguageCode || 'unknown';
                    acc[lang] = (acc[lang] || 0) + 1;
                    return acc;
                  }, {});
                  return Object.entries(languageData).map(([name, value]) => ({
                    name: name.toUpperCase(),
                    value
                  }));
                })()}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'].map((color, index) => (
                  <Cell key={`cell-${index}`} fill={color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          
          <h4>Sentiment Distribution</h4>
          <div style={{ fontSize: '14px', color: '#f5f5f5', marginTop: '5px' }}>
            <p style={{ marginBottom: '8px' }}>
              Analyzes the overall emotional tone of customer feedback, classifying reviews as Positive, Negative, Neutral, or Mixed. This powerful analysis 
              enables companies to quantify customer satisfaction at scale, identify product or service issues before they escalate, and measure the impact 
              of business decisions in real-time. Sentiment trends over time provide actionable insights for product development, marketing strategies, and 
              customer retention initiatives.
            </p>
            <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>Examples:</p>
            <p style={{ margin: '2px 0' }}>1. Tesla monitors sentiment spikes after software updates to detect bugs</p>
            <p style={{ margin: '2px 0' }}>2. United Airlines prioritizes negative sentiment tickets for immediate response</p>
            <p style={{ margin: '2px 0' }}>3. Starbucks tracks sentiment trends to measure new product launch success</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={(() => {
              const sentimentData = results.analysis_results.reduce((acc, item) => {
                const sentiment = item.sentiment || 'UNKNOWN';
                acc[sentiment] = (acc[sentiment] || 0) + 1;
                return acc;
              }, {});
              const sentimentColors = {
                'POSITIVE': '#4CAF50',
                'NEGATIVE': '#f44336',
                'NEUTRAL': '#9e9e9e',
                'MIXED': '#ff9800'
              };
              return Object.entries(sentimentData).map(([name, count]) => ({
                name,
                count,
                fill: sentimentColors[name] || '#666'
              }));
            })()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" />
            </BarChart>
          </ResponsiveContainer>

          <h4>Top Key Phrases</h4>
          <div style={{ fontSize: '14px', color: '#f5f5f5', marginTop: '5px' }}>
            <p style={{ marginBottom: '8px' }}>
              Extracts the most important phrases and topics mentioned across thousands of reviews automatically. This analysis surfaces what customers 
              actually care about without requiring manual review reading. Companies use key phrase extraction to discover trending features, identify 
              common pain points, understand competitive positioning, and uncover emerging customer needs that might not be obvious from individual reviews. 
              It transforms unstructured feedback into actionable product and marketing insights.
            </p>
            <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>Examples:</p>
            <p style={{ margin: '2px 0' }}>1. Apple discovers "battery life" mentioned 10,000 times to prioritize iPhone improvements</p>
            <p style={{ margin: '2px 0' }}>2. Uber identifies "driver was late" as top complaint to optimize dispatch algorithms</p>
            <p style={{ margin: '2px 0' }}>3. Spotify finds "discover weekly" as most loved feature for marketing campaigns</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={(() => {
              const phraseCounts = {};
              results.analysis_results.forEach(item => {
                item.key_phrases?.forEach(phrase => {
                  const text = phrase.Text;
                  phraseCounts[text] = (phraseCounts[text] || 0) + 1;
                });
              });
              return Object.entries(phraseCounts)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 10)
                .map(([name, count]) => ({ name, count }));
            })()} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" width={150} />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>

          <h4>Entity Types Distribution</h4>
          <div style={{ fontSize: '14px', color: '#f5f5f5', marginTop: '5px' }}>
            <p style={{ marginBottom: '8px' }}>
              Identifies and categorizes named entities such as people, organizations, locations, dates, products, and brands mentioned in customer feedback. 
              This structured extraction transforms unstructured text into queryable data, enabling sophisticated analysis like competitor tracking, geographic 
              trend identification, and influencer impact measurement. Entity recognition helps companies understand not just what customers say, but specifically 
              who and what they're talking about, providing context-rich insights for strategic decision-making.
            </p>
            <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>Examples:</p>
            <p style={{ margin: '2px 0' }}>1. Samsung tracks competitor mentions ("iPhone", "Google Pixel") in Galaxy reviews</p>
            <p style={{ margin: '2px 0' }}>2. Marriott analyzes location entities to identify high-performing cities for expansion</p>
            <p style={{ margin: '2px 0' }}>3. Nike detects athlete names to measure influencer impact on sales</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={(() => {
              const entityTypes = {};
              results.analysis_results.forEach(item => {
                item.entities?.forEach(entity => {
                  const type = entity.Type;
                  entityTypes[type] = (entityTypes[type] || 0) + 1;
                });
              });
              return Object.entries(entityTypes)
                .sort((a, b) => b[1] - a[1])
                .map(([name, count]) => ({ name, count }));
            })()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#00C49F" />
            </BarChart>
          </ResponsiveContainer>

          <h4>Geographic Mentions (Locations from Reviews)</h4>
          <div style={{ fontSize: '14px', color: '#f5f5f5', marginTop: '5px' }}>
            <p style={{ marginBottom: '8px' }}>
              Shows location entities mentioned in customer reviews. This geographic analysis helps identify regional trends, 
              understand where customers are talking about, and discover location-specific feedback patterns for targeted improvements.
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={(() => {
              const locationCounts = {};
              results.analysis_results.forEach(item => {
                item.entities?.forEach(entity => {
                  if (entity.Type === 'LOCATION') {
                    const loc = entity.Text;
                    locationCounts[loc] = (locationCounts[loc] || 0) + 1;
                  }
                });
              });
              return Object.entries(locationCounts)
                .sort((a, b) => b[1] - a[1])
                .map(([name, count]) => ({ name, count }));
            })()} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" width={150} />
              <Tooltip />
              <Bar dataKey="count" fill="#FF5722" />
            </BarChart>
          </ResponsiveContainer>

          <h4>Part-of-Speech Distribution</h4>
          <div style={{ fontSize: '14px', color: '#f5f5f5', marginTop: '5px' }}>
            <p style={{ marginBottom: '8px' }}>
              Analyzes the grammatical structure of text by identifying parts of speech including nouns, verbs, adjectives, adverbs, and more. This linguistic 
              analysis reveals how customers communicate and what language patterns they use. Enterprises leverage this for training AI assistants to understand 
              natural language better, improving content generation systems, analyzing writing quality, and ensuring automated responses match customer communication 
              styles for more authentic interactions.
            </p>
            <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>Examples:</p>
            <p style={{ margin: '2px 0' }}>1. Google Assistant trains on verb patterns to improve command recognition</p>
            <p style={{ margin: '2px 0' }}>2. Grammarly analyzes adjective usage to suggest more engaging product descriptions</p>
            <p style={{ margin: '2px 0' }}>3. Zendesk matches customer language patterns to generate natural chatbot responses</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie 
                data={(() => {
                  const posData = {};
                  results.analysis_results.forEach(item => {
                    item.syntax_tokens?.forEach(token => {
                      const pos = token.PartOfSpeech?.Tag;
                      if (pos) posData[pos] = (posData[pos] || 0) + 1;
                    });
                  });
                  return Object.entries(posData)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 8)
                    .map(([name, value]) => ({ name, value }));
                })()}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d', '#ffc658', '#ff7c7c'].map((color, index) => (
                  <Cell key={`cell-${index}`} fill={color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>

          <h4>PII Detection Summary</h4>
          <div style={{ fontSize: '14px', color: '#f5f5f5', marginTop: '5px', marginBottom: '10px' }}>
            <p style={{ marginBottom: '8px' }}>
              Identifies personally identifiable information including names, email addresses, phone numbers, physical addresses, credit card numbers, and social 
              security numbers in customer feedback. This critical security feature helps enterprises maintain compliance with privacy regulations like GDPR, CCPA, 
              and HIPAA. Automated PII detection enables companies to redact sensitive information before sharing data with analytics teams, prevent accidental 
              data leaks, and protect customer privacy while still gaining valuable insights from feedback.
            </p>
            <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>Examples:</p>
            <p style={{ margin: '2px 0' }}>1. Facebook auto-redacts PII before sharing reviews with third-party analytics</p>
            <p style={{ margin: '2px 0' }}>2. Bank of America flags credit card numbers in customer complaints for security review</p>
            <p style={{ margin: '2px 0' }}>3. Healthcare.gov ensures HIPAA compliance by detecting patient names in feedback forms</p>
          </div>
          <div style={{ padding: '15px', backgroundColor: '#fff3cd', borderRadius: '5px', border: '1px solid #ffc107', color: '#333' }}>
            <p><strong>Total PII Entities Found:</strong> {(() => {
              let count = 0;
              results.analysis_results.forEach(item => {
                count += item.pii_entities?.length || 0;
              });
              return count;
            })()}</p>
            {(() => {
              const piiTypes = {};
              results.analysis_results.forEach(item => {
                item.pii_entities?.forEach(entity => {
                  const type = entity.Type;
                  piiTypes[type] = (piiTypes[type] || 0) + 1;
                });
              });
              return Object.entries(piiTypes).length > 0 ? (
                <div>
                  <strong>Types:</strong>
                  <ul>
                    {Object.entries(piiTypes).map(([type, count]) => (
                      <li key={type}>{type}: {count}</li>
                    ))}
                  </ul>
                </div>
              ) : <p>No PII detected</p>;
            })()}
          </div>
          
          <h4>Sample Results:</h4>
          <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '3px', fontSize: '12px', overflow: 'auto', color: 'black', maxWidth: '100%' }}>
            {JSON.stringify(results, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
