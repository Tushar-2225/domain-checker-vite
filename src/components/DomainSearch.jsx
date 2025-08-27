import { useState } from "react";

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
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#0070f3" }}>
        Domain Availability Checker
      </h2>
      <input
        type="text"
        placeholder="Enter domain name..."
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        style={{
          padding: "10px",
          width: "70%",
          borderRadius: "6px",
          border: "1px solid #ccc",
          marginBottom: "15px",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#0070f3",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Check
      </button>

      <p
        style={{
          marginTop: "20px",
          fontSize: "18px",
          color: domain.endsWith(".com") ? "green" : "red",
        }}
      >
        {result}
      </p>

      {suggestions.length > 0 && (
        <div
          style={{
            marginTop: "15px",
            fontSize: "16px",
            textAlign: "left",
          }}
        >
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