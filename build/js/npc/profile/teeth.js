import {Material} from "../generators/materials";
import {Verbs} from "../generators/verbs";

export class Teeth {
    constructor(dndrace, newNpc) {
        this.teeth = Teeth._teethShape(dndrace, newNpc);
    }

    static _teethTypes() {
        const types = [
            'rotten ', 'shiny white', 'yellow', 'buck', 'quite large',
            'rather small', 'yellow and grey', 'crooked', 'canine whiskers',
        ];
        return types[Math.floor(Math.random() * types.length)];
    }

    static defaultTeeth() {
        const teeth = [
            "is missing a tooth",
            "is missing several teeth",
            `has a ${Material.getMetalType()} tooth`,
            `has several ${Material.getMetalType()} teeth`,
            `has ${Teeth._teethTypes()} teeth`,
            "has no teeth at all",
            "has good dentals",
            "has yellow teeth, but all there",
            "has fairly good dentals",
            `has ${Teeth._teethTypes()} teeth that could use some bracers`,
            "has no regular teeth but canine whiskers",
            "has good dentals",
            "has rather bad dentals",
            "has sharp edged teeth, as if they are trimmed or filed",
            `has fake teeth, like a prosthetic made of ${Verbs.quality()} ${Material.getMetalType()}`,
        ];
        return teeth[Math.floor(Math.random() * teeth.length)];
    }
    static _teethShape(dndrace, newNpc) {
        // Assuming teethReplacer is a method in some other class named by the value of dndrace
        // const raceClass = window[dndrace.toLowerCase()];
        // if (raceClass && typeof raceClass.teethReplacer === 'function') {
        //     return raceClass.teethReplacer(dndrace, newNpc);
        // } else {
        //     return Teeth.defaultTeeth();
        // }
        return Teeth.defaultTeeth();
    }

    getTeeth() {
        return this.teeth;
    }
}


