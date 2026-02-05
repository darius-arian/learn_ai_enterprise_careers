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
