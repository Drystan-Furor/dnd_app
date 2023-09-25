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

    /**
     * Build or choose specific array. Select random value string
     * @param {string} dndrace - The race
     * @param {string} newNpc - The gender
     * @return {string} - The mouth
     */
    _mouthShape(dndrace, newNpc) {
        // Assuming mouthReplacer is a method in some other class named by the value of dndrace
        const raceClass = window[dndrace.toLowerCase()];
        if (raceClass && typeof raceClass.mouthReplacer === 'function') {
            return raceClass.mouthReplacer(dndrace, newNpc);
        } else {
            return Mouth.defaultMouths();
        }
    }

    /**
     * Getter
     * @return {string} - The mouth
     */
    getMouth() {
        return this.mouth;
    }
}

