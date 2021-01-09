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
                    lineNumber: 172
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 173
                }
            }, 'Welcome to Registration Page'), _react2.default.createElement('link', { rel: 'stylesheet',
                href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 174
                }
            }), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 177
                }
            }, 'Select a stakeholder to register:'), _react2.default.createElement(_semanticUiReact.Menu, { widths: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Manufacturer', onClick: function onClick() {
                    return _this4.setState({ selectManufacturer: true, selectSortingFacility: false, selectBuyer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 179
                }
            }, ' Manufacturer'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'SortingFacility', onClick: function onClick() {
                    return _this4.setState({ selectSortingFacility: true, selectManufacturer: false, selectBuyer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 180
                }
            }, ' Sorting Facility'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Buyer', onClick: function onClick() {
                    return _this4.setState({ selectBuyer: true, selectSortingFacility: false, selectManufacturer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 181
                }
            }, ' Buyer ')), selectManufacturer && _react2.default.createElement('div', { className: 'ManuForm', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 188
                }
            }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onRegisterManu, error: !!this.state.errorMessage, success: this.state.hasNoError, __source: {
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
            }, 'Manufacturer Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerName,
                onChange: function onChange(event) {
                    return _this4.setState({ manufacturerName: event.target.value });
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
            }, 'Manufacturer Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this4.setState({ manufacturerAddr: event.target.value });
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
            }, 'Manufacturer Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerLocation,
                onChange: function onChange(event) {
                    return _this4.setState({ manufacturerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 203
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Error!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 207
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { success: true, header: 'Success!', content: 'Manufactuerer registered successfully!', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 210
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 213
                }
            }, 'Register'))), selectBuyer && _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onRegisterBuyer, error: !!this.state.errorMessage1, success: this.state.hasNoError1, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 222
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 223
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 224
                }
            }, 'Buyer Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerName,
                onChange: function onChange(event) {
                    return _this4.setState({ buyerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 225
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 228
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 229
                }
            }, 'Buyer Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this4.setState({ buyerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 230
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
            }, 'Buyer Business Type'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.BuyerBusiness,
                onChange: function onChange(event) {
                    return _this4.setState({ buyerBusiness: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 236
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 239
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 240
                }
            }, 'Buyer Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerLocation,
                onChange: function onChange(event) {
                    return _this4.setState({ buyerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 241
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Error!', content: this.state.errorMessage1, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 245
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { success: true, header: 'Success!', content: 'Buyer registered successfully!', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 247
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 249
                }
            }, 'Register')), selectSortingFacility && _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onRegisterSeller, error: !!this.state.errorMessage2, success: this.state.hasNoError2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 256
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 257
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 258
                }
            }, 'Sorting Facility Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerName,
                onChange: function onChange(event) {
                    return _this4.setState({ sellerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 259
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 262
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 263
                }
            }, 'Sorting Facility Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this4.setState({ sellerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 264
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 268
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 269
                }
            }, 'Sorting Facility Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerLocation,
                onChange: function onChange(event) {
                    return _this4.setState({ sellerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 270
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 274
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 275
                }
            }, 'Sorting Machines Address'), _react2.default.createElement('input', { type: 'number', name: 'quantity', min: '1', max: '7', placeholder: 'Select number of machines in facility', onChange: function onChange(value) {
                    return _this4.handleOnChange(value);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 276
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 277
                }
            }, this.renderInputs(this.state.inputSize))), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Error!', content: this.state.errorMessage2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 282
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { success: true, header: 'Success!', content: 'Seller registered successfully!', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 284
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 286
                }
            }, 'Register')));
        }
    }]);

    return registrationPage;
}(_react.Component);

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 


