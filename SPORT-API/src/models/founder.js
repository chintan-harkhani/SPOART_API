const mongoose = require("mongoose")

const founderSchema = new mongoose.Schema(
  {
    founder_name: {
      type: String,
      trim: true,
    },
    position: { //ex :- CEO & Co-founder, Dream 11
      type: String,
      trim: true,
    },
    platform: { //  ex : - Fantasy Sports  kay plateform se te
      type: String,
      trim: true,
      default: "Fantasy Sports",
    },
     team_category:{
       type :mongoose.Types.ObjectId,
       ref :"teamcategory"
     },
     category :{
       type : mongoose.Types.ObjectId,
       ref :"categorygame",
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

const founder = mongoose.model("founder", founderSchema);
module.exports = founder;