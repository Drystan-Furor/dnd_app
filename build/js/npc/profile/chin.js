import {classMapping} from "../races/factory/classMapping";

export class Chin {

    constructor(dndRace, genderNouns) {
        this.chin = this._randomChin(dndRace, genderNouns);
    }

    static defaultChin() {
        const chinShapes = [
            'a rather ', 'quite the', 'a very defined', 'a puffed',
            'a very protruding', 'a bulbous', 'a very small', 'a bit of a',
        ];

        const chinCurves = [
            'pointy', 'round', 'square',
        ];

        const chinShape = chinShapes[Math.floor(Math.random() * chinShapes.length)];
        const chinCurve = chinCurves[Math.floor(Math.random() * chinCurves.length)];
        return `${chinShape} ${chinCurve} chin`;
    }

    _randomChin(dndRace, genderNouns) {
        const ClassReference = classMapping[dndRace];
        if (ClassReference && typeof ClassReference.chinReplacer === 'function') {
            return ClassReference.chinReplacer(dndRace, genderNouns);
        }
        return Chin.defaultChin();
    }


    getChin() {
        return this.chin;
    }
}


