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
                        lineNumber: 49
                    }
                }, _react2.default.createElement(_semanticUiReact.Input, { value: _this3.state.sortingMachines[i],
                    onChange: function onChange(event) {
                        var newSortingMachines = [].concat((0, _toConsumableArray3.default)(_this3.state.sortingMachines));
                        newSortingMachines[i] = event.target.value;
                        _this3.setState({ sortingMachines: newSortingMachines });
                    },
                    icon: 'ethereum', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
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
                    lineNumber: 170
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 171
                }
            }, 'Welcome to Registration Page'), _react2.default.createElement('link', { rel: 'stylesheet',
                href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 172
                }
            }), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 175
                }
            }, 'Select a stakeholder to register:'), _react2.default.createElement(_semanticUiReact.Menu, { widths: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 176
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Manufacturer', onClick: function onClick() {
                    return _this4.setState({ selectManufacturer: true, selectSortingFacility: false, selectBuyer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 177
                }
            }, ' Manufacturer'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'SortingFacility', onClick: function onClick() {
                    return _this4.setState({ selectSortingFacility: true, selectManufacturer: false, selectBuyer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                }
            }, ' Sorting Facility'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Buyer', onClick: function onClick() {
                    return _this4.setState({ selectBuyer: true, selectSortingFacility: false, selectManufacturer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 179
                }
            }, ' Buyer ')), selectManufacturer && _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onRegisterManu, error: !!this.state.errorMessage, success: this.state.hasNoError, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 187
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 188
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 189
                }
            }, 'Manufacturer Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerName,
                onChange: function onChange(event) {
                    return _this4.setState({ manufacturerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 190
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 193
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 194
                }
            }, 'Manufacturer Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this4.setState({ manufacturerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 195
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 199
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 200
                }
            }, 'Manufacturer Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerLocation,
                onChange: function onChange(event) {
                    return _this4.setState({ manufacturerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 201
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Error!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 205
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { success: true, header: 'Success!', content: 'Manufactuerer registered successfully!', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 208
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 211
                }
            }, 'Register')), selectBuyer && _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onRegisterBuyer, error: !!this.state.errorMessage1, success: this.state.hasNoError1, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 218
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 219
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 220
                }
            }, 'Buyer Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerName,
                onChange: function onChange(event) {
                    return _this4.setState({ buyerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 221
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 224
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 225
                }
            }, 'Buyer Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this4.setState({ buyerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 226
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 230
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 231
                }
            }, 'Buyer Business Type'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.BuyerBusiness,
                onChange: function onChange(event) {
                    return _this4.setState({ buyerBusiness: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 232
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 235
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 236
                }
            }, 'Buyer Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerLocation,
                onChange: function onChange(event) {
                    return _this4.setState({ buyerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 237
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Error!', content: this.state.errorMessage1, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 241
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { success: true, header: 'Success!', content: 'Buyer registered successfully!', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 243
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 245
                }
            }, 'Register')), selectSortingFacility && _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onRegisterSeller, error: !!this.state.errorMessage2, success: this.state.hasNoError2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 252
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 253
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 254
                }
            }, 'Sorting Facility Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerName,
                onChange: function onChange(event) {
                    return _this4.setState({ sellerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 255
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 258
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 259
                }
            }, 'Sorting Facility Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this4.setState({ sellerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 260
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 264
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 265
                }
            }, 'Sorting Facility Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerLocation,
                onChange: function onChange(event) {
                    return _this4.setState({ sellerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 266
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 270
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 271
                }
            }, 'Sorting Machines Address'), _react2.default.createElement('input', { type: 'number', name: 'quantity', min: '1', max: '7', placeholder: 'Select number of machines in facility', onChange: function onChange(value) {
                    return _this4.handleOnChange(value);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 272
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 273
                }
            }, this.renderInputs(this.state.inputSize))), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Error!', content: this.state.errorMessage2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 278
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { success: true, header: 'Success!', content: 'Seller registered successfully!', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 280
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 282
                }
            }, 'Register')));
        }
    }]);

    return registrationPage;
}(_react.Component);

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 


