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
	    key: 'showAlert',
	    value: function showAlert(msg) {
	      msg.show(msg, {
	        time: 2000,
	        type: 'success',
	        icon: _react2.default.createElement('img', { src: 'path/to/some/img/32x32.png' })
	      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3g/YmMwYSJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwic29ja2V0Iiwid2luZG93IiwiY29udGV4dCIsIm9uIiwib2JqIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwic2hvd0FsZXJ0IiwibWVzc2FnZSIsInNldEl0ZW0iLCJ1c2VybmFtZSIsInB1c2giLCJwYXRobmFtZSIsInNldFN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsInJlZnMiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImVtaXQiLCJtc2ciLCJzaG93IiwidGltZSIsInR5cGUiLCJpY29uIiwic2lnbkluIiwiYmluZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU1BLEs7OztBQUNKLGtCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsMEdBQ1ZBLEtBRFU7QUFFakI7Ozs7eUNBRW1CO0FBQ2xCLFdBQUlDLFNBQVNDLE9BQU9ELE1BQXBCO0FBQ0EsV0FBSUUsVUFBVSxJQUFkO0FBQ0FGLGNBQU9HLEVBQVAsQ0FBVSxnQkFBVixFQUE0QixVQUFTQyxHQUFULEVBQWM7QUFDeEMsYUFBSUgsT0FBT0ksY0FBUCxDQUFzQkMsT0FBdEIsQ0FBOEIsTUFBOUIsQ0FBSixFQUEyQztBQUN6Q0osbUJBQVFLLFNBQVIsQ0FBa0IsMEJBQWxCO0FBQ0Q7QUFDRCxhQUFLSCxJQUFJSSxPQUFULEVBQW1CO0FBQ2pCTixtQkFBUUssU0FBUixDQUFrQkgsSUFBSUksT0FBdEI7QUFDRCxVQUZELE1BRU87QUFDTFAsa0JBQU9JLGNBQVAsQ0FBc0JJLE9BQXRCLENBQThCLE1BQTlCLEVBQXNDTCxJQUFJTSxRQUExQztBQUNBLHVDQUFlQyxJQUFmLENBQW9CLEVBQUVDLFVBQVUsT0FBWixFQUFwQjtBQUNEO0FBQ0YsUUFWRDtBQVdBLFlBQUtDLFFBQUwsQ0FBYztBQUNaYixpQkFBUUE7QUFESSxRQUFkO0FBR0Q7Ozs0QkFFTWMsQyxFQUFHO0FBQ1JBLFNBQUVDLGNBQUY7QUFDQSxXQUFJQyxPQUFPO0FBQ1ROLG1CQUFVLEtBQUtPLElBQUwsQ0FBVVAsUUFBVixDQUFtQlEsS0FEcEI7QUFFVEMsbUJBQVUsS0FBS0YsSUFBTCxDQUFVRSxRQUFWLENBQW1CRDtBQUZwQixRQUFYO0FBSUFFLGVBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBcEIsY0FBT0QsTUFBUCxDQUFjc0IsSUFBZCxDQUFtQixRQUFuQixFQUE2Qk4sSUFBN0I7QUFDRDs7OytCQUVTTyxHLEVBQUk7QUFDWkEsV0FBSUMsSUFBSixDQUFTRCxHQUFULEVBQWM7QUFDWkUsZUFBTSxJQURNO0FBRVpDLGVBQU0sU0FGTTtBQUdaQyxlQUFNLHVDQUFLLEtBQUksNEJBQVQ7QUFITSxRQUFkO0FBS0Q7Ozs4QkFFUTtBQUNQLGNBQ0U7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBLGFBQU0sV0FBVSxXQUFoQixFQUE0QixVQUFVLEtBQUtDLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixJQUFqQixDQUF0QztBQUFBO0FBRUUsb0RBQU8sS0FBSSxVQUFYLEVBQXNCLFVBQVMsTUFBL0IsR0FGRjtBQUdHLG9EQUhIO0FBSUcsb0RBSkg7QUFBQTtBQU1FLG9EQUFPLE1BQUssVUFBWixFQUF1QixLQUFJLFVBQTNCLEVBQXNDLFVBQVMsTUFBL0MsR0FORjtBQU9HLG9EQVBIO0FBUUcsb0RBUkg7QUFTRztBQUFBO0FBQUEsZUFBUSxNQUFLLFFBQWI7QUFBQTtBQUFBO0FBVEg7QUFERCxRQURGO0FBZUQ7Ozs7R0ExRGlCLGdCQUFNQyxTOzttQkE2RFhoQyxLIiwiZmlsZSI6IjAuMzFkNjVkODJhMmFmZTM5NDA1MjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7IFxuaW1wb3J0IHsgTGluaywgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IEFsZXJ0Q29udGFpbmVyIGZyb20gJ3JlYWN0LWFsZXJ0JztcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIHNvY2tldCA9IHdpbmRvdy5zb2NrZXQ7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIHNvY2tldC5vbignc2lnbmluUmVzcG9uc2UnLCBmdW5jdGlvbihvYmopIHtcbiAgICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB7XG4gICAgICAgIGNvbnRleHQuc2hvd0FsZXJ0KFwiWW91cmUgYWxyZWFkeSBsb2dnZWQgaW4hXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCBvYmoubWVzc2FnZSApIHtcbiAgICAgICAgY29udGV4dC5zaG93QWxlcnQob2JqLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBvYmoudXNlcm5hbWUpO1xuICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKHsgcGF0aG5hbWU6ICcvaG9tZSd9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNvY2tldDogc29ja2V0XG4gICAgfSk7XG4gIH1cblxuICBzaWduSW4oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdXNlciA9IHtcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnJlZnMudXNlcm5hbWUudmFsdWUsXG4gICAgICBwYXNzd29yZDogdGhpcy5yZWZzLnBhc3N3b3JkLnZhbHVlXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnYXR0ZW1wdCB0byBzaWduIGluIScpO1xuICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnc2lnbmluJywgdXNlcik7XG4gIH1cblxuICBzaG93QWxlcnQobXNnKXtcbiAgICBtc2cuc2hvdyhtc2csIHtcbiAgICAgIHRpbWU6IDIwMDAsXG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICBpY29uOiA8aW1nIHNyYz1cInBhdGgvdG8vc29tZS9pbWcvMzJ4MzIucG5nXCIgLz5cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIFx0PGZvcm0gY2xhc3NOYW1lPVwibG9naW5Gb3JtXCIgb25TdWJtaXQ9e3RoaXMuc2lnbkluLmJpbmQodGhpcyl9PlxuICAgICAgICBcdFVzZXJuYW1lOiBcbiAgICAgICAgXHQ8aW5wdXQgcmVmPVwidXNlcm5hbWVcIiByZXF1aXJlZD1cInRydWVcIi8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICBcdFBhc3N3b3JkOlxuICAgICAgICBcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiByZWY9XCJwYXNzd29yZFwiIHJlcXVpcmVkPVwidHJ1ZVwiLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9nIGluPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3giXSwic291cmNlUm9vdCI6IiJ9