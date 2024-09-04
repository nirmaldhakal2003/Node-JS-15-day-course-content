const { renderRegister, registerUser, renderLogin, loginUser } = require("../controller/authController")

const router = require("express").Router()

router.route("/register").get(renderRegister).post(registerUser)

router.route("/login").get(renderLogin).post(loginUser)



module.exports = router