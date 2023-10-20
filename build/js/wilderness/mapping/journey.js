import {Travel_montage} from "./properties/travel_montage";

export class Journey {
    constructor(weather) {
        this._travelDescription(weather);
    }

    _travelDescription(weather) {
        // const x = new class();
        const montage = new Travel_montage(weather);


        return {
            // property : class.getThis(),
        }
    }



}