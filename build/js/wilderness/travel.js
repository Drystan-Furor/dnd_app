import {Weather} from "./weather/weather";
import {rand} from "../tools/tools";
import {D} from "../tools/d";
import {Journey} from "./mapping/journey";

export class DndWtdRng {
    constructor() {
        this.travel = this._dndWtdRng();
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
        console.log(this.weather) // returns object
        this.journey = new Journey()._travelDescription(this.weather);


        // Construct object with properties of classes
        return {
            // iD
            id: rand(1000, 9999),
            // class
            temperature: this.weather.temperature,
            temperatureDescription: this.weather.temperatureDescription,
            temperatureEffect: this.weather.temperatureEffect,
            temperatureExact: this.weather.temperatureExact,
            temperatureD20: this.weather.temperatureD20,

            precipitation: this.weather.precipitation,
            precipitationWeather: this.weather.precipitationWeather,
            precipitationSight: this.weather.precipitationSight,
            precipitationEffect: this.weather.precipitationEffect,
            precipitationD20: this.weather.precipitationD20,

            wind: this.weather.wind,
            windD20: this.weather.windD20,
            windEffect: this.weather.windEffect,
            windPower: this.weather.windPower,
            windImpact: this.weather.windImpact,
            windSpeed: this.weather.windSpeed,

            clouds: this.weather.clouds,

            journey1: this.journey.journey.montage_1,
            journey2: this.journey.journey.montage_2,
            journey3: this.journey.journey.montage_3,
        };
    }

    _writeStory(travel) { // Pass 'travel' as an argument
        let string1 = `${travel.temperatureExact} || ${travel.windPower} || ${travel.windSpeed} || ${travel.precipitationWeather} `;
        let string2 = `${travel.temperatureDescription} || ${travel.windImpact} || ${travel.precipitationEffect}`;
        let string3 = `${travel.temperatureEffect} || ${travel.windEffect} || ${travel.precipitationSight}`;
        let string4 = `${travel.temperature} || ${travel.wind} || ${travel.clouds} || ${travel.precipitation}`;

        console.log(travel.journey)
        let journey1 = `${travel.journey1}`;
        let journey2 = `${travel.journey2}`;
        let journey3 = `${travel.journey3}`;

        let temperature = `${travel.temperature}`;
        let temperatureDescription = `${travel.temperatureDescription}`;
        let temperatureEffect = `${travel.temperatureEffect}`;
        let temperatureExact = `${travel.temperatureExact}`;
        let TEM = `d20 (${travel.temperatureD20})`;

        let clouds = `${travel.clouds}`;
        let CLO = `d20 (${D._20()})`;


        let wind = `${travel.wind}`;
        let windEffect = `${travel.windEffect}`;
        let windPower = `${travel.windPower}`;
        let windImpact = `${travel.windImpact}`;
        let windSpeed = `${travel.windSpeed}`;
        let WIN = `d20 (${travel.windD20})`;

        let precipitation = `${travel.precipitation}`;
        let precipitationWeather = `${travel.precipitationWeather}`;
        let precipitationSight = `${travel.precipitationSight}`;
        let precipitationEffect = `${travel.precipitationEffect}`;
        let PRE = `d20 (${travel.precipitationD20})`;

        return {
            string1, string2, string3, string4,
            temperature,
            temperatureDescription,
            temperatureEffect,
            temperatureExact,
            TEM,

            clouds,
            CLO,

            wind,
            windEffect,
            windPower,
            windImpact,
            windSpeed,
            WIN,

            precipitation,
            precipitationWeather,
            precipitationSight,
            precipitationEffect,
            PRE,

            journey1,
            journey2,
            journey3,
        };
    }
}
