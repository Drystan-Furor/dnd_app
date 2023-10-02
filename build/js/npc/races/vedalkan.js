import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Vedalkan extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = this._lastname(genderNouns);
        this.firstname = '';
        this.nickname = this.lastname;
        this.description = this._description(dndRace, genderNouns);
    }


    _lastname(genderNouns) {
        let firstname, firstname1, firstname2;
        if (genderNouns.getGender() === 'male') {
            const prefix = [
                'Ag', 'Bel', 'Dal', 'Firel', 'Ka', 'Kop', 'Lo', 'Math', 'Mo',
                'Ne', 'Nhil', 'Ni', 'Otro', 'Ov', 'Pele', 'Ri', 'Tri',
                'Ul', 'Yo', 'Za',
            ];
            firstname1 = prefix[Math.floor(Math.random() * prefix.length)];

            const suffix = [
                'lar', 'lin', 'lid', 'lan', 'vin', 'lony', 'mar', 'van', 'dar',
                'bun', 'losh', 'tt', 'vac', 'ner', 'll', 'vaz', 'din',
                'lov', 'taz',
            ];
            firstname2 = suffix[Math.floor(Math.random() * suffix.length)];
        }

        if (genderNouns.getGender() === 'female') {
            const prefix = [
                'An', 'Ca', 'Co', 'Euphe', 'Ji', 'Ki', 'La', 'Li', 'Mer', 'Ne', 'Pae',
                'Por', 'Sera', 'Shae', 'Va', 'Ver', 'Re',
            ];
            firstname1 = prefix[Math.floor(Math.random() * prefix.length)];

            const suffix = [
                'dry', 'llie', 'ra', 'mia', 'llian', 'thri', 'vinia', 'dda', 'la', 'tia',
                'phina', 'na', 'ni',
            ];
            firstname2 = suffix[Math.floor(Math.random() * suffix.length)];
        }
        firstname = firstname1 + firstname2;
        return firstname;
    }

    _description(dndRace, genderNouns) {
        return `string ${dndRace.getRace()} s are largely humanoid, besides ${genderNouns.getHisHer()} 
        blue skin the most notable outward feature of ${this.nickname} is ${genderNouns.getHisHer()} lack of 
        external ears`;
    }

}

setClassMapping('Vedalkan', Vedalkan);
