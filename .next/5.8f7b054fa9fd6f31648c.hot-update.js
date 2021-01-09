webpackHotUpdate(5,{

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _semanticUiReact = __webpack_require__(904);

var _web = __webpack_require__(811);

var _web2 = _interopRequireDefault(_web);

var _register = __webpack_require__(1461);

var _register2 = _interopRequireDefault(_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/eimanalwahhabi/Desktop/RecycleChain/pages/registration.js?entry';
/*
This is the registration page where the goverment entity registers stakeholders 
Contact used here: an instance of register.sol 
To run the app, use the command npm run dev
*/

// import SC instance
var getRevertReason = __webpack_require__(1463);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwid2ViMyIsInJlZ2lzdGVyQ29udHJhY3QiLCJnZXRSZXZlcnRSZWFzb24iLCJyZXF1aXJlIiwicmVnaXN0cmF0aW9uUGFnZSIsInByb3BzIiwib25SZWdpc3Rlck1hbnUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInNldFN0YXRlIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsIm1ldGhvZHMiLCJyZWdpc3Rlck1hbnVmYWN0dWVyZXIiLCJzdGF0ZSIsIm1hbnVmYWN0dXJlckFkZHIiLCJtYW51ZmFjdHVyZXJMb2NhdGlvbiIsIm1hbnVmYWN0dXJlck5hbWUiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJoYXNFcnJvciIsImhhc05vRXJyb3IiLCJvblJlZ2lzdGVyQnV5ZXIiLCJlcnJvck1lc3NhZ2UxIiwicmVnaXN0ZXJCdXllciIsImJ1eWVyQWRkciIsImJ1eWVyTmFtZSIsImJ1eWVyTG9jYXRpb24iLCJidXllckJ1c2luZXNzIiwiaGFzRXJyb3IxIiwiaGFzTm9FcnJvcjEiLCJvblJlZ2lzdGVyU2VsbGVyIiwiZXJyb3JNZXNzYWdlMiIsInJlZ2lzdGVyU2VsbGVyIiwic2VsbGVyQWRkciIsInNlbGxlckxvY2F0aW9uIiwic2VsbGVyTmFtZSIsInNvcnRpbmdNYWNoaW5lcyIsImhhc0Vycm9yMiIsImhhc05vRXJyb3IyIiwic2VsZWN0TWFudWZhY3R1cmVyIiwic2VsZWN0U29ydGluZ0ZhY2lsaXR5Iiwic2VsZWN0QnV5ZXIiLCJpbnB1dFNpemUiLCJ2YWx1ZSIsInRhcmdldCIsImlucHV0cyIsImkiLCJwdXNoIiwibmV3U29ydGluZ01hY2hpbmVzIiwiY29uc29sZSIsImxvZyIsIkJ1eWVyQnVzaW5lc3MiLCJoYW5kbGVPbkNoYW5nZSIsInJlbmRlcklucHV0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU0sQUFBUSxBQUFPOztBQUNwQyxBQUFPLEFBQVU7Ozs7QSxBQUNqQixBQUFPLEFBQXNCOzs7Ozs7O0FBVDdCOzs7Ozs7QUFTcUQ7QUFDckQsSUFBTSxrQkFBTixBQUFNLEFBQWtCOztJLEFBRWxCOzhDQUVGOzs4QkFBQSxBQUFZLE9BQU87cUJBQUE7OzRDQUFBOzs4SkFBQSxBQUNUOztjQURTLEFBcURuQiw2QkFyRG1CO2dHQXFERixpQkFBQSxBQUFPLE9BQVA7b0JBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBRWI7O3NDQUZhLEFBRWIsQUFBTSxrQkFGTyxBQUVXOztnREFGWDt1Q0FJVSxjQUFBLEFBQUssSUFKZixBQUlVLEFBQVM7O2lDQUExQjtBQUpPLG9EQU1iOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsTUFBTSxjQU5qQixBQU1iLEFBQWMsQUFBOEI7O2dEQU4vQjtnREFBQTt1Q0FVSCxtQkFBQSxBQUFpQixRQUFqQixBQUNELHNCQUFzQixNQUFBLEFBQUssTUFEMUIsQUFDZ0Msa0JBQWtCLE1BQUEsQUFBSyxNQUR2RCxBQUM2RCxzQkFBc0IsTUFBQSxBQUFLLE1BRHhGLEFBQzhGLGtCQUQ5RixBQUVELEtBQUssRUFBRSxNQUFNLFNBWlQsQUFVSCxBQUVJLEFBQVEsQUFBUzs7aUNBWmxCO2dEQUFBO0FBQUE7O2lDQUFBO2dEQUFBO2dFQWNUOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBQTlCLEFBQWMsQUFBb0IsQUFDbEM7c0NBQUEsQUFBSyxTQUFTLEVBQUUsVUFmUCxBQWVULEFBQWMsQUFBWTs7aUNBRzlCOztBQUNBO29DQUFJLENBQUMsTUFBQSxBQUFLLE1BQVYsQUFBZ0IsY0FDWixNQUFBLEFBQUssU0FBUyxFQUFFLFlBQWhCLEFBQWMsQUFBYyxBQUU1Qjs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0F0Qk4sQUFzQlQsQUFBYyxBQUFVOztpQ0F0QmY7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QUFyREU7O2lDQUFBO3dDQUFBO0FBQUE7QUFBQTs7Y0FBQSxBQWdGbkIsOEJBaEZtQjtpR0FnRkQsa0JBQUEsQUFBTyxPQUFQO29CQUFBO2dGQUFBOzhCQUFBOzJEQUFBO2lDQUVkOztzQ0FGYyxBQUVkLEFBQU07O2lEQUZRO3VDQUlTLGNBQUEsQUFBSyxJQUpkLEFBSVMsQUFBUzs7aUNBQTFCO0FBSlEscURBTWQ7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVSxNQUFNLGVBTmhCLEFBTWQsQUFBYyxBQUErQjs7aURBTi9CO2lEQUFBO3VDQVNKLG1CQUFBLEFBQWlCLFFBQWpCLEFBQ0QsY0FBYyxNQUFBLEFBQUssTUFEbEIsQUFDd0IsV0FBVyxNQUFBLEFBQUssTUFEeEMsQUFDOEMsV0FBVyxNQUFBLEFBQUssTUFEOUQsQUFDb0UsZUFBZSxNQUFBLEFBQUssTUFEeEYsQUFDOEYsZUFEOUYsQUFFRCxLQUFLLEVBQUUsTUFBTSxTQVhSLEFBU0osQUFFSSxBQUFRLEFBQVM7O2lDQVhqQjtpREFBQTtBQUFBOztpQ0FBQTtpREFBQTtrRUFhVjs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsZUFBZSxhQUEvQixBQUFjLEFBQXFCLEFBQ25DO3NDQUFBLEFBQUssU0FBUyxFQUFFLFdBZE4sQUFjVixBQUFjLEFBQWE7O2lDQUcvQjs7QUFDQTtvQ0FBSSxDQUFDLE1BQUEsQUFBSyxNQUFWLEFBQWdCLGVBQ1osTUFBQSxBQUFLLFNBQVMsRUFBRSxhQUFoQixBQUFjLEFBQWUsQUFFN0I7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBckJMLEFBcUJWLEFBQWMsQUFBVTs7aUNBckJkO2lDQUFBO2lEQUFBOztBQUFBOzBDQUFBO0FBaEZDOztrQ0FBQTt5Q0FBQTtBQUFBO0FBQUE7O2NBQUEsQUF5R25CLCtCQXpHbUI7aUdBeUdBLGtCQUFBLEFBQU8sT0FBUDtvQkFBQTtnRkFBQTs4QkFBQTsyREFBQTtpQ0FFZjs7c0NBRmUsQUFFZixBQUFNOztpREFGUzt1Q0FJUSxjQUFBLEFBQUssSUFKYixBQUlRLEFBQVM7O2lDQUExQjtBQUpTLHFEQU1mOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsTUFBTSxlQU5mLEFBTWYsQUFBYyxBQUErQjs7aURBTjlCO2lEQUFBO3VDQVVMLG1CQUFBLEFBQWlCLFFBQWpCLEFBQ0QsZUFBZSxNQUFBLEFBQUssTUFEbkIsQUFDeUIsWUFBWSxNQUFBLEFBQUssTUFEMUMsQUFDZ0QsZ0JBQWdCLE1BQUEsQUFBSyxNQURyRSxBQUMyRSxZQUFZLE1BQUEsQUFBSyxNQUQ1RixBQUNrRyxpQkFEbEcsQUFFRCxLQUFLLEVBQUUsTUFBTSxTQVpQLEFBVUwsQUFFSSxBQUFRLEFBQVM7O2lDQVpoQjtpREFBQTtBQUFBOztpQ0FBQTtpREFBQTtrRUFjWDs7c0NBQUEsQUFBSyxTQUFTLEVBQUUsZUFBZSxhQUEvQixBQUFjLEFBQXFCLEFBQ25DO3NDQUFBLEFBQUssU0FBUyxFQUFFLFdBZkwsQUFlWCxBQUFjLEFBQWE7O2lDQUcvQjs7QUFDQTtvQ0FBSSxDQUFDLE1BQUEsQUFBSyxNQUFWLEFBQWdCLGVBQ1osTUFBQSxBQUFLLFNBQVMsRUFBRSxhQUFoQixBQUFjLEFBQWUsQUFFN0I7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBdEJKLEFBc0JYLEFBQWMsQUFBVTs7aUNBdEJiO2lDQUFBO2lEQUFBOztBQUFBOzBDQUFBO0FBekdBOztrQ0FBQTt5Q0FBQTtBQUFBO0FBRWY7O2NBQUEsQUFBSztnQ0FBUSxBQUNXLEFBQ3BCO21DQUZTLEFBRWMsQUFDdkI7eUJBSFMsQUFHSSxBQUNiOzhCQUpTLEFBSVMsQUFDbEI7OEJBTFMsQUFLUyxBQUNsQjtrQ0FOUyxBQU1hLEFBQ3RCO3VCQVBTLEFBT0UsQUFDWDt1QkFSUyxBQVFFLEFBQ1g7MkJBVFMsQUFTTSxBQUNmOzJCQVZTLEFBVU0sQUFDZjt3QkFYUyxBQVdHLEFBQ1o7d0JBWlMsQUFZRyxBQUNaOzRCQWJTLEFBYU8sQUFDaEI7NkJBZFMsQUFjUSxBQUNqQjt1QkFmUyxBQWVFLEFBQ1g7MEJBaEJTLEFBZ0JLLEFBQ2Q7d0JBakJTLEFBaUJHLEFBQ1o7MkJBbEJTLEFBa0JNLEFBQ2Y7eUJBbkJTLEFBbUJJLEFBQ2I7MkJBcEJTLEFBb0JNLEFBQ2Y7eUJBckJTLEFBcUJJLEFBQ2I7cUJBeEJXLEFBRWYsQUFBYSxBQXNCQTtBQXRCQSxBQUNUO2VBdUJQO0FBRUQ7Ozs7Ozs7dUMsQUFDZSxPQUFPLEFBQUU7aUJBQUEsQUFBSyxTQUFTLEVBQUUsV0FBVyxNQUFBLEFBQU0sT0FBakMsQUFBYyxBQUEwQixBQUFXOzs7O3FDLEFBRTlELE9BQU87eUJBQ2hCOztnQkFBTSxTQURVLEFBQ2hCLEFBQWU7O3VDQURDLEFBRVAsR0FDTDt1QkFBQSxBQUFPLHFCQUFLLGNBQUE7O2tDQUFBO29DQUFBLEFBQ1I7QUFEUTtBQUFBLGlCQUFBLGtCQUNSLEFBQUMsd0NBQU0sT0FBTyxPQUFBLEFBQUssTUFBTCxBQUFXLGdCQUF6QixBQUFjLEFBQTJCLEFBQ3JDOzhCQUFVLGtCQUFBLEFBQUMsT0FBVSxBQUNqQjs0QkFBTSxnRUFBeUIsT0FBQSxBQUFLLE1BQXBDLEFBQU0sQUFBb0MsQUFDMUM7MkNBQUEsQUFBbUIsS0FBSyxNQUFBLEFBQU0sT0FBOUIsQUFBcUMsQUFDckM7K0JBQUEsQUFBSyxTQUFTLEVBQUUsaUJBQWhCLEFBQWMsQUFBbUIsQUFDcEM7QUFMTCxBQU1JOzBCQU5KLEFBTVM7a0NBTlQ7b0NBREosQUFBWSxBQUNSLEFBVUo7QUFWSTs7O3FCQVVDLElBQUksS0FBVCxBQUFhLEdBQUcsS0FBaEIsQUFBb0IsT0FBcEIsQUFBMkIsTUFBSyxBQUM1Qjs0QkFBQSxBQUFRLElBQUksT0FBQSxBQUFLLE1BQUwsQUFBVyxnQkFBdkIsQUFBWSxBQUEyQixBQUMxQztBQWhCVztBQUVoQjs7aUJBQUssSUFBSSxJQUFULEFBQWEsR0FBRyxJQUFoQixBQUFvQixPQUFwQixBQUEyQixLQUFLO3NCQUF2QixBQUF1QixBQWUvQjtBQUNEO21CQUFBLEFBQU8sQUFDVjtBQUVEOztBQTJCQTs7O0FBeUJBOzs7Ozs7O2lDQTRCUzt5QkFFTDs7b0JBQUEsQUFBUSxJQUFJLEtBQUEsQUFBSyxNQUZaLEFBRUwsQUFBdUI7O3lCQWdCQyxLQWxCbkIsQUFrQndCO2dCQWxCeEIsQUFLRCw0QkFMQyxBQUtEO2dCQUxDLEFBTUQsK0JBTkMsQUFNRDtnQkFOQyxBQU9ELHFCQVBDLEFBT0Q7Z0JBUEMsQUFRRCwwQkFSQyxBQVFEO2dCQVJDLEFBU0QsMEJBVEMsQUFTRDtnQkFUQyxBQVVELDhCQVZDLEFBVUQ7Z0JBVkMsQUFXRCxtQkFYQyxBQVdEO2dCQVhDLEFBWUQsbUJBWkMsQUFZRDtnQkFaQyxBQWFELHVCQWJDLEFBYUQ7Z0JBYkMsQUFjRCx1QkFkQyxBQWNEO2dCQWRDLEFBZUQsb0JBZkMsQUFlRDtnQkFmQyxBQWdCRCxvQkFoQkMsQUFnQkQ7Z0JBaEJDLEFBaUJELHdCQWpCQyxBQWlCRDtnQkFqQkMsQUFrQkQseUJBbEJDLEFBa0JELEFBRUo7O21DQUdJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHlFQUFNLEtBQU4sQUFBVSxBQUNOO3NCQURKLEFBQ1M7OzhCQURUO2dDQUZKLEFBRUksQUFHQTtBQUhBO2dDQUdBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUxKLEFBS0ksQUFDQSxzREFBQSxBQUFDLHVDQUFLLFFBQU4sQUFBYzs4QkFBZDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNLFFBQUssTUFBWCxBQUFnQixnQkFBZSxTQUFTLG1CQUFBOzJCQUFNLE9BQUEsQUFBSyxTQUFTLEVBQUUsb0JBQUYsQUFBc0IsTUFBTSx1QkFBNUIsQUFBbUQsT0FBTyxhQUE5RSxBQUFNLEFBQWMsQUFBdUU7QUFBbkk7OEJBQUE7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSxrQ0FBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxNQUFYLEFBQWdCLG1CQUFrQixTQUFTLG1CQUFBOzJCQUFNLE9BQUEsQUFBSyxTQUFTLEVBQUUsdUJBQUYsQUFBeUIsTUFBTSxvQkFBL0IsQUFBbUQsT0FBTyxhQUE5RSxBQUFNLEFBQWMsQUFBdUU7QUFBdEk7OEJBQUE7Z0NBQUE7QUFBQTtlQUZKLEFBRUksQUFDQSxzQ0FBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxNQUFYLEFBQWdCLFNBQVEsU0FBUyxtQkFBQTsyQkFBTSxPQUFBLEFBQUssU0FBUyxFQUFFLGFBQUYsQUFBZSxNQUFNLHVCQUFyQixBQUE0QyxPQUFPLG9CQUF2RSxBQUFNLEFBQWMsQUFBdUU7QUFBNUg7OEJBQUE7Z0NBQUE7QUFBQTtlQVRSLEFBTUksQUFHSSxBQUtILG1EQUdPLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixnQkFBZ0IsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQW5ELEFBQXlELGNBQWMsU0FBUyxLQUFBLEFBQUssTUFBckYsQUFBMkY7OEJBQTNGO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNLLGNBQUQsc0JBQUEsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esc0NBQUEsQUFBQyx3Q0FBTSxPQUFPLEtBQUEsQUFBSyxNQUFuQixBQUF5QixBQUNyQjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLGtCQUFrQixNQUFBLEFBQU0sT0FBakQsQUFBUyxBQUFjLEFBQWlDO0FBRHRFOzhCQUFBO2dDQUhSLEFBQ0ksQUFFSSxBQUdKO0FBSEk7aUNBR0gsY0FBRCxzQkFBQSxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx5Q0FBQSxBQUFDLHdDQUFNLE9BQU8sS0FBQSxBQUFLLE1BQW5CLEFBQXlCLEFBQ3JCO3NCQURKLEFBQ1MsQUFDTDswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLGtCQUFrQixNQUFBLEFBQU0sT0FBakQsQUFBUyxBQUFjLEFBQWlDO0FBRnRFOzhCQUFBO2dDQVJSLEFBTUksQUFFSSxBQUlKO0FBSkk7aUNBSUgsY0FBRCxzQkFBQSxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSwwQ0FBQSxBQUFDLHdDQUFNLE9BQU8sS0FBQSxBQUFLLE1BQW5CLEFBQXlCLEFBQ3JCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsc0JBQXNCLE1BQUEsQUFBTSxPQUFyRCxBQUFTLEFBQWMsQUFBcUM7QUFEMUU7OEJBQUE7Z0NBZFIsQUFZSSxBQUVJLEFBSUo7QUFKSTtpQ0FJSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFVBQVMsU0FBUyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQWxCSixBQWtCSSxBQUdBO0FBSEE7Z0NBR0EsQUFBQywwQ0FBUSxTQUFULE1BQWlCLFFBQWpCLEFBQXdCLFlBQVcsU0FBbkMsQUFBMkM7OEJBQTNDO2dDQXJCSixBQXFCSSxBQUdBO0FBSEE7Z0NBR0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLE1BQXJDLEFBQTBDOzhCQUExQztnQ0FBQTtBQUFBO2VBekNoQixBQWlCWSxBQXdCSSxBQU1YLDZDQUNHLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixpQkFBaUIsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQXBELEFBQTBELGVBQWUsU0FBUyxLQUFBLEFBQUssTUFBdkYsQUFBNkY7OEJBQTdGO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNLLGNBQUQsc0JBQUEsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsK0JBQUEsQUFBQyx3Q0FBTSxPQUFPLEtBQUEsQUFBSyxNQUFuQixBQUF5QixBQUNyQjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLFdBQVcsTUFBQSxBQUFNLE9BQTFDLEFBQVMsQUFBYyxBQUEwQjtBQUQvRDs4QkFBQTtnQ0FIUixBQUNJLEFBRUksQUFHSjtBQUhJO2lDQUdILGNBQUQsc0JBQUEsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esa0NBQUEsQUFBQyx3Q0FBTSxPQUFPLEtBQUEsQUFBSyxNQUFuQixBQUF5QixBQUNyQjtzQkFESixBQUNTLEFBQ0w7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxXQUFXLE1BQUEsQUFBTSxPQUExQyxBQUFTLEFBQWMsQUFBMEI7QUFGL0Q7OEJBQUE7Z0NBUlIsQUFNSSxBQUVJLEFBSUo7QUFKSTtpQ0FJSCxjQUFELHNCQUFBLEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHdDQUFBLEFBQUMsd0NBQU0sT0FBTyxLQUFBLEFBQUssTUFBbkIsQUFBeUIsQUFDckI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxlQUFlLE1BQUEsQUFBTSxPQUE5QyxBQUFTLEFBQWMsQUFBOEI7QUFEbkU7OEJBQUE7Z0NBZFIsQUFZSSxBQUVJLEFBR0o7QUFISTtpQ0FHSCxjQUFELHNCQUFBLEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLG1DQUFBLEFBQUMsd0NBQU0sT0FBTyxLQUFBLEFBQUssTUFBbkIsQUFBeUIsQUFDckI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxlQUFlLE1BQUEsQUFBTSxPQUE5QyxBQUFTLEFBQWMsQUFBOEI7QUFEbkU7OEJBQUE7Z0NBbkJSLEFBaUJJLEFBRUksQUFJSjtBQUpJO2lDQUlKLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsVUFBUyxTQUFTLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBdkJKLEFBdUJJLEFBRUE7QUFGQTtnQ0FFQSxBQUFDLDBDQUFRLFNBQVQsTUFBaUIsUUFBakIsQUFBd0IsWUFBVyxTQUFuQyxBQUEyQzs4QkFBM0M7Z0NBekJKLEFBeUJJLEFBRUE7QUFGQTtnQ0FFQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsTUFBckMsQUFBMEM7OEJBQTFDO2dDQUFBO0FBQUE7ZUEzRVosQUFnRFEsQUEyQkksQUFLUCx1REFFRyxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsa0JBQWtCLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUFyRCxBQUEyRCxlQUFlLFNBQVMsS0FBQSxBQUFLLE1BQXhGLEFBQThGOzhCQUE5RjtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFELHNCQUFBLEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDBDQUFBLEFBQUMsd0NBQU0sT0FBTyxLQUFBLEFBQUssTUFBbkIsQUFBeUIsQUFDckI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxZQUFZLE1BQUEsQUFBTSxPQUEzQyxBQUFTLEFBQWMsQUFBMkI7QUFEaEU7OEJBQUE7Z0NBSFIsQUFDSSxBQUVJLEFBR0o7QUFISTtpQ0FHSCxjQUFELHNCQUFBLEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDZDQUFBLEFBQUMsd0NBQU0sT0FBTyxLQUFBLEFBQUssTUFBbkIsQUFBeUIsQUFDckI7c0JBREosQUFDUyxBQUNMOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsWUFBWSxNQUFBLEFBQU0sT0FBM0MsQUFBUyxBQUFjLEFBQTJCO0FBRmhFOzhCQUFBO2dDQVJSLEFBTUksQUFFSSxBQUlKO0FBSkk7aUNBSUgsY0FBRCxzQkFBQSxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw4Q0FBQSxBQUFDLHdDQUFNLE9BQU8sS0FBQSxBQUFLLE1BQW5CLEFBQXlCLEFBQ3JCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsZ0JBQWdCLE1BQUEsQUFBTSxPQUEvQyxBQUFTLEFBQWMsQUFBK0I7QUFEcEU7OEJBQUE7Z0NBZFIsQUFZSSxBQUVJLEFBSUo7QUFKSTtpQ0FJSCxjQUFELHNCQUFBLEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHNFQUFPLE1BQVAsQUFBWSxVQUFTLE1BQXJCLEFBQTBCLFlBQVcsS0FBckMsQUFBeUMsS0FBSSxLQUE3QyxBQUFpRCxLQUFJLGFBQXJELEFBQWlFLHlDQUF3QyxVQUFVLGtCQUFBLEFBQUMsT0FBRDsyQkFBVyxPQUFBLEFBQUssZUFBaEIsQUFBVyxBQUFvQjtBQUFsSjs4QkFBQTtnQ0FGSixBQUVJLEFBQ0E7QUFEQTtnQ0FDQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkFDSyxBQUFLLGFBQWEsS0FBQSxBQUFLLE1BdEJwQyxBQWtCSSxBQUdJLEFBQ0ssQUFBNkIsQUFJdEMsOEJBQUEsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixVQUFTLFNBQVMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EOzhCQUFuRDtnQ0ExQkosQUEwQkksQUFFQTtBQUZBO2dDQUVBLEFBQUMsMENBQVEsU0FBVCxNQUFpQixRQUFqQixBQUF3QixZQUFXLFNBQW5DLEFBQTJDOzhCQUEzQztnQ0E1QkosQUE0QkksQUFFQTtBQUZBO2dDQUVBLEFBQUMseUNBQVEsU0FBUyxLQUFBLEFBQUssTUFBdkIsQUFBNkIsU0FBUyxNQUF0QyxBQUEyQzs4QkFBM0M7Z0NBQUE7QUFBQTtlQW5IaEIsQUFHSSxBQWtGUSxBQThCSSxBQVFuQjs7Ozs7QSxBQXJSMEI7O0FBeVIvQjtBQUNBLEFBQ0E7OztrQkFBQSxBQUFlIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWltYW5hbHdhaGhhYmkvRGVza3RvcC9SZWN5Y2xlQ2hhaW4ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/eimanalwahhabi/Desktop/RecycleChain/pages/registration.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/eimanalwahhabi/Desktop/RecycleChain/pages/registration.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/registration")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44ZjdiMDU0ZmE5ZmQ2ZjMxNjQ4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVnaXN0cmF0aW9uLmpzPzE5NTU3MDciXSwic291cmNlc0NvbnRlbnQiOlsiLypcblRoaXMgaXMgdGhlIHJlZ2lzdHJhdGlvbiBwYWdlIHdoZXJlIHRoZSBnb3Zlcm1lbnQgZW50aXR5IHJlZ2lzdGVycyBzdGFrZWhvbGRlcnMgXG5Db250YWN0IHVzZWQgaGVyZTogYW4gaW5zdGFuY2Ugb2YgcmVnaXN0ZXIuc29sIFxuVG8gcnVuIHRoZSBhcHAsIHVzZSB0aGUgY29tbWFuZCBucG0gcnVuIGRldlxuKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1lbnUsIEZvcm0sIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCByZWdpc3RlckNvbnRyYWN0IGZyb20gJy4uL2V0aGVyZXVtL3JlZ2lzdGVyJzsgLy8gaW1wb3J0IFNDIGluc3RhbmNlXG5jb25zdCBnZXRSZXZlcnRSZWFzb24gPSByZXF1aXJlKCdldGgtcmV2ZXJ0LXJlYXNvbicpO1xuXG5jbGFzcyByZWdpc3RyYXRpb25QYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdE1hbnVmYWN0dXJlcjogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RTb3J0aW5nRmFjaWxpdHk6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0QnV5ZXI6IGZhbHNlLFxuICAgICAgICAgICAgbWFudWZhY3R1cmVyTmFtZTogJycsXG4gICAgICAgICAgICBtYW51ZmFjdHVyZXJBZGRyOiAnJyxcbiAgICAgICAgICAgIG1hbnVmYWN0dXJlckxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIGJ1eWVyTmFtZTogJycsXG4gICAgICAgICAgICBidXllckFkZHI6ICcnLFxuICAgICAgICAgICAgYnV5ZXJMb2NhdGlvbjogJycsXG4gICAgICAgICAgICBidXllckJ1c2luZXNzOiAnJyxcbiAgICAgICAgICAgIHNlbGxlck5hbWU6ICcnLFxuICAgICAgICAgICAgc2VsbGVyQWRkcjogJycsXG4gICAgICAgICAgICBzZWxsZXJMb2NhdGlvbjogJycsXG4gICAgICAgICAgICBzb3J0aW5nTWFjaGluZXM6IFtdLFxuICAgICAgICAgICAgaW5wdXRTaXplOiAwLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgICAgICAgIGhhc05vRXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlMTogJycsXG4gICAgICAgICAgICBoYXNOb0Vycm9yMTogZmFsc2UsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UyOiAnJyxcbiAgICAgICAgICAgIGhhc05vRXJyb3IyOiBmYWxzZSwgXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIER5bmFtaWMgZmllbGRzIGFwcGVhciBiYXNlZCBvbiBudW1iZXIgb2Ygc29ydGluZyBtYWNoaW5lcyBcbiAgICBoYW5kbGVPbkNoYW5nZSh2YWx1ZSkgeyB0aGlzLnNldFN0YXRlKHsgaW5wdXRTaXplOiB2YWx1ZS50YXJnZXQudmFsdWUgfSk7IH1cblxuICAgIHJlbmRlcklucHV0cyh2YWx1ZSkge1xuICAgICAgICBjb25zdCBpbnB1dHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZTsgaSsrKSB7XG4gICAgICAgICAgICBpbnB1dHMucHVzaCg8ZGl2PlxuICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5zb3J0aW5nTWFjaGluZXNbaV19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NvcnRpbmdNYWNoaW5lcyA9IFsuLi50aGlzLnN0YXRlLnNvcnRpbmdNYWNoaW5lc107XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTb3J0aW5nTWFjaGluZXNbaV0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc29ydGluZ01hY2hpbmVzOiBuZXdTb3J0aW5nTWFjaGluZXMgfSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImV0aGVyZXVtXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNvcnRpbmdNYWNoaW5lc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0cztcbiAgICB9XG5cbiAgICAvL1JlZ2lzdGVyIGEgTWFudWZhY3R1ZXJlciAmIGludGVyYWN0IHdpdGggdGhlIHJlZ2lzdGVyIFNDXG4gICAgb25SZWdpc3Rlck1hbnUgPSBhc3luYyAoZXZlbnQpID0+IHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50cyB0aGUgYnJvd3NlciBmcm9tIHN1Ym1pdHRpbmcgdGhlIGZvcm0gaW1tZWRpYXRlbHlcblxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJ30pO1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGF3YWl0IHJlZ2lzdGVyQ29udHJhY3QubWV0aG9kc1xuICAgICAgICAgICAgICAgIC5yZWdpc3Rlck1hbnVmYWN0dWVyZXIodGhpcy5zdGF0ZS5tYW51ZmFjdHVyZXJBZGRyLCB0aGlzLnN0YXRlLm1hbnVmYWN0dXJlckxvY2F0aW9uLCB0aGlzLnN0YXRlLm1hbnVmYWN0dXJlck5hbWUpXG4gICAgICAgICAgICAgICAgLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNFcnJvcjogZmFsc2UgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBlcnJvck1zZyBpcyBlbXB0eSwgcmVnaXN0cmF0aW9uIGlzIHN1Y2Nlc3NmdWxcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNOb0Vycm9yOiB0cnVlIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pO1xuICAgIH07XG5cblxuICAgIC8vUmVnaXN0ZXIgYSBidXllciAmIGludGVyYWN0IHdpdGggdGhlIHJlZ2lzdGVyIFNDXG4gICAgb25SZWdpc3RlckJ1eWVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTE6ICcnfSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHJlZ2lzdGVyQ29udHJhY3QubWV0aG9kc1xuICAgICAgICAgICAgICAgIC5yZWdpc3RlckJ1eWVyKHRoaXMuc3RhdGUuYnV5ZXJBZGRyLCB0aGlzLnN0YXRlLmJ1eWVyTmFtZSwgdGhpcy5zdGF0ZS5idXllckxvY2F0aW9uLCB0aGlzLnN0YXRlLmJ1eWVyQnVzaW5lc3MpXG4gICAgICAgICAgICAgICAgLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlMTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzRXJyb3IxOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGVycm9yTXNnIGlzIGVtcHR5LCByZWdpc3RyYXRpb24gaXMgc3VjY2Vzc2Z1bFxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlMSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNOb0Vycm9yMTogdHJ1ZSB9KTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgLy9SZWdpc3RlciBhIHNvcnRpbmcgZmFjaWxpdHkgJiBpbnRlcmFjdCB3aXRoIHRoZSByZWdpc3RlciBTQ1xuICAgIG9uUmVnaXN0ZXJTZWxsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2UyOiAnJ30pO1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGF3YWl0IHJlZ2lzdGVyQ29udHJhY3QubWV0aG9kc1xuICAgICAgICAgICAgICAgIC5yZWdpc3RlclNlbGxlcih0aGlzLnN0YXRlLnNlbGxlckFkZHIsIHRoaXMuc3RhdGUuc2VsbGVyTG9jYXRpb24sIHRoaXMuc3RhdGUuc2VsbGVyTmFtZSwgdGhpcy5zdGF0ZS5zb3J0aW5nTWFjaGluZXMpXG4gICAgICAgICAgICAgICAgLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlMjogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzRXJyb3IyOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGVycm9yTXNnIGlzIGVtcHR5LCByZWdpc3RyYXRpb24gaXMgc3VjY2Vzc2Z1bFxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlMilcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNOb0Vycm9yMjogdHJ1ZSB9KTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KTtcbiAgICB9O1xuXG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmlucHV0U2l6ZSk7XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgc2VsZWN0TWFudWZhY3R1cmVyLFxuICAgICAgICAgICAgc2VsZWN0U29ydGluZ0ZhY2lsaXR5LFxuICAgICAgICAgICAgc2VsZWN0QnV5ZXIsXG4gICAgICAgICAgICBtYW51ZmFjdHVyZXJOYW1lLFxuICAgICAgICAgICAgbWFudWZhY3R1cmVyQWRkcixcbiAgICAgICAgICAgIG1hbnVmYWN0dXJlckxvY2F0aW9uLFxuICAgICAgICAgICAgYnV5ZXJOYW1lLFxuICAgICAgICAgICAgYnV5ZXJBZGRyLFxuICAgICAgICAgICAgYnV5ZXJMb2NhdGlvbixcbiAgICAgICAgICAgIGJ1eWVyQnVzaW5lc3MsXG4gICAgICAgICAgICBzZWxsZXJOYW1lLFxuICAgICAgICAgICAgc2VsbGVyQWRkcixcbiAgICAgICAgICAgIHNlbGxlckxvY2F0aW9uLFxuICAgICAgICAgICAgc29ydGluZ01hY2hpbmVzIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgcmV0dXJuIChcblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNlbGVjdGlvbiBcIj5cbiAgICAgICAgICAgICAgICA8aDE+V2VsY29tZSB0byBSZWdpc3RyYXRpb24gUGFnZTwvaDE+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4xL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aDI+U2VsZWN0IGEgc3Rha2Vob2xkZXIgdG8gcmVnaXN0ZXI6PC9oMj5cbiAgICAgICAgICAgICAgICA8TWVudSB3aWR0aHM9ezN9PlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J01hbnVmYWN0dXJlcicgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdE1hbnVmYWN0dXJlcjogdHJ1ZSwgc2VsZWN0U29ydGluZ0ZhY2lsaXR5OiBmYWxzZSwgc2VsZWN0QnV5ZXI6IGZhbHNlIH0pfSA+IE1hbnVmYWN0dXJlcjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J1NvcnRpbmdGYWNpbGl0eScgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdFNvcnRpbmdGYWNpbGl0eTogdHJ1ZSwgc2VsZWN0TWFudWZhY3R1cmVyOiBmYWxzZSwgc2VsZWN0QnV5ZXI6IGZhbHNlIH0pfSA+IFNvcnRpbmcgRmFjaWxpdHk8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdCdXllcicgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdEJ1eWVyOiB0cnVlLCBzZWxlY3RTb3J0aW5nRmFjaWxpdHk6IGZhbHNlLCBzZWxlY3RNYW51ZmFjdHVyZXI6IGZhbHNlIH0pfSA+IEJ1eWVyIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTWVudT5cblxuXG5cbiAgICAgICAgICAgICAgICB7c2VsZWN0TWFudWZhY3R1cmVyICYmIChcblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uUmVnaXN0ZXJNYW51fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gc3VjY2Vzcz17dGhpcy5zdGF0ZS5oYXNOb0Vycm9yfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYW51ZmFjdHVyZXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5tYW51ZmFjdHVyZXJOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBtYW51ZmFjdHVyZXJOYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hbnVmYWN0dXJlciBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLm1hbnVmYWN0dXJlckFkZHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZXRoZXJldW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBtYW51ZmFjdHVyZXJBZGRyOiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hbnVmYWN0dXJlciBMb2NhdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5tYW51ZmFjdHVyZXJMb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgbWFudWZhY3R1cmVyTG9jYXRpb246IGV2ZW50LnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJFcnJvciFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2Ugc3VjY2VzcyBoZWFkZXI9XCJTdWNjZXNzIVwiIGNvbnRlbnQ9XCJNYW51ZmFjdHVlcmVyIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5IVwiIC8+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSB0eXBlPSdzdWJtaXQnPlJlZ2lzdGVyPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG5cblxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7c2VsZWN0QnV5ZXIgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblJlZ2lzdGVyQnV5ZXJ9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlMX0gc3VjY2Vzcz17dGhpcy5zdGF0ZS5oYXNOb0Vycm9yMX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5CdXllciBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuYnV5ZXJOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IGJ1eWVyTmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5CdXllciBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuYnV5ZXJBZGRyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZXRoZXJldW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IGJ1eWVyQWRkcjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5CdXllciBCdXNpbmVzcyBUeXBlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuQnV5ZXJCdXNpbmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBidXllckJ1c2luZXNzOiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkJ1eWVyIExvY2F0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuYnV5ZXJMb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBidXllckxvY2F0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIkVycm9yIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlMX0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2Ugc3VjY2VzcyBoZWFkZXI9XCJTdWNjZXNzIVwiIGNvbnRlbnQ9XCJCdXllciByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSFcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gdHlwZT0nc3VibWl0Jz5SZWdpc3RlcjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3NlbGVjdFNvcnRpbmdGYWNpbGl0eSAmJiAoXG5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25SZWdpc3RlclNlbGxlcn0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UyfSBzdWNjZXNzPXt0aGlzLnN0YXRlLmhhc05vRXJyb3IyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U29ydGluZyBGYWNpbGl0eSBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuc2VsbGVyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxsZXJOYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNvcnRpbmcgRmFjaWxpdHkgQWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnNlbGxlckFkZHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJldGhlcmV1bVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgc2VsbGVyQWRkcjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Tb3J0aW5nIEZhY2lsaXR5IExvY2F0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuc2VsbGVyTG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgc2VsbGVyTG9jYXRpb246IGV2ZW50LnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Tb3J0aW5nIE1hY2hpbmVzIEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInF1YW50aXR5XCIgbWluPVwiMVwiIG1heD1cIjdcIiBwbGFjZWhvbGRlcj1cIlNlbGVjdCBudW1iZXIgb2YgbWFjaGluZXMgaW4gZmFjaWxpdHlcIiBvbkNoYW5nZT17KHZhbHVlKSA9PiB0aGlzLmhhbmRsZU9uQ2hhbmdlKHZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dHModGhpcy5zdGF0ZS5pbnB1dFNpemUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJFcnJvciFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZTJ9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIHN1Y2Nlc3MgaGVhZGVyPVwiU3VjY2VzcyFcIiBjb250ZW50PVwiU2VsbGVyIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5IVwiIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gdHlwZT0nc3VibWl0Jz5SZWdpc3RlcjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAgICAgICAgICApfVxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG4vL0F0IHRoZSBlbmQgb2YgZWFjaCBwYWdlLCBhIGNvbXBvbmVudCBpcyBleHBlY3RlZCB0byBiZSByZXR1cm5lZCBcbi8vIElmIG5vdCwgTmV4dC5qcyB0aHJvd3MgYW4gZXJyb3IgXG5leHBvcnQgZGVmYXVsdCByZWdpc3RyYXRpb25QYWdlOyBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9yZWdpc3RyYXRpb24uanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFUQTs7Ozs7O0FBU0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQW1EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFDQTtBQUtBO0FBQ0E7QUFQQTtBQUFBO0FBVUE7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQXZCQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQXJEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQStFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFDQTtBQUtBO0FBQ0E7QUFQQTtBQUFBO0FBU0E7QUFDQTtBQVZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQXRCQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWhGQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXdHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFDQTtBQUtBO0FBQ0E7QUFQQTtBQUFBO0FBVUE7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQXZCQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQXpHQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFyQkE7QUF1QkE7QUFFQTtBQUNBOzs7Ozs7QUFBQTtBQUFBOzs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFOQTtBQVVBO0FBVkE7OztBQVVBO0FBQ0E7QUFmQTtBQUVBO0FBQ0E7QUFEQTtBQWVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUEwQkE7QUFDQTtBQUNBO0FBdUJBO0FBQ0E7QUFDQTs7Ozs7QUEwQkE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQWVBO0FBYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQURBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQURBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQUFBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBREE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQURBO0FBQUE7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQURBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQUFBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBUUE7Ozs7Ozs7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=