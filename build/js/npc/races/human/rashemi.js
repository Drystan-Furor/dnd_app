import {Name} from "../../properties/name";

export class Rashemi extends Name {
    constructor(dndrace, new_npc) {
        super();
        this.lastname = Rashemi._lastname();
        this.firstname = Rashemi._firstname(new_npc);
        this.nickname = this.firstname;
        this.description = Rashemi._description(dndrace, new_npc);
    }

    static _lastname() {
        const surnames = ['Chergoba', 'Dyernina', 'Iltazyara', 'Murnyethara',
            'Stayanoga', 'Ulmokina',];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    static _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = ['Borivik', 'Faurgar', 'Jandar', 'Kanithar', 'Madislak',
                'Ralmevik', 'Shaumar', 'Vladislak',];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = ['Fyevarra', 'Hulmarra', 'Immith', 'Imzel', 'Navarra',
                'Shevarra', 'Tammith', 'Yuldra',];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    static _description(dndrace, new_npc) {
        return "Most often found east of the Inner Sea and often " +
            "intermingled with the Mulan, Rashemis tend to be short, stout, and muscular. " +
            "They usually have dusky skin, dark eyes, and thick black hair.";
    }
}
