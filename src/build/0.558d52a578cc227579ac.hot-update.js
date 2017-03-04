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
	        { onSubmit: this.signIn.bind(this) },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3g/YmMwYSJdLCJuYW1lcyI6WyJMb2dpbiIsInNvY2tldCIsIndpbmRvdyIsImNvbnRleHQiLCJvbiIsIm9iaiIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImFsZXJ0IiwibWVzc2FnZSIsInNldEl0ZW0iLCJ1c2VybmFtZSIsInB1c2giLCJwYXRobmFtZSIsInNldFN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsInJlZnMiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImVtaXQiLCJzaWduSW4iLCJiaW5kIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0tBRU1BLEs7OztBQUNKLG9CQUFjO0FBQUE7O0FBQUE7QUFFYjs7Ozt5Q0FFbUI7QUFDbEIsV0FBSUMsU0FBU0MsT0FBT0QsTUFBcEI7QUFDQSxXQUFJRSxVQUFVLElBQWQ7QUFDQUYsY0FBT0csRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFVBQVNDLEdBQVQsRUFBYztBQUN4QyxhQUFJSCxPQUFPSSxjQUFQLENBQXNCQyxPQUF0QixDQUE4QixNQUE5QixDQUFKLEVBQTJDO0FBQ3pDQyxpQkFBTSwwQkFBTjtBQUNEO0FBQ0QsYUFBS0gsSUFBSUksT0FBVCxFQUFtQjtBQUNqQkQsaUJBQU1ILElBQUlJLE9BQVY7QUFDRCxVQUZELE1BRU87QUFDTFAsa0JBQU9JLGNBQVAsQ0FBc0JJLE9BQXRCLENBQThCLE1BQTlCLEVBQXNDTCxJQUFJTSxRQUExQztBQUNBLHVDQUFlQyxJQUFmLENBQW9CLEVBQUVDLFVBQVUsT0FBWixFQUFwQjtBQUNEO0FBQ0YsUUFWRDtBQVdBLFlBQUtDLFFBQUwsQ0FBYztBQUNaYixpQkFBUUE7QUFESSxRQUFkO0FBR0Q7Ozs0QkFFTWMsQyxFQUFHO0FBQ1JBLFNBQUVDLGNBQUY7QUFDQSxXQUFJQyxPQUFPO0FBQ1ROLG1CQUFVLEtBQUtPLElBQUwsQ0FBVVAsUUFBVixDQUFtQlEsS0FEcEI7QUFFVEMsbUJBQVUsS0FBS0YsSUFBTCxDQUFVRSxRQUFWLENBQW1CRDtBQUZwQixRQUFYO0FBSUFFLGVBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBcEIsY0FBT0QsTUFBUCxDQUFjc0IsSUFBZCxDQUFtQixRQUFuQixFQUE2Qk4sSUFBN0I7QUFDRDs7OzhCQUVRO0FBQ1AsY0FDRjtBQUFBO0FBQUEsV0FBTSxVQUFVLEtBQUtPLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixJQUFqQixDQUFoQjtBQUFBO0FBRUcsa0RBQU8sS0FBSSxVQUFYLEVBQXNCLFVBQVMsTUFBL0IsR0FGSDtBQUdJLGtEQUhKO0FBSUksa0RBSko7QUFBQTtBQU1HLGtEQUFPLE1BQUssVUFBWixFQUF1QixLQUFJLFVBQTNCLEVBQXNDLFVBQVMsTUFBL0MsR0FOSDtBQU9JLGtEQVBKO0FBUUksa0RBUko7QUFTSTtBQUFBO0FBQUEsYUFBUSxNQUFLLFFBQWI7QUFBQTtBQUFBO0FBVEosUUFERTtBQWFEOzs7O0dBaERpQixnQkFBTUMsUzs7bUJBbURYMUIsSyIsImZpbGUiOiIwLjU1OGQ1MmE1NzhjYzIyNzU3OWFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnOyBcbmltcG9ydCB7IExpbmssIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgc29ja2V0ID0gd2luZG93LnNvY2tldDtcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgc29ja2V0Lm9uKCdzaWduaW5SZXNwb25zZScsIGZ1bmN0aW9uKG9iaikge1xuICAgICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcbiAgICAgICAgYWxlcnQoXCJZb3VyZSBhbHJlYWR5IGxvZ2dlZCBpbiFcIik7XG4gICAgICB9XG4gICAgICBpZiAoIG9iai5tZXNzYWdlICkge1xuICAgICAgICBhbGVydChvYmoubWVzc2FnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIG9iai51c2VybmFtZSk7XG4gICAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goeyBwYXRobmFtZTogJy9ob21lJ30pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc29ja2V0OiBzb2NrZXRcbiAgICB9KTtcbiAgfVxuXG4gIHNpZ25JbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciB1c2VyID0ge1xuICAgICAgdXNlcm5hbWU6IHRoaXMucmVmcy51c2VybmFtZS52YWx1ZSxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnJlZnMucGFzc3dvcmQudmFsdWVcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCdhdHRlbXB0IHRvIHNpZ24gaW4hJyk7XG4gICAgd2luZG93LnNvY2tldC5lbWl0KCdzaWduaW4nLCB1c2VyKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuXHRcdDxmb3JtIG9uU3VibWl0PXt0aGlzLnNpZ25Jbi5iaW5kKHRoaXMpfT5cbiAgICBcdFVzZXJuYW1lOlxuICAgIFx0PGlucHV0IHJlZj1cInVzZXJuYW1lXCIgcmVxdWlyZWQ9XCJ0cnVlXCIvPlxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG4gICAgXHRQYXNzd29yZDpcbiAgICBcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiByZWY9XCJwYXNzd29yZFwiIHJlcXVpcmVkPVwidHJ1ZVwiLz5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9nIGluPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3giXSwic291cmNlUm9vdCI6IiJ9