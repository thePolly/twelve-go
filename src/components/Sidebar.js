import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside style={{ width: "200px", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <nav>
        <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
          <li>
            <NavLink 
              to="/" 
              style={({ isActive }) => ({
                display: "block",
                padding: "10px 20px",
                textDecoration: "none",
                color: isActive ? "white" : "black",
                background: isActive ? "black" : "transparent",
                borderRadius: "20px"
              })}
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/goals" 
              style={({ isActive }) => ({
                display: "block",
                padding: "10px 20px",
                textDecoration: "none",
                color: isActive ? "white" : "black",
                background: isActive ? "black" : "transparent",
                borderRadius: "20px"
              })}
            >
              Goals
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
