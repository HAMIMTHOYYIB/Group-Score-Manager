const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/",adminController.dashboard);
router.get("/signIn",adminController.LoginPage);
router.get("/signUp",adminController.SignUpPage);

router.post("/login",adminController.loginPost)
module.exports = router;