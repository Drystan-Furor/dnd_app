import {Name} from "../../properties/name";

export class Shou extends Name {
    constructor(dndrace, new_npc) {
        super();
        this.lastname = Shou._lastname();
        this.firstname = Shou._firstname(new_npc);
        this.nickname = this.firstname;
        this.description = Shou._description(dndrace, new_npc);
    }

    static _lastname() {
        const surnames = ['Chien', 'Huang', 'Kao', 'Kung', 'Lao', 'Ling', 'Mei', 'Pin',
            'Shin', 'Sum', 'Tan', 'Wan',];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    static _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = [   'An', 'Chen', 'Chi', 'Fai', 'Jiang', 'Jun', 'Lian',
                'Long', 'Meng', 'On', 'Shan', 'Shui', 'Wen',];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = [ 'Bai', 'Chao', 'Jia', 'Lei', 'Mei', 'Qiao', 'Shui', 'Tai',];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    static _description(dndrace, new_npc) {
        return "The Shou are the most numerous and powerful ethnic " +
            "group in Kara-Tur, far to the east of Faerûn. They are yellowish-bronze in " +
            "hue, with black hair and dark eyes. Shou surnames are usually presented before the given name.";
    }
}
