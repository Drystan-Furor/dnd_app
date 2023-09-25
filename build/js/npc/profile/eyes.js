export class Eyes {
    /**
     * Constructs eye shapes and determine if blind or not
     * @param {string} dndrace - The race
     * @param {string} newNpc - The gender
     */
    constructor(dndrace, newNpc) {
        this.eyes = this._eyeShape(dndrace, newNpc);
    }

    /**
     * Build or choose specific array. Select random value string
     * @param {string} dndrace - The race
     * @param {string} newNpc - The gender
     * @return {string} - The eyes
     */
    _eyeShape(dndrace, newNpc) {
        // Assuming eyesReplacer is a method in some other class named by the value of dndrace
        const raceClass = window[dndrace.toLowerCase()];
        if (raceClass && typeof raceClass.eyesReplacer === 'function') {
            return raceClass.eyesReplacer(dndrace, newNpc);
        } else {
            return Eyes.canSee();
        }
    }

    /**
     * Array of eye shapes
     * @return {string} - The eye shape
     */
    static defaultEyeShape() {
        const eyeShapes = [
            "squinty eyes", "big eyes", "small eyes",
            "fairly large eyes", "tired eyes",
            "energetic eyes", "drowzy eyes",
            "round eyes", "almond shaped eyes",
            "wide set eyes", "close set eyes",
            "prominent eyes", "downturned eyes",
            "upturned eyes", "deep set eyes", "droopy eyes",
            "monolid eyes",
        ];

        const eyes = eyeShapes[Math.floor(Math.random() * eyeShapes.length)];
        return eyes;
    }

    /**
     * D100 if one can see.
     * 1% chance to be blinded
     * 9% to be naturally blind /half blind
     * array to randomize blindness
     * @return {string} - The eyes
     */
    static canSee() {
        let eyes = Eyes.defaultEyeShape();
        const hasEyes = Math.floor(Math.random() * 100) + 1;
        if (hasEyes === 1) {
            eyes = 'empty eye sockets, eyes gauged out';
        } else if (hasEyes >= 2 && hasEyes <= 10) {
            const blindEye = [
                ", the left eye is blind", ", the right eye is blind",
                ", but both eyes are blind",
            ];
            const blindness = blindEye[Math.floor(Math.random() * blindEye.length)];
            eyes += blindness;
        }
        return eyes;
    }

    /**
     * Getter
     * @return {string} - The eyes
     */
    getEyes() {
        return this.eyes;
    }
}


