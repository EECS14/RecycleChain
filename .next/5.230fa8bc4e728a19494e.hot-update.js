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

var _register = __webpack_require__(1462);

var _register2 = _interopRequireDefault(_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/eimanalwahhabi/Desktop/RecycleChain/pages/registration.js?entry';
/*
This is the registration page where the goverment entity registers stakeholders 
Contact used here: an instance of register.sol 
To run the app, use the command npm run dev
*/

// import SC instance
var getRevertReason = __webpack_require__(1464);

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
                                _context2.prev = 4;
                                _context2.next = 7;
                                return _register2.default.methods.registerBuyer(_this.state.buyerAddr, _this.state.buyerName, _this.state.buyerLocation, _this.state.buyerBusiness).send({ from: accounts[0] });

                            case 7:
                                _context2.next = 13;
                                break;

                            case 9:
                                _context2.prev = 9;
                                _context2.t0 = _context2['catch'](4);

                                _this.setState({ errorMessage1: _context2.t0.message });
                                _this.setState({ hasError1: false });

                            case 13:

                                // if errorMsg is empty, registration is successful
                                if (!_this.state.errorMessage1) _this.setState({ hasNoError1: true });

                            case 14:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2, [[4, 9]]);
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
                                _context3.prev = 4;
                                _context3.next = 7;
                                return _register2.default.methods.registerSeller(_this.state.sellerAddr, _this.state.sellerLocation, _this.state.sellerName, _this.state.sortingMachines).send({ from: accounts[0] });

                            case 7:
                                _context3.next = 13;
                                break;

                            case 9:
                                _context3.prev = 9;
                                _context3.t0 = _context3['catch'](4);

                                _this.setState({ errorMessage2: _context3.t0.message });
                                _this.setState({ hasError2: false });

                            case 13:

                                // if errorMsg is empty, registration is successful
                                if (!_this.state.errorMessage2) _this.setState({ hasNoError2: true });

                            case 14:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this2, [[4, 9]]);
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
            hasNoError2: false
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
                    lineNumber: 160
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            }, 'Welcome to Registration Page'), _react2.default.createElement('link', { rel: 'stylesheet',
                href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                }
            }), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 165
                }
            }, 'Select a stakeholder to register:'), _react2.default.createElement(_semanticUiReact.Menu, { widths: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Manufacturer', onClick: function onClick() {
                    return _this4.setState({ selectManufacturer: true, selectSortingFacility: false, selectBuyer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                }
            }, ' Manufacturer'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'SortingFacility', onClick: function onClick() {
                    return _this4.setState({ selectSortingFacility: true, selectManufacturer: false, selectBuyer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                }
            }, ' Sorting Facility'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Buyer', onClick: function onClick() {
                    return _this4.setState({ selectBuyer: true, selectSortingFacility: false, selectManufacturer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                }
            }, ' Buyer ')), selectManufacturer && _react2.default.createElement('div', { className: 'ManuForm', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 176
                }
            }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onRegisterManu, error: !!this.state.errorMessage, success: this.state.hasNoError, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 177
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 179
                }
            }, 'Manufacturer Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerName,
                onChange: function onChange(event) {
                    return _this4.setState({ manufacturerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 180
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 183
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 184
                }
            }, 'Manufacturer Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this4.setState({ manufacturerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 189
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 190
                }
            }, 'Manufacturer Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerLocation,
                onChange: function onChange(event) {
                    return _this4.setState({ manufacturerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 191
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Error!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 195
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { success: true, header: 'Success!', content: 'Manufactuerer registered successfully!', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 201
                }
            }, 'Register'))), selectBuyer && _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onRegisterBuyer, error: !!this.state.errorMessage1, success: this.state.hasNoError1, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 210
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 211
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 212
                }
            }, 'Buyer Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerName,
                onChange: function onChange(event) {
                    return _this4.setState({ buyerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 213
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 216
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 217
                }
            }, 'Buyer Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this4.setState({ buyerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 218
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 222
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 223
                }
            }, 'Buyer Business Type'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.BuyerBusiness,
                onChange: function onChange(event) {
                    return _this4.setState({ buyerBusiness: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 224
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 227
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 228
                }
            }, 'Buyer Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerLocation,
                onChange: function onChange(event) {
                    return _this4.setState({ buyerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 229
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Error!', content: this.state.errorMessage1, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 233
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { success: true, header: 'Success!', content: 'Buyer registered successfully!', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 235
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 237
                }
            }, 'Register')), selectSortingFacility && _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onRegisterSeller, error: !!this.state.errorMessage2, success: this.state.hasNoError2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 244
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 245
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 246
                }
            }, 'Sorting Facility Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerName,
                onChange: function onChange(event) {
                    return _this4.setState({ sellerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 247
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 250
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 251
                }
            }, 'Sorting Facility Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this4.setState({ sellerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 252
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 256
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 257
                }
            }, 'Sorting Facility Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerLocation,
                onChange: function onChange(event) {
                    return _this4.setState({ sellerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 258
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
            }, 'Sorting Machines Address'), _react2.default.createElement('input', { type: 'number', name: 'quantity', min: '1', max: '7', placeholder: 'Select number of machines in facility', onChange: function onChange(value) {
                    return _this4.handleOnChange(value);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 264
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 265
                }
            }, this.renderInputs(this.state.inputSize))), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Error!', content: this.state.errorMessage2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 270
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { success: true, header: 'Success!', content: 'Seller registered successfully!', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 272
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 274
                }
            }, 'Register')));
        }
    }]);

    return registrationPage;
}(_react.Component);

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 


