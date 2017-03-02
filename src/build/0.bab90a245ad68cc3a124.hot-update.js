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
					_react2.default.createElement(_ChatView2.default, { timer: this.state.time, controlsClickHandler: this.controlsClickHandler.bind(this) }),
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
	
	  function Chat() {
	    _classCallCheck(this, Chat);
	
	    var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this));
	
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
	          this.props.time ? _react2.default.createElement(
	            'h2',
	            null,
	            this.props.time
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ChatView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWVWaWV3LmpzeD9mYjdlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUvQ2hhdFZpZXcuanN4PzkzOWMiXSwibmFtZXMiOlsiR2FtZSIsInN0YXRlIiwiZ2FtZW92ZXIiLCJ0aW1lIiwidGltZXIiLCJjb250cm9scyIsInNvY2tldCIsIndpbmRvdyIsImNvbnRleHQiLCJvbiIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbnRyb2xzQ2xpY2tIYW5kbGVyIiwiYmluZCIsIkNvbXBvbmVudCIsIkNoYXQiLCJ2aWRlbyIsInRleHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJwcm9wcyIsInN0b3BHYW1lIiwic3dpdGNoQ2hhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU1BLEk7OztBQUNMLGtCQUFjO0FBQUE7O0FBQUE7O0FBRWIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGNBQVUsS0FERTtBQUVaQyxVQUFNLElBRk07QUFHWkMsV0FBTyxJQUhLO0FBSVpDLGNBQVU7QUFKRSxJQUFiO0FBRmE7QUFRYjs7Ozt1Q0FFbUI7QUFDbkIsUUFBSUMsU0FBU0MsT0FBT0QsTUFBcEI7QUFDQSxRQUFJRSxVQUFVLElBQWQ7O0FBRUFGLFdBQU9HLEVBQVAsQ0FBVSxnQkFBVixFQUE0QixVQUFTTixJQUFULEVBQWU7QUFDekNLLGFBQVFFLFFBQVIsQ0FBaUI7QUFDaEJSLGdCQUFVLElBRE07QUFFaEJDLFlBQU1BO0FBRlUsTUFBakI7QUFJRlEsYUFBUUMsR0FBUixDQUFZLFdBQVo7QUFDRSxLQU5GOztBQVFBTixXQUFPRyxFQUFQLENBQVUsT0FBVixFQUFtQixVQUFTTCxLQUFULEVBQWdCO0FBQ2pDSSxhQUFRRSxRQUFSLENBQWlCO0FBQ2hCTixhQUFPQTtBQURTLE1BQWpCO0FBR0EsS0FKRjtBQUtDOzs7MENBRXNCO0FBQ3RCLFNBQUtNLFFBQUwsQ0FBYztBQUNiTCxlQUFVLENBQUMsS0FBS0osS0FBTCxDQUFXSTtBQURULEtBQWQ7QUFHQTs7OzRCQUVRO0FBQ1AsV0FDRTtBQUFBO0FBQUEsT0FBSyxXQUFVLE1BQWY7QUFDRiwrREFERTtBQUVDLHlEQUFNLE9BQU8sS0FBS0osS0FBTCxDQUFXRSxJQUF4QixFQUE4QixzQkFBc0IsS0FBS1Usb0JBQUwsQ0FBMEJDLElBQTFCLENBQStCLElBQS9CLENBQXBELEdBRkQ7QUFHRSxVQUFLYixLQUFMLENBQVdDLFFBQVgsR0FBc0Isb0RBQVUsTUFBTSxLQUFLRCxLQUFMLENBQVdFLElBQTNCLEdBQXRCLEdBQTJELEVBSDdEO0FBSUUsVUFBS0YsS0FBTCxDQUFXSSxRQUFYLEdBQXNCLG9EQUFVLHNCQUFzQixLQUFLUSxvQkFBTCxDQUEwQkMsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBaEMsR0FBdEIsR0FBaUc7QUFKbkcsS0FERjtBQVFEOzs7O0dBN0NnQixnQkFBTUMsUzs7bUJBZ0RWZixJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REZjs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTWdCLEk7OztBQUNKLG1CQUFjO0FBQUE7O0FBQUE7O0FBRVosV0FBS2YsS0FBTCxHQUFhO0FBQ1hnQixjQUFPO0FBREksTUFBYjtBQUdBTixhQUFRQyxHQUFSLENBQVksTUFBS1gsS0FBTCxDQUFXaUIsSUFBdkI7QUFMWTtBQU1iOzs7O2tDQUVZO0FBQ1gsWUFBS1IsUUFBTCxDQUFjO0FBQ1pPLGdCQUFPO0FBREssUUFBZDtBQUdBO0FBQ0E7QUFDQTtBQUNEOzs7Z0NBRVU7QUFDVEUsZ0JBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NDLE1BQWxDO0FBQ0FDLGdCQUFTQyxNQUFUO0FBQ0Q7Ozs4QkFFUTtBQUNQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBLGFBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBRUcsZ0JBQUtDLEtBQUwsQ0FBV3JCLElBQVgsR0FBa0I7QUFBQTtBQUFBO0FBQUssa0JBQUtxQixLQUFMLENBQVdyQjtBQUFoQixZQUFsQixHQUErQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRmxEO0FBR0U7QUFBQTtBQUFBLGVBQVEsV0FBVSxlQUFsQixFQUFrQyxTQUFTLEtBQUtxQixLQUFMLENBQVdYLG9CQUF0RDtBQUFBO0FBQUEsWUFIRjtBQUlFO0FBQUE7QUFBQSxlQUFNLElBQUcsR0FBVDtBQUFhO0FBQUE7QUFBQSxpQkFBUSxXQUFVLGVBQWxCLEVBQWtDLFNBQVMsS0FBS1ksUUFBTCxDQUFjWCxJQUFkLENBQW1CLElBQW5CLENBQTNDO0FBQUE7QUFBQTtBQUFiO0FBSkYsVUFERjtBQU9HLGNBQUtiLEtBQUwsQ0FBV2dCLEtBQVgsR0FBbUIsd0RBQW5CLEdBQWtDLEVBUHJDO0FBUUk7QUFBQTtBQUFBO0FBQ0Usb0RBQU8sTUFBSyxPQUFaLEVBQW9CLE1BQUssTUFBekIsRUFBZ0MsT0FBTSxPQUF0QyxFQUE4QyxVQUFVLEtBQUtTLFVBQUwsQ0FBZ0JaLElBQWhCLENBQXFCLElBQXJCLENBQXhELEdBREY7QUFBQTtBQUFBLFVBUko7QUFXRTtBQVhGLFFBREY7QUFlRDs7OztHQXZDZ0IsZ0JBQU1DLFM7O0FBd0N4Qjs7bUJBR2NDLEkiLCJmaWxlIjoiMC5iYWI5MGEyNDVhZDY4Y2MzYTEyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENoYXQgZnJvbSAnLi9DaGF0Vmlldy5qc3gnO1xyXG5pbXBvcnQgR2FtZU92ZXIgZnJvbSAnLi9HYW1lT3Zlci5qc3gnXHJcbmltcG9ydCBDb250cm9scyBmcm9tICcuL0NvbnRyb2xzLmpzeCdcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vUHJvZ3Jlc3NCYXIuanN4J1xyXG5cclxuY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRnYW1lb3ZlcjogZmFsc2UsXHJcblx0XHRcdHRpbWU6IG51bGwsXHJcblx0XHRcdHRpbWVyOiBudWxsLFxyXG5cdFx0XHRjb250cm9sczogZmFsc2VcclxuXHRcdH1cclxuXHR9IFxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHZhciBzb2NrZXQgPSB3aW5kb3cuc29ja2V0O1xyXG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHRzb2NrZXQub24oJ2dhbWVvdmVybGlzdGVuJywgZnVuY3Rpb24odGltZSkge1xyXG5cdFx0XHRcdGNvbnRleHQuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0Z2FtZW92ZXI6IHRydWUsXHJcblx0XHRcdFx0XHR0aW1lOiB0aW1lXHJcblx0XHRcdFx0fSlcclxuXHRcdGNvbnNvbGUubG9nKCdnYW1lb3ZlciEnKVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRzb2NrZXQub24oJ3RpbWVyJywgZnVuY3Rpb24odGltZXIpIHtcclxuXHRcdFx0XHRjb250ZXh0LnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdHRpbWVyOiB0aW1lclxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG4gIH1cclxuXHJcbiAgY29udHJvbHNDbGlja0hhbmRsZXIoKSB7XHJcbiAgXHR0aGlzLnNldFN0YXRlKHtcclxuICBcdFx0Y29udHJvbHM6ICF0aGlzLnN0YXRlLmNvbnRyb2xzXHJcbiAgXHR9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJHYW1lXCI+XHJcblx0XHQgIDxQcm9ncmVzc0Jhci8+XHJcbiAgICAgIFx0PENoYXQgdGltZXI9e3RoaXMuc3RhdGUudGltZX0gY29udHJvbHNDbGlja0hhbmRsZXI9e3RoaXMuY29udHJvbHNDbGlja0hhbmRsZXIuYmluZCh0aGlzKX0gLz5cclxuICAgICAgXHR7dGhpcy5zdGF0ZS5nYW1lb3ZlciA/IDxHYW1lT3ZlciB0aW1lPXt0aGlzLnN0YXRlLnRpbWV9Lz4gOiAnJ31cclxuICAgICAgXHR7dGhpcy5zdGF0ZS5jb250cm9scyA/IDxDb250cm9scyBjb250cm9sc0NsaWNrSGFuZGxlcj17dGhpcy5jb250cm9sc0NsaWNrSGFuZGxlci5iaW5kKHRoaXMpfSAvPiA6ICcnfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbWUvR2FtZVZpZXcuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgVGV4dENoYXQgZnJvbSAnLi9UZXh0Q2hhdC5qc3gnXHJcbmltcG9ydCBWaWRlb0NoYXQgZnJvbSAnLi9WaWRlb0NoYXQuanN4JztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vUHJvZ3Jlc3NCYXIuanN4J1xyXG5cclxuY2xhc3MgQ2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdmlkZW86IHRydWVcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudGV4dClcclxuICB9XHJcblxyXG4gIHN3aXRjaENoYXQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdmlkZW86IGZhbHNlXHJcbiAgICB9KVxyXG4gICAgLy8gaWYgKHZhbHVlID09PSAndmlkZW8nKSB7XHJcbiAgICAvLyAgIHNvY2tldC5lbWl0KCdjaGFuZ2VkVG9WaWRlbycsICcnKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIHN0b3BHYW1lKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikucmVtb3ZlKCk7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiT3B0aW9uc1wiPlxyXG4gICAgICAgICAgPGgxPk1hemluZyBGcmllbmRzPC9oMT5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnRpbWUgPyA8aDI+e3RoaXMucHJvcHMudGltZX08L2gyPiA6IDxwPndhaXRpbmcgZm9yIHNlY29uZCBwbGF5ZXIuLi48L3A+fVxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb25CdXR0b25zXCIgb25DbGljaz17dGhpcy5wcm9wcy5jb250cm9sc0NsaWNrSGFuZGxlcn0+Q29udHJvbHM8L2J1dHRvbj5cclxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPjxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uQnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMuc3RvcEdhbWUuYmluZCh0aGlzKX0+UXVpdCBHYW1lPC9idXR0b24+PC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnZpZGVvID8gPFZpZGVvQ2hhdC8+IDogJycgfVxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2hhdFwiIHZhbHVlPVwidmlkZW9cIiBvbkNoYW5nZT17dGhpcy5zd2l0Y2hDaGF0LmJpbmQodGhpcyl9Lz5WaWRlbyBPZmZcclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8VGV4dENoYXQvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9DaGF0Vmlldy5qc3giXSwic291cmNlUm9vdCI6IiJ9