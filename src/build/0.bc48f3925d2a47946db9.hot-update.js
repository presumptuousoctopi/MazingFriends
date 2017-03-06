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
	              { onClick: this.logout, className: 'logoutButton' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWaWV3LmpzeD81YThiIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJwcm9wcyIsImxvZ291dCIsImJpbmQiLCJ3aW5kb3ciLCJzZXNzaW9uU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJjdXJyZW50VXNlciIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FHTUEsTzs7O0FBQ0wsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSEFDWkEsS0FEWTs7QUFHaEIsV0FBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUMsSUFBWixPQUFkO0FBSGdCO0FBSWxCOzs7OzhCQUVTO0FBQ1BDLGNBQU9DLGNBQVAsQ0FBc0JDLFVBQXRCLENBQWlDLE1BQWpDLEVBQXlDLEtBQUtMLEtBQUwsQ0FBV00sV0FBcEQ7QUFDQUMsZUFBUUMsR0FBUixDQUFZLFlBQVo7QUFDRDs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFNBQWY7QUFDQztBQUFBO0FBQUEsYUFBSyxXQUFVLGVBQWY7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFFQztBQUFBO0FBQUE7QUFBSyxrQkFBS1IsS0FBTCxDQUFXTTtBQUFoQixZQUZEO0FBR0c7QUFBQTtBQUFBLGVBQU0sSUFBRyxHQUFUO0FBQWE7QUFBQTtBQUFBLGlCQUFRLFNBQVMsS0FBS0wsTUFBdEIsRUFBOEIsV0FBVSxjQUF4QztBQUFBO0FBQUE7QUFBYjtBQUhILFVBREQ7QUFNSTtBQUFBO0FBQUE7QUFBSyxnQkFBS0QsS0FBTCxDQUFXTSxXQUFoQjtBQUFBO0FBQUEsVUFOSjtBQU9JLGtFQVBKO0FBUUk7QUFBQTtBQUFBO0FBQUssZ0JBQUtOLEtBQUwsQ0FBV00sV0FBaEI7QUFBQTtBQUFBLFVBUko7QUFTRztBQVRILFFBREY7QUFhRDs7OztHQTFCbUIsZ0JBQU1HLFM7O21CQTZCYlYsTyIsImZpbGUiOiIwLmJjNDhmMzkyNWQyYTQ3OTQ2ZGI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IFVzZXJTdGF0cyBmcm9tICcuL1VzZXJTdGF0cy5qc3gnO1xuaW1wb3J0IEZyaWVuZFNlYXJjaCBmcm9tICcuL0ZyaWVuZFNlYXJjaC5qc3gnO1xuaW1wb3J0IEZyaWVuZFZpZXcgZnJvbSAnLi9GcmllbmRWaWV3LmpzeCc7XG5cblxuY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5sb2dvdXQgPSB0aGlzLmxvZ291dC5iaW5kKHRoaXMpO1xuXHR9XG5cbiAgbG9nb3V0KCkge1xuICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJywgdGhpcy5wcm9wcy5jdXJyZW50VXNlcik7XG4gICAgY29uc29sZS5sb2coJ0xvZ2dlZCBvdXQnKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2ZpbGVcIj5cbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlSGVhZGVyXCI+XG5cdCAgICAgIFx0PGgxPk1hemluZyBGcmllbmRzIDwvaDE+XG5cdCAgICAgIFx0PGgyPnt0aGlzLnByb3BzLmN1cnJlbnRVc2VyfTwvaDI+XG4gICAgICAgICAgPExpbmsgdG89XCIvXCI+PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmxvZ291dH0gY2xhc3NOYW1lPVwibG9nb3V0QnV0dG9uXCI+TG9nb3V0PC9idXR0b24+PC9MaW5rPlxuICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgICA8aDE+e3RoaXMucHJvcHMuY3VycmVudFVzZXJ9J3MgRnJpZW5kczwvaDE+XG4gICAgICAgICAgPEZyaWVuZFZpZXcvPlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5jdXJyZW50VXNlcn0ncyBTdGF0czwvaDE+XG4gICAgICAgIFx0PFVzZXJTdGF0cy8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9Qcm9maWxlVmlldy5qc3giXSwic291cmNlUm9vdCI6IiJ9