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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black-color: black;\n    --font-weight: 300;\n    --border-test: 2px solid yellow;\n    --dark-blue: #476a7a;\n    --dark-grey: #29363886;\n    --light-blue: #2C5364;\n    --closetowhite: #6d9eb3;\n    --redOrange: rgb(255, 68, 11);\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing: border-box;\n    font-weight: var(--font-weight);\n}\n\nhtml {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: black;\n}\n\n.text {\n    color: var(--closetowhite);\n    /* color: whitesmoke; */\n    /* text-align: center; */\n}\n\n.main-content {\n    min-height: 100%;\n    margin: 0;\n    padding: 15px;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 15px;\n}\n\n/* main sidebar */\n.main-sidebar {\n    /* flex: .1; */\n    min-height: 300px;\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    padding: 15px;\n    /* background-color: rgb(55, 66, 73); */\n    background-color: var(--dark-grey);\n    border-radius: 10px;\n}\n\n\n.sidebar-title  {\n    margin: 0;\n    padding: 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    /* align-items: space-between; */\n    justify-content: space-between;\n    /* align-items: center; */\n    /* background-color: var(--dark-grey); */\n    border-radius: 5px;\n    /* transition: all 1s ease; */\n}\n\n/* .material-icons {\n    text-align: left;\n    font-size: 40px;\n    color: var(--closetowhite);\n    flex: .15;\n} */\n\n#sidebar-title-text {\n    /* flex: .85; */\n    text-align: center;\n    color: black;\n    /* font-size: 28px; */\n    font-weight: var(--font-weight);\n    letter-spacing: 1.5px;\n}\n\n.sidebar-project-list {\n    flex: 1;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    /* border-radius: 5px; */\n    /* background-color: blue; */\n}\n\n.sidebar-main-list {\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    /* color: rgb(55, 66, 73); */\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    gap: 10px;\n    height: 100%;\n    \n}\n\n.sidebar-list-item {\n    margin: 0;\n    padding: 0;\n    /* padding: 8px; */\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    /* background-color: var(--dark-grey); */\n    color: #a3a3a3;\n    font-size: 18px;\n    font-size: 1.25rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n/* ul.sidebar-list-item {\n    \n} */\n\nul.sidebar-list-item > li {\n    text-indent: -5px;\n}\n\nul.sidebar-list-item > li::before {\n    content: \"- \";\n    color: black;\n    text-indent: -5px;\n}\n\n#current-p {\n    /* background-color: var(--dark-grey); */\n    /* gap: 10px; */\n    color: white;\n    font-size: 1.5rem;\n}\n\n.projectName {\n    margin: 0 0 0 10px;\n    color: black;\n    font-size: 1rem;\n    text-align: center;\n    letter-spacing: 1.5px;\n    padding: 10px;\n    border-radius: 10px;\n    height: 100%;\n}\n\n.sidebar-create-new-btn {\n    flex: .25;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    /* background-color: violet; */\n}\n\n/* .create-new-btn {\n    \n    \n} */\n\n/* ************************* main body ************************** */\n.main-body {\n    margin: 0;\n    padding: 0;\n    height: 1000px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.main-header {\n    margin: 0;\n    padding: 0 15px 0 15px;\n    flex: .30;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--dark-grey);\n    \n    border-radius: 10px;\n}\n\n/* .menu-icon{\n    width: 30px;\n    height: 30px;\n}\n#menu-icon {\n    background-image: url('./img/menu.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100%;\n} */\n\n#projectNameHeader {\n    color: var(--closetowhite);\n    /* color: black; */\n    letter-spacing: 1.5px;\n    font-size: 1.75rem;\n}\n\n#header-text {\n    color: white;\n    letter-spacing: 1px;\n    font-size: 1.25rem;\n}\n\n\n\n\n/* main list content */\n.main-list-content {\n    flex: 2.70;\n    /* height: 85%; */\n    display: flex;\n    flex-direction: column;\n    /* border: 10px solid var(--black-color); */\n    /* margin: 10px; */\n    background-color: var(--dark-grey);\n    margin: 0;\n    padding: 0;\n    border-radius: 10px;\n    gap: 10px;\n}\n\n.list-container {\n    flex: 2.25;\n    margin: 0;\n    padding: 25px 15px 15px 15px;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    /* background-color: var(--dark-grey); */\n    border-radius: 5px;\n    gap: 50px;\n}\n\n.ordered-item-list {\n    flex: 2;\n    /* height: 100%;\n    width: 100%; */\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 15px;\n}\n\n\n\n\n\n\n\n/* *************************** FORM SUBMISSION FOR LIST ITEMS ************************* */\n.list-item-options {\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    margin: 0;\n    padding: 0;\n    /* border: 1px solid violet; */\n}\n\n.form-main {\n    /* justify-content: space-between; */\n    gap: 10px;\n    width: 75%;\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    /* border: 1px solid violet; */\n    /* align-items: center; */\n}\n\n#create-new-item-btn {\n    /* width: 50px; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.25rem;\n}\n\n.label-new-item {\n    text-align: center;\n    flex: .1;\n}\n\n#input-new-item {\n    margin: 0;\n    /* padding: 0; */\n    border-radius: 5px;\n    border: none;\n    flex: 1.9;\n    background-color: whitesmoke;\n    opacity: .8;\n}\n\n#input-new-item:checked {\n    border: none;\n}\n\n#submit-btn {\n    flex: .5;\n}\n\n#clear-all-items-btn {\n    background-color: var(--redOrange);\n    color: black;\n}\n\n\n/* ***************************** EACH ITEM ******************************** */\n.list-item {\n    margin: 0;\n    padding: 0 15px 0 15px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--dark-blue);\n    height: 50px;\n    color: var(--black-color);\n    letter-spacing: 1px;\n    display: flex;\n    border-radius: 10px;\n    z-index: 1;\n    transition: all .5s ease;\n}\n\n.list-input-container {\n    flex: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item-text {\n    margin: 0;\n    padding: 0;\n    color: black;\n    letter-spacing: 1.5px;\n    flex: 1.75;\n    height: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    /* z-index: 20; */\n    /* font-size: 1.75rem; */\n}\n\n\n/* #item-checkbox {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: var(--dark-grey);\n    -webkit-appearance: none;\n\tborder: none;\n\tbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);\n\tpadding: 7px;\n\tborder-radius: 5px;\n}\n\n#item-checkbox:checked {\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);\n\tcolor: var(--redOrange);  \n    content: '\\2714';\n\tfont-size: 14px; \n}\n\n#item-checkbox:checked::after {\n    color: var(--redOrange);\n    content: '\\2714';\n\tfont-size: 14px;\n} */\n\ninput[type=text] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    box-sizing: border-box;\n    border: none;\n    background-color: var(--dark-blue);\n    font-size: 1.25rem;\n    color: black;\n    z-index: 20;\n    /* z-index: 15; */\n    /* font-size: 100%; */\n}\n\n.item-text::placeholder {  \n    color: black;\n}\ninput::-webkit-input-placeholder {\n    color: black;\n}\n\n.item-options-container {\n    flex: .25;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    /* padding: 10px; */\n    /* height: 100%; */\n    gap: 10px;\n    background-color: var(--dark-blue);\n    border-radius: 0 10px 10px 0;\n}\n\n.item-delete-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n\n#delete-item {\n    border: none;\n    border-radius: 10px;\n    background-color: var(--dark-blue);\n}\n\n\n.delete-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n    color: white;\n}\n\n.expand-icon-btn {\n    background-color: var(--dark-blue);\n    border: none;\n    flex: 1;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.expand-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n}\n\n\n\n\n.item-details-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n#item-details {\n    border: none;\n    border-radius: 10px;\n}\n\n.item-date-created {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n\n.expand-container {\n    margin: 0;\n    padding: 0 8px 0 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--closetowhite);\n    height: 150px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    border-radius: 5px;\n    font-size: 85%;\n}\n\n.details-container {\n    flex: .5;\n    /* border: 1px solid var(--closetowhite); */\n    display: flex;\n    justify-content: center;\n    background-color: var(--dark-blue);\n    /* align-items: center; */\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.details-title {\n    color: var(--closetowhite);\n    font-size: 100%;\n}\n\n\n/* ******************** general ********************** */\n\n.display {\n    display: none;\n    animation: ease-in 1s;\n}\n\n.btn {\n    background-color: rgb(55, 66, 73);\n    background-color: black;\n    border: none;\n    border-radius: 10px;\n    color: var(--closetowhite);\n    padding: 10px;\n    width: 100px;\n    height: 50px;\n    font-size: 1rem;\n    letter-spacing: 1.5px;\n    font-weight: var(--font-weight);\n}\n\n.create-new-btn {\n    background-color: black;\n    color: var(--closetowhite);\n}\n\n.item-btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 5px;\n    /* width: 50px; */\n    width: 65%;\n    height: 65%;\n    font-size: 75%;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --black-color: black;\n    --font-weight: 300;\n    --border-test: 2px solid yellow;\n    --dark-blue: #476a7a;\n    --dark-grey: #29363886;\n    --light-blue: #2C5364;\n    --closetowhite: #6d9eb3;\n    --redOrange: rgb(255, 68, 11);\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing: border-box;\n    font-weight: var(--font-weight);\n}\n\nhtml {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: black;\n}\n\n.text {\n    color: var(--closetowhite);\n    /* color: whitesmoke; */\n    /* text-align: center; */\n}\n\n.main-content {\n    min-height: 100%;\n    margin: 0;\n    padding: 15px;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 15px;\n}\n\n/* main sidebar */\n.main-sidebar {\n    /* flex: .1; */\n    min-height: 300px;\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    padding: 15px;\n    /* background-color: rgb(55, 66, 73); */\n    background-color: var(--dark-grey);\n    border-radius: 10px;\n}\n\n\n.sidebar-title  {\n    margin: 0;\n    padding: 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    /* align-items: space-between; */\n    justify-content: space-between;\n    /* align-items: center; */\n    /* background-color: var(--dark-grey); */\n    border-radius: 5px;\n    /* transition: all 1s ease; */\n}\n\n/* .material-icons {\n    text-align: left;\n    font-size: 40px;\n    color: var(--closetowhite);\n    flex: .15;\n} */\n\n#sidebar-title-text {\n    /* flex: .85; */\n    text-align: center;\n    color: black;\n    /* font-size: 28px; */\n    font-weight: var(--font-weight);\n    letter-spacing: 1.5px;\n}\n\n.sidebar-project-list {\n    flex: 1;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    /* border-radius: 5px; */\n    /* background-color: blue; */\n}\n\n.sidebar-main-list {\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    /* color: rgb(55, 66, 73); */\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    gap: 10px;\n    height: 100%;\n    \n}\n\n.sidebar-list-item {\n    margin: 0;\n    padding: 0;\n    /* padding: 8px; */\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    /* background-color: var(--dark-grey); */\n    color: #a3a3a3;\n    font-size: 18px;\n    font-size: 1.25rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n/* ul.sidebar-list-item {\n    \n} */\n\nul.sidebar-list-item > li {\n    text-indent: -5px;\n}\n\nul.sidebar-list-item > li::before {\n    content: \"- \";\n    color: black;\n    text-indent: -5px;\n}\n\n#current-p {\n    /* background-color: var(--dark-grey); */\n    /* gap: 10px; */\n    color: white;\n    font-size: 1.5rem;\n}\n\n.projectName {\n    margin: 0 0 0 10px;\n    color: black;\n    font-size: 1rem;\n    text-align: center;\n    letter-spacing: 1.5px;\n    padding: 10px;\n    border-radius: 10px;\n    height: 100%;\n}\n\n.sidebar-create-new-btn {\n    flex: .25;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    /* background-color: violet; */\n}\n\n/* .create-new-btn {\n    \n    \n} */\n\n/* ************************* main body ************************** */\n.main-body {\n    margin: 0;\n    padding: 0;\n    height: 1000px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.main-header {\n    margin: 0;\n    padding: 0 15px 0 15px;\n    flex: .30;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--dark-grey);\n    \n    border-radius: 10px;\n}\n\n/* .menu-icon{\n    width: 30px;\n    height: 30px;\n}\n#menu-icon {\n    background-image: url('./img/menu.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100%;\n} */\n\n#projectNameHeader {\n    color: var(--closetowhite);\n    /* color: black; */\n    letter-spacing: 1.5px;\n    font-size: 1.75rem;\n}\n\n#header-text {\n    color: white;\n    letter-spacing: 1px;\n    font-size: 1.25rem;\n}\n\n\n\n\n/* main list content */\n.main-list-content {\n    flex: 2.70;\n    /* height: 85%; */\n    display: flex;\n    flex-direction: column;\n    /* border: 10px solid var(--black-color); */\n    /* margin: 10px; */\n    background-color: var(--dark-grey);\n    margin: 0;\n    padding: 0;\n    border-radius: 10px;\n    gap: 10px;\n}\n\n.list-container {\n    flex: 2.25;\n    margin: 0;\n    padding: 25px 15px 15px 15px;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    /* background-color: var(--dark-grey); */\n    border-radius: 5px;\n    gap: 50px;\n}\n\n.ordered-item-list {\n    flex: 2;\n    /* height: 100%;\n    width: 100%; */\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 15px;\n}\n\n\n\n\n\n\n\n/* *************************** FORM SUBMISSION FOR LIST ITEMS ************************* */\n.list-item-options {\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    margin: 0;\n    padding: 0;\n    /* border: 1px solid violet; */\n}\n\n.form-main {\n    /* justify-content: space-between; */\n    gap: 10px;\n    width: 75%;\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    /* border: 1px solid violet; */\n    /* align-items: center; */\n}\n\n#create-new-item-btn {\n    /* width: 50px; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.25rem;\n}\n\n.label-new-item {\n    text-align: center;\n    flex: .1;\n}\n\n#input-new-item {\n    margin: 0;\n    /* padding: 0; */\n    border-radius: 5px;\n    border: none;\n    flex: 1.9;\n    background-color: whitesmoke;\n    opacity: .8;\n}\n\n#input-new-item:checked {\n    border: none;\n}\n\n#submit-btn {\n    flex: .5;\n}\n\n#clear-all-items-btn {\n    background-color: var(--redOrange);\n    color: black;\n}\n\n\n/* ***************************** EACH ITEM ******************************** */\n.list-item {\n    margin: 0;\n    padding: 0 15px 0 15px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--dark-blue);\n    height: 50px;\n    color: var(--black-color);\n    letter-spacing: 1px;\n    display: flex;\n    border-radius: 10px;\n    z-index: 1;\n    transition: all .5s ease;\n}\n\n.list-input-container {\n    flex: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item-text {\n    margin: 0;\n    padding: 0;\n    color: black;\n    letter-spacing: 1.5px;\n    flex: 1.75;\n    height: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    /* z-index: 20; */\n    /* font-size: 1.75rem; */\n}\n\n\n/* #item-checkbox {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: var(--dark-grey);\n    -webkit-appearance: none;\n\tborder: none;\n\tbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);\n\tpadding: 7px;\n\tborder-radius: 5px;\n}\n\n#item-checkbox:checked {\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);\n\tcolor: var(--redOrange);  \n    content: '\\2714';\n\tfont-size: 14px; \n}\n\n#item-checkbox:checked::after {\n    color: var(--redOrange);\n    content: '\\2714';\n\tfont-size: 14px;\n} */\n\ninput[type=text] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    box-sizing: border-box;\n    border: none;\n    background-color: var(--dark-blue);\n    font-size: 1.25rem;\n    color: black;\n    z-index: 20;\n    /* z-index: 15; */\n    /* font-size: 100%; */\n}\n\n.item-text::placeholder {  \n    color: black;\n}\ninput::-webkit-input-placeholder {\n    color: black;\n}\n\n.item-options-container {\n    flex: .25;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    /* padding: 10px; */\n    /* height: 100%; */\n    gap: 10px;\n    background-color: var(--dark-blue);\n    border-radius: 0 10px 10px 0;\n}\n\n.item-delete-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n\n#delete-item {\n    border: none;\n    border-radius: 10px;\n    background-color: var(--dark-blue);\n}\n\n\n.delete-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url('./img/delete.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n    color: white;\n}\n\n.expand-icon-btn {\n    background-color: var(--dark-blue);\n    border: none;\n    flex: 1;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.expand-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url('./img/chevron-down\\ \\(1\\).png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n}\n\n\n\n\n.item-details-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n#item-details {\n    border: none;\n    border-radius: 10px;\n}\n\n.item-date-created {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n\n.expand-container {\n    margin: 0;\n    padding: 0 8px 0 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--closetowhite);\n    height: 150px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    border-radius: 5px;\n    font-size: 85%;\n}\n\n.details-container {\n    flex: .5;\n    /* border: 1px solid var(--closetowhite); */\n    display: flex;\n    justify-content: center;\n    background-color: var(--dark-blue);\n    /* align-items: center; */\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.details-title {\n    color: var(--closetowhite);\n    font-size: 100%;\n}\n\n\n/* ******************** general ********************** */\n\n.display {\n    display: none;\n    animation: ease-in 1s;\n}\n\n.btn {\n    background-color: rgb(55, 66, 73);\n    background-color: black;\n    border: none;\n    border-radius: 10px;\n    color: var(--closetowhite);\n    padding: 10px;\n    width: 100px;\n    height: 50px;\n    font-size: 1rem;\n    letter-spacing: 1.5px;\n    font-weight: var(--font-weight);\n}\n\n.create-new-btn {\n    background-color: black;\n    color: var(--closetowhite);\n}\n\n.item-btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 5px;\n    /* width: 50px; */\n    width: 65%;\n    height: 65%;\n    font-size: 75%;\n}\n\n\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _btnListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btnListeners */ "./src/btnListeners.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.js");





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
            const a = (0,_btnListeners__WEBPACK_IMPORTED_MODULE_0__.deleteBtnListener)(projectName);
            const b = (0,_btnListeners__WEBPACK_IMPORTED_MODULE_0__.expandBtnListener)();
            // const c = itemEditable();
            const d = (0,_btnListeners__WEBPACK_IMPORTED_MODULE_0__.ifChecked)();
            // return a && b;
            return a && b && d;
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
/* harmony export */   "ListItem": () => (/* binding */ ListItem),
/* harmony export */   "getDateAndTime": () => (/* binding */ getDateAndTime),
/* harmony export */   "displayHandler": () => (/* binding */ displayHandler),
/* harmony export */   "clearStorage": () => (/* binding */ clearStorage),
/* harmony export */   "removeDisplayNone": () => (/* binding */ removeDisplayNone),
/* harmony export */   "addDisplayNone": () => (/* binding */ addDisplayNone),
/* harmony export */   "clearAllItemsDOM": () => (/* binding */ clearAllItemsDOM)
/* harmony export */ });
const itemListArr = [];

