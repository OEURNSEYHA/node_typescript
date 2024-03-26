import express from "express";
import authController from "../controllers/authController";
import multer from "multer";
const upload = multer();
const router = express.Router();


router.get("/getall/users", authController.getAll);
router.post("/register", upload.none(), authController.register);



export default router;
