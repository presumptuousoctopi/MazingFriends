webpackHotUpdate(0,{

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _UserStats = __webpack_require__(285);
	
	var _UserStats2 = _interopRequireDefault(_UserStats);
	
	var _FriendSearch = __webpack_require__(286);
	
	var _FriendSearch2 = _interopRequireDefault(_FriendSearch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Profile = function (_React$Component) {
		_inherits(Profile, _React$Component);
	
		function Profile() {
			_classCallCheck(this, Profile);
	
			var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));
	
			_this.state = {
				currentUser: null
			};
			return _this;
		}
	
		_createClass(Profile, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var context = this;
				socket.on('currentUser', function (user) {
					context.setState({
						currentUser: user
					});
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'Profile' },
					_react2.default.createElement(
						'div',
						{ className: 'profileHeader' },
						_react2.default.createElement(
							'h1',
							null,
							'Mazing Friends '
						),
						_react2.default.createElement(
							'h2',
							null,
							this.state.currentUser
						)
					),
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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWaWV3LmpzeD81YThiIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJzdGF0ZSIsImN1cnJlbnRVc2VyIiwiY29udGV4dCIsInNvY2tldCIsIm9uIiwidXNlciIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUdNQSxPOzs7QUFDTCxxQkFBYztBQUFBOztBQUFBOztBQUViLFNBQUtDLEtBQUwsR0FBYTtBQUNaQyxpQkFBYTtBQURELElBQWI7QUFGYTtBQUtiOzs7O3VDQUVtQjtBQUNuQixRQUFJQyxVQUFVLElBQWQ7QUFDQUMsV0FBT0MsRUFBUCxDQUFVLGFBQVYsRUFBeUIsVUFBU0MsSUFBVCxFQUFlO0FBQ3ZDSCxhQUFRSSxRQUFSLENBQWlCO0FBQ2hCTCxtQkFBYUk7QUFERyxNQUFqQjtBQUdBLEtBSkQ7QUFLQTs7OzRCQUVTO0FBQ1AsV0FDRTtBQUFBO0FBQUEsT0FBSyxXQUFVLFNBQWY7QUFDQztBQUFBO0FBQUEsUUFBSyxXQUFVLGVBQWY7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREQ7QUFFQztBQUFBO0FBQUE7QUFBSyxZQUFLTCxLQUFMLENBQVdDO0FBQWhCO0FBRkQsTUFERDtBQUtFLGdFQUxGO0FBTUM7QUFORCxLQURGO0FBVUQ7Ozs7R0E1Qm1CLGdCQUFNTSxTOzttQkErQmJSLE8iLCJmaWxlIjoiMC43Y2NkZDkwYmQxNTE3NGQ2ZDI1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVc2VyU3RhdHMgZnJvbSAnLi9Vc2VyU3RhdHMuanN4J1xuaW1wb3J0IEZyaWVuZFNlYXJjaCBmcm9tICcuL0ZyaWVuZFNlYXJjaC5qc3gnXG5cblxuY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGN1cnJlbnRVc2VyOiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHZhciBjb250ZXh0ID0gdGhpcztcblx0XHRzb2NrZXQub24oJ2N1cnJlbnRVc2VyJywgZnVuY3Rpb24odXNlcikge1xuXHRcdFx0Y29udGV4dC5zZXRTdGF0ZSh7XG5cdFx0XHRcdGN1cnJlbnRVc2VyOiB1c2VyXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9maWxlXCI+XG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZUhlYWRlclwiPlxuXHQgICAgICBcdDxoMT5NYXppbmcgRnJpZW5kcyA8L2gxPlxuXHQgICAgICBcdDxoMj57dGhpcy5zdGF0ZS5jdXJyZW50VXNlcn08L2gyPlxuICAgICAgXHQ8L2Rpdj5cbiAgICAgXHQgIDxGcmllbmRTZWFyY2gvPlxuICAgICAgXHQ8VXNlclN0YXRzIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9Qcm9maWxlVmlldy5qc3giXSwic291cmNlUm9vdCI6IiJ9