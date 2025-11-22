import * as soundsModel from "../Model/soundsModel.js";
import dotenv from "dotenv";

dotenv.config;

// get random sound for frontend to load as embed with info
export const getRandSound = async (req, res) => {
    const result = await soundsModel.getRandSound();
    return res.status(200).json(result);
}

// get sound given user chose dropdown option and hit submit
export const getSoundById = async (req, res) => {
    console.log("req.params:", req.params);
    console.log("soundId:", req.params.soundId);

    const soundId = req.params.soundId;
    const result = await soundsModel.getSoundById(soundId);
    return res.status(200).json(result);
}

// get titles of available sounds for dropdown to hold
export const getSoundTitles = async (req, res) => {
    const result = await soundsModel.getSoundTitles();
    return res.status(200).json(result);
}