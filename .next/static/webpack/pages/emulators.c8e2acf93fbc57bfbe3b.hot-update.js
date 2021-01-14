webpackHotUpdate_N_E("pages/emulators",{

/***/ "./pages/emulators.js":
/*!****************************!*\
  !*** ./pages/emulators.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_tracking__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ethereum/tracking */ \"./ethereum/tracking.js\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/emulators.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n/*\nNote: Seller address is hardcoded in the sorting machine\n*/\n\n\n\nvar QRReader = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-qr-reader */ \"./node_modules/react-qr-reader/lib/index.js\", 7));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-qr-reader */ \"./node_modules/react-qr-reader/lib/index.js\")];\n    },\n    modules: ['react-qr-reader']\n  }\n});\n_c2 = QRReader;\n\n\n\nvar index = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(index, _Component);\n\n  var _super = _createSuper(index);\n\n  function index(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, index);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"handleScan\", /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (data) {\n                  _this.setState({\n                    result: data\n                  });\n\n                  _this.sortBottle();\n                }\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"handleError\", function (err) {\n      console.error(err);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"onScan\", /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                event.preventDefault();\n\n                if (_this.state.qr === false) {\n                  _this.setState({\n                    qr: true\n                  });\n                } else {\n                  _this.setState({\n                    qr: false\n                  });\n                }\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"sortBottle\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n      var accounts;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__[\"default\"].eth.getAccounts();\n\n            case 2:\n              accounts = _context3.sent;\n\n              _this.setState({\n                errorMessage1: ''\n              });\n\n              _context3.prev = 4;\n              _context3.next = 7;\n              return _ethereum_tracking__WEBPACK_IMPORTED_MODULE_13__[\"default\"].methods.updateStatusSorted(_this.state.registerSCAddress, _this.state.sellerAddress, _this.state.result).send({\n                from: accounts[0]\n              });\n\n            case 7:\n              _context3.next = 12;\n              break;\n\n            case 9:\n              _context3.prev = 9;\n              _context3.t0 = _context3[\"catch\"](4);\n\n              _this.setState({\n                errorMessage1: _context3.t0.message\n              });\n\n            case 12:\n              _this.setState({\n                loading: false\n              });\n\n            case 13:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[4, 9]]);\n    })));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"onSetBaleLimit\", /*#__PURE__*/function () {\n      var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(event) {\n        var accounts;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                event.preventDefault();\n                _context4.next = 3;\n                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__[\"default\"].eth.getAccounts();\n\n              case 3:\n                accounts = _context4.sent;\n\n                _this.setState({\n                  loading: true,\n                  errorMessage1: ''\n                });\n\n                _context4.prev = 5;\n                _context4.next = 8;\n                return _ethereum_tracking__WEBPACK_IMPORTED_MODULE_13__[\"default\"].methods.setBottlesSortedLimit(_this.state.bottlesLimit).send({\n                  from: accounts[0]\n                });\n\n              case 8:\n                _context4.next = 14;\n                break;\n\n              case 10:\n                _context4.prev = 10;\n                _context4.t0 = _context4[\"catch\"](5);\n\n                _this.setState({\n                  errorMessage: _context4.t0.message\n                });\n\n                _this.setState({\n                  hasError: false\n                });\n\n              case 14:\n                _this.setState({\n                  loading: false\n                });\n\n              case 15:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4, null, [[5, 10]]);\n      }));\n\n      return function (_x3) {\n        return _ref4.apply(this, arguments);\n      };\n    }());\n\n    _this.state = {\n      productionMachine: false,\n      sortingMachine: false,\n      result: '',\n      qr: false,\n      sellerAddress: '0x334b12DF37984A449b57BAE3F4120f70be177be0',\n      registerSCAddress: '0x7126ec4f68added009015a1f5ac718c4896faa2e',\n      errorMessage: '',\n      hasNoError: false,\n      bottlesLimit: '',\n      errorMessage1: '',\n      loading: false\n    };\n    return _this;\n  } // QR reader functions \n\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(index, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          productionMachine = _this$state.productionMachine,\n          sortingMachine = _this$state.sortingMachine,\n          qr = _this$state.qr;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 13\n        }\n      }, __jsx(\"link\", {\n        rel: \"stylesheet\",\n        href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 17\n        }\n      }), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 17\n        }\n      }, \"Emulators Page\"), __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 17\n        }\n      }, \" This page is to emulate the functionality of machines participating in the system \", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 103\n        }\n      }), \"Choose which machine you would like to emulate\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Menu\"], {\n        widths: 3,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 17\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Menu\"].Item, {\n        name: \"ProductionLineMachine\",\n        onClick: function onClick() {\n          return _this2.setState({\n            productionMachine: true,\n            sortingMachine: false\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 21\n        }\n      }, \" Production Line Machine\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Menu\"].Item, {\n        name: \"SortingMachine\",\n        onClick: function onClick() {\n          return _this2.setState({\n            sortingMachine: true,\n            productionMachine: false\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 21\n        }\n      }, \" Sorting Machine\")), productionMachine && __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 21\n        }\n      }, \" Put the code here!!\"), sortingMachine && __jsx(\"div\", {\n        className: \"Container1\",\n        style: {\n          'width': '70%',\n          'margin-left': 'auto'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 21\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"], {\n        onSubmit: this.onSetBaleLimit,\n        error: !!this.state.errorMessage1,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 21\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"].Field, {\n        width: 6,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 25\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 29\n        }\n      }, \"Number of Bottles in a Plastic Bale\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Input\"], {\n        value: this.state.bottlesLimit,\n        onChange: function onChange(event) {\n          return _this2.setState({\n            bottlesLimit: event.target.value\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 29\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Button\"], {\n        loading: this.state.loading,\n        type: \"submit\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 25\n        }\n      }, \"Set Limit\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"], {\n        error: !!this.state.errorMessage,\n        success: this.state.hasNoError,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 25\n        }\n      }, __jsx(\"div\", {\n        className: \"Scanner\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 29\n        }\n      }, __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 33\n        }\n      }), \" \", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 40\n        }\n      }), __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 33\n        }\n      }, \"Scan Plastic Bottle \"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Button\"], {\n        className: \"QrReader\",\n        style: {\n          'vertical-align': 'middle'\n        },\n        onClick: this.onScan,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 135,\n          columnNumber: 33\n        }\n      }, \" Scan QR Code\"), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 33\n        }\n      }, \" \", this.state.qr === true ? __jsx(QRReader, {\n        delay: 300,\n        onError: this.handleError,\n        onScan: this.handleScan,\n        style: {\n          width: \"60%\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 66\n        }\n      }) : '', \" \"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Message\"], {\n        error: true,\n        header: \"Error!\",\n        content: this.state.errorMessage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 33\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Message\"], {\n        success: true,\n        header: \"Success!\",\n        content: \"Plastic bottle status is updated successfully by sorting machine!\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 147,\n          columnNumber: 33\n        }\n      })))));\n    }\n  }]);\n\n  return index;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]); //At the end of each page, a component is expected to be returned \n// If not, Next.js throws an error \n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"QRReader$dynamic\");\n$RefreshReg$(_c2, \"QRReader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW11bGF0b3JzLmpzPzc5ZjUiXSwibmFtZXMiOlsiUVJSZWFkZXIiLCJkeW5hbWljIiwic3NyIiwiaW5kZXgiLCJwcm9wcyIsImRhdGEiLCJzZXRTdGF0ZSIsInJlc3VsdCIsInNvcnRCb3R0bGUiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RhdGUiLCJxciIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiZXJyb3JNZXNzYWdlMSIsInRyYWNraW5nQ29udHJhY3QiLCJtZXRob2RzIiwidXBkYXRlU3RhdHVzU29ydGVkIiwicmVnaXN0ZXJTQ0FkZHJlc3MiLCJzZWxsZXJBZGRyZXNzIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwibG9hZGluZyIsInNldEJvdHRsZXNTb3J0ZWRMaW1pdCIsImJvdHRsZXNMaW1pdCIsImVycm9yTWVzc2FnZSIsImhhc0Vycm9yIiwicHJvZHVjdGlvbk1hY2hpbmUiLCJzb3J0aW5nTWFjaGluZSIsImhhc05vRXJyb3IiLCJvblNldEJhbGVMaW1pdCIsInRhcmdldCIsInZhbHVlIiwib25TY2FuIiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVTY2FuIiwid2lkdGgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxRQUFRLEdBQUdDLG9EQUFPLE1BQUM7QUFBQSxTQUFNLHdKQUFOO0FBQUEsQ0FBRCxFQUFrQztBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FBcEIsb0VBQW9CO0FBQUE7QUFBQSxjQUFwQixpQkFBb0I7QUFBQTtBQUFBLENBQWxDLENBQXhCO01BQU1GLFE7QUFDTjtBQUNBOztJQUVNRyxLOzs7OztBQUNGLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUExQixHQU9ELEVBUE4sTUFKSixFQWFJLE1BQUMsMERBQUQ7QUFBUyxhQUFLLE1BQWQ7QUFBZSxjQUFNLEVBQUMsUUFBdEI7QUFBK0IsZUFBTyxFQUFFLEtBQUs3QixLQUFMLENBQVdrQixZQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBYkosRUFlSSxNQUFDLDBEQUFEO0FBQVMsZUFBTyxNQUFoQjtBQUFpQixjQUFNLEVBQUMsVUFBeEI7QUFBbUMsZUFBTyxFQUFDLG1FQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBZkosQ0FESixDQVhKLENBdEJSLENBREo7QUFnRUg7Ozs7RUF0SmVZLCtDLEdBMEpwQjtBQUNBOzs7QUFDZXpDLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZW11bGF0b3JzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbk5vdGU6IFNlbGxlciBhZGRyZXNzIGlzIGhhcmRjb2RlZCBpbiB0aGUgc29ydGluZyBtYWNoaW5lXG4qL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1lbnUsIEJ1dHRvbiwgTWVzc2FnZSwgRm9ybSwgSW5wdXR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5jb25zdCBRUlJlYWRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1xci1yZWFkZXInKSwgeyBzc3I6IGZhbHNlIH0pO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgdHJhY2tpbmdDb250cmFjdCBmcm9tICcuLi9ldGhlcmV1bS90cmFja2luZyc7XG5cbmNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwcm9kdWN0aW9uTWFjaGluZTogZmFsc2UsXG4gICAgICAgICAgICBzb3J0aW5nTWFjaGluZTogZmFsc2UsXG4gICAgICAgICAgICByZXN1bHQ6ICcnLFxuICAgICAgICAgICAgcXI6IGZhbHNlLFxuICAgICAgICAgICAgc2VsbGVyQWRkcmVzczogJzB4MzM0YjEyREYzNzk4NEE0NDliNTdCQUUzRjQxMjBmNzBiZTE3N2JlMCcsXG4gICAgICAgICAgICByZWdpc3RlclNDQWRkcmVzczogJzB4NzEyNmVjNGY2OGFkZGVkMDA5MDE1YTFmNWFjNzE4YzQ4OTZmYWEyZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgaGFzTm9FcnJvcjogZmFsc2UsIFxuICAgICAgICAgICAgYm90dGxlc0xpbWl0OiAnJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTE6ICcnLCBcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gUVIgcmVhZGVyIGZ1bmN0aW9ucyBcbiAgICBoYW5kbGVTY2FuID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXN1bHQ6IGRhdGEgfSk7XG4gICAgICAgICAgICB0aGlzLnNvcnRCb3R0bGUoKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3IgPSBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG5cbiAgICBvblNjYW4gPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucXIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcXI6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcXI6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIExvZyBib3R0bGUgYXMgZGlzcG9zZWQgXG4gICAgc29ydEJvdHRsZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlMTogJyd9KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdHJhY2tpbmdDb250cmFjdC5tZXRob2RzXG4gICAgICAgICAgICAgICAgLnVwZGF0ZVN0YXR1c1NvcnRlZCh0aGlzLnN0YXRlLnJlZ2lzdGVyU0NBZGRyZXNzLCB0aGlzLnN0YXRlLnNlbGxlckFkZHJlc3MsIHRoaXMuc3RhdGUucmVzdWx0KVxuICAgICAgICAgICAgICAgIC5zZW5kKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTE6IGVyci5tZXNzYWdlIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pO1xuXG4gICAgfTtcblxuICAgIC8vIExvZyBib3R0bGUgYXMgZGlzcG9zZWQgXG4gICAgb25TZXRCYWxlTGltaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2UxOiAnJ30pO1xuXG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdHJhY2tpbmdDb250cmFjdC5tZXRob2RzXG4gICAgICAgICAgICAgICAgLnNldEJvdHRsZXNTb3J0ZWRMaW1pdCh0aGlzLnN0YXRlLmJvdHRsZXNMaW1pdClcbiAgICAgICAgICAgICAgICAuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc0Vycm9yOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSk7XG5cbiAgICB9O1xuXG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7IHByb2R1Y3Rpb25NYWNoaW5lLCBzb3J0aW5nTWFjaGluZSwgcXIgfSA9IHRoaXMuc3RhdGVcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjEvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGgxPkVtdWxhdG9ycyBQYWdlPC9oMT5cbiAgICAgICAgICAgICAgICA8cD4gVGhpcyBwYWdlIGlzIHRvIGVtdWxhdGUgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgbWFjaGluZXMgcGFydGljaXBhdGluZyBpbiB0aGUgc3lzdGVtIDxiciAvPlxuICAgICAgICAgICAgICAgIENob29zZSB3aGljaCBtYWNoaW5lIHlvdSB3b3VsZCBsaWtlIHRvIGVtdWxhdGVcbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxNZW51IHdpZHRocz17M30+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nUHJvZHVjdGlvbkxpbmVNYWNoaW5lJyBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdGlvbk1hY2hpbmU6IHRydWUsIHNvcnRpbmdNYWNoaW5lOiBmYWxzZSB9KX0gPiBQcm9kdWN0aW9uIExpbmUgTWFjaGluZTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J1NvcnRpbmdNYWNoaW5lJyBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc29ydGluZ01hY2hpbmU6IHRydWUsIHByb2R1Y3Rpb25NYWNoaW5lOiBmYWxzZSB9KX0gPiBTb3J0aW5nIE1hY2hpbmU8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8L01lbnU+XG5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdGlvbk1hY2hpbmUgJiYgKFxuXG4gICAgICAgICAgICAgICAgICAgIDxoMj4gUHV0IHRoZSBjb2RlIGhlcmUhITwvaDI+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHtzb3J0aW5nTWFjaGluZSAmJiAoXG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb250YWluZXIxXCIgc3R5bGU9e3sgJ3dpZHRoJzogJzcwJScsICdtYXJnaW4tbGVmdCc6ICdhdXRvJyB9fT4gXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblNldEJhbGVMaW1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UxfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk51bWJlciBvZiBCb3R0bGVzIGluIGEgUGxhc3RpYyBCYWxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuYm90dGxlc0xpbWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IGJvdHRsZXNMaW1pdDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IHR5cGU9J3N1Ym1pdCc+U2V0IExpbWl0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSBzdWNjZXNzPXt0aGlzLnN0YXRlLmhhc05vRXJyb3J9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNjYW5uZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPiA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlNjYW4gUGxhc3RpYyBCb3R0bGUgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJRclJlYWRlclwiIHN0eWxlPXt7ICd2ZXJ0aWNhbC1hbGlnbic6ICdtaWRkbGUnIH19IG9uQ2xpY2s9e3RoaXMub25TY2FufSA+IFNjYW4gUVIgQ29kZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiB7dGhpcy5zdGF0ZS5xciA9PT0gdHJ1ZSA/ICg8UVJSZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXszMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLmhhbmRsZUVycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TY2FuPXt0aGlzLmhhbmRsZVNjYW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI2MCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfSA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJFcnJvciFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBzdWNjZXNzIGhlYWRlcj1cIlN1Y2Nlc3MhXCIgY29udGVudD1cIlBsYXN0aWMgYm90dGxlIHN0YXR1cyBpcyB1cGRhdGVkIHN1Y2Nlc3NmdWxseSBieSBzb3J0aW5nIG1hY2hpbmUhXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgKX1cblxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICk7XG4gICAgfVxuXG59XG5cbi8vQXQgdGhlIGVuZCBvZiBlYWNoIHBhZ2UsIGEgY29tcG9uZW50IGlzIGV4cGVjdGVkIHRvIGJlIHJldHVybmVkIFxuLy8gSWYgbm90LCBOZXh0LmpzIHRocm93cyBhbiBlcnJvciBcbmV4cG9ydCBkZWZhdWx0IGluZGV4OyAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/emulators.js\n");

/***/ })

})