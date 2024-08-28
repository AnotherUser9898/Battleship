"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/grid.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/grid.css ***!
  \************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.your-grid,.opponent-grid {
    height: min-content;
    user-select: none;
}

table {
    border-collapse: collapse;
    user-select: none;
}

tr {
    position: relative;
}

td {
    height: 2em;
    width: 2em;
    border: 1px solid blue;
    padding: 0px;
    position: relative;
}


.ship-node[data-present] {
    user-select: text;
    top: 0px;
}

.ship-node {
    height: 2em;
    width: 2em;
    z-index: 10;
}`, "",{"version":3,"sources":["webpack://./src/grid.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;AACtB;;;AAGA;IACI,iBAAiB;IACjB,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,UAAU;IACV,WAAW;AACf","sourcesContent":[".your-grid,.opponent-grid {\n    height: min-content;\n    user-select: none;\n}\n\ntable {\n    border-collapse: collapse;\n    user-select: none;\n}\n\ntr {\n    position: relative;\n}\n\ntd {\n    height: 2em;\n    width: 2em;\n    border: 1px solid blue;\n    padding: 0px;\n    position: relative;\n}\n\n\n.ship-node[data-present] {\n    user-select: text;\n    top: 0px;\n}\n\n.ship-node {\n    height: 2em;\n    width: 2em;\n    z-index: 10;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
}

body {
    height: 100vh;
    display: grid;
    grid-template-rows: min-content auto;
    margin: 5px 0px 0px 0px;
}

.main {
    display: flex;
    justify-content: space-around;
    align-self: center;
    justify-content: center;
    align-items: center;
    gap: 25px;
}

.title {
    font-size: 2.5em;
    font-weight: bold;
}

.instruction-bar {
    background-color: #e2e8f0;
    height: min-content;
    padding: 8px;
    width: 25em;
    border-radius: 5px;
    margin-top: 5px;
}

button {
    width: 75px;
    height: 50px;
}

header {
    display: flex;
    justify-content: space-around;
}

.function-buttons {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.pass-device {
    display: none;
}

.around-grid {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.randomize {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}

.mode-select {
    padding: 15px;
    font-weight: bold;
    border: 2px solid blue;
}

.mode-buttons {
    display: flex;
    gap: 10px;
    cursor: pointer;
}

#computer-button {
    color: white;
    background-color: blue;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,oCAAoC;IACpC,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,WAAW;IACX,0BAA0B;IAC1B,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,sBAAsB;AAC1B","sourcesContent":["* {\n    box-sizing: border-box;\n}\n\nbody {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: min-content auto;\n    margin: 5px 0px 0px 0px;\n}\n\n.main {\n    display: flex;\n    justify-content: space-around;\n    align-self: center;\n    justify-content: center;\n    align-items: center;\n    gap: 25px;\n}\n\n.title {\n    font-size: 2.5em;\n    font-weight: bold;\n}\n\n.instruction-bar {\n    background-color: #e2e8f0;\n    height: min-content;\n    padding: 8px;\n    width: 25em;\n    border-radius: 5px;\n    margin-top: 5px;\n}\n\nbutton {\n    width: 75px;\n    height: 50px;\n}\n\nheader {\n    display: flex;\n    justify-content: space-around;\n}\n\n.function-buttons {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.pass-device {\n    display: none;\n}\n\n.around-grid {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n}\n\n.randomize {\n    color: blue;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n.mode-select {\n    padding: 15px;\n    font-weight: bold;\n    border: 2px solid blue;\n}\n\n.mode-buttons {\n    display: flex;\n    gap: 10px;\n    cursor: pointer;\n}\n\n#computer-button {\n    color: white;\n    background-color: blue;\n}\n\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/grid.css":
/*!**********************!*\
  !*** ./src/grid.css ***!
  \**********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_grid_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./grid.css */ "./node_modules/css-loader/dist/cjs.js!./src/grid.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_grid_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_grid_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_grid_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_grid_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/above-to-on-grid.js":
/*!*********************************!*\
  !*** ./src/above-to-on-grid.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboveToOnGrid: () => (/* binding */ aboveToOnGrid)
/* harmony export */ });
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ "./src/setup.js");

function aboveToOnGrid(gameboard, player) {
  gameboard.allShips.forEach((value, key, map) => {
    if (key.getOrientation() == "horizontal") {
      const start = value[1];
      const end = value[3];
      const row = value[0];
      for (let i = start; i <= end; i++) {
        const position = `${_setup__WEBPACK_IMPORTED_MODULE_0__.toWords[row]}-${_setup__WEBPACK_IMPORTED_MODULE_0__.toWords[i]}`;
        const selector = `.${player} > tr > .${position}`;
        const cell = document.querySelector(selector);
        cell.style.cssText +=
          "border-top: solid 2px blue; border-bottom: solid 2px blue;";
        if (i == start) {
          cell.style.cssText += "border-left: solid 2px blue;";
        }
        if (i == end) {
          cell.style.cssText += "border-right: solid 2px blue;";
        }
      }
    } else {
      const start = value[0];
      const end = value[2];
      const col = value[1];

      for (let i = start; i <= end; i++) {
        const position = `${_setup__WEBPACK_IMPORTED_MODULE_0__.toWords[i]}-${_setup__WEBPACK_IMPORTED_MODULE_0__.toWords[col]}`;
        const selector = `.${player} > tr > .${position}`;
        const cell = document.querySelector(selector);
        cell.style.cssText +=
          "border-left: solid 2px blue; border-right: solid 2px blue";
        if (i == start) {
          cell.style.cssText += "border-top: solid 2px blue;";
        }
        if (i == end) {
          cell.style.cssText += "border-bottom: solid 2px blue;";
        }
      }
    }
  });
}




/***/ }),

/***/ "./src/data-dom-interactions.js":
/*!**************************************!*\
  !*** ./src/data-dom-interactions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeAttack: () => (/* binding */ executeAttack)
/* harmony export */ });
/* harmony import */ var _render_hit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-hit */ "./src/render-hit.js");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup */ "./src/setup.js");


// executes ship attack on the gameboard and re-renders the grid accordingly
function executeAttack(gameboard, DOMCell, x, y) {
  let status;
  let miss;
  let shipHit = false;
  if (DOMCell.dataset.isHit == 1) {
    status = false;
  } else {
    if (gameboard.receiveAttack(x, y)) {
      (0,_render_hit__WEBPACK_IMPORTED_MODULE_0__.renderShipHit)(DOMCell);
      shipHit = true;
    } else {
      (0,_render_hit__WEBPACK_IMPORTED_MODULE_0__.renderMisHit)(DOMCell);
      miss = true;
    }
    status = true;
    DOMCell.dataset.isHit = 1;
  }
  return { status, miss, shipHit, x, y };
}

function highlight(ship, startCell) {
  const x = Number(startCell.dataset.x);
  const y = Number(startCell.dataset.y);

  const mouseEvent = new Event("mouseup");

  if (ship.dataset.orientation == "horizontal") {
    let spaceAvailable = true;
    const nodes = [];
    for (let i = 0; i < ship.dataset.length; i++) {
      const node = document.querySelector(
        `.${_setup__WEBPACK_IMPORTED_MODULE_1__.toWords[x]}-${_setup__WEBPACK_IMPORTED_MODULE_1__.toWords[y + i]}>.ship-node`
      );
      nodes.push(node);
      if (!node || node.hasAttribute("data-ship-exists")) {
        spaceAvailable = false;
      }
    }
    if (spaceAvailable) {
      nodes[0].dataset.x = ship.dataset.shipX;
      nodes[0].dataset.y = ship.dataset.shipX;
      ship.dataset.shipX = startCell.dataset.x;
      ship.dataset.shipY = startCell.dataset.y;
      const shipParent = document.querySelector(
        `.${_setup__WEBPACK_IMPORTED_MODULE_1__.toWords[ship.dataset.shipX]}-${_setup__WEBPACK_IMPORTED_MODULE_1__.toWords[ship.dataset.shipY]}`
      );
      shipParent.appendChild(nodes[0]);
      startCell.appendChild(ship);
      ship.dispatchEvent(mouseEvent);
      ship.style.cssText += "left: 0px; top: 0px;";
    } else {
      return;
    }
  }
  if (ship.dataset.orientation == "vertical") {
    let spaceAvailable = true;
    const nodes = [];
    for (let i = 0; i < ship.dataset.length; i++) {
      const node = document.querySelector(
        `.${_setup__WEBPACK_IMPORTED_MODULE_1__.toWords[x + i]}-${_setup__WEBPACK_IMPORTED_MODULE_1__.toWords[y]}>.ship-node`
      );
      nodes.push(node);
      if (!node || node.hasAttribute("data-ship-exists")) {
        spaceAvailable = false;
      }
    }
    if (spaceAvailable) {
      nodes[0].dataset.shipX = ship.dataset.shipX;
      nodes[0].dataset.shipY = ship.dataset.shipY;
      ship.dataset.shipX = startCell.dataset.x;
      ship.dataset.shipY = startCell.dataset.y;
      const shipParent = document.querySelector(
        `.${_setup__WEBPACK_IMPORTED_MODULE_1__.toWords[ship.dataset.shipX]}-${_setup__WEBPACK_IMPORTED_MODULE_1__.toWords[ship.dataset.shipY]}`
      );
      shipParent.appendChild(nodes[0]);
      startCell.appendChild(ship);
      setTimeout(() => {
        ship.dispatchEvent(mouseEvent);
      }, 500);

      ship.style.cssText += "left: 0px; top: 0px;";
    } else {
      return;
    }
  }
}
/*
function draggableEvent() {
  const shipNodes = document.querySelectorAll("[data-present]");
  shipNodes.forEach((shipNode) => {
    shipNode.onmousedown = (event) => {
      let shiftX = event.clientX - shipNode.getBoundingClientRect().left;
      let shiftY = event.clientY - shipNode.getBoundingClientRect().top;

      shipNode.style.zIndex = 1000;
      document.body.append(shipNode);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        shipNode.style.left = pageX - shiftX + "px";
        shipNode.style.top = pageY - shiftY + "px";
      }

      let currentDroppable = null;
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        shipNode.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        shipNode.hidden = false;

        if (!elemBelow) {
          return;
        }

        let droppableBelow = elemBelow.closest(".cell");
        let spaceAvailable = true;
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) {
            //leave area
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) {
            highlight(shipNode, droppableBelow);
          }
        }
      }

      document.addEventListener("mousemove", onMouseMove);

      shipNode.onmouseup = () => {
        console.log("fired mouseup");
        document.removeEventListener("mousemove", onMouseMove);
        shipNode.onmouseup = null;
      };
    };
    shipNode.ondragstart = () => {
      return false;
    };
  });
}
  */




/***/ }),

/***/ "./src/driver.js":
/*!***********************!*\
  !*** ./src/driver.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computerHit: () => (/* binding */ computerHit),
/* harmony export */   currentPlayer: () => (/* binding */ currentPlayer),
/* harmony export */   driver: () => (/* binding */ driver),
/* harmony export */   finalizeLayout: () => (/* binding */ finalizeLayout),
/* harmony export */   layoutFinalized: () => (/* binding */ layoutFinalized),
/* harmony export */   mode: () => (/* binding */ mode),
/* harmony export */   playGame: () => (/* binding */ playGame),
/* harmony export */   playGameVsHuman: () => (/* binding */ playGameVsHuman),
/* harmony export */   playerObjects: () => (/* binding */ playerObjects),
/* harmony export */   players: () => (/* binding */ players),
/* harmony export */   setupComputerGame: () => (/* binding */ setupComputerGame),
/* harmony export */   setupHumanGame: () => (/* binding */ setupHumanGame),
/* harmony export */   shipsCounts: () => (/* binding */ shipsCounts),
/* harmony export */   switchMode: () => (/* binding */ switchMode),
/* harmony export */   switchPlayer: () => (/* binding */ switchPlayer)
/* harmony export */ });
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ "./src/setup.js");
/* harmony import */ var _updateBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateBoard */ "./src/updateBoard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _set_event_listeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set-event-listeners */ "./src/set-event-listeners.js");
/* harmony import */ var _data_dom_interactions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-dom-interactions */ "./src/data-dom-interactions.js");
/* harmony import */ var _render_player_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./render-player-switch */ "./src/render-player-switch.js");
/* harmony import */ var _pass_device__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pass-device */ "./src/pass-device.js");
/* harmony import */ var _random_number__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./random-number */ "./src/random-number.js");
/* harmony import */ var _remove_all_inline_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./remove-all-inline-styles */ "./src/remove-all-inline-styles.js");
/* harmony import */ var _above_to_on_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./above-to-on-grid */ "./src/above-to-on-grid.js");
/* harmony import */ var _remove_event_listeners__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./remove-event-listeners */ "./src/remove-event-listeners.js");














// Globals
let mode = "Computer";
const instructionBar = document.querySelector(".instruction-bar");

const switchMode = () => {
  mode = mode == "Computer" ? "Human" : "Computer";
};

const shipsCounts = new Map();
shipsCounts.set(4, 1);
shipsCounts.set(3, 2);
shipsCounts.set(2, 3);
shipsCounts.set(1, 4);

let players = {
  player1: "your",
  player2: "opponent",
};

let currentPlayer = players.player2;

const switchPlayer = () => {
  if (currentPlayer == "opponent") {
    currentPlayer = "your";
  } else {
    currentPlayer = "opponent";
  }
  if (layoutFinalized) {
    instructionBar.textContent = `${currentPlayer}'s turn`;
  }
};

let layoutFinalized = false;
const finalizeLayout = () => {
  layoutFinalized = true;
  instructionBar.textContent = `${currentPlayer}'s turn`;
};

let playerObjects = {
  player1: new _player__WEBPACK_IMPORTED_MODULE_2__.Player(players.player1),
  player2: new _player__WEBPACK_IMPORTED_MODULE_2__.Player(players.player2),
};

// initializes the player grids and event listeners
function initialize() {
  (0,_set_event_listeners__WEBPACK_IMPORTED_MODULE_3__.setModeChangeButtonEvents)();
  (0,_set_event_listeners__WEBPACK_IMPORTED_MODULE_3__.addPassDeviceEvent)();
  randomize(playerObjects.player1.gameboard, players.player1);
  randomize(playerObjects.player2.gameboard, players.player2);
  playerObjects.player1.gameboard.initializeBoardWithShips();
  playerObjects.player2.gameboard.initializeBoardWithShips();
  setupGamePlay(playerObjects.player1.gameboard, players.player1);
}
// sets up the game for the computer mode
function setupComputerGame() {
  const passDeviceButton = document.querySelector(".pass-device");
  const randomizeOpponent = document.querySelector(".randomize-opponent");
  randomizeOpponent.click();
  randomizeOpponent.style.pointerEvents = "none";
  (0,_remove_all_inline_styles__WEBPACK_IMPORTED_MODULE_8__.removeAllInlineStyles)(players.player2);
  (0,_updateBoard__WEBPACK_IMPORTED_MODULE_1__.updateBoard)(playerObjects.player1.gameboard, players.player1);
  passDeviceButton.style.display = "none";
}

// sets up the game for the human mode
function setupHumanGame() {
  const passDeviceButton = document.querySelector(".pass-device");
  const randomizeOpponent = document.querySelector(".randomize-opponent");
  randomizeOpponent.style.pointerEvents = "auto";
  passDeviceButton.style.display = "block";
  (0,_updateBoard__WEBPACK_IMPORTED_MODULE_1__.updateBoard)(playerObjects.player1.gameboard, players.player1);
  (0,_updateBoard__WEBPACK_IMPORTED_MODULE_1__.updateBoard)(playerObjects.player2.gameboard, players.player2);
  (0,_pass_device__WEBPACK_IMPORTED_MODULE_6__.renderPassDevice)();
}

// drives the game when it is loaded for the first time
function driver() {
  initialize();
  setupComputerGame();
}

