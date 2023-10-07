
export class WeatherProperties {


    getWeather() {
        return this.weather;
    }
    getWind() {
        return this.wind;
    }

    getClouds() {
        return this.clouds;
    }

    getTemperature() {
        return this.temperature;
    }

    getPrecipitation() {
        return this.precipitation;
    }

    setWeather(custom) {
        this.weather = custom;
    }
    setWind(custom) {
        this.wind = custom;
    }

    setClouds(custom) {
        this.clouds = custom;
    }

    setTemperature(custom) {
        this.temperature = custom;
    }

    setPrecipitation(custom) {
        this.precipitation = custom;
    }

    setDescription(description) {
        this.description = description;
    }

}
