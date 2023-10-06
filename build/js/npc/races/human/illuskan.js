import {Name} from "../../properties/name";
import {setClassMapping} from "../factory/classMapping";
import {Damaran} from "./damaran";

export class Illuskan extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname :Illuskan._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : Illuskan._firstname(genderNouns);
        this.nickname = parameters.nickname ? parameters.nickname : null;
        this.description = Illuskan._description(dndRace, genderNouns);
        if (!parameters.homebrew) {
            dndRace.setRace('Illuskan');
        }
    }

    static _lastname() {
        const surnames = [
            'Brightwood', 'Helder', 'Hornraven', 'Lackman',
            'Stormwind', 'Windrivver',];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    static _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = [
                'Ander', 'Blath', 'Bran', 'Frath', 'Geth', 'Lander',
                'Luth', 'Malcer', 'Stor', 'Taman', 'Urth',];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = [
                'Amafrey', 'Betha', 'Cefrey', 'Kethra', 'Mara',
                'Olga', 'Silifrey', 'Westra',];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    static _description(dndrace, new_npc) {
        return "Illuskans are tall, fair-skinned folk with blue or " +
            "steely gray eyes. Most have raven-black hair, but those who inhabit " +
            "the extreme northwest have blond, red, or light brown hair.";
    }
}
setClassMapping('Illuskan', Illuskan);