export class Mouth {
    /**
     * Constructs and selects a random value string for mouth
     * @param {string} dndrace - The race
     * @param {string} newNpc - The gender
     */
    constructor(dndrace, newNpc) {
        this.mouth = this._mouthShape(dndrace, newNpc);
    }

    /**
     * Array of default values for Mouth
     * @return {string} - The mouth shape
     */
    static defaultMouths() {
        const mouthShapes = [
            "full lips", "round lips", "bow shaped lips", "heavy lower lips",
            "heart shaped lips", "heavy upper lips", "wide lips", "thin lips",
            "downward turned lips", "perfectly proportioned lips",
        ];
        const mouth = mouthShapes[Math.floor(Math.random() * mouthShapes.length)];
        return mouth;
    }

    static tomia() {
        const tomia = [
            "sharp tomia", "rounded tomia", "bow shaped tomia", "heavy lower tomia",
            "ridged tomia", "heavy upper tomia", "sawtooth serated tomia", "thin tomia",
            "downward turned tomia", "perfectly proportioned tomia",
        ];
        return tomia[Math.floor(Math.random() * tomia.length)];
    }

    _mouthShape(dndRace, genderNouns) {
        if (dndRace === 'Aarakocra') {
            return Mouth.tomia();
        }
        return Mouth.defaultMouths();
    }


    getMouth() {
        return this.mouth;
    }
}

