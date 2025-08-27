import { useState } from "react";

function DomainSearch() {
  const [domain, setDomain] = useState("");
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]);

  const handleSearch = () => {
    if (domain.trim() === "") return;

    const tlds = [".com", ".net", ".org", ".ai", ".io"];
    const availability = tlds.map(tld => ({
      name: domain + tld,
      available: Math.random() > 0.5 // mock random availability
    }));

    setResults(availability);
    setHistory([domain, ...history]); // add current search to history
    setDomain(""); // clear input after search
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1 style={{ color: "#2563eb" }}>Domain Availability Checker</h1>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter domain name..."
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
          style={{ padding: "10px", width: "250px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button
          onClick={handleSearch}
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold"
          }}
        >
          Check
        </button>
      </div>

      {/* Search History */}
      {history.length > 0 && (
        <div style={{ marginTop: "30px", fontStyle: "italic" }}>
          <h3>Search History:</h3>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px" }}>
            {history.map((h, idx) => (
              <span
                key={idx}
                style={{
                  padding: "5px 10px",
                  borderRadius: "5px",
                  backgroundColor: "#e0e7ff",
                  color: "#1e3a8a",
                  fontWeight: "bold",
                  fontSize: "14px"
                }}
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "15px" }}>
        {results.map((res, idx) => (
          <div
            key={idx}
            style={{
              padding: "15px 20px",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              minWidth: "180px",
              backgroundColor: res.available ? "#dcfce7" : "#fee2e2",
              color: res.available ? "#166534" : "#991b1b",
              fontWeight: "bold",
              fontSize: "16px",
              transition: "transform 0.2s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {res.name} <br /> {res.available ? "✅ Available" : "❌ Taken"}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DomainSearch;



