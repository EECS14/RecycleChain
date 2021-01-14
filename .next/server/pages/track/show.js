module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/track/show.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/track/show.js":
/*!*****************************!*\
  !*** ./pages/track/show.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/track/show.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n //import { Divider } from 'semantic-ui-react';\n\nclass show extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"componentDidMount\", async () => {\n      const accounts = await web3.eth.getAccounts();\n      console.log(this.props.address);\n    });\n\n    this.state = {};\n  }\n\n  static async getInitialProps(props) {\n    //1. fetches address of the bottle from the URL\n    //Perfomed at the server before html is loaded\n    const {\n      address\n    } = props.query;\n    return {\n      address\n    };\n  } //2. fetches all events related to the updating the bottle route\n  // to find address of the entity \n\n\n  render() {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 13\n      }\n    }, __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }\n    }, \"Tracking page\"));\n  }\n\n} //At the end of each page, a component is expected to be returned \n// If not, Next.js throws an error \n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (show);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90cmFjay9zaG93LmpzPzIxNGYiXSwibmFtZXMiOlsic2hvdyIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJhY2NvdW50cyIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJhZGRyZXNzIiwic3RhdGUiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Q0FDQTs7QUFFQSxNQUFNQSxJQUFOLFNBQW1CQywrQ0FBbkIsQ0FBNEI7QUFFeEJDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2YsVUFBTUEsS0FBTjs7QUFEZSwrQ0FpQkssWUFBWTtBQUNoQyxZQUFNQyxRQUFRLEdBQUcsTUFBTUMsSUFBSSxDQUFDQyxHQUFMLENBQVNDLFdBQVQsRUFBdkI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksS0FBS04sS0FBTCxDQUFXTyxPQUF2QjtBQUVDLEtBckJjOztBQUVmLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRUg7O0FBRUYsZUFBYUMsZUFBYixDQUE2QlQsS0FBN0IsRUFBbUM7QUFFOUI7QUFDQTtBQUNBLFVBQU07QUFBQ087QUFBRCxRQUFZUCxLQUFLLENBQUNVLEtBQXhCO0FBRUEsV0FBTztBQUFDSDtBQUFELEtBQVA7QUFDQyxHQWZtQixDQWlCcEI7QUFDQTs7O0FBU0pJLFFBQU0sR0FBRTtBQUVKLFdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosQ0FESjtBQU1IOztBQW5DdUIsQyxDQXVDeEI7QUFDQTs7O0FBQ2VkLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdHJhY2svc2hvdy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7IFxuLy9pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5jbGFzcyBzaG93IGV4dGVuZHMgQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpe1xuXG4gICAgICAgIC8vMS4gZmV0Y2hlcyBhZGRyZXNzIG9mIHRoZSBib3R0bGUgZnJvbSB0aGUgVVJMXG4gICAgICAgIC8vUGVyZm9tZWQgYXQgdGhlIHNlcnZlciBiZWZvcmUgaHRtbCBpcyBsb2FkZWRcbiAgICAgICAgY29uc3Qge2FkZHJlc3N9ID0gcHJvcHMucXVlcnk7XG5cbiAgICAgICAgcmV0dXJuIHthZGRyZXNzfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vMi4gZmV0Y2hlcyBhbGwgZXZlbnRzIHJlbGF0ZWQgdG8gdGhlIHVwZGF0aW5nIHRoZSBib3R0bGUgcm91dGVcbiAgICAgICAgLy8gdG8gZmluZCBhZGRyZXNzIG9mIHRoZSBlbnRpdHkgXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuYWRkcmVzcyk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBcblxuICAgIHJlbmRlcigpe1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPlRyYWNraW5nIHBhZ2U8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgfVxuICAgIFxuICAgIC8vQXQgdGhlIGVuZCBvZiBlYWNoIHBhZ2UsIGEgY29tcG9uZW50IGlzIGV4cGVjdGVkIHRvIGJlIHJldHVybmVkIFxuICAgIC8vIElmIG5vdCwgTmV4dC5qcyB0aHJvd3MgYW4gZXJyb3IgXG4gICAgZXhwb3J0IGRlZmF1bHQgc2hvdzsgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/track/show.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });