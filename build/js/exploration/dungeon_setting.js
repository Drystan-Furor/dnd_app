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
            id: rand(1000000, 9999999),
            // properties
            dungeon_location: this.properties.dungeon.dungeon_location,
            dungeon_history: this.properties.dungeon.dungeon_history,
            dungeon_purpose: this.properties.dungeon.dungeon_purpose,
            dungeon_creator: this.properties.dungeon.dungeon_creator,
            // statistics
            dungeon_locks: this.properties.dungeon.dungeon_locks,
            dungeon_secrets: this.properties.dungeon.dungeon_secrets,
            dungeon_hazards: this.properties.dungeon.dungeon_hazards,
            dungeon_mood: this.properties.dungeon.dungeon_mood,
            // sub properties
            dungeon_air_quality: this.properties.dungeon.dungeon_air_quality,
            dungeon_odor: this.properties.dungeon.dungeon_odor,
            dungeon_wallType: this.properties.dungeon.dungeon_wallType,
            dungeon_wallFeatures: this.properties.dungeon.dungeon_wallFeatures,
            dungeon_lightSources: this.properties.dungeon.dungeon_lightSources,
            // info
            dungeon_typeDescription: this.properties.dungeon.dungeon_typeDescription,
            dungeon_wallDescription: this.properties.dungeon.dungeon_wallDescription,
            dungeon_doorsDescription: this.properties.dungeon.dungeon_doorsDescription,
            // summary
            dungeon_summary_vision: this.properties.dungeon.summary_vision,
            dungeon_summary_locks: this.properties.dungeon.summary_locks,
            dungeon_summary_secrets: this.properties.dungeon.summary_secrets,
            dungeon_summary_hazards: this.properties.dungeon.summary_hazards,
            dungeon_summary_mood: this.properties.dungeon.summary_mood,

            // areas
            dungeon_starting_area: this.properties.dungeon.dungeon_starting_area,

            // chamber purpose
            dungeon_chamber_purpose: this.properties.dungeon.dungeon_chamber_purpose,
        };
    }
}