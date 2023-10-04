import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Dragonborn extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : this._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : this._firstname(genderNouns);
        this.nickname = null;
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname() {
        const surnames = [
            'Clethtinthiallor', 'Daardendrian', 'Delmirev', 'Drachedandion',
            'Fenkenkabradon', 'Kepeshkmolik', 'Kerrhylon', 'Kimbatuul',
            'Linxakasendalor', 'Myastan', 'Nemmonis', 'Norixius', 'Ophinshtalajiir',
            'Prexijandilin', 'Shestendeliath', 'Turnuroth', 'Verthisathurgiesh',
            'Yarjerit',
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = [
                'Arjhan', 'Balasar', 'Bharash', 'Donaar', 'Ghesh', 'Heskan', 'Kriv',
                'Medrash', 'Mehen', 'Nadarr', 'Pandjed', 'Patrin', 'Rhogar', 'Shamash',
                'Shedinn', 'Tarhun', 'Torinn',
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = [
                'Akra', 'Biri', 'Daar', 'Farideh', 'Harann', 'Havilar', 'Jheri',
                'Kava', 'Korinn', 'Mishann', 'Nala', 'Perra', 'Raiann', 'Sora',
                'Surina', 'Thava', 'Uadjit',
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _description(dndRace, new_npc) {
        return `${dndRace} look very much like dragons standing erect
    in humanoid form, though ${this.firstname} lack wings or a tail. The clans ancestry
    gives ${this.lastname} a ` + Dragonborn.generateAncestry();
    }

    static generateAncestry() {
        const ancestries = ['Chromatic', 'Gem', 'Metallic'];
        const ancestry = ancestries[Math.floor(Math.random() * ancestries.length)];
        let color = '';

        if (ancestry === 'Chromatic') {
            const chromatics = ['Black', 'Blue', 'Green', 'Red', 'White'];
            color = chromatics[Math.floor(Math.random() * chromatics.length)];
        }
        if (ancestry === 'Gem') {
            const gems = ['Amethyst', 'Crystal', 'Emerald', 'Sapphire', 'Topaz'];
            color = gems[Math.floor(Math.random() * gems.length)];
        }
        if (ancestry === 'Metallic') {
            const metals = ['Brass', 'Bronze', 'Copper', 'Gold', 'Silver'];
            color = metals[Math.floor(Math.random() * metals.length)];
        }
        return ancestry + ' ' + color;
    }
}
setClassMapping('Dragonborn', Dragonborn);
