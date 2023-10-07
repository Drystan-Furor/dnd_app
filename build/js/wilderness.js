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
        console.log('Hello world')
        const characterParagraph1 = document.getElementById("travel-paragraph-1");
        const characterParagraph2 = document.getElementById("travel-paragraph-2");
        const characterParagraph3 = document.getElementById("travel-paragraph-3");
        const wilderness = new DndWtdRng();
        const travel = wilderness.getTravel();
        const story = wilderness.getStory();

        const currentTravel = {
            string1: characterParagraph1.innerHTML,
            string2: characterParagraph2.innerHTML,
            string3: characterParagraph3.innerHTML,
        };
        if (!travel) {
            return false;
        }
        characterParagraph1.innerHTML = story.string1;
        characterParagraph2.innerHTML = story.string2;
        characterParagraph3.innerHTML = story.string3;
    });
    const copyButton = document.getElementById('copyButton');
    dndNext.wilderness.copyButton(copyButton);

}

dndNext.wilderness.copyButton = function (copyButton) {
    copyButton.addEventListener('click', function () {
        dndNext.wilderness.copyToClipboard();
    });
}

dndNext.wilderness.copyToClipboard = function () {
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

document.addEventListener("DOMContentLoaded", function () {
    dndNext.wilderness.coreFunctionality();
});