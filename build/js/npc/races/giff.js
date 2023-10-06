import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Giff extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : this._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : this._firstname(genderNouns);
        this.nickname = parameters.nickname ? parameters.nickname : this._nickname();
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname() {
        const surnames = [
            'Boomshot',
            'Cannonfist',
            'Powderkeg',
            'Ironbarrel',
            'Blasthorn',
            'Shellcracker',
            'Grenadetusk',
            'Musketroar',
            'Ballbuster',
            'Firelock'
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(genderNouns) {
        let firstname;
        if (genderNouns.getGender() === 'male') {
            const malenames = [
                'Blunder',
                'Grenado',
                'Muzzle',
                'Fusil',
                'Bombard',
                'Caliber',
                'Howitzer',
                'Mortar',
                'Percuss',
                'Salvo'
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (genderNouns.getGender() === 'female') {
            const femalenames = [
                'Blasta',
                'Cannonia',
                'Detona',
                'Fraga',
                'Ignita',
                'Munitiona',
                'Powdra',
                'Shrapna',
                'Torpeda',
                'Volleya'
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _nickname() {
        const nickname = [
            'Big Boom',
            'Quickfuse',
            'Heavy Shot',
            'Firestarter',
            'Powder Monkey',
            'Blastmaster',
            'LocknLoad',
            'Thunderclap',
            'Flashbang',
            'Explo'
        ];
        return nickname[Math.floor(Math.random() * nickname.length)];
    }

    _skin(genderNouns) {
        const skin = [
            'a smooth skin',
            `short bristles on ${genderNouns.getHisHer()} face and on the top of ${genderNouns.getHisHer()} head`,

        ];
        return skin[Math.floor(Math.random() * skin.length)];
    }

    _gifOrJif(genderNouns) {
        const g = [
            'soft',
            `hard`,
        ];
        return g[Math.floor(Math.random() * g.length)];
    }

    _description(dndRace, genderNouns) {
        let string;

        string = `${dndRace} are tall, broad-shouldered folk with hippo-like features. ${this.nickname} has 
        ${this._skin(genderNouns)}. As beings of impressive size and unforgettable appearance, ${dndRace} are noticed 
        wherever they go`;

        if (dndRace === 'Giff') {
            string += `. ${this.nickname} says ${dndRace} is pronounced with a ${this._gifOrJif()} g. 
            Disagreements over the correct pronunciation often blossom into hard feelings`;
        }

        return string;
    }


    static bodySizeReplacer() {
        const bodysizes = [
            "sort of typical giant-sized", "common giant sized",
            "characteristically large sized", "naturally large sized", "typical",

            "large", "quite large", "very large", "really large",
            "slightly larger", "reasonably large", 'immense', 'enormous',
            "massive", 'big', 'hulking', 'towering', 'giant',
        ];
        return bodysizes[Math.floor(Math.random() * bodysizes.length)];
    }

}

setClassMapping('Giff', Giff);
