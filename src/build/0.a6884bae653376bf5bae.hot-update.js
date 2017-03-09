webpackHotUpdate(0,{

/***/ 281:
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
	
	var _reactAlert = __webpack_require__(282);
	
	var _reactAlert2 = _interopRequireDefault(_reactAlert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Login = function (_React$Component) {
	  _inherits(Login, _React$Component);
	
	  function Login(props) {
	    _classCallCheck(this, Login);
	
	    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
	  }
	
	  _createClass(Login, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var socket = window.socket;
	      var context = this;
	      socket.on('signinResponse', function (obj) {
	        if (window.sessionStorage.getItem('user')) {
	          alert("Youre already logged in!");
	        }
	        if (obj.message) {
	          alert(obj.message);
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
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'form',
	          { className: 'loginForm', onSubmit: this.signIn.bind(this) },
	          _react2.default.createElement(
	            'label',
	            null,
	            'Username: '
	          ),
	          _react2.default.createElement('input', { ref: 'username', required: 'true' }),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            'label',
	            null,
	            'Password: '
	          ),
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3g/YmMwYSJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwic29ja2V0Iiwid2luZG93IiwiY29udGV4dCIsIm9uIiwib2JqIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiYWxlcnQiLCJtZXNzYWdlIiwic2V0SXRlbSIsInVzZXJuYW1lIiwicHVzaCIsInBhdGhuYW1lIiwic2V0U3RhdGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwicmVmcyIsInZhbHVlIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiZW1pdCIsInNpZ25JbiIsImJpbmQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxLOzs7QUFDSixrQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLDBHQUNWQSxLQURVO0FBRWpCOzs7O3lDQUVtQjtBQUNsQixXQUFJQyxTQUFTQyxPQUFPRCxNQUFwQjtBQUNBLFdBQUlFLFVBQVUsSUFBZDtBQUNBRixjQUFPRyxFQUFQLENBQVUsZ0JBQVYsRUFBNEIsVUFBU0MsR0FBVCxFQUFjO0FBQ3hDLGFBQUlILE9BQU9JLGNBQVAsQ0FBc0JDLE9BQXRCLENBQThCLE1BQTlCLENBQUosRUFBMkM7QUFDekNDLGlCQUFNLDBCQUFOO0FBQ0Q7QUFDRCxhQUFLSCxJQUFJSSxPQUFULEVBQW1CO0FBQ2pCRCxpQkFBTUgsSUFBSUksT0FBVjtBQUNELFVBRkQsTUFFTztBQUNMUCxrQkFBT0ksY0FBUCxDQUFzQkksT0FBdEIsQ0FBOEIsTUFBOUIsRUFBc0NMLElBQUlNLFFBQTFDO0FBQ0EsdUNBQWVDLElBQWYsQ0FBb0IsRUFBRUMsVUFBVSxPQUFaLEVBQXBCO0FBQ0Q7QUFDRixRQVZEO0FBV0EsWUFBS0MsUUFBTCxDQUFjO0FBQ1piLGlCQUFRQTtBQURJLFFBQWQ7QUFHRDs7OzRCQUVNYyxDLEVBQUc7QUFDUkEsU0FBRUMsY0FBRjtBQUNBLFdBQUlDLE9BQU87QUFDVE4sbUJBQVUsS0FBS08sSUFBTCxDQUFVUCxRQUFWLENBQW1CUSxLQURwQjtBQUVUQyxtQkFBVSxLQUFLRixJQUFMLENBQVVFLFFBQVYsQ0FBbUJEO0FBRnBCLFFBQVg7QUFJQUUsZUFBUUMsR0FBUixDQUFZLHFCQUFaO0FBQ0FwQixjQUFPRCxNQUFQLENBQWNzQixJQUFkLENBQW1CLFFBQW5CLEVBQTZCTixJQUE3QjtBQUNEOzs7OEJBRVE7QUFDUCxjQUNFO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQSxhQUFNLFdBQVUsV0FBaEIsRUFBNEIsVUFBVSxLQUFLTyxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBdEM7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFFRSxvREFBTyxLQUFJLFVBQVgsRUFBc0IsVUFBUyxNQUEvQixHQUZGO0FBR0csb0RBSEg7QUFJRyxvREFKSDtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQU1FLG9EQUFPLE1BQUssVUFBWixFQUF1QixLQUFJLFVBQTNCLEVBQXNDLFVBQVMsTUFBL0MsR0FORjtBQU9HLG9EQVBIO0FBUUcsb0RBUkg7QUFTRztBQUFBO0FBQUEsZUFBUSxNQUFLLFFBQWI7QUFBQTtBQUFBO0FBVEg7QUFERCxRQURGO0FBZUQ7Ozs7R0FsRGlCLGdCQUFNQyxTOzttQkFxRFgzQixLIiwiZmlsZSI6IjAuYTY4ODRiYWU2NTMzNzZiZjViYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7IFxuaW1wb3J0IHsgTGluaywgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IEFsZXJ0Q29udGFpbmVyIGZyb20gJ3JlYWN0LWFsZXJ0JztcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIHNvY2tldCA9IHdpbmRvdy5zb2NrZXQ7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIHNvY2tldC5vbignc2lnbmluUmVzcG9uc2UnLCBmdW5jdGlvbihvYmopIHtcbiAgICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB7XG4gICAgICAgIGFsZXJ0KFwiWW91cmUgYWxyZWFkeSBsb2dnZWQgaW4hXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCBvYmoubWVzc2FnZSApIHtcbiAgICAgICAgYWxlcnQob2JqLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBvYmoudXNlcm5hbWUpO1xuICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKHsgcGF0aG5hbWU6ICcvaG9tZSd9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNvY2tldDogc29ja2V0XG4gICAgfSk7XG4gIH1cblxuICBzaWduSW4oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdXNlciA9IHtcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnJlZnMudXNlcm5hbWUudmFsdWUsXG4gICAgICBwYXNzd29yZDogdGhpcy5yZWZzLnBhc3N3b3JkLnZhbHVlXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnYXR0ZW1wdCB0byBzaWduIGluIScpO1xuICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnc2lnbmluJywgdXNlcik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICBcdDxmb3JtIGNsYXNzTmFtZT1cImxvZ2luRm9ybVwiIG9uU3VibWl0PXt0aGlzLnNpZ25Jbi5iaW5kKHRoaXMpfT5cbiAgICAgICAgXHQ8bGFiZWw+VXNlcm5hbWU6IDwvbGFiZWw+XG4gICAgICAgIFx0PGlucHV0IHJlZj1cInVzZXJuYW1lXCIgcmVxdWlyZWQ9XCJ0cnVlXCIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgXHQ8bGFiZWw+UGFzc3dvcmQ6IDwvbGFiZWw+XG4gICAgICAgIFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHJlZj1cInBhc3N3b3JkXCIgcmVxdWlyZWQ9XCJ0cnVlXCIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2cgaW48L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=