import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Update from "./Pages/Update";
import Home from "./Pages/Home";
import Userdata from "./Pages/Userdata";

function App() {
  const [showUserData, setShowUserData] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userdata" element={<Userdata />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
