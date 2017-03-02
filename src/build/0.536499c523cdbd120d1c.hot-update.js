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
	
				// socket.on('gameoverlisten', function(time) {
				// 		context.setState({
				// 			gameover: true,
				// 			time: time,
				//         timer: null
				// 		})
				// console.log('gameover!')
				// 	});
	
				socket.on('timer', function (timer) {
					context.setState({
						gameover: true,
						time: time,
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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWVWaWV3LmpzeD9mYjdlIl0sIm5hbWVzIjpbIkdhbWUiLCJzdGF0ZSIsImdhbWVvdmVyIiwidGltZSIsInRpbWVyIiwiY29udHJvbHMiLCJzb2NrZXQiLCJ3aW5kb3ciLCJjb250ZXh0Iiwib24iLCJzZXRTdGF0ZSIsImNvbnRyb2xzQ2xpY2tIYW5kbGVyIiwiYmluZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU1BLEk7OztBQUNMLGtCQUFjO0FBQUE7O0FBQUE7O0FBRWIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGNBQVUsS0FERTtBQUVaQyxVQUFNLElBRk07QUFHWkMsV0FBTyxJQUhLO0FBSVpDLGNBQVU7QUFKRSxJQUFiO0FBRmE7QUFRYjs7Ozt1Q0FFbUI7QUFDbkIsUUFBSUMsU0FBU0MsT0FBT0QsTUFBcEI7QUFDQSxRQUFJRSxVQUFVLElBQWQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUYsV0FBT0csRUFBUCxDQUFVLE9BQVYsRUFBbUIsVUFBU0wsS0FBVCxFQUFnQjtBQUNqQ0ksYUFBUUUsUUFBUixDQUFpQjtBQUNYUixnQkFBVSxJQURDO0FBRVhDLFlBQU1BLElBRks7QUFHaEJDLGFBQU9BO0FBSFMsTUFBakI7QUFLQSxLQU5GO0FBT0M7OzswQ0FFc0I7QUFDdEIsU0FBS00sUUFBTCxDQUFjO0FBQ2JMLGVBQVUsQ0FBQyxLQUFLSixLQUFMLENBQVdJO0FBRFQsS0FBZDtBQUdBOzs7NEJBRVE7QUFDUCxXQUNFO0FBQUE7QUFBQSxPQUFLLFdBQVUsTUFBZjtBQUNGLCtEQURFO0FBRUMseURBQU0sT0FBTyxLQUFLSixLQUFMLENBQVdHLEtBQXhCLEVBQStCLHNCQUFzQixLQUFLTyxvQkFBTCxDQUEwQkMsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBckQsR0FGRDtBQUdFLFVBQUtYLEtBQUwsQ0FBV0MsUUFBWCxHQUFzQixvREFBVSxNQUFNLEtBQUtELEtBQUwsQ0FBV0UsSUFBM0IsR0FBdEIsR0FBMkQsRUFIN0Q7QUFJRSxVQUFLRixLQUFMLENBQVdJLFFBQVgsR0FBc0Isb0RBQVUsc0JBQXNCLEtBQUtNLG9CQUFMLENBQTBCQyxJQUExQixDQUErQixJQUEvQixDQUFoQyxHQUF0QixHQUFpRztBQUpuRyxLQURGO0FBUUQ7Ozs7R0FoRGdCLGdCQUFNQyxTOzttQkFtRFZiLEkiLCJmaWxlIjoiMC41MzY0OTljNTIzY2RiZDEyMGQxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENoYXQgZnJvbSAnLi9DaGF0Vmlldy5qc3gnO1xyXG5pbXBvcnQgR2FtZU92ZXIgZnJvbSAnLi9HYW1lT3Zlci5qc3gnXHJcbmltcG9ydCBDb250cm9scyBmcm9tICcuL0NvbnRyb2xzLmpzeCdcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vUHJvZ3Jlc3NCYXIuanN4J1xyXG5cclxuY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRnYW1lb3ZlcjogZmFsc2UsXHJcblx0XHRcdHRpbWU6IG51bGwsXHJcblx0XHRcdHRpbWVyOiBudWxsLFxyXG5cdFx0XHRjb250cm9sczogZmFsc2VcclxuXHRcdH1cclxuXHR9IFxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHZhciBzb2NrZXQgPSB3aW5kb3cuc29ja2V0O1xyXG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQvLyBzb2NrZXQub24oJ2dhbWVvdmVybGlzdGVuJywgZnVuY3Rpb24odGltZSkge1xyXG5cdFx0Ly8gXHRcdGNvbnRleHQuc2V0U3RhdGUoe1xyXG5cdFx0Ly8gXHRcdFx0Z2FtZW92ZXI6IHRydWUsXHJcblx0XHQvLyBcdFx0XHR0aW1lOiB0aW1lLFxyXG4gIC8vICAgICAgICAgdGltZXI6IG51bGxcclxuXHRcdC8vIFx0XHR9KVxyXG5cdFx0Ly8gY29uc29sZS5sb2coJ2dhbWVvdmVyIScpXHJcblx0XHQvLyBcdH0pO1xyXG5cclxuXHRcdHNvY2tldC5vbigndGltZXInLCBmdW5jdGlvbih0aW1lcikge1xyXG5cdFx0XHRcdGNvbnRleHQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZ2FtZW92ZXI6IHRydWUsXHJcbiAgICAgICAgICB0aW1lOiB0aW1lLFxyXG5cdFx0XHRcdFx0dGltZXI6IHRpbWVyXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcbiAgfVxyXG5cclxuICBjb250cm9sc0NsaWNrSGFuZGxlcigpIHtcclxuICBcdHRoaXMuc2V0U3RhdGUoe1xyXG4gIFx0XHRjb250cm9sczogIXRoaXMuc3RhdGUuY29udHJvbHNcclxuICBcdH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdhbWVcIj5cclxuXHRcdCAgPFByb2dyZXNzQmFyLz5cclxuICAgICAgXHQ8Q2hhdCB0aW1lcj17dGhpcy5zdGF0ZS50aW1lcn0gY29udHJvbHNDbGlja0hhbmRsZXI9e3RoaXMuY29udHJvbHNDbGlja0hhbmRsZXIuYmluZCh0aGlzKX0gLz5cclxuICAgICAgXHR7dGhpcy5zdGF0ZS5nYW1lb3ZlciA/IDxHYW1lT3ZlciB0aW1lPXt0aGlzLnN0YXRlLnRpbWV9Lz4gOiAnJ31cclxuICAgICAgXHR7dGhpcy5zdGF0ZS5jb250cm9scyA/IDxDb250cm9scyBjb250cm9sc0NsaWNrSGFuZGxlcj17dGhpcy5jb250cm9sc0NsaWNrSGFuZGxlci5iaW5kKHRoaXMpfSAvPiA6ICcnfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbWUvR2FtZVZpZXcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==