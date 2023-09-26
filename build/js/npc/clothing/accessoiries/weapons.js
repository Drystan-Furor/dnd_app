import {Sentence} from "../../generators/sentence";

export class Weapon {
    constructor(dndRace) {
        this.weapon = Weapon._armed(dndRace);
    }

    getArms() {
        return this.weapon;
    }

    static holding() {
        const holds = [
            'carries', 'is holding', 'clenches', 'is equipped with',
            'is packed with', 'is armed with', 'has', 'hauls', 'lugs',
            'hoists', 'bears', 'clamps', 'clutches', 'clasps', 'holds',
            'is packing', 'is outfitted with', 'is loaded with', 'is girded with',
            'is steeled with', 'is fitted out with',
        ];
        return holds[Math.floor(Math.random() * holds.length)];
    }

    static weapon() {
        const weapons = [
            "club", "mace", "scimitar", "dagger", "short sword", "long sword", "bow",
            "crossbow", "axe", "hatchet", "warhammer", "great sword", "javelin",
            "spear", "glaive", "quarterstaff", "throwing axe", "knife", "rapier", "whip",
            "battleaxe", "messer", "halberd", "lance", "heavy crossbow", "hand crossbow",
            "blowgun", "boomerang", "couple of darts", "flail", "greataxe", "greatclub",
            "light hammer", "longbow", "maul", "morningstar", "pike", "shortbow", "sickle",
            "sling", "trident", "war pick",
        ];
        return weapons[Math.floor(Math.random() * weapons.length)];
    }

    static _armed(dndRace) {
        const observing = Sentence.observing();
        return `${observing} ${dndRace} ${this.holding()} a ${this.weapon()}`;
    }
}
