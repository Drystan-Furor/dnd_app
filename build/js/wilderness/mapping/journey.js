import {Travel_montage} from "./travel_montage/travel_montage";

export class Journey {

    _travelDescription(weather) {
        // const x = new class();
        const montage = new Travel_montage(weather);

        return {
            // property : class.getThis(),
            journey: montage.getMontage(),
        }
    }


}