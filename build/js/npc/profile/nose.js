import { classMapping } from '../races/factory/classMapping';

export class Nose {
    constructor(dndRace, genderNouns) {
        this.nose = this._randomNose(dndRace, genderNouns);
    }

    _randomNose(dndRace, genderNouns) {
        const ClassReference = classMapping[dndRace];
        if (ClassReference && typeof ClassReference.noseReplacer === 'function') {
            return ClassReference.noseReplacer(dndRace, genderNouns);
        }
        return Nose.defaultNose();
    }

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

    getNose() {
        return this.nose;
    }
}
