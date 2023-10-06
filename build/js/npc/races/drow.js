import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Drow extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : this._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : this.firstname = this._firstname(genderNouns);
        this.nickname = parameters.nickname ? parameters.nickname : null;
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname() {
        const surnames = [
            'Duskryn', "Druu'giir", 'Hunzrin', "Ixit'shii", 'Higure',
            "Ignin'rl", 'Zolond', 'Nurindyn', 'Milithor', 'Takandoys',
            "T'orgh", ' Despana', 'Symryvvin', 'Ousstyl', 'Godeep', 'Nurbonnis',
            'Freth', 'Pharn', 'Auvryndar', 'Hekar', 'Maivert', 'Coloara',
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(new_npc) {
        let firstname;
        if (new_npc.getGender() === 'male') {
            const malenames = [
                'Abban', 'Alur', 'Araj', 'Avinsin', 'Bol', 'Brorn', 'Dobluth', 'Duk-tak', 'Duvall',
                'Elgg', 'Elgghinn', 'Elgg-hor', 'Faern', 'Honglath', 'Jabbuk', "Khal'abbil",
                'Kyorlin', 'Noamuth', 'Ogglin', 'Oloth', 'Parzdiamo', 'Phindar', 'Quarthen',
                'Ragar', 'Ryld', 'Sargtlin', 'Ssinssrigg', 'Thalack', "Uln'hyrr", 'Ultrin',
                'Sargtlin', 'Ultrinnan', 'Veldrin', 'Velkyn', 'Zedrinset', 'Zhaunil', "Z'ress",
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (new_npc.getGender() === 'female') {
            const femalenames = [
                'Abbil', 'Aluve', 'Asanque', 'Belaern', 'Brorna', 'Bwael', 'Crinti', 'Draada',
                'Elamshin', 'Elendar', 'Ilareth', 'Ilhar', 'Ilharess', "Jivvin Quui'elghinn",
                'Malla', 'Mrimm', 'Orthea', 'Plynn', "Qu'uente", "Qu'lith", 'Quarvalsharess',
                'Sarn', 'Sreen', 'Streea', 'Streeaka', 'Ul-Ilindith', 'Ultrine', 'Valsharess',
                'Velve', 'Vidrinath', 'Yathrin', 'Yathtallar',
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }


    _description(dndrace, new_npc) {
        return `<a href="https://forgottenrealms.fandom.com/wiki/Drow_dictionary">${this.firstname}</a> 
        hails from a dark-skinned sub-race of elves that predominantly live in the Underdark`;
    }
}

setClassMapping('Drow', Drow);
