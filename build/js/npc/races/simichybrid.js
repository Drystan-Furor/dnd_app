import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {getRandomElement} from "./factory/utility";
import {Human} from "./human/human";
import {Elf} from "./elf";
import {Vedalkan} from "./vedalkan";

export class Simichybrid extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        if (!parameters.homebrew){
            dndRace.setRace('Simic-hybrid');
        }
        this._variation(dndRace);
        this.biography = this._biography(dndRace.getVariant(), dndRace, genderNouns, parameters);
        this.lastname = parameters.lastname ? parameters.lastname : this.biography.getLastname()
        this.firstname = parameters.firstname ? parameters.firstname : this.biography.getFirstname()
        this.nickname = parameters.nickname ? parameters.nickname :this.biography.getNickname()
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
            biography = new Human(dndRace, genderNouns, parameters);
        }
        if (variant === 'Elf') {
            biography = new Elf(dndRace, genderNouns, parameters);
        }
        if (variant === 'Vedalkan') {
            biography = new Vedalkan(dndRace, genderNouns, parameters);
        }
        return biography;
    }

    _description(dndRace, genderNouns) {
        return `As a hyper-develloped ${dndRace.getRace()} ${genderNouns.getHeShe()} is designed by the Guardian 
        Project to serve a specific purpose that involves protecting the Simic Combine in some way as a “guardian”`;
    }

    static ageReplacer() {
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
