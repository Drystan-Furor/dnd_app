// overwatch
'use strict';

import {Dungeon_setting} from "./exploration/dungeon_setting";

let dndNext = window;
dndNext = {
    exploration: {},
    generator: {},
};
dndNext.exploration.memory = [];
dndNext.parameters = {}
dndNext.regex = /^[a-zA-Z0-9-' ]+$/;


// Automatically loads all files in the './exploration/' folder and its subfolders
const requireModule = require.context('./exploration', true, /\.js$/);
requireModule.keys().forEach(filename => {
    // Removes the "./" from the filename
    const moduleName = filename.replace('./', '');
    requireModule(filename);
});

dndNext.exploration.coreFunctionality = function () {
    const button = document.getElementById("generateDungeon");
    button.addEventListener("click", function () {
        const parameters = dndNext.parameters;
        const dungeonTitle = document.getElementById("dungeonTitle");
        const dungeonSubTitle = document.getElementById("dungeonSubTitle");
        const dungeonParagraph1 = document.getElementById("dungeon-paragraph-1");
        const dungeonParagraph2 = document.getElementById("dungeon-paragraph-2");
        const dungeonParagraph3 = document.getElementById("dungeon-paragraph-3");
        const dungeonParagraph4 = document.getElementById("dungeon-paragraph-4");
        //
        // const journeyParagraph1 = document.getElementById("journey-paragraph-1");
        // const journeyParagraph2 = document.getElementById("journey-paragraph-2");
        // const journeyParagraph3 = document.getElementById("journey-paragraph-3");
        //
        // const temperature = document.getElementById("temperature");
        // const temperatureDescription = document.getElementById("temperatureDescription");
        // const temperatureEffect = document.getElementById("temperatureEffect");
        const dungeonLocation = document.getElementById("dungeonLocation");
        const dungeonCreator = document.getElementById("dungeonCreator");
        const dungeonPurpose = document.getElementById("dungeonPurpose");
        const dungeonHistory = document.getElementById("dungeonHistory");
        //
        // const TEM = document.getElementById("TEM");
        // const CLO = document.getElementById("CLO");
        // const WIN = document.getElementById("WIN");
        // const PRE = document.getElementById("PRE");
        //
        // const clouds = document.getElementById("clouds");
        //
        // const wind = document.getElementById("wind");
        // const windEffect = document.getElementById("windEffect");
        // const windImpact = document.getElementById("windImpact");
        //
        // const precipitation = document.getElementById("precipitation");
        // const precipitationSight = document.getElementById("precipitationSight");
        // const precipitationEffect = document.getElementById("precipitationEffect");
        //
        const dungeonSetting = new Dungeon_setting(parameters);
        const dungeon = dungeonSetting.getDungeon();
        console.log(dungeon);

        // STATBLOCK
        dungeonTitle.innerHTML = dungeon.dungeon_purpose;
        dungeonSubTitle.innerHTML = dungeon.dungeon_history;
        // PROPERTIES
        dungeonLocation.innerHTML = dungeon.dungeon_location;
        dungeonCreator.innerHTML = dungeon.dungeon_creator;
        dungeonPurpose.innerHTML = dungeon.dungeon_purpose;
        dungeonHistory.innerHTML = dungeon.dungeon_history;
        // STATISTICS

        // SUB Properties

        // INFO

        // SUMMARY



        // unknown
        dungeonParagraph1.innerHTML = dungeon.dungeon_location;
        dungeonParagraph2.innerHTML = dungeon.dungeon_creator;
        dungeonParagraph3.innerHTML = dungeon.dungeon_history;
        dungeonParagraph4.innerHTML = dungeon.dungeon_purpose;
        //
        // temperature.innerHTML = story.temperature;
        // temperatureDescription.innerHTML = story.temperatureDescription;
        // temperatureEffect.innerHTML = story.temperatureEffect;
        //
        // TEM.innerHTML = story.TEM;
        // CLO.innerHTML = story.CLO;
        // WIN.innerHTML = story.WIN;
        // PRE.innerHTML = story.PRE;
        //
        // clouds.innerHTML = story.clouds;
        //
        // wind.innerHTML = story.wind;
        // windEffect.innerHTML = story.windEffect;
        // windImpact.innerHTML = story.windImpact;
        //
        // precipitation.innerHTML = story.precipitation;
        // precipitationSight.innerHTML = story.precipitationSight;
        // precipitationEffect.innerHTML = story.precipitationEffect;
        //
        // journeyParagraph1.innerHTML = story.journey1;
        // journeyParagraph2.innerHTML = story.journey2;
        // journeyParagraph3.innerHTML = story.journey3;
        //

    });

}

document.addEventListener("DOMContentLoaded", function () {
    dndNext.exploration.coreFunctionality();
});