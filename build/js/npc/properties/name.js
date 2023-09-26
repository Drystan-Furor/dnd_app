import { RaceFactory } from '../races/factory/racefactory';

export class Name {
    constructor(race, genderNouns, raceArray, age, origin) {
        this.race = race;
        this.genderNouns = genderNouns;
        this.firstname = "Ernest"; // default
        this.nickname = "Gary";  // default
        this.lastname = "Gygax";  // default
        this.description = "was an American game designer and author best known for co-creating the pioneering role-playing game Dungeons & Dragons (D&D) with Dave Arneson.";  // default
        // this._generateName(race, genderNouns, raceArray, age, origin); // dynamic
    }

    // _generateName(race, genderNouns, array, age, origin) {
    //     //  let stringOfDnDRace = Race.lowercase(dndrace.getRace()); // e.g., "dragonborn"
    //     // if (Homebrew.isHomebrew(dndrace.getRace(), array)) {
    //     //     raceName = Race.setHeritage();
    //     // } else {
    //     //     raceName = dndrace.getRace();
    //     // }
    //     try {
    //         this.firstname = name.getFirstname();
    //         this.nickname = name.getNickname();
    //         this.lastname = name.getLastname();
    //         this.description = name.getDescription();
    //     } catch (error) {
    //         console.error(error);
    //     }
    //     return {
    //         firstname: this.firstname,
    //         lastname: this.lastname,
    //         nickname: this.nickname,
    //         description: this.description,
    //     }
    // }

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