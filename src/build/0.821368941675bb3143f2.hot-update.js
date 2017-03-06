webpackHotUpdate(0,{

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
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
	
	    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
	
	    _this.alertOptions = {
	      offset: 14,
	      position: 'bottom left',
	      theme: 'dark',
	      time: 5000,
	      transition: 'scale'
	    };
	    return _this;
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
	        _react2.default.createElement(_reactAlert2.default, _extends({ ref: function ref(a) {
	            return global.msg = a;
	          } }, this.alertOptions)),
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module), (function() { return this; }())))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3g/YmMwYSJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwiYWxlcnRPcHRpb25zIiwib2Zmc2V0IiwicG9zaXRpb24iLCJ0aGVtZSIsInRpbWUiLCJ0cmFuc2l0aW9uIiwic29ja2V0Iiwid2luZG93IiwiY29udGV4dCIsIm9uIiwib2JqIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwic2hvd0FsZXJ0IiwibWVzc2FnZSIsInNldEl0ZW0iLCJ1c2VybmFtZSIsInB1c2giLCJwYXRobmFtZSIsInNldFN0YXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsInJlZnMiLCJ2YWx1ZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImVtaXQiLCJtc2ciLCJzaG93IiwidHlwZSIsImljb24iLCJhIiwiZ2xvYmFsIiwic2lnbkluIiwiYmluZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsSzs7O0FBQ0osa0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSwrR0FDVkEsS0FEVTs7QUFFaEIsV0FBS0MsWUFBTCxHQUFvQjtBQUNsQkMsZUFBUSxFQURVO0FBRWxCQyxpQkFBVSxhQUZRO0FBR2xCQyxjQUFPLE1BSFc7QUFJbEJDLGFBQU0sSUFKWTtBQUtsQkMsbUJBQVk7QUFMTSxNQUFwQjtBQUZnQjtBQVNqQjs7Ozt5Q0FFbUI7QUFDbEIsV0FBSUMsU0FBU0MsT0FBT0QsTUFBcEI7QUFDQSxXQUFJRSxVQUFVLElBQWQ7QUFDQUYsY0FBT0csRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFVBQVNDLEdBQVQsRUFBYztBQUN4QyxhQUFJSCxPQUFPSSxjQUFQLENBQXNCQyxPQUF0QixDQUE4QixNQUE5QixDQUFKLEVBQTJDO0FBQ3pDSixtQkFBUUssU0FBUixDQUFrQiwwQkFBbEI7QUFDRDtBQUNELGFBQUtILElBQUlJLE9BQVQsRUFBbUI7QUFDakJOLG1CQUFRSyxTQUFSLENBQWtCSCxJQUFJSSxPQUF0QjtBQUNELFVBRkQsTUFFTztBQUNMUCxrQkFBT0ksY0FBUCxDQUFzQkksT0FBdEIsQ0FBOEIsTUFBOUIsRUFBc0NMLElBQUlNLFFBQTFDO0FBQ0EsdUNBQWVDLElBQWYsQ0FBb0IsRUFBRUMsVUFBVSxPQUFaLEVBQXBCO0FBQ0Q7QUFDRixRQVZEO0FBV0EsWUFBS0MsUUFBTCxDQUFjO0FBQ1piLGlCQUFRQTtBQURJLFFBQWQ7QUFHRDs7OzRCQUVNYyxDLEVBQUc7QUFDUkEsU0FBRUMsY0FBRjtBQUNBLFdBQUlDLE9BQU87QUFDVE4sbUJBQVUsS0FBS08sSUFBTCxDQUFVUCxRQUFWLENBQW1CUSxLQURwQjtBQUVUQyxtQkFBVSxLQUFLRixJQUFMLENBQVVFLFFBQVYsQ0FBbUJEO0FBRnBCLFFBQVg7QUFJQUUsZUFBUUMsR0FBUixDQUFZLHFCQUFaO0FBQ0FwQixjQUFPRCxNQUFQLENBQWNzQixJQUFkLENBQW1CLFFBQW5CLEVBQTZCTixJQUE3QjtBQUNEOzs7K0JBRVNPLEcsRUFBSTtBQUNaQSxXQUFJQyxJQUFKLENBQVNELEdBQVQsRUFBYztBQUNaekIsZUFBTSxJQURNO0FBRVoyQixlQUFNLFNBRk07QUFHWkMsZUFBTSx1Q0FBSyxLQUFJLDRCQUFUO0FBSE0sUUFBZDtBQUtEOzs7OEJBRVE7QUFDUCxjQUNFO0FBQUE7QUFBQTtBQUNFLHdFQUFnQixLQUFLLGFBQUNDLENBQUQ7QUFBQSxvQkFBT0MsT0FBT0wsR0FBUCxHQUFhSSxDQUFwQjtBQUFBLFlBQXJCLElBQWdELEtBQUtqQyxZQUFyRCxFQURGO0FBRUM7QUFBQTtBQUFBLGFBQU0sV0FBVSxXQUFoQixFQUE0QixVQUFVLEtBQUttQyxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBdEM7QUFBQTtBQUVFLG9EQUFPLEtBQUksVUFBWCxFQUFzQixVQUFTLE1BQS9CLEdBRkY7QUFHRyxvREFISDtBQUlHLG9EQUpIO0FBQUE7QUFNRSxvREFBTyxNQUFLLFVBQVosRUFBdUIsS0FBSSxVQUEzQixFQUFzQyxVQUFTLE1BQS9DLEdBTkY7QUFPRyxvREFQSDtBQVFHLG9EQVJIO0FBU0c7QUFBQTtBQUFBLGVBQVEsTUFBSyxRQUFiO0FBQUE7QUFBQTtBQVRIO0FBRkQsUUFERjtBQWdCRDs7OztHQWxFaUIsZ0JBQU1DLFM7O21CQXFFWHZDLEsiLCJmaWxlIjoiMC44MjEzNjg5NDE2NzViYjMxNDNmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgXG5pbXBvcnQgeyBMaW5rLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQWxlcnRDb250YWluZXIgZnJvbSAncmVhY3QtYWxlcnQnO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5hbGVydE9wdGlvbnMgPSB7XG4gICAgICBvZmZzZXQ6IDE0LFxuICAgICAgcG9zaXRpb246ICdib3R0b20gbGVmdCcsXG4gICAgICB0aGVtZTogJ2RhcmsnLFxuICAgICAgdGltZTogNTAwMCxcbiAgICAgIHRyYW5zaXRpb246ICdzY2FsZSdcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIHNvY2tldCA9IHdpbmRvdy5zb2NrZXQ7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIHNvY2tldC5vbignc2lnbmluUmVzcG9uc2UnLCBmdW5jdGlvbihvYmopIHtcbiAgICAgIGlmICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB7XG4gICAgICAgIGNvbnRleHQuc2hvd0FsZXJ0KFwiWW91cmUgYWxyZWFkeSBsb2dnZWQgaW4hXCIpO1xuICAgICAgfVxuICAgICAgaWYgKCBvYmoubWVzc2FnZSApIHtcbiAgICAgICAgY29udGV4dC5zaG93QWxlcnQob2JqLm1lc3NhZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBvYmoudXNlcm5hbWUpO1xuICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKHsgcGF0aG5hbWU6ICcvaG9tZSd9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNvY2tldDogc29ja2V0XG4gICAgfSk7XG4gIH1cblxuICBzaWduSW4oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgdXNlciA9IHtcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnJlZnMudXNlcm5hbWUudmFsdWUsXG4gICAgICBwYXNzd29yZDogdGhpcy5yZWZzLnBhc3N3b3JkLnZhbHVlXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnYXR0ZW1wdCB0byBzaWduIGluIScpO1xuICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnc2lnbmluJywgdXNlcik7XG4gIH1cblxuICBzaG93QWxlcnQobXNnKXtcbiAgICBtc2cuc2hvdyhtc2csIHtcbiAgICAgIHRpbWU6IDIwMDAsXG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICBpY29uOiA8aW1nIHNyYz1cInBhdGgvdG8vc29tZS9pbWcvMzJ4MzIucG5nXCIgLz5cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFsZXJ0Q29udGFpbmVyIHJlZj17KGEpID0+IGdsb2JhbC5tc2cgPSBhfSB7Li4udGhpcy5hbGVydE9wdGlvbnN9IC8+XG4gICAgICBcdDxmb3JtIGNsYXNzTmFtZT1cImxvZ2luRm9ybVwiIG9uU3VibWl0PXt0aGlzLnNpZ25Jbi5iaW5kKHRoaXMpfT5cbiAgICAgICAgXHRVc2VybmFtZTogXG4gICAgICAgIFx0PGlucHV0IHJlZj1cInVzZXJuYW1lXCIgcmVxdWlyZWQ9XCJ0cnVlXCIvPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgXHRQYXNzd29yZDpcbiAgICAgICAgXHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcmVmPVwicGFzc3dvcmRcIiByZXF1aXJlZD1cInRydWVcIi8+XG4gICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZyBpbjwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanN4Il0sInNvdXJjZVJvb3QiOiIifQ==