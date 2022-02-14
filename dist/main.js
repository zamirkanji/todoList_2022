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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/delete.png */ "./src/img/delete.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/chevron-down (1).png */ "./src/img/chevron-down (1).png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black-color: black;\n    --font-weight: 300;\n    --border-test: 2px solid yellow;\n    --dark-blue: #476a7a;\n    --dark-grey: #202a2c86;\n    --light-blue: #2C5364;\n    --closetowhite: #6d9eb3;\n    --redOrange: rgb(255, 68, 11);\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing: border-box;\n    font-weight: var(--font-weight);\n}\n\nhtml {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: black;\n}\n\n.text {\n    color: var(--closetowhite);\n    /* color: whitesmoke; */\n    /* text-align: center; */\n}\n\n.main-content {\n    min-height: 100%;\n    margin: 0;\n    padding: 15px;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 15px;\n}\n\n/* main sidebar */\n.main-sidebar {\n    /* flex: .1; */\n    min-height: 300px;\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    padding: 15px;\n    /* background-color: rgb(55, 66, 73); */\n    background-color: var(--dark-grey);\n    border-radius: 10px;\n}\n\n\n.sidebar-title  {\n    margin: 0;\n    padding: 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    /* align-items: space-between; */\n    justify-content: space-between;\n    /* align-items: center; */\n    /* background-color: var(--dark-grey); */\n    border-radius: 5px;\n    /* transition: all 1s ease; */\n}\n\n/* .material-icons {\n    text-align: left;\n    font-size: 40px;\n    color: var(--closetowhite);\n    flex: .15;\n} */\n\n#sidebar-title-text {\n    /* flex: .85; */\n    text-align: center;\n    color: black;\n    /* font-size: 28px; */\n    font-weight: var(--font-weight);\n    letter-spacing: 1.5px;\n}\n\n.sidebar-project-list {\n    flex: 1;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    /* border-radius: 5px; */\n    /* background-color: blue; */\n}\n\n.sidebar-main-list {\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    /* color: rgb(55, 66, 73); */\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    gap: 10px;\n    height: 100%;\n    \n}\n\n.sidebar-list-item {\n    margin: 0;\n    padding: 0;\n    /* padding: 8px; */\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    /* background-color: var(--dark-grey); */\n    color: #a3a3a3;\n    font-size: 18px;\n    font-size: 1.25rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n/* ul.sidebar-list-item {\n    \n} */\n\nul.sidebar-list-item > li {\n    text-indent: -5px;\n}\n\nul.sidebar-list-item > li::before {\n    content: \"- \";\n    color: black;\n    text-indent: -5px;\n}\n\n#current-p {\n    /* background-color: var(--dark-grey); */\n    /* gap: 10px; */\n    color: white;\n    font-size: 1.5rem;\n}\n\n.projectName {\n    margin: 0 0 0 10px;\n    color: black;\n    font-size: 1rem;\n    text-align: center;\n    letter-spacing: 1.5px;\n    padding: 10px;\n    border-radius: 10px;\n    height: 100%;\n}\n\n.sidebar-create-new-btn {\n    flex: .25;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    /* background-color: violet; */\n}\n\n/* .create-new-btn {\n    \n    \n} */\n\n/* ************************* main body ************************** */\n.main-body {\n    margin: 0;\n    padding: 0;\n    height: 1000px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.main-header {\n    margin: 0;\n    padding: 0 15px 0 15px;\n    flex: .30;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--dark-grey);\n    \n    border-radius: 10px;\n}\n\n/* .menu-icon{\n    width: 30px;\n    height: 30px;\n}\n#menu-icon {\n    background-image: url('./img/menu.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100%;\n} */\n\n#projectNameHeader {\n    color: var(--closetowhite);\n    /* color: black; */\n    letter-spacing: 1.5px;\n    font-size: 1.75rem;\n}\n\n#header-text {\n    color: white;\n    letter-spacing: 1px;\n    font-size: 1.25rem;\n}\n\n\n\n\n/* main list content */\n.main-list-content {\n    flex: 2.70;\n    /* height: 85%; */\n    display: flex;\n    flex-direction: column;\n    /* border: 10px solid var(--black-color); */\n    /* margin: 10px; */\n    background-color: var(--dark-grey);\n    margin: 0;\n    padding: 0;\n    border-radius: 10px;\n    gap: 10px;\n}\n\n.list-container {\n    flex: 2.25;\n    margin: 0;\n    padding: 25px 15px 15px 15px;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    /* background-color: var(--dark-grey); */\n    border-radius: 5px;\n    gap: 50px;\n}\n\n.ordered-item-list {\n    flex: 2;\n    /* height: 100%;\n    width: 100%; */\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 15px;\n}\n\n\n\n\n\n\n\n/* *************************** FORM SUBMISSION FOR LIST ITEMS ************************* */\n.list-item-options {\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    margin: 0;\n    padding: 0;\n    /* border: 1px solid violet; */\n}\n\n.form-main {\n    /* justify-content: space-between; */\n    gap: 10px;\n    width: 75%;\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    /* border: 1px solid violet; */\n    /* align-items: center; */\n}\n\n#create-new-item-btn {\n    /* width: 50px; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.25rem;\n}\n\n.label-new-item {\n    text-align: center;\n    flex: .1;\n}\n\n#input-new-item {\n    margin: 0;\n    /* padding: 0; */\n    border-radius: 5px;\n    border: none;\n    flex: 1.9;\n    background-color: whitesmoke;\n    opacity: .8;\n}\n\n#input-new-item:checked {\n    border: none;\n}\n\n#submit-btn {\n    flex: .5;\n}\n\n#clear-all-items-btn {\n    background-color: var(--redOrange);\n    color: black;\n}\n\n\n/* ***************************** EACH ITEM ******************************** */\n.list-item {\n    margin: 0;\n    padding: 0 0 0 10px;\n    /* list-style-type: none;\n    text-decoration: none;\n    list-style: none; */\n    /* background-color: var(--closetowhite); */\n    background-color: var(--dark-blue);\n    height: 50px;\n    color: var(--black-color);\n    letter-spacing: 1px;\n    display: flex;\n    border-radius: 10px;\n    z-index: 2;\n    \n    /* align-items: center; */\n    /* justify-content: space-between; */\n    /* font-size: 100%; */\n    /* flex: 1.75; */\n    transition: all .5s ease;\n}\n\n.list-input-container {\n    flex: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item-text {\n    margin: 0;\n    padding: 0;\n    color: black;\n    letter-spacing: 1.5px;\n    flex: 1.75;\n    height: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n\n#item-checkbox {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: var(--dark-grey);\n    -webkit-appearance: none;\n\tborder: none;\n\tbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);\n\tpadding: 7px;\n\tborder-radius: 5px;\n    /* width: 10px;\n    height: 10px; */\n}\n\n#item-checkbox:checked {\n    /* background-color: #e9ecee;\n\tborder: 1px solid #adb8c0; */\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);\n\tcolor: var(--redOrange);\n    \n}\n\n#item-checkbox:checked::after {\n    color: var(--redOrange);\n    content: '\\2714';\n\tfont-size: 14px;\n    \n\t/* position: absolute; */\n\t/* top: 0px;+\n\tleft: 3px; */\n\t/* color: #99a1a7; */\n}\n/* \ninput[type=checkbox] {\n    \n} */\n\ninput[type=text] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    box-sizing: border-box;\n    border: none;\n    background-color: var(--dark-blue);\n    font-size: 1.25rem;\n    z-index: 15;\n    /* font-size: 100%; */\n}\n\n.item-options-container {\n    flex: .25;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    padding: 10px;\n    /* height: 100%; */\n    gap: 10px;\n    background-color: var(--dark-blue);\n    border-radius: 0 10px 10px 0;\n}\n\n.item-delete-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n\n#delete-item {\n    border: none;\n    border-radius: 10px;\n    background-color: var(--dark-blue);\n}\n\n\n.delete-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n    color: white;\n}\n\n.expand-icon-btn {\n    background-color: var(--dark-blue);\n    border: none;\n    flex: 1;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.expand-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n}\n\n\n\n\n.item-details-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n#item-details {\n    border: none;\n    border-radius: 10px;\n}\n\n.item-date-created {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n\n.expand-container {\n    margin: 0;\n    padding: 0 8px 0 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--closetowhite);\n    height: 150px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    border-radius: 5px;\n    font-size: 85%;\n}\n\n.details-container {\n    flex: .5;\n    /* border: 1px solid var(--closetowhite); */\n    display: flex;\n    justify-content: center;\n    background-color: var(--dark-blue);\n    /* align-items: center; */\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.details-title {\n    color: var(--closetowhite);\n    font-size: 100%;\n}\n\n\n/* ******************** general ********************** */\n\n.display {\n    display: none;\n    animation: ease-in 1s;\n}\n\n.btn {\n    background-color: rgb(55, 66, 73);\n    background-color: black;\n    border: none;\n    border-radius: 10px;\n    color: var(--closetowhite);\n    padding: 10px;\n    width: 100px;\n    height: 50px;\n    font-size: 1rem;\n    letter-spacing: 1.5px;\n    font-weight: var(--font-weight);\n}\n\n.create-new-btn {\n    background-color: black;\n    color: var(--closetowhite);\n}\n\n.item-btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 5px;\n    /* width: 50px; */\n    width: 65%;\n    height: 65%;\n    font-size: 75%;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --black-color: black;\n    --font-weight: 300;\n    --border-test: 2px solid yellow;\n    --dark-blue: #476a7a;\n    --dark-grey: #202a2c86;\n    --light-blue: #2C5364;\n    --closetowhite: #6d9eb3;\n    --redOrange: rgb(255, 68, 11);\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing: border-box;\n    font-weight: var(--font-weight);\n}\n\nhtml {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: black;\n}\n\n.text {\n    color: var(--closetowhite);\n    /* color: whitesmoke; */\n    /* text-align: center; */\n}\n\n.main-content {\n    min-height: 100%;\n    margin: 0;\n    padding: 15px;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 15px;\n}\n\n/* main sidebar */\n.main-sidebar {\n    /* flex: .1; */\n    min-height: 300px;\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    padding: 15px;\n    /* background-color: rgb(55, 66, 73); */\n    background-color: var(--dark-grey);\n    border-radius: 10px;\n}\n\n\n.sidebar-title  {\n    margin: 0;\n    padding: 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    /* align-items: space-between; */\n    justify-content: space-between;\n    /* align-items: center; */\n    /* background-color: var(--dark-grey); */\n    border-radius: 5px;\n    /* transition: all 1s ease; */\n}\n\n/* .material-icons {\n    text-align: left;\n    font-size: 40px;\n    color: var(--closetowhite);\n    flex: .15;\n} */\n\n#sidebar-title-text {\n    /* flex: .85; */\n    text-align: center;\n    color: black;\n    /* font-size: 28px; */\n    font-weight: var(--font-weight);\n    letter-spacing: 1.5px;\n}\n\n.sidebar-project-list {\n    flex: 1;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    /* border-radius: 5px; */\n    /* background-color: blue; */\n}\n\n.sidebar-main-list {\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    /* color: rgb(55, 66, 73); */\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    gap: 10px;\n    height: 100%;\n    \n}\n\n.sidebar-list-item {\n    margin: 0;\n    padding: 0;\n    /* padding: 8px; */\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    /* background-color: var(--dark-grey); */\n    color: #a3a3a3;\n    font-size: 18px;\n    font-size: 1.25rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n/* ul.sidebar-list-item {\n    \n} */\n\nul.sidebar-list-item > li {\n    text-indent: -5px;\n}\n\nul.sidebar-list-item > li::before {\n    content: \"- \";\n    color: black;\n    text-indent: -5px;\n}\n\n#current-p {\n    /* background-color: var(--dark-grey); */\n    /* gap: 10px; */\n    color: white;\n    font-size: 1.5rem;\n}\n\n.projectName {\n    margin: 0 0 0 10px;\n    color: black;\n    font-size: 1rem;\n    text-align: center;\n    letter-spacing: 1.5px;\n    padding: 10px;\n    border-radius: 10px;\n    height: 100%;\n}\n\n.sidebar-create-new-btn {\n    flex: .25;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    /* background-color: violet; */\n}\n\n/* .create-new-btn {\n    \n    \n} */\n\n/* ************************* main body ************************** */\n.main-body {\n    margin: 0;\n    padding: 0;\n    height: 1000px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.main-header {\n    margin: 0;\n    padding: 0 15px 0 15px;\n    flex: .30;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--dark-grey);\n    \n    border-radius: 10px;\n}\n\n/* .menu-icon{\n    width: 30px;\n    height: 30px;\n}\n#menu-icon {\n    background-image: url('./img/menu.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100%;\n} */\n\n#projectNameHeader {\n    color: var(--closetowhite);\n    /* color: black; */\n    letter-spacing: 1.5px;\n    font-size: 1.75rem;\n}\n\n#header-text {\n    color: white;\n    letter-spacing: 1px;\n    font-size: 1.25rem;\n}\n\n\n\n\n/* main list content */\n.main-list-content {\n    flex: 2.70;\n    /* height: 85%; */\n    display: flex;\n    flex-direction: column;\n    /* border: 10px solid var(--black-color); */\n    /* margin: 10px; */\n    background-color: var(--dark-grey);\n    margin: 0;\n    padding: 0;\n    border-radius: 10px;\n    gap: 10px;\n}\n\n.list-container {\n    flex: 2.25;\n    margin: 0;\n    padding: 25px 15px 15px 15px;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    /* background-color: var(--dark-grey); */\n    border-radius: 5px;\n    gap: 50px;\n}\n\n.ordered-item-list {\n    flex: 2;\n    /* height: 100%;\n    width: 100%; */\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 15px;\n}\n\n\n\n\n\n\n\n/* *************************** FORM SUBMISSION FOR LIST ITEMS ************************* */\n.list-item-options {\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    margin: 0;\n    padding: 0;\n    /* border: 1px solid violet; */\n}\n\n.form-main {\n    /* justify-content: space-between; */\n    gap: 10px;\n    width: 75%;\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    /* border: 1px solid violet; */\n    /* align-items: center; */\n}\n\n#create-new-item-btn {\n    /* width: 50px; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.25rem;\n}\n\n.label-new-item {\n    text-align: center;\n    flex: .1;\n}\n\n#input-new-item {\n    margin: 0;\n    /* padding: 0; */\n    border-radius: 5px;\n    border: none;\n    flex: 1.9;\n    background-color: whitesmoke;\n    opacity: .8;\n}\n\n#input-new-item:checked {\n    border: none;\n}\n\n#submit-btn {\n    flex: .5;\n}\n\n#clear-all-items-btn {\n    background-color: var(--redOrange);\n    color: black;\n}\n\n\n/* ***************************** EACH ITEM ******************************** */\n.list-item {\n    margin: 0;\n    padding: 0 0 0 10px;\n    /* list-style-type: none;\n    text-decoration: none;\n    list-style: none; */\n    /* background-color: var(--closetowhite); */\n    background-color: var(--dark-blue);\n    height: 50px;\n    color: var(--black-color);\n    letter-spacing: 1px;\n    display: flex;\n    border-radius: 10px;\n    z-index: 2;\n    \n    /* align-items: center; */\n    /* justify-content: space-between; */\n    /* font-size: 100%; */\n    /* flex: 1.75; */\n    transition: all .5s ease;\n}\n\n.list-input-container {\n    flex: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item-text {\n    margin: 0;\n    padding: 0;\n    color: black;\n    letter-spacing: 1.5px;\n    flex: 1.75;\n    height: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n\n#item-checkbox {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: var(--dark-grey);\n    -webkit-appearance: none;\n\tborder: none;\n\tbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);\n\tpadding: 7px;\n\tborder-radius: 5px;\n    /* width: 10px;\n    height: 10px; */\n}\n\n#item-checkbox:checked {\n    /* background-color: #e9ecee;\n\tborder: 1px solid #adb8c0; */\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);\n\tcolor: var(--redOrange);\n    \n}\n\n#item-checkbox:checked::after {\n    color: var(--redOrange);\n    content: '\\2714';\n\tfont-size: 14px;\n    \n\t/* position: absolute; */\n\t/* top: 0px;+\n\tleft: 3px; */\n\t/* color: #99a1a7; */\n}\n/* \ninput[type=checkbox] {\n    \n} */\n\ninput[type=text] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    box-sizing: border-box;\n    border: none;\n    background-color: var(--dark-blue);\n    font-size: 1.25rem;\n    z-index: 15;\n    /* font-size: 100%; */\n}\n\n.item-options-container {\n    flex: .25;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    padding: 10px;\n    /* height: 100%; */\n    gap: 10px;\n    background-color: var(--dark-blue);\n    border-radius: 0 10px 10px 0;\n}\n\n.item-delete-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n\n#delete-item {\n    border: none;\n    border-radius: 10px;\n    background-color: var(--dark-blue);\n}\n\n\n.delete-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url('./img/delete.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n    color: white;\n}\n\n.expand-icon-btn {\n    background-color: var(--dark-blue);\n    border: none;\n    flex: 1;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.expand-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url('./img/chevron-down\\ \\(1\\).png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n}\n\n\n\n\n.item-details-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n#item-details {\n    border: none;\n    border-radius: 10px;\n}\n\n.item-date-created {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n\n.expand-container {\n    margin: 0;\n    padding: 0 8px 0 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--closetowhite);\n    height: 150px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    border-radius: 5px;\n    font-size: 85%;\n}\n\n.details-container {\n    flex: .5;\n    /* border: 1px solid var(--closetowhite); */\n    display: flex;\n    justify-content: center;\n    background-color: var(--dark-blue);\n    /* align-items: center; */\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.details-title {\n    color: var(--closetowhite);\n    font-size: 100%;\n}\n\n\n/* ******************** general ********************** */\n\n.display {\n    display: none;\n    animation: ease-in 1s;\n}\n\n.btn {\n    background-color: rgb(55, 66, 73);\n    background-color: black;\n    border: none;\n    border-radius: 10px;\n    color: var(--closetowhite);\n    padding: 10px;\n    width: 100px;\n    height: 50px;\n    font-size: 1rem;\n    letter-spacing: 1.5px;\n    font-weight: var(--font-weight);\n}\n\n.create-new-btn {\n    background-color: black;\n    color: var(--closetowhite);\n}\n\n.item-btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 5px;\n    /* width: 50px; */\n    width: 65%;\n    height: 65%;\n    font-size: 75%;\n}\n\n\n\n"],"sourceRoot":""}]);
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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");




