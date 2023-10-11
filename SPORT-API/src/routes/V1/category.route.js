const express = require("express");
const { CategoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { CategoryValidation } = require("../../validations");
const router = express.Router();

//create category
router.post("/createcategory",
    validate(CategoryValidation.CreateCategory),
    CategoryController.Createcategory
)

//category list
router.get("/categorylist",
    CategoryController.CategoryList,
)

//category id
router.get("/categorylist/:categoryId",
    CategoryController.categoryId
)

//category update
router.put("/updatecategory/:categoryId",
    CategoryController.UpdateCategory
)

//delete category
router.delete("/deletecategory/:categoryId",
  CategoryController.DeleteCategory
)
module.exports = router;