import DomainSearch from "./components/DomainSearch";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // full screen height
        background: "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >
      <DomainSearch />
    </div>
  );
}

export default App;
