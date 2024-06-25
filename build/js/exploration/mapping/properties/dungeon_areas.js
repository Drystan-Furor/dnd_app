import {getRandomElement} from "../../../tools/tools";
import {D} from "../../../tools/d";

export class Dungeon_areas {

    static _setStartingArea() {
        const startingAreas = [
            "Square, 20 x 20 ft.; passage on each wall",
            "Square, 20 x 20 ft.; door on two walls, passage in third wall",
            "Square, 40 x 40 ft.; doors on three walls",
            "Rectangle, 80 x 20 ft.; with row of pillars down the middle; two passages leading from each long wall, doors on each short wall",
            "Rectangle, 20 x 40 ft.; passage on each wall",
            "Circle, 40 ft. diameter; one passage at each cardinal direction",
            "Circle, 40 ft. diameter; one passage in each cardinal direction; well in middle of room (might lead down to lower level)",
            "Square, 20 x 20 ft.; door on two walls, passage on third wall, secret door on fourth wall",
            "Passage, 10 ft. wide; T intersection",
            "Passage, 10 ft. wide; four-way intersection"
        ];

        return getRandomElement(startingAreas);
    }

    static _setPassage() {
        const roll = D._20();
        let passage;

        switch (roll) {
            case 1:
            case 2:
                passage = "Continue straight 30 ft., no doors or side passages";
                break;
            case 3:
                passage = "Continue straight 20 ft., door to the right, then an additional 10 ft. ahead";
                break;
            case 4:
                passage = "Continue straight 20 ft., door to the left, then an additional 10 ft. ahead";
                break;
            case 5:
                passage = "Continue straight 20 ft., passage ends in a door";
                break;
            case 6:
            case 7:
                passage = "Continue straight 20 ft., side passage to the right, then an additional 10 ft. ahead";
                break;
            case 8:
            case 9:
                passage = "Continue straight 20 ft., side passage to the left, then an additional 10 ft. ahead";
                break;
            case 10:
                passage = "Continue straight 20 ft., comes to a dead end; 10 percent chance of a secret door";
                break;
            case 11:
            case 12:
                passage = "Continue straight 20 ft., then the passage turns left and continues 10 ft.";
                break;
            case 13:
            case 14:
                passage = "Continue straight 20 ft., then the passage turns right and continues 10 ft.";
                break;
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
                // "Chamber (roll on the Chamber table)"
                passage = Dungeon_areas._setChamberType();
                break;
            case 20:
                // "Stairs* (roll on the Stairs table)"
                passage = Dungeon_areas._setStairs();
                break;
            default:
                passage = "Invalid roll";
                break;
        }

        return passage;
    }

    static _setPassageWidth() {
        const roll = D._12();
        let width;

        switch (roll) {
            case 1:
            case 2:
                width = "5 ft.";
                break;
            case 3:
            case 4:
                width = "10 ft.";
                break;
            case 5:
            case 6:
                width = "20 ft.";
                break;
            case 7:
            case 8:
                width = "30 ft.";
                break;
            case 9:
                width = "40 ft., with row of pillars down the middle";
                break;
            case 10:
                width = "40 ft., with double row of pillars";
                break;
            case 11:
                width = "40 ft. wide, 20 ft. high";
                break;
            case 12:
                width = "40 ft. wide, 20 ft. high, gallery 10 ft. above floor allows access to level above";
                break;
            default:
                width = "Invalid roll";
                break;
        }
        return width;
    }

    static _setDoorType() {
        const material = [
            "Wooden", "Iron", "Stone",
            "Portcullis", "Secret door",
            "Portcullis, locked in place",
        ];
        let doorMaterial = getRandomElement(material)

        const doorTypes = [
            "barred", "locked", "",
        ];
        let doorType = getRandomElement(doorTypes)

        return doorMaterial +", " + doorType + " door.";
    }

