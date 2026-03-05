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
    code: `...`,
  },
  cli: {
    title: "Command Line Interface",
    label: "SHELL",
    code: `# Install
  # Output: Success. Artifact stored at ...`,
  },
  sol: {
    title: "Cross-Chain Storage Bridge",
    label: "SOLIDITY",
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

...
`,
  },
};

const CodeExplorer: React.FC = () => {
  const [activeLang, setActiveLang] = useState<Language>("python");
  const [isFading, setIsFading] = useState(false);

  const handleLangChange = (lang: Language) => {
    setIsFading(true);
    setTimeout(() => {
      setActiveLang(lang);
      setIsFading(false);
    }, 200);
  };

  const currentSnippet = snippets[activeLang];

  return (
    <section id="explorer" className="explorer-section">
      <aside className="explorer-sidebar">
        <h4>API Documentation</h4>
        <div
          className={`nav-item ${activeLang === "python" ? "active" : ""}`}
          onClick={() => handleLangChange("python")}
        >
          <FilePyIcon size={20} /> Python API
        </div>
        <div
          className={`nav-item ${activeLang === "cli" ? "active" : ""}`}
          onClick={() => handleLangChange("cli")}
        >
          <TerminalWindowIcon size={20} /> Command Line
        </div>
        <div
          className={`nav-item ${activeLang === "sol" ? "active" : ""}`}
          onClick={() => handleLangChange("sol")}
        >
          <CurrencyEthIcon size={20} /> Solidity Interface
        </div>
      </aside>

      <main
        className="code-display"
        style={{
          opacity: isFading ? 0 : 1,
          transition: "opacity 0.2s ease",
        }}
      >
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
