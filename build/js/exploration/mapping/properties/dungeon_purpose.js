import {getRandomElement} from "../../../tools/tools";

export class Dungeon_purpose {
    static _purpose() {
        let purpose = [
            `Lair`,
            `Maze`,
            `Mine`,
            `Stronghold`,
            `Temple`,
            `Shrine`,
            `Tomb`,
            `Treasure vault`,
            `Planar Gate`,
            `Death trap`,

        ];
        return getRandomElement(purpose);
    }












}
