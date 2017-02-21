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
							_react2.default.createElement(
								'input',
								{ onChange: this.handleChange, name: 'joinRoomName' },
								' '
							),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lVmlldy5qc3g/NTFiMiJdLCJuYW1lcyI6WyJIb21lIiwic3RhdGUiLCJ2aWV3Iiwiam9pbiIsIm5ldyIsImNyZWF0ZVJvb21OYW1lIiwiam9pblJvb21OYW1lIiwiY3JlYXRlUm9vbUJ1dHRvbiIsImJpbmQiLCJqb2luUm9vbUJ1dHRvbiIsIm5ld0J1dHRvbkNsaWNrIiwiam9pbkJ1dHRvbkNsaWNrIiwiaGFuZGxlQ2hhbmdlIiwid2luZG93Iiwic29ja2V0IiwiZW1pdCIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0tBRU1BLEk7OztBQUNMLGtCQUFjO0FBQUE7O0FBQUE7O0FBRWIsU0FBS0MsS0FBTCxHQUFhO0FBQ1pDLFVBQU0sTUFETTtBQUVaQyxVQUFNLFFBRk07QUFHWkMsU0FBSyxRQUhPO0FBSVRDLG9CQUFnQixFQUpQO0FBS1RDLGtCQUFjO0FBTEwsSUFBYjtBQU9FLFNBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkQsSUFBcEIsT0FBdEI7QUFDQSxTQUFLRSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JGLElBQXBCLE9BQXRCO0FBQ0EsU0FBS0csZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCSCxJQUFyQixPQUF2QjtBQUNBLFNBQUtJLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkosSUFBbEIsT0FBcEI7QUFiVztBQWNiOzs7O3NDQUVrQjtBQUNoQkssV0FBT0MsTUFBUCxDQUFjQyxJQUFkLENBQW1CLFlBQW5CLEVBQWlDLEtBQUtkLEtBQUwsQ0FBV0ksY0FBNUM7QUFDRixTQUFLVyxRQUFMLENBQWM7QUFDYmQsV0FBTTtBQURPLEtBQWQ7QUFHQTs7O29DQUVpQjtBQUNmVyxXQUFPQyxNQUFQLENBQWNDLElBQWQsQ0FBbUIsVUFBbkIsRUFBK0IsS0FBS2QsS0FBTCxDQUFXSyxZQUExQztBQUNBLFNBQUtVLFFBQUwsQ0FBYztBQUNaZCxXQUFNO0FBRE0sS0FBZDtBQUdEOzs7b0NBRWU7QUFDaEIsU0FBS2MsUUFBTCxDQUFjO0FBQ2JaLFVBQUs7QUFEUSxLQUFkO0FBR0E7OztxQ0FFaUI7QUFDakIsU0FBS1ksUUFBTCxDQUFjO0FBQ2JiLFdBQU07QUFETyxLQUFkO0FBR0E7OztnQ0FFYWMsQyxFQUFHO0FBQ2QsU0FBS0QsUUFBTCxxQkFDR0MsRUFBRUMsTUFBRixDQUFTQyxJQURaLEVBQ21CRixFQUFFQyxNQUFGLENBQVNFLEtBRDVCO0FBR0FDLFlBQVFDLEdBQVIsQ0FBWSxLQUFLckIsS0FBakI7QUFDRDs7OzRCQUVRO0FBQ1AsV0FDRTtBQUFBO0FBQUEsT0FBSyxXQUFXLEtBQUtBLEtBQUwsQ0FBV0MsSUFBM0I7QUFDQyw2REFERDtBQUVDO0FBQUE7QUFBQSxRQUFLLFdBQVUsU0FBZjtBQUNDO0FBQUE7QUFBQSxTQUFRLFdBQVUsZUFBbEIsRUFBa0MsU0FBUyxLQUFLUSxjQUFoRDtBQUFBO0FBQUEsT0FERDtBQUVDO0FBQUE7QUFBQSxTQUFLLFdBQVcsS0FBS1QsS0FBTCxDQUFXRyxHQUEzQjtBQUFBO0FBRUEsZ0RBQU8sVUFBVSxLQUFLUSxZQUF0QixFQUFvQyxNQUFLLGdCQUF6QyxHQUZBO0FBR0E7QUFBQTtBQUFBLFVBQVEsV0FBVSxNQUFsQixFQUF5QixTQUFTLEtBQUtMLGdCQUF2QztBQUFBO0FBQUEsUUFIQTtBQUlBLGdEQUpBO0FBS0E7QUFMQTtBQUZELE1BRkQ7QUFZQztBQUFBO0FBQUEsUUFBSyxXQUFVLFVBQWY7QUFDQztBQUFBO0FBQUEsU0FBUSxXQUFVLGVBQWxCLEVBQWtDLFNBQVMsS0FBS0ksZUFBaEQ7QUFBQTtBQUFBLE9BREQ7QUFFQztBQUFBO0FBQUEsU0FBSyxXQUFXLEtBQUtWLEtBQUwsQ0FBV0UsSUFBM0I7QUFBQTtBQUVBO0FBQUE7QUFBQSxVQUFPLFVBQVUsS0FBS1MsWUFBdEIsRUFBb0MsTUFBSyxjQUF6QztBQUFBO0FBQUEsUUFGQTtBQUdBO0FBQUE7QUFBQSxVQUFRLFdBQVUsTUFBbEIsRUFBeUIsU0FBUyxLQUFLSCxjQUF2QztBQUFBO0FBQUEsUUFIQTtBQUlBLGdEQUpBO0FBS0E7QUFMQTtBQUZEO0FBWkQsS0FERjtBQXlCRDs7OztHQTVFZ0IsZ0JBQU1jLFM7O21CQStFVnZCLEkiLCJmaWxlIjoiMC4xYjg3M2Q1OWI5ZGRkMGNlZjQ5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4vVGl0bGVWaWV3LmpzeCdcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKVxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0dmlldzogJ0hvbWUnLFxyXG5cdFx0XHRqb2luOiAndmFuaXNoJyxcclxuXHRcdFx0bmV3OiAndmFuaXNoJyxcclxuICAgICAgY3JlYXRlUm9vbU5hbWU6ICcnLFxyXG4gICAgICBqb2luUm9vbU5hbWU6ICcnXHJcblx0XHR9XHJcbiAgICB0aGlzLmNyZWF0ZVJvb21CdXR0b24gPSB0aGlzLmNyZWF0ZVJvb21CdXR0b24uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuam9pblJvb21CdXR0b24gPSB0aGlzLmpvaW5Sb29tQnV0dG9uLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm5ld0J1dHRvbkNsaWNrID0gdGhpcy5uZXdCdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5qb2luQnV0dG9uQ2xpY2sgPSB0aGlzLmpvaW5CdXR0b25DbGljay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlUm9vbUJ1dHRvbigpIHtcclxuICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnY3JlYXRlUm9vbScsIHRoaXMuc3RhdGUuY3JlYXRlUm9vbU5hbWUpO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdHZpZXc6ICd2YW5pc2gnXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcbiAgam9pblJvb21CdXR0b24oKSB7XHJcbiAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ2pvaW5Sb29tJywgdGhpcy5zdGF0ZS5qb2luUm9vbU5hbWUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHZpZXc6ICd2YW5pc2gnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblx0bmV3QnV0dG9uQ2xpY2soKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0bmV3OiAnTmV3VmlldydcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRqb2luQnV0dG9uQ2xpY2soKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0am9pbjogJ0pvaW5WaWV3J1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG4gIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSBcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnZpZXd9PlxyXG4gICAgICBcdDxUaXRsZSAvPlxyXG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiTmV3Vmlld1wiPlxyXG5cdCAgICAgIFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb25zQnV0dG9uXCIgb25DbGljaz17dGhpcy5uZXdCdXR0b25DbGlja30+TmV3IEdhbWU8L2J1dHRvbj5cclxuXHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm5ld30+XHJcblx0ICAgICAgXHRSb29tIE5hbWU6XHJcblx0ICAgICAgXHQ8aW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBuYW1lPVwiY3JlYXRlUm9vbU5hbWVcIj48L2lucHV0PlxyXG5cdCAgICAgIFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJQbGF5XCIgb25DbGljaz17dGhpcy5jcmVhdGVSb29tQnV0dG9ufT5DcmVhdGUgUm9vbTwvYnV0dG9uPlxyXG5cdCAgICAgIFx0PGJyLz5cclxuXHQgICAgICBcdDxici8+XHJcblx0ICAgICAgXHQ8L2Rpdj5cclxuICAgICAgXHQ8L2Rpdj5cclxuICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIkpvaW5WaWV3XCI+XHJcblx0ICAgICAgXHQ8YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbnNCdXR0b25cIiBvbkNsaWNrPXt0aGlzLmpvaW5CdXR0b25DbGlja30+Sm9pbiBHYW1lPC9idXR0b24+XHJcblx0ICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5qb2lufT5cclxuXHQgICAgICBcdFJvb20gTmFtZTpcclxuXHQgICAgICBcdDxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG5hbWU9XCJqb2luUm9vbU5hbWVcIj4gPC9pbnB1dD5cclxuICAgICAgXHRcdDxidXR0b24gY2xhc3NOYW1lPVwiUGxheVwiIG9uQ2xpY2s9e3RoaXMuam9pblJvb21CdXR0b259PkpvaW4gUm9vbTwvYnV0dG9uPlxyXG4gICAgICBcdFx0PGJyLz5cclxuICAgICAgXHRcdDxici8+XHJcblx0ICAgICAgXHQ8L2Rpdj5cclxuICAgICAgXHQ8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZVZpZXcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==