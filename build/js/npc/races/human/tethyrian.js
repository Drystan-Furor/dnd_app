import {Name} from "../../properties/name";
import {Chondathan} from "./chondathan";

export class Tethyrian extends Name {
    constructor(dndrace, new_npc) {
        super();
        const biography = new Chondathan(dndrace, new_npc);
        this.lastname = biography.getLastname();
        this.firstname = biography.getFirstname();
        this.nickname = this.firstname;
        this.description = Tethyrian._description(dndrace, new_npc);
    }

    static _description(dndrace, new_npc) {
        return "Widespread along the entire Sword Coast at the " +
            "western edge of Faerûn, Tethyrians are of medium build and height, " +
            "with dusky skin that tends to grow fairer the farther north they dwell. " +
            "Their hair and eye color varies widely, but brown hair and blue eyes are " +
            "the most common. ";
    }
}
