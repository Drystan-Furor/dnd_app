import { D } from "../../../../tools/d";

export class Tomb {
    constructor() {
        this.chamber = this._dungeonChamber();
    }

    _dungeonChamber() {
        const roll = D._20();
        let purpose;

        switch (roll) {
            case 1:
                purpose = "Antechamber for those that have come to pay respect to the dead or prepare themselves for burial rituals";
                break;
            case 2:
            case 3:
                purpose = "Chapel dedicated to deities that watch over the dead and protect their resting places";
                break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                purpose = "Crypt for less important burials";
                break;
            case 9:
                purpose = "Divination room, used in rituals to contact the dead for guidance";
                break;
            case 10:
                purpose = "False crypt (trapped) to kill or capture thieves";
                break;
            case 11:
                purpose = "Gallery to display the deeds of the deceased through trophies, statues, paintings and so forth";
                break;
            case 12:
                purpose = "Grand crypt for a noble, high priest, or other important individual";
                break;
            case 13:
            case 14:
                purpose = "Guardroom, usually guarded by undead, constructs, or other creatures that don't need to eat or sleep";
                break;
            case 15:
                purpose = "Robing room for priests to prepare for burial rituals";
                break;
            case 16:
            case 17:
                purpose = "Storage, stocked with tools for maintaining the tomb and preparing the dead for burial";
                break;
            case 18:
                purpose = "Tomb where the wealthiest and most important folk are interred, protected by secret doors and traps";
                break;
            case 19:
            case 20:
                purpose = "Workshop for embalming the dead";
                break;
            default:
                purpose = "Unknown purpose";  // Fallback in case of unexpected roll value
                break;
        }

        return purpose;
    }
}

// Example usage
// const tomb = new Tomb();
// console.log(`Tomb Chamber Purpose: ${tomb.chamber}`);
