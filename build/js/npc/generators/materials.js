export class Material {
    static getMetalType() {
        const metals = [
            'silver', 'gold', 'bronze',
            'steel', 'copper', 'platinum',
            'iron',
        ];
        return metals[Math.floor(Math.random() * metals.length)];
    }

    static getPlateType() {
        const plating = [
            'lead', 'tin', 'copper', 'steel', 'cast-iron',
            'iron', 'metal', 'darkwood', 'stone', 'rock',
        ];
        return plating[Math.floor(Math.random() * plating.length)];
    }

    static getEnamelType() {
        const enameling = [
            'bronze', 'silver', 'platinum', 'gold', 'chrome', 'glass',
        ];
        return enameling[Math.floor(Math.random() * enameling.length)];
    }

    static getWoodType() {
        const wood = [
            'Oak', 'Pine', 'Beech', 'Birch', 'Cherry', 'Elm', 'Hawthorn', 'Juniper',
            'Mahogany', 'Maple', 'Poplar', 'Willow', 'Spruce', 'Chestnut', 'Fir',
            'Cypress', 'Redcedar', 'Hemlock',
        ];
        return wood[Math.floor(Math.random() * wood.length)];
    }

    static getGemstoneType() {
        const gemstones = [
            'stone of Onyx', 'gem of Emerald', 'black Sapphire', 'Sapphire', 'Diamond',
            'Ruby', 'garnet of Opal', 'Pearl', 'black Pearl', 'series of pearls',
            'blue Spinel', 'Turqoise', 'watery gold piece of Amber', 'crimson piece of Coral',
            'Tigers-eye', 'Pyrite', 'Star rose Quartz', 'blue Quartz', 'gray-black Hermatite',
            'dark green Malachite', 'Sardonyx', 'Zircon', 'Jasper', 'rock of Amethyst',
            'transparent fiery orange Jacinth',
        ];
        return gemstones[Math.floor(Math.random() * gemstones.length)];
    }

    static getJewelTone() {
        const jewelTones = [
            'black Onyx', 'green Emerald', 'blue Sapphire', 'white Diamond', 'red Ruby',
            "nature’s firework Opal", 'Pearlescent', 'black Pearlescent', 'blue Spinel',
            'blue-green Turqoise', 'watery gold  Amber', 'crimson Coral', 'Pyrite',
            'rose Quartz', 'blue Quartz', 'gray-black Hermatite', 'dark green Malachite',
            'Sardonyx', 'yellow-golden Zircon', 'red Zircon', 'blue-green Zircon',
            'brown, yellow- reddish Jasper', 'purple Amethyst', 'transparent fiery orange Jacinth',
        ];
        return jewelTones[Math.floor(Math.random() * jewelTones.length)];
    }
}

// Usage
const newMetal = Material.getMetalType();
const newPlate = Material.getPlateType();
const newEnamel = Material.getEnamelType();
const newWood = Material.getWoodType();
const newGemstone = Material.getGemstoneType();
const newJewelTone = Material.getJewelTone();
