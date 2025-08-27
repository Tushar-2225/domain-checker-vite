import { useState } from "react";
import "./DomainSearch.css";

function DomainSearch() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = () => {
    if (domain.trim() === "") {
      setResult("❌ Please enter a domain");
      setSuggestions([]);
    } else {
      const available = domain.endsWith(".com");
      setResult(
        available ? `✅ ${domain} is available!` : `❌ ${domain} is not available`
      );

      const aiSuggestions = [
        `${domain}Online.com`,
        `${domain}Hub.com`,
        `My${domain}.com`,
      ];
      setSuggestions(aiSuggestions);
    }
  };

  return (
    <div className="container">
      <h2>Domain Availability Checker</h2>
      <input
        type="text"
        placeholder="Enter domain name..."
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
      />
      <button onClick={handleSearch}>Check</button>

      <p className="result">{result}</p>

      {suggestions.length > 0 && (
        <div className="suggestions">
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
