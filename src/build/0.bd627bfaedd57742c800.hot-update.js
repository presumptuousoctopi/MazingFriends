webpackHotUpdate(0,{

/***/ 282:
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
	
	var Signup = function (_React$Component) {
	  _inherits(Signup, _React$Component);
	
	  function Signup() {
	    _classCallCheck(this, Signup);
	
	    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this));
	
	    _this.state = {
	      socket: socket
	    };
	    return _this;
	  }
	
	  _createClass(Signup, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var socket = window.socket;
	      var context = this;
	      socket.on('signupResponse', function (message) {
	        if (message) {
	          alert(message);
	        } else {
	          _reactRouter.browserHistory.push({ pathname: '/home' });
	        }
	      });
	
	      this.setState({
	        socket: socket
	      });
	    }
	  }, {
	    key: 'signUp',
	    value: function signUp(e) {
	      e.preventDefault();
	      var newUser = {
	        username: this.refs.username.value,
	        password: this.refs.password.value
	      };
	      console.log('in signup', newUser);
	      if (this.refs.password.value !== this.refs.confirmPassword.value) {
	        alert("Please enter the same password");
	        return;
	      }
	      window.socket.emit('signup', newUser);
	      window.sessionStorage.setItem('user', this.refs.username.value);
	      var data = window.sessionStorage.getItem('user');
	      console.log(data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'form',
	        { onSubmit: this.signUp.bind(this) },
	        'Username:',
	        _react2.default.createElement('input', { ref: 'username', required: 'true' }),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement('br', null),
	        'Password:',
	        _react2.default.createElement('input', { type: 'password', ref: 'password', required: 'true' }),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement('br', null),
	        'Confirm Password:',
	        _react2.default.createElement('input', { type: 'password', ref: 'confirmPassword', required: 'true' }),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          'button',
	          { type: 'submit' },
	          'Sign up'
	        )
	      );
	    }
	  }]);
	
	  return Signup;
	}(_react2.default.Component);
	
	exports.default = Signup;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Signup.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9TaWdudXAuanN4PzZmNjUiXSwibmFtZXMiOlsiU2lnbnVwIiwic3RhdGUiLCJzb2NrZXQiLCJ3aW5kb3ciLCJjb250ZXh0Iiwib24iLCJtZXNzYWdlIiwiYWxlcnQiLCJwdXNoIiwicGF0aG5hbWUiLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1VzZXIiLCJ1c2VybmFtZSIsInJlZnMiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImNvbmZpcm1QYXNzd29yZCIsImVtaXQiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJkYXRhIiwiZ2V0SXRlbSIsInNpZ25VcCIsImJpbmQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7S0FFTUEsTTs7O0FBQ0oscUJBQWM7QUFBQTs7QUFBQTs7QUFFWixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUUE7QUFERyxNQUFiO0FBRlk7QUFLYjs7Ozt5Q0FFbUI7QUFDbEIsV0FBSUEsU0FBU0MsT0FBT0QsTUFBcEI7QUFDQSxXQUFJRSxVQUFVLElBQWQ7QUFDQUYsY0FBT0csRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFVBQVNDLE9BQVQsRUFBa0I7QUFDNUMsYUFBS0EsT0FBTCxFQUFlO0FBQ2JDLGlCQUFNRCxPQUFOO0FBQ0QsVUFGRCxNQUVPO0FBQ0wsdUNBQWVFLElBQWYsQ0FBb0IsRUFBRUMsVUFBVSxPQUFaLEVBQXBCO0FBQ0Q7QUFDRixRQU5EOztBQVFBLFlBQUtDLFFBQUwsQ0FBYztBQUNaUixpQkFBUUE7QUFESSxRQUFkO0FBR0Q7Ozs0QkFFTVMsQyxFQUFHO0FBQ1JBLFNBQUVDLGNBQUY7QUFDQSxXQUFJQyxVQUFVO0FBQ1pDLG1CQUFVLEtBQUtDLElBQUwsQ0FBVUQsUUFBVixDQUFtQkUsS0FEakI7QUFFWkMsbUJBQVUsS0FBS0YsSUFBTCxDQUFVRSxRQUFWLENBQW1CRDtBQUZqQixRQUFkO0FBSUFFLGVBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCTixPQUF6QjtBQUNBLFdBQUksS0FBS0UsSUFBTCxDQUFVRSxRQUFWLENBQW1CRCxLQUFuQixLQUE2QixLQUFLRCxJQUFMLENBQVVLLGVBQVYsQ0FBMEJKLEtBQTNELEVBQWtFO0FBQ2hFVCxlQUFNLGdDQUFOO0FBQ0E7QUFDRDtBQUNESixjQUFPRCxNQUFQLENBQWNtQixJQUFkLENBQW1CLFFBQW5CLEVBQTZCUixPQUE3QjtBQUNBVixjQUFPbUIsY0FBUCxDQUFzQkMsT0FBdEIsQ0FBOEIsTUFBOUIsRUFBc0MsS0FBS1IsSUFBTCxDQUFVRCxRQUFWLENBQW1CRSxLQUF6RDtBQUNBLFdBQUlRLE9BQU9yQixPQUFPbUIsY0FBUCxDQUFzQkcsT0FBdEIsQ0FBOEIsTUFBOUIsQ0FBWDtBQUNBUCxlQUFRQyxHQUFSLENBQVlLLElBQVo7QUFDRDs7OzhCQUVRO0FBQ1AsY0FDRjtBQUFBO0FBQUEsV0FBTSxVQUFVLEtBQUtFLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixJQUFqQixDQUFoQjtBQUFBO0FBRUcsa0RBQU8sS0FBSSxVQUFYLEVBQXNCLFVBQVMsTUFBL0IsR0FGSDtBQUdJLGtEQUhKO0FBSUksa0RBSko7QUFBQTtBQU1HLGtEQUFPLE1BQUssVUFBWixFQUF1QixLQUFJLFVBQTNCLEVBQXNDLFVBQVMsTUFBL0MsR0FOSDtBQU9JLGtEQVBKO0FBUUksa0RBUko7QUFBQTtBQVVJLGtEQUFPLE1BQUssVUFBWixFQUF1QixLQUFJLGlCQUEzQixFQUE2QyxVQUFTLE1BQXRELEdBVko7QUFXSSxrREFYSjtBQVlJLGtEQVpKO0FBYUc7QUFBQTtBQUFBLGFBQVEsTUFBSyxRQUFiO0FBQUE7QUFBQTtBQWJILFFBREU7QUFpQkQ7Ozs7R0EzRGtCLGdCQUFNQyxTOzttQkE4RFo1QixNIiwiZmlsZSI6IjAuYmQ2MjdiZmFlZGQ1Nzc0MmM4MDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7IFxuaW1wb3J0IHsgTGluaywgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmNsYXNzIFNpZ251cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNvY2tldDogc29ja2V0XG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhciBzb2NrZXQgPSB3aW5kb3cuc29ja2V0O1xuICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICBzb2NrZXQub24oJ3NpZ251cFJlc3BvbnNlJywgZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgaWYgKCBtZXNzYWdlICkge1xuICAgICAgICBhbGVydChtZXNzYWdlKTsgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goeyBwYXRobmFtZTogJy9ob21lJ30pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzb2NrZXQ6IHNvY2tldFxuICAgIH0pO1xuICB9XG5cbiAgc2lnblVwKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIG5ld1VzZXIgPSB7XG4gICAgICB1c2VybmFtZTogdGhpcy5yZWZzLnVzZXJuYW1lLnZhbHVlLFxuICAgICAgcGFzc3dvcmQ6IHRoaXMucmVmcy5wYXNzd29yZC52YWx1ZVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJ2luIHNpZ251cCcsIG5ld1VzZXIpO1xuICAgIGlmICh0aGlzLnJlZnMucGFzc3dvcmQudmFsdWUgIT09IHRoaXMucmVmcy5jb25maXJtUGFzc3dvcmQudmFsdWUpIHtcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIHRoZSBzYW1lIHBhc3N3b3JkXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ3NpZ251cCcsIG5ld1VzZXIpO1xuICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgdGhpcy5yZWZzLnVzZXJuYW1lLnZhbHVlKTtcbiAgICB2YXIgZGF0YSA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcblx0XHQ8Zm9ybSBvblN1Ym1pdD17dGhpcy5zaWduVXAuYmluZCh0aGlzKX0+XG4gICAgXHRVc2VybmFtZTpcbiAgICBcdDxpbnB1dCByZWY9XCJ1c2VybmFtZVwiIHJlcXVpcmVkPVwidHJ1ZVwiIC8+XG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cbiAgICBcdFBhc3N3b3JkOlxuICAgIFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHJlZj1cInBhc3N3b3JkXCIgcmVxdWlyZWQ9XCJ0cnVlXCIgLz5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuICAgICAgQ29uZmlybSBQYXNzd29yZDpcbiAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiByZWY9XCJjb25maXJtUGFzc3dvcmRcIiByZXF1aXJlZD1cInRydWVcIi8+XG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cbiAgICBcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNpZ24gdXA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWdudXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9TaWdudXAuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==