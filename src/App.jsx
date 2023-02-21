import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";

import AdminDashboard from "./Pages/AdminDashboard";
function App() {
  return (
    <div
      style={{
        border: "2px solid blue",
      }}
    >
      <AdminDashboard />
    </div>
  );
}

export default App;
