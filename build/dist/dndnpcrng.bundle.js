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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _npc_generators_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./npc/generators/character */ \"./build/js/npc/generators/character.js\");\n// overwatch\n\n// Automatically loads all files in the './npc/' folder and its subfolders\nconst requireModule = __webpack_require__(\"./build/js/npc sync recursive \\\\.js$\");\n\nrequireModule.keys().forEach(filename => {\n    // Removes the \"./\" from the filename\n    const moduleName = filename.replace('./', '');\n    requireModule(filename);\n});\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const button = document.getElementById(\"generateNpc\");\n\n    button.addEventListener(\"click\", function () {\n        const characterParagraph = document.getElementById(\"character\");\n        const new_npc = new _npc_generators_character__WEBPACK_IMPORTED_MODULE_0__.DndNpcRng();\n        const character = new_npc.getNewNpc();\n        const biography = new_npc.getString();\n\n        // Store the current innerHTML before overwriting it\n        const currentBiography = characterParagraph.innerHTML;\n\n        // Set the concatenated string as the innerHTML of the paragraph\n        if(!character){\n            return false;\n        }\n        characterParagraph.innerHTML = biography;\n        previousCharacter(currentBiography);\n    });\n\n\n\n\n\n    // Add event listener for copyButton here\n    const copyButton = document.getElementById('copyButton');\n    if(copyButton) { // Check if copyButton exists\n        copyButton.addEventListener('click', function() {\n            const characterParagraph = document.getElementById('character');\n            navigator.clipboard.writeText(characterParagraph.innerText).then(function() {\n                console.log('copied to clipboard!');\n            }).catch(function(err) {\n                console.error('Unable to copy text', err);\n            });\n        });\n    }\n    // Add event listener for copyButton here\n    const copyButton2 = document.getElementById('copyButton2');\n    if(copyButton2) { // Check if copyButton exists\n        copyButton2.addEventListener('click', function() {\n            const previousCharacterParagraph = document.getElementById('previous-character');\n            navigator.clipboard.writeText(previousCharacterParagraph.innerText).then(function() {\n                console.log('copied to clipboard!');\n            }).catch(function(err) {\n                console.error('Unable to copy text', err);\n            });\n        });\n    }\n});\n\nfunction previousCharacter(previousBiography) {\n    const previousCharacterParagraph = document.getElementById(\"previous-character\");\n    previousCharacterParagraph.innerHTML = previousBiography;\n}\n\n\n//# sourceURL=webpack://dnd_app_05/./build/js/dndnpcrng.js?");

/***/ }),

/***/ "./build/js/npc/generators/character.js":
/*!**********************************************!*\
  !*** ./build/js/npc/generators/character.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DndNpcRng: () => (/* binding */ DndNpcRng)\n/* harmony export */ });\n/* harmony import */ var _properties_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../properties/class */ \"./build/js/npc/properties/class.js\");\n/* harmony import */ var _properties_race__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../properties/race */ \"./build/js/npc/properties/race.js\");\n/* harmony import */ var _properties_gender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../properties/gender */ \"./build/js/npc/properties/gender.js\");\n/* harmony import */ var _properties_age__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../properties/age */ \"./build/js/npc/properties/age.js\");\n\n\n\n\n\nclass DndNpcRng {\n    constructor() {\n        this.new_npc = this._dndRngNpc();\n        this.string = this._writeStory(this.new_npc);\n    }\n\n    getNewNpc() {\n        return this.new_npc;\n    }\n\n    getString() {\n        return this.string;\n    }\n\n    _dndRngNpc() {\n        // Initialize the properties and classes\n        const race = new _properties_race__WEBPACK_IMPORTED_MODULE_1__.Race().getRace();\n        const npcClass = new _properties_class__WEBPACK_IMPORTED_MODULE_0__.NpcClass().getNpcClass();\n        const gender = new _properties_gender__WEBPACK_IMPORTED_MODULE_2__.Gender().getGender();\n        const age = new _properties_age__WEBPACK_IMPORTED_MODULE_3__.Age(race).getAge();\n\n        // Construct object with properties of classes\n        return {\n            race: race,\n            class: npcClass,\n            gender: gender,\n            age: age,\n            // ... other properties ...\n        };\n    }\n\n    // _subjectArray() {\n    //     const randsubject = [\n    //         \" the  \" + this.dndrace,\n    //         \" this \" + this.gender,\n    //         this.heshe,\n    //         this.nickname,\n    //     ];\n    //     return randsubject[Math.floor(Math.random() * randsubject.length)];\n    // }\n\n    _writeStory(npc) {\n        let string = \"You meet a \" + npc.gender + \" \" + npc.race + \" \" + npc.class + \". \";\n        string = string + \"Who is \" + npc.age + \" years old.\";\n\n\n        return string;\n    }\n}\n\n\n\n\n//# sourceURL=webpack://dnd_app_05/./build/js/npc/generators/character.js?");

