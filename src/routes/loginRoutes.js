import express from "express";
import LoginController from "../controllers/loginController.js";

const router = express.Router();

router
  .post("/api/login", LoginController.createLogin)
  .post("/api/login/validation", LoginController.login)

  
export default router;   