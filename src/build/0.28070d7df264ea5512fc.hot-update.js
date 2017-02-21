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
			_this.createRoomButton = _this.createRoomButton.bind(_this);
			_this.joinRoomButton = _this.joinRoomButton.bind(_this);
			_this.newButtonClick = _this.newButtonClick.bind(_this);
			_this.joinButtonClick = _this.joinButtonClick.bind(_this);
			_this.handleChange = _this.handleChange.bind(_this);
			return _this;
		}
	
		_createClass(Home, [{
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
							_react2.default.createElement('input', { onChange: this.handleChange, name: 'createRoomName' }),
							_react2.default.createElement(
								'button',
								{ className: 'Play', onClick: this.createRoomButton },
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
							_react2.default.createElement('input', { onChange: this.handleChange, name: 'joinRoomName' }),
							_react2.default.createElement(
								'button',
								{ className: 'Play', onClick: this.joinRoomButton },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lVmlldy5qc3g/NTFiMiJdLCJuYW1lcyI6WyJIb21lIiwic3RhdGUiLCJ2aWV3Iiwiam9pbiIsIm5ldyIsImNyZWF0ZVJvb21OYW1lIiwiam9pblJvb21OYW1lIiwiY3JlYXRlUm9vbUJ1dHRvbiIsImJpbmQiLCJqb2luUm9vbUJ1dHRvbiIsIm5ld0J1dHRvbkNsaWNrIiwiam9pbkJ1dHRvbkNsaWNrIiwiaGFuZGxlQ2hhbmdlIiwid2luZG93Iiwic29ja2V0IiwiZW1pdCIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0tBRU1BLEk7OztBQUNMLGtCQUFjO0FBQUE7O0FBQUE7O0FBRWIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLFVBQU0sTUFETTtBQUVaQyxVQUFNLFFBRk07QUFHWkMsU0FBSyxRQUhPO0FBSVRDLG9CQUFnQixFQUpQO0FBS1RDLGtCQUFjO0FBTEwsSUFBYjtBQU9FLFNBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkQsSUFBcEIsT0FBdEI7QUFDQSxTQUFLRSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JGLElBQXBCLE9BQXRCO0FBQ0EsU0FBS0csZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCSCxJQUFyQixPQUF2QjtBQUNBLFNBQUtJLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkosSUFBbEIsT0FBcEI7QUFiVztBQWNiOzs7O3NDQUVrQjtBQUNoQkssV0FBT0MsTUFBUCxDQUFjQyxJQUFkLENBQW1CLFlBQW5CLEVBQWlDLEtBQUtkLEtBQUwsQ0FBV0ksY0FBNUM7QUFDRixTQUFLVyxRQUFMLENBQWM7QUFDYmQsV0FBTTtBQURPLEtBQWQ7QUFHQTs7O29DQUVpQjtBQUNmVyxXQUFPQyxNQUFQLENBQWNDLElBQWQsQ0FBbUIsVUFBbkIsRUFBK0IsS0FBS2QsS0FBTCxDQUFXSyxZQUExQztBQUNBLFNBQUtVLFFBQUwsQ0FBYztBQUNaZCxXQUFNO0FBRE0sS0FBZDtBQUdEOzs7b0NBRWU7QUFDaEIsU0FBS2MsUUFBTCxDQUFjO0FBQ2JaLFVBQUs7QUFEUSxLQUFkO0FBR0E7OztxQ0FFaUI7QUFDakIsU0FBS1ksUUFBTCxDQUFjO0FBQ2JiLFdBQU07QUFETyxLQUFkO0FBR0E7OztnQ0FFYWMsQyxFQUFHO0FBQ2QsU0FBS0QsUUFBTCxxQkFDR0MsRUFBRUMsTUFBRixDQUFTQyxJQURaLEVBQ21CRixFQUFFQyxNQUFGLENBQVNFLEtBRDVCO0FBR0FDLFlBQVFDLEdBQVIsQ0FBWSxLQUFLckIsS0FBakI7QUFDRDs7OzRCQUVRO0FBQ1AsV0FDRTtBQUFBO0FBQUEsT0FBSyxXQUFXLEtBQUtBLEtBQUwsQ0FBV0MsSUFBM0I7QUFDQyw2REFERDtBQUVDO0FBQUE7QUFBQSxRQUFLLFdBQVUsU0FBZjtBQUNDO0FBQUE7QUFBQSxTQUFRLFdBQVUsZUFBbEIsRUFBa0MsU0FBUyxLQUFLUSxjQUFoRDtBQUFBO0FBQUEsT0FERDtBQUVDO0FBQUE7QUFBQSxTQUFLLFdBQVcsS0FBS1QsS0FBTCxDQUFXRyxHQUEzQjtBQUFBO0FBRUEsZ0RBQU8sVUFBVSxLQUFLUSxZQUF0QixFQUFvQyxNQUFLLGdCQUF6QyxHQUZBO0FBR0E7QUFBQTtBQUFBLFVBQVEsV0FBVSxNQUFsQixFQUF5QixTQUFTLEtBQUtMLGdCQUF2QztBQUFBO0FBQUEsUUFIQTtBQUlBLGdEQUpBO0FBS0E7QUFMQTtBQUZELE1BRkQ7QUFZQztBQUFBO0FBQUEsUUFBSyxXQUFVLFVBQWY7QUFDQztBQUFBO0FBQUEsU0FBUSxXQUFVLGVBQWxCLEVBQWtDLFNBQVMsS0FBS0ksZUFBaEQ7QUFBQTtBQUFBLE9BREQ7QUFFQztBQUFBO0FBQUEsU0FBSyxXQUFXLEtBQUtWLEtBQUwsQ0FBV0UsSUFBM0I7QUFBQTtBQUVBLGdEQUFPLFVBQVUsS0FBS1MsWUFBdEIsRUFBb0MsTUFBSyxjQUF6QyxHQUZBO0FBR0E7QUFBQTtBQUFBLFVBQVEsV0FBVSxNQUFsQixFQUF5QixTQUFTLEtBQUtILGNBQXZDO0FBQUE7QUFBQSxRQUhBO0FBSUEsZ0RBSkE7QUFLQTtBQUxBO0FBRkQ7QUFaRCxLQURGO0FBeUJEOzs7O0dBNUVnQixnQkFBTWMsUzs7bUJBK0VWdkIsSSIsImZpbGUiOiIwLjI4MDcwZDdkZjI2NGVhNTUxMmZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9UaXRsZVZpZXcuanN4J1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHR2aWV3OiAnSG9tZScsXHJcblx0XHRcdGpvaW46ICd2YW5pc2gnLFxyXG5cdFx0XHRuZXc6ICd2YW5pc2gnLFxyXG4gICAgICBjcmVhdGVSb29tTmFtZTogJycsXHJcbiAgICAgIGpvaW5Sb29tTmFtZTogJydcclxuXHRcdH1cclxuICAgIHRoaXMuY3JlYXRlUm9vbUJ1dHRvbiA9IHRoaXMuY3JlYXRlUm9vbUJ1dHRvbi5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5qb2luUm9vbUJ1dHRvbiA9IHRoaXMuam9pblJvb21CdXR0b24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMubmV3QnV0dG9uQ2xpY2sgPSB0aGlzLm5ld0J1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmpvaW5CdXR0b25DbGljayA9IHRoaXMuam9pbkJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVSb29tQnV0dG9uKCkge1xyXG4gICAgd2luZG93LnNvY2tldC5lbWl0KCdjcmVhdGVSb29tJywgdGhpcy5zdGF0ZS5jcmVhdGVSb29tTmFtZSk7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0dmlldzogJ3ZhbmlzaCdcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuICBqb2luUm9vbUJ1dHRvbigpIHtcclxuICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnam9pblJvb20nLCB0aGlzLnN0YXRlLmpvaW5Sb29tTmFtZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdmlldzogJ3ZhbmlzaCdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuXHRuZXdCdXR0b25DbGljaygpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRuZXc6ICdOZXdWaWV3J1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdGpvaW5CdXR0b25DbGljaygpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRqb2luOiAnSm9pblZpZXcnXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIFxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUudmlld30+XHJcbiAgICAgIFx0PFRpdGxlIC8+XHJcbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJOZXdWaWV3XCI+XHJcblx0ICAgICAgXHQ8YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbnNCdXR0b25cIiBvbkNsaWNrPXt0aGlzLm5ld0J1dHRvbkNsaWNrfT5OZXcgR2FtZTwvYnV0dG9uPlxyXG5cdCAgICAgIFx0PGRpdiBjbGFzc05hbWU9e3RoaXMuc3RhdGUubmV3fT5cclxuXHQgICAgICBcdFJvb20gTmFtZTpcclxuXHQgICAgICBcdDxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG5hbWU9XCJjcmVhdGVSb29tTmFtZVwiPjwvaW5wdXQ+XHJcblx0ICAgICAgXHQ8YnV0dG9uIGNsYXNzTmFtZT1cIlBsYXlcIiBvbkNsaWNrPXt0aGlzLmNyZWF0ZVJvb21CdXR0b259PkNyZWF0ZSBSb29tPC9idXR0b24+XHJcblx0ICAgICAgXHQ8YnIvPlxyXG5cdCAgICAgIFx0PGJyLz5cclxuXHQgICAgICBcdDwvZGl2PlxyXG4gICAgICBcdDwvZGl2PlxyXG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiSm9pblZpZXdcIj5cclxuXHQgICAgICBcdDxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uc0J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuam9pbkJ1dHRvbkNsaWNrfT5Kb2luIEdhbWU8L2J1dHRvbj5cclxuXHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmpvaW59PlxyXG5cdCAgICAgIFx0Um9vbSBOYW1lOlxyXG5cdCAgICAgIFx0PGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gbmFtZT1cImpvaW5Sb29tTmFtZVwiPjwvaW5wdXQ+XHJcbiAgICAgIFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cIlBsYXlcIiBvbkNsaWNrPXt0aGlzLmpvaW5Sb29tQnV0dG9ufT5Kb2luIFJvb208L2J1dHRvbj5cclxuICAgICAgXHRcdDxici8+XHJcbiAgICAgIFx0XHQ8YnIvPlxyXG5cdCAgICAgIFx0PC9kaXY+XHJcbiAgICAgIFx0PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWVWaWV3LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=