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
___CSS_LOADER_EXPORT___.push([module.id, "/*********** || GENERAL STYLES || *****************************************/\n\n:root {\n    --white:white;\n    --soothing-breeze:#b2bec3;\n    --gray:#636e72;\n    --dark:#2d3436;\n    --table-background: #dfe6e948;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\n    html,\n    body {\n        margin: 0;\n        padding: 0;\n        height: 100%;\n    }\n\n        #content {\n            display: grid;\n\n            height: 100%;\n            width: 100%;\n\n\n            grid-template-columns: 2fr 5fr 2fr;\n            grid-template-rows: 1fr 80px 12fr 6fr;\n            \n        }\n\n            input[type=checkbox] {\n                transform: scale(1.5);\n            }\n            \n/*********** || HEADER || *****************************************/\n\n.header {\n    display: flex;\n    justify-content: center;\n    \n    grid-column: 1 / 4;\n    grid-row: 1 / 2;\n\n    padding: 10px;\n\n    background: rgb(131,58,180);\n    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);\n\n\n    font-size: 30px;\n    color: var(--white);\n}\n\n/*********** || MAIN || *****************************************/\n\n.main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 4;\n    overflow: scroll;\n\n}\n\n    .task { \n\n        height: 50px;\n        background-color: var(--table-background);\n\n        font-size: 25px;\n    }\n\n        .column-placeholder {\n            width: 100px;\n        }\n\n        th {\n            width: 400px;\n\n            background-color: var(--gray);\n            color: var(--white);\n            font-size: 25px; \n        }\n\n        td {\n            align-items: center;\n            text-align: center;\n        }\n\n            .task-title-container {\n                display: flex;\n                justify-content: space-around;\n            }\n\n                .task-switch-button {\n                    box-sizing: border-box;\n                    background-color:var(--table-background);\n                    width: 50px;\n                    height: 40px;\n                }\n\n                .task-switch-button:focus {\n                    background-color: var(--dark);\n                }\n\n                .task-title {\n                    \n                }\n\n\n    \n/*********** || PROJECT TABLE SIDEBAR || *****************************************/\n\n.sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 5;\n\n    background-color: var(--dark);\n}\n\n    .projects-header {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 60px;\n        font-size: 40px;\n        padding-top: 20px;\n        color: var(--white);\n        margin-bottom: 10px;\n        \n    }\n\n    .project-table {\n        width: 100%;\n\n    }\n\n    .project-table-item {\n        width: 100%;\n        padding: 10px;\n\n\n    }\n\n    .project-table-button,\n    .project-table-button-selected {\n        width: 100%;\n\n        background-color: var(--dark);\n        border: 2px solid var(--white);\n        color: white;\n\n        padding: 10px;\n        font-size: 25px;\n    }\n\n    .project-table-button:hover{\n        background-color: var(--gray);\n    }\n\n    .project-table-button:focus {\n        background-color: var(--white);\n        color: var(--dark);\n        font-weight: bold;\n    }\n\n\n\n\n\n/*********** || RIGHT SIDEBAR HEADER || *****************************************/\n\n.form-header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    grid-column: 3 / 4;\n    grid-row: 2 / 3;\n    \n    background-color: var(--dark);\n    color: var(white);\n\n    font-size: 40px;\n}\n\n    .add {\n        color: var(--white);\n    }\n\n    .form-header button {\n        background-color: var(--dark);\n        border: none;\n\n        font-size: 40px;\n    }\n\n\n/*********** || RIGHT SIDEBAR (TASK / PROJECT FORMS) || *********************/\n\n\n.task-form {\n    grid-column: 3 / 4;\n    grid-row: 3 / 5;\n\n    background-color: var(--dark);\n\n    color: var(--white);\n}      \n\n    .form-item {\n        display: grid;\n\n        height: 130px;\n        padding: 20px;\n    }\n\n        .form-label {\n            font-size: 25px;\n        }\n\n    .submit-container {\n        display: flex;\n        justify-content: center;\n\n        margin-top: 20px;\n    }\n\n        .submit {\n            justify-content: center;\n\n            width: 50%;\n            font-size: 20px;\n        }\n    \n\n/*********** || TASK-FOCUS || *********************/\n\n.task-focus {\n    background-color: var(--gray);\n\n    grid-column: 2 / 3;\n    grid-row: 4 / 5;\n\n    display: grid;\n    grid-template-rows: 6fr 2fr;\n}\n\n    .info-container {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n        align-items: center;\n        padding-right: 10px;\n\n    }\n\n        .focus-section {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 23px;\n            color: var(--white);\n            font-weight: bold;\n        }\n\n        .task-info {\n            display: flex;\n            align-items: center;\n\n            height: 100%;\n            font-size: 23px;\n            color: var(--white);\n        }\n\n\n        #title-section {\n            grid-column: 1 / 2;\n            grid-row: 1 / 2;\n        }\n\n        #title-placeholder {\n            grid-column: 2 / 4;\n            grid-row: 1 / 2;\n        }\n    \n\n        #date-section {\n            grid-column: 4 / 5;\n            grid-row: 1 / 2;\n        }\n\n        #date-placeholder {\n            grid-column: 5 / 7;\n            grid-row: 1 / 2;\n        }\n  \n\n        #project-focus-section {\n            grid-column: 1 / 2;\n            grid-row: 2 / 3;\n        }\n\n        #project-focus-placeholder {\n            grid-column: 2 / 4;\n            grid-row: 2 / 3;\n        }\n\n\n        #priority-section {\n            grid-column: 4 / 5;\n            grid-row: 2 / 3;\n        }\n\n        #priority-placeholder {\n            grid-column: 5 / 7;\n            grid-row: 2 / 3;\n        }\n\n\n        #description-section {\n            grid-column: 1 / 2;\n            grid-row: 3 / 4;\n        }\n\n        #description-placeholder {\n            grid-column: 2 / 7;\n            grid-row: 3 / 4;\n        }\n\n\n    .focus-button-section {\n        background-color: var(--gray);\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n    }\n    \n        .focus-button-container {\n            display: flex; \n            justify-content: center;\n            align-items: center;\n            padding-bottom: 10px;\n        }\n    \n        .focus-button {\n            padding: 8px;\n            width: 100px;\n    \n            background-color: var(--gray);\n            color: var(--white);\n            /* border-radius: 10px; */\n            border: 1px solid white;\n    \n            font-size: 20px;\n            \n        }\n\n    .edit-input {\n        height: 70%;\n        border-radius: 5px;\n    }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*********** || GENERAL STYLES || *****************************************/\n\n:root {\n    --white:white;\n    --soothing-breeze:#b2bec3;\n    --gray:#636e72;\n    --dark:#2d3436;\n    --table-background: #dfe6e948;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\n    html,\n    body {\n        margin: 0;\n        padding: 0;\n        height: 100%;\n    }\n\n        #content {\n            display: grid;\n\n            height: 100%;\n            width: 100%;\n\n\n            grid-template-columns: 2fr 5fr 2fr;\n            grid-template-rows: 1fr 80px 12fr 6fr;\n            \n        }\n\n            input[type=checkbox] {\n                transform: scale(1.5);\n            }\n            \n/*********** || HEADER || *****************************************/\n\n.header {\n    display: flex;\n    justify-content: center;\n    \n    grid-column: 1 / 4;\n    grid-row: 1 / 2;\n\n    padding: 10px;\n\n    background: rgb(131,58,180);\n    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);\n\n\n    font-size: 30px;\n    color: var(--white);\n}\n\n/*********** || MAIN || *****************************************/\n\n.main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 4;\n    overflow: scroll;\n\n}\n\n    .task { \n\n        height: 50px;\n        background-color: var(--table-background);\n\n        font-size: 25px;\n    }\n\n        .column-placeholder {\n            width: 100px;\n        }\n\n        th {\n            width: 400px;\n\n            background-color: var(--gray);\n            color: var(--white);\n            font-size: 25px; \n        }\n\n        td {\n            align-items: center;\n            text-align: center;\n        }\n\n            .task-title-container {\n                display: flex;\n                justify-content: space-around;\n            }\n\n                .task-switch-button {\n                    box-sizing: border-box;\n                    background-color:var(--table-background);\n                    width: 50px;\n                    height: 40px;\n                }\n\n                .task-switch-button:focus {\n                    background-color: var(--dark);\n                }\n\n                .task-title {\n                    \n                }\n\n\n    \n/*********** || PROJECT TABLE SIDEBAR || *****************************************/\n\n.sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 5;\n\n    background-color: var(--dark);\n}\n\n    .projects-header {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 60px;\n        font-size: 40px;\n        padding-top: 20px;\n        color: var(--white);\n        margin-bottom: 10px;\n        \n    }\n\n    .project-table {\n        width: 100%;\n\n    }\n\n    .project-table-item {\n        width: 100%;\n        padding: 10px;\n\n\n    }\n\n    .project-table-button,\n    .project-table-button-selected {\n        width: 100%;\n\n        background-color: var(--dark);\n        border: 2px solid var(--white);\n        color: white;\n\n        padding: 10px;\n        font-size: 25px;\n    }\n\n    .project-table-button:hover{\n        background-color: var(--gray);\n    }\n\n    .project-table-button:focus {\n        background-color: var(--white);\n        color: var(--dark);\n        font-weight: bold;\n    }\n\n\n\n\n\n/*********** || RIGHT SIDEBAR HEADER || *****************************************/\n\n.form-header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    grid-column: 3 / 4;\n    grid-row: 2 / 3;\n    \n    background-color: var(--dark);\n    color: var(white);\n\n    font-size: 40px;\n}\n\n    .add {\n        color: var(--white);\n    }\n\n    .form-header button {\n        background-color: var(--dark);\n        border: none;\n\n        font-size: 40px;\n    }\n\n\n/*********** || RIGHT SIDEBAR (TASK / PROJECT FORMS) || *********************/\n\n\n.task-form {\n    grid-column: 3 / 4;\n    grid-row: 3 / 5;\n\n    background-color: var(--dark);\n\n    color: var(--white);\n}      \n\n    .form-item {\n        display: grid;\n\n        height: 130px;\n        padding: 20px;\n    }\n\n        .form-label {\n            font-size: 25px;\n        }\n\n    .submit-container {\n        display: flex;\n        justify-content: center;\n\n        margin-top: 20px;\n    }\n\n        .submit {\n            justify-content: center;\n\n            width: 50%;\n            font-size: 20px;\n        }\n    \n\n/*********** || TASK-FOCUS || *********************/\n\n.task-focus {\n    background-color: var(--gray);\n\n    grid-column: 2 / 3;\n    grid-row: 4 / 5;\n\n    display: grid;\n    grid-template-rows: 6fr 2fr;\n}\n\n    .info-container {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n        align-items: center;\n        padding-right: 10px;\n\n    }\n\n        .focus-section {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 23px;\n            color: var(--white);\n            font-weight: bold;\n        }\n\n        .task-info {\n            display: flex;\n            align-items: center;\n\n            height: 100%;\n            font-size: 23px;\n            color: var(--white);\n        }\n\n\n        #title-section {\n            grid-column: 1 / 2;\n            grid-row: 1 / 2;\n        }\n\n        #title-placeholder {\n            grid-column: 2 / 4;\n            grid-row: 1 / 2;\n        }\n    \n\n        #date-section {\n            grid-column: 4 / 5;\n            grid-row: 1 / 2;\n        }\n\n        #date-placeholder {\n            grid-column: 5 / 7;\n            grid-row: 1 / 2;\n        }\n  \n\n        #project-focus-section {\n            grid-column: 1 / 2;\n            grid-row: 2 / 3;\n        }\n\n        #project-focus-placeholder {\n            grid-column: 2 / 4;\n            grid-row: 2 / 3;\n        }\n\n\n        #priority-section {\n            grid-column: 4 / 5;\n            grid-row: 2 / 3;\n        }\n\n        #priority-placeholder {\n            grid-column: 5 / 7;\n            grid-row: 2 / 3;\n        }\n\n\n        #description-section {\n            grid-column: 1 / 2;\n            grid-row: 3 / 4;\n        }\n\n        #description-placeholder {\n            grid-column: 2 / 7;\n            grid-row: 3 / 4;\n        }\n\n\n    .focus-button-section {\n        background-color: var(--gray);\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n    }\n    \n        .focus-button-container {\n            display: flex; \n            justify-content: center;\n            align-items: center;\n            padding-bottom: 10px;\n        }\n    \n        .focus-button {\n            padding: 8px;\n            width: 100px;\n    \n            background-color: var(--gray);\n            color: var(--white);\n            /* border-radius: 10px; */\n            border: 1px solid white;\n    \n            font-size: 20px;\n            \n        }\n\n    .edit-input {\n        height: 70%;\n        border-radius: 5px;\n    }"],"sourceRoot":""}]);
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
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task */ "./src/task.js");
/* harmony import */ var _displayAllTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../displayAllTasks */ "./src/displayAllTasks.js");
/* harmony import */ var _removeTableRows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../removeTableRows */ "./src/removeTableRows.js");





