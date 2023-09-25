// overwatch
// Automatically loads all files in the './npc/' folder and its subfolders
import {Race} from "./npc/properties/race";
import {NpcClass} from "./npc/properties/class";
import {Gender} from "./npc/properties/gender";
import {Age} from "./npc/properties/age";




const requireModule = require.context('./npc', true, /\.js$/);

requireModule.keys().forEach(filename => {
    // Removes the "./" from the filename
    const moduleName = filename.replace('./', '');
    requireModule(filename);
});


document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("generateNpc");

    button.addEventListener("click", function () {
        const characterParagraph = document.getElementById("character");

        // Create instances of NpcClass and Race
        const npc = new NpcClass();
        const race = new Race();
        const gender = new Gender();
        const age = new Age(race);

        // Concatenate npc class and race ${var.getVar()}
        const character = `${race.getRace()} ${npc.getNpcClass()} ${gender.getGender()} ${age.getAge()}`;
        if (!character) {
            return false;
        }
        // Set the concatenated string as the innerHTML of the paragraph
        characterParagraph.innerHTML = character;
    });

    // Add event listener for copyButton here
    const copyButton = document.getElementById('copyButton');
    if(copyButton) { // Check if copyButton exists
        copyButton.addEventListener('click', function() {
            const characterParagraph = document.getElementById('character');
            navigator.clipboard.writeText(characterParagraph.innerText).then(function() {
                console.log('copied to clipboard!');
            }).catch(function(err) {
                console.error('Unable to copy text', err);
            });
        });
    }
});

