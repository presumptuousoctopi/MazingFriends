webpackHotUpdate(0,{

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
	
	var _NewGame = __webpack_require__(287);
	
	var _NewGame2 = _interopRequireDefault(_NewGame);
	
	var _JoinGame = __webpack_require__(288);
	
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

/***/ 287:
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
	
	var _LobbyView = __webpack_require__(286);
	
	var _LobbyView2 = _interopRequireDefault(_LobbyView);
	
	var _Controls = __webpack_require__(277);
	
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
	    key: 'controlsViewToggle',
	    value: function controlsViewToggle() {
	      this.setState({
	        controlsView: !this.state.controlsView
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: this.state.view },
	        _react2.default.createElement(_TitleView2.default, null),
	        _react2.default.createElement(
	          'div',
	          { className: 'NewView' },
	          _react2.default.createElement(
	            'button',
	            { className: 'homeButtons', onClick: this.newButtonClick },
	            'New Game'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: this.state.new },
	            'Room Name:',
	            _react2.default.createElement('input', { onChange: this.handleChange, name: 'createRoomName' }),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/game' },
	              _react2.default.createElement(
	                'button',
	                { className: 'Play', onClick: this.createRoomButton },
	                'Create Room'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'JoinView' },
	          _react2.default.createElement(
	            'button',
	            { className: 'homeButtons', onClick: this.joinButtonClick },
	            'Join Game'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: this.state.join },
	            'Room Name:',
	            _react2.default.createElement('input', { onChange: this.handleChange, name: 'joinRoomName' }),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/game' },
	              _react2.default.createElement(
	                'button',
	                { className: 'Play', onClick: this.joinRoomButton },
	                'Join Room'
	              )
	            )
	          ),
	          _react2.default.createElement('br', null)
	        ),
	        _react2.default.createElement(_LobbyView2.default, null)
	      );
	    }
	  }]);
	
	  return Home;
	}(_react2.default.Component);
	
	exports.default = Home;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "NewGame.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
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
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var context = this;
	            console.log("component did mount");
	            var context = this;
	            socket.on("receive", function (data) {
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
	                context.forceUpdate();
	            });
	            socket.emit("getRooms");
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(
	                "table",
	                null,
	                _react2.default.createElement(
	                    "tr",
	                    null,
	                    _react2.default.createElement(
	                        "th",
	                        null,
	                        "Roomname"
	                    ),
	                    _react2.default.createElement(
	                        "th",
	                        null,
	                        "Number of Players"
	                    )
	                ),
	                this.state.roomNames.map(function (key, index) {
	                    console.log(key);
	                    return _react2.default.createElement(
	                        "tr",
	                        null,
	                        _react2.default.createElement(
	                            "td",
	                            null,
	                            key
	                        ),
	                        _react2.default.createElement(
	                            "td",
	                            null,
	                            _this2.state.rooms[key],
	                            "/2"
	                        ),
	                        _react2.default.createElement(
	                            "td",
	                            null,
	                            _this2.state.rooms[key] === 2 ? _react2.default.createElement(
	                                "p",
	                                null,
	                                "Room Full"
	                            ) : _react2.default.createElement(
	                                "button",
	                                null,
	                                "Join Game"
	                            )
	                        )
	                    );
	                })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0xvYmJ5Vmlldy5qc3g/MTExNiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL05ld0dhbWUuanN4P2U1NTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9Kb2luR2FtZS5qc3g/YmQyMSJdLCJuYW1lcyI6WyJMb2JieSIsIkNvbXBvbmVudCIsIkhvbWUiLCJzdGF0ZSIsInZpZXciLCJqb2luIiwibmV3IiwiY3JlYXRlUm9vbU5hbWUiLCJqb2luUm9vbU5hbWUiLCJjb250cm9sc1ZpZXciLCJjcmVhdGVSb29tQnV0dG9uIiwiYmluZCIsImpvaW5Sb29tQnV0dG9uIiwibmV3QnV0dG9uQ2xpY2siLCJqb2luQnV0dG9uQ2xpY2siLCJoYW5kbGVDaGFuZ2UiLCJjb250ZXh0Iiwic29ja2V0Iiwib24iLCJtZXNzYWdlIiwicHVzaCIsInBhdGhuYW1lIiwiYWxlcnQiLCJ3aW5kb3ciLCJlbWl0Iiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInJvb21zIiwicm9vbU5hbWVzIiwiZGF0YSIsImtleSIsInVuZGVmaW5lZCIsIk9iamVjdCIsImtleXMiLCJmb3JjZVVwZGF0ZSIsIm1hcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxLOzs7Ozs7Ozs7Ozs4QkFDSztBQUNQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxPQUFmO0FBQ0MsK0RBREQ7QUFFQztBQUZELFFBREY7QUFNRDs7OztHQVJpQixnQkFBTUMsUzs7bUJBV1hELEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmY7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0tBRU1FLEk7OztBQUNMLG1CQUFjO0FBQUE7O0FBQUE7O0FBRWIsV0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGFBQU0sTUFETTtBQUVaQyxhQUFNLFFBRk07QUFHWkMsWUFBSyxRQUhPO0FBSVRDLHVCQUFnQixFQUpQO0FBS1RDLHFCQUFjLEVBTEw7QUFNVEMscUJBQWM7QUFOTCxNQUFiO0FBUUUsV0FBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsV0FBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CRCxJQUFwQixPQUF0QjtBQUNBLFdBQUtFLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkYsSUFBcEIsT0FBdEI7QUFDQSxXQUFLRyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJILElBQXJCLE9BQXZCO0FBQ0EsV0FBS0ksWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCSixJQUFsQixPQUFwQjtBQWRXO0FBZWI7Ozs7eUNBRW9CO0FBQ2xCLFdBQUlLLFVBQVUsSUFBZDtBQUNBQyxjQUFPQyxFQUFQLENBQVUsZUFBVixFQUEyQixVQUFTQyxPQUFULEVBQWtCO0FBQzNDLHFDQUFlQyxJQUFmLENBQW9CO0FBQ2xCQyxxQkFBVTtBQURRLFVBQXBCO0FBR0E7QUFDQTtBQUNBO0FBQ0FDLGVBQU1ILE9BQU47QUFDRCxRQVJEO0FBU0Q7Ozt3Q0FDaUI7QUFDaEJJLGNBQU9OLE1BQVAsQ0FBY08sSUFBZCxDQUFtQixZQUFuQixFQUFpQyxLQUFLckIsS0FBTCxDQUFXSSxjQUE1QztBQUNGLFlBQUtrQixRQUFMLENBQWM7QUFDYnJCLGVBQU07QUFETyxRQUFkO0FBR0E7OztzQ0FFaUI7QUFDZm1CLGNBQU9OLE1BQVAsQ0FBY08sSUFBZCxDQUFtQixVQUFuQixFQUErQixLQUFLckIsS0FBTCxDQUFXSyxZQUExQztBQUNBLFlBQUtpQixRQUFMLENBQWM7QUFDWnJCLGVBQU07QUFETSxRQUFkO0FBR0Q7OztzQ0FFZTtBQUNoQixZQUFLcUIsUUFBTCxDQUFjO0FBQ2JuQixjQUFLO0FBRFEsUUFBZDtBQUdBOzs7dUNBRWlCO0FBQ2pCLFlBQUttQixRQUFMLENBQWM7QUFDYnBCLGVBQU07QUFETyxRQUFkO0FBR0E7OztrQ0FFYXFCLEMsRUFBRztBQUNkLFlBQUtELFFBQUwscUJBQ0dDLEVBQUVDLE1BQUYsQ0FBU0MsSUFEWixFQUNtQkYsRUFBRUMsTUFBRixDQUFTRSxLQUQ1QjtBQUdBQyxlQUFRQyxHQUFSLENBQVksS0FBSzVCLEtBQWpCO0FBQ0Q7OzswQ0FFb0I7QUFDbkIsWUFBS3NCLFFBQUwsQ0FBYztBQUNaaEIsdUJBQWMsQ0FBQyxLQUFLTixLQUFMLENBQVdNO0FBRGQsUUFBZDtBQUdEOzs7OEJBRVE7QUFDUCxjQUNFO0FBQUE7QUFBQSxXQUFLLFdBQVcsS0FBS04sS0FBTCxDQUFXQyxJQUEzQjtBQUNDLGlFQUREO0FBRUM7QUFBQTtBQUFBLGFBQUssV0FBVSxTQUFmO0FBQ0M7QUFBQTtBQUFBLGVBQVEsV0FBVSxhQUFsQixFQUFnQyxTQUFTLEtBQUtTLGNBQTlDO0FBQUE7QUFBQSxZQUREO0FBRUM7QUFBQTtBQUFBLGVBQUssV0FBVyxLQUFLVixLQUFMLENBQVdHLEdBQTNCO0FBQUE7QUFFQSxzREFBTyxVQUFVLEtBQUtTLFlBQXRCLEVBQW9DLE1BQUssZ0JBQXpDLEdBRkE7QUFHQTtBQUFBO0FBQUEsaUJBQU0sSUFBRyxPQUFUO0FBQWlCO0FBQUE7QUFBQSxtQkFBUSxXQUFVLE1BQWxCLEVBQXlCLFNBQVMsS0FBS0wsZ0JBQXZDO0FBQUE7QUFBQTtBQUFqQjtBQUhBO0FBRkQsVUFGRDtBQVVDO0FBQUE7QUFBQSxhQUFLLFdBQVUsVUFBZjtBQUNDO0FBQUE7QUFBQSxlQUFRLFdBQVUsYUFBbEIsRUFBZ0MsU0FBUyxLQUFLSSxlQUE5QztBQUFBO0FBQUEsWUFERDtBQUVDO0FBQUE7QUFBQSxlQUFLLFdBQVcsS0FBS1gsS0FBTCxDQUFXRSxJQUEzQjtBQUFBO0FBRUEsc0RBQU8sVUFBVSxLQUFLVSxZQUF0QixFQUFvQyxNQUFLLGNBQXpDLEdBRkE7QUFHSjtBQUFBO0FBQUEsaUJBQU0sSUFBRyxPQUFUO0FBQWlCO0FBQUE7QUFBQSxtQkFBUSxXQUFVLE1BQWxCLEVBQXlCLFNBQVMsS0FBS0gsY0FBdkM7QUFBQTtBQUFBO0FBQWpCO0FBSEksWUFGRDtBQU9HO0FBUEgsVUFWRDtBQW1CRjtBQW5CRSxRQURGO0FBdUJEOzs7O0dBN0ZnQixnQkFBTVgsUzs7bUJBZ0dWQyxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHZjs7Ozs7Ozs7Ozs7O0tBR01GLEs7OztBQUNGLHNCQUFjO0FBQUE7O0FBQUE7O0FBRVYsZUFBS0csS0FBTCxHQUFjO0FBQ1Y2QixvQkFBTyxFQURHO0FBRVZDLHdCQUFXO0FBRkQsVUFBZDtBQUZVO0FBTWI7Ozs7NkNBRW1CO0FBQ2hCLGlCQUFJakIsVUFBVSxJQUFkO0FBQ0FjLHFCQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDQSxpQkFBSWYsVUFBVSxJQUFkO0FBQ0FDLG9CQUFPQyxFQUFQLENBQVUsU0FBVixFQUFxQixVQUFTZ0IsSUFBVCxFQUFlO0FBQ2hDSix5QkFBUUMsR0FBUixDQUFZLGVBQVosRUFBNkJHLElBQTdCO0FBQ0Esc0JBQUssSUFBSUMsR0FBVCxJQUFnQkQsSUFBaEIsRUFBc0I7QUFDbEIseUJBQUlBLEtBQUtDLEdBQUwsTUFBYyxDQUFsQixFQUFxQjtBQUNqQixnQ0FBT0QsS0FBS0MsR0FBTCxDQUFQO0FBQ0g7QUFDRDtBQUNBLHlCQUFJRCxLQUFLQyxHQUFMLE1BQWMsSUFBbEIsRUFBd0I7QUFDcEIsZ0NBQU9ELEtBQUtDLEdBQUwsQ0FBUDtBQUNIO0FBQ0o7QUFDRCx3QkFBT0QsS0FBS0UsU0FBTCxDQUFQO0FBQ0FwQix5QkFBUVMsUUFBUixDQUFpQjtBQUNiTyw0QkFBT0UsSUFETTtBQUViRCxnQ0FBV0ksT0FBT0MsSUFBUCxDQUFZSixJQUFaO0FBRkUsa0JBQWpCLEVBR0csVUFBVUEsSUFBVixFQUFnQixDQUVsQixDQUxEO0FBTUFsQix5QkFBUXVCLFdBQVI7QUFDSCxjQW5CRDtBQW9CQXRCLG9CQUFPTyxJQUFQLENBQVksVUFBWjtBQUNIOzs7a0NBRVE7QUFBQTs7QUFDTCxvQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLGtCQURKO0FBS0ssc0JBQUtyQixLQUFMLENBQVc4QixTQUFYLENBQXFCTyxHQUFyQixDQUF5QixVQUFDTCxHQUFELEVBQU1NLEtBQU4sRUFBZ0I7QUFDdENYLDZCQUFRQyxHQUFSLENBQVlJLEdBQVo7QUFDSiw0QkFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBS0E7QUFBTCwwQkFEQTtBQUVBO0FBQUE7QUFBQTtBQUFLLG9DQUFLaEMsS0FBTCxDQUFXNkIsS0FBWCxDQUFpQkcsR0FBakIsQ0FBTDtBQUFBO0FBQUEsMEJBRkE7QUFHQTtBQUFBO0FBQUE7QUFBSyxvQ0FBS2hDLEtBQUwsQ0FBVzZCLEtBQVgsQ0FBaUJHLEdBQWpCLE1BQTBCLENBQTFCLEdBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQTlCLEdBQWlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEQ7QUFIQSxzQkFEQTtBQU9ILGtCQVRJO0FBTEwsY0FESjtBQWtCSDs7OztHQXZEZSxnQkFBTWxDLFM7O21CQXlEWEQsSyIsImZpbGUiOiIwLjIwYTgyZjE4YTllM2U0ZGE2NWNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5ld0dhbWUgZnJvbSAnLi9OZXdHYW1lLmpzeCdcbmltcG9ydCBKb2luR2FtZSBmcm9tICcuL0pvaW5HYW1lLmpzeCdcblxuY2xhc3MgTG9iYnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTG9iYnlcIj5cbiAgICAgIFx0PE5ld0dhbWUgLz5cbiAgICAgIFx0PEpvaW5HYW1lIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYmJ5O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvTG9iYnlWaWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnLi8uLi9UaXRsZVZpZXcuanN4J1xuaW1wb3J0IHsgTGluaywgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgTG9iYnkgZnJvbSAnLi9Mb2JieVZpZXcuanN4J1xuaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vLi4vR2FtZS9Db250cm9scy5qc3gnXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHZpZXc6ICdIb21lJyxcblx0XHRcdGpvaW46ICd2YW5pc2gnLFxuXHRcdFx0bmV3OiAndmFuaXNoJyxcbiAgICAgIGNyZWF0ZVJvb21OYW1lOiAnJyxcbiAgICAgIGpvaW5Sb29tTmFtZTogJycsXG4gICAgICBjb250cm9sc1ZpZXc6IGZhbHNlXG5cdFx0fVxuICAgIHRoaXMuY3JlYXRlUm9vbUJ1dHRvbiA9IHRoaXMuY3JlYXRlUm9vbUJ1dHRvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuam9pblJvb21CdXR0b24gPSB0aGlzLmpvaW5Sb29tQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5uZXdCdXR0b25DbGljayA9IHRoaXMubmV3QnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmpvaW5CdXR0b25DbGljayA9IHRoaXMuam9pbkJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuXHR9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIHNvY2tldC5vbigncm9vbUpvaW5FcnJvcicsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goe1xuICAgICAgICBwYXRobmFtZTogJy9ob21lJ1xuICAgICAgfSk7XG4gICAgICAvLyBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgIC8vICAgdmlldzogJ0hvbWUnXG4gICAgICAvLyB9KTtcbiAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cdGNyZWF0ZVJvb21CdXR0b24oKSB7XG4gICAgd2luZG93LnNvY2tldC5lbWl0KCdjcmVhdGVSb29tJywgdGhpcy5zdGF0ZS5jcmVhdGVSb29tTmFtZSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR2aWV3OiAndmFuaXNoJ1xuXHRcdH0pXG5cdH1cblxuICBqb2luUm9vbUJ1dHRvbigpIHtcbiAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ2pvaW5Sb29tJywgdGhpcy5zdGF0ZS5qb2luUm9vbU5hbWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlldzogJ3ZhbmlzaCdcbiAgICB9KVxuICB9XG5cblx0bmV3QnV0dG9uQ2xpY2soKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRuZXc6ICdOZXdWaWV3J1xuXHRcdH0pXG5cdH1cblxuXHRqb2luQnV0dG9uQ2xpY2soKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRqb2luOiAnSm9pblZpZXcnXG5cdFx0fSlcblx0fVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIFxuICAgIH0pXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gIH1cblxuICBjb250cm9sc1ZpZXdUb2dnbGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250cm9sc1ZpZXc6ICF0aGlzLnN0YXRlLmNvbnRyb2xzVmlld1xuICAgIH0pIFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS52aWV3fT5cbiAgICAgIFx0PFRpdGxlIC8+XG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiTmV3Vmlld1wiPlxuXHQgICAgICBcdDxidXR0b24gY2xhc3NOYW1lPVwiaG9tZUJ1dHRvbnNcIiBvbkNsaWNrPXt0aGlzLm5ld0J1dHRvbkNsaWNrfT5OZXcgR2FtZTwvYnV0dG9uPlxuXHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm5ld30+XG5cdCAgICAgIFx0Um9vbSBOYW1lOlxuXHQgICAgICBcdDxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG5hbWU9XCJjcmVhdGVSb29tTmFtZVwiPjwvaW5wdXQ+XG5cdCAgICAgIFx0PExpbmsgdG89XCIvZ2FtZVwiPjxidXR0b24gY2xhc3NOYW1lPVwiUGxheVwiIG9uQ2xpY2s9e3RoaXMuY3JlYXRlUm9vbUJ1dHRvbn0+Q3JlYXRlIFJvb208L2J1dHRvbj48L0xpbms+XG5cdCAgICAgIFx0PC9kaXY+XG4gICAgICBcdDwvZGl2PlxuICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIkpvaW5WaWV3XCI+XG5cdCAgICAgIFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJob21lQnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMuam9pbkJ1dHRvbkNsaWNrfT5Kb2luIEdhbWU8L2J1dHRvbj5cblx0ICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5qb2lufT5cblx0ICAgICAgXHRSb29tIE5hbWU6XG5cdCAgICAgIFx0PGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbmFtZT1cImpvaW5Sb29tTmFtZVwiPjwvaW5wdXQ+XG5cdFx0XHRcdDxMaW5rIHRvPVwiL2dhbWVcIj48YnV0dG9uIGNsYXNzTmFtZT1cIlBsYXlcIiBvbkNsaWNrPXt0aGlzLmpvaW5Sb29tQnV0dG9ufT5Kb2luIFJvb208L2J1dHRvbj48L0xpbms+XG5cdCAgICAgIFx0PC9kaXY+XG4gICAgICAgICAgPGJyLz5cbiAgICAgIFx0PC9kaXY+XG5cdFx0ICA8TG9iYnkvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9OZXdHYW1lLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuY2xhc3MgTG9iYnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0gIHtcbiAgICAgICAgICAgIHJvb21zOiB7fSxcbiAgICAgICAgICAgIHJvb21OYW1lczogW11cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IGRpZCBtb3VudFwiKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgICBzb2NrZXQub24oXCJyZWNlaXZlXCIsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1VSUkVOVCBEQVRBOlwiLCBkYXRhKTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFba2V5XSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3RoaXMgbWlnaHQgYmUgaGFja3ktIGNoZWNrIHdoeSB0aGUgc2VydmVyIGlzIHN0b3JpbmcgYSBudWxsIHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhW3VuZGVmaW5lZF07XG4gICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICByb29tczogZGF0YSxcbiAgICAgICAgICAgICAgICByb29tTmFtZXM6IE9iamVjdC5rZXlzKGRhdGEpXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29udGV4dC5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICBzb2NrZXQuZW1pdChcImdldFJvb21zXCIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5Sb29tbmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5OdW1iZXIgb2YgUGxheWVyczwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yb29tTmFtZXMubWFwKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPntrZXl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUucm9vbXNba2V5XX0vMjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLnJvb21zW2tleV0gPT09IDIgPyA8cD5Sb29tIEZ1bGw8L3A+IDogPGJ1dHRvbj5Kb2luIEdhbWU8L2J1dHRvbj59PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBMb2JieVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9Kb2luR2FtZS5qc3giXSwic291cmNlUm9vdCI6IiJ9