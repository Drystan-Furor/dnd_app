import {getRandomElement} from "../../../tools/tools";
import {Alignment} from "../../../tools/alignment";
import {NpcClass} from "../../../npc/properties/class";

export class Dungeon_creator {

    static _creator(parameters) {
        let environment = [
            `Beholder`,
            `Dwarves`,
            `Elves`,
            `Drow`,
            `Giants`,
            `Hobgoblins`,
            `Kuo-toa`,
            `Lich`,
            `Mind Flayers`,
            `Yuan-ti`,
            `No creator (Natural cavern)`,
            Dungeon_creator._cultsAndGroups(),
            Dungeon_creator._alignmentSpecificHumans(parameters),
        ];
        return getRandomElement(environment);
    }

    static _alignmentSpecificHumans(parameters) {
        let specific = Alignment._getAlignment();
        let npcClass = new NpcClass(parameters).generateClass();

        return specific + " " + npcClass + " Humans"
    }




    static _cultOrGroup() {
        let cultOrGroup = [
            `cult`,
            `religious group`,
        ];
        return getRandomElement(cultOrGroup);
    }

    static _cultsAndGroups() {
        let cultOrGroup = Dungeon_creator._cultOrGroup();
        let worshippers = [
            `Demon-worshipping ` + cultOrGroup,
            `Devil-worshipping ` + cultOrGroup,
            `Elemental Air ` + cultOrGroup,
            `Elemental Earth ` + cultOrGroup,
            `Elemental Fire ` + cultOrGroup,
            `Elemental Water ` + cultOrGroup,
            `Worshippers of an evil deity`,
            `Worshippers of a good deity`,
            `Worshippers of a neutral deity`,
        ];
        return getRandomElement(worshippers);
    }

}