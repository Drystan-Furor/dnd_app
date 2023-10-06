import {classMapping, setClassMapping} from "../races/factory/classMapping";
import {getRandomElement, ucFirst} from "../races/factory/utility";

export class Body {
    constructor(dndRace, npc) {
        this.bodyType = this._bodyType(dndRace, npc);
        this.bodyShape = this._bodyShape(dndRace, npc);
        this.bodySize = this._bodySize(dndRace, npc);
        this.body = this._bodyBuilder(npc);
    }

    static bodyTypeDefault() {
        const bodyTypes = [
            "long and lean", "fat", "bulky", "muscular", "slender",
            "quite overweight", "with a delicate frame",
            "similar to a marathon runner", "stocky", "muscular, but also a bit fat",
            "obese", "athletic", "well defined muscled", "positivly ripped",
            "as broad as the side of a barn",
        ];
        return bodyTypes[Math.floor(Math.random() * bodyTypes.length)];
    }

    static bodyShapeDefault() {
        const bodyShapes = [
            "narrow shoulders and a narrow bust",
            "slim arms and a fairly defined waist",
            "hips larger than the bust", "a shelf-like appearance",
            "hips and bust that are nearly equal in size", "a well-defined waist",
            "large shoulders and a large bust",
            "a little more weight in the upper legs",
            "shoulder and hip measurements that are about the same",
        ];
        return bodyShapes[Math.floor(Math.random() * bodyShapes.length)];
    }

    static bodySizeDefault() {
        const bodySizes = [
            "small", "quite small", "very small", "really small",
            "slightly smaller", "rather small", "reasonably small",
            "tiny", "medium sized", "middle sized", "sort of typical sized",
            "common sized", "characteristically sized", "naturally common sized",
            "typical", "more or less standard sized", "moderately sized",
            "large", "quite large", "very large", "really large",
            "slightly larger", "reasonably large", "tall",
        ];
        return bodySizes[Math.floor(Math.random() * bodySizes.length)];
    }

    _bodyBuilder(genderNouns) {
        this.body = this._bodyString(genderNouns);
        return this.body;
    }

    _bodyString(genderNouns) {
        const manWoman = genderNouns.getManWoman();
        const heshe = genderNouns.getHeShe();
        const hisher = genderNouns.getHisHer();
        const gender = genderNouns.getGender();
        const string = [
            `Built ${this.bodyType}, ${heshe} has a ${this.bodySize} ${gender} body with ${this.bodyShape}`,
            `${ucFirst(heshe)} possesses a ${gender} body, ${this.bodyType} in build, characterized by a ${this.bodySize} ${this.bodyShape}`,
            `With a ${this.bodySize} ${gender} body, ${heshe} is ${this.bodyType} and exhibits ${this.bodyShape}`,
            `The ${gender} form of this ${this.bodySize} ${manWoman} is ${this.bodyType}, marked by ${this.bodyShape}`,
            `${ucFirst(heshe)} carries ${hisher} ${this.bodySize} ${gender} physique, ${this.bodyType} with ${this.bodyShape}`,
            `In terms of physique, ${heshe} is ${this.bodyType}, having a ${gender} body with ${this.bodySize} ${this.bodyShape}`,
            `The ${gender} structure of this ${this.bodySize} ${manWoman} is ${this.bodyType}, defined by ${this.bodyShape}`,
            `This ${this.bodySize} ${manWoman} has a ${gender} build, ${this.bodyType} and outlined by ${this.bodyShape}`,
            `Exhibiting a ${this.bodySize} ${gender} body, ${heshe} is structured ${this.bodyType} with ${this.bodyShape}`,
            `${ucFirst(heshe)} has a ${this.bodySize} ${gender} frame, built ${this.bodyType} and features ${this.bodyShape}`,
            `${ucFirst(hisher)} ${gender} body is ${this.bodySize} ${this.bodyType} and showcases ${this.bodyShape}`,
            `This ${manWoman}'s ${this.bodySize} ${gender} physique is ${this.bodyType}, highlighted by ${this.bodyShape}`,
            `With a ${this.bodySize} ${this.bodyType} build, ${heshe} presents a ${gender} body featuring ${this.bodyShape}`,
            `${ucFirst(heshe)}'s ${gender} form is ${this.bodyType}, distinguished by ${this.bodySize} ${this.bodyShape}`,
            `This ${this.bodySize} ${manWoman} exhibits a ${gender} body, ${this.bodyType} in structure, and is characterized by ${this.bodyShape}`,
            `The ${this.bodySize} ${gender} body of this ${manWoman} is ${this.bodyType} and is marked by ${this.bodyShape}`,
            `${ucFirst(hisher)} ${this.bodySize} physique is ${this.bodyType}, a representation of a ${gender} body, detailed with ${this.bodyShape}`,
            `In ${this.bodyType} form, ${heshe} displays a ${this.bodySize} ${gender} body, accentuated by ${this.bodyShape}`,
            `This ${manWoman} holds a ${gender} body, ${this.bodyType} in build, and is defined by ${this.bodySize} ${this.bodyShape}`,
            `${ucFirst(hisher)} ${gender} structure is ${this.bodySize}, ${this.bodyType} and is adorned with ${this.bodyShape}`,
        ];
        return string[Math.floor(Math.random() * string.length)];
    }

    getBodyType() {
        return this.bodyType;
    }

    getBodyShape() {
        return this.bodyShape;
    }

    getBodySize() {
        return this.bodySize;
    }

    getBody() {
        return this.body;
    }

    _bodySize(dndRace, genderNouns) {
        const ClassReference = classMapping[dndRace];
        if (ClassReference && typeof ClassReference.bodySizeReplacer === 'function') {
            return ClassReference.bodySizeReplacer(dndRace, genderNouns);
        }
        return Body.bodySizeDefault();
    }

    _bodyType(dndRace, genderNouns) {
        const ClassReference = classMapping[dndRace];
        if (ClassReference && typeof ClassReference.bodyTypeReplacer === 'function') {
            return ClassReference.bodyTypeReplacer(dndRace, genderNouns);
        }
        return Body.bodyTypeDefault();
    }

    _bodyShape(dndRace, genderNouns) {
        const ClassReference = classMapping[dndRace];
        if (ClassReference && typeof ClassReference.bodyShapeReplacer === 'function') {
            return ClassReference.bodyShapeReplacer(dndRace, genderNouns);
        }
        return Body.bodyShapeDefault();
    }

    static bodypart() {
        const bodypart = [
            'arms', 'legs', 'back', 'neck', 'shoulders', 'belly', 'hands', 'feet',
            'upper arms', 'upper legs', 'chest', 'torso', 'throat', 'head', 'face',
            'wrists', 'knees', 'elbows', 'ribcage',
        ];
        return getRandomElement(bodypart);
    }

}
