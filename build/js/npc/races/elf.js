import {classMapping, setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {filterClassMapping, getRandomElement} from "./factory/utility";

export class Elf extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        dndRace = Elf._subclass();
        this.lastname = this._lastname();
        this.firstname = this._firstname(genderNouns);
        this.nickname = this._nickname();
        this.description = this._description(dndRace, genderNouns);
        if (dndRace === "Drow") {
            this._drow(dndRace, genderNouns);
        }
    }

    _lastname() {
        const surnames = [
            'Amakiir', 'Gemflower', 'Amastacia', 'Starflower', 'Galanodel',
            'Moonwhisper', 'Holimion', 'Diamonddew', 'Ilphelkiir', 'Gemblossom', 'Liadon',
            'Silverfrond', 'Meliamne', 'Oakenheel', 'Naïlo', 'Nightbreeze', 'Siannodel', 'Moonbrook',
            'Xiloscient', 'Goldpetal',
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = [
                'Adran', 'Aelar', 'Aramil', 'Arannis', 'Aust', 'Beiro',
                'Berrian', 'Carric', 'Enialis', 'Erdan', 'Erevan', 'Galinndan',
                'Hadarai', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Laucian',
                'Mindartis', 'Paelias', 'Peren', 'Quarion', 'Riardon',
                'Rolen', 'Soveliss', 'Thamior', 'Tharivol', 'Theren', 'Varis',
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = [
                'Adrie', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua',
                'Bethrynna', 'Birel', 'Caelynn', 'Drusilia', 'Enna', 'Felosial',
                'Ielenia', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Meriele',
                'Mialee', 'Naivara', 'Quelenna', 'Quillathe', 'Sariel',
                'Shanairra', 'Shava', 'Silaqui', 'Theirastra', 'Thia',
                'Vadania', 'Valanthe', 'Xanaphia',
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _nickname() {
        const nickname = [
            'Ara', 'Bryn', 'Del', 'Eryn', 'Faen', 'Innil', 'Lael',
            'Mella', 'Naill', 'Naeris', 'Phann', 'Rael',
            'Rinn', 'Sai', 'Syllin', 'Thia', 'Vall',
        ];
        return nickname[Math.floor(Math.random() * nickname.length)];
    }

    _description(dndrace, new_npc) {
        return `Any ${dndrace} comes from a magical people of otherworldly grace, 
        living in the world but not entirely part of it.`;
    }


    static _subclass(dndRace) {
        const elfRaces = [
            "High Elf", "Wood Elf", "Eladrin Elf", "Drow",
        ];
        dndRace = getRandomElement(elfRaces);
        return dndRace
    }

    _drow(dndRace, genderNouns) {
        const drow = 'Drow'
        const filteredMapping = filterClassMapping(classMapping, drow);
        const ClassReference = filteredMapping[drow];
        if (!ClassReference && typeof ClassReference.constructor === 'function') {
            return false;
        }
        return new ClassReference(drow, genderNouns).getLastname();
    }
}
setClassMapping('Elf', Elf);
