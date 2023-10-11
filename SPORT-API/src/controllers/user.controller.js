const { UserService } = require("../services");

//crete user
const CreateUser = async (req, res) => {
    try {
        const reqBody = req.body;
        const email = await UserService.FindEmail(reqBody.email);
        if (email) {
            throw new Error("Email Already  Created by (" + email.email + ") This Email  , Please Create Other Email..")
        }
        const user = await UserService.Creteuser(reqBody);
        if (!user) {
            throw new Error("User Not Created , Please try again later !...");
        }
        res.status(200).json({
            success: true,
            message: "Suucessfully User Created!...",
            data: { user }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//user list
const UserList = async (req, res) => {
    try {
        const list = await UserService.Userlist(req, res);
        res.status(200).json({
            success: true,
            message: " User Data SuccessFully Get !.....",
            data:  list 
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//get user id 
const UserId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const ID = await UserService.UserId(userId);
        if (!ID) {
            throw new Error("User Not Found !...");
        };
        res.status(200).json({
            success: true,
            message: "Suucessfully User List Get!....",
            data: { ID }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//delete user
const DeleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const ID = await UserService.UserId(userId);
        if (!ID) {
            throw new Error("User Not Found !...");
        };
        await UserService.Deleteuser(userId);
        res.status(200).json({
            success: true,
            message: "Suucessfully User Details Deleted!....",
        });
    } catch (error) {
       res.status(400).json({success : false , message : error.message});
    }
}

//update user
const UpdateUser =async (req ,res) =>{
     try {
        const  userId = req.params.userId;
        const ID = await UserService.UserId(userId);
        if(!ID){
            throw new Error("User Not Found !...");
        };
        await UserService.Updateuser(userId , req.body);
        res.status(200).json({
            success: true,
            message: "User details update successfully!"
        });
     } catch (error) {
        res.status(400).json({success : false , message : error.message});
     }
}

module.exports = {
    CreateUser,
    UserList,
    UserId,
    DeleteUser,
    UpdateUser
};