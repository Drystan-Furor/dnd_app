import {Verbs} from "./verbs";

export  class Scar {
    constructor(dndRace, genderNouns) {
        this.scar = Scar.scar(dndRace, genderNouns);
    }

    static _dentMarkings() {
        const dents = [
            'indentation', 'incline', 'dent', 'scratch', 'scrape', 'chip', 'perforation', 'claw mark',
        ];
        return dents;
    }

    static dentLines() {
        const dents = this._dentMarkings();
        const dent = dents[Math.floor(Math.random() * dents.length)];

        const scarlines = [
            "horizontal " + dent,
            "vertical " + dent,
            dent,
            "diagonal " + dent + ", from the left to the right",
            "diagonal " + dent + ", from the right to the left",
        ];
        const scarline = scarlines[Math.floor(Math.random() * scarlines.length)];
        return scarline;
    }

    static _scarMarkings() {
        const markings = [
            'scar', 'cut', 'bruise', 'laceration', 'graze', 'claw mark',
            'birth mark', 'wound', 'jab', 'bruise', 'scratch',
        ];
        const mark = markings[Math.floor(Math.random() * markings.length)];
        return mark;
    }

    static scarLines() {
        const mark = this._scarMarkings();
        const scarlines = [
            "horizontal " + mark,
            "vertical " + mark,
            mark,
            "diagonal " + mark + ", from the left to the right",
            "diagonal " + mark + ", from the right to the left",
        ];
        const line = scarlines[Math.floor(Math.random() * scarlines.length)];
        return line;
    }

    static scarSides() {
        const scarsides = ["left side", "right side", "middle"];
        const side = scarsides[Math.floor(Math.random() * scarsides.length)];
        return side;
    }

    static scarLocation() {
        const scarlocations = [
            "left cheek", "right cheeck", "left temple", "right temple",
            "left eye", "right eye", "left ear", "right ear", "left eyebrow",
            "right eyebrow", "jaw", "forehead", "chin", "nose", "mouth", "throat",
        ];
        const location = scarlocations[Math.floor(Math.random() * scarlocations.length)];
        return location;
    }

    static scar(dndrace, new_npc) {
        const hasScar = Math.floor(Math.random() * 2) + 1;
        let scar = "";
        if (dndrace !== 'Warforged') {
            if (hasScar === 1) {
                scar = "You " + Verbs.getObservation() + " " +
                    new_npc.getHeShe() + " has a " +
                    this.scarLines() + ' on the ' +
                    this.scarSides() + ' of ' +
                    new_npc.getHisHer() + " " +
                    this.scarLocation() + ". ";
            }
        } else if (dndrace === 'Warforged') {
            if (hasScar === 1) {
                let location = this.scarLocation();
                if (location === 'nose') {
                    location = 'nose area';
                }
                scar = "You " + Verbs.getObservation() + " " +
                    new_npc.getHeShe() + " has a " +
                    this.dentLines() + ' on the ' +
                    this.scarSides() + ' of ' +
                    new_npc.getHisHer() + " " +
                    location + ". ";
            }
        }
        return scar;
    }

    getScar() {
        return this.scar;
    }
}
