import express from "express";
import logoutController from "../controllers/logoutController.js";

const router = express.Router();

router.get("/logout", logoutController);
export default router;