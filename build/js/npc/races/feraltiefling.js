import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {Tiefling} from "./tiefling";

export class Feraltiefling extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        const biography = new Tiefling(dndRace, genderNouns);
        this.lastname = biography.getLastname();
        this.firstname = biography.getFirstname();
        this.nickname = biography.getNickname();
        this.description = biography.getDescription();
    }

}
setClassMapping('Feraltiefling', Feraltiefling);
