const express = require("express");
let router = express.Router();

// Rota - Home do campeonato
router.get("/", (req, res) => {
  res.render("pages/index");
});

module.exports = router;
