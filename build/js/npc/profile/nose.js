export class Nose {
    constructor(dndrace, newNpc) {
        this.nose = this._randomNose(dndrace, newNpc);
    }

    _randomNose(dndRace, genderNouns) {
        if (dndRace === 'Aarakocra') {
            return Nose.birdBeak();
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

    static birdBeak() {
        let nose = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
        if (nose >= 1 && nose <= 24) {
            nose = 'a very generalist, prominent big beak';
        } else if (nose >= 25 && nose <= 38) {
            nose = 'a scything upturned beak, small in width but quite long';
        } else if (nose >= 39 && nose <= 47) {
            nose = 'an eagles beak, quite raptorial. With a strong sloping curve that prominently protrudes from the face';
        } else if (nose >= 48 && nose <= 56) {
            const outlines = ["insect catching", "grain eating", "Coniferous seed eating"];
            const outline = outlines[Math.floor(Math.random() * outlines.length)]; // Get a random element from outlines array
            nose = `a snub beak that is common with ${outline} birds`;
        } else if (nose >= 57 && nose <= 64) {
            nose = 'a very long and sharp beak, thin and pointy, small in height but quite flat, common with aerial fishing birds';
        } else if (nose >= 65 && nose <= 68) {
            nose = 'a "Hawk" beak that has similarities with the curved beaks of eagles and other predatory birds. It has a dramatic arched shape';
        } else if (nose >= 69 && nose <= 76) {
            nose = 'a perfectly straight beak. It gives this birdfolk an aggressive profile since it is usually seen on scavenging birds';
        } else if (nose >= 77 && nose <= 84) {
            nose = 'a dip netting beak, rather big, with a very prominent bottom mandible, like pelicans normally have';
        } else if (nose >= 85 && nose <= 91) {
            const outlines = ["filter feeding", "pursuit fishing", "chiseling"];
            const outline = outlines[Math.floor(Math.random() * outlines.length)]; // Get a random element from outlines array
            nose = `a thin and flat shaped beak with a short tip, typical for ${outline}`;
        } else if (nose >= 92 && nose <= 100) {
            nose = "a bulbous beak, it has a swollen, disproportionate nasal tip, almost like it's too big. Imagine something like a fruit eating toucan";
        }
        return nose;
    }

    getNose() {
        return this.nose;
    }
}
