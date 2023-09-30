export class Race {
    constructor() {
        //this.dndrace = Homebrew.setHomebrew(); // Assuming Homebrew is another class or object
        this.racesArray = Race.raceArray();

        this.dndrace = Race.randomRace(this.racesArray);
        this.heritage = Race.setHeritage(this.racesArray);
        this.variant = this.dndRace;
        // this.racesArray = Race._updateRaceArray(this.dndrace, this.racesBaseArray);
    }

    static raceArray() {
        return [
            "Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling",
            "Half Orc", "Human", "Tiefling", "Orc of Exandria", "Leonin",
            "Satyr", "Aarakocra", "Genasi", "Goliath", "Aasimar", "Bugbear",
            "Firbolg", "Goblin", "Hobgoblin", "Kenku", "Kobold", "Lizardfolk",
            "Orc", "Tabaxi", "Triton", "Yuan-Ti Pureblood", "Feral Tiefling",
            "Tortle", "Khalastar", "Changeling", "Orc of Eberron", "Shifter",
            "Warforged", "Gith", "Centaur", "Loxodon", "Minotaur",
            "Simic Hybrid", "Vedalkan", "Verdan", "Locathah", "Owlfolk",
            "Rabbitfolk",
        ];
    }

    // static _updateRaceArray(dndrace, array) {
    //     if (dndrace.toLowerCase() === "drow") {
    //         array.push("Drow");
    //         return array;
    //     }
    //     return array;
    // }

    static randomFromArray(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    static randomRace(array) {
        return Race.randomFromArray(array);
    }

    static setHeritage(array) {
        let heritage = Race.randomFromArray(array);
        const exceptions = ["Genasi", "Yuan-Ti Pureblood", "Simic Hybrid"];
        while (exceptions.includes(heritage)) {
            heritage = Race.randomFromArray(array);
        }
        return heritage;
    }

    static isRaceInRaceArray(dndrace) {
        return Race.raceArray().includes(dndrace);
    }



    getRace() {
        return this.dndrace;
    }

    getHeritage() {
        return this.heritage;
    }

    getVariant() {
        return this.variant;
    }

    getRaceArray() {
        return this.racesArray;
    }

    setRace(dndRace) {
        this.dndRace = dndRace;
    }

    setHeritage(heritage) {
        this.heritage = heritage;
    }

    setVariant(variant) {
        this.variant = variant;
    }
}


