'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Tracking = require('./build/Tracking.json');

var _Tracking2 = _interopRequireDefault(_Tracking);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
purpose: To access the contract (register.sol) instance from inside the application without repeating these steps 
*/
var instance = new _web2.default.eth.Contract(_Tracking2.default.abi, '0x19d41e07d4018c12fe69429c499d45f520dbfee2'
// Address of the tracking.sol contract in ropsten network
);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3RyYWNraW5nLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJUcmFja2luZyIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJhYmkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7OztBQUpyQjs7O0FBTUEsSUFBTSxlQUFlLGNBQUEsQUFBSyxJQUFULEFBQWEsU0FDMUIsbUJBRGEsQUFDSixLQUNSO0FBRkwsQUFBaUIsQUFHWixBQUdMO0FBTmlCOztrQkFNakIsQUFBZSIsImZpbGUiOiJ0cmFja2luZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWltYW5hbHdhaGhhYmkvRGVza3RvcC9SZWN5Y2xlQ2hhaW4ifQ==