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
	        'Username: ',
	        _react2.default.createElement('br', null),
	        _react2.default.createElement('input', { ref: 'username', required: 'true' }),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement('br', null),
	        'Password: ',
	        _react2.default.createElement('br', null),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3g/YmMwYSJdLCJuYW1lcyI6WyJMb2dpbiIsInNvY2tldCIsIndpbmRvdyIsImNvbnRleHQiLCJvbiIsIm9iaiIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImFsZXJ0IiwibWVzc2FnZSIsInNldEl0ZW0iLCJ1c2VybmFtZSIsInB1c2giLCJwYXRobmFtZSIsInNldFN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsInJlZnMiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImVtaXQiLCJzaWduSW4iLCJiaW5kIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0tBRU1BLEs7OztBQUNKLG9CQUFjO0FBQUE7O0FBQUE7QUFFYjs7Ozt5Q0FFbUI7QUFDbEIsV0FBSUMsU0FBU0MsT0FBT0QsTUFBcEI7QUFDQSxXQUFJRSxVQUFVLElBQWQ7QUFDQUYsY0FBT0csRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFVBQVNDLEdBQVQsRUFBYztBQUN4QyxhQUFJSCxPQUFPSSxjQUFQLENBQXNCQyxPQUF0QixDQUE4QixNQUE5QixDQUFKLEVBQTJDO0FBQ3pDQyxpQkFBTSwwQkFBTjtBQUNEO0FBQ0QsYUFBS0gsSUFBSUksT0FBVCxFQUFtQjtBQUNqQkQsaUJBQU1ILElBQUlJLE9BQVY7QUFDRCxVQUZELE1BRU87QUFDTFAsa0JBQU9JLGNBQVAsQ0FBc0JJLE9BQXRCLENBQThCLE1BQTlCLEVBQXNDTCxJQUFJTSxRQUExQztBQUNBLHVDQUFlQyxJQUFmLENBQW9CLEVBQUVDLFVBQVUsT0FBWixFQUFwQjtBQUNEO0FBQ0YsUUFWRDtBQVdBLFlBQUtDLFFBQUwsQ0FBYztBQUNaYixpQkFBUUE7QUFESSxRQUFkO0FBR0Q7Ozs0QkFFTWMsQyxFQUFHO0FBQ1JBLFNBQUVDLGNBQUY7QUFDQSxXQUFJQyxPQUFPO0FBQ1ROLG1CQUFVLEtBQUtPLElBQUwsQ0FBVVAsUUFBVixDQUFtQlEsS0FEcEI7QUFFVEMsbUJBQVUsS0FBS0YsSUFBTCxDQUFVRSxRQUFWLENBQW1CRDtBQUZwQixRQUFYO0FBSUFFLGVBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBcEIsY0FBT0QsTUFBUCxDQUFjc0IsSUFBZCxDQUFtQixRQUFuQixFQUE2Qk4sSUFBN0I7QUFDRDs7OzhCQUVRO0FBQ1AsY0FDQztBQUFBO0FBQUEsV0FBTSxVQUFVLEtBQUtPLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixJQUFqQixDQUFoQjtBQUFBO0FBQ1ksa0RBRFo7QUFFRSxrREFBTyxLQUFJLFVBQVgsRUFBc0IsVUFBUyxNQUEvQixHQUZGO0FBR0csa0RBSEg7QUFJRyxrREFKSDtBQUFBO0FBS1ksa0RBTFo7QUFNRSxrREFBTyxNQUFLLFVBQVosRUFBdUIsS0FBSSxVQUEzQixFQUFzQyxVQUFTLE1BQS9DLEdBTkY7QUFPRyxrREFQSDtBQVFHLGtEQVJIO0FBU0c7QUFBQTtBQUFBLGFBQVEsTUFBSyxRQUFiO0FBQUE7QUFBQTtBQVRILFFBREQ7QUFhRDs7OztHQWhEaUIsZ0JBQU1DLFM7O21CQW1EWDFCLEsiLCJmaWxlIjoiMC5kODI0MmE3NmVkODliMDU5Mjg3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgXG5pbXBvcnQgeyBMaW5rLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIHNvY2tldCA9IHdpbmRvdy5zb2NrZXQ7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIHNvY2tldC5vbignc2lnbmluUmVzcG9uc2UnLCBmdW5jdGlvbihvYmopIHtcbiAgICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB7XG4gICAgICAgIGFsZXJ0KFwiWW91cmUgYWxyZWFkeSBsb2dnZWQgaW4hXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCBvYmoubWVzc2FnZSApIHtcbiAgICAgICAgYWxlcnQob2JqLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBvYmoudXNlcm5hbWUpO1xuICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKHsgcGF0aG5hbWU6ICcvaG9tZSd9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNvY2tldDogc29ja2V0XG4gICAgfSk7XG4gIH1cblxuICBzaWduSW4oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdXNlciA9IHtcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnJlZnMudXNlcm5hbWUudmFsdWUsXG4gICAgICBwYXNzd29yZDogdGhpcy5yZWZzLnBhc3N3b3JkLnZhbHVlXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnYXR0ZW1wdCB0byBzaWduIGluIScpO1xuICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnc2lnbmluJywgdXNlcik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICBcdDxmb3JtIG9uU3VibWl0PXt0aGlzLnNpZ25Jbi5iaW5kKHRoaXMpfT5cbiAgICAgIFx0VXNlcm5hbWU6IDxici8+XG4gICAgICBcdDxpbnB1dCByZWY9XCJ1c2VybmFtZVwiIHJlcXVpcmVkPVwidHJ1ZVwiLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJyLz5cbiAgICAgIFx0UGFzc3dvcmQ6IDxici8+XG4gICAgICBcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiByZWY9XCJwYXNzd29yZFwiIHJlcXVpcmVkPVwidHJ1ZVwiLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9nIGluPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=