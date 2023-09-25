class Jewelry {
    constructor() {
        this.jewel = this.craftJewel();
    }

    static jewelryType() {
        const jewelrytypes = [
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
        return jewelrytypes[Math.floor(Math.random() * jewelrytypes.length)];
    }

    craftJewel() {
        return ` a ${MaterialGenerator.getMetalType()} ${this.constructor.jewelryType()} set with a ${MaterialGenerator.getGemstoneType()}`;
    }

    getJewel() {
        return this.jewel;
    }
}
