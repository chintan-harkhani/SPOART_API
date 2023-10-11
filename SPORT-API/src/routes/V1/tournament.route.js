const express = require("express");
const { TournamentController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { TournamentValidation } = require("../../validations");
const router = express.Router();

//create Torunament 
router.post("/tournamentcreate",
    validate(TournamentValidation.CreateTournament),
    TournamentController.Createtournament
)

//Torunament list
router.get("/tournamentlist",
  TournamentController.Torunamentlist,
)

//Torunament id
router.get("/tournamentlist/:tournamentId",
    TournamentController.TorunamentId
)

//match update
router.put("/updatetournament/:tournamentId",
    TournamentController.UpdateTournament
)

//delete founder
router.delete("/deletetournament/:tournamentId",
    TournamentController.DeleteTorunament
)
module.exports = router;