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
var getRevertReason = require('eth-revert-reason');

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
                                _context.next = 13;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context['catch'](4);

                                _this.setState({ errorMessage: _context.t0.message });
                                _this.setState({ hasError: false });

                            case 13:

                                // if errorMsg is empty, registration is successful
                                if (!_this.state.errorMessage) _this.setState({ hasNoError: true });

                            case 14:
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
            errorMessage: '',
            hasNoError: false
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
                        lineNumber: 44
                    }
                }, _react2.default.createElement(_semanticUiReact.Input, { value: _this3.state.sortingMachines[i],
                    onChange: function onChange(event) {
                        var newSortingMachines = [].concat((0, _toConsumableArray3.default)(_this3.state.sortingMachines));
                        newSortingMachines[i] = event.target.value;
                        _this3.setState({ sortingMachines: newSortingMachines });
                    },
                    icon: 'ethereum', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
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
                sortingMachines = _state.sortingMachines,
                hasError = _state.hasError;

            return _react2.default.createElement('div', { className: 'Selection ', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, 'Welcome to Registration Page'), _react2.default.createElement('link', { rel: 'stylesheet',
                href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, 'Select a stakeholder to register:'), _react2.default.createElement(_semanticUiReact.Menu, { widths: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Manufacturer', onClick: function onClick() {
                    return _this4.setState({ selectManufacturer: true, selectSortingFacility: false, selectBuyer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }, ' Manufacturer'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'SortingFacility', onClick: function onClick() {
                    return _this4.setState({ selectSortingFacility: true, selectManufacturer: false, selectBuyer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, ' Sorting Facility'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Buyer', onClick: function onClick() {
                    return _this4.setState({ selectBuyer: true, selectSortingFacility: false, selectManufacturer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, ' Buyer ')), selectManufacturer && _react2.default.createElement('div', { className: 'ManuForm', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onRegisterM, error: !!this.state.errorMessage, success: this.state.hasNoError, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 127
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }, 'Manufacturer Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerName,
                onChange: function onChange(event) {
                    return _this4.setState({ manufacturerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            }, 'Manufacturer Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this4.setState({ manufacturerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            }, 'Manufacturer Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerLocation,
                onChange: function onChange(event) {
                    return _this4.setState({ manufacturerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Error!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { success: true, header: 'Success!', content: 'Manufactuerer registered successfully!', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 148
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 151
                }
            }, 'Register'))), selectBuyer && _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                }
            }, 'Buyer Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerName,
                onChange: function onChange(event) {
                    return _this4.setState({ buyerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                }
            }, 'Buyer Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this4.setState({ buyerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 172
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 173
                }
            }, 'Buyer Business Type'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.BuyerBusiness,
                onChange: function onChange(event) {
                    return _this4.setState({ buyerBusiness: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 174
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 177
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                }
            }, 'Buyer Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerLocation,
                onChange: function onChange(event) {
                    return _this4.setState({ buyerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 179
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 182
                }
            }, 'Register')), selectSortingFacility && _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 189
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 190
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 191
                }
            }, 'Sorting Facility Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerName,
                onChange: function onChange(event) {
                    return _this4.setState({ sellerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 192
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 195
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 196
                }
            }, 'Sorting Facility Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this4.setState({ sellerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 201
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 202
                }
            }, 'Sorting Facility Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerLocation,
                onChange: function onChange(event) {
                    return _this4.setState({ sellerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 203
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 207
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 208
                }
            }, 'Sorting Machines Address'), _react2.default.createElement('input', { type: 'number', name: 'quantity', min: '1', max: '7', placeholder: 'Select number of machines in facility', onChange: function onChange(value) {
                    return _this4.handleOnChange(value);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 209
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 210
                }
            }, this.renderInputs(this.state.inputSize))), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 215
                }
            }, 'Register')));
        }
    }]);

    return registrationPage;
}(_react.Component);

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 


exports.default = registrationPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwid2ViMyIsInJlZ2lzdGVyQ29udHJhY3QiLCJnZXRSZXZlcnRSZWFzb24iLCJyZXF1aXJlIiwicmVnaXN0cmF0aW9uUGFnZSIsInByb3BzIiwib25SZWdpc3Rlck0iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJyZWdpc3Rlck1hbnVmYWN0dWVyZXIiLCJzdGF0ZSIsIm1hbnVmYWN0dXJlckFkZHIiLCJtYW51ZmFjdHVyZXJMb2NhdGlvbiIsIm1hbnVmYWN0dXJlck5hbWUiLCJzZW5kIiwiZnJvbSIsInNldFN0YXRlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImhhc0Vycm9yIiwiaGFzTm9FcnJvciIsInNlbGVjdE1hbnVmYWN0dXJlciIsInNlbGVjdFNvcnRpbmdGYWNpbGl0eSIsInNlbGVjdEJ1eWVyIiwiYnV5ZXJOYW1lIiwiYnV5ZXJBZGRyIiwiYnV5ZXJMb2NhdGlvbiIsImJ1eWVyQnVzaW5lc3MiLCJzZWxsZXJOYW1lIiwic2VsbGVyQWRkciIsInNlbGxlckxvY2F0aW9uIiwic29ydGluZ01hY2hpbmVzIiwiaW5wdXRTaXplIiwidmFsdWUiLCJ0YXJnZXQiLCJpbnB1dHMiLCJpIiwicHVzaCIsIm5ld1NvcnRpbmdNYWNoaW5lcyIsImNvbnNvbGUiLCJsb2ciLCJCdXllckJ1c2luZXNzIiwiaGFuZGxlT25DaGFuZ2UiLCJyZW5kZXJJbnB1dHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFNLEFBQVEsQUFBTzs7QUFDcEMsQUFBTyxBQUFVOzs7O0EsQUFDakIsQUFBTyxBQUFzQjs7Ozs7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LEVBQUUsZ0JBQWdCLE1BQUEsQUFBTSxPQUEvQyxBQUFTLEFBQWMsQUFBK0I7QUFEcEU7OEJBQUE7Z0NBZFIsQUFZSSxBQUVJLEFBSUo7QUFKSTtpQ0FJSCxjQUFELHNCQUFBLEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHNFQUFPLE1BQVAsQUFBWSxVQUFTLE1BQXJCLEFBQTBCLFlBQVcsS0FBckMsQUFBeUMsS0FBSSxLQUE3QyxBQUFpRCxLQUFJLGFBQXJELEFBQWlFLHlDQUF3QyxVQUFVLGtCQUFBLEFBQUMsT0FBRDsyQkFBVyxPQUFBLEFBQUssZUFBaEIsQUFBVyxBQUFvQjtBQUFsSjs4QkFBQTtnQ0FGSixBQUVJLEFBQ0E7QUFEQTtnQ0FDQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkFDSyxBQUFLLGFBQWEsS0FBQSxBQUFLLE1BdEJwQyxBQWtCSSxBQUdJLEFBQ0ssQUFBNkIsQUFJdEMsOEJBQUEsQUFBQyx5Q0FBTyxNQUFSLEFBQWE7OEJBQWI7Z0NBQUE7QUFBQTtlQTVHaEIsQUFHSSxBQStFUSxBQTBCSSxBQVFuQjs7Ozs7QSxBQWxOMEI7O0FBc04vQjtBQUNBLEFBQ0E7OztrQkFBQSxBQUFlIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWltYW5hbHdhaGhhYmkvRGVza3RvcC9SZWN5Y2xlQ2hhaW4ifQ==