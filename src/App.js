import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
     <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "20px" }}>Welcome to TwelveGo!</main>
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
