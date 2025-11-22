import Database from "better-sqlite3";

const db = new Database("./db/soundsdb.db");

try {
    db.prepare(
        "CREATE TABLE IF NOT EXISTS sounds (soundId INTEGER PRIMARY KEY AUTOINCREMENT, game TEXT NOT NULL, title TEXT NOT NULL, artist TEXT DEFAULT 'Unknown', embed TEXT NOT NULL)"
    ).run();

    // const embed = '<iframe width="110" height="200" src="https://www.myinstants.com/instant/duke-nukem-theme-1-60375/embed/" frameborder="0" scrolling="no"></iframe>'
    // db.prepare(
    //     "INSERT INTO sounds (game, title, artist, embed) VALUES ('Duke Nukem', 'Theme Riff Part 1', 'Megadeth/Lee Jackson', ?)"
    // ).run(embed);
} catch (error) {
    console.log(`Error: Couldn't complete db actions ${error}`);
};

export default db;