import { D } from "../../../../tools/d";

export class Stronghold {
    constructor() {
        this.chamber = this._dungeonChamber();
    }

    _dungeonChamber() {
        const roll = D._100();
        let purpose;

        switch (true) {
            case (roll >= 1 && roll <= 2):
                purpose = "Antechamber where visitors seeking access to the stronghold wait";
                break;
            case (roll >= 3 && roll <= 5):
                purpose = "Armory holding high-quality gear, including light siege weapons such as ballistas";
                break;
            case (roll === 6):
                purpose = "Audience chamber used by the master of the stronghold to receive visitors";
                break;
            case (roll === 7):
                purpose = "Aviary or zoo for keeping exotic creatures";
                break;
            case (roll >= 8 && roll <= 11):
                purpose = "Banquet room for hosting celebrations and guests";
                break;
            case (roll >= 12 && roll <= 15):
                purpose = "Barracks used by elite guards";
                break;
            case (roll === 16):
                purpose = "Bath outfitted with a marble floor and other luxurious accoutrements";
                break;
            case (roll === 17):
                purpose = "Bedroom for use by the stronghold's master or important guests";
                break;
            case (roll === 18):
                purpose = "Chapel dedicated to a deity associated with the stronghold's master";
                break;
            case (roll >= 19 && roll <= 21):
                purpose = "Cistern providing drinking water";
                break;
            case (roll >= 22 && roll <= 25):
                purpose = "Dining room for intimate gatherings or informal meals";
                break;
            case (roll === 26):
                purpose = "Dressing room featuring a number of wardrobes";
                break;
            case (roll >= 27 && roll <= 29):
                purpose = "Gallery for the display of expensive works of art and trophies";
                break;
            case (roll >= 30 && roll <= 32):
                purpose = "Game room used to entertain visitors";
                break;
            case (roll >= 33 && roll <= 50):
                purpose = "Guardroom";
                break;
            case (roll == 51):
                purpose = "Kennel where monsters or trained animals that protect the stronghold are kept";
                break;
            case (roll >= 52 && roll <= 57):
                purpose = "Kitchen designed to prepare exotic foods for large numbers of guests";
                break;
            case (roll >= 58 && roll <= 61):
                purpose = "Library with an extensive collection of rare books";
                break;
            case (roll === 62):
                purpose = "Lounge used to entertain guests";
                break;
            case (roll >= 63 && roll <= 70):
                purpose = "Pantry, including cellar for wine or spirits";
                break;
            case (roll >= 71 && roll <= 74):
                purpose = "Sitting room for family and intimate guests";
                break;
            case (roll >= 75 && roll <= 78):
                purpose = "Stable";
                break;
            case (roll >= 79 && roll <= 86):
                purpose = "Storage for mundane goods and supplies";
                break;
            case (roll === 87):
                purpose = "Strong room or vault for protecting important treasures (75 percent chance of being hidden behind a secret door)";
                break;
            case (roll >= 88 && roll <= 92):
                purpose = "Study, including a writing desk";
                break;
            case (roll === 93):
                purpose = "Throne room, elaborately decorated";
                break;
            case (roll >= 94 && roll <= 96):
                purpose = "Waiting room where lesser guests are held before receiving an audience";
                break;
            case (roll >= 97 && roll <= 98):
                purpose = "Latrine or bath";
                break;
            case (roll >= 99 && roll <= 100):
                purpose = "Crypt belonging to the stronghold's master or someone else of importance";
                break;
            default:
                purpose = "Unknown purpose";  // Fallback in case of unexpected roll value
                break;
        }

        return purpose;
    }
}

// Example usage
// const stronghold = new Stronghold();
// console.log(`Stronghold Chamber Purpose: ${stronghold.chamber}`);
