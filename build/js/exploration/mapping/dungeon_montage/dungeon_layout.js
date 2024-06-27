import {Dungeon_areas} from "../properties";


export class Dungeon_layout {
    constructor(instance) {
        this._layoutStart(instance);
    }

    _layoutStart(instance) {
        // properties
        let starting_chamber = instance.chamber;
        let exit_the_world = Dungeon_areas._setExitType();
        let starting_area = Dungeon_areas._setStartingArea();




        //montage dungeon layout here



        this.dungeon_layout = {
            exit_the_world, starting_chamber, starting_area

        };


    }


    getLayout() {
        return this.dungeon_layout;
    }
}