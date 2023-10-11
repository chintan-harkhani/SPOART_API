const Joi = require("joi");

//create match
 const CreateMatch = {
    body : Joi.object().keys({
        match_name :Joi.string().trim().required(),
        category :Joi.string().trim().required(),
        team1 :Joi.string().trim().required(),
        team2 :Joi.string().trim().required(),
        date :Joi.string().trim().required(),
        source :Joi.number().integer().required(),
        highlight :Joi.string().trim().required(),
    })
 }
 module.exports = {
     CreateMatch
 }