function deleteTask(){
    for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.taskList.length; i++){
        const title = document.getElementById('title-placeholder');
        if (___WEBPACK_IMPORTED_MODULE_0__.taskList[i].title == title.innerText){
            delete ___WEBPACK_IMPORTED_MODULE_0__.taskList[i];
            ___WEBPACK_IMPORTED_MODULE_0__.taskList[i] = new _task__WEBPACK_IMPORTED_MODULE_1__.Task("","","","","");
            (0,_removeTableRows__WEBPACK_IMPORTED_MODULE_3__.removeTableRows)();
            return (0,_displayAllTasks__WEBPACK_IMPORTED_MODULE_2__.displayAllTasks)();
            
            
            
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

// description 3
// date 5
//priority 7 
// project-focus 9


/***/ }),

/***/ "./src/HOMEPAGE/buildFormBarHeader.js":
/*!********************************************!*\
  !*** ./src/HOMEPAGE/buildFormBarHeader.js ***!
  \********************************************/
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

/***/ "./src/HOMEPAGE/buildHeader.js":
/*!*************************************!*\
  !*** ./src/HOMEPAGE/buildHeader.js ***!
  \*************************************/
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

/***/ "./src/HOMEPAGE/buildMain.js":
/*!***********************************!*\
  !*** ./src/HOMEPAGE/buildMain.js ***!
  \***********************************/
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

/***/ "./src/HOMEPAGE/buildProjectBar.js":
/*!*****************************************!*\
  !*** ./src/HOMEPAGE/buildProjectBar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildSidebar": () => (/* binding */ buildSidebar)
/* harmony export */ });
/* harmony import */ var _removeTableRows__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../removeTableRows */ "./src/removeTableRows.js");
/* harmony import */ var _displayAllTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../displayAllTasks */ "./src/displayAllTasks.js");



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
        const projectTable = document.createElement('table');
        projectTable.classList.add('project-table');
        projectTable.id = 'project-table';
        sidebar.appendChild(projectTable);

        const buildTableHeader = (() => {
            const tableHeaderRow = document.createElement('tr');
            tableHeaderRow.classList.add('column-header');
            tableHeaderRow.classList.add('task');
            projectTable.appendChild(tableHeaderRow);

            const columnHeader = document.createElement('th');
            columnHeader.classList.add('column-header');
            columnHeader.classList.add('project-header');
            columnHeader.innerText = 'Projects';
            tableHeaderRow.appendChild(columnHeader);
        });

        const buildAllRow = (() => {
            const allRow = document.createElement('tr');
            allRow.classList.add('all-row');
            projectTable.appendChild(allRow);

            const createTableButton = (() => {
                const all = document.createElement('td');
                all.classList.add('project-table-item');
                
                allRow.appendChild(all);

                const button = document.createElement('button');
                button.id = 'all-projects';
                button.classList.add('project-table-button');
                button.innerHTML = 'All Projects'
                button.addEventListener('click', _removeTableRows__WEBPACK_IMPORTED_MODULE_0__.removeTableRows)
                button.addEventListener('click', _displayAllTasks__WEBPACK_IMPORTED_MODULE_1__.displayAllTasks)

                all.appendChild(button);
            })();
            

        })();
    })();
}; 

/***/ }),

/***/ "./src/HOMEPAGE/buildTaskFocus.js":
/*!****************************************!*\
  !*** ./src/HOMEPAGE/buildTaskFocus.js ***!
  \****************************************/
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
/* harmony import */ var _buildHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildHeader */ "./src/HOMEPAGE/buildHeader.js");
/* harmony import */ var _buildProjectBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildProjectBar */ "./src/HOMEPAGE/buildProjectBar.js");
/* harmony import */ var _buildMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildMain */ "./src/HOMEPAGE/buildMain.js");
/* harmony import */ var _buildFormBarHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buildFormBarHeader */ "./src/HOMEPAGE/buildFormBarHeader.js");
/* harmony import */ var _buildTaskFocus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buildTaskFocus */ "./src/HOMEPAGE/buildTaskFocus.js");







function createHomePage() {

    const defineContent = (() => {
        const content = document.getElementById('content');
    })();

    (0,_buildHeader__WEBPACK_IMPORTED_MODULE_0__.buildHeader)();
    (0,_buildProjectBar__WEBPACK_IMPORTED_MODULE_1__.buildSidebar)();
    (0,_buildMain__WEBPACK_IMPORTED_MODULE_2__.buildMain)();
    (0,_buildFormBarHeader__WEBPACK_IMPORTED_MODULE_3__.buildFormBarHeader)();
    (0,_buildTaskFocus__WEBPACK_IMPORTED_MODULE_4__.buildTaskFocus)();   
};





/***/ }),

/***/ "./src/addToProjectSelect.js":
/*!***********************************!*\
  !*** ./src/addToProjectSelect.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToProjectSelect": () => (/* binding */ addToProjectSelect)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


  
function addToProjectSelect() {

    for(let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.projectList.length; i++){
        let select = document.getElementById('form-project');
        let option = document.createElement('option');
        option.innerText = ___WEBPACK_IMPORTED_MODULE_0__.projectList[i].name;
        option.value = ___WEBPACK_IMPORTED_MODULE_0__.projectList[i].name;
        select.appendChild(option);
    }
}


/***/ }),

/***/ "./src/buildProjectFormDOM.js":
/*!************************************!*\
  !*** ./src/buildProjectFormDOM.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildProjectForm": () => (/* binding */ buildProjectForm)
/* harmony export */ });
/* harmony import */ var _pushProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pushProject */ "./src/pushProject.js");


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

/***/ "./src/buildTaskFormDOM.js":
/*!*********************************!*\
  !*** ./src/buildTaskFormDOM.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildTaskForm": () => (/* binding */ buildTaskForm)
/* harmony export */ });
/* harmony import */ var _pushTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pushTask */ "./src/pushTask.js");
/* harmony import */ var _focusTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusTask */ "./src/focusTask.js");




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

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _removeTableRows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeTableRows */ "./src/removeTableRows.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");





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
                    (0,_removeTableRows__WEBPACK_IMPORTED_MODULE_1__.removeTableRows)();
                    sortList(button.id);

                        function sortList(x) {
                            for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.taskList.length; i++ ){
                                if (x == ___WEBPACK_IMPORTED_MODULE_0__.taskList[i].project){
                                    (0,_createTask__WEBPACK_IMPORTED_MODULE_2__.createTask)(___WEBPACK_IMPORTED_MODULE_0__.taskList[i]);
                                }
                                
                            }
                            
                        }
    
                }
            };
        };
    })();
};

/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _focusTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusTask */ "./src/focusTask.js");


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

/***/ "./src/displayAllTasks.js":
/*!********************************!*\
  !*** ./src/displayAllTasks.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAllTasks": () => (/* binding */ displayAllTasks)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");



function displayAllTasks() {
    for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__.taskList.length; i++){
        if(___WEBPACK_IMPORTED_MODULE_0__.taskList[i].title != ""){
            (0,_createTask__WEBPACK_IMPORTED_MODULE_1__.createTask)(___WEBPACK_IMPORTED_MODULE_0__.taskList[i]);
        };
        
    };
};

/***/ }),

/***/ "./src/focusTask.js":
/*!**************************!*\
  !*** ./src/focusTask.js ***!
  \**************************/
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
/* harmony import */ var _buildTaskFormDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildTaskFormDOM */ "./src/buildTaskFormDOM.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _rightSidebarLogic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rightSidebarLogic */ "./src/rightSidebarLogic.js");
/* harmony import */ var _displayAllTasks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./displayAllTasks */ "./src/displayAllTasks.js");
/* harmony import */ var _addToProjectSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addToProjectSelect */ "./src/addToProjectSelect.js");
/* harmony import */ var _showTaskDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./showTaskDetails */ "./src/showTaskDetails.js");













// import { pushTask } from './taskFormPush';





var taskList = [];
var projectList = [];

// builds page
(0,_HOMEPAGE_homepageController__WEBPACK_IMPORTED_MODULE_1__.createHomePage)();
(0,_buildTaskFormDOM__WEBPACK_IMPORTED_MODULE_2__.buildTaskForm)();
(0,_rightSidebarLogic__WEBPACK_IMPORTED_MODULE_6__.rightSidebarLogic)();

// createSidebarLogic()

/************** NEW STUFF ***************/







const createTaskData = (() => {
    let task1 = new _task__WEBPACK_IMPORTED_MODULE_4__.Task('Do Laundry', 'wash all clothes and towels', '10/01/22', 'HIGH', 'Errands');
    let task2 = new _task__WEBPACK_IMPORTED_MODULE_4__.Task('Do Homework', 'do all homework', '9/01/22', 'HIGH', 'School');
    let task3 = new _task__WEBPACK_IMPORTED_MODULE_4__.Task('Schedule Appointment', 'make an appoinment', '7/10/22', 'LOW',  'Errands');
    let task4 = new _task__WEBPACK_IMPORTED_MODULE_4__.Task('Order Package', 'order a box', '07/08/22', 'MEDIUM', 'School');
    let task5 = new _task__WEBPACK_IMPORTED_MODULE_4__.Task('Shave', 'shave beard with razor', '12/24/22', 'LOW', 'Errands');

    taskList.push(task1);
    taskList.push(task2);
    taskList.push(task3);
    taskList.push(task4);
    taskList.push(task5);

        
})();

