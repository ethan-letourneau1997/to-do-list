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
___CSS_LOADER_EXPORT___.push([module.id, "/*********** || GENERAL STYLES || *****************************************/\n\n:root {\n    --white:white;\n    --soothing-breeze:#b2bec3;\n    --gray:#636e72;\n    --dark:#2d3436;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\n    html,\n    body {\n        margin: 0;\n        padding: 0;\n        height: 100%;\n    }\n\n        #content {\n            display: grid;\n\n            height: 100%;\n            width: 100%;\n\n\n            grid-template-columns: 2fr 5fr 2fr;\n            grid-template-rows: 1fr 80px 12fr;\n            \n        }\n\n            input[type=checkbox] {\n                transform: scale(1.5);\n            }\n            \n/*********** || HEADER || *****************************************/\n\n.header {\n    display: flex;\n    justify-content: center;\n    \n    grid-column: 1 / 4;\n    grid-row: 1 / 2;\n\n    padding: 10px;\n\n    background: rgb(131,58,180);\n    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);\n\n\n    font-size: 30px;\n    color: var(--white);\n}\n\n/*********** || MAIN || *****************************************/\n\n.main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 4;\n\n}\n\n    .task { \n\n        height: 50px;\n        background-color: #dfe6e948;\n\n        font-size: 25px;\n    }\n\n        th {\n            width: 400px;\n\n            background-color: var(--gray);\n            color: var(--white);\n            font-size: 25px; \n        }\n\n        td {\n            align-items: center;\n            text-align: center;\n        }\n\n    \n/*********** || PROJECT TABLE SIDEBAR || *****************************************/\n\n.sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 4;\n\n    background-color: var(--dark);\n}\n\n    .projects-header {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 60px;\n        font-size: 40px;\n        padding-top: 20px;\n        color: var(--white);\n        margin-bottom: 10px;\n        \n    }\n\n    .project-table {\n        width: 100%;\n\n    }\n\n    .project-table-item {\n        width: 100%;\n        padding: 10px;\n\n\n    }\n\n    .project-table-button,\n    .project-table-button-selected {\n        width: 100%;\n\n        background-color: var(--dark);\n        border: 2px solid var(--white);\n        color: white;\n\n        padding: 10px;\n        font-size: 25px;\n    }\n\n    .project-table-button:hover{\n        background-color: var(--gray);\n    }\n\n    .project-table-button-selected {\n        background-color: var(--white);\n        color: var(--dark);\n        font-weight: bold;\n    }\n\n\n\n\n\n/*********** || RIGHT SIDEBAR HEADER || *****************************************/\n\n.form-header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    grid-column: 3 / 4;\n    grid-row: 2 / 3;\n    \n    background-color: var(--dark);\n    color: var(white);\n\n    font-size: 40px;\n}\n\n    .form-header button {\n        background-color: var(--dark);\n        border: none;\n\n        font-size: 40px;\n    }\n\n/*********** || RIGHT SIDEBAR (TASK / PROJECT FORMS) || *********************/\n\n\n.task-form {\n    grid-column: 3 / 4;\n    grid-row: 3 / 4;\n\n    background-color: var(--dark);\n\n    color: var(--white);\n}      \n\n    .form-item {\n        display: grid;\n        gap: 10px;\n        height: 160px;\n        padding: 30px;\n    }\n\n        .form-label {\n            font-size: 30px;\n        }\n\n    .submit-container {\n        display: flex;\n        justify-content: center;\n\n        margin-top: 20px;\n    }\n\n        .submit {\n            justify-content: center;\n\n            width: 50%;\n            font-size: 20px;\n        }\n    \n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;IACI,aAAa;IACb,yBAAyB;IACzB,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,iCAAiC;IACjC,sBAAsB;AAC1B;;IAEI;;QAEI,SAAS;QACT,UAAU;QACV,YAAY;IAChB;;QAEI;YACI,aAAa;;YAEb,YAAY;YACZ,WAAW;;;YAGX,kCAAkC;YAClC,iCAAiC;;QAErC;;YAEI;gBACI,qBAAqB;YACzB;;AAEZ,mEAAmE;;AAEnE;IACI,aAAa;IACb,uBAAuB;;IAEvB,kBAAkB;IAClB,eAAe;;IAEf,aAAa;;IAEb,2BAA2B;IAC3B,yGAAyG;;;IAGzG,eAAe;IACf,mBAAmB;AACvB;;AAEA,iEAAiE;;AAEjE;IACI,kBAAkB;IAClB,eAAe;;AAEnB;;IAEI;;QAEI,YAAY;QACZ,2BAA2B;;QAE3B,eAAe;IACnB;;QAEI;YACI,YAAY;;YAEZ,6BAA6B;YAC7B,mBAAmB;YACnB,eAAe;QACnB;;QAEA;YACI,mBAAmB;YACnB,kBAAkB;QACtB;;;AAGR,kFAAkF;;AAElF;IACI,kBAAkB;IAClB,eAAe;;IAEf,6BAA6B;AACjC;;IAEI;QACI,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,YAAY;QACZ,eAAe;QACf,iBAAiB;QACjB,mBAAmB;QACnB,mBAAmB;;IAEvB;;IAEA;QACI,WAAW;;IAEf;;IAEA;QACI,WAAW;QACX,aAAa;;;IAGjB;;IAEA;;QAEI,WAAW;;QAEX,6BAA6B;QAC7B,8BAA8B;QAC9B,YAAY;;QAEZ,aAAa;QACb,eAAe;IACnB;;IAEA;QACI,6BAA6B;IACjC;;IAEA;QACI,8BAA8B;QAC9B,kBAAkB;QAClB,iBAAiB;IACrB;;;;;;AAMJ,iFAAiF;;AAEjF;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;;IAEnB,kBAAkB;IAClB,eAAe;;IAEf,6BAA6B;IAC7B,iBAAiB;;IAEjB,eAAe;AACnB;;IAEI;QACI,6BAA6B;QAC7B,YAAY;;QAEZ,eAAe;IACnB;;AAEJ,6EAA6E;;;AAG7E;IACI,kBAAkB;IAClB,eAAe;;IAEf,6BAA6B;;IAE7B,mBAAmB;AACvB;;IAEI;QACI,aAAa;QACb,SAAS;QACT,aAAa;QACb,aAAa;IACjB;;QAEI;YACI,eAAe;QACnB;;IAEJ;QACI,aAAa;QACb,uBAAuB;;QAEvB,gBAAgB;IACpB;;QAEI;YACI,uBAAuB;;YAEvB,UAAU;YACV,eAAe;QACnB","sourcesContent":["/*********** || GENERAL STYLES || *****************************************/\n\n:root {\n    --white:white;\n    --soothing-breeze:#b2bec3;\n    --gray:#636e72;\n    --dark:#2d3436;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\n    html,\n    body {\n        margin: 0;\n        padding: 0;\n        height: 100%;\n    }\n\n        #content {\n            display: grid;\n\n            height: 100%;\n            width: 100%;\n\n\n            grid-template-columns: 2fr 5fr 2fr;\n            grid-template-rows: 1fr 80px 12fr;\n            \n        }\n\n            input[type=checkbox] {\n                transform: scale(1.5);\n            }\n            \n/*********** || HEADER || *****************************************/\n\n.header {\n    display: flex;\n    justify-content: center;\n    \n    grid-column: 1 / 4;\n    grid-row: 1 / 2;\n\n    padding: 10px;\n\n    background: rgb(131,58,180);\n    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);\n\n\n    font-size: 30px;\n    color: var(--white);\n}\n\n/*********** || MAIN || *****************************************/\n\n.main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 4;\n\n}\n\n    .task { \n\n        height: 50px;\n        background-color: #dfe6e948;\n\n        font-size: 25px;\n    }\n\n        th {\n            width: 400px;\n\n            background-color: var(--gray);\n            color: var(--white);\n            font-size: 25px; \n        }\n\n        td {\n            align-items: center;\n            text-align: center;\n        }\n\n    \n/*********** || PROJECT TABLE SIDEBAR || *****************************************/\n\n.sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 4;\n\n    background-color: var(--dark);\n}\n\n    .projects-header {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 60px;\n        font-size: 40px;\n        padding-top: 20px;\n        color: var(--white);\n        margin-bottom: 10px;\n        \n    }\n\n    .project-table {\n        width: 100%;\n\n    }\n\n    .project-table-item {\n        width: 100%;\n        padding: 10px;\n\n\n    }\n\n    .project-table-button,\n    .project-table-button-selected {\n        width: 100%;\n\n        background-color: var(--dark);\n        border: 2px solid var(--white);\n        color: white;\n\n        padding: 10px;\n        font-size: 25px;\n    }\n\n    .project-table-button:hover{\n        background-color: var(--gray);\n    }\n\n    .project-table-button-selected {\n        background-color: var(--white);\n        color: var(--dark);\n        font-weight: bold;\n    }\n\n\n\n\n\n/*********** || RIGHT SIDEBAR HEADER || *****************************************/\n\n.form-header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    grid-column: 3 / 4;\n    grid-row: 2 / 3;\n    \n    background-color: var(--dark);\n    color: var(white);\n\n    font-size: 40px;\n}\n\n    .form-header button {\n        background-color: var(--dark);\n        border: none;\n\n        font-size: 40px;\n    }\n\n/*********** || RIGHT SIDEBAR (TASK / PROJECT FORMS) || *********************/\n\n\n.task-form {\n    grid-column: 3 / 4;\n    grid-row: 3 / 4;\n\n    background-color: var(--dark);\n\n    color: var(--white);\n}      \n\n    .form-item {\n        display: grid;\n        gap: 10px;\n        height: 160px;\n        padding: 30px;\n    }\n\n        .form-label {\n            font-size: 30px;\n        }\n\n    .submit-container {\n        display: flex;\n        justify-content: center;\n\n        margin-top: 20px;\n    }\n\n        .submit {\n            justify-content: center;\n\n            width: 50%;\n            font-size: 20px;\n        }\n    \n"],"sourceRoot":""}]);
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

