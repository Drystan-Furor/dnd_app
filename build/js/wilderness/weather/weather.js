import {WeatherProperties} from "./weatherproperties";
import {Temperature} from "./properties";

export class Weather extends WeatherProperties{
    constructor() {
        super();
        this.weather = this._weatherDescription();
    }

    setDescription(description) {
        this.description = description;
    }

    _weatherDescription() {
        const temperatureClass = new Temperature();

        const temperature = temperatureClass.getTemperature();
        const temperatures = temperatureClass.getTemperatures();
        const clouds = null;
        const wind =  null;
        const precipitation =  null;

        const weather = temperature + clouds + wind + precipitation;
        return weather;
    }

}
