import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Lizardfolk extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = this._lastname();
        this.firstname = this._firstname();
        this.nickname = this.lastname;
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname() {
        const surnames = [
            'Bogstalker', 'Bogshadow', 'Deadmarsh', 'Birdhunter', 'Beastkiller',
            'Hardscale', 'Deadswamp', 'Poisondusk', 'Shadowscale', 'Longspear',
            'Swordfang', 'Spearmouth', 'Daggermaw', 'Swamprunner', 'Marshtrekker',
            'Redmountain', 'Graypond', 'Redfang', 'Ironflank', 'Stoneflesh',
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname() {
        const names = [
            'Daecheraess', 'Buthratriass', 'Ark', 'Baok', 'Trechuss', 'Vegyk',
            'Maarkitho', 'Baax', 'Iskia', 'Usli', 'Muty', 'Trurgyv', 'Naskuch',
            'Mertarrark', 'Morassuch', 'Vithotrysk', 'Taart', 'Edresk', 'Mellurt',
            'Lopy', 'Nathre', 'Erhten', 'Vithretrasj', 'Oltugnos', 'Osk', 'The',
            'Jhortaa', 'Den', 'Traocheth', 'Nepisj', 'Sitru', 'Kiguard', 'Uthragat',
            'Nudhokra', 'Dechustysj', 'Sark', 'Vir', 'Merdis', 'Eslant', 'Throtird',
            'Berdex', 'Volakrard', 'Redassirk', 'Moshitrua', 'Toxh',
        ];
        return names[Math.floor(Math.random() * names.length)];
    }

    _description(dndRace) {
        return `${dndRace} are primitive reptilian humanoids that usually lurk in swamps and jungles`;
    }
}

setClassMapping('Lizardfolk', Lizardfolk);
