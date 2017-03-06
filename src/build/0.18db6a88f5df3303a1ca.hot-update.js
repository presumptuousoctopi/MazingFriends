webpackHotUpdate(0,{

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(189);
	
	var _reactAlert = __webpack_require__(291);
	
	var _reactAlert2 = _interopRequireDefault(_reactAlert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Login = function (_React$Component) {
	  _inherits(Login, _React$Component);
	
	  function Login() {
	    _classCallCheck(this, Login);
	
	    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));
	  }
	
	  _createClass(Login, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var socket = window.socket;
	      var context = this;
	      socket.on('signinResponse', function (obj) {
	        if (window.sessionStorage.getItem('user')) {
	          context.showAlert("Youre already logged in!");
	        }
	        if (obj.message) {
	          context.showAlert(obj.message);
	        } else {
	          window.sessionStorage.setItem('user', obj.username);
	          _reactRouter.browserHistory.push({ pathname: '/home' });
	        }
	      });
	      this.setState({
	        socket: socket
	      });
	    }
	  }, {
	    key: 'signIn',
	    value: function signIn(e) {
	      e.preventDefault();
	      var user = {
	        username: this.refs.username.value,
	        password: this.refs.password.value
	      };
	      console.log('attempt to sign in!');
	      window.socket.emit('signin', user);
	    }
	  }, {
	    key: 'showAlert',
	    value: function showAlert(msg) {
	      msg.show(msg, {
	        time: 2000,
	        type: 'success',
	        icon: _react2.default.createElement('img', { src: 'path/to/some/img/32x32.png' })
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_reactAlert2.default, _extends({ ref: function ref(a) {
	            return global.msg = a;
	          } }, this.alertOptions)),
	        _react2.default.createElement(
	          'form',
	          { className: 'loginForm', onSubmit: this.signIn.bind(this) },
	          'Username:',
	          _react2.default.createElement('input', { ref: 'username', required: 'true' }),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement('br', null),
	          'Password:',
	          _react2.default.createElement('input', { type: 'password', ref: 'password', required: 'true' }),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            'button',
	            { type: 'submit' },
	            'Log in'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Login;
	}(_react2.default.Component);
	
	exports.default = Login;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Login.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module), (function() { return this; }())))

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(98), __webpack_require__(292), __webpack_require__(99));
		else if(typeof define === 'function' && define.amd)
			define(["react", "react-addons-css-transition-group", "react-dom"], factory);
		else if(typeof exports === 'object')
			exports["react-alert"] = factory(require("react"), require("react-addons-css-transition-group"), require("react-dom"));
		else
			root["react-alert"] = factory(root["react"], root["react-addons-css-transition-group"], root["react-dom"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_16__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "/dist";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(1);
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		//load styles
		'use strict';
	
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
		__webpack_require__(2);
	
		//load js
	
		var _react = __webpack_require__(11);
	
		var _react2 = _interopRequireDefault(_react);
	
		var _devComponentsAlertContainer = __webpack_require__(12);
	
		var _devComponentsAlertContainer2 = _interopRequireDefault(_devComponentsAlertContainer);
	
		exports['default'] = _devComponentsAlertContainer2['default'];
		module.exports = exports['default'];
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		// style-loader: Adds some css to the DOM by adding a <style> tag
	
		// load the styles
		var content = __webpack_require__(3);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(10)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/stylus-loader/index.js!./alert.styl", function() {
					var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/stylus-loader/index.js!./alert.styl");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		exports = module.exports = __webpack_require__(4)();
		exports.push([module.id, ".react-alerts {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  margin: 14px;\n  z-index: 999999;\n}\n.react-alerts .alert {\n  width: 300px;\n  min-height: 50px;\n  margin: 10px 0 0 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-radius: 2px;\n  background-color: #333;\n  font-size: 11px;\n  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.3);\n  color: #fff;\n}\n.react-alerts .alert .content {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n}\n.react-alerts .alert .icon {\n  width: 32px;\n  height: 32px;\n}\n.react-alerts .alert .icon div {\n  width: 100%;\n  height: 100%;\n  background-position: 50%;\n  background-repeat: no-repeat;\n}\n.react-alerts .alert .icon .info-icon {\n  background-image: url("+__webpack_require__(5)+");\n}\n.react-alerts .alert .icon .error-icon {\n  background-image: url("+__webpack_require__(6)+");\n}\n.react-alerts .alert .icon .success-icon {\n  background-image: url("+__webpack_require__(7)+");\n}\n.react-alerts .alert .message {\n  -webkit-box-flex: 3;\n  -webkit-flex: 3;\n      -ms-flex: 3;\n          flex: 3;\n  text-transform: uppercase;\n  padding: 8px 10px;\n}\n.react-alerts .alert .close {\n  height: 50px;\n  background-color: #444;\n  border-radius: 0 2px 2px 0;\n  line-height: 50px;\n  cursor: pointer;\n}\n.react-alerts .alert .close .close-light {\n  background-image: url("+__webpack_require__(8)+");\n  width: 100%;\n  height: 100%;\n  background-position: 50%;\n  background-repeat: no-repeat;\n}\n.react-alerts .alert .close .close-dark {\n  background-image: url("+__webpack_require__(9)+");\n  width: 100%;\n  height: 100%;\n  background-position: 50%;\n  background-repeat: no-repeat;\n}\n.react-alerts .alert .close:hover {\n  opacity: 0.5;\n}\n.react-alerts .alert.hidden {\n  display: none;\n}\n.react-alerts .scale-enter {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n.react-alerts .scale-enter.scale-enter-active {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-transition: all 250ms cubic-bezier(0, 0, 0.5, 1.5);\n          transition: all 250ms cubic-bezier(0, 0, 0.5, 1.5);\n}\n.react-alerts .scale-leave {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.react-alerts .scale-leave.scale-leave-active {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: all 250ms ease-in-out;\n          transition: all 250ms ease-in-out;\n}\n.react-alerts .fade-enter {\n  opacity: 0.1;\n}\n.react-alerts .fade-enter.fade-enter-active {\n  opacity: 1;\n  -webkit-transition: all 250ms ease-out;\n          transition: all 250ms ease-out;\n}\n.react-alerts .fade-leave {\n  opacity: 1;\n}\n.react-alerts .fade-leave.fade-leave-active {\n  opacity: 0.1;\n  -webkit-transition: all 250ms ease-in;\n          transition: all 250ms ease-in;\n}\n", ""]);
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		/*
			MIT License http://www.opensource.org/licenses/mit-license.php
			Author Tobias Koppers @sokra
		*/
		// css base code, injected by the css-loader
		module.exports = function() {
			var list = [];
	
			// return the list of modules as css string
			list.toString = function toString() {
				var result = [];
				for(var i = 0; i < this.length; i++) {
					var item = this[i];
					if(item[2]) {
						result.push("@media " + item[2] + "{" + item[1] + "}");
					} else {
						result.push(item[1]);
					}
				}
				return result.join("");
			};
	
			// import a list of modules into the list
			list.i = function(modules, mediaQuery) {
				if(typeof modules === "string")
					modules = [[null, modules, ""]];
				var alreadyImportedModules = {};
				for(var i = 0; i < this.length; i++) {
					var id = this[i][0];
					if(typeof id === "number")
						alreadyImportedModules[id] = true;
				}
				for(i = 0; i < modules.length; i++) {
					var item = modules[i];
					// skip already imported module
					// this implementation is not 100% perfect for weird media query combinations
					//  when a module is imported multiple times with different media queries.
					//  I hope this will never occur (Hey this way we have smaller bundles)
					if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
						if(mediaQuery && !item[2]) {
							item[2] = mediaQuery;
						} else if(mediaQuery) {
							item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
						}
						list.push(item);
					}
				}
			};
			return list;
		};
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4tJREFUeNrEV71v1DAUf3Z8Hz2KSKduqAMTElD+gavowFYJ2oUBQbsyslcVYu+/UNqJgRYKGxKceisLH2sFFQsdKjVtae+aS2Kec3bOcZzcNUJg6cmOY/v3e8/P79kA/7mQshP5O5jGqiU/75A5+PzPCGjgruzyypKgFyXsv4bbnEMLxUUBKaLdEv/KWEAIH8VSCDDNHPioaW4WLwhhtno/sQQvRUCa2O0FcEQIuDjgCo66h+3HyRhtBslu5DqP4A0OORIfSFqM9mxbRDQ/4BJ8DRdfBEMFBcgLdFJEkjr77wWSWCokEL0dWEMHVyJG20gQCwmTSNw3l3Z8luvpJrDqi2RfDjhRJPigj6t9thBnNkVMcPEdRel+3UJEB+cD7UWb0jQJ0+eY2ZExuwSPFDAlULnkAGUEWJVCFHKIAg69bgTheRgvFoNKcDFXkbAVZiiSCy6k0mBQG3cGs91mHEio1wZWE2Qc6Hg9CJGUo4HzDMJA6cwW5IFXxxlUG0569M33/bpd70c1h0Bjogpnh35sGQXOJZzNCtQWkpO9ljVlNAuedxRxxdplBmEk/YZnjjApDMW6p/LE9M6FwqvwDadC+woYjms6PLWFzNQJEATq9MIJy0ESmWPMi5MRSTmixr5MYVViPbI2AiUhRkjbdnAyLB17fwO851v18obeB9Dp2mafj0HGWsTxk0fQLMF5lMkFcm2eRyDecjw+O7pDiEXOT0M7gWa3L6b2CB74USYhqbULLXBwDNtJLJcS4mLd3+Fo+47GOjsKRMROrSHKSQe2hxK4ugR7yHRDZTIqpXMcQOfEIPH1bl9kCTEnHB/4aEY+SE4qI3LYmHwIe4bF03cGJT/XYGrShV09FIu2iG6CTR3zAatgUsL4L0CDXj8Z+WdhHH4FYZELVFvU+4dwDZX7oec7G4GEyOkrWMGr1LJJIuL2yKasRSSgIKAyI857PrYAz7TwYiVgBiPa3YIPuGBTB7YRUHtMNVBV47h2fR5mbeB5cSAZ9G0PFvDri25KRwpaBxwl6lv+U2PF3O/7MF8U7EhBX2yNT6swcWMKNnHRJjfuCtYrGUmuZDu7v2Dh+hM4NBUblUBq7c4mrKB2y6NcSvFtoO95LnjR08xKwnsJtxo1WEWQmZx5O6ddeOo+sD5MeJm3oY0IdLZgBq2xiNvySD1EeiGsj80nkY7n+FXpx2nZV/TQTPtHgAEAjorM5YZ2xYoAAAAASUVORK5CYII="
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/ZJREFUeNqkV7tOlEEUPmf+XVgRFAgBRUgwsTEhoTDYUdnb0iGJFa/AW3ALiWKijaHlCXwASCy0IJFCsxExSlhdLqLsHOd++f/5lyXMZnZmz1zOd+6zCNdrWDJPNUrNC4eOnzyeEMM70Sc6vo0sTXwmH8Hfh1PPhxcW3lzGXM5Z4u75qzIn99GtmmWvvq2tzRsBZWeBsJHQ7Dr698wh6rLVqtWN/dXVZwFzTIDAKwOgnNpt46R7SL7R1bXxdWVlLgcgAsGuyjzsXHxzNdoufler0Zme7u6X9eXlMk10BoBydnfqN1Jz7k0Bik6q29Zbq70QIOYSINqbgHIqj7qSnvxogFzsfgR+0jRnPBAJ4svS0tO8E1auEmJgVN3OHHjyC8633gIiqgU5oPoIZsSnxLBlQFASAA8gRvEdMrTqt8yDuQMniB4EqVu5dz6yY6XjEKNQYjIMyUhvje+YgOZN5i6mfqdaJZVaU8y5ZUY27Py6Dz8yognpCZ0qyQlctHTRBFx4JkKBuWXC+24DHx4D6B+Kshk/+gn8ex2g2RBnhCbEHSwAoSXDgptVUsXESR8xJ2iNPQAaGUuqkg0Mqd46qAOv7+nLjO2t+hk65s4J82GIXLG0DhkwvzvhmGeDgwUAlpbdGYds9L7mQWgKAeYFdwpmqQKRdzreVQMa1fWpZ3oaRhYX1eiyXY7G7om93d06BNE7JdMqoUALyTDELAJB2uam3ZyZUWP/7Kyj2blcO93e1gxHxoHqn7QWMJIwjNZ0Ko6iQH719Lq1w/V1+Le/7xhb5pIm15wt5RkCk4K0AzKtjiizs7IXTgSzr99r6OxMMWodHTmanEuaXHMXqTM+BIw58vFIrKPi27qIqLXJScgGBrwDirmkRe38j7Y/Utsy01k1/N2IHC5Ue2iO0DHp9LjwCGDFUlMAkHssGgs2fhSc0No89Am7BuZMdEe61qU1gJhziMMDpVLrhKc7O87m1icszapfnQmfPyW1gCUIZHGr2NXxC3zvg/IFybCxuRk5XESTe8ReeYahL8fh3SkAlA8FzJmBnZ0A330P1GyU+4pYk3vk3vAspv80JIuRCAum1hRyFbvktxsQXIQY9g0A3up3TkrNI0ABQMY6M3mfodeklpYVhK20+7vjvNfeQPqRwY8bSlraD1SJep/dz7D4FKZL3gMqSTAmUyA6LTD1yCBTyTSdAUbpDAGCdOuZM/BpWGmCxfmtVAPWenK/resKHcr0jDpVY1FrETNXgBKB2MYE5J5T5EGQfaAYIIQUiYEB6BiIZ26eh5fnAUF4LYbPPhdg4Au6Z8rREDLT1dzYnZUwl3eau0v/Xnfy1xsvOUclI5T4IPwXYADEPSh6Pez/6gAAAABJRU5ErkJggg=="
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA9tJREFUeNqkV8tOVDEY/lsOZy4wRG4OGwmSITGyMNFEVxNXJq7kDZCERzBxTeJGYetKIdGFK1c+gYlIFBeSaCRqiMExRhQZolydy6m9nml72pkBmnTa0+n5v++/tgfByRryzF2NuObJl54/GWG/tI80F0eca9f78nAt1z99q3DpcStwNscO0VNHBmfPcQfoCIKFuU9vpqSCrGNNWUNpDCdtFrhSsDOVmp/7uHxTA0cOEggfC9BLJDIM3JlOz8+uvp60CBgk8PG1pT2KZCfxmEZmWIXZzMN7H175LNEmAQXojW1pfrmH0JFo+1Nd2QeUxKSDRAsXNAWWWqtRthdbP6Fc+Zcgwkjcfb90ww7C4CgpxpsGFgcegZhMuX4Idz6/ozAaDqZzTHWt1i7Qp2eSBHETYIIsPxpRrkV6Yy3S5kTKV3KQbUkFzsegvaBTfiYmEDe/jP7YshpRjk+E9h7LBt7SaoNHJJkFdtcLHdJEsv8QcoZv4K3vHvBCOgvjuR7o6wzjFyrUbaX9XVjZ3obdWlXEOlExj7SeLMeBX3sTnMEVewdgOJNNMA6piQvdPTCc7YblrU1Y29kRgUekC5TbhRWIHoQ4ob1KLV1zulY81e8Et4kUB/MwlElLQM0CovCq6Ig7dp6KxKx6hWxXS3C9FQeHGrVGGRsh3fLEXwmjyCRDrTDe1dMSdDiTg/vjV2Fm7DJ0BwF1Sc60AptgZB/HvlKs5zSBvjCEc929MJEfhYEw7QS/PXoRsh0B/T/D1/rDlETAmgUa9nURQO40FHsn8md5nxm7wgFd4Pv1Gsx+ecvXGWkOaqQnsgsBafs0fFn+wUcGxAAZsAu8dLATp2YMbhYgpFshaAecCVvaFgSmz5yPSShCNjhr5WrFqgFHigGzlfb3+MhILHxbjYF94Kx9Ze/E6Yd8l1ODgBEcOvOVP9vCpBYJHzgjXK5UhLURanppDry3bUTi9Nmt12G5/BuKA6djEgx8q3qYAGd3gcWtX8LcNjbGpDUBtUkVDixIrO3t0jpfoyQGaZ53wsrfzaSr6J5FWoorKv3sc4D4DyNi2IhvlkETSTIdGDaodk+/l2hlzNE8D6EvJXJ94+CA+7xcq4hLFpbvxgcQ0msCaWYBYpzdSgBbYzGAReau0ZNvbZ8k3ca1xhq4RgK1joGGFZCMAW4FcbnhwlVhQlZ+q1KLwJF22jOxLw3uIDRjQJEg0HCH63ajp5xd/5H/szHwfkDGAtUqiwPtlqSXWX2vyxr+j1RHIcL4Ef1dt2tBQyAW7sAiMHnHmv+RF3xdyvZ+Xrfz6Y1avEc8Y0Jz1f4LMACdsAzFV135ZQAAAABJRU5ErkJggg=="
	
	/***/ },
	/* 8 */
	/***/ function(module, exports) {
	
		module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAYAAAAGAB4TKWmAAAAaElEQVRIx2NgGAUjFugwMDDsY2BgECVCrShUrQ4pFuxjYGD4z8DAcJmAJaJQNf+heogGyBpxWUKMGrItodhwfAZRzXBcllDVcGyWkGQ4E7VcMGiDiKaRTNNkSvOMRvOiguaF3SgYRgAA1bo+/as5g9sAAAAASUVORK5CYII="
	
	/***/ },
	/* 9 */
	/***/ function(module, exports) {
	
		module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAAYAAAAGAB4TKWmAAAAaElEQVRIx2NgGAUjE/z//1/n////+/7//y9KhFpRqFodUizY9x8CLuOzBGr4ZajafaRYgKwRqyXEqCHbEooNx2cQ1QzHYwn1DMdhCUmGM1HFBYM2iGgayTRNpjTPaPQoKmhb2I2C4QUA0wmHwjkeewQAAAAASUVORK5CYII="
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		/*
			MIT License http://www.opensource.org/licenses/mit-license.php
			Author Tobias Koppers @sokra
		*/
		var stylesInDom = {},
			memoize = function(fn) {
				var memo;
				return function () {
					if (typeof memo === "undefined") memo = fn.apply(this, arguments);
					return memo;
				};
			},
			isOldIE = memoize(function() {
				return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
			}),
			getHeadElement = memoize(function () {
				return document.head || document.getElementsByTagName("head")[0];
			}),
			singletonElement = null,
			singletonCounter = 0;
	
		module.exports = function(list, options) {
			if(false) {
				if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
			}
	
			options = options || {};
			// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
			// tags it will allow on a page
			if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
			var styles = listToStyles(list);
			addStylesToDom(styles, options);
	
			return function update(newList) {
				var mayRemove = [];
				for(var i = 0; i < styles.length; i++) {
					var item = styles[i];
					var domStyle = stylesInDom[item.id];
					domStyle.refs--;
					mayRemove.push(domStyle);
				}
				if(newList) {
					var newStyles = listToStyles(newList);
					addStylesToDom(newStyles, options);
				}
				for(var i = 0; i < mayRemove.length; i++) {
					var domStyle = mayRemove[i];
					if(domStyle.refs === 0) {
						for(var j = 0; j < domStyle.parts.length; j++)
							domStyle.parts[j]();
						delete stylesInDom[domStyle.id];
					}
				}
			};
		}
	
		function addStylesToDom(styles, options) {
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				if(domStyle) {
					domStyle.refs++;
					for(var j = 0; j < domStyle.parts.length; j++) {
						domStyle.parts[j](item.parts[j]);
					}
					for(; j < item.parts.length; j++) {
						domStyle.parts.push(addStyle(item.parts[j], options));
					}
				} else {
					var parts = [];
					for(var j = 0; j < item.parts.length; j++) {
						parts.push(addStyle(item.parts[j], options));
					}
					stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
				}
			}
		}
	
		function listToStyles(list) {
			var styles = [];
			var newStyles = {};
			for(var i = 0; i < list.length; i++) {
				var item = list[i];
				var id = item[0];
				var css = item[1];
				var media = item[2];
				var sourceMap = item[3];
				var part = {css: css, media: media, sourceMap: sourceMap};
				if(!newStyles[id])
					styles.push(newStyles[id] = {id: id, parts: [part]});
				else
					newStyles[id].parts.push(part);
			}
			return styles;
		}
	
		function createStyleElement() {
			var styleElement = document.createElement("style");
			var head = getHeadElement();
			styleElement.type = "text/css";
			head.appendChild(styleElement);
			return styleElement;
		}
	
		function createLinkElement() {
			var linkElement = document.createElement("link");
			var head = getHeadElement();
			linkElement.rel = "stylesheet";
			head.appendChild(linkElement);
			return linkElement;
		}
	
		function addStyle(obj, options) {
			var styleElement, update, remove;
	
			if (options.singleton) {
				var styleIndex = singletonCounter++;
				styleElement = singletonElement || (singletonElement = createStyleElement());
				update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
				remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
			} else if(obj.sourceMap &&
				typeof URL === "function" &&
				typeof URL.createObjectURL === "function" &&
				typeof URL.revokeObjectURL === "function" &&
				typeof Blob === "function" &&
				typeof btoa === "function") {
				styleElement = createLinkElement();
				update = updateLink.bind(null, styleElement);
				remove = function() {
					styleElement.parentNode.removeChild(styleElement);
					if(styleElement.href)
						URL.revokeObjectURL(styleElement.href);
				};
			} else {
				styleElement = createStyleElement();
				update = applyToTag.bind(null, styleElement);
				remove = function() {
					styleElement.parentNode.removeChild(styleElement);
				};
			}
	
			update(obj);
	
			return function updateStyle(newObj) {
				if(newObj) {
					if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
						return;
					update(obj = newObj);
				} else {
					remove();
				}
			};
		}
	
		var replaceText = (function () {
			var textStore = [];
	
			return function (index, replacement) {
				textStore[index] = replacement;
				return textStore.filter(Boolean).join('\n');
			};
		})();
	
		function applyToSingletonTag(styleElement, index, remove, obj) {
			var css = remove ? "" : obj.css;
	
			if (styleElement.styleSheet) {
				styleElement.styleSheet.cssText = replaceText(index, css);
			} else {
				var cssNode = document.createTextNode(css);
				var childNodes = styleElement.childNodes;
				if (childNodes[index]) styleElement.removeChild(childNodes[index]);
				if (childNodes.length) {
					styleElement.insertBefore(cssNode, childNodes[index]);
				} else {
					styleElement.appendChild(cssNode);
				}
			}
		}
	
		function applyToTag(styleElement, obj) {
			var css = obj.css;
			var media = obj.media;
			var sourceMap = obj.sourceMap;
	
			if(media) {
				styleElement.setAttribute("media", media)
			}
	
			if(styleElement.styleSheet) {
				styleElement.styleSheet.cssText = css;
			} else {
				while(styleElement.firstChild) {
					styleElement.removeChild(styleElement.firstChild);
				}
				styleElement.appendChild(document.createTextNode(css));
			}
		}
	
		function updateLink(linkElement, obj) {
			var css = obj.css;
			var media = obj.media;
			var sourceMap = obj.sourceMap;
	
			if(sourceMap) {
				// http://stackoverflow.com/a/26603875
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
			}
	
			var blob = new Blob([css], { type: "text/css" });
	
			var oldSrc = linkElement.href;
	
			linkElement.href = URL.createObjectURL(blob);
	
			if(oldSrc)
				URL.revokeObjectURL(oldSrc);
		}
	
	
	/***/ },
	/* 11 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_11__;
	
	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
	
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
		var _get = function get(_x5, _x6, _x7) { var _again = true; _function: while (_again) { var object = _x5, property = _x6, receiver = _x7; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x5 = parent; _x6 = property; _x7 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
		function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
		var _react = __webpack_require__(11);
	
		var _react2 = _interopRequireDefault(_react);
	
		var _events = __webpack_require__(13);
	
		var _events2 = _interopRequireDefault(_events);
	
		var _reactAddonsCssTransitionGroup = __webpack_require__(14);
	
		var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
		var _AlertMessage = __webpack_require__(15);
	
		var _AlertMessage2 = _interopRequireDefault(_AlertMessage);
	
		var AlertContainer = (function (_React$Component) {
		  _inherits(AlertContainer, _React$Component);
	
		  function AlertContainer(props) {
		    _classCallCheck(this, AlertContainer);
	
		    _get(Object.getPrototypeOf(AlertContainer.prototype), 'constructor', this).call(this, props);
		    global.reactAlertEvents = new _events2['default']();
		    this.state = {
		      alerts: []
		    };
		    this.style = this._setStyle();
		    this.theme = this._setTheme();
		    this._eventListners();
		  }
	
		  /**
		   * Show the alert in the page with success type
		   * @param  {string} message 
		   * @param  {Object} options 
		   * @return {void}         
		   */
	
		  _createClass(AlertContainer, [{
		    key: 'success',
		    value: function success(message) {
		      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
		      options.type = 'success';
		      this.show(message, options);
		    }
	
		    /**
		     * Show the alert in the page with error type
		     * @param  {string} message 
		     * @param  {Object} options 
		     * @return {void}
		     */
		  }, {
		    key: 'error',
		    value: function error(message) {
		      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
		      options.type = 'error';
		      this.show(message, options);
		    }
	
		    /**
		     * Show the alert in the page with info type 
		     * @param  {string} message
		     * @param  {Object} options
		     * @return {void}
		     */
		  }, {
		    key: 'info',
		    value: function info(message) {
		      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
		      options.type = 'info';
		      this.show(message, options);
		    }
	
		    /**
		     * Show the alert in the page
		     * @param  {string} message
		     * @param  {Object} options
		     * @return {void}
		     */
		  }, {
		    key: 'show',
		    value: function show(message) {
		      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
		      var alert = {};
		      alert.message = message;
		      alert = Object.assign(alert, options);
		      this.setState({ alerts: this._addAlert(alert) });
		    }
	
		    /**
		     * Remove all tasks from the page
		     * @return {void}
		     */
		  }, {
		    key: 'removeAll',
		    value: function removeAll() {
		      this.setState({ alerts: [] });
		    }
	
		    /**
		     * Add an alert
		     * @param {Object} alert
		     */
		  }, {
		    key: '_addAlert',
		    value: function _addAlert(alert) {
		      alert.uniqueKey = this._genUniqueKey();
		      alert.style = this.theme;
		      if (!alert.hasOwnProperty('time')) {
		        alert.time = this.props.time;
		      };
		      alert.closeIconClass = 'close-' + this.props.theme;
		      this.state.alerts.push(alert);
		      return this.state.alerts;
		    }
	
		    /**
		     * Generate a key
		     * @return {string}
		     */
		  }, {
		    key: '_genUniqueKey',
		    value: function _genUniqueKey() {
		      return new Date().getTime().toString() + Math.random().toString(36).substr(2, 5);
		    }
	
		    /**
		     * Remove an AlertMessage from the container
		     * @param  {AlertMessage} alert
		     * @return {void}
		     */
		  }, {
		    key: '_removeAlert',
		    value: function _removeAlert(alert) {
		      return this.state.alerts.filter(function (a) {
		        return a.uniqueKey != alert.props.uniqueKey;
		      });
		    }
	
		    /**
		     * Listen to alert events
		     * @return {void}
		     */
		  }, {
		    key: '_eventListners',
		    value: function _eventListners() {
		      var _this = this;
	
		      reactAlertEvents.on('ALERT.REMOVE', function (alert) {
		        _this.setState({ alerts: _this._removeAlert(alert) });
		      });
		    }
	
		    /**
		     * Set the alert position on the page
		     */
		  }, {
		    key: '_setStyle',
		    value: function _setStyle() {
		      var position = {};
		      switch (this.props.position) {
		        case 'top left':
		          position = {
		            top: 0,
		            right: 'auto',
		            bottom: 'auto',
		            left: 0
		          };
		          break;
		        case 'top right':
		          position = {
		            top: 0,
		            right: 0,
		            bottom: 'auto',
		            left: 'auto'
		          };
		          break;
		        case 'bottom left':
		          position = {
		            top: 'auto',
		            right: 'auto',
		            bottom: 0,
		            left: 0
		          };
		          break;
		        default:
		          position = {
		            top: 'auto',
		            right: 0,
		            bottom: 0,
		            left: 'auto'
		          };
		          break;
		      }
	
		      return {
		        margin: this.props.offset + 'px',
		        top: position.top,
		        right: position.right,
		        bottom: position.bottom,
		        left: position.left
		      };
		    }
	
		    /**
		     * Set the style of the alert based on the chosen theme
		     */
		  }, {
		    key: '_setTheme',
		    value: function _setTheme() {
		      var theme = {};
		      switch (this.props.theme) {
		        case 'light':
		          theme = {
		            alert: {
		              backgroundColor: '#fff',
		              color: '#333'
		            },
		            closeButton: {
		              bg: '#f3f3f3'
		            }
		          };
		          break;
		        default:
		          theme = {
		            alert: {
		              backgroundColor: '#333',
		              color: '#fff'
		            },
		            closeButton: {
		              bg: '#444'
		            }
		          };
		          break;
		      }
	
		      return theme;
		    }
		  }, {
		    key: 'componentDidUpdate',
		    value: function componentDidUpdate() {
		      this.style = this._setStyle();
		      this.theme = this._setTheme();
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      return _react2['default'].createElement(
		        'div',
		        { style: this.style, className: 'react-alerts' },
		        _react2['default'].createElement(
		          _reactAddonsCssTransitionGroup2['default'],
		          {
		            transitionName: this.props.transition,
		            transitionEnterTimeout: 250,
		            transitionLeaveTimeout: 250 },
		          this.state.alerts.map(function (alert, index) {
		            return _react2['default'].createElement(_AlertMessage2['default'], _extends({ key: alert.uniqueKey }, alert));
		          })
		        )
		      );
		    }
		  }]);
	
		  return AlertContainer;
		})(_react2['default'].Component);
	
		AlertContainer.defaultProps = {
		  offset: 14,
		  position: 'bottom left',
		  theme: 'dark',
		  time: 5000,
		  transition: 'scale'
		};
	
		AlertContainer.propTypes = {
		  offset: _react2['default'].PropTypes.number,
		  position: _react2['default'].PropTypes.oneOf(['bottom left', 'bottom right', 'top right', 'top left']),
		  theme: _react2['default'].PropTypes.oneOf(['dark', 'light']),
		  time: _react2['default'].PropTypes.number,
		  transition: _react2['default'].PropTypes.oneOf(['scale', 'fade'])
		};
	
		exports['default'] = AlertContainer;
		module.exports = exports['default'];
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
	
	/***/ },
	/* 13 */
	/***/ function(module, exports) {
	
		// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
		function EventEmitter() {
		  this._events = this._events || {};
		  this._maxListeners = this._maxListeners || undefined;
		}
		module.exports = EventEmitter;
	
		// Backwards-compat with node 0.10.x
		EventEmitter.EventEmitter = EventEmitter;
	
		EventEmitter.prototype._events = undefined;
		EventEmitter.prototype._maxListeners = undefined;
	
		// By default EventEmitters will print a warning if more than 10 listeners are
		// added to it. This is a useful default which helps finding memory leaks.
		EventEmitter.defaultMaxListeners = 10;
	
		// Obviously not all Emitters should be limited to 10. This function allows
		// that to be increased. Set to zero for unlimited.
		EventEmitter.prototype.setMaxListeners = function(n) {
		  if (!isNumber(n) || n < 0 || isNaN(n))
		    throw TypeError('n must be a positive number');
		  this._maxListeners = n;
		  return this;
		};
	
		EventEmitter.prototype.emit = function(type) {
		  var er, handler, len, args, i, listeners;
	
		  if (!this._events)
		    this._events = {};
	
		  // If there is no 'error' event listener then throw.
		  if (type === 'error') {
		    if (!this._events.error ||
		        (isObject(this._events.error) && !this._events.error.length)) {
		      er = arguments[1];
		      if (er instanceof Error) {
		        throw er; // Unhandled 'error' event
		      }
		      throw TypeError('Uncaught, unspecified "error" event.');
		    }
		  }
	
		  handler = this._events[type];
	
		  if (isUndefined(handler))
		    return false;
	
		  if (isFunction(handler)) {
		    switch (arguments.length) {
		      // fast cases
		      case 1:
		        handler.call(this);
		        break;
		      case 2:
		        handler.call(this, arguments[1]);
		        break;
		      case 3:
		        handler.call(this, arguments[1], arguments[2]);
		        break;
		      // slower
		      default:
		        args = Array.prototype.slice.call(arguments, 1);
		        handler.apply(this, args);
		    }
		  } else if (isObject(handler)) {
		    args = Array.prototype.slice.call(arguments, 1);
		    listeners = handler.slice();
		    len = listeners.length;
		    for (i = 0; i < len; i++)
		      listeners[i].apply(this, args);
		  }
	
		  return true;
		};
	
		EventEmitter.prototype.addListener = function(type, listener) {
		  var m;
	
		  if (!isFunction(listener))
		    throw TypeError('listener must be a function');
	
		  if (!this._events)
		    this._events = {};
	
		  // To avoid recursion in the case that type === "newListener"! Before
		  // adding it to the listeners, first emit "newListener".
		  if (this._events.newListener)
		    this.emit('newListener', type,
		              isFunction(listener.listener) ?
		              listener.listener : listener);
	
		  if (!this._events[type])
		    // Optimize the case of one listener. Don't need the extra array object.
		    this._events[type] = listener;
		  else if (isObject(this._events[type]))
		    // If we've already got an array, just append.
		    this._events[type].push(listener);
		  else
		    // Adding the second element, need to change to array.
		    this._events[type] = [this._events[type], listener];
	
		  // Check for listener leak
		  if (isObject(this._events[type]) && !this._events[type].warned) {
		    if (!isUndefined(this._maxListeners)) {
		      m = this._maxListeners;
		    } else {
		      m = EventEmitter.defaultMaxListeners;
		    }
	
		    if (m && m > 0 && this._events[type].length > m) {
		      this._events[type].warned = true;
		      console.error('(node) warning: possible EventEmitter memory ' +
		                    'leak detected. %d listeners added. ' +
		                    'Use emitter.setMaxListeners() to increase limit.',
		                    this._events[type].length);
		      if (typeof console.trace === 'function') {
		        // not supported in IE 10
		        console.trace();
		      }
		    }
		  }
	
		  return this;
		};
	
		EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
		EventEmitter.prototype.once = function(type, listener) {
		  if (!isFunction(listener))
		    throw TypeError('listener must be a function');
	
		  var fired = false;
	
		  function g() {
		    this.removeListener(type, g);
	
		    if (!fired) {
		      fired = true;
		      listener.apply(this, arguments);
		    }
		  }
	
		  g.listener = listener;
		  this.on(type, g);
	
		  return this;
		};
	
		// emits a 'removeListener' event iff the listener was removed
		EventEmitter.prototype.removeListener = function(type, listener) {
		  var list, position, length, i;
	
		  if (!isFunction(listener))
		    throw TypeError('listener must be a function');
	
		  if (!this._events || !this._events[type])
		    return this;
	
		  list = this._events[type];
		  length = list.length;
		  position = -1;
	
		  if (list === listener ||
		      (isFunction(list.listener) && list.listener === listener)) {
		    delete this._events[type];
		    if (this._events.removeListener)
		      this.emit('removeListener', type, listener);
	
		  } else if (isObject(list)) {
		    for (i = length; i-- > 0;) {
		      if (list[i] === listener ||
		          (list[i].listener && list[i].listener === listener)) {
		        position = i;
		        break;
		      }
		    }
	
		    if (position < 0)
		      return this;
	
		    if (list.length === 1) {
		      list.length = 0;
		      delete this._events[type];
		    } else {
		      list.splice(position, 1);
		    }
	
		    if (this._events.removeListener)
		      this.emit('removeListener', type, listener);
		  }
	
		  return this;
		};
	
		EventEmitter.prototype.removeAllListeners = function(type) {
		  var key, listeners;
	
		  if (!this._events)
		    return this;
	
		  // not listening for removeListener, no need to emit
		  if (!this._events.removeListener) {
		    if (arguments.length === 0)
		      this._events = {};
		    else if (this._events[type])
		      delete this._events[type];
		    return this;
		  }
	
		  // emit removeListener for all listeners on all events
		  if (arguments.length === 0) {
		    for (key in this._events) {
		      if (key === 'removeListener') continue;
		      this.removeAllListeners(key);
		    }
		    this.removeAllListeners('removeListener');
		    this._events = {};
		    return this;
		  }
	
		  listeners = this._events[type];
	
		  if (isFunction(listeners)) {
		    this.removeListener(type, listeners);
		  } else if (listeners) {
		    // LIFO order
		    while (listeners.length)
		      this.removeListener(type, listeners[listeners.length - 1]);
		  }
		  delete this._events[type];
	
		  return this;
		};
	
		EventEmitter.prototype.listeners = function(type) {
		  var ret;
		  if (!this._events || !this._events[type])
		    ret = [];
		  else if (isFunction(this._events[type]))
		    ret = [this._events[type]];
		  else
		    ret = this._events[type].slice();
		  return ret;
		};
	
		EventEmitter.prototype.listenerCount = function(type) {
		  if (this._events) {
		    var evlistener = this._events[type];
	
		    if (isFunction(evlistener))
		      return 1;
		    else if (evlistener)
		      return evlistener.length;
		  }
		  return 0;
		};
	
		EventEmitter.listenerCount = function(emitter, type) {
		  return emitter.listenerCount(type);
		};
	
		function isFunction(arg) {
		  return typeof arg === 'function';
		}
	
		function isNumber(arg) {
		  return typeof arg === 'number';
		}
	
		function isObject(arg) {
		  return typeof arg === 'object' && arg !== null;
		}
	
		function isUndefined(arg) {
		  return arg === void 0;
		}
	
	
	/***/ },
	/* 14 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_14__;
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, '__esModule', {
		  value: true
		});
	
		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
		var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
		function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
		var _react = __webpack_require__(11);
	
		var _react2 = _interopRequireDefault(_react);
	
		var _reactDom = __webpack_require__(16);
	
		var _reactDom2 = _interopRequireDefault(_reactDom);
	
		var _classnames = __webpack_require__(17);
	
		var _classnames2 = _interopRequireDefault(_classnames);
	
		var AlertMessage = (function (_React$Component) {
		  _inherits(AlertMessage, _React$Component);
	
		  function AlertMessage(props) {
		    _classCallCheck(this, AlertMessage);
	
		    _get(Object.getPrototypeOf(AlertMessage.prototype), 'constructor', this).call(this, props);
		    this.state = {
		      closeButtonStyle: {}
		    };
		  }
	
		  /**
		   * Handle the close button click
		   * @return {void} 
		   */
	
		  _createClass(AlertMessage, [{
		    key: '_handleCloseClick',
		    value: function _handleCloseClick() {
		      this._removeSelf();
		    }
	
		    /**
		     * Include the given icon or use the default one
		     * @return {React.Component}
		     */
		  }, {
		    key: '_showIcon',
		    value: function _showIcon() {
		      var icon = '';
		      if (this.props.icon) {
		        icon = this.props.icon;
		      } else {
		        icon = _react2['default'].createElement('div', { className: this.props.type + '-icon' });
		      }
	
		      return icon;
		    }
	
		    /**
		     * Remove the alert after the given time
		     * @return {void} 
		     */
		  }, {
		    key: '_countdown',
		    value: function _countdown() {
		      var _this = this;
	
		      setTimeout(function () {
		        _this._removeSelf();
		      }, this.props.time);
		    }
	
		    /**
		     * Emit a event to AlertContainer remove this alert from page
		     * @return {void}
		     */
		  }, {
		    key: '_removeSelf',
		    value: function _removeSelf() {
		      reactAlertEvents.emit('ALERT.REMOVE', this);
		    }
		  }, {
		    key: 'componentDidMount',
		    value: function componentDidMount() {
		      this.domNode = _reactDom2['default'].findDOMNode(this);
		      this.setState({
		        closeButtonStyle: {
		          height: this.domNode.offsetHeight + 'px',
		          lineHeight: this.domNode.offsetHeight + 'px',
		          backgroundColor: this.props.style.closeButton.bg
		        }
		      });
	
		      if (this.props.time > 0) {
		        this._countdown();
		      }
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      return _react2['default'].createElement(
		        'div',
		        { style: this.props.style.alert, className: (0, _classnames2['default'])('alert', this.props.type) },
		        _react2['default'].createElement(
		          'div',
		          { className: 'content icon' },
		          this._showIcon.bind(this)()
		        ),
		        _react2['default'].createElement(
		          'div',
		          { className: 'content message' },
		          this.props.message
		        ),
		        _react2['default'].createElement(
		          'div',
		          { onClick: this._handleCloseClick.bind(this), style: this.state.closeButtonStyle, className: 'content close' },
		          _react2['default'].createElement('div', { className: this.props.closeIconClass })
		        )
		      );
		    }
		  }]);
	
		  return AlertMessage;
		})(_react2['default'].Component);
	
		AlertMessage.defaultProps = {
		  icon: '',
		  message: '',
		  type: 'info'
		};
	
		AlertMessage.propTypes = {
		  type: _react2['default'].PropTypes.oneOf(['info', 'success', 'error'])
		};
	
		exports['default'] = AlertMessage;
		module.exports = exports['default'];
	
	/***/ },
	/* 16 */
	/***/ function(module, exports) {
	
		module.exports = __WEBPACK_EXTERNAL_MODULE_16__;
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		  Copyright (c) 2016 Jed Watson.
		  Licensed under the MIT License (MIT), see
		  http://jedwatson.github.io/classnames
		*/
		/* global define */
	
		(function () {
			'use strict';
	
			var hasOwn = {}.hasOwnProperty;
	
			function classNames () {
				var classes = [];
	
				for (var i = 0; i < arguments.length; i++) {
					var arg = arguments[i];
					if (!arg) continue;
	
					var argType = typeof arg;
	
					if (argType === 'string' || argType === 'number') {
						classes.push(arg);
					} else if (Array.isArray(arg)) {
						classes.push(classNames.apply(null, arg));
					} else if (argType === 'object') {
						for (var key in arg) {
							if (hasOwn.call(arg, key) && arg[key]) {
								classes.push(key);
							}
						}
					}
				}
	
				return classes.join(' ');
			}
	
			if (typeof module !== 'undefined' && module.exports) {
				module.exports = classNames;
			} else if (true) {
				// register as 'classnames', consistent with npm package name
				!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
					return classNames;
				}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			} else {
				window.classNames = classNames;
			}
		}());
	
	
	/***/ }
	/******/ ])
	});
	;

