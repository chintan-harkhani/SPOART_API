const express = require("express");
const { SpoartNewsController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { SpoartNewsValidation } = require("../../validations")
const router = express.Router();

//create news
router.post("/newscreate",
    validate(SpoartNewsValidation.CreateNews),
     SpoartNewsController.CreateNews
)

//news list
router.get("/newslist",
  SpoartNewsController.Newslist,
)

//news id
router.get("/newslist/:newsId",
    SpoartNewsController.newsId
)

//news update
router.put("/updatenews/:newsId",
   SpoartNewsController.UpdateNews
)

//delete news
router.delete("/deletenews/:newsId",
    SpoartNewsController.DeleteNews
)
module.exports = router;