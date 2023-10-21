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
        this.precipitation = getRandomElement(this.precipitationString);
        this.effect = `Clear vision`;
        this.sight = `+/- 0 Passive Perception when relying on seeing`;
        this.weather = `dry weather`;

        if (d20 >= 13 && d20 <= 17) {
            //"Light rain or light snowfall";
            this.precipitation = `Unfortunately a light ${downfall} has begun to fall`;
            this.weather = `light ${downfall}`;
            this.effect = `The ${downfall} makes your sight a bit blurry in the distance.`;
            this.sight = `-2 Passive Perception when relying on seeing`;
        }

        if (d20 >= 18) {
            //"Heavy rain or heavy snowfall";
            this.precipitation = `Regrettably a heavy ${downfall} is beating down on you`;
            this.weather = `heavy ${downfall}`;
            this.effect = `The weather makes your surroundings lightly obscured.`;
            this.sight = `-5 Passive Perception when relying on seeing [Disadvantage on Wisdom(Perception)]`;
        }
    }

    precipitationString = [
        "At least it's dry weather",
        "There's no rain in sight",
        "There are clear skies above",
        "Dry weather continues",
        "There is no precipitation today",
        "You have rain-free conditions",
    ];

    getD20() {
        return this.d20
    }

    getPrecipitation() {
        return this.precipitation;
    }

    getWeather() {
        return this.weather;
    }

    getSight() {
        return this.sight;
    }

    getPrecipitationEffect(){
        return this.effect;
    }
}
