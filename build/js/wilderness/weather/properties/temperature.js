import {rand} from "../../../npc/properties/age";
import {WeatherProperties} from "../weatherproperties";

export class Temperature extends WeatherProperties {
    constructor() {
        super();
        this.temperatures = rand(1, 20);
        this.temperature = this._temperature(this.temperatures);
    }


    _temperature(temperatures) {
        let temperature = '';
        let description = '';
        let effect = '';
        const d4times10 = rand(1, 4) * 10;

        if (temperatures >= 15 && temperatures <= 17) {
            temperature = d4times10 + " degrees Fahrenheit colder than normal. ";
            description = "[it's between 32 and -8 Fahrenheit (0 - -22 degrees Celsius) or lower]";
            effect = "[Constitution Saving Throw (DC " + rand(1, 20) + ")] {DEFAULT DC10} or [Gain one level of Exhaustion]. (This does not apply if a creature has resistance or immunity to cold damage, wears cold weather gear, or is adapted to cold climates). ";
        } else if (temperatures >= 18) {
            temperature = d4times10 + " degrees Fahrenheit hotter than normal. ";
            description = "[it's 86 Fahrenheit (30 degrees Celsius) or hotter]";
            effect = "If creatures are exposed to the heat and have no access to drinkable water they must: succeed on [Constitution Saving Throw (DC " + rand(1, 20) + ")] {DEFAULT DC5} each hour. The DC is 5 for the first hour and increases by 1 each additional hour. Creatures in medium or heavy armor, or heavy clothing have Disadvantage on the Saving Throw. Creatures with resistance or immunity to fire damage or adapted to the climate automatically succeed on the Saving Throw. ";
        } else {
            temperature = "normal for the season. ";
            description = "[it's between 32-86 Fahrenheit (0 - 30 degrees Celsius)]";
            effect= '';
        }
        temperature = "The temperature is " + temperature;
        return temperature + description + effect;
    }

    getTemperature() {
        return this.temperature;
    }

    getTemperatures() {
        return this.temperatures;
    }

}
