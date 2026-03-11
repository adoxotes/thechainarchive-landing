import React from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import CodeExplorer from "./components/CodeExplorer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-overlay"></div>
      <div className="container">
        <div className="main-layout">
          <div className="left-column">
            <Header />
            <Stats />
          </div>
          <div className="right-column">
            <h2 className="codex-heading">THE DEVELOPER CODEX</h2>
            <CodeExplorer />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
