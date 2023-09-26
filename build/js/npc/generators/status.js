import {Commoner} from "../wealth/common";
import {Beggar} from "../wealth/beggar";
import {Poor} from "../wealth/poor";
import {Rich} from "../wealth/rich";
import {Bourgeoisie} from "../wealth/bourgoisie";

export class Status {
    constructor(heShe, npcClass, dndRace) {
        this.rngOutfit(heShe, npcClass, dndRace);
    }

    rngOutfit(heShe, npcClass, dndRace) {
        if (dndRace !== 'Warforged') {
            const wealth = Math.floor(Math.random() * 100) + 1;
            let outfit;

            if (wealth >= 1 && wealth <= 15) { //15% homeless
                outfit = new Beggar(heShe, npcClass, dndRace);
            } else if (wealth >= 16 && wealth <= 40) { //24% poor
                outfit = new Poor(heShe, npcClass, dndRace);
            } else if (wealth >= 41 && wealth <= 70) { //29% moderate
                outfit = new Commoner(heShe, npcClass, dndRace);
            } else if (wealth >= 71 && wealth <= 89) { //18% rich
                outfit = new Bourgeoisie(heShe, npcClass, dndRace);
            } else if (wealth >= 90 && wealth <= 100) { //10% noble
                outfit = new Rich(heShe, npcClass, dndRace);
            } else {
                outfit = new Poor(heShe, npcClass, dndRace);
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
