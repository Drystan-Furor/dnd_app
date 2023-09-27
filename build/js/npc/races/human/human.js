import {Name} from "../../properties/name";

export class Human extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        const race = Human.randomHumanType();
        const biography = new window[race](dndRace, genderNouns);
        this.lastname = biography.getLastname();
        this.firstname = biography.getFirstname(genderNouns);
        this.nickname = biography.getNickname();
        this.description = biography.getDescription(dndRace, genderNouns);
        dndRace.setRace(`${race} ${dndRace.getRace()}`);
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
