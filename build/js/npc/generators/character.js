import {RaceFactory} from '../races/factory/racefactory';
import {NpcClass} from "../properties/class";
import {Race} from "../properties/race";
import {Gender} from "../properties/gender";
import {Age, rand} from "../properties/age";
import {Profile} from "./profile";
import {Body} from "./body";
import {Mood} from "./mood";
import {Scar} from "./scars";
import {Status} from "./status";
import {Weapon} from "../clothing/accessoiries/weapons";
import {Verbs} from "./verbs";

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
        this.genderNouns = new Gender();
        // Race
        const race = new Race();
        race.setRace('Yuantipureblood');

        // Age
        this.age = new Age(race);
        // Profile -> Face
        this.profile = new Profile(race.getRace(), this.genderNouns, this.npcClass);
        // Body
        const body = new Body(race.getRace(), this.genderNouns);
        // Mood
        this.mood = new Mood(this.npcClass);
        // Scars
        this.scar1 = new Scar(race.getRace(), this.genderNouns).getScar();
        this.scar2 = new Scar(race.getRace(), this.genderNouns).getScar();
        this.scar3 = new Scar(race.getRace(), this.genderNouns).getScar();
        // Status && Clothing
        const status = new Status(this.genderNouns, this.npcClass, race.getRace());
        // Weapon
        this.weapon = new Weapon(race.getRace());
        // Name
        const biography = RaceFactory.createRace(race, this.genderNouns, this.age);

        // Construct object with properties of classes
        return {
            // iD
            id: rand(1000,9999),
            // class
            class: this.npcClass,
            // nouns
            gender: this.genderNouns.getGender(),
            manWoman: this.genderNouns.getManWoman(),
            heShe: this.genderNouns.getHeShe(),
            hisHer: this.genderNouns.getHisHer(),
            // race
            dndRace: race.getRace(),
            heritage: race.getHeritage(),
            variant: race.getVariant(),
            raceArray: race.getRaceArray(),
            // age
            age: this.age.getAge(),
            // profile
            face: this.profile.getFace(),
            // body
            bodySize: body.getBodySize(),
            bodyType: body.getBodyType(),
            bodyShape: body.getBodyShape(),
            body: body.getBody(),
            // mood
            mood: this.mood.getMood(),
            // scars
            scar1: this.scar1,
            scar2: this.scar2,
            scar3: this.scar3,
            // status && clothing
            intro: status.getIntro(),
            outfit: status.getOutfit(),
            // name
            firstname: biography.getFirstname(),
            lastname: biography.getLastname(),
            nickname: biography.getNickname(),
            description: biography.getDescription(),
            // weapon
            weapon: this.weapon.getArms(),
            // ... other properties ...
            // const subject = Sentence.subject()
        };
    }


    _writeStory(npc) { // ${} || `string`;

        // description
        let string1 = `You ${Verbs.getMeeting()} ${npc.firstname} ${npc.lastname}. 
        A ${npc.bodySize} ${npc.gender} ${npc.dndRace} ${npc.class}, 
        that's ${Verbs.getEstimation()} ${npc.age} years old. ${ucfirst(npc.intro)}. ${npc.description}. ${npc.weapon}. `;
        // appearance
        let string2 = `${npc.face}, ${npc.scar1} ${npc.scar2} ${npc.scar3}`;
        // attire
        let string3 = `${npc.body}. ${npc.outfit} ${npc.mood}`;


        return {
            string1, string2, string3
        };
    }
}

function ucfirst(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}
