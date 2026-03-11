import React, { useState } from "react";
import {
  FilePyIcon,
  TerminalWindowIcon,
  CurrencyEthIcon,
} from "@phosphor-icons/react";

type Language = "python" | "cli" | "sol";

interface Snippet {
  title: string;
  label: string;
  code: string;
}

const snippets: Record<Language, Snippet> = {
  python: {
    title: "On-Chain Storage",
    label: "PYTHON",
    code: `# Store data on Polygon
from chainarchive import Archive

client = Archive("POLYGON_RPC")
client.store("Sensitive data summary", encryption="RSA")`,
  },
  cli: {
    title: "Command Line Interface",
    label: "SHELL",
    code: `# Install
pip install chainarchive

# Store file
chainarchive store ./data.json --network polygon --encrypt`,
  },
  sol: {
    title: "Cross-Chain Storage Bridge",
    label: "SOLIDITY",
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

import "@chainarchive/contracts/Archive.sol";

contract DataBridge {
    function archive(bytes32 dataHash) external {
        Archive.store(dataHash);
    }
}`,
  },
};

const CodeExplorer: React.FC = () => {
  const [activeLang, setActiveLang] = useState<Language>("python");

  const currentSnippet = snippets[activeLang];

  return (
    <section id="explorer" className="explorer-section">
      <div className="decor-corner tl"></div>
      <div className="decor-corner tr"></div>
      <div className="decor-corner bl"></div>
      <div className="decor-corner br"></div>
      
      <aside className="explorer-sidebar">
        <h4>API Documentation</h4>
        <div
          className={`nav-item ${activeLang === "python" ? "active" : ""}`}
          onClick={() => setActiveLang("python")}
        >
          <FilePyIcon size={20} /> Python API
        </div>
        <div
          className={`nav-item ${activeLang === "cli" ? "active" : ""}`}
          onClick={() => setActiveLang("cli")}
        >
          <TerminalWindowIcon size={20} /> Command Line
        </div>
        <div
          className={`nav-item ${activeLang === "sol" ? "active" : ""}`}
          onClick={() => setActiveLang("sol")}
        >
          <CurrencyEthIcon size={20} /> Solidity Interface
        </div>
      </aside>

      <main className="code-display">
        <div className="code-header">
          <span style={{ fontWeight: "bold", fontFamily: "Cinzel" }}>
            {currentSnippet.title}
          </span>
          <span className="lang-badge">{currentSnippet.label}</span>
        </div>
        <pre>{currentSnippet.code}</pre>
      </main>
    </section>
  );
};

export default CodeExplorer;
