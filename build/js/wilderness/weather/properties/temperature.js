import {D} from "../../../tools/d";

export class Temperature {
    constructor() {
        this.d20 = D._20();
        this._temperature(this.d20);
    }

    _temperature(d20) {
        this.temperature = "normal for the season. ";
        this.description = `Temperature: [it's between ${Math.round(((0 - 32) * 5/9))} and 
        ${Math.round(((30 - 32) * 5/9))} Fahrenheit (0 to 30 degrees Celsius)]`;
        this.effect = '';

        if (d20 >= 15 && d20 <= 17) {
            this.temperature = D._4() * 10 + " degrees Fahrenheit colder than normal. ";
            this.description = "Temperature: [it's between 32 and -8 Fahrenheit (0 to -22 degrees Celsius) or lower]";
            this.effect = `Temperature Effect: [Constitution Saving Throw (DC ${D._20()})] {DEFAULT DC10} or [Gain one level of Exhaustion].
             (This does not apply if a creature has resistance or immunity to cold damage, wears cold weather gear, 
             or is adapted to cold climates).`;
        }
        if (d20 >= 18) {
            this.temperature = D._4() * 10 + " degrees Fahrenheit hotter than normal. ";
            this.description = "Temperature: [it's 86 Fahrenheit (30 degrees Celsius) or hotter]";
            this.effect = `Temperature Effect: If creatures are exposed to the heat and have no access to drinkable water they must: succeed on 
            [Constitution Saving Throw (DC ${D._20()})] {DEFAULT DC5} each hour. 
            The DC is 5 for the first hour and increases by 1 each additional hour. 
            Creatures in medium or heavy armor, or heavy clothing have Disadvantage on the Saving Throw. 
            Creatures with resistance or immunity to fire damage or adapted to the climate automatically succeed 
            on the Saving Throw.`;
        }

        this.temperature = "The temperature is " + this.temperature;
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

    getTemperaturesD20() {
        return this.d20;
    }

}
