import {Commoner} from "../wealth/common";
import {Beggar} from "../wealth/beggar";
import {Poor} from "../wealth/poor";
import {Rich} from "../wealth/rich";
import {Bourgeoisie} from "../wealth/bourgoisie";

export class Status {
    constructor(genderNouns, npcClass, dndRace) {
        this.rngOutfit(genderNouns, npcClass, dndRace);
    }

    rngOutfit(genderNouns, npcClass, dndRace) {
        if (dndRace.getRace() === 'Warforged') {
            this.intro = dndRace.getIntro();
            this.outfit = dndRace.getOutfit();
            return true;
        }

        const wealth = Math.floor(Math.random() * 100) + 1;
        let outfit;
        if (wealth >= 1 && wealth <= 15) { //15% homeless
            outfit = new Beggar(genderNouns, npcClass, dndRace);
        } else if (wealth >= 16 && wealth <= 40) { //24% poor
            outfit = new Poor(genderNouns, npcClass, dndRace);
        } else if (wealth >= 41 && wealth <= 70) { //29% moderate
            outfit = new Commoner(genderNouns, npcClass, dndRace);
        } else if (wealth >= 71 && wealth <= 89) { //18% rich
            outfit = new Bourgeoisie(genderNouns, npcClass, dndRace);
        } else if (wealth >= 90 && wealth <= 100) { //10% noble
            outfit = new Rich(genderNouns, npcClass, dndRace);
        } else {
            outfit = new Poor(genderNouns, npcClass, dndRace);
        }
        this.outfit = outfit.getOutfit();
        this.intro = outfit.getIntro();
    }

    getOutfit() {
        return this.outfit;
    }

    getIntro() {
        return this.intro;
    }
}
