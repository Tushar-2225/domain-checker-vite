import { useState } from "react";

function DomainSearch() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = () => {
    if (domain.trim() === "") {
      setResult("❌ Please enter a domain");
      setSuggestions([]);
    } else if (domain.endsWith(".com")) {
      setResult(`✅ ${domain} is available!`);
      const aiSuggestions = [
        `${domain}Online.com`,
        `${domain}Hub.com`,
        `My${domain}.com`,
      ];
      setSuggestions(aiSuggestions);
    } else {
      setResult(`❌ ${domain} is not available`);
      setSuggestions([]);
    }
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
        textAlign: "center",
        width: "400px",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#333" }}>
        Domain Availability Checker
      </h2>

      <input
        type="text"
        placeholder="Enter domain name..."
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        style={{
          padding: "10px",
          width: "65%",
          marginRight: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 18px",
          borderRadius: "6px",
          border: "none",
          background: "#667eea",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Check
      </button>

      <p style={{ marginTop: "20px", fontSize: "18px" }}>{result}</p>

      {suggestions.length > 0 && (
        <div style={{ marginTop: "15px", fontSize: "16px" }}>
          <strong>AI-powered suggestions:</strong>
          <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
            {suggestions.map((s, index) => (
              <li key={index} style={{ marginBottom: "5px" }}>
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DomainSearch;


