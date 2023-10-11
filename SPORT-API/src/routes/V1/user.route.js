const express = require("express");
const { UserController } = require("../../controllers");
const { UserValidation } = require("../../validations");
const validate = require("../../middlewares/validate");
const router = express.Router();

//create user
router.post("/createuser",
    validate(UserValidation.CreateUser),
    UserController.CreateUser
);

//user list
router.get("/userlist",
    UserController.UserList
);

//user id
router.get("/userlist/:userId",
    UserController.UserId
);

//delete user
router.delete("/deleteuser/:userId",
    UserController.DeleteUser
);

//update user
router.put("/updateuser/:userId",
    UserController.UpdateUser
);

module.exports = router;