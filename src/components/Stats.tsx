import React from "react";
import {
  ShieldCheckIcon,
  NetworkIcon,
  LightningIcon,
} from "@phosphor-icons/react";

const Stats: React.FC = () => {
  return (
    <section className="stats-grid">
      <div className="stat-card">
        <ShieldCheckIcon size={32} />
        <h3>Private</h3>
        <div className="value">RSA</div>
        <p>Encrypted</p>
      </div>
      <div className="stat-card">
        <NetworkIcon size={32} />
        <h3>Cost</h3>
        <div className="value">0.01$</div>
        <p>On Polygon</p>
      </div>
      <div className="stat-card">
        <LightningIcon size={32} />
        <h3>Latency</h3>
        <div className="value">&lt; 1s</div>
        <p>To Confirmation</p>
      </div>
    </section>
  );
};

export default Stats;
