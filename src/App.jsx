import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import HydrationPage from "./pages/HydrationPage";
import SideNavbar from "./components/SideNavbar";
import TopNavbar from "./components/TopNavbar";
import SleepPage from "./pages/SleepPage";
import './App.css'; // Import your CSS file for custom styles
import DiaryLog from "./pages/DiaryLog";
import HomePage from "./pages/HomePage";



function App() {
  return (
    <Router>
      <div className="App flex flex-col h-screen">

        <TopNavbar />
        <div className="App" style={{ display: "flex", height: "100vh" }}>
          {/* Sidebar */}
          <SideNavbar />
          <div style={{ flex: 1, overflowY: "auto", }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/hydration" element={<HydrationPage />} />
              <Route path="/sleep" element={<SleepPage />} />
              <Route path="/diary" element={<DiaryLog/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
