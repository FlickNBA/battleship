"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Inter", sans-serif;
    text-align: center;
    background: #0F2027;
    background: -webkit-linear-gradient(to bottom, #2C5364, #203A43, #0F2027);
    background: linear-gradient(to bottom, #2C5364, #203A43, #0F2027);
}

#main {
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    gap: 1rem;
    padding: 1rem;
    background: white;
}

h1 {
    color: white;
}

.board {
    display: grid;
    gap: 0.25rem;
}

.board > div {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.5);
    position: relative;
}

#enemy > div {
    color: rgba(0, 0, 0, 0.025);
}

.player {
    color: green;
}

.enemy {
    color: red;
}

.border-player {
    border: 2px solid green;
}

.border-enemy {
    border: 2px solid red;
}

.hit {
    background-color: rgba(255, 165, 0, 0.75);
}

.missed {
    background-color: rgba(51, 51, 51, 0.5);
}

.sunk {
    background-color: rgba(255, 0, 0, 0.75);
    transform: scale(1.5);
}

.dot {
    width: 40%;
    height: 40%;
    border-radius: 100%;
    position: absolute;
}

#top {
    display: none;
    margin-bottom: 1rem;
    width: 100%;
    justify-content: center;
}

#top input {
    margin-left: 1rem;
    width: 33%;
    text-align: center;
}

.disabled {
    pointer-events: none;
}

#winner {
    position: absolute;
}`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,gCAAgC;IAChC,kBAAkB;IAClB,mBAAmB;IACnB,yEAAyE;IACzE,iEAAiE;AACrE;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,SAAS;IACT,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,uCAAuC;IACvC,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap\");\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-family: \"Inter\", sans-serif;\n    text-align: center;\n    background: #0F2027;\n    background: -webkit-linear-gradient(to bottom, #2C5364, #203A43, #0F2027);\n    background: linear-gradient(to bottom, #2C5364, #203A43, #0F2027);\n}\n\n#main {\n    grid-template-columns: repeat(2, 1fr);\n    display: grid;\n    gap: 1rem;\n    padding: 1rem;\n    background: white;\n}\n\nh1 {\n    color: white;\n}\n\n.board {\n    display: grid;\n    gap: 0.25rem;\n}\n\n.board > div {\n    border: 1px solid black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1rem;\n    cursor: pointer;\n    color: rgba(0, 0, 0, 0.5);\n    position: relative;\n}\n\n#enemy > div {\n    color: rgba(0, 0, 0, 0.025);\n}\n\n.player {\n    color: green;\n}\n\n.enemy {\n    color: red;\n}\n\n.border-player {\n    border: 2px solid green;\n}\n\n.border-enemy {\n    border: 2px solid red;\n}\n\n.hit {\n    background-color: rgba(255, 165, 0, 0.75);\n}\n\n.missed {\n    background-color: rgba(51, 51, 51, 0.5);\n}\n\n.sunk {\n    background-color: rgba(255, 0, 0, 0.75);\n    transform: scale(1.5);\n}\n\n.dot {\n    width: 40%;\n    height: 40%;\n    border-radius: 100%;\n    position: absolute;\n}\n\n#top {\n    display: none;\n    margin-bottom: 1rem;\n    width: 100%;\n    justify-content: center;\n}\n\n#top input {\n    margin-left: 1rem;\n    width: 33%;\n    text-align: center;\n}\n\n.disabled {\n    pointer-events: none;\n}\n\n#winner {\n    position: absolute;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}`, "",{"version":3,"sources":["webpack://./src/reset.css"],"names":[],"mappings":"AAAA;;CAEC;AACD;EACE,sBAAsB;AACxB;AACA;;CAEC;AACD;EACE,SAAS;AACX;AACA;;CAEC;AACD;EACE,YAAY;AACd;AACA;;;;CAIC;AACD;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;CAEC;AACD;EACE,cAAc;EACd,eAAe;AACjB;AACA;;CAEC;AACD;EACE,aAAa;AACf;AACA;;CAEC;AACD;EACE,yBAAyB;AAC3B;AACA;;CAEC;AACD;EACE,kBAAkB;AACpB","sourcesContent":["/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml, body {\n  height: 100%;\n}\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n  6. Improve media defaults\n*/\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\n/*\n  7. Remove built-in form typography styles\n*/\ninput, button, textarea, select {\n  font: inherit;\n}\n/*\n  8. Avoid text overflows\n*/\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n/*\n  9. Create a root stacking context\n*/\n#root, #__next {\n  isolation: isolate;\n}"],"sourceRoot":""}]);
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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawAttack: () => (/* binding */ drawAttack)
/* harmony export */ });
const sunkShip = (coordinates, player, enemy) => {
  let sunkTile = document.querySelector(`#${enemy.slice(0, 1)}-${coordinates}`);
  let tilesToSunk = document.querySelectorAll(`#${enemy} > div`);
  tilesToSunk.forEach((t) => {
    if (t.innerText == sunkTile.innerText) drawAttack(t.id.split("-").splice(1).join("-"), player, 555);
  });
};
const drawAttack = (coordinates, player, result) => {
  console.log(coordinates, player, result);
  let CSS = "";
  let enemySelector = player.id.slice(0, 1) == "p" ? "enemy" : "player";

  switch (result) {
    case 1:
      CSS = "hit";
      break;
    case 2:
      CSS = "missed";
      break;
    case 3:
      CSS = "missed";
      break;
    case 5:
      CSS = "sunk";
      sunkShip(coordinates, player, enemySelector);
      break;
    case 555:
      CSS = "sunk";
      break;
  }

  let dot = document.createElement("div");
  dot.classList = `dot border-${player.id} ${CSS}`;

  if (document.querySelector(`#${enemySelector.slice(0, 1)}-${coordinates}`).childNodes.length > 1) {
    document.querySelector(`#${enemySelector.slice(0, 1)}-${coordinates} > .dot`).remove();
  }

  document.querySelector(`#${enemySelector.slice(0, 1)}-${coordinates}`).appendChild(dot);
};


/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _initBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initBoard */ "./src/initBoard.js");




class Tile {
  constructor(coordinates, status = []) {
    this.coordinates = coordinates;
    this.status = status;
    this.attackedBy = [];
  }
}

class Gameboard {
  constructor(x = 10) {
    this.size = x;
    this.board = [];
    this.createBoard();
    this.players = [];
  }

  placeShips(n, index) {
    let shipNames = ["Boat", "Scooter", "Shark", "Bike", "Fish", "Tank"];
    let shipLength = [2, 4, 3, 4, 2, 3];
    for (let i = 0; i < n; i++) {
      let axis = i % 2 == 0 ? "x" : "y";
      let canPlace = false;
      while (!canPlace) {
        console.log("xD");
        let randomTile = this.board[Math.floor(this.board.length * Math.random())].coordinates;
        let can = this.checkIfCanPlaceShip(randomTile, axis, shipLength[i], this.players[index]);
        console.log(can);
        if (can != false) {
          canPlace = true;
          this.placeShip(randomTile, axis, shipLength[i], this.players[index], shipNames[i]);
        }
      }
    }
  }

  botShoot() {
    console.log(this.players[1].possibleHits);
    let randomHit = this.players[1].possibleHits[Math.floor(this.players[1].possibleHits.length * Math.random())];
    this.receiveAttack(randomHit.coordinates, this.players[1]);
    this.updateShipsAlive();
    this.players[1].possibleHits.splice(this.players[1].possibleHits.indexOf(randomHit), 1);
  }

  shootButton(e, p) {
    // console.log(board.receiveAttack("1-1", player));
    let coordinates;
    if (e.target.className != "") {
      coordinates = e.target.offsetParent.id.split("-").splice(1).join("-");
    } else {
      coordinates = e.target.id.split("-").splice(1).join("-");
    }
    let canHit = this.players[0].possibleHits.find((r) => r.coordinates == coordinates);
    //console.log("can hit", canHit);
    if (canHit) {
      console.log(e.target);
      this.receiveAttack(coordinates, p);
      this.players[0].possibleHits.splice(this.players[0].possibleHits.indexOf(this.players[0].possibleHits.find((r) => r.coordinates == coordinates)), 1);
      this.updateShipsAlive();
      this.botShoot();
    }
  }

