import { D } from "../../../../tools/d";

export class Planar_Gate {
    constructor() {
        this.chamber = this._dungeonChamber();
    }

    _dungeonChamber() {
        const roll = D._100();
        let purpose;

        switch (true) {
            case (roll >= 1 && roll <= 3):
                purpose = "Decorated foyer or antechamber";
                break;
            case (roll >= 4 && roll <= 8):
                purpose = "Armory used by the portal's guardians";
                break;
            case (roll >= 9 && roll <= 10):
                purpose = "Audience chamber for receiving visitors";
                break;
            case (roll >= 11 && roll <= 19):
                purpose = "Barracks used by the portal's guards";
                break;
            case (roll >= 20 && roll <= 23):
                purpose = "Bedroom for use by the high-ranking members of the order that guards the portal";
                break;
            case (roll >= 24 && roll <= 30):
                purpose = "Chapel dedicated to a deity or deities related to the portal and its defenders";
                break;
            case (roll >= 31 && roll <= 35):
                purpose = "Cistern providing fresh water";
                break;
            case (roll >= 36 && roll <= 38):
                purpose = "Classroom for use of initiates learning about the portal's secrets";
                break;
            case (roll === 39):
                purpose = "Conjuring room for summoning creatures used to investigate or defend the portal";
                break;
            case (roll >= 40 && roll <= 41):
                purpose = "Crypt where the remains of those that died guarding the portal are kept";
                break;
            case (roll >= 42 && roll <= 47):
                purpose = "Dining room";
                break;
            case (roll >= 48 && roll <= 50):
                purpose = "Divination room used to investigate the portal and events tied to it";
                break;
            case (roll >= 51 && roll <= 55):
                purpose = "Dormitory for visitors and guards";
                break;
            case (roll >= 56 && roll <= 57):
                purpose = "Entry room or vestibule";
                break;
            case (roll >= 58 && roll <= 59):
                purpose = "Gallery for displaying trophies and objects related to the portal and those that guard it";
                break;
            case (roll >= 60 && roll <= 67):
                purpose = "Guardroom to protect or watch over the portal";
                break;
            case (roll >= 68 && roll <= 72):
                purpose = "Kitchen";
                break;
            case (roll >= 73 && roll <= 77):
                purpose = "Laboratory for conducting experiments relating to the portal and creatures that emerge from it";
                break;
            case (roll >= 78 && roll <= 80):
                purpose = "Library holding books about the portal's history";
                break;
            case (roll >= 81 && roll <= 85):
                purpose = "Pen or prison for holding captives or creatures that emerge from the portal";
                break;
            case (roll >= 86 && roll <= 87):
                purpose = "Planar junction, where the gate to another plane once stood (25 percent chance of being active)";
                break;
            case (roll >= 88 && roll <= 90):
                purpose = "Storage";
                break;
            case (roll === 91):
                purpose = "Strong room or vault, for guarding valuable treasures connected to the portal or funds used to pay the planar gate's guardians";
                break;
            case (roll >= 92 && roll <= 93):
                purpose = "Study";
                break;
            case (roll === 94):
                purpose = "Torture chamber, for questioning creatures that pass through the portal or that attempt to clandestinely use it";
                break;
            case (roll >= 95 && roll <= 98):
                purpose = "Latrine or bath";
                break;
            case (roll >= 99 && roll <= 100):
                purpose = "Workshop for constructing tools and gear needed to study the portal";
                break;
            default:
                purpose = "Unknown purpose";  // Fallback in case of unexpected roll value
                break;
        }
        return purpose;
    }
}

// Example usage
// const planarGate = new Planar_gate();
// console.log(`Planar Gate Chamber Purpose: ${planarGate.chamber}`);
