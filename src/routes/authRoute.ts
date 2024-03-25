import express from "express";
import authController from "../controllers/authController";
const router = express.Router();


router.get("/getall/users", authController.getAll);
router.post("/add/user", authController.addNew);



export default router;
