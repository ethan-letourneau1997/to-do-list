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
___CSS_LOADER_EXPORT___.push([module.id, "/*********** || GENERAL STYLES || *****************************************/\n\n:root {\n    --white:white;\n    --soothing-breeze:#b2bec3;\n    --gray:#636e72;\n    --dark:#2d3436;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\n    html,\n    body {\n        margin: 0;\n        padding: 0;\n        height: 100%;\n    }\n\n        #content {\n            display: grid;\n\n            height: 100%;\n            width: 100%;\n\n\n            grid-template-columns: 2fr 5fr 2fr;\n            grid-template-rows: 1fr 80px 12fr;\n            \n        }\n\n            input[type=checkbox] {\n                transform: scale(1.5);\n            }\n            \n/*********** || HEADER || *****************************************/\n\n.header {\n    display: flex;\n    justify-content: center;\n    \n    grid-column: 1 / 4;\n    grid-row: 1 / 2;\n\n    padding: 10px;\n\n    background: rgb(131,58,180);\n    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);\n\n\n    font-size: 30px;\n    color: var(--white);\n}\n\n/*********** || MAIN || *****************************************/\n\n.main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 4;\n\n}\n\n    .task { \n\n        height: 50px;\n        background-color: #dfe6e948;\n\n        font-size: 25px;\n    }\n\n        th {\n            width: 400px;\n\n            background-color: var(--gray);\n            color: var(--white);\n            font-size: 25px; \n        }\n\n        td {\n            align-items: center;\n            text-align: center;\n        }\n\n    \n/*********** || LEFT SIDEBAR || *****************************************/\n\n.sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 4;\n\n    background-color: var(--dark);\n}\n\n    .projects-header {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 60px;\n        font-size: 40px;\n        padding-top: 20px;\n        color: var(--white);\n        \n    }\n\n/*********** || RIGHT SIDEBAR HEADER || *****************************************/\n\n.form-header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    grid-column: 3 / 4;\n    grid-row: 2 / 3;\n    \n    background-color: var(--dark);\n    color: var(white);\n\n    font-size: 40px;\n}\n\n    .form-header button {\n        background-color: var(--dark);\n        border: none;\n\n        font-size: 40px;\n    }\n\n/*********** || RIGHT SIDEBAR (TASK / PROJECT FORMS) || *********************/\n\n\n.task-form {\n    grid-column: 3 / 4;\n    grid-row: 3 / 4;\n\n    background-color: var(--dark);\n\n    color: var(--white);\n}      \n\n    .form-item {\n        display: grid;\n        gap: 10px;\n        height: 160px;\n        padding: 30px;\n    }\n\n        .form-label {\n            font-size: 30px;\n        }\n\n    .submit-container {\n        display: flex;\n        justify-content: center;\n\n        margin-top: 20px;\n    }\n\n        .submit {\n            justify-content: center;\n            \n            width: 50%;\n            font-size: 20px;\n        }\n    \n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;IACI,aAAa;IACb,yBAAyB;IACzB,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,iCAAiC;IACjC,sBAAsB;AAC1B;;IAEI;;QAEI,SAAS;QACT,UAAU;QACV,YAAY;IAChB;;QAEI;YACI,aAAa;;YAEb,YAAY;YACZ,WAAW;;;YAGX,kCAAkC;YAClC,iCAAiC;;QAErC;;YAEI;gBACI,qBAAqB;YACzB;;AAEZ,mEAAmE;;AAEnE;IACI,aAAa;IACb,uBAAuB;;IAEvB,kBAAkB;IAClB,eAAe;;IAEf,aAAa;;IAEb,2BAA2B;IAC3B,yGAAyG;;;IAGzG,eAAe;IACf,mBAAmB;AACvB;;AAEA,iEAAiE;;AAEjE;IACI,kBAAkB;IAClB,eAAe;;AAEnB;;IAEI;;QAEI,YAAY;QACZ,2BAA2B;;QAE3B,eAAe;IACnB;;QAEI;YACI,YAAY;;YAEZ,6BAA6B;YAC7B,mBAAmB;YACnB,eAAe;QACnB;;QAEA;YACI,mBAAmB;YACnB,kBAAkB;QACtB;;;AAGR,yEAAyE;;AAEzE;IACI,kBAAkB;IAClB,eAAe;;IAEf,6BAA6B;AACjC;;IAEI;QACI,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,YAAY;QACZ,eAAe;QACf,iBAAiB;QACjB,mBAAmB;;IAEvB;;AAEJ,iFAAiF;;AAEjF;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;;IAEnB,kBAAkB;IAClB,eAAe;;IAEf,6BAA6B;IAC7B,iBAAiB;;IAEjB,eAAe;AACnB;;IAEI;QACI,6BAA6B;QAC7B,YAAY;;QAEZ,eAAe;IACnB;;AAEJ,6EAA6E;;;AAG7E;IACI,kBAAkB;IAClB,eAAe;;IAEf,6BAA6B;;IAE7B,mBAAmB;AACvB;;IAEI;QACI,aAAa;QACb,SAAS;QACT,aAAa;QACb,aAAa;IACjB;;QAEI;YACI,eAAe;QACnB;;IAEJ;QACI,aAAa;QACb,uBAAuB;;QAEvB,gBAAgB;IACpB;;QAEI;YACI,uBAAuB;;YAEvB,UAAU;YACV,eAAe;QACnB","sourcesContent":["/*********** || GENERAL STYLES || *****************************************/\n\n:root {\n    --white:white;\n    --soothing-breeze:#b2bec3;\n    --gray:#636e72;\n    --dark:#2d3436;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n    box-sizing: border-box;\n}\n\n    html,\n    body {\n        margin: 0;\n        padding: 0;\n        height: 100%;\n    }\n\n        #content {\n            display: grid;\n\n            height: 100%;\n            width: 100%;\n\n\n            grid-template-columns: 2fr 5fr 2fr;\n            grid-template-rows: 1fr 80px 12fr;\n            \n        }\n\n            input[type=checkbox] {\n                transform: scale(1.5);\n            }\n            \n/*********** || HEADER || *****************************************/\n\n.header {\n    display: flex;\n    justify-content: center;\n    \n    grid-column: 1 / 4;\n    grid-row: 1 / 2;\n\n    padding: 10px;\n\n    background: rgb(131,58,180);\n    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);\n\n\n    font-size: 30px;\n    color: var(--white);\n}\n\n/*********** || MAIN || *****************************************/\n\n.main {\n    grid-column: 2 / 3;\n    grid-row: 2 / 4;\n\n}\n\n    .task { \n\n        height: 50px;\n        background-color: #dfe6e948;\n\n        font-size: 25px;\n    }\n\n        th {\n            width: 400px;\n\n            background-color: var(--gray);\n            color: var(--white);\n            font-size: 25px; \n        }\n\n        td {\n            align-items: center;\n            text-align: center;\n        }\n\n    \n/*********** || LEFT SIDEBAR || *****************************************/\n\n.sidebar {\n    grid-column: 1 / 2;\n    grid-row: 2 / 4;\n\n    background-color: var(--dark);\n}\n\n    .projects-header {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 60px;\n        font-size: 40px;\n        padding-top: 20px;\n        color: var(--white);\n        \n    }\n\n/*********** || RIGHT SIDEBAR HEADER || *****************************************/\n\n.form-header {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    grid-column: 3 / 4;\n    grid-row: 2 / 3;\n    \n    background-color: var(--dark);\n    color: var(white);\n\n    font-size: 40px;\n}\n\n    .form-header button {\n        background-color: var(--dark);\n        border: none;\n\n        font-size: 40px;\n    }\n\n/*********** || RIGHT SIDEBAR (TASK / PROJECT FORMS) || *********************/\n\n\n.task-form {\n    grid-column: 3 / 4;\n    grid-row: 3 / 4;\n\n    background-color: var(--dark);\n\n    color: var(--white);\n}      \n\n    .form-item {\n        display: grid;\n        gap: 10px;\n        height: 160px;\n        padding: 30px;\n    }\n\n        .form-label {\n            font-size: 30px;\n        }\n\n    .submit-container {\n        display: flex;\n        justify-content: center;\n\n        margin-top: 20px;\n    }\n\n        .submit {\n            justify-content: center;\n            \n            width: 50%;\n            font-size: 20px;\n        }\n    \n"],"sourceRoot":""}]);
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

