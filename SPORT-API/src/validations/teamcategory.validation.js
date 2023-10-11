const Joi = require("joi");

//create Team Category
 const CreateTeamCategory = {
    body : Joi.object().keys({
        team_name :Joi.string().trim().required(),
        category :Joi.string().trim().required(),
        founded_year :Joi.number().integer().required(),
        stadium_name :Joi.string().trim().required(),
        total_player :Joi.number().integer().required(),
        location :Joi.string().trim().required(),
    })
 }
 module.exports = {
     CreateTeamCategory
 }