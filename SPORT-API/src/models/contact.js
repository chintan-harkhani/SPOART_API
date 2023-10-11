const mongoose = require("mongoose")

const conactSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true
        },
        last_name: {
            type: String,
            trim: true
        },
        email_Id: {
            type: String,
            trim: true
        },
        contact_no: {
            type: Number,
            trim: true
        },
        age : {
            type : Number,
            trim : true
        },
        address :{
             type: String,
             trim : true,
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

const contact = mongoose.model("contact", conactSchema);
module.exports = contact;