const clearStorage = () => {
    return () => {
        window.localStorage.clear();
        window.sessionStorage.clear();
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

const getDate = () => {
    const myDate = new Date().toLocaleDateString();
    return myDate;
}
const getDateAndTime = () => {
    const getDate = () => {
        const myDate = new Date().toLocaleDateString();
        return myDate;
    }
    const getTime = () => {
        const getTime = new Date().toLocaleTimeString();
        return getTime;
    }
    return {
        getDate,
        getTime
    }
}


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


class ListItem {
    constructor(name, dateCreated, timeStamp) {
        this.name = name;
        this.notes = 'test';
        this.dateCreated = dateCreated
        this.checked = false;
        this.timeStamp = timeStamp;
    }
    getName() {
        return this.name;
    }
}

console.log(ListItem.prototype);

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
/* harmony export */   "ifChecked": () => (/* binding */ ifChecked),
/* harmony export */   "dateAndTime": () => (/* binding */ dateAndTime)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.js");




const dateAndTime = (0,_app__WEBPACK_IMPORTED_MODULE_1__.getDateAndTime)();


//test this (Event delegation)
const documentEventListener = (() => {
    document.addEventListener('click', e => {
        if (e.target.id = 'delete-item') {
            console.log('delete item test');
        } else {
            return
        }
        if (e.target.id = 'item-checkbox') {
            console.log('item checkbox test');
        } else {
            return
        }
    }, false)
    return;
})();

//event listener to delete item (called after item is created)
const deleteBtnListener = (projectName = 'myProject') => {
    const orderedList = document.querySelector('.ordered-item-list');
    // const itemOptionsContainer = document.querySelector('.items-options-container');
    const itemDeleteBtn = document.querySelector('.item-delete-btn');
    const itemDeleteBtnsAll = document.querySelectorAll('.item-delete-btn');
    const listItemDeleteBtns = document.querySelectorAll('#delete-item');
    const currentProjectName = window.localStorage.key(0);
    const currentProjObject = window.localStorage.getItem(currentProjectName);

    console.log(itemDeleteBtnsAll);

    itemDeleteBtnsAll.forEach(b => {
        b.addEventListener('click', e => {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();

            // current 
            console.log(e.target.parentNode);
            
            if (e.target.classList.contains('delete-icon')) {
                const answer = confirm('are you sure you want to delete this item?');
                console.log(answer);
                if (answer === true) {
                    const listItemText = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[2].value;
                    let currentProjectArrayFromStorage = window.localStorage.getItem(currentProjectName);
                    currentProjectArrayFromStorage = JSON.parse(currentProjectArrayFromStorage);
                    let item; 
        
                    currentProjectArrayFromStorage = currentProjectArrayFromStorage.filter(o => {
                        console.log(o.name);
                        return o.name != listItemText;
                    })
                    console.log(currentProjectArrayFromStorage);
                }
                if (answer == false) {
                    return;
                } 
            } else {
                return;
            }
        }, false);
    })
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
        
    }, false);
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
    }, false);
};

const deleteAllProjects = () => {
    //going to delete from local storage
}



const ifChecked = (e) => {
    //get item that corresponds with the checkbox 
    //change checked: false to true in local storage
    //when page is loaded and DOM item is created, make sure checkbox stays 
    const timeStamp = dateAndTime.getTime();
    console.log(timeStamp);
    
    const checkboxes = document.querySelectorAll('input[type=checkbox');
    // const allCheckBoxes = document.querySelectorAll('#item-checkbox');
    // console.log(checkbox);
    // console.log(allCheckBoxes);
    checkboxes.forEach(box => {
        box.addEventListener('change', (e) => {
            console.log(e.currentTarget);
            console.log('change');
            //this input should be attached to the list item somehow
            //could make the list item the same input
            if (e.currentTarget.checked) {
                console.log('is checked');
                //add datecheckedoff to listItem object
                return;
            } else {
                return;
            }
        }, false)
    })
};

// const callListeners = () => {
//     const a = deleteBtnListener();
//     // const b = expandBtnListener();
//     const c = ifChecked();
//     return () => {
//         a, 
//         c
//     }
// }
// const callListener = callListeners();
// callListener();




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
/* harmony export */   "expandBtnListener": () => (/* reexport safe */ _btnListeners__WEBPACK_IMPORTED_MODULE_7__.expandBtnListener),
/* harmony export */   "itemEditable": () => (/* binding */ itemEditable),
/* harmony export */   "ifChecked": () => (/* reexport safe */ _btnListeners__WEBPACK_IMPORTED_MODULE_7__.ifChecked),
/* harmony export */   "checkLocalStorage": () => (/* binding */ checkLocalStorage),
/* harmony export */   "clearAllItemsDOM": () => (/* reexport safe */ _app_js__WEBPACK_IMPORTED_MODULE_4__.clearAllItemsDOM)
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


const clearAllStorage = (0,_app_js__WEBPACK_IMPORTED_MODULE_4__.clearStorage)();
// clearAllStorage();


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
    // console.log(item);
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










