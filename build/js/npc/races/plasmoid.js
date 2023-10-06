import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";
import {Verbs} from "../generators/verbs";

export class Plasmoid extends Name {
    constructor(dndRace, genderNouns, age, parameters) {
        super(dndRace, genderNouns);
        this.lastname = parameters.lastname ? parameters.lastname : this._lastname();
        this.firstname = parameters.firstname ? parameters.firstname : this._firstname(genderNouns);
        this.nickname = parameters.nickname ? parameters.nickname : this._nickname();
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname() {
        const surnames = [
            'GelSphere',
            'AquaBlob',
            'FluidSphere',
            'JellyCore',
            'LiquidOrb',
            'PlasmaGlob',
            'ViscoSphere',
            'GooOrb',
            'SlimeCore',
            'MistBlob'
        ];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }

    _firstname(genderNouns) {
        let firstname;
        if (genderNouns.getGender() === 'male') {
            const malenames = [
                'Gloop',
                'Blobby',
                'Visco',
                'Gel',
                'Slush',
                'Drip',
                'Splash',
                'Squirt',
                'Puddle',
                'Droplet'
            ];
            firstname = malenames[Math.floor(Math.random() * malenames.length)];
        }

        if (genderNouns.getGender() === 'female') {
            const femalenames = [
                'Misty',
                'Dewy',
                'Bubbly',
                'Squishy',
                'Gelly',
                'Dropletta',
                'Splasha',
                'Liquida',
                'Fluida',
                'Aqua'
            ];
            firstname = femalenames[Math.floor(Math.random() * femalenames.length)];
        }
        return firstname;
    }

    _nickname() {
        const nickname = [
            'The Drippy',
            'SquishMaster',
            'GelKing',
            'FluidQueen',
            'Blobster',
            'AquaAce',
            'PuddlePro',
            'LiquidLad',
            'MistMaven',
            'JellyGenius'
        ];
        return nickname[Math.floor(Math.random() * nickname.length)];
    }


    _description(dndRace, genderNouns) {
        return `In your presence this ${dndRace} adopts a similar shape, but there’s little chance of mistaking a 
        ${dndRace} for anything else. They consume food by osmosis, the way an amoeba does, and excrete waste through 
        tiny pores. They breathe by absorbing oxygen through another set of pores, and their limbs are strong and 
        flexible enough to grasp and manipulate weapons and tools. The ${dndRace} ${this.firstname} has a 
        ${this.nickname} ${Verbs.color()} color. ${this.firstname} does not have internal organs of the usual sort. 
        It's body is composed of cells, fibers, plasma-like ooze, and clusters of nerves. These nerves enable a 
        ${dndRace} to detect light, heat, texture, sound, pain, and vibrations. ${dndRace} can stiffen the outer layers
         of their bodies to maintain a humanlike shape, so they can wear clothing and accessories. 
         They speak by forcing air out of tubular cavities that constrict to produce sound`;
    }

    static bodyTypeReplacer() {
        const bodysizes = [
            "amorphous",
        ];
        return bodysizes[Math.floor(Math.random() * bodysizes.length)];
    }

    static bodyShapeReplacer() {
        const shape = [
            "no typical shape",
        ];
        return shape[Math.floor(Math.random() * shape.length)];
    }


}

setClassMapping('Plasmoid', Plasmoid);
