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
___CSS_LOADER_EXPORT___.push([module.id, "/*********** || GENERAL STYLES || *****************************************/\n\n:root {\n    --white:white;\n    --soothing-breeze:#b2bec3;\n    --gray:#636e72;\n    --dark:#2d3436;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\n    html,\n    body {\n        margin: 0;\n        padding: 0;\n        height: 100%;\n    }\n\n        #content {\n            display: grid;\n\n            height: 100%;\n            width: 100%;\n\n\n            grid-template-columns: 2fr 5fr 2fr;\n            grid-template-rows: 1fr 80px 12fr 6fr;\n            \n        }\n\n            input[type=checkbox] {\n                transform: scale(1.5);\n            }\n            \n/*********** || HEADER || *****************************************/\n\n.header {\n    display: flex;\n    justify-content: center;\n    \n    grid-column: 1 / 4;\n    grid-row: 1 / 2;\n\n    padding: 10px;\n\n    background: rgb(131,58,180);\n    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);\n\n\n    font-size: 30px;\n    color: var(--white);\n}\n\n/*********** || MAIN || *****************************************/\n\n.main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 4;\n    overflow: scroll;\n\n}\n\n    .task { \n\n        height: 50px;\n        background-color: #dfe6e948;\n\n        font-size: 25px;\n    }\n\n        th {\n            width: 400px;\n\n            background-color: var(--gray);\n            color: var(--white);\n            font-size: 25px; \n        }\n\n        td {\n            align-items: center;\n            text-align: center;\n        }\n\n    \n/*********** || PROJECT TABLE SIDEBAR || *****************************************/\n\n.sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 5;\n\n    background-color: var(--dark);\n}\n\n    .projects-header {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 60px;\n        font-size: 40px;\n        padding-top: 20px;\n        color: var(--white);\n        margin-bottom: 10px;\n        \n    }\n\n    .project-table {\n        width: 100%;\n\n    }\n\n    .project-table-item {\n        width: 100%;\n        padding: 10px;\n\n\n    }\n\n    .project-table-button,\n    .project-table-button-selected {\n        width: 100%;\n\n        background-color: var(--dark);\n        border: 2px solid var(--white);\n        color: white;\n\n        padding: 10px;\n        font-size: 25px;\n    }\n\n    .project-table-button:hover{\n        background-color: var(--gray);\n    }\n\n    .project-table-button-selected {\n        background-color: var(--white);\n        color: var(--dark);\n        font-weight: bold;\n    }\n\n\n\n\n\n/*********** || RIGHT SIDEBAR HEADER || *****************************************/\n\n.form-header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    grid-column: 3 / 4;\n    grid-row: 2 / 3;\n    \n    background-color: var(--dark);\n    color: var(white);\n\n    font-size: 40px;\n}\n\n    .add {\n        color: var(--white);\n    }\n\n    .form-header button {\n        background-color: var(--dark);\n        border: none;\n\n        font-size: 40px;\n    }\n\n\n/*********** || RIGHT SIDEBAR (TASK / PROJECT FORMS) || *********************/\n\n\n.task-form {\n    grid-column: 3 / 4;\n    grid-row: 3 / 5;\n\n    background-color: var(--dark);\n\n    color: var(--white);\n}      \n\n    .form-item {\n        display: grid;\n\n        height: 130px;\n        padding: 20px;\n    }\n\n        .form-label {\n            font-size: 25px;\n        }\n\n    .submit-container {\n        display: flex;\n        justify-content: center;\n\n        margin-top: 20px;\n    }\n\n        .submit {\n            justify-content: center;\n\n            width: 50%;\n            font-size: 20px;\n        }\n    \n\n/*********** || TASK-FOCUS || *********************/\n\n.task-focus {\n    background-color: var(--gray);\n\n    grid-column: 2 / 3;\n    grid-row: 4 / 5;\n\n    display: grid;\n    grid-template-rows: 6fr 2fr;\n}\n\n    .info-container {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n    }\n\n        .focus-section {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 23px;\n            color: var(--white);\n            font-weight: bold;\n        }\n\n        .task-info {\n            display: flex;\n            align-items: center;\n\n            height: 100%;\n            font-size: 23px;\n            color: var(--white);\n        }\n\n\n        #title-section {\n            grid-column: 1 / 2;\n            grid-row: 1 / 2;\n        }\n\n        #title-placeholder {\n            grid-column: 2 / 4;\n            grid-row: 1 / 2;\n        }\n    \n\n        #date-section {\n            grid-column: 4 / 5;\n            grid-row: 1 / 2;\n        }\n\n        #date-placeholder {\n            grid-column: 5 / 7;\n            grid-row: 1 / 2;\n        }\n  \n\n        #project-focus-section {\n            grid-column: 1 / 2;\n            grid-row: 2 / 3;\n        }\n\n        #project-focus-placeholder {\n            grid-column: 2 / 4;\n            grid-row: 2 / 3;\n        }\n\n\n        #priority-section {\n            grid-column: 4 / 5;\n            grid-row: 2 / 3;\n        }\n\n        #priority-placeholder {\n            grid-column: 5 / 7;\n            grid-row: 2 / 3;\n        }\n\n\n        #description-section {\n            grid-column: 1 / 2;\n            grid-row: 3 / 4;\n        }\n\n        #description-placeholder {\n            grid-column: 2 / 7;\n            grid-row: 3 / 4;\n        }\n\n\n    .focus-button-section {\n        background-color: var(--gray);\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n    }\n    \n        .focus-button-container {\n            display: flex; \n            justify-content: center;\n            align-items: center;\n            padding-bottom: 10px;\n        }\n    \n        .focus-button {\n            padding: 8px;\n            width: 100px;\n    \n            background-color: var(--gray);\n            color: var(--white);\n            /* border-radius: 10px; */\n            border: 1px solid white;\n    \n            font-size: 20px;\n            \n        }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*********** || GENERAL STYLES || *****************************************/\n\n:root {\n    --white:white;\n    --soothing-breeze:#b2bec3;\n    --gray:#636e72;\n    --dark:#2d3436;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\n    html,\n    body {\n        margin: 0;\n        padding: 0;\n        height: 100%;\n    }\n\n        #content {\n            display: grid;\n\n            height: 100%;\n            width: 100%;\n\n\n            grid-template-columns: 2fr 5fr 2fr;\n            grid-template-rows: 1fr 80px 12fr 6fr;\n            \n        }\n\n            input[type=checkbox] {\n                transform: scale(1.5);\n            }\n            \n/*********** || HEADER || *****************************************/\n\n.header {\n    display: flex;\n    justify-content: center;\n    \n    grid-column: 1 / 4;\n    grid-row: 1 / 2;\n\n    padding: 10px;\n\n    background: rgb(131,58,180);\n    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);\n\n\n    font-size: 30px;\n    color: var(--white);\n}\n\n/*********** || MAIN || *****************************************/\n\n.main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 4;\n    overflow: scroll;\n\n}\n\n    .task { \n\n        height: 50px;\n        background-color: #dfe6e948;\n\n        font-size: 25px;\n    }\n\n        th {\n            width: 400px;\n\n            background-color: var(--gray);\n            color: var(--white);\n            font-size: 25px; \n        }\n\n        td {\n            align-items: center;\n            text-align: center;\n        }\n\n    \n/*********** || PROJECT TABLE SIDEBAR || *****************************************/\n\n.sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 5;\n\n    background-color: var(--dark);\n}\n\n    .projects-header {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 60px;\n        font-size: 40px;\n        padding-top: 20px;\n        color: var(--white);\n        margin-bottom: 10px;\n        \n    }\n\n    .project-table {\n        width: 100%;\n\n    }\n\n    .project-table-item {\n        width: 100%;\n        padding: 10px;\n\n\n    }\n\n    .project-table-button,\n    .project-table-button-selected {\n        width: 100%;\n\n        background-color: var(--dark);\n        border: 2px solid var(--white);\n        color: white;\n\n        padding: 10px;\n        font-size: 25px;\n    }\n\n    .project-table-button:hover{\n        background-color: var(--gray);\n    }\n\n    .project-table-button-selected {\n        background-color: var(--white);\n        color: var(--dark);\n        font-weight: bold;\n    }\n\n\n\n\n\n/*********** || RIGHT SIDEBAR HEADER || *****************************************/\n\n.form-header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    grid-column: 3 / 4;\n    grid-row: 2 / 3;\n    \n    background-color: var(--dark);\n    color: var(white);\n\n    font-size: 40px;\n}\n\n    .add {\n        color: var(--white);\n    }\n\n    .form-header button {\n        background-color: var(--dark);\n        border: none;\n\n        font-size: 40px;\n    }\n\n\n/*********** || RIGHT SIDEBAR (TASK / PROJECT FORMS) || *********************/\n\n\n.task-form {\n    grid-column: 3 / 4;\n    grid-row: 3 / 5;\n\n    background-color: var(--dark);\n\n    color: var(--white);\n}      \n\n    .form-item {\n        display: grid;\n\n        height: 130px;\n        padding: 20px;\n    }\n\n        .form-label {\n            font-size: 25px;\n        }\n\n    .submit-container {\n        display: flex;\n        justify-content: center;\n\n        margin-top: 20px;\n    }\n\n        .submit {\n            justify-content: center;\n\n            width: 50%;\n            font-size: 20px;\n        }\n    \n\n/*********** || TASK-FOCUS || *********************/\n\n.task-focus {\n    background-color: var(--gray);\n\n    grid-column: 2 / 3;\n    grid-row: 4 / 5;\n\n    display: grid;\n    grid-template-rows: 6fr 2fr;\n}\n\n    .info-container {\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n        grid-template-rows: 1fr 1fr 1fr;\n    }\n\n        .focus-section {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 23px;\n            color: var(--white);\n            font-weight: bold;\n        }\n\n        .task-info {\n            display: flex;\n            align-items: center;\n\n            height: 100%;\n            font-size: 23px;\n            color: var(--white);\n        }\n\n\n        #title-section {\n            grid-column: 1 / 2;\n            grid-row: 1 / 2;\n        }\n\n        #title-placeholder {\n            grid-column: 2 / 4;\n            grid-row: 1 / 2;\n        }\n    \n\n        #date-section {\n            grid-column: 4 / 5;\n            grid-row: 1 / 2;\n        }\n\n        #date-placeholder {\n            grid-column: 5 / 7;\n            grid-row: 1 / 2;\n        }\n  \n\n        #project-focus-section {\n            grid-column: 1 / 2;\n            grid-row: 2 / 3;\n        }\n\n        #project-focus-placeholder {\n            grid-column: 2 / 4;\n            grid-row: 2 / 3;\n        }\n\n\n        #priority-section {\n            grid-column: 4 / 5;\n            grid-row: 2 / 3;\n        }\n\n        #priority-placeholder {\n            grid-column: 5 / 7;\n            grid-row: 2 / 3;\n        }\n\n\n        #description-section {\n            grid-column: 1 / 2;\n            grid-row: 3 / 4;\n        }\n\n        #description-placeholder {\n            grid-column: 2 / 7;\n            grid-row: 3 / 4;\n        }\n\n\n    .focus-button-section {\n        background-color: var(--gray);\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n    }\n    \n        .focus-button-container {\n            display: flex; \n            justify-content: center;\n            align-items: center;\n            padding-bottom: 10px;\n        }\n    \n        .focus-button {\n            padding: 8px;\n            width: 100px;\n    \n            background-color: var(--gray);\n            color: var(--white);\n            /* border-radius: 10px; */\n            border: 1px solid white;\n    \n            font-size: 20px;\n            \n        }"],"sourceRoot":""}]);
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

