const { founder } = require("../models");

//create founder
const CreateFounder = async (reqBody) => {
    return founder.create(reqBody)
};

//founder list
const FounderList = async (req, res) => {
    return founder.find().populate("team_category",
                                                   { team_name: 1, founded_year: 1, stadium_name: 1, total_player: 1, location: 1 })
                                                   .populate("category",
                                                   { game_name: 1, game_type: 1 });
}

//cout value
const FounderCount = async (req, res) => {
    return founder.find().count()
}
//founder id
const founderId = async (founderId) => {
    return founder.findById(founderId).populate("team_category",
                                                                                    { team_name: 1, founded_year: 1, stadium_name: 1, total_player: 1, location: 1 })
                                                                                    .populate("category",
                                                                                     { game_name: 1, game_type: 1 });
}

// upadte founder
const UpdateFounder = async (founderId, updateBody) => {
    return founder.findByIdAndUpdate(founderId, { $set: updateBody })
}

//delete founder
const DeleteFounder = async (founderId) => {
    return founder.findByIdAndDelete(founderId)
}

//find one  founder
const FounderName = async (founder_name) => {
    return founder.findOne({ founder_name })
}
//export in all function
module.exports = {
    CreateFounder,
    FounderList,
    DeleteFounder,
    founderId,
    UpdateFounder,
    FounderName,
    FounderCount
}
