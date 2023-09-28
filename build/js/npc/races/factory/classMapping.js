// classMapping.js

export const classMapping = {
    Calishite: null,
    Chondathan: null,
    Damaran:null,
    Illuskan:null,
    Mulan:null,
    Rashemi:null,
    Shou:null,
    Tethyrian:null,
    Turami:null,

    Aarakocra: null,
    Aasimar:null,
    Bugbear:null,
    Centaur:null,
    Changeling:null,
    Dragonborn:null,
    // ... other class mappings

};

export function setClassMapping(key, value) {
    classMapping[key] = value;
}

// add
// setClassMapping('Calishite', Calishite); on last line of Race scripts
// setClassMapping('', );