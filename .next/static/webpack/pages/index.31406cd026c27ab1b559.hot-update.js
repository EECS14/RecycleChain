webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return index; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/eimanalwahhabi/Desktop/RecycleChain/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n/*\nThis is the index page which will be the first page of the dapp to run\nTo run the app, use the command npm run dev\n*/\n\n\n\n\n\nvar index = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(index, _Component);\n\n  var _super = _createSuper(index);\n\n  function index(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, index);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleItemClick\", function (e, _ref) {\n      var name = _ref.name;\n      return _this.setState({\n        activeItem: name\n      });\n    });\n\n    _this.state = {\n      activeItem: 'about'\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(index, [{\n    key: \"render\",\n    value: function render() {\n      var activeItem = this.state.activeItem;\n      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }\n      }, __jsx(\"div\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 17\n        }\n      }, __jsx(\"link\", {\n        rel: \"stylesheet\",\n        href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css\",\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 21\n        }\n      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        id: \"2240490750\",\n        __self: this,\n        __source: void 0\n      }, \"@media (max-width:600px){}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9laW1hbmFsd2FoaGFiaS9EZXNrdG9wL1JlY3ljbGVDaGFpbi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmdDIiwiZmlsZSI6Ii9Vc2Vycy9laW1hbmFsd2FoaGFiaS9EZXNrdG9wL1JlY3ljbGVDaGFpbi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UaGlzIGlzIHRoZSBpbmRleCBwYWdlIHdoaWNoIHdpbGwgYmUgdGhlIGZpcnN0IHBhZ2Ugb2YgdGhlIGRhcHAgdG8gcnVuXG5UbyBydW4gdGhlIGFwcCwgdXNlIHRoZSBjb21tYW5kIG5wbSBydW4gZGV2XG4qL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVudSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnOyBcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlSXRlbTogJ2Fib3V0J1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlSXRlbUNsaWNrID0gKGUsIHsgbmFtZSB9KSA9PiB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSXRlbTogbmFtZSB9KVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGFjdGl2ZUl0ZW0gfSA9IHRoaXMuc3RhdGVcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4xL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxNZW51IHRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYWJvdXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnYWJvdXQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdmZWF0dXJlcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdmZWF0dXJlcyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmVhdHVyZXNcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3N0YXRzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ3N0YXRzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0aXN0aWNzXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudT5cblxuICAgICAgICAgICAgICAgICAgICB7KGFjdGl2ZUl0ZW0gPT09ICdhYm91dCcpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvYmxvY2tjaGFpbi5qcGcnIGFsdD1cIkJsb2NrY2hhaW5cIi8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+UmVjeWNsZUNoYWluPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmVjeWNsZSBDaGFpbiBpcyBhIHN5c3RlbSB0aGF0IHRva2VuaXplcyByZWN5Y2xlYWJsZSBwbGFzdGljIHdhc3RlIHRvIHByb3ZpZGUgdHJhbnNwYXJlbnQgcG9zdC1jb25zdW1lciBwbGFzdGljIHdhc3RlIG1hbmFnZW1lbnQgYW5kIHJlYWwtdGltZSB0cmFja2luZyBvZiBkaXNwb3NlZCBwbGFzdGljIHdhc3RlIHRvIGRpZmZlcmVudCBzdGFrZWhvbGRlcnMuIFJlY3ljbGVycyB3aG8gcGFydGljaXBhdGUgaW4gcmVjeWNsaW5nIGFyZSByZXdhcmRlZCB3aXRoIEV0aGVyIVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIHsoYWN0aXZlSXRlbSA9PT0gJ2ZlYXR1cmVzJykgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+VHJhbnNwYXJlbnQgVHJhbnNhY3Rpb25zPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VHJhbnNhY3Rpb24gcGVyZm9ybWVkIGJ5IHRoZSBzeXN0ZW0gY2FuICBiZSB2aWV3ZWQgcHVibGljbHkgb24gRXRoZXJzY2FuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+Q3J5cHRvZ3JhcGhpY2FsbHkgUHJvdGVjdGVkPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VHJhbnNhY3Rpb25zIGFyZSBkaWdpdGFsbHkgc2lnbmVkIGJ5IHVzZXJzICBwcml2YXRlIGtleTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pk5vIERlbGV0aW9uIG9yIEFsdGVyYXRpb248L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TeXN0ZW0gcmVjb3JkcyBhcmUgc3RvcmVkIG9uIEV0aGVyZXVtIEJsb2NrY2hhaW48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5EaXN0cmlidXRlZCBDb250cm9sPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3lzdGVtIGlzIGhvc3RlZCBvbiBhIHByaXZhdGUgRXRoZXJldW0gTmV0d29yayBlbmNvbXBhc3NlZCBvbiBzdGFrZWhvbGRlciBub2Rlcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIGluc2VydCBpbWcgKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIHsoYWN0aXZlSXRlbSA9PT0gJ3N0YXRzJykgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aXN0aWNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aXN0aWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPjkuNEs8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+Qm90dGxlcyByZWN5Y2xlZDwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpc3RpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+MjM0PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlJld2FyZGVkIHVzZXJzPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGlzdGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT44Nys8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+Q291bnRyaWVzPC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGlzdGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT4kNTg8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+UmV2ZW51ZSBwZXIgaG91cjwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbiJdfQ== */\\n/*@ sourceURL=/Users/eimanalwahhabi/Desktop/RecycleChain/pages/index.js */\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Menu\"], {\n        text: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }\n      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Menu\"].Item, {\n        name: \"about\",\n        active: activeItem === 'about',\n        onClick: this.handleItemClick,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 25\n        }\n      }, \"About\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Menu\"].Item, {\n        name: \"features\",\n        active: activeItem === 'features',\n        onClick: this.handleItemClick,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 25\n        }\n      }, \"Features\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__[\"Menu\"].Item, {\n        name: \"stats\",\n        active: activeItem === 'stats',\n        onClick: this.handleItemClick,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 25\n        }\n      }, \"Statistics\")), activeItem === 'about' && __jsx(\"div\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 25\n        }\n      }, __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"about\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 29\n        }\n      }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_11___default.a, {\n        src: \"/blockchain.jpg\",\n        alt: \"Blockchain\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 33\n        }\n      }), __jsx(\"h1\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 33\n        }\n      }, \"RecycleChain\"), __jsx(\"p\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 33\n        }\n      }, \"Recycle Chain is a system that tokenizes recycleable plastic waste to provide transparent post-consumer plastic waste management and real-time tracking of disposed plastic waste to different stakeholders. Recyclers who participate in recycling are rewarded with Ether!\"))), activeItem === 'features' && __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"features\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 25\n        }\n      }, __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"feature\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 29\n        }\n      }, __jsx(\"h4\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 33\n        }\n      }, \"Transparent Transactions\"), __jsx(\"p\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 33\n        }\n      }, \"Transaction performed by the system can  be viewed publicly on Etherscan\")), __jsx(\"br\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 29\n        }\n      }), __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"feature\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 29\n        }\n      }, __jsx(\"h4\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 33\n        }\n      }, \"Cryptographically Protected\"), __jsx(\"p\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 33\n        }\n      }, \"Transactions are digitally signed by users  private key\")), __jsx(\"br\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 29\n        }\n      }), __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"feature\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 29\n        }\n      }, __jsx(\"h4\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 33\n        }\n      }, \"No Deletion or Alteration\"), __jsx(\"p\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 33\n        }\n      }, \"System records are stored on Ethereum Blockchain\")), __jsx(\"br\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 29\n        }\n      }), __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"feature\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 29\n        }\n      }, __jsx(\"h4\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 33\n        }\n      }, \"Distributed Control\"), __jsx(\"p\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 33\n        }\n      }, \"System is hosted on a private Ethereum Network encompassed on stakeholder nodes.\")), __jsx(\"br\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 29\n        }\n      })), activeItem === 'stats' && __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"statistics\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 25\n        }\n      }, __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"statistic\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 29\n        }\n      }, __jsx(\"h1\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 33\n        }\n      }, \"9.4K\"), __jsx(\"h6\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 33\n        }\n      }, \"Bottles recycled\")), __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"statistic\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 29\n        }\n      }, __jsx(\"h1\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 33\n        }\n      }, \"234\"), __jsx(\"h6\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 33\n        }\n      }, \"Rewarded users\")), __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"statistic\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 29\n        }\n      }, __jsx(\"h1\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 33\n        }\n      }, \"87+\"), __jsx(\"h6\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 33\n        }\n      }, \"Countries\")), __jsx(\"div\", {\n        className: \"jsx-2240490750\" + \" \" + \"statistic\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 29\n        }\n      }, __jsx(\"h1\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 33\n        }\n      }, \"$58\"), __jsx(\"h6\", {\n        className: \"jsx-2240490750\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 33\n        }\n      }, \"Revenue per hour\")))));\n    }\n  }]);\n\n  return index;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJpbmRleCIsInByb3BzIiwiZSIsIm5hbWUiLCJzZXRTdGF0ZSIsImFjdGl2ZUl0ZW0iLCJzdGF0ZSIsImhhbmRsZUl0ZW1DbGljayIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztJQUdxQkEsSzs7Ozs7QUFDakIsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSwwTkFPRCxVQUFDQyxDQUFEO0FBQUEsVUFBTUMsSUFBTixRQUFNQSxJQUFOO0FBQUEsYUFBaUIsTUFBS0MsUUFBTCxDQUFjO0FBQUVDLGtCQUFVLEVBQUVGO0FBQWQsT0FBZCxDQUFqQjtBQUFBLEtBUEM7O0FBRWYsVUFBS0csS0FBTCxHQUFhO0FBQ1RELGdCQUFVLEVBQUU7QUFESCxLQUFiO0FBRmU7QUFLbEI7Ozs7NkJBSVE7QUFBQSxVQUNHQSxVQURILEdBQ2tCLEtBQUtDLEtBRHZCLENBQ0dELFVBREg7QUFHTCxhQUNJLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFDSSxZQUFJLEVBQUMsZ0VBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5cE9BYUksTUFBQyxzREFBRDtBQUFNLFlBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxzREFBRCxDQUFNLElBQU47QUFDSSxZQUFJLEVBQUMsT0FEVDtBQUVJLGNBQU0sRUFBRUEsVUFBVSxLQUFL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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkosQ0FESixFQU1JO0FBQUEsNENBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkosQ0FOSixFQVdJO0FBQUEsNENBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosQ0FYSixFQWdCSTtBQUFBLDRDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZKLENBaEJKLENBdkZSLENBREosQ0FESjtBQW1ISDs7OztFQWhJOEJHLCtDIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVGhpcyBpcyB0aGUgaW5kZXggcGFnZSB3aGljaCB3aWxsIGJlIHRoZSBmaXJzdCBwYWdlIG9mIHRoZSBkYXBwIHRvIHJ1blxuVG8gcnVuIHRoZSBhcHAsIHVzZSB0aGUgY29tbWFuZCBucG0gcnVuIGRldlxuKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJzsgXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW06ICdhYm91dCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSlcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBhY3RpdmVJdGVtIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMS9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cblxuICAgICAgICAgICAgICAgICAgICA8TWVudSB0ZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Fib3V0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2Fib3V0J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZmVhdHVyZXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtID09PSAnZmVhdHVyZXMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZlYXR1cmVzXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdGF0cydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW0gPT09ICdzdGF0cyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGlzdGljc1xuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG5cbiAgICAgICAgICAgICAgICAgICAgeyhhY3RpdmVJdGVtID09PSAnYWJvdXQnKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2Jsb2NrY2hhaW4uanBnJyBhbHQ9XCJCbG9ja2NoYWluXCIvPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlJlY3ljbGVDaGFpbjwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJlY3ljbGUgQ2hhaW4gaXMgYSBzeXN0ZW0gdGhhdCB0b2tlbml6ZXMgcmVjeWNsZWFibGUgcGxhc3RpYyB3YXN0ZSB0byBwcm92aWRlIHRyYW5zcGFyZW50IHBvc3QtY29uc3VtZXIgcGxhc3RpYyB3YXN0ZSBtYW5hZ2VtZW50IGFuZCByZWFsLXRpbWUgdHJhY2tpbmcgb2YgZGlzcG9zZWQgcGxhc3RpYyB3YXN0ZSB0byBkaWZmZXJlbnQgc3Rha2Vob2xkZXJzLiBSZWN5Y2xlcnMgd2hvIHBhcnRpY2lwYXRlIGluIHJlY3ljbGluZyBhcmUgcmV3YXJkZWQgd2l0aCBFdGhlciFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7KGFjdGl2ZUl0ZW0gPT09ICdmZWF0dXJlcycpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlRyYW5zcGFyZW50IFRyYW5zYWN0aW9uczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRyYW5zYWN0aW9uIHBlcmZvcm1lZCBieSB0aGUgc3lzdGVtIGNhbiAgYmUgdmlld2VkIHB1YmxpY2x5IG9uIEV0aGVyc2NhbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkNyeXB0b2dyYXBoaWNhbGx5IFByb3RlY3RlZDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRyYW5zYWN0aW9ucyBhcmUgZGlnaXRhbGx5IHNpZ25lZCBieSB1c2VycyAgcHJpdmF0ZSBrZXk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5ObyBEZWxldGlvbiBvciBBbHRlcmF0aW9uPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U3lzdGVtIHJlY29yZHMgYXJlIHN0b3JlZCBvbiBFdGhlcmV1bSBCbG9ja2NoYWluPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+RGlzdHJpYnV0ZWQgQ29udHJvbDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlN5c3RlbSBpcyBob3N0ZWQgb24gYSBwcml2YXRlIEV0aGVyZXVtIE5ldHdvcmsgZW5jb21wYXNzZWQgb24gc3Rha2Vob2xkZXIgbm9kZXMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBpbnNlcnQgaW1nICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7KGFjdGl2ZUl0ZW0gPT09ICdzdGF0cycpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGlzdGljc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdGlzdGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT45LjRLPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkJvdHRsZXMgcmVjeWNsZWQ8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0aXN0aWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPjIzNDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5SZXdhcmRlZCB1c2VyczwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpc3RpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+ODcrPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkNvdW50cmllczwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRpc3RpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+JDU4PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlJldmVudWUgcGVyIGhvdXI8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})