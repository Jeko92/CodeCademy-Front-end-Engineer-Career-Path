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

/***/ "./src/uncooked/ingredients.js":
/*!*************************************!*\
  !*** ./src/uncooked/ingredients.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _soupDays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./soupDays */ \"./src/uncooked/soupDays.js\");\n\n\nlet index = 0;\nconst soupParagraph = document.getElementById(\"soup\");\nconst dayParagraph = document.getElementById(\"day\");\nconst nextButton = document.getElementById(\"next\");\nconst previousButton = document.getElementById(\"previous\");\nconst setSoupAndDay = () => {\n  soupParagraph.innerHTML = _soupDays__WEBPACK_IMPORTED_MODULE_0__.soups[index];\n  dayParagraph.innerHTML = _soupDays__WEBPACK_IMPORTED_MODULE_0__.days[index];\n};\nsetSoupAndDay();\nconst tomorrow = () => {\n  index = (index + 1) % _soupDays__WEBPACK_IMPORTED_MODULE_0__.days.length;\n  setSoupAndDay();\n};\nnextButton.addEventListener(\"click\", tomorrow);\nconst yesterday = () => {\n  index = (index - 1 + _soupDays__WEBPACK_IMPORTED_MODULE_0__.days.length) % _soupDays__WEBPACK_IMPORTED_MODULE_0__.days.length;\n  setSoupAndDay();\n};\npreviousButton.addEventListener(\"click\", yesterday);\n\n\n//# sourceURL=webpack://4.10.3.1_lesson-building-apps-with-webpack/./src/uncooked/ingredients.js?");

/***/ }),

/***/ "./src/uncooked/soupDays.js":
/*!**********************************!*\
  !*** ./src/uncooked/soupDays.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   days: () => (/* binding */ days),\n/* harmony export */   soups: () => (/* binding */ soups)\n/* harmony export */ });\nconst days = [\n  \"Monday\",\n  \"Tuesday\",\n  \"Wednesday\",\n  \"Thursday\",\n  \"Friday\",\n  \"Saturday\",\n  \"Sunday\",\n];\nconst soups = [\n  \"Clam Chowder\",\n  \"Minestrone\",\n  \"Chicken Noodle\",\n  \"Tortilla\",\n  \"Gazpacho\",\n  \"Wonton\",\n  \"Tom Yum\",\n];\n\n\n\n//# sourceURL=webpack://4.10.3.1_lesson-building-apps-with-webpack/./src/uncooked/soupDays.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/uncooked/ingredients.js");
/******/ 	
/******/ })()
;