/***/ }),

/***/ "./build/js/npc/generators/profile.js":
/*!********************************************!*\
  !*** ./build/js/npc/generators/profile.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProfileGenerator: () => (/* binding */ ProfileGenerator)\n/* harmony export */ });\n/* harmony import */ var _profile_mouth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../profile/mouth */ \"./build/js/npc/profile/mouth.js\");\n/* harmony import */ var _profile_nose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile/nose */ \"./build/js/npc/profile/nose.js\");\n/* harmony import */ var _profile_eyes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile/eyes */ \"./build/js/npc/profile/eyes.js\");\n/* harmony import */ var _profile_chin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile/chin */ \"./build/js/npc/profile/chin.js\");\n/* harmony import */ var _profile_teeth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile/teeth */ \"./build/js/npc/profile/teeth.js\");\n/* harmony import */ var _profile_teeth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_profile_teeth__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _verbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verbs */ \"./build/js/npc/generators/verbs.js\");\n// Usage\n\n\n\n\n\n\n\n// const chinInstance = new Chin('someRace', 'someGender');\n// console.log(chinInstance.getChin());\n//\n// // Usage\n// const eyesInstance = new Eyes('someRace', 'someGender');\n// console.log(eyesInstance.getEyes());\n//\n//\n// // Usage\n// const mouthInstance = new Mouth('someRace', 'someGender');\n// console.log(mouthInstance.getMouth());\n//\n// // Usage\n// const noseInstance = new Nose('someRace', 'someGender');\n// console.log(noseInstance.getNose());\n//\n// // Usage\n// const teethInstance = new Teeth('someRace', 'someGender');\n// console.log(teethInstance.getTeeth());\n\n//-----------------------------------------------------------------------------------------------\n\nclass ProfileGenerator {\n    constructor(dndrace, new_npc, classInstance) {\n        this.face = this._facialConstruction(dndrace, new_npc, classInstance);\n    }\n\n    getChin() {\n        return this.chin;\n    }\n\n    getEyes() {\n        return this.eyes;\n    }\n\n    getMouth() {\n        return this.mouth;\n    }\n\n    getNose() {\n        return this.nose;\n    }\n\n    getTeeth() {\n        return this.teeth;\n    }\n\n    getFace() {\n        return this.face;\n    }\n\n    _facialConstruction(dndrace, new_npc, classInstance) {\n        const manWoman = new_npc.getManWoman();\n        const heshe = new_npc.getHeShe();\n        const hisher = new_npc.getHisHer();\n        const gender = new_npc.getGender();\n\n        const eyes = new _profile_eyes__WEBPACK_IMPORTED_MODULE_2__.Eyes(dndrace, new_npc);\n        this.eyes = eyes.getEyes();\n\n        const nose = new _profile_nose__WEBPACK_IMPORTED_MODULE_1__.Nose(dndrace, new_npc);\n        this.nose = nose.getNose();\n\n        const mouth = new _profile_mouth__WEBPACK_IMPORTED_MODULE_0__.Mouth(dndrace, new_npc);\n        this.mouth = mouth.getMouth();\n\n        const teeth = new _profile_teeth__WEBPACK_IMPORTED_MODULE_4__.Teeth(dndrace, new_npc);\n        this.teeth = teeth.getTeeth();\n\n        const chin = new _profile_chin__WEBPACK_IMPORTED_MODULE_3__.Chin(dndrace, new_npc);\n        this.chin = chin.getChin();\n\n        const face = \" You \" + _verbs__WEBPACK_IMPORTED_MODULE_5__.VerbsGenerator.getObservation() +\n            \" this \" + manWoman + \" has \" + this.nose +\n            \". The \" + classInstance + \" meets your gaze with \" +\n            this.eyes + \". \" +\n            \"As you seize up the \" + manWoman + \", you \" +\n            _verbs__WEBPACK_IMPORTED_MODULE_5__.VerbsGenerator.getObservation() + \" \" + heshe + \" has \" +\n            this.chin + \" and \" + hisher + \" mouth is set with \" +\n            this.mouth + \". \" +\n            \"When the \" + dndrace + \" is talking or shouting, you \" +\n            _verbs__WEBPACK_IMPORTED_MODULE_5__.VerbsGenerator.getObservation() + \" \" + heshe + \" \" + this.teeth;\n\n        return face;\n    }\n}\n\n\n//# sourceURL=webpack://dnd_app_05/./build/js/npc/generators/profile.js?");

