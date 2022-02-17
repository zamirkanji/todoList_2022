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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black-color: black;\n    --font-weight: 300;\n    --border-test: 2px solid yellow;\n    --dark-blue: #476a7a;\n    --dark-grey: #29363886;\n    --light-blue: #2C5364;\n    --closetowhite: #6d9eb3;\n    --redOrange: rgb(255, 68, 11);\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing: border-box;\n    font-weight: var(--font-weight);\n}\n\nhtml {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: black;\n}\n\n.text {\n    color: var(--closetowhite);\n    /* color: whitesmoke; */\n    /* text-align: center; */\n}\n\n.main-content {\n    min-height: 100%;\n    margin: 0;\n    padding: 15px;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 15px;\n}\n\n/* main sidebar */\n.main-sidebar {\n    /* flex: .1; */\n    min-height: 300px;\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    padding: 15px;\n    /* background-color: rgb(55, 66, 73); */\n    background-color: var(--dark-grey);\n    border-radius: 10px;\n}\n\n\n.sidebar-title  {\n    margin: 0;\n    padding: 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    /* align-items: space-between; */\n    justify-content: space-between;\n    /* align-items: center; */\n    /* background-color: var(--dark-grey); */\n    border-radius: 5px;\n    /* transition: all 1s ease; */\n}\n\n/* .material-icons {\n    text-align: left;\n    font-size: 40px;\n    color: var(--closetowhite);\n    flex: .15;\n} */\n\n#sidebar-title-text {\n    /* flex: .85; */\n    text-align: center;\n    color: black;\n    /* font-size: 28px; */\n    font-weight: var(--font-weight);\n    letter-spacing: 1.5px;\n}\n\n.sidebar-project-list {\n    flex: 1;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    /* border-radius: 5px; */\n    /* background-color: blue; */\n}\n\n.sidebar-main-list {\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    /* color: rgb(55, 66, 73); */\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    gap: 10px;\n    height: 100%;\n    \n}\n\n.sidebar-list-item {\n    margin: 0;\n    padding: 0;\n    /* padding: 8px; */\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    /* background-color: var(--dark-grey); */\n    color: #a3a3a3;\n    font-size: 18px;\n    font-size: 1.25rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n/* ul.sidebar-list-item {\n    \n} */\n\nul.sidebar-list-item > li {\n    text-indent: -5px;\n}\n\nul.sidebar-list-item > li::before {\n    content: \"- \";\n    color: black;\n    text-indent: -5px;\n}\n\n#current-p {\n    /* background-color: var(--dark-grey); */\n    /* gap: 10px; */\n    color: white;\n    font-size: 1.5rem;\n}\n\n.projectName {\n    margin: 0 0 0 10px;\n    color: black;\n    font-size: 1rem;\n    text-align: center;\n    letter-spacing: 1.5px;\n    padding: 10px;\n    border-radius: 10px;\n    height: 100%;\n}\n\n.sidebar-create-new-btn {\n    flex: .25;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    /* background-color: violet; */\n}\n\n/* .create-new-btn {\n    \n    \n} */\n\n/* ************************* main body ************************** */\n.main-body {\n    margin: 0;\n    padding: 0;\n    height: 1000px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.main-header {\n    margin: 0;\n    padding: 0 15px 0 15px;\n    flex: .30;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--dark-grey);\n    \n    border-radius: 10px;\n}\n\n/* .menu-icon{\n    width: 30px;\n    height: 30px;\n}\n#menu-icon {\n    background-image: url('./img/menu.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100%;\n} */\n\n#projectNameHeader {\n    color: var(--closetowhite);\n    /* color: black; */\n    letter-spacing: 1.5px;\n    font-size: 1.75rem;\n}\n\n#header-text {\n    color: white;\n    letter-spacing: 1px;\n    font-size: 1.25rem;\n}\n\n\n\n\n/* main list content */\n.main-list-content {\n    flex: 2.70;\n    /* height: 85%; */\n    display: flex;\n    flex-direction: column;\n    /* border: 10px solid var(--black-color); */\n    /* margin: 10px; */\n    background-color: var(--dark-grey);\n    margin: 0;\n    padding: 0;\n    border-radius: 10px;\n    gap: 10px;\n}\n\n.list-container {\n    flex: 2.25;\n    margin: 0;\n    padding: 25px 15px 15px 15px;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    /* background-color: var(--dark-grey); */\n    border-radius: 5px;\n    gap: 25px;\n}\n\n.ordered-item-list {\n    flex: 2;\n    /* height: 100%;\n    width: 100%; */\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 15px;\n}\n\n\n\n\n\n\n\n/* *************************** FORM SUBMISSION FOR LIST ITEMS ************************* */\n.list-item-options {\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    margin: 0;\n    padding: 0;\n    /* border: 1px solid violet; */\n}\n\n.form-main {\n    margin: 0;\n    padding: 0;\n    /* justify-content: space-between; */\n    gap: 15px;\n    width: 75%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.input-item-container {\n    margin: 0;\n    padding: 0;\n    flex: 1;\n    display: flex;\n    /* justify-content: flex-start; */\n    align-items: center;\n    align-self: space-evenly;\n}\n\n#create-new-item-btn {\n    /* width: 50px; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.25rem;\n    align-self: flex-start;\n}\n\n.label-new-item {\n    margin: 0;\n    padding: 0;\n    /* width: 0px; */\n    width: 0px;\n    /* text-align: center;\n    flex: .1; */\n}\n\n#input-new-item {\n    margin: 0;\n    /* padding: 0; */\n    border-radius: 5px;\n    border: none;\n    flex: 2;\n    background-color: whitesmoke;\n    opacity: .8;\n}\n\n#input-new-item:checked {\n    border: none;\n}\n\n#submit-btn {\n    flex: .5;\n}\n\n#cancel-btn {\n    flex: .5;\n}\n\n#clear-all-items-btn {\n    background-color: var(--redOrange);\n    color: black;\n}\n\n\n/* ***************************** EACH ITEM ******************************** */\n.list-item {\n    margin: 0;\n    padding: 0 15px 0 15px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--dark-blue);\n    height: 50px;\n    color: var(--black-color);\n    letter-spacing: 1px;\n    display: flex;\n    border-radius: 10px;\n    z-index: 1;\n    transition: all .5s ease;\n}\n\n.list-input-container {\n    flex: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item-text {\n    margin: 0;\n    padding: 0;\n    color: black;\n    letter-spacing: 1.5px;\n    flex: 1.75;\n    height: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    /* z-index: 20; */\n    /* font-size: 1.75rem; */\n}\n\n\n#item-checkbox {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: var(--dark-grey);\n    -webkit-appearance: none;\n\tborder: none;\n\tbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);\n\tpadding: 7px;\n\tborder-radius: 5px;\n}\n\n#item-checkbox:checked {\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);\n\tcolor: var(--redOrange);  \n    content: '\\2714';\n\tfont-size: 14px; \n}\n\n#item-checkbox:checked::after {\n    color: var(--redOrange);\n    content: '\\2714';\n\tfont-size: 14px;\n}\n\ninput[type=text] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    box-sizing: border-box;\n    border: none;\n    background-color: var(--dark-blue);\n    font-size: 1.25rem;\n    color: black;\n    z-index: 20;\n    /* z-index: 15; */\n    /* font-size: 100%; */\n}\n\n.item-text::placeholder {  \n    color: black;\n}\ninput::-webkit-input-placeholder {\n    color: black;\n}\n\n.item-options-container {\n    flex: .25;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    /* padding: 10px; */\n    /* height: 100%; */\n    gap: 10px;\n    background-color: var(--dark-blue);\n    border-radius: 0 10px 10px 0;\n}\n\n.item-delete-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n\n#delete-item {\n    border: none;\n    border-radius: 10px;\n    background-color: var(--dark-blue);\n}\n\n\n.delete-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n    color: white;\n}\n\n.expand-icon-btn {\n    background-color: var(--dark-blue);\n    border: none;\n    flex: 1;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.expand-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n}\n\n\n\n\n.item-details-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n#item-details {\n    border: none;\n    border-radius: 10px;\n}\n\n.item-date-created {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n\n.expand-container {\n    margin: 0;\n    padding: 0 8px 0 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--closetowhite);\n    height: 150px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    border-radius: 5px;\n    font-size: 85%;\n}\n\n.details-container {\n    flex: .5;\n    /* border: 1px solid var(--closetowhite); */\n    display: flex;\n    justify-content: center;\n    background-color: var(--dark-blue);\n    /* align-items: center; */\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.details-title {\n    color: var(--closetowhite);\n    font-size: 100%;\n}\n\n\n/* ******************** general ********************** */\n\n.display {\n    display: none;\n    animation: ease-in 1s;\n}\n\n.btn {\n    background-color: rgb(55, 66, 73);\n    background-color: black;\n    border: none;\n    border-radius: 10px;\n    color: var(--closetowhite);\n    padding: 10px;\n    width: 100px;\n    height: 50px;\n    font-size: 1rem;\n    letter-spacing: 1.5px;\n    font-weight: var(--font-weight);\n}\n\n.create-new-btn {\n    background-color: black;\n    color: var(--closetowhite);\n}\n\n.item-btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 5px;\n    /* width: 50px; */\n    width: 65%;\n    height: 65%;\n    font-size: 75%;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --black-color: black;\n    --font-weight: 300;\n    --border-test: 2px solid yellow;\n    --dark-blue: #476a7a;\n    --dark-grey: #29363886;\n    --light-blue: #2C5364;\n    --closetowhite: #6d9eb3;\n    --redOrange: rgb(255, 68, 11);\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing: border-box;\n    font-weight: var(--font-weight);\n}\n\nhtml {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: black;\n}\n\n.text {\n    color: var(--closetowhite);\n    /* color: whitesmoke; */\n    /* text-align: center; */\n}\n\n.main-content {\n    min-height: 100%;\n    margin: 0;\n    padding: 15px;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 15px;\n}\n\n/* main sidebar */\n.main-sidebar {\n    /* flex: .1; */\n    min-height: 300px;\n    display: flex;\n    justify-content: center;\n    margin: 0;\n    padding: 15px;\n    /* background-color: rgb(55, 66, 73); */\n    background-color: var(--dark-grey);\n    border-radius: 10px;\n}\n\n\n.sidebar-title  {\n    margin: 0;\n    padding: 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    /* align-items: space-between; */\n    justify-content: space-between;\n    /* align-items: center; */\n    /* background-color: var(--dark-grey); */\n    border-radius: 5px;\n    /* transition: all 1s ease; */\n}\n\n/* .material-icons {\n    text-align: left;\n    font-size: 40px;\n    color: var(--closetowhite);\n    flex: .15;\n} */\n\n#sidebar-title-text {\n    /* flex: .85; */\n    text-align: center;\n    color: black;\n    /* font-size: 28px; */\n    font-weight: var(--font-weight);\n    letter-spacing: 1.5px;\n}\n\n.sidebar-project-list {\n    flex: 1;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    /* border-radius: 5px; */\n    /* background-color: blue; */\n}\n\n.sidebar-main-list {\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    /* color: rgb(55, 66, 73); */\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    gap: 10px;\n    height: 100%;\n    \n}\n\n.sidebar-list-item {\n    margin: 0;\n    padding: 0;\n    /* padding: 8px; */\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    /* background-color: var(--dark-grey); */\n    color: #a3a3a3;\n    font-size: 18px;\n    font-size: 1.25rem;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n/* ul.sidebar-list-item {\n    \n} */\n\nul.sidebar-list-item > li {\n    text-indent: -5px;\n}\n\nul.sidebar-list-item > li::before {\n    content: \"- \";\n    color: black;\n    text-indent: -5px;\n}\n\n#current-p {\n    /* background-color: var(--dark-grey); */\n    /* gap: 10px; */\n    color: white;\n    font-size: 1.5rem;\n}\n\n.projectName {\n    margin: 0 0 0 10px;\n    color: black;\n    font-size: 1rem;\n    text-align: center;\n    letter-spacing: 1.5px;\n    padding: 10px;\n    border-radius: 10px;\n    height: 100%;\n}\n\n.sidebar-create-new-btn {\n    flex: .25;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    /* background-color: violet; */\n}\n\n/* .create-new-btn {\n    \n    \n} */\n\n/* ************************* main body ************************** */\n.main-body {\n    margin: 0;\n    padding: 0;\n    height: 1000px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.main-header {\n    margin: 0;\n    padding: 0 15px 0 15px;\n    flex: .30;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--dark-grey);\n    \n    border-radius: 10px;\n}\n\n/* .menu-icon{\n    width: 30px;\n    height: 30px;\n}\n#menu-icon {\n    background-image: url('./img/menu.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100%;\n} */\n\n#projectNameHeader {\n    color: var(--closetowhite);\n    /* color: black; */\n    letter-spacing: 1.5px;\n    font-size: 1.75rem;\n}\n\n#header-text {\n    color: white;\n    letter-spacing: 1px;\n    font-size: 1.25rem;\n}\n\n\n\n\n/* main list content */\n.main-list-content {\n    flex: 2.70;\n    /* height: 85%; */\n    display: flex;\n    flex-direction: column;\n    /* border: 10px solid var(--black-color); */\n    /* margin: 10px; */\n    background-color: var(--dark-grey);\n    margin: 0;\n    padding: 0;\n    border-radius: 10px;\n    gap: 10px;\n}\n\n.list-container {\n    flex: 2.25;\n    margin: 0;\n    padding: 25px 15px 15px 15px;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    /* background-color: var(--dark-grey); */\n    border-radius: 5px;\n    gap: 25px;\n}\n\n.ordered-item-list {\n    flex: 2;\n    /* height: 100%;\n    width: 100%; */\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 15px;\n}\n\n\n\n\n\n\n\n/* *************************** FORM SUBMISSION FOR LIST ITEMS ************************* */\n.list-item-options {\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    margin: 0;\n    padding: 0;\n    /* border: 1px solid violet; */\n}\n\n.form-main {\n    margin: 0;\n    padding: 0;\n    /* justify-content: space-between; */\n    gap: 15px;\n    width: 75%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.input-item-container {\n    margin: 0;\n    padding: 0;\n    flex: 1;\n    display: flex;\n    /* justify-content: flex-start; */\n    align-items: center;\n    align-self: space-evenly;\n}\n\n#create-new-item-btn {\n    /* width: 50px; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.25rem;\n    align-self: flex-start;\n}\n\n.label-new-item {\n    margin: 0;\n    padding: 0;\n    /* width: 0px; */\n    width: 0px;\n    /* text-align: center;\n    flex: .1; */\n}\n\n#input-new-item {\n    margin: 0;\n    /* padding: 0; */\n    border-radius: 5px;\n    border: none;\n    flex: 2;\n    background-color: whitesmoke;\n    opacity: .8;\n}\n\n#input-new-item:checked {\n    border: none;\n}\n\n#submit-btn {\n    flex: .5;\n}\n\n#cancel-btn {\n    flex: .5;\n}\n\n#clear-all-items-btn {\n    background-color: var(--redOrange);\n    color: black;\n}\n\n\n/* ***************************** EACH ITEM ******************************** */\n.list-item {\n    margin: 0;\n    padding: 0 15px 0 15px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--dark-blue);\n    height: 50px;\n    color: var(--black-color);\n    letter-spacing: 1px;\n    display: flex;\n    border-radius: 10px;\n    z-index: 1;\n    transition: all .5s ease;\n}\n\n.list-input-container {\n    flex: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item-text {\n    margin: 0;\n    padding: 0;\n    color: black;\n    letter-spacing: 1.5px;\n    flex: 1.75;\n    height: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    /* z-index: 20; */\n    /* font-size: 1.75rem; */\n}\n\n\n#item-checkbox {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: var(--dark-grey);\n    -webkit-appearance: none;\n\tborder: none;\n\tbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);\n\tpadding: 7px;\n\tborder-radius: 5px;\n}\n\n#item-checkbox:checked {\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);\n\tcolor: var(--redOrange);  \n    content: '\\2714';\n\tfont-size: 14px; \n}\n\n#item-checkbox:checked::after {\n    color: var(--redOrange);\n    content: '\\2714';\n\tfont-size: 14px;\n}\n\ninput[type=text] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    box-sizing: border-box;\n    border: none;\n    background-color: var(--dark-blue);\n    font-size: 1.25rem;\n    color: black;\n    z-index: 20;\n    /* z-index: 15; */\n    /* font-size: 100%; */\n}\n\n.item-text::placeholder {  \n    color: black;\n}\ninput::-webkit-input-placeholder {\n    color: black;\n}\n\n.item-options-container {\n    flex: .25;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    /* padding: 10px; */\n    /* height: 100%; */\n    gap: 10px;\n    background-color: var(--dark-blue);\n    border-radius: 0 10px 10px 0;\n}\n\n.item-delete-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n\n#delete-item {\n    border: none;\n    border-radius: 10px;\n    background-color: var(--dark-blue);\n}\n\n\n.delete-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url('./img/delete.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n    color: white;\n}\n\n.expand-icon-btn {\n    background-color: var(--dark-blue);\n    border: none;\n    flex: 1;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.expand-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url('./img/chevron-down\\ \\(1\\).png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n}\n\n\n\n\n.item-details-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n#item-details {\n    border: none;\n    border-radius: 10px;\n}\n\n.item-date-created {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n\n.expand-container {\n    margin: 0;\n    padding: 0 8px 0 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--closetowhite);\n    height: 150px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    border-radius: 5px;\n    font-size: 85%;\n}\n\n.details-container {\n    flex: .5;\n    /* border: 1px solid var(--closetowhite); */\n    display: flex;\n    justify-content: center;\n    background-color: var(--dark-blue);\n    /* align-items: center; */\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.details-title {\n    color: var(--closetowhite);\n    font-size: 100%;\n}\n\n\n/* ******************** general ********************** */\n\n.display {\n    display: none;\n    animation: ease-in 1s;\n}\n\n.btn {\n    background-color: rgb(55, 66, 73);\n    background-color: black;\n    border: none;\n    border-radius: 10px;\n    color: var(--closetowhite);\n    padding: 10px;\n    width: 100px;\n    height: 50px;\n    font-size: 1rem;\n    letter-spacing: 1.5px;\n    font-weight: var(--font-weight);\n}\n\n.create-new-btn {\n    background-color: black;\n    color: var(--closetowhite);\n}\n\n.item-btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 5px;\n    /* width: 50px; */\n    width: 65%;\n    height: 65%;\n    font-size: 75%;\n}\n\n\n\n"],"sourceRoot":""}]);
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
    const inputItemContainer = document.querySelector('.input-item-container');
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
        addDisplayNone(inputItemContainer);
        return;
    }
