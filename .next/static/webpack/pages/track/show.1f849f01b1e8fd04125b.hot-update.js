webpackHotUpdate_N_E("pages/track/show",{

/***/ "./pages/track/show.js":
/*!*****************************!*\
  !*** ./pages/track/show.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_tracking__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ethereum/tracking */ \"./ethereum/tracking.js\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/track/show.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n //import { Divider } from 'semantic-ui-react';\n\nvar show = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(show, _Component);\n\n  var _super = _createSuper(show);\n\n  function show(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, show);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"componentDidMount\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var accounts;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_10__[\"default\"].eth.getAccounts();\n\n            case 2:\n              accounts = _context.sent;\n              console.log();\n              _ethereum_tracking__WEBPACK_IMPORTED_MODULE_11__[\"default\"].events.updateStatusMachine({\n                filter: {\n                  plasticBottleAddress: _this.state.bottlesLogged\n                },\n                fromBlock: 0\n              }, function (error, event) {\n                /*For debugging purposes \n                console.log(event);\n                console.log(this.state.bottlesLogged.indexOf(event.returnValues['plasticBottleAddress'] ));\n                console.log(this.state.rows);\n                console.log(event.returnValues['plasticBottleAddress']);\n                */\n                var index = this.state.bottlesLogged.indexOf(event.returnValues['plasticBottleAddress']);\n                this.updateRow(index, event.returnValues['status']);\n              }.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this))).on('error', console.error);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(show, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }\n      }, __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 17\n        }\n      }, \"Track \", this.props.address));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(props) {\n        var address;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                //1. fetches address of the bottle from the URL\n                //Perfomed at the server before html is loaded\n                address = props.query.address;\n                return _context2.abrupt(\"return\", {\n                  address: address\n                });\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function getInitialProps(_x) {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }() //2. fetches all events related to the updating the bottle route\n    // to find address of the entity \n\n  }]);\n\n  return show;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]); //At the end of each page, a component is expected to be returned \n// If not, Next.js throws an error \n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (show);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHJhY2svc2hvdy5qcz8yMTRmIl0sIm5hbWVzIjpbInNob3ciLCJwcm9wcyIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY29uc29sZSIsImxvZyIsInRyYWNraW5nQ29udHJhY3QiLCJldmVudHMiLCJ1cGRhdGVTdGF0dXNNYWNoaW5lIiwiZmlsdGVyIiwicGxhc3RpY0JvdHRsZUFkZHJlc3MiLCJzdGF0ZSIsImJvdHRsZXNMb2dnZWQiLCJmcm9tQmxvY2siLCJlcnJvciIsImV2ZW50IiwiaW5kZXgiLCJpbmRleE9mIiwicmV0dXJuVmFsdWVzIiwidXBkYXRlUm93IiwiYmluZCIsIm9uIiwiYWRkcmVzcyIsInF1ZXJ5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztJQUVNQSxJOzs7OztBQUVGLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsMFpBaUJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0dDLHVEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFQURIOztBQUFBO0FBQ2RDLHNCQURjO0FBRXBCQyxxQkFBTyxDQUFDQyxHQUFSO0FBRUFDLHlFQUFnQixDQUFDQyxNQUFqQixDQUF3QkMsbUJBQXhCLENBQTRDO0FBQ3hDQyxzQkFBTSxFQUFFO0FBQUVDLHNDQUFvQixFQUFFLE1BQUtDLEtBQUwsQ0FBV0M7QUFBbkMsaUJBRGdDO0FBQ21CQyx5QkFBUyxFQUFFO0FBRDlCLGVBQTVDLEVBRUcsVUFBVUMsS0FBVixFQUFpQkMsS0FBakIsRUFBd0I7QUFDdkI7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1ksb0JBQUlDLEtBQUssR0FBRyxLQUFLTCxLQUFMLENBQVdDLGFBQVgsQ0FBeUJLLE9BQXpCLENBQWlDRixLQUFLLENBQUNHLFlBQU4sQ0FBbUIsc0JBQW5CLENBQWpDLENBQVo7QUFDQSxxQkFBS0MsU0FBTCxDQUFlSCxLQUFmLEVBQXNCRCxLQUFLLENBQUNHLFlBQU4sQ0FBbUIsUUFBbkIsQ0FBdEI7QUFDSCxlQVRFLENBU0RFLElBVEMseUdBRkgsRUFZS0MsRUFaTCxDQVlRLE9BWlIsRUFZaUJqQixPQUFPLENBQUNVLEtBWnpCOztBQUpvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWpCTDs7QUFFZixVQUFLSCxLQUFMLEdBQWEsRUFBYjtBQUZlO0FBSWxCOzs7OzZCQW1DTztBQUVKLGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVcsS0FBS1osS0FBTCxDQUFXdUIsT0FBdEIsQ0FESixDQURKO0FBTUg7Ozs7Z09BekMyQnZCLEs7Ozs7OztBQUV4QjtBQUNBO0FBQ091Qix1QixHQUFXdkIsS0FBSyxDQUFDd0IsSyxDQUFqQkQsTztrREFFQTtBQUFDQSx5QkFBTyxFQUFQQTtBQUFELGlCOzs7Ozs7Ozs7Ozs7Ozs7UUFHUDtBQUNBOzs7OztFQWxCV0UsK0MsR0FxRGY7QUFDQTs7O0FBQ2UxQixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3RyYWNrL3Nob3cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnOyBcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IHRyYWNraW5nQ29udHJhY3QgZnJvbSAnLi4vLi4vZXRoZXJldW0vdHJhY2tpbmcnOyBcbi8vaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuY2xhc3Mgc2hvdyBleHRlbmRzIENvbXBvbmVudHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICAgIH07XG4gICAgfVxuXG4gICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcblxuICAgICAgICAvLzEuIGZldGNoZXMgYWRkcmVzcyBvZiB0aGUgYm90dGxlIGZyb20gdGhlIFVSTFxuICAgICAgICAvL1BlcmZvbWVkIGF0IHRoZSBzZXJ2ZXIgYmVmb3JlIGh0bWwgaXMgbG9hZGVkXG4gICAgICAgIGNvbnN0IHthZGRyZXNzfSA9IHByb3BzLnF1ZXJ5O1xuXG4gICAgICAgIHJldHVybiB7YWRkcmVzc307XG4gICAgICAgIH1cblxuICAgICAgICAvLzIuIGZldGNoZXMgYWxsIGV2ZW50cyByZWxhdGVkIHRvIHRoZSB1cGRhdGluZyB0aGUgYm90dGxlIHJvdXRlXG4gICAgICAgIC8vIHRvIGZpbmQgYWRkcmVzcyBvZiB0aGUgZW50aXR5IFxuICAgICAgICBjb21wb25lbnREaWRNb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICBjb25zb2xlLmxvZygpO1xuXG4gICAgICAgIHRyYWNraW5nQ29udHJhY3QuZXZlbnRzLnVwZGF0ZVN0YXR1c01hY2hpbmUoe1xuICAgICAgICAgICAgZmlsdGVyOiB7IHBsYXN0aWNCb3R0bGVBZGRyZXNzOiB0aGlzLnN0YXRlLmJvdHRsZXNMb2dnZWR9LCBmcm9tQmxvY2s6IDBcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yLCBldmVudCkge1xuICAgICAgICAgICAgLypGb3IgZGVidWdnaW5nIHB1cnBvc2VzIFxuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5ib3R0bGVzTG9nZ2VkLmluZGV4T2YoZXZlbnQucmV0dXJuVmFsdWVzWydwbGFzdGljQm90dGxlQWRkcmVzcyddICkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5yb3dzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnJldHVyblZhbHVlc1sncGxhc3RpY0JvdHRsZUFkZHJlc3MnXSk7XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zdGF0ZS5ib3R0bGVzTG9nZ2VkLmluZGV4T2YoZXZlbnQucmV0dXJuVmFsdWVzWydwbGFzdGljQm90dGxlQWRkcmVzcyddKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUm93KGluZGV4LCBldmVudC5yZXR1cm5WYWx1ZXNbJ3N0YXR1cyddKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLm9uKCdlcnJvcicsIGNvbnNvbGUuZXJyb3IpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgXG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5UcmFjayB7dGhpcy5wcm9wcy5hZGRyZXNzfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICB9XG4gICAgXG4gICAgLy9BdCB0aGUgZW5kIG9mIGVhY2ggcGFnZSwgYSBjb21wb25lbnQgaXMgZXhwZWN0ZWQgdG8gYmUgcmV0dXJuZWQgXG4gICAgLy8gSWYgbm90LCBOZXh0LmpzIHRocm93cyBhbiBlcnJvciBcbiAgICBleHBvcnQgZGVmYXVsdCBzaG93OyAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/track/show.js\n");

/***/ })

})