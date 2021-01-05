'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Register = require('./build/Register.json');

var _Register2 = _interopRequireDefault(_Register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
*/
var instance = new _web2.default.eth.Contract(_Register2.default.abi, '0x7126ec4f68added009015a1f5ac718c4896faa2e'
// Address of the regist.sol contract in ropsten network
);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJyZWdpc3RlciIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJhYmkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7OztBQUpyQjs7O0FBTUEsSUFBTSxlQUFlLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDMUIsbUJBRGEsQUFDSixLQUNSO0FBRkwsQUFBaUIsQUFHWixBQUdMO0FBTmlCOztrQkFNakIsQUFBZSIsImZpbGUiOiJyZWdpc3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWltYW5hbHdhaGhhYmkvRGVza3RvcC9SZWN5Y2xlQ2hhaW4ifQ==