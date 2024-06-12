import express from "express"
import AuthenticationController from "../controllers/AuthenticationController.js";
import AuthenticationControllerPolicy from "../policies/AuthenticationControllerPolicy.js";
const authRoutes = express.Router()

authRoutes.post("/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
)
authRoutes.post("/login",
    AuthenticationController.login
)


export default authRoutes