const express = require("express");
const { MatchController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { MatchValidation } = require("../../validations");
const router = express.Router();

//create match 
router.post("/matchcreate",
    validate(MatchValidation.CreateMatch),
    MatchController.CreateMatch
)

//Match list
router.get("/matchlist",
  MatchController.Matchlist,
)

//match id
router.get("/matchlist/:matchId",
    MatchController.MatchId
)

//match update
router.put("/updatematch/:matchId",
    MatchController.UpdateMatch
)

//delete founder
router.delete("/deletematch/:matchId",
    MatchController.DeleteMatch
)
module.exports = router;