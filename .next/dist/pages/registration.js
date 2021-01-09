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

        _this.onRegisterManu = function () {
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

                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 5;
                                _context.next = 8;
                                return _register2.default.methods.registerManufactuerer(_this.state.manufacturerAddr, _this.state.manufacturerLocation, _this.state.manufacturerName).send({ from: accounts[0] });

                            case 8:
                                _context.next = 14;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](5);

                                _this.setState({ errorMessage: _context.t0.message });
                                _this.setState({ hasError: false });

                            case 14:

                                // if errorMsg is empty, registration is successful
                                if (!_this.state.errorMessage) _this.setState({ hasNoError: true });

                                _this.setState({ loading: false });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[5, 10]]);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }();

        _this.onRegisterBuyer = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:

                                event.preventDefault();

                                _context2.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context2.sent;

                                _this.setState({ loading: true, errorMessage1: '' });

                                _context2.prev = 5;
                                _context2.next = 8;
                                return _register2.default.methods.registerBuyer(_this.state.buyerAddr, _this.state.buyerName, _this.state.buyerLocation, _this.state.buyerBusiness).send({ from: accounts[0] });

                            case 8:
                                _context2.next = 14;
                                break;

                            case 10:
                                _context2.prev = 10;
                                _context2.t0 = _context2['catch'](5);

                                _this.setState({ errorMessage1: _context2.t0.message });
                                _this.setState({ hasError1: false });

                            case 14:

                                // if errorMsg is empty, registration is successful
                                if (!_this.state.errorMessage1) _this.setState({ hasNoError1: true });

                                _this.setState({ loading: false });

                            case 16:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2, [[5, 10]]);
            }));

            return function (_x2) {
                return _ref2.apply(this, arguments);
            };
        }();

        _this.onRegisterSeller = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:

                                event.preventDefault();

                                _context3.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context3.sent;

                                _this.setState({ loading: true, errorMessage2: '' });

                                _context3.prev = 5;
                                _context3.next = 8;
                                return _register2.default.methods.registerSeller(_this.state.sellerAddr, _this.state.sellerLocation, _this.state.sellerName, _this.state.sortingMachines).send({ from: accounts[0] });

                            case 8:
                                _context3.next = 14;
                                break;

                            case 10:
                                _context3.prev = 10;
                                _context3.t0 = _context3['catch'](5);

                                _this.setState({ errorMessage2: _context3.t0.message });
                                _this.setState({ hasError2: false });

                            case 14:

                                // if errorMsg is empty, registration is successful
                                if (!_this.state.errorMessage2) _this.setState({ hasNoError2: true });

                                _this.setState({ loading: false });

                            case 16:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this2, [[5, 10]]);
            }));

            return function (_x3) {
                return _ref3.apply(this, arguments);
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
            hasNoError: false,
            errorMessage1: '',
            hasNoError1: false,
            errorMessage2: '',
            hasNoError2: false,
            loading: false
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
                        lineNumber: 48
                    }
                }, _react2.default.createElement(_semanticUiReact.Input, { value: _this3.state.sortingMachines[i],
                    onChange: function onChange(event) {
                        var newSortingMachines = [].concat((0, _toConsumableArray3.default)(_this3.state.sortingMachines));
                        newSortingMachines[i] = event.target.value;
                        _this3.setState({ sortingMachines: newSortingMachines });
                    },
                    icon: 'ethereum', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
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


        //Register a buyer & interact with the register SC


        //Register a sorting facility & interact with the register SC

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
                    lineNumber: 169
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                }
            }, 'Welcome to Registration Page'), _react2.default.createElement('link', { rel: 'stylesheet',
                href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 171
                }
            }), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 174
                }
            }, 'Select a stakeholder to register:'), _react2.default.createElement(_semanticUiReact.Menu, { widths: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 175
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Manufacturer', onClick: function onClick() {
                    return _this4.setState({ selectManufacturer: true, selectSortingFacility: false, selectBuyer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 176
                }
            }, ' Manufacturer'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'SortingFacility', onClick: function onClick() {
                    return _this4.setState({ selectSortingFacility: true, selectManufacturer: false, selectBuyer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 177
                }
            }, ' Sorting Facility'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Buyer', onClick: function onClick() {
                    return _this4.setState({ selectBuyer: true, selectSortingFacility: false, selectManufacturer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                }
            }, ' Buyer ')), selectManufacturer && _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onRegisterManu, error: !!this.state.errorMessage, success: this.state.hasNoError, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 186
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 187
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 188
                }
            }, 'Manufacturer Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerName,
                onChange: function onChange(event) {
                    return _this4.setState({ manufacturerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 189
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 192
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 193
                }
            }, 'Manufacturer Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this4.setState({ manufacturerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 194
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 199
                }
            }, 'Manufacturer Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerLocation,
                onChange: function onChange(event) {
                    return _this4.setState({ manufacturerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 200
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Error!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 204
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { success: true, header: 'Success!', content: 'Manufactuerer registered successfully!', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 207
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 210
                }
            }, 'Register')), selectBuyer && _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onRegisterBuyer, error: !!this.state.errorMessage1, success: this.state.hasNoError1, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 217
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 218
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 219
                }
            }, 'Buyer Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerName,
                onChange: function onChange(event) {
                    return _this4.setState({ buyerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 220
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 223
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 224
                }
            }, 'Buyer Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this4.setState({ buyerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 225
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 229
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 230
                }
            }, 'Buyer Business Type'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.BuyerBusiness,
                onChange: function onChange(event) {
                    return _this4.setState({ buyerBusiness: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 231
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 234
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 235
                }
            }, 'Buyer Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerLocation,
                onChange: function onChange(event) {
                    return _this4.setState({ buyerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 236
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Error!', content: this.state.errorMessage1, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 240
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { success: true, header: 'Success!', content: 'Buyer registered successfully!', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 242
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 244
                }
            }, 'Register')), selectSortingFacility && _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onRegisterSeller, error: !!this.state.errorMessage2, success: this.state.hasNoError2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 251
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 252
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 253
                }
            }, 'Sorting Facility Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerName,
                onChange: function onChange(event) {
                    return _this4.setState({ sellerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 254
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 257
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 258
                }
            }, 'Sorting Facility Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this4.setState({ sellerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 259
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 263
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 264
                }
            }, 'Sorting Facility Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerLocation,
                onChange: function onChange(event) {
                    return _this4.setState({ sellerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 265
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 269
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 270
                }
            }, 'Sorting Machines Address'), _react2.default.createElement('input', { type: 'number', name: 'quantity', min: '1', max: '7', placeholder: 'Select number of machines in facility', onChange: function onChange(value) {
                    return _this4.handleOnChange(value);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 271
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 272
                }
            }, this.renderInputs(this.state.inputSize))), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Error!', content: this.state.errorMessage2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 277
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { success: true, header: 'Success!', content: 'Seller registered successfully!', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 279
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 281
                }
            }, 'Register')));
        }
    }]);

    return registrationPage;
}(_react.Component);

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 


