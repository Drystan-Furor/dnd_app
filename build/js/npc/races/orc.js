import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {getRandomElement} from "./factory/utility";

export class Orc extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this._variation(dndRace);
        if (!parameters.homebrew) {
            dndRace.setRace(dndRace.getVariant());
        }
        this.lastname = parameters.lastname ? parameters.lastname : this._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : this._firstname(genderNouns);
        this.nickname = parameters.nickname ? parameters.nickname : this._nickname();
        this.description = this._description(dndRace, genderNouns);
    }

    _variation(dndRace) {
        const variant = [
            "Orc", "Orc of Exandria", "Orc of Eberron",
        ];
        dndRace.setVariant(getRandomElement(variant));
    }

    _lastname() {
        const surnames = [
            'Dummik', 'Horthor', 'Lammar', 'Sormuzhik', 'Turnskull',
            'Brodroll', 'Shotrakk', 'Dhudduk', 'Grorzakk', 'Zuvrab', 'Juvrag',
            'Ulkrunnar', 'Zorgar',
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(genderNouns) {
        let firstname;
        if (genderNouns.getGender() === 'male') {
            const malenames = [
                'Agar', 'Akaros', 'Arrakk', 'Augh', 'Besk', 'Bruegar', 'Dahk', 'Durth',
                'Derkk', 'Fang', 'Ekk', 'Gar', 'Garlak', 'Grinkel', 'Kalip', 'Karash',
                'Devdas', 'Dgul', 'Drood', 'Druuk', 'Eagol', 'Edals',
                'Ghorn', 'Gnarsh', 'Gobar', 'Gogar', 'Gothog', 'Gremog', 'Grimslade',
                'Gronz', 'Grumbar', 'Gugal', 'Guzud', 'Hargul', 'Harl', 'Harll',
                'Honzu', 'Hoog', 'Lugh', 'Mimerk', 'Hogar', 'Jzets', 'Lubash',
                'Hool', 'Hordar', 'Horrach', 'Hoygh', 'Huagh', 'Jhanzur', 'Jutor',
                'Kesk', 'Kol', 'Korgul', 'Krell', 'Krusk', 'Lagazi', 'Lorzak',
                'Mord', 'Murook', 'Nizam', 'Nogu', 'Nyarl', 'Omotar', 'Ohr', 'Ohtar',
                'Orngart', 'Ordich', 'Taing', 'Tanglar', 'Toop', 'Trood', 'Tomph',
                'Orrusk', 'Oth', 'Raorr', 'Rendar', 'Rheen', 'Sark', 'Scrag', 'Sorgh',
                'Tarak', 'Targ', 'Tawar', 'Thar', 'Tharag', 'Thog', 'Thoin', 'Toemor',
                'Tulmak', 'Tzens', 'Ubada', 'Udhgar', 'Ugarth', 'Ugurth', 'Ungar',
                'Ungvar', 'Urzad', 'Vaath', 'Wung', 'Wykks', 'Xar', 'Xtec', 'Yark',
                'Vanchu', 'Vtam', 'Whudu', 'Wogg', 'Wogar', 'Wrnach',
                'Yazar', 'Yetto', 'Yurk', 'Zarx', 'Zotl', 'Zuboko',
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (genderNouns.getGender() === 'female') {
            const femalenames = [
                'Betharra', 'Bree', 'Creske', 'Edarreske', 'Duvaega',
                'Franch', 'Fukel', 'Gaaki', 'Dhithik', 'Doduh',
                'Grai', 'Grigri', 'Gynk', 'Huru', 'Neske', 'Ootah',
                'Orgaega', 'Parih', 'Puyet', 'Puyetto', 'Nadke', 'Didgu',
                'Tupacu', 'Varra', 'Yeskarra', 'Zel', 'Bhev', 'Gif', 'Ghon',
                'Zedvan', 'Guli', 'Shellu', 'Ghivgu', 'Kami', 'Dhumau', 'Sim',
                'Zuv', 'Rik ', 'Raul', 'Uvgang', 'Nugne',
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _nickname() {
        let prefix = [
            'Swift', 'Aberrant', 'Angry', 'Lost', 'Vulgar', 'Vengeful', 'Gross',
            'Skin', 'Smoke', 'Dream', 'Throat', 'Beast', 'Vein', 'Vicious',
            'Forsaken', 'Merciless', 'Flame', 'Reckless', 'Worthless', 'Deserted',
            'Desolate', 'Furious', 'Bitter', 'Resentful',
        ];
        let altfix = [
            ' Scalper', ' Lance', ' Horror', ' Heart', ' Gasher', ' Dissector',
            ' Saber', ' Chaos', ' Squasher', ' Bruiser', ' Slicer', ' Spear',
            ' Axe', ' Killer', ' Ghost', ' Cruncher', ' Squelcher', ' Slayer',
            ' Queller', ' Smasher', ' Behemoth', ' Butcher', ' King', ' Baron',
            ' Prince', ' Executioner', ' Slaughterer',
        ];

        prefix = prefix[Math.floor(Math.random() * prefix.length)];
        altfix = altfix[Math.floor(Math.random() * altfix.length)];

        const isTheNickname = Math.floor(Math.random() * 20) + 1;
        let nickname;

        if (isTheNickname === 1) {
            prefix = 'The';
            nickname = prefix + altfix;
        } else if (isTheNickname === 20) {
            altfix = 'The ';
            nickname = altfix + prefix;
        } else if (isTheNickname >= 15 && isTheNickname <= 19) {
            nickname = "The " + prefix + altfix;
        } else {
            nickname = prefix + altfix;
        }

        return nickname;

    }

    _description(dndRace, genderNouns) {
        let reason = [
            'trough battle', 'after a duel', 'after "surviving" a robbery',
            'during a tribal war', 'due to skills in combat',
            'while serving in the army', 'after the "other one" did not survive',
            'in an arena', 'when someone else tried to win at a cardgame',
            'in warfare', 'in a crusade', 'trough bloodshed',
            'during a skirmish', 'in a clandestine operation', 'after a fierce confrontation',
            'through strategic maneuvering', 'in a rebellion', 'during a siege',
            'after a stealthy assassination', 'in a naval battle', 'during a jousting tournament',
            'through a test of skill', 'in a hunting accident', 'after a bar brawl',
            'in a dispute over land', 'during a raid', 'in a gamble gone wrong',
            'after being ambushed', 'in a feud between families', 'through a trial by combat',
            'in a struggle for power', 'during a mutiny', 'in a street fight',
            'after a daring rescue', 'in a showdown', 'through a perilous journey',
            'in a fight over honor', 'during an uprising', 'in a clash of clans',
            'after a betrayal', 'in a sorcery duel', 'through a rite of passage',
            'in a battle of wits', 'during a pirate attack', 'in a diplomatic incident',
            'after a vendetta', 'in a melee', 'through a daring escape',
            'in a confrontation with a beast', 'during an expedition', 'in a gladiator match',
            'after a challenge', 'in a contest of strength', 'through a display of valor',
            'in a competition', 'during a ritual', 'in a dance of death',
            'after proving oneself', 'in a labyrinth', 'through a game of chance',
            'in a race against time', 'during a quest', 'in a trial of endurance',
            'after a sacrifice', 'in a battle royale', 'through a series of ordeals',
            'in a fight to the death', 'during a ceremony', 'in a struggle for survival',
            'after a mystical event', 'in a confrontation of fate', 'through divine intervention',
            'in a conflict of interest', 'during a storm', 'in a time of war',
            'after a close encounter', 'in a fight against the odds', 'through a moral dilemma',
            'in a battle of the bands', 'during a moment of truth', 'in a test of faith',
            'after a resolution', 'in a duel of fates', 'through a paradox',
        ];
        reason = reason[Math.floor(Math.random() * reason.length)];

        return `${this.firstname} ${this.lastname} uses the epithet ${this.nickname}.
        A name ${genderNouns.getHeShe()} earned ${reason}`;
    }
}

setClassMapping('Orc', Orc);
