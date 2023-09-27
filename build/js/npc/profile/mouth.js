import {classMapping} from "../races/factory/classMapping";

export class Mouth {

    constructor(dndrace, newNpc) {
        this.mouth = this._randomMouth(dndrace, newNpc);
    }

    static defaultMouths() {
        const mouthShapes = [
            "full lips", "round lips", "bow shaped lips", "heavy lower lips",
            "heart shaped lips", "heavy upper lips", "wide lips", "thin lips",
            "downward turned lips", "perfectly proportioned lips",
        ];
        const mouth = mouthShapes[Math.floor(Math.random() * mouthShapes.length)];
        return mouth;
    }

    _randomMouth(dndRace, genderNouns) {
        const ClassReference = classMapping[dndRace];
        if (ClassReference && typeof ClassReference.mouthReplacer === 'function') {
            return ClassReference.mouthReplacer(dndRace, genderNouns);
        }
        return Mouth.defaultMouths();
    }

    getMouth() {
        return this.mouth;
    }
}
