import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Halforc extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = this._firstname(genderNouns);
        this.firstname = '';
        this.nickname = this.firstname;
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = [
                'Dench', 'Feng', 'Gell', 'Henk', 'Holg', 'Imsh', 'Keth',
                'Krusk', 'Mhurren', 'Ront', 'Shump', 'Thokk',
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = [
                'Baggi', 'Emen', 'Engong', 'Kansif', 'Myev', 'Neega',
                'Ovak', 'Ownka', 'Shautha', 'Sutha', 'Vola', 'Volen', 'Yevelda',
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _description(dndRace, genderNouns) {
        return `${this.lastname}s’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, 
        and towering build makes ${genderNouns.getHisHer()} orcish heritage plain for all to see`;
    }

}

setClassMapping('Halforc', Halforc);
