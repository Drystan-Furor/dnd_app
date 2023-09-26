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

        //name [requires a race]
        //the constructor requires 4 values
        // -> explore to make users enter their own name.
        // pass object to class method, allows to pass multiple properties
        // pass race to Name so it can sort what race naming class should be calles
        const name = new Name(
            this.dndRace, genderNouns,
            this.raceArray, this.age,
            this.origin
        );
        this.firstname = name.getFirstname();
        this.lastname = name.getLastname();
        this.nickname = name.getNickname();
        this.description = name.getDescription();


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
            firstname:this.firstname,
            lastname:this.lastname,
            nickname:this.nickname,
            description:this.description,
            // ... other properties ...
            // const subject = Sentence.subject()
        };
    }



    _writeStory(npc) { // + " " +
        // biography
        let string = "You meet " + npc.firstname + " " + npc.lastname + ". ";
        string = string + "A " + npc.bodySize + " " + npc.gender + " " + npc.dndRace + " " + npc.class
            + " " + "that's about " + npc.age + " years old. " + " " + ucfirst(npc.intro) + ". "
            + npc.firstname + " " + npc.description;


        return string;
    }


}

function ucfirst(str) {
    if(!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/*
 $string =  "You meet " . $this->firstname . " " . $this->lastname . ". ";
  $string .= "A " . $this->size . " " . $this->gender . " " . $this->dndrace  . " " . $this->npcClass
    . " thats about " . $this->age . " years old. " . ucfirst($this->intro) .
    $this->description . " " .
 */

/*
  //BioName
        $string =  "You meet " . $this->firstname . " " . $this->lastname . ". ";
        //BioGenderRaceAge
        //--BODY GENDER AGE WEALTH DIVERGENCE
        /*
        A medium sized female Drow Druid thats about 46 years old, who looks priviliged.
        {bodysize}   {noun}{race}{class}          {age}           {prosperity intro}

    $string .= "A " . $this->size . " " . $this->gender . " " . $this->dndrace  . " " . $this->npcClass
    . " thats about " . $this->age . " years old. " . ucfirst($this->intro) .
    $this->description . " " .
    //-----------------------------facial construction
    You SEE this MAN has NOSE.
    The RACE meets your gaze with EYES
    As you seize up the MAN you SEE HE has CHIN
    and HIS mouth is set with MOUTH.

    $this->face . ". " .

    //------------------------------see scars
    $this->scar1 .
    $this->scar2 .
    $this->scar3 .

    //------------------------------see body
    $this->body . ". " .
    //------------------------------see outfit
    $this->outfit .
    //------------------------------see mood
    $this->mood . " " .
    //------------------------------see weapon
    $this->weapon . ". " . PHP_EOL;

return $string;
 */
