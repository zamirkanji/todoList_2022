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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black-color: black;\n    --font-weight: 300;\n    --border-test: 2px solid yellow;\n    --dark-blue: #0F2027;\n    --middle-blue: #203A43;\n    --light-blue: #2C5364;\n    --closetowhite: #598091;\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing: border-box;\n    font-weight: var(--font-weight);\n}\n\nhtml {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: black;\n}\n\n.text {\n    color: var(--closetowhite);\n    /* color: whitesmoke; */\n}\n\n.main-content {\n    min-height: 100%;\n    margin: 0;\n    padding: 10px;\n    /* overflow: hidden; */\n    display: flex;\n    /* flex-direction: column; */\n    background-color: black;\n    gap: 10px;\n}\n\n/* main sidebar */\n.main-sidebar {\n    /* margin: 10px 0px 10px 10px; */\n    margin: 0;\n    padding: 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    /* border: 2px solid var(--light-blue); */\n    /* background-color: var(--dark-blue); */\n    /* filter: blur(50%); */\n    gap: 10px;\n    border-radius: 5px;\n    transition: all 1s ease-in;\n}\n\n\n.sidebar-title  {\n    flex: .25;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--middle-blue);\n    text-align: center;\n    border-radius: 5px;\n    letter-spacing: 1px;\n    font-size: 100%;\n}\n\n#sidebar-title-text {\n    color: white;\n}\n\n.sidebar-project-list {\n    flex: 2.25;\n    width: 100%;\n    border-radius: 5px;\n}\n\n.sidebar-main-list {\n    margin: 0;\n    padding: 8px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 10px;\n}\n\n.sidebar-list-item {\n    margin: 0;\n    padding: 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--light-blue);\n    height: 25px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    border-radius: 5px;\n    font-size: 100%;\n}\n\n#current-p {\n    background-color: var(--closetowhite);\n    height: 35px;\n}\n\n.sidebar-create-new-btn {\n    flex: .5;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--middle-blue);\n    border-radius: 5px;\n}\n\n/* ************************* main body ************************** */\n.main-body {\n    margin: 0;\n    padding: 0;\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n}\n\n.main-header {\n    margin: 0;\n    padding: 0;\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.menu-icon{\n    width: 35px;\n    height: 35px;\n}\n#menu-icon {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100%;\n}\n\n#header-text {\n    color: white;\n    letter-spacing: 1px;\n}\n\n\n\n\n/* main list content */\n.main-list-content {\n    flex: 2.75;\n    display: flex;\n    flex-direction: column;\n    /* border: 10px solid var(--black-color); */\n    /* margin: 10px; */\n    margin: 0;\n    padding: 0;\n    gap: 10px;\n}\n\n.list-container {\n    flex: 2.25;\n    margin: 0;\n    padding: 8px;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    background-color: var(--dark-blue);\n    border-radius: 5px;\n    gap: 25px;\n}\n\n.ordered-item-list {\n    flex: 2;\n    /* height: 100%;\n    width: 100%; */\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 10px;\n}\n\n.list-item-options {\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    /* border: 1px solid violet; */\n}\n\n#create-new-item-btn {\n    width: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n\n.form-main {\n    /* justify-content: space-between; */\n    gap: 10px;\n    width: 75%;\n    display: flex;\n    /* border: 1px solid violet; */\n    /* align-items: center; */\n}\n\n.label-new-item {\n    text-align: center;\n    flex: .5;\n}\n\n#input-new-item {\n    border-radius: 5px;\n    border: none;\n    flex: 1.5;\n}\n\n#submit-btn {\n    flex: .5;\n}\n\n\n/* *********************each item********************* */\n.list-item {\n    margin: 0;\n    padding: 0 8px 0 8px;\n    /* list-style-type: none;\n    text-decoration: none;\n    list-style: none; */\n    background-color: var(--closetowhite);\n    height: 50px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 5px;\n    font-size: 100%;\n}\n\n/* #item-text {\n    list-style-type: decimal;\n    background-color: var(--dark-blue);\n} */\n\n.item-options-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    padding: 0;\n    width: 15%;\n    height: 100%;\n}\n\n.item-delete-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n\n#delete-item {\n    border: none;\n    border-radius: 10px;\n    background-color: var(--closetowhite);\n}\n\n\n#delete-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n    color: white;\n}\n\n.expand-icon-btn {\n    background-color: var(--closetowhite);\n    border: none;\n    flex: 1;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.expand-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n}\n\n\n\n\n.item-details-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n#item-details {\n    border: none;\n    border-radius: 10px;\n}\n\n.item-date-created {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n\n.expand-container {\n    margin: 0;\n    padding: 0 8px 0 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--closetowhite);\n    height: 150px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    border-radius: 5px;\n    font-size: 85%;\n}\n\n.details-container {\n    flex: .5;\n    /* border: 1px solid var(--closetowhite); */\n    display: flex;\n    justify-content: center;\n    background-color: var(--dark-blue);\n    /* align-items: center; */\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.details-title {\n    color: var(--closetowhite);\n    font-size: 100%;\n}\n\n\n\n\n\n\n\n\n\n/* ******************** general ********************** */\n\n.display {\n    display: none;\n    animation: ease-in 1s;\n}\n\n.btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 10px;\n}\n\n.item-btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 5px;\n    /* width: 50px; */\n    width: 65%;\n    height: 65%;\n    font-size: 75%;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --black-color: black;\n    --font-weight: 300;\n    --border-test: 2px solid yellow;\n    --dark-blue: #0F2027;\n    --middle-blue: #203A43;\n    --light-blue: #2C5364;\n    --closetowhite: #598091;\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing: border-box;\n    font-weight: var(--font-weight);\n}\n\nhtml {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: black;\n}\n\n.text {\n    color: var(--closetowhite);\n    /* color: whitesmoke; */\n}\n\n.main-content {\n    min-height: 100%;\n    margin: 0;\n    padding: 10px;\n    /* overflow: hidden; */\n    display: flex;\n    /* flex-direction: column; */\n    background-color: black;\n    gap: 10px;\n}\n\n/* main sidebar */\n.main-sidebar {\n    /* margin: 10px 0px 10px 10px; */\n    margin: 0;\n    padding: 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    /* border: 2px solid var(--light-blue); */\n    /* background-color: var(--dark-blue); */\n    /* filter: blur(50%); */\n    gap: 10px;\n    border-radius: 5px;\n    transition: all 1s ease-in;\n}\n\n\n.sidebar-title  {\n    flex: .25;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--middle-blue);\n    text-align: center;\n    border-radius: 5px;\n    letter-spacing: 1px;\n    font-size: 100%;\n}\n\n#sidebar-title-text {\n    color: white;\n}\n\n.sidebar-project-list {\n    flex: 2.25;\n    width: 100%;\n    border-radius: 5px;\n}\n\n.sidebar-main-list {\n    margin: 0;\n    padding: 8px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 10px;\n}\n\n.sidebar-list-item {\n    margin: 0;\n    padding: 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--light-blue);\n    height: 25px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    border-radius: 5px;\n    font-size: 100%;\n}\n\n#current-p {\n    background-color: var(--closetowhite);\n    height: 35px;\n}\n\n.sidebar-create-new-btn {\n    flex: .5;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--middle-blue);\n    border-radius: 5px;\n}\n\n/* ************************* main body ************************** */\n.main-body {\n    margin: 0;\n    padding: 0;\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n}\n\n.main-header {\n    margin: 0;\n    padding: 0;\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.menu-icon{\n    width: 35px;\n    height: 35px;\n}\n#menu-icon {\n    background-image: url('./img/menu.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100%;\n}\n\n#header-text {\n    color: white;\n    letter-spacing: 1px;\n}\n\n\n\n\n/* main list content */\n.main-list-content {\n    flex: 2.75;\n    display: flex;\n    flex-direction: column;\n    /* border: 10px solid var(--black-color); */\n    /* margin: 10px; */\n    margin: 0;\n    padding: 0;\n    gap: 10px;\n}\n\n.list-container {\n    flex: 2.25;\n    margin: 0;\n    padding: 8px;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    background-color: var(--dark-blue);\n    border-radius: 5px;\n    gap: 25px;\n}\n\n.ordered-item-list {\n    flex: 2;\n    /* height: 100%;\n    width: 100%; */\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 10px;\n}\n\n.list-item-options {\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    /* border: 1px solid violet; */\n}\n\n#create-new-item-btn {\n    width: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n\n.form-main {\n    /* justify-content: space-between; */\n    gap: 10px;\n    width: 75%;\n    display: flex;\n    /* border: 1px solid violet; */\n    /* align-items: center; */\n}\n\n.label-new-item {\n    text-align: center;\n    flex: .5;\n}\n\n#input-new-item {\n    border-radius: 5px;\n    border: none;\n    flex: 1.5;\n}\n\n#submit-btn {\n    flex: .5;\n}\n\n\n/* *********************each item********************* */\n.list-item {\n    margin: 0;\n    padding: 0 8px 0 8px;\n    /* list-style-type: none;\n    text-decoration: none;\n    list-style: none; */\n    background-color: var(--closetowhite);\n    height: 50px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 5px;\n    font-size: 100%;\n}\n\n/* #item-text {\n    list-style-type: decimal;\n    background-color: var(--dark-blue);\n} */\n\n.item-options-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    padding: 0;\n    width: 15%;\n    height: 100%;\n}\n\n.item-delete-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n\n#delete-item {\n    border: none;\n    border-radius: 10px;\n    background-color: var(--closetowhite);\n}\n\n\n#delete-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url('./img/delete.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n    color: white;\n}\n\n.expand-icon-btn {\n    background-color: var(--closetowhite);\n    border: none;\n    flex: 1;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.expand-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url('./img/chevron-down\\ \\(1\\).png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n}\n\n\n\n\n.item-details-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n#item-details {\n    border: none;\n    border-radius: 10px;\n}\n\n.item-date-created {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n\n.expand-container {\n    margin: 0;\n    padding: 0 8px 0 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--closetowhite);\n    height: 150px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    border-radius: 5px;\n    font-size: 85%;\n}\n\n.details-container {\n    flex: .5;\n    /* border: 1px solid var(--closetowhite); */\n    display: flex;\n    justify-content: center;\n    background-color: var(--dark-blue);\n    /* align-items: center; */\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.details-title {\n    color: var(--closetowhite);\n    font-size: 100%;\n}\n\n\n\n\n\n\n\n\n\n/* ******************** general ********************** */\n\n.display {\n    display: none;\n    animation: ease-in 1s;\n}\n\n.btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 10px;\n}\n\n.item-btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 5px;\n    /* width: 50px; */\n    width: 65%;\n    height: 65%;\n    font-size: 75%;\n}\n\n\n\n"],"sourceRoot":""}]);
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
}

