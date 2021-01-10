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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/recycler.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/*\nThis is the recycler page where a recycler scans the QR codes and view rewards\nContact used here: an instance of tracking.sol \nTo run the app, use the command npm run dev\n*/\n\n\n\nconst QRReader = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-qr-reader */ \"react-qr-reader\", 7)), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! react-qr-reader */ \"react-qr-reader\")],\n    modules: ['react-qr-reader']\n  }\n}); //import web3 from '../ethereum/web3';\n//import trackingContract from '../ethereum/tracking'; // import SC instance\n\nclass recyclerPage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"handleScan\", data => {\n      if (data) {\n        this.setState({\n          result: data\n        });\n      }\n    });\n\n    _defineProperty(this, \"handleError\", err => {\n      console.error(err);\n    });\n\n    _defineProperty(this, \"onScan\", async event => {\n      event.preventDefault();\n      if (this.state.qr === false) this.setState({\n        qr: true\n      });else this.setState({\n        qr: false\n      });\n    });\n\n    this.state = {\n      rewards: 0,\n      bottleStatus: '',\n      result: '',\n      qr: false\n    };\n  }\n\n  renderBottlesTable() {\n    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].Row, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 13\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].Cell, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }\n    }, this.state.result), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].Cell, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }\n    }, \"Completed\"));\n  }\n\n  render() {\n    const {\n      qr\n    } = this.state;\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 13\n      }\n    }, __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }\n    }, \"Welcome to Recycler's Page\"), __jsx(\"link\", {\n      rel: \"stylesheet\",\n      href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }\n    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      header: \"Rewards\",\n      description: this.state.rewards,\n      meta: \"ETH\",\n      centered: \"true\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 17\n      }\n    }), __jsx(\"br\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 17\n      }\n    }), __jsx(\"br\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 17\n      }\n    }), __jsx(\"div\", {\n      className: \"Scanner\",\n      style: {\n        'width': '40%',\n        'margin-left': 'auto',\n        'margin-right': 'auto'\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 17\n      }\n    }, __jsx(\"h2\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 21\n      }\n    }, \"Dispose a Plastic Bottle\", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      className: \"QrReader\",\n      style: {\n        'vertical-align': 'middle'\n      },\n      onClick: this.onScan,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 21\n      }\n    }, \" Scan QR Code\"), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 25\n      }\n    }, \" \", this.state.qr === true && this.state.result === '' ? __jsx(QRReader, {\n      delay: this.state.delay,\n      onError: this.handleError,\n      onScan: this.handleScan,\n      style: {\n        width: \"30%\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 85\n      }\n    }) : '', \" \"))), __jsx(\"br\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }\n    }), __jsx(\"br\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 17\n      }\n    }), __jsx(\"div\", {\n      className: \"BottleTable\",\n      style: {\n        'width': '40%',\n        'margin-left': 'auto',\n        'margin-right': 'auto'\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 17\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"], {\n      unstackable: true,\n      size: \"small\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 21\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].Header, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 25\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].Row, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 29\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].HeaderCell, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 33\n      }\n    }, \"Plasitc Bottle Address\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].HeaderCell, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 33\n      }\n    }, \"Status\"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].Body, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 25\n      }\n    }, this.renderBottlesTable()))));\n  }\n\n} //At the end of each page, a component is expected to be returned \n// If not, Next.js throws an error \n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (recyclerPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWN5Y2xlci5qcz9lN2Q0Il0sIm5hbWVzIjpbIlFSUmVhZGVyIiwiZHluYW1pYyIsInNzciIsInJlY3ljbGVyUGFnZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJkYXRhIiwic2V0U3RhdGUiLCJyZXN1bHQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RhdGUiLCJxciIsInJld2FyZHMiLCJib3R0bGVTdGF0dXMiLCJyZW5kZXJCb3R0bGVzVGFibGUiLCJyZW5kZXIiLCJvblNjYW4iLCJkZWxheSIsImhhbmRsZUVycm9yIiwiaGFuZGxlU2NhbiIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsUUFBUSxHQUFHQyxtREFBTyxDQUFDLE1BQU0sb0hBQVAsRUFBa0M7QUFBRUMsS0FBRyxFQUFFLEtBQVA7QUFBQTtBQUFBLHdDQUFwQix3Q0FBb0I7QUFBQSxjQUFwQixpQkFBb0I7QUFBQTtBQUFBLENBQWxDLENBQXhCLEMsQ0FFQTtBQUNBOztBQUVBLE1BQU1DLFlBQU4sU0FBMkJDLCtDQUEzQixDQUFxQztBQUVqQ0MsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDZixVQUFNQSxLQUFOOztBQURlLHdDQVVOQyxJQUFJLElBQUk7QUFDakIsVUFBSUEsSUFBSixFQUFVO0FBQ04sYUFBS0MsUUFBTCxDQUFjO0FBQUVDLGdCQUFNLEVBQUVGO0FBQVYsU0FBZDtBQUNIO0FBQ0osS0Fka0I7O0FBQUEseUNBZ0JMRyxHQUFHLElBQUk7QUFDakJDLGFBQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0FBQ0gsS0FsQmtCOztBQUFBLG9DQW9CVixNQUFPRyxLQUFQLElBQWlCO0FBQ3RCQSxXQUFLLENBQUNDLGNBQU47QUFDQSxVQUFJLEtBQUtDLEtBQUwsQ0FBV0MsRUFB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LHVCQUFlLE1BQWpDO0FBQXlDLHdCQUFnQjtBQUF6RCxPQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1REFBRDtBQUFPLGlCQUFXLE1BQWxCO0FBQW1CLFVBQUksRUFBQyxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1REFBRCxDQUFPLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsdURBQUQsQ0FBTyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHVEQUFELENBQU8sVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURKLEVBRUksTUFBQyx1REFBRCxDQUFPLFVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixDQURKLENBREosRUFRSSxNQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ssS0FBS04sa0JBQUwsRUFETCxDQVJKLENBREosQ0ExQkosQ0FESjtBQStDSDs7QUE5RmdDLEMsQ0FrR3JDO0FBQ0E7OztBQUNlaEIsMkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9yZWN5Y2xlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UaGlzIGlzIHRoZSByZWN5Y2xlciBwYWdlIHdoZXJlIGEgcmVjeWNsZXIgc2NhbnMgdGhlIFFSIGNvZGVzIGFuZCB2aWV3IHJld2FyZHNcbkNvbnRhY3QgdXNlZCBoZXJlOiBhbiBpbnN0YW5jZSBvZiB0cmFja2luZy5zb2wgXG5UbyBydW4gdGhlIGFwcCwgdXNlIHRoZSBjb21tYW5kIG5wbSBydW4gZGV2XG4qL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBsYXp5LCBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIFRhYmxlLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuY29uc3QgUVJSZWFkZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtcXItcmVhZGVyJyksIHsgc3NyOiBmYWxzZSB9KTtcblxuLy9pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbi8vaW1wb3J0IHRyYWNraW5nQ29udHJhY3QgZnJvbSAnLi4vZXRoZXJldW0vdHJhY2tpbmcnOyAvLyBpbXBvcnQgU0MgaW5zdGFuY2VcblxuY2xhc3MgcmVjeWNsZXJQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJld2FyZHM6IDAsXG4gICAgICAgICAgICBib3R0bGVTdGF0dXM6ICcnLFxuICAgICAgICAgICAgcmVzdWx0OiAnJyxcbiAgICAgICAgICAgIHFyOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGhhbmRsZVNjYW4gPSBkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXN1bHQ6IGRhdGEgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVFcnJvciA9IGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cblxuICAgIG9uU2NhbiA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5xciA9PT0gZmFsc2UpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcXI6IHRydWUgfSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBxcjogZmFsc2UgfSk7XG4gICAgfTtcblxuXG4gICAgcmVuZGVyQm90dGxlc1RhYmxlKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPnt0aGlzLnN0YXRlLnJlc3VsdH08L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+Q29tcGxldGVkPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7IHFyIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8gUmVjeWNsZXIncyBQYWdlPC9oMT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjEvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPENhcmQgaGVhZGVyPSdSZXdhcmRzJyBkZXNjcmlwdGlvbj17dGhpcy5zdGF0ZS5yZXdhcmRzfSBtZXRhPSdFVEgnIGNlbnRlcmVkPSd0cnVlJyAvPlxuXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNjYW5uZXJcIiBzdHlsZT17eyAnd2lkdGgnOiAnNDAlJywgJ21hcmdpbi1sZWZ0JzogJ2F1dG8nLCAnbWFyZ2luLXJpZ2h0JzogJ2F1dG8nIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkRpc3Bvc2UgYSBQbGFzdGljIEJvdHRsZVxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIlFyUmVhZGVyXCIgc3R5bGU9e3sgJ3ZlcnRpY2FsLWFsaWduJzogJ21pZGRsZScgfX0gb25DbGljaz17dGhpcy5vblNjYW59ID4gU2NhbiBRUiBDb2RlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiB7dGhpcy5zdGF0ZS5xciA9PT0gdHJ1ZSAmJiB0aGlzLnN0YXRlLnJlc3VsdCA9PT0gJycgPyA8UVJSZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17dGhpcy5zdGF0ZS5kZWxheX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLmhhbmRsZUVycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2Nhbj17dGhpcy5oYW5kbGVTY2FufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPiA6ICcnfSA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JvdHRsZVRhYmxlJyBzdHlsZT17eyAnd2lkdGgnOiAnNDAlJywgJ21hcmdpbi1sZWZ0JzogJ2F1dG8nLCAnbWFyZ2luLXJpZ2h0JzogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgdW5zdGFja2FibGUgc2l6ZT0nc21hbGwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5QbGFzaXRjIEJvdHRsZSBBZGRyZXNzPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5TdGF0dXM8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQm90dGxlc1RhYmxlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLkJvZHk+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG4vL0F0IHRoZSBlbmQgb2YgZWFjaCBwYWdlLCBhIGNvbXBvbmVudCBpcyBleHBlY3RlZCB0byBiZSByZXR1cm5lZCBcbi8vIElmIG5vdCwgTmV4dC5qcyB0aHJvd3MgYW4gZXJyb3IgXG5leHBvcnQgZGVmYXVsdCByZWN5Y2xlclBhZ2U7ICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/recycler.js\n");

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