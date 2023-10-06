import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Fairy extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : this._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : this._firstname(genderNouns);
        this.nickname = parameters.nickname ? parameters.nickname : this._nickname();
        this.wings = this._wings(genderNouns);
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname() {
        const surnames = [
            'Moonwing',
            'Starpetal',
            'Lightwhisper',
            'Dewspark',
            'Sunshimmer',
            'Thistleplume',
            'Roseglimmer',
            'Willowshade',
            'Skytwinkle',
            'Ivybreeze'
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(genderNouns) {
        let firstname;
        if (genderNouns.getGender() === 'male') {
            const malenames = [
                'Moonwing',
                'Starpetal',
                'Lightwhisper',
                'Dewspark',
                'Sunshimmer',
                'Thistleplume',
                'Roseglimmer',
                'Willowshade',
                'Skytwinkle',
                'Ivybreeze'
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (genderNouns.getGender() === 'female') {
            const femalenames = [
                'Titania',
                'Ariel',
                'Luna',
                'Tinkerbell',
                'Willow',
                'Iris',
                'Blossom',
                'Faye',
                'Meadow',
                'Wisp'
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _nickname() {
        const nickname = [
            'Sparklewing',
            'Moonbeam',
            'Sunflare',
            'Petalfoot',
            'Glimmer',
            'Dewdrop',
            'Starshine',
            'Leafdancer',
            'Breezefly',
            'Twinkletoe'
        ];
        return nickname[Math.floor(Math.random() * nickname.length)];
    }

    _wings(genderNouns) {
        const wings = [
            'wings are like those of a bird',
            'a shimmering, multicolored skin',
            'a constantly surrounding, glittering mist',
            `a small spectral horn on ${genderNouns.getHisHer()} forehead, like a little unicorn horn`,
            'insectile legs',
            'a smell like fresh brownies',
            `a noticeable, harmless chill surrounding ${genderNouns.getHisHer()}`,
        ];
        return wings[Math.floor(Math.random() * wings.length)];
    }

    /*
    string
     */
    _description(dndRace, genderNouns) {
        return `The Feywild is home to many fantastic peoples, including ${dndRace}. ${dndRace} are a wee folk, but not
        nearly as much so as their pixie and sprite friends. Infused with the magic of the Feywild, ${this.firstname} 
        looks like a ${Fairy.bodySizeReplacer()} elf with ${this.wings}, that sets the fairy apart.`;
    }

    static bodySizeReplacer() {
        const bodysizes = [
            "minuscule",
            "petite",
            "thumb-sized",
            "pocket-sized",
            "delicate",
            "elfin",
            "dainty",
            "diminutive",
            "wee",
            "microscopic",
            "speck-sized",
            "fairy-sized",
            "infinitesimal",
            "atom-sized",
            "teacup-sized",
            "button-sized",
            "tadpole-sized",
            "grain-sized",
            "pebble-sized",
            "matchstick-sized",
            "feather-light",
            "whisker-sized",
            "fingertip-sized",
            "nail-sized",
            "thimble-sized"
        ];
        return bodysizes[Math.floor(Math.random() * bodysizes.length)];
    }
}

setClassMapping('Fairy', Fairy);
