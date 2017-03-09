webpackHotUpdate(0,{

/***/ 296:
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
	        { className: 'loginForm', onSubmit: this.signUp.bind(this) },
	        _react2.default.createElement(
	          'label',
	          null,
	          'Username: '
	        ),
	        ' ',
	        _react2.default.createElement('br', null),
	        _react2.default.createElement('input', { ref: 'username', required: 'true' }),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          'label',
	          null,
	          'Password: '
	        ),
	        ' ',
	        _react2.default.createElement('br', null),
	        _react2.default.createElement('input', { type: 'password', ref: 'password', required: 'true' }),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          'label',
	          null,
	          'Confirm Password: '
	        ),
	        ' ',
	        _react2.default.createElement('br', null),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9TaWdudXAuanN4PzZmNjUiXSwibmFtZXMiOlsiU2lnbnVwIiwic3RhdGUiLCJzb2NrZXQiLCJ3aW5kb3ciLCJjb250ZXh0Iiwib24iLCJtZXNzYWdlIiwiYWxlcnQiLCJwdXNoIiwicGF0aG5hbWUiLCJzZXRTdGF0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1VzZXIiLCJ1c2VybmFtZSIsInJlZnMiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImNvbmZpcm1QYXNzd29yZCIsImVtaXQiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJkYXRhIiwiZ2V0SXRlbSIsInNpZ25VcCIsImJpbmQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7S0FFTUEsTTs7O0FBQ0oscUJBQWM7QUFBQTs7QUFBQTs7QUFFWixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUUE7QUFERyxNQUFiO0FBRlk7QUFLYjs7Ozt5Q0FFbUI7QUFDbEIsV0FBSUEsU0FBU0MsT0FBT0QsTUFBcEI7QUFDQSxXQUFJRSxVQUFVLElBQWQ7QUFDQUYsY0FBT0csRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFVBQVNDLE9BQVQsRUFBa0I7QUFDNUMsYUFBS0EsT0FBTCxFQUFlO0FBQ2JDLGlCQUFNRCxPQUFOO0FBQ0QsVUFGRCxNQUVPO0FBQ0wsdUNBQWVFLElBQWYsQ0FBb0IsRUFBRUMsVUFBVSxPQUFaLEVBQXBCO0FBQ0Q7QUFDRixRQU5EOztBQVFBLFlBQUtDLFFBQUwsQ0FBYztBQUNaUixpQkFBUUE7QUFESSxRQUFkO0FBR0Q7Ozs0QkFFTVMsQyxFQUFHO0FBQ1JBLFNBQUVDLGNBQUY7QUFDQSxXQUFJQyxVQUFVO0FBQ1pDLG1CQUFVLEtBQUtDLElBQUwsQ0FBVUQsUUFBVixDQUFtQkUsS0FEakI7QUFFWkMsbUJBQVUsS0FBS0YsSUFBTCxDQUFVRSxRQUFWLENBQW1CRDtBQUZqQixRQUFkO0FBSUFFLGVBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCTixPQUF6QjtBQUNBLFdBQUksS0FBS0UsSUFBTCxDQUFVRSxRQUFWLENBQW1CRCxLQUFuQixLQUE2QixLQUFLRCxJQUFMLENBQVVLLGVBQVYsQ0FBMEJKLEtBQTNELEVBQWtFO0FBQ2hFVCxlQUFNLGdDQUFOO0FBQ0E7QUFDRDtBQUNESixjQUFPRCxNQUFQLENBQWNtQixJQUFkLENBQW1CLFFBQW5CLEVBQTZCUixPQUE3QjtBQUNBVixjQUFPbUIsY0FBUCxDQUFzQkMsT0FBdEIsQ0FBOEIsTUFBOUIsRUFBc0MsS0FBS1IsSUFBTCxDQUFVRCxRQUFWLENBQW1CRSxLQUF6RDtBQUNBLFdBQUlRLE9BQU9yQixPQUFPbUIsY0FBUCxDQUFzQkcsT0FBdEIsQ0FBOEIsTUFBOUIsQ0FBWDtBQUNBUCxlQUFRQyxHQUFSLENBQVlLLElBQVo7QUFDRDs7OzhCQUVRO0FBQ1AsY0FDQTtBQUFBO0FBQUEsV0FBTSxXQUFVLFdBQWhCLEVBQTRCLFVBQVUsS0FBS0UsTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBQXRDO0FBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURIO0FBQUE7QUFDNkIsa0RBRDdCO0FBRUcsa0RBQU8sS0FBSSxVQUFYLEVBQXNCLFVBQVMsTUFBL0IsR0FGSDtBQUdJLGtEQUhKO0FBSUksa0RBSko7QUFLRztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBTEg7QUFBQTtBQUs2QixrREFMN0I7QUFNRyxrREFBTyxNQUFLLFVBQVosRUFBdUIsS0FBSSxVQUEzQixFQUFzQyxVQUFTLE1BQS9DLEdBTkg7QUFPSSxrREFQSjtBQVFJLGtEQVJKO0FBU0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVRKO0FBQUE7QUFTc0Msa0RBVHRDO0FBVUksa0RBQU8sTUFBSyxVQUFaLEVBQXVCLEtBQUksaUJBQTNCLEVBQTZDLFVBQVMsTUFBdEQsR0FWSjtBQVdJLGtEQVhKO0FBWUksa0RBWko7QUFhRztBQUFBO0FBQUEsYUFBUSxNQUFLLFFBQWI7QUFBQTtBQUFBO0FBYkgsUUFEQTtBQWlCRDs7OztHQTNEa0IsZ0JBQU1DLFM7O21CQThEWjVCLE0iLCJmaWxlIjoiMC4wODMzMzExNTkxMTVjNTNjYmI4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgXG5pbXBvcnQgeyBMaW5rLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY2xhc3MgU2lnbnVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc29ja2V0OiBzb2NrZXRcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIHNvY2tldCA9IHdpbmRvdy5zb2NrZXQ7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIHNvY2tldC5vbignc2lnbnVwUmVzcG9uc2UnLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICBpZiAoIG1lc3NhZ2UgKSB7XG4gICAgICAgIGFsZXJ0KG1lc3NhZ2UpOyAgICAgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCh7IHBhdGhuYW1lOiAnL2hvbWUnfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNvY2tldDogc29ja2V0XG4gICAgfSk7XG4gIH1cblxuICBzaWduVXAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgbmV3VXNlciA9IHtcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnJlZnMudXNlcm5hbWUudmFsdWUsXG4gICAgICBwYXNzd29yZDogdGhpcy5yZWZzLnBhc3N3b3JkLnZhbHVlXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnaW4gc2lnbnVwJywgbmV3VXNlcik7XG4gICAgaWYgKHRoaXMucmVmcy5wYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5yZWZzLmNvbmZpcm1QYXNzd29yZC52YWx1ZSkge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgdGhlIHNhbWUgcGFzc3dvcmRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnc2lnbnVwJywgbmV3VXNlcik7XG4gICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCB0aGlzLnJlZnMudXNlcm5hbWUudmFsdWUpO1xuICAgIHZhciBkYXRhID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICBcdFx0PGZvcm0gY2xhc3NOYW1lPVwibG9naW5Gb3JtXCIgb25TdWJtaXQ9e3RoaXMuc2lnblVwLmJpbmQodGhpcyl9PlxuICAgICAgXHQ8bGFiZWw+VXNlcm5hbWU6IDwvbGFiZWw+IDxici8+XG4gICAgICBcdDxpbnB1dCByZWY9XCJ1c2VybmFtZVwiIHJlcXVpcmVkPVwidHJ1ZVwiIC8+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxici8+XG4gICAgICBcdDxsYWJlbD5QYXNzd29yZDogPC9sYWJlbD4gPGJyLz5cbiAgICAgIFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHJlZj1cInBhc3N3b3JkXCIgcmVxdWlyZWQ9XCJ0cnVlXCIgLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGxhYmVsPkNvbmZpcm0gUGFzc3dvcmQ6IDwvbGFiZWw+IDxici8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiByZWY9XCJjb25maXJtUGFzc3dvcmRcIiByZXF1aXJlZD1cInRydWVcIi8+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxici8+XG4gICAgICBcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNpZ24gdXA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ251cFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xvZ2luL1NpZ251cC5qc3giXSwic291cmNlUm9vdCI6IiJ9