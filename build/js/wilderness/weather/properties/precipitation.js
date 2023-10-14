import {getRandomElement} from "../../../tools/tools";
import {D} from "../../../tools/d";

export class Precipitation {
    constructor(temperatures) {
        this.d20 = D._20();
        this._precipitation(temperatures, this.d20);
    }

    _precipitation(temperatures, d20) {
        let downfall = ['rain'];
        // If it's colder, add 'snow' to the array
        if (temperatures >= 15 && temperatures <= 17) {
            downfall.push('snow');
        }

        downfall = getRandomElement(downfall);
        //"None" if ($precipitations <= 12)
        const precipitation = [
            "At least it's dry for now",
            "No rain in sight",
            "Clear skies above",
            "Dry weather continues",
            "No precipitation today",
            "Rain-free conditions",
        ];
        this.precipitation = getRandomElement(precipitation);
        this.effect = ``;

        if (d20 >= 13 && d20 <= 17) {
            //"Light rain or light snowfall";
            this.precipitation = `Unfortunately a light ${downfall} has begun to fall`;
            this.effect = `The ${downfall} makes your sight a bit blurry in the distance. [-2 Passive Perception when relying on seeing] `;
        }

        if (d20 >= 18) {
            //"Heavy rain or heavy snowfall";
            this.precipitation = `Regrettably a heavy ${downfall} is beating down on you`;
            this.effect = `The weather makes your surroundings lightly obscured.
            [-5 Passive Perception when relying on seeing] [Disadvantage on Wisdom(Perception)] `;
        }


    }

    getPrecipitationD20() {
        return this.d20
    }

    getPrecipitation() {
        return this.precipitation;
    }

    getPrecipitationEffect(){
        return this.effect;
    }
}
