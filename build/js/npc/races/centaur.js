import {getRandomElement} from "./factory/utility";
import {Name} from "../properties/name";
import {setClassMapping} from "./factory/classMapping";

export class Centaur extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = this._lastname();
        this.firstname = this._firstname(genderNouns);
        this.nickname = this.firstname;
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname() {
        const surnames = ['Array'];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = ['Thond', 'Dezreva', 'Jelveth', 'Vigrid', "Thoz'ren", 'Rhoklund',
                'Vrannul', "Tos'zid", 'Ghalrevol', "Thez'had", 'Dwaildir',
                'Vokrih', 'Gird', 'Rhin', 'Dor',];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = ['Bydran', 'Zifrin', 'Phazirin', 'Dyzlet', 'Zefnael', 'Vyfnozen', 'Lalthag',
                'Phaflet', 'Lilraeh', 'Vinroh', 'Lizhan',
                'Fydath', 'Shegevan', 'Phorlosh', 'Nograr', 'Melrat', 'Phazren', 'Horzer',];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _nickname() {
        return this.lastname;
    }

    _description(dndrace, new_npc) {
        return "Roamers at heart, " + dndrace + "s love open spaces and the freedom to travel. " +
            "As much as they can, " + dndrace + "s run. They race the wind,hooves thundering and tails streaming behind them."
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
            'one-toed', 'two-toed', 'deer', 'moose', 'elk', 'horse', 'cow', 'cloven',
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
setClassMapping('Centaur', Centaur);
