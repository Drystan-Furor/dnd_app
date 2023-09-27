import {Name} from "../properties/name";
import {Material} from "../generators/materials";
import {Eyes} from "../profile/eyes";
import {filterClassMapping, getRandomElement} from "./factory/utility";
import {classMapping, setClassMapping} from "./factory/classMapping";

export class Aasimar extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        dndRace = this.isFallen(dndRace);
        this.lastname = this._lastname(dndRace, genderNouns);
        this.firstname = this._firstname(genderNouns);
        this.nickname = this._nickname();
        this.description = this._description(dndRace, genderNouns, this.nickname);
    }

    isFallen(dndRace) {
        const isFallen = Math.floor(Math.random() * 20) + 1;
        if (isFallen > 10) {
            dndRace = "Fallen Aasimar";
            return dndRace;
        } else {
            return dndRace;
        }
    }

    _lastname(dndRace, genderNouns) {
        this.lastname = this._randomLastname(dndRace, genderNouns);
        return this.lastname;
    }

    _randomLastname(dndRace, genderNouns) {
        const humanRaces = ['Calishite', 'Chondathan', 'Damaran', 'Illuskan', 'Mulan', 'Rashemi', 'Tethyrian', 'Turami'];
        const randomRace = getRandomElement(humanRaces);
        console.log(randomRace); // This will log one of the races randomly

        const requiredClasses = ['Calishite', 'Chondathan', 'Damaran', 'Illuskan', 'Mulan', 'Rashemi', 'Tethyrian', 'Turami'];
        const filteredMapping = filterClassMapping(classMapping, requiredClasses);
        const ClassReference = filteredMapping[randomRace];
        if (!ClassReference && typeof ClassReference.constructor === 'function') {
            return false;
        }
        return new ClassReference(randomRace, genderNouns).getLastname();
    }


    _firstname(genderNouns) {
        let firstname;
        if (genderNouns.getGender() === 'male') {
            const malenames = ['Aritian', 'Beltin', 'Cernan', 'Cronwier', 'Eran', 'Ilamin', 'Maudril', 'Okrin', 'Parant', 'Tural', 'Wyran', 'Zaigan', 'Hunin', 'Kyor'];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (genderNouns.getGender() === 'female') {
            const femalenames = ['Arken', 'Arsinoe', 'Davina', 'Drinma', 'Imesah', 'Masozi', 'Nijena', 'Niramour', 'Ondrea', 'Rhialla', 'Valtyra', 'Yasha Nydoorin', 'Reani'];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        this.firstname = firstname;
        return firstname;
    }

    _nickname() {
        this.nickname = this.firstname;
        return this.nickname;
    }

    _description(dndRace, genderNouns, nickname) {
        let description;
        if (dndRace === "Fallen Aasimar") {
            description = Aasimar.descriptionFallen(dndRace, genderNouns, nickname);
        } else {
            description = Aasimar.descriptionDefault(genderNouns, nickname);
        }
        return description;
    }

    static descriptionFallen(dndRace, genderNouns, nickname) {
        const hairShines = ['black', 'white'];
        const hairShine = hairShines[Math.floor(Math.random() * hairShines.length)];
        const metalType = Material.getMetalType();
        return `The ${dndRace} ${nickname} bears the mark of ${genderNouns.getHisHer()} 
        fall through many different physical features, like ${genderNouns.getHisHer()} 
        hair has a ${metalType} shine but withered to ${hairShine} 
        and a very gaunt, almost corpse-like appearance.`;
    }

    static descriptionDefault(genderNouns, nickname) {
        const metalType = Material.getMetalType();
        return `${nickname} bears the mark of ${genderNouns.getHisHer()} 
        celestial touch through many different physical 
        features, like ${genderNouns.getHisHer()} hair has a ${metalType} 
        shine to it with accents of ${Material.getMetalType()}.`;
    }

    static eyesReplacer(dndRace, genderNouns) {
        const eyes = `${Material.getJewelTone()} toned ${Eyes.canSee()}`;
        if (dndRace === 'Fallen Aasimar') {
            const shine = ['dark', 'pale muted'];
            const eyeLight = shine[Math.floor(Math.random() * shine.length)];
            return `${eyeLight} ${Material.getJewelTone()} toned ${Eyes.canSee()}, 
            and dark spots forming under ${genderNouns.getHisHer()} eyes`;
        }
        return eyes;
    }
}
setClassMapping('Aasimar', Aasimar);
