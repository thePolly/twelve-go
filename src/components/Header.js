import React from "react";
import profile from "../assets/profile.PNG";


const Header = () => {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center", 
      padding: "10px 20px",
      height: "60px",
      background: "#282c34",
      color: "white"
    }}>

      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        TwelveGo
      </div>

      <button 
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "0"
        }}
        onClick={() => console.log("profile")
        } 
      >
        <img 
          src={profile} 
          alt="User Avatar"
          style={{ 
            width: "40px", 
            height: "40px", 
            borderRadius: "50%",
            objectFit: "cover" 
          }} 
        />
      </button>
    </header>
  );
};

export default Header;