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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWVWaWV3LmpzeD9mYjdlIl0sIm5hbWVzIjpbIkdhbWUiLCJzdGF0ZSIsImdhbWVvdmVyIiwidGltZSIsInRpbWVyIiwiY29udHJvbHMiLCJzb2NrZXQiLCJ3aW5kb3ciLCJjb250ZXh0Iiwib24iLCJzZXRTdGF0ZSIsImNvbnRyb2xzQ2xpY2tIYW5kbGVyIiwiYmluZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU1BLEk7OztBQUNMLGtCQUFjO0FBQUE7O0FBQUE7O0FBRWIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLGNBQVUsS0FERTtBQUVaQyxVQUFNLElBRk07QUFHWkMsV0FBTyxJQUhLO0FBSVpDLGNBQVU7QUFKRSxJQUFiO0FBRmE7QUFRYjs7Ozt1Q0FFbUI7QUFDbkIsUUFBSUMsU0FBU0MsT0FBT0QsTUFBcEI7QUFDQSxRQUFJRSxVQUFVLElBQWQ7O0FBRUFGLFdBQU9HLEVBQVAsQ0FBVSxnQkFBVixFQUE0QixVQUFTTixJQUFULEVBQWU7QUFDekNLLGFBQVFFLFFBQVIsQ0FBaUI7QUFDaEJSLGdCQUFVLElBRE07QUFFaEJDLFlBQU1BLElBRlU7QUFHaEJDLGFBQU9BO0FBSFMsTUFBakI7QUFLQSxLQU5GO0FBUUM7OzswQ0FFc0I7QUFDdEIsU0FBS00sUUFBTCxDQUFjO0FBQ2JMLGVBQVUsQ0FBQyxLQUFLSixLQUFMLENBQVdJO0FBRFQsS0FBZDtBQUdBOzs7NEJBRVE7QUFDUCxXQUNFO0FBQUE7QUFBQSxPQUFLLFdBQVUsTUFBZjtBQUNGLCtEQURFO0FBRUMseURBQU0sT0FBTyxLQUFLSixLQUFMLENBQVdHLEtBQXhCLEVBQStCLE1BQU0sS0FBS0gsS0FBTCxDQUFXRSxJQUFoRCxFQUFzRCxzQkFBc0IsS0FBS1Esb0JBQUwsQ0FBMEJDLElBQTFCLENBQStCLElBQS9CLENBQTVFLEdBRkQ7QUFHRSxVQUFLWCxLQUFMLENBQVdDLFFBQVgsR0FBc0Isb0RBQVUsTUFBTSxLQUFLRCxLQUFMLENBQVdFLElBQTNCLEdBQXRCLEdBQTJELEVBSDdEO0FBSUUsVUFBS0YsS0FBTCxDQUFXSSxRQUFYLEdBQXNCLG9EQUFVLHNCQUFzQixLQUFLTSxvQkFBTCxDQUEwQkMsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBaEMsR0FBdEIsR0FBaUc7QUFKbkcsS0FERjtBQVFEOzs7O0dBeENnQixnQkFBTUMsUzs7bUJBMkNWYixJIiwiZmlsZSI6IjAuZWYzZjNjNGI3YjBiMThlZDE1MzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDaGF0IGZyb20gJy4vQ2hhdFZpZXcuanN4JztcclxuaW1wb3J0IEdhbWVPdmVyIGZyb20gJy4vR2FtZU92ZXIuanN4J1xyXG5pbXBvcnQgQ29udHJvbHMgZnJvbSAnLi9Db250cm9scy5qc3gnXHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuL1Byb2dyZXNzQmFyLmpzeCdcclxuXHJcbmNsYXNzIEdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKVxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0Z2FtZW92ZXI6IGZhbHNlLFxyXG5cdFx0XHR0aW1lOiBudWxsLFxyXG5cdFx0XHR0aW1lcjogbnVsbCxcclxuXHRcdFx0Y29udHJvbHM6IGZhbHNlXHJcblx0XHR9XHJcblx0fSBcclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR2YXIgc29ja2V0ID0gd2luZG93LnNvY2tldDtcclxuXHRcdHZhciBjb250ZXh0ID0gdGhpcztcclxuXHRcdFxyXG5cdFx0c29ja2V0Lm9uKCdnYW1lb3Zlcmxpc3RlbicsIGZ1bmN0aW9uKHRpbWUpIHtcclxuXHRcdFx0XHRjb250ZXh0LnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdGdhbWVvdmVyOiB0cnVlLFxyXG5cdFx0XHRcdFx0dGltZTogdGltZSxcclxuXHRcdFx0XHRcdHRpbWVyOiB0aW1lclxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGNvbnRyb2xzQ2xpY2tIYW5kbGVyKCkge1xyXG4gIFx0dGhpcy5zZXRTdGF0ZSh7XHJcbiAgXHRcdGNvbnRyb2xzOiAhdGhpcy5zdGF0ZS5jb250cm9sc1xyXG4gIFx0fSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR2FtZVwiPlxyXG5cdFx0ICA8UHJvZ3Jlc3NCYXIvPlxyXG4gICAgICBcdDxDaGF0IHRpbWVyPXt0aGlzLnN0YXRlLnRpbWVyfSB0aW1lPXt0aGlzLnN0YXRlLnRpbWV9IGNvbnRyb2xzQ2xpY2tIYW5kbGVyPXt0aGlzLmNvbnRyb2xzQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyl9IC8+XHJcbiAgICAgIFx0e3RoaXMuc3RhdGUuZ2FtZW92ZXIgPyA8R2FtZU92ZXIgdGltZT17dGhpcy5zdGF0ZS50aW1lfS8+IDogJyd9XHJcbiAgICAgIFx0e3RoaXMuc3RhdGUuY29udHJvbHMgPyA8Q29udHJvbHMgY29udHJvbHNDbGlja0hhbmRsZXI9e3RoaXMuY29udHJvbHNDbGlja0hhbmRsZXIuYmluZCh0aGlzKX0gLz4gOiAnJ31cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWVWaWV3LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=