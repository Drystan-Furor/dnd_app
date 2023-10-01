import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Hobgoblin extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = this._lastname();
        this.firstname = this._firstname();
        this.nickname = this._nickname();
        this.description = this._description();
    }

    _lastname() {
        const surnames = [
            'Skin Flayers', 'Flesh Renders', 'Leg Choppers', 'Marrow Suckers', 'Eye Rippers',
            'Skull Smashers', 'Slow Killers', 'Gnawers', 'Cheek Reapers', 'Gut Jabbers',
            'Tribe Kaknec', 'Tribe Raknorz', 'Tribe Gagruc', 'Tribe Klulzek',
            'Tribe Nokorz', 'Tribe Rharz', 'Tribe Glorbal', 'Tribe Gavlan',
        ];
        return " of the " + surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(new_npc) {
        let firstname;
        const names = [
            'Nar', 'Lorz Crash', 'Mog', 'Kundod', 'Dognerz', 'Lor Stalk', 'Khozrug',
            'Klaruk Bark', 'Avon Rend', 'Rhalzen ', 'Klalvarg', 'Ekkek ', 'Lokvovod ',
            'Vrurkozol ', 'Lerz ', 'Druzol', 'Zondud', 'Nokag', 'Grodral', 'Drorag',
            'Drolvrak',
        ];
        firstname = names[Math.floor(Math.random() * names.length)];
        return firstname;
    }

    _nickname() {
        const nickname = [
            'The Dagger', 'Whack', 'Crash', 'Stunt', 'Revel', 'The Rotten',
            'Retch', 'The Bold', 'Rush', 'Jolt', 'Grin', 'The Brute', 'The Red',
            'The Corrupt', 'Glare', 'The Monster', 'Lash', 'Lurch',
            'The Skeleton', 'The Loud',
        ];
        return nickname[Math.floor(Math.random() * nickname.length)];
    }

    _description() {
        return `The large goblinoid ${this.firstname} is known as ${this.nickname}`;
    }
}

setClassMapping('Hobgoblin', Hobgoblin);
