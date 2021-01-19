webpackHotUpdate_N_E("pages/auctions/viewauctions",{

/***/ "./pages/auctions/viewauctions.js":
/*!****************************************!*\
  !*** ./pages/auctions/viewauctions.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_tracking__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ethereum/tracking */ \"./ethereum/tracking.js\");\n/* harmony import */ var _ethereum_plasticBale__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ethereum/plasticBale */ \"./ethereum/plasticBale.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/auctions/viewauctions.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar viewauctions = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(viewauctions, _Component);\n\n  var _super = _createSuper(viewauctions);\n\n  function viewauctions(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, viewauctions);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this), \"componentDidMount\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var accounts;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__[\"default\"].eth.getAccounts();\n\n            case 2:\n              accounts = _context.sent;\n              //NOTE: Set the account back to account[0] - seller address is account 2\n              _ethereum_tracking__WEBPACK_IMPORTED_MODULE_13__[\"default\"].events.plasticBaleCompleted({\n                filter: {\n                  sellerAddress: accounts[0]\n                },\n                fromBlock: 0\n              }, function (error, event) {\n                //Debugging \n                console.log(event); //1. Fetch plastic bale addresses which are contract addresses/auction addresses from plasticBaleCompleted\n\n                var plasticbaleAddr = event.returnValues['plasticbale'];\n                console.log(plasticbaleAddr); //2. Create a new instance \n\n                var plasticBaleSC = Object(_ethereum_plasticBale__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(plasticbaleAddr); //3. Check auctionStarted events \n\n                plasticBaleSC.events.auctionStarted({\n                  filter: {\n                    baleAddress: plasticbaleAddr\n                  },\n                  fromBlock: 0\n                }, function (error, event) {\n                  console.log(event); //4. Extract Auction data from event\n\n                  var time = new Date(event.returnValues['closingTime'] * 1000);\n                  var date = time.toString();\n                  this.setState({\n                    auctionAddr: event.returnValues['baleAddress'],\n                    closingTime: date,\n                    startingPrice: event.returnValues['startingAmount']\n                  }); //5. Render card on webpage\n\n                  this.renderAuctions();\n                }.bind(this)).on('error', console.error);\n              }.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this))).on('error', console.error);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n\n    _this.state = {\n      cards: [],\n      closingTime: '',\n      startingPrice: '',\n      auctionAddr: ''\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(viewauctions, [{\n    key: \"renderAuctions\",\n    value: function renderAuctions() {\n      var _this2 = this;\n\n      this.setState(function (prevState) {\n        var items = {\n          header: _this2.state.auctionAddr,\n          description: __jsx(\"a\", {\n            __self: _this2,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 74\n            }\n          }, \"Join Auction\"),\n          fluid: true,\n          meta: _this2.state.closingTime\n        };\n        return {\n          cards: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prevState.cards), [items])\n        };\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 13\n        }\n      }, __jsx(\"link\", {\n        rel: \"stylesheet\",\n        href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 17\n        }\n      }), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 17\n        }\n      }, \"Open Auctions\"), this.state.cards.map(function (items) {\n        return __jsx(_routes__WEBPACK_IMPORTED_MODULE_15__[\"Link\"], {\n          route: \"/auctions/viewbales/\".concat(items.header),\n          __self: _this3,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 21\n          }\n        }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__[\"Card\"], {\n          header: items.header,\n          meta: items.meta,\n          description: items.description,\n          fluid: items.fluid,\n          __self: _this3,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 25\n          }\n        }));\n      }));\n    }\n  }]);\n\n  return viewauctions;\n}(react__WEBPACK_IMPORTED_MODULE_10__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (viewauctions);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXVjdGlvbnMvdmlld2F1Y3Rpb25zLmpzP2MxMjIiXSwibmFtZXMiOlsidmlld2F1Y3Rpb25zIiwicHJvcHMiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInRyYWNraW5nQ29udHJhY3QiLCJldmVudHMiLCJwbGFzdGljQmFsZUNvbXBsZXRlZCIsImZpbHRlciIsInNlbGxlckFkZHJlc3MiLCJmcm9tQmxvY2siLCJlcnJvciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInBsYXN0aWNiYWxlQWRkciIsInJldHVyblZhbHVlcyIsInBsYXN0aWNCYWxlU0MiLCJwbGFzdGljQmFsZUNvbnRyYWN0IiwiYXVjdGlvblN0YXJ0ZWQiLCJiYWxlQWRkcmVzcyIsInRpbWUiLCJEYXRlIiwiZGF0ZSIsInRvU3RyaW5nIiwic2V0U3RhdGUiLCJhdWN0aW9uQWRkciIsImNsb3NpbmdUaW1lIiwic3RhcnRpbmdQcmljZSIsInJlbmRlckF1Y3Rpb25zIiwiYmluZCIsIm9uIiwic3RhdGUiLCJjYXJkcyIsInByZXZTdGF0ZSIsIml0ZW1zIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsIm1ldGEiLCJtYXAiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFk7Ozs7O0FBRUYsd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSwwWkFZQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdPQyx1REFBSSxDQUFDQyxHQUFMLENBQVNDLFdBQVQsRUFIUDs7QUFBQTtBQUdWQyxzQkFIVTtBQUloQjtBQUNBQyx5RUFBZ0IsQ0FBQ0MsTUFBakIsQ0FBd0JDLG9CQUF4QixDQUE2QztBQUN6Q0Msc0JBQU0sRUFBRTtB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LGVBQUssZ0NBQXlCQSxLQUFLLENBQUNDLE1BQS9CLENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNJLE1BQUMsdURBQUQ7QUFBTSxnQkFBTSxFQUFFRCxLQUFLLENBQUNDLE1BQXBCO0FBQ0ksY0FBSSxFQUFFRCxLQUFLLENBQUNJLElBRGhCO0FBRUkscUJBQVcsRUFBRUosS0FBSyxDQUFDRSxXQUZ2QjtBQUdJLGVBQUssRUFBRUYsS0FBSyxDQUFDRyxLQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREosQ0FEdUI7QUFBQSxPQUExQixDQU5MLENBREo7QUFrQkg7Ozs7RUF6RnNCRyxnRDs7QUE2RloxQywyRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2F1Y3Rpb25zL3ZpZXdhdWN0aW9ucy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgdHJhY2tpbmdDb250cmFjdCBmcm9tICcuLi8uLi9ldGhlcmV1bS90cmFja2luZyc7IFxuaW1wb3J0IHBsYXN0aWNCYWxlQ29udHJhY3QgZnJvbSAnLi4vLi4vZXRoZXJldW0vcGxhc3RpY0JhbGUnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5cbmNsYXNzIHZpZXdhdWN0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjYXJkczogW10sXG4gICAgICAgICAgICBjbG9zaW5nVGltZTonJyxcbiAgICAgICAgICAgIHN0YXJ0aW5nUHJpY2U6JycsXG4gICAgICAgICAgICBhdWN0aW9uQWRkcjonJ1xuXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgLy9OT1RFOiBTZXQgdGhlIGFjY291bnQgYmFjayB0byBhY2NvdW50WzBdIC0gc2VsbGVyIGFkZHJlc3MgaXMgYWNjb3VudCAyXG4gICAgICAgIHRyYWNraW5nQ29udHJhY3QuZXZlbnRzLnBsYXN0aWNCYWxlQ29tcGxldGVkKHtcbiAgICAgICAgICAgIGZpbHRlcjogeyBzZWxsZXJBZGRyZXNzOiBhY2NvdW50c1swXSB9LCBmcm9tQmxvY2s6IDBcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yLCBldmVudCkge1xuICAgICAgICAgICAgLy9EZWJ1Z2dpbmcgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7IFxuICAgICAgICAgICAgLy8xLiBGZXRjaCBwbGFzdGljIGJhbGUgYWRkcmVzc2VzIHdoaWNoIGFyZSBjb250cmFjdCBhZGRyZXNzZXMvYXVjdGlvbiBhZGRyZXNzZXMgZnJvbSBwbGFzdGljQmFsZUNvbXBsZXRlZFxuICAgICAgICAgICAgY29uc3QgcGxhc3RpY2JhbGVBZGRyID0gZXZlbnQucmV0dXJuVmFsdWVzWydwbGFzdGljYmFsZSddOyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXN0aWNiYWxlQWRkcik7XG4gICAgICAgICAgICAvLzIuIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBcbiAgICAgICAgICAgIGNvbnN0IHBsYXN0aWNCYWxlU0MgPSBwbGFzdGljQmFsZUNvbnRyYWN0KHBsYXN0aWNiYWxlQWRkcik7IFxuICAgICAgICAgICAgLy8zLiBDaGVjayBhdWN0aW9uU3RhcnRlZCBldmVudHMgXG5cbiAgICAgICAgICAgIHBsYXN0aWNCYWxlU0MuZXZlbnRzLmF1Y3Rpb25TdGFydGVkKHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHtiYWxlQWRkcmVzczogcGxhc3RpY2JhbGVBZGRyfSxcbiAgICAgICAgICAgICAgICBmcm9tQmxvY2s6IDAgfSwgZnVuY3Rpb24gKGVycm9yLCBldmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAvLzQuIEV4dHJhY3QgQXVjdGlvbiBkYXRhIGZyb20gZXZlbnRcbiAgICAgICAgICAgICAgICB2YXIgdGltZSA9IG5ldyBEYXRlKGV2ZW50LnJldHVyblZhbHVlc1snY2xvc2luZ1RpbWUnXSAqIDEwMDApO1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gdGltZS50b1N0cmluZygpOyBcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYXVjdGlvbkFkZHI6IGV2ZW50LnJldHVyblZhbHVlc1snYmFsZUFkZHJlc3MnXSxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2luZ1RpbWU6IGRhdGUsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0aW5nUHJpY2U6IGV2ZW50LnJldHVyblZhbHVlc1snc3RhcnRpbmdBbW91bnQnXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vNS4gUmVuZGVyIGNhcmQgb24gd2VicGFnZVxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQXVjdGlvbnMoKTsgXG5cbiAgICAgICAgfS5iaW5kKHRoaXMpKVxuICAgICAgICAub24oJ2Vycm9yJywgY29uc29sZS5lcnJvcik7XG5cblxuICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgICAgICAub24oJ2Vycm9yJywgY29uc29sZS5lcnJvcik7XG5cbiAgICAgICAgXG4gICAgfTtcblxuXG4gICAgcmVuZGVyQXVjdGlvbnMoKSB7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IHsgaGVhZGVyOiB0aGlzLnN0YXRlLmF1Y3Rpb25BZGRyLCBkZXNjcmlwdGlvbjogPGE+Sm9pbiBBdWN0aW9uPC9hPiwgZmx1aWQ6IHRydWUsIG1ldGE6IHRoaXMuc3RhdGUuY2xvc2luZ1RpbWUgfTtcbiAgICAgICAgICAgIHJldHVybiB7IGNhcmRzOiBbLi4ucHJldlN0YXRlLmNhcmRzLCBpdGVtc10gfTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMS9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8aDE+T3BlbiBBdWN0aW9uczwvaDE+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY2FyZHMubWFwKGl0ZW1zID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvYXVjdGlvbnMvdmlld2JhbGVzLyR7aXRlbXMuaGVhZGVyfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgaGVhZGVyPXtpdGVtcy5oZWFkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YT17aXRlbXMubWV0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbXMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWQ9e2l0ZW1zLmZsdWlkfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgdmlld2F1Y3Rpb25zOyAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auctions/viewauctions.js\n");

/***/ })

})