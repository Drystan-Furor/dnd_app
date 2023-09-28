import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {getRandomElement} from "./factory/utility";

export class Dwarf extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = this._lastname();
        this.firstname = this._firstname(genderNouns);
        this.nickname = this._nickname();
        this.description = this._description(dndRace, genderNouns);
    }

    _lastname() {
        const surnames = [
            'Balderk', 'Battlehammer', 'Brawnanvil', 'Dankil', 'Fireforge', 'Frostbeard',
            'Gorunn', 'Holderhek', 'Ironfist', 'Loderr',
            'Lutgehr', 'Rumnaheim', 'Strakeln', 'Torunn', 'Ungart',
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = [
                'Adrik', 'Alberich', 'Baern', 'Barendd', 'Brottor', 'Bruenor', 'Dain', 'Darrak',
                'Eberk', 'Einkill', 'Fargrim', 'Flint', 'Gardain', 'Harbek', 'Kildrak',
                'Oskar', 'Rangrim', 'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Tordek',
                'Travok', 'Ulfgar', 'Veit', 'Vondal', 'Orsik','Delg','Morgran','Traubon',
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = [
                'Amber', 'Artin', 'Audhild', 'Bardryn', 'Dagnal', 'Diesa', 'Eldeth', 'Falkrunn',
                'Finellen', 'Gunnloda', 'Gurdis', 'Helja', 'Hlin', 'Kathra', 'Krystrid', 'Ilde',
                'Liftrasa', 'Mardred', 'Riswynn', 'Sannl', 'Torbera',
                'Torgga', 'Vistra',
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _nickname() {
        return this.lastname;
    }

    _description(dndrace, new_npc) {
        const knownAs = [
            "a skilled warrior",
            "a miner",
            "a stone worker",
            "a worker of metal",
        ];
        const string  = getRandomElement(knownAs);
        return `Bold and hardy, ${this.nickname} is known as ${string}.`;
    }

     static bodySizeReplacer()
    {
        const bodysizes = [
            "very small", "quite small", "small", "small sized",
            "rather tiny", "below middle sized", "really small",
            "slightly smaller", "rather small", "reasonably small",
            "tiny", "characteristically tiny sized", "naturally small sized",
        ];
        return getRandomElement(bodysizes);
    }

}
setClassMapping('Dwarf', Dwarf);