exports.default = registrationPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwid2ViMyIsInJlZ2lzdGVyQ29udHJhY3QiLCJnZXRSZXZlcnRSZWFzb24iLCJyZXF1aXJlIiwicmVnaXN0cmF0aW9uUGFnZSIsInByb3BzIiwib25SZWdpc3Rlck1hbnUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJyZWdpc3Rlck1hbnVmYWN0dWVyZXIiLCJzdGF0ZSIsIm1hbnVmYWN0dXJlckFkZHIiLCJtYW51ZmFjdHVyZXJMb2NhdGlvbiIsIm1hbnVmYWN0dXJlck5hbWUiLCJzZW5kIiwiZnJvbSIsInNldFN0YXRlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImhhc0Vycm9yIiwiaGFzTm9FcnJvciIsIm9uUmVnaXN0ZXJCdXllciIsInJlZ2lzdGVyQnV5ZXIiLCJidXllckFkZHIiLCJidXllck5hbWUiLCJidXllckxvY2F0aW9uIiwiYnV5ZXJCdXNpbmVzcyIsImVycm9yTWVzc2FnZTEiLCJoYXNFcnJvcjEiLCJoYXNOb0Vycm9yMSIsIm9uUmVnaXN0ZXJTZWxsZXIiLCJyZWdpc3RlclNlbGxlciIsInNlbGxlckFkZHIiLCJzZWxsZXJMb2NhdGlvbiIsInNlbGxlck5hbWUiLCJzb3J0aW5nTWFjaGluZXMiLCJlcnJvck1lc3NhZ2UyIiwiaGFzRXJyb3IyIiwiaGFzTm9FcnJvcjIiLCJzZWxlY3RNYW51ZmFjdHVyZXIiLCJzZWxlY3RTb3J0aW5nRmFjaWxpdHkiLCJzZWxlY3RCdXllciIsImlucHV0U2l6ZSIsInZhbHVlIiwidGFyZ2V0IiwiaW5wdXRzIiwiaSIsInB1c2giLCJuZXdTb3J0aW5nTWFjaGluZXMiLCJjb25zb2xlIiwibG9nIiwiQnV5ZXJCdXNpbmVzcyIsImhhbmRsZU9uQ2hhbmdlIiwi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

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yMzBmYThiYzRlNzI4YTE5NDk0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVnaXN0cmF0aW9uLmpzP2VjMjQwNmMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcblRoaXMgaXMgdGhlIHJlZ2lzdHJhdGlvbiBwYWdlIHdoZXJlIHRoZSBnb3Zlcm1lbnQgZW50aXR5IHJlZ2lzdGVycyBzdGFrZWhvbGRlcnMgXG5Db250YWN0IHVzZWQgaGVyZTogYW4gaW5zdGFuY2Ugb2YgcmVnaXN0ZXIuc29sIFxuVG8gcnVuIHRoZSBhcHAsIHVzZSB0aGUgY29tbWFuZCBucG0gcnVuIGRldlxuKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1lbnUsIEZvcm0sIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCByZWdpc3RlckNvbnRyYWN0IGZyb20gJy4uL2V0aGVyZXVtL3JlZ2lzdGVyJzsgLy8gaW1wb3J0IFNDIGluc3RhbmNlXG5jb25zdCBnZXRSZXZlcnRSZWFzb24gPSByZXF1aXJlKCdldGgtcmV2ZXJ0LXJlYXNvbicpO1xuXG5jbGFzcyByZWdpc3RyYXRpb25QYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdE1hbnVmYWN0dXJlcjogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RTb3J0aW5nRmFjaWxpdHk6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0QnV5ZXI6IGZhbHNlLFxuICAgICAgICAgICAgbWFudWZhY3R1cmVyTmFtZTogJycsXG4gICAgICAgICAgICBtYW51ZmFjdHVyZXJBZGRyOiAnJyxcbiAgICAgICAgICAgIG1hbnVmYWN0dXJlckxvY2F0aW9uOiAnJyxcbiAgICAgICAgICAgIGJ1eWVyTmFtZTogJycsXG4gICAgICAgICAgICBidXllckFkZHI6ICcnLFxuICAgICAgICAgICAgYnV5ZXJMb2NhdGlvbjogJycsXG4gICAgICAgICAgICBidXllckJ1c2luZXNzOiAnJyxcbiAgICAgICAgICAgIHNlbGxlck5hbWU6ICcnLFxuICAgICAgICAgICAgc2VsbGVyQWRkcjogJycsXG4gICAgICAgICAgICBzZWxsZXJMb2NhdGlvbjogJycsXG4gICAgICAgICAgICBzb3J0aW5nTWFjaGluZXM6IFtdLFxuICAgICAgICAgICAgaW5wdXRTaXplOiAwLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgICAgICAgIGhhc05vRXJyb3I6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlMTogJycsXG4gICAgICAgICAgICBoYXNOb0Vycm9yMTogZmFsc2UsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UyOiAnJyxcbiAgICAgICAgICAgIGhhc05vRXJyb3IyOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIER5bmFtaWMgZmllbGRzIGFwcGVhciBiYXNlZCBvbiBudW1iZXIgb2Ygc29ydGluZyBtYWNoaW5lcyBcbiAgICBoYW5kbGVPbkNoYW5nZSh2YWx1ZSkgeyB0aGlzLnNldFN0YXRlKHsgaW5wdXRTaXplOiB2YWx1ZS50YXJnZXQudmFsdWUgfSk7IH1cblxuICAgIHJlbmRlcklucHV0cyh2YWx1ZSkge1xuICAgICAgICBjb25zdCBpbnB1dHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZTsgaSsrKSB7XG4gICAgICAgICAgICBpbnB1dHMucHVzaCg8ZGl2PlxuICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5zb3J0aW5nTWFjaGluZXNbaV19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NvcnRpbmdNYWNoaW5lcyA9IFsuLi50aGlzLnN0YXRlLnNvcnRpbmdNYWNoaW5lc107XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTb3J0aW5nTWFjaGluZXNbaV0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc29ydGluZ01hY2hpbmVzOiBuZXdTb3J0aW5nTWFjaGluZXMgfSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImV0aGVyZXVtXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNvcnRpbmdNYWNoaW5lc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0cztcbiAgICB9XG5cbiAgICAvL1JlZ2lzdGVyIGEgTWFudWZhY3R1ZXJlciAmIGludGVyYWN0IHdpdGggdGhlIHJlZ2lzdGVyIFNDXG4gICAgb25SZWdpc3Rlck1hbnUgPSBhc3luYyAoZXZlbnQpID0+IHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50cyB0aGUgYnJvd3NlciBmcm9tIHN1Ym1pdHRpbmcgdGhlIGZvcm0gaW1tZWRpYXRlbHlcblxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgYXdhaXQgcmVnaXN0ZXJDb250cmFjdC5tZXRob2RzXG4gICAgICAgICAgICAgICAgLnJlZ2lzdGVyTWFudWZhY3R1ZXJlcih0aGlzLnN0YXRlLm1hbnVmYWN0dXJlckFkZHIsIHRoaXMuc3RhdGUubWFudWZhY3R1cmVyTG9jYXRpb24sIHRoaXMuc3RhdGUubWFudWZhY3R1cmVyTmFtZSlcbiAgICAgICAgICAgICAgICAuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc0Vycm9yOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGVycm9yTXNnIGlzIGVtcHR5LCByZWdpc3RyYXRpb24gaXMgc3VjY2Vzc2Z1bFxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc05vRXJyb3I6IHRydWUgfSk7XG4gICAgfTtcblxuXG4gICAgLy9SZWdpc3RlciBhIGJ1eWVyICYgaW50ZXJhY3Qgd2l0aCB0aGUgcmVnaXN0ZXIgU0NcbiAgICBvblJlZ2lzdGVyQnV5ZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBhd2FpdCByZWdpc3RlckNvbnRyYWN0Lm1ldGhvZHNcbiAgICAgICAgICAgICAgICAucmVnaXN0ZXJCdXllcih0aGlzLnN0YXRlLmJ1eWVyQWRkciwgdGhpcy5zdGF0ZS5idXllck5hbWUsIHRoaXMuc3RhdGUuYnV5ZXJMb2NhdGlvbiwgdGhpcy5zdGF0ZS5idXllckJ1c2luZXNzKVxuICAgICAgICAgICAgICAgIC5zZW5kKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTE6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc0Vycm9yMTogZmFsc2UgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBlcnJvck1zZyBpcyBlbXB0eSwgcmVnaXN0cmF0aW9uIGlzIHN1Y2Nlc3NmdWxcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZTEpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaGFzTm9FcnJvcjE6IHRydWUgfSk7XG4gICAgfTtcblxuICAgIC8vUmVnaXN0ZXIgYSBzb3J0aW5nIGZhY2lsaXR5ICYgaW50ZXJhY3Qgd2l0aCB0aGUgcmVnaXN0ZXIgU0NcbiAgICBvblJlZ2lzdGVyU2VsbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgYXdhaXQgcmVnaXN0ZXJDb250cmFjdC5tZXRob2RzXG4gICAgICAgICAgICAgICAgLnJlZ2lzdGVyU2VsbGVyKHRoaXMuc3RhdGUuc2VsbGVyQWRkciwgdGhpcy5zdGF0ZS5zZWxsZXJMb2NhdGlvbiwgdGhpcy5zdGF0ZS5zZWxsZXJOYW1lLCB0aGlzLnN0YXRlLnNvcnRpbmdNYWNoaW5lcylcbiAgICAgICAgICAgICAgICAuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2UyOiBlcnIubWVzc2FnZSB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNFcnJvcjI6IGZhbHNlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgZXJyb3JNc2cgaXMgZW1wdHksIHJlZ2lzdHJhdGlvbiBpcyBzdWNjZXNzZnVsXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2UyKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhhc05vRXJyb3IyOiB0cnVlIH0pO1xuICAgIH07XG5cblxuXG5cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmlucHV0U2l6ZSk7XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgc2VsZWN0TWFudWZhY3R1cmVyLFxuICAgICAgICAgICAgc2VsZWN0U29ydGluZ0ZhY2lsaXR5LFxuICAgICAgICAgICAgc2VsZWN0QnV5ZXIsXG4gICAgICAgICAgICBtYW51ZmFjdHVyZXJOYW1lLFxuICAgICAgICAgICAgbWFudWZhY3R1cmVyQWRkcixcbiAgICAgICAgICAgIG1hbnVmYWN0dXJlckxvY2F0aW9uLFxuICAgICAgICAgICAgYnV5ZXJOYW1lLFxuICAgICAgICAgICAgYnV5ZXJBZGRyLFxuICAgICAgICAgICAgYnV5ZXJMb2NhdGlvbixcbiAgICAgICAgICAgIGJ1eWVyQnVzaW5lc3MsXG4gICAgICAgICAgICBzZWxsZXJOYW1lLFxuICAgICAgICAgICAgc2VsbGVyQWRkcixcbiAgICAgICAgICAgIHNlbGxlckxvY2F0aW9uLFxuICAgICAgICAgICAgc29ydGluZ01hY2hpbmVzIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgcmV0dXJuIChcblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNlbGVjdGlvbiBcIj5cbiAgICAgICAgICAgICAgICA8aDE+V2VsY29tZSB0byBSZWdpc3RyYXRpb24gUGFnZTwvaDE+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4xL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8aDI+U2VsZWN0IGEgc3Rha2Vob2xkZXIgdG8gcmVnaXN0ZXI6PC9oMj5cbiAgICAgICAgICAgICAgICA8TWVudSB3aWR0aHM9ezN9PlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J01hbnVmYWN0dXJlcicgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdE1hbnVmYWN0dXJlcjogdHJ1ZSwgc2VsZWN0U29ydGluZ0ZhY2lsaXR5OiBmYWxzZSwgc2VsZWN0QnV5ZXI6IGZhbHNlIH0pfSA+IE1hbnVmYWN0dXJlcjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIG5hbWU9J1NvcnRpbmdGYWNpbGl0eScgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdFNvcnRpbmdGYWNpbGl0eTogdHJ1ZSwgc2VsZWN0TWFudWZhY3R1cmVyOiBmYWxzZSwgc2VsZWN0QnV5ZXI6IGZhbHNlIH0pfSA+IFNvcnRpbmcgRmFjaWxpdHk8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBuYW1lPSdCdXllcicgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdEJ1eWVyOiB0cnVlLCBzZWxlY3RTb3J0aW5nRmFjaWxpdHk6IGZhbHNlLCBzZWxlY3RNYW51ZmFjdHVyZXI6IGZhbHNlIH0pfSA+IEJ1eWVyIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTWVudT5cblxuXG5cbiAgICAgICAgICAgICAgICB7c2VsZWN0TWFudWZhY3R1cmVyICYmIChcblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nTWFudUZvcm0nID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uUmVnaXN0ZXJNYW51fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gc3VjY2Vzcz17dGhpcy5zdGF0ZS5oYXNOb0Vycm9yfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5NYW51ZmFjdHVyZXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5tYW51ZmFjdHVyZXJOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBtYW51ZmFjdHVyZXJOYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hbnVmYWN0dXJlciBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLm1hbnVmYWN0dXJlckFkZHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZXRoZXJldW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBtYW51ZmFjdHVyZXJBZGRyOiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk1hbnVmYWN0dXJlciBMb2NhdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5tYW51ZmFjdHVyZXJMb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgbWFudWZhY3R1cmVyTG9jYXRpb246IGV2ZW50LnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJFcnJvciFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2Ugc3VjY2VzcyBoZWFkZXI9XCJTdWNjZXNzIVwiIGNvbnRlbnQ9XCJNYW51ZmFjdHVlcmVyIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5IVwiIC8+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0nc3VibWl0Jz5SZWdpc3RlcjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3NlbGVjdEJ1eWVyICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25SZWdpc3RlckJ1eWVyfSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZTF9IHN1Y2Nlc3M9e3RoaXMuc3RhdGUuaGFzTm9FcnJvcjF9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QnV5ZXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLmJ1eWVyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBidXllck5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QnV5ZXIgQWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLmJ1eWVyQWRkcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImV0aGVyZXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBidXllckFkZHI6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QnV5ZXIgQnVzaW5lc3MgVHlwZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLkJ1eWVyQnVzaW5lc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgYnV5ZXJCdXNpbmVzczogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5CdXllciBMb2NhdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXt0aGlzLnN0YXRlLmJ1eWVyTG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgYnV5ZXJMb2NhdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJFcnJvciFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZTF9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIHN1Y2Nlc3MgaGVhZGVyPVwiU3VjY2VzcyFcIiBjb250ZW50PVwiQnV5ZXIgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHkhXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnPlJlZ2lzdGVyPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cblxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7c2VsZWN0U29ydGluZ0ZhY2lsaXR5ICYmIChcblxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblJlZ2lzdGVyU2VsbGVyfSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZTJ9IHN1Y2Nlc3M9e3RoaXMuc3RhdGUuaGFzTm9FcnJvcjJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Tb3J0aW5nIEZhY2lsaXR5IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxsZXJOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGxlck5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U29ydGluZyBGYWNpbGl0eSBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUuc2VsbGVyQWRkcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImV0aGVyZXVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxsZXJBZGRyOiBldmVudC50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNvcnRpbmcgRmFjaWxpdHkgTG9jYXRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxsZXJMb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxsZXJMb2NhdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNvcnRpbmcgTWFjaGluZXMgQWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicXVhbnRpdHlcIiBtaW49XCIxXCIgbWF4PVwiN1wiIHBsYWNlaG9sZGVyPVwiU2VsZWN0IG51bWJlciBvZiBtYWNoaW5lcyBpbiBmYWNpbGl0eVwiIG9uQ2hhbmdlPXsodmFsdWUpID0+IHRoaXMuaGFuZGxlT25DaGFuZ2UodmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlcklucHV0cyh0aGlzLnN0YXRlLmlucHV0U2l6ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIkVycm9yIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlMn0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2Ugc3VjY2VzcyBoZWFkZXI9XCJTdWNjZXNzIVwiIGNvbnRlbnQ9XCJTZWxsZXIgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHkhXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnPlJlZ2lzdGVyPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cblxuICAgICAgICAgICAgICAgICl9XG5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbi8vQXQgdGhlIGVuZCBvZiBlYWNoIHBhZ2UsIGEgY29tcG9uZW50IGlzIGV4cGVjdGVkIHRvIGJlIHJldHVybmVkIFxuLy8gSWYgbm90LCBOZXh0LmpzIHRocm93cyBhbiBlcnJvciBcbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdHJhdGlvblBhZ2U7IFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3JlZ2lzdHJhdGlvbi5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7OztBQVRBOzs7Ozs7QUFTQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBa0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBSEE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBWUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFsQkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFwREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUEwRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFIQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFZQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQWxCQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQTNFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQVlBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBbEJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBakdBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFwQkE7QUFzQkE7QUFFQTtBQUNBOzs7Ozs7QUFBQTtBQUFBOzs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFOQTtBQVVBO0FBVkE7OztBQVVBO0FBQ0E7QUFmQTtBQUVBO0FBQ0E7QUFEQTtBQWVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFzQkE7QUFDQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTs7Ozs7QUF3QkE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQWVBO0FBYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQURBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBREE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUlBO0FBSkE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQURBO0FBQUE7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQURBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFEQTtBQUFBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBREE7QUFBQTtBQUlBO0FBSkE7QUFJQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBREE7QUFBQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUlBO0FBSkE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQURBO0FBQUE7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFRQTs7Ozs7OztBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==