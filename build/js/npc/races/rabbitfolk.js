import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Rabbitfolk extends Name {
    constructor(dndRace, genderNouns) {
        super(dndRace, genderNouns);
        this.lastname = this._lastname();
        this.firstname = this._firstname(genderNouns);
        this.nickname = this.lastname;
        this.description = this._description(dndRace.getRace(), genderNouns);
    }

    _lastname() {
        let part1 = [
            'Brush', 'Good', 'Green', 'High-', 'Hill',
            'Lea', 'Tea', 'Thorn', 'Toss', 'Under',
        ];
        const partX = [
            'gather', 'barrel', 'bottle', 'hill', 'topple',
            'gallow', 'leaf', 'gage', 'cobble', 'bough',
        ];
        part1 = part1[Math.floor(Math.random() * part1.length)];
        let part2 = partX[Math.floor(Math.random() * partX.length)];
        while (part1 === 'Hill' && part2 === 'hill') {
            part2 = partX[Math.floor(Math.random() * partX.length)];
        } // Prevent Hillhill

        return part1 + part2;
    }

    _firstname(genderNouns) {
        let firstname1, firstname2, firstname;

        if (genderNouns.getGender() === 'male') {
            const RabbitMaleNames1 = [
                'Al', 'An', 'Ca', 'Cor', 'El', 'Er', 'Fin', 'Gar', 'Lin', 'Ly', 'Mer',
                'Mi', 'Os', 'Per', 'Re', 'Ro', 'Wel',
            ];
            firstname1 = RabbitMaleNames1[Math.floor(Math.random() * RabbitMaleNames1.length)];

            const RabbitMaleNames2 = [
                'ton', 'der', 'de', 'rin', 'don', 'rich', 'nan', 'ret', 'dal', 'le', 'ric',
                'lo', 'born', 'rin', 'ed', 'scoe', 'lby',
            ];
            firstname2 = RabbitMaleNames2[Math.floor(Math.random() * RabbitMaleNames2.length)];
        }

        if (genderNouns.getGender() === 'female') {
            const halflingFemaleNames1 = [
                'An', 'Ca', 'Co', 'Euphe', 'Ji', 'Ki', 'La', 'Li', 'Mer', 'Ne', 'Pae',
                'Por', 'Sera', 'Shae', 'Va', 'Ver', 'Re',
            ];
            firstname1 = halflingFemaleNames1[Math.floor(Math.random() * halflingFemaleNames1.length)];

            const halflingFemaleNames2 = [
                'dry', 'llie', 'ra', 'mia', 'llian', 'thri', 'vinia', 'dda', 'la', 'tia',
                'phina', 'na', 'ni',
            ];
            firstname2 = halflingFemaleNames2[Math.floor(Math.random() * halflingFemaleNames2.length)];
        }
        firstname = firstname1 + firstname2;
        return firstname;
    }

    _description(dndRace, genderNouns) {
        return `${dndRace} are naturally drawn to people`;
    }

    static bodySizeReplacer() {
        const bodysizes = [
            "very small", "quite small", "small", "small sized",
            "rather tiny", "below middle sized", "really small",
            "slightly smaller", "rather small", "reasonably small",
            "tiny", "characteristically tiny sized", "naturally small sized",
        ];
        return bodysizes[Math.floor(Math.random() * bodysizes.length)];
    }

}

setClassMapping('Rabbitfolk', Rabbitfolk);
