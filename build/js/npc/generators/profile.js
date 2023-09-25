// Usage
import {Mouth} from "../profile/mouth";
import {Nose} from "../profile/nose";
import {Eyes} from "../profile/eyes";
import {Chin} from "../profile/chin";
import {Teeth} from "../profile/teeth";
import {VerbsGenerator} from "./verbs";

const chinInstance = new Chin('someRace', 'someGender');
console.log(chinInstance.getChin());

// Usage
const eyesInstance = new Eyes('someRace', 'someGender');
console.log(eyesInstance.getEyes());


// Usage
const mouthInstance = new Mouth('someRace', 'someGender');
console.log(mouthInstance.getMouth());

// Usage
const noseInstance = new Nose('someRace', 'someGender');
console.log(noseInstance.getNose());

// Usage
const teethInstance = new Teeth('someRace', 'someGender');
console.log(teethInstance.getTeeth());

//-----------------------------------------------------------------------------------------------

export class ProfileGenerator {
    constructor(dndrace, new_npc, classInstance) {
        this.face = this._facialConstruction(dndrace, new_npc, classInstance);
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

    _facialConstruction(dndrace, new_npc, classInstance) {
        const manWoman = new_npc.getManWoman();
        const heshe = new_npc.getHeShe();
        const hisher = new_npc.getHisHer();
        const gender = new_npc.getGender();

        const eyes = new Eyes(dndrace, new_npc);
        this.eyes = eyes.getEyes();

        const nose = new Nose(dndrace, new_npc);
        this.nose = nose.getNose();

        const mouth = new Mouth(dndrace, new_npc);
        this.mouth = mouth.getMouth();

        const teeth = new Teeth(dndrace, new_npc);
        this.teeth = teeth.getTeeth();

        const chin = new Chin(dndrace, new_npc);
        this.chin = chin.getChin();

        const face = " You " + VerbsGenerator.getObservation() +
            " this " + manWoman + " has " + this.nose +
            ". The " + classInstance + " meets your gaze with " +
            this.eyes + ". " +
            "As you seize up the " + manWoman + ", you " +
            VerbsGenerator.getObservation() + " " + heshe + " has " +
            this.chin + " and " + hisher + " mouth is set with " +
            this.mouth + ". " +
            "When the " + dndrace + " is talking or shouting, you " +
            VerbsGenerator.getObservation() + " " + heshe + " " + this.teeth;

        return face;
    }
}
