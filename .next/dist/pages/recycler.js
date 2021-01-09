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
                _this.setState({
                    result: data
                });
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
                    lineNumber: 50
                }
            }, _react2.default.createElement(QrReader, {
                delay: 300,
                onError: this.handleError,
                onScan: this.handleScan,
                style: { width: '100%' },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, this.state.result));
        }
    }, {
        key: 'renderBottlesTable',
        value: function renderBottlesTable() {

            return _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'John'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
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
                    lineNumber: 80
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, 'Welcome to Recycler\'s Page'), _react2.default.createElement('link', { rel: 'stylesheet',
                href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }), _react2.default.createElement(_semanticUiReact.Card, { header: 'Rewards', description: this.state.rewards, meta: 'ETH', centered: 'true', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }), _react2.default.createElement('div', { className: 'Scanner', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, 'Dispose a Plastic Bottle '), _react2.default.createElement(_semanticUiReact.Button, { className: 'QrReader', onClick: this.onScan, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, ' Scan QR Code'), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, ' ', this.state.qr === true && this.state.result === '' ? _react2.default.createElement(QrReader, {
                delay: this.state.delay,
                onError: this.handleError,
                onScan: this.handleScan,
                style: { width: "25%" },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }) : '', ' ')), _react2.default.createElement('div', { className: 'BottleTable', style: { 'width': '40%', 'margin-left': 'auto', 'margin-right': 'auto' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, _react2.default.createElement(_semanticUiReact.Table, { unstackable: true, size: 'small', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, 'Plasitc Bottle Address'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }, 'Status'))), _react2.default.createElement(_semanticUiReact.Table.Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, this.renderBottlesTable()))));
        }
    }]);

    return recyclerPage;
}(_react.Component);

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 


