const express = require("express");
const db = require("../../models/userModels");
const mw = require("../../middleware");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await db.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ err, message: "Internal Server Error!" });
  }
});

router.post("/", mw.hashPass, async (req, res) => {
  try {
    const data = await db.add(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ err, message: "Internal Server Error!" });
  }
});

module.exports = router;
