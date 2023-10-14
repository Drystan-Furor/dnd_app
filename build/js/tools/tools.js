export function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

export function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}