/***/ }),

/***/ "./build/js/npc/generators/verbs.js":
/*!******************************************!*\
  !*** ./build/js/npc/generators/verbs.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VerbsGenerator: () => (/* binding */ VerbsGenerator)\n/* harmony export */ });\nclass VerbsGenerator {\n    static quality() {\n        const qualities = ['cheap', 'affordable', 'quality', 'expensive quality'];\n        return qualities[Math.floor(Math.random() * qualities.length)];\n    }\n\n    static getComplexity() {\n        const complexities = ['clean', 'plain', 'straightforward', 'classic', 'simple', 'beautiful'];\n        return complexities[Math.floor(Math.random() * complexities.length)];\n    }\n\n    static maintenance() {\n        const maintenances = ['clean and slick', 'rusted', 'moldy', 'oxidated', 'clean', 'corroded', 'damaged', 'shining', 'smooth', 'big', 'dented', 'flawed', 'dirty', 'stained', 'filthy', 'greasy', 'begrimed', 'smudged', 'squalid', 'disheveled', 'grimey', 'well maintained', 'bloodstained', 'unkempt'];\n        return maintenances[Math.floor(Math.random() * maintenances.length)];\n    }\n\n    static getObservation() {\n        const observations = ['see', 'clearly notice', 'cautiously observe', 'simply spot', 'behold', 'distinguish from a distance', 'discern', 'glimpse', 'mark', 'catch a glimpse that', 'catch sight', 'make out', 'take notice', 'survey'];\n        return observations[Math.floor(Math.random() * observations.length)];\n    }\n\n    static getIndicator() {\n        const indicators = ['indicates', 'connotes', 'denotes', 'hints', 'implies', 'suggests', 'implies', 'symbolizes', 'specifies', 'reveals', 'proves', 'attests'];\n        return indicators[Math.floor(Math.random() * indicators.length)];\n    }\n\n    static getLength() {\n        const lengths = ['short', 'long', 'cape like', 'full', 'wide'];\n        return lengths[Math.floor(Math.random() * lengths.length)];\n    }\n\n    static holding() {\n        const clasping = ['clasps', 'clutches', 'clenches', 'holds', 'wears', 'is holding', 'is tightly squeezing', 'is caressing', 'is fiddling with', 'is clasping'];\n        return clasping[Math.floor(Math.random() * clasping.length)];\n    }\n\n    static named() {\n        const namings = ['named', 'renamed', 'call', 'refer to', 'dubbed', 'labeled', 'titled'];\n        return namings[Math.floor(Math.random() * namings.length)];\n    }\n}\n\n// Example usage:\n// const observation = VerbsGenerator.getObservation();\n// const newComplexity = VerbsGenerator.getComplexity();\n// const newLength = VerbsGenerator.getLength();\n// const newClasp = VerbsGenerator.holding();\n\n\n//# sourceURL=webpack://dnd_app_05/./build/js/npc/generators/verbs.js?");

