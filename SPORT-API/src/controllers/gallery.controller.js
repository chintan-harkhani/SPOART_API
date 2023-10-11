const { GalleryService } = require("../services");

//create gallery
const Creategallery = async (req, res) => {
    try {
        const reqBody = req.body;
        if (req.file) {
            reqBody.spoart_img = req.file.filename
        } else {
            throw new Error("Spoart Images Is Required....!");
        }
        const spoart_img = await GalleryService.ImgFind(reqBody.spoart_img);
        if (spoart_img) {
            throw new Error("Category Image Already  Added by (" + spoart_img.spoart_img + ") This Image  , Please Add Other Image ..")
        }
        const images = await GalleryService.CreateGallery(reqBody);
        if (!images) {
            throw new Error(" Gallery Not Created , Please try again later !...");
        }
        res.status(200).json({
            success: true,
            message: "Gallery SuccessFully  created..!",
            data: images
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//gallery list
const GalleryList = async (req, res) => {
    try {
        const List = await GalleryService.GalleryList(req, res);
        res.status(200).json({
            success: true,
            message: "Gallery List SuucessFully Get...!",
            data: List,
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//gallery id
const GalleryId = async (req, res) => {
    try {
        const galleryId = req.params.galleryId;
        const ID = await GalleryService.galleryId(galleryId);
        if (!ID) {
            throw new Error("gallery Data Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "SuccessFully Gallery List Get....!",
            data: ID
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//update gallery
const UpdateGallery = async (req, res) => {
    try {
        const galleryId = req.params.galleryId;
        const ID = await GalleryService.galleryId(galleryId);
        if (!ID) {
            throw new Error("gallery Data Not Found !...");
        };
        await GalleryService.UpdateGallery(galleryId, req.body);
        res.status(200).json({
            success: true,
            message: "Gallery Update update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//delete gallery
const DeleteGallery = async (req, res) => {
    try {
        const galleryId = req.params.galleryId;
        const ID = await GalleryService.galleryId(galleryId);
        if (!ID) {
            throw new Error("gallery Data Not Found !...");
        };
        await GalleryService.DeleteGallery(galleryId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Gallery images Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//export in all function async
module.exports = {
    Creategallery,
    GalleryList,
    GalleryId,
    DeleteGallery,
    UpdateGallery
}
