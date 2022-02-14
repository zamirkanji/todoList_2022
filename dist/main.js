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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black-color: black;\n    --font-weight: 300;\n    --border-test: 2px solid yellow;\n    --dark-blue: #344c57;\n    --dark-grey: #10151686;\n    --light-blue: #2C5364;\n    --closetowhite: #6d9eb3;\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing: border-box;\n    font-weight: var(--font-weight);\n}\n\nhtml {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: black;\n}\n\n.text {\n    color: var(--closetowhite);\n    /* color: whitesmoke; */\n    /* text-align: center; */\n}\n\n.main-content {\n    min-height: 100%;\n    margin: 0;\n    padding: 15px;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 15px;\n}\n\n/* main sidebar */\n.main-sidebar {\n    /* flex: .1; */\n    height: 250px;\n    display: flex;\n    justify-content: center;\n    /* align-items: center; */\n    /* align-items: space-between; */\n    margin: 0;\n    padding: 15px;\n    /* background-color: rgb(55, 66, 73); */\n    background-color: var(--dark-grey);\n    border-radius: 10px;\n}\n\n\n.sidebar-title  {\n    margin: 0;\n    padding: 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    /* align-items: space-between; */\n    justify-content: space-between;\n    /* align-items: center; */\n    /* background-color: var(--dark-grey); */\n    border-radius: 5px;\n    /* transition: all 1s ease; */\n}\n\n/* .material-icons {\n    text-align: left;\n    font-size: 40px;\n    color: var(--closetowhite);\n    flex: .15;\n} */\n\n#sidebar-title-text {\n    /* flex: .85; */\n    text-align: center;\n    color: black;\n    /* font-size: 28px; */\n    font-weight: var(--font-weight);\n    letter-spacing: 1.5px;\n}\n\n.sidebar-project-list {\n    flex: 1;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    /* border-radius: 5px; */\n    /* background-color: blue; */\n}\n\n.sidebar-main-list {\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    /* color: rgb(55, 66, 73); */\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    gap: 10px;\n    height: 100%;\n    \n}\n\n.sidebar-list-item {\n    margin: 0;\n    padding: 0;\n    /* padding: 8px; */\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    /* background-color: var(--dark-grey); */\n    color: #a3a3a3;\n    font-size: 18px;\n    font-size: 1.25rem;\n}\n\n/* ul.sidebar-list-item {\n    \n} */\n\nul.sidebar-list-item > li {\n    text-indent: -5px;\n}\n\nul.sidebar-list-item > li::before {\n    content: \"- \";\n    color: black;\n    text-indent: -5px;\n}\n\n#current-p {\n    /* background-color: var(--dark-grey); */\n    /* gap: 10px; */\n    color: white;\n    font-size: 1.5rem;\n}\n\n.projectName {\n    color: white;\n    padding: 10px;\n}\n\n.sidebar-create-new-btn {\n    flex: .25;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    /* background-color: violet; */\n}\n\n/* .create-new-btn {\n    \n    \n} */\n\n/* ************************* main body ************************** */\n.main-body {\n    margin: 0;\n    padding: 0;\n    height: 1000px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.main-header {\n    margin: 0;\n    padding: 10px;\n    flex: .30;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--dark-grey);\n    \n    border-radius: 10px;\n}\n\n/* .menu-icon{\n    width: 30px;\n    height: 30px;\n}\n#menu-icon {\n    background-image: url('./img/menu.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100%;\n} */\n\n#projectNameHeader {\n    color: var(--closetowhite);\n    /* color: black; */\n    letter-spacing: 1.5px;\n    font-size: 1.75rem;\n}\n\n#header-text {\n    color: white;\n    letter-spacing: 1px;\n    font-size: 1.25rem;\n}\n\n\n\n\n/* main list content */\n.main-list-content {\n    flex: 2.70;\n    /* height: 85%; */\n    display: flex;\n    flex-direction: column;\n    /* border: 10px solid var(--black-color); */\n    /* margin: 10px; */\n    background-color: var(--dark-grey);\n    margin: 0;\n    padding: 0;\n    border-radius: 10px;\n    gap: 10px;\n}\n\n.list-container {\n    flex: 2.25;\n    margin: 0;\n    padding: 25px 15px 15px 15px;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    /* background-color: var(--dark-grey); */\n    border-radius: 5px;\n    gap: 50px;\n}\n\n.ordered-item-list {\n    flex: 2;\n    /* height: 100%;\n    width: 100%; */\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 15px;\n}\n\n.list-item-options {\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    /* border: 1px solid violet; */\n}\n\n#create-new-item-btn {\n    width: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n\n.form-main {\n    /* justify-content: space-between; */\n    gap: 10px;\n    width: 75%;\n    display: flex;\n    /* border: 1px solid violet; */\n    /* align-items: center; */\n}\n\n.label-new-item {\n    text-align: center;\n    flex: .5;\n}\n\n#input-new-item {\n    border-radius: 5px;\n    border: none;\n    flex: 1.5;\n}\n\n#submit-btn {\n    flex: .5;\n}\n\n\n/* *********************each item********************* */\n.list-item {\n    margin: 0;\n    padding: 0 0 0 10px;\n    /* list-style-type: none;\n    text-decoration: none;\n    list-style: none; */\n    /* background-color: var(--closetowhite); */\n    background-color: var(--dark-blue);\n    height: 50px;\n    color: var(--black-color);\n    letter-spacing: 1px;\n    display: flex;\n    border-radius: 10px;\n    z-index: 2;\n    \n    /* align-items: center; */\n    /* justify-content: space-between; */\n    /* font-size: 100%; */\n    /* flex: 1.75; */\n}\n\n.list-input-container {\n    flex: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item-text {\n    margin: 0;\n    padding: 0;\n    color: black;\n    letter-spacing: 1.5px;\n    flex: 1.75;\n    height: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n\n#item-checkbox {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: whitesmoke;\n    -webkit-appearance: none;\n\tborder: none;\n\tbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);\n\tpadding: 7px;\n\tborder-radius: 5px;\n    /* width: 10px;\n    height: 10px; */\n\n}\n\n#item-checkbox:checked {\n    /* background-color: #e9ecee;\n\tborder: 1px solid #adb8c0; */\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);\n\tcolor: #99a1a7;\n}\n\n#item-checkbox:checked::after {\n    color: var(--closetowhite);\n    content: '\\2714';\n\tfont-size: 14px;\n\t/* position: absolute; */\n\t/* top: 0px;+\n\tleft: 3px; */\n\t/* color: #99a1a7; */\n}\n/* \ninput[type=checkbox] {\n    \n} */\n\ninput[type=text] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    box-sizing: border-box;\n    border: none;\n    background-color: var(--dark-blue);\n    font-size: 1.1rem;\n    /* font-size: 100%; */\n}\n\n.item-options-container {\n    flex: .25;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    padding: 10px;\n    /* height: 100%; */\n    gap: 10px;\n    background-color: var(--dark-blue);\n    border-radius: 0 10px 10px 0;\n}\n\n.item-delete-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n\n#delete-item {\n    border: none;\n    border-radius: 10px;\n    background-color: var(--dark-blue);\n}\n\n\n#delete-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n    color: white;\n}\n\n.expand-icon-btn {\n    background-color: var(--dark-blue);\n    border: none;\n    flex: 1;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.expand-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n}\n\n\n\n\n.item-details-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n#item-details {\n    border: none;\n    border-radius: 10px;\n}\n\n.item-date-created {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n\n.expand-container {\n    margin: 0;\n    padding: 0 8px 0 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--closetowhite);\n    height: 150px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    border-radius: 5px;\n    font-size: 85%;\n}\n\n.details-container {\n    flex: .5;\n    /* border: 1px solid var(--closetowhite); */\n    display: flex;\n    justify-content: center;\n    background-color: var(--dark-blue);\n    /* align-items: center; */\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.details-title {\n    color: var(--closetowhite);\n    font-size: 100%;\n}\n\n\n/* ******************** general ********************** */\n\n.display {\n    display: none;\n    animation: ease-in 1s;\n}\n\n.btn {\n    background-color: rgb(55, 66, 73);\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 10px;\n    width: 75px;\n    height: 45px;\n}\n\n.create-new-btn {\n    background-color: var(--dark-blue);\n    color: black;\n}\n\n.item-btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 5px;\n    /* width: 50px; */\n    width: 65%;\n    height: 65%;\n    font-size: 75%;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --black-color: black;\n    --font-weight: 300;\n    --border-test: 2px solid yellow;\n    --dark-blue: #344c57;\n    --dark-grey: #10151686;\n    --light-blue: #2C5364;\n    --closetowhite: #6d9eb3;\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing: border-box;\n    font-weight: var(--font-weight);\n}\n\nhtml {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: black;\n}\n\n.text {\n    color: var(--closetowhite);\n    /* color: whitesmoke; */\n    /* text-align: center; */\n}\n\n.main-content {\n    min-height: 100%;\n    margin: 0;\n    padding: 15px;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 15px;\n}\n\n/* main sidebar */\n.main-sidebar {\n    /* flex: .1; */\n    height: 250px;\n    display: flex;\n    justify-content: center;\n    /* align-items: center; */\n    /* align-items: space-between; */\n    margin: 0;\n    padding: 15px;\n    /* background-color: rgb(55, 66, 73); */\n    background-color: var(--dark-grey);\n    border-radius: 10px;\n}\n\n\n.sidebar-title  {\n    margin: 0;\n    padding: 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    /* align-items: space-between; */\n    justify-content: space-between;\n    /* align-items: center; */\n    /* background-color: var(--dark-grey); */\n    border-radius: 5px;\n    /* transition: all 1s ease; */\n}\n\n/* .material-icons {\n    text-align: left;\n    font-size: 40px;\n    color: var(--closetowhite);\n    flex: .15;\n} */\n\n#sidebar-title-text {\n    /* flex: .85; */\n    text-align: center;\n    color: black;\n    /* font-size: 28px; */\n    font-weight: var(--font-weight);\n    letter-spacing: 1.5px;\n}\n\n.sidebar-project-list {\n    flex: 1;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    /* border-radius: 5px; */\n    /* background-color: blue; */\n}\n\n.sidebar-main-list {\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    /* color: rgb(55, 66, 73); */\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: flex-start;\n    gap: 10px;\n    height: 100%;\n    \n}\n\n.sidebar-list-item {\n    margin: 0;\n    padding: 0;\n    /* padding: 8px; */\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    /* background-color: var(--dark-grey); */\n    color: #a3a3a3;\n    font-size: 18px;\n    font-size: 1.25rem;\n}\n\n/* ul.sidebar-list-item {\n    \n} */\n\nul.sidebar-list-item > li {\n    text-indent: -5px;\n}\n\nul.sidebar-list-item > li::before {\n    content: \"- \";\n    color: black;\n    text-indent: -5px;\n}\n\n#current-p {\n    /* background-color: var(--dark-grey); */\n    /* gap: 10px; */\n    color: white;\n    font-size: 1.5rem;\n}\n\n.projectName {\n    color: white;\n    padding: 10px;\n}\n\n.sidebar-create-new-btn {\n    flex: .25;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    /* background-color: violet; */\n}\n\n/* .create-new-btn {\n    \n    \n} */\n\n/* ************************* main body ************************** */\n.main-body {\n    margin: 0;\n    padding: 0;\n    height: 1000px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.main-header {\n    margin: 0;\n    padding: 10px;\n    flex: .30;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--dark-grey);\n    \n    border-radius: 10px;\n}\n\n/* .menu-icon{\n    width: 30px;\n    height: 30px;\n}\n#menu-icon {\n    background-image: url('./img/menu.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100%;\n} */\n\n#projectNameHeader {\n    color: var(--closetowhite);\n    /* color: black; */\n    letter-spacing: 1.5px;\n    font-size: 1.75rem;\n}\n\n#header-text {\n    color: white;\n    letter-spacing: 1px;\n    font-size: 1.25rem;\n}\n\n\n\n\n/* main list content */\n.main-list-content {\n    flex: 2.70;\n    /* height: 85%; */\n    display: flex;\n    flex-direction: column;\n    /* border: 10px solid var(--black-color); */\n    /* margin: 10px; */\n    background-color: var(--dark-grey);\n    margin: 0;\n    padding: 0;\n    border-radius: 10px;\n    gap: 10px;\n}\n\n.list-container {\n    flex: 2.25;\n    margin: 0;\n    padding: 25px 15px 15px 15px;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    /* background-color: var(--dark-grey); */\n    border-radius: 5px;\n    gap: 50px;\n}\n\n.ordered-item-list {\n    flex: 2;\n    /* height: 100%;\n    width: 100%; */\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 15px;\n}\n\n.list-item-options {\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    /* border: 1px solid violet; */\n}\n\n#create-new-item-btn {\n    width: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n\n.form-main {\n    /* justify-content: space-between; */\n    gap: 10px;\n    width: 75%;\n    display: flex;\n    /* border: 1px solid violet; */\n    /* align-items: center; */\n}\n\n.label-new-item {\n    text-align: center;\n    flex: .5;\n}\n\n#input-new-item {\n    border-radius: 5px;\n    border: none;\n    flex: 1.5;\n}\n\n#submit-btn {\n    flex: .5;\n}\n\n\n/* *********************each item********************* */\n.list-item {\n    margin: 0;\n    padding: 0 0 0 10px;\n    /* list-style-type: none;\n    text-decoration: none;\n    list-style: none; */\n    /* background-color: var(--closetowhite); */\n    background-color: var(--dark-blue);\n    height: 50px;\n    color: var(--black-color);\n    letter-spacing: 1px;\n    display: flex;\n    border-radius: 10px;\n    z-index: 2;\n    \n    /* align-items: center; */\n    /* justify-content: space-between; */\n    /* font-size: 100%; */\n    /* flex: 1.75; */\n}\n\n.list-input-container {\n    flex: 2;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item-text {\n    margin: 0;\n    padding: 0;\n    color: black;\n    letter-spacing: 1.5px;\n    flex: 1.75;\n    height: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n\n#item-checkbox {\n    padding: 0;\n    margin: 0;\n    border: none;\n    background-color: whitesmoke;\n    -webkit-appearance: none;\n\tborder: none;\n\tbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);\n\tpadding: 7px;\n\tborder-radius: 5px;\n    /* width: 10px;\n    height: 10px; */\n\n}\n\n#item-checkbox:checked {\n    /* background-color: #e9ecee;\n\tborder: 1px solid #adb8c0; */\n\tbox-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);\n\tcolor: #99a1a7;\n}\n\n#item-checkbox:checked::after {\n    color: var(--closetowhite);\n    content: '\\2714';\n\tfont-size: 14px;\n\t/* position: absolute; */\n\t/* top: 0px;+\n\tleft: 3px; */\n\t/* color: #99a1a7; */\n}\n/* \ninput[type=checkbox] {\n    \n} */\n\ninput[type=text] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    box-sizing: border-box;\n    border: none;\n    background-color: var(--dark-blue);\n    font-size: 1.1rem;\n    /* font-size: 100%; */\n}\n\n.item-options-container {\n    flex: .25;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    padding: 10px;\n    /* height: 100%; */\n    gap: 10px;\n    background-color: var(--dark-blue);\n    border-radius: 0 10px 10px 0;\n}\n\n.item-delete-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n\n#delete-item {\n    border: none;\n    border-radius: 10px;\n    background-color: var(--dark-blue);\n}\n\n\n#delete-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url('./img/delete.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n    color: white;\n}\n\n.expand-icon-btn {\n    background-color: var(--dark-blue);\n    border: none;\n    flex: 1;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.expand-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url('./img/chevron-down\\ \\(1\\).png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n}\n\n\n\n\n.item-details-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n#item-details {\n    border: none;\n    border-radius: 10px;\n}\n\n.item-date-created {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n\n.expand-container {\n    margin: 0;\n    padding: 0 8px 0 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--closetowhite);\n    height: 150px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    border-radius: 5px;\n    font-size: 85%;\n}\n\n.details-container {\n    flex: .5;\n    /* border: 1px solid var(--closetowhite); */\n    display: flex;\n    justify-content: center;\n    background-color: var(--dark-blue);\n    /* align-items: center; */\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.details-title {\n    color: var(--closetowhite);\n    font-size: 100%;\n}\n\n\n/* ******************** general ********************** */\n\n.display {\n    display: none;\n    animation: ease-in 1s;\n}\n\n.btn {\n    background-color: rgb(55, 66, 73);\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 10px;\n    width: 75px;\n    height: 45px;\n}\n\n.create-new-btn {\n    background-color: var(--dark-blue);\n    color: black;\n}\n\n.item-btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 5px;\n    /* width: 50px; */\n    width: 65%;\n    height: 65%;\n    font-size: 75%;\n}\n\n\n\n"],"sourceRoot":""}]);
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
            // const a = deleteBtnListener(projectName);
            const b = (0,___WEBPACK_IMPORTED_MODULE_0__.expandBtnListener)();
            const c = (0,___WEBPACK_IMPORTED_MODULE_0__.itemEditable)();
            const d = (0,___WEBPACK_IMPORTED_MODULE_0__.ifChecked)();
            // return a && b;
            return b && c && d;
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
const deleteBtnListener = (projectName) => {
    console.log(projectName);
    const orderedList = document.querySelector('.ordered-item-list');
    const listItemDeleteBtns = document.querySelectorAll('#delete-item');
    

    for (let i = 0; i < listItemDeleteBtns.length; i++) {
        // console.log(i);
        const btnIndex = i;
    }

    for(let j = 0; j < itemListArr.length; j++) {
        // console.log(j);
        const listItemIndex = j; 
    }

    orderedList.addEventListener('click', (e) => {
        const answer = confirm('are you sure you want to delete this item?');
        if (answer) {
            console.log(e.target);
        }
    })

    listItemDeleteBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            const listItem = e.target.parentNode.parentNode.parentNode.parentNode;
            const confirmAnswer = confirm('are you sure you want to delete this item?');
            if (confirmAnswer) {
                listItem.remove();
            } 
        })
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
        return (0,_DOM__WEBPACK_IMPORTED_MODULE_6__["default"])(n, dc, projectName);
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
        const item = new _app_js__WEBPACK_IMPORTED_MODULE_4__.ListItem(`${inputValue}`, (0,_app_js__WEBPACK_IMPORTED_MODULE_4__.getDate)());
        //check if LOCAL STORAGE is empty or not 
        return projectLocalStorage(clickCount, projectName, item);
    })
};

