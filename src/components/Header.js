import React from "react";
import "./Header.css";
function Header({ children }) {
  return (
    <>
      <header className="header">
        <h1>IP Address Tracker</h1>
        {children}
      </header>
    </>
  );
}

export default Header;