  endGame(winner, shipsLeft, loser) {
    setTimeout(() => {
      document.querySelector("#main").style["transition-duration"] = "1000ms";
      document.querySelector("#main").style.opacity = 0;
      if (shipsLeft == 777) {
        document.querySelector("#winner").innerHTML = `${winner.name} tied against ${loser.name}!`;
      } else {
        document.querySelector("#winner").innerHTML = `${winner.name} won against ${loser.name} with ${shipsLeft} ships left!`;
      }
    }, 500);
  }

  placeShipButton(e, p) {
    // console.log(e);
    // console.log(p);
    if (p.ships.length < 4) {
      let coordinates = e.target.id.split("-").splice(1).join("-");
      let axis = document.querySelector("#axis").value.split(", ")[0];
      let name = document.querySelector("#axis").value.split(", ")[1];
      let length = Number(document.querySelector("#axis").value.split(", ")[2]);
      let ship = this.placeShip(coordinates, axis, length, p, name);
      if (ship == false) {
        alert("You made a mistake, make sure to double-check.");
      }
      document.querySelector("#turn").innerText = `${this.players[0].name}'s turn to place ship (${this.players[0].ships.length}/4 ships)`;
      this.bothPlayersReady();
    } else {
      console.log("You have maximum amount of ships");
    }
  }

  updateShipsAlive() {
    let playerShips = this.players[0].ships.reduce((accumulator, value) => {
      if (!value.isSunk) accumulator++;
      return accumulator;
    }, 0);
    document.querySelector(".player").innerText = `${this.players[0].name} => ${playerShips}/6 ships alive.`;
    let botShips = this.players[1].ships.reduce((accumulator, value) => {
      if (!value.isSunk) accumulator++;
      return accumulator;
    }, 0);
    document.querySelector(".enemy").innerText = `${this.players[1].name} => ${botShips}/6 ships alive.`;

    if (playerShips == 0 && botShips == 0) {
      this.endGame(this.players[1], 777, this.players[2]);
    } else if (playerShips == 0) {
      this.endGame(this.players[1], botShips, this.players[0]);
    } else if (botShips == 0) {
      this.endGame(this.players[0], playerShips, this.players[1]);
    }
  }

  bothPlayersReady() {
    if (this.players[0].ships.length + this.players[1].ships.length == 12) {
      document.querySelector("#turn").innerText = `${this.players[0].name}'s turn to shoot`;
      document.querySelector("#axis").style.display = "none";

      document.querySelectorAll("#player > div").forEach((playerTile) => {
        playerTile.classList.add("disabled");
      });

      document.querySelectorAll("#enemy > div").forEach((enemyTile) => {
        enemyTile.addEventListener("click", (event) => {
          this.shootButton(event, this.players[0]);
        });
      });

      this.updateShipsAlive();
    }
  }

  startGame() {
    document.querySelectorAll("#player > div").forEach((playerTile) => {
      playerTile.addEventListener("click", (event) => {
        this.placeShipButton(event, this.players[0]);
      });
    });

    this.placeShips(6, 0);

    this.placeShips(6, 1);

    this.bothPlayersReady();

    //document.querySelector("#turn").innerText = `${this.players[0].name}'s turn to place ship (${this.players[0].ships.length}/4 ships)`;
  }

  addPlayer(player, id) {
    player.possibleHits = JSON.parse(JSON.stringify(this.board));
    this.players.push(player);
  }

  createBoard() {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        this.board.push(new Tile(`${i + 1}-${j + 1}`));
      }
    }
  }

  print() {
    let ALL = [];
    for (let i = 0; i < this.size; i++) {
      let LINE = [];
      for (let j = 0; j < this.size; j++) {
        LINE.push(this.board[j + i * this.size]);
      }
      ALL.push(LINE);
    }

    //console.log(ALL);

    ALL.forEach((AA) => {
      let L = "";
      AA.forEach((A) => {
        // console.log(A.status.owner.name);
        if (A.status.length == 1) {
          //console.log(A.status);
          L += `${A.coordinates} ${A.status[0].owner.name}\t`;
        } else if (A.status.length > 1) {
          L += `${A.coordinates} BOTH\t`;
        } else {
          L += `${A.coordinates}\t\t`;
        }
      });
      console.log(L);
    });
  }

  get tileCount() {
    return this.board.length;
  }

  checkHelper(tileStatuses, targetTiles, player) {
    //console.log(tileStatuses);
    //console.log(targetTiles.filter((t) => t != ""));
    //console.log(targetTiles);
    let X = targetTiles.reduce((initial, value) => {
      //console.log(value.status.length);
      //console.log(value.status.some((V) => V.owner == player));
      initial.push(value.status.some((V) => V.owner == player));
      //initial.push(value.status.owner != player);
      return initial;
    }, []);
    //console.log(X);
    return X.some((H) => H == true) ? false : targetTiles;
  }

  checkIfCanPlaceShip(coordinates, axis, length, player) {
    let x = Number(coordinates.split("-")[0]);
    let y = Number(coordinates.split("-")[1]);
    let tileStatuses = [];
    let targetTiles = [];

    if (axis == "x") {
      if (y + (length - 1) <= this.size) {
        for (let i = y; i < y + length; i++) {
          // console.log(`${x}-${i}`);
          let tile = this.board.find((xxx) => xxx.coordinates == `${x}-${i}`);
          targetTiles.push(tile);
          tileStatuses.push(tile.status);
        }
      } else {
        return false;
      }
    } else if (axis == "y") {
      if (x + (length - 1) <= this.size) {
        for (let i = x; i < x + length; i++) {
          // console.log(`${i}-${y}`);
          let tile = this.board.find((xxx) => xxx.coordinates == `${i}-${y}`);
          targetTiles.push(tile);
          tileStatuses.push(tile.status);
        }
      } else {
        return false;
      }
    }

    return this.checkHelper(tileStatuses, targetTiles, player);
  }

  placeShip(coordinates, axis, length, player, name = "Ship") {
    let index = player.id == "player" ? 0 : 1;
    let check = this.checkIfCanPlaceShip(coordinates, axis, length, player);
    if (check) {
      let ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(check, length, player, name);
      player.addShip(ship);
      console.log(check);
      check.forEach((c) => c.status.push(ship));
      (0,_initBoard__WEBPACK_IMPORTED_MODULE_2__.drawShips2)(this.board, player);
      return ship;
    } else {
      return false;
    }
  }

  receiveAttack(coordinates, player) {
    // CODES: 1 => attack hit enemy, 2 = attack missed, 3 = attacked your own, 4 = already attacked, 5 = attack hit and sunk enemy
    console.log(coordinates);
    let tile = this.board.find((t) => t.coordinates == coordinates);
    //console.log(tile.status.length);
    //let statusEmpty = tile.status == "";
    console.log(this.board);
    console.log(tile);
    let statusEmpty = tile.status.length == 0;
    let attackedAlready = tile.attackedBy.includes(player);
    if (attackedAlready) {
      return 4;
    } else {
      if (statusEmpty) {
        tile.attackedBy.push(player);
        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.drawAttack)(coordinates, player, 2);
        return 2;
      } else {
        let howManyShips = tile.status.length;
        if (howManyShips > 1) {
          let enemyShip = tile.status.find((s) => s.owner != player);
          enemyShip.hit();
          tile.attackedBy.push(player);
          (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.drawAttack)(coordinates, player, enemyShip.isSunk ? 5 : 1);
          return enemyShip.isSunk ? 5 : 1;
        } else {
          let hitMyOwn = tile.status[0].owner == player;
          // console.log("hit my own?", hitMyOwn);
          if (hitMyOwn) {
            (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.drawAttack)(coordinates, player, 3);
            return 3;
          } else {
            tile.status[0].hit();
            tile.attackedBy.push(player);
            (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.drawAttack)(coordinates, player, tile.status[0].isSunk ? 5 : 1);
            return tile.status[0].isSunk ? 5 : 1;
          }
        }
      }
    }
  }

  printAttackResult(attacker, enemy, code) {
    // CODES: 1 => attack hit enemy, 2 = attack missed, 3 = attacked your own, 4 = already attacked, 5 = attack hit and sunk enemy
    switch (code) {
      case 1:
        return `${attacker.name} hit ${enemy.name} ship.`;
      case 2:
        return `${attacker.name} missed.`;
      case 3:
        return `${attacker.name} tried to attack his own ship.`;
      case 4:
        return `${attacker.name} already attacked this tile.`;
      case 5:
        return `${attacker.name} hit and sunk ${enemy.name} ship.`;
    }
  }
}


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
class Player {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.ships = [];
    this.possibleHits = [];
  }

  addShip(ship) {
    this.ships.push(ship);
  }

  get shipCount() {
    return this.ships.length;
  }
}


