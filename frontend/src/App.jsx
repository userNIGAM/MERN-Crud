import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Userdata from "./Pages/Userdata";

function App() {
  const [showUserData, setShowUserData] = useState(false);

  return (
    <div className="relative min-h-screen p-0 bg-gray-100">
      {/* Top-right button */}
      <div className="absolute top-4 right-4">
        {showUserData ? (
          <button
            onClick={() => setShowUserData(false)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            ⬅ Back
          </button>
        ) : (
          <button
            onClick={() => setShowUserData(true)}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Show Data
          </button>
        )}
      </div>

      {showUserData ? <Userdata /> : <Home />}
    </div>
  );
}

export default App;
