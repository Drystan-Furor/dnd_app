import {getRandomElement} from "../../../tools/tools";

export class Dungeon_location {

    // d100 location
    static _location() {
        let environment = [
            `A building in a city`,
            `Catacombs or sewers beneath a city`,
            Dungeon_location._beneathLocation(),
            Dungeon_location._inLocation(),
            `On top of a mesa`,
            `In sea caves`,
            `In several connected mesas`,
            `On a mountain peak`,
            `On a promontory`,
            `On an island`,
            `Underwater`,
            Dungeon_location._exoticLocation(), // 96 - 100 = exotic:
        ];
        return getRandomElement(environment);
    }

    // d20 exotic location
    static _exoticLocation() {
        let location = [
            `Among the branches of a tree`,
            `Around a geyser`,
            `Behind a waterfall`,
            `Buried in an avalanche`,
            `Buried in an sandstorm`,
            `Buried in volcanic ash`,
            Dungeon_location._castleOrStructure() + " in a swamp",
            Dungeon_location._castleOrStructure() + " at the bottom of a sinkhole",
            Dungeon_location._inExoticLocation,
            Dungeon_location._onExoticLocation,
            `Floating on the sea`,
            `On the back of a Gargantuan living creature`,
            `Sealed inside a magical dome of force`,
            `Inside a Mordenkainen's magnificent mansion`,
        ];
        return getRandomElement(location);
    }

    // beneath locations
    static _beneathLocation() {
        let beneath = [
            `farmhouse`,
            `graveyard`,
            `ruined castle`,
            `ruined city`,
            `temple`,
            `mesa`,
        ];
        return "Beneath a " + getRandomElement(beneath);
    }

    // IN locations: Ïn a ..."
    static _inLocation() {
        let location = [
            `chasm`,
            `cliff face`,
            `desert`,
            `forest`,
            `glacier`,
            `gorge`,
            `jungle`,
            `mountain pass`,
            `swamp`,
        ];
        return "In a" + getRandomElement(location);
    }

    static _castleOrStructure() {
        let castleOrStructure = [
            `Castle`,
            `Structure`,
        ];
        return getRandomElement(castleOrStructure);
    }

    static _inExoticLocation() {
        let location = [
            ` volcano`,
            ` meteorite`,
            ` pocket dimension`,
            `n area devestated by a magical catastrophe`,
        ];
        return "In a" + getRandomElement(location);
    }

    static _onExoticLocation() {
        let location = [
            ` demiplane`,
            ` cloud`,
            `n island in an underground sea`,
        ];
        return "On a"  + getRandomElement(location);
    }

}