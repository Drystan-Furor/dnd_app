import {Material} from "../generators/materials";
import {Verbs} from "../generators/verbs";

export class Teeth {
    constructor(dndRace, genderNouns) {
        this.teeth = Teeth._teethShape(dndRace, genderNouns);
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

    static typeBeak() {
        const color = [
            'shiny white', 'yellow', 'quite large',
            'rather small', 'yellow and grey', 'crooked',
            'lead', 'tin', 'copper', 'steel', 'cast-iron',
            'iron', 'metal',
        ];
        const colorType = color[Math.floor(Math.random() * color.length)];
        const metalType = Material.getMetalType();
        const quality = Verbs.quality();

        const typeBeak = [
            `has a ${metalType} beak`,
            "has a hard horny tissue at the tip of the beak",
            `has a ${colorType} shield-shaped structure on the tip of its beak`,
            `has a ${colorType} shield-shaped structure on its beak tip, which spans the entire width of the beak`,
            `has a ${colorType} shield-shaped structure on its beak, which is bent at the tip to form a hook`,
            `has a ${teethType} shield-shaped structure on its beak tip, which spans the entire width of the beak and bent at the tip to form a hook`,
            `has a fake colorType, like a prosthetic made of ${quality} ${metalType}`,
        ];
        return typeBeak[Math.floor(Math.random() * typeBeak.length)];
    }

    static _teethShape(dndRace, genderNouns) {
        if (dndRace === 'Aarakocra') {
            return Teeth.typeBeak(dndRace, genderNouns);
        }
        return Teeth.defaultTeeth();
    }

    getTeeth() {
        return this.teeth;
    }
}