//create btns for submit and cancel when editing item
const createSubmitCancelBtns = () => {
    const inputText = document.querySelector('.item-text');


    const submitTextChange = document.createElement('button');
    const cancelTextChange = document.createElement('button');
}



//create item in HTML, add to DOM
const createItemHTML = (n, dc, projectName) => {
    const orderedItemList = document.querySelector('.ordered-item-list');
    //create item options container
    const createNewItemOptionsContainer = document.createElement('div');
    createNewItemOptionsContainer.classList.add('item-options-container');

    const listInputContainer = document.createElement('div');
    listInputContainer.classList.add('list-input-container');


    //add DELETE Btn/Icon to item
    const createItemDeleteBtn = document.createElement('div');
    createItemDeleteBtn.classList.add('item-delete-btn');
    const deleteBtn = document.createElement('button');
    deleteBtn.id = 'delete-item';
    const deleteIcon = document.createElement('div');
    deleteIcon.classList.add('delete-icon');
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
    checkboxLabel.htmlFor = 'item-checkbox';
    // checkboxLabel.for = 'item-checkbox';
    checkboxLabel.id = 'item-checkbox-label';
    const createCheckbox = document.createElement('input');
    createCheckbox.id = 'item-checkbox';
    createCheckbox.type = 'checkbox';
    createCheckbox.name = 'item-checkbox';
    //add important Icon

    //append icon, delete btn to list item
    createNewItemOptionsContainer.appendChild(createItemDeleteBtn);
    createNewItemOptionsContainer.appendChild(createExpandIconBtn);


    //new list item 
    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item');


    const inputText = document.createElement('input');
    inputText.classList.add('item-text');
    inputText.disabled = 'disabled';
    inputText.type = 'text';
    inputText.classList.add('text');
    inputText.value = n;
    
    //add item options container
    newListItem.appendChild(listInputContainer);
    listInputContainer.appendChild(checkboxLabel);
    listInputContainer.appendChild(createCheckbox);
    listInputContainer.appendChild(inputText);
    newListItem.appendChild(createNewItemOptionsContainer);
    //add new list item to ordered list
    orderedItemList.appendChild(newListItem);


    //return delete btn, expand btn listener once item is created 
    if (document.querySelector('#projectNameHeader').textContent === 'myProject') {
        return;
    } else {
            const a = (0,___WEBPACK_IMPORTED_MODULE_0__.deleteBtnListener)(projectName);
            const b = (0,___WEBPACK_IMPORTED_MODULE_0__.expandBtnListener)();
            const c = (0,___WEBPACK_IMPORTED_MODULE_0__.itemEditable)();
            const d = (0,___WEBPACK_IMPORTED_MODULE_0__.ifChecked)();
            // return a && b;
            return a && b && c && d;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createItemHTML);

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
        this.checked = false;
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

/***/ "./src/btnListeners.js":
/*!*****************************!*\
  !*** ./src/btnListeners.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteBtnListener": () => (/* binding */ deleteBtnListener),
/* harmony export */   "expandBtnListener": () => (/* binding */ expandBtnListener),
/* harmony export */   "clearAllBtnListener": () => (/* binding */ clearAllBtnListener),
/* harmony export */   "ifChecked": () => (/* binding */ ifChecked)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");



//event listener to delete item (called after item is created)
const deleteBtnListener = (projectName = 'myProject') => {
    console.log(projectName);
    const orderedList = document.querySelector('.ordered-item-list');
    const listItemDeleteBtns = document.querySelectorAll('#delete-item');
    

    // for (let i = 0; i < listItemDeleteBtns.length; i++) {
    //     // console.log(i);
    //     const btnIndex = i;
    // }

    // for(let j = 0; j < itemListArr.length; j++) {
    //     // console.log(j);
    //     const listItemIndex = j; 
    // }

    orderedList.addEventListener('click', (e) => {
        // console.log(e.target);
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
        console.log(e.target);
        const parent = e.target.parentNode;
        if (e.target.classList.contains('delete-icon')) {
            console.log('delete icon');
            const answer = confirm('are you sure you want to delete this item?');
            if (answer) {
                console.log(e.target);
            }
        } else {
            return;
        }
        
    }, false);

    // listItemDeleteBtns.forEach(btn => {
    //     btn.addEventListener('click', e => {
    //         const listItem = e.target.parentNode.parentNode.parentNode.parentNode;
    //         const confirmAnswer = confirm('are you sure you want to delete this item?');
    //         if (confirmAnswer) {
    //             listItem.remove();
    //         } 
    //     })
    // })
};

const clearAllBtnListener = (() => {
    //once cleared, start new project?
    //or just a n
    const clearAllBtn = document.getElementById('clear-all-items-btn');
    clearAllBtn.addEventListener('click', () => {
        //get current project (Whatever is clicked on sidebar)
        const getCurrentProjectName = window.localStorage.key(0);
        console.log('delete btn clicked');
        const ol = document.querySelector('.ordered-item-list');
        const confirmDeleteAll = confirm('Would you like to clear all items?');
        if (confirmDeleteAll) {
            (0,___WEBPACK_IMPORTED_MODULE_0__.clearAllItemsDOM)(ol);
            //remove from arr/local storage
            // console.log(projectName);
            LOCAL.removeItem(getCurrentProjectName);
        } else {
            return;
        }
        //would you like to clear all items and start over or delete project
        //delete all children under ordered item list 
        
    })
})();



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

const deleteAllProjects = () => {
    //going to delete from local storage
}



const ifChecked = (e) => {
    const dateCheckedOff = new Date().toLocaleDateString();
    const checkBoxIsChecked = document.querySelector('#item-checkbox');
    checkBoxIsChecked.addEventListener('change', e => {
        //this input should be attached to the list item somehow
        //could make the list item the same input
        if (e.target.checked) {
            console.log('is checked');
            //add datecheckedoff to listItem object
        }
    })
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
    return defaultArrayList;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDefaultArrayList);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteBtnListener": () => (/* reexport safe */ _btnListeners__WEBPACK_IMPORTED_MODULE_7__.deleteBtnListener),
/* harmony export */   "expandBtnListener": () => (/* reexport safe */ _btnListeners__WEBPACK_IMPORTED_MODULE_7__.expandBtnListener),
/* harmony export */   "itemEditable": () => (/* binding */ itemEditable),
/* harmony export */   "ifChecked": () => (/* reexport safe */ _btnListeners__WEBPACK_IMPORTED_MODULE_7__.ifChecked),
/* harmony export */   "checkLocalStorage": () => (/* binding */ checkLocalStorage),
/* harmony export */   "clearAllItemsDOM": () => (/* binding */ clearAllItemsDOM)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadPage */ "./src/loadPage.js");
/* harmony import */ var _img_menu_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/menu.png */ "./src/img/menu.png");
/* harmony import */ var _img_noun_expand_1181747_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/noun-expand-1181747.png */ "./src/img/noun-expand-1181747.png");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _defaultProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defaultProject */ "./src/defaultProject.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _btnListeners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./btnListeners */ "./src/btnListeners.js");










