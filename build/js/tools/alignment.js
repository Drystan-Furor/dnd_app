import {getRandomElement} from "./tools";

export class Alignment {


    static _getAlignment() {
        let foundation = Alignment._lawfulNeutralChaotic();
        let focus = Alignment._goodNeutralEvil();

        if (foundation === `Neutral` && focus === `neutral`) {
            return foundation
        }

        return foundation + " " + focus;
    }

    static _lawfulNeutralChaotic() {
        let alignment = [
            `Lawful`,
            `Neutral`,
            `Chaotic`,

        ];
        return getRandomElement(alignment);
    }


    static _goodNeutralEvil() {
        let alignment = [
            `good`,
            `neutral`,
            `evil`,
        ];
        return getRandomElement(alignment);
    }
}