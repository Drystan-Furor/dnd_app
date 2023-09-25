export class Hats {
    constructor(heshe) {
        this.hat = this.hasHat(heshe);
    }

    static hatMaterials() {
        const hattextiles = [
            "leather", "felt", "cotton", "wool", "straw", "linen", "knitted", "fur",
        ];
        return hattextiles[Math.floor(Math.random() * hattextiles.length)];
    }

    static hatTypes() {
        const hatTypes = [
            'cap', 'hat', 'beanie', 'hood', 'fedora', 'bowler', 'sombrero', 'beret',
            'skullcap', "tam o'shanter", 'fez', 'oesjanka', 'hood',
        ];
        return hatTypes[Math.floor(Math.random() * hatTypes.length)];
    }

    static craftHats() {
        const hats = [
            "a wimple, a piece of cloth worn over the head and around the face and neck",
            `a ${this.hatMaterials()} sugar loaf hat: a tallish, conical hat that resembles an inverted flower pot`,
            `a ${this.hatMaterials()} flat mortar board type hat, people associate with graduation`,
            `a chaperon, a ${this.hatMaterials()} hood that is sewn onto a cape`,
            `a ${this.hatMaterials()} hood grown with extra fabric and slightly longer than necessary`,
            `a tall ${this.hatMaterials()} conical hat worn tilted at the back of the head`,
            `a ${this.hatMaterials()} ${this.hatTypes()}`,
        ];
        return hats[Math.floor(Math.random() * hats.length)];
    }

    static craftHat(heshe) {
        return `${heshe.charAt(0).toUpperCase() + heshe.slice(1)} is wearing ${this.craftHats()}. `;
    }

    hasHat(heshe) {
        const hatRoll = Math.floor(Math.random() * 20) + 1;
        if (hatRoll > 15) {
            return "";
        } else {
            return this.constructor.craftHat(heshe);
        }
    }

    getHat() {
        return this.hat;
    }
}
