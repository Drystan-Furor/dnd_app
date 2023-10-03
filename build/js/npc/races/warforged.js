import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {Body} from "../generators/body";
import {Material} from "../generators/materials";
import {getRandomElement, ucFirst} from "./factory/utility";
import {Verbs} from "../generators/verbs";
import {rand} from "../properties/age";
import {Belts} from "../clothing/accessoiries/belts";

export class Warforged extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        genderNouns.setManWoman('automaton');
        genderNouns.setHeShe('it');
        genderNouns.setHisHer("it's");
        genderNouns.setHimHer("it's");

        this.lastname = this._lastname();
        this.firstname = "Soldier";
        this.nickname = this._nickname(genderNouns);
        const strings = this._description(dndRace, genderNouns);
        this.description = strings.description;

        dndRace.setIntro(strings.intro);
        dndRace.setOutfit(strings.outfit);
    }

    _lastname() {
        const prefixes = [
            'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e',
            'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j',
            'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o',
            'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't',
            'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y',
            'Z', 'z', '1', '2', '3', '4', '5', '6', '7', '8',
            '9', '0',
        ];

        const numfixes = [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        ];

        const getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

        const prefix = getRandomElement(prefixes);
        const altfix = getRandomElement(prefixes);
        const theNumbersMason = getRandomElement(numfixes);
        const whatDoTheyMean = getRandomElement(numfixes);

        const nr1 = [getRandomElement(prefixes), getRandomElement(prefixes)];
        const nr2 = [getRandomElement(prefixes), getRandomElement(prefixes)];
        const nr3 = [getRandomElement(numfixes), getRandomElement(numfixes)];
        const nr4 = [getRandomElement(numfixes), getRandomElement(numfixes)];

        const lastnamed = [
            `${nr1[0]}${nr2[0]}-${nr3[0]}${nr4[0]}`,
            `${nr1[1]}${nr2[1]}-${nr3[1]}${nr4[1]}`
        ];

        const hasName = Math.floor(Math.random() * 7) + 1;
        let lastname;

        switch (hasName) {
            case 1:
                lastname = lastnamed[0];
                break;
            case 2:
                lastname = `${lastnamed[0]}/${lastnamed[1]}`;
                break;
            case 3:
                lastname = `${theNumbersMason}${whatDoTheyMean}${prefix}${altfix}`;
                break;
            case 4:
                lastname = `${nr1[0]}${nr2[0]}${nr1[1]}${nr4[0]}${nr4[1]}`;
                break;
            case 5:
                lastname = `${nr1[0]}${nr2[0]}${nr1[1]}${nr2[1]}-${nr3[0]}${nr4[0]}${nr3[1]}${nr4[1]}`;
                break;
            case 6:
                lastname = `00${nr3[0]}${nr3[1]}`;
                break;
            case 7:
                lastname = `${prefix}-${altfix}${theNumbersMason}`;
                break;
            default:
                lastname = 'TK-571';
        }
        return lastname;
    }

    _nickname(genderNouns) {
        let nickname;
        if (genderNouns.getGender() === 'male') {
            genderNouns.setGender("masculine construct");
            const malenames = [
                'Ash', 'Atlas', 'Chroma', 'Excalibur', 'Frost', 'Hydroid', 'Inaros',
                'Limbo', 'Loki', 'Nekros', 'Nezha', 'Revenant', 'Sevagoth', 'Xaku',
                'Oberon', 'Rhino', 'Vauban', 'Volt', 'Wukong', 'Nidus', 'Baruuk', 'Gauss',
                'Grendel', 'Harrow', 'Lavos',
            ];
            nickname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (genderNouns.getGender() === 'female') {
            genderNouns.setGender("feminine construct");

            const femalenames = [
                'Banshee', 'Ember', 'Equinox', 'Ivara', 'Mag', 'Mesa', 'Mirage', 'Nova',
                'Nyx', 'Saryn', 'Trinity', 'Titania', 'Wisp', 'Xaku', 'Yareli', 'Protea',
                'Valkyr', 'Zephyr', 'Gara', 'Garuda', 'Hildryn', 'Khora', 'Octavia',
                'Vyommitra',
            ];
            nickname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return nickname;
    }


    /*
    string
     */
    _description(dndRace, genderNouns) { // `string`,
        let string;
        let people = [
            `the ${dndRace.getHeritage()} creators`,
            `friends `,
            `neighbours`,
        ];
        people = getRandomElement(people);

        const livingConstruct = [
            `decommissioned war machine `,
            `living construct`,
            `decommissioned war machine`,
            `living construct`,
            `sentient automaton`,
            `war-born golem`,
            `battle-forged entity`,
            `mechanical warrior`,
            `ancient war sentinel`,
            `armored guardian`,
            `relic of battle`,
            `forged soldier`,
            `sentient war relic`,
            `awakened machine`,
            `biomechanical being`,
            `warforged wanderer`,
            `living armor`,
            `animated armor`,
            `self-aware construct`,
            `battle-hardened entity`,
            `age-old combatant`,
            `sentient siege engine`
        ];

        const connection = {};
        while (Object.keys(connection).length < 5) {
            connection[Object.keys(connection).length] = Material.connection();
            for (let key1 in connection) {
                for (let key2 in connection) {
                    if (key1 !== key2 && connection[key1] === connection[key2]) {
                        delete connection[key2];
                        break;
                    }
                }
            }
        }

        const sparePart = {};
        while (Object.keys(sparePart).length < 5) {
            sparePart[Object.keys(sparePart).length] = Material.sparepart();
            for (let key1 in sparePart) {
                for (let key2 in sparePart) {
                    if (key1 !== key2 && sparePart[key1] === sparePart[key2]) {
                        delete sparePart[key2];
                        break;
                    }
                }
            }
        }

        const bodyPart = {};
        while (Object.keys(bodyPart).length < 5) {
            bodyPart[Object.keys(bodyPart).length] = Body.bodypart();
            for (let key1 in bodyPart) {
                for (let key2 in bodyPart) {
                    if (key1 !== key2 && bodyPart[key1] === bodyPart[key2]) {
                        delete bodyPart[key2];
                        break;
                    }
                }
            }
        }

        let maintenance1 = Verbs.maintenance();
        let maintenance2 = Verbs.maintenance();
        while (maintenance1 === maintenance2) {
            maintenance2 = Verbs.maintenance();
        }

        // intro ----------------------------------------------------- string
        let construct = getRandomElement(livingConstruct);
        this.description = `${people} of ${this.lastname} ${Verbs.named()} the ${construct} as ${this.nickname}`;

        const d20 = rand(1, 20);
        if (d20 === 1) { // kept original name
            this.description = `The ${construct} has retained ${genderNouns.getHisHer()} original designation ${this.lastname}`;
            this.nickname = this.lastname;
        }
        if (d20 >= 2 && d20 <= 9) { // it picked itself a nickname
            this.description = `The ${construct} has named itself ${this.nickname}`;
        }

        // visible details ----------------------------------------------------- string
        this.outfit = `The ${genderNouns.getManWoman()} has a skeletal frame made of ${Material.getWoodType()} wood. 
        It's parts and joints are all connected and held together with 
        ${connection[0]} and ${connection[1]}. Both ${genderNouns.getHisHer()} ${bodyPart[0]} and ${bodyPart[1]}
        have visible innards, showing either ${maintenance1} or ${maintenance2} ${sparePart[0]}, ${sparePart[1]} 
        and ${sparePart[2]}. `;

        // global observation ----------------------------------------------------- string
        construct = getRandomElement(livingConstruct);
        this.outfit += `The ${construct} has ${Verbs.maintenance()} ${Material.getPlateType()} plating on 
        ${genderNouns.getHisHer()} ${bodyPart[2]} and ${bodyPart[3]}, while the armor ${this.nickname}
        wears on ${genderNouns.getHisHer()} ${bodyPart[0]} looks pretty ${Verbs.maintenance()}.
        ${this.nickname} even has ${Material.getPlateType()} plating on ${genderNouns.getHisHer()} ${bodyPart[4]}
        , however that armor plate is enameled with a durable vitreous ${Material.getEnamelType()} coating. 
        ${ucFirst(genderNouns.getHeShe())} wears a ${Belts.belt()}. `;

        // ghulra  ----------------------------------------------------- string
        construct = getRandomElement(livingConstruct);
        this.intro = `There is a ghulra ${Warforged.engrave()} ${this.lastname}'s forehead that
        ${Verbs.getIndicator()} that the ${construct} served as a ${Warforged.combatRole()} in the Last War`;

        return {
            description: this.description,
            intro: this.intro,
            outfit: this.outfit
        }
    }

    static engrave() {
        const engraving = [
            'engraved upon', 'etched in', 'adorning', 'illuminating from',
            'that spruces up', 'which ornaments', 'painted on', 'jazzing up',
            'embedded in', 'inscribed upon', 'inscribed on', 'burned in',
            'chiselled in', 'lodged in', 'scratched on',
            'carved out in',
        ];
        return getRandomElement(engraving);
    }

    static combatRole() {
        const role = [
            'Combat Medic', 'Artillery Loader', 'Scout', 'Guard', 'Militia',
            'Archer', 'Cataphract', 'Infantry',
            'heavy lifter', 'Landsknecht', 'Musketeer', 'Longbowman', 'Lancer',
            'Janissary', 'Foot Soldier', 'Dragoon', 'Constable', 'Yeoman',
            'Pikeman', 'Catapult Loader', 'Ballista Loader', 'Trebuchet Engineer',
            'Sapper', 'Spy', 'Cannonier', 'Juggernaut', 'Envoy', 'Skirmisher',
            'Sentry', 'Marine', 'City Watch', 'Soldier', 'Investigator', 'Sailor',
        ];
        return getRandomElement(role);
    }

    //-------------------------------------------------------- Replacers
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
        return `no nose`;
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
        const bodySize = [
            "sort of typical giant-sized", "common giant sized",
            "characteristically large sized", "naturally large sized", "typical",
            "more or less standard sized", "moderately large sized", 'sizable',

            "large", "quite large", "very large", "really large",
            "slightly larger", "reasonably large", 'immense', 'enormous',
            "massive", "tall", 'big', 'hulking', 'towering', 'giant',
        ];
        return getRandomElement(bodySize);
    }

    static bodyTypeReplacer() {
        const bodyType = [
            "primarily as an Android",
            "primarily as an Automaton",
            "as a Cyborg",
            "primarily as a Humanoid robot",
            "as a Replicant",
            "primarily as a Synthoid",
            "as a Gynoid",
            "primarily as an interpersonal communications model",
            "primarily as a Mechanoid",
            "primarily as a Maschinenmensch",
        ];
        return getRandomElement(bodyType);
    }

    static bodyShapeReplacer() {
        const sparePart = {};

        while (Object.keys(sparePart).length < 5) {
            sparePart[Object.keys(sparePart).length] = Material.connection();

            for (let key1 in sparePart) {
                for (let key2 in sparePart) {
                    if (key1 !== key2 && sparePart[key1] === sparePart[key2]) {
                        delete sparePart[key2];
                        break;
                    }
                }
            }
        }

        let bodyPart1 = Body.bodypart();
        let bodyPart2 = Body.bodypart();
        while (bodyPart1 === bodyPart2) {
            bodyPart2 = Body.bodypart();
        }

        return `${sparePart[0]} together with ${sparePart[1]} in it's ${bodyPart1} while his 
        ${bodyPart2} has ${sparePart[2]} along with ${sparePart[3]}`;
    }


}

setClassMapping('Warforged', Warforged);
