export class Teeth {
    /**
     * Constructs and selects a random value string for teeth
     * @param {string} dndrace - The race
     * @param {string} newNpc - The gender
     */
    constructor(dndrace, newNpc) {
        this.teeth = this._teethShape(dndrace, newNpc);
    }

    /**
     * Array of DEFAULT types
     * @return {string} - The teeth type
     */
    static _teethTypes() {
        const teethTypes = [
            'rotten ', 'shiny white', 'yellow', 'buck', 'quite large',
            'rather small', 'yellow and grey', 'crooked', 'canine whiskers',
        ];
        const teethType = teethTypes[Math.floor(Math.random() * teethTypes.length)];
        return teethType;
    }

    /**
     * Array of DEFAULT sentence-part
     * @return {string} - The default teeth
     */
    static defaultTeeth() {
        // Assuming MaterialGenerator and Verbsgenerator are other classes with the mentioned static methods
        const dentalwork = [
            "is missing a tooth",
            "is missing several teeth",
            `has a ${MaterialGenerator.getMetalType()} tooth`,
            `has several ${MaterialGenerator.getMetalType()} teeth`,
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
            `has fake teeth, like a prosthetic made of ${Verbsgenerator.quality()} ${MaterialGenerator.getMetalType()}`,
        ];
        const teeth = dentalwork[Math.floor(Math.random() * dentalwork.length)];
        return teeth;
    }

    /**
     * Build or choose specific array. Select random value string
     * @param {string} dndrace - The race
     * @param {string} newNpc - The gender
     * @return {string} - The teeth
     */
    static _teethShape(dndrace, newNpc) {
        // Assuming teethReplacer is a method in some other class named by the value of dndrace
        const raceClass = window[dndrace.toLowerCase()];
        if (raceClass && typeof raceClass.teethReplacer === 'function') {
            return raceClass.teethReplacer(dndrace, newNpc);
        } else {
            return Teeth.defaultTeeth();
        }
    }

    /**
     * Getter
     * @return {string} - The teeth
     */
    getTeeth() {
        return this.teeth;
    }
}


