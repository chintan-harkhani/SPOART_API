const { MatchService } = require("../services");

//create Match
const CreateMatch = async (req, res) => {
    try {
        const reqBody = req.body;
        const match_name = await MatchService.MatchName(reqBody.match_name);
        if (match_name) {
            throw new Error("match name Already  Created by (" + match_name.match_name + ") This name  , Please Create Other name..")
        }
        const match = await MatchService.CreateMatch(reqBody);
        if (!match) {
            throw new Error("match  Data Not Created , Please try again later !...");
        }
        res.status(200).json({
            success: true,
            message: "match SuccessFully  created..!",
            data: match
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//match list
const Matchlist = async (req, res) => {
    try {
        const List = await MatchService.MatchList(req, res);
        const cout = await MatchService.MatchCount(req ,res);
        res.status(200).json({
            success: true,
            message: "match  List SuucessFully Get...!",
            data: List,
            cout
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//match id
const MatchId = async (req, res) => {
    try {
        const matchId = req.params.matchId;
        const ID = await MatchService.MatchId(matchId);
        if (!ID) {
            throw new Error("Match  Data Not Found !...");
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

//updatematch
const UpdateMatch= async (req, res) => {
    try {
        const matchId = req.params.matchId;
        const ID = await MatchService.MatchId(matchId);
        if (!ID) {
            throw new Error("Match  Data Not Found !...");
        };
        await MatchService.UpdateMatch(matchId , req.body);
        res.status(200).json({
            success :true,
            message:"SuccessFully Match  Data Updated Details...!",
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}


//delete match
const DeleteMatch = async (req, res) => {
    try {
        const matchId = req.params.matchId;
        const ID = await MatchService.MatchId(matchId);
        if (!ID) {
            throw new Error("Match  Data Not Found !...");
        };
        await MatchService.DeleteMatch(matchId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Match Details Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//export in all function async
module.exports = {
  CreateMatch,
  Matchlist,
  MatchId,
  DeleteMatch,
  UpdateMatch
}
