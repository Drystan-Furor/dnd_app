import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Halforc extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : this._lastname(genderNouns);
        this.firstname = parameters.firstname ? parameters.firstname : '';
        this.nickname = null;
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname(new_npc) {
        let lastname;
        if (new_npc.getGender() === 'male') {
            const malenames = [
                'Dench', 'Feng', 'Gell', 'Henk', 'Holg', 'Imsh', 'Keth',
                'Krusk', 'Mhurren', 'Ront', 'Shump', 'Thokk',
            ];
            lastname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = [
                'Baggi', 'Emen', 'Engong', 'Kansif', 'Myev', 'Neega',
                'Ovak', 'Ownka', 'Shautha', 'Sutha', 'Vola', 'Volen', 'Yevelda',
            ];
            lastname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return lastname;
    }

    _description(dndRace, genderNouns) {
        return `${this.lastname}s’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, 
        and towering build makes ${genderNouns.getHisHer()} orcish heritage plain for all to see`;
    }

}

setClassMapping('Halforc', Halforc);
