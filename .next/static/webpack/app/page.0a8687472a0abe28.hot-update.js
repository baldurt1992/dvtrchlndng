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

/***/ "(app-pages-browser)/./src/components/ContactButton/ContactButton.tsx":
/*!********************************************************!*\
  !*** ./src/components/ContactButton/ContactButton.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContactButton: function() { return /* binding */ ContactButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ ContactButton auto */ \nvar _s = $RefreshSig$();\n\nfunction ContactButton() {\n    _s();\n    const [clickKey, setClickKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleRedirect = ()=>{\n        window.location.href = \"https://api.whatsapp.com/send/?phone=3117261670\";\n        setClickKey((prevKey)=>prevKey + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" -z-9\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"btn-bg bg-2 flex md:justify-center items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center justify-center px-0 py-2 button-contact btn btn-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleRedirect,\n                    className: \"text-sl md:text-lg shadow-button\",\n                    children: \"Cont\\xe1ctanos\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\ContactButton\\\\ContactButton.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, this)\n            }, clickKey, false, {\n                fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\ContactButton\\\\ContactButton.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\ContactButton\\\\ContactButton.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\programacion\\\\curso-nextjs\\\\Landing devtorch\\\\src\\\\components\\\\ContactButton\\\\ContactButton.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactButton, \"y/J9uMCnvcWJNtVZX2j7WERk4vY=\");\n_c = ContactButton;\nvar _c;\n$RefreshReg$(_c, \"ContactButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3RCdXR0b24vQ29udGFjdEJ1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRWlDO0FBRTFCLFNBQVNDOztJQUNkLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNSSxpQkFBaUI7UUFDckJDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO1FBQ3ZCSixZQUFZLENBQUNLLFVBQVlBLFVBQVU7SUFDckM7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBRUNDLFdBQVU7MEJBRVYsNEVBQUNDO29CQUNDQyxTQUFTUjtvQkFDVE0sV0FBVTs4QkFDWDs7Ozs7O2VBTklSOzs7Ozs7Ozs7Ozs7Ozs7QUFhZjtHQXpCZ0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3RCdXR0b24vQ29udGFjdEJ1dHRvbi50c3g/ZGY2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ29udGFjdEJ1dHRvbigpIHtcclxuICBjb25zdCBbY2xpY2tLZXksIHNldENsaWNrS2V5XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZWRpcmVjdCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZC8/cGhvbmU9MzExNzI2MTY3MFwiO1xyXG4gICAgc2V0Q2xpY2tLZXkoKHByZXZLZXkpID0+IHByZXZLZXkgKyAxKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgLXotOVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1iZyBiZy0yIGZsZXggbWQ6anVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAga2V5PXtjbGlja0tleX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTAgcHktMiBidXR0b24tY29udGFjdCBidG4gYnRuLTJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVkaXJlY3R9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc2wgbWQ6dGV4dC1sZyBzaGFkb3ctYnV0dG9uXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ29udMOhY3Rhbm9zXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNvbnRhY3RCdXR0b24iLCJjbGlja0tleSIsInNldENsaWNrS2V5IiwiaGFuZGxlUmVkaXJlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJwcmV2S2V5IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContactButton/ContactButton.tsx\n"));

/***/ })

});