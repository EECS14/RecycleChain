webpackHotUpdate(5,{

/***/ 1198:
false,

/***/ 1199:
false,

/***/ 1200:
false,

/***/ 1201:
false,

/***/ 1202:
false,

/***/ 1203:
false,

/***/ 1204:
false,

/***/ 1205:
false,

/***/ 1206:
false,

/***/ 1207:
false,

/***/ 1208:
false,

/***/ 1209:
false,

/***/ 1210:
false,

/***/ 1211:
false,

/***/ 1212:
false,

/***/ 1213:
false,

/***/ 1214:
false,

/***/ 1215:
false,

/***/ 1216:
false,

/***/ 1217:
false,

/***/ 426:
false,

/***/ 812:
false,

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _web = __webpack_require__(813);

var _web2 = _interopRequireDefault(_web);

var _tracking = __webpack_require__(1484);

var _tracking2 = _interopRequireDefault(_tracking);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/eimanalwahhabi/Desktop/RecycleChain/pages/recycler.js?entry';
/*
This is the recycler page where a recycler scans the QR codes and view rewards
Contact used here: an instance of tracking.sol 
To run the app, use the command npm run dev
*/

//if(!config.isServer) { var QrReader = require('react-qr-reader'); }
// import SC instance

var recyclerPage = function (_Component) {
    (0, _inherits3.default)(recyclerPage, _Component);

    function recyclerPage(props) {
        (0, _classCallCheck3.default)(this, recyclerPage);

        var _this = (0, _possibleConstructorReturn3.default)(this, (recyclerPage.__proto__ || (0, _getPrototypeOf2.default)(recyclerPage)).call(this, props));

        _this.handleScan = function (data) {
            if (data) {
                _this.setState({
                    result: data
                });
            }
        };

        _this.handleError = function (err) {
            console.error(err);
        };

        _this.state = {
            rewards: 0,
            bottleAddr: '',
            bottleStatus: '',
            result: ''
        };

        return _this;
    }

    (0, _createClass3.default)(recyclerPage, [{
        key: 'renderQRReader',
        value: function renderQRReader() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(QrReader, {
                delay: 300,
                onError: this.handleError,
                onScan: this.handleScan,
                style: { width: '100%' },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, this.state.result));
        }
    }, {
        key: 'renderBottlesTable',
        value: function renderBottlesTable() {

            return _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'John'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'Completed'));
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'Welcome to Recycler\'s Page'), _react2.default.createElement('link', { rel: 'stylesheet',
                href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }), _react2.default.createElement(_semanticUiReact.Card, { header: 'Rewards', description: this.state.rewards, meta: 'ETH', centered: 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }), _react2.default.createElement('div', { className: 'Scanner', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, 'Dispose a Plastic Bottle '), _react2.default.createElement(Button, { className: 'QrReader', onClick: _react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 84
                    }
                }, _react2.default.createElement(QrReader, {
                    delay: 300,
                    onError: this.handleError,
                    onScan: this.handleScan,
                    style: { width: '100%' },
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 85
                    }
                }), _react2.default.createElement('p', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 91
                    }
                }, this.state.result)), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, ' Scan QR Code')), _react2.default.createElement('div', { className: 'BottleTable', style: { 'width': '40%', 'margin-left': 'auto', 'margin-right': 'auto' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement(_semanticUiReact.Table, { unstackable: true, size: 'small', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, 'Plasitc Bottle Address'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, 'Status'))), _react2.default.createElement(_semanticUiReact.Table.Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, this.renderBottlesTable()))));
        }
    }]);

    return recyclerPage;
}(_react.Component);

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 


