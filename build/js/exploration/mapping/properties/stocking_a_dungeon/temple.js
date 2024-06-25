import { D } from "../../../../tools/d";

export class Temple {
    constructor() {
        this.chamber = this._dungeonChamber();
    }

    _dungeonChamber() {
        const roll = D._100();
        let purpose;

        switch (true) {
            case (roll >= 1 && roll <= 3):
                purpose = "Armory filled with weapons and armor, battle banners, and pennants";
                break;
            case (roll >= 4 && roll <= 5):
                purpose = "Audience chamber where priests of the temple receive commoners and low-ranking visitors";
                break;
            case (roll >= 6 && roll <= 7):
                purpose = "Banquet room used for celebrations and holy days";
                break;
            case (roll >= 8 && roll <= 10):
                purpose = "Barracks for the temple's military arm or its hired guards";
                break;
            case (roll >= 11 && roll <= 14):
                purpose = "Cells where the faithful can sit in quiet contemplation";
                break;
            case (roll >= 15 && roll <= 24):
                purpose = "Central temple built to accommodate rituals";
                break;
            case (roll >= 25 && roll <= 28):
                purpose = "Chapel dedicated to a lesser deity associated with the temple's major deity";
                break;
            case (roll >= 29 && roll <= 31):
                purpose = "Classroom used to train initiates and priests";
                break;
            case (roll >= 32 && roll <= 34):
                purpose = "Conjuring room, specially sanctified and used to summon extraplanar creatures";
                break;
            case (roll >= 35 && roll <= 40):
                purpose = "Crypt for a high priest or similar figure, hidden and heavily guarded by creatures and traps";
                break;
            case (roll >= 41 && roll <= 42):
                purpose = "Dining room (large) for the temple's servants and lesser priests";
                break;
            case (roll == 43):
                purpose = "Dining room (small) for the temple's high priests";
                break;
            case (roll >= 44 && roll <= 46):
                purpose = "Divination room, inscribed with runes and stocked with soothsaying implements";
                break;
            case (roll >= 47 && roll <= 50):
                purpose = "Dormitory for lesser priests or students";
                break;
            case (roll >= 51 && roll <= 56):
                purpose = "Guardroom";
                break;
            case (roll == 57):
                purpose = "Kennel for animals or monsters associated with the temple's deity";
                break;
            case (roll >= 58 && roll <= 60):
                purpose = "Kitchen (might bear a disturbing resemblance to a torture chamber in an evil temple)";
                break;
            case (roll >= 61 && roll <= 65):
                purpose = "Library, well stocked with religious treatises";
                break;
            case (roll >= 66 && roll <= 68):
                purpose = "Prison for captured enemies (in good or neutral temples) or those designated as sacrifices (in evil temples)";
                break;
            case (roll >= 69 && roll <= 73):
                purpose = "Robing room containing ceremonial outfits and items";
                break;
            case (roll == 74):
                purpose = "Stable for riding horses and mounts belonging to the temple, or for visiting messengers and caravans";
                break;
            case (roll >= 75 && roll <= 79):
                purpose = "Storage holding mundane supplies";
                break;
            case (roll >= 80 && roll <= 81):
                purpose = "Strong room or vault holding important relics and ceremonial items, heavily trapped";
                break;
            case (roll >= 82 && roll <= 89):
                purpose = "Torture chamber, used in inquisitions (in good or neutral temples with a lawful bent) or for the sheer joy of causing pain (evil temples)";
                break;
            case (roll >= 90 && roll <= 91):
                purpose = "Trophy room where art celebrating key figures and events from mythology is displayed";
                break;
            case (roll == 92):
                purpose = "Latrine or bath";
                break;
            case (roll >= 93 && roll <= 94):
                purpose = "Well for drinking water, defendable in the case of attack or siege";
                break;
            case (roll >= 95 && roll <= 100):
                purpose = "Workshop for repairing or creating weapons, religious items, and tools";
                break;
            default:
                purpose = "Unknown purpose";  // Fallback in case of unexpected roll value
                break;
        }

        return purpose;
    }
}

// Example usage
// const templeOrShrine = new Temple_or_Shrine();
// console.log(`Temple or Shrine Chamber Purpose: ${templeOrShrine.chamber}`);