/***/ }),

/***/ "./build/js/npc/profile/chin.js":
/*!**************************************!*\
  !*** ./build/js/npc/profile/chin.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Chin: () => (/* binding */ Chin)\n/* harmony export */ });\nclass Chin {\n    /**\n     * Constructs a chin\n     * @param {string} dndrace - The race\n     * @param {string} newNpc - The gender\n     */\n    constructor(dndrace, newNpc) {\n        this.chin = this._chinShape(dndrace, newNpc);\n    }\n\n    /**\n     * Arrays of strings Default Chins\n     * @return {string} - The chin\n     */\n    static defaultChin() {\n        const chinShapes = [\n            'a rather ', 'quite the', 'a very defined', 'a puffed',\n            'a very protruding', 'a bulbous', 'a very small', 'a bit of a',\n        ];\n\n        const chinCurves = [\n            'pointy', 'round', 'square',\n        ];\n\n        const chinShape = chinShapes[Math.floor(Math.random() * chinShapes.length)];\n        const chinCurve = chinCurves[Math.floor(Math.random() * chinCurves.length)];\n        const chin = `${chinShape} ${chinCurve} chin`;\n\n        return chin;\n    }\n\n    /**\n     * Build or choose specific array. Select random value string\n     * @param {string} dndrace - The race\n     * @param {string} newNpc - The gender\n     * @return {string} - The chin\n     */\n    _chinShape(dndrace, newNpc) {\n        // Assuming chinReplacer is a method in some other class named by the value of dndrace\n        const raceClass = window[dndrace.toLowerCase()];\n        if (raceClass && typeof raceClass.chinReplacer === 'function') {\n            return raceClass.chinReplacer(dndrace, newNpc);\n        } else {\n            return Chin.defaultChin();\n        }\n    }\n\n    /**\n     * Getter\n     * @return {string} - The chin\n     */\n    getChin() {\n        return this.chin;\n    }\n}\n\n\n\n\n//# sourceURL=webpack://dnd_app_05/./build/js/npc/profile/chin.js?");

/***/ }),

/***/ "./build/js/npc/profile/eyes.js":
/*!**************************************!*\
  !*** ./build/js/npc/profile/eyes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Eyes: () => (/* binding */ Eyes)\n/* harmony export */ });\nclass Eyes {\n    /**\n     * Constructs eye shapes and determine if blind or not\n     * @param {string} dndrace - The race\n     * @param {string} newNpc - The gender\n     */\n    constructor(dndrace, newNpc) {\n        this.eyes = this._eyeShape(dndrace, newNpc);\n    }\n\n    /**\n     * Build or choose specific array. Select random value string\n     * @param {string} dndrace - The race\n     * @param {string} newNpc - The gender\n     * @return {string} - The eyes\n     */\n    _eyeShape(dndrace, newNpc) {\n        // Assuming eyesReplacer is a method in some other class named by the value of dndrace\n        const raceClass = window[dndrace.toLowerCase()];\n        if (raceClass && typeof raceClass.eyesReplacer === 'function') {\n            return raceClass.eyesReplacer(dndrace, newNpc);\n        } else {\n            return Eyes.canSee();\n        }\n    }\n\n    /**\n     * Array of eye shapes\n     * @return {string} - The eye shape\n     */\n    static defaultEyeShape() {\n        const eyeShapes = [\n            \"squinty eyes\", \"big eyes\", \"small eyes\",\n            \"fairly large eyes\", \"tired eyes\",\n            \"energetic eyes\", \"drowzy eyes\",\n            \"round eyes\", \"almond shaped eyes\",\n            \"wide set eyes\", \"close set eyes\",\n            \"prominent eyes\", \"downturned eyes\",\n            \"upturned eyes\", \"deep set eyes\", \"droopy eyes\",\n            \"monolid eyes\",\n        ];\n\n        const eyes = eyeShapes[Math.floor(Math.random() * eyeShapes.length)];\n        return eyes;\n    }\n\n    /**\n     * D100 if one can see.\n     * 1% chance to be blinded\n     * 9% to be naturally blind /half blind\n     * array to randomize blindness\n     * @return {string} - The eyes\n     */\n    static canSee() {\n        let eyes = Eyes.defaultEyeShape();\n        const hasEyes = Math.floor(Math.random() * 100) + 1;\n        if (hasEyes === 1) {\n            eyes = 'empty eye sockets, eyes gauged out';\n        } else if (hasEyes >= 2 && hasEyes <= 10) {\n            const blindEye = [\n                \", the left eye is blind\", \", the right eye is blind\",\n                \", but both eyes are blind\",\n            ];\n            const blindness = blindEye[Math.floor(Math.random() * blindEye.length)];\n            eyes += blindness;\n        }\n        return eyes;\n    }\n\n    /**\n     * Getter\n     * @return {string} - The eyes\n     */\n    getEyes() {\n        return this.eyes;\n    }\n}\n\n\n\n\n//# sourceURL=webpack://dnd_app_05/./build/js/npc/profile/eyes.js?");

/***/ }),

