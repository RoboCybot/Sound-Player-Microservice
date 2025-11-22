import db from "../db/soundsdbSetup.js";

// retrieves random sound information and embed from the database
export const getRandSound = () => {
    try {
        return db.prepare("SELECT * FROM sounds ORDER BY RANDOM() LIMIT 1").get();
    } catch(error) {
        console.log("Error: ", error);
    }
};

export const getSoundById = (soundId) => {
    return db.prepare("SELECT * FROM sounds WHERE soundId = ?").get(soundId);
}

export const getSoundTitles = () => {
    return db.prepare("SELECT game, title FROM sounds").get();
}