import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {Elf} from "./elf";

export class Seaelf extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        const biography = new Elf(dndRace, genderNouns, age, parameters);
        dndRace.setRace('Sea Elf');
        this.lastname = parameters.lastname ? parameters.lastname : biography.getLastname();
        this.firstname = parameters.firstname ? parameters.firstname : biography.getFirstname();
        this.firstname = parameters.firstname ? parameters.firstname : this._nickname();
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _description(dndRace, new_npc) {
        return `${this.firstname} fell in love with the wild beauty of the ocean in the earliest days of the multiverse. 
        While other elves traveled from realm to realm, all ${dndRace} navigated the currents and explored the waters of 
        many worlds. Today these elves can be found wherever oceans exist, as well as in the Elemental Plane of Water.`;
    }

}

setClassMapping('Seaelf', Seaelf);
