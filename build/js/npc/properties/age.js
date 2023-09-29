import {Race} from "./race";
import {classMapping} from "../races/factory/classMapping";

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export class Age extends Race {
    constructor(race) {
        super(); // Call the constructor of the parent class (Race)
        this.age = this._defineAge(race);
    }

    setAge(age) {
        this.age = age;
    }

    getAge() {
        return this.age;
    }

     defaultAge(dndrace) {
        return this.defineDefaultAge(dndrace);
    }



    static defineDefaultAge(dndrace) {
        let age;
        switch (dndrace) {
            case "Elf":
                age = rand(14, 750);
                break;
            case "Kenku":
            case "Lizardfolk":
            case "Tabaxi":
            case "Goblin":
                age = rand(14, 60);
                break;
            case "Dwarf":
            case "Firbolg":
                age = rand(14, 350);
                break;
            case "Human":
            case "Yuan Ti Pureblood":
            case "Goliath":
                age = rand(14, 90);
                break;
            case "Tiefling":
            case "Gith":
            case "Changeling":
                age = rand(14, 100);
                break;
            case "Aarakocra":
            case "Warforged":
                age = rand(3, 30);
                break;
            case "Tortle":
            case "Orc":
                age = rand(12, 50);
                break;
            case "Aasimar":
                age = rand(14, 160);
                break;
            case "Kobold":
            case "Genasi":
                age = rand(14, 120);
                break;
            case "Halfling":
            case "Verdan":
                age = rand(14, 250);
                break;
            case "Orc of Exandria":
            case "Orc of Ebberon":
            case "Half Orc":
                age = rand(14, 75);
                break;
            case "Gnome":
            case "Loxodon":
                age = rand(14, 425);
                break;
            case "Vedalkan":
                age = rand(14, 500);
                break;
            default:
                age = rand(14, 80);
                break;
        }
        return age;
    }

    _defineAge(race, genderNouns) {
        const ClassReference = classMapping[race];
        if (ClassReference && typeof ClassReference.ageReplacer === 'function') {
            return ClassReference.ageReplacer(race, genderNouns);
        }
        return Age.defineDefaultAge(race);
    }
}
