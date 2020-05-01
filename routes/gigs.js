const express = require("express");
const router = express.Router();
const db = require("../config/db");
const Gig = require("../models/Gigs");

router.route("/").get((req, res) =>
  Gig.findAll()
    .then((data) => {
      console.log(data);
      res.json({ 200: "dasd" });
    })
    .catch((err) => console.log(err))
);

module.exports = router;
