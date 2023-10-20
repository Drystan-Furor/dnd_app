import {D} from "../../../tools/d";
import {getRandomElement} from "../../../tools/tools";
import {Terrain_features} from "./terrain_features";

export class Travel_montage {
    constructor(weather) {
        this.d20 = D._20();
        this._montage(this.d20, weather);
    }

    _montage(d20, weather) {
        let compass = getRandomElement(this.compassRose);
        let walk = getRandomElement(this.proceed);
        let explore = getRandomElement(this.explore);
        let environment1 = new Terrain_features._environment();
        let environment2 = new Terrain_features._environment();
        while (environment1 === environment2) {
            environment2 = new Terrain_features._environment();
        }


        let string = `${weather.wind} as you ${getRandomElement(this.proceed)} for (d4 + 1) ${(D._4 + 1)} miles 
        in ${getRandomElement(this.compassRose)}ern direction across the rolling plains. 
       ${explore} ${environment1} when you pass over ${Terrain_features._balcony()} that offers a 
       breathtaking view over ${Terrain_features._breathtaking_sight()}.
       ${weather.clouds} while you ${getRandomElement(this.proceed)} through ${environment2}.
       You take a break ${Terrain_features._landmark()}. 
       ${weather.temperature} ${this.continueTrip}.
       While ${getRandomElement(this.navigating)} onward you cross a

       `;

    }

    navigating = [
        `navigating`,
        `passing`,
        `moving`,
        `hiking`,
        `advancing`,
        `walking`,
        `travelling`,
    ];


    proceed = [
        `walk`,
        `travel`,
        `move`,
        `progress`,
        `navigate`,
        `hike`,
        `advance`,
        `make your way`,
    ];

    explore = [
        'You traverse through',
        'While traveling through',
        'As you explore',
        'You traverse',
        'While trekking through',
        'While making your way through',
        'As you move through',
        'As you venture through',
        'While progressing through',
        'While crossing through',
        'While navigating through',
        'As you hike through',
        'While advancing through',
        'As you proceed through',
        'While passing through',
        'As you travel through',
    ];

    compassRose = [
        `North`,
        `North-East`,
        `East`,
        `South-East`,
        `South`,
        `South-West`,
        `West`,
        `North-West`,
    ];

    continueTrip = [
        `when you continue your journey`,
        `as you press onward`,
        `when you resume your trek`,
        `while you carry on`,
        `as you continue your path`,
        `upon continuing your journey`,
        `when you move forward`,
        `as you proceed`,
        `once you keep going`,
        `as you march ahead`,
        `when you venture forth`,
        `while you advance further`,
        `as you walk on`,
        `once you push forward`,
        `as you proceed along your way`,
        `while you journey ahead`,
        `as you travel onward`,
    ];


    /*
            "You traverse through the enchanted forest, fireflies illuminate your path..."
        " the snow-capped mountains, the crisp air invigorates your senses..."
        " the sprawling desert, the relentless sun beats down..."
        */

}