/***/ "./src/buildProjectFormDOM":
/*!*********************************!*\
  !*** ./src/buildProjectFormDOM ***!
  \*********************************/
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
    
            const priorityInput = document.createElement('input');
            priorityInput.classList.add('form-priority');
            priorityInput.id = 'form-priority';
            formItem.appendChild(priorityInput);
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

/***/ "./src/createHomepage.js":
/*!*******************************!*\
  !*** ./src/createHomepage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomePage": () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _displayAllTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayAllTasks */ "./src/displayAllTasks.js");
/* harmony import */ var _removeTableRows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeTableRows */ "./src/removeTableRows.js");






function createHomePage() {

    const defineContent = (() => {
        const content = document.getElementById('content');
    })();
    
    const buildHeader = (() => {
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
    })();

    const buildSidebar = (() => {
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
                    button.addEventListener('click', _removeTableRows__WEBPACK_IMPORTED_MODULE_1__.removeTableRows)
                    button.addEventListener('click', _displayAllTasks__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks)

                    all.appendChild(button);
                })();
                

            })();
        })();
    })(); 

    const buildMain = (() => {
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

                const column1 = document.createElement('th');
                column1.classList.add('column-header');
                column1.classList.add('task-title');
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
    })();

    const createFormHeader = (() => {
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
    })();   

    const createTaskFocus = (() => {

        let taskFocus = document.createElement('div');
        taskFocus.id = 'task-focus';
        taskFocus.classList.add('task-focus');
        content.appendChild(taskFocus);

        const infoContainer = document.createElement('div');
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
            taskFocus.appendChild(buttonSection);

            const createEditButton = (() => {
                const editButtonContainer = document.createElement('div');
                editButtonContainer.classList.add('focus-button-container');
                buttonSection.appendChild(editButtonContainer);

                const editButton = document.createElement('button');
                editButton.classList.add('focus-button');
                editButton.innerText = 'Edit';
                editButtonContainer.appendChild(editButton);
            })();

            const createDeleteButton = (() => {
                const deleteButtonContainer = document.createElement('div');
                deleteButtonContainer.classList.add('focus-button-container');
                buttonSection.appendChild(deleteButtonContainer);

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('focus-button');
                deleteButton.innerText = 'Delete';
               deleteButtonContainer.appendChild(deleteButton);
            })();
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

function createTask (todo) {

        
    const table = document.getElementById('task-table');

    const task = document.createElement('tr');
    task.classList.add('task');
    table.appendChild(task);

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
        (0,_createTask__WEBPACK_IMPORTED_MODULE_1__.createTask)(___WEBPACK_IMPORTED_MODULE_0__.taskList[i]);
    }
}

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
/* harmony import */ var _createHomepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHomepage */ "./src/createHomepage.js");
/* harmony import */ var _buildTaskFormDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildTaskFormDOM */ "./src/buildTaskFormDOM.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _rightSidebarLogic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rightSidebarLogic */ "./src/rightSidebarLogic.js");
/* harmony import */ var _displayAllTasks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./displayAllTasks */ "./src/displayAllTasks.js");
/* harmony import */ var _addToProjectSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addToProjectSelect */ "./src/addToProjectSelect.js");
/* harmony import */ var _showTaskDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./showTaskDetails */ "./src/showTaskDetails.js");
/* harmony import */ var _focusTask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./focusTask */ "./src/focusTask.js");















// import { pushTask } from './taskFormPush';





var taskList = [];
var projectList = [];

// builds page
(0,_createHomepage__WEBPACK_IMPORTED_MODULE_1__.createHomePage)();
(0,_buildTaskFormDOM__WEBPACK_IMPORTED_MODULE_2__.buildTaskForm)();
(0,_rightSidebarLogic__WEBPACK_IMPORTED_MODULE_7__.rightSidebarLogic)();

// createSidebarLogic()

/************** NEW STUFF ***************/







const createTaskData = (() => {
    let task1 = new _task__WEBPACK_IMPORTED_MODULE_5__.Task('errand1', 'wash clothes', '10/01/22', '!!', 'Errands');
    let task2 = new _task__WEBPACK_IMPORTED_MODULE_5__.Task('school 1', 'make an appointment for fungus', '9/01/22', '!!', 'School');
    let task3 = new _task__WEBPACK_IMPORTED_MODULE_5__.Task('errand2', 'make chiro appoinment', '7/10/22', '!',  'Errands');
    let task4 = new _task__WEBPACK_IMPORTED_MODULE_5__.Task('school 2', 'make week 4 discussion post', '07/08/22', '!!!', 'School');
    let task5 = new _task__WEBPACK_IMPORTED_MODULE_5__.Task('errand3', 'shave beard', '12/24/22', '!!!', 'Errands');

    taskList.push(task1);
    taskList.push(task2);
    taskList.push(task3);
    taskList.push(task4);
    taskList.push(task5);

        
})();

let project1 = new _project__WEBPACK_IMPORTED_MODULE_6__.Project('Errands', 'simple errands I need to do');
    let project2 = new _project__WEBPACK_IMPORTED_MODULE_6__.Project('School', 'stuff related to school');

    projectList.push(project1);
    projectList.push(project2);

(0,_displayAllTasks__WEBPACK_IMPORTED_MODULE_8__.displayAllTasks)();



for (let i = 0; i < projectList.length; i++){
    (0,_createProject__WEBPACK_IMPORTED_MODULE_4__.createProject)(projectList[i]);
}

(0,_addToProjectSelect__WEBPACK_IMPORTED_MODULE_9__.addToProjectSelect)();

/************** NEW STUFF ***************/

(0,_showTaskDetails__WEBPACK_IMPORTED_MODULE_10__.showTaskDetails)();

