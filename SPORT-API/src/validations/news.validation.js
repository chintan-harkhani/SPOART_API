const Joi = require("joi");

//create spoart news
 const CreateNews= {
    body : Joi.object().keys({
        newscategory :Joi.string().trim().required(),
        headline :Joi.string().trim().required(),
        datePublished :Joi.string().trim().required(),
        source :Joi.string().trim().required(),
    })
 }
 module.exports = {
    CreateNews
 }