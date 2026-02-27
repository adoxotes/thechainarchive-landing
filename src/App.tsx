import React from 'react';
import Header from './components/Header';
import Stats from './components/Stats';
import CodeExplorer from './components/CodeExplorer';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="bg-overlay"></div>
      <div className="container">
        <Header />
        <Stats />
        <h2 style={{ fontFamily: 'Cinzel', textAlign: 'center', color: 'var(--gold)', marginBottom: '2rem' }}>
          THE DEVELOPER CODEX
        </h2>
        <CodeExplorer />
        <Footer />
      </div>
    </>
  );
}

export default App;
