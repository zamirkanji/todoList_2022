/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/menu.png */ "./src/img/menu.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/delete.png */ "./src/img/delete.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/chevron-down (1).png */ "./src/img/chevron-down (1).png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black-color: black;\n    --font-weight: 300;\n    --border-test: 2px solid yellow;\n    --dark-blue: #0F2027;\n    --middle-blue: #203A43;\n    --light-blue: #2C5364;\n    --closetowhite: #598091;\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing: border-box;\n    font-weight: var(--font-weight);\n}\n\nhtml {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: black;\n}\n\n.text {\n    color: var(--closetowhite);\n    /* color: whitesmoke; */\n    /* text-align: center; */\n}\n\n.main-content {\n    min-height: 100%;\n    margin: 0;\n    padding: 10px;\n    /* overflow: hidden; */\n    display: flex;\n    /* flex-direction: column; */\n    background-color: black;\n    gap: 10px;\n}\n\n/* main sidebar */\n.main-sidebar {\n    /* margin: 10px 0px 10px 10px; */\n    margin: 0;\n    padding: 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    /* border: 2px solid var(--light-blue); */\n    /* background-color: var(--dark-blue); */\n    /* filter: blur(50%); */\n    gap: 10px;\n    border-radius: 5px;\n    transition: all 1s ease-in;\n}\n\n\n.sidebar-title  {\n    flex: .25;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--middle-blue);\n    text-align: center;\n    border-radius: 5px;\n    letter-spacing: 1px;\n    font-size: 100%;\n}\n\n#sidebar-title-text {\n    color: white;\n}\n\n.sidebar-project-list {\n    flex: 2.25;\n    width: 100%;\n    border-radius: 5px;\n}\n\n.sidebar-main-list {\n    margin: 0;\n    padding: 8px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 10px;\n}\n\n.sidebar-list-item {\n    margin: 0;\n    padding: 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--light-blue);\n    height: 25px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    border-radius: 5px;\n    font-size: 100%;\n}\n\n#current-p {\n    background-color: var(--closetowhite);\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n.projectName {\n    color: white;\n}\n\n.sidebar-create-new-btn {\n    flex: .5;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--middle-blue);\n    border-radius: 5px;\n}\n\n/* ************************* main body ************************** */\n.main-body {\n    margin: 0;\n    padding: 0;\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n}\n\n.main-header {\n    margin: 0;\n    padding: 0;\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.menu-icon{\n    width: 30px;\n    height: 30px;\n}\n#menu-icon {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100%;\n}\n\n#projectNameHeader {\n    color: white;\n    letter-spacing: 1px;\n    /* border: 1px solid white; */\n}\n\n#header-text {\n    color: white;\n    letter-spacing: 1px;\n}\n\n\n\n\n/* main list content */\n.main-list-content {\n    flex: 2.75;\n    display: flex;\n    flex-direction: column;\n    /* border: 10px solid var(--black-color); */\n    /* margin: 10px; */\n    margin: 0;\n    padding: 0;\n    gap: 10px;\n}\n\n.list-container {\n    flex: 2.25;\n    margin: 0;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    background-color: var(--middle-blue);\n    border-radius: 5px;\n    gap: 50px;\n}\n\n.ordered-item-list {\n    flex: 2;\n    /* height: 100%;\n    width: 100%; */\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 10px;\n}\n\n.list-item-options {\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    /* border: 1px solid violet; */\n}\n\n#create-new-item-btn {\n    width: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n\n.form-main {\n    /* justify-content: space-between; */\n    gap: 10px;\n    width: 75%;\n    display: flex;\n    /* border: 1px solid violet; */\n    /* align-items: center; */\n}\n\n.label-new-item {\n    text-align: center;\n    flex: .5;\n}\n\n#input-new-item {\n    border-radius: 5px;\n    border: none;\n    flex: 1.5;\n}\n\n#submit-btn {\n    flex: .5;\n}\n\n\n/* *********************each item********************* */\n.list-item {\n    margin: 0;\n    padding: 0 0 0 10px;\n    /* list-style-type: none;\n    text-decoration: none;\n    list-style: none; */\n    /* background-color: var(--closetowhite); */\n    background-color: var(--black-color);\n    height: 45px;\n    color: white;\n    letter-spacing: 1px;\n    display: flex;\n    border-radius: 5px;\n    \n    /* align-items: center; */\n    /* justify-content: space-between; */\n    /* font-size: 100%; */\n    /* flex: 1.75; */\n}\n\n.item-text {\n    margin: 0;\n    padding: 0;\n    color: white;\n    flex: 1.75;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.item-options-container {\n    flex: .3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    padding: 10px;\n    /* height: 100%; */\n    gap: 5px;\n    background-color: var(--closetowhite);\n    border-radius: 0 5px 5px 0;\n}\n\n#item-checkbox {\n    flex: 1;\n    /* border-radius: 50px; */\n}\n\n.item-delete-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n\n#delete-item {\n    border: none;\n    border-radius: 10px;\n    background-color: var(--closetowhite);\n}\n\n\n#delete-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n    color: white;\n}\n\n.expand-icon-btn {\n    background-color: var(--closetowhite);\n    border: none;\n    flex: 1;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.expand-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n}\n\n\n\n\n.item-details-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n#item-details {\n    border: none;\n    border-radius: 10px;\n}\n\n.item-date-created {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n\n.expand-container {\n    margin: 0;\n    padding: 0 8px 0 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--closetowhite);\n    height: 150px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    border-radius: 5px;\n    font-size: 85%;\n}\n\n.details-container {\n    flex: .5;\n    /* border: 1px solid var(--closetowhite); */\n    display: flex;\n    justify-content: center;\n    background-color: var(--dark-blue);\n    /* align-items: center; */\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.details-title {\n    color: var(--closetowhite);\n    font-size: 100%;\n}\n\n\n\n\n\n\n\n\n\n/* ******************** general ********************** */\n\n.display {\n    display: none;\n    animation: ease-in 1s;\n}\n\n.btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 10px;\n}\n\n.item-btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 5px;\n    /* width: 50px; */\n    width: 65%;\n    height: 65%;\n    font-size: 75%;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --black-color: black;\n    --font-weight: 300;\n    --border-test: 2px solid yellow;\n    --dark-blue: #0F2027;\n    --middle-blue: #203A43;\n    --light-blue: #2C5364;\n    --closetowhite: #598091;\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing: border-box;\n    font-weight: var(--font-weight);\n}\n\nhtml {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: black;\n}\n\n.text {\n    color: var(--closetowhite);\n    /* color: whitesmoke; */\n    /* text-align: center; */\n}\n\n.main-content {\n    min-height: 100%;\n    margin: 0;\n    padding: 10px;\n    /* overflow: hidden; */\n    display: flex;\n    /* flex-direction: column; */\n    background-color: black;\n    gap: 10px;\n}\n\n/* main sidebar */\n.main-sidebar {\n    /* margin: 10px 0px 10px 10px; */\n    margin: 0;\n    padding: 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    /* border: 2px solid var(--light-blue); */\n    /* background-color: var(--dark-blue); */\n    /* filter: blur(50%); */\n    gap: 10px;\n    border-radius: 5px;\n    transition: all 1s ease-in;\n}\n\n\n.sidebar-title  {\n    flex: .25;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--middle-blue);\n    text-align: center;\n    border-radius: 5px;\n    letter-spacing: 1px;\n    font-size: 100%;\n}\n\n#sidebar-title-text {\n    color: white;\n}\n\n.sidebar-project-list {\n    flex: 2.25;\n    width: 100%;\n    border-radius: 5px;\n}\n\n.sidebar-main-list {\n    margin: 0;\n    padding: 8px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 10px;\n}\n\n.sidebar-list-item {\n    margin: 0;\n    padding: 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--light-blue);\n    height: 25px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    border-radius: 5px;\n    font-size: 100%;\n}\n\n#current-p {\n    background-color: var(--closetowhite);\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n.projectName {\n    color: white;\n}\n\n.sidebar-create-new-btn {\n    flex: .5;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--middle-blue);\n    border-radius: 5px;\n}\n\n/* ************************* main body ************************** */\n.main-body {\n    margin: 0;\n    padding: 0;\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n}\n\n.main-header {\n    margin: 0;\n    padding: 0;\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.menu-icon{\n    width: 30px;\n    height: 30px;\n}\n#menu-icon {\n    background-image: url('./img/menu.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100%;\n}\n\n#projectNameHeader {\n    color: white;\n    letter-spacing: 1px;\n    /* border: 1px solid white; */\n}\n\n#header-text {\n    color: white;\n    letter-spacing: 1px;\n}\n\n\n\n\n/* main list content */\n.main-list-content {\n    flex: 2.75;\n    display: flex;\n    flex-direction: column;\n    /* border: 10px solid var(--black-color); */\n    /* margin: 10px; */\n    margin: 0;\n    padding: 0;\n    gap: 10px;\n}\n\n.list-container {\n    flex: 2.25;\n    margin: 0;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    background-color: var(--middle-blue);\n    border-radius: 5px;\n    gap: 50px;\n}\n\n.ordered-item-list {\n    flex: 2;\n    /* height: 100%;\n    width: 100%; */\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 10px;\n}\n\n.list-item-options {\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    /* border: 1px solid violet; */\n}\n\n#create-new-item-btn {\n    width: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n\n.form-main {\n    /* justify-content: space-between; */\n    gap: 10px;\n    width: 75%;\n    display: flex;\n    /* border: 1px solid violet; */\n    /* align-items: center; */\n}\n\n.label-new-item {\n    text-align: center;\n    flex: .5;\n}\n\n#input-new-item {\n    border-radius: 5px;\n    border: none;\n    flex: 1.5;\n}\n\n#submit-btn {\n    flex: .5;\n}\n\n\n/* *********************each item********************* */\n.list-item {\n    margin: 0;\n    padding: 0 0 0 10px;\n    /* list-style-type: none;\n    text-decoration: none;\n    list-style: none; */\n    /* background-color: var(--closetowhite); */\n    background-color: var(--black-color);\n    height: 45px;\n    color: white;\n    letter-spacing: 1px;\n    display: flex;\n    border-radius: 5px;\n    \n    /* align-items: center; */\n    /* justify-content: space-between; */\n    /* font-size: 100%; */\n    /* flex: 1.75; */\n}\n\n.item-text {\n    margin: 0;\n    padding: 0;\n    color: white;\n    flex: 1.75;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.item-options-container {\n    flex: .3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    padding: 10px;\n    /* height: 100%; */\n    gap: 5px;\n    background-color: var(--closetowhite);\n    border-radius: 0 5px 5px 0;\n}\n\n#item-checkbox {\n    flex: 1;\n    /* border-radius: 50px; */\n}\n\n.item-delete-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n\n#delete-item {\n    border: none;\n    border-radius: 10px;\n    background-color: var(--closetowhite);\n}\n\n\n#delete-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url('./img/delete.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n    color: white;\n}\n\n.expand-icon-btn {\n    background-color: var(--closetowhite);\n    border: none;\n    flex: 1;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.expand-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url('./img/chevron-down\\ \\(1\\).png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n}\n\n\n\n\n.item-details-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n#item-details {\n    border: none;\n    border-radius: 10px;\n}\n\n.item-date-created {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n\n.expand-container {\n    margin: 0;\n    padding: 0 8px 0 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--closetowhite);\n    height: 150px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    border-radius: 5px;\n    font-size: 85%;\n}\n\n.details-container {\n    flex: .5;\n    /* border: 1px solid var(--closetowhite); */\n    display: flex;\n    justify-content: center;\n    background-color: var(--dark-blue);\n    /* align-items: center; */\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.details-title {\n    color: var(--closetowhite);\n    font-size: 100%;\n}\n\n\n\n\n\n\n\n\n\n/* ******************** general ********************** */\n\n.display {\n    display: none;\n    animation: ease-in 1s;\n}\n\n.btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 10px;\n}\n\n.item-btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 5px;\n    /* width: 50px; */\n    width: 65%;\n    height: 65%;\n    font-size: 75%;\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "itemListArr": () => (/* binding */ itemListArr),
/* harmony export */   "getDate": () => (/* binding */ getDate),
/* harmony export */   "ListItem": () => (/* binding */ ListItem)
/* harmony export */ });
const itemListArr = [];