exports.default = registrationPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwid2ViMyIsInJlZ2lzdGVyQ29udHJhY3QiLCJnZXRSZXZlcnRSZWFzb24iLCJyZXF1aXJlIiwicmVnaXN0cmF0aW9uUGFnZSIsInByb3BzIiwib25SZWdpc3Rlck1hbnUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInNldFN0YXRlIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsIm1ldGhvZHMiLCJyZWdpc3Rlck1hbnVmYWN0dWVyZXIiLCJzdGF0ZSIsIm1hbnVmYWN0dXJlckFkZHIiLCJtYW51ZmFjdHVyZXJMb2NhdGlvbiIsIm1hbnVmYWN0dXJlck5hbWUiLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJoYXNFcnJvciIsImhhc05vRXJyb3IiLCJvblJlZ2lzdGVyQnV5ZXIiLCJlcnJvck1lc3NhZ2UxIiwicmVnaXN0ZXJCdXllciIsImJ1eWVyQWRkciIsImJ1eWVyTmFtZSIsImJ1eWVyTG9jYXRpb24iLCJidXllckJ1c2luZXNzIiwiaGFzRXJyb3IxIiwiaGFzTm9FcnJvcjEiLCJvblJlZ2lzdGVyU2VsbGVyIiwiZXJyb3JNZXNzYWdlMiIsInJlZ2lzdGVyU2VsbGVyIiwic2VsbGVyQWRkciIsInNlbGxlckxvY2F0aW9uIiwic2VsbGVyTmFtZSIsInNvcnRpbmdNYWNoaW5lcyIsImhhc0Vycm9yMiIsImhhc05vRXJyb3IyIiwic2VsZWN0TWFudWZhY3R1cmVyIiwic2VsZWN0U29ydGluZ0ZhY2lsaXR5Iiwic2VsZWN0QnV5ZXIiLCJpbnB1dFNpemUiLCJ2YWx1ZSIsInRhcmdldCIsImlucHV0cyIsImkiLCJwdXNoIiwibmV3U29ydGluZ01hY2hpbmVzIiwiY29uc29sZSIsImxvZyIsIkJ1eWVyQnVzaW5lc3MiLCJoYW5kbGVP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QUFBLEFBQUssTUF0QnBDLEFBa0JJLEFBR0ksQUFDSyxBQUE2QixBQUl0Qyw4QkFBQSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFVBQVMsU0FBUyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQTFCSixBQTBCSSxBQUVBO0FBRkE7Z0NBRUEsQUFBQywwQ0FBUSxTQUFULE1BQWlCLFFBQWpCLEFBQXdCLFlBQVcsU0FBbkMsQUFBMkM7OEJBQTNDO2dDQTVCSixBQTRCSSxBQUVBO0FBRkE7Z0NBRUEsQUFBQyx5Q0FBUSxTQUFTLEtBQUEsQUFBSyxNQUF2QixBQUE2QixTQUFTLE1BQXRDLEFBQTJDOzhCQUEzQztnQ0FBQTtBQUFBO2VBckhoQixBQUdJLEFBb0ZRLEFBOEJJLEFBUW5COzs7OztBLEFBelIwQjs7QUE2Ui9CO0FBQ0EsQUFDQTs7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmVnaXN0cmF0aW9uLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9laW1hbmFsd2FoaGFiaS9EZXNrdG9wL1JlY3ljbGVDaGFpbiJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mZTA2OTY3OTVhZjc4OGNjZjRmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVnaXN0cmF0aW9uLmpzP2U4ZWU0MzkiXSwic291cmNlc0NvbnRlbnQiOlsiLypcblRoaXMgaXMgdGhlIHJlZ2lzdHJhdGlvbiBwYWdlIHdoZXJlIHRoZSBnb3Zlcm1lbnQgZW50aXR5IHJlZ2lzdGVycyBzdGFrZWhvbGRlcnMgXG5Db250YWN0IHVzZWQgaGVyZTogYW4gaW5zdGFuY2Ugb2YgcmVnaXN0ZXIuc29sIFxuVG8gcnVuIHRoZSBhcHAsIHVzZSB0aGUgY29tbWFuZCBucG0gcnVuIGRldlxuKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1lbnUsIEZvcm0sIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCByZWdpc3RlckNvbnRyYWN0IGZyb20gJy4uL2V0aGVyZXVtL3JlZ2lzdGVyJzsgLy8gaW1wb3J0IFNDIGluc3RhbmNlXG5jb25zdCBnZXRSZXZlcnRSZWFzb24gPSByZXF1aXJlKCdldGgtcmV2ZXJ0LXJlYXNvbicpO1xuXG5jbGFzcyByZWdpc3RyYXRpb25QYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdE1hbnVmYWN0dXJlcjogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RTb3J0aW5nRmFjaWxpdHk6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0QnV5ZXI6IGZhbHNlLFxuICAgICAgICAgICAgbWFudWZhY3R1cmVyTmFtZTogJycsXG4gICAgICAgICAgICBtYW51ZmFjdHVyZXJBZGRyOiAnJyxcbiAgICAgICAgICAgIG1hbnVmYWN0dXJlckxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIGJ1eWVyTmFtZTogJycsXG4gICAgICAgICAgICBidXllckFkZHI6ICcnLFxuICAgICAgICAgICAgYnV5ZXJMb2NhdGlvbjogJycsXG4gICAgICAgICAgICBidXllckJ1c2luZXNzOiAnJyxcbiAgICAgICAgICAgIHNlbGxlck5hbWU6ICcnLFxuICAgICAgICAgICAgc2VsbGVyQWRkcjogJycsXG4gICAgICAgICAgICBzZWxsZXJMb2NhdGlvbjogJycsXG4gICAgICAgICAgICBzb3J0aW5nTWFjaGluZXM6IFtdLFxuICAgICAgICAgICAgaW5wdXRTaXplOiAwLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgICAgICAgIGhhc05vRXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlMTogJycsXG4gICAgICAgICAgICBoYXNOb0Vycm9yMTogZmFsc2UsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UyOiAnJyxcbiAgICAgICAgICAgIGhhc05vRXJyb3IyOiBmYWxzZSwgXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIER5bmFtaWMgZmllbGRzIGFwcGVhciBiYXNlZCBvbiBudW1iZXIgb2Ygc29ydGluZyBtYWNoaW5lcyBcbiAgICBoYW5kbGVPbkNoYW5nZSh2YWx1ZSkgeyB0aGlzLnNldFN0YXRlKHsgaW5wdXRTaXplOiB2YWx1ZS50YXJnZXQudmFsdWUgfSk7IH1cblxuICAgIHJlbmRlcklucHV0cyh2YWx1ZSkge1xuICAgICAgICBjb25zdCBpbnB1dHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZTsgaSsrKSB7XG4gICAgICAgICAgICBpbnB1dHMucHVzaCg8ZGl2PlxuICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5zb3J0aW5nTWFjaGluZXNbaV19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NvcnRpbmdNYWNoaW5lcyA9IFsuLi50aGlzLnN0YXRlLnNvcnRpbmdNYWNoaW5lc107XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTb3J0aW5nTWFjaGluZXNbaV0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc29ydGluZ01hY2hpbmVzOiBuZXdTb3J0aW5nTWFjaGluZXMgfSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImV0aGVyZXVtXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNvcnRpbmdNYWNoaW5lc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0cztcbiAgICB9XG5cbiAgICAvL1JlZ2lzdGVyIGEgTWFudWZhY3R1ZXJlciAmIGludGVyYWN0IHdpdGggdGhlIHJlZ2lzdGVyIFNDXG4gICAgb25SZWdpc3Rlck1hbnUgPSBhc3luYyAoZXZlbnQpID0+IHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50cyB0aGUgYnJvd3NlciBmcm9tIHN1Ym1pdHRpbmcgdGhlIGZvcm0gaW1tZWRpYXRlbHlcblxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJ30pO1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGF3YWl0IHJlZ2lzdGVyQ29udHJhY3QubWV0aG9kc1xuICAgICAgICAgICAgICAgIC5yZWdpc3Rlck1hbnVmYWN0dWVyZXIodGhpcy5zdGF0ZS5tYW51ZmFjdHVyZXJBZGRyLCB0aGlzLnN0YXRlLm1hbnVmYWN0dXJlckxvY2F0aW9uLCB0aGlzLnN0YXRlLm1hbnVmYWN0dXJlck5hbWUpXG4gICAgICAgICAgICAgICAgLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNFcnJvcjogZmFsc2UgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBlcnJvck1zZyBpcyBlbXB0eSwgcmVnaXN0cmF0aW9uIGlzIHN1Y2Nlc3NmdWxcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNOb0Vycm9yOiB0cnVlIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pO1xuICAgIH07XG5cblxuICAgIC8vUmVnaXN0ZXIgYSBidXllciAmIGludGVyYWN0IHdpdGggdGhlIHJlZ2lzdGVyIFNDXG4gICAgb25SZWdpc3RlckJ1eWVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTE6ICcnfSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHJlZ2lzdGVyQ29udHJhY3QubWV0aG9kc1xuICAgICAgICAgICAgICAgIC5yZWdpc3RlckJ1eWVyKHRoaXMuc3RhdGUuYnV5ZXJBZGRyLCB0aGlzLnN0YXRlLmJ1eWVyTmFtZSwgdGhpcy5zdGF0ZS5idXllckxvY2F0aW9uLCB0aGlzLnN0YXRlLmJ1eWVyQnVzaW5lc3MpXG4gICAgICAgICAgICAgICAgLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlMTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzRXJyb3IxOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGVycm9yTXNnIGlzIGVtcHR5LCByZWdpc3RyYXRpb24gaXMgc3VjY2Vzc2Z1bFxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlMSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNOb0Vycm9yMTogdHJ1ZSB9KTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgLy9SZWdpc3RlciBhIHNvcnRpbmcgZmFjaWxpdHkgJiBpbnRlcmFjdCB3aXRoIHRoZSByZWdpc3RlciBTQ1xuICAgIG9uUmVnaXN0ZXJTZWxsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2UyOiAnJ30pO1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGF3YWl0IHJlZ2lzdGVyQ29udHJhY3QubWV0aG9kc1xuICAgICAgICAgICAgICAgIC5yZWdpc3RlclNlbGxlcih0aGlzLnN0YXRlLnNlbGxlckFkZHIsIHRoaXMuc3RhdGUuc2VsbGVyTG9jYXRpb24sIHRoaXMuc3RhdGUuc2VsbGVyTmFtZSwgdGhpcy5zdGF0ZS5zb3J0aW5nTWFjaGluZXMpXG4gICAgICAgICAgICAgICAgLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlMjogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzRXJyb3IyOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGVycm9yTXNnIGlzIGVtcHR5LCByZWdpc3RyYXRpb24gaXMgc3VjY2Vzc2Z1bFxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlMilcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNOb0Vycm9yMjogdHJ1ZSB9KTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KTtcbiAgICB9O1xuXG5cblxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pbnB1dFNpemUpO1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHNlbGVjdE1hbnVmYWN0dXJlcixcbiAgICAgICAgICAgIHNlbGVjdFNvcnRpbmdGYWNpbGl0eSxcbiAgICAgICAgICAgIHNlbGVjdEJ1eWVyLFxuICAgICAgICAgICAgbWFudWZhY3R1cmVyTmFtZSxcbiAgICAgICAgICAgIG1hbnVmYWN0dXJlckFkZHIsXG4gICAgICAgICAgICBtYW51ZmFjdHVyZXJMb2NhdGlvbixcbiAgICAgICAgICAgIGJ1eWVyTmFtZSxcbiAgICAgICAgICAgIGJ1eWVyQWRkcixcbiAgICAgICAgICAgIGJ1eWVyTG9jYXRpb24sXG4gICAgICAgICAgICBidXllckJ1c2luZXNzLFxuICAgICAgICAgICAgc2VsbGVyTmFtZSxcbiAgICAgICAgICAgIHNlbGxlckFkZHIsXG4gICAgICAgICAgICBzZWxsZXJMb2NhdGlvbixcbiAgICAgICAgICAgIHNvcnRpbmdNYWNoaW5lcyB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIHJldHVybiAoXG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTZWxlY3Rpb24gXCI+XG4gICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgdG8gUmVnaXN0cmF0aW9uIFBhZ2U8L2gxPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMS9kaXN0L3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGgyPlNlbGVjdCBhIHN0YWtlaG9sZGVyIHRvIHJlZ2lzdGVyOjwvaDI+XG4gICAgICAgICAgICAgICAgPE1lbnUgd2lkdGhzPXszfT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdNYW51ZmFjdHVyZXInIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RNYW51ZmFjdHVyZXI6IHRydWUsIHNlbGVjdFNvcnRpbmdGYWNpbGl0eTogZmFsc2UsIHNlbGVjdEJ1eWVyOiBmYWxzZSB9KX0gPiBNYW51ZmFjdHVyZXI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdTb3J0aW5nRmFjaWxpdHknIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RTb3J0aW5nRmFjaWxpdHk6IHRydWUsIHNlbGVjdE1hbnVmYWN0dXJlcjogZmFsc2UsIHNlbGVjdEJ1eWVyOiBmYWxzZSB9KX0gPiBTb3J0aW5nIEZhY2lsaXR5PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gbmFtZT0nQnV5ZXInIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RCdXllcjogdHJ1ZSwgc2VsZWN0U29ydGluZ0ZhY2lsaXR5OiBmYWxzZSwgc2VsZWN0TWFudWZhY3R1cmVyOiBmYWxzZSB9KX0gPiBCdXllciA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8L01lbnU+XG5cblxuXG4gICAgICAgICAgICAgICAge3NlbGVjdE1hbnVmYWN0dXJlciAmJiAoXG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J01hbnVGb3JtJyA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblJlZ2lzdGVyTWFudX0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IHN1Y2Nlc3M9e3RoaXMuc3RhdGUuaGFzTm9FcnJvcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWFudWZhY3R1cmVyIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUubWFudWZhY3R1cmVyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgbWFudWZhY3R1cmVyTmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYW51ZmFjdHVyZXIgQWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5tYW51ZmFjdHVyZXJBZGRyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImV0aGVyZXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgbWFudWZhY3R1cmVyQWRkcjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYW51ZmFjdHVyZXIgTG9jYXRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUubWFudWZhY3R1cmVyTG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IG1hbnVmYWN0dXJlckxvY2F0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiRXJyb3IhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIHN1Y2Nlc3MgaGVhZGVyPVwiU3VjY2VzcyFcIiBjb250ZW50PVwiTWFudWZhY3R1ZXJlciByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSFcIiAvPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gdHlwZT0nc3VibWl0Jz5SZWdpc3RlcjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3NlbGVjdEJ1eWVyICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25SZWdpc3RlckJ1eWVyfSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZTF9IHN1Y2Nlc3M9e3RoaXMuc3RhdGUuaGFzTm9FcnJvcjF9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QnV5ZXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLmJ1eWVyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBidXllck5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QnV5ZXIgQWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLmJ1eWVyQWRkcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImV0aGVyZXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBidXllckFkZHI6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QnV5ZXIgQnVzaW5lc3MgVHlwZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLkJ1eWVyQnVzaW5lc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgYnV5ZXJCdXNpbmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5CdXllciBMb2NhdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLmJ1eWVyTG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgYnV5ZXJMb2NhdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJFcnJvciFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZTF9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIHN1Y2Nlc3MgaGVhZGVyPVwiU3VjY2VzcyFcIiBjb250ZW50PVwiQnV5ZXIgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHkhXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IHR5cGU9J3N1Ym1pdCc+UmVnaXN0ZXI8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuXG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHtzZWxlY3RTb3J0aW5nRmFjaWxpdHkgJiYgKFxuXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uUmVnaXN0ZXJTZWxsZXJ9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlMn0gc3VjY2Vzcz17dGhpcy5zdGF0ZS5oYXNOb0Vycm9yMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNvcnRpbmcgRmFjaWxpdHkgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnNlbGxlck5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgc2VsbGVyTmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Tb3J0aW5nIEZhY2lsaXR5IEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxsZXJBZGRyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZXRoZXJldW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGxlckFkZHI6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U29ydGluZyBGYWNpbGl0eSBMb2NhdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnNlbGxlckxvY2F0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGxlckxvY2F0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U29ydGluZyBNYWNoaW5lcyBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJxdWFudGl0eVwiIG1pbj1cIjFcIiBtYXg9XCI3XCIgcGxhY2Vob2xkZXI9XCJTZWxlY3QgbnVtYmVyIG9mIG1hY2hpbmVzIGluIGZhY2lsaXR5XCIgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy5oYW5kbGVPbkNoYW5nZSh2YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySW5wdXRzKHRoaXMuc3RhdGUuaW5wdXRTaXplKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiRXJyb3IhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UyfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBzdWNjZXNzIGhlYWRlcj1cIlN1Y2Nlc3MhXCIgY29udGVudD1cIlNlbGxlciByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSFcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uICBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IHR5cGU9J3N1Ym1pdCc+UmVnaXN0ZXI8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuXG4gICAgICAgICAgICAgICAgKX1cblxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuLy9BdCB0aGUgZW5kIG9mIGVhY2ggcGFnZSwgYSBjb21wb25lbnQgaXMgZXhwZWN0ZWQgdG8gYmUgcmV0dXJuZWQgXG4vLyBJZiBub3QsIE5leHQuanMgdGhyb3dzIGFuIGVycm9yIFxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0cmF0aW9uUGFnZTsgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvcmVnaXN0cmF0aW9uLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7O0FBVEE7Ozs7OztBQVNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFtREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFIQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBQ0E7QUFLQTtBQUNBO0FBUEE7QUFBQTtBQVVBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFjQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUF2QkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFyREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUErRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFIQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBQ0E7QUFLQTtBQUNBO0FBUEE7QUFBQTtBQVNBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFhQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUF0QkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFoRkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF3R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFIQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBQ0E7QUFLQTtBQUNBO0FBUEE7QUFBQTtBQVVBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFjQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUF2QkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUF6R0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBckJBO0FBdUJBO0FBRUE7QUFDQTs7Ozs7O0FBQUE7QUFBQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBTkE7QUFVQTtBQVZBOzs7QUFVQTtBQUNBO0FBZkE7QUFFQTtBQUNBO0FBREE7QUFlQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBMEJBO0FBQ0E7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7Ozs7O0FBNEJBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFlQTtBQWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFEQTtBQUdBO0FBSEE7QUFHQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQURBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQUFBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBREE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQURBO0FBQUE7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQURBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQUFBO0FBSUE7QUFKQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBUUE7Ozs7Ozs7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=