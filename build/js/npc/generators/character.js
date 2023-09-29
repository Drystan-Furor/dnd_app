import {RaceFactory} from '../races/factory/racefactory';
import {NpcClass} from "../properties/class";
import {Race} from "../properties/race";
import {Gender} from "../properties/gender";
import {Age} from "../properties/age";
import {Profile} from "./profile";
import {Name} from "../properties/name";
import {Body} from "./body";
import {Mood} from "./mood";
import {Scar} from "./scars";
import {Status} from "./status";
import {Weapon} from "../clothing/accessoiries/weapons";

export class DndNpcRng {
    constructor() {
        this.new_npc = this._dndRngNpc();
        this.string = this._writeStory(this.new_npc);
    }

    getNewNpc() {
        return this.new_npc;
    }

    getString() {
        return this.string;
    }

    _dndRngNpc() {
        // Initialize the properties and classes
        // Class
        this.npcClass = new NpcClass().getNpcClass();
        // Nouns
        const genderNouns = new Gender();
        this.manWoman = genderNouns.getManWoman()
        this.heShe = genderNouns.getHeShe()
        this.hisHer = genderNouns.getHisHer()
        this.gender = genderNouns.getGender();
        // Race
        const race = new Race();
        this.origin = race.getOrigin();
        this.raceArray = race.getRaceArray(); //passed drow check
        // this.dndRace = race.getRace();
        this.dndRace = "Firbolg";
        console.warn(this.dndRace);

        // Age
        this.age = new Age(this.dndRace).getAge();
        // Profile -> Face
        const face = new Profile(
            this.dndRace,
            genderNouns,
            this.npcClass
        );
        this.face = face.getFace();
        // Body
        const body = new Body(this.dndRace, genderNouns);
        this.bodySize = body.getBodySize();
        this.bodyType = body.getBodyType();
        this.bodyShape = body.getBodyShape();
        this.body = body.getBody();
        // Mood
        this.mood = new Mood(this.npcClass).getMood();
        // Scars
        let scar = new Scar(this.dndRace, genderNouns);
        this.scar1 = scar.getScar();
        scar = new Scar(this.dndRace, genderNouns);
        this.scar2 = scar.getScar();
        scar = new Scar(this.dndRace, genderNouns);
        this.scar3 = scar.getScar();
        // Status && Clothing
        const outfit = new Status(this.heShe, this.npcClass, this.dndRace);
        this.intro = outfit.getIntro();
        this.outfit = outfit.getOutfit();
        // Weapon
        this.weapon = new Weapon(this.dndRace).getArms();


        // Name
        // the constructor requires 4 values
        // -> explore to make users enter their own name.
        const raceInstance = RaceFactory.createRace(this.dndRace , genderNouns);
        const name = new Name(
            raceInstance, genderNouns,
            this.raceArray, this.age,
            this.origin
        );
        this.firstname = raceInstance.getFirstname();
        this.lastname = raceInstance.getLastname();
        this.nickname = raceInstance.getNickname();
        this.description = raceInstance.getDescription();

        // Construct object with properties of classes
        return {
            // class
            class: this.npcClass,
            // nouns
            gender: this.gender,
            manWoman: this.manWoman,
            heShe: this.heShe,
            hisHer: this.hisHer,
            // race
            dndRace: this.dndRace,
            origin: this.origin,
            raceArray: this.raceArray,
            // age
            age: this.age,
            // profile
            face: this.face,
            // body
            bodySize: this.bodySize,
            bodyType: this.bodyType,
            bodyShape: this.bodyShape,
            body: this.body,
            // mood
            mood: this.mood,
            // scars
            scar1: this.scar1,
            scar2: this.scar2,
            scar3: this.scar3,
            // status && clothing
            intro: this.intro,
            outfit: this.outfit,
            // name
            firstname: this.firstname,
            lastname: this.lastname,
            nickname: this.nickname,
            description: this.description,
            // weapon
            weapon: this.weapon,
            // ... other properties ...
            // const subject = Sentence.subject()
        };
    }


    _writeStory(npc) { // + " " +
        // description
        let string1 = "You meet " + npc.firstname + " " + npc.lastname + ". ";
        string1 = string1 + "A " + npc.bodySize + " " + npc.gender + " " + npc.dndRace + " " + npc.class
            + " " + "that's about " + npc.age + " years old. " + " " + ucfirst(npc.intro) + ". "
            + npc.description+ ". ";
        // appearance
        let string2 = npc.face + ". " + npc.scar1 + npc.scar2 + npc.scar3 + npc.body + ". ";
        // attire
        let string3 = npc.outfit + npc.weapon + ". " + npc.mood + ". ";

        return  {
            string1,string2,string3
        };
    }
}

function ucfirst(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}
