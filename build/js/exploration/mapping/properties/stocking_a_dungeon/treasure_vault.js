import { D } from "../../../../tools/d";

export class Treasure_Vault {
    constructor() {
        this.chamber = this._dungeonChamber();
    }

    _dungeonChamber() {
        const roll = D._20();
        let purpose;

        switch (roll) {
            case 1:
                purpose = "Antechamber for visiting dignitaries";
                break;
            case 2:
                purpose = "Armory containing mundane and magic gear used by the treasure vault's guards";
                break;
            case 3:
            case 4:
                purpose = "Barracks for guards";
                break;
            case 5:
                purpose = "Cistern providing fresh water";
                break;
            case 6:
            case 7:
            case 8:
            case 9:
                purpose = "Guardroom to defend against intruders";
                break;
            case 10:
                purpose = "Kennel for trained beasts used to guard the treasure vault";
                break;
            case 11:
                purpose = "Kitchen for feeding guards";
                break;
            case 12:
                purpose = "Watch room that allows guards to observe those who approach the dungeon";
                break;
            case 13:
                purpose = "Prison for holding captured intruders";
                break;
            case 14:
            case 15:
                purpose = "Strong room or vault, for guarding the treasure hidden in the dungeon, accessible only by locked or secret door";
                break;
            case 16:
                purpose = "Torture chamber for extracting information from captured intruders";
                break;
            case 17:
            case 18:
            case 19:
            case 20:
                purpose = "Trap or other trick designed to kill or capture creatures that enter the dungeon";
                break;
            default:
                purpose = "Unknown purpose";  // Fallback in case of unexpected roll value
                break;
        }

        return purpose;
    }
}

// Example usage
// const treasureVault = new Treasure_vault();
// console.log(`Treasure Vault Chamber Purpose: ${treasureVault.chamber}`);
