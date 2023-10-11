const mongoose = require("mongoose")

const resultSchema = new mongoose.Schema(
    {
        category: {
            type: mongoose.Types.ObjectId,
            ref: "categorygame",
        },
        team1: {
            type: mongoose.Types.ObjectId,
            ref: "teamcategory"
        },
        team2: {
            type: mongoose.Types.ObjectId,
            ref: "teamcategory"
        },
        turnament: {
            type: mongoose.Types.ObjectId,
            ref: "turnament",
        },
        winner_teamname: {
            type: String,
            trim: true,
        },
        total_scores: {
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

const result = mongoose.model("resultspoart", resultSchema);
module.exports = result;