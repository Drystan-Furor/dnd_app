import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {Firbolg} from "./firbolg";
import {Race} from "../properties/race";

export class Genasi extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.heritage = this._heritage();
        const subRace = this._subClass();
        const biography = new Firbolg(dndRace, genderNouns);
        this.lastname = biography.getLastname();
        this.firstname = this._firstname(genderNouns);
        this.nickname = this._nickname(subRace);
        this.description = this._description(dndRace, genderNouns);
    }

    _heritage() {
        let heritage = Race.raceArray();
        if (heritage === 'Genasi') {
            heritage = Race.raceArray();
        }
        return heritage
    }
    _subClass() {
        const genasiRaces = [
            "Fire Genasi", "Air Genasi", "Earth Genasi", "Water Genasi",
        ];
        return genasiRaces[Math.floor(Math.random() * genasiRaces.length)];
    }


    _firstname(subRace)
    {
        return " the " + subRace + " " + this.nickname;
    }

    _nickname(subRace) {
        let nickname;
        switch (subRace) {
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
                console.warn(`SubRace ${subRace} does not have a nickname list.`);
        }
        return nickname;
    }

    _description(dndRace, genderNouns) {
        return `However ${genderNouns.getHeShe()} assumed the distinctive name ${this.nickname} to capture 
        ${genderNouns.getHisHer()} Genasi heritage as ${this.nickname} is born and raised in a ${this.heritage} society.`;
    }

}
setClassMapping('Genasi', Genasi);
