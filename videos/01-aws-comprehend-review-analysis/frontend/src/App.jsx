import { useState } from "react";

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
    <div style={{ padding: 40 }}>
      <h1>test-feature</h1>

      <input type="file" accept=".json" onChange={onFileChange} />
      <br /><br />

      <button onClick={analyze}>Analyze Reviews</button>
      <button 
        onClick={seeResults} 
        disabled={!analysisComplete}
        style={{
          marginLeft: 10,
          backgroundColor: analysisComplete ? '#4CAF50' : '#cccccc',
          color: analysisComplete ? 'white' : '#666666',
          cursor: analysisComplete ? 'pointer' : 'not-allowed'
        }}
      >
        See Results
      </button>

      <p>{status}</p>
      
      {expectedResultFile && (
        <div style={{ marginTop: 10, padding: 10, backgroundColor: '#e8f4fd', borderRadius: 5, border: '1px solid #b3d9ff' }}>
          <strong>Expected Result File:</strong> {expectedResultFile}
        </div>
      )}

      {results && (
        <div style={{ marginTop: 20, padding: 20, border: '1px solid #ccc', borderRadius: 5 }}>
          <h3>Analysis Results</h3>
          <p><strong>Source File:</strong> {results.source_file}</p>
          <p><strong>Processed At:</strong> {results.processed_at}</p>
          <p><strong>Total Reviews:</strong> {results.total_reviews}</p>
          
          <h4>Sample Results:</h4>
          <pre style={{ backgroundColor: '#f5f5f5', padding: 10, borderRadius: 3, fontSize: 12, overflow: 'auto', color: 'black' }}>
            {JSON.stringify(results, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
