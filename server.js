const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();

const url =
  "https://a2cf48a7-7b9f-4a15-b1de-f45bbead1186-westeurope.apps.astra.data";
const token =
  "AstraCS:hzaoXEtBWQULqxZBOMODapii:7a0f226cc252255b63db9e8244b8ff7f626d2abc3fec5bab89921a28bc06ed66";

app.post("/tickets", async (req, res) => {
  const formData = req.body.formData;

  const options = {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
      "Content-Type": "application/json",
    },
    data: formData,
  };

  try {
    const response = await axios(url , options)
  } catch (error) {
    
  }
});

app.listen(PORT, () => console.log("server run on PORT " + PORT));
