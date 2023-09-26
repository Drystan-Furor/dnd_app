import {Belts} from "../clothing/accessoiries/belts";
import {Shoes} from "../clothing/accessoiries/shoes";
import {Sentence} from "../generators/sentence";
import {Verbs} from "../generators/verbs";
import {Rings} from "../clothing/accessoiries/rings";
import {Details} from "../clothing/accessoiries/details";
import {Hats} from "../clothing/accessoiries/hats";
import {Jewelry} from "../clothing/accessoiries/jewelry";
export class Rich {
    constructor(heShe, npcClass, dndRace) {
        this.outfit = this.clothes(heShe, npcClass, dndRace);
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
            `${Verbs.getComplexity()} ${this.textiles()} ${this.outfits()}, fit closely to the body, with ${Details.outfitDetails()}. It has ${Details.richDetails()}. The outfit has ${Details.sleeves()}`,
            `${Verbs.getComplexity()} ${this.textiles()} hooded cloak, with ${Details.outfitDetails()}. It has ${Details.richDetails()}.`,
            `Burgundian style ${Verbs.getComplexity()} ${this.textiles()} ${this.outfits()}, with ${Details.outfitDetails()}. It has ${Details.richDetails()}.`,
            `clerical ${Verbs.getComplexity()} ${this.textiles()} robes, with ${Details.outfitDetails()}. It has ${Details.richDetails()}.`,
            `elaborately printed ${this.outfits()} in ${Verbs.getComplexity()} ${this.textiles()}, with ${Details.outfitDetails()}. It has ${Details.richDetails()}.`,
            `${Verbs.getComplexity()} ${this.textiles()} ${this.outfits()}, closely following the lines of the body from the shoulder to below the waist with ${Details.outfitDetails()}. It has ${Details.richDetails()}.`,
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
        return wealthinessTypes[Math.floor(Math.random() * wealthinessTypes.length)];
    }

    clothes(heShe, npcClass, dndRace) {
        const belt = new Belts().getBelt();
        const hat = new Hats(heShe).getHat();
        const shoes = new Shoes(dndRace).getShoes();

        return `${heShe.charAt(0).toUpperCase() + heShe.slice(1)} wears a ${this.constructor.clothing()} and a pristine ${belt}. ${Sentence.observing()} ${npcClass} wears ${Jewelry.constructor().getJewel()} and a matching ${Rings.craftRing()}${hat} ${shoes}`;
    }

    getOutfit() {
        return this.outfit;
    }

    getIntro() {
        return this.intro;
    }
}
