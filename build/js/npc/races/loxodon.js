import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Loxodon extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : this._lastname(genderNouns);
        this.firstname = parameters.firstname ? parameters.firstname : '';
        this.nickname = parameters.nickname ? parameters.nickname : this._nickname();
        this.description = this._description(dndRace, genderNouns);
    }

    _lastname(genderNouns) {
        let surnames1, lastname1, surnames2, lastname2, lastname;

        if (genderNouns.getGender() === 'male') {
            surnames1 = ['Ag', 'Ghano', 'Ganon', 'Ga', 'Ili', 'Kava', 'Lathi', 'Mau', 'Phu', 'Thava', 'Tvorti', 'Vega'];
            lastname1 = surnames1[Math.floor(Math.random() * surnames1.length)];

            surnames2 = ['vith', 'noth', 'dorf', 'non', 'loxth', 'vipth', 'linth', 'thouk', 'ghuin', 'glath', 'lipth', 'khagn'];
            lastname2 = surnames2[Math.floor(Math.random() * surnames2.length)];

            lastname = lastname1 + lastname2;
        }

        if (genderNouns.getGender() === 'female') {
            surnames1 = ['Ameris', 'Gaupa', 'Imim', 'Kau', 'Laulu', 'Maump', 'Oneg', 'Ori', 'Phaa', 'Veria'];
            lastname1 = surnames1[Math.floor(Math.random() * surnames1.length)];

            surnames2 = ['thea', 'elia', 'phea', 'thila', 'nea', 'thorea', 'hea', 'rea', 'ghia', 'phia'];
            lastname2 = surnames2[Math.floor(Math.random() * surnames2.length)];

            lastname = lastname1 + lastname2;
        }
        return lastname;
    }

    _nickname() {
        let prefix = ['Broad', 'Cracked', 'Dark', 'High', 'Long', 'Moon', 'Scarred', 'Severed', 'Strong', 'Twin'];
        prefix = prefix[Math.floor(Math.random() * prefix.length)];

        let altfix = ['Tusk', 'Tusks', 'Wool', 'Ear', 'Eye', 'Hide', 'Trunks', 'Trunk'];
        altfix = altfix[Math.floor(Math.random() * altfix.length)];

        return `${prefix}-${altfix}`;
    }

    _description(dndRace, genderNouns) {
        return `${this.lastname} the ${dndRace.getRace()} is called ${this.nickname} and looks like a perfect blend of elephant and man,
            with the thick, leathery skin of an elephant and the bipedal stance of the more civilized races`;
    }

    static noseReplacer() {
        let nose = Math.floor(Math.random() * 100) + 1;
        let outlines, outline;
        switch (true) {
            case (nose >= 1 && nose <= 24):
                nose = 'a very fleshy, prominent big proboscis';
                break;
            case (nose >= 25 && nose <= 38):
                nose = 'an upturned trunk, small in size with a dent at the bridge';
                break;
            case (nose >= 39 && nose <= 47):
                nose = 'a curved proboscis. With a strong sloping curve that prominently protrudes from the face';
                break;
            case (nose >= 48 && nose <= 56):
                outlines = ["subtle", "protruding"];
                outline = outlines[Math.floor(Math.random() * outlines.length)];
                nose = 'a bumpy trunk that features bumpy outlines with ' + outline + ' curves located at the tip of the proboscis';
                break;
            case (nose >= 57 && nose <= 64):
                nose = 'a very snub trunk, thin and pointy, small in size but quite round';
                break;
            case (nose >= 65 && nose <= 68):
                nose = 'a proboscis that has a dramatic arched shape and a protruding bridge, making it look long and small';
                break;
            case (nose >= 69 && nose <= 76):
                nose = 'a perfectly straight trunk. One of the most aesthetically pleasing of all proboscis shapes. It gives a distinct and attractive profile since it doesn’t have any humps or curves';
                break;
            case (nose >= 77 && nose <= 84):
                nose = 'a nubian-like proboscis, rather big, with very prominent nostrils';
                break;
            case (nose >= 85 && nose <= 91):
                nose = 'a thin and flat shaped trunk with a short tip';
                break;
            case (nose >= 92 && nose <= 100):
                nose = "a bulbous proboscis, it has a a swollen, disproportionate nasal tip, almost like it's too big. Imagine something like a ball positioned at the end of the trunk";
                break;
            default:
                nose = 'a very fleshy, prominent big proboscis';
                break;
        }
        return nose;
    }

    static bodySizeReplacer() {
        const bodysizes = [
            "sort of typical giant-sized", "common giant sized",
            "characteristically large sized", "naturally large sized", "typical",
            "more or less standard sized", "moderately large sized", 'sizable',

            "large", "quite large", "very large", "really large",
            "slightly larger", "reasonably large", 'immense', 'enormous',
            "massive", "tall", 'big', 'hulking', 'towering', 'giant',
        ];
        return bodysizes[Math.floor(Math.random() * bodysizes.length)];
    }
}

setClassMapping('Loxodon', Loxodon);
