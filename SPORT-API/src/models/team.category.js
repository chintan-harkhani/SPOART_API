const mongoose = require("mongoose")

const TeamSchema = new mongoose.Schema(
    {
        team_name: {
            type: String,
            trim: true
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "categorygame"
        },
        founded_year: {
            type: Number,
            trim: true
        },
        stadium_name: {
            type: String,
            trim: true
        },
        total_player: {
            type: Number,
            trim: true
        },
        location: {
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

const teamcategory = mongoose.model("teamcategory", TeamSchema);
module.exports = teamcategory;