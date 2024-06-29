import { D } from "../../../../tools/d";
import {getRandomElement} from "../../../../tools/tools";
import {MonsterMotivation} from "../../../../monsters/properties";
import {Verbs} from "../../../../npc/generators/verbs";

export class CurrentChamberContents {
    constructor() {
        this.chamberContents = this._dungeonChamberContents();
    }

    _dungeonChamberContents() {
        const contents = [
            `Monster ${CurrentChamberContents._dungeonChamberMonsterType()}${CurrentChamberContents._dungeonChamberMonsterHasTreasure()}. 
            It's behaviour ${Verbs.getIndicator()}  the monster is here to ${new MonsterMotivation().motivation}`,

            "Dungeon hazard (see 'Random Dungeon Hazards') with incidental treasure", // 51-58

            "Obstacle (see 'Random Obstacles')", // 59-63

            "Trap (see 'Random Traps')", // 64-73

            "Trap (see 'Random Traps') protecting treasure", // 74-76

            "Trick (see 'Random Tricks')", // 77-80

            "Empty room", // 81-88

            "Empty room with dungeon hazard (see 'Random Dungeon Hazards')", // 89-94

            "Empty room with treasure", // 95-00

        ];

        let content = getRandomElement(contents);

        if (content === "Empty room") {
            content = getRandomElement(contents);
            return content;
        }

        return content;
    }

    static _dungeonChamberMonsterType() {
        const dungeonChamberMonsterTypes = [
            `(dominant inhabitant)`,
            `(pet or allied creature)`,
            `(random creature)`,
        ];
        return getRandomElement(dungeonChamberMonsterTypes);
    }

    static _dungeonChamberMonsterHasTreasure() {
        const dungeonChamberMonsterHasTreasure = [
            ` with treasure`,
            ` guarding treasure`,
            ``,
            ``,
        ];
        return getRandomElement(dungeonChamberMonsterHasTreasure);
    }
}

// Example usage
// const chamberContents = new CurrentChamberContents();
// console.log(chamberContents.chamberContents);
