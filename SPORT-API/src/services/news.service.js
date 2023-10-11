const { spoartnews } = require("../models");

//create news
const CreateNews = async (reqBody) => {
    return spoartnews.create(reqBody)
};

//news list
const NewsList = async (req, res) => {
    return spoartnews.find().populate("newscategory",
                                                            {game_name:1,game_desc:1})
}

//news id
const NewsId = async (newsId) => {
    return spoartnews.findById(newsId).populate("newscategory",
                                                                                      {game_name:1,game_desc:1})
}

// upadte news
const UpdateNews= async (newsId, updateBody) => {
    return spoartnews.findByIdAndUpdate(newsId, { $set: updateBody })
}

//delete news
const DeleteNews = async (newsId) => {
    return spoartnews.findByIdAndDelete(newsId)
}

//find one  news
const NewsID = async (newscategory)=>{
    return spoartnews.findOne({newscategory})
}
//export in all function
module.exports = {
  CreateNews,
  NewsList,
  NewsId,
  DeleteNews,
  UpdateNews,
  NewsID
}
