import {D} from "../../../tools/d";

export class Wind{
    constructor() {
        this._windTable();
    }

    _windTable() {
        let d20 = D._20();
        this.wind = `It's practically windstill.`;
        this.effect = ``;

        if (d20 > 12 && d20 <= 17) {
            this.wind = `There is a light breeze.`;
        }
        if (d20 >= 18) {
            this.wind = `Strong winds are billowing.`;
            this.effect = `Disadvantage on Ranged Weapon
            Attack Rolls and on 
            Wisdom (Perception) checks that rely on hearing. 
            Fog is dispersed, open flames extinghuised,  
            non-magical flying is near impossible, 
            a flying creature must land at the end of it's turn or fall. `;
        }
    }

    getWind() {
        return this.wind;
    }

    getWindEffect() {
       return this.effect;
    }

}