exports.default = recyclerPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlY3ljbGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIlRhYmxlIiwid2ViMyIsInRyYWNraW5nQ29udHJhY3QiLCJyZWN5Y2xlclBhZ2UiLCJwcm9wcyIsImhhbmRsZVNjYW4iLCJkYXRhIiwic2V0U3RhdGUiLCJyZXN1bHQiLCJoYW5kbGVFcnJvciIsImNvbnNvbGUiLCJlcnJvciIsImVyciIsInN0YXRlIiwicmV3YXJkcyIsImJvdHRsZUFkZHIiLCJib3R0bGVTdGF0dXMiLCJ3aWR0aCIsInJlbmRlckJvdHRsZXNUYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUVmLEFBQU8sQUFBVTs7OztBLEFBQ2pCLEFBQU8sQUFBc0I7Ozs7Ozs7QUFWN0I7Ozs7OztBQVFBO0FBRXFEOztJLEFBRS9DOzBDQUVGOzswQkFBQSxBQUFZLE9BQU87NENBQUE7O3NKQUFBLEFBQ1Q7O2NBRFMsQUFZbkIsYUFBYSxnQkFBUSxBQUNqQjtnQkFBQSxBQUFJLE1BQU0sQUFDTjtzQkFBQSxBQUFLOzRCQUFMLEFBQWMsQUFDRixBQUVmO0FBSGlCLEFBQ1Y7QUFHWDtBQWxCa0I7O2NBQUEsQUFvQm5CLGNBQWMsZUFBTyxBQUNqQjtvQkFBQSxBQUFRLE1BQVIsQUFBYyxBQUNqQjtBQXRCa0IsQUFFZjs7Y0FBQSxBQUFLO3FCQUFRLEFBQ0EsQUFDVDt3QkFGUyxBQUVHLEFBQ1o7MEJBSFMsQUFHSyxBQUNkO29CQU5XLEFBRWYsQUFBYSxBQUlEO0FBSkMsQUFDVDs7ZUFPUDs7Ozs7eUNBZWdCLEFBQ2I7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxnQ0FDSSxBQUFDO3VCQUFELEFBQ1csQUFDUDt5QkFBUyxLQUZiLEFBRWtCLEFBQ2Q7d0JBQVEsS0FIWixBQUdpQixBQUNiO3VCQUFPLEVBQUUsT0FKYixBQUlXLEFBQVM7OzhCQUpwQjtnQ0FESixBQUNJLEFBTUE7QUFOQTtBQUNJLGdDQUtKLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUk7QUFBSjtBQUFBLG9CQUFJLEFBQUssTUFSakIsQUFDSSxBQU9JLEFBQWUsQUFJMUI7Ozs7NkNBRW9CLEFBRWpCOzttQ0FDSyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ssY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EseUJBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQTtBQUFBO0FBQUEsZUFIUixBQUNJLEFBRUksQUFLWDs7OztpQ0FFUSxBQUVMOzttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx3RUFBTSxLQUFOLEFBQVUsQUFDTjtzQkFESixBQUNTOzs4QkFEVDtnQ0FGSixBQUVJLEFBSUE7QUFKQTtnQ0FJQSxBQUFDLHVDQUFLLFFBQU4sQUFBYSxXQUFVLGFBQWEsS0FBQSxBQUFLLE1BQXpDLEFBQStDLFNBQVMsTUFBeEQsQUFBNkQsT0FBTSxVQUFuRSxBQUE0RTs4QkFBNUU7Z0NBTkosQUFNSSxBQUVBO0FBRkE7Ozs4QkFFQTtnQ0FSSixBQVFJLEFBQ0E7QUFEQTtBQUFBOzs4QkFDQTtnQ0FUSixBQVNJLEFBRUE7QUFGQTtBQUFBLGdDQUVBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw4Q0FBQyxjQUFELFVBQVEsV0FBUixBQUFrQixZQUFXLHlCQUM3QixjQUFBOztrQ0FBQTtvQ0FBQSxBQUNJO0FBREo7QUFBQSxpQkFBQSxnQ0FDSSxBQUFDOzJCQUFELEFBQ1csQUFDUDs2QkFBUyxLQUZiLEFBRWtCLEFBQ2Q7NEJBQVEsS0FIWixBQUdpQixBQUNiOzJCQUFPLEVBQUUsT0FKYixBQUlXLEFBQVM7O2tDQUpwQjtvQ0FESixBQUNJLEFBTUE7QUFOQTtBQUNJLG9DQUtKLGNBQUE7O2tDQUFBO29DQUFBLEFBQUk7QUFBSjtBQUFBLHdCQUFJLEFBQUssTUFSYixBQUNBLEFBT0ksQUFBZTs4QkFSbkI7Z0NBQUE7QUFBQTtlQWJSLEFBV0ksQUFFSSxBQVlKLG1DQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWUsZUFBYyxPQUFPLEVBQUUsU0FBRixBQUFXLE9BQU8sZUFBbEIsQUFBaUMsUUFBUSxnQkFBN0UsQUFBb0MsQUFBeUQ7OEJBQTdGO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLHdDQUFNLGFBQVAsTUFBbUIsTUFBbkIsQUFBd0I7OEJBQXhCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsMkNBQUMsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQTtBQUFBO0FBQUEsZUFKWixBQUNJLEFBQ0ksQUFFSSxBQUlSLDZCQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFDSztBQURMO0FBQUEsb0JBbkNoQixBQUNJLEFBeUJJLEFBQ0ksQUFRSSxBQUNLLEFBQUssQUFVN0I7Ozs7O0EsQUF0R3NCOztBQTBHM0I7QUFDQSxBQUNBOzs7a0JBQUEsQUFBZSIsImZpbGUiOiJyZWN5Y2xlci5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWltYW5hbHdhaGhhYmkvRGVza3RvcC9SZWN5Y2xlQ2hhaW4ifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xZWZjNzYwMzk0MDg0MDcwMzZmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVjeWNsZXIuanM/OTI5ODIzMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuVGhpcyBpcyB0aGUgcmVjeWNsZXIgcGFnZSB3aGVyZSBhIHJlY3ljbGVyIHNjYW5zIHRoZSBRUiBjb2RlcyBhbmQgdmlldyByZXdhcmRzXG5Db250YWN0IHVzZWQgaGVyZTogYW4gaW5zdGFuY2Ugb2YgdHJhY2tpbmcuc29sIFxuVG8gcnVuIHRoZSBhcHAsIHVzZSB0aGUgY29tbWFuZCBucG0gcnVuIGRldlxuKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcmQsIFRhYmxlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuLy9pZighY29uZmlnLmlzU2VydmVyKSB7IHZhciBRclJlYWRlciA9IHJlcXVpcmUoJ3JlYWN0LXFyLXJlYWRlcicpOyB9XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCB0cmFja2luZ0NvbnRyYWN0IGZyb20gJy4uL2V0aGVyZXVtL3RyYWNraW5nJzsgLy8gaW1wb3J0IFNDIGluc3RhbmNlXG5cbmNsYXNzIHJlY3ljbGVyUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICByZXdhcmRzOiAwLFxuICAgICAgICAgICAgYm90dGxlQWRkcjogJycsXG4gICAgICAgICAgICBib3R0bGVTdGF0dXM6ICcnLFxuICAgICAgICAgICAgcmVzdWx0OiAnJ1xuICAgICAgICB9O1xuXG5cbiAgICB9XG5cbiAgICBoYW5kbGVTY2FuID0gZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICByZXN1bHQ6IGRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3IgPSBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG5cblxuICAgIHJlbmRlclFSUmVhZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UXJSZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezMwMH1cbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17dGhpcy5oYW5kbGVFcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgb25TY2FuPXt0aGlzLmhhbmRsZVNjYW59XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLnJlc3VsdH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlckJvdHRsZXNUYWJsZSgpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICA8VGFibGUuQ2VsbD5Kb2huPC9UYWJsZS5DZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZS5DZWxsPkNvbXBsZXRlZDwvVGFibGUuQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGUuUm93PlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8gUmVjeWNsZXIncyBQYWdlPC9oMT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjEvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPENhcmQgaGVhZGVyPSdSZXdhcmRzJyBkZXNjcmlwdGlvbj17dGhpcy5zdGF0ZS5yZXdhcmRzfSBtZXRhPSdFVEgnIGNlbnRlcmVkPSd0cnVlJyAvPlxuXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNjYW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkRpc3Bvc2UgYSBQbGFzdGljIEJvdHRsZSA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIlFyUmVhZGVyXCIgb25DbGljaz17KFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFFyUmVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezMwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLmhhbmRsZUVycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2Nhbj17dGhpcy5oYW5kbGVTY2FufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5yZXN1bHR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfSA+IFNjYW4gUVIgQ29kZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JvdHRsZVRhYmxlJyBzdHlsZT17eyAnd2lkdGgnOiAnNDAlJywgJ21hcmdpbi1sZWZ0JzogJ2F1dG8nLCAnbWFyZ2luLXJpZ2h0JzogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgdW5zdGFja2FibGUgc2l6ZT0nc21hbGwnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuUm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5QbGFzaXRjIEJvdHRsZSBBZGRyZXNzPC9UYWJsZS5IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUuSGVhZGVyQ2VsbD5TdGF0dXM8L1RhYmxlLkhlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZS5Sb3c+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGUuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQm90dGxlc1RhYmxlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlLkJvZHk+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG4vL0F0IHRoZSBlbmQgb2YgZWFjaCBwYWdlLCBhIGNvbXBvbmVudCBpcyBleHBlY3RlZCB0byBiZSByZXR1cm5lZCBcbi8vIElmIG5vdCwgTmV4dC5qcyB0aHJvd3MgYW4gZXJyb3IgXG5leHBvcnQgZGVmYXVsdCByZWN5Y2xlclBhZ2U7IFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3JlY3ljbGVyLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBVkE7Ozs7OztBQVFBO0FBRUE7QUFDQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUdBO0FBRkE7QUFHQTtBQWxCQTtBQUNBO0FBbUJBO0FBQ0E7QUFuQkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUNBO0FBTUE7Ozs7O0FBZ0JBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTs7QUFKQTtBQU1BO0FBTkE7QUFDQTs7QUFLQTtBQUFBO0FBQUE7QUFBQTs7OztBQVFBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7OztBQVNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQURBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFFQTtBQUZBOzs7QUFFQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7O0FBSkE7QUFNQTtBQU5BO0FBQ0E7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQUFBO0FBQUE7QUFZQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7QUFlQTtBQUVBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=