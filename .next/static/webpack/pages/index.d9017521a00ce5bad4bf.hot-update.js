webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return index; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n/*\nThis is the index page which will be the first page of the dapp to run\nTo run the app, use the command npm run dev\n*/\n\n\n //import buildingsImg from '../resources/images/buildings.jpg'; // does not work for some reason\n\nvar index = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(index, _Component);\n\n  var _super = _createSuper(index);\n\n  function index(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, index);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleItemClick\", function (e, _ref) {\n      var name = _ref.name;\n      return _this.setState({\n        activeItem: name\n      });\n    });\n\n    _this.state = {\n      activeItem: 'about'\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(index, [{\n    key: \"render\",\n    value: function render() {\n      var activeItem = this.state.activeItem;\n      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }\n      }, __jsx(\"div\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 17\n        }\n      }, __jsx(\"link\", {\n        rel: \"stylesheet\",\n        href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css\",\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 21\n        }\n      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        id: \"2240490750\",\n        __self: this,\n        __source: void 0\n      }, \"@media (max-width:600px){}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9laW1hbmFsd2FoaGFiaS9EZXNrdG9wL1JlY3ljbGVDaGFpbi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmdDIiwiZmlsZSI6Ii9Vc2Vycy9laW1hbmFsd2FoaGFiaS9EZXNrdG9wL1JlY3ljbGVDaGFpbi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UaGlzIGlzIHRoZSBpbmRleCBwYWdlIHdoaWNoIHdpbGwgYmUgdGhlIGZpcnN0IHBhZ2Ugb2YgdGhlIGRhcHAgdG8gcnVuXG5UbyBydW4gdGhlIGFwcCwgdXNlIHRoZSBjb21tYW5kIG5wbSBydW4gZGV2XG4qL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuLy9pbXBvcnQgYnVpbGRpbmdzSW1nIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvYnVpbGRpbmdzLmpwZyc7IC8vIGRvZXMgbm90IHdvcmsgZm9yIHNvbWUgcmVhc29uXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVJdGVtOiAnYWJvdXQnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVJdGVtQ2xpY2sgPSAoZSwgeyBuYW1lIH0pID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBuYW1lIH0pXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYWN0aXZlSXRlbSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjEvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUgdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhYm91dCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdhYm91dCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2ZlYXR1cmVzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2ZlYXR1cmVzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZWF0dXJlc1xuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RhdHMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnc3RhdHMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRpc3RpY3NcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuXG4gICAgICAgICAgICAgICAgICAgIHsoYWN0aXZlSXRlbSA9PT0gJ2Fib3V0JykgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5SZWN5Y2xlQ2hhaW48L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5SZWN5Y2xlIENoYWluIGlzIGEgc3lzdGVtIHRoYXQgZGlnaXRpemVzIHJlY3ljbGVhYmxlIHBsYXN0aWMgd2FzdGUgdG8gcHJvdmlkZSB0cmFuc3BhcmVuY3kgb2YgcG9zdC1jb25zdW1lciBwbGFzdGljIHdhc3RlIG1hbmFnZW1lbnQgYW5kIHJlYWwtdGltZSB0cmFja2luZyBvZiBkaXNwb3NlZCBwbGFzdGljIHdhc3RlIHRvIGRpZmZlcmVudCBzdGFrZWhvbGRlcnMuIEl0IHJld2FyZHMgdXNlcnMgd2l0aCBFdGhlciBmb3IgcGFydGljaXBhdGluZyBpbiBlbnZpcm9ubWVudCBmcmllbmRseSBwcmFjdGljZXMgc3VjaCBhcyByZWN5Y2xpbmcuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7KGFjdGl2ZUl0ZW0gPT09ICdmZWF0dXJlcycpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlRyYW5zcGFyZW50IFRyYW5zYWN0aW9uczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEZ1c2NlIGNvbnZhbGxpcyBwZWxsZW50ZXNxdWUgbWV0dXMgaWQgbGFjaW5pYS4gTnVuYyBkYXBpYnVzIHB1bHZpbmFyIGF1Y3Rvci48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkNyeXB0b2dyYXBoaWNhbGx5IFByb3RlY3RlZDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEZ1c2NlIGNvbnZhbGxpcyBwZWxsZW50ZXNxdWUgbWV0dXMgaWQgbGFjaW5pYS4gTnVuYyBkYXBpYnVzIHB1bHZpbmFyIGF1Y3Rvci48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk5vIERlbGV0aW9uIG9yIEFsdGVyYXRpb248L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBGdXNjZSBjb252YWxsaXMgcGVsbGVudGVzcXVlIG1ldHVzIGlkIGxhY2luaWEuIE51bmMgZGFwaWJ1cyBwdWx2aW5hciBhdWN0b3IuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5EaXN0cmlidXRlZCBDb250cm9sPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRnVzY2UgY29udmFsbGlzIHBlbGxlbnRlc3F1ZSBtZXR1cyBpZCBsYWNpbmlhLiBOdW5jIGRhcGlidXMgcHVsdmluYXIgYXVjdG9yLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBpbnNlcnQgaW1nICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7KGFjdGl2ZUl0ZW0gPT09ICdzdGF0cycpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGlzdGljc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGlzdGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT45LjRLPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkJvdHRsZXMgcmVjeWNsZWQ8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aXN0aWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPjIzNDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5SZXdhcmRlZCB1c2VyczwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpc3RpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+ODcrPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkNvdW50cmllczwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpc3RpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+JDU4PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlJldmVudWUgcGVyIGhvdXI8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufVxuXG4iXX0= */\\n/*@ sourceURL=/Users/eimanalwahhabi/Desktop/RecycleChain/pages/index.js */\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Menu\"], {\n        text: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Menu\"].Item, {\n        name: \"about\",\n        active: activeItem === 'about',\n        onClick: this.handleItemClick,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 25\n        }\n      }, \"About\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Menu\"].Item, {\n        name: \"features\",\n        active: activeItem === 'features',\n        onClick: this.handleItemClick,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 25\n        }\n      }, \"Features\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Menu\"].Item, {\n        name: \"stats\",\n        active: activeItem === 'stats',\n        onClick: this.handleItemClick,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 25\n        }\n      }, \"Statistics\")), activeItem === 'about' && __jsx(\"div\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 25\n        }\n      }, __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"about\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 29\n        }\n      }, __jsx(\"h1\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 33\n        }\n      }, \"RecycleChain\"), __jsx(\"p\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 33\n        }\n      }, \"Recycle Chain is a system that digitizes recycleable plastic waste to provide transparency of post-consumer plastic waste management and real-time tracking of disposed plastic waste to different stakeholders. It rewards users with Ether for participating in environment friendly practices such as recycling.\"))), activeItem === 'features' && __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"features\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 25\n        }\n      }, __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"feature\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 29\n        }\n      }, __jsx(\"h4\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 33\n        }\n      }, \"Transparent Transactions\"), __jsx(\"p\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 33\n        }\n      }, \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis pellentesque metus id lacinia. Nunc dapibus pulvinar auctor.\")), __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"feature\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 29\n        }\n      }, __jsx(\"h4\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 33\n        }\n      }, \"Cryptographically Protected\"), __jsx(\"p\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 33\n        }\n      }, \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis pellentesque metus id lacinia. Nunc dapibus pulvinar auctor.\")), __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"feature\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 29\n        }\n      }, __jsx(\"h4\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 33\n        }\n      }, \"No Deletion or Alteration\"), __jsx(\"p\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 33\n        }\n      }, \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis pellentesque metus id lacinia. Nunc dapibus pulvinar auctor.\")), __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"feature\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 29\n        }\n      }, __jsx(\"h4\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 33\n        }\n      }, \"Distributed Control\"), __jsx(\"p\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 33\n        }\n      }, \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis pellentesque metus id lacinia. Nunc dapibus pulvinar auctor.\"))), activeItem === 'stats' && __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"statistics\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 25\n        }\n      }, __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"statistic\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 29\n        }\n      }, __jsx(\"h1\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 33\n        }\n      }, \"9.4K\"), __jsx(\"h6\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 33\n        }\n      }, \"Bottles recycled\")), __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"statistic\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 29\n        }\n      }, __jsx(\"h1\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 33\n        }\n      }, \"234\"), __jsx(\"h6\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 33\n        }\n      }, \"Rewarded users\")), __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"statistic\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 29\n        }\n      }, __jsx(\"h1\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 33\n        }\n      }, \"87+\"), __jsx(\"h6\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 33\n        }\n      }, \"Countries\")), __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"statistic\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 29\n        }\n      }, __jsx(\"h1\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 33\n        }\n      }, \"$58\"), __jsx(\"h6\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 33\n        }\n      }, \"Revenue per hour\")))));\n    }\n  }]);\n\n  return index;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJpbmRleCIsInByb3BzIiwiZSIsIm5hbWUiLCJzZXRTdGF0ZSIsImFjdGl2ZUl0ZW0iLCJzdGF0ZSIsImhhbmRsZUl0ZW1DbGljayIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0NBRUE7O0lBRXFCQSxLOzs7OztBQUNqQixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLDBOQU9ELFVBQUNDLENBQUQ7QUFBQSxVQUFNQyxJQUFOLFFBQU1BLElBQU47QUFBQSxhQUFpQixNQUFLQyxRQUFMLENBQWM7QUFBRUMsa0JBQVUsRUFBRUY7QUFBZCxPQUFkLENBQWpCO0FBQUEsS0FQQzs7QUFFZixVQUFLRyxLQUFMLEdBQWE7QUFDVEQsZ0JBQVUsRUFBRTtBQURILEtBQWI7QUFGZTtBQUtsQjs7Ozs2QkFJUTtBQUFBLFVBQ0dBLFVBREgsR0FDa0IsS0FBS0MsS0FEdkIsQ0FDR0QsVUFESDtBQUdMLGFBQ0ksTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUNJLFlBQUksRUFBQyxnRUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZ5T0FhSSxNQUFDLHNEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLHNEQUFELENBQU0sSUFBTjtBQUNJLFlBQUksRUFBQyxPQURUO0FBRUksY0FBTSxFQUFFQSxVQUFVLEtBQUssT0FGM0I7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QUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixDQVhKLEVBZ0JJO0FBQUEsNENBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkosQ0FoQkosQ0E3RVIsQ0FESixDQURKO0FBeUdIOzs7O0VBdEg4QkcsK0MiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UaGlzIGlzIHRoZSBpbmRleCBwYWdlIHdoaWNoIHdpbGwgYmUgdGhlIGZpcnN0IHBhZ2Ugb2YgdGhlIGRhcHAgdG8gcnVuXG5UbyBydW4gdGhlIGFwcCwgdXNlIHRoZSBjb21tYW5kIG5wbSBydW4gZGV2XG4qL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuLy9pbXBvcnQgYnVpbGRpbmdzSW1nIGZyb20gJy4uL3Jlc291cmNlcy9pbWFnZXMvYnVpbGRpbmdzLmpwZyc7IC8vIGRvZXMgbm90IHdvcmsgZm9yIHNvbWUgcmVhc29uXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVJdGVtOiAnYWJvdXQnXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVJdGVtQ2xpY2sgPSAoZSwgeyBuYW1lIH0pID0+IHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJdGVtOiBuYW1lIH0pXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYWN0aXZlSXRlbSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjEvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUgdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhYm91dCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdhYm91dCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2ZlYXR1cmVzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2ZlYXR1cmVzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZWF0dXJlc1xuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RhdHMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnc3RhdHMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRpc3RpY3NcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuXG4gICAgICAgICAgICAgICAgICAgIHsoYWN0aXZlSXRlbSA9PT0gJ2Fib3V0JykgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5SZWN5Y2xlQ2hhaW48L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5SZWN5Y2xlIENoYWluIGlzIGEgc3lzdGVtIHRoYXQgZGlnaXRpemVzIHJlY3ljbGVhYmxlIHBsYXN0aWMgd2FzdGUgdG8gcHJvdmlkZSB0cmFuc3BhcmVuY3kgb2YgcG9zdC1jb25zdW1lciBwbGFzdGljIHdhc3RlIG1hbmFnZW1lbnQgYW5kIHJlYWwtdGltZSB0cmFja2luZyBvZiBkaXNwb3NlZCBwbGFzdGljIHdhc3RlIHRvIGRpZmZlcmVudCBzdGFrZWhvbGRlcnMuIEl0IHJld2FyZHMgdXNlcnMgd2l0aCBFdGhlciBmb3IgcGFydGljaXBhdGluZyBpbiBlbnZpcm9ubWVudCBmcmllbmRseSBwcmFjdGljZXMgc3VjaCBhcyByZWN5Y2xpbmcuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7KGFjdGl2ZUl0ZW0gPT09ICdmZWF0dXJlcycpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlRyYW5zcGFyZW50IFRyYW5zYWN0aW9uczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEZ1c2NlIGNvbnZhbGxpcyBwZWxsZW50ZXNxdWUgbWV0dXMgaWQgbGFjaW5pYS4gTnVuYyBkYXBpYnVzIHB1bHZpbmFyIGF1Y3Rvci48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkNyeXB0b2dyYXBoaWNhbGx5IFByb3RlY3RlZDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEZ1c2NlIGNvbnZhbGxpcyBwZWxsZW50ZXNxdWUgbWV0dXMgaWQgbGFjaW5pYS4gTnVuYyBkYXBpYnVzIHB1bHZpbmFyIGF1Y3Rvci48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk5vIERlbGV0aW9uIG9yIEFsdGVyYXRpb248L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBGdXNjZSBjb252YWxsaXMgcGVsbGVudGVzcXVlIG1ldHVzIGlkIGxhY2luaWEuIE51bmMgZGFwaWJ1cyBwdWx2aW5hciBhdWN0b3IuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5EaXN0cmlidXRlZCBDb250cm9sPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRnVzY2UgY29udmFsbGlzIHBlbGxlbnRlc3F1ZSBtZXR1cyBpZCBsYWNpbmlhLiBOdW5jIGRhcGlidXMgcHVsdmluYXIgYXVjdG9yLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBpbnNlcnQgaW1nICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7KGFjdGl2ZUl0ZW0gPT09ICdzdGF0cycpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGlzdGljc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGlzdGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT45LjRLPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkJvdHRsZXMgcmVjeWNsZWQ8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aXN0aWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPjIzNDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5SZXdhcmRlZCB1c2VyczwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpc3RpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+ODcrPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkNvdW50cmllczwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpc3RpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+JDU4PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlJldmVudWUgcGVyIGhvdXI8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})