import express from "express";
import { downloadImage, uploadImage } from "../controller/image-controller.js";
import uploadMiddleware from "../utils/upload.js";

const router = express.Router();

router.post("/upload", uploadMiddleware.single("file") , uploadImage);
router.get("/file/:fileId",downloadImage);

export default router;