// drives the game for the computer mode
function playGame(cell, x, y, alreadyHit) {
  if (currentPlayer == players.player2) {
    if (alreadyHit) {
      const adjacentCell = getRandomAdjacentCell(x, y);
      (0,_data_dom_interactions__WEBPACK_IMPORTED_MODULE_4__.executeAttack)(
        playerObjects.player1,
        adjacentCell.cell,
        adjacentCell.xCoordinate,
        adjacentCell.yCoordinate
      );
      playGame(
        adjacentCell.cell,
        adjacentCell.xCoordinate,
        adjacentCell.yCoordinate,
        true
      );
      return;
    }
    setTimeout(() => {
      const attackObj = computerHit();
      if (playerObjects.player1.gameboard.allShipsSunk()) {
        alert("The computer Won");
        restartGame();
        return;
      }
      if (attackObj.status && attackObj.shipHit) {
        playGame(cell, attackObj.x, attackObj.y, true);
        return;
      } else if (attackObj.status && attackObj.miss) {
        switchPlayer();
        (0,_render_player_switch__WEBPACK_IMPORTED_MODULE_5__.renderPlayerSwitch)();
      }
    }, 2000);
  } else {
    const attackObj = (0,_data_dom_interactions__WEBPACK_IMPORTED_MODULE_4__.executeAttack)(
      playerObjects.player2.gameboard,
      cell,
      x,
      y
    );
    if (playerObjects.player2.gameboard.allShipsSunk()) {
      alert("You won");
      restartGame();
      return;
    }
    if (attackObj.status && attackObj.shipHit) {
      return;
    } else if (attackObj.status && attackObj.miss) {
      switchPlayer();
      (0,_render_player_switch__WEBPACK_IMPORTED_MODULE_5__.renderPlayerSwitch)();

      delayedComputerHit(2000, attackObj.x, attackObj.y, false);
    }
  }
}

// drives the game for the human mode
function playGameVsHuman(cell, x, y) {
  if (currentPlayer == players.player1) {
    const attackObj = (0,_data_dom_interactions__WEBPACK_IMPORTED_MODULE_4__.executeAttack)(
      playerObjects.player2.gameboard,
      cell,
      x,
      y
    );
    if (playerObjects.player2.gameboard.allShipsSunk()) {
      alert(`${players.player1} Won`);
      restartGame();
      return;
    }
    if (attackObj.status && attackObj.shipHit) {
      return;
    } else if (attackObj.status && attackObj.miss) {
      switchPlayer();
      (0,_render_player_switch__WEBPACK_IMPORTED_MODULE_5__.renderPlayerSwitch)();
    }
  } else {
    const attackObj = (0,_data_dom_interactions__WEBPACK_IMPORTED_MODULE_4__.executeAttack)(
      playerObjects.player1.gameboard,
      cell,
      x,
      y
    );
    if (playerObjects.player1.gameboard.allShipsSunk()) {
      alert(`${players.player2} Won`);
      restartGame();
      return;
    }
    if (attackObj.status && attackObj.shipHit) {
      return;
    } else if (attackObj.status && attackObj.miss) {
      switchPlayer();
      (0,_render_player_switch__WEBPACK_IMPORTED_MODULE_5__.renderPlayerSwitch)();
    }
  }
}

// runs the computerHit() functions after a specified delay
function delayedComputerHit(delay, x, y, alreadyHit) {
  setTimeout(() => {
    if (alreadyHit) {
      const adjacentCell = getRandomAdjacentCell(x, y);
      const attackObj = (0,_data_dom_interactions__WEBPACK_IMPORTED_MODULE_4__.executeAttack)(
        playerObjects.player1.gameboard,
        adjacentCell.cell,
        adjacentCell.xCoordinate,
        adjacentCell.yCoordinate
      );
      if (attackObj.status && attackObj.shipHit) {
        delayedComputerHit(
          2000,
          adjacentCell.xCoordinate,
          adjacentCell.yCoordinate,
          attackObj.shipHit
        );
      } else if (attackObj.status && attackObj.miss) {
        switchPlayer();
        (0,_render_player_switch__WEBPACK_IMPORTED_MODULE_5__.renderPlayerSwitch)();
      }
      return;
    }
    const attackObj = computerHit();
    if (attackObj.status && attackObj.shipHit) {
      delayedComputerHit(2000, attackObj.x, attackObj.y, attackObj.shipHit);
      return;
    } else if (attackObj.status && attackObj.miss) {
      switchPlayer();
      (0,_render_player_switch__WEBPACK_IMPORTED_MODULE_5__.renderPlayerSwitch)();
    }
  }, delay);
}
// base function that hits as the opponents grid as the computer
function computerHit() {
  while (true) {
    const x = (0,_random_number__WEBPACK_IMPORTED_MODULE_7__.getRandomNumber)();
    const y = (0,_random_number__WEBPACK_IMPORTED_MODULE_7__.getRandomNumber)();
    const position = `${_setup__WEBPACK_IMPORTED_MODULE_0__.toWords[x]}-${_setup__WEBPACK_IMPORTED_MODULE_0__.toWords[y]}`;
    const selector = `.your > tr > .${position}`;
    const cell = document.querySelector(selector);
    if (cell.dataset.isHit == false) {
      return (0,_data_dom_interactions__WEBPACK_IMPORTED_MODULE_4__.executeAttack)(playerObjects.player1.gameboard, cell, x, y);
    }
  }
}

// returns a cell adjacent to the given cell that has not been hit
function getRandomAdjacentCell(x, y) {
  const choices = [];
  if (x > 0) {
    const obj = { xCoordinate: x - 1, yCoordinate: y };
    choices.push(obj);
  }
  if (x < 9) {
    const obj = { xCoordinate: x + 1, yCoordinate: y };
    choices.push(obj);
  }
  if (y > 0) {
    const obj = { xCoordinate: x, yCoordinate: y - 1 };
    choices.push(obj);
  }
  if (y < 9) {
    const obj = { xCoordinate: x, yCoordinate: y + 1 };
    choices.push(obj);
  }

  while (true) {
    const index = Math.floor(Math.random() * choices.length);
    const x = choices[index].xCoordinate;
    const y = choices[index].yCoordinate;
    const position = `${_setup__WEBPACK_IMPORTED_MODULE_0__.toWords[x]}-${_setup__WEBPACK_IMPORTED_MODULE_0__.toWords[y]}`;
    const selector = `.your > tr > .${position}`;
    const cell = document.querySelector(selector);
    if (cell.dataset.isHit == false) {
      return Object.assign({}, choices[index], { cell });
    }
  }
}

// sets up grid event listeners and does necessary things when the power button is pressed
function playButtonEvent() {
  (0,_set_event_listeners__WEBPACK_IMPORTED_MODULE_3__.setupEventListeners)();
  (0,_remove_all_inline_styles__WEBPACK_IMPORTED_MODULE_8__.removeAllInlineStyles)(players.player1);
  (0,_remove_all_inline_styles__WEBPACK_IMPORTED_MODULE_8__.removeAllInlineStyles)(players.player2);
  if (mode == "Computer") {
    (0,_above_to_on_grid__WEBPACK_IMPORTED_MODULE_9__.aboveToOnGrid)(playerObjects.player1.gameboard, players.player1);
  }
  finalizeLayout();
  currentPlayer = players.player1;
  if (mode == "Human") {
    const passDevice = document.querySelector(".pass-device");
    passDevice.style.display = "none";
    (0,_render_player_switch__WEBPACK_IMPORTED_MODULE_5__.renderPlayerSwitch)();
  } else {
    (0,_render_player_switch__WEBPACK_IMPORTED_MODULE_5__.renderPlayerSwitch)();
  }
}
// links playButtonEvent() to play button's click event
function setupGamePlay() {
  const play = document.querySelector(".play");
  play.addEventListener("click", playButtonEvent);
}

// randomizes ship positions in the specified player grid
function randomize(gameboard, player) {
  const randomize = document.querySelector(`.randomize-${player}`);
  randomize.addEventListener("click", () => {
    if (layoutFinalized == true || currentPlayer == player) {
      return;
    }
    gameboard.clearBoard();
    gameboard.initializeBoardWithShips();
    (0,_remove_all_inline_styles__WEBPACK_IMPORTED_MODULE_8__.removeAllInlineStyles)(player);
    (0,_updateBoard__WEBPACK_IMPORTED_MODULE_1__.updateBoard)(gameboard, player);
  });
}

// performs functions when game ends
function endGame() {
  for (const playerObject in playerObjects) {
    const element = playerObjects[playerObject];
    element.gameboard.clearBoard();
  }
  (0,_remove_all_inline_styles__WEBPACK_IMPORTED_MODULE_8__.removeAllInlineStyles)(players.player1);
  (0,_remove_all_inline_styles__WEBPACK_IMPORTED_MODULE_8__.removeAllInlineStyles)(players.player2);
  const yourGrid = document.querySelector(".your-grid");
  const opponentGrid = document.querySelector(".opponent-grid");
  yourGrid.removeAttribute("style");
  opponentGrid.removeAttribute("style");
  currentPlayer = players.player1;
  (0,_remove_event_listeners__WEBPACK_IMPORTED_MODULE_10__.removeEventListeners)();
  const play = document.querySelector(".play");
  play.removeEventListener("click", playButtonEvent);
}
// restarts the game
function restartGame() {
  const computerButton = document.querySelector("#computer-button");
  layoutFinalized = false;
  computerButton.click();
  endGame();
  (0,_setup__WEBPACK_IMPORTED_MODULE_0__.setupCellHTML)();
  driver();
}




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _random_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random-number */ "./src/random-number.js");
/* harmony import */ var _driver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./driver */ "./src/driver.js");



class Gameboard {
  grid;
  gridSize;
  missedAttacks;
  numberOfShips;
  allShips;
  constructor(gridSize) {
    this.grid = [];
    this.gridSize = gridSize;
    this.numberOfShips = 0;
    this.missedAttacks = new Set();
    this.allShips = new Map();
    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let j = 0; j < gridSize; j++) {
        row.push(0);
      }
      this.grid.push(row);
    }
  }

  clearBoard() {
    for (let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize; j++) {
        this.grid[i][j] = 0;
      }
    }
    this.numberOfShips = 0;
    this.missedAttacks.clear();
    this.allShips.clear();
  }

  setOffLimitArea(coordinates) {
    if (coordinates[0] == coordinates[2]) {
      for (let i = coordinates[1]; i <= coordinates[3]; i++) {
        if (i == coordinates[1] && coordinates[1] > 0) {
          this.grid[coordinates[0]][coordinates[1] - 1] = 2;
        }
        if (i == coordinates[3] && coordinates[3] < 9) {
          this.grid[coordinates[0]][coordinates[3] + 1] = 2;
        }
        if (coordinates[0] > 0) {
          this.grid[coordinates[0] - 1][i] = 2;
        }
        if (coordinates[0] < 9) {
          this.grid[coordinates[0] + 1][i] = 2;
        }
      }
    } else if (coordinates[1] == coordinates[3]) {
      for (let i = coordinates[0]; i <= coordinates[2]; i++) {
        if (i == coordinates[0] && coordinates[0] > 0) {
          this.grid[coordinates[0] - 1][coordinates[1]] = 2;
        }
        if (i == coordinates[2] && coordinates[2] < 9) {
          this.grid[coordinates[2] + 1][coordinates[3]] = 2;
        }
        if (coordinates[1] > 0) {
          this.grid[i][coordinates[1] - 1] = 2;
        }
        if (coordinates[1] < 9) {
          this.grid[i][coordinates[1] + 1] = 2;
        }
      }
    }
  }

  addShip(coordinates) {
    if (
      !(coordinates[0] == coordinates[2] || coordinates[1] == coordinates[3])
    ) {
      return "Ships can only be vertical or horizontal not slanting";
    } else {
      if (coordinates[0] == coordinates[2]) {
        const length = coordinates[3] - coordinates[1] + 1;
        const newShip = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(length);
        const row = coordinates[0];
        let vacant = true;
        for (let j = coordinates[1]; j < coordinates[3] + 1; j++) {
          if (this.grid[row][j] != 0) {
            vacant = false;
            return false;
          }
        }
        if (vacant) {
          for (let j = coordinates[1]; j < coordinates[3] + 1; j++) {
            if (this.grid[row][j] == 0) {
              this.grid[row][j] = newShip;
            }
          }
          this.setOffLimitArea(coordinates);
          this.allShips.set(newShip, coordinates);
        }
      } else if (coordinates[1] == coordinates[3]) {
        const length = coordinates[2] - coordinates[0] + 1;
        const newShip = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(length);
        const col = coordinates[1];
        let vacant = true;
        for (let i = coordinates[0]; i < coordinates[2] + 1; i++) {
          newShip.orientation = "vertical";
          if (this.grid[i][col] != 0) {
            vacant = false;
            return false;
          }
        }
        if (vacant) {
          for (let i = coordinates[0]; i < coordinates[2] + 1; i++) {
            newShip.orientation = "vertical";
            if (this.grid[i][col] == 0) {
              this.grid[i][col] = newShip;
            } else {
              return false;
            }
          }
          this.setOffLimitArea(coordinates);
          this.allShips.set(newShip, coordinates);
        }
      }
      this.numberOfShips += 1;
      return true;
    }
  }

  receiveAttack(x, y) {
    if (this.grid[x][y] instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship) {
      this.grid[x][y].hit();
      if (this.grid[x][y].isSunk()) {
        this.numberOfShips -= 1;
      }
      return true;
    } else if (this.grid[x][y] == 0) {
      this.grid[x][y] = 1;
      this.missedAttacks.add([x, y].toString());
      return false;
    }
  }

  allShipsSunk() {
    return this.numberOfShips == 0;
  }

  initializeBoardWithShips() {
    for (let length = 4; length >= 1; length--) {
      let count = _driver__WEBPACK_IMPORTED_MODULE_2__.shipsCounts.get(length);
      while (count > 0) {
        const orientation = Math.floor(Math.random() * 2);
        if (orientation == 0) {
          const x1 = (0,_random_number__WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)();
          const y1 = (0,_random_number__WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)();
          const x2 = x1;
          const y2 = y1 + length - 1;
          if (y2 > 9) {
            continue;
          }
          const coordinates = [x1, y1, x2, y2];
          if (this.addShip(coordinates)) {
            count -= 1;
          }
        }
        if (orientation == 1) {
          const x1 = (0,_random_number__WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)();
          const y1 = (0,_random_number__WEBPACK_IMPORTED_MODULE_1__.getRandomNumber)();
          const x2 = x1 + length - 1;
          if (x2 > 9) {
            continue;
          }
          const y2 = y1;
          const coordinates = [x1, y1, x2, y2];
          if (this.addShip(coordinates)) {
            count -= 1;
          }
        }
      }
    }
  }
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _grid_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid.css */ "./src/grid.css");
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup */ "./src/setup.js");
/* harmony import */ var _driver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver */ "./src/driver.js");




(0,_setup__WEBPACK_IMPORTED_MODULE_2__.setupCellHTML)();
(0,_driver__WEBPACK_IMPORTED_MODULE_3__.driver)();


/***/ }),

/***/ "./src/pass-device.js":
/*!****************************!*\
  !*** ./src/pass-device.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   passDevice: () => (/* binding */ passDevice),
/* harmony export */   renderPassDevice: () => (/* binding */ renderPassDevice)
/* harmony export */ });
/* harmony import */ var _driver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver */ "./src/driver.js");

function passDevice() {
  (0,_driver__WEBPACK_IMPORTED_MODULE_0__.switchPlayer)();
  renderPassDevice();
}

function renderPassDevice() {
  const player1 = document.querySelector(".your-grid");
  const player2 = document.querySelector(".opponent-grid");

  if (_driver__WEBPACK_IMPORTED_MODULE_0__.currentPlayer == _driver__WEBPACK_IMPORTED_MODULE_0__.players.player2) {
    player2.style.filter = "blur(35px)";
    player2.style.pointerEvents = "none";
    player1.style.filter = "blur(0px)";
    player1.style.pointerEvents = "auto";
  } else {
    player1.style.filter = "blur(35px)";
    player1.style.pointerEvents = "none";
    player2.style.filter = "blur(0px)";
    player2.style.pointerEvents = "auto";
  }
}




/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


class Player {
  gameboard;
  type;

  constructor(type) {
    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard(10);
    this.type = type;
  }
}




/***/ }),

/***/ "./src/random-number.js":
/*!******************************!*\
  !*** ./src/random-number.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomNumber: () => (/* binding */ getRandomNumber)
/* harmony export */ });
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}



/***/ }),

