const mongoose = require("mongoose")

const matchSchema = new mongoose.Schema(
    {
        match_name: {
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
        date :{
             type :String,
             trim :true
        },
        source :{
            type :Number,
            trim :true
        },
        highlight:{
            type :String,
            trim:true,
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

const match = mongoose.model("matchdetails", matchSchema);
module.exports = match;