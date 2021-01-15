module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auctionrole.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/auctionrole.js":
/*!******************************!*\
  !*** ./pages/auctionrole.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/auctionrole.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nclass auctionrole extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 13\n      }\n    }, __jsx(\"link\", {\n      rel: \"stylesheet\",\n      href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }\n    }), __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }\n    }, \"Auctions\"), __jsx(\"h2\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }\n    }, \"Select your role in auctions\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"].Group, {\n      basic: true,\n      vertical: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }\n    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      route: \"auctions/viewbales\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 21\n      }\n    }, __jsx(\"a\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 25\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 25\n      }\n    }, \"Seller\"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 21\n      }\n    }, \"Buyer\")));\n  }\n\n} //At the end of each page, a component is expected to be returned \n// If not, Next.js throws an error \n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (auctionrole);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdWN0aW9ucm9sZS5qcz85MGE5Il0sIm5hbWVzIjpbImF1Y3Rpb25yb2xlIiwiQ29tcG9uZW50IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBTixTQUEwQkMsK0NBQTFCLENBQW9DO0FBSWhDQyxRQUFNLEdBQUc7QUFFTCxXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFNLFNBQUcsRUFBQyxZQUFWO0FBQ0ksVUFBSSxFQUFDLGdFQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEosRUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQU5KLEVBT0ksTUFBQyx3REFBRCxDQUFRLEtBQVI7QUFBYyxXQUFLLE1BQW5CO0FBQW9CLGNBQVEsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsNENBQUQ7QUFBTSxXQUFLLEVBQUMsb0JBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsQ0FESixDQURKLEVBTUksTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkosQ0FQSixDQURKO0FBa0JIOztBQXhCK0IsQyxDQTRCcEM7QUFDQTs7O0FBQ2VGLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXVjdGlvbnJvbGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi9yb3V0ZXMnO1xuXG5jbGFzcyBhdWN0aW9ucm9sZSBleHRlbmRzIENvbXBvbmVudCB7XG5cblxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMS9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8aDE+QXVjdGlvbnM8L2gxPlxuICAgICAgICAgICAgICAgIDxoMj5TZWxlY3QgeW91ciByb2xlIGluIGF1Y3Rpb25zPC9oMj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwIGJhc2ljIHZlcnRpY2FsPlxuICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cImF1Y3Rpb25zL3ZpZXdiYWxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPlNlbGxlcjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+QnV5ZXI8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG4vL0F0IHRoZSBlbmQgb2YgZWFjaCBwYWdlLCBhIGNvbXBvbmVudCBpcyBleHBlY3RlZCB0byBiZSByZXR1cm5lZCBcbi8vIElmIG5vdCwgTmV4dC5qcyB0aHJvd3MgYW4gZXJyb3IgXG5leHBvcnQgZGVmYXVsdCBhdWN0aW9ucm9sZTsgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auctionrole.js\n");

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\nPurpose: For dynamic navigation between pages &\ndefining custome routes inside the application\nFor pages that has a token in the URL \nDocumentation: https://github.com/fridays/next-routes\n*/\n// The second set of parentheses is to invoke the function returned from the import statement \nconst routes = __webpack_require__(/*! next-routes */ \"next-routes\")();\n\nroutes.add('/track/:address', 'track/show');\nmodule.exports = routes; // Look at video 178 on how to do routing//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanM/ZjFjMSJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUUsZ0NBQUYsQ0FBUCxFQUFmOztBQUVBRCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxpQkFBWCxFQUE4QixZQUE5QjtBQUVBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJKLE1BQWpCLEMsQ0FFQSIsImZpbGUiOiIuL3JvdXRlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5QdXJwb3NlOiBGb3IgZHluYW1pYyBuYXZpZ2F0aW9uIGJldHdlZW4gcGFnZXMgJlxuZGVmaW5pbmcgY3VzdG9tZSByb3V0ZXMgaW5zaWRlIHRoZSBhcHBsaWNhdGlvblxuRm9yIHBhZ2VzIHRoYXQgaGFzIGEgdG9rZW4gaW4gdGhlIFVSTCBcbkRvY3VtZW50YXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9mcmlkYXlzL25leHQtcm91dGVzXG4qL1xuLy8gVGhlIHNlY29uZCBzZXQgb2YgcGFyZW50aGVzZXMgaXMgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiByZXR1cm5lZCBmcm9tIHRoZSBpbXBvcnQgc3RhdGVtZW50IFxuY29uc3Qgcm91dGVzID0gcmVxdWlyZSAoJ25leHQtcm91dGVzJykoKTtcblxucm91dGVzLmFkZCgnL3RyYWNrLzphZGRyZXNzJywgJ3RyYWNrL3Nob3cnKTsgXG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVzOyBcblxuLy8gTG9vayBhdCB2aWRlbyAxNzggb24gaG93IHRvIGRvIHJvdXRpbmcgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./routes.js\n");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-routes\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJvdXRlc1wiPzBkNGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC1yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-routes\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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