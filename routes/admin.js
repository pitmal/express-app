const express = require("express");
const News = require("../models/news");
const router = express.Router();

/* GET home page. */
router.all("*", (req, res, next) => {
  if (!req.session.admin) {
    res.redirect("/login");
    return;
  }
  next();
});
router.get("/", (req, res) => {
  const newsData = new News({
    title: "testowy news",
    description: "testowy opis"
  });
  newsData.save(err => {
    console.log(err);
  });
  res.render("admin", { title: "Admin" });
});

module.exports = router;
