const { TeamCategoryService } = require("../services");

//create teamCategory
const CreateTeamcategory = async (req, res) => {
    try {
        const reqBody = req.body;
        const team_name = await TeamCategoryService.TeamCategoryName(reqBody.team_name);
        if (team_name) {
            throw new Error("Team name Already  Created by (" + team_name.team_name + ") This name  , Please Create Other name..")
        }
        const team = await TeamCategoryService.CreateTeamCategory(reqBody);
        if (!team) {
            throw new Error("Team Category Data Not Created , Please try again later !...");
        }
        res.status(200).json({
            success: true,
            message: "Team SuccessFully  created..!",
            data: team
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//teamcategory list
const TeamcategoryList = async (req, res) => {
    try {
        const List = await TeamCategoryService.TeamCtegoryList(req, res);
        const cout = await TeamCategoryService.TeamCategoryCount(req ,res);
        res.status(200).json({
            success: true,
            message: "Team Category List SuucessFully Get...!",
            data: List,
            cout
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//Team Category id
const TeamcategoryId = async (req, res) => {
    try {
        const teamcategoryId = req.params.teamcategoryId;
        const ID = await TeamCategoryService.TeamCategoryId(teamcategoryId);
        if (!ID) {
            throw new Error("Team Category Data Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "SuccessFully Team Category List Get....!",
            data: ID
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//update Team category
const UpdateTeamcategory = async (req, res) => {
    try {
        const teamcategoryId = req.params.teamcategoryId;
        const ID = await TeamCategoryService.TeamCategoryId(teamcategoryId);
        if (!ID) {
            throw new Error("Team Category Data Not Found !...");
        };
        await TeamCategoryService.UpdateTeamCategory(teamcategoryId , req.body);
        res.status(200).json({
            success :true,
            message:"SuccessFully Team Category Data Updated Details...!",
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}


//delete TeamCategory
const DeleteTeamcategory = async (req, res) => {
    try {
        const teamcategoryId = req.params.teamcategoryId;
        const ID = await TeamCategoryService.TeamCategoryId(teamcategoryId);
        if (!ID) {
            throw new Error("Team Category Data Not Found !...");
        };
        await TeamCategoryService.DeleteTeamCategory(teamcategoryId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Team Category Details Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//export in all function async
module.exports = {
   CreateTeamcategory,
   TeamcategoryList,
   TeamcategoryId,
   DeleteTeamcategory,
   UpdateTeamcategory
}