/***/ "./src/remove-all-inline-styles.js":
/*!*****************************************!*\
  !*** ./src/remove-all-inline-styles.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeAllInlineStyles: () => (/* binding */ removeAllInlineStyles),
/* harmony export */   removePlayerSwitchStyles: () => (/* binding */ removePlayerSwitchStyles)
/* harmony export */ });
function removeAllInlineStyles(player) {
  const cells = document.querySelectorAll(`.${player} > tr > td > .ship-node`);
  cells.forEach((cell) => {
    cell.removeAttribute("style");
  });
}

function removePlayerSwitchStyles() {
  const player1 = document.querySelector(".your-grid");
  const player2 = document.querySelector(".opponent-grid");

  player1.style.opacity = 1;
  player1.style.filter = "blur(0px)";

  player2.style.opacity = 1;
  player2.style.filter = "blur(0px)";
}




/***/ }),

/***/ "./src/remove-event-listeners.js":
/*!***************************************!*\
  !*** ./src/remove-event-listeners.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeEventListeners: () => (/* binding */ removeEventListeners)
/* harmony export */ });
function removeEventListeners() {
  const yourGrid = document.querySelector(".your");
  const opponentGrid = document.querySelector(".opponent");
  yourGrid.replaceChildren();
  opponentGrid.replaceChildren();
}




/***/ }),

/***/ "./src/render-hit.js":
/*!***************************!*\
  !*** ./src/render-hit.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMisHit: () => (/* binding */ renderMisHit),
/* harmony export */   renderShipHit: () => (/* binding */ renderShipHit)
/* harmony export */ });
function renderShipHit(shipCell) {
    shipCell.style.cssText += "background-color: red";
}

function renderMisHit(gridCell) {
    gridCell.style.cssText += "background-color: yellow";
}





/***/ }),

/***/ "./src/render-mode-change.js":
/*!***********************************!*\
  !*** ./src/render-mode-change.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderModeChange: () => (/* binding */ renderModeChange)
/* harmony export */ });
/* harmony import */ var _driver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver */ "./src/driver.js");

// render changes in page when mode is changed
function renderModeChange(event) {
  const computerButton = document.querySelector("#computer-button");
  const humanButton = document.querySelector("#human-button");
  if (_driver__WEBPACK_IMPORTED_MODULE_0__.mode == "Human" && event.target.id == "computer-button") {
    computerButton.style.cssText += "color: white; background-color: blue";
    humanButton.style.cssText += "color: black; background-color: white";
    (0,_driver__WEBPACK_IMPORTED_MODULE_0__.switchMode)();
  } else if (_driver__WEBPACK_IMPORTED_MODULE_0__.mode == "Computer" && event.target.id == "human-button") {
    humanButton.style.cssText += "color: white; background-color: blue";
    computerButton.style.cssText += "color: black; background-color: white";
    (0,_driver__WEBPACK_IMPORTED_MODULE_0__.switchMode)();
  }
}




/***/ }),

/***/ "./src/render-player-switch.js":
/*!*************************************!*\
  !*** ./src/render-player-switch.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderPlayerSwitch: () => (/* binding */ renderPlayerSwitch)
/* harmony export */ });
/* harmony import */ var _driver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver */ "./src/driver.js");

function renderPlayerSwitch() {
  const player1 = document.querySelector(".your-grid");
  const player2 = document.querySelector(".opponent-grid");
  player1.style.filter = "blur(0px)";
  player2.style.filter = "blur(0px)";

  if (_driver__WEBPACK_IMPORTED_MODULE_0__.currentPlayer == _driver__WEBPACK_IMPORTED_MODULE_0__.players.player2) {
    player2.style.opacity = 0.15;
    player2.style.pointerEvents = "none";
    player1.style.opacity = 1;
    player1.style.pointerEvents = "auto";
  } else {
    player1.style.opacity = 0.15;
    player1.style.pointerEvents = "none";
    player2.style.opacity = 1;
    player2.style.pointerEvents = "auto";
  }
}




/***/ }),

/***/ "./src/set-event-listeners.js":
/*!************************************!*\
  !*** ./src/set-event-listeners.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addPassDeviceEvent: () => (/* binding */ addPassDeviceEvent),
/* harmony export */   setModeChangeButtonEvents: () => (/* binding */ setModeChangeButtonEvents),
/* harmony export */   setupEventListeners: () => (/* binding */ setupEventListeners)
/* harmony export */ });
/* harmony import */ var _driver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driver */ "./src/driver.js");
/* harmony import */ var _render_mode_change__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-mode-change */ "./src/render-mode-change.js");
/* harmony import */ var _pass_device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pass-device */ "./src/pass-device.js");
/* harmony import */ var _remove_all_inline_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove-all-inline-styles */ "./src/remove-all-inline-styles.js");




// sets up individual event listeners for grid cells
function setupEventListeners() {
  const yourCells = document.querySelectorAll(".your > tr > .cell");
  const oppenentCells = document.querySelectorAll(".opponent > tr > .cell");

  yourCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const x = Number(cell.dataset.x);
      const y = Number(cell.dataset.y);
      if (_driver__WEBPACK_IMPORTED_MODULE_0__.mode == "Computer") {
        (0,_driver__WEBPACK_IMPORTED_MODULE_0__.playGame)(cell, x, y, false);
      } else {
        (0,_driver__WEBPACK_IMPORTED_MODULE_0__.playGameVsHuman)(cell, x, y);
      }
    });
  });

  oppenentCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const x = Number(cell.dataset.x);
      const y = Number(cell.dataset.y);
      if (_driver__WEBPACK_IMPORTED_MODULE_0__.mode == "Computer") {
        (0,_driver__WEBPACK_IMPORTED_MODULE_0__.playGame)(cell, x, y, false);
      } else {
        (0,_driver__WEBPACK_IMPORTED_MODULE_0__.playGameVsHuman)(cell, x, y);
      }
    });
  });
}

// adds event listeners that change button style and re-renders the page to indicate game mode
function setModeChangeButtonEvents() {
  const computerButton = document.querySelector("#computer-button");
  const humanButton = document.querySelector("#human-button");

  computerButton.addEventListener("click", (event) => {
    if (_driver__WEBPACK_IMPORTED_MODULE_0__.layoutFinalized) {
      return;
    }
    (0,_render_mode_change__WEBPACK_IMPORTED_MODULE_1__.renderModeChange)(event);
    (0,_remove_all_inline_styles__WEBPACK_IMPORTED_MODULE_3__.removePlayerSwitchStyles)();
    (0,_driver__WEBPACK_IMPORTED_MODULE_0__.setupComputerGame)();
  });

  humanButton.addEventListener("click", (event) => {
    if (_driver__WEBPACK_IMPORTED_MODULE_0__.layoutFinalized) {
      return;
    }
    (0,_render_mode_change__WEBPACK_IMPORTED_MODULE_1__.renderModeChange)(event);
    (0,_remove_all_inline_styles__WEBPACK_IMPORTED_MODULE_3__.removePlayerSwitchStyles)();
    (0,_driver__WEBPACK_IMPORTED_MODULE_0__.setupHumanGame)();
  });
}

// sets up pass device event listener
function addPassDeviceEvent() {
  const passDeviceButton = document.querySelector(".pass-device");
  passDeviceButton.addEventListener("click", _pass_device__WEBPACK_IMPORTED_MODULE_2__.passDevice);
}




/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupCellHTML: () => (/* binding */ setupCellHTML),
/* harmony export */   toWords: () => (/* binding */ toWords)
/* harmony export */ });
const toWords = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const toNumbers = new Map();
for (let i = 0; i < toWords.length; i++) {
  toNumbers.set(toWords[i], i);
}

function setupCellHTML() {
  const yourGrid = document.querySelector(".your");
  const opponentsGrid = document.querySelector(".opponent");

  for (let i = 0; i < 10; i++) {
    const yourRow = document.createElement("tr");
    const opponentsRow = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
      const yourCell = document.createElement("td");
      const shipNode = document.createElement("div");
      shipNode.classList.add("ship-node");
      shipNode.dataset.shipX = i;
      shipNode.dataset.shipY = j;
      yourCell.classList.add("cell", `${toWords[i]}-${toWords[j]}`);
      yourCell.dataset.x = i;
      yourCell.dataset.y = j;
      yourCell.dataset.isHit = 0;
      yourCell.appendChild(shipNode);
      yourRow.appendChild(yourCell);

      const opponentCell = document.createElement("td");
      const opponentShipNode = document.createElement("div");
      opponentShipNode.classList.add("ship-node");
      opponentShipNode.dataset.shipX = i;
      opponentShipNode.dataset.shipY = j;
      opponentCell.classList.add("cell", `${toWords[i]}-${toWords[j]}`);
      opponentCell.dataset.x = i;
      opponentCell.dataset.y = j;
      opponentCell.dataset.isHit = 0;
      opponentCell.appendChild(opponentShipNode);
      opponentsRow.appendChild(opponentCell);
    }
    yourGrid.appendChild(yourRow);
    opponentsGrid.appendChild(opponentsRow);
  }
}




/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    length;
    hits;
    orientation;

    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.orientation = "horizontal";
    }

    hit() {
        if (this.hits < this.length) {
            this.hits += 1;
        } else {
            return;
        }
    }

    getHit() {
        return this.hits;
    }

    isSunk() {
        return this.getLength() == this.getHit();
    }

    getLength() {
        return this.length;
    }
    
    switchOrientation() {
        return this.orientation = this.orientation == "horizontal" ? "vertical" : "horizontal";
    }

    getOrientation() {
        return this.orientation;
    }
}





/***/ }),

/***/ "./src/updateBoard.js":
/*!****************************!*\
  !*** ./src/updateBoard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateBoard: () => (/* binding */ updateBoard)
/* harmony export */ });
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup */ "./src/setup.js");