    static _setBeyondDoor() {
        const beyondDoor = [
            "Passage extending 10 ft., then T intersection extending 10 ft. to the right and left",
            "Passage extending 10 ft., then T intersection extending 10 ft. to the right and left",
            "Passage 20 ft. straight ahead", "Passage 20 ft. straight ahead", "Passage 20 ft. straight ahead",
            "Passage 20 ft. straight ahead", "Passage 20 ft. straight ahead", "Passage 20 ft. straight ahead",
            "Chamber (roll on the Chamber table)", "Chamber (roll on the Chamber table)", "Chamber (roll on the Chamber table)",
            "Chamber (roll on the Chamber table)", "Chamber (roll on the Chamber table)", "Chamber (roll on the Chamber table)",
            "Chamber (roll on the Chamber table)", "Chamber (roll on the Chamber table)", "Chamber (roll on the Chamber table)",
            "Chamber (roll on the Chamber table)", "Stairs (roll on the Stairs table)", "False door with trap"
        ];

        return beyondDoor[D._20() - 1];
    }

    static _setChamberType() {
        const chambers = [
            "Square, 20 x 20 ft.",
            "Square, 20 x 30 ft.",
            "Square, 40 x 40 ft.",
            "Rectangle, 20 x 30 ft.",
            "Rectangle, 30 x 50 ft.",
            "Circle, 30 ft. diameter",

            "Rectangle, 40 x 50 ft.", "Rectangle, 40 x 50 ft.",
            "Rectangle, 40 x 60 ft.", "Rectangle, 50 x 80 ft.",
            "Circle, 50 ft. diameter",
            "Octagon, 40 x 40 ft.", "Octagon, 60 x 60 ft.",
            "Trapezoid, roughly 40 x 60 ft."
        ];
        let chamber = getRandomElement(chambers);
        const largeChambers = [
            "Rectangle, 40 x 50 ft.",
            "Rectangle, 40 x 60 ft.",
            "Rectangle, 50 x 80 ft.",
            "Circle, 50 ft. diameter",
            "Octagon, 40 x 40 ft.",
            "Octagon, 60 x 60 ft.",
            "Trapezoid, roughly 40 x 60 ft."
        ];
        const isLargeChamber = largeChambers.includes(chamber);
// // Example usage
//         const { chamber, isLargeChamber } = Dungeon_features._setChamberType();
//         const chamberExits = Dungeon_features._setChamberExits(isLargeChamber);
//
//         console.log(`Chamber Type: ${chamber}`);
//         console.log(`Is Large Chamber: ${isLargeChamber}`);
//         console.log(`Chamber Exits: ${chamberExits}`);
        return { chamber, isLargeChamber };
    }

    static _setChamberExits(isLargeChamber) {
        const normalChamberExits = [
            0, 0, 0, 1, 1, 1, 2, 2, 2, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4
        ];

        const largeChamberExits = [
            0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 6
        ];

        return (isLargeChamber ? largeChamberExits : normalChamberExits)[D._20() - 1];
    }

    static _setExitLocation() {
        const exitLocations = [
            "Wall opposite entrance",
            "Wall left of entrance",
            "Wall right of entrance",
            "Same wall as entrance",
        ];

        return exitLocations[D._4()];
    }

    static _setExitType() {

        const exitTypes = [
            "Door (roll on the Door Type table)",
            "Corridor, 10 ft. long",
        ];

        let exit = getRandomElement(exitTypes);
            if (exit === "Door (roll on the Door Type table)") {
                exit = Dungeon_areas._setDoorType();
            }

        return exit;
    }

    static _setStairs() {
        const stairs = [
            "Down one level to a chamber",
            "Down one level to a passage 20 ft. long",
            "Down two levels to a passage 20 ft. long", "Down two levels to a passage 20 ft. long",
            "Down three levels to a chamber", "Down three levels to a passage 20 ft. long",
            "Up one level to a chamber", "Up one level to a passage 20 ft. long",
            "Up to a dead end",
            "Chimney up one level to a passage 20 ft. long", "Chimney up two levels to a passage 20 ft. long",
            "Shaft (with or without elevator) down one level to a chamber",
            "Shaft (with or without elevator) down one level to a chamber and down one level to another chamber"
        ];

        let stairCase = getRandomElement(stairs)
        if (stairCase !== "Down one level to a chamber" ) {
            stairCase = getRandomElement(stairs);
            return stairCase;
        }

        return stairCase;
    }
}