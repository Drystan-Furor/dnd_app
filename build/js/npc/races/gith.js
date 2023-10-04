import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {getRandomElement} from "./factory/utility";

export class Gith extends Name {
    /**
     GITH = [
     Gythyanki  [names A]
     Githzerai  [names B]
     Githvyrik  [names A or B]
     ]
     */
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this._variation(dndRace);
        this.firstname = parameters.firstname ? parameters.firstname : this._firstname(dndRace.getVariant(), genderNouns);
        this.nickname = parameters.nickname ? parameters.nickname : this.firstname;
        this.lastname = dndRace.getVariant();
        this.description = this._description(dndRace.getVariant(), genderNouns);
    }

    _variation(dndRace) {
        const variant = [
            'Githyanki', 'Githzerai', 'Githvyrik'
        ];
        dndRace.setVariant(getRandomElement(variant));
    }

    _firstname(variant, genderNouns) {
        const rand = Math.floor(Math.random() * 2) + 1;
        let firstname;
        const gender = genderNouns.getGender();
        const isGithyankiOrGithvyrik = (variant === 'Githyanki' || (variant === 'Githvyrik' && rand === 1));
        const isGithzeraiOrGithvyrik = (variant === 'Githzerai' || (variant === 'Githvyrik' && rand === 2));
        const getSurname = (surnames) => surnames[Math.floor(Math.random() * surnames.length)];

        if (isGithyankiOrGithvyrik) {
            const surnames1 = gender === 'male' ? ['Ma', 'Va', 'Na', 'U', 'Ze', 'Eli', 'Ga', 'Ja', 'Kar', 'Ly', 'Quo', 'Ris', 'Tro', 'Xa', 'Qu', 'As'] : ['Ma', 'Va', 'Na', 'U', 'Ze', 'A', 'Fe', 'Je', 'Pa', 'Quo', 'Va', 'Yes', 'Za'];
            const surnames2 = ['du', 'za', 'ra', 'nai', 'nu', 'a', 'i', 'k', 'mo', 'mo'];
            const surnames3 = ['rai', 'rin', 'mon', 'ru', 'rik', 'th', 'doc', 'us', 'dain', 'nas', 'an', 'os', 'das', 'dan'];

            const syllables = Math.floor(Math.random() * 4) + 1;
            switch (syllables) {
                case 1:
                    firstname = `${getSurname(surnames1)}${getSurname(surnames2)}${getSurname(surnames3)}`;
                    break;
                case 2:
                    firstname = `${getSurname(surnames1)}${getSurname(surnames3)}${getSurname(surnames2)}`;
                    break;
                case 3:
                    firstname = `${getSurname(surnames1)}${getSurname(surnames2)}${getSurname(surnames2)}`;
                    break;
                default:
                    firstname = `${getSurname(surnames1)}${getSurname(surnames3)}${getSurname(surnames3)}`;
                    break;
            }
        }

        if (isGithzeraiOrGithvyrik) {
            const surnames1 = gender === 'male' ? ['Ma', 'Va', 'Na', 'U', 'Ze', 'Sheo', 'D', 'Duu', 'Fe', 'Hu', 'Ka', 'Muu', 'Nu', 'Xo', 'Sh'] : ['Ma', 'Va', 'Na', 'U', 'Ze', 'Ad', 'A', 'El', 'Ez', 'Im', 'I', 'Ja', 'Lo', 'Uw', 'Vi'];
            const surnames2 = ['du', 'za', 'ra', 'nai', 'nu', 'go', 'a', 'r', 'rz', 'l', 'ra'];
            const surnames3 = ['rai', 'rin', 'mon', 'ru', 'rik', 'rath', 'k', 'th', 'm', 'la', 'g', 'kk'];

            const syllables = Math.floor(Math.random() * 3) + 1;
            switch (syllables) {
                case 1:
                    firstname = `${getSurname(surnames1)}${getSurname(surnames2)}${getSurname(surnames3)}`;
                    break;
                case 2:
                    firstname = `${getSurname(surnames1)}${getSurname(surnames3)}`;
                    break;
                default:
                    firstname = `${getSurname(surnames1)}${getSurname(surnames2)}`;
                    break;
            }
        }
        return firstname;
    }

    _description(dndRace, newNpc) {
        let description;
        switch (dndRace) {
            case 'Githyanki':
                description = `The ${dndRace} are motivated by revenge and are convinced that they deserve to take 
                whatever they want from the worlds they travel. The ${dndRace} use history and metaphors 
                pertaining to war as well as battle and are named after grand warriors, in this case: ${this.nickname}`;
                break;
            case 'Githzerai':
                description = `The ${dndRace} believe that the path to an enlightened civilization lays in seclusion, 
                not conflict. The ${dndRace} use history and metaphors pertaining to lore as well as learning and are 
                named after spiritual leaders and philosophers, in this case: ${this.nickname}`;
                break;
            default:
                description = `The ${dndRace} believe the gods are nothing compared to the utter randomness and enormity
                 of the universe. The only order and predictability that the universe has to offer the ${dndRace} 
                 are its perfect mathematics. the ${dndRace}, they do not identify as either Githyanki or Githzerai but
                  are named based on mathematics and chaos just like the arcane and psionic powers from Vhostym, 
                  also known as Sojourner, in this case: ${this.nickname}`;
        }
        const skinTones = ['greenish', 'brownish'];
        const skinTone = skinTones[Math.floor(Math.random() * skinTones.length)];
        description += `. ${this.nickname} looks emaciated, has a pale yellow skin with ${skinTone} tones, and a long, angular skull with pointed ears`;
        return description;
    }
}

setClassMapping('Gith', Gith);
