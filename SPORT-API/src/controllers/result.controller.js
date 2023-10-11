const { SpoartResultService } = require("../services");

//create result
const CreateResult = async (req, res) => {
    try {
        const reqBody = req.body;
        const tournament = await SpoartResultService.TournamentID(reqBody.turnament);
        if (tournament) {
            throw new Error("result Already  Created by (" + tournament.turnament + ") This result  , Please Create Other result..")
        }
        const result = await SpoartResultService.CreateResult(reqBody);
        if (!result) {
            throw new Error("Spaort Result Data Not Created , Please try again later !...");
        }
        res.status(200).json({
            success: true,
            message: "Result SuccessFully  created..!",
            data: result
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//result list
const Resultlist = async (req, res) => {
    try {
        const List = await SpoartResultService.ResultList(req, res);
        res.status(200).json({
            success: true,
            message: "Result List SuucessFully Get...!",
            data: List,
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//Result id
const ResultId = async (req, res) => {
    try {
        const resultId = req.params.resultId;
        const ID = await SpoartResultService.ResultId(resultId);
        if (!ID) {
            throw new Error("Result Data Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "SuccessFully Result List Get....!",
            data: ID
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//update result
const UpdateResult = async (req, res) => {
    try {
        const resultId = req.params.resultId;
        const ID = await SpoartResultService.ResultId(resultId);
        if (!ID) {
            throw new Error("Result Data Not Found !...");
        };
        await SpoartResultService.UpdateResult(resultId , req.body);
        res.status(200).json({
            success :true,
            message:"SuccessFully Result Data Updated Details...!",
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}


//delete Result
const DeleteResult= async (req, res) => {
    try {
        const resultId = req.params.resultId;
        const ID = await SpoartResultService.ResultId(resultId);
        if (!ID) {
            throw new Error("Result Data Not Found !...");
        };
        await SpoartResultService.DeleteResult(resultId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Result Details Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//export in all function async
module.exports = {
  CreateResult,
  Resultlist,
  ResultId,
  DeleteResult,
  UpdateResult
}
