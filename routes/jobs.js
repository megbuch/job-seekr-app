const express = require("express");
const router = express.Router();
const jobsCtrl = require("../controllers/jobs");
const ensureAuth = require("../config/ensureAuth");

// GET /jobs
router.get("/", ensureAuth, jobsCtrl.index);

// GET /jobs/new
router.get("/new", ensureAuth, jobsCtrl.new);

// POST /jobs
router.post("/", ensureAuth, jobsCtrl.create);

module.exports = router;
