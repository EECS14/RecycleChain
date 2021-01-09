'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _tracking = require('../ethereum/tracking');

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