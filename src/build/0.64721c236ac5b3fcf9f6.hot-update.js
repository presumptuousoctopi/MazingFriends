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
	      imageUrl: './../images/placeholder.jpg',
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
	    key: 'modalChangePic',
	    value: function modalChangePic() {
	      this.setState({
	        modalShow: true,
	        content: _react2.default.createElement(_ImageUpload2.default, { loadImage: this.imageStateChangeCallback }),
	        title: "Upload Profile Pic"
	      });
	    }
	  }, {
	    key: 'modalAddFriend',
	    value: function modalAddFriend() {
	      this.setState({
	        modalShow: true,
	        content: _react2.default.createElement(_FriendSearch2.default, null),
	        title: "Add Friend"
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
	            _react2.default.createElement('div', { className: 'edit', onClick: modalChangePic }),
	            _react2.default.createElement(_Image2.default, { className: 'profilePic', imageUrl: this.state.imageUrl }),
	            ' ',
	            _react2.default.createElement('br', null)
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'profileContent' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            this.props.currentUser,
	            '\'s Friends ',
	            _react2.default.createElement('div', { className: 'addFriend', onClick: modalAddFriend }),
	            ' '
	          ),
	          _react2.default.createElement(_FriendView2.default, null),
	          _react2.default.createElement(
	            'h1',
	            null,
	            this.props.currentUser,
	            '\'s Stats'
	          ),
	          _react2.default.createElement(_UserStats2.default, null)
	        ),
	        _react2.default.createElement(_Modal2.default, { show: this.state.modalShow, onHide: this.modalClose.bind(this), content: this.state.content, title: this.state.title })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWSWV3LmpzeD9mZDExIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJwcm9wcyIsInN0YXRlIiwiaW1hZ2VVcmwiLCJtb2RhbFNob3ciLCJsb2dvdXQiLCJiaW5kIiwiaW1hZ2VTdGF0ZUNoYW5nZUNhbGxiYWNrIiwiY29udGV4dCIsInNvY2tldCIsIm9uIiwiZGF0YSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsImN1cnJlbnRVc2VyIiwiY29udGVudCIsInRpdGxlIiwibW9kYWxDaGFuZ2VQaWMiLCJtb2RhbEFkZEZyaWVuZCIsIm1vZGFsQ2xvc2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxPOzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNYQSxLQURXOztBQUdqQixXQUFLQyxLQUFMLEdBQWE7QUFDVEMsaUJBQVUsNkJBREQ7QUFFVEMsa0JBQVc7QUFGRixNQUFiOztBQUtBLFdBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUNBLFdBQUtDLHdCQUFMLEdBQWdDLE1BQUtBLHdCQUFMLENBQThCRCxJQUE5QixPQUFoQztBQVRpQjtBQVVuQjs7Ozt5Q0FFb0I7QUFDaEIsV0FBSUUsVUFBVSxJQUFkO0FBQ0FDLGNBQU9DLEVBQVAsQ0FBVSxpQkFBVixFQUE2QixVQUFTQyxJQUFULEVBQWM7QUFDdkNILGlCQUFRSSxRQUFSLENBQWlCO0FBQ2JULHFCQUFVUTtBQURHLFVBQWpCO0FBR0gsUUFKRDtBQUtIOzs7OENBRXdCQSxJLEVBQU07QUFDN0IsWUFBS0MsUUFBTCxDQUFjO0FBQ1pULG1CQUFVUTtBQURFLFFBQWQ7QUFHQUUsZUFBUUMsR0FBUixDQUFZLEtBQUtaLEtBQUwsQ0FBV0MsUUFBdkI7QUFDRDs7OzhCQUVRO0FBQ1BZLGNBQU9DLGNBQVAsQ0FBc0JDLFVBQXRCLENBQWlDLE1BQWpDLEVBQXlDLEtBQUtoQixLQUFMLENBQVdpQixXQUFwRDtBQUNBTCxlQUFRQyxHQUFSLENBQVksWUFBWjtBQUNEOzs7a0NBRVk7QUFDWCxZQUFLRixRQUFMLENBQWM7QUFDWlIsb0JBQVc7QUFEQyxRQUFkO0FBR0Q7OztzQ0FFZ0I7QUFDZixZQUFLUSxRQUFMLENBQWM7QUFDWlIsb0JBQVcsSUFEQztBQUVaZSxrQkFBUyx1REFBYSxXQUFXLEtBQUtaLHdCQUE3QixHQUZHO0FBR1phLGdCQUFPO0FBSEssUUFBZDtBQUtEOzs7c0NBRWdCO0FBQ2YsWUFBS1IsUUFBTCxDQUFjO0FBQ1pSLG9CQUFXLElBREM7QUFFWmUsa0JBQVMsMkRBRkc7QUFHWkMsZ0JBQU87QUFISyxRQUFkO0FBS0Q7Ozs4QkFFUTtBQUNQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxTQUFmO0FBQ0M7QUFBQTtBQUFBLGFBQUssV0FBVSxlQUFmO0FBQ0c7QUFBQTtBQUFBLGVBQUssV0FBVSxhQUFmO0FBQ0EscUVBREE7QUFFQTtBQUFBO0FBQUE7QUFBSyxvQkFBS25CLEtBQUwsQ0FBV2lCO0FBQWhCLGNBRkE7QUFHRTtBQUFBO0FBQUEsaUJBQU0sV0FBVSxNQUFoQixFQUF1QixJQUFHLEdBQTFCO0FBQThCO0FBQUE7QUFBQSxtQkFBUSxTQUFTLEtBQUtiLE1BQXRCLEVBQThCLFdBQVUsY0FBeEM7QUFBQTtBQUFBO0FBQTlCO0FBSEYsWUFESDtBQU1HO0FBQUE7QUFBQSxlQUFLLFdBQVUsY0FBZjtBQUNFLG9EQUFLLFdBQVUsTUFBZixFQUFzQixTQUFTZ0IsY0FBL0IsR0FERjtBQUVFLDhEQUFPLFdBQVUsWUFBakIsRUFBOEIsVUFBVSxLQUFLbkIsS0FBTCxDQUFXQyxRQUFuRCxHQUZGO0FBQUE7QUFFaUU7QUFGakU7QUFOSCxVQUREO0FBWUU7QUFBQTtBQUFBLGFBQUssV0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLLGtCQUFLRixLQUFMLENBQVdpQixXQUFoQjtBQUFBO0FBQXVDLG9EQUFLLFdBQVUsV0FBZixFQUEyQixTQUFTSSxjQUFwQyxHQUF2QztBQUFBO0FBQUEsWUFERjtBQUVFLG9FQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUssa0JBQUtyQixLQUFMLENBQVdpQixXQUFoQjtBQUFBO0FBQUEsWUFIRjtBQUlFO0FBSkYsVUFaRjtBQWtCRSwwREFBTyxNQUFNLEtBQUtoQixLQUFMLENBQVdFLFNBQXhCLEVBQW1DLFFBQVEsS0FBS21CLFVBQUwsQ0FBZ0JqQixJQUFoQixDQUFxQixJQUFyQixDQUEzQyxFQUF1RSxTQUFTLEtBQUtKLEtBQUwsQ0FBV2lCLE9BQTNGLEVBQW9HLE9BQU8sS0FBS2pCLEtBQUwsQ0FBV2tCLEtBQXRIO0FBbEJGLFFBREY7QUFzQkQ7Ozs7R0EvRW1CLGdCQUFNSSxTOzttQkFrRmJ4QixPIiwiZmlsZSI6IjAuNjQ3MjFjMjM2YWM1YjNmY2Y5ZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgVXNlclN0YXRzIGZyb20gJy4vVXNlclN0YXRzLmpzeCc7XG5pbXBvcnQgRnJpZW5kU2VhcmNoIGZyb20gJy4vRnJpZW5kU2VhcmNoLmpzeCc7XG5pbXBvcnQgRnJpZW5kVmlldyBmcm9tICcuL0ZyaWVuZFZpZXcuanN4JztcbmltcG9ydCBJbWFnZVVwbG9hZCBmcm9tICcuL0ltYWdlVXBsb2FkLmpzeCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qc3gnXG5pbXBvcnQgUG9wdXAgZnJvbSAnLi8uLi9TaGFyZWQvTW9kYWwuanN4J1xuaW1wb3J0IHsgR2x5cGhpY29uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uL1RpdGxlVmlldy5qc3gnXG5cbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGltYWdlVXJsOiAnLi8uLi9pbWFnZXMvcGxhY2Vob2xkZXIuanBnJyxcbiAgICAgICAgbW9kYWxTaG93OiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMubG9nb3V0ID0gdGhpcy5sb2dvdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmltYWdlU3RhdGVDaGFuZ2VDYWxsYmFjayA9IHRoaXMuaW1hZ2VTdGF0ZUNoYW5nZUNhbGxiYWNrLmJpbmQodGhpcyk7XG5cdH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICAgIHNvY2tldC5vbihcInNldFByb2ZpbGVJbWFnZVwiLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgaW1hZ2VVcmw6IGRhdGFcbiAgICAgICAgICB9KVxuICAgICAgfSk7XG4gIH1cblxuICBpbWFnZVN0YXRlQ2hhbmdlQ2FsbGJhY2soZGF0YSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW1hZ2VVcmw6IGRhdGFcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmltYWdlVXJsKTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicsIHRoaXMucHJvcHMuY3VycmVudFVzZXIpO1xuICAgIGNvbnNvbGUubG9nKCdMb2dnZWQgb3V0Jyk7XG4gIH1cblxuICBtb2RhbENsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9kYWxTaG93OiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgbW9kYWxDaGFuZ2VQaWMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb2RhbFNob3c6IHRydWUsXG4gICAgICBjb250ZW50OiA8SW1hZ2VVcGxvYWQgbG9hZEltYWdlPXt0aGlzLmltYWdlU3RhdGVDaGFuZ2VDYWxsYmFja30gLz4sXG4gICAgICB0aXRsZTogXCJVcGxvYWQgUHJvZmlsZSBQaWNcIlxuICAgIH0pO1xuICB9XG5cbiAgbW9kYWxBZGRGcmllbmQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb2RhbFNob3c6IHRydWUsXG4gICAgICBjb250ZW50OiA8RnJpZW5kU2VhcmNoIC8+LFxuICAgICAgdGl0bGU6IFwiQWRkIEZyaWVuZFwiXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZmlsZVwiPlxuICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVIZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcnNMZWZ0XCI+XG4gIFx0ICAgICAgXHQ8VGl0bGUvPlxuICBcdCAgICAgIFx0PGgyPnt0aGlzLnByb3BzLmN1cnJlbnRVc2VyfTwvaDI+IFxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiTGlua1wiIHRvPVwiL1wiPjxidXR0b24gb25DbGljaz17dGhpcy5sb2dvdXR9IGNsYXNzTmFtZT1cImxvZ291dEJ1dHRvblwiPkxvZ291dDwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcnNSaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0XCIgb25DbGljaz17bW9kYWxDaGFuZ2VQaWN9PjwvZGl2PlxuICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInByb2ZpbGVQaWNcIiBpbWFnZVVybD17dGhpcy5zdGF0ZS5pbWFnZVVybH0vPiA8YnIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlQ29udGVudFwiPlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5jdXJyZW50VXNlcn0ncyBGcmllbmRzIDxkaXYgY2xhc3NOYW1lPVwiYWRkRnJpZW5kXCIgb25DbGljaz17bW9kYWxBZGRGcmllbmR9PjwvZGl2PiA8L2gxPiBcbiAgICAgICAgICA8RnJpZW5kVmlldy8+XG4gICAgICAgICAgPGgxPnt0aGlzLnByb3BzLmN1cnJlbnRVc2VyfSdzIFN0YXRzPC9oMT5cbiAgICAgICAgICA8VXNlclN0YXRzLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFBvcHVwIHNob3c9e3RoaXMuc3RhdGUubW9kYWxTaG93fSBvbkhpZGU9e3RoaXMubW9kYWxDbG9zZS5iaW5kKHRoaXMpfSBjb250ZW50PXt0aGlzLnN0YXRlLmNvbnRlbnR9IHRpdGxlPXt0aGlzLnN0YXRlLnRpdGxlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvUHJvZmlsZVZJZXcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==