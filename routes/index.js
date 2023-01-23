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
    successRedirect: "/dashboard",
    failureRedirect: "/",
  })
);

router.get("/logout", function (req, res) {
  req.logout(function () {
    res.redirect("/");
  });
});

// GET /dashboard
router.get("/dashboard", ensureAuth, function (req, res) {
  res.render("dashboard", {
    name: req.user.firstName,
  });
});

module.exports = router;
