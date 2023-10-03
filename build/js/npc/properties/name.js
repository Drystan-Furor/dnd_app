import { RaceFactory } from '../races/factory/racefactory';

export class Name {
    constructor(race, genderNouns, age) {
        this.race = race;
        this.genderNouns = genderNouns;
        this.firstname = "Ernest"; // default
        this.nickname = "Gary";  // default
        this.lastname = "Gygax";  // default
        this.description = "was an American game designer and author best known for co-creating the pioneering role-playing game Dungeons & Dragons (D&D) with Dave Arneson.";  // default
        this.intro = "Ernest Gary Gygax was a legendary figure in the world of tabletop role-playing games. ";
        this.outfit = "Gary Gygax's contributions to the world of gaming are immeasurable, and his legacy continues to influence game designers and enthusiasts around the world. ";
    }

    getFirstname() {
        return this.firstname;
    }

    getLastname() {
        return this.lastname;
    }

    getNickname() {
        return this.nickname;
    }

    getDescription() {
        return this.description;
    }




}

/*
npc/
  ├── races/
  │   ├── factory/
  │   │   ├── racefactory.js
  │   ├── human/
  │   │   ├── human1.js
  │   │   ├── human2.js
  │   ├── elf/
  │   │   ├── elf1.js
  │   │   ├── elf2.js
  │   ├── index.js
  └── properties/
      └── name.js
 */