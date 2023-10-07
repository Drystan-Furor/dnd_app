import {Name} from "../../properties/name";
import {setClassMapping} from "../factory/classMapping";

export class Turami extends Name {

    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : Turami._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : Turami._firstname(genderNouns);
        this.nickname = parameters.nickname ? parameters.nickname : null;
        this.description = Turami._description(dndRace, genderNouns);
        if (!parameters.homebrew && dndRace.getRace() !== 'Half-Elf') {
            dndRace.setRace('Turami');
        }
    }

    static _lastname() {
        const surnames = ['Agosto', 'Astorio', 'Calabra', 'Domine', 'Falone',
            'Marivaldi', 'Pisacar', 'Ramondo',];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    static _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = ['Anton', 'Diero', 'Marcon', 'Pieron', 'Rimardo',
                'Romero', 'Salazar', 'Umbero',];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = ['Balama', 'Dona', 'Faila', 'Jalana', 'Luisa',
                'Marta', 'Quara', 'Selise', 'Vonda',];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    static _description(dndRace, new_npc) {
        return `Native to the southern shore of the Inner Sea, the ${dndRace.getRace()} 
        people are generally tall and muscular, with dark mahogany skin, curly black hair, and dark eyes`;
    }
}

setClassMapping('Turami', Turami);