import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class DefaultRace extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname :this._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : this._firstname(genderNouns);
        this.nickname = parameters.nickname ? parameters.nickname : this._nickname();
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname() {
        const surnames = [
            'Array'
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(genderNouns) {
        let firstname;
        if (genderNouns.getGender() === 'male') {
            const malenames = [
                'Array'
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (genderNouns.getGender() === 'female') {
            const femalenames = [
                'Array'
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _nickname() {
        const nickname = [
            'Array',
        ];
        return nickname[Math.floor(Math.random() * nickname.length)];
        // return this.lastname;

    }

    /*
    string
     */
    _description(dndRace, genderNouns) {
        return `string ${dndRace} string ${this.lastname} string ${genderNouns.getHisHer()} string.`;
    }

    static noseReplacer() {
        return Nose.defaultNose();
    }

    static eyesReplacer() {
        return Eyes.canSee();
    }

    static mouthReplacer() {
        return Mouth.defaultMouths();
    }

    static chinReplacer() {
        return Chin.defaultChin();
    }

    static teethReplacer() {
        return Teeth.defaultTeeth();
    }

    static ageReplacer(dndrace) {
        if (dndrace === "Deep Gnome") {
            return Math.floor(Math.random() * (250 - 14 + 1)) + 14;
        } else {
            return Math.floor(Math.random() * (425 - 14 + 1)) + 14;
        }
    }

    static bodySizeReplacer() {
        const bodysizes = [
            "very small",
        ];
        return bodysizes[Math.floor(Math.random() * bodysizes.length)];
    }

    static bodyTypeReplacer() {
        const bodysizes = [
            "very small",
        ];
        return bodysizes[Math.floor(Math.random() * bodysizes.length)];
    }

    static bodyShapeReplacer() {
        const bodysizes = [
            "very small",
        ];
        return bodysizes[Math.floor(Math.random() * bodysizes.length)];
    }

    static shoesReplacer() {
        const shoes = [
            'one-toed',
        ];
        const feet = feet[Math.floor(Math.random() * feet.length)];
        return `string  ${feet} feet.`;
    }
}
setClassMapping('x', X);