//check local storage to see if project already exists
const checkLocalStorage = (clickCount, projectName, item) => {
    const projectExists = LOCAL.length > 0;
    return projectExists ? true : false;
}

const newProjBtn = (() => {
    let clickCount = 0;
    const newItemBtn = document.querySelector('#create-new-item-btn');
    const inputNewItem = document.querySelector('#input-new-item');
    const labelNewItem = document.querySelector('.label-new-item');
    const submitBtn = document.querySelector('#submit-btn');
    const createNewBtn = document.querySelector('.create-new-btn');
    const ol = document.querySelector('.ordered-item-list');

    createNewBtn.addEventListener('click', () => {
        let projectName;
        const projectExists = checkLocalStorage();

        if (projectExists) {
            //clear items and name
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
                //add new project name to top of page
                document.querySelector('#projectNameHeader').textContent = projectName;
                //create new folder in current project list
                createProjectFolder(projectName);
                //clear default array list 


                // const ol = document.querySelector('.ordered-item-list');
                // const d = deleteChildElements(ol);
                // d();

                addClickCount(clickCount, projectName);

                removeDisplayNone(inputNewItem);
                removeDisplayNone(submitBtn);
                removeDisplayNone(labelNewItem);

                return formSubmission(clickCount, projectName);
            }
        }
    })
})()

