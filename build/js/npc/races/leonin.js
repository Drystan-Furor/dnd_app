import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Leonin extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = this._lastname();
        this.firstname = this._firstname(genderNouns);
        this.nickname = this.firstname
        this.description = this._description(dndRace, genderNouns);
    }

    _lastname() {
        const surnames = [
            'Embereye', 'Flintclaw', 'Goldenfield', 'Ironmane',
            'Starfeller', 'Sunguides',
        ];
        let lastname = surnames[Math.floor(Math.random() * surnames.length)];
        const preposition = ' of the ';
        const preposnamed = Math.floor(Math.random() * 20) + 1;
        if (preposnamed > 2) {
            lastname = preposition + lastname;
        }
        this.lastname = lastname;
        return lastname;
    }

    _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = [
                'Apto', 'Athoz', 'Baragon', 'Bryguz', 'Eremoz', 'Gorioz',
                'Grexes', 'Oriz', 'Pyxathor', 'Teoz', 'Xemnon', 'Xior',
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = [
                'Aletha', 'Atagone', 'Demne', 'Doxia', 'Ecate', 'Eriz',
                'Gragonde', 'Iadma', 'Koila', 'Oramne', 'Seza', 'Ziore',
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _description(dndRace, genderNouns) {
        return `${dndRace.getRace()} are muscular, covered in fur, have feline tails,
        and their heads look identical to those of lions.
        ${dndRace.getRace()}, proud humanoid creatures that share many traits with their lesser cousins, lions,
        are a race native to the moors of eastern Anterra`;
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

}

setClassMapping('Leonin', Leonin);
