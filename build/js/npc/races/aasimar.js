import {Name} from "../properties/name";
import {Material} from "../generators/materials";
import {Eyes} from "../profile/eyes";

export class Aasimar extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = this._lastname();
        this.firstname = this._firstname(genderNouns);
        this.nickname = this._nickname();
        this.description = this._description(dndRace, genderNouns, this.nickname);
    }

    isFallen(dndRace) {
        const isFallen = Math.floor(Math.random() * 20) + 1;
        if (isFallen > 10) {
            dndRace.setRace("Fallen Aasimar");
            return dndRace;
        } else {
            return dndRace;
        }
    }

    _lastname() {
        // get a new Race of type Human and get that lastname
        const surnames = ['classCall']; // placeholder
        const lastname = surnames[Math.floor(Math.random() * surnames.length)];
        this.lastname = lastname;
        return lastname;
    }

    _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = ['Aritian', 'Beltin', 'Cernan', 'Cronwier', 'Eran', 'Ilamin', 'Maudril', 'Okrin', 'Parant', 'Tural', 'Wyran', 'Zaigan', 'Hunin', 'Kyor'];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
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
        if (dndRace.getRace() === "Fallen Aasimar") {
            description = Aasimar.descriptionFallen(dndRace, genderNouns, nickname);
        } else {
            description = Aasimar.descriptionDefault(genderNouns, nickname);
        }
        return description;
    }

    static descriptionFallen(dndrace, new_npc, nickname) {
        const hairShines = ['black', 'white'];
        const hairShine = hairShines[Math.floor(Math.random() * hairShines.length)];
        const metalType = Material.getMetalType();
        return `The ${dndrace.getRace()} ${nickname} bears the mark of ${new_npc.getHisHer()} 
        fall through many different physical features, like ${new_npc.getHisHer()} 
        hair has a ${metalType} shine but withered to ${hairShine} 
        and a very gaunt, almost corpse-like appearance.`;
    }

    static descriptionDefault(new_npc, nickname) {
        const metalType = MaterialGenerator.getMetalType();
        return `${nickname} bears the mark of ${new_npc.getHisHer()} 
        celestial touch through many different physical 
        features, like ${new_npc.getHisHer()} hair has a ${metalType} 
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
