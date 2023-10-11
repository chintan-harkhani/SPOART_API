const express = require("express");
const { FounderController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { FounderValidation } = require("../../validations");
const auth = require("../../middlewares/auth");
const router = express.Router();

//create founder
router.post("/foundercreate",
  auth(),
    validate(FounderValidation.CreateFounder),
    FounderController.Createfounder
)

//founder list
router.get("/founderlist",
    FounderController.FounderList,
)

//founder id
router.get("/founderlist/:founderId",
    FounderController.FounderId
)

//founder update
router.put("/updatefounder/:founderId",
    FounderController.Updatefounder
)

//delete founder
router.delete("/deletefounder/:founderId",
    FounderController.Deletefounder
)
module.exports = router;