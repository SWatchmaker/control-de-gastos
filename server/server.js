const express = require("express");
const app = express();
const path = require("path");
const public = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

app.use(express.static(public));

app.get("*", (req, res) => {
  res.sendFile(path.join(public, "index.html"));
});

app.listen(port, () => {
  console.log("Servidor en línea!");
});
process.en;
