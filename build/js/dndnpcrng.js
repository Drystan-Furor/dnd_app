// overwatch
import {DndNpcRng} from "./npc/generators/character";
import {convertRaceName} from "./npc/races/factory/racefactory";
import {Race} from "./npc/properties/race";
// Automatically loads all files in the './npc/' folder and its subfolders
const requireModule = require.context('./npc', true, /\.js$/);

requireModule.keys().forEach(filename => {
    // Removes the "./" from the filename
    const moduleName = filename.replace('./', '');
    requireModule(filename);
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("generateNpc");
    const buttonPosition = button.getBoundingClientRect().top + window.scrollY;

    window.addEventListener("scroll", function () {
        if (window.scrollY > buttonPosition) {
            button.classList.add("sticky-button");
        } else {
            button.classList.remove("sticky-button");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    listOfOptions();
    const button = document.getElementById("generateNpc");

    button.addEventListener("click", function () {
        const characterParagraph1 = document.getElementById("character-paragraph-1");
        const characterParagraph2 = document.getElementById("character-paragraph-2");
        const characterParagraph3 = document.getElementById("character-paragraph-3");
        collectInput();
        const new_npc = new DndNpcRng(parameters);
        const character = new_npc.getNewNpc();
        const biography = new_npc.getString();
        imageOfCharacter(character.dndRace);
        commitToMemory(character, biography);

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

    function copyToClipboard(elementId) {
        const blockquote = document.querySelector(elementId);
        if (!blockquote) return; // Exit if no blockquote found

        const paragraphs = blockquote.querySelectorAll('p');
        let string = '';

        paragraphs.forEach(paragraph => {
            string += paragraph.textContent + '\n';
        });

        navigator.clipboard.writeText(string).then(function () {
            console.log('copied to clipboard!');
        }).catch(function (err) {
            console.error('Unable to copy text', err);
        });
    }

    const copyButton = document.getElementById('copyButton');
    if (copyButton) {
        copyButton.addEventListener('click', function () {
            copyToClipboard('blockquote');
        });
    }

    const copyButton2 = document.getElementById('copyButton2');
    if (copyButton2) {
        copyButton2.addEventListener('click', function () {
            copyToClipboard('blockquote');
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
    const images = ["img/icon_d20_blue.png", "img/icon_d20_red.png", "img/icon_d20_yellow.png", "img/beholder.gif"];
    const imgElement = document.getElementById('dynamicImage');
    if (!race) {
        return false;
    }
    const raceLowerCase = convertRaceName(race);
    imgElement.src = "img/characters/" + raceLowerCase.toLowerCase() + ".png";
    console.warn(imgElement.src);

    imageExists(imgElement.src, function (exists) {
        document.getElementById('dynamicCaption').textContent = 'Image of a ' + race;
        if (!exists) {
            console.error("The image is missing, man, probably out bowling with The Dude. Stealth check!");
            document.getElementById('dynamicCaption').textContent = 'It seems the image has stealthily evaded us, perhaps it rolled a natural 20 on its Stealth check!';

            const randomIndex = Math.floor(Math.random() * images.length);
            document.getElementById('dynamicImage').src = images[randomIndex];
        }
    });
    imgElement.onerror = function () {
        const randomIndex = Math.floor(Math.random() * images.length);
        imgElement.src = images[randomIndex];
    }
}

function imageExists(image_url, callback) {
    var img = new Image();
    img.onload = function () {
        callback(true);
    };
    img.onerror = function () {
        callback(false);
    };
    img.src = image_url;
}

let memory = {};
let strMem = {};

function commitToMemory(character, biography) {
    const characterId = character.id;
    memory[0] = character;
    strMem[character.id] = biography;

    console.warn(memory);
    console.log(strMem[characterId]);
}

function listOfOptions() {
    const optionsArray = Race.raceArray();
    const selectElement = document.getElementById('races');

    optionsArray.forEach(optionValue => {
        const optionElement = document.createElement('option');
        optionElement.value = optionValue;
        optionElement.textContent = optionValue;
        selectElement.appendChild(optionElement);
    });
}

let parameters = {}
const regex = /^[a-zA-Z0-9]+$/;

function collectInput() {
    firstname();
    lastname();
    nickname();
    selectedRaces();
}

function firstname() {
    const firstnameInput = document.getElementById('firstname');
    const firstname = firstnameInput.value.trim();
    if (!firstname) {
        return false;
    }

    if (!regex.test(firstname)) {
        return false;
    }
    parameters.firstname = firstname;
}

function lastname() {
    const lastnameInput = document.getElementById('lastname');
    const lastname = lastnameInput.value.trim();
    if (!lastname) {
        return false;
    }

    if (!regex.test(lastname)) {
        return false;
    }
    parameters.lastname = lastname;
}

function nickname() {
    const nicknameInput = document.getElementById('nickname');
    const nickname = nicknameInput.value.trim();
    if (!nickname) {
        return false;
    }

    if (!regex.test(nickname)) {
        return false;
    }
    parameters.nickname = nickname;
}

function selectedRaces() {
    const selectElement = document.getElementById('races');
    const selectedOptions = Array.from(selectElement.selectedOptions).map(option => option.value);

    if (selectedOptions.length > 0) {
        parameters.races = selectedOptions;
    }
}





// document.addEventListener('DOMContentLoaded', () => {
//     let dynamicImage = document.getElementById('beholder');
//
//     if (dynamicImage) { // Check if element exists
//         dynamicImage.addEventListener('mouseover', function () {
//             dynamicImage.src = 'img/art_beholder.png'; // Path to the hover image
//         });
//
//         dynamicImage.addEventListener('mouseout', function () {
//             dynamicImage.src = 'img/iconbeholder.png'; // Path to the default image
//         });
//     }
// });
