webpackHotUpdate_N_E("pages/auctions/viewauctions",{

/***/ "./pages/auctions/viewauctions.js":
/*!****************************************!*\
  !*** ./pages/auctions/viewauctions.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_plasticBale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ethereum/plasticBale */ \"./ethereum/plasticBale.js\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/auctions/viewauctions.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar viewauctions = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(viewauctions, _Component);\n\n  var _super = _createSuper(viewauctions);\n\n  function viewauctions(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, viewauctions);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"componentDidMount\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var accounts;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_11__[\"default\"].eth.getAccounts();\n\n            case 2:\n              accounts = _context.sent;\n              //NOTE: Set the account back to account[0]\n              trackingContract.events.plasticBaleCompleted({\n                filter: {\n                  sellerAddress: accounts[1]\n                },\n                fromBlock: 0\n              }, function (error, event) {\n                /*Debugging \n                console.log(event); */\n                //1. Fetch data from event \n                var time = new Date(event.returnValues['time'] * 1000);\n                var date = time.toString();\n                this.setState({\n                  plasticBaleAddr: event.returnValues['plasticbale'],\n                  productionTime: date\n                }); //2. Render bale info to the page \n\n                this.renderBales();\n              }.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this))).on('error', console.error);\n              /* Debugging \n              await trackingContract.methods.getDeployedBales().call().then(console.log); \n               */\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n\n    _this.state = {\n      plasticBaleAddr: '',\n      productionTime: '',\n      cards: []\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(viewauctions, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }\n      }, __jsx(\"link\", {\n        rel: \"stylesheet\",\n        href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 17\n        }\n      }), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 17\n        }\n      }, \"Auctions\"), __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 17\n        }\n      }, \"Select your role in auctions\"));\n    }\n  }]);\n\n  return viewauctions;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (viewauctions);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXVjdGlvbnMvdmlld2F1Y3Rpb25zLmpzP2MxMjIiXSwibmFtZXMiOlsidmlld2F1Y3Rpb25zIiwicHJvcHMiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInRyYWNraW5nQ29udHJhY3QiLCJldmVudHMiLCJwbGFzdGljQmFsZUNvbXBsZXRlZCIsImZpbHRlciIsInNlbGxlckFkZHJlc3MiLCJmcm9tQmxvY2siLCJlcnJvciIsImV2ZW50IiwidGltZSIsIkRhdGUiLCJyZXR1cm5WYWx1ZXMiLCJkYXRlIiwidG9TdHJpbmciLCJzZXRTdGF0ZSIsInBsYXN0aWNCYWxlQWRkciIsInByb2R1Y3Rpb25UaW1lIiwicmVuZGVyQmFsZXMiLCJiaW5kIiwib24iLCJjb25zb2xlIiwic3RhdGUiLCJjYXJkcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsWTs7Ozs7QUFFRix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLDBaQVdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBR09DLHVEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFQUhQOztBQUFBO0FBR1ZDLHNCQUhVO0FBSWhCO0FBQ0FDLDhCQUFnQixDQUFDQyxNQUFqQixDQUF3QkMsb0JBQXhCLENBQTZDO0FBQ3pDQyxzQkFBTSxFQUFFO0FBQUVDLCtCQUFhLEVBQUVMLFFBQVEsQ0FBQyxDQUFEO0FBQXpCLGlCQURpQztBQUNETSx5QkFBUyxFQUFFO0FBRFYsZUFBN0MsRUFFRyxVQUFVQyxLQUFWLEVBQWlCQyxLQUFqQixFQUF3QjtBQUN2QjtBQUNaO0FBRVk7QUFDQSxvQkFBSUMsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU0YsS0FBSyxDQUFDRyxZQUFOLENBQW1CLE1BQW5CLElBQTZCLElBQXRDLENBQVg7QUFDQSxvQkFBSUMsSUFBSSxHQUFHSCxJQUFJLENBQUNJLFFBQUwsRUFBWDtBQUNBLHFCQUFLQyxRQUFMLENBQWM7QUFDVkMsaUNBQWUsRUFBRVAsS0FBSyxDQUFDRyxZQUFOLENBQW1CLGFBQW5CLENBRFA7QUFFVkssZ0NBQWMsRUFBRUo7QUFGTixpQkFBZCxFQVB1QixDQVd2Qjs7QUFDQSxxQkFBS0ssV0FBTDtBQUVILGVBZEUsQ0FjREMsSUFkQyx5R0FGSCxFQWlCS0MsRUFqQkwsQ0FpQlEsT0FqQlIsRUFpQmlCQyxPQUFPLENBQUNiLEtBakJ6QjtBQW1CQTtBQUNSO0FBQ0E7O0FBMUJ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVhEOztBQUVmLFVBQUtjLEtBQUwsR0FBYTtBQUNUTixxQkFBZSxFQUFFLEVBRFI7QUFFVEMsb0JBQWMsRUFBRSxFQUZQO0FBR1RNLFdBQUssRUFBRTtBQUhFLEtBQWI7QUFGZTtBQVFsQjs7Ozs2QkFtQ1E7QUFFTCxhQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQ0ksWUFBSSxFQUFDLGdFQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEosRUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQU5KLENBREo7QUFXSDs7OztFQTFEc0JDLCtDOztBQThEWjVCLDJFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXVjdGlvbnMvdmlld2F1Y3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCBwbGFzdGljQmFsZUNvbnRyYWN0IGZyb20gJy4uLy4uL2V0aGVyZXVtL3BsYXN0aWNCYWxlJztcblxuY2xhc3Mgdmlld2F1Y3Rpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBsYXN0aWNCYWxlQWRkcjogJycsXG4gICAgICAgICAgICBwcm9kdWN0aW9uVGltZTogJycsXG4gICAgICAgICAgICBjYXJkczogW11cblxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgLy8xLiBGZXRjaCBkYXRhIGZyb20gZXZlbnQgXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgLy9OT1RFOiBTZXQgdGhlIGFjY291bnQgYmFjayB0byBhY2NvdW50WzBdXG4gICAgICAgIHRyYWNraW5nQ29udHJhY3QuZXZlbnRzLnBsYXN0aWNCYWxlQ29tcGxldGVkKHtcbiAgICAgICAgICAgIGZpbHRlcjogeyBzZWxsZXJBZGRyZXNzOiBhY2NvdW50c1sxXSB9LCBmcm9tQmxvY2s6IDBcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yLCBldmVudCkge1xuICAgICAgICAgICAgLypEZWJ1Z2dpbmcgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7ICovXG5cbiAgICAgICAgICAgIC8vMS4gRmV0Y2ggZGF0YSBmcm9tIGV2ZW50IFxuICAgICAgICAgICAgdmFyIHRpbWUgPSBuZXcgRGF0ZShldmVudC5yZXR1cm5WYWx1ZXNbJ3RpbWUnXSAqIDEwMDApO1xuICAgICAgICAgICAgdmFyIGRhdGUgPSB0aW1lLnRvU3RyaW5nKCk7IFxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcGxhc3RpY0JhbGVBZGRyOiBldmVudC5yZXR1cm5WYWx1ZXNbJ3BsYXN0aWNiYWxlJ10sXG4gICAgICAgICAgICAgICAgcHJvZHVjdGlvblRpbWU6IGRhdGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8yLiBSZW5kZXIgYmFsZSBpbmZvIHRvIHRoZSBwYWdlIFxuICAgICAgICAgICAgdGhpcy5yZW5kZXJCYWxlcygpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgIC5vbignZXJyb3InLCBjb25zb2xlLmVycm9yKTtcblxuICAgICAgICAvKiBEZWJ1Z2dpbmcgXG4gICAgICAgIGF3YWl0IHRyYWNraW5nQ29udHJhY3QubWV0aG9kcy5nZXREZXBsb3llZEJhbGVzKCkuY2FsbCgpLnRoZW4oY29uc29sZS5sb2cpOyBcbiAgICAgICAgICovXG5cbiAgICB9O1xuXG4gICAgXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4xL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxoMT5BdWN0aW9uczwvaDE+XG4gICAgICAgICAgICAgICAgPGgyPlNlbGVjdCB5b3VyIHJvbGUgaW4gYXVjdGlvbnM8L2gyPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHZpZXdhdWN0aW9uczsgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auctions/viewauctions.js\n");

/***/ })

})