const getDate = () => {
    const myDate = new Date().toLocaleDateString();
    return myDate;
}

class ListItem {
    constructor(name, dateCreated) {
        this.name = name;
        this.notes = 'test';
        this.dateCreated = dateCreated
    }
    // get dateCreated () {
    //     return this.dateCreated;
    // }
    getName() {
        return this.name;
    }
}

class DOMItem {
    constructor(type) {
        this.type = type;
    }
}



/***/ }),

/***/ "./src/defaultProject.js":
/*!*******************************!*\
  !*** ./src/defaultProject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");


const createDefaultArrayList = () => {
    const one = new _app__WEBPACK_IMPORTED_MODULE_0__.ListItem('Do the dishes', 'On time!', (0,_app__WEBPACK_IMPORTED_MODULE_0__.getDate)());
    const two = new _app__WEBPACK_IMPORTED_MODULE_0__.ListItem('Change car\'s oil', 'On time!', (0,_app__WEBPACK_IMPORTED_MODULE_0__.getDate)());
    const three = new _app__WEBPACK_IMPORTED_MODULE_0__.ListItem('Walk the Dog', 'On time!', (0,_app__WEBPACK_IMPORTED_MODULE_0__.getDate)());
    const four = new _app__WEBPACK_IMPORTED_MODULE_0__.ListItem('Fold the laundry', 'On time!', (0,_app__WEBPACK_IMPORTED_MODULE_0__.getDate)());
    const five = new _app__WEBPACK_IMPORTED_MODULE_0__.ListItem('Call the bank', 'On time!', (0,_app__WEBPACK_IMPORTED_MODULE_0__.getDate)());

    const defaultArrayList = [
        one,
        two, 
        three, 
        four,
        five
    ]
    // console.log(defaultArrayList);
    return defaultArrayList;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDefaultArrayList);

/***/ }),

/***/ "./src/img/chevron-down (1).png":
/*!**************************************!*\
  !*** ./src/img/chevron-down (1).png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b23e474e8ec00b8c7d88.png";

/***/ }),

/***/ "./src/img/delete.png":
/*!****************************!*\
  !*** ./src/img/delete.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab494aceb16da12725cc.png";

/***/ }),

/***/ "./src/img/menu.png":
/*!**************************!*\
  !*** ./src/img/menu.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d5dc285be66039d726d.png";

/***/ }),

/***/ "./src/img/noun-expand-1181747.png":
/*!*****************************************!*\
  !*** ./src/img/noun-expand-1181747.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92d8de52ff35044fe240.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _img_menu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/menu.png */ "./src/img/menu.png");
/* harmony import */ var _img_noun_expand_1181747_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/noun-expand-1181747.png */ "./src/img/noun-expand-1181747.png");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _defaultProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaultProject */ "./src/defaultProject.js");







const LOCAL = window.localStorage;
const SESSION = window.sessionStorage;

//LOAD PAGE
const DOMLoaded = (() => {
    window.addEventListener('DOMContentLoaded', (e) => {
        // window.localStorage.clear();
        // window.sessionStorage.clear();

        //get currentl, latest project from local storage and pass in projectname to loadsession
        let projName = LOCAL.key(0);

        //check for projectName from sidetab (whatever project is highlighted)
        window.localStorage.length === 0 ? loadDefaultPage() : loadSessionStoragePage(projName);
    });
})();

//remove display (none) from element 
const removeDisplayNone = (d) => {
    return d.classList.remove('display');
}

//add display (none) to element 
const addDisplayNone = (d) => {
    return d.classList.add('display');
}

//create item in HTML, add to DOM
const createItemHTML = (n, dc, projectName) => {
    const orderedItemList = document.querySelector('.ordered-item-list');
    //create item options container
    const createNewItemOptionsContainer = document.createElement('div');
    createNewItemOptionsContainer.classList.add('item-options-container');
    //add DELETE Btn/Icon to item
    const createItemDeleteBtn = document.createElement('div');
    createItemDeleteBtn.classList.add('item-delete-btn');
    const deleteBtn = document.createElement('button');
    deleteBtn.id = 'delete-item';
    const deleteIcon = document.createElement('div');
    deleteIcon.id = 'delete-icon';
    deleteBtn.appendChild(deleteIcon);
    createItemDeleteBtn.appendChild(deleteBtn);
    //add EXPAND Btn/Icon to item
    const createExpandIconBtn = document.createElement('button');
    createExpandIconBtn.classList.add('expand-icon-btn');
    createExpandIconBtn.type = 'button';
    createExpandIconBtn.name = 'expand-icon-btn';
    const createExpandIconDiv = document.createElement('div');
    createExpandIconDiv.classList.add('expand-icon');
    createExpandIconBtn.appendChild(createExpandIconDiv);


    //add checkbox
    const checkboxLabel = document.createElement('label');
    checkboxLabel.for = 'item-checkbox';
    checkboxLabel.id = 'item-checkbox';
    const createCheckbox = document.createElement('input');
    createCheckbox.id = 'item-checkbox';
    createCheckbox.type = 'checkbox';
    createCheckbox.name = 'item-checkbox';
    //add important Icon

    //append icon, delete btn to list item
    createNewItemOptionsContainer.appendChild(checkboxLabel);
    checkboxLabel.appendChild(createCheckbox);
    createNewItemOptionsContainer.appendChild(createItemDeleteBtn);
    createNewItemOptionsContainer.appendChild(createExpandIconBtn);
    //new list item 
    const newListItem = document.createElement('li');
    const span = document.createElement('span');
    newListItem.appendChild(span);
    newListItem.classList.add('list-item');
    span.classList.add('item-text');
    span.classList.add('text');
    span.textContent = n;


    
    //add item options container
    newListItem.appendChild(createNewItemOptionsContainer);
    //add new list item to ordered list
    orderedItemList.appendChild(newListItem);

    //log storage
    // console.log(LOCAL);

    //return delete btn, expand btn listener once item is created 
    return () => {
        console.log('test');
        const a = deleteBtnListener(projectName);
        const b = expandBtnListener();
        // const c = itemEditable();
        return a && b;
    }
}

