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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWVWaWV3LmpzeD9mYjdlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUvQ2hhdFZpZXcuanN4PzkzOWMiXSwibmFtZXMiOlsiR2FtZSIsInN0YXRlIiwiZ2FtZW92ZXIiLCJ0aW1lIiwidGltZXIiLCJjb250cm9scyIsInNvY2tldCIsIndpbmRvdyIsImNvbnRleHQiLCJvbiIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbnRyb2xzQ2xpY2tIYW5kbGVyIiwiYmluZCIsIkNvbXBvbmVudCIsIkNoYXQiLCJwcm9wcyIsInZpZGVvIiwidGV4dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJsb2NhdGlvbiIsInJlbG9hZCIsInN0b3BHYW1lIiwic3dpdGNoQ2hhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU1BLEk7OztBQUNMLGtCQUFjO0FBQUE7O0FBQUE7O0FBRWIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGNBQVUsS0FERTtBQUVaQyxVQUFNLElBRk07QUFHWkMsV0FBTyxJQUhLO0FBSVpDLGNBQVU7QUFKRSxJQUFiO0FBRmE7QUFRYjs7Ozt1Q0FFbUI7QUFDbkIsUUFBSUMsU0FBU0MsT0FBT0QsTUFBcEI7QUFDQSxRQUFJRSxVQUFVLElBQWQ7O0FBRUFGLFdBQU9HLEVBQVAsQ0FBVSxnQkFBVixFQUE0QixVQUFTTixJQUFULEVBQWU7QUFDekNLLGFBQVFFLFFBQVIsQ0FBaUI7QUFDaEJSLGdCQUFVLElBRE07QUFFaEJDLFlBQU1BLElBRlU7QUFHWEMsYUFBTztBQUhJLE1BQWpCO0FBS0ZPLGFBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0UsS0FQRjs7QUFTQU4sV0FBT0csRUFBUCxDQUFVLE9BQVYsRUFBbUIsVUFBU0wsS0FBVCxFQUFnQjtBQUNqQ0ksYUFBUUUsUUFBUixDQUFpQjtBQUNoQk4sYUFBT0E7QUFEUyxNQUFqQjtBQUdBLEtBSkY7QUFLQzs7OzBDQUVzQjtBQUN0QixTQUFLTSxRQUFMLENBQWM7QUFDYkwsZUFBVSxDQUFDLEtBQUtKLEtBQUwsQ0FBV0k7QUFEVCxLQUFkO0FBR0E7Ozs0QkFFUTtBQUNQLFdBQ0U7QUFBQTtBQUFBLE9BQUssV0FBVSxNQUFmO0FBQ0YsK0RBREU7QUFFQyx5REFBTSxPQUFPLEtBQUtKLEtBQUwsQ0FBV0csS0FBeEIsRUFBK0Isc0JBQXNCLEtBQUtTLG9CQUFMLENBQTBCQyxJQUExQixDQUErQixJQUEvQixDQUFyRCxHQUZEO0FBR0UsVUFBS2IsS0FBTCxDQUFXQyxRQUFYLEdBQXNCLG9EQUFVLE1BQU0sS0FBS0QsS0FBTCxDQUFXRSxJQUEzQixHQUF0QixHQUEyRCxFQUg3RDtBQUlFLFVBQUtGLEtBQUwsQ0FBV0ksUUFBWCxHQUFzQixvREFBVSxzQkFBc0IsS0FBS1Esb0JBQUwsQ0FBMEJDLElBQTFCLENBQStCLElBQS9CLENBQWhDLEdBQXRCLEdBQWlHO0FBSm5HLEtBREY7QUFRRDs7OztHQTlDZ0IsZ0JBQU1DLFM7O21CQWlEVmYsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RGY7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU1nQixJOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZHQUNYQSxLQURXOztBQUVqQixXQUFLaEIsS0FBTCxHQUFhO0FBQ1hpQixjQUFPO0FBREksTUFBYjtBQUdBUCxhQUFRQyxHQUFSLENBQVksTUFBS1gsS0FBTCxDQUFXa0IsSUFBdkI7QUFMaUI7QUFNbEI7Ozs7a0NBRVk7QUFDWCxZQUFLVCxRQUFMLENBQWM7QUFDWlEsZ0JBQU87QUFESyxRQUFkO0FBR0E7QUFDQTtBQUNBO0FBQ0Q7OztnQ0FFVTtBQUNURSxnQkFBU0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsTUFBbEM7QUFDQUMsZ0JBQVNDLE1BQVQ7QUFDRDs7OzhCQUVRO0FBQ1BiLGVBQVFDLEdBQVIsQ0FBWSxLQUFLSyxLQUFqQjtBQUNBLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBLGFBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBRUcsZ0JBQUtBLEtBQUwsQ0FBV2IsS0FBWCxHQUFtQjtBQUFBO0FBQUE7QUFBSyxrQkFBS2EsS0FBTCxDQUFXYjtBQUFoQixZQUFuQixHQUFpRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRnBEO0FBR0U7QUFBQTtBQUFBLGVBQVEsV0FBVSxlQUFsQixFQUFrQyxTQUFTLEtBQUthLEtBQUwsQ0FBV0osb0JBQXREO0FBQUE7QUFBQSxZQUhGO0FBSUU7QUFBQTtBQUFBLGVBQU0sSUFBRyxHQUFUO0FBQWE7QUFBQTtBQUFBLGlCQUFRLFdBQVUsZUFBbEIsRUFBa0MsU0FBUyxLQUFLWSxRQUFMLENBQWNYLElBQWQsQ0FBbUIsSUFBbkIsQ0FBM0M7QUFBQTtBQUFBO0FBQWI7QUFKRixVQURGO0FBT0csY0FBS2IsS0FBTCxDQUFXaUIsS0FBWCxHQUFtQix3REFBbkIsR0FBa0MsRUFQckM7QUFRSTtBQUFBO0FBQUE7QUFDRSxvREFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxNQUF6QixFQUFnQyxPQUFNLE9BQXRDLEVBQThDLFVBQVUsS0FBS1EsVUFBTCxDQUFnQlosSUFBaEIsQ0FBcUIsSUFBckIsQ0FBeEQsR0FERjtBQUFBO0FBQUEsVUFSSjtBQVdFO0FBWEYsUUFERjtBQWVEOzs7O0dBeENnQixnQkFBTUMsUzs7QUF5Q3hCOzttQkFHY0MsSSIsImZpbGUiOiIwLjAyNWIzZWViM2FjOWExN2M2ZTkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoYXQgZnJvbSAnLi9DaGF0Vmlldy5qc3gnO1xuaW1wb3J0IEdhbWVPdmVyIGZyb20gJy4vR2FtZU92ZXIuanN4J1xuaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vQ29udHJvbHMuanN4J1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vUHJvZ3Jlc3NCYXIuanN4J1xuXG5jbGFzcyBHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRnYW1lb3ZlcjogZmFsc2UsXG5cdFx0XHR0aW1lOiBudWxsLFxuXHRcdFx0dGltZXI6IG51bGwsXG5cdFx0XHRjb250cm9sczogZmFsc2Vcblx0XHR9XG5cdH0gXG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dmFyIHNvY2tldCA9IHdpbmRvdy5zb2NrZXQ7XG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzO1xuXHRcdFxuXHRcdHNvY2tldC5vbignZ2FtZW92ZXJsaXN0ZW4nLCBmdW5jdGlvbih0aW1lKSB7XG5cdFx0XHRcdGNvbnRleHQuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGdhbWVvdmVyOiB0cnVlLFxuXHRcdFx0XHRcdHRpbWU6IHRpbWUsXG4gICAgICAgICAgdGltZXI6IG51bGxcblx0XHRcdFx0fSlcblx0XHRjb25zb2xlLmxvZygnZ2FtZW92ZXIhJylcblx0XHRcdH0pO1xuXG5cdFx0c29ja2V0Lm9uKCd0aW1lcicsIGZ1bmN0aW9uKHRpbWVyKSB7XG5cdFx0XHRcdGNvbnRleHQuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHRpbWVyOiB0aW1lclxuXHRcdFx0XHR9KVxuXHRcdFx0fSk7XG4gIH1cblxuICBjb250cm9sc0NsaWNrSGFuZGxlcigpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHRcdGNvbnRyb2xzOiAhdGhpcy5zdGF0ZS5jb250cm9sc1xuICBcdH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR2FtZVwiPlxuXHRcdCAgPFByb2dyZXNzQmFyLz5cbiAgICAgIFx0PENoYXQgdGltZXI9e3RoaXMuc3RhdGUudGltZXJ9IGNvbnRyb2xzQ2xpY2tIYW5kbGVyPXt0aGlzLmNvbnRyb2xzQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyl9IC8+XG4gICAgICBcdHt0aGlzLnN0YXRlLmdhbWVvdmVyID8gPEdhbWVPdmVyIHRpbWU9e3RoaXMuc3RhdGUudGltZX0vPiA6ICcnfVxuICAgICAgXHR7dGhpcy5zdGF0ZS5jb250cm9scyA/IDxDb250cm9scyBjb250cm9sc0NsaWNrSGFuZGxlcj17dGhpcy5jb250cm9sc0NsaWNrSGFuZGxlci5iaW5kKHRoaXMpfSAvPiA6ICcnfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbWUvR2FtZVZpZXcuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgVGV4dENoYXQgZnJvbSAnLi9UZXh0Q2hhdC5qc3gnXG5pbXBvcnQgVmlkZW9DaGF0IGZyb20gJy4vVmlkZW9DaGF0LmpzeCc7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9Qcm9ncmVzc0Jhci5qc3gnXG5cbmNsYXNzIENoYXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlkZW86IHRydWVcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS50ZXh0KVxuICB9XG5cbiAgc3dpdGNoQ2hhdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZGVvOiBmYWxzZVxuICAgIH0pXG4gICAgLy8gaWYgKHZhbHVlID09PSAndmlkZW8nKSB7XG4gICAgLy8gICBzb2NrZXQuZW1pdCgnY2hhbmdlZFRvVmlkZW8nLCAnJyk7XG4gICAgLy8gfVxuICB9XG5cbiAgc3RvcEdhbWUoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikucmVtb3ZlKCk7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk9wdGlvbnNcIj5cbiAgICAgICAgICA8aDE+TWF6aW5nIEZyaWVuZHM8L2gxPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnRpbWVyID8gPGgyPnt0aGlzLnByb3BzLnRpbWVyfTwvaDI+IDogPHA+V2FpdGluZyBmb3Igc2Vjb25kIHBsYXllci4uLiA8L3A+fVxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uQnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY29udHJvbHNDbGlja0hhbmRsZXJ9PkNvbnRyb2xzPC9idXR0b24+XG4gICAgICAgICAgPExpbmsgdG89XCIvXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb25CdXR0b25zXCIgb25DbGljaz17dGhpcy5zdG9wR2FtZS5iaW5kKHRoaXMpfT5RdWl0IEdhbWU8L2J1dHRvbj48L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS52aWRlbyA/IDxWaWRlb0NoYXQvPiA6ICcnIH1cbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2hhdFwiIHZhbHVlPVwidmlkZW9cIiBvbkNoYW5nZT17dGhpcy5zd2l0Y2hDaGF0LmJpbmQodGhpcyl9Lz5WaWRlbyBPZmZcbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxUZXh0Q2hhdC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IENoYXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9DaGF0Vmlldy5qc3giXSwic291cmNlUm9vdCI6IiJ9