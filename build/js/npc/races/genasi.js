import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {getRandomElement} from "./factory/utility";
import {Elf} from "./elf";

export class Genasi extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        const origin = dndRace;
        const biography = new Elf(dndRace, genderNouns, age, parameters);
        this._variation(dndRace);
        this.lastname = parameters.lastname ? parameters.lastname : biography.getLastname();
        this.nickname = parameters.nickname ? parameters.nickname : this._nickname(origin.getVariant());
        this.firstname = this._firstname(origin.getVariant());
        if (!parameters.homebrew) {
            dndRace.setRace(origin.getRace());
        }
        this._variation(dndRace);
        this.description = this._description(dndRace, genderNouns);
    }


    _variation(dndRace) {
        const variant = [
            "Fire Genasi", "Air Genasi", "Earth Genasi", "Water Genasi",
        ];
        dndRace.setVariant(getRandomElement(variant));
    }

    _firstname(variant) {
        return " the " + variant + " " + this.nickname;
    }

    _nickname(variant) {
        let nickname;
        switch (variant) {
            case "Fire Genasi":
                const fireSurnames = [
                    'Flame', 'Ember', 'Blaze', 'Flare', 'Flash', 'Wildfire',
                    'Inferno', 'Bonfire', 'Tinder', 'Scorching', 'Burn',
                ];
                nickname = fireSurnames[Math.floor(Math.random() * fireSurnames.length)];
                break;
            case "Air Genasi":
                const airSurnames = [
                    'Breath', 'Breeze', 'Draft', 'Sky', 'Empyrean', 'Azure',
                    'Whiff', 'Zephyr', 'Waft', 'Heavens', 'Ozone', 'Welkin',
                ];
                nickname = airSurnames[Math.floor(Math.random() * airSurnames.length)];
                break;
            case "Earth Genasi":
                const earthSurnames = [
                    'Onyx', 'Dust', 'Terra', 'Terrane', 'Mold', 'Clay', 'Raven',
                    'Obsidian', 'Sable', 'Slate', 'Coal', 'Stygian', 'Melanoid',
                ];
                nickname = earthSurnames[Math.floor(Math.random() * earthSurnames.length)];
                break;
            case "Water Genasi":
                const waterSurnames = [
                    'Wave', 'Crest', 'Flood', 'Stream', 'Surge', 'Tide', 'Deluge',
                    'Niagara', 'Torrent', 'Downpour', 'Drencher', 'Flow', 'Aqua-pura',
                ];
                nickname = waterSurnames[Math.floor(Math.random() * waterSurnames.length)];
                break;
            default:
                console.warn(`SubRace ${variant} does not have a nickname list.`);
        }
        return nickname;
    }

    _description(dndRace, genderNouns) {
        return `However ${genderNouns.getHeShe()} assumed the distinctive name ${this.nickname} to capture 
        ${genderNouns.getHisHer()} ${dndRace.getRace()} heritage as ${this.nickname} is born and raised 
        in a ${dndRace.getHeritage()} society`;
    }
}

setClassMapping('Genasi', Genasi);
