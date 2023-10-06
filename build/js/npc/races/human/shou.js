import {Name} from "../../properties/name";
import {setClassMapping} from "../factory/classMapping";

export class Shou extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : Shou._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : Shou._firstname(genderNouns);
        this.nickname = parameters.nickname ? parameters.nickname : null;
        this.description = Shou._description(dndRace, genderNouns);
        if (!parameters.homebrew) {
            dndRace.setRace('Shou');
        }
    }

    static _lastname() {
        const surnames = ['Chien', 'Huang', 'Kao', 'Kung', 'Lao', 'Ling', 'Mei', 'Pin',
            'Shin', 'Sum', 'Tan', 'Wan',];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    static _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = [   'An', 'Chen', 'Chi', 'Fai', 'Jiang', 'Jun', 'Lian',
                'Long', 'Meng', 'On', 'Shan', 'Shui', 'Wen',];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = [ 'Bai', 'Chao', 'Jia', 'Lei', 'Mei', 'Qiao', 'Shui', 'Tai',];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    static _description(dndrace, new_npc) {
        return "The Shou are the most numerous and powerful ethnic " +
            "group in Kara-Tur, far to the east of Faerûn. They are yellowish-bronze in " +
            "hue, with black hair and dark eyes. Shou surnames are usually presented before the given name.";
    }
}
setClassMapping('Shou', Shou);