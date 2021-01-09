webpackHotUpdate(5,{

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = __webpack_require__(1196);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Connect metamask to the webapp 

window.ethereum.enable().catch(function (error) {
  // User denied account access
  console.log(error);
});

//current provider is the provider injected by MetaMask 
/*
Purpose: import this file to get access to web3
Primary provider is MetaMask 
*/
var web3 = void 0;

//typeof is used to check if window is defined 
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider('https://ropsten.infura.io/v3/a5dc022ed8df4754b509e1f289d10b05');
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndpbmRvdyIsImV0aGVyZXVtIiwiZW5hYmxlIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ3ZWIzIiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLEFBQU87Ozs7OztBQUVQOztBQUVBLE9BQUEsQUFBTyxTQUFQLEFBQWdCLFNBQWhCLEFBQXlCLE1BQU0saUJBQVMsQUFDdEM7QUFDRDtVQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7QUFIRDs7QUFNQTtBQWRBOzs7O0FBZUEsSUFBSSxZQUFKOztBQUVBO0FBQ0EsSUFBSSxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQW5ELEFBQTRELGFBQWEsQUFDdkU7QUFDQTtTQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBQXZCLEFBQU8sQUFBcUIsQUFDN0I7QUFIRCxPQUdPLEFBQ0w7QUFDQTtNQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssVUFBVCxBQUFtQixhQUFwQyxBQUFpQixBQUFpQyxBQUNsRDtTQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBQ2pCO0FBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWltYW5hbHdhaGhhYmkvRGVza3RvcC9SZWN5Y2xlQ2hhaW4ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/eimanalwahhabi/Desktop/RecycleChain/ethereum/web3.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/eimanalwahhabi/Desktop/RecycleChain/ethereum/web3.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lOWIzY2ZkOWE0MzQwMDVkY2M5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vd2ViMy5qcz8zZTViNWY5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5QdXJwb3NlOiBpbXBvcnQgdGhpcyBmaWxlIHRvIGdldCBhY2Nlc3MgdG8gd2ViM1xuUHJpbWFyeSBwcm92aWRlciBpcyBNZXRhTWFzayBcbiovXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJzsgXG5cbi8vQ29ubmVjdCBtZXRhbWFzayB0byB0aGUgd2ViYXBwIFxuXG53aW5kb3cuZXRoZXJldW0uZW5hYmxlKCkuY2F0Y2goZXJyb3IgPT4ge1xuICAvLyBVc2VyIGRlbmllZCBhY2NvdW50IGFjY2Vzc1xuIGNvbnNvbGUubG9nKGVycm9yKVxufSlcblxuXG4vL2N1cnJlbnQgcHJvdmlkZXIgaXMgdGhlIHByb3ZpZGVyIGluamVjdGVkIGJ5IE1ldGFNYXNrIFxubGV0IHdlYjM7XG5cbi8vdHlwZW9mIGlzIHVzZWQgdG8gY2hlY2sgaWYgd2luZG93IGlzIGRlZmluZWQgXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy53ZWIzICE9PSAndW5kZWZpbmVkJykge1xuICAvLyBXZSBhcmUgaW4gdGhlIGJyb3dzZXIgYW5kIG1ldGFtYXNrIGlzIHJ1bm5pbmcuXG4gIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xufSBlbHNlIHtcbiAgLy8gV2UgYXJlIG9uIHRoZSBzZXJ2ZXIgKk9SKiB0aGUgdXNlciBpcyBub3QgcnVubmluZyBtZXRhbWFza1xuICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoICdodHRwczovL3JvcHN0ZW4uaW5mdXJhLmlvL3YzL2E1ZGMwMjJlZDhkZjQ3NTRiNTA5ZTFmMjg5ZDEwYjA1Jyk7XG4gIHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XG59IFxuXG5leHBvcnQgZGVmYXVsdCB3ZWIzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXRoZXJldW0vd2ViMy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRkE7QUFDQTtBQUtBO0FBZEE7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFGQTtBQUtBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9