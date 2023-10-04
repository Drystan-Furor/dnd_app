import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {getRandomElement} from "./factory/utility";

export class Halfling extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this._variation(dndRace);
        this.lastname = parameters.lastname ? parameters.lastname :this._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : this._firstname(genderNouns);
        this.nickname = null;
        this.description = this._description(dndRace, genderNouns);
    }

    _variation(dndRace) {
        const variant = [
            "Lightfoot Halfling", "Stout Halfling",
        ];
        dndRace.setVariant(getRandomElement(variant));
    }

    _lastname() {
        const surnames = [
            'Brushgather', 'Goodbarrel', 'Greenbottle', 'High-hill', 'Hilltopple',
            'Leagallow', 'Tealeaf', 'Thorngage', 'Tosscobble', 'Underbough',
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = [
                'Alton', 'Ander', 'Cade', 'Corrin', 'Eldon',
                'Errich', 'Finnan', 'Garret', 'Lindal', 'Lyle', 'Merric',
                'Milo', 'Osborn', 'Perrin', 'Reed', 'Roscoe', 'Wellby',
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = [
                'Andry', 'Bree', 'Callie', 'Cora', 'Euphemia',
                'Jillian', 'Kithri', 'Lavinia', 'Lidda', 'Merla',
                'Nedda', 'Paela', 'Portia', 'Seraphina', 'Shaena',
                'Trym', 'Vani', 'Verna', 'Reed',
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _description(dndRace, genderNouns) {
        return `${dndRace.getVariant()}s are an affable and cheerful people.
    They cherish the bonds of family and friendship as well as the
    comforts of hearth and home, harboring few dreams of gold or glory`;
    }

    static bodySizeReplacer() {
        const bodysizes = [
            "very small", "quite small", "small", "small sized",
            "rather tiny", "below middle sized", "really small",
            "slightly smaller", "rather small", "reasonably small",
            "tiny", "characteristically tiny sized", "naturally small sized",
        ];
        return bodysizes[Math.floor(Math.random() * bodysizes.length)];
    }
}

setClassMapping('Halfling', Halfling);
