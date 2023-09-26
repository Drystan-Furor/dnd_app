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
        this.dndRace = race.getRace();
        // Age
        this.age = new Age(this.dndRace).getAge();
        // Profile
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
        let scar = new Scar(this.dndRace, this.npcClass);
        this.scar1 = scar.getScar();
        scar = new Scar(this.dndRace, this.npcClass);
        this.scar2 = scar.getScar();
        scar = new Scar(this.dndRace, this.npcClass);
        this.scar3 = scar.getScar();
        // Clothing
        //npc_wardrobe-by-wealth +npc_wardrobe
        const outfit = new Status(this.heShe, this.npcClass, this.dndRace);
        this.intro = outfit.getIntro();
        this.outfit = outfit.getOutfit();





        // Name
        //name [requires a race]
        //$this->name = new Name(); the constructor requires 4 values
        // -> explore to make users enter their own name.
        //pass object to class method, allows to pass multiple properties
        // pass race to Name so it can sort what race naming class should be calles
        const name = new Name(
            this.dndRace, genderNouns,
            this.raceArray, this.age,
            this.origin
        );
        const firstname = name.getFirstname();
        const lastname = name.getLastname();
        const nickname = name.getNickname();
        const description = name.getDescription();


        // Construct object with properties of classes
        return {
            // class
            class: this.npcClass,
            // nouns
            gender: this.gender,
            manWoman:this.manWoman,
            heShe:this.heShe,
            hisHer:this.hisHer,
            // race
            dndRace: this.dndRace,
            origin:origin,
            raceArray:this.raceArray,
            // age
            age: this.age,
            // profile
            face: this.face,
            // body
            bodySize:this.bodySize,
            bodyType:this.bodyType,
            bodyShape:this.bodyShape,
            body:this.body,
            // mood
            mood:this.mood,
            // scars
            scar1:this.scar1,
            scar2:this.scar2,
            scar3:this.scar3,

            // Name
            // ... other properties ...
        };
    }

    // _subjectArray() {
    //     const randsubject = [
    //         " the  " + this.dndrace,
    //         " this " + this.gender,
    //         this.heshe,
    //         this.nickname,
    //     ];
    //     return randsubject[Math.floor(Math.random() * randsubject.length)];
    // }

    _writeStory(npc) {
        let string = "You meet a " + npc.gender + " " + npc.race + " " + npc.class + ". ";
        string = string + "Who is " + npc.age + " years old.";


        return string;
    }
}


