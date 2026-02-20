import React from "react";
import "./FilingCabinet.css";

interface DrawerProps {
  position: "top" | "bottom";
}

const Drawer: React.FC<DrawerProps> = ({ position }) => {
  return (
    <div className={`cabinet-drawer cabinet-drawer--${position}`}>
      <details>
        <summary></summary>
      </details>
      <div className="cabinet-drawer__structure">
        <div className="cabinet-drawer__panel cabinet-drawer__panel--left"></div>
        <div className="cabinet-drawer__panel cabinet-drawer__panel--right"></div>
        <div className="cabinet-drawer__panel cabinet-drawer__panel--bottom"></div>
        <div className="cabinet-drawer__panel cabinet-drawer__panel--back"></div>
      </div>
    </div>
  );
};

const FilingCabinet: React.FC = () => {
  return (
    <div className="cabinet-container">
      <div className="cabinet">
        <div className="cabinet__panel cabinet__panel--back"></div>
        <div className="cabinet__panel cabinet__panel--front">
          <div className="cabinet__panel cabinet__panel--front-frame"></div>
        </div>
        <div className="cabinet__panel cabinet__panel--top"></div>
        <div className="cabinet__panel cabinet__panel--bottom"></div>
        <div className="cabinet__panel cabinet__panel--left"></div>
        <div className="cabinet__panel cabinet__panel--right"></div>

        <Drawer position="top" />
        <Drawer position="bottom" />
      </div>
    </div>
  );
};

export default FilingCabinet;
