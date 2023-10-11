const { spoartresult } = require("../models");

//create match team
const CreateResult = async (reqBody) => {
    return spoartresult.create(reqBody)
};

//Result list
const ResultList = async (req, res) => {
    return spoartresult.find().populate("category",
                                                             {game_name:1,game_type:1})
                                                             .populate("team1",
                                                             {team_name:1,founded_year:1})
                                                             .populate("team2",
                                                             {team_name:1,founded_year:1})
                                                             .populate("turnament",
                                                             {tournament_name:1})
}

//Result id
const ResultId = async (resultId) => {
    return spoartresult.findById(resultId).populate("category",
                                                                                        {game_name:1,game_type:1})
                                                                                        .populate("team1",
                                                                                        {team_name:1,founded_year:1})
                                                                                        .populate("team2",
                                                                                        {team_name:1,founded_year:1})
                                                                                        .populate("turnament",
                                                                                        {tournament_name:1})
}

// upadte Result
const UpdateResult = async (resultId, updateBody) => {
    return spoartresult.findByIdAndUpdate(resultId, { $set: updateBody })
}

//delete Result
const DeleteResult = async (resultId) => {
    return spoartresult.findByIdAndDelete(resultId)
}

//find one  Result
const TournamentID = async (turnament)=>{
    return spoartresult.findOne({turnament})
}
//export in all function
module.exports = {
   CreateResult,
   ResultList,
   ResultId,
   DeleteResult,
   UpdateResult,
   TournamentID
}
