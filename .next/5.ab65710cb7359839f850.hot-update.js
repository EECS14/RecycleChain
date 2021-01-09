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

//current provider is the provider injected by MetaMask 
var web3 = void 0;

//typeof is used to check if window is defined 
/*
Purpose: import this file to get access to web3
Primary provider is MetaMask 
*/
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  //Connect metamask to the webapp 
  window.ethereum.enable();

  web3 = new _web2.default(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider('https://ropsten.infura.io/v3/a5dc022ed8df4754b509e1f289d10b05');
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQSxBQUFPOzs7Ozs7QUFFUDtBQUNBLElBQUksWUFBSjs7QUFFQTtBQVRBOzs7O0FBVUEsSUFBSSxPQUFBLEFBQU8sV0FBUCxBQUFrQixlQUFlLE9BQU8sT0FBUCxBQUFjLFNBQW5ELEFBQTRELGFBQWEsQUFDdkU7QUFDQTtBQUNBO1NBQUEsQUFBTyxTQUFQLEFBQWdCLEFBRWhCOztTQUFPLEFBQUksa0JBQUssT0FBQSxBQUFPLEtBQXZCLEFBQU8sQUFBcUIsQUFDN0I7QUFORCxPQU1PLEFBQ0w7QUFDQTtNQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssVUFBVCxBQUFtQixhQUFwQyxBQUFpQixBQUFpQyxBQUNsRDtTQUFPLEFBQUksa0JBQVgsQUFBTyxBQUFTLEFBQ2pCO0FBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWltYW5hbHdhaGhhYmkvRGVza3RvcC9SZWN5Y2xlQ2hhaW4ifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/eimanalwahhabi/Desktop/RecycleChain/ethereum/web3.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/eimanalwahhabi/Desktop/RecycleChain/ethereum/web3.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hYjY1NzEwY2I3MzU5ODM5Zjg1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vd2ViMy5qcz85MjJjZWIxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5QdXJwb3NlOiBpbXBvcnQgdGhpcyBmaWxlIHRvIGdldCBhY2Nlc3MgdG8gd2ViM1xuUHJpbWFyeSBwcm92aWRlciBpcyBNZXRhTWFzayBcbiovXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJzsgXG5cbi8vY3VycmVudCBwcm92aWRlciBpcyB0aGUgcHJvdmlkZXIgaW5qZWN0ZWQgYnkgTWV0YU1hc2sgXG5sZXQgd2ViMztcblxuLy90eXBlb2YgaXMgdXNlZCB0byBjaGVjayBpZiB3aW5kb3cgaXMgZGVmaW5lZCBcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LndlYjMgIT09ICd1bmRlZmluZWQnKSB7XG4gIC8vIFdlIGFyZSBpbiB0aGUgYnJvd3NlciBhbmQgbWV0YW1hc2sgaXMgcnVubmluZy5cbiAgLy9Db25uZWN0IG1ldGFtYXNrIHRvIHRoZSB3ZWJhcHAgXG4gIHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTsgXG4gIFxuICB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcbn0gZWxzZSB7XG4gIC8vIFdlIGFyZSBvbiB0aGUgc2VydmVyICpPUiogdGhlIHVzZXIgaXMgbm90IHJ1bm5pbmcgbWV0YW1hc2tcbiAgY29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKCAnaHR0cHM6Ly9yb3BzdGVuLmluZnVyYS5pby92My9hNWRjMDIyZWQ4ZGY0NzU0YjUwOWUxZjI4OWQxMGIwNScpO1xuICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xufSBcblxuZXhwb3J0IGRlZmF1bHQgd2ViMztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V0aGVyZXVtL3dlYjMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTs7OztBQVVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQURBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=