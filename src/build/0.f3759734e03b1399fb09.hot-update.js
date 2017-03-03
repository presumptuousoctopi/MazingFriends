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
	
	var _FriendView = __webpack_require__(290);
	
	var _FriendView2 = _interopRequireDefault(_FriendView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Profile = function (_React$Component) {
	  _inherits(Profile, _React$Component);
	
	  function Profile(props) {
	    _classCallCheck(this, Profile);
	
	    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
	
	    _this.state = {
	      currentUser: null
	    };
	    return _this;
	  }
	
	  _createClass(Profile, [{
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
	            this.props.currentUser
	          ),
	          _react2.default.createElement(
	            'button',
	            null,
	            'Log Out'
	          )
	        ),
	        _react2.default.createElement(_FriendSearch2.default, null),
	        _react2.default.createElement(_UserStats2.default, null),
	        _react2.default.createElement(_FriendView2.default, null)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWaWV3LmpzeD81YThiIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudFVzZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FHTUEsTzs7O0FBQ0wsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSEFDWkEsS0FEWTs7QUFFbEIsV0FBS0MsS0FBTCxHQUFhO0FBQ1pDLG9CQUFhO0FBREQsTUFBYjtBQUZrQjtBQUtsQjs7Ozs4QkFFUztBQUNQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxTQUFmO0FBQ0M7QUFBQTtBQUFBLGFBQUssV0FBVSxlQUFmO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUREO0FBRUM7QUFBQTtBQUFBO0FBQUssa0JBQUtGLEtBQUwsQ0FBV0U7QUFBaEIsWUFGRDtBQUdHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISCxVQUREO0FBTUUsb0VBTkY7QUFPQyxpRUFQRDtBQVFFO0FBUkYsUUFERjtBQVlEOzs7O0dBckJtQixnQkFBTUMsUzs7bUJBd0JiSixPIiwiZmlsZSI6IjAuZjM3NTk3MzRlMDNiMTM5OWZiMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXNlclN0YXRzIGZyb20gJy4vVXNlclN0YXRzLmpzeCdcbmltcG9ydCBGcmllbmRTZWFyY2ggZnJvbSAnLi9GcmllbmRTZWFyY2guanN4J1xuaW1wb3J0IEZyaWVuZFZpZXcgZnJvbSAnLi9GcmllbmRWaWV3LmpzeCdcblxuXG5jbGFzcyBQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGN1cnJlbnRVc2VyOiBudWxsXG5cdFx0fTtcblx0fVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9maWxlXCI+XG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZUhlYWRlclwiPlxuXHQgICAgICBcdDxoMT5NYXppbmcgRnJpZW5kcyA8L2gxPlxuXHQgICAgICBcdDxoMj57dGhpcy5wcm9wcy5jdXJyZW50VXNlcn08L2gyPlxuICAgICAgICAgIDxidXR0b24+TG9nIE91dDwvYnV0dG9uPlxuICAgICAgXHQ8L2Rpdj5cbiAgICAgXHQgIDxGcmllbmRTZWFyY2gvPlxuICAgICAgXHQ8VXNlclN0YXRzIC8+XG4gICAgICAgIDxGcmllbmRWaWV3Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWaWV3LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=