//make item editable
const itemEditable = () => {
    const item = document.querySelector('.item-text');
    item.contentEditable = true;
    item.addEventListener('dblclick', () => {
        if (contentEditable) {
            console.log('item being edited');
            //remove span
            //create input
            //
        }
    })
}

//event listener to delete item (called after item is created)
const deleteBtnListener = (projectName) => {
    console.log(projectName);
    const listItemDeleteBtns = document.querySelectorAll('#delete-item');
    const clearAllBtn = document.getElementById('clear-all-items-btn');

    //query selector all, THEN forEach or Map function to add event listener to all delete btns
    // listItemDeleteBtns.addEventListener('click', e => {
    //     alert('Are you sure you want to delete this item?');
    // })
    // console.log(listItemDeleteBtns.entries);

    for (let i = 0; i < listItemDeleteBtns.length; i++) {
        // console.log(i);
        const btnIndex = i;
    }

    for(let j = 0; j < _app_js__WEBPACK_IMPORTED_MODULE_3__.itemListArr.length; j++) {
        // console.log(j);
        const listItemIndex = j; 
    }

    clearAllBtn.addEventListener('click', () => {
        console.log('delete btn clicked');
        const ol = document.querySelector('.ordered-item-list');
        const confirmDeleteAll = confirm('Would you like to clear all items?');
        if (confirmDeleteAll) {
            while (ol.firstChild) {
                ol.removeChild(ol.firstChild);
            }
            //remove from arr/local storage
            console.log(projectName);
            LOCAL.removeItem(projectName);
        }
        //would you like to clear all items and start over or delete project
        //delete all children under ordered item list 
        
    })

    listItemDeleteBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            const listItem = e.target.parentNode.parentNode.parentNode.parentNode;
            const confirmAnswer = confirm('are you sure you want to delete this item?');
            if (confirmAnswer) {
                listItem.remove();

                // if (i === j) {
                //     itemListArr.filter(l => {
                //         !i;
                //     })
                // }
            } 
        })
    })
};

//expand btn listener (called after item is created)
const expandBtnListener = () => {
    const expandIcon = document.querySelector('.expand-icon');
    const goShoppingItemTest = document.querySelector('#go-shopping');
    const itemOptions = document.querySelector('.item-options-container');
    const itemText = document.querySelector('#item-text');
    expandIcon.addEventListener('click', (e) => {
        console.log(e, e.target);
        e.preventDefault();
        // goShoppingItemTest.classList.remove('list-item');
        goShoppingItemTest.classList.toggle('expand-container');
        // itemOptions.classList.toggle('expand-container');

        const itemwrapper = document.createElement('div');
        itemwrapper.classList.add('list-item');
        itemwrapper.appendChild(itemText);
        itemwrapper.appendChild(itemOptions);

        goShoppingItemTest.appendChild(itemwrapper);
        

        const details = document.createElement('div');
        details.classList.add('details-container');
        goShoppingItemTest.appendChild(details);  
    })
};

//get name and date from items and call createItemHTML()
const getNameAndDate = (arr, projectName) => {
    arr.forEach(obj => {
        const n = obj.name;
        const dc = obj.dateCreated;
        const createItem = createItemHTML(n, dc, projectName);
        return createItem();
    })
}

//listen for form submission to add each item 
const formSubmission = (clickCount, projectName)=> {
    const form = document.querySelector('.form-main');
    form.addEventListener('submit', (e)=> {
        const inputValue = document.querySelector('#input-new-item').value;
        //remove form display
        e.preventDefault();
        //remove dispalay (add back display: none)
        const inputNewItem = document.querySelector('#input-new-item');
        const submitBtn = document.querySelector('#submit-btn');
        const labelNewItem = document.querySelector('.label-new-item');
        addDisplayNone(inputNewItem);
        addDisplayNone(submitBtn);
        addDisplayNone(labelNewItem);
        //clear input field on form Submit
        form.reset();
        //create new list item
        const item = new _app_js__WEBPACK_IMPORTED_MODULE_3__.ListItem(`${inputValue}`, (0,_app_js__WEBPACK_IMPORTED_MODULE_3__.getDate)());
        //check if LOCAL STORAGE is empty or not 
        return projectLocalStorage(clickCount, projectName, item);
    })
};

//check local storage to see if project already exists
const checkLocalStorage = (clickCount, projectName, item) => {
    const projectExists = LOCAL.length > 0;
    return projectExists ? true : false;
}

//event listener to open up side menu bar
const menuEventListener = (() => {
    const menuLogo = document.querySelector('.menu-icon');
    const mainSidebar = document.querySelector('.main-sidebar');
    menuLogo.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('test');
        mainSidebar.classList.toggle('display');
    })
})();

//new list item btn listener 
const newItemBtnListener = (() => {
    let clickCount = 0;
    //default list displayed on first open.
    //if first time clicking (opening page), as in LOCAL STOR is empty
    //ask if user would like to clear all and start a new project 
    const newItemBtn = document.querySelector('#create-new-item-btn');
    const inputNewItem = document.querySelector('#input-new-item');
    const labelNewItem = document.querySelector('.label-new-item');
    const submitBtn = document.querySelector('#submit-btn');

    newItemBtn.addEventListener('click', (e) => {
        
        e.preventDefault();
        //remove display none from input form items
        let projectName;
        const projectExists = checkLocalStorage();
        if (projectExists) {
            let getClickCount = SESSION.getItem('hello');
            getClickCount++;
            console.log(getClickCount);
        } else {
            clickCount++;
            console.log(clickCount);
            //ask user to name new project
            //wipe default list
            //start new project with name given (key name in local storage obj)
            projectName = prompt('Please enter the name of your project', 'myProject');
            //add new project name to top of page
            document.querySelector('#projectNameHeader').textContent = projectName;
            //create new folder in current project list
            createProjectFolder(projectName);
            //clear default array list 
            const ol = document.querySelector('.ordered-item-list');
            const d = deleteChildElements(ol);
            d();

            addClickCount(clickCount, projectName);
        }
    
        removeDisplayNone(inputNewItem);
        removeDisplayNone(submitBtn);
        removeDisplayNone(labelNewItem);

        return formSubmission(clickCount, projectName);
    })

    
})();

//delete all child elements function
const deleteChildElements = (parentEl) => {
    return () => {
        if (true) {
            while (parentEl.firstChild) {
                parentEl.removeChild(parentEl.firstChild);
            }   
            //remove from arr/local storage
        }
    }
}

//the value of the key value pair is the object array that is created for each project (list of items)
const projectLocalStorage = (clickCount, projectName, item) => {
    const localStorageItemList = [];
    //FIND PROJECT NAME AND PUSH LAST ITEM INTO IT 

    // LOCALSTOR.setItem('myProject', JSON.stringify(itemListArr));
    // console.log(JSON.parse(item));
    // LOCALSTOR.myProject.push(JSON.stringify(lastItem));
    // SESSIONSTOR.setItem('clickCount', clickCount); //resets  when clear all AND new project is created
    // console.log(LOCALSTOR.myProject);
    // LOCALSTOR.setItem(`${projectName}`, JSON.stringify(item));
    // console.log(lastItem);
    // LOCALSTOR.myProject.push(JSON.stringify(lastItem));
    // SESSIONSTOR.setItem('clickCount', clickCount); //resets  when clear all AND new project is created
    // console.log(LOCALSTOR.myProject);

    const projectExists = checkLocalStorage();
    console.log(projectExists);

    const createItemFromLocalStorage = (item, projectName) => {
        // const d = createDefaultArrayList();
        const d = item;
            const n = d.name;
            const dc = d.dateCreated;
            return createItemHTML(n, dc, projectName);
    }
    
    if (projectExists) {
        console.log(item);
        //add to current project array in local storage 
        // return addListItemToArr(item); 
        // const proj = LOCAL.getItem(`${projectName}`);
        let proj = JSON.parse(LOCAL.getItem('hello'));
        // JSON.parse(proj);
        console.log(proj);
        console.log(item);
        console.log(Array.isArray(proj));
        proj.push(JSON.stringify(item));
        
        createItemFromLocalStorage(item, projectName);
        // return projectLocalStorage(projectName, item, clickCount);
    } else {
        addClickCount(clickCount, projectName);
        
        LOCAL.setItem(`${projectName}`, JSON.stringify([item]));
        createItemFromLocalStorage(item, projectName);
    }
    
    
    return LOCAL;
}

//JSON.parse item list arr, and create html element for each item in LOCAL storage 
const loadSessionStoragePage = (projectName) => {
    document.querySelector('#projectNameHeader').textContent = projectName;
    //create folder in sidebar on page load
    //will need to show all projects in sidebar
    createProjectFolder(projectName);

    let i = LOCAL.getItem(`${projectName}`);
    i = JSON.parse(i);
    return getNameAndDate(i, projectName);
}

