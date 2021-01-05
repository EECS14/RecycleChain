'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _register = require('../ethereum/register');

var _register2 = _interopRequireDefault(_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/eimanalwahhabi/Desktop/RecycleChain/pages/registration.js?entry';
/*
This is the registration page where the goverment entity registers stakeholders 
Contact used here: an instance of register.sol 
To run the app, use the command npm run dev
*/

// import SC instance

var registrationPage = function (_Component) {
    (0, _inherits3.default)(registrationPage, _Component);

    function registrationPage(props) {
        var _this2 = this;

        (0, _classCallCheck3.default)(this, registrationPage);

        var _this = (0, _possibleConstructorReturn3.default)(this, (registrationPage.__proto__ || (0, _getPrototypeOf2.default)(registrationPage)).call(this, props));

        _this.onRegisterM = function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:

                                event.preventDefault(); // prevents the browser from submitting the form immediately

                                _context.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context.sent;
                                _context.prev = 4;
                                _context.next = 7;
                                return _register2.default.methods.registerManufactuerer(_this.state.manufacturerAddr, _this.state.manufacturerLocation, _this.state.manufacturerName).send({ from: accounts[0] });

                            case 7:
                                _context.next = 12;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context['catch'](4);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 9]]);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }();

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
            sortingMachines: [],
            inputSize: 0,
            errorMessage: ''
        };
        return _this;
    }

    // Dynamic fields appear based on number of sorting machines 


    (0, _createClass3.default)(registrationPage, [{
        key: 'handleOnChange',
        value: function handleOnChange(value) {
            this.setState({ inputSize: value.target.value });
        }
    }, {
        key: 'renderInputs',
        value: function renderInputs(value) {
            var _this3 = this;

            var inputs = [];

            var _loop = function _loop(i) {
                inputs.push(_react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    }
                }, _react2.default.createElement(_semanticUiReact.Input, { value: _this3.state.sortingMachines[i],
                    onChange: function onChange(event) {
                        var newSortingMachines = [].concat((0, _toConsumableArray3.default)(_this3.state.sortingMachines));
                        newSortingMachines[i] = event.target.value;
                        _this3.setState({ sortingMachines: newSortingMachines });
                    },
                    icon: 'ethereum', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                    }
                })));

                for (var _i = 0; _i < value; _i++) {
                    console.log(_this3.state.sortingMachines[_i]);
                }
            };

            for (var i = 0; i < value; i++) {
                _loop(i);
            }
            return inputs;
        }

        //Register a Manufactuerer & interact with the register SC

    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            console.log(this.state.inputSize);

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
                    lineNumber: 104
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, 'Welcome to Registration Page'), _react2.default.createElement('link', { rel: 'stylesheet',
                href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }, 'Select a stakeholder to register:'), _react2.default.createElement(_semanticUiReact.Menu, { widths: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Manufacturer', onClick: function onClick() {
                    return _this4.setState({ selectManufacturer: true, selectSortingFacility: false, selectBuyer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, ' Manufacturer'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'SortingFacility', onClick: function onClick() {
                    return _this4.setState({ selectSortingFacility: true, selectManufacturer: false, selectBuyer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, ' Sorting Facility'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Buyer', onClick: function onClick() {
                    return _this4.setState({ selectBuyer: true, selectSortingFacility: false, selectManufacturer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, ' Buyer ')), selectManufacturer && _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onRegisterM, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }, 'Manufacturer Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerName,
                onChange: function onChange(event) {
                    return _this4.setState({ manufacturerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125
                }
            }, 'Manufacturer Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this4.setState({ manufacturerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            }, 'Manufacturer Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerLocation,
                onChange: function onChange(event) {
                    return _this4.setState({ manufacturerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Error!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 138
                }
            }, 'Register')), selectBuyer && _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 146
                }
            }, 'Buyer Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerName,
                onChange: function onChange(event) {
                    return _this4.setState({ buyerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 147
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 150
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 151
                }
            }, 'Buyer Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this4.setState({ buyerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                }
            }, 'Buyer Business Type'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.BuyerBusiness,
                onChange: function onChange(event) {
                    return _this4.setState({ buyerBusiness: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 158
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                }
            }, 'Buyer Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerLocation,
                onChange: function onChange(event) {
                    return _this4.setState({ buyerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                }
            }, 'Register')), selectSortingFacility && _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 173
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 174
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 175
                }
            }, 'Sorting Facility Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerName,
                onChange: function onChange(event) {
                    return _this4.setState({ sellerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 176
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 179
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 180
                }
            }, 'Sorting Facility Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this4.setState({ sellerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 181
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 186
                }
            }, 'Sorting Facility Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerLocation,
                onChange: function onChange(event) {
                    return _this4.setState({ sellerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 187
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 191
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 192
                }
            }, 'Sorting Machines Address'), _react2.default.createElement('input', { type: 'number', name: 'quantity', min: '1', max: '7', placeholder: 'Select number of machines in facility', onChange: function onChange(value) {
                    return _this4.handleOnChange(value);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 193
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 194
                }
            }, this.renderInputs(this.state.inputSize))), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 199
                }
            }, 'Register')));
        }
    }]);

    return registrationPage;
}(_react.Component);

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 


