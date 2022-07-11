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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*********** || GENERAL STYLES || *****************************************/\n\n:root {\n    --white:white;\n    --soothing-breeze:#b2bec3;\n    --gray:#636e72;\n    --dark:#2d3436;\n    --table-background: #dfe6e948;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\n    html,\n    body {\n        margin: 0;\n        padding: 0;\n        height: 100%;\n    }\n\n        #content {\n            display: grid;\n\n            height: 100%;\n            width: 100%;\n\n\n            grid-template-columns: 2fr 5fr 2fr;\n            grid-template-rows: 1fr 80px 12fr 6fr;\n            \n        }\n\n            input[type=checkbox] {\n                transform: scale(1.5);\n            }\n            \n/*********** || HEADER || *****************************************/\n\n.header {\n    display: flex;\n    justify-content: center;\n    \n    grid-column: 1 / 4;\n    grid-row: 1 / 2;\n\n    padding: 10px;\n\n    background: rgb(131,58,180);\n    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);\n\n\n    font-size: 30px;\n    color: var(--white);\n}\n\n/*********** || MAIN || *****************************************/\n\n.main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 4;\n    overflow: scroll;\n\n}\n\n    .task { \n\n        height: 50px;\n        background-color: var(--table-background);\n\n        font-size: 25px;\n    }\n\n        .column-placeholder {\n            width: 100px;\n        }\n\n        th {\n            width: 400px;\n\n            background-color: var(--gray);\n            color: var(--white);\n            font-size: 25px; \n        }\n\n        td {\n            align-items: center;\n            text-align: center;\n        }\n\n            .task-title-container {\n                display: flex;\n                justify-content: space-around;\n            }\n\n                .task-switch-button {\n                    box-sizing: border-box;\n                    background-color:var(--table-background);\n                    width: 50px;\n                    height: 40px;\n                }\n\n                .task-switch-button:focus {\n                    background-color: var(--dark);\n                }\n\n                .task-title {\n                    \n                }\n\n\n    \n/*********** || PROJECT TABLE SIDEBAR || *****************************************/\n\n.sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 5;\n\n    display: grid;\n    grid-template-rows: 1fr 6fr 2fr;\n\n    background-color: var(--dark);\n    \n}\n\n    .projects-header {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 60px;\n        font-size: 40px;\n        padding-top: 20px;\n        color: var(--white);\n        margin-bottom: 10px; \n    }\n\n    .project-table {\n        /* padding: 5px; */\n        padding-left: 10px;\n        \n        width: 100%;\n        display: flex;\n        flex-direction: column; \n        gap: 20px;\n    }\n\n\n    .project-table-item {\n        width: 100%;\n    }\n\n    \n    .project-table tr{\n        height: 50px;\n    }\n\n    \n\n    .project-table-button,\n    .project-table-button-selected {\n        width: 95%;\n\n        background-color: var(--dark);\n        border: 2px solid var(--white);\n        color: white;\n\n        padding: 10px;\n      \n        font-size: 25px;\n        \n    }\n\n    .project-table-button:hover{\n        background-color: var(--gray);\n    }\n\n    .project-table-button:focus {\n        background-color: var(--white);\n        color: var(--dark);\n        font-weight: bold;\n    }\n\n    .delete-container {\n        \n        display: grid;\n        grid-template-rows: 1fr 2fr;\n    }\n\n        .delete-header {\n            background-color: var(--dark);\n            text-align: center;\n            color: var(--white);\n\n            font-size: 30px;\n        }\n\n        .delete-form {\n            display: grid;\n            grid-template-rows: 1fr 1fr;\n            \n        }\n\n        .delete-select {\n            height: 60%;\n            width: 80%;\n            justify-self: center;\n        }\n\n        .delete-project {\n            width: 80%;\n            height: 70%;\n\n            font-size: 25px;\n            color: white;\n\n            justify-self: center;\n            background-color: var(--dark);\n            border: 2px solid white;\n        }\n\n\n\n\n\n/*********** || RIGHT SIDEBAR HEADER || *****************************************/\n\n.form-header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    grid-column: 3 / 4;\n    grid-row: 2 / 3;\n    \n    background-color: var(--dark);\n    color: var(white);\n\n    font-size: 40px;\n}\n\n    .add {\n        color: var(--white);\n    }\n\n    .form-header button {\n        background-color: var(--dark);\n        border: none;\n\n        font-size: 40px;\n    }\n\n\n/*********** || RIGHT SIDEBAR (TASK / PROJECT FORMS) || *********************/\n\n\n.task-form {\n    grid-column: 3 / 4;\n    grid-row: 3 / 5;\n\n    background-color: var(--dark);\n\n    color: var(--white);\n}      \n\n    .form-item {\n        display: grid;\n\n        height: 130px;\n        padding: 20px;\n    }\n\n        .form-label {\n            font-size: 25px;\n        }\n\n    .submit-container {\n        display: flex;\n        justify-content: center;\n\n        margin-top: 20px;\n    }\n\n        .submit {\n            justify-content: center;\n\n            width: 50%;\n            font-size: 20px;\n        }\n    \n\n/*********** || TASK-FOCUS || *********************/\n\n.task-focus {\n    background-color: var(--gray);\n\n    grid-column: 2 / 3;\n    grid-row: 4 / 5;\n\n    display: grid;\n    grid-template-rows: 6fr 2fr;\n}\n\n    .info-container {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n        align-items: center;\n        padding-right: 10px;\n\n    }\n\n        .focus-section {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 23px;\n            color: var(--white);\n            font-weight: bold;\n        }\n\n        .task-info {\n            display: flex;\n            align-items: center;\n\n            height: 100%;\n            font-size: 23px;\n            color: var(--white);\n        }\n\n\n        #title-section {\n            grid-column: 1 / 2;\n            grid-row: 1 / 2;\n        }\n\n        #title-placeholder {\n            grid-column: 2 / 4;\n            grid-row: 1 / 2;\n        }\n    \n\n        #date-section {\n            grid-column: 4 / 5;\n            grid-row: 1 / 2;\n        }\n\n        #date-placeholder {\n            grid-column: 5 / 7;\n            grid-row: 1 / 2;\n        }\n  \n\n        #project-focus-section {\n            grid-column: 1 / 2;\n            grid-row: 2 / 3;\n        }\n\n        #project-focus-placeholder {\n            grid-column: 2 / 4;\n            grid-row: 2 / 3;\n        }\n\n\n        #priority-section {\n            grid-column: 4 / 5;\n            grid-row: 2 / 3;\n        }\n\n        #priority-placeholder {\n            grid-column: 5 / 7;\n            grid-row: 2 / 3;\n        }\n\n\n        #description-section {\n            grid-column: 1 / 2;\n            grid-row: 3 / 4;\n        }\n\n        #description-placeholder {\n            grid-column: 2 / 7;\n            grid-row: 3 / 4;\n        }\n\n\n    .focus-button-section {\n        background-color: var(--gray);\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n    }\n    \n        .focus-button-container {\n            display: flex; \n            justify-content: center;\n            align-items: center;\n            padding-bottom: 10px;\n        }\n    \n        .focus-button {\n            padding: 8px;\n            width: 100px;\n    \n            background-color: var(--gray);\n            color: var(--white);\n            /* border-radius: 10px; */\n            border: 1px solid white;\n    \n            font-size: 20px;\n            \n        }\n\n    .edit-input {\n        height: 70%;\n        border-radius: 5px;\n    }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*********** || GENERAL STYLES || *****************************************/\n\n:root {\n    --white:white;\n    --soothing-breeze:#b2bec3;\n    --gray:#636e72;\n    --dark:#2d3436;\n    --table-background: #dfe6e948;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\n    html,\n    body {\n        margin: 0;\n        padding: 0;\n        height: 100%;\n    }\n\n        #content {\n            display: grid;\n\n            height: 100%;\n            width: 100%;\n\n\n            grid-template-columns: 2fr 5fr 2fr;\n            grid-template-rows: 1fr 80px 12fr 6fr;\n            \n        }\n\n            input[type=checkbox] {\n                transform: scale(1.5);\n            }\n            \n/*********** || HEADER || *****************************************/\n\n.header {\n    display: flex;\n    justify-content: center;\n    \n    grid-column: 1 / 4;\n    grid-row: 1 / 2;\n\n    padding: 10px;\n\n    background: rgb(131,58,180);\n    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);\n\n\n    font-size: 30px;\n    color: var(--white);\n}\n\n/*********** || MAIN || *****************************************/\n\n.main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 4;\n    overflow: scroll;\n\n}\n\n    .task { \n\n        height: 50px;\n        background-color: var(--table-background);\n\n        font-size: 25px;\n    }\n\n        .column-placeholder {\n            width: 100px;\n        }\n\n        th {\n            width: 400px;\n\n            background-color: var(--gray);\n            color: var(--white);\n            font-size: 25px; \n        }\n\n        td {\n            align-items: center;\n            text-align: center;\n        }\n\n            .task-title-container {\n                display: flex;\n                justify-content: space-around;\n            }\n\n                .task-switch-button {\n                    box-sizing: border-box;\n                    background-color:var(--table-background);\n                    width: 50px;\n                    height: 40px;\n                }\n\n                .task-switch-button:focus {\n                    background-color: var(--dark);\n                }\n\n                .task-title {\n                    \n                }\n\n\n    \n/*********** || PROJECT TABLE SIDEBAR || *****************************************/\n\n.sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 5;\n\n    display: grid;\n    grid-template-rows: 1fr 6fr 2fr;\n\n    background-color: var(--dark);\n    \n}\n\n    .projects-header {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 60px;\n        font-size: 40px;\n        padding-top: 20px;\n        color: var(--white);\n        margin-bottom: 10px; \n    }\n\n    .project-table {\n        /* padding: 5px; */\n        padding-left: 10px;\n        \n        width: 100%;\n        display: flex;\n        flex-direction: column; \n        gap: 20px;\n    }\n\n\n    .project-table-item {\n        width: 100%;\n    }\n\n    \n    .project-table tr{\n        height: 50px;\n    }\n\n    \n\n    .project-table-button,\n    .project-table-button-selected {\n        width: 95%;\n\n        background-color: var(--dark);\n        border: 2px solid var(--white);\n        color: white;\n\n        padding: 10px;\n      \n        font-size: 25px;\n        \n    }\n\n    .project-table-button:hover{\n        background-color: var(--gray);\n    }\n\n    .project-table-button:focus {\n        background-color: var(--white);\n        color: var(--dark);\n        font-weight: bold;\n    }\n\n    .delete-container {\n        \n        display: grid;\n        grid-template-rows: 1fr 2fr;\n    }\n\n        .delete-header {\n            background-color: var(--dark);\n            text-align: center;\n            color: var(--white);\n\n            font-size: 30px;\n        }\n\n        .delete-form {\n            display: grid;\n            grid-template-rows: 1fr 1fr;\n            \n        }\n\n        .delete-select {\n            height: 60%;\n            width: 80%;\n            justify-self: center;\n        }\n\n        .delete-project {\n            width: 80%;\n            height: 70%;\n\n            font-size: 25px;\n            color: white;\n\n            justify-self: center;\n            background-color: var(--dark);\n            border: 2px solid white;\n        }\n\n\n\n\n\n/*********** || RIGHT SIDEBAR HEADER || *****************************************/\n\n.form-header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    grid-column: 3 / 4;\n    grid-row: 2 / 3;\n    \n    background-color: var(--dark);\n    color: var(white);\n\n    font-size: 40px;\n}\n\n    .add {\n        color: var(--white);\n    }\n\n    .form-header button {\n        background-color: var(--dark);\n        border: none;\n\n        font-size: 40px;\n    }\n\n\n/*********** || RIGHT SIDEBAR (TASK / PROJECT FORMS) || *********************/\n\n\n.task-form {\n    grid-column: 3 / 4;\n    grid-row: 3 / 5;\n\n    background-color: var(--dark);\n\n    color: var(--white);\n}      \n\n    .form-item {\n        display: grid;\n\n        height: 130px;\n        padding: 20px;\n    }\n\n        .form-label {\n            font-size: 25px;\n        }\n\n    .submit-container {\n        display: flex;\n        justify-content: center;\n\n        margin-top: 20px;\n    }\n\n        .submit {\n            justify-content: center;\n\n            width: 50%;\n            font-size: 20px;\n        }\n    \n\n/*********** || TASK-FOCUS || *********************/\n\n.task-focus {\n    background-color: var(--gray);\n\n    grid-column: 2 / 3;\n    grid-row: 4 / 5;\n\n    display: grid;\n    grid-template-rows: 6fr 2fr;\n}\n\n    .info-container {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n        align-items: center;\n        padding-right: 10px;\n\n    }\n\n        .focus-section {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 23px;\n            color: var(--white);\n            font-weight: bold;\n        }\n\n        .task-info {\n            display: flex;\n            align-items: center;\n\n            height: 100%;\n            font-size: 23px;\n            color: var(--white);\n        }\n\n\n        #title-section {\n            grid-column: 1 / 2;\n            grid-row: 1 / 2;\n        }\n\n        #title-placeholder {\n            grid-column: 2 / 4;\n            grid-row: 1 / 2;\n        }\n    \n\n        #date-section {\n            grid-column: 4 / 5;\n            grid-row: 1 / 2;\n        }\n\n        #date-placeholder {\n            grid-column: 5 / 7;\n            grid-row: 1 / 2;\n        }\n  \n\n        #project-focus-section {\n            grid-column: 1 / 2;\n            grid-row: 2 / 3;\n        }\n\n        #project-focus-placeholder {\n            grid-column: 2 / 4;\n            grid-row: 2 / 3;\n        }\n\n\n        #priority-section {\n            grid-column: 4 / 5;\n            grid-row: 2 / 3;\n        }\n\n        #priority-placeholder {\n            grid-column: 5 / 7;\n            grid-row: 2 / 3;\n        }\n\n\n        #description-section {\n            grid-column: 1 / 2;\n            grid-row: 3 / 4;\n        }\n\n        #description-placeholder {\n            grid-column: 2 / 7;\n            grid-row: 3 / 4;\n        }\n\n\n    .focus-button-section {\n        background-color: var(--gray);\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n    }\n    \n        .focus-button-container {\n            display: flex; \n            justify-content: center;\n            align-items: center;\n            padding-bottom: 10px;\n        }\n    \n        .focus-button {\n            padding: 8px;\n            width: 100px;\n    \n            background-color: var(--gray);\n            color: var(--white);\n            /* border-radius: 10px; */\n            border: 1px solid white;\n    \n            font-size: 20px;\n            \n        }\n\n    .edit-input {\n        height: 70%;\n        border-radius: 5px;\n    }"],"sourceRoot":""}]);
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

/***/ "./src/EDIT-TASK/deleteTask.js":
/*!*************************************!*\
  !*** ./src/EDIT-TASK/deleteTask.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _TASK_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TASK/task */ "./src/TASK/task.js");
/* harmony import */ var _TASK_displayAllTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TASK/displayAllTasks */ "./src/TASK/displayAllTasks.js");
/* harmony import */ var _TASK_removeTaskTableRows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TASK/removeTaskTableRows */ "./src/TASK/removeTaskTableRows.js");
/* harmony import */ var _storeTaskList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storeTaskList */ "./src/EDIT-TASK/storeTaskList.js");






function deleteTask(){
    for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.taskList.length; i++){
        const title = document.getElementById('title-placeholder');
        if (___WEBPACK_IMPORTED_MODULE_0__.taskList[i].title == title.innerText){
            delete ___WEBPACK_IMPORTED_MODULE_0__.taskList[i];
            ___WEBPACK_IMPORTED_MODULE_0__.taskList[i] = new _TASK_task__WEBPACK_IMPORTED_MODULE_1__.Task("","","","","");

            
            (0,_TASK_removeTaskTableRows__WEBPACK_IMPORTED_MODULE_3__.removeTableRows)();
            (0,_TASK_displayAllTasks__WEBPACK_IMPORTED_MODULE_2__.displayAllTasks)();
            (0,_storeTaskList__WEBPACK_IMPORTED_MODULE_4__.storeTaskList)();
            
            
            
        };
        
        
       
    }
    
};

/***/ }),