//create project folder in sidebar when new project is created
const createProjectFolder = (projectName) => {
    const currentP = document.querySelector('#current-p');
    const newProj = document.createElement('li');
    // newProj.classList.add('text');
    newProj.classList.add('projectName');
    newProj.textContent = projectName;
    currentP.appendChild(newProj);
}

//add click count to session storage to track
const addClickCount = (clickCount, projectName) => {
    //if project name already exists inside storage, push
    //otherwise create
    let data = SESSION.getItem(projectName);
    if (data) {
        console.log(SESSION.getItem(projectName));
    }
    console.log(SESSION);
    return window.sessionStorage.setItem(`${projectName}`, clickCount);
}

// load in default page (using defaultarraylist)
const loadDefaultPage = () => {
    const d = (0,_defaultProject__WEBPACK_IMPORTED_MODULE_4__["default"])();
    return getNameAndDate(d);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFVBQVUsWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsU0FBUyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLE9BQU8sYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLGVBQWUsYUFBYSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FB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Yy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vc3JjL2RlZmF1bHRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvbWVudS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9kZWxldGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWcvY2hldnJvbi1kb3duICgxKS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1ibGFjay1jb2xvcjogYmxhY2s7XFxuICAgIC0tZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgLS1ib3JkZXItdGVzdDogMnB4IHNvbGlkIHllbGxvdztcXG4gICAgLS1kYXJrLWJsdWU6ICMwRjIwMjc7XFxuICAgIC0tbWlkZGxlLWJsdWU6ICMyMDNBNDM7XFxuICAgIC0tbGlnaHQtYmx1ZTogIzJDNTM2NDtcXG4gICAgLS1jbG9zZXRvd2hpdGU6ICM1OTgwOTE7XFxufVxcblxcbioge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0KTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgLyogY29sb3I6IHdoaXRlc21va2U7ICovXFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLyogbWFpbiBzaWRlYmFyICovXFxuLm1haW4tc2lkZWJhciB7XFxuICAgIC8qIG1hcmdpbjogMTBweCAwcHggMTBweCAxMHB4OyAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpOyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpOyAqL1xcbiAgICAvKiBmaWx0ZXI6IGJsdXIoNTAlKTsgKi9cXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluO1xcbn1cXG5cXG5cXG4uc2lkZWJhci10aXRsZSAge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkZGxlLWJsdWUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG4jc2lkZWJhci10aXRsZS10ZXh0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0LWxpc3Qge1xcbiAgICBmbGV4OiAyLjI1O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1tYWluLWxpc3Qge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNpZGViYXItbGlzdC1pdGVtIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbiNjdXJyZW50LXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdE5hbWUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyLWNyZWF0ZS1uZXctYnRuIHtcXG4gICAgZmxleDogLjU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkZGxlLWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKiogbWFpbiBib2R5ICoqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuLm1haW4tYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZmxleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtaWNvbntcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuI21lbnUtaWNvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdE5hbWVIZWFkZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xcbn1cXG5cXG4jaGVhZGVyLXRleHQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcblxcblxcblxcbi8qIG1haW4gbGlzdCBjb250ZW50ICovXFxuLm1haW4tbGlzdC1jb250ZW50IHtcXG4gICAgZmxleDogMi43NTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogYm9yZGVyOiAxMHB4IHNvbGlkIHZhcigtLWJsYWNrLWNvbG9yKTsgKi9cXG4gICAgLyogbWFyZ2luOiAxMHB4OyAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgZmxleDogMi4yNTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkZGxlLWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuLm9yZGVyZWQtaXRlbS1saXN0IHtcXG4gICAgZmxleDogMjtcXG4gICAgLyogaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTsgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtLW9wdGlvbnMge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2aW9sZXQ7ICovXFxufVxcblxcbiNjcmVhdGUtbmV3LWl0ZW0tYnRuIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG4uZm9ybS1tYWluIHtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZpb2xldDsgKi9cXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuLmxhYmVsLW5ldy1pdGVtIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbGV4OiAuNTtcXG59XFxuXFxuI2lucHV0LW5ldy1pdGVtIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZsZXg6IDEuNTtcXG59XFxuXFxuI3N1Ym1pdC1idG4ge1xcbiAgICBmbGV4OiAuNTtcXG59XFxuXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqZWFjaCBpdGVtKioqKioqKioqKioqKioqKioqKioqICovXFxuLmxpc3QtaXRlbSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCAwIDAgMTBweDtcXG4gICAgLyogbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7ICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG4gICAgLyogZm9udC1zaXplOiAxMDAlOyAqL1xcbiAgICAvKiBmbGV4OiAxLjc1OyAqL1xcbn1cXG5cXG4uaXRlbS10ZXh0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZsZXg6IDEuNzU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLml0ZW0tb3B0aW9ucy1jb250YWluZXIge1xcbiAgICBmbGV4OiAuMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICBnYXA6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XFxufVxcblxcbiNpdGVtLWNoZWNrYm94IHtcXG4gICAgZmxleDogMTtcXG4gICAgLyogYm9yZGVyLXJhZGl1czogNTBweDsgKi9cXG59XFxuXFxuLml0ZW0tZGVsZXRlLWJ0biB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbiNkZWxldGUtaXRlbSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG59XFxuXFxuXFxuI2RlbGV0ZS1pY29uIHtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmV4cGFuZC1pY29uLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZmxleDogMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5leHBhbmQtaWNvbiB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4uaXRlbS1kZXRhaWxzLWJ0biB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpOyAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNpdGVtLWRldGFpbHMge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5pdGVtLWRhdGUtY3JlYXRlZCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpOyAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5leHBhbmQtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDhweCAwIDhweDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDg1JTtcXG59XFxuXFxuLmRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgZmxleDogLjU7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsb3NldG93aGl0ZSk7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5kZXRhaWxzLXRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKiogZ2VuZXJhbCAqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLmRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbmltYXRpb246IGVhc2UtaW4gMXM7XFxufVxcblxcbi5idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uaXRlbS1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIC8qIHdpZHRoOiA1MHB4OyAqL1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBoZWlnaHQ6IDY1JTtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxufVxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsc0JBQXNCO0lBQ3RCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQSxpQkFBaUI7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QUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFFBQVE7SUFDUiwyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7Ozs7Ozs7Ozs7QUFVQSx3REFBd0Q7O0FBRXhEO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1ibGFjay1jb2xvcjogYmxhY2s7XFxuICAgIC0tZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgLS1ib3JkZXItdGVzdDogMnB4IHNvbGlkIHllbGxvdztcXG4gICAgLS1kYXJrLWJsdWU6ICMwRjIwMjc7XFxuICAgIC0tbWlkZGxlLWJsdWU6ICMyMDNBNDM7XFxuICAgIC0tbGlnaHQtYmx1ZTogIzJDNTM2NDtcXG4gICAgLS1jbG9zZXRvd2hpdGU6ICM1OTgwOTE7XFxufVxcblxcbioge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0KTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgLyogY29sb3I6IHdoaXRlc21va2U7ICovXFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLyogbWFpbiBzaWRlYmFyICovXFxuLm1haW4tc2lkZWJhciB7XFxuICAgIC8qIG1hcmdpbjogMTBweCAwcHggMTBweCAxMHB4OyAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpOyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpOyAqL1xcbiAgICAvKiBmaWx0ZXI6IGJsdXIoNTAlKTsgKi9cXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluO1xcbn1cXG5cXG5cXG4uc2lkZWJhci10aXRsZSAge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkZGxlLWJsdWUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG4jc2lkZWJhci10aXRsZS10ZXh0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0LWxpc3Qge1xcbiAgICBmbGV4OiAyLjI1O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1tYWluLWxpc3Qge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNpZGViYXItbGlzdC1pdGVtIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbiNjdXJyZW50LXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdE5hbWUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyLWNyZWF0ZS1uZXctYnRuIHtcXG4gICAgZmxleDogLjU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkZGxlLWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKiogbWFpbiBib2R5ICoqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuLm1haW4tYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZmxleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtaWNvbntcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuI21lbnUtaWNvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvbWVudS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcblxcbiNwcm9qZWN0TmFtZUhlYWRlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxufVxcblxcbiNoZWFkZXItdGV4dCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuXFxuXFxuXFxuLyogbWFpbiBsaXN0IGNvbnRlbnQgKi9cXG4ubWFpbi1saXN0LWNvbnRlbnQge1xcbiAgICBmbGV4OiAyLjc1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBib3JkZXI6IDEwcHggc29saWQgdmFyKC0tYmxhY2stY29sb3IpOyAqL1xcbiAgICAvKiBtYXJnaW46IDEwcHg7ICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgICBmbGV4OiAyLjI1O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWRkbGUtYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ub3JkZXJlZC1pdGVtLWxpc3Qge1xcbiAgICBmbGV4OiAyO1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlOyAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5saXN0LWl0ZW0tb3B0aW9ucyB7XFxuICAgIGZsZXg6IC4yNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZpb2xldDsgKi9cXG59XFxuXFxuI2NyZWF0ZS1uZXctaXRlbS1idG4ge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcblxcbi5mb3JtLW1haW4ge1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmlvbGV0OyAqL1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG4ubGFiZWwtbmV3LWl0ZW0ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsZXg6IC41O1xcbn1cXG5cXG4jaW5wdXQtbmV3LWl0ZW0ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZmxleDogMS41O1xcbn1cXG5cXG4jc3VibWl0LWJ0biB7XFxuICAgIGZsZXg6IC41O1xcbn1cXG5cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKiplYWNoIGl0ZW0qKioqKioqKioqKioqKioqKioqKiogKi9cXG4ubGlzdC1pdGVtIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xcbiAgICAvKiBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICAvKiBmb250LXNpemU6IDEwMCU7ICovXFxuICAgIC8qIGZsZXg6IDEuNzU7ICovXFxufVxcblxcbi5pdGVtLXRleHQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZmxleDogMS43NTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaXRlbS1vcHRpb25zLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IC4zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIGdhcDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcXG59XFxuXFxuI2l0ZW0tY2hlY2tib3gge1xcbiAgICBmbGV4OiAxO1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1MHB4OyAqL1xcbn1cXG5cXG4uaXRlbS1kZWxldGUtYnRuIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuI2RlbGV0ZS1pdGVtIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbn1cXG5cXG5cXG4jZGVsZXRlLWljb24ge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2RlbGV0ZS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmV4cGFuZC1pY29uLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZmxleDogMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5leHBhbmQtaWNvbiB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvY2hldnJvbi1kb3duXFxcXCBcXFxcKDFcXFxcKS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XFxufVxcblxcblxcblxcblxcbi5pdGVtLWRldGFpbHMtYnRuIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7ICovXFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuI2l0ZW0tZGV0YWlscyB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLml0ZW0tZGF0ZS1jcmVhdGVkIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7ICovXFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmV4cGFuZC1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogODUlO1xcbn1cXG5cXG4uZGV0YWlscy1jb250YWluZXIge1xcbiAgICBmbGV4OiAuNTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xvc2V0b3doaXRlKTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRldGFpbHMtdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKiBnZW5lcmFsICoqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4uZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFuaW1hdGlvbjogZWFzZS1pbiAxcztcXG59XFxuXFxuLmJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5pdGVtLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgLyogd2lkdGg6IDUwcHg7ICovXFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIGhlaWdodDogNjUlO1xcbiAgICBmb250LXNpemU6IDc1JTtcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGl0ZW1MaXN0QXJyID0gW107XG5cbmNvbnN0IGdldERhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbXlEYXRlID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICByZXR1cm4gbXlEYXRlO1xufVxuXG5jbGFzcyBMaXN0SXRlbSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGF0ZUNyZWF0ZWQpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9ICd0ZXN0JztcbiAgICAgICAgdGhpcy5kYXRlQ3JlYXRlZCA9IGRhdGVDcmVhdGVkXG4gICAgfVxuICAgIC8vIGdldCBkYXRlQ3JlYXRlZCAoKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmRhdGVDcmVhdGVkO1xuICAgIC8vIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbn1cblxuY2xhc3MgRE9NSXRlbSB7XG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBpdGVtTGlzdEFycixcbiAgICBnZXREYXRlLFxuICAgIExpc3RJdGVtXG59IiwiaW1wb3J0IHsgTGlzdEl0ZW0sIGdldERhdGUgfSBmcm9tIFwiLi9hcHBcIlxuXG5jb25zdCBjcmVhdGVEZWZhdWx0QXJyYXlMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG9uZSA9IG5ldyBMaXN0SXRlbSgnRG8gdGhlIGRpc2hlcycsICdPbiB0aW1lIScsIGdldERhdGUoKSk7XG4gICAgY29uc3QgdHdvID0gbmV3IExpc3RJdGVtKCdDaGFuZ2UgY2FyXFwncyBvaWwnLCAnT24gdGltZSEnLCBnZXREYXRlKCkpO1xuICAgIGNvbnN0IHRocmVlID0gbmV3IExpc3RJdGVtKCdXYWxrIHRoZSBEb2cnLCAnT24gdGltZSEnLCBnZXREYXRlKCkpO1xuICAgIGNvbnN0IGZvdXIgPSBuZXcgTGlzdEl0ZW0oJ0ZvbGQgdGhlIGxhdW5kcnknLCAnT24gdGltZSEnLCBnZXREYXRlKCkpO1xuICAgIGNvbnN0IGZpdmUgPSBuZXcgTGlzdEl0ZW0oJ0NhbGwgdGhlIGJhbmsnLCAnT24gdGltZSEnLCBnZXREYXRlKCkpO1xuXG4gICAgY29uc3QgZGVmYXVsdEFycmF5TGlzdCA9IFtcbiAgICAgICAgb25lLFxuICAgICAgICB0d28sIFxuICAgICAgICB0aHJlZSwgXG4gICAgICAgIGZvdXIsXG4gICAgICAgIGZpdmVcbiAgICBdXG4gICAgLy8gY29uc29sZS5sb2coZGVmYXVsdEFycmF5TGlzdCk7XG4gICAgcmV0dXJuIGRlZmF1bHRBcnJheUxpc3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURlZmF1bHRBcnJheUxpc3Q7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBtZW51SWNvbiBmcm9tICcuL2ltZy9tZW51LnBuZyc7XG5pbXBvcnQgZXhwYW5kIGZyb20gJy4vaW1nL25vdW4tZXhwYW5kLTExODE3NDcucG5nJztcbmltcG9ydCB7IG1kaUNoZXZyb25Eb3duLCBtZGlDb25zb2xlTGluZSwgbWRpQ29udHJvbGxlckNsYXNzaWMsIG1kaVdpbmRvd1NodXR0ZXIgfSBmcm9tICdAbWRpL2pzJztcbmltcG9ydCB7IGdldERhdGUsIGl0ZW1MaXN0QXJyLCBMaXN0SXRlbSB9IGZyb20gJy4vYXBwLmpzJztcbmltcG9ydCBjcmVhdGVEZWZhdWx0QXJyYXlMaXN0IGZyb20gJy4vZGVmYXVsdFByb2plY3QnO1xuXG5jb25zdCBMT0NBTCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG5jb25zdCBTRVNTSU9OID0gd2luZG93LnNlc3Npb25TdG9yYWdlO1xuXG4vL0xPQUQgUEFHRVxuY29uc3QgRE9NTG9hZGVkID0gKCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChlKSA9PiB7XG4gICAgICAgIC8vIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgLy8gd2luZG93LnNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XG5cbiAgICAgICAgLy9nZXQgY3VycmVudGwsIGxhdGVzdCBwcm9qZWN0IGZyb20gbG9jYWwgc3RvcmFnZSBhbmQgcGFzcyBpbiBwcm9qZWN0bmFtZSB0byBsb2Fkc2Vzc2lvblxuICAgICAgICBsZXQgcHJvak5hbWUgPSBMT0NBTC5rZXkoMCk7XG5cbiAgICAgICAgLy9jaGVjayBmb3IgcHJvamVjdE5hbWUgZnJvbSBzaWRldGFiICh3aGF0ZXZlciBwcm9qZWN0IGlzIGhpZ2hsaWdodGVkKVxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMCA/IGxvYWREZWZhdWx0UGFnZSgpIDogbG9hZFNlc3Npb25TdG9yYWdlUGFnZShwcm9qTmFtZSk7XG4gICAgfSk7XG59KSgpO1xuXG4vL3JlbW92ZSBkaXNwbGF5IChub25lKSBmcm9tIGVsZW1lbnQgXG5jb25zdCByZW1vdmVEaXNwbGF5Tm9uZSA9IChkKSA9PiB7XG4gICAgcmV0dXJuIGQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheScpO1xufVxuXG4vL2FkZCBkaXNwbGF5IChub25lKSB0byBlbGVtZW50IFxuY29uc3QgYWRkRGlzcGxheU5vbmUgPSAoZCkgPT4ge1xuICAgIHJldHVybiBkLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbn1cblxuLy9jcmVhdGUgaXRlbSBpbiBIVE1MLCBhZGQgdG8gRE9NXG5jb25zdCBjcmVhdGVJdGVtSFRNTCA9IChuLCBkYywgcHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBvcmRlcmVkSXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJlZC1pdGVtLWxpc3QnKTtcbiAgICAvL2NyZWF0ZSBpdGVtIG9wdGlvbnMgY29udGFpbmVyXG4gICAgY29uc3QgY3JlYXRlTmV3SXRlbU9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVhdGVOZXdJdGVtT3B0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLW9wdGlvbnMtY29udGFpbmVyJyk7XG4gICAgLy9hZGQgREVMRVRFIEJ0bi9JY29uIHRvIGl0ZW1cbiAgICBjb25zdCBjcmVhdGVJdGVtRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3JlYXRlSXRlbURlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlbGV0ZS1idG4nKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4uaWQgPSAnZGVsZXRlLWl0ZW0nO1xuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWxldGVJY29uLmlkID0gJ2RlbGV0ZS1pY29uJztcbiAgICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgY3JlYXRlSXRlbURlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgIC8vYWRkIEVYUEFORCBCdG4vSWNvbiB0byBpdGVtXG4gICAgY29uc3QgY3JlYXRlRXhwYW5kSWNvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNyZWF0ZUV4cGFuZEljb25CdG4uY2xhc3NMaXN0LmFkZCgnZXhwYW5kLWljb24tYnRuJyk7XG4gICAgY3JlYXRlRXhwYW5kSWNvbkJ0bi50eXBlID0gJ2J1dHRvbic7XG4gICAgY3JlYXRlRXhwYW5kSWNvbkJ0bi5uYW1lID0gJ2V4cGFuZC1pY29uLWJ0bic7XG4gICAgY29uc3QgY3JlYXRlRXhwYW5kSWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyZWF0ZUV4cGFuZEljb25EaXYuY2xhc3NMaXN0LmFkZCgnZXhwYW5kLWljb24nKTtcbiAgICBjcmVhdGVFeHBhbmRJY29uQnRuLmFwcGVuZENoaWxkKGNyZWF0ZUV4cGFuZEljb25EaXYpO1xuXG5cbiAgICAvL2FkZCBjaGVja2JveFxuICAgIGNvbnN0IGNoZWNrYm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNoZWNrYm94TGFiZWwuZm9yID0gJ2l0ZW0tY2hlY2tib3gnO1xuICAgIGNoZWNrYm94TGFiZWwuaWQgPSAnaXRlbS1jaGVja2JveCc7XG4gICAgY29uc3QgY3JlYXRlQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNyZWF0ZUNoZWNrYm94LmlkID0gJ2l0ZW0tY2hlY2tib3gnO1xuICAgIGNyZWF0ZUNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNyZWF0ZUNoZWNrYm94Lm5hbWUgPSAnaXRlbS1jaGVja2JveCc7XG4gICAgLy9hZGQgaW1wb3J0YW50IEljb25cblxuICAgIC8vYXBwZW5kIGljb24sIGRlbGV0ZSBidG4gdG8gbGlzdCBpdGVtXG4gICAgY3JlYXRlTmV3SXRlbU9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hMYWJlbCk7XG4gICAgY2hlY2tib3hMYWJlbC5hcHBlbmRDaGlsZChjcmVhdGVDaGVja2JveCk7XG4gICAgY3JlYXRlTmV3SXRlbU9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSXRlbURlbGV0ZUJ0bik7XG4gICAgY3JlYXRlTmV3SXRlbU9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRXhwYW5kSWNvbkJ0bik7XG4gICAgLy9uZXcgbGlzdCBpdGVtIFxuICAgIGNvbnN0IG5ld0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG5ld0xpc3RJdGVtLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIG5ld0xpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbScpO1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnaXRlbS10ZXh0Jyk7XG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IG47XG5cblxuICAgIFxuICAgIC8vYWRkIGl0ZW0gb3B0aW9ucyBjb250YWluZXJcbiAgICBuZXdMaXN0SXRlbS5hcHBlbmRDaGlsZChjcmVhdGVOZXdJdGVtT3B0aW9uc0NvbnRhaW5lcik7XG4gICAgLy9hZGQgbmV3IGxpc3QgaXRlbSB0byBvcmRlcmVkIGxpc3RcbiAgICBvcmRlcmVkSXRlbUxpc3QuYXBwZW5kQ2hpbGQobmV3TGlzdEl0ZW0pO1xuXG4gICAgLy9sb2cgc3RvcmFnZVxuICAgIC8vIGNvbnNvbGUubG9nKExPQ0FMKTtcblxuICAgIC8vcmV0dXJuIGRlbGV0ZSBidG4sIGV4cGFuZCBidG4gbGlzdGVuZXIgb25jZSBpdGVtIGlzIGNyZWF0ZWQgXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICAgICAgY29uc3QgYSA9IGRlbGV0ZUJ0bkxpc3RlbmVyKHByb2plY3ROYW1lKTtcbiAgICAgICAgY29uc3QgYiA9IGV4cGFuZEJ0bkxpc3RlbmVyKCk7XG4gICAgICAgIC8vIGNvbnN0IGMgPSBpdGVtRWRpdGFibGUoKTtcbiAgICAgICAgcmV0dXJuIGEgJiYgYjtcbiAgICB9XG59XG5cbi8vbWFrZSBpdGVtIGVkaXRhYmxlXG5jb25zdCBpdGVtRWRpdGFibGUgPSAoKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXRleHQnKTtcbiAgICBpdGVtLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRlbnRFZGl0YWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZW0gYmVpbmcgZWRpdGVkJyk7XG4gICAgICAgICAgICAvL3JlbW92ZSBzcGFuXG4gICAgICAgICAgICAvL2NyZWF0ZSBpbnB1dFxuICAgICAgICAgICAgLy9cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8vZXZlbnQgbGlzdGVuZXIgdG8gZGVsZXRlIGl0ZW0gKGNhbGxlZCBhZnRlciBpdGVtIGlzIGNyZWF0ZWQpXG5jb25zdCBkZWxldGVCdG5MaXN0ZW5lciA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lKTtcbiAgICBjb25zdCBsaXN0SXRlbURlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZGVsZXRlLWl0ZW0nKTtcbiAgICBjb25zdCBjbGVhckFsbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhci1hbGwtaXRlbXMtYnRuJyk7XG5cbiAgICAvL3F1ZXJ5IHNlbGVjdG9yIGFsbCwgVEhFTiBmb3JFYWNoIG9yIE1hcCBmdW5jdGlvbiB0byBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gYWxsIGRlbGV0ZSBidG5zXG4gICAgLy8gbGlzdEl0ZW1EZWxldGVCdG5zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgLy8gICAgIGFsZXJ0KCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nKTtcbiAgICAvLyB9KVxuICAgIC8vIGNvbnNvbGUubG9nKGxpc3RJdGVtRGVsZXRlQnRucy5lbnRyaWVzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEl0ZW1EZWxldGVCdG5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGkpO1xuICAgICAgICBjb25zdCBidG5JbmRleCA9IGk7XG4gICAgfVxuXG4gICAgZm9yKGxldCBqID0gMDsgaiA8IGl0ZW1MaXN0QXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGopO1xuICAgICAgICBjb25zdCBsaXN0SXRlbUluZGV4ID0gajsgXG4gICAgfVxuXG4gICAgY2xlYXJBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUgYnRuIGNsaWNrZWQnKTtcbiAgICAgICAgY29uc3Qgb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJlZC1pdGVtLWxpc3QnKTtcbiAgICAgICAgY29uc3QgY29uZmlybURlbGV0ZUFsbCA9IGNvbmZpcm0oJ1dvdWxkIHlvdSBsaWtlIHRvIGNsZWFyIGFsbCBpdGVtcz8nKTtcbiAgICAgICAgaWYgKGNvbmZpcm1EZWxldGVBbGwpIHtcbiAgICAgICAgICAgIHdoaWxlIChvbC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgb2wucmVtb3ZlQ2hpbGQob2wuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3JlbW92ZSBmcm9tIGFyci9sb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBMT0NBTC5yZW1vdmVJdGVtKHByb2plY3ROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvL3dvdWxkIHlvdSBsaWtlIHRvIGNsZWFyIGFsbCBpdGVtcyBhbmQgc3RhcnQgb3ZlciBvciBkZWxldGUgcHJvamVjdFxuICAgICAgICAvL2RlbGV0ZSBhbGwgY2hpbGRyZW4gdW5kZXIgb3JkZXJlZCBpdGVtIGxpc3QgXG4gICAgICAgIFxuICAgIH0pXG5cbiAgICBsaXN0SXRlbURlbGV0ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1BbnN3ZXIgPSBjb25maXJtKCdhcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nKTtcbiAgICAgICAgICAgIGlmIChjb25maXJtQW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0ucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiAoaSA9PT0gaikge1xuICAgICAgICAgICAgICAgIC8vICAgICBpdGVtTGlzdEFyci5maWx0ZXIobCA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAhaTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9IFxuICAgICAgICB9KVxuICAgIH0pXG59O1xuXG4vL2V4cGFuZCBidG4gbGlzdGVuZXIgKGNhbGxlZCBhZnRlciBpdGVtIGlzIGNyZWF0ZWQpXG5jb25zdCBleHBhbmRCdG5MaXN0ZW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBleHBhbmRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4cGFuZC1pY29uJyk7XG4gICAgY29uc3QgZ29TaG9wcGluZ0l0ZW1UZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvLXNob3BwaW5nJyk7XG4gICAgY29uc3QgaXRlbU9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1vcHRpb25zLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGl0ZW1UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tdGV4dCcpO1xuICAgIGV4cGFuZEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLCBlLnRhcmdldCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gZ29TaG9wcGluZ0l0ZW1UZXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3QtaXRlbScpO1xuICAgICAgICBnb1Nob3BwaW5nSXRlbVRlc3QuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kLWNvbnRhaW5lcicpO1xuICAgICAgICAvLyBpdGVtT3B0aW9ucy5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgaXRlbXdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbXdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtJyk7XG4gICAgICAgIGl0ZW13cmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1UZXh0KTtcbiAgICAgICAgaXRlbXdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbU9wdGlvbnMpO1xuXG4gICAgICAgIGdvU2hvcHBpbmdJdGVtVGVzdC5hcHBlbmRDaGlsZChpdGVtd3JhcHBlcik7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWNvbnRhaW5lcicpO1xuICAgICAgICBnb1Nob3BwaW5nSXRlbVRlc3QuYXBwZW5kQ2hpbGQoZGV0YWlscyk7ICBcbiAgICB9KVxufTtcblxuLy9nZXQgbmFtZSBhbmQgZGF0ZSBmcm9tIGl0ZW1zIGFuZCBjYWxsIGNyZWF0ZUl0ZW1IVE1MKClcbmNvbnN0IGdldE5hbWVBbmREYXRlID0gKGFyciwgcHJvamVjdE5hbWUpID0+IHtcbiAgICBhcnIuZm9yRWFjaChvYmogPT4ge1xuICAgICAgICBjb25zdCBuID0gb2JqLm5hbWU7XG4gICAgICAgIGNvbnN0IGRjID0gb2JqLmRhdGVDcmVhdGVkO1xuICAgICAgICBjb25zdCBjcmVhdGVJdGVtID0gY3JlYXRlSXRlbUhUTUwobiwgZGMsIHByb2plY3ROYW1lKTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZW0oKTtcbiAgICB9KVxufVxuXG4vL2xpc3RlbiBmb3IgZm9ybSBzdWJtaXNzaW9uIHRvIGFkZCBlYWNoIGl0ZW0gXG5jb25zdCBmb3JtU3VibWlzc2lvbiA9IChjbGlja0NvdW50LCBwcm9qZWN0TmFtZSk9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLW1haW4nKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+IHtcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1uZXctaXRlbScpLnZhbHVlO1xuICAgICAgICAvL3JlbW92ZSBmb3JtIGRpc3BsYXlcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvL3JlbW92ZSBkaXNwYWxheSAoYWRkIGJhY2sgZGlzcGxheTogbm9uZSlcbiAgICAgICAgY29uc3QgaW5wdXROZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LW5ldy1pdGVtJyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtYnRuJyk7XG4gICAgICAgIGNvbnN0IGxhYmVsTmV3SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbC1uZXctaXRlbScpO1xuICAgICAgICBhZGREaXNwbGF5Tm9uZShpbnB1dE5ld0l0ZW0pO1xuICAgICAgICBhZGREaXNwbGF5Tm9uZShzdWJtaXRCdG4pO1xuICAgICAgICBhZGREaXNwbGF5Tm9uZShsYWJlbE5ld0l0ZW0pO1xuICAgICAgICAvL2NsZWFyIGlucHV0IGZpZWxkIG9uIGZvcm0gU3VibWl0XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgLy9jcmVhdGUgbmV3IGxpc3QgaXRlbVxuICAgICAgICBjb25zdCBpdGVtID0gbmV3IExpc3RJdGVtKGAke2lucHV0VmFsdWV9YCwgZ2V0RGF0ZSgpKTtcbiAgICAgICAgLy9jaGVjayBpZiBMT0NBTCBTVE9SQUdFIGlzIGVtcHR5IG9yIG5vdCBcbiAgICAgICAgcmV0dXJuIHByb2plY3RMb2NhbFN0b3JhZ2UoY2xpY2tDb3VudCwgcHJvamVjdE5hbWUsIGl0ZW0pO1xuICAgIH0pXG59O1xuXG4vL2NoZWNrIGxvY2FsIHN0b3JhZ2UgdG8gc2VlIGlmIHByb2plY3QgYWxyZWFkeSBleGlzdHNcbmNvbnN0IGNoZWNrTG9jYWxTdG9yYWdlID0gKGNsaWNrQ291bnQsIHByb2plY3ROYW1lLCBpdGVtKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEV4aXN0cyA9IExPQ0FMLmxlbmd0aCA+IDA7XG4gICAgcmV0dXJuIHByb2plY3RFeGlzdHMgPyB0cnVlIDogZmFsc2U7XG59XG5cbi8vZXZlbnQgbGlzdGVuZXIgdG8gb3BlbiB1cCBzaWRlIG1lbnUgYmFyXG5jb25zdCBtZW51RXZlbnRMaXN0ZW5lciA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWVudUxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uJyk7XG4gICAgY29uc3QgbWFpblNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zaWRlYmFyJyk7XG4gICAgbWVudUxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgICAgIG1haW5TaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc3BsYXknKTtcbiAgICB9KVxufSkoKTtcblxuLy9uZXcgbGlzdCBpdGVtIGJ0biBsaXN0ZW5lciBcbmNvbnN0IG5ld0l0ZW1CdG5MaXN0ZW5lciA9ICgoKSA9PiB7XG4gICAgbGV0IGNsaWNrQ291bnQgPSAwO1xuICAgIC8vZGVmYXVsdCBsaXN0IGRpc3BsYXllZCBvbiBmaXJzdCBvcGVuLlxuICAgIC8vaWYgZmlyc3QgdGltZSBjbGlja2luZyAob3BlbmluZyBwYWdlKSwgYXMgaW4gTE9DQUwgU1RPUiBpcyBlbXB0eVxuICAgIC8vYXNrIGlmIHVzZXIgd291bGQgbGlrZSB0byBjbGVhciBhbGwgYW5kIHN0YXJ0IGEgbmV3IHByb2plY3QgXG4gICAgY29uc3QgbmV3SXRlbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtbmV3LWl0ZW0tYnRuJyk7XG4gICAgY29uc3QgaW5wdXROZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LW5ldy1pdGVtJyk7XG4gICAgY29uc3QgbGFiZWxOZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhYmVsLW5ldy1pdGVtJyk7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1idG4nKTtcblxuICAgIG5ld0l0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvL3JlbW92ZSBkaXNwbGF5IG5vbmUgZnJvbSBpbnB1dCBmb3JtIGl0ZW1zXG4gICAgICAgIGxldCBwcm9qZWN0TmFtZTtcbiAgICAgICAgY29uc3QgcHJvamVjdEV4aXN0cyA9IGNoZWNrTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIGlmIChwcm9qZWN0RXhpc3RzKSB7XG4gICAgICAgICAgICBsZXQgZ2V0Q2xpY2tDb3VudCA9IFNFU1NJT04uZ2V0SXRlbSgnaGVsbG8nKTtcbiAgICAgICAgICAgIGdldENsaWNrQ291bnQrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGdldENsaWNrQ291bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xpY2tDb3VudCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2xpY2tDb3VudCk7XG4gICAgICAgICAgICAvL2FzayB1c2VyIHRvIG5hbWUgbmV3IHByb2plY3RcbiAgICAgICAgICAgIC8vd2lwZSBkZWZhdWx0IGxpc3RcbiAgICAgICAgICAgIC8vc3RhcnQgbmV3IHByb2plY3Qgd2l0aCBuYW1lIGdpdmVuIChrZXkgbmFtZSBpbiBsb2NhbCBzdG9yYWdlIG9iailcbiAgICAgICAgICAgIHByb2plY3ROYW1lID0gcHJvbXB0KCdQbGVhc2UgZW50ZXIgdGhlIG5hbWUgb2YgeW91ciBwcm9qZWN0JywgJ215UHJvamVjdCcpO1xuICAgICAgICAgICAgLy9hZGQgbmV3IHByb2plY3QgbmFtZSB0byB0b3Agb2YgcGFnZVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lSGVhZGVyJykudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgICAgIC8vY3JlYXRlIG5ldyBmb2xkZXIgaW4gY3VycmVudCBwcm9qZWN0IGxpc3RcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RGb2xkZXIocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgLy9jbGVhciBkZWZhdWx0IGFycmF5IGxpc3QgXG4gICAgICAgICAgICBjb25zdCBvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcmVkLWl0ZW0tbGlzdCcpO1xuICAgICAgICAgICAgY29uc3QgZCA9IGRlbGV0ZUNoaWxkRWxlbWVudHMob2wpO1xuICAgICAgICAgICAgZCgpO1xuXG4gICAgICAgICAgICBhZGRDbGlja0NvdW50KGNsaWNrQ291bnQsIHByb2plY3ROYW1lKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZW1vdmVEaXNwbGF5Tm9uZShpbnB1dE5ld0l0ZW0pO1xuICAgICAgICByZW1vdmVEaXNwbGF5Tm9uZShzdWJtaXRCdG4pO1xuICAgICAgICByZW1vdmVEaXNwbGF5Tm9uZShsYWJlbE5ld0l0ZW0pO1xuXG4gICAgICAgIHJldHVybiBmb3JtU3VibWlzc2lvbihjbGlja0NvdW50LCBwcm9qZWN0TmFtZSk7XG4gICAgfSlcblxuICAgIFxufSkoKTtcblxuLy9kZWxldGUgYWxsIGNoaWxkIGVsZW1lbnRzIGZ1bmN0aW9uXG5jb25zdCBkZWxldGVDaGlsZEVsZW1lbnRzID0gKHBhcmVudEVsKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgIHdoaWxlIChwYXJlbnRFbC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50RWwucmVtb3ZlQ2hpbGQocGFyZW50RWwuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAvL3JlbW92ZSBmcm9tIGFyci9sb2NhbCBzdG9yYWdlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vdGhlIHZhbHVlIG9mIHRoZSBrZXkgdmFsdWUgcGFpciBpcyB0aGUgb2JqZWN0IGFycmF5IHRoYXQgaXMgY3JlYXRlZCBmb3IgZWFjaCBwcm9qZWN0IChsaXN0IG9mIGl0ZW1zKVxuY29uc3QgcHJvamVjdExvY2FsU3RvcmFnZSA9IChjbGlja0NvdW50LCBwcm9qZWN0TmFtZSwgaXRlbSkgPT4ge1xuICAgIGNvbnN0IGxvY2FsU3RvcmFnZUl0ZW1MaXN0ID0gW107XG4gICAgLy9GSU5EIFBST0pFQ1QgTkFNRSBBTkQgUFVTSCBMQVNUIElURU0gSU5UTyBJVCBcblxuICAgIC8vIExPQ0FMU1RPUi5zZXRJdGVtKCdteVByb2plY3QnLCBKU09OLnN0cmluZ2lmeShpdGVtTGlzdEFycikpO1xuICAgIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoaXRlbSkpO1xuICAgIC8vIExPQ0FMU1RPUi5teVByb2plY3QucHVzaChKU09OLnN0cmluZ2lmeShsYXN0SXRlbSkpO1xuICAgIC8vIFNFU1NJT05TVE9SLnNldEl0ZW0oJ2NsaWNrQ291bnQnLCBjbGlja0NvdW50KTsgLy9yZXNldHMgIHdoZW4gY2xlYXIgYWxsIEFORCBuZXcgcHJvamVjdCBpcyBjcmVhdGVkXG4gICAgLy8gY29uc29sZS5sb2coTE9DQUxTVE9SLm15UHJvamVjdCk7XG4gICAgLy8gTE9DQUxTVE9SLnNldEl0ZW0oYCR7cHJvamVjdE5hbWV9YCwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xuICAgIC8vIGNvbnNvbGUubG9nKGxhc3RJdGVtKTtcbiAgICAvLyBMT0NBTFNUT1IubXlQcm9qZWN0LnB1c2goSlNPTi5zdHJpbmdpZnkobGFzdEl0ZW0pKTtcbiAgICAvLyBTRVNTSU9OU1RPUi5zZXRJdGVtKCdjbGlja0NvdW50JywgY2xpY2tDb3VudCk7IC8vcmVzZXRzICB3aGVuIGNsZWFyIGFsbCBBTkQgbmV3IHByb2plY3QgaXMgY3JlYXRlZFxuICAgIC8vIGNvbnNvbGUubG9nKExPQ0FMU1RPUi5teVByb2plY3QpO1xuXG4gICAgY29uc3QgcHJvamVjdEV4aXN0cyA9IGNoZWNrTG9jYWxTdG9yYWdlKCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdEV4aXN0cyk7XG5cbiAgICBjb25zdCBjcmVhdGVJdGVtRnJvbUxvY2FsU3RvcmFnZSA9IChpdGVtLCBwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICAvLyBjb25zdCBkID0gY3JlYXRlRGVmYXVsdEFycmF5TGlzdCgpO1xuICAgICAgICBjb25zdCBkID0gaXRlbTtcbiAgICAgICAgICAgIGNvbnN0IG4gPSBkLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBkYyA9IGQuZGF0ZUNyZWF0ZWQ7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlSXRlbUhUTUwobiwgZGMsIHByb2plY3ROYW1lKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHByb2plY3RFeGlzdHMpIHtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgIC8vYWRkIHRvIGN1cnJlbnQgcHJvamVjdCBhcnJheSBpbiBsb2NhbCBzdG9yYWdlIFxuICAgICAgICAvLyByZXR1cm4gYWRkTGlzdEl0ZW1Ub0FycihpdGVtKTsgXG4gICAgICAgIC8vIGNvbnN0IHByb2ogPSBMT0NBTC5nZXRJdGVtKGAke3Byb2plY3ROYW1lfWApO1xuICAgICAgICBsZXQgcHJvaiA9IEpTT04ucGFyc2UoTE9DQUwuZ2V0SXRlbSgnaGVsbG8nKSk7XG4gICAgICAgIC8vIEpTT04ucGFyc2UocHJvaik7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2opO1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgY29uc29sZS5sb2coQXJyYXkuaXNBcnJheShwcm9qKSk7XG4gICAgICAgIHByb2oucHVzaChKU09OLnN0cmluZ2lmeShpdGVtKSk7XG4gICAgICAgIFxuICAgICAgICBjcmVhdGVJdGVtRnJvbUxvY2FsU3RvcmFnZShpdGVtLCBwcm9qZWN0TmFtZSk7XG4gICAgICAgIC8vIHJldHVybiBwcm9qZWN0TG9jYWxTdG9yYWdlKHByb2plY3ROYW1lLCBpdGVtLCBjbGlja0NvdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhZGRDbGlja0NvdW50KGNsaWNrQ291bnQsIHByb2plY3ROYW1lKTtcbiAgICAgICAgXG4gICAgICAgIExPQ0FMLnNldEl0ZW0oYCR7cHJvamVjdE5hbWV9YCwgSlNPTi5zdHJpbmdpZnkoW2l0ZW1dKSk7XG4gICAgICAgIGNyZWF0ZUl0ZW1Gcm9tTG9jYWxTdG9yYWdlKGl0ZW0sIHByb2plY3ROYW1lKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgcmV0dXJuIExPQ0FMO1xufVxuXG4vL0pTT04ucGFyc2UgaXRlbSBsaXN0IGFyciwgYW5kIGNyZWF0ZSBodG1sIGVsZW1lbnQgZm9yIGVhY2ggaXRlbSBpbiBMT0NBTCBzdG9yYWdlIFxuY29uc3QgbG9hZFNlc3Npb25TdG9yYWdlUGFnZSA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZUhlYWRlcicpLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgLy9jcmVhdGUgZm9sZGVyIGluIHNpZGViYXIgb24gcGFnZSBsb2FkXG4gICAgLy93aWxsIG5lZWQgdG8gc2hvdyBhbGwgcHJvamVjdHMgaW4gc2lkZWJhclxuICAgIGNyZWF0ZVByb2plY3RGb2xkZXIocHJvamVjdE5hbWUpO1xuXG4gICAgbGV0IGkgPSBMT0NBTC5nZXRJdGVtKGAke3Byb2plY3ROYW1lfWApO1xuICAgIGkgPSBKU09OLnBhcnNlKGkpO1xuICAgIHJldHVybiBnZXROYW1lQW5kRGF0ZShpLCBwcm9qZWN0TmFtZSk7XG59XG5cbi8vY3JlYXRlIHByb2plY3QgZm9sZGVyIGluIHNpZGViYXIgd2hlbiBuZXcgcHJvamVjdCBpcyBjcmVhdGVkXG5jb25zdCBjcmVhdGVQcm9qZWN0Rm9sZGVyID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1wJyk7XG4gICAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgLy8gbmV3UHJvai5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XG4gICAgbmV3UHJvai5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZScpO1xuICAgIG5ld1Byb2oudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBjdXJyZW50UC5hcHBlbmRDaGlsZChuZXdQcm9qKTtcbn1cblxuLy9hZGQgY2xpY2sgY291bnQgdG8gc2Vzc2lvbiBzdG9yYWdlIHRvIHRyYWNrXG5jb25zdCBhZGRDbGlja0NvdW50ID0gKGNsaWNrQ291bnQsIHByb2plY3ROYW1lKSA9PiB7XG4gICAgLy9pZiBwcm9qZWN0IG5hbWUgYWxyZWFkeSBleGlzdHMgaW5zaWRlIHN0b3JhZ2UsIHB1c2hcbiAgICAvL290aGVyd2lzZSBjcmVhdGVcbiAgICBsZXQgZGF0YSA9IFNFU1NJT04uZ2V0SXRlbShwcm9qZWN0TmFtZSk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coU0VTU0lPTi5nZXRJdGVtKHByb2plY3ROYW1lKSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFNFU1NJT04pO1xuICAgIHJldHVybiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShgJHtwcm9qZWN0TmFtZX1gLCBjbGlja0NvdW50KTtcbn1cblxuLy8gbG9hZCBpbiBkZWZhdWx0IHBhZ2UgKHVzaW5nIGRlZmF1bHRhcnJheWxpc3QpXG5jb25zdCBsb2FkRGVmYXVsdFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgZCA9IGNyZWF0ZURlZmF1bHRBcnJheUxpc3QoKTtcbiAgICByZXR1cm4gZ2V0TmFtZUFuZERhdGUoZCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9