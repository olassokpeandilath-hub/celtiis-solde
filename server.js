const express = require("express");
const app = express();

app.use(express.json());

let lastData = {
  solde: "0",
  time: new Date()
};

app.post("/update", (req, res) => {
  lastData.solde = req.body.solde;
  lastData.time = new Date();

  res.json({
    success: true
  });
});

app.get("/get", (req, res) => {
  res.json(lastData);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Serveur démarré");
});