/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(293);

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(25);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(24);
	
	var ReactTransitionGroup = __webpack_require__(294);
	var ReactCSSTransitionGroupChild = __webpack_require__(297);
	
	function createTransitionTimeoutPropValidator(transitionType) {
	  var timeoutPropName = 'transition' + transitionType + 'Timeout';
	  var enabledPropName = 'transition' + transitionType;
	
	  return function (props) {
	    // If the transition is enabled
	    if (props[enabledPropName]) {
	      // If no timeout duration is provided
	      if (props[timeoutPropName] == null) {
	        return new Error(timeoutPropName + ' wasn\'t supplied to ReactCSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');
	
	        // If the duration isn't a number
	      } else if (typeof props[timeoutPropName] !== 'number') {
	        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
	      }
	    }
	  };
	}
	
	/**
	 * An easy way to perform CSS transitions and animations when a React component
	 * enters or leaves the DOM.
	 * See https://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup
	 */
	
	var ReactCSSTransitionGroup = function (_React$Component) {
	  _inherits(ReactCSSTransitionGroup, _React$Component);
	
	  function ReactCSSTransitionGroup() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ReactCSSTransitionGroup);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
	      // We need to provide this childFactory so that
	      // ReactCSSTransitionGroupChild can receive updates to name, enter, and
	      // leave while it is leaving.
	      return React.createElement(ReactCSSTransitionGroupChild, {
	        name: _this.props.transitionName,
	        appear: _this.props.transitionAppear,
	        enter: _this.props.transitionEnter,
	        leave: _this.props.transitionLeave,
	        appearTimeout: _this.props.transitionAppearTimeout,
	        enterTimeout: _this.props.transitionEnterTimeout,
	        leaveTimeout: _this.props.transitionLeaveTimeout
	      }, child);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  ReactCSSTransitionGroup.prototype.render = function render() {
	    return React.createElement(ReactTransitionGroup, _assign({}, this.props, { childFactory: this._wrapChild }));
	  };
	
	  return ReactCSSTransitionGroup;
	}(React.Component);
	
	ReactCSSTransitionGroup.displayName = 'ReactCSSTransitionGroup';
	ReactCSSTransitionGroup.propTypes = {
	  transitionName: ReactCSSTransitionGroupChild.propTypes.name,
	
	  transitionAppear: React.PropTypes.bool,
	  transitionEnter: React.PropTypes.bool,
	  transitionLeave: React.PropTypes.bool,
	  transitionAppearTimeout: createTransitionTimeoutPropValidator('Appear'),
	  transitionEnterTimeout: createTransitionTimeoutPropValidator('Enter'),
	  transitionLeaveTimeout: createTransitionTimeoutPropValidator('Leave')
	};
	ReactCSSTransitionGroup.defaultProps = {
	  transitionAppear: false,
	  transitionEnter: true,
	  transitionLeave: true
	};
	
	
	module.exports = ReactCSSTransitionGroup;

/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(25);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(24);
	var ReactTransitionChildMapping = __webpack_require__(295);
	
	var emptyFunction = __webpack_require__(32);
	
	/**
	 * A basis for animations. When children are declaratively added or removed,
	 * special lifecycle hooks are called.
	 * See https://facebook.github.io/react/docs/animation.html#low-level-api-reacttransitiongroup
	 */
	
	var ReactTransitionGroup = function (_React$Component) {
	  _inherits(ReactTransitionGroup, _React$Component);
	
	  function ReactTransitionGroup() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ReactTransitionGroup);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      // TODO: can we get useful debug information to show at this point?
	      children: ReactTransitionChildMapping.getChildMapping(_this.props.children)
	    }, _this.performAppear = function (key) {
	      _this.currentlyTransitioningKeys[key] = true;
	
	      var component = _this.refs[key];
	
	      if (component.componentWillAppear) {
	        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key));
	      } else {
	        _this._handleDoneAppearing(key);
	      }
	    }, _this._handleDoneAppearing = function (key) {
	      var component = _this.refs[key];
	      if (component.componentDidAppear) {
	        component.componentDidAppear();
	      }
	
	      delete _this.currentlyTransitioningKeys[key];
	
	      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);
	
	      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	        // This was removed before it had fully appeared. Remove it.
	        _this.performLeave(key);
	      }
	    }, _this.performEnter = function (key) {
	      _this.currentlyTransitioningKeys[key] = true;
	
	      var component = _this.refs[key];
	
	      if (component.componentWillEnter) {
	        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key));
	      } else {
	        _this._handleDoneEntering(key);
	      }
	    }, _this._handleDoneEntering = function (key) {
	      var component = _this.refs[key];
	      if (component.componentDidEnter) {
	        component.componentDidEnter();
	      }
	
	      delete _this.currentlyTransitioningKeys[key];
	
	      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);
	
	      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
	        // This was removed before it had fully entered. Remove it.
	        _this.performLeave(key);
	      }
	    }, _this.performLeave = function (key) {
	      _this.currentlyTransitioningKeys[key] = true;
	
	      var component = _this.refs[key];
	      if (component.componentWillLeave) {
	        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key));
	      } else {
	        // Note that this is somewhat dangerous b/c it calls setState()
	        // again, effectively mutating the component before all the work
	        // is done.
	        _this._handleDoneLeaving(key);
	      }
	    }, _this._handleDoneLeaving = function (key) {
	      var component = _this.refs[key];
	
	      if (component.componentDidLeave) {
	        component.componentDidLeave();
	      }
	
	      delete _this.currentlyTransitioningKeys[key];
	
	      var currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);
	
	      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
	        // This entered again before it fully left. Add it again.
	        _this.performEnter(key);
	      } else {
	        _this.setState(function (state) {
	          var newChildren = _assign({}, state.children);
	          delete newChildren[key];
	          return { children: newChildren };
	        });
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  ReactTransitionGroup.prototype.componentWillMount = function componentWillMount() {
	    this.currentlyTransitioningKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	  };
	
	  ReactTransitionGroup.prototype.componentDidMount = function componentDidMount() {
	    var initialChildMapping = this.state.children;
	    for (var key in initialChildMapping) {
	      if (initialChildMapping[key]) {
	        this.performAppear(key);
	      }
	    }
	  };
	
	  ReactTransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
	    var prevChildMapping = this.state.children;
	
	    this.setState({
	      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
	    });
	
	    var key;
	
	    for (key in nextChildMapping) {
	      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
	      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
	        this.keysToEnter.push(key);
	      }
	    }
	
	    for (key in prevChildMapping) {
	      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
	      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
	        this.keysToLeave.push(key);
	      }
	    }
	
	    // If we want to someday check for reordering, we could do it here.
	  };
	
	  ReactTransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  };
	
	  ReactTransitionGroup.prototype.render = function render() {
	    // TODO: we could get rid of the need for the wrapper node
	    // by cloning a single child
	    var childrenToRender = [];
	    for (var key in this.state.children) {
	      var child = this.state.children[key];
	      if (child) {
	        // You may need to apply reactive updates to a child as it is leaving.
	        // The normal React way to do it won't work since the child will have
	        // already been removed. In case you need this behavior you can provide
	        // a childFactory function to wrap every child, even the ones that are
	        // leaving.
	        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
	      }
	    }
	
	    // Do not forward ReactTransitionGroup props to primitive DOM nodes
	    var props = _assign({}, this.props);
	    delete props.transitionLeave;
	    delete props.transitionName;
	    delete props.transitionAppear;
	    delete props.transitionEnter;
	    delete props.childFactory;
	    delete props.transitionLeaveTimeout;
	    delete props.transitionEnterTimeout;
	    delete props.transitionAppearTimeout;
	    delete props.component;
	
	    return React.createElement(this.props.component, props, childrenToRender);
	  };
	
	  return ReactTransitionGroup;
	}(React.Component);
	
	ReactTransitionGroup.displayName = 'ReactTransitionGroup';
	ReactTransitionGroup.propTypes = {
	  component: React.PropTypes.any,
	  childFactory: React.PropTypes.func
	};
	ReactTransitionGroup.defaultProps = {
	  component: 'span',
	  childFactory: emptyFunction.thatReturnsArgument
	};
	
	
	module.exports = ReactTransitionGroup;

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var flattenChildren = __webpack_require__(296);
	
	var ReactTransitionChildMapping = {
	  /**
	   * Given `this.props.children`, return an object mapping key to child. Just
	   * simple syntactic sugar around flattenChildren().
	   *
	   * @param {*} children `this.props.children`
	   * @param {number=} selfDebugID Optional debugID of the current internal instance.
	   * @return {object} Mapping of key to child
	   */
	  getChildMapping: function (children, selfDebugID) {
	    if (!children) {
	      return children;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      return flattenChildren(children, selfDebugID);
	    }
	
	    return flattenChildren(children);
	  },
	
	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */
	  mergeChildMappings: function (prev, next) {
	    prev = prev || {};
	    next = next || {};
	
	    function getValueForKey(key) {
	      if (next.hasOwnProperty(key)) {
	        return next[key];
	      } else {
	        return prev[key];
	      }
	    }
	
	    // For each key of `next`, the list of keys to insert before that key in
	    // the combined list
	    var nextKeysPending = {};
	
	    var pendingKeys = [];
	    for (var prevKey in prev) {
	      if (next.hasOwnProperty(prevKey)) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }
	
	    var i;
	    var childMapping = {};
	    for (var nextKey in next) {
	      if (nextKeysPending.hasOwnProperty(nextKey)) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }
	      childMapping[nextKey] = getValueForKey(nextKey);
	    }
	
	    // Finally, add the keys which didn't appear before any key in `next`
	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }
	
	    return childMapping;
	  }
	};
	
	module.exports = ReactTransitionChildMapping;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var KeyEscapeUtils = __webpack_require__(37);
	var traverseAllChildren = __webpack_require__(35);
	var warning = __webpack_require__(31);
	
	var ReactComponentTreeHook;
	
	if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
	  // Temporary hack.
	  // Inline requires don't work well with Jest:
	  // https://github.com/facebook/react/issues/7240
	  // Remove the inline requires when we don't need them anymore:
	  // https://github.com/facebook/react/pull/7178
	  ReactComponentTreeHook = __webpack_require__(46);
	}
	
	/**
	 * @param {function} traverseContext Context passed through traversal.
	 * @param {?ReactComponent} child React child component.
	 * @param {!string} name String name of key path to child.
	 * @param {number=} selfDebugID Optional debugID of the current internal instance.
	 */
	function flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID) {
	  // We found a component instance.
	  if (traverseContext && typeof traverseContext === 'object') {
	    var result = traverseContext;
	    var keyUnique = result[name] === undefined;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!ReactComponentTreeHook) {
	        ReactComponentTreeHook = __webpack_require__(46);
	      }
	      if (!keyUnique) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', KeyEscapeUtils.unescape(name), ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
	      }
	    }
	    if (keyUnique && child != null) {
	      result[name] = child;
	    }
	  }
	}
	
	/**
	 * Flattens children that are typically specified as `props.children`. Any null
	 * children will not be included in the resulting object.
	 * @return {!object} flattened children keyed by name.
	 */
	function flattenChildren(children, selfDebugID) {
	  if (children == null) {
	    return children;
	  }
	  var result = {};
	
	  if (process.env.NODE_ENV !== 'production') {
	    traverseAllChildren(children, function (traverseContext, child, name) {
	      return flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID);
	    }, result);
	  } else {
	    traverseAllChildren(children, flattenSingleChildIntoContext, result);
	  }
	  return result;
	}
	
	module.exports = flattenChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var React = __webpack_require__(24);
	var ReactAddonsDOMDependencies = __webpack_require__(298);
	
	var CSSCore = __webpack_require__(303);
	var ReactTransitionEvents = __webpack_require__(304);
	
	var onlyChild = __webpack_require__(51);
	
	var TICK = 17;
	
	var ReactCSSTransitionGroupChild = React.createClass({
	  displayName: 'ReactCSSTransitionGroupChild',
	
	  propTypes: {
	    name: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      active: React.PropTypes.string
	    }), React.PropTypes.shape({
	      enter: React.PropTypes.string,
	      enterActive: React.PropTypes.string,
	      leave: React.PropTypes.string,
	      leaveActive: React.PropTypes.string,
	      appear: React.PropTypes.string,
	      appearActive: React.PropTypes.string
	    })]).isRequired,
	
	    // Once we require timeouts to be specified, we can remove the
	    // boolean flags (appear etc.) and just accept a number
	    // or a bool for the timeout flags (appearTimeout etc.)
	    appear: React.PropTypes.bool,
	    enter: React.PropTypes.bool,
	    leave: React.PropTypes.bool,
	    appearTimeout: React.PropTypes.number,
	    enterTimeout: React.PropTypes.number,
	    leaveTimeout: React.PropTypes.number
	  },
	
	  transition: function (animationType, finishCallback, userSpecifiedDelay) {
	    var node = ReactAddonsDOMDependencies.getReactDOM().findDOMNode(this);
	
	    if (!node) {
	      if (finishCallback) {
	        finishCallback();
	      }
	      return;
	    }
	
	    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
	    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
	    var timeout = null;
	
	    var endListener = function (e) {
	      if (e && e.target !== node) {
	        return;
	      }
	
	      clearTimeout(timeout);
	
	      CSSCore.removeClass(node, className);
	      CSSCore.removeClass(node, activeClassName);
	
	      ReactTransitionEvents.removeEndEventListener(node, endListener);
	
	      // Usually this optional callback is used for informing an owner of
	      // a leave animation and telling it to remove the child.
	      if (finishCallback) {
	        finishCallback();
	      }
	    };
	
	    CSSCore.addClass(node, className);
	
	    // Need to do this to actually trigger a transition.
	    this.queueClassAndNode(activeClassName, node);
	
	    // If the user specified a timeout delay.
	    if (userSpecifiedDelay) {
	      // Clean-up the animation after the specified delay
	      timeout = setTimeout(endListener, userSpecifiedDelay);
	      this.transitionTimeouts.push(timeout);
	    } else {
	      // DEPRECATED: this listener will be removed in a future version of react
	      ReactTransitionEvents.addEndEventListener(node, endListener);
	    }
	  },
	
	  queueClassAndNode: function (className, node) {
	    this.classNameAndNodeQueue.push({
	      className: className,
	      node: node
	    });
	
	    if (!this.timeout) {
	      this.timeout = setTimeout(this.flushClassNameAndNodeQueue, TICK);
	    }
	  },
	
	  flushClassNameAndNodeQueue: function () {
	    if (this.isMounted()) {
	      this.classNameAndNodeQueue.forEach(function (obj) {
	        CSSCore.addClass(obj.node, obj.className);
	      });
	    }
	    this.classNameAndNodeQueue.length = 0;
	    this.timeout = null;
	  },
	
	  componentWillMount: function () {
	    this.classNameAndNodeQueue = [];
	    this.transitionTimeouts = [];
	  },
	
	  componentWillUnmount: function () {
	    if (this.timeout) {
	      clearTimeout(this.timeout);
	    }
	    this.transitionTimeouts.forEach(function (timeout) {
	      clearTimeout(timeout);
	    });
	
	    this.classNameAndNodeQueue.length = 0;
	  },
	
	  componentWillAppear: function (done) {
	    if (this.props.appear) {
	      this.transition('appear', done, this.props.appearTimeout);
	    } else {
	      done();
	    }
	  },
	
	  componentWillEnter: function (done) {
	    if (this.props.enter) {
	      this.transition('enter', done, this.props.enterTimeout);
	    } else {
	      done();
	    }
	  },
	
	  componentWillLeave: function (done) {
	    if (this.props.leave) {
	      this.transition('leave', done, this.props.leaveTimeout);
	    } else {
	      done();
	    }
	  },
	
	  render: function () {
	    return onlyChild(this.props.children);
	  }
	});
	
	module.exports = ReactCSSTransitionGroupChild;

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var ReactDOM = __webpack_require__(100);
	
	exports.getReactDOM = function () {
	  return ReactDOM;
	};
	
	if (process.env.NODE_ENV !== 'production') {
	  var ReactPerf;
	  var ReactTestUtils;
	
	  exports.getReactPerf = function () {
	    if (!ReactPerf) {
	      ReactPerf = __webpack_require__(299);
	    }
	    return ReactPerf;
	  };
	
	  exports.getReactTestUtils = function () {
	    if (!ReactTestUtils) {
	      ReactTestUtils = __webpack_require__(300);
	    }
	    return ReactTestUtils;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _assign = __webpack_require__(25);
	
	var _extends = _assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var ReactDebugTool = __webpack_require__(71);
	var warning = __webpack_require__(31);
	var alreadyWarned = false;
	
	function roundFloat(val) {
	  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	
	  var n = Math.pow(10, base);
	  return Math.floor(val * n) / n;
	}
	
	// Flow type definition of console.table is too strict right now, see
	// https://github.com/facebook/flow/pull/2353 for updates
	function consoleTable(table) {
	  console.table(table);
	}
	
	function warnInProduction() {
	  if (alreadyWarned) {
	    return;
	  }
	  alreadyWarned = true;
	  if (typeof console !== 'undefined') {
	    console.error('ReactPerf is not supported in the production builds of React. ' + 'To collect measurements, please use the development build of React instead.');
	  }
	}
	
	function getLastMeasurements() {
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return [];
	  }
	
	  return ReactDebugTool.getFlushHistory();
	}
	
	function getExclusive() {
	  var flushHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getLastMeasurements();
	
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return [];
	  }
	
	  var aggregatedStats = {};
	  var affectedIDs = {};
	
	  function updateAggregatedStats(treeSnapshot, instanceID, timerType, applyUpdate) {
	    var displayName = treeSnapshot[instanceID].displayName;
	
	    var key = displayName;
	    var stats = aggregatedStats[key];
	    if (!stats) {
	      affectedIDs[key] = {};
	      stats = aggregatedStats[key] = {
	        key: key,
	        instanceCount: 0,
	        counts: {},
	        durations: {},
	        totalDuration: 0
	      };
	    }
	    if (!stats.durations[timerType]) {
	      stats.durations[timerType] = 0;
	    }
	    if (!stats.counts[timerType]) {
	      stats.counts[timerType] = 0;
	    }
	    affectedIDs[key][instanceID] = true;
	    applyUpdate(stats);
	  }
	
	  flushHistory.forEach(function (flush) {
	    var measurements = flush.measurements,
	        treeSnapshot = flush.treeSnapshot;
	
	    measurements.forEach(function (measurement) {
	      var duration = measurement.duration,
	          instanceID = measurement.instanceID,
	          timerType = measurement.timerType;
	
	      updateAggregatedStats(treeSnapshot, instanceID, timerType, function (stats) {
	        stats.totalDuration += duration;
	        stats.durations[timerType] += duration;
	        stats.counts[timerType]++;
	      });
	    });
	  });
	
	  return Object.keys(aggregatedStats).map(function (key) {
	    return _extends({}, aggregatedStats[key], {
	      instanceCount: Object.keys(affectedIDs[key]).length
	    });
	  }).sort(function (a, b) {
	    return b.totalDuration - a.totalDuration;
	  });
	}
	
	function getInclusive() {
	  var flushHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getLastMeasurements();
	
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return [];
	  }
	
	  var aggregatedStats = {};
	  var affectedIDs = {};
	
	  function updateAggregatedStats(treeSnapshot, instanceID, applyUpdate) {
	    var _treeSnapshot$instanc = treeSnapshot[instanceID],
	        displayName = _treeSnapshot$instanc.displayName,
	        ownerID = _treeSnapshot$instanc.ownerID;
	
	    var owner = treeSnapshot[ownerID];
	    var key = (owner ? owner.displayName + ' > ' : '') + displayName;
	    var stats = aggregatedStats[key];
	    if (!stats) {
	      affectedIDs[key] = {};
	      stats = aggregatedStats[key] = {
	        key: key,
	        instanceCount: 0,
	        inclusiveRenderDuration: 0,
	        renderCount: 0
	      };
	    }
	    affectedIDs[key][instanceID] = true;
	    applyUpdate(stats);
	  }
	
	  var isCompositeByID = {};
	  flushHistory.forEach(function (flush) {
	    var measurements = flush.measurements;
	
	    measurements.forEach(function (measurement) {
	      var instanceID = measurement.instanceID,
	          timerType = measurement.timerType;
	
	      if (timerType !== 'render') {
	        return;
	      }
	      isCompositeByID[instanceID] = true;
	    });
	  });
	
	  flushHistory.forEach(function (flush) {
	    var measurements = flush.measurements,
	        treeSnapshot = flush.treeSnapshot;
	
	    measurements.forEach(function (measurement) {
	      var duration = measurement.duration,
	          instanceID = measurement.instanceID,
	          timerType = measurement.timerType;
	
	      if (timerType !== 'render') {
	        return;
	      }
	      updateAggregatedStats(treeSnapshot, instanceID, function (stats) {
	        stats.renderCount++;
	      });
	      var nextParentID = instanceID;
	      while (nextParentID) {
	        // As we traverse parents, only count inclusive time towards composites.
	        // We know something is a composite if its render() was called.
	        if (isCompositeByID[nextParentID]) {
	          updateAggregatedStats(treeSnapshot, nextParentID, function (stats) {
	            stats.inclusiveRenderDuration += duration;
	          });
	        }
	        nextParentID = treeSnapshot[nextParentID].parentID;
	      }
	    });
	  });
	
	  return Object.keys(aggregatedStats).map(function (key) {
	    return _extends({}, aggregatedStats[key], {
	      instanceCount: Object.keys(affectedIDs[key]).length
	    });
	  }).sort(function (a, b) {
	    return b.inclusiveRenderDuration - a.inclusiveRenderDuration;
	  });
	}
	
	function getWasted() {
	  var flushHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getLastMeasurements();
	
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return [];
	  }
	
	  var aggregatedStats = {};
	  var affectedIDs = {};
	
	  function updateAggregatedStats(treeSnapshot, instanceID, applyUpdate) {
	    var _treeSnapshot$instanc2 = treeSnapshot[instanceID],
	        displayName = _treeSnapshot$instanc2.displayName,
	        ownerID = _treeSnapshot$instanc2.ownerID;
	
	    var owner = treeSnapshot[ownerID];
	    var key = (owner ? owner.displayName + ' > ' : '') + displayName;
	    var stats = aggregatedStats[key];
	    if (!stats) {
	      affectedIDs[key] = {};
	      stats = aggregatedStats[key] = {
	        key: key,
	        instanceCount: 0,
	        inclusiveRenderDuration: 0,
	        renderCount: 0
	      };
	    }
	    affectedIDs[key][instanceID] = true;
	    applyUpdate(stats);
	  }
	
	  flushHistory.forEach(function (flush) {
	    var measurements = flush.measurements,
	        treeSnapshot = flush.treeSnapshot,
	        operations = flush.operations;
	
	    var isDefinitelyNotWastedByID = {};
	
	    // Find host components associated with an operation in this batch.
	    // Mark all components in their parent tree as definitely not wasted.
	    operations.forEach(function (operation) {
	      var instanceID = operation.instanceID;
	
	      var nextParentID = instanceID;
	      while (nextParentID) {
	        isDefinitelyNotWastedByID[nextParentID] = true;
	        nextParentID = treeSnapshot[nextParentID].parentID;
	      }
	    });
	
	    // Find composite components that rendered in this batch.
	    // These are potential candidates for being wasted renders.
	    var renderedCompositeIDs = {};
	    measurements.forEach(function (measurement) {
	      var instanceID = measurement.instanceID,
	          timerType = measurement.timerType;
	
	      if (timerType !== 'render') {
	        return;
	      }
	      renderedCompositeIDs[instanceID] = true;
	    });
	
	    measurements.forEach(function (measurement) {
	      var duration = measurement.duration,
	          instanceID = measurement.instanceID,
	          timerType = measurement.timerType;
	
	      if (timerType !== 'render') {
	        return;
	      }
	
	      // If there was a DOM update below this component, or it has just been
	      // mounted, its render() is not considered wasted.
	      var updateCount = treeSnapshot[instanceID].updateCount;
	
	      if (isDefinitelyNotWastedByID[instanceID] || updateCount === 0) {
	        return;
	      }
	
	      // We consider this render() wasted.
	      updateAggregatedStats(treeSnapshot, instanceID, function (stats) {
	        stats.renderCount++;
	      });
	
	      var nextParentID = instanceID;
	      while (nextParentID) {
	        // Any parents rendered during this batch are considered wasted
	        // unless we previously marked them as dirty.
	        var isWasted = renderedCompositeIDs[nextParentID] && !isDefinitelyNotWastedByID[nextParentID];
	        if (isWasted) {
	          updateAggregatedStats(treeSnapshot, nextParentID, function (stats) {
	            stats.inclusiveRenderDuration += duration;
	          });
	        }
	        nextParentID = treeSnapshot[nextParentID].parentID;
	      }
	    });
	  });
	
	  return Object.keys(aggregatedStats).map(function (key) {
	    return _extends({}, aggregatedStats[key], {
	      instanceCount: Object.keys(affectedIDs[key]).length
	    });
	  }).sort(function (a, b) {
	    return b.inclusiveRenderDuration - a.inclusiveRenderDuration;
	  });
	}
	
	function getOperations() {
	  var flushHistory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getLastMeasurements();
	
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return [];
	  }
	
	  var stats = [];
	  flushHistory.forEach(function (flush, flushIndex) {
	    var operations = flush.operations,
	        treeSnapshot = flush.treeSnapshot;
	
	    operations.forEach(function (operation) {
	      var instanceID = operation.instanceID,
	          type = operation.type,
	          payload = operation.payload;
	      var _treeSnapshot$instanc3 = treeSnapshot[instanceID],
	          displayName = _treeSnapshot$instanc3.displayName,
	          ownerID = _treeSnapshot$instanc3.ownerID;
	
	      var owner = treeSnapshot[ownerID];
	      var key = (owner ? owner.displayName + ' > ' : '') + displayName;
	
	      stats.push({
	        flushIndex: flushIndex,
	        instanceID: instanceID,
	        key: key,
	        type: type,
	        ownerID: ownerID,
	        payload: payload
	      });
	    });
	  });
	  return stats;
	}
	
	function printExclusive(flushHistory) {
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return;
	  }
	
	  var stats = getExclusive(flushHistory);
	  var table = stats.map(function (item) {
	    var key = item.key,
	        instanceCount = item.instanceCount,
	        totalDuration = item.totalDuration;
	
	    var renderCount = item.counts.render || 0;
	    var renderDuration = item.durations.render || 0;
	    return {
	      'Component': key,
	      'Total time (ms)': roundFloat(totalDuration),
	      'Instance count': instanceCount,
	      'Total render time (ms)': roundFloat(renderDuration),
	      'Average render time (ms)': renderCount ? roundFloat(renderDuration / renderCount) : undefined,
	      'Render count': renderCount,
	      'Total lifecycle time (ms)': roundFloat(totalDuration - renderDuration)
	    };
	  });
	  consoleTable(table);
	}
	
	function printInclusive(flushHistory) {
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return;
	  }
	
	  var stats = getInclusive(flushHistory);
	  var table = stats.map(function (item) {
	    var key = item.key,
	        instanceCount = item.instanceCount,
	        inclusiveRenderDuration = item.inclusiveRenderDuration,
	        renderCount = item.renderCount;
	
	    return {
	      'Owner > Component': key,
	      'Inclusive render time (ms)': roundFloat(inclusiveRenderDuration),
	      'Instance count': instanceCount,
	      'Render count': renderCount
	    };
	  });
	  consoleTable(table);
	}
	
	function printWasted(flushHistory) {
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return;
	  }
	
	  var stats = getWasted(flushHistory);
	  var table = stats.map(function (item) {
	    var key = item.key,
	        instanceCount = item.instanceCount,
	        inclusiveRenderDuration = item.inclusiveRenderDuration,
	        renderCount = item.renderCount;
	
	    return {
	      'Owner > Component': key,
	      'Inclusive wasted time (ms)': roundFloat(inclusiveRenderDuration),
	      'Instance count': instanceCount,
	      'Render count': renderCount
	    };
	  });
	  consoleTable(table);
	}
	
	function printOperations(flushHistory) {
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return;
	  }
	
	  var stats = getOperations(flushHistory);
	  var table = stats.map(function (stat) {
	    return {
	      'Owner > Node': stat.key,
	      'Operation': stat.type,
	      'Payload': typeof stat.payload === 'object' ? JSON.stringify(stat.payload) : stat.payload,
	      'Flush index': stat.flushIndex,
	      'Owner Component ID': stat.ownerID,
	      'DOM Component ID': stat.instanceID
	    };
	  });
	  consoleTable(table);
	}
	
	var warnedAboutPrintDOM = false;
	function printDOM(measurements) {
	  process.env.NODE_ENV !== 'production' ? warning(warnedAboutPrintDOM, '`ReactPerf.printDOM(...)` is deprecated. Use ' + '`ReactPerf.printOperations(...)` instead.') : void 0;
	  warnedAboutPrintDOM = true;
	  return printOperations(measurements);
	}
	
	var warnedAboutGetMeasurementsSummaryMap = false;
	function getMeasurementsSummaryMap(measurements) {
	  process.env.NODE_ENV !== 'production' ? warning(warnedAboutGetMeasurementsSummaryMap, '`ReactPerf.getMeasurementsSummaryMap(...)` is deprecated. Use ' + '`ReactPerf.getWasted(...)` instead.') : void 0;
	  warnedAboutGetMeasurementsSummaryMap = true;
	  return getWasted(measurements);
	}
	
	function start() {
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return;
	  }
	
	  ReactDebugTool.beginProfiling();
	}
	
	function stop() {
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return;
	  }
	
	  ReactDebugTool.endProfiling();
	}
	
	function isRunning() {
	  if (!(process.env.NODE_ENV !== 'production')) {
	    warnInProduction();
	    return false;
	  }
	
	  return ReactDebugTool.isProfiling();
	}
	
	var ReactPerfAnalysis = {
	  getLastMeasurements: getLastMeasurements,
	  getExclusive: getExclusive,
	  getInclusive: getInclusive,
	  getWasted: getWasted,
	  getOperations: getOperations,
	  printExclusive: printExclusive,
	  printInclusive: printInclusive,
	  printWasted: printWasted,
	  printOperations: printOperations,
	  start: start,
	  stop: stop,
	  isRunning: isRunning,
	  // Deprecated:
	  printDOM: printDOM,
	  getMeasurementsSummaryMap: getMeasurementsSummaryMap
	};
	
	module.exports = ReactPerfAnalysis;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(14),
	    _assign = __webpack_require__(25);
	
	var EventConstants = __webpack_require__(301);
	var EventPluginHub = __webpack_require__(55);
	var EventPluginRegistry = __webpack_require__(53);
	var EventPropagators = __webpack_require__(104);
	var React = __webpack_require__(24);
	var ReactDOM = __webpack_require__(100);
	var ReactDOMComponentTree = __webpack_require__(63);
	var ReactBrowserEventEmitter = __webpack_require__(52);
	var ReactInstanceMap = __webpack_require__(69);
	var ReactUpdates = __webpack_require__(82);
	var SyntheticEvent = __webpack_require__(108);
	var ReactShallowRenderer = __webpack_require__(302);
	
	var findDOMNode = __webpack_require__(183);
	var invariant = __webpack_require__(23);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	function Event(suffix) {}
	
	/**
	 * @class ReactTestUtils
	 */
	
	function findAllInRenderedTreeInternal(inst, test) {
	  if (!inst || !inst.getPublicInstance) {
	    return [];
	  }
	  var publicInst = inst.getPublicInstance();
	  var ret = test(publicInst) ? [publicInst] : [];
	  var currentElement = inst._currentElement;
	  if (ReactTestUtils.isDOMComponent(publicInst)) {
	    var renderedChildren = inst._renderedChildren;
	    var key;
	    for (key in renderedChildren) {
	      if (!renderedChildren.hasOwnProperty(key)) {
	        continue;
	      }
	      ret = ret.concat(findAllInRenderedTreeInternal(renderedChildren[key], test));
	    }
	  } else if (React.isValidElement(currentElement) && typeof currentElement.type === 'function') {
	    ret = ret.concat(findAllInRenderedTreeInternal(inst._renderedComponent, test));
	  }
	  return ret;
	}
	
	/**
	 * Utilities for making it easy to test React components.
	 *
	 * See https://facebook.github.io/react/docs/test-utils.html
	 *
	 * Todo: Support the entire DOM.scry query syntax. For now, these simple
	 * utilities will suffice for testing purposes.
	 * @lends ReactTestUtils
	 */
	var ReactTestUtils = {
	  renderIntoDocument: function (element) {
	    var div = document.createElement('div');
	    // None of our tests actually require attaching the container to the
	    // DOM, and doing so creates a mess that we rely on test isolation to
	    // clean up, so we're going to stop honoring the name of this method
	    // (and probably rename it eventually) if no problems arise.
	    // document.documentElement.appendChild(div);
	    return ReactDOM.render(element, div);
	  },
	
	  isElement: function (element) {
	    return React.isValidElement(element);
	  },
	
	  isElementOfType: function (inst, convenienceConstructor) {
	    return React.isValidElement(inst) && inst.type === convenienceConstructor;
	  },
	
	  isDOMComponent: function (inst) {
	    return !!(inst && inst.nodeType === 1 && inst.tagName);
	  },
	
	  isDOMComponentElement: function (inst) {
	    return !!(inst && React.isValidElement(inst) && !!inst.tagName);
	  },
	
	  isCompositeComponent: function (inst) {
	    if (ReactTestUtils.isDOMComponent(inst)) {
	      // Accessing inst.setState warns; just return false as that'll be what
	      // this returns when we have DOM nodes as refs directly
	      return false;
	    }
	    return inst != null && typeof inst.render === 'function' && typeof inst.setState === 'function';
	  },
	
	  isCompositeComponentWithType: function (inst, type) {
	    if (!ReactTestUtils.isCompositeComponent(inst)) {
	      return false;
	    }
	    var internalInstance = ReactInstanceMap.get(inst);
	    var constructor = internalInstance._currentElement.type;
	
	    return constructor === type;
	  },
	
	  isCompositeComponentElement: function (inst) {
	    if (!React.isValidElement(inst)) {
	      return false;
	    }
	    // We check the prototype of the type that will get mounted, not the
	    // instance itself. This is a future proof way of duck typing.
	    var prototype = inst.type.prototype;
	    return typeof prototype.render === 'function' && typeof prototype.setState === 'function';
	  },
	
	  isCompositeComponentElementWithType: function (inst, type) {
	    var internalInstance = ReactInstanceMap.get(inst);
	    var constructor = internalInstance._currentElement.type;
	
	    return !!(ReactTestUtils.isCompositeComponentElement(inst) && constructor === type);
	  },
	
	  getRenderedChildOfCompositeComponent: function (inst) {
	    if (!ReactTestUtils.isCompositeComponent(inst)) {
	      return null;
	    }
	    var internalInstance = ReactInstanceMap.get(inst);
	    return internalInstance._renderedComponent.getPublicInstance();
	  },
	
	  findAllInRenderedTree: function (inst, test) {
	    if (!inst) {
	      return [];
	    }
	    !ReactTestUtils.isCompositeComponent(inst) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findAllInRenderedTree(...): instance must be a composite component') : _prodInvariant('10') : void 0;
	    return findAllInRenderedTreeInternal(ReactInstanceMap.get(inst), test);
	  },
	
	  /**
	   * Finds all instance of components in the rendered tree that are DOM
	   * components with the class name matching `className`.
	   * @return {array} an array of all the matches.
	   */
	  scryRenderedDOMComponentsWithClass: function (root, classNames) {
	    return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
	      if (ReactTestUtils.isDOMComponent(inst)) {
	        var className = inst.className;
	        if (typeof className !== 'string') {
	          // SVG, probably.
	          className = inst.getAttribute('class') || '';
	        }
	        var classList = className.split(/\s+/);
	
	        if (!Array.isArray(classNames)) {
	          !(classNames !== undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.') : _prodInvariant('11') : void 0;
	          classNames = classNames.split(/\s+/);
	        }
	        return classNames.every(function (name) {
	          return classList.indexOf(name) !== -1;
	        });
	      }
	      return false;
	    });
	  },
	
	  /**
	   * Like scryRenderedDOMComponentsWithClass but expects there to be one result,
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactDOMComponent} The one match.
	   */
	  findRenderedDOMComponentWithClass: function (root, className) {
	    var all = ReactTestUtils.scryRenderedDOMComponentsWithClass(root, className);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match (found: ' + all.length + ') ' + 'for class:' + className);
	    }
	    return all[0];
	  },
	
	  /**
	   * Finds all instance of components in the rendered tree that are DOM
	   * components with the tag name matching `tagName`.
	   * @return {array} an array of all the matches.
	   */
	  scryRenderedDOMComponentsWithTag: function (root, tagName) {
	    return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
	      return ReactTestUtils.isDOMComponent(inst) && inst.tagName.toUpperCase() === tagName.toUpperCase();
	    });
	  },
	
	  /**
	   * Like scryRenderedDOMComponentsWithTag but expects there to be one result,
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactDOMComponent} The one match.
	   */
	  findRenderedDOMComponentWithTag: function (root, tagName) {
	    var all = ReactTestUtils.scryRenderedDOMComponentsWithTag(root, tagName);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match (found: ' + all.length + ') ' + 'for tag:' + tagName);
	    }
	    return all[0];
	  },
	
	  /**
	   * Finds all instances of components with type equal to `componentType`.
	   * @return {array} an array of all the matches.
	   */
	  scryRenderedComponentsWithType: function (root, componentType) {
	    return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
	      return ReactTestUtils.isCompositeComponentWithType(inst, componentType);
	    });
	  },
	
	  /**
	   * Same as `scryRenderedComponentsWithType` but expects there to be one result
	   * and returns that one result, or throws exception if there is any other
	   * number of matches besides one.
	   * @return {!ReactComponent} The one match.
	   */
	  findRenderedComponentWithType: function (root, componentType) {
	    var all = ReactTestUtils.scryRenderedComponentsWithType(root, componentType);
	    if (all.length !== 1) {
	      throw new Error('Did not find exactly one match (found: ' + all.length + ') ' + 'for componentType:' + componentType);
	    }
	    return all[0];
	  },
	
	  /**
	   * Pass a mocked component module to this method to augment it with
	   * useful methods that allow it to be used as a dummy React component.
	   * Instead of rendering as usual, the component will become a simple
	   * <div> containing any provided children.
	   *
	   * @param {object} module the mock function object exported from a
	   *                        module that defines the component to be mocked
	   * @param {?string} mockTagName optional dummy root tag name to return
	   *                              from render method (overrides
	   *                              module.mockTagName if provided)
	   * @return {object} the ReactTestUtils object (for chaining)
	   */
	  mockComponent: function (module, mockTagName) {
	    mockTagName = mockTagName || module.mockTagName || 'div';
	
	    module.prototype.render.mockImplementation(function () {
	      return React.createElement(mockTagName, null, this.props.children);
	    });
	
	    return this;
	  },
	
	  /**
	   * Simulates a top level event being dispatched from a raw event that occurred
	   * on an `Element` node.
	   * @param {Object} topLevelType A type from `EventConstants.topLevelTypes`
	   * @param {!Element} node The dom to simulate an event occurring on.
	   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
	   */
	  simulateNativeEventOnNode: function (topLevelType, node, fakeNativeEvent) {
	    fakeNativeEvent.target = node;
	    ReactBrowserEventEmitter.ReactEventListener.dispatchEvent(topLevelType, fakeNativeEvent);
	  },
	
	  /**
	   * Simulates a top level event being dispatched from a raw event that occurred
	   * on the `ReactDOMComponent` `comp`.
	   * @param {Object} topLevelType A type from `EventConstants.topLevelTypes`.
	   * @param {!ReactDOMComponent} comp
	   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
	   */
	  simulateNativeEventOnDOMComponent: function (topLevelType, comp, fakeNativeEvent) {
	    ReactTestUtils.simulateNativeEventOnNode(topLevelType, findDOMNode(comp), fakeNativeEvent);
	  },
	
	  nativeTouchData: function (x, y) {
	    return {
	      touches: [{ pageX: x, pageY: y }]
	    };
	  },
	
	  createRenderer: function () {
	    return new ReactShallowRenderer();
	  },
	
	  Simulate: null,
	  SimulateNative: {}
	};
	
	/**
	 * Exports:
	 *
	 * - `ReactTestUtils.Simulate.click(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.Simulate.mouseMove(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.Simulate.change(Element/ReactDOMComponent)`
	 * - ... (All keys from event plugin `eventTypes` objects)
	 */
	function makeSimulator(eventType) {
	  return function (domComponentOrNode, eventData) {
	    var node;
	    !!React.isValidElement(domComponentOrNode) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'TestUtils.Simulate expects a component instance and not a ReactElement.TestUtils.Simulate will not work if you are using shallow rendering.') : _prodInvariant('14') : void 0;
	    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
	      node = findDOMNode(domComponentOrNode);
	    } else if (domComponentOrNode.tagName) {
	      node = domComponentOrNode;
	    }
	
	    var dispatchConfig = EventPluginRegistry.eventNameDispatchConfigs[eventType];
	
	    var fakeNativeEvent = new Event();
	    fakeNativeEvent.target = node;
	    fakeNativeEvent.type = eventType.toLowerCase();
	
	    // We don't use SyntheticEvent.getPooled in order to not have to worry about
	    // properly destroying any properties assigned from `eventData` upon release
	    var event = new SyntheticEvent(dispatchConfig, ReactDOMComponentTree.getInstanceFromNode(node), fakeNativeEvent, node);
	    // Since we aren't using pooling, always persist the event. This will make
	    // sure it's marked and won't warn when setting additional properties.
	    event.persist();
	    _assign(event, eventData);
	
	    if (dispatchConfig.phasedRegistrationNames) {
	      EventPropagators.accumulateTwoPhaseDispatches(event);
	    } else {
	      EventPropagators.accumulateDirectDispatches(event);
	    }
	
	    ReactUpdates.batchedUpdates(function () {
	      EventPluginHub.enqueueEvents(event);
	      EventPluginHub.processEventQueue(true);
	    });
	  };
	}
	
	function buildSimulators() {
	  ReactTestUtils.Simulate = {};
	
	  var eventType;
	  for (eventType in EventPluginRegistry.eventNameDispatchConfigs) {
	    /**
	     * @param {!Element|ReactDOMComponent} domComponentOrNode
	     * @param {?object} eventData Fake event data to use in SyntheticEvent.
	     */
	    ReactTestUtils.Simulate[eventType] = makeSimulator(eventType);
	  }
	}
	
	// Rebuild ReactTestUtils.Simulate whenever event plugins are injected
	var oldInjectEventPluginOrder = EventPluginHub.injection.injectEventPluginOrder;
	EventPluginHub.injection.injectEventPluginOrder = function () {
	  oldInjectEventPluginOrder.apply(this, arguments);
	  buildSimulators();
	};
	var oldInjectEventPlugins = EventPluginHub.injection.injectEventPluginsByName;
	EventPluginHub.injection.injectEventPluginsByName = function () {
	  oldInjectEventPlugins.apply(this, arguments);
	  buildSimulators();
	};
	
	buildSimulators();
	
	/**
	 * Exports:
	 *
	 * - `ReactTestUtils.SimulateNative.click(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseMove(Element/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseIn/ReactDOMComponent)`
	 * - `ReactTestUtils.SimulateNative.mouseOut(Element/ReactDOMComponent)`
	 * - ... (All keys from `EventConstants.topLevelTypes`)
	 *
	 * Note: Top level event types are a subset of the entire set of handler types
	 * (which include a broader set of "synthetic" events). For example, onDragDone
	 * is a synthetic event. Except when testing an event plugin or React's event
	 * handling code specifically, you probably want to use ReactTestUtils.Simulate
	 * to dispatch synthetic events.
	 */
	
	function makeNativeSimulator(eventType) {
	  return function (domComponentOrNode, nativeEventData) {
	    var fakeNativeEvent = new Event(eventType);
	    _assign(fakeNativeEvent, nativeEventData);
	    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
	      ReactTestUtils.simulateNativeEventOnDOMComponent(eventType, domComponentOrNode, fakeNativeEvent);
	    } else if (domComponentOrNode.tagName) {
	      // Will allow on actual dom nodes.
	      ReactTestUtils.simulateNativeEventOnNode(eventType, domComponentOrNode, fakeNativeEvent);
	    }
	  };
	}
	
	Object.keys(topLevelTypes).forEach(function (eventType) {
	  // Event type is stored as 'topClick' - we transform that to 'click'
	  var convenienceName = eventType.indexOf('top') === 0 ? eventType.charAt(3).toLowerCase() + eventType.substr(4) : eventType;
	  /**
	   * @param {!Element|ReactDOMComponent} domComponentOrNode
	   * @param {?Event} nativeEventData Fake native event to use in SyntheticEvent.
	   */
	  ReactTestUtils.SimulateNative[convenienceName] = makeNativeSimulator(eventType);
	});
	
	module.exports = ReactTestUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },

