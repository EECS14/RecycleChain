webpackHotUpdate_N_E("pages/emulators",{

/***/ "./pages/emulators.js":
/*!****************************!*\
  !*** ./pages/emulators.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_tracking__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ethereum/tracking */ \"./ethereum/tracking.js\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/emulators.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n/*\nNote: Seller address is hardcoded in the sorting machine\n*/\n\n\n\nvar QRReader = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-qr-reader */ \"./node_modules/react-qr-reader/lib/index.js\", 7));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-qr-reader */ \"./node_modules/react-qr-reader/lib/index.js\")];\n    },\n    modules: ['react-qr-reader']\n  }\n});\n_c2 = QRReader;\n\n\n\nvar index = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(index, _Component);\n\n  var _super = _createSuper(index);\n\n  function index(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, index);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"handleScan\", /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (data) {\n                  _this.setState({\n                    result: data\n                  });\n\n                  _this.sortBottle();\n                }\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"handleError\", function (err) {\n      console.error(err);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"onScan\", /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                event.preventDefault();\n\n                if (_this.state.qr === false) {\n                  _this.setState({\n                    qr: true\n                  });\n                } else {\n                  _this.setState({\n                    qr: false\n                  });\n                }\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"sortBottle\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n      var accounts;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__[\"default\"].eth.getAccounts();\n\n            case 2:\n              accounts = _context3.sent;\n\n              _this.setState({\n                errorMessage: ''\n              });\n\n              _context3.prev = 4;\n              _context3.next = 7;\n              return _ethereum_tracking__WEBPACK_IMPORTED_MODULE_13__[\"default\"].methods.updateStatusSorted(_this.state.registerSCAddress, _this.state.sellerAddress, _this.state.result).send({\n                from: accounts[0]\n              });\n\n            case 7:\n              _context3.next = 12;\n              break;\n\n            case 9:\n              _context3.prev = 9;\n              _context3.t0 = _context3[\"catch\"](4);\n\n              _this.setState({\n                errorMessage: _context3.t0.message\n              });\n\n            case 12:\n              _this.setState({\n                loading: false\n              });\n\n            case 13:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[4, 9]]);\n    })));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"onSetBaleLimit\", /*#__PURE__*/function () {\n      var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(event) {\n        var accounts;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                event.preventDefault();\n                _context4.next = 3;\n                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__[\"default\"].eth.getAccounts();\n\n              case 3:\n                accounts = _context4.sent;\n\n                _this.setState({\n                  loading: true,\n                  errorMessage1: ''\n                });\n\n                _context4.prev = 5;\n                _context4.next = 8;\n                return _ethereum_tracking__WEBPACK_IMPORTED_MODULE_13__[\"default\"].methods.setBottlesSortedLimit(_this.state.bottlesLimit).send({\n                  from: accounts[0]\n                });\n\n              case 8:\n                _context4.next = 13;\n                break;\n\n              case 10:\n                _context4.prev = 10;\n                _context4.t0 = _context4[\"catch\"](5);\n\n                _this.setState({\n                  errorMessage1: _context4.t0.message\n                });\n\n              case 13:\n                _this.setState({\n                  loading: false\n                });\n\n              case 14:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, null, [[5, 10]]);\n      }));\n\n      return function (_x3) {\n        return _ref4.apply(this, arguments);\n      };\n    }());\n\n    _this.state = {\n      productionMachine: false,\n      sortingMachine: false,\n      result: '',\n      qr: false,\n      sellerAddress: '0x334b12DF37984A449b57BAE3F4120f70be177be0',\n      registerSCAddress: '0x7126ec4f68added009015a1f5ac718c4896faa2e',\n      errorMessage: '',\n      hasNoError: false,\n      bottlesLimit: '',\n      errorMessage1: '',\n      loading: false\n    };\n    return _this;\n  } // QR reader functions \n\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(index, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          productionMachine = _this$state.productionMachine,\n          sortingMachine = _this$state.sortingMachine,\n          qr = _this$state.qr;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 13\n        }\n      }, __jsx(\"link\", {\n        rel: \"stylesheet\",\n        href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 17\n        }\n      }), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 17\n        }\n      }, \"Emulators Page\"), __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 17\n        }\n      }, \" This page is to emulate the functionality of machines participating in the system \", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 103\n        }\n      }), \"Choose which machine you would like to emulate\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Menu\"], {\n        widths: 3,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 17\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Menu\"].Item, {\n        name: \"ProductionLineMachine\",\n        onClick: function onClick() {\n          return _this2.setState({\n            productionMachine: true,\n            sortingMachine: false\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 21\n        }\n      }, \" Production Line Machine\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Menu\"].Item, {\n        name: \"SortingMachine\",\n        onClick: function onClick() {\n          return _this2.setState({\n            sortingMachine: true,\n            productionMachine: false\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 21\n        }\n      }, \" Sorting Machine\")), productionMachine && __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 21\n        }\n      }, \" Put the code here!!\"), sortingMachine && __jsx(\"div\", {\n        className: \"Container1\",\n        style: {\n          'width': '70%',\n          'margin-left': 'auto'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 21\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"], {\n        onSubmit: this.onSetBaleLimit,\n        error: !!this.state.errorMessage1,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 21\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"].Field, {\n        width: 6,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 25\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 29\n        }\n      }, \"Number of Bottles in a Plastic Bale\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Input\"], {\n        value: this.state.bottlesLimit,\n        onChange: function onChange(event) {\n          return _this2.setState({\n            bottlesLimit: event.target.value\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 29\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Button\"], {\n        loading: this.state.loading,\n        type: \"submit\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 25\n        }\n      }, \"Set Limit\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"], {\n        error: !!this.state.errorMessage,\n        success: this.state.hasNoError,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 25\n        }\n      }, __jsx(\"div\", {\n        className: \"Scanner\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 29\n        }\n      }, __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 33\n        }\n      }), \" \", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 40\n        }\n      }), __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 33\n        }\n      }, \"Scan Plastic Bottle \"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Button\"], {\n        className: \"QrReader\",\n        style: {\n          'vertical-align': 'middle'\n        },\n        onClick: this.onScan,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 135,\n          columnNumber: 33\n        }\n      }, \" Scan QR Code\"), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 33\n        }\n      }, \" \", this.state.qr === true ? __jsx(QRReader, {\n        delay: 300,\n        onError: this.handleError,\n        onScan: this.handleScan,\n        style: {\n          width: \"35%\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 66\n        }\n      }) : '', \" \"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Message\"], {\n        error: true,\n        header: \"Error!\",\n        content: this.state.errorMessage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 33\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Message\"], {\n        success: true,\n        header: \"Success!\",\n        content: \"Plastic bottle status is updated successfully by sorting machine!\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 147,\n          columnNumber: 33\n        }\n      })))));\n    }\n  }]);\n\n  return index;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]); //At the end of each page, a component is expected to be returned \n// If not, Next.js throws an error \n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"QRReader$dynamic\");\n$RefreshReg$(_c2, \"QRReader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW11bGF0b3JzLmpzPzc5ZjUiXSwibmFtZXMiOlsiUVJSZWFkZXIiLCJkeW5hbWljIiwic3NyIiwiaW5kZXgiLCJwcm9wcyIsImRhdGEiLCJzZXRTdGF0ZSIsInJlc3VsdCIsInNvcnRCb3R0bGUiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RhdGUiLCJxciIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiZXJyb3JNZXNzYWdlIiwidHJhY2tpbmdDb250cmFjdCIsIm1ldGhvZHMiLCJ1cGRhdGVTdGF0dXNTb3J0ZWQiLCJyZWdpc3RlclNDQWRkcmVzcyIsInNlbGxlckFkZHJlc3MiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlMSIsInNldEJvdHRsZXNTb3J0ZWRMaW1pdCIsImJvdHRsZXNMaW1pdCIsInByb2R1Y3Rpb25NYWNoaW5lIiwic29ydGluZ01hY2hpbmUiLCJoYXNOb0Vycm9yIiwib25TZXRCYWxlTGltaXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU2NhbiIsImhhbmRsZUVycm9yIiwiaGFuZGxlU2NhbiIsIndpZHRoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsUUFBUSxHQUFHQyxvREFBTyxNQUFDO0FBQUEsU0FBTSx3SkFBTjtBQUFBLENBQUQsRUFBa0M7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBO0FBQUEsa0NBQXBCLG9FQUFvQjtBQUFBO0FBQUEsY0FBcEIsaUJBQW9CO0FBQUE7QUFBQSxDQUFsQyxDQUF4QjtNQUFNRixRO0FBQ047QUFDQTs7SUFFTUcsSzs7Ozs7QUFDRixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhC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REFBRDtBQUFTLGFBQUssTUFBZDtBQUFlLGNBQU0sRUFBQyxRQUF0QjtBQUErQixlQUFPLEVBQUUsS0FBSzVCLEtBQUwsQ0FBV00sWUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWJKLEVBZUksTUFBQywwREFBRDtBQUFTLGVBQU8sTUFBaEI7QUFBaUIsY0FBTSxFQUFDLFVBQXhCO0FBQW1DLGVBQU8sRUFBQyxtRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWZKLENBREosQ0FYSixDQXRCUixDQURKO0FBZ0VIOzs7O0VBdEpldUIsK0MsR0EwSnBCO0FBQ0E7OztBQUNleEMsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9lbXVsYXRvcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTm90ZTogU2VsbGVyIGFkZHJlc3MgaXMgaGFyZGNvZGVkIGluIHRoZSBzb3J0aW5nIG1hY2hpbmVcbiovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVudSwgQnV0dG9uLCBNZXNzYWdlLCBGb3JtLCBJbnB1dH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmNvbnN0IFFSUmVhZGVyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LXFyLXJlYWRlcicpLCB7IHNzcjogZmFsc2UgfSk7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCB0cmFja2luZ0NvbnRyYWN0IGZyb20gJy4uL2V0aGVyZXVtL3RyYWNraW5nJztcblxuY2xhc3MgaW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHByb2R1Y3Rpb25NYWNoaW5lOiBmYWxzZSxcbiAgICAgICAgICAgIHNvcnRpbmdNYWNoaW5lOiBmYWxzZSxcbiAgICAgICAgICAgIHJlc3VsdDogJycsXG4gICAgICAgICAgICBxcjogZmFsc2UsXG4gICAgICAgICAgICBzZWxsZXJBZGRyZXNzOiAnMHgzMzRiMTJERjM3OTg0QTQ0OWI1N0JBRTNGNDEyMGY3MGJlMTc3YmUwJyxcbiAgICAgICAgICAgIHJlZ2lzdGVyU0NBZGRyZXNzOiAnMHg3MTI2ZWM0ZjY4YWRkZWQwMDkwMTVhMWY1YWM3MThjNDg5NmZhYTJlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgICAgICAgICBoYXNOb0Vycm9yOiBmYWxzZSwgXG4gICAgICAgICAgICBib3R0bGVzTGltaXQ6ICcnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlMTogJycsIFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBRUiByZWFkZXIgZnVuY3Rpb25zIFxuICAgIGhhbmRsZVNjYW4gPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlc3VsdDogZGF0YSB9KTtcbiAgICAgICAgICAgIHRoaXMuc29ydEJvdHRsZSgpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvciA9IGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cblxuICAgIG9uU2NhbiA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5xciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBxcjogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBxcjogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gTG9nIGJvdHRsZSBhcyBkaXNwb3NlZCBcbiAgICBzb3J0Qm90dGxlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6ICcnfSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRyYWNraW5nQ29udHJhY3QubWV0aG9kc1xuICAgICAgICAgICAgICAgIC51cGRhdGVTdGF0dXNTb3J0ZWQodGhpcy5zdGF0ZS5yZWdpc3RlclNDQWRkcmVzcywgdGhpcy5zdGF0ZS5zZWxsZXJBZGRyZXNzLCB0aGlzLnN0YXRlLnJlc3VsdClcbiAgICAgICAgICAgICAgICAuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pO1xuXG4gICAgfTtcblxuICAgIC8vIENvbnRyb2xzIHRoZSBzaXplIG9mIHRoZSBwbGFzdGljIGJhbGUgXG4gICAgb25TZXRCYWxlTGltaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2UxOiAnJ30pO1xuXG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdHJhY2tpbmdDb250cmFjdC5tZXRob2RzXG4gICAgICAgICAgICAgICAgLnNldEJvdHRsZXNTb3J0ZWRMaW1pdCh0aGlzLnN0YXRlLmJvdHRsZXNMaW1pdClcbiAgICAgICAgICAgICAgICAuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2UxOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KTtcblxuICAgIH07XG5cblxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHsgcHJvZHVjdGlvbk1hY2hpbmUsIHNvcnRpbmdNYWNoaW5lLCBxciB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMS9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8aDE+RW11bGF0b3JzIFBhZ2U8L2gxPlxuICAgICAgICAgICAgICAgIDxwPiBUaGlzIHBhZ2UgaXMgdG8gZW11bGF0ZSB0aGUgZnVuY3Rpb25hbGl0eSBvZiBtYWNoaW5lcyBwYXJ0aWNpcGF0aW5nIGluIHRoZSBzeXN0ZW0gPGJyIC8+XG4gICAgICAgICAgICAgICAgQ2hvb3NlIHdoaWNoIG1hY2hpbmUgeW91IHdvdWxkIGxpa2UgdG8gZW11bGF0ZVxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPE1lbnUgd2lkdGhzPXszfT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdQcm9kdWN0aW9uTGluZU1hY2hpbmUnIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0aW9uTWFjaGluZTogdHJ1ZSwgc29ydGluZ01hY2hpbmU6IGZhbHNlIH0pfSA+IFByb2R1Y3Rpb24gTGluZSBNYWNoaW5lPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nU29ydGluZ01hY2hpbmUnIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzb3J0aW5nTWFjaGluZTogdHJ1ZSwgcHJvZHVjdGlvbk1hY2hpbmU6IGZhbHNlIH0pfSA+IFNvcnRpbmcgTWFjaGluZTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTWVudT5cblxuICAgICAgICAgICAgICAgIHtwcm9kdWN0aW9uTWFjaGluZSAmJiAoXG5cbiAgICAgICAgICAgICAgICAgICAgPGgyPiBQdXQgdGhlIGNvZGUgaGVyZSEhPC9oMj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3NvcnRpbmdNYWNoaW5lICYmIChcblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRhaW5lcjFcIiBzdHlsZT17eyAnd2lkdGgnOiAnNzAlJywgJ21hcmdpbi1sZWZ0JzogJ2F1dG8nIH19PiBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU2V0QmFsZUxpbWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZTF9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TnVtYmVyIG9mIEJvdHRsZXMgaW4gYSBQbGFzdGljIEJhbGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5ib3R0bGVzTGltaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgYm90dGxlc0xpbWl0OiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gdHlwZT0nc3VibWl0Jz5TZXQgTGltaXQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IHN1Y2Nlc3M9e3RoaXMuc3RhdGUuaGFzTm9FcnJvcn0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2Nhbm5lclwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+IDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+U2NhbiBQbGFzdGljIEJvdHRsZSA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIlFyUmVhZGVyXCIgc3R5bGU9e3sgJ3ZlcnRpY2FsLWFsaWduJzogJ21pZGRsZScgfX0gb25DbGljaz17dGhpcy5vblNjYW59ID4gU2NhbiBRUiBDb2RlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+IHt0aGlzLnN0YXRlLnFyID09PSB0cnVlID8gKDxRUlJlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezMwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuaGFuZGxlRXJyb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNjYW49e3RoaXMuaGFuZGxlU2Nhbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjM1JVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9IDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIkVycm9yIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIHN1Y2Nlc3MgaGVhZGVyPVwiU3VjY2VzcyFcIiBjb250ZW50PVwiUGxhc3RpYyBib3R0bGUgc3RhdHVzIGlzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IGJ5IHNvcnRpbmcgbWFjaGluZSFcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICApfVxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuLy9BdCB0aGUgZW5kIG9mIGVhY2ggcGFnZSwgYSBjb21wb25lbnQgaXMgZXhwZWN0ZWQgdG8gYmUgcmV0dXJuZWQgXG4vLyBJZiBub3QsIE5leHQuanMgdGhyb3dzIGFuIGVycm9yIFxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7ICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/emulators.js\n");

/***/ })

})