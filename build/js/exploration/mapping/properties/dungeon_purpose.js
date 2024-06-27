import {getRandomElement} from "../../../tools/tools";

export class Dungeon_purpose {
    static _purpose() {
        let purpose = [
            `Lair`,
            `Maze`,
            `Mine`,
            `Stronghold`,
            `Temple`,
            `Shrine`,
            `Tomb`,
            `Treasure vault`,
            `Planar Gate`,
            `Death trap`,
        ];
        return getRandomElement(purpose);
    }

    static _typeDescriptions() {
        return {
            "Lair": "A lair is a place where monsters live. Typical lairs include ruins and caves.",
            "Maze": "A maze is intended to deceive or confuse those who enter it. Some mazes are elaborate obstacles that protect treasure, while others are gauntlets for prisoners banished there to be hunted and devoured by the monsters within.",
            "Mine": "An abandoned mine can quickly become infested with monsters, while miners who delve too deep can break through into the Underdark.",
            "Stronghold": "A stronghold dungeon provides a secure base of operations for villains and monsters. It is usually ruled by a powerful individual, such as a wizard, vampire, or dragon, and it is larger and more complex than a simple lair.",
            "Temple": "This dungeon is consecrated to a deity or other planar entity. The entity's worshipers control the dungeon and conduct their rites there.",
            "Shrine": "This dungeon is consecrated to a deity or other planar entity. The entity's worshipers control the dungeon and conduct their rites there.",
            "Tomb": "Tombs are magnets for treasure hunters, as well as monsters that hunger for the bones of the dead.",
            "Treasure vault": "Built to protect powerful magic items and great material wealth, treasure vault dungeons are heavily guarded by monsters and traps.",
            "Planar Gate": "Dungeons built around planar portals are often transformed by the planar energy seeping out through those portals.",
            "Death trap": "This dungeon is built to eliminate any creature that dares to enter it. A death trap might guard the treasure of an insane wizard, or it might be designed to lure adventurers to their demise for some nefarious purpose, such as to feed souls to a lich's phylactery."
        };
    }

    static getTypeDescription(purpose) {
        const typeDescriptions = this._typeDescriptions();
        return typeDescriptions[purpose];
    }

}
