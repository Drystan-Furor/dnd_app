export class Belts {
    constructor() {
        this.belt = this.belt();
    }

    static beltitem() {
        const beltitems = [
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
        return beltitems[Math.floor(Math.random() * beltitems.length)];
    }

    static beltmaterial() {
        const beltmaterial = [
            'cloth', 'cowhide leather', 'full-grain calfskin leather',
            'braided leather', 'tooled leather', 'suede', 'rope',
            'studded leather',
        ];
        return beltmaterial[Math.floor(Math.random() * beltmaterial.length)];
    }

    static beltFashion() {
        const beltfashion = [
            'embroidered', 'plain', 'smooth', 'simple',
            'traditional', 'common',
        ];
        return beltfashion[Math.floor(Math.random() * beltfashion.length)];
    }

    static belt() {
        const item1 = this.beltitem();
        let item2 = this.beltitem();
        let item3 = this.beltitem();

        while (item1 === item2 || item3 === item2) {
            item2 = this.beltitem();
        }

        while (item3 === item1 || item3 === item2) {
            item3 = this.beltitem();
        }

        const belts = [
            `${this.beltFashion()} ${this.beltmaterial()} belt with a ${MaterialGenerator.getMetalType()} buckle`,
            `${MaterialGenerator.getMetalType()} buckled ${this.beltFashion()} ${this.beltmaterial()} belt`,
            `${this.beltFashion()} ${this.beltmaterial()} belt with ${this.beltitem()} strapped to it`,
            `${this.beltFashion()} ${this.beltmaterial()} belt with ${item1} and ${item2} strapped to it`,
            `${this.beltFashion()} ${this.beltmaterial()} belt used to hold ${item1}, ${item2} and ${item3}`,
            `${this.beltFashion()} ${this.beltmaterial()} belt with ${this.beltitem()} strapped to it and another ${this.beltFashion()} ${this.beltmaterial()} belt holding ${this.beltitem()}`,
            `${this.beltFashion()} ${this.beltmaterial()} bandolier with ${item1}, ${item2} and ${item3} attached to it`,
            `${this.beltFashion()} ${this.beltmaterial()} belt holding ${this.beltitem()} and a ${this.beltFashion()} ${this.beltmaterial()} bandolier with a ${MaterialGenerator.getMetalType()} buckle holding ${item1} and ${item2}`,
        ];

        return belts[Math.floor(Math.random() * belts.length)];
    }

    getBelt() {
        return this.belt;
    }
}
