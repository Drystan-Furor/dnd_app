import {getRandomElement} from "../../../tools/tools";

export class Dungeon_statblock_summary {

    static _setVision() {
        const visibilityConditions = [
            "Pitch black with no light sources",
            "Dimly lit by flickering torches",
            "Brightly illuminated by magical orbs",
            "Softly glowing crystals embedded in the walls",
            "Darkness pierced by occasional shafts of light",
            "Eerie glow from phosphorescent fungi",
            "Gloomy with intermittent flashes of light",
            "Faint bioluminescence from moss on the walls",
            "Shadowy with distant, unsteady light",
            "Alternating patches of light and darkness",
            "Mist-covered with ghostly light",
            "Dark with sporadic bursts of magical illumination",
            "Soft light from enchanted sconces",
            "Murky with faint, ambient light",
            "Smoky with dim light filtering through",
            "Hazy with a dull glow from magical runes",
            "Glimmering light from a distant, unknown source",
            "Obscured visibility with shadowy corners",
            "Glowing embers casting a faint light",
            "Twilight-like ambiance with soft, diffused light"
        ];

        return getRandomElement(visibilityConditions);
    }

    static _setLockDescription() {
        const lockDescriptions = [
            "Rusty iron locks that are difficult to open",
            "Intricately designed locks with complex mechanisms",
            "Ancient wooden locks reinforced with metal bands",
            "Magical locks that glow faintly with enchantment",
            "Heavy padlocks with thick chains",
            "Hidden locks concealed within the door's design",
            "Simple but sturdy locks made of brass",
            "Locks with multiple keyholes requiring different keys",
            "Locks protected by arcane wards and runes",
            "Locks that emit a soft click when opened",
            "Massive steel locks that seem almost indestructible",
            "Locks covered in vines and moss, blending with the surroundings",
            "Locks with mysterious symbols etched on their surface",
            "Futuristic locks with biometric scanners",
            "Locks with a combination mechanism instead of a key",
            "Locks that seem to change their configuration periodically",
            "Old-fashioned locks with large, ornate keys",
            "Locks that are trapped, punishing any failed attempts",
            "Locks with a time-based mechanism that unlocks at certain hours",
            "Locks forged from dark, unidentifiable metal",
            "Enchanted locks that respond to specific spells",
            "Locks with a hidden release mechanism nearby",
            "Locks that hum with a low, ominous frequency",
            "Locks reinforced with magical barriers",
            "Locks that require a secret phrase to open"
        ];

        return getRandomElement(lockDescriptions);
    }

    static _setSecretDescription() {
        const secretDescriptions = [
            "Many secrets, all hidden in plain sight and easily discovered",
            "Few secrets, but each one is extremely difficult to uncover",
            "Common secrets that are mundane but plentiful",
            "Magical secrets that require specific spells to reveal",
            "A few well-hidden secrets that blend seamlessly with the surroundings",
            "Numerous secrets, some magical, scattered throughout the dungeon",
            "Secrets protected by ancient magic, requiring knowledge of old spells",
            "Easily found secrets that provide small but helpful insights",
            "Hidden compartments with common but useful items",
            "Magical traps guarding rare and powerful secrets",
            "Obvious secrets meant to mislead from more important ones",
            "A labyrinth of secrets, each one leading to another",
            "Secrets that are only revealed at certain times or under specific conditions",
            "Magical wards concealing powerful artifacts",
            "Common secrets in false walls and under floorboards",
            "Secrets disguised as ordinary objects, difficult to distinguish",
            "Many mundane secrets with a few rare magical ones",
            "Secrets requiring riddles to be solved for access",
            "Few secrets, each holding significant power or information",
            "Magical illusions hiding secrets in plain sight",
            "Secrets protected by guardians or traps",
            "Common secrets that give clues to larger, more important ones",
            "A network of hidden passages and rooms filled with secrets",
            "Magical secrets that require specific items to unlock",
            "Obvious secrets that serve as distractions from the true ones"
        ];

        return getRandomElement(secretDescriptions);
    }

