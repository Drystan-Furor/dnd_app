export function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

export function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRollOnTable(diceRoll, array) {
    const index = Math.min(diceRoll - 1, array.length - 1);
    if (index < array.length) {
        return getRandomElement(array)
    }
    return array[index];
}

export function shuffleArray(array) {
    // Create a copy of the original array to avoid modifying it
    const shuffledArray = [...array];

    // Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}
