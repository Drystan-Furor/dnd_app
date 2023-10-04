import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

/*
Khalashtar names are three to five syllables long
and feature hard and hissing consonants.
 */
export class Khalastar extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname :this._firstname(genderNouns);
        this.firstname = '';
        this.nickname = null;
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _firstname(genderNouns) {
        let lastname;
        if (genderNouns.getGender() === 'male') {
            let prefix = [
                'Hal', 'Havra', 'Kana', 'Lana', 'Lan', 'Mal', 'Min',
                'Nevi', 'Par', 'Nol', 'Mo', 'Bo', 'Bal', 'Bul-ka',
                'Do', 'Re', 'Kes',
                'Mi', 'Fa', 'Sol', 'Si', 'Do', 'He',
            ];
            let suffix = [
                'harath', 'khad', 'melk', 'tash', 'kosh', 'tosh',
            ];
            prefix = prefix[Math.floor(Math.random() * prefix.length)];
            suffix = suffix[Math.floor(Math.random() * suffix.length)];
            lastname = prefix + suffix;
        }

        if (genderNouns.getGender() === 'female') {
            let prefix = [
                'Gani', 'Kha', 'La', 'Me', 'No', 'Pani', 'Sora',
                'Sho', 'Tha', 'Lo', 'Deha', 'Cozo', 'Do', 'Re',
                'Mi', 'Fa', 'Sol', 'Si', 'Do',
            ];
            let suffix = [
                'kashtai', 'shana', 'tari', 'vakri', 'raulad', 'reth', 'shara', 'nari',
            ];
            prefix = prefix[Math.floor(Math.random() * prefix.length)];
            suffix = suffix[Math.floor(Math.random() * suffix.length)];
            lastname = prefix + suffix;
        }
        return lastname;
    }

    _description(dndRace, genderNouns) {
        return `${dndRace} names are three to five syllables long and feature hard and hissing consonants. 
        The ${dndRace} are a compound race created from the union of humanity and renegade spirits from the plane of 
        dreams – spirits called quori. The ${dndRace} are often seen as wise, 
        spiritual people with great compassion for others. But there is an unmistakable alien quality to 
        ${this.lastname} as ${genderNouns.getHeShe()} is haunted by the conflicts of ${genderNouns.getHisHer()} 
        otherworldly spirits`;
    }
}

setClassMapping('Khalastar', Khalastar);
