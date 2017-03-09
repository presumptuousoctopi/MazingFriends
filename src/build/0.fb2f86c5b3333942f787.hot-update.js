webpackHotUpdate(0,{

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(189);
	
	var _TitleView = __webpack_require__(280);
	
	var _TitleView2 = _interopRequireDefault(_TitleView);
	
	var _Login = __webpack_require__(281);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	var _Signup = __webpack_require__(296);
	
	var _Signup2 = _interopRequireDefault(_Signup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LoginView = function (_React$Component) {
	  _inherits(LoginView, _React$Component);
	
	  function LoginView() {
	    _classCallCheck(this, LoginView);
	
	    var _this = _possibleConstructorReturn(this, (LoginView.__proto__ || Object.getPrototypeOf(LoginView)).call(this));
	
	    _this.state = {
	      login: true
	    };
	    return _this;
	  }
	
	  _createClass(LoginView, [{
	    key: 'switchPage',
	    value: function switchPage() {
	      this.setState({
	        login: !this.state.login
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'Login' },
	        _react2.default.createElement(_TitleView2.default, null),
	        _react2.default.createElement(
	          'div',
	          { className: 'LoginBox' },
	          this.state.login ? _react2.default.createElement(_Login2.default, null) : _react2.default.createElement(_Signup2.default, null),
	          _react2.default.createElement(
	            'p',
	            null,
	            this.state.login ? 'New?' : "Already have an account?",
	            ' ',
	            _react2.default.createElement(
	              'a',
	              { className: 'Link', onClick: this.switchPage.bind(this) },
	              this.state.login ? "Sign up!" : "Log-in!"
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return LoginView;
	}(_react2.default.Component);
	
	exports.default = LoginView;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "LoginView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpblZpZXcuanN4P2RmNzEiXSwibmFtZXMiOlsiTG9naW5WaWV3Iiwic3RhdGUiLCJsb2dpbiIsInNldFN0YXRlIiwic3dpdGNoUGFnZSIsImJpbmQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsUzs7O0FBQ0osd0JBQWM7QUFBQTs7QUFBQTs7QUFFWixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBTztBQURJLE1BQWI7QUFGWTtBQUtiOzs7O2tDQUVZO0FBQ1gsWUFBS0MsUUFBTCxDQUFjO0FBQ1pELGdCQUFPLENBQUMsS0FBS0QsS0FBTCxDQUFXQztBQURQLFFBQWQ7QUFHRDs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLE9BQWY7QUFDSSxpRUFESjtBQUVFO0FBQUE7QUFBQSxhQUFLLFdBQVUsVUFBZjtBQUNHLGdCQUFLRCxLQUFMLENBQVdDLEtBQVgsR0FBb0Isb0RBQXBCLEdBQWlDLHFEQURwQztBQUVFO0FBQUE7QUFBQTtBQUFJLGtCQUFLRCxLQUFMLENBQVdDLEtBQVgsR0FBbUIsTUFBbkIsR0FBNEIsMEJBQWhDO0FBQUE7QUFBNEQ7QUFBQTtBQUFBLGlCQUFHLFdBQVUsTUFBYixFQUFvQixTQUFTLEtBQUtFLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQTdCO0FBQTBELG9CQUFLSixLQUFMLENBQVdDLEtBQVgsR0FBbUIsVUFBbkIsR0FBZ0M7QUFBMUY7QUFBNUQ7QUFGRjtBQUZGLFFBREY7QUFTRDs7OztHQXhCcUIsZ0JBQU1JLFM7O21CQTJCZk4sUyIsImZpbGUiOiIwLmZiMmY4NmM1YjMzMzM5NDJmNzg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBUaXRsZSBmcm9tICcuLy4uL1RpdGxlVmlldy5qc3gnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbi5qc3gnXG5pbXBvcnQgU2lnbnVwIGZyb20gJy4vU2lnbnVwLmpzeCdcblxuY2xhc3MgTG9naW5WaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2dpbjogdHJ1ZSxcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hQYWdlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9naW46ICF0aGlzLnN0YXRlLmxvZ2luLFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTG9naW5cIj5cbiAgICAgICAgICA8VGl0bGUvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxvZ2luQm94XCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUubG9naW4gPyAoPExvZ2luLz4pIDogKDxTaWdudXAvPil9XG4gICAgICAgICAgPHA+e3RoaXMuc3RhdGUubG9naW4gPyAnTmV3PycgOiBcIkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P1wifSA8YSBjbGFzc05hbWU9XCJMaW5rXCIgb25DbGljaz17dGhpcy5zd2l0Y2hQYWdlLmJpbmQodGhpcyl9Pnt0aGlzLnN0YXRlLmxvZ2luID8gXCJTaWduIHVwIVwiIDogXCJMb2ctaW4hXCJ9PC9hPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpblZpZXcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==