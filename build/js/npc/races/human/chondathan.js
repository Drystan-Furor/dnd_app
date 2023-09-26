import {Name} from "../../properties/name";

export class Chondathan extends Name {
    constructor(dndrace, new_npc) {
        super();
        this.lastname = Chondathan._lastname();
        this.firstname = Chondathan._firstname(new_npc);
        this.nickname = this.firstname;
        this.description = Chondathan._description(dndrace, new_npc);
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

    static _description(dndrace, new_npc) {
        return "Chondatans are slender, tawny-skinned folk with brown hair that ranges " +
            "from almost blond to almost black. Most are tall and have green or brown eyes, " +
            "but these traits are hardly universal. " +
            "Humans of Chondathan descent dominate the central lands of Faerûn, around the Inner Sea."
    }
}
