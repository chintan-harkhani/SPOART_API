const { teamcategory } = require("../models");

//create teamcategory
const CreateTeamCategory = async (reqBody) => {
    return teamcategory.create(reqBody)
};

//teamcategory list
const TeamCtegoryList = async (req, res) => {
    return teamcategory.find().populate("category",
                                                                 {game_name :1 ,game_desc :1 ,game_type :1,game_type :1});
}

//cout value
const TeamCategoryCount =async(req ,res)=>{
    return teamcategory.find().count()
}

//teamcategory id
const TeamCategoryId = async (teamcategoryId) => {
    return teamcategory.findById(teamcategoryId).populate("category",
                                                                                                               {game_name :1 ,game_desc :1 ,game_type :1} );
}

// upadte teamcategory
const UpdateTeamCategory = async (teamcategoryId, updateBody) => {
    return teamcategory.findByIdAndUpdate(teamcategoryId, { $set: updateBody })
}

//delete teamcategory
const DeleteTeamCategory = async (teamcategoryId) => {
    return teamcategory.findByIdAndDelete(teamcategoryId)
}

//find one  teamcategory
const TeamCategoryName = async (team_name)=>{
    return teamcategory.findOne({team_name})
}
//export in all function
module.exports = {
   CreateTeamCategory,
   TeamCtegoryList,
   TeamCategoryId,
   DeleteTeamCategory,
   UpdateTeamCategory,
   TeamCategoryName,
    TeamCategoryCount
}
