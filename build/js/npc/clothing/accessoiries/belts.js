import {Material} from "../../generators/materials";

export class Belts {
    constructor() {
        this.belt = Belts.belt();
    }

    static beltItem() {
        const item = [
            `${Math.floor(Math.random() * 7) + 3} small bottles`,
            `${Math.floor(Math.random() * 5) + 2} throwing daggers`,
            `${Math.floor(Math.random() * 9) + 4} throwing darts`,
            `${Math.floor(Math.random() * 4) + 2} vials with red liquid`,
            `${Math.floor(Math.random() * 4) + 2} small pouches`,
            `${Math.floor(Math.random() * 31) + 10} feet of rope`,
            'a book', 'a purse', 'a large tome', 'a small knife',
            'a sash', 'some lockpicks', 'an Abacus', 'a crowbar',
            'a waterskin', 'a hooded lantern', "carpenter's tools",
            'a cylindrical leather case', 'a grappling hook', "a healer's kit",
            'a magnifying glass', 'a leather-bound tome',
            'a spyglass', 'a dangling censer', 'a drinking horn',
            'an iron flask', 'a boomerang', 'ten pouches',
        ];
        return item[Math.floor(Math.random() * item.length)];
    }

    static beltMaterial() {
        const material = [
            'cloth', 'cowhide leather', 'full-grain calfskin leather',
            'braided leather', 'tooled leather', 'suede', 'rope',
            'studded leather',
        ];
        return material[Math.floor(Math.random() * material.length)];
    }

    static beltFashion() {
        const fashion = [
            'embroidered', 'plain', 'smooth', 'simple',
            'traditional', 'common',
        ];
        return fashion[Math.floor(Math.random() * fashion.length)];
    }

    static belt() {
        const item1 = this.beltItem();
        let item2 = this.beltItem();
        let item3 = this.beltItem();

        while (item1 === item2 || item3 === item2) {
            item2 = this.beltItem();
        }

        while (item3 === item1 || item3 === item2) {
            item3 = this.beltItem();
        }

        const belts = [
            `${this.beltFashion()} ${this.beltMaterial()} belt with a ${Material.getMetalType()} buckle`,
            `${Material.getMetalType()} buckled ${this.beltFashion()} ${this.beltMaterial()} belt`,
            `${this.beltFashion()} ${this.beltMaterial()} belt with ${this.beltItem()} strapped to it`,
            `${this.beltFashion()} ${this.beltMaterial()} belt with ${item1} and ${item2} strapped to it`,
            `${this.beltFashion()} ${this.beltMaterial()} belt used to hold ${item1}, ${item2} and ${item3}`,
            `${this.beltFashion()} ${this.beltMaterial()} belt with ${this.beltItem()} strapped to it and another ${this.beltFashion()} ${this.beltMaterial()} belt holding ${this.beltItem()}`,
            `${this.beltFashion()} ${this.beltMaterial()} bandolier with ${item1}, ${item2} and ${item3} attached to it`,
            `${this.beltFashion()} ${this.beltMaterial()} belt holding ${this.beltItem()} and a ${this.beltFashion()} ${this.beltMaterial()} bandolier with a ${Material.getMetalType()} buckle holding ${item1} and ${item2}`,
        ];

        return belts[Math.floor(Math.random() * belts.length)];
    }

    getBelt() {
        return this.belt;
    }
}
