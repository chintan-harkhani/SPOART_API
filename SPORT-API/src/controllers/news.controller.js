const { SpoartNewsService } = require("../services");

//create news
const CreateNews = async (req, res) => {
    try {
        const reqBody = req.body;
        const news = await SpoartNewsService.NewsID(reqBody.newscategory);
        if (news) {
            throw new Error("news Already  Created by (" + news.newscategory + ") This news  , Please Create Other news..")
        }
        const creatnews = await SpoartNewsService.CreateNews(reqBody);
        if (!creatnews) {
            throw new Error(" News Data Not Created , Please try again later !...");
        }
        res.status(200).json({
            success: true,
            message: "News SuccessFully  created..!",
            data: creatnews
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//news list
const Newslist = async (req, res) => {
    try {
        const List = await SpoartNewsService.NewsList(req, res);
        res.status(200).json({
            success: true,
            message: "News List SuucessFully Get...!",
            data: List,
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//news id
const newsId = async (req, res) => {
    try {
        const newsId = req.params.newsId;
        const ID = await SpoartNewsService.NewsId(newsId);
        if (!ID) {
            throw new Error("News Data Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "SuccessFully News List Get....!",
            data: ID
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//update news
const UpdateNews = async (req, res) => {
    try {
        const newsId = req.params.newsId;
        const ID = await SpoartNewsService.NewsId(newsId);
        if (!ID) {
            throw new Error("News Data Not Found !...");
        };
        await SpoartNewsService.UpdateNews(newsId , req.body);
        res.status(200).json({
            success :true,
            message:"SuccessFully News Data Updated Details...!",
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}


//delete news
const DeleteNews = async (req, res) => {
    try {
        const newsId = req.params.newsId;
        const ID = await SpoartNewsService.NewsId(newsId);
        if (!ID) {
            throw new Error("News Data Not Found !...");
        };
        await SpoartNewsService.DeleteNews(newsId);
        res.status(200).json({
            success: true,
            message: "Suucessfully News Details Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//export in all function async
module.exports = {
CreateNews,
Newslist,
newsId,
DeleteNews,
UpdateNews
}
