const {gallery} = require("../models");

//create gallery
const CreateGallery  = async(reqBody)=>{
       return gallery.create(reqBody)
};

//gallery list
const GalleryList =async(req ,res)=>{
    return gallery.find().populate("spoart_category")
}

//gallery  id
const  galleryId =async (galleryId)=>{
    return gallery.findById(galleryId);
}

// upadte gallery
const UpdateGallery =async(galleryId ,updateBody)=>{
    return gallery.findByIdAndUpdate(galleryId ,{$set :updateBody})
}

//delete gallery
const DeleteGallery = async(galleryId)=>{
     return gallery.findByIdAndDelete(galleryId)
}

//Find on gallery
const ImgFind = async(spoart_img)=>{
    return gallery.findOne({spoart_img});
}
//export in all function
module.exports = {
  CreateGallery,
  GalleryList,
  galleryId,
  UpdateGallery,
  DeleteGallery,
  ImgFind
}
