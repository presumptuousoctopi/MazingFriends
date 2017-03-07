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
	
	var _reactAlert = __webpack_require__(291);
	
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
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3g/YmMwYSJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwic29ja2V0Iiwid2luZG93IiwiY29udGV4dCIsIm9uIiwib2JqIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwic2hvd0FsZXJ0IiwibWVzc2FnZSIsInNldEl0ZW0iLCJ1c2VybmFtZSIsInB1c2giLCJwYXRobmFtZSIsInNldFN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsInJlZnMiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImVtaXQiLCJzaWduSW4iLCJiaW5kIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsSzs7O0FBQ0osa0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSwwR0FDVkEsS0FEVTtBQUVqQjs7Ozt5Q0FFbUI7QUFDbEIsV0FBSUMsU0FBU0MsT0FBT0QsTUFBcEI7QUFDQSxXQUFJRSxVQUFVLElBQWQ7QUFDQUYsY0FBT0csRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFVBQVNDLEdBQVQsRUFBYztBQUN4QyxhQUFJSCxPQUFPSSxjQUFQLENBQXNCQyxPQUF0QixDQUE4QixNQUE5QixDQUFKLEVBQTJDO0FBQ3pDSixtQkFBUUssU0FBUixDQUFrQiwwQkFBbEI7QUFDRDtBQUNELGFBQUtILElBQUlJLE9BQVQsRUFBbUI7QUFDakJOLG1CQUFRSyxTQUFSLENBQWtCSCxJQUFJSSxPQUF0QjtBQUNELFVBRkQsTUFFTztBQUNMUCxrQkFBT0ksY0FBUCxDQUFzQkksT0FBdEIsQ0FBOEIsTUFBOUIsRUFBc0NMLElBQUlNLFFBQTFDO0FBQ0EsdUNBQWVDLElBQWYsQ0FBb0IsRUFBRUMsVUFBVSxPQUFaLEVBQXBCO0FBQ0Q7QUFDRixRQVZEO0FBV0EsWUFBS0MsUUFBTCxDQUFjO0FBQ1piLGlCQUFRQTtBQURJLFFBQWQ7QUFHRDs7OzRCQUVNYyxDLEVBQUc7QUFDUkEsU0FBRUMsY0FBRjtBQUNBLFdBQUlDLE9BQU87QUFDVE4sbUJBQVUsS0FBS08sSUFBTCxDQUFVUCxRQUFWLENBQW1CUSxLQURwQjtBQUVUQyxtQkFBVSxLQUFLRixJQUFMLENBQVVFLFFBQVYsQ0FBbUJEO0FBRnBCLFFBQVg7QUFJQUUsZUFBUUMsR0FBUixDQUFZLHFCQUFaO0FBQ0FwQixjQUFPRCxNQUFQLENBQWNzQixJQUFkLENBQW1CLFFBQW5CLEVBQTZCTixJQUE3QjtBQUNEOzs7OEJBRVE7QUFDUCxjQUNFO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQSxhQUFNLFdBQVUsV0FBaEIsRUFBNEIsVUFBVSxLQUFLTyxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBdEM7QUFBQTtBQUVFLG9EQUFPLEtBQUksVUFBWCxFQUFzQixVQUFTLE1BQS9CLEdBRkY7QUFHRyxvREFISDtBQUlHLG9EQUpIO0FBQUE7QUFNRSxvREFBTyxNQUFLLFVBQVosRUFBdUIsS0FBSSxVQUEzQixFQUFzQyxVQUFTLE1BQS9DLEdBTkY7QUFPRyxvREFQSDtBQVFHLG9EQVJIO0FBU0c7QUFBQTtBQUFBLGVBQVEsTUFBSyxRQUFiO0FBQUE7QUFBQTtBQVRIO0FBREQsUUFERjtBQWVEOzs7O0dBbERpQixnQkFBTUMsUzs7bUJBcURYM0IsSyIsImZpbGUiOiIwLmI4MDhhYmI5MjFkNTE4Mzc2ZGZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnOyBcbmltcG9ydCB7IExpbmssIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBBbGVydENvbnRhaW5lciBmcm9tICdyZWFjdC1hbGVydCc7XG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBzb2NrZXQgPSB3aW5kb3cuc29ja2V0O1xuICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICBzb2NrZXQub24oJ3NpZ25pblJlc3BvbnNlJywgZnVuY3Rpb24ob2JqKSB7XG4gICAgICBpZiAod2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkge1xuICAgICAgICBjb250ZXh0LnNob3dBbGVydChcIllvdXJlIGFscmVhZHkgbG9nZ2VkIGluIVwiKTtcbiAgICAgIH1cbiAgICAgIGlmICggb2JqLm1lc3NhZ2UgKSB7XG4gICAgICAgIGNvbnRleHQuc2hvd0FsZXJ0KG9iai5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgb2JqLnVzZXJuYW1lKTtcbiAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCh7IHBhdGhuYW1lOiAnL2hvbWUnfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzb2NrZXQ6IHNvY2tldFxuICAgIH0pO1xuICB9XG5cbiAgc2lnbkluKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHVzZXIgPSB7XG4gICAgICB1c2VybmFtZTogdGhpcy5yZWZzLnVzZXJuYW1lLnZhbHVlLFxuICAgICAgcGFzc3dvcmQ6IHRoaXMucmVmcy5wYXNzd29yZC52YWx1ZVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJ2F0dGVtcHQgdG8gc2lnbiBpbiEnKTtcbiAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ3NpZ25pbicsIHVzZXIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgXHQ8Zm9ybSBjbGFzc05hbWU9XCJsb2dpbkZvcm1cIiBvblN1Ym1pdD17dGhpcy5zaWduSW4uYmluZCh0aGlzKX0+XG4gICAgICAgIFx0VXNlcm5hbWU6IFxuICAgICAgICBcdDxpbnB1dCByZWY9XCJ1c2VybmFtZVwiIHJlcXVpcmVkPVwidHJ1ZVwiLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgIFx0UGFzc3dvcmQ6XG4gICAgICAgIFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHJlZj1cInBhc3N3b3JkXCIgcmVxdWlyZWQ9XCJ0cnVlXCIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2cgaW48L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=