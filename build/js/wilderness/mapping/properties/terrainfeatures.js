import {getRandomElement, getRollOnTable} from "../../../tools/tools";
import {D} from "../../../tools/d";
import {Wild_magic_table} from "./wild_magic_table";

export class TerrainFeatures {
    static _environment() {
        let environment = [
            `a forest`,
            `a magical forest`,
            `a rolling plain`,
            `a meadow`,
            `a flowering meadow`,
            `a swamp`,
            `hills`,
            `grass plains`,
            `rolling plains`,
            `a mountain range`,
            `a coastal area`,
            `a cave system`,
            `an ancient ruin`,
            `a dense jungle`,
            `a tranquil meadow`,
            `a rocky canyon`,
            `a rolling prairie`,
            `a mysterious bog`,
            `a sun-drenched prairie`,
            `a dense thicket`,
            `a volcanic landscape`,
            `a wasteland`,
            ];
        return getRandomElement(environment);
    }

    static _breathtaking_sight() {

        let breathtaking_sight = [
            `the tops of surrounding trees`,
            `an area where a forest has burned`,
            `an area where a forest has been cut down`,
            `a waterfall`,
            `a floating island`,
            `a crystal-clear waterfall`,
            `a serene lakeside`,
            `a dense jungle canopy`,
            `a sprawling savanna plain`,
            `a misty moorland`,
            `misty mountains`,
            `a lonely mountain`,
            `several geysers`,
            `a field of colorful wildflowers`,
            `fields of colorful wildflowers`,
            `a hidden valley with lush vegetation`,
            `a shimmering oasis in the desert`,
            `a vibrant coral reef beneath clear waters`,
            `a majestic glacier stretching as far as the eye can see`,
            `a starry night sky filled with constellations`,
            `a massive, ancient tree with branches reaching the sky`,
            `a serene and tranquil beach at sunset`,
            `a field of bioluminescent mushrooms at night`,
            `a vast canyon with layered rock formations`,
            `a dense, mystical fog covering an eerie landscape`,
            `a serene and picturesque village nestled in the hills`,
            `a field of vibrant, otherworldly crystals`,
        ];

        return getRandomElement(breathtaking_sight);

    }

    static _balcony() {
        let balcony = [
            `a rocky outcropping`,
            `a cliffside overlook`,
            `a hilltop`,
            `a deep forest clearing`,
            `a sandy dune`,
            `a high mountain pass`,
            `a tranquil riverbank`,
            `a rugged canyon rim`,
            `a sunlit meadow`,
            `a coastal headland`,
            `a quiet marshland`,
            `a rolling grassy knoll`,
            `a volcanic crater's edge`,
        ];
        return getRandomElement(balcony);
    }

    static _landmark() {
        let landmark = [
            `under a lonely tree`,
            `beside a babbling brook`,
            `in the shade of ancient oaks`,
            `atop a sun-warmed boulder`,
            `by a crystal-clear stream`,
            `next to a blooming wildflower field`,
            `within a peaceful grove of pines`,
            `beside a tranquil pond`,
            `in a hidden valley embraced by hills`,
            `under a moss-covered rock ledge`,
            `by a pristine mountain lake`,
            `within a cozy meadow`,
            `beside a murmuring waterfall`,
            `in a sheltered alcove of cliffs`,
            `amongst the fragrant blossoms of a garden`,
            `beneath the grandeur of a giant redwood`,
        ];
        return getRandomElement(landmark);
    }

    static _weird_locale() {
        const d20 = D._20();
        const weirdLocales = [
            "dead magic zone (similar to an antimagic field)",
            `Wild Magic zone (Wild Magic Surge: ${Wild_magic_table.roll()})`,
            "boulder carved with talking faces",
            "crystal cave that mystically answers questions",
            "ancient tree containing a trapped spirit",
            "battlefield where lingering fog occasionally assumes humanoid forms",
            "permanent portal to another plane of existence",
            "wishing well",
            "giant crystal shard protruding from the ground",
            "haunted hill",
            "barrow mound",
            "river ferry guided by a skeletal captain",
            "field of petrified creatures",
            "field of petrified soldiers",
            "forest of petrified awakened trees",
            "canyon containing a dragons' graveyard",
            "floating earth mote with a tower on it"
        ];

        return getRollOnTable(d20, weirdLocales);
    }

    static _monument() {
        const d20 = D._20();
        const sealedOrPlundered = [
            `sealed`,
            `plundered`,
        ];
        const pyramidOrMound = [
            `pyramid`,
            `burial mound`,
        ];
        const mountainsideOrCliff = [
            `mountainside`,
            `cliff`,
        ];
        const etching = [
            `warning`,
            `historical lore`,
            `dedication`,
            `religious iconography`,
        ];
        const brokenOrIntact = [
            `ruined`,
            `toppled`,
            `intact`,
            `crumbling`,
        ];
        const personORDeity = [
            `person`,
            `deity`,
        ];
        const building = [
            `obelisk`,
            `fountain`,
            `statue of a ${getRandomElement(personORDeity)}`,
            `great stone arch`,
            `circle of standing stones`,
            `totem pole`,
            `temple`,
        ];

        const monuments = [
            `a ${getRandomElement(sealedOrPlundered)} ${getRandomElement(pyramidOrMound)}`,
            `a ${getRandomElement(sealedOrPlundered)} ${getRandomElement(pyramidOrMound)}`,
            `a ${getRandomElement(sealedOrPlundered)} ${getRandomElement(pyramidOrMound)}`,
            `a ${getRandomElement(sealedOrPlundered)} ${getRandomElement(pyramidOrMound)}`,
            `faces carved into a ${getRandomElement(mountainsideOrCliff)}`,
            `giant statues carved out of a ${getRandomElement(mountainsideOrCliff)}`,
            `a ${getRandomElement(brokenOrIntact)} ${getRandomElement(building)} etched with a ${getRandomElement(etching)}`,
            `a ${getRandomElement(brokenOrIntact)} ${getRandomElement(building)} etched with a ${getRandomElement(etching)}`,
            `a ${getRandomElement(brokenOrIntact)} ${getRandomElement(building)} etched with a ${getRandomElement(etching)}`,
            `a ${getRandomElement(brokenOrIntact)} ${getRandomElement(building)} etched with a ${getRandomElement(etching)}`,
            `a ${getRandomElement(brokenOrIntact)} ${getRandomElement(building)} etched with a ${getRandomElement(etching)}`,
            `a ${getRandomElement(brokenOrIntact)} ${getRandomElement(building)} etched with a ${getRandomElement(etching)}`,
            `a ${getRandomElement(brokenOrIntact)} ${getRandomElement(building)}`,
            `a ${getRandomElement(brokenOrIntact)} ${getRandomElement(building)}`,
            `a ${getRandomElement(brokenOrIntact)} ${getRandomElement(building)}`,
            `a ${getRandomElement(brokenOrIntact)} ${getRandomElement(building)}`,
            `a ${getRandomElement(brokenOrIntact)} ${getRandomElement(building)}`,
            `a ${getRandomElement(brokenOrIntact)} ${getRandomElement(building)}`,
            `a ${getRandomElement(brokenOrIntact)} ${getRandomElement(building)}`,
            `a great stone wall, intact, with tower fortifications spaced at one-mile intervals`,
            `a great stone wall in ruins`,
        ];

        return getRollOnTable(d20, monuments);
    }


}