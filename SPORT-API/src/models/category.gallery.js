const mongoose = require("mongoose");
const  config = require("../config/config")

const gallerySchema = new mongoose.Schema(
    {
      spoart_img : {
         type: String,
         trim :true
      },
      spoart_category :{
         type : mongoose.Types.ObjectId,
         ref:"categorygame",
      },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON :{
            transform : function(doc , data) {
                if(data?.spoart_img){
                       data.spoart_img = `${config.base_url}spoart_images/${ data.spoart_img}`;
                }
            },
        },
    },
);

const spoartimg = mongoose.model("spoartimg", gallerySchema);
module.exports = spoartimg;