import {Dungeon_montage} from "./dungeon_montage/dungeon_montage";

export class Dungeon {

    _dungeonProperties(parameters){
        const montage = new Dungeon_montage(parameters);

        return {
            // property : class.getThis(),
            dungeon: montage.getMontage(),
        }
    }
    }