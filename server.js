const express = require("express");
const path = require("path");
// Task 1: Import axios
const axios = require("axios");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});
// Task 3: Create the API Route
app.get("/api/fun-fact", async (req, res) => {
  try {
    // Task 4
    const response = await axios.get(
      "https://uselessfacts.jsph.pl/api/v2/facts/random"
    );

    // Task 5
    const funFact = response.data.text;
    res.json({ fact: funFact });
  } catch (error) {
    //  Error handling
    console.error("Error fetching fun fact:", error.message);
    res.status(500).json({ error: "Could not fetch fun fact" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(
    `Test routes: http://localhost:${PORT}/contact, http://localhost:${PORT}/api/fun-fact`
  );
});
