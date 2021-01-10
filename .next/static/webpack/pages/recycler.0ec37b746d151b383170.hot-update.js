webpackHotUpdate_N_E("pages/recycler",{

/***/ "./pages/recycler.js":
/*!***************************!*\
  !*** ./pages/recycler.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/recycler.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n/*\nThis is the recycler page where a recycler scans the QR codes and view rewards\nContact used here: an instance of tracking.sol \nTo run the app, use the command npm run dev\n*/\n\n\n\nvar QRReader = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-qr-reader */ \"./node_modules/react-qr-reader/lib/index.js\", 7));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-qr-reader */ \"./node_modules/react-qr-reader/lib/index.js\")];\n    },\n    modules: ['react-qr-reader']\n  }\n}); //import web3 from '../ethereum/web3';\n//import trackingContract from '../ethereum/tracking'; // import SC instance\n\n_c2 = QRReader;\n\nvar recyclerPage = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(recyclerPage, _Component);\n\n  var _super = _createSuper(recyclerPage);\n\n  function recyclerPage(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, recyclerPage);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"handleScan\", function (data) {\n      if (data) {\n        _this.setState({\n          result: data\n        });\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"handleError\", function (err) {\n      console.error(err);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_this), \"onScan\", /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                event.preventDefault();\n\n                if (_this.state.qr === false) {\n                  _this.setState({\n                    qr: true\n                  });\n                } else {\n                  _this.setState({\n                    qr: false\n                  });\n                }\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n\n    _this.state = {\n      rewards: 0,\n      bottleStatus: '',\n      result: '',\n      qr: false\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(recyclerPage, [{\n    key: \"renderBottlesTable\",\n    value: function renderBottlesTable() {\n      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Table\"].Row, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Table\"].Cell, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 17\n        }\n      }, this.state.result), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Table\"].Cell, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 17\n        }\n      }, \"Completed\"));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var qr = this.state.qr;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 13\n        }\n      }, __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 17\n        }\n      }, \"Welcome to Recycler's Page\"), __jsx(\"link\", {\n        rel: \"stylesheet\",\n        href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 17\n        }\n      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Card\"], {\n        header: \"Rewards\",\n        description: this.state.rewards,\n        meta: \"ETH\",\n        centered: \"true\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 17\n        }\n      }), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 17\n        }\n      }), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 17\n        }\n      }), __jsx(\"div\", {\n        className: \"Scanner\",\n        style: {\n          'width': '40%',\n          'margin-left': 'auto',\n          'margin-right': 'auto'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 17\n        }\n      }, __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 21\n        }\n      }, \"Dispose a Plastic Bottle\", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Button\"], {\n        className: \"QrReader\",\n        style: {\n          'vertical-align': 'middle'\n        },\n        onClick: this.onScan,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 21\n        }\n      }, \" Scan QR Code\"), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 25\n        }\n      }, \" \", this.state.qr === true ? __jsx(QRReader, {\n        delay: this.state.delay,\n        onError: this.handleError,\n        onScan: this.handleScan,\n        style: {\n          width: \"70%\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 58\n        }\n      }) : '', \" \"))), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 17\n        }\n      }), __jsx(\"div\", {\n        className: \"BottleTable\",\n        style: {\n          'width': '40%',\n          'margin-left': 'auto',\n          'margin-right': 'auto'\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 17\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Table\"], {\n        unstackable: true,\n        size: \"small\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 21\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Table\"].Header, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 25\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Table\"].Row, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 29\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Table\"].HeaderCell, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 33\n        }\n      }, \"Plasitc Bottle Address\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Table\"].HeaderCell, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 33\n        }\n      }, \"Status\"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__[\"Table\"].Body, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 25\n        }\n      }, this.renderBottlesTable()))));\n    }\n  }]);\n\n  return recyclerPage;\n}(react__WEBPACK_IMPORTED_MODULE_9__[\"Component\"]); //At the end of each page, a component is expected to be returned \n// If not, Next.js throws an error \n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (recyclerPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"QRReader$dynamic\");\n$RefreshReg$(_c2, \"QRReader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjeWNsZXIuanM/ZTdkNCJdLCJuYW1lcyI6WyJRUlJlYWRlciIsImR5bmFtaWMiLCJzc3IiLCJyZWN5Y2xlclBhZ2UiLCJwcm9wcyIsImRhdGEiLCJzZXRTdGF0ZSIsInJlc3VsdCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdGF0ZSIsInFyIiwicmV3YXJkcyIsImJvdHRsZVN0YXR1cyIsIm9uU2NhbiIsImRlbGF5IiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVTY2FuIiwid2lkdGgiLCJyZW5kZXJCb3R0bGVzVGFibGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFFBQVEsR0FBR0Msb0RBQU8sTUFBQztBQUFBLFNBQU0sd0pBQU47QUFBQSxDQUFELEVBQWtDO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUFwQixvRUFBb0I7QUFBQTtBQUFBLGNBQXBCLGlCQUFvQjtBQUFBO0FBQUEsQ0FBbEMsQ0FBeEIsQyxDQUVBO0FBQ0E7O01BSE1GLFE7O0lBS0FHLFk7Ozs7O0FBRUYsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxxTkFVTixVQUFBQyxJQUFJLEVBQUk7QUFDakIsVUFBSUEsSUFBSixFQUFVO0FBQ04sY0FBS0MsUUFBTCxDQUFjO0FBQUVDLGdCQUFNLEVBQUVGO0FBQVYsU0FBZDtBQUNIO0FBQ0osS0Fka0I7O0FBQUEsc05BZ0JMLFVBQUFHLEdBQUcsRUFBSTtBQUNqQkMsYUFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDSCxLQWxCa0I7O0FBQUE7QUFBQSxrTUFvQlYsaUJBQU9HLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNM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QWY7QUFBNkIsYUFBSyxFQUFFO0FBQUUsbUJBQVMsS0FBWDtBQUFrQix5QkFBZSxNQUFqQztBQUF5QywwQkFBZ0I7QUFBekQsU0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsd0RBQUQ7QUFBTyxtQkFBVyxNQUFsQjtBQUFtQixZQUFJLEVBQUMsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsd0RBQUQsQ0FBTyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLHdEQUFELENBQU8sR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyx3REFBRCxDQUFPLFVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FESixFQUVJLE1BQUMsd0RBQUQsQ0FBTyxVQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosQ0FESixDQURKLEVBUUksTUFBQyx3REFBRCxDQUFPLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLLEtBQUtDLGtCQUFMLEVBREwsQ0FSSixDQURKLENBM0JKLENBREo7QUFnREg7Ozs7RUE5RnNCQywrQyxHQWtHM0I7QUFDQTs7O0FBQ2VwQiwyRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3JlY3ljbGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblRoaXMgaXMgdGhlIHJlY3ljbGVyIHBhZ2Ugd2hlcmUgYSByZWN5Y2xlciBzY2FucyB0aGUgUVIgY29kZXMgYW5kIHZpZXcgcmV3YXJkc1xuQ29udGFjdCB1c2VkIGhlcmU6IGFuIGluc3RhbmNlIG9mIHRyYWNraW5nLnNvbCBcblRvIHJ1biB0aGUgYXBwLCB1c2UgdGhlIGNvbW1hbmQgbnBtIHJ1biBkZXZcbiovXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIGxhenksIFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgVGFibGUsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5jb25zdCBRUlJlYWRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1xci1yZWFkZXInKSwgeyBzc3I6IGZhbHNlIH0pO1xuXG4vL2ltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuLy9pbXBvcnQgdHJhY2tpbmdDb250cmFjdCBmcm9tICcuLi9ldGhlcmV1bS90cmFja2luZyc7IC8vIGltcG9ydCBTQyBpbnN0YW5jZVxuXG5jbGFzcyByZWN5Y2xlclBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmV3YXJkczogMCxcbiAgICAgICAgICAgIGJvdHRsZVN0YXR1czogJycsXG4gICAgICAgICAgICByZXN1bHQ6ICcnLFxuICAgICAgICAgICAgcXI6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaGFuZGxlU2NhbiA9IGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlc3VsdDogZGF0YSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUVycm9yID0gZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuXG4gICAgb25TY2FuID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnFyID09PSBmYWxzZSl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcXI6IHRydWUgfSk7IH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBxcjogZmFsc2UgfSk7IFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJlbmRlckJvdHRsZXNUYWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+e3RoaXMuc3RhdGUucmVzdWx0fTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbD5Db21wbGV0ZWQ8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlLlJvdz5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHsgcXIgfSA9IHRoaXMuc3RhdGVcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+V2VsY29tZSB0byBSZWN5Y2xlcidzIFBhZ2U8L2gxPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMS9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8Q2FyZCBoZWFkZXI9J1Jld2FyZHMnIGRlc2NyaXB0aW9uPXt0aGlzLnN0YXRlLnJld2FyZHN9IG1ldGE9J0VUSCcgY2VudGVyZWQ9J3RydWUnIC8+XG5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2Nhbm5lclwiIHN0eWxlPXt7ICd3aWR0aCc6ICc0MCUnLCAnbWFyZ2luLWxlZnQnOiAnYXV0bycsICdtYXJnaW4tcmlnaHQnOiAnYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5EaXNwb3NlIGEgUGxhc3RpYyBCb3R0bGVcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJRclJlYWRlclwiIHN0eWxlPXt7ICd2ZXJ0aWNhbC1hbGlnbic6ICdtaWRkbGUnIH19IG9uQ2xpY2s9e3RoaXMub25TY2FufSA+IFNjYW4gUVIgQ29kZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ge3RoaXMuc3RhdGUucXIgPT09IHRydWUgPyAoPFFSUmVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXt0aGlzLnN0YXRlLmRlbGF5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLmhhbmRsZUVycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNjYW49e3RoaXMuaGFuZGxlU2Nhbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNzAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ30gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YnIvPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JvdHRsZVRhYmxlJyBzdHlsZT17eyAnd2lkdGgnOiAnNDAlJywgJ21hcmdpbi1sZWZ0JzogJ2F1dG8nLCAnbWFyZ2luLXJpZ2h0JzogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgdW5zdGFja2FibGUgc2l6ZT0nc21hbGwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5QbGFzaXRjIEJvdHRsZSBBZGRyZXNzPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5TdGF0dXM8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQm90dGxlc1RhYmxlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLkJvZHk+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG4vL0F0IHRoZSBlbmQgb2YgZWFjaCBwYWdlLCBhIGNvbXBvbmVudCBpcyBleHBlY3RlZCB0byBiZSByZXR1cm5lZCBcbi8vIElmIG5vdCwgTmV4dC5qcyB0aHJvd3MgYW4gZXJyb3IgXG5leHBvcnQgZGVmYXVsdCByZWN5Y2xlclBhZ2U7ICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/recycler.js\n");

/***/ })

})