webpackHotUpdate_N_E("pages/auctions/joinAuction",{

/***/ "./pages/auctions/joinAuction.js":
/*!***************************************!*\
  !*** ./pages/auctions/joinAuction.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_plasticBale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ethereum/plasticBale */ \"./ethereum/plasticBale.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/auctions/joinAuction.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar joinAuction = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(joinAuction, _Component);\n\n  var _super = _createSuper(joinAuction);\n\n  function joinAuction(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, joinAuction);\n\n    _this = _super.call(this, props);\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(joinAuction, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 13\n        }\n      }, __jsx(\"link\", {\n        rel: \"stylesheet\",\n        href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 17\n        }\n      }), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 17\n        }\n      }, \"Live Auction\"), __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 17\n        }\n      }, \" Plastic Bale being auctioned: \", this.props.address, \" \"), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 17\n        }\n      }), __jsx(\"div\", {\n        className: \"AuctionContainer\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 17\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"].Group, {\n        widths: \"four\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 25\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"].Value, {\n        text: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 29\n        }\n      }, \"22\", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 29\n        }\n      }), \"Wei\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"].Label, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 29\n        }\n      }, \"Highest Bid\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 25\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"].Value, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 29\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Icon\"], {\n        name: \"users\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 33\n        }\n      }), \" 10\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"].Label, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 29\n        }\n      }, \"Bidders\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 25\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"].Value, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 29\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Image\"], {\n        src: \"https://react.semantic-ui.com/images/avatar/small/joe.jpg\",\n        inline: true,\n        circular: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 33\n        }\n      }), \"42\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Statistic\"].Label, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 29\n        }\n      }, \"Team Members\")))), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }\n      }), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"], {\n        onSubmit: this.onStartAuction,\n        error: !!this.state.errorMessage,\n        success: this.state.hasNoError,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 17\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Form\"].Field, {\n        width: 4,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 25\n        }\n      }, \"Amount\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n        value: this.state.startingPrice,\n        label: {\n          basic: true,\n          content: 'Wei'\n        },\n        labelPosition: \"right\",\n        onChange: function onChange(event) {\n          return _this2.setState({\n            startingPrice: event.target.value\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 25\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Message\"], {\n        error: true,\n        header: \"Error!\",\n        content: this.state.errorMessage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 21\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Message\"], {\n        success: true,\n        header: \"Success!\",\n        content: \"Bid is Placed!\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 21\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Button\"], {\n        loading: this.state.loading,\n        type: \"submit\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 21\n        }\n      }, \"Place Bid\")), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 17\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__[\"Button\"], {\n        loading: this.state.loading,\n        onClick: this.exitAuction,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 17\n        }\n      }, \"Exit Auction \"), __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 17\n        }\n      }, \" You can only exit the auction if no bids were placed!\"));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {\n        var address;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                //fetches address of the bottle from the URL\n                address = props.query.address;\n                console.log(this.props.address);\n                return _context.abrupt(\"return\", {\n                  address: address\n                });\n\n              case 3:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function getInitialProps(_x) {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return joinAuction;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (joinAuction);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXVjdGlvbnMvam9pbkF1Y3Rpb24uanM/YTI3YyJdLCJuYW1lcyI6WyJqb2luQXVjdGlvbiIsInByb3BzIiwic3RhdGUiLCJhZGRyZXNzIiwib25TdGFydEF1Y3Rpb24iLCJlcnJvck1lc3NhZ2UiLCJoYXNOb0Vycm9yIiwic3RhcnRpbmdQcmljZSIsImJhc2ljIiwiY29udGVudCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvYWRpbmciLCJleGl0QXVjdGlvbiIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxXOzs7OztBQUNGLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZlO0FBTWxCOzs7OzZCQWFRO0FBQUE7O0FBRUwsYUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUNJLFlBQUksRUFBQyxnRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUxKLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FBb0MsS0FBS0QsS0FBTCxDQUFXRSxPQUEvQyxNQU5KLEVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVBKLEVBU0k7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFSSxNQUFDLDJEQUFELENBQVcsS0FBWDtBQUFpQixjQUFNLEVBQUMsTUFBeEI7QUFBQTtBQUFBO0FB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SixFQWdCSSxNQUFDLHdEQUFEO0FBQVEsZUFBTyxFQUFFLEtBQUtILEtBQUwsQ0FBV1ksT0FBNUI7QUFBcUMsWUFBSSxFQUFDLFFBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaEJKLENBN0NKLEVBZ0VJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFoRUosRUFrRUksTUFBQyx3REFBRDtBQUFRLGVBQU8sRUFBRSxLQUFLWixLQUFMLENBQVdZLE9BQTVCO0FBQXFDLGVBQU8sRUFBRSxLQUFLQyxXQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWxFSixFQW1FSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtFQW5FSixDQURKO0FBMEVIOzs7OytOQXZGNEJkLEs7Ozs7OztBQUN6QjtBQUNRRSx1QixHQUFZRixLQUFLLENBQUNlLEssQ0FBbEJiLE87QUFDUmMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtqQixLQUFMLENBQVdFLE9BQXZCO2lEQUVPO0FBQUVBLHlCQUFPLEVBQVBBO0FBQUYsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFkV2dCLCtDOztBQXNHWG5CLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXVjdGlvbnMvam9pbkF1Y3Rpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCwgTWVzc2FnZSwgSWNvbiwgSW1hZ2UsIFN0YXRpc3RpYyB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IHBsYXN0aWNCYWxlQ29udHJhY3QgZnJvbSAnLi4vLi4vZXRoZXJldW0vcGxhc3RpY0JhbGUnO1xuXG5jbGFzcyBqb2luQXVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuXG5cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG4gICAgICAgIC8vZmV0Y2hlcyBhZGRyZXNzIG9mIHRoZSBib3R0bGUgZnJvbSB0aGUgVVJMXG4gICAgICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gcHJvcHMucXVlcnk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuYWRkcmVzcyk7XG5cbiAgICAgICAgcmV0dXJuIHsgYWRkcmVzcyB9O1xuICAgIH1cblxuXG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjEvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGgxPkxpdmUgQXVjdGlvbjwvaDE+XG4gICAgICAgICAgICAgICAgPGgyPiBQbGFzdGljIEJhbGUgYmVpbmcgYXVjdGlvbmVkOiB7dGhpcy5wcm9wcy5hZGRyZXNzfSA8L2gyPlxuICAgICAgICAgICAgICAgIDxici8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQXVjdGlvbkNvbnRhaW5lcic+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYy5Hcm91cCB3aWR0aHM9J2ZvdXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhdGlzdGljLlZhbHVlIHRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YXRpc3RpYy5WYWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhdGlzdGljLkxhYmVsPkhpZ2hlc3QgQmlkPC9TdGF0aXN0aWMuTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YXRpc3RpYz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXRpc3RpYz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhdGlzdGljLlZhbHVlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSd1c2VycycgLz4gMTBcbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YXRpc3RpYy5WYWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhdGlzdGljLkxhYmVsPkJpZGRlcnM8L1N0YXRpc3RpYy5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhdGlzdGljPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhdGlzdGljPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGF0aXN0aWMuVmFsdWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9J2h0dHBzOi8vcmVhY3Quc2VtYW50aWMtdWkuY29tL2ltYWdlcy9hdmF0YXIvc21hbGwvam9lLmpwZycgaW5saW5lIGNpcmN1bGFyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YXRpc3RpYy5WYWx1ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhdGlzdGljLkxhYmVsPlRlYW0gTWVtYmVyczwvU3RhdGlzdGljLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGF0aXN0aWM+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhdGlzdGljLkdyb3VwPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJyLz5cblxuXG5cbiAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN0YXJ0QXVjdGlvbn0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IHN1Y2Nlc3M9e3RoaXMuc3RhdGUuaGFzTm9FcnJvcn0+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFtb3VudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuc3RhcnRpbmdQcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17eyBiYXNpYzogdHJ1ZSwgY29udGVudDogJ1dlaScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPSdyaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0aW5nUHJpY2U6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIkVycm9yIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2Ugc3VjY2VzcyBoZWFkZXI9XCJTdWNjZXNzIVwiIGNvbnRlbnQ9XCJCaWQgaXMgUGxhY2VkIVwiIC8+XG5cblxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gdHlwZT0nc3VibWl0Jz5QbGFjZSBCaWQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAgICAgICAgICA8YnIvPlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IG9uQ2xpY2s9e3RoaXMuZXhpdEF1Y3Rpb259PkV4aXQgQXVjdGlvbiA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8cD4gWW91IGNhbiBvbmx5IGV4aXQgdGhlIGF1Y3Rpb24gaWYgbm8gYmlkcyB3ZXJlIHBsYWNlZCE8L3A+XG5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGpvaW5BdWN0aW9uOyAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auctions/joinAuction.js\n");

/***/ })

})