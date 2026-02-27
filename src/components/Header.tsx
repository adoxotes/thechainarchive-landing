import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <div className="decor-corner tl"></div>
      <div className="decor-corner tr"></div>
      <div className="decor-corner bl"></div>
      <div className="decor-corner br"></div>

      <h1>The Chain Archive</h1>
      <p className="tagline">
        Store infrequent data on popular blockchains in a private, decentralized
        and immutable manner.
      </p>
    </header>
  );
};

export default Header;
