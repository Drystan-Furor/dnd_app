import {NpcClass} from "../properties/class";
import {Race} from "../properties/race";
import {Gender} from "../properties/gender";
import {Age} from "../properties/age";
import {Profile} from "./profile";
import {Name} from "../properties/name";
import {Body} from "./body";

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
        const npcClass = new NpcClass().getNpcClass();
        // Nouns
        const genderNouns = new Gender();
        const manWoman = genderNouns.getManWoman()
        const heShe = genderNouns.getHeShe()
        const hisHer = genderNouns.getHisHer()
        const gender = genderNouns.getGender();
        // Race
        const race = new Race();
        const origin = race.getOrigin();
        const raceArray = race.getRaceArray(); //passed drow check
        const dndRace = race.getRace();
        // Age
        const age = new Age(dndRace).getAge();
        // Profile
        const face = new Profile(
            dndRace,
            genderNouns,
            npcClass
        );
        this.face = face.getFace();
        // Name
        //name [requires a race]
        //$this->name = new Name(); the constructor requires 4 values
        // -> explore to make users enter their own name.
        //pass object to class method, allows to pass multiple properties
        // pass race to Name so it can sort what race naming class should be calles
        const name = new Name(
            dndRace, genderNouns,
            raceArray, age,
            origin
        );
        const firstname = name.getFirstname();
        const lastname = name.getLastname();
        const nickname = name.getNickname();
        const description = name.getDescription();
        // Body
        const body = new Body(dndRace, genderNouns);
        this.bodySize = body.getBodySize();
        this.bodyType = body.getBodyType();
        this.bodyShape = body.getBodyShape();
        this.body = body.getBody();


        // Construct object with properties of classes
        return {
            // class
            class: npcClass,
            // nouns
            gender: gender,
            manWoman:manWoman,
            heShe:heShe,
            hisHer:hisHer,
            // race
            dndRace: dndRace,
            origin:origin,
            raceArray:raceArray,
            // age
            age: age,
            // profile
            face: this.face,

            // Name

            // Body
            bodySize:this.bodySize,
            bodyType:this.bodyType,
            bodyShape:this.bodyShape,
            body:this.body,


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


