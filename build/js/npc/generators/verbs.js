import {getRandomElement} from "../races/factory/utility";

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
        const moment = [
            "when", "whenever", "every time", "in moments when",
        ];
        return moment[Math.floor(Math.random() * moment.length)];
    }

    static getCommunication() {
        const namings = [
            "is talking",  "is shouting", "speaks", "yells", "shouts", "talks",
            "voice raises ",  "articulates", "utters words",  "exclaims",
        ];
        return namings[Math.floor(Math.random() * namings.length)];
    }

    static getMeeting() {
        const synonym = [
            'meet', 'encounter', 'run into', 'come across', 'bump into', 'stumble upon',
            'cross paths with', 'make the acquaintance of', 'get to know', 'introduce oneself to',
            'make contact with', 'meet up with', 'face', 'find', 'greet',
            'interact with', 'mingle with', 'rub elbows with', 'see'
        ];
        return synonym[Math.floor(Math.random() * synonym.length)];
    }

    static getEstimation() {
        const synonym = [
            'approximately', 'roughly', 'around', 'close to', 'nearly', 'almost', 'about', 'circa', 'somewhere around',
            'in the neighborhood of', 'in the vicinity of', 'in the region of', 'something like',
            'more or less', 'practically', 'virtually', 'essentially', 'effectively', 'near to', 'bordering on'
        ];
        return synonym[Math.floor(Math.random() * synonym.length)];
    }

    static color(){
        const color = [
            'green','red','blue','purple','grey','black','white','yellow','pink','amber','cyan','gold','silver','iron',
            'copper','teal','stone','lime','emerald','indigo','violet','fuchsia','rose','brown',
        ];
        return getRandomElement(color);
    }
}

// Example usage:
// const observation = VerbsGenerator.getObservation();
// const newComplexity = VerbsGenerator.getComplexity();
// const newLength = VerbsGenerator.getLength();
// const newClasp = VerbsGenerator.holding();
