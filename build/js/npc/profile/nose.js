export class Nose {
    /**
     * Constructs and selects a random value string for nose
     * @param {string} dndrace - The race
     * @param {string} newNpc - The gender
     */
    constructor(dndrace, newNpc) {
        this.nose = this._randomNose(dndrace, newNpc);
    }

    /**
     * Build or choose specific array. Select random value string
     * @param {string} dndrace - The race
     * @param {string} newNpc - The gender
     * @return {string} - The nose
     */
    _randomNose(dndrace, newNpc) {
        // Assuming noseReplacer is a method in some other class named by the value of dndrace
        const raceClass = window[dndrace.toLowerCase()];
        if (raceClass && typeof raceClass.noseReplacer === 'function') {
            return raceClass.noseReplacer(dndrace, newNpc);
        } else {
            return Nose.defaultNose();
        }
    }

    /**
     * Default Nose
     * @return {string} - The nose
     */
    static defaultNose() {
        const nose = Math.floor(Math.random() * 100) + 1;
        if (nose >= 1 && nose <= 24) return 'a very fleshy, prominent big nose';
        if (nose <= 38) return 'a celestial upturned nose, small in size with a dent at the nose bridge and a protruding tip';
        if (nose <= 47) return 'an eagle nose. With a strong sloping curve that prominently protrudes from the face';
        if (nose <= 56) {
            const outlines = ["subtle", "protruding"];
            const outline = outlines[Math.floor(Math.random() * outlines.length)];
            return `a bumpy nose that features bumpy outlines with ${outline} curves located at the tip of the nose`;
        }
        if (nose <= 64) return 'a very snub nose, thin and pointy, small in size but quite round';
        if (nose <= 68) return 'a "Hawk" nose that has similarities with the curved beaks of eagles and other predatory birds. It has a dramatic arched shape and a protruding bridge, making them look long and small';
        if (nose <= 76) return 'a perfectly straight nose. One of the most aesthetically pleasing of all nose shapes. It gives a distinct and attractive profile since it doesn’t have any humps or curves';
        if (nose <= 84) return 'a nubian nose, rather big, with very prominent nostrils';
        if (nose <= 91) return 'a thin and flat shaped nose with a short tip';
        if (nose <= 100) return 'a bulbous nose, it has a a swollen, disproportionate nasal tip, almost like it\'s too big. Imagine something like a ball positioned at the end of the nose';
        return 'a very fleshy, prominent big nose'; // This will never be reached, but it's here as a fallback.
    }


    /**
     * Getter
     * @return {string} - The nose
     */
    getNose() {
        return this.nose;
    }
}


