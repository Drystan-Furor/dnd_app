import {getRandomElement} from "../../../tools/tools";

export class Dungeon_lightsources {
    static _lightsources() {
        let lightsources = [
            "Torches mounted on the walls",
            "Brazier with burning coals",
            "Candles on holders",
            "Lanterns hanging from hooks",
            "Bioluminescent fungi",
            "Glowing crystals embedded in the walls",
            "Magical orbs floating in the air",
            "Flickering fire pits",
            "Phosphorescent moss",
            "Oil lamps on tables",
            "Glowing runes on the floor",
            "Skulls with candles inside",
            "Light filtering through cracks in the ceiling",
            "Glowing insects in jars",
            "Luminescent plants",
            "Magic fireflies in a cage",
            "Wizards' staff producing light",
            "Illuminated water in a fountain",
            "Ghostly lights hovering in the air",
            "Eyes of stone statues glowing",
            "Reflective mirrors channeling light from above",
            "Smoldering embers in a fire pit",
            "Light spell cast on an object",
            "Mimic torches that mimic real torches",
            "Floating lanterns"
        ];
        return getRandomElement(lightsources);
    }
}