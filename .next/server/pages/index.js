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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cGxvcmVyLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz83MTI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19iQ09oWVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfX19fVDdLXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19zdVBFUlwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX0d4UTg1XCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18yN190YlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/api/blockInfo.js":
/*!********************************!*\
  !*** ./pages/api/blockInfo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);\n\nvar provider = ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.getDefaultProvider();\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        provider.getBlock().then((block)=>{\n            res.status(200).json(block);\n        });\n    }\n//   if (req.method === \"POST\") {\n//     const blockNo = req.body.blockNo;\n//     res.status(201).json(blockNo);\n//   }\n};\nfunction isBlock() {\n    if (provider.getBlock == null) {\n        return false;\n    } else {\n        return true;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYmxvY2tJbmZvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUUvQixHQUFHLENBQUNDLFFBQVEsR0FBR0QsdUVBQW1DO0FBRW5DLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQ3pDLEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBSyxNQUFFLENBQUM7UUFDekJOLFFBQVEsQ0FBQ08sUUFBUSxHQUFHQyxJQUFJLEVBQUVDLEtBQUssR0FBSyxDQUFDO1lBQ25DSixHQUFHLENBQUNLLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0YsS0FBSztRQUM1QixDQUFDO0lBQ0gsQ0FBQztBQUVELEVBQWlDO0FBQ2pDLEVBQXdDO0FBQ3hDLEVBQXFDO0FBQ3JDLEVBQU07QUFDUixDQUFDO1NBRVFHLE9BQU8sR0FBRyxDQUFDO0lBQ2xCLEVBQUUsRUFBRVosUUFBUSxDQUFDTyxRQUFRLElBQUksSUFBSSxFQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLEtBQUs7SUFDZCxDQUFDLE1BQU0sQ0FBQztRQUNOLE1BQU0sQ0FBQyxJQUFJO0lBQ2IsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBsb3Jlci8uL3BhZ2VzL2FwaS9ibG9ja0luZm8uanM/OTU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5cbnZhciBwcm92aWRlciA9IGV0aGVycy5wcm92aWRlcnMuZ2V0RGVmYXVsdFByb3ZpZGVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICBwcm92aWRlci5nZXRCbG9jaygpLnRoZW4oKGJsb2NrKSA9PiB7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihibG9jayk7XG4gICAgfSk7XG4gIH1cblxuICAvLyAgIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAvLyAgICAgY29uc3QgYmxvY2tObyA9IHJlcS5ib2R5LmJsb2NrTm87XG4gIC8vICAgICByZXMuc3RhdHVzKDIwMSkuanNvbihibG9ja05vKTtcbiAgLy8gICB9XG59XG5cbmZ1bmN0aW9uIGlzQmxvY2soKSB7XG4gIGlmIChwcm92aWRlci5nZXRCbG9jayA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZXRoZXJzIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJnZXREZWZhdWx0UHJvdmlkZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZ2V0QmxvY2siLCJ0aGVuIiwiYmxvY2siLCJzdGF0dXMiLCJqc29uIiwiaXNCbG9jayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/blockInfo.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_blockInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/blockInfo */ \"./pages/api/blockInfo.js\");\n\n\n\n\nfunction Home() {\n    if (_api_blockInfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n        var { 0: blockNo , 1: setBlockNo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n        var { 0: blockInfo , 1: setBlockInfo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n        var fetchBlockInfo = (blockNo)=>{\n            fetch(\"/api/blockInfo\").then((res)=>res.json()\n            ).then((data)=>{\n                setBlockInfo(data);\n                console.log(data);\n            });\n        };\n        // const blockNo = async () => {\n        //   const response = await fetch(\"/api/blockInfo\", {\n        //     method: \"POST\",\n        //     body: JSON.stringify({ blockNo }),\n        //   });\n        //   const data = await response.json();\n        //   console.log(data);\n        // };\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Enter Block number or Transaction number\"\n                }, void 0, false, {\n                    fileName: \"/Users/kshitijchakravarty/Desktop/BoilerBlockchain/BUIDL/Explorer/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: blockNo,\n                    onChange: (e)=>setBlockNo(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/kshitijchakravarty/Desktop/BoilerBlockchain/BUIDL/Explorer/pages/index.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    style: {\n                        height: 20,\n                        width: 100\n                    },\n                    onClick: (e)=>fetchBlockInfo(blockNo)\n                    ,\n                    children: \"Fetch data\"\n                }, void 0, false, {\n                    fileName: \"/Users/kshitijchakravarty/Desktop/BoilerBlockchain/BUIDL/Explorer/pages/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: blockInfo != null ? blockInfo.block : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                }, void 0, false, {\n                    fileName: \"/Users/kshitijchakravarty/Desktop/BoilerBlockchain/BUIDL/Explorer/pages/index.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kshitijchakravarty/Desktop/BoilerBlockchain/BUIDL/Explorer/pages/index.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this));\n    }\n// else {\n//   var [transactionHash, setTransactionHash] = useState(0);\n//   var [transactionInfo, setTransactionInfo] = useState(null);\n//   var fetchTransactionInfo = (transactionHash) => {\n//     fetch(\"/api/transactionInfo\")\n//       .then((res) => res.json())\n//       .then((data) => {\n//         setTransactionInfo(data);\n//         console.log(data);\n//       });\n//   };\n//   return (\n//     <div className={styles.container}>\n//       <div>Enter Block number or Transaction number</div>\n//       <input\n//         value={transactionHash}\n//         onChange={(event) => setTransactionInfo(event.target.value)}\n//       />\n//       <button\n//         style={{ height: 20, width: 100 }}\n//         onClick={(e) => fetchTransactionInfo(transactionHash)}\n//       >\n//         Fetch data\n//       </button>\n//       <div>\n//         {transactionInfo != null ? transactionHash.transaction : <></>}\n//       </div>\n//     </div>\n//   );\n// }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDYztBQUNUO0FBRXRCLFFBQVEsQ0FBQ0csSUFBSSxHQUFHLENBQUM7SUFDOUIsRUFBRSxFQUFFRCxzREFBTyxFQUFFLENBQUM7UUFDWixHQUFHLE1BQUVFLE9BQU8sTUFBRUMsVUFBVSxNQUFJTCwrQ0FBUSxDQUFDLENBQUM7UUFDdEMsR0FBRyxNQUFFTSxTQUFTLE1BQUVDLFlBQVksTUFBSVAsK0NBQVEsQ0FBQyxJQUFJO1FBRTdDLEdBQUcsQ0FBQ1EsY0FBYyxJQUFJSixPQUFPLEdBQUssQ0FBQztZQUNqQ0ssS0FBSyxDQUFDLENBQWdCLGlCQUNuQkMsSUFBSSxFQUFFQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ0MsSUFBSTtjQUN0QkYsSUFBSSxFQUFFRyxJQUFJLEdBQUssQ0FBQztnQkFDZk4sWUFBWSxDQUFDTSxJQUFJO2dCQUNqQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUk7WUFDbEIsQ0FBQztRQUNMLENBQUM7UUFFRCxFQUFnQztRQUNoQyxFQUFxRDtRQUNyRCxFQUFzQjtRQUN0QixFQUF5QztRQUN6QyxFQUFRO1FBQ1IsRUFBd0M7UUFDeEMsRUFBdUI7UUFDdkIsRUFBSztRQUVMLE1BQU0sNkVBQ0hHLENBQUc7WUFBQ0MsU0FBUyxFQUFFaEIsMEVBQWdCOzs0RkFDN0JlLENBQUc7OEJBQUMsQ0FBd0M7Ozs7Ozs0RkFDNUNHLENBQUs7b0JBQUNDLEtBQUssRUFBRWhCLE9BQU87b0JBQUVpQixRQUFRLEdBQUdDLENBQUMsR0FBS2pCLFVBQVUsQ0FBQ2lCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7NEZBQ2hFSSxDQUFNO29CQUNMQyxLQUFLLEVBQUUsQ0FBQzt3QkFBQ0MsTUFBTSxFQUFFLEVBQUU7d0JBQUVDLEtBQUssRUFBRSxHQUFHO29CQUFDLENBQUM7b0JBQ2pDQyxPQUFPLEdBQUdOLENBQUMsR0FBS2QsY0FBYyxDQUFDSixPQUFPOzs4QkFDdkMsQ0FFRDs7Ozs7OzRGQUNDWSxDQUFHOzhCQUFFVixTQUFTLElBQUksSUFBSSxHQUFHQSxTQUFTLENBQUN1QixLQUFLOzs7Ozs7Ozs7Ozs7SUFHL0MsQ0FBQztBQUNELEVBQVM7QUFDVCxFQUE2RDtBQUM3RCxFQUFnRTtBQUVoRSxFQUFzRDtBQUN0RCxFQUFvQztBQUNwQyxFQUFtQztBQUNuQyxFQUEwQjtBQUMxQixFQUFvQztBQUNwQyxFQUE2QjtBQUM3QixFQUFZO0FBQ1osRUFBTztBQUVQLEVBQWE7QUFDYixFQUF5QztBQUN6QyxFQUE0RDtBQUM1RCxFQUFlO0FBQ2YsRUFBa0M7QUFDbEMsRUFBdUU7QUFDdkUsRUFBVztBQUNYLEVBQWdCO0FBQ2hCLEVBQTZDO0FBQzdDLEVBQWlFO0FBQ2pFLEVBQVU7QUFDVixFQUFxQjtBQUNyQixFQUFrQjtBQUNsQixFQUFjO0FBQ2QsRUFBMEU7QUFDMUUsRUFBZTtBQUNmLEVBQWE7QUFDYixFQUFPO0FBQ1AsRUFBSTtBQUNOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBsb3Jlci8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBpc0Jsb2NrIGZyb20gXCIuL2FwaS9ibG9ja0luZm9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgaWYgKGlzQmxvY2spIHtcbiAgICB2YXIgW2Jsb2NrTm8sIHNldEJsb2NrTm9dID0gdXNlU3RhdGUoMCk7XG4gICAgdmFyIFtibG9ja0luZm8sIHNldEJsb2NrSW5mb10gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIHZhciBmZXRjaEJsb2NrSW5mbyA9IChibG9ja05vKSA9PiB7XG4gICAgICBmZXRjaChcIi9hcGkvYmxvY2tJbmZvXCIpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgc2V0QmxvY2tJbmZvKGRhdGEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gY29uc3QgYmxvY2tObyA9IGFzeW5jICgpID0+IHtcbiAgICAvLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2Jsb2NrSW5mb1wiLCB7XG4gICAgLy8gICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYmxvY2tObyB9KSxcbiAgICAvLyAgIH0pO1xuICAgIC8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8vIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2PkVudGVyIEJsb2NrIG51bWJlciBvciBUcmFuc2FjdGlvbiBudW1iZXI8L2Rpdj5cbiAgICAgICAgPGlucHV0IHZhbHVlPXtibG9ja05vfSBvbkNoYW5nZT17KGUpID0+IHNldEJsb2NrTm8oZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAyMCwgd2lkdGg6IDEwMCB9fVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBmZXRjaEJsb2NrSW5mbyhibG9ja05vKX1cbiAgICAgICAgPlxuICAgICAgICAgIEZldGNoIGRhdGFcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXY+e2Jsb2NrSW5mbyAhPSBudWxsID8gYmxvY2tJbmZvLmJsb2NrIDogPD48Lz59PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIC8vIGVsc2Uge1xuICAvLyAgIHZhciBbdHJhbnNhY3Rpb25IYXNoLCBzZXRUcmFuc2FjdGlvbkhhc2hdID0gdXNlU3RhdGUoMCk7XG4gIC8vICAgdmFyIFt0cmFuc2FjdGlvbkluZm8sIHNldFRyYW5zYWN0aW9uSW5mb10gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyAgIHZhciBmZXRjaFRyYW5zYWN0aW9uSW5mbyA9ICh0cmFuc2FjdGlvbkhhc2gpID0+IHtcbiAgLy8gICAgIGZldGNoKFwiL2FwaS90cmFuc2FjdGlvbkluZm9cIilcbiAgLy8gICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgLy8gICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgLy8gICAgICAgICBzZXRUcmFuc2FjdGlvbkluZm8oZGF0YSk7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgIH07XG5cbiAgLy8gICByZXR1cm4gKFxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAvLyAgICAgICA8ZGl2PkVudGVyIEJsb2NrIG51bWJlciBvciBUcmFuc2FjdGlvbiBudW1iZXI8L2Rpdj5cbiAgLy8gICAgICAgPGlucHV0XG4gIC8vICAgICAgICAgdmFsdWU9e3RyYW5zYWN0aW9uSGFzaH1cbiAgLy8gICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRUcmFuc2FjdGlvbkluZm8oZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgLy8gICAgICAgLz5cbiAgLy8gICAgICAgPGJ1dHRvblxuICAvLyAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMjAsIHdpZHRoOiAxMDAgfX1cbiAgLy8gICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZmV0Y2hUcmFuc2FjdGlvbkluZm8odHJhbnNhY3Rpb25IYXNoKX1cbiAgLy8gICAgICAgPlxuICAvLyAgICAgICAgIEZldGNoIGRhdGFcbiAgLy8gICAgICAgPC9idXR0b24+XG4gIC8vICAgICAgIDxkaXY+XG4gIC8vICAgICAgICAge3RyYW5zYWN0aW9uSW5mbyAhPSBudWxsID8gdHJhbnNhY3Rpb25IYXNoLnRyYW5zYWN0aW9uIDogPD48Lz59XG4gIC8vICAgICAgIDwvZGl2PlxuICAvLyAgICAgPC9kaXY+XG4gIC8vICAgKTtcbiAgLy8gfVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiaXNCbG9jayIsIkhvbWUiLCJibG9ja05vIiwic2V0QmxvY2tObyIsImJsb2NrSW5mbyIsInNldEJsb2NrSW5mbyIsImZldGNoQmxvY2tJbmZvIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJvbkNsaWNrIiwiYmxvY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();