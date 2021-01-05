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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndpbmRvdyIsImV0aGVyZXVtIiwiZW5hYmxlIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ3ZWIzIiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLEFBQU87Ozs7OztBQUVQO0FBQ0EsT0FBQSxBQUFPLFNBQVAsQUFBZ0IsU0FBaEIsQUFBeUIsTUFBTSxpQkFBUyxBQUN0QztBQUNEO1VBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtBQUhEOztBQUtBO0FBWkE7Ozs7QUFhQSxJQUFJLFlBQUo7O0FBRUE7QUFDQSxJQUFJLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBTyxPQUFQLEFBQWMsU0FBbkQsQUFBNEQsYUFBYSxBQUN2RTtBQUNBO1NBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBdkIsQUFBTyxBQUFxQixBQUM3QjtBQUhELE9BR08sQUFDTDtBQUNBO01BQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQXBDLEFBQWlCLEFBQWlDLEFBQ2xEO1NBQU8sQUFBSSxrQkFBWCxBQUFPLEFBQVMsQUFDakI7QUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9laW1hbmFsd2FoaGFiaS9EZXNrdG9wL1JlY3ljbGVDaGFpbiJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/eimanalwahhabi/Desktop/RecycleChain/ethereum/web3.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/eimanalwahhabi/Desktop/RecycleChain/ethereum/web3.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jODUyMGExMjg4N2MzMmViYzIxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vd2ViMy5qcz8xZWJjNTRkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5QdXJwb3NlOiBpbXBvcnQgdGhpcyBmaWxlIHRvIGdldCBhY2Nlc3MgdG8gd2ViM1xuUHJpbWFyeSBwcm92aWRlciBpcyBNZXRhTWFzayBcbiovXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJzsgXG5cbi8vQ29ubmVjdCBtZXRhbWFzayB0byB0aGUgd2ViYXBwIFxud2luZG93LmV0aGVyZXVtLmVuYWJsZSgpLmNhdGNoKGVycm9yID0+IHtcbiAgLy8gVXNlciBkZW5pZWQgYWNjb3VudCBhY2Nlc3NcbiBjb25zb2xlLmxvZyhlcnJvcilcbn0pXG5cbi8vY3VycmVudCBwcm92aWRlciBpcyB0aGUgcHJvdmlkZXIgaW5qZWN0ZWQgYnkgTWV0YU1hc2sgXG5sZXQgd2ViMztcblxuLy90eXBlb2YgaXMgdXNlZCB0byBjaGVjayBpZiB3aW5kb3cgaXMgZGVmaW5lZCBcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LndlYjMgIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIFdlIGFyZSBpbiB0aGUgYnJvd3NlciBhbmQgbWV0YW1hc2sgaXMgcnVubmluZy5cbiAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7XG59IGVsc2Uge1xuICAvLyBXZSBhcmUgb24gdGhlIHNlcnZlciAqT1IqIHRoZSB1c2VyIGlzIG5vdCBydW5uaW5nIG1ldGFtYXNrXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlciggJ2h0dHBzOi8vcm9wc3Rlbi5pbmZ1cmEuaW8vdjMvYTVkYzAyMmVkOGRmNDc1NGI1MDllMWYyODlkMTBiMDUnKTtcbiAgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcbn0gXG5cbmV4cG9ydCBkZWZhdWx0IHdlYjM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ldGhlcmV1bS93ZWIzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBWkE7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFGQTtBQUtBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9