/***/ "./build/js/npc/profile/mouth.js":
/*!***************************************!*\
  !*** ./build/js/npc/profile/mouth.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Mouth: () => (/* binding */ Mouth)\n/* harmony export */ });\nclass Mouth {\n    /**\n     * Constructs and selects a random value string for mouth\n     * @param {string} dndrace - The race\n     * @param {string} newNpc - The gender\n     */\n    constructor(dndrace, newNpc) {\n        this.mouth = this._mouthShape(dndrace, newNpc);\n    }\n\n    /**\n     * Array of default values for Mouth\n     * @return {string} - The mouth shape\n     */\n    static defaultMouths() {\n        const mouthShapes = [\n            \"full lips\", \"round lips\", \"bow shaped lips\", \"heavy lower lips\",\n            \"heart shaped lips\", \"heavy upper lips\", \"wide lips\", \"thin lips\",\n            \"downward turned lips\", \"perfectly proportioned lips\",\n        ];\n        const mouth = mouthShapes[Math.floor(Math.random() * mouthShapes.length)];\n        return mouth;\n    }\n\n    /**\n     * Build or choose specific array. Select random value string\n     * @param {string} dndrace - The race\n     * @param {string} newNpc - The gender\n     * @return {string} - The mouth\n     */\n    _mouthShape(dndrace, newNpc) {\n        // Assuming mouthReplacer is a method in some other class named by the value of dndrace\n        const raceClass = window[dndrace.toLowerCase()];\n        if (raceClass && typeof raceClass.mouthReplacer === 'function') {\n            return raceClass.mouthReplacer(dndrace, newNpc);\n        } else {\n            return Mouth.defaultMouths();\n        }\n    }\n\n    /**\n     * Getter\n     * @return {string} - The mouth\n     */\n    getMouth() {\n        return this.mouth;\n    }\n}\n\n\n\n//# sourceURL=webpack://dnd_app_05/./build/js/npc/profile/mouth.js?");

/***/ }),

