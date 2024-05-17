import express from "express"
import AuthenticationController from "../controllers/AuthenticationController.js";
const authRoutes = express.Router()

authRoutes.post("/", AuthenticationController.register)


export default authRoutes