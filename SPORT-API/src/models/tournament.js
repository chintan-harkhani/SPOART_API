const mongoose = require("mongoose")

const tournamentSchema = new mongoose.Schema(
    {
        tournament_name: {
            type: String,
            trim: true
        },
        category :{
             type : mongoose.Types.ObjectId,
             ref :"categorygame",
        },
        team1: {
            type: mongoose.Types.ObjectId,
            ref: "teamcategory"
        },
        team2: {
            type: mongoose.Types.ObjectId,
            ref: "teamcategory"
        },
        match: {
            type: mongoose.Types.ObjectId,
            ref: "matchdetails",
        },
        startdate: {
            type: String,
            trim: true,
        },
        enddate: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const tournament = mongoose.model("turnament", tournamentSchema);
module.exports = tournament;