import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Verdan extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : this._lastname();
        this.firstname = " the traveller ";
        this.nickname = null;
        this.description = this._description(dndRace, genderNouns);
    }

    _lastname() {
        const prefixes = [
            'A', 'Illu', 'Bry', 'Kor', 'Zo', 'Ell', 'Crea', 'Drer', 'O', 'Ve', 'Veri', 'Voi',
            'Yes', 'N', 'Toi', 'Sly', 'Fae', 'Demo', 'Gry', 'Hu', 'Stu', 'Pa', 'Prae', 'Mo',
            'To', 'Kle', 'Quya', 'Graer', 'Stea', 'Cri', 'Mer', 'Yee', 'Paleac', 'El',
            'Xwee',
        ];

        const altfixes = [
            'rt', 'mie', 'ls', 'm', 'v', 'bert', 'valm', 'ke', 'mi', 'riga', 'ga', 'sat',
            'g', 't', 'ra', 'ry', 'nic', 'rm', 'lm', 'ssa', 'q', 'sh', 'lli', 'xi', 'bena',
            'rin', 'ma', 'ci', 'vis', 'lk', 'then', 'vlelk', 'znag', 'sup',
        ];

        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const altfix = altfixes[Math.floor(Math.random() * altfixes.length)];
        return prefix + altfix;
    }

    _description(dndRace, genderNouns) {
        return `${dndRace.getRace()} are golbinoids with a strangely mutating body`;
    }
}

setClassMapping('Verdan', Verdan);
