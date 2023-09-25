import {NpcClass} from "../properties/class";
import {Race} from "../properties/race";
import {Gender} from "../properties/gender";
import {Age} from "../properties/age";

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
        const race = new Race().getRace();
        const npcClass = new NpcClass().getNpcClass();
        const gender = new Gender().getGender();
        const age = new Age(race).getAge();

        // Construct object with properties of classes
        return {
            race: race,
            class: npcClass,
            gender: gender,
            age: age,
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


