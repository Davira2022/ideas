import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [tips, setTips] = useState("");
  const fetchTips = async () => {
  const response = await fetch(
      "https://www.boredapi.com/api/activity/"
    );
  const data = await response.json();
  setTips(data.activity);
  };

  useEffect(() => {
    fetchTips();
  }, []);

  return (
    <div className="App">
          <h1>No more plans? Get some ideas!</h1>
          <p> {tips} </p>
          <button className="btn" onClick={fetchTips}>New Tip</button>
    </div>
  );
}

export default App;
