webpackHotUpdate(0,{

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ChatView = __webpack_require__(245);
	
	var _ChatView2 = _interopRequireDefault(_ChatView);
	
	var _GameOver = __webpack_require__(277);
	
	var _GameOver2 = _interopRequireDefault(_GameOver);
	
	var _Controls = __webpack_require__(278);
	
	var _Controls2 = _interopRequireDefault(_Controls);
	
	var _ProgressBar = __webpack_require__(276);
	
	var _ProgressBar2 = _interopRequireDefault(_ProgressBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Game = function (_React$Component) {
		_inherits(Game, _React$Component);
	
		function Game() {
			_classCallCheck(this, Game);
	
			var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));
	
			_this.state = {
				gameover: false,
				time: null,
				timer: null,
				controls: false
			};
			return _this;
		}
	
		_createClass(Game, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var socket = window.socket;
				var context = this;
	
				socket.on('gameoverlisten', function (time) {
					context.setState({
						gameover: true,
						time: time,
						timer: null
					});
					console.log('gameover!');
				});
	
				socket.on('timer', function (timer) {
					context.setState({
						timer: timer
					});
				});
			}
		}, {
			key: 'controlsClickHandler',
			value: function controlsClickHandler() {
				this.setState({
					controls: !this.state.controls
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'Game' },
					_react2.default.createElement(_ProgressBar2.default, null),
					_react2.default.createElement(_ChatView2.default, { timer: this.state.timer, controlsClickHandler: this.controlsClickHandler.bind(this) }),
					this.state.gameover ? _react2.default.createElement(_GameOver2.default, { time: this.state.time }) : '',
					this.state.controls ? _react2.default.createElement(_Controls2.default, { controlsClickHandler: this.controlsClickHandler.bind(this) }) : ''
				);
			}
		}]);
	
		return Game;
	}(_react2.default.Component);
	
	exports.default = Game;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "GameView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 245:
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
	
	var _axios = __webpack_require__(246);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _TextChat = __webpack_require__(271);
	
	var _TextChat2 = _interopRequireDefault(_TextChat);
	
	var _VideoChat = __webpack_require__(275);
	
	var _VideoChat2 = _interopRequireDefault(_VideoChat);
	
	var _ProgressBar = __webpack_require__(276);
	
	var _ProgressBar2 = _interopRequireDefault(_ProgressBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Chat = function (_React$Component) {
	  _inherits(Chat, _React$Component);
	
	  function Chat(props) {
	    _classCallCheck(this, Chat);
	
	    var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, props));
	
	    _this.state = {
	      video: true
	    };
	    console.log(_this.state.text);
	    return _this;
	  }
	
	  _createClass(Chat, [{
	    key: 'switchChat',
	    value: function switchChat() {
	      this.setState({
	        video: false
	      });
	      // if (value === 'video') {
	      //   socket.emit('changedToVideo', '');
	      // }
	    }
	  }, {
	    key: 'stopGame',
	    value: function stopGame() {
	      document.getElementById("canvas").remove();
	      location.reload();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log(this.props);
	      return _react2.default.createElement(
	        'div',
	        { className: 'Chat' },
	        _react2.default.createElement(
	          'div',
	          { className: 'Options' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Mazing Friends'
	          ),
	          this.props.timer ? _react2.default.createElement(
	            'h2',
	            null,
	            this.props.timer
	          ) : _react2.default.createElement(
	            'p',
	            null,
	            'Waiting for second player... '
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'optionButtons', onClick: this.props.controlsClickHandler },
	            'Controls'
	          ),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/' },
	            _react2.default.createElement(
	              'button',
	              { className: 'optionButtons', onClick: this.stopGame.bind(this) },
	              'Quit Game'
	            )
	          )
	        ),
	        this.state.video ? _react2.default.createElement(_VideoChat2.default, null) : '',
	        _react2.default.createElement(
	          'form',
	          null,
	          _react2.default.createElement('input', { type: 'radio', name: 'chat', value: 'video', onChange: this.switchChat.bind(this) }),
	          'Video Off'
	        ),
	        _react2.default.createElement(_TextChat2.default, null)
	      );
	    }
	  }]);
	
	  return Chat;
	}(_react2.default.Component);
	
	;
	
	exports.default = Chat;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ChatView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWVWaWV3LmpzeD9mYjdlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUvQ2hhdFZpZXcuanN4PzkzOWMiXSwibmFtZXMiOlsiR2FtZSIsInN0YXRlIiwiZ2FtZW92ZXIiLCJ0aW1lIiwidGltZXIiLCJjb250cm9scyIsInNvY2tldCIsIndpbmRvdyIsImNvbnRleHQiLCJvbiIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbnRyb2xzQ2xpY2tIYW5kbGVyIiwiYmluZCIsIkNvbXBvbmVudCIsIkNoYXQiLCJwcm9wcyIsInZpZGVvIiwidGV4dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJsb2NhdGlvbiIsInJlbG9hZCIsInN0b3BHYW1lIiwic3dpdGNoQ2hhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU1BLEk7OztBQUNMLGtCQUFjO0FBQUE7O0FBQUE7O0FBRWIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGNBQVUsS0FERTtBQUVaQyxVQUFNLElBRk07QUFHWkMsV0FBTyxJQUhLO0FBSVpDLGNBQVU7QUFKRSxJQUFiO0FBRmE7QUFRYjs7Ozt1Q0FFbUI7QUFDbkIsUUFBSUMsU0FBU0MsT0FBT0QsTUFBcEI7QUFDQSxRQUFJRSxVQUFVLElBQWQ7O0FBRUFGLFdBQU9HLEVBQVAsQ0FBVSxnQkFBVixFQUE0QixVQUFTTixJQUFULEVBQWU7QUFDekNLLGFBQVFFLFFBQVIsQ0FBaUI7QUFDaEJSLGdCQUFVLElBRE07QUFFaEJDLFlBQU1BLElBRlU7QUFHWEMsYUFBTztBQUhJLE1BQWpCO0FBS0ZPLGFBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0UsS0FQRjs7QUFTQU4sV0FBT0csRUFBUCxDQUFVLE9BQVYsRUFBbUIsVUFBU0wsS0FBVCxFQUFnQjtBQUNqQ0ksYUFBUUUsUUFBUixDQUFpQjtBQUNoQk4sYUFBT0E7QUFEUyxNQUFqQjtBQUdBLEtBSkY7QUFLQzs7OzBDQUVzQjtBQUN0QixTQUFLTSxRQUFMLENBQWM7QUFDYkwsZUFBVSxDQUFDLEtBQUtKLEtBQUwsQ0FBV0k7QUFEVCxLQUFkO0FBR0E7Ozs0QkFFUTtBQUNQLFdBQ0U7QUFBQTtBQUFBLE9BQUssV0FBVSxNQUFmO0FBQ0YsK0RBREU7QUFFQyx5REFBTSxPQUFPLEtBQUtKLEtBQUwsQ0FBV0csS0FBeEIsRUFBK0Isc0JBQXNCLEtBQUtTLG9CQUFMLENBQTBCQyxJQUExQixDQUErQixJQUEvQixDQUFyRCxHQUZEO0FBR0UsVUFBS2IsS0FBTCxDQUFXQyxRQUFYLEdBQXNCLG9EQUFVLE1BQU0sS0FBS0QsS0FBTCxDQUFXRSxJQUEzQixHQUF0QixHQUEyRCxFQUg3RDtBQUlFLFVBQUtGLEtBQUwsQ0FBV0ksUUFBWCxHQUFzQixvREFBVSxzQkFBc0IsS0FBS1Esb0JBQUwsQ0FBMEJDLElBQTFCLENBQStCLElBQS9CLENBQWhDLEdBQXRCLEdBQWlHO0FBSm5HLEtBREY7QUFRRDs7OztHQTlDZ0IsZ0JBQU1DLFM7O21CQWlEVmYsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RGY7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU1nQixJOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZHQUNYQSxLQURXOztBQUVqQixXQUFLaEIsS0FBTCxHQUFhO0FBQ1hpQixjQUFPO0FBREksTUFBYjtBQUdBUCxhQUFRQyxHQUFSLENBQVksTUFBS1gsS0FBTCxDQUFXa0IsSUFBdkI7QUFMaUI7QUFNbEI7Ozs7a0NBRVk7QUFDWCxZQUFLVCxRQUFMLENBQWM7QUFDWlEsZ0JBQU87QUFESyxRQUFkO0FBR0E7QUFDQTtBQUNBO0FBQ0Q7OztnQ0FFVTtBQUNURSxnQkFBU0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsTUFBbEM7QUFDQUMsZ0JBQVNDLE1BQVQ7QUFDRDs7OzhCQUVRO0FBQ1BiLGVBQVFDLEdBQVIsQ0FBWSxLQUFLSyxLQUFqQjtBQUNBLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBLGFBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBRUcsZ0JBQUtBLEtBQUwsQ0FBV2IsS0FBWCxHQUFtQjtBQUFBO0FBQUE7QUFBSyxrQkFBS2EsS0FBTCxDQUFXYjtBQUFoQixZQUFuQixHQUFpRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRnBEO0FBR0U7QUFBQTtBQUFBLGVBQVEsV0FBVSxlQUFsQixFQUFrQyxTQUFTLEtBQUthLEtBQUwsQ0FBV0osb0JBQXREO0FBQUE7QUFBQSxZQUhGO0FBSUU7QUFBQTtBQUFBLGVBQU0sSUFBRyxHQUFUO0FBQWE7QUFBQTtBQUFBLGlCQUFRLFdBQVUsZUFBbEIsRUFBa0MsU0FBUyxLQUFLWSxRQUFMLENBQWNYLElBQWQsQ0FBbUIsSUFBbkIsQ0FBM0M7QUFBQTtBQUFBO0FBQWI7QUFKRixVQURGO0FBT0csY0FBS2IsS0FBTCxDQUFXaUIsS0FBWCxHQUFtQix3REFBbkIsR0FBa0MsRUFQckM7QUFRSTtBQUFBO0FBQUE7QUFDRSxvREFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxNQUF6QixFQUFnQyxPQUFNLE9BQXRDLEVBQThDLFVBQVUsS0FBS1EsVUFBTCxDQUFnQlosSUFBaEIsQ0FBcUIsSUFBckIsQ0FBeEQsR0FERjtBQUFBO0FBQUEsVUFSSjtBQVdFO0FBWEYsUUFERjtBQWVEOzs7O0dBeENnQixnQkFBTUMsUzs7QUF5Q3hCOzttQkFHY0MsSSIsImZpbGUiOiIwLmUyOWM4ZmI2NWZkNzM4OWM3Mjk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2hhdCBmcm9tICcuL0NoYXRWaWV3LmpzeCc7XHJcbmltcG9ydCBHYW1lT3ZlciBmcm9tICcuL0dhbWVPdmVyLmpzeCdcclxuaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vQ29udHJvbHMuanN4J1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9Qcm9ncmVzc0Jhci5qc3gnXHJcblxyXG5jbGFzcyBHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKClcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdGdhbWVvdmVyOiBmYWxzZSxcclxuXHRcdFx0dGltZTogbnVsbCxcclxuXHRcdFx0dGltZXI6IG51bGwsXHJcblx0XHRcdGNvbnRyb2xzOiBmYWxzZVxyXG5cdFx0fVxyXG5cdH0gXHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dmFyIHNvY2tldCA9IHdpbmRvdy5zb2NrZXQ7XHJcblx0XHR2YXIgY29udGV4dCA9IHRoaXM7XHJcblx0XHRcclxuXHRcdHNvY2tldC5vbignZ2FtZW92ZXJsaXN0ZW4nLCBmdW5jdGlvbih0aW1lKSB7XHJcblx0XHRcdFx0Y29udGV4dC5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHRnYW1lb3ZlcjogdHJ1ZSxcclxuXHRcdFx0XHRcdHRpbWU6IHRpbWUsXHJcbiAgICAgICAgICB0aW1lcjogbnVsbFxyXG5cdFx0XHRcdH0pXHJcblx0XHRjb25zb2xlLmxvZygnZ2FtZW92ZXIhJylcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0c29ja2V0Lm9uKCd0aW1lcicsIGZ1bmN0aW9uKHRpbWVyKSB7XHJcblx0XHRcdFx0Y29udGV4dC5zZXRTdGF0ZSh7XHJcblx0XHRcdFx0XHR0aW1lcjogdGltZXJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuICB9XHJcblxyXG4gIGNvbnRyb2xzQ2xpY2tIYW5kbGVyKCkge1xyXG4gIFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgXHRcdGNvbnRyb2xzOiAhdGhpcy5zdGF0ZS5jb250cm9sc1xyXG4gIFx0fSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR2FtZVwiPlxyXG5cdFx0ICA8UHJvZ3Jlc3NCYXIvPlxyXG4gICAgICBcdDxDaGF0IHRpbWVyPXt0aGlzLnN0YXRlLnRpbWVyfSBjb250cm9sc0NsaWNrSGFuZGxlcj17dGhpcy5jb250cm9sc0NsaWNrSGFuZGxlci5iaW5kKHRoaXMpfSAvPlxyXG4gICAgICBcdHt0aGlzLnN0YXRlLmdhbWVvdmVyID8gPEdhbWVPdmVyIHRpbWU9e3RoaXMuc3RhdGUudGltZX0vPiA6ICcnfVxyXG4gICAgICBcdHt0aGlzLnN0YXRlLmNvbnRyb2xzID8gPENvbnRyb2xzIGNvbnRyb2xzQ2xpY2tIYW5kbGVyPXt0aGlzLmNvbnRyb2xzQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyl9IC8+IDogJyd9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9HYW1lVmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBUZXh0Q2hhdCBmcm9tICcuL1RleHRDaGF0LmpzeCdcclxuaW1wb3J0IFZpZGVvQ2hhdCBmcm9tICcuL1ZpZGVvQ2hhdC5qc3gnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9Qcm9ncmVzc0Jhci5qc3gnXHJcblxyXG5jbGFzcyBDaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdmlkZW86IHRydWVcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudGV4dClcclxuICB9XHJcblxyXG4gIHN3aXRjaENoYXQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdmlkZW86IGZhbHNlXHJcbiAgICB9KVxyXG4gICAgLy8gaWYgKHZhbHVlID09PSAndmlkZW8nKSB7XHJcbiAgICAvLyAgIHNvY2tldC5lbWl0KCdjaGFuZ2VkVG9WaWRlbycsICcnKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIHN0b3BHYW1lKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikucmVtb3ZlKCk7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGF0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJPcHRpb25zXCI+XHJcbiAgICAgICAgICA8aDE+TWF6aW5nIEZyaWVuZHM8L2gxPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMudGltZXIgPyA8aDI+e3RoaXMucHJvcHMudGltZXJ9PC9oMj4gOiA8cD5XYWl0aW5nIGZvciBzZWNvbmQgcGxheWVyLi4uIDwvcD59XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbkJ1dHRvbnNcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNvbnRyb2xzQ2xpY2tIYW5kbGVyfT5Db250cm9sczwvYnV0dG9uPlxyXG4gICAgICAgICAgPExpbmsgdG89XCIvXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb25CdXR0b25zXCIgb25DbGljaz17dGhpcy5zdG9wR2FtZS5iaW5kKHRoaXMpfT5RdWl0IEdhbWU8L2J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3RoaXMuc3RhdGUudmlkZW8gPyA8VmlkZW9DaGF0Lz4gOiAnJyB9XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjaGF0XCIgdmFsdWU9XCJ2aWRlb1wiIG9uQ2hhbmdlPXt0aGlzLnN3aXRjaENoYXQuYmluZCh0aGlzKX0vPlZpZGVvIE9mZlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxUZXh0Q2hhdC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9HYW1lL0NoYXRWaWV3LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=