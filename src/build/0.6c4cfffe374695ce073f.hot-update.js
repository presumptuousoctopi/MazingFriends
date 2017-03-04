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
	
	var _Signup = __webpack_require__(282);
	
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
	          { className: 'LoginContainer' },
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
	                { onClick: this.switchPage.bind(this) },
	                this.state.login ? "Sign up!" : "Log-in!"
	              )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpblZpZXcuanN4P2RmNzEiXSwibmFtZXMiOlsiTG9naW5WaWV3Iiwic3RhdGUiLCJsb2dpbiIsInNldFN0YXRlIiwic3dpdGNoUGFnZSIsImJpbmQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsUzs7O0FBQ0osd0JBQWM7QUFBQTs7QUFBQTs7QUFFWixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBTztBQURJLE1BQWI7QUFGWTtBQUtiOzs7O2tDQUVZO0FBQ1gsWUFBS0MsUUFBTCxDQUFjO0FBQ1pELGdCQUFPLENBQUMsS0FBS0QsS0FBTCxDQUFXQztBQURQLFFBQWQ7QUFHRDs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLE9BQWY7QUFDRSxpRUFERjtBQUVFO0FBQUE7QUFBQSxhQUFLLFdBQVUsZ0JBQWY7QUFDRTtBQUFBO0FBQUEsZUFBSyxXQUFVLFVBQWY7QUFDRyxrQkFBS0QsS0FBTCxDQUFXQyxLQUFYLEdBQW9CLG9EQUFwQixHQUFpQyxxREFEcEM7QUFFRTtBQUFBO0FBQUE7QUFBSSxvQkFBS0QsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLE1BQW5CLEdBQTRCLDBCQUFoQztBQUFBO0FBQTREO0FBQUE7QUFBQSxtQkFBRyxTQUFTLEtBQUtFLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQVo7QUFBeUMsc0JBQUtKLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixVQUFuQixHQUFnQztBQUF6RTtBQUE1RDtBQUZGO0FBREY7QUFGRixRQURGO0FBV0Q7Ozs7R0ExQnFCLGdCQUFNSSxTOzttQkE2QmZOLFMiLCJmaWxlIjoiMC42YzRjZmZmZTM3NDY5NWNlMDczZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi8uLi9UaXRsZVZpZXcuanN4J1xuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4uanN4J1xuaW1wb3J0IFNpZ251cCBmcm9tICcuL1NpZ251cC5qc3gnXG5cbmNsYXNzIExvZ2luVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9naW46IHRydWUsXG4gICAgfVxuICB9XG5cbiAgc3dpdGNoUGFnZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvZ2luOiAhdGhpcy5zdGF0ZS5sb2dpbixcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxvZ2luXCI+XG4gICAgICAgIDxUaXRsZS8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTG9naW5Db250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxvZ2luQm94XCI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2dpbiA/ICg8TG9naW4vPikgOiAoPFNpZ251cC8+KX1cbiAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmxvZ2luID8gJ05ldz8nIDogXCJBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cIn0gPGEgb25DbGljaz17dGhpcy5zd2l0Y2hQYWdlLmJpbmQodGhpcyl9Pnt0aGlzLnN0YXRlLmxvZ2luID8gXCJTaWduIHVwIVwiIDogXCJMb2ctaW4hXCJ9PC9hPjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpblZpZXcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==