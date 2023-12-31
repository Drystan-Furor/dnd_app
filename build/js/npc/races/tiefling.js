import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Tiefling extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : this._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : this._firstname(genderNouns);
        this.nickname = null;
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname() {
        const surnames = [
            'Art', 'Carrion', 'Chant', 'Creed', 'Despair', 'Excellence', 'Fear',
            'Glory', 'Hope', 'Ideal', 'Music', 'Nowhere', 'Open', 'Poetry',
            'Quest', 'Random', 'Reverence', 'Sorrow', 'Temerity', 'Torment', 'Weary',
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = [
                'Akmenos', 'Amnon', 'Barakas', 'Damakos', 'Ekemon', 'Iados',
                'Kairon', 'Leucis', 'Melech', 'Mordai', 'Morthos', 'Pelaios',
                'Skamos', 'Therai',
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = [
                'Akta', 'Anakis', 'Bryseis', 'Criella', 'Damaia', 'Ea', 'Kallista',
                'Lerissa', 'Makaria', 'Nemeia', 'Orianna', 'Phelaia', 'Rieta',
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _description(dndRace, new_npc) {
        return `To be greeted with stares and whispers, 
    to suffer violence and insult on the street,
    to see mistrust and fear in every eye:
        this is the lot of the ${dndRace}`;
    }

}

setClassMapping('Tiefling', Tiefling);
