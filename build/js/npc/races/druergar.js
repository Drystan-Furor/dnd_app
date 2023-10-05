import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {Tiefling} from "./tiefling";
import {Dwarf} from "./dwarf";

export class Druergar extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        const biography = new Dwarf(dndRace, genderNouns, age, parameters);
        this.lastname = parameters.lastname ? parameters.lastname : biography.getLastname();
        this.firstname = parameters.firstname ? parameters.firstname : biography.getFirstname();
        this.nickname = parameters.nickname ? parameters.nickname : biography.getNickname();
        this.description = biography.getDescription();
    }

}

setClassMapping('Druergar', Druergar);