exports.default = registrationPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwid2ViMyIsInJlZ2lzdGVyQ29udHJhY3QiLCJyZWdpc3RyYXRpb25QYWdlIiwicHJvcHMiLCJvblJlZ2lzdGVyTSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsInJlZ2lzdGVyTWFudWZhY3R1ZXJlciIsInN0YXRlIiwibWFudWZhY3R1cmVyQWRkciIsIm1hbnVmYWN0dXJlckxvY2F0aW9uIiwibWFudWZhY3R1cmVyTmFtZSIsInNlbmQiLCJmcm9tIiwic2V0U3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwic2VsZWN0TWFudWZhY3R1cmVyIiwic2VsZWN0U29ydGluZ0ZhY2lsaXR5Iiwic2VsZWN0QnV5ZXIiLCJidXllck5hbWUiLCJidXllckFkZHIiLCJidXllckxvY2F0aW9uIiwiYnV5ZXJCdXNpbmVzcyIsInNlbGxlck5hbWUiLCJzZWxsZXJBZGRyIiwic2VsbGVyTG9jYXRpb24iLCJzb3J0aW5nTWFjaGluZXMiLCJpbnB1dFNpemUiLCJ2YWx1ZSIsInRhcmdldCIsImlucHV0cyIsImkiLCJwdXNoIiwibmV3U29ydGluZ01hY2hpbmVzIiwiY29uc29sZSIsImxvZyIsIkJ1eWVyQnVzaW5lc3MiLCJoYW5kbGVPbkNoYW5nZSIsInJlbmRlcklucHV0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU0sQUFBUSxBQUFPOztBQUNwQyxBQUFPLEFBQVU7Ozs7QSxBQUNqQixBQUFPLEFBQXNCOzs7Ozs7O0FBVDdCOzs7Ozs7QUFTcUQ7O0ksQUFFL0M7OENBRUY7OzhCQUFBLEFBQVksT0FBTztx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QUEsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsNkNBQUEsQUFBQyx3Q0FBTSxPQUFPLEtBQUEsQUFBSyxNQUFuQixBQUF5QixBQUNyQjtzQkFESixBQUNTLEFBQ0w7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxZQUFZLE1BQUEsQUFBTSxPQUEzQyxBQUFTLEFBQWMsQUFBMkI7QUFGaEU7OEJBQUE7Z0NBUlIsQUFNSSxBQUVJLEFBSUo7QUFKSTtpQ0FJSCxjQUFELHNCQUFBLEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDhDQUFBLEFBQUMsd0NBQU0sT0FBTyxLQUFBLEFBQUssTUFBbkIsQUFBeUIsQUFDckI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxnQkFBZ0IsTUFBQSxBQUFNLE9BQS9DLEFBQVMsQUFBYyxBQUErQjtBQURwRTs4QkFBQTtnQ0FkUixBQVlJLEFBRUksQUFJSjtBQUpJO2lDQUlILGNBQUQsc0JBQUEsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esc0VBQU8sTUFBUCxBQUFZLFVBQVMsTUFBckIsQUFBMEIsWUFBVyxLQUFyQyxBQUF5QyxLQUFJLEtBQTdDLEFBQWlELEtBQUssYUFBdEQsQUFBa0UseUNBQXdDLFVBQVUsa0JBQUEsQUFBQyxPQUFEOzJCQUFXLE9BQUEsQUFBSyxlQUFoQixBQUFXLEFBQW9CO0FBQW5KOzhCQUFBO2dDQUZKLEFBRUksQUFDQTtBQURBO2dDQUNBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQUNLLEFBQUssYUFBYSxLQUFBLEFBQUssTUF0QnBDLEFBa0JJLEFBR0ksQUFDSyxBQUE2QixBQUl0Qyw4QkFBQSxBQUFDLHlDQUFPLE1BQVIsQUFBYTs4QkFBYjtnQ0FBQTtBQUFBO2VBakdoQixBQUVJLEFBcUVRLEFBMEJJLEFBUW5COzs7OztBLEFBbk0wQjs7QUF1TS9CO0FBQ0EsQUFDQTs7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmVnaXN0cmF0aW9uLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9laW1hbmFsd2FoaGFiaS9EZXNrdG9wL1JlY3ljbGVDaGFpbiJ9