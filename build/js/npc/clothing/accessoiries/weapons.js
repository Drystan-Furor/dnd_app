import {Sentence} from "../../generators/sentence";
import {getRandomElement} from "../../races/factory/utility";

export class Weapon {
    constructor(genderNouns, npcClass, race) {
        this.weapon = Weapon._armed(genderNouns, npcClass, race);
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
            "battleaxe", "bastard sword", "blowgun", "bo staff", "boomerang", "bow", "cestus", "club",
            "composite longbow", "composite shortbow", "couple of darts", "crossbow", "cutlass", "dagger",
            "dire flail", "double-bladed scimitar", "Dwarven urgrosh", "Elven lightblade", "Elven thinblade",
            "falchion", "flail", "glaive", "great sword", "greatclub", "greataxe", "hand crossbow", "handaxe",
            "hatchet", "heavy crossbow", "hooked hammer", "javelin", "kama", "katana", "khopesh", "knife", "kukri",
            "lance", "light crossbow", "light hammer", "long sword", "longbow", "maul", "mace", "messer",
            "morningstar", "net", "nunchaku", "Orc double axe", "parrying dagger", "pike", "quarterstaff", "rapier",
            "repeating crossbow", "sai", "scimitar", "scythe", "short sword", "shortbow", "sickle", "sling", "spear",
            "spiked chain", "tonfa", "trident", "two-bladed sword", "throwing axe", "war Scythe", "war pick",
            "warhammer", "whip", "yklwa"
        ];
        return weapons[Math.floor(Math.random() * weapons.length)];
    }

    static _armed(genderNouns, npcClass, race) {
        let subject = [
            `${race.getRace()} `,
            `${npcClass} `,
            `${genderNouns.getManWoman()} `,
        ];
        return `${Sentence.observing()} ${getRandomElement(subject)} ${this.holding()} a ${this.weapon()}`;
    }
}