/***/ 301:
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Types of raw signals from the browser caught at the top level.
	 */
	var topLevelTypes = {
	  topAbort: null,
	  topAnimationEnd: null,
	  topAnimationIteration: null,
	  topAnimationStart: null,
	  topBlur: null,
	  topCanPlay: null,
	  topCanPlayThrough: null,
	  topChange: null,
	  topClick: null,
	  topCompositionEnd: null,
	  topCompositionStart: null,
	  topCompositionUpdate: null,
	  topContextMenu: null,
	  topCopy: null,
	  topCut: null,
	  topDoubleClick: null,
	  topDrag: null,
	  topDragEnd: null,
	  topDragEnter: null,
	  topDragExit: null,
	  topDragLeave: null,
	  topDragOver: null,
	  topDragStart: null,
	  topDrop: null,
	  topDurationChange: null,
	  topEmptied: null,
	  topEncrypted: null,
	  topEnded: null,
	  topError: null,
	  topFocus: null,
	  topInput: null,
	  topInvalid: null,
	  topKeyDown: null,
	  topKeyPress: null,
	  topKeyUp: null,
	  topLoad: null,
	  topLoadedData: null,
	  topLoadedMetadata: null,
	  topLoadStart: null,
	  topMouseDown: null,
	  topMouseMove: null,
	  topMouseOut: null,
	  topMouseOver: null,
	  topMouseUp: null,
	  topPaste: null,
	  topPause: null,
	  topPlay: null,
	  topPlaying: null,
	  topProgress: null,
	  topRateChange: null,
	  topReset: null,
	  topScroll: null,
	  topSeeked: null,
	  topSeeking: null,
	  topSelectionChange: null,
	  topStalled: null,
	  topSubmit: null,
	  topSuspend: null,
	  topTextInput: null,
	  topTimeUpdate: null,
	  topTouchCancel: null,
	  topTouchEnd: null,
	  topTouchMove: null,
	  topTouchStart: null,
	  topTransitionEnd: null,
	  topVolumeChange: null,
	  topWaiting: null,
	  topWheel: null
	};
	
	var EventConstants = {
	  topLevelTypes: topLevelTypes
	};
	
	module.exports = EventConstants;

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(14),
	    _assign = __webpack_require__(25);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var React = __webpack_require__(24);
	var ReactDefaultInjection = __webpack_require__(101);
	var ReactCompositeComponent = __webpack_require__(87);
	var ReactReconciler = __webpack_require__(78);
	var ReactUpdates = __webpack_require__(82);
	
	var emptyObject = __webpack_require__(40);
	var getNextDebugID = __webpack_require__(97);
	var invariant = __webpack_require__(23);
	
	var NoopInternalComponent = function () {
	  function NoopInternalComponent(element) {
	    _classCallCheck(this, NoopInternalComponent);
	
	    this._renderedOutput = element;
	    this._currentElement = element;
	
	    if (process.env.NODE_ENV !== 'production') {
	      this._debugID = getNextDebugID();
	    }
	  }
	
	  NoopInternalComponent.prototype.mountComponent = function mountComponent() {};
	
	  NoopInternalComponent.prototype.receiveComponent = function receiveComponent(element) {
	    this._renderedOutput = element;
	    this._currentElement = element;
	  };
	
	  NoopInternalComponent.prototype.unmountComponent = function unmountComponent() {};
	
	  NoopInternalComponent.prototype.getHostNode = function getHostNode() {
	    return undefined;
	  };
	
	  NoopInternalComponent.prototype.getPublicInstance = function getPublicInstance() {
	    return null;
	  };
	
	  return NoopInternalComponent;
	}();
	
	var ShallowComponentWrapper = function (element) {
	  // TODO: Consolidate with instantiateReactComponent
	  if (process.env.NODE_ENV !== 'production') {
	    this._debugID = getNextDebugID();
	  }
	
	  this.construct(element);
	};
	_assign(ShallowComponentWrapper.prototype, ReactCompositeComponent, {
	  _constructComponent: ReactCompositeComponent._constructComponentWithoutOwner,
	  _instantiateReactComponent: function (element) {
	    return new NoopInternalComponent(element);
	  },
	  _replaceNodeWithMarkup: function () {},
	  _renderValidatedComponent: ReactCompositeComponent._renderValidatedComponentWithoutOwnerOrContext
	});
	
	function _batchedRender(renderer, element, context) {
	  var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(true);
	  renderer._render(element, transaction, context);
	  ReactUpdates.ReactReconcileTransaction.release(transaction);
	}
	
	var ReactShallowRenderer = function () {
	  function ReactShallowRenderer() {
	    _classCallCheck(this, ReactShallowRenderer);
	
	    this._instance = null;
	  }
	
	  ReactShallowRenderer.prototype.getMountedInstance = function getMountedInstance() {
	    return this._instance ? this._instance._instance : null;
	  };
	
	  ReactShallowRenderer.prototype.render = function render(element, context) {
	    // Ensure we've done the default injections. This might not be true in the
	    // case of a simple test that only requires React and the TestUtils in
	    // conjunction with an inline-requires transform.
	    ReactDefaultInjection.inject();
	
	    !React.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactShallowRenderer render(): Invalid component element.%s', typeof element === 'function' ? ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.' : '') : _prodInvariant('12', typeof element === 'function' ? ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.' : '') : void 0;
	    !(typeof element.type !== 'string') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactShallowRenderer render(): Shallow rendering works only with custom components, not primitives (%s). Instead of calling `.render(el)` and inspecting the rendered output, look at `el.props` directly instead.', element.type) : _prodInvariant('13', element.type) : void 0;
	
	    if (!context) {
	      context = emptyObject;
	    }
	    ReactUpdates.batchedUpdates(_batchedRender, this, element, context);
	
	    return this.getRenderOutput();
	  };
	
	  ReactShallowRenderer.prototype.getRenderOutput = function getRenderOutput() {
	    return this._instance && this._instance._renderedComponent && this._instance._renderedComponent._renderedOutput || null;
	  };
	
	  ReactShallowRenderer.prototype.unmount = function unmount() {
	    if (this._instance) {
	      ReactReconciler.unmountComponent(this._instance, false);
	    }
	  };
	
	  ReactShallowRenderer.prototype._render = function _render(element, transaction, context) {
	    if (this._instance) {
	      ReactReconciler.receiveComponent(this._instance, element, transaction, context);
	    } else {
	      var instance = new ShallowComponentWrapper(element);
	      ReactReconciler.mountComponent(instance, transaction, null, null, context, 0);
	      this._instance = instance;
	    }
	  };
	
	  return ReactShallowRenderer;
	}();
	
	module.exports = ReactShallowRenderer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */
	
	var invariant = __webpack_require__(23);
	
	/**
	 * The CSSCore module specifies the API (and implements most of the methods)
	 * that should be used when dealing with the display of elements (via their
	 * CSS classes and visibility on screen. It is an API focused on mutating the
	 * display and not reading it as no logical state should be encoded in the
	 * display of elements.
	 */
	
	/* Slow implementation for browsers that don't natively support .matches() */
	function matchesSelector_SLOW(element, selector) {
	  var root = element;
	  while (root.parentNode) {
	    root = root.parentNode;
	  }
	
	  var all = root.querySelectorAll(selector);
	  return Array.prototype.indexOf.call(all, element) !== -1;
	}
	
	var CSSCore = {
	
	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  addClass: function addClass(element, className) {
	    !!/\s/.test(className) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'CSSCore.addClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : void 0;
	
	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },
	
	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function removeClass(element, className) {
	    !!/\s/.test(className) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'CSSCore.removeClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : void 0;
	
	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },
	
	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function conditionClass(element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },
	
	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to check the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function hasClass(element, className) {
	    !!/\s/.test(className) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'CSS.hasClass takes only a single class name.') : invariant(false) : void 0;
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  },
	
	  /**
	   * Tests whether the element matches the selector specified
	   *
	   * @param {DOMNode|DOMWindow} element the element that we are querying
	   * @param {string} selector the CSS selector
	   * @return {boolean} true if the element matches the selector, false if not
	   */
	  matchesSelector: function matchesSelector(element, selector) {
	    var matchesImpl = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector || function (s) {
	      return matchesSelector_SLOW(element, s);
	    };
	    return matchesImpl.call(element, selector);
	  }
	
	};
	
	module.exports = CSSCore;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(18);
	
	var getVendorPrefixedEventName = __webpack_require__(61);
	
	var endEvents = [];
	
	function detectEvents() {
	  var animEnd = getVendorPrefixedEventName('animationend');
	  var transEnd = getVendorPrefixedEventName('transitionend');
	
	  if (animEnd) {
	    endEvents.push(animEnd);
	  }
	
	  if (transEnd) {
	    endEvents.push(transEnd);
	  }
	}
	
	if (ExecutionEnvironment.canUseDOM) {
	  detectEvents();
	}
	
	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var ReactTransitionEvents = {
	  addEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  removeEndEventListener: function (node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	module.exports = ReactTransitionEvents;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3g/YmMwYSIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWFsZXJ0L2Rpc3QvYWxlcnQuanM/YjczYiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cC9pbmRleC5qcz9mODdjIiwid2VicGFjazovLy8uL34vcmVhY3QvbGliL1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwLmpzPzlmY2YiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvUmVhY3RUcmFuc2l0aW9uR3JvdXAuanM/YmQ1YyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9SZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuanM/ZmEwZiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9mbGF0dGVuQ2hpbGRyZW4uanM/MGQwNiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0L2xpYi9SZWFjdENTU1RyYW5zaXRpb25Hcm91cENoaWxkLmpzPzAxMTIiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvUmVhY3RBZGRvbnNET01EZXBlbmRlbmNpZXMuanM/NDFhNCIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWRvbS9saWIvUmVhY3RQZXJmLmpzPzk2NGQiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kb20vbGliL1JlYWN0VGVzdFV0aWxzLmpzP2Y3MjMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kb20vbGliL0V2ZW50Q29uc3RhbnRzLmpzPzVlNmYiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kb20vbGliL1JlYWN0U2hhbGxvd1JlbmRlcmVyLmpzP2YzNjgiLCJ3ZWJwYWNrOi8vLy4vfi9mYmpzL2xpYi9DU1NDb3JlLmpzPzIzMjgiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC9saWIvUmVhY3RUcmFuc2l0aW9uRXZlbnRzLmpzP2I2YWEiXSwibmFtZXMiOlsiTG9naW4iLCJzb2NrZXQiLCJ3aW5kb3ciLCJjb250ZXh0Iiwib24iLCJvYmoiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJzaG93QWxlcnQiLCJtZXNzYWdlIiwic2V0SXRlbSIsInVzZXJuYW1lIiwicHVzaCIsInBhdGhuYW1lIiwic2V0U3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwicmVmcyIsInZhbHVlIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZW1pdCIsIm1zZyIsInNob3ciLCJ0aW1lIiwidHlwZSIsImljb24iLCJhIiwiZ2xvYmFsIiwiYWxlcnRPcHRpb25zIiwic2lnbkluIiwiYmluZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsSzs7O0FBQ0osb0JBQWM7QUFBQTs7QUFBQTtBQUViOzs7O3lDQUVtQjtBQUNsQixXQUFJQyxTQUFTQyxPQUFPRCxNQUFwQjtBQUNBLFdBQUlFLFVBQVUsSUFBZDtBQUNBRixjQUFPRyxFQUFQLENBQVUsZ0JBQVYsRUFBNEIsVUFBU0MsR0FBVCxFQUFjO0FBQ3hDLGFBQUlILE9BQU9JLGNBQVAsQ0FBc0JDLE9BQXRCLENBQThCLE1BQTlCLENBQUosRUFBMkM7QUFDekNKLG1CQUFRSyxTQUFSLENBQWtCLDBCQUFsQjtBQUNEO0FBQ0QsYUFBS0gsSUFBSUksT0FBVCxFQUFtQjtBQUNqQk4sbUJBQVFLLFNBQVIsQ0FBa0JILElBQUlJLE9BQXRCO0FBQ0QsVUFGRCxNQUVPO0FBQ0xQLGtCQUFPSSxjQUFQLENBQXNCSSxPQUF0QixDQUE4QixNQUE5QixFQUFzQ0wsSUFBSU0sUUFBMUM7QUFDQSx1Q0FBZUMsSUFBZixDQUFvQixFQUFFQyxVQUFVLE9BQVosRUFBcEI7QUFDRDtBQUNGLFFBVkQ7QUFXQSxZQUFLQyxRQUFMLENBQWM7QUFDWmIsaUJBQVFBO0FBREksUUFBZDtBQUdEOzs7NEJBRU1jLEMsRUFBRztBQUNSQSxTQUFFQyxjQUFGO0FBQ0EsV0FBSUMsT0FBTztBQUNUTixtQkFBVSxL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QixhQUFhLEVBQUU7O0FBRXhFLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLFNBQVM7QUFDekI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUk7QUFDSixz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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQWtCO0FBQ2xCLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0EsdUJBQXNCO0FBQ3RCO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRzs7QUFFSDtBQUNBLHVCQUFzQjtBQUN0QjtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRzs7QUFFSDtBQUNBLHVCQUFzQjtBQUN0QjtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7O0FDbmZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSx3Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gseUNBQXdDO0FBQ3hDO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQsdUM7Ozs7Ozs7O0FDcklBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYSxXQUFXO0FBQ3hCLGNBQWEsT0FBTztBQUNwQixlQUFjLFdBQVc7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsY0FBYSxXQUFXO0FBQ3hCLGNBQWEsT0FBTztBQUNwQixlQUFjLFdBQVc7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLG9DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGNBQWEsV0FBVztBQUN4QixjQUFhLE9BQU87QUFDcEIsY0FBYSxFQUFFO0FBQ2YsZUFBYyxXQUFXO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsY0FBYSxrQkFBa0I7QUFDL0IsY0FBYSxPQUFPO0FBQ3BCLGVBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsY0FBYSxrQkFBa0I7QUFDL0IsY0FBYSxPQUFPO0FBQ3BCLGVBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwwQjs7Ozs7Ozs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUEsd0MiLCJmaWxlIjoiMC4xOGRiNmE4OGY1ZGYzMzAzYTFjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgXG5pbXBvcnQgeyBMaW5rLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQWxlcnRDb250YWluZXIgZnJvbSAncmVhY3QtYWxlcnQnO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgc29ja2V0ID0gd2luZG93LnNvY2tldDtcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgc29ja2V0Lm9uKCdzaWduaW5SZXNwb25zZScsIGZ1bmN0aW9uKG9iaikge1xuICAgICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcbiAgICAgICAgY29udGV4dC5zaG93QWxlcnQoXCJZb3VyZSBhbHJlYWR5IGxvZ2dlZCBpbiFcIik7XG4gICAgICB9XG4gICAgICBpZiAoIG9iai5tZXNzYWdlICkge1xuICAgICAgICBjb250ZXh0LnNob3dBbGVydChvYmoubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIG9iai51c2VybmFtZSk7XG4gICAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goeyBwYXRobmFtZTogJy9ob21lJ30pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc29ja2V0OiBzb2NrZXRcbiAgICB9KTtcbiAgfVxuXG4gIHNpZ25JbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciB1c2VyID0ge1xuICAgICAgdXNlcm5hbWU6IHRoaXMucmVmcy51c2VybmFtZS52YWx1ZSxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnJlZnMucGFzc3dvcmQudmFsdWVcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCdhdHRlbXB0IHRvIHNpZ24gaW4hJyk7XG4gICAgd2luZG93LnNvY2tldC5lbWl0KCdzaWduaW4nLCB1c2VyKTtcbiAgfVxuXG4gIHNob3dBbGVydChtc2cpe1xuICAgIG1zZy5zaG93KG1zZywge1xuICAgICAgdGltZTogMjAwMCxcbiAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgIGljb246IDxpbWcgc3JjPVwicGF0aC90by9zb21lL2ltZy8zMngzMi5wbmdcIiAvPlxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QWxlcnRDb250YWluZXIgcmVmPXsoYSkgPT4gZ2xvYmFsLm1zZyA9IGF9IHsuLi50aGlzLmFsZXJ0T3B0aW9uc30gLz5cbiAgICAgIFx0PGZvcm0gY2xhc3NOYW1lPVwibG9naW5Gb3JtXCIgb25TdWJtaXQ9e3RoaXMuc2lnbkluLmJpbmQodGhpcyl9PlxuICAgICAgICBcdFVzZXJuYW1lOiBcbiAgICAgICAgXHQ8aW5wdXQgcmVmPVwidXNlcm5hbWVcIiByZXF1aXJlZD1cInRydWVcIi8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICBcdFBhc3N3b3JkOlxuICAgICAgICBcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiByZWY9XCJwYXNzd29yZFwiIHJlcXVpcmVkPVwidHJ1ZVwiLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9nIGluPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3giLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcInJlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cFwiKSwgcmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcInJlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cFwiLCBcInJlYWN0LWRvbVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJyZWFjdC1hbGVydFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwicmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwXCIpLCByZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZWFjdC1hbGVydFwiXSA9IGZhY3Rvcnkocm9vdFtcInJlYWN0XCJdLCByb290W1wicmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwXCJdLCByb290W1wicmVhY3QtZG9tXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE2X18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuXG5cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3RcIjtcblxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cblxuLyoqKi8gfSxcbi8qIDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8vbG9hZCBzdHlsZXNcblx0J3VzZSBzdHJpY3QnO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuXHQvL2xvYWQganNcblxuXHR2YXIgX3JlYWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cblx0dmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cblx0dmFyIF9kZXZDb21wb25lbnRzQWxlcnRDb250YWluZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcblxuXHR2YXIgX2RldkNvbXBvbmVudHNBbGVydENvbnRhaW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXZDb21wb25lbnRzQWxlcnRDb250YWluZXIpO1xuXG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IF9kZXZDb21wb25lbnRzQWxlcnRDb250YWluZXIyWydkZWZhdWx0J107XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0Ly8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuXHQvLyBsb2FkIHRoZSBzdHlsZXNcblx0dmFyIGNvbnRlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHRpZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblx0Ly8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxuXHR2YXIgdXBkYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCkoY29udGVudCwge30pO1xuXHRpZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcblx0Ly8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuXHRpZihmYWxzZSkge1xuXHRcdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdFx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsdXMtbG9hZGVyL2luZGV4LmpzIS4vYWxlcnQuc3R5bFwiLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWx1cy1sb2FkZXIvaW5kZXguanMhLi9hbGVydC5zdHlsXCIpO1xuXHRcdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0XHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcblx0fVxuXG4vKioqLyB9LFxuLyogMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0ZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KSgpO1xuXHRleHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucmVhY3QtYWxlcnRzIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiAxNHB4O1xcbiAgei1pbmRleDogOTk5OTk5O1xcbn1cXG4ucmVhY3QtYWxlcnRzIC5hbGVydCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDEycHggMCByZ2JhKDAsMCwwLDAuMyk7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnJlYWN0LWFsZXJ0cyAuYWxlcnQgLmNvbnRlbnQge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gIC13ZWJraXQtZmxleDogMTtcXG4gICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnJlYWN0LWFsZXJ0cyAuYWxlcnQgLmljb24ge1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxufVxcbi5yZWFjdC1hbGVydHMgLmFsZXJ0IC5pY29uIGRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi5yZWFjdC1hbGVydHMgLmFsZXJ0IC5pY29uIC5pbmZvLWljb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiK19fd2VicGFja19yZXF1aXJlX18oNSkrXCIpO1xcbn1cXG4ucmVhY3QtYWxlcnRzIC5hbGVydCAuaWNvbiAuZXJyb3ItaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIrX193ZWJwYWNrX3JlcXVpcmVfXyg2KStcIik7XFxufVxcbi5yZWFjdC1hbGVydHMgLmFsZXJ0IC5pY29uIC5zdWNjZXNzLWljb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiK19fd2VicGFja19yZXF1aXJlX18oNykrXCIpO1xcbn1cXG4ucmVhY3QtYWxlcnRzIC5hbGVydCAubWVzc2FnZSB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAzO1xcbiAgLXdlYmtpdC1mbGV4OiAzO1xcbiAgICAgIC1tcy1mbGV4OiAzO1xcbiAgICAgICAgICBmbGV4OiAzO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHBhZGRpbmc6IDhweCAxMHB4O1xcbn1cXG4ucmVhY3QtYWxlcnRzIC5hbGVydCAuY2xvc2Uge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMnB4IDJweCAwO1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5yZWFjdC1hbGVydHMgLmFsZXJ0IC5jbG9zZSAuY2xvc2UtbGlnaHQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiK19fd2VicGFja19yZXF1aXJlX18oOCkrXCIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG4ucmVhY3QtYWxlcnRzIC5hbGVydCAuY2xvc2UgLmNsb3NlLWRhcmsge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiK19fd2VicGFja19yZXF1aXJlX18oOSkrXCIpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG4ucmVhY3QtYWxlcnRzIC5hbGVydCAuY2xvc2U6aG92ZXIge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG4ucmVhY3QtYWxlcnRzIC5hbGVydC5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnJlYWN0LWFsZXJ0cyAuc2NhbGUtZW50ZXIge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4ucmVhY3QtYWxlcnRzIC5zY2FsZS1lbnRlci5zY2FsZS1lbnRlci1hY3RpdmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNSwgMS41KTtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjUsIDEuNSk7XFxufVxcbi5yZWFjdC1hbGVydHMgLnNjYWxlLWxlYXZlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuLnJlYWN0LWFsZXJ0cyAuc2NhbGUtbGVhdmUuc2NhbGUtbGVhdmUtYWN0aXZlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5yZWFjdC1hbGVydHMgLmZhZGUtZW50ZXIge1xcbiAgb3BhY2l0eTogMC4xO1xcbn1cXG4ucmVhY3QtYWxlcnRzIC5mYWRlLWVudGVyLmZhZGUtZW50ZXItYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLW91dDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2Utb3V0O1xcbn1cXG4ucmVhY3QtYWxlcnRzIC5mYWRlLWxlYXZlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5yZWFjdC1hbGVydHMgLmZhZGUtbGVhdmUuZmFkZS1sZWF2ZS1hY3RpdmUge1xcbiAgb3BhY2l0eTogMC4xO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbjtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW47XFxufVxcblwiLCBcIlwiXSk7XG5cbi8qKiovIH0sXG4vKiA0ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKlxyXG5cdFx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRcdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuXHQqL1xyXG5cdC8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBsaXN0ID0gW107XHJcblxyXG5cdFx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdFx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRcdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBsaXN0O1xyXG5cdH07XHJcblxuXG4vKioqLyB9LFxuLyogNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBNHRKUkVGVWVOckVWNzF2MURBVWYzWjhIejJLU0tkdXFBTVRFbEQrZ2F2b3dGWUoyb1VCUWJzeXNsY1ZZdSsvVU5xSmdSWUtHeEtjZWlzTEgyc0ZGUXNkS2pWdGFlK2FTMktlYzNiT2NaemNOVUpnNmNtT1kvdjNlOC9QNzlrQS83bVFzaFA1TzVqR3FpVS83NUE1K1B6UENHamdydXp5eXBLZ0Z5WHN2NGJibkVNTHhVVUJLYUxkRXYvS1dFQUlIOFZTQ0RETkhQaW9hVzRXTHdoaHRuby9zUVF2UlVDYTJPMEZjRVFJdURqZ0NvNjZoKzNIeVJodEJzbHU1RHFQNEEwT09SSWZTRnFNOW14YlJEUS80Qko4RFJkZkJFTUZCY2dMZEZKRWtqcjc3d1dTV0Nva0VMMGRXRU1IVnlKRzIwZ1FDd21UU053M2wzWjhsdXZwSnJEcWkyUmZEamhSSlBpZ2o2dDl0aEJuTmtWTWNQRWRSZWwrM1VKRUIrY0Q3VVdiMGpRSjArZVkyWkV4dXdTUEZEQWxVTG5rQUdVRVdKVkNGSEtJQWc2OWJnVGhlUmd2Rm9OS2NERlhrYkFWWmlpU0N5NmswbUJRRzNjR3M5MW1IRWlvMXdaV0UyUWM2SGc5Q0pHVW80SHpETUpBNmN3VzVJRlh4eGxVRzA1NjlNMzMvYnBkNzBjMWgwQmpvZ3BuaDM1c0dRWE9KWnpOQ3RRV2twTzlsalZsTkF1ZWR4Unh4ZHBsQm1Fay9ZWm5qakFwRE1XNnAvTEU5TTZGd3F2d0RhZEMrd29Zam1zNlBMV0Z6TlFKRUFUcTlNSUp5MEVTbVdQTWk1TVJTVG1peHI1TVlWVmlQYkkyQWlVaFJramJkbkF5TEIxN2Z3Tzg1MXYxOG9iZUI5RHAybWFmajBIR1dzVHhrMGZRTE1GNWxNa0ZjbTJlUnlEZWNqdytPN3BEaUVYT1QwTTdnV2EzTDZiMkNCNzRVU1locWJVTExYQndETnRKTEpjUzRtTGQzK0ZvKzQ3R09qc0tSTVJPclNIS1NRZTJoeEs0dWdSN3lIUkRaVElxcFhNY1FPZkVJUEgxYmw5a0NURW5IQi80YUVZK1NFNHFJM0xZbUh3SWU0YkYwM2NHSlQvWFlHclNoVjA5Rkl1MmlHNkNUUjN6QWF0Z1VzTDRMMENEWGo4WitXZGhISDRGWVpFTFZGdlUrNGR3RFpYN29lYzdHNEdFeU9rcldNR3IxTEpKSXVMMnlLYXNSU1NnSUtBeUk4NTdQcllBejdUd1lpVmdCaVBhM1lJUHVHQlRCN1lSVUh0TU5WQlY0N2gyZlI1bWJlQjVjU0FaOUcwUEZ2RHJpMjVLUndwYUJ4d2w2bHYrVTJQRjNPLzdNRjhVN0VoQlgyeU5UNnN3Y1dNS05uSFJKamZ1Q3RZckdVbXVaRHU3djJEaCtoTTROQlVibFVCcTdjNG1yS0IyeTZOY1N2RnRvTzk1TG5qUjA4eEt3bnNKdHhvMVdFV1FtWng1TzZkZGVPbytzRDVNZUptM29ZMElkTFpnQnEyeGlOdnlTRDFFZWlHc2o4MG5rWTduK0ZYcHgyblpWL1RRVFB0SGdBRUFqb3JNNVlaMnhZb0FBQUFBU1VWT1JLNUNZSUk9XCJcblxuLyoqKi8gfSxcbi8qIDYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQS9aSlJFRlVlTnFrVjd0T2xFRVVQbWYrWFZnUkZBZ0JSVWd3c1RFaG9URFlVZG5iMGlHSkZhL0FXM0FMaVdLaWphSGxDWHdBU0N5MElKRkNzeEV4U2xoZExxTHNIT2QrK2YvNWx5WE1ablptejF6T2QrNnpDTmRyV0RKUE5Vck5DNGVPbnp5ZUVNTTcwU2M2dm8wc1RYd21IOEhmaDFQUGh4Y1czbHpHWE01WjR1NzVxekluOTlHdG1tV3Z2cTJ0elJzQlpXZUJzSkhRN0RyNjk4d2g2ckxWcXRXTi9kWFZad0Z6VElEQUt3T2duTnB0NDZSN1NMN1IxYlh4ZFdWbExnY2dBc0d1eWp6c1hIeHpOZG91ZmxlcjBabWU3dTZYOWVYbE1rMTBCb0J5ZG5mcU4xSno3azBCaWs2cTI5WmJxNzBRSU9ZU0lOcWJnSElxajdxU252eG9nRnpzZmdSKzBqUm5QQkFKNHN2UzB0TzhFMWF1RW1KZ1ZOM09ISGp5Qzg2MzNnSWlxZ1U1b1BvSVpzU254TEJsUUZBU0FBOGdSdkVkTXJUcXQ4eUR1UU1uaUI0RXFWdTVkejZ5WTZYakVLTlFZaklNeVVodmplK1lnT1pONWk2bWZxZGFKWlZhVTh5NVpVWTI3UHk2RHo4eW9nbnBDWjBxeVFsY3RIVFJCRng0SmtLQnVXWEMrMjRESHg0RDZCK0tzaGsvK2duOGV4MmcyUkJuaENiRUhTd0FvU1hEZ3B0VlVzWEVTUjh4SjJpTlBRQWFHVXVxa2cwTXFkNDZxQU92NytuTGpPMnQraGs2NXM0SjgyR0lYTEcwRGhrd3Z6dmhtR2VEZ3dVQWxwYmRHWWRzOUw3bVFXZ0tBZVlGZHdwbXFRS1JkenJlVlFNYTFmV3BaM29hUmhZWDFlaXlYWTdHN29tOTNkMDZCTkU3SmRNcW9VQUx5VERFTEFKQjJ1YW0zWnlaVVdQLzdLeWoyYmxjTzkzZTFneEh4b0hxbjdRV01KSXdqTlowS282aVFINzE5THExdy9WMStMZS83eGhiNXBJbTE1d3Q1UmtDazRLMEF6S3RqaWl6czdJWFRnU3pyOTlyNk94TU1Xb2RIVG1hbkV1YVhITVhxVE0rQkl3NTh2RklyS1BpMjdxSXFMWEpTY2dHQnJ3RGlybWtSZTM4ajdZL1V0c3kwMWsxL04ySUhDNVVlMmlPMERIcDlMandDR0RGVWxNQWtIc3NHZ3MyZmhTYzBObzg5QW03QnVaTWRFZTYxcVUxZ0poemlNTURwVkxyaEtjN084N20xaWNzemFwZm5RbWZQeVcxZ0NVSVpIR3IyTlh4QzN6dmcvSUZ5YkN4dVJrNVhFU1RlOFJlZVlhaEw4ZmgzU2tBbEE4RnpKbUJuWjBBMzMwUDFHeVUrNHBZazN2azN2QXNwdjgwSkl1UkNBdW0xaFJ5RmJ2a3R4c1FYSVFZOWcwQTN1cDNUa3JOSTBBQlFNWTZNM21mb2Rla2xwWVZoSzIwKzd2anZOZmVRUHFSd1k4YlNscmFEMVNKZXAvZHo3RDRGS1pMM2dNcVNUQW1VeUE2TFREMXlDQlR5VFNkQVVicERBR0NkT3VaTS9CcFdHbUN4Zm10VkFQV2VuSy9yZXNLSGNyMGpEcFZZMUZyRVROWGdCS0IyTVlFNUo1VDVFR1FmYUFZSUlRVWlZRUI2QmlJWjI2ZWg1Zm5BVUY0TFliUFBoZGc0QXU2WjhyUkVETFQxZHpZblpVd2wzZWF1MHYvWG5meTF4c3ZPVWNsSTVUNElQd1hZQURFUFNoNlBlei82Z0FBQUFCSlJVNUVya0pnZ2c9PVwiXG5cbi8qKiovIH0sXG4vKiA3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUE5dEpSRUZVZU5xa1Y4dE9WREVZL2xzT1p5NHdSRzRPR3dtU0lUR3lNTkZFVnhOWEpxN2tEWkNFUnpCeFRlSkdZZXRLSWRHRksxYytnWWxJRkJlU2FDUnFpTUV4UmhRWm9seWR5Nm05bm1sNzJwa0JtblRhMCtuNXYrKy90Z2ZCeVJyeXpGMk51T2JKbDU0L0dXRy90STgwRjBlY2E5Zjc4bkF0MXo5OXEzRHBjU3R3TnNjTzBWTkhCbWZQY1Fmb0NJS0Z1VTl2cHFTQ3JHTk5XVU5wRENkdEZyaFNzRE9WbXAvN3VIeFRBMGNPRWdnZkM5QkxKRElNM0psT3o4K3V2cDYwQ0JnazhQRzFwVDJLWkNmeG1FWm1XSVhaek1ON0gxNzVMTkVtQVFYb2pXMXBmcm1IMEpGbysxTmQyUWVVeEtTRFJBc1hOQVdXV3F0UnRoZGJQNkZjK1pjZ3dramNmYjkwd3c3QzRDZ3B4cHNHRmdjZWdaaE11WDRJZHo2L296QWFEcVp6VEhXdDFpN1FwMmVTQkhFVFlJSXNQeHBScmtWNll5M1M1a1RLVjNLUWJVa0Z6c2VndmFCVGZpWW1FRGUvalA3WXNocFJqaytFOWg3TEJ0N1Nhb05ISkprRmR0Y0xIZEpFc3Y4UWNvWnY0SzN2SHZCQ09ndmp1UjdvNnd6akZ5clViYVg5WFZqWjNvYmRXbFhFT2xFeGo3U2VMTWVCWDNzVG5NRVZld2RnT0pOTk1BNnBpUXZkUFRDYzdZYmxyVTFZMjlrUmdVZWtDNVRiaFJXSUhvUTRvYjFLTFYxenVsWTgxZThFdDRrVUIvTXdsRWxMUU0wQ292Q3E2SWc3ZHA2S3hLeDZoV3hYUzNDOUZRZUhHclZHR1JzaDNmTEVYd21qeUNSRHJURGUxZE1TZERpVGcvdmpWMkZtN0RKMEJ3RjFTYzYwQXB0Z1pCL0h2bEtzNXpTQnZqQ0VjOTI5TUpFZmhZRXc3UVMvUFhvUnNoMEIvVC9EMS9yRGxFVEFtZ1VhOW5VUlFPNDBGSHNuOG1kNW54bTd3Z0ZkNFB2MUdzeCtlY3ZYR1drT2FxUW5zZ3NCYWZzMGZGbit3VWNHeEFBWnNBdThkTEFUcDJZTWJoWWdwRnNoYUFlY0NWdmFGZ1NtejV5UFNTaENOamhyNVdyRnFnRkhpZ0d6bGZiMytNaElMSHhiallGOTRLeDlaZS9FNllkOGwxT0RnQkVjT3ZPVlA5dkNwQllKSHpnalhLNVVoTFVSYW5wcERyeTNiVVRpOU5tdDEyRzUvQnVLQTZkakVneDhxM3FZQUdkM2djV3RYOExjTmpiR3BEVUJ0VWtWRGl4SXJPM3QwanBmb3lRR2FaNTN3c3JmemFTcjZKNUZXb29yS3Yzc2M0RDREeU5pMklodmxrRVRTVElkR0Rhb2RrKy9sMmhsek5FOEQ2RXZKWEo5NCtDQSs3eGNxNGhMRnBidnhnY1EwbXNDYVdZQllwemRTZ0JiWXpHQVJlYXUwWk52Ylo4azNjYTF4aHE0UmdLMWpvR0dGWkNNQVc0RmNibmh3bFZoUWxaK3ExS0x3SkYyMmpPeEx3M3VJRFJqUUpFZzBIQ0g2M2FqcDV4ZC81SC9zekh3ZmtER0F0VXFpd1B0bHFTWFdYMnZ5eHIrajFSSEljTDRFZjFkdDJ0QlF5QVc3c0FpTUhuSG12K1JGM3hkeXZaK1hyZno2WTFhdkVjOFkwSnoxZjRMTUFDZHNBekZWMTM1WlFBQUFBQkpSVTVFcmtKZ2dnPT1cIlxuXG4vKioqLyB9LFxuLyogOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmdBQUFBWUNBWUFBQURnZHozNEFBQUFCbUpMUjBRQUFBQUFBQUQ1UTd0L0FBQUFDWEJJV1hNQUFBQklBQUFBU0FCR3lXcytBQUFBQ1had1FXY0FBQUFZQUFBQUdBQjRUS1dtQUFBQWFFbEVRVlJJeDJOZ0dBVWpGdWd3TUREc1kyQmdFQ1ZDclNoVXJRNHBGdXhqWUdENHo4REFjSm1BSmFKUU5mK2hlb2dHeUJweFdVS01Hckl0b2Rod2ZBWlJ6WEJjbGxEVmNHeVdrR1E0RTdWY01HaURpS2FSVE5Oa1N2T01Sdk9pZ3VhRjNTZ1lSZ0FBMWJvKy9hczVnOXNBQUFBQVNVVk9SSzVDWUlJPVwiXG5cbi8qKiovIH0sXG4vKiA5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCZ0FBQUFZQ0FZQUFBRGdkejM0QUFBQUJtSkxSMFFBQUFBQUFBRDVRN3QvQUFBQUNYQklXWE1BQUFCSUFBQUFTQUJHeVdzK0FBQUFDWFp3UVdjQUFBQVlBQUFBR0FCNFRLV21BQUFBYUVsRVFWUkl4Mk5nR0FVakUvei8vMS9uLy8vLysvNy8veTlLaEZwUnFGb2RVaXpZOXg4Q0x1T3pCR3I0WmFqYWZhUllnS3dScXlYRXFDSGJFb29OeDJjUTFRekhZd24xRE1kaENVbUdNMUhGQllNMmlHZ2F5VFJOcGpUUGFQUW9LbWhiMkkyQzRRVUEwd21Id2prZWV3UUFBQUFBU1VWT1JLNUNZSUk9XCJcblxuLyoqKi8gfSxcbi8qIDEwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKlxyXG5cdFx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRcdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuXHQqL1xyXG5cdHZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdFx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XHJcblx0XHRcdHZhciBtZW1vO1xyXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHRcdFx0cmV0dXJuIG1lbW87XHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHRcdH0pLFxyXG5cdFx0Z2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdFx0fSksXHJcblx0XHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcclxuXHRcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xyXG5cclxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRcdGlmKGZhbHNlKSB7XHJcblx0XHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cdFx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0XHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXHJcblx0XHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcclxuXHJcblx0XHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xyXG5cdFx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuXHRcdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcclxuXHRcdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XHJcblx0XHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xyXG5cdFx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnJlZnMrKztcclxuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XHJcblx0XHR2YXIgc3R5bGVzID0gW107XHJcblx0XHR2YXIgbmV3U3R5bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHRcdHZhciBpZCA9IGl0ZW1bMF07XHJcblx0XHRcdHZhciBjc3MgPSBpdGVtWzFdO1xyXG5cdFx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcclxuXHRcdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xyXG5cdFx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN0eWxlcztcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCgpIHtcclxuXHRcdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcblx0XHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XHJcblx0XHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdHJldHVybiBzdHlsZUVsZW1lbnQ7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCgpIHtcclxuXHRcdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xyXG5cdFx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdFx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0XHRoZWFkLmFwcGVuZENoaWxkKGxpbmtFbGVtZW50KTtcclxuXHRcdHJldHVybiBsaW5rRWxlbWVudDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdFx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XHJcblx0XHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpO1xyXG5cdFx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xyXG5cdFx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcclxuXHRcdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcclxuXHRcdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG5cdFx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQoKTtcclxuXHRcdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcblx0XHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXHJcblx0XHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdFx0fTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudCgpO1xyXG5cdFx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHR1cGRhdGUob2JqKTtcclxuXHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRcdGlmKG5ld09iaikge1xyXG5cdFx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZW1vdmUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgdGV4dFN0b3JlID0gW107XHJcblxyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xyXG5cdFx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcclxuXHRcdH07XHJcblx0fSkoKTtcclxuXHJcblx0ZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xyXG5cdFx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRcdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XHJcblx0XHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XHJcblx0XHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XHJcblx0XHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHRcdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcclxuXHRcdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRcdGlmKG1lZGlhKSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcclxuXHRcdH1cclxuXHJcblx0XHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdFx0dmFyIGNzcyA9IG9iai5jc3M7XHJcblx0XHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblx0XHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcblx0XHRpZihzb3VyY2VNYXApIHtcclxuXHRcdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcclxuXHRcdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xyXG5cclxuXHRcdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xyXG5cclxuXHRcdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRcdGlmKG9sZFNyYylcclxuXHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xyXG5cdH1cclxuXG5cbi8qKiovIH0sXG4vKiAxMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExX187XG5cbi8qKiovIH0sXG4vKiAxMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkgeyd1c2Ugc3RyaWN0JztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cblx0dmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5cdHZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94NSwgX3g2LCBfeDcpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3g1LCBwcm9wZXJ0eSA9IF94NiwgcmVjZWl2ZXIgPSBfeDc7IF9hZ2FpbiA9IGZhbHNlOyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3g1ID0gcGFyZW50OyBfeDYgPSBwcm9wZXJ0eTsgX3g3ID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGRlc2MgPSBwYXJlbnQgPSB1bmRlZmluZWQ7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cblx0ZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuXHR2YXIgX3JlYWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cblx0dmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cblx0dmFyIF9ldmVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblxuXHR2YXIgX2V2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ldmVudHMpO1xuXG5cdHZhciBfcmVhY3RBZGRvbnNDc3NUcmFuc2l0aW9uR3JvdXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblxuXHR2YXIgX3JlYWN0QWRkb25zQ3NzVHJhbnNpdGlvbkdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0QWRkb25zQ3NzVHJhbnNpdGlvbkdyb3VwKTtcblxuXHR2YXIgX0FsZXJ0TWVzc2FnZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xuXG5cdHZhciBfQWxlcnRNZXNzYWdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FsZXJ0TWVzc2FnZSk7XG5cblx0dmFyIEFsZXJ0Q29udGFpbmVyID0gKGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG5cdCAgX2luaGVyaXRzKEFsZXJ0Q29udGFpbmVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHQgIGZ1bmN0aW9uIEFsZXJ0Q29udGFpbmVyKHByb3BzKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWxlcnRDb250YWluZXIpO1xuXG5cdCAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihBbGVydENvbnRhaW5lci5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5jYWxsKHRoaXMsIHByb3BzKTtcblx0ICAgIGdsb2JhbC5yZWFjdEFsZXJ0RXZlbnRzID0gbmV3IF9ldmVudHMyWydkZWZhdWx0J10oKTtcblx0ICAgIHRoaXMuc3RhdGUgPSB7XG5cdCAgICAgIGFsZXJ0czogW11cblx0ICAgIH07XG5cdCAgICB0aGlzLnN0eWxlID0gdGhpcy5fc2V0U3R5bGUoKTtcblx0ICAgIHRoaXMudGhlbWUgPSB0aGlzLl9zZXRUaGVtZSgpO1xuXHQgICAgdGhpcy5fZXZlbnRMaXN0bmVycygpO1xuXHQgIH1cblxuXHQgIC8qKlxyXG5cdCAgICogU2hvdyB0aGUgYWxlcnQgaW4gdGhlIHBhZ2Ugd2l0aCBzdWNjZXNzIHR5cGVcclxuXHQgICAqIEBwYXJhbSAge3N0cmluZ30gbWVzc2FnZSBcclxuXHQgICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyBcclxuXHQgICAqIEByZXR1cm4ge3ZvaWR9ICAgICAgICAgXHJcblx0ICAgKi9cblxuXHQgIF9jcmVhdGVDbGFzcyhBbGVydENvbnRhaW5lciwgW3tcblx0ICAgIGtleTogJ3N1Y2Nlc3MnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHN1Y2Nlc3MobWVzc2FnZSkge1xuXHQgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG5cdCAgICAgIG9wdGlvbnMudHlwZSA9ICdzdWNjZXNzJztcblx0ICAgICAgdGhpcy5zaG93KG1lc3NhZ2UsIG9wdGlvbnMpO1xuXHQgICAgfVxuXG5cdCAgICAvKipcclxuXHQgICAgICogU2hvdyB0aGUgYWxlcnQgaW4gdGhlIHBhZ2Ugd2l0aCBlcnJvciB0eXBlXHJcblx0ICAgICAqIEBwYXJhbSAge3N0cmluZ30gbWVzc2FnZSBcclxuXHQgICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zIFxyXG5cdCAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdlcnJvcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuXHQgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG5cdCAgICAgIG9wdGlvbnMudHlwZSA9ICdlcnJvcic7XG5cdCAgICAgIHRoaXMuc2hvdyhtZXNzYWdlLCBvcHRpb25zKTtcblx0ICAgIH1cblxuXHQgICAgLyoqXHJcblx0ICAgICAqIFNob3cgdGhlIGFsZXJ0IGluIHRoZSBwYWdlIHdpdGggaW5mbyB0eXBlIFxyXG5cdCAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IG1lc3NhZ2VcclxuXHQgICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXHJcblx0ICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2luZm8nLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGluZm8obWVzc2FnZSkge1xuXHQgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG5cdCAgICAgIG9wdGlvbnMudHlwZSA9ICdpbmZvJztcblx0ICAgICAgdGhpcy5zaG93KG1lc3NhZ2UsIG9wdGlvbnMpO1xuXHQgICAgfVxuXG5cdCAgICAvKipcclxuXHQgICAgICogU2hvdyB0aGUgYWxlcnQgaW4gdGhlIHBhZ2VcclxuXHQgICAgICogQHBhcmFtICB7c3RyaW5nfSBtZXNzYWdlXHJcblx0ICAgICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xyXG5cdCAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzaG93Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93KG1lc3NhZ2UpIHtcblx0ICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuXHQgICAgICB2YXIgYWxlcnQgPSB7fTtcblx0ICAgICAgYWxlcnQubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdCAgICAgIGFsZXJ0ID0gT2JqZWN0LmFzc2lnbihhbGVydCwgb3B0aW9ucyk7XG5cdCAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGVydHM6IHRoaXMuX2FkZEFsZXJ0KGFsZXJ0KSB9KTtcblx0ICAgIH1cblxuXHQgICAgLyoqXHJcblx0ICAgICAqIFJlbW92ZSBhbGwgdGFza3MgZnJvbSB0aGUgcGFnZVxyXG5cdCAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdyZW1vdmVBbGwnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUFsbCgpIHtcblx0ICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFsZXJ0czogW10gfSk7XG5cdCAgICB9XG5cblx0ICAgIC8qKlxyXG5cdCAgICAgKiBBZGQgYW4gYWxlcnRcclxuXHQgICAgICogQHBhcmFtIHtPYmplY3R9IGFsZXJ0XHJcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ19hZGRBbGVydCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gX2FkZEFsZXJ0KGFsZXJ0KSB7XG5cdCAgICAgIGFsZXJ0LnVuaXF1ZUtleSA9IHRoaXMuX2dlblVuaXF1ZUtleSgpO1xuXHQgICAgICBhbGVydC5zdHlsZSA9IHRoaXMudGhlbWU7XG5cdCAgICAgIGlmICghYWxlcnQuaGFzT3duUHJvcGVydHkoJ3RpbWUnKSkge1xuXHQgICAgICAgIGFsZXJ0LnRpbWUgPSB0aGlzLnByb3BzLnRpbWU7XG5cdCAgICAgIH07XG5cdCAgICAgIGFsZXJ0LmNsb3NlSWNvbkNsYXNzID0gJ2Nsb3NlLScgKyB0aGlzLnByb3BzLnRoZW1lO1xuXHQgICAgICB0aGlzLnN0YXRlLmFsZXJ0cy5wdXNoKGFsZXJ0KTtcblx0ICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWxlcnRzO1xuXHQgICAgfVxuXG5cdCAgICAvKipcclxuXHQgICAgICogR2VuZXJhdGUgYSBrZXlcclxuXHQgICAgICogQHJldHVybiB7c3RyaW5nfVxyXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdfZ2VuVW5pcXVlS2V5Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2VuVW5pcXVlS2V5KCkge1xuXHQgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA1KTtcblx0ICAgIH1cblxuXHQgICAgLyoqXHJcblx0ICAgICAqIFJlbW92ZSBhbiBBbGVydE1lc3NhZ2UgZnJvbSB0aGUgY29udGFpbmVyXHJcblx0ICAgICAqIEBwYXJhbSAge0FsZXJ0TWVzc2FnZX0gYWxlcnRcclxuXHQgICAgICogQHJldHVybiB7dm9pZH1cclxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnX3JlbW92ZUFsZXJ0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlQWxlcnQoYWxlcnQpIHtcblx0ICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWxlcnRzLmZpbHRlcihmdW5jdGlvbiAoYSkge1xuXHQgICAgICAgIHJldHVybiBhLnVuaXF1ZUtleSAhPSBhbGVydC5wcm9wcy51bmlxdWVLZXk7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXG5cdCAgICAvKipcclxuXHQgICAgICogTGlzdGVuIHRvIGFsZXJ0IGV2ZW50c1xyXG5cdCAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdfZXZlbnRMaXN0bmVycycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gX2V2ZW50TGlzdG5lcnMoKSB7XG5cdCAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cblx0ICAgICAgcmVhY3RBbGVydEV2ZW50cy5vbignQUxFUlQuUkVNT1ZFJywgZnVuY3Rpb24gKGFsZXJ0KSB7XG5cdCAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBhbGVydHM6IF90aGlzLl9yZW1vdmVBbGVydChhbGVydCkgfSk7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXG5cdCAgICAvKipcclxuXHQgICAgICogU2V0IHRoZSBhbGVydCBwb3NpdGlvbiBvbiB0aGUgcGFnZVxyXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdfc2V0U3R5bGUnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRTdHlsZSgpIHtcblx0ICAgICAgdmFyIHBvc2l0aW9uID0ge307XG5cdCAgICAgIHN3aXRjaCAodGhpcy5wcm9wcy5wb3NpdGlvbikge1xuXHQgICAgICAgIGNhc2UgJ3RvcCBsZWZ0Jzpcblx0ICAgICAgICAgIHBvc2l0aW9uID0ge1xuXHQgICAgICAgICAgICB0b3A6IDAsXG5cdCAgICAgICAgICAgIHJpZ2h0OiAnYXV0bycsXG5cdCAgICAgICAgICAgIGJvdHRvbTogJ2F1dG8nLFxuXHQgICAgICAgICAgICBsZWZ0OiAwXG5cdCAgICAgICAgICB9O1xuXHQgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgY2FzZSAndG9wIHJpZ2h0Jzpcblx0ICAgICAgICAgIHBvc2l0aW9uID0ge1xuXHQgICAgICAgICAgICB0b3A6IDAsXG5cdCAgICAgICAgICAgIHJpZ2h0OiAwLFxuXHQgICAgICAgICAgICBib3R0b206ICdhdXRvJyxcblx0ICAgICAgICAgICAgbGVmdDogJ2F1dG8nXG5cdCAgICAgICAgICB9O1xuXHQgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgY2FzZSAnYm90dG9tIGxlZnQnOlxuXHQgICAgICAgICAgcG9zaXRpb24gPSB7XG5cdCAgICAgICAgICAgIHRvcDogJ2F1dG8nLFxuXHQgICAgICAgICAgICByaWdodDogJ2F1dG8nLFxuXHQgICAgICAgICAgICBib3R0b206IDAsXG5cdCAgICAgICAgICAgIGxlZnQ6IDBcblx0ICAgICAgICAgIH07XG5cdCAgICAgICAgICBicmVhaztcblx0ICAgICAgICBkZWZhdWx0OlxuXHQgICAgICAgICAgcG9zaXRpb24gPSB7XG5cdCAgICAgICAgICAgIHRvcDogJ2F1dG8nLFxuXHQgICAgICAgICAgICByaWdodDogMCxcblx0ICAgICAgICAgICAgYm90dG9tOiAwLFxuXHQgICAgICAgICAgICBsZWZ0OiAnYXV0bydcblx0ICAgICAgICAgIH07XG5cdCAgICAgICAgICBicmVhaztcblx0ICAgICAgfVxuXG5cdCAgICAgIHJldHVybiB7XG5cdCAgICAgICAgbWFyZ2luOiB0aGlzLnByb3BzLm9mZnNldCArICdweCcsXG5cdCAgICAgICAgdG9wOiBwb3NpdGlvbi50b3AsXG5cdCAgICAgICAgcmlnaHQ6IHBvc2l0aW9uLnJpZ2h0LFxuXHQgICAgICAgIGJvdHRvbTogcG9zaXRpb24uYm90dG9tLFxuXHQgICAgICAgIGxlZnQ6IHBvc2l0aW9uLmxlZnRcblx0ICAgICAgfTtcblx0ICAgIH1cblxuXHQgICAgLyoqXHJcblx0ICAgICAqIFNldCB0aGUgc3R5bGUgb2YgdGhlIGFsZXJ0IGJhc2VkIG9uIHRoZSBjaG9zZW4gdGhlbWVcclxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnX3NldFRoZW1lJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0VGhlbWUoKSB7XG5cdCAgICAgIHZhciB0aGVtZSA9IHt9O1xuXHQgICAgICBzd2l0Y2ggKHRoaXMucHJvcHMudGhlbWUpIHtcblx0ICAgICAgICBjYXNlICdsaWdodCc6XG5cdCAgICAgICAgICB0aGVtZSA9IHtcblx0ICAgICAgICAgICAgYWxlcnQ6IHtcblx0ICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcblx0ICAgICAgICAgICAgICBjb2xvcjogJyMzMzMnXG5cdCAgICAgICAgICAgIH0sXG5cdCAgICAgICAgICAgIGNsb3NlQnV0dG9uOiB7XG5cdCAgICAgICAgICAgICAgYmc6ICcjZjNmM2YzJ1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICB9O1xuXHQgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgZGVmYXVsdDpcblx0ICAgICAgICAgIHRoZW1lID0ge1xuXHQgICAgICAgICAgICBhbGVydDoge1xuXHQgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMzMnLFxuXHQgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZidcblx0ICAgICAgICAgICAgfSxcblx0ICAgICAgICAgICAgY2xvc2VCdXR0b246IHtcblx0ICAgICAgICAgICAgICBiZzogJyM0NDQnXG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgIH07XG5cdCAgICAgICAgICBicmVhaztcblx0ICAgICAgfVxuXG5cdCAgICAgIHJldHVybiB0aGVtZTtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0ICAgICAgdGhpcy5zdHlsZSA9IHRoaXMuX3NldFN0eWxlKCk7XG5cdCAgICAgIHRoaXMudGhlbWUgPSB0aGlzLl9zZXRUaGVtZSgpO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ3JlbmRlcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHQgICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG5cdCAgICAgICAgJ2RpdicsXG5cdCAgICAgICAgeyBzdHlsZTogdGhpcy5zdHlsZSwgY2xhc3NOYW1lOiAncmVhY3QtYWxlcnRzJyB9LFxuXHQgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuXHQgICAgICAgICAgX3JlYWN0QWRkb25zQ3NzVHJhbnNpdGlvbkdyb3VwMlsnZGVmYXVsdCddLFxuXHQgICAgICAgICAge1xuXHQgICAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogdGhpcy5wcm9wcy50cmFuc2l0aW9uLFxuXHQgICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0OiAyNTAsXG5cdCAgICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ6IDI1MCB9LFxuXHQgICAgICAgICAgdGhpcy5zdGF0ZS5hbGVydHMubWFwKGZ1bmN0aW9uIChhbGVydCwgaW5kZXgpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KF9BbGVydE1lc3NhZ2UyWydkZWZhdWx0J10sIF9leHRlbmRzKHsga2V5OiBhbGVydC51bmlxdWVLZXkgfSwgYWxlcnQpKTtcblx0ICAgICAgICAgIH0pXG5cdCAgICAgICAgKVxuXHQgICAgICApO1xuXHQgICAgfVxuXHQgIH1dKTtcblxuXHQgIHJldHVybiBBbGVydENvbnRhaW5lcjtcblx0fSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cblx0QWxlcnRDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuXHQgIG9mZnNldDogMTQsXG5cdCAgcG9zaXRpb246ICdib3R0b20gbGVmdCcsXG5cdCAgdGhlbWU6ICdkYXJrJyxcblx0ICB0aW1lOiA1MDAwLFxuXHQgIHRyYW5zaXRpb246ICdzY2FsZSdcblx0fTtcblxuXHRBbGVydENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG5cdCAgb2Zmc2V0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLm51bWJlcixcblx0ICBwb3NpdGlvbjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5vbmVPZihbJ2JvdHRvbSBsZWZ0JywgJ2JvdHRvbSByaWdodCcsICd0b3AgcmlnaHQnLCAndG9wIGxlZnQnXSksXG5cdCAgdGhlbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydkYXJrJywgJ2xpZ2h0J10pLFxuXHQgIHRpbWU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMubnVtYmVyLFxuXHQgIHRyYW5zaXRpb246IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydzY2FsZScsICdmYWRlJ10pXG5cdH07XG5cblx0ZXhwb3J0c1snZGVmYXVsdCddID0gQWxlcnRDb250YWluZXI7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpXG5cbi8qKiovIH0sXG4vKiAxMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0Ly8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG5cdC8vXG5cdC8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG5cdC8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcblx0Ly8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG5cdC8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcblx0Ly8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuXHQvLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcblx0Ly8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cdC8vXG5cdC8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG5cdC8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXHQvL1xuXHQvLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG5cdC8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcblx0Ly8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuXHQvLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcblx0Ly8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG5cdC8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcblx0Ly8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuXHRmdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG5cdCAgdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuXHQgIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG5cdH1cblx0bW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cblx0Ly8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5cdEV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cblx0RXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuXHRFdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cblx0Ly8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG5cdC8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5cdEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cblx0Ly8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG5cdC8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuXHRFdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcblx0ICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuXHQgICAgdGhyb3cgVHlwZUVycm9yKCduIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXInKTtcblx0ICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuXHQgIHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcblx0ICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG5cdCAgaWYgKCF0aGlzLl9ldmVudHMpXG5cdCAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuXHQgIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cblx0ICBpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuXHQgICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcblx0ICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcblx0ICAgICAgZXIgPSBhcmd1bWVudHNbMV07XG5cdCAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdCAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG5cdCAgICAgIH1cblx0ICAgICAgdGhyb3cgVHlwZUVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LicpO1xuXHQgICAgfVxuXHQgIH1cblxuXHQgIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cblx0ICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG5cdCAgICByZXR1cm4gZmFsc2U7XG5cblx0ICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuXHQgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdCAgICAgIC8vIGZhc3QgY2FzZXNcblx0ICAgICAgY2FzZSAxOlxuXHQgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcblx0ICAgICAgICBicmVhaztcblx0ICAgICAgY2FzZSAyOlxuXHQgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuXHQgICAgICAgIGJyZWFrO1xuXHQgICAgICBjYXNlIDM6XG5cdCAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcblx0ICAgICAgICBicmVhaztcblx0ICAgICAgLy8gc2xvd2VyXG5cdCAgICAgIGRlZmF1bHQ6XG5cdCAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cdCAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcblx0ICAgIH1cblx0ICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG5cdCAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblx0ICAgIGxpc3RlbmVycyA9IGhhbmRsZXIuc2xpY2UoKTtcblx0ICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG5cdCAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG5cdCAgICAgIGxpc3RlbmVyc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcblx0ICB9XG5cblx0ICByZXR1cm4gdHJ1ZTtcblx0fTtcblxuXHRFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcblx0ICB2YXIgbTtcblxuXHQgIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG5cdCAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG5cdCAgaWYgKCF0aGlzLl9ldmVudHMpXG5cdCAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuXHQgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG5cdCAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuXHQgIGlmICh0aGlzLl9ldmVudHMubmV3TGlzdGVuZXIpXG5cdCAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcblx0ICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG5cdCAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cblx0ICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcblx0ICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuXHQgICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG5cdCAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcblx0ICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cblx0ICAgIHRoaXMuX2V2ZW50c1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcblx0ICBlbHNlXG5cdCAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cblx0ICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IFt0aGlzLl9ldmVudHNbdHlwZV0sIGxpc3RlbmVyXTtcblxuXHQgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG5cdCAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcblx0ICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5fbWF4TGlzdGVuZXJzKSkge1xuXHQgICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgbSA9IEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuXHQgICAgfVxuXG5cdCAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuXHQgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkID0gdHJ1ZTtcblx0ICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG5cdCAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG5cdCAgICAgICAgICAgICAgICAgICAgJ1VzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvIGluY3JlYXNlIGxpbWl0LicsXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG5cdCAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgIC8vIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTBcblx0ICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9XG5cblx0ICByZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuXHRFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuXHQgIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG5cdCAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG5cdCAgdmFyIGZpcmVkID0gZmFsc2U7XG5cblx0ICBmdW5jdGlvbiBnKCkge1xuXHQgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuXHQgICAgaWYgKCFmaXJlZCkge1xuXHQgICAgICBmaXJlZCA9IHRydWU7XG5cdCAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuXHQgIHRoaXMub24odHlwZSwgZyk7XG5cblx0ICByZXR1cm4gdGhpcztcblx0fTtcblxuXHQvLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuXHRFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcblx0ICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuXHQgIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG5cdCAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG5cdCAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcblx0ICAgIHJldHVybiB0aGlzO1xuXG5cdCAgbGlzdCA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblx0ICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcblx0ICBwb3NpdGlvbiA9IC0xO1xuXG5cdCAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8XG5cdCAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuXHQgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblx0ICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG5cdCAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cblx0ICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG5cdCAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSA+IDA7KSB7XG5cdCAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuXHQgICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG5cdCAgICAgICAgcG9zaXRpb24gPSBpO1xuXHQgICAgICAgIGJyZWFrO1xuXHQgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIGlmIChwb3NpdGlvbiA8IDApXG5cdCAgICAgIHJldHVybiB0aGlzO1xuXG5cdCAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcblx0ICAgICAgbGlzdC5sZW5ndGggPSAwO1xuXHQgICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuXHQgICAgfVxuXG5cdCAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuXHQgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuXHQgIH1cblxuXHQgIHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuXHQgIHZhciBrZXksIGxpc3RlbmVycztcblxuXHQgIGlmICghdGhpcy5fZXZlbnRzKVxuXHQgICAgcmV0dXJuIHRoaXM7XG5cblx0ICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG5cdCAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcblx0ICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuXHQgICAgICB0aGlzLl9ldmVudHMgPSB7fTtcblx0ICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcblx0ICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblx0ICAgIHJldHVybiB0aGlzO1xuXHQgIH1cblxuXHQgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuXHQgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG5cdCAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcblx0ICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG5cdCAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG5cdCAgICB9XG5cdCAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcblx0ICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXHQgICAgcmV0dXJuIHRoaXM7XG5cdCAgfVxuXG5cdCAgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG5cdCAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuXHQgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuXHQgIH0gZWxzZSBpZiAobGlzdGVuZXJzKSB7XG5cdCAgICAvLyBMSUZPIG9yZGVyXG5cdCAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcblx0ICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbbGlzdGVuZXJzLmxlbmd0aCAtIDFdKTtcblx0ICB9XG5cdCAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuXHQgIHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuXHQgIHZhciByZXQ7XG5cdCAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcblx0ICAgIHJldCA9IFtdO1xuXHQgIGVsc2UgaWYgKGlzRnVuY3Rpb24odGhpcy5fZXZlbnRzW3R5cGVdKSlcblx0ICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuXHQgIGVsc2Vcblx0ICAgIHJldCA9IHRoaXMuX2V2ZW50c1t0eXBlXS5zbGljZSgpO1xuXHQgIHJldHVybiByZXQ7XG5cdH07XG5cblx0RXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24odHlwZSkge1xuXHQgIGlmICh0aGlzLl9ldmVudHMpIHtcblx0ICAgIHZhciBldmxpc3RlbmVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG5cdCAgICBpZiAoaXNGdW5jdGlvbihldmxpc3RlbmVyKSlcblx0ICAgICAgcmV0dXJuIDE7XG5cdCAgICBlbHNlIGlmIChldmxpc3RlbmVyKVxuXHQgICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG5cdCAgfVxuXHQgIHJldHVybiAwO1xuXHR9O1xuXG5cdEV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuXHQgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG5cdH07XG5cblx0ZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcblx0ICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcblx0fVxuXG5cdGZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuXHQgIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcblx0fVxuXG5cdGZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuXHQgIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcblx0ICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG5cdH1cblxuXG4vKioqLyB9LFxuLyogMTQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNF9fO1xuXG4vKioqLyB9LFxuLyogMTUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cblx0dmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuXHR2YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeCwgX3gyLCBfeDMpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gsIHByb3BlcnR5ID0gX3gyLCByZWNlaXZlciA9IF94MzsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeCA9IHBhcmVudDsgX3gyID0gcHJvcGVydHk7IF94MyA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBkZXNjID0gcGFyZW50ID0gdW5kZWZpbmVkOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5cdGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cblx0dmFyIF9yZWFjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuXG5cdHZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5cdHZhciBfcmVhY3REb20gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcblxuXHR2YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxuXHR2YXIgX2NsYXNzbmFtZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcblxuXHR2YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cblx0dmFyIEFsZXJ0TWVzc2FnZSA9IChmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHQgIF9pbmhlcml0cyhBbGVydE1lc3NhZ2UsIF9SZWFjdCRDb21wb25lbnQpO1xuXG5cdCAgZnVuY3Rpb24gQWxlcnRNZXNzYWdlKHByb3BzKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWxlcnRNZXNzYWdlKTtcblxuXHQgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoQWxlcnRNZXNzYWdlLnByb3RvdHlwZSksICdjb25zdHJ1Y3RvcicsIHRoaXMpLmNhbGwodGhpcywgcHJvcHMpO1xuXHQgICAgdGhpcy5zdGF0ZSA9IHtcblx0ICAgICAgY2xvc2VCdXR0b25TdHlsZToge31cblx0ICAgIH07XG5cdCAgfVxuXG5cdCAgLyoqXHJcblx0ICAgKiBIYW5kbGUgdGhlIGNsb3NlIGJ1dHRvbiBjbGlja1xyXG5cdCAgICogQHJldHVybiB7dm9pZH0gXHJcblx0ICAgKi9cblxuXHQgIF9jcmVhdGVDbGFzcyhBbGVydE1lc3NhZ2UsIFt7XG5cdCAgICBrZXk6ICdfaGFuZGxlQ2xvc2VDbGljaycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUNsb3NlQ2xpY2soKSB7XG5cdCAgICAgIHRoaXMuX3JlbW92ZVNlbGYoKTtcblx0ICAgIH1cblxuXHQgICAgLyoqXHJcblx0ICAgICAqIEluY2x1ZGUgdGhlIGdpdmVuIGljb24gb3IgdXNlIHRoZSBkZWZhdWx0IG9uZVxyXG5cdCAgICAgKiBAcmV0dXJuIHtSZWFjdC5Db21wb25lbnR9XHJcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ19zaG93SWNvbicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gX3Nob3dJY29uKCkge1xuXHQgICAgICB2YXIgaWNvbiA9ICcnO1xuXHQgICAgICBpZiAodGhpcy5wcm9wcy5pY29uKSB7XG5cdCAgICAgICAgaWNvbiA9IHRoaXMucHJvcHMuaWNvbjtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICBpY29uID0gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiB0aGlzLnByb3BzLnR5cGUgKyAnLWljb24nIH0pO1xuXHQgICAgICB9XG5cblx0ICAgICAgcmV0dXJuIGljb247XG5cdCAgICB9XG5cblx0ICAgIC8qKlxyXG5cdCAgICAgKiBSZW1vdmUgdGhlIGFsZXJ0IGFmdGVyIHRoZSBnaXZlbiB0aW1lXHJcblx0ICAgICAqIEByZXR1cm4ge3ZvaWR9IFxyXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdfY291bnRkb3duJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfY291bnRkb3duKCkge1xuXHQgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG5cdCAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIF90aGlzLl9yZW1vdmVTZWxmKCk7XG5cdCAgICAgIH0sIHRoaXMucHJvcHMudGltZSk7XG5cdCAgICB9XG5cblx0ICAgIC8qKlxyXG5cdCAgICAgKiBFbWl0IGEgZXZlbnQgdG8gQWxlcnRDb250YWluZXIgcmVtb3ZlIHRoaXMgYWxlcnQgZnJvbSBwYWdlXHJcblx0ICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ19yZW1vdmVTZWxmJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlU2VsZigpIHtcblx0ICAgICAgcmVhY3RBbGVydEV2ZW50cy5lbWl0KCdBTEVSVC5SRU1PVkUnLCB0aGlzKTtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG5cdCAgICAgIHRoaXMuZG9tTm9kZSA9IF9yZWFjdERvbTJbJ2RlZmF1bHQnXS5maW5kRE9NTm9kZSh0aGlzKTtcblx0ICAgICAgdGhpcy5zZXRTdGF0ZSh7XG5cdCAgICAgICAgY2xvc2VCdXR0b25TdHlsZToge1xuXHQgICAgICAgICAgaGVpZ2h0OiB0aGlzLmRvbU5vZGUub2Zmc2V0SGVpZ2h0ICsgJ3B4Jyxcblx0ICAgICAgICAgIGxpbmVIZWlnaHQ6IHRoaXMuZG9tTm9kZS5vZmZzZXRIZWlnaHQgKyAncHgnLFxuXHQgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLnN0eWxlLmNsb3NlQnV0dG9uLmJnXG5cdCAgICAgICAgfVxuXHQgICAgICB9KTtcblxuXHQgICAgICBpZiAodGhpcy5wcm9wcy50aW1lID4gMCkge1xuXHQgICAgICAgIHRoaXMuX2NvdW50ZG93bigpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAncmVuZGVyJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdCAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcblx0ICAgICAgICAnZGl2Jyxcblx0ICAgICAgICB7IHN0eWxlOiB0aGlzLnByb3BzLnN0eWxlLmFsZXJ0LCBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lczJbJ2RlZmF1bHQnXSkoJ2FsZXJ0JywgdGhpcy5wcm9wcy50eXBlKSB9LFxuXHQgICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuXHQgICAgICAgICAgJ2RpdicsXG5cdCAgICAgICAgICB7IGNsYXNzTmFtZTogJ2NvbnRlbnQgaWNvbicgfSxcblx0ICAgICAgICAgIHRoaXMuX3Nob3dJY29uLmJpbmQodGhpcykoKVxuXHQgICAgICAgICksXG5cdCAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG5cdCAgICAgICAgICAnZGl2Jyxcblx0ICAgICAgICAgIHsgY2xhc3NOYW1lOiAnY29udGVudCBtZXNzYWdlJyB9LFxuXHQgICAgICAgICAgdGhpcy5wcm9wcy5tZXNzYWdlXG5cdCAgICAgICAgKSxcblx0ICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcblx0ICAgICAgICAgICdkaXYnLFxuXHQgICAgICAgICAgeyBvbkNsaWNrOiB0aGlzLl9oYW5kbGVDbG9zZUNsaWNrLmJpbmQodGhpcyksIHN0eWxlOiB0aGlzLnN0YXRlLmNsb3NlQnV0dG9uU3R5bGUsIGNsYXNzTmFtZTogJ2NvbnRlbnQgY2xvc2UnIH0sXG5cdCAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xvc2VJY29uQ2xhc3MgfSlcblx0ICAgICAgICApXG5cdCAgICAgICk7XG5cdCAgICB9XG5cdCAgfV0pO1xuXG5cdCAgcmV0dXJuIEFsZXJ0TWVzc2FnZTtcblx0fSkoX3JlYWN0MlsnZGVmYXVsdCddLkNvbXBvbmVudCk7XG5cblx0QWxlcnRNZXNzYWdlLmRlZmF1bHRQcm9wcyA9IHtcblx0ICBpY29uOiAnJyxcblx0ICBtZXNzYWdlOiAnJyxcblx0ICB0eXBlOiAnaW5mbydcblx0fTtcblxuXHRBbGVydE1lc3NhZ2UucHJvcFR5cGVzID0ge1xuXHQgIHR5cGU6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMub25lT2YoWydpbmZvJywgJ3N1Y2Nlc3MnLCAnZXJyb3InXSlcblx0fTtcblxuXHRleHBvcnRzWydkZWZhdWx0J10gPSBBbGVydE1lc3NhZ2U7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9LFxuLyogMTYgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNl9fO1xuXG4vKioqLyB9LFxuLyogMTcgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fLCBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsvKiFcblx0ICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cblx0ICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuXHQgIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcblx0Ki9cblx0LyogZ2xvYmFsIGRlZmluZSAqL1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdFx0J3VzZSBzdHJpY3QnO1xuXG5cdFx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdFx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHRcdH0gZWxzZSBpZiAodHJ1ZSkge1xuXHRcdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdFx0IShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW10sIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHRcdH0uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXyksIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHRcdH1cblx0fSgpKTtcblxuXG4vKioqLyB9XG4vKioqKioqLyBdKVxufSk7XG47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWFsZXJ0L2Rpc3QvYWxlcnQuanNcbi8vIG1vZHVsZSBpZCA9IDI5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9SZWFjdENTU1RyYW5zaXRpb25Hcm91cCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCcuL1JlYWN0Jyk7XG5cbnZhciBSZWFjdFRyYW5zaXRpb25Hcm91cCA9IHJlcXVpcmUoJy4vUmVhY3RUcmFuc2l0aW9uR3JvdXAnKTtcbnZhciBSZWFjdENTU1RyYW5zaXRpb25Hcm91cENoaWxkID0gcmVxdWlyZSgnLi9SZWFjdENTU1RyYW5zaXRpb25Hcm91cENoaWxkJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRyYW5zaXRpb25UaW1lb3V0UHJvcFZhbGlkYXRvcih0cmFuc2l0aW9uVHlwZSkge1xuICB2YXIgdGltZW91dFByb3BOYW1lID0gJ3RyYW5zaXRpb24nICsgdHJhbnNpdGlvblR5cGUgKyAnVGltZW91dCc7XG4gIHZhciBlbmFibGVkUHJvcE5hbWUgPSAndHJhbnNpdGlvbicgKyB0cmFuc2l0aW9uVHlwZTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgLy8gSWYgdGhlIHRyYW5zaXRpb24gaXMgZW5hYmxlZFxuICAgIGlmIChwcm9wc1tlbmFibGVkUHJvcE5hbWVdKSB7XG4gICAgICAvLyBJZiBubyB0aW1lb3V0IGR1cmF0aW9uIGlzIHByb3ZpZGVkXG4gICAgICBpZiAocHJvcHNbdGltZW91dFByb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IodGltZW91dFByb3BOYW1lICsgJyB3YXNuXFwndCBzdXBwbGllZCB0byBSZWFjdENTU1RyYW5zaXRpb25Hcm91cDogJyArICd0aGlzIGNhbiBjYXVzZSB1bnJlbGlhYmxlIGFuaW1hdGlvbnMgYW5kIHdvblxcJ3QgYmUgc3VwcG9ydGVkIGluICcgKyAnYSBmdXR1cmUgdmVyc2lvbiBvZiBSZWFjdC4gU2VlICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1hbmltYXRpb24tdHJhbnNpdGlvbi1ncm91cC10aW1lb3V0IGZvciBtb3JlICcgKyAnaW5mb3JtYXRpb24uJyk7XG5cbiAgICAgICAgLy8gSWYgdGhlIGR1cmF0aW9uIGlzbid0IGEgbnVtYmVyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wc1t0aW1lb3V0UHJvcE5hbWVdICE9PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKHRpbWVvdXRQcm9wTmFtZSArICcgbXVzdCBiZSBhIG51bWJlciAoaW4gbWlsbGlzZWNvbmRzKScpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiBBbiBlYXN5IHdheSB0byBwZXJmb3JtIENTUyB0cmFuc2l0aW9ucyBhbmQgYW5pbWF0aW9ucyB3aGVuIGEgUmVhY3QgY29tcG9uZW50XG4gKiBlbnRlcnMgb3IgbGVhdmVzIHRoZSBET00uXG4gKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9hbmltYXRpb24uaHRtbCNoaWdoLWxldmVsLWFwaS1yZWFjdGNzc3RyYW5zaXRpb25ncm91cFxuICovXG5cbnZhciBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSZWFjdENTU1RyYW5zaXRpb25Hcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuX3dyYXBDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgLy8gV2UgbmVlZCB0byBwcm92aWRlIHRoaXMgY2hpbGRGYWN0b3J5IHNvIHRoYXRcbiAgICAgIC8vIFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQgY2FuIHJlY2VpdmUgdXBkYXRlcyB0byBuYW1lLCBlbnRlciwgYW5kXG4gICAgICAvLyBsZWF2ZSB3aGlsZSBpdCBpcyBsZWF2aW5nLlxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCwge1xuICAgICAgICBuYW1lOiBfdGhpcy5wcm9wcy50cmFuc2l0aW9uTmFtZSxcbiAgICAgICAgYXBwZWFyOiBfdGhpcy5wcm9wcy50cmFuc2l0aW9uQXBwZWFyLFxuICAgICAgICBlbnRlcjogX3RoaXMucHJvcHMudHJhbnNpdGlvbkVudGVyLFxuICAgICAgICBsZWF2ZTogX3RoaXMucHJvcHMudHJhbnNpdGlvbkxlYXZlLFxuICAgICAgICBhcHBlYXJUaW1lb3V0OiBfdGhpcy5wcm9wcy50cmFuc2l0aW9uQXBwZWFyVGltZW91dCxcbiAgICAgICAgZW50ZXJUaW1lb3V0OiBfdGhpcy5wcm9wcy50cmFuc2l0aW9uRW50ZXJUaW1lb3V0LFxuICAgICAgICBsZWF2ZVRpbWVvdXQ6IF90aGlzLnByb3BzLnRyYW5zaXRpb25MZWF2ZVRpbWVvdXRcbiAgICAgIH0sIGNoaWxkKTtcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RUcmFuc2l0aW9uR3JvdXAsIF9hc3NpZ24oe30sIHRoaXMucHJvcHMsIHsgY2hpbGRGYWN0b3J5OiB0aGlzLl93cmFwQ2hpbGQgfSkpO1xuICB9O1xuXG4gIHJldHVybiBSZWFjdENTU1RyYW5zaXRpb25Hcm91cDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAuZGlzcGxheU5hbWUgPSAnUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAnO1xuUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAucHJvcFR5cGVzID0ge1xuICB0cmFuc2l0aW9uTmFtZTogUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZC5wcm9wVHlwZXMubmFtZSxcblxuICB0cmFuc2l0aW9uQXBwZWFyOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgdHJhbnNpdGlvbkVudGVyOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgdHJhbnNpdGlvbkxlYXZlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgdHJhbnNpdGlvbkFwcGVhclRpbWVvdXQ6IGNyZWF0ZVRyYW5zaXRpb25UaW1lb3V0UHJvcFZhbGlkYXRvcignQXBwZWFyJyksXG4gIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6IGNyZWF0ZVRyYW5zaXRpb25UaW1lb3V0UHJvcFZhbGlkYXRvcignRW50ZXInKSxcbiAgdHJhbnNpdGlvbkxlYXZlVGltZW91dDogY3JlYXRlVHJhbnNpdGlvblRpbWVvdXRQcm9wVmFsaWRhdG9yKCdMZWF2ZScpXG59O1xuUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICB0cmFuc2l0aW9uQXBwZWFyOiBmYWxzZSxcbiAgdHJhbnNpdGlvbkVudGVyOiB0cnVlLFxuICB0cmFuc2l0aW9uTGVhdmU6IHRydWVcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENTU1RyYW5zaXRpb25Hcm91cDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QvbGliL1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZSgnLi9SZWFjdCcpO1xudmFyIFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZyA9IHJlcXVpcmUoJy4vUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nJyk7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIEEgYmFzaXMgZm9yIGFuaW1hdGlvbnMuIFdoZW4gY2hpbGRyZW4gYXJlIGRlY2xhcmF0aXZlbHkgYWRkZWQgb3IgcmVtb3ZlZCxcbiAqIHNwZWNpYWwgbGlmZWN5Y2xlIGhvb2tzIGFyZSBjYWxsZWQuXG4gKiBTZWUgaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9hbmltYXRpb24uaHRtbCNsb3ctbGV2ZWwtYXBpLXJlYWN0dHJhbnNpdGlvbmdyb3VwXG4gKi9cblxudmFyIFJlYWN0VHJhbnNpdGlvbkdyb3VwID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFJlYWN0VHJhbnNpdGlvbkdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSZWFjdFRyYW5zaXRpb25Hcm91cCgpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlYWN0VHJhbnNpdGlvbkdyb3VwKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIFRPRE86IGNhbiB3ZSBnZXQgdXNlZnVsIGRlYnVnIGluZm9ybWF0aW9uIHRvIHNob3cgYXQgdGhpcyBwb2ludD9cbiAgICAgIGNoaWxkcmVuOiBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKF90aGlzLnByb3BzLmNoaWxkcmVuKVxuICAgIH0sIF90aGlzLnBlcmZvcm1BcHBlYXIgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldID0gdHJ1ZTtcblxuICAgICAgdmFyIGNvbXBvbmVudCA9IF90aGlzLnJlZnNba2V5XTtcblxuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsQXBwZWFyKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsQXBwZWFyKF90aGlzLl9oYW5kbGVEb25lQXBwZWFyaW5nLmJpbmQoX3RoaXMsIGtleSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuX2hhbmRsZURvbmVBcHBlYXJpbmcoa2V5KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5faGFuZGxlRG9uZUFwcGVhcmluZyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBjb21wb25lbnQgPSBfdGhpcy5yZWZzW2tleV07XG4gICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudERpZEFwcGVhcikge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkQXBwZWFyKCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldO1xuXG4gICAgICB2YXIgY3VycmVudENoaWxkTWFwcGluZyA9IFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcoX3RoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICBpZiAoIWN1cnJlbnRDaGlsZE1hcHBpbmcgfHwgIWN1cnJlbnRDaGlsZE1hcHBpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAvLyBUaGlzIHdhcyByZW1vdmVkIGJlZm9yZSBpdCBoYWQgZnVsbHkgYXBwZWFyZWQuIFJlbW92ZSBpdC5cbiAgICAgICAgX3RoaXMucGVyZm9ybUxlYXZlKGtleSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMucGVyZm9ybUVudGVyID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgX3RoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XSA9IHRydWU7XG5cbiAgICAgIHZhciBjb21wb25lbnQgPSBfdGhpcy5yZWZzW2tleV07XG5cbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbEVudGVyKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsRW50ZXIoX3RoaXMuX2hhbmRsZURvbmVFbnRlcmluZy5iaW5kKF90aGlzLCBrZXkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLl9oYW5kbGVEb25lRW50ZXJpbmcoa2V5KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5faGFuZGxlRG9uZUVudGVyaW5nID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIGNvbXBvbmVudCA9IF90aGlzLnJlZnNba2V5XTtcbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkRW50ZXIpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudERpZEVudGVyKCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldO1xuXG4gICAgICB2YXIgY3VycmVudENoaWxkTWFwcGluZyA9IFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcoX3RoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICBpZiAoIWN1cnJlbnRDaGlsZE1hcHBpbmcgfHwgIWN1cnJlbnRDaGlsZE1hcHBpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAvLyBUaGlzIHdhcyByZW1vdmVkIGJlZm9yZSBpdCBoYWQgZnVsbHkgZW50ZXJlZC4gUmVtb3ZlIGl0LlxuICAgICAgICBfdGhpcy5wZXJmb3JtTGVhdmUoa2V5KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5wZXJmb3JtTGVhdmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBfdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldID0gdHJ1ZTtcblxuICAgICAgdmFyIGNvbXBvbmVudCA9IF90aGlzLnJlZnNba2V5XTtcbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbExlYXZlKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsTGVhdmUoX3RoaXMuX2hhbmRsZURvbmVMZWF2aW5nLmJpbmQoX3RoaXMsIGtleSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgc29tZXdoYXQgZGFuZ2Vyb3VzIGIvYyBpdCBjYWxscyBzZXRTdGF0ZSgpXG4gICAgICAgIC8vIGFnYWluLCBlZmZlY3RpdmVseSBtdXRhdGluZyB0aGUgY29tcG9uZW50IGJlZm9yZSBhbGwgdGhlIHdvcmtcbiAgICAgICAgLy8gaXMgZG9uZS5cbiAgICAgICAgX3RoaXMuX2hhbmRsZURvbmVMZWF2aW5nKGtleSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuX2hhbmRsZURvbmVMZWF2aW5nID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIGNvbXBvbmVudCA9IF90aGlzLnJlZnNba2V5XTtcblxuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnREaWRMZWF2ZSkge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkTGVhdmUoKTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIF90aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzW2tleV07XG5cbiAgICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZyhfdGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIGlmIChjdXJyZW50Q2hpbGRNYXBwaW5nICYmIGN1cnJlbnRDaGlsZE1hcHBpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAvLyBUaGlzIGVudGVyZWQgYWdhaW4gYmVmb3JlIGl0IGZ1bGx5IGxlZnQuIEFkZCBpdCBhZ2Fpbi5cbiAgICAgICAgX3RoaXMucGVyZm9ybUVudGVyKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICB2YXIgbmV3Q2hpbGRyZW4gPSBfYXNzaWduKHt9LCBzdGF0ZS5jaGlsZHJlbik7XG4gICAgICAgICAgZGVsZXRlIG5ld0NoaWxkcmVuW2tleV07XG4gICAgICAgICAgcmV0dXJuIHsgY2hpbGRyZW46IG5ld0NoaWxkcmVuIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgUmVhY3RUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmN1cnJlbnRseVRyYW5zaXRpb25pbmdLZXlzID0ge307XG4gICAgdGhpcy5rZXlzVG9FbnRlciA9IFtdO1xuICAgIHRoaXMua2V5c1RvTGVhdmUgPSBbXTtcbiAgfTtcblxuICBSZWFjdFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgaW5pdGlhbENoaWxkTWFwcGluZyA9IHRoaXMuc3RhdGUuY2hpbGRyZW47XG4gICAgZm9yICh2YXIga2V5IGluIGluaXRpYWxDaGlsZE1hcHBpbmcpIHtcbiAgICAgIGlmIChpbml0aWFsQ2hpbGRNYXBwaW5nW2tleV0pIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtQXBwZWFyKGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFJlYWN0VHJhbnNpdGlvbkdyb3VwLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB2YXIgbmV4dENoaWxkTWFwcGluZyA9IFJlYWN0VHJhbnNpdGlvbkNoaWxkTWFwcGluZy5nZXRDaGlsZE1hcHBpbmcobmV4dFByb3BzLmNoaWxkcmVuKTtcbiAgICB2YXIgcHJldkNoaWxkTWFwcGluZyA9IHRoaXMuc3RhdGUuY2hpbGRyZW47XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNoaWxkcmVuOiBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcubWVyZ2VDaGlsZE1hcHBpbmdzKHByZXZDaGlsZE1hcHBpbmcsIG5leHRDaGlsZE1hcHBpbmcpXG4gICAgfSk7XG5cbiAgICB2YXIga2V5O1xuXG4gICAgZm9yIChrZXkgaW4gbmV4dENoaWxkTWFwcGluZykge1xuICAgICAgdmFyIGhhc1ByZXYgPSBwcmV2Q2hpbGRNYXBwaW5nICYmIHByZXZDaGlsZE1hcHBpbmcuaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgICAgIGlmIChuZXh0Q2hpbGRNYXBwaW5nW2tleV0gJiYgIWhhc1ByZXYgJiYgIXRoaXMuY3VycmVudGx5VHJhbnNpdGlvbmluZ0tleXNba2V5XSkge1xuICAgICAgICB0aGlzLmtleXNUb0VudGVyLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGtleSBpbiBwcmV2Q2hpbGRNYXBwaW5nKSB7XG4gICAgICB2YXIgaGFzTmV4dCA9IG5leHRDaGlsZE1hcHBpbmcgJiYgbmV4dENoaWxkTWFwcGluZy5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICAgICAgaWYgKHByZXZDaGlsZE1hcHBpbmdba2V5XSAmJiAhaGFzTmV4dCAmJiAhdGhpcy5jdXJyZW50bHlUcmFuc2l0aW9uaW5nS2V5c1trZXldKSB7XG4gICAgICAgIHRoaXMua2V5c1RvTGVhdmUucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHdlIHdhbnQgdG8gc29tZWRheSBjaGVjayBmb3IgcmVvcmRlcmluZywgd2UgY291bGQgZG8gaXQgaGVyZS5cbiAgfTtcblxuICBSZWFjdFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciBrZXlzVG9FbnRlciA9IHRoaXMua2V5c1RvRW50ZXI7XG4gICAgdGhpcy5rZXlzVG9FbnRlciA9IFtdO1xuICAgIGtleXNUb0VudGVyLmZvckVhY2godGhpcy5wZXJmb3JtRW50ZXIpO1xuXG4gICAgdmFyIGtleXNUb0xlYXZlID0gdGhpcy5rZXlzVG9MZWF2ZTtcbiAgICB0aGlzLmtleXNUb0xlYXZlID0gW107XG4gICAga2V5c1RvTGVhdmUuZm9yRWFjaCh0aGlzLnBlcmZvcm1MZWF2ZSk7XG4gIH07XG5cbiAgUmVhY3RUcmFuc2l0aW9uR3JvdXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAvLyBUT0RPOiB3ZSBjb3VsZCBnZXQgcmlkIG9mIHRoZSBuZWVkIGZvciB0aGUgd3JhcHBlciBub2RlXG4gICAgLy8gYnkgY2xvbmluZyBhIHNpbmdsZSBjaGlsZFxuICAgIHZhciBjaGlsZHJlblRvUmVuZGVyID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuc3RhdGUuY2hpbGRyZW4pIHtcbiAgICAgIHZhciBjaGlsZCA9IHRoaXMuc3RhdGUuY2hpbGRyZW5ba2V5XTtcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAvLyBZb3UgbWF5IG5lZWQgdG8gYXBwbHkgcmVhY3RpdmUgdXBkYXRlcyB0byBhIGNoaWxkIGFzIGl0IGlzIGxlYXZpbmcuXG4gICAgICAgIC8vIFRoZSBub3JtYWwgUmVhY3Qgd2F5IHRvIGRvIGl0IHdvbid0IHdvcmsgc2luY2UgdGhlIGNoaWxkIHdpbGwgaGF2ZVxuICAgICAgICAvLyBhbHJlYWR5IGJlZW4gcmVtb3ZlZC4gSW4gY2FzZSB5b3UgbmVlZCB0aGlzIGJlaGF2aW9yIHlvdSBjYW4gcHJvdmlkZVxuICAgICAgICAvLyBhIGNoaWxkRmFjdG9yeSBmdW5jdGlvbiB0byB3cmFwIGV2ZXJ5IGNoaWxkLCBldmVuIHRoZSBvbmVzIHRoYXQgYXJlXG4gICAgICAgIC8vIGxlYXZpbmcuXG4gICAgICAgIGNoaWxkcmVuVG9SZW5kZXIucHVzaChSZWFjdC5jbG9uZUVsZW1lbnQodGhpcy5wcm9wcy5jaGlsZEZhY3RvcnkoY2hpbGQpLCB7IHJlZjoga2V5LCBrZXk6IGtleSB9KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRG8gbm90IGZvcndhcmQgUmVhY3RUcmFuc2l0aW9uR3JvdXAgcHJvcHMgdG8gcHJpbWl0aXZlIERPTSBub2Rlc1xuICAgIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIHRoaXMucHJvcHMpO1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uTGVhdmU7XG4gICAgZGVsZXRlIHByb3BzLnRyYW5zaXRpb25OYW1lO1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uQXBwZWFyO1xuICAgIGRlbGV0ZSBwcm9wcy50cmFuc2l0aW9uRW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLmNoaWxkRmFjdG9yeTtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbkxlYXZlVGltZW91dDtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbkVudGVyVGltZW91dDtcbiAgICBkZWxldGUgcHJvcHMudHJhbnNpdGlvbkFwcGVhclRpbWVvdXQ7XG4gICAgZGVsZXRlIHByb3BzLmNvbXBvbmVudDtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMuY29tcG9uZW50LCBwcm9wcywgY2hpbGRyZW5Ub1JlbmRlcik7XG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0VHJhbnNpdGlvbkdyb3VwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5SZWFjdFRyYW5zaXRpb25Hcm91cC5kaXNwbGF5TmFtZSA9ICdSZWFjdFRyYW5zaXRpb25Hcm91cCc7XG5SZWFjdFRyYW5zaXRpb25Hcm91cC5wcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudDogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgY2hpbGRGYWN0b3J5OiBSZWFjdC5Qcm9wVHlwZXMuZnVuY1xufTtcblJlYWN0VHJhbnNpdGlvbkdyb3VwLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50OiAnc3BhbicsXG4gIGNoaWxkRmFjdG9yeTogZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RUcmFuc2l0aW9uR3JvdXA7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0L2xpYi9SZWFjdFRyYW5zaXRpb25Hcm91cC5qc1xuLy8gbW9kdWxlIGlkID0gMjk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBmbGF0dGVuQ2hpbGRyZW4gPSByZXF1aXJlKCcuL2ZsYXR0ZW5DaGlsZHJlbicpO1xuXG52YXIgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nID0ge1xuICAvKipcbiAgICogR2l2ZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gLCByZXR1cm4gYW4gb2JqZWN0IG1hcHBpbmcga2V5IHRvIGNoaWxkLiBKdXN0XG4gICAqIHNpbXBsZSBzeW50YWN0aWMgc3VnYXIgYXJvdW5kIGZsYXR0ZW5DaGlsZHJlbigpLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGNoaWxkcmVuIGB0aGlzLnByb3BzLmNoaWxkcmVuYFxuICAgKiBAcGFyYW0ge251bWJlcj19IHNlbGZEZWJ1Z0lEIE9wdGlvbmFsIGRlYnVnSUQgb2YgdGhlIGN1cnJlbnQgaW50ZXJuYWwgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge29iamVjdH0gTWFwcGluZyBvZiBrZXkgdG8gY2hpbGRcbiAgICovXG4gIGdldENoaWxkTWFwcGluZzogZnVuY3Rpb24gKGNoaWxkcmVuLCBzZWxmRGVidWdJRCkge1xuICAgIGlmICghY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIGZsYXR0ZW5DaGlsZHJlbihjaGlsZHJlbiwgc2VsZkRlYnVnSUQpO1xuICAgIH1cblxuICAgIHJldHVybiBmbGF0dGVuQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBXaGVuIHlvdSdyZSBhZGRpbmcgb3IgcmVtb3ZpbmcgY2hpbGRyZW4gc29tZSBtYXkgYmUgYWRkZWQgb3IgcmVtb3ZlZCBpbiB0aGVcbiAgICogc2FtZSByZW5kZXIgcGFzcy4gV2Ugd2FudCB0byBzaG93ICpib3RoKiBzaW5jZSB3ZSB3YW50IHRvIHNpbXVsdGFuZW91c2x5XG4gICAqIGFuaW1hdGUgZWxlbWVudHMgaW4gYW5kIG91dC4gVGhpcyBmdW5jdGlvbiB0YWtlcyBhIHByZXZpb3VzIHNldCBvZiBrZXlzXG4gICAqIGFuZCBhIG5ldyBzZXQgb2Yga2V5cyBhbmQgbWVyZ2VzIHRoZW0gd2l0aCBpdHMgYmVzdCBndWVzcyBvZiB0aGUgY29ycmVjdFxuICAgKiBvcmRlcmluZy4gSW4gdGhlIGZ1dHVyZSB3ZSBtYXkgZXhwb3NlIHNvbWUgb2YgdGhlIHV0aWxpdGllcyBpblxuICAgKiBSZWFjdE11bHRpQ2hpbGQgdG8gbWFrZSB0aGlzIGVhc3ksIGJ1dCBmb3Igbm93IFJlYWN0IGl0c2VsZiBkb2VzIG5vdFxuICAgKiBkaXJlY3RseSBoYXZlIHRoaXMgY29uY2VwdCBvZiB0aGUgdW5pb24gb2YgcHJldkNoaWxkcmVuIGFuZCBuZXh0Q2hpbGRyZW5cbiAgICogc28gd2UgaW1wbGVtZW50IGl0IGhlcmUuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwcmV2IHByZXYgY2hpbGRyZW4gYXMgcmV0dXJuZWQgZnJvbVxuICAgKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAgICogQHBhcmFtIHtvYmplY3R9IG5leHQgbmV4dCBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gICAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IGEga2V5IHNldCB0aGF0IGNvbnRhaW5zIGFsbCBrZXlzIGluIGBwcmV2YCBhbmQgYWxsIGtleXNcbiAgICogaW4gYG5leHRgIGluIGEgcmVhc29uYWJsZSBvcmRlci5cbiAgICovXG4gIG1lcmdlQ2hpbGRNYXBwaW5nczogZnVuY3Rpb24gKHByZXYsIG5leHQpIHtcbiAgICBwcmV2ID0gcHJldiB8fCB7fTtcbiAgICBuZXh0ID0gbmV4dCB8fCB7fTtcblxuICAgIGZ1bmN0aW9uIGdldFZhbHVlRm9yS2V5KGtleSkge1xuICAgICAgaWYgKG5leHQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICByZXR1cm4gbmV4dFtrZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHByZXZba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cbiAgICAvLyB0aGUgY29tYmluZWQgbGlzdFxuICAgIHZhciBuZXh0S2V5c1BlbmRpbmcgPSB7fTtcblxuICAgIHZhciBwZW5kaW5nS2V5cyA9IFtdO1xuICAgIGZvciAodmFyIHByZXZLZXkgaW4gcHJldikge1xuICAgICAgaWYgKG5leHQuaGFzT3duUHJvcGVydHkocHJldktleSkpIHtcbiAgICAgICAgaWYgKHBlbmRpbmdLZXlzLmxlbmd0aCkge1xuICAgICAgICAgIG5leHRLZXlzUGVuZGluZ1twcmV2S2V5XSA9IHBlbmRpbmdLZXlzO1xuICAgICAgICAgIHBlbmRpbmdLZXlzID0gW107XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlbmRpbmdLZXlzLnB1c2gocHJldktleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGk7XG4gICAgdmFyIGNoaWxkTWFwcGluZyA9IHt9O1xuICAgIGZvciAodmFyIG5leHRLZXkgaW4gbmV4dCkge1xuICAgICAgaWYgKG5leHRLZXlzUGVuZGluZy5oYXNPd25Qcm9wZXJ0eShuZXh0S2V5KSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbmV4dEtleXNQZW5kaW5nW25leHRLZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHBlbmRpbmdOZXh0S2V5ID0gbmV4dEtleXNQZW5kaW5nW25leHRLZXldW2ldO1xuICAgICAgICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ05leHRLZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjaGlsZE1hcHBpbmdbbmV4dEtleV0gPSBnZXRWYWx1ZUZvcktleShuZXh0S2V5KTtcbiAgICB9XG5cbiAgICAvLyBGaW5hbGx5LCBhZGQgdGhlIGtleXMgd2hpY2ggZGlkbid0IGFwcGVhciBiZWZvcmUgYW55IGtleSBpbiBgbmV4dGBcbiAgICBmb3IgKGkgPSAwOyBpIDwgcGVuZGluZ0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkTWFwcGluZ1twZW5kaW5nS2V5c1tpXV0gPSBnZXRWYWx1ZUZvcktleShwZW5kaW5nS2V5c1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkTWFwcGluZztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0L2xpYi9SZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDI5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBLZXlFc2NhcGVVdGlscyA9IHJlcXVpcmUoJy4vS2V5RXNjYXBlVXRpbHMnKTtcbnZhciB0cmF2ZXJzZUFsbENoaWxkcmVuID0gcmVxdWlyZSgnLi90cmF2ZXJzZUFsbENoaWxkcmVuJyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxudmFyIFJlYWN0Q29tcG9uZW50VHJlZUhvb2s7XG5cbmlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0Jykge1xuICAvLyBUZW1wb3JhcnkgaGFjay5cbiAgLy8gSW5saW5lIHJlcXVpcmVzIGRvbid0IHdvcmsgd2VsbCB3aXRoIEplc3Q6XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvNzI0MFxuICAvLyBSZW1vdmUgdGhlIGlubGluZSByZXF1aXJlcyB3aGVuIHdlIGRvbid0IG5lZWQgdGhlbSBhbnltb3JlOlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC83MTc4XG4gIFJlYWN0Q29tcG9uZW50VHJlZUhvb2sgPSByZXF1aXJlKCcuL1JlYWN0Q29tcG9uZW50VHJlZUhvb2snKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSB0cmF2ZXJzZUNvbnRleHQgQ29udGV4dCBwYXNzZWQgdGhyb3VnaCB0cmF2ZXJzYWwuXG4gKiBAcGFyYW0gez9SZWFjdENvbXBvbmVudH0gY2hpbGQgUmVhY3QgY2hpbGQgY29tcG9uZW50LlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lIFN0cmluZyBuYW1lIG9mIGtleSBwYXRoIHRvIGNoaWxkLlxuICogQHBhcmFtIHtudW1iZXI9fSBzZWxmRGVidWdJRCBPcHRpb25hbCBkZWJ1Z0lEIG9mIHRoZSBjdXJyZW50IGludGVybmFsIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBmbGF0dGVuU2luZ2xlQ2hpbGRJbnRvQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkLCBuYW1lLCBzZWxmRGVidWdJRCkge1xuICAvLyBXZSBmb3VuZCBhIGNvbXBvbmVudCBpbnN0YW5jZS5cbiAgaWYgKHRyYXZlcnNlQ29udGV4dCAmJiB0eXBlb2YgdHJhdmVyc2VDb250ZXh0ID09PSAnb2JqZWN0Jykge1xuICAgIHZhciByZXN1bHQgPSB0cmF2ZXJzZUNvbnRleHQ7XG4gICAgdmFyIGtleVVuaXF1ZSA9IHJlc3VsdFtuYW1lXSA9PT0gdW5kZWZpbmVkO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIVJlYWN0Q29tcG9uZW50VHJlZUhvb2spIHtcbiAgICAgICAgUmVhY3RDb21wb25lbnRUcmVlSG9vayA9IHJlcXVpcmUoJy4vUmVhY3RDb21wb25lbnRUcmVlSG9vaycpO1xuICAgICAgfVxuICAgICAgaWYgKCFrZXlVbmlxdWUpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcoZmFsc2UsICdmbGF0dGVuQ2hpbGRyZW4oLi4uKTogRW5jb3VudGVyZWQgdHdvIGNoaWxkcmVuIHdpdGggdGhlIHNhbWUga2V5LCAnICsgJ2Alc2AuIENoaWxkIGtleXMgbXVzdCBiZSB1bmlxdWU7IHdoZW4gdHdvIGNoaWxkcmVuIHNoYXJlIGEga2V5LCBvbmx5ICcgKyAndGhlIGZpcnN0IGNoaWxkIHdpbGwgYmUgdXNlZC4lcycsIEtleUVzY2FwZVV0aWxzLnVuZXNjYXBlKG5hbWUpLCBSZWFjdENvbXBvbmVudFRyZWVIb29rLmdldFN0YWNrQWRkZW5kdW1CeUlEKHNlbGZEZWJ1Z0lEKSkgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChrZXlVbmlxdWUgJiYgY2hpbGQgIT0gbnVsbCkge1xuICAgICAgcmVzdWx0W25hbWVdID0gY2hpbGQ7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRmxhdHRlbnMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLiBBbnkgbnVsbFxuICogY2hpbGRyZW4gd2lsbCBub3QgYmUgaW5jbHVkZWQgaW4gdGhlIHJlc3VsdGluZyBvYmplY3QuXG4gKiBAcmV0dXJuIHshb2JqZWN0fSBmbGF0dGVuZWQgY2hpbGRyZW4ga2V5ZWQgYnkgbmFtZS5cbiAqL1xuZnVuY3Rpb24gZmxhdHRlbkNoaWxkcmVuKGNoaWxkcmVuLCBzZWxmRGVidWdJRCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgcmVzdWx0ID0ge307XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAodHJhdmVyc2VDb250ZXh0LCBjaGlsZCwgbmFtZSkge1xuICAgICAgcmV0dXJuIGZsYXR0ZW5TaW5nbGVDaGlsZEludG9Db250ZXh0KHRyYXZlcnNlQ29udGV4dCwgY2hpbGQsIG5hbWUsIHNlbGZEZWJ1Z0lEKTtcbiAgICB9LCByZXN1bHQpO1xuICB9IGVsc2Uge1xuICAgIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZsYXR0ZW5TaW5nbGVDaGlsZEludG9Db250ZXh0LCByZXN1bHQpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmxhdHRlbkNoaWxkcmVuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC9saWIvZmxhdHRlbkNoaWxkcmVuLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgnLi9SZWFjdCcpO1xudmFyIFJlYWN0QWRkb25zRE9NRGVwZW5kZW5jaWVzID0gcmVxdWlyZSgnLi9SZWFjdEFkZG9uc0RPTURlcGVuZGVuY2llcycpO1xuXG52YXIgQ1NTQ29yZSA9IHJlcXVpcmUoJ2ZianMvbGliL0NTU0NvcmUnKTtcbnZhciBSZWFjdFRyYW5zaXRpb25FdmVudHMgPSByZXF1aXJlKCcuL1JlYWN0VHJhbnNpdGlvbkV2ZW50cycpO1xuXG52YXIgb25seUNoaWxkID0gcmVxdWlyZSgnLi9vbmx5Q2hpbGQnKTtcblxudmFyIFRJQ0sgPSAxNztcblxudmFyIFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgbmFtZTogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbUmVhY3QuUHJvcFR5cGVzLnN0cmluZywgUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGVudGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgbGVhdmU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBhY3RpdmU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgICB9KSwgUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGVudGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZW50ZXJBY3RpdmU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBsZWF2ZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGxlYXZlQWN0aXZlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgYXBwZWFyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgYXBwZWFyQWN0aXZlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gICAgfSldKS5pc1JlcXVpcmVkLFxuXG4gICAgLy8gT25jZSB3ZSByZXF1aXJlIHRpbWVvdXRzIHRvIGJlIHNwZWNpZmllZCwgd2UgY2FuIHJlbW92ZSB0aGVcbiAgICAvLyBib29sZWFuIGZsYWdzIChhcHBlYXIgZXRjLikgYW5kIGp1c3QgYWNjZXB0IGEgbnVtYmVyXG4gICAgLy8gb3IgYSBib29sIGZvciB0aGUgdGltZW91dCBmbGFncyAoYXBwZWFyVGltZW91dCBldGMuKVxuICAgIGFwcGVhcjogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgZW50ZXI6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGxlYXZlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhcHBlYXJUaW1lb3V0OiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxuICAgIGVudGVyVGltZW91dDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgICBsZWF2ZVRpbWVvdXQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXJcbiAgfSxcblxuICB0cmFuc2l0aW9uOiBmdW5jdGlvbiAoYW5pbWF0aW9uVHlwZSwgZmluaXNoQ2FsbGJhY2ssIHVzZXJTcGVjaWZpZWREZWxheSkge1xuICAgIHZhciBub2RlID0gUmVhY3RBZGRvbnNET01EZXBlbmRlbmNpZXMuZ2V0UmVhY3RET00oKS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIGlmICghbm9kZSkge1xuICAgICAgaWYgKGZpbmlzaENhbGxiYWNrKSB7XG4gICAgICAgIGZpbmlzaENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMucHJvcHMubmFtZVthbmltYXRpb25UeXBlXSB8fCB0aGlzLnByb3BzLm5hbWUgKyAnLScgKyBhbmltYXRpb25UeXBlO1xuICAgIHZhciBhY3RpdmVDbGFzc05hbWUgPSB0aGlzLnByb3BzLm5hbWVbYW5pbWF0aW9uVHlwZSArICdBY3RpdmUnXSB8fCBjbGFzc05hbWUgKyAnLWFjdGl2ZSc7XG4gICAgdmFyIHRpbWVvdXQgPSBudWxsO1xuXG4gICAgdmFyIGVuZExpc3RlbmVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG4gICAgICBDU1NDb3JlLnJlbW92ZUNsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XG4gICAgICBDU1NDb3JlLnJlbW92ZUNsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzTmFtZSk7XG5cbiAgICAgIFJlYWN0VHJhbnNpdGlvbkV2ZW50cy5yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGVuZExpc3RlbmVyKTtcblxuICAgICAgLy8gVXN1YWxseSB0aGlzIG9wdGlvbmFsIGNhbGxiYWNrIGlzIHVzZWQgZm9yIGluZm9ybWluZyBhbiBvd25lciBvZlxuICAgICAgLy8gYSBsZWF2ZSBhbmltYXRpb24gYW5kIHRlbGxpbmcgaXQgdG8gcmVtb3ZlIHRoZSBjaGlsZC5cbiAgICAgIGlmIChmaW5pc2hDYWxsYmFjaykge1xuICAgICAgICBmaW5pc2hDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBDU1NDb3JlLmFkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XG5cbiAgICAvLyBOZWVkIHRvIGRvIHRoaXMgdG8gYWN0dWFsbHkgdHJpZ2dlciBhIHRyYW5zaXRpb24uXG4gICAgdGhpcy5xdWV1ZUNsYXNzQW5kTm9kZShhY3RpdmVDbGFzc05hbWUsIG5vZGUpO1xuXG4gICAgLy8gSWYgdGhlIHVzZXIgc3BlY2lmaWVkIGEgdGltZW91dCBkZWxheS5cbiAgICBpZiAodXNlclNwZWNpZmllZERlbGF5KSB7XG4gICAgICAvLyBDbGVhbi11cCB0aGUgYW5pbWF0aW9uIGFmdGVyIHRoZSBzcGVjaWZpZWQgZGVsYXlcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGVuZExpc3RlbmVyLCB1c2VyU3BlY2lmaWVkRGVsYXkpO1xuICAgICAgdGhpcy50cmFuc2l0aW9uVGltZW91dHMucHVzaCh0aW1lb3V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gREVQUkVDQVRFRDogdGhpcyBsaXN0ZW5lciB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbiBvZiByZWFjdFxuICAgICAgUmVhY3RUcmFuc2l0aW9uRXZlbnRzLmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kTGlzdGVuZXIpO1xuICAgIH1cbiAgfSxcblxuICBxdWV1ZUNsYXNzQW5kTm9kZTogZnVuY3Rpb24gKGNsYXNzTmFtZSwgbm9kZSkge1xuICAgIHRoaXMuY2xhc3NOYW1lQW5kTm9kZVF1ZXVlLnB1c2goe1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICBub2RlOiBub2RlXG4gICAgfSk7XG5cbiAgICBpZiAoIXRoaXMudGltZW91dCkge1xuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLmZsdXNoQ2xhc3NOYW1lQW5kTm9kZVF1ZXVlLCBUSUNLKTtcbiAgICB9XG4gIH0sXG5cbiAgZmx1c2hDbGFzc05hbWVBbmROb2RlUXVldWU6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pc01vdW50ZWQoKSkge1xuICAgICAgdGhpcy5jbGFzc05hbWVBbmROb2RlUXVldWUuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIENTU0NvcmUuYWRkQ2xhc3Mob2JqLm5vZGUsIG9iai5jbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuY2xhc3NOYW1lQW5kTm9kZVF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNsYXNzTmFtZUFuZE5vZGVRdWV1ZSA9IFtdO1xuICAgIHRoaXMudHJhbnNpdGlvblRpbWVvdXRzID0gW107XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB9XG4gICAgdGhpcy50cmFuc2l0aW9uVGltZW91dHMuZm9yRWFjaChmdW5jdGlvbiAodGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jbGFzc05hbWVBbmROb2RlUXVldWUubGVuZ3RoID0gMDtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsQXBwZWFyOiBmdW5jdGlvbiAoZG9uZSkge1xuICAgIGlmICh0aGlzLnByb3BzLmFwcGVhcikge1xuICAgICAgdGhpcy50cmFuc2l0aW9uKCdhcHBlYXInLCBkb25lLCB0aGlzLnByb3BzLmFwcGVhclRpbWVvdXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb25lKCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxFbnRlcjogZnVuY3Rpb24gKGRvbmUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5lbnRlcikge1xuICAgICAgdGhpcy50cmFuc2l0aW9uKCdlbnRlcicsIGRvbmUsIHRoaXMucHJvcHMuZW50ZXJUaW1lb3V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9uZSgpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsTGVhdmU6IGZ1bmN0aW9uIChkb25lKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubGVhdmUpIHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbignbGVhdmUnLCBkb25lLCB0aGlzLnByb3BzLmxlYXZlVGltZW91dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbmUoKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG9ubHlDaGlsZCh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBDaGlsZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QvbGliL1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwQ2hpbGQuanNcbi8vIG1vZHVsZSBpZCA9IDI5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20vbGliL1JlYWN0RE9NJyk7XG5cbmV4cG9ydHMuZ2V0UmVhY3RET00gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBSZWFjdERPTTtcbn07XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFBlcmY7XG4gIHZhciBSZWFjdFRlc3RVdGlscztcblxuICBleHBvcnRzLmdldFJlYWN0UGVyZiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIVJlYWN0UGVyZikge1xuICAgICAgUmVhY3RQZXJmID0gcmVxdWlyZSgncmVhY3QtZG9tL2xpYi9SZWFjdFBlcmYnKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0UGVyZjtcbiAgfTtcblxuICBleHBvcnRzLmdldFJlYWN0VGVzdFV0aWxzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghUmVhY3RUZXN0VXRpbHMpIHtcbiAgICAgIFJlYWN0VGVzdFV0aWxzID0gcmVxdWlyZSgncmVhY3QtZG9tL2xpYi9SZWFjdFRlc3RVdGlscycpO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3RUZXN0VXRpbHM7XG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0L2xpYi9SZWFjdEFkZG9uc0RPTURlcGVuZGVuY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gMjk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBfZXh0ZW5kcyA9IF9hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBSZWFjdERlYnVnVG9vbCA9IHJlcXVpcmUoJy4vUmVhY3REZWJ1Z1Rvb2wnKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xudmFyIGFscmVhZHlXYXJuZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gcm91bmRGbG9hdCh2YWwpIHtcbiAgdmFyIGJhc2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDI7XG5cbiAgdmFyIG4gPSBNYXRoLnBvdygxMCwgYmFzZSk7XG4gIHJldHVybiBNYXRoLmZsb29yKHZhbCAqIG4pIC8gbjtcbn1cblxuLy8gRmxvdyB0eXBlIGRlZmluaXRpb24gb2YgY29uc29sZS50YWJsZSBpcyB0b28gc3RyaWN0IHJpZ2h0IG5vdywgc2VlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9wdWxsLzIzNTMgZm9yIHVwZGF0ZXNcbmZ1bmN0aW9uIGNvbnNvbGVUYWJsZSh0YWJsZSkge1xuICBjb25zb2xlLnRhYmxlKHRhYmxlKTtcbn1cblxuZnVuY3Rpb24gd2FybkluUHJvZHVjdGlvbigpIHtcbiAgaWYgKGFscmVhZHlXYXJuZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgYWxyZWFkeVdhcm5lZCA9IHRydWU7XG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmVycm9yKCdSZWFjdFBlcmYgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGUgcHJvZHVjdGlvbiBidWlsZHMgb2YgUmVhY3QuICcgKyAnVG8gY29sbGVjdCBtZWFzdXJlbWVudHMsIHBsZWFzZSB1c2UgdGhlIGRldmVsb3BtZW50IGJ1aWxkIG9mIFJlYWN0IGluc3RlYWQuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TGFzdE1lYXN1cmVtZW50cygpIHtcbiAgaWYgKCEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykpIHtcbiAgICB3YXJuSW5Qcm9kdWN0aW9uKCk7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RGVidWdUb29sLmdldEZsdXNoSGlzdG9yeSgpO1xufVxuXG5mdW5jdGlvbiBnZXRFeGNsdXNpdmUoKSB7XG4gIHZhciBmbHVzaEhpc3RvcnkgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGdldExhc3RNZWFzdXJlbWVudHMoKTtcblxuICBpZiAoIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSkge1xuICAgIHdhcm5JblByb2R1Y3Rpb24oKTtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgYWdncmVnYXRlZFN0YXRzID0ge307XG4gIHZhciBhZmZlY3RlZElEcyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFnZ3JlZ2F0ZWRTdGF0cyh0cmVlU25hcHNob3QsIGluc3RhbmNlSUQsIHRpbWVyVHlwZSwgYXBwbHlVcGRhdGUpIHtcbiAgICB2YXIgZGlzcGxheU5hbWUgPSB0cmVlU25hcHNob3RbaW5zdGFuY2VJRF0uZGlzcGxheU5hbWU7XG5cbiAgICB2YXIga2V5ID0gZGlzcGxheU5hbWU7XG4gICAgdmFyIHN0YXRzID0gYWdncmVnYXRlZFN0YXRzW2tleV07XG4gICAgaWYgKCFzdGF0cykge1xuICAgICAgYWZmZWN0ZWRJRHNba2V5XSA9IHt9O1xuICAgICAgc3RhdHMgPSBhZ2dyZWdhdGVkU3RhdHNba2V5XSA9IHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIGluc3RhbmNlQ291bnQ6IDAsXG4gICAgICAgIGNvdW50czoge30sXG4gICAgICAgIGR1cmF0aW9uczoge30sXG4gICAgICAgIHRvdGFsRHVyYXRpb246IDBcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICghc3RhdHMuZHVyYXRpb25zW3RpbWVyVHlwZV0pIHtcbiAgICAgIHN0YXRzLmR1cmF0aW9uc1t0aW1lclR5cGVdID0gMDtcbiAgICB9XG4gICAgaWYgKCFzdGF0cy5jb3VudHNbdGltZXJUeXBlXSkge1xuICAgICAgc3RhdHMuY291bnRzW3RpbWVyVHlwZV0gPSAwO1xuICAgIH1cbiAgICBhZmZlY3RlZElEc1trZXldW2luc3RhbmNlSURdID0gdHJ1ZTtcbiAgICBhcHBseVVwZGF0ZShzdGF0cyk7XG4gIH1cblxuICBmbHVzaEhpc3RvcnkuZm9yRWFjaChmdW5jdGlvbiAoZmx1c2gpIHtcbiAgICB2YXIgbWVhc3VyZW1lbnRzID0gZmx1c2gubWVhc3VyZW1lbnRzLFxuICAgICAgICB0cmVlU25hcHNob3QgPSBmbHVzaC50cmVlU25hcHNob3Q7XG5cbiAgICBtZWFzdXJlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobWVhc3VyZW1lbnQpIHtcbiAgICAgIHZhciBkdXJhdGlvbiA9IG1lYXN1cmVtZW50LmR1cmF0aW9uLFxuICAgICAgICAgIGluc3RhbmNlSUQgPSBtZWFzdXJlbWVudC5pbnN0YW5jZUlELFxuICAgICAgICAgIHRpbWVyVHlwZSA9IG1lYXN1cmVtZW50LnRpbWVyVHlwZTtcblxuICAgICAgdXBkYXRlQWdncmVnYXRlZFN0YXRzKHRyZWVTbmFwc2hvdCwgaW5zdGFuY2VJRCwgdGltZXJUeXBlLCBmdW5jdGlvbiAoc3RhdHMpIHtcbiAgICAgICAgc3RhdHMudG90YWxEdXJhdGlvbiArPSBkdXJhdGlvbjtcbiAgICAgICAgc3RhdHMuZHVyYXRpb25zW3RpbWVyVHlwZV0gKz0gZHVyYXRpb247XG4gICAgICAgIHN0YXRzLmNvdW50c1t0aW1lclR5cGVdKys7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGFnZ3JlZ2F0ZWRTdGF0cykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGFnZ3JlZ2F0ZWRTdGF0c1trZXldLCB7XG4gICAgICBpbnN0YW5jZUNvdW50OiBPYmplY3Qua2V5cyhhZmZlY3RlZElEc1trZXldKS5sZW5ndGhcbiAgICB9KTtcbiAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBiLnRvdGFsRHVyYXRpb24gLSBhLnRvdGFsRHVyYXRpb247XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRJbmNsdXNpdmUoKSB7XG4gIHZhciBmbHVzaEhpc3RvcnkgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGdldExhc3RNZWFzdXJlbWVudHMoKTtcblxuICBpZiAoIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSkge1xuICAgIHdhcm5JblByb2R1Y3Rpb24oKTtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgYWdncmVnYXRlZFN0YXRzID0ge307XG4gIHZhciBhZmZlY3RlZElEcyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFnZ3JlZ2F0ZWRTdGF0cyh0cmVlU25hcHNob3QsIGluc3RhbmNlSUQsIGFwcGx5VXBkYXRlKSB7XG4gICAgdmFyIF90cmVlU25hcHNob3QkaW5zdGFuYyA9IHRyZWVTbmFwc2hvdFtpbnN0YW5jZUlEXSxcbiAgICAgICAgZGlzcGxheU5hbWUgPSBfdHJlZVNuYXBzaG90JGluc3RhbmMuZGlzcGxheU5hbWUsXG4gICAgICAgIG93bmVySUQgPSBfdHJlZVNuYXBzaG90JGluc3RhbmMub3duZXJJRDtcblxuICAgIHZhciBvd25lciA9IHRyZWVTbmFwc2hvdFtvd25lcklEXTtcbiAgICB2YXIga2V5ID0gKG93bmVyID8gb3duZXIuZGlzcGxheU5hbWUgKyAnID4gJyA6ICcnKSArIGRpc3BsYXlOYW1lO1xuICAgIHZhciBzdGF0cyA9IGFnZ3JlZ2F0ZWRTdGF0c1trZXldO1xuICAgIGlmICghc3RhdHMpIHtcbiAgICAgIGFmZmVjdGVkSURzW2tleV0gPSB7fTtcbiAgICAgIHN0YXRzID0gYWdncmVnYXRlZFN0YXRzW2tleV0gPSB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBpbnN0YW5jZUNvdW50OiAwLFxuICAgICAgICBpbmNsdXNpdmVSZW5kZXJEdXJhdGlvbjogMCxcbiAgICAgICAgcmVuZGVyQ291bnQ6IDBcbiAgICAgIH07XG4gICAgfVxuICAgIGFmZmVjdGVkSURzW2tleV1baW5zdGFuY2VJRF0gPSB0cnVlO1xuICAgIGFwcGx5VXBkYXRlKHN0YXRzKTtcbiAgfVxuXG4gIHZhciBpc0NvbXBvc2l0ZUJ5SUQgPSB7fTtcbiAgZmx1c2hIaXN0b3J5LmZvckVhY2goZnVuY3Rpb24gKGZsdXNoKSB7XG4gICAgdmFyIG1lYXN1cmVtZW50cyA9IGZsdXNoLm1lYXN1cmVtZW50cztcblxuICAgIG1lYXN1cmVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtZWFzdXJlbWVudCkge1xuICAgICAgdmFyIGluc3RhbmNlSUQgPSBtZWFzdXJlbWVudC5pbnN0YW5jZUlELFxuICAgICAgICAgIHRpbWVyVHlwZSA9IG1lYXN1cmVtZW50LnRpbWVyVHlwZTtcblxuICAgICAgaWYgKHRpbWVyVHlwZSAhPT0gJ3JlbmRlcicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaXNDb21wb3NpdGVCeUlEW2luc3RhbmNlSURdID0gdHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZmx1c2hIaXN0b3J5LmZvckVhY2goZnVuY3Rpb24gKGZsdXNoKSB7XG4gICAgdmFyIG1lYXN1cmVtZW50cyA9IGZsdXNoLm1lYXN1cmVtZW50cyxcbiAgICAgICAgdHJlZVNuYXBzaG90ID0gZmx1c2gudHJlZVNuYXBzaG90O1xuXG4gICAgbWVhc3VyZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG1lYXN1cmVtZW50KSB7XG4gICAgICB2YXIgZHVyYXRpb24gPSBtZWFzdXJlbWVudC5kdXJhdGlvbixcbiAgICAgICAgICBpbnN0YW5jZUlEID0gbWVhc3VyZW1lbnQuaW5zdGFuY2VJRCxcbiAgICAgICAgICB0aW1lclR5cGUgPSBtZWFzdXJlbWVudC50aW1lclR5cGU7XG5cbiAgICAgIGlmICh0aW1lclR5cGUgIT09ICdyZW5kZXInKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZUFnZ3JlZ2F0ZWRTdGF0cyh0cmVlU25hcHNob3QsIGluc3RhbmNlSUQsIGZ1bmN0aW9uIChzdGF0cykge1xuICAgICAgICBzdGF0cy5yZW5kZXJDb3VudCsrO1xuICAgICAgfSk7XG4gICAgICB2YXIgbmV4dFBhcmVudElEID0gaW5zdGFuY2VJRDtcbiAgICAgIHdoaWxlIChuZXh0UGFyZW50SUQpIHtcbiAgICAgICAgLy8gQXMgd2UgdHJhdmVyc2UgcGFyZW50cywgb25seSBjb3VudCBpbmNsdXNpdmUgdGltZSB0b3dhcmRzIGNvbXBvc2l0ZXMuXG4gICAgICAgIC8vIFdlIGtub3cgc29tZXRoaW5nIGlzIGEgY29tcG9zaXRlIGlmIGl0cyByZW5kZXIoKSB3YXMgY2FsbGVkLlxuICAgICAgICBpZiAoaXNDb21wb3NpdGVCeUlEW25leHRQYXJlbnRJRF0pIHtcbiAgICAgICAgICB1cGRhdGVBZ2dyZWdhdGVkU3RhdHModHJlZVNuYXBzaG90LCBuZXh0UGFyZW50SUQsIGZ1bmN0aW9uIChzdGF0cykge1xuICAgICAgICAgICAgc3RhdHMuaW5jbHVzaXZlUmVuZGVyRHVyYXRpb24gKz0gZHVyYXRpb247XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbmV4dFBhcmVudElEID0gdHJlZVNuYXBzaG90W25leHRQYXJlbnRJRF0ucGFyZW50SUQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhhZ2dyZWdhdGVkU3RhdHMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhZ2dyZWdhdGVkU3RhdHNba2V5XSwge1xuICAgICAgaW5zdGFuY2VDb3VudDogT2JqZWN0LmtleXMoYWZmZWN0ZWRJRHNba2V5XSkubGVuZ3RoXG4gICAgfSk7XG4gIH0pLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYi5pbmNsdXNpdmVSZW5kZXJEdXJhdGlvbiAtIGEuaW5jbHVzaXZlUmVuZGVyRHVyYXRpb247XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRXYXN0ZWQoKSB7XG4gIHZhciBmbHVzaEhpc3RvcnkgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGdldExhc3RNZWFzdXJlbWVudHMoKTtcblxuICBpZiAoIShwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSkge1xuICAgIHdhcm5JblByb2R1Y3Rpb24oKTtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgYWdncmVnYXRlZFN0YXRzID0ge307XG4gIHZhciBhZmZlY3RlZElEcyA9IHt9O1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFnZ3JlZ2F0ZWRTdGF0cyh0cmVlU25hcHNob3QsIGluc3RhbmNlSUQsIGFwcGx5VXBkYXRlKSB7XG4gICAgdmFyIF90cmVlU25hcHNob3QkaW5zdGFuYzIgPSB0cmVlU25hcHNob3RbaW5zdGFuY2VJRF0sXG4gICAgICAgIGRpc3BsYXlOYW1lID0gX3RyZWVTbmFwc2hvdCRpbnN0YW5jMi5kaXNwbGF5TmFtZSxcbiAgICAgICAgb3duZXJJRCA9IF90cmVlU25hcHNob3QkaW5zdGFuYzIub3duZXJJRDtcblxuICAgIHZhciBvd25lciA9IHRyZWVTbmFwc2hvdFtvd25lcklEXTtcbiAgICB2YXIga2V5ID0gKG93bmVyID8gb3duZXIuZGlzcGxheU5hbWUgKyAnID4gJyA6ICcnKSArIGRpc3BsYXlOYW1lO1xuICAgIHZhciBzdGF0cyA9IGFnZ3JlZ2F0ZWRTdGF0c1trZXldO1xuICAgIGlmICghc3RhdHMpIHtcbiAgICAgIGFmZmVjdGVkSURzW2tleV0gPSB7fTtcbiAgICAgIHN0YXRzID0gYWdncmVnYXRlZFN0YXRzW2tleV0gPSB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBpbnN0YW5jZUNvdW50OiAwLFxuICAgICAgICBpbmNsdXNpdmVSZW5kZXJEdXJhdGlvbjogMCxcbiAgICAgICAgcmVuZGVyQ291bnQ6IDBcbiAgICAgIH07XG4gICAgfVxuICAgIGFmZmVjdGVkSURzW2tleV1baW5zdGFuY2VJRF0gPSB0cnVlO1xuICAgIGFwcGx5VXBkYXRlKHN0YXRzKTtcbiAgfVxuXG4gIGZsdXNoSGlzdG9yeS5mb3JFYWNoKGZ1bmN0aW9uIChmbHVzaCkge1xuICAgIHZhciBtZWFzdXJlbWVudHMgPSBmbHVzaC5tZWFzdXJlbWVudHMsXG4gICAgICAgIHRyZWVTbmFwc2hvdCA9IGZsdXNoLnRyZWVTbmFwc2hvdCxcbiAgICAgICAgb3BlcmF0aW9ucyA9IGZsdXNoLm9wZXJhdGlvbnM7XG5cbiAgICB2YXIgaXNEZWZpbml0ZWx5Tm90V2FzdGVkQnlJRCA9IHt9O1xuXG4gICAgLy8gRmluZCBob3N0IGNvbXBvbmVudHMgYXNzb2NpYXRlZCB3aXRoIGFuIG9wZXJhdGlvbiBpbiB0aGlzIGJhdGNoLlxuICAgIC8vIE1hcmsgYWxsIGNvbXBvbmVudHMgaW4gdGhlaXIgcGFyZW50IHRyZWUgYXMgZGVmaW5pdGVseSBub3Qgd2FzdGVkLlxuICAgIG9wZXJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAob3BlcmF0aW9uKSB7XG4gICAgICB2YXIgaW5zdGFuY2VJRCA9IG9wZXJhdGlvbi5pbnN0YW5jZUlEO1xuXG4gICAgICB2YXIgbmV4dFBhcmVudElEID0gaW5zdGFuY2VJRDtcbiAgICAgIHdoaWxlIChuZXh0UGFyZW50SUQpIHtcbiAgICAgICAgaXNEZWZpbml0ZWx5Tm90V2FzdGVkQnlJRFtuZXh0UGFyZW50SURdID0gdHJ1ZTtcbiAgICAgICAgbmV4dFBhcmVudElEID0gdHJlZVNuYXBzaG90W25leHRQYXJlbnRJRF0ucGFyZW50SUQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBGaW5kIGNvbXBvc2l0ZSBjb21wb25lbnRzIHRoYXQgcmVuZGVyZWQgaW4gdGhpcyBiYXRjaC5cbiAgICAvLyBUaGVzZSBhcmUgcG90ZW50aWFsIGNhbmRpZGF0ZXMgZm9yIGJlaW5nIHdhc3RlZCByZW5kZXJzLlxuICAgIHZhciByZW5kZXJlZENvbXBvc2l0ZUlEcyA9IHt9O1xuICAgIG1lYXN1cmVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtZWFzdXJlbWVudCkge1xuICAgICAgdmFyIGluc3RhbmNlSUQgPSBtZWFzdXJlbWVudC5pbnN0YW5jZUlELFxuICAgICAgICAgIHRpbWVyVHlwZSA9IG1lYXN1cmVtZW50LnRpbWVyVHlwZTtcblxuICAgICAgaWYgKHRpbWVyVHlwZSAhPT0gJ3JlbmRlcicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVuZGVyZWRDb21wb3NpdGVJRHNbaW5zdGFuY2VJRF0gPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgbWVhc3VyZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG1lYXN1cmVtZW50KSB7XG4gICAgICB2YXIgZHVyYXRpb24gPSBtZWFzdXJlbWVudC5kdXJhdGlvbixcbiAgICAgICAgICBpbnN0YW5jZUlEID0gbWVhc3VyZW1lbnQuaW5zdGFuY2VJRCxcbiAgICAgICAgICB0aW1lclR5cGUgPSBtZWFzdXJlbWVudC50aW1lclR5cGU7XG5cbiAgICAgIGlmICh0aW1lclR5cGUgIT09ICdyZW5kZXInKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlcmUgd2FzIGEgRE9NIHVwZGF0ZSBiZWxvdyB0aGlzIGNvbXBvbmVudCwgb3IgaXQgaGFzIGp1c3QgYmVlblxuICAgICAgLy8gbW91bnRlZCwgaXRzIHJlbmRlcigpIGlzIG5vdCBjb25zaWRlcmVkIHdhc3RlZC5cbiAgICAgIHZhciB1cGRhdGVDb3VudCA9IHRyZWVTbmFwc2hvdFtpbnN0YW5jZUlEXS51cGRhdGVDb3VudDtcblxuICAgICAgaWYgKGlzRGVmaW5pdGVseU5vdFdhc3RlZEJ5SURbaW5zdGFuY2VJRF0gfHwgdXBkYXRlQ291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSBjb25zaWRlciB0aGlzIHJlbmRlcigpIHdhc3RlZC5cbiAgICAgIHVwZGF0ZUFnZ3JlZ2F0ZWRTdGF0cyh0cmVlU25hcHNob3QsIGluc3RhbmNlSUQsIGZ1bmN0aW9uIChzdGF0cykge1xuICAgICAgICBzdGF0cy5yZW5kZXJDb3VudCsrO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBuZXh0UGFyZW50SUQgPSBpbnN0YW5jZUlEO1xuICAgICAgd2hpbGUgKG5leHRQYXJlbnRJRCkge1xuICAgICAgICAvLyBBbnkgcGFyZW50cyByZW5kZXJlZCBkdXJpbmcgdGhpcyBiYXRjaCBhcmUgY29uc2lkZXJlZCB3YXN0ZWRcbiAgICAgICAgLy8gdW5sZXNzIHdlIHByZXZpb3VzbHkgbWFya2VkIHRoZW0gYXMgZGlydHkuXG4gICAgICAgIHZhciBpc1dhc3RlZCA9IHJlbmRlcmVkQ29tcG9zaXRlSURzW25leHRQYXJlbnRJRF0gJiYgIWlzRGVmaW5pdGVseU5vdFdhc3RlZEJ5SURbbmV4dFBhcmVudElEXTtcbiAgICAgICAgaWYgKGlzV2FzdGVkKSB7XG4gICAgICAgICAgdXBkYXRlQWdncmVnYXRlZFN0YXRzKHRyZWVTbmFwc2hvdCwgbmV4dFBhcmVudElELCBmdW5jdGlvbiAoc3RhdHMpIHtcbiAgICAgICAgICAgIHN0YXRzLmluY2x1c2l2ZVJlbmRlckR1cmF0aW9uICs9IGR1cmF0aW9uO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIG5leHRQYXJlbnRJRCA9IHRyZWVTbmFwc2hvdFtuZXh0UGFyZW50SURdLnBhcmVudElEO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gT2JqZWN0LmtleXMoYWdncmVnYXRlZFN0YXRzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgYWdncmVnYXRlZFN0YXRzW2tleV0sIHtcbiAgICAgIGluc3RhbmNlQ291bnQ6IE9iamVjdC5rZXlzKGFmZmVjdGVkSURzW2tleV0pLmxlbmd0aFxuICAgIH0pO1xuICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIuaW5jbHVzaXZlUmVuZGVyRHVyYXRpb24gLSBhLmluY2x1c2l2ZVJlbmRlckR1cmF0aW9uO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0T3BlcmF0aW9ucygpIHtcbiAgdmFyIGZsdXNoSGlzdG9yeSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZ2V0TGFzdE1lYXN1cmVtZW50cygpO1xuXG4gIGlmICghKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpKSB7XG4gICAgd2FybkluUHJvZHVjdGlvbigpO1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBzdGF0cyA9IFtdO1xuICBmbHVzaEhpc3RvcnkuZm9yRWFjaChmdW5jdGlvbiAoZmx1c2gsIGZsdXNoSW5kZXgpIHtcbiAgICB2YXIgb3BlcmF0aW9ucyA9IGZsdXNoLm9wZXJhdGlvbnMsXG4gICAgICAgIHRyZWVTbmFwc2hvdCA9IGZsdXNoLnRyZWVTbmFwc2hvdDtcblxuICAgIG9wZXJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAob3BlcmF0aW9uKSB7XG4gICAgICB2YXIgaW5zdGFuY2VJRCA9IG9wZXJhdGlvbi5pbnN0YW5jZUlELFxuICAgICAgICAgIHR5cGUgPSBvcGVyYXRpb24udHlwZSxcbiAgICAgICAgICBwYXlsb2FkID0gb3BlcmF0aW9uLnBheWxvYWQ7XG4gICAgICB2YXIgX3RyZWVTbmFwc2hvdCRpbnN0YW5jMyA9IHRyZWVTbmFwc2hvdFtpbnN0YW5jZUlEXSxcbiAgICAgICAgICBkaXNwbGF5TmFtZSA9IF90cmVlU25hcHNob3QkaW5zdGFuYzMuZGlzcGxheU5hbWUsXG4gICAgICAgICAgb3duZXJJRCA9IF90cmVlU25hcHNob3QkaW5zdGFuYzMub3duZXJJRDtcblxuICAgICAgdmFyIG93bmVyID0gdHJlZVNuYXBzaG90W293bmVySURdO1xuICAgICAgdmFyIGtleSA9IChvd25lciA/IG93bmVyLmRpc3BsYXlOYW1lICsgJyA+ICcgOiAnJykgKyBkaXNwbGF5TmFtZTtcblxuICAgICAgc3RhdHMucHVzaCh7XG4gICAgICAgIGZsdXNoSW5kZXg6IGZsdXNoSW5kZXgsXG4gICAgICAgIGluc3RhbmNlSUQ6IGluc3RhbmNlSUQsXG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBvd25lcklEOiBvd25lcklELFxuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBzdGF0cztcbn1cblxuZnVuY3Rpb24gcHJpbnRFeGNsdXNpdmUoZmx1c2hIaXN0b3J5KSB7XG4gIGlmICghKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpKSB7XG4gICAgd2FybkluUHJvZHVjdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzdGF0cyA9IGdldEV4Y2x1c2l2ZShmbHVzaEhpc3RvcnkpO1xuICB2YXIgdGFibGUgPSBzdGF0cy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIga2V5ID0gaXRlbS5rZXksXG4gICAgICAgIGluc3RhbmNlQ291bnQgPSBpdGVtLmluc3RhbmNlQ291bnQsXG4gICAgICAgIHRvdGFsRHVyYXRpb24gPSBpdGVtLnRvdGFsRHVyYXRpb247XG5cbiAgICB2YXIgcmVuZGVyQ291bnQgPSBpdGVtLmNvdW50cy5yZW5kZXIgfHwgMDtcbiAgICB2YXIgcmVuZGVyRHVyYXRpb24gPSBpdGVtLmR1cmF0aW9ucy5yZW5kZXIgfHwgMDtcbiAgICByZXR1cm4ge1xuICAgICAgJ0NvbXBvbmVudCc6IGtleSxcbiAgICAgICdUb3RhbCB0aW1lIChtcyknOiByb3VuZEZsb2F0KHRvdGFsRHVyYXRpb24pLFxuICAgICAgJ0luc3RhbmNlIGNvdW50JzogaW5zdGFuY2VDb3VudCxcbiAgICAgICdUb3RhbCByZW5kZXIgdGltZSAobXMpJzogcm91bmRGbG9hdChyZW5kZXJEdXJhdGlvbiksXG4gICAgICAnQXZlcmFnZSByZW5kZXIgdGltZSAobXMpJzogcmVuZGVyQ291bnQgPyByb3VuZEZsb2F0KHJlbmRlckR1cmF0aW9uIC8gcmVuZGVyQ291bnQpIDogdW5kZWZpbmVkLFxuICAgICAgJ1JlbmRlciBjb3VudCc6IHJlbmRlckNvdW50LFxuICAgICAgJ1RvdGFsIGxpZmVjeWNsZSB0aW1lIChtcyknOiByb3VuZEZsb2F0KHRvdGFsRHVyYXRpb24gLSByZW5kZXJEdXJhdGlvbilcbiAgICB9O1xuICB9KTtcbiAgY29uc29sZVRhYmxlKHRhYmxlKTtcbn1cblxuZnVuY3Rpb24gcHJpbnRJbmNsdXNpdmUoZmx1c2hIaXN0b3J5KSB7XG4gIGlmICghKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpKSB7XG4gICAgd2FybkluUHJvZHVjdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzdGF0cyA9IGdldEluY2x1c2l2ZShmbHVzaEhpc3RvcnkpO1xuICB2YXIgdGFibGUgPSBzdGF0cy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIga2V5ID0gaXRlbS5rZXksXG4gICAgICAgIGluc3RhbmNlQ291bnQgPSBpdGVtLmluc3RhbmNlQ291bnQsXG4gICAgICAgIGluY2x1c2l2ZVJlbmRlckR1cmF0aW9uID0gaXRlbS5pbmNsdXNpdmVSZW5kZXJEdXJhdGlvbixcbiAgICAgICAgcmVuZGVyQ291bnQgPSBpdGVtLnJlbmRlckNvdW50O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICdPd25lciA+IENvbXBvbmVudCc6IGtleSxcbiAgICAgICdJbmNsdXNpdmUgcmVuZGVyIHRpbWUgKG1zKSc6IHJvdW5kRmxvYXQoaW5jbHVzaXZlUmVuZGVyRHVyYXRpb24pLFxuICAgICAgJ0luc3RhbmNlIGNvdW50JzogaW5zdGFuY2VDb3VudCxcbiAgICAgICdSZW5kZXIgY291bnQnOiByZW5kZXJDb3VudFxuICAgIH07XG4gIH0pO1xuICBjb25zb2xlVGFibGUodGFibGUpO1xufVxuXG5mdW5jdGlvbiBwcmludFdhc3RlZChmbHVzaEhpc3RvcnkpIHtcbiAgaWYgKCEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykpIHtcbiAgICB3YXJuSW5Qcm9kdWN0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN0YXRzID0gZ2V0V2FzdGVkKGZsdXNoSGlzdG9yeSk7XG4gIHZhciB0YWJsZSA9IHN0YXRzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBrZXkgPSBpdGVtLmtleSxcbiAgICAgICAgaW5zdGFuY2VDb3VudCA9IGl0ZW0uaW5zdGFuY2VDb3VudCxcbiAgICAgICAgaW5jbHVzaXZlUmVuZGVyRHVyYXRpb24gPSBpdGVtLmluY2x1c2l2ZVJlbmRlckR1cmF0aW9uLFxuICAgICAgICByZW5kZXJDb3VudCA9IGl0ZW0ucmVuZGVyQ291bnQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgJ093bmVyID4gQ29tcG9uZW50Jzoga2V5LFxuICAgICAgJ0luY2x1c2l2ZSB3YXN0ZWQgdGltZSAobXMpJzogcm91bmRGbG9hdChpbmNsdXNpdmVSZW5kZXJEdXJhdGlvbiksXG4gICAgICAnSW5zdGFuY2UgY291bnQnOiBpbnN0YW5jZUNvdW50LFxuICAgICAgJ1JlbmRlciBjb3VudCc6IHJlbmRlckNvdW50XG4gICAgfTtcbiAgfSk7XG4gIGNvbnNvbGVUYWJsZSh0YWJsZSk7XG59XG5cbmZ1bmN0aW9uIHByaW50T3BlcmF0aW9ucyhmbHVzaEhpc3RvcnkpIHtcbiAgaWYgKCEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykpIHtcbiAgICB3YXJuSW5Qcm9kdWN0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN0YXRzID0gZ2V0T3BlcmF0aW9ucyhmbHVzaEhpc3RvcnkpO1xuICB2YXIgdGFibGUgPSBzdGF0cy5tYXAoZnVuY3Rpb24gKHN0YXQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ093bmVyID4gTm9kZSc6IHN0YXQua2V5LFxuICAgICAgJ09wZXJhdGlvbic6IHN0YXQudHlwZSxcbiAgICAgICdQYXlsb2FkJzogdHlwZW9mIHN0YXQucGF5bG9hZCA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShzdGF0LnBheWxvYWQpIDogc3RhdC5wYXlsb2FkLFxuICAgICAgJ0ZsdXNoIGluZGV4Jzogc3RhdC5mbHVzaEluZGV4LFxuICAgICAgJ093bmVyIENvbXBvbmVudCBJRCc6IHN0YXQub3duZXJJRCxcbiAgICAgICdET00gQ29tcG9uZW50IElEJzogc3RhdC5pbnN0YW5jZUlEXG4gICAgfTtcbiAgfSk7XG4gIGNvbnNvbGVUYWJsZSh0YWJsZSk7XG59XG5cbnZhciB3YXJuZWRBYm91dFByaW50RE9NID0gZmFsc2U7XG5mdW5jdGlvbiBwcmludERPTShtZWFzdXJlbWVudHMpIHtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcod2FybmVkQWJvdXRQcmludERPTSwgJ2BSZWFjdFBlcmYucHJpbnRET00oLi4uKWAgaXMgZGVwcmVjYXRlZC4gVXNlICcgKyAnYFJlYWN0UGVyZi5wcmludE9wZXJhdGlvbnMoLi4uKWAgaW5zdGVhZC4nKSA6IHZvaWQgMDtcbiAgd2FybmVkQWJvdXRQcmludERPTSA9IHRydWU7XG4gIHJldHVybiBwcmludE9wZXJhdGlvbnMobWVhc3VyZW1lbnRzKTtcbn1cblxudmFyIHdhcm5lZEFib3V0R2V0TWVhc3VyZW1lbnRzU3VtbWFyeU1hcCA9IGZhbHNlO1xuZnVuY3Rpb24gZ2V0TWVhc3VyZW1lbnRzU3VtbWFyeU1hcChtZWFzdXJlbWVudHMpIHtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHdhcm5pbmcod2FybmVkQWJvdXRHZXRNZWFzdXJlbWVudHNTdW1tYXJ5TWFwLCAnYFJlYWN0UGVyZi5nZXRNZWFzdXJlbWVudHNTdW1tYXJ5TWFwKC4uLilgIGlzIGRlcHJlY2F0ZWQuIFVzZSAnICsgJ2BSZWFjdFBlcmYuZ2V0V2FzdGVkKC4uLilgIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gIHdhcm5lZEFib3V0R2V0TWVhc3VyZW1lbnRzU3VtbWFyeU1hcCA9IHRydWU7XG4gIHJldHVybiBnZXRXYXN0ZWQobWVhc3VyZW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGlmICghKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpKSB7XG4gICAgd2FybkluUHJvZHVjdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIFJlYWN0RGVidWdUb29sLmJlZ2luUHJvZmlsaW5nKCk7XG59XG5cbmZ1bmN0aW9uIHN0b3AoKSB7XG4gIGlmICghKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpKSB7XG4gICAgd2FybkluUHJvZHVjdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIFJlYWN0RGVidWdUb29sLmVuZFByb2ZpbGluZygpO1xufVxuXG5mdW5jdGlvbiBpc1J1bm5pbmcoKSB7XG4gIGlmICghKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpKSB7XG4gICAgd2FybkluUHJvZHVjdGlvbigpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdERlYnVnVG9vbC5pc1Byb2ZpbGluZygpO1xufVxuXG52YXIgUmVhY3RQZXJmQW5hbHlzaXMgPSB7XG4gIGdldExhc3RNZWFzdXJlbWVudHM6IGdldExhc3RNZWFzdXJlbWVudHMsXG4gIGdldEV4Y2x1c2l2ZTogZ2V0RXhjbHVzaXZlLFxuICBnZXRJbmNsdXNpdmU6IGdldEluY2x1c2l2ZSxcbiAgZ2V0V2FzdGVkOiBnZXRXYXN0ZWQsXG4gIGdldE9wZXJhdGlvbnM6IGdldE9wZXJhdGlvbnMsXG4gIHByaW50RXhjbHVzaXZlOiBwcmludEV4Y2x1c2l2ZSxcbiAgcHJpbnRJbmNsdXNpdmU6IHByaW50SW5jbHVzaXZlLFxuICBwcmludFdhc3RlZDogcHJpbnRXYXN0ZWQsXG4gIHByaW50T3BlcmF0aW9uczogcHJpbnRPcGVyYXRpb25zLFxuICBzdGFydDogc3RhcnQsXG4gIHN0b3A6IHN0b3AsXG4gIGlzUnVubmluZzogaXNSdW5uaW5nLFxuICAvLyBEZXByZWNhdGVkOlxuICBwcmludERPTTogcHJpbnRET00sXG4gIGdldE1lYXN1cmVtZW50c1N1bW1hcnlNYXA6IGdldE1lYXN1cmVtZW50c1N1bW1hcnlNYXBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQZXJmQW5hbHlzaXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWRvbS9saWIvUmVhY3RQZXJmLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9wcm9kSW52YXJpYW50ID0gcmVxdWlyZSgnLi9yZWFjdFByb2RJbnZhcmlhbnQnKSxcbiAgICBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgRXZlbnRDb25zdGFudHMgPSByZXF1aXJlKCcuL0V2ZW50Q29uc3RhbnRzJyk7XG52YXIgRXZlbnRQbHVnaW5IdWIgPSByZXF1aXJlKCcuL0V2ZW50UGx1Z2luSHViJyk7XG52YXIgRXZlbnRQbHVnaW5SZWdpc3RyeSA9IHJlcXVpcmUoJy4vRXZlbnRQbHVnaW5SZWdpc3RyeScpO1xudmFyIEV2ZW50UHJvcGFnYXRvcnMgPSByZXF1aXJlKCcuL0V2ZW50UHJvcGFnYXRvcnMnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9SZWFjdCcpO1xudmFyIFJlYWN0RE9NID0gcmVxdWlyZSgnLi9SZWFjdERPTScpO1xudmFyIFJlYWN0RE9NQ29tcG9uZW50VHJlZSA9IHJlcXVpcmUoJy4vUmVhY3RET01Db21wb25lbnRUcmVlJyk7XG52YXIgUmVhY3RCcm93c2VyRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnLi9SZWFjdEJyb3dzZXJFdmVudEVtaXR0ZXInKTtcbnZhciBSZWFjdEluc3RhbmNlTWFwID0gcmVxdWlyZSgnLi9SZWFjdEluc3RhbmNlTWFwJyk7XG52YXIgUmVhY3RVcGRhdGVzID0gcmVxdWlyZSgnLi9SZWFjdFVwZGF0ZXMnKTtcbnZhciBTeW50aGV0aWNFdmVudCA9IHJlcXVpcmUoJy4vU3ludGhldGljRXZlbnQnKTtcbnZhciBSZWFjdFNoYWxsb3dSZW5kZXJlciA9IHJlcXVpcmUoJy4vUmVhY3RTaGFsbG93UmVuZGVyZXInKTtcblxudmFyIGZpbmRET01Ob2RlID0gcmVxdWlyZSgnLi9maW5kRE9NTm9kZScpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xuXG52YXIgdG9wTGV2ZWxUeXBlcyA9IEV2ZW50Q29uc3RhbnRzLnRvcExldmVsVHlwZXM7XG5cbmZ1bmN0aW9uIEV2ZW50KHN1ZmZpeCkge31cblxuLyoqXG4gKiBAY2xhc3MgUmVhY3RUZXN0VXRpbHNcbiAqL1xuXG5mdW5jdGlvbiBmaW5kQWxsSW5SZW5kZXJlZFRyZWVJbnRlcm5hbChpbnN0LCB0ZXN0KSB7XG4gIGlmICghaW5zdCB8fCAhaW5zdC5nZXRQdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgcHVibGljSW5zdCA9IGluc3QuZ2V0UHVibGljSW5zdGFuY2UoKTtcbiAgdmFyIHJldCA9IHRlc3QocHVibGljSW5zdCkgPyBbcHVibGljSW5zdF0gOiBbXTtcbiAgdmFyIGN1cnJlbnRFbGVtZW50ID0gaW5zdC5fY3VycmVudEVsZW1lbnQ7XG4gIGlmIChSZWFjdFRlc3RVdGlscy5pc0RPTUNvbXBvbmVudChwdWJsaWNJbnN0KSkge1xuICAgIHZhciByZW5kZXJlZENoaWxkcmVuID0gaW5zdC5fcmVuZGVyZWRDaGlsZHJlbjtcbiAgICB2YXIga2V5O1xuICAgIGZvciAoa2V5IGluIHJlbmRlcmVkQ2hpbGRyZW4pIHtcbiAgICAgIGlmICghcmVuZGVyZWRDaGlsZHJlbi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmV0ID0gcmV0LmNvbmNhdChmaW5kQWxsSW5SZW5kZXJlZFRyZWVJbnRlcm5hbChyZW5kZXJlZENoaWxkcmVuW2tleV0sIHRlc3QpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY3VycmVudEVsZW1lbnQpICYmIHR5cGVvZiBjdXJyZW50RWxlbWVudC50eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0ID0gcmV0LmNvbmNhdChmaW5kQWxsSW5SZW5kZXJlZFRyZWVJbnRlcm5hbChpbnN0Ll9yZW5kZXJlZENvbXBvbmVudCwgdGVzdCkpO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICogVXRpbGl0aWVzIGZvciBtYWtpbmcgaXQgZWFzeSB0byB0ZXN0IFJlYWN0IGNvbXBvbmVudHMuXG4gKlxuICogU2VlIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvdGVzdC11dGlscy5odG1sXG4gKlxuICogVG9kbzogU3VwcG9ydCB0aGUgZW50aXJlIERPTS5zY3J5IHF1ZXJ5IHN5bnRheC4gRm9yIG5vdywgdGhlc2Ugc2ltcGxlXG4gKiB1dGlsaXRpZXMgd2lsbCBzdWZmaWNlIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICogQGxlbmRzIFJlYWN0VGVzdFV0aWxzXG4gKi9cbnZhciBSZWFjdFRlc3RVdGlscyA9IHtcbiAgcmVuZGVySW50b0RvY3VtZW50OiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBOb25lIG9mIG91ciB0ZXN0cyBhY3R1YWxseSByZXF1aXJlIGF0dGFjaGluZyB0aGUgY29udGFpbmVyIHRvIHRoZVxuICAgIC8vIERPTSwgYW5kIGRvaW5nIHNvIGNyZWF0ZXMgYSBtZXNzIHRoYXQgd2UgcmVseSBvbiB0ZXN0IGlzb2xhdGlvbiB0b1xuICAgIC8vIGNsZWFuIHVwLCBzbyB3ZSdyZSBnb2luZyB0byBzdG9wIGhvbm9yaW5nIHRoZSBuYW1lIG9mIHRoaXMgbWV0aG9kXG4gICAgLy8gKGFuZCBwcm9iYWJseSByZW5hbWUgaXQgZXZlbnR1YWxseSkgaWYgbm8gcHJvYmxlbXMgYXJpc2UuXG4gICAgLy8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGRpdik7XG4gICAgcmV0dXJuIFJlYWN0RE9NLnJlbmRlcihlbGVtZW50LCBkaXYpO1xuICB9LFxuXG4gIGlzRWxlbWVudDogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gUmVhY3QuaXNWYWxpZEVsZW1lbnQoZWxlbWVudCk7XG4gIH0sXG5cbiAgaXNFbGVtZW50T2ZUeXBlOiBmdW5jdGlvbiAoaW5zdCwgY29udmVuaWVuY2VDb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBSZWFjdC5pc1ZhbGlkRWxlbWVudChpbnN0KSAmJiBpbnN0LnR5cGUgPT09IGNvbnZlbmllbmNlQ29uc3RydWN0b3I7XG4gIH0sXG5cbiAgaXNET01Db21wb25lbnQ6IGZ1bmN0aW9uIChpbnN0KSB7XG4gICAgcmV0dXJuICEhKGluc3QgJiYgaW5zdC5ub2RlVHlwZSA9PT0gMSAmJiBpbnN0LnRhZ05hbWUpO1xuICB9LFxuXG4gIGlzRE9NQ29tcG9uZW50RWxlbWVudDogZnVuY3Rpb24gKGluc3QpIHtcbiAgICByZXR1cm4gISEoaW5zdCAmJiBSZWFjdC5pc1ZhbGlkRWxlbWVudChpbnN0KSAmJiAhIWluc3QudGFnTmFtZSk7XG4gIH0sXG5cbiAgaXNDb21wb3NpdGVDb21wb25lbnQ6IGZ1bmN0aW9uIChpbnN0KSB7XG4gICAgaWYgKFJlYWN0VGVzdFV0aWxzLmlzRE9NQ29tcG9uZW50KGluc3QpKSB7XG4gICAgICAvLyBBY2Nlc3NpbmcgaW5zdC5zZXRTdGF0ZSB3YXJuczsganVzdCByZXR1cm4gZmFsc2UgYXMgdGhhdCdsbCBiZSB3aGF0XG4gICAgICAvLyB0aGlzIHJldHVybnMgd2hlbiB3ZSBoYXZlIERPTSBub2RlcyBhcyByZWZzIGRpcmVjdGx5XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBpbnN0ICE9IG51bGwgJiYgdHlwZW9mIGluc3QucmVuZGVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBpbnN0LnNldFN0YXRlID09PSAnZnVuY3Rpb24nO1xuICB9LFxuXG4gIGlzQ29tcG9zaXRlQ29tcG9uZW50V2l0aFR5cGU6IGZ1bmN0aW9uIChpbnN0LCB0eXBlKSB7XG4gICAgaWYgKCFSZWFjdFRlc3RVdGlscy5pc0NvbXBvc2l0ZUNvbXBvbmVudChpbnN0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgaW50ZXJuYWxJbnN0YW5jZSA9IFJlYWN0SW5zdGFuY2VNYXAuZ2V0KGluc3QpO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGludGVybmFsSW5zdGFuY2UuX2N1cnJlbnRFbGVtZW50LnR5cGU7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3IgPT09IHR5cGU7XG4gIH0sXG5cbiAgaXNDb21wb3NpdGVDb21wb25lbnRFbGVtZW50OiBmdW5jdGlvbiAoaW5zdCkge1xuICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoaW5zdCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gV2UgY2hlY2sgdGhlIHByb3RvdHlwZSBvZiB0aGUgdHlwZSB0aGF0IHdpbGwgZ2V0IG1vdW50ZWQsIG5vdCB0aGVcbiAgICAvLyBpbnN0YW5jZSBpdHNlbGYuIFRoaXMgaXMgYSBmdXR1cmUgcHJvb2Ygd2F5IG9mIGR1Y2sgdHlwaW5nLlxuICAgIHZhciBwcm90b3R5cGUgPSBpbnN0LnR5cGUucHJvdG90eXBlO1xuICAgIHJldHVybiB0eXBlb2YgcHJvdG90eXBlLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcHJvdG90eXBlLnNldFN0YXRlID09PSAnZnVuY3Rpb24nO1xuICB9LFxuXG4gIGlzQ29tcG9zaXRlQ29tcG9uZW50RWxlbWVudFdpdGhUeXBlOiBmdW5jdGlvbiAoaW5zdCwgdHlwZSkge1xuICAgIHZhciBpbnRlcm5hbEluc3RhbmNlID0gUmVhY3RJbnN0YW5jZU1hcC5nZXQoaW5zdCk7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gaW50ZXJuYWxJbnN0YW5jZS5fY3VycmVudEVsZW1lbnQudHlwZTtcblxuICAgIHJldHVybiAhIShSZWFjdFRlc3RVdGlscy5pc0NvbXBvc2l0ZUNvbXBvbmVudEVsZW1lbnQoaW5zdCkgJiYgY29uc3RydWN0b3IgPT09IHR5cGUpO1xuICB9LFxuXG4gIGdldFJlbmRlcmVkQ2hpbGRPZkNvbXBvc2l0ZUNvbXBvbmVudDogZnVuY3Rpb24gKGluc3QpIHtcbiAgICBpZiAoIVJlYWN0VGVzdFV0aWxzLmlzQ29tcG9zaXRlQ29tcG9uZW50KGluc3QpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGludGVybmFsSW5zdGFuY2UgPSBSZWFjdEluc3RhbmNlTWFwLmdldChpbnN0KTtcbiAgICByZXR1cm4gaW50ZXJuYWxJbnN0YW5jZS5fcmVuZGVyZWRDb21wb25lbnQuZ2V0UHVibGljSW5zdGFuY2UoKTtcbiAgfSxcblxuICBmaW5kQWxsSW5SZW5kZXJlZFRyZWU6IGZ1bmN0aW9uIChpbnN0LCB0ZXN0KSB7XG4gICAgaWYgKCFpbnN0KSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgICFSZWFjdFRlc3RVdGlscy5pc0NvbXBvc2l0ZUNvbXBvbmVudChpbnN0KSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdmaW5kQWxsSW5SZW5kZXJlZFRyZWUoLi4uKTogaW5zdGFuY2UgbXVzdCBiZSBhIGNvbXBvc2l0ZSBjb21wb25lbnQnKSA6IF9wcm9kSW52YXJpYW50KCcxMCcpIDogdm9pZCAwO1xuICAgIHJldHVybiBmaW5kQWxsSW5SZW5kZXJlZFRyZWVJbnRlcm5hbChSZWFjdEluc3RhbmNlTWFwLmdldChpbnN0KSwgdGVzdCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZpbmRzIGFsbCBpbnN0YW5jZSBvZiBjb21wb25lbnRzIGluIHRoZSByZW5kZXJlZCB0cmVlIHRoYXQgYXJlIERPTVxuICAgKiBjb21wb25lbnRzIHdpdGggdGhlIGNsYXNzIG5hbWUgbWF0Y2hpbmcgYGNsYXNzTmFtZWAuXG4gICAqIEByZXR1cm4ge2FycmF5fSBhbiBhcnJheSBvZiBhbGwgdGhlIG1hdGNoZXMuXG4gICAqL1xuICBzY3J5UmVuZGVyZWRET01Db21wb25lbnRzV2l0aENsYXNzOiBmdW5jdGlvbiAocm9vdCwgY2xhc3NOYW1lcykge1xuICAgIHJldHVybiBSZWFjdFRlc3RVdGlscy5maW5kQWxsSW5SZW5kZXJlZFRyZWUocm9vdCwgZnVuY3Rpb24gKGluc3QpIHtcbiAgICAgIGlmIChSZWFjdFRlc3RVdGlscy5pc0RPTUNvbXBvbmVudChpbnN0KSkge1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gaW5zdC5jbGFzc05hbWU7XG4gICAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIC8vIFNWRywgcHJvYmFibHkuXG4gICAgICAgICAgY2xhc3NOYW1lID0gaW5zdC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNsYXNzTGlzdCA9IGNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pO1xuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjbGFzc05hbWVzKSkge1xuICAgICAgICAgICEoY2xhc3NOYW1lcyAhPT0gdW5kZWZpbmVkKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdUZXN0VXRpbHMuc2NyeVJlbmRlcmVkRE9NQ29tcG9uZW50c1dpdGhDbGFzcyBleHBlY3RzIGEgY2xhc3NOYW1lIGFzIGEgc2Vjb25kIGFyZ3VtZW50LicpIDogX3Byb2RJbnZhcmlhbnQoJzExJykgOiB2b2lkIDA7XG4gICAgICAgICAgY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMuc3BsaXQoL1xccysvKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xhc3NOYW1lcy5ldmVyeShmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIHJldHVybiBjbGFzc0xpc3QuaW5kZXhPZihuYW1lKSAhPT0gLTE7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBMaWtlIHNjcnlSZW5kZXJlZERPTUNvbXBvbmVudHNXaXRoQ2xhc3MgYnV0IGV4cGVjdHMgdGhlcmUgdG8gYmUgb25lIHJlc3VsdCxcbiAgICogYW5kIHJldHVybnMgdGhhdCBvbmUgcmVzdWx0LCBvciB0aHJvd3MgZXhjZXB0aW9uIGlmIHRoZXJlIGlzIGFueSBvdGhlclxuICAgKiBudW1iZXIgb2YgbWF0Y2hlcyBiZXNpZGVzIG9uZS5cbiAgICogQHJldHVybiB7IVJlYWN0RE9NQ29tcG9uZW50fSBUaGUgb25lIG1hdGNoLlxuICAgKi9cbiAgZmluZFJlbmRlcmVkRE9NQ29tcG9uZW50V2l0aENsYXNzOiBmdW5jdGlvbiAocm9vdCwgY2xhc3NOYW1lKSB7XG4gICAgdmFyIGFsbCA9IFJlYWN0VGVzdFV0aWxzLnNjcnlSZW5kZXJlZERPTUNvbXBvbmVudHNXaXRoQ2xhc3Mocm9vdCwgY2xhc3NOYW1lKTtcbiAgICBpZiAoYWxsLmxlbmd0aCAhPT0gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaWQgbm90IGZpbmQgZXhhY3RseSBvbmUgbWF0Y2ggKGZvdW5kOiAnICsgYWxsLmxlbmd0aCArICcpICcgKyAnZm9yIGNsYXNzOicgKyBjbGFzc05hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gYWxsWzBdO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGaW5kcyBhbGwgaW5zdGFuY2Ugb2YgY29tcG9uZW50cyBpbiB0aGUgcmVuZGVyZWQgdHJlZSB0aGF0IGFyZSBET01cbiAgICogY29tcG9uZW50cyB3aXRoIHRoZSB0YWcgbmFtZSBtYXRjaGluZyBgdGFnTmFtZWAuXG4gICAqIEByZXR1cm4ge2FycmF5fSBhbiBhcnJheSBvZiBhbGwgdGhlIG1hdGNoZXMuXG4gICAqL1xuICBzY3J5UmVuZGVyZWRET01Db21wb25lbnRzV2l0aFRhZzogZnVuY3Rpb24gKHJvb3QsIHRhZ05hbWUpIHtcbiAgICByZXR1cm4gUmVhY3RUZXN0VXRpbHMuZmluZEFsbEluUmVuZGVyZWRUcmVlKHJvb3QsIGZ1bmN0aW9uIChpbnN0KSB7XG4gICAgICByZXR1cm4gUmVhY3RUZXN0VXRpbHMuaXNET01Db21wb25lbnQoaW5zdCkgJiYgaW5zdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09IHRhZ05hbWUudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogTGlrZSBzY3J5UmVuZGVyZWRET01Db21wb25lbnRzV2l0aFRhZyBidXQgZXhwZWN0cyB0aGVyZSB0byBiZSBvbmUgcmVzdWx0LFxuICAgKiBhbmQgcmV0dXJucyB0aGF0IG9uZSByZXN1bHQsIG9yIHRocm93cyBleGNlcHRpb24gaWYgdGhlcmUgaXMgYW55IG90aGVyXG4gICAqIG51bWJlciBvZiBtYXRjaGVzIGJlc2lkZXMgb25lLlxuICAgKiBAcmV0dXJuIHshUmVhY3RET01Db21wb25lbnR9IFRoZSBvbmUgbWF0Y2guXG4gICAqL1xuICBmaW5kUmVuZGVyZWRET01Db21wb25lbnRXaXRoVGFnOiBmdW5jdGlvbiAocm9vdCwgdGFnTmFtZSkge1xuICAgIHZhciBhbGwgPSBSZWFjdFRlc3RVdGlscy5zY3J5UmVuZGVyZWRET01Db21wb25lbnRzV2l0aFRhZyhyb290LCB0YWdOYW1lKTtcbiAgICBpZiAoYWxsLmxlbmd0aCAhPT0gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaWQgbm90IGZpbmQgZXhhY3RseSBvbmUgbWF0Y2ggKGZvdW5kOiAnICsgYWxsLmxlbmd0aCArICcpICcgKyAnZm9yIHRhZzonICsgdGFnTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBhbGxbMF07XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZpbmRzIGFsbCBpbnN0YW5jZXMgb2YgY29tcG9uZW50cyB3aXRoIHR5cGUgZXF1YWwgdG8gYGNvbXBvbmVudFR5cGVgLlxuICAgKiBAcmV0dXJuIHthcnJheX0gYW4gYXJyYXkgb2YgYWxsIHRoZSBtYXRjaGVzLlxuICAgKi9cbiAgc2NyeVJlbmRlcmVkQ29tcG9uZW50c1dpdGhUeXBlOiBmdW5jdGlvbiAocm9vdCwgY29tcG9uZW50VHlwZSkge1xuICAgIHJldHVybiBSZWFjdFRlc3RVdGlscy5maW5kQWxsSW5SZW5kZXJlZFRyZWUocm9vdCwgZnVuY3Rpb24gKGluc3QpIHtcbiAgICAgIHJldHVybiBSZWFjdFRlc3RVdGlscy5pc0NvbXBvc2l0ZUNvbXBvbmVudFdpdGhUeXBlKGluc3QsIGNvbXBvbmVudFR5cGUpO1xuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTYW1lIGFzIGBzY3J5UmVuZGVyZWRDb21wb25lbnRzV2l0aFR5cGVgIGJ1dCBleHBlY3RzIHRoZXJlIHRvIGJlIG9uZSByZXN1bHRcbiAgICogYW5kIHJldHVybnMgdGhhdCBvbmUgcmVzdWx0LCBvciB0aHJvd3MgZXhjZXB0aW9uIGlmIHRoZXJlIGlzIGFueSBvdGhlclxuICAgKiBudW1iZXIgb2YgbWF0Y2hlcyBiZXNpZGVzIG9uZS5cbiAgICogQHJldHVybiB7IVJlYWN0Q29tcG9uZW50fSBUaGUgb25lIG1hdGNoLlxuICAgKi9cbiAgZmluZFJlbmRlcmVkQ29tcG9uZW50V2l0aFR5cGU6IGZ1bmN0aW9uIChyb290LCBjb21wb25lbnRUeXBlKSB7XG4gICAgdmFyIGFsbCA9IFJlYWN0VGVzdFV0aWxzLnNjcnlSZW5kZXJlZENvbXBvbmVudHNXaXRoVHlwZShyb290LCBjb21wb25lbnRUeXBlKTtcbiAgICBpZiAoYWxsLmxlbmd0aCAhPT0gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaWQgbm90IGZpbmQgZXhhY3RseSBvbmUgbWF0Y2ggKGZvdW5kOiAnICsgYWxsLmxlbmd0aCArICcpICcgKyAnZm9yIGNvbXBvbmVudFR5cGU6JyArIGNvbXBvbmVudFR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4gYWxsWzBdO1xuICB9LFxuXG4gIC8qKlxuICAgKiBQYXNzIGEgbW9ja2VkIGNvbXBvbmVudCBtb2R1bGUgdG8gdGhpcyBtZXRob2QgdG8gYXVnbWVudCBpdCB3aXRoXG4gICAqIHVzZWZ1bCBtZXRob2RzIHRoYXQgYWxsb3cgaXQgdG8gYmUgdXNlZCBhcyBhIGR1bW15IFJlYWN0IGNvbXBvbmVudC5cbiAgICogSW5zdGVhZCBvZiByZW5kZXJpbmcgYXMgdXN1YWwsIHRoZSBjb21wb25lbnQgd2lsbCBiZWNvbWUgYSBzaW1wbGVcbiAgICogPGRpdj4gY29udGFpbmluZyBhbnkgcHJvdmlkZWQgY2hpbGRyZW4uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBtb2R1bGUgdGhlIG1vY2sgZnVuY3Rpb24gb2JqZWN0IGV4cG9ydGVkIGZyb20gYVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZSB0aGF0IGRlZmluZXMgdGhlIGNvbXBvbmVudCB0byBiZSBtb2NrZWRcbiAgICogQHBhcmFtIHs/c3RyaW5nfSBtb2NrVGFnTmFtZSBvcHRpb25hbCBkdW1teSByb290IHRhZyBuYW1lIHRvIHJldHVyblxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gcmVuZGVyIG1ldGhvZCAob3ZlcnJpZGVzXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlLm1vY2tUYWdOYW1lIGlmIHByb3ZpZGVkKVxuICAgKiBAcmV0dXJuIHtvYmplY3R9IHRoZSBSZWFjdFRlc3RVdGlscyBvYmplY3QgKGZvciBjaGFpbmluZylcbiAgICovXG4gIG1vY2tDb21wb25lbnQ6IGZ1bmN0aW9uIChtb2R1bGUsIG1vY2tUYWdOYW1lKSB7XG4gICAgbW9ja1RhZ05hbWUgPSBtb2NrVGFnTmFtZSB8fCBtb2R1bGUubW9ja1RhZ05hbWUgfHwgJ2Rpdic7XG5cbiAgICBtb2R1bGUucHJvdG90eXBlLnJlbmRlci5tb2NrSW1wbGVtZW50YXRpb24oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobW9ja1RhZ05hbWUsIG51bGwsIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNpbXVsYXRlcyBhIHRvcCBsZXZlbCBldmVudCBiZWluZyBkaXNwYXRjaGVkIGZyb20gYSByYXcgZXZlbnQgdGhhdCBvY2N1cnJlZFxuICAgKiBvbiBhbiBgRWxlbWVudGAgbm9kZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHRvcExldmVsVHlwZSBBIHR5cGUgZnJvbSBgRXZlbnRDb25zdGFudHMudG9wTGV2ZWxUeXBlc2BcbiAgICogQHBhcmFtIHshRWxlbWVudH0gbm9kZSBUaGUgZG9tIHRvIHNpbXVsYXRlIGFuIGV2ZW50IG9jY3VycmluZyBvbi5cbiAgICogQHBhcmFtIHs/RXZlbnR9IGZha2VOYXRpdmVFdmVudCBGYWtlIG5hdGl2ZSBldmVudCB0byB1c2UgaW4gU3ludGhldGljRXZlbnQuXG4gICAqL1xuICBzaW11bGF0ZU5hdGl2ZUV2ZW50T25Ob2RlOiBmdW5jdGlvbiAodG9wTGV2ZWxUeXBlLCBub2RlLCBmYWtlTmF0aXZlRXZlbnQpIHtcbiAgICBmYWtlTmF0aXZlRXZlbnQudGFyZ2V0ID0gbm9kZTtcbiAgICBSZWFjdEJyb3dzZXJFdmVudEVtaXR0ZXIuUmVhY3RFdmVudExpc3RlbmVyLmRpc3BhdGNoRXZlbnQodG9wTGV2ZWxUeXBlLCBmYWtlTmF0aXZlRXZlbnQpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTaW11bGF0ZXMgYSB0b3AgbGV2ZWwgZXZlbnQgYmVpbmcgZGlzcGF0Y2hlZCBmcm9tIGEgcmF3IGV2ZW50IHRoYXQgb2NjdXJyZWRcbiAgICogb24gdGhlIGBSZWFjdERPTUNvbXBvbmVudGAgYGNvbXBgLlxuICAgKiBAcGFyYW0ge09iamVjdH0gdG9wTGV2ZWxUeXBlIEEgdHlwZSBmcm9tIGBFdmVudENvbnN0YW50cy50b3BMZXZlbFR5cGVzYC5cbiAgICogQHBhcmFtIHshUmVhY3RET01Db21wb25lbnR9IGNvbXBcbiAgICogQHBhcmFtIHs/RXZlbnR9IGZha2VOYXRpdmVFdmVudCBGYWtlIG5hdGl2ZSBldmVudCB0byB1c2UgaW4gU3ludGhldGljRXZlbnQuXG4gICAqL1xuICBzaW11bGF0ZU5hdGl2ZUV2ZW50T25ET01Db21wb25lbnQ6IGZ1bmN0aW9uICh0b3BMZXZlbFR5cGUsIGNvbXAsIGZha2VOYXRpdmVFdmVudCkge1xuICAgIFJlYWN0VGVzdFV0aWxzLnNpbXVsYXRlTmF0aXZlRXZlbnRPbk5vZGUodG9wTGV2ZWxUeXBlLCBmaW5kRE9NTm9kZShjb21wKSwgZmFrZU5hdGl2ZUV2ZW50KTtcbiAgfSxcblxuICBuYXRpdmVUb3VjaERhdGE6IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdWNoZXM6IFt7IHBhZ2VYOiB4LCBwYWdlWTogeSB9XVxuICAgIH07XG4gIH0sXG5cbiAgY3JlYXRlUmVuZGVyZXI6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFJlYWN0U2hhbGxvd1JlbmRlcmVyKCk7XG4gIH0sXG5cbiAgU2ltdWxhdGU6IG51bGwsXG4gIFNpbXVsYXRlTmF0aXZlOiB7fVxufTtcblxuLyoqXG4gKiBFeHBvcnRzOlxuICpcbiAqIC0gYFJlYWN0VGVzdFV0aWxzLlNpbXVsYXRlLmNsaWNrKEVsZW1lbnQvUmVhY3RET01Db21wb25lbnQpYFxuICogLSBgUmVhY3RUZXN0VXRpbHMuU2ltdWxhdGUubW91c2VNb3ZlKEVsZW1lbnQvUmVhY3RET01Db21wb25lbnQpYFxuICogLSBgUmVhY3RUZXN0VXRpbHMuU2ltdWxhdGUuY2hhbmdlKEVsZW1lbnQvUmVhY3RET01Db21wb25lbnQpYFxuICogLSAuLi4gKEFsbCBrZXlzIGZyb20gZXZlbnQgcGx1Z2luIGBldmVudFR5cGVzYCBvYmplY3RzKVxuICovXG5mdW5jdGlvbiBtYWtlU2ltdWxhdG9yKGV2ZW50VHlwZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGRvbUNvbXBvbmVudE9yTm9kZSwgZXZlbnREYXRhKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgISFSZWFjdC5pc1ZhbGlkRWxlbWVudChkb21Db21wb25lbnRPck5vZGUpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ1Rlc3RVdGlscy5TaW11bGF0ZSBleHBlY3RzIGEgY29tcG9uZW50IGluc3RhbmNlIGFuZCBub3QgYSBSZWFjdEVsZW1lbnQuVGVzdFV0aWxzLlNpbXVsYXRlIHdpbGwgbm90IHdvcmsgaWYgeW91IGFyZSB1c2luZyBzaGFsbG93IHJlbmRlcmluZy4nKSA6IF9wcm9kSW52YXJpYW50KCcxNCcpIDogdm9pZCAwO1xuICAgIGlmIChSZWFjdFRlc3RVdGlscy5pc0RPTUNvbXBvbmVudChkb21Db21wb25lbnRPck5vZGUpKSB7XG4gICAgICBub2RlID0gZmluZERPTU5vZGUoZG9tQ29tcG9uZW50T3JOb2RlKTtcbiAgICB9IGVsc2UgaWYgKGRvbUNvbXBvbmVudE9yTm9kZS50YWdOYW1lKSB7XG4gICAgICBub2RlID0gZG9tQ29tcG9uZW50T3JOb2RlO1xuICAgIH1cblxuICAgIHZhciBkaXNwYXRjaENvbmZpZyA9IEV2ZW50UGx1Z2luUmVnaXN0cnkuZXZlbnROYW1lRGlzcGF0Y2hDb25maWdzW2V2ZW50VHlwZV07XG5cbiAgICB2YXIgZmFrZU5hdGl2ZUV2ZW50ID0gbmV3IEV2ZW50KCk7XG4gICAgZmFrZU5hdGl2ZUV2ZW50LnRhcmdldCA9IG5vZGU7XG4gICAgZmFrZU5hdGl2ZUV2ZW50LnR5cGUgPSBldmVudFR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIFdlIGRvbid0IHVzZSBTeW50aGV0aWNFdmVudC5nZXRQb29sZWQgaW4gb3JkZXIgdG8gbm90IGhhdmUgdG8gd29ycnkgYWJvdXRcbiAgICAvLyBwcm9wZXJseSBkZXN0cm95aW5nIGFueSBwcm9wZXJ0aWVzIGFzc2lnbmVkIGZyb20gYGV2ZW50RGF0YWAgdXBvbiByZWxlYXNlXG4gICAgdmFyIGV2ZW50ID0gbmV3IFN5bnRoZXRpY0V2ZW50KGRpc3BhdGNoQ29uZmlnLCBSZWFjdERPTUNvbXBvbmVudFRyZWUuZ2V0SW5zdGFuY2VGcm9tTm9kZShub2RlKSwgZmFrZU5hdGl2ZUV2ZW50LCBub2RlKTtcbiAgICAvLyBTaW5jZSB3ZSBhcmVuJ3QgdXNpbmcgcG9vbGluZywgYWx3YXlzIHBlcnNpc3QgdGhlIGV2ZW50LiBUaGlzIHdpbGwgbWFrZVxuICAgIC8vIHN1cmUgaXQncyBtYXJrZWQgYW5kIHdvbid0IHdhcm4gd2hlbiBzZXR0aW5nIGFkZGl0aW9uYWwgcHJvcGVydGllcy5cbiAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgX2Fzc2lnbihldmVudCwgZXZlbnREYXRhKTtcblxuICAgIGlmIChkaXNwYXRjaENvbmZpZy5waGFzZWRSZWdpc3RyYXRpb25OYW1lcykge1xuICAgICAgRXZlbnRQcm9wYWdhdG9ycy5hY2N1bXVsYXRlVHdvUGhhc2VEaXNwYXRjaGVzKGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRQcm9wYWdhdG9ycy5hY2N1bXVsYXRlRGlyZWN0RGlzcGF0Y2hlcyhldmVudCk7XG4gICAgfVxuXG4gICAgUmVhY3RVcGRhdGVzLmJhdGNoZWRVcGRhdGVzKGZ1bmN0aW9uICgpIHtcbiAgICAgIEV2ZW50UGx1Z2luSHViLmVucXVldWVFdmVudHMoZXZlbnQpO1xuICAgICAgRXZlbnRQbHVnaW5IdWIucHJvY2Vzc0V2ZW50UXVldWUodHJ1ZSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkU2ltdWxhdG9ycygpIHtcbiAgUmVhY3RUZXN0VXRpbHMuU2ltdWxhdGUgPSB7fTtcblxuICB2YXIgZXZlbnRUeXBlO1xuICBmb3IgKGV2ZW50VHlwZSBpbiBFdmVudFBsdWdpblJlZ2lzdHJ5LmV2ZW50TmFtZURpc3BhdGNoQ29uZmlncykge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7IUVsZW1lbnR8UmVhY3RET01Db21wb25lbnR9IGRvbUNvbXBvbmVudE9yTm9kZVxuICAgICAqIEBwYXJhbSB7P29iamVjdH0gZXZlbnREYXRhIEZha2UgZXZlbnQgZGF0YSB0byB1c2UgaW4gU3ludGhldGljRXZlbnQuXG4gICAgICovXG4gICAgUmVhY3RUZXN0VXRpbHMuU2ltdWxhdGVbZXZlbnRUeXBlXSA9IG1ha2VTaW11bGF0b3IoZXZlbnRUeXBlKTtcbiAgfVxufVxuXG4vLyBSZWJ1aWxkIFJlYWN0VGVzdFV0aWxzLlNpbXVsYXRlIHdoZW5ldmVyIGV2ZW50IHBsdWdpbnMgYXJlIGluamVjdGVkXG52YXIgb2xkSW5qZWN0RXZlbnRQbHVnaW5PcmRlciA9IEV2ZW50UGx1Z2luSHViLmluamVjdGlvbi5pbmplY3RFdmVudFBsdWdpbk9yZGVyO1xuRXZlbnRQbHVnaW5IdWIuaW5qZWN0aW9uLmluamVjdEV2ZW50UGx1Z2luT3JkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIG9sZEluamVjdEV2ZW50UGx1Z2luT3JkZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgYnVpbGRTaW11bGF0b3JzKCk7XG59O1xudmFyIG9sZEluamVjdEV2ZW50UGx1Z2lucyA9IEV2ZW50UGx1Z2luSHViLmluamVjdGlvbi5pbmplY3RFdmVudFBsdWdpbnNCeU5hbWU7XG5FdmVudFBsdWdpbkh1Yi5pbmplY3Rpb24uaW5qZWN0RXZlbnRQbHVnaW5zQnlOYW1lID0gZnVuY3Rpb24gKCkge1xuICBvbGRJbmplY3RFdmVudFBsdWdpbnMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgYnVpbGRTaW11bGF0b3JzKCk7XG59O1xuXG5idWlsZFNpbXVsYXRvcnMoKTtcblxuLyoqXG4gKiBFeHBvcnRzOlxuICpcbiAqIC0gYFJlYWN0VGVzdFV0aWxzLlNpbXVsYXRlTmF0aXZlLmNsaWNrKEVsZW1lbnQvUmVhY3RET01Db21wb25lbnQpYFxuICogLSBgUmVhY3RUZXN0VXRpbHMuU2ltdWxhdGVOYXRpdmUubW91c2VNb3ZlKEVsZW1lbnQvUmVhY3RET01Db21wb25lbnQpYFxuICogLSBgUmVhY3RUZXN0VXRpbHMuU2ltdWxhdGVOYXRpdmUubW91c2VJbi9SZWFjdERPTUNvbXBvbmVudClgXG4gKiAtIGBSZWFjdFRlc3RVdGlscy5TaW11bGF0ZU5hdGl2ZS5tb3VzZU91dChFbGVtZW50L1JlYWN0RE9NQ29tcG9uZW50KWBcbiAqIC0gLi4uIChBbGwga2V5cyBmcm9tIGBFdmVudENvbnN0YW50cy50b3BMZXZlbFR5cGVzYClcbiAqXG4gKiBOb3RlOiBUb3AgbGV2ZWwgZXZlbnQgdHlwZXMgYXJlIGEgc3Vic2V0IG9mIHRoZSBlbnRpcmUgc2V0IG9mIGhhbmRsZXIgdHlwZXNcbiAqICh3aGljaCBpbmNsdWRlIGEgYnJvYWRlciBzZXQgb2YgXCJzeW50aGV0aWNcIiBldmVudHMpLiBGb3IgZXhhbXBsZSwgb25EcmFnRG9uZVxuICogaXMgYSBzeW50aGV0aWMgZXZlbnQuIEV4Y2VwdCB3aGVuIHRlc3RpbmcgYW4gZXZlbnQgcGx1Z2luIG9yIFJlYWN0J3MgZXZlbnRcbiAqIGhhbmRsaW5nIGNvZGUgc3BlY2lmaWNhbGx5LCB5b3UgcHJvYmFibHkgd2FudCB0byB1c2UgUmVhY3RUZXN0VXRpbHMuU2ltdWxhdGVcbiAqIHRvIGRpc3BhdGNoIHN5bnRoZXRpYyBldmVudHMuXG4gKi9cblxuZnVuY3Rpb24gbWFrZU5hdGl2ZVNpbXVsYXRvcihldmVudFR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkb21Db21wb25lbnRPck5vZGUsIG5hdGl2ZUV2ZW50RGF0YSkge1xuICAgIHZhciBmYWtlTmF0aXZlRXZlbnQgPSBuZXcgRXZlbnQoZXZlbnRUeXBlKTtcbiAgICBfYXNzaWduKGZha2VOYXRpdmVFdmVudCwgbmF0aXZlRXZlbnREYXRhKTtcbiAgICBpZiAoUmVhY3RUZXN0VXRpbHMuaXNET01Db21wb25lbnQoZG9tQ29tcG9uZW50T3JOb2RlKSkge1xuICAgICAgUmVhY3RUZXN0VXRpbHMuc2ltdWxhdGVOYXRpdmVFdmVudE9uRE9NQ29tcG9uZW50KGV2ZW50VHlwZSwgZG9tQ29tcG9uZW50T3JOb2RlLCBmYWtlTmF0aXZlRXZlbnQpO1xuICAgIH0gZWxzZSBpZiAoZG9tQ29tcG9uZW50T3JOb2RlLnRhZ05hbWUpIHtcbiAgICAgIC8vIFdpbGwgYWxsb3cgb24gYWN0dWFsIGRvbSBub2Rlcy5cbiAgICAgIFJlYWN0VGVzdFV0aWxzLnNpbXVsYXRlTmF0aXZlRXZlbnRPbk5vZGUoZXZlbnRUeXBlLCBkb21Db21wb25lbnRPck5vZGUsIGZha2VOYXRpdmVFdmVudCk7XG4gICAgfVxuICB9O1xufVxuXG5PYmplY3Qua2V5cyh0b3BMZXZlbFR5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudFR5cGUpIHtcbiAgLy8gRXZlbnQgdHlwZSBpcyBzdG9yZWQgYXMgJ3RvcENsaWNrJyAtIHdlIHRyYW5zZm9ybSB0aGF0IHRvICdjbGljaydcbiAgdmFyIGNvbnZlbmllbmNlTmFtZSA9IGV2ZW50VHlwZS5pbmRleE9mKCd0b3AnKSA9PT0gMCA/IGV2ZW50VHlwZS5jaGFyQXQoMykudG9Mb3dlckNhc2UoKSArIGV2ZW50VHlwZS5zdWJzdHIoNCkgOiBldmVudFR5cGU7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fFJlYWN0RE9NQ29tcG9uZW50fSBkb21Db21wb25lbnRPck5vZGVcbiAgICogQHBhcmFtIHs/RXZlbnR9IG5hdGl2ZUV2ZW50RGF0YSBGYWtlIG5hdGl2ZSBldmVudCB0byB1c2UgaW4gU3ludGhldGljRXZlbnQuXG4gICAqL1xuICBSZWFjdFRlc3RVdGlscy5TaW11bGF0ZU5hdGl2ZVtjb252ZW5pZW5jZU5hbWVdID0gbWFrZU5hdGl2ZVNpbXVsYXRvcihldmVudFR5cGUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RUZXN0VXRpbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWRvbS9saWIvUmVhY3RUZXN0VXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDMwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFR5cGVzIG9mIHJhdyBzaWduYWxzIGZyb20gdGhlIGJyb3dzZXIgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWwuXG4gKi9cbnZhciB0b3BMZXZlbFR5cGVzID0ge1xuICB0b3BBYm9ydDogbnVsbCxcbiAgdG9wQW5pbWF0aW9uRW5kOiBudWxsLFxuICB0b3BBbmltYXRpb25JdGVyYXRpb246IG51bGwsXG4gIHRvcEFuaW1hdGlvblN0YXJ0OiBudWxsLFxuICB0b3BCbHVyOiBudWxsLFxuICB0b3BDYW5QbGF5OiBudWxsLFxuICB0b3BDYW5QbGF5VGhyb3VnaDogbnVsbCxcbiAgdG9wQ2hhbmdlOiBudWxsLFxuICB0b3BDbGljazogbnVsbCxcbiAgdG9wQ29tcG9zaXRpb25FbmQ6IG51bGwsXG4gIHRvcENvbXBvc2l0aW9uU3RhcnQ6IG51bGwsXG4gIHRvcENvbXBvc2l0aW9uVXBkYXRlOiBudWxsLFxuICB0b3BDb250ZXh0TWVudTogbnVsbCxcbiAgdG9wQ29weTogbnVsbCxcbiAgdG9wQ3V0OiBudWxsLFxuICB0b3BEb3VibGVDbGljazogbnVsbCxcbiAgdG9wRHJhZzogbnVsbCxcbiAgdG9wRHJhZ0VuZDogbnVsbCxcbiAgdG9wRHJhZ0VudGVyOiBudWxsLFxuICB0b3BEcmFnRXhpdDogbnVsbCxcbiAgdG9wRHJhZ0xlYXZlOiBudWxsLFxuICB0b3BEcmFnT3ZlcjogbnVsbCxcbiAgdG9wRHJhZ1N0YXJ0OiBudWxsLFxuICB0b3BEcm9wOiBudWxsLFxuICB0b3BEdXJhdGlvbkNoYW5nZTogbnVsbCxcbiAgdG9wRW1wdGllZDogbnVsbCxcbiAgdG9wRW5jcnlwdGVkOiBudWxsLFxuICB0b3BFbmRlZDogbnVsbCxcbiAgdG9wRXJyb3I6IG51bGwsXG4gIHRvcEZvY3VzOiBudWxsLFxuICB0b3BJbnB1dDogbnVsbCxcbiAgdG9wSW52YWxpZDogbnVsbCxcbiAgdG9wS2V5RG93bjogbnVsbCxcbiAgdG9wS2V5UHJlc3M6IG51bGwsXG4gIHRvcEtleVVwOiBudWxsLFxuICB0b3BMb2FkOiBudWxsLFxuICB0b3BMb2FkZWREYXRhOiBudWxsLFxuICB0b3BMb2FkZWRNZXRhZGF0YTogbnVsbCxcbiAgdG9wTG9hZFN0YXJ0OiBudWxsLFxuICB0b3BNb3VzZURvd246IG51bGwsXG4gIHRvcE1vdXNlTW92ZTogbnVsbCxcbiAgdG9wTW91c2VPdXQ6IG51bGwsXG4gIHRvcE1vdXNlT3ZlcjogbnVsbCxcbiAgdG9wTW91c2VVcDogbnVsbCxcbiAgdG9wUGFzdGU6IG51bGwsXG4gIHRvcFBhdXNlOiBudWxsLFxuICB0b3BQbGF5OiBudWxsLFxuICB0b3BQbGF5aW5nOiBudWxsLFxuICB0b3BQcm9ncmVzczogbnVsbCxcbiAgdG9wUmF0ZUNoYW5nZTogbnVsbCxcbiAgdG9wUmVzZXQ6IG51bGwsXG4gIHRvcFNjcm9sbDogbnVsbCxcbiAgdG9wU2Vla2VkOiBudWxsLFxuICB0b3BTZWVraW5nOiBudWxsLFxuICB0b3BTZWxlY3Rpb25DaGFuZ2U6IG51bGwsXG4gIHRvcFN0YWxsZWQ6IG51bGwsXG4gIHRvcFN1Ym1pdDogbnVsbCxcbiAgdG9wU3VzcGVuZDogbnVsbCxcbiAgdG9wVGV4dElucHV0OiBudWxsLFxuICB0b3BUaW1lVXBkYXRlOiBudWxsLFxuICB0b3BUb3VjaENhbmNlbDogbnVsbCxcbiAgdG9wVG91Y2hFbmQ6IG51bGwsXG4gIHRvcFRvdWNoTW92ZTogbnVsbCxcbiAgdG9wVG91Y2hTdGFydDogbnVsbCxcbiAgdG9wVHJhbnNpdGlvbkVuZDogbnVsbCxcbiAgdG9wVm9sdW1lQ2hhbmdlOiBudWxsLFxuICB0b3BXYWl0aW5nOiBudWxsLFxuICB0b3BXaGVlbDogbnVsbFxufTtcblxudmFyIEV2ZW50Q29uc3RhbnRzID0ge1xuICB0b3BMZXZlbFR5cGVzOiB0b3BMZXZlbFR5cGVzXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50Q29uc3RhbnRzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1kb20vbGliL0V2ZW50Q29uc3RhbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9wcm9kSW52YXJpYW50ID0gcmVxdWlyZSgnLi9yZWFjdFByb2RJbnZhcmlhbnQnKSxcbiAgICBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdC9saWIvUmVhY3QnKTtcbnZhciBSZWFjdERlZmF1bHRJbmplY3Rpb24gPSByZXF1aXJlKCcuL1JlYWN0RGVmYXVsdEluamVjdGlvbicpO1xudmFyIFJlYWN0Q29tcG9zaXRlQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9SZWFjdENvbXBvc2l0ZUNvbXBvbmVudCcpO1xudmFyIFJlYWN0UmVjb25jaWxlciA9IHJlcXVpcmUoJy4vUmVhY3RSZWNvbmNpbGVyJyk7XG52YXIgUmVhY3RVcGRhdGVzID0gcmVxdWlyZSgnLi9SZWFjdFVwZGF0ZXMnKTtcblxudmFyIGVtcHR5T2JqZWN0ID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlPYmplY3QnKTtcbnZhciBnZXROZXh0RGVidWdJRCA9IHJlcXVpcmUoJy4vZ2V0TmV4dERlYnVnSUQnKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcblxudmFyIE5vb3BJbnRlcm5hbENvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gTm9vcEludGVybmFsQ29tcG9uZW50KGVsZW1lbnQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm9vcEludGVybmFsQ29tcG9uZW50KTtcblxuICAgIHRoaXMuX3JlbmRlcmVkT3V0cHV0ID0gZWxlbWVudDtcbiAgICB0aGlzLl9jdXJyZW50RWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhpcy5fZGVidWdJRCA9IGdldE5leHREZWJ1Z0lEKCk7XG4gICAgfVxuICB9XG5cbiAgTm9vcEludGVybmFsQ29tcG9uZW50LnByb3RvdHlwZS5tb3VudENvbXBvbmVudCA9IGZ1bmN0aW9uIG1vdW50Q29tcG9uZW50KCkge307XG5cbiAgTm9vcEludGVybmFsQ29tcG9uZW50LnByb3RvdHlwZS5yZWNlaXZlQ29tcG9uZW50ID0gZnVuY3Rpb24gcmVjZWl2ZUNvbXBvbmVudChlbGVtZW50KSB7XG4gICAgdGhpcy5fcmVuZGVyZWRPdXRwdXQgPSBlbGVtZW50O1xuICAgIHRoaXMuX2N1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgfTtcblxuICBOb29wSW50ZXJuYWxDb21wb25lbnQucHJvdG90eXBlLnVubW91bnRDb21wb25lbnQgPSBmdW5jdGlvbiB1bm1vdW50Q29tcG9uZW50KCkge307XG5cbiAgTm9vcEludGVybmFsQ29tcG9uZW50LnByb3RvdHlwZS5nZXRIb3N0Tm9kZSA9IGZ1bmN0aW9uIGdldEhvc3ROb2RlKCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgTm9vcEludGVybmFsQ29tcG9uZW50LnByb3RvdHlwZS5nZXRQdWJsaWNJbnN0YW5jZSA9IGZ1bmN0aW9uIGdldFB1YmxpY0luc3RhbmNlKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBOb29wSW50ZXJuYWxDb21wb25lbnQ7XG59KCk7XG5cbnZhciBTaGFsbG93Q29tcG9uZW50V3JhcHBlciA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIC8vIFRPRE86IENvbnNvbGlkYXRlIHdpdGggaW5zdGFudGlhdGVSZWFjdENvbXBvbmVudFxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHRoaXMuX2RlYnVnSUQgPSBnZXROZXh0RGVidWdJRCgpO1xuICB9XG5cbiAgdGhpcy5jb25zdHJ1Y3QoZWxlbWVudCk7XG59O1xuX2Fzc2lnbihTaGFsbG93Q29tcG9uZW50V3JhcHBlci5wcm90b3R5cGUsIFJlYWN0Q29tcG9zaXRlQ29tcG9uZW50LCB7XG4gIF9jb25zdHJ1Y3RDb21wb25lbnQ6IFJlYWN0Q29tcG9zaXRlQ29tcG9uZW50Ll9jb25zdHJ1Y3RDb21wb25lbnRXaXRob3V0T3duZXIsXG4gIF9pbnN0YW50aWF0ZVJlYWN0Q29tcG9uZW50OiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBuZXcgTm9vcEludGVybmFsQ29tcG9uZW50KGVsZW1lbnQpO1xuICB9LFxuICBfcmVwbGFjZU5vZGVXaXRoTWFya3VwOiBmdW5jdGlvbiAoKSB7fSxcbiAgX3JlbmRlclZhbGlkYXRlZENvbXBvbmVudDogUmVhY3RDb21wb3NpdGVDb21wb25lbnQuX3JlbmRlclZhbGlkYXRlZENvbXBvbmVudFdpdGhvdXRPd25lck9yQ29udGV4dFxufSk7XG5cbmZ1bmN0aW9uIF9iYXRjaGVkUmVuZGVyKHJlbmRlcmVyLCBlbGVtZW50LCBjb250ZXh0KSB7XG4gIHZhciB0cmFuc2FjdGlvbiA9IFJlYWN0VXBkYXRlcy5SZWFjdFJlY29uY2lsZVRyYW5zYWN0aW9uLmdldFBvb2xlZCh0cnVlKTtcbiAgcmVuZGVyZXIuX3JlbmRlcihlbGVtZW50LCB0cmFuc2FjdGlvbiwgY29udGV4dCk7XG4gIFJlYWN0VXBkYXRlcy5SZWFjdFJlY29uY2lsZVRyYW5zYWN0aW9uLnJlbGVhc2UodHJhbnNhY3Rpb24pO1xufVxuXG52YXIgUmVhY3RTaGFsbG93UmVuZGVyZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJlYWN0U2hhbGxvd1JlbmRlcmVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSZWFjdFNoYWxsb3dSZW5kZXJlcik7XG5cbiAgICB0aGlzLl9pbnN0YW5jZSA9IG51bGw7XG4gIH1cblxuICBSZWFjdFNoYWxsb3dSZW5kZXJlci5wcm90b3R5cGUuZ2V0TW91bnRlZEluc3RhbmNlID0gZnVuY3Rpb24gZ2V0TW91bnRlZEluc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZSA/IHRoaXMuX2luc3RhbmNlLl9pbnN0YW5jZSA6IG51bGw7XG4gIH07XG5cbiAgUmVhY3RTaGFsbG93UmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihlbGVtZW50LCBjb250ZXh0KSB7XG4gICAgLy8gRW5zdXJlIHdlJ3ZlIGRvbmUgdGhlIGRlZmF1bHQgaW5qZWN0aW9ucy4gVGhpcyBtaWdodCBub3QgYmUgdHJ1ZSBpbiB0aGVcbiAgICAvLyBjYXNlIG9mIGEgc2ltcGxlIHRlc3QgdGhhdCBvbmx5IHJlcXVpcmVzIFJlYWN0IGFuZCB0aGUgVGVzdFV0aWxzIGluXG4gICAgLy8gY29uanVuY3Rpb24gd2l0aCBhbiBpbmxpbmUtcmVxdWlyZXMgdHJhbnNmb3JtLlxuICAgIFJlYWN0RGVmYXVsdEluamVjdGlvbi5pbmplY3QoKTtcblxuICAgICFSZWFjdC5pc1ZhbGlkRWxlbWVudChlbGVtZW50KSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdFNoYWxsb3dSZW5kZXJlciByZW5kZXIoKTogSW52YWxpZCBjb21wb25lbnQgZWxlbWVudC4lcycsIHR5cGVvZiBlbGVtZW50ID09PSAnZnVuY3Rpb24nID8gJyBJbnN0ZWFkIG9mIHBhc3NpbmcgYSBjb21wb25lbnQgY2xhc3MsIG1ha2Ugc3VyZSB0byBpbnN0YW50aWF0ZSAnICsgJ2l0IGJ5IHBhc3NpbmcgaXQgdG8gUmVhY3QuY3JlYXRlRWxlbWVudC4nIDogJycpIDogX3Byb2RJbnZhcmlhbnQoJzEyJywgdHlwZW9mIGVsZW1lbnQgPT09ICdmdW5jdGlvbicgPyAnIEluc3RlYWQgb2YgcGFzc2luZyBhIGNvbXBvbmVudCBjbGFzcywgbWFrZSBzdXJlIHRvIGluc3RhbnRpYXRlICcgKyAnaXQgYnkgcGFzc2luZyBpdCB0byBSZWFjdC5jcmVhdGVFbGVtZW50LicgOiAnJykgOiB2b2lkIDA7XG4gICAgISh0eXBlb2YgZWxlbWVudC50eXBlICE9PSAnc3RyaW5nJykgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnUmVhY3RTaGFsbG93UmVuZGVyZXIgcmVuZGVyKCk6IFNoYWxsb3cgcmVuZGVyaW5nIHdvcmtzIG9ubHkgd2l0aCBjdXN0b20gY29tcG9uZW50cywgbm90IHByaW1pdGl2ZXMgKCVzKS4gSW5zdGVhZCBvZiBjYWxsaW5nIGAucmVuZGVyKGVsKWAgYW5kIGluc3BlY3RpbmcgdGhlIHJlbmRlcmVkIG91dHB1dCwgbG9vayBhdCBgZWwucHJvcHNgIGRpcmVjdGx5IGluc3RlYWQuJywgZWxlbWVudC50eXBlKSA6IF9wcm9kSW52YXJpYW50KCcxMycsIGVsZW1lbnQudHlwZSkgOiB2b2lkIDA7XG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQgPSBlbXB0eU9iamVjdDtcbiAgICB9XG4gICAgUmVhY3RVcGRhdGVzLmJhdGNoZWRVcGRhdGVzKF9iYXRjaGVkUmVuZGVyLCB0aGlzLCBlbGVtZW50LCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0aGlzLmdldFJlbmRlck91dHB1dCgpO1xuICB9O1xuXG4gIFJlYWN0U2hhbGxvd1JlbmRlcmVyLnByb3RvdHlwZS5nZXRSZW5kZXJPdXRwdXQgPSBmdW5jdGlvbiBnZXRSZW5kZXJPdXRwdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlICYmIHRoaXMuX2luc3RhbmNlLl9yZW5kZXJlZENvbXBvbmVudCAmJiB0aGlzLl9pbnN0YW5jZS5fcmVuZGVyZWRDb21wb25lbnQuX3JlbmRlcmVkT3V0cHV0IHx8IG51bGw7XG4gIH07XG5cbiAgUmVhY3RTaGFsbG93UmVuZGVyZXIucHJvdG90eXBlLnVubW91bnQgPSBmdW5jdGlvbiB1bm1vdW50KCkge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgUmVhY3RSZWNvbmNpbGVyLnVubW91bnRDb21wb25lbnQodGhpcy5faW5zdGFuY2UsIGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgUmVhY3RTaGFsbG93UmVuZGVyZXIucHJvdG90eXBlLl9yZW5kZXIgPSBmdW5jdGlvbiBfcmVuZGVyKGVsZW1lbnQsIHRyYW5zYWN0aW9uLCBjb250ZXh0KSB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICBSZWFjdFJlY29uY2lsZXIucmVjZWl2ZUNvbXBvbmVudCh0aGlzLl9pbnN0YW5jZSwgZWxlbWVudCwgdHJhbnNhY3Rpb24sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgU2hhbGxvd0NvbXBvbmVudFdyYXBwZXIoZWxlbWVudCk7XG4gICAgICBSZWFjdFJlY29uY2lsZXIubW91bnRDb21wb25lbnQoaW5zdGFuY2UsIHRyYW5zYWN0aW9uLCBudWxsLCBudWxsLCBjb250ZXh0LCAwKTtcbiAgICAgIHRoaXMuX2luc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBSZWFjdFNoYWxsb3dSZW5kZXJlcjtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFNoYWxsb3dSZW5kZXJlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZG9tL2xpYi9SZWFjdFNoYWxsb3dSZW5kZXJlci5qc1xuLy8gbW9kdWxlIGlkID0gMzAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJy4vaW52YXJpYW50Jyk7XG5cbi8qKlxuICogVGhlIENTU0NvcmUgbW9kdWxlIHNwZWNpZmllcyB0aGUgQVBJIChhbmQgaW1wbGVtZW50cyBtb3N0IG9mIHRoZSBtZXRob2RzKVxuICogdGhhdCBzaG91bGQgYmUgdXNlZCB3aGVuIGRlYWxpbmcgd2l0aCB0aGUgZGlzcGxheSBvZiBlbGVtZW50cyAodmlhIHRoZWlyXG4gKiBDU1MgY2xhc3NlcyBhbmQgdmlzaWJpbGl0eSBvbiBzY3JlZW4uIEl0IGlzIGFuIEFQSSBmb2N1c2VkIG9uIG11dGF0aW5nIHRoZVxuICogZGlzcGxheSBhbmQgbm90IHJlYWRpbmcgaXQgYXMgbm8gbG9naWNhbCBzdGF0ZSBzaG91bGQgYmUgZW5jb2RlZCBpbiB0aGVcbiAqIGRpc3BsYXkgb2YgZWxlbWVudHMuXG4gKi9cblxuLyogU2xvdyBpbXBsZW1lbnRhdGlvbiBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBuYXRpdmVseSBzdXBwb3J0IC5tYXRjaGVzKCkgKi9cbmZ1bmN0aW9uIG1hdGNoZXNTZWxlY3Rvcl9TTE9XKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIHZhciByb290ID0gZWxlbWVudDtcbiAgd2hpbGUgKHJvb3QucGFyZW50Tm9kZSkge1xuICAgIHJvb3QgPSByb290LnBhcmVudE5vZGU7XG4gIH1cblxuICB2YXIgYWxsID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYWxsLCBlbGVtZW50KSAhPT0gLTE7XG59XG5cbnZhciBDU1NDb3JlID0ge1xuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBjbGFzcyBwYXNzZWQgaW4gdG8gdGhlIGVsZW1lbnQgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGhhdmUgaXQuXG4gICAqXG4gICAqIEBwYXJhbSB7RE9NRWxlbWVudH0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBzZXQgdGhlIGNsYXNzIG9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgdGhlIENTUyBjbGFzc05hbWVcbiAgICogQHJldHVybiB7RE9NRWxlbWVudH0gdGhlIGVsZW1lbnQgcGFzc2VkIGluXG4gICAqL1xuICBhZGRDbGFzczogZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgISEvXFxzLy50ZXN0KGNsYXNzTmFtZSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnQ1NTQ29yZS5hZGRDbGFzcyB0YWtlcyBvbmx5IGEgc2luZ2xlIGNsYXNzIG5hbWUuIFwiJXNcIiBjb250YWlucyAnICsgJ211bHRpcGxlIGNsYXNzZXMuJywgY2xhc3NOYW1lKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG5cbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICB9IGVsc2UgaWYgKCFDU1NDb3JlLmhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZSArICcgJyArIGNsYXNzTmFtZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGNsYXNzIHBhc3NlZCBpbiBmcm9tIHRoZSBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RE9NRWxlbWVudH0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBzZXQgdGhlIGNsYXNzIG9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWUgdGhlIENTUyBjbGFzc05hbWVcbiAgICogQHJldHVybiB7RE9NRWxlbWVudH0gdGhlIGVsZW1lbnQgcGFzc2VkIGluXG4gICAqL1xuICByZW1vdmVDbGFzczogZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gICAgISEvXFxzLy50ZXN0KGNsYXNzTmFtZSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gaW52YXJpYW50KGZhbHNlLCAnQ1NTQ29yZS5yZW1vdmVDbGFzcyB0YWtlcyBvbmx5IGEgc2luZ2xlIGNsYXNzIG5hbWUuIFwiJXNcIiBjb250YWlucyAnICsgJ211bHRpcGxlIGNsYXNzZXMuJywgY2xhc3NOYW1lKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG5cbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9IGVsc2UgaWYgKENTU0NvcmUuaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXHMpJyArIGNsYXNzTmFtZSArICcoPzpcXFxcc3wkKScsICdnJyksICckMScpLnJlcGxhY2UoL1xccysvZywgJyAnKSAvLyBtdWx0aXBsZSBzcGFjZXMgdG8gb25lXG4gICAgICAgIC5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLCAnJyk7IC8vIHRyaW0gdGhlIGVuZHNcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhlbHBlciB0byBhZGQgb3IgcmVtb3ZlIGEgY2xhc3MgZnJvbSBhbiBlbGVtZW50IGJhc2VkIG9uIGEgY29uZGl0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0RPTUVsZW1lbnR9IGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gc2V0IHRoZSBjbGFzcyBvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lIHRoZSBDU1MgY2xhc3NOYW1lXG4gICAqIEBwYXJhbSB7Kn0gYm9vbCBjb25kaXRpb24gdG8gd2hldGhlciB0byBhZGQgb3IgcmVtb3ZlIHRoZSBjbGFzc1xuICAgKiBAcmV0dXJuIHtET01FbGVtZW50fSB0aGUgZWxlbWVudCBwYXNzZWQgaW5cbiAgICovXG4gIGNvbmRpdGlvbkNsYXNzOiBmdW5jdGlvbiBjb25kaXRpb25DbGFzcyhlbGVtZW50LCBjbGFzc05hbWUsIGJvb2wpIHtcbiAgICByZXR1cm4gKGJvb2wgPyBDU1NDb3JlLmFkZENsYXNzIDogQ1NTQ29yZS5yZW1vdmVDbGFzcykoZWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgfSxcblxuICAvKipcbiAgICogVGVzdHMgd2hldGhlciB0aGUgZWxlbWVudCBoYXMgdGhlIGNsYXNzIHNwZWNpZmllZC5cbiAgICpcbiAgICogQHBhcmFtIHtET01Ob2RlfERPTVdpbmRvd30gZWxlbWVudCB0aGUgZWxlbWVudCB0byBjaGVjayB0aGUgY2xhc3Mgb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZSB0aGUgQ1NTIGNsYXNzTmFtZVxuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIHRoZSBlbGVtZW50IGhhcyB0aGUgY2xhc3MsIGZhbHNlIGlmIG5vdFxuICAgKi9cbiAgaGFzQ2xhc3M6IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgICEhL1xccy8udGVzdChjbGFzc05hbWUpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGludmFyaWFudChmYWxzZSwgJ0NTUy5oYXNDbGFzcyB0YWtlcyBvbmx5IGEgc2luZ2xlIGNsYXNzIG5hbWUuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgICAgcmV0dXJuICEhY2xhc3NOYW1lICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiAoJyAnICsgZWxlbWVudC5jbGFzc05hbWUgKyAnICcpLmluZGV4T2YoJyAnICsgY2xhc3NOYW1lICsgJyAnKSA+IC0xO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUZXN0cyB3aGV0aGVyIHRoZSBlbGVtZW50IG1hdGNoZXMgdGhlIHNlbGVjdG9yIHNwZWNpZmllZFxuICAgKlxuICAgKiBAcGFyYW0ge0RPTU5vZGV8RE9NV2luZG93fSBlbGVtZW50IHRoZSBlbGVtZW50IHRoYXQgd2UgYXJlIHF1ZXJ5aW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvciB0aGUgQ1NTIHNlbGVjdG9yXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIGVsZW1lbnQgbWF0Y2hlcyB0aGUgc2VsZWN0b3IsIGZhbHNlIGlmIG5vdFxuICAgKi9cbiAgbWF0Y2hlc1NlbGVjdG9yOiBmdW5jdGlvbiBtYXRjaGVzU2VsZWN0b3IoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB2YXIgbWF0Y2hlc0ltcGwgPSBlbGVtZW50Lm1hdGNoZXMgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbWVudC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvciB8fCBmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIG1hdGNoZXNTZWxlY3Rvcl9TTE9XKGVsZW1lbnQsIHMpO1xuICAgIH07XG4gICAgcmV0dXJuIG1hdGNoZXNJbXBsLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xuICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ1NTQ29yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvQ1NTQ29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMzAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJ2ZianMvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciBnZXRWZW5kb3JQcmVmaXhlZEV2ZW50TmFtZSA9IHJlcXVpcmUoJ3JlYWN0LWRvbS9saWIvZ2V0VmVuZG9yUHJlZml4ZWRFdmVudE5hbWUnKTtcblxudmFyIGVuZEV2ZW50cyA9IFtdO1xuXG5mdW5jdGlvbiBkZXRlY3RFdmVudHMoKSB7XG4gIHZhciBhbmltRW5kID0gZ2V0VmVuZG9yUHJlZml4ZWRFdmVudE5hbWUoJ2FuaW1hdGlvbmVuZCcpO1xuICB2YXIgdHJhbnNFbmQgPSBnZXRWZW5kb3JQcmVmaXhlZEV2ZW50TmFtZSgndHJhbnNpdGlvbmVuZCcpO1xuXG4gIGlmIChhbmltRW5kKSB7XG4gICAgZW5kRXZlbnRzLnB1c2goYW5pbUVuZCk7XG4gIH1cblxuICBpZiAodHJhbnNFbmQpIHtcbiAgICBlbmRFdmVudHMucHVzaCh0cmFuc0VuZCk7XG4gIH1cbn1cblxuaWYgKEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSkge1xuICBkZXRlY3RFdmVudHMoKTtcbn1cblxuLy8gV2UgdXNlIHRoZSByYXcge2FkZHxyZW1vdmV9RXZlbnRMaXN0ZW5lcigpIGNhbGwgYmVjYXVzZSBFdmVudExpc3RlbmVyXG4vLyBkb2VzIG5vdCBrbm93IGhvdyB0byByZW1vdmUgZXZlbnQgbGlzdGVuZXJzIGFuZCB3ZSByZWFsbHkgc2hvdWxkXG4vLyBjbGVhbiB1cC4gQWxzbywgdGhlc2UgZXZlbnRzIGFyZSBub3QgdHJpZ2dlcmVkIGluIG9sZGVyIGJyb3dzZXJzXG4vLyBzbyB3ZSBzaG91bGQgYmUgQS1PSyBoZXJlLlxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnROYW1lLCBldmVudExpc3RlbmVyKSB7XG4gIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIsIGZhbHNlKTtcbn1cblxudmFyIFJlYWN0VHJhbnNpdGlvbkV2ZW50cyA9IHtcbiAgYWRkRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gSWYgQ1NTIHRyYW5zaXRpb25zIGFyZSBub3Qgc3VwcG9ydGVkLCB0cmlnZ2VyIGFuIFwiZW5kIGFuaW1hdGlvblwiXG4gICAgICAvLyBldmVudCBpbW1lZGlhdGVseS5cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGV2ZW50TGlzdGVuZXIsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9LFxuXG4gIHJlbW92ZUVuZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uIChub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZW5kRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGVuZEV2ZW50KSB7XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGVuZEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFRyYW5zaXRpb25FdmVudHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0L2xpYi9SZWFjdFRyYW5zaXRpb25FdmVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDMwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9