import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {Firbolg} from "./firbolg";
import {Race} from "../properties/race";
import {getRandomElement} from "./factory/utility";

export class Genasi extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this._variation(dndRace);
        const biography = new Firbolg(dndRace, genderNouns);
        this.lastname = biography.getLastname();
        this.firstname = this._firstname(dndRace.getVariant());
        this.nickname = this._nickname(dndRace.getVariant());
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _variation(dndRace) {
        const variant = [
            "Fire Genasi", "Air Genasi", "Earth Genasi", "Water Genasi",
        ];
        dndRace.setVariant(getRandomElement(variant));
    }

    _firstname(variant)
    {
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
        ${genderNouns.getHisHer()} ${dndRace.getHeritage()} heritage as ${this.nickname} is born and raised 
        in a ${this.heritage} society`;
    }
}
setClassMapping('Genasi', Genasi);