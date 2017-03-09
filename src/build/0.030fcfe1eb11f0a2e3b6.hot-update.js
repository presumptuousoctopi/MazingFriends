webpackHotUpdate(0,{

/***/ 572:
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
	
	var _Modal = __webpack_require__(573);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
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
	            _react2.default.createElement(
	              'button',
	              { onClick: this.modalOpen.bind(this) },
	              'Change Profile Image'
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
	        ),
	        _react2.default.createElement(_Modal2.default, { show: this.state.modalShow, onHide: this.modalClose.bind(this) })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWSWV3LmpzeD9mZDExIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJwcm9wcyIsInN0YXRlIiwiaW1hZ2VVcmwiLCJtb2RhbFNob3ciLCJsb2dvdXQiLCJiaW5kIiwiaW1hZ2VTdGF0ZUNoYW5nZUNhbGxiYWNrIiwiY29udGV4dCIsInNvY2tldCIsIm9uIiwiZGF0YSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsImN1cnJlbnRVc2VyIiwibW9kYWxPcGVuIiwibW9kYWxDbG9zZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUdNQSxPOzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNYQSxLQURXOztBQUdqQixXQUFLQyxLQUFMLEdBQWE7QUFDVEMsaUJBQVUsc0JBREQ7QUFFVEMsa0JBQVc7QUFGRixNQUFiOztBQUtBLFdBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUNBLFdBQUtDLHdCQUFMLEdBQWdDLE1BQUtBLHdCQUFMLENBQThCRCxJQUE5QixPQUFoQztBQVRpQjtBQVVuQjs7Ozt5Q0FFb0I7QUFDaEIsV0FBSUUsVUFBVSxJQUFkO0FBQ0FDLGNBQU9DLEVBQVAsQ0FBVSxpQkFBVixFQUE2QixVQUFTQyxJQUFULEVBQWM7QUFDdkNILGlCQUFRSSxRQUFSLENBQWlCO0FBQ2JULHFCQUFVUTtBQURHLFVBQWpCO0FBR0gsUUFKRDtBQUtIOzs7OENBRXdCQSxJLEVBQU07QUFDN0IsWUFBS0MsUUFBTCxDQUFjO0FBQ1pULG1CQUFVUTtBQURFLFFBQWQ7QUFHQUUsZUFBUUMsR0FBUixDQUFZLEtBQUtaLEtBQUwsQ0FBV0MsUUFBdkI7QUFDRDs7OzhCQUVRO0FBQ1BZLGNBQU9DLGNBQVAsQ0FBc0JDLFVBQXRCLENBQWlDLE1BQWpDLEVBQXlDLEtBQUtoQixLQUFMLENBQVdpQixXQUFwRDtBQUNBTCxlQUFRQyxHQUFSLENBQVksWUFBWjtBQUNEOzs7a0NBRVk7QUFDWCxZQUFLRixRQUFMLENBQWM7QUFDWlIsb0JBQVc7QUFEQyxRQUFkO0FBR0Q7OztpQ0FFVztBQUNWLFlBQUtRLFFBQUwsQ0FBYztBQUNaUixvQkFBVztBQURDLFFBQWQ7QUFHRDs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFNBQWY7QUFDQztBQUFBO0FBQUEsYUFBSyxXQUFVLGVBQWY7QUFDRztBQUFBO0FBQUEsZUFBSyxXQUFVLGFBQWY7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREE7QUFFQTtBQUFBO0FBQUE7QUFBSyxvQkFBS0gsS0FBTCxDQUFXaUI7QUFBaEIsY0FGQTtBQUdFO0FBQUE7QUFBQSxpQkFBTSxXQUFVLE1BQWhCLEVBQXVCLElBQUcsR0FBMUI7QUFBOEI7QUFBQTtBQUFBLG1CQUFRLFNBQVMsS0FBS2IsTUFBdEIsRUFBOEIsV0FBVSxjQUF4QztBQUFBO0FBQUE7QUFBOUI7QUFIRixZQURIO0FBTUc7QUFBQTtBQUFBLGVBQUssV0FBVSxjQUFmO0FBQ0UsOERBQU8sV0FBVSxZQUFqQixFQUE4QixVQUFVLEtBQUtILEtBQUwsQ0FBV0MsUUFBbkQsR0FERjtBQUVFO0FBQUE7QUFBQSxpQkFBUSxTQUFTLEtBQUtnQixTQUFMLENBQWViLElBQWYsQ0FBb0IsSUFBcEIsQ0FBakI7QUFBQTtBQUFBO0FBRkY7QUFOSCxVQUREO0FBWUU7QUFBQTtBQUFBLGFBQUssV0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLLGtCQUFLTCxLQUFMLENBQVdpQixXQUFoQjtBQUFBO0FBQUEsWUFERjtBQUVFLHNFQUZGO0FBR0Usb0VBSEY7QUFJRTtBQUFBO0FBQUE7QUFBSyxrQkFBS2pCLEtBQUwsQ0FBV2lCLFdBQWhCO0FBQUE7QUFBQSxZQUpGO0FBS0UsbUVBTEY7QUFNRSxrRUFBYSxXQUFXLEtBQUtYLHdCQUE3QjtBQU5GLFVBWkY7QUFvQkUsMERBQU8sTUFBTSxLQUFLTCxLQUFMLENBQVdFLFNBQXhCLEVBQW1DLFFBQVEsS0FBS2dCLFVBQUwsQ0FBZ0JkLElBQWhCLENBQXFCLElBQXJCLENBQTNDO0FBcEJGLFFBREY7QUF3QkQ7Ozs7R0F2RW1CLGdCQUFNZSxTOzttQkEwRWJyQixPIiwiZmlsZSI6IjAuMDMwZmNmZTFlYjExZjBhMmUzYjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgVXNlclN0YXRzIGZyb20gJy4vVXNlclN0YXRzLmpzeCc7XG5pbXBvcnQgRnJpZW5kU2VhcmNoIGZyb20gJy4vRnJpZW5kU2VhcmNoLmpzeCc7XG5pbXBvcnQgRnJpZW5kVmlldyBmcm9tICcuL0ZyaWVuZFZpZXcuanN4JztcbmltcG9ydCBJbWFnZVVwbG9hZCBmcm9tICcuL0ltYWdlVXBsb2FkLmpzeCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qc3gnXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi8uLi9TaGFyZWQvTW9kYWwuanN4J1xuXG5cbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGltYWdlVXJsOiAnLi8uLi9wbGFjZWhvbGRlci5qcGcnLFxuICAgICAgICBtb2RhbFNob3c6IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5sb2dvdXQgPSB0aGlzLmxvZ291dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW1hZ2VTdGF0ZUNoYW5nZUNhbGxiYWNrID0gdGhpcy5pbWFnZVN0YXRlQ2hhbmdlQ2FsbGJhY2suYmluZCh0aGlzKTtcblx0fVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgbGV0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgc29ja2V0Lm9uKFwic2V0UHJvZmlsZUltYWdlXCIsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBpbWFnZVVybDogZGF0YVxuICAgICAgICAgIH0pXG4gICAgICB9KTtcbiAgfVxuXG4gIGltYWdlU3RhdGVDaGFuZ2VDYWxsYmFjayhkYXRhKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbWFnZVVybDogZGF0YVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaW1hZ2VVcmwpO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJywgdGhpcy5wcm9wcy5jdXJyZW50VXNlcik7XG4gICAgY29uc29sZS5sb2coJ0xvZ2dlZCBvdXQnKVxuICB9XG5cbiAgbW9kYWxDbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vZGFsU2hvdzogZmFsc2VcbiAgICB9KVxuICB9XG5cbiAgbW9kYWxPcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9kYWxTaG93OiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9maWxlXCI+XG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZUhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyc0xlZnRcIj5cbiAgXHQgICAgICBcdDxoMT5NYXppbmcgRnJpZW5kcyA8L2gxPlxuICBcdCAgICAgIFx0PGgyPnt0aGlzLnByb3BzLmN1cnJlbnRVc2VyfTwvaDI+IFxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiTGlua1wiIHRvPVwiL1wiPjxidXR0b24gb25DbGljaz17dGhpcy5sb2dvdXR9IGNsYXNzTmFtZT1cImxvZ291dEJ1dHRvblwiPkxvZ291dDwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcnNSaWdodFwiPlxuICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInByb2ZpbGVQaWNcIiBpbWFnZVVybD17dGhpcy5zdGF0ZS5pbWFnZVVybH0vPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm1vZGFsT3Blbi5iaW5kKHRoaXMpfT5DaGFuZ2UgUHJvZmlsZSBJbWFnZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlQ29udGVudFwiPlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5jdXJyZW50VXNlcn0ncyBGcmllbmRzPC9oMT5cbiAgICAgICAgICA8RnJpZW5kU2VhcmNoLz5cbiAgICAgICAgICA8RnJpZW5kVmlldy8+XG4gICAgICAgICAgPGgxPnt0aGlzLnByb3BzLmN1cnJlbnRVc2VyfSdzIFN0YXRzPC9oMT5cbiAgICAgICAgICA8VXNlclN0YXRzLz5cbiAgICAgICAgICA8SW1hZ2VVcGxvYWQgbG9hZEltYWdlPXt0aGlzLmltYWdlU3RhdGVDaGFuZ2VDYWxsYmFja30vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8TW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5tb2RhbFNob3d9IG9uSGlkZT17dGhpcy5tb2RhbENsb3NlLmJpbmQodGhpcyl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9Qcm9maWxlVklldy5qc3giXSwic291cmNlUm9vdCI6IiJ9