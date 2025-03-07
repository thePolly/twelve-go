import React from "react";

const Footer = () => {
  return (
    <footer style={{ padding: "10px", background: "#282c34", color: "white", textAlign: "center" }}>
      <p>&copy;  {new Date().getFullYear()} TwelveGo</p>
    </footer>
  );
};

export default Footer;