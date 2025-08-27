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

      // Simple AI-style domain suggestions
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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Domain Availability Checker</h2>
      <input
        type="text"
        placeholder="Enter domain name..."
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        style={{ padding: "8px", width: "250px", marginRight: "10px" }}
      />
      <button
        onClick={handleSearch}
        style={{ padding: "8px 16px", cursor: "pointer" }}
      >
        Check
      </button>

      <p style={{ marginTop: "20px", fontSize: "18px" }}>{result}</p>

      {suggestions.length > 0 && (
        <div style={{ marginTop: "10px", fontSize: "16px" }}>
          <strong>AI-powered suggestions:</strong>
          <ul>
            {suggestions.map((s, index) => (
              <li key={index}>{s}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DomainSearch;



