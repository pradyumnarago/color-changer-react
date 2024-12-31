import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("");
  const [log, setLog] = useState([]);
  const [ip,setIp] = useState('192.168.1.10')

  // useEffect(() => {
  //   axios.get("http://localhost:6000/api/get-local-ip").then((response) => {
  //     setIp(response.ip);
  //   });
  // }, []);

  // Fetch color log from backend
  useEffect(() => {
    axios.get(`http://${ip}:5000/api/colors`).then((response) => {
      setLog(response.data);
    });
  }, []);
  document.body.style.backgroundColor = log[log.length-1]; // Change background color
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!color) return;

    try {
      await axios.post(`http://${ip}:5000/api/colors`, { color });
      setLog((prevLog) => [...prevLog, color]);
      document.body.style.backgroundColor = color; // Change background color
      setColor(""); // Clear input field
    } catch (error) {
      console.error("Error adding color:", error);
    }
  };

  return (
    <div className="app">
      <h1>Color Changer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Enter a color"
        />
        <button type="submit">Change Color</button>
      </form>
      <h2>Color Log:</h2>
      <ul>
        {log.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
