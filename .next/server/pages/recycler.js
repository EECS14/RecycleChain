module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/recycler": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/recycler.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/recycler.js":
/*!***************************!*\
  !*** ./pages/recycler.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/recycler.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/*\nThis is the recycler page where a recycler scans the QR codes and view rewards\nContact used here: an instance of tracking.sol \nTo run the app, use the command npm run dev\n*/\n\n\n\nconst QRReader = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-qr-reader */ \"react-qr-reader\", 7)), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! react-qr-reader */ \"react-qr-reader\")],\n    modules: ['react-qr-reader']\n  }\n}); //import web3 from '../ethereum/web3';\n//import trackingContract from '../ethereum/tracking'; // import SC instance\n\nclass recyclerPage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"handleScan\", data => {\n      if (data) {\n        this.setState({\n          result: data\n        });\n        this.addBottle();\n      }\n    });\n\n    _defineProperty(this, \"handleError\", err => {\n      console.error(err);\n    });\n\n    _defineProperty(this, \"onScan\", async event => {\n      event.preventDefault();\n\n      if (this.state.qr === false) {\n        this.setState({\n          qr: true\n        });\n      } else {\n        this.setState({\n          qr: false\n        });\n      }\n    });\n\n    _defineProperty(this, \"addBottle\", () => {\n      this.setState((prevState, props) => {\n        const bottle = {\n          addr: this.state.result,\n          status: \"\"\n        };\n        return {\n          rows: [...prevState.rows, bottle]\n        };\n      });\n    });\n\n    this.state = {\n      rewards: 0,\n      result: '',\n      qr: false,\n      rows: []\n    };\n  }\n\n  render() {\n    const {\n      qr,\n      rows\n    } = this.state;\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 13\n      }\n    }, __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }\n    }, \"Welcome to Recycler's Page\"), __jsx(\"link\", {\n      rel: \"stylesheet\",\n      href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }\n    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      header: \"Rewards\",\n      description: this.state.rewards,\n      meta: \"ETH\",\n      centered: \"true\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 17\n      }\n    }), __jsx(\"br\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }\n    }), __jsx(\"br\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }\n    }), __jsx(\"div\", {\n      className: \"Scanner\",\n      style: {\n        'width': '40%',\n        'margin-left': 'auto',\n        'margin-right': 'auto'\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 17\n      }\n    }, __jsx(\"h2\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 21\n      }\n    }, \"Dispose a Plastic Bottle\", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      className: \"QrReader\",\n      style: {\n        'vertical-align': 'middle'\n      },\n      onClick: this.onScan,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 21\n      }\n    }, \" Scan QR Code\"), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 25\n      }\n    }, \" \", this.state.qr === true ? __jsx(QRReader, {\n      delay: 300,\n      onError: this.handleError,\n      onScan: this.handleScan,\n      style: {\n        width: \"70%\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 58\n      }\n    }) : '', \" \"))), __jsx(\"br\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }\n    }), __jsx(\"div\", {\n      className: \"BottleTable\",\n      style: {\n        'width': '40%',\n        'margin-left': 'auto',\n        'margin-right': 'auto'\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 17\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"], {\n      unstackable: true,\n      size: \"small\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 21\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].Header, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 25\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].Row, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 29\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].HeaderCell, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 33\n      }\n    }, \"Plasitc Bottle Address\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].HeaderCell, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 33\n      }\n    }, \"Status\"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].Body, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 25\n      }\n    }, this.state.rows.map(bottle => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].Row, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 33\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].Cell, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 33\n      }\n    }, bottle.addr), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].Cell, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 33\n      }\n    }, bottle.status)))))));\n  }\n\n} //At the end of each page, a component is expected to be returned \n// If not, Next.js throws an error \n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (recyclerPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWN5Y2xlci5qcz9lN2Q0Il0sIm5hbWVzIjpbIlFSUmVhZGVyIiwiZHluYW1pYyIsInNzciIsInJlY3ljbGVyUGFnZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJkYXRhIiwic2V0U3RhdGUiLCJyZXN1bHQiLCJhZGRCb3R0bGUiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RhdGUiLCJxciIsInByZXZTdGF0ZSIsImJvdHRsZSIsImFkZHIiLCJzdGF0dXMiLCJyb3dzIiwicmV3YXJkcyIsInJlbmRlciIsIm9uU2NhbiIsImhhbmRsZUVycm9yIiwiaGFuZGxlU2NhbiIsIndpZHRoIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsUUFBUSxHQUFHQyxtREFBTyxDQUFDLE1BQU0sb0hBQVAsRUFBa0M7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBLHdDQUFwQix3Q0FBb0I7QUFBQSxjQUFwQixpQkFBb0I7QUFBQTtBQUFBLENBQWxDLENBQXhCLEMsQ0FFQTtBQUNBOztBQUVBLE1BQU1DLFlBQU4sU0FBMkJDLCtDQUEzQixDQUFxQztBQUVqQ0MsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDZixVQUFNQSxLQUFOOztBQURlLHdDQVVOQyxJQUFJLElBQUk7QUFDakIsVUFBSUEsSUFBSixFQUFVO0FBQ04sYUFBS0MsUUFBTCxDQUFjO0FBQUVDLGdCQUFNLEVBQUVGO0FBQVYsU0FBZDtBQUNBLGFBQUtHLFNBQUw7QUFDSDtBQUNKLEtBZmtCOztBQUFBLHlDQWlCTEMsR0FBRyxJQUFJO0FBQ2pCQyxhQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZDtBQUNILEtBbkJrQjs7QUFBQSxvQ0FxQlYsTUFBT0csS0FBUCxJQUFpQjtBQUN0QkEsV0FBSyxDQUFDQyxj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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHVEQUFEO0FBQU8saUJBQVcsTUFBbEI7QUFBbUIsVUFBSSxFQUFDLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHVEQUFELENBQU8sTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1REFBRCxDQUFPLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsdURBQUQsQ0FBTyxVQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREosRUFFSSxNQUFDLHVEQUFELENBQU8sVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLENBREosQ0FESixFQVFJLE1BQUMsdURBQUQsQ0FBTyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSyxLQUFLWixLQUFMLENBQVdNLElBQVgsQ0FBZ0JPLEdBQWhCLENBQW9CVixNQUFNLElBQ3ZCLE1BQUMsdURBQUQsQ0FBTyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQSxNQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWFBLE1BQU0sQ0FBQ0MsSUFBcEIsQ0FEQSxFQUVBLE1BQUMsdURBQUQsQ0FBTyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBYUQsTUFBTSxDQUFDRSxNQUFwQixDQUZBLENBREgsQ0FETCxDQVJKLENBREosQ0EzQkosQ0FESjtBQXFESDs7QUFsR2dDLEMsQ0FzR3JDO0FBQ0E7OztBQUNlbEIsMkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9yZWN5Y2xlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UaGlzIGlzIHRoZSByZWN5Y2xlciBwYWdlIHdoZXJlIGEgcmVjeWNsZXIgc2NhbnMgdGhlIFFSIGNvZGVzIGFuZCB2aWV3IHJld2FyZHNcbkNvbnRhY3QgdXNlZCBoZXJlOiBhbiBpbnN0YW5jZSBvZiB0cmFja2luZy5zb2wgXG5UbyBydW4gdGhlIGFwcCwgdXNlIHRoZSBjb21tYW5kIG5wbSBydW4gZGV2XG4qL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBsYXp5LCBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIFRhYmxlLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuY29uc3QgUVJSZWFkZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtcXItcmVhZGVyJyksIHsgc3NyOiBmYWxzZSB9KTtcblxuLy9pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbi8vaW1wb3J0IHRyYWNraW5nQ29udHJhY3QgZnJvbSAnLi4vZXRoZXJldW0vdHJhY2tpbmcnOyAvLyBpbXBvcnQgU0MgaW5zdGFuY2VcblxuY2xhc3MgcmVjeWNsZXJQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJld2FyZHM6IDAsXG4gICAgICAgICAgICByZXN1bHQ6ICcnLFxuICAgICAgICAgICAgcXI6IGZhbHNlLFxuICAgICAgICAgICAgcm93czogW11cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBoYW5kbGVTY2FuID0gZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVzdWx0OiBkYXRhIH0pO1xuICAgICAgICAgICAgdGhpcy5hZGRCb3R0bGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUVycm9yID0gZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuXG4gICAgb25TY2FuID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnFyID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHFyOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHFyOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhZGRCb3R0bGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSwgcHJvcHMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRsZSA9IHsgYWRkcjogdGhpcy5zdGF0ZS5yZXN1bHQsIHN0YXR1czogXCJcIiB9O1xuICAgICAgICAgICAgcmV0dXJuIHsgcm93czogWy4uLnByZXZTdGF0ZS5yb3dzLCBib3R0bGVdIH07XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHsgcXIsIHJvd3MgfSA9IHRoaXMuc3RhdGVcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+V2VsY29tZSB0byBSZWN5Y2xlcidzIFBhZ2U8L2gxPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMS9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8Q2FyZCBoZWFkZXI9J1Jld2FyZHMnIGRlc2NyaXB0aW9uPXt0aGlzLnN0YXRlLnJld2FyZHN9IG1ldGE9J0VUSCcgY2VudGVyZWQ9J3RydWUnIC8+XG5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2Nhbm5lclwiIHN0eWxlPXt7ICd3aWR0aCc6ICc0MCUnLCAnbWFyZ2luLWxlZnQnOiAnYXV0bycsICdtYXJnaW4tcmlnaHQnOiAnYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5EaXNwb3NlIGEgUGxhc3RpYyBCb3R0bGVcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJRclJlYWRlclwiIHN0eWxlPXt7ICd2ZXJ0aWNhbC1hbGlnbic6ICdtaWRkbGUnIH19IG9uQ2xpY2s9e3RoaXMub25TY2FufSA+IFNjYW4gUVIgQ29kZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ge3RoaXMuc3RhdGUucXIgPT09IHRydWUgPyAoPFFSUmVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezMwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLmhhbmRsZUVycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2Nhbj17dGhpcy5oYW5kbGVTY2FufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjcwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQm90dGxlVGFibGUnIHN0eWxlPXt7ICd3aWR0aCc6ICc0MCUnLCAnbWFyZ2luLWxlZnQnOiAnYXV0bycsICdtYXJnaW4tcmlnaHQnOiAnYXV0bycgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZSB1bnN0YWNrYWJsZSBzaXplPSdzbWFsbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPlBsYXNpdGMgQm90dGxlIEFkZHJlc3M8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXJDZWxsPlN0YXR1czwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yb3dzLm1hcChib3R0bGUgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuUm93ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+e2JvdHRsZS5hZGRyfTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+e2JvdHRsZS5zdGF0dXN9PC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGUuQm9keT5cblxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbi8vQXQgdGhlIGVuZCBvZiBlYWNoIHBhZ2UsIGEgY29tcG9uZW50IGlzIGV4cGVjdGVkIHRvIGJlIHJldHVybmVkIFxuLy8gSWYgbm90LCBOZXh0LmpzIHRocm93cyBhbiBlcnJvciBcbmV4cG9ydCBkZWZhdWx0IHJlY3ljbGVyUGFnZTsgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/recycler.js\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-qr-reader":
/*!**********************************!*\
  !*** external "react-qr-reader" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-qr-reader\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1xci1yZWFkZXJcIj8xYmZkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LXFyLXJlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXFyLXJlYWRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-qr-reader\n");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"semantic-ui-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiPzVjODIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2VtYW50aWMtdWktcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///semantic-ui-react\n");

/***/ })

/******/ });