const navClosed = () => {
    const mainSidebar = document.getElementById('main-sidebar');
    const mainBody = document.querySelector('.main-body');
    mainBody.style.opacity = '1';
    mainSidebar.style.zIndex = "0";
    mainSidebar.style.width = "0";
}
const navOpen = () => {
    const mainSidebar = document.getElementById('main-sidebar');
    const mainBody = document.querySelector('.main-body');
    mainSidebar.style.zIndex = "1";
    mainSidebar.style.width = "250px";
    mainBody.style.opacity = '.5';
}

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
const newItemBtnListener = (() => {
    let clickCount = 0;
    const newItemBtn = document.querySelector('#create-new-item-btn');
    const inputNewItem = document.querySelector('#input-new-item');
    const labelNewItem = document.querySelector('.label-new-item');
    const submitBtn = document.querySelector('#submit-btn');

    newItemBtn.addEventListener('click', (e) => {
        e.preventDefault();
        //remove display none from input form items

        const projectExists = checkLocalStorage();

        if (document.querySelector('#projectNameHeader') === 'myProject') {
            removeDisplayNone(inputNewItem);
            removeDisplayNone(submitBtn);
            removeDisplayNone(labelNewItem);

            return formSubmission();
        }
        if (projectExists) {
            //this needs to be fixed
            const currentProject = SESSION.key(0);
            let getClickCount = SESSION.getItem('hello');
            getClickCount++;
            console.log(getClickCount);
        } else {
            return;
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
    const getCurrentProjectName = document.querySelector('#projectNameHeader').textContent;
    console.log(getCurrentProjectName);
    const localStorageItemList = [];
    //FIND PROJECT NAME AND PUSH LAST ITEM INTO IT 

    const projectExists = checkLocalStorage();

    const createItemFromLocalStorage = (item, projectName) => {
        // const d = createDefaultArrayList();
        const d = item;
            const n = d.name;
            const dc = d.dateCreated;
            //last item?
            return (0,_DOM__WEBPACK_IMPORTED_MODULE_6__["default"])(n, dc, projectName);
    }
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsVUFBVSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxTQUFTLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sT0FBTyxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLEtBQUssT0FBTyxPQUFPLEtBQUssS0FBSyxPQUFPLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsUUFBUSxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEs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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnREFBYztBQUM3QixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2Q0FBUSxJQUFJLFdBQVcsR0FBRyxnREFBTztBQUMxRDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFlBQVksSUFBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGdEQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLHlCQUF5QixZQUFZO0FBQ3JDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixZQUFZO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsWUFBWTtBQUN4RDs7QUFFQTtBQUNBO0FBQ0EsY0FBYywyREFBc0I7QUFDcEM7QUFDQSxxQ0FBcUMsa0JBQWtCO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIscURBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvVWxDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1p4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7VUVyQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9zcmMvYnRuTGlzdGVuZXJzLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9zcmMvZGVmYXVsdFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vc3JjL2xvYWRQYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9kZWxldGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvY2hldnJvbi1kb3duICgxKS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJsYWNrLWNvbG9yOiBibGFjaztcXG4gICAgLS1mb250LXdlaWdodDogMzAwO1xcbiAgICAtLWJvcmRlci10ZXN0OiAycHggc29saWQgeWVsbG93O1xcbiAgICAtLWRhcmstYmx1ZTogIzM0NGM1NztcXG4gICAgLS1kYXJrLWdyZXk6ICMxMDE1MTY4NjtcXG4gICAgLS1saWdodC1ibHVlOiAjMkM1MzY0O1xcbiAgICAtLWNsb3NldG93aGl0ZTogIzZkOWViMztcXG59XFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQpO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICAvKiBjb2xvcjogd2hpdGVzbW9rZTsgKi9cXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLyogbWFpbiBzaWRlYmFyICovXFxuLm1haW4tc2lkZWJhciB7XFxuICAgIC8qIGZsZXg6IC4xOyAqL1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgLyogYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47ICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCA2NiwgNzMpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5cXG4uc2lkZWJhci10aXRsZSAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLyogdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7ICovXFxufVxcblxcbi8qIC5tYXRlcmlhbC1pY29ucyB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIGZsZXg6IC4xNTtcXG59ICovXFxuXFxuI3NpZGViYXItdGl0bGUtdGV4dCB7XFxuICAgIC8qIGZsZXg6IC44NTsgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIC8qIGZvbnQtc2l6ZTogMjhweDsgKi9cXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0KTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0LWxpc3Qge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDVweDsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cXG59XFxuXFxuLnNpZGViYXItbWFpbi1saXN0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIC8qIGNvbG9yOiByZ2IoNTUsIDY2LCA3Myk7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIFxcbn1cXG5cXG4uc2lkZWJhci1saXN0LWl0ZW0ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIHBhZGRpbmc6IDhweDsgKi9cXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7ICovXFxuICAgIGNvbG9yOiAjYTNhM2EzO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLyogdWwuc2lkZWJhci1saXN0LWl0ZW0ge1xcbiAgICBcXG59ICovXFxuXFxudWwuc2lkZWJhci1saXN0LWl0ZW0gPiBsaSB7XFxuICAgIHRleHQtaW5kZW50OiAtNXB4O1xcbn1cXG5cXG51bC5zaWRlYmFyLWxpc3QtaXRlbSA+IGxpOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiLSBcXFwiO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtaW5kZW50OiAtNXB4O1xcbn1cXG5cXG4jY3VycmVudC1wIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTsgKi9cXG4gICAgLyogZ2FwOiAxMHB4OyAqL1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ucHJvamVjdE5hbWUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyLWNyZWF0ZS1uZXctYnRuIHtcXG4gICAgZmxleDogLjI1O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmlvbGV0OyAqL1xcbn1cXG5cXG4vKiAuY3JlYXRlLW5ldy1idG4ge1xcbiAgICBcXG4gICAgXFxufSAqL1xcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKiogbWFpbiBib2R5ICoqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuLm1haW4tYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5tYWluLWhlYWRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZmxleDogLjMwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiAubWVudS1pY29ue1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4jbWVudS1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9tZW51LnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG59ICovXFxuXFxuI3Byb2plY3ROYW1lSGVhZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIC8qIGNvbG9yOiBibGFjazsgKi9cXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxufVxcblxcbiNoZWFkZXItdGV4dCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBtYWluIGxpc3QgY29udGVudCAqL1xcbi5tYWluLWxpc3QtY29udGVudCB7XFxuICAgIGZsZXg6IDIuNzA7XFxuICAgIC8qIGhlaWdodDogODUlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBib3JkZXI6IDEwcHggc29saWQgdmFyKC0tYmxhY2stY29sb3IpOyAqL1xcbiAgICAvKiBtYXJnaW46IDEwcHg7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgICBmbGV4OiAyLjI1O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDI1cHggMTVweCAxNXB4IDE1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuLm9yZGVyZWQtaXRlbS1saXN0IHtcXG4gICAgZmxleDogMjtcXG4gICAgLyogaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTsgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtLW9wdGlvbnMge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2aW9sZXQ7ICovXFxufVxcblxcbiNjcmVhdGUtbmV3LWl0ZW0tYnRuIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG4uZm9ybS1tYWluIHtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZpb2xldDsgKi9cXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuLmxhYmVsLW5ldy1pdGVtIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbGV4OiAuNTtcXG59XFxuXFxuI2lucHV0LW5ldy1pdGVtIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZsZXg6IDEuNTtcXG59XFxuXFxuI3N1Ym1pdC1idG4ge1xcbiAgICBmbGV4OiAuNTtcXG59XFxuXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqZWFjaCBpdGVtKioqKioqKioqKioqKioqKioqKioqICovXFxuLmxpc3QtaXRlbSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCAwIDAgMTBweDtcXG4gICAgLyogbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7ICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG4gICAgLyogZm9udC1zaXplOiAxMDAlOyAqL1xcbiAgICAvKiBmbGV4OiAxLjc1OyAqL1xcbn1cXG5cXG4ubGlzdC1pbnB1dC1jb250YWluZXIge1xcbiAgICBmbGV4OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLml0ZW0tdGV4dCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuICAgIGZsZXg6IDEuNzU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4jaXRlbS1jaGVja2JveCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAwcHggLTE1cHggMTBweCAtMTJweCByZ2JhKDAsMCwwLDAuMDUpO1xcblxcdHBhZGRpbmc6IDdweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC8qIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7ICovXFxuXFxufVxcblxcbiNpdGVtLWNoZWNrYm94OmNoZWNrZWQge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VlO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNhZGI4YzA7ICovXFxuXFx0Ym94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4wNSksIGluc2V0IDBweCAtMTVweCAxMHB4IC0xMnB4IHJnYmEoMCwwLDAsMC4wNSksIGluc2V0IDE1cHggMTBweCAtMTJweCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XFxuXFx0Y29sb3I6ICM5OWExYTc7XFxufVxcblxcbiNpdGVtLWNoZWNrYm94OmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMjcxNCc7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG5cXHQvKiB0b3A6IDBweDsrXFxuXFx0bGVmdDogM3B4OyAqL1xcblxcdC8qIGNvbG9yOiAjOTlhMWE3OyAqL1xcbn1cXG4vKiBcXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgIFxcbn0gKi9cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgbWFyZ2luOiA4cHggMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgLyogZm9udC1zaXplOiAxMDAlOyAqL1xcbn1cXG5cXG4uaXRlbS1vcHRpb25zLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IC4yNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XFxufVxcblxcbi5pdGVtLWRlbGV0ZS1idG4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4jZGVsZXRlLWl0ZW0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcblxcblxcbiNkZWxldGUtaWNvbiB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5leHBhbmQtaWNvbi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZsZXg6IDE7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZXhwYW5kLWljb24ge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcXG59XFxuXFxuXFxuXFxuXFxuLml0ZW0tZGV0YWlscy1idG4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jaXRlbS1kZXRhaWxzIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaXRlbS1kYXRlLWNyZWF0ZWQge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZXhwYW5kLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCA4cHggMCA4cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiA4NSU7XFxufVxcblxcbi5kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IC41O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbG9zZXRvd2hpdGUpOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZGV0YWlscy10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqIGdlbmVyYWwgKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi5kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYW5pbWF0aW9uOiBlYXNlLWluIDFzO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCA2NiwgNzMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbn1cXG5cXG4uY3JlYXRlLW5ldy1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5pdGVtLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgLyogd2lkdGg6IDUwcHg7ICovXFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIGhlaWdodDogNjUlO1xcbiAgICBmb250LXNpemU6IDc1JTtcXG59XFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6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O0lBQ1YsV0FBVztJQUNYLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJsYWNrLWNvbG9yOiBibGFjaztcXG4gICAgLS1mb250LXdlaWdodDogMzAwO1xcbiAgICAtLWJvcmRlci10ZXN0OiAycHggc29saWQgeWVsbG93O1xcbiAgICAtLWRhcmstYmx1ZTogIzM0NGM1NztcXG4gICAgLS1kYXJrLWdyZXk6ICMxMDE1MTY4NjtcXG4gICAgLS1saWdodC1ibHVlOiAjMkM1MzY0O1xcbiAgICAtLWNsb3NldG93aGl0ZTogIzZkOWViMztcXG59XFxuXFxuKiB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQpO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4udGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICAvKiBjb2xvcjogd2hpdGVzbW9rZTsgKi9cXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLyogbWFpbiBzaWRlYmFyICovXFxuLm1haW4tc2lkZWJhciB7XFxuICAgIC8qIGZsZXg6IC4xOyAqL1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgLyogYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47ICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCA2NiwgNzMpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5cXG4uc2lkZWJhci10aXRsZSAge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLyogdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7ICovXFxufVxcblxcbi8qIC5tYXRlcmlhbC1pY29ucyB7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIGZsZXg6IC4xNTtcXG59ICovXFxuXFxuI3NpZGViYXItdGl0bGUtdGV4dCB7XFxuICAgIC8qIGZsZXg6IC44NTsgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIC8qIGZvbnQtc2l6ZTogMjhweDsgKi9cXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0KTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0LWxpc3Qge1xcbiAgICBmbGV4OiAxO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDVweDsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cXG59XFxuXFxuLnNpZGViYXItbWFpbi1saXN0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIC8qIGNvbG9yOiByZ2IoNTUsIDY2LCA3Myk7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIFxcbn1cXG5cXG4uc2lkZWJhci1saXN0LWl0ZW0ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIHBhZGRpbmc6IDhweDsgKi9cXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7ICovXFxuICAgIGNvbG9yOiAjYTNhM2EzO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLyogdWwuc2lkZWJhci1saXN0LWl0ZW0ge1xcbiAgICBcXG59ICovXFxuXFxudWwuc2lkZWJhci1saXN0LWl0ZW0gPiBsaSB7XFxuICAgIHRleHQtaW5kZW50OiAtNXB4O1xcbn1cXG5cXG51bC5zaWRlYmFyLWxpc3QtaXRlbSA+IGxpOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiLSBcXFwiO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtaW5kZW50OiAtNXB4O1xcbn1cXG5cXG4jY3VycmVudC1wIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTsgKi9cXG4gICAgLyogZ2FwOiAxMHB4OyAqL1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ucHJvamVjdE5hbWUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyLWNyZWF0ZS1uZXctYnRuIHtcXG4gICAgZmxleDogLjI1O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmlvbGV0OyAqL1xcbn1cXG5cXG4vKiAuY3JlYXRlLW5ldy1idG4ge1xcbiAgICBcXG4gICAgXFxufSAqL1xcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKiogbWFpbiBib2R5ICoqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuLm1haW4tYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5tYWluLWhlYWRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZmxleDogLjMwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiAubWVudS1pY29ue1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4jbWVudS1pY29uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9tZW51LnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG59ICovXFxuXFxuI3Byb2plY3ROYW1lSGVhZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIC8qIGNvbG9yOiBibGFjazsgKi9cXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxufVxcblxcbiNoZWFkZXItdGV4dCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBtYWluIGxpc3QgY29udGVudCAqL1xcbi5tYWluLWxpc3QtY29udGVudCB7XFxuICAgIGZsZXg6IDIuNzA7XFxuICAgIC8qIGhlaWdodDogODUlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBib3JkZXI6IDEwcHggc29saWQgdmFyKC0tYmxhY2stY29sb3IpOyAqL1xcbiAgICAvKiBtYXJnaW46IDEwcHg7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgICBmbGV4OiAyLjI1O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDI1cHggMTVweCAxNXB4IDE1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuLm9yZGVyZWQtaXRlbS1saXN0IHtcXG4gICAgZmxleDogMjtcXG4gICAgLyogaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTsgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtLW9wdGlvbnMge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2aW9sZXQ7ICovXFxufVxcblxcbiNjcmVhdGUtbmV3LWl0ZW0tYnRuIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG4uZm9ybS1tYWluIHtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZpb2xldDsgKi9cXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuLmxhYmVsLW5ldy1pdGVtIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbGV4OiAuNTtcXG59XFxuXFxuI2lucHV0LW5ldy1pdGVtIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZsZXg6IDEuNTtcXG59XFxuXFxuI3N1Ym1pdC1idG4ge1xcbiAgICBmbGV4OiAuNTtcXG59XFxuXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqZWFjaCBpdGVtKioqKioqKioqKioqKioqKioqKioqICovXFxuLmxpc3QtaXRlbSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCAwIDAgMTBweDtcXG4gICAgLyogbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7ICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG4gICAgLyogZm9udC1zaXplOiAxMDAlOyAqL1xcbiAgICAvKiBmbGV4OiAxLjc1OyAqL1xcbn1cXG5cXG4ubGlzdC1pbnB1dC1jb250YWluZXIge1xcbiAgICBmbGV4OiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLml0ZW0tdGV4dCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuICAgIGZsZXg6IDEuNzU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4jaXRlbS1jaGVja2JveCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCBpbnNldCAwcHggLTE1cHggMTBweCAtMTJweCByZ2JhKDAsMCwwLDAuMDUpO1xcblxcdHBhZGRpbmc6IDdweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC8qIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7ICovXFxuXFxufVxcblxcbiNpdGVtLWNoZWNrYm94OmNoZWNrZWQge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VlO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNhZGI4YzA7ICovXFxuXFx0Ym94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4wNSksIGluc2V0IDBweCAtMTVweCAxMHB4IC0xMnB4IHJnYmEoMCwwLDAsMC4wNSksIGluc2V0IDE1cHggMTBweCAtMTJweCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XFxuXFx0Y29sb3I6ICM5OWExYTc7XFxufVxcblxcbiNpdGVtLWNoZWNrYm94OmNoZWNrZWQ6OmFmdGVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMjcxNCc7XFxuXFx0Zm9udC1zaXplOiAxNHB4O1xcblxcdC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG5cXHQvKiB0b3A6IDBweDsrXFxuXFx0bGVmdDogM3B4OyAqL1xcblxcdC8qIGNvbG9yOiAjOTlhMWE3OyAqL1xcbn1cXG4vKiBcXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgIFxcbn0gKi9cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgbWFyZ2luOiA4cHggMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgLyogZm9udC1zaXplOiAxMDAlOyAqL1xcbn1cXG5cXG4uaXRlbS1vcHRpb25zLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IC4yNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XFxufVxcblxcbi5pdGVtLWRlbGV0ZS1idG4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5cXG4jZGVsZXRlLWl0ZW0ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcblxcblxcbiNkZWxldGUtaWNvbiB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvZGVsZXRlLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZXhwYW5kLWljb24tYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmbGV4OiAxO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmV4cGFuZC1pY29uIHtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9jaGV2cm9uLWRvd25cXFxcIFxcXFwoMVxcXFwpLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcXG59XFxuXFxuXFxuXFxuXFxuLml0ZW0tZGV0YWlscy1idG4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jaXRlbS1kZXRhaWxzIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaXRlbS1kYXRlLWNyZWF0ZWQge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZXhwYW5kLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCA4cHggMCA4cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiA4NSU7XFxufVxcblxcbi5kZXRhaWxzLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IC41O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbG9zZXRvd2hpdGUpOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZGV0YWlscy10aXRsZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqIGdlbmVyYWwgKioqKioqKioqKioqKioqKioqKioqKiAqL1xcblxcbi5kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYW5pbWF0aW9uOiBlYXNlLWluIDFzO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU1LCA2NiwgNzMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbn1cXG5cXG4uY3JlYXRlLW5ldy1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5pdGVtLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgLyogd2lkdGg6IDUwcHg7ICovXFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIGhlaWdodDogNjUlO1xcbiAgICBmb250LXNpemU6IDc1JTtcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGRlbGV0ZUJ0bkxpc3RlbmVyLCBleHBhbmRCdG5MaXN0ZW5lciwgaXRlbUVkaXRhYmxlLCBpZkNoZWNrZWQgfSBmcm9tIFwiLlwiO1xuXG5cblxuLy9jcmVhdGUgYnRucyBmb3Igc3VibWl0IGFuZCBjYW5jZWwgd2hlbiBlZGl0aW5nIGl0ZW1cbmNvbnN0IGNyZWF0ZVN1Ym1pdENhbmNlbEJ0bnMgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tdGV4dCcpO1xuXG5cbiAgICBjb25zdCBzdWJtaXRUZXh0Q2hhbmdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY2FuY2VsVGV4dENoYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xufVxuXG5cblxuLy9jcmVhdGUgaXRlbSBpbiBIVE1MLCBhZGQgdG8gRE9NXG5jb25zdCBjcmVhdGVJdGVtSFRNTCA9IChuLCBkYywgcHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBvcmRlcmVkSXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJlZC1pdGVtLWxpc3QnKTtcbiAgICAvL2NyZWF0ZSBpdGVtIG9wdGlvbnMgY29udGFpbmVyXG4gICAgY29uc3QgY3JlYXRlTmV3SXRlbU9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVhdGVOZXdJdGVtT3B0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLW9wdGlvbnMtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBsaXN0SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXN0SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGlzdC1pbnB1dC1jb250YWluZXInKTtcblxuXG4gICAgLy9hZGQgREVMRVRFIEJ0bi9JY29uIHRvIGl0ZW1cbiAgICBjb25zdCBjcmVhdGVJdGVtRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3JlYXRlSXRlbURlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlbGV0ZS1idG4nKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4uaWQgPSAnZGVsZXRlLWl0ZW0nO1xuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWxldGVJY29uLmlkID0gJ2RlbGV0ZS1pY29uJztcbiAgICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgY3JlYXRlSXRlbURlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG5cbiAgICAvL2FkZCBFWFBBTkQgQnRuL0ljb24gdG8gaXRlbVxuICAgIGNvbnN0IGNyZWF0ZUV4cGFuZEljb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjcmVhdGVFeHBhbmRJY29uQnRuLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1pY29uLWJ0bicpO1xuICAgIGNyZWF0ZUV4cGFuZEljb25CdG4udHlwZSA9ICdidXR0b24nO1xuICAgIGNyZWF0ZUV4cGFuZEljb25CdG4ubmFtZSA9ICdleHBhbmQtaWNvbi1idG4nO1xuICAgIGNvbnN0IGNyZWF0ZUV4cGFuZEljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVhdGVFeHBhbmRJY29uRGl2LmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1pY29uJyk7XG4gICAgY3JlYXRlRXhwYW5kSWNvbkJ0bi5hcHBlbmRDaGlsZChjcmVhdGVFeHBhbmRJY29uRGl2KTtcblxuXG4gICAgLy9hZGQgY2hlY2tib3hcbiAgICBjb25zdCBjaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjaGVja2JveExhYmVsLmh0bWxGb3IgPSAnaXRlbS1jaGVja2JveCc7XG4gICAgLy8gY2hlY2tib3hMYWJlbC5mb3IgPSAnaXRlbS1jaGVja2JveCc7XG4gICAgY2hlY2tib3hMYWJlbC5pZCA9ICdpdGVtLWNoZWNrYm94LWxhYmVsJztcbiAgICBjb25zdCBjcmVhdGVDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY3JlYXRlQ2hlY2tib3guaWQgPSAnaXRlbS1jaGVja2JveCc7XG4gICAgY3JlYXRlQ2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY3JlYXRlQ2hlY2tib3gubmFtZSA9ICdpdGVtLWNoZWNrYm94JztcbiAgICAvL2FkZCBpbXBvcnRhbnQgSWNvblxuXG4gICAgLy9hcHBlbmQgaWNvbiwgZGVsZXRlIGJ0biB0byBsaXN0IGl0ZW1cbiAgICBjcmVhdGVOZXdJdGVtT3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJdGVtRGVsZXRlQnRuKTtcbiAgICBjcmVhdGVOZXdJdGVtT3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFeHBhbmRJY29uQnRuKTtcblxuXG4gICAgLy9uZXcgbGlzdCBpdGVtIFxuICAgIGNvbnN0IG5ld0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBuZXdMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0nKTtcblxuXG4gICAgY29uc3QgaW5wdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dFRleHQuY2xhc3NMaXN0LmFkZCgnaXRlbS10ZXh0Jyk7XG4gICAgaW5wdXRUZXh0LmRpc2FibGVkID0gJ2Rpc2FibGVkJztcbiAgICBpbnB1dFRleHQudHlwZSA9ICd0ZXh0JztcbiAgICBpbnB1dFRleHQuY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICAgIGlucHV0VGV4dC52YWx1ZSA9IG47XG4gICAgXG4gICAgLy9hZGQgaXRlbSBvcHRpb25zIGNvbnRhaW5lclxuICAgIG5ld0xpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RJbnB1dENvbnRhaW5lcik7XG4gICAgbGlzdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94TGFiZWwpO1xuICAgIGxpc3RJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDaGVja2JveCk7XG4gICAgbGlzdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0VGV4dCk7XG4gICAgbmV3TGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlTmV3SXRlbU9wdGlvbnNDb250YWluZXIpO1xuICAgIC8vYWRkIG5ldyBsaXN0IGl0ZW0gdG8gb3JkZXJlZCBsaXN0XG4gICAgb3JkZXJlZEl0ZW1MaXN0LmFwcGVuZENoaWxkKG5ld0xpc3RJdGVtKTtcblxuXG4gICAgLy9yZXR1cm4gZGVsZXRlIGJ0biwgZXhwYW5kIGJ0biBsaXN0ZW5lciBvbmNlIGl0ZW0gaXMgY3JlYXRlZCBcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lSGVhZGVyJykudGV4dENvbnRlbnQgPT09ICdteVByb2plY3QnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc3QgYSA9IGRlbGV0ZUJ0bkxpc3RlbmVyKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBleHBhbmRCdG5MaXN0ZW5lcigpO1xuICAgICAgICAgICAgY29uc3QgYyA9IGl0ZW1FZGl0YWJsZSgpO1xuICAgICAgICAgICAgY29uc3QgZCA9IGlmQ2hlY2tlZCgpO1xuICAgICAgICAgICAgLy8gcmV0dXJuIGEgJiYgYjtcbiAgICAgICAgICAgIHJldHVybiBiICYmIGMgJiYgZDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUl0ZW1IVE1MOyIsImNvbnN0IGl0ZW1MaXN0QXJyID0gW107XG5cbmNvbnN0IGdldERhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbXlEYXRlID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICByZXR1cm4gbXlEYXRlO1xufVxuXG5jbGFzcyBMaXN0SXRlbSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGF0ZUNyZWF0ZWQpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ub3RlcyA9ICd0ZXN0JztcbiAgICAgICAgdGhpcy5kYXRlQ3JlYXRlZCA9IGRhdGVDcmVhdGVkXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBnZXQgZGF0ZUNyZWF0ZWQgKCkge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5kYXRlQ3JlYXRlZDtcbiAgICAvLyB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG59XG5cbmNsYXNzIERPTUl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgaXRlbUxpc3RBcnIsXG4gICAgZ2V0RGF0ZSxcbiAgICBMaXN0SXRlbVxufSIsImltcG9ydCB7IGNoZWNrTG9jYWxTdG9yYWdlLCBjbGVhckFsbEl0ZW1zRE9NIH0gZnJvbSBcIi5cIjtcblxuLy9ldmVudCBsaXN0ZW5lciB0byBkZWxldGUgaXRlbSAoY2FsbGVkIGFmdGVyIGl0ZW0gaXMgY3JlYXRlZClcbmNvbnN0IGRlbGV0ZUJ0bkxpc3RlbmVyID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IG9yZGVyZWRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyZWQtaXRlbS1saXN0Jyk7XG4gICAgY29uc3QgbGlzdEl0ZW1EZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2RlbGV0ZS1pdGVtJyk7XG4gICAgXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RJdGVtRGVsZXRlQnRucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpKTtcbiAgICAgICAgY29uc3QgYnRuSW5kZXggPSBpO1xuICAgIH1cblxuICAgIGZvcihsZXQgaiA9IDA7IGogPCBpdGVtTGlzdEFyci5sZW5ndGg7IGorKykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhqKTtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW1JbmRleCA9IGo7IFxuICAgIH1cblxuICAgIG9yZGVyZWRMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgYW5zd2VyID0gY29uZmlybSgnYXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/Jyk7XG4gICAgICAgIGlmIChhbnN3ZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBsaXN0SXRlbURlbGV0ZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1BbnN3ZXIgPSBjb25maXJtKCdhcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nKTtcbiAgICAgICAgICAgIGlmIChjb25maXJtQW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9KVxuICAgIH0pXG59O1xuXG5jb25zdCBjbGVhckFsbEJ0bkxpc3RlbmVyID0gKCgpID0+IHtcbiAgICAvL29uY2UgY2xlYXJlZCwgc3RhcnQgbmV3IHByb2plY3Q/XG4gICAgLy9vciBqdXN0IGEgblxuICAgIGNvbnN0IGNsZWFyQWxsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyLWFsbC1pdGVtcy1idG4nKTtcbiAgICBjbGVhckFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy9nZXQgY3VycmVudCBwcm9qZWN0IChXaGF0ZXZlciBpcyBjbGlja2VkIG9uIHNpZGViYXIpXG4gICAgICAgIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0TmFtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2Uua2V5KDApO1xuICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIGJ0biBjbGlja2VkJyk7XG4gICAgICAgIGNvbnN0IG9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyZWQtaXRlbS1saXN0Jyk7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1EZWxldGVBbGwgPSBjb25maXJtKCdXb3VsZCB5b3UgbGlrZSB0byBjbGVhciBhbGwgaXRlbXM/Jyk7XG4gICAgICAgIGlmIChjb25maXJtRGVsZXRlQWxsKSB7XG4gICAgICAgICAgICBjbGVhckFsbEl0ZW1zRE9NKG9sKTtcbiAgICAgICAgICAgIC8vcmVtb3ZlIGZyb20gYXJyL2xvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIExPQ0FMLnJlbW92ZUl0ZW0oZ2V0Q3VycmVudFByb2plY3ROYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL3dvdWxkIHlvdSBsaWtlIHRvIGNsZWFyIGFsbCBpdGVtcyBhbmQgc3RhcnQgb3ZlciBvciBkZWxldGUgcHJvamVjdFxuICAgICAgICAvL2RlbGV0ZSBhbGwgY2hpbGRyZW4gdW5kZXIgb3JkZXJlZCBpdGVtIGxpc3QgXG4gICAgICAgIFxuICAgIH0pXG59KSgpO1xuXG5cblxuLy9leHBhbmQgYnRuIGxpc3RlbmVyIChjYWxsZWQgYWZ0ZXIgaXRlbSBpcyBjcmVhdGVkKVxuY29uc3QgZXhwYW5kQnRuTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZXhwYW5kSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leHBhbmQtaWNvbicpO1xuICAgIGNvbnN0IGdvU2hvcHBpbmdJdGVtVGVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnby1zaG9wcGluZycpO1xuICAgIGNvbnN0IGl0ZW1PcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tb3B0aW9ucy1jb250YWluZXInKTtcbiAgICBjb25zdCBpdGVtVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLXRleHQnKTtcbiAgICBleHBhbmRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSwgZS50YXJnZXQpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGdvU2hvcHBpbmdJdGVtVGVzdC5jbGFzc0xpc3QucmVtb3ZlKCdsaXN0LWl0ZW0nKTtcbiAgICAgICAgZ29TaG9wcGluZ0l0ZW1UZXN0LmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZC1jb250YWluZXInKTtcbiAgICAgICAgLy8gaXRlbU9wdGlvbnMuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW13cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW13cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbScpO1xuICAgICAgICBpdGVtd3JhcHBlci5hcHBlbmRDaGlsZChpdGVtVGV4dCk7XG4gICAgICAgIGl0ZW13cmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1PcHRpb25zKTtcblxuICAgICAgICBnb1Nob3BwaW5nSXRlbVRlc3QuYXBwZW5kQ2hpbGQoaXRlbXdyYXBwZXIpO1xuICAgICAgICBcblxuICAgICAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZCgnZGV0YWlscy1jb250YWluZXInKTtcbiAgICAgICAgZ29TaG9wcGluZ0l0ZW1UZXN0LmFwcGVuZENoaWxkKGRldGFpbHMpOyAgXG4gICAgfSlcbn07XG5cbmNvbnN0IGRlbGV0ZUFsbFByb2plY3RzID0gKCkgPT4ge1xuICAgIC8vZ29pbmcgdG8gZGVsZXRlIGZyb20gbG9jYWwgc3RvcmFnZVxufVxuXG5cblxuY29uc3QgaWZDaGVja2VkID0gKGUpID0+IHtcbiAgICBjb25zdCBkYXRlQ2hlY2tlZE9mZiA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgY29uc3QgY2hlY2tCb3hJc0NoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1jaGVja2JveCcpO1xuICAgIGNoZWNrQm94SXNDaGVja2VkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICAvL3RoaXMgaW5wdXQgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoZSBsaXN0IGl0ZW0gc29tZWhvd1xuICAgICAgICAvL2NvdWxkIG1ha2UgdGhlIGxpc3QgaXRlbSB0aGUgc2FtZSBpbnB1dFxuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lzIGNoZWNrZWQnKTtcbiAgICAgICAgICAgIC8vYWRkIGRhdGVjaGVja2Vkb2ZmIHRvIGxpc3RJdGVtIG9iamVjdFxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IHtcbiAgICBkZWxldGVCdG5MaXN0ZW5lcixcbiAgICBleHBhbmRCdG5MaXN0ZW5lcixcbiAgICBjbGVhckFsbEJ0bkxpc3RlbmVyLFxuICAgIGlmQ2hlY2tlZFxufSIsImltcG9ydCB7IExpc3RJdGVtLCBnZXREYXRlIH0gZnJvbSBcIi4vYXBwXCJcblxuY29uc3QgY3JlYXRlRGVmYXVsdEFycmF5TGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBvbmUgPSBuZXcgTGlzdEl0ZW0oJ0RvIHRoZSBkaXNoZXMnLCAnT24gdGltZSEnLCBnZXREYXRlKCkpO1xuICAgIGNvbnN0IHR3byA9IG5ldyBMaXN0SXRlbSgnQ2hhbmdlIGNhclxcJ3Mgb2lsJywgJ09uIHRpbWUhJywgZ2V0RGF0ZSgpKTtcbiAgICBjb25zdCB0aHJlZSA9IG5ldyBMaXN0SXRlbSgnV2FsayB0aGUgRG9nJywgJ09uIHRpbWUhJywgZ2V0RGF0ZSgpKTtcbiAgICBjb25zdCBmb3VyID0gbmV3IExpc3RJdGVtKCdGb2xkIHRoZSBsYXVuZHJ5JywgJ09uIHRpbWUhJywgZ2V0RGF0ZSgpKTtcbiAgICBjb25zdCBmaXZlID0gbmV3IExpc3RJdGVtKCdDYWxsIHRoZSBiYW5rJywgJ09uIHRpbWUhJywgZ2V0RGF0ZSgpKTtcblxuICAgIGNvbnN0IGRlZmF1bHRBcnJheUxpc3QgPSBbXG4gICAgICAgIG9uZSxcbiAgICAgICAgdHdvLCBcbiAgICAgICAgdGhyZWUsIFxuICAgICAgICBmb3VyLFxuICAgICAgICBmaXZlXG4gICAgXVxuICAgIHJldHVybiBkZWZhdWx0QXJyYXlMaXN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEZWZhdWx0QXJyYXlMaXN0OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IERPTUxvYWRlZCBmcm9tICcuL2xvYWRQYWdlJztcbmltcG9ydCBtZW51SWNvbiBmcm9tICcuL2ltZy9tZW51LnBuZyc7XG5pbXBvcnQgZXhwYW5kIGZyb20gJy4vaW1nL25vdW4tZXhwYW5kLTExODE3NDcucG5nJztcbmltcG9ydCB7IG1kaUNoZXZyb25Eb3duLCBtZGlDb25zb2xlTGluZSwgbWRpQ29udHJvbGxlckNsYXNzaWMsIG1kaVdpbmRvd1NodXR0ZXIgfSBmcm9tICdAbWRpL2pzJztcbmltcG9ydCB7IGdldERhdGUsIGl0ZW1MaXN0QXJyLCBMaXN0SXRlbSB9IGZyb20gJy4vYXBwLmpzJztcbmltcG9ydCBjcmVhdGVEZWZhdWx0QXJyYXlMaXN0IGZyb20gJy4vZGVmYXVsdFByb2plY3QnO1xuaW1wb3J0IGNyZWF0ZUl0ZW1IVE1MIGZyb20gJy4vRE9NJztcbmltcG9ydCB7IGRlbGV0ZUJ0bkxpc3RlbmVyLCBleHBhbmRCdG5MaXN0ZW5lciwgY2xlYXJBbGxCdG5MaXN0ZW5lciwgaWZDaGVja2VkIH0gZnJvbSAnLi9idG5MaXN0ZW5lcnMnO1xuXG5jb25zdCBMT0NBTCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG5jb25zdCBTRVNTSU9OID0gd2luZG93LnNlc3Npb25TdG9yYWdlO1xuXG5jb25zdCBjbGVhclN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9XG4gICAgXG59XG5cbmNvbnN0IGNsZWFyQWxsU3RvcmFnZSA9IGNsZWFyU3RvcmFnZSgpO1xuLy8gY2xlYXJBbGxTdG9yYWdlKCk7XG5cblxuLy9yZW1vdmUgZGlzcGxheSAobm9uZSkgZnJvbSBlbGVtZW50IFxuY29uc3QgcmVtb3ZlRGlzcGxheU5vbmUgPSAoZCkgPT4ge1xuICAgIHJldHVybiBkLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXknKTtcbn1cblxuLy9hZGQgZGlzcGxheSAobm9uZSkgdG8gZWxlbWVudCBcbmNvbnN0IGFkZERpc3BsYXlOb25lID0gKGQpID0+IHtcbiAgICByZXR1cm4gZC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XG59XG5cbi8vY2xlYXIgYWxsIGxpc3QgaXRlbXMgZnJvbSB0aGUgRE9NXG5jb25zdCBjbGVhckFsbEl0ZW1zRE9NID0gKG9sKSA9PiB7XG4gICAgd2hpbGUgKG9sLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgb2wucmVtb3ZlQ2hpbGQob2wuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHJldHVybjtcbn1cblxuLy9tYWtlIGl0ZW0gZWRpdGFibGUgLSBcbi8vbmVlZCBzdWJtaXQgYW5kIGNhbmNlbCBidG4gb25jZSBkYmwgY2xpY2tlZFxuLy9pZiBzdWJtaXR0ZWQsIHNhdmUgbmV3IHRleHQgYXMgdmFsdWUgb2YgaW5wdXQgXG5jb25zdCBpdGVtRWRpdGFibGUgPSAoKSA9PiB7XG4gICAgbGV0IGl0ZW1EYmxDbGlja2VkID0gZmFsc2U7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXRleHQnKTtcbiAgICBcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KVxuXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpID0+IHtcbiAgICAgICAgaXRlbURibENsaWNrZWQgPSB0cnVlO1xuICAgICAgICAvLyBjb25zdCBkaXNhYmxlZEl0ZW0gPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIGlmIChpdGVtRGJsQ2xpY2tlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZW0gYmVpbmcgZWRpdGVkJyk7XG5cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8vZ2V0IG5hbWUgYW5kIGRhdGUgZnJvbSBpdGVtcyBhbmQgY2FsbCBjcmVhdGVJdGVtSFRNTCgpXG5jb25zdCBnZXROYW1lQW5kRGF0ZSA9IChhcnIsIHByb2plY3ROYW1lKSA9PiB7XG4gICAgYXJyLmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgY29uc3QgbiA9IG9iai5uYW1lO1xuICAgICAgICBjb25zdCBkYyA9IG9iai5kYXRlQ3JlYXRlZDtcbiAgICAgICAgLy8gY29uc3QgY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW1IVE1MKG4sIGRjLCBwcm9qZWN0TmFtZSk7XG4gICAgICAgIC8vIHJldHVybiBjcmVhdGVJdGVtKCk7XG4gICAgICAgIHJldHVybiBjcmVhdGVJdGVtSFRNTChuLCBkYywgcHJvamVjdE5hbWUpO1xuICAgIH0pXG59XG5cbi8vbGlzdGVuIGZvciBmb3JtIHN1Ym1pc3Npb24gdG8gYWRkIGVhY2ggaXRlbSBcbmNvbnN0IGZvcm1TdWJtaXNzaW9uID0gKGNsaWNrQ291bnQsIHByb2plY3ROYW1lKT0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tbWFpbicpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT4ge1xuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LW5ldy1pdGVtJykudmFsdWU7XG4gICAgICAgIC8vcmVtb3ZlIGZvcm0gZGlzcGxheVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vcmVtb3ZlIGRpc3BhbGF5IChhZGQgYmFjayBkaXNwbGF5OiBub25lKVxuICAgICAgICBjb25zdCBpbnB1dE5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtbmV3LWl0ZW0nKTtcbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1idG4nKTtcbiAgICAgICAgY29uc3QgbGFiZWxOZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhYmVsLW5ldy1pdGVtJyk7XG4gICAgICAgIGFkZERpc3BsYXlOb25lKGlucHV0TmV3SXRlbSk7XG4gICAgICAgIGFkZERpc3BsYXlOb25lKHN1Ym1pdEJ0bik7XG4gICAgICAgIGFkZERpc3BsYXlOb25lKGxhYmVsTmV3SXRlbSk7XG4gICAgICAgIC8vY2xlYXIgaW5wdXQgZmllbGQgb24gZm9ybSBTdWJtaXRcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICAvL2NyZWF0ZSBuZXcgbGlzdCBpdGVtXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgTGlzdEl0ZW0oYCR7aW5wdXRWYWx1ZX1gLCBnZXREYXRlKCkpO1xuICAgICAgICAvL2NoZWNrIGlmIExPQ0FMIFNUT1JBR0UgaXMgZW1wdHkgb3Igbm90IFxuICAgICAgICByZXR1cm4gcHJvamVjdExvY2FsU3RvcmFnZShjbGlja0NvdW50LCBwcm9qZWN0TmFtZSwgaXRlbSk7XG4gICAgfSlcbn07XG5cbi8vY2hlY2sgbG9jYWwgc3RvcmFnZSB0byBzZWUgaWYgcHJvamVjdCBhbHJlYWR5IGV4aXN0c1xuY29uc3QgY2hlY2tMb2NhbFN0b3JhZ2UgPSAoY2xpY2tDb3VudCwgcHJvamVjdE5hbWUsIGl0ZW0pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RXhpc3RzID0gTE9DQUwubGVuZ3RoID4gMDtcbiAgICByZXR1cm4gcHJvamVjdEV4aXN0cyA/IHRydWUgOiBmYWxzZTtcbn1cblxuY29uc3QgbmV3UHJvakJ0biA9ICgoKSA9PiB7XG4gICAgbGV0IGNsaWNrQ291bnQgPSAwO1xuICAgIGNvbnN0IG5ld0l0ZW1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLW5ldy1pdGVtLWJ0bicpO1xuICAgIGNvbnN0IGlucHV0TmV3SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1uZXctaXRlbScpO1xuICAgIGNvbnN0IGxhYmVsTmV3SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbC1uZXctaXRlbScpO1xuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtYnRuJyk7XG4gICAgY29uc3QgY3JlYXRlTmV3QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1uZXctYnRuJyk7XG4gICAgY29uc3Qgb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJlZC1pdGVtLWxpc3QnKTtcblxuICAgIGNyZWF0ZU5ld0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lO1xuICAgICAgICBjb25zdCBwcm9qZWN0RXhpc3RzID0gY2hlY2tMb2NhbFN0b3JhZ2UoKTtcblxuICAgICAgICBpZiAocHJvamVjdEV4aXN0cykge1xuICAgICAgICAgICAgLy9jbGVhciBpdGVtcyBhbmQgbmFtZVxuICAgICAgICAgICAgIGNsZWFyQWxsSXRlbXNET00ob2wpO1xuICAgICAgICAgICAgLy9jcmVhdGUgbmV3IHByb2plY3QgKG9iaikgaW5zaWRlIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgIC8vY3VycmVudCBwcm9qIHdpbGwgYWx3YXlzIGJlIHdpbmRvdy5sb2NhbHN0b3JhZ2Uua2V5KDApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGlja0NvdW50Kys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjbGlja0NvdW50KTtcbiAgICAgICAgICAgIC8vYXNrIHVzZXIgdG8gbmFtZSBuZXcgcHJvamVjdFxuICAgICAgICAgICAgLy93aXBlIGRlZmF1bHQgbGlzdFxuICAgICAgICAgICAgLy9zdGFydCBuZXcgcHJvamVjdCB3aXRoIG5hbWUgZ2l2ZW4gKGtleSBuYW1lIGluIGxvY2FsIHN0b3JhZ2Ugb2JqKVxuICAgICAgICAgICAgcHJvamVjdE5hbWUgPSBwcm9tcHQoJ1BsZWFzZSBlbnRlciB0aGUgbmFtZSBvZiB5b3VyIHByb2plY3QnLCAnbXlQcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9hZGQgbmV3IHByb2plY3QgbmFtZSB0byB0b3Agb2YgcGFnZVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZUhlYWRlcicpLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICAgICAgICAgICAgLy9jcmVhdGUgbmV3IGZvbGRlciBpbiBjdXJyZW50IHByb2plY3QgbGlzdFxuICAgICAgICAgICAgICAgIGNyZWF0ZVByb2plY3RGb2xkZXIocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgICAgIC8vY2xlYXIgZGVmYXVsdCBhcnJheSBsaXN0IFxuXG5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcmVkLWl0ZW0tbGlzdCcpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGQgPSBkZWxldGVDaGlsZEVsZW1lbnRzKG9sKTtcbiAgICAgICAgICAgICAgICAvLyBkKCk7XG5cbiAgICAgICAgICAgICAgICBhZGRDbGlja0NvdW50KGNsaWNrQ291bnQsIHByb2plY3ROYW1lKTtcblxuICAgICAgICAgICAgICAgIHJlbW92ZURpc3BsYXlOb25lKGlucHV0TmV3SXRlbSk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRGlzcGxheU5vbmUoc3VibWl0QnRuKTtcbiAgICAgICAgICAgICAgICByZW1vdmVEaXNwbGF5Tm9uZShsYWJlbE5ld0l0ZW0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1TdWJtaXNzaW9uKGNsaWNrQ291bnQsIHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59KSgpXG5cbmNvbnN0IG5hdkNsb3NlZCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluU2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXNpZGViYXInKTtcbiAgICBjb25zdCBtYWluQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWJvZHknKTtcbiAgICBtYWluQm9keS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIG1haW5TaWRlYmFyLnN0eWxlLnpJbmRleCA9IFwiMFwiO1xuICAgIG1haW5TaWRlYmFyLnN0eWxlLndpZHRoID0gXCIwXCI7XG59XG5jb25zdCBuYXZPcGVuID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5TaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tc2lkZWJhcicpO1xuICAgIGNvbnN0IG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tYm9keScpO1xuICAgIG1haW5TaWRlYmFyLnN0eWxlLnpJbmRleCA9IFwiMVwiO1xuICAgIG1haW5TaWRlYmFyLnN0eWxlLndpZHRoID0gXCIyNTBweFwiO1xuICAgIG1haW5Cb2R5LnN0eWxlLm9wYWNpdHkgPSAnLjUnO1xufVxuXG4vL2V2ZW50IGxpc3RlbmVyIHRvIG9wZW4gdXAgc2lkZSBtZW51IGJhclxuLy8gY29uc3QgbWVudUV2ZW50TGlzdGVuZXIgPSAoKCkgPT4ge1xuLy8gICAgIGNvbnN0IG1lbnVMb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaWNvbicpO1xuLy8gICAgIGNvbnN0IG1haW5TaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2lkZWJhcicpO1xuLy8gICAgIG1lbnVMb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbi8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuLy8gICAgICAgICBuYXZPcGVuKCk7XG4vLyAgICAgfSlcbi8vIH0pKCk7XG5cbi8vIGNvbnN0IG1lbnVDbG9zZUJ0bkxpc3RlbmVyID0gKCgpID0+IHtcbi8vICAgICBjb25zdCBtZW51Q2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2Utc2lkZWJhci1pY29uJyk7XG4vLyAgICAgY29uc3QgbWFpblNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zaWRlYmFyJyk7XG4vLyAgICAgbWVudUNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgICAgICAvLyBhZGREaXNwbGF5Tm9uZShtYWluU2lkZWJhcik7XG4vLyAgICAgICAgIG5hdkNsb3NlZCgpO1xuLy8gICAgIH0pXG4vLyB9KSgpO1xuXG4vL25ldyBsaXN0IGl0ZW0gYnRuIGxpc3RlbmVyIFxuY29uc3QgbmV3SXRlbUJ0bkxpc3RlbmVyID0gKCgpID0+IHtcbiAgICBsZXQgY2xpY2tDb3VudCA9IDA7XG4gICAgY29uc3QgbmV3SXRlbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtbmV3LWl0ZW0tYnRuJyk7XG4gICAgY29uc3QgaW5wdXROZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LW5ldy1pdGVtJyk7XG4gICAgY29uc3QgbGFiZWxOZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhYmVsLW5ldy1pdGVtJyk7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1idG4nKTtcblxuICAgIG5ld0l0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vcmVtb3ZlIGRpc3BsYXkgbm9uZSBmcm9tIGlucHV0IGZvcm0gaXRlbXNcblxuICAgICAgICBjb25zdCBwcm9qZWN0RXhpc3RzID0gY2hlY2tMb2NhbFN0b3JhZ2UoKTtcblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lSGVhZGVyJykgPT09ICdteVByb2plY3QnKSB7XG4gICAgICAgICAgICByZW1vdmVEaXNwbGF5Tm9uZShpbnB1dE5ld0l0ZW0pO1xuICAgICAgICAgICAgcmVtb3ZlRGlzcGxheU5vbmUoc3VibWl0QnRuKTtcbiAgICAgICAgICAgIHJlbW92ZURpc3BsYXlOb25lKGxhYmVsTmV3SXRlbSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmb3JtU3VibWlzc2lvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9qZWN0RXhpc3RzKSB7XG4gICAgICAgICAgICAvL3RoaXMgbmVlZHMgdG8gYmUgZml4ZWRcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gU0VTU0lPTi5rZXkoMCk7XG4gICAgICAgICAgICBsZXQgZ2V0Q2xpY2tDb3VudCA9IFNFU1NJT04uZ2V0SXRlbSgnaGVsbG8nKTtcbiAgICAgICAgICAgIGdldENsaWNrQ291bnQrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGdldENsaWNrQ291bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJlbW92ZURpc3BsYXlOb25lKGlucHV0TmV3SXRlbSk7XG4gICAgICAgIHJlbW92ZURpc3BsYXlOb25lKHN1Ym1pdEJ0bik7XG4gICAgICAgIHJlbW92ZURpc3BsYXlOb25lKGxhYmVsTmV3SXRlbSk7XG5cbiAgICAgICAgcmV0dXJuIGZvcm1TdWJtaXNzaW9uKGNsaWNrQ291bnQsIHByb2plY3ROYW1lKTtcbiAgICB9KVxuXG4gICAgXG59KSgpO1xuXG4vL2RlbGV0ZSBhbGwgY2hpbGQgZWxlbWVudHMgZnVuY3Rpb25cbmNvbnN0IGRlbGV0ZUNoaWxkRWxlbWVudHMgPSAocGFyZW50RWwpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgd2hpbGUgKHBhcmVudEVsLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRFbC5yZW1vdmVDaGlsZChwYXJlbnRFbC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIC8vcmVtb3ZlIGZyb20gYXJyL2xvY2FsIHN0b3JhZ2VcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy90aGUgdmFsdWUgb2YgdGhlIGtleSB2YWx1ZSBwYWlyIGlzIHRoZSBvYmplY3QgYXJyYXkgdGhhdCBpcyBjcmVhdGVkIGZvciBlYWNoIHByb2plY3QgKGxpc3Qgb2YgaXRlbXMpXG5jb25zdCBwcm9qZWN0TG9jYWxTdG9yYWdlID0gKGNsaWNrQ291bnQsIHByb2plY3ROYW1lLCBpdGVtKSA9PiB7XG4gICAgY29uc3QgZ2V0Q3VycmVudFByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lSGVhZGVyJykudGV4dENvbnRlbnQ7XG4gICAgY29uc29sZS5sb2coZ2V0Q3VycmVudFByb2plY3ROYW1lKTtcbiAgICBjb25zdCBsb2NhbFN0b3JhZ2VJdGVtTGlzdCA9IFtdO1xuICAgIC8vRklORCBQUk9KRUNUIE5BTUUgQU5EIFBVU0ggTEFTVCBJVEVNIElOVE8gSVQgXG5cbiAgICBjb25zdCBwcm9qZWN0RXhpc3RzID0gY2hlY2tMb2NhbFN0b3JhZ2UoKTtcblxuICAgIGNvbnN0IGNyZWF0ZUl0ZW1Gcm9tTG9jYWxTdG9yYWdlID0gKGl0ZW0sIHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IGQgPSBjcmVhdGVEZWZhdWx0QXJyYXlMaXN0KCk7XG4gICAgICAgIGNvbnN0IGQgPSBpdGVtO1xuICAgICAgICAgICAgY29uc3QgbiA9IGQubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGRjID0gZC5kYXRlQ3JlYXRlZDtcbiAgICAgICAgICAgIC8vbGFzdCBpdGVtP1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZW1IVE1MKG4sIGRjLCBwcm9qZWN0TmFtZSk7XG4gICAgfVxuICAgIFxuICAgIGlmIChwcm9qZWN0RXhpc3RzKSB7XG4gICAgICAgIGxldCBwcm9qID0gSlNPTi5wYXJzZShMT0NBTC5nZXRJdGVtKGdldEN1cnJlbnRQcm9qZWN0TmFtZSkpO1xuICAgICAgICAvLyBKU09OLnBhcnNlKHByb2opO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qKTtcbiAgICAgICAgcHJvai5wdXNoKGl0ZW0pO1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtLCBnZXRDdXJyZW50UHJvamVjdE5hbWUpO1xuICAgICAgICAvLyBMT0NBTC5zZXRJdGVtKGAke3Byb2plY3ROYW1lfWAsIEpTT04uc3RyaW5naWZ5KHByb2opKTtcbiAgICAgICAgTE9DQUwuc2V0SXRlbShnZXRDdXJyZW50UHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KHByb2opKTtcbiAgICAgICAgLy8gY3JlYXRlSXRlbUZyb21Mb2NhbFN0b3JhZ2UoaXRlbSwgcHJvamVjdE5hbWUpO1xuICAgICAgICBjcmVhdGVJdGVtRnJvbUxvY2FsU3RvcmFnZShpdGVtLCBnZXRDdXJyZW50UHJvamVjdE5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZENsaWNrQ291bnQoY2xpY2tDb3VudCwgcHJvamVjdE5hbWUpO1xuICAgICAgICBcbiAgICAgICAgTE9DQUwuc2V0SXRlbShgJHtwcm9qZWN0TmFtZX1gLCBKU09OLnN0cmluZ2lmeShbaXRlbV0pKTtcbiAgICAgICAgY3JlYXRlSXRlbUZyb21Mb2NhbFN0b3JhZ2UoaXRlbSwgcHJvamVjdE5hbWUpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIExPQ0FMO1xufVxuXG4vL0pTT04ucGFyc2UgaXRlbSBsaXN0IGFyciwgYW5kIGNyZWF0ZSBodG1sIGVsZW1lbnQgZm9yIGVhY2ggaXRlbSBpbiBMT0NBTCBzdG9yYWdlIFxuY29uc3QgbG9hZFNlc3Npb25TdG9yYWdlUGFnZSA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZUhlYWRlcicpLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgY29uc29sZS5sb2cocHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IHRvRG9MaXN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci10ZXh0Jyk7XG4gICAgLy9jcmVhdGUgZm9sZGVyIGluIHNpZGViYXIgb24gcGFnZSBsb2FkXG4gICAgLy93aWxsIG5lZWQgdG8gc2hvdyBhbGwgcHJvamVjdHMgaW4gc2lkZWJhclxuICAgIGFkZERpc3BsYXlOb25lKHRvRG9MaXN0SGVhZGVyKTtcbiAgICBjcmVhdGVQcm9qZWN0Rm9sZGVyKHByb2plY3ROYW1lKTtcblxuICAgIGxldCBpID0gTE9DQUwuZ2V0SXRlbShgJHtwcm9qZWN0TmFtZX1gKTtcbiAgICBpID0gSlNPTi5wYXJzZShpKTtcbiAgICByZXR1cm4gZ2V0TmFtZUFuZERhdGUoaSwgcHJvamVjdE5hbWUpO1xufVxuXG4vL2NyZWF0ZSBwcm9qZWN0IGZvbGRlciBpbiBzaWRlYmFyIHdoZW4gbmV3IHByb2plY3QgaXMgY3JlYXRlZFxuY29uc3QgY3JlYXRlUHJvamVjdEZvbGRlciA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xuICAgIGNvbnN0IGN1cnJlbnRQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtcCcpO1xuICAgIGNvbnN0IHNpZGVCYXJNYWluTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyLW1haW4tbGlzdCcpO1xuXG4gICAgY29uc3QgcnMgPSBnZXRDb21wdXRlZFN0eWxlKHJvb3QpO1xuICAgIGNvbnN0IGRhcmtCbHVlID0gcnMuZ2V0UHJvcGVydHlWYWx1ZSgnLS1kYXJrLWJsdWUnKTtcblxuICAgIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIC8vIG5ld1Byb2ouY2xhc3NMaXN0LmFkZCgndGV4dCcpO1xuICAgIG5ld1Byb2ouY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWUnKTtcbiAgICBuZXdQcm9qLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgbmV3UHJvai5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBkYXJrQmx1ZTtcbiAgICBjdXJyZW50UC5hcHBlbmRDaGlsZChuZXdQcm9qKTtcbn1cblxuLy9hZGQgY2xpY2sgY291bnQgdG8gc2Vzc2lvbiBzdG9yYWdlIHRvIHRyYWNrXG5jb25zdCBhZGRDbGlja0NvdW50ID0gKGNsaWNrQ291bnQsIHByb2plY3ROYW1lKSA9PiB7XG4gICAgbGV0IGRhdGEgPSBTRVNTSU9OLmdldEl0ZW0ocHJvamVjdE5hbWUpO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFNFU1NJT04uZ2V0SXRlbShwcm9qZWN0TmFtZSkpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhTRVNTSU9OKTtcbiAgICByZXR1cm4gd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oYCR7cHJvamVjdE5hbWV9YCwgY2xpY2tDb3VudCk7XG59XG5cbi8vIGxvYWQgaW4gZGVmYXVsdCBwYWdlICh1c2luZyBkZWZhdWx0YXJyYXlsaXN0KVxuY29uc3QgbG9hZERlZmF1bHRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGQgPSBjcmVhdGVEZWZhdWx0QXJyYXlMaXN0KCk7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3ROYW1lID0gJ215UHJvamVjdCc7XG4gICAgLy8gTE9DQUwuc2V0SXRlbSgnbXlQcm9qZWN0JywgYCR7SlNPTi5zdHJpbmdpZnkoZCl9YCk7XG4gICAgcmV0dXJuIGdldE5hbWVBbmREYXRlKGQsIGRlZmF1bHRQcm9qZWN0TmFtZSk7XG59XG5cbi8vTE9BRCBQQUdFXG5jb25zdCBsb2FkUGFnZSA9ICgoKSAgPT4gRE9NTG9hZGVkKGxvYWREZWZhdWx0UGFnZSwgbG9hZFNlc3Npb25TdG9yYWdlUGFnZSkpKCk7XG5cbmV4cG9ydCB7XG4gICAgZGVsZXRlQnRuTGlzdGVuZXIsIFxuICAgIGV4cGFuZEJ0bkxpc3RlbmVyLFxuICAgIGl0ZW1FZGl0YWJsZSxcbiAgICBpZkNoZWNrZWQsXG4gICAgY2hlY2tMb2NhbFN0b3JhZ2UsXG4gICAgY2xlYXJBbGxJdGVtc0RPTVxufSIsImNvbnN0IERPTUxvYWRlZCA9IChhLCBjKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZSkgPT4ge1xuICAgICAgICBcblxuICAgICAgICAvL2dldCBjdXJyZW50bCwgbGF0ZXN0IHByb2plY3QgZnJvbSBsb2NhbCBzdG9yYWdlIGFuZCBwYXNzIGluIHByb2plY3RuYW1lIHRvIGxvYWRzZXNzaW9uXG4gICAgICAgIGxldCBwcm9qTmFtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2Uua2V5KDApO1xuXG4gICAgICAgIC8vY2hlY2sgZm9yIHByb2plY3ROYW1lIGZyb20gc2lkZXRhYiAod2hhdGV2ZXIgcHJvamVjdCBpcyBoaWdobGlnaHRlZClcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGggPT09IDAgPyBhKCkgOiBjKHByb2pOYW1lKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERPTUxvYWRlZDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9