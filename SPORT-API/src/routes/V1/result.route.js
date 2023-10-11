const express = require("express");
const { SpoartResultController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { SpoartResultValidation } = require("../../validations")
const router = express.Router();

//create result
router.post("/resultcreate",
    validate(SpoartResultValidation.CreateResult),
     SpoartResultController.CreateResult
)

//result list
router.get("/resultlist",
  SpoartResultController.Resultlist,
)

//result id
router.get("/resultlist/:resultId",
    SpoartResultController.ResultId
)

//result update
router.put("/updateresult/:resultId",
   SpoartResultController.UpdateResult
)

//delete result
router.delete("/deleteresult/:resultId",
    SpoartResultController.DeleteResult
)
module.exports = router;