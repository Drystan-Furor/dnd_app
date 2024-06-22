import {getRandomElement} from "../../../tools/tools";

export class Dungeon_creator {

    static _creator() {
        let environment = [

            `Beholder`,

        ];
        return getRandomElement(environment);
    }



    //STRING
    static _cultOrGroup() {
        let cultOrGroup = [
            `Cult`,
            `Religious group`,
        ];
        return getRandomElement(cultOrGroup);
    }

    // ARRAY
    // Cults and religious groups
    static _cultsAndGroups() {
        let cultsAndGroups = [
            `Demon-worshipping cult`,
            `Devil-worshipping cult`,
            `Elemental Air cult`,
            `Religious group`,
        ];
        return getRandomElement(cultsAndGroups);
    }

    // NPC Alignment

    // NPC Class

    // Dungeon Purpose

    // Dungeon History


}