const Joi = require("joi");

//create category
const CreateCategory = {
    body: Joi.object().keys({
        game_name: Joi.string().trim().required(),
        game_desc: Joi.string().trim().required(),
        game_event: Joi.string().trim().required(),
        game_type: Joi.string().trim().required(),
    })
}
module.exports = {
    CreateCategory
}