export class Verbs {
    static quality() {
        const qualities = ['cheap', 'affordable', 'quality', 'expensive quality'];
        return qualities[Math.floor(Math.random() * qualities.length)];
    }

    static getComplexity() {
        const complexities = ['clean', 'plain', 'straightforward', 'classic', 'simple', 'beautiful'];
        return complexities[Math.floor(Math.random() * complexities.length)];
    }

    static maintenance() {
        const maintenances = ['clean and slick', 'rusted', 'moldy', 'oxidated', 'clean', 'corroded', 'damaged', 'shining', 'smooth', 'big', 'dented', 'flawed', 'dirty', 'stained', 'filthy', 'greasy', 'begrimed', 'smudged', 'squalid', 'disheveled', 'grimey', 'well maintained', 'bloodstained', 'unkempt'];
        return maintenances[Math.floor(Math.random() * maintenances.length)];
    }

    static getObservation() {
        const observations = ['discern', 'see', 'clearly notice', 'cautiously observe','observe', 'simply spot', 'behold', 'distinguish from a distance', 'discern', 'glimpse', 'mark', 'catch a glimpse', 'catch sight', 'make out', 'take notice', 'survey', 'seize up', 'examine'];
        return observations[Math.floor(Math.random() * observations.length)];
    }

    static getIndicator() {
        const indicators = ['indicates', 'connotes', 'denotes', 'hints', 'implies', 'suggests', 'implies', 'symbolizes', 'specifies', 'reveals', 'proves', 'attests'];
        return indicators[Math.floor(Math.random() * indicators.length)];
    }

    static getLength() {
        const lengths = ['short', 'long', 'cape like', 'full', 'wide'];
        return lengths[Math.floor(Math.random() * lengths.length)];
    }

    static holding() {
        const clasping = ['clasps', 'clutches', 'clenches', 'holds', 'wears', 'is holding', 'is tightly squeezing', 'is caressing', 'is fiddling with', 'is clasping'];
        return clasping[Math.floor(Math.random() * clasping.length)];
    }

    static named() {
        const namings = ['named', 'renamed', 'call', 'refer to', 'dubbed', 'labeled', 'titled'];
        return namings[Math.floor(Math.random() * namings.length)];
    }

    static getMoment() {
        const namings = [
            "when", "whenever", "every time", "in moments when",
        ];
        return namings[Math.floor(Math.random() * namings.length)];
    }

    static getCommunication() {
        const namings = [
            "is talking",  "shouting", "speaks",  " yells",
            "raises his voice",  "articulates", "utters words",  "exclaims",
        ];
        return namings[Math.floor(Math.random() * namings.length)];
    }
}

// Example usage:
// const observation = VerbsGenerator.getObservation();
// const newComplexity = VerbsGenerator.getComplexity();
// const newLength = VerbsGenerator.getLength();
// const newClasp = VerbsGenerator.holding();