/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(coordinates, length, owner, name = "Ship") {
    this.coordinates = coordinates;
    this.length = length;
    this.hits = 0;
    this.owner = owner;
    this.name = name;
  }
  hit() {
    this.hits += 1;
  }
  get isSunk() {
    return this.hits >= this.length;
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _initBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initBoard */ "./src/initBoard.js");








// let board = new Gameboard(Number(prompt("How many tiles? For 8x8 type in 8")));

let board = new _Gameboard__WEBPACK_IMPORTED_MODULE_4__.Gameboard(8);

// let player = new Player(prompt("Type in your player name"), "player");
let player = new _Player__WEBPACK_IMPORTED_MODULE_2__.Player("Flick", "player");
board.addPlayer(player);
let enemy = new _Player__WEBPACK_IMPORTED_MODULE_2__.Player("AI", "enemy");
board.addPlayer(enemy);

(0,_initBoard__WEBPACK_IMPORTED_MODULE_5__.initBoard)(board);

// console.log(board.placeShip("1-4", "x", 4, enemy, "Big ship"));
// console.log(board.placeShip("3-4", "x", 2, player, "Jetski"));
// console.log(board.placeShip("2-2", "y", 4, player, "Yacht"));
// console.log(board.placeShip("7-2", "x", 3, player, "U-Boot"));

board.startGame();
// console.log(board.placeShip("2-1", "y", 4, enemy, "U-Boot"));
// console.log(board.placeShip("5-4", "x", 4, enemy, "Cruise ship"));

// // board.print();

// console.log(board.placeShip("1-2", "x", 3, player, "Small ship"));

// console.log(board.receiveAttack("1-1", player)); // miss
// console.log(board.receiveAttack("1-1", enemy)); // miss
// console.log(board.receiveAttack("1-3", player)); // miss;
// console.log(board.receiveAttack("3-4", enemy)); // hit
// console.log(board.receiveAttack("1-5", player)); // hit
// console.log(board.receiveAttack("3-5", enemy)); // hit + sunk


/***/ }),

/***/ "./src/initBoard.js":
/*!**************************!*\
  !*** ./src/initBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boards: () => (/* binding */ boards),
/* harmony export */   drawShips2: () => (/* binding */ drawShips2),
/* harmony export */   initBoard: () => (/* binding */ initBoard)
/* harmony export */ });
let boards = [document.querySelector("#player"), document.querySelector("#enemy")];

// export const drawShips1 = (data, index) => {
//   console.log(data, index);
//   let who = data.players[index];
//   console.log(who);
//   who.ships.forEach((ship) => {
//     console.log(ship, "ship");
//     ship.coordinates.forEach((c) => {
//       console.log(who);
//       let tile = document.querySelector(`#${who.id.slice(0, 1)}-${c.coordinates}`);
//       let shipDiv = document.createElement("div");
//       shipDiv.classList.add(who.name);
//       shipDiv.innerHTML = `${ship.name}`;

//       if (tile.childNodes.length > 1) {
//       }

//       tile.appendChild(shipDiv);
//     });
//   });
// };

const drawShips2 = (data, player) => {
  let who = player;
  console.log(who);
  who.ships.forEach((ship) => {
    console.log(ship, "ship");
    ship.coordinates.forEach((c) => {
      console.log(who);
      let tile = document.querySelector(`#${who.id.slice(0, 1)}-${c.coordinates}`);
      let shipDiv = document.createElement("div");
      shipDiv.classList.add(who.name);
      shipDiv.innerHTML = `${ship.name}`;

      if (tile.childNodes) {
        tile.innerHTML = "";
      }

      tile.appendChild(shipDiv);
    });
  });
};

