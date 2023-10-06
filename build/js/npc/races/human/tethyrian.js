import {Name} from "../../properties/name";
import {Chondathan} from "./chondathan";
import {setClassMapping} from "../factory/classMapping";

export class Tethyrian extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        const biography = new Chondathan(dndRace, genderNouns, age, parameters);
        this.lastname = parameters.lastname ? parameters.lastname : biography.getLastname();
        this.firstname = parameters.firstname ? parameters.firstname : biography.getFirstname();
        this.nickname = parameters.nickname ? parameters.nickname : null;
        this.description = Tethyrian._description(dndRace, genderNouns);
        if (!parameters.homebrew) {
            dndRace.setRace('Tethyrian');
        }
    }

    static _description(dndrace, new_npc) {
        return "Widespread along the entire Sword Coast at the " +
            "western edge of Faerûn, Tethyrians are of medium build and height, " +
            "with dusky skin that tends to grow fairer the farther north they dwell. " +
            "Their hair and eye color varies widely, but brown hair and blue eyes are " +
            "the most common. ";
    }
}
setClassMapping('Tethyrian', Tethyrian);