/***/ "./build/js/npc/profile/nose.js":
/*!**************************************!*\
  !*** ./build/js/npc/profile/nose.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Nose: () => (/* binding */ Nose)\n/* harmony export */ });\nclass Nose {\n    /**\n     * Constructs and selects a random value string for nose\n     * @param {string} dndrace - The race\n     * @param {string} newNpc - The gender\n     */\n    constructor(dndrace, newNpc) {\n        this.nose = this._randomNose(dndrace, newNpc);\n    }\n\n    /**\n     * Build or choose specific array. Select random value string\n     * @param {string} dndrace - The race\n     * @param {string} newNpc - The gender\n     * @return {string} - The nose\n     */\n    _randomNose(dndrace, newNpc) {\n        // Assuming noseReplacer is a method in some other class named by the value of dndrace\n        const raceClass = window[dndrace.toLowerCase()];\n        if (raceClass && typeof raceClass.noseReplacer === 'function') {\n            return raceClass.noseReplacer(dndrace, newNpc);\n        } else {\n            return Nose.defaultNose();\n        }\n    }\n\n    /**\n     * Default Nose\n     * @return {string} - The nose\n     */\n    static defaultNose() {\n        const nose = Math.floor(Math.random() * 100) + 1;\n        if (nose >= 1 && nose <= 24) return 'a very fleshy, prominent big nose';\n        if (nose <= 38) return 'a celestial upturned nose, small in size with a dent at the nose bridge and a protruding tip';\n        if (nose <= 47) return 'an eagle nose. With a strong sloping curve that prominently protrudes from the face';\n        if (nose <= 56) {\n            const outlines = [\"subtle\", \"protruding\"];\n            const outline = outlines[Math.floor(Math.random() * outlines.length)];\n            return `a bumpy nose that features bumpy outlines with ${outline} curves located at the tip of the nose`;\n        }\n        if (nose <= 64) return 'a very snub nose, thin and pointy, small in size but quite round';\n        if (nose <= 68) return 'a \"Hawk\" nose that has similarities with the curved beaks of eagles and other predatory birds. It has a dramatic arched shape and a protruding bridge, making them look long and small';\n        if (nose <= 76) return 'a perfectly straight nose. One of the most aesthetically pleasing of all nose shapes. It gives a distinct and attractive profile since it doesn’t have any humps or curves';\n        if (nose <= 84) return 'a nubian nose, rather big, with very prominent nostrils';\n        if (nose <= 91) return 'a thin and flat shaped nose with a short tip';\n        if (nose <= 100) return 'a bulbous nose, it has a a swollen, disproportionate nasal tip, almost like it\\'s too big. Imagine something like a ball positioned at the end of the nose';\n        return 'a very fleshy, prominent big nose'; // This will never be reached, but it's here as a fallback.\n    }\n\n\n    /**\n     * Getter\n     * @return {string} - The nose\n     */\n    getNose() {\n        return this.nose;\n    }\n}\n\n\n\n\n//# sourceURL=webpack://dnd_app_05/./build/js/npc/profile/nose.js?");

/***/ }),

/***/ "./build/js/npc/profile/teeth.js":
/*!***************************************!*\
  !*** ./build/js/npc/profile/teeth.js ***!
  \***************************************/
