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

    _bodySize(dndrace, new_npc) {
        // if (dndrace.bodySizeReplacer) {
        //     this.bodySize = dndrace.bodySizeReplacer(dndrace, new_npc);
        // } else {
        //     this.bodySize = Body.bodySizeDefault();
        // }
        this.bodySize = Body.bodySizeDefault();
        return this.bodySize;
    }

    _bodyType(dndrace, new_npc) {
        // if (dndrace.bodyTypeReplacer) {
        //     this.bodyType = dndrace.bodyTypeReplacer(dndrace, new_npc);
        // } else {
        //     this.bodyType = Body.bodyTypeDefault();
        // }
        this.bodyType = Body.bodyTypeDefault();
        return this.bodyType;
    }

    _bodyShape(dndrace, new_npc) {
        // if (dndrace.bodyShapeReplacer) {
        //     this.bodyShape = dndrace.bodyShapeReplacer(dndrace, new_npc);
        // } else {
        //     this.bodyShape = Body.bodyShapeDefault();
        // }
        this.bodyShape = Body.bodyShapeDefault();
        return this.bodyShape;
    }
}
