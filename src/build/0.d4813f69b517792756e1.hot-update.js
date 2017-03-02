webpackHotUpdate(0,{

/***/ 250:
/*!******************************************!*\
  !*** ./src/components/Game/GameView.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-loader/~/react-hot-api/modules/index.js */ 2), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 12), React = __webpack_require__(/*! react */ 103); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 103);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ChatView = __webpack_require__(/*! ./ChatView.jsx */ 251);
	
	var _ChatView2 = _interopRequireDefault(_ChatView);
	
	var _GameOver = __webpack_require__(/*! ./GameOver.jsx */ 283);
	
	var _GameOver2 = _interopRequireDefault(_GameOver);
	
	var _Controls = __webpack_require__(/*! ./Controls.jsx */ 284);
	
	var _Controls2 = _interopRequireDefault(_Controls);
	
	var _ProgressBar = __webpack_require__(/*! ./ProgressBar.jsx */ 282);
	
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
						time: time
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
					_react2.default.createElement(_ChatView2.default, { timer: this.state.timer, time: this.state.time, controlsClickHandler: this.controlsClickHandler.bind(this) }),
					this.state.gameover ? _react2.default.createElement(_GameOver2.default, { time: this.state.time }) : '',
					this.state.controls ? _react2.default.createElement(_Controls2.default, { controlsClickHandler: this.controlsClickHandler.bind(this) }) : ''
				);
			}
		}]);
	
		return Game;
	}(_react2.default.Component);
	
	exports.default = Game;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 278); if (makeExportsHot(module, __webpack_require__(/*! react */ 103))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "GameView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ },

/***/ 251:
/*!******************************************!*\
  !*** ./src/components/Game/ChatView.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-loader/~/react-hot-api/modules/index.js */ 2), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 12), React = __webpack_require__(/*! react */ 103); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 103);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 194);
	
	var _axios = __webpack_require__(/*! axios */ 252);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _TextChat = __webpack_require__(/*! ./TextChat.jsx */ 277);
	
	var _TextChat2 = _interopRequireDefault(_TextChat);
	
	var _VideoChat = __webpack_require__(/*! ./VideoChat.jsx */ 281);
	
	var _VideoChat2 = _interopRequireDefault(_VideoChat);
	
	var _ProgressBar = __webpack_require__(/*! ./ProgressBar.jsx */ 282);
	
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
	            'waiting for second player...'
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 278); if (makeExportsHot(module, __webpack_require__(/*! react */ 103))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ChatView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../~/webpack/buildin/module.js */ 1)(module)))

/***/ }

})
//# sourceMappingURL=0.d4813f69b517792756e1.hot-update.js.map