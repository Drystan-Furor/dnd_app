import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Thrikreen extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : this._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : this._firstname();
        this.nickname = parameters.nickname ? parameters.nickname : this._nickname();
        this.description = this._description(dndRace.getRace(), genderNouns);

    }

    _lastname() {
        const surnames = [
            'ChakTha',
            'TikTik',
            'KlikCha',
            'ThrikTak',
            'KrikKrak',
            'Chitik',
            'KrakChit',
            'TakTik',
            'ChakKlik',
            'TrikTak'
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname() {
        // Thri-Kreen generally don't have gender-specific names
        const names = [
            'Klik',
            'Tak',
            'Chak',
            'Krak',
            'Tik',
            'Thrik',
            'Chit',
            'Krik',
            'Trik',
            'Kak'
        ];
        return names[Math.floor(Math.random() * names.length)];
    }

    _nickname() {
        const nickname = [
            'The Swift',
            'Six-Legs',
            'SpearMaster',
            'ChitinKing',
            'SandStrider',
            'DuneDasher',
            'AntennaAce',
            'MantisMind',
            'DesertDweller',
            'LeapLord'
        ];
        return nickname[Math.floor(Math.random() * nickname.length)];
    }

    _description(dndRace, genderNouns) {
        return `${dndRace} have insectile features and two pairs of arms. Their bodies are encased in protective chitin.
         They can alter the coloration of this carapace to blend in with their natural surroundings. 
        ${dndRace} speak by clacking their mandibles and waving their antennae, indicating to other ${dndRace} what 
        they are thinking and feeling. Other creatures find this method of communication difficult to interpret and 
        impossible to duplicate. To interact with other folk, ${dndRace} rely on a form of telepathy`;
    }


}

setClassMapping('Thrikreen', Thrikreen);
