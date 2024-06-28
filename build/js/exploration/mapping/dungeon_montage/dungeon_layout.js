import {Dungeon_areas} from "../properties";
import {CurrentChamberState} from "../properties/chamber_state/currentChamberState";


export class Dungeon_layout {
    constructor(instance) {
        this._layoutStart(instance);
    }

    _layoutStart(instance) {
        // properties
        let starting_chamber = instance.chamber;
        let exit_the_world = Dungeon_areas._setExitType();
        let starting_area = Dungeon_areas._setStartingArea();
        let chamber_state = new CurrentChamberState()._dungeonChamberState();




        //montage dungeon layout here



        this.dungeon_layout = {
            exit_the_world, starting_chamber, starting_area, chamber_state

        };


    }


    getLayout() {
        return this.dungeon_layout;
    }
}