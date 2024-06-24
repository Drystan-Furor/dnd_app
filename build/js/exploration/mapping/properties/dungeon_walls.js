import {capitalizeFirstLetter, getRandomElement, lowercaseFirstLetter} from "../../../tools/tools";
import {Verbs} from "../../../npc/generators/verbs";

export class Dungeon_walls {
    constructor() {
        this.wallType = this._setWallType();
        this.wallFeatures = this._setWallFeatures();
        this.dungeon_wall_description = this._stringBuilder(this.wallType,this.wallFeatures);
    }


    // Method to set the wall type
    _setWallType() {
        const wallTypes = [
            "Masonry",
            "Unnaturally smooth,",
            "Solid rock, hewn with tools",
            "Solid rock, worn smooth by the passage of water or lava",
            "Wood",
            "Composite materials",
            "Bricks",
            "Reinforced concrete",
            "Crystal or gemstone",
            "Overgrown with moss and vines",
            "Ice",
            "Metal panels",
            "Obsidian",
            "Coral",
            "Bone",
            "Enchanted stone",
            "Ancient, crumbling masonry",
            "Living wood (part of a large tree)",
            "Carved sandstone",
            "Glass"
        ];
        return getRandomElement(wallTypes);
    }

    // Method to set the wall features
    _setWallFeatures() {
        const features = [
            "Murals",
            "Frescoes",
            "Bas-reliefs",
            "Lighting fixtures such as sconces or torch brackets",
            "Secret doors",
            "Engravings",
            "Ivy and moss",
            "Ancient inscriptions",
            "Trapped sections",
            "Hidden compartments",
            "Magical runes",
            "Water seeps",
            "Roots intruding",
            "Hanging tapestries",
            "Embedded crystals",
            "Spikes and traps",
            "Archways",
            "Statues",
            "Windows with bars",
            "Sliding panels",
            "Doors with complex locks",
            "Echoing sounds",
            "Strange odors",
            "Web-covered corners",
            "Torch marks",
            "Mysterious glowing symbols",
            "Creeping shadows",
            "Scratch marks",
            "Holes and gaps",
            "Patches of different materials"
        ];

        const numFeatures = Math.floor(Math.random() * features.length) + 1;
        return getRandomElement(features, numFeatures);
    }

    _stringBuilder(wallType,wallFeatures) {
        let quality = capitalizeFirstLetter(Verbs.quality());
        let maintenance =Verbs.maintenance();
        let color = Verbs.color();

        this.dungeon_wall_description = quality + " " + maintenance + " " + color + " " + lowercaseFirstLetter(wallType) +
            " walls shape this dungeon. The dungeon walls feature " + lowercaseFirstLetter(wallFeatures) + ". ";

        return this.dungeon_wall_description;
    }


    getDungeonWallDescription() {
        return this.dungeon_wall_description;
    }

    // Method to get the wall type
    getWallType() {
        return this.wallType;
    }

    // Method to get the wall features
    getWallFeatures() {
        return this.wallFeatures;
    }


}
