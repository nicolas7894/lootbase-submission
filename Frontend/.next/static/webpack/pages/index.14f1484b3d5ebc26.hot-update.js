"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./componets/utils/util.tsx":
/*!**********************************!*\
  !*** ./componets/utils/util.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shortenAddress\": function() { return /* binding */ shortenAddress; },\n/* harmony export */   \"toTimestamp\": function() { return /* binding */ toTimestamp; },\n/* harmony export */   \"weiConverter\": function() { return /* binding */ weiConverter; }\n/* harmony export */ });\nvar ref = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\"), utils = ref.utils, BigNumber = ref.BigNumber;\nvar shortenAddress = function(address) {\n    if (!address) return \"\";\n    if (address.startsWith(\"0x\")) {\n        if (address.length < 12) return address;\n        return address.slice(0, 6) + \"...\" + address.slice(-4);\n    }\n    if (address.length < 10) return address;\n    return address.slice(0, 4) + \"...\" + address.slice(-4);\n};\nvar toTimestamp = function(strDate) {\n    var datum = Date.parse(strDate);\n    return datum / 1000;\n};\nvar weiConverter = function(weiValue) {\n    var balance = BigNumber.from(weiValue);\n    return utils.formatEther(balance);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25ldHMvdXRpbHMvdXRpbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBMkJBLEdBQWlCLEdBQWpCQSxtQkFBTyxDQUFDLHNEQUFRLENBQUMsRUFBckNDLEtBQUssR0FBZUQsR0FBaUIsQ0FBckNDLEtBQUssRUFBRUMsU0FBUyxHQUFJRixHQUFpQixDQUE5QkUsU0FBUztBQUdoQixJQUFNQyxjQUFjLEdBQUcsU0FBQ0MsT0FBZSxFQUFLO0lBQy9DLElBQUksQ0FBQ0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLElBQUlBLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzVCLElBQUlELE9BQU8sQ0FBQ0UsTUFBTSxHQUFHLEVBQUUsRUFBRSxPQUFPRixPQUFPLENBQUM7UUFDeEMsT0FBT0EsT0FBTyxDQUFDRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBR0gsT0FBTyxDQUFDRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN4RDtJQUNELElBQUlILE9BQU8sQ0FBQ0UsTUFBTSxHQUFHLEVBQUUsRUFBRSxPQUFPRixPQUFPLENBQUM7SUFDeEMsT0FBT0EsT0FBTyxDQUFDRyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBR0gsT0FBTyxDQUFDRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN4RCxDQUFDO0FBQ0ssSUFBTUMsV0FBVyxHQUFHLFNBQUNDLE9BQVksRUFBSztJQUMzQyxJQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSCxPQUFPLENBQUM7SUFBRSxPQUFPQyxLQUFLLEdBQUMsSUFBSSxDQUFDO0NBQ3BEO0FBR00sSUFBTUcsWUFBWSxHQUFHLFNBQUNDLFFBQWEsRUFBSztJQUM3QyxJQUFNQyxPQUFPLEdBQUdiLFNBQVMsQ0FBQ2MsSUFBSSxDQUFDRixRQUFRLENBQUM7SUFDeEMsT0FBT2IsS0FBSyxDQUFDZ0IsV0FBVyxDQUFDRixPQUFPLENBQUMsQ0FBQztDQUNuQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25ldHMvdXRpbHMvdXRpbC50c3g/ZWI0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7dXRpbHMsIEJpZ051bWJlcn0gPSByZXF1aXJlKCdldGhlcnMnKTtcblxuXG5leHBvcnQgY29uc3Qgc2hvcnRlbkFkZHJlc3MgPSAoYWRkcmVzczogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCFhZGRyZXNzKSByZXR1cm4gXCJcIjtcbiAgICBpZiAoYWRkcmVzcy5zdGFydHNXaXRoKFwiMHhcIikpIHtcbiAgICAgIGlmIChhZGRyZXNzLmxlbmd0aCA8IDEyKSByZXR1cm4gYWRkcmVzcztcbiAgICAgIHJldHVybiBhZGRyZXNzLnNsaWNlKDAsIDYpICsgXCIuLi5cIiArIGFkZHJlc3Muc2xpY2UoLTQpO1xuICAgIH1cbiAgICBpZiAoYWRkcmVzcy5sZW5ndGggPCAxMCkgcmV0dXJuIGFkZHJlc3M7XG4gICAgcmV0dXJuIGFkZHJlc3Muc2xpY2UoMCwgNCkgKyBcIi4uLlwiICsgYWRkcmVzcy5zbGljZSgtNCk7XG4gIH07XG4gIGV4cG9ydCBjb25zdCB0b1RpbWVzdGFtcCA9IChzdHJEYXRlOiBhbnkpID0+IHtcbiAgICB2YXIgZGF0dW0gPSBEYXRlLnBhcnNlKHN0ckRhdGUpOyByZXR1cm4gZGF0dW0vMTAwMDtcbiAgfVxuXG5cbiAgZXhwb3J0IGNvbnN0IHdlaUNvbnZlcnRlciA9ICh3ZWlWYWx1ZTogYW55KSA9PiB7XG4gICAgY29uc3QgYmFsYW5jZSA9IEJpZ051bWJlci5mcm9tKHdlaVZhbHVlKTtcbiAgICByZXR1cm4gdXRpbHMuZm9ybWF0RXRoZXIoYmFsYW5jZSk7XG4gIH0iXSwibmFtZXMiOlsicmVxdWlyZSIsInV0aWxzIiwiQmlnTnVtYmVyIiwic2hvcnRlbkFkZHJlc3MiLCJhZGRyZXNzIiwic3RhcnRzV2l0aCIsImxlbmd0aCIsInNsaWNlIiwidG9UaW1lc3RhbXAiLCJzdHJEYXRlIiwiZGF0dW0iLCJEYXRlIiwicGFyc2UiLCJ3ZWlDb252ZXJ0ZXIiLCJ3ZWlWYWx1ZSIsImJhbGFuY2UiLCJmcm9tIiwiZm9ybWF0RXRoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./componets/utils/util.tsx\n");

/***/ })

});