/***/ "./src/EDIT-TASK/editController.js":
/*!*****************************************!*\
  !*** ./src/EDIT-TASK/editController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editTask": () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");


// keeps track of task being edited
let  arrayNum = 0;


function editTask(task) {
    let title = document.getElementById('title-placeholder');
    let date = document.getElementById('date-placeholder');
    let project = document.getElementById('project-focus-placeholder');
    let priority = document.getElementById('priority-placeholder');
    let description = document.getElementById('description-placeholder');

    let container = document.getElementById('info-container');

  

    const selectTask = (() => {
        for(let i =0; i < ___WEBPACK_IMPORTED_MODULE_0__.taskList.length;i++ ){
            if (___WEBPACK_IMPORTED_MODULE_0__.taskList[i].title == title.innerText){
                arrayNum = i;
                

                const createInputs = (() => {
                    
                    const createTitleInput = (() => {
                        const titleInput = document.createElement('input');
                        titleInput.value = title.innerText;
                        titleInput.classList.add('edit-input');
                        titleInput.id = 'title-placeholder';

                        container.replaceChild(titleInput, container.childNodes[1]);
                    })();
                    
                    const createDescriptionInput = (() => {
                        const descriptionInput = document.createElement('input');
                        descriptionInput.value = description.innerText;
                        descriptionInput.classList.add('edit-input');
                        descriptionInput.id = 'description-placeholder'

                        container.replaceChild(descriptionInput, container.childNodes[3]);
                    })();
                    
                    const createDateInput = (() => {
                        const dateInput = document.createElement('input');
                        dateInput.value = date.innerText;
                        dateInput.classList.add('edit-input');
                        dateInput.id = 'date-placeholder'

                        container.replaceChild(dateInput, container.childNodes[5]);
                    })();
                    
                    const createPriorityInput = (() => {
                        const priorityInput = document.createElement('input');
                        priorityInput.value = priority.innerText;
                        priorityInput.classList.add('edit-input');
                        priorityInput.id = 'priority-placeholder'

                        container.replaceChild(priorityInput, container.childNodes[7]);
                    })();
                    
                    const createProjectInput = (() => {
                        const projectInput = document.createElement('input');
                        projectInput.value = project.innerText;
                        projectInput.classList.add('edit-input');
                        projectInput.id = 'project-focus-placeholder'

                        container.replaceChild(projectInput, container.childNodes[9]);
                    })();
                    
    
                    
                })();

                const editToSubmit = (() => {
                    let buttonContainer = document.getElementById('edit-button-container');

                    const submitEdit = document.createElement('button');
                    submitEdit.id = 'submit-edit-button';
                    submitEdit.classList.add('focus-button');
                    // submitEdit.addEventListener('click', makeEdit);
                    submitEdit.innerText = 'Submit';

                    buttonContainer.replaceChild(submitEdit, buttonContainer.childNodes[0]);
                })();

                function taskSubmitHandler(event){
                    event.preventDefault();
                    makeEdit();
                }


                const createForm = (() => {
                    const taskFocus = document.getElementById('task-focus');
                    const content = document.getElementById('content');
                    
                    const focusForm = document.createElement('form');
                    focusForm.onsubmit = taskSubmitHandler;
                    focusForm.id = 'task-focus';
                    focusForm.classList.add('task-focus');

                    while (taskFocus.childNodes.length > 0){
                        focusForm.appendChild(taskFocus.childNodes[0]);
                    };

                    content.replaceChild(focusForm, content.childNodes[4]);
                })();

                function makeEdit(){
                    const revertInputs = (() => {

                        const titleEdit = document.createElement('div');
                        titleEdit.innerText = document.getElementById('title-placeholder').value;
                        titleEdit.id = 'title-placeholder';
                        titleEdit.classList.add('task-info');

                        ___WEBPACK_IMPORTED_MODULE_0__.taskList[arrayNum].title = titleEdit.innerText;

                        container.replaceChild(titleEdit, container.childNodes[1]);
                        

                        const descriptionEdit = document.createElement('div');
                        descriptionEdit.innerText = document.getElementById('description-placeholder').value;
                        descriptionEdit.id = 'description-placeholder';
                        descriptionEdit.classList.add('task-info');

                        ___WEBPACK_IMPORTED_MODULE_0__.taskList[arrayNum].description = descriptionEdit.innerText;

                        container.replaceChild(descriptionEdit, container.childNodes[3]);


                        const dateEdit = document.createElement('div');
                        dateEdit.innerText = document.getElementById('date-placeholder').value;
                        dateEdit.id = 'date-placeholder';
                        dateEdit.classList.add('task-info');

                        ___WEBPACK_IMPORTED_MODULE_0__.taskList[arrayNum].dueDate = dateEdit.innerText;

                        container.replaceChild(dateEdit, container.childNodes[5]);



                        const priorityEdit = document.createElement('div');
                        priorityEdit.innerText = document.getElementById('priority-placeholder').value;
                        priorityEdit.id = 'priority-placeholder';
                        priorityEdit.classList.add('task-info');

                        ___WEBPACK_IMPORTED_MODULE_0__.taskList[arrayNum].priority = priorityEdit.innerText;

                        container.replaceChild(priorityEdit, container.childNodes[7]);


                        const projectEdit = document.createElement('div');
                        projectEdit.innerText = document.getElementById('project-focus-placeholder').value;
                        projectEdit.id = 'project-focus-placeholder';
                        projectEdit.classList.add('task-info');

                        ___WEBPACK_IMPORTED_MODULE_0__.taskList[arrayNum].project = projectEdit.innerText;

                        container.replaceChild(projectEdit, container.childNodes[9]);
                    })();



                    const submitToEdit = (() => {
                        let buttonContainer = document.getElementById('edit-button-container');
    
                        const submitToEdit = document.createElement('button');
                        submitToEdit.id = 'submit-edit-button';
                        submitToEdit.classList.add('focus-button');
                        submitToEdit.addEventListener('click', editTask);
                        // submitEdit.addEventListener('click', makeEdit);
                        submitToEdit.innerText = 'Edit';
    
                        buttonContainer.replaceChild(submitToEdit, buttonContainer.childNodes[0]);
                    })();

                    const destroyForm = (() => {
                        const taskFocus = document.getElementById('task-focus');
                        const content = document.getElementById('content');
                        
                        const focusDiv = document.createElement('div');
                        focusDiv.id = 'task-focus';
                        focusDiv.classList.add('task-focus');
    
                        while (taskFocus.childNodes.length > 0){
                            focusDiv.appendChild(taskFocus.childNodes[0]);
                        };
    
                        content.replaceChild(focusDiv, content.childNodes[4]);

                        

                    })();
                };

                
                
            };
        };
    })();
    
};




/***/ }),

/***/ "./src/EDIT-TASK/storeTaskList.js":
/*!****************************************!*\
  !*** ./src/EDIT-TASK/storeTaskList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storeTaskList": () => (/* binding */ storeTaskList)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");


function storeTaskList(){
    var tasksToStore = ___WEBPACK_IMPORTED_MODULE_0__.taskList;
    localStorage.setItem('taskStorage', JSON.stringify(tasksToStore));
};



/***/ }),

/***/ "./src/HOMEPAGE/DOMFormBarHeader.js":
/*!******************************************!*\
  !*** ./src/HOMEPAGE/DOMFormBarHeader.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildFormBarHeader": () => (/* binding */ buildFormBarHeader)
/* harmony export */ });


function buildFormBarHeader() {
    let content = document.getElementById('content');
    const formHeader = document.createElement('div');
    formHeader.classList.add('form-header');
    content.appendChild(formHeader);
    

    const add = document.createElement('span');
    add.classList.add('add');
    add.innerText = 'Add';
    formHeader.appendChild(add);

    const createTaskButton = (() => {
        const taskButton =  document.createElement('button');
        taskButton.classList.add('task-button');
        taskButton.id = 'task-button';
        taskButton.innerText = 'Task';
        formHeader.appendChild(taskButton);
    })();

    const createProjectButton = (() => {
        const projectButton =  document.createElement('button');
        projectButton.classList.add('project-button');
        projectButton.id = 'project-button';
        projectButton.innerText = 'Project';
        formHeader.appendChild(projectButton);

        
    })();  
}; 

/***/ }),

/***/ "./src/HOMEPAGE/DOMHeader.js":
/*!***********************************!*\
  !*** ./src/HOMEPAGE/DOMHeader.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildHeader": () => (/* binding */ buildHeader)
/* harmony export */ });
function buildHeader() {
    const header = document.createElement('header');
    header.id = 'header';
    header.classList.add('header');
    content.appendChild(header);

        const buildTitle = (() => {
            const title = document.createElement('h1');
            title.id = 'title';
            title.classList.add('title');
            title.innerText = 'To Do List';
            header.appendChild(title);

        })();
};



/***/ }),

/***/ "./src/HOMEPAGE/DOMMain.js":
/*!*********************************!*\
  !*** ./src/HOMEPAGE/DOMMain.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildMain": () => (/* binding */ buildMain)
/* harmony export */ });
function buildMain () {
    const main = document.createElement('main');
    main.id = 'main';
    main.classList.add('main');
    content.appendChild(main);

    const buildTable = (() => {
        const table = document.createElement('table');
        table.id = 'task-table';
        table.classList.add = 'task-table';
        main.appendChild(table);

        const buildTableHeader = (() => {
            const tableHeaderRow = document.createElement('tr');
            tableHeaderRow.classList.add('column-header');
            tableHeaderRow.classList.add('task');
            table.appendChild(tableHeaderRow);

            const columnPlaceholder = document.createElement('th');
            columnPlaceholder.classList.add('column-header');
            columnPlaceholder.classList.add('column-placeholder');
            columnPlaceholder.innerHTML = '';
            tableHeaderRow.appendChild(columnPlaceholder);

            const column1 = document.createElement('th');
            column1.classList.add('column-header');
            column1.innerText = 'Task';
            tableHeaderRow.appendChild(column1);

            const column2 = document.createElement('th');
            column2.classList.add('column-header');
            column2.classList.add('task-due-date');
            column2.innerText = 'Date-Due';
            tableHeaderRow.appendChild(column2);

            const column3 = document.createElement('th');
            column3.classList.add('column-header');
            column3.classList.add('task-due-date');
            column3.innerHTML = 'Completed?';
            tableHeaderRow.appendChild(column3);
        })();
    })();
};

/***/ }),

/***/ "./src/HOMEPAGE/DOMProjectBar.js":
/*!***************************************!*\
  !*** ./src/HOMEPAGE/DOMProjectBar.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildSidebar": () => (/* binding */ buildSidebar)
/* harmony export */ });
/* harmony import */ var _TASK_removeTaskTableRows__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TASK/removeTaskTableRows */ "./src/TASK/removeTaskTableRows.js");
/* harmony import */ var _TASK_displayAllTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TASK/displayAllTasks */ "./src/TASK/displayAllTasks.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _PROJECT_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PROJECT/project */ "./src/PROJECT/project.js");
/* harmony import */ var _PROJECT_storeProjectList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PROJECT/storeProjectList */ "./src/PROJECT/storeProjectList.js");
/* harmony import */ var _PROJECT_addToProjectSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PROJECT/addToProjectSelect */ "./src/PROJECT/addToProjectSelect.js");
/* harmony import */ var _EDIT_TASK_storeTaskList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../EDIT-TASK/storeTaskList */ "./src/EDIT-TASK/storeTaskList.js");








function buildSidebar () {
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    sidebar.classList.add('sidebar');
    content.appendChild(sidebar);

    const sidebarHeader = document.createElement('h2');
    sidebarHeader.classList.add('projects-header');
    sidebarHeader.innerText = 'Projects';
    sidebar.appendChild(sidebarHeader);

    const BuildProjectTable = (() => {
        const projectTable = document.createElement('div');
        projectTable.classList.add('project-table');
        projectTable.id = 'project-table';
        sidebar.appendChild(projectTable);

        const buildTableHeader = (() => {
            const tableHeaderRow = document.createElement('div');
            tableHeaderRow.classList.add('column-header');
            tableHeaderRow.innerText = 'projects';
            tableHeaderRow.classList.add('task');
            projectTable.appendChild(tableHeaderRow);

            // const columnHeader = document.createElement('th');
            // columnHeader.classList.add('column-header');
            // columnHeader.classList.add('project-header');
            // // columnHeader.innerText = 'Projects';
            // tableHeaderRow.appendChild(columnHeader);
        });

        const buildAllRow = (() => {
            const allRow = document.createElement('div');
            allRow.classList.add('all-row');
            projectTable.appendChild(allRow);

            const createTableButton = (() => {

                const button = document.createElement('button');
                button.id = 'all-projects';
                button.classList.add('project-table-button');
                button.innerHTML = 'All Projects'
                button.addEventListener('click', _TASK_removeTaskTableRows__WEBPACK_IMPORTED_MODULE_0__.removeTableRows)
                button.addEventListener('click', _TASK_displayAllTasks__WEBPACK_IMPORTED_MODULE_1__.displayAllTasks)
                
                
                allRow.appendChild(button);
            })();
            

        })();
    })();

    const createDeleteContainer = (() => {
        const deleteContainer = document.createElement('div');
        deleteContainer.id = 'delete-container';
        deleteContainer.classList.add('delete-container');
        sidebar.appendChild(deleteContainer);

        const deleteHeader = document.createElement('h2');
        deleteHeader.classList.add('delete-header')
        deleteHeader.innerText = 'Delete Project';
        deleteContainer.appendChild(deleteHeader);

        const deleteForm = document.createElement('form');
        deleteForm.id = 'delete-form';
        deleteForm.classList.add('delete-form');
        deleteForm.onsubmit = projectDeleteHandler;
        deleteContainer.appendChild(deleteForm);

        const deleteSelect = document.createElement('input');
        deleteSelect.id = 'delete-select';
        deleteSelect.classList.add('delete-select');
        deleteForm.appendChild(deleteSelect);

        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.id = 'delete-project';
        deleteProjectButton.classList.add('delete-project');
        deleteProjectButton.innerHTML = 'Delete';
        deleteForm.appendChild(deleteProjectButton);

        
        

        function projectDeleteHandler(event){
            event.preventDefault();
            deleteProject();
        }

        

        function deleteProject(){
            for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_2__.projectList.length; i++){
                const projectName = document.getElementById('delete-select').value;
                if (projectName == ___WEBPACK_IMPORTED_MODULE_2__.projectList[i].name){
                    console.log(projectName);
                    delete ___WEBPACK_IMPORTED_MODULE_2__.projectList[i];
                    ___WEBPACK_IMPORTED_MODULE_2__.projectList[i] = new _PROJECT_project__WEBPACK_IMPORTED_MODULE_3__.Project("","","","","");
                    console.log(___WEBPACK_IMPORTED_MODULE_2__.projectList);
                    
                    
                   
                        // let filteredProjects = projectList.filter(function(e) {
                        //     return e.name != "";
                        // });
                        // console.log(filteredProjects);

                        
                        
                  

                };
                
            };
        }

    })();
}; 

/***/ }),

/***/ "./src/HOMEPAGE/DOMTaskFocus.js":
/*!**************************************!*\
  !*** ./src/HOMEPAGE/DOMTaskFocus.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildTaskFocus": () => (/* binding */ buildTaskFocus)
/* harmony export */ });
/* harmony import */ var _EDIT_TASK_editController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EDIT-TASK/editController */ "./src/EDIT-TASK/editController.js");
/* harmony import */ var _EDIT_TASK_deleteTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EDIT-TASK/deleteTask */ "./src/EDIT-TASK/deleteTask.js");



function buildTaskFocus() {

    let taskFocus = document.createElement('div');
    taskFocus.id = 'task-focus';
    taskFocus.classList.add('task-focus');
    content.appendChild(taskFocus);

    const infoContainer = document.createElement('div');
    infoContainer.id = 'info-container';
    infoContainer.classList.add('info-container');
    taskFocus.appendChild(infoContainer);

    const createTitleSection = (() => {
        const titleSection = document.createElement('div');
        titleSection.classList.add('focus-section');
        titleSection.id = ('title-section');
        titleSection.innerText = 'Title : ';
        infoContainer.appendChild(titleSection);

        const titlePlaceholder = document.createElement('div');
        titlePlaceholder.classList.add('task-info');
        titlePlaceholder.id = 'title-placeholder';
        titlePlaceholder.innerText = '';
        infoContainer.appendChild(titlePlaceholder);
    })();

    const createDescriptionSection = (() => {
        const descriptionSection = document.createElement('div');
        descriptionSection.classList.add('focus-section');
        descriptionSection.id = ('description-section');
        descriptionSection.innerText = 'Description: ';
        infoContainer.appendChild(descriptionSection);

        const descriptionPlaceholder = document.createElement('div');
        descriptionPlaceholder.classList.add('task-info');
        descriptionPlaceholder.id = 'description-placeholder';
        descriptionPlaceholder.innerText = '';
        infoContainer.appendChild(descriptionPlaceholder);
    })();

    const createDateSection = (() => {
        const dateSection = document.createElement('div');
        dateSection.classList.add('focus-section');
        dateSection.id = ('date-section');
        dateSection.innerText = 'Date: ';
        infoContainer.appendChild(dateSection);

        const datePlaceholder = document.createElement('div');
        datePlaceholder.classList.add('task-info');
        datePlaceholder.id = 'date-placeholder';
        datePlaceholder.innerText = '';
        infoContainer.appendChild(datePlaceholder);
    })();

    const createPrioritySection = (() => {
        const prioritySection = document.createElement('div');
        prioritySection.classList.add('focus-section');
        prioritySection.id = ('priority-section');
        prioritySection.innerText = 'Priority: ';
        infoContainer.appendChild(prioritySection);

        const priorityPlaceholder = document.createElement('div');
        priorityPlaceholder.classList.add('task-info');
        priorityPlaceholder.id = 'priority-placeholder';
        priorityPlaceholder.innerText = '';
        infoContainer.appendChild(priorityPlaceholder);
    })();

    const createProjectSection = (() => {
        const projectSection = document.createElement('div');
        projectSection.classList.add('focus-section');
        projectSection.id = ('project-focus-section');
        projectSection.innerText = 'Project: ';
        infoContainer.appendChild(projectSection);

        const projectPlaceholder = document.createElement('div');
        projectPlaceholder.classList.add('task-info');
        projectPlaceholder.id = 'project-focus-placeholder';
        projectPlaceholder.innerText = '';
        infoContainer.appendChild(projectPlaceholder);
    })();

    const createButtonSection = (() => {
        const buttonSection = document.createElement('div');
        buttonSection.classList.add('focus-button-section');
        buttonSection.id = 'focus-button-section';
        taskFocus.appendChild(buttonSection);

        const createEditButton = (() => {
            const editButtonContainer = document.createElement('div');
            editButtonContainer.id = 'edit-button-container';
            editButtonContainer.classList.add('focus-button-container');
            buttonSection.appendChild(editButtonContainer);

            const editButton = document.createElement('button');
            editButton.classList.add('focus-button');
            editButton.innerText = 'Edit';
            editButton.addEventListener('click', _EDIT_TASK_editController__WEBPACK_IMPORTED_MODULE_0__.editTask);
            editButtonContainer.appendChild(editButton);
        })();

        const createDeleteButton = (() => {
            const deleteButtonContainer = document.createElement('div');
            deleteButtonContainer.classList.add('focus-button-container');
            buttonSection.appendChild(deleteButtonContainer);

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('focus-button');
            deleteButton.innerText = 'Delete';
            deleteButton.addEventListener('click', _EDIT_TASK_deleteTask__WEBPACK_IMPORTED_MODULE_1__.deleteTask);
           deleteButtonContainer.appendChild(deleteButton);
        })();
    })();
};