exports.default = registrationPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwid2ViMyIsInJlZ2lzdGVyQ29udHJhY3QiLCJyZWdpc3RyYXRpb25QYWdlIiwicHJvcHMiLCJvblJlZ2lzdGVyTWFudSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwic2V0U3RhdGUiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwibWV0aG9kcyIsInJlZ2lzdGVyTWFudWZhY3R1ZXJlciIsInN0YXRlIiwibWFudWZhY3R1cmVyQWRkciIsIm1hbnVmYWN0dXJlckxvY2F0aW9uIiwibWFudWZhY3R1cmVyTmFtZSIsInNlbmQiLCJmcm9tIiwibWVzc2FnZSIsImhhc0Vycm9yIiwiaGFzTm9FcnJvciIsIm9uUmVnaXN0ZXJCdXllciIsImVycm9yTWVzc2FnZTEiLCJyZWdpc3RlckJ1eWVyIiwiYnV5ZXJBZGRyIiwiYnV5ZXJOYW1lIiwiYnV5ZXJMb2NhdGlvbiIsImJ1eWVyQnVzaW5lc3MiLCJoYXNFcnJvcjEiLCJoYXNOb0Vycm9yMSIsIm9uUmVnaXN0ZXJTZWxsZXIiLCJlcnJvck1lc3NhZ2UyIiwicmVnaXN0ZXJTZWxsZXIiLCJzZWxsZXJBZGRyIiwic2VsbGVyTG9jYXRpb24iLCJzZWxsZXJOYW1lIiwic29ydGluZ01hY2hpbmVzIiwiaGFzRXJyb3IyIiwiaGFzTm9FcnJvcjIiLCJzZWxlY3RNYW51ZmFjdHVyZXIiLCJzZWxlY3RTb3J0aW5nRmFjaWxpdHkiLCJzZWxlY3RCdXllciIsImlucHV0U2l6ZSIsInZhbHVlIiwidGFyZ2V0IiwiaW5wdXRzIiwiaSIsInB1c2giLCJuZXdTb3J0aW5nTWFjaGluZXMiLCJjb25zb2xlIiwibG9nIiwiQnV5ZXJCdXNpbmVzcyIsImhhbmRsZU9uQ2hhbmdlIiwicmVuZGVySW5wdXRzIl0sIm1h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QUFDLHdDQUFNLE9BQU8sS0FBQSxBQUFLLE1BQW5CLEFBQXlCLEFBQ3JCO3NCQURKLEFBQ1MsQUFDTDswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLFlBQVksTUFBQSxBQUFNLE9BQTNDLEFBQVMsQUFBYyxBQUEyQjtBQUZoRTs4QkFBQTtnQ0FSUixBQU1JLEFBRUksQUFJSjtBQUpJO2lDQUlILGNBQUQsc0JBQUEsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsOENBQUEsQUFBQyx3Q0FBTSxPQUFPLEtBQUEsQUFBSyxNQUFuQixBQUF5QixBQUNyQjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLGdCQUFnQixNQUFBLEFBQU0sT0FBL0MsQUFBUyxBQUFjLEFBQStCO0FBRHBFOzhCQUFBO2dDQWRSLEFBWUksQUFFSSxBQUlKO0FBSkk7aUNBSUgsY0FBRCxzQkFBQSxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxzRUFBTyxNQUFQLEFBQVksVUFBUyxNQUFyQixBQUEwQixZQUFXLEtBQXJDLEFBQXlDLEtBQUksS0FBN0MsQUFBaUQsS0FBSSxhQUFyRCxBQUFpRSx5Q0FBd0MsVUFBVSxrQkFBQSxBQUFDLE9BQUQ7MkJBQVcsT0FBQSxBQUFLLGVBQWhCLEFBQVcsQUFBb0I7QUFBbEo7OEJBQUE7Z0NBRkosQUFFSSxBQUNBO0FBREE7Z0NBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsb0JBQ0ssQUFBSyxhQUFhLEtBQUEsQUFBSyxNQXRCcEMsQUFrQkksQUFHSSxBQUNLLEFBQTZCLEFBSXRDLDhCQUFBLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsVUFBUyxTQUFTLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBMUJKLEFBMEJJLEFBRUE7QUFGQTtnQ0FFQSxBQUFDLDBDQUFRLFNBQVQsTUFBaUIsUUFBakIsQUFBd0IsWUFBVyxTQUFuQyxBQUEyQzs4QkFBM0M7Z0NBNUJKLEFBNEJJLEFBRUE7QUFGQTtnQ0FFQSxBQUFDLHlDQUFRLFNBQVMsS0FBQSxBQUFLLE1BQXZCLEFBQTZCLFNBQVMsTUFBdEMsQUFBMkM7OEJBQTNDO2dDQUFBO0FBQUE7ZUFuSGhCLEFBR0ksQUFrRlEsQUE4QkksQUFRbkI7Ozs7O0EsQUFyUjBCOztBQXlSL0I7QUFDQSxBQUNBOzs7a0JBQUEsQUFBZSIsImZpbGUiOiJyZWdpc3RyYXRpb24uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VpbWFuYWx3YWhoYWJpL0Rlc2t0b3AvUmVjeWNsZUNoYWluIn0=