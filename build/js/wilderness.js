// overwatch
'use strict';

import {DndWtdRng} from "./wilderness/travel";

let dndNext = window;
dndNext = {
    wilderness: {},
    generator: {},
};
dndNext.wilderness.memory = [];
dndNext.parameters = {}
dndNext.regex = /^[a-zA-Z0-9-' ]+$/;


// Automatically loads all files in the './wilderness/' folder and its subfolders
const requireModule = require.context('./wilderness', true, /\.js$/);
requireModule.keys().forEach(filename => {
    // Removes the "./" from the filename
    const moduleName = filename.replace('./', '');
    requireModule(filename);
});

dndNext.wilderness.coreFunctionality = function () {
    const button = document.getElementById("generateTravel");
    button.addEventListener("click", function () {
        const travelTitle = document.getElementById("travelTitle");
        const travelParagraph1 = document.getElementById("travel-paragraph-1");
        const travelParagraph2 = document.getElementById("travel-paragraph-2");
        const travelParagraph3 = document.getElementById("travel-paragraph-3");
        const travelParagraph4 = document.getElementById("travel-paragraph-4");


        const journeyParagraph1 = document.getElementById("journey-paragraph-1");
        const journeyParagraph2 = document.getElementById("journey-paragraph-2");
        const journeyParagraph3 = document.getElementById("journey-paragraph-3");

        const temperature = document.getElementById("temperature");
        const temperatureDescription = document.getElementById("temperatureDescription");
        const temperatureEffect = document.getElementById("temperatureEffect");
        const temperatureExact = document.getElementById("temperatureExact");

        const TEM = document.getElementById("TEM");
        const CLO = document.getElementById("CLO");
        const WIN = document.getElementById("WIN");
        const PRE = document.getElementById("PRE");

        const clouds = document.getElementById("clouds");

        const wind = document.getElementById("wind");
        const windEffect = document.getElementById("windEffect");
        const windPower = document.getElementById("windPower");
        const windImpact = document.getElementById("windImpact");
        const windSpeed = document.getElementById("windSpeed");

        const precipitation = document.getElementById("precipitation");
        const precipitationWeather = document.getElementById("precipitationWeather");
        const precipitationSight = document.getElementById("precipitationSight");
        const precipitationEffect = document.getElementById("precipitationEffect");

        const wilderness = new DndWtdRng();
        const travel = wilderness.getTravel();
        const story = wilderness.getStory();

        if (!travel) {
            return false;
        }
        travelTitle.innerHTML = `Travel Weather Description`;
        travelParagraph1.innerHTML = story.string1;
        travelParagraph2.innerHTML = story.string2;
        travelParagraph3.innerHTML = story.string3;
        travelParagraph4.innerHTML = story.string4;

        temperature.innerHTML = story.temperature;
        temperatureDescription.innerHTML = story.temperatureDescription;
        temperatureEffect.innerHTML = story.temperatureEffect;
        temperatureExact.innerHTML = story.temperatureExact;

        TEM.innerHTML = story.TEM;
        CLO.innerHTML = story.CLO;
        WIN.innerHTML = story.WIN;
        PRE.innerHTML = story.PRE;

        clouds.innerHTML = story.clouds;

        wind.innerHTML = story.wind;
        windEffect.innerHTML = story.windEffect;
        windPower.innerHTML = story.windPower;
        windImpact.innerHTML = story.windImpact;
        windSpeed.innerHTML = story.windSpeed;

        precipitation.innerHTML = story.precipitation;
        precipitationWeather.innerHTML = story.precipitationWeather;
        precipitationSight.innerHTML = story.precipitationSight;
        precipitationEffect.innerHTML = story.precipitationEffect;

        journeyParagraph1.innerHTML = story.journey1;
        journeyParagraph2.innerHTML = story.journey2;
        journeyParagraph3.innerHTML = story.journey3;


    });

}

document.addEventListener("DOMContentLoaded", function () {
    dndNext.wilderness.coreFunctionality();
});