import {Name} from "../../properties/name";
import {setClassMapping} from "../factory/classMapping";

export class Mulan extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = Mulan._lastname();
        this.firstname = Mulan._firstname(genderNouns);
        this.nickname = this.firstname;
        this.description = Mulan._description(dndRace, genderNouns);
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

    static _description(dndrace, new_npc) {
        return "Dominant in the eastern and southeastern shores of " +
            "the Inner Sea, the Mulan are generally tall, slim, and amber-skinned, " +
            "with eyes of hazel or brown. Their hair ranges from black to dark brown, " +
            "but in the lands where the Mulan are most prominent, nobles and many " +
            "other Mulan shave off all their hair.";
    }
}
setClassMapping('Mulan', Mulan);