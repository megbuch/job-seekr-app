const express = require("express");
const router = express.Router();
const contactsCtrl = require("../controllers/contacts");
const ensureAuth = require("../config/ensureAuth");

// POST /jobs/events
router.post("/:id/contacts", ensureAuth, contactsCtrl.create);

module.exports = router;
