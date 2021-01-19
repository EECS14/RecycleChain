webpackHotUpdate_N_E("pages/auctions/joinAuction",{

/***/ "./pages/auctions/joinAuction.js":
/*!***************************************!*\
  !*** ./pages/auctions/joinAuction.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_plasticBale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ethereum/plasticBale */ \"./ethereum/plasticBale.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/auctions/joinAuction.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar joinAuction = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(joinAuction, _Component);\n\n  var _super = _createSuper(joinAuction);\n\n  function joinAuction(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, joinAuction);\n\n    _this = _super.call(this, props);\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(joinAuction, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 13\n        }\n      }, __jsx(\"link\", {\n        rel: \"stylesheet\",\n        href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 17\n        }\n      }), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 17\n        }\n      }, \"Live auction \"), __jsx(\"div\", {\n        className: \"AuctionContainer\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 17\n        }\n      }, __jsx(Statistic.Group, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 17\n        }\n      }, __jsx(Statistic, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 5\n        }\n      }, __jsx(Statistic.Value, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 7\n        }\n      }, \"22\"), __jsx(Statistic.Label, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 7\n        }\n      }, \"Saves\")), __jsx(Statistic, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 5\n        }\n      }, __jsx(Statistic.Value, {\n        text: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 7\n        }\n      }, \"Three\", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 9\n        }\n      }), \"Thousand\"), __jsx(Statistic.Label, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 7\n        }\n      }, \"Signups\")), __jsx(Statistic, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 5\n        }\n      }, __jsx(Statistic.Value, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 7\n        }\n      }, __jsx(Icon, {\n        name: \"plane\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 9\n        }\n      }), \"5\"), __jsx(Statistic.Label, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 7\n        }\n      }, \"Flights\")), __jsx(Statistic, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 5\n        }\n      }, __jsx(Statistic.Value, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 7\n        }\n      }, __jsx(Image, {\n        src: \"https://react.semantic-ui.com/images/avatar/small/joe.jpg\",\n        inline: true,\n        circular: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 9\n        }\n      }), \"42\"), __jsx(Statistic.Label, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 7\n        }\n      }, \"Team Members\")))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"], {\n        onSubmit: this.onStartAuction,\n        error: !!this.state.errorMessage,\n        success: this.state.hasNoError,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 17\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"].Field, {\n        width: 4,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 21\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 25\n        }\n      }, \"Amount\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n        value: this.state.startingPrice,\n        label: {\n          basic: true,\n          content: 'Wei'\n        },\n        labelPosition: \"right\",\n        onChange: function onChange(event) {\n          return _this2.setState({\n            startingPrice: event.target.value\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 25\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Message\"], {\n        error: true,\n        header: \"Error!\",\n        content: this.state.errorMessage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 21\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Message\"], {\n        success: true,\n        header: \"Success!\",\n        content: \"Bid is Placed!\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Button\"], {\n        loading: this.state.loading,\n        type: \"submit\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 21\n        }\n      }, \"Place Bid\")));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {\n        var address;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                //fetches address of the bottle from the URL\n                address = props.query.address;\n                return _context.abrupt(\"return\", {\n                  address: address\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps(_x) {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return joinAuction;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (joinAuction);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXVjdGlvbnMvam9pbkF1Y3Rpb24uanM/YTI3YyJdLCJuYW1lcyI6WyJqb2luQXVjdGlvbiIsInByb3BzIiwic3RhdGUiLCJvblN0YXJ0QXVjdGlvbiIsImVycm9yTWVzc2FnZSIsImhhc05vRXJyb3IiLCJzdGFydGluZ1ByaWNlIiwiYmFzaWMiLCJjb250ZW50IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwibG9hZGluZyIsImFkZHJlc3MiLCJxdWVyeSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxXOzs7OztBQUNGLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZlO0FBTWxCOzs7OzZCQWFRO0FBQUE7O0FBRUwsYUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUNJLFlBQUksRUFBQyxnRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxKLEVBT0k7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQSxNQUFDLFNBQUQsQ0FBVyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDWixNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsU0FBRCxDQUFXLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUUsTUFBQyxTQUFELENBQVcsS0FBWDtBQUFBO0FBQUE7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O0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaEJKLENBL0NKLENBREo7QUF3RUg7Ozs7K05BckY0QlosSzs7Ozs7O0FBRXpCO0FBQ1FhLHVCLEdBQVliLEtBQUssQ0FBQ2MsSyxDQUFsQkQsTztpREFFRDtBQUFFQSx5QkFBTyxFQUFQQTtBQUFGLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBZFdFLCtDOztBQW9HWGhCLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXVjdGlvbnMvam9pbkF1Y3Rpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCwgTWVzc2FnZSwgTGFiZWwgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCBwbGFzdGljQmFsZUNvbnRyYWN0IGZyb20gJy4uLy4uL2V0aGVyZXVtL3BsYXN0aWNCYWxlJztcblxuY2xhc3Mgam9pbkF1Y3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuXG4gICAgICAgIH07XG4gICAgfSBcblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcblxuICAgICAgICAvL2ZldGNoZXMgYWRkcmVzcyBvZiB0aGUgYm90dGxlIGZyb20gdGhlIFVSTFxuICAgICAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHByb3BzLnF1ZXJ5O1xuXG4gICAgICAgIHJldHVybiB7IGFkZHJlc3MgfTtcbiAgICB9XG5cblxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4xL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxoMT5MaXZlIGF1Y3Rpb24gPC9oMT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdBdWN0aW9uQ29udGFpbmVyJz5cblxuICAgICAgICAgICAgICAgIDxTdGF0aXN0aWMuR3JvdXA+XG4gICAgPFN0YXRpc3RpYz5cbiAgICAgIDxTdGF0aXN0aWMuVmFsdWU+MjI8L1N0YXRpc3RpYy5WYWx1ZT5cbiAgICAgIDxTdGF0aXN0aWMuTGFiZWw+U2F2ZXM8L1N0YXRpc3RpYy5MYWJlbD5cbiAgICA8L1N0YXRpc3RpYz5cblxuICAgIDxTdGF0aXN0aWM+XG4gICAgICA8U3RhdGlzdGljLlZhbHVlIHRleHQ+XG4gICAgICAgIFRocmVlXG4gICAgICAgIDxiciAvPlxuICAgICAgICBUaG91c2FuZFxuICAgICAgPC9TdGF0aXN0aWMuVmFsdWU+XG4gICAgICA8U3RhdGlzdGljLkxhYmVsPlNpZ251cHM8L1N0YXRpc3RpYy5MYWJlbD5cbiAgICA8L1N0YXRpc3RpYz5cblxuICAgIDxTdGF0aXN0aWM+XG4gICAgICA8U3RhdGlzdGljLlZhbHVlPlxuICAgICAgICA8SWNvbiBuYW1lPSdwbGFuZScgLz41XG4gICAgICA8L1N0YXRpc3RpYy5WYWx1ZT5cbiAgICAgIDxTdGF0aXN0aWMuTGFiZWw+RmxpZ2h0czwvU3RhdGlzdGljLkxhYmVsPlxuICAgIDwvU3RhdGlzdGljPlxuXG4gICAgPFN0YXRpc3RpYz5cbiAgICAgIDxTdGF0aXN0aWMuVmFsdWU+XG4gICAgICAgIDxJbWFnZSBzcmM9J2h0dHBzOi8vcmVhY3Quc2VtYW50aWMtdWkuY29tL2ltYWdlcy9hdmF0YXIvc21hbGwvam9lLmpwZycgaW5saW5lIGNpcmN1bGFyIC8+XG4gICAgICAgIDQyXG4gICAgICA8L1N0YXRpc3RpYy5WYWx1ZT5cbiAgICAgIDxTdGF0aXN0aWMuTGFiZWw+VGVhbSBNZW1iZXJzPC9TdGF0aXN0aWMuTGFiZWw+XG4gICAgPC9TdGF0aXN0aWM+XG4gIDwvU3RhdGlzdGljLkdyb3VwPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdGFydEF1Y3Rpb259IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSBzdWNjZXNzPXt0aGlzLnN0YXRlLmhhc05vRXJyb3J9PlxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuc3RhcnRpbmdQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt7IGJhc2ljOiB0cnVlLCBjb250ZW50OiAnV2VpJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj0ncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0aW5nUHJpY2U6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX0vPiBcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiRXJyb3IhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XG5cblxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBzdWNjZXNzIGhlYWRlcj1cIlN1Y2Nlc3MhXCIgY29udGVudD1cIkJpZCBpcyBQbGFjZWQhXCIgLz5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSB0eXBlPSdzdWJtaXQnPlBsYWNlIEJpZDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cblxuXG5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBqb2luQXVjdGlvbjsgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auctions/joinAuction.js\n");

/***/ })

})