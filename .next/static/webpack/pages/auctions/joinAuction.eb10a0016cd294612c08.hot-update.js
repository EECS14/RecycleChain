webpackHotUpdate_N_E("pages/auctions/joinAuction",{

/***/ "./pages/auctions/joinAuction.js":
/*!***************************************!*\
  !*** ./pages/auctions/joinAuction.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_plasticBale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ethereum/plasticBale */ \"./ethereum/plasticBale.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/auctions/joinAuction.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar joinAuction = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(joinAuction, _Component);\n\n  var _super = _createSuper(joinAuction);\n\n  function joinAuction(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, joinAuction);\n\n    _this = _super.call(this, props);\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(joinAuction, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 13\n        }\n      }, __jsx(\"link\", {\n        rel: \"stylesheet\",\n        href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 17\n        }\n      }), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 17\n        }\n      }, \"Live Auction\"), __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 17\n        }\n      }, \" Plastic Bale being auctioned: \", this.props.address, \" \"), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 17\n        }\n      }), __jsx(\"div\", {\n        className: \"AuctionContainer\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 17\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"].Group, {\n        widths: \"four\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 25\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"].Value, {\n        text: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 29\n        }\n      }, \"22\", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 29\n        }\n      }), \"Wei\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"].Label, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 29\n        }\n      }, \"Highest Bid\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 25\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"].Value, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 29\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Icon\"], {\n        name: \"users\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 33\n        }\n      }), \" 10\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"].Label, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 29\n        }\n      }, \"Bidders\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 25\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"].Value, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 29\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Image\"], {\n        src: \"https://react.semantic-ui.com/images/avatar/small/joe.jpg\",\n        inline: true,\n        circular: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 33\n        }\n      }), \"42\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"].Label, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 29\n        }\n      }, \"Team Members\")))), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }\n      }), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"], {\n        onSubmit: this.onStartAuction,\n        error: !!this.state.errorMessage,\n        success: this.state.hasNoError,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 17\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"].Field, {\n        width: 4,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 21\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 25\n        }\n      }, \"Amount\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n        value: this.state.startingPrice,\n        label: {\n          basic: true,\n          content: 'Wei'\n        },\n        labelPosition: \"right\",\n        onChange: function onChange(event) {\n          return _this2.setState({\n            startingPrice: event.target.value\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 25\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Message\"], {\n        error: true,\n        header: \"Error!\",\n        content: this.state.errorMessage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 21\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Message\"], {\n        success: true,\n        header: \"Success!\",\n        content: \"Bid is Placed!\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 21\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Button\"], {\n        loading: this.state.loading,\n        type: \"submit\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }\n      }, \"Place Bid\")), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 17\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Button\"], {\n        loading: this.state.loading,\n        onClick: this.exitAuction,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 17\n        }\n      }, \"Exit Auction \"), __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 17\n        }\n      }, \" You can only exit the auction if no bids were placed!\"));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {\n        var address;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                //fetches address of the bottle from the URL\n                address = props.query.address;\n                return _context.abrupt(\"return\", {\n                  address: address\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function getInitialProps(_x) {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return joinAuction;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (joinAuction);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXVjdGlvbnMvam9pbkF1Y3Rpb24uanM/YTI3YyJdLCJuYW1lcyI6WyJqb2luQXVjdGlvbiIsInByb3BzIiwic3RhdGUiLCJhZGRyZXNzIiwib25TdGFydEF1Y3Rpb24iLCJlcnJvck1lc3NhZ2UiLCJoYXNOb0Vycm9yIiwic3RhcnRpbmdQcmljZSIsImJhc2ljIiwiY29udGVudCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvYWRpbmciLCJleGl0QXVjdGlvbiIsInF1ZXJ5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFc7Ozs7O0FBQ0YsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmU7QUFNbEI7Ozs7NkJBWVE7QUFBQTs7QUFFTCxhQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQ0ksWUFBSSxFQUFDLGdFQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTEosRUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQUFvQyxLQUFLRCxLQUFMLENBQVdFLE9BQS9DLE1BTkosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUEosRUFTSTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVJLE1BQUMsMkRBQUQsQ0FBVyxLQUFYO0FBQWlCLGNBQU0sRUFBQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUQ7QUFBUSxlQUFPLEVBQUUsS0FBS0gsS0FBTCxDQUFXWSxPQUE1QjtBQUFxQyxZQUFJLEVBQUMsUUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFoQkosQ0E3Q0osRUFnRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWhFSixFQWtFSSxNQUFDLHdEQUFEO0FBQVEsZUFBTyxFQUFFLEtBQUtaLEtBQUwsQ0FBV1ksT0FBNUI7QUFBcUMsZUFBTyxFQUFFLEtBQUtDLFdBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBbEVKLEVBbUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0VBbkVKLENBREo7QUEwRUg7Ozs7K05BdEY0QmQsSzs7Ozs7O0FBQ3pCO0FBQ1FFLHVCLEdBQVlGLEtBQUssQ0FBQ2UsSyxDQUFsQmIsTztpREFFRDtBQUFFQSx5QkFBTyxFQUFQQTtBQUFGLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBYldjLCtDOztBQXFHWGpCLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXVjdGlvbnMvam9pbkF1Y3Rpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCwgTWVzc2FnZSwgSWNvbiwgSW1hZ2UsIFN0YXRpc3RpYyB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IHBsYXN0aWNCYWxlQ29udHJhY3QgZnJvbSAnLi4vLi4vZXRoZXJldW0vcGxhc3RpY0JhbGUnO1xuXG5jbGFzcyBqb2luQXVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG5cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG4gICAgICAgIC8vZmV0Y2hlcyBhZGRyZXNzIG9mIHRoZSBib3R0bGUgZnJvbSB0aGUgVVJMXG4gICAgICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gcHJvcHMucXVlcnk7XG4gICAgXG4gICAgICAgIHJldHVybiB7IGFkZHJlc3MgfTtcbiAgICB9XG5cblxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4xL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxoMT5MaXZlIEF1Y3Rpb248L2gxPlxuICAgICAgICAgICAgICAgIDxoMj4gUGxhc3RpYyBCYWxlIGJlaW5nIGF1Y3Rpb25lZDoge3RoaXMucHJvcHMuYWRkcmVzc30gPC9oMj5cbiAgICAgICAgICAgICAgICA8YnIvPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0F1Y3Rpb25Db250YWluZXInPlxuXG4gICAgICAgICAgICAgICAgICAgIDxTdGF0aXN0aWMuR3JvdXAgd2lkdGhzPSdmb3VyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGF0aXN0aWM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYy5WYWx1ZSB0ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2VpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGF0aXN0aWMuVmFsdWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYy5MYWJlbD5IaWdoZXN0IEJpZDwvU3RhdGlzdGljLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGF0aXN0aWM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGF0aXN0aWM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYy5WYWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT0ndXNlcnMnIC8+IDEwXG4gICAgICAgICAgICAgICAgICAgICAgPC9TdGF0aXN0aWMuVmFsdWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYy5MYWJlbD5CaWRkZXJzPC9TdGF0aXN0aWMuTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YXRpc3RpYz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhdGlzdGljLlZhbHVlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPSdodHRwczovL3JlYWN0LnNlbWFudGljLXVpLmNvbS9pbWFnZXMvYXZhdGFyL3NtYWxsL2pvZS5qcGcnIGlubGluZSBjaXJjdWxhciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGF0aXN0aWMuVmFsdWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYy5MYWJlbD5UZWFtIE1lbWJlcnM8L1N0YXRpc3RpYy5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhdGlzdGljPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YXRpc3RpYy5Hcm91cD5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG5cblxuXG4gICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdGFydEF1Y3Rpb259IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSBzdWNjZXNzPXt0aGlzLnN0YXRlLmhhc05vRXJyb3J9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5BbW91bnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnN0YXJ0aW5nUHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3sgYmFzaWM6IHRydWUsIGNvbnRlbnQ6ICdXZWknIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj0ncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBzdGFydGluZ1ByaWNlOiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cblxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJFcnJvciFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIHN1Y2Nlc3MgaGVhZGVyPVwiU3VjY2VzcyFcIiBjb250ZW50PVwiQmlkIGlzIFBsYWNlZCFcIiAvPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IHR5cGU9J3N1Ym1pdCc+UGxhY2UgQmlkPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuXG4gICAgICAgICAgICAgICAgPGJyLz5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSBvbkNsaWNrPXt0aGlzLmV4aXRBdWN0aW9ufT5FeGl0IEF1Y3Rpb24gPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPHA+IFlvdSBjYW4gb25seSBleGl0IHRoZSBhdWN0aW9uIGlmIG5vIGJpZHMgd2VyZSBwbGFjZWQhPC9wPlxuXG5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBqb2luQXVjdGlvbjsgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auctions/joinAuction.js\n");

/***/ })

})