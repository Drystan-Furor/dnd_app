import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {getRandomElement} from "./factory/utility";
import {Human} from "./human/human";
import {Elf} from "./elf";

export class Halfelf extends Name {
    constructor(dndRace, genderNouns, age) {
        super(dndRace, genderNouns, age);
        this._variation(dndRace);
        const variant = dndRace.getVariant();
        this._ageReplacer(dndRace, age)
        const biography = this._biography(variant, dndRace, genderNouns);
        this.lastname = biography.getLastname();
        this.firstname = biography.getFirstname(genderNouns);
        this.nickname = biography.getNickname();
        this.description = this._description(dndRace, genderNouns);
    }

    _biography(variant, dndRace, genderNouns) {
        let biography;
        if (variant === 'Human') {
            biography = new Human(dndRace, genderNouns);
        }
        if (variant === 'Elf') {
            biography = new Elf(dndRace, genderNouns);
        }
        return biography;

    }

    _variation(dndRace) {
        const variant = [
            "Human", "Elf"
        ];
        dndRace.setVariant(getRandomElement(variant));
    }

    _ageReplacer(dndRace, age) {
        age.setAge(Math.floor(Math.random() * (180 - 14 + 1)) + 14);
    }

    _description(dndRace, genderNouns) {
        return `Walking in two worlds but truly belonging to neither, a ${dndRace.getVariant()} ${dndRace.getRace()} 
        combines what some say are the best qualities of their elf and human
        parents: human curiosity, inventiveness, and ambition tempered by the
        refined senses, love of nature, and artistic tastes of the elves. 
        A ${dndRace.getRace()} uses either human or elven naming conventions, 
        as if to emphasize that they don’t really fit in to either society.
        A ${dndRace.getRace()} raised among humans are often given elven names,
        and those raised among elves often take human names`;
    }
}

setClassMapping('Halfelf', Halfelf);
