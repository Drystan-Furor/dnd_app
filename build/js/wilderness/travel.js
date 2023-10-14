import {Weather} from "./weather/weather";
import {rand} from "../tools/tools";
export class DndWtdRng {
    constructor() {
        this.travel = this._dndWtdRng();
        console.log(this.travel);
        this.string = this._writeStory(this.travel);
    }

    getTravel() {
        return this.travel;
    }

    getStory() {
        return this.string;
    }

    _dndWtdRng() {
        // Initialize the properties and classes
        this.weather = new Weather()._weatherDescription();

        // Construct object with properties of classes
        return {
            // iD
            id: rand(1000, 9999),
            // class
            temperature: this.weather.temperature,
            temperatureDescription: this.weather.temperatureDescription,
            temperatureEffect: this.weather.temperatureEffect,

            precipitation: this.weather.precipitation,
            precipitationEffect: this.weather.precipitationEffect,

            wind: this.weather.wind,
            windEffect: this.weather.windEffect,

            clouds: this.weather.clouds,
        };
    }

    _writeStory(travel) { // Pass 'travel' as an argument
        console.log(travel);
        // description
        let string1 = `${travel.temperature} ${travel.precipitation}. ${travel.clouds} ${travel.wind} `;
        // appearance
        let string2 = `${travel.temperatureDescription}`;
        // attire
        let string3 = `${travel.temperatureEffect} ${travel.precipitationEffect} ${travel.windEffect}`;
        return {
            string1, string2, string3
        };
    }
}
