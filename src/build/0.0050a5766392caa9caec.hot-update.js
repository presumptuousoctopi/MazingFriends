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
							_react2.default.createElement('input', { onClick: this.handleChange(), name: 'newRoom' }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lVmlldy5qc3g/NTFiMiJdLCJuYW1lcyI6WyJIb21lIiwic3RhdGUiLCJ2aWV3Iiwiam9pbiIsIm5ldyIsImNyZWF0ZVJvb20iLCJqb2luUm9vbSIsInBsYXlCdXR0b25DbGljayIsImJpbmQiLCJuZXdCdXR0b25DbGljayIsImpvaW5CdXR0b25DbGljayIsInNldFN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsSTs7O0FBQ0wsa0JBQWM7QUFBQTs7QUFBQTs7QUFFYixTQUFLQyxLQUFMLEdBQWE7QUFDWkMsVUFBTSxNQURNO0FBRVpDLFVBQU0sUUFGTTtBQUdaQyxTQUFLLFFBSE87QUFJVEMsZ0JBQVksRUFKSDtBQUtUQyxjQUFVO0FBTEQsSUFBYjtBQU9BLFNBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JELElBQXBCLE9BQXRCO0FBQ0EsU0FBS0UsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCRixJQUFyQixPQUF2QjtBQVhhO0FBWWI7Ozs7cUNBRWlCO0FBQ2pCLFNBQUtHLFFBQUwsQ0FBYztBQUNiVCxXQUFNO0FBRE8sS0FBZDtBQUdBOzs7b0NBRWdCO0FBQ2hCLFNBQUtTLFFBQUwsQ0FBYztBQUNiUCxVQUFLO0FBRFEsS0FBZDtBQUdBOzs7cUNBRWlCO0FBQ2pCLFNBQUtPLFFBQUwsQ0FBYztBQUNiUixXQUFNO0FBRE8sS0FBZDtBQUdBOzs7NEJBRVM7QUFDUCxXQUNFO0FBQUE7QUFBQSxPQUFLLFdBQVcsS0FBS0YsS0FBTCxDQUFXQyxJQUEzQjtBQUNDLDZEQUREO0FBRUM7QUFBQTtBQUFBLFFBQUssV0FBVSxTQUFmO0FBQ0M7QUFBQTtBQUFBLFNBQVEsV0FBVSxlQUFsQixFQUFrQyxTQUFTLEtBQUtPLGNBQWhEO0FBQUE7QUFBQSxPQUREO0FBRUM7QUFBQTtBQUFBLFNBQUssV0FBVyxLQUFLUixLQUFMLENBQVdHLEdBQTNCO0FBQUE7QUFFQSxnREFBTyxTQUFTLEtBQUtRLFlBQUwsRUFBaEIsRUFBcUMsTUFBSyxTQUExQyxHQUZBO0FBR0E7QUFBQTtBQUFBLFVBQVEsV0FBVSxNQUFsQixFQUF5QixTQUFTLEtBQUtMLGVBQXZDO0FBQUE7QUFBQSxRQUhBO0FBSUEsZ0RBSkE7QUFLQTtBQUxBO0FBRkQsTUFGRDtBQVlDO0FBQUE7QUFBQSxRQUFLLFdBQVUsVUFBZjtBQUNDO0FBQUE7QUFBQSxTQUFRLFdBQVUsZUFBbEIsRUFBa0MsU0FBUyxLQUFLRyxlQUFoRDtBQUFBO0FBQUEsT0FERDtBQUVDO0FBQUE7QUFBQSxTQUFLLFdBQVcsS0FBS1QsS0FBTCxDQUFXRSxJQUEzQjtBQUFBO0FBRUEsbURBRkE7QUFHQTtBQUFBO0FBQUEsVUFBUSxXQUFVLE1BQWxCLEVBQXlCLFNBQVMsS0FBS0ksZUFBdkM7QUFBQTtBQUFBLFFBSEE7QUFJQSxnREFKQTtBQUtBO0FBTEE7QUFGRDtBQVpELEtBREY7QUF5QkQ7Ozs7R0EzRGdCLGdCQUFNTSxTOzttQkE4RFZiLEkiLCJmaWxlIjoiMC4wMDUwYTU3NjYzOTJjYWE5Y2FlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4vVGl0bGVWaWV3LmpzeCdcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKVxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0dmlldzogJ0hvbWUnLFxyXG5cdFx0XHRqb2luOiAndmFuaXNoJyxcclxuXHRcdFx0bmV3OiAndmFuaXNoJyxcclxuICAgICAgY3JlYXRlUm9vbTogJycsXHJcbiAgICAgIGpvaW5Sb29tOiAnJ1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5wbGF5QnV0dG9uQ2xpY2sgPSB0aGlzLnBsYXlCdXR0b25DbGljay5iaW5kKHRoaXMpXHJcblx0XHR0aGlzLm5ld0J1dHRvbkNsaWNrID0gdGhpcy5uZXdCdXR0b25DbGljay5iaW5kKHRoaXMpXHJcblx0XHR0aGlzLmpvaW5CdXR0b25DbGljayA9IHRoaXMuam9pbkJ1dHRvbkNsaWNrLmJpbmQodGhpcylcclxuXHR9XHJcblxyXG5cdHBsYXlCdXR0b25DbGljaygpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHR2aWV3OiAndmFuaXNoJ1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdG5ld0J1dHRvbkNsaWNrKCkge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdG5ldzogJ05ld1ZpZXcnXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0am9pbkJ1dHRvbkNsaWNrKCkge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdGpvaW46ICdKb2luVmlldydcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS52aWV3fT5cclxuICAgICAgXHQ8VGl0bGUgLz5cclxuICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIk5ld1ZpZXdcIj5cclxuXHQgICAgICBcdDxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uc0J1dHRvblwiIG9uQ2xpY2s9e3RoaXMubmV3QnV0dG9uQ2xpY2t9Pk5ldyBHYW1lPC9idXR0b24+XHJcblx0ICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5uZXd9PlxyXG5cdCAgICAgIFx0Um9vbSBOYW1lOlxyXG5cdCAgICAgIFx0PGlucHV0IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2hhbmdlKCl9IG5hbWU9XCJuZXdSb29tXCI+PC9pbnB1dD5cclxuXHQgICAgICBcdDxidXR0b24gY2xhc3NOYW1lPVwiUGxheVwiIG9uQ2xpY2s9e3RoaXMucGxheUJ1dHRvbkNsaWNrfT5DcmVhdGUgUm9vbTwvYnV0dG9uPlxyXG5cdCAgICAgIFx0PGJyLz5cclxuXHQgICAgICBcdDxici8+XHJcblx0ICAgICAgXHQ8L2Rpdj5cclxuICAgICAgXHQ8L2Rpdj5cclxuICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cIkpvaW5WaWV3XCI+XHJcblx0ICAgICAgXHQ8YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbnNCdXR0b25cIiBvbkNsaWNrPXt0aGlzLmpvaW5CdXR0b25DbGlja30+Sm9pbiBHYW1lPC9idXR0b24+XHJcblx0ICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5qb2lufT5cclxuXHQgICAgICBcdFJvb20gTmFtZTpcclxuXHQgICAgICBcdDxpbnB1dD48L2lucHV0PlxyXG4gICAgICBcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJQbGF5XCIgb25DbGljaz17dGhpcy5wbGF5QnV0dG9uQ2xpY2t9PkpvaW4gUm9vbTwvYnV0dG9uPlxyXG4gICAgICBcdFx0PGJyLz5cclxuICAgICAgXHRcdDxici8+XHJcblx0ICAgICAgXHQ8L2Rpdj5cclxuICAgICAgXHQ8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZVZpZXcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==