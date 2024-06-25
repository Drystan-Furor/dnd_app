import {D} from "../../../../tools/d";

export class Lair {
    constructor() {
        this.chamber = this._dungeonChamber();
    }

    _dungeonChamber() {
        const roll = D._20();
        let purpose;

        switch (roll) {
            case 1:
                purpose = "Armory stocked with weapons and armor";
                break;
            case 2:
                purpose = "Audience chamber, used to receive guests";
                break;
            case 3:
                purpose = "Banquet room for important celebrations";
                break;
            case 4:
                purpose = "Barracks where the lair's defenders are quartered";
                break;
            case 5:
                purpose = "Bedroom, for use by leaders";
                break;
            case 6:
                purpose = "Chapel where the lair's inhabitants worship";
                break;
            case 7:
                purpose = "Cistern or well for drinking water";
                break;
            case 8:
            case 9:
                purpose = "Guardroom for the defense of the lair";
                break;
            case 10:
                purpose = "Kennel for pets or guard beasts";
                break;
            case 11:
                purpose = "Kitchen for food storage and preparation";
                break;
            case 12:
                purpose = "Pen or prison where captives are held";
                break;
            case 13:
            case 14:
                purpose = "Storage, mostly nonperishable goods";
                break;
            case 15:
                purpose = "Throne room where the lair's leaders hold court";
                break;
            case 16:
                purpose = "Torture chamber";
                break;
            case 17:
                purpose = "Training and exercise room";
                break;
            case 18:
                purpose = "Trophy room or museum";
                break;
            case 19:
                purpose = "Latrine or bath";
                break;
            case 20:
                purpose = "Workshop for the construction of weapons, armor, tools, and other goods";
                break;
            default:
                purpose = "Unknown purpose";  // Fallback in case of unexpected roll value
                break;
        }

        return purpose;
    }
}

// Example usage
// const lair = new Lair();
// console.log(`Lair Chamber Purpose: ${lair.chamber}`);
