const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ----- Middleware ----- //
app.use(cors());
app.use(express.json());

// ----- Routes ----- //
// Mount router exported from routes/index.js
app.use("/api", require("./routes"));

// ----- Home Route (optional) ----- //
app.get("/", (req, res) => {
  res.send("Crowd Funding Platform Backend Running");
});

// ----- 404 Handler ----- //
app.use((req, res) => {
  res.status(404).send("404 Error");
});

// ----- Start Server ----- //
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running successfully on port ${PORT}`);
});
