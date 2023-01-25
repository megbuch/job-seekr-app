const express = require("express");
const router = express.Router();
const contactsCtrl = require("../controllers/contacts");
const ensureAuth = require("../config/ensureAuth");

//POST /jobs/:id/contacts
router.post("/jobs/:id/contacts", ensureAuth, contactsCtrl.create);

//DELETE /contacts/:id
router.delete("/contacts/:id", ensureAuth, contactsCtrl.delete);

module.exports = router;
