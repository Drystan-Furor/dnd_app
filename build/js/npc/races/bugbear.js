import {Name} from "../properties/name";
import {setClassMapping} from "./factory/classMapping";

export class Bugbear extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = this._lastname();
        this.firstname = this._firstname(genderNouns);
        this.nickname = this._lastname();
        this.description = this._description(dndRace, genderNouns);
    }

    _lastname() {
        const surnames = [
            'Khitran', 'Ghugrir', 'Vadumkk', 'Brimkk', 'Tudrolk', 'Rograth',
            'Rordonn', 'Vith', 'Chrilk', 'Tharr', 'Ghogran', 'Stamkk', 'Zhonn',
            'Ghurdolk', 'Stun', 'Hrodoth', 'Zirk', 'Stath', 'Bromkk', 'Rizzon',
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = ['Driekol', 'Greerkilx', 'Brabtygz', 'Glevzaagz', 'Lognerk', 'Xasb',
                'Jykeegs', 'Craang', 'Krart', 'Xat', 'Oz', 'Creld', 'Sriogz', 'Fiolx',];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = ['Kuqi', 'Enxa', 'Flihisz', 'Depolm', 'Nunoilee', 'Noxea', 'Frez',
                'Qeassa', 'Olk', 'Eagansa', 'Srokkaax', 'Gralbianq', 'Hoq',
                'Gnaalsia', 'Pryhxa',];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _nickname() {
        return this.lastname;
    }

    _description(dndrace, new_npc) {
        return dndrace + 's are hairy goblinoids born for battle and mayhem.' +
            'They survive by raiding and hunting, but are fond of setting ambushes' +
            'and fleeing when outmatched.';
    }
}
setClassMapping('Bugbear', Bugbear);
