import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {Dragonborn} from "./dragonborn";

export class Kobold extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = this._lastname();
        this.firstname = '';
        this.nickname = this.lastname;
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname() {
        const surnames = [
            'Tass', 'Varn', 'Snuks', 'Gox', 'Guvne', 'Keplu', 'Mahro', 'Hovni',
            'Kirpo', 'Merbi', 'Dorn', 'Sig', 'Ver', 'Sax', 'Siklu', 'Ilti', 'Utro',
            'Snege', 'Zepi', 'Hirto', 'Suks', 'Rugs', 'Hik', 'Ratt', 'Atre', 'Gedri',
            'Deklo', 'Ahso', 'Hoga', 'Saru', 'Kin', 'Mak', 'Tix', 'Dis', 'Snolto',
            'Olta', 'Zorpu', 'Ogo', 'Kara', 'Gobli',
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _description(dndRace, genderNouns) {
        return `It's ancestry gives this ${dndRace} a ${Dragonborn.generateAncestry()} scale color`;
    }


    static bodySizeReplacer() {
        const bodysizes = [
            "very small", "quite small", "small", "small sized",
            "rather tiny", "below middle sized", "really small",
            "slightly smaller", "rather small", "reasonably small",
            "tiny", "characteristically tiny sized", "naturally small sized",
        ];
        return bodysizes[Math.floor(Math.random() * bodysizes.length)];
    }

}
setClassMapping('Kobold', Kobold);
