"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Services/CounterData.jsx":
/*!*************************************************!*\
  !*** ./src/components/Services/CounterData.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Services: function() { return /* binding */ Services; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _CounterData_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CounterData.data */ \"(app-pages-browser)/./src/components/Services/CounterData.data.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ Services auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Services() {\n    _s();\n    const [clickKey, setClickKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const handleRedirect = ()=>{\n        window.location.href = \"https://api.whatsapp.com/send/?phone=3117261670\";\n        setClickKey((prevKey)=>prevKey + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-8xl card-container margin-container-global mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-8 h-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-start text-services mb-24 mt-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-7xl degradedBlue bg-blueLight font-bold title-mobile\",\n                        children: \"Servicios\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Services\\\\CounterData.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Services\\\\CounterData.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"cards max-w-scree-lg mx-auto grid gap-4 place-items-center\",\n                    children: _CounterData_data__WEBPACK_IMPORTED_MODULE_1__.dataCounter.map((param)=>/*#__PURE__*/ {\n                        let { id, text, description, caracteristicas, caracteristicas2, caracteristicas3 } = param;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-4 md:p-4 shadow-cards bg-white text-center text-black rounded-xl\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"cursor-pointer header-card text-gradient flex flex-row font-light\",\n                                    children: text\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Services\\\\CounterData.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"max-w-md mb-4 mt-4 text-card text-start font-thin flex content-end\",\n                                    children: description\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Services\\\\CounterData.jsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this),\n                                caracteristicas && caracteristicas2 && caracteristicas3 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                                    className: \"  text-start pl-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: caracteristicas\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Services\\\\CounterData.jsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: caracteristicas2\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Services\\\\CounterData.jsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: caracteristicas3\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Services\\\\CounterData.jsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Services\\\\CounterData.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, this) : null\n                            ]\n                        }, id, true, {\n                            fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Services\\\\CounterData.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Services\\\\CounterData.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"btn-bg bg-2 flex md:justify-center whatsapp-cards items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row items-center justify-center px-0 py-2 btn btn-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleRedirect,\n                            className: \"text-sl md:text-lg shadow-button\",\n                            children: \"H\\xe1blemos\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Services\\\\CounterData.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this)\n                    }, clickKey, false, {\n                        fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Services\\\\CounterData.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Services\\\\CounterData.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Services\\\\CounterData.jsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Services\\\\CounterData.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Services, \"y/J9uMCnvcWJNtVZX2j7WERk4vY=\");\n_c = Services;\nvar _c;\n$RefreshReg$(_c, \"Services\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlcnZpY2VzL0NvdW50ZXJEYXRhLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRWlEO0FBQ3ZCO0FBQ087QUFFMUIsU0FBU0c7O0lBQ2QsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdILCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1JLGlCQUFpQjtRQUNyQkMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7UUFDdkJKLFlBQVksQ0FBQ0ssVUFBWUEsVUFBVTtJQUNyQztJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFHRCxXQUFVO2tDQUE0RDs7Ozs7Ozs7Ozs7OEJBRTVFLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWlosMERBQVdBLENBQUNjLEdBQUcsQ0FBQzs0QkFBQyxFQUFFQyxFQUFFLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxlQUFlLEVBQUVDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRTsrQkFDOUYsOERBQUNUOzRCQUVDQyxXQUFVOzs4Q0FFViw4REFBQ1M7b0NBQUtULFdBQVU7OENBQ2JJOzs7Ozs7OENBRUgsOERBQUNNO29DQUFFVixXQUFVOzhDQUNWSzs7Ozs7O2dDQUVGQyxtQkFBbUJDLG9CQUFvQkMsaUNBQ3RDLDhEQUFDRztvQ0FBR1gsV0FBVTs7c0RBQ1osOERBQUNZO3NEQUFJTjs7Ozs7O3NEQUNMLDhEQUFDTTtzREFBSUw7Ozs7OztzREFDTCw4REFBQ0s7c0RBQUlKOzs7Ozs7Ozs7OzsyQ0FFTDs7MkJBZkNMOzs7OztvQkFnQkY7Ozs7Ozs4QkFHVCw4REFBQ0o7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUVDQyxXQUFVO2tDQUVWLDRFQUFDYTs0QkFDQ0MsU0FBU3BCOzRCQUNUTSxXQUFVO3NDQUNYOzs7Ozs7dUJBTklSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjakI7R0FwRGdCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZXJ2aWNlcy9Db3VudGVyRGF0YS5qc3g/ZTQzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IGRhdGFDb3VudGVyIH0gZnJvbSBcIi4vQ291bnRlckRhdGEuZGF0YVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VydmljZXMoKSB7XHJcbiAgY29uc3QgW2NsaWNrS2V5LCBzZXRDbGlja0tleV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVkaXJlY3QgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQvP3Bob25lPTMxMTcyNjE2NzBcIjtcclxuICAgIHNldENsaWNrS2V5KChwcmV2S2V5KSA9PiBwcmV2S2V5ICsgMSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctOHhsIGNhcmQtY29udGFpbmVyIG1hcmdpbi1jb250YWluZXItZ2xvYmFsIG14LWF1dG9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTggaC1mdWxsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXN0YXJ0IHRleHQtc2VydmljZXMgbWItMjQgbXQtMFwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtN3hsIGRlZ3JhZGVkQmx1ZSBiZy1ibHVlTGlnaHQgZm9udC1ib2xkIHRpdGxlLW1vYmlsZVwiPlNlcnZpY2lvczwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkcyBtYXgtdy1zY3JlZS1sZyBteC1hdXRvIGdyaWQgZ2FwLTQgcGxhY2UtaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICB7ZGF0YUNvdW50ZXIubWFwKCh7IGlkLCB0ZXh0LCBkZXNjcmlwdGlvbiwgY2FyYWN0ZXJpc3RpY2FzLCBjYXJhY3RlcmlzdGljYXMyLCBjYXJhY3RlcmlzdGljYXMzIH0pID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IG1kOnAtNCBzaGFkb3ctY2FyZHMgYmctd2hpdGUgdGV4dC1jZW50ZXIgdGV4dC1ibGFjayByb3VuZGVkLXhsXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGhlYWRlci1jYXJkIHRleHQtZ3JhZGllbnQgZmxleCBmbGV4LXJvdyBmb250LWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICB7dGV4dH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWF4LXctbWQgbWItNCBtdC00IHRleHQtY2FyZCB0ZXh0LXN0YXJ0IGZvbnQtdGhpbiBmbGV4IGNvbnRlbnQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIHtjYXJhY3RlcmlzdGljYXMgJiYgY2FyYWN0ZXJpc3RpY2FzMiAmJiBjYXJhY3RlcmlzdGljYXMzID8gKFxyXG4gICAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cIiAgdGV4dC1zdGFydCBwbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT57Y2FyYWN0ZXJpc3RpY2FzfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT57Y2FyYWN0ZXJpc3RpY2FzMn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+e2NhcmFjdGVyaXN0aWNhczN9PC9saT5cclxuICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tYmcgYmctMiBmbGV4IG1kOmp1c3RpZnktY2VudGVyIHdoYXRzYXBwLWNhcmRzIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2NsaWNrS2V5fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC0wIHB5LTIgYnRuIGJ0bi0yXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlZGlyZWN0fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc2wgbWQ6dGV4dC1sZyBzaGFkb3ctYnV0dG9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEjDoWJsZW1vc1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImRhdGFDb3VudGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNlcnZpY2VzIiwiY2xpY2tLZXkiLCJzZXRDbGlja0tleSIsImhhbmRsZVJlZGlyZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicHJldktleSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwiaWQiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJjYXJhY3RlcmlzdGljYXMiLCJjYXJhY3RlcmlzdGljYXMyIiwiY2FyYWN0ZXJpc3RpY2FzMyIsInNwYW4iLCJwIiwib2wiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Services/CounterData.jsx\n"));

/***/ })

});