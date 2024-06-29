import {D} from "../../../tools/d";
import {getRandomElement} from "../../../tools/tools";

export class RandomDungeonHazards {
    constructor() {
        this.hazard = this._getDungeonHazard();
    }

    _getDungeonHazard() {
        const hazards = [
            "Brown mold", // 1-3
            "Green slime", // 4-8
            "Shrieker", // 9-10
            "Spiderwebs", // 11-15
            "Violet fungus", // 16-17
            "Yellow mold" // 18-20
        ];

        return getRandomElement(hazards);
    }
}

