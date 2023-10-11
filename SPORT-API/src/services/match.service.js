const { match } = require("../models");

//create match team
const CreateMatch = async (reqBody) => {
    return match.create(reqBody)
};

//Match list
const MatchList = async (req, res) => {
    return match.find().populate("category",
                                                {game_name:1,game_type:1})
                                                .populate("team1",
                                                {team_name:1,founded_year:1,stadium_name:1,total_player:1,location:1})
                                                .populate("team2",
                                                {team_name:1,founded_year:1,stadium_name:1,total_player:1,location:1})
}

//cout value
const MatchCount =async(req ,res)=>{
    return match.find().count()
}

//match id
const MatchId = async (matchId) => {
    return match.findById(matchId).populate("category",
                                                                            {game_name:1,game_type:1})
                                                                            .populate("team1",
                                                                            {team_name:1,founded_year:1,stadium_name:1,total_player:1,location:1})
                                                                            .populate("team2",
                                                                            {team_name:1,founded_year:1,stadium_nam:1,total_player:1,location:1})
}

// upadte match
const UpdateMatch = async (matchId, updateBody) => {
    return match.findByIdAndUpdate(matchId, { $set: updateBody })
}

//delete match
const DeleteMatch = async (matchId) => {
    return match.findByIdAndDelete(matchId)
}

//find one  match
const MatchName = async (match_name)=>{
    return match.findOne({match_name})
}
//export in all function
module.exports = {
    CreateMatch,
    MatchList,
    MatchId,
    DeleteMatch,
    UpdateMatch,
    MatchName,
    MatchCount
}
