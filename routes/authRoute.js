import express from "express";
import { registerController, loginController } from "../controllers/authController.js";

// router object 
const router = express.Router();

// routing

// register || method post 
router.post('/register', registerController);

// login || post method
router.post("/login", loginController);

export default router;