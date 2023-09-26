import {Name} from "../../properties/name";

export class Turami extends Name {
    constructor(dndrace, new_npc) {
        super();
        this.lastname = Turami._lastname();
        this.firstname = Turami._firstname(new_npc);
        this.nickname = this.firstname;
        this.description = Turami._description(dndrace, new_npc);
    }

    static _lastname() {
        const surnames = [         'Agosto', 'Astorio', 'Calabra', 'Domine', 'Falone',
            'Marivaldi', 'Pisacar', 'Ramondo',];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    static _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = [ 'Anton', 'Diero', 'Marcon', 'Pieron', 'Rimardo',
                'Romero', 'Salazar', 'Umbero',];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = [  'Balama', 'Dona', 'Faila', 'Jalana', 'Luisa',
                'Marta', 'Quara', 'Selise', 'Vonda',];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    static _description(dndrace, new_npc) {
        return "Native to the southern shore of the Inner Sea, " +
            "the Turami people are generally tall and muscular, " +
            "with dark mahogany skin, curly black hair, and dark eyes.";
        }
}