(0,_focusTask__WEBPACK_IMPORTED_MODULE_11__.focusTask)(taskList[0]);



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

    // let select = document.getElementById('form-project');
    // let option = document.createElement('option');
    // option.innerText = projectName;
    // option.value = projectName;
    // select.appendChild(option);

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
/* harmony import */ var _buildProjectFormDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildProjectFormDOM */ "./src/buildProjectFormDOM");
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
            (0,_buildProjectFormDOM__WEBPACK_IMPORTED_MODULE_1__.buildProjectForm)();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUFBZSxXQUFXLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLGFBQWEsT0FBTyxNQUFNLFVBQVUsYUFBYSxXQUFXLE9BQU8sS0FBSyxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxhQUFhLE1BQU0sWUFBWSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxXQUFXLFlBQVksYUFBYSxZQUFZLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxhQUFhLE1BQU0sVUFBVSxZQUFZLGNBQWMsYUFBYSxZQUFZLFlBQVksY0FBYyxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxRQUFRLGNBQWMsTUFBTSxZQUFZLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsV0FBVyxVQUFVLFFBQVEsYUFBYSxNQUFNLGFBQWEsYUFBYSxZQUFZLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsV0FBVyxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFFBQVEsS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsUUFBUSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFFBQVEsS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVks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QTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBUTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdklvRDtBQUNBOzs7O0FBSTdDOztBQUVQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCw2REFBZTtBQUNwRSxxREFBcUQsNkRBQWU7O0FBRXBFO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTG1EO0FBQ007QUFDQzs7QUFFbkQ7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0VBQWE7QUFDekIsWUFBWSx1RUFBa0I7O0FBRTlCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0VBQWdCOztBQUU1QjtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDNkI7O0FBRXRCO0FBQ1AsZUFBZSwwQ0FBVztBQUMxQixnQkFBZ0IsMENBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNkQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRUb1Byb2plY3RTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9idWlsZFByb2plY3RGb3JtRE9NIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYnVpbGRUYXNrRm9ybURPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZUhvbWVwYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5QWxsVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9mb2N1c1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wdXNoUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3B1c2hUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcmVtb3ZlVGFibGVSb3dzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcmlnaHRTaWRlYmFyTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaG93VGFza0RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKioqKioqKioqKiB8fCBHRU5FUkFMIFNUWUxFUyB8fCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG46cm9vdCB7XFxuICAgIC0td2hpdGU6d2hpdGU7XFxuICAgIC0tc29vdGhpbmctYnJlZXplOiNiMmJlYzM7XFxuICAgIC0tZ3JheTojNjM2ZTcyO1xcbiAgICAtLWRhcms6IzJkMzQzNjtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4gICAgaHRtbCxcXG4gICAgYm9keSB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICAgICAjY29udGVudCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNWZyIDJmcjtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4MHB4IDEyZnIgNmZyO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4vKioqKioqKioqKiogfHwgSEVBREVSIHx8ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcblxcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTMxLDU4LDE4MCk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMzEsNTgsMTgwLDEpIDAlLCByZ2JhKDI1MywyOSwyOSwxKSA1MCUsIHJnYmEoMjUyLDE3Niw2OSwxKSAxMDAlKTtcXG5cXG5cXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4vKioqKioqKioqKiogfHwgTUFJTiB8fCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4ubWFpbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcblxcbn1cXG5cXG4gICAgLnRhc2sgeyBcXG5cXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmU2ZTk0ODtcXG5cXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgfVxcblxcbiAgICAgICAgdGgge1xcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcXG5cXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDsgXFxuICAgICAgICB9XFxuXFxuICAgICAgICB0ZCB7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgIFxcbi8qKioqKioqKioqKiB8fCBQUk9KRUNUIFRBQkxFIFNJREVCQVIgfHwgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gNTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxufVxcblxcbiAgICAucHJvamVjdHMtaGVhZGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtdGFibGUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtdGFibGUtaXRlbSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuXFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtdGFibGUtYnV0dG9uLFxcbiAgICAucHJvamVjdC10YWJsZS1idXR0b24tc2VsZWN0ZWQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtdGFibGUtYnV0dG9uOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtdGFibGUtYnV0dG9uLXNlbGVjdGVkIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuXFxuXFxuXFxuXFxuXFxuLyoqKioqKioqKioqIHx8IFJJR0hUIFNJREVCQVIgSEVBREVSIHx8ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5mb3JtLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBjb2xvcjogdmFyKHdoaXRlKTtcXG5cXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4gICAgLmFkZCB7XFxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB9XFxuXFxuICAgIC5mb3JtLWhlYWRlciBidXR0b24ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuXFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIH1cXG5cXG5cXG4vKioqKioqKioqKiogfHwgUklHSFQgU0lERUJBUiAoVEFTSyAvIFBST0pFQ1QgRk9STVMpIHx8ICoqKioqKioqKioqKioqKioqKioqKi9cXG5cXG5cXG4udGFzay1mb3JtIHtcXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgICBncmlkLXJvdzogMyAvIDU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcblxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn0gICAgICBcXG5cXG4gICAgLmZvcm0taXRlbSB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgICAgIC5mb3JtLWxhYmVsIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgICAgICB9XFxuXFxuICAgIC5zdWJtaXQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgICAgIC5zdWJtaXQge1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgfVxcbiAgICBcXG5cXG4vKioqKioqKioqKiogfHwgVEFTSy1GT0NVUyB8fCAqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLnRhc2stZm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG5cXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNmZyIDJmcjtcXG59XFxuXFxuICAgIC5pbmZvLWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIH1cXG5cXG4gICAgICAgIC5mb2N1cy1zZWN0aW9uIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFzay1pbmZvIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgfVxcblxcblxcbiAgICAgICAgI3RpdGxlLXNlY3Rpb24ge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjdGl0bGUtcGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICB9XFxuICAgIFxcblxcbiAgICAgICAgI2RhdGUtc2VjdGlvbiB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNkYXRlLXBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNSAvIDc7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgfVxcbiAgXFxuXFxuICAgICAgICAjcHJvamVjdC1mb2N1cy1zZWN0aW9uIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI3Byb2plY3QtZm9jdXMtcGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICB9XFxuXFxuXFxuICAgICAgICAjcHJpb3JpdHktc2VjdGlvbiB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNwcmlvcml0eS1wbGFjZWhvbGRlciB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDUgLyA3O1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIH1cXG5cXG5cXG4gICAgICAgICNkZXNjcmlwdGlvbi1zZWN0aW9uIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2Rlc2NyaXB0aW9uLXBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDc7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICAgICAgfVxcblxcblxcbiAgICAuZm9jdXMtYnV0dG9uLXNlY3Rpb24ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB9XFxuICAgIFxcbiAgICAgICAgLmZvY3VzLWJ1dHRvbi1jb250YWluZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgLmZvY3VzLWJ1dHRvbiB7XFxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgICAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUNBQWlDO0lBQ2pDLHNCQUFzQjtBQUMxQjs7SUFFSTs7UUFFSSxTQUFTO1FBQ1QsVUFBVTtRQUNWLFlBQVk7SUFDaEI7O1FBRUk7WUFDSSxhQUFhOztZQUViLFlBQVk7WUFDWixXQUFXOzs7WUFHWCxrQ0FBa0M7WUFDbEMscUNBQXFDOztRQUV6Qzs7WUFFSTtnQkFDSSxxQkFBcUI7WUFDekI7O0FBRVosbUVBQW1FOztBQUVuRTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7O0lBRXZCLGtCQUFrQjtJQUNsQixlQUFlOztJQUVmLGFBQWE7O0lBRWIsMkJBQTJCO0lBQzNCLHlHQUF5Rzs7O0lBR3pHLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUEsaUVBQWlFOztBQUVqRTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCOztBQUVwQjs7SUFFSTs7UUFFSSxZQUFZO1FBQ1osMkJBQTJCOztRQUUzQixlQUFlO0lBQ25COztRQUVJO1lBQ0ksWUFBWTs7WUFFWiw2QkFBNkI7WUFDN0IsbUJBQW1CO1lBQ25CLGVBQWU7UUFDbkI7O1FBRUE7WUFDSSxtQkFBbUI7WUFDbkIsa0JBQWtCO1FBQ3RCOzs7QUFHUixrRkFBa0Y7O0FBRWxGO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7O0lBRWYsNkJBQTZCO0FBQ2pDOztJQUVJO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLG1CQUFtQjs7SUFFdkI7O0lBRUE7UUFDSSxXQUFXOztJQUVmOztJQUVBO1FBQ0ksV0FBVztRQUNYLGFBQWE7OztJQUdqQjs7SUFFQTs7UUFFSSxXQUFXOztRQUVYLDZCQUE2QjtRQUM3Qiw4QkFBOEI7UUFDOUIsWUFBWTs7UUFFWixhQUFhO1FBQ2IsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLDhCQUE4QjtRQUM5QixrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCOzs7Ozs7QUFNSixpRkFBaUY7O0FBRWpGO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7O0lBRW5CLGtCQUFrQjtJQUNsQixlQUFlOztJQUVmLDZCQUE2QjtJQUM3QixpQkFBaUI7O0lBRWpCLGVBQWU7QUFDbkI7O0lBRUk7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSw2QkFBNkI7UUFDN0IsWUFBWTs7UUFFWixlQUFlO0lBQ25COzs7QUFHSiw2RUFBNkU7OztBQUc3RTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlOztJQUVmLDZCQUE2Qjs7SUFFN0IsbUJBQW1CO0FBQ3ZCOztJQUVJO1FBQ0ksYUFBYTs7UUFFYixhQUFhO1FBQ2IsYUFBYTtJQUNqQjs7UUFFSTtZQUNJLGVBQWU7UUFDbkI7O0lBRUo7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCOztRQUV2QixnQkFBZ0I7SUFDcEI7O1FBRUk7WUFDSSx1QkFBdUI7O1lBRXZCLFVBQVU7WUFDVixlQUFlO1FBQ25COzs7QUFHUixtREFBbUQ7O0FBRW5EO0lBQ0ksNkJBQTZCOztJQUU3QixrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztJQUVJO1FBQ0ksYUFBYTtRQUNiLDhDQUE4QztRQUM5QywrQkFBK0I7SUFDbkM7O1FBRUk7WUFDSSxhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLGlCQUFpQjtRQUNyQjs7UUFFQTtZQUNJLGFBQWE7WUFDYixtQkFBbUI7O1lBRW5CLFlBQVk7WUFDWixlQUFlO1lBQ2YsbUJBQW1CO1FBQ3ZCOzs7UUFHQTtZQUNJLGtCQUFrQjtZQUNsQixlQUFlO1FBQ25COztRQUVBO1lBQ0ksa0JBQWtCO1lBQ2xCLGVBQWU7UUFDbkI7OztRQUdBO1lBQ0ksa0JBQWtCO1lBQ2xCLGVBQWU7UUFDbkI7O1FBRUE7WUFDSSxrQkFBa0I7WUFDbEIsZUFBZTtRQUNuQjs7O1FBR0E7WUFDSSxrQkFBa0I7WUFDbEIsZUFBZTtRQUNuQjs7UUFFQTtZQUNJLGtCQUFrQjtZQUNsQixlQUFlO1FBQ25COzs7UUFHQTtZQUNJLGtCQUFrQjtZQUNsQixlQUFlO1FBQ25COztRQUVBO1lBQ0ksa0JBQWtCO1lBQ2xCLGVBQWU7UUFDbkI7OztRQUdBO1lBQ0ksa0JBQWtCO1lBQ2xCLGVBQWU7UUFDbkI7O1FBRUE7WUFDSSxrQkFBa0I7WUFDbEIsZUFBZTtRQUNuQjs7O0lBR0o7UUFDSSw2QkFBNkI7UUFDN0IsYUFBYTtRQUNiLDhCQUE4QjtJQUNsQzs7UUFFSTtZQUNJLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsbUJBQW1CO1lBQ25CLG9CQUFvQjtRQUN4Qjs7UUFFQTtZQUNJLFlBQVk7WUFDWixZQUFZOztZQUVaLDZCQUE2QjtZQUM3QixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLHVCQUF1Qjs7WUFFdkIsZUFBZTs7UUFFbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqKioqKioqKioqIHx8IEdFTkVSQUwgU1RZTEVTIHx8ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbjpyb290IHtcXG4gICAgLS13aGl0ZTp3aGl0ZTtcXG4gICAgLS1zb290aGluZy1icmVlemU6I2IyYmVjMztcXG4gICAgLS1ncmF5OiM2MzZlNzI7XFxuICAgIC0tZGFyazojMmQzNDM2O1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiAgICBodG1sLFxcbiAgICBib2R5IHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgICAgICNjb250ZW50IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG5cXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA1ZnIgMmZyO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDgwcHggMTJmciA2ZnI7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbi8qKioqKioqKioqKiB8fCBIRUFERVIgfHwgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYigxMzEsNTgsMTgwKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDEzMSw1OCwxODAsMSkgMCUsIHJnYmEoMjUzLDI5LDI5LDEpIDUwJSwgcmdiYSgyNTIsMTc2LDY5LDEpIDEwMCUpO1xcblxcblxcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi8qKioqKioqKioqKiB8fCBNQUlOIHx8ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5tYWluIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuXFxufVxcblxcbiAgICAudGFzayB7IFxcblxcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTZlOTQ4O1xcblxcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB9XFxuXFxuICAgICAgICB0aCB7XFxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xcblxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4OyBcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHRkIHtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgXFxuLyoqKioqKioqKioqIHx8IFBST0pFQ1QgVEFCTEUgU0lERUJBUiB8fCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyA1O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG59XFxuXFxuICAgIC5wcm9qZWN0cy1oZWFkZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC10YWJsZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgfVxcblxcbiAgICAucHJvamVjdC10YWJsZS1pdGVtIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG5cXG5cXG4gICAgfVxcblxcbiAgICAucHJvamVjdC10YWJsZS1idXR0b24sXFxuICAgIC5wcm9qZWN0LXRhYmxlLWJ1dHRvbi1zZWxlY3RlZCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC10YWJsZS1idXR0b246aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC10YWJsZS1idXR0b24tc2VsZWN0ZWQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG5cXG5cXG5cXG5cXG5cXG4vKioqKioqKioqKiogfHwgUklHSFQgU0lERUJBUiBIRUFERVIgfHwgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGNvbG9yOiB2YXIod2hpdGUpO1xcblxcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbiAgICAuYWRkIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIH1cXG5cXG4gICAgLmZvcm0taGVhZGVyIGJ1dHRvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG5cXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgfVxcblxcblxcbi8qKioqKioqKioqKiB8fCBSSUdIVCBTSURFQkFSIChUQVNLIC8gUFJPSkVDVCBGT1JNUykgfHwgKioqKioqKioqKioqKioqKioqKioqL1xcblxcblxcbi50YXNrLWZvcm0ge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAgIGdyaWQtcm93OiAzIC8gNTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufSAgICAgIFxcblxcbiAgICAuZm9ybS1pdGVtIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgfVxcblxcbiAgICAgICAgLmZvcm0tbGFiZWwge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgLnN1Ym1pdC1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgfVxcblxcbiAgICAgICAgLnN1Ym1pdCB7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICB9XFxuICAgIFxcblxcbi8qKioqKioqKioqKiB8fCBUQVNLLUZPQ1VTIHx8ICoqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4udGFzay1mb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcblxcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2ZnIgMmZyO1xcbn1cXG5cXG4gICAgLmluZm8tY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gICAgfVxcblxcbiAgICAgICAgLmZvY3VzLXNlY3Rpb24ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YXNrLWluZm8ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICB9XFxuXFxuXFxuICAgICAgICAjdGl0bGUtc2VjdGlvbiB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICN0aXRsZS1wbGFjZWhvbGRlciB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIH1cXG4gICAgXFxuXFxuICAgICAgICAjZGF0ZS1zZWN0aW9uIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNCAvIDU7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2RhdGUtcGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiA1IC8gNztcXG4gICAgICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgICB9XFxuICBcXG5cXG4gICAgICAgICNwcm9qZWN0LWZvY3VzLXNlY3Rpb24ge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgICAgICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjcHJvamVjdC1mb2N1cy1wbGFjZWhvbGRlciB7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgICAgIH1cXG5cXG5cXG4gICAgICAgICNwcmlvcml0eS1zZWN0aW9uIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNCAvIDU7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI3ByaW9yaXR5LXBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogNSAvIDc7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgfVxcblxcblxcbiAgICAgICAgI2Rlc2NyaXB0aW9uLXNlY3Rpb24ge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgICAgICAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjZGVzY3JpcHRpb24tcGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gNztcXG4gICAgICAgICAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgICAgICB9XFxuXFxuXFxuICAgIC5mb2N1cy1idXR0b24tc2VjdGlvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIH1cXG4gICAgXFxuICAgICAgICAuZm9jdXMtYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDsgXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgICAgIH1cXG4gICAgXFxuICAgICAgICAuZm9jdXMtYnV0dG9uIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICBcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi5cIjtcblxuICBcbmV4cG9ydCBmdW5jdGlvbiBhZGRUb1Byb2plY3RTZWxlY3QoKSB7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tcHJvamVjdCcpO1xuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSBwcm9qZWN0TGlzdFtpXS5uYW1lO1xuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0TGlzdFtpXS5uYW1lO1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBwdXNoUHJvamVjdCB9IGZyb20gXCIuL3B1c2hQcm9qZWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFByb2plY3RGb3JtKCkge1xuXG4gICAgLy8gY2hhbmdlIGNvbG9yIG9mIHNlbGVjdGVkIGJ1dHRvblxuICAgIGNvbnN0IGNoYW5nZUJ1dHRvbkNvbG9yID0gKCgpID0+IHtcbiAgICAgICAgbGV0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1idXR0b24nKTtcbiAgICAgICAgdGFza0J1dHRvbi5zdHlsZS5jb2xvciA9ICdibGFjayc7XG5cbiAgICAgICAgbGV0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1idXR0b24nKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpOyAgXG5cbiAgICAvKioqKiBQVVNIIFBST0pFQ1QgRlVOQ1RJT04gKioqKioqKiovXG4gICAgZnVuY3Rpb24gcHJvamVjdFN1Ym1pdEhhbmRsZXIoZXZlbnQpe1xuICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwdXNoUHJvamVjdCgpO1xuICAgIH1cbiAgICAvKioqKiBQVVNIIFBST0pFQ1QgRlVOQ1RJT04gKioqKioqKiovXG5cbiAgICAvLyBidWlsZCBmb3JtIFxuICAgIGNvbnN0IGJ1aWxkQWRkQmFyID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIHByb2plY3RGb3JtLm9uc3VibWl0ID0gcHJvamVjdFN1Ym1pdEhhbmRsZXI7XG4gICAgICAgIHByb2plY3RGb3JtLmlkID0gJ2Zvcm0nO1xuICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG5cblxuICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0TmFtZSA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9ybUl0ZW0uY2xhc3NMaXN0LmFkZCgnZm9ybS1pdGVtJylcbiAgICAgICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1JdGVtKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBuYW1lTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1sYWJlbCcpO1xuICAgICAgICAgICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtbmFtZScpO1xuICAgICAgICAgICAgbmFtZUxhYmVsLmlubmVyVGV4dCA9ICdQcm9qZWN0IE5hbWUnO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZUlucHV0LmlkID0gJ3Byb2plY3QtbmFtZSc7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUlucHV0KTtcbiAgICAgICAgfSkoKTtcbiAgICBcbiAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdERlc2NyaXB0aW9uID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtSXRlbS5jbGFzc0xpc3QuYWRkKCdmb3JtLWl0ZW0nKVxuICAgICAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0ZW0pO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1sYWJlbCcpO1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gJ1Byb2plY3QgRGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uTGFiZWwpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uSW5wdXQuaWQgPSAncHJvamVjdC1kZXNjcmlwdGlvbic7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb25JbnB1dCk7ICBcbiAgICAgICAgfSkoKTsgIFxuXG4gICAgICAgIGNvbnN0IGFkZFN1Ym1pdCA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJtaXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHN1Ym1pdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRDb250YWluZXIpO1xuICAgIFxuICAgICAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgnc3VibWl0Jyk7XG4gICAgICAgICAgICBzdWJtaXQuaW5uZXJUZXh0ID0gJ0FkZCc7XG4gICAgICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXG4gICAgICAgICAgICBzdWJtaXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgICAgfSkoKTtcbiAgICB9KSgpOyAgICAgIFxufTsiLCJpbXBvcnQgeyBwdXNoVGFzayB9IGZyb20gXCIuL3B1c2hUYXNrXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVGFza0Zvcm0oKSB7XG5cblxuICAgIC8vIGNoYW5nZSBjb2xvciBvZiBzZWxlY3RlZCBidXR0b25cbiAgICBjb25zdCBjaGFuZ2VCdXR0b25Db2xvciA9ICgoKSA9PiB7XG4gICAgICAgIGxldCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stYnV0dG9uJyk7XG4gICAgICAgIHRhc2tCdXR0b24uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuXG4gICAgICAgIGxldCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3RCdXR0b24uc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgIH0pKCk7XG4gICAgXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7ICBcblxuICAgIC8qKioqIFBVU0ggVEFTSyBGVU5DVElPTiAqKioqKioqKi9cbiAgICBmdW5jdGlvbiB0YXNrU3VibWl0SGFuZGxlcihldmVudCl7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHB1c2hUYXNrKCk7XG4gICAgfVxuICAgIC8qKioqIFBVU0ggVEFTSyBGVU5DVElPTiAqKioqKioqKi9cblxuICAgIC8vIGJ1aWxkIGZvcm0gXG4gICAgY29uc3QgYnVpbGRBZGRCYXIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgdGFza0Zvcm0ub25zdWJtaXQgPSB0YXNrU3VibWl0SGFuZGxlcjtcbiAgICAgICAgdGFza0Zvcm0uaWQgPSAndGFzay1mb3JtJztcbiAgICAgICAgXG4gICAgICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybScpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcblxuICAgICAgICBjb25zdCBmb3JtVGl0bGUgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvcm1JdGVtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taXRlbScpXG4gICAgICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChmb3JtSXRlbSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIHRpdGxlTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1sYWJlbCcpO1xuICAgICAgICAgICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdmb3JtLXRpdGxlJyk7XG4gICAgICAgICAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUaXRsZSc7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgICAgICAgICB0aXRsZUlucHV0LmlkID0gJ2Zvcm0tdGl0bGUnO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgIH0pKCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGZvcm1EZXNjcmlwdGlvbiA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9ybUl0ZW0uY2xhc3NMaXN0LmFkZCgnZm9ybS1pdGVtJylcbiAgICAgICAgICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGZvcm1JdGVtKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Zvcm0tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZm9ybS1kZXNjcmlwdGlvbic7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgICAgICAgfSkoKTtcbiAgICBcbiAgICAgICAgY29uc3QgZm9ybUR1ZURhdGUgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvcm1JdGVtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taXRlbScpXG4gICAgICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChmb3JtSXRlbSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgZHVlRGF0ZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbGFiZWwnKTtcbiAgICAgICAgICAgIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdmb3JtLWRhdGUnKTtcbiAgICAgICAgICAgIGR1ZURhdGVMYWJlbC5pbm5lclRleHQgPSAnRHVlIERhdGUnO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQuaWQgPSAnZm9ybS1kYXRlJztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG4gICAgICAgIH0pKCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGZvcm1Qcmlvcml0eSA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9ybUl0ZW0uY2xhc3NMaXN0LmFkZCgnZm9ybS1pdGVtJylcbiAgICAgICAgICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGZvcm1JdGVtKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJyk7XG4gICAgICAgICAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Zvcm0tcHJpb3JpdHknKTtcbiAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5JztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcHJpb3JpdHknKTtcbiAgICAgICAgICAgIHByaW9yaXR5SW5wdXQuaWQgPSAnZm9ybS1wcmlvcml0eSc7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBjb25zdCBmb3JtUHJvamVjdCA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9ybUl0ZW0uY2xhc3NMaXN0LmFkZCgnZm9ybS1pdGVtJylcbiAgICAgICAgICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGZvcm1JdGVtKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBwcm9qZWN0TGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1sYWJlbCcpO1xuICAgICAgICAgICAgcHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Zvcm0tcHJvamVjdCcpO1xuICAgICAgICAgICAgcHJvamVjdExhYmVsLmlubmVyVGV4dCA9ICdQcm9qZWN0JztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIHByb2plY3RJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLXByb2plY3QnKTtcbiAgICAgICAgICAgIHByb2plY3RJbnB1dC5pZCA9ICdmb3JtLXByb2plY3QnO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcblxuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgZGVmYXVsdFNlbGVjdC52YWx1ZSA9ICdOb25lJztcbiAgICAgICAgICAgIGRlZmF1bHRTZWxlY3QuaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgICAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQoZGVmYXVsdFNlbGVjdCk7XG4gICAgICAgIH0pKCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGFkZFN1Ym1pdCA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJtaXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHN1Ym1pdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRDb250YWluZXIpO1xuICAgIFxuICAgICAgICAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgnc3VibWl0Jyk7XG4gICAgICAgICAgICBzdWJtaXQuaW5uZXJUZXh0ID0gJ0FkZCc7XG4gICAgICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXG4gICAgICAgICAgICBzdWJtaXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgICAgfSkoKTtcbiAgICB9KSgpOyAgICAgICAgXG59O1xuIiwiXG5pbXBvcnQgeyBkaXNwbGF5QWxsVGFza3MgfSBmcm9tIFwiLi9kaXNwbGF5QWxsVGFza3NcIjtcbmltcG9ydCB7IHJlbW92ZVRhYmxlUm93cyB9IGZyb20gXCIuL3JlbW92ZVRhYmxlUm93c1wiO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuXG4gICAgY29uc3QgZGVmaW5lQ29udGVudCA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIH0pKCk7XG4gICAgXG4gICAgY29uc3QgYnVpbGRIZWFkZXIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBidWlsZFRpdGxlID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgICAgICAgICAgdGl0bGUuaWQgPSAndGl0bGUnO1xuICAgICAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gJ1RvIERvIExpc3QnO1xuICAgICAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgICAgIH0pKCk7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGJ1aWxkU2lkZWJhciA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2lkZWJhci5pZCA9ICdzaWRlYmFyJztcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgICAgICAgY29uc3Qgc2lkZWJhckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHNpZGViYXJIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtaGVhZGVyJyk7XG4gICAgICAgIHNpZGViYXJIZWFkZXIuaW5uZXJUZXh0ID0gJ1Byb2plY3RzJztcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFySGVhZGVyKTtcblxuICAgICAgICBjb25zdCBCdWlsZFByb2plY3RUYWJsZSA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgICAgICAgICAgcHJvamVjdFRhYmxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFibGUnKTtcbiAgICAgICAgICAgIHByb2plY3RUYWJsZS5pZCA9ICdwcm9qZWN0LXRhYmxlJztcbiAgICAgICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRhYmxlKTtcblxuICAgICAgICAgICAgY29uc3QgYnVpbGRUYWJsZUhlYWRlciA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFibGVIZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVyUm93LmNsYXNzTGlzdC5hZGQoJ2NvbHVtbi1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICB0YWJsZUhlYWRlclJvdy5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRhYmxlLmFwcGVuZENoaWxkKHRhYmxlSGVhZGVyUm93KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICAgICAgY29sdW1uSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbi1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICBjb2x1bW5IZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICBjb2x1bW5IZWFkZXIuaW5uZXJUZXh0ID0gJ1Byb2plY3RzJztcbiAgICAgICAgICAgICAgICB0YWJsZUhlYWRlclJvdy5hcHBlbmRDaGlsZChjb2x1bW5IZWFkZXIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1aWxkQWxsUm93ID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgICAgIGFsbFJvdy5jbGFzc0xpc3QuYWRkKCdhbGwtcm93Jyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRhYmxlLmFwcGVuZENoaWxkKGFsbFJvdyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVUYWJsZUJ1dHRvbiA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICAgICAgICAgIGFsbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYmxlLWl0ZW0nKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGFsbFJvdy5hcHBlbmRDaGlsZChhbGwpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmlkID0gJ2FsbC1wcm9qZWN0cyc7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYmxlLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ0FsbCBQcm9qZWN0cydcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlVGFibGVSb3dzKVxuICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWxsVGFza3MpXG5cbiAgICAgICAgICAgICAgICAgICAgYWxsLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfSkoKTtcbiAgICB9KSgpOyBcblxuICAgIGNvbnN0IGJ1aWxkTWFpbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgICAgIG1haW4uaWQgPSAnbWFpbic7XG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgICAgIGNvbnN0IGJ1aWxkVGFibGUgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgICAgICAgICAgdGFibGUuaWQgPSAndGFzay10YWJsZSc7XG4gICAgICAgICAgICB0YWJsZS5jbGFzc0xpc3QuYWRkID0gJ3Rhc2stdGFibGUnO1xuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0YWJsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1aWxkVGFibGVIZWFkZXIgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlSGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgICAgICAgICB0YWJsZUhlYWRlclJvdy5jbGFzc0xpc3QuYWRkKCdjb2x1bW4taGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgdGFibGVIZWFkZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHRhYmxlSGVhZGVyUm93KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgICAgIGNvbHVtbjEuY2xhc3NMaXN0LmFkZCgnY29sdW1uLWhlYWRlcicpO1xuICAgICAgICAgICAgICAgIGNvbHVtbjEuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgICAgICAgICAgICAgIGNvbHVtbjEuaW5uZXJUZXh0ID0gJ1Rhc2snO1xuICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVyUm93LmFwcGVuZENoaWxkKGNvbHVtbjEpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICAgICAgY29sdW1uMi5jbGFzc0xpc3QuYWRkKCdjb2x1bW4taGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgY29sdW1uMi5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZS1kYXRlJyk7XG4gICAgICAgICAgICAgICAgY29sdW1uMi5pbm5lclRleHQgPSAnRGF0ZS1EdWUnO1xuICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVyUm93LmFwcGVuZENoaWxkKGNvbHVtbjIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICAgICAgY29sdW1uMy5jbGFzc0xpc3QuYWRkKCdjb2x1bW4taGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgY29sdW1uMy5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZS1kYXRlJyk7XG4gICAgICAgICAgICAgICAgY29sdW1uMy5pbm5lckhUTUwgPSAnQ29tcGxldGVkPyc7XG4gICAgICAgICAgICAgICAgdGFibGVIZWFkZXJSb3cuYXBwZW5kQ2hpbGQoY29sdW1uMyk7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KSgpO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjcmVhdGVGb3JtSGVhZGVyID0gKCgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICAgICBjb25zdCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1IZWFkZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1oZWFkZXInKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKTtcbiAgICAgICAgXG4gICAgXG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgYWRkLmNsYXNzTGlzdC5hZGQoJ2FkZCcpO1xuICAgICAgICBhZGQuaW5uZXJUZXh0ID0gJ0FkZCc7XG4gICAgICAgIGZvcm1IZWFkZXIuYXBwZW5kQ2hpbGQoYWRkKTtcbiAgICBcbiAgICAgICAgY29uc3QgY3JlYXRlVGFza0J1dHRvbiA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrQnV0dG9uID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ1dHRvbicpO1xuICAgICAgICAgICAgdGFza0J1dHRvbi5pZCA9ICd0YXNrLWJ1dHRvbic7XG4gICAgICAgICAgICB0YXNrQnV0dG9uLmlubmVyVGV4dCA9ICdUYXNrJztcbiAgICAgICAgICAgIGZvcm1IZWFkZXIuYXBwZW5kQ2hpbGQodGFza0J1dHRvbik7XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbicpO1xuICAgICAgICAgICAgcHJvamVjdEJ1dHRvbi5pZCA9ICdwcm9qZWN0LWJ1dHRvbic7XG4gICAgICAgICAgICBwcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdQcm9qZWN0JztcbiAgICAgICAgICAgIGZvcm1IZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbik7XG4gICAgICAgIH0pKCk7ICBcbiAgICB9KSgpOyAgIFxuXG4gICAgY29uc3QgY3JlYXRlVGFza0ZvY3VzID0gKCgpID0+IHtcblxuICAgICAgICBsZXQgdGFza0ZvY3VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tGb2N1cy5pZCA9ICd0YXNrLWZvY3VzJztcbiAgICAgICAgdGFza0ZvY3VzLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9jdXMnKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrRm9jdXMpO1xuXG4gICAgICAgIGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbmZvLWNvbnRhaW5lcicpO1xuICAgICAgICB0YXNrRm9jdXMuYXBwZW5kQ2hpbGQoaW5mb0NvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlVGl0bGVTZWN0aW9uID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGl0bGVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzLXNlY3Rpb24nKTtcbiAgICAgICAgICAgIHRpdGxlU2VjdGlvbi5pZCA9ICgndGl0bGUtc2VjdGlvbicpO1xuICAgICAgICAgICAgdGl0bGVTZWN0aW9uLmlubmVyVGV4dCA9ICdUaXRsZSA6ICc7XG4gICAgICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlU2VjdGlvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlUGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRpdGxlUGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJyk7XG4gICAgICAgICAgICB0aXRsZVBsYWNlaG9sZGVyLmlkID0gJ3RpdGxlLXBsYWNlaG9sZGVyJztcbiAgICAgICAgICAgIHRpdGxlUGxhY2Vob2xkZXIuaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlUGxhY2Vob2xkZXIpO1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZURlc2NyaXB0aW9uU2VjdGlvbiA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb2N1cy1zZWN0aW9uJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvblNlY3Rpb24uaWQgPSAoJ2Rlc2NyaXB0aW9uLXNlY3Rpb24nKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uU2VjdGlvbi5pbm5lclRleHQgPSAnRGVzY3JpcHRpb246ICc7XG4gICAgICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uU2VjdGlvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uUGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uUGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvblBsYWNlaG9sZGVyLmlkID0gJ2Rlc2NyaXB0aW9uLXBsYWNlaG9sZGVyJztcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uUGxhY2Vob2xkZXIuaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUGxhY2Vob2xkZXIpO1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZURhdGVTZWN0aW9uID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkYXRlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb2N1cy1zZWN0aW9uJyk7XG4gICAgICAgICAgICBkYXRlU2VjdGlvbi5pZCA9ICgnZGF0ZS1zZWN0aW9uJyk7XG4gICAgICAgICAgICBkYXRlU2VjdGlvbi5pbm5lclRleHQgPSAnRGF0ZTogJztcbiAgICAgICAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVNlY3Rpb24pO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRlUGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRhdGVQbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKCd0YXNrLWluZm8nKTtcbiAgICAgICAgICAgIGRhdGVQbGFjZWhvbGRlci5pZCA9ICdkYXRlLXBsYWNlaG9sZGVyJztcbiAgICAgICAgICAgIGRhdGVQbGFjZWhvbGRlci5pbm5lclRleHQgPSAnJztcbiAgICAgICAgICAgIGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVBsYWNlaG9sZGVyKTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBjb25zdCBjcmVhdGVQcmlvcml0eVNlY3Rpb24gPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcmlvcml0eVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9jdXMtc2VjdGlvbicpO1xuICAgICAgICAgICAgcHJpb3JpdHlTZWN0aW9uLmlkID0gKCdwcmlvcml0eS1zZWN0aW9uJyk7XG4gICAgICAgICAgICBwcmlvcml0eVNlY3Rpb24uaW5uZXJUZXh0ID0gJ1ByaW9yaXR5OiAnO1xuICAgICAgICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eVNlY3Rpb24pO1xuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eVBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcmlvcml0eVBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mbycpO1xuICAgICAgICAgICAgcHJpb3JpdHlQbGFjZWhvbGRlci5pZCA9ICdwcmlvcml0eS1wbGFjZWhvbGRlcic7XG4gICAgICAgICAgICBwcmlvcml0eVBsYWNlaG9sZGVyLmlubmVyVGV4dCA9ICcnO1xuICAgICAgICAgICAgaW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eVBsYWNlaG9sZGVyKTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0U2VjdGlvbiA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9jdXMtc2VjdGlvbicpO1xuICAgICAgICAgICAgcHJvamVjdFNlY3Rpb24uaWQgPSAoJ3Byb2plY3QtZm9jdXMtc2VjdGlvbicpO1xuICAgICAgICAgICAgcHJvamVjdFNlY3Rpb24uaW5uZXJUZXh0ID0gJ1Byb2plY3Q6ICc7XG4gICAgICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RTZWN0aW9uKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9qZWN0UGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJyk7XG4gICAgICAgICAgICBwcm9qZWN0UGxhY2Vob2xkZXIuaWQgPSAncHJvamVjdC1mb2N1cy1wbGFjZWhvbGRlcic7XG4gICAgICAgICAgICBwcm9qZWN0UGxhY2Vob2xkZXIuaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgICAgICBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RQbGFjZWhvbGRlcik7XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlQnV0dG9uU2VjdGlvbiA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBidXR0b25TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBidXR0b25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzLWJ1dHRvbi1zZWN0aW9uJyk7XG4gICAgICAgICAgICB0YXNrRm9jdXMuYXBwZW5kQ2hpbGQoYnV0dG9uU2VjdGlvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUVkaXRCdXR0b24gPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBlZGl0QnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzLWJ1dHRvbi1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBidXR0b25TZWN0aW9uLmFwcGVuZENoaWxkKGVkaXRCdXR0b25Db250YWluZXIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9jdXMtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZWRpdEJ1dHRvbi5pbm5lclRleHQgPSAnRWRpdCc7XG4gICAgICAgICAgICAgICAgZWRpdEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZURlbGV0ZUJ1dHRvbiA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzLWJ1dHRvbi1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBidXR0b25TZWN0aW9uLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9jdXMtYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9ICdEZWxldGUnO1xuICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KSgpO1xuICAgIH0pKCk7XG4gICAgXG59O1xuXG5cblxuIiwiaW1wb3J0IHsgcHJvamVjdExpc3QsIHRhc2tMaXN0IH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IHJlbW92ZVRhYmxlUm93cyB9IGZyb20gXCIuL3JlbW92ZVRhYmxlUm93c1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qKXtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRhYmxlJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAvLyBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFibGUtaXRlbScpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG5cblxuICAgIGNvbnN0IGNyZWF0ZVRhYmxlQnV0dG9uID0gKCgpID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFibGUtaXRlbScpO1xuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHJvdyk7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5pZCA9IHByb2oubmFtZTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFibGUtYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSBwcm9qLm5hbWU7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFByb2plY3QpXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgICAgIGZ1bmN0aW9uIHN3aXRjaFByb2plY3QoKXtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdExpc3RbaV0ubmFtZSA9PSBidXR0b24uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVGFibGVSb3dzKCk7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRMaXN0KGJ1dHRvbi5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNvcnRMaXN0KHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrICl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4ID09IHRhc2tMaXN0W2ldLnByb2plY3Qpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGFzayh0YXNrTGlzdFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfSkoKTtcbn07IiwiXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayAodG9kbykge1xuXG4gICAgICAgIFxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGFibGUnKTtcblxuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIHRhYmxlLmFwcGVuZENoaWxkKHRhc2spO1xuXG4gICAgY29uc3QgYWRkVGFza1RpdGxlID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcbiAgICAgICAgdGFza1RpdGxlLmlubmVyVGV4dCA9IHRvZG8udGl0bGU7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgYWRkVGFza0R1ZURhdGUgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlLWRhdGUnKTtcbiAgICAgICAgdGFza0R1ZURhdGUuaW5uZXJUZXh0ID0gdG9kby5kdWVEYXRlO1xuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcbiAgICB9KSgpOyBcblxuICAgIGNvbnN0IGFkZENvbXBsZXRpb24gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb21wbGV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgY29tcGxldGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbXBsZXRpb24nKTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChjb21wbGV0aW9uKTtcblxuICAgICAgICBjb25zdCBhZGRDb21wbGV0ZWRDaGVja2JveCA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wbGV0ZWRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb21wbGV0ZWRDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICAgICAgICAgIGNvbXBsZXRpb24uYXBwZW5kQ2hpbGQoY29tcGxldGVkQ2hlY2tib3gpO1xuICAgICAgICB9KSgpO1xuICAgIH0pKCk7IFxuXG59OyIsImltcG9ydCB7IHRhc2tMaXN0IH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsVGFza3MoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNyZWF0ZVRhc2sodGFza0xpc3RbaV0pO1xuICAgIH1cbn0iLCJcbmV4cG9ydCBmdW5jdGlvbiBmb2N1c1Rhc2sodGFzaykge1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1wbGFjZWhvbGRlcicpO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUtcGxhY2Vob2xkZXInKTtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvY3VzLXBsYWNlaG9sZGVyJyk7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5LXBsYWNlaG9sZGVyJyk7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLXBsYWNlaG9sZGVyJyk7XG5cbiAgICB0aXRsZS5pbm5lclRleHQgPSB0YXNrLnRpdGxlO1xuICAgIGRhdGUuaW5uZXJUZXh0ID0gdGFzay5kdWVEYXRlO1xuICAgIHByb2plY3QuaW5uZXJUZXh0ID0gdGFzay5wcm9qZWN0O1xuICAgIHByaW9yaXR5LmlubmVySFRNTCA9IHRhc2sucHJpb3JpdHk7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gdGFzay5kZXNjcmlwdGlvbjtcblxufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZUhvbWVQYWdlIH0gZnJvbSAnLi9jcmVhdGVIb21lcGFnZSc7XG5pbXBvcnQgeyBidWlsZFRhc2tGb3JtIH0gZnJvbSAnLi9idWlsZFRhc2tGb3JtRE9NJztcblxuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2NyZWF0ZVRhc2tcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5cbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyByaWdodFNpZGViYXJMb2dpYyB9IGZyb20gJy4vcmlnaHRTaWRlYmFyTG9naWMnO1xuXG5pbXBvcnQgeyBkaXNwbGF5QWxsVGFza3MgfSBmcm9tICcuL2Rpc3BsYXlBbGxUYXNrcyc7XG5pbXBvcnQgeyBhZGRUb1Byb2plY3RTZWxlY3QgfSBmcm9tICcuL2FkZFRvUHJvamVjdFNlbGVjdCc7XG5pbXBvcnQgeyBzaG93VGFza0RldGFpbHMgfSBmcm9tICcuL3Nob3dUYXNrRGV0YWlscyc7XG5pbXBvcnQgeyBmb2N1c1Rhc2sgfSBmcm9tICcuL2ZvY3VzVGFzayc7XG4vLyBpbXBvcnQgeyBwdXNoVGFzayB9IGZyb20gJy4vdGFza0Zvcm1QdXNoJztcblxuXG5cblxuXG5leHBvcnQgdmFyIHRhc2tMaXN0ID0gW107XG5leHBvcnQgdmFyIHByb2plY3RMaXN0ID0gW107XG5cbi8vIGJ1aWxkcyBwYWdlXG5jcmVhdGVIb21lUGFnZSgpO1xuYnVpbGRUYXNrRm9ybSgpO1xucmlnaHRTaWRlYmFyTG9naWMoKTtcblxuLy8gY3JlYXRlU2lkZWJhckxvZ2ljKClcblxuLyoqKioqKioqKioqKioqIE5FVyBTVFVGRiAqKioqKioqKioqKioqKiovXG5cblxuXG5cblxuXG5cbmNvbnN0IGNyZWF0ZVRhc2tEYXRhID0gKCgpID0+IHtcbiAgICBsZXQgdGFzazEgPSBuZXcgVGFzaygnZXJyYW5kMScsICd3YXNoIGNsb3RoZXMnLCAnMTAvMDEvMjInLCAnISEnLCAnRXJyYW5kcycpO1xuICAgIGxldCB0YXNrMiA9IG5ldyBUYXNrKCdzY2hvb2wgMScsICdtYWtlIGFuIGFwcG9pbnRtZW50IGZvciBmdW5ndXMnLCAnOS8wMS8yMicsICchIScsICdTY2hvb2wnKTtcbiAgICBsZXQgdGFzazMgPSBuZXcgVGFzaygnZXJyYW5kMicsICdtYWtlIGNoaXJvIGFwcG9pbm1lbnQnLCAnNy8xMC8yMicsICchJywgICdFcnJhbmRzJyk7XG4gICAgbGV0IHRhc2s0ID0gbmV3IFRhc2soJ3NjaG9vbCAyJywgJ21ha2Ugd2VlayA0IGRpc2N1c3Npb24gcG9zdCcsICcwNy8wOC8yMicsICchISEnLCAnU2Nob29sJyk7XG4gICAgbGV0IHRhc2s1ID0gbmV3IFRhc2soJ2VycmFuZDMnLCAnc2hhdmUgYmVhcmQnLCAnMTIvMjQvMjInLCAnISEhJywgJ0VycmFuZHMnKTtcblxuICAgIHRhc2tMaXN0LnB1c2godGFzazEpO1xuICAgIHRhc2tMaXN0LnB1c2godGFzazIpO1xuICAgIHRhc2tMaXN0LnB1c2godGFzazMpO1xuICAgIHRhc2tMaXN0LnB1c2godGFzazQpO1xuICAgIHRhc2tMaXN0LnB1c2godGFzazUpO1xuXG4gICAgICAgIFxufSkoKTtcblxubGV0IHByb2plY3QxID0gbmV3IFByb2plY3QoJ0VycmFuZHMnLCAnc2ltcGxlIGVycmFuZHMgSSBuZWVkIHRvIGRvJyk7XG4gICAgbGV0IHByb2plY3QyID0gbmV3IFByb2plY3QoJ1NjaG9vbCcsICdzdHVmZiByZWxhdGVkIHRvIHNjaG9vbCcpO1xuXG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0MSk7XG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0Mik7XG5cbmRpc3BsYXlBbGxUYXNrcygpO1xuXG5cblxuZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0TGlzdFtpXSk7XG59XG5cbmFkZFRvUHJvamVjdFNlbGVjdCgpO1xuXG4vKioqKioqKioqKioqKiogTkVXIFNUVUZGICoqKioqKioqKioqKioqKi9cblxuc2hvd1Rhc2tEZXRhaWxzKCk7XG5cbmZvY3VzVGFzayh0YXNrTGlzdFswXSk7XG5cbiIsImV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcm9qZWN0RGVzY3JpcHRpb24sIG5vdGVzKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcm9qZWN0RGVzY3JpcHRpb24gPSBwcm9qZWN0RGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICB9XG59OyIsImltcG9ydCB7IHByb2plY3RMaXN0fSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoUHJvamVjdCgpIHtcblxuICAgIGxldCAgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJyk7XG4gICAgbGV0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gXG5cbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlLCBwcm9qZWN0RGVzY3JpcHRpb24udmFsdWUpO1xuXG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0KTtcblxuICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgXG4gICAgcHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xuICAgIHByb2plY3REZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG5cbiAgICAvLyBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tcHJvamVjdCcpO1xuICAgIC8vIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAvLyBvcHRpb24uaW5uZXJUZXh0ID0gcHJvamVjdE5hbWU7XG4gICAgLy8gb3B0aW9uLnZhbHVlID0gcHJvamVjdE5hbWU7XG4gICAgLy8gc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbn07IiwiaW1wb3J0IHsgdGFza0xpc3QgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoVGFzaygpIHtcblxuICAgIGxldCAgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS10aXRsZScpO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWRlc2NyaXB0aW9uJyk7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1kYXRlJyk7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tcHJpb3JpdHknKTtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXByb2plY3QnKVxuXG4gICAgbGV0IHRhc2sgPSBuZXcgVGFzayh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGRhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlLCBwcm9qZWN0LnZhbHVlKTtcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2spO1xuXG4gICAgY3JlYXRlVGFzayh0YXNrKTtcbiAgICBcbiAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgIGRhdGUudmFsdWUgPSBcIlwiO1xuICAgIHByaW9yaXR5LnZhbHVlID0gXCJcIjtcbiAgICBwcm9qZWN0LnZhbHVlID0gXCJcIjtcblxuICAgIGNvbnNvbGUubG9nKHRhc2tMaXN0KTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhYmxlUm93cygpe1xuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRhYmxlJyk7XG4gICAgZm9yKGxldCBpID0gMTsgaTx0YWJsZS5yb3dzLmxlbmd0aDspe1xuICAgICAgICB0YWJsZS5kZWxldGVSb3coaSk7XG4gICAgfVxufTsiLCJpbXBvcnQgeyBidWlsZFRhc2tGb3JtIH0gZnJvbSBcIi4vYnVpbGRUYXNrRm9ybURPTVwiO1xuaW1wb3J0IHsgYnVpbGRQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL2J1aWxkUHJvamVjdEZvcm1ET01cIjtcbmltcG9ydCB7IGFkZFRvUHJvamVjdFNlbGVjdCB9IGZyb20gXCIuL2FkZFRvUHJvamVjdFNlbGVjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHRTaWRlYmFyTG9naWMoKSB7XG5cbiAgICAvLyByZW1vdmVzIHNpZGViYXIgZm9yIFRhc2sgLyBQcm9qZWN0IGZvcm0gc3dpdGNoXG4gICAgZnVuY3Rpb24gcmVtb3ZlTGFzdENoaWxkKCkge1xuICAgICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgc2VsZWN0LnJlbW92ZUNoaWxkKHNlbGVjdC5sYXN0Q2hpbGQpO1xuICAgIH07XG5cbiAgICAvLyB0YXNrIGZvcm0gc3dpdGNoXG4gICAgY29uc3QgdGFza0J1dHRvbkxvZ2ljID0gKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuVGFza01lbnUpO1xuICAgICAgICBmdW5jdGlvbiBvcGVuVGFza01lbnUoKSB7XG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stYnV0dG9uJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhidXR0b24uc3R5bGUuY29sb3IpO1xuICAgICAgICAgICAgcmVtb3ZlTGFzdENoaWxkKCk7XG4gICAgICAgICAgICBidWlsZFRhc2tGb3JtKCk7XG4gICAgICAgICAgICBhZGRUb1Byb2plY3RTZWxlY3QoKTtcblxuICAgICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICAvLyBwcm9qZWN0IGZvcm0gc3dpdGNoXG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbkxvZ2ljID0gKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuVGFza01lbnUpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgZnVuY3Rpb24gb3BlblRhc2tNZW51KCkge1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWJ1dHRvbicpO1xuICAgICAgICAgICAgcmVtb3ZlTGFzdENoaWxkKCk7XG4gICAgICAgICAgICBidWlsZFByb2plY3RGb3JtKCk7XG5cbiAgICAgICAgfTtcbiAgICB9KSgpO1xufVxuIiwiaW1wb3J0IHsgdGFza0xpc3QgfSBmcm9tIFwiLlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Rhc2tEZXRhaWxzKCkge1xuICAgIGxldCB0YXNrID0gdGFza0xpc3RbMF07XG4gICAgY29uc29sZS5sb2codGFza0xpc3RbMF0pO1xuICAgIGNvbnNvbGUubG9nKHRhc2sudGl0bGUpO1xuICAgIGNvbnNvbGUubG9nKHRhc2suZGVzY3JpcHRpb24pO1xuICAgIGNvbnNvbGUubG9nKHRhc2suZHVlRGF0ZSk7XG4gICAgY29uc29sZS5sb2codGFzay5wcmlvcml0eSk7XG4gICAgY29uc29sZS5sb2codGFzay5wcm9qZWN0KTtcbn07XG5cbiIsImV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuICAgIGdldFRhc2tQcmV2aWV3KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZSArICcgLyAnICsgdGhpcy5kdWVEYXRlO1xuICAgIH1cbiAgICBnZXRUYXNrRnVsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGUgKyAnIHwgJyArIHRoaXMuZGVzY3JpcHRpb24gKyAnIHwgJyArIHRoaXMuZHVlRGF0ZSArICcgfCAnICsgdGhpcy5wcmlvcml0eSArICcgfCAnO1xuICAgIH0gXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9