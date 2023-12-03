const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000 || process.env.PORT;

app.get("/", async (req, res) => {
  try {
    // Fetch data from NSE India API
    const response = await axios.get(
      "https://www.nseindia.com/api/marketStatus"
    );

    // Send the API response as the server response
    res.json(response.data);
  } catch (error) {
    // Handle errors
    console.error("Error fetching data from NSE India API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
