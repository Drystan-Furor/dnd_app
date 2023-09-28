import {classMapping} from "./classMapping";

export function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

export function filterClassMapping(mapping, keys) {
    return Object.keys(mapping)
        .filter(key => keys.includes(key))
        .reduce((obj, key) => {
            obj[key] = mapping[key];
            return obj;
        }, {});
}

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

export function ucFirst(inputString) {
    if(!inputString || typeof inputString !== 'string') {
        console.error('Invalid input: A valid string is required');
        return '';
    }
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

