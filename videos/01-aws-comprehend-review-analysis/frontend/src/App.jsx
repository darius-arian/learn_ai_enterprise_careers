import { useState } from "react";

function App() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const analyze = async () => {
    if (!file) {
      alert("Upload a JSON file first");
      return;
    }

    setStatus("Sending file to backend...");

    try {
      await fetch("http://localhost:3001/analyze", {
        method: "POST",
        body: (() => {
          const fd = new FormData();
          fd.append("file", file);
          return fd;
        })(),
      });

      setStatus(" Request accepted (200 OK)");
    } catch {
      setStatus(" Request failed");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>AI Review Analyzer</h1>

      <input type="file" accept=".json" onChange={onFileChange} />
      <br /><br />

      <button onClick={analyze}>Analyze Reviews</button>

      <p>{status}</p>
    </div>
  );
}

export default App;
