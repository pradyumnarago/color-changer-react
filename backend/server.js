const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

const PORT = 5000;
const LOG_FILE = "colors.json";

// Middleware
app.use(cors());
app.use(express.json());

// Ensure `colors.json` exists
if (!fs.existsSync(LOG_FILE)) {
  fs.writeFileSync(LOG_FILE, JSON.stringify([]));
}

// Get colors
app.get("/api/colors", (req, res) => {
  try {
    const colors = JSON.parse(fs.readFileSync(LOG_FILE, "utf8"));
    res.json(colors);
  } catch (err) {
    res.status(500).json({ error: "Failed to read colors" });
  }
});

// Add a new color
app.post("/api/colors", (req, res) => {
  const { color } = req.body;
  if (!color) return res.status(400).json({ error: "Color is required" });

  try {
    const colors = JSON.parse(fs.readFileSync(LOG_FILE, "utf8"));
    colors.push(color);
    fs.writeFileSync(LOG_FILE, JSON.stringify(colors, null, 2));
    res.status(201).json({ message: "Color added", color });
  } catch (err) {
    res.status(500).json({ error: "Failed to save color" });
  }
});

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://${getLocalIp()}:${PORT}`);
});

// Utility to get your LAN IP
const os = require("os");
function getLocalIp() {
  const networkInterfaces = os.networkInterfaces();
  for (const iface in networkInterfaces) {
    for (const alias of networkInterfaces[iface]) {
      if (alias.family === "IPv4" && !alias.internal) {
        return alias.address;
      }
    }
  }
  return "localhost"; // Fallback if no LAN IP is found
}
