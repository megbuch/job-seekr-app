const express = require("express");
const router = express.Router();
const passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/jobs",
    failureRedirect: "/jobs",
  })
);

router.get("/logout", function (req, res) {
  req.logout(function () {
    res.redirect("/jobs");
  });
});

module.exports = router;
