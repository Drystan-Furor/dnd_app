import {Clouds, Precipitation, Temperature, Wind} from "./properties";

export class Weather{
    constructor() {
        this._weatherDescription();
    }

    _weatherDescription() {
        const temperatureClass = new Temperature();
        const temperaturesD20 = temperatureClass.getTemperaturesD20();
        const precipitation = new Precipitation(temperaturesD20);
        const precipitationD20 = precipitation.getPrecipitationD20();

        const wind = new Wind();
        const clouds = new Clouds(precipitationD20);

        return {
            temperature: temperatureClass.getTemperature(),
            temperatureDescription: temperatureClass.getTemperatureDescription(),
            temperatureEffect: temperatureClass.getTemperatureEffect(),

            precipitation: precipitation.getPrecipitation(),
            precipitationEffect: precipitation.getPrecipitationEffect(),

            wind: wind.getWind(),
            windEffect: wind.getWindEffect(),

            clouds: clouds.getClouds(),
        }
    }
}
