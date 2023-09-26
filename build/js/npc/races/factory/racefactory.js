import * as Races from '../';
import {Calishite} from "../"; // This will now import all exported members from npc/races/index.js

export class RaceFactory {
    static createRace(type, genderNouns) {
        let race = type.charAt(0).toUpperCase() + type.slice(1);
        if (!Races[race]) {
            console.warn(`Race ${race} does not exist. Using a default race.`);
            return new Races.Calishite(type, genderNouns); // Return an instance of a default race
            // throw new Error(`Race ${race} does not exist`);
        }
        return new Races[race](type, genderNouns);
    }
}
