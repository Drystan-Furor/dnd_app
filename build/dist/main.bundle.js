/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./build/js/main.js":
/*!**************************!*\
  !*** ./build/js/main.js ***!
  \**************************/
/***/ (() => {

eval("\nwindow.dndnext = window.dndnext || {};\ndndnext = {\n    main: {}\n}\n\n\ndndnext.main.initApp = () => {\n    const hamburgerBtn = document.getElementById('hamburger-button');\n    const mobileMenu = document.getElementById('mobile-menu');\n\n    const toggleMenu = () => {\n        mobileMenu.classList.toggle('hidden');\n        mobileMenu.classList.toggle('flex');\n        hamburgerBtn.classList.toggle('toggle-btn')\n    }\n\n    hamburgerBtn.addEventListener('click', toggleMenu);\n    mobileMenu.addEventListener('click', toggleMenu);\n}\n\ndocument.addEventListener('DOMContentLoaded', dndnext.main.initApp);\n\n//# sourceURL=webpack://dnd_app_05/./build/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./build/js/main.js"]();
/******/ 	
/******/ })()
;