const Joi = require("joi");

//create spoart result
 const CreateResult= {
    body : Joi.object().keys({
        category :Joi.string().trim().required(),
        team1 :Joi.string().trim().required(),
        team2 :Joi.string().trim().required(),
        turnament :Joi.string().trim().required(),
        winner_teamname :Joi.string().trim().required(),
        total_scores :Joi.string().trim().required(),
    })
 }
 module.exports = {
     CreateResult
 }