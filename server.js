
const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());

// Serve static files from current directory
app.use(express.static(path.join(__dirname, '.')));

// API endpoint
app.post('/api/check_scam', (req, res) => {
  const wallet = req.body.wallet;
  let risk_score = Math.floor(Math.random() * 101);
  let verdict = "Safe";
  if (risk_score > 70) verdict = "Likely Scam";
  else if (risk_score > 30) verdict = "Suspicious";

  res.json({
    wallet,
    risk_score,
    verdict
  });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});