export class Beggar {
    constructor(heshe, npcClass, dndrace) {
        this.outfit = this.clothes(heshe, npcClass, dndrace);
        this.intro = this.intros();
    }

    static textiles() {
        const textiles = ['hemp', 'coarse wool'];
        return textiles[Math.floor(Math.random() * textiles.length)];
    }

    static outfits() {
        const outfits = ['short skirted tunic', 'robe', 'garment', 'cotton bag', 'rags', 'hooded cloak'];
        return outfits[Math.floor(Math.random() * outfits.length)];
    }

    static outfitDetails() {
        const detailoutfits = ["hanging loose and undefined,", "torn on the edges,", "full of holes and cuts,"];
        return detailoutfits[Math.floor(Math.random() * detailoutfits.length)];
    }

    static weathered() {
        const weathered = ['partially torn', 'damaged and dirty', 'stained', 'functional', ''];
        return weathered[Math.floor(Math.random() * weathered.length)];
    }

    clothes(heshe, npcClass, dndrace) {
        const belt = new Belts().getBelt();
        const shoes = new Shoes(dndrace).getShoes();

        return `${heshe.charAt(0).toUpperCase() + heshe.slice(1)} wears a ${this.constructor.weathered()} ${this.constructor.outfits()} made of ${this.constructor.textiles()}, ${this.constructor.outfitDetails()} and a ${this.constructor.weathered()} ${belt}. ${SentenceGenerator.observing()} ${npcClass} ${VerbsGenerator.holding()} ${Rings.craftRing()}. ${shoes}`;
    }

    static intros() {
        const wealthinessTypes = [
            'who seems to be homeless', 'that looks like a beggar',
            'who looks wretched', 'that looks really squalid',
            'a genuine panhandler', 'a scrounger at best',
            'who is regarded as a deadbeat', 'who looks like a real hobo',
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
