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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_RiMenu3Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=RiMenu3Line!=!react-icons/ri */ \"(app-pages-browser)/./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var _Header_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.data */ \"(app-pages-browser)/./src/components/Header/Header.data.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ Header auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Header() {\n    _s();\n    const [openMobileMenu, setOpenMobileMenu] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"nav-wrapper fixed top-0 left-0 w-full z-40\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex flex-wrap items-center justify-between p-4 mx-auto navbar md:pb-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    className: \"flex items-center logo md:\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/assets/logo.png\",\n                        width: \"150\",\n                        height: \"40\",\n                        alt: \"Logo Dev\",\n                        style: {\n                            objectFit: \"cover\",\n                            width: \"100%\",\n                            height: \"auto\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_RiMenu3Line_react_icons_ri__WEBPACK_IMPORTED_MODULE_5__.RiMenu3Line, {\n                    className: \"block text-3xl md:hidden cursor-pointer\",\n                    onClick: ()=>setOpenMobileMenu(!openMobileMenu)\n                }, void 0, false, {\n                    fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(openMobileMenu ? \"block\" : \"hidden\", \" w-full md:block md:w-auto flex items-center\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col  p-4 mt-4 md:p-0 md:flex-row flex-auto justify-center md:space-x-12 md:mt-0 md:border-0 items-center justify-center\",\n                        children: _Header_data__WEBPACK_IMPORTED_MODULE_3__.dataHeader.map((param)=>{\n                            let { id, /* name, idLink, */ component } = param;\n                            if (component) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"button-header\",\n                                    children: component()\n                                }, id, false, {\n                                    fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 24\n                                }, this);\n                            } else {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"px-5 links-nav\"\n                                }, id, false, {\n                                    fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 19\n                                }, this);\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\Header\\\\Header.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"1LjVcvc8QZsEn/VEHfP6rfZPelw=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUNGO0FBQ2dCO0FBQ0Y7QUFDVjtBQUUxQixTQUFTSzs7SUFDZCxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdILCtDQUFRQSxDQUFDO0lBRXJELHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ1Isa0RBQUlBO29CQUFDVSxNQUFLO29CQUFJRixXQUFVOzhCQUN2Qiw0RUFBQ1QsbURBQUtBO3dCQUNKWSxLQUFJO3dCQUNKQyxPQUFNO3dCQUNOQyxRQUFPO3dCQUNQQyxLQUFJO3dCQUNKQyxPQUFPOzRCQUFDQyxXQUFVOzRCQUFTSixPQUFPOzRCQUFRQyxRQUFRO3dCQUFNOzs7Ozs7Ozs7Ozs4QkFJNUQsOERBQUNaLDBGQUFXQTtvQkFDVk8sV0FBVTtvQkFDVlMsU0FBUyxJQUFNWCxrQkFBa0IsQ0FBQ0Q7Ozs7Ozs4QkFFcEMsOERBQUNFO29CQUNDQyxXQUFXLEdBRVYsT0FEQ0gsaUJBQWlCLFVBQVUsVUFDNUI7OEJBRUQsNEVBQUNFO3dCQUFJQyxXQUFVO2tDQUNaTixvREFBVUEsQ0FBQ2dCLEdBQUcsQ0FBQztnQ0FBQyxFQUFFQyxFQUFFLEVBQUUsaUJBQWlCLEdBQUdDLFNBQVMsRUFBRTs0QkFDcEQsSUFBSUEsV0FBVztnQ0FDYixxQkFBTyw4REFBQ2I7b0NBQUlDLFdBQVU7OENBRW5CWTttQ0FESUQ7Ozs7OzRCQUdULE9BQU87Z0NBQ0wscUJBQ0UsOERBQUNaO29DQUFhQyxXQUFVO21DQUFkVzs7Ozs7NEJBTWQ7d0JBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWjtHQWhEZ0JmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4PzMxNjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBSaU1lbnUzTGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5pbXBvcnQgeyBkYXRhSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyLmRhdGFcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW29wZW5Nb2JpbGVNZW51LCBzZXRPcGVuTW9iaWxlTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyIGZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgei00MFwiPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC00IG14LWF1dG8gbmF2YmFyIG1kOnBiLTRcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGxvZ28gbWQ6XCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiMTUwXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgICAgICBhbHQ9XCJMb2dvIERldlwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7b2JqZWN0Rml0OlwiY292ZXJcIiwgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnYXV0byd9fVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxSaU1lbnUzTGluZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC0zeGwgbWQ6aGlkZGVuIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5Nb2JpbGVNZW51KCFvcGVuTW9iaWxlTWVudSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICBvcGVuTW9iaWxlTWVudSA/IFwiYmxvY2tcIiA6IFwiaGlkZGVuXCJcclxuICAgICAgICAgIH0gdy1mdWxsIG1kOmJsb2NrIG1kOnctYXV0byBmbGV4IGl0ZW1zLWNlbnRlcmB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sICBwLTQgbXQtNCBtZDpwLTAgbWQ6ZmxleC1yb3cgZmxleC1hdXRvIGp1c3RpZnktY2VudGVyIG1kOnNwYWNlLXgtMTIgbWQ6bXQtMCBtZDpib3JkZXItMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAge2RhdGFIZWFkZXIubWFwKCh7IGlkLCAvKiBuYW1lLCBpZExpbmssICovIGNvbXBvbmVudCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aWR9PlxyXG4gICAgICAgICAgICAgICAgICB7Y29tcG9uZW50KCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkfSBjbGFzc05hbWU9XCJweC01IGxpbmtzLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXtpZExpbmt9IGNsYXNzTmFtZT1cImxpbmtzLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiUmlNZW51M0xpbmUiLCJkYXRhSGVhZGVyIiwidXNlU3RhdGUiLCJIZWFkZXIiLCJvcGVuTW9iaWxlTWVudSIsInNldE9wZW5Nb2JpbGVNZW51IiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2IiwiaHJlZiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwic3R5bGUiLCJvYmplY3RGaXQiLCJvbkNsaWNrIiwibWFwIiwiaWQiLCJjb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Header/Header.jsx\n"));

/***/ })

});