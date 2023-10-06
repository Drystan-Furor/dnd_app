import {Name} from "../../properties/name";
import {classMapping, setClassMapping} from "../factory/classMapping";

export class Human extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        dndRace.setVariant(Human.randomHumanType());
        let variant = dndRace.getVariant();
        dndRace.setRace(variant);
        variant = classMapping[variant];
        const biography = new variant(dndRace, genderNouns, age, parameters);
        this.lastname = biography.getLastname();
        this.firstname = biography.getFirstname(genderNouns);
        this.nickname = biography.getNickname();
        this.description = biography.getDescription(dndRace, genderNouns);
    }

    static randomHumanType() {
        const human = [
            "Calishite",
            "Chondathan",
            "Damaran",
            "Illuskan",
            "Mulan",
            "Rashemi",
            "Shou",
            "Tethyrian",
            "Turami",
        ];
        return human[Math.floor(Math.random() * human.length)];
    }
}
setClassMapping('Human', Human);
