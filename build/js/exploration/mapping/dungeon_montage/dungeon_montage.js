import {
    Dungeon_location,
    Dungeon_creator,
    Dungeon_history,
    Dungeon_purpose,
    Dungeon_air_quality,
    Dungeon_walls, Dungeon_lightsources, Dungeon_doors, Dungeon_statblock_summary
} from "../properties";
import {D} from "../../../tools/d";
import {Dungeon_areas} from "../properties/dungeon_areas";
import {Dungeon} from "../dungeon";

// imports of all purposes

export class Dungeon_montage {
    constructor(parameters) {
        this._montage(parameters);
    }

    _montage(parameters) {
        // properties
        let dungeon_location = Dungeon_location._location();
        let dungeon_creator = Dungeon_creator._creator(parameters);
        let dungeon_purpose = Dungeon_purpose._purpose();
        let dungeon_history = Dungeon_history._history();
        // statistics
        let dungeon_locks = "d20 (" +D._20() + ")";
        let dungeon_secrets = "d20 (" +D._20() + ")";
        let dungeon_hazards = "d20 (" +D._20() + ")";
        let dungeon_mood = "d20 (" +D._20() + ")";
        //sub properties
        let dungeon_air = new Dungeon_air_quality();
        let dungeon_air_quality = dungeon_air._getAirQuality();
        let dungeon_odor = dungeon_air._getOdor();
        let dungeon_walls = new Dungeon_walls;
        let dungeon_wallType = dungeon_walls.getWallType()
        let dungeon_wallFeatures = dungeon_walls.getWallFeatures();
        let dungeon_lightSources = Dungeon_lightsources._lightsources();
        // info
        let dungeon_typeDescription = Dungeon_purpose.getTypeDescription(dungeon_purpose);
        let dungeon_wallDescription = dungeon_walls.getDungeonWallDescription();
        let dungeon_doors = new Dungeon_doors;
        let dungeon_doorsDescription= dungeon_doors.getDungeonDoorDescription();
        // summary
        let summary_vision = Dungeon_statblock_summary._setVision();
        let summary_locks = Dungeon_statblock_summary._setLockDescription();
        let summary_secrets = Dungeon_statblock_summary._setSecretDescription();
        let summary_hazards = Dungeon_statblock_summary._setHazardDescription();
        let summary_mood = Dungeon_statblock_summary._setMoodDescription();
        // -------- end stat block

        let dungeon_starting_area = Dungeon_areas._setStartingArea();
        // etc

        // stocking a dungeon:
        let dungeonPurposeString = Dungeon._createDungeonPurposeInstance(dungeon_purpose) // dungeon_purpose: "Death trap"
        console.log(dungeonPurposeString + " on montage");
        let dungeon_chamber_purpose = new dungeonPurposeString() // dungeon_purpose: "Death_Trap"


        this.montage = {
            // statblock
            dungeon_location, dungeon_creator, dungeon_purpose,dungeon_history,
            dungeon_locks, dungeon_secrets, dungeon_hazards, dungeon_mood,
            dungeon_typeDescription, dungeon_air_quality, dungeon_odor,
            dungeon_wallType, dungeon_wallFeatures, dungeon_wallDescription,
            dungeon_lightSources, dungeon_doorsDescription,
            summary_vision, summary_locks, summary_secrets, summary_hazards, summary_mood,

            // areas
            dungeon_starting_area,
            // stocking a dungeon:
            // dungeon_chamber_purpose
        };
    }


    getMontage() {
        return this.montage;
    }
}