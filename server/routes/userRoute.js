const express = require("express");
const { CreateUser, LoginUser } = require("../controllers/authController");
const router = express.Router();

router.post("/register", CreateUser);
router.post("/login", LoginUser);

module.exports = router;