function updateBoard(gameboard, player) {
  gameboard.allShips.forEach((value, key, map) => {
    if (key.getOrientation() == "horizontal") {
      const start = value[1];
      const end = value[3];
      const row = value[0];

      const position = `${_setup__WEBPACK_IMPORTED_MODULE_0__.toWords[row]}-${_setup__WEBPACK_IMPORTED_MODULE_0__.toWords[start]}`;
      const selector = `.${player} > tr > .${position} > .ship-node`;
      for (let i = 0; i < key.getLength(); i++) {
        const p = `${_setup__WEBPACK_IMPORTED_MODULE_0__.toWords[row]}-${_setup__WEBPACK_IMPORTED_MODULE_0__.toWords[start + i]}`;
        const sel = `.${player} > tr > .${p} > .ship-node`;
        const node = document.querySelector(sel);
        node.dataset.shipExists = 1;
      }
      const cell = document.querySelector(selector);
      cell.dataset.present = 1;
      cell.dataset.shipX = row;
      cell.dataset.shipY = start;
      cell.dataset.length = key.getLength();
      cell.dataset.orientation = key.getOrientation();
      cell.style.cssText += "border: solid 2px blue;";
      const width = key.getLength() * 2 + 0.05 * (key.getLength() - 1);
      cell.style.cssText += `width: ${width}em; height: 2em; position:absolute; cursor: move !important; z-index: 1;`;
    } else {
      const start = value[0];
      const end = value[2];
      const col = value[1];

      const position = `${_setup__WEBPACK_IMPORTED_MODULE_0__.toWords[start]}-${_setup__WEBPACK_IMPORTED_MODULE_0__.toWords[col]}`;
      const selector = `.${player} > tr > .${position} > .ship-node`;
      for (let i = 0; i < key.getLength(); i++) {
        const p = `${_setup__WEBPACK_IMPORTED_MODULE_0__.toWords[start + i]}-${_setup__WEBPACK_IMPORTED_MODULE_0__.toWords[col]}`;
        const sel = `.${player} > tr > .${p} > .ship-node`;
        const node = document.querySelector(sel);
        node.dataset.shipExists = 1;
      }
      const cell = document.querySelector(selector);
      cell.dataset.present = 1;
      cell.dataset.shipX = start;
      cell.dataset.shipY = col;
      cell.dataset.length = key.getLength();
      cell.dataset.orientation = key.getOrientation();
      cell.style.cssText += "border: 2px solid blue;";
      const height = key.getLength() * 2 + 0.05 * (key.getLength() - 1);
      cell.style.cssText += `height: ${height}em; width: 2em;position: absolute; cursor: move !important; z-index: 1;`;
    }
  });
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLCtFQUErRSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLG9EQUFvRCwwQkFBMEIsd0JBQXdCLEdBQUcsV0FBVyxnQ0FBZ0Msd0JBQXdCLEdBQUcsUUFBUSx5QkFBeUIsR0FBRyxRQUFRLGtCQUFrQixpQkFBaUIsNkJBQTZCLG1CQUFtQix5QkFBeUIsR0FBRyxnQ0FBZ0Msd0JBQXdCLGVBQWUsR0FBRyxnQkFBZ0Isa0JBQWtCLGlCQUFpQixrQkFBa0IsR0FBRyxtQkFBbUI7QUFDNXlCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q3ZDO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksNkJBQTZCLDZCQUE2QixHQUFHLFVBQVUsb0JBQW9CLG9CQUFvQiwyQ0FBMkMsOEJBQThCLEdBQUcsV0FBVyxvQkFBb0Isb0NBQW9DLHlCQUF5Qiw4QkFBOEIsMEJBQTBCLGdCQUFnQixHQUFHLFlBQVksdUJBQXVCLHdCQUF3QixHQUFHLHNCQUFzQixnQ0FBZ0MsMEJBQTBCLG1CQUFtQixrQkFBa0IseUJBQXlCLHNCQUFzQixHQUFHLFlBQVksa0JBQWtCLG1CQUFtQixHQUFHLFlBQVksb0JBQW9CLG9DQUFvQyxHQUFHLHVCQUF1QixvQkFBb0IsNkJBQTZCLGVBQWUsR0FBRyxrQkFBa0Isb0JBQW9CLEdBQUcsa0JBQWtCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsZ0JBQWdCLGtCQUFrQixpQ0FBaUMsc0JBQXNCLEdBQUcsa0JBQWtCLG9CQUFvQix3QkFBd0IsNkJBQTZCLEdBQUcsbUJBQW1CLG9CQUFvQixnQkFBZ0Isc0JBQXNCLEdBQUcsc0JBQXNCLG1CQUFtQiw2QkFBNkIsR0FBRyx1QkFBdUI7QUFDbDhEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDMUYxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBa0c7QUFDbEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUk0QztBQUNwRSxPQUFPLGlFQUFlLHFGQUFPLElBQUkscUZBQU8sVUFBVSxxRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjdFLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVTtBQUNwQyw0QkFBNEIsMkNBQU8sTUFBTSxHQUFHLDJDQUFPLElBQUk7QUFDdkQsNkJBQTZCLFFBQVEsVUFBVSxTQUFTO0FBQ3hEO0FBQ0E7QUFDQSx1Q0FBdUMsOEJBQThCO0FBQ3JFO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLFVBQVU7QUFDcEMsNEJBQTRCLDJDQUFPLElBQUksR0FBRywyQ0FBTyxNQUFNO0FBQ3ZELDZCQUE2QixRQUFRLFVBQVUsU0FBUztBQUN4RDtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUV5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ2tDO0FBQ3pCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsTUFBTSwwREFBYTtBQUNuQjtBQUNBLE1BQU07QUFDTixNQUFNLHlEQUFZO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQSxZQUFZLDJDQUFPLElBQUksR0FBRywyQ0FBTyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkNBQU8scUJBQXFCLEdBQUcsMkNBQU8scUJBQXFCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQSxZQUFZLDJDQUFPLFFBQVEsR0FBRywyQ0FBTyxJQUFJO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkNBQU8scUJBQXFCLEdBQUcsMkNBQU8scUJBQXFCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQLHdDQUF3QyxTQUFTO0FBQ2pELE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUV5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25KUztBQUNVO0FBQ1Y7QUFJSDtBQUN5QjtBQUNJO0FBQ1g7QUFDQztBQUNpQjtBQUNoQjtBQUNhO0FBQ3hCO0FBQ21COztBQUUzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGNBQWM7QUFDaEQ7O0FBRUE7QUFDQSxlQUFlLDJDQUFNO0FBQ3JCLGVBQWUsMkNBQU07QUFDckI7O0FBRUE7QUFDQTtBQUNBLEVBQUUsK0VBQXlCO0FBQzNCLEVBQUUsd0VBQWtCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0ZBQXFCO0FBQ3ZCLEVBQUUseURBQVc7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQVc7QUFDYixFQUFFLHlEQUFXO0FBQ2IsRUFBRSw4REFBZ0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxRUFBYTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUSx5RUFBa0I7QUFDMUI7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKLHNCQUFzQixxRUFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNLHlFQUFrQjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFFQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNLHlFQUFrQjtBQUN4QjtBQUNBLElBQUk7QUFDSixzQkFBc0IscUVBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU0seUVBQWtCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFFQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVEseUVBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTSx5RUFBa0I7QUFDeEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLCtEQUFlO0FBQzdCLGNBQWMsK0RBQWU7QUFDN0Isd0JBQXdCLDJDQUFPLElBQUksR0FBRywyQ0FBTyxJQUFJO0FBQ2pELHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7QUFDQSxhQUFhLHFFQUFhO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJDQUFPLElBQUksR0FBRywyQ0FBTyxJQUFJO0FBQ2pELHNDQUFzQyxTQUFTO0FBQy9DO0FBQ0E7QUFDQSw2QkFBNkIsb0JBQW9CLE1BQU07QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHlFQUFtQjtBQUNyQixFQUFFLGdGQUFxQjtBQUN2QixFQUFFLGdGQUFxQjtBQUN2QjtBQUNBLElBQUksZ0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5RUFBa0I7QUFDdEIsSUFBSTtBQUNKLElBQUkseUVBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQsT0FBTztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdGQUFxQjtBQUN6QixJQUFJLHlEQUFXO0FBQ2YsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0ZBQXFCO0FBQ3ZCLEVBQUUsZ0ZBQXFCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhFQUFvQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFEQUFhO0FBQ2Y7QUFDQTs7QUFrQkU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RXNEI7QUFDb0I7QUFDWDtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBLHNCQUFzQixjQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDLHNCQUFzQixtQkFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxxQkFBcUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sbUNBQW1DLHFCQUFxQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsNEJBQTRCLHVDQUFJO0FBQ2hDO0FBQ0E7QUFDQSxxQ0FBcUMsd0JBQXdCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyx3QkFBd0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSw0QkFBNEIsdUNBQUk7QUFDaEM7QUFDQTtBQUNBLHFDQUFxQyx3QkFBd0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsd0JBQXdCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLHVDQUFJO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsYUFBYTtBQUN0QyxrQkFBa0IsZ0RBQVc7QUFDN0I7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtEQUFlO0FBQ3BDLHFCQUFxQiwrREFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtEQUFlO0FBQ3BDLHFCQUFxQiwrREFBZTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxQjs7Ozs7Ozs7Ozs7Ozs7OztBQ25MQTtBQUNEO0FBQ29CO0FBQ047QUFDbEMscURBQWE7QUFDYiwrQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMMEQ7QUFDaEU7QUFDQSxFQUFFLHFEQUFZO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxrREFBYSxJQUFJLDRDQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixpREFBUztBQUNsQztBQUNBO0FBQ0E7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7QUNabEI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRTJEOzs7Ozs7Ozs7Ozs7Ozs7QUNsQjNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ040QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seUNBQUk7QUFDVixtREFBbUQ7QUFDbkQsZ0RBQWdEO0FBQ2hELElBQUksbURBQVU7QUFDZCxJQUFJLFNBQVMseUNBQUk7QUFDakIsZ0RBQWdEO0FBQ2hELG1EQUFtRDtBQUNuRCxJQUFJLG1EQUFVO0FBQ2Q7QUFDQTs7QUFFNEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQnNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxrREFBYSxJQUFJLDRDQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JaO0FBQ3NDO0FBQ2I7QUFDMkI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHlDQUFJO0FBQ2QsUUFBUSxpREFBUTtBQUNoQixRQUFRO0FBQ1IsUUFBUSx3REFBZTtBQUN2QjtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx5Q0FBSTtBQUNkLFFBQVEsaURBQVE7QUFDaEIsUUFBUTtBQUNSLFFBQVEsd0RBQWU7QUFDdkI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxvREFBZTtBQUN2QjtBQUNBO0FBQ0EsSUFBSSxxRUFBZ0I7QUFDcEIsSUFBSSxtRkFBd0I7QUFDNUIsSUFBSSwwREFBaUI7QUFDckIsR0FBRzs7QUFFSDtBQUNBLFFBQVEsb0RBQWU7QUFDdkI7QUFDQTtBQUNBLElBQUkscUVBQWdCO0FBQ3BCLElBQUksbUZBQXdCO0FBQzVCLElBQUksdURBQWM7QUFDbEIsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxvREFBVTtBQUN2RDs7QUFFOEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RTlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEdBQUcsV0FBVztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsV0FBVyxHQUFHLFdBQVc7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtDOzs7Ozs7Ozs7Ozs7Ozs7QUN0RGxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDb0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQiwyQ0FBTyxNQUFNLEdBQUcsMkNBQU8sUUFBUTtBQUN6RCwyQkFBMkIsUUFBUSxVQUFVLFVBQVU7QUFDdkQsc0JBQXNCLHFCQUFxQjtBQUMzQyxxQkFBcUIsMkNBQU8sTUFBTSxHQUFHLDJDQUFPLFlBQVk7QUFDeEQsd0JBQXdCLFFBQVEsVUFBVSxHQUFHO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLHNDQUFzQyxNQUFNLElBQUksYUFBYSxtQkFBbUIseUJBQXlCLFdBQVc7QUFDcEgsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsMkNBQU8sUUFBUSxHQUFHLDJDQUFPLE1BQU07QUFDekQsMkJBQTJCLFFBQVEsVUFBVSxVQUFVO0FBQ3ZELHNCQUFzQixxQkFBcUI7QUFDM0MscUJBQXFCLDJDQUFPLFlBQVksR0FBRywyQ0FBTyxNQUFNO0FBQ3hELHdCQUF3QixRQUFRLFVBQVUsR0FBRztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQSx1Q0FBdUMsT0FBTyxJQUFJLFdBQVcsb0JBQW9CLHlCQUF5QixXQUFXO0FBQ3JIO0FBQ0EsR0FBRztBQUNIOztBQUV1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ3JpZC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ3JpZC5jc3M/OWYxYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hYm92ZS10by1vbi1ncmlkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGF0YS1kb20taW50ZXJhY3Rpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZHJpdmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wYXNzLWRldmljZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3JhbmRvbS1udW1iZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW1vdmUtYWxsLWlubGluZS1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9yZW1vdmUtZXZlbnQtbGlzdGVuZXJzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcmVuZGVyLWhpdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3JlbmRlci1tb2RlLWNoYW5nZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3JlbmRlci1wbGF5ZXItc3dpdGNoLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2V0LWV2ZW50LWxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NldHVwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VwZGF0ZUJvYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAueW91ci1ncmlkLC5vcHBvbmVudC1ncmlkIHtcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxudHIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxudGQge1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdpZHRoOiAyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbi5zaGlwLW5vZGVbZGF0YS1wcmVzZW50XSB7XG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gICAgdG9wOiAwcHg7XG59XG5cbi5zaGlwLW5vZGUge1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdpZHRoOiAyZW07XG4gICAgei1pbmRleDogMTA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZ3JpZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi55b3VyLWdyaWQsLm9wcG9uZW50LWdyaWQge1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxudHIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbnRkIHtcXG4gICAgaGVpZ2h0OiAyZW07XFxuICAgIHdpZHRoOiAyZW07XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5cXG4uc2hpcC1ub2RlW2RhdGEtcHJlc2VudF0ge1xcbiAgICB1c2VyLXNlbGVjdDogdGV4dDtcXG4gICAgdG9wOiAwcHg7XFxufVxcblxcbi5zaGlwLW5vZGUge1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgei1pbmRleDogMTA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgYXV0bztcbiAgICBtYXJnaW46IDVweCAwcHggMHB4IDBweDtcbn1cblxuLm1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyNXB4O1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnN0cnVjdGlvbi1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgd2lkdGg6IDI1ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuYnV0dG9uIHtcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmZ1bmN0aW9uLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDhweDtcbn1cblxuLnBhc3MtZGV2aWNlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uYXJvdW5kLWdyaWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDI1cHg7XG59XG5cbi5yYW5kb21pemUge1xuICAgIGNvbG9yOiBibHVlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vZGUtc2VsZWN0IHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XG59XG5cbi5tb2RlLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NvbXB1dGVyLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBhdXRvO1xcbiAgICBtYXJnaW46IDVweCAwcHggMHB4IDBweDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDIuNWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmluc3RydWN0aW9uLWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgd2lkdGg6IDI1ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmZ1bmN0aW9uLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnBhc3MtZGV2aWNlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFyb3VuZC1ncmlkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG5cXG4ucmFuZG9taXplIHtcXG4gICAgY29sb3I6IGJsdWU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RlLXNlbGVjdCB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbn1cXG5cXG4ubW9kZS1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb21wdXRlci1idXR0b24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dyaWQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ3JpZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0b1dvcmRzIH0gZnJvbSBcIi4vc2V0dXBcIjtcbmZ1bmN0aW9uIGFib3ZlVG9PbkdyaWQoZ2FtZWJvYXJkLCBwbGF5ZXIpIHtcbiAgZ2FtZWJvYXJkLmFsbFNoaXBzLmZvckVhY2goKHZhbHVlLCBrZXksIG1hcCkgPT4ge1xuICAgIGlmIChrZXkuZ2V0T3JpZW50YXRpb24oKSA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgY29uc3Qgc3RhcnQgPSB2YWx1ZVsxXTtcbiAgICAgIGNvbnN0IGVuZCA9IHZhbHVlWzNdO1xuICAgICAgY29uc3Qgcm93ID0gdmFsdWVbMF07XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBgJHt0b1dvcmRzW3Jvd119LSR7dG9Xb3Jkc1tpXX1gO1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IGAuJHtwbGF5ZXJ9ID4gdHIgPiAuJHtwb3NpdGlvbn1gO1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgIGNlbGwuc3R5bGUuY3NzVGV4dCArPVxuICAgICAgICAgIFwiYm9yZGVyLXRvcDogc29saWQgMnB4IGJsdWU7IGJvcmRlci1ib3R0b206IHNvbGlkIDJweCBibHVlO1wiO1xuICAgICAgICBpZiAoaSA9PSBzdGFydCkge1xuICAgICAgICAgIGNlbGwuc3R5bGUuY3NzVGV4dCArPSBcImJvcmRlci1sZWZ0OiBzb2xpZCAycHggYmx1ZTtcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PSBlbmQpIHtcbiAgICAgICAgICBjZWxsLnN0eWxlLmNzc1RleHQgKz0gXCJib3JkZXItcmlnaHQ6IHNvbGlkIDJweCBibHVlO1wiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gdmFsdWVbMF07XG4gICAgICBjb25zdCBlbmQgPSB2YWx1ZVsyXTtcbiAgICAgIGNvbnN0IGNvbCA9IHZhbHVlWzFdO1xuXG4gICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBgJHt0b1dvcmRzW2ldfS0ke3RvV29yZHNbY29sXX1gO1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IGAuJHtwbGF5ZXJ9ID4gdHIgPiAuJHtwb3NpdGlvbn1gO1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgIGNlbGwuc3R5bGUuY3NzVGV4dCArPVxuICAgICAgICAgIFwiYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCBibHVlOyBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCBibHVlXCI7XG4gICAgICAgIGlmIChpID09IHN0YXJ0KSB7XG4gICAgICAgICAgY2VsbC5zdHlsZS5jc3NUZXh0ICs9IFwiYm9yZGVyLXRvcDogc29saWQgMnB4IGJsdWU7XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT0gZW5kKSB7XG4gICAgICAgICAgY2VsbC5zdHlsZS5jc3NUZXh0ICs9IFwiYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IGJsdWU7XCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyBhYm92ZVRvT25HcmlkIH07XG4iLCJpbXBvcnQgeyByZW5kZXJTaGlwSGl0LCByZW5kZXJNaXNIaXQgfSBmcm9tIFwiLi9yZW5kZXItaGl0XCI7XG5pbXBvcnQgeyB0b1dvcmRzIH0gZnJvbSBcIi4vc2V0dXBcIjtcbi8vIGV4ZWN1dGVzIHNoaXAgYXR0YWNrIG9uIHRoZSBnYW1lYm9hcmQgYW5kIHJlLXJlbmRlcnMgdGhlIGdyaWQgYWNjb3JkaW5nbHlcbmZ1bmN0aW9uIGV4ZWN1dGVBdHRhY2soZ2FtZWJvYXJkLCBET01DZWxsLCB4LCB5KSB7XG4gIGxldCBzdGF0dXM7XG4gIGxldCBtaXNzO1xuICBsZXQgc2hpcEhpdCA9IGZhbHNlO1xuICBpZiAoRE9NQ2VsbC5kYXRhc2V0LmlzSGl0ID09IDEpIHtcbiAgICBzdGF0dXMgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSkpIHtcbiAgICAgIHJlbmRlclNoaXBIaXQoRE9NQ2VsbCk7XG4gICAgICBzaGlwSGl0ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVuZGVyTWlzSGl0KERPTUNlbGwpO1xuICAgICAgbWlzcyA9IHRydWU7XG4gICAgfVxuICAgIHN0YXR1cyA9IHRydWU7XG4gICAgRE9NQ2VsbC5kYXRhc2V0LmlzSGl0ID0gMTtcbiAgfVxuICByZXR1cm4geyBzdGF0dXMsIG1pc3MsIHNoaXBIaXQsIHgsIHkgfTtcbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0KHNoaXAsIHN0YXJ0Q2VsbCkge1xuICBjb25zdCB4ID0gTnVtYmVyKHN0YXJ0Q2VsbC5kYXRhc2V0LngpO1xuICBjb25zdCB5ID0gTnVtYmVyKHN0YXJ0Q2VsbC5kYXRhc2V0LnkpO1xuXG4gIGNvbnN0IG1vdXNlRXZlbnQgPSBuZXcgRXZlbnQoXCJtb3VzZXVwXCIpO1xuXG4gIGlmIChzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICBsZXQgc3BhY2VBdmFpbGFibGUgPSB0cnVlO1xuICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmRhdGFzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLiR7dG9Xb3Jkc1t4XX0tJHt0b1dvcmRzW3kgKyBpXX0+LnNoaXAtbm9kZWBcbiAgICAgICk7XG4gICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgaWYgKCFub2RlIHx8IG5vZGUuaGFzQXR0cmlidXRlKFwiZGF0YS1zaGlwLWV4aXN0c1wiKSkge1xuICAgICAgICBzcGFjZUF2YWlsYWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3BhY2VBdmFpbGFibGUpIHtcbiAgICAgIG5vZGVzWzBdLmRhdGFzZXQueCA9IHNoaXAuZGF0YXNldC5zaGlwWDtcbiAgICAgIG5vZGVzWzBdLmRhdGFzZXQueSA9IHNoaXAuZGF0YXNldC5zaGlwWDtcbiAgICAgIHNoaXAuZGF0YXNldC5zaGlwWCA9IHN0YXJ0Q2VsbC5kYXRhc2V0Lng7XG4gICAgICBzaGlwLmRhdGFzZXQuc2hpcFkgPSBzdGFydENlbGwuZGF0YXNldC55O1xuICAgICAgY29uc3Qgc2hpcFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuJHt0b1dvcmRzW3NoaXAuZGF0YXNldC5zaGlwWF19LSR7dG9Xb3Jkc1tzaGlwLmRhdGFzZXQuc2hpcFldfWBcbiAgICAgICk7XG4gICAgICBzaGlwUGFyZW50LmFwcGVuZENoaWxkKG5vZGVzWzBdKTtcbiAgICAgIHN0YXJ0Q2VsbC5hcHBlbmRDaGlsZChzaGlwKTtcbiAgICAgIHNoaXAuZGlzcGF0Y2hFdmVudChtb3VzZUV2ZW50KTtcbiAgICAgIHNoaXAuc3R5bGUuY3NzVGV4dCArPSBcImxlZnQ6IDBweDsgdG9wOiAwcHg7XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgaWYgKHNoaXAuZGF0YXNldC5vcmllbnRhdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICBsZXQgc3BhY2VBdmFpbGFibGUgPSB0cnVlO1xuICAgIGNvbnN0IG5vZGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmRhdGFzZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLiR7dG9Xb3Jkc1t4ICsgaV19LSR7dG9Xb3Jkc1t5XX0+LnNoaXAtbm9kZWBcbiAgICAgICk7XG4gICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgaWYgKCFub2RlIHx8IG5vZGUuaGFzQXR0cmlidXRlKFwiZGF0YS1zaGlwLWV4aXN0c1wiKSkge1xuICAgICAgICBzcGFjZUF2YWlsYWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3BhY2VBdmFpbGFibGUpIHtcbiAgICAgIG5vZGVzWzBdLmRhdGFzZXQuc2hpcFggPSBzaGlwLmRhdGFzZXQuc2hpcFg7XG4gICAgICBub2Rlc1swXS5kYXRhc2V0LnNoaXBZID0gc2hpcC5kYXRhc2V0LnNoaXBZO1xuICAgICAgc2hpcC5kYXRhc2V0LnNoaXBYID0gc3RhcnRDZWxsLmRhdGFzZXQueDtcbiAgICAgIHNoaXAuZGF0YXNldC5zaGlwWSA9IHN0YXJ0Q2VsbC5kYXRhc2V0Lnk7XG4gICAgICBjb25zdCBzaGlwUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC4ke3RvV29yZHNbc2hpcC5kYXRhc2V0LnNoaXBYXX0tJHt0b1dvcmRzW3NoaXAuZGF0YXNldC5zaGlwWV19YFxuICAgICAgKTtcbiAgICAgIHNoaXBQYXJlbnQuYXBwZW5kQ2hpbGQobm9kZXNbMF0pO1xuICAgICAgc3RhcnRDZWxsLmFwcGVuZENoaWxkKHNoaXApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNoaXAuZGlzcGF0Y2hFdmVudChtb3VzZUV2ZW50KTtcbiAgICAgIH0sIDUwMCk7XG5cbiAgICAgIHNoaXAuc3R5bGUuY3NzVGV4dCArPSBcImxlZnQ6IDBweDsgdG9wOiAwcHg7XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cbi8qXG5mdW5jdGlvbiBkcmFnZ2FibGVFdmVudCgpIHtcbiAgY29uc3Qgc2hpcE5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLXByZXNlbnRdXCIpO1xuICBzaGlwTm9kZXMuZm9yRWFjaCgoc2hpcE5vZGUpID0+IHtcbiAgICBzaGlwTm9kZS5vbm1vdXNlZG93biA9IChldmVudCkgPT4ge1xuICAgICAgbGV0IHNoaWZ0WCA9IGV2ZW50LmNsaWVudFggLSBzaGlwTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgbGV0IHNoaWZ0WSA9IGV2ZW50LmNsaWVudFkgLSBzaGlwTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgICAgIHNoaXBOb2RlLnN0eWxlLnpJbmRleCA9IDEwMDA7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChzaGlwTm9kZSk7XG5cbiAgICAgIG1vdmVBdChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXG4gICAgICBmdW5jdGlvbiBtb3ZlQXQocGFnZVgsIHBhZ2VZKSB7XG4gICAgICAgIHNoaXBOb2RlLnN0eWxlLmxlZnQgPSBwYWdlWCAtIHNoaWZ0WCArIFwicHhcIjtcbiAgICAgICAgc2hpcE5vZGUuc3R5bGUudG9wID0gcGFnZVkgLSBzaGlmdFkgKyBcInB4XCI7XG4gICAgICB9XG5cbiAgICAgIGxldCBjdXJyZW50RHJvcHBhYmxlID0gbnVsbDtcbiAgICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICAgIG1vdmVBdChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpO1xuXG4gICAgICAgIHNoaXBOb2RlLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIGxldCBlbGVtQmVsb3cgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuICAgICAgICBzaGlwTm9kZS5oaWRkZW4gPSBmYWxzZTtcblxuICAgICAgICBpZiAoIWVsZW1CZWxvdykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkcm9wcGFibGVCZWxvdyA9IGVsZW1CZWxvdy5jbG9zZXN0KFwiLmNlbGxcIik7XG4gICAgICAgIGxldCBzcGFjZUF2YWlsYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChjdXJyZW50RHJvcHBhYmxlICE9IGRyb3BwYWJsZUJlbG93KSB7XG4gICAgICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUpIHtcbiAgICAgICAgICAgIC8vbGVhdmUgYXJlYVxuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJyZW50RHJvcHBhYmxlID0gZHJvcHBhYmxlQmVsb3c7XG4gICAgICAgICAgaWYgKGN1cnJlbnREcm9wcGFibGUpIHtcbiAgICAgICAgICAgIGhpZ2hsaWdodChzaGlwTm9kZSwgZHJvcHBhYmxlQmVsb3cpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcblxuICAgICAgc2hpcE5vZGUub25tb3VzZXVwID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZpcmVkIG1vdXNldXBcIik7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICAgICAgICBzaGlwTm9kZS5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgfTtcbiAgICB9O1xuICAgIHNoaXBOb2RlLm9uZHJhZ3N0YXJ0ID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gIH0pO1xufVxuICAqL1xuXG5leHBvcnQgeyBleGVjdXRlQXR0YWNrIH07XG4iLCJpbXBvcnQgeyB0b1dvcmRzIH0gZnJvbSBcIi4vc2V0dXBcIjtcbmltcG9ydCB7IHVwZGF0ZUJvYXJkIH0gZnJvbSBcIi4vdXBkYXRlQm9hcmRcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHtcbiAgc2V0dXBFdmVudExpc3RlbmVycyxcbiAgc2V0TW9kZUNoYW5nZUJ1dHRvbkV2ZW50cyxcbn0gZnJvbSBcIi4vc2V0LWV2ZW50LWxpc3RlbmVyc1wiO1xuaW1wb3J0IHsgZXhlY3V0ZUF0dGFjayB9IGZyb20gXCIuL2RhdGEtZG9tLWludGVyYWN0aW9uc1wiO1xuaW1wb3J0IHsgcmVuZGVyUGxheWVyU3dpdGNoIH0gZnJvbSBcIi4vcmVuZGVyLXBsYXllci1zd2l0Y2hcIjtcbmltcG9ydCB7IHJlbmRlclBhc3NEZXZpY2UgfSBmcm9tIFwiLi9wYXNzLWRldmljZVwiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tTnVtYmVyIH0gZnJvbSBcIi4vcmFuZG9tLW51bWJlclwiO1xuaW1wb3J0IHsgcmVtb3ZlQWxsSW5saW5lU3R5bGVzIH0gZnJvbSBcIi4vcmVtb3ZlLWFsbC1pbmxpbmUtc3R5bGVzXCI7XG5pbXBvcnQgeyBhYm92ZVRvT25HcmlkIH0gZnJvbSBcIi4vYWJvdmUtdG8tb24tZ3JpZFwiO1xuaW1wb3J0IHsgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9yZW1vdmUtZXZlbnQtbGlzdGVuZXJzXCI7XG5pbXBvcnQgeyBzZXR1cENlbGxIVE1MIH0gZnJvbSBcIi4vc2V0dXBcIjtcbmltcG9ydCB7IGFkZFBhc3NEZXZpY2VFdmVudCB9IGZyb20gXCIuL3NldC1ldmVudC1saXN0ZW5lcnNcIjtcblxuLy8gR2xvYmFsc1xubGV0IG1vZGUgPSBcIkNvbXB1dGVyXCI7XG5jb25zdCBpbnN0cnVjdGlvbkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5zdHJ1Y3Rpb24tYmFyXCIpO1xuXG5jb25zdCBzd2l0Y2hNb2RlID0gKCkgPT4ge1xuICBtb2RlID0gbW9kZSA9PSBcIkNvbXB1dGVyXCIgPyBcIkh1bWFuXCIgOiBcIkNvbXB1dGVyXCI7XG59O1xuXG5jb25zdCBzaGlwc0NvdW50cyA9IG5ldyBNYXAoKTtcbnNoaXBzQ291bnRzLnNldCg0LCAxKTtcbnNoaXBzQ291bnRzLnNldCgzLCAyKTtcbnNoaXBzQ291bnRzLnNldCgyLCAzKTtcbnNoaXBzQ291bnRzLnNldCgxLCA0KTtcblxubGV0IHBsYXllcnMgPSB7XG4gIHBsYXllcjE6IFwieW91clwiLFxuICBwbGF5ZXIyOiBcIm9wcG9uZW50XCIsXG59O1xuXG5sZXQgY3VycmVudFBsYXllciA9IHBsYXllcnMucGxheWVyMjtcblxuY29uc3Qgc3dpdGNoUGxheWVyID0gKCkgPT4ge1xuICBpZiAoY3VycmVudFBsYXllciA9PSBcIm9wcG9uZW50XCIpIHtcbiAgICBjdXJyZW50UGxheWVyID0gXCJ5b3VyXCI7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFBsYXllciA9IFwib3Bwb25lbnRcIjtcbiAgfVxuICBpZiAobGF5b3V0RmluYWxpemVkKSB7XG4gICAgaW5zdHJ1Y3Rpb25CYXIudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50UGxheWVyfSdzIHR1cm5gO1xuICB9XG59O1xuXG5sZXQgbGF5b3V0RmluYWxpemVkID0gZmFsc2U7XG5jb25zdCBmaW5hbGl6ZUxheW91dCA9ICgpID0+IHtcbiAgbGF5b3V0RmluYWxpemVkID0gdHJ1ZTtcbiAgaW5zdHJ1Y3Rpb25CYXIudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50UGxheWVyfSdzIHR1cm5gO1xufTtcblxubGV0IHBsYXllck9iamVjdHMgPSB7XG4gIHBsYXllcjE6IG5ldyBQbGF5ZXIocGxheWVycy5wbGF5ZXIxKSxcbiAgcGxheWVyMjogbmV3IFBsYXllcihwbGF5ZXJzLnBsYXllcjIpLFxufTtcblxuLy8gaW5pdGlhbGl6ZXMgdGhlIHBsYXllciBncmlkcyBhbmQgZXZlbnQgbGlzdGVuZXJzXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICBzZXRNb2RlQ2hhbmdlQnV0dG9uRXZlbnRzKCk7XG4gIGFkZFBhc3NEZXZpY2VFdmVudCgpO1xuICByYW5kb21pemUocGxheWVyT2JqZWN0cy5wbGF5ZXIxLmdhbWVib2FyZCwgcGxheWVycy5wbGF5ZXIxKTtcbiAgcmFuZG9taXplKHBsYXllck9iamVjdHMucGxheWVyMi5nYW1lYm9hcmQsIHBsYXllcnMucGxheWVyMik7XG4gIHBsYXllck9iamVjdHMucGxheWVyMS5nYW1lYm9hcmQuaW5pdGlhbGl6ZUJvYXJkV2l0aFNoaXBzKCk7XG4gIHBsYXllck9iamVjdHMucGxheWVyMi5nYW1lYm9hcmQuaW5pdGlhbGl6ZUJvYXJkV2l0aFNoaXBzKCk7XG4gIHNldHVwR2FtZVBsYXkocGxheWVyT2JqZWN0cy5wbGF5ZXIxLmdhbWVib2FyZCwgcGxheWVycy5wbGF5ZXIxKTtcbn1cbi8vIHNldHMgdXAgdGhlIGdhbWUgZm9yIHRoZSBjb21wdXRlciBtb2RlXG5mdW5jdGlvbiBzZXR1cENvbXB1dGVyR2FtZSgpIHtcbiAgY29uc3QgcGFzc0RldmljZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFzcy1kZXZpY2VcIik7XG4gIGNvbnN0IHJhbmRvbWl6ZU9wcG9uZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYW5kb21pemUtb3Bwb25lbnRcIik7XG4gIHJhbmRvbWl6ZU9wcG9uZW50LmNsaWNrKCk7XG4gIHJhbmRvbWl6ZU9wcG9uZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgcmVtb3ZlQWxsSW5saW5lU3R5bGVzKHBsYXllcnMucGxheWVyMik7XG4gIHVwZGF0ZUJvYXJkKHBsYXllck9iamVjdHMucGxheWVyMS5nYW1lYm9hcmQsIHBsYXllcnMucGxheWVyMSk7XG4gIHBhc3NEZXZpY2VCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG4vLyBzZXRzIHVwIHRoZSBnYW1lIGZvciB0aGUgaHVtYW4gbW9kZVxuZnVuY3Rpb24gc2V0dXBIdW1hbkdhbWUoKSB7XG4gIGNvbnN0IHBhc3NEZXZpY2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3MtZGV2aWNlXCIpO1xuICBjb25zdCByYW5kb21pemVPcHBvbmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFuZG9taXplLW9wcG9uZW50XCIpO1xuICByYW5kb21pemVPcHBvbmVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gIHBhc3NEZXZpY2VCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgdXBkYXRlQm9hcmQocGxheWVyT2JqZWN0cy5wbGF5ZXIxLmdhbWVib2FyZCwgcGxheWVycy5wbGF5ZXIxKTtcbiAgdXBkYXRlQm9hcmQocGxheWVyT2JqZWN0cy5wbGF5ZXIyLmdhbWVib2FyZCwgcGxheWVycy5wbGF5ZXIyKTtcbiAgcmVuZGVyUGFzc0RldmljZSgpO1xufVxuXG4vLyBkcml2ZXMgdGhlIGdhbWUgd2hlbiBpdCBpcyBsb2FkZWQgZm9yIHRoZSBmaXJzdCB0aW1lXG5mdW5jdGlvbiBkcml2ZXIoKSB7XG4gIGluaXRpYWxpemUoKTtcbiAgc2V0dXBDb21wdXRlckdhbWUoKTtcbn1cblxuLy8gZHJpdmVzIHRoZSBnYW1lIGZvciB0aGUgY29tcHV0ZXIgbW9kZVxuZnVuY3Rpb24gcGxheUdhbWUoY2VsbCwgeCwgeSwgYWxyZWFkeUhpdCkge1xuICBpZiAoY3VycmVudFBsYXllciA9PSBwbGF5ZXJzLnBsYXllcjIpIHtcbiAgICBpZiAoYWxyZWFkeUhpdCkge1xuICAgICAgY29uc3QgYWRqYWNlbnRDZWxsID0gZ2V0UmFuZG9tQWRqYWNlbnRDZWxsKHgsIHkpO1xuICAgICAgZXhlY3V0ZUF0dGFjayhcbiAgICAgICAgcGxheWVyT2JqZWN0cy5wbGF5ZXIxLFxuICAgICAgICBhZGphY2VudENlbGwuY2VsbCxcbiAgICAgICAgYWRqYWNlbnRDZWxsLnhDb29yZGluYXRlLFxuICAgICAgICBhZGphY2VudENlbGwueUNvb3JkaW5hdGVcbiAgICAgICk7XG4gICAgICBwbGF5R2FtZShcbiAgICAgICAgYWRqYWNlbnRDZWxsLmNlbGwsXG4gICAgICAgIGFkamFjZW50Q2VsbC54Q29vcmRpbmF0ZSxcbiAgICAgICAgYWRqYWNlbnRDZWxsLnlDb29yZGluYXRlLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGF0dGFja09iaiA9IGNvbXB1dGVySGl0KCk7XG4gICAgICBpZiAocGxheWVyT2JqZWN0cy5wbGF5ZXIxLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICBhbGVydChcIlRoZSBjb21wdXRlciBXb25cIik7XG4gICAgICAgIHJlc3RhcnRHYW1lKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChhdHRhY2tPYmouc3RhdHVzICYmIGF0dGFja09iai5zaGlwSGl0KSB7XG4gICAgICAgIHBsYXlHYW1lKGNlbGwsIGF0dGFja09iai54LCBhdHRhY2tPYmoueSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoYXR0YWNrT2JqLnN0YXR1cyAmJiBhdHRhY2tPYmoubWlzcykge1xuICAgICAgICBzd2l0Y2hQbGF5ZXIoKTtcbiAgICAgICAgcmVuZGVyUGxheWVyU3dpdGNoKCk7XG4gICAgICB9XG4gICAgfSwgMjAwMCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYXR0YWNrT2JqID0gZXhlY3V0ZUF0dGFjayhcbiAgICAgIHBsYXllck9iamVjdHMucGxheWVyMi5nYW1lYm9hcmQsXG4gICAgICBjZWxsLFxuICAgICAgeCxcbiAgICAgIHlcbiAgICApO1xuICAgIGlmIChwbGF5ZXJPYmplY3RzLnBsYXllcjIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICBhbGVydChcIllvdSB3b25cIik7XG4gICAgICByZXN0YXJ0R2FtZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYXR0YWNrT2JqLnN0YXR1cyAmJiBhdHRhY2tPYmouc2hpcEhpdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYXR0YWNrT2JqLnN0YXR1cyAmJiBhdHRhY2tPYmoubWlzcykge1xuICAgICAgc3dpdGNoUGxheWVyKCk7XG4gICAgICByZW5kZXJQbGF5ZXJTd2l0Y2goKTtcblxuICAgICAgZGVsYXllZENvbXB1dGVySGl0KDIwMDAsIGF0dGFja09iai54LCBhdHRhY2tPYmoueSwgZmFsc2UpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBkcml2ZXMgdGhlIGdhbWUgZm9yIHRoZSBodW1hbiBtb2RlXG5mdW5jdGlvbiBwbGF5R2FtZVZzSHVtYW4oY2VsbCwgeCwgeSkge1xuICBpZiAoY3VycmVudFBsYXllciA9PSBwbGF5ZXJzLnBsYXllcjEpIHtcbiAgICBjb25zdCBhdHRhY2tPYmogPSBleGVjdXRlQXR0YWNrKFxuICAgICAgcGxheWVyT2JqZWN0cy5wbGF5ZXIyLmdhbWVib2FyZCxcbiAgICAgIGNlbGwsXG4gICAgICB4LFxuICAgICAgeVxuICAgICk7XG4gICAgaWYgKHBsYXllck9iamVjdHMucGxheWVyMi5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgIGFsZXJ0KGAke3BsYXllcnMucGxheWVyMX0gV29uYCk7XG4gICAgICByZXN0YXJ0R2FtZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYXR0YWNrT2JqLnN0YXR1cyAmJiBhdHRhY2tPYmouc2hpcEhpdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYXR0YWNrT2JqLnN0YXR1cyAmJiBhdHRhY2tPYmoubWlzcykge1xuICAgICAgc3dpdGNoUGxheWVyKCk7XG4gICAgICByZW5kZXJQbGF5ZXJTd2l0Y2goKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYXR0YWNrT2JqID0gZXhlY3V0ZUF0dGFjayhcbiAgICAgIHBsYXllck9iamVjdHMucGxheWVyMS5nYW1lYm9hcmQsXG4gICAgICBjZWxsLFxuICAgICAgeCxcbiAgICAgIHlcbiAgICApO1xuICAgIGlmIChwbGF5ZXJPYmplY3RzLnBsYXllcjEuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICBhbGVydChgJHtwbGF5ZXJzLnBsYXllcjJ9IFdvbmApO1xuICAgICAgcmVzdGFydEdhbWUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGF0dGFja09iai5zdGF0dXMgJiYgYXR0YWNrT2JqLnNoaXBIaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGF0dGFja09iai5zdGF0dXMgJiYgYXR0YWNrT2JqLm1pc3MpIHtcbiAgICAgIHN3aXRjaFBsYXllcigpO1xuICAgICAgcmVuZGVyUGxheWVyU3dpdGNoKCk7XG4gICAgfVxuICB9XG59XG5cbi8vIHJ1bnMgdGhlIGNvbXB1dGVySGl0KCkgZnVuY3Rpb25zIGFmdGVyIGEgc3BlY2lmaWVkIGRlbGF5XG5mdW5jdGlvbiBkZWxheWVkQ29tcHV0ZXJIaXQoZGVsYXksIHgsIHksIGFscmVhZHlIaXQpIHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKGFscmVhZHlIaXQpIHtcbiAgICAgIGNvbnN0IGFkamFjZW50Q2VsbCA9IGdldFJhbmRvbUFkamFjZW50Q2VsbCh4LCB5KTtcbiAgICAgIGNvbnN0IGF0dGFja09iaiA9IGV4ZWN1dGVBdHRhY2soXG4gICAgICAgIHBsYXllck9iamVjdHMucGxheWVyMS5nYW1lYm9hcmQsXG4gICAgICAgIGFkamFjZW50Q2VsbC5jZWxsLFxuICAgICAgICBhZGphY2VudENlbGwueENvb3JkaW5hdGUsXG4gICAgICAgIGFkamFjZW50Q2VsbC55Q29vcmRpbmF0ZVxuICAgICAgKTtcbiAgICAgIGlmIChhdHRhY2tPYmouc3RhdHVzICYmIGF0dGFja09iai5zaGlwSGl0KSB7XG4gICAgICAgIGRlbGF5ZWRDb21wdXRlckhpdChcbiAgICAgICAgICAyMDAwLFxuICAgICAgICAgIGFkamFjZW50Q2VsbC54Q29vcmRpbmF0ZSxcbiAgICAgICAgICBhZGphY2VudENlbGwueUNvb3JkaW5hdGUsXG4gICAgICAgICAgYXR0YWNrT2JqLnNoaXBIaXRcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoYXR0YWNrT2JqLnN0YXR1cyAmJiBhdHRhY2tPYmoubWlzcykge1xuICAgICAgICBzd2l0Y2hQbGF5ZXIoKTtcbiAgICAgICAgcmVuZGVyUGxheWVyU3dpdGNoKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGF0dGFja09iaiA9IGNvbXB1dGVySGl0KCk7XG4gICAgaWYgKGF0dGFja09iai5zdGF0dXMgJiYgYXR0YWNrT2JqLnNoaXBIaXQpIHtcbiAgICAgIGRlbGF5ZWRDb21wdXRlckhpdCgyMDAwLCBhdHRhY2tPYmoueCwgYXR0YWNrT2JqLnksIGF0dGFja09iai5zaGlwSGl0KTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGF0dGFja09iai5zdGF0dXMgJiYgYXR0YWNrT2JqLm1pc3MpIHtcbiAgICAgIHN3aXRjaFBsYXllcigpO1xuICAgICAgcmVuZGVyUGxheWVyU3dpdGNoKCk7XG4gICAgfVxuICB9LCBkZWxheSk7XG59XG4vLyBiYXNlIGZ1bmN0aW9uIHRoYXQgaGl0cyBhcyB0aGUgb3Bwb25lbnRzIGdyaWQgYXMgdGhlIGNvbXB1dGVyXG5mdW5jdGlvbiBjb21wdXRlckhpdCgpIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCB4ID0gZ2V0UmFuZG9tTnVtYmVyKCk7XG4gICAgY29uc3QgeSA9IGdldFJhbmRvbU51bWJlcigpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gYCR7dG9Xb3Jkc1t4XX0tJHt0b1dvcmRzW3ldfWA7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBgLnlvdXIgPiB0ciA+IC4ke3Bvc2l0aW9ufWA7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmIChjZWxsLmRhdGFzZXQuaXNIaXQgPT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBleGVjdXRlQXR0YWNrKHBsYXllck9iamVjdHMucGxheWVyMS5nYW1lYm9hcmQsIGNlbGwsIHgsIHkpO1xuICAgIH1cbiAgfVxufVxuXG4vLyByZXR1cm5zIGEgY2VsbCBhZGphY2VudCB0byB0aGUgZ2l2ZW4gY2VsbCB0aGF0IGhhcyBub3QgYmVlbiBoaXRcbmZ1bmN0aW9uIGdldFJhbmRvbUFkamFjZW50Q2VsbCh4LCB5KSB7XG4gIGNvbnN0IGNob2ljZXMgPSBbXTtcbiAgaWYgKHggPiAwKSB7XG4gICAgY29uc3Qgb2JqID0geyB4Q29vcmRpbmF0ZTogeCAtIDEsIHlDb29yZGluYXRlOiB5IH07XG4gICAgY2hvaWNlcy5wdXNoKG9iaik7XG4gIH1cbiAgaWYgKHggPCA5KSB7XG4gICAgY29uc3Qgb2JqID0geyB4Q29vcmRpbmF0ZTogeCArIDEsIHlDb29yZGluYXRlOiB5IH07XG4gICAgY2hvaWNlcy5wdXNoKG9iaik7XG4gIH1cbiAgaWYgKHkgPiAwKSB7XG4gICAgY29uc3Qgb2JqID0geyB4Q29vcmRpbmF0ZTogeCwgeUNvb3JkaW5hdGU6IHkgLSAxIH07XG4gICAgY2hvaWNlcy5wdXNoKG9iaik7XG4gIH1cbiAgaWYgKHkgPCA5KSB7XG4gICAgY29uc3Qgb2JqID0geyB4Q29vcmRpbmF0ZTogeCwgeUNvb3JkaW5hdGU6IHkgKyAxIH07XG4gICAgY2hvaWNlcy5wdXNoKG9iaik7XG4gIH1cblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hvaWNlcy5sZW5ndGgpO1xuICAgIGNvbnN0IHggPSBjaG9pY2VzW2luZGV4XS54Q29vcmRpbmF0ZTtcbiAgICBjb25zdCB5ID0gY2hvaWNlc1tpbmRleF0ueUNvb3JkaW5hdGU7XG4gICAgY29uc3QgcG9zaXRpb24gPSBgJHt0b1dvcmRzW3hdfS0ke3RvV29yZHNbeV19YDtcbiAgICBjb25zdCBzZWxlY3RvciA9IGAueW91ciA+IHRyID4gLiR7cG9zaXRpb259YDtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgaWYgKGNlbGwuZGF0YXNldC5pc0hpdCA9PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNob2ljZXNbaW5kZXhdLCB7IGNlbGwgfSk7XG4gICAgfVxuICB9XG59XG5cbi8vIHNldHMgdXAgZ3JpZCBldmVudCBsaXN0ZW5lcnMgYW5kIGRvZXMgbmVjZXNzYXJ5IHRoaW5ncyB3aGVuIHRoZSBwb3dlciBidXR0b24gaXMgcHJlc3NlZFxuZnVuY3Rpb24gcGxheUJ1dHRvbkV2ZW50KCkge1xuICBzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gIHJlbW92ZUFsbElubGluZVN0eWxlcyhwbGF5ZXJzLnBsYXllcjEpO1xuICByZW1vdmVBbGxJbmxpbmVTdHlsZXMocGxheWVycy5wbGF5ZXIyKTtcbiAgaWYgKG1vZGUgPT0gXCJDb21wdXRlclwiKSB7XG4gICAgYWJvdmVUb09uR3JpZChwbGF5ZXJPYmplY3RzLnBsYXllcjEuZ2FtZWJvYXJkLCBwbGF5ZXJzLnBsYXllcjEpO1xuICB9XG4gIGZpbmFsaXplTGF5b3V0KCk7XG4gIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzLnBsYXllcjE7XG4gIGlmIChtb2RlID09IFwiSHVtYW5cIikge1xuICAgIGNvbnN0IHBhc3NEZXZpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3MtZGV2aWNlXCIpO1xuICAgIHBhc3NEZXZpY2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHJlbmRlclBsYXllclN3aXRjaCgpO1xuICB9IGVsc2Uge1xuICAgIHJlbmRlclBsYXllclN3aXRjaCgpO1xuICB9XG59XG4vLyBsaW5rcyBwbGF5QnV0dG9uRXZlbnQoKSB0byBwbGF5IGJ1dHRvbidzIGNsaWNrIGV2ZW50XG5mdW5jdGlvbiBzZXR1cEdhbWVQbGF5KCkge1xuICBjb25zdCBwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5XCIpO1xuICBwbGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5QnV0dG9uRXZlbnQpO1xufVxuXG4vLyByYW5kb21pemVzIHNoaXAgcG9zaXRpb25zIGluIHRoZSBzcGVjaWZpZWQgcGxheWVyIGdyaWRcbmZ1bmN0aW9uIHJhbmRvbWl6ZShnYW1lYm9hcmQsIHBsYXllcikge1xuICBjb25zdCByYW5kb21pemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucmFuZG9taXplLSR7cGxheWVyfWApO1xuICByYW5kb21pemUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAobGF5b3V0RmluYWxpemVkID09IHRydWUgfHwgY3VycmVudFBsYXllciA9PSBwbGF5ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2FtZWJvYXJkLmNsZWFyQm9hcmQoKTtcbiAgICBnYW1lYm9hcmQuaW5pdGlhbGl6ZUJvYXJkV2l0aFNoaXBzKCk7XG4gICAgcmVtb3ZlQWxsSW5saW5lU3R5bGVzKHBsYXllcik7XG4gICAgdXBkYXRlQm9hcmQoZ2FtZWJvYXJkLCBwbGF5ZXIpO1xuICB9KTtcbn1cblxuLy8gcGVyZm9ybXMgZnVuY3Rpb25zIHdoZW4gZ2FtZSBlbmRzXG5mdW5jdGlvbiBlbmRHYW1lKCkge1xuICBmb3IgKGNvbnN0IHBsYXllck9iamVjdCBpbiBwbGF5ZXJPYmplY3RzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHBsYXllck9iamVjdHNbcGxheWVyT2JqZWN0XTtcbiAgICBlbGVtZW50LmdhbWVib2FyZC5jbGVhckJvYXJkKCk7XG4gIH1cbiAgcmVtb3ZlQWxsSW5saW5lU3R5bGVzKHBsYXllcnMucGxheWVyMSk7XG4gIHJlbW92ZUFsbElubGluZVN0eWxlcyhwbGF5ZXJzLnBsYXllcjIpO1xuICBjb25zdCB5b3VyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIueW91ci1ncmlkXCIpO1xuICBjb25zdCBvcHBvbmVudEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wcG9uZW50LWdyaWRcIik7XG4gIHlvdXJHcmlkLnJlbW92ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICBvcHBvbmVudEdyaWQucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gIGN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXJzLnBsYXllcjE7XG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gIGNvbnN0IHBsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXlcIik7XG4gIHBsYXkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXlCdXR0b25FdmVudCk7XG59XG4vLyByZXN0YXJ0cyB0aGUgZ2FtZVxuZnVuY3Rpb24gcmVzdGFydEdhbWUoKSB7XG4gIGNvbnN0IGNvbXB1dGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wdXRlci1idXR0b25cIik7XG4gIGxheW91dEZpbmFsaXplZCA9IGZhbHNlO1xuICBjb21wdXRlckJ1dHRvbi5jbGljaygpO1xuICBlbmRHYW1lKCk7XG4gIHNldHVwQ2VsbEhUTUwoKTtcbiAgZHJpdmVyKCk7XG59XG5cbmV4cG9ydCB7XG4gIGRyaXZlcixcbiAgY3VycmVudFBsYXllcixcbiAgc3dpdGNoUGxheWVyLFxuICBjb21wdXRlckhpdCxcbiAgc2hpcHNDb3VudHMsXG4gIGZpbmFsaXplTGF5b3V0LFxuICBsYXlvdXRGaW5hbGl6ZWQsXG4gIHBsYXllcnMsXG4gIHBsYXllck9iamVjdHMsXG4gIHBsYXlHYW1lLFxuICBtb2RlLFxuICBzd2l0Y2hNb2RlLFxuICBwbGF5R2FtZVZzSHVtYW4sXG4gIHNldHVwQ29tcHV0ZXJHYW1lLFxuICBzZXR1cEh1bWFuR2FtZSxcbn07XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tTnVtYmVyIH0gZnJvbSBcIi4vcmFuZG9tLW51bWJlclwiO1xuaW1wb3J0IHsgc2hpcHNDb3VudHMgfSBmcm9tIFwiLi9kcml2ZXJcIjtcbmNsYXNzIEdhbWVib2FyZCB7XG4gIGdyaWQ7XG4gIGdyaWRTaXplO1xuICBtaXNzZWRBdHRhY2tzO1xuICBudW1iZXJPZlNoaXBzO1xuICBhbGxTaGlwcztcbiAgY29uc3RydWN0b3IoZ3JpZFNpemUpIHtcbiAgICB0aGlzLmdyaWQgPSBbXTtcbiAgICB0aGlzLmdyaWRTaXplID0gZ3JpZFNpemU7XG4gICAgdGhpcy5udW1iZXJPZlNoaXBzID0gMDtcbiAgICB0aGlzLm1pc3NlZEF0dGFja3MgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5hbGxTaGlwcyA9IG5ldyBNYXAoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWRTaXplOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkU2l6ZTsgaisrKSB7XG4gICAgICAgIHJvdy5wdXNoKDApO1xuICAgICAgfVxuICAgICAgdGhpcy5ncmlkLnB1c2gocm93KTtcbiAgICB9XG4gIH1cblxuICBjbGVhckJvYXJkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ncmlkU2l6ZTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ3JpZFNpemU7IGorKykge1xuICAgICAgICB0aGlzLmdyaWRbaV1bal0gPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm51bWJlck9mU2hpcHMgPSAwO1xuICAgIHRoaXMubWlzc2VkQXR0YWNrcy5jbGVhcigpO1xuICAgIHRoaXMuYWxsU2hpcHMuY2xlYXIoKTtcbiAgfVxuXG4gIHNldE9mZkxpbWl0QXJlYShjb29yZGluYXRlcykge1xuICAgIGlmIChjb29yZGluYXRlc1swXSA9PSBjb29yZGluYXRlc1syXSkge1xuICAgICAgZm9yIChsZXQgaSA9IGNvb3JkaW5hdGVzWzFdOyBpIDw9IGNvb3JkaW5hdGVzWzNdOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPT0gY29vcmRpbmF0ZXNbMV0gJiYgY29vcmRpbmF0ZXNbMV0gPiAwKSB7XG4gICAgICAgICAgdGhpcy5ncmlkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXSAtIDFdID0gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PSBjb29yZGluYXRlc1szXSAmJiBjb29yZGluYXRlc1szXSA8IDkpIHtcbiAgICAgICAgICB0aGlzLmdyaWRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzNdICsgMV0gPSAyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb29yZGluYXRlc1swXSA+IDApIHtcbiAgICAgICAgICB0aGlzLmdyaWRbY29vcmRpbmF0ZXNbMF0gLSAxXVtpXSA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvb3JkaW5hdGVzWzBdIDwgOSkge1xuICAgICAgICAgIHRoaXMuZ3JpZFtjb29yZGluYXRlc1swXSArIDFdW2ldID0gMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29vcmRpbmF0ZXNbMV0gPT0gY29vcmRpbmF0ZXNbM10pIHtcbiAgICAgIGZvciAobGV0IGkgPSBjb29yZGluYXRlc1swXTsgaSA8PSBjb29yZGluYXRlc1syXTsgaSsrKSB7XG4gICAgICAgIGlmIChpID09IGNvb3JkaW5hdGVzWzBdICYmIGNvb3JkaW5hdGVzWzBdID4gMCkge1xuICAgICAgICAgIHRoaXMuZ3JpZFtjb29yZGluYXRlc1swXSAtIDFdW2Nvb3JkaW5hdGVzWzFdXSA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT0gY29vcmRpbmF0ZXNbMl0gJiYgY29vcmRpbmF0ZXNbMl0gPCA5KSB7XG4gICAgICAgICAgdGhpcy5ncmlkW2Nvb3JkaW5hdGVzWzJdICsgMV1bY29vcmRpbmF0ZXNbM11dID0gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29vcmRpbmF0ZXNbMV0gPiAwKSB7XG4gICAgICAgICAgdGhpcy5ncmlkW2ldW2Nvb3JkaW5hdGVzWzFdIC0gMV0gPSAyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb29yZGluYXRlc1sxXSA8IDkpIHtcbiAgICAgICAgICB0aGlzLmdyaWRbaV1bY29vcmRpbmF0ZXNbMV0gKyAxXSA9IDI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRTaGlwKGNvb3JkaW5hdGVzKSB7XG4gICAgaWYgKFxuICAgICAgIShjb29yZGluYXRlc1swXSA9PSBjb29yZGluYXRlc1syXSB8fCBjb29yZGluYXRlc1sxXSA9PSBjb29yZGluYXRlc1szXSlcbiAgICApIHtcbiAgICAgIHJldHVybiBcIlNoaXBzIGNhbiBvbmx5IGJlIHZlcnRpY2FsIG9yIGhvcml6b250YWwgbm90IHNsYW50aW5nXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb29yZGluYXRlc1swXSA9PSBjb29yZGluYXRlc1syXSkge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBjb29yZGluYXRlc1szXSAtIGNvb3JkaW5hdGVzWzFdICsgMTtcbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHJvdyA9IGNvb3JkaW5hdGVzWzBdO1xuICAgICAgICBsZXQgdmFjYW50ID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaiA9IGNvb3JkaW5hdGVzWzFdOyBqIDwgY29vcmRpbmF0ZXNbM10gKyAxOyBqKyspIHtcbiAgICAgICAgICBpZiAodGhpcy5ncmlkW3Jvd11bal0gIT0gMCkge1xuICAgICAgICAgICAgdmFjYW50ID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh2YWNhbnQpIHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gY29vcmRpbmF0ZXNbMV07IGogPCBjb29yZGluYXRlc1szXSArIDE7IGorKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZFtyb3ddW2pdID09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5ncmlkW3Jvd11bal0gPSBuZXdTaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNldE9mZkxpbWl0QXJlYShjb29yZGluYXRlcyk7XG4gICAgICAgICAgdGhpcy5hbGxTaGlwcy5zZXQobmV3U2hpcCwgY29vcmRpbmF0ZXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNvb3JkaW5hdGVzWzFdID09IGNvb3JkaW5hdGVzWzNdKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGNvb3JkaW5hdGVzWzJdIC0gY29vcmRpbmF0ZXNbMF0gKyAxO1xuICAgICAgICBjb25zdCBuZXdTaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcbiAgICAgICAgY29uc3QgY29sID0gY29vcmRpbmF0ZXNbMV07XG4gICAgICAgIGxldCB2YWNhbnQgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpID0gY29vcmRpbmF0ZXNbMF07IGkgPCBjb29yZGluYXRlc1syXSArIDE7IGkrKykge1xuICAgICAgICAgIG5ld1NoaXAub3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCI7XG4gICAgICAgICAgaWYgKHRoaXMuZ3JpZFtpXVtjb2xdICE9IDApIHtcbiAgICAgICAgICAgIHZhY2FudCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodmFjYW50KSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IGNvb3JkaW5hdGVzWzBdOyBpIDwgY29vcmRpbmF0ZXNbMl0gKyAxOyBpKyspIHtcbiAgICAgICAgICAgIG5ld1NoaXAub3JpZW50YXRpb24gPSBcInZlcnRpY2FsXCI7XG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkW2ldW2NvbF0gPT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLmdyaWRbaV1bY29sXSA9IG5ld1NoaXA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2V0T2ZmTGltaXRBcmVhKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICB0aGlzLmFsbFNoaXBzLnNldChuZXdTaGlwLCBjb29yZGluYXRlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubnVtYmVyT2ZTaGlwcyArPSAxO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgaWYgKHRoaXMuZ3JpZFt4XVt5XSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XS5oaXQoKTtcbiAgICAgIGlmICh0aGlzLmdyaWRbeF1beV0uaXNTdW5rKCkpIHtcbiAgICAgICAgdGhpcy5udW1iZXJPZlNoaXBzIC09IDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ3JpZFt4XVt5XSA9PSAwKSB7XG4gICAgICB0aGlzLmdyaWRbeF1beV0gPSAxO1xuICAgICAgdGhpcy5taXNzZWRBdHRhY2tzLmFkZChbeCwgeV0udG9TdHJpbmcoKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgYWxsU2hpcHNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLm51bWJlck9mU2hpcHMgPT0gMDtcbiAgfVxuXG4gIGluaXRpYWxpemVCb2FyZFdpdGhTaGlwcygpIHtcbiAgICBmb3IgKGxldCBsZW5ndGggPSA0OyBsZW5ndGggPj0gMTsgbGVuZ3RoLS0pIHtcbiAgICAgIGxldCBjb3VudCA9IHNoaXBzQ291bnRzLmdldChsZW5ndGgpO1xuICAgICAgd2hpbGUgKGNvdW50ID4gMCkge1xuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgICBpZiAob3JpZW50YXRpb24gPT0gMCkge1xuICAgICAgICAgIGNvbnN0IHgxID0gZ2V0UmFuZG9tTnVtYmVyKCk7XG4gICAgICAgICAgY29uc3QgeTEgPSBnZXRSYW5kb21OdW1iZXIoKTtcbiAgICAgICAgICBjb25zdCB4MiA9IHgxO1xuICAgICAgICAgIGNvbnN0IHkyID0geTEgKyBsZW5ndGggLSAxO1xuICAgICAgICAgIGlmICh5MiA+IDkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IFt4MSwgeTEsIHgyLCB5Ml07XG4gICAgICAgICAgaWYgKHRoaXMuYWRkU2hpcChjb29yZGluYXRlcykpIHtcbiAgICAgICAgICAgIGNvdW50IC09IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChvcmllbnRhdGlvbiA9PSAxKSB7XG4gICAgICAgICAgY29uc3QgeDEgPSBnZXRSYW5kb21OdW1iZXIoKTtcbiAgICAgICAgICBjb25zdCB5MSA9IGdldFJhbmRvbU51bWJlcigpO1xuICAgICAgICAgIGNvbnN0IHgyID0geDEgKyBsZW5ndGggLSAxO1xuICAgICAgICAgIGlmICh4MiA+IDkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB5MiA9IHkxO1xuICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW3gxLCB5MSwgeDIsIHkyXTtcbiAgICAgICAgICBpZiAodGhpcy5hZGRTaGlwKGNvb3JkaW5hdGVzKSkge1xuICAgICAgICAgICAgY291bnQgLT0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9ncmlkLmNzc1wiO1xuaW1wb3J0IHsgc2V0dXBDZWxsSFRNTCB9IGZyb20gXCIuL3NldHVwXCI7XG5pbXBvcnQgeyBkcml2ZXIgfSBmcm9tIFwiLi9kcml2ZXJcIjtcbnNldHVwQ2VsbEhUTUwoKTtcbmRyaXZlcigpO1xuIiwiaW1wb3J0IHsgc3dpdGNoUGxheWVyLCBjdXJyZW50UGxheWVyLCBwbGF5ZXJzIH0gZnJvbSBcIi4vZHJpdmVyXCI7XG5mdW5jdGlvbiBwYXNzRGV2aWNlKCkge1xuICBzd2l0Y2hQbGF5ZXIoKTtcbiAgcmVuZGVyUGFzc0RldmljZSgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQYXNzRGV2aWNlKCkge1xuICBjb25zdCBwbGF5ZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi55b3VyLWdyaWRcIik7XG4gIGNvbnN0IHBsYXllcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wcG9uZW50LWdyaWRcIik7XG5cbiAgaWYgKGN1cnJlbnRQbGF5ZXIgPT0gcGxheWVycy5wbGF5ZXIyKSB7XG4gICAgcGxheWVyMi5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMzVweClcIjtcbiAgICBwbGF5ZXIyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICBwbGF5ZXIxLnN0eWxlLmZpbHRlciA9IFwiYmx1cigwcHgpXCI7XG4gICAgcGxheWVyMS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gIH0gZWxzZSB7XG4gICAgcGxheWVyMS5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMzVweClcIjtcbiAgICBwbGF5ZXIxLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICBwbGF5ZXIyLnN0eWxlLmZpbHRlciA9IFwiYmx1cigwcHgpXCI7XG4gICAgcGxheWVyMi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gIH1cbn1cblxuZXhwb3J0IHsgcGFzc0RldmljZSwgcmVuZGVyUGFzc0RldmljZSB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNsYXNzIFBsYXllciB7XG4gIGdhbWVib2FyZDtcbiAgdHlwZTtcblxuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKDEwKTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG59XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVyKCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xufVxuXG5leHBvcnQge2dldFJhbmRvbU51bWJlcn07IiwiZnVuY3Rpb24gcmVtb3ZlQWxsSW5saW5lU3R5bGVzKHBsYXllcikge1xuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke3BsYXllcn0gPiB0ciA+IHRkID4gLnNoaXAtbm9kZWApO1xuICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVBsYXllclN3aXRjaFN0eWxlcygpIHtcbiAgY29uc3QgcGxheWVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIueW91ci1ncmlkXCIpO1xuICBjb25zdCBwbGF5ZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcHBvbmVudC1ncmlkXCIpO1xuXG4gIHBsYXllcjEuc3R5bGUub3BhY2l0eSA9IDE7XG4gIHBsYXllcjEuc3R5bGUuZmlsdGVyID0gXCJibHVyKDBweClcIjtcblxuICBwbGF5ZXIyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICBwbGF5ZXIyLnN0eWxlLmZpbHRlciA9IFwiYmx1cigwcHgpXCI7XG59XG5cbmV4cG9ydCB7IHJlbW92ZUFsbElubGluZVN0eWxlcywgcmVtb3ZlUGxheWVyU3dpdGNoU3R5bGVzIH07XG4iLCJmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgY29uc3QgeW91ckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnlvdXJcIik7XG4gIGNvbnN0IG9wcG9uZW50R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3Bwb25lbnRcIik7XG4gIHlvdXJHcmlkLnJlcGxhY2VDaGlsZHJlbigpO1xuICBvcHBvbmVudEdyaWQucmVwbGFjZUNoaWxkcmVuKCk7XG59XG5cbmV4cG9ydCB7IHJlbW92ZUV2ZW50TGlzdGVuZXJzIH07XG4iLCJmdW5jdGlvbiByZW5kZXJTaGlwSGl0KHNoaXBDZWxsKSB7XG4gICAgc2hpcENlbGwuc3R5bGUuY3NzVGV4dCArPSBcImJhY2tncm91bmQtY29sb3I6IHJlZFwiO1xufVxuXG5mdW5jdGlvbiByZW5kZXJNaXNIaXQoZ3JpZENlbGwpIHtcbiAgICBncmlkQ2VsbC5zdHlsZS5jc3NUZXh0ICs9IFwiYmFja2dyb3VuZC1jb2xvcjogeWVsbG93XCI7XG59XG5cblxuXG5leHBvcnQge3JlbmRlclNoaXBIaXQscmVuZGVyTWlzSGl0fTsiLCJpbXBvcnQgeyBtb2RlLCBzd2l0Y2hNb2RlIH0gZnJvbSBcIi4vZHJpdmVyXCI7XG4vLyByZW5kZXIgY2hhbmdlcyBpbiBwYWdlIHdoZW4gbW9kZSBpcyBjaGFuZ2VkXG5mdW5jdGlvbiByZW5kZXJNb2RlQ2hhbmdlKGV2ZW50KSB7XG4gIGNvbnN0IGNvbXB1dGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wdXRlci1idXR0b25cIik7XG4gIGNvbnN0IGh1bWFuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNodW1hbi1idXR0b25cIik7XG4gIGlmIChtb2RlID09IFwiSHVtYW5cIiAmJiBldmVudC50YXJnZXQuaWQgPT0gXCJjb21wdXRlci1idXR0b25cIikge1xuICAgIGNvbXB1dGVyQnV0dG9uLnN0eWxlLmNzc1RleHQgKz0gXCJjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6IGJsdWVcIjtcbiAgICBodW1hbkJ1dHRvbi5zdHlsZS5jc3NUZXh0ICs9IFwiY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVwiO1xuICAgIHN3aXRjaE1vZGUoKTtcbiAgfSBlbHNlIGlmIChtb2RlID09IFwiQ29tcHV0ZXJcIiAmJiBldmVudC50YXJnZXQuaWQgPT0gXCJodW1hbi1idXR0b25cIikge1xuICAgIGh1bWFuQnV0dG9uLnN0eWxlLmNzc1RleHQgKz0gXCJjb2xvcjogd2hpdGU7IGJhY2tncm91bmQtY29sb3I6IGJsdWVcIjtcbiAgICBjb21wdXRlckJ1dHRvbi5zdHlsZS5jc3NUZXh0ICs9IFwiY29sb3I6IGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVwiO1xuICAgIHN3aXRjaE1vZGUoKTtcbiAgfVxufVxuXG5leHBvcnQgeyByZW5kZXJNb2RlQ2hhbmdlIH07XG4iLCJpbXBvcnQgeyBjdXJyZW50UGxheWVyLCBwbGF5ZXJzIH0gZnJvbSBcIi4vZHJpdmVyXCI7XG5mdW5jdGlvbiByZW5kZXJQbGF5ZXJTd2l0Y2goKSB7XG4gIGNvbnN0IHBsYXllcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnlvdXItZ3JpZFwiKTtcbiAgY29uc3QgcGxheWVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3Bwb25lbnQtZ3JpZFwiKTtcbiAgcGxheWVyMS5zdHlsZS5maWx0ZXIgPSBcImJsdXIoMHB4KVwiO1xuICBwbGF5ZXIyLnN0eWxlLmZpbHRlciA9IFwiYmx1cigwcHgpXCI7XG5cbiAgaWYgKGN1cnJlbnRQbGF5ZXIgPT0gcGxheWVycy5wbGF5ZXIyKSB7XG4gICAgcGxheWVyMi5zdHlsZS5vcGFjaXR5ID0gMC4xNTtcbiAgICBwbGF5ZXIyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICBwbGF5ZXIxLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIHBsYXllcjEuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYXV0b1wiO1xuICB9IGVsc2Uge1xuICAgIHBsYXllcjEuc3R5bGUub3BhY2l0eSA9IDAuMTU7XG4gICAgcGxheWVyMS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgcGxheWVyMi5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBwbGF5ZXIyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImF1dG9cIjtcbiAgfVxufVxuXG5leHBvcnQgeyByZW5kZXJQbGF5ZXJTd2l0Y2ggfTtcbiIsImltcG9ydCB7XG4gIG1vZGUsXG4gIHBsYXlHYW1lLFxuICBwbGF5R2FtZVZzSHVtYW4sXG4gIGxheW91dEZpbmFsaXplZCxcbiAgc2V0dXBDb21wdXRlckdhbWUsXG4gIHNldHVwSHVtYW5HYW1lLFxufSBmcm9tIFwiLi9kcml2ZXJcIjtcbmltcG9ydCB7IHJlbmRlck1vZGVDaGFuZ2UgfSBmcm9tIFwiLi9yZW5kZXItbW9kZS1jaGFuZ2VcIjtcbmltcG9ydCB7IHBhc3NEZXZpY2UgfSBmcm9tIFwiLi9wYXNzLWRldmljZVwiO1xuaW1wb3J0IHsgcmVtb3ZlUGxheWVyU3dpdGNoU3R5bGVzIH0gZnJvbSBcIi4vcmVtb3ZlLWFsbC1pbmxpbmUtc3R5bGVzXCI7XG4vLyBzZXRzIHVwIGluZGl2aWR1YWwgZXZlbnQgbGlzdGVuZXJzIGZvciBncmlkIGNlbGxzXG5mdW5jdGlvbiBzZXR1cEV2ZW50TGlzdGVuZXJzKCkge1xuICBjb25zdCB5b3VyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnlvdXIgPiB0ciA+IC5jZWxsXCIpO1xuICBjb25zdCBvcHBlbmVudENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5vcHBvbmVudCA+IHRyID4gLmNlbGxcIik7XG5cbiAgeW91ckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCB4ID0gTnVtYmVyKGNlbGwuZGF0YXNldC54KTtcbiAgICAgIGNvbnN0IHkgPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnkpO1xuICAgICAgaWYgKG1vZGUgPT0gXCJDb21wdXRlclwiKSB7XG4gICAgICAgIHBsYXlHYW1lKGNlbGwsIHgsIHksIGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXlHYW1lVnNIdW1hbihjZWxsLCB4LCB5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgb3BwZW5lbnRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgeCA9IE51bWJlcihjZWxsLmRhdGFzZXQueCk7XG4gICAgICBjb25zdCB5ID0gTnVtYmVyKGNlbGwuZGF0YXNldC55KTtcbiAgICAgIGlmIChtb2RlID09IFwiQ29tcHV0ZXJcIikge1xuICAgICAgICBwbGF5R2FtZShjZWxsLCB4LCB5LCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5R2FtZVZzSHVtYW4oY2VsbCwgeCwgeSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBhZGRzIGV2ZW50IGxpc3RlbmVycyB0aGF0IGNoYW5nZSBidXR0b24gc3R5bGUgYW5kIHJlLXJlbmRlcnMgdGhlIHBhZ2UgdG8gaW5kaWNhdGUgZ2FtZSBtb2RlXG5mdW5jdGlvbiBzZXRNb2RlQ2hhbmdlQnV0dG9uRXZlbnRzKCkge1xuICBjb25zdCBjb21wdXRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29tcHV0ZXItYnV0dG9uXCIpO1xuICBjb25zdCBodW1hbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaHVtYW4tYnV0dG9uXCIpO1xuXG4gIGNvbXB1dGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAobGF5b3V0RmluYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlbmRlck1vZGVDaGFuZ2UoZXZlbnQpO1xuICAgIHJlbW92ZVBsYXllclN3aXRjaFN0eWxlcygpO1xuICAgIHNldHVwQ29tcHV0ZXJHYW1lKCk7XG4gIH0pO1xuXG4gIGh1bWFuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAobGF5b3V0RmluYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlbmRlck1vZGVDaGFuZ2UoZXZlbnQpO1xuICAgIHJlbW92ZVBsYXllclN3aXRjaFN0eWxlcygpO1xuICAgIHNldHVwSHVtYW5HYW1lKCk7XG4gIH0pO1xufVxuXG4vLyBzZXRzIHVwIHBhc3MgZGV2aWNlIGV2ZW50IGxpc3RlbmVyXG5mdW5jdGlvbiBhZGRQYXNzRGV2aWNlRXZlbnQoKSB7XG4gIGNvbnN0IHBhc3NEZXZpY2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhc3MtZGV2aWNlXCIpO1xuICBwYXNzRGV2aWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwYXNzRGV2aWNlKTtcbn1cblxuZXhwb3J0IHsgc2V0dXBFdmVudExpc3RlbmVycywgc2V0TW9kZUNoYW5nZUJ1dHRvbkV2ZW50cywgYWRkUGFzc0RldmljZUV2ZW50IH07XG4iLCJjb25zdCB0b1dvcmRzID0gW1xuICBcInplcm9cIixcbiAgXCJvbmVcIixcbiAgXCJ0d29cIixcbiAgXCJ0aHJlZVwiLFxuICBcImZvdXJcIixcbiAgXCJmaXZlXCIsXG4gIFwic2l4XCIsXG4gIFwic2V2ZW5cIixcbiAgXCJlaWdodFwiLFxuICBcIm5pbmVcIixcbl07XG5jb25zdCB0b051bWJlcnMgPSBuZXcgTWFwKCk7XG5mb3IgKGxldCBpID0gMDsgaSA8IHRvV29yZHMubGVuZ3RoOyBpKyspIHtcbiAgdG9OdW1iZXJzLnNldCh0b1dvcmRzW2ldLCBpKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBDZWxsSFRNTCgpIHtcbiAgY29uc3QgeW91ckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnlvdXJcIik7XG4gIGNvbnN0IG9wcG9uZW50c0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wcG9uZW50XCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGNvbnN0IHlvdXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgY29uc3Qgb3Bwb25lbnRzUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY29uc3QgeW91ckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICBjb25zdCBzaGlwTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzaGlwTm9kZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1ub2RlXCIpO1xuICAgICAgc2hpcE5vZGUuZGF0YXNldC5zaGlwWCA9IGk7XG4gICAgICBzaGlwTm9kZS5kYXRhc2V0LnNoaXBZID0gajtcbiAgICAgIHlvdXJDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIsIGAke3RvV29yZHNbaV19LSR7dG9Xb3Jkc1tqXX1gKTtcbiAgICAgIHlvdXJDZWxsLmRhdGFzZXQueCA9IGk7XG4gICAgICB5b3VyQ2VsbC5kYXRhc2V0LnkgPSBqO1xuICAgICAgeW91ckNlbGwuZGF0YXNldC5pc0hpdCA9IDA7XG4gICAgICB5b3VyQ2VsbC5hcHBlbmRDaGlsZChzaGlwTm9kZSk7XG4gICAgICB5b3VyUm93LmFwcGVuZENoaWxkKHlvdXJDZWxsKTtcblxuICAgICAgY29uc3Qgb3Bwb25lbnRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgY29uc3Qgb3Bwb25lbnRTaGlwTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBvcHBvbmVudFNoaXBOb2RlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLW5vZGVcIik7XG4gICAgICBvcHBvbmVudFNoaXBOb2RlLmRhdGFzZXQuc2hpcFggPSBpO1xuICAgICAgb3Bwb25lbnRTaGlwTm9kZS5kYXRhc2V0LnNoaXBZID0gajtcbiAgICAgIG9wcG9uZW50Q2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiLCBgJHt0b1dvcmRzW2ldfS0ke3RvV29yZHNbal19YCk7XG4gICAgICBvcHBvbmVudENlbGwuZGF0YXNldC54ID0gaTtcbiAgICAgIG9wcG9uZW50Q2VsbC5kYXRhc2V0LnkgPSBqO1xuICAgICAgb3Bwb25lbnRDZWxsLmRhdGFzZXQuaXNIaXQgPSAwO1xuICAgICAgb3Bwb25lbnRDZWxsLmFwcGVuZENoaWxkKG9wcG9uZW50U2hpcE5vZGUpO1xuICAgICAgb3Bwb25lbnRzUm93LmFwcGVuZENoaWxkKG9wcG9uZW50Q2VsbCk7XG4gICAgfVxuICAgIHlvdXJHcmlkLmFwcGVuZENoaWxkKHlvdXJSb3cpO1xuICAgIG9wcG9uZW50c0dyaWQuYXBwZW5kQ2hpbGQob3Bwb25lbnRzUm93KTtcbiAgfVxufVxuXG5leHBvcnQgeyBzZXR1cENlbGxIVE1MLCB0b1dvcmRzIH07XG4iLCJjbGFzcyBTaGlwIHtcbiAgICBsZW5ndGg7XG4gICAgaGl0cztcbiAgICBvcmllbnRhdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGl0cyA8IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEhpdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0cztcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldExlbmd0aCgpID09IHRoaXMuZ2V0SGl0KCk7XG4gICAgfVxuXG4gICAgZ2V0TGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gICAgfVxuICAgIFxuICAgIHN3aXRjaE9yaWVudGF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmllbnRhdGlvbiA9IHRoaXMub3JpZW50YXRpb24gPT0gXCJob3Jpem9udGFsXCIgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcbiAgICB9XG5cbiAgICBnZXRPcmllbnRhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JpZW50YXRpb247XG4gICAgfVxufVxuZXhwb3J0IHtTaGlwfTtcblxuXG4iLCJpbXBvcnQgeyB0b1dvcmRzIH0gZnJvbSBcIi4vc2V0dXBcIjtcbmZ1bmN0aW9uIHVwZGF0ZUJvYXJkKGdhbWVib2FyZCwgcGxheWVyKSB7XG4gIGdhbWVib2FyZC5hbGxTaGlwcy5mb3JFYWNoKCh2YWx1ZSwga2V5LCBtYXApID0+IHtcbiAgICBpZiAoa2V5LmdldE9yaWVudGF0aW9uKCkgPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gdmFsdWVbMV07XG4gICAgICBjb25zdCBlbmQgPSB2YWx1ZVszXTtcbiAgICAgIGNvbnN0IHJvdyA9IHZhbHVlWzBdO1xuXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGAke3RvV29yZHNbcm93XX0tJHt0b1dvcmRzW3N0YXJ0XX1gO1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBgLiR7cGxheWVyfSA+IHRyID4gLiR7cG9zaXRpb259ID4gLnNoaXAtbm9kZWA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleS5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHAgPSBgJHt0b1dvcmRzW3Jvd119LSR7dG9Xb3Jkc1tzdGFydCArIGldfWA7XG4gICAgICAgIGNvbnN0IHNlbCA9IGAuJHtwbGF5ZXJ9ID4gdHIgPiAuJHtwfSA+IC5zaGlwLW5vZGVgO1xuICAgICAgICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWwpO1xuICAgICAgICBub2RlLmRhdGFzZXQuc2hpcEV4aXN0cyA9IDE7XG4gICAgICB9XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICBjZWxsLmRhdGFzZXQucHJlc2VudCA9IDE7XG4gICAgICBjZWxsLmRhdGFzZXQuc2hpcFggPSByb3c7XG4gICAgICBjZWxsLmRhdGFzZXQuc2hpcFkgPSBzdGFydDtcbiAgICAgIGNlbGwuZGF0YXNldC5sZW5ndGggPSBrZXkuZ2V0TGVuZ3RoKCk7XG4gICAgICBjZWxsLmRhdGFzZXQub3JpZW50YXRpb24gPSBrZXkuZ2V0T3JpZW50YXRpb24oKTtcbiAgICAgIGNlbGwuc3R5bGUuY3NzVGV4dCArPSBcImJvcmRlcjogc29saWQgMnB4IGJsdWU7XCI7XG4gICAgICBjb25zdCB3aWR0aCA9IGtleS5nZXRMZW5ndGgoKSAqIDIgKyAwLjA1ICogKGtleS5nZXRMZW5ndGgoKSAtIDEpO1xuICAgICAgY2VsbC5zdHlsZS5jc3NUZXh0ICs9IGB3aWR0aDogJHt3aWR0aH1lbTsgaGVpZ2h0OiAyZW07IHBvc2l0aW9uOmFic29sdXRlOyBjdXJzb3I6IG1vdmUgIWltcG9ydGFudDsgei1pbmRleDogMTtgO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGFydCA9IHZhbHVlWzBdO1xuICAgICAgY29uc3QgZW5kID0gdmFsdWVbMl07XG4gICAgICBjb25zdCBjb2wgPSB2YWx1ZVsxXTtcblxuICAgICAgY29uc3QgcG9zaXRpb24gPSBgJHt0b1dvcmRzW3N0YXJ0XX0tJHt0b1dvcmRzW2NvbF19YDtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gYC4ke3BsYXllcn0gPiB0ciA+IC4ke3Bvc2l0aW9ufSA+IC5zaGlwLW5vZGVgO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXkuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICBjb25zdCBwID0gYCR7dG9Xb3Jkc1tzdGFydCArIGldfS0ke3RvV29yZHNbY29sXX1gO1xuICAgICAgICBjb25zdCBzZWwgPSBgLiR7cGxheWVyfSA+IHRyID4gLiR7cH0gPiAuc2hpcC1ub2RlYDtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcbiAgICAgICAgbm9kZS5kYXRhc2V0LnNoaXBFeGlzdHMgPSAxO1xuICAgICAgfVxuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgY2VsbC5kYXRhc2V0LnByZXNlbnQgPSAxO1xuICAgICAgY2VsbC5kYXRhc2V0LnNoaXBYID0gc3RhcnQ7XG4gICAgICBjZWxsLmRhdGFzZXQuc2hpcFkgPSBjb2w7XG4gICAgICBjZWxsLmRhdGFzZXQubGVuZ3RoID0ga2V5LmdldExlbmd0aCgpO1xuICAgICAgY2VsbC5kYXRhc2V0Lm9yaWVudGF0aW9uID0ga2V5LmdldE9yaWVudGF0aW9uKCk7XG4gICAgICBjZWxsLnN0eWxlLmNzc1RleHQgKz0gXCJib3JkZXI6IDJweCBzb2xpZCBibHVlO1wiO1xuICAgICAgY29uc3QgaGVpZ2h0ID0ga2V5LmdldExlbmd0aCgpICogMiArIDAuMDUgKiAoa2V5LmdldExlbmd0aCgpIC0gMSk7XG4gICAgICBjZWxsLnN0eWxlLmNzc1RleHQgKz0gYGhlaWdodDogJHtoZWlnaHR9ZW07IHdpZHRoOiAyZW07cG9zaXRpb246IGFic29sdXRlOyBjdXJzb3I6IG1vdmUgIWltcG9ydGFudDsgei1pbmRleDogMTtgO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCB7IHVwZGF0ZUJvYXJkIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=