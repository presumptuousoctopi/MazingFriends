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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3g/YmMwYSJdLCJuYW1lcyI6WyJMb2dpbiIsInNvY2tldCIsIndpbmRvdyIsImNvbnRleHQiLCJvbiIsIm9iaiIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImFsZXJ0IiwibWVzc2FnZSIsInNldEl0ZW0iLCJ1c2VybmFtZSIsInB1c2giLCJwYXRobmFtZSIsInNldFN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsInJlZnMiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImVtaXQiLCJzaWduSW4iLCJiaW5kIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0tBRU1BLEs7OztBQUNKLG9CQUFjO0FBQUE7O0FBQUE7QUFFYjs7Ozt5Q0FFbUI7QUFDbEIsV0FBSUMsU0FBU0MsT0FBT0QsTUFBcEI7QUFDQSxXQUFJRSxVQUFVLElBQWQ7QUFDQUYsY0FBT0csRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFVBQVNDLEdBQVQsRUFBYztBQUN4QyxhQUFJSCxPQUFPSSxjQUFQLENBQXNCQyxPQUF0QixDQUE4QixNQUE5QixDQUFKLEVBQTJDO0FBQ3pDQyxpQkFBTSwwQkFBTjtBQUNEO0FBQ0QsYUFBS0gsSUFBSUksT0FBVCxFQUFtQjtBQUNqQkQsaUJBQU1ILElBQUlJLE9BQVY7QUFDRCxVQUZELE1BRU87QUFDTFAsa0JBQU9JLGNBQVAsQ0FBc0JJLE9BQXRCLENBQThCLE1BQTlCLEVBQXNDTCxJQUFJTSxRQUExQztBQUNBLHVDQUFlQyxJQUFmLENBQW9CLEVBQUVDLFVBQVUsT0FBWixFQUFwQjtBQUNEO0FBQ0YsUUFWRDtBQVdBLFlBQUtDLFFBQUwsQ0FBYztBQUNaYixpQkFBUUE7QUFESSxRQUFkO0FBR0Q7Ozs0QkFFTWMsQyxFQUFHO0FBQ1JBLFNBQUVDLGNBQUY7QUFDQSxXQUFJQyxPQUFPO0FBQ1ROLG1CQUFVLEtBQUtPLElBQUwsQ0FBVVAsUUFBVixDQUFtQlEsS0FEcEI7QUFFVEMsbUJBQVUsS0FBS0YsSUFBTCxDQUFVRSxRQUFWLENBQW1CRDtBQUZwQixRQUFYO0FBSUFFLGVBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBcEIsY0FBT0QsTUFBUCxDQUFjc0IsSUFBZCxDQUFtQixRQUFuQixFQUE2Qk4sSUFBN0I7QUFDRDs7OzhCQUVRO0FBQ1AsY0FDQztBQUFBO0FBQUEsV0FBTSxXQUFVLFdBQWhCLEVBQTRCLFVBQVUsS0FBS08sTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBQXRDO0FBQUE7QUFFRSxrREFBTyxLQUFJLFVBQVgsRUFBc0IsVUFBUyxNQUEvQixHQUZGO0FBR0csa0RBSEg7QUFJRyxrREFKSDtBQUFBO0FBTUUsa0RBQU8sTUFBSyxVQUFaLEVBQXVCLEtBQUksVUFBM0IsRUFBc0MsVUFBUyxNQUEvQyxHQU5GO0FBT0csa0RBUEg7QUFRRyxrREFSSDtBQVNHO0FBQUE7QUFBQSxhQUFRLE1BQUssUUFBYjtBQUFBO0FBQUE7QUFUSCxRQUREO0FBYUQ7Ozs7R0FoRGlCLGdCQUFNQyxTOzttQkFtRFgxQixLIiwiZmlsZSI6IjAuZjNlYThlZGQ5MTE4OGRkMzg0Y2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7IFxuaW1wb3J0IHsgTGluaywgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBzb2NrZXQgPSB3aW5kb3cuc29ja2V0O1xuICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICBzb2NrZXQub24oJ3NpZ25pblJlc3BvbnNlJywgZnVuY3Rpb24ob2JqKSB7XG4gICAgICBpZiAod2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSkge1xuICAgICAgICBhbGVydChcIllvdXJlIGFscmVhZHkgbG9nZ2VkIGluIVwiKTtcbiAgICAgIH1cbiAgICAgIGlmICggb2JqLm1lc3NhZ2UgKSB7XG4gICAgICAgIGFsZXJ0KG9iai5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgb2JqLnVzZXJuYW1lKTtcbiAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCh7IHBhdGhuYW1lOiAnL2hvbWUnfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzb2NrZXQ6IHNvY2tldFxuICAgIH0pO1xuICB9XG5cbiAgc2lnbkluKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHVzZXIgPSB7XG4gICAgICB1c2VybmFtZTogdGhpcy5yZWZzLnVzZXJuYW1lLnZhbHVlLFxuICAgICAgcGFzc3dvcmQ6IHRoaXMucmVmcy5wYXNzd29yZC52YWx1ZVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJ2F0dGVtcHQgdG8gc2lnbiBpbiEnKTtcbiAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ3NpZ25pbicsIHVzZXIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgXHQ8Zm9ybSBjbGFzc05hbWU9XCJsb2dpbkZvcm1cIiBvblN1Ym1pdD17dGhpcy5zaWduSW4uYmluZCh0aGlzKX0+XG4gICAgICBcdFVzZXJuYW1lOiBcbiAgICAgIFx0PGlucHV0IHJlZj1cInVzZXJuYW1lXCIgcmVxdWlyZWQ9XCJ0cnVlXCIvPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8YnIvPlxuICAgICAgXHRQYXNzd29yZDpcbiAgICAgIFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHJlZj1cInBhc3N3b3JkXCIgcmVxdWlyZWQ9XCJ0cnVlXCIvPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2cgaW48L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanN4Il0sInNvdXJjZVJvb3QiOiIifQ==