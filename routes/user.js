const express=require("express");
const router=express.Router();
const user=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport=require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const userController=require("../controllers/users.js");



router.route("/signup")
.get(userController.signup)
.post(wrapAsync(userController.renderSignUPForm));
//signup route
router.route("/login")
.get(userController.renderLoginform)
.post(saveRedirectUrl,passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),userController.login);

//logout route
router.get("/logout",userController.logout);

module.exports=router;



