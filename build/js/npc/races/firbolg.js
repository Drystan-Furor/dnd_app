import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {Elf} from "./elf";

export class Firbolg extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        const biography = new Elf(dndRace, genderNouns, age, parameters);
        this.lastname = parameters.lastname ? parameters.lastname : biography.getLastname();
        this.firstname = parameters.firstname ? parameters.firstname : biography.getFirstname();
        this.firstname = parameters.firstname ? parameters.firstname : this._nickname();
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _nickname() {
        const nickname = [
            'Bearkiller', 'Dawncaller', 'Fearless', 'Flintfinder', 'Horncarver',
            'Keeneye', 'Lonehunter', 'Longleaper', 'Rootsmasher', 'Skywatcher',
            'Steadyhand', 'Threadtwister', 'Twice-Orphaned', 'Twistedlimb',
            'Wordpainter',
        ];
        return nickname[Math.floor(Math.random() * nickname.length)];
    }

    _description(dndRace, new_npc) {
        return `${dndRace} don't really use names, the concept of it is peculiar to them. 
        They will take elven names when dealing with outsiders however, 
        and they'll also use nicknames they might be given by others. 
        Everything else in their lives is usually referred to by their actions. The ${dndRace} is nicknamed ${this.nickname}`;
    }


    static bodySizeReplacer() {
        const bodysizes = [
            "sort of typical giant-sized", "common giant sized",
            "characteristically large sized", "naturally large sized", "typical",
            "more or less standard sized", "moderately large sized", 'sizable',

            "large", "quite large", "very large", "really large",
            "slightly larger", "reasonably large", 'immense', 'enormous',
            "massive", "tall", 'big', 'hulking', 'towering', 'giant',
        ];
        return bodysizes[Math.floor(Math.random() * bodysizes.length)];
    }
}
setClassMapping('Firbolg', Firbolg);
