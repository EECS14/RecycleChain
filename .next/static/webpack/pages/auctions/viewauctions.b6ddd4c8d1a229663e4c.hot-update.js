webpackHotUpdate_N_E("pages/auctions/viewauctions",{

/***/ "./pages/auctions/viewauctions.js":
/*!****************************************!*\
  !*** ./pages/auctions/viewauctions.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_tracking__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ethereum/tracking */ \"./ethereum/tracking.js\");\n/* harmony import */ var _ethereum_plasticBale__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ethereum/plasticBale */ \"./ethereum/plasticBale.js\");\n\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/auctions/viewauctions.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\nvar viewauctions = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(viewauctions, _Component);\n\n  var _super = _createSuper(viewauctions);\n\n  function viewauctions(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, viewauctions);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this), \"componentDidMount\", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var accounts;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__[\"default\"].eth.getAccounts();\n\n            case 2:\n              accounts = _context.sent;\n              //NOTE: Set the account back to account[0] - seller address is account 2\n              _ethereum_tracking__WEBPACK_IMPORTED_MODULE_13__[\"default\"].events.plasticBaleCompleted({\n                filter: {\n                  sellerAddress: accounts[0]\n                },\n                fromBlock: 0\n              }, function (error, event) {\n                //Debugging \n                console.log(event); //1. Fetch plastic bale addresses which are contract addresses/auction addresses from plasticBaleCompleted\n\n                var plasticbaleAddr = event.returnValues['plasticbale'];\n                console.log(plasticbaleAddr); //2. Create a new instance \n\n                var plasticBaleSC = Object(_ethereum_plasticBale__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(plasticbaleAddr); //3. Check auctionStarted events \n\n                plasticBaleSC.events.auctionStarted({\n                  filter: {\n                    baleAddress: plasticbaleAddr\n                  },\n                  fromBlock: 0\n                }, function (error, event) {\n                  console.log(event); //4. Extract Auction data from event\n\n                  this.setState({\n                    plasticBaleAddr: event.returnValues['plasticbale'],\n                    productionTime: date\n                  }); //5. Render card on webpage\n                }.bind(this)).on('error', console.error);\n              }.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_this))).on('error', console.error);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n\n    _this.state = {\n      cards: [],\n      closingTime: '',\n      startingPrice: '',\n      auctionAddr: ''\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(viewauctions, [{\n    key: \"renderAuctions\",\n    value: function renderAuctions() {\n      var _this2 = this;\n\n      this.setState(function (prevState) {\n        var items = {\n          header: _this2.state.plasticBaleAddr,\n          description: __jsx(\"a\", {\n            __self: _this2,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 78\n            }\n          }, \"Join Auction\"),\n          fluid: true,\n          meta: _this2.state.productionTime\n        };\n        return {\n          cards: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(prevState.cards), [items])\n        };\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }\n      }, __jsx(\"link\", {\n        rel: \"stylesheet\",\n        href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 17\n        }\n      }), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 17\n        }\n      }, \"Open Auctions\"), __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 17\n        }\n      }));\n    }\n  }]);\n\n  return viewauctions;\n}(react__WEBPACK_IMPORTED_MODULE_10__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (viewauctions);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXVjdGlvbnMvdmlld2F1Y3Rpb25zLmpzP2MxMjIiXSwibmFtZXMiOlsidmlld2F1Y3Rpb25zIiwicHJvcHMiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInRyYWNraW5nQ29udHJhY3QiLCJldmVudHMiLCJwbGFzdGljQmFsZUNvbXBsZXRlZCIsImZpbHRlciIsInNlbGxlckFkZHJlc3MiLCJmcm9tQmxvY2siLCJlcnJvciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInBsYXN0aWNiYWxlQWRkciIsInJldHVyblZhbHVlcyIsInBsYXN0aWNCYWxlU0MiLCJwbGFzdGljQmFsZUNvbnRyYWN0IiwiYXVjdGlvblN0YXJ0ZWQiLCJiYWxlQWRkcmVzcyIsInNldFN0YXRlIiwicGxhc3RpY0JhbGVBZGRyIiwicHJvZHVjdGlvblRpbWUiLCJkYXRlIiwiYmluZCIsIm9uIiwic3RhdGUiLCJjYXJkcyIsImNsb3NpbmdUaW1lIiwic3RhcnRpbmdQcmljZSIsImF1Y3Rpb25BZGRyIiwicHJldlN0YXRlIiwiaXRlbXMiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwibWV0YSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxZOzs7OztBQUVGLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsMFpBWUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFHT0MsdURBQUksQ0FBQ0MsR0FBTCxDQUFTQyxXQUFULEVBSFA7O0FBQUE7QUFHVkMsc0JBSFU7QUFJaEI7QUFDQUMseUVBQWdCLENBQUNDLE1BQWpCLENBQXdCQyxvQkFBeEIsQ0FBNkM7QUFDekNDLHNCQUFNLEVBQUU7QUFBRUMsK0JBQWEsRUFBRUwsUUFBUSxDQUFDLENBQUQ7QUFBekIsaUJBRGlDO0FBQ0RNLHlCQUFTLEVBQUU7QUFEVixlQUE3QyxFQUVHLFVBQVVDLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXdCO0FBQ3ZCO0FBQ0FDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixFQUZ1QixDQUd2Qjs7QUFDQSxvQkFBTUcsZUFBZSxHQUFHSCxLQUFLLENBQUNJLFlBQU4sQ0FBbUIsYUFBbkIsQ0FBeEI7QUFDQUgsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZQyxlQUFaLEVBTHVCLENBTXZCOztBQUNBLG9CQUFNRSxhQUFhLEdBQUdDLHNFQUFtQixDQUFDSCxlQUFELENBQXpDLENBUHVCLENBUXZCOztBQUVBRSw2QkFBYSxDQUFDWCxNQUFkLENBQXFCYSxjQUFyQixDQUFvQztBQUNoQ1gsd0JBQU0sRUFBRTtBQUFDWSwrQkFBVyxFQUFFTDtBQUFkLG1CQUR3QjtBQUVoQ0wsMkJBQVMsRUFBRTtBQUZxQixpQkFBcEMsRUFFb0IsVUFBVUMsS0FBVixFQUFpQkMsS0FBakIsRUFBd0I7QUFDeENDLHlCQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixFQUR3QyxDQUV4Qzs7QUFDQSx1QkFBS1MsUUFBTCxDQUFjO0FBQ1ZDLG1DQUFlLEVBQUVWLEtBQUssQ0FBQ0ksWUFBTixDQUFtQixhQUFuQixDQURQO0FBRVZPLGtDQUFjLEVBQUVDO0FBRk4sbUJBQWQsRUFId0MsQ0FTeEM7QUFFUCxpQkFYdUIsQ0FXdEJDLElBWHNCLENBV2pCLElBWGlCLENBRnBCLEVBY0hDLEVBZEcsQ0FjQSxPQWRBLEVBY1NiLE9BQU8sQ0FBQ0YsS0FkakI7QUFpQkgsZUEzQkUsQ0EyQkRjLElBM0JDLHlHQUZILEVBOEJLQyxFQTlCTCxDQThCUSxPQTlCUixFQThCaUJiLE9BQU8sQ0FBQ0YsS0E5QnpCOztBQUxnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVpEOztBQUVmLFVBQUtnQixLQUFMLEdBQWE7QUFDVEMsV0FBSyxFQUFFLEVBREU7QUFFVEMsaUJBQVcsRUFBQyxFQUZIO0FBR1RDLG1CQUFhLEVBQUMsRUFITDtBQUlUQyxpQkFBVyxFQUFDO0FBSkgsS0FBYjtBQUZlO0FBU2xCOzs7O3FDQTRDZ0I7QUFBQTs7QUFFYixXQUFLVixRQUFMLENBQWMsVUFBQ1csU0FBRCxFQUFlO0FBQ3pCLFlBQU1DLEtBQUssR0FBRztBQUFFQyxnQkFBTSxFQUFFLE1BQUksQ0FBQ1AsS0FBTCxDQUFXTCxlQUFyQjtBQUFzQ2EscUJBQVcsRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFuRDtBQUF3RUMsZUFBSyxFQUFFLElBQS9FO0FBQXFGQyxjQUFJLEVBQUUsTUFBSSxDQUFDVixLQUFMLENBQVdKO0FBQXRHLFNBQWQ7QUFDQSxlQUFPO0FBQUVLLGVBQUsseUdBQU1JLFNBQVMsQ0FBQ0osS0FBaEIsSUFBdUJLLEtBQXZCO0FBQVAsU0FBUDtBQUNILE9BSEQ7QUFLSDs7OzZCQUlRO0FBRUwsYUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUNJLFlBQUksRUFBQyxnRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxKLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU5KLENBREo7QUFXSDs7OztFQS9Fc0JLLGdEOztBQW1GWnZDLDJFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXVjdGlvbnMvdmlld2F1Y3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCB0cmFja2luZ0NvbnRyYWN0IGZyb20gJy4uLy4uL2V0aGVyZXVtL3RyYWNraW5nJzsgXG5pbXBvcnQgcGxhc3RpY0JhbGVDb250cmFjdCBmcm9tICcuLi8uLi9ldGhlcmV1bS9wbGFzdGljQmFsZSc7XG5cbmNsYXNzIHZpZXdhdWN0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjYXJkczogW10sXG4gICAgICAgICAgICBjbG9zaW5nVGltZTonJyxcbiAgICAgICAgICAgIHN0YXJ0aW5nUHJpY2U6JycsXG4gICAgICAgICAgICBhdWN0aW9uQWRkcjonJ1xuXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgLy9OT1RFOiBTZXQgdGhlIGFjY291bnQgYmFjayB0byBhY2NvdW50WzBdIC0gc2VsbGVyIGFkZHJlc3MgaXMgYWNjb3VudCAyXG4gICAgICAgIHRyYWNraW5nQ29udHJhY3QuZXZlbnRzLnBsYXN0aWNCYWxlQ29tcGxldGVkKHtcbiAgICAgICAgICAgIGZpbHRlcjogeyBzZWxsZXJBZGRyZXNzOiBhY2NvdW50c1swXSB9LCBmcm9tQmxvY2s6IDBcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yLCBldmVudCkge1xuICAgICAgICAgICAgLy9EZWJ1Z2dpbmcgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7IFxuICAgICAgICAgICAgLy8xLiBGZXRjaCBwbGFzdGljIGJhbGUgYWRkcmVzc2VzIHdoaWNoIGFyZSBjb250cmFjdCBhZGRyZXNzZXMvYXVjdGlvbiBhZGRyZXNzZXMgZnJvbSBwbGFzdGljQmFsZUNvbXBsZXRlZFxuICAgICAgICAgICAgY29uc3QgcGxhc3RpY2JhbGVBZGRyID0gZXZlbnQucmV0dXJuVmFsdWVzWydwbGFzdGljYmFsZSddOyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXN0aWNiYWxlQWRkcik7XG4gICAgICAgICAgICAvLzIuIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBcbiAgICAgICAgICAgIGNvbnN0IHBsYXN0aWNCYWxlU0MgPSBwbGFzdGljQmFsZUNvbnRyYWN0KHBsYXN0aWNiYWxlQWRkcik7IFxuICAgICAgICAgICAgLy8zLiBDaGVjayBhdWN0aW9uU3RhcnRlZCBldmVudHMgXG5cbiAgICAgICAgICAgIHBsYXN0aWNCYWxlU0MuZXZlbnRzLmF1Y3Rpb25TdGFydGVkKHtcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHtiYWxlQWRkcmVzczogcGxhc3RpY2JhbGVBZGRyfSxcbiAgICAgICAgICAgICAgICBmcm9tQmxvY2s6IDAgfSwgZnVuY3Rpb24gKGVycm9yLCBldmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAvLzQuIEV4dHJhY3QgQXVjdGlvbiBkYXRhIGZyb20gZXZlbnRcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcGxhc3RpY0JhbGVBZGRyOiBldmVudC5yZXR1cm5WYWx1ZXNbJ3BsYXN0aWNiYWxlJ10sXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Rpb25UaW1lOiBkYXRlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAvLzUuIFJlbmRlciBjYXJkIG9uIHdlYnBhZ2VcblxuICAgICAgICB9LmJpbmQodGhpcykpXG4gICAgICAgIC5vbignZXJyb3InLCBjb25zb2xlLmVycm9yKTtcblxuXG4gICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICAgICAgICAgIC5vbignZXJyb3InLCBjb25zb2xlLmVycm9yKTtcblxuICAgICAgICBcbiAgICB9O1xuXG5cbiAgICByZW5kZXJBdWN0aW9ucygpIHtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0geyBoZWFkZXI6IHRoaXMuc3RhdGUucGxhc3RpY0JhbGVBZGRyLCBkZXNjcmlwdGlvbjogPGE+Sm9pbiBBdWN0aW9uPC9hPiwgZmx1aWQ6IHRydWUsIG1ldGE6IHRoaXMuc3RhdGUucHJvZHVjdGlvblRpbWUgfTtcbiAgICAgICAgICAgIHJldHVybiB7IGNhcmRzOiBbLi4ucHJldlN0YXRlLmNhcmRzLCBpdGVtc10gfTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cblxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMS9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8aDE+T3BlbiBBdWN0aW9uczwvaDE+XG4gICAgICAgICAgICAgICAgPGgyPjwvaDI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgdmlld2F1Y3Rpb25zOyAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auctions/viewauctions.js\n");

/***/ })

})