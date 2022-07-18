import express from "express";
import LoginController from "../controllers/loginController.js";

const router = express.Router();

router
  .get("/api/login", LoginController.listLogin)
  .get("/api/login/:id", LoginController.listLoginId)
  .post("/api/login", LoginController.createLogin)

  
export default router;   