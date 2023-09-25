export class Rich {
    constructor(heshe, npcClass, dndrace) {
        this.outfit = this.clothes(heshe, npcClass, dndrace);
        this.intro = this.intros();
    }

    static textiles() {
        const textiles = ["silk", "velvet", 'brocade silk', 'damask silk', 'brocade velvet', 'damask velvet'];
        return textiles[Math.floor(Math.random() * textiles.length)];
    }

    static outfits() {
        const outfits = [
            'costume', 'gown', "doublet", 'cote hardie',
            'houppelande, a beautiful full length robe like garment',
        ];
        return outfits[Math.floor(Math.random() * outfits.length)];
    }

    static clothing() {
        const clothes = [
            `${VerbsGenerator.getComplexity()} ${this.textiles()} ${this.outfits()}, fit closely to the body, with ${OutfitDetailsGenerator.outfitDetails()}. It has ${OutfitDetailsGenerator.richDetails()}. The outfit has ${OutfitDetailsGenerator.sleeves()}`,
            `${VerbsGenerator.getComplexity()} ${this.textiles()} hooded cloak, with ${OutfitDetailsGenerator.outfitDetails()}. It has ${OutfitDetailsGenerator.richDetails()}.`,
            `Burgundian style ${VerbsGenerator.getComplexity()} ${this.textiles()} ${this.outfits()}, with ${OutfitDetailsGenerator.outfitDetails()}. It has ${OutfitDetailsGenerator.richDetails()}.`,
            `clerical ${VerbsGenerator.getComplexity()} ${this.textiles()} robes, with ${OutfitDetailsGenerator.outfitDetails()}. It has ${OutfitDetailsGenerator.richDetails()}.`,
            `elaborately printed ${this.outfits()} in ${VerbsGenerator.getComplexity()} ${this.textiles()}, with ${OutfitDetailsGenerator.outfitDetails()}. It has ${OutfitDetailsGenerator.richDetails()}.`,
            `${VerbsGenerator.getComplexity()} ${this.textiles()} ${this.outfits()}, closely following the lines of the body from the shoulder to below the waist with ${OutfitDetailsGenerator.outfitDetails()}. It has ${OutfitDetailsGenerator.richDetails()}.`,
        ];
        return clothes[Math.floor(Math.random() * clothes.length)];
    }

    intros() {
        const wealthinessTypes = [
            'who is unmistakenly of noble heritage', 'who looks extremely wealthy', 'who looks to have money to burn',
            'who seems to be lousy with wealth', 'that looks opulent and roaring', 'who is wealthy and flourishing',
            'looking truly halcyon and lucky', 'who looks positively thriving', 'looking aristocratic and dignified',
            'who seems to be a member of a noble family', 'who makes a real aristocratic impression',
        ];
        return wealthinessTypes[Math.floor(Math.random() * wealthinessTypes.length)] + ". ";
    }

    clothes(heshe, npcClass, dndrace) {
        const belt = new Belts().getBelt();
        const hat = new Hats(heshe).getHat();
        const shoes = new Shoes(dndrace).getShoes();

        return `${heshe.charAt(0).toUpperCase() + heshe.slice(1)} wears a ${this.constructor.clothing()} and a pristine ${belt}. ${SentenceGenerator.observing()} ${npcClass} wears ${Jewelry.craftJewel()} and a matching ${Rings.craftRing()}${hat} ${shoes}`;
    }

    getOutfit() {
        return this.outfit;
    }

    getIntro() {
        return this.intro;
    }
}
