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

/***/ "(app-pages-browser)/./src/components/Header/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_RiMenu3Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=RiMenu3Line!=!react-icons/ri */ \"(app-pages-browser)/./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var _Header_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.data */ \"(app-pages-browser)/./src/components/Header/Header.data.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ Header auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Header() {\n    _s();\n    const [openMobileMenu, setOpenMobileMenu] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"nav-wrapper fixed top-0 left-0 w-full z-40\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex flex-wrap items-center justify-between  p-4 mx-auto navbar md:pb-0 md:\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    className: \"flex items-center logo md:\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/assets/logo.png\",\n                        width: \"150\",\n                        height: \"40\",\n                        alt: \"Logo Dev\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RiMenu3Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiMenu3Line, {\n                    className: \"block text-3xl md:hidden cursor-pointer\",\n                    onClick: ()=>setOpenMobileMenu(!openMobileMenu)\n                }, void 0, false, {\n                    fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(openMobileMenu ? \"block\" : \"hidden\", \" w-full md:block md:w-auto flex items-center\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col  p-4 mt-4 md:p-0 md:flex-row flex-auto justify-center md:space-x-12 md:mt-0 md:border-0 items-center justify-center\",\n                        children: _Header_data__WEBPACK_IMPORTED_MODULE_3__.dataHeader.map((param)=>{\n                            let { id, /* name, idLink, */ component } = param;\n                            if (component) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"button-header\",\n                                    children: component()\n                                }, id, false, {\n                                    fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 24\n                                }, this);\n                            } else {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"px-5 links-nav\"\n                                }, id, false, {\n                                    fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 19\n                                }, this);\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"1LjVcvc8QZsEn/VEHfP6rfZPelw=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUNGO0FBQ2dCO0FBQ0Y7QUFDVjtBQUUxQixTQUFTSzs7SUFDZCxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdILCtDQUFRQSxDQUFDO0lBRXJELHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ1Isa0RBQUlBO29CQUFDVSxNQUFLO29CQUFJRixXQUFVOzhCQUN2Qiw0RUFBQ1QsbURBQUtBO3dCQUNKWSxLQUFJO3dCQUNKQyxPQUFNO3dCQUNOQyxRQUFPO3dCQUNQQyxLQUFJOzs7Ozs7Ozs7Ozs4QkFHUiw4REFBQ2IsMEZBQVdBO29CQUNWTyxXQUFVO29CQUNWTyxTQUFTLElBQU1ULGtCQUFrQixDQUFDRDs7Ozs7OzhCQUVwQyw4REFBQ0U7b0JBQ0NDLFdBQVcsR0FFVixPQURDSCxpQkFBaUIsVUFBVSxVQUM1Qjs4QkFFRCw0RUFBQ0U7d0JBQUlDLFdBQVU7a0NBQ1pOLG9EQUFVQSxDQUFDYyxHQUFHLENBQUM7Z0NBQUMsRUFBRUMsRUFBRSxFQUFFLGlCQUFpQixHQUFHQyxTQUFTLEVBQUU7NEJBQ3BELElBQUlBLFdBQVc7Z0NBQ2IscUJBQU8sOERBQUNYO29DQUFJQyxXQUFVOzhDQUVuQlU7bUNBRElEOzs7Ozs0QkFHVCxPQUFPO2dDQUNMLHFCQUNFLDhEQUFDVjtvQ0FBYUMsV0FBVTttQ0FBZFM7Ozs7OzRCQU1kO3dCQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1o7R0E5Q2dCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeD8zMTYwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgUmlNZW51M0xpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuaW1wb3J0IHsgZGF0YUhlYWRlciB9IGZyb20gXCIuL0hlYWRlci5kYXRhXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IFtvcGVuTW9iaWxlTWVudSwgc2V0T3Blbk1vYmlsZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlciBmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIHotNDBcIj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuICBwLTQgbXgtYXV0byBuYXZiYXIgbWQ6cGItMCBtZDpcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGxvZ28gbWQ6XCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMTUwXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgICAgICBhbHQ9XCJMb2dvIERldlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8UmlNZW51M0xpbmVcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtM3hsIG1kOmhpZGRlbiBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuTW9iaWxlTWVudSghb3Blbk1vYmlsZU1lbnUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgb3Blbk1vYmlsZU1lbnUgPyBcImJsb2NrXCIgOiBcImhpZGRlblwiXHJcbiAgICAgICAgICB9IHctZnVsbCBtZDpibG9jayBtZDp3LWF1dG8gZmxleCBpdGVtcy1jZW50ZXJgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCAgcC00IG10LTQgbWQ6cC0wIG1kOmZsZXgtcm93IGZsZXgtYXV0byBqdXN0aWZ5LWNlbnRlciBtZDpzcGFjZS14LTEyIG1kOm10LTAgbWQ6Ym9yZGVyLTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIHtkYXRhSGVhZGVyLm1hcCgoeyBpZCwgLyogbmFtZSwgaWRMaW5rLCAqLyBjb21wb25lbnQgfSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAge2NvbXBvbmVudCgpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj47XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZH0gY2xhc3NOYW1lPVwicHgtNSBsaW5rcy1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj17aWRMaW5rfSBjbGFzc05hbWU9XCJsaW5rcy1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsIlJpTWVudTNMaW5lIiwiZGF0YUhlYWRlciIsInVzZVN0YXRlIiwiSGVhZGVyIiwib3Blbk1vYmlsZU1lbnUiLCJzZXRPcGVuTW9iaWxlTWVudSIsImRpdiIsImNsYXNzTmFtZSIsIm5hdiIsImhyZWYiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIm9uQ2xpY2siLCJtYXAiLCJpZCIsImNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header/Header.jsx\n"));

/***/ })

});