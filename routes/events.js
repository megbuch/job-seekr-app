const express = require("express");
const router = express.Router();
const eventsCtrl = require("../controllers/events");
const ensureAuth = require("../config/ensureAuth");

// POST /jobs/events
router.post("/:id/events", ensureAuth, eventsCtrl.create);

// DELETE /jobs/events
router.delete("/events/:id", ensureAuth, eventsCtrl.delete);

module.exports = router;
