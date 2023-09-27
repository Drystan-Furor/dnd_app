import {Name} from "../properties/name";

export class Aarakocra extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = this._lastname();
        this.firstname = this._firstname();
        this.nickname = this.lastname;
        this.description = this._description(dndRace, genderNouns);
    }

    _lastname() {
        const surnames = [
            'Aera', 'Aial', 'Aur', 'Deekek', 'Errk', 'Heehk', 'Ikki', 'Kleeck',
            'Oorr', 'Ouss', 'Quaf', 'Quierk', 'Salleek', 'Urreek', 'Zeed',
        ];
        this.lastname = surnames[Math.floor(Math.random() * surnames.length)];
        return this.lastname;
    }

    _firstname() {
        this.firstname = "";
        return this.firstname;
    }

    _nickname() {
        this.nickname = this.lastname;
        return this.nickname;
    }

    _description(dndRace, genderNouns) {
        return `From below, the ${dndRace.getRace()} look much like a large bird. 
        Only when ${this.lastname} descends to roost on a branch or walk across the 
        ground does ${genderNouns.getHisHer()} humanoid appearance reveal itself.`;
    }
}
