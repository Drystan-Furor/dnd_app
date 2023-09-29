import * as Races from '../';
// This will now import all exported members from npc/races/index.js

export class RaceFactory {
    static createRace(dndRace, genderNouns) {
        let race = convertRaceName(dndRace);
        let className = race.charAt(0).toUpperCase() + race.slice(1);
        if (!Races[className]) {
            console.warn(`Race ${race} does not exist. Using a default race.`);
            return new Races.Elf(race, genderNouns); // Return an instance of a default race
            // throw new Error(`Race ${race} does not exist`);
        }
        return new Races[className](race, genderNouns);
    }
}

function convertRaceName(raceName) {
    // Remove special characters and replace spaces with an empty string
    let convertedName = raceName.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, '');
    // Make the first character uppercase
    return convertedName.charAt(0).toUpperCase() + convertedName.slice(1);
}
