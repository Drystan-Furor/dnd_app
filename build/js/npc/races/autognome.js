import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {getRandomElement, ucFirst} from "./factory/utility";
import {Material} from "../generators/materials";
import {Verbs} from "../generators/verbs";

export class Autognome extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname :this._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : this._firstname(genderNouns);
        this.nickname = parameters.nickname ? parameters.nickname : this._nickname();
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname() {
        const surnames = [
            'Gearloose',
            'Quickwrench',
            'Cogspinner',
            'Ironhide',
            'Steelforge',
            'Tinkertop',
            'Bristlebrush',
            'Cobblestone',
            'Bronzegear',
            'Silvernut'
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(genderNouns) {
        let firstname;
        if (genderNouns.getGender() === 'male') {
            const malenames = [
                'Fizzle',
                'Glim',
                'Nackle',
                'Wrenn',
                'Tinker',
                'Bibble',
                'Cog',
                'Gimble',
                'Sprocket',
                'Zook'
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (genderNouns.getGender() === 'female') {
            const femalenames = [
                'Bimble',
                'Tana',
                'Wizzle',
                'Kipper',
                'Nissa',
                'Minx',
                'Fen',
                'Lilla',
                'Trixy',
                'Vina'
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _nickname() {
        const nickname = [
            'Spark',
            'Gearhead',
            'Shortfuse',
            'Pebble',
            'Widget',
            'Gizmo',
            'Screwloose',
            'Bolt',
            'Clank',
            'Flicker'
        ];
        return nickname[Math.floor(Math.random() * nickname.length)];
        // return this.lastname;

    }

    _reason(genderNouns) {
        const reason = [
            'of a malfunction',
            'of a unique circumstance',
            `${genderNouns.getHeShe()} didn’t like how ${genderNouns.getHisHer()} creator treated ${genderNouns.getHimHer()}, ${genderNouns.getHeShe()} ran away from home`,
            `${genderNouns.getHeShe()} felt trapped in the role for which ${genderNouns.getHeShe()} was built and abandoned ${genderNouns.getHisHer()} creator, determined to find a greater purpose`,
            `${genderNouns.getHisHer()} creator gave ${genderNouns.getHimHer()} autonomy and urged ${genderNouns.getHimHer()} to follow ${genderNouns.getHisHer()} dreams`,
            `${genderNouns.getHisHer()} creator built ${genderNouns.getHimHer()} to complete a special mission`,
            `a glitch caused ${genderNouns.getHimHer()} to forget ${genderNouns.getHisHer()} original programming, ${genderNouns.getHeShe()} does not remember who made ${genderNouns.getHimHer()} or where ${genderNouns.getHeShe()} came from`,

        ];
        return reason[Math.floor(Math.random() * reason.length)];
    }

    _description(dndRace, genderNouns) {
        return `The ${dndRace} is a mechanical being built by rock gnomes. Because ${this._reason(genderNouns)}, this ${dndRace}, nicknamed ${this.nickname}, became separated from its creator and strikes out on its 
        own. ${this.nickname} bears a resemblance to its creator`;
    }

    static eyesReplacer() {
        let eyestone = [
            'black Onyx',
            'green Emerald',
            'black Sapphire',
            'blue Sapphire',
            'white Diamond',
            'red Ruby',
            'yellow Opal',
            'blue Spinel',
            'green-blue Turqoise',
            'gold Amber',
            'crimson Coral',
            'brass-yellow Pyrite',
            'rose Quartz',
            'blue Quartz',
            'gray-black Hermatite',
            'dark green Malachite',
            'flamed red-black Sardonyx',
            'orange Zircon',
            'speckled red Jasper',
            'purple Amethyst',
            'transparent fiery orange Jacinth',
        ];
        eyestone = getRandomElement(eyestone);

        let glowingcolor = ['red', 'blue', 'green', 'white', 'yellow', 'purple'];
        glowingcolor = getRandomElement(glowingcolor);

        return ` crystalline ${eyestone} stones instead of eyes, that glow ${glowingcolor}`;
    }


    static noseReplacer() {
        return `a ${Material.getMetalType()} nose`;
    }

    static mouthReplacer() {
        const mouth = [
            `a hinged ${Material.getMetalType()} jaw`,
            `a motorized ${Material.getMetalType()} jaw`,
            `a ${Material.getMetalType()} ventriloquist doll jaw`,
            `a ${Material.getMetalType()} grate`,
        ];
        return getRandomElement(mouth);
    }

    static chinReplacer() {
        let shape = [
            'pointy', 'round', 'square',
        ];
        shape = getRandomElement(shape);

        let detail = [
            'a rather ', 'quite the', 'a very defined',
            'a very protruding', 'a very small', 'a bit of a',
        ];
        detail = getRandomElement(detail);

        return `${detail} ${shape} ${Material.getMetalType()} chin`;
    }

    static teethReplacer() {
        const teeth = [
            `has several ${Material.getMetalType()} nails as teeth`,
            `has small ${Material.getMetalType()} plates as teeth`,
            `has metal drills with a ${Material.getMetalType()} coating as teeth`,
            `has filed, sharp edged ${Material.getMetalType()} bolts as teeth`,
            `has nails as teeth, made of ${Verbs.quality()} ${Material.getMetalType()}`,
            "has no teeth", "is not designed with teeth",
            "has no teeth at all",
            `has  ${Material.getMetalType()} revolving gears instead of teeth`,
            `has a ${Material.getMetalType()} meatgrinder instead of teeth`,
        ];
        return getRandomElement(teeth);
    }

    static bodySizeReplacer() {
        const bodySizes = [
            "very small", "quite small", "small", "small sized",
            "rather tiny", "below middle sized", "really small",
            "slightly smaller", "rather small", "reasonably small",
            "tiny", "characteristically tiny sized", "naturally small sized",
        ];
        return bodySizes[Math.floor(Math.random() * bodySizes.length)];
    }
}

setClassMapping('Autognome', Autognome);
