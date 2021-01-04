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
            selectBuyer: false
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
                selectBuyer = _state.selectBuyer;

            return _react2.default.createElement('div', { className: 'Selection ', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'Welcome to Registration Page'), _react2.default.createElement('link', { rel: 'stylesheet',
                href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'Select a stakeholder to register:'), _react2.default.createElement(_semanticUiReact.Menu, { widths: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Manufacturer', onClick: function onClick() {
                    return _this2.setState({ selectManufacturer: true, selectSortingFacility: false, selectBuyer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, ' Manufacturer'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'SortingFacility', onClick: function onClick() {
                    return _this2.setState({ selectSortingFacility: true, selectManufacturer: false, selectBuyer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, ' Sorting Facility'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Buyer', onClick: function onClick() {
                    return _this2.setState({ selectBuyer: true, selectSortingFacility: false, selectManufacturer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, ' Buyer ')), selectManufacturer && _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, ' send help!'));
        }
    }]);

    return registrationPage;
}(_react.Component);

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 


exports.default = registrationPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJyZWdpc3RyYXRpb25QYWdlIiwicHJvcHMiLCJzdGF0ZSIsInNlbGVjdE1hbnVmYWN0dXJlciIsInNlbGVjdFNvcnRpbmdGYWNpbGl0eSIsInNlbGVjdEJ1eWVyIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7Ozs7QUFQVDs7Ozs7O0FBU0E7O0ksQUFFTTs4Q0FFRjs7OEJBQUEsQUFBWSxPQUFPOzRDQUFBOzs4SkFBQSxBQUNULFNBRFcsQUFFakI7OztjQUFBLEFBQUs7Z0NBQVEsQUFDVSxBQUNwQjttQ0FGVSxBQUVhLEFBQ3ZCO3lCQUxZLEFBRWYsQUFBYSxBQUdHO0FBSEgsQUFDVjtlQUlOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FPUTt5QkFBQTs7eUJBRTZELEtBRjdELEFBRWtFO2dCQUZsRSxBQUVHLDRCQUZILEFBRUc7Z0JBRkgsQUFFc0IsK0JBRnRCLEFBRXNCO2dCQUZ0QixBQUU2QyxxQkFGN0MsQUFFNkMsQUFFbEQ7O21DQUVJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHlFQUFNLEtBQU4sQUFBVSxBQUNOO3NCQURKLEFBQ1M7OzhCQURUO2dDQUZKLEFBRUksQUFHQTtBQUhBO2dDQUdBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUxKLEFBS0ksQUFDQSxzREFBQSxBQUFDLHVDQUFLLFFBQU4sQUFBYzs4QkFBZDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNLFFBQUssTUFBWCxBQUFnQixnQkFBZSxTQUFTLG1CQUFBOzJCQUFNLE9BQUEsQUFBSyxTQUFTLEVBQUUsb0JBQUYsQUFBc0IsTUFBSyx1QkFBM0IsQUFBa0QsT0FBTyxhQUE3RSxBQUFNLEFBQWMsQUFBc0U7QUFBbEk7OEJBQUE7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSxrQ0FBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxNQUFYLEFBQWdCLG1CQUFrQixTQUFTLG1CQUFBOzJCQUFNLE9BQUEsQUFBSyxTQUFTLEVBQUcsdUJBQUgsQUFBMEIsTUFBTSxvQkFBaEMsQUFBb0QsT0FBTSxhQUE5RSxBQUFNLEFBQWMsQUFBdUU7QUFBdEk7OEJBQUE7Z0NBQUE7QUFBQTtlQUZKLEFBRUksQUFDQSxzQ0FBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxNQUFYLEFBQWdCLFNBQVEsU0FBUyxtQkFBQTsyQkFBTSxPQUFBLEFBQUssU0FBUyxFQUFFLGFBQUYsQUFBZSxNQUFNLHVCQUFyQixBQUE0QyxPQUFNLG9CQUF0RSxBQUFNLEFBQWMsQUFBc0U7QUFBM0g7OEJBQUE7Z0NBQUE7QUFBQTtlQVRSLEFBTUksQUFHSSxBQUdILG1EQUF1QixjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsYUFBQSxFQWRoQyxBQUVJLEFBWTRCLEFBTW5DOzs7OztBLEFBeEMwQjs7QUE0Qy9CO0FBQ0EsQUFDQTs7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmVnaXN0cmF0aW9uLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9laW1hbmFsd2FoaGFiaS9EZXNrdG9wL1JlY3ljbGVDaGFpbiJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS43MTlhZDJlZDgzZmJjZTk4ZWM3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVnaXN0cmF0aW9uLmpzPzU1MTNlYWIiXSwic291cmNlc0NvbnRlbnQiOlsiLypcblRoaXMgaXMgdGhlIHJlZ2lzdHJhdGlvbiBwYWdlIHdoZXJlIHRoZSBnb3Zlcm1lbnQgZW50aXR5IHJlZ2lzdGVycyBzdGFrZWhvbGRlcnMgXG5Db250YWN0IHVzZWQgaGVyZTogYW4gaW5zdGFuY2Ugb2YgcmVnaXN0ZXIuc29sIFxuVG8gcnVuIHRoZSBhcHAsIHVzZSB0aGUgY29tbWFuZCBucG0gcnVuIGRldlxuKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbi8vaW1wb3J0IHJlZ2lzdGVyQ29udHJhY3QgZnJvbSAnLi4vZXRoZXJldW0vcmVnaXN0ZXInOyAvLyBpbXBvcnQgU0MgaW5zdGFuY2VcblxuY2xhc3MgcmVnaXN0cmF0aW9uUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykgeyAvLyBtaWdodCBub3QgYmUgbmVlZGVkIFxuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgIHNlbGVjdE1hbnVmYWN0dXJlcjogZmFsc2UsXG4gICAgICAgICAgIHNlbGVjdFNvcnRpbmdGYWNpbGl0eTogZmFsc2UsXG4gICAgICAgICAgIHNlbGVjdEJ1eWVyOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAvL1RoaXMgaXMgbm90IGV4ZWN1dGVkIG9uIHRoZSBzZXJ2ZXIgXG4gICAgICAgIC8vYXdhaXQgcmVnaXN0ZXJDb250cmFjdC5tZXRob2RzLnJlZ2lzdGVyTWFudWZhY3R1ZXJlci5zZW5kKCk7IFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7IHNlbGVjdE1hbnVmYWN0dXJlcixzZWxlY3RTb3J0aW5nRmFjaWxpdHksIHNlbGVjdEJ1eWVyIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTZWxlY3Rpb24gXCI+XG4gICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8gUmVnaXN0cmF0aW9uIFBhZ2U8L2gxPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMS9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGgyPlNlbGVjdCBhIHN0YWtlaG9sZGVyIHRvIHJlZ2lzdGVyOjwvaDI+XG4gICAgICAgICAgICAgICAgPE1lbnUgd2lkdGhzPXszfT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdNYW51ZmFjdHVyZXInIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RNYW51ZmFjdHVyZXI6IHRydWUsc2VsZWN0U29ydGluZ0ZhY2lsaXR5OiBmYWxzZSwgc2VsZWN0QnV5ZXI6IGZhbHNlICB9KX0gPiBNYW51ZmFjdHVyZXI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdTb3J0aW5nRmFjaWxpdHknIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyAgc2VsZWN0U29ydGluZ0ZhY2lsaXR5OiB0cnVlLCBzZWxlY3RNYW51ZmFjdHVyZXI6IGZhbHNlLHNlbGVjdEJ1eWVyOiBmYWxzZSAgICB9KX0gPiBTb3J0aW5nIEZhY2lsaXR5PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nQnV5ZXInIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RCdXllcjogdHJ1ZSwgc2VsZWN0U29ydGluZ0ZhY2lsaXR5OiBmYWxzZSxzZWxlY3RNYW51ZmFjdHVyZXI6IGZhbHNlICB9KX0gPiBCdXllciA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8L01lbnU+XG5cbiAgICAgICAgICAgICAgICB7c2VsZWN0TWFudWZhY3R1cmVyICYmICg8aDM+IHNlbmQgaGVscCE8L2gzPil9XG5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuLy9BdCB0aGUgZW5kIG9mIGVhY2ggcGFnZSwgYSBjb21wb25lbnQgaXMgZXhwZWN0ZWQgdG8gYmUgcmV0dXJuZWQgXG4vLyBJZiBub3QsIE5leHQuanMgdGhyb3dzIGFuIGVycm9yIFxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0cmF0aW9uUGFnZTsgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvcmVnaXN0cmF0aW9uLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7QUFDQTs7O0FBQUE7QUFDQTs7OztBQVJBOzs7Ozs7QUFTQTtBQUNBOztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFEQTtBQUdBO0FBSEE7QUFHQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9