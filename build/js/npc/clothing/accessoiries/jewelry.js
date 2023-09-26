import {Material} from "../../generators/materials";

export class Jewelry {
    constructor() {
        this.jewel = Jewelry.craftJewel();
    }

    static jewelryType() {
        const type = [
            'necklace',
            'necklace with a locket',
            'necklace with a gemstone pendant',
            'chain',
            'ring',
            'locket',
            'bracelet',
            'spiral bracelet',
            'arm cuff',
            'upper arm bracelet',
            'arm band',
            'armlet',
            'bangle',
        ];
        return type[Math.floor(Math.random() * type.length)];
    }

    static craftJewel() {
        return ` a ${Material.getMetalType()} ${this.constructor.jewelryType()} set with a ${Material.getGemstoneType()}`;
    }

    getJewel() {
        return this.jewel;
    }
}
