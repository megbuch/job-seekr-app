const express = require("express");
const router = express.Router();
const contactsCtrl = require("../controllers/contacts");
const ensureAuth = require("../config/ensureAuth");

// POST /jobs/contacts
router.post("/:id/contacts", ensureAuth, contactsCtrl.create);

// DELETE /jobs/contacts
// router.delete("/:id/contacts", ensureAuth, contactsCtrl.delete);

module.exports = router;
