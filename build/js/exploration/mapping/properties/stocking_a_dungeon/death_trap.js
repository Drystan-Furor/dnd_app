import {D} from "../../../../tools/d";

export class Death_Trap {

    constructor() {
        this.chamber = this._dungeonChamber();
    }

    _dungeonChamber() {
            const roll = D._20();
            let purpose;

            switch (roll) {
                case 1:
                    purpose = "Antechamber or waiting room for spectators";
                    break;
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    purpose = "Guardroom fortified against intruders";
                    break;
                case 9:
                case 10:
                case 11:
                    purpose = "Vault for holding important treasures, accessible only by locked or secret door (75 percent chance of being trapped)";
                    break;
                case 12:
                case 13:
                case 14:
                    purpose = "Room containing a puzzle that must be solved to bypass a trap or monster";
                    break;
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                    purpose = "Trap designed to kill or capture creatures";
                    break;
                case 20:
                    purpose = "Observation room, allowing guards or spectators to observe creatures moving through the dungeon";
                    break;
                default:
                    purpose = "Unknown purpose";  // Fallback in case of unexpected roll value
                    break;
            }
            return purpose;
    }
}