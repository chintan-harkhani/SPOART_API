const {contact} = require("../models");

//create contact
const CreateContact  = async(reqBody)=>{
       return contact.create(reqBody)
};

//contact list
const ContactList =async(req ,res)=>{
    return contact.find()
}

//contact  id
const  contactId =async (contactId)=>{
    return contact.findById(contactId);
}

// upadte contact
const UpdateContact =async(contactId ,updateBody)=>{
    return contact.findByIdAndUpdate(contactId ,{$set :updateBody})
}

//delete contact
const DeleteContact = async(contactId)=>{
     return contact.findByIdAndDelete(contactId)
}

//Find on contact
const ContactEmail = async(email_Id)=>{
    return contact.findOne({email_Id});
}
//export in all function
module.exports = {
  CreateContact,
  ContactList,
  contactId,
  DeleteContact,
  UpdateContact,
  ContactEmail
}
