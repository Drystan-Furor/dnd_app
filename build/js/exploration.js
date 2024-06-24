// overwatch
'use strict';

import {Dungeon_setting} from "./exploration/dungeon_setting";
import {D} from "./tools/d";

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
        // ---------------------------STATBLOCK ------------------------ //
        // TITLE
        const dungeonTitle = document.getElementById("dungeonTitle");
        const dungeonSubTitle = document.getElementById("dungeonSubTitle");
        // PROPERTIES
        const dungeonLocation = document.getElementById("dungeonLocation");
        const dungeonCreator = document.getElementById("dungeonCreator");
        const dungeonPurpose = document.getElementById("dungeonPurpose");
        const dungeonHistory = document.getElementById("dungeonHistory");
        // STATISTICS
        const LOCKS = document.getElementById("LOCKS");
        const SECRETS = document.getElementById("SECRETS");
        const HAZARDS = document.getElementById("HAZARDS");
        const MOOD = document.getElementById("MOOD");
        // SUB Properties
        const airQuality = document.getElementById("airQuality");
        const odor = document.getElementById("odors");
        const walls = document.getElementById("walls");
        const features = document.getElementById("features");
        const darknessAndLight = document.getElementById("darknessAndLight");
        const lightSources = document.getElementById("lightSources");
        // INFO
        const purposeName = document.getElementById("purposeName");
        const purposeDescription = document.getElementById("purposeDescription");
        const dungeon_wallDescription = document.getElementById("dungeonWallDescription");
        const dungeon_doorsDescription = document.getElementById("dungeon_doorsDescription");
        // SUMMARY
        const summary_vision = document.getElementById("summary_vision");
        const summary_locks = document.getElementById("summary_locks");
        const summary_secrets = document.getElementById("summary_secrets");
        const summary_hazards = document.getElementById("summary_hazards");
        const summary_mood = document.getElementById("summary_mood");
        // ---------------------------STATBLOCK ------------------------ //
        // GET
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
        LOCKS.innerHTML = dungeon.dungeon_locks;
        SECRETS.innerHTML = dungeon.dungeon_secrets;
        HAZARDS.innerHTML = dungeon.dungeon_hazards;
        MOOD.innerHTML = dungeon.dungeon_mood;
        // SUB Properties
        airQuality.innerHTML = dungeon.dungeon_air_quality;
        odor.innerHTML = dungeon.dungeon_odor;
        walls.innerHTML = dungeon.dungeon_wallType;
        features.innerHTML = dungeon.dungeon_wallFeatures;
        darknessAndLight.innerHTML = "Lightsources";
        lightSources.innerHTML = dungeon.dungeon_lightSources;
        // INFO
        purposeName.innerHTML = dungeon.dungeon_purpose;
        purposeDescription.innerHTML = dungeon.dungeon_typeDescription;
        dungeon_wallDescription.innerHTML = dungeon.dungeon_wallDescription;
        dungeon_doorsDescription.innerHTML = dungeon.dungeon_doorsDescription;
        // SUMMARY
        summary_vision.innerHTML = dungeon.dungeon_summary_vision;
        summary_locks.innerHTML = dungeon.dungeon_summary_locks;
        summary_secrets.innerHTML = dungeon.dungeon_summary_secrets;
        summary_hazards.innerHTML = dungeon.dungeon_summary_hazards;
        summary_mood.innerHTML = dungeon.dungeon_summary_mood;
        // ---------------------------STATBLOCK ------------------------ //



        // const journeyParagraph1 = document.getElementById("journey-paragraph-1");
        // const journeyParagraph2 = document.getElementById("journey-paragraph-2");
        // const journeyParagraph3 = document.getElementById("journey-paragraph-3");
        //
        // const temperature = document.getElementById("temperature");
        // const temperatureDescription = document.getElementById("temperatureDescription");

        //

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

        //        const dungeonParagraph1 = document.getElementById("dungeon-paragraph-1");
        //         const dungeonParagraph2 = document.getElementById("dungeon-paragraph-2");
        //         const dungeonParagraph3 = document.getElementById("dungeon-paragraph-3");
        //         const dungeonParagraph4 = document.getElementById("dungeon-paragraph-4");
// -------------------------------------------------------------------------
        // unknown
        // dungeonParagraph1.innerHTML = dungeon.dungeon_location;
        // dungeonParagraph2.innerHTML = dungeon.dungeon_creator;
        // dungeonParagraph3.innerHTML = dungeon.dungeon_history;
        // dungeonParagraph4.innerHTML = dungeon.dungeon_purpose;
        //
        // temperature.innerHTML = story.temperature;
        // temperatureDescription.innerHTML = story.temperatureDescription;
        //

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