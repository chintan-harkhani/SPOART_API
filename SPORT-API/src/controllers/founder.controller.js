const { FounderService } = require("../services");

//create founder 
const Createfounder = async (req, res) => {
    try {
        const reqBody = req.body;
        const Founder_name = await FounderService.FounderName(reqBody.founder_name);
        if (Founder_name) {
            throw new Error("Founder name Already  Created by (" + Founder_name.founder_name + ") This name  , Please Create Other name..")
        }
        const founder = await FounderService.CreateFounder(reqBody);
        if (!founder) {
            throw new Error("Founder Not Created , Please try again later !...");
        }
        res.status(200).json({
            success: true,
            message: "Founder SuccessFully  created..!",
            data: founder
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//founder list
const FounderList = async (req, res) => {
    try {
        const List = await FounderService.FounderList(req, res);
        const cout = await FounderService.FounderCount(req, res);
        res.status(200).json({
            success: true,
            message: "Founder List SuucessFully Get...!",
            data: List,
            cout
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//founder id
const FounderId = async (req, res) => {
    try {
        const founderId = req.params.founderId;
        const ID = await FounderService.founderId(founderId);
        if (!ID) {
            throw new Error("Founder Data Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "SuccessFully Founder List Get....!",
            data: ID
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//update founder
const Updatefounder = async (req, res) => {
    try {
        const founderId = req.params.founderId;
        const ID = await FounderService.founderId(founderId);
        if (!ID) {
            throw new Error("Founder Data Not Found !...");
        };
        await FounderService.UpdateFounder(founderId, req.body);
        res.status(200).json({
            success: true,
            message: "Founder details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//delete founder
const Deletefounder = async (req, res) => {
    try {
        const founderId = req.params.founderId;
        const ID = await FounderService.founderId(founderId);
        if (!ID) {
            throw new Error("Founder Data Not Found !...");
        };
        await FounderService.DeleteFounder(founderId);
        res.status(200).json({
            success: true,
            message: "Suucessfully Founder Details Deleted!....",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//export in all function async
module.exports = {
    Createfounder,
    FounderList,
    Deletefounder,
    FounderId,
    Updatefounder
}
