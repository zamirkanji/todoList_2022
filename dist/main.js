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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --black-color: black;\n    --font-weight: 300;\n    --border-test: 2px solid yellow;\n    --dark-blue: #0F2027;\n    --middle-blue: #203A43;\n    --light-blue: #2C5364;\n    --closetowhite: #598091;\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing: border-box;\n    font-weight: var(--font-weight);\n}\n\nhtml {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: black;\n}\n\n.text {\n    color: var(--closetowhite);\n    /* color: whitesmoke; */\n    /* text-align: center; */\n}\n\n.main-content {\n    min-height: 100%;\n    margin: 0;\n    padding: 10px;\n    /* overflow: hidden; */\n    display: flex;\n    /* flex-direction: column; */\n    background-color: black;\n    gap: 10px;\n}\n\n/* main sidebar */\n.main-sidebar {\n    /* margin: 10px 0px 10px 10px; */\n    margin: 0;\n    padding: 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    /* border: 2px solid var(--light-blue); */\n    /* background-color: var(--dark-blue); */\n    /* filter: blur(50%); */\n    gap: 10px;\n    border-radius: 5px;\n    transition: all 1s ease-in;\n}\n\n\n.sidebar-title  {\n    flex: .25;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--middle-blue);\n    text-align: center;\n    border-radius: 5px;\n    letter-spacing: 1px;\n    font-size: 100%;\n}\n\n#sidebar-title-text {\n    color: white;\n}\n\n.sidebar-project-list {\n    flex: 2.25;\n    width: 100%;\n    border-radius: 5px;\n}\n\n.sidebar-main-list {\n    margin: 0;\n    padding: 8px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 10px;\n}\n\n.sidebar-list-item {\n    margin: 0;\n    padding: 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--light-blue);\n    height: 25px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    border-radius: 5px;\n    font-size: 100%;\n}\n\n#current-p {\n    background-color: var(--closetowhite);\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n.projectName {\n    color: white;\n}\n\n.sidebar-create-new-btn {\n    flex: .5;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--middle-blue);\n    border-radius: 5px;\n}\n\n/* ************************* main body ************************** */\n.main-body {\n    margin: 0;\n    padding: 0;\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n}\n\n.main-header {\n    margin: 0;\n    padding: 0;\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.menu-icon{\n    width: 30px;\n    height: 30px;\n}\n#menu-icon {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100%;\n}\n\n#projectNameHeader {\n    color: white;\n    letter-spacing: 1px;\n    /* border: 1px solid white; */\n}\n\n#header-text {\n    color: white;\n    letter-spacing: 1px;\n}\n\n\n\n\n/* main list content */\n.main-list-content {\n    flex: 2.75;\n    display: flex;\n    flex-direction: column;\n    /* border: 10px solid var(--black-color); */\n    /* margin: 10px; */\n    margin: 0;\n    padding: 0;\n    gap: 10px;\n}\n\n.list-container {\n    flex: 2.25;\n    margin: 0;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    background-color: var(--middle-blue);\n    border-radius: 5px;\n    gap: 50px;\n}\n\n.ordered-item-list {\n    flex: 2;\n    /* height: 100%;\n    width: 100%; */\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 10px;\n}\n\n.list-item-options {\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    /* border: 1px solid violet; */\n}\n\n#create-new-item-btn {\n    width: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n\n.form-main {\n    /* justify-content: space-between; */\n    gap: 10px;\n    width: 75%;\n    display: flex;\n    /* border: 1px solid violet; */\n    /* align-items: center; */\n}\n\n.label-new-item {\n    text-align: center;\n    flex: .5;\n}\n\n#input-new-item {\n    border-radius: 5px;\n    border: none;\n    flex: 1.5;\n}\n\n#submit-btn {\n    flex: .5;\n}\n\n\n/* *********************each item********************* */\n.list-item {\n    margin: 0;\n    padding: 0 0 0 10px;\n    /* list-style-type: none;\n    text-decoration: none;\n    list-style: none; */\n    /* background-color: var(--closetowhite); */\n    background-color: var(--black-color);\n    height: 45px;\n    color: white;\n    letter-spacing: 1px;\n    display: flex;\n    border-radius: 5px;\n    \n    /* align-items: center; */\n    /* justify-content: space-between; */\n    /* font-size: 100%; */\n    /* flex: 1.75; */\n}\n\n.item-text {\n    margin: 0;\n    padding: 0;\n    color: white;\n    flex: 1.75;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.item-options-container {\n    flex: .3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    padding: 10px;\n    /* height: 100%; */\n    gap: 5px;\n    background-color: var(--closetowhite);\n    border-radius: 0 5px 5px 0;\n}\n\n#item-checkbox {\n    flex: 1;\n    /* border-radius: 50px; */\n}\n\n.item-delete-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n\n#delete-item {\n    border: none;\n    border-radius: 10px;\n    background-color: var(--closetowhite);\n}\n\n\n#delete-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n    color: white;\n}\n\n.expand-icon-btn {\n    background-color: var(--closetowhite);\n    border: none;\n    flex: 1;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.expand-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n}\n\n\n\n\n.item-details-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n#item-details {\n    border: none;\n    border-radius: 10px;\n}\n\n.item-date-created {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n\n.expand-container {\n    margin: 0;\n    padding: 0 8px 0 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--closetowhite);\n    height: 150px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    border-radius: 5px;\n    font-size: 85%;\n}\n\n.details-container {\n    flex: .5;\n    /* border: 1px solid var(--closetowhite); */\n    display: flex;\n    justify-content: center;\n    background-color: var(--dark-blue);\n    /* align-items: center; */\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.details-title {\n    color: var(--closetowhite);\n    font-size: 100%;\n}\n\n\n\n\n\n\n\n\n\n/* ******************** general ********************** */\n\n.display {\n    display: none;\n    animation: ease-in 1s;\n}\n\n.btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 10px;\n}\n\n.item-btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 5px;\n    /* width: 50px; */\n    width: 65%;\n    height: 65%;\n    font-size: 75%;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,+BAA+B;IAC/B,oBAAoB;IACpB,sBAAsB;IACtB,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,yCAAyC;IACzC,sBAAsB;IACtB,+BAA+B;AACnC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,0BAA0B;IAC1B,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;IAChB,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,4BAA4B;IAC5B,uBAAuB;IACvB,SAAS;AACb;;AAEA,iBAAiB;AACjB;IACI,gCAAgC;IAChC,SAAS;IACT,UAAU;IACV,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,yCAAyC;IACzC,wCAAwC;IACxC,uBAAuB;IACvB,SAAS;IACT,kBAAkB;IAClB,0BAA0B;AAC9B;;;AAGA;IACI,SAAS;IACT,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,oCAAoC;IACpC,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,SAAS;AACb;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,qBAAqB;IACrB,qBAAqB;IACrB,gBAAgB;IAChB,mCAAmC;IACnC,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,qCAAqC;IACrC,OAAO;IACP,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,QAAQ;IACR,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA,mEAAmE;AACnE;IACI,SAAS;IACT,UAAU;IACV,OAAO;IACP,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,SAAS;IACT,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,yDAAuC;IACvC,4BAA4B;IAC5B,2BAA2B;IAC3B,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,mBAAmB;AACvB;;;;;AAKA,sBAAsB;AACtB;IACI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,2CAA2C;IAC3C,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,SAAS;AACb;;AAEA;IACI,UAAU;IACV,SAAS;IACT,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,oCAAoC;IACpC,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,OAAO;IACP;kBACc;IACd,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,SAAS;AACb;;AAEA;IACI,SAAS;IACT,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;;;AAIA;IACI,oCAAoC;IACpC,SAAS;IACT,UAAU;IACV,aAAa;IACb,8BAA8B;IAC9B,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,SAAS;AACb;;AAEA;IACI,QAAQ;AACZ;;;AAGA,wDAAwD;AACxD;IACI,SAAS;IACT,mBAAmB;IACnB;;uBAEmB;IACnB,2CAA2C;IAC3C,oCAAoC;IACpC,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,kBAAkB;;IAElB,yBAAyB;IACzB,oCAAoC;IACpC,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,YAAY;IACZ,UAAU;IACV,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,QAAQ;IACR,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,qCAAqC;IACrC,0BAA0B;AAC9B;;AAEA;IACI,OAAO;IACP,yBAAyB;AAC7B;;AAEA;IACI,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;;AAGA;IACI,YAAY;IACZ,mBAAmB;IACnB,qCAAqC;AACzC;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,yDAAyC;IACzC,4BAA4B;IAC5B,2BAA2B;IAC3B,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,qCAAqC;IACrC,YAAY;IACZ,OAAO;IACP,YAAY;IACZ,SAAS;IACT,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yDAAsD;IACtD,4BAA4B;IAC5B,2BAA2B;IAC3B,qBAAqB;AACzB;;;;;AAKA;IACI,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,wCAAwC;IACxC,YAAY;AAChB;AACA;IACI,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,wCAAwC;IACxC,YAAY;AAChB;;AAEA;IACI,SAAS;IACT,oBAAoB;IACpB,qBAAqB;IACrB,qBAAqB;IACrB,gBAAgB;IAChB,qCAAqC;IACrC,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,8BAA8B;IAC9B,kBAAkB;IAClB,cAAc;AAClB;;AAEA;IACI,QAAQ;IACR,2CAA2C;IAC3C,aAAa;IACb,uBAAuB;IACvB,kCAAkC;IAClC,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,0BAA0B;IAC1B,eAAe;AACnB;;;;;;;;;;AAUA,wDAAwD;;AAExD;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,0BAA0B;IAC1B,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,0BAA0B;IAC1B,YAAY;IACZ,iBAAiB;IACjB,UAAU;IACV,WAAW;IACX,cAAc;AAClB","sourcesContent":[":root {\n    --black-color: black;\n    --font-weight: 300;\n    --border-test: 2px solid yellow;\n    --dark-blue: #0F2027;\n    --middle-blue: #203A43;\n    --light-blue: #2C5364;\n    --closetowhite: #598091;\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n    box-sizing: border-box;\n    font-weight: var(--font-weight);\n}\n\nhtml {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background-color: black;\n}\n\n.text {\n    color: var(--closetowhite);\n    /* color: whitesmoke; */\n    /* text-align: center; */\n}\n\n.main-content {\n    min-height: 100%;\n    margin: 0;\n    padding: 10px;\n    /* overflow: hidden; */\n    display: flex;\n    /* flex-direction: column; */\n    background-color: black;\n    gap: 10px;\n}\n\n/* main sidebar */\n.main-sidebar {\n    /* margin: 10px 0px 10px 10px; */\n    margin: 0;\n    padding: 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    /* border: 2px solid var(--light-blue); */\n    /* background-color: var(--dark-blue); */\n    /* filter: blur(50%); */\n    gap: 10px;\n    border-radius: 5px;\n    transition: all 1s ease-in;\n}\n\n\n.sidebar-title  {\n    flex: .25;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--middle-blue);\n    text-align: center;\n    border-radius: 5px;\n    letter-spacing: 1px;\n    font-size: 100%;\n}\n\n#sidebar-title-text {\n    color: white;\n}\n\n.sidebar-project-list {\n    flex: 2.25;\n    width: 100%;\n    border-radius: 5px;\n}\n\n.sidebar-main-list {\n    margin: 0;\n    padding: 8px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 10px;\n}\n\n.sidebar-list-item {\n    margin: 0;\n    padding: 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--light-blue);\n    height: 25px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    border-radius: 5px;\n    font-size: 100%;\n}\n\n#current-p {\n    background-color: var(--closetowhite);\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n.projectName {\n    color: white;\n}\n\n.sidebar-create-new-btn {\n    flex: .5;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--middle-blue);\n    border-radius: 5px;\n}\n\n/* ************************* main body ************************** */\n.main-body {\n    margin: 0;\n    padding: 0;\n    flex: 2;\n    display: flex;\n    flex-direction: column;\n}\n\n.main-header {\n    margin: 0;\n    padding: 0;\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.menu-icon{\n    width: 30px;\n    height: 30px;\n}\n#menu-icon {\n    background-image: url('./img/menu.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100%;\n}\n\n#projectNameHeader {\n    color: white;\n    letter-spacing: 1px;\n    /* border: 1px solid white; */\n}\n\n#header-text {\n    color: white;\n    letter-spacing: 1px;\n}\n\n\n\n\n/* main list content */\n.main-list-content {\n    flex: 2.75;\n    display: flex;\n    flex-direction: column;\n    /* border: 10px solid var(--black-color); */\n    /* margin: 10px; */\n    margin: 0;\n    padding: 0;\n    gap: 10px;\n}\n\n.list-container {\n    flex: 2.25;\n    margin: 0;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    background-color: var(--middle-blue);\n    border-radius: 5px;\n    gap: 50px;\n}\n\n.ordered-item-list {\n    flex: 2;\n    /* height: 100%;\n    width: 100%; */\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    gap: 10px;\n}\n\n.list-item-options {\n    flex: .25;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    /* border: 1px solid violet; */\n}\n\n#create-new-item-btn {\n    width: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n\n.form-main {\n    /* justify-content: space-between; */\n    gap: 10px;\n    width: 75%;\n    display: flex;\n    /* border: 1px solid violet; */\n    /* align-items: center; */\n}\n\n.label-new-item {\n    text-align: center;\n    flex: .5;\n}\n\n#input-new-item {\n    border-radius: 5px;\n    border: none;\n    flex: 1.5;\n}\n\n#submit-btn {\n    flex: .5;\n}\n\n\n/* *********************each item********************* */\n.list-item {\n    margin: 0;\n    padding: 0 0 0 10px;\n    /* list-style-type: none;\n    text-decoration: none;\n    list-style: none; */\n    /* background-color: var(--closetowhite); */\n    background-color: var(--black-color);\n    height: 45px;\n    color: white;\n    letter-spacing: 1px;\n    display: flex;\n    border-radius: 5px;\n    \n    /* align-items: center; */\n    /* justify-content: space-between; */\n    /* font-size: 100%; */\n    /* flex: 1.75; */\n}\n\n.item-text {\n    margin: 0;\n    padding: 0;\n    color: white;\n    flex: 1.75;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.item-options-container {\n    flex: .3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    padding: 10px;\n    /* height: 100%; */\n    gap: 5px;\n    background-color: var(--closetowhite);\n    border-radius: 0 5px 5px 0;\n}\n\n#item-checkbox {\n    flex: 1;\n    /* border-radius: 50px; */\n}\n\n.item-delete-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n\n#delete-item {\n    border: none;\n    border-radius: 10px;\n    background-color: var(--closetowhite);\n}\n\n\n#delete-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url('./img/delete.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n    color: white;\n}\n\n.expand-icon-btn {\n    background-color: var(--closetowhite);\n    border: none;\n    flex: 1;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.expand-icon {\n    width: 24px;\n    height: 24px;\n    background-image: url('./img/chevron-down\\ \\(1\\).png');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 24px;\n}\n\n\n\n\n.item-details-btn {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n#item-details {\n    border: none;\n    border-radius: 10px;\n}\n\n.item-date-created {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* border: 1px solid var(--dark-blue); */\n    height: 100%;\n}\n\n.expand-container {\n    margin: 0;\n    padding: 0 8px 0 8px;\n    list-style-type: none;\n    text-decoration: none;\n    list-style: none;\n    background-color: var(--closetowhite);\n    height: 150px;\n    color: black;\n    letter-spacing: 1px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: space-between;\n    border-radius: 5px;\n    font-size: 85%;\n}\n\n.details-container {\n    flex: .5;\n    /* border: 1px solid var(--closetowhite); */\n    display: flex;\n    justify-content: center;\n    background-color: var(--dark-blue);\n    /* align-items: center; */\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.details-title {\n    color: var(--closetowhite);\n    font-size: 100%;\n}\n\n\n\n\n\n\n\n\n\n/* ******************** general ********************** */\n\n.display {\n    display: none;\n    animation: ease-in 1s;\n}\n\n.btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 10px;\n}\n\n.item-btn {\n    background-color: black;\n    border: none;\n    border-radius: 5px;\n    color: var(--closetowhite);\n    padding: 5px;\n    /* width: 50px; */\n    width: 65%;\n    height: 65%;\n    font-size: 75%;\n}\n\n\n\n"],"sourceRoot":""}]);
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
    checkboxLabel.id = 'item-checkbox-label';
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
    if (document.querySelector('#projectNameHeader').textContent === 'myProject') {
        return;
    } else {
            // const a = deleteBtnListener(projectName);
            const b = (0,___WEBPACK_IMPORTED_MODULE_0__.expandBtnListener)();
            // const c = itemEditable();
            const d = (0,___WEBPACK_IMPORTED_MODULE_0__.ifChecked)();
            // return a && b;
            return b && d;
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
    const clearAllBtn = document.getElementById('clear-all-items-btn');
    clearAllBtn.addEventListener('click', () => {
        //get current project (Whatever is clicked on sidebar)
        const getCurrentProjectName = window.localStorage.key(0);
        console.log('delete btn clicked');
        const ol = document.querySelector('.ordered-item-list');
        const confirmDeleteAll = confirm('Would you like to clear all items?');
        if (confirmDeleteAll) {
            while (ol.firstChild) {
                ol.removeChild(ol.firstChild);
            }
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
/* harmony export */   "ifChecked": () => (/* reexport safe */ _btnListeners__WEBPACK_IMPORTED_MODULE_7__.ifChecked)
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

//get name and date from items and call createItemHTML()
const getNameAndDate = (arr, projectName) => {
    arr.forEach(obj => {
        const n = obj.name;
        const dc = obj.dateCreated;

        // const createItem = createItemHTML(n, dc, projectName);
        // return createItem();
        (0,_DOM__WEBPACK_IMPORTED_MODULE_6__["default"])(n, dc, projectName);
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
        console.log(item);
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
            //this needs to be fixed
            const currentProject = SESSION.key(0);
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
            return (0,_DOM__WEBPACK_IMPORTED_MODULE_6__["default"])(n, dc, projectName);
    }
    
    if (projectExists) {
        let proj = JSON.parse(LOCAL.getItem(getCurrentProjectName));
        // JSON.parse(proj);
        console.log(proj);
        proj.push(item);
        LOCAL.setItem(`${projectName}`, JSON.stringify(proj));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFVBQVUsWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsU0FBUyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLE9BQU8sYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFVBQVUsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLGVBQWUsYUFBYSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FB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Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CaEI7QUFDYztBQUNHO0FBQ2E7QUFDOEM7QUFDdkM7QUFDSjtBQUNuQjtBQUNtRTs7QUFFdEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsZ0RBQWM7QUFDdEIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQVEsSUFBSSxXQUFXLEdBQUcsZ0RBQU87QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxZQUFZLElBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0RBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsWUFBWTtBQUNyQztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSx5QkFBeUIsWUFBWTtBQUNyQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsWUFBWTtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFlBQVk7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBLGNBQWMsMkRBQXNCO0FBQ3BDO0FBQ0EscUNBQXFDLGtCQUFrQjtBQUN2RDtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHFEQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FDL09sQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1VFckJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vc3JjL2J0bkxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyLy4vc3JjL2RlZmF1bHRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi8uL3NyYy9sb2FkUGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3RfMjAyMi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9saXN0XzIwMjIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdF8yMDIyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvbWVudS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9kZWxldGUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWcvY2hldnJvbi1kb3duICgxKS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1ibGFjay1jb2xvcjogYmxhY2s7XFxuICAgIC0tZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgLS1ib3JkZXItdGVzdDogMnB4IHNvbGlkIHllbGxvdztcXG4gICAgLS1kYXJrLWJsdWU6ICMwRjIwMjc7XFxuICAgIC0tbWlkZGxlLWJsdWU6ICMyMDNBNDM7XFxuICAgIC0tbGlnaHQtYmx1ZTogIzJDNTM2NDtcXG4gICAgLS1jbG9zZXRvd2hpdGU6ICM1OTgwOTE7XFxufVxcblxcbioge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0KTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgLyogY29sb3I6IHdoaXRlc21va2U7ICovXFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLyogbWFpbiBzaWRlYmFyICovXFxuLm1haW4tc2lkZWJhciB7XFxuICAgIC8qIG1hcmdpbjogMTBweCAwcHggMTBweCAxMHB4OyAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpOyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpOyAqL1xcbiAgICAvKiBmaWx0ZXI6IGJsdXIoNTAlKTsgKi9cXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluO1xcbn1cXG5cXG5cXG4uc2lkZWJhci10aXRsZSAge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkZGxlLWJsdWUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG4jc2lkZWJhci10aXRsZS10ZXh0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0LWxpc3Qge1xcbiAgICBmbGV4OiAyLjI1O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1tYWluLWxpc3Qge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNpZGViYXItbGlzdC1pdGVtIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbiNjdXJyZW50LXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdE5hbWUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyLWNyZWF0ZS1uZXctYnRuIHtcXG4gICAgZmxleDogLjU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkZGxlLWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKiogbWFpbiBib2R5ICoqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuLm1haW4tYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZmxleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtaWNvbntcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuI21lbnUtaWNvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdE5hbWVIZWFkZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xcbn1cXG5cXG4jaGVhZGVyLXRleHQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcblxcblxcblxcbi8qIG1haW4gbGlzdCBjb250ZW50ICovXFxuLm1haW4tbGlzdC1jb250ZW50IHtcXG4gICAgZmxleDogMi43NTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogYm9yZGVyOiAxMHB4IHNvbGlkIHZhcigtLWJsYWNrLWNvbG9yKTsgKi9cXG4gICAgLyogbWFyZ2luOiAxMHB4OyAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmxpc3QtY29udGFpbmVyIHtcXG4gICAgZmxleDogMi4yNTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkZGxlLWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuLm9yZGVyZWQtaXRlbS1saXN0IHtcXG4gICAgZmxleDogMjtcXG4gICAgLyogaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTsgKi9cXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdC1pdGVtLW9wdGlvbnMge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2aW9sZXQ7ICovXFxufVxcblxcbiNjcmVhdGUtbmV3LWl0ZW0tYnRuIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG4uZm9ybS1tYWluIHtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZpb2xldDsgKi9cXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuLmxhYmVsLW5ldy1pdGVtIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmbGV4OiAuNTtcXG59XFxuXFxuI2lucHV0LW5ldy1pdGVtIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZsZXg6IDEuNTtcXG59XFxuXFxuI3N1Ym1pdC1idG4ge1xcbiAgICBmbGV4OiAuNTtcXG59XFxuXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKioqZWFjaCBpdGVtKioqKioqKioqKioqKioqKioqKioqICovXFxuLmxpc3QtaXRlbSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMCAwIDAgMTBweDtcXG4gICAgLyogbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7ICovXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgXFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG4gICAgLyogZm9udC1zaXplOiAxMDAlOyAqL1xcbiAgICAvKiBmbGV4OiAxLjc1OyAqL1xcbn1cXG5cXG4uaXRlbS10ZXh0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZsZXg6IDEuNzU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLml0ZW0tb3B0aW9ucy1jb250YWluZXIge1xcbiAgICBmbGV4OiAuMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICBnYXA6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XFxufVxcblxcbiNpdGVtLWNoZWNrYm94IHtcXG4gICAgZmxleDogMTtcXG4gICAgLyogYm9yZGVyLXJhZGl1czogNTBweDsgKi9cXG59XFxuXFxuLml0ZW0tZGVsZXRlLWJ0biB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbiNkZWxldGUtaXRlbSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG59XFxuXFxuXFxuI2RlbGV0ZS1pY29uIHtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmV4cGFuZC1pY29uLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZmxleDogMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5leHBhbmQtaWNvbiB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4uaXRlbS1kZXRhaWxzLWJ0biB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpOyAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNpdGVtLWRldGFpbHMge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5pdGVtLWRhdGUtY3JlYXRlZCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpOyAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5leHBhbmQtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDhweCAwIDhweDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDg1JTtcXG59XFxuXFxuLmRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgZmxleDogLjU7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsb3NldG93aGl0ZSk7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5kZXRhaWxzLXRpdGxlIHtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogKioqKioqKioqKioqKioqKioqKiogZ2VuZXJhbCAqKioqKioqKioqKioqKioqKioqKioqICovXFxuXFxuLmRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbmltYXRpb246IGVhc2UtaW4gMXM7XFxufVxcblxcbi5idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uaXRlbS1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIC8qIHdpZHRoOiA1MHB4OyAqL1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBoZWlnaHQ6IDY1JTtcXG4gICAgZm9udC1zaXplOiA3NSU7XFxufVxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsc0JBQXNCO0lBQ3RCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxnQ0FBZ0M7SUFDaEMsU0FBUztJQUNULFVBQVU7SUFDVixPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMsd0NBQXdDO0lBQ3hDLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5Qjs7O0FBR0E7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsU0FBUztBQUNiOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBLG1FQUFtRTtBQUNuRTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5REFBdUM7SUFDdkMsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7Ozs7O0FBS0Esc0JBQXNCO0FBQ3RCO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksT0FBTztJQUNQO2tCQUNjO0lBQ2QsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOzs7O0FBSUE7SUFDSSxvQ0FBb0M7SUFDcEMsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7O0FBR0Esd0RBQXdEO0FBQ3hEO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQjs7dUJBRW1CO0lBQ25CLDJDQUEyQztJQUMzQyxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjs7SUFFbEIseUJBQXlCO0lBQ3pCLG9DQUFvQztJQUNwQyxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixxQ0FBcUM7SUFDckMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksT0FBTztJQUNQLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUNBQXFDO0FBQ3pDOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseURBQXlDO0lBQ3pDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLE9BQU87SUFDUCxZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlEQUFzRDtJQUN0RCw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHFCQUFxQjtBQUN6Qjs7Ozs7QUFLQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFFBQVE7SUFDUiwyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7Ozs7Ozs7Ozs7QUFVQSx3REFBd0Q7O0FBRXhEO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1ibGFjay1jb2xvcjogYmxhY2s7XFxuICAgIC0tZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgLS1ib3JkZXItdGVzdDogMnB4IHNvbGlkIHllbGxvdztcXG4gICAgLS1kYXJrLWJsdWU6ICMwRjIwMjc7XFxuICAgIC0tbWlkZGxlLWJsdWU6ICMyMDNBNDM7XFxuICAgIC0tbGlnaHQtYmx1ZTogIzJDNTM2NDtcXG4gICAgLS1jbG9zZXRvd2hpdGU6ICM1OTgwOTE7XFxufVxcblxcbioge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0KTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgLyogY29sb3I6IHdoaXRlc21va2U7ICovXFxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLyogbWFpbiBzaWRlYmFyICovXFxuLm1haW4tc2lkZWJhciB7XFxuICAgIC8qIG1hcmdpbjogMTBweCAwcHggMTBweCAxMHB4OyAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpOyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpOyAqL1xcbiAgICAvKiBmaWx0ZXI6IGJsdXIoNTAlKTsgKi9cXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluO1xcbn1cXG5cXG5cXG4uc2lkZWJhci10aXRsZSAge1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkZGxlLWJsdWUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG4jc2lkZWJhci10aXRsZS10ZXh0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0LWxpc3Qge1xcbiAgICBmbGV4OiAyLjI1O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1tYWluLWxpc3Qge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnNpZGViYXItbGlzdC1pdGVtIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbiNjdXJyZW50LXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdE5hbWUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyLWNyZWF0ZS1uZXctYnRuIHtcXG4gICAgZmxleDogLjU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlkZGxlLWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qICoqKioqKioqKioqKioqKioqKioqKioqKiogbWFpbiBib2R5ICoqKioqKioqKioqKioqKioqKioqKioqKioqICovXFxuLm1haW4tYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZmxleDogMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmbGV4OiAuMjU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtaWNvbntcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuI21lbnUtaWNvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvbWVudS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcblxcbiNwcm9qZWN0TmFtZUhlYWRlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxufVxcblxcbiNoZWFkZXItdGV4dCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuXFxuXFxuXFxuLyogbWFpbiBsaXN0IGNvbnRlbnQgKi9cXG4ubWFpbi1saXN0LWNvbnRlbnQge1xcbiAgICBmbGV4OiAyLjc1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBib3JkZXI6IDEwcHggc29saWQgdmFyKC0tYmxhY2stY29sb3IpOyAqL1xcbiAgICAvKiBtYXJnaW46IDEwcHg7ICovXFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdC1jb250YWluZXIge1xcbiAgICBmbGV4OiAyLjI1O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWRkbGUtYmx1ZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4ub3JkZXJlZC1pdGVtLWxpc3Qge1xcbiAgICBmbGV4OiAyO1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlOyAqL1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5saXN0LWl0ZW0tb3B0aW9ucyB7XFxuICAgIGZsZXg6IC4yNTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZpb2xldDsgKi9cXG59XFxuXFxuI2NyZWF0ZS1uZXctaXRlbS1idG4ge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcblxcbi5mb3JtLW1haW4ge1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmlvbGV0OyAqL1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG4ubGFiZWwtbmV3LWl0ZW0ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZsZXg6IC41O1xcbn1cXG5cXG4jaW5wdXQtbmV3LWl0ZW0ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZmxleDogMS41O1xcbn1cXG5cXG4jc3VibWl0LWJ0biB7XFxuICAgIGZsZXg6IC41O1xcbn1cXG5cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKiplYWNoIGl0ZW0qKioqKioqKioqKioqKioqKioqKiogKi9cXG4ubGlzdC1pdGVtIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xcbiAgICAvKiBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTsgKi9cXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcbiAgICAvKiBmb250LXNpemU6IDEwMCU7ICovXFxuICAgIC8qIGZsZXg6IDEuNzU7ICovXFxufVxcblxcbi5pdGVtLXRleHQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZmxleDogMS43NTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaXRlbS1vcHRpb25zLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IC4zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIGdhcDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcXG59XFxuXFxuI2l0ZW0tY2hlY2tib3gge1xcbiAgICBmbGV4OiAxO1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1MHB4OyAqL1xcbn1cXG5cXG4uaXRlbS1kZWxldGUtYnRuIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuI2RlbGV0ZS1pdGVtIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZXRvd2hpdGUpO1xcbn1cXG5cXG5cXG4jZGVsZXRlLWljb24ge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2RlbGV0ZS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmV4cGFuZC1pY29uLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZmxleDogMTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5leHBhbmQtaWNvbiB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvY2hldnJvbi1kb3duXFxcXCBcXFxcKDFcXFxcKS5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XFxufVxcblxcblxcblxcblxcbi5pdGVtLWRldGFpbHMtYnRuIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7ICovXFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuI2l0ZW0tZGV0YWlscyB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLml0ZW0tZGF0ZS1jcmVhdGVkIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7ICovXFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmV4cGFuZC1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDAgOHB4IDAgOHB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogODUlO1xcbn1cXG5cXG4uZGV0YWlscy1jb250YWluZXIge1xcbiAgICBmbGV4OiAuNTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xvc2V0b3doaXRlKTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmRldGFpbHMtdGl0bGUge1xcbiAgICBjb2xvcjogdmFyKC0tY2xvc2V0b3doaXRlKTtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiAqKioqKioqKioqKioqKioqKioqKiBnZW5lcmFsICoqKioqKioqKioqKioqKioqKioqKiogKi9cXG5cXG4uZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFuaW1hdGlvbjogZWFzZS1pbiAxcztcXG59XFxuXFxuLmJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5pdGVtLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY29sb3I6IHZhcigtLWNsb3NldG93aGl0ZSk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgLyogd2lkdGg6IDUwcHg7ICovXFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIGhlaWdodDogNjUlO1xcbiAgICBmb250LXNpemU6IDc1JTtcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGRlbGV0ZUJ0bkxpc3RlbmVyLCBleHBhbmRCdG5MaXN0ZW5lciwgaXRlbUVkaXRhYmxlLCBpZkNoZWNrZWQgfSBmcm9tIFwiLlwiO1xuXG4vL2NyZWF0ZSBpdGVtIGluIEhUTUwsIGFkZCB0byBET01cbmNvbnN0IGNyZWF0ZUl0ZW1IVE1MID0gKG4sIGRjLCBwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IG9yZGVyZWRJdGVtTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcmRlcmVkLWl0ZW0tbGlzdCcpO1xuICAgIC8vY3JlYXRlIGl0ZW0gb3B0aW9ucyBjb250YWluZXJcbiAgICBjb25zdCBjcmVhdGVOZXdJdGVtT3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNyZWF0ZU5ld0l0ZW1PcHRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tb3B0aW9ucy1jb250YWluZXInKTtcbiAgICAvL2FkZCBERUxFVEUgQnRuL0ljb24gdG8gaXRlbVxuICAgIGNvbnN0IGNyZWF0ZUl0ZW1EZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjcmVhdGVJdGVtRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGVsZXRlLWJ0bicpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ0bi5pZCA9ICdkZWxldGUtaXRlbSc7XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlbGV0ZUljb24uaWQgPSAnZGVsZXRlLWljb24nO1xuICAgIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICBjcmVhdGVJdGVtRGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgLy9hZGQgRVhQQU5EIEJ0bi9JY29uIHRvIGl0ZW1cbiAgICBjb25zdCBjcmVhdGVFeHBhbmRJY29uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY3JlYXRlRXhwYW5kSWNvbkJ0bi5jbGFzc0xpc3QuYWRkKCdleHBhbmQtaWNvbi1idG4nKTtcbiAgICBjcmVhdGVFeHBhbmRJY29uQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICBjcmVhdGVFeHBhbmRJY29uQnRuLm5hbWUgPSAnZXhwYW5kLWljb24tYnRuJztcbiAgICBjb25zdCBjcmVhdGVFeHBhbmRJY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3JlYXRlRXhwYW5kSWNvbkRpdi5jbGFzc0xpc3QuYWRkKCdleHBhbmQtaWNvbicpO1xuICAgIGNyZWF0ZUV4cGFuZEljb25CdG4uYXBwZW5kQ2hpbGQoY3JlYXRlRXhwYW5kSWNvbkRpdik7XG5cblxuICAgIC8vYWRkIGNoZWNrYm94XG4gICAgY29uc3QgY2hlY2tib3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY2hlY2tib3hMYWJlbC5mb3IgPSAnaXRlbS1jaGVja2JveCc7XG4gICAgY2hlY2tib3hMYWJlbC5pZCA9ICdpdGVtLWNoZWNrYm94LWxhYmVsJztcbiAgICBjb25zdCBjcmVhdGVDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY3JlYXRlQ2hlY2tib3guaWQgPSAnaXRlbS1jaGVja2JveCc7XG4gICAgY3JlYXRlQ2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY3JlYXRlQ2hlY2tib3gubmFtZSA9ICdpdGVtLWNoZWNrYm94JztcbiAgICAvL2FkZCBpbXBvcnRhbnQgSWNvblxuXG4gICAgLy9hcHBlbmQgaWNvbiwgZGVsZXRlIGJ0biB0byBsaXN0IGl0ZW1cbiAgICBjcmVhdGVOZXdJdGVtT3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveExhYmVsKTtcbiAgICBjaGVja2JveExhYmVsLmFwcGVuZENoaWxkKGNyZWF0ZUNoZWNrYm94KTtcbiAgICBjcmVhdGVOZXdJdGVtT3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVJdGVtRGVsZXRlQnRuKTtcbiAgICBjcmVhdGVOZXdJdGVtT3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFeHBhbmRJY29uQnRuKTtcbiAgICAvL25ldyBsaXN0IGl0ZW0gXG4gICAgY29uc3QgbmV3TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmV3TGlzdEl0ZW0uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgbmV3TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtJyk7XG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdpdGVtLXRleHQnKTtcbiAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbjtcblxuXG4gICAgXG4gICAgLy9hZGQgaXRlbSBvcHRpb25zIGNvbnRhaW5lclxuICAgIG5ld0xpc3RJdGVtLmFwcGVuZENoaWxkKGNyZWF0ZU5ld0l0ZW1PcHRpb25zQ29udGFpbmVyKTtcbiAgICAvL2FkZCBuZXcgbGlzdCBpdGVtIHRvIG9yZGVyZWQgbGlzdFxuICAgIG9yZGVyZWRJdGVtTGlzdC5hcHBlbmRDaGlsZChuZXdMaXN0SXRlbSk7XG5cbiAgICAvL2xvZyBzdG9yYWdlXG4gICAgLy8gY29uc29sZS5sb2coTE9DQUwpO1xuXG4gICAgLy9yZXR1cm4gZGVsZXRlIGJ0biwgZXhwYW5kIGJ0biBsaXN0ZW5lciBvbmNlIGl0ZW0gaXMgY3JlYXRlZCBcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lSGVhZGVyJykudGV4dENvbnRlbnQgPT09ICdteVByb2plY3QnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc3QgYSA9IGRlbGV0ZUJ0bkxpc3RlbmVyKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBleHBhbmRCdG5MaXN0ZW5lcigpO1xuICAgICAgICAgICAgLy8gY29uc3QgYyA9IGl0ZW1FZGl0YWJsZSgpO1xuICAgICAgICAgICAgY29uc3QgZCA9IGlmQ2hlY2tlZCgpO1xuICAgICAgICAgICAgLy8gcmV0dXJuIGEgJiYgYjtcbiAgICAgICAgICAgIHJldHVybiBiICYmIGQ7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJdGVtSFRNTDsiLCJjb25zdCBpdGVtTGlzdEFyciA9IFtdO1xuXG5jb25zdCBnZXREYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IG15RGF0ZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgcmV0dXJuIG15RGF0ZTtcbn1cblxuY2xhc3MgTGlzdEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGVDcmVhdGVkKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubm90ZXMgPSAndGVzdCc7XG4gICAgICAgIHRoaXMuZGF0ZUNyZWF0ZWQgPSBkYXRlQ3JlYXRlZFxuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gZ2V0IGRhdGVDcmVhdGVkICgpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZGF0ZUNyZWF0ZWQ7XG4gICAgLy8gfVxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxufVxuXG5jbGFzcyBET01JdGVtIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIGl0ZW1MaXN0QXJyLFxuICAgIGdldERhdGUsXG4gICAgTGlzdEl0ZW1cbn0iLCIvL2V2ZW50IGxpc3RlbmVyIHRvIGRlbGV0ZSBpdGVtIChjYWxsZWQgYWZ0ZXIgaXRlbSBpcyBjcmVhdGVkKVxuY29uc3QgZGVsZXRlQnRuTGlzdGVuZXIgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZSk7XG4gICAgY29uc3Qgb3JkZXJlZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJlZC1pdGVtLWxpc3QnKTtcbiAgICBjb25zdCBsaXN0SXRlbURlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZGVsZXRlLWl0ZW0nKTtcbiAgICBcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEl0ZW1EZWxldGVCdG5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGkpO1xuICAgICAgICBjb25zdCBidG5JbmRleCA9IGk7XG4gICAgfVxuXG4gICAgZm9yKGxldCBqID0gMDsgaiA8IGl0ZW1MaXN0QXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGopO1xuICAgICAgICBjb25zdCBsaXN0SXRlbUluZGV4ID0gajsgXG4gICAgfVxuXG4gICAgb3JkZXJlZExpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBhbnN3ZXIgPSBjb25maXJtKCdhcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nKTtcbiAgICAgICAgaWYgKGFuc3dlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGxpc3RJdGVtRGVsZXRlQnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgY29uc3QgY29uZmlybUFuc3dlciA9IGNvbmZpcm0oJ2FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpdGVtPycpO1xuICAgICAgICAgICAgaWYgKGNvbmZpcm1BbnN3ZXIpIHtcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0pXG4gICAgfSlcbn07XG5cbmNvbnN0IGNsZWFyQWxsQnRuTGlzdGVuZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNsZWFyQWxsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyLWFsbC1pdGVtcy1idG4nKTtcbiAgICBjbGVhckFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy9nZXQgY3VycmVudCBwcm9qZWN0IChXaGF0ZXZlciBpcyBjbGlja2VkIG9uIHNpZGViYXIpXG4gICAgICAgIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0TmFtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2Uua2V5KDApO1xuICAgICAgICBjb25zb2xlLmxvZygnZGVsZXRlIGJ0biBjbGlja2VkJyk7XG4gICAgICAgIGNvbnN0IG9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yZGVyZWQtaXRlbS1saXN0Jyk7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1EZWxldGVBbGwgPSBjb25maXJtKCdXb3VsZCB5b3UgbGlrZSB0byBjbGVhciBhbGwgaXRlbXM/Jyk7XG4gICAgICAgIGlmIChjb25maXJtRGVsZXRlQWxsKSB7XG4gICAgICAgICAgICB3aGlsZSAob2wuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIG9sLnJlbW92ZUNoaWxkKG9sLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9yZW1vdmUgZnJvbSBhcnIvbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgTE9DQUwucmVtb3ZlSXRlbShnZXRDdXJyZW50UHJvamVjdE5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vd291bGQgeW91IGxpa2UgdG8gY2xlYXIgYWxsIGl0ZW1zIGFuZCBzdGFydCBvdmVyIG9yIGRlbGV0ZSBwcm9qZWN0XG4gICAgICAgIC8vZGVsZXRlIGFsbCBjaGlsZHJlbiB1bmRlciBvcmRlcmVkIGl0ZW0gbGlzdCBcbiAgICAgICAgXG4gICAgfSlcbn0pKCk7XG5cblxuXG4vL2V4cGFuZCBidG4gbGlzdGVuZXIgKGNhbGxlZCBhZnRlciBpdGVtIGlzIGNyZWF0ZWQpXG5jb25zdCBleHBhbmRCdG5MaXN0ZW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBleHBhbmRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4cGFuZC1pY29uJyk7XG4gICAgY29uc3QgZ29TaG9wcGluZ0l0ZW1UZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dvLXNob3BwaW5nJyk7XG4gICAgY29uc3QgaXRlbU9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1vcHRpb25zLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGl0ZW1UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2l0ZW0tdGV4dCcpO1xuICAgIGV4cGFuZEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLCBlLnRhcmdldCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gZ29TaG9wcGluZ0l0ZW1UZXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3QtaXRlbScpO1xuICAgICAgICBnb1Nob3BwaW5nSXRlbVRlc3QuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kLWNvbnRhaW5lcicpO1xuICAgICAgICAvLyBpdGVtT3B0aW9ucy5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgY29uc3QgaXRlbXdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbXdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtJyk7XG4gICAgICAgIGl0ZW13cmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1UZXh0KTtcbiAgICAgICAgaXRlbXdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbU9wdGlvbnMpO1xuXG4gICAgICAgIGdvU2hvcHBpbmdJdGVtVGVzdC5hcHBlbmRDaGlsZChpdGVtd3JhcHBlcik7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzLWNvbnRhaW5lcicpO1xuICAgICAgICBnb1Nob3BwaW5nSXRlbVRlc3QuYXBwZW5kQ2hpbGQoZGV0YWlscyk7ICBcbiAgICB9KVxufTtcblxuY29uc3QgaWZDaGVja2VkID0gKGUpID0+IHtcbiAgICBjb25zdCBkYXRlQ2hlY2tlZE9mZiA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgY29uc3QgY2hlY2tCb3hJc0NoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1jaGVja2JveCcpO1xuICAgIGNoZWNrQm94SXNDaGVja2VkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICAvL3RoaXMgaW5wdXQgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoZSBsaXN0IGl0ZW0gc29tZWhvd1xuICAgICAgICAvL2NvdWxkIG1ha2UgdGhlIGxpc3QgaXRlbSB0aGUgc2FtZSBpbnB1dFxuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lzIGNoZWNrZWQnKTtcbiAgICAgICAgICAgIC8vYWRkIGRhdGVjaGVja2Vkb2ZmIHRvIGxpc3RJdGVtIG9iamVjdFxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IHtcbiAgICBkZWxldGVCdG5MaXN0ZW5lcixcbiAgICBleHBhbmRCdG5MaXN0ZW5lcixcbiAgICBjbGVhckFsbEJ0bkxpc3RlbmVyLFxuICAgIGlmQ2hlY2tlZFxufSIsImltcG9ydCB7IExpc3RJdGVtLCBnZXREYXRlIH0gZnJvbSBcIi4vYXBwXCJcblxuY29uc3QgY3JlYXRlRGVmYXVsdEFycmF5TGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBvbmUgPSBuZXcgTGlzdEl0ZW0oJ0RvIHRoZSBkaXNoZXMnLCAnT24gdGltZSEnLCBnZXREYXRlKCkpO1xuICAgIGNvbnN0IHR3byA9IG5ldyBMaXN0SXRlbSgnQ2hhbmdlIGNhclxcJ3Mgb2lsJywgJ09uIHRpbWUhJywgZ2V0RGF0ZSgpKTtcbiAgICBjb25zdCB0aHJlZSA9IG5ldyBMaXN0SXRlbSgnV2FsayB0aGUgRG9nJywgJ09uIHRpbWUhJywgZ2V0RGF0ZSgpKTtcbiAgICBjb25zdCBmb3VyID0gbmV3IExpc3RJdGVtKCdGb2xkIHRoZSBsYXVuZHJ5JywgJ09uIHRpbWUhJywgZ2V0RGF0ZSgpKTtcbiAgICBjb25zdCBmaXZlID0gbmV3IExpc3RJdGVtKCdDYWxsIHRoZSBiYW5rJywgJ09uIHRpbWUhJywgZ2V0RGF0ZSgpKTtcblxuICAgIGNvbnN0IGRlZmF1bHRBcnJheUxpc3QgPSBbXG4gICAgICAgIG9uZSxcbiAgICAgICAgdHdvLCBcbiAgICAgICAgdGhyZWUsIFxuICAgICAgICBmb3VyLFxuICAgICAgICBmaXZlXG4gICAgXVxuICAgIHJldHVybiBkZWZhdWx0QXJyYXlMaXN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEZWZhdWx0QXJyYXlMaXN0OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IERPTUxvYWRlZCBmcm9tICcuL2xvYWRQYWdlJztcbmltcG9ydCBtZW51SWNvbiBmcm9tICcuL2ltZy9tZW51LnBuZyc7XG5pbXBvcnQgZXhwYW5kIGZyb20gJy4vaW1nL25vdW4tZXhwYW5kLTExODE3NDcucG5nJztcbmltcG9ydCB7IG1kaUNoZXZyb25Eb3duLCBtZGlDb25zb2xlTGluZSwgbWRpQ29udHJvbGxlckNsYXNzaWMsIG1kaVdpbmRvd1NodXR0ZXIgfSBmcm9tICdAbWRpL2pzJztcbmltcG9ydCB7IGdldERhdGUsIGl0ZW1MaXN0QXJyLCBMaXN0SXRlbSB9IGZyb20gJy4vYXBwLmpzJztcbmltcG9ydCBjcmVhdGVEZWZhdWx0QXJyYXlMaXN0IGZyb20gJy4vZGVmYXVsdFByb2plY3QnO1xuaW1wb3J0IGNyZWF0ZUl0ZW1IVE1MIGZyb20gJy4vRE9NJztcbmltcG9ydCB7IGRlbGV0ZUJ0bkxpc3RlbmVyLCBleHBhbmRCdG5MaXN0ZW5lciwgY2xlYXJBbGxCdG5MaXN0ZW5lciwgaWZDaGVja2VkIH0gZnJvbSAnLi9idG5MaXN0ZW5lcnMnO1xuXG5jb25zdCBMT0NBTCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG5jb25zdCBTRVNTSU9OID0gd2luZG93LnNlc3Npb25TdG9yYWdlO1xuXG5jb25zdCBjbGVhclN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcbiAgICB9XG4gICAgXG59XG5cbmNvbnN0IGNsZWFyQWxsU3RvcmFnZSA9IGNsZWFyU3RvcmFnZSgpO1xuLy8gY2xlYXJBbGxTdG9yYWdlKCk7XG5cblxuLy9yZW1vdmUgZGlzcGxheSAobm9uZSkgZnJvbSBlbGVtZW50IFxuY29uc3QgcmVtb3ZlRGlzcGxheU5vbmUgPSAoZCkgPT4ge1xuICAgIHJldHVybiBkLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXknKTtcbn1cblxuLy9hZGQgZGlzcGxheSAobm9uZSkgdG8gZWxlbWVudCBcbmNvbnN0IGFkZERpc3BsYXlOb25lID0gKGQpID0+IHtcbiAgICByZXR1cm4gZC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XG59XG5cbi8vbWFrZSBpdGVtIGVkaXRhYmxlXG5jb25zdCBpdGVtRWRpdGFibGUgPSAoKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLXRleHQnKTtcbiAgICBpdGVtLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGNvbnRlbnRFZGl0YWJsZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZW0gYmVpbmcgZWRpdGVkJyk7XG4gICAgICAgICAgICAvL3JlbW92ZSBzcGFuXG4gICAgICAgICAgICAvL2NyZWF0ZSBpbnB1dFxuICAgICAgICAgICAgLy9cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8vZ2V0IG5hbWUgYW5kIGRhdGUgZnJvbSBpdGVtcyBhbmQgY2FsbCBjcmVhdGVJdGVtSFRNTCgpXG5jb25zdCBnZXROYW1lQW5kRGF0ZSA9IChhcnIsIHByb2plY3ROYW1lKSA9PiB7XG4gICAgYXJyLmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgY29uc3QgbiA9IG9iai5uYW1lO1xuICAgICAgICBjb25zdCBkYyA9IG9iai5kYXRlQ3JlYXRlZDtcblxuICAgICAgICAvLyBjb25zdCBjcmVhdGVJdGVtID0gY3JlYXRlSXRlbUhUTUwobiwgZGMsIHByb2plY3ROYW1lKTtcbiAgICAgICAgLy8gcmV0dXJuIGNyZWF0ZUl0ZW0oKTtcbiAgICAgICAgY3JlYXRlSXRlbUhUTUwobiwgZGMsIHByb2plY3ROYW1lKTtcbiAgICB9KVxufVxuXG4vL2xpc3RlbiBmb3IgZm9ybSBzdWJtaXNzaW9uIHRvIGFkZCBlYWNoIGl0ZW0gXG5jb25zdCBmb3JtU3VibWlzc2lvbiA9IChjbGlja0NvdW50LCBwcm9qZWN0TmFtZSk9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLW1haW4nKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+IHtcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1uZXctaXRlbScpLnZhbHVlO1xuICAgICAgICAvL3JlbW92ZSBmb3JtIGRpc3BsYXlcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvL3JlbW92ZSBkaXNwYWxheSAoYWRkIGJhY2sgZGlzcGxheTogbm9uZSlcbiAgICAgICAgY29uc3QgaW5wdXROZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LW5ldy1pdGVtJyk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtYnRuJyk7XG4gICAgICAgIGNvbnN0IGxhYmVsTmV3SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbC1uZXctaXRlbScpO1xuICAgICAgICBhZGREaXNwbGF5Tm9uZShpbnB1dE5ld0l0ZW0pO1xuICAgICAgICBhZGREaXNwbGF5Tm9uZShzdWJtaXRCdG4pO1xuICAgICAgICBhZGREaXNwbGF5Tm9uZShsYWJlbE5ld0l0ZW0pO1xuICAgICAgICAvL2NsZWFyIGlucHV0IGZpZWxkIG9uIGZvcm0gU3VibWl0XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgLy9jcmVhdGUgbmV3IGxpc3QgaXRlbVxuICAgICAgICBjb25zdCBpdGVtID0gbmV3IExpc3RJdGVtKGAke2lucHV0VmFsdWV9YCwgZ2V0RGF0ZSgpKTtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgIC8vY2hlY2sgaWYgTE9DQUwgU1RPUkFHRSBpcyBlbXB0eSBvciBub3QgXG4gICAgICAgIHJldHVybiBwcm9qZWN0TG9jYWxTdG9yYWdlKGNsaWNrQ291bnQsIHByb2plY3ROYW1lLCBpdGVtKTtcbiAgICB9KVxufTtcblxuLy9jaGVjayBsb2NhbCBzdG9yYWdlIHRvIHNlZSBpZiBwcm9qZWN0IGFscmVhZHkgZXhpc3RzXG5jb25zdCBjaGVja0xvY2FsU3RvcmFnZSA9IChjbGlja0NvdW50LCBwcm9qZWN0TmFtZSwgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RFeGlzdHMgPSBMT0NBTC5sZW5ndGggPiAwO1xuICAgIHJldHVybiBwcm9qZWN0RXhpc3RzID8gdHJ1ZSA6IGZhbHNlO1xufVxuXG4vL2V2ZW50IGxpc3RlbmVyIHRvIG9wZW4gdXAgc2lkZSBtZW51IGJhclxuY29uc3QgbWVudUV2ZW50TGlzdGVuZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1lbnVMb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaWNvbicpO1xuICAgIGNvbnN0IG1haW5TaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2lkZWJhcicpO1xuICAgIG1lbnVMb2dvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgICAgICBtYWluU2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5Jyk7XG4gICAgfSlcbn0pKCk7XG5cbi8vbmV3IGxpc3QgaXRlbSBidG4gbGlzdGVuZXIgXG5jb25zdCBuZXdJdGVtQnRuTGlzdGVuZXIgPSAoKCkgPT4ge1xuICAgIGxldCBjbGlja0NvdW50ID0gMDtcbiAgICBjb25zdCBuZXdJdGVtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1uZXctaXRlbS1idG4nKTtcbiAgICBjb25zdCBpbnB1dE5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtbmV3LWl0ZW0nKTtcbiAgICBjb25zdCBsYWJlbE5ld0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFiZWwtbmV3LWl0ZW0nKTtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWJ0bicpO1xuXG4gICAgbmV3SXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9yZW1vdmUgZGlzcGxheSBub25lIGZyb20gaW5wdXQgZm9ybSBpdGVtc1xuICAgICAgICBsZXQgcHJvamVjdE5hbWU7XG4gICAgICAgIGNvbnN0IHByb2plY3RFeGlzdHMgPSBjaGVja0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICBpZiAocHJvamVjdEV4aXN0cykge1xuICAgICAgICAgICAgLy90aGlzIG5lZWRzIHRvIGJlIGZpeGVkXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IFNFU1NJT04ua2V5KDApO1xuICAgICAgICAgICAgbGV0IGdldENsaWNrQ291bnQgPSBTRVNTSU9OLmdldEl0ZW0oJ2hlbGxvJyk7XG4gICAgICAgICAgICBnZXRDbGlja0NvdW50Kys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhnZXRDbGlja0NvdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsaWNrQ291bnQrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNsaWNrQ291bnQpO1xuICAgICAgICAgICAgLy9hc2sgdXNlciB0byBuYW1lIG5ldyBwcm9qZWN0XG4gICAgICAgICAgICAvL3dpcGUgZGVmYXVsdCBsaXN0XG4gICAgICAgICAgICAvL3N0YXJ0IG5ldyBwcm9qZWN0IHdpdGggbmFtZSBnaXZlbiAoa2V5IG5hbWUgaW4gbG9jYWwgc3RvcmFnZSBvYmopXG4gICAgICAgICAgICBwcm9qZWN0TmFtZSA9IHByb21wdCgnUGxlYXNlIGVudGVyIHRoZSBuYW1lIG9mIHlvdXIgcHJvamVjdCcsICdteVByb2plY3QnKTtcbiAgICAgICAgICAgIC8vYWRkIG5ldyBwcm9qZWN0IG5hbWUgdG8gdG9wIG9mIHBhZ2VcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TmFtZUhlYWRlcicpLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICAgICAgICAvL2NyZWF0ZSBuZXcgZm9sZGVyIGluIGN1cnJlbnQgcHJvamVjdCBsaXN0XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0Rm9sZGVyKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIC8vY2xlYXIgZGVmYXVsdCBhcnJheSBsaXN0IFxuICAgICAgICAgICAgY29uc3Qgb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3JkZXJlZC1pdGVtLWxpc3QnKTtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBkZWxldGVDaGlsZEVsZW1lbnRzKG9sKTtcbiAgICAgICAgICAgIGQoKTtcblxuICAgICAgICAgICAgYWRkQ2xpY2tDb3VudChjbGlja0NvdW50LCBwcm9qZWN0TmFtZSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmVtb3ZlRGlzcGxheU5vbmUoaW5wdXROZXdJdGVtKTtcbiAgICAgICAgcmVtb3ZlRGlzcGxheU5vbmUoc3VibWl0QnRuKTtcbiAgICAgICAgcmVtb3ZlRGlzcGxheU5vbmUobGFiZWxOZXdJdGVtKTtcblxuICAgICAgICByZXR1cm4gZm9ybVN1Ym1pc3Npb24oY2xpY2tDb3VudCwgcHJvamVjdE5hbWUpO1xuICAgIH0pXG5cbiAgICBcbn0pKCk7XG5cbi8vZGVsZXRlIGFsbCBjaGlsZCBlbGVtZW50cyBmdW5jdGlvblxuY29uc3QgZGVsZXRlQ2hpbGRFbGVtZW50cyA9IChwYXJlbnRFbCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICB3aGlsZSAocGFyZW50RWwuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIHBhcmVudEVsLnJlbW92ZUNoaWxkKHBhcmVudEVsLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgLy9yZW1vdmUgZnJvbSBhcnIvbG9jYWwgc3RvcmFnZVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vL3RoZSB2YWx1ZSBvZiB0aGUga2V5IHZhbHVlIHBhaXIgaXMgdGhlIG9iamVjdCBhcnJheSB0aGF0IGlzIGNyZWF0ZWQgZm9yIGVhY2ggcHJvamVjdCAobGlzdCBvZiBpdGVtcylcbmNvbnN0IHByb2plY3RMb2NhbFN0b3JhZ2UgPSAoY2xpY2tDb3VudCwgcHJvamVjdE5hbWUsIGl0ZW0pID0+IHtcbiAgICBjb25zdCBnZXRDdXJyZW50UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdE5hbWVIZWFkZXInKS50ZXh0Q29udGVudDtcbiAgICBjb25zb2xlLmxvZyhnZXRDdXJyZW50UHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IGxvY2FsU3RvcmFnZUl0ZW1MaXN0ID0gW107XG4gICAgLy9GSU5EIFBST0pFQ1QgTkFNRSBBTkQgUFVTSCBMQVNUIElURU0gSU5UTyBJVCBcblxuICAgIGNvbnN0IHByb2plY3RFeGlzdHMgPSBjaGVja0xvY2FsU3RvcmFnZSgpO1xuXG4gICAgY29uc3QgY3JlYXRlSXRlbUZyb21Mb2NhbFN0b3JhZ2UgPSAoaXRlbSwgcHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgLy8gY29uc3QgZCA9IGNyZWF0ZURlZmF1bHRBcnJheUxpc3QoKTtcbiAgICAgICAgY29uc3QgZCA9IGl0ZW07XG4gICAgICAgICAgICBjb25zdCBuID0gZC5uYW1lO1xuICAgICAgICAgICAgY29uc3QgZGMgPSBkLmRhdGVDcmVhdGVkO1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZW1IVE1MKG4sIGRjLCBwcm9qZWN0TmFtZSk7XG4gICAgfVxuICAgIFxuICAgIGlmIChwcm9qZWN0RXhpc3RzKSB7XG4gICAgICAgIGxldCBwcm9qID0gSlNPTi5wYXJzZShMT0NBTC5nZXRJdGVtKGdldEN1cnJlbnRQcm9qZWN0TmFtZSkpO1xuICAgICAgICAvLyBKU09OLnBhcnNlKHByb2opO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qKTtcbiAgICAgICAgcHJvai5wdXNoKGl0ZW0pO1xuICAgICAgICBMT0NBTC5zZXRJdGVtKGAke3Byb2plY3ROYW1lfWAsIEpTT04uc3RyaW5naWZ5KHByb2opKTtcbiAgICAgICAgY3JlYXRlSXRlbUZyb21Mb2NhbFN0b3JhZ2UoaXRlbSwgcHJvamVjdE5hbWUpO1xuICAgICAgICAvLyByZXR1cm4gcHJvamVjdExvY2FsU3RvcmFnZShwcm9qZWN0TmFtZSwgaXRlbSwgY2xpY2tDb3VudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWRkQ2xpY2tDb3VudChjbGlja0NvdW50LCBwcm9qZWN0TmFtZSk7XG4gICAgICAgIFxuICAgICAgICBMT0NBTC5zZXRJdGVtKGAke3Byb2plY3ROYW1lfWAsIEpTT04uc3RyaW5naWZ5KFtpdGVtXSkpO1xuICAgICAgICBjcmVhdGVJdGVtRnJvbUxvY2FsU3RvcmFnZShpdGVtLCBwcm9qZWN0TmFtZSk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gTE9DQUw7XG59XG5cbi8vSlNPTi5wYXJzZSBpdGVtIGxpc3QgYXJyLCBhbmQgY3JlYXRlIGh0bWwgZWxlbWVudCBmb3IgZWFjaCBpdGVtIGluIExPQ0FMIHN0b3JhZ2UgXG5jb25zdCBsb2FkU2Vzc2lvblN0b3JhZ2VQYWdlID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lSGVhZGVyJykudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAvL2NyZWF0ZSBmb2xkZXIgaW4gc2lkZWJhciBvbiBwYWdlIGxvYWRcbiAgICAvL3dpbGwgbmVlZCB0byBzaG93IGFsbCBwcm9qZWN0cyBpbiBzaWRlYmFyXG4gICAgY3JlYXRlUHJvamVjdEZvbGRlcihwcm9qZWN0TmFtZSk7XG5cbiAgICBsZXQgaSA9IExPQ0FMLmdldEl0ZW0oYCR7cHJvamVjdE5hbWV9YCk7XG4gICAgaSA9IEpTT04ucGFyc2UoaSk7XG4gICAgcmV0dXJuIGdldE5hbWVBbmREYXRlKGksIHByb2plY3ROYW1lKTtcbn1cblxuLy9jcmVhdGUgcHJvamVjdCBmb2xkZXIgaW4gc2lkZWJhciB3aGVuIG5ldyBwcm9qZWN0IGlzIGNyZWF0ZWRcbmNvbnN0IGNyZWF0ZVByb2plY3RGb2xkZXIgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXAnKTtcbiAgICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAvLyBuZXdQcm9qLmNsYXNzTGlzdC5hZGQoJ3RleHQnKTtcbiAgICBuZXdQcm9qLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3ROYW1lJyk7XG4gICAgbmV3UHJvai50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgIGN1cnJlbnRQLmFwcGVuZENoaWxkKG5ld1Byb2opO1xufVxuXG4vL2FkZCBjbGljayBjb3VudCB0byBzZXNzaW9uIHN0b3JhZ2UgdG8gdHJhY2tcbmNvbnN0IGFkZENsaWNrQ291bnQgPSAoY2xpY2tDb3VudCwgcHJvamVjdE5hbWUpID0+IHtcbiAgICBsZXQgZGF0YSA9IFNFU1NJT04uZ2V0SXRlbShwcm9qZWN0TmFtZSk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coU0VTU0lPTi5nZXRJdGVtKHByb2plY3ROYW1lKSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFNFU1NJT04pO1xuICAgIHJldHVybiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShgJHtwcm9qZWN0TmFtZX1gLCBjbGlja0NvdW50KTtcbn1cblxuLy8gbG9hZCBpbiBkZWZhdWx0IHBhZ2UgKHVzaW5nIGRlZmF1bHRhcnJheWxpc3QpXG5jb25zdCBsb2FkRGVmYXVsdFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgZCA9IGNyZWF0ZURlZmF1bHRBcnJheUxpc3QoKTtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdE5hbWUgPSAnbXlQcm9qZWN0JztcbiAgICAvLyBMT0NBTC5zZXRJdGVtKCdteVByb2plY3QnLCBgJHtKU09OLnN0cmluZ2lmeShkKX1gKTtcbiAgICByZXR1cm4gZ2V0TmFtZUFuZERhdGUoZCwgZGVmYXVsdFByb2plY3ROYW1lKTtcbn1cblxuLy9MT0FEIFBBR0VcbmNvbnN0IGxvYWRQYWdlID0gKCgpICA9PiBET01Mb2FkZWQobG9hZERlZmF1bHRQYWdlLCBsb2FkU2Vzc2lvblN0b3JhZ2VQYWdlKSkoKTtcblxuZXhwb3J0IHtcbiAgICBkZWxldGVCdG5MaXN0ZW5lciwgXG4gICAgZXhwYW5kQnRuTGlzdGVuZXIsXG4gICAgaXRlbUVkaXRhYmxlLFxuICAgIGlmQ2hlY2tlZFxufSIsImNvbnN0IERPTUxvYWRlZCA9IChhLCBjKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZSkgPT4ge1xuICAgICAgICBcblxuICAgICAgICAvL2dldCBjdXJyZW50bCwgbGF0ZXN0IHByb2plY3QgZnJvbSBsb2NhbCBzdG9yYWdlIGFuZCBwYXNzIGluIHByb2plY3RuYW1lIHRvIGxvYWRzZXNzaW9uXG4gICAgICAgIGxldCBwcm9qTmFtZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2Uua2V5KDApO1xuXG4gICAgICAgIC8vY2hlY2sgZm9yIHByb2plY3ROYW1lIGZyb20gc2lkZXRhYiAod2hhdGV2ZXIgcHJvamVjdCBpcyBoaWdobGlnaHRlZClcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGggPT09IDAgPyBhKCkgOiBjKHByb2pOYW1lKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERPTUxvYWRlZDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9