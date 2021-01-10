webpackHotUpdate(5,{

/***/ 905:
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

var _semanticUiReact = __webpack_require__(906);

var _web = __webpack_require__(812);

var _web2 = _interopRequireDefault(_web);

var _tracking = __webpack_require__(1464);

var _tracking2 = _interopRequireDefault(_tracking);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/eimanalwahhabi/Desktop/RecycleChain/pages/recycler.js?entry';
/*
This is the recycler page where a recycler scans the QR codes and view rewards
Contact used here: an instance of tracking.sol 
To run the app, use the command npm run dev
*/

var QrReader = __webpack_require__(1466);
// import SC instance

var recyclerPage = function (_Component) {
    (0, _inherits3.default)(recyclerPage, _Component);

    function recyclerPage(props) {
        var _this2 = this;

        (0, _classCallCheck3.default)(this, recyclerPage);

        var _this = (0, _possibleConstructorReturn3.default)(this, (recyclerPage.__proto__ || (0, _getPrototypeOf2.default)(recyclerPage)).call(this, props));

        _this.handleScan = function (data) {
            if (data) {
                _this.setState({ result: data });
            }
        };

        _this.handleError = function (err) {
            console.error(err);
        };

        _this.onScan = function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                if (_this.state.qr === false) _this.setState({ qr: true });else _this.setState({ qr: false });

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }();

        _this.state = {
            rewards: 0,
            bottleStatus: '',
            result: '',
            qr: false
        };
        return _this;
    }

    (0, _createClass3.default)(recyclerPage, [{
        key: 'renderQRReader',
        value: function renderQRReader() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(QrReader, {
                delay: 300,
                onError: this.handleError,
                onScan: this.handleScan,
                style: { width: '100%' },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, this.state.result));
        }
    }, {
        key: 'renderBottlesTable',
        value: function renderBottlesTable() {

            return _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, this.state.result), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Completed'));
        }
    }, {
        key: 'render',
        value: function render() {
            var qr = this.state.qr;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, 'Welcome to Recycler\'s Page'), _react2.default.createElement('link', { rel: 'stylesheet',
                href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }), _react2.default.createElement(_semanticUiReact.Card, { header: 'Rewards', description: this.state.rewards, meta: 'ETH', centered: 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }), _react2.default.createElement('div', { className: 'Scanner', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, 'Dispose a Plastic Bottle '), _react2.default.createElement(_semanticUiReact.Button, { className: 'QrReader', onClick: this.onScan, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, ' Scan QR Code'), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, ' ', this.state.qr === true && this.state.result === '' ? _react2.default.createElement(QrReader, {
                delay: this.state.delay,
                onError: this.handleError,
                onScan: this.handleScan,
                style: { width: "25%" },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }) : '', ' ')), _react2.default.createElement('div', { className: 'BottleTable', style: { 'width': '40%', 'margin-left': 'auto', 'margin-right': 'auto' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, _react2.default.createElement(_semanticUiReact.Table, { unstackable: true, size: 'small', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, 'Plasitc Bottle Address'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, 'Status'))), _react2.default.createElement(_semanticUiReact.Table.Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }, this.renderBottlesTable()))));
        }
    }]);

    return recyclerPage;
}(_react.Component);

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 


