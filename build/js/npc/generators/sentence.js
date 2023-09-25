import {VerbsGenerator} from "./verbs";

export class SentenceGenerator {
    static observing() {
        const observations = [
            `At a glance you ${VerbsGenerator.getObservation()} the `,
            `At first sight you ${VerbsGenerator.getObservation()} the `,
            `At a gander you ${VerbsGenerator.getObservation()} the `,
            `In a flash you ${VerbsGenerator.getObservation()} the `,
            `In a fleeting look you ${VerbsGenerator.getObservation()} the `,
            `While checking, you ${VerbsGenerator.getObservation()} the `,
        ];

        return observations[Math.floor(Math.random() * observations.length)];
    }
}
