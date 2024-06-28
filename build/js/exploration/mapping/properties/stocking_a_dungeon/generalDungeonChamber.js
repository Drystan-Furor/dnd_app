import { D } from "../../../../tools/d";

export class GeneralDungeonChamber {
    constructor() {
        this.chamber = this._dungeonChamber();
    }

    _dungeonChamber() {
        const roll = D._100();
        let purpose;

        switch (true) {
            case (roll >= 1 && roll <= 1):
                purpose = "Antechamber";
                break;
            case (roll >= 2 && roll <= 3):
                purpose = "Armory";
                break;
            case (roll === 4):
                purpose = "Audience chamber";
                break;
            case (roll === 5):
                purpose = "Aviary";
                break;
            case (roll >= 6 && roll <= 7):
                purpose = "Banquet room";
                break;
            case (roll >= 8 && roll <= 10):
                purpose = "Barracks";
                break;
            case (roll === 11):
                purpose = "Bath or latrine";
                break;
            case (roll === 12):
                purpose = "Bedroom";
                break;
            case (roll === 13):
                purpose = "Bestiary";
                break;
            case (roll >= 14 && roll <= 16):
                purpose = "Cell";
                break;
            case (roll === 17):
                purpose = "Chantry";
                break;
            case (roll === 18):
                purpose = "Chapel";
                break;
            case (roll >= 19 && roll <= 20):
                purpose = "Cistern";
                break;
            case (roll === 21):
                purpose = "Classroom";
                break;
            case (roll === 22):
                purpose = "Closet";
                break;
            case (roll === 23 || roll === 24):
                purpose = "Conjuring room";
                break;
            case (roll === 25 || roll === 26):
                purpose = "Court";
                break;
            case (roll >= 27 && roll <= 29):
                purpose = "Crypt";
                break;
            case (roll === 30 || roll === 31):
                purpose = "Dining room";
                break;
            case (roll === 32 || roll === 33):
                purpose = "Divination room";
                break;
            case (roll === 34):
                purpose = "Dormitory";
                break;
            case (roll === 35):
                purpose = "Dressing room";
                break;
            case (roll === 36):
                purpose = "Entry room or vestibule";
                break;
            case (roll === 37 || roll === 38):
                purpose = "Gallery";
                break;
            case (roll === 39 || roll === 40):
                purpose = "Game room";
                break;
            case (roll >= 41 && roll <= 43):
                purpose = "Guardroom";
                break;
            case (roll === 44):
                purpose = "Hall";
                break;
            case (roll === 46 || roll === 47):
                purpose = "Hall, great";
                break;
            case (roll === 48 || roll === 49):
                purpose = "Hallway";
                break;
            case (roll === 50):
                purpose = "Kennel";
                break;
            case (roll === 51 || roll === 52):
                purpose = "Kitchen";
                break;
            case (roll === 53 || roll === 54):
                purpose = "Laboratory";
                break;
            case (roll >= 55 && roll <= 57):
                purpose = "Library";
                break;
            case (roll === 58 || roll === 59):
                purpose = "Lounge";
                break;
            case (roll === 60):
                purpose = "Meditation chamber";
                break;
            case (roll === 61):
                purpose = "Observatory";
                break;
            case (roll === 62):
                purpose = "Office";
                break;
            case (roll === 63 || roll === 64):
                purpose = "Pantry";
                break;
            case (roll === 65 || roll === 66):
                purpose = "Pen or prison";
                break;
            case (roll === 67 || roll === 68):
                purpose = "Reception room";
                break;
            case (roll >= 69 && roll <= 70):
                purpose = "Refectory";
                break;
            case (roll === 71):
                purpose = "Robing room";
                break;
            case (roll === 72):
                purpose = "Salon";
                break;
            case (roll === 73 || roll === 74):
                purpose = "Shrine";
                break;
            case (roll === 75 || roll === 76):
                purpose = "Sitting room";
                break;
            case (roll === 77 || roll === 78):
                purpose = "Smithy";
                break;
            case (roll === 79):
                purpose = "Stable";
                break;
            case (roll === 80 || roll === 81):
                purpose = "Storage room";
                break;
            case (roll === 82 || roll === 83):
                purpose = "Strong room or vault";
                break;
            case (roll === 84 || roll === 85):
                purpose = "Study";
                break;
            case (roll >= 86 && roll <= 88):
                purpose = "Temple";
                break;
            case (roll >= 89 && roll <= 90):
                purpose = "Throne room";
                break;
            case (roll === 91):
                purpose = "Torture chamber";
                break;
            case (roll === 92 || roll === 93):
                purpose = "Training or exercise room";
                break;
            case (roll === 94 || roll === 95):
                purpose = "Trophy room or museum";
                break;
            case (roll === 96):
                purpose = "Waiting room";
                break;
            case (roll === 97):
                purpose = "Nursery or schoolroom";
                break;
            case (roll === 98):
                purpose = "Well";
                break;
            case (roll === 99 || roll === 100):
                purpose = "Workshop";
                break;
            default:
                purpose = "Unknown purpose";  // Fallback in case of unexpected roll value
                break;
        }
        return purpose;
    }
}

// Example usage
// const dungeonChamber = new GeneralDungeonChamber();
// console.log(dungeonChamber.chamber);
