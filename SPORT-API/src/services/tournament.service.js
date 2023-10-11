const { tournament } = require("../models");

//create tournament team
const CreateTournament = async (reqBody) => {
    return tournament.create(reqBody)
};

//tournament list
const TournamentList = async (req, res) => {
    return tournament.find().populate("category",
                                                             {game_name:1,game_type:1})
                                                             .populate("team1",
                                                             {team_name:1,founded_year:1,stadium_name:1,total_player:1,location:1})
                                                             .populate("team2",
                                                             {team_name:1,founded_year:1,stadium_name:1,total_player:1,location:1})
                                                             .populate("match" ,
                                                             {match_name:1,date:1,source:1,highlight:1})
}

//cout value
const TournamentCount =async(req ,res)=>{
    return tournament.find().count()
}

//tournament id
const TournamentId = async (tournamentId) => {
    return tournament.findById(tournamentId).populate("category",
                                                                                                    {game_name:1,game_type:1})
                                                                                                    .populate("team1",
                                                                                                    {team_name:1,founded_year:1,stadium_name:1,total_player:1,location:1})
                                                                                                    .populate("team2",
                                                                                                    {team_name:1,founded_year:1,stadium_name:1,total_player:1,location:1})
                                                                                                    .populate("match" ,
                                                                                                    {match_name:1,date:1,source:1,highlight:1})
}

// upadte tournament
const UpdateTournament = async (tournamentId, updateBody) => {
    return tournament.findByIdAndUpdate(tournamentId, { $set: updateBody })
}

//delete tournament
const DeleteTournament = async (tournamentId) => {
    return tournament.findByIdAndDelete(tournamentId)
}

// find one  tournament
const Tournament = async (tournament_name)=>{
    return tournament.findOne({tournament_name})
}
//export in all function
module.exports = {
    CreateTournament,
    TournamentList,
    TournamentId,
    DeleteTournament,
    Tournament,
    UpdateTournament,
    TournamentCount
}
