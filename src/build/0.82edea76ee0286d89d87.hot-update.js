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
				createRoom: '',
				joinRoom: ''
			};
			_this.playButtonClick = _this.playButtonClick.bind(_this);
			_this.newButtonClick = _this.newButtonClick.bind(_this);
			_this.joinButtonClick = _this.joinButtonClick.bind(_this);
			return _this;
		}
	
		_createClass(Home, [{
			key: 'playButtonClick',
			value: function playButtonClick() {
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
							_react2.default.createElement('input', { onClick: this.handleChange.bind(this), name: 'createRoom' }),
							_react2.default.createElement(
								'button',
								{ className: 'Play', onClick: this.playButtonClick },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lVmlldy5qc3g/NTFiMiJdLCJuYW1lcyI6WyJIb21lIiwic3RhdGUiLCJ2aWV3Iiwiam9pbiIsIm5ldyIsImNyZWF0ZVJvb20iLCJqb2luUm9vbSIsInBsYXlCdXR0b25DbGljayIsImJpbmQiLCJuZXdCdXR0b25DbGljayIsImpvaW5CdXR0b25DbGljayIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7S0FFTUEsSTs7O0FBQ0wsa0JBQWM7QUFBQTs7QUFBQTs7QUFFYixTQUFLQyxLQUFMLEdBQWE7QUFDWkMsVUFBTSxNQURNO0FBRVpDLFVBQU0sUUFGTTtBQUdaQyxTQUFLLFFBSE87QUFJVEMsZ0JBQVksRUFKSDtBQUtUQyxjQUFVO0FBTEQsSUFBYjtBQU9BLFNBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JELElBQXBCLE9BQXRCO0FBQ0EsU0FBS0UsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCRixJQUFyQixPQUF2QjtBQVhhO0FBWWI7Ozs7cUNBRWlCO0FBQ2pCLFNBQUtHLFFBQUwsQ0FBYztBQUNiVCxXQUFNO0FBRE8sS0FBZDtBQUdBOzs7b0NBRWdCO0FBQ2hCLFNBQUtTLFFBQUwsQ0FBYztBQUNiUCxVQUFLO0FBRFEsS0FBZDtBQUdBOzs7cUNBRWlCO0FBQ2pCLFNBQUtPLFFBQUwsQ0FBYztBQUNiUixXQUFNO0FBRE8sS0FBZDtBQUdBOzs7Z0NBRWFTLEMsRUFBRztBQUNkLFNBQUtELFFBQUwscUJBQ0dDLEVBQUVDLE1BQUYsQ0FBU0MsSUFEWixFQUNtQkYsRUFBRUMsTUFBRixDQUFTRSxLQUQ1QjtBQUVLOzs7NEJBRUU7QUFDUCxXQUNFO0FBQUE7QUFBQSxPQUFLLFdBQVcsS0FBS2QsS0FBTCxDQUFXQyxJQUEzQjtBQUNDLDZEQUREO0FBRUM7QUFBQTtBQUFBLFFBQUssV0FBVSxTQUFmO0FBQ0M7QUFBQTtBQUFBLFNBQVEsV0FBVSxlQUFsQixFQUFrQyxTQUFTLEtBQUtPLGNBQWhEO0FBQUE7QUFBQSxPQUREO0FBRUM7QUFBQTtBQUFBLFNBQUssV0FBVyxLQUFLUixLQUFMLENBQVdHLEdBQTNCO0FBQUE7QUFFQSxnREFBTyxTQUFTLEtBQUtZLFlBQUwsQ0FBa0JSLElBQWxCLENBQXVCLElBQXZCLENBQWhCLEVBQThDLE1BQUssWUFBbkQsR0FGQTtBQUdBO0FBQUE7QUFBQSxVQUFRLFdBQVUsTUFBbEIsRUFBeUIsU0FBUyxLQUFLRCxlQUF2QztBQUFBO0FBQUEsUUFIQTtBQUlBLGdEQUpBO0FBS0E7QUFMQTtBQUZELE1BRkQ7QUFZQztBQUFBO0FBQUEsUUFBSyxXQUFVLFVBQWY7QUFDQztBQUFBO0FBQUEsU0FBUSxXQUFVLGVBQWxCLEVBQWtDLFNBQVMsS0FBS0csZUFBaEQ7QUFBQTtBQUFBLE9BREQ7QUFFQztBQUFBO0FBQUEsU0FBSyxXQUFXLEtBQUtULEtBQUwsQ0FBV0UsSUFBM0I7QUFBQTtBQUVBLG1EQUZBO0FBR0E7QUFBQTtBQUFBLFVBQVEsV0FBVSxNQUFsQixFQUF5QixTQUFTLEtBQUtJLGVBQXZDO0FBQUE7QUFBQSxRQUhBO0FBSUEsZ0RBSkE7QUFLQTtBQUxBO0FBRkQ7QUFaRCxLQURGO0FBeUJEOzs7O0dBaEVnQixnQkFBTVUsUzs7bUJBbUVWakIsSSIsImZpbGUiOiIwLjgyZWRlYTc2ZWUwMjg2ZDg5ZDg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9UaXRsZVZpZXcuanN4J1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHR2aWV3OiAnSG9tZScsXHJcblx0XHRcdGpvaW46ICd2YW5pc2gnLFxyXG5cdFx0XHRuZXc6ICd2YW5pc2gnLFxyXG4gICAgICBjcmVhdGVSb29tOiAnJyxcclxuICAgICAgam9pblJvb206ICcnXHJcblx0XHR9XHJcblx0XHR0aGlzLnBsYXlCdXR0b25DbGljayA9IHRoaXMucGxheUJ1dHRvbkNsaWNrLmJpbmQodGhpcylcclxuXHRcdHRoaXMubmV3QnV0dG9uQ2xpY2sgPSB0aGlzLm5ld0J1dHRvbkNsaWNrLmJpbmQodGhpcylcclxuXHRcdHRoaXMuam9pbkJ1dHRvbkNsaWNrID0gdGhpcy5qb2luQnV0dG9uQ2xpY2suYmluZCh0aGlzKVxyXG5cdH1cclxuXHJcblx0cGxheUJ1dHRvbkNsaWNrKCkge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdHZpZXc6ICd2YW5pc2gnXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0bmV3QnV0dG9uQ2xpY2soKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0bmV3OiAnTmV3VmlldydcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRqb2luQnV0dG9uQ2xpY2soKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0am9pbjogJ0pvaW5WaWV3J1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG4gIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSBcclxuICAgIH0pICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnZpZXd9PlxyXG4gICAgICBcdDxUaXRsZSAvPlxyXG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiTmV3Vmlld1wiPlxyXG5cdCAgICAgIFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb25zQnV0dG9uXCIgb25DbGljaz17dGhpcy5uZXdCdXR0b25DbGlja30+TmV3IEdhbWU8L2J1dHRvbj5cclxuXHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm5ld30+XHJcblx0ICAgICAgXHRSb29tIE5hbWU6XHJcblx0ICAgICAgXHQ8aW5wdXQgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0gbmFtZT1cImNyZWF0ZVJvb21cIj48L2lucHV0PlxyXG5cdCAgICAgIFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJQbGF5XCIgb25DbGljaz17dGhpcy5wbGF5QnV0dG9uQ2xpY2t9PkNyZWF0ZSBSb29tPC9idXR0b24+XHJcblx0ICAgICAgXHQ8YnIvPlxyXG5cdCAgICAgIFx0PGJyLz5cclxuXHQgICAgICBcdDwvZGl2PlxyXG4gICAgICBcdDwvZGl2PlxyXG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiSm9pblZpZXdcIj5cclxuXHQgICAgICBcdDxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uc0J1dHRvblwiIG9uQ2xpY2s9e3RoaXMuam9pbkJ1dHRvbkNsaWNrfT5Kb2luIEdhbWU8L2J1dHRvbj5cclxuXHQgICAgICBcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmpvaW59PlxyXG5cdCAgICAgIFx0Um9vbSBOYW1lOlxyXG5cdCAgICAgIFx0PGlucHV0PjwvaW5wdXQ+XHJcbiAgICAgIFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cIlBsYXlcIiBvbkNsaWNrPXt0aGlzLnBsYXlCdXR0b25DbGlja30+Sm9pbiBSb29tPC9idXR0b24+XHJcbiAgICAgIFx0XHQ8YnIvPlxyXG4gICAgICBcdFx0PGJyLz5cclxuXHQgICAgICBcdDwvZGl2PlxyXG4gICAgICBcdDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lVmlldy5qc3giXSwic291cmNlUm9vdCI6IiJ9