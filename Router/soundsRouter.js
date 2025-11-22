import express from "express";
import { getRandSound, getSoundById, getSoundTitles } from "../Controller/soundsController.js";

const router = express.Router();

router.get("/randSound", getRandSound);

router.get("/soundTitles", getSoundTitles);

router.get("/soundById/:soundId", getSoundById);

export default router;