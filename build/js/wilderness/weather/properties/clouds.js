import {getRandomElement} from "../../../tools/tools";

export class Clouds {
    constructor(d20) {
        this.clouds = this._clouds(d20);
    }

    _clouds(d20) {
        let color = [
            `white`,
            `grey`,
            `gray and white`,
        ];
        color = getRandomElement(color);

        let complexity = [
            `thin`,
            `fluffy`,
            `delicate`,
            `patchy`,
        ];
        complexity = getRandomElement(complexity);

        let shape = [
            `cotton balls`,
            `sheets`,
            `feathery clouds`,
            `huge mountains or towers`,
        ];
        shape = getRandomElement(shape);

        let are  = [
            `look like`,
            `are`,
        ];
        are = getRandomElement(are);

        let lucyInTheSky = [
            `and cover the whole sky like a veil`,
            `in the sky`,
            `covering the whole sky`,
            `with often a dark appearance`,
            `from far away`,
            `in the distance`,
        ];
        lucyInTheSky = getRandomElement(lucyInTheSky);


        let clouds = [
            `${are} ${complexity} ${color} ${shape} ${lucyInTheSky}`,
        ];

        if (d20 <= 12) { // if it's dry add a chance for blue sky
            clouds.push('are abscent in the clear blue sky');
        }

        return `The clouds ${getRandomElement(clouds)}.`;
    }

    getClouds() {
        return this.clouds;
    }
}
