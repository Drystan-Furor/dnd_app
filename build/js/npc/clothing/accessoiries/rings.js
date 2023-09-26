import {Material} from "../../generators/materials";

export class Rings {
    constructor() {
        this.ring = Rings.craftRing();
    }

    getRing() {
        return this.ring;
    }

    static getComplexity() {
        const complexity = [
            'a', 'a',
            'a mundane',
            'a plain',
            'an intricate',
            'an uncomplicated',
            'a simple',
            'a complex',
            'a sophisticated',
            'a baroque',
            'a refined',
        ];
        return complexity[Math.floor(Math.random() * complexity.length)];
    }

    static craftRing() {
        const ringRoll = Math.floor(Math.random() * 20) + 1;
        let ring;
        if (ringRoll > 15) {
            ring = `${this.getComplexity()} ${Material.getMetalType()} signet`;
        } else {
            ring = `${this.getComplexity()} ${Material.getMetalType()}`;
        }
        ring = `${ring} ring set with a ${Material.getGemstoneType()}`;
        return ring;
    }
}
