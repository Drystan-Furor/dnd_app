import {Name} from "../../properties/name";

export class Calishite extends Name {
    constructor(dndrace, new_npc) {
        super();
        this.lastname = Calishite._lastname();
        this.firstname = Calishite._firstname(new_npc);
        this.nickname = this.firstname;
        this.description = Calishite._description(dndrace, new_npc);
    }

    static _lastname() {
        const surnames = ['Basha', 'Dumein', 'Jassan', 'Khalid', 'Mostana', 'Pashar', 'Rein'];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    static _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = ['Aseir', 'Bardeid', 'Haseid', 'Khemed', 'Mehmen', 'Sudeiman', 'Zasheir'];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = ['Atala', 'Ceidil', 'Hama', 'Jasmal', 'Meilil', 'Seipora', 'Yasheira', 'Zasheida'];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    static _description(dndrace, new_npc) {
        return "Shorter and slighter in build than most other humans, Calishites have dusky brown skin, hair, and eyes. " +
            "They’re found primarily in southwest Faerûn.";
    }
}
