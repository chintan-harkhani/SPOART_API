const {category} = require("../models");

//create category
const CreateCategory  = async(reqBody)=>{
       return category.create(reqBody)
};

//category list
const CategoryList =async(req ,res)=>{
    return category.find()
}

//category  id
const  categoryId =async (categoryId)=>{
    return category.findById(categoryId);
}

// upadte category
const UpdateCategory =async(categoryId ,updateBody)=>{
    return category.findByIdAndUpdate(categoryId ,{$set :updateBody})
}

//delete category
const DeleteCategory = async(categoryId)=>{
     return category.findByIdAndDelete(categoryId)
}

//cout value
const CateogryCount =async(req ,res)=>{
    return category.find().count()
}


//Find on category
const Gamename = async(game_name)=>{
    return category.findOne({game_name});
}
//export in all function
module.exports = {
 CreateCategory,
 CategoryList,
 categoryId,
 UpdateCategory,
 DeleteCategory,
 Gamename,
 CateogryCount
}
