import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {getRandomElement} from "./factory/utility";

export class Changeling extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : this._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : "";
        this.nickname = null;
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname() {
        const lastnames1 = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'];
        const lastname1 = lastnames1[Math.floor(Math.random() * lastnames1.length)];

        const lastnames2 = ['a', 'e', 'i', 'o', 'u', 'y', 'au', 'ou', 'oe', 'ee', 'aa', 'ea', 'eo', 'ie', 'ei', 'ai', 'oi', 'ui', 'uu', 'ua', 'uo', 'oo', 'ae', 'io'];
        const lastname2 = lastnames2[Math.floor(Math.random() * lastnames2.length)];

        const lastnames3 = ['b', 'c', 'd', 'f', 'g', 'h', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'z', 'ch', 'rt', 'ts', 'kt', 'st', 'ts', 'sk', 'rx', 'gs', 'ks', 'gz', 'chs', 'tk', 'ps', 'px', 'gg', 'kk', 'wn', 'cht', 'dt'];
        const lastname3 = lastnames3[Math.floor(Math.random() * lastnames3.length)];

        return lastname1 + lastname2 + lastname3;
    }

    _description(dndrace, genderNouns) {
        const strings = [
            "Passer, a changeling who wishes to fit in with conventional society" +
            "and live life in only one form or at least suppress the" +
            "shape-changing ability to better fit in with the society",

            "Becomer, " + genderNouns.getHeShe() + " believes that to be a changeling is to" +
            "possess many different shapes and often different identities and lives altogether." +
            "This becomer takes the concept of a dual life to a whole new degree and successfully " +
            "lives as several 'different people'",

            "Seeker or 'reality seeker', and is convinced that a great truth exists which only the " +
            "changelings can discover; " + genderNouns.getHeShe() + " suppresses " + genderNouns.getHisHer() + "" +
            " shapechanging abilities and prefers to live or socialize with other changelings",
        ];
        const string = getRandomElement(strings);
        return this.lastname + " is a " + string;
    }

    static eyesReplacer() {
        return "large colorless eyes circled by thick black rings";
    }
}
setClassMapping('Changeling', Changeling);
