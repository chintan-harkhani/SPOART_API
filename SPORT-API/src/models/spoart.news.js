const mongoose = require("mongoose")

const spoartnewsSchema = new mongoose.Schema(
    {
        newscategory:{
            type : mongoose.Types.ObjectId,
            ref:"categorygame",
        },
        headline :{
            type :String,
            trim:true,
        },
        datePublished :{
             type :String,
             trim :true,
        },
        source :{
            type :String,
            trim :true,
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

const news = mongoose.model("spoartnews", spoartnewsSchema);
module.exports = news;