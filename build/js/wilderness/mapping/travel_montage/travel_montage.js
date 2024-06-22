import {D} from "../../../tools/d";
import {getRandomElement, shuffleArray} from "../../../tools/tools";
import {TerrainFeatures} from "../properties";

export class Travel_montage {
    constructor(weather) {
        this.d20 = D._20();
        this._montage(this.d20, weather);
    }

    _montage(d20, weather) {
        let explore = getRandomElement(this.explore);
        let environment1 = TerrainFeatures._environment();
        let environment2 = TerrainFeatures._environment();
        while (environment1 === environment2) {
            environment2 = TerrainFeatures._environment();
        }

        let weatherDetail = [
            `${weather.wind}`,
            `${weather.clouds}`,
            `${weather.precipitation}`,
            `${weather.temperature}`,
        ];

        // Shuffle the array randomly
        const shuffleWeatherDetail = shuffleArray(weatherDetail);
        // Select the first 4 elements from the shuffled array
        const rngWeatherElements = shuffleWeatherDetail.slice(0, 4);
        console.log(rngWeatherElements[2]);

        const randomText = [
            `${rngWeatherElements[0]} as you ${getRandomElement(this.proceed)} for (1d4 + 1) ${D._4() + 1} miles 
        in ${getRandomElement(this.compassRose)}ern direction. ${explore} through ${environment1} you pass over 
        ${TerrainFeatures._balcony()} that offers ${getRandomElement(this.breathtakingViewVariations)} over 
        ${TerrainFeatures._breathtaking_sight()} ${getRandomElement(this.vicinity)} ${TerrainFeatures._monument()}.`,

            `${rngWeatherElements[1]} while you ${getRandomElement(this.proceed)} through ${environment2} for (1d4 + 1) 
            ${D._4() + 1} hours. After ${getRandomElement(this.navigating)} onward you 
            ${getRandomElement(this.comeAcrossVariations)} a ${TerrainFeatures._weird_locale()}  
            ${getRandomElement(this.vicinity)} ${TerrainFeatures._monument()}.`,
        ];

        const montage_1 = getRandomElement(randomText);

        const montage_2 = `${rngWeatherElements[2]} when taking a break ${TerrainFeatures._landmark()}, close to  
        ${TerrainFeatures._monument()}.
        ${rngWeatherElements[3]} ${getRandomElement(this.continueTrip)}. `;

        let montage_3 = getRandomElement(randomText);
        while (montage_1 === montage_3) {
            montage_3 = getRandomElement(randomText);
        }

        this.montage = {
            montage_1, montage_2, montage_3,
        };
    }

    vicinity = [
        `close to`,
        `in the neighbourhood of`,
        `in the vicinity of`,
        `a short distance of`,
        `in the view of`,
        `where sunlight hits`,
    ];

    breathtakingViewVariations = [
        "a breathtaking view",
        "a breathtaking vista",
        "an awe-inspiring panorama",
        "a magnificent scene",
        "a stunning landscape",
        "a picturesque sight",
        "a breathtaking spectacle",
        "an incredible outlook",
        "a mesmerizing view",
    ];

    comeAcrossVariations = [
        "come across",
        "stumble upon",
        "encounter",
        "find",
        "discover",
        "chance upon",
        "happen upon",
        "run into",
        "cross paths with",
    ];

    navigating = [
        `navigating`,
        `passing`,
        `moving`,
        `hiking`,
        `advancing`,
        `walking`,
        `travelling`,
        `traversing`,
        `you traverse`,
        `trekking`,
        `progressing`,
        `crossing`,
        `passing`,
        `making your way`,

    ];

    proceed = [
        `walk`,
        `travel`,
        `move`,
        `progress`,
        `traverse`,
        `navigate`,
        `hike`,
        `advance`,
        `venture`,
        `explore`,
        `proceed`,
        `make your way`,
        `hike`,
    ];


    explore = [
        `While ${getRandomElement(this.navigating)}`,
        `As you are ${getRandomElement(this.navigating)}`,
        `You ${getRandomElement(this.proceed)}`,
        `While you ${getRandomElement(this.proceed)}`,
        `As you ${getRandomElement(this.proceed)}`,
    ];

    compassRose = [
        `North`,
        `North-East`,
        `East`,
        `South-East`,
        `South`,
        `South-West`,
        `West`,
        `North-West`,
    ];

    continueTrip = [
        `when you continue your journey`,
        `as you press onward`,
        `when you resume your trek`,
        `while you carry on`,
        `as you continue your path`,
        `upon continuing your journey`,
        `when you move forward`,
        `as you proceed`,
        `once you keep going`,
        `as you march ahead`,
        `when you venture forth`,
        `while you advance further`,
        `as you walk on`,
        `once you push forward`,
        `as you proceed along your way`,
        `while you journey ahead`,
        `as you travel onward`,
    ];

    getMontage() {
        return this.montage;
    }


    /*
            "You traverse through the enchanted forest, fireflies illuminate your path..."
        " the snow-capped mountains, the crisp air invigorates your senses..."
        " the sprawling desert, the relentless sun beats down..."
        */

}