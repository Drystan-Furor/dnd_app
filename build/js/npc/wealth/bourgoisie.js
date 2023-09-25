export class Bourgoisie {
    constructor(heshe, npcClass, dndrace) {
        this.outfit = this.clothes(heshe, npcClass, dndrace);
        this.intro = this.intros();
    }

    static textiles() {
        const textiles = ["silk", "velvet", 'cotton', 'linen'];
        return textiles[Math.floor(Math.random() * textiles.length)];
    }

    static outfits() {
        const outfits = ['tunic', 'robe', 'costume', 'gown', "doublet", 'cote hardie'];
        return outfits[Math.floor(Math.random() * outfits.length)];
    }

    static clothing() {
        const clothes = [
            `${VerbsGenerator.getComplexity()} hooded ${this.textiles()} cloak with ${OutfitDetailsGenerator.outfitDetails()} and it has ${OutfitDetailsGenerator.richDetails()}`,
            `${VerbsGenerator.getComplexity()} ${this.textiles()} houppelande, a full length robe like garment with ${OutfitDetailsGenerator.outfitDetails()} and it has ${OutfitDetailsGenerator.richDetails()}`,
            `${this.outfits()}, that buttons in the front to a low waist, and is fitted to a ${VerbsGenerator.getComplexity()} bodice,`,
            `${this.outfits()}, fit closely to the body with ${OutfitDetailsGenerator.outfitDetails()} and it has ${OutfitDetailsGenerator.richDetails()}`,
            `Burgundian style ${this.outfits()} with ${OutfitDetailsGenerator.outfitDetails()} and it has ${OutfitDetailsGenerator.richDetails()}`,
            `${VerbsGenerator.getComplexity()} ${this.textiles()} ${this.outfits()}`,
            `${this.outfits()} of ${VerbsGenerator.getComplexity()} ${this.textiles()}`,
            `${this.textiles()} ${this.outfits()} similar to the clothing of the elite but made of cheaper materials with less dye and ornamentation`,
        ];
        return clothes[Math.floor(Math.random() * clothes.length)];
    }

    intros() {
        const intros = [
            'who looks quite wealthy', 'who looks very comfortable', 'who seems to be blooming',
            'that looks "in the money"', 'who recently became flourishing', 'looking halcyon at best',
            'who looks well-off', 'who seems to be on top of the heap',
        ];
        return intros[Math.floor(Math.random() * intros.length)] + ". ";
    }

    clothes(heshe, npcClass, dndrace) {
        const belt = new Belts().getBelt();
        const hat = new Hats(heshe).getHat();
        const shoes = new Shoes(dndrace).getShoes();

        return `${heshe.charAt(0).toUpperCase() + heshe.slice(1)} wears a ${this.constructor.clothing()} and a ${belt}. ${SentenceGenerator.observing()} ${npcClass} wears ${Jewelry.craftJewel()}. ${hat} ${shoes}`;
    }

    getOutfit() {
        return this.outfit;
    }

    getIntro() {
        return this.intro;
    }
}
