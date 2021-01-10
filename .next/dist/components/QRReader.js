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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/eimanalwahhabi/Desktop/RecycleChain/components/QRReader.js';

var isBrowser = typeof window != 'undefined';

if (isBrowser) {
  var QrReader = require('react-qr-reader');
}

var QRReader = function (_Component) {
  (0, _inherits3.default)(QRReader, _Component);

  function QRReader(props) {
    (0, _classCallCheck3.default)(this, QRReader);

    var _this = (0, _possibleConstructorReturn3.default)(this, (QRReader.__proto__ || (0, _getPrototypeOf2.default)(QRReader)).call(this, props));

    _this.state = {
      result: 'No result'
    };

    _this.handleScan = function (data) {
      if (data) {
        _this.setState({ result: data });
      }
    };

    _this.handleError = function (err) {
      console.error(err);
    };

    _this.state = {
      result: ''
    };
    return _this;
  }

  (0, _createClass3.default)(QRReader, [{
    key: 'render',
    value: function render() {
      return isBrowser && _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(QrReader, {
        delay: 300,
        onError: this.handleError,
        onScan: this.handleScan,
        style: { width: '25%' },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, this.state.result));
    }
  }]);

  return QRReader;
}(_react.Component);

exports.default = QRReader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUVJSZWFkZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJpc0Jyb3dzZXIiLCJ3aW5kb3ciLCJRclJlYWRlciIsInJlcXVpcmUiLCJRUlJlYWRlciIsInByb3BzIiwic3RhdGUiLCJyZXN1bHQiLCJoYW5kbGVTY2FuIiwiZGF0YSIsInNldFN0YXRlIiwiaGFuZGxlRXJyb3IiLCJjb25zb2xlIiwiZXJyb3IiLCJlcnIiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7O0FBQ2hCLElBQU0sWUFBWSxPQUFBLEFBQU8sVUFBekIsQUFBbUM7O0FBRW5DLElBQUEsQUFBSSxXQUFXLEFBQ1g7TUFBSSxXQUFKLEFBQUksQUFBVyxBQUNsQjs7O0ksQUFHSztvQ0FFRjs7b0JBQUEsQUFBWSxPQUFPO3dDQUFBOzswSUFBQSxBQUNUOztVQURTLEFBT3JCO2NBUHFCLEFBT2IsQUFDRTtBQURGLEFBQ047O1VBUm1CLEFBV3JCLGFBQWEsZ0JBQVEsQUFDbkI7VUFBQSxBQUFJLE1BQU0sQUFDTjtjQUFBLEFBQUssU0FBUyxFQUFFLFFBQWhCLEFBQWMsQUFBVSxBQUMzQjtBQUNKO0FBZnNCOztVQUFBLEFBaUJ2QixjQUFjLGVBQU8sQUFDakI7Y0FBQSxBQUFRLE1BQVIsQUFBYyxBQUNqQjtBQW5Cc0IsQUFFZjs7VUFBQSxBQUFLO2NBRlUsQUFFZixBQUFXLEFBQ0Q7QUFEQyxBQUNUO1dBRUw7Ozs7OzZCQWdCTSxBQUNQO2FBQU8sNkJBQ0wsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxnQ0FDRSxBQUFDO2VBQUQsQUFDUyxBQUNQO2lCQUFTLEtBRlgsQUFFZ0IsQUFDZDtnQkFBUSxLQUhWLEFBR2UsQUFDYjtlQUFPLEVBQUUsT0FKWCxBQUlTLEFBQVM7O29CQUpsQjtzQkFERixBQUNFLEFBTUE7QUFOQTtBQUNFLDBCQUtGLGNBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLGNBQUksQUFBSyxNQVJiLEFBQ0UsQUFPRSxBQUFlLEFBR3BCOzs7OztBQUdILEEsQUF0Q3VCOztrQkFzQ3ZCLEFBQWUiLCJmaWxlIjoiUVJSZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VpbWFuYWx3YWhoYWJpL0Rlc2t0b3AvUmVjeWNsZUNoYWluIn0=