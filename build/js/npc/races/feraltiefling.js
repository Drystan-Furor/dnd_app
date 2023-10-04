import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {Tiefling} from "./tiefling";

export class Feraltiefling extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        const biography = new Tiefling(dndRace, genderNouns, age, parameters);
        this.lastname = parameters.lastname ? parameters.lastname : biography.getLastname();
        this.firstname = parameters.firstname ? parameters.firstname : biography.getFirstname();
        this.nickname = parameters.nickname ? parameters.nickname : biography.getNickname();
        this.description = biography.getDescription();
    }

}

setClassMapping('Feraltiefling', Feraltiefling);
