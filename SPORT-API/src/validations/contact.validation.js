const Joi = require("joi");

//create contact
 const CreateContact = {
    body : Joi.object().keys({
        first_name :Joi.string().trim().required(),
        last_name :Joi.string().trim().required(),
        email_Id :Joi.string().trim().required(),
        contact_no :Joi.number().integer().required(),
        age :Joi.number().integer().required(),
        address :Joi.string().trim().required(),
    })
 }
 module.exports = {
     CreateContact
 }