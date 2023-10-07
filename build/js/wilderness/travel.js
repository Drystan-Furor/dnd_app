import {Weather} from "./weather/weather";
import {rand} from "../npc/properties/age";
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
        this.weather = new Weather();
        console.log(this.weather.getWeather());

        // Construct object with properties of classes
        return {
            // iD
            id: rand(1000, 9999),
            // class
            temperature: this.weather.getWeather(),
        };
    }

    _writeStory(travel) { // Pass 'travel' as an argument
        console.log(travel);
        // description
        let string1 = `${travel.temperature}`;
        // appearance
        let string2 = ``;
        // attire
        let string3 = ``;
        return {
            string1, string2, string3
        };
    }
}
