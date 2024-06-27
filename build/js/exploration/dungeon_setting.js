import {Dungeon} from "./mapping/dungeon";
import {purposeFormatter, rand} from "../tools/tools";
import {Verbs} from "../npc/generators/verbs";

export class Dungeon_setting {
    constructor(parameters) {
        this.dungeon = this._dndDungeonRng(parameters);
        this.chamber_layout = this._dndDungeonLayout(this.properties.dungeon.dungeonInstance);
        this.exploration = this._dndDungeonExploration(this.chamber_layout);

    }

    getDungeon() {
        return this.dungeon;
    }

    getExploration() {
        return this.exploration;
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
            // instance
            dungeonInstance: this.properties.dungeon.dungeonInstance,

        };
    }

    _dndDungeonLayout(instance){
        // Initialize the properties and classes
        // pass the Instance to the layout builder, it has name and first room
        console.log(instance.constructor.name)
        this.instance_layout = new Dungeon()._dungeonExploration(instance);

        // you enter trough exit_the_world
        // you step into a starting_area
        // you getObservation() this is a starting_chamber



        // Construct object with properties of classes
        return {
            instance: instance.constructor.name,
            layout_starting_chamber: this.instance_layout.exploration.starting_chamber,
            layout_starting_area: this.instance_layout.exploration.starting_area,
            exit_the_world: this.instance_layout.exploration.exit_the_world,
            // areas
            // dungeon_starting_area: thisDungeon.exploration.dungeon_starting_area,

            // chamber purpose
            // dungeon_chamber_purpose: dungeonProperties.dungeon_chamber_purpose,
        }



    }

    _dndDungeonExploration(chamber_layout) {

        let dungeonPurpose = purposeFormatter(chamber_layout.instance);

        let exploration_1 = `As you pass trough a ${chamber_layout.exit_the_world} 
         you enter a ${dungeonPurpose} and arrive in a room shaped like a ${chamber_layout.layout_starting_area}. 
         You  ${Verbs.getObservation()} this is a ${chamber_layout.layout_starting_chamber}`;

        return {
            exploration_1,
        }

    }
}