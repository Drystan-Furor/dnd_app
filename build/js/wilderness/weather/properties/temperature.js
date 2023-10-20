import {D} from "../../../tools/d";
import {getRandomElement, rand} from "../../../tools/tools";

export class Temperature {
    constructor() {
        this.d20 = D._20();
        this._temperature(this.d20);
    }

    _temperature(d20) {
        let celsius = rand(0, 30);
        let fahrenheit = Temperature._celsiusToFahrenheit(celsius);
        this.exactTemperature = `°${fahrenheit} Fahrenheit (°${celsius} Celsius)`;
        this.temperature = getRandomElement(this.temperatureDefault);
        this.description = `it's between ${Math.round(((0) * 5 / 9) + 32)} and 
        ${Math.round(((30) * 5 / 9) + 32)} Fahrenheit (0 to 30 degrees Celsius)`;
        this.effect = getRandomElement(this.defaultEffect);


        if (d20 >= 15 && d20 <= 17) {
            this.temperature = D._4() * 10 + " degrees Fahrenheit colder than normal";
            this.description = "it's between 32 and -8 Fahrenheit (0 to -22 degrees Celsius) or lower";
            this.effect = `[Constitution Saving Throw (DC ${D._20()})] {DEFAULT DC10} or [Gain one level of Exhaustion].
             (This does not apply if a creature has resistance or immunity to cold damage, wears cold weather gear, 
             or is adapted to cold climates).`;

            celsius = rand(-22, 0);
            fahrenheit = Temperature._celsiusToFahrenheit(celsius);
            this.exactTemperature = `°${fahrenheit} Fahrenheit (°${celsius} Celsius)`;
        }
        if (d20 >= 18) {
            this.temperature = D._4() * 10 + " degrees Fahrenheit hotter than normal";
            this.description = "it's 86 Fahrenheit (30 degrees Celsius) or hotter";
            this.effect = `If creatures are exposed to the heat and have no access to drinkable water they must: succeed on 
            [Constitution Saving Throw (DC ${D._20()})] {DEFAULT DC5} each hour. 
            The DC is 5 for the first hour and increases by 1 each additional hour. 
            Creatures in medium or heavy armor, or heavy clothing have Disadvantage on the Saving Throw. 
            Creatures with resistance or immunity to fire damage or adapted to the climate automatically succeed 
            on the Saving Throw.`;

            celsius = rand(30, 52);
            fahrenheit = Temperature._celsiusToFahrenheit(celsius);
            this.exactTemperature = `°${fahrenheit} Fahrenheit (°${celsius} Celsius)`;
        }

        this.temperature = "The temperature is " + this.temperature;
    }

    temperatureDefault = [
        `normal for the season`,
        `average for this time of year`,
        `typical for today's date`,
        `consistent with seasonal expectations`,
        `standard for the current month`,
        `in line with what you'd expect for this season`,
        `neither too hot nor too cold for the period`,
        `just about what the old-timers predict for this time of year`,
        `as the locals would say, 'just another day in paradise'`,
        `right on the money for the calendar`,
        `exactly what the weather almanac predicted`
    ];

    defaultEffect = [
        'The weather is mild, with no immediate adverse effects on characters',
        'A typical day with no noticeable weather anomalies',
        'The breeze is gentle and the temperature is just right',
        'It feels like an average day, neither too hot nor too cold',
        'Nothing out of the ordinary today, weather-wise',
        'The climate is temperate and creatures feel at ease',
        'A calm day; perfect for outdoor activities and adventures',
        `The weather seems to be on everyone's side today`,
        `With such fair weather, it's a great day to be outside`,
        'Mother nature seems to be in a good mood today'
    ];

    static _fahrenheitToCelsius(fahrenheit) { // °F = (°C × 9/5) + 32
        return Math.floor((fahrenheit - 32) * 5 / 9);
    }

    static _celsiusToFahrenheit(celsius) { // °C = (°F - 32) × 5/9
        return Math.floor((celsius * 9 / 5) + 32);
    }


    getTemperatureEffect() {
        return this.effect;
    }

    getTemperatureDescription() {
        return this.description;
    }

    getTemperature() {
        return this.temperature;
    }

    getExactTemperature() {
        return this.exactTemperature;
    }

    getD20() {
        return this.d20;
    }

}
