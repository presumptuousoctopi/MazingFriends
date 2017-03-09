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
	          this.state.login ? _react2.default.createElement(
	            'h1',
	            null,
	            'Login'
	          ) : _react2.default.createElement(
	            'h1',
	            null,
	            'Signup'
	          ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpblZpZXcuanN4P2RmNzEiXSwibmFtZXMiOlsiTG9naW5WaWV3Iiwic3RhdGUiLCJsb2dpbiIsInNldFN0YXRlIiwic3dpdGNoUGFnZSIsImJpbmQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsUzs7O0FBQ0osd0JBQWM7QUFBQTs7QUFBQTs7QUFFWixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBTztBQURJLE1BQWI7QUFGWTtBQUtiOzs7O2tDQUVZO0FBQ1gsWUFBS0MsUUFBTCxDQUFjO0FBQ1pELGdCQUFPLENBQUMsS0FBS0QsS0FBTCxDQUFXQztBQURQLFFBQWQ7QUFHRDs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLE9BQWY7QUFDRSxpRUFERjtBQUVFO0FBQUE7QUFBQSxhQUFLLFdBQVUsVUFBZjtBQUNHLGdCQUFLRCxLQUFMLENBQVdDLEtBQVgsR0FBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFuQixHQUFvQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRHZDO0FBRUcsZ0JBQUtELEtBQUwsQ0FBV0MsS0FBWCxHQUFvQixvREFBcEIsR0FBaUMscURBRnBDO0FBR0U7QUFBQTtBQUFBO0FBQUksa0JBQUtELEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixNQUFuQixHQUE0QiwwQkFBaEM7QUFBQTtBQUE0RDtBQUFBO0FBQUEsaUJBQUcsV0FBVSxNQUFiLEVBQW9CLFNBQVMsS0FBS0UsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBN0I7QUFBMEQsb0JBQUtKLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixVQUFuQixHQUFnQztBQUExRjtBQUE1RDtBQUhGO0FBRkYsUUFERjtBQVVEOzs7O0dBekJxQixnQkFBTUksUzs7bUJBNEJmTixTIiwiZmlsZSI6IjAuNGM5N2JmYjhiNjI1NDM1MWY4ODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vLi4vVGl0bGVWaWV3LmpzeCdcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luLmpzeCdcbmltcG9ydCBTaWdudXAgZnJvbSAnLi9TaWdudXAuanN4J1xuXG5jbGFzcyBMb2dpblZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvZ2luOiB0cnVlLFxuICAgIH1cbiAgfVxuXG4gIHN3aXRjaFBhZ2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2dpbjogIXRoaXMuc3RhdGUubG9naW4sXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJMb2dpblwiPlxuICAgICAgICA8VGl0bGUvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxvZ2luQm94XCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUubG9naW4gPyA8aDE+TG9naW48L2gxPiA6IDxoMT5TaWdudXA8L2gxPn1cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2dpbiA/ICg8TG9naW4vPikgOiAoPFNpZ251cC8+KX1cbiAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5sb2dpbiA/ICdOZXc/JyA6IFwiQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XCJ9IDxhIGNsYXNzTmFtZT1cIkxpbmtcIiBvbkNsaWNrPXt0aGlzLnN3aXRjaFBhZ2UuYmluZCh0aGlzKX0+e3RoaXMuc3RhdGUubG9naW4gPyBcIlNpZ24gdXAhXCIgOiBcIkxvZy1pbiFcIn08L2E+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5WaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luVmlldy5qc3giXSwic291cmNlUm9vdCI6IiJ9