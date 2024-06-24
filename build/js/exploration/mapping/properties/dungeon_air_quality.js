import {D} from "../../../tools/d";

export class Dungeon_air_quality {
    constructor() {
        this.d100 = D._100();
        this.airQuality = this._setAirQuality(this.d100);
        this.odor = this._setOdor(this.d100);
    }

    _setAirQuality(d100) {
        console.log(d100);
        let string;
        if (d100 >= 1 && d100 <= 60) {
            string = "Clear and damp";
        } else if (d100 >= 61 && d100 <= 70) {
            string =  "Clear and drafty";
        } else if (d100 >= 71 && d100 <= 80) {
            string =  "Clear but cold";
        } else if (d100 >= 81 && d100 <= 83) {
            string =  "Foggy or misty and cold";
        } else if (d100 >= 84 && d100 <= 85) {
            string =  "Clear, with mist covering floor";
        } else if (d100 >= 86 && d100 <= 90) {
            string =  "Clear and warm";
        } else if (d100 >= 91 && d100 <= 93) {
            string =  "Hazy and humid";
        } else if (d100 >= 94 && d100 <= 96) {
            string =  "Smoky or steamy";
        } else if (d100 >= 97 && d100 <= 98) {
            string =  "Clear, with smoke covering ceiling";
        } else if (d100 >= 99 && d100 <= 100) {
            string =  "Clear and windy";
        } else {
            string =  "Invalid d100";
        }
        this.airQuality = string;
        return this.airQuality ;
    }

    _setOdor(d100) {
        let string;
        if (d100 >= 1 && d100 <= 3) {
            string = "Acrid";
        } else if (d100 >= 4 && d100 <= 5) {
            string = "Chlorine";
        } else if (d100 >= 6 && d100 <= 39) {
            string = "Dank or moldy";
        } else if (d100 >= 40 && d100 <= 49) {
            string = "Earthy";
        } else if (d100 >= 50 && d100 <= 57) {
            string = "Manure";
        } else if (d100 >= 58 && d100 <= 61) {
            string = "Metallic";
        } else if (d100 >= 62 && d100 <= 65) {
            string = "Ozone";
        } else if (d100 >= 66 && d100 <= 70) {
            string = "Putrid";
        } else if (d100 >= 71 && d100 <= 75) {
            string = "Rotting vegetation";
        } else if (d100 >= 76 && d100 <= 77) {
            string = "Salty and wet";
        } else if (d100 >= 78 && d100 <= 82) {
            string = "Smoky";
        } else if (d100 >= 83 && d100 <= 89) {
            string = "Stale";
        } else if (d100 >= 90 && d100 <= 95) {
            string = "Sulfurous";
        } else if (d100 == 96) {
            string = "Urine";
        } else {
            string = "Invalid d100";
        }
        this.odor = string;
        return this.odor;
    }

    _getAirQuality() {
        return this.airQuality;
    }

    _getOdor() {
        return this.odor;
    }
}



