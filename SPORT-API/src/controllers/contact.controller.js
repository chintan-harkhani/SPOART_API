const { ContactService } = require("../services");

//create contact
const Createcontact = async (req, res) => {
    try {
        const reqBody = req.body;
        const Email_id = await ContactService.ContactEmail(reqBody.email_Id);
        if (Email_id) {
            throw new Error("Conatct Email Already  Created by (" + Email_id.email_Id + ") This Email  , Please Create Other Email..")
        }
        const contact = await ContactService.CreateContact(reqBody);
        if (!contact) {
            throw new Error("contact Not Created , Please try again later !...");
        }
        res.status(200).json({
            success: true,
            message: "contact SuccessFully  created..!",
            data: contact
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//contact list
const ContactList = async (req, res) => {
    try {
        const List = await ContactService.ContactList(req, res);
        res.status(200).json({
            success: true,
            message: "Contact  List SuucessFully Get...!",
            data: List
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//contact id
const ContactId = async (req, res) => {
    try {
        const contactId = req.params.contactId;
        const ID = await ContactService.contactId(contactId);
        if (!ID) {
            throw new Error("Contact Data Not Found.....!");
        };
        res.status(200).json({
            success: true,
            message: "SuccessFully  Contact Data Get .....!",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//update contact
const UpdateContact = async (req, res) => {
    try {
        const contactId = req.params.contactId;
        const ID = await ContactService.contactId(contactId);
        if (!ID) {
            throw new Error("Contact Data Not Found.....!");
        };
        await ContactService.UpdateContact(contactId , req.body);
        res.status(200).json({
            success :true,
            message:"SuccessFully Contact Data Updated Details...!",
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//delete contact
const DeleteContact = async (req,res)=>{
     try {
        const contactId = req.params.contactId;
        const ID = await ContactService.contactId(contactId);
        if (!ID) {
            throw new Error("Contact Data Not Found.....!");
        };
        await  ContactService.DeleteContact(contactId);
        res.status(200).json({
            success :true,
            message : "SuccessFully Contact Data Deleted....!",
        });
     } catch (error) {
        res.status(400).json({ success: false, message: error.message });
     }
}

//export in all function async
module.exports = {
    Createcontact,
    ContactList,
    ContactId,
    UpdateContact,
    DeleteContact
}