import * as Races from '../';
import {Race} from "../../properties/race";

// This will now import all exported members from npc/races/index.js

export class RaceFactory {
    static createRace(race, genderNouns, age, parameters) {
        let className = convertRaceName(race.getRace());
        if (!Races[className]) {
            let random = selectRandomRace();
            random = convertRaceName(random);
            console.warn(`Race ${className} does not exist. Using a default race.`);
            race.setRace(parameters.homebrew);
            return new Races[random](race, genderNouns, age, parameters); // Return instance of a default race
        }
        return new Races[className](race, genderNouns, age, parameters);
    }
}

export function convertRaceName(raceName) {
    raceName = raceName.toLowerCase();
    // Remove special characters and replace spaces with an empty string
    let convertedName = raceName.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, '');
    // Make the first character uppercase
    return convertedName.charAt(0).toUpperCase() + convertedName.slice(1);
}

export function selectRandomRace() {
    let dndRace = Race.raceArray();
    dndRace = Race.randomFromArray(dndRace);
    return dndRace;

}