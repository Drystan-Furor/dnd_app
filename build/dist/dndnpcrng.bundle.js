/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build/js/dndnpcrng.js":
/*!*******************************!*\
  !*** ./build/js/dndnpcrng.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _npc_properties_race__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./npc/properties/race */ \"./build/js/npc/properties/race.js\");\n/* harmony import */ var _npc_properties_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./npc/properties/class */ \"./build/js/npc/properties/class.js\");\n/* harmony import */ var _npc_properties_gender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./npc/properties/gender */ \"./build/js/npc/properties/gender.js\");\n/* harmony import */ var _npc_properties_age__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./npc/properties/age */ \"./build/js/npc/properties/age.js\");\n// overwatch\n// Automatically loads all files in the './npc/' folder and its subfolders\n\n\n\n\n\n\n\n\nconst requireModule = __webpack_require__(\"./build/js/npc sync recursive \\\\.js$\");\n\nrequireModule.keys().forEach(filename => {\n    // Removes the \"./\" from the filename\n    const moduleName = filename.replace('./', '');\n    requireModule(filename);\n});\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const button = document.getElementById(\"generateNpc\");\n\n    button.addEventListener(\"click\", function () {\n        const characterParagraph = document.getElementById(\"character\");\n\n        // Create instances of NpcClass and Race\n        const npc = new _npc_properties_class__WEBPACK_IMPORTED_MODULE_1__.NpcClass();\n        const race = new _npc_properties_race__WEBPACK_IMPORTED_MODULE_0__.Race();\n        const gender = new _npc_properties_gender__WEBPACK_IMPORTED_MODULE_2__.Gender();\n        const age = new _npc_properties_age__WEBPACK_IMPORTED_MODULE_3__.Age(race);\n\n        // Concatenate npc class and race ${var.getVar()}\n        const character = `${race.getRace()} ${npc.getNpcClass()} ${gender.getGender()} ${age.getAge()}`;\n        if (!character) {\n            return false;\n        }\n        // Set the concatenated string as the innerHTML of the paragraph\n        characterParagraph.innerHTML = character;\n    });\n\n    // Add event listener for copyButton here\n    const copyButton = document.getElementById('copyButton');\n    if(copyButton) { // Check if copyButton exists\n        copyButton.addEventListener('click', function() {\n            const characterParagraph = document.getElementById('character');\n            navigator.clipboard.writeText(characterParagraph.innerText).then(function() {\n                console.log('copied to clipboard!');\n            }).catch(function(err) {\n                console.error('Unable to copy text', err);\n            });\n        });\n    }\n});\n\n\n\n//# sourceURL=webpack://dnd_app_05/./build/js/dndnpcrng.js?");

/***/ }),

/***/ "./build/js/npc/properties/age.js":
/*!****************************************!*\
  !*** ./build/js/npc/properties/age.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Age: () => (/* binding */ Age)\n/* harmony export */ });\n/* harmony import */ var _race__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./race */ \"./build/js/npc/properties/race.js\");\n\n\nfunction rand(min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n}\nclass Age extends _race__WEBPACK_IMPORTED_MODULE_0__.Race {\n    constructor(dndrace) {\n        super(); // Call the constructor of the parent class (Race)\n        // this.age = this._defineAge(dndrace);\n        this.age = this._defineAge(dndrace);\n    }\n\n    setAge(age) {\n        this.age = age;\n    }\n\n    getAge() {\n        return this.age;\n    }\n\n     defaultAge(dndrace) {\n        return this.defineDefaultAge(dndrace);\n    }\n\n\n\n    static defineDefaultAge(dndrace) {\n        let age;\n        switch (dndrace) {\n            case \"Elf\":\n                age = rand(14, 750);\n                break;\n            case \"Kenku\":\n            case \"Lizardfolk\":\n            case \"Tabaxi\":\n            case \"Goblin\":\n                age = rand(14, 60);\n                break;\n            case \"Dwarf\":\n            case \"Firbolg\":\n                age = rand(14, 350);\n                break;\n            case \"Human\":\n            case \"Yuan Ti Pureblood\":\n            case \"Goliath\":\n                age = rand(14, 90);\n                break;\n            case \"Tiefling\":\n            case \"Gith\":\n            case \"Changeling\":\n                age = rand(14, 100);\n                break;\n            case \"Aarakocra\":\n            case \"Warforged\":\n                age = rand(3, 30);\n                break;\n            case \"Tortle\":\n            case \"Orc\":\n                age = rand(12, 50);\n                break;\n            case \"Aasimar\":\n                age = rand(14, 160);\n                break;\n            case \"Kobold\":\n            case \"Genasi\":\n                age = rand(14, 120);\n                break;\n            case \"Halfling\":\n            case \"Verdan\":\n                age = rand(14, 250);\n                break;\n            case \"Orc of Exandria\":\n            case \"Orc of Ebberon\":\n            case \"Half Orc\":\n                age = rand(14, 75);\n                break;\n            case \"Gnome\":\n            case \"Loxodon\":\n                age = rand(14, 425);\n                break;\n            case \"Vedalkan\":\n                age = rand(14, 500);\n                break;\n            default:\n                age = rand(14, 80);\n                break;\n        }\n        return age;\n    }\n\n    _defineAge(dndrace) {\n        // Assuming ageReplacer is a static method in the corresponding class\n        // if (typeof window[dndrace.toLowerCase()]?.ageReplacer === 'function') {\n        //     return window[dndrace.toLowerCase()].ageReplacer(dndrace);\n        // }\n        return Age.defineDefaultAge(dndrace);\n    }\n}\n\n\n\n\n//# sourceURL=webpack://dnd_app_05/./build/js/npc/properties/age.js?");

