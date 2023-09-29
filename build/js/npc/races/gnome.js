import {setClassMapping} from "./factory/classMapping";
import {Name} from "../properties/name";

export class Gnome extends Name {
    constructor(race, genderNouns) {
        super(race, genderNouns);
        const subClass = this._subClass();
        race.setRace(subClass);
        this.nickname = this._nickname();

        this.lastname = this._lastname(genderNouns);
        this.firstname = this._firstname(genderNouns);
        this.description = this._description(race.getRace(), genderNouns);
    }

    _subClass() {
        const gnomeRaces = [
            "Forest Gnome", "Rock Gnome", "Deep Gnome",
        ];
        return gnomeRaces[Math.floor(Math.random() * gnomeRaces.length)];
    }

    _lastname(genderNouns) {
        const surnames = [
            'Beren', 'Daergel', 'Folkor', 'Garrick', 'Nackle', 'Murnig',
            'Ningel', 'Raulnor', 'Scheppen', 'Timbers', 'Turen',
        ];
        const lastname = surnames[Math.floor(Math.random() * surnames.length)];
        return `${lastname} but ${genderNouns.getHeShe()} is called ${this.nickname}`;
    }

    _firstname(new_npc) {
        const getFirstName = (names) => {
            let firstnames = [];
            for (let i = 0; i < 6; i++) {
                let randomIndex = Math.floor(Math.random() * names.length);
                while (firstnames.includes(randomIndex)) {
                    randomIndex = Math.floor(Math.random() * names.length);
                }
                firstnames.push(randomIndex);
            }

            return names[firstnames[0]] + " " +
                names[firstnames[1]] + " " +
                names[firstnames[2]] + " " +
                names[firstnames[3]] + " " +
                names[firstnames[4]] + " " +
                names[firstnames[5]] + " ";
        }

        const gender = new_npc.getGender();
        if (gender === 'male') {
            const gnomeMaleNames = [
                'Alston', 'Alvyn', 'Boddynock', 'Brocc', 'Burgell',
                'Dimble', 'Eldon', 'Erky', 'Fonkin', 'Frug', 'Gerbo', 'Gimble', 'Glim',
                'Jebeddo', 'Kellen', 'Namfoodle', 'Orryn', 'Roondar', 'Seebo', 'Sindri',
                'Warryn', 'Wrenn', 'Zook',
            ];
            return getFirstName(gnomeMaleNames);
        }

        if (gender === 'female') {
            const gnomeFemaleNames = [
                'Bimpnottin', 'Breena', 'Caramip', 'Carlin', 'Donella',
                'Duvamil', 'Ella', 'Ellyjobell', 'Ellywick', 'Lilli', 'Loopmottin',
                'Lorilla', 'Mardnab', 'Nissa', 'Nyx', 'Oda', 'Orla', 'Roywyn', 'Shamil',
                'Tana', 'Waywocket', 'Zanna',
            ];
            return getFirstName(gnomeFemaleNames);
        }
    }

    _nickname() {
        const nickname = [
            'Aleslosh', 'Ashhearth', 'Badger', 'Cloak', 'Doublelock',
            'Filchbatter', 'Fnipper', 'Ku', 'Nim', 'Oneshoe', 'Pock',
            'Sparklegem', 'Stumbleduck',
        ];
        return nickname[Math.floor(Math.random() * nickname.length)];
    }

    _description(dndRace, genderNouns) {
        return `The ${dndRace} ’s energy and 
            enthusiasm for living shines 
            through every inch of ${genderNouns.getHisHer()} tiny body.`;
    }

    static ageReplacer(dndRace) {
        console.log('ageReplacer');
        console.log(dndRace);
        if (dndRace.getRace() === "Deep Gnome") {
            return Math.floor(Math.random() * (250 - 14 + 1)) + 14;
        } else {
            return Math.floor(Math.random() * (425 - 14 + 1)) + 14;
        }
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
setClassMapping('Gnome', Gnome);
