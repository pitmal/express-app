const express = require("express");
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
  res.render("admin", { title: "Admin" });
  console.log(req.session.admin);
});

module.exports = router;
