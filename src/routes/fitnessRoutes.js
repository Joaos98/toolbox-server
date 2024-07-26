import express from "express";
import FitnessController from "../controllers/FitnessController.js";

const fitnessRoutes = express.Router()

fitnessRoutes.get("/workouts", FitnessController.getWorkouts)
fitnessRoutes.post("/workouts", FitnessController.createWorkout)
fitnessRoutes.delete("/workouts", FitnessController.deleteWorkout)

export default fitnessRoutes