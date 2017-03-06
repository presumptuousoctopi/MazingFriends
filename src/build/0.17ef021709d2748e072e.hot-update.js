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
	
	var _reactRouter = __webpack_require__(189);
	
	var _UserStats = __webpack_require__(285);
	
	var _UserStats2 = _interopRequireDefault(_UserStats);
	
	var _FriendSearch = __webpack_require__(286);
	
	var _FriendSearch2 = _interopRequireDefault(_FriendSearch);
	
	var _FriendView = __webpack_require__(287);
	
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
	
	    _this.logout = _this.logout.bind(_this);
	    return _this;
	  }
	
	  _createClass(Profile, [{
	    key: 'logout',
	    value: function logout() {
	      window.sessionStorage.removeItem('user', this.props.currentUser);
	      console.log('Logged out');
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
	            this.props.currentUser
	          ),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/' },
	            _react2.default.createElement(
	              'button',
	              { onClick: this.logout },
	              'Logout'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'h1',
	          null,
	          this.props.currentUser,
	          '\'s Friends'
	        ),
	        _react2.default.createElement(_FriendView2.default, null),
	        _react2.default.createElement(
	          'h1',
	          null,
	          this.props.currentUser,
	          '\'s Stats'
	        ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWaWV3LmpzeD81YThiIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJwcm9wcyIsImxvZ291dCIsImJpbmQiLCJ3aW5kb3ciLCJzZXNzaW9uU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJjdXJyZW50VXNlciIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FHTUEsTzs7O0FBQ0wsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSEFDWkEsS0FEWTs7QUFHaEIsV0FBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUMsSUFBWixPQUFkO0FBSGdCO0FBSWxCOzs7OzhCQUVTO0FBQ1BDLGNBQU9DLGNBQVAsQ0FBc0JDLFVBQXRCLENBQWlDLE1BQWpDLEVBQXlDLEtBQUtMLEtBQUwsQ0FBV00sV0FBcEQ7QUFDQUMsZUFBUUMsR0FBUixDQUFZLFlBQVo7QUFDRDs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFNBQWY7QUFDQztBQUFBO0FBQUEsYUFBSyxXQUFVLGVBQWY7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFFQztBQUFBO0FBQUE7QUFBSyxrQkFBS1IsS0FBTCxDQUFXTTtBQUFoQixZQUZEO0FBR0c7QUFBQTtBQUFBLGVBQU0sSUFBRyxHQUFUO0FBQWE7QUFBQTtBQUFBLGlCQUFRLFNBQVMsS0FBS0wsTUFBdEI7QUFBQTtBQUFBO0FBQWI7QUFISCxVQUREO0FBTUk7QUFBQTtBQUFBO0FBQUssZ0JBQUtELEtBQUwsQ0FBV00sV0FBaEI7QUFBQTtBQUFBLFVBTko7QUFPSSxrRUFQSjtBQVFJO0FBQUE7QUFBQTtBQUFLLGdCQUFLTixLQUFMLENBQVdNLFdBQWhCO0FBQUE7QUFBQSxVQVJKO0FBU0c7QUFUSCxRQURGO0FBYUQ7Ozs7R0ExQm1CLGdCQUFNRyxTOzttQkE2QmJWLE8iLCJmaWxlIjoiMC4xN2VmMDIxNzA5ZDI3NDhlMDcyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBVc2VyU3RhdHMgZnJvbSAnLi9Vc2VyU3RhdHMuanN4JztcbmltcG9ydCBGcmllbmRTZWFyY2ggZnJvbSAnLi9GcmllbmRTZWFyY2guanN4JztcbmltcG9ydCBGcmllbmRWaWV3IGZyb20gJy4vRnJpZW5kVmlldy5qc3gnO1xuXG5cbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMubG9nb3V0ID0gdGhpcy5sb2dvdXQuYmluZCh0aGlzKTtcblx0fVxuXG4gIGxvZ291dCgpIHtcbiAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicsIHRoaXMucHJvcHMuY3VycmVudFVzZXIpO1xuICAgIGNvbnNvbGUubG9nKCdMb2dnZWQgb3V0JylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9maWxlXCI+XG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZUhlYWRlclwiPlxuXHQgICAgICBcdDxoMT5NYXppbmcgRnJpZW5kcyA8L2gxPlxuXHQgICAgICBcdDxoMj57dGhpcy5wcm9wcy5jdXJyZW50VXNlcn08L2gyPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPjxidXR0b24gb25DbGljaz17dGhpcy5sb2dvdXR9PkxvZ291dDwvYnV0dG9uPjwvTGluaz5cbiAgICAgIFx0PC9kaXY+XG4gICAgICAgICAgPGgxPnt0aGlzLnByb3BzLmN1cnJlbnRVc2VyfSdzIEZyaWVuZHM8L2gxPlxuICAgICAgICAgIDxGcmllbmRWaWV3Lz5cbiAgICAgICAgICA8aDE+e3RoaXMucHJvcHMuY3VycmVudFVzZXJ9J3MgU3RhdHM8L2gxPlxuICAgICAgICBcdDxVc2VyU3RhdHMvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvUHJvZmlsZVZpZXcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==