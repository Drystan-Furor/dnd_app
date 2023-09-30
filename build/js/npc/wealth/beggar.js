import {Belts} from "../clothing/accessoiries/belts";
import {Shoes} from "../clothing/accessoiries/shoes";
import {Sentence} from "../generators/sentence";
import {Verbs} from "../generators/verbs";
import {Rings as Ring, Rings} from "../clothing/accessoiries/rings";

export class Beggar {
    constructor(genderNouns, npcClass, dndRace) {
        this.outfit = this.clothes(genderNouns, npcClass, dndRace);
        this.intro = Beggar.intro();
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
        const detail = ["hanging loose and undefined,", "torn on the edges,", "full of holes and cuts,"];
        return detail[Math.floor(Math.random() * detail.length)];
    }

    static weathered() {
        const weathered = ['partially torn', 'damaged and dirty', 'stained', 'functional', ''];
        return weathered[Math.floor(Math.random() * weathered.length)];
    }

    clothes(genderNouns, npcClass, dndRace) {
        const belt = new Belts().getBelt();
        const shoes = new Shoes(dndRace).getShoes();
        const ring = new Ring().getRing();
        const heShe = genderNouns.getHeShe();

        return `${heShe.charAt(0).toUpperCase() + heShe.slice(1)} wears a ${this.constructor.weathered()} ${this.constructor.outfits()} made of ${this.constructor.textiles()}, ${this.constructor.outfitDetails()} and a ${this.constructor.weathered()} ${belt}. ${Sentence.observing()} ${npcClass} ${Verbs.holding()} ${ring}. ${shoes}`;
    }

    static intro() {
        const string = [
            'who seems to be homeless', 'that looks like a beggar',
            'who looks wretched', 'that looks really squalid',
            'a genuine panhandler', 'a scrounger at best',
            'who is regarded as a deadbeat', 'who looks like a real hobo',
        ];
        return string[Math.floor(Math.random() * string.length)];
    }

    getOutfit() {
        return this.outfit;
    }

    getIntro() {
        return this.intro;
    }
}
