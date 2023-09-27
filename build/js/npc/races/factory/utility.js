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