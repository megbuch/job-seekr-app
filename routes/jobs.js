const express = require("express");
const router = express.Router();
const jobsCtrl = require("../controllers/jobs");

router.get("/", jobsCtrl.index);

module.exports = router;