/***/ }),

/***/ "./build/js/npc/properties/class.js":
/*!******************************************!*\
  !*** ./build/js/npc/properties/class.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NpcClass: () => (/* binding */ NpcClass)\n/* harmony export */ });\nclass NpcClass {\n    constructor() {\n        this.npcClass = this.generateClass();\n    }\n\n    // Array of Classes\n    generateClass() {\n        const npcClasses = [\n            'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk',\n            'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard',\n        ];\n        const randomIndex = Math.floor(Math.random() * npcClasses.length);\n        return npcClasses[randomIndex];\n    }\n\n    // Getter\n    getNpcClass() {\n        return this.npcClass;\n    }\n}\n\n\n//# sourceURL=webpack://dnd_app_05/./build/js/npc/properties/class.js?");

/***/ }),

/***/ "./build/js/npc/properties/gender.js":
/*!*******************************************!*\
  !*** ./build/js/npc/properties/gender.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gender: () => (/* binding */ Gender)\n/* harmony export */ });\nclass Gender {\n    constructor() {\n        this._setRandomGender();\n    }\n\n    _setRandomGender() {\n        const rng = Math.floor(Math.random() * 2) + 1; // Generates a random number, 1 or 2\n\n        this.gender = 'female';\n        this.manWoman = 'woman';\n        this.heshe = 'she';\n        this.hisher = 'her';\n        if (rng === 1) {\n            this.gender = 'male';\n            this.manWoman = 'man';\n            this.heshe = 'he';\n            this.hisher = 'his';\n        }\n    }\n\n    getGender() {\n        return this.gender;\n    }\n\n    getManWoman() {\n        return this.manWoman;\n    }\n\n    getHeShe() {\n        return this.heshe;\n    }\n\n    getHisHer() {\n        return this.hisher;\n    }\n\n    setHisHer(varValue) {\n        this.hisher = varValue;\n    }\n\n    setHeShe(varValue) {\n        this.heshe = varValue;\n    }\n\n    setManWoman(varValue) {\n        this.manWoman = varValue;\n    }\n\n    setGender(varValue) {\n        this.gender = varValue;\n    }\n}\n\n// Usage\n// const newGender = new Gender();\n// console.log(newGender.getGender(), newGender.getManWoman\n\n\n//# sourceURL=webpack://dnd_app_05/./build/js/npc/properties/gender.js?");

/***/ }),

/***/ "./build/js/npc/properties/name.js":
/*!*****************************************!*\
  !*** ./build/js/npc/properties/name.js ***!
  \*****************************************/
/***/ (() => {

eval("class Name {\n    constructor(dndrace, new_npc, array, age, origin) {\n        this.firstname = \"Ernest\";\n        this.nickname = \"Gary\";\n        this.lastname = \"Gygax\";\n        this.description = \"was an American game designer and author best known for co-creating the pioneering role-playing game Dungeons & Dragons (D&D) with Dave Arneson.\";\n\n        this.biography = this._generateName(dndrace, new_npc, array, age, origin);\n    }\n\n    _generateName(dndrace, new_npc, array, age, origin) {\n        let raceName;\n        if (Homebrew.isHomebrew(dndrace.getRace(), array)) {\n            raceName = Race.setHeritage(); // Assuming Race is another class or object with a method setHeritage\n        } else {\n            raceName = dndrace.getRace();\n        }\n\n        raceName = Race.lowercase(raceName); // Assuming Race is another class or object with a method lowercase\n        const raceInstance = new raceName(dndrace, new_npc, array, age, origin); // Creating an instance of the raceName class\n\n        this.lastname = raceInstance.getLastname();\n        this.firstname = raceInstance.getFirstname();\n        this.nickname = raceInstance.getNickname();\n        this.description = raceInstance.getDescription();\n    }\n\n    getFirstname() {\n        return this.firstname;\n    }\n\n    getLastname() {\n        return this.lastname;\n    }\n\n    getNickname() {\n        return this.nickname;\n    }\n\n    getDescription() {\n        return this.description;\n    }\n}\n\n// Usage\n// const nameInstance = new Name(dndrace, new_npc, array, age, origin);\n// console.log(nameInstance.getFirstname());\n\n\n//# sourceURL=webpack://dnd_app_05/./build/js/npc/properties/name.js?");

/***/ }),

