export class Status {
    constructor(heshe, npcClass, dndrace) {
        this.rngOutfit(heshe, npcClass, dndrace);
    }

    rngOutfit(heshe, npcClass, dndrace) {
        if (dndrace !== 'Warforged') {
            const wealth = Math.floor(Math.random() * 100) + 1;
            let outfit;

            if (wealth >= 1 && wealth <= 15) { //15% homeless
                outfit = new Beggar(heshe, npcClass, dndrace);
            } else if (wealth >= 16 && wealth <= 40) { //24% poor
                outfit = new Poor(heshe, npcClass, dndrace);
            } else if (wealth >= 41 && wealth <= 70) { //29% moderate
                outfit = new Prosperous(heshe, npcClass, dndrace); // MODERATE
            } else if (wealth >= 71 && wealth <= 89) { //18% rich
                outfit = new Rich(heshe, npcClass, dndrace); //RICH
            } else if (wealth >= 90 && wealth <= 100) { //10% noble
                outfit = new Loaded(heshe, npcClass, dndrace); // FILTHY RICH
            } else {
                outfit = new Poor(heshe, npcClass, dndrace);
            }

            this.outfit = outfit.getOutfit();
            this.intro = outfit.getIntro();
        } else {
            this.outfit = '';
            this.intro = '';
        }
    }

    getOutfit() {
        return this.outfit;
    }

    getIntro() {
        return this.intro;
    }
}
