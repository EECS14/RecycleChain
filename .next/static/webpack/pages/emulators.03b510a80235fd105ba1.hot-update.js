webpackHotUpdate_N_E("pages/emulators",{

/***/ "./pages/emulators.js":
/*!****************************!*\
  !*** ./pages/emulators.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/emulators.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar index = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(index, _Component);\n\n  var _super = _createSuper(index);\n\n  function index(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, index);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      productionMachine: false,\n      sortingMachine: false\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(index, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 13\n        }\n      }, __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 13\n        }\n      }, \"Emulators Page\"), __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 13\n        }\n      }, \" This page is to emulate the functionality of machines participating in the system \", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 99\n        }\n      }), \"Choose which machine you would like to emulate\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Menu\"], {\n        widths: 3,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 13\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Menu\"].Item, {\n        name: \"Production Line Machine\",\n        onClick: function onClick() {\n          return _this2.setState({\n            productionMachine: true,\n            y: false,\n            selectBuyer: false\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }\n      }, \" Manufacturer\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__[\"Menu\"].Item, {\n        name: \"Sorting Machine\",\n        onClick: function onClick() {\n          return _this2.setState({\n            selectSortingFacility: true,\n            selectManufacturer: false,\n            selectBuyer: false\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }\n      }, \" Sorting Facility\")));\n    }\n  }]);\n\n  return index;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]); //At the end of each page, a component is expected to be returned \n// If not, Next.js throws an error \n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW11bGF0b3JzLmpzPzc5ZjUiXSwibmFtZXMiOlsiaW5kZXgiLCJwcm9wcyIsInN0YXRlIiwicHJvZHVjdGlvbk1hY2hpbmUiLCJzb3J0aW5nTWFjaGluZSIsInNldFN0YXRlIiwieSIsInNlbGVjdEJ1eWVyIiwic2VsZWN0U29ydGluZ0ZhY2lsaXR5Iiwic2VsZWN0TWFudWZhY3R1cmVyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxLOzs7OztBQUNGLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsdUJBQWlCLEVBQUUsS0FEVjtBQUVSQyxvQkFBYyxFQUFFO0FBRlIsS0FBYjtBQUZlO0FBTWxCOzs7OzZCQUdPO0FBQUE7O0FBRUosYUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFEQSxFQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0dBQXNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBdEYsbURBRkEsRUFNQSxNQUFDLHNEQUFEO0FBQU0sY0FBTSxFQUFFLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNRLE1BQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsWUFBSSxFQUFDLHlCQUFoQjtBQUEwQyxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFRiw2QkFBaUIsRUFBRSxJQUFyQjtBQUEyQkcsYUFBQyxFQUFFLEtBQTlCO0FBQXFDQyx1QkFBVyxFQUFFO0FBQWxELFdBQWQsQ0FBTjtBQUFBLFNBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRFIsRUFFUSxNQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLFlBQUksRUFBQyxpQkFBaEI7QUFBa0MsZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDRixRQUFMLENBQWM7QUFBRUcsaUNBQXFCLEVBQUUsSUFBekI7QUFBK0JDLDhCQUFrQixFQUFFLEtBQW5EO0FBQTBERix1QkFBVyxFQUFFO0FBQXZFLFdBQWQsQ0FBTjtBQUFBLFNBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRlIsQ0FOQSxDQURKO0FBZUg7Ozs7RUEzQmVHLCtDLEdBK0JoQjtBQUNBOzs7QUFDZVYsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9lbXVsYXRvcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnOyBcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgIFxuICAgICAgICAgICAgcHJvZHVjdGlvbk1hY2hpbmU6IGZhbHNlLFxuICAgICAgICAgICAgIHNvcnRpbmdNYWNoaW5lOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgcmVuZGVyKCl7XG4gICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkVtdWxhdG9ycyBQYWdlPC9oMT5cbiAgICAgICAgICAgIDxwPiBUaGlzIHBhZ2UgaXMgdG8gZW11bGF0ZSB0aGUgZnVuY3Rpb25hbGl0eSBvZiBtYWNoaW5lcyBwYXJ0aWNpcGF0aW5nIGluIHRoZSBzeXN0ZW0gPGJyLz5cbiAgICAgICAgICAgICAgICBDaG9vc2Ugd2hpY2ggbWFjaGluZSB5b3Ugd291bGQgbGlrZSB0byBlbXVsYXRlXG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxNZW51IHdpZHRocz17M30+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nUHJvZHVjdGlvbiBMaW5lIE1hY2hpbmUnIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0aW9uTWFjaGluZTogdHJ1ZSwgeTogZmFsc2UsIHNlbGVjdEJ1eWVyOiBmYWxzZSB9KX0gPiBNYW51ZmFjdHVyZXI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdTb3J0aW5nIE1hY2hpbmUnIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RTb3J0aW5nRmFjaWxpdHk6IHRydWUsIHNlbGVjdE1hbnVmYWN0dXJlcjogZmFsc2UsIHNlbGVjdEJ1eWVyOiBmYWxzZSB9KX0gPiBTb3J0aW5nIEZhY2lsaXR5PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9NZW51PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIH1cbiAgICBcbiAgICAvL0F0IHRoZSBlbmQgb2YgZWFjaCBwYWdlLCBhIGNvbXBvbmVudCBpcyBleHBlY3RlZCB0byBiZSByZXR1cm5lZCBcbiAgICAvLyBJZiBub3QsIE5leHQuanMgdGhyb3dzIGFuIGVycm9yIFxuICAgIGV4cG9ydCBkZWZhdWx0IGluZGV4OyAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/emulators.js\n");

/***/ })

})