/***/ }),

/***/ "./src/HOMEPAGE/homepageController.js":
/*!********************************************!*\
  !*** ./src/HOMEPAGE/homepageController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomePage": () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _DOMHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMHeader */ "./src/HOMEPAGE/DOMHeader.js");
/* harmony import */ var _DOMProjectBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMProjectBar */ "./src/HOMEPAGE/DOMProjectBar.js");
/* harmony import */ var _DOMMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMMain */ "./src/HOMEPAGE/DOMMain.js");
/* harmony import */ var _DOMFormBarHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMFormBarHeader */ "./src/HOMEPAGE/DOMFormBarHeader.js");
/* harmony import */ var _DOMTaskFocus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMTaskFocus */ "./src/HOMEPAGE/DOMTaskFocus.js");







function createHomePage() {

    const defineContent = (() => {
        const content = document.getElementById('content');
    })();

    (0,_DOMHeader__WEBPACK_IMPORTED_MODULE_0__.buildHeader)();
    (0,_DOMProjectBar__WEBPACK_IMPORTED_MODULE_1__.buildSidebar)();
    (0,_DOMMain__WEBPACK_IMPORTED_MODULE_2__.buildMain)();
    (0,_DOMFormBarHeader__WEBPACK_IMPORTED_MODULE_3__.buildFormBarHeader)();
    (0,_DOMTaskFocus__WEBPACK_IMPORTED_MODULE_4__.buildTaskFocus)();   
};





/***/ }),

/***/ "./src/PROJECT/DOMProjectForm.js":
/*!***************************************!*\
  !*** ./src/PROJECT/DOMProjectForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildProjectForm": () => (/* binding */ buildProjectForm)
/* harmony export */ });
/* harmony import */ var _pushProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pushProject */ "./src/PROJECT/pushProject.js");


function buildProjectForm() {

    // change color of selected button
    const changeButtonColor = (() => {
        let taskButton = document.getElementById('task-button');
        taskButton.style.color = 'black';

        let projectButton = document.getElementById('project-button');
        projectButton.style.color = 'white';
    })();

    const content = document.getElementById('content');  

    /**** PUSH PROJECT FUNCTION ********/
    function projectSubmitHandler(event){
        console.log('test');
        event.preventDefault();
        (0,_pushProject__WEBPACK_IMPORTED_MODULE_0__.pushProject)();
    }
    /**** PUSH PROJECT FUNCTION ********/

    // build form 
    const buildAddBar = (() => {
        const projectForm = document.createElement('form');
        projectForm.onsubmit = projectSubmitHandler;
        projectForm.id = 'form';
        projectForm.classList.add('task-form');
        content.appendChild(projectForm);


        const createProjectName = (() => {
            const formItem = document.createElement('div');
            formItem.classList.add('form-item')
            projectForm.appendChild(formItem);
    
            const nameLabel = document.createElement('label');
            nameLabel.classList.add('form-label');
            nameLabel.setAttribute('for', 'project-name');
            nameLabel.innerText = 'Project Name';
            formItem.appendChild(nameLabel);
    
            const projectNameInput = document.createElement('input');
            projectNameInput.classList.add('form-input');
            projectNameInput.id = 'project-name';
            formItem.appendChild(projectNameInput);
        })();
    
        const createProjectDescription = (() => {
            const formItem = document.createElement('div');
            formItem.classList.add('form-item')
            projectForm.appendChild(formItem);
    
            const projectDescriptionLabel = document.createElement('label');
            projectDescriptionLabel.classList.add('form-label');
            projectDescriptionLabel.setAttribute('for', 'project-description');
            projectDescriptionLabel.innerText = 'Project Description';
            formItem.appendChild(projectDescriptionLabel);
    
            const projectDescriptionInput = document.createElement('input');
            projectDescriptionInput.classList.add('form-input');
            projectDescriptionInput.id = 'project-description';
            formItem.appendChild(projectDescriptionInput);  
        })();  

        const addSubmit = (() => {
            const submitContainer = document.createElement('div');
            submitContainer.classList.add('submit-container');
            projectForm.appendChild(submitContainer);
    
            const submit = document.createElement('button');
            submit.classList.add('submit');
            submit.innerText = 'Add';
            submit.setAttribute('type', 'submit')
            submitContainer.appendChild(submit);
        })();
    })();      
};

/***/ }),

/***/ "./src/PROJECT/addToProjectSelect.js":
/*!*******************************************!*\
  !*** ./src/PROJECT/addToProjectSelect.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToProjectSelect": () => (/* binding */ addToProjectSelect)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");


  
function addToProjectSelect() {

    for(let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.projectList.length; i++){
        if (___WEBPACK_IMPORTED_MODULE_0__.projectList[i].name != ""){
            let select = document.getElementById('form-project');
         
            let option = document.createElement('option');
            option.innerText = ___WEBPACK_IMPORTED_MODULE_0__.projectList[i].name;
            option.value = ___WEBPACK_IMPORTED_MODULE_0__.projectList[i].name;
            select.appendChild(option);
            
            let deleteSelect = document.getElementById('delete-select');

            let otherOption = document.createElement('option')
            otherOption.innerText = ___WEBPACK_IMPORTED_MODULE_0__.projectList[i].name;
            otherOption.value = ___WEBPACK_IMPORTED_MODULE_0__.projectList[i].name;
            deleteSelect.appendChild(otherOption);
        };
        
    }
    
}


/***/ }),

/***/ "./src/PROJECT/createProject.js":
/*!**************************************!*\
  !*** ./src/PROJECT/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _TASK_removeTaskTableRows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TASK/removeTaskTableRows */ "./src/TASK/removeTaskTableRows.js");
/* harmony import */ var _TASK_createTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TASK/createTask */ "./src/TASK/createTask.js");





function createProject(proj){
    const table = document.getElementById('project-table');

    const project = document.createElement('tr');
    // project.classList.add('project-table-item');
    table.appendChild(project);



    const createTableButton = (() => {
        const row = document.createElement('td');
        row.classList.add('project-table-item');
        project.appendChild(row);

        const button = document.createElement('button');
        button.id = proj.name;
        button.classList.add('project-table-button');
        button.innerText = proj.name;
        button.addEventListener('click', switchProject)
        row.appendChild(button);
        

       
        function switchProject(){     
            const allProjectsButton = document.getElementById('all-projects');

            
            for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.projectList.length; i++){
                if (___WEBPACK_IMPORTED_MODULE_0__.projectList[i].name == button.id) {
                    (0,_TASK_removeTaskTableRows__WEBPACK_IMPORTED_MODULE_1__.removeTableRows)();
                    sortList(button.id);

                        function sortList(x) {
                            for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.taskList.length; i++ ){
                                if (x == ___WEBPACK_IMPORTED_MODULE_0__.taskList[i].project){
                                    (0,_TASK_createTask__WEBPACK_IMPORTED_MODULE_2__.createTask)(___WEBPACK_IMPORTED_MODULE_0__.taskList[i]);
                                }
                                
                            }
                            
                        }
    
                }
            };
        };
    })();
};

/***/ }),

/***/ "./src/PROJECT/project.js":
/*!********************************!*\
  !*** ./src/PROJECT/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(name, projectDescription, notes){
        this.name = name;
        this.projectDescription = projectDescription;
        this.notes = notes;
    }
};

/***/ }),

/***/ "./src/PROJECT/pushProject.js":
/*!************************************!*\
  !*** ./src/PROJECT/pushProject.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pushProject": () => (/* binding */ pushProject)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/PROJECT/project.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProject */ "./src/PROJECT/createProject.js");
/* harmony import */ var _storeProjectList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storeProjectList */ "./src/PROJECT/storeProjectList.js");





function pushProject() {
 
        
        let projectName = document.getElementById('project-name');
        let projectDescription = document.getElementById('project-description');
 

        let project = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(projectName.value, projectDescription.value);
        console.log(project);
    
        (0,_createProject__WEBPACK_IMPORTED_MODULE_2__.createProject)(project);
       

        ___WEBPACK_IMPORTED_MODULE_0__.projectList.push(project);

        (0,_storeProjectList__WEBPACK_IMPORTED_MODULE_3__.storeProjectList)();
        

    
    

};

/***/ }),

/***/ "./src/PROJECT/storeProjectList.js":
/*!*****************************************!*\
  !*** ./src/PROJECT/storeProjectList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storeProjectList": () => (/* binding */ storeProjectList)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");


function storeProjectList(){
    var projectsToStore = ___WEBPACK_IMPORTED_MODULE_0__.projectList;
    localStorage.setItem('storedProject', JSON.stringify(projectsToStore));
};

/***/ }),

/***/ "./src/TASK/DOMTaskForm.js":
/*!*********************************!*\
  !*** ./src/TASK/DOMTaskForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildTaskForm": () => (/* binding */ buildTaskForm)
/* harmony export */ });
/* harmony import */ var _pushTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pushTask */ "./src/TASK/pushTask.js");
/* harmony import */ var _focusTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusTask */ "./src/TASK/focusTask.js");




function buildTaskForm() {


    // change color of selected button
    const changeButtonColor = (() => {
        let taskButton = document.getElementById('task-button');
        taskButton.style.color = 'white';

        let projectButton = document.getElementById('project-button');
        projectButton.style.color = 'black';
    })();
    
    const content = document.getElementById('content');  

    /**** PUSH TASK FUNCTION ********/
    function taskSubmitHandler(event){
        event.preventDefault();
        (0,_pushTask__WEBPACK_IMPORTED_MODULE_0__.pushTask)();
    }
    /**** PUSH TASK FUNCTION ********/

    // build form 
    const buildAddBar = (() => {
        const taskForm = document.createElement('form');
        taskForm.onsubmit = taskSubmitHandler;
        taskForm.id = 'task-form';
        
        taskForm.classList.add('task-form');
        content.appendChild(taskForm);

        const formTitle = (() => {
            const formItem = document.createElement('div');
            formItem.classList.add('form-item')
            taskForm.appendChild(formItem);
    
            const titleLabel = document.createElement('label');
            titleLabel.classList.add('form-label');
            titleLabel.setAttribute('for', 'form-title');
            titleLabel.innerText = 'Title';
            formItem.appendChild(titleLabel);
    
            const titleInput = document.createElement('input');
            titleInput.classList.add('form-input');
            titleInput.id = 'form-title';
            formItem.appendChild(titleInput);
        })();
    
        const formDescription = (() => {
            const formItem = document.createElement('div');
            formItem.classList.add('form-item')
            taskForm.appendChild(formItem);
    
            const descriptionLabel = document.createElement('label');
            descriptionLabel.classList.add('form-label');
            descriptionLabel.setAttribute('for', 'form-description');
            descriptionLabel.innerText = 'Description';
            formItem.appendChild(descriptionLabel);
    
            const descriptionInput = document.createElement('input');
            descriptionInput.classList.add('form-input');
            descriptionInput.id = 'form-description';
            formItem.appendChild(descriptionInput);
        })();
    
        const formDueDate = (() => {
            const formItem = document.createElement('div');
            formItem.classList.add('form-item')
            taskForm.appendChild(formItem);
    
            const dueDateLabel = document.createElement('label');
            dueDateLabel.classList.add('form-label');
            dueDateLabel.setAttribute('for', 'form-date');
            dueDateLabel.innerText = 'Due Date';
            formItem.appendChild(dueDateLabel);
    
            const dueDateInput = document.createElement('input');
            dueDateInput.type = 'date';
            dueDateInput.classList.add('form-input');
            dueDateInput.id = 'form-date';
            formItem.appendChild(dueDateInput);
        })();
    
        const formPriority = (() => {
            const formItem = document.createElement('div');
            formItem.classList.add('form-item')
            taskForm.appendChild(formItem);
    
            const priorityLabel = document.createElement('label');
            priorityLabel.classList.add('form-label');
            priorityLabel.setAttribute('for', 'form-priority');
            priorityLabel.innerText = 'Priority';
            formItem.appendChild(priorityLabel);
    
            const priorityInput = document.createElement('select');
            priorityInput.classList.add('form-priority');
            priorityInput.id = 'form-priority';
            formItem.appendChild(priorityInput);

            const priorityOptions = (() => {
                const optionLow = document.createElement('option');
                optionLow.value = 'Low';
                optionLow.innerHTML = 'Low';
                priorityInput.appendChild(optionLow);

                const optionMedium = document.createElement('option');
                optionMedium.value = 'Medium';
                optionMedium.innerHTML = 'Medium';
                priorityInput.appendChild(optionMedium);

                const optionHigh = document.createElement('option');
                optionHigh.value = 'High';
                optionHigh.innerHTML = 'High';
                priorityInput.appendChild(optionHigh);
            })();
        })();

        const formProject = (() => {
            const formItem = document.createElement('div');
            formItem.classList.add('form-item')
            taskForm.appendChild(formItem);
    
            const projectLabel = document.createElement('label');
            projectLabel.classList.add('form-label');
            projectLabel.setAttribute('for', 'form-project');
            projectLabel.innerText = 'Project';
            formItem.appendChild(projectLabel);
    
            const projectInput = document.createElement('select');
            projectInput.classList.add('form-project');
            projectInput.id = 'form-project';
            formItem.appendChild(projectInput);

            const defaultSelect = document.createElement('option');
            defaultSelect.value = 'None';
            defaultSelect.innerText = '';
            projectInput.appendChild(defaultSelect);
        })();
    
        const addSubmit = (() => {
            const submitContainer = document.createElement('div');
            submitContainer.classList.add('submit-container');
            taskForm.appendChild(submitContainer);
    
            const submit = document.createElement('button');
            submit.classList.add('submit');
            submit.innerText = 'Add';
            submit.setAttribute('type', 'submit')
            submitContainer.appendChild(submit);
        })();
    })();        
};


/***/ }),

/***/ "./src/TASK/createTask.js":
/*!********************************!*\
  !*** ./src/TASK/createTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _focusTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusTask */ "./src/TASK/focusTask.js");


function createTask (todo) {

        
    const table = document.getElementById('task-table');

    const task = document.createElement('tr');
    task.classList.add('task');
    table.appendChild(task);

    const taskButtonContainer = document.createElement('td');
        taskButtonContainer.classList.add('task-title');
        task.appendChild(taskButtonContainer);
    
    const createTaskButton = (() => {
        const taskButton = document.createElement('button');
            taskButton.classList.add('task-switch-button');
            taskButton.id = todo.title;
            taskButton.addEventListener('click', sortTask);
            taskButtonContainer.appendChild(taskButton);

            function sortTask() {
                for(let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.taskList.length; i++){
                    if (___WEBPACK_IMPORTED_MODULE_0__.taskList[i].title == taskButton.id){
                        (0,_focusTask__WEBPACK_IMPORTED_MODULE_1__.focusTask)(___WEBPACK_IMPORTED_MODULE_0__.taskList[i]);
                    } 
                };
            };
    })();
    
        

    const addTaskTitle = (() => {
        const taskTitle = document.createElement('td');
        taskTitle.classList.add('task-title');
        taskTitle.innerText = todo.title;
        task.appendChild(taskTitle);
    })();

    const addTaskDueDate = (() => {
        const taskDueDate = document.createElement('td');
        taskDueDate.classList.add('task-due-date');
        taskDueDate.innerText = todo.dueDate;
        task.appendChild(taskDueDate);
    })(); 

    const addCompletion = (() => {
        const completion = document.createElement('td');
        completion.classList.add('task-completion');
        task.appendChild(completion);

        const addCompletedCheckbox = (() => {
            const completedCheckbox = document.createElement('input');
            completedCheckbox.setAttribute('type', 'checkbox');
            completion.appendChild(completedCheckbox);
        })();
    })(); 

};

/***/ }),

/***/ "./src/TASK/displayAllTasks.js":
/*!*************************************!*\
  !*** ./src/TASK/displayAllTasks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAllTasks": () => (/* binding */ displayAllTasks)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ "./src/TASK/createTask.js");



function displayAllTasks() {
    for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.taskList.length; i++){
        if(___WEBPACK_IMPORTED_MODULE_0__.taskList[i].title != ""){
            (0,_createTask__WEBPACK_IMPORTED_MODULE_1__.createTask)(___WEBPACK_IMPORTED_MODULE_0__.taskList[i]);
        };
        
    };
};

/***/ }),

/***/ "./src/TASK/focusTask.js":
/*!*******************************!*\
  !*** ./src/TASK/focusTask.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusTask": () => (/* binding */ focusTask)
/* harmony export */ });

function focusTask(task) {
    
        let title = document.getElementById('title-placeholder');
        let date = document.getElementById('date-placeholder');
        let project = document.getElementById('project-focus-placeholder');
        let priority = document.getElementById('priority-placeholder');
        let description = document.getElementById('description-placeholder');
    
        title.innerText = task.title;
        date.innerText = task.dueDate;
        project.innerText = task.project;
        priority.innerHTML = task.priority;
        description.innerHTML = task.description;
  
    

};

/***/ }),

/***/ "./src/TASK/pushTask.js":
/*!******************************!*\
  !*** ./src/TASK/pushTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pushTask": () => (/* binding */ pushTask)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/TASK/task.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTask */ "./src/TASK/createTask.js");