exports.default = registrationPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwid2ViMyIsInJlZ2lzdGVyQ29udHJhY3QiLCJnZXRSZXZlcnRSZWFzb24iLCJyZXF1aXJlIiwicmVnaXN0cmF0aW9uUGFnZSIsInByb3BzIiwib25SZWdpc3Rlck1hbnUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInNldFN0YXRlIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsIm1ldGhvZHMiLCJyZWdpc3Rlck1hbnVmYWN0dWVyZXIiLCJzdGF0ZSIsIm1hbnVmYWN0dXJlckFkZHIiLCJtYW51ZmFjdHVyZXJMb2NhdGlvbiIsIm1hbnVmYWN0dXJlck5hbWUiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJoYXNFcnJvciIsImhhc05vRXJyb3IiLCJvblJlZ2lzdGVyQnV5ZXIiLCJlcnJvck1lc3NhZ2UxIiwicmVnaXN0ZXJCdXllciIsImJ1eWVyQWRkciIsImJ1eWVyTmFtZSIsImJ1eWVyTG9jYXRpb24iLCJidXllckJ1c2luZXNzIiwiaGFzRXJyb3IxIiwiaGFzTm9FcnJvcjEiLCJvblJlZ2lzdGVyU2VsbGVyIiwiZXJyb3JNZXNzYWdlMiIsInJlZ2lzdGVyU2VsbGVyIiwic2VsbGVyQWRkciIsInNlbGxlckxvY2F0aW9uIiwic2VsbGVyTmFtZSIsInNvcnRpbmdNYWNoaW5lcyIsImhhc0Vycm9yMiIsImhhc05vRXJyb3IyIiwic2VsZWN0TWFudWZhY3R1cmVyIiwic2VsZWN0U29ydGluZ0ZhY2lsaXR5Iiwic2VsZWN0QnV5ZXIiLCJpbnB1dFNpemUiLCJ2YWx1ZSIsInRhcmdldCIsImlucHV0cyIsImkiLCJwdXNoIiwibmV3U29ydGluZ01hY2hpbmVzIiwiY29uc29sZSIsImxvZyIsIkJ1eWVyQnVzaW5lc3MiLCJoYW5kbGVP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K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDZDQUFBLEFBQUMsd0NBQU0sT0FBTyxLQUFBLEFBQUssTUFBbkIsQUFBeUIsQUFDckI7c0JBREosQUFDUyxBQUNMOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsWUFBWSxNQUFBLEFBQU0sT0FBM0MsQUFBUyxBQUFjLEFBQTJCO0FBRmhFOzhCQUFBO2dDQVJSLEFBTUksQUFFSSxBQUlKO0FBSkk7aUNBSUgsY0FBRCxzQkFBQSxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw4Q0FBQSxBQUFDLHdDQUFNLE9BQU8sS0FBQSxBQUFLLE1BQW5CLEFBQXlCLEFBQ3JCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsZ0JBQWdCLE1BQUEsQUFBTSxPQUEvQyxBQUFTLEFBQWMsQUFBK0I7QUFEcEU7OEJBQUE7Z0NBZFIsQUFZSSxBQUVJLEFBSUo7QUFKSTtpQ0FJSCxjQUFELHNCQUFBLEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHNFQUFPLE1BQVAsQUFBWSxVQUFTLE1BQXJCLEFBQTBCLFlBQVcsS0FBckMsQUFBeUMsS0FBSSxLQUE3QyxBQUFpRCxLQUFJLGFBQXJELEFBQWlFLHlDQUF3QyxVQUFVLGtCQUFBLEFBQUMsT0FBRDsyQkFBVyxPQUFBLEFBQUssZUFBaEIsQUFBVyxBQUFvQjtBQUFsSjs4QkFBQTtnQ0FGSixBQUVJLEFBQ0E7QUFEQTtnQ0FDQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkFDSyxBQUFLLGFBQWEsS0FBQSxBQUFLLE1BdEJwQyxBQWtCSSxBQUdJLEFBQ0ssQUFBNkIsQUFJdEMsOEJBQUEsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixVQUFTLFNBQVMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EOzhCQUFuRDtnQ0ExQkosQUEwQkksQUFFQTtBQUZBO2dDQUVBLEFBQUMsMENBQVEsU0FBVCxNQUFpQixRQUFqQixBQUF3QixZQUFXLFNBQW5DLEFBQTJDOzhCQUEzQztnQ0E1QkosQUE0QkksQUFFQTtBQUZBO2dDQUVBLEFBQUMseUNBQVEsU0FBUyxLQUFBLEFBQUssTUFBdkIsQUFBNkIsU0FBUyxNQUF0QyxBQUEyQzs4QkFBM0M7Z0NBQUE7QUFBQTtlQW5IaEIsQUFHSSxBQWtGUSxBQThCSSxBQVFuQjs7Ozs7QSxBQXJSMEI7O0FBeVIvQjtBQUNBLEFBQ0E7OztrQkFBQSxBQUFlIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWltYW5hbHdhaGhhYmkvRGVza3RvcC9SZWN5Y2xlQ2hhaW4ifQ==