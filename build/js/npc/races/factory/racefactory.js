import * as Races from '../';
// This will now import all exported members from npc/races/index.js

export class RaceFactory {
    static createRace(race, genderNouns, age) {
        let dndRace = convertRaceName(race.getRace());
        let className = dndRace.charAt(0).toUpperCase() + dndRace.slice(1);
        if (!Races[className]) {
            console.warn(`Race ${dndRace} does not exist. Using a default race.`);
            return new Races.Dwarf(race, genderNouns, age); // Return an instance of a default race
            // throw new Error(`Race ${race} does not exist`);
        }
        return new Races[className](race, genderNouns, age);
    }
}

export function convertRaceName(raceName) {
    raceName = raceName.toLowerCase();
    // Remove special characters and replace spaces with an empty string
    let convertedName = raceName.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, '');
    // Make the first character uppercase
    return convertedName.charAt(0).toUpperCase() + convertedName.slice(1);
}
