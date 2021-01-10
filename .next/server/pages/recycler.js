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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/recycler.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/*\nThis is the recycler page where a recycler scans the QR codes and view rewards\nContact used here: an instance of tracking.sol \nTo run the app, use the command npm run dev\n*/\n\n\n\nconst QRReader = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-qr-reader */ \"react-qr-reader\", 7)), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! react-qr-reader */ \"react-qr-reader\")],\n    modules: ['react-qr-reader']\n  }\n}); //import web3 from '../ethereum/web3';\n//import trackingContract from '../ethereum/tracking'; // import SC instance\n\nclass recyclerPage extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"handleScan\", data => {\n      if (data) {\n        this.setState({\n          result: data\n        });\n      }\n    });\n\n    _defineProperty(this, \"handleError\", err => {\n      console.error(err);\n    });\n\n    _defineProperty(this, \"onScan\", async event => {\n      event.preventDefault();\n      if (this.state.qr === false) this.setState({\n        qr: true\n      });else this.setState({\n        qr: false\n      });\n    });\n\n    this.state = {\n      rewards: 0,\n      bottleStatus: '',\n      result: '',\n      qr: false\n    };\n  }\n\n  renderQRReader() {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 13\n      }\n    }, __jsx(QrReader, {\n      delay: 300,\n      onError: this.handleError,\n      onScan: this.handleScan,\n      style: {\n        width: '100%'\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }\n    }), __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 17\n      }\n    }, this.state.result));\n  }\n\n  renderBottlesTable() {\n    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].Row, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 13\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].Cell, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }\n    }, this.state.result), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].Cell, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }\n    }, \"Completed\"));\n  }\n\n  render() {\n    const {\n      qr\n    } = this.state;\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 13\n      }\n    }, __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 17\n      }\n    }, \"Welcome to Recycler's Page\"), __jsx(\"link\", {\n      rel: \"stylesheet\",\n      href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 17\n      }\n    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n      header: \"Rewards\",\n      description: this.state.rewards,\n      meta: \"ETH\",\n      centered: \"true\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 17\n      }\n    }), __jsx(\"br\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 17\n      }\n    }), __jsx(\"br\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 17\n      }\n    }), __jsx(\"div\", {\n      className: \"Scanner\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 17\n      }\n    }, __jsx(\"h2\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 21\n      }\n    }, \"Dispose a Plastic Bottle \"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      className: \"QrReader\",\n      onClick: this.onScan,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 21\n      }\n    }, \" Scan QR Code\"), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 21\n      }\n    }, \" \", this.state.qr === true && this.state.result === '' ? __jsx(QRReader, {\n      delay: this.state.delay,\n      onError: this.handleError,\n      onScan: this.handleScan,\n      style: {\n        width: \"25%\"\n      } //\n      ,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 81\n      }\n    }) : '', \" \")), __jsx(\"div\", {\n      className: \"BottleTable\",\n      style: {\n        'width': '40%',\n        'margin-left': 'auto',\n        'margin-right': 'auto'\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 17\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"], {\n      unstackable: true,\n      size: \"small\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 21\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].Header, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 25\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].Row, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 29\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].HeaderCell, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 33\n      }\n    }, \"Plasitc Bottle Address\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].HeaderCell, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 33\n      }\n    }, \"Status\"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Table\"].Body, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 25\n      }\n    }, this.renderBottlesTable()))));\n  }\n\n} //At the end of each page, a component is expected to be returned \n// If not, Next.js throws an error \n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (recyclerPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWN5Y2xlci5qcz9lN2Q0Il0sIm5hbWVzIjpbIlFSUmVhZGVyIiwiZHluYW1pYyIsInNzciIsInJlY3ljbGVyUGFnZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJkYXRhIiwic2V0U3RhdGUiLCJyZXN1bHQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RhdGUiLCJxciIsInJld2FyZHMiLCJib3R0bGVTdGF0dXMiLCJyZW5kZXJRUlJlYWRlciIsImhhbmRsZUVycm9yIiwiaGFuZGxlU2NhbiIsIndpZHRoIiwicmVuZGVyQm90dGxlc1RhYmxlIiwicmVuZGVyIiwib25TY2FuIiwiZGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxRQUFRLEdBQUdDLG1EQUFPLENBQUMsTUFBTSxvSEFBUCxFQUFrQztBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUEsd0NBQXBCLHdDQUFvQjtBQUFBLGNBQXBCLGlCQUFvQjtBQUFBO0FBQUEsQ0FBbEMsQ0FBeEIsQyxDQUVBO0FBQ0E7O0FBRUEsTUFBTUMsWUFBTixTQUEyQkMsK0NBQTNCLENBQXFDO0FBRWpDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47O0FBRGUsd0NBVU5DLElBQUksSUFBSTtBQUNqQixVQUFJQSxJQUFKLEVBQVU7QUFDTixhQUFLQyxRQUFMLENBQWM7QUFBRUMsZ0JBQU0sRUFBRUY7QUFBVixTQUFkO0FBQ0g7QUFDSixLQWRrQjs7QUFBQSx5Q0FnQkxHLEdBQUcsSUFBSTtBQUNqQkMsYUFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDSCxLQWxCa0I7O0FBQUEsb0NBb0JWLE1BQU9HLEtBQVAsSUFBaUI7QUFDdEJBLFdBQUssQ0FBQ0MsY0FBTjtBQUNBLFVBQUksS0FB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QUloQztBQUpnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQXJELEdBS0YsRUFMTCxNQUhKLENBWEosRUFzQkk7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUE2QixXQUFLLEVBQUU7QUFBRSxpQkFBUyxLQUFYO0FBQWtCLHVCQUFlLE1BQWpDO0FBQXlDLHdCQUFnQjtBQUF6RCxPQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1REFBRDtBQUFPLGlCQUFXLE1BQWxCO0FBQW1CLFVBQUksRUFBQyxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx1REFBRCxDQUFPLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsdURBQUQsQ0FBTyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHVEQUFELENBQU8sVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURKLEVBRUksTUFBQyx1REFBRCxDQUFPLFVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixDQURKLENBREosRUFRSSxNQUFDLHVEQUFELENBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ssS0FBS0Msa0JBQUwsRUFETCxDQVJKLENBREosQ0F0QkosQ0FESjtBQTJDSDs7QUF6R2dDLEMsQ0E2R3JDO0FBQ0E7OztBQUNlcEIsMkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9yZWN5Y2xlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UaGlzIGlzIHRoZSByZWN5Y2xlciBwYWdlIHdoZXJlIGEgcmVjeWNsZXIgc2NhbnMgdGhlIFFSIGNvZGVzIGFuZCB2aWV3IHJld2FyZHNcbkNvbnRhY3QgdXNlZCBoZXJlOiBhbiBpbnN0YW5jZSBvZiB0cmFja2luZy5zb2wgXG5UbyBydW4gdGhlIGFwcCwgdXNlIHRoZSBjb21tYW5kIG5wbSBydW4gZGV2XG4qL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBsYXp5LCBTdXNwZW5zZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgVGFibGUsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5jb25zdCBRUlJlYWRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1xci1yZWFkZXInKSwgeyBzc3I6IGZhbHNlIH0pO1xuXG4vL2ltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuLy9pbXBvcnQgdHJhY2tpbmdDb250cmFjdCBmcm9tICcuLi9ldGhlcmV1bS90cmFja2luZyc7IC8vIGltcG9ydCBTQyBpbnN0YW5jZVxuXG5jbGFzcyByZWN5Y2xlclBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcmV3YXJkczogMCxcbiAgICAgICAgICAgIGJvdHRsZVN0YXR1czogJycsXG4gICAgICAgICAgICByZXN1bHQ6ICcnLFxuICAgICAgICAgICAgcXI6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaGFuZGxlU2NhbiA9IGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlc3VsdDogZGF0YX0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGhhbmRsZUVycm9yID0gZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuXG4gICAgb25TY2FuID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnFyID09PSBmYWxzZSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBxcjogdHJ1ZSB9KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHFyOiBmYWxzZSB9KTtcbiAgICB9O1xuXG5cbiAgICByZW5kZXJRUlJlYWRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFFyUmVhZGVyXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5PXszMDB9XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuaGFuZGxlRXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIG9uU2Nhbj17dGhpcy5oYW5kbGVTY2FufVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5yZXN1bHR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJCb3R0bGVzVGFibGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+e3RoaXMuc3RhdGUucmVzdWx0fTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbD5Db21wbGV0ZWQ8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlLlJvdz5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHtxcn0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8gUmVjeWNsZXIncyBQYWdlPC9oMT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjEvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPENhcmQgaGVhZGVyPSdSZXdhcmRzJyBkZXNjcmlwdGlvbj17dGhpcy5zdGF0ZS5yZXdhcmRzfSBtZXRhPSdFVEgnIGNlbnRlcmVkPSd0cnVlJyAvPlxuXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNjYW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkRpc3Bvc2UgYSBQbGFzdGljIEJvdHRsZSA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIlFyUmVhZGVyXCIgb25DbGljaz17dGhpcy5vblNjYW59ID4gU2NhbiBRUiBDb2RlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IHt0aGlzLnN0YXRlLnFyID09PSB0cnVlICYmIHRoaXMuc3RhdGUucmVzdWx0ID09PSAnJyA/IDxRUlJlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9e3RoaXMuc3RhdGUuZGVsYXl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLmhhbmRsZUVycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TY2FuPXt0aGlzLmhhbmRsZVNjYW59XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNSVcIiB9fS8vXG4gICAgICAgICAgICAgICAgICAgIC8+IDogJyd9IDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JvdHRsZVRhYmxlJyBzdHlsZT17eyAnd2lkdGgnOiAnNDAlJywgJ21hcmdpbi1sZWZ0JzogJ2F1dG8nLCAnbWFyZ2luLXJpZ2h0JzogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgdW5zdGFja2FibGUgc2l6ZT0nc21hbGwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5QbGFzaXRjIEJvdHRsZSBBZGRyZXNzPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5TdGF0dXM8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQm90dGxlc1RhYmxlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLkJvZHk+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG4vL0F0IHRoZSBlbmQgb2YgZWFjaCBwYWdlLCBhIGNvbXBvbmVudCBpcyBleHBlY3RlZCB0byBiZSByZXR1cm5lZCBcbi8vIElmIG5vdCwgTmV4dC5qcyB0aHJvd3MgYW4gZXJyb3IgXG5leHBvcnQgZGVmYXVsdCByZWN5Y2xlclBhZ2U7ICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/recycler.js\n");

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