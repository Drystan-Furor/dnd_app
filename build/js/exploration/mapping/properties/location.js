import {getRandomElement} from "../../../tools/tools";

export class Location {

    // d100 location
    static _location() {
        let environment = [
            `A building in a city`,
            `Catacombs or sewers beneath a city`,
            Location._beneathLocation(),
            Location._inLocation(),
            `On top of a mesa`,
            `In sea caves`,
            `In several connected mesas`,
            `On a mountain peak`,
            `On a promontory`,
            `On an island`,
            `Underwater`,
            Location._exoticLocation(), // 96 - 100 = exotic:
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
            Location._castleOrStructure() + " in a swamp",
            Location._castleOrStructure() + " at the bottom of a sinkhole",
            Location._inExoticLocation,
            Location._onExoticLocation,
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