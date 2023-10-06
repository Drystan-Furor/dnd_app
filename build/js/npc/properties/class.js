export class NpcClass {
    constructor() {
        this.npcClass = this.generateClass();
    }

    // Array of Classes
    generateClass() {
        const npcClasses = [
            'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Artificer',
            'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard',
        ];
        const randomIndex = Math.floor(Math.random() * npcClasses.length);
        return npcClasses[randomIndex];
    }

    getNpcClass() {
        return this.npcClass;
    }
}
