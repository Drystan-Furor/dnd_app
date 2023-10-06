import {getRandomElement} from "../races/factory/utility";

export class Race {
    constructor(parameters) {
        this.racesArray = Race.raceArray();
        this.dndRace = parameters.homebrew ? parameters.homebrew : parameters.races ? getRandomElement(parameters.races) : Race.randomRace(this.racesArray);
        this.heritage = Race.setHeritage(this.racesArray);
        this.variant = this.dndRace;
        this.intro = '';
        this.outfit = '';
    }

    static raceArray() {
        return [
            "Aarakocra", "Aasimar", "Autognome", "Bugbear", "Centaur", "Changeling", "Dragonborn", "Drow", "Druergar","Dwarf", "Elf",
            "Fairy",
            "Feral Tiefling", "Firbolg", "Genasi", "Gith", "Gnome", "Goblin", "Goliath", "Half-Elf", "Half Orc",
            "Halfling", "Harengon", "Hobgoblin", "Human", "Kender", "Khalastar", "Kenku", "Kobold", "Leonin", "Lizardfolk",
            "Locathah", "Loxodon", "Minotaur", "Orc", "Owlfolk",  "Satyr",
            "Shifter", "Simic Hybrid", "Tabaxi", "Tiefling", "Tortle", "Triton", "Vedalkan", "Verdan", "Warforged",
            "Yuan-Ti Pureblood"
        ];
    }

    static randomFromArray(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    static randomRace(array) {
        return Race.randomFromArray(array);
    }

    static setHeritage(array) {
        let heritage = Race.randomRace(array);
        const exceptions = ["Genasi", "Yuan-Ti Pureblood", "Simic Hybrid"];
        while (exceptions.includes(heritage)) {
            heritage = Race.randomRace(array);
        }
        return heritage;
    }

    static isRaceInRaceArray(dndRace) {
        return Race.raceArray().includes(dndRace);
    }


    getRace() {
        return this.dndRace;
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

    getOutfit() {
        return this.outfit;
    }

    getIntro() {
        return this.intro;
    }

    setOutfit(custom) {
        this.outfit = custom;
    }

    setIntro(custom) {
        this.intro = custom;
    }

}
