import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Tortle extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this._lastname(parameters);
        this.description = this._description(dndRace, genderNouns);
    }

    _lastname(parameters) {
        const surnames = [
            'Lim', 'Ini', 'Gar', 'Damu', 'Quott', 'Xelbuk', 'Ploqwat', 'Kinlek',
            'Orly', 'El', 'Em', 'Elad', 'Irtig', 'Wolka', 'Lurtill', 'Nurtlen',
            'Krin', 'Natt', 'Juoror', 'Artli', 'Oppog', 'Plog', 'Iat', 'Pluzu',
            'Lorog', 'Nadyd', 'Uoppe', 'Plug', 'Kuret', 'Artli', 'Oppog', 'Plog',
            'Iat', 'Pluzu', 'Lorog', 'Nadyd', 'Uoppe', 'Plug', 'Kuret', 'Loper',
            'Uazlul', 'Xak', 'Nuall', 'Dinqom', 'Alatt', 'Wenquc', 'Nonnik',
            'Plurtar', 'Emod', 'Lerdla', 'Xikal', 'Erot', 'Wam', 'Kruk', 'Qo',
            'Buzeg', 'Plupen', 'Kriac', 'Gunqe', 'Yizlu', 'Wug', 'Pluc', 'Azloc',
            'Ul', 'Bur', 'Jize', 'Budat', 'Tueg', 'Dualkyr', 'Xirdlyl', 'Tua',
            'Wig', 'Gurtoll', 'Dat', 'Wuldull', 'Oza', 'Wozluc', 'Nemu', 'Duzla',
        ];
        let surnameIndices = [Math.floor(Math.random() * surnames.length), Math.floor(Math.random() * surnames.length)];
        while(surnameIndices[0] === surnameIndices[1]) {
            surnameIndices[1] = Math.floor(Math.random() * surnames.length);
        }
        this.nickname = parameters.nickname ? parameters.nickname : surnames[surnameIndices[0]];
        this.lastname = parameters.lastname ? parameters.lastname : surnames[surnameIndices[1]];
        this.firstname = parameters.firstname ? parameters.firstname : "";
    }

    _description(dndRace, genderNouns) {
        let age = Math.floor(Math.random() * (50 - 12 + 1)) + 12; // Random age between 12 and 50
        let y;

        if (age < 20) {
            y = Math.floor(Math.random() * (6 - 2 + 1)) + 2;
        } else if (age > 30) {
            y = Math.floor(Math.random() * (18 - 2 + 1)) + 2;
        } else {
            y = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
        }

        y = age - y;
        return `A bipedal tortoise who ${y} years ago chose the name ${this.nickname}, 
        as ${dndRace.getRace()}'s pick and choose names as they see fit.
        Tortle names are quite short and simple, but there are exceptions. There is no distinction between male 
        and female names. Tortle names can change a lot throughout their lives. They pick and choose names as they 
        see fit, so encountering a tortle years later can look different and pick a new name`;
    }
}

setClassMapping('Tortle', Tortle);