exports.default = recyclerPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlY3ljbGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIlRhYmxlIiwiQnV0dG9uIiwiUXJSZWFkZXIiLCJyZXF1aXJlIiwid2ViMyIsInRyYWNraW5nQ29udHJhY3QiLCJyZWN5Y2xlclBhZ2UiLCJwcm9wcyIsImhhbmRsZVNjYW4iLCJkYXRhIiwic2V0U3RhdGUiLCJyZXN1bHQiLCJoYW5kbGVFcnJvciIsImNvbnNvbGUiLCJlcnJvciIsImVyciIsIm9uU2NhbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdGF0ZSIsInFyIiwicmV3YXJkcyIsImJvdHRsZVN0YXR1cyIsIndpZHRoIiwiZGVsYXkiLCJyZW5kZXJCb3R0bGVzVGFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU87O0FBRXRCLEFBQU8sQUFBVTs7OztBLEFBQ2pCLEFBQU8sQUFBc0I7Ozs7Ozs7QUFWN0I7Ozs7OztBQVFBLElBQUksV0FBSixBQUFJLEFBQVc7QUFFc0M7O0ksQUFFL0M7MENBRUY7OzBCQUFBLEFBQVksT0FBTztxQkFBQTs7NENBQUE7O3NKQUFBLEFBQ1Q7O2NBRFMsQUFVbkIsYUFBYSxnQkFBUSxBQUNqQjtnQkFBQSxBQUFJLE1BQU0sQUFDTjtzQkFBQSxBQUFLLFNBQVMsRUFBRSxRQUFoQixBQUFjLEFBQVUsQUFDM0I7QUFDSjtBQWRrQjs7Y0FBQSxBQWdCbkIsY0FBYyxlQUFPLEFBQ2pCO29CQUFBLEFBQVEsTUFBUixBQUFjLEFBQ2pCO0FBbEJrQjs7Y0FBQSxBQW9CbkIscUJBcEJtQjtnR0FvQlYsaUJBQUEsQUFBTyxPQUFQOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNMO3NDQUFBLEFBQU0sQUFDTjtvQ0FBSSxNQUFBLEFBQUssTUFBTCxBQUFXLE9BQWYsQUFBc0IsT0FDbEIsTUFBQSxBQUFLLFNBQVMsRUFBRSxJQURwQixBQUNJLEFBQWMsQUFBTSxhQUVwQixNQUFBLEFBQUssU0FBUyxFQUFFLElBTGYsQUFLRCxBQUFjLEFBQU07O2lDQUxuQjtpQ0FBQTtnREFBQTs7QUFBQTs0QkFBQTtBQXBCVTs7aUNBQUE7d0NBQUE7QUFBQTtBQUVmOztjQUFBLEFBQUs7cUJBQVEsQUFDQSxBQUNUOzBCQUZTLEFBRUssQUFDZDtvQkFIUyxBQUdELEFBQ1I7Z0JBTlcsQUFFZixBQUFhLEFBSUw7QUFKSyxBQUNUO2VBS1A7Ozs7O3lDQXFCZ0IsQUFDYjttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGdDQUNJLEFBQUM7dUJBQUQsQUFDVyxBQUNQO3lCQUFTLEtBRmIsQUFFa0IsQUFDZDt3QkFBUSxLQUhaLEFBR2lCLEFBQ2I7dUJBQU8sRUFBRSxPQUpiLEFBSVcsQUFBUzs7OEJBSnBCO2dDQURKLEFBQ0ksQUFNQTtBQU5BO0FBQ0ksZ0NBS0osY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsb0JBQUksQUFBSyxNQVJqQixBQUNJLEFBT0ksQUFBZSxBQUkxQjs7Ozs2Q0FFb0IsQUFFakI7O21DQUNLLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQWE7QUFBYjtBQUFBLG9CQUFhLEFBQUssTUFEdEIsQUFDSSxBQUF3QixBQUN4Qix5QkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQUhSLEFBQ0ksQUFFSSxBQUtYOzs7O2lDQUVRO2dCQUFBLEFBRUUsS0FBTSxLQUZSLEFBRWEsTUFGYixBQUVFLEFBRVA7O21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHdFQUFNLEtBQU4sQUFBVSxBQUNOO3NCQURKLEFBQ1M7OzhCQURUO2dDQUZKLEFBRUksQUFJQTtBQUpBO2dDQUlBLEFBQUMsdUNBQUssUUFBTixBQUFhLFdBQVUsYUFBYSxLQUFBLEFBQUssTUFBekMsQUFBK0MsU0FBUyxNQUF4RCxBQUE2RCxPQUFNLFVBQW5FLEFBQTRFOzhCQUE1RTtnQ0FOSixBQU1JLEFBRUE7QUFGQTs7OzhCQUVBO2dDQVJKLEFBUUksQUFDQTtBQURBO0FBQUE7OzhCQUNBO2dDQVRKLEFBU0ksQUFFQTtBQUZBO0FBQUEsZ0NBRUEsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDhDQUFBLEFBQUMseUNBQU8sV0FBUixBQUFrQixZQUFXLFNBQVMsS0FBdEMsQUFBMkM7OEJBQTNDO2dDQUFBO0FBQUE7ZUFGSixBQUVJLEFBQ0Esa0NBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQU8sVUFBQSxBQUFLLE1BQUwsQUFBVyxPQUFYLEFBQWtCLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxXQUFyQyxBQUFnRCxtQ0FBSyxBQUFDO3VCQUNsRCxLQUFBLEFBQUssTUFENEMsQUFDdEMsQUFDbEI7eUJBQVMsS0FGK0MsQUFFMUMsQUFDZDt3QkFBUSxLQUhnRCxBQUczQyxBQUNiO3VCQUFPLEVBQUUsT0FKK0MsQUFJakQsQUFBUzs7OEJBSndDO2dDQUFyRCxBQUFxRDtBQUFBO0FBQ3hELGFBRHdELElBQTVELEFBS0ssSUFuQmIsQUFXSSxBQUdJLEFBUUosdUJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZSxlQUFjLE9BQU8sRUFBRSxTQUFGLEFBQVcsT0FBTyxlQUFsQixBQUFpQyxRQUFRLGdCQUE3RSxBQUFvQyxBQUF5RDs4QkFBN0Y7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsd0NBQU0sYUFBUCxNQUFtQixNQUFuQixBQUF3Qjs4QkFBeEI7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSwyQ0FBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBO0FBQUE7QUFBQSxlQUpaLEFBQ0ksQUFDSSxBQUVJLEFBSVIsNkJBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkFoQ2hCLEFBQ0ksQUFzQkksQUFDSSxBQVFJLEFBQ0ssQUFBSyxBQVU3Qjs7Ozs7QSxBQXpHc0I7O0FBNkczQjtBQUNBLEFBQ0E7OztrQkFBQSxBQUFlIiwiZmlsZSI6InJlY3ljbGVyLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9laW1hbmFsd2FoaGFiaS9EZXNrdG9wL1JlY3ljbGVDaGFpbiJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/eimanalwahhabi/Desktop/RecycleChain/pages/recycler.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/eimanalwahhabi/Desktop/RecycleChain/pages/recycler.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/recycler")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zZTBlZDI4ZWU1NDAwOTdmMTkxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVjeWNsZXIuanM/ZTdhZjZmYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVGhpcyBpcyB0aGUgcmVjeWNsZXIgcGFnZSB3aGVyZSBhIHJlY3ljbGVyIHNjYW5zIHRoZSBRUiBjb2RlcyBhbmQgdmlldyByZXdhcmRzXG5Db250YWN0IHVzZWQgaGVyZTogYW4gaW5zdGFuY2Ugb2YgdHJhY2tpbmcuc29sIFxuVG8gcnVuIHRoZSBhcHAsIHVzZSB0aGUgY29tbWFuZCBucG0gcnVuIGRldlxuKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIFRhYmxlLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG52YXIgUXJSZWFkZXIgPSByZXF1aXJlKCdyZWFjdC1xci1yZWFkZXInKTtcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xuaW1wb3J0IHRyYWNraW5nQ29udHJhY3QgZnJvbSAnLi4vZXRoZXJldW0vdHJhY2tpbmcnOyAvLyBpbXBvcnQgU0MgaW5zdGFuY2VcblxuY2xhc3MgcmVjeWNsZXJQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJld2FyZHM6IDAsXG4gICAgICAgICAgICBib3R0bGVTdGF0dXM6ICcnLFxuICAgICAgICAgICAgcmVzdWx0OiAnJyxcbiAgICAgICAgICAgIHFyOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGhhbmRsZVNjYW4gPSBkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXN1bHQ6IGRhdGF9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUVycm9yID0gZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuXG4gICAgb25TY2FuID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnFyID09PSBmYWxzZSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBxcjogdHJ1ZSB9KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHFyOiBmYWxzZSB9KTtcbiAgICB9O1xuXG5cbiAgICByZW5kZXJRUlJlYWRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFFyUmVhZGVyXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5PXszMDB9XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9e3RoaXMuaGFuZGxlRXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIG9uU2Nhbj17dGhpcy5oYW5kbGVTY2FufVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5yZXN1bHR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJCb3R0bGVzVGFibGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJsZS5Sb3c+XG4gICAgICAgICAgICAgICAgPFRhYmxlLkNlbGw+e3RoaXMuc3RhdGUucmVzdWx0fTwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbD5Db21wbGV0ZWQ8L1RhYmxlLkNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlLlJvdz5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHtxcn0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8gUmVjeWNsZXIncyBQYWdlPC9oMT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjEvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPENhcmQgaGVhZGVyPSdSZXdhcmRzJyBkZXNjcmlwdGlvbj17dGhpcy5zdGF0ZS5yZXdhcmRzfSBtZXRhPSdFVEgnIGNlbnRlcmVkPSd0cnVlJyAvPlxuXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNjYW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkRpc3Bvc2UgYSBQbGFzdGljIEJvdHRsZSA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIlFyUmVhZGVyXCIgb25DbGljaz17dGhpcy5vblNjYW59ID4gU2NhbiBRUiBDb2RlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+IHt0aGlzLnN0YXRlLnFyID09PSB0cnVlICYmIHRoaXMuc3RhdGUucmVzdWx0ID09PSAnJyA/IDxRclJlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9e3RoaXMuc3RhdGUuZGVsYXl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLmhhbmRsZUVycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TY2FuPXt0aGlzLmhhbmRsZVNjYW59XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNSVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAvPiA6ICcnfSA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdCb3R0bGVUYWJsZScgc3R5bGU9e3sgJ3dpZHRoJzogJzQwJScsICdtYXJnaW4tbGVmdCc6ICdhdXRvJywgJ21hcmdpbi1yaWdodCc6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHVuc3RhY2thYmxlIHNpemU9J3NtYWxsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZS5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+UGxhc2l0YyBCb3R0bGUgQWRkcmVzczwvVGFibGUuSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlckNlbGw+U3RhdHVzPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGUuUm93PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZS5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckJvdHRsZXNUYWJsZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5Cb2R5PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuLy9BdCB0aGUgZW5kIG9mIGVhY2ggcGFnZSwgYSBjb21wb25lbnQgaXMgZXhwZWN0ZWQgdG8gYmUgcmV0dXJuZWQgXG4vLyBJZiBub3QsIE5leHQuanMgdGhyb3dzIGFuIGVycm9yIFxuZXhwb3J0IGRlZmF1bHQgcmVjeWNsZXJQYWdlOyBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9yZWN5Y2xlci5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBVkE7Ozs7OztBQVFBO0FBRUE7QUFDQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQWRBO0FBQ0E7QUFlQTtBQUNBO0FBakJBO0FBQ0E7QUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFwQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFLQTs7Ozs7QUFzQkE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUNBOztBQUpBO0FBTUE7QUFOQTtBQUNBOztBQUtBO0FBQUE7QUFBQTtBQUFBOzs7O0FBUUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7O0FBT0E7QUFFQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFEQTtBQUlBO0FBSkE7QUFJQTtBQUFBO0FBRUE7QUFGQTs7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUlBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7O0FBZUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9