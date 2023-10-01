import {Mouth} from "../profile/mouth";
import {Nose} from "../profile/nose";
import {Eyes} from "../profile/eyes";
import {Chin} from "../profile/chin";
import {Teeth} from "../profile/teeth";
import {Verbs} from "./verbs";
import {getRandomElement, shuffleArray, ucFirst} from "../races/factory/utility";


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
        const himHer = genderNouns.getHimHer();

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

        const eyesString = [
            "The " + npcClass + " meets your gaze with " + this.eyes,
            "The " + npcClass + " stares at you with " + this.eyes,
            "With " + this.eyes + ", the " + npcClass + " locks eyes with you",
            "Observing " + this.eyes + ", you find yourself locked in the gaze of the " + npcClass,
            "Your eyes meet the " + this.eyes + " of the " + npcClass + ", creating a silent connection",
        ];

        const noseString = [
            "You " + Verbs.getObservation() + " this " + manWoman + " has " + this.nose,
            "You " + Verbs.getObservation() + " that this " + manWoman + " is characterized by " + this.nose,
            "You " + Verbs.getObservation() + " a distinct " + this.nose + " on this " + manWoman,
            "You " + Verbs.getObservation() + " that this " + manWoman + " possesses " + this.nose,
        ];

        const mouthChinString = [
            "As you " + Verbs.getObservation() + ", you " +
            Verbs.getObservation() + " " + heshe + " has " +
            this.chin + " and " + hisher + " mouth is set with " + this.mouth,

            "While examining the " + manWoman + ", you " + Verbs.getObservation() + " that " + heshe + " has " +
            this.chin + " and " + hisher + " lips are " + this.mouth,

            "As your eyes scan the " + manWoman + ", it becomes apparent that " + heshe + " possesses " +
            this.chin + " and " + hisher + " " + this.mouth,

            "Scanning the " + manWoman + ", it’s clear that " + heshe + " features " +
            this.chin + " and " + hisher + " lips, they are " + this.mouth,
        ];

        const communication1 = Verbs.getCommunication();
        let communication2 = Verbs.getCommunication();
        if (communication2 === communication1) {
            communication2 = Verbs.getCommunication();
        }
        const teethString = ucFirst(Verbs.getMoment()) + " the " + race + " " + communication1 + " or " + communication2 + ", you " + Verbs.getObservation() + " " + heshe + " " + this.teeth;

        function constructRandomFace() {
            const sentences = [
                getRandomElement(eyesString),
                getRandomElement(noseString),
                getRandomElement(mouthChinString),
                teethString
            ];

            const shuffledSentences = shuffleArray(sentences);
            return shuffledSentences.join(". ");
        }

        return constructRandomFace();
    }
}
