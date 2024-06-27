import {Dungeon_montage} from "./dungeon_montage/dungeon_montage";
import {
    Death_Trap,
    Lair,
    Maze,
    Mine,
    Planar_Gate,
    Shrine,
    Stronghold,
    Temple,
    Tomb,
    Treasure_Vault
} from "./properties";
import {Dungeon_layout} from "./dungeon_montage/dungeon_layout";

export class Dungeon {

    _dungeonProperties(parameters) {
        const dungeon = new Dungeon_montage(parameters);

        return {
            // property : class.getThis(),
            dungeon: dungeon.getMontage(),
        }
    }

    _dungeonExploration(instance) {
        const dungeon_layout = new Dungeon_layout(instance);

        return {
            // property : class.getThis(),
            exploration: dungeon_layout.getLayout(),
        }
    }

     static _createDungeonPurposeInstance(purposeString) {
        // Convert the purpose string to the appropriate class name format
        const className = purposeString.toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('_');

         const classes = Dungeon._allPurposes();
         if (classes[className]) {
             return new classes[className]();
        } else {
            throw new Error(`Class ${className} does not exist`);
        }
    }

    static _allPurposes() {
        return  {
            Lair,
            Maze,
            Mine,
            Stronghold,
            Temple,
            Shrine,
            Tomb,
            Treasure_Vault,
            Planar_Gate,
            Death_Trap
        };
    }
}
