'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

        var _this = (0, _possibleConstructorReturn3.default)(this, (registrationPage.__proto__ || (0, _getPrototypeOf2.default)(registrationPage)).call(this, props));

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
            inputSize: 0
        };
        return _this;
    }

    (0, _createClass3.default)(registrationPage, [{
        key: 'handleOnChange',
        value: function handleOnChange(value) {
            this.setState({ inputSize: value.target.value });
        }
    }, {
        key: 'renderInputs',
        value: function renderInputs(value) {
            var _this2 = this;

            var inputs = [];
            for (var i = 0; i < value; i++) {
                inputs.push(_react2.default.createElement('div', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                }, ' ', _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sortingMachines[i],
                    onChange: function onChange(event) {
                        return _this2.setState({ sortingMachines: event.target.value });
                    },
                    icon: 'ethereum', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                })));

                for (var _i = 0; _i < value; _i++) {
                    console.log(this.state.sortingMachines[_i]);
                }
            }
            return inputs;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

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
                    lineNumber: 75
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, 'Welcome to Registration Page'), _react2.default.createElement('link', { rel: 'stylesheet',
                href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, 'Select a stakeholder to register:'), _react2.default.createElement(_semanticUiReact.Menu, { widths: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Manufacturer', onClick: function onClick() {
                    return _this3.setState({ selectManufacturer: true, selectSortingFacility: false, selectBuyer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, ' Manufacturer'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'SortingFacility', onClick: function onClick() {
                    return _this3.setState({ selectSortingFacility: true, selectManufacturer: false, selectBuyer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, ' Sorting Facility'), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'Buyer', onClick: function onClick() {
                    return _this3.setState({ selectBuyer: true, selectSortingFacility: false, selectManufacturer: false });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, ' Buyer ')), selectManufacturer && _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, 'Manufacturer Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerName,
                onChange: function onChange(event) {
                    return _this3.setState({ manufacturerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, 'Manufacturer Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this3.setState({ manufacturerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, 'Manufacturer Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.manufacturerLocation,
                onChange: function onChange(event) {
                    return _this3.setState({ manufacturerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, 'Register')), selectBuyer && _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, 'Buyer Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerName,
                onChange: function onChange(event) {
                    return _this3.setState({ buyerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, 'Buyer Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this3.setState({ buyerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
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
            }, 'Buyer Business Type'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.BuyerBusiness,
                onChange: function onChange(event) {
                    return _this3.setState({ buyerBusiness: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            }, 'Buyer Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.buyerLocation,
                onChange: function onChange(event) {
                    return _this3.setState({ buyerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 134
                }
            }, 'Register')), selectSortingFacility && _react2.default.createElement(_semanticUiReact.Form, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143
                }
            }, 'Sorting Facility Name'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerName,
                onChange: function onChange(event) {
                    return _this3.setState({ sellerName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 147
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 148
                }
            }, 'Sorting Facility Address'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerAddr,
                icon: 'ethereum',
                onChange: function onChange(event) {
                    return _this3.setState({ sellerAddr: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 154
                }
            }, 'Sorting Facility Location'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.sellerLocation,
                onChange: function onChange(event) {
                    return _this3.setState({ sellerLocation: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 155
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 159
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                }
            }, 'Sorting Machines Address'), _react2.default.createElement('input', { type: 'number', name: 'quantity', min: '1', max: '7', onChange: function onChange(value) {
                    return _this3.handleOnChange(value);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            }), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                }
            }, this.renderInputs(this.state.inputSize))), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                }
            }, 'Register')));
        }
    }]);

    return registrationPage;
}(_react.Component);

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 


exports.default = registrationPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3JlZ2lzdHJhdGlvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJUcmFuc2l0aW9uIiwicmVnaXN0cmF0aW9uUGFnZSIsInByb3BzIiwic3RhdGUiLCJzZWxlY3RNYW51ZmFjdHVyZXIiLCJzZWxlY3RTb3J0aW5nRmFjaWxpdHkiLCJzZWxlY3RCdXllciIsIm1hbnVmYWN0dXJlck5hbWUiLCJtYW51ZmFjdHVyZXJBZGRyIiwibWFudWZhY3R1cmVyTG9jYXRpb24iLCJidXllck5hbWUiLCJidXllckFkZHIiLCJidXllckxvY2F0aW9uIiwiYnV5ZXJCdXNpbmVzcyIsInNlbGxlck5hbWUiLCJzZWxsZXJBZGRyIiwic2VsbGVyTG9jYXRpb24iLCJzb3J0aW5nTWFjaGluZXMiLCJpbnB1dFNpemUiLCJ2YWx1ZSIsInNldFN0YXRlIiwidGFyZ2V0IiwiaW5wdXRzIiwiaSIsInB1c2giLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJCdXllckJ1c2luZXNzIiwiaGFuZGxlT25DaGFuZ2UiLCJyZW5kZXJJbnB1dHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFNLEFBQVEsQUFBTzs7Ozs7QUFQcEM7Ozs7OztBQVNBOztJLEFBRU07OENBRUY7OzhCQUFBLEFBQVksT0FBTzs0Q0FBQTs7OEpBQUEsQUFDVCxBQUNOOztjQUFBLEFBQUs7Z0NBQVEsQUFDVyxBQUNwQjttQ0FGUyxBQUVjLEFBQ3ZCO3lCQUhTLEFBR0ksQUFDYjs4QkFKUyxBQUlTLEFBQ2xCOzhCQUxTLEFBS1MsQUFDbEI7a0NBTlMsQUFNYSxBQUN0Qjt1QkFQUyxBQU9FLEFBQ1g7dUJBUlMsQUFRRSxBQUNYOzJCQVRTLEFBU00sQUFDZjsyQkFWUyxBQVVNLEFBQ2Y7d0JBWFMsQUFXRyxBQUNaO3dCQVpTLEFBWUcsQUFDWjs0QkFiUyxBQWFPLEFBQ2hCOzZCQWRTLEFBY1EsQUFDakI7dUJBakJXLEFBRWYsQUFBYSxBQWVFO0FBZkYsQUFDVDtlQWdCUDs7Ozs7dUMsQUFFYyxPQUFPLEFBQUU7aUJBQUEsQUFBSyxTQUFTLEVBQUUsV0FBVyxNQUFBLEFBQU0sT0FBakMsQUFBYyxBQUEwQixBQUFXOzs7O3FDLEFBRTlELE9BQU87eUJBQ2hCOztnQkFBTSxTQUFOLEFBQWUsQUFDZjtpQkFBSyxJQUFJLElBQVQsQUFBYSxHQUFHLElBQWhCLEFBQW9CLE9BQXBCLEFBQTJCLEtBQUssQUFDNUI7dUJBQUEsQUFBTyxxQkFBSyxjQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsaUJBQUEsRUFBTSxxQkFBQSxBQUFDLHdDQUFNLE9BQU8sS0FBQSxBQUFLLE1BQUwsQUFBVyxnQkFBekIsQUFBYyxBQUEyQixBQUN2RDs4QkFBVSx5QkFBQTsrQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLGlCQUFpQixNQUFBLEFBQU0sT0FBaEQsQUFBUyxBQUFjLEFBQWdDO0FBRG5ELEFBRWQ7MEJBRmMsQUFFVDtrQ0FGUztvQ0FBbEIsQUFBWSxBQUFNLEFBS2I7QUFMYTs7O3FCQUtSLElBQUksS0FBVCxBQUFhLEdBQUcsS0FBaEIsQUFBb0IsT0FBcEIsQUFBMkIsTUFBSSxBQUM1Qjs0QkFBQSxBQUFRLElBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxnQkFBdkIsQUFBWSxBQUEyQixBQUMxQztBQUNSO0FBQ0Q7bUJBQUEsQUFBTyxBQUNWOzs7O2lDQUVRO3lCQUVMOztvQkFBQSxBQUFRLElBQUksS0FBQSxBQUFLLE1BRlosQUFFTCxBQUF1Qjs7eUJBZ0JDLEtBbEJuQixBQWtCd0I7Z0JBbEJ4QixBQUtELDRCQUxDLEFBS0Q7Z0JBTEMsQUFNRCwrQkFOQyxBQU1EO2dCQU5DLEFBT0QscUJBUEMsQUFPRDtnQkFQQyxBQVFELDBCQVJDLEFBUUQ7Z0JBUkMsQUFTRCwwQkFUQyxBQVNEO2dCQVRDLEFBVUQsOEJBVkMsQUFVRDtnQkFWQyxBQVdELG1CQVhDLEFBV0Q7Z0JBWEMsQUFZRCxtQkFaQyxBQVlEO2dCQVpDLEFBYUQsdUJBYkMsQUFhRDtnQkFiQyxBQWNELHVCQWRDLEFBY0Q7Z0JBZEMsQUFlRCxvQkFmQyxBQWVEO2dCQWZDLEFBZ0JELG9CQWhCQyxBQWdCRDtnQkFoQkMsQUFpQkQsd0JBakJDLEFBaUJEO2dCQWpCQyxBQWtCRCx5QkFsQkMsQUFrQkQsQUFHSjs7bUNBRUksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EseUVBQU0sS0FBTixBQUFVLEFBQ047c0JBREosQUFDUzs7OEJBRFQ7Z0NBRkosQUFFSSxBQUdBO0FBSEE7Z0NBR0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTEosQUFLSSxBQUNBLHNEQUFBLEFBQUMsdUNBQUssUUFBTixBQUFjOzhCQUFkO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHNCQUFBLEFBQU0sUUFBSyxNQUFYLEFBQWdCLGdCQUFlLFNBQVMsbUJBQUE7MkJBQU0sT0FBQSxBQUFLLFNBQVMsRUFBRSxvQkFBRixBQUFzQixNQUFNLHVCQUE1QixBQUFtRCxPQUFPLGFBQTlFLEFBQU0sQUFBYyxBQUF1RTtBQUFuSTs4QkFBQTtnQ0FBQTtBQUFBO2VBREosQUFDSSxBQUNBLGtDQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLE1BQVgsQUFBZ0IsbUJBQWtCLFNBQVMsbUJBQUE7MkJBQU0sT0FBQSxBQUFLLFNBQVMsRUFBRSx1QkFBRixBQUF5QixNQUFNLG9CQUEvQixBQUFtRCxPQUFPLGFBQTlFLEFBQU0sQUFBYyxBQUF1RTtBQUF0STs4QkFBQTtnQ0FBQTtBQUFBO2VBRkosQUFFSSxBQUNBLHNDQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLE1BQVgsQUFBZ0IsU0FBUSxTQUFTLG1CQUFBOzJCQUFNLE9BQUEsQUFBSyxTQUFTLEVBQUUsYUFBRixBQUFlLE1BQU0sdUJBQXJCLEFBQTRDLE9BQU8sb0JBQXZFLEFBQU0sQUFBYyxBQUF1RTtBQUE1SDs4QkFBQTtnQ0FBQTtBQUFBO2VBVFIsQUFNSSxBQUdJLEFBR0gsbURBRUcsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSyxjQUFELHNCQUFBLEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHNDQUFBLEFBQUMsd0NBQU0sT0FBTyxLQUFBLEFBQUssTUFBbkIsQUFBeUIsQUFDckI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxrQkFBa0IsTUFBQSxBQUFNLE9BQWpELEFBQVMsQUFBYyxBQUFpQztBQUR0RTs4QkFBQTtnQ0FIUixBQUNJLEFBRUksQUFHSjtBQUhJO2lDQUdILGNBQUQsc0JBQUEsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EseUNBQUEsQUFBQyx3Q0FBTSxPQUFPLEtBQUEsQUFBSyxNQUFuQixBQUF5QixBQUNyQjtzQkFESixBQUNTLEFBQ0w7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxrQkFBa0IsTUFBQSxBQUFNLE9BQWpELEFBQVMsQUFBYyxBQUFpQztBQUZ0RTs4QkFBQTtnQ0FSUixBQU1JLEFBRUksQUFJSjtBQUpJO2lDQUlILGNBQUQsc0JBQUEsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsMENBQUEsQUFBQyx3Q0FBTSxPQUFPLEtBQUEsQUFBSyxNQUFuQixBQUF5QixBQUNyQjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLHNCQUFzQixNQUFBLEFBQU0sT0FBckQsQUFBUyxBQUFjLEFBQXFDO0FBRDFFOzhCQUFBO2dDQWRSLEFBWUksQUFFSSxBQUdKO0FBSEk7aUNBR0osQUFBQyx5Q0FBTyxNQUFSLEFBQWE7OEJBQWI7Z0NBQUE7QUFBQTtlQS9CWixBQWNRLEFBaUJJLEFBS1AsNkNBQ0csQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSyxjQUFELHNCQUFBLEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLCtCQUFBLEFBQUMsd0NBQU0sT0FBTyxLQUFBLEFBQUssTUFBbkIsQUFBeUIsQUFDckI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxXQUFXLE1BQUEsQUFBTSxPQUExQyxBQUFTLEFBQWMsQUFBMEI7QUFEL0Q7OEJBQUE7Z0NBSFIsQUFDSSxBQUVJLEFBR0o7QUFISTtpQ0FHSCxjQUFELHNCQUFBLEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLGtDQUFBLEFBQUMsd0NBQU0sT0FBTyxLQUFBLEFBQUssTUFBbkIsQUFBeUIsQUFDckI7c0JBREosQUFDUyxBQUNMOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsV0FBVyxNQUFBLEFBQU0sT0FBMUMsQUFBUyxBQUFjLEFBQTBCO0FBRi9EOzhCQUFBO2dDQVJSLEFBTUksQUFFSSxBQUlKO0FBSkk7aUNBSUgsY0FBRCxzQkFBQSxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSx3Q0FBQSxBQUFDLHdDQUFNLE9BQU8sS0FBQSxBQUFLLE1BQW5CLEFBQXlCLEFBQ3JCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsZUFBZSxNQUFBLEFBQU0sT0FBOUMsQUFBUyxBQUFjLEFBQThCO0FBRG5FOzhCQUFBO2dDQWRSLEFBWUksQUFFSSxBQUdKO0FBSEk7aUNBR0gsY0FBRCxzQkFBQSxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxtQ0FBQSxBQUFDLHdDQUFNLE9BQU8sS0FBQSxBQUFLLE1BQW5CLEFBQXlCLEFBQ3JCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsZUFBZSxNQUFBLEFBQU0sT0FBOUMsQUFBUyxBQUFjLEFBQThCO0FBRG5FOzhCQUFBO2dDQW5CUixBQWlCSSxBQUVJLEFBR0o7QUFISTtpQ0FHSixBQUFDLHlDQUFPLE1BQVIsQUFBYTs4QkFBYjtnQ0FBQTtBQUFBO2VBM0RaLEFBcUNRLEFBc0JJLEFBS1AsdURBRUcsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSyxjQUFELHNCQUFBLEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDBDQUFBLEFBQUMsd0NBQU0sT0FBTyxLQUFBLEFBQUssTUFBbkIsQUFBeUIsQUFDckI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxZQUFZLE1BQUEsQUFBTSxPQUEzQyxBQUFTLEFBQWMsQUFBMkI7QUFEaEU7OEJBQUE7Z0NBSFIsQUFDSSxBQUVJLEFBR0o7QUFISTtpQ0FHSCxjQUFELHNCQUFBLEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDZDQUFBLEFBQUMsd0NBQU0sT0FBTyxLQUFBLEFBQUssTUFBbkIsQUFBeUIsQUFDckI7c0JBREosQUFDUyxBQUNMOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsWUFBWSxNQUFBLEFBQU0sT0FBM0MsQUFBUyxBQUFjLEFBQTJCO0FBRmhFOzhCQUFBO2dDQVJSLEFBTUksQUFFSSxBQUlKO0FBSkk7aUNBSUgsY0FBRCxzQkFBQSxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw4Q0FBQSxBQUFDLHdDQUFNLE9BQU8sS0FBQSxBQUFLLE1BQW5CLEFBQXlCLEFBQ3JCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsZ0JBQWdCLE1BQUEsQUFBTSxPQUEvQyxBQUFTLEFBQWMsQUFBK0I7QUFEcEU7OEJBQUE7Z0NBZFIsQUFZSSxBQUVJLEFBSUo7QUFKSTtpQ0FJSCxjQUFELHNCQUFBLEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREEsQUFDQSxBQUNJLHNFQUFPLE1BQVAsQUFBWSxVQUFTLE1BQXJCLEFBQTBCLFlBQVcsS0FBckMsQUFBeUMsS0FBSSxLQUE3QyxBQUFpRCxLQUFJLFVBQVUsa0JBQUEsQUFBQyxPQUFEOzJCQUFXLE9BQUEsQUFBSyxlQUFoQixBQUFXLEFBQW9CO0FBQTlGOzhCQUFBO2dDQUZKLEFBRUksQUFDQTtBQURBO2dDQUNBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQUNLLEFBQUssYUFBYSxLQUFBLEFBQUssTUF0QnBDLEFBa0JJLEFBR0ksQUFDSyxBQUE2QixBQUl0Qyw4QkFBQSxBQUFDLHlDQUFPLE1BQVIsQUFBYTs4QkFBYjtnQ0FBQTtBQUFBO2VBOUZoQixBQUVJLEFBa0VRLEFBMEJJLEFBUW5COzs7OztBLEFBbkswQjs7QUF1Sy9CO0FBQ0EsQUFDQTs7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmVnaXN0cmF0aW9uLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9laW1hbmFsd2FoaGFiaS9EZXNrdG9wL1JlY3ljbGVDaGFpbiJ9