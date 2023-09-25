export class Commoner  {
    constructor(heshe, npcClass, dndrace) {
        this.outfit = this.clothes(heshe, npcClass, dndrace);
        this.intro = this.intros();
    }

    static textiles() {
        const textiles = ["silk", "velvet", 'cotton', 'linen'];
        return textiles[Math.floor(Math.random() * textiles.length)];
    }

    static outfits() {
        const outfits = ['tunic', 'robe', 'gown', "doublet", 'cote hardie'];
        return outfits[Math.floor(Math.random() * outfits.length)];
    }

    static clothing() {
        const clothes = [
            `${VerbsGenerator.getComplexity()} hooded ${this.textiles()} cloak`,
            `${VerbsGenerator.getComplexity()} ${this.textiles()} houppelande, a full length robe like garment`,
            `${this.outfits()}, that buttons in the front to a low waist, and is fitted to a ${VerbsGenerator.getComplexity()} bodice,`,
            `${this.outfits()}, fit closely to the body`,
            `Burgundian style ${this.outfits()}`,
            `${VerbsGenerator.getComplexity()} ${this.textiles()} ${this.outfits()}`,
            `${this.outfits()} of ${VerbsGenerator.getComplexity()} ${this.textiles()}`,
            `${this.textiles()} ${this.outfits()} similar to the clothing of the elite but made of cheaper materials with less dye and ornamentation`,
        ];
        return clothes[Math.floor(Math.random() * clothes.length)];
    }

    clothes(heshe, npcClass, dndrace) {
        const belt = new Belts().getBelt();
        const hat = new Hats(heshe).getHat();
        const shoes = new Shoes(dndrace).getShoes();

        const jewels = [
            Rings.craftRing(),
            Jewelry.craftJewel(),
        ];
        const jewel = jewels[Math.floor(Math.random() * jewels.length)];

        return `${heshe.charAt(0).toUpperCase() + heshe.slice(1)} wears a ${this.constructor.clothing()} and a ${belt}. ${SentenceGenerator.observing()} ${npcClass} wears ${jewel}. ${shoes} ${hat}`;
    }

    intros() {
        const wealthinessTypes = [
            'who seems to have some coin', 'who looks rather comfortable', 'who seems to be fortunate',
            'that looks a bit prospering', 'who recently became upper-class', 'looking affluent at best',
            'who looks privileged', 'who seems to be doing well',
        ];
        return wealthinessTypes[Math.floor(Math.random() * wealthinessTypes.length)] + ". ";
    }

    getOutfit() {
        return this.outfit;
    }

    getIntro() {
        return this.intro;
    }
}
