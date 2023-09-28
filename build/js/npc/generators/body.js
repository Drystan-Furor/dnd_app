import {classMapping, setClassMapping} from "../races/factory/classMapping";

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

    _bodyBuilder(new_npc) {
        const manWoman = new_npc.getManWoman();
        const heshe = new_npc.getHeShe();
        const hisher = new_npc.getHisHer();
        const gender = new_npc.getGender();

        this.body = `Built ${this.bodyType}, ${heshe} has a ${gender} body with ${this.bodyShape}`;
        return this.body;
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

}