let project1 = new _project__WEBPACK_IMPORTED_MODULE_5__.Project('Errands', 'simple errands I need to do');
    let project2 = new _project__WEBPACK_IMPORTED_MODULE_5__.Project('School', 'stuff related to school');

    projectList.push(project1);
    projectList.push(project2);

(0,_displayAllTasks__WEBPACK_IMPORTED_MODULE_7__.displayAllTasks)();



for (let i = 0; i < projectList.length; i++){
    (0,_createProject__WEBPACK_IMPORTED_MODULE_3__.createProject)(projectList[i]);
}

(0,_addToProjectSelect__WEBPACK_IMPORTED_MODULE_8__.addToProjectSelect)();

/************** NEW STUFF ***************/

(0,_showTaskDetails__WEBPACK_IMPORTED_MODULE_9__.showTaskDetails)();





/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
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

/***/ "./src/pushProject.js":
/*!****************************!*\
  !*** ./src/pushProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pushProject": () => (/* binding */ pushProject)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");




function pushProject() {

    let  projectName = document.getElementById('project-name');
    let projectDescription = document.getElementById('project-description');
 

    let project = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(projectName.value, projectDescription.value);

    (0,_createProject__WEBPACK_IMPORTED_MODULE_2__.createProject)(project);

    ___WEBPACK_IMPORTED_MODULE_0__.projectList.push(project);
    
    projectName.value = "";
    projectDescription.value = "";
};

/***/ }),

/***/ "./src/pushTask.js":
/*!*************************!*\
  !*** ./src/pushTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pushTask": () => (/* binding */ pushTask)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");




function pushTask() {

    let  title = document.getElementById('form-title');
    let description = document.getElementById('form-description');
    let date = document.getElementById('form-date');
    let priority = document.getElementById('form-priority');
    let project = document.getElementById('form-project')

    let task = new _task__WEBPACK_IMPORTED_MODULE_1__.Task(title.value, description.value, date.value, priority.value, project.value);
    ___WEBPACK_IMPORTED_MODULE_0__.taskList.push(task);

    (0,_createTask__WEBPACK_IMPORTED_MODULE_2__.createTask)(task);
    
    title.value = "";
    description.value = "";
    date.value = "";
    priority.value = "";
    project.value = "";

    console.log(___WEBPACK_IMPORTED_MODULE_0__.taskList);
};

/***/ }),

/***/ "./src/removeTableRows.js":
/*!********************************!*\
  !*** ./src/removeTableRows.js ***!
  \********************************/
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

/***/ "./src/rightSidebarLogic.js":
/*!**********************************!*\
  !*** ./src/rightSidebarLogic.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rightSidebarLogic": () => (/* binding */ rightSidebarLogic)
/* harmony export */ });
/* harmony import */ var _buildTaskFormDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildTaskFormDOM */ "./src/buildTaskFormDOM.js");
/* harmony import */ var _buildProjectFormDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildProjectFormDOM.js */ "./src/buildProjectFormDOM.js");
/* harmony import */ var _addToProjectSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addToProjectSelect */ "./src/addToProjectSelect.js");




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
            (0,_buildTaskFormDOM__WEBPACK_IMPORTED_MODULE_0__.buildTaskForm)();
            (0,_addToProjectSelect__WEBPACK_IMPORTED_MODULE_2__.addToProjectSelect)();

        };
    })();

    // project form switch
    const projectButtonLogic = (() => {
        document.getElementById('project-button').addEventListener('click', openTaskMenu);
        const content = document.getElementById('content');
        function openTaskMenu() {
            let button = document.getElementById('task-button');
            removeLastChild();
            (0,_buildProjectFormDOM_js__WEBPACK_IMPORTED_MODULE_1__.buildProjectForm)();

        };
    })();
}


/***/ }),

