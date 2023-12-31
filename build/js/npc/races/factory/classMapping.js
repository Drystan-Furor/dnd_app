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
    Human:null,

    Aarakocra: null,
    Aasimar:null,
    Bugbear:null,
    Centaur:null,
    Changeling:null,
    Dragonborn:null,
    Drow:null,
    Druergar:null,
    Dwarf:null,
    Elf:null,
    Feraltiefling:null,

    Firbolg:null,
    Genasi:null,
    Gith:null,
    Gnome:null,
    Goblin:null,
    Goliath:null,
    Halfelf:null,
    Halfling:null,
    Halforc:null,
    Hobgoblin:null,

    Kenku:null,
    Khalastar:null,
    Kobold:null,
    Leonin:null,
    Lizardfolk:null,
    Loxodon:null,
    Minotaur:null,
    Orc:null,
    Owlfolk:null,
    Rabbitfolk:null,

    Satyr:null,
    Shifter:null,
    Simichybrid:null,
    Vedalkan:null,
    Tabaxi:null,
    Tiefling:null,
    Tortle:null,
    Triton:null,
    Warforged:null,
    Yuantipureblood:null,

    Seaelf:null,
    Kender:null,
    Fairy:null,
    Autognome:null,
    Giff:null,
    Hadozee:null,
    Plasmoid:null,
    Thrikreen:null,

    // ... other class mappings
};

export function setClassMapping(key, value) {
    classMapping[key] = value;
}

// add
// setClassMapping('Calishite', Calishite); on last line of Race scripts
// setClassMapping('', );