import {Name} from "../../properties/name";
import {setClassMapping} from "../factory/classMapping";

export class Mulan extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : Mulan._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : Mulan._firstname(genderNouns);
        this.nickname = parameters.nickname ? parameters.nickname : null;
        this.description = Mulan._description(dndRace, genderNouns);
        if (!parameters.homebrew && dndRace.getRace() !== 'Half-Elf') {
            dndRace.setRace('Mulan');
        }
    }


    static _lastname() {
        const surnames = ['Ankhalab', 'Anskuld', 'Fezim', 'Hahpet', 'Nathandem',
            'Sepret', 'Uuthrakt',];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    static _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = ['Aoth', 'Bareris', 'Ehput-Ki', 'Kethoth', 'Mumed',
                'Ramas', 'So-Kehur', 'Thazar-De', 'Urhur',];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = ['Arizima', 'Chathi', 'Nephis', 'Nulara', 'Murithi',
                'Sefris', 'Thola', 'Umara', 'Zolis',];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    static _description(dndRace, new_npc) {
        return `Dominant in the eastern and southeastern shores of the Inner Sea, the ${dndRace.getRace()} 
        are generally tall, slim, and amber-skinned, with eyes of hazel or brown. Their hair ranges from black to dark 
        brown, but in the lands where the ${dndRace.getRace()}  are most prominent, nobles and many other 
        ${dndRace.getRace()} shave off all their hair`;
    }
}

setClassMapping('Mulan', Mulan);