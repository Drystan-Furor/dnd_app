import {Belts} from "../clothing/accessoiries/belts";
import {Shoes} from "../clothing/accessoiries/shoes";
import {Sentence} from "../generators/sentence";
import {Verbs} from "../generators/verbs";
import {Details} from "../clothing/accessoiries/details";
import {Hats} from "../clothing/accessoiries/hats";
import {Jewelry} from "../clothing/accessoiries/jewelry";

export class Bourgeoisie {
    constructor(heShe, npcClass, dndRace) {
        this.outfit = this.clothes(heShe, npcClass, dndRace);
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
            `${Verbs.getComplexity()} hooded ${this.textiles()} cloak with ${Details.outfitDetails()} and it has ${Details.richDetails()}`,
            `${Verbs.getComplexity()} ${this.textiles()} houppelande, a full length robe like garment with ${Details.outfitDetails()} and it has ${Details.richDetails()}`,
            `${this.outfits()}, that buttons in the front to a low waist, and is fitted to a ${Verbs.getComplexity()} bodice,`,
            `${this.outfits()}, fit closely to the body with ${Details.outfitDetails()} and it has ${Details.richDetails()}`,
            `Burgundian style ${this.outfits()} with ${Details.outfitDetails()} and it has ${Details.richDetails()}`,
            `${Verbs.getComplexity()} ${this.textiles()} ${this.outfits()}`,
            `${this.outfits()} of ${Verbs.getComplexity()} ${this.textiles()}`,
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

    clothes(heShe, npcClass, dndRace) {
        const belt = new Belts().getBelt();
        const hat = new Hats(heShe).getHat();
        const shoes = new Shoes(dndRace).getShoes();

        return `${heShe.charAt(0).toUpperCase() + heShe.slice(1)} wears a ${this.constructor.clothing()} and a ${belt}. 
        ${Sentence.observing()} ${npcClass} wears ${Jewelry.constructor().getJewel()}. ${hat} ${shoes}`;
    }

    getOutfit() {
        return this.outfit;
    }

    getIntro() {
        return this.intro;
    }
}
