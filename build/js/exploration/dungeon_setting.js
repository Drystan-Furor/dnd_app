import {Dungeon} from "./mapping/dungeon";
import {rand} from "../tools/tools";

export class Dungeon_setting {
    constructor(parameters) {
        this.dungeon = this._dndDungeonRng(parameters);
    }

    getDungeon() {
        return this.dungeon;
    }

    _dndDungeonRng(parameters) {
        // Initialize the properties and classes
        this.properties = new Dungeon()._dungeonProperties(parameters);

        // Construct object with properties of classes
        return {
            // iD
            id: rand(1000, 9999),
            // class
            dungeon_location: this.properties.dungeon.dungeon_location,
            dungeon_history: this.properties.dungeon.dungeon_history,
            dungeon_purpose: this.properties.dungeon.dungeon_purpose,
            dungeon_creator: this.properties.dungeon.dungeon_creator,

        };
    }


}