/***/ "./src/showTaskDetails.js":
/*!********************************!*\
  !*** ./src/showTaskDetails.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showTaskDetails": () => (/* binding */ showTaskDetails)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function showTaskDetails() {
    let task = ___WEBPACK_IMPORTED_MODULE_0__.taskList[0];
    console.log(___WEBPACK_IMPORTED_MODULE_0__.taskList[0]);
    console.log(task.title);
    console.log(task.description);
    console.log(task.dueDate);
    console.log(task.priority);
    console.log(task.project);
};



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxZQUFZLGNBQWMsT0FBTyxLQUFLLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxhQUFhLGFBQWEsWUFBWSxXQUFXLFlBQVksZUFBZSxXQUFXLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLGFBQWEsT0FBTyxNQUFNLFVBQVUsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsYUFBYSxPQUFPLE1BQU0sYUFBYSxjQUFjLFlBQVksV0FBVyxRQUFRLE1BQU0sYUFBYSxRQUFRLE9BQU8sU0FBUyxjQUFjLE1BQU0sWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxZQUFZLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxhQUFhLE1BQU0sVUFBVSxZQUFZLGNBQWMsYUFBYSxZQUFZLFlBQVksY0FBYyxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxRQUFRLGNBQWMsTUFBTSxZQUFZLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxVQUFVLFFBQVEsYUFBYSxNQUFNLGFBQWEsYUFBYSxZQUFZLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxX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QUNBOztBQUVBLHdCQUF3Qix1Q0FBUTs7QUFFaEM7QUFDQSxxQkFBcUI7Ozs7QUFJckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlNTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7Ozs7Ozs7Ozs7Ozs7OztBQ2RPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7OztBQzFDcUQ7QUFDQTs7QUFFOUM7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNB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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0VESVQtVEFTSy9kZWxldGVUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvRURJVC1UQVNLL2VkaXRDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvSE9NRVBBR0UvYnVpbGRGb3JtQmFySGVhZGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvSE9NRVBBR0UvYnVpbGRIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9IT01FUEFHRS9idWlsZE1haW4uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9IT01FUEFHRS9idWlsZFByb2plY3RCYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9IT01FUEFHRS9idWlsZFRhc2tGb2N1cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0hPTUVQQUdFL2hvbWVwYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFRvUHJvamVjdFNlbGVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2J1aWxkUHJvamVjdEZvcm1ET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9idWlsZFRhc2tGb3JtRE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5QWxsVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mb2N1c1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wdXNoUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3B1c2hUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcmVtb3ZlVGFibGVSb3dzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcmlnaHRTaWRlYmFyTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaG93VGFza0RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKioqKioqKioqKiB8fCBHRU5FUkFMIFNUWUxFUyB8fCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG46cm9vdCB7XFxuICAgIC0td2hpdGU6d2hpdGU7XFxuICAgIC0tc29vdGhpbmctYnJlZXplOiNiMmJlYzM7XFxuICAgIC0tZ3JheTojNjM2ZTcyO1xcbiAgICAtLWRhcms6IzJkMzQzNjtcXG4gICAgLS10YWJsZS1iYWNrZ3JvdW5kOiAjZGZlNmU5NDg7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuICAgIGh0bWwsXFxuICAgIGJvZHkge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAgICAgI2NvbnRlbnQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcblxcblxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDVmciAyZnI7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgODBweCAxMmZyIDZmcjtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuLyoqKioqKioqKioqIHx8IEhFQURFUiB8fCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG5cXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgYmFja2dyb3VuZDogcmdiKDEzMSw1OCwxODApO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTMxLDU4LDE4MCwxKSAwJSwgcmdiYSgyNTMsMjksMjksMSkgNTAlLCByZ2JhKDI1MiwxNzYsNjksMSkgMTAwJSk7XFxuXFxuXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLyoqKioqKioqKioqIHx8IE1BSU4gfHwgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLm1haW4ge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG5cXG59XFxuXFxuICAgIC50YXNrIHsgXFxuXFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1iYWNrZ3JvdW5kKTtcXG5cXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgfVxcblxcbiAgICAgICAgLmNvbHVtbi1wbGFjZWhvbGRlciB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgdGgge1xcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcXG5cXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDsgXFxuICAgICAgICB9XFxuXFxuICAgICAgICB0ZCB7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnRhc2stdGl0bGUtY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAudGFzay1zd2l0Y2gtYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXRhYmxlLWJhY2tncm91bmQpO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLnRhc2stc3dpdGNoLWJ1dHRvbjpmb2N1cyB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAudGFzay10aXRsZSB7XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgfVxcblxcblxcbiAgICBcXG4vKioqKioqKioqKiogfHwgUFJPSkVDVCBUQUJMRSBTSURFQkFSIHx8ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG4gICAgLnByb2plY3RzLWhlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRhYmxlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRhYmxlLWl0ZW0ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcblxcblxcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRhYmxlLWJ1dHRvbixcXG4gICAgLnByb2plY3QtdGFibGUtYnV0dG9uLXNlbGVjdGVkIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRhYmxlLWJ1dHRvbjpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRhYmxlLWJ1dHRvbjpmb2N1cyB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcblxcblxcblxcblxcblxcbi8qKioqKioqKioqKiB8fCBSSUdIVCBTSURFQkFSIEhFQURFUiB8fCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uZm9ybS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgY29sb3I6IHZhcih3aGl0ZSk7XFxuXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuICAgIC5hZGQge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgfVxcblxcbiAgICAuZm9ybS1oZWFkZXIgYnV0dG9uIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcblxcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICB9XFxuXFxuXFxuLyoqKioqKioqKioqIHx8IFJJR0hUIFNJREVCQVIgKFRBU0sgLyBQUk9KRUNUIEZPUk1TKSB8fCAqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuXFxuLnRhc2stZm9ybSB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDMgLyA1O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG5cXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59ICAgICAgXFxuXFxuICAgIC5mb3JtLWl0ZW0ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgICAgIGhlaWdodDogMTMwcHg7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAuZm9ybS1sYWJlbCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAuc3VibWl0LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAuc3VibWl0IHtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIH1cXG4gICAgXFxuXFxuLyoqKioqKioqKioqIHx8IFRBU0stRk9DVVMgfHwgKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi50YXNrLWZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDZmciAyZnI7XFxufVxcblxcbiAgICAuaW5mby1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuXFxuICAgIH1cXG5cXG4gICAgICAgIC5mb2N1cy1zZWN0aW9uIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFzay1pbmZvIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgfVxcblxcblxcbiAgICAgICAgI3RpdGxlLXNlY3Rpb24ge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjdGl0bGUtcGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICB9XFxuICAgIFxcblxcbiAgICAgICAgI2RhdGUtc2VjdGlvbiB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNkYXRlLXBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNSAvIDc7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgfVxcbiAgXFxuXFxuICAgICAgICAjcHJvamVjdC1mb2N1cy1zZWN0aW9uIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI3Byb2plY3QtZm9jdXMtcGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICB9XFxuXFxuXFxuICAgICAgICAjcHJpb3JpdHktc2VjdGlvbiB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNwcmlvcml0eS1wbGFjZWhvbGRlciB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDUgLyA3O1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIH1cXG5cXG5cXG4gICAgICAgICNkZXNjcmlwdGlvbi1zZWN0aW9uIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2Rlc2NyaXB0aW9uLXBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDc7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgfVxcblxcblxcbiAgICAuZm9jdXMtYnV0dG9uLXNlY3Rpb24ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB9XFxuICAgIFxcbiAgICAgICAgLmZvY3VzLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgLmZvY3VzLWJ1dHRvbiB7XFxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgICAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgIC5lZGl0LWlucHV0IHtcXG4gICAgICAgIGhlaWdodDogNzAlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7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Q2YsbUJBQW1CO1lBQ25CLGlCQUFpQjtRQUNyQjs7UUFFQTtZQUNJLGFBQWE7WUFDYixtQkFBbUI7O1lBRW5CLFlBQVk7WUFDWixlQUFlO1lBQ2YsbUJBQW1CO1FBQ3ZCOzs7UUFHQTtZQUNJLGtCQUFrQjtZQUNsQixlQUFlO1FBQ25COztRQUVBO1lBQ0ksa0JBQWtCO1lBQ2xCLGVBQWU7UUFDbkI7OztRQUdBO1lBQ0ksa0JBQWtCO1lBQ2xCLGVBQWU7UUFDbkI7O1FBRUE7WUFDSSxrQkFBa0I7WUFDbEIsZUFBZTtRQUNuQjs7O1FBR0E7WUFDSSxrQkFBa0I7WUFDbEIsZUFBZTtRQUNuQjs7UUFFQTtZQUNJLGtCQUFrQjtZQUNsQixlQUFlO1FBQ25COzs7UUFHQTtZQUNJLGtCQUFrQjtZQUNsQixlQUFlO1FBQ25COztRQUVBO1lBQ0ksa0JBQWtCO1lBQ2xCLGVBQWU7UUFDbkI7OztRQUdBO1lBQ0ksa0JBQWtCO1lBQ2xCLGVBQWU7UUFDbkI7O1FBRUE7WUFDSSxrQkFBa0I7WUFDbEIsZUFBZTtRQUNuQjs7O0lBR0o7UUFDSSw2QkFBNkI7UUFDN0IsYUFBYTtRQUNiLDhCQUE4QjtJQUNsQzs7UUFFSTtZQUNJLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsbUJBQW1CO1lBQ25CLG9CQUFvQjtRQUN4Qjs7UUFFQTtZQUNJLFlBQVk7WUFDWixZQUFZOztZQUVaLDZCQUE2QjtZQUM3QixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLHVCQUF1Qjs7WUFFdkIsZUFBZTs7UUFFbkI7O0lBRUo7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO0lBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKioqKioqKioqKiB8fCBHRU5FUkFMIFNUWUxFUyB8fCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG46cm9vdCB7XFxuICAgIC0td2hpdGU6d2hpdGU7XFxuICAgIC0tc29vdGhpbmctYnJlZXplOiNiMmJlYzM7XFxuICAgIC0tZ3JheTojNjM2ZTcyO1xcbiAgICAtLWRhcms6IzJkMzQzNjtcXG4gICAgLS10YWJsZS1iYWNrZ3JvdW5kOiAjZGZlNmU5NDg7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuICAgIGh0bWwsXFxuICAgIGJvZHkge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAgICAgI2NvbnRlbnQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcblxcblxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDVmciAyZnI7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgODBweCAxMmZyIDZmcjtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuLyoqKioqKioqKioqIHx8IEhFQURFUiB8fCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG5cXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgYmFja2dyb3VuZDogcmdiKDEzMSw1OCwxODApO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTMxLDU4LDE4MCwxKSAwJSwgcmdiYSgyNTMsMjksMjksMSkgNTAlLCByZ2JhKDI1MiwxNzYsNjksMSkgMTAwJSk7XFxuXFxuXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLyoqKioqKioqKioqIHx8IE1BSU4gfHwgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLm1haW4ge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG5cXG59XFxuXFxuICAgIC50YXNrIHsgXFxuXFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1iYWNrZ3JvdW5kKTtcXG5cXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgfVxcblxcbiAgICAgICAgLmNvbHVtbi1wbGFjZWhvbGRlciB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgdGgge1xcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcXG5cXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDsgXFxuICAgICAgICB9XFxuXFxuICAgICAgICB0ZCB7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnRhc2stdGl0bGUtY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAudGFzay1zd2l0Y2gtYnV0dG9uIHtcXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXRhYmxlLWJhY2tncm91bmQpO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLnRhc2stc3dpdGNoLWJ1dHRvbjpmb2N1cyB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAudGFzay10aXRsZSB7XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgfVxcblxcblxcbiAgICBcXG4vKioqKioqKioqKiogfHwgUFJPSkVDVCBUQUJMRSBTSURFQkFSIHx8ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG4gICAgLnByb2plY3RzLWhlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRhYmxlIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRhYmxlLWl0ZW0ge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcblxcblxcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRhYmxlLWJ1dHRvbixcXG4gICAgLnByb2plY3QtdGFibGUtYnV0dG9uLXNlbGVjdGVkIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRhYmxlLWJ1dHRvbjpob3ZlcntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LXRhYmxlLWJ1dHRvbjpmb2N1cyB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgfVxcblxcblxcblxcblxcblxcbi8qKioqKioqKioqKiB8fCBSSUdIVCBTSURFQkFSIEhFQURFUiB8fCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uZm9ybS1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgY29sb3I6IHZhcih3aGl0ZSk7XFxuXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuICAgIC5hZGQge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgfVxcblxcbiAgICAuZm9ybS1oZWFkZXIgYnV0dG9uIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcblxcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICB9XFxuXFxuXFxuLyoqKioqKioqKioqIHx8IFJJR0hUIFNJREVCQVIgKFRBU0sgLyBQUk9KRUNUIEZPUk1TKSB8fCAqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuXFxuLnRhc2stZm9ybSB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDMgLyA1O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG5cXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59ICAgICAgXFxuXFxuICAgIC5mb3JtLWl0ZW0ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgICAgIGhlaWdodDogMTMwcHg7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAuZm9ybS1sYWJlbCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAuc3VibWl0LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAuc3VibWl0IHtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIH1cXG4gICAgXFxuXFxuLyoqKioqKioqKioqIHx8IFRBU0stRk9DVVMgfHwgKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi50YXNrLWZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDZmciAyZnI7XFxufVxcblxcbiAgICAuaW5mby1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuXFxuICAgIH1cXG5cXG4gICAgICAgIC5mb2N1cy1zZWN0aW9uIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFzay1pbmZvIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgfVxcblxcblxcbiAgICAgICAgI3RpdGxlLXNlY3Rpb24ge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjdGl0bGUtcGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICB9XFxuICAgIFxcblxcbiAgICAgICAgI2RhdGUtc2VjdGlvbiB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNkYXRlLXBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNSAvIDc7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgfVxcbiAgXFxuXFxuICAgICAgICAjcHJvamVjdC1mb2N1cy1zZWN0aW9uIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI3Byb2plY3QtZm9jdXMtcGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICB9XFxuXFxuXFxuICAgICAgICAjcHJpb3JpdHktc2VjdGlvbiB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNwcmlvcml0eS1wbGFjZWhvbGRlciB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDUgLyA3O1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIH1cXG5cXG5cXG4gICAgICAgICNkZXNjcmlwdGlvbi1zZWN0aW9uIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2Rlc2NyaXB0aW9uLXBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDc7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgfVxcblxcblxcbiAgICAuZm9jdXMtYnV0dG9uLXNlY3Rpb24ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB9XFxuICAgIFxcbiAgICAgICAgLmZvY3VzLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgLmZvY3VzLWJ1dHRvbiB7XFxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgICAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgIC5lZGl0LWlucHV0IHtcXG4gICAgICAgIGhlaWdodDogNzAlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0YXNrTGlzdCB9IGZyb20gXCIuLlwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuLi90YXNrXCI7XG5pbXBvcnQgeyBkaXNwbGF5QWxsVGFza3MgfSBmcm9tIFwiLi4vZGlzcGxheUFsbFRhc2tzXCI7XG5pbXBvcnQgeyByZW1vdmVUYWJsZVJvd3MgfSBmcm9tIFwiLi4vcmVtb3ZlVGFibGVSb3dzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKCl7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLXBsYWNlaG9sZGVyJyk7XG4gICAgICAgIGlmICh0YXNrTGlzdFtpXS50aXRsZSA9PSB0aXRsZS5pbm5lclRleHQpe1xuICAgICAgICAgICAgZGVsZXRlIHRhc2tMaXN0W2ldO1xuICAgICAgICAgICAgdGFza0xpc3RbaV0gPSBuZXcgVGFzayhcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIpO1xuICAgICAgICAgICAgcmVtb3ZlVGFibGVSb3dzKCk7XG4gICAgICAgICAgICByZXR1cm4gZGlzcGxheUFsbFRhc2tzKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICBcbiAgICB9XG4gICAgXG59OyIsImltcG9ydCB7IHRhc2tMaXN0IH0gZnJvbSBcIi4uXCI7XG5cbi8vIGtlZXBzIHRyYWNrIG9mIHRhc2sgYmVpbmcgZWRpdGVkXG5sZXQgIGFycmF5TnVtID0gMDtcblxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRhc2sodGFzaykge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1wbGFjZWhvbGRlcicpO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtcGxhY2Vob2xkZXInKTtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvY3VzLXBsYWNlaG9sZGVyJyk7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5LXBsYWNlaG9sZGVyJyk7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLXBsYWNlaG9sZGVyJyk7XG5cbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm8tY29udGFpbmVyJyk7XG5cblxuICAgIGNvbnN0IHNlbGVjdFRhc2sgPSAoKCkgPT4ge1xuICAgICAgICBmb3IobGV0IGkgPTA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7aSsrICl7XG4gICAgICAgICAgICBpZiAodGFza0xpc3RbaV0udGl0bGUgPT0gdGl0bGUuaW5uZXJUZXh0KXtcbiAgICAgICAgICAgICAgICBhcnJheU51bSA9IGk7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVJbnB1dHMgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlVGl0bGVJbnB1dCA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0aXRsZS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2VkaXQtaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGUtcGxhY2Vob2xkZXInO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKHRpdGxlSW5wdXQsIGNvbnRhaW5lci5jaGlsZE5vZGVzWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZURlc2NyaXB0aW9uSW5wdXQgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gZGVzY3JpcHRpb24uaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdlZGl0LWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2Rlc2NyaXB0aW9uLXBsYWNlaG9sZGVyJ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKGRlc2NyaXB0aW9uSW5wdXQsIGNvbnRhaW5lci5jaGlsZE5vZGVzWzNdKTtcbiAgICAgICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZURhdGVJbnB1dCA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gZGF0ZS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZWRpdC1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUlucHV0LmlkID0gJ2RhdGUtcGxhY2Vob2xkZXInXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoZGF0ZUlucHV0LCBjb250YWluZXIuY2hpbGROb2Rlc1s1XSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVQcmlvcml0eUlucHV0ID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IHByaW9yaXR5LmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZCgnZWRpdC1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5pZCA9ICdwcmlvcml0eS1wbGFjZWhvbGRlcidcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChwcmlvcml0eUlucHV0LCBjb250YWluZXIuY2hpbGROb2Rlc1s3XSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0SW5wdXQgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJbnB1dC52YWx1ZSA9IHByb2plY3QuaW5uZXJUZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoJ2VkaXQtaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJbnB1dC5pZCA9ICdwcm9qZWN0LWZvY3VzLXBsYWNlaG9sZGVyJ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKHByb2plY3RJbnB1dCwgY29udGFpbmVyLmNoaWxkTm9kZXNbOV0pO1xuICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRUb1N1Ym1pdCA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1idXR0b24tY29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBzdWJtaXRFZGl0LmlkID0gJ3N1Ym1pdC1lZGl0LWJ1dHRvbic7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEVkaXQuY2xhc3NMaXN0LmFkZCgnZm9jdXMtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHN1Ym1pdEVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlRWRpdCk7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEVkaXQuaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG5cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLnJlcGxhY2VDaGlsZChzdWJtaXRFZGl0LCBidXR0b25Db250YWluZXIuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRhc2tTdWJtaXRIYW5kbGVyKGV2ZW50KXtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgbWFrZUVkaXQoKTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUZvcm0gPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRm9jdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1mb2N1cycpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvY3VzRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNGb3JtLm9uc3VibWl0ID0gdGFza1N1Ym1pdEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvY3VzRm9ybS5pZCA9ICd0YXNrLWZvY3VzJztcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNGb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9jdXMnKTtcblxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGFza0ZvY3VzLmNoaWxkTm9kZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c0Zvcm0uYXBwZW5kQ2hpbGQodGFza0ZvY3VzLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkKGZvY3VzRm9ybSwgY29udGVudC5jaGlsZE5vZGVzWzRdKTtcbiAgICAgICAgICAgICAgICB9KSgpO1xuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbWFrZUVkaXQoKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV2ZXJ0SW5wdXRzID0gKCgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUVkaXQuaW5uZXJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLXBsYWNlaG9sZGVyJykudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUVkaXQuaWQgPSAndGl0bGUtcGxhY2Vob2xkZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVFZGl0LmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdFthcnJheU51bV0udGl0bGUgPSB0aXRsZUVkaXQuaW5uZXJUZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKHRpdGxlRWRpdCwgY29udGFpbmVyLmNoaWxkTm9kZXNbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25FZGl0LmlubmVyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi1wbGFjZWhvbGRlcicpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25FZGl0LmlkID0gJ2Rlc2NyaXB0aW9uLXBsYWNlaG9sZGVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uRWRpdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWluZm8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0xpc3RbYXJyYXlOdW1dLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25FZGl0LmlubmVyVGV4dDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChkZXNjcmlwdGlvbkVkaXQsIGNvbnRhaW5lci5jaGlsZE5vZGVzWzNdKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUVkaXQuaW5uZXJUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtcGxhY2Vob2xkZXInKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVFZGl0LmlkID0gJ2RhdGUtcGxhY2Vob2xkZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUVkaXQuY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tMaXN0W2FycmF5TnVtXS5kdWVEYXRlID0gZGF0ZUVkaXQuaW5uZXJUZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKGRhdGVFZGl0LCBjb250YWluZXIuY2hpbGROb2Rlc1s1XSk7XG5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5RWRpdC5pbm5lclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktcGxhY2Vob2xkZXInKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5RWRpdC5pZCA9ICdwcmlvcml0eS1wbGFjZWhvbGRlcic7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUVkaXQuY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tMaXN0W2FycmF5TnVtXS5wcmlvcml0eSA9IHByaW9yaXR5RWRpdC5pbm5lclRleHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQocHJpb3JpdHlFZGl0LCBjb250YWluZXIuY2hpbGROb2Rlc1s3XSk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RFZGl0LmlubmVyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvY3VzLXBsYWNlaG9sZGVyJykudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0RWRpdC5pZCA9ICdwcm9qZWN0LWZvY3VzLXBsYWNlaG9sZGVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RFZGl0LmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mbycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdFthcnJheU51bV0ucHJvamVjdCA9IHByb2plY3RFZGl0LmlubmVyVGV4dDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChwcm9qZWN0RWRpdCwgY29udGFpbmVyLmNoaWxkTm9kZXNbOV0pO1xuICAgICAgICAgICAgICAgICAgICB9KSgpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXRUb0VkaXQgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWJ1dHRvbi1jb250YWluZXInKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pdFRvRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0VG9FZGl0LmlkID0gJ3N1Ym1pdC1lZGl0LWJ1dHRvbic7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRUb0VkaXQuY2xhc3NMaXN0LmFkZCgnZm9jdXMtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRUb0VkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdWJtaXRFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZUVkaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0VG9FZGl0LmlubmVyVGV4dCA9ICdFZGl0JztcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoc3VibWl0VG9FZGl0LCBidXR0b25Db250YWluZXIuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzdHJveUZvcm0gPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0ZvY3VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9jdXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb2N1c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNEaXYuaWQgPSAndGFzay1mb2N1cyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvY3VzJyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGFza0ZvY3VzLmNoaWxkTm9kZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNEaXYuYXBwZW5kQ2hpbGQodGFza0ZvY3VzLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkKGZvY3VzRGl2LCBjb250ZW50LmNoaWxkTm9kZXNbNF0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfSkoKTtcbiAgICBcbn07XG5cbi8vIGRlc2NyaXB0aW9uIDNcbi8vIGRhdGUgNVxuLy9wcmlvcml0eSA3IFxuLy8gcHJvamVjdC1mb2N1cyA5XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRGb3JtQmFySGVhZGVyKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUhlYWRlci5jbGFzc0xpc3QuYWRkKCdmb3JtLWhlYWRlcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybUhlYWRlcik7XG4gICAgXG5cbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWRkLmNsYXNzTGlzdC5hZGQoJ2FkZCcpO1xuICAgIGFkZC5pbm5lclRleHQgPSAnQWRkJztcbiAgICBmb3JtSGVhZGVyLmFwcGVuZENoaWxkKGFkZCk7XG5cbiAgICBjb25zdCBjcmVhdGVUYXNrQnV0dG9uID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0J1dHRvbiA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ1dHRvbicpO1xuICAgICAgICB0YXNrQnV0dG9uLmlkID0gJ3Rhc2stYnV0dG9uJztcbiAgICAgICAgdGFza0J1dHRvbi5pbm5lclRleHQgPSAnVGFzayc7XG4gICAgICAgIGZvcm1IZWFkZXIuYXBwZW5kQ2hpbGQodGFza0J1dHRvbik7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3RCdXR0b24uaWQgPSAncHJvamVjdC1idXR0b24nO1xuICAgICAgICBwcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdQcm9qZWN0JztcbiAgICAgICAgZm9ybUhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKTtcbiAgICB9KSgpOyAgXG59OyAiLCJmdW5jdGlvbiBidWlsZEhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuaWQgPSAnaGVhZGVyJztcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IGJ1aWxkVGl0bGUgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgdGl0bGUuaWQgPSAndGl0bGUnO1xuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlLmlubmVyVGV4dCA9ICdUbyBEbyBMaXN0JztcbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgfSkoKTtcbn07XG5cbmV4cG9ydCB7IGJ1aWxkSGVhZGVyIH07IiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWFpbiAoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmlkID0gJ21haW4nO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICBjb25zdCBidWlsZFRhYmxlID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgICAgICB0YWJsZS5pZCA9ICd0YXNrLXRhYmxlJztcbiAgICAgICAgdGFibGUuY2xhc3NMaXN0LmFkZCA9ICd0YXNrLXRhYmxlJztcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0YWJsZSk7XG5cbiAgICAgICAgY29uc3QgYnVpbGRUYWJsZUhlYWRlciA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YWJsZUhlYWRlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgICAgICB0YWJsZUhlYWRlclJvdy5jbGFzc0xpc3QuYWRkKCdjb2x1bW4taGVhZGVyJyk7XG4gICAgICAgICAgICB0YWJsZUhlYWRlclJvdy5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0YWJsZUhlYWRlclJvdyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbHVtblBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgIGNvbHVtblBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbi1oZWFkZXInKTtcbiAgICAgICAgICAgIGNvbHVtblBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbi1wbGFjZWhvbGRlcicpO1xuICAgICAgICAgICAgY29sdW1uUGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICB0YWJsZUhlYWRlclJvdy5hcHBlbmRDaGlsZChjb2x1bW5QbGFjZWhvbGRlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgY29sdW1uMS5jbGFzc0xpc3QuYWRkKCdjb2x1bW4taGVhZGVyJyk7XG4gICAgICAgICAgICBjb2x1bW4xLmlubmVyVGV4dCA9ICdUYXNrJztcbiAgICAgICAgICAgIHRhYmxlSGVhZGVyUm93LmFwcGVuZENoaWxkKGNvbHVtbjEpO1xuXG4gICAgICAgICAgICBjb25zdCBjb2x1bW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgIGNvbHVtbjIuY2xhc3NMaXN0LmFkZCgnY29sdW1uLWhlYWRlcicpO1xuICAgICAgICAgICAgY29sdW1uMi5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZS1kYXRlJyk7XG4gICAgICAgICAgICBjb2x1bW4yLmlubmVyVGV4dCA9ICdEYXRlLUR1ZSc7XG4gICAgICAgICAgICB0YWJsZUhlYWRlclJvdy5hcHBlbmRDaGlsZChjb2x1bW4yKTtcblxuICAgICAgICAgICAgY29uc3QgY29sdW1uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICBjb2x1bW4zLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbi1oZWFkZXInKTtcbiAgICAgICAgICAgIGNvbHVtbjMuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUtZGF0ZScpO1xuICAgICAgICAgICAgY29sdW1uMy5pbm5lckhUTUwgPSAnQ29tcGxldGVkPyc7XG4gICAgICAgICAgICB0YWJsZUhlYWRlclJvdy5hcHBlbmRDaGlsZChjb2x1bW4zKTtcbiAgICAgICAgfSkoKTtcbiAgICB9KSgpO1xufTsiLCJpbXBvcnQgeyByZW1vdmVUYWJsZVJvd3MgfSBmcm9tIFwiLi4vcmVtb3ZlVGFibGVSb3dzXCI7XG5pbXBvcnQgeyBkaXNwbGF5QWxsVGFza3MgfSBmcm9tIFwiLi4vZGlzcGxheUFsbFRhc2tzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFNpZGViYXIgKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyLmlkID0gJ3NpZGViYXInO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgICBjb25zdCBzaWRlYmFySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzaWRlYmFySGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWhlYWRlcicpO1xuICAgIHNpZGViYXJIZWFkZXIuaW5uZXJUZXh0ID0gJ1Byb2plY3RzJztcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJIZWFkZXIpO1xuXG4gICAgY29uc3QgQnVpbGRQcm9qZWN0VGFibGUgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgICAgICBwcm9qZWN0VGFibGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YWJsZScpO1xuICAgICAgICBwcm9qZWN0VGFibGUuaWQgPSAncHJvamVjdC10YWJsZSc7XG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRhYmxlKTtcblxuICAgICAgICBjb25zdCBidWlsZFRhYmxlSGVhZGVyID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlSGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgICAgIHRhYmxlSGVhZGVyUm93LmNsYXNzTGlzdC5hZGQoJ2NvbHVtbi1oZWFkZXInKTtcbiAgICAgICAgICAgIHRhYmxlSGVhZGVyUm93LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgICAgIHByb2plY3RUYWJsZS5hcHBlbmRDaGlsZCh0YWJsZUhlYWRlclJvdyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICBjb2x1bW5IZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29sdW1uLWhlYWRlcicpO1xuICAgICAgICAgICAgY29sdW1uSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaGVhZGVyJyk7XG4gICAgICAgICAgICBjb2x1bW5IZWFkZXIuaW5uZXJUZXh0ID0gJ1Byb2plY3RzJztcbiAgICAgICAgICAgIHRhYmxlSGVhZGVyUm93LmFwcGVuZENoaWxkKGNvbHVtbkhlYWRlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGJ1aWxkQWxsUm93ID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFsbFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgICAgICBhbGxSb3cuY2xhc3NMaXN0LmFkZCgnYWxsLXJvdycpO1xuICAgICAgICAgICAgcHJvamVjdFRhYmxlLmFwcGVuZENoaWxkKGFsbFJvdyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVRhYmxlQnV0dG9uID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgIGFsbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYmxlLWl0ZW0nKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBhbGxSb3cuYXBwZW5kQ2hpbGQoYWxsKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5pZCA9ICdhbGwtcHJvamVjdHMnO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYmxlLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSAnQWxsIFByb2plY3RzJ1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVRhYmxlUm93cylcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWxsVGFza3MpXG5cbiAgICAgICAgICAgICAgICBhbGwuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICBcblxuICAgICAgICB9KSgpO1xuICAgIH0pKCk7XG59OyAiLCJpbXBvcnQgeyBlZGl0VGFzayB9IGZyb20gXCIuLi9FRElULVRBU0svZWRpdENvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGRlbGV0ZVRhc2sgfSBmcm9tIFwiLi4vRURJVC1UQVNLL2RlbGV0ZVRhc2tcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVGFza0ZvY3VzKCkge1xuXG4gICAgbGV0IHRhc2tGb2N1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tGb2N1cy5pZCA9ICd0YXNrLWZvY3VzJztcbiAgICB0YXNrRm9jdXMuY2xhc3NMaXN0LmFkZCgndGFzay1mb2N1cycpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0ZvY3VzKTtcblxuICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvQ29udGFpbmVyLmlkID0gJ2luZm8tY29udGFpbmVyJztcbiAgICBpbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2luZm8tY29udGFpbmVyJyk7XG4gICAgdGFza0ZvY3VzLmFwcGVuZENoaWxkKGluZm9Db250YWluZXIpO1xuXG4gICAgY29uc3QgY3JlYXRlVGl0bGVTZWN0aW9uID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb2N1cy1zZWN0aW9uJyk7XG4gICAgICAgIHRpdGxlU2VjdGlvbi5pZCA9ICgndGl0bGUtc2VjdGlvbicpO1xuICAgICAgICB0aXRsZVNlY3Rpb24uaW5uZXJUZXh0ID0gJ1RpdGxlIDogJztcbiAgICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZVNlY3Rpb24pO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlUGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGVQbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKCd0YXNrLWluZm8nKTtcbiAgICAgICAgdGl0bGVQbGFjZWhvbGRlci5pZCA9ICd0aXRsZS1wbGFjZWhvbGRlcic7XG4gICAgICAgIHRpdGxlUGxhY2Vob2xkZXIuaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVQbGFjZWhvbGRlcik7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNyZWF0ZURlc2NyaXB0aW9uU2VjdGlvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjcmlwdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9jdXMtc2VjdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvblNlY3Rpb24uaWQgPSAoJ2Rlc2NyaXB0aW9uLXNlY3Rpb24nKTtcbiAgICAgICAgZGVzY3JpcHRpb25TZWN0aW9uLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbjogJztcbiAgICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblNlY3Rpb24pO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uUGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVzY3JpcHRpb25QbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKCd0YXNrLWluZm8nKTtcbiAgICAgICAgZGVzY3JpcHRpb25QbGFjZWhvbGRlci5pZCA9ICdkZXNjcmlwdGlvbi1wbGFjZWhvbGRlcic7XG4gICAgICAgIGRlc2NyaXB0aW9uUGxhY2Vob2xkZXIuaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QbGFjZWhvbGRlcik7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNyZWF0ZURhdGVTZWN0aW9uID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF0ZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9jdXMtc2VjdGlvbicpO1xuICAgICAgICBkYXRlU2VjdGlvbi5pZCA9ICgnZGF0ZS1zZWN0aW9uJyk7XG4gICAgICAgIGRhdGVTZWN0aW9uLmlubmVyVGV4dCA9ICdEYXRlOiAnO1xuICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVTZWN0aW9uKTtcblxuICAgICAgICBjb25zdCBkYXRlUGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF0ZVBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mbycpO1xuICAgICAgICBkYXRlUGxhY2Vob2xkZXIuaWQgPSAnZGF0ZS1wbGFjZWhvbGRlcic7XG4gICAgICAgIGRhdGVQbGFjZWhvbGRlci5pbm5lclRleHQgPSAnJztcbiAgICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlUGxhY2Vob2xkZXIpO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjcmVhdGVQcmlvcml0eVNlY3Rpb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmlvcml0eVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJpb3JpdHlTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzLXNlY3Rpb24nKTtcbiAgICAgICAgcHJpb3JpdHlTZWN0aW9uLmlkID0gKCdwcmlvcml0eS1zZWN0aW9uJyk7XG4gICAgICAgIHByaW9yaXR5U2VjdGlvbi5pbm5lclRleHQgPSAnUHJpb3JpdHk6ICc7XG4gICAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWN0aW9uKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eVBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByaW9yaXR5UGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJyk7XG4gICAgICAgIHByaW9yaXR5UGxhY2Vob2xkZXIuaWQgPSAncHJpb3JpdHktcGxhY2Vob2xkZXInO1xuICAgICAgICBwcmlvcml0eVBsYWNlaG9sZGVyLmlubmVyVGV4dCA9ICcnO1xuICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5UGxhY2Vob2xkZXIpO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0U2VjdGlvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzLXNlY3Rpb24nKTtcbiAgICAgICAgcHJvamVjdFNlY3Rpb24uaWQgPSAoJ3Byb2plY3QtZm9jdXMtc2VjdGlvbicpO1xuICAgICAgICBwcm9qZWN0U2VjdGlvbi5pbm5lclRleHQgPSAnUHJvamVjdDogJztcbiAgICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0U2VjdGlvbik7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RQbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKCd0YXNrLWluZm8nKTtcbiAgICAgICAgcHJvamVjdFBsYWNlaG9sZGVyLmlkID0gJ3Byb2plY3QtZm9jdXMtcGxhY2Vob2xkZXInO1xuICAgICAgICBwcm9qZWN0UGxhY2Vob2xkZXIuaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFBsYWNlaG9sZGVyKTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uU2VjdGlvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb2N1cy1idXR0b24tc2VjdGlvbicpO1xuICAgICAgICBidXR0b25TZWN0aW9uLmlkID0gJ2ZvY3VzLWJ1dHRvbi1zZWN0aW9uJztcbiAgICAgICAgdGFza0ZvY3VzLmFwcGVuZENoaWxkKGJ1dHRvblNlY3Rpb24pO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZUVkaXRCdXR0b24gPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZWRpdEJ1dHRvbkNvbnRhaW5lci5pZCA9ICdlZGl0LWJ1dHRvbi1jb250YWluZXInO1xuICAgICAgICAgICAgZWRpdEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb2N1cy1idXR0b24tY29udGFpbmVyJyk7XG4gICAgICAgICAgICBidXR0b25TZWN0aW9uLmFwcGVuZENoaWxkKGVkaXRCdXR0b25Db250YWluZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzLWJ1dHRvbicpO1xuICAgICAgICAgICAgZWRpdEJ1dHRvbi5pbm5lclRleHQgPSAnRWRpdCc7XG4gICAgICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRhc2spO1xuICAgICAgICAgICAgZWRpdEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBjb25zdCBjcmVhdGVEZWxldGVCdXR0b24gPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZWxldGVCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9jdXMtYnV0dG9uLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgYnV0dG9uU2VjdGlvbi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b25Db250YWluZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb2N1cy1idXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAnRGVsZXRlJztcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRhc2spO1xuICAgICAgICAgICBkZWxldGVCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgfSkoKTtcbiAgICB9KSgpO1xufTsiLCJpbXBvcnQgeyBidWlsZEhlYWRlciB9IGZyb20gXCIuL2J1aWxkSGVhZGVyXCI7XG5pbXBvcnQgeyBidWlsZFNpZGViYXIgfSBmcm9tIFwiLi9idWlsZFByb2plY3RCYXJcIjtcbmltcG9ydCB7IGJ1aWxkTWFpbiB9IGZyb20gXCIuL2J1aWxkTWFpblwiO1xuaW1wb3J0IHsgYnVpbGRGb3JtQmFySGVhZGVyIH0gZnJvbSBcIi4vYnVpbGRGb3JtQmFySGVhZGVyXCI7XG5pbXBvcnQgeyBidWlsZFRhc2tGb2N1cyB9IGZyb20gXCIuL2J1aWxkVGFza0ZvY3VzXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuXG4gICAgY29uc3QgZGVmaW5lQ29udGVudCA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIH0pKCk7XG5cbiAgICBidWlsZEhlYWRlcigpO1xuICAgIGJ1aWxkU2lkZWJhcigpO1xuICAgIGJ1aWxkTWFpbigpO1xuICAgIGJ1aWxkRm9ybUJhckhlYWRlcigpO1xuICAgIGJ1aWxkVGFza0ZvY3VzKCk7ICAgXG59O1xuXG5cblxuIiwiaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLlwiO1xuXG4gIFxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvUHJvamVjdFNlbGVjdCgpIHtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1wcm9qZWN0Jyk7XG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IHByb2plY3RMaXN0W2ldLm5hbWU7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3RMaXN0W2ldLm5hbWU7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHB1c2hQcm9qZWN0IH0gZnJvbSBcIi4vcHVzaFByb2plY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUHJvamVjdEZvcm0oKSB7XG5cbiAgICAvLyBjaGFuZ2UgY29sb3Igb2Ygc2VsZWN0ZWQgYnV0dG9uXG4gICAgY29uc3QgY2hhbmdlQnV0dG9uQ29sb3IgPSAoKCkgPT4ge1xuICAgICAgICBsZXQgdGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWJ1dHRvbicpO1xuICAgICAgICB0YXNrQnV0dG9uLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcblxuICAgICAgICBsZXQgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWJ1dHRvbicpO1xuICAgICAgICBwcm9qZWN0QnV0dG9uLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7ICBcblxuICAgIC8qKioqIFBVU0ggUFJPSkVDVCBGVU5DVElPTiAqKioqKioqKi9cbiAgICBmdW5jdGlvbiBwcm9qZWN0U3VibWl0SGFuZGxlcihldmVudCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHB1c2hQcm9qZWN0KCk7XG4gICAgfVxuICAgIC8qKioqIFBVU0ggUFJPSkVDVCBGVU5DVElPTiAqKioqKioqKi9cblxuICAgIC8vIGJ1aWxkIGZvcm0gXG4gICAgY29uc3QgYnVpbGRBZGRCYXIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgcHJvamVjdEZvcm0ub25zdWJtaXQgPSBwcm9qZWN0U3VibWl0SGFuZGxlcjtcbiAgICAgICAgcHJvamVjdEZvcm0uaWQgPSAnZm9ybSc7XG4gICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybScpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcblxuXG4gICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3ROYW1lID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtSXRlbS5jbGFzc0xpc3QuYWRkKCdmb3JtLWl0ZW0nKVxuICAgICAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0ZW0pO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIG5hbWVMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJyk7XG4gICAgICAgICAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdC1uYW1lJyk7XG4gICAgICAgICAgICBuYW1lTGFiZWwuaW5uZXJUZXh0ID0gJ1Byb2plY3QgTmFtZSc7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICAgICAgICAgIHByb2plY3ROYW1lSW5wdXQuaWQgPSAncHJvamVjdC1uYW1lJztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuICAgICAgICB9KSgpO1xuICAgIFxuICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0RGVzY3JpcHRpb24gPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvcm1JdGVtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taXRlbScpXG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtSXRlbSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb25MYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJyk7XG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb25MYWJlbC5pbm5lclRleHQgPSAnUHJvamVjdCBEZXNjcmlwdGlvbic7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb25MYWJlbCk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0RGVzY3JpcHRpb25JbnB1dC5pZCA9ICdwcm9qZWN0LWRlc2NyaXB0aW9uJztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbklucHV0KTsgIFxuICAgICAgICB9KSgpOyAgXG5cbiAgICAgICAgY29uc3QgYWRkU3VibWl0ID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3VibWl0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1jb250YWluZXInKTtcbiAgICAgICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdENvbnRhaW5lcik7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdzdWJtaXQnKTtcbiAgICAgICAgICAgIHN1Ym1pdC5pbm5lclRleHQgPSAnQWRkJztcbiAgICAgICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0JylcbiAgICAgICAgICAgIHN1Ym1pdENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgICAgICB9KSgpO1xuICAgIH0pKCk7ICAgICAgXG59OyIsIlxuaW1wb3J0IHsgcHVzaFRhc2sgfSBmcm9tIFwiLi9wdXNoVGFza1wiO1xuaW1wb3J0IHsgZm9jdXNUYXNrIH0gZnJvbSBcIi4vZm9jdXNUYXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFRhc2tGb3JtKCkge1xuXG5cbiAgICAvLyBjaGFuZ2UgY29sb3Igb2Ygc2VsZWN0ZWQgYnV0dG9uXG4gICAgY29uc3QgY2hhbmdlQnV0dG9uQ29sb3IgPSAoKCkgPT4ge1xuICAgICAgICBsZXQgdGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWJ1dHRvbicpO1xuICAgICAgICB0YXNrQnV0dG9uLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcblxuICAgICAgICBsZXQgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWJ1dHRvbicpO1xuICAgICAgICBwcm9qZWN0QnV0dG9uLnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgICB9KSgpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpOyAgXG5cbiAgICAvKioqKiBQVVNIIFRBU0sgRlVOQ1RJT04gKioqKioqKiovXG4gICAgZnVuY3Rpb24gdGFza1N1Ym1pdEhhbmRsZXIoZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwdXNoVGFzaygpO1xuICAgIH1cbiAgICAvKioqKiBQVVNIIFRBU0sgRlVOQ1RJT04gKioqKioqKiovXG5cbiAgICAvLyBidWlsZCBmb3JtIFxuICAgIGNvbnN0IGJ1aWxkQWRkQmFyID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIHRhc2tGb3JtLm9uc3VibWl0ID0gdGFza1N1Ym1pdEhhbmRsZXI7XG4gICAgICAgIHRhc2tGb3JtLmlkID0gJ3Rhc2stZm9ybSc7XG4gICAgICAgIFxuICAgICAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG5cbiAgICAgICAgY29uc3QgZm9ybVRpdGxlID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtSXRlbS5jbGFzc0xpc3QuYWRkKCdmb3JtLWl0ZW0nKVxuICAgICAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0ZW0pO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICB0aXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbGFiZWwnKTtcbiAgICAgICAgICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZm9ybS10aXRsZScpO1xuICAgICAgICAgICAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSAnVGl0bGUnO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgICAgICAgICAgdGl0bGVJbnB1dC5pZCA9ICdmb3JtLXRpdGxlJztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICB9KSgpO1xuICAgIFxuICAgICAgICBjb25zdCBmb3JtRGVzY3JpcHRpb24gPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvcm1JdGVtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taXRlbScpXG4gICAgICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChmb3JtSXRlbSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1sYWJlbCcpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdmb3JtLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2Zvcm0tZGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgICAgIH0pKCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGZvcm1EdWVEYXRlID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtSXRlbS5jbGFzc0xpc3QuYWRkKCdmb3JtLWl0ZW0nKVxuICAgICAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0ZW0pO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGR1ZURhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJyk7XG4gICAgICAgICAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZm9ybS1kYXRlJyk7XG4gICAgICAgICAgICBkdWVEYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlJztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LmlkID0gJ2Zvcm0tZGF0ZSc7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuICAgICAgICB9KSgpO1xuICAgIFxuICAgICAgICBjb25zdCBmb3JtUHJpb3JpdHkgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvcm1JdGVtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taXRlbScpXG4gICAgICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChmb3JtSXRlbSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1sYWJlbCcpO1xuICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdmb3JtLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9ICdQcmlvcml0eSc7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIHByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1wcmlvcml0eScpO1xuICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5pZCA9ICdmb3JtLXByaW9yaXR5JztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbkxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIG9wdGlvbkxvdy52YWx1ZSA9ICdMb3cnO1xuICAgICAgICAgICAgICAgIG9wdGlvbkxvdy5pbm5lckhUTUwgPSAnTG93JztcbiAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG9wdGlvbkxvdyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25NZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBvcHRpb25NZWRpdW0udmFsdWUgPSAnTWVkaXVtJztcbiAgICAgICAgICAgICAgICBvcHRpb25NZWRpdW0uaW5uZXJIVE1MID0gJ01lZGl1bSc7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChvcHRpb25NZWRpdW0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgIG9wdGlvbkhpZ2gudmFsdWUgPSAnSGlnaCc7XG4gICAgICAgICAgICAgICAgb3B0aW9uSGlnaC5pbm5lckhUTUwgPSAnSGlnaCc7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChvcHRpb25IaWdoKTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgY29uc3QgZm9ybVByb2plY3QgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvcm1JdGVtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taXRlbScpXG4gICAgICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChmb3JtSXRlbSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgcHJvamVjdExhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbGFiZWwnKTtcbiAgICAgICAgICAgIHByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdmb3JtLXByb2plY3QnKTtcbiAgICAgICAgICAgIHByb2plY3RMYWJlbC5pbm5lclRleHQgPSAnUHJvamVjdCc7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1wcm9qZWN0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0SW5wdXQuaWQgPSAnZm9ybS1wcm9qZWN0JztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGRlZmF1bHRTZWxlY3QudmFsdWUgPSAnTm9uZSc7XG4gICAgICAgICAgICBkZWZhdWx0U2VsZWN0LmlubmVyVGV4dCA9ICcnO1xuICAgICAgICAgICAgcHJvamVjdElucHV0LmFwcGVuZENoaWxkKGRlZmF1bHRTZWxlY3QpO1xuICAgICAgICB9KSgpO1xuICAgIFxuICAgICAgICBjb25zdCBhZGRTdWJtaXQgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzdWJtaXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3VibWl0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0Q29udGFpbmVyKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdCcpO1xuICAgICAgICAgICAgc3VibWl0LmlubmVyVGV4dCA9ICdBZGQnO1xuICAgICAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKVxuICAgICAgICAgICAgc3VibWl0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgICAgIH0pKCk7XG4gICAgfSkoKTsgICAgICAgIFxufTtcbiIsImltcG9ydCB7IHByb2plY3RMaXN0LCB0YXNrTGlzdCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyByZW1vdmVUYWJsZVJvd3MgfSBmcm9tIFwiLi9yZW1vdmVUYWJsZVJvd3NcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvail7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10YWJsZScpO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgLy8gcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYmxlLWl0ZW0nKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuXG5cbiAgICBjb25zdCBjcmVhdGVUYWJsZUJ1dHRvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYmxlLWl0ZW0nKTtcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChyb3cpO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uaWQgPSBwcm9qLm5hbWU7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYmxlLWJ1dHRvbicpO1xuICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gcHJvai5uYW1lO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hQcm9qZWN0KVxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgICAgIFxuICAgICAgICBmdW5jdGlvbiBzd2l0Y2hQcm9qZWN0KCl7ICAgICBcbiAgICAgICAgICAgIGNvbnN0IGFsbFByb2plY3RzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbC1wcm9qZWN0cycpO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0TGlzdFtpXS5uYW1lID09IGJ1dHRvbi5pZCkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVUYWJsZVJvd3MoKTtcbiAgICAgICAgICAgICAgICAgICAgc29ydExpc3QoYnV0dG9uLmlkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc29ydExpc3QoeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKysgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHggPT0gdGFza0xpc3RbaV0ucHJvamVjdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVUYXNrKHRhc2tMaXN0W2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9KSgpO1xufTsiLCJpbXBvcnQgeyB0YXNrTGlzdCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBmb2N1c1Rhc2sgfSBmcm9tIFwiLi9mb2N1c1Rhc2tcIjtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrICh0b2RvKSB7XG5cbiAgICAgICAgXG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10YWJsZScpO1xuXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGFzayk7XG5cbiAgICBjb25zdCB0YXNrQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgdGFza0J1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza0J1dHRvbkNvbnRhaW5lcik7XG4gICAgXG4gICAgY29uc3QgY3JlYXRlVGFza0J1dHRvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1zd2l0Y2gtYnV0dG9uJyk7XG4gICAgICAgICAgICB0YXNrQnV0dG9uLmlkID0gdG9kby50aXRsZTtcbiAgICAgICAgICAgIHRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzb3J0VGFzayk7XG4gICAgICAgICAgICB0YXNrQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tCdXR0b24pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBzb3J0VGFzaygpIHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFza0xpc3RbaV0udGl0bGUgPT0gdGFza0J1dHRvbi5pZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c1Rhc2sodGFza0xpc3RbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgIH0pKCk7XG4gICAgXG4gICAgICAgIFxuXG4gICAgY29uc3QgYWRkVGFza1RpdGxlID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGFza1RpdGxlLmlubmVyVGV4dCA9IHRvZG8udGl0bGU7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgYWRkVGFza0R1ZURhdGUgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlLWRhdGUnKTtcbiAgICAgICAgdGFza0R1ZURhdGUuaW5uZXJUZXh0ID0gdG9kby5kdWVEYXRlO1xuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcbiAgICB9KSgpOyBcblxuICAgIGNvbnN0IGFkZENvbXBsZXRpb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb21wbGV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgY29tcGxldGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbXBsZXRpb24nKTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChjb21wbGV0aW9uKTtcblxuICAgICAgICBjb25zdCBhZGRDb21wbGV0ZWRDaGVja2JveCA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZWRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIGNvbXBsZXRpb24uYXBwZW5kQ2hpbGQoY29tcGxldGVkQ2hlY2tib3gpO1xuICAgICAgICB9KSgpO1xuICAgIH0pKCk7IFxuXG59OyIsImltcG9ydCB7IHRhc2tMaXN0IH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsVGFza3MoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKHRhc2tMaXN0W2ldLnRpdGxlICE9IFwiXCIpe1xuICAgICAgICAgICAgY3JlYXRlVGFzayh0YXNrTGlzdFtpXSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgIH07XG59OyIsIlxuZXhwb3J0IGZ1bmN0aW9uIGZvY3VzVGFzayh0YXNrKSB7XG4gICAgXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1wbGFjZWhvbGRlcicpO1xuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlLXBsYWNlaG9sZGVyJyk7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9jdXMtcGxhY2Vob2xkZXInKTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5LXBsYWNlaG9sZGVyJyk7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi1wbGFjZWhvbGRlcicpO1xuICAgIFxuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSB0YXNrLnRpdGxlO1xuICAgICAgICBkYXRlLmlubmVyVGV4dCA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgcHJvamVjdC5pbm5lclRleHQgPSB0YXNrLnByb2plY3Q7XG4gICAgICAgIHByaW9yaXR5LmlubmVySFRNTCA9IHRhc2sucHJpb3JpdHk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IHRhc2suZGVzY3JpcHRpb247XG4gIFxuICAgIFxuXG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfSBmcm9tICcuL0hPTUVQQUdFL2hvbWVwYWdlQ29udHJvbGxlcic7XG5pbXBvcnQgeyBidWlsZFRhc2tGb3JtIH0gZnJvbSAnLi9idWlsZFRhc2tGb3JtRE9NJztcblxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIjtcblxuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vdGFzayc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0JztcbmltcG9ydCB7IHJpZ2h0U2lkZWJhckxvZ2ljIH0gZnJvbSAnLi9yaWdodFNpZGViYXJMb2dpYyc7XG5cbmltcG9ydCB7IGRpc3BsYXlBbGxUYXNrcyB9IGZyb20gJy4vZGlzcGxheUFsbFRhc2tzJztcbmltcG9ydCB7IGFkZFRvUHJvamVjdFNlbGVjdCB9IGZyb20gJy4vYWRkVG9Qcm9qZWN0U2VsZWN0JztcbmltcG9ydCB7IHNob3dUYXNrRGV0YWlscyB9IGZyb20gJy4vc2hvd1Rhc2tEZXRhaWxzJztcbi8vIGltcG9ydCB7IHB1c2hUYXNrIH0gZnJvbSAnLi90YXNrRm9ybVB1c2gnO1xuXG5cblxuXG5cbmV4cG9ydCB2YXIgdGFza0xpc3QgPSBbXTtcbmV4cG9ydCB2YXIgcHJvamVjdExpc3QgPSBbXTtcblxuLy8gYnVpbGRzIHBhZ2VcbmNyZWF0ZUhvbWVQYWdlKCk7XG5idWlsZFRhc2tGb3JtKCk7XG5yaWdodFNpZGViYXJMb2dpYygpO1xuXG4vLyBjcmVhdGVTaWRlYmFyTG9naWMoKVxuXG4vKioqKioqKioqKioqKiogTkVXIFNUVUZGICoqKioqKioqKioqKioqKi9cblxuXG5cblxuXG5cblxuY29uc3QgY3JlYXRlVGFza0RhdGEgPSAoKCkgPT4ge1xuICAgIGxldCB0YXNrMSA9IG5ldyBUYXNrKCdEbyBMYXVuZHJ5JywgJ3dhc2ggYWxsIGNsb3RoZXMgYW5kIHRvd2VscycsICcxMC8wMS8yMicsICdISUdIJywgJ0VycmFuZHMnKTtcbiAgICBsZXQgdGFzazIgPSBuZXcgVGFzaygnRG8gSG9tZXdvcmsnLCAnZG8gYWxsIGhvbWV3b3JrJywgJzkvMDEvMjInLCAnSElHSCcsICdTY2hvb2wnKTtcbiAgICBsZXQgdGFzazMgPSBuZXcgVGFzaygnU2NoZWR1bGUgQXBwb2ludG1lbnQnLCAnbWFrZSBhbiBhcHBvaW5tZW50JywgJzcvMTAvMjInLCAnTE9XJywgICdFcnJhbmRzJyk7XG4gICAgbGV0IHRhc2s0ID0gbmV3IFRhc2soJ09yZGVyIFBhY2thZ2UnLCAnb3JkZXIgYSBib3gnLCAnMDcvMDgvMjInLCAnTUVESVVNJywgJ1NjaG9vbCcpO1xuICAgIGxldCB0YXNrNSA9IG5ldyBUYXNrKCdTaGF2ZScsICdzaGF2ZSBiZWFyZCB3aXRoIHJhem9yJywgJzEyLzI0LzIyJywgJ0xPVycsICdFcnJhbmRzJyk7XG5cbiAgICB0YXNrTGlzdC5wdXNoKHRhc2sxKTtcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2syKTtcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2szKTtcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2s0KTtcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2s1KTtcblxuICAgICAgICBcbn0pKCk7XG5cbmxldCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCdFcnJhbmRzJywgJ3NpbXBsZSBlcnJhbmRzIEkgbmVlZCB0byBkbycpO1xuICAgIGxldCBwcm9qZWN0MiA9IG5ldyBQcm9qZWN0KCdTY2hvb2wnLCAnc3R1ZmYgcmVsYXRlZCB0byBzY2hvb2wnKTtcblxuICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdDEpO1xuICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdDIpO1xuXG5kaXNwbGF5QWxsVGFza3MoKTtcblxuXG5cbmZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspe1xuICAgIGNyZWF0ZVByb2plY3QocHJvamVjdExpc3RbaV0pO1xufVxuXG5hZGRUb1Byb2plY3RTZWxlY3QoKTtcblxuLyoqKioqKioqKioqKioqIE5FVyBTVFVGRiAqKioqKioqKioqKioqKiovXG5cbnNob3dUYXNrRGV0YWlscygpO1xuXG5cblxuIiwiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByb2plY3REZXNjcmlwdGlvbiwgbm90ZXMpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByb2plY3REZXNjcmlwdGlvbiA9IHByb2plY3REZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgIH1cbn07IiwiaW1wb3J0IHsgcHJvamVjdExpc3R9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL2NyZWF0ZVByb2plY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2hQcm9qZWN0KCkge1xuXG4gICAgbGV0ICBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICBsZXQgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZGVzY3JpcHRpb24nKTtcbiBcblxuICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUudmFsdWUsIHByb2plY3REZXNjcmlwdGlvbi52YWx1ZSk7XG5cbiAgICBjcmVhdGVQcm9qZWN0KHByb2plY3QpO1xuXG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgICBcbiAgICBwcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgcHJvamVjdERlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbn07IiwiaW1wb3J0IHsgdGFza0xpc3QgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoVGFzaygpIHtcblxuICAgIGxldCAgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS10aXRsZScpO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWRlc2NyaXB0aW9uJyk7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1kYXRlJyk7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tcHJpb3JpdHknKTtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXByb2plY3QnKVxuXG4gICAgbGV0IHRhc2sgPSBuZXcgVGFzayh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGRhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlLCBwcm9qZWN0LnZhbHVlKTtcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2spO1xuXG4gICAgY3JlYXRlVGFzayh0YXNrKTtcbiAgICBcbiAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgIGRhdGUudmFsdWUgPSBcIlwiO1xuICAgIHByaW9yaXR5LnZhbHVlID0gXCJcIjtcbiAgICBwcm9qZWN0LnZhbHVlID0gXCJcIjtcblxuICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0KTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhYmxlUm93cygpe1xuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRhYmxlJyk7XG4gICAgZm9yKGxldCBpID0gMTsgaTx0YWJsZS5yb3dzLmxlbmd0aDspe1xuICAgICAgICB0YWJsZS5kZWxldGVSb3coaSk7XG4gICAgfVxufTsiLCJpbXBvcnQgeyBidWlsZFRhc2tGb3JtIH0gZnJvbSBcIi4vYnVpbGRUYXNrRm9ybURPTVwiO1xuaW1wb3J0IHsgYnVpbGRQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL2J1aWxkUHJvamVjdEZvcm1ET00uanNcIjtcbmltcG9ydCB7IGFkZFRvUHJvamVjdFNlbGVjdCB9IGZyb20gXCIuL2FkZFRvUHJvamVjdFNlbGVjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRTaWRlYmFyTG9naWMoKSB7XG5cbiAgICAvLyByZW1vdmVzIHNpZGViYXIgZm9yIFRhc2sgLyBQcm9qZWN0IGZvcm0gc3dpdGNoXG4gICAgZnVuY3Rpb24gcmVtb3ZlTGFzdENoaWxkKCkge1xuICAgICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgc2VsZWN0LnJlbW92ZUNoaWxkKHNlbGVjdC5sYXN0Q2hpbGQpO1xuICAgIH07XG5cbiAgICAvLyB0YXNrIGZvcm0gc3dpdGNoXG4gICAgY29uc3QgdGFza0J1dHRvbkxvZ2ljID0gKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuVGFza01lbnUpO1xuICAgICAgICBmdW5jdGlvbiBvcGVuVGFza01lbnUoKSB7XG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stYnV0dG9uJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhidXR0b24uc3R5bGUuY29sb3IpO1xuICAgICAgICAgICAgcmVtb3ZlTGFzdENoaWxkKCk7XG4gICAgICAgICAgICBidWlsZFRhc2tGb3JtKCk7XG4gICAgICAgICAgICBhZGRUb1Byb2plY3RTZWxlY3QoKTtcblxuICAgICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICAvLyBwcm9qZWN0IGZvcm0gc3dpdGNoXG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbkxvZ2ljID0gKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuVGFza01lbnUpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgZnVuY3Rpb24gb3BlblRhc2tNZW51KCkge1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWJ1dHRvbicpO1xuICAgICAgICAgICAgcmVtb3ZlTGFzdENoaWxkKCk7XG4gICAgICAgICAgICBidWlsZFByb2plY3RGb3JtKCk7XG5cbiAgICAgICAgfTtcbiAgICB9KSgpO1xufVxuIiwiaW1wb3J0IHsgdGFza0xpc3QgfSBmcm9tIFwiLlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Rhc2tEZXRhaWxzKCkge1xuICAgIGxldCB0YXNrID0gdGFza0xpc3RbMF07XG4gICAgY29uc29sZS5sb2codGFza0xpc3RbMF0pO1xuICAgIGNvbnNvbGUubG9nKHRhc2sudGl0bGUpO1xuICAgIGNvbnNvbGUubG9nKHRhc2suZGVzY3JpcHRpb24pO1xuICAgIGNvbnNvbGUubG9nKHRhc2suZHVlRGF0ZSk7XG4gICAgY29uc29sZS5sb2codGFzay5wcmlvcml0eSk7XG4gICAgY29uc29sZS5sb2codGFzay5wcm9qZWN0KTtcbn07XG5cbiIsImV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuICAgIGdldFRhc2tQcmV2aWV3KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZSArICcgLyAnICsgdGhpcy5kdWVEYXRlO1xuICAgIH1cbiAgICBnZXRUYXNrRnVsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGUgKyAnIHwgJyArIHRoaXMuZGVzY3JpcHRpb24gKyAnIHwgJyArIHRoaXMuZHVlRGF0ZSArICcgfCAnICsgdGhpcy5wcmlvcml0eSArICcgfCAnO1xuICAgIH0gXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9