class DOMItem {
    constructor(type) {
        this.type = type;
    }
}



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




// import delete from './img/delete.png';


const removeDisplayNone = (d) => {
    return d.classList.remove('display');
}

const addDisplayNone = (d) => {
    return d.classList.add('display');
}

const menuEventListener = (() => {
    const menuLogo = document.querySelector('.menu-icon');
    const mainSidebar = document.querySelector('.main-sidebar');
    menuLogo.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('test');
        mainSidebar.classList.toggle('display');
    })
})();

const newItemBtnListener = (() => {
    const newItemBtn = document.querySelector('#create-new-item-btn');
    const inputNewItem = document.querySelector('#input-new-item');
    const labelNewItem = document.querySelector('.label-new-item');
    const submitBtn = document.querySelector('#submit-btn');
    newItemBtn.addEventListener('click', (e) => {
        e.preventDefault();
        //remove display none from input form items
        removeDisplayNone(inputNewItem);
        removeDisplayNone(submitBtn);
        removeDisplayNone(labelNewItem);
    })
})();

// const expandBtnListener = (() => {
//     const expandIcon = document.querySelector('.expand-icon');
//     const goShoppingItemTest = document.querySelector('#go-shopping');
//     const itemOptions = document.querySelector('.item-options-container');
//     const itemText = document.querySelector('#item-text');
//     expandIcon.addEventListener('click', (e) => {
//         console.log(e, e.target);
//         e.preventDefault();
//         // goShoppingItemTest.classList.remove('list-item');
//         goShoppingItemTest.classList.toggle('expand-container');
//         // itemOptions.classList.toggle('expand-container');