const LOCAL = window.localStorage;
const SESSION = window.sessionStorage;

const clearStorage = () => {
    return () => {
        window.localStorage.clear();
        window.sessionStorage.clear();
    }
    
}
const clearAllStorage = clearStorage();
// clearAllStorage();


const displayHandler = () => {
    const inputNewItem = document.querySelector('#input-new-item');
    const submitBtn = document.querySelector('#submit-btn');
    const labelNewItem = document.querySelector('.label-new-item');
//remove display (none) from element 
    const removeDisplayNone = (d) => {
        return d.classList.remove('display');
    }

//add display (none) to element 
    const addDisplayNone = (d) => {
        return d.classList.add('display');
    }
//add back display NONE    
    const dontShowForm = () => {
        addDisplayNone(inputNewItem);
        addDisplayNone(submitBtn);
        addDisplayNone(labelNewItem);
        return;
    }
//remove display NONE
    const showForm = () => {
        removeDisplayNone(inputNewItem);
        removeDisplayNone(submitBtn);
        removeDisplayNone(labelNewItem);
    }

    return {
        removeDisplayNone,
        addDisplayNone,
        dontShowForm,
        showForm
    }
}



//remove display (none) from element 
const removeDisplayNone = (d) => {
    return d.classList.remove('display');
}

//add display (none) to element 
const addDisplayNone = (d) => {
    return d.classList.add('display');
}

//clear all list items from the DOM
const clearAllItemsDOM = (ol) => {
    while (ol.firstChild) {
        ol.removeChild(ol.firstChild);
    }
    return;
}

//make item editable - 
//need submit and cancel btn once dbl clicked
//if submitted, save new text as value of input 
const itemEditable = () => {
    let itemDblClicked = false;
    const item = document.querySelector('.item-text');
    
    item.addEventListener('click', e => {
        e.preventDefault();
    })

    item.addEventListener('dblclick', () => {
        itemDblClicked = true;
        // const disabledItem = item.getAttribute('disabled');
        item.removeAttribute('disabled');
        if (itemDblClicked) {
            console.log('item being edited');

        }
    })
}

//get name and date from items and call createItemHTML()
const getNameAndDate = (arr, projectName) => {
    arr.forEach(obj => {
        const n = obj.name;
        const dc = obj.dateCreated;
        // const createItem = createItemHTML(n, dc, projectName);
        // return createItem();
        (0,_DOM__WEBPACK_IMPORTED_MODULE_6__["default"])(n, dc, projectName);
    })
    return;
}

const createItemFromLocalStorage = (item, projectName) => {
    // const d = createDefaultArrayList();
    const d = item;
        const n = d.name;
        const dc = d.dateCreated;
        //last item?
        return (0,_DOM__WEBPACK_IMPORTED_MODULE_6__["default"])(n, dc, projectName);
}

//check local storage to see if project already exists
const checkLocalStorage = (clickCount, projectName, item) => {
    const projectExists = LOCAL.length > 0;
    return projectExists ? true : false;
}


// const deleteChildElements = (parentEl) => {
//     return () => {
//         if (true) {
//             while (parentEl.firstChild) {
//                 parentEl.removeChild(parentEl.firstChild);
//             }   
//             //remove from arr/local storage
//         }
//     }
// }





const firstLetterCaps = () => {

}










//listen for form submission to add each item 




//form subbmission event listener (called after new item or project btn is clicked)
const formSubmission = (clickCount, projectName)=> {
    const form = document.querySelector('.form-main');

    const d = displayHandler();
    console.log(d);

    form.addEventListener('submit', (e)=> {
        const inputValue = document.querySelector('#input-new-item').value;
        // let firstLetter = inputValue.splice(0, 1);
        // console.log(firstLetter);
        // inputValue.
        //remove form display
        e.preventDefault();
        //remove display (add back display: none)
        d.dontShowForm(); 
        //clear input field on form Submit
        form.reset();
        //create new list item
        const item = new _app_js__WEBPACK_IMPORTED_MODULE_4__.ListItem(`${inputValue}`, (0,_app_js__WEBPACK_IMPORTED_MODULE_4__.getDate)());
        //check if LOCAL STORAGE is empty or not 
        if(projectName == 'myProject') {
            return getNameAndDate(item, projectName);
        }
        return projectLocalStorage(clickCount, projectName, item);
    })
};















//function for IIFE event listeners, new item, clear all, and new project
const mainEventListeners = (() => {
    let clickCount = 0;
    let projectName;

    const d = displayHandler();
    console.log(d);
    
    const newItemBtn = document.querySelector('#create-new-item-btn');
    const inputNewItem = document.querySelector('#input-new-item');
    const labelNewItem = document.querySelector('.label-new-item');
    const submitBtn = document.querySelector('#submit-btn');
    const createNewBtn = document.querySelector('.create-new-btn');
    const ol = document.querySelector('.ordered-item-list');

    //get return boolean on if project exists in local storage
    const projectExists = checkLocalStorage();
   

    //create new project Btn listener
    createNewBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('test new project btn');

        if (projectExists === true) {
            //CLEAR ITEMS AND NAME
            clearAllItemsDOM(ol);
            //create new project (obj) inside local storage
            //current proj will always be window.localstorage.key(0)
        } else {
            clickCount++;
            console.log(clickCount);
            //ask user to name new project
            //wipe default list
            //start new project with name given (key name in local storage obj)
            projectName = prompt('Please enter the name of your project', 'myProject');

            if (projectName === null) {
                return;
            } else {
                //clear default project from DOM 
                clearAllItemsDOM(ol);
                //add new project name to top of page
                document.querySelector('#projectNameHeader').textContent = projectName;
                //create new folder in current project list
                createProjectFolder(projectName);
                //add click count to session storage
                addClickCount(clickCount, projectName);
                //show the form input buttons
                d.showForm();
                //return form submission listener
                return formSubmission(clickCount, projectName);
            }
        }
    })

    //create new Item Btn Listener
    newItemBtn.addEventListener('click', (e) => {
        e.preventDefault();
        //remove display none from input form items
        console.log('test new item');

        if (document.querySelector('#projectNameHeader').textContent === 'myProject') {
            d.showForm();
            return formSubmission(0, 'myProject');
        }

        if (projectExists === true) {
            //this needs to be fixed
            const currentProject = SESSION.key(0);
            let getClickCount = SESSION.getItem('hello');
            getClickCount++;
            console.log(getClickCount);
            d.showForm();
            return formSubmission(clickCount, projectName);   
        }
    })

})();






// const navClosed = () => {
//     const mainSidebar = document.getElementById('main-sidebar');
//     const mainBody = document.querySelector('.main-body');
//     mainBody.style.opacity = '1';
//     mainSidebar.style.zIndex = "0";
//     mainSidebar.style.width = "0";
// }
// const navOpen = () => {
//     const mainSidebar = document.getElementById('main-sidebar');
//     const mainBody = document.querySelector('.main-body');
//     mainSidebar.style.zIndex = "1";
//     mainSidebar.style.width = "250px";
//     mainBody.style.opacity = '.5';
// }

//event listener to open up side menu bar
// const menuEventListener = (() => {
//     const menuLogo = document.querySelector('.menu-icon');
//     const mainSidebar = document.querySelector('.main-sidebar');
//     menuLogo.addEventListener('click', (e) => {
//         e.preventDefault();
//         console.log('test');
//         navOpen();
//     })
// })();

// const menuCloseBtnListener = (() => {
//     const menuCloseBtn = document.querySelector('.close-sidebar-icon');
//     const mainSidebar = document.querySelector('.main-sidebar');
//     menuCloseBtn.addEventListener('click', () => {
//         // addDisplayNone(mainSidebar);
//         navClosed();
//     })
// })();

//new list item btn listener 
// const newItemBtnListener = (() => {
//     let clickCount = 0;
//     const newItemBtn = document.querySelector('#create-new-item-btn');
//     const inputNewItem = document.querySelector('#input-new-item');
//     const labelNewItem = document.querySelector('.label-new-item');
//     const submitBtn = document.querySelector('#submit-btn');

    

    
// })();

//delete all child elements function












