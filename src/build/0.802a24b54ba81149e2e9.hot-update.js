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
						'h1',
						null,
						'Mazing Friends '
					),
					_react2.default.createElement(
						'h2',
						null,
						this.state.currentUser
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWaWV3LmpzeD81YThiIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJzdGF0ZSIsImN1cnJlbnRVc2VyIiwiY29udGV4dCIsInNvY2tldCIsIm9uIiwidXNlciIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUdNQSxPOzs7QUFDTCxxQkFBYztBQUFBOztBQUFBOztBQUViLFNBQUtDLEtBQUwsR0FBYTtBQUNaQyxpQkFBYTtBQURELElBQWI7QUFGYTtBQUtiOzs7O3VDQUVtQjtBQUNuQixRQUFJQyxVQUFVLElBQWQ7QUFDQUMsV0FBT0MsRUFBUCxDQUFVLGFBQVYsRUFBeUIsVUFBU0MsSUFBVCxFQUFlO0FBQ3ZDSCxhQUFRSSxRQUFSLENBQWlCO0FBQ2hCTCxtQkFBYUk7QUFERyxNQUFqQjtBQUdBLEtBSkQ7QUFLQTs7OzRCQUVTO0FBQ1AsV0FDRTtBQUFBO0FBQUEsT0FBSyxXQUFVLFNBQWY7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQ7QUFFQztBQUFBO0FBQUE7QUFBSyxXQUFLTCxLQUFMLENBQVdDO0FBQWhCLE1BRkQ7QUFHRSxnRUFIRjtBQUlDO0FBSkQsS0FERjtBQVFEOzs7O0dBMUJtQixnQkFBTU0sUzs7bUJBNkJiUixPIiwiZmlsZSI6IjAuODAyYTI0YjU0YmE4MTE0OWUyZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXNlclN0YXRzIGZyb20gJy4vVXNlclN0YXRzLmpzeCdcbmltcG9ydCBGcmllbmRTZWFyY2ggZnJvbSAnLi9GcmllbmRTZWFyY2guanN4J1xuXG5cbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjdXJyZW50VXNlcjogbnVsbFxuXHRcdH07XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR2YXIgY29udGV4dCA9IHRoaXM7XG5cdFx0c29ja2V0Lm9uKCdjdXJyZW50VXNlcicsIGZ1bmN0aW9uKHVzZXIpIHtcblx0XHRcdGNvbnRleHQuc2V0U3RhdGUoe1xuXHRcdFx0XHRjdXJyZW50VXNlcjogdXNlclxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZmlsZVwiPlxuICAgICAgXHQ8aDE+TWF6aW5nIEZyaWVuZHMgPC9oMT5cbiAgICAgIFx0PGgyPnt0aGlzLnN0YXRlLmN1cnJlbnRVc2VyfTwvaDI+XG4gICAgIFx0ICA8RnJpZW5kU2VhcmNoLz5cbiAgICAgIFx0PFVzZXJTdGF0cyAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvUHJvZmlsZVZpZXcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==