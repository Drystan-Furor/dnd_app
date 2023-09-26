import {Mouth} from "../profile/mouth";
import {Nose} from "../profile/nose";
import {Eyes} from "../profile/eyes";
import {Chin} from "../profile/chin";
import {Teeth} from "../profile/teeth";
import {Verbs} from "./verbs";


export class Profile {
    constructor(race, npc, npcClass) {
        this.face = this._facialConstruction(race, npc, npcClass);
    }

    getChin() {
        return this.chin;
    }

    getEyes() {
        return this.eyes;
    }

    getMouth() {
        return this.mouth;
    }

    getNose() {
        return this.nose;
    }

    getTeeth() {
        return this.teeth;
    }

    getFace() {
        return this.face;
    }

    _facialConstruction(race, npc, npcClass) {
        const manWoman = npc.getManWoman();
        const heshe = npc.getHeShe();
        const hisher = npc.getHisHer();
        const gender = npc.getGender();

        const eyes = new Eyes(race, npc);
        this.eyes = eyes.getEyes();

        const nose = new Nose(race, npc);
        this.nose = nose.getNose();

        const mouth = new Mouth(race, npc);
        this.mouth = mouth.getMouth();

        const teeth = new Teeth(race, npc);
        this.teeth = teeth.getTeeth();

        const chin = new Chin(race, npc);
        this.chin = chin.getChin();

        const face = " You " + Verbs.getObservation() +
            " this " + manWoman + " has " + this.nose +
            ". The " + npcClass + " meets your gaze with " +
            this.eyes + ". " +
            "As you seize up the " + manWoman + ", you " +
            Verbs.getObservation() + " " + heshe + " has " +
            this.chin + " and " + hisher + " mouth is set with " +
            this.mouth + ". " +
            "When the " + race + " is talking or shouting, you " +
            Verbs.getObservation() + " " + heshe + " " + this.teeth;

        return face;
    }
}
