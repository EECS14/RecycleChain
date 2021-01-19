webpackHotUpdate_N_E("pages/auctions/viewauctions",{

/***/ "./pages/auctions/viewauctions.js":
/*!****************************************!*\
  !*** ./pages/auctions/viewauctions.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_tracking__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ethereum/tracking */ \"./ethereum/tracking.js\");\n/* harmony import */ var _ethereum_plasticBale__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ethereum/plasticBale */ \"./ethereum/plasticBale.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/auctions/viewauctions.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar viewauctions = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(viewauctions, _Component);\n\n  var _super = _createSuper(viewauctions);\n\n  function viewauctions(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, viewauctions);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this), \"componentDidMount\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var accounts;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__[\"default\"].eth.getAccounts();\n\n            case 2:\n              accounts = _context.sent;\n              //NOTE: Set the account back to account[0] - seller address is account 2\n              _ethereum_tracking__WEBPACK_IMPORTED_MODULE_13__[\"default\"].events.plasticBaleCompleted({\n                filter: {\n                  sellerAddress: accounts[0]\n                },\n                fromBlock: 0\n              }, function (error, event) {\n                //Debugging \n                console.log(event); //1. Fetch plastic bale addresses which are contract addresses/auction addresses from plasticBaleCompleted\n\n                var plasticbaleAddr = event.returnValues['plasticbale'];\n                console.log(plasticbaleAddr); //2. Create a new instance \n\n                var plasticBaleSC = Object(_ethereum_plasticBale__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(plasticbaleAddr); //3. Check auctionStarted events \n\n                plasticBaleSC.events.auctionStarted({\n                  filter: {\n                    baleAddress: plasticbaleAddr\n                  },\n                  fromBlock: 0\n                }, function (error, event) {\n                  console.log(event); //4. Extract Auction data from event\n\n                  var time = new Date(event.returnValues['closingTime'] * 1000);\n                  var date = time.toString();\n                  this.setState({\n                    auctionAddr: event.returnValues['baleAddress'],\n                    closingTime: date,\n                    startingPrice: event.returnValues['startingAmount']\n                  }); //5. Render card on webpage\n\n                  this.renderAuctions();\n                }.bind(this)).on('error', console.error);\n              }.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this))).on('error', console.error);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this), \"renderAuctions\", function () {\n      _this.setState(function (prevState) {\n        var items = {\n          header: _this.state.auctionAddr,\n          description: __jsx(\"a\", {\n            __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this),\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 72\n            }\n          }, \"Join Auction\"),\n          fluid: true,\n          meta: _this.state.closingTime,\n          extra: _this.state.startingPrice\n        };\n        return {\n          cards: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prevState.cards), [items])\n        };\n      });\n    });\n\n    _this.state = {\n      cards: [],\n      closingTime: '',\n      startingPrice: '',\n      auctionAddr: ''\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(viewauctions, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 13\n        }\n      }, __jsx(\"link\", {\n        rel: \"stylesheet\",\n        href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 17\n        }\n      }), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 17\n        }\n      }, \"Open Auctions\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Card\"].Group, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 17\n        }\n      }, this.state.cards.map(function (items) {\n        return __jsx(_routes__WEBPACK_IMPORTED_MODULE_15__[\"Link\"], {\n          route: \"/auctions/viewbales/\".concat(items.header),\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 21\n          }\n        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Card\"], {\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 24\n          }\n        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Card\"].Header, {\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 25\n          }\n        }, items.header), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Card\"].meta, {\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 25\n          }\n        }, items.meta), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Card\"].description, {\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 25\n          }\n        }, __jsx(\"a\", {\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 25\n          }\n        }, \"Join Auction\")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Card\"].fluid, {\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 25\n          }\n        }, items.fluid)));\n      })));\n    }\n  }]);\n\n  return viewauctions;\n}(react__WEBPACK_IMPORTED_MODULE_10__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (viewauctions);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXVjdGlvbnMvdmlld2F1Y3Rpb25zLmpzP2MxMjIiXSwibmFtZXMiOlsidmlld2F1Y3Rpb25zIiwicHJvcHMiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInRyYWNraW5nQ29udHJhY3QiLCJldmVudHMiLCJwbGFzdGljQmFsZUNvbXBsZXRlZCIsImZpbHRlciIsInNlbGxlckFkZHJlc3MiLCJmcm9tQmxvY2siLCJlcnJvciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInBsYXN0aWNiYWxlQWRkciIsInJldHVyblZhbHVlcyIsInBsYXN0aWNCYWxlU0MiLCJwbGFzdGljQmFsZUNvbnRyYWN0IiwiYXVjdGlvblN0YXJ0ZWQiLCJiYWxlQWRkcmVzcyIsInRpbWUiLCJEYXRlIiwiZGF0ZSIsInRvU3RyaW5nIiwic2V0U3RhdGUiLCJhdWN0aW9uQWRkciIsImNsb3NpbmdUaW1lIiwic3RhcnRpbmdQcmljZSIsInJlbmRlckF1Y3Rpb25zIiwiYmluZCIsIm9uIiwicHJldlN0YXRlIiwiaXRlbXMiLCJoZWFkZXIiLCJzdGF0ZSIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJtZXRhIiwiZXh0cmEiLCJjYXJkcyIsIm1hcCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsWTs7Ozs7QUFFRix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLDBaQVdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRU9DLHVEQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFQUZQOztBQUFBO0FBRVZDLHNCQUZVO0FBR2hCO0FBQ0FDLHlFQUFnQixDQUFDQyxNQUFqQixDQUF3QkMsb0JBQXhCLENBQTZDO0FBQ3pDQyxzQkFB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QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDLEtBQUtTLEtBQUwsQ0FBV0ssS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBQVIsS0FBSztBQUFBLGVBQ3ZCLE1BQUMsNkNBQUQ7QUFBTSxlQUFLLGdDQUF5QkEsS0FBSyxDQUFDQyxNQUEvQixDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRyxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDQyxNQUFDLHVEQUFELENBQU0sTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWNELEtBQUssQ0FBQ0MsTUFBcEIsQ0FERCxFQUVDLE1BQUMsdURBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBWUQsS0FBSyxDQUFDSyxJQUFsQixDQUZELEVBR0MsTUFBQyx1REFBRCxDQUFNLFdBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREEsQ0FIRCxFQU1DLE1BQUMsdURBQUQsQ0FBTSxLQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBYUwsS0FBSyxDQUFDSSxLQUFuQixDQU5ELENBREgsQ0FEdUI7QUFBQSxPQUExQixDQURELENBTkosQ0FESjtBQXlCSDs7OztFQTdGc0JLLGdEOztBQWlHWjNDLDJFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXVjdGlvbnMvdmlld2F1Y3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCB0cmFja2luZ0NvbnRyYWN0IGZyb20gJy4uLy4uL2V0aGVyZXVtL3RyYWNraW5nJztcbmltcG9ydCBwbGFzdGljQmFsZUNvbnRyYWN0IGZyb20gJy4uLy4uL2V0aGVyZXVtL3BsYXN0aWNCYWxlJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuXG5jbGFzcyB2aWV3YXVjdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2FyZHM6IFtdLFxuICAgICAgICAgICAgY2xvc2luZ1RpbWU6ICcnLFxuICAgICAgICAgICAgc3RhcnRpbmdQcmljZTogJycsXG4gICAgICAgICAgICBhdWN0aW9uQWRkcjogJydcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGNvbXBvbmVudERpZE1vdW50ID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgLy9OT1RFOiBTZXQgdGhlIGFjY291bnQgYmFjayB0byBhY2NvdW50WzBdIC0gc2VsbGVyIGFkZHJlc3MgaXMgYWNjb3VudCAyXG4gICAgICAgIHRyYWNraW5nQ29udHJhY3QuZXZlbnRzLnBsYXN0aWNCYWxlQ29tcGxldGVkKHtcbiAgICAgICAgICAgIGZpbHRlcjogeyBzZWxsZXJBZGRyZXNzOiBhY2NvdW50c1swXSB9LCBmcm9tQmxvY2s6IDBcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yLCBldmVudCkge1xuICAgICAgICAgICAgLy9EZWJ1Z2dpbmcgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgICAgICAvLzEuIEZldGNoIHBsYXN0aWMgYmFsZSBhZGRyZXNzZXMgd2hpY2ggYXJlIGNvbnRyYWN0IGFkZHJlc3Nlcy9hdWN0aW9uIGFkZHJlc3NlcyBmcm9tIHBsYXN0aWNCYWxlQ29tcGxldGVkXG4gICAgICAgICAgICBjb25zdCBwbGFzdGljYmFsZUFkZHIgPSBldmVudC5yZXR1cm5WYWx1ZXNbJ3BsYXN0aWNiYWxlJ107XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGFzdGljYmFsZUFkZHIpO1xuICAgICAgICAgICAgLy8yLiBDcmVhdGUgYSBuZXcgaW5zdGFuY2UgXG4gICAgICAgICAgICBjb25zdCBwbGFzdGljQmFsZVNDID0gcGxhc3RpY0JhbGVDb250cmFjdChwbGFzdGljYmFsZUFkZHIpO1xuICAgICAgICAgICAgLy8zLiBDaGVjayBhdWN0aW9uU3RhcnRlZCBldmVudHMgXG5cbiAgICAgICAgICAgIHBsYXN0aWNCYWxlU0MuZXZlbnRzLmF1Y3Rpb25TdGFydGVkKHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHsgYmFsZUFkZHJlc3M6IHBsYXN0aWNiYWxlQWRkciB9LFxuICAgICAgICAgICAgICAgIGZyb21CbG9jazogMFxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yLCBldmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAvLzQuIEV4dHJhY3QgQXVjdGlvbiBkYXRhIGZyb20gZXZlbnRcbiAgICAgICAgICAgICAgICB2YXIgdGltZSA9IG5ldyBEYXRlKGV2ZW50LnJldHVyblZhbHVlc1snY2xvc2luZ1RpbWUnXSAqIDEwMDApO1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gdGltZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBhdWN0aW9uQWRkcjogZXZlbnQucmV0dXJuVmFsdWVzWydiYWxlQWRkcmVzcyddLFxuICAgICAgICAgICAgICAgICAgICBjbG9zaW5nVGltZTogZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRpbmdQcmljZTogZXZlbnQucmV0dXJuVmFsdWVzWydzdGFydGluZ0Ftb3VudCddXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLzUuIFJlbmRlciBjYXJkIG9uIHdlYnBhZ2VcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckF1Y3Rpb25zKCk7XG5cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgICAub24oJ2Vycm9yJywgY29uc29sZS5lcnJvcik7XG5cbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgLm9uKCdlcnJvcicsIGNvbnNvbGUuZXJyb3IpO1xuXG5cbiAgICB9O1xuXG5cbiAgICByZW5kZXJBdWN0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSB7IGhlYWRlcjogdGhpcy5zdGF0ZS5hdWN0aW9uQWRkciwgZGVzY3JpcHRpb246IDxhPkpvaW4gQXVjdGlvbjwvYT4sIGZsdWlkOiB0cnVlLCBtZXRhOiB0aGlzLnN0YXRlLmNsb3NpbmdUaW1lLCBleHRyYTogdGhpcy5zdGF0ZS5zdGFydGluZ1ByaWNlfTtcbiAgICAgICAgICAgIHJldHVybiB7IGNhcmRzOiBbLi4ucHJldlN0YXRlLmNhcmRzLCBpdGVtc10gfTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjEvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPGgxPk9wZW4gQXVjdGlvbnM8L2gxPlxuICAgICAgICAgICAgICAgIDxDYXJkLkdyb3VwPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNhcmRzLm1hcChpdGVtcyA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2F1Y3Rpb25zL3ZpZXdiYWxlcy8ke2l0ZW1zLmhlYWRlcn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5IZWFkZXI+e2l0ZW1zLmhlYWRlcn08L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQubWV0YT57aXRlbXMubWV0YX08L0NhcmQubWV0YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLmRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+Sm9pbiBBdWN0aW9uPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLmRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuZmx1aWQ+e2l0ZW1zLmZsdWlkfTwvQ2FyZC5mbHVpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpIH1cbiAgICAgICAgPC9DYXJkLkdyb3VwPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHZpZXdhdWN0aW9uczsgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auctions/viewauctions.js\n");

/***/ })

})