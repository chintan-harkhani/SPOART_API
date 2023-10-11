const Joi = require("joi");

//create Team Category
 const CreateTournament = {
    body : Joi.object().keys({
        tournament_name :Joi.string().trim().required(),
        category :Joi.string().trim().required(),
        team1 :Joi.string().trim().required(),
        team2 :Joi.string().trim().required(),
        match :Joi.string().trim().required(),
        startdate:Joi.string().trim().required(),
        enddate :Joi.string().trim().required(),
    })
 }
 module.exports = {
     CreateTournament
 }