//         const itemwrapper = document.createElement('div');
//         itemwrapper.classList.add('list-item');
//         itemwrapper.appendChild(itemText);
//         itemwrapper.appendChild(itemOptions);

//         goShoppingItemTest.appendChild(itemwrapper);
        

//         const details = document.createElement('div');
//         details.classList.add('details-container');
//         goShoppingItemTest.appendChild(details);  
//     })
// })();


// const testItem = new ListItem('z', "asdfasdf", getDate());
// console.log(testItem);

const createItemHTML = (i) => {
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




    createNewItemOptionsContainer.appendChild(createItemDeleteBtn);

    const lastItem = _app_js__WEBPACK_IMPORTED_MODULE_3__.itemListArr[_app_js__WEBPACK_IMPORTED_MODULE_3__.itemListArr.length - 1];

    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item');
    newListItem.classList.add('text');
    newListItem.textContent = i.name;

    //add item options container
    newListItem.appendChild(createNewItemOptionsContainer);

    //add new list item to ordered list
    orderedItemList.appendChild(newListItem);

}

const addListItemToArr = (i) => {
    _app_js__WEBPACK_IMPORTED_MODULE_3__.itemListArr.push(i);
    console.log(_app_js__WEBPACK_IMPORTED_MODULE_3__.itemListArr);    
}

const formSubmission = ((e)=> {
    const form = document.querySelector('.form-main');
    form.addEventListener('submit', (e)=> {
        const inputValue = document.querySelector('#input-new-item').value;
        //remove form display
        e.preventDefault();
        //create new list item
        const item = new _app_js__WEBPACK_IMPORTED_MODULE_3__.ListItem(`${inputValue}`, (0,_app_js__WEBPACK_IMPORTED_MODULE_3__.getDate)());
        //push item to array
        addListItemToArr(item);
        //create item in DOM
        return createItemHTML(item);
    })
})();


