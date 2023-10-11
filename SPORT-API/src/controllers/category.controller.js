const {CategoryService} =require("../services");

//create category
const Createcategory = async (req, res) => {
    try {
        const reqBody = req.body;
        const game_name = await CategoryService.Gamename(reqBody.game_name);
        if (game_name) {
            throw new Error("Category Name Data Already  Created by(" + game_name.game_name + ") This name  , Please Create Other Nme..")
        }
        const category = await CategoryService.CreateCategory(reqBody);
        if (!category) {
            throw new Error("category Not Created , Please try again later !...");
        }
        res.status(200).json({
            success: true,
            message: "Category SuccessFully  created..!",
            data: category
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//category  list
const CategoryList = async (req, res) => {
    try {
        const List = await CategoryService.CategoryList(req, res);
        const cout = await CategoryService.CateogryCount(req ,res)
        res.status(200).json({
            success: true,
            message: "Category  List SuucessFully Get...!",
            data: List , cout,
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//Category id
const categoryId = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const ID = await CategoryService.categoryId(categoryId);
        if (!ID) {
            throw new Error("Category Data Not Found.....!");
        };
        res.status(200).json({
            success: true,
            message: "SuccessFully  Category Data Get .....!",
            data: ID
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//update Category
const UpdateCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const ID = await CategoryService.categoryId(categoryId);
        if (!ID) {
            throw new Error("Category Data Not Found.....!");
        };
        await CategoryService.UpdateCategory(categoryId , req.body);
        res.status(200).json({
            success :true,
            message:"SuccessFully Category Data Updated Details...!",
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//delete Category
const DeleteCategory = async (req,res)=>{
     try {
        const categoryId = req.params.categoryId;
        const ID = await CategoryService.categoryId(categoryId);
        if (!ID) {
            throw new Error("Category Data Not Found.....!");
        };
        await  CategoryService.DeleteCategory(categoryId);
        res.status(200).json({
            success :true,
            message : "SuccessFully Category Data Deleted....!",
        });
     } catch (error) {
        res.status(400).json({ success: false, message: error.message });
     }
}

//export in all function async
module.exports = {
 Createcategory,
 CategoryList,
 categoryId,
 DeleteCategory,
 UpdateCategory 
}