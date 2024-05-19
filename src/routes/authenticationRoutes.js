import express from "express"
import AuthenticationController from "../controllers/AuthenticationController.js";
import AuthenticationControllerPolicy from "../policies/AuthenticationControllerPolicy.js";
const authRoutes = express.Router()

authRoutes.post("/", AuthenticationControllerPolicy.register,
    AuthenticationController.register
)


export default authRoutes