export class Chin {

    constructor(dndRace, newNpc) {
        this.chin = this._chinShape(dndRace, newNpc);
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

    static culmen() {
        const chinCurves = ['pointy', 'round', 'square'];
        const chinCurve = chinCurves[Math.floor(Math.random() * chinCurves.length)];

        const chinShapes = [
            'a rather ', 'quite the', 'a very defined', 'a puffed',
            'a very protruding', 'a bulbous', 'a very small', 'a bit of a',
        ];
        const chinShape = chinShapes[Math.floor(Math.random() * chinShapes.length)];

        return chinShape + " " + chinCurve + " culmen";
    }


    _chinShape(dndRace, genderNouns) {
        if (dndRace === 'Aarakocra') {
            return Chin.culmen();
        }
        return Chin.defaultChin();
    }


    getChin() {
        return this.chin;
    }
}


