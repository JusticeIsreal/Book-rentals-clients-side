import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";

import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONETS
import Topbar from "./Components/Topbar";
import Sidebar from "./Components/Sidebar";
import Store from "./Pages/Store";
// PAGES
import AdminDashboard from "./Pages/AdminDashboard";
function App() {
  return (
    <div>
      <Router>
        <Topbar />
        <Sidebar />
        <Routes>
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
