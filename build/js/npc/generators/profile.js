import {Mouth} from "../profile/mouth";
import {Nose} from "../profile/nose";
import {Eyes} from "../profile/eyes";
import {Chin} from "../profile/chin";
import {Teeth} from "../profile/teeth";
import {Verbs} from "./verbs";


export class Profile {
    constructor(race, genderNouns, npcClass) {
        this.face = this._facialConstruction(race, genderNouns, npcClass);
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

    _facialConstruction(race, genderNouns, npcClass) {
        const manWoman = genderNouns.getManWoman();
        const heshe = genderNouns.getHeShe();
        const hisher = genderNouns.getHisHer();
        const gender = genderNouns.getGender();

        const eyes = new Eyes(race, genderNouns);
        this.eyes = eyes.getEyes();

        const nose = new Nose(race, genderNouns);
        this.nose = nose.getNose();

        const mouth = new Mouth(race, genderNouns);
        this.mouth = mouth.getMouth();

        const teeth = new Teeth(race, genderNouns);
        this.teeth = teeth.getTeeth();

        const chin = new Chin(race, genderNouns);
        this.chin = chin.getChin();

        const face =
            "The " + npcClass + " meets your gaze with " +
            this.eyes + ". " +
            "You " + Verbs.getObservation() +
            " this " + manWoman + " has " + this.nose +
            "As you seize up the " + manWoman + ", you " +
            Verbs.getObservation() + " " + heshe + " has " +
            this.chin + " and " + hisher + " mouth is set with " +
            this.mouth + ". " +
            "When the " + race + " is talking or shouting, you " +
            Verbs.getObservation() + " " + heshe + " " + this.teeth;

        return face;
    }
}
