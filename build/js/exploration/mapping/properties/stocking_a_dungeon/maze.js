import {D} from "../../../../tools/d";

export class Maze {
    constructor() {
        this.chamber = this._dungeonChamber();
    }

    _dungeonChamber() {
        const roll = D._20();
        let purpose;

        switch (roll) {
            case 1:
                purpose = "Conjuring room, used to summon creatures that guard the maze";
                break;
            case 2:
            case 3:
            case 4:
            case 5:
                purpose = "Guardroom for sentinels that patrol the maze";
                break;
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                purpose = "Lair for guard beasts that patrol the maze";
                break;
            case 11:
                purpose = "Pen or prison accessible only by secret door, used to hold captives condemned to the maze";
                break;
            case 12:
                purpose = "Shrine dedicated to a god or other entity";
                break;
            case 13:
            case 14:
                purpose = "Storage for food, as well as tools used by the maze's guardians to keep the complex in working order";
                break;
            case 15:
            case 16:
            case 17:
            case 18:
                purpose = "Trap to confound or kill those sent into the maze";
                break;
            case 19:
                purpose = "Well that provides drinking water";
                break;
            case 20:
                purpose = "Workshop where doors, torch sconces, and other furnishings are repaired and maintained";
                break;
            default:
                purpose = "Unknown purpose";  // Fallback in case of unexpected roll value
                break;
        }

        return purpose;
    }
}

// // Example usage
// const maze = new Maze();
// console.log(`Maze Chamber Purpose: ${maze.chamber}`);
