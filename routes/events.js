const express = require("express");
const router = express.Router();
const eventsCtrl = require("../controllers/events");
const ensureAuth = require("../config/ensureAuth");

//POST /jobs/:id/events
router.post("/jobs/:id/events", ensureAuth, eventsCtrl.create);

//DELETE /events/:id
router.delete("/events/:id", ensureAuth, eventsCtrl.delete);

module.exports = router;
