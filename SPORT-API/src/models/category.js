const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema(
    {
      game_name : {
         type: String,
         trim :true
      },
      game_desc :{
         type : String,
         trim: true
      },
    game_event :{
         type : String,
         trim : true,
      },
      game_type:{
         type:String,
         trim:true
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

const category = mongoose.model("categorygame", categorySchema);
module.exports = category;