import express from "express";
import ValidationController from "../controllers/validationController.js";

const router = express.Router();

router
  .get("/api/login/validation")
  .get("/api/login/:id")
  .post("/api/login/validation", ValidationController.userExists)

  
export default router;   