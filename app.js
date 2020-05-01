const express = require("express");
const path = require("path");
const sequl = require("./config/db");
const gigs = require("./routes/gigs");

sequl
  .authenticate()
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

const app = express();

app.get("/", (req, res) => {
  res.send("Index");
});

//Routes
app.use("/gigs", gigs);

app.listen(3000, () => {
  console.log("Server Started");
});