/***/ (() => {

eval("// export class Teeth {\n//     /**\n//      * Constructs and selects a random value string for teeth\n//      * @param {string} dndrace - The race\n//      * @param {string} newNpc - The gender\n//      */\n//     constructor(dndrace, newNpc) {\n//         this.teeth = this._teethShape(dndrace, newNpc);\n//     }\n//\n//     /**\n//      * Array of DEFAULT types\n//      * @return {string} - The teeth type\n//      */\n//     static _teethTypes() {\n//         const teethTypes = [\n//             'rotten ', 'shiny white', 'yellow', 'buck', 'quite large',\n//             'rather small', 'yellow and grey', 'crooked', 'canine whiskers',\n//         ];\n//         const teethType = teethTypes[Math.floor(Math.random() * teethTypes.length)];\n//         return teethType;\n//     }\n//\n//     /**\n//      * Array of DEFAULT sentence-part\n//      * @return {string} - The default teeth\n//      */\n//     static defaultTeeth() {\n//         // Assuming MaterialGenerator and Verbsgenerator are other classes with the mentioned static methods\n//         const dentalwork = [\n//             \"is missing a tooth\",\n//             \"is missing several teeth\",\n//             `has a ${MaterialGenerator.getMetalType()} tooth`,\n//             `has several ${MaterialGenerator.getMetalType()} teeth`,\n//             `has ${Teeth._teethTypes()} teeth`,\n//             \"has no teeth at all\",\n//             \"has good dentals\",\n//             \"has yellow teeth, but all there\",\n//             \"has fairly good dentals\",\n//             `has ${Teeth._teethTypes()} teeth that could use some bracers`,\n//             \"has no regular teeth but canine whiskers\",\n//             \"has good dentals\",\n//             \"has rather bad dentals\",\n//             \"has sharp edged teeth, as if they are trimmed or filed\",\n//             `has fake teeth, like a prosthetic made of ${Verbsgenerator.quality()} ${MaterialGenerator.getMetalType()}`,\n//         ];\n//         const teeth = dentalwork[Math.floor(Math.random() * dentalwork.length)];\n//         return teeth;\n//     }\n//\n//     /**\n//      * Build or choose specific array. Select random value string\n//      * @param {string} dndrace - The race\n//      * @param {string} newNpc - The gender\n//      * @return {string} - The teeth\n//      */\n//     static _teethShape(dndrace, newNpc) {\n//         // Assuming teethReplacer is a method in some other class named by the value of dndrace\n//         const raceClass = window[dndrace.toLowerCase()];\n//         if (raceClass && typeof raceClass.teethReplacer === 'function') {\n//             return raceClass.teethReplacer(dndrace, newNpc);\n//         } else {\n//             return Teeth.defaultTeeth();\n//         }\n//     }\n//\n//     /**\n//      * Getter\n//      * @return {string} - The teeth\n//      */\n//     getTeeth() {\n//         return this.teeth;\n//     }\n// }\n//\n//\n\n\n//# sourceURL=webpack://dnd_app_05/./build/js/npc/profile/teeth.js?");

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Name: () => (/* binding */ Name)\n/* harmony export */ });\nclass Name {\n    constructor(dndrace, new_npc, array, age, origin) {\n        this.firstname = \"Ernest\";\n        this.nickname = \"Gary\";\n        this.lastname = \"Gygax\";\n        this.description = \"was an American game designer and author best known for co-creating the pioneering role-playing game Dungeons & Dragons (D&D) with Dave Arneson.\";\n\n        this.biography = this._generateName(dndrace, new_npc, array, age, origin);\n    }\n\n    _generateName(dndrace, new_npc, array, age, origin) {\n        let raceName;\n        if (Homebrew.isHomebrew(dndrace.getRace(), array)) {\n            raceName = Race.setHeritage(); // Assuming Race is another class or object with a method setHeritage\n        } else {\n            raceName = dndrace.getRace();\n        }\n\n        raceName = Race.lowercase(raceName); // Assuming Race is another class or object with a method lowercase\n        const raceInstance = new raceName(dndrace, new_npc, array, age, origin); // Creating an instance of the raceName class\n\n        this.lastname = raceInstance.getLastname();\n        this.firstname = raceInstance.getFirstname();\n        this.nickname = raceInstance.getNickname();\n        this.description = raceInstance.getDescription();\n    }\n\n    getFirstname() {\n        return this.firstname;\n    }\n\n    getLastname() {\n        return this.lastname;\n    }\n\n    getNickname() {\n        return this.nickname;\n    }\n\n    getDescription() {\n        return this.description;\n    }\n}\n\n// Usage\n// const nameInstance = new Name(dndrace, new_npc, array, age, origin);\n// console.log(nameInstance.getFirstname());\n\n\n//# sourceURL=webpack://dnd_app_05/./build/js/npc/properties/name.js?");

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

eval("var map = {\n\t\"./generators/character.js\": \"./build/js/npc/generators/character.js\",\n\t\"./generators/profile.js\": \"./build/js/npc/generators/profile.js\",\n\t\"./generators/verbs.js\": \"./build/js/npc/generators/verbs.js\",\n\t\"./profile/chin.js\": \"./build/js/npc/profile/chin.js\",\n\t\"./profile/eyes.js\": \"./build/js/npc/profile/eyes.js\",\n\t\"./profile/mouth.js\": \"./build/js/npc/profile/mouth.js\",\n\t\"./profile/nose.js\": \"./build/js/npc/profile/nose.js\",\n\t\"./profile/teeth.js\": \"./build/js/npc/profile/teeth.js\",\n\t\"./properties/age.js\": \"./build/js/npc/properties/age.js\",\n\t\"./properties/class.js\": \"./build/js/npc/properties/class.js\",\n\t\"./properties/gender.js\": \"./build/js/npc/properties/gender.js\",\n\t\"./properties/name.js\": \"./build/js/npc/properties/name.js\",\n\t\"./properties/race.js\": \"./build/js/npc/properties/race.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./build/js/npc sync recursive \\\\.js$\";\n\n//# sourceURL=webpack://dnd_app_05/./build/js/npc/_sync_\\.js$?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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