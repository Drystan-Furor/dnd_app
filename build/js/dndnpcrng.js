// overwatch
import {DndNpcRng} from "./npc/generators/character";
// Automatically loads all files in the './npc/' folder and its subfolders
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
        const new_npc = new DndNpcRng();
        const character = new_npc.getNewNpc();
        const biography = new_npc.getString();

        // Store the current innerHTML before overwriting it
        const currentBiography = characterParagraph.innerHTML;

        // Set the concatenated string as the innerHTML of the paragraph
        if(!character){
            return false;
        }
        characterParagraph.innerHTML = biography;
        previousCharacter(currentBiography);
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
    // Add event listener for copyButton here
    const copyButton2 = document.getElementById('copyButton2');
    if(copyButton2) { // Check if copyButton exists
        copyButton2.addEventListener('click', function() {
            const previousCharacterParagraph = document.getElementById('previous-character');
            navigator.clipboard.writeText(previousCharacterParagraph.innerText).then(function() {
                console.log('copied to clipboard!');
            }).catch(function(err) {
                console.error('Unable to copy text', err);
            });
        });
    }
});

function previousCharacter(previousBiography) {
    const previousCharacterParagraph = document.getElementById("previous-character");
    previousCharacterParagraph.innerHTML = previousBiography;
}

