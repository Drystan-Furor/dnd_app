export class Hats {
    constructor(heShe) {
        this.hat = this.hasHat(heShe);
    }

    static hatMaterials() {
        const textiles = [
            "leather", "felt", "cotton", "wool", "straw", "linen", "knitted", "fur",
        ];
        return textiles[Math.floor(Math.random() * textiles.length)];
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

    static craftHat(heShe) {
        return `${heShe.charAt(0).toUpperCase() + heShe.slice(1)} is wearing ${this.craftHats()}. `;
    }

    hasHat(heShe) {
        const hatRoll = Math.floor(Math.random() * 20) + 1;
        if (hatRoll > 15) {
            return "";
        } else {
            return this.constructor.craftHat(heShe);
        }
    }

    getHat() {
        return this.hat;
    }
}
