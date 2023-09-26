import {Belts} from "../clothing/accessoiries/belts";
import {Shoes} from "../clothing/accessoiries/shoes";
import {Sentence} from "../generators/sentence";
import {Verbs} from "../generators/verbs";
import {Rings} from "../clothing/accessoiries/rings";
import {Jewelry} from "../clothing/accessoiries/jewelry";
import {Hats} from "../clothing/accessoiries/hats";
export class Commoner  {
    constructor(heShe, npcClass, dndRace) {
        this.outfit = this.clothes(heShe, npcClass, dndRace);
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
            `${Verbs.getComplexity()} hooded ${this.textiles()} cloak`,
            `${Verbs.getComplexity()} ${this.textiles()} houppelande, a full length robe like garment`,
            `${this.outfits()}, that buttons in the front to a low waist, and is fitted to a ${Verbs.getComplexity()} bodice,`,
            `${this.outfits()}, fit closely to the body`,
            `Burgundian style ${this.outfits()}`,
            `${Verbs.getComplexity()} ${this.textiles()} ${this.outfits()}`,
            `${this.outfits()} of ${Verbs.getComplexity()} ${this.textiles()}`,
            `${this.textiles()} ${this.outfits()} similar to the clothing of the elite but made of cheaper materials with less dye and ornamentation`,
        ];
        return clothes[Math.floor(Math.random() * clothes.length)];
    }

    clothes(heShe, npcClass, dndRace) {
        const belt = new Belts().getBelt();
        const hat = new Hats(heShe).getHat();
        const shoes = new Shoes(dndRace).getShoes();

        const jewels = [
            Rings.constructor().getRing(),
            Jewelry.constructor().getJewel(),
        ];
        const jewel = jewels[Math.floor(Math.random() * jewels.length)];

        return `${heShe.charAt(0).toUpperCase() + heShe.slice(1)} wears a ${this.constructor.clothing()} and a ${belt}. ${Sentence.observing()} ${npcClass} wears ${jewel}. ${shoes} ${hat}`;
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
