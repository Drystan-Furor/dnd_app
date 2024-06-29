import {getRandomElement} from "../../tools/tools";

export class MonsterMotivation {
    constructor() {
        this.motivation = this._getMonsterMotivation();
    }

    // you get a feeling it is here to

    _getMonsterMotivation() {
        const motivations = [
            "find a sanctuary", // 1-2
            "conquer the dungeon", // 3-5
            "seek an item in the dungeon", // 6-8
            "slay a rival", // 9-11
            "hide from enemies", // 12-13
            "recover from a battle", // 14-15
            "avoid danger", // 16-17
            "seek wealth" // 18-20
        ];

        return getRandomElement(motivations);
    }
}

// // Example usage
// const monsterMotivation = new MonsterMotivation();
// console.log(monsterMotivation.motivation);
