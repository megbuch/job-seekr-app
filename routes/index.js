const express = require("express");
const router = express.Router();
const passport = require("passport");
const ensureAuth = require("../config/ensureAuth");

// GET landing page/home page
router.get("/", function (req, res, next) {
  res.render("index");
});

// Authentication
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
    failureRedirect: "/",
  })
);

router.get("/logout", function (req, res) {
  req.logout(function () {
    res.redirect("/");
  });
});

module.exports = router;
