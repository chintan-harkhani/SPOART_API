const Joi = require("joi");

//create gallery
 const CreateGallery = {
    body : Joi.object().keys({
        spoart_img :Joi.string().allow(""),
        spoart_category :Joi.string().trim().required(),
    })
 }
 module.exports = {
     CreateGallery
 }