export class Chin {
    /**
     * Constructs a chin
     * @param {string} dndrace - The race
     * @param {string} newNpc - The gender
     */
    constructor(dndrace, newNpc) {
        this.chin = this._chinShape(dndrace, newNpc);
    }

    /**
     * Arrays of strings Default Chins
     * @return {string} - The chin
     */
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
        const chin = `${chinShape} ${chinCurve} chin`;

        return chin;
    }

    /**
     * Build or choose specific array. Select random value string
     * @param {string} dndrace - The race
     * @param {string} newNpc - The gender
     * @return {string} - The chin
     */
    _chinShape(dndrace, newNpc) {
        // Assuming chinReplacer is a method in some other class named by the value of dndrace
        const raceClass = window[dndrace.toLowerCase()];
        if (raceClass && typeof raceClass.chinReplacer === 'function') {
            return raceClass.chinReplacer(dndrace, newNpc);
        } else {
            return Chin.defaultChin();
        }
    }

    /**
     * Getter
     * @return {string} - The chin
     */
    getChin() {
        return this.chin;
    }
}


