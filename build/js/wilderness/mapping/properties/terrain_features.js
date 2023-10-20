import {getRandomElement} from "../../../tools/tools";
import {D} from "../../../tools/d";

export class Terrain_features {

    static _environment() {
        let environment = [
            `a forest`,
            `a plain`,
            `a meadow`,
            `a flowering meadow`,
            `a swamp`,
            `hills`,
            `fields`,
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
        let string;
        switch (d20) {
            case 1:
            case 2:
                string = `dead magic zone (similar to an antimagic field)`;
                break;
            case 3:
                string = `Wild Magic zone (Wild Magic Surge: )`; // magic surge
                break;
            case 4:
                string = `boulder carved with talking faces`;
                break;
            case 5:
                string = `crystal cave that mystically answers questions`;
                break;
            case 6:
                string = `ancient tree containing a trapped spirit`;
                break;
            case 7:
            case 8:
                string = `battlefield where lingering fog occasionally assumes humanoid forms`;
                break;
            case 9:
            case 10:
                string = `permanent portal to another plane of existence`;
                break;
            case 11:
            case 12:
                string = `wishing well`;
                break;
            case 13:
                string = `giant crystal shard protruding from the ground`;
                break;
            case 14:
            case 15:
                string = `haunted hill or barrow mound`;
                break;
            case 16:
                string = `river ferry guided by a skeletal captain`;
                break;
            case 17:
                string = `field of petrified soldiers or other creatures`;
                break;
            case 18:
                string = `forest of petrified awakened trees`;
                break;
            case 19:
                string = `canyon containing a dragons' graveyard`;
                break;
            case 20:
            default:
                string = `floating earth mote with a tower on it`;
                break;
        }
        return string;
    }

}