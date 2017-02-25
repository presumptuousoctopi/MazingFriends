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
	
	var _GameOver = __webpack_require__(276);
	
	var _GameOver2 = _interopRequireDefault(_GameOver);
	
	var _Controls = __webpack_require__(283);
	
	var _Controls2 = _interopRequireDefault(_Controls);
	
	var _ProgressBar = __webpack_require__(277);
	
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
					console.log(window.gameover),
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Chat = function (_React$Component) {
	  _inherits(Chat, _React$Component);
	
	  function Chat() {
	    _classCallCheck(this, Chat);
	
	    var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this));
	
	    _this.state = {
	      text: "video"
	    };
	    console.log(_this.state.text);
	    return _this;
	  }
	
	  _createClass(Chat, [{
	    key: 'switchChat',
	    value: function switchChat(value) {
	      this.setState({
	        text: value
	      });
	      if (value === 'video') {
	        socket.emit('changedToVideo', '');
	      }
	    }
	  }, {
	    key: 'stopGame',
	    value: function stopGame() {
	      location.reload();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
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
	          ),
	          _react2.default.createElement(
	            'form',
	            null,
	            _react2.default.createElement(
	              'h3',
	              null,
	              'Chat Options'
	            ),
	            _react2.default.createElement('input', { type: 'radio', name: 'chat', value: 'text', onChange: this.switchChat.bind(this, "text") }),
	            'Text',
	            _react2.default.createElement('input', { type: 'radio', name: 'chat', value: 'video', onChange: this.switchChat.bind(this, "video") }),
	            'Video'
	          )
	        ),
	        this.state.text === "video" ? _react2.default.createElement(_VideoChat2.default, null) : _react2.default.createElement(_TextChat2.default, null)
	      );
	    }
	  }]);
	
	  return Chat;
	}(_react2.default.Component);
	
	;
	
	exports.default = Chat;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ChatView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 276:
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
	
	var GameOver = function (_React$Component) {
	  _inherits(GameOver, _React$Component);
	
	  function GameOver(props) {
	    _classCallCheck(this, GameOver);
	
	    return _possibleConstructorReturn(this, (GameOver.__proto__ || Object.getPrototypeOf(GameOver)).call(this, props));
	  }
	
	  _createClass(GameOver, [{
	    key: 'quitGame',
	    value: function quitGame() {
	      location.reload();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'GameOver' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Game Over!'
	        ),
	        ' ',
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Your time: ',
	          this.props.time
	        ),
	        ' ',
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          'button',
	          { className: 'homeButtons' },
	          'Keep Playing'
	        ),
	        ' ',
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/' },
	          _react2.default.createElement(
	            'button',
	            { className: 'homeButtons', onClick: this.quitGame.bind(this) },
	            'Quit'
	          )
	        )
	      );
	    }
	  }]);
	
	  return GameOver;
	}(_react2.default.Component);
	
	exports.default = GameOver;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "GameOver.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Controls = function (_React$Component) {
	  _inherits(Controls, _React$Component);
	
	  function Controls() {
	    _classCallCheck(this, Controls);
	
	    return _possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).apply(this, arguments));
	  }
	
	  _createClass(Controls, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "Controls" },
	        _react2.default.createElement(
	          "h1",
	          null,
	          "Controls"
	        ),
	        _react2.default.createElement(
	          "table",
	          { className: "Move" },
	          _react2.default.createElement(
	            "th",
	            null,
	            "Move"
	          ),
	          _react2.default.createElement(
	            "tr",
	            null,
	            _react2.default.createElement(
	              "td",
	              null,
	              " A: left"
	            )
	          ),
	          _react2.default.createElement(
	            "tr",
	            null,
	            _react2.default.createElement(
	              "td",
	              null,
	              " D: right"
	            )
	          ),
	          _react2.default.createElement(
	            "tr",
	            null,
	            _react2.default.createElement(
	              "td",
	              null,
	              " W: forward"
	            )
	          ),
	          _react2.default.createElement(
	            "tr",
	            null,
	            _react2.default.createElement(
	              "td",
	              null,
	              " S: backward"
	            )
	          ),
	          _react2.default.createElement(
	            "tr",
	            null,
	            _react2.default.createElement(
	              "td",
	              null,
	              "[ space ]: jump"
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "table",
	          { className: "Look" },
	          _react2.default.createElement(
	            "th",
	            null,
	            "Look"
	          ),
	          _react2.default.createElement(
	            "tr",
	            null,
	            _react2.default.createElement(
	              "td",
	              null,
	              " \u2190 : left"
	            )
	          ),
	          _react2.default.createElement(
	            "tr",
	            null,
	            _react2.default.createElement(
	              "td",
	              null,
	              " \u2192 : right"
	            )
	          ),
	          _react2.default.createElement(
	            "tr",
	            null,
	            _react2.default.createElement(
	              "td",
	              null,
	              " \u2191 : up"
	            )
	          ),
	          _react2.default.createElement(
	            "tr",
	            null,
	            _react2.default.createElement(
	              "td",
	              null,
	              " \u2193 : down"
	            )
	          ),
	          _react2.default.createElement(
	            "tr",
	            null,
	            _react2.default.createElement(
	              "td",
	              null,
	              " F : fire"
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Controls;
	}(_react2.default.Component);
	
	exports.default = Controls;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Controls.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWVWaWV3LmpzeD9mYjdlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUvQ2hhdFZpZXcuanN4PzkzOWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR2FtZS9HYW1lT3Zlci5qc3g/Njk3YSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0NvbnRyb2xzLmpzeD82OWZiIl0sIm5hbWVzIjpbIkdhbWUiLCJzdGF0ZSIsImdhbWVvdmVyIiwidGltZSIsInRpbWVyIiwiY29udHJvbHMiLCJzb2NrZXQiLCJ3aW5kb3ciLCJjb250ZXh0Iiwib24iLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb250cm9sc0NsaWNrSGFuZGxlciIsImJpbmQiLCJDb21wb25lbnQiLCJDaGF0IiwidGV4dCIsInZhbHVlIiwiZW1pdCIsImxvY2F0aW9uIiwicmVsb2FkIiwicHJvcHMiLCJzdG9wR2FtZSIsInN3aXRjaENoYXQiLCJHYW1lT3ZlciIsInF1aXRHYW1lIiwiQ29udHJvbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxJOzs7QUFDTCxrQkFBYztBQUFBOztBQUFBOztBQUViLFNBQUtDLEtBQUwsR0FBYTtBQUNaQyxjQUFVLEtBREU7QUFFWkMsVUFBTSxJQUZNO0FBR1pDLFdBQU8sSUFISztBQUlaQyxjQUFVO0FBSkUsSUFBYjtBQUZhO0FBUWI7Ozs7dUNBRW1CO0FBQ25CLFFBQUlDLFNBQVNDLE9BQU9ELE1BQXBCO0FBQ0EsUUFBSUUsVUFBVSxJQUFkOztBQUVBRixXQUFPRyxFQUFQLENBQVUsZ0JBQVYsRUFBNEIsVUFBU04sSUFBVCxFQUFlO0FBQ3pDSyxhQUFRRSxRQUFSLENBQWlCO0FBQ2hCUixnQkFBVSxJQURNO0FBRWhCQyxZQUFNQTtBQUZVLE1BQWpC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WUFMSjtBQVFJO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixZQVJKO0FBV0k7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFlBWEo7QUFjSTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFkSixVQUhGO0FBc0JHO0FBQUE7QUFBQSxhQUFPLFdBQVUsTUFBakI7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFFRztBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsWUFGSDtBQUtHO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixZQUxIO0FBUUc7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFlBUkg7QUFXRztBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsWUFYSDtBQWNHO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQWRIO0FBdEJILFFBREY7QUE0Q0Q7Ozs7R0E5Q29CLGdCQUFNWixTOzttQkFpRGRZLFEiLCJmaWxlIjoiMC45NWIyZjIzYjAzZDIwZGI4NjY3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENoYXQgZnJvbSAnLi9DaGF0Vmlldy5qc3gnO1xyXG5pbXBvcnQgR2FtZU92ZXIgZnJvbSAnLi9HYW1lT3Zlci5qc3gnXHJcbmltcG9ydCBDb250cm9scyBmcm9tICcuL0NvbnRyb2xzLmpzeCdcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vUHJvZ3Jlc3NCYXIuanN4J1xyXG5cclxuY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRnYW1lb3ZlcjogZmFsc2UsXHJcblx0XHRcdHRpbWU6IG51bGwsXHJcblx0XHRcdHRpbWVyOiBudWxsLFxyXG5cdFx0XHRjb250cm9sczogZmFsc2VcclxuXHRcdH1cclxuXHR9IFxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHZhciBzb2NrZXQgPSB3aW5kb3cuc29ja2V0O1xyXG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHRzb2NrZXQub24oJ2dhbWVvdmVybGlzdGVuJywgZnVuY3Rpb24odGltZSkge1xyXG5cdFx0XHRcdGNvbnRleHQuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0Z2FtZW92ZXI6IHRydWUsXHJcblx0XHRcdFx0XHR0aW1lOiB0aW1lXHJcblx0XHRcdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdnYW1lb3ZlciEnKVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRzb2NrZXQub24oJ3RpbWVyJywgZnVuY3Rpb24odGltZXIpIHtcclxuXHRcdFx0XHRjb250ZXh0LnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdHRpbWVyOiB0aW1lclxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG4gIH1cclxuXHJcbiAgY29udHJvbHNDbGlja0hhbmRsZXIoKSB7XHJcbiAgXHR0aGlzLnNldFN0YXRlKHtcclxuICBcdFx0Y29udHJvbHM6ICF0aGlzLnN0YXRlLmNvbnRyb2xzXHJcbiAgXHR9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJHYW1lXCI+XHJcblx0XHRcdHtjb25zb2xlLmxvZyh3aW5kb3cuZ2FtZW92ZXIpfVxyXG4gICAgICBcdDxDaGF0IHRpbWVyPXt0aGlzLnN0YXRlLnRpbWVyfSBjb250cm9sc0NsaWNrSGFuZGxlcj17dGhpcy5jb250cm9sc0NsaWNrSGFuZGxlci5iaW5kKHRoaXMpfSAvPlxyXG4gICAgICBcdHt0aGlzLnN0YXRlLmdhbWVvdmVyID8gPEdhbWVPdmVyIHRpbWU9e3RoaXMuc3RhdGUudGltZX0vPiA6ICcnfVxyXG4gICAgICBcdHt0aGlzLnN0YXRlLmNvbnRyb2xzID8gPENvbnRyb2xzIGNvbnRyb2xzQ2xpY2tIYW5kbGVyPXt0aGlzLmNvbnRyb2xzQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyl9IC8+IDogJyd9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9HYW1lVmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBUZXh0Q2hhdCBmcm9tICcuL1RleHRDaGF0LmpzeCdcclxuaW1wb3J0IFZpZGVvQ2hhdCBmcm9tICcuL1ZpZGVvQ2hhdC5qc3gnO1xyXG5cclxuY2xhc3MgQ2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdGV4dDogXCJ2aWRlb1wiXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRleHQpXHJcbiAgfVxyXG5cclxuICBzd2l0Y2hDaGF0KHZhbHVlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdGV4dDogdmFsdWVcclxuICAgIH0pXHJcbiAgICBpZiAodmFsdWUgPT09ICd2aWRlbycpIHtcclxuICAgICAgc29ja2V0LmVtaXQoJ2NoYW5nZWRUb1ZpZGVvJywgJycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RvcEdhbWUoKSB7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiT3B0aW9uc1wiPlxyXG4gICAgICAgICAgPGgxPk1hemluZyBGcmllbmRzPC9oMT5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnRpbWVyID8gPGgyPnt0aGlzLnByb3BzLnRpbWVyfTwvaDI+IDogPHA+d2FpdGluZyBmb3Igc2Vjb25kIHBsYXllci4uLjwvcD59XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbkJ1dHRvbnNcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNvbnRyb2xzQ2xpY2tIYW5kbGVyfT5Db250cm9sczwvYnV0dG9uPlxyXG4gICAgICAgICAgPExpbmsgdG89XCIvXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb25CdXR0b25zXCIgb25DbGljaz17dGhpcy5zdG9wR2FtZS5iaW5kKHRoaXMpfT5RdWl0IEdhbWU8L2J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGgzPkNoYXQgT3B0aW9uczwvaDM+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2hhdFwiIHZhbHVlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnN3aXRjaENoYXQuYmluZCh0aGlzLCBcInRleHRcIil9Lz5UZXh0XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2hhdFwiIHZhbHVlPVwidmlkZW9cIiBvbkNoYW5nZT17dGhpcy5zd2l0Y2hDaGF0LmJpbmQodGhpcywgXCJ2aWRlb1wiKX0vPlZpZGVvXHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3RoaXMuc3RhdGUudGV4dCA9PT0gXCJ2aWRlb1wiID8gPFZpZGVvQ2hhdC8+IDogPFRleHRDaGF0Lz4gfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9DaGF0Vmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5cclxuY2xhc3MgR2FtZU92ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG4gIHF1aXRHYW1lKCkge1xyXG4gICAgbG9jYXRpb24ucmVsb2FkKClcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR2FtZU92ZXJcIj5cclxuICAgICAgXHQ8aDE+R2FtZSBPdmVyITwvaDE+IDxici8+XHJcbiAgICAgIFx0PGgyPllvdXIgdGltZToge3RoaXMucHJvcHMudGltZX08L2gyPiA8YnIvPlxyXG4gICAgICBcdDxidXR0b24gY2xhc3NOYW1lPVwiaG9tZUJ1dHRvbnNcIj5LZWVwIFBsYXlpbmc8L2J1dHRvbj4gPGJyLz5cclxuICAgICAgXHQ8TGluayB0bz0nLyc+PGJ1dHRvbiBjbGFzc05hbWU9XCJob21lQnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMucXVpdEdhbWUuYmluZCh0aGlzKX0+UXVpdDwvYnV0dG9uPjwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZU92ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9HYW1lT3Zlci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQ29udHJvbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29udHJvbHNcIj5cclxuICAgICAgICA8aDE+Q29udHJvbHM8L2gxPlxyXG5cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiTW92ZVwiPlxyXG4gICAgICAgICAgPHRoPk1vdmU8L3RoPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPiBBOiBsZWZ0PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD4gRDogcmlnaHQ8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPiBXOiBmb3J3YXJkPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD4gUzogYmFja3dhcmQ8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPlsgc3BhY2UgXToganVtcDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90YWJsZT5cclxuXHJcbiAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJMb29rXCI+XHJcbiAgICAgICAgICA8dGg+TG9vazwvdGg+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+IOKGkCA6IGxlZnQ8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPiDihpIgOiByaWdodDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+IOKGkSA6IHVwPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD4g4oaTIDogZG93bjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+IEYgOiBmaXJlPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RhYmxlPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9Db250cm9scy5qc3giXSwic291cmNlUm9vdCI6IiJ9