/***/ "./src/buildProjectFormDOM":
/*!*********************************!*\
  !*** ./src/buildProjectFormDOM ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildProjectForm": () => (/* binding */ buildProjectForm)
/* harmony export */ });

function buildProjectForm() {

    // change color of selected button
    const changeButtonColor = (() => {
        let taskButton = document.getElementById('task-button');
        taskButton.style.color = 'black';

        let projectButton = document.getElementById('project-button');
        projectButton.style.color = 'white';
    })();

    const content = document.getElementById('content');  

    // build form 
    const buildAddBar = (() => {
        const projectForm = document.createElement('form');
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
/* harmony import */ var _taskFormPush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFormPush */ "./src/taskFormPush.js");



function buildTaskForm() {

    // change color of selected button
    const changeButtonColor = (() => {
        let taskButton = document.getElementById('task-button');
        taskButton.style.color = 'white';

        let projectButton = document.getElementById('project-button');
        projectButton.style.color = 'black';
    })();
    
    const content = document.getElementById('content');  

    // build form 
    const buildAddBar = (() => {
        const taskForm = document.createElement('form');
        taskForm.id = 'form';
        taskForm.setAttribute('onsubmit', _taskFormPush__WEBPACK_IMPORTED_MODULE_0__.pushTask)
        // taskForm.setAttribute('action', 'javascript:submitTask()')
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
    
        const addSubmit = (() => {
            const submitContainer = document.createElement('div');
            submitContainer.classList.add('submit-container');
            taskForm.appendChild(submitContainer);
    
            const submit = document.createElement('input');
            submit.classList.add('submit');
            submit.innerText = 'Add';
            submit.setAttribute('type', 'submit')
            submitContainer.appendChild(submit);

            // link to submit function 
            // submit.addEventListener('click', pushTask);

            // prevent task reset 
            // submit.addEventListener("click", function(event){
            //     event.preventDefault()
            //   });
              
            // reset form fields
            // submit.addEventListener('click', buildTaskForm);

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

/************** NEW STUFF ***************/




const errands = document.getElementById('Errands');



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

/***/ }),

/***/ "./src/taskFormPush.js":
/*!*****************************!*\
  !*** ./src/taskFormPush.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pushTask": () => (/* binding */ pushTask)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");




function pushTask() {

    let  title = document.getElementById('form-title').value;
    let description = document.getElementById('form-description').value;
    let date = document.getElementById('form-date').value;
    let priority = document.getElementById('form-priority').value;

    console.log(title);
    console.log(description);
    console.log(date);
    console.log(priority);

    let task = new _task__WEBPACK_IMPORTED_MODULE_1__.Task(title, description, date, priority);
    
    
    const titlee = documen.getElementById('title');
    titlee.innerText = 'test';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkNkI7QUFDQztBQUNZOztBQUVuQzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsdUNBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDckJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2J1aWxkUHJvamVjdEZvcm1ET00iLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9idWlsZFRhc2tGb3JtRE9NLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlSG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXlBbGxUYXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3JlbW92ZVRhYmxlUm93cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3JpZ2h0U2lkZWJhckxvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tGb3JtUHVzaC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKioqKioqKioqKiogfHwgR0VORVJBTCBTVFlMRVMgfHwgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuOnJvb3Qge1xcbiAgICAtLXdoaXRlOndoaXRlO1xcbiAgICAtLXNvb3RoaW5nLWJyZWV6ZTojYjJiZWMzO1xcbiAgICAtLWdyYXk6IzYzNmU3MjtcXG4gICAgLS1kYXJrOiMyZDM0MzY7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuICAgIGh0bWwsXFxuICAgIGJvZHkge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAgICAgI2NvbnRlbnQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcblxcblxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDVmciAyZnI7XFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgODBweCAxMmZyO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBcXG4vKioqKioqKioqKiogfHwgSEVBREVSIHx8ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcblxcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTMxLDU4LDE4MCk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMzEsNTgsMTgwLDEpIDAlLCByZ2JhKDI1MywyOSwyOSwxKSA1MCUsIHJnYmEoMjUyLDE3Niw2OSwxKSAxMDAlKTtcXG5cXG5cXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4vKioqKioqKioqKiogfHwgTUFJTiB8fCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4ubWFpbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xcblxcbn1cXG5cXG4gICAgLnRhc2sgeyBcXG5cXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmU2ZTk0ODtcXG5cXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgfVxcblxcbiAgICAgICAgdGgge1xcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcXG5cXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDsgXFxuICAgICAgICB9XFxuXFxuICAgICAgICB0ZCB7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgIFxcbi8qKioqKioqKioqKiB8fCBQUk9KRUNUIFRBQkxFIFNJREVCQVIgfHwgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxufVxcblxcbiAgICAucHJvamVjdHMtaGVhZGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDYwcHg7XFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtdGFibGUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtdGFibGUtaXRlbSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuXFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtdGFibGUtYnV0dG9uLFxcbiAgICAucHJvamVjdC10YWJsZS1idXR0b24tc2VsZWN0ZWQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtdGFibGUtYnV0dG9uOmhvdmVye1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtdGFibGUtYnV0dG9uLXNlbGVjdGVkIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB9XFxuXFxuXFxuXFxuXFxuXFxuLyoqKioqKioqKioqIHx8IFJJR0hUIFNJREVCQVIgSEVBREVSIHx8ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5mb3JtLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICBjb2xvcjogdmFyKHdoaXRlKTtcXG5cXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4gICAgLmZvcm0taGVhZGVyIGJ1dHRvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG5cXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgfVxcblxcbi8qKioqKioqKioqKiB8fCBSSUdIVCBTSURFQkFSIChUQVNLIC8gUFJPSkVDVCBGT1JNUykgfHwgKioqKioqKioqKioqKioqKioqKioqL1xcblxcblxcbi50YXNrLWZvcm0ge1xcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufSAgICAgIFxcblxcbiAgICAuZm9ybS1pdGVtIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICAgICAgcGFkZGluZzogMzBweDtcXG4gICAgfVxcblxcbiAgICAgICAgLmZvcm0tbGFiZWwge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgLnN1Ym1pdC1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgfVxcblxcbiAgICAgICAgLnN1Ym1pdCB7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICB9XFxuICAgIFxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGlDQUFpQztJQUNqQyxzQkFBc0I7QUFDMUI7O0lBRUk7O1FBRUksU0FBUztRQUNULFVBQVU7UUFDVixZQUFZO0lBQ2hCOztRQUVJO1lBQ0ksYUFBYTs7WUFFYixZQUFZO1lBQ1osV0FBVzs7O1lBR1gsa0NBQWtDO1lBQ2xDLGlDQUFpQzs7UUFFckM7O1lBRUk7Z0JBQ0kscUJBQXFCO1lBQ3pCOztBQUVaLG1FQUFtRTs7QUFFbkU7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCOztJQUV2QixrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixhQUFhOztJQUViLDJCQUEyQjtJQUMzQix5R0FBeUc7OztJQUd6RyxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBLGlFQUFpRTs7QUFFakU7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTs7QUFFbkI7O0lBRUk7O1FBRUksWUFBWTtRQUNaLDJCQUEyQjs7UUFFM0IsZUFBZTtJQUNuQjs7UUFFSTtZQUNJLFlBQVk7O1lBRVosNkJBQTZCO1lBQzdCLG1CQUFtQjtZQUNuQixlQUFlO1FBQ25COztRQUVBO1lBQ0ksbUJBQW1CO1lBQ25CLGtCQUFrQjtRQUN0Qjs7O0FBR1Isa0ZBQWtGOztBQUVsRjtJQUNJLGtCQUFrQjtJQUNsQixlQUFlOztJQUVmLDZCQUE2QjtBQUNqQzs7SUFFSTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixtQkFBbUI7O0lBRXZCOztJQUVBO1FBQ0ksV0FBVzs7SUFFZjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxhQUFhOzs7SUFHakI7O0lBRUE7O1FBRUksV0FBVzs7UUFFWCw2QkFBNkI7UUFDN0IsOEJBQThCO1FBQzlCLFlBQVk7O1FBRVosYUFBYTtRQUNiLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSw4QkFBOEI7UUFDOUIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjs7Ozs7O0FBTUosaUZBQWlGOztBQUVqRjtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1COztJQUVuQixrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZiw2QkFBNkI7SUFDN0IsaUJBQWlCOztJQUVqQixlQUFlO0FBQ25COztJQUVJO1FBQ0ksNkJBQTZCO1FBQzdCLFlBQVk7O1FBRVosZUFBZTtJQUNuQjs7QUFFSiw2RUFBNkU7OztBQUc3RTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlOztJQUVmLDZCQUE2Qjs7SUFFN0IsbUJBQW1CO0FBQ3ZCOztJQUVJO1FBQ0ksYUFBYTtRQUNiLFNBQVM7UUFDVCxhQUFhO1FBQ2IsYUFBYTtJQUNqQjs7UUFFSTtZQUNJLGVBQWU7UUFDbkI7O0lBRUo7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCOztRQUV2QixnQkFBZ0I7SUFDcEI7O1FBRUk7WUFDSSx1QkFBdUI7O1lBRXZCLFVBQVU7WUFDVixlQUFlO1FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKioqKioqKioqKiB8fCBHRU5FUkFMIFNUWUxFUyB8fCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG46cm9vdCB7XFxuICAgIC0td2hpdGU6d2hpdGU7XFxuICAgIC0tc29vdGhpbmctYnJlZXplOiNiMmJlYzM7XFxuICAgIC0tZ3JheTojNjM2ZTcyO1xcbiAgICAtLWRhcms6IzJkMzQzNjtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4gICAgaHRtbCxcXG4gICAgYm9keSB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICAgICAjY29udGVudCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuXFxuXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNWZyIDJmcjtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4MHB4IDEyZnI7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIFxcbi8qKioqKioqKioqKiB8fCBIRUFERVIgfHwgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIGJhY2tncm91bmQ6IHJnYigxMzEsNTgsMTgwKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDEzMSw1OCwxODAsMSkgMCUsIHJnYmEoMjUzLDI5LDI5LDEpIDUwJSwgcmdiYSgyNTIsMTc2LDY5LDEpIDEwMCUpO1xcblxcblxcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi8qKioqKioqKioqKiB8fCBNQUlOIHx8ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5tYWluIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxuXFxufVxcblxcbiAgICAudGFzayB7IFxcblxcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTZlOTQ4O1xcblxcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICB9XFxuXFxuICAgICAgICB0aCB7XFxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xcblxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4OyBcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHRkIHtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgXFxuLyoqKioqKioqKioqIHx8IFBST0pFQ1QgVEFCTEUgU0lERUJBUiB8fCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyA0O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG59XFxuXFxuICAgIC5wcm9qZWN0cy1oZWFkZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGhlaWdodDogNjBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC10YWJsZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgfVxcblxcbiAgICAucHJvamVjdC10YWJsZS1pdGVtIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG5cXG5cXG4gICAgfVxcblxcbiAgICAucHJvamVjdC10YWJsZS1idXR0b24sXFxuICAgIC5wcm9qZWN0LXRhYmxlLWJ1dHRvbi1zZWxlY3RlZCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC10YWJsZS1idXR0b246aG92ZXJ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC10YWJsZS1idXR0b24tc2VsZWN0ZWQge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIH1cXG5cXG5cXG5cXG5cXG5cXG4vKioqKioqKioqKiogfHwgUklHSFQgU0lERUJBUiBIRUFERVIgfHwgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGNvbG9yOiB2YXIod2hpdGUpO1xcblxcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbiAgICAuZm9ybS1oZWFkZXIgYnV0dG9uIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcblxcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICB9XFxuXFxuLyoqKioqKioqKioqIHx8IFJJR0hUIFNJREVCQVIgKFRBU0sgLyBQUk9KRUNUIEZPUk1TKSB8fCAqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuXFxuLnRhc2stZm9ybSB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG5cXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59ICAgICAgXFxuXFxuICAgIC5mb3JtLWl0ZW0ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIGhlaWdodDogMTYwcHg7XFxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAuZm9ybS1sYWJlbCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAuc3VibWl0LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAuc3VibWl0IHtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIH1cXG4gICAgXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFByb2plY3RGb3JtKCkge1xuXG4gICAgLy8gY2hhbmdlIGNvbG9yIG9mIHNlbGVjdGVkIGJ1dHRvblxuICAgIGNvbnN0IGNoYW5nZUJ1dHRvbkNvbG9yID0gKCgpID0+IHtcbiAgICAgICAgbGV0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1idXR0b24nKTtcbiAgICAgICAgdGFza0J1dHRvbi5zdHlsZS5jb2xvciA9ICdibGFjayc7XG5cbiAgICAgICAgbGV0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1idXR0b24nKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpOyAgXG5cbiAgICAvLyBidWlsZCBmb3JtIFxuICAgIGNvbnN0IGJ1aWxkQWRkQmFyID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIHByb2plY3RGb3JtLmlkID0gJ2Zvcm0nO1xuICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG5cblxuICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0TmFtZSA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9ybUl0ZW0uY2xhc3NMaXN0LmFkZCgnZm9ybS1pdGVtJylcbiAgICAgICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1JdGVtKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBuYW1lTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1sYWJlbCcpO1xuICAgICAgICAgICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtbmFtZScpO1xuICAgICAgICAgICAgbmFtZUxhYmVsLmlubmVyVGV4dCA9ICdQcm9qZWN0IE5hbWUnO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZUlucHV0LmlkID0gJ3Byb2plY3QtbmFtZSc7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUlucHV0KTtcbiAgICAgICAgfSkoKTtcbiAgICBcbiAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdERlc2NyaXB0aW9uID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtSXRlbS5jbGFzc0xpc3QuYWRkKCdmb3JtLWl0ZW0nKVxuICAgICAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0ZW0pO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1sYWJlbCcpO1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gJ1Byb2plY3QgRGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uTGFiZWwpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uSW5wdXQuaWQgPSAncHJvamVjdC1kZXNjcmlwdGlvbic7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb25JbnB1dCk7XG4gICAgICAgIH0pKCk7ICAgXG4gICAgfSkoKTsgICAgICBcbn07IiwiaW1wb3J0IHsgcHVzaFRhc2sgfSBmcm9tIFwiLi90YXNrRm9ybVB1c2hcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUYXNrRm9ybSgpIHtcblxuICAgIC8vIGNoYW5nZSBjb2xvciBvZiBzZWxlY3RlZCBidXR0b25cbiAgICBjb25zdCBjaGFuZ2VCdXR0b25Db2xvciA9ICgoKSA9PiB7XG4gICAgICAgIGxldCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stYnV0dG9uJyk7XG4gICAgICAgIHRhc2tCdXR0b24uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuXG4gICAgICAgIGxldCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3RCdXR0b24uc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgIH0pKCk7XG4gICAgXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7ICBcblxuICAgIC8vIGJ1aWxkIGZvcm0gXG4gICAgY29uc3QgYnVpbGRBZGRCYXIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgdGFza0Zvcm0uaWQgPSAnZm9ybSc7XG4gICAgICAgIHRhc2tGb3JtLnNldEF0dHJpYnV0ZSgnb25zdWJtaXQnLCBwdXNoVGFzaylcbiAgICAgICAgLy8gdGFza0Zvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnamF2YXNjcmlwdDpzdWJtaXRUYXNrKCknKVxuICAgICAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG5cbiAgICAgICAgY29uc3QgZm9ybVRpdGxlID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtSXRlbS5jbGFzc0xpc3QuYWRkKCdmb3JtLWl0ZW0nKVxuICAgICAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0ZW0pO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICB0aXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbGFiZWwnKTtcbiAgICAgICAgICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZm9ybS10aXRsZScpO1xuICAgICAgICAgICAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSAnVGl0bGUnO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgICAgICAgICAgdGl0bGVJbnB1dC5pZCA9ICdmb3JtLXRpdGxlJztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgICAgICB9KSgpO1xuICAgIFxuICAgICAgICBjb25zdCBmb3JtRGVzY3JpcHRpb24gPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvcm1JdGVtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0taXRlbScpXG4gICAgICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChmb3JtSXRlbSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1sYWJlbCcpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdmb3JtLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2Zvcm0tZGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgICAgIH0pKCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGZvcm1EdWVEYXRlID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtSXRlbS5jbGFzc0xpc3QuYWRkKCdmb3JtLWl0ZW0nKVxuICAgICAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0ZW0pO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGR1ZURhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJyk7XG4gICAgICAgICAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZm9ybS1kYXRlJyk7XG4gICAgICAgICAgICBkdWVEYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0R1ZSBEYXRlJztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5pZCA9ICdmb3JtLWRhdGUnO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcbiAgICAgICAgfSkoKTtcbiAgICBcbiAgICAgICAgY29uc3QgZm9ybVByaW9yaXR5ID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtSXRlbS5jbGFzc0xpc3QuYWRkKCdmb3JtLWl0ZW0nKVxuICAgICAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0ZW0pO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBwcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbGFiZWwnKTtcbiAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZm9ybS1wcmlvcml0eScpO1xuICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5pbm5lclRleHQgPSAnUHJpb3JpdHknO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIHByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1wcmlvcml0eScpO1xuICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5pZCA9ICdmb3JtLXByaW9yaXR5JztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICAgICAgICB9KSgpO1xuICAgIFxuICAgICAgICBjb25zdCBhZGRTdWJtaXQgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzdWJtaXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3VibWl0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0Q29udGFpbmVyKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgnc3VibWl0Jyk7XG4gICAgICAgICAgICBzdWJtaXQuaW5uZXJUZXh0ID0gJ0FkZCc7XG4gICAgICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpXG4gICAgICAgICAgICBzdWJtaXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICAgICAgICAgICAgLy8gbGluayB0byBzdWJtaXQgZnVuY3Rpb24gXG4gICAgICAgICAgICAvLyBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwdXNoVGFzayk7XG5cbiAgICAgICAgICAgIC8vIHByZXZlbnQgdGFzayByZXNldCBcbiAgICAgICAgICAgIC8vIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIC8vICAgfSk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gcmVzZXQgZm9ybSBmaWVsZHNcbiAgICAgICAgICAgIC8vIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJ1aWxkVGFza0Zvcm0pO1xuXG4gICAgICAgIH0pKCk7XG4gICAgfSkoKTsgICAgICAgIFxufTtcblxuIiwiXG5pbXBvcnQgeyBkaXNwbGF5QWxsVGFza3MgfSBmcm9tIFwiLi9kaXNwbGF5QWxsVGFza3NcIjtcbmltcG9ydCB7IHJlbW92ZVRhYmxlUm93cyB9IGZyb20gXCIuL3JlbW92ZVRhYmxlUm93c1wiO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuXG4gICAgY29uc3QgZGVmaW5lQ29udGVudCA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIH0pKCk7XG4gICAgXG4gICAgY29uc3QgYnVpbGRIZWFkZXIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLmlkID0gJ2hlYWRlcic7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBidWlsZFRpdGxlID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgICAgICAgICAgdGl0bGUuaWQgPSAndGl0bGUnO1xuICAgICAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gJ1RvIERvIExpc3QnO1xuICAgICAgICAgICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgICAgIH0pKCk7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGJ1aWxkU2lkZWJhciA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2lkZWJhci5pZCA9ICdzaWRlYmFyJztcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgICAgICAgY29uc3Qgc2lkZWJhckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHNpZGViYXJIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtaGVhZGVyJyk7XG4gICAgICAgIHNpZGViYXJIZWFkZXIuaW5uZXJUZXh0ID0gJ1Byb2plY3RzJztcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFySGVhZGVyKTtcblxuICAgICAgICBjb25zdCBCdWlsZFByb2plY3RUYWJsZSA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgICAgICAgICAgcHJvamVjdFRhYmxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGFibGUnKTtcbiAgICAgICAgICAgIHByb2plY3RUYWJsZS5pZCA9ICdwcm9qZWN0LXRhYmxlJztcbiAgICAgICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdFRhYmxlKTtcblxuICAgICAgICAgICAgY29uc3QgYnVpbGRUYWJsZUhlYWRlciA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFibGVIZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVyUm93LmNsYXNzTGlzdC5hZGQoJ2NvbHVtbi1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICB0YWJsZUhlYWRlclJvdy5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRhYmxlLmFwcGVuZENoaWxkKHRhYmxlSGVhZGVyUm93KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICAgICAgY29sdW1uSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbi1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICBjb2x1bW5IZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICBjb2x1bW5IZWFkZXIuaW5uZXJUZXh0ID0gJ1Byb2plY3RzJztcbiAgICAgICAgICAgICAgICB0YWJsZUhlYWRlclJvdy5hcHBlbmRDaGlsZChjb2x1bW5IZWFkZXIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1aWxkQWxsUm93ID0gKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgICAgIGFsbFJvdy5jbGFzc0xpc3QuYWRkKCdhbGwtcm93Jyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRhYmxlLmFwcGVuZENoaWxkKGFsbFJvdyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjcmVhdGVUYWJsZUJ1dHRvbiA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICAgICAgICAgIGFsbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYmxlLWl0ZW0nKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGFsbFJvdy5hcHBlbmRDaGlsZChhbGwpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmlkID0gJ2FsbC1wcm9qZWN0cyc7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYmxlLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ0FsbCBQcm9qZWN0cydcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlVGFibGVSb3dzKVxuICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5QWxsVGFza3MpXG5cbiAgICAgICAgICAgICAgICAgICAgYWxsLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfSkoKTtcbiAgICB9KSgpOyBcblxuICAgIGNvbnN0IGJ1aWxkTWFpbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgICAgIG1haW4uaWQgPSAnbWFpbic7XG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgICAgIGNvbnN0IGJ1aWxkVGFibGUgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgICAgICAgICAgdGFibGUuaWQgPSAndGFzay10YWJsZSc7XG4gICAgICAgICAgICB0YWJsZS5jbGFzc0xpc3QuYWRkID0gJ3Rhc2stdGFibGUnO1xuICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0YWJsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJ1aWxkVGFibGVIZWFkZXIgPSAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlSGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgICAgICAgICB0YWJsZUhlYWRlclJvdy5jbGFzc0xpc3QuYWRkKCdjb2x1bW4taGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgdGFibGVIZWFkZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHRhYmxlSGVhZGVyUm93KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgICAgIGNvbHVtbjEuY2xhc3NMaXN0LmFkZCgnY29sdW1uLWhlYWRlcicpO1xuICAgICAgICAgICAgICAgIGNvbHVtbjEuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgICAgICAgICAgICAgIGNvbHVtbjEuaW5uZXJUZXh0ID0gJ1Rhc2snO1xuICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVyUm93LmFwcGVuZENoaWxkKGNvbHVtbjEpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICAgICAgY29sdW1uMi5jbGFzc0xpc3QuYWRkKCdjb2x1bW4taGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgY29sdW1uMi5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZS1kYXRlJyk7XG4gICAgICAgICAgICAgICAgY29sdW1uMi5pbm5lclRleHQgPSAnRGF0ZS1EdWUnO1xuICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVyUm93LmFwcGVuZENoaWxkKGNvbHVtbjIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICAgICAgY29sdW1uMy5jbGFzc0xpc3QuYWRkKCdjb2x1bW4taGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgY29sdW1uMy5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZS1kYXRlJyk7XG4gICAgICAgICAgICAgICAgY29sdW1uMy5pbm5lckhUTUwgPSAnQ29tcGxldGVkPyc7XG4gICAgICAgICAgICAgICAgdGFibGVIZWFkZXJSb3cuYXBwZW5kQ2hpbGQoY29sdW1uMyk7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9KSgpO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjcmVhdGVGb3JtSGVhZGVyID0gKCgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICAgICBjb25zdCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1IZWFkZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1oZWFkZXInKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKTtcbiAgICAgICAgXG4gICAgXG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgYWRkLmNsYXNzTGlzdC5hZGQoJ2FkZCcpO1xuICAgICAgICBhZGQuaW5uZXJUZXh0ID0gJ0FkZCc7XG4gICAgICAgIGZvcm1IZWFkZXIuYXBwZW5kQ2hpbGQoYWRkKTtcbiAgICBcbiAgICAgICAgY29uc3QgY3JlYXRlVGFza0J1dHRvbiA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrQnV0dG9uID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWJ1dHRvbicpO1xuICAgICAgICAgICAgdGFza0J1dHRvbi5pZCA9ICd0YXNrLWJ1dHRvbic7XG4gICAgICAgICAgICB0YXNrQnV0dG9uLmlubmVyVGV4dCA9ICdUYXNrJztcbiAgICAgICAgICAgIGZvcm1IZWFkZXIuYXBwZW5kQ2hpbGQodGFza0J1dHRvbik7XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ1dHRvbicpO1xuICAgICAgICAgICAgcHJvamVjdEJ1dHRvbi5pZCA9ICdwcm9qZWN0LWJ1dHRvbic7XG4gICAgICAgICAgICBwcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdQcm9qZWN0JztcbiAgICAgICAgICAgIGZvcm1IZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbik7XG4gICAgICAgIH0pKCk7ICBcbiAgICB9KSgpOyAgIFxuICAgIFxufTtcblxuXG5cbiIsImltcG9ydCB7IHByb2plY3RMaXN0LCB0YXNrTGlzdCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyByZW1vdmVUYWJsZVJvd3MgfSBmcm9tIFwiLi9yZW1vdmVUYWJsZVJvd3NcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvail7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10YWJsZScpO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgLy8gcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYmxlLWl0ZW0nKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuXG5cbiAgICBjb25zdCBjcmVhdGVUYWJsZUJ1dHRvbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYmxlLWl0ZW0nKTtcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChyb3cpO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uaWQgPSBwcm9qLm5hbWU7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYmxlLWJ1dHRvbicpO1xuICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gcHJvai5uYW1lO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hQcm9qZWN0KVxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgICAgICBmdW5jdGlvbiBzd2l0Y2hQcm9qZWN0KCl7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RMaXN0W2ldLm5hbWUgPT0gYnV0dG9uLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVRhYmxlUm93cygpO1xuICAgICAgICAgICAgICAgICAgICBzb3J0TGlzdChidXR0b24uaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBzb3J0TGlzdCh4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrTGlzdC5sZW5ndGg7IGkrKyApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeCA9PSB0YXNrTGlzdFtpXS5wcm9qZWN0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVRhc2sodGFza0xpc3RbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH0pKCk7XG59OyIsIlxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sgKHRvZG8pIHtcblxuICAgICAgICBcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRhYmxlJyk7XG5cbiAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZCh0YXNrKTtcblxuICAgIGNvbnN0IGFkZFRhc2tUaXRsZSA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gICAgICAgIHRhc2tUaXRsZS5pbm5lclRleHQgPSB0b2RvLnRpdGxlO1xuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGFkZFRhc2tEdWVEYXRlID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZS1kYXRlJyk7XG4gICAgICAgIHRhc2tEdWVEYXRlLmlubmVyVGV4dCA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gICAgfSkoKTsgXG5cbiAgICBjb25zdCBhZGRDb21wbGV0aW9uID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgY29tcGxldGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGNvbXBsZXRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1jb21wbGV0aW9uJyk7XG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoY29tcGxldGlvbik7XG5cbiAgICAgICAgY29uc3QgYWRkQ29tcGxldGVkQ2hlY2tib3ggPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcGxldGVkQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY29tcGxldGVkQ2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICBjb21wbGV0aW9uLmFwcGVuZENoaWxkKGNvbXBsZXRlZENoZWNrYm94KTtcbiAgICAgICAgfSkoKTtcbiAgICB9KSgpOyBcblxufTsiLCJpbXBvcnQgeyB0YXNrTGlzdCB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUFsbFRhc2tzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBjcmVhdGVUYXNrKHRhc2tMaXN0W2ldKTtcbiAgICB9XG59IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVIb21lUGFnZSB9IGZyb20gJy4vY3JlYXRlSG9tZXBhZ2UnO1xuaW1wb3J0IHsgYnVpbGRUYXNrRm9ybSB9IGZyb20gJy4vYnVpbGRUYXNrRm9ybURPTSc7XG5cbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiO1xuXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHsgcmlnaHRTaWRlYmFyTG9naWMgfSBmcm9tICcuL3JpZ2h0U2lkZWJhckxvZ2ljJztcblxuaW1wb3J0IHsgZGlzcGxheUFsbFRhc2tzIH0gZnJvbSAnLi9kaXNwbGF5QWxsVGFza3MnO1xuXG5cblxuZXhwb3J0IHZhciB0YXNrTGlzdCA9IFtdO1xuZXhwb3J0IHZhciBwcm9qZWN0TGlzdCA9IFtdO1xuXG4vLyBidWlsZHMgcGFnZVxuY3JlYXRlSG9tZVBhZ2UoKTtcbmJ1aWxkVGFza0Zvcm0oKTtcbnJpZ2h0U2lkZWJhckxvZ2ljKCk7XG4vLyBjcmVhdGVTaWRlYmFyTG9naWMoKVxuXG4vKioqKioqKioqKioqKiogTkVXIFNUVUZGICoqKioqKioqKioqKioqKi9cblxuXG5cblxuXG5jb25zdCBjcmVhdGVUYXNrRGF0YSA9ICgoKSA9PiB7XG4gICAgbGV0IHRhc2sxID0gbmV3IFRhc2soJ2VycmFuZDEnLCAnd2FzaCBjbG90aGVzJywgJzEwLzAxLzIyJywgJyEhJywgJ0VycmFuZHMnKTtcbiAgICBsZXQgdGFzazIgPSBuZXcgVGFzaygnc2Nob29sIDEnLCAnbWFrZSBhbiBhcHBvaW50bWVudCBmb3IgZnVuZ3VzJywgJzkvMDEvMjInLCAnISEnLCAnU2Nob29sJyk7XG4gICAgbGV0IHRhc2szID0gbmV3IFRhc2soJ2VycmFuZDInLCAnbWFrZSBjaGlybyBhcHBvaW5tZW50JywgJzcvMTAvMjInLCAnIScsICAnRXJyYW5kcycpO1xuICAgIGxldCB0YXNrNCA9IG5ldyBUYXNrKCdzY2hvb2wgMicsICdtYWtlIHdlZWsgNCBkaXNjdXNzaW9uIHBvc3QnLCAnMDcvMDgvMjInLCAnISEhJywgJ1NjaG9vbCcpO1xuICAgIGxldCB0YXNrNSA9IG5ldyBUYXNrKCdlcnJhbmQzJywgJ3NoYXZlIGJlYXJkJywgJzEyLzI0LzIyJywgJyEhIScsICdFcnJhbmRzJyk7XG5cbiAgICB0YXNrTGlzdC5wdXNoKHRhc2sxKTtcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2syKTtcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2szKTtcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2s0KTtcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2s1KTtcblxuICAgICAgICBcbn0pKCk7XG5cbmxldCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCdFcnJhbmRzJywgJ3NpbXBsZSBlcnJhbmRzIEkgbmVlZCB0byBkbycpO1xuICAgIGxldCBwcm9qZWN0MiA9IG5ldyBQcm9qZWN0KCdTY2hvb2wnLCAnc3R1ZmYgcmVsYXRlZCB0byBzY2hvb2wnKTtcblxuICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdDEpO1xuICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdDIpO1xuXG5kaXNwbGF5QWxsVGFza3MoKTtcblxuXG5mb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICBjcmVhdGVQcm9qZWN0KHByb2plY3RMaXN0W2ldKTtcbn1cblxuLyoqKioqKioqKioqKioqIE5FVyBTVFVGRiAqKioqKioqKioqKioqKiovXG5cblxuXG5cbmNvbnN0IGVycmFuZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRXJyYW5kcycpO1xuXG4iLCJleHBvcnQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJvamVjdERlc2NyaXB0aW9uLCBub3Rlcyl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHJvamVjdERlc2NyaXB0aW9uID0gcHJvamVjdERlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgfVxufTsiLCJleHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFibGVSb3dzKCl7XG4gICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stdGFibGUnKTtcbiAgICBmb3IobGV0IGkgPSAxOyBpPHRhYmxlLnJvd3MubGVuZ3RoOyl7XG4gICAgICAgIHRhYmxlLmRlbGV0ZVJvdyhpKTtcbiAgICB9XG59OyIsImltcG9ydCB7IGJ1aWxkVGFza0Zvcm0gfSBmcm9tIFwiLi9idWlsZFRhc2tGb3JtRE9NXCI7XG5pbXBvcnQgeyBidWlsZFByb2plY3RGb3JtIH0gZnJvbSBcIi4vYnVpbGRQcm9qZWN0Rm9ybURPTVwiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodFNpZGViYXJMb2dpYygpIHtcblxuICAgIC8vIHJlbW92ZXMgc2lkZWJhciBmb3IgVGFzayAvIFByb2plY3QgZm9ybSBzd2l0Y2hcbiAgICBmdW5jdGlvbiByZW1vdmVMYXN0Q2hpbGQoKSB7XG4gICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICAgICBzZWxlY3QucmVtb3ZlQ2hpbGQoc2VsZWN0Lmxhc3RDaGlsZCk7XG4gICAgfTtcblxuICAgIC8vIHRhc2sgZm9ybSBzd2l0Y2hcbiAgICBjb25zdCB0YXNrQnV0dG9uTG9naWMgPSAoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5UYXNrTWVudSk7XG4gICAgICAgIGZ1bmN0aW9uIG9wZW5UYXNrTWVudSgpIHtcbiAgICAgICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1idXR0b24nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbi5zdHlsZS5jb2xvcik7XG4gICAgICAgICAgICByZW1vdmVMYXN0Q2hpbGQoKTtcbiAgICAgICAgICAgIGJ1aWxkVGFza0Zvcm0oKTtcblxuICAgICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICAvLyBwcm9qZWN0IGZvcm0gc3dpdGNoXG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbkxvZ2ljID0gKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuVGFza01lbnUpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgZnVuY3Rpb24gb3BlblRhc2tNZW51KCkge1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWJ1dHRvbicpO1xuICAgICAgICAgICAgcmVtb3ZlTGFzdENoaWxkKCk7XG4gICAgICAgICAgICBidWlsZFByb2plY3RGb3JtKCk7XG5cbiAgICAgICAgfTtcbiAgICB9KSgpO1xufVxuIiwiZXhwb3J0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG4gICAgZ2V0VGFza1ByZXZpZXcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlICsgJyAvICcgKyB0aGlzLmR1ZURhdGU7XG4gICAgfVxuICAgIGdldFRhc2tGdWxsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZSArICcgfCAnICsgdGhpcy5kZXNjcmlwdGlvbiArICcgfCAnICsgdGhpcy5kdWVEYXRlICsgJyB8ICcgKyB0aGlzLnByaW9yaXR5ICsgJyB8ICc7XG4gICAgfSBcbn07IiwiaW1wb3J0IHsgdGFza0xpc3QgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoVGFzaygpIHtcblxuICAgIGxldCAgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS10aXRsZScpLnZhbHVlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1kYXRlJykudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tcHJpb3JpdHknKS52YWx1ZTtcblxuICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcbiAgICBjb25zb2xlLmxvZyhkZXNjcmlwdGlvbik7XG4gICAgY29uc29sZS5sb2coZGF0ZSk7XG4gICAgY29uc29sZS5sb2cocHJpb3JpdHkpO1xuXG4gICAgbGV0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KTtcbiAgICBcbiAgICBcbiAgICBjb25zdCB0aXRsZWUgPSBkb2N1bWVuLmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuICAgIHRpdGxlZS5pbm5lclRleHQgPSAndGVzdCc7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9