"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/emailjs-com";
exports.ids = ["vendor-chunks/emailjs-com"];
exports.modules = {

/***/ "(ssr)/./node_modules/emailjs-com/cjs/api/sendPost.js":
/*!******************************************************!*\
  !*** ./node_modules/emailjs-com/cjs/api/sendPost.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sendPost = void 0;\nconst EmailJSResponseStatus_1 = __webpack_require__(/*! ../models/EmailJSResponseStatus */ \"(ssr)/./node_modules/emailjs-com/cjs/models/EmailJSResponseStatus.js\");\nconst store_1 = __webpack_require__(/*! ../store/store */ \"(ssr)/./node_modules/emailjs-com/cjs/store/store.js\");\nconst sendPost = (url, data, headers = {}) => {\n    return new Promise((resolve, reject) => {\n        const xhr = new XMLHttpRequest();\n        xhr.addEventListener('load', ({ target }) => {\n            const responseStatus = new EmailJSResponseStatus_1.EmailJSResponseStatus(target);\n            if (responseStatus.status === 200 || responseStatus.text === 'OK') {\n                resolve(responseStatus);\n            }\n            else {\n                reject(responseStatus);\n            }\n        });\n        xhr.addEventListener('error', ({ target }) => {\n            reject(new EmailJSResponseStatus_1.EmailJSResponseStatus(target));\n        });\n        xhr.open('POST', store_1.store._origin + url, true);\n        Object.keys(headers).forEach((key) => {\n            xhr.setRequestHeader(key, headers[key]);\n        });\n        xhr.send(data);\n    });\n};\nexports.sendPost = sendPost;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vY2pzL2FwaS9zZW5kUG9zdC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0I7QUFDaEIsZ0NBQWdDLG1CQUFPLENBQUMsNkdBQWlDO0FBQ3pFLGdCQUFnQixtQkFBTyxDQUFDLDJFQUFnQjtBQUN4Qyx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLHdDQUF3QyxRQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHlDQUF5QyxRQUFRO0FBQ2pEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2RldnRvcmNoLy4vbm9kZV9tb2R1bGVzL2VtYWlsanMtY29tL2Nqcy9hcGkvc2VuZFBvc3QuanM/MTI5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2VuZFBvc3QgPSB2b2lkIDA7XG5jb25zdCBFbWFpbEpTUmVzcG9uc2VTdGF0dXNfMSA9IHJlcXVpcmUoXCIuLi9tb2RlbHMvRW1haWxKU1Jlc3BvbnNlU3RhdHVzXCIpO1xuY29uc3Qgc3RvcmVfMSA9IHJlcXVpcmUoXCIuLi9zdG9yZS9zdG9yZVwiKTtcbmNvbnN0IHNlbmRQb3N0ID0gKHVybCwgZGF0YSwgaGVhZGVycyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlU3RhdHVzID0gbmV3IEVtYWlsSlNSZXNwb25zZVN0YXR1c18xLkVtYWlsSlNSZXNwb25zZVN0YXR1cyh0YXJnZXQpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlU3RhdHVzLnN0YXR1cyA9PT0gMjAwIHx8IHJlc3BvbnNlU3RhdHVzLnRleHQgPT09ICdPSycpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlU3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZVN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFbWFpbEpTUmVzcG9uc2VTdGF0dXNfMS5FbWFpbEpTUmVzcG9uc2VTdGF0dXModGFyZ2V0KSk7XG4gICAgICAgIH0pO1xuICAgICAgICB4aHIub3BlbignUE9TVCcsIHN0b3JlXzEuc3RvcmUuX29yaWdpbiArIHVybCwgdHJ1ZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKGhlYWRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBoZWFkZXJzW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5zZW5kUG9zdCA9IHNlbmRQb3N0O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/emailjs-com/cjs/api/sendPost.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/emailjs-com/cjs/index.js":
/*!***********************************************!*\
  !*** ./node_modules/emailjs-com/cjs/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sendForm = exports.send = exports.init = void 0;\nconst init_1 = __webpack_require__(/*! ./methods/init/init */ \"(ssr)/./node_modules/emailjs-com/cjs/methods/init/init.js\");\nObject.defineProperty(exports, \"init\", ({ enumerable: true, get: function () { return init_1.init; } }));\nconst send_1 = __webpack_require__(/*! ./methods/send/send */ \"(ssr)/./node_modules/emailjs-com/cjs/methods/send/send.js\");\nObject.defineProperty(exports, \"send\", ({ enumerable: true, get: function () { return send_1.send; } }));\nconst sendForm_1 = __webpack_require__(/*! ./methods/sendForm/sendForm */ \"(ssr)/./node_modules/emailjs-com/cjs/methods/sendForm/sendForm.js\");\nObject.defineProperty(exports, \"sendForm\", ({ enumerable: true, get: function () { return sendForm_1.sendForm; } }));\nexports[\"default\"] = {\n    init: init_1.init,\n    send: send_1.send,\n    sendForm: sendForm_1.sendForm,\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vY2pzL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGdCQUFnQixHQUFHLFlBQVksR0FBRyxZQUFZO0FBQzlDLGVBQWUsbUJBQU8sQ0FBQyxzRkFBcUI7QUFDNUMsd0NBQXVDLEVBQUUscUNBQXFDLHVCQUF1QixFQUFDO0FBQ3RHLGVBQWUsbUJBQU8sQ0FBQyxzRkFBcUI7QUFDNUMsd0NBQXVDLEVBQUUscUNBQXFDLHVCQUF1QixFQUFDO0FBQ3RHLG1CQUFtQixtQkFBTyxDQUFDLHNHQUE2QjtBQUN4RCw0Q0FBMkMsRUFBRSxxQ0FBcUMsK0JBQStCLEVBQUM7QUFDbEgsa0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RldnRvcmNoLy4vbm9kZV9tb2R1bGVzL2VtYWlsanMtY29tL2Nqcy9pbmRleC5qcz8yNWNmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZW5kRm9ybSA9IGV4cG9ydHMuc2VuZCA9IGV4cG9ydHMuaW5pdCA9IHZvaWQgMDtcbmNvbnN0IGluaXRfMSA9IHJlcXVpcmUoXCIuL21ldGhvZHMvaW5pdC9pbml0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaW5pdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaW5pdF8xLmluaXQ7IH0gfSk7XG5jb25zdCBzZW5kXzEgPSByZXF1aXJlKFwiLi9tZXRob2RzL3NlbmQvc2VuZFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNlbmRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbmRfMS5zZW5kOyB9IH0pO1xuY29uc3Qgc2VuZEZvcm1fMSA9IHJlcXVpcmUoXCIuL21ldGhvZHMvc2VuZEZvcm0vc2VuZEZvcm1cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzZW5kRm9ybVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VuZEZvcm1fMS5zZW5kRm9ybTsgfSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBpbml0OiBpbml0XzEuaW5pdCxcbiAgICBzZW5kOiBzZW5kXzEuc2VuZCxcbiAgICBzZW5kRm9ybTogc2VuZEZvcm1fMS5zZW5kRm9ybSxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/emailjs-com/cjs/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/emailjs-com/cjs/methods/init/init.js":
/*!***********************************************************!*\
  !*** ./node_modules/emailjs-com/cjs/methods/init/init.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.init = void 0;\nconst store_1 = __webpack_require__(/*! ../../store/store */ \"(ssr)/./node_modules/emailjs-com/cjs/store/store.js\");\n/**\n * Initiation\n * @param {string} userID - set the EmailJS user ID\n * @param {string} origin - set the EmailJS origin\n */\nconst init = (userID, origin = 'https://api.emailjs.com') => {\n    store_1.store._userID = userID;\n    store_1.store._origin = origin;\n};\nexports.init = init;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vY2pzL21ldGhvZHMvaW5pdC9pbml0LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFlBQVk7QUFDWixnQkFBZ0IsbUJBQU8sQ0FBQyw4RUFBbUI7QUFDM0M7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZ0b3JjaC8uL25vZGVfbW9kdWxlcy9lbWFpbGpzLWNvbS9janMvbWV0aG9kcy9pbml0L2luaXQuanM/ZTJiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW5pdCA9IHZvaWQgMDtcbmNvbnN0IHN0b3JlXzEgPSByZXF1aXJlKFwiLi4vLi4vc3RvcmUvc3RvcmVcIik7XG4vKipcbiAqIEluaXRpYXRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySUQgLSBzZXQgdGhlIEVtYWlsSlMgdXNlciBJRFxuICogQHBhcmFtIHtzdHJpbmd9IG9yaWdpbiAtIHNldCB0aGUgRW1haWxKUyBvcmlnaW5cbiAqL1xuY29uc3QgaW5pdCA9ICh1c2VySUQsIG9yaWdpbiA9ICdodHRwczovL2FwaS5lbWFpbGpzLmNvbScpID0+IHtcbiAgICBzdG9yZV8xLnN0b3JlLl91c2VySUQgPSB1c2VySUQ7XG4gICAgc3RvcmVfMS5zdG9yZS5fb3JpZ2luID0gb3JpZ2luO1xufTtcbmV4cG9ydHMuaW5pdCA9IGluaXQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/emailjs-com/cjs/methods/init/init.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/emailjs-com/cjs/methods/send/send.js":
/*!***********************************************************!*\
  !*** ./node_modules/emailjs-com/cjs/methods/send/send.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.send = void 0;\nconst store_1 = __webpack_require__(/*! ../../store/store */ \"(ssr)/./node_modules/emailjs-com/cjs/store/store.js\");\nconst validateParams_1 = __webpack_require__(/*! ../../utils/validateParams */ \"(ssr)/./node_modules/emailjs-com/cjs/utils/validateParams.js\");\nconst sendPost_1 = __webpack_require__(/*! ../../api/sendPost */ \"(ssr)/./node_modules/emailjs-com/cjs/api/sendPost.js\");\n/**\n * Send a template to the specific EmailJS service\n * @param {string} serviceID - the EmailJS service ID\n * @param {string} templateID - the EmailJS template ID\n * @param {object} templatePrams - the template params, what will be set to the EmailJS template\n * @param {string} userID - the EmailJS user ID\n * @returns {Promise<EmailJSResponseStatus>}\n */\nconst send = (serviceID, templateID, templatePrams, userID) => {\n    const uID = userID || store_1.store._userID;\n    validateParams_1.validateParams(uID, serviceID, templateID);\n    const params = {\n        lib_version: '3.2.0',\n        user_id: uID,\n        service_id: serviceID,\n        template_id: templateID,\n        template_params: templatePrams,\n    };\n    return sendPost_1.sendPost('/api/v1.0/email/send', JSON.stringify(params), {\n        'Content-type': 'application/json',\n    });\n};\nexports.send = send;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vY2pzL21ldGhvZHMvc2VuZC9zZW5kLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFlBQVk7QUFDWixnQkFBZ0IsbUJBQU8sQ0FBQyw4RUFBbUI7QUFDM0MseUJBQXlCLG1CQUFPLENBQUMsZ0dBQTRCO0FBQzdELG1CQUFtQixtQkFBTyxDQUFDLGdGQUFvQjtBQUMvQztBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZ0b3JjaC8uL25vZGVfbW9kdWxlcy9lbWFpbGpzLWNvbS9janMvbWV0aG9kcy9zZW5kL3NlbmQuanM/YjQwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2VuZCA9IHZvaWQgMDtcbmNvbnN0IHN0b3JlXzEgPSByZXF1aXJlKFwiLi4vLi4vc3RvcmUvc3RvcmVcIik7XG5jb25zdCB2YWxpZGF0ZVBhcmFtc18xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3ZhbGlkYXRlUGFyYW1zXCIpO1xuY29uc3Qgc2VuZFBvc3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9hcGkvc2VuZFBvc3RcIik7XG4vKipcbiAqIFNlbmQgYSB0ZW1wbGF0ZSB0byB0aGUgc3BlY2lmaWMgRW1haWxKUyBzZXJ2aWNlXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VydmljZUlEIC0gdGhlIEVtYWlsSlMgc2VydmljZSBJRFxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlSUQgLSB0aGUgRW1haWxKUyB0ZW1wbGF0ZSBJRFxuICogQHBhcmFtIHtvYmplY3R9IHRlbXBsYXRlUHJhbXMgLSB0aGUgdGVtcGxhdGUgcGFyYW1zLCB3aGF0IHdpbGwgYmUgc2V0IHRvIHRoZSBFbWFpbEpTIHRlbXBsYXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlcklEIC0gdGhlIEVtYWlsSlMgdXNlciBJRFxuICogQHJldHVybnMge1Byb21pc2U8RW1haWxKU1Jlc3BvbnNlU3RhdHVzPn1cbiAqL1xuY29uc3Qgc2VuZCA9IChzZXJ2aWNlSUQsIHRlbXBsYXRlSUQsIHRlbXBsYXRlUHJhbXMsIHVzZXJJRCkgPT4ge1xuICAgIGNvbnN0IHVJRCA9IHVzZXJJRCB8fCBzdG9yZV8xLnN0b3JlLl91c2VySUQ7XG4gICAgdmFsaWRhdGVQYXJhbXNfMS52YWxpZGF0ZVBhcmFtcyh1SUQsIHNlcnZpY2VJRCwgdGVtcGxhdGVJRCk7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBsaWJfdmVyc2lvbjogJzMuMi4wJyxcbiAgICAgICAgdXNlcl9pZDogdUlELFxuICAgICAgICBzZXJ2aWNlX2lkOiBzZXJ2aWNlSUQsXG4gICAgICAgIHRlbXBsYXRlX2lkOiB0ZW1wbGF0ZUlELFxuICAgICAgICB0ZW1wbGF0ZV9wYXJhbXM6IHRlbXBsYXRlUHJhbXMsXG4gICAgfTtcbiAgICByZXR1cm4gc2VuZFBvc3RfMS5zZW5kUG9zdCgnL2FwaS92MS4wL2VtYWlsL3NlbmQnLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpLCB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG59O1xuZXhwb3J0cy5zZW5kID0gc2VuZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/emailjs-com/cjs/methods/send/send.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/emailjs-com/cjs/methods/sendForm/sendForm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/emailjs-com/cjs/methods/sendForm/sendForm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sendForm = void 0;\nconst store_1 = __webpack_require__(/*! ../../store/store */ \"(ssr)/./node_modules/emailjs-com/cjs/store/store.js\");\nconst validateParams_1 = __webpack_require__(/*! ../../utils/validateParams */ \"(ssr)/./node_modules/emailjs-com/cjs/utils/validateParams.js\");\nconst sendPost_1 = __webpack_require__(/*! ../../api/sendPost */ \"(ssr)/./node_modules/emailjs-com/cjs/api/sendPost.js\");\nconst findHTMLForm = (form) => {\n    let currentForm;\n    if (typeof form === 'string') {\n        currentForm = document.querySelector(form);\n    }\n    else {\n        currentForm = form;\n    }\n    if (!currentForm || currentForm.nodeName !== 'FORM') {\n        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';\n    }\n    return currentForm;\n};\n/**\n * Send a form the specific EmailJS service\n * @param {string} serviceID - the EmailJS service ID\n * @param {string} templateID - the EmailJS template ID\n * @param {string | HTMLFormElement} form - the form element or selector\n * @param {string} userID - the EmailJS user ID\n * @returns {Promise<EmailJSResponseStatus>}\n */\nconst sendForm = (serviceID, templateID, form, userID) => {\n    const uID = userID || store_1.store._userID;\n    const currentForm = findHTMLForm(form);\n    validateParams_1.validateParams(uID, serviceID, templateID);\n    const formData = new FormData(currentForm);\n    formData.append('lib_version', '3.2.0');\n    formData.append('service_id', serviceID);\n    formData.append('template_id', templateID);\n    formData.append('user_id', uID);\n    return sendPost_1.sendPost('/api/v1.0/email/send-form', formData);\n};\nexports.sendForm = sendForm;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vY2pzL21ldGhvZHMvc2VuZEZvcm0vc2VuZEZvcm0uanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCO0FBQ2hCLGdCQUFnQixtQkFBTyxDQUFDLDhFQUFtQjtBQUMzQyx5QkFBeUIsbUJBQU8sQ0FBQyxnR0FBNEI7QUFDN0QsbUJBQW1CLG1CQUFPLENBQUMsZ0ZBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVywwQkFBMEI7QUFDckMsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZ0b3JjaC8uL25vZGVfbW9kdWxlcy9lbWFpbGpzLWNvbS9janMvbWV0aG9kcy9zZW5kRm9ybS9zZW5kRm9ybS5qcz80ZWQ1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zZW5kRm9ybSA9IHZvaWQgMDtcbmNvbnN0IHN0b3JlXzEgPSByZXF1aXJlKFwiLi4vLi4vc3RvcmUvc3RvcmVcIik7XG5jb25zdCB2YWxpZGF0ZVBhcmFtc18xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzL3ZhbGlkYXRlUGFyYW1zXCIpO1xuY29uc3Qgc2VuZFBvc3RfMSA9IHJlcXVpcmUoXCIuLi8uLi9hcGkvc2VuZFBvc3RcIik7XG5jb25zdCBmaW5kSFRNTEZvcm0gPSAoZm9ybSkgPT4ge1xuICAgIGxldCBjdXJyZW50Rm9ybTtcbiAgICBpZiAodHlwZW9mIGZvcm0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGN1cnJlbnRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihmb3JtKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGN1cnJlbnRGb3JtID0gZm9ybTtcbiAgICB9XG4gICAgaWYgKCFjdXJyZW50Rm9ybSB8fCBjdXJyZW50Rm9ybS5ub2RlTmFtZSAhPT0gJ0ZPUk0nKSB7XG4gICAgICAgIHRocm93ICdUaGUgM3JkIHBhcmFtZXRlciBpcyBleHBlY3RlZCB0byBiZSB0aGUgSFRNTCBmb3JtIGVsZW1lbnQgb3IgdGhlIHN0eWxlIHNlbGVjdG9yIG9mIGZvcm0nO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudEZvcm07XG59O1xuLyoqXG4gKiBTZW5kIGEgZm9ybSB0aGUgc3BlY2lmaWMgRW1haWxKUyBzZXJ2aWNlXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VydmljZUlEIC0gdGhlIEVtYWlsSlMgc2VydmljZSBJRFxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlSUQgLSB0aGUgRW1haWxKUyB0ZW1wbGF0ZSBJRFxuICogQHBhcmFtIHtzdHJpbmcgfCBIVE1MRm9ybUVsZW1lbnR9IGZvcm0gLSB0aGUgZm9ybSBlbGVtZW50IG9yIHNlbGVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlcklEIC0gdGhlIEVtYWlsSlMgdXNlciBJRFxuICogQHJldHVybnMge1Byb21pc2U8RW1haWxKU1Jlc3BvbnNlU3RhdHVzPn1cbiAqL1xuY29uc3Qgc2VuZEZvcm0gPSAoc2VydmljZUlELCB0ZW1wbGF0ZUlELCBmb3JtLCB1c2VySUQpID0+IHtcbiAgICBjb25zdCB1SUQgPSB1c2VySUQgfHwgc3RvcmVfMS5zdG9yZS5fdXNlcklEO1xuICAgIGNvbnN0IGN1cnJlbnRGb3JtID0gZmluZEhUTUxGb3JtKGZvcm0pO1xuICAgIHZhbGlkYXRlUGFyYW1zXzEudmFsaWRhdGVQYXJhbXModUlELCBzZXJ2aWNlSUQsIHRlbXBsYXRlSUQpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGN1cnJlbnRGb3JtKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2xpYl92ZXJzaW9uJywgJzMuMi4wJyk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdzZXJ2aWNlX2lkJywgc2VydmljZUlEKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3RlbXBsYXRlX2lkJywgdGVtcGxhdGVJRCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCd1c2VyX2lkJywgdUlEKTtcbiAgICByZXR1cm4gc2VuZFBvc3RfMS5zZW5kUG9zdCgnL2FwaS92MS4wL2VtYWlsL3NlbmQtZm9ybScsIGZvcm1EYXRhKTtcbn07XG5leHBvcnRzLnNlbmRGb3JtID0gc2VuZEZvcm07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/emailjs-com/cjs/methods/sendForm/sendForm.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/emailjs-com/cjs/models/EmailJSResponseStatus.js":
/*!**********************************************************************!*\
  !*** ./node_modules/emailjs-com/cjs/models/EmailJSResponseStatus.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.EmailJSResponseStatus = void 0;\nclass EmailJSResponseStatus {\n    constructor(httpResponse) {\n        this.status = httpResponse.status;\n        this.text = httpResponse.responseText;\n    }\n}\nexports.EmailJSResponseStatus = EmailJSResponseStatus;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vY2pzL21vZGVscy9FbWFpbEpTUmVzcG9uc2VTdGF0dXMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2RldnRvcmNoLy4vbm9kZV9tb2R1bGVzL2VtYWlsanMtY29tL2Nqcy9tb2RlbHMvRW1haWxKU1Jlc3BvbnNlU3RhdHVzLmpzPzZmM2IiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkVtYWlsSlNSZXNwb25zZVN0YXR1cyA9IHZvaWQgMDtcbmNsYXNzIEVtYWlsSlNSZXNwb25zZVN0YXR1cyB7XG4gICAgY29uc3RydWN0b3IoaHR0cFJlc3BvbnNlKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gaHR0cFJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgdGhpcy50ZXh0ID0gaHR0cFJlc3BvbnNlLnJlc3BvbnNlVGV4dDtcbiAgICB9XG59XG5leHBvcnRzLkVtYWlsSlNSZXNwb25zZVN0YXR1cyA9IEVtYWlsSlNSZXNwb25zZVN0YXR1cztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/emailjs-com/cjs/models/EmailJSResponseStatus.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/emailjs-com/cjs/store/store.js":
/*!*****************************************************!*\
  !*** ./node_modules/emailjs-com/cjs/store/store.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.store = void 0;\nexports.store = {\n    _origin: 'https://api.emailjs.com',\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vY2pzL3N0b3JlL3N0b3JlLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWE7QUFDYixhQUFhO0FBQ2I7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RldnRvcmNoLy4vbm9kZV9tb2R1bGVzL2VtYWlsanMtY29tL2Nqcy9zdG9yZS9zdG9yZS5qcz9kNGRiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdG9yZSA9IHZvaWQgMDtcbmV4cG9ydHMuc3RvcmUgPSB7XG4gICAgX29yaWdpbjogJ2h0dHBzOi8vYXBpLmVtYWlsanMuY29tJyxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/emailjs-com/cjs/store/store.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/emailjs-com/cjs/utils/validateParams.js":
/*!**************************************************************!*\
  !*** ./node_modules/emailjs-com/cjs/utils/validateParams.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.validateParams = void 0;\nconst validateParams = (userID, serviceID, templateID) => {\n    if (!userID) {\n        throw 'The user ID is required. Visit https://dashboard.emailjs.com/admin/integration';\n    }\n    if (!serviceID) {\n        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';\n    }\n    if (!templateID) {\n        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';\n    }\n    return true;\n};\nexports.validateParams = validateParams;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWxqcy1jb20vY2pzL3V0aWxzL3ZhbGlkYXRlUGFyYW1zLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZ0b3JjaC8uL25vZGVfbW9kdWxlcy9lbWFpbGpzLWNvbS9janMvdXRpbHMvdmFsaWRhdGVQYXJhbXMuanM/NzUzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudmFsaWRhdGVQYXJhbXMgPSB2b2lkIDA7XG5jb25zdCB2YWxpZGF0ZVBhcmFtcyA9ICh1c2VySUQsIHNlcnZpY2VJRCwgdGVtcGxhdGVJRCkgPT4ge1xuICAgIGlmICghdXNlcklEKSB7XG4gICAgICAgIHRocm93ICdUaGUgdXNlciBJRCBpcyByZXF1aXJlZC4gVmlzaXQgaHR0cHM6Ly9kYXNoYm9hcmQuZW1haWxqcy5jb20vYWRtaW4vaW50ZWdyYXRpb24nO1xuICAgIH1cbiAgICBpZiAoIXNlcnZpY2VJRCkge1xuICAgICAgICB0aHJvdyAnVGhlIHNlcnZpY2UgSUQgaXMgcmVxdWlyZWQuIFZpc2l0IGh0dHBzOi8vZGFzaGJvYXJkLmVtYWlsanMuY29tL2FkbWluJztcbiAgICB9XG4gICAgaWYgKCF0ZW1wbGF0ZUlEKSB7XG4gICAgICAgIHRocm93ICdUaGUgdGVtcGxhdGUgSUQgaXMgcmVxdWlyZWQuIFZpc2l0IGh0dHBzOi8vZGFzaGJvYXJkLmVtYWlsanMuY29tL2FkbWluL3RlbXBsYXRlcyc7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcbmV4cG9ydHMudmFsaWRhdGVQYXJhbXMgPSB2YWxpZGF0ZVBhcmFtcztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/emailjs-com/cjs/utils/validateParams.js\n");

/***/ })

};
;