//remove display NONE
    const showForm = () => {
        removeDisplayNone(inputItemContainer);
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
        if (e.target.id === 'delete-item') {
            console.log('delete item test');
        } else {
            return
        }
        if (e.target.id === 'item-checkbox') {
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

    // console.log(itemDeleteBtnsAll);

    itemDeleteBtnsAll.forEach(b => {
        b.addEventListener('click', e => {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();

            // current 
            const listItemText = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[2].value;
            console.log(listItemText);
            
            if (e.target.classList.contains('delete-icon')) {
                const answer = confirm('are you sure you want to delete this item?');
                if (answer === true) {
                    //delete item from local storage 
                    //either reload page and create all items again or also delete from DOM until page is reloaded next 
                    let currentProjectArrayFromStorage = window.localStorage.getItem(currentProjectName);
                    currentProjectArrayFromStorage = JSON.parse(currentProjectArrayFromStorage);
                    let item; 
                    
                    currentProjectArrayFromStorage = currentProjectArrayFromStorage.filter(o => {
                        console.log(o.name);
                        return o.name != listItemText;
                    })

                    e.target.remove();
                    // console.log(currentProjectArrayFromStorage);
                } else {
                    return
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
    clearAllBtn.addEventListener('click', (e) => {
        //get current project (Whatever is clicked on sidebar)
        const getCurrentProjectName = window.localStorage.key(0);
        const ol = document.querySelector('.ordered-item-list');
        const confirmDeleteAll = confirm('Would you like to clear all items?');
        if (confirmDeleteAll) {
            (0,___WEBPACK_IMPORTED_MODULE_0__.clearAllItemsDOM)(ol);
            //remove ALL ITEMS from arr/local storage
            let currentProjArr = window.localStorage.getItem(getCurrentProjectName);
            console.log(JSON.parse(currentProjArr));
            currentProjArr = JSON.parse(currentProjArr);
            currentProjArr.length = 0;
            console.log(currentProjArr);
            window.localStorage.setItem(`${getCurrentProjectName}`, JSON.stringify(currentProjArr));
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
    const cancelResetBtn = document.querySelector('#cancel-btn');

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
    cancelResetBtn.addEventListener('click', () => {
        d.dontShowForm();
        form.reset();
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
    const inputItemContainer = document.querySelector('.input-item-container');

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
            d.removeDisplayNone(inputItemContainer);
            // d.showForm();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFNBQVMsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxVQUFVLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxRQUFRLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFh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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRzRDO0FBQ1k7QUFDUDs7QUFFakQsb0JBQW9CLG9EQUFjOzs7QUFHbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxzQkFBc0I7QUFDakUsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1VFckJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vc3JjL2J0bkxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vc3JjL2RlZmF1bHRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL3NyYy9sb2FkUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvZGVsZXRlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL2NoZXZyb24tZG93biAoMSkucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1ibGFjay1jb2xvcjogYmxhY2s7XFxuICAgIC0tZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgLS1ib3JkZXItdGVzdDogMnB4IHNvbGlkIHllbGxvdztcXG4gICAgLS1kYXJrLWJsdWU6ICM0NzZhN2E7XFxuICAgIC0tZGFyay1ncmV5OiAjMjkzNjM4ODY7XFxuICAgIC0tbGlnaHQtYmx1ZTogIzJDNTM2NDtcXG4gICAgLS1jbG9zZXRvd2hpdGU6ICM2ZDllYjM7XFxuICAgIC0tcmVkT3JhbmdlOiByZ2IoMjU1LCA2OCwgMTEpO1xcbn1cXG5cXG4qIHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodCk7XFxufVxcblxcbmh0bWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi50ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIC8qIGNvbG9yOiB3aGl0ZXNtb2tlOyAqL1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4vKiBtYWluIHNpZGViYXIgKi9cXG4ubWFpbi1zaWRlYmFyIHtcXG4gICAgLyogZmxleDogLjE7ICovXFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUsIDY2LCA3Myk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcblxcbi5zaWRlYmFyLXRpdGxlICB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47ICovXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAvKiB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTsgKi9cXG59XFxuXFxuLyogLm1hdGVyaWFsLWljb25zIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgZmxleDogLjE1O1xcbn0gKi9cXG5cXG4jc2lkZWJhci10aXRsZS10ZXh0IHtcXG4gICAgLyogZmxleDogLjg1OyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgLyogZm9udC1zaXplOiAyOHB4OyAqL1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3QtbGlzdCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xcbn1cXG5cXG4uc2lkZWJhci1tYWluLWxpc3Qge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgLyogY29sb3I6IHJnYig1NSwgNjYsIDczKTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgXFxufVxcblxcbi5zaWRlYmFyLWxpc3QtaXRlbSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogcGFkZGluZzogOHB4OyAqL1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTsgKi9cXG4gICAgY29sb3I6ICNhM2EzYTM7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi8qIHVsLnNpZGViYXItbGlzdC1pdGVtIHtcXG4gICAgXFxufSAqL1xcblxcbnVsLnNpZGViYXItbGlzdC1pdGVtID4gbGkge1xcbiAgICB0ZXh0LWluZGVudDogLTVweDtcXG59XFxuXFxudWwuc2lkZWJhci1saXN0LWl0ZW0gPiBsaTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIi0gXFxcIjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWluZGVudDogLTVweDtcXG59XFxuXFxuI2N1cnJlbnQtcCB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7ICovXFxuICAgIC8qIGdhcDogMTBweDsgKi9cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnByb2plY3ROYW1lIHtcXG4gICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNpZGViYXItY3JlYXRlLW5ldy1idG4ge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2aW9sZXQ7ICovXFxufVxcblxcbi8qIC5jcmVhdGUtbmV3LWJ0biB7XFxuICAgIFxcbiAgICBcXG59ICovXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKiBtYWluIGJvZHkgKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG4ubWFpbi1ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDE1cHggMCAxNXB4O1xcbiAgICBmbGV4OiAuMzA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi8qIC5tZW51LWljb257XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcbiNtZW51LWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL21lbnUucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn0gKi9cXG5cXG4jcHJvamVjdE5hbWVIZWFkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgLyogY29sb3I6IGJsYWNrOyAqL1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG59XFxuXFxuI2hlYWRlci10ZXh0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcblxcblxcblxcbi8qIG1haW4gbGlzdCBjb250ZW50ICovXFxuLm1haW4tbGlzdC1jb250ZW50IHtcXG4gICAgZmxleDogMi43MDtcXG4gICAgLyogaGVpZ2h0OiA4NSU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGJvcmRlcjogMTBweCBzb2xpZCB2YXIoLS1ibGFjay1jb2xvcik7ICovXFxuICAgIC8qIG1hcmdpbjogMTBweDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5saXN0LWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDIuMjU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMjVweCAxNXB4IDE1cHggMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4ub3JkZXJlZC1pdGVtLWxpc3Qge1xcbiAgICBmbGV4OiAyO1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlOyAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcblxcblxcblxcblxcblxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKiBGT1JNIFNVQk1JU1NJT04gRk9SIExJU1QgSVRFTVMgKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi5saXN0LWl0ZW0tb3B0aW9ucyB7XFxuICAgIGZsZXg6IC4yNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmlvbGV0OyAqL1xcbn1cXG5cXG4uZm9ybS1tYWluIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLmlucHV0LWl0ZW0tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuI2NyZWF0ZS1uZXctaXRlbS1idG4ge1xcbiAgICAvKiB3aWR0aDogNTBweDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLmxhYmVsLW5ldy1pdGVtIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiB3aWR0aDogMHB4OyAqL1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsZXg6IC4xOyAqL1xcbn1cXG5cXG4jaW5wdXQtbmV3LWl0ZW0ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIC8qIHBhZGRpbmc6IDA7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmbGV4OiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBvcGFjaXR5OiAuODtcXG59XFxuXFxuI2lucHV0LW5ldy1pdGVtOmNoZWNrZWQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNzdWJtaXQtYnRuIHtcXG4gICAgZmxleDogLjU7XFxufVxcblxcbiNjYW5jZWwtYnRuIHtcXG4gICAgZmxleDogLjU7XFxufVxcblxcbiNjbGVhci1hbGwtaXRlbXMtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkT3JhbmdlKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBFQUNIIElURU0gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cXG4ubGlzdC1pdGVtIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDE1cHggMCAxNXB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2U7XFxufVxcblxcbi5saXN0LWlucHV0LWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaXRlbS10ZXh0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgZmxleDogMS43NTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIHotaW5kZXg6IDIwOyAqL1xcbiAgICAvKiBmb250LXNpemU6IDEuNzVyZW07ICovXFxufVxcblxcblxcbiNpdGVtLWNoZWNrYm94IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIGluc2V0IDBweCAtMTVweCAxMHB4IC0xMnB4IHJnYmEoMCwwLDAsMC4wNSk7XFxuXFx0cGFkZGluZzogN3B4O1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2l0ZW0tY2hlY2tib3g6Y2hlY2tlZCB7XFxuXFx0Ym94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4wNSksIGluc2V0IDBweCAtMTVweCAxMHB4IC0xMnB4IHJnYmEoMCwwLDAsMC4wNSksIGluc2V0IDE1cHggMTBweCAtMTJweCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XFxuXFx0Y29sb3I6IHZhcigtLXJlZE9yYW5nZSk7ICBcXG4gICAgY29udGVudDogJ1xcXFwyNzE0JztcXG5cXHRmb250LXNpemU6IDE0cHg7IFxcbn1cXG5cXG4jaXRlbS1jaGVja2JveDpjaGVja2VkOjphZnRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWRPcmFuZ2UpO1xcbiAgICBjb250ZW50OiAnXFxcXDI3MTQnO1xcblxcdGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICAgIG1hcmdpbjogOHB4IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHotaW5kZXg6IDIwO1xcbiAgICAvKiB6LWluZGV4OiAxNTsgKi9cXG4gICAgLyogZm9udC1zaXplOiAxMDAlOyAqL1xcbn1cXG5cXG4uaXRlbS10ZXh0OjpwbGFjZWhvbGRlciB7ICBcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLml0ZW0tb3B0aW9ucy1jb250YWluZXIge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xcbn1cXG5cXG4uaXRlbS1kZWxldGUtYnRuIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuI2RlbGV0ZS1pdGVtIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbn1cXG5cXG5cXG4uZGVsZXRlLWljb24ge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZXhwYW5kLWljb24tYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmbGV4OiAxO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmV4cGFuZC1pY29uIHtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XFxufVxcblxcblxcblxcblxcbi5pdGVtLWRldGFpbHMtYnRuIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7ICovXFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuI2l0ZW0tZGV0YWlscyB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLml0ZW0tZGF0ZS1jcmVhdGVkIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7ICovXFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmV4cGFuZC1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogODUlO1xcbn1cXG5cXG4uZGV0YWlscy1jb250YWluZXIge1xcbiAgICBmbGV4OiAuNTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xvc2V0b3doaXRlKTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRldGFpbHMtdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKiBnZW5lcmFsICoqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4uZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFuaW1hdGlvbjogZWFzZS1pbiAxcztcXG59XFxuXFxuLmJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSwgNjYsIDczKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0KTtcXG59XFxuXFxuLmNyZWF0ZS1uZXctYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbn1cXG5cXG4uaXRlbS1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIC8qIHdpZHRoOiA1MHB4OyAqL1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBoZWlnaHQ6IDY1JTtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxufVxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndl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QWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFFBQVE7SUFDUiwyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7OztBQUdBLHdEQUF3RDs7QUFFeEQ7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJsYWNrLWNvbG9yOiBibGFjaztcXG4gICAgLS1mb250LXdlaWdodDogMzAwO1xcbiAgICAtLWJvcmRlci10ZXN0OiAycHggc29saWQgeWVsbG93O1xcbiAgICAtLWRhcmstYmx1ZTogIzQ3NmE3YTtcXG4gICAgLS1kYXJrLWdyZXk6ICMyOTM2Mzg4NjtcXG4gICAgLS1saWdodC1ibHVlOiAjMkM1MzY0O1xcbiAgICAtLWNsb3NldG93aGl0ZTogIzZkOWViMztcXG4gICAgLS1yZWRPcmFuZ2U6IHJnYigyNTUsIDY4LCAxMSk7XFxufVxcblxcbioge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0KTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgLyogY29sb3I6IHdoaXRlc21va2U7ICovXFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi8qIG1haW4gc2lkZWJhciAqL1xcbi5tYWluLXNpZGViYXIge1xcbiAgICAvKiBmbGV4OiAuMTsgKi9cXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig1NSwgNjYsIDczKTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuXFxuLnNpZGViYXItdGl0bGUgIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC8qIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlOyAqL1xcbn1cXG5cXG4vKiAubWF0ZXJpYWwtaWNvbnMge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBmbGV4OiAuMTU7XFxufSAqL1xcblxcbiNzaWRlYmFyLXRpdGxlLXRleHQge1xcbiAgICAvKiBmbGV4OiAuODU7ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICAvKiBmb250LXNpemU6IDI4cHg7ICovXFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodCk7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdC1saXN0IHtcXG4gICAgZmxleDogMTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXFxufVxcblxcbi5zaWRlYmFyLW1haW4tbGlzdCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAvKiBjb2xvcjogcmdiKDU1LCA2NiwgNzMpOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBcXG59XFxuXFxuLnNpZGViYXItbGlzdC1pdGVtIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiBwYWRkaW5nOiA4cHg7ICovXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpOyAqL1xcbiAgICBjb2xvcjogI2EzYTNhMztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLyogdWwuc2lkZWJhci1saXN0LWl0ZW0ge1xcbiAgICBcXG59ICovXFxuXFxudWwuc2lkZWJhci1saXN0LWl0ZW0gPiBsaSB7XFxuICAgIHRleHQtaW5kZW50OiAtNXB4O1xcbn1cXG5cXG51bC5zaWRlYmFyLWxpc3QtaXRlbSA+IGxpOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiLSBcXFwiO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtaW5kZW50OiAtNXB4O1xcbn1cXG5cXG4jY3VycmVudC1wIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTsgKi9cXG4gICAgLyogZ2FwOiAxMHB4OyAqL1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ucHJvamVjdE5hbWUge1xcbiAgICBtYXJnaW46IDAgMCAwIDEwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc2lkZWJhci1jcmVhdGUtbmV3LWJ0biB7XFxuICAgIGZsZXg6IC4yNTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZpb2xldDsgKi9cXG59XFxuXFxuLyogLmNyZWF0ZS1uZXctYnRuIHtcXG4gICAgXFxuICAgIFxcbn0gKi9cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqIG1haW4gYm9keSAqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi5tYWluLWJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ubWFpbi1oZWFkZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgMTVweCAwIDE1cHg7XFxuICAgIGZsZXg6IC4zMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogLm1lbnUtaWNvbntcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuI21lbnUtaWNvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvbWVudS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufSAqL1xcblxcbiNwcm9qZWN0TmFtZUhlYWRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICAvKiBjb2xvcjogYmxhY2s7ICovXFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cXG4jaGVhZGVyLXRleHQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuXFxuXFxuXFxuLyogbWFpbiBsaXN0IGNvbnRlbnQgKi9cXG4ubWFpbi1saXN0LWNvbnRlbnQge1xcbiAgICBmbGV4OiAyLjcwO1xcbiAgICAvKiBoZWlnaHQ6IDg1JTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogYm9yZGVyOiAxMHB4IHNvbGlkIHZhcigtLWJsYWNrLWNvbG9yKTsgKi9cXG4gICAgLyogbWFyZ2luOiAxMHB4OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgZmxleDogMi4yNTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAyNXB4IDE1cHggMTVweCAxNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBnYXA6IDI1cHg7XFxufVxcblxcbi5vcmRlcmVkLWl0ZW0tbGlzdCB7XFxuICAgIGZsZXg6IDI7XFxuICAgIC8qIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7ICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqIEZPUk0gU1VCTUlTU0lPTiBGT1IgTElTVCBJVEVNUyAqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuLmxpc3QtaXRlbS1vcHRpb25zIHtcXG4gICAgZmxleDogLjI1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2aW9sZXQ7ICovXFxufVxcblxcbi5mb3JtLW1haW4ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uaW5wdXQtaXRlbS1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgKi9cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4jY3JlYXRlLW5ldy1pdGVtLWJ0biB7XFxuICAgIC8qIHdpZHRoOiA1MHB4OyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubGFiZWwtbmV3LWl0ZW0ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIHdpZHRoOiAwcHg7ICovXFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZmxleDogLjE7ICovXFxufVxcblxcbiNpbnB1dC1uZXctaXRlbSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogcGFkZGluZzogMDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZsZXg6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIG9wYWNpdHk6IC44O1xcbn1cXG5cXG4jaW5wdXQtbmV3LWl0ZW06Y2hlY2tlZCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI3N1Ym1pdC1idG4ge1xcbiAgICBmbGV4OiAuNTtcXG59XFxuXFxuI2NhbmNlbC1idG4ge1xcbiAgICBmbGV4OiAuNTtcXG59XFxuXFxuI2NsZWFyLWFsbC1pdGVtcy1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWRPcmFuZ2UpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEVBQ0ggSVRFTSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xcbi5saXN0LWl0ZW0ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgMTVweCAwIDE1cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcXG59XFxuXFxuLmxpc3QtaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZmxleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pdGVtLXRleHQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBmbGV4OiAxLjc1O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogei1pbmRleDogMjA7ICovXFxuICAgIC8qIGZvbnQtc2l6ZTogMS43NXJlbTsgKi9cXG59XFxuXFxuXFxuI2l0ZW0tY2hlY2tib3gge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgaW5zZXQgMHB4IC0xNXB4IDEwcHggLTEycHggcmdiYSgwLDAsMCwwLjA1KTtcXG5cXHRwYWRkaW5nOiA3cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jaXRlbS1jaGVja2JveDpjaGVja2VkIHtcXG5cXHRib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLDAsMCwwLjA1KSwgaW5zZXQgMHB4IC0xNXB4IDEwcHggLTEycHggcmdiYSgwLDAsMCwwLjA1KSwgaW5zZXQgMTVweCAxMHB4IC0xMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcXG5cXHRjb2xvcjogdmFyKC0tcmVkT3JhbmdlKTsgIFxcbiAgICBjb250ZW50OiAnXFxcXDI3MTQnO1xcblxcdGZvbnQtc2l6ZTogMTRweDsgXFxufVxcblxcbiNpdGVtLWNoZWNrYm94OmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgY29sb3I6IHZhcigtLXJlZE9yYW5nZSk7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMjcxNCc7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgbWFyZ2luOiA4cHggMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgei1pbmRleDogMjA7XFxuICAgIC8qIHotaW5kZXg6IDE1OyAqL1xcbiAgICAvKiBmb250LXNpemU6IDEwMCU7ICovXFxufVxcblxcbi5pdGVtLXRleHQ6OnBsYWNlaG9sZGVyIHsgIFxcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaXRlbS1vcHRpb25zLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IC4yNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XFxufVxcblxcbi5pdGVtLWRlbGV0ZS1idG4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4jZGVsZXRlLWl0ZW0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcblxcblxcbi5kZWxldGUtaWNvbiB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvZGVsZXRlLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZXhwYW5kLWljb24tYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmbGV4OiAxO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmV4cGFuZC1pY29uIHtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9jaGV2cm9uLWRvd25cXFxcIFxcXFwoMVxcXFwpLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcXG59XFxuXFxuXFxuXFxuXFxuLml0ZW0tZGV0YWlscy1idG4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jaXRlbS1kZXRhaWxzIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaXRlbS1kYXRlLWNyZWF0ZWQge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZXhwYW5kLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCA4cHggMCA4cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiA4NSU7XFxufVxcblxcbi5kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IC41O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbG9zZXRvd2hpdGUpOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZGV0YWlscy10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqIGdlbmVyYWwgKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi5kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYW5pbWF0aW9uOiBlYXNlLWluIDFzO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCA2NiwgNzMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQpO1xcbn1cXG5cXG4uY3JlYXRlLW5ldy1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxufVxcblxcbi5pdGVtLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgLyogd2lkdGg6IDUwcHg7ICovXFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIGhlaWdodDogNjUlO1xcbiAgICBmb250LXNpemU6IDc1JTtcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGRlbGV0ZUJ0bkxpc3RlbmVyLCBleHBhbmRCdG5MaXN0ZW5lciwgaXRlbUVkaXRhYmxlLCBpZkNoZWNrZWQgfSBmcm9tIFwiLi9idG5MaXN0ZW5lcnNcIjtcbmltcG9ydCB7IExpc3RJdGVtIH0gZnJvbSBcIi4vYXBwXCI7XG5cblxuXG4vL2NyZWF0ZSBidG5zIGZvciBzdWJtaXQgYW5kIGNhbmNlbCB3aGVuIGVkaXRpbmcgaXRlbVxuY29uc3QgY3JlYXRlU3VibWl0Q2FuY2VsQnRucyA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS10ZXh0Jyk7XG5cblxuICAgIGNvbnN0IHN1Ym1pdFRleHRDaGFuZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjYW5jZWxUZXh0Q2hhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG59XG5cblxuXG4vL2NyZWF0ZSBpdGVtIGluIEhUTUwsIGFkZCB0byBET01cbmNvbnN0IGNyZWF0ZUl0ZW1IVE1MID0gKG4sIGRjLCBwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IG9yZGVyZWRJdGVtTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcmVkLWl0ZW0tbGlzdCcpO1xuICAgIC8vY3JlYXRlIGl0ZW0gb3B0aW9ucyBjb250YWluZXJcbiAgICBjb25zdCBjcmVhdGVOZXdJdGVtT3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyZWF0ZU5ld0l0ZW1PcHRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tb3B0aW9ucy1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGxpc3RJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsaXN0LWlucHV0LWNvbnRhaW5lcicpO1xuXG5cbiAgICAvL2FkZCBERUxFVEUgQnRuL0ljb24gdG8gaXRlbVxuICAgIGNvbnN0IGNyZWF0ZUl0ZW1EZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVhdGVJdGVtRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGVsZXRlLWJ0bicpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ0bi5pZCA9ICdkZWxldGUtaXRlbSc7XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWljb24nKTtcbiAgICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgY3JlYXRlSXRlbURlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG5cbiAgICAvL2FkZCBFWFBBTkQgQnRuL0ljb24gdG8gaXRlbVxuICAgIGNvbnN0IGNyZWF0ZUV4cGFuZEljb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjcmVhdGVFeHBhbmRJY29uQnRuLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1pY29uLWJ0bicpO1xuICAgIGNyZWF0ZUV4cGFuZEljb25CdG4udHlwZSA9ICdidXR0b24nO1xuICAgIGNyZWF0ZUV4cGFuZEljb25CdG4ubmFtZSA9ICdleHBhbmQtaWNvbi1idG4nO1xuICAgIGNvbnN0IGNyZWF0ZUV4cGFuZEljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVhdGVFeHBhbmRJY29uRGl2LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1pY29uJyk7XG4gICAgY3JlYXRlRXhwYW5kSWNvbkJ0bi5hcHBlbmRDaGlsZChjcmVhdGVFeHBhbmRJY29uRGl2KTtcblxuXG4gICAgLy9hZGQgY2hlY2tib3hcbiAgICBjb25zdCBjaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjaGVja2JveExhYmVsLmh0bWxGb3IgPSAnaXRlbS1jaGVja2JveCc7XG4gICAgLy8gY2hlY2tib3hMYWJlbC5mb3IgPSAnaXRlbS1jaGVja2JveCc7XG4gICAgY2hlY2tib3hMYWJlbC5pZCA9ICdpdGVtLWNoZWNrYm94LWxhYmVsJztcbiAgICBjb25zdCBjcmVhdGVDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY3JlYXRlQ2hlY2tib3guaWQgPSAnaXRlbS1jaGVja2JveCc7XG4gICAgY3JlYXRlQ2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY3JlYXRlQ2hlY2tib3gubmFtZSA9ICdpdGVtLWNoZWNrYm94JztcbiAgICAvL2FkZCBpbXBvcnRhbnQgSWNvblxuXG4gICAgLy9hcHBlbmQgaWNvbiwgZGVsZXRlIGJ0biB0byBsaXN0IGl0ZW1cbiAgICBjcmVhdGVOZXdJdGVtT3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJdGVtRGVsZXRlQnRuKTtcbiAgICBjcmVhdGVOZXdJdGVtT3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFeHBhbmRJY29uQnRuKTtcblxuXG4gICAgLy9uZXcgbGlzdCBpdGVtIFxuICAgIGNvbnN0IG5ld0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBuZXdMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0nKTtcblxuXG4gICAgY29uc3QgaW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dFRleHQuY2xhc3NMaXN0LmFkZCgnaXRlbS10ZXh0Jyk7XG4gICAgaW5wdXRUZXh0LmRpc2FibGVkID0gJ2Rpc2FibGVkJztcbiAgICBpbnB1dFRleHQudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dFRleHQuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICAgIGlucHV0VGV4dC52YWx1ZSA9IG47XG4gICAgXG4gICAgLy9hZGQgaXRlbSBvcHRpb25zIGNvbnRhaW5lclxuICAgIG5ld0xpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RJbnB1dENvbnRhaW5lcik7XG4gICAgbGlzdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94TGFiZWwpO1xuICAgIGxpc3RJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDaGVja2JveCk7XG4gICAgbGlzdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0VGV4dCk7XG4gICAgbmV3TGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlTmV3SXRlbU9wdGlvbnNDb250YWluZXIpO1xuICAgIC8vYWRkIG5ldyBsaXN0IGl0ZW0gdG8gb3JkZXJlZCBsaXN0XG4gICAgb3JkZXJlZEl0ZW1MaXN0LmFwcGVuZENoaWxkKG5ld0xpc3RJdGVtKTtcblxuXG5cbiAgICAvL3JldHVybiBkZWxldGUgYnRuLCBleHBhbmQgYnRuIGxpc3RlbmVyIG9uY2UgaXRlbSBpcyBjcmVhdGVkIFxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWVIZWFkZXInKS50ZXh0Q29udGVudCA9PT0gJ215UHJvamVjdCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhID0gZGVsZXRlQnRuTGlzdGVuZXIocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgY29uc3QgYiA9IGV4cGFuZEJ0bkxpc3RlbmVyKCk7XG4gICAgICAgICAgICAvLyBjb25zdCBjID0gaXRlbUVkaXRhYmxlKCk7XG4gICAgICAgICAgICBjb25zdCBkID0gaWZDaGVja2VkKCk7XG4gICAgICAgICAgICAvLyByZXR1cm4gYSAmJiBiO1xuICAgICAgICAgICAgcmV0dXJuIGEgJiYgYiAmJiBkO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSXRlbUhUTUw7IiwiY29uc3QgaXRlbUxpc3RBcnIgPSBbXTtcblxuY29uc3QgY2xlYXJTdG9yYWdlID0gKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XG4gICAgfVxuICAgIFxufVxuXG4vL3JlbW92ZSBkaXNwbGF5IChub25lKSBmcm9tIGVsZW1lbnQgXG5jb25zdCByZW1vdmVEaXNwbGF5Tm9uZSA9IChkKSA9PiB7XG4gICAgcmV0dXJuIGQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheScpO1xufVxuXG4vL2FkZCBkaXNwbGF5IChub25lKSB0byBlbGVtZW50IFxuY29uc3QgYWRkRGlzcGxheU5vbmUgPSAoZCkgPT4ge1xuICAgIHJldHVybiBkLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbn1cblxuLy9jbGVhciBhbGwgbGlzdCBpdGVtcyBmcm9tIHRoZSBET01cbmNvbnN0IGNsZWFyQWxsSXRlbXNET00gPSAob2wpID0+IHtcbiAgICB3aGlsZSAob2wuZmlyc3RDaGlsZCkge1xuICAgICAgICBvbC5yZW1vdmVDaGlsZChvbC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuXG5jb25zdCBnZXREYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IG15RGF0ZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgcmV0dXJuIG15RGF0ZTtcbn1cbmNvbnN0IGdldERhdGVBbmRUaW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGdldERhdGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG15RGF0ZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgICAgIHJldHVybiBteURhdGU7XG4gICAgfVxuICAgIGNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgICAgICByZXR1cm4gZ2V0VGltZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0RGF0ZSxcbiAgICAgICAgZ2V0VGltZVxuICAgIH1cbn1cblxuXG5jb25zdCBkaXNwbGF5SGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dE5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtbmV3LWl0ZW0nKTtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWJ0bicpO1xuICAgIGNvbnN0IGxhYmVsTmV3SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbC1uZXctaXRlbScpO1xuICAgIGNvbnN0IGlucHV0SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1pdGVtLWNvbnRhaW5lcicpO1xuLy9yZW1vdmUgZGlzcGxheSAobm9uZSkgZnJvbSBlbGVtZW50IFxuICAgIGNvbnN0IHJlbW92ZURpc3BsYXlOb25lID0gKGQpID0+IHtcbiAgICAgICAgcmV0dXJuIGQuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheScpO1xuICAgIH1cblxuLy9hZGQgZGlzcGxheSAobm9uZSkgdG8gZWxlbWVudCBcbiAgICBjb25zdCBhZGREaXNwbGF5Tm9uZSA9IChkKSA9PiB7XG4gICAgICAgIHJldHVybiBkLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbiAgICB9XG4vL2FkZCBiYWNrIGRpc3BsYXkgTk9ORSAgICBcbiAgICBjb25zdCBkb250U2hvd0Zvcm0gPSAoKSA9PiB7XG4gICAgICAgIGFkZERpc3BsYXlOb25lKGlucHV0SXRlbUNvbnRhaW5lcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4vL3JlbW92ZSBkaXNwbGF5IE5PTkVcbiAgICBjb25zdCBzaG93Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgcmVtb3ZlRGlzcGxheU5vbmUoaW5wdXRJdGVtQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZW1vdmVEaXNwbGF5Tm9uZSxcbiAgICAgICAgYWRkRGlzcGxheU5vbmUsXG4gICAgICAgIGRvbnRTaG93Rm9ybSxcbiAgICAgICAgc2hvd0Zvcm1cbiAgICB9XG59XG5cblxuY2xhc3MgTGlzdEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGVDcmVhdGVkLCB0aW1lU3RhbXApIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9ICd0ZXN0JztcbiAgICAgICAgdGhpcy5kYXRlQ3JlYXRlZCA9IGRhdGVDcmVhdGVkXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpbWVTdGFtcCA9IHRpbWVTdGFtcDtcbiAgICB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG59XG5cbmNvbnNvbGUubG9nKExpc3RJdGVtLnByb3RvdHlwZSk7XG5cbmNsYXNzIERPTUl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgaXRlbUxpc3RBcnIsXG4gICAgZ2V0RGF0ZSxcbiAgICBMaXN0SXRlbSxcbiAgICBnZXREYXRlQW5kVGltZSxcbiAgICBkaXNwbGF5SGFuZGxlcixcbiAgICBjbGVhclN0b3JhZ2UsXG4gICAgcmVtb3ZlRGlzcGxheU5vbmUsXG4gICAgYWRkRGlzcGxheU5vbmUsXG4gICAgY2xlYXJBbGxJdGVtc0RPTVxufSIsImltcG9ydCB7IG1kaUNvbnNvbGVOZXR3b3JrIH0gZnJvbSBcIkBtZGkvanNcIjtcbmltcG9ydCB7IGNoZWNrTG9jYWxTdG9yYWdlLCBjbGVhckFsbEl0ZW1zRE9NIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IGdldERhdGVBbmRUaW1lLCBMaXN0SXRlbSB9IGZyb20gXCIuL2FwcFwiO1xuXG5jb25zdCBkYXRlQW5kVGltZSA9IGdldERhdGVBbmRUaW1lKCk7XG5cblxuLy90ZXN0IHRoaXMgKEV2ZW50IGRlbGVnYXRpb24pXG5jb25zdCBkb2N1bWVudEV2ZW50TGlzdGVuZXIgPSAoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ2RlbGV0ZS1pdGVtJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZSBpdGVtIHRlc3QnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ2l0ZW0tY2hlY2tib3gnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXRlbSBjaGVja2JveCB0ZXN0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH0sIGZhbHNlKVxuICAgIHJldHVybjtcbn0pKCk7XG5cbi8vZXZlbnQgbGlzdGVuZXIgdG8gZGVsZXRlIGl0ZW0gKGNhbGxlZCBhZnRlciBpdGVtIGlzIGNyZWF0ZWQpXG5jb25zdCBkZWxldGVCdG5MaXN0ZW5lciA9IChwcm9qZWN0TmFtZSA9ICdteVByb2plY3QnKSA9PiB7XG4gICAgY29uc3Qgb3JkZXJlZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJlZC1pdGVtLWxpc3QnKTtcbiAgICAvLyBjb25zdCBpdGVtT3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtcy1vcHRpb25zLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGl0ZW1EZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1kZWxldGUtYnRuJyk7XG4gICAgY29uc3QgaXRlbURlbGV0ZUJ0bnNBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbS1kZWxldGUtYnRuJyk7XG4gICAgY29uc3QgbGlzdEl0ZW1EZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2RlbGV0ZS1pdGVtJyk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3ROYW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5rZXkoMCk7XG4gICAgY29uc3QgY3VycmVudFByb2pPYmplY3QgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3ROYW1lKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGl0ZW1EZWxldGVCdG5zQWxsKTtcblxuICAgIGl0ZW1EZWxldGVCdG5zQWxsLmZvckVhY2goYiA9PiB7XG4gICAgICAgIGIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICAvLyBjdXJyZW50IFxuICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW1UZXh0ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMl0udmFsdWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0SXRlbVRleHQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtaWNvbicpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5zd2VyID0gY29uZmlybSgnYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/Jyk7XG4gICAgICAgICAgICAgICAgaWYgKGFuc3dlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvL2RlbGV0ZSBpdGVtIGZyb20gbG9jYWwgc3RvcmFnZSBcbiAgICAgICAgICAgICAgICAgICAgLy9laXRoZXIgcmVsb2FkIHBhZ2UgYW5kIGNyZWF0ZSBhbGwgaXRlbXMgYWdhaW4gb3IgYWxzbyBkZWxldGUgZnJvbSBET00gdW50aWwgcGFnZSBpcyByZWxvYWRlZCBuZXh0IFxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFByb2plY3RBcnJheUZyb21TdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0QXJyYXlGcm9tU3RvcmFnZSA9IEpTT04ucGFyc2UoY3VycmVudFByb2plY3RBcnJheUZyb21TdG9yYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW07IFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFByb2plY3RBcnJheUZyb21TdG9yYWdlID0gY3VycmVudFByb2plY3RBcnJheUZyb21TdG9yYWdlLmZpbHRlcihvID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG8ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5uYW1lICE9IGxpc3RJdGVtVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3RBcnJheUZyb21TdG9yYWdlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH0pXG59O1xuXG5cbmNvbnN0IGNsZWFyQWxsQnRuTGlzdGVuZXIgPSAoKCkgPT4ge1xuICAgIC8vb25jZSBjbGVhcmVkLCBzdGFydCBuZXcgcHJvamVjdD9cbiAgICAvL29yIGp1c3QgYSBuXG4gICAgY29uc3QgY2xlYXJBbGxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXItYWxsLWl0ZW1zLWJ0bicpO1xuICAgIGNsZWFyQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgLy9nZXQgY3VycmVudCBwcm9qZWN0IChXaGF0ZXZlciBpcyBjbGlja2VkIG9uIHNpZGViYXIpXG4gICAgICAgIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0TmFtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2Uua2V5KDApO1xuICAgICAgICBjb25zdCBvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcmVkLWl0ZW0tbGlzdCcpO1xuICAgICAgICBjb25zdCBjb25maXJtRGVsZXRlQWxsID0gY29uZmlybSgnV291bGQgeW91IGxpa2UgdG8gY2xlYXIgYWxsIGl0ZW1zPycpO1xuICAgICAgICBpZiAoY29uZmlybURlbGV0ZUFsbCkge1xuICAgICAgICAgICAgY2xlYXJBbGxJdGVtc0RPTShvbCk7XG4gICAgICAgICAgICAvL3JlbW92ZSBBTEwgSVRFTVMgZnJvbSBhcnIvbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgbGV0IGN1cnJlbnRQcm9qQXJyID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGdldEN1cnJlbnRQcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGN1cnJlbnRQcm9qQXJyKSk7XG4gICAgICAgICAgICBjdXJyZW50UHJvakFyciA9IEpTT04ucGFyc2UoY3VycmVudFByb2pBcnIpO1xuICAgICAgICAgICAgY3VycmVudFByb2pBcnIubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qQXJyKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtnZXRDdXJyZW50UHJvamVjdE5hbWV9YCwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2pBcnIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL3dvdWxkIHlvdSBsaWtlIHRvIGNsZWFyIGFsbCBpdGVtcyBhbmQgc3RhcnQgb3ZlciBvciBkZWxldGUgcHJvamVjdFxuICAgICAgICAvL2RlbGV0ZSBhbGwgY2hpbGRyZW4gdW5kZXIgb3JkZXJlZCBpdGVtIGxpc3QgXG4gICAgICAgIFxuICAgIH0sIGZhbHNlKTtcbn0pKCk7XG5cblxuXG4vL2V4cGFuZCBidG4gbGlzdGVuZXIgKGNhbGxlZCBhZnRlciBpdGVtIGlzIGNyZWF0ZWQpXG5jb25zdCBleHBhbmRCdG5MaXN0ZW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBleHBhbmRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4cGFuZC1pY29uJyk7XG4gICAgY29uc3QgZ29TaG9wcGluZ0l0ZW1UZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvLXNob3BwaW5nJyk7XG4gICAgY29uc3QgaXRlbU9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1vcHRpb25zLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGl0ZW1UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tdGV4dCcpO1xuICAgIGV4cGFuZEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLCBlLnRhcmdldCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gZ29TaG9wcGluZ0l0ZW1UZXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3QtaXRlbScpO1xuICAgICAgICBnb1Nob3BwaW5nSXRlbVRlc3QuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kLWNvbnRhaW5lcicpO1xuICAgICAgICAvLyBpdGVtT3B0aW9ucy5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgaXRlbXdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbXdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtJyk7XG4gICAgICAgIGl0ZW13cmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1UZXh0KTtcbiAgICAgICAgaXRlbXdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbU9wdGlvbnMpO1xuXG4gICAgICAgIGdvU2hvcHBpbmdJdGVtVGVzdC5hcHBlbmRDaGlsZChpdGVtd3JhcHBlcik7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWNvbnRhaW5lcicpO1xuICAgICAgICBnb1Nob3BwaW5nSXRlbVRlc3QuYXBwZW5kQ2hpbGQoZGV0YWlscyk7ICBcbiAgICB9LCBmYWxzZSk7XG59O1xuXG5jb25zdCBkZWxldGVBbGxQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAvL2dvaW5nIHRvIGRlbGV0ZSBmcm9tIGxvY2FsIHN0b3JhZ2Vcbn1cblxuXG5cbmNvbnN0IGlmQ2hlY2tlZCA9IChlKSA9PiB7XG4gICAgLy9nZXQgaXRlbSB0aGF0IGNvcnJlc3BvbmRzIHdpdGggdGhlIGNoZWNrYm94IFxuICAgIC8vY2hhbmdlIGNoZWNrZWQ6IGZhbHNlIHRvIHRydWUgaW4gbG9jYWwgc3RvcmFnZVxuICAgIC8vd2hlbiBwYWdlIGlzIGxvYWRlZCBhbmQgRE9NIGl0ZW0gaXMgY3JlYXRlZCwgbWFrZSBzdXJlIGNoZWNrYm94IHN0YXlzIFxuICAgIGNvbnN0IHRpbWVTdGFtcCA9IGRhdGVBbmRUaW1lLmdldFRpbWUoKTtcbiAgICBjb25zb2xlLmxvZyh0aW1lU3RhbXApO1xuICAgIFxuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPWNoZWNrYm94Jyk7XG4gICAgLy8gY29uc3QgYWxsQ2hlY2tCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNpdGVtLWNoZWNrYm94Jyk7XG4gICAgLy8gY29uc29sZS5sb2coY2hlY2tib3gpO1xuICAgIC8vIGNvbnNvbGUubG9nKGFsbENoZWNrQm94ZXMpO1xuICAgIGNoZWNrYm94ZXMuZm9yRWFjaChib3ggPT4ge1xuICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2hhbmdlJyk7XG4gICAgICAgICAgICAvL3RoaXMgaW5wdXQgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoZSBsaXN0IGl0ZW0gc29tZWhvd1xuICAgICAgICAgICAgLy9jb3VsZCBtYWtlIHRoZSBsaXN0IGl0ZW0gdGhlIHNhbWUgaW5wdXRcbiAgICAgICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpcyBjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgLy9hZGQgZGF0ZWNoZWNrZWRvZmYgdG8gbGlzdEl0ZW0gb2JqZWN0XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKVxuICAgIH0pXG59O1xuXG4vLyBjb25zdCBjYWxsTGlzdGVuZXJzID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IGEgPSBkZWxldGVCdG5MaXN0ZW5lcigpO1xuLy8gICAgIC8vIGNvbnN0IGIgPSBleHBhbmRCdG5MaXN0ZW5lcigpO1xuLy8gICAgIGNvbnN0IGMgPSBpZkNoZWNrZWQoKTtcbi8vICAgICByZXR1cm4gKCkgPT4ge1xuLy8gICAgICAgICBhLCBcbi8vICAgICAgICAgY1xuLy8gICAgIH1cbi8vIH1cbi8vIGNvbnN0IGNhbGxMaXN0ZW5lciA9IGNhbGxMaXN0ZW5lcnMoKTtcbi8vIGNhbGxMaXN0ZW5lcigpO1xuXG5cbmV4cG9ydCB7XG4gICAgZGVsZXRlQnRuTGlzdGVuZXIsXG4gICAgZXhwYW5kQnRuTGlzdGVuZXIsXG4gICAgY2xlYXJBbGxCdG5MaXN0ZW5lcixcbiAgICBpZkNoZWNrZWQsXG4gICAgZGF0ZUFuZFRpbWVcbn0iLCJpbXBvcnQgeyBMaXN0SXRlbSwgZ2V0RGF0ZSB9IGZyb20gXCIuL2FwcFwiXG5cbmNvbnN0IGNyZWF0ZURlZmF1bHRBcnJheUxpc3QgPSAoKSA9PiB7XG4gICAgY29uc3Qgb25lID0gbmV3IExpc3RJdGVtKCdEbyB0aGUgZGlzaGVzJywgJ09uIHRpbWUhJywgZ2V0RGF0ZSgpKTtcbiAgICBjb25zdCB0d28gPSBuZXcgTGlzdEl0ZW0oJ0NoYW5nZSBjYXJcXCdzIG9pbCcsICdPbiB0aW1lIScsIGdldERhdGUoKSk7XG4gICAgY29uc3QgdGhyZWUgPSBuZXcgTGlzdEl0ZW0oJ1dhbGsgdGhlIERvZycsICdPbiB0aW1lIScsIGdldERhdGUoKSk7XG4gICAgY29uc3QgZm91ciA9IG5ldyBMaXN0SXRlbSgnRm9sZCB0aGUgbGF1bmRyeScsICdPbiB0aW1lIScsIGdldERhdGUoKSk7XG4gICAgY29uc3QgZml2ZSA9IG5ldyBMaXN0SXRlbSgnQ2FsbCB0aGUgYmFuaycsICdPbiB0aW1lIScsIGdldERhdGUoKSk7XG5cbiAgICBjb25zdCBkZWZhdWx0QXJyYXlMaXN0ID0gW1xuICAgICAgICBvbmUsXG4gICAgICAgIHR3bywgXG4gICAgICAgIHRocmVlLCBcbiAgICAgICAgZm91cixcbiAgICAgICAgZml2ZVxuICAgIF1cbiAgICByZXR1cm4gZGVmYXVsdEFycmF5TGlzdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGVmYXVsdEFycmF5TGlzdDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBET01Mb2FkZWQgZnJvbSAnLi9sb2FkUGFnZSc7XG5pbXBvcnQgbWVudUljb24gZnJvbSAnLi9pbWcvbWVudS5wbmcnO1xuaW1wb3J0IGV4cGFuZCBmcm9tICcuL2ltZy9ub3VuLWV4cGFuZC0xMTgxNzQ3LnBuZyc7XG5pbXBvcnQgeyBtZGlDaGV2cm9uRG93biwgbWRpQ29uc29sZUxpbmUsIG1kaUNvbnRyb2xsZXJDbGFzc2ljLCBtZGlXaW5kb3dTaHV0dGVyIH0gZnJvbSAnQG1kaS9qcyc7XG5pbXBvcnQgeyBnZXREYXRlLCBpdGVtTGlzdEFyciwgTGlzdEl0ZW0sIGdldERhdGVBbmRUaW1lLCBkaXNwbGF5SGFuZGxlciwgY2xlYXJTdG9yYWdlLCBjbGVhckFsbEl0ZW1zRE9NLCBhZGREaXNwbGF5Tm9uZSwgcmVtb3ZlRGlzcGxheU5vbmUgfSBmcm9tICcuL2FwcC5qcyc7XG5pbXBvcnQgY3JlYXRlRGVmYXVsdEFycmF5TGlzdCBmcm9tICcuL2RlZmF1bHRQcm9qZWN0JztcbmltcG9ydCBjcmVhdGVJdGVtSFRNTCBmcm9tICcuL0RPTSc7XG5pbXBvcnQge2RlbGV0ZUJ0bkxpc3RlbmVyLCBleHBhbmRCdG5MaXN0ZW5lciwgY2xlYXJBbGxCdG5MaXN0ZW5lciwgaWZDaGVja2VkLCBkYXRlQW5kVGltZSB9IGZyb20gJy4vYnRuTGlzdGVuZXJzJztcblxuY29uc3QgTE9DQUwgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuY29uc3QgU0VTU0lPTiA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZTtcblxuXG5jb25zdCBjbGVhckFsbFN0b3JhZ2UgPSBjbGVhclN0b3JhZ2UoKTtcbi8vIGNsZWFyQWxsU3RvcmFnZSgpO1xuXG5cbi8vbWFrZSBpdGVtIGVkaXRhYmxlIC0gXG4vL25lZWQgc3VibWl0IGFuZCBjYW5jZWwgYnRuIG9uY2UgZGJsIGNsaWNrZWRcbi8vaWYgc3VibWl0dGVkLCBzYXZlIG5ldyB0ZXh0IGFzIHZhbHVlIG9mIGlucHV0IFxuY29uc3QgaXRlbUVkaXRhYmxlID0gKCkgPT4ge1xuICAgIGxldCBpdGVtRGJsQ2xpY2tlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS10ZXh0Jyk7XG4gICAgXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcblxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGl0ZW1EYmxDbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgLy8gY29uc3QgZGlzYWJsZWRJdGVtID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIGl0ZW0ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICBpZiAoaXRlbURibENsaWNrZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdGVtIGJlaW5nIGVkaXRlZCcpO1xuXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG4vL2dldCBuYW1lIGFuZCBkYXRlIGZyb20gaXRlbXMgYW5kIGNhbGwgY3JlYXRlSXRlbUhUTUwoKVxuY29uc3QgZ2V0TmFtZUFuZERhdGUgPSAoYXJyLCBwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGFyci5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgIGNvbnN0IG4gPSBvYmoubmFtZTtcbiAgICAgICAgY29uc3QgZGMgPSBvYmouZGF0ZUNyZWF0ZWQ7XG4gICAgICAgIC8vIGNvbnN0IGNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtSFRNTChuLCBkYywgcHJvamVjdE5hbWUpO1xuICAgICAgICAvLyByZXR1cm4gY3JlYXRlSXRlbSgpO1xuICAgICAgICBjcmVhdGVJdGVtSFRNTChuLCBkYywgcHJvamVjdE5hbWUpO1xuICAgIH0pXG4gICAgcmV0dXJuO1xufVxuXG5jb25zdCBjcmVhdGVJdGVtRnJvbUxvY2FsU3RvcmFnZSA9IChpdGVtLCBwcm9qZWN0TmFtZSkgPT4ge1xuICAgIC8vIGNvbnN0IGQgPSBjcmVhdGVEZWZhdWx0QXJyYXlMaXN0KCk7XG4gICAgLy8gY29uc29sZS5sb2coaXRlbSk7XG4gICAgY29uc3QgZCA9IGl0ZW07XG4gICAgICAgIGNvbnN0IG4gPSBkLm5hbWU7XG4gICAgICAgIGNvbnN0IGRjID0gZC5kYXRlQ3JlYXRlZDtcbiAgICAgICAgLy9sYXN0IGl0ZW0/XG4gICAgICAgIHJldHVybiBjcmVhdGVJdGVtSFRNTChuLCBkYywgcHJvamVjdE5hbWUpO1xufVxuXG4vL2NoZWNrIGxvY2FsIHN0b3JhZ2UgdG8gc2VlIGlmIHByb2plY3QgYWxyZWFkeSBleGlzdHNcbmNvbnN0IGNoZWNrTG9jYWxTdG9yYWdlID0gKGNsaWNrQ291bnQsIHByb2plY3ROYW1lLCBpdGVtKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEV4aXN0cyA9IExPQ0FMLmxlbmd0aCA+IDA7XG4gICAgcmV0dXJuIHByb2plY3RFeGlzdHMgPyB0cnVlIDogZmFsc2U7XG59XG5cblxuLy8gY29uc3QgZGVsZXRlQ2hpbGRFbGVtZW50cyA9IChwYXJlbnRFbCkgPT4ge1xuLy8gICAgIHJldHVybiAoKSA9PiB7XG4vLyAgICAgICAgIGlmICh0cnVlKSB7XG4vLyAgICAgICAgICAgICB3aGlsZSAocGFyZW50RWwuZmlyc3RDaGlsZCkge1xuLy8gICAgICAgICAgICAgICAgIHBhcmVudEVsLnJlbW92ZUNoaWxkKHBhcmVudEVsLmZpcnN0Q2hpbGQpO1xuLy8gICAgICAgICAgICAgfSAgIFxuLy8gICAgICAgICAgICAgLy9yZW1vdmUgZnJvbSBhcnIvbG9jYWwgc3RvcmFnZVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG5cblxuXG5cbmNvbnN0IGZpcnN0TGV0dGVyQ2FwcyA9ICgpID0+IHtcblxufVxuXG5cblxuXG5cblxuXG5cblxuXG4vL2xpc3RlbiBmb3IgZm9ybSBzdWJtaXNzaW9uIHRvIGFkZCBlYWNoIGl0ZW0gcDAtb3h6cjRcbi8vZm9ybSBzdWJibWlzc2lvbiBldmVudCBsaXN0ZW5lciAoY2FsbGVkIGFmdGVyIG5ldyBpdGVtIG9yIHByb2plY3QgYnRuIGlzIGNsaWNrZWQpXG5jb25zdCBmb3JtU3VibWlzc2lvbiA9IChjbGlja0NvdW50LCBwcm9qZWN0TmFtZSk9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLW1haW4nKTtcbiAgICBjb25zdCBjYW5jZWxSZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtYnRuJyk7XG5cbiAgICBjb25zdCBkID0gZGlzcGxheUhhbmRsZXIoKTtcbiAgICBjb25zb2xlLmxvZyhkKTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT4ge1xuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LW5ldy1pdGVtJykudmFsdWU7XG4gICAgICAgIC8vIGxldCBmaXJzdExldHRlciA9IGlucHV0VmFsdWUuc3BsaWNlKDAsIDEpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhmaXJzdExldHRlcik7XG4gICAgICAgIC8vIGlucHV0VmFsdWUuXG4gICAgICAgIC8vcmVtb3ZlIGZvcm0gZGlzcGxheVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vcmVtb3ZlIGRpc3BsYXkgKGFkZCBiYWNrIGRpc3BsYXk6IG5vbmUpXG4gICAgICAgIGQuZG9udFNob3dGb3JtKCk7IFxuICAgICAgICAvL2NsZWFyIGlucHV0IGZpZWxkIG9uIGZvcm0gU3VibWl0XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgLy9jcmVhdGUgbmV3IGxpc3QgaXRlbVxuICAgICAgICAvLyBjb25zdCBpdGVtID0gbmV3IExpc3RJdGVtKGAke2lucHV0VmFsdWV9YCwgZ2V0RGF0ZSgpKTtcbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBMaXN0SXRlbShgJHtpbnB1dFZhbHVlfWAsIGRhdGVBbmRUaW1lLmdldERhdGUoKSwgZGF0ZUFuZFRpbWUuZ2V0VGltZSgpKTtcbiAgICAgICAgXG4gICAgICAgIC8vY2hlY2sgaWYgTE9DQUwgU1RPUkFHRSBpcyBlbXB0eSBvciBub3QgXG4gICAgICAgIGlmKHByb2plY3ROYW1lID09ICdteVByb2plY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0TmFtZUFuZERhdGUoaXRlbSwgcHJvamVjdE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9qZWN0TG9jYWxTdG9yYWdlKGNsaWNrQ291bnQsIHByb2plY3ROYW1lLCBpdGVtKTtcbiAgICB9KVxuICAgIGNhbmNlbFJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkLmRvbnRTaG93Rm9ybSgpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgfSlcbn07XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vL2Z1bmN0aW9uIGZvciBJSUZFIGV2ZW50IGxpc3RlbmVycywgbmV3IGl0ZW0sIGNsZWFyIGFsbCwgYW5kIG5ldyBwcm9qZWN0XG5jb25zdCBtYWluRXZlbnRMaXN0ZW5lcnMgPSAoKCkgPT4ge1xuICAgIGxldCBjbGlja0NvdW50ID0gMDtcbiAgICBsZXQgcHJvamVjdE5hbWU7XG5cbiAgICBjb25zdCBkID0gZGlzcGxheUhhbmRsZXIoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkKTtcbiAgICBcbiAgICBjb25zdCBuZXdJdGVtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1uZXctaXRlbS1idG4nKTtcbiAgICBjb25zdCBpbnB1dE5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtbmV3LWl0ZW0nKTtcbiAgICBjb25zdCBsYWJlbE5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFiZWwtbmV3LWl0ZW0nKTtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWJ0bicpO1xuICAgIGNvbnN0IGNyZWF0ZU5ld0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtbmV3LWJ0bicpO1xuICAgIGNvbnN0IG9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyZWQtaXRlbS1saXN0Jyk7XG4gICAgY29uc3QgaW5wdXRJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWl0ZW0tY29udGFpbmVyJyk7XG5cbiAgICAvL2dldCByZXR1cm4gYm9vbGVhbiBvbiBpZiBwcm9qZWN0IGV4aXN0cyBpbiBsb2NhbCBzdG9yYWdlXG4gICAgY29uc3QgcHJvamVjdEV4aXN0cyA9IGNoZWNrTG9jYWxTdG9yYWdlKCk7XG4gICBcblxuICAgIC8vY3JlYXRlIG5ldyBwcm9qZWN0IEJ0biBsaXN0ZW5lclxuICAgIGNyZWF0ZU5ld0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QgbmV3IHByb2plY3QgYnRuJyk7XG5cbiAgICAgICAgaWYgKHByb2plY3RFeGlzdHMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vQ0xFQVIgSVRFTVMgQU5EIE5BTUVcbiAgICAgICAgICAgIGNsZWFyQWxsSXRlbXNET00ob2wpO1xuICAgICAgICAgICAgLy9jcmVhdGUgbmV3IHByb2plY3QgKG9iaikgaW5zaWRlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgIC8vY3VycmVudCBwcm9qIHdpbGwgYWx3YXlzIGJlIHdpbmRvdy5sb2NhbHN0b3JhZ2Uua2V5KDApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGlja0NvdW50Kys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjbGlja0NvdW50KTtcbiAgICAgICAgICAgIC8vYXNrIHVzZXIgdG8gbmFtZSBuZXcgcHJvamVjdFxuICAgICAgICAgICAgLy93aXBlIGRlZmF1bHQgbGlzdFxuICAgICAgICAgICAgLy9zdGFydCBuZXcgcHJvamVjdCB3aXRoIG5hbWUgZ2l2ZW4gKGtleSBuYW1lIGluIGxvY2FsIHN0b3JhZ2Ugb2JqKVxuICAgICAgICAgICAgcHJvamVjdE5hbWUgPSBwcm9tcHQoJ1BsZWFzZSBlbnRlciB0aGUgbmFtZSBvZiB5b3VyIHByb2plY3QnLCAnbXlQcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9jbGVhciBkZWZhdWx0IHByb2plY3QgZnJvbSBET00gXG4gICAgICAgICAgICAgICAgY2xlYXJBbGxJdGVtc0RPTShvbCk7XG4gICAgICAgICAgICAgICAgLy9hZGQgbmV3IHByb2plY3QgbmFtZSB0byB0b3Agb2YgcGFnZVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZUhlYWRlcicpLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICAgICAgICAgICAgLy9jcmVhdGUgbmV3IGZvbGRlciBpbiBjdXJyZW50IHByb2plY3QgbGlzdFxuICAgICAgICAgICAgICAgIGNyZWF0ZVByb2plY3RGb2xkZXIocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgICAgIC8vYWRkIGNsaWNrIGNvdW50IHRvIHNlc3Npb24gc3RvcmFnZVxuICAgICAgICAgICAgICAgIGFkZENsaWNrQ291bnQoY2xpY2tDb3VudCwgcHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgICAgIC8vc2hvdyB0aGUgZm9ybSBpbnB1dCBidXR0b25zXG4gICAgICAgICAgICAgICAgZC5zaG93Rm9ybSgpO1xuICAgICAgICAgICAgICAgIC8vcmV0dXJuIGZvcm0gc3VibWlzc2lvbiBsaXN0ZW5lclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtU3VibWlzc2lvbihjbGlja0NvdW50LCBwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy9jcmVhdGUgbmV3IEl0ZW0gQnRuIExpc3RlbmVyXG4gICAgbmV3SXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9yZW1vdmUgZGlzcGxheSBub25lIGZyb20gaW5wdXQgZm9ybSBpdGVtc1xuICAgICAgICBjb25zb2xlLmxvZygndGVzdCBuZXcgaXRlbScpO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWVIZWFkZXInKS50ZXh0Q29udGVudCA9PT0gJ215UHJvamVjdCcpIHtcbiAgICAgICAgICAgIGQuc2hvd0Zvcm0oKTtcbiAgICAgICAgICAgIHJldHVybiBmb3JtU3VibWlzc2lvbigwLCAnbXlQcm9qZWN0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvamVjdEV4aXN0cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy90aGlzIG5lZWRzIHRvIGJlIGZpeGVkXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IFNFU1NJT04ua2V5KDApO1xuICAgICAgICAgICAgbGV0IGdldENsaWNrQ291bnQgPSBTRVNTSU9OLmdldEl0ZW0oJ2hlbGxvJyk7XG4gICAgICAgICAgICBnZXRDbGlja0NvdW50Kys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhnZXRDbGlja0NvdW50KTtcbiAgICAgICAgICAgIGQucmVtb3ZlRGlzcGxheU5vbmUoaW5wdXRJdGVtQ29udGFpbmVyKTtcbiAgICAgICAgICAgIC8vIGQuc2hvd0Zvcm0oKTtcbiAgICAgICAgICAgIHJldHVybiBmb3JtU3VibWlzc2lvbihjbGlja0NvdW50LCBwcm9qZWN0TmFtZSk7ICAgXG4gICAgICAgIH1cbiAgICB9KVxuXG59KSgpO1xuXG5cblxuXG5cblxuLy8gY29uc3QgbmF2Q2xvc2VkID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IG1haW5TaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tc2lkZWJhcicpO1xuLy8gICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYm9keScpO1xuLy8gICAgIG1haW5Cb2R5LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4vLyAgICAgbWFpblNpZGViYXIuc3R5bGUuekluZGV4ID0gXCIwXCI7XG4vLyAgICAgbWFpblNpZGViYXIuc3R5bGUud2lkdGggPSBcIjBcIjtcbi8vIH1cbi8vIGNvbnN0IG5hdk9wZW4gPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgbWFpblNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1zaWRlYmFyJyk7XG4vLyAgICAgY29uc3QgbWFpbkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1ib2R5Jyk7XG4vLyAgICAgbWFpblNpZGViYXIuc3R5bGUuekluZGV4ID0gXCIxXCI7XG4vLyAgICAgbWFpblNpZGViYXIuc3R5bGUud2lkdGggPSBcIjI1MHB4XCI7XG4vLyAgICAgbWFpbkJvZHkuc3R5bGUub3BhY2l0eSA9ICcuNSc7XG4vLyB9XG5cbi8vZXZlbnQgbGlzdGVuZXIgdG8gb3BlbiB1cCBzaWRlIG1lbnUgYmFyXG4vLyBjb25zdCBtZW51RXZlbnRMaXN0ZW5lciA9ICgoKSA9PiB7XG4vLyAgICAgY29uc3QgbWVudUxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uJyk7XG4vLyAgICAgY29uc3QgbWFpblNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zaWRlYmFyJyk7XG4vLyAgICAgbWVudUxvZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4vLyAgICAgICAgIG5hdk9wZW4oKTtcbi8vICAgICB9KVxuLy8gfSkoKTtcblxuLy8gY29uc3QgbWVudUNsb3NlQnRuTGlzdGVuZXIgPSAoKCkgPT4ge1xuLy8gICAgIGNvbnN0IG1lbnVDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1zaWRlYmFyLWljb24nKTtcbi8vICAgICBjb25zdCBtYWluU2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNpZGViYXInKTtcbi8vICAgICBtZW51Q2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgICAgIC8vIGFkZERpc3BsYXlOb25lKG1haW5TaWRlYmFyKTtcbi8vICAgICAgICAgbmF2Q2xvc2VkKCk7XG4vLyAgICAgfSlcbi8vIH0pKCk7XG5cbi8vbmV3IGxpc3QgaXRlbSBidG4gbGlzdGVuZXIgXG4vLyBjb25zdCBuZXdJdGVtQnRuTGlzdGVuZXIgPSAoKCkgPT4ge1xuLy8gICAgIGxldCBjbGlja0NvdW50ID0gMDtcbi8vICAgICBjb25zdCBuZXdJdGVtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1uZXctaXRlbS1idG4nKTtcbi8vICAgICBjb25zdCBpbnB1dE5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtbmV3LWl0ZW0nKTtcbi8vICAgICBjb25zdCBsYWJlbE5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFiZWwtbmV3LWl0ZW0nKTtcbi8vICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWJ0bicpO1xuXG4gICAgXG5cbiAgICBcbi8vIH0pKCk7XG5cbi8vZGVsZXRlIGFsbCBjaGlsZCBlbGVtZW50cyBmdW5jdGlvblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy90aGUgdmFsdWUgb2YgdGhlIGtleSB2YWx1ZSBwYWlyIGlzIHRoZSBvYmplY3QgYXJyYXkgdGhhdCBpcyBjcmVhdGVkIGZvciBlYWNoIHByb2plY3QgKGxpc3Qgb2YgaXRlbXMpXG5jb25zdCBwcm9qZWN0TG9jYWxTdG9yYWdlID0gKGNsaWNrQ291bnQsIHByb2plY3ROYW1lLCBpdGVtKSA9PiB7XG4gICAgY29uc3QgZ2V0Q3VycmVudFByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lSGVhZGVyJykudGV4dENvbnRlbnQ7XG4gICAgLy8gY29uc29sZS5sb2coZ2V0Q3VycmVudFByb2plY3ROYW1lKTtcbiAgICBjb25zdCBsb2NhbFN0b3JhZ2VJdGVtTGlzdCA9IFtdO1xuICAgIC8vRklORCBQUk9KRUNUIE5BTUUgQU5EIFBVU0ggTEFTVCBJVEVNIElOVE8gSVQgXG5cbiAgICBjb25zdCBwcm9qZWN0RXhpc3RzID0gY2hlY2tMb2NhbFN0b3JhZ2UoKTtcblxuICAgIGlmIChwcm9qZWN0RXhpc3RzKSB7XG4gICAgICAgIGxldCBwcm9qID0gSlNPTi5wYXJzZShMT0NBTC5nZXRJdGVtKGdldEN1cnJlbnRQcm9qZWN0TmFtZSkpO1xuICAgICAgICAvLyBKU09OLnBhcnNlKHByb2opO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qKTtcbiAgICAgICAgcHJvai5wdXNoKGl0ZW0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtLCBnZXRDdXJyZW50UHJvamVjdE5hbWUpO1xuICAgICAgICAvLyBMT0NBTC5zZXRJdGVtKGAke3Byb2plY3ROYW1lfWAsIEpTT04uc3RyaW5naWZ5KHByb2opKTtcbiAgICAgICAgTE9DQUwuc2V0SXRlbShnZXRDdXJyZW50UHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2opKTtcbiAgICAgICAgLy8gY3JlYXRlSXRlbUZyb21Mb2NhbFN0b3JhZ2UoaXRlbSwgcHJvamVjdE5hbWUpO1xuICAgICAgICBjcmVhdGVJdGVtRnJvbUxvY2FsU3RvcmFnZShpdGVtLCBnZXRDdXJyZW50UHJvamVjdE5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZENsaWNrQ291bnQoY2xpY2tDb3VudCwgcHJvamVjdE5hbWUpO1xuICAgICAgICBcbiAgICAgICAgTE9DQUwuc2V0SXRlbShgJHtwcm9qZWN0TmFtZX1gLCBKU09OLnN0cmluZ2lmeShbaXRlbV0pKTtcbiAgICAgICAgY3JlYXRlSXRlbUZyb21Mb2NhbFN0b3JhZ2UoaXRlbSwgcHJvamVjdE5hbWUpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIExPQ0FMO1xufVxuXG4vL0pTT04ucGFyc2UgaXRlbSBsaXN0IGFyciwgYW5kIGNyZWF0ZSBodG1sIGVsZW1lbnQgZm9yIGVhY2ggaXRlbSBpbiBMT0NBTCBzdG9yYWdlIFxuY29uc3QgbG9hZFNlc3Npb25TdG9yYWdlUGFnZSA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZUhlYWRlcicpLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IHRvRG9MaXN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci10ZXh0Jyk7XG4gICAgLy9jcmVhdGUgZm9sZGVyIGluIHNpZGViYXIgb24gcGFnZSBsb2FkXG4gICAgLy93aWxsIG5lZWQgdG8gc2hvdyBhbGwgcHJvamVjdHMgaW4gc2lkZWJhclxuICAgIGFkZERpc3BsYXlOb25lKHRvRG9MaXN0SGVhZGVyKTtcbiAgICBjcmVhdGVQcm9qZWN0Rm9sZGVyKHByb2plY3ROYW1lKTtcblxuICAgIGxldCBpID0gTE9DQUwuZ2V0SXRlbShgJHtwcm9qZWN0TmFtZX1gKTtcbiAgICBpID0gSlNPTi5wYXJzZShpKTtcbiAgICByZXR1cm4gZ2V0TmFtZUFuZERhdGUoaSwgcHJvamVjdE5hbWUpO1xufVxuXG4vL2NyZWF0ZSBwcm9qZWN0IGZvbGRlciBpbiBzaWRlYmFyIHdoZW4gbmV3IHByb2plY3QgaXMgY3JlYXRlZFxuY29uc3QgY3JlYXRlUHJvamVjdEZvbGRlciA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xuICAgIGNvbnN0IGN1cnJlbnRQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtcCcpO1xuICAgIGNvbnN0IHNpZGVCYXJNYWluTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLW1haW4tbGlzdCcpO1xuXG5cbiAgICAvLyBsZXQgY3VycmVudFByb2plY3ROYW1lID0gTE9DQUwua2V5KDApO1xuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0TmFtZSk7XG5cblxuICAgIGNvbnN0IHJzID0gZ2V0Q29tcHV0ZWRTdHlsZShyb290KTtcbiAgICBjb25zdCBkYXJrQmx1ZSA9IHJzLmdldFByb3BlcnR5VmFsdWUoJy0tZGFyay1ibHVlJyk7XG5cbiAgICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAvLyBuZXdQcm9qLmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcbiAgICBuZXdQcm9qLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3ROYW1lJyk7XG4gICAgbmV3UHJvai50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIG5ld1Byb2ouc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZGFya0JsdWU7XG4gICAgY3VycmVudFAuYXBwZW5kQ2hpbGQobmV3UHJvaik7XG59XG5cbi8vYWRkIGNsaWNrIGNvdW50IHRvIHNlc3Npb24gc3RvcmFnZSB0byB0cmFja1xuY29uc3QgYWRkQ2xpY2tDb3VudCA9IChjbGlja0NvdW50LCBwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGxldCBkYXRhID0gU0VTU0lPTi5nZXRJdGVtKHByb2plY3ROYW1lKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhTRVNTSU9OLmdldEl0ZW0ocHJvamVjdE5hbWUpKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coU0VTU0lPTik7XG4gICAgcmV0dXJuIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGAke3Byb2plY3ROYW1lfWAsIGNsaWNrQ291bnQpO1xufVxuXG4vLyBsb2FkIGluIGRlZmF1bHQgcGFnZSAodXNpbmcgZGVmYXVsdGFycmF5bGlzdClcbmNvbnN0IGxvYWREZWZhdWx0UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBkID0gY3JlYXRlRGVmYXVsdEFycmF5TGlzdCgpO1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0TmFtZSA9ICdteVByb2plY3QnO1xuICAgIC8vIExPQ0FMLnNldEl0ZW0oJ215UHJvamVjdCcsIGAke0pTT04uc3RyaW5naWZ5KGQpfWApO1xuICAgIHJldHVybiBnZXROYW1lQW5kRGF0ZShkLCBkZWZhdWx0UHJvamVjdE5hbWUpO1xufVxuXG4vL0xPQUQgUEFHRVxuY29uc3QgbG9hZFBhZ2UgPSAoKCkgID0+IERPTUxvYWRlZChsb2FkRGVmYXVsdFBhZ2UsIGxvYWRTZXNzaW9uU3RvcmFnZVBhZ2UpKSgpO1xuXG5cbmV4cG9ydCB7XG4gICAgLy8gZGVsZXRlQnRuTGlzdGVuZXIsIFxuICAgIGV4cGFuZEJ0bkxpc3RlbmVyLFxuICAgIGl0ZW1FZGl0YWJsZSxcbiAgICBpZkNoZWNrZWQsXG4gICAgY2hlY2tMb2NhbFN0b3JhZ2UsXG4gICAgY2xlYXJBbGxJdGVtc0RPTVxufSIsImNvbnN0IERPTUxvYWRlZCA9IChhLCBjKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZSkgPT4ge1xuICAgICAgICAvL2dldCBjdXJyZW50bCwgbGF0ZXN0IHByb2plY3QgZnJvbSBsb2NhbCBzdG9yYWdlIGFuZCBwYXNzIGluIHByb2plY3RuYW1lIHRvIGxvYWRzZXNzaW9uXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qTmFtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2Uua2V5KDApO1xuICAgICAgICBjb25zdCBwcm9qID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qTmFtZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UocHJvaikpO1xuICAgICAgICAvL2NoZWNrIGZvciBwcm9qZWN0TmFtZSBmcm9tIHNpZGV0YWIgKHdoYXRldmVyIHByb2plY3QgaXMgaGlnaGxpZ2h0ZWQpXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoID09PSAwID8gYSgpIDogYyhjdXJyZW50UHJvak5hbWUpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRE9NTG9hZGVkOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=