/***/ "./build/js/npc/properties/race.js":
/*!*****************************************!*\
  !*** ./build/js/npc/properties/race.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Race: () => (/* binding */ Race)\n/* harmony export */ });\nclass Race {\n    constructor() {\n        //this.dndrace = Homebrew.setHomebrew(); // Assuming Homebrew is another class or object\n        this.racesArray = Race.raceArray();\n\n        this.dndrace = Race.randomRace(this.racesArray);\n        this.origin = Race.setHeritage(this.racesArray);\n        // this.racesArray = Race._updateRaceArray(this.dndrace, this.racesBaseArray);\n    }\n\n    static raceArray() {\n        return [\n            \"Dragonborn\", \"Dwarf\", \"Elf\", \"Gnome\", \"Half-Elf\", \"Halfling\",\n            \"Half Orc\", \"Human\", \"Tiefling\", \"Orc of Exandria\", \"Leonin\",\n            \"Satyr\", \"Aarakocra\", \"Genasi\", \"Goliath\", \"Aasimar\", \"Bugbear\",\n            \"Firbolg\", \"Goblin\", \"Hobgoblin\", \"Kenku\", \"Kobold\", \"Lizardfolk\",\n            \"Orc\", \"Tabaxi\", \"Triton\", \"Yuan-Ti Pureblood\", \"Feral Tiefling\",\n            \"Tortle\", \"Khalastar\", \"Changeling\", \"Orc of Eberron\", \"Shifter\",\n            \"Warforged\", \"Gith\", \"Centaur\", \"Loxodon\", \"Minotaur\",\n            \"Simic Hybrid\", \"Vedalkan\", \"Verdan\", \"Locathah\", \"Owlfolk\",\n            \"Rabbitfolk\",\n        ];\n    }\n\n    setRace(dndrace) {\n        this.dndrace = dndrace;\n        return this.dndrace;\n    }\n\n    // static _updateRaceArray(dndrace, array) {\n    //     if (dndrace.toLowerCase() === \"drow\") {\n    //         array.push(\"Drow\");\n    //         return array;\n    //     }\n    //     return array;\n    // }\n\n    static randomFromArray(array) {\n        const randomIndex = Math.floor(Math.random() * array.length);\n        return array[randomIndex];\n    }\n\n    static randomRace(array) {\n        return Race.randomFromArray(array);\n    }\n\n    static setHeritage(array) {\n        let heritage = Race.randomFromArray(array);\n        const exceptions = [\"Genasi\", \"Yuan-Ti Pureblood\", \"Simic Hybrid\"];\n        while (exceptions.includes(heritage)) {\n            heritage = Race.randomFromArray(array);\n        }\n        return heritage;\n    }\n\n    static isRaceInRaceArray(dndrace) {\n        return Race.raceArray().includes(dndrace);\n    }\n\n    static lowercase(dndrace) {\n        return dndrace.toLowerCase().replace(/[-\\s]/g, '');\n    }\n\n    getRace() {\n        return this.dndrace;\n    }\n\n    getOrigin() {\n        return this.origin;\n    }\n\n    getRaceArray() {\n        return this.racesArray;\n    }\n}\n\n\n\n//# sourceURL=webpack://dnd_app_05/./build/js/npc/properties/race.js?");

/***/ }),

/***/ "./build/js/npc sync recursive \\.js$":
/*!**********************************!*\
  !*** ./build/js/npc/ sync \.js$ ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./properties/age.js\": \"./build/js/npc/properties/age.js\",\n\t\"./properties/class.js\": \"./build/js/npc/properties/class.js\",\n\t\"./properties/gender.js\": \"./build/js/npc/properties/gender.js\",\n\t\"./properties/name.js\": \"./build/js/npc/properties/name.js\",\n\t\"./properties/race.js\": \"./build/js/npc/properties/race.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./build/js/npc sync recursive \\\\.js$\";\n\n//# sourceURL=webpack://dnd_app_05/./build/js/npc/_sync_\\.js$?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./build/js/dndnpcrng.js");
/******/ 	
/******/ })()
;