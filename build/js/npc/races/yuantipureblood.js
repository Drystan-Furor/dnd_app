import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Yuantipureblood extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : this._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : this._lastname();
        this.nickname = null;
        if (!parameters.homebrew){
            dndRace.setRace('Yuan-ti Pureblood');
        }
        this.description = this._description(dndRace, genderNouns);
    }

    _lastname() {
        const prefixes = [
            'Ih', 'Szeh', 'As', 'Sziz', 'Izt', 'Ma',
            'Nezhas', 'Ezti', 'Zsez', 'Thito', 'Yu',
            'Oak', 'Shih', 'Aht', 'Sshuh', 'Thelt', 'Hu',
            'Tuhe', 'Ina', 'Us', 'Melt', 'Sshe', 'Ssho',
            'So', 'Uh', 'Sset', 'Estle', 'Sshih',
            'Iske', 'Zha', 'Thi', 'Yoz', 'Zal', 'O',
            'Zhoal', 'Zset', 'Estih', 'Eztlu', 'Suztol',
            'Thoksoa',
        ];

        const altfixes = [
            'shu', 'lah', 'kiss', 'tiu', 'liu', 'kuss',
            'siesh', 'thi', 'sheshluh', 'shlu', 'lui',
            'la', 'Shih', 'luh', 'tla', 'siall', 'tola',
            'til', 'tu', 'ziti', 'suh', 'shul', 'ma',
            'kall', 'sieh', 'stlil', 'zhal', 'sehiul',
            'liess', 'hisu', 'skul', 'tlu', 'sheel', 'su',
            'kiull', 'zei', 'sih', 'shas', 'lie',
            'theeh', 'sei', 'shos', 'zhash', 'liesh', 'sheesh',
            'koss', 'kass', 'kess', 'shes', 'zhosh', 'shi', 'sho', 'sohiul',
        ];

        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const altfix = altfixes[Math.floor(Math.random() * altfixes.length)];
        return prefix + altfix;
    }

    _firstname(genderNouns) {
        let firstname;
        if (genderNouns.getGender() === 'male') {
            const malenames = [
                'Array'
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (genderNouns.getGender() === 'female') {
            const femalenames = [
                'Array'
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _description(dndRace, genderNouns) {
        return `This ${dndRace.getRace()} is a very serpent looking ${dndRace.getHeritage()} named ${this.lastname}. 
        Blessed with the resistance to magical and poisonous effects by the rituals that created them, 
        each ${dndRace.getRace()} manifests their serpentine heritage in a variety of ways. 
        The serpentine ${dndRace.getHeritage()} ${dndRace.getRace()} talks with many hissing sounds`;
    }

}

setClassMapping('Yuantipureblood', Yuantipureblood);
