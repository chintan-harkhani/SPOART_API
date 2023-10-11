const express = require("express");
const { ContactController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { ContactValidation } = require("../../validations")
const router = express.Router();

//create contact
router.post("/createcontact",
    validate(ContactValidation.CreateContact),
    ContactController.Createcontact
)

//contact list
router.get("/contactlist",
    ContactController.ContactList,
)

//Contact id
router.get("/contactlist/:contactId",
    ContactController.ContactId
)

//Contact update
router.put("/updatecontact/:contactId",
    ContactController.UpdateContact
)

//delete Contact
router.delete("/deletecontact/:contactId",
   ContactController.DeleteContact
)
module.exports = router;