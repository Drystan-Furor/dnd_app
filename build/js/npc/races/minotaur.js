import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {getRandomElement} from "./factory/utility";

export class Minotaur extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = this._lastname();
        this.firstname = this._firstname(genderNouns);
        this.nickname = this.firstname;
        this.description = this._description(dndRace, genderNouns);
    }

    _lastname() {
        const surnames1 = [
            'Fearless', 'Steady', 'Silent', 'Brave', 'Orc', 'Sharp', 'Steel', 'Wolf',
            'Truth', 'Keen', 'Valiant', 'Thick', 'Vigil', 'Swift', 'Steady', 'Jagged',
            'Thunder', 'Boulder', 'Nimble',
        ];
        const lastname1 = surnames1[Math.floor(Math.random() * surnames1.length)];

        const surnames2 = [
            'bane', 'pelt', 'heart', 'body', 'hide', 'leader', 'slash', 'mind', 'horn',
            'hoof', 'runner', 'warrior', 'walker', 'fist', 'fury',
        ];
        const lastname2 = surnames2[Math.floor(Math.random() * surnames2.length)];

        return `${lastname1}${lastname2}`;
    }

    _firstname(genderNouns) {
        let prefix = [];
        let altfix = [];
        if (genderNouns.getGender() === 'male') {
            prefix = ['Oes', 'Nan', 'Tee', 'Mou', 'Drin', 'Da', 'Gar', 'Har', 'Em', 'Vi', 'Djar', 'Kur', 'Noo'];
            altfix = ['fin', 'nore', 'las', 'min', 'diar', 'gur', 'fajar', 'daran', 'vin', 'me', 'rapak', 'kar', 'gajan'];
        }

        if (genderNouns.getGender() === 'female') {
            prefix = ['Fen', 'Neo', 'Hi', 'Kuo', 'Raa', 'Via', 'Nuo', 'Tes', 'Uo', 'Tia', 'Loo', 'Vi', 'Hila', 'Ras', 'Si', 'Laa'];
            altfix = ['ren', 'tin', 'nefa', 'ris', 'sfa', 'zara', 'rin', 'trin', 'varis', 'nore', 'vin', 'tri', 'naru'];
        }
        prefix = prefix[Math.floor(Math.random() * prefix.length)];
        altfix = altfix[Math.floor(Math.random() * altfix.length)];
        return `${prefix}${altfix}`;
    }

    _description(dndRace, genderNouns) {
        return `${this.firstname} is a barrel-chested humanoid with a head resembling that of a bull`;
    }


    static bodySizeReplacer() {
        const bodysizes = [
            "sort of typical giant-sized", "common giant sized",
            "characteristically large sized", "naturally large sized", "typical",
            "more or less standard sized", "moderately large sized", 'sizable',

            "large", "quite large", "very large", "really large",
            "slightly larger", "reasonably large", 'immense', 'enormous',
            "massive", "tall", 'big', 'hulking', 'towering', 'giant',
        ];
        return bodysizes[Math.floor(Math.random() * bodysizes.length)];
    }

    static shoesReplacer(dndRace, genderNouns) {
        const hooves = [
            'one-toed', 'two-toed', 'three-toed', 'four-toed', 'deer', 'moose', 'elk', 'horse', 'cow', 'cloven',
            'pig', 'sheep', 'goat', 'bison', 'buffalo', 'antelope', 'giraffe', 'hippopotamus', 'rhinoceros', 'tapir',
            'zebra', 'donkey', 'mule', 'pronghorn', 'gazelle', 'ibex', 'chamois', 'reindeer', 'caribou', 'sable',
            'springbok', 'oryx', 'kudu', 'waterbuck', 'eland', 'okapi', 'wildebeest', 'hartebeest', 'tahr', 'argali',
            'urial', 'mouflon', 'dik-dik', 'duiker', 'gerenuk', 'impala', 'roan', 'sable', 'topi', 'gnu', 'addax',
            'oryx', 'screw-horned', 'split-hoofed', 'solid-hoofed', 'webbed-hoofed', 'splayed-hoofed', 'cleft-hoofed'
        ];

        const shapes = [
            'club', 'aligned', 'migrated', 'negative palmar', 'laminitic', 'founder',
        ];

        const hiLows = [
            'high', 'low', 'long toe low heel',
        ];

        const hoof = getRandomElement(hooves);
        const shape = getRandomElement(shapes);
        const hiLow = getRandomElement(hiLows);

        return `This ${dndRace} has ${hiLow}, ${shape} ${hoof} hooves.`;
    }
}

setClassMapping('Minotaur', Minotaur);
