import {Belts} from "../clothing/accessoiries/belts";
import {Shoes} from "../clothing/accessoiries/shoes";
import {Hats} from "../clothing/accessoiries/hats";
export class Poor {
    constructor(genderNouns, npcClass, dndRace) {
        this.outfit = this.clothes(genderNouns, npcClass, dndRace);
        this.intro = this.intros();
    }

    static textiles() {
        const textiles = ['leather', 'linen', 'cotton'];
        return textiles[Math.floor(Math.random() * textiles.length)];
    }

    static outfits() {
        const outfits = ['tunic', 'robe', 'garment', "doublet"];
        return outfits[Math.floor(Math.random() * outfits.length)];
    }

    static clothing() {
        const clothes = [
            `${this.outfits()} made of ${this.textiles()}, hanging a bit loose,`,
            `hooded ${this.textiles()} cloak`,
            `functional ${this.textiles()} ${this.outfits()}`,
            `short skirted ${this.textiles()} tunic`,
            `set of simple ${this.textiles()} clothes`,
            `${this.textiles()} cote hardie, that buttons in the front to a low waist and is fitted to a ${this.textiles()} bodice,`,
            `${this.textiles()} ${this.outfits()} similar to the clothing of commoners but made of cheap materials with less dye,`,
            `${this.textiles()} apron`,
        ];
        return clothes[Math.floor(Math.random() * clothes.length)];
    }

    clothes(genderNouns, npcClass, dndRace) {
        const heShe = genderNouns.getHeShe();
        const belt = new Belts().getBelt();
        const hat = new Hats(heShe).getHat();
        const shoes = new Shoes(dndRace).getShoes();


        return `${heShe.charAt(0).toUpperCase() + heShe.slice(1)} wears a ${this.constructor.clothing()} and a ${belt}. ${shoes} ${hat}`;
    }

    intros() {
        const wealthinessTypes = [
            'who looks rather poor', 'who seems to be penniless', 'that looks quite impoverished',
            'who recently became bankrupt', ' looking poverty-stricken at best',
            'who looks underprivileged', 'who makes a down-and-out impression',
        ];
        return wealthinessTypes[Math.floor(Math.random() * wealthinessTypes.length)];
    }

    getOutfit() {
        return this.outfit;
    }

    getIntro() {
        return this.intro;
    }
}
