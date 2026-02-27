import React from "react";

const Stats: React.FC = () => {
  return (
    <section className="stats-grid">
      <div className="stat-card">
        <i className="fas fa-shield-halved"></i>
        <h3>Private</h3>
        <div className="value">RSA</div>
        <p>Encrypted</p>
      </div>
      <div className="stat-card">
        <i className="fas fa-network-wired"></i>
        <h3>Cost</h3>
        <div className="value">0.01$</div>
        <p>On Polygon</p>
      </div>
      <div className="stat-card">
        <i className="fas fa-bolt"></i>
        <h3>Latency</h3>
        <div className="value">&lt; 1s</div>
        <p>To Confirmation</p>
      </div>
    </section>
  );
};

export default Stats;
