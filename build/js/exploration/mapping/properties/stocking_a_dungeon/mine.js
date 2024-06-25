import {D} from "../../../../tools/d";

export class Mine {
    constructor() {
        this.chamber = this._dungeonChamber();
    }

    _dungeonChamber() {
        const roll = D._20();
        let purpose;

        switch (roll) {
            case 1:
            case 2:
                purpose = "Barracks for miners";
                break;
            case 3:
                purpose = "Bedroom for a supervisor or manager";
                break;
            case 4:
                purpose = "Chapel dedicated to a patron deity of miners, earth, or protection";
                break;
            case 5:
                purpose = "Cistern providing drinking water for miners";
                break;
            case 6:
            case 7:
                purpose = "Guardroom";
                break;
            case 8:
                purpose = "Kitchen used to feed workers";
                break;
            case 9:
                purpose = "Laboratory used to conduct tests on strange minerals extracted from the mine";
                break;
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
                purpose = "Lode where metal ore is mined (75 percent chance of being depleted)";
                break;
            case 16:
                purpose = "Office used by the mine supervisor";
                break;
            case 17:
                purpose = "Smithy for repairing damaged tools";
                break;
            case 18:
            case 19:
                purpose = "Storage for tools and other equipment";
                break;
            case 20:
                purpose = "Strong room or vault used to store ore for transport to the surface";
                break;
            default:
                purpose = "Unknown purpose";  // Fallback in case of unexpected roll value
                break;
        }

        return purpose;
    }
}

// // Example usage
// const mine = new Mine();
// console.log(`Mine Chamber Purpose: ${mine.chamber}`);
