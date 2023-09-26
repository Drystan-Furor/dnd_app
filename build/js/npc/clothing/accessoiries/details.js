import {Verbs} from "../../generators/verbs";

export class Details {

    static outfitDetails() {
        const clothingDetails = [
            "a separate and fuller skirt sewn to the body",
            "a loose blouse that can be tightly laced",
            "an overcoat",
            "a garnache, a long cloak,",
            "a bodice sewn to a skirt",
            "the fabric falling in folds into a bell shape",
            "a low cut V neck that shows a piece of contrasting fabric underneath",
            "a Gothic style influence, a look that accentuates slenderness and an elongated form",
            "a vertical color difference with a split vertical dividing line in the center of the body",
            "a light linen shift underneath,",
            "luxurious fabrics", "a luxurious trim",
            "beautiful prints and vibrant colors",
            "edges of the outer garments decorated with dagging, edged with loose pieces of fabric that resembled leaves",
            "the highest quality textiles",
        ];
        return clothingDetails[Math.floor(Math.random() * clothingDetails.length)];
    }

    static patterns() {
        const patterns = [
            'woven in',
            'embroided',
            'printed on the fabric',
        ];
        return patterns[Math.floor(Math.random() * patterns.length)];
    }

    static linings() {
        const linings = [
            "both warmth and style",
            "warmth",
            "style",
        ];
        return linings[Math.floor(Math.random() * linings.length)];
    }

    static richDetails() {
        const richdetails = [
            "designs featuring gimmicky or quirky elements",
            `fur lining thats increasing ${this.linings()}`,
            "interwoven golden thread for a shimmering effect",
            `ornate and wildly ostentatious designs ${this.patterns()}`,
            `patterns and designs ${this.patterns()}`,
            `bureaucratic sigils of office ${this.patterns()}`,
        ];
        return richdetails[Math.floor(Math.random() * richdetails.length)];
    }

    static sleeves() {
        const sleeves = [
            `${Verbs.getLength()} sleeves widened toward a bell shape`,
            `a high collar and ${Verbs.getLength()} sleeves`,
            "full sleeves tightened at the wrist",
            `${Verbs.getLength()} sleeves that end at the elbow`,
            "no sleeves",
            `${Verbs.getLength()} sleeves`,
            "slashings in the sleeves that show the under tunic",
        ];
        return sleeves[Math.floor(Math.random() * sleeves.length)];
    }
}

