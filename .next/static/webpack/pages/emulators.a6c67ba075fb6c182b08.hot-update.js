webpackHotUpdate_N_E("pages/emulators",{

/***/ "./pages/emulators.js":
/*!****************************!*\
  !*** ./pages/emulators.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_tracking__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ethereum/tracking */ \"./ethereum/tracking.js\");\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/emulators.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n/*\nNote: Seller address is hardcoded in the sorting machine\n*/\n\n\n\nvar QRReader = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-qr-reader */ \"./node_modules/react-qr-reader/lib/index.js\", 7));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-qr-reader */ \"./node_modules/react-qr-reader/lib/index.js\")];\n    },\n    modules: ['react-qr-reader']\n  }\n});\n_c2 = QRReader;\n\n\n\nvar index = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(index, _Component);\n\n  var _super = _createSuper(index);\n\n  function index(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, index);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"handleScan\", /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (data) {\n                  _this.setState({\n                    result: data\n                  });\n\n                  _this.sortBottle();\n                }\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"handleError\", function (err) {\n      console.error(err);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"onScan\", /*#__PURE__*/function () {\n      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                event.preventDefault();\n\n                if (_this.state.qr === false) {\n                  _this.setState({\n                    qr: true\n                  });\n                } else {\n                  _this.setState({\n                    qr: false\n                  });\n                }\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x2) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"sortBottle\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n      var accounts;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _this.setState({\n                errorMessage: ''\n              });\n\n              _context3.next = 3;\n              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__[\"default\"].eth.getAccounts();\n\n            case 3:\n              accounts = _context3.sent;\n              _context3.prev = 4;\n              _context3.next = 7;\n              return _ethereum_tracking__WEBPACK_IMPORTED_MODULE_13__[\"default\"].methods.updateStatusSorted(_this.state.registerSCAddress, _this.state.sellerAddress, _this.state.result).send({\n                from: accounts[0]\n              });\n\n            case 7:\n              _context3.next = 13;\n              break;\n\n            case 9:\n              _context3.prev = 9;\n              _context3.t0 = _context3[\"catch\"](4);\n\n              _this.setState({\n                errorMessage: _context3.t0.message\n              });\n\n              _this.setState({\n                hasError: false\n              });\n\n            case 13:\n              // if errorMsg is empty, registration is successful\n              if (!_this.state.errorMessage) _this.setState({\n                hasNoError: true\n              });\n\n            case 14:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[4, 9]]);\n    })));\n\n    _this.state = {\n      productionMachine: false,\n      sortingMachine: false,\n      result: '',\n      qr: false,\n      sellerAddress: '0x334b12DF37984A449b57BAE3F4120f70be177be0',\n      registerSCAddress: '0x7126ec4f68added009015a1f5ac718c4896faa2e',\n      errorMessage: '',\n      hasNoError: false\n    };\n    return _this;\n  } // QR reader functions \n\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(index, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          productionMachine = _this$state.productionMachine,\n          sortingMachine = _this$state.sortingMachine,\n          qr = _this$state.qr;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 13\n        }\n      }, __jsx(\"link\", {\n        rel: \"stylesheet\",\n        href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 17\n        }\n      }), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 17\n        }\n      }, \"Emulators Page\"), __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 17\n        }\n      }, \" This page is to emulate the functionality of machines participating in the system \", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 103\n        }\n      }), \"Choose which machine you would like to emulate\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Menu\"], {\n        widths: 3,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 17\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Menu\"].Item, {\n        name: \"ProductionLineMachine\",\n        onClick: function onClick() {\n          return _this2.setState({\n            productionMachine: true,\n            sortingMachine: false\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 21\n        }\n      }, \" Production Line Machine\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Menu\"].Item, {\n        name: \"SortingMachine\",\n        onClick: function onClick() {\n          return _this2.setState({\n            sortingMachine: true,\n            productionMachine: false\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }\n      }, \" Sorting Machine\")), productionMachine && __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 21\n        }\n      }, \" Put the code here!!\"), sortingMachine && __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 21\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"], {\n        onSubmit: this.onSetBaleLimit,\n        error: !!this.state.errorMessage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 21\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"].Field, {\n        width: 6,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 25\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 29\n        }\n      }, \"Number of Bottles in a Plastic Bale\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Input\"], {\n        value: this.state.manufacturerName,\n        onChange: function onChange(event) {\n          return _this2.setState({\n            manufacturerName: event.target.value\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 29\n        }\n      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Form\"], {\n        error: !!this.state.errorMessage,\n        success: this.state.hasNoError,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 25\n        }\n      }, __jsx(\"div\", {\n        className: \"Scanner\",\n        style: {\n          'width': '40%',\n          'margin-left': 'auto',\n          'margin-right': 'auto'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 29\n        }\n      }, __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 33\n        }\n      }), \" \", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 40\n        }\n      }), __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 33\n        }\n      }, \"Scan Plastic Bottle \"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Button\"], {\n        className: \"QrReader\",\n        style: {\n          'vertical-align': 'middle'\n        },\n        onClick: this.onScan,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 33\n        }\n      }, \" Scan QR Code\"), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 33\n        }\n      }, \" \", this.state.qr === true ? __jsx(QRReader, {\n        delay: 300,\n        onError: this.handleError,\n        onScan: this.handleScan,\n        style: {\n          width: \"60%\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 66\n        }\n      }) : '', \" \"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Message\"], {\n        error: true,\n        header: \"Error!\",\n        content: this.state.errorMessage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 33\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Message\"], {\n        success: true,\n        header: \"Success!\",\n        content: \"Plastic bottle status is updated successfully by sorting machine!\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 33\n        }\n      })))));\n    }\n  }]);\n\n  return index;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]); //At the end of each page, a component is expected to be returned \n// If not, Next.js throws an error \n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"QRReader$dynamic\");\n$RefreshReg$(_c2, \"QRReader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW11bGF0b3JzLmpzPzc5ZjUiXSwibmFtZXMiOlsiUVJSZWFkZXIiLCJkeW5hbWljIiwic3NyIiwiaW5kZXgiLCJwcm9wcyIsImRhdGEiLCJzZXRTdGF0ZSIsInJlc3VsdCIsInNvcnRCb3R0bGUiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RhdGUiLCJxciIsImVycm9yTWVzc2FnZSIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwidHJhY2tpbmdDb250cmFjdCIsIm1ldGhvZHMiLCJ1cGRhdGVTdGF0dXNTb3J0ZWQiLCJyZWdpc3RlclNDQWRkcmVzcyIsInNlbGxlckFkZHJlc3MiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJoYXNFcnJvciIsImhhc05vRXJyb3IiLCJwcm9kdWN0aW9uTWFjaGluZSIsInNvcnRpbmdNYWNoaW5lIiwib25TZXRCYWxlTGltaXQiLCJtYW51ZmFjdHVyZXJOYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJvblNjYW4iLCJoYW5kbGVFcnJvciIsImhhbmRsZVNjYW4iLCJ3aWR0aCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFFBQVEsR0FBR0Msb0RBQU8sTUFBQztBQUFBLFNBQU0sd0pBQU47QUFBQSxDQUFELEVBQWtDO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFwQixvRUFBb0I7QUFBQTtBQUFBLGNBQXBCLGlCQUFvQjtBQUFBO0FBQUEsQ0FBbEMsQ0FBeEI7TUFBTUYsUTtBQUNOO0FBQ0E7O0lBRU1HLEs7Ozs7O0FBQ0YsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZTtBQUFBLGtNQWVOLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVCxvQkFBSUEsSUFBSixFQUFVO0FBQ04sd0JBQUtDLFFBQUwsQ0FBYztBQUFFQywwQkFBTSxFQUFFRjtBQUFWLG1CQUFkOztBQUNBLHdCQUFLRyxVQUFMO0FBRUg7O0FBTFE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FmTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxzTkF1QkwsVUFBQUMsR0FBRyxFQUFJO0FBQ2pCQyxhQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNILEtBekJrQjs7QUFBQTtBQUFBLG1NQTJCVixrQkFBT0csS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0xBLHFCQUFLLENBQUNDLGNBQU47O0FBQ0Esb0JBQUksTUFBS0MsS0FBTCxDQUFXQyxFQUFYLEtBQWtCLEtBQXRCLEVBQTZCO0FBQ3pCLHdCQUFLVCxRQUFMLENBQWM7QUFBRVMsc0JBQUUsRUFBRTtBQUFOLG1CQUFkO0FBQ0gsaUJBRkQsTUFHSztBQUNELHdCQUFLVCxRQUFMLENBQWM7QUFBRVMsc0JBQUUsRUFBRTtBQUFOLG1CQUFkO0FBQ0g7O0FBUEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0EzQlU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsbVpBc0NOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVULG9CQUFLVCxRQUFMLENBQWM7QUFBRVUsNEJBQVksRUFBRTtBQUFoQixlQUFkOztBQUZTO0FBQUEscUJBSWNDLHVEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFQUpkOztBQUFBO0FBSUhDLHNCQUpHO0FBQUE7QUFBQTtBQUFBLHFCQU9DQywyREFBZ0IsQ0FBQ0MsT0FBakIsQ0FDREMsa0JBREMsQ0FDa0IsTUFBS1QsS0FBTCxDQUFXVSxpQkFEN0IsRUFDZ0QsTUFBS1YsS0FBTCxDQUFXVyxhQUQzRCxFQUMwRSxNQUFLWCxLQUFMLENBQVdQLE1BRHJGLEVBRURtQixJQUZDLENBRUk7QUFBRUMsb0JBQUksRUFBRVAsUUFBUSxDQUFDLENBQUQ7QUFBaEIsZUFGSixDQVBEOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBV0wsb0JBQUtkLFFBQUwsQ0FBYztBQUFFVSw0QkFBWSxFQUFFLGFBQUlZO0FBQXBCLGVBQWQ7O0FBQ0Esb0JBQUt0QixRQUFMLENBQWM7QUFBRXVCLHdCQUFRLEVBQUU7QUFBWixlQUFkOztBQVpLO0FBZVQ7QUFDQSxrQkFBSSxDQUFDLE1BQUtmLEtBQUwsQ0FBV0UsWUFBaEIsRUFDSSxNQUFLVixRQUFMLENBQWM7QUFBRXdCLDBCQUFVLEVBQUU7QUFBZCxlQUFkOztBQWpCSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXRDTTs7QUFFZixVQUFLaEIsS0FBTCxHQUFhO0FBQ1RpQix1QkFBaUIsRUFBRSxLQURWO0FBRVRDLG9CQUFjLEVBQUUsS0FGUDtBQUdUekIsWUFBTSxFQUFFLEVBSEM7QUFJVFEsUUFBRSxFQUFFLEtBSks7QUFLVFUsbUJBQWEsRUFBRSw0Q0FMTjtBQU1URCx1QkFBaUIsRUFBRSw0Q0FOVjtBQU9UUixrQkFBWSxFQUFFLEVBUEw7QUFRVGMsZ0JBQVUsRUFBRTtBQVJILEtBQWI7QUFGZTtBQVlsQixHLENBRUQ7Ozs7OzZCQThDUztBQUFBOztBQUFBLHdCQUU2QyxLQUFLaEIsS0FGbEQ7QUFBQSxVQUVHaUIsaUJBRkgsZUFFR0EsaUJBRkg7QUFBQSxVQUVzQkMsY0FGdEIsZUFFc0JBLGNBRnRCO0FBQUEsVUFFc0NqQixFQUZ0QyxlQUVzQ0EsRUFGdEM7QUFJTCxhQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQ0ksWUFBSSxFQUFDLGdFQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTEosRUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdHQUFzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQXRGLG1EQU5KLEVBVUksTUFBQyx1REFBRDtBQUFNLGNBQU0sRUFBRSxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLHVEQUFELENBQU0sSUFBTjtBQUFXLFlBQUksRUFBQyx1QkFBaEI7QUFBd0MsZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDVCxRQUFMLENBQWM7QUFBRXlCLDZCQUFpQixFQUFFLElBQXJCO0FBQTJCQywwQkFBYyxFQUFFO0FBQTNDLFdBQWQsQ0FBTjtBQUFBLFNBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREosRUFFSSxNQUFDLHVEQUFELENBQU0sSUFBTjtBQUFXLFlBQUksRUFBQyxnQkFBaEI7QUFBaUMsZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDMUIsUUFBTCxDQUFjO0FBQUUwQiwwQkFBYyxFQUFFLElBQWxCO0FBQXdCRCw2QkFBaUIsRUFBRTtBQUEzQyxXQUFkLENBQU47QUFBQSxTQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZKLENBVkosRUFlS0EsaUJBQWlCLElBRWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FqQlIsRUFvQktDLGNBQWMsSUFFWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0EsTUFBQyx1REFBRDtBQUFNLGdCQUFRLEVBQUUsS0FBS0MsY0FBckI7QUFBcUMsYUFBSyxFQUFFLENBQUMsQ0FBQyxLQUFLbkIsS0FBTCxDQUFXRSxZQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyx1REFBRCxDQUFNLEtBQU47QUFBWSxhQUFLLEVBQUUsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBREosRUFFSSxNQUFDLHdEQUFEO0FBQU8sYUFBSyxFQUFFLEtBQUtGLEtBQUwsQ0FBV29CLGdCQUF6QjtBQUNJLGdCQUFRLEVBQUUsa0JBQUF0QixLQUFLO0FBQUEsaUJBQUksTUFBSSxDQUFDTixRQUFMLENBQWM7QUFBRTRCLDRCQUFnQixFQUFFdEIsS0FBSyxDQUFDdUIsTUFBTixDQUFhQztBQUFqQyxXQUFkLENBQUo7QUFBQSxTQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosQ0FESixDQURBLEVBU0ksTUFBQyx1REFBRDtBQUFNLGFBQUssRUFBRSxDQUFDLENBQUMsS0FBS3RCLEtBQUwsQ0FBV0UsWUFBMUI7QUFBd0MsZUFBTyxFQUFFLEtBQUtGLEtBQUwsQ0FBV2dCLFVBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUNJLGFBQUssRUFBRTtBQUFFLG1CQUFTLEtBQVg7QUFBa0IseUJBQWUsTUFBakM7QUFBeUMsMEJBQWdCO0FBQXpELFNBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixPQUVXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGWCxFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBSEosRUFJSSxNQUFDLHlEQUFEO0FBQVEsaUJBQVMsRUFBQyxVQUFsQjtBQUE2QixhQUFLLEVBQUU7QUFBRSw0QkFBa0I7QUFBcEIsU0FBcEM7QUFBb0UsZUFBTyxFQUFFLEtBQUtPLE1BQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQU8sS0FBS3ZCLEtBQUwsQ0FBV0MsRUFBWCxLQUFrQixJQUFsQixHQUEwQixNQUFDLFFBQUQ7QUFDN0IsYUFBSyxFQUFFLEdBRHNCO0FBRTdCLGVBQU8sRUFBRSxLQUFLdUIsV0FGZTtBQUc3QixjQUFNLEVBQUUsS0FBS0MsVUFIZ0I7QUFJN0IsYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBSnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBMUIsR0FPRCxFQVBOLE1BTEosRUFjSSxNQUFDLDBEQUFEO0FBQVMsYUFBSyxNQUFkO0FBQWUsY0FBTSxFQUFDLFFBQXRCO0FBQStCLGVBQU8sRUFBRSxLQUFLMUIsS0FBTCxDQUFXRSxZQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBZEosRUFnQkksTUFBQywwREFBRDtBQUFTLGVBQU8sTUFBaEI7QUFBaUIsY0FBTSxFQUFDLFVBQXhCO0FBQW1DLGVBQU8sRUFBQyxtRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWhCSixDQURKLENBVEosQ0F0QlIsQ0FESjtBQStESDs7OztFQWhJZXlCLCtDLEdBb0lwQjtBQUNBOzs7QUFDZXRDLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZW11bGF0b3JzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbk5vdGU6IFNlbGxlciBhZGRyZXNzIGlzIGhhcmRjb2RlZCBpbiB0aGUgc29ydGluZyBtYWNoaW5lXG4qL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1lbnUsIEJ1dHRvbiwgTWVzc2FnZSwgRm9ybSwgSW5wdXR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5jb25zdCBRUlJlYWRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1xci1yZWFkZXInKSwgeyBzc3I6IGZhbHNlIH0pO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgdHJhY2tpbmdDb250cmFjdCBmcm9tICcuLi9ldGhlcmV1bS90cmFja2luZyc7XG5cbmNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwcm9kdWN0aW9uTWFjaGluZTogZmFsc2UsXG4gICAgICAgICAgICBzb3J0aW5nTWFjaGluZTogZmFsc2UsXG4gICAgICAgICAgICByZXN1bHQ6ICcnLFxuICAgICAgICAgICAgcXI6IGZhbHNlLFxuICAgICAgICAgICAgc2VsbGVyQWRkcmVzczogJzB4MzM0YjEyREYzNzk4NEE0NDliNTdCQUUzRjQxMjBmNzBiZTE3N2JlMCcsXG4gICAgICAgICAgICByZWdpc3RlclNDQWRkcmVzczogJzB4NzEyNmVjNGY2OGFkZGVkMDA5MDE1YTFmNWFjNzE4YzQ4OTZmYWEyZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgaGFzTm9FcnJvcjogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBRUiByZWFkZXIgZnVuY3Rpb25zIFxuICAgIGhhbmRsZVNjYW4gPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlc3VsdDogZGF0YSB9KTtcbiAgICAgICAgICAgIHRoaXMuc29ydEJvdHRsZSgpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvciA9IGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cblxuICAgIG9uU2NhbiA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5xciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBxcjogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBxcjogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gTG9nIGJvdHRsZSBhcyBkaXNwb3NlZCBcbiAgICBzb3J0Qm90dGxlID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6ICcnIH0pO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdHJhY2tpbmdDb250cmFjdC5tZXRob2RzXG4gICAgICAgICAgICAgICAgLnVwZGF0ZVN0YXR1c1NvcnRlZCh0aGlzLnN0YXRlLnJlZ2lzdGVyU0NBZGRyZXNzLCB0aGlzLnN0YXRlLnNlbGxlckFkZHJlc3MsIHRoaXMuc3RhdGUucmVzdWx0KVxuICAgICAgICAgICAgICAgIC5zZW5kKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzRXJyb3I6IGZhbHNlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgZXJyb3JNc2cgaXMgZW1wdHksIHJlZ2lzdHJhdGlvbiBpcyBzdWNjZXNzZnVsXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzTm9FcnJvcjogdHJ1ZSB9KTtcblxuICAgIH07XG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7IHByb2R1Y3Rpb25NYWNoaW5lLCBzb3J0aW5nTWFjaGluZSwgcXIgfSA9IHRoaXMuc3RhdGVcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjEvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGgxPkVtdWxhdG9ycyBQYWdlPC9oMT5cbiAgICAgICAgICAgICAgICA8cD4gVGhpcyBwYWdlIGlzIHRvIGVtdWxhdGUgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgbWFjaGluZXMgcGFydGljaXBhdGluZyBpbiB0aGUgc3lzdGVtIDxiciAvPlxuICAgICAgICAgICAgICAgIENob29zZSB3aGljaCBtYWNoaW5lIHlvdSB3b3VsZCBsaWtlIHRvIGVtdWxhdGVcbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxNZW51IHdpZHRocz17M30+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nUHJvZHVjdGlvbkxpbmVNYWNoaW5lJyBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdGlvbk1hY2hpbmU6IHRydWUsIHNvcnRpbmdNYWNoaW5lOiBmYWxzZSB9KX0gPiBQcm9kdWN0aW9uIExpbmUgTWFjaGluZTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J1NvcnRpbmdNYWNoaW5lJyBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc29ydGluZ01hY2hpbmU6IHRydWUsIHByb2R1Y3Rpb25NYWNoaW5lOiBmYWxzZSB9KX0gPiBTb3J0aW5nIE1hY2hpbmU8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8L01lbnU+XG5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdGlvbk1hY2hpbmUgJiYgKFxuXG4gICAgICAgICAgICAgICAgICAgIDxoMj4gUHV0IHRoZSBjb2RlIGhlcmUhITwvaDI+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHtzb3J0aW5nTWFjaGluZSAmJiAoXG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU2V0QmFsZUxpbWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OdW1iZXIgb2YgQm90dGxlcyBpbiBhIFBsYXN0aWMgQmFsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLm1hbnVmYWN0dXJlck5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgbWFudWZhY3R1cmVyTmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gc3VjY2Vzcz17dGhpcy5zdGF0ZS5oYXNOb0Vycm9yfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTY2FubmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgJ3dpZHRoJzogJzQwJScsICdtYXJnaW4tbGVmdCc6ICdhdXRvJywgJ21hcmdpbi1yaWdodCc6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+IDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+U2NhbiBQbGFzdGljIEJvdHRsZSA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIlFyUmVhZGVyXCIgc3R5bGU9e3sgJ3ZlcnRpY2FsLWFsaWduJzogJ21pZGRsZScgfX0gb25DbGljaz17dGhpcy5vblNjYW59ID4gU2NhbiBRUiBDb2RlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+IHt0aGlzLnN0YXRlLnFyID09PSB0cnVlID8gKDxRUlJlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezMwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuaGFuZGxlRXJyb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNjYW49e3RoaXMuaGFuZGxlU2Nhbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjYwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9IDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIkVycm9yIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIHN1Y2Nlc3MgaGVhZGVyPVwiU3VjY2VzcyFcIiBjb250ZW50PVwiUGxhc3RpYyBib3R0bGUgc3RhdHVzIGlzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IGJ5IHNvcnRpbmcgbWFjaGluZSFcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICApfVxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuLy9BdCB0aGUgZW5kIG9mIGVhY2ggcGFnZSwgYSBjb21wb25lbnQgaXMgZXhwZWN0ZWQgdG8gYmUgcmV0dXJuZWQgXG4vLyBJZiBub3QsIE5leHQuanMgdGhyb3dzIGFuIGVycm9yIFxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7ICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/emulators.js\n");

/***/ })

})