    static _setHazardDescription() {
        const hazardDescriptions = [
            "Brown mold that feeds on warmth, drawing heat from anything around it",
            "Green slime that dissolves flesh, organic material, and metal on contact",
            "Giant spider webs that entangle creatures and pose a significant obstacle",
            "Yellow mold that releases a cloud of poisonous spores when disturbed",
            "Pitfalls hidden by a thin layer of dirt or leaves",
            "Collapsing ceilings triggered by pressure plates",
            "Poisonous gas that fills the air when a seal is broken",
            "Rushing water from underground streams that can flood passages",
            "Spiked pits covered with camouflaging materials",
            "Explosive runes that detonate when read or tampered with",
            "Quicksand-like patches of loose earth",
            "Swarming insects that bite and distract adventurers",
            "Falling boulders triggered by tripwires",
            "Flammable gas pockets that ignite with open flames",
            "Diseased rats carrying dangerous plagues",
            "Venomous snakes hiding in crevices",
            "Blinding spores released by certain fungi",
            "Enchanted mirrors that trap souls",
            "Rooms that slowly fill with sand or water",
            "Heatless, magical flames that cause severe burns",
            "Illusionary walls hiding dangerous traps",
            "Patches of ice making floors extremely slippery",
            "Areas of extreme cold that sap the strength from those who linger",
            "Swarms of bats that obscure vision and confuse adventurers",
            "Aggressive fungi that release toxic spores",
            "Pits filled with acid",
            "Pressure plates triggering arrow traps",
            "Enchanted objects that curse those who touch them",
            "False floors dropping into deep chasms",
            "Telekinetic traps that hurl objects at intruders"
        ];

        return getRandomElement(hazardDescriptions);
    }

    static _setMoodDescription() {
        const moodDescriptions = [
            "An old crypt with stone walls, loose wooden doors, and an odor of decay",
            "A volcanic lair with smooth stone walls, doors of magically reinforced brass, and a smell of sulfur",
            "A damp and musty cave with the sound of dripping water echoing through the halls",
            "An abandoned mine with rusty tools scattered around and the distant sound of creaking wood",
            "A lavish underground palace with marble floors, golden fixtures, and a lingering scent of incense",
            "A haunted mausoleum with cold stone floors, eerie whispers, and ghostly apparitions",
            "A flooded dungeon with waist-deep water, slippery stone floors, and the smell of mold",
            "A magical laboratory with glowing runes on the walls, bubbling potions, and an aura of arcane energy",
            "A forgotten temple with overgrown vines, crumbling statues, and an air of reverence",
            "A fortress with thick stone walls, iron doors, and the scent of burning torches",
            "An underground forest with bioluminescent plants, chirping insects, and a fresh earthy smell",
            "A maze of catacombs with narrow passageways, flickering candles, and an unsettling quiet",
            "A bustling underground market with colorful stalls, loud merchants, and the smell of exotic spices",
            "A royal crypt with ornate sarcophagi, rich tapestries, and the faint scent of preserved flowers",
            "A treacherous labyrinth with shifting walls, hidden traps, and a pervasive sense of danger",
            "A serene underground lake with crystal-clear water, gentle waves, and a calming atmosphere",
            "A subterranean city with bustling streets, tall buildings, and the smell of street food",
            "A decrepit asylum with peeling paint, rusted bars, and an oppressive, haunting atmosphere",
            "An enchanted grotto with sparkling waterfalls, glowing crystals, and a magical ambiance",
            "A desolate ruin with broken pillars, scattered debris, and a feeling of lost grandeur",
            "A pirate hideout with wooden planks, barrels of rum, and the scent of saltwater",
            "A cursed dungeon with dark magic symbols, chilling drafts, and a sense of foreboding",
            "A knight's barracks with training dummies, weapon racks, and the smell of sweat and metal",
            "A mystical cave with colorful gemstones, echoing chants, and a spiritual aura",
            "An industrial forge with clanging metal, hot furnaces, and the smell of molten ore",
            "A dragon's lair with scorched walls, piles of treasure, and a heavy, smoky atmosphere",
            "A royal tomb with jeweled coffins, silent guards, and an air of solemnity",
            "A shadowy hideout with hidden alcoves, muffled voices, and a sense of conspiracy",
            "A frozen cavern with icy floors, frost-covered walls, and a biting cold",
            "A desert tomb with sandy floors, ancient hieroglyphs, and a dry, arid feel"
        ];

        return getRandomElement(moodDescriptions);


    }
}