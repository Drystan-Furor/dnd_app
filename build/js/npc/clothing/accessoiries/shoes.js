import {classMapping} from "../../races/factory/classMapping";

export class Shoes {

    constructor(dndRace) {
        this.shoes = this.theRightShoes(dndRace);
    }

    static materials() {
        const shoeMaterials = [
            'goat hide', 'cow hide', 'leather', 'felt',
        ];
        return shoeMaterials[Math.floor(Math.random() * shoeMaterials.length)];
    }

    static types() {
        const shoeTypes = [
            'simple shoes',
            'heavy boots',
            'shoes',
            'boots',
            'long, pointy shoes',
            'sandals',
            "botes (boots) held on with straps",
            "clogs with wood soles",
            "rope soled shoes",
            "covered basts (made of tree bark)"
        ];
        return shoeTypes[Math.floor(Math.random() * shoeTypes.length)];
    }

    static wearing() {
        const feetCovers = [
            'Feet covered with',
            'Feet protected by',
            'Feet fitted with',
        ];
        return feetCovers[Math.floor(Math.random() * feetCovers.length)];
    }

    static shoes() {
        return `${this.wearing()} ${this.types()} made of ${this.materials()}. `;
    }

    getShoes() {
        return this.shoes;
    }

    theRightShoes(dndRace, genderNouns) {
        const ClassReference = classMapping[dndRace.getRace()];
        if (ClassReference && typeof ClassReference.shoesReplacer === 'function') {
            return ClassReference.shoesReplacer(dndRace, genderNouns);
        }
        return this.constructor.shoes();
    }
}
