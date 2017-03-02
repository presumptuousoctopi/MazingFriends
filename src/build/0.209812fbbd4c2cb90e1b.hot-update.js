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
					_react2.default.createElement(_ChatView2.default, { timer: this.state.timer, time: this.state.time, controlsClickHandler: this.controlsClickHandler.bind(this) }),
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
	            'h2',
	            null,
	            this.props.time
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

/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ProfileView = __webpack_require__(286);
	
	var _ProfileView2 = _interopRequireDefault(_ProfileView);
	
	var _LobbyView = __webpack_require__(289);
	
	var _LobbyView2 = _interopRequireDefault(_LobbyView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);
	
	  function Home() {
	    _classCallCheck(this, Home);
	
	    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	  }
	
	  _createClass(Home, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'Home' },
	        _react2.default.createElement(_ProfileView2.default, null),
	        _react2.default.createElement(_LobbyView2.default, null)
	      );
	    }
	  }]);
	
	  return Home;
	}(_react2.default.Component);
	
	exports.default = Home;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "HomeView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _UserStats = __webpack_require__(287);
	
	var _UserStats2 = _interopRequireDefault(_UserStats);
	
	var _FriendSearch = __webpack_require__(288);
	
	var _FriendSearch2 = _interopRequireDefault(_FriendSearch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Profile = function (_React$Component) {
	  _inherits(Profile, _React$Component);
	
	  function Profile() {
	    _classCallCheck(this, Profile);
	
	    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
	  }
	
	  _createClass(Profile, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'Profile' },
	        _react2.default.createElement(_FriendSearch2.default, null),
	        _react2.default.createElement(_UserStats2.default, null)
	      );
	    }
	  }]);
	
	  return Profile;
	}(_react2.default.Component);
	
	exports.default = Profile;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ProfileView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 287:
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
	
	var UserStats = function (_React$Component) {
	  _inherits(UserStats, _React$Component);
	
	  function UserStats() {
	    _classCallCheck(this, UserStats);
	
	    return _possibleConstructorReturn(this, (UserStats.__proto__ || Object.getPrototypeOf(UserStats)).apply(this, arguments));
	  }
	
	  _createClass(UserStats, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "UserStats" },
	        _react2.default.createElement(
	          "h1",
	          null,
	          "User Stats"
	        )
	      );
	    }
	  }]);
	
	  return UserStats;
	}(_react2.default.Component);
	
	exports.default = UserStats;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "UserStats.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 288:
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
	
	var FriendSearch = function (_React$Component) {
	    _inherits(FriendSearch, _React$Component);
	
	    function FriendSearch() {
	        _classCallCheck(this, FriendSearch);
	
	        var _this = _possibleConstructorReturn(this, (FriendSearch.__proto__ || Object.getPrototypeOf(FriendSearch)).call(this));
	
	        _this.state = {
	            friend: "",
	            searchResult: ""
	        };
	        _this.updateFriend = _this.updateFriend.bind(_this);
	        return _this;
	    }
	
	    _createClass(FriendSearch, [{
	        key: "searchForFriends",
	        value: function searchForFriends(event) {
	            var context = this;
	            event.preventDefault();
	            socket.emit("getUsers", this.state.friend);
	            socket.on("users", function (obj) {
	                if (obj.data.username) {
	                    context.setState({
	                        searchResult: obj.data.username
	                    });
	                } else {
	                    alert("no such user in the database");
	                }
	            });
	        }
	    }, {
	        key: "updateFriend",
	        value: function updateFriend(event) {
	            this.setState({
	                friend: event.target.value
	            });
	        }
	    }, {
	        key: "addFriend",
	        value: function addFriend() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var button = null;
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    "form",
	                    null,
	                    _react2.default.createElement("input", { type: "text", value: this.state.friend, onChange: this.updateFriend, placeholder: "search for friends" }),
	                    _react2.default.createElement(
	                        "button",
	                        { type: "submit", onClick: this.searchForFriends.bind(this) },
	                        "Search"
	                    )
	                ),
	                _react2.default.createElement(
	                    "h4",
	                    null,
	                    this.state.searchResult
	                ),
	                this.state.searchResult !== "" && _react2.default.createElement(
	                    "button",
	                    { onClick: this.addFriend },
	                    "Add"
	                )
	            );
	        }
	    }]);
	
	    return FriendSearch;
	}(_react2.default.Component);
	
	exports.default = FriendSearch;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "FriendSearch.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _NewGame = __webpack_require__(290);
	
	var _NewGame2 = _interopRequireDefault(_NewGame);
	
	var _JoinGame = __webpack_require__(291);
	
	var _JoinGame2 = _interopRequireDefault(_JoinGame);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Lobby = function (_React$Component) {
	  _inherits(Lobby, _React$Component);
	
	  function Lobby() {
	    _classCallCheck(this, Lobby);
	
	    return _possibleConstructorReturn(this, (Lobby.__proto__ || Object.getPrototypeOf(Lobby)).apply(this, arguments));
	  }
	
	  _createClass(Lobby, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'Lobby' },
	        _react2.default.createElement(_NewGame2.default, null),
	        _react2.default.createElement(_JoinGame2.default, null)
	      );
	    }
	  }]);
	
	  return Lobby;
	}(_react2.default.Component);
	
	exports.default = Lobby;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "LobbyView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TitleView = __webpack_require__(280);
	
	var _TitleView2 = _interopRequireDefault(_TitleView);
	
	var _reactRouter = __webpack_require__(189);
	
	var _Controls = __webpack_require__(278);
	
	var _Controls2 = _interopRequireDefault(_Controls);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);
	
	  function Home() {
	    _classCallCheck(this, Home);
	
	    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));
	
	    _this.state = {
	      view: 'Home',
	      join: 'vanish',
	      new: 'vanish',
	      createRoomName: '',
	      joinRoomName: '',
	      controlsView: false
	    };
	    _this.createRoomButton = _this.createRoomButton.bind(_this);
	    _this.joinRoomButton = _this.joinRoomButton.bind(_this);
	    _this.newButtonClick = _this.newButtonClick.bind(_this);
	    _this.joinButtonClick = _this.joinButtonClick.bind(_this);
	    _this.handleChange = _this.handleChange.bind(_this);
	    return _this;
	  }
	
	  _createClass(Home, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var context = this;
	      socket.on('roomJoinError', function (message) {
	        _reactRouter.browserHistory.push({
	          pathname: '/home'
	        });
	        // context.setState({
	        //   view: 'Home'
	        // });
	        alert(message);
	      });
	    }
	  }, {
	    key: 'createRoomButton',
	    value: function createRoomButton() {
	      window.socket.emit('createRoom', this.state.createRoomName);
	      this.setState({
	        view: 'vanish'
	      });
	    }
	  }, {
	    key: 'joinRoomButton',
	    value: function joinRoomButton() {
	      window.socket.emit('joinRoom', this.state.joinRoomName);
	      this.setState({
	        view: 'vanish'
	      });
	    }
	  }, {
	    key: 'newButtonClick',
	    value: function newButtonClick() {
	      this.setState({
	        new: 'NewView'
	      });
	    }
	  }, {
	    key: 'joinButtonClick',
	    value: function joinButtonClick() {
	      this.setState({
	        join: 'JoinView'
	      });
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.setState(_defineProperty({}, e.target.name, e.target.value));
	      console.log(this.state);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'NewGame' },
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Create New Game'
	        ),
	        _react2.default.createElement(
	          'form',
	          null,
	          'Room Name: ',
	          _react2.default.createElement('input', { type: 'text' }),
	          ' ',
	          _react2.default.createElement('br', null),
	          'Level:',
	          _react2.default.createElement('br', null),
	          'Invite ',
	          _react2.default.createElement('input', { type: 'text', placeholder: 'optional' }),
	          ' ',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            'button',
	            null,
	            'Create Game'
	          )
	        )
	      );
	    }
	  }]);
	
	  return Home;
	}(_react2.default.Component);
	
	/*
	      <div classNameName={this.state.view}>
	        <div className="NewView">
	          <button className="homeButtons" onClick={this.newButtonClick}>New Game</button>
	          <div className={this.state.new}>
	          Room Name:
	          <input onChange={this.handleChange} name="createRoomName"></input>
	          <Link to="/game"><button className="Play" onClick={this.createRoomButton}>Create Room</button></Link>
	          </div>
	        </div>
	        <div className="JoinView">
	          <button className="homeButtons" onClick={this.joinButtonClick}>Join Game</button>
	          <div className={this.state.join}>
	          Room Name:
	          <input onChange={this.handleChange} name="joinRoomName"></input>
	        <Link to="/game"><button className="Play" onClick={this.joinRoomButton}>Join Room</button></Link>
	          </div>
	          <br/>
	        </div>
	      </div>
	*/
	
	exports.default = Home;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "NewGame.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FriendSearch = __webpack_require__(288);
	
	var _FriendSearch2 = _interopRequireDefault(_FriendSearch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Lobby = function (_React$Component) {
	    _inherits(Lobby, _React$Component);
	
	    function Lobby() {
	        _classCallCheck(this, Lobby);
	
	        var _this = _possibleConstructorReturn(this, (Lobby.__proto__ || Object.getPrototypeOf(Lobby)).call(this));
	
	        _this.state = {
	            rooms: {},
	            roomNames: []
	        };
	        return _this;
	    }
	
	    _createClass(Lobby, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var context = this;
	            console.log("component did mount");
	            var context = this;
	            socket.on("receiveRooms", function (data) {
	                console.log("CURRENT DATA:", data);
	                for (var key in data) {
	                    if (data[key] === 0) {
	                        delete data[key];
	                    }
	                    //this might be hacky- check why the server is storing a null value
	                    if (data[key] === null) {
	                        delete data[key];
	                    }
	                }
	                delete data[undefined];
	                context.setState({
	                    rooms: data,
	                    roomNames: Object.keys(data)
	                }, function (data) {});
	                //context.forceUpdate();
	            });
	            socket.emit("getRooms");
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'TableContainer' },
	                _react2.default.createElement(
	                    'table',
	                    { className: 'LobbyTable' },
	                    _react2.default.createElement(
	                        'tr',
	                        null,
	                        _react2.default.createElement(
	                            'td',
	                            null,
	                            'Roomname'
	                        ),
	                        _react2.default.createElement(
	                            'td',
	                            null,
	                            'User'
	                        ),
	                        _react2.default.createElement(
	                            'td',
	                            null,
	                            'Capacity'
	                        ),
	                        _react2.default.createElement(
	                            'td',
	                            null,
	                            'Join'
	                        )
	                    ),
	                    this.state.roomNames.map(function (key, index) {
	                        console.log(key);
	                        return _react2.default.createElement(
	                            'tr',
	                            null,
	                            _react2.default.createElement(
	                                'td',
	                                null,
	                                key
	                            ),
	                            _react2.default.createElement(
	                                'td',
	                                null,
	                                _this2.state.rooms[key],
	                                '/2'
	                            ),
	                            _react2.default.createElement(
	                                'td',
	                                null,
	                                _this2.state.rooms[key] === 2 ? _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    'Room Full'
	                                ) : _react2.default.createElement(
	                                    'button',
	                                    null,
	                                    'Join Game'
	                                )
	                            )
	                        );
	                    })
	                )
	            );
	        }
	    }]);
	
	    return Lobby;
	}(_react2.default.Component);
	
	exports.default = Lobby;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "JoinGame.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWVWaWV3LmpzeD9mYjdlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUvQ2hhdFZpZXcuanN4PzkzOWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9Ib21lVmlldy5qc3g/NWQ5YiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWaWV3LmpzeD81YThiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hvbWUvVXNlclN0YXRzLmpzeD81ZjcxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hvbWUvRnJpZW5kU2VhcmNoLmpzeD8zNTE4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hvbWUvTG9iYnlWaWV3LmpzeD8xMTE2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hvbWUvTmV3R2FtZS5qc3g/ZTU1NyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0pvaW5HYW1lLmpzeD9iZDIxIl0sIm5hbWVzIjpbIkdhbWUiLCJzdGF0ZSIsImdhbWVvdmVyIiwidGltZSIsInRpbWVyIiwiY29udHJvbHMiLCJzb2NrZXQiLCJ3aW5kb3ciLCJjb250ZXh0Iiwib24iLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJjb250cm9sc0NsaWNrSGFuZGxlciIsImJpbmQiLCJDb21wb25lbnQiLCJDaGF0IiwicHJvcHMiLCJ2aWRlbyIsInRleHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJzdG9wR2FtZSIsInN3aXRjaENoYXQiLCJIb21lIiwiUHJvZmlsZSIsIlVzZXJTdGF0cyIsIkZyaWVuZFNlYXJjaCIsImZyaWVuZCIsInNlYXJjaFJlc3VsdCIsInVwZGF0ZUZyaWVuZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbWl0Iiwib2JqIiwiZGF0YSIsInVzZXJuYW1lIiwiYWxlcnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsInNlYXJjaEZvckZyaWVuZHMiLCJhZGRGcmllbmQiLCJMb2JieSIsInZpZXciLCJqb2luIiwibmV3IiwiY3JlYXRlUm9vbU5hbWUiLCJqb2luUm9vbU5hbWUiLCJjb250cm9sc1ZpZXciLCJjcmVhdGVSb29tQnV0dG9uIiwiam9pblJvb21CdXR0b24iLCJuZXdCdXR0b25DbGljayIsImpvaW5CdXR0b25DbGljayIsImhhbmRsZUNoYW5nZSIsIm1lc3NhZ2UiLCJwdXNoIiwicGF0aG5hbWUiLCJlIiwibmFtZSIsInJvb21zIiwicm9vbU5hbWVzIiwia2V5IiwidW5kZWZpbmVkIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsSTs7O0FBQ0wsa0JBQWM7QUFBQTs7QUFBQTs7QUFFYixTQUFLQyxLQUFMLEdBQWE7QUFDWkMsY0FBVSxLQURFO0FBRVpDLFVBQU0sSUFGTTtBQUdaQyxXQUFPLElBSEs7QUFJWkMsY0FBVTtBQUpFLElBQWI7QUFGYTtBQVFiOzs7O3VDQUVtQjtBQUNuQixRQUFJQyxTQUFTQyxPQUFPRCxNQUFwQjtBQUNBLFFBQUlFLFVBQVUsSUFBZDs7QUFFQUYsV0FBT0csRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFVBQVNOLElBQVQsRUFBZTtBQUN6Q0ssYUFBUUUsUUFBUixDQUFpQjtBQUNoQlIsZ0JBQVUsSUFETTtBQUVoQkMsWUFBTUEsSUFGVTtBQUdoQkMsYUFBTztBQUhTLE1BQWpCO0FBS0ZPLGFBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0UsS0FQRjs7QUFTQU4sV0FBT0csRUFBUCxDQUFVLE9BQVYsRUFBbUIsVUFBU0wsS0FBVCxFQUFnQjtBQUNqQ0ksYUFBUUUsUUFBUixDQUFpQjtBQUNoQk4sYUFBT0E7QUFEUyxNQUFqQjtBQUdB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REosY0FESjtBQXNCSDs7OztHQTFEZSxnQkFBTWxELFM7O21CQTREWCtCLEsiLCJmaWxlIjoiMC4yMDk4MTJmYmJkNGMyY2I5MGUxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENoYXQgZnJvbSAnLi9DaGF0Vmlldy5qc3gnO1xyXG5pbXBvcnQgR2FtZU92ZXIgZnJvbSAnLi9HYW1lT3Zlci5qc3gnXHJcbmltcG9ydCBDb250cm9scyBmcm9tICcuL0NvbnRyb2xzLmpzeCdcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vUHJvZ3Jlc3NCYXIuanN4J1xyXG5cclxuY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRnYW1lb3ZlcjogZmFsc2UsXHJcblx0XHRcdHRpbWU6IG51bGwsXHJcblx0XHRcdHRpbWVyOiBudWxsLFxyXG5cdFx0XHRjb250cm9sczogZmFsc2VcclxuXHRcdH1cclxuXHR9IFxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHZhciBzb2NrZXQgPSB3aW5kb3cuc29ja2V0O1xyXG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHRzb2NrZXQub24oJ2dhbWVvdmVybGlzdGVuJywgZnVuY3Rpb24odGltZSkge1xyXG5cdFx0XHRcdGNvbnRleHQuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0Z2FtZW92ZXI6IHRydWUsXHJcblx0XHRcdFx0XHR0aW1lOiB0aW1lLFxyXG5cdFx0XHRcdFx0dGltZXI6IG51bGxcclxuXHRcdFx0XHR9KVxyXG5cdFx0Y29uc29sZS5sb2coJ2dhbWVvdmVyIScpXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdHNvY2tldC5vbigndGltZXInLCBmdW5jdGlvbih0aW1lcikge1xyXG5cdFx0XHRcdGNvbnRleHQuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0dGltZXI6IHRpbWVyXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcbiAgfVxyXG5cclxuICBjb250cm9sc0NsaWNrSGFuZGxlcigpIHtcclxuICBcdHRoaXMuc2V0U3RhdGUoe1xyXG4gIFx0XHRjb250cm9sczogIXRoaXMuc3RhdGUuY29udHJvbHNcclxuICBcdH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdhbWVcIj5cclxuXHRcdCAgPFByb2dyZXNzQmFyLz5cclxuICAgICAgXHQ8Q2hhdCB0aW1lcj17dGhpcy5zdGF0ZS50aW1lcn0gdGltZT17dGhpcy5zdGF0ZS50aW1lfSBjb250cm9sc0NsaWNrSGFuZGxlcj17dGhpcy5jb250cm9sc0NsaWNrSGFuZGxlci5iaW5kKHRoaXMpfSAvPlxyXG4gICAgICBcdHt0aGlzLnN0YXRlLmdhbWVvdmVyID8gPEdhbWVPdmVyIHRpbWU9e3RoaXMuc3RhdGUudGltZX0vPiA6ICcnfVxyXG4gICAgICBcdHt0aGlzLnN0YXRlLmNvbnRyb2xzID8gPENvbnRyb2xzIGNvbnRyb2xzQ2xpY2tIYW5kbGVyPXt0aGlzLmNvbnRyb2xzQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyl9IC8+IDogJyd9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9HYW1lVmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBUZXh0Q2hhdCBmcm9tICcuL1RleHRDaGF0LmpzeCdcclxuaW1wb3J0IFZpZGVvQ2hhdCBmcm9tICcuL1ZpZGVvQ2hhdC5qc3gnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9Qcm9ncmVzc0Jhci5qc3gnXHJcblxyXG5jbGFzcyBDaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdmlkZW86IHRydWVcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudGV4dClcclxuICB9XHJcblxyXG4gIHN3aXRjaENoYXQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdmlkZW86IGZhbHNlXHJcbiAgICB9KVxyXG4gICAgLy8gaWYgKHZhbHVlID09PSAndmlkZW8nKSB7XHJcbiAgICAvLyAgIHNvY2tldC5lbWl0KCdjaGFuZ2VkVG9WaWRlbycsICcnKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIHN0b3BHYW1lKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikucmVtb3ZlKCk7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGF0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJPcHRpb25zXCI+XHJcbiAgICAgICAgICA8aDE+TWF6aW5nIEZyaWVuZHM8L2gxPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMudGltZXIgPyA8aDI+e3RoaXMucHJvcHMudGltZXJ9PC9oMj4gOiA8aDI+e3RoaXMucHJvcHMudGltZX08L2gyPn1cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uQnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY29udHJvbHNDbGlja0hhbmRsZXJ9PkNvbnRyb2xzPC9idXR0b24+XHJcbiAgICAgICAgICA8TGluayB0bz1cIi9cIj48YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbkJ1dHRvbnNcIiBvbkNsaWNrPXt0aGlzLnN0b3BHYW1lLmJpbmQodGhpcyl9PlF1aXQgR2FtZTwvYnV0dG9uPjwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS52aWRlbyA/IDxWaWRlb0NoYXQvPiA6ICcnIH1cclxuICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNoYXRcIiB2YWx1ZT1cInZpZGVvXCIgb25DaGFuZ2U9e3RoaXMuc3dpdGNoQ2hhdC5iaW5kKHRoaXMpfS8+VmlkZW8gT2ZmXHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPFRleHRDaGF0Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbWUvQ2hhdFZpZXcuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9Qcm9maWxlVmlldy5qc3gnXHJcbmltcG9ydCBMb2JieSBmcm9tICcuL0xvYmJ5Vmlldy5qc3gnXHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhvbWVcIj5cclxuICAgICAgXHQ8UHJvZmlsZS8+XHJcbiAgICAgIFx0PExvYmJ5Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWVWaWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBVc2VyU3RhdHMgZnJvbSAnLi9Vc2VyU3RhdHMuanN4J1xyXG5pbXBvcnQgRnJpZW5kU2VhcmNoIGZyb20gJy4vRnJpZW5kU2VhcmNoLmpzeCdcclxuXHJcblxyXG5jbGFzcyBQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2ZpbGVcIj5cclxuICAgICBcdCAgPEZyaWVuZFNlYXJjaC8+XHJcbiAgICAgIFx0PFVzZXJTdGF0cyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvUHJvZmlsZVZpZXcuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFVzZXJTdGF0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJVc2VyU3RhdHNcIj5cclxuICAgICAgXHQ8aDE+VXNlciBTdGF0czwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJTdGF0cztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lL1VzZXJTdGF0cy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNsYXNzIEZyaWVuZFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGZyaWVuZDogXCJcIixcclxuICAgICAgICAgICAgc2VhcmNoUmVzdWx0OiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZyaWVuZCA9IHRoaXMudXBkYXRlRnJpZW5kLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBzZWFyY2hGb3JGcmllbmRzKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc29ja2V0LmVtaXQoXCJnZXRVc2Vyc1wiLCB0aGlzLnN0YXRlLmZyaWVuZCk7XHJcbiAgICAgICAgc29ja2V0Lm9uKFwidXNlcnNcIiwgZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICAgICAgaWYgKG9iai5kYXRhLnVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHQ6IG9iai5kYXRhLnVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJubyBzdWNoIHVzZXIgaW4gdGhlIGRhdGFiYXNlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVGcmllbmQoZXZlbnQpe1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBmcmllbmQ6IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhZGRGcmllbmQgKCkge1xyXG5cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgYnV0dG9uID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmZyaWVuZH0gb25DaGFuZ2U9e3RoaXMudXBkYXRlRnJpZW5kfSBwbGFjZWhvbGRlcj1cInNlYXJjaCBmb3IgZnJpZW5kc1wiPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLnNlYXJjaEZvckZyaWVuZHMuYmluZCh0aGlzKX0+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPGg0Pnt0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdH08L2g0PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VhcmNoUmVzdWx0ICE9PSBcIlwiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZEZyaWVuZH0+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kU2VhcmNoXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9GcmllbmRTZWFyY2guanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5ld0dhbWUgZnJvbSAnLi9OZXdHYW1lLmpzeCdcclxuaW1wb3J0IEpvaW5HYW1lIGZyb20gJy4vSm9pbkdhbWUuanN4J1xyXG5cclxuY2xhc3MgTG9iYnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTG9iYnlcIj5cclxuICAgICAgXHQ8TmV3R2FtZSAvPlxyXG4gICAgICBcdDxKb2luR2FtZSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2JieTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lL0xvYmJ5Vmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi8uLi9UaXRsZVZpZXcuanN4J1xyXG5pbXBvcnQgeyBMaW5rLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vLi4vR2FtZS9Db250cm9scy5qc3gnXHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKClcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHZpZXc6ICdIb21lJyxcclxuXHRcdFx0am9pbjogJ3ZhbmlzaCcsXHJcblx0XHRcdG5ldzogJ3ZhbmlzaCcsXHJcbiAgICAgIGNyZWF0ZVJvb21OYW1lOiAnJyxcclxuICAgICAgam9pblJvb21OYW1lOiAnJyxcclxuICAgICAgY29udHJvbHNWaWV3OiBmYWxzZVxyXG5cdFx0fVxyXG4gICAgdGhpcy5jcmVhdGVSb29tQnV0dG9uID0gdGhpcy5jcmVhdGVSb29tQnV0dG9uLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmpvaW5Sb29tQnV0dG9uID0gdGhpcy5qb2luUm9vbUJ1dHRvbi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5uZXdCdXR0b25DbGljayA9IHRoaXMubmV3QnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuam9pbkJ1dHRvbkNsaWNrID0gdGhpcy5qb2luQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgc29ja2V0Lm9uKCdyb29tSm9pbkVycm9yJywgZnVuY3Rpb24obWVzc2FnZSkge1xyXG4gICAgICBicm93c2VySGlzdG9yeS5wdXNoKHtcclxuICAgICAgICBwYXRobmFtZTogJy9ob21lJ1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gY29udGV4dC5zZXRTdGF0ZSh7XHJcbiAgICAgIC8vICAgdmlldzogJ0hvbWUnXHJcbiAgICAgIC8vIH0pO1xyXG4gICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHRjcmVhdGVSb29tQnV0dG9uKCkge1xyXG4gICAgd2luZG93LnNvY2tldC5lbWl0KCdjcmVhdGVSb29tJywgdGhpcy5zdGF0ZS5jcmVhdGVSb29tTmFtZSk7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0dmlldzogJ3ZhbmlzaCdcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuICBqb2luUm9vbUJ1dHRvbigpIHtcclxuICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnam9pblJvb20nLCB0aGlzLnN0YXRlLmpvaW5Sb29tTmFtZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdmlldzogJ3ZhbmlzaCdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHRuZXdCdXR0b25DbGljaygpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRuZXc6ICdOZXdWaWV3J1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGpvaW5CdXR0b25DbGljaygpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRqb2luOiAnSm9pblZpZXcnXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIFxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJOZXdHYW1lXCI+XHJcbiAgICAgICAgPGgzPkNyZWF0ZSBOZXcgR2FtZTwvaDM+XHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICBSb29tIE5hbWU6IDxpbnB1dCB0eXBlPVwidGV4dFwiLz4gPGJyLz5cclxuICAgICAgICAgIExldmVsOlxyXG4gICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgSW52aXRlIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwib3B0aW9uYWxcIiAvPiA8YnIvPlxyXG4gICAgICAgICAgPGJ1dHRvbj5DcmVhdGUgR2FtZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLypcclxuICAgICAgPGRpdiBjbGFzc05hbWVOYW1lPXt0aGlzLnN0YXRlLnZpZXd9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTmV3Vmlld1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJob21lQnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMubmV3QnV0dG9uQ2xpY2t9Pk5ldyBHYW1lPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5uZXd9PlxyXG4gICAgICAgICAgUm9vbSBOYW1lOlxyXG4gICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbmFtZT1cImNyZWF0ZVJvb21OYW1lXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDxMaW5rIHRvPVwiL2dhbWVcIj48YnV0dG9uIGNsYXNzTmFtZT1cIlBsYXlcIiBvbkNsaWNrPXt0aGlzLmNyZWF0ZVJvb21CdXR0b259PkNyZWF0ZSBSb29tPC9idXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJKb2luVmlld1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJob21lQnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMuam9pbkJ1dHRvbkNsaWNrfT5Kb2luIEdhbWU8L2J1dHRvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmpvaW59PlxyXG4gICAgICAgICAgUm9vbSBOYW1lOlxyXG4gICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbmFtZT1cImpvaW5Sb29tTmFtZVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgPExpbmsgdG89XCIvZ2FtZVwiPjxidXR0b24gY2xhc3NOYW1lPVwiUGxheVwiIG9uQ2xpY2s9e3RoaXMuam9pblJvb21CdXR0b259PkpvaW4gUm9vbTwvYnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lL05ld0dhbWUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZyaWVuZFNlYXJjaCBmcm9tICcuL0ZyaWVuZFNlYXJjaC5qc3gnXHJcblxyXG5jbGFzcyBMb2JieSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAge1xyXG4gICAgICAgICAgICByb29tczoge30sXHJcbiAgICAgICAgICAgIHJvb21OYW1lczogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IGRpZCBtb3VudFwiKTtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XHJcbiAgICAgICAgc29ja2V0Lm9uKFwicmVjZWl2ZVJvb21zXCIsIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDVVJSRU5UIERBVEE6XCIsIGRhdGEpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFba2V5XSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMgbWlnaHQgYmUgaGFja3ktIGNoZWNrIHdoeSB0aGUgc2VydmVyIGlzIHN0b3JpbmcgYSBudWxsIHZhbHVlXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVtrZXldID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWxldGUgZGF0YVt1bmRlZmluZWRdO1xyXG4gICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHJvb21zOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgcm9vbU5hbWVzOiBPYmplY3Qua2V5cyhkYXRhKVxyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy9jb250ZXh0LmZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzb2NrZXQuZW1pdChcImdldFJvb21zXCIpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGFibGVDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJMb2JieVRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Um9vbW5hbWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VXNlcjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DYXBhY2l0eTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Kb2luPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJvb21OYW1lcy5tYXAoKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2tleX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5yb29tc1trZXldfS8yPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUucm9vbXNba2V5XSA9PT0gMiA/IDxwPlJvb20gRnVsbDwvcD4gOiA8YnV0dG9uPkpvaW4gR2FtZTwvYnV0dG9uPn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExvYmJ5XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvSm9pbkdhbWUuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==