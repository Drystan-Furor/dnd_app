export class NpcClass {
    constructor() {
        this.npcClass = this.generateClass();
    }

    // Array of Classes
    generateClass() {
        const npcClasses = [
            'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk',
            'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard',
        ];
        const randomIndex = Math.floor(Math.random() * npcClasses.length);
        return npcClasses[randomIndex];
    }

    // Getter
    getNpcClass() {
        return this.npcClass;
    }
}
