import {Name} from "../../properties/name";

export class Calishite extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = Calishite._lastname();
        this.firstname = Calishite._firstname(genderNouns);
        this.nickname = this.firstname;
        this.description = Calishite._description(dndRace, genderNouns);
    }

    static _lastname() {
        const surnames = ['Basha', 'Dumein', 'Jassan', 'Khalid', 'Mostana', 'Pashar', 'Rein'];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    static _firstname(genderNouns) {
        let firstname;
        if (genderNouns.getGender() === 'male') {
            const malenames = ['Aseir', 'Bardeid', 'Haseid', 'Khemed', 'Mehmen', 'Sudeiman', 'Zasheir'];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (genderNouns.getGender() === 'female') {
            const femalenames = ['Atala', 'Ceidil', 'Hama', 'Jasmal', 'Meilil', 'Seipora', 'Yasheira', 'Zasheida'];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    static _description(dndRace, genderNouns) {
        return "Shorter and slighter in build than most other humans, Calishites have dusky brown skin, hair, and eyes. " +
            "They’re found primarily in southwest Faerûn.";
    }
}
