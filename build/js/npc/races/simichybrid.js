import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {getRandomElement} from "./factory/utility";
import {Human} from "./human/human";
import {Elf} from "./elf";

export class Simichybrid extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this._variation(dndRace);
        this._biography(dndRace.getVariant(), dndRace, genderNouns);
        this.lastname = this._lastname();
        this.firstname = this._firstname(genderNouns);
        this.nickname = this._nickname();
        this.description = this._description(dndRace, genderNouns);
    }

    _variation(dndRace) {
        const variant = [
            "Human", "Elf", "Vedalkan",
        ];
        dndRace.setVariant(getRandomElement(variant));
    }

    _biography(variant, dndRace, genderNouns) {
        let biography;
        if (variant === 'Human') {
            biography = new Human(dndRace, genderNouns);
        }
        if (variant === 'Elf') {
            biography = new Elf(dndRace, genderNouns);
        }
        if (variant === 'Vedalkan') {
       //     biography = new Vedalkan(dndRace, genderNouns);
        }
        return biography;

    }

    _description(dndRace, genderNouns) {
        return `As a hyper-develloped ${dndRace.getRace()} ${genderNouns.getHeShe()} is designed by the Guardian 
        Project to serve a specific purpose that involves protecting the Simic Combine in some way as a “guardian”`;
    }

    static ageReplacer(dndrace) {
        let age = Math.floor(Math.random() * (80 - 14 + 1)) + 14;
        if (age > 30) {
            age /= 2;
        }
        if (age < 15) {
            age += 3;
        }
        return Math.ceil(age);
    }

}
setClassMapping('Simichybrid', Simichybrid);
