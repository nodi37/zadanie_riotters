const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 3001;
const apiKey = "73e01408-c306-420e-aec6-6cff2c901f03";

app.use(
  cors({
    origin: "*",
  })
);

app.get("/currencies/", async (req, res) => {
  try {
    //throw Error('test-error')
    const response = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=4&convert=USD", {
      headers: {
        "X-CMC_PRO_API_KEY": apiKey,
      },
    });

    res.status(200).json(response.data.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true });
  }
});

app.get("/currency-info/:currencySymbol", async (req, res) => {
  try {
    const response = await axios.get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?symbol=${req.params.currencySymbol}`, {
      headers: {
        "X-CMC_PRO_API_KEY": apiKey,
      },
    });
    res.status(200).json(response.data.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true });
  }
});

app.listen(port, () => {
  console.log(`[AppInit] App works on port: ${port}`);
});
