import {D} from "../../../../tools/d";
import {getRandomElement} from "../../../../tools/tools";
import {GeneralDungeonChamber} from "../stocking_a_dungeon/generalDungeonChamber";

export class CurrentChamberState {

    constructor() {
        this.chamber = this._dungeonChamberState();
    }

    _dungeonChamberState() {

        let roll = D._20();
        let string = `${this._partOne()}. ${this._partTwo()}`;

        if (roll === 20) {
            string =  "pristine and in original state. Everything is well-preserved."
        }
        return string;
    }

    // the chamber is

    _partOne() {
        const partOne = [
            `full of rubble, and the ceiling partially collapsed`,
            `full of holes, and the floor is partially collapsed`,
            `covered in ashes, contents mostly burned`,
            `used as a campsite`,
            `filled with a pool of water; chamber's original contents are water damaged`,
            `littered with wrecked furniture`,
            `stripped bare and empty`,
            `converted to a ${new GeneralDungeonChamber()._dungeonChamber()}`,
        ];

        return getRandomElement(partOne);
    }

    _partTwo() {
        const partTwo = [
            `Debris is scattered around`,
            `The room is filled with dust`,
            `Large chunks of stone lie on the ground`,
            `You see gaps leading to lower levels`,
            `The room smells of smoke`,
            `Charred remains are everywhere`,
            `There are remnants of a fire pit`,
            `Old bedrolls and supplies are left behind`,
            `Mold is growing on the walls`,
            `The floor is slippery`,
            `Pieces of chairs and tables are scattered`,
            `Broken shelves and cabinets line the walls`,
            `The remnants of a bed are in the corner`,
            `A torn tapestry hangs on the wall`,
            `Shattered glass litters the floor`,
            `Strange markings cover the walls`,
            `Unfamiliar tools and devices are present`,
        ];
        return getRandomElement(partTwo);
    }
}