/* harmony import */ var _EDIT_TASK_storeTaskList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../EDIT-TASK/storeTaskList */ "./src/EDIT-TASK/storeTaskList.js");
/* harmony import */ var _removeTaskTableRows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeTaskTableRows */ "./src/TASK/removeTaskTableRows.js");
/* harmony import */ var _displayAllTasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./displayAllTasks */ "./src/TASK/displayAllTasks.js");








function pushTask() {

    let  title = document.getElementById('form-title');
    let description = document.getElementById('form-description');
    let date = document.getElementById('form-date');
    let priority = document.getElementById('form-priority');
    let project = document.getElementById('form-project')

    let task = new _task__WEBPACK_IMPORTED_MODULE_1__.Task(title.value, description.value, date.value, priority.value, project.value);
    ___WEBPACK_IMPORTED_MODULE_0__.taskList.push(task);
    
    

    // Put the object into storage
    (0,_EDIT_TASK_storeTaskList__WEBPACK_IMPORTED_MODULE_3__.storeTaskList)();
    
    title.value = "";
    description.value = "";
    date.value = "";
    priority.value = "";
    project.value = "";

    (0,_removeTaskTableRows__WEBPACK_IMPORTED_MODULE_4__.removeTableRows)();
    (0,_displayAllTasks__WEBPACK_IMPORTED_MODULE_5__.displayAllTasks)();

  
};

/***/ }),

/***/ "./src/TASK/removeTaskTableRows.js":
/*!*****************************************!*\
  !*** ./src/TASK/removeTaskTableRows.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeTableRows": () => (/* binding */ removeTableRows)
/* harmony export */ });
function removeTableRows(){
    let table = document.getElementById('task-table');
    for(let i = 1; i<table.rows.length;){
        table.deleteRow(i);
    }
};

/***/ }),

/***/ "./src/TASK/task.js":
/*!**************************!*\
  !*** ./src/TASK/task.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }
    getTaskPreview() {
        return this.title + ' / ' + this.dueDate;
    }
    getTaskFull() {
        return this.title + ' | ' + this.description + ' | ' + this.dueDate + ' | ' + this.priority + ' | ';
    } 
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "taskList": () => (/* binding */ taskList)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _HOMEPAGE_homepageController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HOMEPAGE/homepageController */ "./src/HOMEPAGE/homepageController.js");
/* harmony import */ var _TASK_DOMTaskForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TASK/DOMTaskForm */ "./src/TASK/DOMTaskForm.js");
/* harmony import */ var _PROJECT_createProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PROJECT/createProject */ "./src/PROJECT/createProject.js");
/* harmony import */ var _TASK_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TASK/task */ "./src/TASK/task.js");
/* harmony import */ var _PROJECT_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PROJECT/project */ "./src/PROJECT/project.js");
/* harmony import */ var _rightSidebarLogic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rightSidebarLogic */ "./src/rightSidebarLogic.js");
/* harmony import */ var _TASK_displayAllTasks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TASK/displayAllTasks */ "./src/TASK/displayAllTasks.js");
/* harmony import */ var _PROJECT_addToProjectSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PROJECT/addToProjectSelect */ "./src/PROJECT/addToProjectSelect.js");

















/************** STORE TASKS ****************/

// const retrievedTaskList = [];

// const taskStorage = (() => {
//     var retrievedTasks = localStorage.getItem('taskStorage');

//     let parsedTaskList = JSON.parse(retrievedTasks);
    
     
//     function makeTaskList(array){
//         for(let i=0; i<array.length;i++){
//             let task = new Task(array[i].title, array[i].description, array[i].dueDate, array[i].priority, array[i].project);
//             retrievedTaskList.push(task);  
//         };  
//     }; 
//     makeTaskList(parsedTaskList);
// })();

// let filteredTasks = retrievedTaskList.filter(function(e) {
//     return e.title != "";
// });


/************** STORE PROJECTS ****************/

// localStorage.removeItem("storedProjects");

// var retrievedProject = localStorage.getItem('storedProject');



// let parsedProjectList = JSON.parse(retrievedProject);


// const retrievedProjectList = [];

// function makeProjectList(array){
//     for(let i=0; i<array.length;i++){
//         let project = new Project(array[i].name, array[i].description);
//         retrievedProjectList.push(project);  
//     };  
// }; 

// console.log(retrievedProjectList);

// makeProjectList(parsedProjectList);
// console.log(retrievedProjectList);

// let filteredProjectList = retrievedProjectList.filter(function(e) {
//     return e.name != "";
// });

// console.log(filteredProjectList);



/*****************************************************/

var taskList = [];
var projectList = [];

// builds page
(0,_HOMEPAGE_homepageController__WEBPACK_IMPORTED_MODULE_1__.createHomePage)();
(0,_TASK_DOMTaskForm__WEBPACK_IMPORTED_MODULE_2__.buildTaskForm)();
(0,_rightSidebarLogic__WEBPACK_IMPORTED_MODULE_6__.rightSidebarLogic)();

// createSidebarLogic()

/************** NEW STUFF ***************/




// localStorage.removeItem("storedProject");


const createTaskData = (() => {
    let task1 = new _TASK_task__WEBPACK_IMPORTED_MODULE_4__.Task('Do Laundry', 'wash all clothes and towels', '10/01/22', 'HIGH', 'Errands');
    let task2 = new _TASK_task__WEBPACK_IMPORTED_MODULE_4__.Task('Do Homework', 'do all homework', '9/01/22', 'HIGH', 'School');
    let task3 = new _TASK_task__WEBPACK_IMPORTED_MODULE_4__.Task('Schedule Appointment', 'make an appoinment', '7/10/22', 'LOW',  'Errands');
    let task4 = new _TASK_task__WEBPACK_IMPORTED_MODULE_4__.Task('Order Package', 'order a box', '07/08/22', 'MEDIUM', 'School');
    let task5 = new _TASK_task__WEBPACK_IMPORTED_MODULE_4__.Task('Shave', 'shave beard with razor', '12/24/22', 'LOW', 'Errands');

    taskList.push(task1);
    taskList.push(task2);
    taskList.push(task3);
    taskList.push(task4);
    taskList.push(task5);

        
})();

let project1 = new _PROJECT_project__WEBPACK_IMPORTED_MODULE_5__.Project('Errands', 'simple errands I need to do');
    let project2 = new _PROJECT_project__WEBPACK_IMPORTED_MODULE_5__.Project('School', 'stuff related to school');

    projectList.push(project1);
    projectList.push(project2);

(0,_TASK_displayAllTasks__WEBPACK_IMPORTED_MODULE_7__.displayAllTasks)();



for (let i = 0; i < projectList.length; i++){
    (0,_PROJECT_createProject__WEBPACK_IMPORTED_MODULE_3__.createProject)(projectList[i]);
}

(0,_PROJECT_addToProjectSelect__WEBPACK_IMPORTED_MODULE_8__.addToProjectSelect)();

/************** NEW STUFF ***************/




// var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// // Put the object into storage
// const storeProject = projectList;
// localStorage.setItem('storedProject', JSON.stringify(storeProject));

// console.log(projectList);



// // Retrieve the object from storage


// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));

// console.log(projectList);
// console.log(taskList);


/***/ }),

/***/ "./src/rightSidebarLogic.js":
/*!**********************************!*\
  !*** ./src/rightSidebarLogic.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rightSidebarLogic": () => (/* binding */ rightSidebarLogic)
/* harmony export */ });
/* harmony import */ var _TASK_DOMTaskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TASK/DOMTaskForm */ "./src/TASK/DOMTaskForm.js");
/* harmony import */ var _PROJECT_DOMProjectForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PROJECT/DOMProjectForm.js */ "./src/PROJECT/DOMProjectForm.js");
/* harmony import */ var _PROJECT_addToProjectSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PROJECT/addToProjectSelect */ "./src/PROJECT/addToProjectSelect.js");




