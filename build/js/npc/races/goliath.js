import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Goliath extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : this._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : this._firstname();
        this.nickname = parameters.nickname ? parameters.nickname : this._nickname();
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname() {
        const surnames = [
            'Anakalathai', 'Elanithino', 'Gathakanathi', 'Kalagiano',
            'Katho-Olavi', 'Kolae-Gileana', 'Ogolakanu',
            'Thuliaga', 'Thunukalathi', 'Vaimei-Laga',
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname() {
        let firstname = [
            'Aukan', 'Eglath', 'Gae-Al', 'Gauthak', 'Ilikan', 'Keothi',
            'Kuori', 'Lo-Kag', 'Manneo', 'Maveith', 'Nalla', 'Orilo',
            'Paavu', 'Pethani', 'Thalai', 'Thotham', 'Uthal', 'Vaunea', 'Vimak',
        ];
        return firstname[Math.floor(Math.random() * firstname.length)];
    }

    _nickname() {
        const nickname = [
            'Bearkiller', 'Dawncaller', 'Fearless', 'Flintfinder', 'Horncarver',
            'Keeneye', 'Lonehunter', 'Longleaper', 'Rootsmasher', 'Skywatcher',
            'Steadyhand', 'Threadtwister', 'Twice-Orphaned', 'Twistedlimb',
            'Wordpainter',
        ];
        return nickname[Math.floor(Math.random() * nickname.length)];
    }

    _description(dndRace, genderNouns) {
        return `Every ${dndRace} has a birth name assigned by the newborn’s mother and father: ${this.nickname}.
        A nickname assigned by the tribal chief: ${this.firstname}, and a family or clan name: ${this.lastname}.
        ${this.firstname}’s nickname is a description that can change on the whim of ${genderNouns.getHisHer()} 
        chieftain or tribal elder. It refers to a notable deed, either a success or failure, 
        committed by ${this.nickname}. ${dndRace}s present all three names when identifying themselves, 
        in the order of birth name, nickname, and clan name. 
        In casual conversation ${genderNouns.getHeShe()} is called ${this.firstname}`;
    }

    static bodySizeReplacer() {
        const bodysizes = [
            "sort of typical giant-sized", "common giant sized",
            "characteristically large sized", "naturally large sized", "typical",
            "more or less standard sized", "moderately large sized", 'sizable',

            "large", "quite large", "very large", "really large",
            "slightly larger", "reasonably large", 'immense', 'enormous',
            "massive", "tall", 'big', 'hulking', 'towering', 'giant',
        ];
        return bodysizes[Math.floor(Math.random() * bodysizes.length)];
    }
}

setClassMapping('Goliath', Goliath);
