import {Verbs} from "./verbs";
import {getRandomElement} from "../races/factory/utility";

export class Sentence {
    static observing() {
        const observations = [
            `At a glance you ${Verbs.getObservation()} the `,
            `At first sight you ${Verbs.getObservation()} the `,
            `At a gander you ${Verbs.getObservation()} the `,
            `In a flash you ${Verbs.getObservation()} the `,
            `In a fleeting look you ${Verbs.getObservation()} the `,
            `While checking, you ${Verbs.getObservation()} the `,
        ];

        return observations[Math.floor(Math.random() * observations.length)];
    }

    static subject(heShe, gender, dndRace) {
        const subject = [
            " the  " + dndRace,
            " this " + gender,
            heShe,
            //this.nickname,
        ];
        return subject[Math.floor(Math.random() * subject.length)];
    }

    // You know, sometimes there's a fairy, well, she's the fairy for her time and place. Far out!
    static _BigLebowskiQuote(race, genderNouns) {
        let quote = [
            `string  ${race}`,
            `You know, sometimes there's a ${race}, well, ${genderNouns.getHeShe()}'s the ${race} for ${genderNouns.getHisHer()}
             time and place`,
            ]
        return getRandomElement(quote);
    }

}
