import {Name} from "../../properties/name";
import {setClassMapping} from "./factory/classMapping";

export class DefaultRace extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = this._lastname();
        this.firstname = this._firstname(genderNouns);
        this.nickname = this._nickname();
        this.description = this._description(dndRace, genderNouns);
    }

    _lastname() {
        const surnames = ['Array'];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = ['Array'];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = ['Array'];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _nickname() {
        return this.lastname;
    }

    _description(dndrace, new_npc) {
        return `string ${dndrace.getRace()} string ${this.lastname} string ${new_npc.getHisHer()} string.`;
    }

    static noseReplacer() {
        return Nose.defaultNose();
    }

    static eyesReplacer() {
        return Eyes.canSee();
    }

    static mouthReplacer() {
        return Mouth.defaultMouths();
    }

    static chinReplacer() {
        return Chin.defaultChin();
    }

    static teethReplacer() {
        return Teeth.defaultTeeth();
    }

    static ageReplacer(dndrace) {
        if (dndrace === "Deep Gnome") {
            return Math.floor(Math.random() * (250 - 14 + 1)) + 14;
        } else {
            return Math.floor(Math.random() * (425 - 14 + 1)) + 14;
        }
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
setClassMapping('x', X);
