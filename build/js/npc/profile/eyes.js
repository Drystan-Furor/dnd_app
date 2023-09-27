export class Eyes {

    constructor(dndRace, genderNouns) {
        this.eyes = this._eyeShape(dndRace, genderNouns);
    }

    _eyeShape(dndRace, genderNouns) {
        if (dndRace === 'Testcase') {
            return Eyes.defaultEyeShape(dndRace, genderNouns);
        } else {
            return Eyes.canSee();
        }
    }

    static defaultEyeShape() {
        const eyes = [
            "squinty eyes", "big eyes", "small eyes",
            "fairly large eyes", "tired eyes",
            "energetic eyes", "drowzy eyes",
            "round eyes", "almond shaped eyes",
            "wide set eyes", "close set eyes",
            "prominent eyes", "downturned eyes",
            "upturned eyes", "deep set eyes", "droopy eyes",
            "monolid eyes",
        ];

        return eyes[Math.floor(Math.random() * eyes.length)];
    }

    /**
     * D100 if one can see.
     * 1% chance to be blinded
     * 9% to be naturally blind /half blind
     * array to randomize blindness
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

    getEyes() {
        return this.eyes;
    }
}
