webpackHotUpdate_N_E("pages/auctions",{

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {/*\nPurpose: For dynamic navigation between pages &\ndefining custome routes inside the application\nFor pages that has a token in the URL \nDocumentation: https://github.com/fridays/next-routes\n*/\n// The second set of parentheses is to invoke the function returned from the import statement \nvar routes = __webpack_require__(/*! next-routes */ \"./node_modules/next-routes/dist/index.js\")();\n\nroutes.add('/track/:address', 'track/show').add();\nmodule.exports = routes; // Look at video 178 on how to do routing\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcm91dGVzLmpzP2YxYzEiXSwibmFtZXMiOlsicm91dGVzIiwicmVxdWlyZSIsImFkZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFFLDZEQUFGLENBQVAsRUFBZjs7QUFFQUQsTUFBTSxDQUFDRSxHQUFQLENBQVcsaUJBQVgsRUFBOEIsWUFBOUIsRUFDQ0EsR0FERDtBQUdBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLE1BQWpCLEMsQ0FFQSIsImZpbGUiOiIuL3JvdXRlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5QdXJwb3NlOiBGb3IgZHluYW1pYyBuYXZpZ2F0aW9uIGJldHdlZW4gcGFnZXMgJlxuZGVmaW5pbmcgY3VzdG9tZSByb3V0ZXMgaW5zaWRlIHRoZSBhcHBsaWNhdGlvblxuRm9yIHBhZ2VzIHRoYXQgaGFzIGEgdG9rZW4gaW4gdGhlIFVSTCBcbkRvY3VtZW50YXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9mcmlkYXlzL25leHQtcm91dGVzXG4qL1xuLy8gVGhlIHNlY29uZCBzZXQgb2YgcGFyZW50aGVzZXMgaXMgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiByZXR1cm5lZCBmcm9tIHRoZSBpbXBvcnQgc3RhdGVtZW50IFxuY29uc3Qgcm91dGVzID0gcmVxdWlyZSAoJ25leHQtcm91dGVzJykoKTtcblxucm91dGVzLmFkZCgnL3RyYWNrLzphZGRyZXNzJywgJ3RyYWNrL3Nob3cnKVxuLmFkZCgpXG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVzOyBcblxuLy8gTG9vayBhdCB2aWRlbyAxNzggb24gaG93IHRvIGRvIHJvdXRpbmcgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./routes.js\n");

/***/ })

})