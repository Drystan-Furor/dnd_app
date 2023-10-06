import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Kender extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname :this._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : this._firstname(genderNouns);
        this.nickname = parameters.nickname ? parameters.nickname : this._nickname();
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname() {
        const surnames = [
            'Lightfoot',
            'Tealeaf',
            'Underbough',
            'Quickhand',
            'Tumblebelly',
            'Pouchworthy',
            'Lockpicker',
            'Trickfoot',
            'Wanderlust',
            'Pocketsnatch'
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(genderNouns) {
        let firstname;
        if (genderNouns.getGender() === 'male') {
            const malenames = [
                'Tasslehoff',
                'Tas',
                'Fizban',
                'Scamp',
                'Rascal',
                'Gintilli',
                'Kipper',
                'Perrin',
                'Lun',
                'Rik'
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (genderNouns.getGender() === 'female') {
            const femalenames = [
                'Trillium',
                'Bella',
                'Sera',
                'Luna',
                'Mint',
                'Petal',
                'Glimmer',
                'Trixie',
                'Faye',
                'Wren'
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _nickname() {
        const nickname = [
            'Pouchsniffer',
            'Lockfumbler',
            'Mapturner',
            'Hoopleaf',
            'Wanderfoot',
            'Gleam-eye',
            'Treasurefinder',
            'Nimblefingers',
            'Coinflip',
            'Jestmaster',
        ];
        return nickname[Math.floor(Math.random() * nickname.length)];
    }

    _description(dndRace, genderNouns) {
        return `${dndRace} are inspired by the ${dndRace}'s natural curiosity, their knack for "borrowing" items, and 
        their love for adventure. ${this.nickname} is one of the mischievous, fearless, and eternally curious folks 
        from the world of Dragonlance`;
    }

    static bodySizeReplacer() {
        const bodysizes = [
            "very small", "quite small", "small", "small sized",
            "rather tiny", "below middle sized", "really small",
            "slightly smaller", "rather small", "reasonably small",
            "tiny", "characteristically tiny sized", "naturally small sized",
        ];
        return bodysizes[Math.floor(Math.random() * bodysizes.length)];
    }
}
setClassMapping('Kender', Kender);
