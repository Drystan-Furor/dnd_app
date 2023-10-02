import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Triton extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = this._lastname();
        this.firstname = this._firstname(genderNouns);
        this.nickname = this.lastname;
        this.description = this._description(dndRace, genderNouns);
    }

    _lastname() {
        const surnames1 = [
            'Dah', 'Ul', 'A', 'Lu', 'Noh', 'Muh', 'Veh', 'Ju', 'Dheh', 'Le', 'Nu', 'Ra', 'Rah', 'Zu', 'Bhu',
            'Bha', 'An', 'Ra', 'Sah', 'Ve', 'Sa', 'Gah', 'Za', 'Jo', 'Uh', 'Ma', 'Po', 'Zu', 'Lo', 'Ah', 'Na',
            'Jah', 'So', 'Mah', 'Nah', 'Sag', 'Juh', 'U', 'Juh', 'E', 'Bo', 'Zeg', 'Ga', 'Rag', 'Gug', 'Ru',
            'Reg', 'Dha', 'Nah', 'Bu', 'Guh', 'Ruh', 'Gu', 'Ja', 'Bu', 'Ah', 'Zag', 'Luh', 'Bhag', 'No', 'Bu', 'Ho'
        ];

        const surnames2 = [
            'ra', 'ell', 'lor', 'mans', 'loln', 'lam', 'rag', 'nelm', 'meg', 'duz', 'gax', 'bod', 'nalv', 'dalm', 'bell',
            'vall', 'nall', 'gar', 'ran', 'nemn', 'gos', 'nud', 'lans', 'monz', 'nun', 'boz', 'ban', 'nasn', 'vars', 'nur',
            'daln', 'nux', 'ron', 'vux', 'rad', 'luz', 'nam', 'rez', 'hal', 'lor', 'lolv', 'nag', 'maln', 'rog', 'goz', 'ban',
            'manz', 'rex', 'holm', 'nalm', 'val', 'hud', 'hasn', 'dur', 'hog', 'gax', 'dor', 'ras', 'lons', 'lol', 'rasn', 'len',
            'nall', 'lul', 'nug', 'hom', 'bulm', 'melm', 'husn', 'ronh', 'ramn', 'mor', 'morh'
        ];

        const lastnames3 = "ath";

        const lastname1 = surnames1[Math.floor(Math.random() * surnames1.length)];
        const lastname2 = surnames2[Math.floor(Math.random() * surnames2.length)];
        return lastname1 + lastname2 + lastnames3;
    }


    _firstname(genderNouns) {
        let firstname;
        if (genderNouns.getGender() === 'male') {
            const malenames = [
                'Vuhnus', 'Nozos', 'Dalgas', 'Danas', 'Numnus', 'Khalgas',
                'Dimis', 'Vamnas', 'Dhaldas', 'Dirzis', 'Vilis', 'Cenres',
                'Cohlos', 'Dhorvos', 'Jurlus', 'Khaldas', 'Jhuhlus', 'Molos',
                'Dholmos', 'Relges', 'Jovos', 'Jhigis', 'Jhaddas', 'Khahras',
                'Jomros', 'Dulgus', 'Molzos',
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (genderNouns.getGender() === 'female') {
            const femalenames = [
                'Vlaltyn', 'Elryn', 'Edryn', 'Mosahyn', 'Horyn', 'Lonreren', 'Uhlen',
                'Nahlyn', 'Iryn', 'Itomyn', 'Neslulyn', 'Altulyn', 'Ethlehyn',
                'Wemlyn', 'Natohen',
                'Anthyn', 'Hodryn', 'Flirlyn', 'Dahnunyn', 'Wetrahyn', 'Doglilyn',
                'Urludyn', 'Omlyn', 'Whonthyn', 'Misyn', 'Yotlyn', 'Bhadranyn',
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }


    _description(dndRace) {
        const haircolors = [
            'blue', 'green', 'orange', 'yellow', 'pink',
            'red', 'violet', 'turquoise', 'purple',
        ];
        const colorful = haircolors[Math.floor(Math.random() * haircolors.length)];
        return `${dndRace.getRace()} names are melodic, but do have some harsher tones as well. 
        Female names always end in -yn, and male names always end in -s. 
         Their surnames always end in -ath, and tend to be much longer and 
         complex than their personal names. Male names also seem to always be 
         2 syllables long, while female names can be 2 to 3 syllables long.
        This aquatic humanoid has webbed feet, webbed hands, blue skin and colorful ${colorful} hair.`;
    }
}

setClassMapping('Triton', Triton);
