import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Shifter extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : this._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : this._firstname(genderNouns);
        this.nickname = null;
        this.description = this._description(dndRace, genderNouns);
    }

    _lastname() {
        const surnames = [
            'Longtooth', 'Razorclaw',
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(genderNouns) {
        let firstname;
        if (genderNouns.getGender() === 'male') {
            const malenames = [
                'Bramble', 'Badger', 'Cobble', 'Bluff', 'Vine', 'Spark', 'Acor',
                'Astro', 'Ravine', 'Pyro', 'Vermin', 'Pyre', 'Torrent', 'Flint',
                'Scar', 'Light', 'Nebula', 'Coal', 'Gulch', 'Crater', 'Breach',
                'Vermin', 'Gulch', 'Bog', 'Drift', 'Talon', 'Pyre', 'Crag',
                'Grit', 'Flare', 'Glare', 'Silver', 'Timber', 'Spark',
                'Flood', 'Ash', 'Stone', 'Fury', 'Wolf', 'Stripe',
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (genderNouns.getGender() === 'female') {
            const femalenames = [
                'Magenta', 'Amethyst', 'Elm', 'Harley', 'Karma', 'Ocean', 'Bloom',
                'Sage', 'Thistle', 'Diamond', 'Rill', 'Olive', 'Elm', 'Quill', 'Rose',
                'Sugar', 'Snowflake', 'Pyro', 'Violet', 'Canyon', 'Willow', 'Rosemary',
                'Poison', 'Olive', 'Poison', 'Isle', 'Spring', 'Emerald', 'Stardust',
                'Dewdrop', 'Rill', 'Ruby', 'Whirl', 'Harley', 'River', 'Twilight',
                'Sunrise', 'Silver', 'Sapphire',
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }


    /*
    string
     */
    _description(dndRace, genderNouns) {
        let definition;
        let lastname = this.lastname;
        let firstname = this.firstname;

        if (lastname === 'Longtooth') {
            definition = 'The Longtooth shifters are more like wolves, ' +
                'they work well in packs, are drawn to hierarchies, ' +
                'and will come to the aid of friends and companions';
        } else {
            definition = "Razorclaw shifters are more like tigers, " +
                "they're independent, they assume their companions are " +
                "capable and able to take care of themselves just as they can, " +
                "and they will do their best to carry their own weight";
        }

        const prefixes = [
            'being born from lycanthropy',
            'mysterious Fey causes',
            'barbarian rituals',
        ];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];

        const altfixes = [
            'Loreguards', 'Moonspeakers', 'Ragewild Shifters',
        ];
        const altfix = altfixes[Math.floor(Math.random() * altfixes.length)];

        return `${dndRace.getRace()}s are the weretouched of Eberron, in some ways. ` +
            `As a child, the ${dndRace.getRace()} formed a close bond with the beast within. ` +
            `These totemic forces are explosive forces in ${firstname}’s personality, ` +
            `and all ${dndRace.getRace()}s have a unique inner beast that guides them in some way. ` +
            `${firstname} is a shifter due to ${prefix}, ${genderNouns.getHeShe()} developed as a ` +
            `${lastname} Shifter and joined the ${altfix}. ${definition}`;
    }
}

setClassMapping('Shifter', Shifter);