function rightSidebarLogic() {

    // removes sidebar for Task / Project form switch
    function removeLastChild() {
        let select = document.getElementById('content');
        select.removeChild(select.lastChild);
    };

    // task form switch
    const taskButtonLogic = (() => {
        document.getElementById('task-button').addEventListener('click', openTaskMenu);
        function openTaskMenu() {
            let button = document.getElementById('task-button');
            console.log(button.style.color);
            removeLastChild();
            (0,_TASK_DOMTaskForm__WEBPACK_IMPORTED_MODULE_0__.buildTaskForm)();
            (0,_PROJECT_addToProjectSelect__WEBPACK_IMPORTED_MODULE_2__.addToProjectSelect)();

        };
    })();

    // project form switch
    const projectButtonLogic = (() => {
        document.getElementById('project-button').addEventListener('click', openTaskMenu);
        const content = document.getElementById('content');
        function openTaskMenu() {
            let button = document.getElementById('task-button');
            removeLastChild();
            (0,_PROJECT_DOMProjectForm_js__WEBPACK_IMPORTED_MODULE_1__.buildProjectForm)();

        };
    })();
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFKOEI7QUFDVTtBQUNqQzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixJQUFJLDhDQUFlLEVBQUU7QUFDcEQsd0JBQXdCLHVDQUFRO0FBQ2hDLHdCQUF3QixxREFBUyxDQUFDLHVDQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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O1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9FRElULVRBU0svZGVsZXRlVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0VESVQtVEFTSy9lZGl0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0VESVQtVEFTSy9zdG9yZVRhc2tMaXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvSE9NRVBBR0UvRE9NRm9ybUJhckhlYWRlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0hPTUVQQUdFL0RPTUhlYWRlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0hPTUVQQUdFL0RPTU1haW4uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9IT01FUEFHRS9ET01Qcm9qZWN0QmFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvSE9NRVBBR0UvRE9NVGFza0ZvY3VzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvSE9NRVBBR0UvaG9tZXBhZ2VDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvUFJPSkVDVC9ET01Qcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1BST0pFQ1QvYWRkVG9Qcm9qZWN0U2VsZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvUFJPSkVDVC9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvUFJPSkVDVC9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvUFJPSkVDVC9wdXNoUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1BST0pFQ1Qvc3RvcmVQcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1RBU0svRE9NVGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9UQVNLL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9UQVNLL2Rpc3BsYXlBbGxUYXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1RBU0svZm9jdXNUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvVEFTSy9wdXNoVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1RBU0svcmVtb3ZlVGFza1RhYmxlUm93cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL1RBU0svdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcmlnaHRTaWRlYmFyTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqKioqKioqKioqIHx8IEdFTkVSQUwgU1RZTEVTIHx8ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbjpyb290IHtcXG4gICAgLS13aGl0ZTp3aGl0ZTtcXG4gICAgLS1zb290aGluZy1icmVlemU6I2IyYmVjMztcXG4gICAgLS1ncmF5OiM2MzZlNzI7XFxuICAgIC0tZGFyazojMmQzNDM2O1xcbiAgICAtLXRhYmxlLWJhY2tncm91bmQ6ICNkZmU2ZTk0ODtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4gICAgaHRtbCxcXG4gICAgYm9keSB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICAgICAjY29udGVudCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNWZyIDJmcjtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4MHB4IDEyZnIgNmZyO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4vKioqKioqKioqKiogfHwgSEVBREVSIHx8ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcblxcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTMxLDU4LDE4MCk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMzEsNTgsMTgwLDEpIDAlLCByZ2JhKDI1MywyOSwyOSwxKSA1MCUsIHJnYmEoMjUyLDE3Niw2OSwxKSAxMDAlKTtcXG5cXG5cXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4vKioqKioqKioqKiogfHwgTUFJTiB8fCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4ubWFpbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcblxcbn1cXG5cXG4gICAgLnRhc2sgeyBcXG5cXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxlLWJhY2tncm91bmQpO1xcblxcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB9XFxuXFxuICAgICAgICAuY29sdW1uLXBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICB0aCB7XFxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xcblxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4OyBcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHRkIHtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICAudGFzay10aXRsZS1jb250YWluZXIge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC50YXNrLXN3aXRjaC1idXR0b24ge1xcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tdGFibGUtYmFja2dyb3VuZCk7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAudGFzay1zd2l0Y2gtYnV0dG9uOmZvY3VzIHtcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC50YXNrLXRpdGxlIHtcXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICB9XFxuXFxuXFxuICAgIFxcbi8qKioqKioqKioqKiB8fCBQUk9KRUNUIFRBQkxFIFNJREVCQVIgfHwgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gNTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNmZyIDJmcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIFxcbn1cXG5cXG4gICAgLnByb2plY3RzLWhlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgXFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtdGFibGUge1xcbiAgICAgICAgLyogcGFkZGluZzogNXB4OyAqL1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICAgICAgXFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcXG4gICAgICAgIGdhcDogMjBweDtcXG4gICAgfVxcblxcblxcbiAgICAucHJvamVjdC10YWJsZS1pdGVtIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIFxcbiAgICAucHJvamVjdC10YWJsZSB0cntcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgfVxcblxcbiAgICBcXG5cXG4gICAgLnByb2plY3QtdGFibGUtYnV0dG9uLFxcbiAgICAucHJvamVjdC10YWJsZS1idXR0b24tc2VsZWN0ZWQge1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG5cXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICBcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRhYmxlLWJ1dHRvbjpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRhYmxlLWJ1dHRvbjpmb2N1cyB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcblxcbiAgICAuZGVsZXRlLWNvbnRhaW5lciB7XFxuICAgICAgICBcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICAgIH1cXG5cXG4gICAgICAgIC5kZWxldGUtaGVhZGVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGVsZXRlLWZvcm0ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRlbGV0ZS1zZWxlY3Qge1xcbiAgICAgICAgICAgIGhlaWdodDogNjAlO1xcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGVsZXRlLXByb2plY3Qge1xcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XFxuXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgICAgIH1cXG5cXG5cXG5cXG5cXG5cXG4vKioqKioqKioqKiogfHwgUklHSFQgU0lERUJBUiBIRUFERVIgfHwgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGNvbG9yOiB2YXIod2hpdGUpO1xcblxcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbiAgICAuYWRkIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIH1cXG5cXG4gICAgLmZvcm0taGVhZGVyIGJ1dHRvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG5cXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgfVxcblxcblxcbi8qKioqKioqKioqKiB8fCBSSUdIVCBTSURFQkFSIChUQVNLIC8gUFJPSkVDVCBGT1JNUykgfHwgKioqKioqKioqKioqKioqKioqKioqL1xcblxcblxcbi50YXNrLWZvcm0ge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAgIGdyaWQtcm93OiAzIC8gNTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufSAgICAgIFxcblxcbiAgICAuZm9ybS1pdGVtIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgfVxcblxcbiAgICAgICAgLmZvcm0tbGFiZWwge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgLnN1Ym1pdC1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgfVxcblxcbiAgICAgICAgLnN1Ym1pdCB7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICB9XFxuICAgIFxcblxcbi8qKioqKioqKioqKiB8fCBUQVNLLUZPQ1VTIHx8ICoqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4udGFzay1mb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcblxcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2ZnIgMmZyO1xcbn1cXG5cXG4gICAgLmluZm8tY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcblxcbiAgICB9XFxuXFxuICAgICAgICAuZm9jdXMtc2VjdGlvbiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhc2staW5mbyB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgIH1cXG5cXG5cXG4gICAgICAgICN0aXRsZS1zZWN0aW9uIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI3RpdGxlLXBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgfVxcbiAgICBcXG5cXG4gICAgICAgICNkYXRlLXNlY3Rpb24ge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcXG4gICAgICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjZGF0ZS1wbGFjZWhvbGRlciB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDUgLyA3O1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIH1cXG4gIFxcblxcbiAgICAgICAgI3Byb2plY3QtZm9jdXMtc2VjdGlvbiB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNwcm9qZWN0LWZvY3VzLXBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgfVxcblxcblxcbiAgICAgICAgI3ByaW9yaXR5LXNlY3Rpb24ge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcXG4gICAgICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjcHJpb3JpdHktcGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA1IC8gNztcXG4gICAgICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICB9XFxuXFxuXFxuICAgICAgICAjZGVzY3JpcHRpb24tc2VjdGlvbiB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNkZXNjcmlwdGlvbi1wbGFjZWhvbGRlciB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyA3O1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICAgIH1cXG5cXG5cXG4gICAgLmZvY3VzLWJ1dHRvbi1zZWN0aW9uIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgfVxcbiAgICBcXG4gICAgICAgIC5mb2N1cy1idXR0b24tY29udGFpbmVyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICAgICAgfVxcbiAgICBcXG4gICAgICAgIC5mb2N1cy1idXR0b24ge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgIFxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcblxcbiAgICAuZWRpdC1pbnB1dCB7XFxuICAgICAgICBoZWlnaHQ6IDcwJTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGNBQWM7SUFDZCw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGlDQUFpQztJQUNqQyxzQkFBc0I7QUFDMUI7O0lBRUk7O1FBRUksU0FBUztRQUNULFVBQVU7UUFDVixZQUFZO0lBQ2hCOztRQUVJO1lBQ0ksYUFBYTs7WUFFYixZQUFZO1lBQ1osV0FBVzs7O1lBR1gsa0NBQWtDO1lBQ2xDLHFDQUFxQzs7UUFFekM7O1lBRUk7Z0JBQ0kscUJBQXFCO1lBQ3pCOztBQUVaLG1FQUFtRTs7QUFFbkU7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCOztJQUV2QixrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixhQUFhOztJQUViLDJCQUEyQjtJQUMzQix5R0FBeUc7OztJQUd6RyxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBLGlFQUFpRTs7QUFFakU7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjs7QUFFcEI7O0lBRUk7O1FBRUksWUFBWTtRQUNaLHlDQUF5Qzs7UUFFekMsZUFBZTtJQUNuQjs7UUFFSTtZQUNJLFlBQVk7UUFDaEI7O1FBRUE7WUFDSSxZQUFZOztZQUVaLDZCQUE2QjtZQUM3QixtQkFBbUI7WUFDbkIsZUFBZTtRQUNuQjs7UUFFQTtZQUNJLG1CQUFtQjtZQUNuQixrQkFBa0I7UUFDdEI7O1lBRUk7Z0JBQ0ksYUFBYTtnQkFDYiw2QkFBNkI7WUFDakM7O2dCQUVJO29CQUNJLHNCQUFzQjtvQkFDdEIsd0NBQXdDO29CQUN4QyxXQUFXO29CQUNYLFlBQVk7Z0JBQ2hCOztnQkFFQTtvQkFDSSw2QkFBNkI7Z0JBQ2pDOztnQkFFQTs7Z0JBRUE7Ozs7QUFJaEIsa0ZBQWtGOztBQUVsRjtJQUNJLGtCQUFrQjtJQUNsQixlQUFlOztJQUVmLGFBQWE7SUFDYiwrQkFBK0I7O0lBRS9CLDZCQUE2Qjs7QUFFakM7O0lBRUk7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjs7UUFFbEIsV0FBVztRQUNYLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsU0FBUztJQUNiOzs7SUFHQTtRQUNJLFdBQVc7SUFDZjs7O0lBR0E7UUFDSSxZQUFZO0lBQ2hCOzs7O0lBSUE7O1FBRUksVUFBVTs7UUFFViw2QkFBNkI7UUFDN0IsOEJBQThCO1FBQzlCLFlBQVk7O1FBRVosYUFBYTs7UUFFYixlQUFlOztJQUVuQjs7SUFFQTtRQUNJLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLDhCQUE4QjtRQUM5QixrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCOztJQUVBOztRQUVJLGFBQWE7UUFDYiwyQkFBMkI7SUFDL0I7O1FBRUk7WUFDSSw2QkFBNkI7WUFDN0Isa0JBQWtCO1lBQ2xCLG1CQUFtQjs7WUFFbkIsZUFBZTtRQUNuQjs7UUFFQTtZQUNJLGFBQWE7WUFDYiwyQkFBMkI7O1FBRS9COztRQUVBO1lBQ0ksV0FBVztZQUNYLFVBQVU7WUFDVixvQkFBb0I7UUFDeEI7O1FBRUE7WUFDSSxVQUFVO1lBQ1YsV0FBVzs7WUFFWCxlQUFlO1lBQ2YsWUFBWTs7WUFFWixvQkFBb0I7WUFDcEIsNkJBQTZCO1lBQzdCLHVCQUF1QjtRQUMzQjs7Ozs7O0FBTVIsaUZBQWlGOztBQUVqRjtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1COztJQUVuQixrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZiw2QkFBNkI7SUFDN0IsaUJBQWlCOztJQUVqQixlQUFlO0FBQ25COztJQUVJO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksNkJBQTZCO1FBQzdCLFlBQVk7O1FBRVosZUFBZTtJQUNuQjs7O0FBR0osNkVBQTZFOzs7QUFHN0U7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZiw2QkFBNkI7O0lBRTdCLG1CQUFtQjtBQUN2Qjs7SUFFSTtRQUNJLGFBQWE7O1FBRWIsYUFBYTtRQUNiLGFBQWE7SUFDakI7O1FBRUk7WUFDSSxlQUFlO1FBQ25COztJQUVKO1FBQ0ksYUFBYTtRQUNiLHVCQUF1Qjs7UUFFdkIsZ0JBQWdCO0lBQ3BCOztRQUVJO1lBQ0ksdUJBQXVCOztZQUV2QixVQUFVO1lBQ1YsZUFBZTtRQUNuQjs7O0FBR1IsbURBQW1EOztBQUVuRDtJQUNJLDZCQUE2Qjs7SUFFN0Isa0JBQWtCO0lBQ2xCLGVBQWU7O0lBRWYsYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7SUFFSTtRQUNJLGFBQWE7UUFDYiw4Q0FBOEM7UUFDOUMsK0JBQStCO1FBQy9CLG1CQUFtQjtRQUNuQixtQkFBbUI7O0lBRXZCOztRQUVJO1lBQ0ksYUFBYTtZQUNiLHVCQUF1QjtZQUN2QixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLG1CQUFtQjtZQUNuQixpQkFBaUI7UUFDckI7O1FBRUE7WUFDSSxhQUFhO1lBQ2IsbUJBQW1COztZQUVuQixZQUFZO1lBQ1osZUFBZTtZQUNmLG1CQUFtQjtRQUN2Qjs7O1FBR0E7WUFDSSxrQkFBa0I7WUFDbEIsZUFBZTtRQUNuQjs7UUFFQTtZQUNJLGtCQUFrQjtZQUNsQixlQUFlO1FBQ25COzs7UUFHQTtZQUNJLGtCQUFrQjtZQUNsQixlQUFlO1FBQ25COztRQUVBO1lBQ0ksa0JBQWtCO1lBQ2xCLGVBQWU7UUFDbkI7OztRQUdBO1lBQ0ksa0JBQWtCO1lBQ2xCLGVBQWU7UUFDbkI7O1FBRUE7WUFDSSxrQkFBa0I7WUFDbEIsZUFBZTtRQUNuQjs7O1FBR0E7WUFDSSxrQkFBa0I7WUFDbEIsZUFBZTtRQUNuQjs7UUFFQTtZQUNJLGtCQUFrQjtZQUNsQixlQUFlO1FBQ25COzs7UUFHQTtZQUNJLGtCQUFrQjtZQUNsQixlQUFlO1FBQ25COztRQUVBO1lBQ0ksa0JBQWtCO1lBQ2xCLGVBQWU7UUFDbkI7OztJQUdKO1FBQ0ksNkJBQTZCO1FBQzdCLGFBQWE7UUFDYiw4QkFBOEI7SUFDbEM7O1FBRUk7WUFDSSxhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLG1CQUFtQjtZQUNuQixvQkFBb0I7UUFDeEI7O1FBRUE7WUFDSSxZQUFZO1lBQ1osWUFBWTs7WUFFWiw2QkFBNkI7WUFDN0IsbUJBQW1CO1lBQ25CLHlCQUF5QjtZQUN6Qix1QkFBdUI7O1lBRXZCLGVBQWU7O1FBRW5COztJQUVKO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtJQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKioqKioqKioqKiogfHwgR0VORVJBTCBTVFlMRVMgfHwgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuOnJvb3Qge1xcbiAgICAtLXdoaXRlOndoaXRlO1xcbiAgICAtLXNvb3RoaW5nLWJyZWV6ZTojYjJiZWMzO1xcbiAgICAtLWdyYXk6IzYzNmU3MjtcXG4gICAgLS1kYXJrOiMyZDM0MzY7XFxuICAgIC0tdGFibGUtYmFja2dyb3VuZDogI2RmZTZlOTQ4O1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiAgICBodG1sLFxcbiAgICBib2R5IHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgICAgICNjb250ZW50IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG5cXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA1ZnIgMmZyO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDgwcHggMTJmciA2ZnI7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbi8qKioqKioqKioqKiB8fCBIRUFERVIgfHwgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYigxMzEsNTgsMTgwKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDEzMSw1OCwxODAsMSkgMCUsIHJnYmEoMjUzLDI5LDI5LDEpIDUwJSwgcmdiYSgyNTIsMTc2LDY5LDEpIDEwMCUpO1xcblxcblxcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi8qKioqKioqKioqKiB8fCBNQUlOIHx8ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5tYWluIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuXFxufVxcblxcbiAgICAudGFzayB7IFxcblxcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGUtYmFja2dyb3VuZCk7XFxuXFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIH1cXG5cXG4gICAgICAgIC5jb2x1bW4tcGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHRoIHtcXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XFxuXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7IFxcbiAgICAgICAgfVxcblxcbiAgICAgICAgdGQge1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC50YXNrLXRpdGxlLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLnRhc2stc3dpdGNoLWJ1dHRvbiB7XFxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS10YWJsZS1iYWNrZ3JvdW5kKTtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC50YXNrLXN3aXRjaC1idXR0b246Zm9jdXMge1xcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLnRhc2stdGl0bGUge1xcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIH1cXG5cXG5cXG4gICAgXFxuLyoqKioqKioqKioqIHx8IFBST0pFQ1QgVEFCTEUgU0lERUJBUiB8fCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyA1O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnIgMmZyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgXFxufVxcblxcbiAgICAucHJvamVjdHMtaGVhZGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyBcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC10YWJsZSB7XFxuICAgICAgICAvKiBwYWRkaW5nOiA1cHg7ICovXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgICAgICBcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICB9XFxuXFxuXFxuICAgIC5wcm9qZWN0LXRhYmxlLWl0ZW0ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgXFxuICAgIC5wcm9qZWN0LXRhYmxlIHRye1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB9XFxuXFxuICAgIFxcblxcbiAgICAucHJvamVjdC10YWJsZS1idXR0b24sXFxuICAgIC5wcm9qZWN0LXRhYmxlLWJ1dHRvbi1zZWxlY3RlZCB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcblxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgIFxcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtdGFibGUtYnV0dG9uOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtdGFibGUtYnV0dG9uOmZvY3VzIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuXFxuICAgIC5kZWxldGUtY29udGFpbmVyIHtcXG4gICAgICAgIFxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gICAgfVxcblxcbiAgICAgICAgLmRlbGV0ZS1oZWFkZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5kZWxldGUtZm9ybSB7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGVsZXRlLXNlbGVjdCB7XFxuICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XFxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5kZWxldGUtcHJvamVjdCB7XFxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDcwJTtcXG5cXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICAgICAgfVxcblxcblxcblxcblxcblxcbi8qKioqKioqKioqKiB8fCBSSUdIVCBTSURFQkFSIEhFQURFUiB8fCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uZm9ybS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgY29sb3I6IHZhcih3aGl0ZSk7XFxuXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuICAgIC5hZGQge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgfVxcblxcbiAgICAuZm9ybS1oZWFkZXIgYnV0dG9uIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcblxcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICB9XFxuXFxuXFxuLyoqKioqKioqKioqIHx8IFJJR0hUIFNJREVCQVIgKFRBU0sgLyBQUk9KRUNUIEZPUk1TKSB8fCAqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuXFxuLnRhc2stZm9ybSB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDMgLyA1O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG5cXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59ICAgICAgXFxuXFxuICAgIC5mb3JtLWl0ZW0ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgICAgIGhlaWdodDogMTMwcHg7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAuZm9ybS1sYWJlbCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAuc3VibWl0LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAuc3VibWl0IHtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIH1cXG4gICAgXFxuXFxuLyoqKioqKioqKioqIHx8IFRBU0stRk9DVVMgfHwgKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi50YXNrLWZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDZmciAyZnI7XFxufVxcblxcbiAgICAuaW5mby1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuXFxuICAgIH1cXG5cXG4gICAgICAgIC5mb2N1cy1zZWN0aW9uIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFzay1pbmZvIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgfVxcblxcblxcbiAgICAgICAgI3RpdGxlLXNlY3Rpb24ge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjdGl0bGUtcGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICB9XFxuICAgIFxcblxcbiAgICAgICAgI2RhdGUtc2VjdGlvbiB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNkYXRlLXBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNSAvIDc7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgfVxcbiAgXFxuXFxuICAgICAgICAjcHJvamVjdC1mb2N1cy1zZWN0aW9uIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI3Byb2plY3QtZm9jdXMtcGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICB9XFxuXFxuXFxuICAgICAgICAjcHJpb3JpdHktc2VjdGlvbiB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNwcmlvcml0eS1wbGFjZWhvbGRlciB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDUgLyA3O1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIH1cXG5cXG5cXG4gICAgICAgICNkZXNjcmlwdGlvbi1zZWN0aW9uIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2Rlc2NyaXB0aW9uLXBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDc7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgfVxcblxcblxcbiAgICAuZm9jdXMtYnV0dG9uLXNlY3Rpb24ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB9XFxuICAgIFxcbiAgICAgICAgLmZvY3VzLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgLmZvY3VzLWJ1dHRvbiB7XFxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgICAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgIC5lZGl0LWlucHV0IHtcXG4gICAgICAgIGhlaWdodDogNzAlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0YXNrTGlzdCB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuLi9UQVNLL3Rhc2tcIjtcbmltcG9ydCB7IGRpc3BsYXlBbGxUYXNrcyB9IGZyb20gXCIuLi9UQVNLL2Rpc3BsYXlBbGxUYXNrc1wiO1xuaW1wb3J0IHsgcmVtb3ZlVGFibGVSb3dzIH0gZnJvbSBcIi4uL1RBU0svcmVtb3ZlVGFza1RhYmxlUm93c1wiO1xuaW1wb3J0IHsgc3RvcmVUYXNrTGlzdCB9IGZyb20gXCIuL3N0b3JlVGFza0xpc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2soKXtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtcGxhY2Vob2xkZXInKTtcbiAgICAgICAgaWYgKHRhc2tMaXN0W2ldLnRpdGxlID09IHRpdGxlLmlubmVyVGV4dCl7XG4gICAgICAgICAgICBkZWxldGUgdGFza0xpc3RbaV07XG4gICAgICAgICAgICB0YXNrTGlzdFtpXSA9IG5ldyBUYXNrKFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIik7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVtb3ZlVGFibGVSb3dzKCk7XG4gICAgICAgICAgICBkaXNwbGF5QWxsVGFza3MoKTtcbiAgICAgICAgICAgIHN0b3JlVGFza0xpc3QoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgIFxuICAgIH1cbiAgICBcbn07IiwiaW1wb3J0IHsgdGFza0xpc3QgfSBmcm9tIFwiLi5cIjtcblxuLy8ga2VlcHMgdHJhY2sgb2YgdGFzayBiZWluZyBlZGl0ZWRcbmxldCAgYXJyYXlOdW0gPSAwO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VGFzayh0YXNrKSB7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLXBsYWNlaG9sZGVyJyk7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1wbGFjZWhvbGRlcicpO1xuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9jdXMtcGxhY2Vob2xkZXInKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktcGxhY2Vob2xkZXInKTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24tcGxhY2Vob2xkZXInKTtcblxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mby1jb250YWluZXInKTtcblxuICBcblxuICAgIGNvbnN0IHNlbGVjdFRhc2sgPSAoKCkgPT4ge1xuICAgICAgICBmb3IobGV0IGkgPTA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7aSsrICl7XG4gICAgICAgICAgICBpZiAodGFza0xpc3RbaV0udGl0bGUgPT0gdGl0bGUuaW5uZXJUZXh0KXtcbiAgICAgICAgICAgICAgICBhcnJheU51bSA9IGk7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVJbnB1dHMgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlVGl0bGVJbnB1dCA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0aXRsZS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2VkaXQtaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGUtcGxhY2Vob2xkZXInO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKHRpdGxlSW5wdXQsIGNvbnRhaW5lci5jaGlsZE5vZGVzWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZURlc2NyaXB0aW9uSW5wdXQgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gZGVzY3JpcHRpb24uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdlZGl0LWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2Rlc2NyaXB0aW9uLXBsYWNlaG9sZGVyJ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKGRlc2NyaXB0aW9uSW5wdXQsIGNvbnRhaW5lci5jaGlsZE5vZGVzWzNdKTtcbiAgICAgICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZURhdGVJbnB1dCA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gZGF0ZS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZWRpdC1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUlucHV0LmlkID0gJ2RhdGUtcGxhY2Vob2xkZXInXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoZGF0ZUlucHV0LCBjb250YWluZXIuY2hpbGROb2Rlc1s1XSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVQcmlvcml0eUlucHV0ID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IHByaW9yaXR5LmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZCgnZWRpdC1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5pZCA9ICdwcmlvcml0eS1wbGFjZWhvbGRlcidcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChwcmlvcml0eUlucHV0LCBjb250YWluZXIuY2hpbGROb2Rlc1s3XSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0SW5wdXQgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJbnB1dC52YWx1ZSA9IHByb2plY3QuaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoJ2VkaXQtaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJbnB1dC5pZCA9ICdwcm9qZWN0LWZvY3VzLXBsYWNlaG9sZGVyJ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKHByb2plY3RJbnB1dCwgY29udGFpbmVyLmNoaWxkTm9kZXNbOV0pO1xuICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRUb1N1Ym1pdCA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1idXR0b24tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBzdWJtaXRFZGl0LmlkID0gJ3N1Ym1pdC1lZGl0LWJ1dHRvbic7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEVkaXQuY2xhc3NMaXN0LmFkZCgnZm9jdXMtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHN1Ym1pdEVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlRWRpdCk7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEVkaXQuaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLnJlcGxhY2VDaGlsZChzdWJtaXRFZGl0LCBidXR0b25Db250YWluZXIuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRhc2tTdWJtaXRIYW5kbGVyKGV2ZW50KXtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgbWFrZUVkaXQoKTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUZvcm0gPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRm9jdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1mb2N1cycpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvY3VzRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNGb3JtLm9uc3VibWl0ID0gdGFza1N1Ym1pdEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvY3VzRm9ybS5pZCA9ICd0YXNrLWZvY3VzJztcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNGb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9jdXMnKTtcblxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGFza0ZvY3VzLmNoaWxkTm9kZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c0Zvcm0uYXBwZW5kQ2hpbGQodGFza0ZvY3VzLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkKGZvY3VzRm9ybSwgY29udGVudC5jaGlsZE5vZGVzWzRdKTtcbiAgICAgICAgICAgICAgICB9KSgpO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbWFrZUVkaXQoKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV2ZXJ0SW5wdXRzID0gKCgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUVkaXQuaW5uZXJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLXBsYWNlaG9sZGVyJykudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUVkaXQuaWQgPSAndGl0bGUtcGxhY2Vob2xkZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVFZGl0LmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdFthcnJheU51bV0udGl0bGUgPSB0aXRsZUVkaXQuaW5uZXJUZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKHRpdGxlRWRpdCwgY29udGFpbmVyLmNoaWxkTm9kZXNbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25FZGl0LmlubmVyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi1wbGFjZWhvbGRlcicpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25FZGl0LmlkID0gJ2Rlc2NyaXB0aW9uLXBsYWNlaG9sZGVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uRWRpdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWluZm8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0xpc3RbYXJyYXlOdW1dLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25FZGl0LmlubmVyVGV4dDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChkZXNjcmlwdGlvbkVkaXQsIGNvbnRhaW5lci5jaGlsZE5vZGVzWzNdKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUVkaXQuaW5uZXJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtcGxhY2Vob2xkZXInKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVFZGl0LmlkID0gJ2RhdGUtcGxhY2Vob2xkZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUVkaXQuY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tMaXN0W2FycmF5TnVtXS5kdWVEYXRlID0gZGF0ZUVkaXQuaW5uZXJUZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKGRhdGVFZGl0LCBjb250YWluZXIuY2hpbGROb2Rlc1s1XSk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5RWRpdC5pbm5lclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktcGxhY2Vob2xkZXInKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5RWRpdC5pZCA9ICdwcmlvcml0eS1wbGFjZWhvbGRlcic7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUVkaXQuY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tMaXN0W2FycmF5TnVtXS5wcmlvcml0eSA9IHByaW9yaXR5RWRpdC5pbm5lclRleHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQocHJpb3JpdHlFZGl0LCBjb250YWluZXIuY2hpbGROb2Rlc1s3XSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RFZGl0LmlubmVyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvY3VzLXBsYWNlaG9sZGVyJykudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RWRpdC5pZCA9ICdwcm9qZWN0LWZvY3VzLXBsYWNlaG9sZGVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RFZGl0LmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdFthcnJheU51bV0ucHJvamVjdCA9IHByb2plY3RFZGl0LmlubmVyVGV4dDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChwcm9qZWN0RWRpdCwgY29udGFpbmVyLmNoaWxkTm9kZXNbOV0pO1xuICAgICAgICAgICAgICAgICAgICB9KSgpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXRUb0VkaXQgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWJ1dHRvbi1jb250YWluZXInKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pdFRvRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0VG9FZGl0LmlkID0gJ3N1Ym1pdC1lZGl0LWJ1dHRvbic7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRUb0VkaXQuY2xhc3NMaXN0LmFkZCgnZm9jdXMtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRUb0VkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdWJtaXRFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZUVkaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0VG9FZGl0LmlubmVyVGV4dCA9ICdFZGl0JztcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoc3VibWl0VG9FZGl0LCBidXR0b25Db250YWluZXIuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdHJveUZvcm0gPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0ZvY3VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9jdXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb2N1c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNEaXYuaWQgPSAndGFzay1mb2N1cyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvY3VzJyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGFza0ZvY3VzLmNoaWxkTm9kZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNEaXYuYXBwZW5kQ2hpbGQodGFza0ZvY3VzLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkKGZvY3VzRGl2LCBjb250ZW50LmNoaWxkTm9kZXNbNF0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfSkoKTtcbiAgICBcbn07XG5cblxuIiwiaW1wb3J0IHsgdGFza0xpc3QgfSBmcm9tIFwiLi5cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlVGFza0xpc3QoKXtcbiAgICB2YXIgdGFza3NUb1N0b3JlID0gdGFza0xpc3Q7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tTdG9yYWdlJywgSlNPTi5zdHJpbmdpZnkodGFza3NUb1N0b3JlKSk7XG59O1xuXG4iLCJcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRm9ybUJhckhlYWRlcigpIHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1IZWFkZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1oZWFkZXInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xuICAgIFxuXG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFkZC5jbGFzc0xpc3QuYWRkKCdhZGQnKTtcbiAgICBhZGQuaW5uZXJUZXh0ID0gJ0FkZCc7XG4gICAgZm9ybUhlYWRlci5hcHBlbmRDaGlsZChhZGQpO1xuXG4gICAgY29uc3QgY3JlYXRlVGFza0J1dHRvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tCdXR0b24gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1idXR0b24nKTtcbiAgICAgICAgdGFza0J1dHRvbi5pZCA9ICd0YXNrLWJ1dHRvbic7XG4gICAgICAgIHRhc2tCdXR0b24uaW5uZXJUZXh0ID0gJ1Rhc2snO1xuICAgICAgICBmb3JtSGVhZGVyLmFwcGVuZENoaWxkKHRhc2tCdXR0b24pO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbicpO1xuICAgICAgICBwcm9qZWN0QnV0dG9uLmlkID0gJ3Byb2plY3QtYnV0dG9uJztcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSAnUHJvamVjdCc7XG4gICAgICAgIGZvcm1IZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbik7XG5cbiAgICAgICAgXG4gICAgfSkoKTsgIFxufTsgIiwiZnVuY3Rpb24gYnVpbGRIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgICBjb25zdCBidWlsZFRpdGxlID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgICAgIHRpdGxlLmlkID0gJ3RpdGxlJztcbiAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgICAgICB0aXRsZS5pbm5lclRleHQgPSAnVG8gRG8gTGlzdCc7XG4gICAgICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIH0pKCk7XG59O1xuXG5leHBvcnQgeyBidWlsZEhlYWRlciB9OyIsImV4cG9ydCBmdW5jdGlvbiBidWlsZE1haW4gKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbi5pZCA9ICdtYWluJztcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgY29uc3QgYnVpbGRUYWJsZSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICAgICAgdGFibGUuaWQgPSAndGFzay10YWJsZSc7XG4gICAgICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQgPSAndGFzay10YWJsZSc7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGFibGUpO1xuXG4gICAgICAgIGNvbnN0IGJ1aWxkVGFibGVIZWFkZXIgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFibGVIZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgdGFibGVIZWFkZXJSb3cuY2xhc3NMaXN0LmFkZCgnY29sdW1uLWhlYWRlcicpO1xuICAgICAgICAgICAgdGFibGVIZWFkZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodGFibGVIZWFkZXJSb3cpO1xuXG4gICAgICAgICAgICBjb25zdCBjb2x1bW5QbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICBjb2x1bW5QbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKCdjb2x1bW4taGVhZGVyJyk7XG4gICAgICAgICAgICBjb2x1bW5QbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKCdjb2x1bW4tcGxhY2Vob2xkZXInKTtcbiAgICAgICAgICAgIGNvbHVtblBsYWNlaG9sZGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgdGFibGVIZWFkZXJSb3cuYXBwZW5kQ2hpbGQoY29sdW1uUGxhY2Vob2xkZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBjb2x1bW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgIGNvbHVtbjEuY2xhc3NMaXN0LmFkZCgnY29sdW1uLWhlYWRlcicpO1xuICAgICAgICAgICAgY29sdW1uMS5pbm5lclRleHQgPSAnVGFzayc7XG4gICAgICAgICAgICB0YWJsZUhlYWRlclJvdy5hcHBlbmRDaGlsZChjb2x1bW4xKTtcblxuICAgICAgICAgICAgY29uc3QgY29sdW1uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICBjb2x1bW4yLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbi1oZWFkZXInKTtcbiAgICAgICAgICAgIGNvbHVtbjIuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUtZGF0ZScpO1xuICAgICAgICAgICAgY29sdW1uMi5pbm5lclRleHQgPSAnRGF0ZS1EdWUnO1xuICAgICAgICAgICAgdGFibGVIZWFkZXJSb3cuYXBwZW5kQ2hpbGQoY29sdW1uMik7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgY29sdW1uMy5jbGFzc0xpc3QuYWRkKCdjb2x1bW4taGVhZGVyJyk7XG4gICAgICAgICAgICBjb2x1bW4zLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlLWRhdGUnKTtcbiAgICAgICAgICAgIGNvbHVtbjMuaW5uZXJIVE1MID0gJ0NvbXBsZXRlZD8nO1xuICAgICAgICAgICAgdGFibGVIZWFkZXJSb3cuYXBwZW5kQ2hpbGQoY29sdW1uMyk7XG4gICAgICAgIH0pKCk7XG4gICAgfSkoKTtcbn07IiwiaW1wb3J0IHsgcmVtb3ZlVGFibGVSb3dzIH0gZnJvbSBcIi4uL1RBU0svcmVtb3ZlVGFza1RhYmxlUm93c1wiO1xuaW1wb3J0IHsgZGlzcGxheUFsbFRhc2tzIH0gZnJvbSBcIi4uL1RBU0svZGlzcGxheUFsbFRhc2tzXCI7XG5pbXBvcnQgeyBwcm9qZWN0TGlzdCB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9QUk9KRUNUL3Byb2plY3RcIjtcbmltcG9ydCB7IHN0b3JlUHJvamVjdExpc3QgfSBmcm9tIFwiLi4vUFJPSkVDVC9zdG9yZVByb2plY3RMaXN0XCI7XG5pbXBvcnQgeyBhZGRUb1Byb2plY3RTZWxlY3QgfSBmcm9tIFwiLi4vUFJPSkVDVC9hZGRUb1Byb2plY3RTZWxlY3RcIjtcbmltcG9ydCB7IHN0b3JlVGFza0xpc3QgfSBmcm9tIFwiLi4vRURJVC1UQVNLL3N0b3JlVGFza0xpc3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU2lkZWJhciAoKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuaWQgPSAnc2lkZWJhcic7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzaWRlYmFyKTtcblxuICAgIGNvbnN0IHNpZGViYXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHNpZGViYXJIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtaGVhZGVyJyk7XG4gICAgc2lkZWJhckhlYWRlci5pbm5lclRleHQgPSAnUHJvamVjdHMnO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRlcik7XG5cbiAgICBjb25zdCBCdWlsZFByb2plY3RUYWJsZSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0VGFibGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YWJsZScpO1xuICAgICAgICBwcm9qZWN0VGFibGUuaWQgPSAncHJvamVjdC10YWJsZSc7XG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRhYmxlKTtcblxuICAgICAgICBjb25zdCBidWlsZFRhYmxlSGVhZGVyID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlSGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YWJsZUhlYWRlclJvdy5jbGFzc0xpc3QuYWRkKCdjb2x1bW4taGVhZGVyJyk7XG4gICAgICAgICAgICB0YWJsZUhlYWRlclJvdy5pbm5lclRleHQgPSAncHJvamVjdHMnO1xuICAgICAgICAgICAgdGFibGVIZWFkZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICAgICAgcHJvamVjdFRhYmxlLmFwcGVuZENoaWxkKHRhYmxlSGVhZGVyUm93KTtcblxuICAgICAgICAgICAgLy8gY29uc3QgY29sdW1uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgIC8vIGNvbHVtbkhlYWRlci5jbGFzc0xpc3QuYWRkKCdjb2x1bW4taGVhZGVyJyk7XG4gICAgICAgICAgICAvLyBjb2x1bW5IZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1oZWFkZXInKTtcbiAgICAgICAgICAgIC8vIC8vIGNvbHVtbkhlYWRlci5pbm5lclRleHQgPSAnUHJvamVjdHMnO1xuICAgICAgICAgICAgLy8gdGFibGVIZWFkZXJSb3cuYXBwZW5kQ2hpbGQoY29sdW1uSGVhZGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYnVpbGRBbGxSb3cgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWxsUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBhbGxSb3cuY2xhc3NMaXN0LmFkZCgnYWxsLXJvdycpO1xuICAgICAgICAgICAgcHJvamVjdFRhYmxlLmFwcGVuZENoaWxkKGFsbFJvdyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVRhYmxlQnV0dG9uID0gKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5pZCA9ICdhbGwtcHJvamVjdHMnO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYmxlLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnQWxsIFByb2plY3RzJ1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVRhYmxlUm93cylcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWxsVGFza3MpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYWxsUm93LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgfSkoKTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY3JlYXRlRGVsZXRlQ29udGFpbmVyID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgZGVsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlbGV0ZUNvbnRhaW5lci5pZCA9ICdkZWxldGUtY29udGFpbmVyJztcbiAgICAgICAgZGVsZXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1jb250YWluZXInKTtcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChkZWxldGVDb250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGRlbGV0ZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdkZWxldGUtaGVhZGVyJylcbiAgICAgICAgZGVsZXRlSGVhZGVyLmlubmVyVGV4dCA9ICdEZWxldGUgUHJvamVjdCc7XG4gICAgICAgIGRlbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVIZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGRlbGV0ZUZvcm0uaWQgPSAnZGVsZXRlLWZvcm0nO1xuICAgICAgICBkZWxldGVGb3JtLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1mb3JtJyk7XG4gICAgICAgIGRlbGV0ZUZvcm0ub25zdWJtaXQgPSBwcm9qZWN0RGVsZXRlSGFuZGxlcjtcbiAgICAgICAgZGVsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUZvcm0pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRlbGV0ZVNlbGVjdC5pZCA9ICdkZWxldGUtc2VsZWN0JztcbiAgICAgICAgZGVsZXRlU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1zZWxlY3QnKTtcbiAgICAgICAgZGVsZXRlRm9ybS5hcHBlbmRDaGlsZChkZWxldGVTZWxlY3QpO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5pZCA9ICdkZWxldGUtcHJvamVjdCc7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXByb2plY3QnKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSAnRGVsZXRlJztcbiAgICAgICAgZGVsZXRlRm9ybS5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcblxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgZnVuY3Rpb24gcHJvamVjdERlbGV0ZUhhbmRsZXIoZXZlbnQpe1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuXG4gICAgICAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKXtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1zZWxlY3QnKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdE5hbWUgPT0gcHJvamVjdExpc3RbaV0ubmFtZSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHByb2plY3RMaXN0W2ldO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdFtpXSA9IG5ldyBQcm9qZWN0KFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGZpbHRlcmVkUHJvamVjdHMgPSBwcm9qZWN0TGlzdC5maWx0ZXIoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBlLm5hbWUgIT0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZmlsdGVyZWRQcm9qZWN0cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICB9KSgpO1xufTsgIiwiaW1wb3J0IHsgZWRpdFRhc2sgfSBmcm9tIFwiLi4vRURJVC1UQVNLL2VkaXRDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBkZWxldGVUYXNrIH0gZnJvbSBcIi4uL0VESVQtVEFTSy9kZWxldGVUYXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFRhc2tGb2N1cygpIHtcblxuICAgIGxldCB0YXNrRm9jdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrRm9jdXMuaWQgPSAndGFzay1mb2N1cyc7XG4gICAgdGFza0ZvY3VzLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9jdXMnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tGb2N1cyk7XG5cbiAgICBjb25zdCBpbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb0NvbnRhaW5lci5pZCA9ICdpbmZvLWNvbnRhaW5lcic7XG4gICAgaW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbmZvLWNvbnRhaW5lcicpO1xuICAgIHRhc2tGb2N1cy5hcHBlbmRDaGlsZChpbmZvQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGNyZWF0ZVRpdGxlU2VjdGlvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9jdXMtc2VjdGlvbicpO1xuICAgICAgICB0aXRsZVNlY3Rpb24uaWQgPSAoJ3RpdGxlLXNlY3Rpb24nKTtcbiAgICAgICAgdGl0bGVTZWN0aW9uLmlubmVyVGV4dCA9ICdUaXRsZSA6ICc7XG4gICAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVTZWN0aW9uKTtcblxuICAgICAgICBjb25zdCB0aXRsZVBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlUGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJyk7XG4gICAgICAgIHRpdGxlUGxhY2Vob2xkZXIuaWQgPSAndGl0bGUtcGxhY2Vob2xkZXInO1xuICAgICAgICB0aXRsZVBsYWNlaG9sZGVyLmlubmVyVGV4dCA9ICcnO1xuICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlUGxhY2Vob2xkZXIpO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjcmVhdGVEZXNjcmlwdGlvblNlY3Rpb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVzY3JpcHRpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzLXNlY3Rpb24nKTtcbiAgICAgICAgZGVzY3JpcHRpb25TZWN0aW9uLmlkID0gKCdkZXNjcmlwdGlvbi1zZWN0aW9uJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uU2VjdGlvbi5pbm5lclRleHQgPSAnRGVzY3JpcHRpb246ICc7XG4gICAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25TZWN0aW9uKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvblBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uUGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uUGxhY2Vob2xkZXIuaWQgPSAnZGVzY3JpcHRpb24tcGxhY2Vob2xkZXInO1xuICAgICAgICBkZXNjcmlwdGlvblBsYWNlaG9sZGVyLmlubmVyVGV4dCA9ICcnO1xuICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUGxhY2Vob2xkZXIpO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjcmVhdGVEYXRlU2VjdGlvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzLXNlY3Rpb24nKTtcbiAgICAgICAgZGF0ZVNlY3Rpb24uaWQgPSAoJ2RhdGUtc2VjdGlvbicpO1xuICAgICAgICBkYXRlU2VjdGlvbi5pbm5lclRleHQgPSAnRGF0ZTogJztcbiAgICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlU2VjdGlvbik7XG5cbiAgICAgICAgY29uc3QgZGF0ZVBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGVQbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKCd0YXNrLWluZm8nKTtcbiAgICAgICAgZGF0ZVBsYWNlaG9sZGVyLmlkID0gJ2RhdGUtcGxhY2Vob2xkZXInO1xuICAgICAgICBkYXRlUGxhY2Vob2xkZXIuaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVBsYWNlaG9sZGVyKTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY3JlYXRlUHJpb3JpdHlTZWN0aW9uID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByaW9yaXR5U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb2N1cy1zZWN0aW9uJyk7XG4gICAgICAgIHByaW9yaXR5U2VjdGlvbi5pZCA9ICgncHJpb3JpdHktc2VjdGlvbicpO1xuICAgICAgICBwcmlvcml0eVNlY3Rpb24uaW5uZXJUZXh0ID0gJ1ByaW9yaXR5OiAnO1xuICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5U2VjdGlvbik7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlQbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcmlvcml0eVBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mbycpO1xuICAgICAgICBwcmlvcml0eVBsYWNlaG9sZGVyLmlkID0gJ3ByaW9yaXR5LXBsYWNlaG9sZGVyJztcbiAgICAgICAgcHJpb3JpdHlQbGFjZWhvbGRlci5pbm5lclRleHQgPSAnJztcbiAgICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eVBsYWNlaG9sZGVyKTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdFNlY3Rpb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb2N1cy1zZWN0aW9uJyk7XG4gICAgICAgIHByb2plY3RTZWN0aW9uLmlkID0gKCdwcm9qZWN0LWZvY3VzLXNlY3Rpb24nKTtcbiAgICAgICAgcHJvamVjdFNlY3Rpb24uaW5uZXJUZXh0ID0gJ1Byb2plY3Q6ICc7XG4gICAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFNlY3Rpb24pO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RQbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0UGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJyk7XG4gICAgICAgIHByb2plY3RQbGFjZWhvbGRlci5pZCA9ICdwcm9qZWN0LWZvY3VzLXBsYWNlaG9sZGVyJztcbiAgICAgICAgcHJvamVjdFBsYWNlaG9sZGVyLmlubmVyVGV4dCA9ICcnO1xuICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RQbGFjZWhvbGRlcik7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvblNlY3Rpb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b25TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvblNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9jdXMtYnV0dG9uLXNlY3Rpb24nKTtcbiAgICAgICAgYnV0dG9uU2VjdGlvbi5pZCA9ICdmb2N1cy1idXR0b24tc2VjdGlvbic7XG4gICAgICAgIHRhc2tGb2N1cy5hcHBlbmRDaGlsZChidXR0b25TZWN0aW9uKTtcblxuICAgICAgICBjb25zdCBjcmVhdGVFZGl0QnV0dG9uID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGVkaXRCdXR0b25Db250YWluZXIuaWQgPSAnZWRpdC1idXR0b24tY29udGFpbmVyJztcbiAgICAgICAgICAgIGVkaXRCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9jdXMtYnV0dG9uLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgYnV0dG9uU2VjdGlvbi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb2N1cy1idXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRCdXR0b24uaW5uZXJUZXh0ID0gJ0VkaXQnO1xuICAgICAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUYXNrKTtcbiAgICAgICAgICAgIGVkaXRCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlRGVsZXRlQnV0dG9uID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzLWJ1dHRvbi1jb250YWluZXInKTtcbiAgICAgICAgICAgIGJ1dHRvblNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9jdXMtYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ0RlbGV0ZSc7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUYXNrKTtcbiAgICAgICAgICAgZGVsZXRlQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIH0pKCk7XG4gICAgfSkoKTtcbn07IiwiaW1wb3J0IHsgYnVpbGRIZWFkZXIgfSBmcm9tIFwiLi9ET01IZWFkZXJcIjtcbmltcG9ydCB7IGJ1aWxkU2lkZWJhciB9IGZyb20gXCIuL0RPTVByb2plY3RCYXJcIjtcbmltcG9ydCB7IGJ1aWxkTWFpbiB9IGZyb20gXCIuL0RPTU1haW5cIjtcbmltcG9ydCB7IGJ1aWxkRm9ybUJhckhlYWRlciB9IGZyb20gXCIuL0RPTUZvcm1CYXJIZWFkZXJcIjtcbmltcG9ydCB7IGJ1aWxkVGFza0ZvY3VzIH0gZnJvbSBcIi4vRE9NVGFza0ZvY3VzXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuXG4gICAgY29uc3QgZGVmaW5lQ29udGVudCA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIH0pKCk7XG5cbiAgICBidWlsZEhlYWRlcigpO1xuICAgIGJ1aWxkU2lkZWJhcigpO1xuICAgIGJ1aWxkTWFpbigpO1xuICAgIGJ1aWxkRm9ybUJhckhlYWRlcigpO1xuICAgIGJ1aWxkVGFza0ZvY3VzKCk7ICAgXG59O1xuXG5cblxuIiwiaW1wb3J0IHsgcHVzaFByb2plY3QgfSBmcm9tIFwiLi9wdXNoUHJvamVjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRQcm9qZWN0Rm9ybSgpIHtcblxuICAgIC8vIGNoYW5nZSBjb2xvciBvZiBzZWxlY3RlZCBidXR0b25cbiAgICBjb25zdCBjaGFuZ2VCdXR0b25Db2xvciA9ICgoKSA9PiB7XG4gICAgICAgIGxldCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stYnV0dG9uJyk7XG4gICAgICAgIHRhc2tCdXR0b24uc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuXG4gICAgICAgIGxldCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3RCdXR0b24uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTsgIFxuXG4gICAgLyoqKiogUFVTSCBQUk9KRUNUIEZVTkNUSU9OICoqKioqKioqL1xuICAgIGZ1bmN0aW9uIHByb2plY3RTdWJtaXRIYW5kbGVyKGV2ZW50KXtcbiAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcHVzaFByb2plY3QoKTtcbiAgICB9XG4gICAgLyoqKiogUFVTSCBQUk9KRUNUIEZVTkNUSU9OICoqKioqKioqL1xuXG4gICAgLy8gYnVpbGQgZm9ybSBcbiAgICBjb25zdCBidWlsZEFkZEJhciA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5vbnN1Ym1pdCA9IHByb2plY3RTdWJtaXRIYW5kbGVyO1xuICAgICAgICBwcm9qZWN0Rm9ybS5pZCA9ICdmb3JtJztcbiAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuXG5cbiAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdE5hbWUgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvcm1JdGVtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taXRlbScpXG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtSXRlbSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbmFtZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbGFiZWwnKTtcbiAgICAgICAgICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgICAgIG5hbWVMYWJlbC5pbm5lclRleHQgPSAnUHJvamVjdCBOYW1lJztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWVJbnB1dC5pZCA9ICdwcm9qZWN0LW5hbWUnO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG4gICAgICAgIH0pKCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3REZXNjcmlwdGlvbiA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9ybUl0ZW0uY2xhc3NMaXN0LmFkZCgnZm9ybS1pdGVtJylcbiAgICAgICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1JdGVtKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbGFiZWwnKTtcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbkxhYmVsLmlubmVyVGV4dCA9ICdQcm9qZWN0IERlc2NyaXB0aW9uJztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbkxhYmVsKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICAgICAgICAgIHByb2plY3REZXNjcmlwdGlvbklucHV0LmlkID0gJ3Byb2plY3QtZGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uSW5wdXQpOyAgXG4gICAgICAgIH0pKCk7ICBcblxuICAgICAgICBjb25zdCBhZGRTdWJtaXQgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzdWJtaXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3VibWl0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0Q29udGFpbmVyKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdCcpO1xuICAgICAgICAgICAgc3VibWl0LmlubmVyVGV4dCA9ICdBZGQnO1xuICAgICAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKVxuICAgICAgICAgICAgc3VibWl0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgICAgIH0pKCk7XG4gICAgfSkoKTsgICAgICBcbn07IiwiaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi5cIjtcblxuICBcbmV4cG9ydCBmdW5jdGlvbiBhZGRUb1Byb2plY3RTZWxlY3QoKSB7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAocHJvamVjdExpc3RbaV0ubmFtZSAhPSBcIlwiKXtcbiAgICAgICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1wcm9qZWN0Jyk7XG4gICAgICAgICBcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBwcm9qZWN0TGlzdFtpXS5uYW1lO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdExpc3RbaV0ubmFtZTtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZGVsZXRlU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1zZWxlY3QnKTtcblxuICAgICAgICAgICAgbGV0IG90aGVyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgICAgIG90aGVyT3B0aW9uLmlubmVyVGV4dCA9IHByb2plY3RMaXN0W2ldLm5hbWU7XG4gICAgICAgICAgICBvdGhlck9wdGlvbi52YWx1ZSA9IHByb2plY3RMaXN0W2ldLm5hbWU7XG4gICAgICAgICAgICBkZWxldGVTZWxlY3QuYXBwZW5kQ2hpbGQob3RoZXJPcHRpb24pO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICB9XG4gICAgXG59XG4iLCJpbXBvcnQgeyBwcm9qZWN0TGlzdCwgdGFza0xpc3QgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IHJlbW92ZVRhYmxlUm93cyB9IGZyb20gXCIuLi9UQVNLL3JlbW92ZVRhc2tUYWJsZVJvd3NcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi4vVEFTSy9jcmVhdGVUYXNrXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvail7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10YWJsZScpO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgLy8gcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYmxlLWl0ZW0nKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuXG5cbiAgICBjb25zdCBjcmVhdGVUYWJsZUJ1dHRvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYmxlLWl0ZW0nKTtcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChyb3cpO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uaWQgPSBwcm9qLm5hbWU7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYmxlLWJ1dHRvbicpO1xuICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gcHJvai5uYW1lO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hQcm9qZWN0KVxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgXG5cbiAgICAgICBcbiAgICAgICAgZnVuY3Rpb24gc3dpdGNoUHJvamVjdCgpeyAgICAgXG4gICAgICAgICAgICBjb25zdCBhbGxQcm9qZWN0c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwtcHJvamVjdHMnKTtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdExpc3RbaV0ubmFtZSA9PSBidXR0b24uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVGFibGVSb3dzKCk7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRMaXN0KGJ1dHRvbi5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNvcnRMaXN0KHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4ID09IHRhc2tMaXN0W2ldLnByb2plY3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGFzayh0YXNrTGlzdFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfSkoKTtcbn07IiwiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByb2plY3REZXNjcmlwdGlvbiwgbm90ZXMpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByb2plY3REZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgIH1cbn07IiwiaW1wb3J0IHsgcHJvamVjdExpc3R9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgeyBzdG9yZVByb2plY3RMaXN0IH0gZnJvbSBcIi4vc3RvcmVQcm9qZWN0TGlzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHVzaFByb2plY3QoKSB7XG4gXG4gICAgICAgIFxuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJyk7XG4gICAgICAgIGxldCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1kZXNjcmlwdGlvbicpO1xuIFxuXG4gICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUudmFsdWUsIHByb2plY3REZXNjcmlwdGlvbi52YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgIFxuICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgIFxuXG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG5cbiAgICAgICAgc3RvcmVQcm9qZWN0TGlzdCgpO1xuICAgICAgICBcblxuICAgIFxuICAgIFxuXG59OyIsImltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZVByb2plY3RMaXN0KCl7XG4gICAgdmFyIHByb2plY3RzVG9TdG9yZSA9IHByb2plY3RMaXN0O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yZWRQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNUb1N0b3JlKSk7XG59OyIsIlxuaW1wb3J0IHsgcHVzaFRhc2sgfSBmcm9tIFwiLi9wdXNoVGFza1wiO1xuaW1wb3J0IHsgZm9jdXNUYXNrIH0gZnJvbSBcIi4vZm9jdXNUYXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFRhc2tGb3JtKCkge1xuXG5cbiAgICAvLyBjaGFuZ2UgY29sb3Igb2Ygc2VsZWN0ZWQgYnV0dG9uXG4gICAgY29uc3QgY2hhbmdlQnV0dG9uQ29sb3IgPSAoKCkgPT4ge1xuICAgICAgICBsZXQgdGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWJ1dHRvbicpO1xuICAgICAgICB0YXNrQnV0dG9uLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcblxuICAgICAgICBsZXQgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWJ1dHRvbicpO1xuICAgICAgICBwcm9qZWN0QnV0dG9uLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgICB9KSgpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpOyAgXG5cbiAgICAvKioqKiBQVVNIIFRBU0sgRlVOQ1RJT04gKioqKioqKiovXG4gICAgZnVuY3Rpb24gdGFza1N1Ym1pdEhhbmRsZXIoZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwdXNoVGFzaygpO1xuICAgIH1cbiAgICAvKioqKiBQVVNIIFRBU0sgRlVOQ1RJT04gKioqKioqKiovXG5cbiAgICAvLyBidWlsZCBmb3JtIFxuICAgIGNvbnN0IGJ1aWxkQWRkQmFyID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIHRhc2tGb3JtLm9uc3VibWl0ID0gdGFza1N1Ym1pdEhhbmRsZXI7XG4gICAgICAgIHRhc2tGb3JtLmlkID0gJ3Rhc2stZm9ybSc7XG4gICAgICAgIFxuICAgICAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG5cbiAgICAgICAgY29uc3QgZm9ybVRpdGxlID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtSXRlbS5jbGFzc0xpc3QuYWRkKCdmb3JtLWl0ZW0nKVxuICAgICAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0ZW0pO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICB0aXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbGFiZWwnKTtcbiAgICAgICAgICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZm9ybS10aXRsZScpO1xuICAgICAgICAgICAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSAnVGl0bGUnO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgICAgICAgICAgdGl0bGVJbnB1dC5pZCA9ICdmb3JtLXRpdGxlJztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICB9KSgpO1xuICAgIFxuICAgICAgICBjb25zdCBmb3JtRGVzY3JpcHRpb24gPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvcm1JdGVtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taXRlbScpXG4gICAgICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChmb3JtSXRlbSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1sYWJlbCcpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdmb3JtLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2Zvcm0tZGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgICAgIH0pKCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGZvcm1EdWVEYXRlID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtSXRlbS5jbGFzc0xpc3QuYWRkKCdmb3JtLWl0ZW0nKVxuICAgICAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0ZW0pO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGR1ZURhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJyk7XG4gICAgICAgICAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZm9ybS1kYXRlJyk7XG4gICAgICAgICAgICBkdWVEYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlJztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LmlkID0gJ2Zvcm0tZGF0ZSc7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuICAgICAgICB9KSgpO1xuICAgIFxuICAgICAgICBjb25zdCBmb3JtUHJpb3JpdHkgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvcm1JdGVtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taXRlbScpXG4gICAgICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChmb3JtSXRlbSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1sYWJlbCcpO1xuICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdmb3JtLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdQcmlvcml0eSc7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIHByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1wcmlvcml0eScpO1xuICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5pZCA9ICdmb3JtLXByaW9yaXR5JztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbkxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIG9wdGlvbkxvdy52YWx1ZSA9ICdMb3cnO1xuICAgICAgICAgICAgICAgIG9wdGlvbkxvdy5pbm5lckhUTUwgPSAnTG93JztcbiAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG9wdGlvbkxvdyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25NZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBvcHRpb25NZWRpdW0udmFsdWUgPSAnTWVkaXVtJztcbiAgICAgICAgICAgICAgICBvcHRpb25NZWRpdW0uaW5uZXJIVE1MID0gJ01lZGl1bSc7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChvcHRpb25NZWRpdW0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIG9wdGlvbkhpZ2gudmFsdWUgPSAnSGlnaCc7XG4gICAgICAgICAgICAgICAgb3B0aW9uSGlnaC5pbm5lckhUTUwgPSAnSGlnaCc7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChvcHRpb25IaWdoKTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgY29uc3QgZm9ybVByb2plY3QgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvcm1JdGVtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taXRlbScpXG4gICAgICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChmb3JtSXRlbSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgcHJvamVjdExhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbGFiZWwnKTtcbiAgICAgICAgICAgIHByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdmb3JtLXByb2plY3QnKTtcbiAgICAgICAgICAgIHByb2plY3RMYWJlbC5pbm5lclRleHQgPSAnUHJvamVjdCc7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1wcm9qZWN0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0SW5wdXQuaWQgPSAnZm9ybS1wcm9qZWN0JztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGRlZmF1bHRTZWxlY3QudmFsdWUgPSAnTm9uZSc7XG4gICAgICAgICAgICBkZWZhdWx0U2VsZWN0LmlubmVyVGV4dCA9ICcnO1xuICAgICAgICAgICAgcHJvamVjdElucHV0LmFwcGVuZENoaWxkKGRlZmF1bHRTZWxlY3QpO1xuICAgICAgICB9KSgpO1xuICAgIFxuICAgICAgICBjb25zdCBhZGRTdWJtaXQgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzdWJtaXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3VibWl0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0Q29udGFpbmVyKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdCcpO1xuICAgICAgICAgICAgc3VibWl0LmlubmVyVGV4dCA9ICdBZGQnO1xuICAgICAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKVxuICAgICAgICAgICAgc3VibWl0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgICAgIH0pKCk7XG4gICAgfSkoKTsgICAgICAgIFxufTtcbiIsImltcG9ydCB7IHRhc2tMaXN0IH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBmb2N1c1Rhc2sgfSBmcm9tIFwiLi9mb2N1c1Rhc2tcIjtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrICh0b2RvKSB7XG5cbiAgICAgICAgXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10YWJsZScpO1xuXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGFzayk7XG5cbiAgICBjb25zdCB0YXNrQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgdGFza0J1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0J1dHRvbkNvbnRhaW5lcik7XG4gICAgXG4gICAgY29uc3QgY3JlYXRlVGFza0J1dHRvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1zd2l0Y2gtYnV0dG9uJyk7XG4gICAgICAgICAgICB0YXNrQnV0dG9uLmlkID0gdG9kby50aXRsZTtcbiAgICAgICAgICAgIHRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzb3J0VGFzayk7XG4gICAgICAgICAgICB0YXNrQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tCdXR0b24pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBzb3J0VGFzaygpIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFza0xpc3RbaV0udGl0bGUgPT0gdGFza0J1dHRvbi5pZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c1Rhc2sodGFza0xpc3RbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgIH0pKCk7XG4gICAgXG4gICAgICAgIFxuXG4gICAgY29uc3QgYWRkVGFza1RpdGxlID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGFza1RpdGxlLmlubmVyVGV4dCA9IHRvZG8udGl0bGU7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgYWRkVGFza0R1ZURhdGUgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlLWRhdGUnKTtcbiAgICAgICAgdGFza0R1ZURhdGUuaW5uZXJUZXh0ID0gdG9kby5kdWVEYXRlO1xuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcbiAgICB9KSgpOyBcblxuICAgIGNvbnN0IGFkZENvbXBsZXRpb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb21wbGV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgY29tcGxldGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbXBsZXRpb24nKTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChjb21wbGV0aW9uKTtcblxuICAgICAgICBjb25zdCBhZGRDb21wbGV0ZWRDaGVja2JveCA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZWRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIGNvbXBsZXRpb24uYXBwZW5kQ2hpbGQoY29tcGxldGVkQ2hlY2tib3gpO1xuICAgICAgICB9KSgpO1xuICAgIH0pKCk7IFxuXG59OyIsImltcG9ydCB7IHRhc2tMaXN0IH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFsbFRhc2tzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZih0YXNrTGlzdFtpXS50aXRsZSAhPSBcIlwiKXtcbiAgICAgICAgICAgIGNyZWF0ZVRhc2sodGFza0xpc3RbaV0pO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICB9O1xufTsiLCJcbmV4cG9ydCBmdW5jdGlvbiBmb2N1c1Rhc2sodGFzaykge1xuICAgIFxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtcGxhY2Vob2xkZXInKTtcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1wbGFjZWhvbGRlcicpO1xuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvY3VzLXBsYWNlaG9sZGVyJyk7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eS1wbGFjZWhvbGRlcicpO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24tcGxhY2Vob2xkZXInKTtcbiAgICBcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gdGFzay50aXRsZTtcbiAgICAgICAgZGF0ZS5pbm5lclRleHQgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgIHByb2plY3QuaW5uZXJUZXh0ID0gdGFzay5wcm9qZWN0O1xuICAgICAgICBwcmlvcml0eS5pbm5lckhUTUwgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBcbiAgICBcblxufTsiLCJpbXBvcnQgeyB0YXNrTGlzdCB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5pbXBvcnQgeyBzdG9yZVRhc2tMaXN0IH0gZnJvbSBcIi4uL0VESVQtVEFTSy9zdG9yZVRhc2tMaXN0XCI7XG5pbXBvcnQgeyByZW1vdmVUYWJsZVJvd3MgfSBmcm9tIFwiLi9yZW1vdmVUYXNrVGFibGVSb3dzXCI7XG5pbXBvcnQgeyBkaXNwbGF5QWxsVGFza3MgfSBmcm9tIFwiLi9kaXNwbGF5QWxsVGFza3NcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaFRhc2soKSB7XG5cbiAgICBsZXQgIHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tdGl0bGUnKTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1kZXNjcmlwdGlvbicpO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tZGF0ZScpO1xuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXByaW9yaXR5Jyk7XG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1wcm9qZWN0JylcblxuICAgIGxldCB0YXNrID0gbmV3IFRhc2sodGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgcHJvamVjdC52YWx1ZSk7XG4gICAgdGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICBcbiAgICBcblxuICAgIC8vIFB1dCB0aGUgb2JqZWN0IGludG8gc3RvcmFnZVxuICAgIHN0b3JlVGFza0xpc3QoKTtcbiAgICBcbiAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgIGRhdGUudmFsdWUgPSBcIlwiO1xuICAgIHByaW9yaXR5LnZhbHVlID0gXCJcIjtcbiAgICBwcm9qZWN0LnZhbHVlID0gXCJcIjtcblxuICAgIHJlbW92ZVRhYmxlUm93cygpO1xuICAgIGRpc3BsYXlBbGxUYXNrcygpO1xuXG4gIFxufTsiLCJleHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFibGVSb3dzKCl7XG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGFibGUnKTtcbiAgICBmb3IobGV0IGkgPSAxOyBpPHRhYmxlLnJvd3MubGVuZ3RoOyl7XG4gICAgICAgIHRhYmxlLmRlbGV0ZVJvdyhpKTtcbiAgICB9XG59OyIsImV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuICAgIGdldFRhc2tQcmV2aWV3KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZSArICcgLyAnICsgdGhpcy5kdWVEYXRlO1xuICAgIH1cbiAgICBnZXRUYXNrRnVsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGUgKyAnIHwgJyArIHRoaXMuZGVzY3JpcHRpb24gKyAnIHwgJyArIHRoaXMuZHVlRGF0ZSArICcgfCAnICsgdGhpcy5wcmlvcml0eSArICcgfCAnO1xuICAgIH0gXG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfSBmcm9tICcuL0hPTUVQQUdFL2hvbWVwYWdlQ29udHJvbGxlcic7XG5pbXBvcnQgeyBidWlsZFRhc2tGb3JtIH0gZnJvbSAnLi9UQVNLL0RPTVRhc2tGb3JtJztcblxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL1BST0pFQ1QvY3JlYXRlUHJvamVjdFwiO1xuXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi9UQVNLL3Rhc2snO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vUFJPSkVDVC9wcm9qZWN0JztcbmltcG9ydCB7IHJpZ2h0U2lkZWJhckxvZ2ljIH0gZnJvbSAnLi9yaWdodFNpZGViYXJMb2dpYyc7XG5cbmltcG9ydCB7IGRpc3BsYXlBbGxUYXNrcyB9IGZyb20gJy4vVEFTSy9kaXNwbGF5QWxsVGFza3MnO1xuXG5pbXBvcnQgeyBhZGRUb1Byb2plY3RTZWxlY3QgfSBmcm9tICcuL1BST0pFQ1QvYWRkVG9Qcm9qZWN0U2VsZWN0JztcblxuXG5cblxuLyoqKioqKioqKioqKioqIFNUT1JFIFRBU0tTICoqKioqKioqKioqKioqKiovXG5cbi8vIGNvbnN0IHJldHJpZXZlZFRhc2tMaXN0ID0gW107XG5cbi8vIGNvbnN0IHRhc2tTdG9yYWdlID0gKCgpID0+IHtcbi8vICAgICB2YXIgcmV0cmlldmVkVGFza3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza1N0b3JhZ2UnKTtcblxuLy8gICAgIGxldCBwYXJzZWRUYXNrTGlzdCA9IEpTT04ucGFyc2UocmV0cmlldmVkVGFza3MpO1xuICAgIFxuICAgICBcbi8vICAgICBmdW5jdGlvbiBtYWtlVGFza0xpc3QoYXJyYXkpe1xuLy8gICAgICAgICBmb3IobGV0IGk9MDsgaTxhcnJheS5sZW5ndGg7aSsrKXtcbi8vICAgICAgICAgICAgIGxldCB0YXNrID0gbmV3IFRhc2soYXJyYXlbaV0udGl0bGUsIGFycmF5W2ldLmRlc2NyaXB0aW9uLCBhcnJheVtpXS5kdWVEYXRlLCBhcnJheVtpXS5wcmlvcml0eSwgYXJyYXlbaV0ucHJvamVjdCk7XG4vLyAgICAgICAgICAgICByZXRyaWV2ZWRUYXNrTGlzdC5wdXNoKHRhc2spOyAgXG4vLyAgICAgICAgIH07ICBcbi8vICAgICB9OyBcbi8vICAgICBtYWtlVGFza0xpc3QocGFyc2VkVGFza0xpc3QpO1xuLy8gfSkoKTtcblxuLy8gbGV0IGZpbHRlcmVkVGFza3MgPSByZXRyaWV2ZWRUYXNrTGlzdC5maWx0ZXIoZnVuY3Rpb24oZSkge1xuLy8gICAgIHJldHVybiBlLnRpdGxlICE9IFwiXCI7XG4vLyB9KTtcblxuXG4vKioqKioqKioqKioqKiogU1RPUkUgUFJPSkVDVFMgKioqKioqKioqKioqKioqKi9cblxuLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJzdG9yZWRQcm9qZWN0c1wiKTtcblxuLy8gdmFyIHJldHJpZXZlZFByb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkUHJvamVjdCcpO1xuXG5cblxuLy8gbGV0IHBhcnNlZFByb2plY3RMaXN0ID0gSlNPTi5wYXJzZShyZXRyaWV2ZWRQcm9qZWN0KTtcblxuXG4vLyBjb25zdCByZXRyaWV2ZWRQcm9qZWN0TGlzdCA9IFtdO1xuXG4vLyBmdW5jdGlvbiBtYWtlUHJvamVjdExpc3QoYXJyYXkpe1xuLy8gICAgIGZvcihsZXQgaT0wOyBpPGFycmF5Lmxlbmd0aDtpKyspe1xuLy8gICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGFycmF5W2ldLm5hbWUsIGFycmF5W2ldLmRlc2NyaXB0aW9uKTtcbi8vICAgICAgICAgcmV0cmlldmVkUHJvamVjdExpc3QucHVzaChwcm9qZWN0KTsgIFxuLy8gICAgIH07ICBcbi8vIH07IFxuXG4vLyBjb25zb2xlLmxvZyhyZXRyaWV2ZWRQcm9qZWN0TGlzdCk7XG5cbi8vIG1ha2VQcm9qZWN0TGlzdChwYXJzZWRQcm9qZWN0TGlzdCk7XG4vLyBjb25zb2xlLmxvZyhyZXRyaWV2ZWRQcm9qZWN0TGlzdCk7XG5cbi8vIGxldCBmaWx0ZXJlZFByb2plY3RMaXN0ID0gcmV0cmlldmVkUHJvamVjdExpc3QuZmlsdGVyKGZ1bmN0aW9uKGUpIHtcbi8vICAgICByZXR1cm4gZS5uYW1lICE9IFwiXCI7XG4vLyB9KTtcblxuLy8gY29uc29sZS5sb2coZmlsdGVyZWRQcm9qZWN0TGlzdCk7XG5cblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmV4cG9ydCB2YXIgdGFza0xpc3QgPSBbXTtcbmV4cG9ydCB2YXIgcHJvamVjdExpc3QgPSBbXTtcblxuLy8gYnVpbGRzIHBhZ2VcbmNyZWF0ZUhvbWVQYWdlKCk7XG5idWlsZFRhc2tGb3JtKCk7XG5yaWdodFNpZGViYXJMb2dpYygpO1xuXG4vLyBjcmVhdGVTaWRlYmFyTG9naWMoKVxuXG4vKioqKioqKioqKioqKiogTkVXIFNUVUZGICoqKioqKioqKioqKioqKi9cblxuXG5cblxuLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJzdG9yZWRQcm9qZWN0XCIpO1xuXG5cbmNvbnN0IGNyZWF0ZVRhc2tEYXRhID0gKCgpID0+IHtcbiAgICBsZXQgdGFzazEgPSBuZXcgVGFzaygnRG8gTGF1bmRyeScsICd3YXNoIGFsbCBjbG90aGVzIGFuZCB0b3dlbHMnLCAnMTAvMDEvMjInLCAnSElHSCcsICdFcnJhbmRzJyk7XG4gICAgbGV0IHRhc2syID0gbmV3IFRhc2soJ0RvIEhvbWV3b3JrJywgJ2RvIGFsbCBob21ld29yaycsICc5LzAxLzIyJywgJ0hJR0gnLCAnU2Nob29sJyk7XG4gICAgbGV0IHRhc2szID0gbmV3IFRhc2soJ1NjaGVkdWxlIEFwcG9pbnRtZW50JywgJ21ha2UgYW4gYXBwb2lubWVudCcsICc3LzEwLzIyJywgJ0xPVycsICAnRXJyYW5kcycpO1xuICAgIGxldCB0YXNrNCA9IG5ldyBUYXNrKCdPcmRlciBQYWNrYWdlJywgJ29yZGVyIGEgYm94JywgJzA3LzA4LzIyJywgJ01FRElVTScsICdTY2hvb2wnKTtcbiAgICBsZXQgdGFzazUgPSBuZXcgVGFzaygnU2hhdmUnLCAnc2hhdmUgYmVhcmQgd2l0aCByYXpvcicsICcxMi8yNC8yMicsICdMT1cnLCAnRXJyYW5kcycpO1xuXG4gICAgdGFza0xpc3QucHVzaCh0YXNrMSk7XG4gICAgdGFza0xpc3QucHVzaCh0YXNrMik7XG4gICAgdGFza0xpc3QucHVzaCh0YXNrMyk7XG4gICAgdGFza0xpc3QucHVzaCh0YXNrNCk7XG4gICAgdGFza0xpc3QucHVzaCh0YXNrNSk7XG5cbiAgICAgICAgXG59KSgpO1xuXG5sZXQgcHJvamVjdDEgPSBuZXcgUHJvamVjdCgnRXJyYW5kcycsICdzaW1wbGUgZXJyYW5kcyBJIG5lZWQgdG8gZG8nKTtcbiAgICBsZXQgcHJvamVjdDIgPSBuZXcgUHJvamVjdCgnU2Nob29sJywgJ3N0dWZmIHJlbGF0ZWQgdG8gc2Nob29sJyk7XG5cbiAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QxKTtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QyKTtcblxuZGlzcGxheUFsbFRhc2tzKCk7XG5cblxuXG5mb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICBjcmVhdGVQcm9qZWN0KHByb2plY3RMaXN0W2ldKTtcbn1cblxuYWRkVG9Qcm9qZWN0U2VsZWN0KCk7XG5cbi8qKioqKioqKioqKioqKiBORVcgU1RVRkYgKioqKioqKioqKioqKioqL1xuXG5cblxuXG4vLyB2YXIgdGVzdE9iamVjdCA9IHsgJ29uZSc6IDEsICd0d28nOiAyLCAndGhyZWUnOiAzIH07XG5cbi8vIC8vIFB1dCB0aGUgb2JqZWN0IGludG8gc3RvcmFnZVxuLy8gY29uc3Qgc3RvcmVQcm9qZWN0ID0gcHJvamVjdExpc3Q7XG4vLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkUHJvamVjdCcsIEpTT04uc3RyaW5naWZ5KHN0b3JlUHJvamVjdCkpO1xuXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG5cblxuXG4vLyAvLyBSZXRyaWV2ZSB0aGUgb2JqZWN0IGZyb20gc3RvcmFnZVxuXG5cbi8vIC8vIFB1dCB0aGUgb2JqZWN0IGludG8gc3RvcmFnZVxuLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rlc3RPYmplY3QnLCBKU09OLnN0cmluZ2lmeSh0ZXN0T2JqZWN0KSk7XG5cbi8vIC8vIFJldHJpZXZlIHRoZSBvYmplY3QgZnJvbSBzdG9yYWdlXG4vLyB2YXIgcmV0cmlldmVkT2JqZWN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3RPYmplY3QnKTtcblxuLy8gY29uc29sZS5sb2coJ3JldHJpZXZlZE9iamVjdDogJywgSlNPTi5wYXJzZShyZXRyaWV2ZWRPYmplY3QpKTtcblxuLy8gY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuLy8gY29uc29sZS5sb2codGFza0xpc3QpO1xuIiwiaW1wb3J0IHsgYnVpbGRUYXNrRm9ybSB9IGZyb20gXCIuL1RBU0svRE9NVGFza0Zvcm1cIjtcbmltcG9ydCB7IGJ1aWxkUHJvamVjdEZvcm0gfSBmcm9tIFwiLi9QUk9KRUNUL0RPTVByb2plY3RGb3JtLmpzXCI7XG5pbXBvcnQgeyBhZGRUb1Byb2plY3RTZWxlY3QgfSBmcm9tIFwiLi9QUk9KRUNUL2FkZFRvUHJvamVjdFNlbGVjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRTaWRlYmFyTG9naWMoKSB7XG5cbiAgICAvLyByZW1vdmVzIHNpZGViYXIgZm9yIFRhc2sgLyBQcm9qZWN0IGZvcm0gc3dpdGNoXG4gICAgZnVuY3Rpb24gcmVtb3ZlTGFzdENoaWxkKCkge1xuICAgICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgc2VsZWN0LnJlbW92ZUNoaWxkKHNlbGVjdC5sYXN0Q2hpbGQpO1xuICAgIH07XG5cbiAgICAvLyB0YXNrIGZvcm0gc3dpdGNoXG4gICAgY29uc3QgdGFza0J1dHRvbkxvZ2ljID0gKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuVGFza01lbnUpO1xuICAgICAgICBmdW5jdGlvbiBvcGVuVGFza01lbnUoKSB7XG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stYnV0dG9uJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhidXR0b24uc3R5bGUuY29sb3IpO1xuICAgICAgICAgICAgcmVtb3ZlTGFzdENoaWxkKCk7XG4gICAgICAgICAgICBidWlsZFRhc2tGb3JtKCk7XG4gICAgICAgICAgICBhZGRUb1Byb2plY3RTZWxlY3QoKTtcblxuICAgICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICAvLyBwcm9qZWN0IGZvcm0gc3dpdGNoXG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbkxvZ2ljID0gKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuVGFza01lbnUpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgZnVuY3Rpb24gb3BlblRhc2tNZW51KCkge1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWJ1dHRvbicpO1xuICAgICAgICAgICAgcmVtb3ZlTGFzdENoaWxkKCk7XG4gICAgICAgICAgICBidWlsZFByb2plY3RGb3JtKCk7XG5cbiAgICAgICAgfTtcbiAgICB9KSgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=