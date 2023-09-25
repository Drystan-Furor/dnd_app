class Name {
    constructor(dndrace, new_npc, array, age, origin) {
        this.firstname = "Ernest";
        this.nickname = "Gary";
        this.lastname = "Gygax";
        this.description = "was an American game designer and author best known for co-creating the pioneering role-playing game Dungeons & Dragons (D&D) with Dave Arneson.";

        this.biography = this._generateName(dndrace, new_npc, array, age, origin);
    }

    _generateName(dndrace, new_npc, array, age, origin) {
        let raceName;
        if (Homebrew.isHomebrew(dndrace.getRace(), array)) {
            raceName = Race.setHeritage(); // Assuming Race is another class or object with a method setHeritage
        } else {
            raceName = dndrace.getRace();
        }

        raceName = Race.lowercase(raceName); // Assuming Race is another class or object with a method lowercase
        const raceInstance = new raceName(dndrace, new_npc, array, age, origin); // Creating an instance of the raceName class

        this.lastname = raceInstance.getLastname();
        this.firstname = raceInstance.getFirstname();
        this.nickname = raceInstance.getNickname();
        this.description = raceInstance.getDescription();
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

// Usage
// const nameInstance = new Name(dndrace, new_npc, array, age, origin);
// console.log(nameInstance.getFirstname());
