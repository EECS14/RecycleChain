webpackHotUpdate_N_E("pages/auctions/startAuction",{

/***/ "./pages/auctions/startAuction.js":
/*!****************************************!*\
  !*** ./pages/auctions/startAuction.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-datepicker */ \"./node_modules/react-datepicker/dist/react-datepicker.min.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ \"./node_modules/react-datepicker/dist/react-datepicker.css\");\n/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_plasticBale__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ethereum/plasticBale */ \"./ethereum/plasticBale.js\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/auctions/startAuction.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar startAuction = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(startAuction, _Component);\n\n  var _super = _createSuper(startAuction);\n\n  function startAuction(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, startAuction);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"onStartAuction\", /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {\n        var accounts;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                event.preventDefault();\n                _context.next = 3;\n                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_13__[\"default\"].eth.getAccounts();\n\n              case 3:\n                accounts = _context.sent;\n\n                _this.setState({\n                  loading: true,\n                  errorMessage: ''\n                });\n                /*\n                const time; \n                 try {\n                     const plasticBaleSC = plasticBaleContract(this.props.address); \n                    await plasticBaleSC.methods.startAuction(this.state.manufacturerAddr, this.state.manufacturerLocation, this.state.manufacturerName)\n                        .send({ from: accounts[0] });\n                } catch (err) {\n                    this.setState({ errorMessage: err.message });\n                    this.setState({ hasError: false });\n                }\n                 // if errorMsg is empty, registration is successful\n                if (!this.state.errorMessage)\n                    this.setState({ hasNoError: true });\n                     this.setState({loading: false});  */\n\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n\n    _this.state = {\n      startingPrice: '',\n      errorMessage: '',\n      hasNoError: false,\n      startDate: new Date()\n    };\n    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(startAuction, [{\n    key: \"handleChange\",\n    value: function handleChange(date) {\n      this.setState({\n        startDate: date\n      });\n      console.log(date);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 13\n        }\n      }, __jsx(\"link\", {\n        rel: \"stylesheet\",\n        href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 17\n        }\n      }), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 17\n        }\n      }, \"Set Bale's Auction Parameters: \"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"], {\n        onSubmit: this.onStartAuction,\n        error: !!this.state.errorMessage,\n        success: this.state.hasNoError,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 17\n        }\n      }, __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_11___default.a, {\n        selected: this.state.startDate,\n        onChange: this.handleChange,\n        showTimeSelect: true,\n        timeFormat: \"HH:mm\",\n        timeIntervals: 30,\n        timeCaption: \"time\",\n        dateFormat: \"MMMM d, yyyy h:mm aa\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 25\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"].Field, {\n        width: 4,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 25\n        }\n      }, \"Starting Price\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Input\"], {\n        value: this.state.startingPrice,\n        label: {\n          basic: true,\n          content: 'Wei'\n        },\n        labelPosition: \"right\",\n        onChange: function onChange(event) {\n          return _this2.setState({\n            startingPrice: event.target.value\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 25\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Message\"], {\n        error: true,\n        header: \"Error!\",\n        content: this.state.errorMessage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 21\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Message\"], {\n        success: true,\n        header: \"Success!\",\n        content: \"Auction is Opended Successfully!\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 21\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Button\"], {\n        loading: this.state.loading,\n        type: \"submit\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 21\n        }\n      }, \"Start Auction\")));\n    }\n  }], [{\n    key: \"getInitialProps\",\n    value: function () {\n      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(props) {\n        var address;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                //fetches address of the bottle from the URL\n                address = props.query.address;\n                return _context2.abrupt(\"return\", {\n                  address: address\n                });\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function getInitialProps(_x2) {\n        return _getInitialProps.apply(this, arguments);\n      }\n\n      return getInitialProps;\n    }()\n  }]);\n\n  return startAuction;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (startAuction);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXVjdGlvbnMvc3RhcnRBdWN0aW9uLmpzPzg3MjYiXSwibmFtZXMiOlsic3RhcnRBdWN0aW9uIiwicHJvcHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid2ViMyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJzZXRTdGF0ZSIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJzdGF0ZSIsInN0YXJ0aW5nUHJpY2UiLCJoYXNOb0Vycm9yIiwic3RhcnREYXRlIiwiRGF0ZSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJkYXRlIiwiY29uc29sZSIsImxvZyIsIm9uU3RhcnRBdWN0aW9uIiwiYmFzaWMiLCJjb250ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJhZGRyZXNzIiwicXVlcnkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsWTs7Ozs7QUFDRix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlO0FBQUEsa01BNEJGLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiQSxxQkFBSyxDQUFDQyxjQUFOO0FBRGE7QUFBQSx1QkFFVUMsdURBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEVBRlY7O0FBQUE7QUFFUEMsd0JBRk87O0FBR2Isc0JBQUtDLFFBQUwsQ0FBYztBQUFDQyx5QkFBTyxFQUFFLElBQVY7QUFBZ0JDLDhCQUFZLEVBQUU7QUFBOUIsaUJBQWQ7QUFFQTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFsQnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BNUJFOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVm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Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkJZRSwrQzs7QUEyR1o1QiwyRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2F1Y3Rpb25zL3N0YXJ0QXVjdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlLCBMYWJlbCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XG5pbXBvcnQgXCJyZWFjdC1kYXRlcGlja2VyL2Rpc3QvcmVhY3QtZGF0ZXBpY2tlci5jc3NcIjtcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IHBsYXN0aWNCYWxlQ29udHJhY3QgZnJvbSAnLi4vLi4vZXRoZXJldW0vcGxhc3RpY0JhbGUnO1xuXG5jbGFzcyBzdGFydEF1Y3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHN0YXJ0aW5nUHJpY2U6ICcnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgICAgICAgIGhhc05vRXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgpXG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuXG4gICAgICAgIC8vZmV0Y2hlcyBhZGRyZXNzIG9mIHRoZSBib3R0bGUgZnJvbSB0aGUgVVJMXG4gICAgICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gcHJvcHMucXVlcnk7XG5cbiAgICAgICAgcmV0dXJuIHsgYWRkcmVzcyB9O1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZShkYXRlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3RhcnREYXRlOiBkYXRlXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRlKTtcbiAgICB9XG5cbiAgICBvblN0YXJ0QXVjdGlvbiA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJyd9KTtcblxuICAgICAgICAvKlxuICAgICAgICBjb25zdCB0aW1lOyBcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBjb25zdCBwbGFzdGljQmFsZVNDID0gcGxhc3RpY0JhbGVDb250cmFjdCh0aGlzLnByb3BzLmFkZHJlc3MpOyBcbiAgICAgICAgICAgIGF3YWl0IHBsYXN0aWNCYWxlU0MubWV0aG9kcy5zdGFydEF1Y3Rpb24odGhpcy5zdGF0ZS5tYW51ZmFjdHVyZXJBZGRyLCB0aGlzLnN0YXRlLm1hbnVmYWN0dXJlckxvY2F0aW9uLCB0aGlzLnN0YXRlLm1hbnVmYWN0dXJlck5hbWUpXG4gICAgICAgICAgICAgICAgLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNFcnJvcjogZmFsc2UgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBlcnJvck1zZyBpcyBlbXB0eSwgcmVnaXN0cmF0aW9uIGlzIHN1Y2Nlc3NmdWxcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNOb0Vycm9yOiB0cnVlIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pOyAgKi8gXG5cbiAgICB9O1xuXG4gICAgXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4xL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxoMT5TZXQgQmFsZSdzIEF1Y3Rpb24gUGFyYW1ldGVyczogPC9oMT5cblxuICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3RhcnRBdWN0aW9ufSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gc3VjY2Vzcz17dGhpcy5zdGF0ZS5oYXNOb0Vycm9yfT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyB0aGlzLnN0YXRlLnN0YXJ0RGF0ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUaW1lU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZUZvcm1hdD1cIkhIOm1tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lSW50ZXJ2YWxzPXszMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lQ2FwdGlvbj1cInRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9XCJNTU1NIGQsIHl5eXkgaDptbSBhYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPiBcbiAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RhcnRpbmcgUHJpY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnN0YXJ0aW5nUHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17eyBiYXNpYzogdHJ1ZSwgY29udGVudDogJ1dlaScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249J3JpZ2h0J1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBzdGFydGluZ1ByaWNlOiBldmVudC50YXJnZXQudmFsdWUgfSl9Lz4gXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIkVycm9yIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2Ugc3VjY2VzcyBoZWFkZXI9XCJTdWNjZXNzIVwiIGNvbnRlbnQ9XCJBdWN0aW9uIGlzIE9wZW5kZWQgU3VjY2Vzc2Z1bGx5IVwiIC8+XG5cblxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gdHlwZT0nc3VibWl0Jz5TdGFydCBBdWN0aW9uPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuXG5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RhcnRBdWN0aW9uOyAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auctions/startAuction.js\n");

/***/ })

})