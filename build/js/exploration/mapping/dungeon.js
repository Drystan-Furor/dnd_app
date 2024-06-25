import {Dungeon_montage} from "./dungeon_montage/dungeon_montage";

export class Dungeon {

    _dungeonProperties(parameters) {
        const montage = new Dungeon_montage(parameters);

        return {
            // property : class.getThis(),
            dungeon: montage.getMontage(),
        }
    }

     static _createDungeonPurposeInstance(purposeString) {
        // Convert the purpose string to the appropriate class name format
        const className = purposeString.toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('_');

        console.log(className + " on instance");
        // Check if the class exists
        if (typeof className !== null) {
            return  className;
        } else {
            throw new Error(`Class ${className} does not exist`);
        }
    }
}