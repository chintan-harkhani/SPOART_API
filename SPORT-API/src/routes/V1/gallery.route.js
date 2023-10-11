const express = require("express");
const { GalleryController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { GalleryValidation } = require("../../validations");
// const auth = require("../../middlewares/auth");
const  {upload} =require("../../middlewares/upload");
const router = express.Router();

//create gallery
router.post("/gallerycreate",
upload.single("spoart_img"),
//   auth(),
    validate(GalleryValidation.CreateGallery),
    GalleryController.Creategallery
)

//gallery list
router.get("/gallerylist",
    GalleryController.GalleryList,
)

//gallery id
router.get("/gallerylist/:galleryId",
GalleryController.GalleryId
)

//gallery update
router.put("/updategallery/:galleryId",
    GalleryController.UpdateGallery
)

//delete gallery
router.delete("/deletegallery/:galleryId",
    GalleryController.DeleteGallery
)
module.exports = router;