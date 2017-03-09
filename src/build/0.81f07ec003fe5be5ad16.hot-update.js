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
	
	var _ImageUpload = __webpack_require__(305);
	
	var _ImageUpload2 = _interopRequireDefault(_ImageUpload);
	
	var _Image = __webpack_require__(306);
	
	var _Image2 = _interopRequireDefault(_Image);
	
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
	      imageUrl: ''
	    };
	
	    _this.logout = _this.logout.bind(_this);
	    _this.imageStateChangeCallback = _this.imageStateChangeCallback.bind(_this);
	    return _this;
	  }
	
	  _createClass(Profile, [{
	    key: 'imageStateChangeCallback',
	    value: function imageStateChangeCallback(data) {
	      this.setState({
	        imageUrl: data
	      });
	      console.log(this.state.imageUrl);
	    }
	  }, {
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
	            'table',
	            null,
	            _react2.default.createElement(
	              'tr',
	              null,
	              _react2.default.createElement(
	                'td',
	                null,
	                ' ',
	                _react2.default.createElement(
	                  'h1',
	                  null,
	                  'Mazing Friends '
	                ),
	                ' '
	              ),
	              _react2.default.createElement(
	                'td',
	                null,
	                ' ',
	                _react2.default.createElement(_Image2.default, { imageUrl: this.state.imageUrl }),
	                ' '
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'table',
	            null,
	            _react2.default.createElement(
	              'tr',
	              null,
	              _react2.default.createElement(
	                'td',
	                null,
	                ' ',
	                _react2.default.createElement(
	                  'h2',
	                  null,
	                  this.props.currentUser
	                ),
	                ' '
	              ),
	              _react2.default.createElement(
	                'td',
	                null,
	                ' ',
	                _react2.default.createElement(
	                  _reactRouter.Link,
	                  { className: 'Link', to: '/' },
	                  _react2.default.createElement(
	                    'button',
	                    { onClick: this.logout, className: 'logoutButton' },
	                    'Logout'
	                  )
	                ),
	                ' '
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'profileContent' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            this.props.currentUser,
	            '\'s Friends'
	          ),
	          _react2.default.createElement(_FriendSearch2.default, null),
	          _react2.default.createElement(_FriendView2.default, null),
	          _react2.default.createElement(
	            'h1',
	            null,
	            this.props.currentUser,
	            '\'s Stats'
	          ),
	          _react2.default.createElement(_UserStats2.default, null),
	          _react2.default.createElement(_ImageUpload2.default, { loadImage: this.imageStateChangeCallback })
	        )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWaWV3LmpzeD81YThiIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJwcm9wcyIsInN0YXRlIiwiaW1hZ2VVcmwiLCJsb2dvdXQiLCJiaW5kIiwiaW1hZ2VTdGF0ZUNoYW5nZUNhbGxiYWNrIiwiZGF0YSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsImN1cnJlbnRVc2VyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUdNQSxPOzs7QUFDTCxvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNaQSxLQURZOztBQUdoQixXQUFLQyxLQUFMLEdBQWE7QUFDVEMsaUJBQVU7QUFERCxNQUFiOztBQUlBLFdBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUNBLFdBQUtDLHdCQUFMLEdBQWdDLE1BQUtBLHdCQUFMLENBQThCRCxJQUE5QixPQUFoQztBQVJnQjtBQVNsQjs7Ozs4Q0FDMkJFLEksRUFBTTtBQUM3QixZQUFLQyxRQUFMLENBQWM7QUFDWkwsbUJBQVVJO0FBREUsUUFBZDtBQUdBRSxlQUFRQyxHQUFSLENBQVksS0FBS1IsS0FBTCxDQUFXQyxRQUF2QjtBQUNEOzs7OEJBQ007QUFDUFEsY0FBT0MsY0FBUCxDQUFzQkMsVUFBdEIsQ0FBaUMsTUFBakMsRUFBeUMsS0FBS1osS0FBTCxDQUFXYSxXQUFwRDtBQUNBTCxlQUFRQyxHQUFSLENBQVksWUFBWjtBQUNEOzs7OEJBRVE7QUFDUCxjQUNFO0FBQUE7QUFBQSxXQUFLLFdBQVUsU0FBZjtBQUNDO0FBQUE7QUFBQSxhQUFLLFdBQVUsZUFBZjtBQUNHO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBTDtBQUFBO0FBQUEsZ0JBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFLLGtFQUFPLFVBQVUsS0FBS1IsS0FBTCxDQUFXQyxRQUE1QixHQUFMO0FBQUE7QUFBQTtBQUZGO0FBREYsWUFESDtBQU9LO0FBQUE7QUFBQTtBQUNGO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUs7QUFBQTtBQUFBO0FBQUssd0JBQUtGLEtBQUwsQ0FBV2E7QUFBaEIsa0JBQUw7QUFBQTtBQUFBLGdCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUEscUJBQU0sV0FBVSxNQUFoQixFQUF1QixJQUFHLEdBQTFCO0FBQThCO0FBQUE7QUFBQSx1QkFBUSxTQUFTLEtBQUtWLE1BQXRCLEVBQThCLFdBQVUsY0FBeEM7QUFBQTtBQUFBO0FBQTlCLGtCQUFMO0FBQUE7QUFBQTtBQUZKO0FBREU7QUFQTCxVQUREO0FBZUU7QUFBQTtBQUFBLGFBQUssV0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLLGtCQUFLSCxLQUFMLENBQVdhLFdBQWhCO0FBQUE7QUFBQSxZQURGO0FBRUUsc0VBRkY7QUFHRSxvRUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFLLGtCQUFLYixLQUFMLENBQVdhLFdBQWhCO0FBQUE7QUFBQSxZQUpGO0FBS0MsbUVBTEQ7QUFNQSxrRUFBYSxXQUFXLEtBQUtSLHdCQUE3QjtBQU5BO0FBZkYsUUFERjtBQTBCRDs7OztHQWpEbUIsZ0JBQU1TLFM7O21CQW9EYmYsTyIsImZpbGUiOiIwLjgxZjA3ZWMwMDNmZTViZTVhZDE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IFVzZXJTdGF0cyBmcm9tICcuL1VzZXJTdGF0cy5qc3gnO1xuaW1wb3J0IEZyaWVuZFNlYXJjaCBmcm9tICcuL0ZyaWVuZFNlYXJjaC5qc3gnO1xuaW1wb3J0IEZyaWVuZFZpZXcgZnJvbSAnLi9GcmllbmRWaWV3LmpzeCc7XG5pbXBvcnQgSW1hZ2VVcGxvYWQgZnJvbSAnLi9JbWFnZVVwbG9hZC5qc3gnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanN4J1xuXG5cbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGltYWdlVXJsOiAnJ1xuICAgIH1cblxuICAgIHRoaXMubG9nb3V0ID0gdGhpcy5sb2dvdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmltYWdlU3RhdGVDaGFuZ2VDYWxsYmFjayA9IHRoaXMuaW1hZ2VTdGF0ZUNoYW5nZUNhbGxiYWNrLmJpbmQodGhpcyk7XG5cdH1cbiAgICBpbWFnZVN0YXRlQ2hhbmdlQ2FsbGJhY2soZGF0YSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGltYWdlVXJsOiBkYXRhXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaW1hZ2VVcmwpO1xuICAgIH1cbiAgbG9nb3V0KCkge1xuICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJywgdGhpcy5wcm9wcy5jdXJyZW50VXNlcik7XG4gICAgY29uc29sZS5sb2coJ0xvZ2dlZCBvdXQnKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2ZpbGVcIj5cbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlSGVhZGVyXCI+XG4gICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+IDxoMT5NYXppbmcgRnJpZW5kcyA8L2gxPiA8L3RkPlxuICAgICAgICAgICAgICA8dGQ+IDxJbWFnZSBpbWFnZVVybD17dGhpcy5zdGF0ZS5pbWFnZVVybH0vPiA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8dGFibGU+XG5cdCAgICAgIFx0ICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD4gPGgyPnt0aGlzLnByb3BzLmN1cnJlbnRVc2VyfTwvaDI+IDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD4gPExpbmsgY2xhc3NOYW1lPVwiTGlua1wiIHRvPVwiL1wiPjxidXR0b24gb25DbGljaz17dGhpcy5sb2dvdXR9IGNsYXNzTmFtZT1cImxvZ291dEJ1dHRvblwiPkxvZ291dDwvYnV0dG9uPjwvTGluaz4gPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgIFx0PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZUNvbnRlbnRcIj5cbiAgICAgICAgICA8aDE+e3RoaXMucHJvcHMuY3VycmVudFVzZXJ9J3MgRnJpZW5kczwvaDE+XG4gICAgICAgICAgPEZyaWVuZFNlYXJjaC8+XG4gICAgICAgICAgPEZyaWVuZFZpZXcvPlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5jdXJyZW50VXNlcn0ncyBTdGF0czwvaDE+XG4gICAgICAgIFx0PFVzZXJTdGF0cy8+XG4gICAgICAgIDxJbWFnZVVwbG9hZCBsb2FkSW1hZ2U9e3RoaXMuaW1hZ2VTdGF0ZUNoYW5nZUNhbGxiYWNrfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9Qcm9maWxlVmlldy5qc3giXSwic291cmNlUm9vdCI6IiJ9