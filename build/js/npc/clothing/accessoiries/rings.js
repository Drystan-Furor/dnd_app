export class Rings {
    constructor() {
        this.ring = this.constructor.craftRing();
    }

    getRing() {
        return this.ring;
    }

    static getComplexity() {
        const ringcomplexities = [
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
        return ringcomplexities[Math.floor(Math.random() * ringcomplexities.length)];
    }

    static craftRing() {
        const ringRoll = Math.floor(Math.random() * 20) + 1;
        let ring;
        if (ringRoll > 15) {
            ring = `${this.getComplexity()} ${MaterialGenerator.getMetalType()} signet`;
        } else {
            ring = `${this.getComplexity()} ${MaterialGenerator.getMetalType()}`;
        }
        ring = `${ring} ring set with a ${MaterialGenerator.getGemstoneType()}`;
        return ring;
    }
}
