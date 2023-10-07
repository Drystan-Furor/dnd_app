import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {getRandomElement} from "./factory/utility";

export class Satyr extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.firstname = parameters.firstname ? parameters.firstname : '';
        this.lastname = parameters.lastname ? parameters.lastname : this._firstname(genderNouns);
        this.nickname = null;
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _firstname(genderNouns) {
        let firstname;
        if (genderNouns.getGender() === 'male') {
            const malenames = [
                'Adrastos', 'Aeolus', 'Brontes', 'Castor', 'Cephalus', 'Glaucus',
                'Helios', 'Iacchus', 'Kreios', 'Lycus', 'Melanthios', 'Okeanos',
                'Proteus',
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (genderNouns.getGender() === 'female') {
            const femalenames = [
                'Acantha', 'Astraea', 'Briseis', 'Clio', 'Erato', 'Harmonia',
                'Ianthe', 'Jocasta', 'Melete', 'Phaedra', 'Phoebe', 'Selene',
                'Tethys',
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _description(dndRace, genderNouns) {
        return `${dndRace}'s resemble stout men and woman with fur covered lower bodies
        and hooves similar to that of a goat. Horns grow from ${this.firstname}'s head,
        akin to a ram`;
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

setClassMapping('Satyr', Satyr);
