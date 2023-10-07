import {Name} from "../../properties/name";
import {setClassMapping} from "../factory/classMapping";

export class Chondathan extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : Chondathan._lastname();
        this.firstname = parameters.firstname ? parameters.firstname :  Chondathan._firstname(genderNouns);
        this.nickname = parameters.nickname ? parameters.nickname : null;
        this.description = Chondathan._description(dndRace, genderNouns);
        if (!parameters.homebrew && dndRace.getRace() !== 'Half-Elf') {
            dndRace.setRace('Chondathan');
        }
    }

    static _lastname() {
        const surnames = ['Amblecrown', 'Buckman', 'Dundragon', 'Evenwood', 'Greycastle', 'Tallstag',];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    static _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = ['Darvin', 'Dorn', 'Evendur', 'Gorstag', 'Grim',
                'Helm', 'Malark', 'Morn', 'Randal', 'Stedd'];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = ['Arveene', 'Esvele', 'Jhessail', 'Kerri',
                'Lureene', 'Miri', 'Rowan', 'Shandri', 'Tessele',];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    static _description(dndRace, new_npc) {
        return `${dndRace.getRace()} are slender, tawny-skinned folk with brown hair that ranges from almost blond to 
        almost black. Most are tall and have green or brown eyes, but these traits are hardly universal.
        Humans of ${dndRace.getRace()} descent dominate the central lands of Faerûn, around the Inner Sea`;

    }
}
setClassMapping('Chondathan', Chondathan);
