const Joi = require("joi");

//create founder
 const CreateFounder = {
    body : Joi.object().keys({
        founder_name :Joi.string().trim().required(),
        position :Joi.string().trim().required(),
        platform :Joi.string().trim(),
        team_category :Joi.string().trim().required(),
        category :Joi.string().trim().required(),
    })
 }
 module.exports = {
     CreateFounder
 }