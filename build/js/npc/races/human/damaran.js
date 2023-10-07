import {Name} from "../../properties/name";
import {setClassMapping} from "../factory/classMapping";

export class Damaran extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : Damaran._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : Damaran._firstname(genderNouns);
        this.nickname = parameters.nickname ? parameters.nickname : null;
        this.description = Damaran._description(dndRace, genderNouns);
        if (!parameters.homebrew && dndRace.getRace() !== 'Half-Elf') {
            dndRace.setRace('Damaran');
        }
    }

    static _lastname() {
        const surnames = ['Bersk', 'Chernin', 'Dotsk', 'Kulenov', 'Marsk', 'Nemetsk',
            'Shemov', 'Starag',];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    static _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = ['Bor', 'Fodel', 'Glar', 'Grigor', 'Igan', 'Ivor',
                'Kosef', 'Mival', 'Orel', 'Pavel', 'Sergor',];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = ['Alethra', 'Kara', 'Katernin', 'Mara',
                'Natali', 'Olma', 'Tana', 'Zora',];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    static _description(dndRace, new_npc) {
        return `Found primarily in the northwest of Faerûn, ${dndRace.getRace()} are of moderate height and build, 
        with skin hues ranging from tawny to fair. Their hair is usually brown or black, and their eye color varies 
        widely, though brown is most common`;
    }
}

setClassMapping('Damaran', Damaran);