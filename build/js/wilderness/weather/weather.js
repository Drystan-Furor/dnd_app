import {Clouds, Precipitation, Temperature, Wind} from "./properties";

export class Weather{
    constructor() {
        this._weatherDescription();
    }

    _weatherDescription() {
        const temperature = new Temperature();
        const precipitation = new Precipitation(temperature.getD20());
        const wind = new Wind();
        const clouds = new Clouds(precipitation.getD20());

        return {
            temperature: temperature.getTemperature(),
            temperatureDescription: temperature.getTemperatureDescription(),
            temperatureEffect: temperature.getTemperatureEffect(),
            temperatureExact: temperature.getExactTemperature(),
            temperatureD20: temperature.getD20(),

            precipitation: precipitation.getPrecipitation(),
            precipitationWeather: precipitation.getWeather(),
            precipitationEffect: precipitation.getPrecipitationEffect(),
            precipitationSight: precipitation.getSight(),
            precipitationD20: precipitation.getD20(),


            wind: wind.getWind(),
            windEffect: wind.getWindEffect(),
            windPower: wind.getWindPower(),
            windImpact: wind.getWindImpact(),
            windSpeed: wind.getWindSpeed(),
            windD20: wind.getD20(),

            clouds: clouds.getClouds(),
        }
    }
}
