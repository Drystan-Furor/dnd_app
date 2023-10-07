// overwatch
'use strict';
import {ucFirst} from "./npc/races/factory/utility";

let dndNext = window;
dndNext = {
    dndRngNpc: {},
    generator: {},
};
dndNext.dndRngNpc.memory = [];
dndNext.parameters = {}
dndNext.regex = /^[a-zA-Z0-9-' ]+$/;



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

dndNext.dndRngNpc.stickyButton = function () {
    const button = document.getElementById("generateNpc");
    const buttonPosition = button.getBoundingClientRect().top + window.scrollY;
    window.addEventListener("scroll", function () {
        if (window.scrollY > buttonPosition) {
            button.classList.add("sticky-button");
        } else {
            button.classList.remove("sticky-button");
        }
    });
}

dndNext.dndRngNpc.coreFunctionality = function () {
    const button = document.getElementById("generateNpc");
    button.addEventListener("click", function () {
        const characterParagraph1 = document.getElementById("character-paragraph-1");
        const characterParagraph2 = document.getElementById("character-paragraph-2");
        const characterParagraph3 = document.getElementById("character-paragraph-3");
        dndNext.dndRngNpc.collectInput();
        const parameters = dndNext.parameters;
        const new_npc = new DndNpcRng(parameters);
        const character = new_npc.getNewNpc();
        const biography = new_npc.getString();
        dndNext.dndRngNpc.imageOfCharacter(character.dndRace);
        dndNext.dndRngNpc.commitToMemory(character, biography);
        const currentBiography = {
            string1: characterParagraph1.innerHTML,
            string2: characterParagraph2.innerHTML,
            string3: characterParagraph3.innerHTML,
        };
        if (!character) {
            return false;
        }
        characterParagraph1.innerHTML = biography.string1;
        characterParagraph2.innerHTML = biography.string2;
        characterParagraph3.innerHTML = biography.string3;
    });
    const copyButton = document.getElementById('copyButton');
    dndNext.dndRngNpc.copyButton(copyButton);

}

dndNext.dndRngNpc.copyButton = function (copyButton) {
    copyButton.addEventListener('click', function () {
        dndNext.dndRngNpc.copyToClipboard();
    });
}

dndNext.dndRngNpc.copyToClipboard = function () {
    const blockquote = document.querySelector('blockquote');
    if (!blockquote) return;
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

dndNext.dndRngNpc.imageOfCharacter = function (race) {
    const images = ["img/icon_d20_blue.png", "img/icon_d20_red.png", "img/icon_d20_yellow.png", "img/beholder.gif"];
    const imgElement = document.getElementById('dynamicImage');
    if (!race) {
        return false;
    }
    const raceLowerCase = convertRaceName(race);
    imgElement.src = "img/characters/" + raceLowerCase.toLowerCase() + ".png";
    document.getElementById('dynamicCaption').textContent = 'Image of a ' + race;
    dndNext.dndRngNpc.imageExists(imgElement.src, function (exists) {
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

dndNext.dndRngNpc.imageExists = function (image_url, callback) {
    const img = new Image();
    img.onload = function () {
        callback(true);
    };
    img.onerror = function () {
        callback(false);
    };
    img.src = image_url;
}

dndNext.dndRngNpc.listOfOptions = function () {
    const optionsArray = Race.raceArray();
    const selectElement = document.getElementById('races');

    optionsArray.forEach(optionValue => {
        const optionElement = document.createElement('option');
        optionElement.value = optionValue;
        optionElement.textContent = optionValue;
        selectElement.appendChild(optionElement);
    });
}

dndNext.dndRngNpc.collectInput = function () {
    dndNext.dndRngNpc.firstname();
    dndNext.dndRngNpc.lastname();
    dndNext.dndRngNpc.nickname();
    dndNext.dndRngNpc.selectedRaces();
    dndNext.dndRngNpc.homebrew();
}

dndNext.dndRngNpc.firstname = function () {
    const firstnameInput = document.getElementById('firstname');
    const firstname = firstnameInput.value.trim();
    if (!firstname) {
        dndNext.parameters.firstname = null;
        return false;
    }

    if (!dndNext.regex.test(firstname)) {
        return false;
    }
    dndNext.parameters.firstname = firstname;
}

dndNext.dndRngNpc.lastname = function () {
    const lastnameInput = document.getElementById('lastname');
    const lastname = lastnameInput.value.trim();
    if (!lastname) {
        dndNext.parameters.lastname = null;
        return false;
    }

    if (!dndNext.regex.test(lastname)) {
        return false;
    }
    dndNext.parameters.lastname = lastname;
}

dndNext.dndRngNpc.nickname = function () {
    const nicknameInput = document.getElementById('nickname');
    const nickname = nicknameInput.value.trim();
    if (!nickname) {
        dndNext.parameters.nickname = null;
        return false;
    }

    if (!dndNext.regex.test(nickname)) {
        return false;
    }
    dndNext.parameters.nickname = nickname;
}

dndNext.dndRngNpc.homebrew = function () {
    const homebrewInput = document.getElementById('homebrew-race');
    const homebrew = homebrewInput.value.trim();
    if (!homebrew) {
        dndNext.parameters.homebrew = null;
        return false;
    }
    if (!dndNext.regex.test(homebrew)) {
        return false;
    }
    dndNext.parameters.homebrew = homebrew;
}


dndNext.dndRngNpc.selectedRaces = function () {
    const selectElement = document.getElementById('races');
    const selectedOptions = Array.from(selectElement.selectedOptions).map(option => option.value);

    if (selectedOptions.length > 0) {
        dndNext.parameters.races = selectedOptions;
    }
}

dndNext.dndRngNpc.commitToMemory = function (character, biography) {
    let stored = false;

    for (let i = 0; i < 10; i++) {
        if (!dndNext.dndRngNpc.memory[i]) {
            dndNext.dndRngNpc.memory[i] = {
                character: character,
                biography: biography
            };
            stored = true;
            break;
        }
    }

    if (!stored) {
        // Shift the array to remove the first element and make space at the end
        dndNext.dndRngNpc.memory.shift();
        dndNext.dndRngNpc.memory[9] = {
            character: character,
            biography: biography
        };
    }
    if (dndNext.dndRngNpc.memory) {
        dndNext.dndRngNpc.readMemoryToTable();
    } else {
        console.log("No data at index 0");
        console.warn(dndNext.dndRngNpc.memory);
    }

}

dndNext.dndRngNpc.readMemoryToTable = function () {
    const tableBody = document.getElementById("tableBody");

    dndNext.dndRngNpc.memory.forEach((item, index) => {
        if (item.printed) {
            return;
        }

        const row = document.createElement("tr");
        row.className = "border-b-2 dark:border-cyan-500 border-cyan-500";

        const properties = ["dndRace", "class", "firstname", "lastname", "nickname", "age", "gender"];
        properties.forEach(prop => {
            const cell = document.createElement("td");
            cell.className = `px-4 py-2`;
            cell.id = `${prop}-value-${item.character.id}`;
            cell.textContent = item.character[prop] || "N/A";
            row.appendChild(cell);
        });

        const copyButtonCell = document.createElement("td");
        copyButtonCell.className = "px-4 py-2";
        copyButtonCell.id = `table-copy-button-${item.character.id}`;
        copyButtonCell.innerHTML = `<button class="bg-cyan-700 dark:bg-cyan-700 text-amber-500 px-2 py-1 rounded hover:bg-cyan-500 hover:text-white active:bg-amber-500 active:text-cyan-500">Copy</button>`;

        // Add event listener to copy biography when clicked
        copyButtonCell.addEventListener("click", () => {
            const biography = item.biography;
            const cleanedBiography = `${biography.string1.trim()} ${biography.string2.trim()} ${biography.string3.trim()}`;
            navigator.clipboard.writeText(cleanedBiography).then(() => {
                console.log("Biography copied to clipboard");
            }).catch(err => {
                console.error("Could not copy text: ", err);
            });
        });


        row.appendChild(copyButtonCell);

        tableBody.appendChild(row);

        item.printed = true;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    dndNext.dndRngNpc.listOfOptions();
    dndNext.dndRngNpc.stickyButton();

    dndNext.dndRngNpc.coreFunctionality();
});
