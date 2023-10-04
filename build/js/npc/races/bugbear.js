import {Name} from "../properties/name";
import {setClassMapping} from "./factory/classMapping";
import {Goblin} from "./goblin";

export class Bugbear extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : this._lastname();
        this.firstname = new Goblin(dndRace, genderNouns, age, parameters).getFirstname();
        this.nickname = null;
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname() {
        const surnames = [
            'Khitran', 'Ghugrir', 'Vadumkk', 'Brimkk', 'Tudrolk', 'Rograth',
            'Rordonn', 'Vith', 'Chrilk', 'Tharr', 'Ghogran', 'Stamkk', 'Zhonn',
            'Ghurdolk', 'Stun', 'Hrodoth', 'Zirk', 'Stath', 'Bromkk', 'Rizzon',
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }


    _description(dndrace, new_npc) {
        return dndrace + 's are hairy goblinoids born for battle and mayhem.' +
            'They survive by raiding and hunting, but are fond of setting ambushes' +
            'and fleeing when outmatched';
    }
}
setClassMapping('Bugbear', Bugbear);
