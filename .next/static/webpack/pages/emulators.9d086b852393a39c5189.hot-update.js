webpackHotUpdate_N_E("pages/emulators",{

/***/ "./pages/emulators.js":
/*!****************************!*\
  !*** ./pages/emulators.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_tracking__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ethereum/tracking */ \"./ethereum/tracking.js\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/emulators.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n/*\nNote: Seller address is hardcoded in the sorting machine\n*/\n\n\n\nvar QRReader = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-qr-reader */ \"./node_modules/react-qr-reader/lib/index.js\", 7));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-qr-reader */ \"./node_modules/react-qr-reader/lib/index.js\")];\n    },\n    modules: ['react-qr-reader']\n  }\n});\n_c2 = QRReader;\n\n\n\nvar index = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(index, _Component);\n\n  var _super = _createSuper(index);\n\n  function index(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, index);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"handleScan\", /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (data) {\n                  _this.setState({\n                    result: data\n                  });\n\n                  _this.sortBottle();\n                }\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"handleError\", function (err) {\n      console.error(err);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"onScan\", /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                event.preventDefault();\n\n                if (_this.state.qr === false) {\n                  _this.setState({\n                    qr: true\n                  });\n                } else {\n                  _this.setState({\n                    qr: false\n                  });\n                }\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"sortBottle\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n      var accounts;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _this.setState({\n                errorMessage: ''\n              });\n\n              _context3.next = 3;\n              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__[\"default\"].eth.getAccounts();\n\n            case 3:\n              accounts = _context3.sent;\n              _context3.prev = 4;\n              _context3.next = 7;\n              return _ethereum_tracking__WEBPACK_IMPORTED_MODULE_13__[\"default\"].methods.updateStatusSorted(_this.state.registerSCAddress, _this.state.sellerAddress, _this.state.result).send({\n                from: accounts[0]\n              });\n\n            case 7:\n              _context3.next = 13;\n              break;\n\n            case 9:\n              _context3.prev = 9;\n              _context3.t0 = _context3[\"catch\"](4);\n\n              _this.setState({\n                errorMessage: _context3.t0.message\n              });\n\n              _this.setState({\n                hasError: false\n              });\n\n            case 13:\n              // if errorMsg is empty, registration is successful\n              if (!_this.state.errorMessage) _this.setState({\n                hasNoError: true\n              });\n\n            case 14:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[4, 9]]);\n    })));\n\n    _this.state = {\n      productionMachine: false,\n      sortingMachine: false,\n      result: '',\n      qr: false,\n      sellerAddress: '0x334b12DF37984A449b57BAE3F4120f70be177be0',\n      registerSCAddress: '0x7126ec4f68added009015a1f5ac718c4896faa2e',\n      errorMessage: '',\n      hasNoError: false,\n      bottlesLimit: 0\n    };\n    return _this;\n  } // QR reader functions \n\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(index, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          productionMachine = _this$state.productionMachine,\n          sortingMachine = _this$state.sortingMachine,\n          qr = _this$state.qr;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }\n      }, __jsx(\"link\", {\n        rel: \"stylesheet\",\n        href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 17\n        }\n      }), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 17\n        }\n      }, \"Emulators Page\"), __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 17\n        }\n      }, \" This page is to emulate the functionality of machines participating in the system \", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 103\n        }\n      }), \"Choose which machine you would like to emulate\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Menu\"], {\n        widths: 3,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 17\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Menu\"].Item, {\n        name: \"ProductionLineMachine\",\n        onClick: function onClick() {\n          return _this2.setState({\n            productionMachine: true,\n            sortingMachine: false\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }\n      }, \" Production Line Machine\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Menu\"].Item, {\n        name: \"SortingMachine\",\n        onClick: function onClick() {\n          return _this2.setState({\n            sortingMachine: true,\n            productionMachine: false\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 21\n        }\n      }, \" Sorting Machine\")), productionMachine && __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 21\n        }\n      }, \" Put the code here!!\"), sortingMachine && __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 21\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"], {\n        onSubmit: this.onSetBaleLimit,\n        error: !!this.state.errorMessage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 21\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"].Field, {\n        width: 6,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 25\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 29\n        }\n      }, \"Number of Bottles in a Plastic Bale\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Input\"], {\n        value: this.state.bottlesLimit,\n        onChange: function onChange(event) {\n          return _this2.setState({\n            bottlesLimit: event.target.value\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 29\n        }\n      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Button\"], {\n        loading: this.state.loading,\n        type: \"submit\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 25\n        }\n      }, \"Set Limit\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"], {\n        error: !!this.state.errorMessage,\n        success: this.state.hasNoError,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 25\n        }\n      }, __jsx(\"div\", {\n        className: \"Scanner\",\n        style: {\n          'width': '40%',\n          'margin-left': 'auto',\n          'margin-right': 'auto'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 29\n        }\n      }, __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 33\n        }\n      }), \" \", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 40\n        }\n      }), __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 33\n        }\n      }, \"Scan Plastic Bottle \"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Button\"], {\n        className: \"QrReader\",\n        style: {\n          'vertical-align': 'middle'\n        },\n        onClick: this.onScan,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 33\n        }\n      }, \" Scan QR Code\"), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 33\n        }\n      }, \" \", this.state.qr === true ? __jsx(QRReader, {\n        delay: 300,\n        onError: this.handleError,\n        onScan: this.handleScan,\n        style: {\n          width: \"60%\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 66\n        }\n      }) : '', \" \"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Message\"], {\n        error: true,\n        header: \"Error!\",\n        content: this.state.errorMessage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 33\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Message\"], {\n        success: true,\n        header: \"Success!\",\n        content: \"Plastic bottle status is updated successfully by sorting machine!\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 33\n        }\n      })))));\n    }\n  }]);\n\n  return index;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]); //At the end of each page, a component is expected to be returned \n// If not, Next.js throws an error \n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"QRReader$dynamic\");\n$RefreshReg$(_c2, \"QRReader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW11bGF0b3JzLmpzPzc5ZjUiXSwibmFtZXMiOlsiUVJSZWFkZXIiLCJkeW5hbWljIiwic3NyIiwiaW5kZXgiLCJwcm9wcyIsImRhdGEiLCJzZXRTdGF0ZSIsInJlc3VsdCIsInNvcnRCb3R0bGUiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RhdGUiLCJxciIsImVycm9yTWVzc2FnZSIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwidHJhY2tpbmdDb250cmFjdCIsIm1ldGhvZHMiLCJ1cGRhdGVTdGF0dXNTb3J0ZWQiLCJyZWdpc3RlclNDQWRkcmVzcyIsInNlbGxlckFkZHJlc3MiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJoYXNFcnJvciIsImhhc05vRXJyb3IiLCJwcm9kdWN0aW9uTWFjaGluZSIsInNvcnRpbmdNYWNoaW5lIiwiYm90dGxlc0xpbWl0Iiwib25TZXRCYWxlTGltaXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvYWRpbmciLCJvblNjYW4iLCJoYW5kbGVFcnJvciIsImhhbmRsZVNjYW4iLCJ3aWR0aCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFFBQVEsR0FBR0Msb0RBQU8sTUFBQztBQUFBLFNBQU0sd0pBQU47QUFBQSxDQUFELEVBQWtDO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFwQixvRUFBb0I7QUFBQTtBQUFBLGNBQXBCLGlCQUFvQjtBQUFBO0FBQUEsQ0FBbEMsQ0FBeEI7TUFBTUYsUTtBQUNOO0FBQ0E7O0lBRU1HLEs7Ozs7O0FBQ0YsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZTtBQUFBLGtNQWdCTixp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LE1BQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQU8sS0FBS3hCLEtBQUwsQ0FBV0MsRUFBWCxLQUFrQixJQUFsQixHQUEwQixNQUFDLFFBQUQ7QUFDN0IsYUFBSyxFQUFFLEdBRHNCO0FBRTdCLGVBQU8sRUFBRSxLQUFLd0IsV0FGZTtBQUc3QixjQUFNLEVBQUUsS0FBS0MsVUFIZ0I7QUFJN0IsYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBSnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBMUIsR0FPRCxFQVBOLE1BTEosRUFjSSxNQUFDLDBEQUFEO0FBQVMsYUFBSyxNQUFkO0FBQWUsY0FBTSxFQUFDLFFBQXRCO0FBQStCLGVBQU8sRUFBRSxLQUFLM0IsS0FBTCxDQUFXRSxZQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBZEosRUFnQkksTUFBQywwREFBRDtBQUFTLGVBQU8sTUFBaEI7QUFBaUIsY0FBTSxFQUFDLFVBQXhCO0FBQW1DLGVBQU8sRUFBQyxtRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWhCSixDQURKLENBVkosQ0F0QlIsQ0FESjtBQWdFSDs7OztFQWxJZTBCLCtDLEdBc0lwQjtBQUNBOzs7QUFDZXZDLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZW11bGF0b3JzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbk5vdGU6IFNlbGxlciBhZGRyZXNzIGlzIGhhcmRjb2RlZCBpbiB0aGUgc29ydGluZyBtYWNoaW5lXG4qL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1lbnUsIEJ1dHRvbiwgTWVzc2FnZSwgRm9ybSwgSW5wdXR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5jb25zdCBRUlJlYWRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1xci1yZWFkZXInKSwgeyBzc3I6IGZhbHNlIH0pO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgdHJhY2tpbmdDb250cmFjdCBmcm9tICcuLi9ldGhlcmV1bS90cmFja2luZyc7XG5cbmNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwcm9kdWN0aW9uTWFjaGluZTogZmFsc2UsXG4gICAgICAgICAgICBzb3J0aW5nTWFjaGluZTogZmFsc2UsXG4gICAgICAgICAgICByZXN1bHQ6ICcnLFxuICAgICAgICAgICAgcXI6IGZhbHNlLFxuICAgICAgICAgICAgc2VsbGVyQWRkcmVzczogJzB4MzM0YjEyREYzNzk4NEE0NDliNTdCQUUzRjQxMjBmNzBiZTE3N2JlMCcsXG4gICAgICAgICAgICByZWdpc3RlclNDQWRkcmVzczogJzB4NzEyNmVjNGY2OGFkZGVkMDA5MDE1YTFmNWFjNzE4YzQ4OTZmYWEyZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgaGFzTm9FcnJvcjogZmFsc2UsIFxuICAgICAgICAgICAgYm90dGxlc0xpbWl0OiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gUVIgcmVhZGVyIGZ1bmN0aW9ucyBcbiAgICBoYW5kbGVTY2FuID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXN1bHQ6IGRhdGEgfSk7XG4gICAgICAgICAgICB0aGlzLnNvcnRCb3R0bGUoKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3IgPSBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG5cbiAgICBvblNjYW4gPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucXIgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcXI6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcXI6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIExvZyBib3R0bGUgYXMgZGlzcG9zZWQgXG4gICAgc29ydEJvdHRsZSA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiAnJyB9KTtcblxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRyYWNraW5nQ29udHJhY3QubWV0aG9kc1xuICAgICAgICAgICAgICAgIC51cGRhdGVTdGF0dXNTb3J0ZWQodGhpcy5zdGF0ZS5yZWdpc3RlclNDQWRkcmVzcywgdGhpcy5zdGF0ZS5zZWxsZXJBZGRyZXNzLCB0aGlzLnN0YXRlLnJlc3VsdClcbiAgICAgICAgICAgICAgICAuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc0Vycm9yOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGVycm9yTXNnIGlzIGVtcHR5LCByZWdpc3RyYXRpb24gaXMgc3VjY2Vzc2Z1bFxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc05vRXJyb3I6IHRydWUgfSk7XG5cbiAgICB9O1xuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgeyBwcm9kdWN0aW9uTWFjaGluZSwgc29ydGluZ01hY2hpbmUsIHFyIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4xL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxoMT5FbXVsYXRvcnMgUGFnZTwvaDE+XG4gICAgICAgICAgICAgICAgPHA+IFRoaXMgcGFnZSBpcyB0byBlbXVsYXRlIHRoZSBmdW5jdGlvbmFsaXR5IG9mIG1hY2hpbmVzIHBhcnRpY2lwYXRpbmcgaW4gdGhlIHN5c3RlbSA8YnIgLz5cbiAgICAgICAgICAgICAgICBDaG9vc2Ugd2hpY2ggbWFjaGluZSB5b3Ugd291bGQgbGlrZSB0byBlbXVsYXRlXG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8TWVudSB3aWR0aHM9ezN9PlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J1Byb2R1Y3Rpb25MaW5lTWFjaGluZScgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3Rpb25NYWNoaW5lOiB0cnVlLCBzb3J0aW5nTWFjaGluZTogZmFsc2UgfSl9ID4gUHJvZHVjdGlvbiBMaW5lIE1hY2hpbmU8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdTb3J0aW5nTWFjaGluZScgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNvcnRpbmdNYWNoaW5lOiB0cnVlLCBwcm9kdWN0aW9uTWFjaGluZTogZmFsc2UgfSl9ID4gU29ydGluZyBNYWNoaW5lPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9NZW51PlxuXG4gICAgICAgICAgICAgICAge3Byb2R1Y3Rpb25NYWNoaW5lICYmIChcblxuICAgICAgICAgICAgICAgICAgICA8aDI+IFB1dCB0aGUgY29kZSBoZXJlISE8L2gyPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7c29ydGluZ01hY2hpbmUgJiYgKFxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblNldEJhbGVMaW1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TnVtYmVyIG9mIEJvdHRsZXMgaW4gYSBQbGFzdGljIEJhbGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5ib3R0bGVzTGltaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgYm90dGxlc0xpbWl0OiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gdHlwZT0nc3VibWl0Jz5TZXQgTGltaXQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IHN1Y2Nlc3M9e3RoaXMuc3RhdGUuaGFzTm9FcnJvcn0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2Nhbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ICd3aWR0aCc6ICc0MCUnLCAnbWFyZ2luLWxlZnQnOiAnYXV0bycsICdtYXJnaW4tcmlnaHQnOiAnYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPiA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlNjYW4gUGxhc3RpYyBCb3R0bGUgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJRclJlYWRlclwiIHN0eWxlPXt7ICd2ZXJ0aWNhbC1hbGlnbic6ICdtaWRkbGUnIH19IG9uQ2xpY2s9e3RoaXMub25TY2FufSA+IFNjYW4gUVIgQ29kZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiB7dGhpcy5zdGF0ZS5xciA9PT0gdHJ1ZSA/ICg8UVJSZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXszMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLmhhbmRsZUVycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TY2FuPXt0aGlzLmhhbmRsZVNjYW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCI2MCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfSA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJFcnJvciFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBzdWNjZXNzIGhlYWRlcj1cIlN1Y2Nlc3MhXCIgY29udGVudD1cIlBsYXN0aWMgYm90dGxlIHN0YXR1cyBpcyB1cGRhdGVkIHN1Y2Nlc3NmdWxseSBieSBzb3J0aW5nIG1hY2hpbmUhXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgKX1cblxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICk7XG4gICAgfVxuXG59XG5cbi8vQXQgdGhlIGVuZCBvZiBlYWNoIHBhZ2UsIGEgY29tcG9uZW50IGlzIGV4cGVjdGVkIHRvIGJlIHJldHVybmVkIFxuLy8gSWYgbm90LCBOZXh0LmpzIHRocm93cyBhbiBlcnJvciBcbmV4cG9ydCBkZWZhdWx0IGluZGV4OyAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/emulators.js\n");

/***/ })

})