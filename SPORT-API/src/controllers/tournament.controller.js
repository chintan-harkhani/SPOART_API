const { TournamentService } = require("../services");

//create tournament
const Createtournament = async (req, res) => {
    try {
        const reqBody = req.body;
        const tournament_name = await TournamentService.Tournament(reqBody.tournament_name);
        if (tournament_name) {
            throw new Error("Torunament Already  Created by (" + tournament_name.tournament_name + ") This name  , Please Create Other name..")
        }
        const Torunament = await TournamentService.CreateTournament(reqBody);
        if (!Torunament) {
            throw new Error("Torunament  Data Not Created , Please try again later !...");
        }
        res.status(200).json({
            success: true,
            message: "Torunament SuccessFully  created..!",
            data: Torunament
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//torunament list
const Torunamentlist = async (req, res) => {
    try {
        const List = await TournamentService.TournamentList(req, res);
        const cout = await TournamentService.TournamentCount(req ,res);
        res.status(200).json({
            success: true,
            message: "Torunament  List SuucessFully Get...!",
            data: List,
            cout
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//Torunament id
const TorunamentId = async (req, res) => {
    try {
        const tournamentId = req.params.tournamentId;
        const ID = await TournamentService.TournamentId(tournamentId);
        if (!ID) {
            throw new Error("Torunament  Data Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "SuccessFully Match  List Get....!",
            data: ID
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//update torunament
const UpdateTournament= async (req, res) => {
    try {
        const tournamentId = req.params.tournamentId;
        const ID = await TournamentService.TournamentId(tournamentId);
        if (!ID) {
            throw new Error("Torunament  Data Not Found !...");
        };
        await TournamentService.UpdateTournament(tournamentId , req.body);
        res.status(200).json({
            success :true,
            message:"SuccessFully Torunament  Data Updated Details...!",
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//delete Torunament
const DeleteTorunament= async (req, res) => {
    try {
        const tournamentId = req.params.tournamentId;
        const ID = await TournamentService.TournamentId(tournamentId);
        if (!ID) {
            throw new Error("Torunament  Data Not Found !...");
        };
        await TournamentService.DeleteTournament(tournamentId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Torunament Details Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//export in all function async
module.exports = {
 Createtournament,
 Torunamentlist,
 TorunamentId,
 UpdateTournament,
 DeleteTorunament
}
