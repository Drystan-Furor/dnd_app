import {Name} from "../properties/name";
import {Material} from "../generators/materials";
import {Verbs} from "../generators/verbs";
import {setClassMapping} from "./factory/classMapping";

export class Aarakocra extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = this._lastname();
        this.firstname = this._firstname();
        this.nickname = this.lastname;
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname() {
        const surnames = [
            'Aera', 'Aial', 'Aur', 'Deekek', 'Errk', 'Heehk', 'Ikki', 'Kleeck',
            'Oorr', 'Ouss', 'Quaf', 'Quierk', 'Salleek', 'Urreek', 'Zeed',
        ];
        this.lastname = surnames[Math.floor(Math.random() * surnames.length)];
        return this.lastname;
    }

    _firstname() {
        this.firstname = "";
        return this.firstname;
    }

    _nickname() {
        this.nickname = this.lastname;
        return this.nickname;
    }

    _description(dndRace, genderNouns) {
        return `From below, the ${dndRace} look much like a large bird. 
        Only when ${this.lastname} descends to roost on a branch or walk across the 
        ground does ${genderNouns.getHisHer()} humanoid appearance reveal itself`;
    }

    static mouthReplacer() { // tomia
        const tomia = [
            "sharp tomia", "rounded tomia", "bow shaped tomia", "heavy lower tomia",
            "ridged tomia", "heavy upper tomia", "sawtooth serated tomia", "thin tomia",
            "downward turned tomia", "perfectly proportioned tomia",
        ];
        return tomia[Math.floor(Math.random() * tomia.length)];
    }

    static chinReplacer() { //culmen
        const chinCurves = ['pointy', 'round', 'square'];
        const chinCurve = chinCurves[Math.floor(Math.random() * chinCurves.length)];

        const chinShapes = [
            'a rather ', 'quite the', 'a very defined', 'a puffed',
            'a very protruding', 'a bulbous', 'a very small', 'a bit of a',
        ];
        const chinShape = chinShapes[Math.floor(Math.random() * chinShapes.length)];

        return chinShape + " " + chinCurve + " culmen";
    }

    static noseReplacer() { // beak
        let nose = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
        if (nose >= 1 && nose <= 24) {
            nose = 'a very generalist, prominent big beak';
        } else if (nose >= 25 && nose <= 38) {
            nose = 'a scything upturned beak, small in width but quite long';
        } else if (nose >= 39 && nose <= 47) {
            nose = 'an eagles beak, quite raptorial. With a strong sloping curve that prominently protrudes from the face';
        } else if (nose >= 48 && nose <= 56) {
            const outlines = ["insect catching", "grain eating", "Coniferous seed eating"];
            const outline = outlines[Math.floor(Math.random() * outlines.length)];
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
            const outline = outlines[Math.floor(Math.random() * outlines.length)];
            nose = `a thin and flat shaped beak with a short tip, typical for ${outline}`;
        } else if (nose >= 92 && nose <= 100) {
            nose = "a bulbous beak, it has a swollen, disproportionate nasal tip, almost like it's too big. Imagine something like a fruit eating toucan";
        }
        return nose;
    }

    static teethReplacer() { // Beak detail
        const color = [
            'shiny white', 'yellow', 'quite large',
            'rather small', 'yellow and grey', 'crooked',
            'lead', 'tin', 'copper', 'steel', 'cast-iron',
            'iron', 'metal',
        ];
        const colorType = color[Math.floor(Math.random() * color.length)];
        const metalType = Material.getMetalType();
        const quality = Verbs.quality();

        const typeBeak = [
            `has a ${metalType} beak`,
            "has a hard horny tissue at the tip of the beak",
            `has a ${colorType} shield-shaped structure on the tip of its beak`,
            `has a ${colorType} shield-shaped structure on its beak tip, which spans the entire width of the beak`,
            `has a ${colorType} shield-shaped structure on its beak, which is bent at the tip to form a hook`,
            `has a ${colorType} shield-shaped structure on its beak tip, which spans the entire width of the beak and bent at the tip to form a hook`,
            `has a fake colorType, like a prosthetic made of ${quality} ${metalType}`,
        ];
        return typeBeak[Math.floor(Math.random() * typeBeak.length)];
    }
}
setClassMapping('Aarakocra', Aarakocra);
