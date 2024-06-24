import { capitalizeFirstLetter, getRandomElement, lowercaseFirstLetter } from "../../../tools/tools";
import { Verbs } from "../../../npc/generators/verbs";

export class Dungeon_doors {
    constructor() {
        this.doorType = this._setDoorType();
        this.doorFeatures = this._setDoorFeatures();
        this.dungeon_door_description = this._stringBuilder(this.doorType, this.doorFeatures);
    }

    // Method to set the door type
    _setDoorType() {
        const doorTypes = [
            "Wooden",
            "Iron",
            "Stone",
            "Bronze",
            "Reinforced",
            "Sliding",
            "Portcullis",
            "Enchanted",
            "Crystal",
            "Bone",
            "Corroded metal",
            "Hidden panel",
            "Magical barrier",
            "Arcane",
            "Ancient, weathered",
            "Carved wooden",
            "Decorated stone",
            "Glass"
        ];
        return getRandomElement(doorTypes);
    }

    // Method to set the door features
    _setDoorFeatures() {
        const features = [
            "Engraved symbols",
            "Heavy locks",
            "Rusty hinges",
            "Creaking sounds",
            "Reinforced with iron bands",
            "Etched runes",
            "Gleaming with magical light",
            "Hidden mechanisms",
            "Arcane wards",
            "Trap mechanisms",
            "Ornate carvings",
            "Studded with gems",
            "Covered in moss",
            "Protected by a spell",
            "Embedded crystals",
            "Glowing inscriptions",
            "Camouflaged with the wall",
            "Guarded by a creature",
            "Sealed with wax",
            "Marked with warnings"
        ];

        return getRandomElement(features);
    }

    _stringBuilder(doorType, doorFeatures) {
        let quality = capitalizeFirstLetter(Verbs.quality());
        let maintenance = Verbs.maintenance();
        let color = Verbs.color();

        this.dungeon_door_description = quality + " " + maintenance + " " + color + " " + lowercaseFirstLetter(doorType) +
            " doors mark this dungeon. The dungeon doors feature " + lowercaseFirstLetter(doorFeatures) + ". ";

        return this.dungeon_door_description;
    }

    getDungeonDoorDescription() {
        return this.dungeon_door_description;
    }

    // Method to get the door type
    getDoorType() {
        return this.doorType;
    }

    // Method to get the door features
    getDoorFeatures() {
        return this.doorFeatures;
    }
}

