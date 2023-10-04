import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Goblin extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : this._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : this._firstname(genderNouns);
        this.nickname = parameters.nickname ? parameters.nickname :this._nickname();
        this.description = this._description(dndRace, genderNouns);
    }



    _lastname() {
        const surnames = [
            'of Crazy Arrow Tribe', 'of Salty Foot Clan', 'Mintybreath', 'Trinketmake',
            'of Smelly Hill Tribe', 'Horseride', 'Bignose', 'of Giant Crow tribe',
            'Dungrake', 'Manychild', 'Onebrow', 'Whitetooth', 'Woodleg', 'Highprofit',
            'Smalleye',
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = [
                'Driekol', 'Greerkilx', 'Brabtygz', 'Glevzaagz', 'Lognerk', 'Xasb',
                'Jykeegs', 'Craang', 'Krart', 'Xat', 'Oz', 'Creld', 'Sriogz', 'Fiolx',
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = [
                'Kuqi', 'Enxa', 'Flihisz', 'Depolm', 'Nunoilee', 'Noxea', 'Frez',
                'Qeassa', 'Olk', 'Eagansa', 'Srokkaax', 'Gralbianq', 'Hoq',
                'Gnaalsia', 'Pryhxa',
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _nickname() {
        const prefixes = [
            'Snail', 'Weak', 'Flat', 'Wide', 'Ugly', 'Oaf', 'Frog', 'Grub', 'Brain', 'Bite',
            'Mud', 'Meek', 'Snot', 'Pig', 'Worm', 'Dull', 'Limp', 'Owl', 'Numb', 'Murk',
            'Lump',
        ];
        const nick = prefixes[Math.floor(Math.random() * prefixes.length)];

        const altFixes = [
            'brain', 'flab', 'ear', 'gut', 'head', 'face', 'arm', 'mush', 'size', 'feet',
            'teeth', 'mud', 'mouth', 'cheek', 'knuckle', 'ball', 'finger',
        ];
        const name = altFixes[Math.floor(Math.random() * altFixes.length)];
        return nick + name;
    }

    _description(dndRace, genderNouns) {
        return `The fat faced ${this.firstname} is known as ${this.nickname}.
        Pointy ears, a broad nose, a sloped back forehead and small sharp fangs,
        along with a crouched posture, ${this.nickname} is a ${dndRace.getRace()}
        for sure`;
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

setClassMapping('Goblin', Goblin);
