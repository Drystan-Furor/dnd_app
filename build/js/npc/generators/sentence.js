import {Verbs} from "./verbs";

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
}