exports.default = recyclerPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlY3ljbGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIlRhYmxlIiwiQnV0dG9uIiwiUXJSZWFkZXIiLCJyZXF1aXJlIiwid2ViMyIsInRyYWNraW5nQ29udHJhY3QiLCJyZWN5Y2xlclBhZ2UiLCJwcm9wcyIsImhhbmRsZVNjYW4iLCJkYXRhIiwic2V0U3RhdGUiLCJyZXN1bHQiLCJoYW5kbGVFcnJvciIsImNvbnNvbGUiLCJlcnJvciIsImVyciIsIm9uU2NhbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdGF0ZSIsInFyIiwicmV3YXJkcyIsImJvdHRsZVN0YXR1cyIsIndpZHRoIiwiZGVsYXkiLCJyZW5kZXJCb3R0bGVzVGFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU87O0FBRXRCLEFBQU8sQUFBVTs7OztBLEFBQ2pCLEFBQU8sQUFBc0I7Ozs7Ozs7QUFWN0I7Ozs7OztBQVFBLElBQUksV0FBSixBQUFJLEFBQVc7QUFFc0M7O0ksQUFFL0M7MENBRUY7OzBCQUFBLEFBQVksT0FBTztxQkFBQTs7NENBQUE7O3NKQUFBLEFBQ1Q7O2NBRFMsQUFZbkIsYUFBYSxnQkFBUSxBQUNqQjtnQkFBQSxBQUFJLE1BQU0sQUFDTjtzQkFBQSxBQUFLOzRCQUFMLEFBQWMsQUFDRixBQUVmO0FBSGlCLEFBQ1Y7QUFHWDtBQWxCa0I7O2NBQUEsQUFvQm5CLGNBQWMsZUFBTyxBQUNqQjtvQkFBQSxBQUFRLE1BQVIsQUFBYyxBQUNqQjtBQXRCa0I7O2NBQUEsQUF3Qm5CLHFCQXhCbUI7Z0dBd0JWLGlCQUFBLEFBQU8sT0FBUDs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDTDtzQ0FBQSxBQUFNLEFBQ047b0NBQUksTUFBQSxBQUFLLE1BQUwsQUFBVyxPQUFmLEFBQXNCLE9BQ2xCLE1BQUEsQUFBSyxTQUFTLEVBQUUsSUFEcEIsQUFDSSxBQUFjLEFBQU0sYUFFcEIsTUFBQSxBQUFLLFNBQVMsRUFBRSxJQUxmLEFBS0QsQUFBYyxBQUFNOztpQ0FMbkI7aUNBQUE7Z0RBQUE7O0FBQUE7NEJBQUE7QUF4QlU7O2lDQUFBO3dDQUFBO0FBQUE7QUFFZjs7Y0FBQSxBQUFLO3FCQUFRLEFBQ0EsQUFDVDswQkFGUyxBQUVLLEFBQ2Q7b0JBSFMsQUFHRCxBQUNSO2dCQU5XLEFBRWYsQUFBYSxBQUlMO0FBSkssQUFDVDs7ZUFPUDs7Ozs7eUNBdUJnQixBQUNiO21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsZ0NBQ0ksQUFBQzt1QkFBRCxBQUNXLEFBQ1A7eUJBQVMsS0FGYixBQUVrQixBQUNkO3dCQUFRLEtBSFosQUFHaUIsQUFDYjt1QkFBTyxFQUFFLE9BSmIsQUFJVyxBQUFTOzs4QkFKcEI7Z0NBREosQUFDSSxBQU1BO0FBTkE7QUFDSSxnQ0FLSixjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSxvQkFBSSxBQUFLLE1BUmpCLEFBQ0ksQUFPSSxBQUFlLEFBSTFCOzs7OzZDQUVvQixBQUVqQjs7bUNBQ0ssY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNLLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHlCQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUE7QUFBQTtBQUFBLGVBSFIsQUFDSSxBQUVJLEFBS1g7Ozs7aUNBRVE7Z0JBQUEsQUFFRSxLQUFNLEtBRlIsQUFFYSxNQUZiLEFBRUUsQUFFUDs7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esd0VBQU0sS0FBTixBQUFVLEFBQ047c0JBREosQUFDUzs7OEJBRFQ7Z0NBRkosQUFFSSxBQUlBO0FBSkE7Z0NBSUEsQUFBQyx1Q0FBSyxRQUFOLEFBQWEsV0FBVSxhQUFhLEtBQUEsQUFBSyxNQUF6QyxBQUErQyxTQUFTLE1BQXhELEFBQTZELE9BQU0sVUFBbkUsQUFBNEU7OEJBQTVFO2dDQU5KLEFBTUksQUFFQTtBQUZBOzs7OEJBRUE7Z0NBUkosQUFRSSxBQUNBO0FBREE7QUFBQTs7OEJBQ0E7Z0NBVEosQUFTSSxBQUVBO0FBRkE7QUFBQSxnQ0FFQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsOENBQUEsQUFBQyx5Q0FBTyxXQUFSLEFBQWtCLFlBQVcsU0FBUyxLQUF0QyxBQUEyQzs4QkFBM0M7Z0NBQUE7QUFBQTtlQUZKLEFBRUksQUFDQSxrQ0FBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBTyxVQUFBLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsUUFBUSxLQUFBLEFBQUssTUFBTCxBQUFXLFdBQXJDLEFBQWdELG1DQUFLLEFBQUM7dUJBQ2xELEtBQUEsQUFBSyxNQUQ0QyxBQUN0QyxBQUNsQjt5QkFBUyxLQUYrQyxBQUUxQyxBQUNkO3dCQUFRLEtBSGdELEFBRzNDLEFBQ2I7dUJBQU8sRUFBRSxPQUorQyxBQUlqRCxBQUFTOzs4QkFKd0M7Z0NBQXJELEFBQXFEO0FBQUE7QUFDeEQsYUFEd0QsSUFBNUQsQUFLSyxJQW5CYixBQVdJLEFBR0ksQUFRSix1QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlLGVBQWMsT0FBTyxFQUFFLFNBQUYsQUFBVyxPQUFPLGVBQWxCLEFBQWlDLFFBQVEsZ0JBQTdFLEFBQW9DLEFBQXlEOzhCQUE3RjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyx3Q0FBTSxhQUFQLE1BQW1CLE1BQW5CLEFBQXdCOzhCQUF4QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDJDQUFDLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUE7QUFBQTtBQUFBLGVBSlosQUFDSSxBQUNJLEFBRUksQUFJUiw2QkFBQyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQWhDaEIsQUFDSSxBQXNCSSxBQUNJLEFBUUksQUFDSyxBQUFLLEFBVTdCOzs7OztBLEFBN0dzQjs7QUFpSDNCO0FBQ0EsQUFDQTs7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmVjeWNsZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VpbWFuYWx3YWhoYWJpL0Rlc2t0b3AvUmVjeWNsZUNoYWluIn0=