const createProjectLocalStorage = () => {
    const LOCALSTOR = window.localStorage;
    console.log(LOCALSTOR);

    //name of project that user creates is the key name that is pushged to the localstorage object
    //the value of the key value pair is the object array that is created for each project (list of items)
    LOCALSTOR.arrayOne = _app_js__WEBPACK_IMPORTED_MODULE_3__.itemListArr;
    console.log(LOCALSTOR);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlHQUFpQztBQUM3RSw0Q0FBNEMsNkdBQW1DO0FBQy9FLDRDQUE0QyxpSUFBNkM7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGlEQUFpRCwyQkFBMkIseUJBQXlCLHNDQUFzQywyQkFBMkIsNkJBQTZCLDRCQUE0Qiw4QkFBOEIsR0FBRyxPQUFPLGdEQUFnRCw2QkFBNkIsc0NBQXNDLEdBQUcsVUFBVSxnQkFBZ0IsaUJBQWlCLG1CQUFtQiw4QkFBOEIsR0FBRyxXQUFXLGlDQUFpQyw0QkFBNEIsS0FBSyxtQkFBbUIsdUJBQXVCLGdCQUFnQixvQkFBb0IsMkJBQTJCLHNCQUFzQixpQ0FBaUMsZ0NBQWdDLGdCQUFnQixHQUFHLHVDQUF1QyxxQ0FBcUMsa0JBQWtCLGlCQUFpQixjQUFjLG9CQUFvQiw2QkFBNkIsOENBQThDLCtDQUErQyw4QkFBOEIsa0JBQWtCLHlCQUF5QixpQ0FBaUMsR0FBRyx1QkFBdUIsZ0JBQWdCLGtCQUFrQixvQkFBb0IsOEJBQThCLDBCQUEwQiwyQ0FBMkMseUJBQXlCLHlCQUF5QiwwQkFBMEIsc0JBQXNCLEdBQUcseUJBQXlCLG1CQUFtQixHQUFHLDJCQUEyQixpQkFBaUIsa0JBQWtCLHlCQUF5QixHQUFHLHdCQUF3QixnQkFBZ0IsbUJBQW1CLGNBQWMsb0JBQW9CLDZCQUE2QixxQkFBcUIsZ0JBQWdCLEdBQUcsd0JBQXdCLGdCQUFnQixtQkFBbUIsNEJBQTRCLDRCQUE0Qix1QkFBdUIsMENBQTBDLG1CQUFtQixtQkFBbUIsMEJBQTBCLG9CQUFvQiwwQkFBMEIsa0NBQWtDLHlCQUF5QixzQkFBc0IsR0FBRyxnQkFBZ0IsNENBQTRDLG1CQUFtQixHQUFHLDZCQUE2QixlQUFlLGtCQUFrQixvQkFBb0IsOEJBQThCLDBCQUEwQiwyQ0FBMkMseUJBQXlCLEdBQUcsc0ZBQXNGLGdCQUFnQixpQkFBaUIsY0FBYyxvQkFBb0IsNkJBQTZCLEdBQUcsa0JBQWtCLGdCQUFnQixpQkFBaUIsZ0JBQWdCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLEdBQUcsZUFBZSxrQkFBa0IsbUJBQW1CLEdBQUcsY0FBYyx3RUFBd0UsbUNBQW1DLGtDQUFrQyw0QkFBNEIsR0FBRyxrQkFBa0IsbUJBQW1CLDBCQUEwQixHQUFHLHVEQUF1RCxpQkFBaUIsb0JBQW9CLDZCQUE2QixnREFBZ0QseUJBQXlCLGtCQUFrQixpQkFBaUIsZ0JBQWdCLEdBQUcscUJBQXFCLGlCQUFpQixnQkFBZ0IsbUJBQW1CLG9CQUFvQiw2QkFBNkIscUJBQXFCLHlDQUF5Qyx5QkFBeUIsZ0JBQWdCLEdBQUcsd0JBQXdCLGNBQWMsc0JBQXNCLG1CQUFtQixrQkFBa0IsaUJBQWlCLG9CQUFvQiw2QkFBNkIscUJBQXFCLGdCQUFnQixHQUFHLHdCQUF3QixnQkFBZ0Isb0JBQW9CLHFDQUFxQyw0QkFBNEIsbUNBQW1DLEtBQUssMEJBQTBCLGtCQUFrQixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLG9CQUFvQix5Q0FBeUMsa0JBQWtCLGlCQUFpQixvQkFBb0IsbUNBQW1DLGdDQUFnQyxLQUFLLHFCQUFxQix5QkFBeUIsZUFBZSxHQUFHLHFCQUFxQix5QkFBeUIsbUJBQW1CLGdCQUFnQixHQUFHLGlCQUFpQixlQUFlLEdBQUcsNkVBQTZFLGdCQUFnQiwyQkFBMkIsK0JBQStCLDRCQUE0Qix3QkFBd0IsOENBQThDLG1CQUFtQixtQkFBbUIsMEJBQTBCLG9CQUFvQiwwQkFBMEIscUNBQXFDLHlCQUF5QixzQkFBc0IsR0FBRyxtQkFBbUIsK0JBQStCLHlDQUF5QyxJQUFJLCtCQUErQixvQkFBb0IsMEJBQTBCLDhCQUE4QixnQkFBZ0IsaUJBQWlCLGlCQUFpQixtQkFBbUIsR0FBRyxzQkFBc0IsY0FBYyxvQkFBb0IsOEJBQThCLDBCQUEwQixtQkFBbUIsR0FBRyxvQkFBb0IsbUJBQW1CLDBCQUEwQiw0Q0FBNEMsR0FBRyxvQkFBb0Isa0JBQWtCLG1CQUFtQix3RUFBd0UsbUNBQW1DLGtDQUFrQyw0QkFBNEIsbUJBQW1CLEdBQUcsc0JBQXNCLDRDQUE0QyxtQkFBbUIsY0FBYyxtQkFBbUIsZ0JBQWdCLGlCQUFpQixvQkFBb0IsOEJBQThCLDBCQUEwQix5QkFBeUIsR0FBRyxrQkFBa0Isa0JBQWtCLG1CQUFtQix3RUFBd0UsbUNBQW1DLGtDQUFrQyw0QkFBNEIsR0FBRyw2QkFBNkIsY0FBYyxvQkFBb0IsOEJBQThCLDBCQUEwQiw2Q0FBNkMscUJBQXFCLEdBQUcsaUJBQWlCLG1CQUFtQiwwQkFBMEIsR0FBRyx3QkFBd0IsY0FBYyxvQkFBb0IsOEJBQThCLDBCQUEwQiw2Q0FBNkMscUJBQXFCLEdBQUcsdUJBQXVCLGdCQUFnQiwyQkFBMkIsNEJBQTRCLDRCQUE0Qix1QkFBdUIsNENBQTRDLG9CQUFvQixtQkFBbUIsMEJBQTBCLG9CQUFvQiw2QkFBNkIsOEJBQThCLHFDQUFxQyx5QkFBeUIscUJBQXFCLEdBQUcsd0JBQXdCLGVBQWUsZ0RBQWdELHNCQUFzQiw4QkFBOEIseUNBQXlDLDhCQUE4QiwyQkFBMkIsb0JBQW9CLEdBQUcsb0JBQW9CLGlDQUFpQyxzQkFBc0IsR0FBRywyRkFBMkYsb0JBQW9CLDRCQUE0QixHQUFHLFVBQVUsOEJBQThCLG1CQUFtQix5QkFBeUIsaUNBQWlDLG9CQUFvQixHQUFHLGVBQWUsOEJBQThCLG1CQUFtQix5QkFBeUIsaUNBQWlDLG1CQUFtQixzQkFBc0IsbUJBQW1CLGtCQUFrQixxQkFBcUIsR0FBRyxlQUFlLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxVQUFVLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFNBQVMsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksT0FBTyxPQUFPLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZ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SztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7O0FBRUEscUJBQXFCLGdEQUFXLENBQUMsdURBQWtCOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLHFEQUFnQjtBQUNwQixnQkFBZ0IsZ0RBQVc7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQVEsSUFBSSxXQUFXLEdBQUcsZ0RBQU87QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQVc7QUFDcEM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9tZW51LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL2RlbGV0ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9jaGV2cm9uLWRvd24gKDEpLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJsYWNrLWNvbG9yOiBibGFjaztcXG4gICAgLS1mb250LXdlaWdodDogMzAwO1xcbiAgICAtLWJvcmRlci10ZXN0OiAycHggc29saWQgeWVsbG93O1xcbiAgICAtLWRhcmstYmx1ZTogIzBGMjAyNztcXG4gICAgLS1taWRkbGUtYmx1ZTogIzIwM0E0MztcXG4gICAgLS1saWdodC1ibHVlOiAjMkM1MzY0O1xcbiAgICAtLWNsb3NldG93aGl0ZTogIzU5ODA5MTtcXG59XFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQpO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICAvKiBjb2xvcjogd2hpdGVzbW9rZTsgKi9cXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLyogbWFpbiBzaWRlYmFyICovXFxuLm1haW4tc2lkZWJhciB7XFxuICAgIC8qIG1hcmdpbjogMTBweCAwcHggMTBweCAxMHB4OyAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpOyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpOyAqL1xcbiAgICAvKiBmaWx0ZXI6IGJsdXIoNTAlKTsgKi9cXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluO1xcbn1cXG5cXG5cXG4uc2lkZWJhci10aXRsZSAge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkZGxlLWJsdWUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG4jc2lkZWJhci10aXRsZS10ZXh0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0LWxpc3Qge1xcbiAgICBmbGV4OiAyLjI1O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1tYWluLWxpc3Qge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNpZGViYXItbGlzdC1pdGVtIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbiNjdXJyZW50LXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5zaWRlYmFyLWNyZWF0ZS1uZXctYnRuIHtcXG4gICAgZmxleDogLjU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkZGxlLWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKiogbWFpbiBib2R5ICoqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuLm1haW4tYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZmxleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtaWNvbntcXG4gICAgd2lkdGg6IDM1cHg7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuI21lbnUtaWNvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4jaGVhZGVyLXRleHQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcblxcblxcblxcbi8qIG1haW4gbGlzdCBjb250ZW50ICovXFxuLm1haW4tbGlzdC1jb250ZW50IHtcXG4gICAgZmxleDogMi43NTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogYm9yZGVyOiAxMHB4IHNvbGlkIHZhcigtLWJsYWNrLWNvbG9yKTsgKi9cXG4gICAgLyogbWFyZ2luOiAxMHB4OyAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgZmxleDogMi4yNTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGdhcDogMjVweDtcXG59XFxuXFxuLm9yZGVyZWQtaXRlbS1saXN0IHtcXG4gICAgZmxleDogMjtcXG4gICAgLyogaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTsgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtLW9wdGlvbnMge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2aW9sZXQ7ICovXFxufVxcblxcbiNjcmVhdGUtbmV3LWl0ZW0tYnRuIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG4uZm9ybS1tYWluIHtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZpb2xldDsgKi9cXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuLmxhYmVsLW5ldy1pdGVtIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbGV4OiAuNTtcXG59XFxuXFxuI2lucHV0LW5ldy1pdGVtIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZsZXg6IDEuNTtcXG59XFxuXFxuI3N1Ym1pdC1idG4ge1xcbiAgICBmbGV4OiAuNTtcXG59XFxuXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqZWFjaCBpdGVtKioqKioqKioqKioqKioqKioqKioqICovXFxuLmxpc3QtaXRlbSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCA4cHggMCA4cHg7XFxuICAgIC8qIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLyogI2l0ZW0tdGV4dCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG59ICovXFxuXFxuLml0ZW0tb3B0aW9ucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5pdGVtLWRlbGV0ZS1idG4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4jZGVsZXRlLWl0ZW0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxufVxcblxcblxcbiNkZWxldGUtaWNvbiB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5leHBhbmQtaWNvbi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZsZXg6IDE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZXhwYW5kLWljb24ge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcXG59XFxuXFxuXFxuXFxuXFxuLml0ZW0tZGV0YWlscy1idG4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jaXRlbS1kZXRhaWxzIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaXRlbS1kYXRlLWNyZWF0ZWQge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZXhwYW5kLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCA4cHggMCA4cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiA4NSU7XFxufVxcblxcbi5kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IC41O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbG9zZXRvd2hpdGUpOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZGV0YWlscy10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqIGdlbmVyYWwgKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi5kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYW5pbWF0aW9uOiBlYXNlLWluIDFzO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLml0ZW0tYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICAvKiB3aWR0aDogNTBweDsgKi9cXG4gICAgd2lkdGg6IDY1JTtcXG4gICAgaGVpZ2h0OiA2NSU7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbn1cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0Isb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLHNCQUFzQjtJQUN0QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxnQ0FBZ0M7SUFDaEMsU0FBUztJQUNULFVBQVU7SUFDVixPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJ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dUI7SUFDdkIsa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COzs7Ozs7Ozs7O0FBVUEsd0RBQXdEOztBQUV4RDtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYmxhY2stY29sb3I6IGJsYWNrO1xcbiAgICAtLWZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIC0tYm9yZGVyLXRlc3Q6IDJweCBzb2xpZCB5ZWxsb3c7XFxuICAgIC0tZGFyay1ibHVlOiAjMEYyMDI3O1xcbiAgICAtLW1pZGRsZS1ibHVlOiAjMjAzQTQzO1xcbiAgICAtLWxpZ2h0LWJsdWU6ICMyQzUzNjQ7XFxuICAgIC0tY2xvc2V0b3doaXRlOiAjNTk4MDkxO1xcbn1cXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodCk7XFxufVxcblxcbmh0bWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi50ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIC8qIGNvbG9yOiB3aGl0ZXNtb2tlOyAqL1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiBtYWluIHNpZGViYXIgKi9cXG4ubWFpbi1zaWRlYmFyIHtcXG4gICAgLyogbWFyZ2luOiAxMHB4IDBweCAxMHB4IDEwcHg7ICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHQtYmx1ZSk7ICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7ICovXFxuICAgIC8qIGZpbHRlcjogYmx1cig1MCUpOyAqL1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW47XFxufVxcblxcblxcbi5zaWRlYmFyLXRpdGxlICB7XFxuICAgIGZsZXg6IC4yNTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWRkbGUtYmx1ZSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbiNzaWRlYmFyLXRpdGxlLXRleHQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3QtbGlzdCB7XFxuICAgIGZsZXg6IDIuMjU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaWRlYmFyLW1haW4tbGlzdCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhci1saXN0LWl0ZW0ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuI2N1cnJlbnQtcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIGhlaWdodDogMzVweDtcXG59XFxuXFxuLnNpZGViYXItY3JlYXRlLW5ldy1idG4ge1xcbiAgICBmbGV4OiAuNTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWRkbGUtYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKiBtYWluIGJvZHkgKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG4ubWFpbi1ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmbGV4OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZsZXg6IC4yNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1pY29ue1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbn1cXG4jbWVudS1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9tZW51LnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG59XFxuXFxuI2hlYWRlci10ZXh0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBtYWluIGxpc3QgY29udGVudCAqL1xcbi5tYWluLWxpc3QtY29udGVudCB7XFxuICAgIGZsZXg6IDIuNzU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGJvcmRlcjogMTBweCBzb2xpZCB2YXIoLS1ibGFjay1jb2xvcik7ICovXFxuICAgIC8qIG1hcmdpbjogMTBweDsgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDIuMjU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbi5vcmRlcmVkLWl0ZW0tbGlzdCB7XFxuICAgIGZsZXg6IDI7XFxuICAgIC8qIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7ICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmxpc3QtaXRlbS1vcHRpb25zIHtcXG4gICAgZmxleDogLjI1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmlvbGV0OyAqL1xcbn1cXG5cXG4jY3JlYXRlLW5ldy1pdGVtLWJ0biB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuLmZvcm0tbWFpbiB7XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2aW9sZXQ7ICovXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxufVxcblxcbi5sYWJlbC1uZXctaXRlbSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxleDogLjU7XFxufVxcblxcbiNpbnB1dC1uZXctaXRlbSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmbGV4OiAxLjU7XFxufVxcblxcbiNzdWJtaXQtYnRuIHtcXG4gICAgZmxleDogLjU7XFxufVxcblxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKmVhY2ggaXRlbSoqKioqKioqKioqKioqKioqKioqKiAqL1xcbi5saXN0LWl0ZW0ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xcbiAgICAvKiBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbi8qICNpdGVtLXRleHQge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGRlY2ltYWw7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxufSAqL1xcblxcbi5pdGVtLW9wdGlvbnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaXRlbS1kZWxldGUtYnRuIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuI2RlbGV0ZS1pdGVtIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbn1cXG5cXG5cXG4jZGVsZXRlLWljb24ge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2RlbGV0ZS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmV4cGFuZC1pY29uLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZmxleDogMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5leHBhbmQtaWNvbiB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvY2hldnJvbi1kb3duXFxcXCBcXFxcKDFcXFxcKS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XFxufVxcblxcblxcblxcblxcbi5pdGVtLWRldGFpbHMtYnRuIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7ICovXFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuI2l0ZW0tZGV0YWlscyB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLml0ZW0tZGF0ZS1jcmVhdGVkIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7ICovXFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmV4cGFuZC1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogODUlO1xcbn1cXG5cXG4uZGV0YWlscy1jb250YWluZXIge1xcbiAgICBmbGV4OiAuNTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xvc2V0b3doaXRlKTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRldGFpbHMtdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKiBnZW5lcmFsICoqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4uZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFuaW1hdGlvbjogZWFzZS1pbiAxcztcXG59XFxuXFxuLmJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5pdGVtLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgLyogd2lkdGg6IDUwcHg7ICovXFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIGhlaWdodDogNjUlO1xcbiAgICBmb250LXNpemU6IDc1JTtcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGl0ZW1MaXN0QXJyID0gW107XG5cbmNvbnN0IGdldERhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbXlEYXRlID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICByZXR1cm4gbXlEYXRlO1xufVxuXG5jbGFzcyBMaXN0SXRlbSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGF0ZUNyZWF0ZWQpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9ICd0ZXN0JztcbiAgICAgICAgdGhpcy5kYXRlQ3JlYXRlZCA9IGRhdGVDcmVhdGVkXG4gICAgfVxuICAgIC8vIGdldCBkYXRlQ3JlYXRlZCAoKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmRhdGVDcmVhdGVkO1xuICAgIC8vIH1cbn1cblxuY2xhc3MgRE9NSXRlbSB7XG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBpdGVtTGlzdEFycixcbiAgICBnZXREYXRlLFxuICAgIExpc3RJdGVtXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBtZW51SWNvbiBmcm9tICcuL2ltZy9tZW51LnBuZyc7XG5pbXBvcnQgZXhwYW5kIGZyb20gJy4vaW1nL25vdW4tZXhwYW5kLTExODE3NDcucG5nJztcbmltcG9ydCB7IG1kaUNoZXZyb25Eb3duIH0gZnJvbSAnQG1kaS9qcyc7XG4vLyBpbXBvcnQgZGVsZXRlIGZyb20gJy4vaW1nL2RlbGV0ZS5wbmcnO1xuaW1wb3J0IHsgZ2V0RGF0ZSwgaXRlbUxpc3RBcnIsIExpc3RJdGVtIH0gZnJvbSAnLi9hcHAuanMnO1xuXG5jb25zdCByZW1vdmVEaXNwbGF5Tm9uZSA9IChkKSA9PiB7XG4gICAgcmV0dXJuIGQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheScpO1xufVxuXG5jb25zdCBhZGREaXNwbGF5Tm9uZSA9IChkKSA9PiB7XG4gICAgcmV0dXJuIGQuY2xhc3NMaXN0LmFkZCgnZGlzcGxheScpO1xufVxuXG5jb25zdCBtZW51RXZlbnRMaXN0ZW5lciA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWVudUxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uJyk7XG4gICAgY29uc3QgbWFpblNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zaWRlYmFyJyk7XG4gICAgbWVudUxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgICAgIG1haW5TaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ2Rpc3BsYXknKTtcbiAgICB9KVxufSkoKTtcblxuY29uc3QgbmV3SXRlbUJ0bkxpc3RlbmVyID0gKCgpID0+IHtcbiAgICBjb25zdCBuZXdJdGVtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1uZXctaXRlbS1idG4nKTtcbiAgICBjb25zdCBpbnB1dE5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtbmV3LWl0ZW0nKTtcbiAgICBjb25zdCBsYWJlbE5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFiZWwtbmV3LWl0ZW0nKTtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWJ0bicpO1xuICAgIG5ld0l0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vcmVtb3ZlIGRpc3BsYXkgbm9uZSBmcm9tIGlucHV0IGZvcm0gaXRlbXNcbiAgICAgICAgcmVtb3ZlRGlzcGxheU5vbmUoaW5wdXROZXdJdGVtKTtcbiAgICAgICAgcmVtb3ZlRGlzcGxheU5vbmUoc3VibWl0QnRuKTtcbiAgICAgICAgcmVtb3ZlRGlzcGxheU5vbmUobGFiZWxOZXdJdGVtKTtcbiAgICB9KVxufSkoKTtcblxuLy8gY29uc3QgZXhwYW5kQnRuTGlzdGVuZXIgPSAoKCkgPT4ge1xuLy8gICAgIGNvbnN0IGV4cGFuZEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kLWljb24nKTtcbi8vICAgICBjb25zdCBnb1Nob3BwaW5nSXRlbVRlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ28tc2hvcHBpbmcnKTtcbi8vICAgICBjb25zdCBpdGVtT3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLW9wdGlvbnMtY29udGFpbmVyJyk7XG4vLyAgICAgY29uc3QgaXRlbVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS10ZXh0Jyk7XG4vLyAgICAgZXhwYW5kSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGUsIGUudGFyZ2V0KTtcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAvLyBnb1Nob3BwaW5nSXRlbVRlc3QuY2xhc3NMaXN0LnJlbW92ZSgnbGlzdC1pdGVtJyk7XG4vLyAgICAgICAgIGdvU2hvcHBpbmdJdGVtVGVzdC5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmQtY29udGFpbmVyJyk7XG4vLyAgICAgICAgIC8vIGl0ZW1PcHRpb25zLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZC1jb250YWluZXInKTtcblxuLy8gICAgICAgICBjb25zdCBpdGVtd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgICAgICBpdGVtd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0nKTtcbi8vICAgICAgICAgaXRlbXdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbVRleHQpO1xuLy8gICAgICAgICBpdGVtd3JhcHBlci5hcHBlbmRDaGlsZChpdGVtT3B0aW9ucyk7XG5cbi8vICAgICAgICAgZ29TaG9wcGluZ0l0ZW1UZXN0LmFwcGVuZENoaWxkKGl0ZW13cmFwcGVyKTtcbiAgICAgICAgXG5cbi8vICAgICAgICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gICAgICAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtY29udGFpbmVyJyk7XG4vLyAgICAgICAgIGdvU2hvcHBpbmdJdGVtVGVzdC5hcHBlbmRDaGlsZChkZXRhaWxzKTsgIFxuLy8gICAgIH0pXG4vLyB9KSgpO1xuXG5cbi8vIGNvbnN0IHRlc3RJdGVtID0gbmV3IExpc3RJdGVtKCd6JywgXCJhc2RmYXNkZlwiLCBnZXREYXRlKCkpO1xuLy8gY29uc29sZS5sb2codGVzdEl0ZW0pO1xuXG5jb25zdCBjcmVhdGVJdGVtSFRNTCA9IChpKSA9PiB7XG4gICAgY29uc3Qgb3JkZXJlZEl0ZW1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyZWQtaXRlbS1saXN0Jyk7XG5cbiAgICAvL2NyZWF0ZSBpdGVtIG9wdGlvbnMgY29udGFpbmVyXG4gICAgY29uc3QgY3JlYXRlTmV3SXRlbU9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVhdGVOZXdJdGVtT3B0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLW9wdGlvbnMtY29udGFpbmVyJyk7XG5cblxuICAgIC8vYWRkIERFTEVURSBCdG4vSWNvbiB0byBpdGVtXG4gICAgY29uc3QgY3JlYXRlSXRlbURlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyZWF0ZUl0ZW1EZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnaXRlbS1kZWxldGUtYnRuJyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLmlkID0gJ2RlbGV0ZS1pdGVtJztcbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVsZXRlSWNvbi5pZCA9ICdkZWxldGUtaWNvbic7XG4gICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgIGNyZWF0ZUl0ZW1EZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgIC8vYWRkIEVYUEFORCBCdG4vSWNvbiB0byBpdGVtXG5cblxuXG5cbiAgICBjcmVhdGVOZXdJdGVtT3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJdGVtRGVsZXRlQnRuKTtcblxuICAgIGNvbnN0IGxhc3RJdGVtID0gaXRlbUxpc3RBcnJbaXRlbUxpc3RBcnIubGVuZ3RoIC0gMV07XG5cbiAgICBjb25zdCBuZXdMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbmV3TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtJyk7XG4gICAgbmV3TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICAgIG5ld0xpc3RJdGVtLnRleHRDb250ZW50ID0gaS5uYW1lO1xuXG4gICAgLy9hZGQgaXRlbSBvcHRpb25zIGNvbnRhaW5lclxuICAgIG5ld0xpc3RJdGVtLmFwcGVuZENoaWxkKGNyZWF0ZU5ld0l0ZW1PcHRpb25zQ29udGFpbmVyKTtcblxuICAgIC8vYWRkIG5ldyBsaXN0IGl0ZW0gdG8gb3JkZXJlZCBsaXN0XG4gICAgb3JkZXJlZEl0ZW1MaXN0LmFwcGVuZENoaWxkKG5ld0xpc3RJdGVtKTtcblxufVxuXG5jb25zdCBhZGRMaXN0SXRlbVRvQXJyID0gKGkpID0+IHtcbiAgICBpdGVtTGlzdEFyci5wdXNoKGkpO1xuICAgIGNvbnNvbGUubG9nKGl0ZW1MaXN0QXJyKTsgICAgXG59XG5cbmNvbnN0IGZvcm1TdWJtaXNzaW9uID0gKChlKT0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tbWFpbicpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT4ge1xuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LW5ldy1pdGVtJykudmFsdWU7XG4gICAgICAgIC8vcmVtb3ZlIGZvcm0gZGlzcGxheVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vY3JlYXRlIG5ldyBsaXN0IGl0ZW1cbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBMaXN0SXRlbShgJHtpbnB1dFZhbHVlfWAsIGdldERhdGUoKSk7XG4gICAgICAgIC8vcHVzaCBpdGVtIHRvIGFycmF5XG4gICAgICAgIGFkZExpc3RJdGVtVG9BcnIoaXRlbSk7XG4gICAgICAgIC8vY3JlYXRlIGl0ZW0gaW4gRE9NXG4gICAgICAgIHJldHVybiBjcmVhdGVJdGVtSFRNTChpdGVtKTtcbiAgICB9KVxufSkoKTtcblxuXG5jb25zdCBjcmVhdGVQcm9qZWN0TG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IExPQ0FMU1RPUiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gICAgY29uc29sZS5sb2coTE9DQUxTVE9SKTtcblxuICAgIC8vbmFtZSBvZiBwcm9qZWN0IHRoYXQgdXNlciBjcmVhdGVzIGlzIHRoZSBrZXkgbmFtZSB0aGF0IGlzIHB1c2hnZWQgdG8gdGhlIGxvY2Fsc3RvcmFnZSBvYmplY3RcbiAgICAvL3RoZSB2YWx1ZSBvZiB0aGUga2V5IHZhbHVlIHBhaXIgaXMgdGhlIG9iamVjdCBhcnJheSB0aGF0IGlzIGNyZWF0ZWQgZm9yIGVhY2ggcHJvamVjdCAobGlzdCBvZiBpdGVtcylcbiAgICBMT0NBTFNUT1IuYXJyYXlPbmUgPSBpdGVtTGlzdEFycjtcbiAgICBjb25zb2xlLmxvZyhMT0NBTFNUT1IpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9