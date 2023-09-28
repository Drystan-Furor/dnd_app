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
        const characterParagraph1 = document.getElementById("character-paragraph-1");
        const characterParagraph2 = document.getElementById("character-paragraph-2");
        const characterParagraph3 = document.getElementById("character-paragraph-3");
        const new_npc = new DndNpcRng();
        const character = new_npc.getNewNpc();
        const biography = new_npc.getString();
        imageOfCharacter(character.dndRace);


        // Store the current innerHTML before overwriting it
        const currentBiography = {
            string1: characterParagraph1.innerHTML,
            string2: characterParagraph2.innerHTML,
            string3: characterParagraph3.innerHTML,
        };

        // Set the concatenated string as the innerHTML of the paragraph
        if (!character) {
            return false;
        }
        characterParagraph1.innerHTML = biography.string1;
        characterParagraph2.innerHTML = biography.string2;
        characterParagraph3.innerHTML = biography.string3;
        previousCharacter(currentBiography);
    });


    // Add event listener for copyButton here
    const copyButton = document.getElementById('copyButton');
    if (copyButton) { // Check if copyButton exists
        copyButton.addEventListener('click', function () {
            // Get the blockquote element
            const blockquote = document.querySelector('blockquote');

            // Get all p elements inside the blockquote
            const paragraphs = blockquote.querySelectorAll('p');

            // Initialize an empty string to hold the text content of all p elements
            let string = '';

            // Loop through all p elements and concatenate their text content to the string
            paragraphs.forEach(paragraph => {
                string += paragraph.textContent + '\n'; // '\n' adds a new line between each paragraph
            });

            // Copy the concatenated string to the clipboard
            navigator.clipboard.writeText(string).then(function () {
                console.log('copied to clipboard!');
            }).catch(function (err) {
                console.error('Unable to copy text', err);
            });
        });
    }

    // Add event listener for copyButton here
    const copyButton2 = document.getElementById('copyButton2');
    if (copyButton2) { // Check if copyButton exists
        copyButton2.addEventListener('click', function () {
            const previousCharacterParagraph = document.getElementById('previous-character');
            navigator.clipboard.writeText(previousCharacterParagraph.innerText).then(function () {
                console.log('copied to clipboard!');
            }).catch(function (err) {
                console.error('Unable to copy text', err);
            });
        });
    }
});

function previousCharacter(previousBiography) {
    const previousCharacterParagraph1 = document.getElementById("previous-character-1");
    const previousCharacterParagraph2 = document.getElementById("previous-character-2");
    const previousCharacterParagraph3 = document.getElementById("previous-character-3");
    previousCharacterParagraph1.innerHTML = previousBiography.string1;
    previousCharacterParagraph2.innerHTML = previousBiography.string2;
    previousCharacterParagraph3.innerHTML = previousBiography.string3;
}

function imageOfCharacter(race) {
    const images = ["img/icon_d20_blue.png", "img/icon_d20_red.png", "img/icon_d20_yellow.png", "img/characters/beholder.png"];
    const imgElement = document.getElementById('dynamicImage');

    if (race) {
        const raceLowerCase = race.toLowerCase();
        imgElement.src = "img/characters/" + raceLowerCase + ".png";

        imgElement.onerror = function () {
            const randomIndex = Math.floor(Math.random() * images.length);
            imgElement.src = images[randomIndex];
        }
    } else {
        const randomIndex = Math.floor(Math.random() * images.length);
        document.getElementById('dynamicImage').src = images[randomIndex];
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    let dynamicImage = document.getElementById('beholder');

    if(dynamicImage) { // Check if element exists
        dynamicImage.addEventListener('mouseover', function() {
            dynamicImage.src = 'img/art_beholder.png'; // Path to the hover image
        });

        dynamicImage.addEventListener('mouseout', function() {
            dynamicImage.src = 'img/iconbeholder.png'; // Path to the default image
        });
    }
});
