webpackHotUpdate(0,{

/***/ 298:
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
	
	var _UserStats = __webpack_require__(299);
	
	var _UserStats2 = _interopRequireDefault(_UserStats);
	
	var _FriendSearch = __webpack_require__(300);
	
	var _FriendSearch2 = _interopRequireDefault(_FriendSearch);
	
	var _FriendView = __webpack_require__(301);
	
	var _FriendView2 = _interopRequireDefault(_FriendView);
	
	var _ImageUpload = __webpack_require__(302);
	
	var _ImageUpload2 = _interopRequireDefault(_ImageUpload);
	
	var _Image = __webpack_require__(303);
	
	var _Image2 = _interopRequireDefault(_Image);
	
	var _Modal = __webpack_require__(304);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	var _reactBootstrap = __webpack_require__(305);
	
	var _TitleView = __webpack_require__(280);
	
	var _TitleView2 = _interopRequireDefault(_TitleView);
	
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
	      imageUrl: './../placeholder.jpg',
	      modalShow: false
	    };
	
	    _this.logout = _this.logout.bind(_this);
	    _this.imageStateChangeCallback = _this.imageStateChangeCallback.bind(_this);
	    return _this;
	  }
	
	  _createClass(Profile, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var context = this;
	      socket.on("setProfileImage", function (data) {
	        context.setState({
	          imageUrl: data
	        });
	      });
	    }
	  }, {
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
	    key: 'modalClose',
	    value: function modalClose() {
	      this.setState({
	        modalShow: false
	      });
	    }
	  }, {
	    key: 'modalOpen',
	    value: function modalOpen() {
	      this.setState({
	        modalShow: true
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
	            'div',
	            { className: 'headersLeft' },
	            _react2.default.createElement(_TitleView2.default, null),
	            _react2.default.createElement(
	              'h2',
	              null,
	              this.props.currentUser
	            ),
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { className: 'Link', to: '/' },
	              _react2.default.createElement(
	                'button',
	                { onClick: this.logout, className: 'logoutButton' },
	                'Logout'
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'headersRight' },
	            _react2.default.createElement(_Image2.default, { className: 'profilePic', imageUrl: this.state.imageUrl }),
	            ' ',
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'div',
	              { onClick: this.modalOpen.bind(this) },
	              _react2.default.createElement(_reactBootstrap.Glyphicon, { bsSize: 'large', glyph: 'pencil', className: 'clickable' })
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
	            '\'s Friends '
	          ),
	          _react2.default.createElement(_reactBootstrap.Glyphicon, { bsSize: 'large', glyph: 'pencil', className: 'clickable' }),
	          _react2.default.createElement(_FriendSearch2.default, null),
	          _react2.default.createElement(_FriendView2.default, null),
	          _react2.default.createElement(
	            'h1',
	            null,
	            this.props.currentUser,
	            '\'s Stats'
	          ),
	          _react2.default.createElement(_UserStats2.default, null)
	        ),
	        _react2.default.createElement(_Modal2.default, { show: this.state.modalShow, onHide: this.modalClose.bind(this), content: _react2.default.createElement(_ImageUpload2.default, { loadImage: this.imageStateChangeCallback }), title: 'Upload Profile Pic' })
	      );
	    }
	  }]);
	
	  return Profile;
	}(_react2.default.Component);
	
	exports.default = Profile;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ProfileVIew.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWSWV3LmpzeD9mZDExIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJwcm9wcyIsInN0YXRlIiwiaW1hZ2VVcmwiLCJtb2RhbFNob3ciLCJsb2dvdXQiLCJiaW5kIiwiaW1hZ2VTdGF0ZUNoYW5nZUNhbGxiYWNrIiwiY29udGV4dCIsInNvY2tldCIsIm9uIiwiZGF0YSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsImN1cnJlbnRVc2VyIiwibW9kYWxPcGVuIiwibW9kYWxDbG9zZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU1BLE87OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUhBQ1hBLEtBRFc7O0FBR2pCLFdBQUtDLEtBQUwsR0FBYTtBQUNUQyxpQkFBVSxzQkFERDtBQUVUQyxrQkFBVztBQUZGLE1BQWI7O0FBS0EsV0FBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUMsSUFBWixPQUFkO0FBQ0EsV0FBS0Msd0JBQUwsR0FBZ0MsTUFBS0Esd0JBQUwsQ0FBOEJELElBQTlCLE9BQWhDO0FBVGlCO0FBVW5COzs7O3lDQUVvQjtBQUNoQixXQUFJRSxVQUFVLElBQWQ7QUFDQUMsY0FBT0MsRUFBUCxDQUFVLGlCQUFWLEVBQTZCLFVBQVNDLElBQVQsRUFBYztBQUN2Q0gsaUJBQVFJLFFBQVIsQ0FBaUI7QUFDYlQscUJBQVVRO0FBREcsVUFBakI7QUFHSCxRQUpEO0FBS0g7Ozs4Q0FFd0JBLEksRUFBTTtBQUM3QixZQUFLQyxRQUFMLENBQWM7QUFDWlQsbUJBQVVRO0FBREUsUUFBZDtBQUdBRSxlQUFRQyxHQUFSLENBQVksS0FBS1osS0FBTCxDQUFXQyxRQUF2QjtBQUNEOzs7OEJBRVE7QUFDUFksY0FBT0MsY0FBUCxDQUFzQkMsVUFBdEIsQ0FBaUMsTUFBakMsRUFBeUMsS0FBS2hCLEtBQUwsQ0FBV2lCLFdBQXBEO0FBQ0FMLGVBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0Q7OztrQ0FFWTtBQUNYLFlBQUtGLFFBQUwsQ0FBYztBQUNaUixvQkFBVztBQURDLFFBQWQ7QUFHRDs7O2lDQUVXO0FBQ1YsWUFBS1EsUUFBTCxDQUFjO0FBQ1pSLG9CQUFXO0FBREMsUUFBZDtBQUdEOzs7OEJBRVE7QUFDUCxjQUNFO0FBQUE7QUFBQSxXQUFLLFdBQVUsU0FBZjtBQUNDO0FBQUE7QUFBQSxhQUFLLFdBQVUsZUFBZjtBQUNHO0FBQUE7QUFBQSxlQUFLLFdBQVUsYUFBZjtBQUNBLHFFQURBO0FBRUE7QUFBQTtBQUFBO0FBQUssb0JBQUtILEtBQUwsQ0FBV2lCO0FBQWhCLGNBRkE7QUFHRTtBQUFBO0FBQUEsaUJBQU0sV0FBVSxNQUFoQixFQUF1QixJQUFHLEdBQTFCO0FBQThCO0FBQUE7QUFBQSxtQkFBUSxTQUFTLEtBQUtiLE1BQXRCLEVBQThCLFdBQVUsY0FBeEM7QUFBQTtBQUFBO0FBQTlCO0FBSEYsWUFESDtBQU1HO0FBQUE7QUFBQSxlQUFLLFdBQVUsY0FBZjtBQUNFLDhEQUFPLFdBQVUsWUFBakIsRUFBOEIsVUFBVSxLQUFLSCxLQUFMLENBQVdDLFFBQW5ELEdBREY7QUFBQTtBQUNpRSxzREFEakU7QUFFRTtBQUFBO0FBQUEsaUJBQUssU0FBUyxLQUFLZ0IsU0FBTCxDQUFlYixJQUFmLENBQW9CLElBQXBCLENBQWQ7QUFBMEMsMEVBQVcsUUFBTyxPQUFsQixFQUEwQixPQUFNLFFBQWhDLEVBQXlDLFdBQVUsV0FBbkQ7QUFBMUM7QUFGRjtBQU5ILFVBREQ7QUFZRTtBQUFBO0FBQUEsYUFBSyxXQUFVLGdCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUssa0JBQUtMLEtBQUwsQ0FBV2lCLFdBQWhCO0FBQUE7QUFBQSxZQURGO0FBRUUsc0VBQVcsUUFBTyxPQUFsQixFQUEwQixPQUFNLFFBQWhDLEVBQXlDLFdBQVUsV0FBbkQsR0FGRjtBQUdFLHNFQUhGO0FBSUUsb0VBSkY7QUFLRTtBQUFBO0FBQUE7QUFBSyxrQkFBS2pCLEtBQUwsQ0FBV2lCLFdBQWhCO0FBQUE7QUFBQSxZQUxGO0FBTUU7QUFORixVQVpGO0FBb0JFLDBEQUFPLE1BQU0sS0FBS2hCLEtBQUwsQ0FBV0UsU0FBeEIsRUFBbUMsUUFBUSxLQUFLZ0IsVUFBTCxDQUFnQmQsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBM0MsRUFBdUUsU0FBUyx1REFBYSxXQUFXLEtBQUtDLHdCQUE3QixHQUFoRixFQUEySSxPQUFNLG9CQUFqSjtBQXBCRixRQURGO0FBd0JEOzs7O0dBdkVtQixnQkFBTWMsUzs7bUJBMEVickIsTyIsImZpbGUiOiIwLjQ5YjFjN2UxZjc1YTMzZTQ3MzM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IFVzZXJTdGF0cyBmcm9tICcuL1VzZXJTdGF0cy5qc3gnO1xuaW1wb3J0IEZyaWVuZFNlYXJjaCBmcm9tICcuL0ZyaWVuZFNlYXJjaC5qc3gnO1xuaW1wb3J0IEZyaWVuZFZpZXcgZnJvbSAnLi9GcmllbmRWaWV3LmpzeCc7XG5pbXBvcnQgSW1hZ2VVcGxvYWQgZnJvbSAnLi9JbWFnZVVwbG9hZC5qc3gnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanN4J1xuaW1wb3J0IFBvcHVwIGZyb20gJy4vLi4vU2hhcmVkL01vZGFsLmpzeCdcbmltcG9ydCB7IEdseXBoaWNvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9UaXRsZVZpZXcuanN4J1xuXG5jbGFzcyBQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBpbWFnZVVybDogJy4vLi4vcGxhY2Vob2xkZXIuanBnJyxcbiAgICAgICAgbW9kYWxTaG93OiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMubG9nb3V0ID0gdGhpcy5sb2dvdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmltYWdlU3RhdGVDaGFuZ2VDYWxsYmFjayA9IHRoaXMuaW1hZ2VTdGF0ZUNoYW5nZUNhbGxiYWNrLmJpbmQodGhpcyk7XG5cdH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICAgIHNvY2tldC5vbihcInNldFByb2ZpbGVJbWFnZVwiLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgaW1hZ2VVcmw6IGRhdGFcbiAgICAgICAgICB9KVxuICAgICAgfSk7XG4gIH1cblxuICBpbWFnZVN0YXRlQ2hhbmdlQ2FsbGJhY2soZGF0YSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW1hZ2VVcmw6IGRhdGFcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmltYWdlVXJsKTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicsIHRoaXMucHJvcHMuY3VycmVudFVzZXIpO1xuICAgIGNvbnNvbGUubG9nKCdMb2dnZWQgb3V0Jyk7XG4gIH1cblxuICBtb2RhbENsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9kYWxTaG93OiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgbW9kYWxPcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9kYWxTaG93OiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZmlsZVwiPlxuICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVIZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcnNMZWZ0XCI+XG4gIFx0ICAgICAgXHQ8VGl0bGUvPlxuICBcdCAgICAgIFx0PGgyPnt0aGlzLnByb3BzLmN1cnJlbnRVc2VyfTwvaDI+IFxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiTGlua1wiIHRvPVwiL1wiPjxidXR0b24gb25DbGljaz17dGhpcy5sb2dvdXR9IGNsYXNzTmFtZT1cImxvZ291dEJ1dHRvblwiPkxvZ291dDwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcnNSaWdodFwiPlxuICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInByb2ZpbGVQaWNcIiBpbWFnZVVybD17dGhpcy5zdGF0ZS5pbWFnZVVybH0vPiA8YnIvPlxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLm1vZGFsT3Blbi5iaW5kKHRoaXMpfSA+PEdseXBoaWNvbiBic1NpemU9XCJsYXJnZVwiIGdseXBoPVwicGVuY2lsXCIgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCIvPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlQ29udGVudFwiPlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5jdXJyZW50VXNlcn0ncyBGcmllbmRzIDwvaDE+IFxuICAgICAgICAgIDxHbHlwaGljb24gYnNTaXplPVwibGFyZ2VcIiBnbHlwaD1cInBlbmNpbFwiIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiLz5cbiAgICAgICAgICA8RnJpZW5kU2VhcmNoLz5cbiAgICAgICAgICA8RnJpZW5kVmlldy8+XG4gICAgICAgICAgPGgxPnt0aGlzLnByb3BzLmN1cnJlbnRVc2VyfSdzIFN0YXRzPC9oMT5cbiAgICAgICAgICA8VXNlclN0YXRzLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFBvcHVwIHNob3c9e3RoaXMuc3RhdGUubW9kYWxTaG93fSBvbkhpZGU9e3RoaXMubW9kYWxDbG9zZS5iaW5kKHRoaXMpfSBjb250ZW50PXs8SW1hZ2VVcGxvYWQgbG9hZEltYWdlPXt0aGlzLmltYWdlU3RhdGVDaGFuZ2VDYWxsYmFja30gLz59IHRpdGxlPVwiVXBsb2FkIFByb2ZpbGUgUGljXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWSWV3LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=