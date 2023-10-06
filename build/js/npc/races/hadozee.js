import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Hadozee extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : this._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : this._firstname(genderNouns);
        this.nickname = parameters.nickname ? parameters.nickname : this._nickname();
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname() {
        const surnames = [
            'Windtail',
            'Skymane',
            'Seasail',
            'Cloudclaw',
            'Stormwing',
            'Galefin',
            'Breezefur',
            'Airpaw',
            'Zephyrclaw',
            'Mistfeather'
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(genderNouns) {
        let firstname;
        if (genderNouns.getGender() === 'male') {
            const malenames = [
                'Zephyr',
                'Gale',
                'Breeze',
                'Wind',
                'Storm',
                'Mist',
                'Cloud',
                'Sky',
                'Jet',
                'Vortex'
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (genderNouns.getGender() === 'female') {
            const femalenames = [
                'Aria',
                'Sora',
                'Nimbus',
                'Cirrus',
                'Stratus',
                'Gusty',
                'Windy',
                'Blowy',
                'Puff',
                'Flurry'
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _nickname() {
        const nickname = [
            'Skydancer',
            'Windrider',
            'Stormchaser',
            'Cloudskipper',
            'Galeforce',
            'Tailwind',
            'Highflyer',
            'Airborn',
            'Jetstream',
            'Breezer'
        ];
        return nickname[Math.floor(Math.random() * nickname.length)];
    }

    _description(dndRace, genderNouns) {
        return `Today ${dndRace}s are sapient, bipedal beings eager to leave behind the fearsome predators of their 
        homeworld and explore other worlds. In addition to being natural climber, ${this.firstname} "${this.nickname}" 
        has feet that are as dexterous as ${genderNouns.getHisHer()} hands, even to the extent of having opposable thumbs. 
        Membranes of skin hang loosely from ${this.nickname}'s arms and legs. When stretched out, these membranes enable 
        ${this.nickname} to glide. ${dndRace}s wrap these wings around themselves to keep warm`;
    }

}

setClassMapping('Hadozee', Hadozee);