//the value of the key value pair is the object array that is created for each project (list of items)
const projectLocalStorage = (clickCount, projectName, item) => {
    const getCurrentProjectName = document.querySelector('#projectNameHeader').textContent;
    console.log(getCurrentProjectName);
    const localStorageItemList = [];
    //FIND PROJECT NAME AND PUSH LAST ITEM INTO IT 

    const projectExists = checkLocalStorage();

    
    
    if (projectExists) {
        let proj = JSON.parse(LOCAL.getItem(getCurrentProjectName));
        // JSON.parse(proj);
        console.log(proj);
        proj.push(item);
        console.log(item, getCurrentProjectName);
        // LOCAL.setItem(`${projectName}`, JSON.stringify(proj));
        LOCAL.setItem(getCurrentProjectName, JSON.stringify(proj));
        // createItemFromLocalStorage(item, projectName);
        createItemFromLocalStorage(item, getCurrentProjectName);
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
    console.log(projectName);
    const toDoListHeader = document.querySelector('.header-text');
    //create folder in sidebar on page load
    //will need to show all projects in sidebar
    addDisplayNone(toDoListHeader);
    createProjectFolder(projectName);

    let i = LOCAL.getItem(`${projectName}`);
    i = JSON.parse(i);
    return getNameAndDate(i, projectName);
}

//create project folder in sidebar when new project is created
const createProjectFolder = (projectName) => {
    const root = document.querySelector(':root');
    const currentP = document.querySelector('#current-p');
    const sideBarMainList = document.querySelector('.sidebar-main-list');

    const rs = getComputedStyle(root);
    const darkBlue = rs.getPropertyValue('--dark-blue');

    const newProj = document.createElement('li');
    // newProj.classList.add('text');
    newProj.classList.add('projectName');
    newProj.textContent = projectName;
    newProj.style.backgroundColor = darkBlue;
    currentP.appendChild(newProj);
}

//add click count to session storage to track
const addClickCount = (clickCount, projectName) => {
    let data = SESSION.getItem(projectName);
    if (data) {
        console.log(SESSION.getItem(projectName));
    }
    // console.log(SESSION);
    return window.sessionStorage.setItem(`${projectName}`, clickCount);
}

// load in default page (using defaultarraylist)
const loadDefaultPage = () => {
    const d = (0,_defaultProject__WEBPACK_IMPORTED_MODULE_5__["default"])();
    const defaultProjectName = 'myProject';
    // LOCAL.setItem('myProject', `${JSON.stringify(d)}`);
    return getNameAndDate(d, defaultProjectName);
}

//LOAD PAGE
const loadPage = (()  => (0,_loadPage__WEBPACK_IMPORTED_MODULE_1__["default"])(loadDefaultPage, loadSessionStoragePage))();



/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DOMLoaded = (a, c) => {
    window.addEventListener('DOMContentLoaded', (e) => {
        

        //get currentl, latest project from local storage and pass in projectname to loadsession
        let projName = window.localStorage.key(0);

        //check for projectName from sidetab (whatever project is highlighted)
        window.localStorage.length === 0 ? a() : c(projName);
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMLoaded);

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxTQUFTLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsVUFBVSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sT0FBTyxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksS0FBSyxNQUFNLE9BQU8sS0FBSyxLQUFLLE9BQU8sYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFh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O1VDWnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztVRXJCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL3NyYy9idG5MaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL3NyYy9kZWZhdWx0UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9zcmMvbG9hZFBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2RlbGV0ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9jaGV2cm9uLWRvd24gKDEpLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYmxhY2stY29sb3I6IGJsYWNrO1xcbiAgICAtLWZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIC0tYm9yZGVyLXRlc3Q6IDJweCBzb2xpZCB5ZWxsb3c7XFxuICAgIC0tZGFyay1ibHVlOiAjNDc2YTdhO1xcbiAgICAtLWRhcmstZ3JleTogIzIwMmEyYzg2O1xcbiAgICAtLWxpZ2h0LWJsdWU6ICMyQzUzNjQ7XFxuICAgIC0tY2xvc2V0b3doaXRlOiAjNmQ5ZWIzO1xcbiAgICAtLXJlZE9yYW5nZTogcmdiKDI1NSwgNjgsIDExKTtcXG59XFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQpO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICAvKiBjb2xvcjogd2hpdGVzbW9rZTsgKi9cXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLyogbWFpbiBzaWRlYmFyICovXFxuLm1haW4tc2lkZWJhciB7XFxuICAgIC8qIGZsZXg6IC4xOyAqL1xcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCA2NiwgNzMpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5cXG4uc2lkZWJhci10aXRsZSAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLyogdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7ICovXFxufVxcblxcbi8qIC5tYXRlcmlhbC1pY29ucyB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIGZsZXg6IC4xNTtcXG59ICovXFxuXFxuI3NpZGViYXItdGl0bGUtdGV4dCB7XFxuICAgIC8qIGZsZXg6IC44NTsgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIC8qIGZvbnQtc2l6ZTogMjhweDsgKi9cXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0KTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0LWxpc3Qge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDVweDsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cXG59XFxuXFxuLnNpZGViYXItbWFpbi1saXN0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIC8qIGNvbG9yOiByZ2IoNTUsIDY2LCA3Myk7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIFxcbn1cXG5cXG4uc2lkZWJhci1saXN0LWl0ZW0ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIHBhZGRpbmc6IDhweDsgKi9cXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7ICovXFxuICAgIGNvbG9yOiAjYTNhM2EzO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4vKiB1bC5zaWRlYmFyLWxpc3QtaXRlbSB7XFxuICAgIFxcbn0gKi9cXG5cXG51bC5zaWRlYmFyLWxpc3QtaXRlbSA+IGxpIHtcXG4gICAgdGV4dC1pbmRlbnQ6IC01cHg7XFxufVxcblxcbnVsLnNpZGViYXItbGlzdC1pdGVtID4gbGk6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCItIFxcXCI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1pbmRlbnQ6IC01cHg7XFxufVxcblxcbiNjdXJyZW50LXAge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpOyAqL1xcbiAgICAvKiBnYXA6IDEwcHg7ICovXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5wcm9qZWN0TmFtZSB7XFxuICAgIG1hcmdpbjogMCAwIDAgMTBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zaWRlYmFyLWNyZWF0ZS1uZXctYnRuIHtcXG4gICAgZmxleDogLjI1O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmlvbGV0OyAqL1xcbn1cXG5cXG4vKiAuY3JlYXRlLW5ldy1idG4ge1xcbiAgICBcXG4gICAgXFxufSAqL1xcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKiogbWFpbiBib2R5ICoqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuLm1haW4tYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5tYWluLWhlYWRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCAxNXB4IDAgMTVweDtcXG4gICAgZmxleDogLjMwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiAubWVudS1pY29ue1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4jbWVudS1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9tZW51LnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG59ICovXFxuXFxuI3Byb2plY3ROYW1lSGVhZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIC8qIGNvbG9yOiBibGFjazsgKi9cXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxufVxcblxcbiNoZWFkZXItdGV4dCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBtYWluIGxpc3QgY29udGVudCAqL1xcbi5tYWluLWxpc3QtY29udGVudCB7XFxuICAgIGZsZXg6IDIuNzA7XFxuICAgIC8qIGhlaWdodDogODUlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBib3JkZXI6IDEwcHggc29saWQgdmFyKC0tYmxhY2stY29sb3IpOyAqL1xcbiAgICAvKiBtYXJnaW46IDEwcHg7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgICBmbGV4OiAyLjI1O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDI1cHggMTVweCAxNXB4IDE1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuLm9yZGVyZWQtaXRlbS1saXN0IHtcXG4gICAgZmxleDogMjtcXG4gICAgLyogaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTsgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKiogRk9STSBTVUJNSVNTSU9OIEZPUiBMSVNUIElURU1TICoqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG4ubGlzdC1pdGVtLW9wdGlvbnMge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZpb2xldDsgKi9cXG59XFxuXFxuLmZvcm0tbWFpbiB7XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2aW9sZXQ7ICovXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxufVxcblxcbiNjcmVhdGUtbmV3LWl0ZW0tYnRuIHtcXG4gICAgLyogd2lkdGg6IDUwcHg7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5sYWJlbC1uZXctaXRlbSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxleDogLjE7XFxufVxcblxcbiNpbnB1dC1uZXctaXRlbSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogcGFkZGluZzogMDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZsZXg6IDEuOTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgb3BhY2l0eTogLjg7XFxufVxcblxcbiNpbnB1dC1uZXctaXRlbTpjaGVja2VkIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jc3VibWl0LWJ0biB7XFxuICAgIGZsZXg6IC41O1xcbn1cXG5cXG4jY2xlYXItYWxsLWl0ZW1zLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZE9yYW5nZSk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogRUFDSCBJVEVNICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuLmxpc3QtaXRlbSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCAwIDAgMTBweDtcXG4gICAgLyogbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7ICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG4gICAgLyogZm9udC1zaXplOiAxMDAlOyAqL1xcbiAgICAvKiBmbGV4OiAxLjc1OyAqL1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XFxufVxcblxcbi5saXN0LWlucHV0LWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaXRlbS10ZXh0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgZmxleDogMS43NTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbiNpdGVtLWNoZWNrYm94IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIGluc2V0IDBweCAtMTVweCAxMHB4IC0xMnB4IHJnYmEoMCwwLDAsMC4wNSk7XFxuXFx0cGFkZGluZzogN3B4O1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLyogd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDsgKi9cXG59XFxuXFxuI2l0ZW0tY2hlY2tib3g6Y2hlY2tlZCB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWU7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2FkYjhjMDsgKi9cXG5cXHRib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjA1KSwgaW5zZXQgMHB4IC0xNXB4IDEwcHggLTEycHggcmdiYSgwLDAsMCwwLjA1KSwgaW5zZXQgMTVweCAxMHB4IC0xMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcXG5cXHRjb2xvcjogdmFyKC0tcmVkT3JhbmdlKTtcXG4gICAgXFxufVxcblxcbiNpdGVtLWNoZWNrYm94OmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgY29sb3I6IHZhcigtLXJlZE9yYW5nZSk7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMjcxNCc7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcbiAgICBcXG5cXHQvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxuXFx0LyogdG9wOiAwcHg7K1xcblxcdGxlZnQ6IDNweDsgKi9cXG5cXHQvKiBjb2xvcjogIzk5YTFhNzsgKi9cXG59XFxuLyogXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICBcXG59ICovXFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIG1hcmdpbjogOHB4IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICB6LWluZGV4OiAxNTtcXG4gICAgLyogZm9udC1zaXplOiAxMDAlOyAqL1xcbn1cXG5cXG4uaXRlbS1vcHRpb25zLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IC4yNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XFxufVxcblxcbi5pdGVtLWRlbGV0ZS1idG4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4jZGVsZXRlLWl0ZW0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcblxcblxcbi5kZWxldGUtaWNvbiB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5leHBhbmQtaWNvbi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZsZXg6IDE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZXhwYW5kLWljb24ge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcXG59XFxuXFxuXFxuXFxuXFxuLml0ZW0tZGV0YWlscy1idG4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jaXRlbS1kZXRhaWxzIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaXRlbS1kYXRlLWNyZWF0ZWQge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZXhwYW5kLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCA4cHggMCA4cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiA4NSU7XFxufVxcblxcbi5kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IC41O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbG9zZXRvd2hpdGUpOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZGV0YWlscy10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqIGdlbmVyYWwgKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi5kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYW5pbWF0aW9uOiBlYXNlLWluIDFzO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCA2NiwgNzMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQpO1xcbn1cXG5cXG4uY3JlYXRlLW5ldy1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxufVxcblxcbi5pdGVtLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgLyogd2lkdGg6IDUwcHg7ICovXFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIGhlaWdodDogNjUlO1xcbiAgICBmb250LXNpemU6IDc1JTtcXG59XFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6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YTtBQUNqQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COzs7QUFHQSx3REFBd0Q7O0FBRXhEO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1ibGFjay1jb2xvcjogYmxhY2s7XFxuICAgIC0tZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgLS1ib3JkZXItdGVzdDogMnB4IHNvbGlkIHllbGxvdztcXG4gICAgLS1kYXJrLWJsdWU6ICM0NzZhN2E7XFxuICAgIC0tZGFyay1ncmV5OiAjMjAyYTJjODY7XFxuICAgIC0tbGlnaHQtYmx1ZTogIzJDNTM2NDtcXG4gICAgLS1jbG9zZXRvd2hpdGU6ICM2ZDllYjM7XFxuICAgIC0tcmVkT3JhbmdlOiByZ2IoMjU1LCA2OCwgMTEpO1xcbn1cXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodCk7XFxufVxcblxcbmh0bWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi50ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIC8qIGNvbG9yOiB3aGl0ZXNtb2tlOyAqL1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4vKiBtYWluIHNpZGViYXIgKi9cXG4ubWFpbi1zaWRlYmFyIHtcXG4gICAgLyogZmxleDogLjE7ICovXFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUsIDY2LCA3Myk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcblxcbi5zaWRlYmFyLXRpdGxlICB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47ICovXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAvKiB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTsgKi9cXG59XFxuXFxuLyogLm1hdGVyaWFsLWljb25zIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgZmxleDogLjE1O1xcbn0gKi9cXG5cXG4jc2lkZWJhci10aXRsZS10ZXh0IHtcXG4gICAgLyogZmxleDogLjg1OyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgLyogZm9udC1zaXplOiAyOHB4OyAqL1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3QtbGlzdCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xcbn1cXG5cXG4uc2lkZWJhci1tYWluLWxpc3Qge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgLyogY29sb3I6IHJnYig1NSwgNjYsIDczKTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgXFxufVxcblxcbi5zaWRlYmFyLWxpc3QtaXRlbSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogcGFkZGluZzogOHB4OyAqL1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTsgKi9cXG4gICAgY29sb3I6ICNhM2EzYTM7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIHVsLnNpZGViYXItbGlzdC1pdGVtIHtcXG4gICAgXFxufSAqL1xcblxcbnVsLnNpZGViYXItbGlzdC1pdGVtID4gbGkge1xcbiAgICB0ZXh0LWluZGVudDogLTVweDtcXG59XFxuXFxudWwuc2lkZWJhci1saXN0LWl0ZW0gPiBsaTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIi0gXFxcIjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWluZGVudDogLTVweDtcXG59XFxuXFxuI2N1cnJlbnQtcCB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7ICovXFxuICAgIC8qIGdhcDogMTBweDsgKi9cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnByb2plY3ROYW1lIHtcXG4gICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNpZGViYXItY3JlYXRlLW5ldy1idG4ge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2aW9sZXQ7ICovXFxufVxcblxcbi8qIC5jcmVhdGUtbmV3LWJ0biB7XFxuICAgIFxcbiAgICBcXG59ICovXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKiBtYWluIGJvZHkgKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG4ubWFpbi1ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDE1cHggMCAxNXB4O1xcbiAgICBmbGV4OiAuMzA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi8qIC5tZW51LWljb257XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcbiNtZW51LWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL21lbnUucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn0gKi9cXG5cXG4jcHJvamVjdE5hbWVIZWFkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgLyogY29sb3I6IGJsYWNrOyAqL1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG59XFxuXFxuI2hlYWRlci10ZXh0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcblxcblxcblxcbi8qIG1haW4gbGlzdCBjb250ZW50ICovXFxuLm1haW4tbGlzdC1jb250ZW50IHtcXG4gICAgZmxleDogMi43MDtcXG4gICAgLyogaGVpZ2h0OiA4NSU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGJvcmRlcjogMTBweCBzb2xpZCB2YXIoLS1ibGFjay1jb2xvcik7ICovXFxuICAgIC8qIG1hcmdpbjogMTBweDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDIuMjU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMjVweCAxNXB4IDE1cHggMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ub3JkZXJlZC1pdGVtLWxpc3Qge1xcbiAgICBmbGV4OiAyO1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlOyAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcblxcblxcblxcblxcblxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKiBGT1JNIFNVQk1JU1NJT04gRk9SIExJU1QgSVRFTVMgKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi5saXN0LWl0ZW0tb3B0aW9ucyB7XFxuICAgIGZsZXg6IC4yNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmlvbGV0OyAqL1xcbn1cXG5cXG4uZm9ybS1tYWluIHtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZpb2xldDsgKi9cXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuI2NyZWF0ZS1uZXctaXRlbS1idG4ge1xcbiAgICAvKiB3aWR0aDogNTBweDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLmxhYmVsLW5ldy1pdGVtIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbGV4OiAuMTtcXG59XFxuXFxuI2lucHV0LW5ldy1pdGVtIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICAvKiBwYWRkaW5nOiAwOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZmxleDogMS45O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBvcGFjaXR5OiAuODtcXG59XFxuXFxuI2lucHV0LW5ldy1pdGVtOmNoZWNrZWQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNzdWJtaXQtYnRuIHtcXG4gICAgZmxleDogLjU7XFxufVxcblxcbiNjbGVhci1hbGwtaXRlbXMtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkT3JhbmdlKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBFQUNIIElURU0gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG4ubGlzdC1pdGVtIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xcbiAgICAvKiBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICAvKiBmb250LXNpemU6IDEwMCU7ICovXFxuICAgIC8qIGZsZXg6IDEuNzU7ICovXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcXG59XFxuXFxuLmxpc3QtaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZmxleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pdGVtLXRleHQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBmbGV4OiAxLjc1O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuI2l0ZW0tY2hlY2tib3gge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMHB4IC0xNXB4IDEwcHggLTEycHggcmdiYSgwLDAsMCwwLjA1KTtcXG5cXHRwYWRkaW5nOiA3cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAvKiB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4OyAqL1xcbn1cXG5cXG4jaXRlbS1jaGVja2JveDpjaGVja2VkIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjYWRiOGMwOyAqL1xcblxcdGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMDUpLCBpbnNldCAwcHggLTE1cHggMTBweCAtMTJweCByZ2JhKDAsMCwwLDAuMDUpLCBpbnNldCAxNXB4IDEwcHggLTEycHggcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xcblxcdGNvbG9yOiB2YXIoLS1yZWRPcmFuZ2UpO1xcbiAgICBcXG59XFxuXFxuI2l0ZW0tY2hlY2tib3g6Y2hlY2tlZDo6YWZ0ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tcmVkT3JhbmdlKTtcXG4gICAgY29udGVudDogJ1xcXFwyNzE0JztcXG5cXHRmb250LXNpemU6IDE0cHg7XFxuICAgIFxcblxcdC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG5cXHQvKiB0b3A6IDBweDsrXFxuXFx0bGVmdDogM3B4OyAqL1xcblxcdC8qIGNvbG9yOiAjOTlhMWE3OyAqL1xcbn1cXG4vKiBcXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgIFxcbn0gKi9cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgbWFyZ2luOiA4cHggMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHotaW5kZXg6IDE1O1xcbiAgICAvKiBmb250LXNpemU6IDEwMCU7ICovXFxufVxcblxcbi5pdGVtLW9wdGlvbnMtY29udGFpbmVyIHtcXG4gICAgZmxleDogLjI1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIGdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcXG59XFxuXFxuLml0ZW0tZGVsZXRlLWJ0biB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbiNkZWxldGUtaXRlbSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG59XFxuXFxuXFxuLmRlbGV0ZS1pY29uIHtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9kZWxldGUucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5leHBhbmQtaWNvbi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZsZXg6IDE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZXhwYW5kLWljb24ge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2NoZXZyb24tZG93blxcXFwgXFxcXCgxXFxcXCkucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4uaXRlbS1kZXRhaWxzLWJ0biB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpOyAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNpdGVtLWRldGFpbHMge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5pdGVtLWRhdGUtY3JlYXRlZCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpOyAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5leHBhbmQtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDhweCAwIDhweDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDg1JTtcXG59XFxuXFxuLmRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgZmxleDogLjU7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsb3NldG93aGl0ZSk7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5kZXRhaWxzLXRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKiogZ2VuZXJhbCAqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLmRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbmltYXRpb246IGVhc2UtaW4gMXM7XFxufVxcblxcbi5idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUsIDY2LCA3Myk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodCk7XFxufVxcblxcbi5jcmVhdGUtbmV3LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG59XFxuXFxuLml0ZW0tYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICAvKiB3aWR0aDogNTBweDsgKi9cXG4gICAgd2lkdGg6IDY1JTtcXG4gICAgaGVpZ2h0OiA2NSU7XFxuICAgIGZvbnQtc2l6ZTogNzUlO1xcbn1cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZGVsZXRlQnRuTGlzdGVuZXIsIGV4cGFuZEJ0bkxpc3RlbmVyLCBpdGVtRWRpdGFibGUsIGlmQ2hlY2tlZCB9IGZyb20gXCIuXCI7XG5cblxuXG4vL2NyZWF0ZSBidG5zIGZvciBzdWJtaXQgYW5kIGNhbmNlbCB3aGVuIGVkaXRpbmcgaXRlbVxuY29uc3QgY3JlYXRlU3VibWl0Q2FuY2VsQnRucyA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS10ZXh0Jyk7XG5cblxuICAgIGNvbnN0IHN1Ym1pdFRleHRDaGFuZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjYW5jZWxUZXh0Q2hhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG59XG5cblxuXG4vL2NyZWF0ZSBpdGVtIGluIEhUTUwsIGFkZCB0byBET01cbmNvbnN0IGNyZWF0ZUl0ZW1IVE1MID0gKG4sIGRjLCBwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IG9yZGVyZWRJdGVtTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcmVkLWl0ZW0tbGlzdCcpO1xuICAgIC8vY3JlYXRlIGl0ZW0gb3B0aW9ucyBjb250YWluZXJcbiAgICBjb25zdCBjcmVhdGVOZXdJdGVtT3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyZWF0ZU5ld0l0ZW1PcHRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tb3B0aW9ucy1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGxpc3RJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0LWlucHV0LWNvbnRhaW5lcicpO1xuXG5cbiAgICAvL2FkZCBERUxFVEUgQnRuL0ljb24gdG8gaXRlbVxuICAgIGNvbnN0IGNyZWF0ZUl0ZW1EZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVhdGVJdGVtRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGVsZXRlLWJ0bicpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ0bi5pZCA9ICdkZWxldGUtaXRlbSc7XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWljb24nKTtcbiAgICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgY3JlYXRlSXRlbURlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG5cbiAgICAvL2FkZCBFWFBBTkQgQnRuL0ljb24gdG8gaXRlbVxuICAgIGNvbnN0IGNyZWF0ZUV4cGFuZEljb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjcmVhdGVFeHBhbmRJY29uQnRuLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1pY29uLWJ0bicpO1xuICAgIGNyZWF0ZUV4cGFuZEljb25CdG4udHlwZSA9ICdidXR0b24nO1xuICAgIGNyZWF0ZUV4cGFuZEljb25CdG4ubmFtZSA9ICdleHBhbmQtaWNvbi1idG4nO1xuICAgIGNvbnN0IGNyZWF0ZUV4cGFuZEljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVhdGVFeHBhbmRJY29uRGl2LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1pY29uJyk7XG4gICAgY3JlYXRlRXhwYW5kSWNvbkJ0bi5hcHBlbmRDaGlsZChjcmVhdGVFeHBhbmRJY29uRGl2KTtcblxuXG4gICAgLy9hZGQgY2hlY2tib3hcbiAgICBjb25zdCBjaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjaGVja2JveExhYmVsLmh0bWxGb3IgPSAnaXRlbS1jaGVja2JveCc7XG4gICAgLy8gY2hlY2tib3hMYWJlbC5mb3IgPSAnaXRlbS1jaGVja2JveCc7XG4gICAgY2hlY2tib3hMYWJlbC5pZCA9ICdpdGVtLWNoZWNrYm94LWxhYmVsJztcbiAgICBjb25zdCBjcmVhdGVDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY3JlYXRlQ2hlY2tib3guaWQgPSAnaXRlbS1jaGVja2JveCc7XG4gICAgY3JlYXRlQ2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY3JlYXRlQ2hlY2tib3gubmFtZSA9ICdpdGVtLWNoZWNrYm94JztcbiAgICAvL2FkZCBpbXBvcnRhbnQgSWNvblxuXG4gICAgLy9hcHBlbmQgaWNvbiwgZGVsZXRlIGJ0biB0byBsaXN0IGl0ZW1cbiAgICBjcmVhdGVOZXdJdGVtT3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJdGVtRGVsZXRlQnRuKTtcbiAgICBjcmVhdGVOZXdJdGVtT3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFeHBhbmRJY29uQnRuKTtcblxuXG4gICAgLy9uZXcgbGlzdCBpdGVtIFxuICAgIGNvbnN0IG5ld0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBuZXdMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0nKTtcblxuXG4gICAgY29uc3QgaW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dFRleHQuY2xhc3NMaXN0LmFkZCgnaXRlbS10ZXh0Jyk7XG4gICAgaW5wdXRUZXh0LmRpc2FibGVkID0gJ2Rpc2FibGVkJztcbiAgICBpbnB1dFRleHQudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dFRleHQuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICAgIGlucHV0VGV4dC52YWx1ZSA9IG47XG4gICAgXG4gICAgLy9hZGQgaXRlbSBvcHRpb25zIGNvbnRhaW5lclxuICAgIG5ld0xpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RJbnB1dENvbnRhaW5lcik7XG4gICAgbGlzdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94TGFiZWwpO1xuICAgIGxpc3RJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDaGVja2JveCk7XG4gICAgbGlzdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0VGV4dCk7XG4gICAgbmV3TGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlTmV3SXRlbU9wdGlvbnNDb250YWluZXIpO1xuICAgIC8vYWRkIG5ldyBsaXN0IGl0ZW0gdG8gb3JkZXJlZCBsaXN0XG4gICAgb3JkZXJlZEl0ZW1MaXN0LmFwcGVuZENoaWxkKG5ld0xpc3RJdGVtKTtcblxuXG4gICAgLy9yZXR1cm4gZGVsZXRlIGJ0biwgZXhwYW5kIGJ0biBsaXN0ZW5lciBvbmNlIGl0ZW0gaXMgY3JlYXRlZCBcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lSGVhZGVyJykudGV4dENvbnRlbnQgPT09ICdteVByb2plY3QnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYSA9IGRlbGV0ZUJ0bkxpc3RlbmVyKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBleHBhbmRCdG5MaXN0ZW5lcigpO1xuICAgICAgICAgICAgY29uc3QgYyA9IGl0ZW1FZGl0YWJsZSgpO1xuICAgICAgICAgICAgY29uc3QgZCA9IGlmQ2hlY2tlZCgpO1xuICAgICAgICAgICAgLy8gcmV0dXJuIGEgJiYgYjtcbiAgICAgICAgICAgIHJldHVybiBhICYmIGIgJiYgYyAmJiBkO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSXRlbUhUTUw7IiwiY29uc3QgaXRlbUxpc3RBcnIgPSBbXTtcblxuY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBteURhdGUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgIHJldHVybiBteURhdGU7XG59XG5cbmNsYXNzIExpc3RJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlQ3JlYXRlZCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm5vdGVzID0gJ3Rlc3QnO1xuICAgICAgICB0aGlzLmRhdGVDcmVhdGVkID0gZGF0ZUNyZWF0ZWRcbiAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIGdldCBkYXRlQ3JlYXRlZCAoKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmRhdGVDcmVhdGVkO1xuICAgIC8vIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbn1cblxuY2xhc3MgRE9NSXRlbSB7XG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBpdGVtTGlzdEFycixcbiAgICBnZXREYXRlLFxuICAgIExpc3RJdGVtXG59IiwiaW1wb3J0IHsgbWRpQ29uc29sZU5ldHdvcmsgfSBmcm9tIFwiQG1kaS9qc1wiO1xuaW1wb3J0IHsgY2hlY2tMb2NhbFN0b3JhZ2UsIGNsZWFyQWxsSXRlbXNET00gfSBmcm9tIFwiLlwiO1xuXG4vL2V2ZW50IGxpc3RlbmVyIHRvIGRlbGV0ZSBpdGVtIChjYWxsZWQgYWZ0ZXIgaXRlbSBpcyBjcmVhdGVkKVxuY29uc3QgZGVsZXRlQnRuTGlzdGVuZXIgPSAocHJvamVjdE5hbWUgPSAnbXlQcm9qZWN0JykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lKTtcbiAgICBjb25zdCBvcmRlcmVkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcmVkLWl0ZW0tbGlzdCcpO1xuICAgIGNvbnN0IGxpc3RJdGVtRGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNkZWxldGUtaXRlbScpO1xuICAgIFxuXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0SXRlbURlbGV0ZUJ0bnMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coaSk7XG4gICAgLy8gICAgIGNvbnN0IGJ0bkluZGV4ID0gaTtcbiAgICAvLyB9XG5cbiAgICAvLyBmb3IobGV0IGogPSAwOyBqIDwgaXRlbUxpc3RBcnIubGVuZ3RoOyBqKyspIHtcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coaik7XG4gICAgLy8gICAgIGNvbnN0IGxpc3RJdGVtSW5kZXggPSBqOyBcbiAgICAvLyB9XG5cbiAgICBvcmRlcmVkTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1pY29uJykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUgaWNvbicpO1xuICAgICAgICAgICAgY29uc3QgYW5zd2VyID0gY29uZmlybSgnYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/Jyk7XG4gICAgICAgICAgICBpZiAoYW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0sIGZhbHNlKTtcblxuICAgIC8vIGxpc3RJdGVtRGVsZXRlQnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgLy8gICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIC8vICAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIC8vICAgICAgICAgY29uc3QgY29uZmlybUFuc3dlciA9IGNvbmZpcm0oJ2FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPycpO1xuICAgIC8vICAgICAgICAgaWYgKGNvbmZpcm1BbnN3ZXIpIHtcbiAgICAvLyAgICAgICAgICAgICBsaXN0SXRlbS5yZW1vdmUoKTtcbiAgICAvLyAgICAgICAgIH0gXG4gICAgLy8gICAgIH0pXG4gICAgLy8gfSlcbn07XG5cbmNvbnN0IGNsZWFyQWxsQnRuTGlzdGVuZXIgPSAoKCkgPT4ge1xuICAgIC8vb25jZSBjbGVhcmVkLCBzdGFydCBuZXcgcHJvamVjdD9cbiAgICAvL29yIGp1c3QgYSBuXG4gICAgY29uc3QgY2xlYXJBbGxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXItYWxsLWl0ZW1zLWJ0bicpO1xuICAgIGNsZWFyQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvL2dldCBjdXJyZW50IHByb2plY3QgKFdoYXRldmVyIGlzIGNsaWNrZWQgb24gc2lkZWJhcilcbiAgICAgICAgY29uc3QgZ2V0Q3VycmVudFByb2plY3ROYW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5rZXkoMCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkZWxldGUgYnRuIGNsaWNrZWQnKTtcbiAgICAgICAgY29uc3Qgb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJlZC1pdGVtLWxpc3QnKTtcbiAgICAgICAgY29uc3QgY29uZmlybURlbGV0ZUFsbCA9IGNvbmZpcm0oJ1dvdWxkIHlvdSBsaWtlIHRvIGNsZWFyIGFsbCBpdGVtcz8nKTtcbiAgICAgICAgaWYgKGNvbmZpcm1EZWxldGVBbGwpIHtcbiAgICAgICAgICAgIGNsZWFyQWxsSXRlbXNET00ob2wpO1xuICAgICAgICAgICAgLy9yZW1vdmUgZnJvbSBhcnIvbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgTE9DQUwucmVtb3ZlSXRlbShnZXRDdXJyZW50UHJvamVjdE5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vd291bGQgeW91IGxpa2UgdG8gY2xlYXIgYWxsIGl0ZW1zIGFuZCBzdGFydCBvdmVyIG9yIGRlbGV0ZSBwcm9qZWN0XG4gICAgICAgIC8vZGVsZXRlIGFsbCBjaGlsZHJlbiB1bmRlciBvcmRlcmVkIGl0ZW0gbGlzdCBcbiAgICAgICAgXG4gICAgfSlcbn0pKCk7XG5cblxuXG4vL2V4cGFuZCBidG4gbGlzdGVuZXIgKGNhbGxlZCBhZnRlciBpdGVtIGlzIGNyZWF0ZWQpXG5jb25zdCBleHBhbmRCdG5MaXN0ZW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBleHBhbmRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4cGFuZC1pY29uJyk7XG4gICAgY29uc3QgZ29TaG9wcGluZ0l0ZW1UZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvLXNob3BwaW5nJyk7XG4gICAgY29uc3QgaXRlbU9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1vcHRpb25zLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGl0ZW1UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tdGV4dCcpO1xuICAgIGV4cGFuZEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLCBlLnRhcmdldCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gZ29TaG9wcGluZ0l0ZW1UZXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3QtaXRlbScpO1xuICAgICAgICBnb1Nob3BwaW5nSXRlbVRlc3QuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kLWNvbnRhaW5lcicpO1xuICAgICAgICAvLyBpdGVtT3B0aW9ucy5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgaXRlbXdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbXdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtJyk7XG4gICAgICAgIGl0ZW13cmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1UZXh0KTtcbiAgICAgICAgaXRlbXdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbU9wdGlvbnMpO1xuXG4gICAgICAgIGdvU2hvcHBpbmdJdGVtVGVzdC5hcHBlbmRDaGlsZChpdGVtd3JhcHBlcik7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWNvbnRhaW5lcicpO1xuICAgICAgICBnb1Nob3BwaW5nSXRlbVRlc3QuYXBwZW5kQ2hpbGQoZGV0YWlscyk7ICBcbiAgICB9KVxufTtcblxuY29uc3QgZGVsZXRlQWxsUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgLy9nb2luZyB0byBkZWxldGUgZnJvbSBsb2NhbCBzdG9yYWdlXG59XG5cblxuXG5jb25zdCBpZkNoZWNrZWQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGRhdGVDaGVja2VkT2ZmID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICBjb25zdCBjaGVja0JveElzQ2hlY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLWNoZWNrYm94Jyk7XG4gICAgY2hlY2tCb3hJc0NoZWNrZWQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIC8vdGhpcyBpbnB1dCBzaG91bGQgYmUgYXR0YWNoZWQgdG8gdGhlIGxpc3QgaXRlbSBzb21laG93XG4gICAgICAgIC8vY291bGQgbWFrZSB0aGUgbGlzdCBpdGVtIHRoZSBzYW1lIGlucHV0XG4gICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXMgY2hlY2tlZCcpO1xuICAgICAgICAgICAgLy9hZGQgZGF0ZWNoZWNrZWRvZmYgdG8gbGlzdEl0ZW0gb2JqZWN0XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQge1xuICAgIGRlbGV0ZUJ0bkxpc3RlbmVyLFxuICAgIGV4cGFuZEJ0bkxpc3RlbmVyLFxuICAgIGNsZWFyQWxsQnRuTGlzdGVuZXIsXG4gICAgaWZDaGVja2VkXG59IiwiaW1wb3J0IHsgTGlzdEl0ZW0sIGdldERhdGUgfSBmcm9tIFwiLi9hcHBcIlxuXG5jb25zdCBjcmVhdGVEZWZhdWx0QXJyYXlMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG9uZSA9IG5ldyBMaXN0SXRlbSgnRG8gdGhlIGRpc2hlcycsICdPbiB0aW1lIScsIGdldERhdGUoKSk7XG4gICAgY29uc3QgdHdvID0gbmV3IExpc3RJdGVtKCdDaGFuZ2UgY2FyXFwncyBvaWwnLCAnT24gdGltZSEnLCBnZXREYXRlKCkpO1xuICAgIGNvbnN0IHRocmVlID0gbmV3IExpc3RJdGVtKCdXYWxrIHRoZSBEb2cnLCAnT24gdGltZSEnLCBnZXREYXRlKCkpO1xuICAgIGNvbnN0IGZvdXIgPSBuZXcgTGlzdEl0ZW0oJ0ZvbGQgdGhlIGxhdW5kcnknLCAnT24gdGltZSEnLCBnZXREYXRlKCkpO1xuICAgIGNvbnN0IGZpdmUgPSBuZXcgTGlzdEl0ZW0oJ0NhbGwgdGhlIGJhbmsnLCAnT24gdGltZSEnLCBnZXREYXRlKCkpO1xuXG4gICAgY29uc3QgZGVmYXVsdEFycmF5TGlzdCA9IFtcbiAgICAgICAgb25lLFxuICAgICAgICB0d28sIFxuICAgICAgICB0aHJlZSwgXG4gICAgICAgIGZvdXIsXG4gICAgICAgIGZpdmVcbiAgICBdXG4gICAgcmV0dXJuIGRlZmF1bHRBcnJheUxpc3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURlZmF1bHRBcnJheUxpc3Q7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgRE9NTG9hZGVkIGZyb20gJy4vbG9hZFBhZ2UnO1xuaW1wb3J0IG1lbnVJY29uIGZyb20gJy4vaW1nL21lbnUucG5nJztcbmltcG9ydCBleHBhbmQgZnJvbSAnLi9pbWcvbm91bi1leHBhbmQtMTE4MTc0Ny5wbmcnO1xuaW1wb3J0IHsgbWRpQ2hldnJvbkRvd24sIG1kaUNvbnNvbGVMaW5lLCBtZGlDb250cm9sbGVyQ2xhc3NpYywgbWRpV2luZG93U2h1dHRlciB9IGZyb20gJ0BtZGkvanMnO1xuaW1wb3J0IHsgZ2V0RGF0ZSwgaXRlbUxpc3RBcnIsIExpc3RJdGVtIH0gZnJvbSAnLi9hcHAuanMnO1xuaW1wb3J0IGNyZWF0ZURlZmF1bHRBcnJheUxpc3QgZnJvbSAnLi9kZWZhdWx0UHJvamVjdCc7XG5pbXBvcnQgY3JlYXRlSXRlbUhUTUwgZnJvbSAnLi9ET00nO1xuaW1wb3J0IHsgZGVsZXRlQnRuTGlzdGVuZXIsIGV4cGFuZEJ0bkxpc3RlbmVyLCBjbGVhckFsbEJ0bkxpc3RlbmVyLCBpZkNoZWNrZWQgfSBmcm9tICcuL2J0bkxpc3RlbmVycyc7XG5cbmNvbnN0IExPQ0FMID0gd2luZG93LmxvY2FsU3RvcmFnZTtcbmNvbnN0IFNFU1NJT04gPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2U7XG5cbmNvbnN0IGNsZWFyU3RvcmFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xuICAgIH1cbiAgICBcbn1cbmNvbnN0IGNsZWFyQWxsU3RvcmFnZSA9IGNsZWFyU3RvcmFnZSgpO1xuLy8gY2xlYXJBbGxTdG9yYWdlKCk7XG5cblxuY29uc3QgZGlzcGxheUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXROZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LW5ldy1pdGVtJyk7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1idG4nKTtcbiAgICBjb25zdCBsYWJlbE5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFiZWwtbmV3LWl0ZW0nKTtcbi8vcmVtb3ZlIGRpc3BsYXkgKG5vbmUpIGZyb20gZWxlbWVudCBcbiAgICBjb25zdCByZW1vdmVEaXNwbGF5Tm9uZSA9IChkKSA9PiB7XG4gICAgICAgIHJldHVybiBkLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXknKTtcbiAgICB9XG5cbi8vYWRkIGRpc3BsYXkgKG5vbmUpIHRvIGVsZW1lbnQgXG4gICAgY29uc3QgYWRkRGlzcGxheU5vbmUgPSAoZCkgPT4ge1xuICAgICAgICByZXR1cm4gZC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XG4gICAgfVxuLy9hZGQgYmFjayBkaXNwbGF5IE5PTkUgICAgXG4gICAgY29uc3QgZG9udFNob3dGb3JtID0gKCkgPT4ge1xuICAgICAgICBhZGREaXNwbGF5Tm9uZShpbnB1dE5ld0l0ZW0pO1xuICAgICAgICBhZGREaXNwbGF5Tm9uZShzdWJtaXRCdG4pO1xuICAgICAgICBhZGREaXNwbGF5Tm9uZShsYWJlbE5ld0l0ZW0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuLy9yZW1vdmUgZGlzcGxheSBOT05FXG4gICAgY29uc3Qgc2hvd0Zvcm0gPSAoKSA9PiB7XG4gICAgICAgIHJlbW92ZURpc3BsYXlOb25lKGlucHV0TmV3SXRlbSk7XG4gICAgICAgIHJlbW92ZURpc3BsYXlOb25lKHN1Ym1pdEJ0bik7XG4gICAgICAgIHJlbW92ZURpc3BsYXlOb25lKGxhYmVsTmV3SXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlRGlzcGxheU5vbmUsXG4gICAgICAgIGFkZERpc3BsYXlOb25lLFxuICAgICAgICBkb250U2hvd0Zvcm0sXG4gICAgICAgIHNob3dGb3JtXG4gICAgfVxufVxuXG5cblxuLy9yZW1vdmUgZGlzcGxheSAobm9uZSkgZnJvbSBlbGVtZW50IFxuY29uc3QgcmVtb3ZlRGlzcGxheU5vbmUgPSAoZCkgPT4ge1xuICAgIHJldHVybiBkLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXknKTtcbn1cblxuLy9hZGQgZGlzcGxheSAobm9uZSkgdG8gZWxlbWVudCBcbmNvbnN0IGFkZERpc3BsYXlOb25lID0gKGQpID0+IHtcbiAgICByZXR1cm4gZC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XG59XG5cbi8vY2xlYXIgYWxsIGxpc3QgaXRlbXMgZnJvbSB0aGUgRE9NXG5jb25zdCBjbGVhckFsbEl0ZW1zRE9NID0gKG9sKSA9PiB7XG4gICAgd2hpbGUgKG9sLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgb2wucmVtb3ZlQ2hpbGQob2wuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cblxuLy9tYWtlIGl0ZW0gZWRpdGFibGUgLSBcbi8vbmVlZCBzdWJtaXQgYW5kIGNhbmNlbCBidG4gb25jZSBkYmwgY2xpY2tlZFxuLy9pZiBzdWJtaXR0ZWQsIHNhdmUgbmV3IHRleHQgYXMgdmFsdWUgb2YgaW5wdXQgXG5jb25zdCBpdGVtRWRpdGFibGUgPSAoKSA9PiB7XG4gICAgbGV0IGl0ZW1EYmxDbGlja2VkID0gZmFsc2U7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXRleHQnKTtcbiAgICBcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KVxuXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpID0+IHtcbiAgICAgICAgaXRlbURibENsaWNrZWQgPSB0cnVlO1xuICAgICAgICAvLyBjb25zdCBkaXNhYmxlZEl0ZW0gPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIGlmIChpdGVtRGJsQ2xpY2tlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZW0gYmVpbmcgZWRpdGVkJyk7XG5cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8vZ2V0IG5hbWUgYW5kIGRhdGUgZnJvbSBpdGVtcyBhbmQgY2FsbCBjcmVhdGVJdGVtSFRNTCgpXG5jb25zdCBnZXROYW1lQW5kRGF0ZSA9IChhcnIsIHByb2plY3ROYW1lKSA9PiB7XG4gICAgYXJyLmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgY29uc3QgbiA9IG9iai5uYW1lO1xuICAgICAgICBjb25zdCBkYyA9IG9iai5kYXRlQ3JlYXRlZDtcbiAgICAgICAgLy8gY29uc3QgY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW1IVE1MKG4sIGRjLCBwcm9qZWN0TmFtZSk7XG4gICAgICAgIC8vIHJldHVybiBjcmVhdGVJdGVtKCk7XG4gICAgICAgIGNyZWF0ZUl0ZW1IVE1MKG4sIGRjLCBwcm9qZWN0TmFtZSk7XG4gICAgfSlcbiAgICByZXR1cm47XG59XG5cbmNvbnN0IGNyZWF0ZUl0ZW1Gcm9tTG9jYWxTdG9yYWdlID0gKGl0ZW0sIHByb2plY3ROYW1lKSA9PiB7XG4gICAgLy8gY29uc3QgZCA9IGNyZWF0ZURlZmF1bHRBcnJheUxpc3QoKTtcbiAgICBjb25zdCBkID0gaXRlbTtcbiAgICAgICAgY29uc3QgbiA9IGQubmFtZTtcbiAgICAgICAgY29uc3QgZGMgPSBkLmRhdGVDcmVhdGVkO1xuICAgICAgICAvL2xhc3QgaXRlbT9cbiAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZW1IVE1MKG4sIGRjLCBwcm9qZWN0TmFtZSk7XG59XG5cbi8vY2hlY2sgbG9jYWwgc3RvcmFnZSB0byBzZWUgaWYgcHJvamVjdCBhbHJlYWR5IGV4aXN0c1xuY29uc3QgY2hlY2tMb2NhbFN0b3JhZ2UgPSAoY2xpY2tDb3VudCwgcHJvamVjdE5hbWUsIGl0ZW0pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RXhpc3RzID0gTE9DQUwubGVuZ3RoID4gMDtcbiAgICByZXR1cm4gcHJvamVjdEV4aXN0cyA/IHRydWUgOiBmYWxzZTtcbn1cblxuXG4vLyBjb25zdCBkZWxldGVDaGlsZEVsZW1lbnRzID0gKHBhcmVudEVsKSA9PiB7XG4vLyAgICAgcmV0dXJuICgpID0+IHtcbi8vICAgICAgICAgaWYgKHRydWUpIHtcbi8vICAgICAgICAgICAgIHdoaWxlIChwYXJlbnRFbC5maXJzdENoaWxkKSB7XG4vLyAgICAgICAgICAgICAgICAgcGFyZW50RWwucmVtb3ZlQ2hpbGQocGFyZW50RWwuZmlyc3RDaGlsZCk7XG4vLyAgICAgICAgICAgICB9ICAgXG4vLyAgICAgICAgICAgICAvL3JlbW92ZSBmcm9tIGFyci9sb2NhbCBzdG9yYWdlXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG5cblxuXG5cblxuY29uc3QgZmlyc3RMZXR0ZXJDYXBzID0gKCkgPT4ge1xuXG59XG5cblxuXG5cblxuXG5cblxuXG5cbi8vbGlzdGVuIGZvciBmb3JtIHN1Ym1pc3Npb24gdG8gYWRkIGVhY2ggaXRlbSBcblxuXG5cblxuLy9mb3JtIHN1YmJtaXNzaW9uIGV2ZW50IGxpc3RlbmVyIChjYWxsZWQgYWZ0ZXIgbmV3IGl0ZW0gb3IgcHJvamVjdCBidG4gaXMgY2xpY2tlZClcbmNvbnN0IGZvcm1TdWJtaXNzaW9uID0gKGNsaWNrQ291bnQsIHByb2plY3ROYW1lKT0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tbWFpbicpO1xuXG4gICAgY29uc3QgZCA9IGRpc3BsYXlIYW5kbGVyKCk7XG4gICAgY29uc29sZS5sb2coZCk7XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+IHtcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1uZXctaXRlbScpLnZhbHVlO1xuICAgICAgICAvLyBsZXQgZmlyc3RMZXR0ZXIgPSBpbnB1dFZhbHVlLnNwbGljZSgwLCAxKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZmlyc3RMZXR0ZXIpO1xuICAgICAgICAvLyBpbnB1dFZhbHVlLlxuICAgICAgICAvL3JlbW92ZSBmb3JtIGRpc3BsYXlcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvL3JlbW92ZSBkaXNwbGF5IChhZGQgYmFjayBkaXNwbGF5OiBub25lKVxuICAgICAgICBkLmRvbnRTaG93Rm9ybSgpOyBcbiAgICAgICAgLy9jbGVhciBpbnB1dCBmaWVsZCBvbiBmb3JtIFN1Ym1pdFxuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIC8vY3JlYXRlIG5ldyBsaXN0IGl0ZW1cbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBMaXN0SXRlbShgJHtpbnB1dFZhbHVlfWAsIGdldERhdGUoKSk7XG4gICAgICAgIC8vY2hlY2sgaWYgTE9DQUwgU1RPUkFHRSBpcyBlbXB0eSBvciBub3QgXG4gICAgICAgIGlmKHByb2plY3ROYW1lID09ICdteVByb2plY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0TmFtZUFuZERhdGUoaXRlbSwgcHJvamVjdE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9qZWN0TG9jYWxTdG9yYWdlKGNsaWNrQ291bnQsIHByb2plY3ROYW1lLCBpdGVtKTtcbiAgICB9KVxufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vZnVuY3Rpb24gZm9yIElJRkUgZXZlbnQgbGlzdGVuZXJzLCBuZXcgaXRlbSwgY2xlYXIgYWxsLCBhbmQgbmV3IHByb2plY3RcbmNvbnN0IG1haW5FdmVudExpc3RlbmVycyA9ICgoKSA9PiB7XG4gICAgbGV0IGNsaWNrQ291bnQgPSAwO1xuICAgIGxldCBwcm9qZWN0TmFtZTtcblxuICAgIGNvbnN0IGQgPSBkaXNwbGF5SGFuZGxlcigpO1xuICAgIGNvbnNvbGUubG9nKGQpO1xuICAgIFxuICAgIGNvbnN0IG5ld0l0ZW1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLW5ldy1pdGVtLWJ0bicpO1xuICAgIGNvbnN0IGlucHV0TmV3SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1uZXctaXRlbScpO1xuICAgIGNvbnN0IGxhYmVsTmV3SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbC1uZXctaXRlbScpO1xuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtYnRuJyk7XG4gICAgY29uc3QgY3JlYXRlTmV3QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1uZXctYnRuJyk7XG4gICAgY29uc3Qgb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJlZC1pdGVtLWxpc3QnKTtcblxuICAgIC8vZ2V0IHJldHVybiBib29sZWFuIG9uIGlmIHByb2plY3QgZXhpc3RzIGluIGxvY2FsIHN0b3JhZ2VcbiAgICBjb25zdCBwcm9qZWN0RXhpc3RzID0gY2hlY2tMb2NhbFN0b3JhZ2UoKTtcbiAgIFxuXG4gICAgLy9jcmVhdGUgbmV3IHByb2plY3QgQnRuIGxpc3RlbmVyXG4gICAgY3JlYXRlTmV3QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZygndGVzdCBuZXcgcHJvamVjdCBidG4nKTtcblxuICAgICAgICBpZiAocHJvamVjdEV4aXN0cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy9DTEVBUiBJVEVNUyBBTkQgTkFNRVxuICAgICAgICAgICAgY2xlYXJBbGxJdGVtc0RPTShvbCk7XG4gICAgICAgICAgICAvL2NyZWF0ZSBuZXcgcHJvamVjdCAob2JqKSBpbnNpZGUgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgLy9jdXJyZW50IHByb2ogd2lsbCBhbHdheXMgYmUgd2luZG93LmxvY2Fsc3RvcmFnZS5rZXkoMClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsaWNrQ291bnQrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsaWNrQ291bnQpO1xuICAgICAgICAgICAgLy9hc2sgdXNlciB0byBuYW1lIG5ldyBwcm9qZWN0XG4gICAgICAgICAgICAvL3dpcGUgZGVmYXVsdCBsaXN0XG4gICAgICAgICAgICAvL3N0YXJ0IG5ldyBwcm9qZWN0IHdpdGggbmFtZSBnaXZlbiAoa2V5IG5hbWUgaW4gbG9jYWwgc3RvcmFnZSBvYmopXG4gICAgICAgICAgICBwcm9qZWN0TmFtZSA9IHByb21wdCgnUGxlYXNlIGVudGVyIHRoZSBuYW1lIG9mIHlvdXIgcHJvamVjdCcsICdteVByb2plY3QnKTtcblxuICAgICAgICAgICAgaWYgKHByb2plY3ROYW1lID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2NsZWFyIGRlZmF1bHQgcHJvamVjdCBmcm9tIERPTSBcbiAgICAgICAgICAgICAgICBjbGVhckFsbEl0ZW1zRE9NKG9sKTtcbiAgICAgICAgICAgICAgICAvL2FkZCBuZXcgcHJvamVjdCBuYW1lIHRvIHRvcCBvZiBwYWdlXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lSGVhZGVyJykudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgICAgICAgICAvL2NyZWF0ZSBuZXcgZm9sZGVyIGluIGN1cnJlbnQgcHJvamVjdCBsaXN0XG4gICAgICAgICAgICAgICAgY3JlYXRlUHJvamVjdEZvbGRlcihwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgLy9hZGQgY2xpY2sgY291bnQgdG8gc2Vzc2lvbiBzdG9yYWdlXG4gICAgICAgICAgICAgICAgYWRkQ2xpY2tDb3VudChjbGlja0NvdW50LCBwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgLy9zaG93IHRoZSBmb3JtIGlucHV0IGJ1dHRvbnNcbiAgICAgICAgICAgICAgICBkLnNob3dGb3JtKCk7XG4gICAgICAgICAgICAgICAgLy9yZXR1cm4gZm9ybSBzdWJtaXNzaW9uIGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1TdWJtaXNzaW9uKGNsaWNrQ291bnQsIHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvL2NyZWF0ZSBuZXcgSXRlbSBCdG4gTGlzdGVuZXJcbiAgICBuZXdJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvL3JlbW92ZSBkaXNwbGF5IG5vbmUgZnJvbSBpbnB1dCBmb3JtIGl0ZW1zXG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0IG5ldyBpdGVtJyk7XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZUhlYWRlcicpLnRleHRDb250ZW50ID09PSAnbXlQcm9qZWN0Jykge1xuICAgICAgICAgICAgZC5zaG93Rm9ybSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1TdWJtaXNzaW9uKDAsICdteVByb2plY3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9qZWN0RXhpc3RzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvL3RoaXMgbmVlZHMgdG8gYmUgZml4ZWRcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gU0VTU0lPTi5rZXkoMCk7XG4gICAgICAgICAgICBsZXQgZ2V0Q2xpY2tDb3VudCA9IFNFU1NJT04uZ2V0SXRlbSgnaGVsbG8nKTtcbiAgICAgICAgICAgIGdldENsaWNrQ291bnQrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGdldENsaWNrQ291bnQpO1xuICAgICAgICAgICAgZC5zaG93Rm9ybSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1TdWJtaXNzaW9uKGNsaWNrQ291bnQsIHByb2plY3ROYW1lKTsgICBcbiAgICAgICAgfVxuICAgIH0pXG5cbn0pKCk7XG5cblxuXG5cblxuXG4vLyBjb25zdCBuYXZDbG9zZWQgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgbWFpblNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1zaWRlYmFyJyk7XG4vLyAgICAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ib2R5Jyk7XG4vLyAgICAgbWFpbkJvZHkuc3R5bGUub3BhY2l0eSA9ICcxJztcbi8vICAgICBtYWluU2lkZWJhci5zdHlsZS56SW5kZXggPSBcIjBcIjtcbi8vICAgICBtYWluU2lkZWJhci5zdHlsZS53aWR0aCA9IFwiMFwiO1xuLy8gfVxuLy8gY29uc3QgbmF2T3BlbiA9ICgpID0+IHtcbi8vICAgICBjb25zdCBtYWluU2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXNpZGViYXInKTtcbi8vICAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWJvZHknKTtcbi8vICAgICBtYWluU2lkZWJhci5zdHlsZS56SW5kZXggPSBcIjFcIjtcbi8vICAgICBtYWluU2lkZWJhci5zdHlsZS53aWR0aCA9IFwiMjUwcHhcIjtcbi8vICAgICBtYWluQm9keS5zdHlsZS5vcGFjaXR5ID0gJy41Jztcbi8vIH1cblxuLy9ldmVudCBsaXN0ZW5lciB0byBvcGVuIHVwIHNpZGUgbWVudSBiYXJcbi8vIGNvbnN0IG1lbnVFdmVudExpc3RlbmVyID0gKCgpID0+IHtcbi8vICAgICBjb25zdCBtZW51TG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24nKTtcbi8vICAgICBjb25zdCBtYWluU2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNpZGViYXInKTtcbi8vICAgICBtZW51TG9nby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4vLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbi8vICAgICAgICAgbmF2T3BlbigpO1xuLy8gICAgIH0pXG4vLyB9KSgpO1xuXG4vLyBjb25zdCBtZW51Q2xvc2VCdG5MaXN0ZW5lciA9ICgoKSA9PiB7XG4vLyAgICAgY29uc3QgbWVudUNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXNpZGViYXItaWNvbicpO1xuLy8gICAgIGNvbnN0IG1haW5TaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2lkZWJhcicpO1xuLy8gICAgIG1lbnVDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgICAgICAgLy8gYWRkRGlzcGxheU5vbmUobWFpblNpZGViYXIpO1xuLy8gICAgICAgICBuYXZDbG9zZWQoKTtcbi8vICAgICB9KVxuLy8gfSkoKTtcblxuLy9uZXcgbGlzdCBpdGVtIGJ0biBsaXN0ZW5lciBcbi8vIGNvbnN0IG5ld0l0ZW1CdG5MaXN0ZW5lciA9ICgoKSA9PiB7XG4vLyAgICAgbGV0IGNsaWNrQ291bnQgPSAwO1xuLy8gICAgIGNvbnN0IG5ld0l0ZW1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLW5ldy1pdGVtLWJ0bicpO1xuLy8gICAgIGNvbnN0IGlucHV0TmV3SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1uZXctaXRlbScpO1xuLy8gICAgIGNvbnN0IGxhYmVsTmV3SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbC1uZXctaXRlbScpO1xuLy8gICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtYnRuJyk7XG5cbiAgICBcblxuICAgIFxuLy8gfSkoKTtcblxuLy9kZWxldGUgYWxsIGNoaWxkIGVsZW1lbnRzIGZ1bmN0aW9uXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vL3RoZSB2YWx1ZSBvZiB0aGUga2V5IHZhbHVlIHBhaXIgaXMgdGhlIG9iamVjdCBhcnJheSB0aGF0IGlzIGNyZWF0ZWQgZm9yIGVhY2ggcHJvamVjdCAobGlzdCBvZiBpdGVtcylcbmNvbnN0IHByb2plY3RMb2NhbFN0b3JhZ2UgPSAoY2xpY2tDb3VudCwgcHJvamVjdE5hbWUsIGl0ZW0pID0+IHtcbiAgICBjb25zdCBnZXRDdXJyZW50UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWVIZWFkZXInKS50ZXh0Q29udGVudDtcbiAgICBjb25zb2xlLmxvZyhnZXRDdXJyZW50UHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IGxvY2FsU3RvcmFnZUl0ZW1MaXN0ID0gW107XG4gICAgLy9GSU5EIFBST0pFQ1QgTkFNRSBBTkQgUFVTSCBMQVNUIElURU0gSU5UTyBJVCBcblxuICAgIGNvbnN0IHByb2plY3RFeGlzdHMgPSBjaGVja0xvY2FsU3RvcmFnZSgpO1xuXG4gICAgXG4gICAgXG4gICAgaWYgKHByb2plY3RFeGlzdHMpIHtcbiAgICAgICAgbGV0IHByb2ogPSBKU09OLnBhcnNlKExPQ0FMLmdldEl0ZW0oZ2V0Q3VycmVudFByb2plY3ROYW1lKSk7XG4gICAgICAgIC8vIEpTT04ucGFyc2UocHJvaik7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2opO1xuICAgICAgICBwcm9qLnB1c2goaXRlbSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0sIGdldEN1cnJlbnRQcm9qZWN0TmFtZSk7XG4gICAgICAgIC8vIExPQ0FMLnNldEl0ZW0oYCR7cHJvamVjdE5hbWV9YCwgSlNPTi5zdHJpbmdpZnkocHJvaikpO1xuICAgICAgICBMT0NBTC5zZXRJdGVtKGdldEN1cnJlbnRQcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkocHJvaikpO1xuICAgICAgICAvLyBjcmVhdGVJdGVtRnJvbUxvY2FsU3RvcmFnZShpdGVtLCBwcm9qZWN0TmFtZSk7XG4gICAgICAgIGNyZWF0ZUl0ZW1Gcm9tTG9jYWxTdG9yYWdlKGl0ZW0sIGdldEN1cnJlbnRQcm9qZWN0TmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWRkQ2xpY2tDb3VudChjbGlja0NvdW50LCBwcm9qZWN0TmFtZSk7XG4gICAgICAgIFxuICAgICAgICBMT0NBTC5zZXRJdGVtKGAke3Byb2plY3ROYW1lfWAsIEpTT04uc3RyaW5naWZ5KFtpdGVtXSkpO1xuICAgICAgICBjcmVhdGVJdGVtRnJvbUxvY2FsU3RvcmFnZShpdGVtLCBwcm9qZWN0TmFtZSk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gTE9DQUw7XG59XG5cbi8vSlNPTi5wYXJzZSBpdGVtIGxpc3QgYXJyLCBhbmQgY3JlYXRlIGh0bWwgZWxlbWVudCBmb3IgZWFjaCBpdGVtIGluIExPQ0FMIHN0b3JhZ2UgXG5jb25zdCBsb2FkU2Vzc2lvblN0b3JhZ2VQYWdlID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lSGVhZGVyJykudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgdG9Eb0xpc3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLXRleHQnKTtcbiAgICAvL2NyZWF0ZSBmb2xkZXIgaW4gc2lkZWJhciBvbiBwYWdlIGxvYWRcbiAgICAvL3dpbGwgbmVlZCB0byBzaG93IGFsbCBwcm9qZWN0cyBpbiBzaWRlYmFyXG4gICAgYWRkRGlzcGxheU5vbmUodG9Eb0xpc3RIZWFkZXIpO1xuICAgIGNyZWF0ZVByb2plY3RGb2xkZXIocHJvamVjdE5hbWUpO1xuXG4gICAgbGV0IGkgPSBMT0NBTC5nZXRJdGVtKGAke3Byb2plY3ROYW1lfWApO1xuICAgIGkgPSBKU09OLnBhcnNlKGkpO1xuICAgIHJldHVybiBnZXROYW1lQW5kRGF0ZShpLCBwcm9qZWN0TmFtZSk7XG59XG5cbi8vY3JlYXRlIHByb2plY3QgZm9sZGVyIGluIHNpZGViYXIgd2hlbiBuZXcgcHJvamVjdCBpcyBjcmVhdGVkXG5jb25zdCBjcmVhdGVQcm9qZWN0Rm9sZGVyID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XG4gICAgY29uc3QgY3VycmVudFAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1wJyk7XG4gICAgY29uc3Qgc2lkZUJhck1haW5MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItbWFpbi1saXN0Jyk7XG5cbiAgICBjb25zdCBycyA9IGdldENvbXB1dGVkU3R5bGUocm9vdCk7XG4gICAgY29uc3QgZGFya0JsdWUgPSBycy5nZXRQcm9wZXJ0eVZhbHVlKCctLWRhcmstYmx1ZScpO1xuXG4gICAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgLy8gbmV3UHJvai5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XG4gICAgbmV3UHJvai5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZScpO1xuICAgIG5ld1Byb2oudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBuZXdQcm9qLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGRhcmtCbHVlO1xuICAgIGN1cnJlbnRQLmFwcGVuZENoaWxkKG5ld1Byb2opO1xufVxuXG4vL2FkZCBjbGljayBjb3VudCB0byBzZXNzaW9uIHN0b3JhZ2UgdG8gdHJhY2tcbmNvbnN0IGFkZENsaWNrQ291bnQgPSAoY2xpY2tDb3VudCwgcHJvamVjdE5hbWUpID0+IHtcbiAgICBsZXQgZGF0YSA9IFNFU1NJT04uZ2V0SXRlbShwcm9qZWN0TmFtZSk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coU0VTU0lPTi5nZXRJdGVtKHByb2plY3ROYW1lKSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFNFU1NJT04pO1xuICAgIHJldHVybiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShgJHtwcm9qZWN0TmFtZX1gLCBjbGlja0NvdW50KTtcbn1cblxuLy8gbG9hZCBpbiBkZWZhdWx0IHBhZ2UgKHVzaW5nIGRlZmF1bHRhcnJheWxpc3QpXG5jb25zdCBsb2FkRGVmYXVsdFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgZCA9IGNyZWF0ZURlZmF1bHRBcnJheUxpc3QoKTtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdE5hbWUgPSAnbXlQcm9qZWN0JztcbiAgICAvLyBMT0NBTC5zZXRJdGVtKCdteVByb2plY3QnLCBgJHtKU09OLnN0cmluZ2lmeShkKX1gKTtcbiAgICByZXR1cm4gZ2V0TmFtZUFuZERhdGUoZCwgZGVmYXVsdFByb2plY3ROYW1lKTtcbn1cblxuLy9MT0FEIFBBR0VcbmNvbnN0IGxvYWRQYWdlID0gKCgpICA9PiBET01Mb2FkZWQobG9hZERlZmF1bHRQYWdlLCBsb2FkU2Vzc2lvblN0b3JhZ2VQYWdlKSkoKTtcblxuZXhwb3J0IHtcbiAgICBkZWxldGVCdG5MaXN0ZW5lciwgXG4gICAgZXhwYW5kQnRuTGlzdGVuZXIsXG4gICAgaXRlbUVkaXRhYmxlLFxuICAgIGlmQ2hlY2tlZCxcbiAgICBjaGVja0xvY2FsU3RvcmFnZSxcbiAgICBjbGVhckFsbEl0ZW1zRE9NXG59IiwiY29uc3QgRE9NTG9hZGVkID0gKGEsIGMpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChlKSA9PiB7XG4gICAgICAgIFxuXG4gICAgICAgIC8vZ2V0IGN1cnJlbnRsLCBsYXRlc3QgcHJvamVjdCBmcm9tIGxvY2FsIHN0b3JhZ2UgYW5kIHBhc3MgaW4gcHJvamVjdG5hbWUgdG8gbG9hZHNlc3Npb25cbiAgICAgICAgbGV0IHByb2pOYW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5rZXkoMCk7XG5cbiAgICAgICAgLy9jaGVjayBmb3IgcHJvamVjdE5hbWUgZnJvbSBzaWRldGFiICh3aGF0ZXZlciBwcm9qZWN0IGlzIGhpZ2hsaWdodGVkKVxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMCA/IGEoKSA6IGMocHJvak5hbWUpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NTG9hZGVkOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=