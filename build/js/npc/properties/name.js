import { RaceFactory } from '../races/factory/racefactory';

export class Name {
    constructor(race, genderNouns, raceArray, age, origin) {
        this.race = race;
        this.genderNouns = genderNouns;
        this.firstname = "Ernest"; // default
        this.nickname = "Gary";  // default
        this.lastname = "Gygax";  // default
        this.description = "was an American game designer and author best known for co-creating the pioneering role-playing game Dungeons & Dragons (D&D) with Dave Arneson.";  // default
    }

    static initializeProperties(context, dndRace, genderNouns) {
        context.lastname = context._lastname();
        context.firstname = context._firstname(genderNouns);
        context.nickname = context._nickname();
        context.description = context._description(dndRace, genderNouns);
    }

    static lowercase(string) {
        return string.toLowerCase().replace(/[-\s]/g, '');
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