/***/ "./src/addProjectDOM":
/*!***************************!*\
  !*** ./src/addProjectDOM ***!
  \***************************/
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

/***/ "./src/addTaskDOM.js":
/*!***************************!*\
  !*** ./src/addTaskDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildTaskForm": () => (/* binding */ buildTaskForm)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



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
        taskForm.setAttribute('action', 'javascript:submitTask()')
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
    
            const submit = document.createElement('button');
            submit.classList.add('submit');
            submit.innerText = 'Add';
            submit.setAttribute('type', 'submit')
            submitContainer.appendChild(submit);

            // link to submit function 
            submit.addEventListener('click', _todo__WEBPACK_IMPORTED_MODULE_0__.submitTask);

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

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomePage": () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


function createHomePage() {

    const defineContent = (() => {
        const content = document.getElementById('content');
    }
    )();
    
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
    })();

    const buildMain = (() => {
        const main = document.createElement('main');
        main.id = 'main';
        main.classList.add('main');
        content.appendChild(main);

        const buildTable = (() => {
            const table = document.createElement('table');
            table.id = 'table';
            table.classList.add = 'table';
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

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitTask": () => (/* binding */ submitTask)
/* harmony export */ });

// creates class for To Do tasks

const taskList = [];


class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    getTaskPreview() {
        return this.title + ' / ' + this.dueDate;
    }
    getTaskFull() {
        return this.title + ' | ' + this.description + ' | ' + this.dueDate + ' | ' + this.priority + ' | ';
    } 
}




function submitTask() {
    let  title = document.getElementById('form-title').value;
    let description = document.getElementById('form-description').value;
    let date = document.getElementById('form-date').value;
    let priority = document.getElementById('form-priority').value;
    

    let task1 = new Task(title, description, date, priority);
    taskList.push(task1);

    console.log(taskList);

    const createTask = (() => {

        const table = document.getElementById('table');

        const task = document.createElement('tr');
        task.classList.add('task');
        table.appendChild(task);

        const addTaskTitle = (() => {
            const taskTitle = document.createElement('td');
            taskTitle.classList.add('task-title');
            taskTitle.innerText = task1.title;
            task.appendChild(taskTitle);
        })();

        const addTaskDueDate = (() => {
            const taskDueDate = document.createElement('td');
            taskDueDate.classList.add('task-due-date');
            taskDueDate.innerText = task1.dueDate;
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

    })();
}

console.log(taskList)


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _addTaskDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTaskDOM */ "./src/addTaskDOM.js");
/* harmony import */ var _addProjectDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addProjectDOM */ "./src/addProjectDOM");







// builds page
(0,_homepage__WEBPACK_IMPORTED_MODULE_1__.createHomePage)();
(0,_addTaskDOM__WEBPACK_IMPORTED_MODULE_3__.buildTaskForm)();

const sidebarLogic = (() => {

    // removes sidebar for Task / Project form switch
    function removeLastChild(){
        let select = document.getElementById('content');
        select.removeChild(select.lastChild);
    };

    // task form switch
    const taskButtonLogic = (() => {
        document.getElementById('task-button').addEventListener('click', openTaskMenu);
        function openTaskMenu(){
            let button = document.getElementById('task-button');
            console.log(button.style.color);
                removeLastChild();
                (0,_addTaskDOM__WEBPACK_IMPORTED_MODULE_3__.buildTaskForm)();

        };
    })();

    // project form switch
    const projectButtonLogic = (() => {
        document.getElementById('project-button').addEventListener('click', openTaskMenu);
        const content = document.getElementById('content');
        function openTaskMenu(){
            let button = document.getElementById('task-button');
                removeLastChild();
                (0,_addProjectDOM__WEBPACK_IMPORTED_MODULE_4__.buildProjectForm)();
    
        };
    })();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2RPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7O0FDeERvQzs7O0FBRzdCOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2Qyw2Q0FBVTs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIb0M7O0FBRTdCOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQsS0FBSztBQUNMOztBQUVBOzs7Ozs7O1VDekVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3VCO0FBQ1A7QUFDRDtBQUNTO0FBQ007O0FBRW5EO0FBQ0EseURBQWM7QUFDZCwwREFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDBEQUFhOztBQUU3QjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0VBQWdCO0FBQ2hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRQcm9qZWN0RE9NIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWRkVGFza0RPTS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqKioqKioqKioqIHx8IEdFTkVSQUwgU1RZTEVTIHx8ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbjpyb290IHtcXG4gICAgLS13aGl0ZTp3aGl0ZTtcXG4gICAgLS1zb290aGluZy1icmVlemU6I2IyYmVjMztcXG4gICAgLS1ncmF5OiM2MzZlNzI7XFxuICAgIC0tZGFyazojMmQzNDM2O1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiAgICBodG1sLFxcbiAgICBib2R5IHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgICAgICNjb250ZW50IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG5cXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA1ZnIgMmZyO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDgwcHggMTJmcjtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuLyoqKioqKioqKioqIHx8IEhFQURFUiB8fCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG5cXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgYmFja2dyb3VuZDogcmdiKDEzMSw1OCwxODApO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTMxLDU4LDE4MCwxKSAwJSwgcmdiYSgyNTMsMjksMjksMSkgNTAlLCByZ2JhKDI1MiwxNzYsNjksMSkgMTAwJSk7XFxuXFxuXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLyoqKioqKioqKioqIHx8IE1BSU4gfHwgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLm1haW4ge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXG5cXG59XFxuXFxuICAgIC50YXNrIHsgXFxuXFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlNmU5NDg7XFxuXFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIH1cXG5cXG4gICAgICAgIHRoIHtcXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XFxuXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7IFxcbiAgICAgICAgfVxcblxcbiAgICAgICAgdGQge1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICBcXG4vKioqKioqKioqKiogfHwgTEVGVCBTSURFQkFSIHx8ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG4gICAgLnByb2plY3RzLWhlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4vKioqKioqKioqKiogfHwgUklHSFQgU0lERUJBUiBIRUFERVIgfHwgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGNvbG9yOiB2YXIod2hpdGUpO1xcblxcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbiAgICAuZm9ybS1oZWFkZXIgYnV0dG9uIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcblxcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICB9XFxuXFxuLyoqKioqKioqKioqIHx8IFJJR0hUIFNJREVCQVIgKFRBU0sgLyBQUk9KRUNUIEZPUk1TKSB8fCAqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuXFxuLnRhc2stZm9ybSB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG5cXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59ICAgICAgXFxuXFxuICAgIC5mb3JtLWl0ZW0ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIGhlaWdodDogMTYwcHg7XFxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAuZm9ybS1sYWJlbCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAuc3VibWl0LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAuc3VibWl0IHtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIH1cXG4gICAgXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUNBQWlDO0lBQ2pDLHNCQUFzQjtBQUMxQjs7SUFFSTs7UUFFSSxTQUFTO1FBQ1QsVUFBVTtRQUNWLFlBQVk7SUFDaEI7O1FBRUk7WUFDSSxhQUFhOztZQUViLFlBQVk7WUFDWixXQUFXOzs7WUFHWCxrQ0FBa0M7WUFDbEMsaUNBQWlDOztRQUVyQzs7WUFFSTtnQkFDSSxxQkFBcUI7WUFDekI7O0FBRVosbUVBQW1FOztBQUVuRTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7O0lBRXZCLGtCQUFrQjtJQUNsQixlQUFlOztJQUVmLGFBQWE7O0lBRWIsMkJBQTJCO0lBQzNCLHlHQUF5Rzs7O0lBR3pHLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUEsaUVBQWlFOztBQUVqRTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlOztBQUVuQjs7SUFFSTs7UUFFSSxZQUFZO1FBQ1osMkJBQTJCOztRQUUzQixlQUFlO0lBQ25COztRQUVJO1lBQ0ksWUFBWTs7WUFFWiw2QkFBNkI7WUFDN0IsbUJBQW1CO1lBQ25CLGVBQWU7UUFDbkI7O1FBRUE7WUFDSSxtQkFBbUI7WUFDbkIsa0JBQWtCO1FBQ3RCOzs7QUFHUix5RUFBeUU7O0FBRXpFO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7O0lBRWYsNkJBQTZCO0FBQ2pDOztJQUVJO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsbUJBQW1COztJQUV2Qjs7QUFFSixpRkFBaUY7O0FBRWpGO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7O0lBRW5CLGtCQUFrQjtJQUNsQixlQUFlOztJQUVmLDZCQUE2QjtJQUM3QixpQkFBaUI7O0lBRWpCLGVBQWU7QUFDbkI7O0lBRUk7UUFDSSw2QkFBNkI7UUFDN0IsWUFBWTs7UUFFWixlQUFlO0lBQ25COztBQUVKLDZFQUE2RTs7O0FBRzdFO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7O0lBRWYsNkJBQTZCOztJQUU3QixtQkFBbUI7QUFDdkI7O0lBRUk7UUFDSSxhQUFhO1FBQ2IsU0FBUztRQUNULGFBQWE7UUFDYixhQUFhO0lBQ2pCOztRQUVJO1lBQ0ksZUFBZTtRQUNuQjs7SUFFSjtRQUNJLGFBQWE7UUFDYix1QkFBdUI7O1FBRXZCLGdCQUFnQjtJQUNwQjs7UUFFSTtZQUNJLHVCQUF1Qjs7WUFFdkIsVUFBVTtZQUNWLGVBQWU7UUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqKioqKioqKioqIHx8IEdFTkVSQUwgU1RZTEVTIHx8ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbjpyb290IHtcXG4gICAgLS13aGl0ZTp3aGl0ZTtcXG4gICAgLS1zb290aGluZy1icmVlemU6I2IyYmVjMztcXG4gICAgLS1ncmF5OiM2MzZlNzI7XFxuICAgIC0tZGFyazojMmQzNDM2O1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiAgICBodG1sLFxcbiAgICBib2R5IHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgICAgICNjb250ZW50IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG5cXG5cXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA1ZnIgMmZyO1xcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDgwcHggMTJmcjtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgXFxuLyoqKioqKioqKioqIHx8IEhFQURFUiB8fCAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG5cXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgYmFja2dyb3VuZDogcmdiKDEzMSw1OCwxODApO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTMxLDU4LDE4MCwxKSAwJSwgcmdiYSgyNTMsMjksMjksMSkgNTAlLCByZ2JhKDI1MiwxNzYsNjksMSkgMTAwJSk7XFxuXFxuXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLyoqKioqKioqKioqIHx8IE1BSU4gfHwgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLm1haW4ge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gNDtcXG5cXG59XFxuXFxuICAgIC50YXNrIHsgXFxuXFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlNmU5NDg7XFxuXFxuICAgICAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIH1cXG5cXG4gICAgICAgIHRoIHtcXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XFxuXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7IFxcbiAgICAgICAgfVxcblxcbiAgICAgICAgdGQge1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICBcXG4vKioqKioqKioqKiogfHwgTEVGVCBTSURFQkFSIHx8ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG4gICAgLnByb2plY3RzLWhlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4vKioqKioqKioqKiogfHwgUklHSFQgU0lERUJBUiBIRUFERVIgfHwgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuLmZvcm0taGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxuICAgIGNvbG9yOiB2YXIod2hpdGUpO1xcblxcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbiAgICAuZm9ybS1oZWFkZXIgYnV0dG9uIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcblxcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICB9XFxuXFxuLyoqKioqKioqKioqIHx8IFJJR0hUIFNJREVCQVIgKFRBU0sgLyBQUk9KRUNUIEZPUk1TKSB8fCAqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuXFxuLnRhc2stZm9ybSB7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG5cXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59ICAgICAgXFxuXFxuICAgIC5mb3JtLWl0ZW0ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIGhlaWdodDogMTYwcHg7XFxuICAgICAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAuZm9ybS1sYWJlbCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAuc3VibWl0LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAuc3VibWl0IHtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIH1cXG4gICAgXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFByb2plY3RGb3JtKCkge1xuXG4gICAgLy8gY2hhbmdlIGNvbG9yIG9mIHNlbGVjdGVkIGJ1dHRvblxuICAgIGNvbnN0IGNoYW5nZUJ1dHRvbkNvbG9yID0gKCgpID0+IHtcbiAgICAgICAgbGV0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1idXR0b24nKTtcbiAgICAgICAgdGFza0J1dHRvbi5zdHlsZS5jb2xvciA9ICdibGFjayc7XG5cbiAgICAgICAgbGV0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1idXR0b24nKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpOyAgXG5cbiAgICAvLyBidWlsZCBmb3JtIFxuICAgIGNvbnN0IGJ1aWxkQWRkQmFyID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIHByb2plY3RGb3JtLmlkID0gJ2Zvcm0nO1xuICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvcm0nKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG5cblxuICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0TmFtZSA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9ybUl0ZW0uY2xhc3NMaXN0LmFkZCgnZm9ybS1pdGVtJylcbiAgICAgICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1JdGVtKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBuYW1lTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1sYWJlbCcpO1xuICAgICAgICAgICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtbmFtZScpO1xuICAgICAgICAgICAgbmFtZUxhYmVsLmlubmVyVGV4dCA9ICdQcm9qZWN0IE5hbWUnO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZUlucHV0LmlkID0gJ3Byb2plY3QtbmFtZSc7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUlucHV0KTtcbiAgICAgICAgfSkoKTtcbiAgICBcbiAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdERlc2NyaXB0aW9uID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtSXRlbS5jbGFzc0xpc3QuYWRkKCdmb3JtLWl0ZW0nKVxuICAgICAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0ZW0pO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1sYWJlbCcpO1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gJ1Byb2plY3QgRGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uTGFiZWwpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uSW5wdXQuaWQgPSAncHJvamVjdC1kZXNjcmlwdGlvbic7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb25JbnB1dCk7XG4gICAgICAgIH0pKCk7ICAgXG4gICAgfSkoKTsgICAgICBcbn07IiwiaW1wb3J0IHsgc3VibWl0VGFzayB9IGZyb20gXCIuL3RvZG9cIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUYXNrRm9ybSgpIHtcblxuICAgIC8vIGNoYW5nZSBjb2xvciBvZiBzZWxlY3RlZCBidXR0b25cbiAgICBjb25zdCBjaGFuZ2VCdXR0b25Db2xvciA9ICgoKSA9PiB7XG4gICAgICAgIGxldCB0YXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stYnV0dG9uJyk7XG4gICAgICAgIHRhc2tCdXR0b24uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuXG4gICAgICAgIGxldCBwcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3RCdXR0b24uc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgIH0pKCk7XG4gICAgXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7ICBcblxuICAgIC8vIGJ1aWxkIGZvcm0gXG4gICAgY29uc3QgYnVpbGRBZGRCYXIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgdGFza0Zvcm0uaWQgPSAnZm9ybSc7XG4gICAgICAgIHRhc2tGb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJ2phdmFzY3JpcHQ6c3VibWl0VGFzaygpJylcbiAgICAgICAgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xuXG4gICAgICAgIGNvbnN0IGZvcm1UaXRsZSA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9ybUl0ZW0uY2xhc3NMaXN0LmFkZCgnZm9ybS1pdGVtJylcbiAgICAgICAgICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGZvcm1JdGVtKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgdGl0bGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJyk7XG4gICAgICAgICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Zvcm0tdGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlTGFiZWwuaW5uZXJUZXh0ID0gJ1RpdGxlJztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuaWQgPSAnZm9ybS10aXRsZSc7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICAgICAgfSkoKTtcbiAgICBcbiAgICAgICAgY29uc3QgZm9ybURlc2NyaXB0aW9uID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtSXRlbS5jbGFzc0xpc3QuYWRkKCdmb3JtLWl0ZW0nKVxuICAgICAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0ZW0pO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tbGFiZWwnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZm9ybS1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5pbm5lclRleHQgPSAnRGVzY3JpcHRpb24nO1xuICAgICAgICAgICAgZm9ybUl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1pbnB1dCcpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICdmb3JtLWRlc2NyaXB0aW9uJztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICAgICAgICB9KSgpO1xuICAgIFxuICAgICAgICBjb25zdCBmb3JtRHVlRGF0ZSA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9ybUl0ZW0uY2xhc3NMaXN0LmFkZCgnZm9ybS1pdGVtJylcbiAgICAgICAgICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGZvcm1JdGVtKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBkdWVEYXRlTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1sYWJlbCcpO1xuICAgICAgICAgICAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Zvcm0tZGF0ZScpO1xuICAgICAgICAgICAgZHVlRGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdEdWUgRGF0ZSc7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWlucHV0Jyk7XG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQuaWQgPSAnZm9ybS1kYXRlJztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG4gICAgICAgIH0pKCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGZvcm1Qcmlvcml0eSA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9ybUl0ZW0uY2xhc3NMaXN0LmFkZCgnZm9ybS1pdGVtJylcbiAgICAgICAgICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGZvcm1JdGVtKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWxhYmVsJyk7XG4gICAgICAgICAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Zvcm0tcHJpb3JpdHknKTtcbiAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5JztcbiAgICAgICAgICAgIGZvcm1JdGVtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tcHJpb3JpdHknKTtcbiAgICAgICAgICAgIHByaW9yaXR5SW5wdXQuaWQgPSAnZm9ybS1wcmlvcml0eSc7XG4gICAgICAgICAgICBmb3JtSXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICAgICAgfSkoKTtcbiAgICBcbiAgICAgICAgY29uc3QgYWRkU3VibWl0ID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3VibWl0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1jb250YWluZXInKTtcbiAgICAgICAgICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdENvbnRhaW5lcik7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdzdWJtaXQnKTtcbiAgICAgICAgICAgIHN1Ym1pdC5pbm5lclRleHQgPSAnQWRkJztcbiAgICAgICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0JylcbiAgICAgICAgICAgIHN1Ym1pdENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gICAgICAgICAgICAvLyBsaW5rIHRvIHN1Ym1pdCBmdW5jdGlvbiBcbiAgICAgICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFRhc2spO1xuXG4gICAgICAgICAgICAvLyBwcmV2ZW50IHRhc2sgcmVzZXQgXG4gICAgICAgICAgICAvLyBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAvLyAgIH0pO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHJlc2V0IGZvcm0gZmllbGRzXG4gICAgICAgICAgICAvLyBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidWlsZFRhc2tGb3JtKTtcblxuICAgICAgICB9KSgpO1xuICAgIH0pKCk7ICAgICAgICBcbn07XG5cbiIsImltcG9ydCB7IHN1Ym1pdFRhc2sgfSBmcm9tIFwiLi90b2RvXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcblxuICAgIGNvbnN0IGRlZmluZUNvbnRlbnQgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICB9XG4gICAgKSgpO1xuICAgIFxuICAgIGNvbnN0IGJ1aWxkSGVhZGVyID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgICAgIGhlYWRlci5pZCA9ICdoZWFkZXInO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgICAgICAgY29uc3QgYnVpbGRUaXRsZSA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgICAgIHRpdGxlLmlkID0gJ3RpdGxlJztcbiAgICAgICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICAgICAgICAgIHRpdGxlLmlubmVyVGV4dCA9ICdUbyBEbyBMaXN0JztcbiAgICAgICAgICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgICAgICB9KSgpO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBidWlsZFNpZGViYXIgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNpZGViYXIuaWQgPSAnc2lkZWJhcic7XG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHNpZGViYXIpO1xuXG4gICAgICAgIGNvbnN0IHNpZGViYXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBzaWRlYmFySGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWhlYWRlcicpO1xuICAgICAgICBzaWRlYmFySGVhZGVyLmlubmVyVGV4dCA9ICdQcm9qZWN0cyc7XG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRlcik7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGJ1aWxkTWFpbiA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgICAgIG1haW4uaWQgPSAnbWFpbic7XG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgICAgIGNvbnN0IGJ1aWxkVGFibGUgPSAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgICAgICAgICAgdGFibGUuaWQgPSAndGFibGUnO1xuICAgICAgICAgICAgdGFibGUuY2xhc3NMaXN0LmFkZCA9ICd0YWJsZSc7XG4gICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRhYmxlKTtcblxuICAgICAgICAgICAgY29uc3QgYnVpbGRUYWJsZUhlYWRlciA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFibGVIZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgICAgIHRhYmxlSGVhZGVyUm93LmNsYXNzTGlzdC5hZGQoJ2NvbHVtbi1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICB0YWJsZUhlYWRlclJvdy5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodGFibGVIZWFkZXJSb3cpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICAgICAgY29sdW1uMS5jbGFzc0xpc3QuYWRkKCdjb2x1bW4taGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgY29sdW1uMS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgY29sdW1uMS5pbm5lclRleHQgPSAnVGFzayc7XG4gICAgICAgICAgICAgICAgdGFibGVIZWFkZXJSb3cuYXBwZW5kQ2hpbGQoY29sdW1uMSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgICAgICBjb2x1bW4yLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbi1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICBjb2x1bW4yLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlLWRhdGUnKTtcbiAgICAgICAgICAgICAgICBjb2x1bW4yLmlubmVyVGV4dCA9ICdEYXRlLUR1ZSc7XG4gICAgICAgICAgICAgICAgdGFibGVIZWFkZXJSb3cuYXBwZW5kQ2hpbGQoY29sdW1uMik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgICAgICBjb2x1bW4zLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbi1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICBjb2x1bW4zLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlLWRhdGUnKTtcbiAgICAgICAgICAgICAgICBjb2x1bW4zLmlubmVySFRNTCA9ICdDb21wbGV0ZWQ/JztcbiAgICAgICAgICAgICAgICB0YWJsZUhlYWRlclJvdy5hcHBlbmRDaGlsZChjb2x1bW4zKTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH0pKCk7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNyZWF0ZUZvcm1IZWFkZXIgPSAoKCkgPT4ge1xuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICAgIGNvbnN0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybUhlYWRlci5jbGFzc0xpc3QuYWRkKCdmb3JtLWhlYWRlcicpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xuICAgICAgICBcbiAgICBcbiAgICAgICAgY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBhZGQuY2xhc3NMaXN0LmFkZCgnYWRkJyk7XG4gICAgICAgIGFkZC5pbm5lclRleHQgPSAnQWRkJztcbiAgICAgICAgZm9ybUhlYWRlci5hcHBlbmRDaGlsZChhZGQpO1xuICAgIFxuICAgICAgICBjb25zdCBjcmVhdGVUYXNrQnV0dG9uID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tCdXR0b24gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICB0YXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYnV0dG9uJyk7XG4gICAgICAgICAgICB0YXNrQnV0dG9uLmlkID0gJ3Rhc2stYnV0dG9uJztcbiAgICAgICAgICAgIHRhc2tCdXR0b24uaW5uZXJUZXh0ID0gJ1Rhc2snO1xuICAgICAgICAgICAgZm9ybUhlYWRlci5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9uJyk7XG4gICAgICAgICAgICBwcm9qZWN0QnV0dG9uLmlkID0gJ3Byb2plY3QtYnV0dG9uJztcbiAgICAgICAgICAgIHByb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gJ1Byb2plY3QnO1xuICAgICAgICAgICAgZm9ybUhlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgfSkoKTsgIFxuICAgIH0pKCk7ICAgXG59O1xuXG5cblxuIiwiXG4vLyBjcmVhdGVzIGNsYXNzIGZvciBUbyBEbyB0YXNrc1xuXG5jb25zdCB0YXNrTGlzdCA9IFtdO1xuXG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG4gICAgZ2V0VGFza1ByZXZpZXcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlICsgJyAvICcgKyB0aGlzLmR1ZURhdGU7XG4gICAgfVxuICAgIGdldFRhc2tGdWxsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZSArICcgfCAnICsgdGhpcy5kZXNjcmlwdGlvbiArICcgfCAnICsgdGhpcy5kdWVEYXRlICsgJyB8ICcgKyB0aGlzLnByaW9yaXR5ICsgJyB8ICc7XG4gICAgfSBcbn1cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHN1Ym1pdFRhc2soKSB7XG4gICAgbGV0ICB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXRpdGxlJykudmFsdWU7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWRhdGUnKS52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1wcmlvcml0eScpLnZhbHVlO1xuICAgIFxuXG4gICAgbGV0IHRhc2sxID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSk7XG4gICAgdGFza0xpc3QucHVzaCh0YXNrMSk7XG5cbiAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XG5cbiAgICBjb25zdCBjcmVhdGVUYXNrID0gKCgpID0+IHtcblxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZScpO1xuXG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodGFzayk7XG5cbiAgICAgICAgY29uc3QgYWRkVGFza1RpdGxlID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuICAgICAgICAgICAgdGFza1RpdGxlLmlubmVyVGV4dCA9IHRhc2sxLnRpdGxlO1xuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIGNvbnN0IGFkZFRhc2tEdWVEYXRlID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlLWRhdGUnKTtcbiAgICAgICAgICAgIHRhc2tEdWVEYXRlLmlubmVyVGV4dCA9IHRhc2sxLmR1ZURhdGU7XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcbiAgICAgICAgfSkoKTsgXG5cbiAgICAgICAgY29uc3QgYWRkQ29tcGxldGlvbiA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wbGV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgIGNvbXBsZXRpb24uY2xhc3NMaXN0LmFkZCgndGFzay1jb21wbGV0aW9uJyk7XG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGNvbXBsZXRpb24pO1xuXG4gICAgICAgICAgICBjb25zdCBhZGRDb21wbGV0ZWRDaGVja2JveCA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcGxldGVkQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlZENoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICAgICAgICAgIGNvbXBsZXRpb24uYXBwZW5kQ2hpbGQoY29tcGxldGVkQ2hlY2tib3gpO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfSkoKTsgXG5cbiAgICB9KSgpO1xufVxuXG5jb25zb2xlLmxvZyh0YXNrTGlzdClcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfSBmcm9tICcuL2hvbWVwYWdlJztcbmltcG9ydCB7IGNyZWF0ZVRhc2tzIH0gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7IHN1Ym1pdFRhc2sgfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgYnVpbGRUYXNrRm9ybSB9IGZyb20gJy4vYWRkVGFza0RPTSc7XG5pbXBvcnQgeyBidWlsZFByb2plY3RGb3JtIH0gZnJvbSAnLi9hZGRQcm9qZWN0RE9NJztcblxuLy8gYnVpbGRzIHBhZ2VcbmNyZWF0ZUhvbWVQYWdlKCk7XG5idWlsZFRhc2tGb3JtKCk7XG5cbmNvbnN0IHNpZGViYXJMb2dpYyA9ICgoKSA9PiB7XG5cbiAgICAvLyByZW1vdmVzIHNpZGViYXIgZm9yIFRhc2sgLyBQcm9qZWN0IGZvcm0gc3dpdGNoXG4gICAgZnVuY3Rpb24gcmVtb3ZlTGFzdENoaWxkKCl7XG4gICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICAgICBzZWxlY3QucmVtb3ZlQ2hpbGQoc2VsZWN0Lmxhc3RDaGlsZCk7XG4gICAgfTtcblxuICAgIC8vIHRhc2sgZm9ybSBzd2l0Y2hcbiAgICBjb25zdCB0YXNrQnV0dG9uTG9naWMgPSAoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5UYXNrTWVudSk7XG4gICAgICAgIGZ1bmN0aW9uIG9wZW5UYXNrTWVudSgpe1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWJ1dHRvbicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYnV0dG9uLnN0eWxlLmNvbG9yKTtcbiAgICAgICAgICAgICAgICByZW1vdmVMYXN0Q2hpbGQoKTtcbiAgICAgICAgICAgICAgICBidWlsZFRhc2tGb3JtKCk7XG5cbiAgICAgICAgfTtcbiAgICB9KSgpO1xuXG4gICAgLy8gcHJvamVjdCBmb3JtIHN3aXRjaFxuICAgIGNvbnN0IHByb2plY3RCdXR0b25Mb2dpYyA9ICgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblRhc2tNZW51KTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICAgIGZ1bmN0aW9uIG9wZW5UYXNrTWVudSgpe1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUxhc3RDaGlsZCgpO1xuICAgICAgICAgICAgICAgIGJ1aWxkUHJvamVjdEZvcm0oKTtcbiAgICBcbiAgICAgICAgfTtcbiAgICB9KSgpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==