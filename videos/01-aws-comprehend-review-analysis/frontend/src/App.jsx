import { useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

function App() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [expectedResultFile, setExpectedResultFile] = useState("");
  const [results, setResults] = useState(null);
  const [productInfo, setProductInfo] = useState(null);
  const [mapTooltip, setMapTooltip] = useState({ show: false, content: '', x: 0, y: 0 });

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    
    if (!selectedFile) {
      setFile(null);
      setProductInfo(null);
      return;
    }

    // Check file type
    if (!selectedFile.name.toLowerCase().endsWith('.json')) {
      alert("Please select a JSON file only");
      e.target.value = '';
      setFile(null);
      setProductInfo(null);
      return;
    }

    // Check file size (1MB = 1048576 bytes)
    if (selectedFile.size > 1048576) {
      alert("File size must be less than 1MB");
      e.target.value = '';
      setFile(null);
      setProductInfo(null);
      return;
    }

    // Read file to extract product info
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const jsonData = JSON.parse(event.target.result);
        if (jsonData.product) {
          setProductInfo(jsonData.product);
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };
    reader.readAsText(selectedFile);

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
        // Save to localStorage
        localStorage.setItem('lastAnalysisResults', JSON.stringify(data.results));
        localStorage.setItem('lastAnalysisTimestamp', new Date().toISOString());
      } else if (response.status === 202) {
        setStatus(data.message);
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      setStatus("Failed to fetch results");
    }
  };

  const clearCache = () => {
    localStorage.removeItem('lastAnalysisResults');
    localStorage.removeItem('lastAnalysisTimestamp');
    setResults(null);
    setStatus("Cache cleared successfully!");
  };

  const loadFromCache = () => {
    const cachedResults = localStorage.getItem('lastAnalysisResults');
    const cachedTimestamp = localStorage.getItem('lastAnalysisTimestamp');
    
    if (cachedResults) {
      setResults(JSON.parse(cachedResults));
      const timestamp = cachedTimestamp ? new Date(cachedTimestamp).toLocaleString() : 'Unknown';
      setStatus(`Loaded cached results from ${timestamp}`);
    } else {
      setStatus("No cached results found");
      alert("No cached results available");
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '1200px', 
      margin: '0 auto', 
      width: '100%', 
      boxSizing: 'border-box',
      overflowX: 'hidden'
    }}>
      <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', wordBreak: 'break-word' }}>Episode 1: AWS Comprehend Review Analysis</h1>
      <p style={{ fontSize: '1rem', color: '#fff', marginTop: '8px', marginBottom: '16px' }}>By Darius Arian</p>
      <a href="https://www.youtube.com/@learn_ai_enterprise_careers" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '8px', textDecoration: 'none', color: '#FF0000', fontSize: '16px', marginBottom: '20px' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
        <span>Watch Tutorial on YouTube</span>
      </a>

      <input type="file" accept=".json" onChange={onFileChange} style={{ 
        width: '100%', 
        maxWidth: '600px', 
        marginBottom: '10px',
        boxSizing: 'border-box',
        padding: '12px',
        fontSize: '18px',
        color: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '8px',
        cursor: 'pointer'
      }} />
      <br /><br />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
        <button onClick={analyze} style={{ 
          padding: '10px 20px', 
          fontSize: '16px',
          cursor: 'pointer',
          flex: '1 1 auto',
          minWidth: '150px',
          backgroundColor: '#fff',
          color: '#333',
          border: '2px solid #ddd',
          borderRadius: '4px'
        }}>
          Analyze Reviews
        </button>
        <button 
          onClick={seeResults} 
          disabled={!analysisComplete}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: analysisComplete ? '#4CAF50' : '#cccccc',
            color: analysisComplete ? 'white' : '#666666',
            cursor: analysisComplete ? 'pointer' : 'not-allowed',
            flex: '1 1 auto',
            minWidth: '150px',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          See Results
        </button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <button 
          onClick={loadFromCache}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#2196F3',
            color: 'white',
            cursor: 'pointer',
            flex: '1 1 auto',
            minWidth: '150px',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Load from Cache
        </button>
        <button 
          onClick={clearCache}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#ff9800',
            color: 'white',
            cursor: 'pointer',
            flex: '1 1 auto',
            minWidth: '150px',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Clear Cache
        </button>
      </div>

      <p>{status}</p>
      
      {productInfo && (
        <div style={{ 
          marginTop: '10px', 
          padding: '15px', 
          backgroundColor: '#f0f8ff', 
          borderRadius: '5px', 
          border: '1px solid #4a90e2',
          wordBreak: 'break-word'
        }}>
          <h4 style={{ marginTop: 0, color: '#2c5aa0', fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Product Information</h4>
          {productInfo.id && <p style={{ margin: '5px 0', color: '#333', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}><strong>Product ID:</strong> {productInfo.id}</p>}
          {productInfo.name && <p style={{ margin: '5px 0', color: '#333', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}><strong>Product Name:</strong> {productInfo.name}</p>}
          {productInfo.category && <p style={{ margin: '5px 0', color: '#333', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}><strong>Category:</strong> {productInfo.category}</p>}
          {productInfo.release_date && <p style={{ margin: '5px 0', color: '#333', fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}><strong>Release Date:</strong> {productInfo.release_date}</p>}
        </div>
      )}
      
      {expectedResultFile && (
        <div style={{ 
          marginTop: '10px', 
          padding: '10px', 
          backgroundColor: '#e8f4fd', 
          borderRadius: '5px', 
          border: '1px solid #b3d9ff', 
          color: '#333',
          wordBreak: 'break-all',
          fontSize: 'clamp(0.875rem, 2vw, 1rem)'
        }}>
          <strong>Expected Result File:</strong> {expectedResultFile}
        </div>
      )}

      {results && (
        <div style={{ 
          marginTop: '20px', 
          padding: '20px', 
          border: '1px solid #ccc', 
          borderRadius: '5px',
          width: '100%',
          boxSizing: 'border-box',
          overflowX: 'auto'
        }}>
          <h3 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)' }}>Analysis Results</h3>
          
          {results.analysis_results[0]?.original_review && (() => {
            const firstReview = results.analysis_results[0].original_review;
            const productInfo = firstReview.product_id || firstReview.product_name || firstReview.category;
            
            if (productInfo) {
              return (
                <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f0f8ff', borderRadius: '5px', border: '1px solid #4a90e2' }}>
                  <h4 style={{ marginTop: 0, color: '#2c5aa0' }}>Product Information</h4>
                  {firstReview.product_id && <p><strong>Product ID:</strong> {firstReview.product_id}</p>}
                  {firstReview.product_name && <p><strong>Product Name:</strong> {firstReview.product_name}</p>}
                  {firstReview.category && <p><strong>Category:</strong> {firstReview.category}</p>}
                  {firstReview.release_date && <p><strong>Release Date:</strong> {firstReview.release_date}</p>}
                </div>
              );
            }
            return null;
          })()}
          
          <p><strong>Source File:</strong> {results.source_file}</p>
          <p><strong>Processed At:</strong> {results.processed_at}</p>
          <p><strong>Total Reviews:</strong> {results.total_reviews}</p>
          
          <h4 style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Language Distribution</h4>
          <div style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: '#f5f5f5', marginTop: '5px' }}>
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
          <ResponsiveContainer width="100%" height={300} minWidth={0}>
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
          
          <h4 style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Sentiment Distribution</h4>
          <div style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: '#f5f5f5', marginTop: '5px' }}>
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
          <ResponsiveContainer width="100%" height={300} minWidth={0}>
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

          <h4 style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Sentiment by Language</h4>
          <div style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: '#f5f5f5', marginTop: '5px' }}>
            <p style={{ marginBottom: '8px' }}>
              Combines sentiment analysis with language detection to reveal how customer satisfaction varies across different language groups. 
              This cross-analysis helps identify regional sentiment patterns, cultural differences in product reception, and language-specific issues. 
              Critical for global companies to understand market-specific challenges and opportunities.
            </p>
            <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>Examples:</p>
            <p style={{ margin: '2px 0' }}>1. Samsung discovers Korean users report more battery issues than English users</p>
            <p style={{ margin: '2px 0' }}>2. Airbnb identifies Spanish-speaking markets have higher satisfaction rates</p>
            <p style={{ margin: '2px 0' }}>3. Microsoft detects Japanese users prefer different features than Western markets</p>
          </div>
          <ResponsiveContainer width="100%" height={350} minWidth={0}>
            <BarChart data={(() => {
              const languageSentiment = {};
              results.analysis_results.forEach(item => {
                const lang = item.language_detection[0]?.LanguageCode?.toUpperCase() || 'UNKNOWN';
                const sentiment = item.sentiment || 'UNKNOWN';
                
                if (!languageSentiment[lang]) {
                  languageSentiment[lang] = { language: lang, POSITIVE: 0, NEGATIVE: 0, MIXED: 0, total: 0 };
                }
                if (sentiment !== 'NEUTRAL') {
                  languageSentiment[lang][sentiment] = (languageSentiment[lang][sentiment] || 0) + 1;
                  languageSentiment[lang].total += 1;
                }
              });
              
              // Convert to percentages
              return Object.values(languageSentiment).map(lang => ({
                language: lang.language,
                POSITIVE: lang.total > 0 ? ((lang.POSITIVE / lang.total) * 100).toFixed(1) : 0,
                NEGATIVE: lang.total > 0 ? ((lang.NEGATIVE / lang.total) * 100).toFixed(1) : 0,
                MIXED: lang.total > 0 ? ((lang.MIXED / lang.total) * 100).toFixed(1) : 0
              }));
            })()} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" label={{ value: 'Percentage (%)', position: 'insideBottom', offset: -5 }} />
              <YAxis type="category" dataKey="language" width={80} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
              <Bar dataKey="POSITIVE" stackId="a" fill="#4CAF50" name="Positive" />
              <Bar dataKey="NEGATIVE" stackId="a" fill="#f44336" name="Negative" />
              <Bar dataKey="MIXED" stackId="a" fill="#ff9800" name="Mixed" />
            </BarChart>
          </ResponsiveContainer>

          <h4 style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Global Sentiment Heatmap</h4>
          <div style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: '#f5f5f5', marginTop: '5px' }}>
            <p style={{ marginBottom: '8px' }}>
              Visualizes sentiment distribution across countries on a world map. Countries are color-coded based on average sentiment score, 
              making it easy to identify regional satisfaction patterns at a glance. Green indicates positive sentiment, red indicates negative, 
              and gray shows neutral or no data.
            </p>
          </div>
          <div style={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '5px', overflowX: 'auto', position: 'relative' }}>
            {mapTooltip.show && (
              <div style={{
                position: 'absolute',
                left: mapTooltip.x,
                top: mapTooltip.y,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '4px',
                fontSize: '12px',
                pointerEvents: 'none',
                zIndex: 1000,
                whiteSpace: 'nowrap'
              }}>
                {mapTooltip.content}
              </div>
            )}
            <ComposableMap projection="geoMercator" projectionConfig={{ scale: 100 }}>
              <Geographies geography={geoUrl}>
                {({ geographies }) => {
                  const countrySentiment = {};
                  results.analysis_results.forEach(item => {
                    const country = item.original_review?.country;
                    if (country) {
                      if (!countrySentiment[country]) {
                        countrySentiment[country] = { positive: 0, negative: 0, mixed: 0, total: 0 };
                      }
                      const sentiment = item.sentiment;
                      if (sentiment === 'POSITIVE') countrySentiment[country].positive++;
                      else if (sentiment === 'NEGATIVE') countrySentiment[country].negative++;
                      else if (sentiment === 'MIXED') countrySentiment[country].mixed++;
                      countrySentiment[country].total++;
                    }
                  });

                  console.log('Country Sentiment Data:', countrySentiment);

                  const countryColors = {};
                  Object.entries(countrySentiment).forEach(([country, data]) => {
                    const score = ((data.positive - data.negative) / data.total) * 100;
                    console.log(`${country}: score=${score}, pos=${data.positive}, neg=${data.negative}, total=${data.total}`);
                    if (score > 30) countryColors[country] = '#4CAF50';
                    else if (score < -30) countryColors[country] = '#f44336';
                    else countryColors[country] = '#ff9800';
                  });

                  return geographies.map((geo) => {
                    const countryName = geo.properties.name;
                    let fillColor = '#DDD'; // Default gray
                    
                    // Direct match
                    if (countryColors[countryName]) {
                      fillColor = countryColors[countryName];
                    }
                    // Handle Canada
                    else if (countryName === 'Canada' && countryColors['Canada']) {
                      fillColor = countryColors['Canada'];
                    }
                    // Handle South Korea
                    else if ((countryName === 'South Korea' || countryName === 'Korea') && countryColors['South Korea']) {
                      fillColor = countryColors['South Korea'];
                    }

                    const sentimentData = countrySentiment[countryName] || 
                                         (countryName === 'Canada' ? countrySentiment['Canada'] : null) ||
                                         ((countryName === 'South Korea' || countryName === 'Korea') ? countrySentiment['South Korea'] : null);
                    
                    return (
                      <Geography 
                        key={geo.rsmKey} 
                        geography={geo} 
                        fill={fillColor}
                        stroke="#FFF"
                        strokeWidth={0.5}
                        onMouseEnter={(e) => {
                          if (sentimentData) {
                            const rect = e.target.getBoundingClientRect();
                            setMapTooltip({
                              show: true,
                              content: `${countryName}\nPositive: ${sentimentData.positive}\nNegative: ${sentimentData.negative}\nMixed: ${sentimentData.mixed}\nTotal: ${sentimentData.total}`,
                              x: rect.left + rect.width / 2,
                              y: rect.top - 10
                            });
                          }
                        }}
                        onMouseMove={(e) => {
                          if (sentimentData) {
                            const rect = e.target.getBoundingClientRect();
                            setMapTooltip(prev => ({
                              ...prev,
                              x: rect.left + rect.width / 2,
                              y: rect.top - 10
                            }));
                          }
                        }}
                        onMouseLeave={() => {
                          setMapTooltip({ show: false, content: '', x: 0, y: 0 });
                        }}
                        style={{
                          default: { outline: 'none' },
                          hover: { outline: 'none', fill: fillColor === '#DDD' ? '#888' : fillColor, opacity: 0.8 },
                          pressed: { outline: 'none' }
                        }}
                      />
                    );
                  });
                }}
              </Geographies>
            </ComposableMap>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '20px', height: '20px', backgroundColor: '#4CAF50' }}></div>
                <span style={{ color: '#333', fontSize: '12px' }}>Positive</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '20px', height: '20px', backgroundColor: '#ff9800' }}></div>
                <span style={{ color: '#333', fontSize: '12px' }}>Mixed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '20px', height: '20px', backgroundColor: '#f44336' }}></div>
                <span style={{ color: '#333', fontSize: '12px' }}>Negative</span>
              </div>
            </div>
          </div>

          <h4 style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Top Key Phrases</h4>
          <div style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: '#f5f5f5', marginTop: '5px' }}>
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
          <ResponsiveContainer width="100%" height={400} minWidth={0}>
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
                .map(([name, count]) => ({ 
                  name: name.length > 30 ? name.substring(0, 30) + '...' : name, 
                  count 
                }));
            })()} layout="vertical" margin={{ left: 10, right: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" width={150} tick={{ fontSize: 10 }} />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>

          <h4 style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Entity Types Distribution</h4>
          <div style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: '#f5f5f5', marginTop: '5px' }}>
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
          <ResponsiveContainer width="100%" height={300} minWidth={0}>
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
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#00C49F" />
            </BarChart>
          </ResponsiveContainer>

          <h4 style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Geographic Mentions (Locations from Reviews)</h4>
          <div style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: '#f5f5f5', marginTop: '5px' }}>
            <p style={{ marginBottom: '8px' }}>
              Shows location entities mentioned in customer reviews. This geographic analysis helps identify regional trends, 
              understand where customers are talking about, and discover location-specific feedback patterns for targeted improvements.
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300} minWidth={0}>
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
            })()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} interval={0} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#FF5722" />
            </BarChart>
          </ResponsiveContainer>

          <h4 style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Price Complaints by Location</h4>
          <div style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: '#f5f5f5', marginTop: '5px' }}>
            <p style={{ marginBottom: '8px' }}>
              Combines sentiment analysis with entity recognition to identify which geographic regions have the most price-related complaints. 
              This targeted analysis helps companies understand regional pricing sensitivity and adjust strategies accordingly. Critical for 
              international pricing decisions and market-specific promotions.
            </p>
            <p style={{ marginBottom: '5px', fontWeight: 'bold' }}>Examples:</p>
            <p style={{ margin: '2px 0' }}>1. Apple adjusts iPhone pricing by region based on complaint patterns</p>
            <p style={{ margin: '2px 0' }}>2. Netflix offers different subscription tiers in price-sensitive markets</p>
            <p style={{ margin: '2px 0' }}>3. Amazon Prime varies pricing based on regional affordability feedback</p>
          </div>
          <ResponsiveContainer width="100%" height={300} minWidth={0}>
            <BarChart data={(() => {
              const locationPriceComplaints = {};
              results.analysis_results.forEach(item => {
                const reviewText = item.original_review?.review_text || item.original_review?.text || '';
                const hasPriceComplaint = reviewText.toLowerCase().includes('price') || 
                                         reviewText.toLowerCase().includes('expensive') || 
                                         reviewText.toLowerCase().includes('costly') ||
                                         reviewText.includes('$1,499');
                
                if (hasPriceComplaint) {
                  item.entities?.forEach(entity => {
                    if (entity.Type === 'LOCATION') {
                      const loc = entity.Text;
                      locationPriceComplaints[loc] = (locationPriceComplaints[loc] || 0) + 1;
                    }
                  });
                }
              });
              return Object.entries(locationPriceComplaints)
                .sort((a, b) => b[1] - a[1])
                .map(([name, count]) => ({ name, count }));
            })()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} interval={0} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#f44336" name="Price Complaints" />
            </BarChart>
          </ResponsiveContainer>

          <h4 style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Part-of-Speech Distribution</h4>
          <div style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: '#f5f5f5', marginTop: '5px' }}>
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
          <ResponsiveContainer width="100%" height={300} minWidth={0}>
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

          <h4 style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>PII Detection Summary</h4>
          <div style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: '#f5f5f5', marginTop: '5px', marginBottom: '10px' }}>
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
          
          <h4 style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Raw Comprehend Analysis Results:</h4>
          <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '3px', fontSize: '12px', overflow: 'auto', color: 'black', maxWidth: '100%' }}>
            {JSON.stringify(results, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
