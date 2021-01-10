'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var QrReader = require('react-qr-reader');
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