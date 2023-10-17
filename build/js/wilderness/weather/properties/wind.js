import {D} from "../../../tools/d";
import {getRandomElement, rand} from "../../../tools/tools";

export class Wind{
    constructor() {
        this._windTable();
    }

    _windTable() {
        this.d20 = D._20();

        this.wind = getRandomElement(this.winds);
        this.windPower = `Windstill (Calm)`;
        this.windSpeed = `less than 1 mph (0.447 m/s)`;
        this.windImpact = `Virtually no noticeable movement of air`;
        this.effect = getRandomElement(this.effects);

        // // Generate a random index to select a random wind speed
        // const randomIndex = Math.floor(Math.random() * this.windSpeeds.length);
        // // Get the random wind speed description
        // const randomWindSpeed = this.windSpeeds[randomIndex];
        // console.log("Random Wind Speed:", randomWindSpeed);
        //
        // // Now, you have the random wind speed description, and you can match it back to the array index if needed
        // const matchedIndex = this.windSpeeds.indexOf(randomWindSpeed);
        // console.log("Matched Index:", matchedIndex);

        if (this.d20 > 12 && this.d20 <= 17) { // windy
            this.wind = getRandomElement(this.breeze);
            this.windPower = getRandomElement(this.windy);

            let rngWind = rand(0, 4);
            this.windSpeed = this.windSpeeds[rngWind];
            this.windImpact = this.windAverageImpact[rngWind];
            this.effect = getRandomElement(this.effects);
        }

        if (this.d20 >= 18) { // storm
            this.wind = getRandomElement(this.strongWinds);
            this.windPower = `Moderate Gale (Stormy)`;
            this.windSpeed = `between 25 and 31 mph (10.71 to 13.90 m/s)`;
            this.windImpact = `Whole trees in motion. Effort needed to walk against the wind`;

            this.effect = `Disadvantage on Ranged Weapon Attack Rolls and on Wisdom (Perception) checks 
            that rely on hearing. Fog is dispersed, open flames extinghuised, non-magical flying is near impossible, 
            a flying creature must land at the end of it's turn or fall. `;
        }
    }

    strongWinds = [
        `Strong winds are billowing`,
        `Powerful gusts are blowing`,
        `Players are buffeted by strong winds`,
        `A fierce wind is sweeping through the area`,
        `A gale is roaring through the surroundings`,
        `The wind is howling with great strength`,
        `There's a tempestuous wind in the air`,
        `Players feel the force of the powerful wind`,
        `The wind is robust and turbulent`,
        `A stormy tempest churns the atmosphere`,
        `The air is filled with the fury of strong winds`,
    ];

    breeze = [
        `A gentle breeze is blowing`,
        `Players feel a mild breeze`,
        `A light wind rustles through the area`,
        `A faint breeze sweeps through the surroundings`,
        `A delicate breeze stirs the air`,
        `There's a subtle breeze in the air`,
        `Players notice a mild and pleasant breeze`,
        `The wind is gentle and soothing`,
        `A light zephyr provides a pleasant atmosphere`,
        `The air is filled with a mild and refreshing breeze`,
    ];


    winds = [
        `It's practically windstill`,
        `There's barely a breeze`,
        `Hardly any wind to speak of`,
        `Calm as can be`,
        `Not a breath of wind`,
        `Almost no air movement`,
        `The air is still`,
        `You could hear a pin drop, there's so little wind`,
        `Wind? What wind?`,
        `A near-total absence of wind`,
    ];

    effects = [
        `The wind is not strong enough to affect players`,
        `Players hardly feel any breeze`,
        `The breeze is gentle and inconsequential`,
        `A gentle zephyr that poses no challenge to players`,
        `Barely a whisper of wind, players are unaffected`,
        `The wind is feeble and players remain undisturbed`,
        `Players enjoy a calm and windless environment`,
        `There's no need to worry about wind, it's barely noticeable`,
        `The wind is so weak that it doesn't bother players at all`,
    ];

    windy = [
        `Light Breeze (Windy)`,
        `Gentle Breeze (Windy)`,
        `Moderate Breeze (Windy)`,
        `Fresh Breeze (Windy)`,
        `Strong Breeze (Windy)`,
    ];

    windSpeeds = [
        `between 1 and 3 mph (0.447 to 1.34 m/s)`,
        `between 4 and 7 mph (1.34 to 3.12 m/s)`,
        `between 8 and 12 mph (3.12 to 5.37 m/s)`,
        `between 13 and 18 mph (5.37 to 8.01 m/s)`,
        `between 19 and 24 mph (8.01 to 10.71 m/s)`,
    ];

    windAverageImpact = [
        `Leaves and twigs move but do not constantly rustle`,
        `Leaves and small twigs are constantly in motion`,
        `Dust and loose paper are raised. Small branches begin to move`,
        `Small trees in leaf begin to sway`,
        `Large branches in motion. Whistling heard in overhead wires.`,
    ];


    getWind() {
        return this.wind;
    }

    getWindEffect() {
       return this.effect;
    }

    getWindPower() {
        return this.windPower;
    }

    getWindSpeed() {
        return this.windSpeed;
    }

    getWindImpact() {
        return this.windImpact;
    }

    getD20(){
        return this.d20;
    }

}