//listen for form submission to add each item p0-oxzr4
//form subbmission event listener (called after new item or project btn is clicked)
const formSubmission = (clickCount, projectName)=> {
    const form = document.querySelector('.form-main');

    const d = (0,_app_js__WEBPACK_IMPORTED_MODULE_4__.displayHandler)();
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
        // const item = new ListItem(`${inputValue}`, getDate());
        const item = new _app_js__WEBPACK_IMPORTED_MODULE_4__.ListItem(`${inputValue}`, _btnListeners__WEBPACK_IMPORTED_MODULE_7__.dateAndTime.getDate(), _btnListeners__WEBPACK_IMPORTED_MODULE_7__.dateAndTime.getTime());
        
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

    const d = (0,_app_js__WEBPACK_IMPORTED_MODULE_4__.displayHandler)();
    // console.log(d);
    
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
            (0,_app_js__WEBPACK_IMPORTED_MODULE_4__.clearAllItemsDOM)(ol);
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
                (0,_app_js__WEBPACK_IMPORTED_MODULE_4__.clearAllItemsDOM)(ol);
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
    // console.log(getCurrentProjectName);
    const localStorageItemList = [];
    //FIND PROJECT NAME AND PUSH LAST ITEM INTO IT 

    const projectExists = checkLocalStorage();

    if (projectExists) {
        let proj = JSON.parse(LOCAL.getItem(getCurrentProjectName));
        // JSON.parse(proj);
        console.log(proj);
        proj.push(item);
        // console.log(item, getCurrentProjectName);
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
    // console.log(projectName);
    const toDoListHeader = document.querySelector('.header-text');
    //create folder in sidebar on page load
    //will need to show all projects in sidebar
    (0,_app_js__WEBPACK_IMPORTED_MODULE_4__.addDisplayNone)(toDoListHeader);
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


    // let currentProjectName = LOCAL.key(0);
    // console.log(currentProjectName);


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
        const currentProjName = window.localStorage.key(0);
        const proj = window.localStorage.getItem(currentProjName);
        // console.log(JSON.parse(proj));
        //check for projectName from sidetab (whatever project is highlighted)
        window.localStorage.length === 0 ? a() : c(currentProjName);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sU0FBUyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxPQUFPLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFVBQVUsWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFFBQVEsWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLDJCQUEyQixPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxRQUFRLGFBQWEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxpQ0FBaUMsMkJBQTJCLHlCQUF5QixzQ0FBc0MsMkJBQTJCLDZCQUE2Qiw0QkFBNEIsOEJBQThCLG9DQUFvQyxHQUFHLE9BQU8sZ0RBQWdELDZCQUE2QixzQ0FBc0MsR0FBRyxVQUFVLGdCQUFnQixpQkFBaUIsbUJBQW1CLDhCQUE4QixHQUFHLFdBQVcsaUNBQWlDLDRCQUE0QiwrQkFBK0IsS0FBSyxtQkFBbUIsdUJBQXVCLGdCQUFnQixvQkFBb0IsOEJBQThCLG9CQUFvQiw2QkFBNkIscUJBQXFCLGdCQUFnQixHQUFHLHVDQUF1QyxtQkFBbUIsMEJBQTBCLG9CQUFvQiw4QkFBOEIsZ0JBQWdCLG9CQUFvQiw0Q0FBNEMsMkNBQTJDLDBCQUEwQixHQUFHLHVCQUF1QixnQkFBZ0IsaUJBQWlCLGNBQWMsb0JBQW9CLDZCQUE2QixxQ0FBcUMsdUNBQXVDLDhCQUE4QiwrQ0FBK0MsMkJBQTJCLGtDQUFrQyxLQUFLLHdCQUF3Qix1QkFBdUIsc0JBQXNCLGlDQUFpQyxnQkFBZ0IsSUFBSSwyQkFBMkIsb0JBQW9CLDJCQUEyQixtQkFBbUIsMEJBQTBCLHdDQUF3Qyw0QkFBNEIsR0FBRywyQkFBMkIsY0FBYyxnQkFBZ0IsaUJBQWlCLG9CQUFvQixrQ0FBa0MsOEJBQThCLDZCQUE2QixtQ0FBbUMsS0FBSyx3QkFBd0IsZ0JBQWdCLGlCQUFpQiw0QkFBNEIsaUNBQWlDLHNCQUFzQiw2QkFBNkIsb0NBQW9DLDhCQUE4QixnQkFBZ0IsbUJBQW1CLFNBQVMsd0JBQXdCLGdCQUFnQixpQkFBaUIsdUJBQXVCLDhCQUE4Qiw0QkFBNEIsdUJBQXVCLDZDQUE2Qyx1QkFBdUIsc0JBQXNCLHlCQUF5QixzQkFBc0IsNkJBQTZCLGdCQUFnQixHQUFHLDZCQUE2QixVQUFVLGlDQUFpQyx3QkFBd0IsR0FBRyx1Q0FBdUMsc0JBQXNCLG1CQUFtQix3QkFBd0IsR0FBRyxnQkFBZ0IsNkNBQTZDLHNCQUFzQixxQkFBcUIsd0JBQXdCLEdBQUcsa0JBQWtCLHlCQUF5QixtQkFBbUIsc0JBQXNCLHlCQUF5Qiw0QkFBNEIsb0JBQW9CLDBCQUEwQixtQkFBbUIsR0FBRyw2QkFBNkIsZ0JBQWdCLGlCQUFpQixnQkFBZ0Isb0JBQW9CLGdDQUFnQyw0QkFBNEIsbUNBQW1DLEtBQUssd0JBQXdCLGdCQUFnQix3RkFBd0YsZ0JBQWdCLGlCQUFpQixxQkFBcUIsa0JBQWtCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsa0JBQWtCLGdCQUFnQiw2QkFBNkIsZ0JBQWdCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLHlDQUF5QyxnQ0FBZ0MsR0FBRyxrQkFBa0Isa0JBQWtCLG1CQUFtQixHQUFHLGNBQWMsOENBQThDLG1DQUFtQyxrQ0FBa0MsNEJBQTRCLElBQUksMEJBQTBCLGlDQUFpQyx1QkFBdUIsOEJBQThCLHlCQUF5QixHQUFHLGtCQUFrQixtQkFBbUIsMEJBQTBCLHlCQUF5QixHQUFHLHVEQUF1RCxpQkFBaUIsc0JBQXNCLHNCQUFzQiw2QkFBNkIsZ0RBQWdELHlCQUF5QiwyQ0FBMkMsZ0JBQWdCLGlCQUFpQiwwQkFBMEIsZ0JBQWdCLEdBQUcscUJBQXFCLGlCQUFpQixnQkFBZ0IsbUNBQW1DLG9CQUFvQiw2QkFBNkIscUJBQXFCLDZDQUE2QywyQkFBMkIsZ0JBQWdCLEdBQUcsd0JBQXdCLGNBQWMsc0JBQXNCLG1CQUFtQixrQkFBa0IsaUJBQWlCLG9CQUFvQiw2QkFBNkIscUJBQXFCLGdCQUFnQixHQUFHLGdJQUFnSSxnQkFBZ0Isb0JBQW9CLHFDQUFxQyw0QkFBNEIsZ0JBQWdCLGlCQUFpQixtQ0FBbUMsS0FBSyxnQkFBZ0IseUNBQXlDLGtCQUFrQixpQkFBaUIsbUJBQW1CLG9CQUFvQixxQ0FBcUMsNEJBQTRCLG1DQUFtQyxnQ0FBZ0MsS0FBSywwQkFBMEIsc0JBQXNCLHNCQUFzQiw4QkFBOEIsMEJBQTBCLHlCQUF5QixHQUFHLHFCQUFxQix5QkFBeUIsZUFBZSxHQUFHLHFCQUFxQixnQkFBZ0IscUJBQXFCLDJCQUEyQixtQkFBbUIsZ0JBQWdCLG1DQUFtQyxrQkFBa0IsR0FBRyw2QkFBNkIsbUJBQW1CLEdBQUcsaUJBQWlCLGVBQWUsR0FBRywwQkFBMEIseUNBQXlDLG1CQUFtQixHQUFHLGtHQUFrRyxnQkFBZ0IsNkJBQTZCLDRCQUE0Qiw0QkFBNEIsdUJBQXVCLHlDQUF5QyxtQkFBbUIsZ0NBQWdDLDBCQUEwQixvQkFBb0IsMEJBQTBCLGlCQUFpQiwrQkFBK0IsR0FBRywyQkFBMkIsY0FBYyxvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLGdCQUFnQixnQkFBZ0IsaUJBQWlCLG1CQUFtQiw0QkFBNEIsaUJBQWlCLG1CQUFtQixvQkFBb0Isa0NBQWtDLDBCQUEwQixzQkFBc0IsK0JBQStCLEtBQUsseUJBQXlCLGlCQUFpQixnQkFBZ0IsbUJBQW1CLHlDQUF5QywrQkFBK0IsaUJBQWlCLDJGQUEyRixpQkFBaUIsdUJBQXVCLEdBQUcsNEJBQTRCLHFJQUFxSSw4QkFBOEIsd0JBQXdCLHFCQUFxQixHQUFHLG1DQUFtQyw4QkFBOEIsd0JBQXdCLG9CQUFvQixJQUFJLHdCQUF3QixrQkFBa0IseUJBQXlCLG9CQUFvQiw2QkFBNkIsbUJBQW1CLHlDQUF5Qyx5QkFBeUIsbUJBQW1CLGtCQUFrQixzQkFBc0IsNEJBQTRCLEtBQUssK0JBQStCLG1CQUFtQixHQUFHLG9DQUFvQyxtQkFBbUIsR0FBRyw2QkFBNkIsZ0JBQWdCLG9CQUFvQiwwQkFBMEIsOEJBQThCLGdCQUFnQix3QkFBd0IseUJBQXlCLGtCQUFrQix5Q0FBeUMsbUNBQW1DLEdBQUcsc0JBQXNCLGNBQWMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsbUJBQW1CLEdBQUcsb0JBQW9CLG1CQUFtQiwwQkFBMEIseUNBQXlDLEdBQUcsb0JBQW9CLGtCQUFrQixtQkFBbUIsZ0RBQWdELG1DQUFtQyxrQ0FBa0MsNEJBQTRCLG1CQUFtQixHQUFHLHNCQUFzQix5Q0FBeUMsbUJBQW1CLGNBQWMsbUJBQW1CLGdCQUFnQixpQkFBaUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIseUJBQXlCLEdBQUcsa0JBQWtCLGtCQUFrQixtQkFBbUIsZ0VBQWdFLG1DQUFtQyxrQ0FBa0MsNEJBQTRCLEdBQUcsNkJBQTZCLGNBQWMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsNkNBQTZDLHFCQUFxQixHQUFHLGlCQUFpQixtQkFBbUIsMEJBQTBCLEdBQUcsd0JBQXdCLGNBQWMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsNkNBQTZDLHFCQUFxQixHQUFHLHVCQUF1QixnQkFBZ0IsMkJBQTJCLDRCQUE0Qiw0QkFBNEIsdUJBQXVCLDRDQUE0QyxvQkFBb0IsbUJBQW1CLDBCQUEwQixvQkFBb0IsNkJBQTZCLDhCQUE4QixxQ0FBcUMseUJBQXlCLHFCQUFxQixHQUFHLHdCQUF3QixlQUFlLGdEQUFnRCxzQkFBc0IsOEJBQThCLHlDQUF5Qyw4QkFBOEIsMkJBQTJCLG9CQUFvQixHQUFHLG9CQUFvQixpQ0FBaUMsc0JBQXNCLEdBQUcsNkVBQTZFLG9CQUFvQiw0QkFBNEIsR0FBRyxVQUFVLHdDQUF3Qyw4QkFBOEIsbUJBQW1CLDBCQUEwQixpQ0FBaUMsb0JBQW9CLG1CQUFtQixtQkFBbUIsc0JBQXNCLDRCQUE0QixzQ0FBc0MsR0FBRyxxQkFBcUIsOEJBQThCLGlDQUFpQyxHQUFHLGVBQWUsOEJBQThCLG1CQUFtQix5QkFBeUIsaUNBQWlDLG1CQUFtQixzQkFBc0IsbUJBQW1CLGtCQUFrQixxQkFBcUIsR0FBRywyQkFBMkI7QUFDOXQxQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1oxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2YrRjtBQUM5RDs7OztBQUlqQztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sc0JBQXNCLGdFQUFpQjtBQUN2QyxzQkFBc0IsZ0VBQWlCO0FBQ3ZDO0FBQ0Esc0JBQXNCLHdEQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHNEM7QUFDWTtBQUNQOztBQUVqRCxvQkFBb0Isb0RBQWM7OztBQUdsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBZ0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEt5Qzs7QUFFekM7QUFDQSxvQkFBb0IsMENBQVEsOEJBQThCLDZDQUFPO0FBQ2pFLG9CQUFvQiwwQ0FBUSxrQ0FBa0MsNkNBQU87QUFDckUsc0JBQXNCLDBDQUFRLDZCQUE2Qiw2Q0FBTztBQUNsRSxxQkFBcUIsMENBQVEsaUNBQWlDLDZDQUFPO0FBQ3JFLHFCQUFxQiwwQ0FBUSw4QkFBOEIsNkNBQU87O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxzQkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJoQjtBQUNjO0FBQ0c7QUFDYTtBQUM4QztBQUM0RDtBQUN2RztBQUNuQjtBQUMrRTs7QUFFbEg7QUFDQTs7O0FBR0Esd0JBQXdCLHFEQUFZO0FBQ3BDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0RBQWM7QUFDdEIsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdEQUFjO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7QUFFQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLHVEQUFjO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25ELHlCQUF5Qiw2Q0FBUSxJQUFJLFdBQVcsR0FBRyw4REFBbUIsSUFBSSw4REFBbUI7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsdURBQWM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVkseURBQWdCO0FBQzVCO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxnQkFBZ0IseURBQWdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLENBQUM7Ozs7Ozs7QUFPRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUk7O0FBRUo7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSx5QkFBeUIsWUFBWTtBQUNyQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBYztBQUNsQjs7QUFFQSw2QkFBNkIsWUFBWTtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxZQUFZO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQSxjQUFjLDJEQUFzQjtBQUNwQztBQUNBLHFDQUFxQyxrQkFBa0I7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixxREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0WGxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1h4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7VUVyQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9zcmMvYnRuTGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9zcmMvZGVmYXVsdFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vc3JjL2xvYWRQYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9kZWxldGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvY2hldnJvbi1kb3duICgxKS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJsYWNrLWNvbG9yOiBibGFjaztcXG4gICAgLS1mb250LXdlaWdodDogMzAwO1xcbiAgICAtLWJvcmRlci10ZXN0OiAycHggc29saWQgeWVsbG93O1xcbiAgICAtLWRhcmstYmx1ZTogIzQ3NmE3YTtcXG4gICAgLS1kYXJrLWdyZXk6ICMyOTM2Mzg4NjtcXG4gICAgLS1saWdodC1ibHVlOiAjMkM1MzY0O1xcbiAgICAtLWNsb3NldG93aGl0ZTogIzZkOWViMztcXG4gICAgLS1yZWRPcmFuZ2U6IHJnYigyNTUsIDY4LCAxMSk7XFxufVxcblxcbioge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0KTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgLyogY29sb3I6IHdoaXRlc21va2U7ICovXFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi8qIG1haW4gc2lkZWJhciAqL1xcbi5tYWluLXNpZGViYXIge1xcbiAgICAvKiBmbGV4OiAuMTsgKi9cXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSwgNjYsIDczKTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuXFxuLnNpZGViYXItdGl0bGUgIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC8qIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlOyAqL1xcbn1cXG5cXG4vKiAubWF0ZXJpYWwtaWNvbnMge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBmbGV4OiAuMTU7XFxufSAqL1xcblxcbiNzaWRlYmFyLXRpdGxlLXRleHQge1xcbiAgICAvKiBmbGV4OiAuODU7ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICAvKiBmb250LXNpemU6IDI4cHg7ICovXFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodCk7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdC1saXN0IHtcXG4gICAgZmxleDogMTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXFxufVxcblxcbi5zaWRlYmFyLW1haW4tbGlzdCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAvKiBjb2xvcjogcmdiKDU1LCA2NiwgNzMpOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBcXG59XFxuXFxuLnNpZGViYXItbGlzdC1pdGVtIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiBwYWRkaW5nOiA4cHg7ICovXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpOyAqL1xcbiAgICBjb2xvcjogI2EzYTNhMztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLyogdWwuc2lkZWJhci1saXN0LWl0ZW0ge1xcbiAgICBcXG59ICovXFxuXFxudWwuc2lkZWJhci1saXN0LWl0ZW0gPiBsaSB7XFxuICAgIHRleHQtaW5kZW50OiAtNXB4O1xcbn1cXG5cXG51bC5zaWRlYmFyLWxpc3QtaXRlbSA+IGxpOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiLSBcXFwiO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtaW5kZW50OiAtNXB4O1xcbn1cXG5cXG4jY3VycmVudC1wIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTsgKi9cXG4gICAgLyogZ2FwOiAxMHB4OyAqL1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ucHJvamVjdE5hbWUge1xcbiAgICBtYXJnaW46IDAgMCAwIDEwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc2lkZWJhci1jcmVhdGUtbmV3LWJ0biB7XFxuICAgIGZsZXg6IC4yNTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZpb2xldDsgKi9cXG59XFxuXFxuLyogLmNyZWF0ZS1uZXctYnRuIHtcXG4gICAgXFxuICAgIFxcbn0gKi9cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqIG1haW4gYm9keSAqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi5tYWluLWJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgMTVweCAwIDE1cHg7XFxuICAgIGZsZXg6IC4zMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogLm1lbnUtaWNvbntcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuI21lbnUtaWNvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvbWVudS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufSAqL1xcblxcbiNwcm9qZWN0TmFtZUhlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICAvKiBjb2xvcjogYmxhY2s7ICovXFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cXG4jaGVhZGVyLXRleHQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuXFxuXFxuXFxuLyogbWFpbiBsaXN0IGNvbnRlbnQgKi9cXG4ubWFpbi1saXN0LWNvbnRlbnQge1xcbiAgICBmbGV4OiAyLjcwO1xcbiAgICAvKiBoZWlnaHQ6IDg1JTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogYm9yZGVyOiAxMHB4IHNvbGlkIHZhcigtLWJsYWNrLWNvbG9yKTsgKi9cXG4gICAgLyogbWFyZ2luOiAxMHB4OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgZmxleDogMi4yNTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAyNXB4IDE1cHggMTVweCAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbi5vcmRlcmVkLWl0ZW0tbGlzdCB7XFxuICAgIGZsZXg6IDI7XFxuICAgIC8qIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7ICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqIEZPUk0gU1VCTUlTU0lPTiBGT1IgTElTVCBJVEVNUyAqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuLmxpc3QtaXRlbS1vcHRpb25zIHtcXG4gICAgZmxleDogLjI1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2aW9sZXQ7ICovXFxufVxcblxcbi5mb3JtLW1haW4ge1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmlvbGV0OyAqL1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG4jY3JlYXRlLW5ldy1pdGVtLWJ0biB7XFxuICAgIC8qIHdpZHRoOiA1MHB4OyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4ubGFiZWwtbmV3LWl0ZW0ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsZXg6IC4xO1xcbn1cXG5cXG4jaW5wdXQtbmV3LWl0ZW0ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIC8qIHBhZGRpbmc6IDA7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmbGV4OiAxLjk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIG9wYWNpdHk6IC44O1xcbn1cXG5cXG4jaW5wdXQtbmV3LWl0ZW06Y2hlY2tlZCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI3N1Ym1pdC1idG4ge1xcbiAgICBmbGV4OiAuNTtcXG59XFxuXFxuI2NsZWFyLWFsbC1pdGVtcy1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWRPcmFuZ2UpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEVBQ0ggSVRFTSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi5saXN0LWl0ZW0ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgMTVweCAwIDE1cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcXG59XFxuXFxuLmxpc3QtaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZmxleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pdGVtLXRleHQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBmbGV4OiAxLjc1O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogei1pbmRleDogMjA7ICovXFxuICAgIC8qIGZvbnQtc2l6ZTogMS43NXJlbTsgKi9cXG59XFxuXFxuXFxuLyogI2l0ZW0tY2hlY2tib3gge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMHB4IC0xNXB4IDEwcHggLTEycHggcmdiYSgwLDAsMCwwLjA1KTtcXG5cXHRwYWRkaW5nOiA3cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jaXRlbS1jaGVja2JveDpjaGVja2VkIHtcXG5cXHRib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjA1KSwgaW5zZXQgMHB4IC0xNXB4IDEwcHggLTEycHggcmdiYSgwLDAsMCwwLjA1KSwgaW5zZXQgMTVweCAxMHB4IC0xMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcXG5cXHRjb2xvcjogdmFyKC0tcmVkT3JhbmdlKTsgIFxcbiAgICBjb250ZW50OiAnXFxcXDI3MTQnO1xcblxcdGZvbnQtc2l6ZTogMTRweDsgXFxufVxcblxcbiNpdGVtLWNoZWNrYm94OmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgY29sb3I6IHZhcigtLXJlZE9yYW5nZSk7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMjcxNCc7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcbn0gKi9cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgbWFyZ2luOiA4cHggMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgei1pbmRleDogMjA7XFxuICAgIC8qIHotaW5kZXg6IDE1OyAqL1xcbiAgICAvKiBmb250LXNpemU6IDEwMCU7ICovXFxufVxcblxcbi5pdGVtLXRleHQ6OnBsYWNlaG9sZGVyIHsgIFxcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaXRlbS1vcHRpb25zLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IC4yNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XFxufVxcblxcbi5pdGVtLWRlbGV0ZS1idG4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4jZGVsZXRlLWl0ZW0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcblxcblxcbi5kZWxldGUtaWNvbiB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5leHBhbmQtaWNvbi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZsZXg6IDE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZXhwYW5kLWljb24ge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcXG59XFxuXFxuXFxuXFxuXFxuLml0ZW0tZGV0YWlscy1idG4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jaXRlbS1kZXRhaWxzIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaXRlbS1kYXRlLWNyZWF0ZWQge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZXhwYW5kLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCA4cHggMCA4cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiA4NSU7XFxufVxcblxcbi5kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IC41O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbG9zZXRvd2hpdGUpOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZGV0YWlscy10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqIGdlbmVyYWwgKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi5kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYW5pbWF0aW9uOiBlYXNlLWluIDFzO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCA2NiwgNzMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQpO1xcbn1cXG5cXG4uY3JlYXRlLW5ldy1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxufVxcblxcbi5pdGVtLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgLyogd2lkdGg6IDUwcHg7ICovXFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIGhlaWdodDogNjUlO1xcbiAgICBmb250LXNpemU6IDc1JTtcXG59XFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsc0JBQXNCO0lBQ3RCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFNBQVM7QUFDYjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsa0NBQWtDO0lBQ2xDLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDOztBQUVBOzs7OztHQUtHOztBQUVIO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLCtCQUErQjtJQUMvQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsU0FBUztJQUNULFVBQVU7SUFDVixh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QUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1ibGFjay1jb2xvcjogYmxhY2s7XFxuICAgIC0tZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgLS1ib3JkZXItdGVzdDogMnB4IHNvbGlkIHllbGxvdztcXG4gICAgLS1kYXJrLWJsdWU6ICM0NzZhN2E7XFxuICAgIC0tZGFyay1ncmV5OiAjMjkzNjM4ODY7XFxuICAgIC0tbGlnaHQtYmx1ZTogIzJDNTM2NDtcXG4gICAgLS1jbG9zZXRvd2hpdGU6ICM2ZDllYjM7XFxuICAgIC0tcmVkT3JhbmdlOiByZ2IoMjU1LCA2OCwgMTEpO1xcbn1cXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodCk7XFxufVxcblxcbmh0bWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi50ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIC8qIGNvbG9yOiB3aGl0ZXNtb2tlOyAqL1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4vKiBtYWluIHNpZGViYXIgKi9cXG4ubWFpbi1zaWRlYmFyIHtcXG4gICAgLyogZmxleDogLjE7ICovXFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUsIDY2LCA3Myk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcblxcbi5zaWRlYmFyLXRpdGxlICB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47ICovXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAvKiB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTsgKi9cXG59XFxuXFxuLyogLm1hdGVyaWFsLWljb25zIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgZmxleDogLjE1O1xcbn0gKi9cXG5cXG4jc2lkZWJhci10aXRsZS10ZXh0IHtcXG4gICAgLyogZmxleDogLjg1OyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgLyogZm9udC1zaXplOiAyOHB4OyAqL1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3QtbGlzdCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xcbn1cXG5cXG4uc2lkZWJhci1tYWluLWxpc3Qge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgLyogY29sb3I6IHJnYig1NSwgNjYsIDczKTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgXFxufVxcblxcbi5zaWRlYmFyLWxpc3QtaXRlbSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogcGFkZGluZzogOHB4OyAqL1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTsgKi9cXG4gICAgY29sb3I6ICNhM2EzYTM7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIHVsLnNpZGViYXItbGlzdC1pdGVtIHtcXG4gICAgXFxufSAqL1xcblxcbnVsLnNpZGViYXItbGlzdC1pdGVtID4gbGkge1xcbiAgICB0ZXh0LWluZGVudDogLTVweDtcXG59XFxuXFxudWwuc2lkZWJhci1saXN0LWl0ZW0gPiBsaTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIi0gXFxcIjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWluZGVudDogLTVweDtcXG59XFxuXFxuI2N1cnJlbnQtcCB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7ICovXFxuICAgIC8qIGdhcDogMTBweDsgKi9cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnByb2plY3ROYW1lIHtcXG4gICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNpZGViYXItY3JlYXRlLW5ldy1idG4ge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2aW9sZXQ7ICovXFxufVxcblxcbi8qIC5jcmVhdGUtbmV3LWJ0biB7XFxuICAgIFxcbiAgICBcXG59ICovXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKiBtYWluIGJvZHkgKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG4ubWFpbi1ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDE1cHggMCAxNXB4O1xcbiAgICBmbGV4OiAuMzA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi8qIC5tZW51LWljb257XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcbiNtZW51LWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL21lbnUucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn0gKi9cXG5cXG4jcHJvamVjdE5hbWVIZWFkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgLyogY29sb3I6IGJsYWNrOyAqL1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG59XFxuXFxuI2hlYWRlci10ZXh0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcblxcblxcblxcbi8qIG1haW4gbGlzdCBjb250ZW50ICovXFxuLm1haW4tbGlzdC1jb250ZW50IHtcXG4gICAgZmxleDogMi43MDtcXG4gICAgLyogaGVpZ2h0OiA4NSU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGJvcmRlcjogMTBweCBzb2xpZCB2YXIoLS1ibGFjay1jb2xvcik7ICovXFxuICAgIC8qIG1hcmdpbjogMTBweDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDIuMjU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMjVweCAxNXB4IDE1cHggMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ub3JkZXJlZC1pdGVtLWxpc3Qge1xcbiAgICBmbGV4OiAyO1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlOyAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcblxcblxcblxcblxcblxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKiBGT1JNIFNVQk1JU1NJT04gRk9SIExJU1QgSVRFTVMgKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi5saXN0LWl0ZW0tb3B0aW9ucyB7XFxuICAgIGZsZXg6IC4yNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmlvbGV0OyAqL1xcbn1cXG5cXG4uZm9ybS1tYWluIHtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZpb2xldDsgKi9cXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuI2NyZWF0ZS1uZXctaXRlbS1idG4ge1xcbiAgICAvKiB3aWR0aDogNTBweDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLmxhYmVsLW5ldy1pdGVtIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbGV4OiAuMTtcXG59XFxuXFxuI2lucHV0LW5ldy1pdGVtIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICAvKiBwYWRkaW5nOiAwOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZmxleDogMS45O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBvcGFjaXR5OiAuODtcXG59XFxuXFxuI2lucHV0LW5ldy1pdGVtOmNoZWNrZWQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNzdWJtaXQtYnRuIHtcXG4gICAgZmxleDogLjU7XFxufVxcblxcbiNjbGVhci1hbGwtaXRlbXMtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkT3JhbmdlKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBFQUNIIElURU0gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG4ubGlzdC1pdGVtIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDE1cHggMCAxNXB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XFxufVxcblxcbi5saXN0LWlucHV0LWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaXRlbS10ZXh0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgZmxleDogMS43NTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIHotaW5kZXg6IDIwOyAqL1xcbiAgICAvKiBmb250LXNpemU6IDEuNzVyZW07ICovXFxufVxcblxcblxcbi8qICNpdGVtLWNoZWNrYm94IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIGluc2V0IDBweCAtMTVweCAxMHB4IC0xMnB4IHJnYmEoMCwwLDAsMC4wNSk7XFxuXFx0cGFkZGluZzogN3B4O1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2l0ZW0tY2hlY2tib3g6Y2hlY2tlZCB7XFxuXFx0Ym94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4wNSksIGluc2V0IDBweCAtMTVweCAxMHB4IC0xMnB4IHJnYmEoMCwwLDAsMC4wNSksIGluc2V0IDE1cHggMTBweCAtMTJweCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XFxuXFx0Y29sb3I6IHZhcigtLXJlZE9yYW5nZSk7ICBcXG4gICAgY29udGVudDogJ1xcXFwyNzE0JztcXG5cXHRmb250LXNpemU6IDE0cHg7IFxcbn1cXG5cXG4jaXRlbS1jaGVja2JveDpjaGVja2VkOjphZnRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWRPcmFuZ2UpO1xcbiAgICBjb250ZW50OiAnXFxcXDI3MTQnO1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG59ICovXFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIG1hcmdpbjogOHB4IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHotaW5kZXg6IDIwO1xcbiAgICAvKiB6LWluZGV4OiAxNTsgKi9cXG4gICAgLyogZm9udC1zaXplOiAxMDAlOyAqL1xcbn1cXG5cXG4uaXRlbS10ZXh0OjpwbGFjZWhvbGRlciB7ICBcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLml0ZW0tb3B0aW9ucy1jb250YWluZXIge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xcbn1cXG5cXG4uaXRlbS1kZWxldGUtYnRuIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuI2RlbGV0ZS1pdGVtIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbn1cXG5cXG5cXG4uZGVsZXRlLWljb24ge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2RlbGV0ZS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmV4cGFuZC1pY29uLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZmxleDogMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5leHBhbmQtaWNvbiB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvY2hldnJvbi1kb3duXFxcXCBcXFxcKDFcXFxcKS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XFxufVxcblxcblxcblxcblxcbi5pdGVtLWRldGFpbHMtYnRuIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7ICovXFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuI2l0ZW0tZGV0YWlscyB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLml0ZW0tZGF0ZS1jcmVhdGVkIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7ICovXFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmV4cGFuZC1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogODUlO1xcbn1cXG5cXG4uZGV0YWlscy1jb250YWluZXIge1xcbiAgICBmbGV4OiAuNTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xvc2V0b3doaXRlKTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRldGFpbHMtdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKiBnZW5lcmFsICoqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4uZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFuaW1hdGlvbjogZWFzZS1pbiAxcztcXG59XFxuXFxuLmJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSwgNjYsIDczKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0KTtcXG59XFxuXFxuLmNyZWF0ZS1uZXctYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbn1cXG5cXG4uaXRlbS1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIC8qIHdpZHRoOiA1MHB4OyAqL1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBoZWlnaHQ6IDY1JTtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxufVxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBkZWxldGVCdG5MaXN0ZW5lciwgZXhwYW5kQnRuTGlzdGVuZXIsIGl0ZW1FZGl0YWJsZSwgaWZDaGVja2VkIH0gZnJvbSBcIi4vYnRuTGlzdGVuZXJzXCI7XG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gXCIuL2FwcFwiO1xuXG5cblxuLy9jcmVhdGUgYnRucyBmb3Igc3VibWl0IGFuZCBjYW5jZWwgd2hlbiBlZGl0aW5nIGl0ZW1cbmNvbnN0IGNyZWF0ZVN1Ym1pdENhbmNlbEJ0bnMgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tdGV4dCcpO1xuXG5cbiAgICBjb25zdCBzdWJtaXRUZXh0Q2hhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2FuY2VsVGV4dENoYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xufVxuXG5cblxuLy9jcmVhdGUgaXRlbSBpbiBIVE1MLCBhZGQgdG8gRE9NXG5jb25zdCBjcmVhdGVJdGVtSFRNTCA9IChuLCBkYywgcHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBvcmRlcmVkSXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJlZC1pdGVtLWxpc3QnKTtcbiAgICAvL2NyZWF0ZSBpdGVtIG9wdGlvbnMgY29udGFpbmVyXG4gICAgY29uc3QgY3JlYXRlTmV3SXRlbU9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVhdGVOZXdJdGVtT3B0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLW9wdGlvbnMtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBsaXN0SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXN0SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGlzdC1pbnB1dC1jb250YWluZXInKTtcblxuXG4gICAgLy9hZGQgREVMRVRFIEJ0bi9JY29uIHRvIGl0ZW1cbiAgICBjb25zdCBjcmVhdGVJdGVtRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3JlYXRlSXRlbURlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlbGV0ZS1idG4nKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4uaWQgPSAnZGVsZXRlLWl0ZW0nO1xuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1pY29uJyk7XG4gICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgIGNyZWF0ZUl0ZW1EZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuXG4gICAgLy9hZGQgRVhQQU5EIEJ0bi9JY29uIHRvIGl0ZW1cbiAgICBjb25zdCBjcmVhdGVFeHBhbmRJY29uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY3JlYXRlRXhwYW5kSWNvbkJ0bi5jbGFzc0xpc3QuYWRkKCdleHBhbmQtaWNvbi1idG4nKTtcbiAgICBjcmVhdGVFeHBhbmRJY29uQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICBjcmVhdGVFeHBhbmRJY29uQnRuLm5hbWUgPSAnZXhwYW5kLWljb24tYnRuJztcbiAgICBjb25zdCBjcmVhdGVFeHBhbmRJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3JlYXRlRXhwYW5kSWNvbkRpdi5jbGFzc0xpc3QuYWRkKCdleHBhbmQtaWNvbicpO1xuICAgIGNyZWF0ZUV4cGFuZEljb25CdG4uYXBwZW5kQ2hpbGQoY3JlYXRlRXhwYW5kSWNvbkRpdik7XG5cblxuICAgIC8vYWRkIGNoZWNrYm94XG4gICAgY29uc3QgY2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY2hlY2tib3hMYWJlbC5odG1sRm9yID0gJ2l0ZW0tY2hlY2tib3gnO1xuICAgIC8vIGNoZWNrYm94TGFiZWwuZm9yID0gJ2l0ZW0tY2hlY2tib3gnO1xuICAgIGNoZWNrYm94TGFiZWwuaWQgPSAnaXRlbS1jaGVja2JveC1sYWJlbCc7XG4gICAgY29uc3QgY3JlYXRlQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNyZWF0ZUNoZWNrYm94LmlkID0gJ2l0ZW0tY2hlY2tib3gnO1xuICAgIGNyZWF0ZUNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNyZWF0ZUNoZWNrYm94Lm5hbWUgPSAnaXRlbS1jaGVja2JveCc7XG4gICAgLy9hZGQgaW1wb3J0YW50IEljb25cblxuICAgIC8vYXBwZW5kIGljb24sIGRlbGV0ZSBidG4gdG8gbGlzdCBpdGVtXG4gICAgY3JlYXRlTmV3SXRlbU9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSXRlbURlbGV0ZUJ0bik7XG4gICAgY3JlYXRlTmV3SXRlbU9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRXhwYW5kSWNvbkJ0bik7XG5cblxuICAgIC8vbmV3IGxpc3QgaXRlbSBcbiAgICBjb25zdCBuZXdMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbmV3TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtJyk7XG5cblxuICAgIGNvbnN0IGlucHV0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXRUZXh0LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGV4dCcpO1xuICAgIGlucHV0VGV4dC5kaXNhYmxlZCA9ICdkaXNhYmxlZCc7XG4gICAgaW5wdXRUZXh0LnR5cGUgPSAndGV4dCc7XG4gICAgaW5wdXRUZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcbiAgICBpbnB1dFRleHQudmFsdWUgPSBuO1xuICAgIFxuICAgIC8vYWRkIGl0ZW0gb3B0aW9ucyBjb250YWluZXJcbiAgICBuZXdMaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0SW5wdXRDb250YWluZXIpO1xuICAgIGxpc3RJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveExhYmVsKTtcbiAgICBsaXN0SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ2hlY2tib3gpO1xuICAgIGxpc3RJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFRleHQpO1xuICAgIG5ld0xpc3RJdGVtLmFwcGVuZENoaWxkKGNyZWF0ZU5ld0l0ZW1PcHRpb25zQ29udGFpbmVyKTtcbiAgICAvL2FkZCBuZXcgbGlzdCBpdGVtIHRvIG9yZGVyZWQgbGlzdFxuICAgIG9yZGVyZWRJdGVtTGlzdC5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbSk7XG5cblxuXG4gICAgLy9yZXR1cm4gZGVsZXRlIGJ0biwgZXhwYW5kIGJ0biBsaXN0ZW5lciBvbmNlIGl0ZW0gaXMgY3JlYXRlZCBcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lSGVhZGVyJykudGV4dENvbnRlbnQgPT09ICdteVByb2plY3QnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYSA9IGRlbGV0ZUJ0bkxpc3RlbmVyKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBleHBhbmRCdG5MaXN0ZW5lcigpO1xuICAgICAgICAgICAgLy8gY29uc3QgYyA9IGl0ZW1FZGl0YWJsZSgpO1xuICAgICAgICAgICAgY29uc3QgZCA9IGlmQ2hlY2tlZCgpO1xuICAgICAgICAgICAgLy8gcmV0dXJuIGEgJiYgYjtcbiAgICAgICAgICAgIHJldHVybiBhICYmIGIgJiYgZDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUl0ZW1IVE1MOyIsImNvbnN0IGl0ZW1MaXN0QXJyID0gW107XG5cbmNvbnN0IGNsZWFyU3RvcmFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xuICAgIH1cbiAgICBcbn1cblxuLy9yZW1vdmUgZGlzcGxheSAobm9uZSkgZnJvbSBlbGVtZW50IFxuY29uc3QgcmVtb3ZlRGlzcGxheU5vbmUgPSAoZCkgPT4ge1xuICAgIHJldHVybiBkLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXknKTtcbn1cblxuLy9hZGQgZGlzcGxheSAobm9uZSkgdG8gZWxlbWVudCBcbmNvbnN0IGFkZERpc3BsYXlOb25lID0gKGQpID0+IHtcbiAgICByZXR1cm4gZC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XG59XG5cbi8vY2xlYXIgYWxsIGxpc3QgaXRlbXMgZnJvbSB0aGUgRE9NXG5jb25zdCBjbGVhckFsbEl0ZW1zRE9NID0gKG9sKSA9PiB7XG4gICAgd2hpbGUgKG9sLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgb2wucmVtb3ZlQ2hpbGQob2wuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cblxuY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBteURhdGUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgIHJldHVybiBteURhdGU7XG59XG5jb25zdCBnZXREYXRlQW5kVGltZSA9ICgpID0+IHtcbiAgICBjb25zdCBnZXREYXRlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBteURhdGUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgICAgICByZXR1cm4gbXlEYXRlO1xuICAgIH1cbiAgICBjb25zdCBnZXRUaW1lID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIGdldFRpbWU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldERhdGUsXG4gICAgICAgIGdldFRpbWVcbiAgICB9XG59XG5cblxuY29uc3QgZGlzcGxheUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXROZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LW5ldy1pdGVtJyk7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1idG4nKTtcbiAgICBjb25zdCBsYWJlbE5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFiZWwtbmV3LWl0ZW0nKTtcbi8vcmVtb3ZlIGRpc3BsYXkgKG5vbmUpIGZyb20gZWxlbWVudCBcbiAgICBjb25zdCByZW1vdmVEaXNwbGF5Tm9uZSA9IChkKSA9PiB7XG4gICAgICAgIHJldHVybiBkLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXknKTtcbiAgICB9XG5cbi8vYWRkIGRpc3BsYXkgKG5vbmUpIHRvIGVsZW1lbnQgXG4gICAgY29uc3QgYWRkRGlzcGxheU5vbmUgPSAoZCkgPT4ge1xuICAgICAgICByZXR1cm4gZC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XG4gICAgfVxuLy9hZGQgYmFjayBkaXNwbGF5IE5PTkUgICAgXG4gICAgY29uc3QgZG9udFNob3dGb3JtID0gKCkgPT4ge1xuICAgICAgICBhZGREaXNwbGF5Tm9uZShpbnB1dE5ld0l0ZW0pO1xuICAgICAgICBhZGREaXNwbGF5Tm9uZShzdWJtaXRCdG4pO1xuICAgICAgICBhZGREaXNwbGF5Tm9uZShsYWJlbE5ld0l0ZW0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuLy9yZW1vdmUgZGlzcGxheSBOT05FXG4gICAgY29uc3Qgc2hvd0Zvcm0gPSAoKSA9PiB7XG4gICAgICAgIHJlbW92ZURpc3BsYXlOb25lKGlucHV0TmV3SXRlbSk7XG4gICAgICAgIHJlbW92ZURpc3BsYXlOb25lKHN1Ym1pdEJ0bik7XG4gICAgICAgIHJlbW92ZURpc3BsYXlOb25lKGxhYmVsTmV3SXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlRGlzcGxheU5vbmUsXG4gICAgICAgIGFkZERpc3BsYXlOb25lLFxuICAgICAgICBkb250U2hvd0Zvcm0sXG4gICAgICAgIHNob3dGb3JtXG4gICAgfVxufVxuXG5cbmNsYXNzIExpc3RJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlQ3JlYXRlZCwgdGltZVN0YW1wKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubm90ZXMgPSAndGVzdCc7XG4gICAgICAgIHRoaXMuZGF0ZUNyZWF0ZWQgPSBkYXRlQ3JlYXRlZFxuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aW1lU3RhbXAgPSB0aW1lU3RhbXA7XG4gICAgfVxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxufVxuXG5jb25zb2xlLmxvZyhMaXN0SXRlbS5wcm90b3R5cGUpO1xuXG5jbGFzcyBET01JdGVtIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIGl0ZW1MaXN0QXJyLFxuICAgIGdldERhdGUsXG4gICAgTGlzdEl0ZW0sXG4gICAgZ2V0RGF0ZUFuZFRpbWUsXG4gICAgZGlzcGxheUhhbmRsZXIsXG4gICAgY2xlYXJTdG9yYWdlLFxuICAgIHJlbW92ZURpc3BsYXlOb25lLFxuICAgIGFkZERpc3BsYXlOb25lLFxuICAgIGNsZWFyQWxsSXRlbXNET01cbn0iLCJpbXBvcnQgeyBtZGlDb25zb2xlTmV0d29yayB9IGZyb20gXCJAbWRpL2pzXCI7XG5pbXBvcnQgeyBjaGVja0xvY2FsU3RvcmFnZSwgY2xlYXJBbGxJdGVtc0RPTSB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBnZXREYXRlQW5kVGltZSwgTGlzdEl0ZW0gfSBmcm9tIFwiLi9hcHBcIjtcblxuY29uc3QgZGF0ZUFuZFRpbWUgPSBnZXREYXRlQW5kVGltZSgpO1xuXG5cbi8vdGVzdCB0aGlzIChFdmVudCBkZWxlZ2F0aW9uKVxuY29uc3QgZG9jdW1lbnRFdmVudExpc3RlbmVyID0gKCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPSAnZGVsZXRlLWl0ZW0nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIGl0ZW0gdGVzdCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID0gJ2l0ZW0tY2hlY2tib3gnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXRlbSBjaGVja2JveCB0ZXN0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH0sIGZhbHNlKVxuICAgIHJldHVybjtcbn0pKCk7XG5cbi8vZXZlbnQgbGlzdGVuZXIgdG8gZGVsZXRlIGl0ZW0gKGNhbGxlZCBhZnRlciBpdGVtIGlzIGNyZWF0ZWQpXG5jb25zdCBkZWxldGVCdG5MaXN0ZW5lciA9IChwcm9qZWN0TmFtZSA9ICdteVByb2plY3QnKSA9PiB7XG4gICAgY29uc3Qgb3JkZXJlZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJlZC1pdGVtLWxpc3QnKTtcbiAgICAvLyBjb25zdCBpdGVtT3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtcy1vcHRpb25zLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGl0ZW1EZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1kZWxldGUtYnRuJyk7XG4gICAgY29uc3QgaXRlbURlbGV0ZUJ0bnNBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbS1kZWxldGUtYnRuJyk7XG4gICAgY29uc3QgbGlzdEl0ZW1EZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2RlbGV0ZS1pdGVtJyk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3ROYW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5rZXkoMCk7XG4gICAgY29uc3QgY3VycmVudFByb2pPYmplY3QgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3ROYW1lKTtcblxuICAgIGNvbnNvbGUubG9nKGl0ZW1EZWxldGVCdG5zQWxsKTtcblxuICAgIGl0ZW1EZWxldGVCdG5zQWxsLmZvckVhY2goYiA9PiB7XG4gICAgICAgIGIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAvLyBjdXJyZW50IFxuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1pY29uJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbnN3ZXIgPSBjb25maXJtKCdhcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhbnN3ZXIpO1xuICAgICAgICAgICAgICAgIGlmIChhbnN3ZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW1UZXh0ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMl0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UHJvamVjdEFycmF5RnJvbVN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFByb2plY3RBcnJheUZyb21TdG9yYWdlID0gSlNPTi5wYXJzZShjdXJyZW50UHJvamVjdEFycmF5RnJvbVN0b3JhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbTsgXG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdEFycmF5RnJvbVN0b3JhZ2UgPSBjdXJyZW50UHJvamVjdEFycmF5RnJvbVN0b3JhZ2UuZmlsdGVyKG8gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coby5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLm5hbWUgIT0gbGlzdEl0ZW1UZXh0O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdEFycmF5RnJvbVN0b3JhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYW5zd2VyID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9KVxufTtcblxuXG5jb25zdCBjbGVhckFsbEJ0bkxpc3RlbmVyID0gKCgpID0+IHtcbiAgICAvL29uY2UgY2xlYXJlZCwgc3RhcnQgbmV3IHByb2plY3Q/XG4gICAgLy9vciBqdXN0IGEgblxuICAgIGNvbnN0IGNsZWFyQWxsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyLWFsbC1pdGVtcy1idG4nKTtcbiAgICBjbGVhckFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy9nZXQgY3VycmVudCBwcm9qZWN0IChXaGF0ZXZlciBpcyBjbGlja2VkIG9uIHNpZGViYXIpXG4gICAgICAgIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0TmFtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2Uua2V5KDApO1xuICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIGJ0biBjbGlja2VkJyk7XG4gICAgICAgIGNvbnN0IG9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyZWQtaXRlbS1saXN0Jyk7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1EZWxldGVBbGwgPSBjb25maXJtKCdXb3VsZCB5b3UgbGlrZSB0byBjbGVhciBhbGwgaXRlbXM/Jyk7XG4gICAgICAgIGlmIChjb25maXJtRGVsZXRlQWxsKSB7XG4gICAgICAgICAgICBjbGVhckFsbEl0ZW1zRE9NKG9sKTtcbiAgICAgICAgICAgIC8vcmVtb3ZlIGZyb20gYXJyL2xvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIExPQ0FMLnJlbW92ZUl0ZW0oZ2V0Q3VycmVudFByb2plY3ROYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL3dvdWxkIHlvdSBsaWtlIHRvIGNsZWFyIGFsbCBpdGVtcyBhbmQgc3RhcnQgb3ZlciBvciBkZWxldGUgcHJvamVjdFxuICAgICAgICAvL2RlbGV0ZSBhbGwgY2hpbGRyZW4gdW5kZXIgb3JkZXJlZCBpdGVtIGxpc3QgXG4gICAgICAgIFxuICAgIH0sIGZhbHNlKTtcbn0pKCk7XG5cblxuXG4vL2V4cGFuZCBidG4gbGlzdGVuZXIgKGNhbGxlZCBhZnRlciBpdGVtIGlzIGNyZWF0ZWQpXG5jb25zdCBleHBhbmRCdG5MaXN0ZW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBleHBhbmRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4cGFuZC1pY29uJyk7XG4gICAgY29uc3QgZ29TaG9wcGluZ0l0ZW1UZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvLXNob3BwaW5nJyk7XG4gICAgY29uc3QgaXRlbU9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1vcHRpb25zLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGl0ZW1UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tdGV4dCcpO1xuICAgIGV4cGFuZEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLCBlLnRhcmdldCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gZ29TaG9wcGluZ0l0ZW1UZXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3QtaXRlbScpO1xuICAgICAgICBnb1Nob3BwaW5nSXRlbVRlc3QuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kLWNvbnRhaW5lcicpO1xuICAgICAgICAvLyBpdGVtT3B0aW9ucy5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgaXRlbXdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbXdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtJyk7XG4gICAgICAgIGl0ZW13cmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1UZXh0KTtcbiAgICAgICAgaXRlbXdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbU9wdGlvbnMpO1xuXG4gICAgICAgIGdvU2hvcHBpbmdJdGVtVGVzdC5hcHBlbmRDaGlsZChpdGVtd3JhcHBlcik7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWNvbnRhaW5lcicpO1xuICAgICAgICBnb1Nob3BwaW5nSXRlbVRlc3QuYXBwZW5kQ2hpbGQoZGV0YWlscyk7ICBcbiAgICB9LCBmYWxzZSk7XG59O1xuXG5jb25zdCBkZWxldGVBbGxQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAvL2dvaW5nIHRvIGRlbGV0ZSBmcm9tIGxvY2FsIHN0b3JhZ2Vcbn1cblxuXG5cbmNvbnN0IGlmQ2hlY2tlZCA9IChlKSA9PiB7XG4gICAgLy9nZXQgaXRlbSB0aGF0IGNvcnJlc3BvbmRzIHdpdGggdGhlIGNoZWNrYm94IFxuICAgIC8vY2hhbmdlIGNoZWNrZWQ6IGZhbHNlIHRvIHRydWUgaW4gbG9jYWwgc3RvcmFnZVxuICAgIC8vd2hlbiBwYWdlIGlzIGxvYWRlZCBhbmQgRE9NIGl0ZW0gaXMgY3JlYXRlZCwgbWFrZSBzdXJlIGNoZWNrYm94IHN0YXlzIFxuICAgIGNvbnN0IHRpbWVTdGFtcCA9IGRhdGVBbmRUaW1lLmdldFRpbWUoKTtcbiAgICBjb25zb2xlLmxvZyh0aW1lU3RhbXApO1xuICAgIFxuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWNoZWNrYm94Jyk7XG4gICAgLy8gY29uc3QgYWxsQ2hlY2tCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNpdGVtLWNoZWNrYm94Jyk7XG4gICAgLy8gY29uc29sZS5sb2coY2hlY2tib3gpO1xuICAgIC8vIGNvbnNvbGUubG9nKGFsbENoZWNrQm94ZXMpO1xuICAgIGNoZWNrYm94ZXMuZm9yRWFjaChib3ggPT4ge1xuICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2hhbmdlJyk7XG4gICAgICAgICAgICAvL3RoaXMgaW5wdXQgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoZSBsaXN0IGl0ZW0gc29tZWhvd1xuICAgICAgICAgICAgLy9jb3VsZCBtYWtlIHRoZSBsaXN0IGl0ZW0gdGhlIHNhbWUgaW5wdXRcbiAgICAgICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpcyBjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgLy9hZGQgZGF0ZWNoZWNrZWRvZmYgdG8gbGlzdEl0ZW0gb2JqZWN0XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKVxuICAgIH0pXG59O1xuXG4vLyBjb25zdCBjYWxsTGlzdGVuZXJzID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IGEgPSBkZWxldGVCdG5MaXN0ZW5lcigpO1xuLy8gICAgIC8vIGNvbnN0IGIgPSBleHBhbmRCdG5MaXN0ZW5lcigpO1xuLy8gICAgIGNvbnN0IGMgPSBpZkNoZWNrZWQoKTtcbi8vICAgICByZXR1cm4gKCkgPT4ge1xuLy8gICAgICAgICBhLCBcbi8vICAgICAgICAgY1xuLy8gICAgIH1cbi8vIH1cbi8vIGNvbnN0IGNhbGxMaXN0ZW5lciA9IGNhbGxMaXN0ZW5lcnMoKTtcbi8vIGNhbGxMaXN0ZW5lcigpO1xuXG5cbmV4cG9ydCB7XG4gICAgZGVsZXRlQnRuTGlzdGVuZXIsXG4gICAgZXhwYW5kQnRuTGlzdGVuZXIsXG4gICAgY2xlYXJBbGxCdG5MaXN0ZW5lcixcbiAgICBpZkNoZWNrZWQsXG4gICAgZGF0ZUFuZFRpbWVcbn0iLCJpbXBvcnQgeyBMaXN0SXRlbSwgZ2V0RGF0ZSB9IGZyb20gXCIuL2FwcFwiXG5cbmNvbnN0IGNyZWF0ZURlZmF1bHRBcnJheUxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3Qgb25lID0gbmV3IExpc3RJdGVtKCdEbyB0aGUgZGlzaGVzJywgJ09uIHRpbWUhJywgZ2V0RGF0ZSgpKTtcbiAgICBjb25zdCB0d28gPSBuZXcgTGlzdEl0ZW0oJ0NoYW5nZSBjYXJcXCdzIG9pbCcsICdPbiB0aW1lIScsIGdldERhdGUoKSk7XG4gICAgY29uc3QgdGhyZWUgPSBuZXcgTGlzdEl0ZW0oJ1dhbGsgdGhlIERvZycsICdPbiB0aW1lIScsIGdldERhdGUoKSk7XG4gICAgY29uc3QgZm91ciA9IG5ldyBMaXN0SXRlbSgnRm9sZCB0aGUgbGF1bmRyeScsICdPbiB0aW1lIScsIGdldERhdGUoKSk7XG4gICAgY29uc3QgZml2ZSA9IG5ldyBMaXN0SXRlbSgnQ2FsbCB0aGUgYmFuaycsICdPbiB0aW1lIScsIGdldERhdGUoKSk7XG5cbiAgICBjb25zdCBkZWZhdWx0QXJyYXlMaXN0ID0gW1xuICAgICAgICBvbmUsXG4gICAgICAgIHR3bywgXG4gICAgICAgIHRocmVlLCBcbiAgICAgICAgZm91cixcbiAgICAgICAgZml2ZVxuICAgIF1cbiAgICByZXR1cm4gZGVmYXVsdEFycmF5TGlzdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGVmYXVsdEFycmF5TGlzdDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBET01Mb2FkZWQgZnJvbSAnLi9sb2FkUGFnZSc7XG5pbXBvcnQgbWVudUljb24gZnJvbSAnLi9pbWcvbWVudS5wbmcnO1xuaW1wb3J0IGV4cGFuZCBmcm9tICcuL2ltZy9ub3VuLWV4cGFuZC0xMTgxNzQ3LnBuZyc7XG5pbXBvcnQgeyBtZGlDaGV2cm9uRG93biwgbWRpQ29uc29sZUxpbmUsIG1kaUNvbnRyb2xsZXJDbGFzc2ljLCBtZGlXaW5kb3dTaHV0dGVyIH0gZnJvbSAnQG1kaS9qcyc7XG5pbXBvcnQgeyBnZXREYXRlLCBpdGVtTGlzdEFyciwgTGlzdEl0ZW0sIGdldERhdGVBbmRUaW1lLCBkaXNwbGF5SGFuZGxlciwgY2xlYXJTdG9yYWdlLCBjbGVhckFsbEl0ZW1zRE9NLCBhZGREaXNwbGF5Tm9uZSwgcmVtb3ZlRGlzcGxheU5vbmUgfSBmcm9tICcuL2FwcC5qcyc7XG5pbXBvcnQgY3JlYXRlRGVmYXVsdEFycmF5TGlzdCBmcm9tICcuL2RlZmF1bHRQcm9qZWN0JztcbmltcG9ydCBjcmVhdGVJdGVtSFRNTCBmcm9tICcuL0RPTSc7XG5pbXBvcnQge2RlbGV0ZUJ0bkxpc3RlbmVyLCBleHBhbmRCdG5MaXN0ZW5lciwgY2xlYXJBbGxCdG5MaXN0ZW5lciwgaWZDaGVja2VkLCBkYXRlQW5kVGltZSB9IGZyb20gJy4vYnRuTGlzdGVuZXJzJztcblxuY29uc3QgTE9DQUwgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuY29uc3QgU0VTU0lPTiA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZTtcblxuXG5jb25zdCBjbGVhckFsbFN0b3JhZ2UgPSBjbGVhclN0b3JhZ2UoKTtcbi8vIGNsZWFyQWxsU3RvcmFnZSgpO1xuXG5cbi8vbWFrZSBpdGVtIGVkaXRhYmxlIC0gXG4vL25lZWQgc3VibWl0IGFuZCBjYW5jZWwgYnRuIG9uY2UgZGJsIGNsaWNrZWRcbi8vaWYgc3VibWl0dGVkLCBzYXZlIG5ldyB0ZXh0IGFzIHZhbHVlIG9mIGlucHV0IFxuY29uc3QgaXRlbUVkaXRhYmxlID0gKCkgPT4ge1xuICAgIGxldCBpdGVtRGJsQ2xpY2tlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS10ZXh0Jyk7XG4gICAgXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcblxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGl0ZW1EYmxDbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgLy8gY29uc3QgZGlzYWJsZWRJdGVtID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICBpZiAoaXRlbURibENsaWNrZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdGVtIGJlaW5nIGVkaXRlZCcpO1xuXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG4vL2dldCBuYW1lIGFuZCBkYXRlIGZyb20gaXRlbXMgYW5kIGNhbGwgY3JlYXRlSXRlbUhUTUwoKVxuY29uc3QgZ2V0TmFtZUFuZERhdGUgPSAoYXJyLCBwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgIGNvbnN0IG4gPSBvYmoubmFtZTtcbiAgICAgICAgY29uc3QgZGMgPSBvYmouZGF0ZUNyZWF0ZWQ7XG4gICAgICAgIC8vIGNvbnN0IGNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtSFRNTChuLCBkYywgcHJvamVjdE5hbWUpO1xuICAgICAgICAvLyByZXR1cm4gY3JlYXRlSXRlbSgpO1xuICAgICAgICBjcmVhdGVJdGVtSFRNTChuLCBkYywgcHJvamVjdE5hbWUpO1xuICAgIH0pXG4gICAgcmV0dXJuO1xufVxuXG5jb25zdCBjcmVhdGVJdGVtRnJvbUxvY2FsU3RvcmFnZSA9IChpdGVtLCBwcm9qZWN0TmFtZSkgPT4ge1xuICAgIC8vIGNvbnN0IGQgPSBjcmVhdGVEZWZhdWx0QXJyYXlMaXN0KCk7XG4gICAgLy8gY29uc29sZS5sb2coaXRlbSk7XG4gICAgY29uc3QgZCA9IGl0ZW07XG4gICAgICAgIGNvbnN0IG4gPSBkLm5hbWU7XG4gICAgICAgIGNvbnN0IGRjID0gZC5kYXRlQ3JlYXRlZDtcbiAgICAgICAgLy9sYXN0IGl0ZW0/XG4gICAgICAgIHJldHVybiBjcmVhdGVJdGVtSFRNTChuLCBkYywgcHJvamVjdE5hbWUpO1xufVxuXG4vL2NoZWNrIGxvY2FsIHN0b3JhZ2UgdG8gc2VlIGlmIHByb2plY3QgYWxyZWFkeSBleGlzdHNcbmNvbnN0IGNoZWNrTG9jYWxTdG9yYWdlID0gKGNsaWNrQ291bnQsIHByb2plY3ROYW1lLCBpdGVtKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEV4aXN0cyA9IExPQ0FMLmxlbmd0aCA+IDA7XG4gICAgcmV0dXJuIHByb2plY3RFeGlzdHMgPyB0cnVlIDogZmFsc2U7XG59XG5cblxuLy8gY29uc3QgZGVsZXRlQ2hpbGRFbGVtZW50cyA9IChwYXJlbnRFbCkgPT4ge1xuLy8gICAgIHJldHVybiAoKSA9PiB7XG4vLyAgICAgICAgIGlmICh0cnVlKSB7XG4vLyAgICAgICAgICAgICB3aGlsZSAocGFyZW50RWwuZmlyc3RDaGlsZCkge1xuLy8gICAgICAgICAgICAgICAgIHBhcmVudEVsLnJlbW92ZUNoaWxkKHBhcmVudEVsLmZpcnN0Q2hpbGQpO1xuLy8gICAgICAgICAgICAgfSAgIFxuLy8gICAgICAgICAgICAgLy9yZW1vdmUgZnJvbSBhcnIvbG9jYWwgc3RvcmFnZVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG5cblxuXG5cbmNvbnN0IGZpcnN0TGV0dGVyQ2FwcyA9ICgpID0+IHtcblxufVxuXG5cblxuXG5cblxuXG5cblxuXG4vL2xpc3RlbiBmb3IgZm9ybSBzdWJtaXNzaW9uIHRvIGFkZCBlYWNoIGl0ZW0gcDAtb3h6cjRcbi8vZm9ybSBzdWJibWlzc2lvbiBldmVudCBsaXN0ZW5lciAoY2FsbGVkIGFmdGVyIG5ldyBpdGVtIG9yIHByb2plY3QgYnRuIGlzIGNsaWNrZWQpXG5jb25zdCBmb3JtU3VibWlzc2lvbiA9IChjbGlja0NvdW50LCBwcm9qZWN0TmFtZSk9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLW1haW4nKTtcblxuICAgIGNvbnN0IGQgPSBkaXNwbGF5SGFuZGxlcigpO1xuICAgIGNvbnNvbGUubG9nKGQpO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtbmV3LWl0ZW0nKS52YWx1ZTtcbiAgICAgICAgLy8gbGV0IGZpcnN0TGV0dGVyID0gaW5wdXRWYWx1ZS5zcGxpY2UoMCwgMSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZpcnN0TGV0dGVyKTtcbiAgICAgICAgLy8gaW5wdXRWYWx1ZS5cbiAgICAgICAgLy9yZW1vdmUgZm9ybSBkaXNwbGF5XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9yZW1vdmUgZGlzcGxheSAoYWRkIGJhY2sgZGlzcGxheTogbm9uZSlcbiAgICAgICAgZC5kb250U2hvd0Zvcm0oKTsgXG4gICAgICAgIC8vY2xlYXIgaW5wdXQgZmllbGQgb24gZm9ybSBTdWJtaXRcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICAvL2NyZWF0ZSBuZXcgbGlzdCBpdGVtXG4gICAgICAgIC8vIGNvbnN0IGl0ZW0gPSBuZXcgTGlzdEl0ZW0oYCR7aW5wdXRWYWx1ZX1gLCBnZXREYXRlKCkpO1xuICAgICAgICBjb25zdCBpdGVtID0gbmV3IExpc3RJdGVtKGAke2lucHV0VmFsdWV9YCwgZGF0ZUFuZFRpbWUuZ2V0RGF0ZSgpLCBkYXRlQW5kVGltZS5nZXRUaW1lKCkpO1xuICAgICAgICBcbiAgICAgICAgLy9jaGVjayBpZiBMT0NBTCBTVE9SQUdFIGlzIGVtcHR5IG9yIG5vdCBcbiAgICAgICAgaWYocHJvamVjdE5hbWUgPT0gJ215UHJvamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXROYW1lQW5kRGF0ZShpdGVtLCBwcm9qZWN0TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2plY3RMb2NhbFN0b3JhZ2UoY2xpY2tDb3VudCwgcHJvamVjdE5hbWUsIGl0ZW0pO1xuICAgIH0pXG59O1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy9mdW5jdGlvbiBmb3IgSUlGRSBldmVudCBsaXN0ZW5lcnMsIG5ldyBpdGVtLCBjbGVhciBhbGwsIGFuZCBuZXcgcHJvamVjdFxuY29uc3QgbWFpbkV2ZW50TGlzdGVuZXJzID0gKCgpID0+IHtcbiAgICBsZXQgY2xpY2tDb3VudCA9IDA7XG4gICAgbGV0IHByb2plY3ROYW1lO1xuXG4gICAgY29uc3QgZCA9IGRpc3BsYXlIYW5kbGVyKCk7XG4gICAgLy8gY29uc29sZS5sb2coZCk7XG4gICAgXG4gICAgY29uc3QgbmV3SXRlbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtbmV3LWl0ZW0tYnRuJyk7XG4gICAgY29uc3QgaW5wdXROZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LW5ldy1pdGVtJyk7XG4gICAgY29uc3QgbGFiZWxOZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhYmVsLW5ldy1pdGVtJyk7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1idG4nKTtcbiAgICBjb25zdCBjcmVhdGVOZXdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLW5ldy1idG4nKTtcbiAgICBjb25zdCBvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcmVkLWl0ZW0tbGlzdCcpO1xuXG4gICAgLy9nZXQgcmV0dXJuIGJvb2xlYW4gb24gaWYgcHJvamVjdCBleGlzdHMgaW4gbG9jYWwgc3RvcmFnZVxuICAgIGNvbnN0IHByb2plY3RFeGlzdHMgPSBjaGVja0xvY2FsU3RvcmFnZSgpO1xuICAgXG5cbiAgICAvL2NyZWF0ZSBuZXcgcHJvamVjdCBCdG4gbGlzdGVuZXJcbiAgICBjcmVhdGVOZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0IG5ldyBwcm9qZWN0IGJ0bicpO1xuXG4gICAgICAgIGlmIChwcm9qZWN0RXhpc3RzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvL0NMRUFSIElURU1TIEFORCBOQU1FXG4gICAgICAgICAgICBjbGVhckFsbEl0ZW1zRE9NKG9sKTtcbiAgICAgICAgICAgIC8vY3JlYXRlIG5ldyBwcm9qZWN0IChvYmopIGluc2lkZSBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICAvL2N1cnJlbnQgcHJvaiB3aWxsIGFsd2F5cyBiZSB3aW5kb3cubG9jYWxzdG9yYWdlLmtleSgwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xpY2tDb3VudCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2xpY2tDb3VudCk7XG4gICAgICAgICAgICAvL2FzayB1c2VyIHRvIG5hbWUgbmV3IHByb2plY3RcbiAgICAgICAgICAgIC8vd2lwZSBkZWZhdWx0IGxpc3RcbiAgICAgICAgICAgIC8vc3RhcnQgbmV3IHByb2plY3Qgd2l0aCBuYW1lIGdpdmVuIChrZXkgbmFtZSBpbiBsb2NhbCBzdG9yYWdlIG9iailcbiAgICAgICAgICAgIHByb2plY3ROYW1lID0gcHJvbXB0KCdQbGVhc2UgZW50ZXIgdGhlIG5hbWUgb2YgeW91ciBwcm9qZWN0JywgJ215UHJvamVjdCcpO1xuXG4gICAgICAgICAgICBpZiAocHJvamVjdE5hbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vY2xlYXIgZGVmYXVsdCBwcm9qZWN0IGZyb20gRE9NIFxuICAgICAgICAgICAgICAgIGNsZWFyQWxsSXRlbXNET00ob2wpO1xuICAgICAgICAgICAgICAgIC8vYWRkIG5ldyBwcm9qZWN0IG5hbWUgdG8gdG9wIG9mIHBhZ2VcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWVIZWFkZXInKS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgICAgICAgICAgIC8vY3JlYXRlIG5ldyBmb2xkZXIgaW4gY3VycmVudCBwcm9qZWN0IGxpc3RcbiAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0Rm9sZGVyKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgICAgICAvL2FkZCBjbGljayBjb3VudCB0byBzZXNzaW9uIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICBhZGRDbGlja0NvdW50KGNsaWNrQ291bnQsIHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgICAgICAvL3Nob3cgdGhlIGZvcm0gaW5wdXQgYnV0dG9uc1xuICAgICAgICAgICAgICAgIGQuc2hvd0Zvcm0oKTtcbiAgICAgICAgICAgICAgICAvL3JldHVybiBmb3JtIHN1Ym1pc3Npb24gbGlzdGVuZXJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybVN1Ym1pc3Npb24oY2xpY2tDb3VudCwgcHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vY3JlYXRlIG5ldyBJdGVtIEJ0biBMaXN0ZW5lclxuICAgIG5ld0l0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vcmVtb3ZlIGRpc3BsYXkgbm9uZSBmcm9tIGlucHV0IGZvcm0gaXRlbXNcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QgbmV3IGl0ZW0nKTtcblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lSGVhZGVyJykudGV4dENvbnRlbnQgPT09ICdteVByb2plY3QnKSB7XG4gICAgICAgICAgICBkLnNob3dGb3JtKCk7XG4gICAgICAgICAgICByZXR1cm4gZm9ybVN1Ym1pc3Npb24oMCwgJ215UHJvamVjdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2plY3RFeGlzdHMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vdGhpcyBuZWVkcyB0byBiZSBmaXhlZFxuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBTRVNTSU9OLmtleSgwKTtcbiAgICAgICAgICAgIGxldCBnZXRDbGlja0NvdW50ID0gU0VTU0lPTi5nZXRJdGVtKCdoZWxsbycpO1xuICAgICAgICAgICAgZ2V0Q2xpY2tDb3VudCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZ2V0Q2xpY2tDb3VudCk7XG4gICAgICAgICAgICBkLnNob3dGb3JtKCk7XG4gICAgICAgICAgICByZXR1cm4gZm9ybVN1Ym1pc3Npb24oY2xpY2tDb3VudCwgcHJvamVjdE5hbWUpOyAgIFxuICAgICAgICB9XG4gICAgfSlcblxufSkoKTtcblxuXG5cblxuXG5cbi8vIGNvbnN0IG5hdkNsb3NlZCA9ICgpID0+IHtcbi8vICAgICBjb25zdCBtYWluU2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXNpZGViYXInKTtcbi8vICAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWJvZHknKTtcbi8vICAgICBtYWluQm9keS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuLy8gICAgIG1haW5TaWRlYmFyLnN0eWxlLnpJbmRleCA9IFwiMFwiO1xuLy8gICAgIG1haW5TaWRlYmFyLnN0eWxlLndpZHRoID0gXCIwXCI7XG4vLyB9XG4vLyBjb25zdCBuYXZPcGVuID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IG1haW5TaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tc2lkZWJhcicpO1xuLy8gICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYm9keScpO1xuLy8gICAgIG1haW5TaWRlYmFyLnN0eWxlLnpJbmRleCA9IFwiMVwiO1xuLy8gICAgIG1haW5TaWRlYmFyLnN0eWxlLndpZHRoID0gXCIyNTBweFwiO1xuLy8gICAgIG1haW5Cb2R5LnN0eWxlLm9wYWNpdHkgPSAnLjUnO1xuLy8gfVxuXG4vL2V2ZW50IGxpc3RlbmVyIHRvIG9wZW4gdXAgc2lkZSBtZW51IGJhclxuLy8gY29uc3QgbWVudUV2ZW50TGlzdGVuZXIgPSAoKCkgPT4ge1xuLy8gICAgIGNvbnN0IG1lbnVMb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaWNvbicpO1xuLy8gICAgIGNvbnN0IG1haW5TaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2lkZWJhcicpO1xuLy8gICAgIG1lbnVMb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuLy8gICAgICAgICBuYXZPcGVuKCk7XG4vLyAgICAgfSlcbi8vIH0pKCk7XG5cbi8vIGNvbnN0IG1lbnVDbG9zZUJ0bkxpc3RlbmVyID0gKCgpID0+IHtcbi8vICAgICBjb25zdCBtZW51Q2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2Utc2lkZWJhci1pY29uJyk7XG4vLyAgICAgY29uc3QgbWFpblNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zaWRlYmFyJyk7XG4vLyAgICAgbWVudUNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgICAgICAvLyBhZGREaXNwbGF5Tm9uZShtYWluU2lkZWJhcik7XG4vLyAgICAgICAgIG5hdkNsb3NlZCgpO1xuLy8gICAgIH0pXG4vLyB9KSgpO1xuXG4vL25ldyBsaXN0IGl0ZW0gYnRuIGxpc3RlbmVyIFxuLy8gY29uc3QgbmV3SXRlbUJ0bkxpc3RlbmVyID0gKCgpID0+IHtcbi8vICAgICBsZXQgY2xpY2tDb3VudCA9IDA7XG4vLyAgICAgY29uc3QgbmV3SXRlbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtbmV3LWl0ZW0tYnRuJyk7XG4vLyAgICAgY29uc3QgaW5wdXROZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LW5ldy1pdGVtJyk7XG4vLyAgICAgY29uc3QgbGFiZWxOZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhYmVsLW5ldy1pdGVtJyk7XG4vLyAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1idG4nKTtcblxuICAgIFxuXG4gICAgXG4vLyB9KSgpO1xuXG4vL2RlbGV0ZSBhbGwgY2hpbGQgZWxlbWVudHMgZnVuY3Rpb25cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vdGhlIHZhbHVlIG9mIHRoZSBrZXkgdmFsdWUgcGFpciBpcyB0aGUgb2JqZWN0IGFycmF5IHRoYXQgaXMgY3JlYXRlZCBmb3IgZWFjaCBwcm9qZWN0IChsaXN0IG9mIGl0ZW1zKVxuY29uc3QgcHJvamVjdExvY2FsU3RvcmFnZSA9IChjbGlja0NvdW50LCBwcm9qZWN0TmFtZSwgaXRlbSkgPT4ge1xuICAgIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZUhlYWRlcicpLnRleHRDb250ZW50O1xuICAgIC8vIGNvbnNvbGUubG9nKGdldEN1cnJlbnRQcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgbG9jYWxTdG9yYWdlSXRlbUxpc3QgPSBbXTtcbiAgICAvL0ZJTkQgUFJPSkVDVCBOQU1FIEFORCBQVVNIIExBU1QgSVRFTSBJTlRPIElUIFxuXG4gICAgY29uc3QgcHJvamVjdEV4aXN0cyA9IGNoZWNrTG9jYWxTdG9yYWdlKCk7XG5cbiAgICBpZiAocHJvamVjdEV4aXN0cykge1xuICAgICAgICBsZXQgcHJvaiA9IEpTT04ucGFyc2UoTE9DQUwuZ2V0SXRlbShnZXRDdXJyZW50UHJvamVjdE5hbWUpKTtcbiAgICAgICAgLy8gSlNPTi5wYXJzZShwcm9qKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvaik7XG4gICAgICAgIHByb2oucHVzaChpdGVtKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSwgZ2V0Q3VycmVudFByb2plY3ROYW1lKTtcbiAgICAgICAgLy8gTE9DQUwuc2V0SXRlbShgJHtwcm9qZWN0TmFtZX1gLCBKU09OLnN0cmluZ2lmeShwcm9qKSk7XG4gICAgICAgIExPQ0FMLnNldEl0ZW0oZ2V0Q3VycmVudFByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeShwcm9qKSk7XG4gICAgICAgIC8vIGNyZWF0ZUl0ZW1Gcm9tTG9jYWxTdG9yYWdlKGl0ZW0sIHByb2plY3ROYW1lKTtcbiAgICAgICAgY3JlYXRlSXRlbUZyb21Mb2NhbFN0b3JhZ2UoaXRlbSwgZ2V0Q3VycmVudFByb2plY3ROYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhZGRDbGlja0NvdW50KGNsaWNrQ291bnQsIHByb2plY3ROYW1lKTtcbiAgICAgICAgXG4gICAgICAgIExPQ0FMLnNldEl0ZW0oYCR7cHJvamVjdE5hbWV9YCwgSlNPTi5zdHJpbmdpZnkoW2l0ZW1dKSk7XG4gICAgICAgIGNyZWF0ZUl0ZW1Gcm9tTG9jYWxTdG9yYWdlKGl0ZW0sIHByb2plY3ROYW1lKTtcblxuICAgIH1cblxuICAgIHJldHVybiBMT0NBTDtcbn1cblxuLy9KU09OLnBhcnNlIGl0ZW0gbGlzdCBhcnIsIGFuZCBjcmVhdGUgaHRtbCBlbGVtZW50IGZvciBlYWNoIGl0ZW0gaW4gTE9DQUwgc3RvcmFnZSBcbmNvbnN0IGxvYWRTZXNzaW9uU3RvcmFnZVBhZ2UgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWVIZWFkZXInKS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3ROYW1lKTtcbiAgICBjb25zdCB0b0RvTGlzdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItdGV4dCcpO1xuICAgIC8vY3JlYXRlIGZvbGRlciBpbiBzaWRlYmFyIG9uIHBhZ2UgbG9hZFxuICAgIC8vd2lsbCBuZWVkIHRvIHNob3cgYWxsIHByb2plY3RzIGluIHNpZGViYXJcbiAgICBhZGREaXNwbGF5Tm9uZSh0b0RvTGlzdEhlYWRlcik7XG4gICAgY3JlYXRlUHJvamVjdEZvbGRlcihwcm9qZWN0TmFtZSk7XG5cbiAgICBsZXQgaSA9IExPQ0FMLmdldEl0ZW0oYCR7cHJvamVjdE5hbWV9YCk7XG4gICAgaSA9IEpTT04ucGFyc2UoaSk7XG4gICAgcmV0dXJuIGdldE5hbWVBbmREYXRlKGksIHByb2plY3ROYW1lKTtcbn1cblxuLy9jcmVhdGUgcHJvamVjdCBmb2xkZXIgaW4gc2lkZWJhciB3aGVuIG5ldyBwcm9qZWN0IGlzIGNyZWF0ZWRcbmNvbnN0IGNyZWF0ZVByb2plY3RGb2xkZXIgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcbiAgICBjb25zdCBjdXJyZW50UCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXAnKTtcbiAgICBjb25zdCBzaWRlQmFyTWFpbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhci1tYWluLWxpc3QnKTtcblxuXG4gICAgLy8gbGV0IGN1cnJlbnRQcm9qZWN0TmFtZSA9IExPQ0FMLmtleSgwKTtcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdE5hbWUpO1xuXG5cbiAgICBjb25zdCBycyA9IGdldENvbXB1dGVkU3R5bGUocm9vdCk7XG4gICAgY29uc3QgZGFya0JsdWUgPSBycy5nZXRQcm9wZXJ0eVZhbHVlKCctLWRhcmstYmx1ZScpO1xuXG4gICAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgLy8gbmV3UHJvai5jbGFzc0xpc3QuYWRkKCd0ZXh0Jyk7XG4gICAgbmV3UHJvai5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZScpO1xuICAgIG5ld1Byb2oudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBuZXdQcm9qLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGRhcmtCbHVlO1xuICAgIGN1cnJlbnRQLmFwcGVuZENoaWxkKG5ld1Byb2opO1xufVxuXG4vL2FkZCBjbGljayBjb3VudCB0byBzZXNzaW9uIHN0b3JhZ2UgdG8gdHJhY2tcbmNvbnN0IGFkZENsaWNrQ291bnQgPSAoY2xpY2tDb3VudCwgcHJvamVjdE5hbWUpID0+IHtcbiAgICBsZXQgZGF0YSA9IFNFU1NJT04uZ2V0SXRlbShwcm9qZWN0TmFtZSk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coU0VTU0lPTi5nZXRJdGVtKHByb2plY3ROYW1lKSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFNFU1NJT04pO1xuICAgIHJldHVybiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShgJHtwcm9qZWN0TmFtZX1gLCBjbGlja0NvdW50KTtcbn1cblxuLy8gbG9hZCBpbiBkZWZhdWx0IHBhZ2UgKHVzaW5nIGRlZmF1bHRhcnJheWxpc3QpXG5jb25zdCBsb2FkRGVmYXVsdFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgZCA9IGNyZWF0ZURlZmF1bHRBcnJheUxpc3QoKTtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdE5hbWUgPSAnbXlQcm9qZWN0JztcbiAgICAvLyBMT0NBTC5zZXRJdGVtKCdteVByb2plY3QnLCBgJHtKU09OLnN0cmluZ2lmeShkKX1gKTtcbiAgICByZXR1cm4gZ2V0TmFtZUFuZERhdGUoZCwgZGVmYXVsdFByb2plY3ROYW1lKTtcbn1cblxuLy9MT0FEIFBBR0VcbmNvbnN0IGxvYWRQYWdlID0gKCgpICA9PiBET01Mb2FkZWQobG9hZERlZmF1bHRQYWdlLCBsb2FkU2Vzc2lvblN0b3JhZ2VQYWdlKSkoKTtcblxuXG5leHBvcnQge1xuICAgIC8vIGRlbGV0ZUJ0bkxpc3RlbmVyLCBcbiAgICBleHBhbmRCdG5MaXN0ZW5lcixcbiAgICBpdGVtRWRpdGFibGUsXG4gICAgaWZDaGVja2VkLFxuICAgIGNoZWNrTG9jYWxTdG9yYWdlLFxuICAgIGNsZWFyQWxsSXRlbXNET01cbn0iLCJjb25zdCBET01Mb2FkZWQgPSAoYSwgYykgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGUpID0+IHtcbiAgICAgICAgLy9nZXQgY3VycmVudGwsIGxhdGVzdCBwcm9qZWN0IGZyb20gbG9jYWwgc3RvcmFnZSBhbmQgcGFzcyBpbiBwcm9qZWN0bmFtZSB0byBsb2Fkc2Vzc2lvblxuICAgICAgICBjb25zdCBjdXJyZW50UHJvak5hbWUgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmtleSgwKTtcbiAgICAgICAgY29uc3QgcHJvaiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvak5hbWUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHByb2opKTtcbiAgICAgICAgLy9jaGVjayBmb3IgcHJvamVjdE5hbWUgZnJvbSBzaWRldGFiICh3aGF0ZXZlciBwcm9qZWN0IGlzIGhpZ2hsaWdodGVkKVxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMCA/IGEoKSA6IGMoY3VycmVudFByb2pOYW1lKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERPTUxvYWRlZDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9