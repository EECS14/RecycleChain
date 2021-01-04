webpackHotUpdate(5,{

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(86);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(87);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(728);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/eimanalwahhabi/Desktop/RecycleChain/pages/registration.js?entry';
/*
This is the registration page where the goverment entity registers stakeholders 
Contact used here: an instance of register.sol 
To run the app, use the command npm run dev
*/

//import registerContract from '../ethereum/register'; // import SC instance

var registrationPage = function (_Component) {
    (0, _inherits3.default)(registrationPage, _Component);

    function registrationPage(props) {
        (0, _classCallCheck3.default)(this, registrationPage);

        var _this = (0, _possibleConstructorReturn3.default)(this, (registrationPage.__proto__ || (0, _getPrototypeOf2.default)(registrationPage)).call(this, props)); // might not be needed 


        _this.state = {
            selectManufacturer: false,
            selectSortingFacility: false,
            selectBuyer: false,
            manufacturerName: '',
            manufacturerAddr: '',
            manufacturerLocation: '',
            buyerName: '',
            buyerAddr: '',
            buyerLocation: '',
            buyerBusiness: '',
            sellerName: '',
            sellerAddr: '',
            sellerLocation: '',
            sortingMachines: []
        };
        return _this;
    }

    (0, _createClass3.default)(registrationPage, [{
        key: 'componentDidMount',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function componentDidMount() {
                return _ref.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                selectManufacturer = _state.selectManufacturer,
                selectSortingFacility = _state.selectSortingFacility,
                selectBuyer = _state.selectBuyer,
                manufacturerName = _state.manufacturerName,
                manufacturerAddr = _state.manufacturerAddr,
                manufacturerLocation = _state.manufacturerLocation,
                buyerName = _state.buyerName,
                buyerAddr = _state.buyerAddr,
                buyerLocation = _state.buyerLocation,
                buyerBusiness = _state.buyerBusiness,
                sellerName = _state.sellerName,
                sellerAddr = _state.sellerAddr,
                sellerLocation = _state.sellerLocation,
                sortingMachines = _state.sortingMachines;

            return _react2.default.createElement('div', { className: 'Selection ', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Welcome to Registration Page'), _react2.default.createElement('link', { rel: 'stylesheet',
                href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Select a stakeholder to register:'), _react2.default.createElement(_semanticUiReact.Menu, { widths: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Manufacturer', onClick: function onClick() {
                    return _this2.setState({ selectManufacturer: true, selectSortingFacility: false, selectBuyer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, ' Manufacturer'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'SortingFacility', onClick: function onClick() {
                    return _this2.setState({ selectSortingFacility: true, selectManufacturer: false, selectBuyer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, ' Sorting Facility'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Buyer', onClick: function onClick() {
                    return _this2.setState({ selectBuyer: true, selectSortingFacility: false, selectManufacturer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, ' Buyer ')), selectManufacturer && _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, 'Manufacturer Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerName,
                onChange: function onChange(event) {
                    return _this2.setState({ manufacturerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, 'Manufacturer Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this2.setState({ manufacturerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, 'Manufacturer Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerLocation,
                onChange: function onChange(event) {
                    return _this2.setState({ manufacturerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, 'Register')), selectBuyer && _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, 'Buyer Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerName,
                onChange: function onChange(event) {
                    return _this2.setState({ buyerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, 'Buyer Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this2.setState({ buyerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, 'Buyer Business Type'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.BuyerBusiness,
                onChange: function onChange(event) {
                    return _this2.setState({ buyerBusiness: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, 'Buyer Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerLocation,
                onChange: function onChange(event) {
                    return _this2.setState({ buyerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, 'Register')), selectSortingFacility && _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, 'Sorting Facility Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerName,
                onChange: function onChange(event) {
                    return _this2.setState({ sellerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            }, 'Sorting Facility Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this2.setState({ sellerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }, 'Sorting Facility Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerLocation,
                onChange: function onChange(event) {
                    return _this2.setState({ sellerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143
                }
            }, 'Register')));
        }
    }]);

    return registrationPage;
}(_react.Component);

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 


exports.default = registrationPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJyZWdpc3RyYXRpb25QYWdlIiwicHJvcHMiLCJzdGF0ZSIsInNlbGVjdE1hbnVmYWN0dXJlciIsInNlbGVjdFNvcnRpbmdGYWNpbGl0eSIsInNlbGVjdEJ1eWVyIiwibWFudWZhY3R1cmVyTmFtZSIsIm1hbnVmYWN0dXJlckFkZHIiLCJtYW51ZmFjdHVyZXJMb2NhdGlvbiIsImJ1eWVyTmFtZSIsImJ1eWVyQWRkciIsImJ1eWVyTG9jYXRpb24iLCJidXllckJ1c2luZXNzIiwic2VsbGVyTmFtZSIsInNlbGxlckFkZHIiLCJzZWxsZXJMb2NhdGlvbiIsInNvcnRpbmdNYWNoaW5lcyIsInNldFN0YXRlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkJ1eWVyQnVzaW5lc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU0sQUFBUTs7Ozs7QUFQN0I7Ozs7OztBQVNBOztJLEFBRU07OENBRUY7OzhCQUFBLEFBQVksT0FBTzs0Q0FBQTs7OEpBQUEsQUFDVCxTQURXLEFBRWpCOzs7Y0FBQSxBQUFLO2dDQUFRLEFBQ1csQUFDcEI7bUNBRlMsQUFFYyxBQUN2Qjt5QkFIUyxBQUdJLEFBQ2I7OEJBSlMsQUFJUyxBQUNsQjs4QkFMUyxBQUtTLEFBQ2xCO2tDQU5TLEFBTWEsQUFDdEI7dUJBUFMsQUFPRSxBQUNYO3VCQVJTLEFBUUUsQUFDWDsyQkFUUyxBQVNNLEFBQ2Y7MkJBVlMsQUFVTSxBQUNmO3dCQVhTLEFBV0csQUFDWjt3QkFaUyxBQVlHLEFBQ1o7NEJBYlMsQUFhTyxBQUNoQjs2QkFoQlcsQUFFZixBQUFhLEFBY1E7QUFkUixBQUNUO2VBZVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQU9RO3lC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O2dDQUhKLEFBQ0EsQUFFSSxBQUdKO0FBSEk7aUNBR0gsY0FBRCxzQkFBQSxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw2Q0FBQSxBQUFDLHdDQUFNLE9BQU8sS0FBQSxBQUFLLE1BQW5CLEFBQXlCLEFBQ3pCO3NCQURBLEFBQ08sQUFDSDswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLFlBQVksTUFBQSxBQUFNLE9BQTNDLEFBQVMsQUFBYyxBQUEyQjtBQUZoRTs4QkFBQTtnQ0FSSixBQU1BLEFBRUksQUFJSjtBQUpJO2lDQUlILGNBQUQsc0JBQUEsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsOENBQUEsQUFBQyx3Q0FBTSxPQUFPLEtBQUEsQUFBSyxNQUFuQixBQUF5QixBQUNyQjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLGdCQUFnQixNQUFBLEFBQU0sT0FBL0MsQUFBUyxBQUFjLEFBQStCO0FBRHBFOzhCQUFBO2dDQWRKLEFBWUEsQUFFSSxBQUdKO0FBSEk7aUNBR0osQUFBQyx5Q0FBTyxNQUFSLEFBQWE7OEJBQWI7Z0NBQUE7QUFBQTtlQXJGWixBQUVJLEFBa0VRLEFBaUJBLEFBU2Y7Ozs7O0EsQUE1STBCOztBQWdKL0I7QUFDQSxBQUNBOzs7a0JBQUEsQUFBZSIsImZpbGUiOiJyZWdpc3RyYXRpb24uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VpbWFuYWx3YWhoYWJpL0Rlc2t0b3AvUmVjeWNsZUNoYWluIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/eimanalwahhabi/Desktop/RecycleChain/pages/registration.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/eimanalwahhabi/Desktop/RecycleChain/pages/registration.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/registration")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zYjg2MTFjZGFlOGY3YzFhYWFiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVnaXN0cmF0aW9uLmpzP2QzMzNlN2QiXSwic291cmNlc0NvbnRlbnQiOlsiLypcblRoaXMgaXMgdGhlIHJlZ2lzdHJhdGlvbiBwYWdlIHdoZXJlIHRoZSBnb3Zlcm1lbnQgZW50aXR5IHJlZ2lzdGVycyBzdGFrZWhvbGRlcnMgXG5Db250YWN0IHVzZWQgaGVyZTogYW4gaW5zdGFuY2Ugb2YgcmVnaXN0ZXIuc29sIFxuVG8gcnVuIHRoZSBhcHAsIHVzZSB0aGUgY29tbWFuZCBucG0gcnVuIGRldlxuKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1lbnUsIEZvcm0sIEJ1dHRvbiwgSW5wdXQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbi8vaW1wb3J0IHJlZ2lzdGVyQ29udHJhY3QgZnJvbSAnLi4vZXRoZXJldW0vcmVnaXN0ZXInOyAvLyBpbXBvcnQgU0MgaW5zdGFuY2VcblxuY2xhc3MgcmVnaXN0cmF0aW9uUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykgeyAvLyBtaWdodCBub3QgYmUgbmVlZGVkIFxuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RNYW51ZmFjdHVyZXI6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0U29ydGluZ0ZhY2lsaXR5OiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdEJ1eWVyOiBmYWxzZSxcbiAgICAgICAgICAgIG1hbnVmYWN0dXJlck5hbWU6ICcnLFxuICAgICAgICAgICAgbWFudWZhY3R1cmVyQWRkcjogJycsXG4gICAgICAgICAgICBtYW51ZmFjdHVyZXJMb2NhdGlvbjogJycsXG4gICAgICAgICAgICBidXllck5hbWU6ICcnLFxuICAgICAgICAgICAgYnV5ZXJBZGRyOiAnJyxcbiAgICAgICAgICAgIGJ1eWVyTG9jYXRpb246ICcnLFxuICAgICAgICAgICAgYnV5ZXJCdXNpbmVzczogJycsXG4gICAgICAgICAgICBzZWxsZXJOYW1lOiAnJyxcbiAgICAgICAgICAgIHNlbGxlckFkZHI6ICcnLFxuICAgICAgICAgICAgc2VsbGVyTG9jYXRpb246ICcnLFxuICAgICAgICAgICAgc29ydGluZ01hY2hpbmVzOiBbXVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAvL1RoaXMgaXMgbm90IGV4ZWN1dGVkIG9uIHRoZSBzZXJ2ZXIgXG4gICAgICAgIC8vYXdhaXQgcmVnaXN0ZXJDb250cmFjdC5tZXRob2RzLnJlZ2lzdGVyTWFudWZhY3R1ZXJlci5zZW5kKCk7IFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBzZWxlY3RNYW51ZmFjdHVyZXIsXG4gICAgICAgICAgICBzZWxlY3RTb3J0aW5nRmFjaWxpdHksXG4gICAgICAgICAgICBzZWxlY3RCdXllcixcbiAgICAgICAgICAgIG1hbnVmYWN0dXJlck5hbWUsXG4gICAgICAgICAgICBtYW51ZmFjdHVyZXJBZGRyLFxuICAgICAgICAgICAgbWFudWZhY3R1cmVyTG9jYXRpb24sXG4gICAgICAgICAgICBidXllck5hbWUsXG4gICAgICAgICAgICBidXllckFkZHIsXG4gICAgICAgICAgICBidXllckxvY2F0aW9uLFxuICAgICAgICAgICAgYnV5ZXJCdXNpbmVzcyxcbiAgICAgICAgICAgICBzZWxsZXJOYW1lLFxuICAgICAgICAgICAgc2VsbGVyQWRkcixcbiAgICAgICAgICAgIHNlbGxlckxvY2F0aW9uLFxuICAgICAgICAgICAgc29ydGluZ01hY2hpbmVzfSA9IHRoaXMuc3RhdGVcblxuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2VsZWN0aW9uIFwiPlxuICAgICAgICAgICAgICAgIDxoMT5XZWxjb21lIHRvIFJlZ2lzdHJhdGlvbiBQYWdlPC9oMT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjEvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxoMj5TZWxlY3QgYSBzdGFrZWhvbGRlciB0byByZWdpc3Rlcjo8L2gyPlxuICAgICAgICAgICAgICAgIDxNZW51IHdpZHRocz17M30+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nTWFudWZhY3R1cmVyJyBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VsZWN0TWFudWZhY3R1cmVyOiB0cnVlLCBzZWxlY3RTb3J0aW5nRmFjaWxpdHk6IGZhbHNlLCBzZWxlY3RCdXllcjogZmFsc2UgfSl9ID4gTWFudWZhY3R1cmVyPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nU29ydGluZ0ZhY2lsaXR5JyBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VsZWN0U29ydGluZ0ZhY2lsaXR5OiB0cnVlLCBzZWxlY3RNYW51ZmFjdHVyZXI6IGZhbHNlLCBzZWxlY3RCdXllcjogZmFsc2UgfSl9ID4gU29ydGluZyBGYWNpbGl0eTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J0J1eWVyJyBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VsZWN0QnV5ZXI6IHRydWUsIHNlbGVjdFNvcnRpbmdGYWNpbGl0eTogZmFsc2UsIHNlbGVjdE1hbnVmYWN0dXJlcjogZmFsc2UgfSl9ID4gQnV5ZXIgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9NZW51PlxuXG4gICAgICAgICAgICAgICAge3NlbGVjdE1hbnVmYWN0dXJlciAmJiAoXG5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hbnVmYWN0dXJlciBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUubWFudWZhY3R1cmVyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBtYW51ZmFjdHVyZXJOYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hbnVmYWN0dXJlciBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUubWFudWZhY3R1cmVyQWRkcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uID0gXCJldGhlcmV1bVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgbWFudWZhY3R1cmVyQWRkcjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYW51ZmFjdHVyZXIgTG9jYXRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5tYW51ZmFjdHVyZXJMb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBtYW51ZmFjdHVyZXJMb2NhdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnPlJlZ2lzdGVyPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cblxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7c2VsZWN0QnV5ZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkJ1eWVyIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5idXllck5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgYnV5ZXJOYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkJ1eWVyIEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5idXllckFkZHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgaWNvbiA9IFwiZXRoZXJldW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IGJ1eWVyQWRkcjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5CdXllciBCdXNpbmVzcyBUeXBlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuQnV5ZXJCdXNpbmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBidXllckJ1c2luZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkJ1eWVyIExvY2F0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuYnV5ZXJMb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBidXllckxvY2F0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3N1Ym1pdCc+UmVnaXN0ZXI8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuXG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHtzZWxlY3RTb3J0aW5nRmFjaWxpdHkmJiAoXG5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Tb3J0aW5nIEZhY2lsaXR5IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnNlbGxlck5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxsZXJOYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNvcnRpbmcgRmFjaWxpdHkgQWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuc2VsbGVyQWRkcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24gPSBcImV0aGVyZXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGxlckFkZHI6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U29ydGluZyBGYWNpbGl0eSBMb2NhdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuc2VsbGVyTG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxsZXJMb2NhdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0Jz5SZWdpc3RlcjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cblxuXG4gICAgICAgICAgICAgICAgKX1cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuLy9BdCB0aGUgZW5kIG9mIGVhY2ggcGFnZSwgYSBjb21wb25lbnQgaXMgZXhwZWN0ZWQgdG8gYmUgcmV0dXJuZWQgXG4vLyBJZiBub3QsIE5leHQuanMgdGhyb3dzIGFuIGVycm9yIFxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0cmF0aW9uUGFnZTsgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvcmVnaXN0cmF0aW9uLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7QUFDQTs7O0FBQUE7QUFDQTs7OztBQVJBOzs7Ozs7QUFTQTtBQUNBOztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFiQTtBQWVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BO0FBQUE7QUFDQTtBQWVBO0FBYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQURBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBREE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUtBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBREE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUlBO0FBSkE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQURBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBS0E7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBREE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQVNBOzs7Ozs7O0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9