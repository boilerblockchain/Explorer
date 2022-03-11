"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/blockInfo";
exports.ids = ["pages/api/blockInfo"];
exports.modules = {

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ "(api)/./pages/api/blockInfo.js":
/*!********************************!*\
  !*** ./pages/api/blockInfo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);\n\nvar provider = ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.getDefaultProvider();\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        provider.getBlock().then((block)=>{\n            res.status(200).json(block);\n        });\n    }\n//   if (req.method === \"POST\") {\n//     const blockNo = req.body.blockNo;\n//     res.status(201).json(blockNo);\n//   }\n};\nfunction isBlock() {\n    if (provider.getBlock == null) {\n        return false;\n    } else {\n        return true;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvY2tJbmZvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixHQUFHLENBQUNDLFFBQVEsR0FBR0QsdUVBQW1DO0FBRW5DLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQ3pDLEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBSyxNQUFFLENBQUM7UUFDekJOLFFBQVEsQ0FBQ08sUUFBUSxHQUFHQyxJQUFJLEVBQUVDLEtBQUssR0FBSyxDQUFDO1lBQ25DSixHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0YsS0FBSztRQUM1QixDQUFDO0lBQ0gsQ0FBQztBQUVELEVBQWlDO0FBQ2pDLEVBQXdDO0FBQ3hDLEVBQXFDO0FBQ3JDLEVBQU07QUFDUixDQUFDO1NBRVFHLE9BQU8sR0FBRyxDQUFDO0lBQ2xCLEVBQUUsRUFBRVosUUFBUSxDQUFDTyxRQUFRLElBQUksSUFBSSxFQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLEtBQUs7SUFDZCxDQUFDLE1BQU0sQ0FBQztRQUNOLE1BQU0sQ0FBQyxJQUFJO0lBQ2IsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBsb3Jlci8uL3BhZ2VzL2FwaS9ibG9ja0luZm8uanM/OTU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5cbnZhciBwcm92aWRlciA9IGV0aGVycy5wcm92aWRlcnMuZ2V0RGVmYXVsdFByb3ZpZGVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICBwcm92aWRlci5nZXRCbG9jaygpLnRoZW4oKGJsb2NrKSA9PiB7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihibG9jayk7XG4gICAgfSk7XG4gIH1cblxuICAvLyAgIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAvLyAgICAgY29uc3QgYmxvY2tObyA9IHJlcS5ib2R5LmJsb2NrTm87XG4gIC8vICAgICByZXMuc3RhdHVzKDIwMSkuanNvbihibG9ja05vKTtcbiAgLy8gICB9XG59XG5cbmZ1bmN0aW9uIGlzQmxvY2soKSB7XG4gIGlmIChwcm92aWRlci5nZXRCbG9jayA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZXRoZXJzIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJnZXREZWZhdWx0UHJvdmlkZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZ2V0QmxvY2siLCJ0aGVuIiwiYmxvY2siLCJzdGF0dXMiLCJqc29uIiwiaXNCbG9jayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/blockInfo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/blockInfo.js"));
module.exports = __webpack_exports__;

})();