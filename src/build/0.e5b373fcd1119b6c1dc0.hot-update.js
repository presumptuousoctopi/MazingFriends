webpackHotUpdate(0,{

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(102); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(102);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TitleView = __webpack_require__(236);
	
	var _TitleView2 = _interopRequireDefault(_TitleView);
	
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
				joinRoomName: ''
			};
			_this.playButtonClick = _this.playButtonClick.bind(_this);
			_this.newButtonClick = _this.newButtonClick.bind(_this);
			_this.joinButtonClick = _this.joinButtonClick.bind(_this);
			return _this;
		}
	
		_createClass(Home, [{
			key: 'playButtonClick',
			value: function playButtonClick() {
				console.log(window.socket);
				window.socket.emit('createRoom', this.state.createRoomName);
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
					{ className: this.state.view },
					_react2.default.createElement(_TitleView2.default, null),
					_react2.default.createElement(
						'div',
						{ className: 'NewView' },
						_react2.default.createElement(
							'button',
							{ className: 'optionsButton', onClick: this.newButtonClick },
							'New Game'
						),
						_react2.default.createElement(
							'div',
							{ className: this.state.new },
							'Room Name:',
							_react2.default.createElement('input', { onChange: this.handleChange.bind(this), name: 'createRoomName' }),
							_react2.default.createElement(
								'button',
								{ className: 'Play', onClick: this.playButtonClick.bind(this) },
								'Create Room'
							),
							_react2.default.createElement('br', null),
							_react2.default.createElement('br', null)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'JoinView' },
						_react2.default.createElement(
							'button',
							{ className: 'optionsButton', onClick: this.joinButtonClick },
							'Join Game'
						),
						_react2.default.createElement(
							'div',
							{ className: this.state.join },
							'Room Name:',
							_react2.default.createElement('input', null),
							_react2.default.createElement(
								'button',
								{ className: 'Play', onClick: this.playButtonClick },
								'Join Room'
							),
							_react2.default.createElement('br', null),
							_react2.default.createElement('br', null)
						)
					)
				);
			}
		}]);
	
		return Home;
	}(_react2.default.Component);
	
	exports.default = Home;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(232); if (makeExportsHot(module, __webpack_require__(102))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "HomeView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lVmlldy5qc3g/NTFiMiJdLCJuYW1lcyI6WyJIb21lIiwic3RhdGUiLCJ2aWV3Iiwiam9pbiIsIm5ldyIsImNyZWF0ZVJvb21OYW1lIiwiam9pblJvb21OYW1lIiwicGxheUJ1dHRvbkNsaWNrIiwiYmluZCIsIm5ld0J1dHRvbkNsaWNrIiwiam9pbkJ1dHRvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNvY2tldCIsImVtaXQiLCJzZXRTdGF0ZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0tBRU1BLEk7OztBQUNMLGtCQUFjO0FBQUE7O0FBQUE7O0FBRWIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLFVBQU0sTUFETTtBQUVaQyxVQUFNLFFBRk07QUFHWkMsU0FBSyxRQUhPO0FBSVRDLG9CQUFnQixFQUpQO0FBS1RDLGtCQUFjO0FBTEwsSUFBYjtBQU9BLFNBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JELElBQXBCLE9BQXRCO0FBQ0EsU0FBS0UsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCRixJQUFyQixPQUF2QjtBQVhhO0FBWWI7Ozs7cUNBRWlCO0FBQ2ZHLFlBQVFDLEdBQVIsQ0FBWUMsT0FBT0MsTUFBbkI7QUFDQUQsV0FBT0MsTUFBUCxDQUFjQyxJQUFkLENBQW1CLFlBQW5CLEVBQWlDLEtBQUtkLEtBQUwsQ0FBV0ksY0FBNUM7QUFDRixTQUFLVyxRQUFMLENBQWM7QUFDYmQsV0FBTTtBQURPLEtBQWQ7QUFHQTs7O29DQUVnQjtBQUNoQixTQUFLYyxRQUFMLENBQWM7QUFDYlosVUFBSztBQURRLEtBQWQ7QUFHQTs7O3FDQUVpQjtBQUNqQixTQUFLWSxRQUFMLENBQWM7QUFDYmIsV0FBTTtBQURPLEtBQWQ7QUFHQTs7O2dDQUVhYyxDLEVBQUc7QUFDZCxTQUFLRCxRQUFMLHFCQUNHQyxFQUFFQyxNQUFGLENBQVNDLElBRFosRUFDbUJGLEVBQUVDLE1BQUYsQ0FBU0UsS0FENUI7QUFHQVQsWUFBUUMsR0FBUixDQUFZLEtBQUtYLEtBQWpCO0FBQ0Q7Ozs0QkFFUTtBQUNQLFdBQ0U7QUFBQTtBQUFBLE9BQUssV0FBVyxLQUFLQSxLQUFMLENBQVdDLElBQTNCO0FBQ0MsNkRBREQ7QUFFQztBQUFBO0FBQUEsUUFBSyxXQUFVLFNBQWY7QUFDQztBQUFBO0FBQUEsU0FBUSxXQUFVLGVBQWxCLEVBQWtDLFNBQVMsS0FBS08sY0FBaEQ7QUFBQTtBQUFBLE9BREQ7QUFFQztBQUFBO0FBQUEsU0FBSyxXQUFXLEtBQUtSLEtBQUwsQ0FBV0csR0FBM0I7QUFBQTtBQUVBLGdEQUFPLFVBQVUsS0FBS2lCLFlBQUwsQ0FBa0JiLElBQWxCLENBQXVCLElBQXZCLENBQWpCLEVBQStDLE1BQUssZ0JBQXBELEdBRkE7QUFHQTtBQUFBO0FBQUEsVUFBUSxXQUFVLE1BQWxCLEVBQXlCLFNBQVMsS0FBS0QsZUFBTCxDQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBbEM7QUFBQTtBQUFBLFFBSEE7QUFJQSxnREFKQTtBQUtBO0FBTEE7QUFGRCxNQUZEO0FBWUM7QUFBQTtBQUFBLFFBQUssV0FBVSxVQUFmO0FBQ0M7QUFBQTtBQUFBLFNBQVEsV0FBVSxlQUFsQixFQUFrQyxTQUFTLEtBQUtFLGVBQWhEO0FBQUE7QUFBQSxPQUREO0FBRUM7QUFBQTtBQUFBLFNBQUssV0FBVyxLQUFLVCxLQUFMLENBQVdFLElBQTNCO0FBQUE7QUFFQSxtREFGQTtBQUdBO0FBQUE7QUFBQSxVQUFRLFdBQVUsTUFBbEIsRUFBeUIsU0FBUyxLQUFLSSxlQUF2QztBQUFBO0FBQUEsUUFIQTtBQUlBLGdEQUpBO0FBS0E7QUFMQTtBQUZEO0FBWkQsS0FERjtBQXlCRDs7OztHQXBFZ0IsZ0JBQU1lLFM7O21CQXVFVnRCLEkiLCJmaWxlIjoiMC5lNWIzNzNmY2QxMTE5YjZjMWRjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4vVGl0bGVWaWV3LmpzeCdcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKVxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0dmlldzogJ0hvbWUnLFxyXG5cdFx0XHRqb2luOiAndmFuaXNoJyxcclxuXHRcdFx0bmV3OiAndmFuaXNoJyxcclxuICAgICAgY3JlYXRlUm9vbU5hbWU6ICcnLFxyXG4gICAgICBqb2luUm9vbU5hbWU6ICcnXHJcblx0XHR9XHJcblx0XHR0aGlzLnBsYXlCdXR0b25DbGljayA9IHRoaXMucGxheUJ1dHRvbkNsaWNrLmJpbmQodGhpcylcclxuXHRcdHRoaXMubmV3QnV0dG9uQ2xpY2sgPSB0aGlzLm5ld0J1dHRvbkNsaWNrLmJpbmQodGhpcylcclxuXHRcdHRoaXMuam9pbkJ1dHRvbkNsaWNrID0gdGhpcy5qb2luQnV0dG9uQ2xpY2suYmluZCh0aGlzKVxyXG5cdH1cclxuXHJcblx0cGxheUJ1dHRvbkNsaWNrKCkge1xyXG4gICAgY29uc29sZS5sb2cod2luZG93LnNvY2tldCk7XHJcbiAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ2NyZWF0ZVJvb20nLCB0aGlzLnN0YXRlLmNyZWF0ZVJvb21OYW1lKTtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHR2aWV3OiAndmFuaXNoJ1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdG5ld0J1dHRvbkNsaWNrKCkge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdG5ldzogJ05ld1ZpZXcnXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0am9pbkJ1dHRvbkNsaWNrKCkge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdGpvaW46ICdKb2luVmlldydcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuICBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS52aWV3fT5cclxuICAgICAgXHQ8VGl0bGUgLz5cclxuICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIk5ld1ZpZXdcIj5cclxuXHQgICAgICBcdDxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uc0J1dHRvblwiIG9uQ2xpY2s9e3RoaXMubmV3QnV0dG9uQ2xpY2t9Pk5ldyBHYW1lPC9idXR0b24+XHJcblx0ICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5uZXd9PlxyXG5cdCAgICAgIFx0Um9vbSBOYW1lOlxyXG5cdCAgICAgIFx0PGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBuYW1lPVwiY3JlYXRlUm9vbU5hbWVcIj48L2lucHV0PlxyXG5cdCAgICAgIFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJQbGF5XCIgb25DbGljaz17dGhpcy5wbGF5QnV0dG9uQ2xpY2suYmluZCh0aGlzKX0+Q3JlYXRlIFJvb208L2J1dHRvbj5cclxuXHQgICAgICBcdDxici8+XHJcblx0ICAgICAgXHQ8YnIvPlxyXG5cdCAgICAgIFx0PC9kaXY+XHJcbiAgICAgIFx0PC9kaXY+XHJcbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJKb2luVmlld1wiPlxyXG5cdCAgICAgIFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb25zQnV0dG9uXCIgb25DbGljaz17dGhpcy5qb2luQnV0dG9uQ2xpY2t9PkpvaW4gR2FtZTwvYnV0dG9uPlxyXG5cdCAgICAgIFx0PGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuam9pbn0+XHJcblx0ICAgICAgXHRSb29tIE5hbWU6XHJcblx0ICAgICAgXHQ8aW5wdXQ+PC9pbnB1dD5cclxuICAgICAgXHRcdDxidXR0b24gY2xhc3NOYW1lPVwiUGxheVwiIG9uQ2xpY2s9e3RoaXMucGxheUJ1dHRvbkNsaWNrfT5Kb2luIFJvb208L2J1dHRvbj5cclxuICAgICAgXHRcdDxici8+XHJcbiAgICAgIFx0XHQ8YnIvPlxyXG5cdCAgICAgIFx0PC9kaXY+XHJcbiAgICAgIFx0PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWVWaWV3LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=