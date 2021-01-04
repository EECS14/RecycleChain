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