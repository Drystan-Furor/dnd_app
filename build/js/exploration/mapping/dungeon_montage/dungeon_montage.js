import {Dungeon_location, Dungeon_creator, Dungeon_history, Dungeon_purpose} from "../properties";

export class Dungeon_montage {
    constructor(parameters) {
        this._montage(parameters);
    }



    _montage(parameters) {
        let dungeon_location = Dungeon_location._location();
        let dungeon_creator = Dungeon_creator._creator(parameters);
        let dungeon_purpose = Dungeon_purpose._purpose();
        let dungeon_history = Dungeon_history._history();


        this.montage = {
            dungeon_location, dungeon_creator, dungeon_purpose,dungeon_history
        };
    }


    getMontage() {
        return this.montage;
    }
}