const initBoard = (data) => {
  boards.forEach((board, index) => {
    document.querySelector(`.${board.id}`).innerText = data.players[index].name;
    board.style.width = `${Math.min(document.body.clientWidth, document.body.clientHeight) * 0.67}px`;
    board.style.height = `${Math.min(document.body.clientWidth, document.body.clientHeight) * 0.67}px`;
    board.style["grid-template-columns"] = `repeat(${data.size}, 1fr)`;
    board.style["grid-template-rows"] = `repeat(${data.size}, 1fr)`;

    for (let i = 0; i < data.size; i++) {
      for (let j = 0; j < data.size; j++) {
        let tile = document.createElement("div");
        tile.id = `${board.id.slice(0, 1)}-${i + 1}-${j + 1}`;
        //tile.innerHTML = `${i + 1}-${j + 1}`;
        board.appendChild(tile);
      }
    }
    //drawShips(data, index);
  });
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG1CQUFtQixHQUFHLGNBQWM7QUFDaEY7QUFDQTtBQUNBLDZCQUE2QixVQUFVOztBQUV2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQSwrQkFBK0IsU0FBUztBQUN4QywyQkFBMkIsdUVBQXVFO0FBQ2xHLDRCQUE0Qix1RUFBdUU7QUFDbkcscURBQXFELFVBQVU7QUFDL0Qsa0RBQWtELFVBQVU7O0FBRTVELG9CQUFvQixlQUFlO0FBQ25DLHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0EscUJBQXFCLHFCQUFxQixHQUFHLE1BQU0sR0FBRyxNQUFNO0FBQzVELDhCQUE4QixNQUFNLEdBQUcsTUFBTTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcmVzZXQuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcmVzZXQuY3NzP2VkZTAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luaXRCb2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMzAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjMEYyMDI3O1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJDNTM2NCwgIzIwM0E0MywgIzBGMjAyNyk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJDNTM2NCwgIzIwM0E0MywgIzBGMjAyNyk7XG59XG5cbiNtYWluIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbmgxIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5ib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDAuMjVyZW07XG59XG5cbi5ib2FyZCA+IGRpdiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNlbmVteSA+IGRpdiB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMjUpO1xufVxuXG4ucGxheWVyIHtcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbi5lbmVteSB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLmJvcmRlci1wbGF5ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xufVxuXG4uYm9yZGVyLWVuZW15IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG59XG5cbi5oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjUsIDAsIDAuNzUpO1xufVxuXG4ubWlzc2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDAuNSk7XG59XG5cbi5zdW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC43NSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuXG4uZG90IHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGhlaWdodDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jdG9wIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiN0b3AgaW5wdXQge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIHdpZHRoOiAzMyU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGlzYWJsZWQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4jd2lubmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlFQUF5RTtJQUN6RSxpRUFBaUU7QUFDckU7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLFNBQVM7SUFDVCxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NTAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6ICMwRjIwMjc7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJDNTM2NCwgIzIwM0E0MywgIzBGMjAyNyk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyQzUzNjQsICMyMDNBNDMsICMwRjIwMjcpO1xcbn1cXG5cXG4jbWFpbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbmgxIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDAuMjVyZW07XFxufVxcblxcbi5ib2FyZCA+IGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2VuZW15ID4gZGl2IHtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMjUpO1xcbn1cXG5cXG4ucGxheWVyIHtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uZW5lbXkge1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uYm9yZGVyLXBsYXllciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4uYm9yZGVyLWVuZW15IHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NSwgMCwgMC43NSk7XFxufVxcblxcbi5taXNzZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDAuNSk7XFxufVxcblxcbi5zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNzUpO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxufVxcblxcbi5kb3Qge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBoZWlnaHQ6IDQwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4jdG9wIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jdG9wIGlucHV0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIHdpZHRoOiAzMyU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmRpc2FibGVkIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiN3aW5uZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypcbiAgMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbC5cbiovXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi8qXG4gIDIuIFJlbW92ZSBkZWZhdWx0IG1hcmdpblxuKi9cbioge1xuICBtYXJnaW46IDA7XG59XG4vKlxuICAzLiBBbGxvdyBwZXJjZW50YWdlLWJhc2VkIGhlaWdodHMgaW4gdGhlIGFwcGxpY2F0aW9uXG4qL1xuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi8qXG4gIFR5cG9ncmFwaGljIHR3ZWFrcyFcbiAgNC4gQWRkIGFjY2Vzc2libGUgbGluZS1oZWlnaHRcbiAgNS4gSW1wcm92ZSB0ZXh0IHJlbmRlcmluZ1xuKi9cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMS41O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cbi8qXG4gIDYuIEltcHJvdmUgbWVkaWEgZGVmYXVsdHNcbiovXG5pbWcsIHBpY3R1cmUsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4vKlxuICA3LiBSZW1vdmUgYnVpbHQtaW4gZm9ybSB0eXBvZ3JhcGh5IHN0eWxlc1xuKi9cbmlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3Qge1xuICBmb250OiBpbmhlcml0O1xufVxuLypcbiAgOC4gQXZvaWQgdGV4dCBvdmVyZmxvd3NcbiovXG5wLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cbi8qXG4gIDkuIENyZWF0ZSBhIHJvb3Qgc3RhY2tpbmcgY29udGV4dFxuKi9cbiNyb290LCAjX19uZXh0IHtcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FFQztBQUNEO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7O0NBRUM7QUFDRDtFQUNFLFNBQVM7QUFDWDtBQUNBOztDQUVDO0FBQ0Q7RUFDRSxZQUFZO0FBQ2Q7QUFDQTs7OztDQUlDO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsbUNBQW1DO0FBQ3JDO0FBQ0E7O0NBRUM7QUFDRDtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7O0NBRUM7QUFDRDtFQUNFLGFBQWE7QUFDZjtBQUNBOztDQUVDO0FBQ0Q7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTs7Q0FFQztBQUNEO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxcbiovXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4vKlxcbiAgMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luXFxuKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLypcXG4gIDMuIEFsbG93IHBlcmNlbnRhZ2UtYmFzZWQgaGVpZ2h0cyBpbiB0aGUgYXBwbGljYXRpb25cXG4qL1xcbmh0bWwsIGJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4vKlxcbiAgVHlwb2dyYXBoaWMgdHdlYWtzIVxcbiAgNC4gQWRkIGFjY2Vzc2libGUgbGluZS1oZWlnaHRcXG4gIDUuIEltcHJvdmUgdGV4dCByZW5kZXJpbmdcXG4qL1xcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG4vKlxcbiAgNi4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0c1xcbiovXFxuaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi8qXFxuICA3LiBSZW1vdmUgYnVpbHQtaW4gZm9ybSB0eXBvZ3JhcGh5IHN0eWxlc1xcbiovXFxuaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG4vKlxcbiAgOC4gQXZvaWQgdGV4dCBvdmVyZmxvd3NcXG4qL1xcbnAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuLypcXG4gIDkuIENyZWF0ZSBhIHJvb3Qgc3RhY2tpbmcgY29udGV4dFxcbiovXFxuI3Jvb3QsICNfX25leHQge1xcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3Qgc3Vua1NoaXAgPSAoY29vcmRpbmF0ZXMsIHBsYXllciwgZW5lbXkpID0+IHtcbiAgbGV0IHN1bmtUaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZW5lbXkuc2xpY2UoMCwgMSl9LSR7Y29vcmRpbmF0ZXN9YCk7XG4gIGxldCB0aWxlc1RvU3VuayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke2VuZW15fSA+IGRpdmApO1xuICB0aWxlc1RvU3Vuay5mb3JFYWNoKCh0KSA9PiB7XG4gICAgaWYgKHQuaW5uZXJUZXh0ID09IHN1bmtUaWxlLmlubmVyVGV4dCkgZHJhd0F0dGFjayh0LmlkLnNwbGl0KFwiLVwiKS5zcGxpY2UoMSkuam9pbihcIi1cIiksIHBsYXllciwgNTU1KTtcbiAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IGRyYXdBdHRhY2sgPSAoY29vcmRpbmF0ZXMsIHBsYXllciwgcmVzdWx0KSA9PiB7XG4gIGNvbnNvbGUubG9nKGNvb3JkaW5hdGVzLCBwbGF5ZXIsIHJlc3VsdCk7XG4gIGxldCBDU1MgPSBcIlwiO1xuICBsZXQgZW5lbXlTZWxlY3RvciA9IHBsYXllci5pZC5zbGljZSgwLCAxKSA9PSBcInBcIiA/IFwiZW5lbXlcIiA6IFwicGxheWVyXCI7XG5cbiAgc3dpdGNoIChyZXN1bHQpIHtcbiAgICBjYXNlIDE6XG4gICAgICBDU1MgPSBcImhpdFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgQ1NTID0gXCJtaXNzZWRcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIENTUyA9IFwibWlzc2VkXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDU6XG4gICAgICBDU1MgPSBcInN1bmtcIjtcbiAgICAgIHN1bmtTaGlwKGNvb3JkaW5hdGVzLCBwbGF5ZXIsIGVuZW15U2VsZWN0b3IpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1NTU6XG4gICAgICBDU1MgPSBcInN1bmtcIjtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgbGV0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRvdC5jbGFzc0xpc3QgPSBgZG90IGJvcmRlci0ke3BsYXllci5pZH0gJHtDU1N9YDtcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZW5lbXlTZWxlY3Rvci5zbGljZSgwLCAxKX0tJHtjb29yZGluYXRlc31gKS5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtlbmVteVNlbGVjdG9yLnNsaWNlKDAsIDEpfS0ke2Nvb3JkaW5hdGVzfSA+IC5kb3RgKS5yZW1vdmUoKTtcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2VuZW15U2VsZWN0b3Iuc2xpY2UoMCwgMSl9LSR7Y29vcmRpbmF0ZXN9YCkuYXBwZW5kQ2hpbGQoZG90KTtcbn07XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vU2hpcFwiO1xuaW1wb3J0IHsgZHJhd0F0dGFjayB9IGZyb20gXCIuL0RPTVwiO1xuaW1wb3J0IHsgZHJhd1NoaXBzMiB9IGZyb20gXCIuL2luaXRCb2FyZFwiO1xuXG5jbGFzcyBUaWxlIHtcbiAgY29uc3RydWN0b3IoY29vcmRpbmF0ZXMsIHN0YXR1cyA9IFtdKSB7XG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuYXR0YWNrZWRCeSA9IFtdO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3Rvcih4ID0gMTApIHtcbiAgICB0aGlzLnNpemUgPSB4O1xuICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICB0aGlzLmNyZWF0ZUJvYXJkKCk7XG4gICAgdGhpcy5wbGF5ZXJzID0gW107XG4gIH1cblxuICBwbGFjZVNoaXBzKG4sIGluZGV4KSB7XG4gICAgbGV0IHNoaXBOYW1lcyA9IFtcIkJvYXRcIiwgXCJTY29vdGVyXCIsIFwiU2hhcmtcIiwgXCJCaWtlXCIsIFwiRmlzaFwiLCBcIlRhbmtcIl07XG4gICAgbGV0IHNoaXBMZW5ndGggPSBbMiwgNCwgMywgNCwgMiwgM107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGxldCBheGlzID0gaSAlIDIgPT0gMCA/IFwieFwiIDogXCJ5XCI7XG4gICAgICBsZXQgY2FuUGxhY2UgPSBmYWxzZTtcbiAgICAgIHdoaWxlICghY2FuUGxhY2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ4RFwiKTtcbiAgICAgICAgbGV0IHJhbmRvbVRpbGUgPSB0aGlzLmJvYXJkW01hdGguZmxvb3IodGhpcy5ib2FyZC5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV0uY29vcmRpbmF0ZXM7XG4gICAgICAgIGxldCBjYW4gPSB0aGlzLmNoZWNrSWZDYW5QbGFjZVNoaXAocmFuZG9tVGlsZSwgYXhpcywgc2hpcExlbmd0aFtpXSwgdGhpcy5wbGF5ZXJzW2luZGV4XSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNhbik7XG4gICAgICAgIGlmIChjYW4gIT0gZmFsc2UpIHtcbiAgICAgICAgICBjYW5QbGFjZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5wbGFjZVNoaXAocmFuZG9tVGlsZSwgYXhpcywgc2hpcExlbmd0aFtpXSwgdGhpcy5wbGF5ZXJzW2luZGV4XSwgc2hpcE5hbWVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJvdFNob290KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucGxheWVyc1sxXS5wb3NzaWJsZUhpdHMpO1xuICAgIGxldCByYW5kb21IaXQgPSB0aGlzLnBsYXllcnNbMV0ucG9zc2libGVIaXRzW01hdGguZmxvb3IodGhpcy5wbGF5ZXJzWzFdLnBvc3NpYmxlSGl0cy5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV07XG4gICAgdGhpcy5yZWNlaXZlQXR0YWNrKHJhbmRvbUhpdC5jb29yZGluYXRlcywgdGhpcy5wbGF5ZXJzWzFdKTtcbiAgICB0aGlzLnVwZGF0ZVNoaXBzQWxpdmUoKTtcbiAgICB0aGlzLnBsYXllcnNbMV0ucG9zc2libGVIaXRzLnNwbGljZSh0aGlzLnBsYXllcnNbMV0ucG9zc2libGVIaXRzLmluZGV4T2YocmFuZG9tSGl0KSwgMSk7XG4gIH1cblxuICBzaG9vdEJ1dHRvbihlLCBwKSB7XG4gICAgLy8gY29uc29sZS5sb2coYm9hcmQucmVjZWl2ZUF0dGFjayhcIjEtMVwiLCBwbGF5ZXIpKTtcbiAgICBsZXQgY29vcmRpbmF0ZXM7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSAhPSBcIlwiKSB7XG4gICAgICBjb29yZGluYXRlcyA9IGUudGFyZ2V0Lm9mZnNldFBhcmVudC5pZC5zcGxpdChcIi1cIikuc3BsaWNlKDEpLmpvaW4oXCItXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb29yZGluYXRlcyA9IGUudGFyZ2V0LmlkLnNwbGl0KFwiLVwiKS5zcGxpY2UoMSkuam9pbihcIi1cIik7XG4gICAgfVxuICAgIGxldCBjYW5IaXQgPSB0aGlzLnBsYXllcnNbMF0ucG9zc2libGVIaXRzLmZpbmQoKHIpID0+IHIuY29vcmRpbmF0ZXMgPT0gY29vcmRpbmF0ZXMpO1xuICAgIC8vY29uc29sZS5sb2coXCJjYW4gaGl0XCIsIGNhbkhpdCk7XG4gICAgaWYgKGNhbkhpdCkge1xuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgICAgdGhpcy5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzLCBwKTtcbiAgICAgIHRoaXMucGxheWVyc1swXS5wb3NzaWJsZUhpdHMuc3BsaWNlKHRoaXMucGxheWVyc1swXS5wb3NzaWJsZUhpdHMuaW5kZXhPZih0aGlzLnBsYXllcnNbMF0ucG9zc2libGVIaXRzLmZpbmQoKHIpID0+IHIuY29vcmRpbmF0ZXMgPT0gY29vcmRpbmF0ZXMpKSwgMSk7XG4gICAgICB0aGlzLnVwZGF0ZVNoaXBzQWxpdmUoKTtcbiAgICAgIHRoaXMuYm90U2hvb3QoKTtcbiAgICB9XG4gIH1cblxuICBlbmRHYW1lKHdpbm5lciwgc2hpcHNMZWZ0LCBsb3Nlcikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpLnN0eWxlW1widHJhbnNpdGlvbi1kdXJhdGlvblwiXSA9IFwiMTAwMG1zXCI7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIikuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICBpZiAoc2hpcHNMZWZ0ID09IDc3Nykge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpbm5lclwiKS5pbm5lckhUTUwgPSBgJHt3aW5uZXIubmFtZX0gdGllZCBhZ2FpbnN0ICR7bG9zZXIubmFtZX0hYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2lubmVyXCIpLmlubmVySFRNTCA9IGAke3dpbm5lci5uYW1lfSB3b24gYWdhaW5zdCAke2xvc2VyLm5hbWV9IHdpdGggJHtzaGlwc0xlZnR9IHNoaXBzIGxlZnQhYDtcbiAgICAgIH1cbiAgICB9LCA1MDApO1xuICB9XG5cbiAgcGxhY2VTaGlwQnV0dG9uKGUsIHApIHtcbiAgICAvLyBjb25zb2xlLmxvZyhlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhwKTtcbiAgICBpZiAocC5zaGlwcy5sZW5ndGggPCA0KSB7XG4gICAgICBsZXQgY29vcmRpbmF0ZXMgPSBlLnRhcmdldC5pZC5zcGxpdChcIi1cIikuc3BsaWNlKDEpLmpvaW4oXCItXCIpO1xuICAgICAgbGV0IGF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F4aXNcIikudmFsdWUuc3BsaXQoXCIsIFwiKVswXTtcbiAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLnZhbHVlLnNwbGl0KFwiLCBcIilbMV07XG4gICAgICBsZXQgbGVuZ3RoID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXhpc1wiKS52YWx1ZS5zcGxpdChcIiwgXCIpWzJdKTtcbiAgICAgIGxldCBzaGlwID0gdGhpcy5wbGFjZVNoaXAoY29vcmRpbmF0ZXMsIGF4aXMsIGxlbmd0aCwgcCwgbmFtZSk7XG4gICAgICBpZiAoc2hpcCA9PSBmYWxzZSkge1xuICAgICAgICBhbGVydChcIllvdSBtYWRlIGEgbWlzdGFrZSwgbWFrZSBzdXJlIHRvIGRvdWJsZS1jaGVjay5cIik7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3R1cm5cIikuaW5uZXJUZXh0ID0gYCR7dGhpcy5wbGF5ZXJzWzBdLm5hbWV9J3MgdHVybiB0byBwbGFjZSBzaGlwICgke3RoaXMucGxheWVyc1swXS5zaGlwcy5sZW5ndGh9LzQgc2hpcHMpYDtcbiAgICAgIHRoaXMuYm90aFBsYXllcnNSZWFkeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIllvdSBoYXZlIG1heGltdW0gYW1vdW50IG9mIHNoaXBzXCIpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVNoaXBzQWxpdmUoKSB7XG4gICAgbGV0IHBsYXllclNoaXBzID0gdGhpcy5wbGF5ZXJzWzBdLnNoaXBzLnJlZHVjZSgoYWNjdW11bGF0b3IsIHZhbHVlKSA9PiB7XG4gICAgICBpZiAoIXZhbHVlLmlzU3VuaykgYWNjdW11bGF0b3IrKztcbiAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICB9LCAwKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllclwiKS5pbm5lclRleHQgPSBgJHt0aGlzLnBsYXllcnNbMF0ubmFtZX0gPT4gJHtwbGF5ZXJTaGlwc30vNiBzaGlwcyBhbGl2ZS5gO1xuICAgIGxldCBib3RTaGlwcyA9IHRoaXMucGxheWVyc1sxXS5zaGlwcy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCB2YWx1ZSkgPT4ge1xuICAgICAgaWYgKCF2YWx1ZS5pc1N1bmspIGFjY3VtdWxhdG9yKys7XG4gICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgfSwgMCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbmVteVwiKS5pbm5lclRleHQgPSBgJHt0aGlzLnBsYXllcnNbMV0ubmFtZX0gPT4gJHtib3RTaGlwc30vNiBzaGlwcyBhbGl2ZS5gO1xuXG4gICAgaWYgKHBsYXllclNoaXBzID09IDAgJiYgYm90U2hpcHMgPT0gMCkge1xuICAgICAgdGhpcy5lbmRHYW1lKHRoaXMucGxheWVyc1sxXSwgNzc3LCB0aGlzLnBsYXllcnNbMl0pO1xuICAgIH0gZWxzZSBpZiAocGxheWVyU2hpcHMgPT0gMCkge1xuICAgICAgdGhpcy5lbmRHYW1lKHRoaXMucGxheWVyc1sxXSwgYm90U2hpcHMsIHRoaXMucGxheWVyc1swXSk7XG4gICAgfSBlbHNlIGlmIChib3RTaGlwcyA9PSAwKSB7XG4gICAgICB0aGlzLmVuZEdhbWUodGhpcy5wbGF5ZXJzWzBdLCBwbGF5ZXJTaGlwcywgdGhpcy5wbGF5ZXJzWzFdKTtcbiAgICB9XG4gIH1cblxuICBib3RoUGxheWVyc1JlYWR5KCkge1xuICAgIGlmICh0aGlzLnBsYXllcnNbMF0uc2hpcHMubGVuZ3RoICsgdGhpcy5wbGF5ZXJzWzFdLnNoaXBzLmxlbmd0aCA9PSAxMikge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0dXJuXCIpLmlubmVyVGV4dCA9IGAke3RoaXMucGxheWVyc1swXS5uYW1lfSdzIHR1cm4gdG8gc2hvb3RgO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNheGlzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNwbGF5ZXIgPiBkaXZcIikuZm9yRWFjaCgocGxheWVyVGlsZSkgPT4ge1xuICAgICAgICBwbGF5ZXJUaWxlLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcbiAgICAgIH0pO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2VuZW15ID4gZGl2XCIpLmZvckVhY2goKGVuZW15VGlsZSkgPT4ge1xuICAgICAgICBlbmVteVRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2hvb3RCdXR0b24oZXZlbnQsIHRoaXMucGxheWVyc1swXSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudXBkYXRlU2hpcHNBbGl2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0R2FtZSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BsYXllciA+IGRpdlwiKS5mb3JFYWNoKChwbGF5ZXJUaWxlKSA9PiB7XG4gICAgICBwbGF5ZXJUaWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5wbGFjZVNoaXBCdXR0b24oZXZlbnQsIHRoaXMucGxheWVyc1swXSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMucGxhY2VTaGlwcyg2LCAwKTtcblxuICAgIHRoaXMucGxhY2VTaGlwcyg2LCAxKTtcblxuICAgIHRoaXMuYm90aFBsYXllcnNSZWFkeSgpO1xuXG4gICAgLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3R1cm5cIikuaW5uZXJUZXh0ID0gYCR7dGhpcy5wbGF5ZXJzWzBdLm5hbWV9J3MgdHVybiB0byBwbGFjZSBzaGlwICgke3RoaXMucGxheWVyc1swXS5zaGlwcy5sZW5ndGh9LzQgc2hpcHMpYDtcbiAgfVxuXG4gIGFkZFBsYXllcihwbGF5ZXIsIGlkKSB7XG4gICAgcGxheWVyLnBvc3NpYmxlSGl0cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5ib2FyZCkpO1xuICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcik7XG4gIH1cblxuICBjcmVhdGVCb2FyZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuc2l6ZTsgaisrKSB7XG4gICAgICAgIHRoaXMuYm9hcmQucHVzaChuZXcgVGlsZShgJHtpICsgMX0tJHtqICsgMX1gKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpbnQoKSB7XG4gICAgbGV0IEFMTCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplOyBpKyspIHtcbiAgICAgIGxldCBMSU5FID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuc2l6ZTsgaisrKSB7XG4gICAgICAgIExJTkUucHVzaCh0aGlzLmJvYXJkW2ogKyBpICogdGhpcy5zaXplXSk7XG4gICAgICB9XG4gICAgICBBTEwucHVzaChMSU5FKTtcbiAgICB9XG5cbiAgICAvL2NvbnNvbGUubG9nKEFMTCk7XG5cbiAgICBBTEwuZm9yRWFjaCgoQUEpID0+IHtcbiAgICAgIGxldCBMID0gXCJcIjtcbiAgICAgIEFBLmZvckVhY2goKEEpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coQS5zdGF0dXMub3duZXIubmFtZSk7XG4gICAgICAgIGlmIChBLnN0YXR1cy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coQS5zdGF0dXMpO1xuICAgICAgICAgIEwgKz0gYCR7QS5jb29yZGluYXRlc30gJHtBLnN0YXR1c1swXS5vd25lci5uYW1lfVxcdGA7XG4gICAgICAgIH0gZWxzZSBpZiAoQS5zdGF0dXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIEwgKz0gYCR7QS5jb29yZGluYXRlc30gQk9USFxcdGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgTCArPSBgJHtBLmNvb3JkaW5hdGVzfVxcdFxcdGA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coTCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgdGlsZUNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmJvYXJkLmxlbmd0aDtcbiAgfVxuXG4gIGNoZWNrSGVscGVyKHRpbGVTdGF0dXNlcywgdGFyZ2V0VGlsZXMsIHBsYXllcikge1xuICAgIC8vY29uc29sZS5sb2codGlsZVN0YXR1c2VzKTtcbiAgICAvL2NvbnNvbGUubG9nKHRhcmdldFRpbGVzLmZpbHRlcigodCkgPT4gdCAhPSBcIlwiKSk7XG4gICAgLy9jb25zb2xlLmxvZyh0YXJnZXRUaWxlcyk7XG4gICAgbGV0IFggPSB0YXJnZXRUaWxlcy5yZWR1Y2UoKGluaXRpYWwsIHZhbHVlKSA9PiB7XG4gICAgICAvL2NvbnNvbGUubG9nKHZhbHVlLnN0YXR1cy5sZW5ndGgpO1xuICAgICAgLy9jb25zb2xlLmxvZyh2YWx1ZS5zdGF0dXMuc29tZSgoVikgPT4gVi5vd25lciA9PSBwbGF5ZXIpKTtcbiAgICAgIGluaXRpYWwucHVzaCh2YWx1ZS5zdGF0dXMuc29tZSgoVikgPT4gVi5vd25lciA9PSBwbGF5ZXIpKTtcbiAgICAgIC8vaW5pdGlhbC5wdXNoKHZhbHVlLnN0YXR1cy5vd25lciAhPSBwbGF5ZXIpO1xuICAgICAgcmV0dXJuIGluaXRpYWw7XG4gICAgfSwgW10pO1xuICAgIC8vY29uc29sZS5sb2coWCk7XG4gICAgcmV0dXJuIFguc29tZSgoSCkgPT4gSCA9PSB0cnVlKSA/IGZhbHNlIDogdGFyZ2V0VGlsZXM7XG4gIH1cblxuICBjaGVja0lmQ2FuUGxhY2VTaGlwKGNvb3JkaW5hdGVzLCBheGlzLCBsZW5ndGgsIHBsYXllcikge1xuICAgIGxldCB4ID0gTnVtYmVyKGNvb3JkaW5hdGVzLnNwbGl0KFwiLVwiKVswXSk7XG4gICAgbGV0IHkgPSBOdW1iZXIoY29vcmRpbmF0ZXMuc3BsaXQoXCItXCIpWzFdKTtcbiAgICBsZXQgdGlsZVN0YXR1c2VzID0gW107XG4gICAgbGV0IHRhcmdldFRpbGVzID0gW107XG5cbiAgICBpZiAoYXhpcyA9PSBcInhcIikge1xuICAgICAgaWYgKHkgKyAobGVuZ3RoIC0gMSkgPD0gdGhpcy5zaXplKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYCR7eH0tJHtpfWApO1xuICAgICAgICAgIGxldCB0aWxlID0gdGhpcy5ib2FyZC5maW5kKCh4eHgpID0+IHh4eC5jb29yZGluYXRlcyA9PSBgJHt4fS0ke2l9YCk7XG4gICAgICAgICAgdGFyZ2V0VGlsZXMucHVzaCh0aWxlKTtcbiAgICAgICAgICB0aWxlU3RhdHVzZXMucHVzaCh0aWxlLnN0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGF4aXMgPT0gXCJ5XCIpIHtcbiAgICAgIGlmICh4ICsgKGxlbmd0aCAtIDEpIDw9IHRoaXMuc2l6ZSkge1xuICAgICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBsZW5ndGg7IGkrKykge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke2l9LSR7eX1gKTtcbiAgICAgICAgICBsZXQgdGlsZSA9IHRoaXMuYm9hcmQuZmluZCgoeHh4KSA9PiB4eHguY29vcmRpbmF0ZXMgPT0gYCR7aX0tJHt5fWApO1xuICAgICAgICAgIHRhcmdldFRpbGVzLnB1c2godGlsZSk7XG4gICAgICAgICAgdGlsZVN0YXR1c2VzLnB1c2godGlsZS5zdGF0dXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2tIZWxwZXIodGlsZVN0YXR1c2VzLCB0YXJnZXRUaWxlcywgcGxheWVyKTtcbiAgfVxuXG4gIHBsYWNlU2hpcChjb29yZGluYXRlcywgYXhpcywgbGVuZ3RoLCBwbGF5ZXIsIG5hbWUgPSBcIlNoaXBcIikge1xuICAgIGxldCBpbmRleCA9IHBsYXllci5pZCA9PSBcInBsYXllclwiID8gMCA6IDE7XG4gICAgbGV0IGNoZWNrID0gdGhpcy5jaGVja0lmQ2FuUGxhY2VTaGlwKGNvb3JkaW5hdGVzLCBheGlzLCBsZW5ndGgsIHBsYXllcik7XG4gICAgaWYgKGNoZWNrKSB7XG4gICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKGNoZWNrLCBsZW5ndGgsIHBsYXllciwgbmFtZSk7XG4gICAgICBwbGF5ZXIuYWRkU2hpcChzaGlwKTtcbiAgICAgIGNvbnNvbGUubG9nKGNoZWNrKTtcbiAgICAgIGNoZWNrLmZvckVhY2goKGMpID0+IGMuc3RhdHVzLnB1c2goc2hpcCkpO1xuICAgICAgZHJhd1NoaXBzMih0aGlzLmJvYXJkLCBwbGF5ZXIpO1xuICAgICAgcmV0dXJuIHNoaXA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzLCBwbGF5ZXIpIHtcbiAgICAvLyBDT0RFUzogMSA9PiBhdHRhY2sgaGl0IGVuZW15LCAyID0gYXR0YWNrIG1pc3NlZCwgMyA9IGF0dGFja2VkIHlvdXIgb3duLCA0ID0gYWxyZWFkeSBhdHRhY2tlZCwgNSA9IGF0dGFjayBoaXQgYW5kIHN1bmsgZW5lbXlcbiAgICBjb25zb2xlLmxvZyhjb29yZGluYXRlcyk7XG4gICAgbGV0IHRpbGUgPSB0aGlzLmJvYXJkLmZpbmQoKHQpID0+IHQuY29vcmRpbmF0ZXMgPT0gY29vcmRpbmF0ZXMpO1xuICAgIC8vY29uc29sZS5sb2codGlsZS5zdGF0dXMubGVuZ3RoKTtcbiAgICAvL2xldCBzdGF0dXNFbXB0eSA9IHRpbGUuc3RhdHVzID09IFwiXCI7XG4gICAgY29uc29sZS5sb2codGhpcy5ib2FyZCk7XG4gICAgY29uc29sZS5sb2codGlsZSk7XG4gICAgbGV0IHN0YXR1c0VtcHR5ID0gdGlsZS5zdGF0dXMubGVuZ3RoID09IDA7XG4gICAgbGV0IGF0dGFja2VkQWxyZWFkeSA9IHRpbGUuYXR0YWNrZWRCeS5pbmNsdWRlcyhwbGF5ZXIpO1xuICAgIGlmIChhdHRhY2tlZEFscmVhZHkpIHtcbiAgICAgIHJldHVybiA0O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoc3RhdHVzRW1wdHkpIHtcbiAgICAgICAgdGlsZS5hdHRhY2tlZEJ5LnB1c2gocGxheWVyKTtcbiAgICAgICAgZHJhd0F0dGFjayhjb29yZGluYXRlcywgcGxheWVyLCAyKTtcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaG93TWFueVNoaXBzID0gdGlsZS5zdGF0dXMubGVuZ3RoO1xuICAgICAgICBpZiAoaG93TWFueVNoaXBzID4gMSkge1xuICAgICAgICAgIGxldCBlbmVteVNoaXAgPSB0aWxlLnN0YXR1cy5maW5kKChzKSA9PiBzLm93bmVyICE9IHBsYXllcik7XG4gICAgICAgICAgZW5lbXlTaGlwLmhpdCgpO1xuICAgICAgICAgIHRpbGUuYXR0YWNrZWRCeS5wdXNoKHBsYXllcik7XG4gICAgICAgICAgZHJhd0F0dGFjayhjb29yZGluYXRlcywgcGxheWVyLCBlbmVteVNoaXAuaXNTdW5rID8gNSA6IDEpO1xuICAgICAgICAgIHJldHVybiBlbmVteVNoaXAuaXNTdW5rID8gNSA6IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGhpdE15T3duID0gdGlsZS5zdGF0dXNbMF0ub3duZXIgPT0gcGxheWVyO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaGl0IG15IG93bj9cIiwgaGl0TXlPd24pO1xuICAgICAgICAgIGlmIChoaXRNeU93bikge1xuICAgICAgICAgICAgZHJhd0F0dGFjayhjb29yZGluYXRlcywgcGxheWVyLCAzKTtcbiAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aWxlLnN0YXR1c1swXS5oaXQoKTtcbiAgICAgICAgICAgIHRpbGUuYXR0YWNrZWRCeS5wdXNoKHBsYXllcik7XG4gICAgICAgICAgICBkcmF3QXR0YWNrKGNvb3JkaW5hdGVzLCBwbGF5ZXIsIHRpbGUuc3RhdHVzWzBdLmlzU3VuayA/IDUgOiAxKTtcbiAgICAgICAgICAgIHJldHVybiB0aWxlLnN0YXR1c1swXS5pc1N1bmsgPyA1IDogMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcmludEF0dGFja1Jlc3VsdChhdHRhY2tlciwgZW5lbXksIGNvZGUpIHtcbiAgICAvLyBDT0RFUzogMSA9PiBhdHRhY2sgaGl0IGVuZW15LCAyID0gYXR0YWNrIG1pc3NlZCwgMyA9IGF0dGFja2VkIHlvdXIgb3duLCA0ID0gYWxyZWFkeSBhdHRhY2tlZCwgNSA9IGF0dGFjayBoaXQgYW5kIHN1bmsgZW5lbXlcbiAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIGAke2F0dGFja2VyLm5hbWV9IGhpdCAke2VuZW15Lm5hbWV9IHNoaXAuYDtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIGAke2F0dGFja2VyLm5hbWV9IG1pc3NlZC5gO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gYCR7YXR0YWNrZXIubmFtZX0gdHJpZWQgdG8gYXR0YWNrIGhpcyBvd24gc2hpcC5gO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gYCR7YXR0YWNrZXIubmFtZX0gYWxyZWFkeSBhdHRhY2tlZCB0aGlzIHRpbGUuYDtcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcmV0dXJuIGAke2F0dGFja2VyLm5hbWV9IGhpdCBhbmQgc3VuayAke2VuZW15Lm5hbWV9IHNoaXAuYDtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpZCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICB0aGlzLnBvc3NpYmxlSGl0cyA9IFtdO1xuICB9XG5cbiAgYWRkU2hpcChzaGlwKSB7XG4gICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICB9XG5cbiAgZ2V0IHNoaXBDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlwcy5sZW5ndGg7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoY29vcmRpbmF0ZXMsIGxlbmd0aCwgb3duZXIsIG5hbWUgPSBcIlNoaXBcIikge1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdHMgKz0gMTtcbiAgfVxuICBnZXQgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGg7XG4gIH1cbn1cbiIsImltcG9ydCBcIi4vcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9TaGlwXCI7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcbmltcG9ydCB7IGluaXRCb2FyZCwgdXBkYXRlRE9NIH0gZnJvbSBcIi4vaW5pdEJvYXJkXCI7XG5cbi8vIGxldCBib2FyZCA9IG5ldyBHYW1lYm9hcmQoTnVtYmVyKHByb21wdChcIkhvdyBtYW55IHRpbGVzPyBGb3IgOHg4IHR5cGUgaW4gOFwiKSkpO1xuXG5sZXQgYm9hcmQgPSBuZXcgR2FtZWJvYXJkKDgpO1xuXG4vLyBsZXQgcGxheWVyID0gbmV3IFBsYXllcihwcm9tcHQoXCJUeXBlIGluIHlvdXIgcGxheWVyIG5hbWVcIiksIFwicGxheWVyXCIpO1xubGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoXCJGbGlja1wiLCBcInBsYXllclwiKTtcbmJvYXJkLmFkZFBsYXllcihwbGF5ZXIpO1xubGV0IGVuZW15ID0gbmV3IFBsYXllcihcIkFJXCIsIFwiZW5lbXlcIik7XG5ib2FyZC5hZGRQbGF5ZXIoZW5lbXkpO1xuXG5pbml0Qm9hcmQoYm9hcmQpO1xuXG4vLyBjb25zb2xlLmxvZyhib2FyZC5wbGFjZVNoaXAoXCIxLTRcIiwgXCJ4XCIsIDQsIGVuZW15LCBcIkJpZyBzaGlwXCIpKTtcbi8vIGNvbnNvbGUubG9nKGJvYXJkLnBsYWNlU2hpcChcIjMtNFwiLCBcInhcIiwgMiwgcGxheWVyLCBcIkpldHNraVwiKSk7XG4vLyBjb25zb2xlLmxvZyhib2FyZC5wbGFjZVNoaXAoXCIyLTJcIiwgXCJ5XCIsIDQsIHBsYXllciwgXCJZYWNodFwiKSk7XG4vLyBjb25zb2xlLmxvZyhib2FyZC5wbGFjZVNoaXAoXCI3LTJcIiwgXCJ4XCIsIDMsIHBsYXllciwgXCJVLUJvb3RcIikpO1xuXG5ib2FyZC5zdGFydEdhbWUoKTtcbi8vIGNvbnNvbGUubG9nKGJvYXJkLnBsYWNlU2hpcChcIjItMVwiLCBcInlcIiwgNCwgZW5lbXksIFwiVS1Cb290XCIpKTtcbi8vIGNvbnNvbGUubG9nKGJvYXJkLnBsYWNlU2hpcChcIjUtNFwiLCBcInhcIiwgNCwgZW5lbXksIFwiQ3J1aXNlIHNoaXBcIikpO1xuXG4vLyAvLyBib2FyZC5wcmludCgpO1xuXG4vLyBjb25zb2xlLmxvZyhib2FyZC5wbGFjZVNoaXAoXCIxLTJcIiwgXCJ4XCIsIDMsIHBsYXllciwgXCJTbWFsbCBzaGlwXCIpKTtcblxuLy8gY29uc29sZS5sb2coYm9hcmQucmVjZWl2ZUF0dGFjayhcIjEtMVwiLCBwbGF5ZXIpKTsgLy8gbWlzc1xuLy8gY29uc29sZS5sb2coYm9hcmQucmVjZWl2ZUF0dGFjayhcIjEtMVwiLCBlbmVteSkpOyAvLyBtaXNzXG4vLyBjb25zb2xlLmxvZyhib2FyZC5yZWNlaXZlQXR0YWNrKFwiMS0zXCIsIHBsYXllcikpOyAvLyBtaXNzO1xuLy8gY29uc29sZS5sb2coYm9hcmQucmVjZWl2ZUF0dGFjayhcIjMtNFwiLCBlbmVteSkpOyAvLyBoaXRcbi8vIGNvbnNvbGUubG9nKGJvYXJkLnJlY2VpdmVBdHRhY2soXCIxLTVcIiwgcGxheWVyKSk7IC8vIGhpdFxuLy8gY29uc29sZS5sb2coYm9hcmQucmVjZWl2ZUF0dGFjayhcIjMtNVwiLCBlbmVteSkpOyAvLyBoaXQgKyBzdW5rXG4iLCJleHBvcnQgbGV0IGJvYXJkcyA9IFtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllclwiKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbmVteVwiKV07XG5cbi8vIGV4cG9ydCBjb25zdCBkcmF3U2hpcHMxID0gKGRhdGEsIGluZGV4KSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGRhdGEsIGluZGV4KTtcbi8vICAgbGV0IHdobyA9IGRhdGEucGxheWVyc1tpbmRleF07XG4vLyAgIGNvbnNvbGUubG9nKHdobyk7XG4vLyAgIHdoby5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coc2hpcCwgXCJzaGlwXCIpO1xuLy8gICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoYykgPT4ge1xuLy8gICAgICAgY29uc29sZS5sb2cod2hvKTtcbi8vICAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7d2hvLmlkLnNsaWNlKDAsIDEpfS0ke2MuY29vcmRpbmF0ZXN9YCk7XG4vLyAgICAgICBsZXQgc2hpcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgICBzaGlwRGl2LmNsYXNzTGlzdC5hZGQod2hvLm5hbWUpO1xuLy8gICAgICAgc2hpcERpdi5pbm5lckhUTUwgPSBgJHtzaGlwLm5hbWV9YDtcblxuLy8gICAgICAgaWYgKHRpbGUuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoc2hpcERpdik7XG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuLy8gfTtcblxuZXhwb3J0IGNvbnN0IGRyYXdTaGlwczIgPSAoZGF0YSwgcGxheWVyKSA9PiB7XG4gIGxldCB3aG8gPSBwbGF5ZXI7XG4gIGNvbnNvbGUubG9nKHdobyk7XG4gIHdoby5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgY29uc29sZS5sb2coc2hpcCwgXCJzaGlwXCIpO1xuICAgIHNoaXAuY29vcmRpbmF0ZXMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgY29uc29sZS5sb2cod2hvKTtcbiAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7d2hvLmlkLnNsaWNlKDAsIDEpfS0ke2MuY29vcmRpbmF0ZXN9YCk7XG4gICAgICBsZXQgc2hpcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzaGlwRGl2LmNsYXNzTGlzdC5hZGQod2hvLm5hbWUpO1xuICAgICAgc2hpcERpdi5pbm5lckhUTUwgPSBgJHtzaGlwLm5hbWV9YDtcblxuICAgICAgaWYgKHRpbGUuY2hpbGROb2Rlcykge1xuICAgICAgICB0aWxlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICB9XG5cbiAgICAgIHRpbGUuYXBwZW5kQ2hpbGQoc2hpcERpdik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXRCb2FyZCA9IChkYXRhKSA9PiB7XG4gIGJvYXJkcy5mb3JFYWNoKChib2FyZCwgaW5kZXgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtib2FyZC5pZH1gKS5pbm5lclRleHQgPSBkYXRhLnBsYXllcnNbaW5kZXhdLm5hbWU7XG4gICAgYm9hcmQuc3R5bGUud2lkdGggPSBgJHtNYXRoLm1pbihkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCkgKiAwLjY3fXB4YDtcbiAgICBib2FyZC5zdHlsZS5oZWlnaHQgPSBgJHtNYXRoLm1pbihkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCkgKiAwLjY3fXB4YDtcbiAgICBib2FyZC5zdHlsZVtcImdyaWQtdGVtcGxhdGUtY29sdW1uc1wiXSA9IGByZXBlYXQoJHtkYXRhLnNpemV9LCAxZnIpYDtcbiAgICBib2FyZC5zdHlsZVtcImdyaWQtdGVtcGxhdGUtcm93c1wiXSA9IGByZXBlYXQoJHtkYXRhLnNpemV9LCAxZnIpYDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5zaXplOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YS5zaXplOyBqKyspIHtcbiAgICAgICAgbGV0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aWxlLmlkID0gYCR7Ym9hcmQuaWQuc2xpY2UoMCwgMSl9LSR7aSArIDF9LSR7aiArIDF9YDtcbiAgICAgICAgLy90aWxlLmlubmVySFRNTCA9IGAke2kgKyAxfS0ke2ogKyAxfWA7XG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHRpbGUpO1xuICAgICAgfVxuICAgIH1cbiAgICAvL2RyYXdTaGlwcyhkYXRhLCBpbmRleCk7XG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==