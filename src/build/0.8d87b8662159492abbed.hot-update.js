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
	            _react2.default.createElement('div', { className: 'edit', onClick: 'modalChangePic' }),
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
	            _react2.default.createElement('div', { className: 'addFriend', onClick: 'modalAddFriend' }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWSWV3LmpzeD9mZDExIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJwcm9wcyIsInN0YXRlIiwiaW1hZ2VVcmwiLCJtb2RhbFNob3ciLCJsb2dvdXQiLCJiaW5kIiwiaW1hZ2VTdGF0ZUNoYW5nZUNhbGxiYWNrIiwiY29udGV4dCIsInNvY2tldCIsIm9uIiwiZGF0YSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsImN1cnJlbnRVc2VyIiwiY29udGVudCIsInRpdGxlIiwibW9kYWxDbG9zZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU1BLE87OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUhBQ1hBLEtBRFc7O0FBR2pCLFdBQUtDLEtBQUwsR0FBYTtBQUNUQyxpQkFBVSw2QkFERDtBQUVUQyxrQkFBVztBQUZGLE1BQWI7O0FBS0EsV0FBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUMsSUFBWixPQUFkO0FBQ0EsV0FBS0Msd0JBQUwsR0FBZ0MsTUFBS0Esd0JBQUwsQ0FBOEJELElBQTlCLE9BQWhDO0FBVGlCO0FBVW5COzs7O3lDQUVvQjtBQUNoQixXQUFJRSxVQUFVLElBQWQ7QUFDQUMsY0FBT0MsRUFBUCxDQUFVLGlCQUFWLEVBQTZCLFVBQVNDLElBQVQsRUFBYztBQUN2Q0gsaUJBQVFJLFFBQVIsQ0FBaUI7QUFDYlQscUJBQVVRO0FBREcsVUFBakI7QUFHSCxRQUpEO0FBS0g7Ozs4Q0FFd0JBLEksRUFBTTtBQUM3QixZQUFLQyxRQUFMLENBQWM7QUFDWlQsbUJBQVVRO0FBREUsUUFBZDtBQUdBRSxlQUFRQyxHQUFSLENBQVksS0FBS1osS0FBTCxDQUFXQyxRQUF2QjtBQUNEOzs7OEJBRVE7QUFDUFksY0FBT0MsY0FBUCxDQUFzQkMsVUFBdEIsQ0FBaUMsTUFBakMsRUFBeUMsS0FBS2hCLEtBQUwsQ0FBV2lCLFdBQXBEO0FBQ0FMLGVBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0Q7OztrQ0FFWTtBQUNYLFlBQUtGLFFBQUwsQ0FBYztBQUNaUixvQkFBVztBQURDLFFBQWQ7QUFHRDs7O3NDQUVnQjtBQUNmLFlBQUtRLFFBQUwsQ0FBYztBQUNaUixvQkFBVyxJQURDO0FBRVplLGtCQUFTLHVEQUFhLFdBQVcsS0FBS1osd0JBQTdCLEdBRkc7QUFHWmEsZ0JBQU87QUFISyxRQUFkO0FBS0Q7OztzQ0FFZ0I7QUFDZixZQUFLUixRQUFMLENBQWM7QUFDWlIsb0JBQVcsSUFEQztBQUVaZSxrQkFBUywyREFGRztBQUdaQyxnQkFBTztBQUhLLFFBQWQ7QUFLRDs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFNBQWY7QUFDQztBQUFBO0FBQUEsYUFBSyxXQUFVLGVBQWY7QUFDRztBQUFBO0FBQUEsZUFBSyxXQUFVLGFBQWY7QUFDQSxxRUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFLLG9CQUFLbkIsS0FBTCxDQUFXaUI7QUFBaEIsY0FGQTtBQUdFO0FBQUE7QUFBQSxpQkFBTSxXQUFVLE1BQWhCLEVBQXVCLElBQUcsR0FBMUI7QUFBOEI7QUFBQTtBQUFBLG1CQUFRLFNBQVMsS0FBS2IsTUFBdEIsRUFBOEIsV0FBVSxjQUF4QztBQUFBO0FBQUE7QUFBOUI7QUFIRixZQURIO0FBTUc7QUFBQTtBQUFBLGVBQUssV0FBVSxjQUFmO0FBQ0Usb0RBQUssV0FBVSxNQUFmLEVBQXNCLFNBQVEsZ0JBQTlCLEdBREY7QUFFRSw4REFBTyxXQUFVLFlBQWpCLEVBQThCLFVBQVUsS0FBS0gsS0FBTCxDQUFXQyxRQUFuRCxHQUZGO0FBQUE7QUFFaUU7QUFGakU7QUFOSCxVQUREO0FBWUU7QUFBQTtBQUFBLGFBQUssV0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLLGtCQUFLRixLQUFMLENBQVdpQixXQUFoQjtBQUFBO0FBQXVDLG9EQUFLLFdBQVUsV0FBZixFQUEyQixTQUFRLGdCQUFuQyxHQUF2QztBQUFBO0FBQUEsWUFERjtBQUVFLG9FQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUssa0JBQUtqQixLQUFMLENBQVdpQixXQUFoQjtBQUFBO0FBQUEsWUFIRjtBQUlFO0FBSkYsVUFaRjtBQWtCRSwwREFBTyxNQUFNLEtBQUtoQixLQUFMLENBQVdFLFNBQXhCLEVBQW1DLFFBQVEsS0FBS2lCLFVBQUwsQ0FBZ0JmLElBQWhCLENBQXFCLElBQXJCLENBQTNDLEVBQXVFLFNBQVMsS0FBS0osS0FBTCxDQUFXaUIsT0FBM0YsRUFBb0csT0FBTyxLQUFLakIsS0FBTCxDQUFXa0IsS0FBdEg7QUFsQkYsUUFERjtBQXNCRDs7OztHQS9FbUIsZ0JBQU1FLFM7O21CQWtGYnRCLE8iLCJmaWxlIjoiMC44ZDg3Yjg2NjIxNTk0OTJhYmJlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBVc2VyU3RhdHMgZnJvbSAnLi9Vc2VyU3RhdHMuanN4JztcbmltcG9ydCBGcmllbmRTZWFyY2ggZnJvbSAnLi9GcmllbmRTZWFyY2guanN4JztcbmltcG9ydCBGcmllbmRWaWV3IGZyb20gJy4vRnJpZW5kVmlldy5qc3gnO1xuaW1wb3J0IEltYWdlVXBsb2FkIGZyb20gJy4vSW1hZ2VVcGxvYWQuanN4JztcbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzeCdcbmltcG9ydCBQb3B1cCBmcm9tICcuLy4uL1NoYXJlZC9Nb2RhbC5qc3gnXG5pbXBvcnQgeyBHbHlwaGljb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vVGl0bGVWaWV3LmpzeCdcblxuY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgaW1hZ2VVcmw6ICcuLy4uL2ltYWdlcy9wbGFjZWhvbGRlci5qcGcnLFxuICAgICAgICBtb2RhbFNob3c6IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5sb2dvdXQgPSB0aGlzLmxvZ291dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW1hZ2VTdGF0ZUNoYW5nZUNhbGxiYWNrID0gdGhpcy5pbWFnZVN0YXRlQ2hhbmdlQ2FsbGJhY2suYmluZCh0aGlzKTtcblx0fVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgbGV0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgc29ja2V0Lm9uKFwic2V0UHJvZmlsZUltYWdlXCIsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBpbWFnZVVybDogZGF0YVxuICAgICAgICAgIH0pXG4gICAgICB9KTtcbiAgfVxuXG4gIGltYWdlU3RhdGVDaGFuZ2VDYWxsYmFjayhkYXRhKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbWFnZVVybDogZGF0YVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaW1hZ2VVcmwpO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJywgdGhpcy5wcm9wcy5jdXJyZW50VXNlcik7XG4gICAgY29uc29sZS5sb2coJ0xvZ2dlZCBvdXQnKTtcbiAgfVxuXG4gIG1vZGFsQ2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb2RhbFNob3c6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBtb2RhbENoYW5nZVBpYygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vZGFsU2hvdzogdHJ1ZSxcbiAgICAgIGNvbnRlbnQ6IDxJbWFnZVVwbG9hZCBsb2FkSW1hZ2U9e3RoaXMuaW1hZ2VTdGF0ZUNoYW5nZUNhbGxiYWNrfSAvPixcbiAgICAgIHRpdGxlOiBcIlVwbG9hZCBQcm9maWxlIFBpY1wiXG4gICAgfSk7XG4gIH1cblxuICBtb2RhbEFkZEZyaWVuZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vZGFsU2hvdzogdHJ1ZSxcbiAgICAgIGNvbnRlbnQ6IDxGcmllbmRTZWFyY2ggLz4sXG4gICAgICB0aXRsZTogXCJBZGQgRnJpZW5kXCJcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9maWxlXCI+XG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZUhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyc0xlZnRcIj5cbiAgXHQgICAgICBcdDxUaXRsZS8+XG4gIFx0ICAgICAgXHQ8aDI+e3RoaXMucHJvcHMuY3VycmVudFVzZXJ9PC9oMj4gXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJMaW5rXCIgdG89XCIvXCI+PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmxvZ291dH0gY2xhc3NOYW1lPVwibG9nb3V0QnV0dG9uXCI+TG9nb3V0PC9idXR0b24+PC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyc1JpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRcIiBvbkNsaWNrPVwibW9kYWxDaGFuZ2VQaWNcIj48L2Rpdj5cbiAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJwcm9maWxlUGljXCIgaW1hZ2VVcmw9e3RoaXMuc3RhdGUuaW1hZ2VVcmx9Lz4gPGJyLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIFx0PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZUNvbnRlbnRcIj5cbiAgICAgICAgICA8aDE+e3RoaXMucHJvcHMuY3VycmVudFVzZXJ9J3MgRnJpZW5kcyA8ZGl2IGNsYXNzTmFtZT1cImFkZEZyaWVuZFwiIG9uQ2xpY2s9XCJtb2RhbEFkZEZyaWVuZFwiPjwvZGl2PiA8L2gxPiBcbiAgICAgICAgICA8RnJpZW5kVmlldy8+XG4gICAgICAgICAgPGgxPnt0aGlzLnByb3BzLmN1cnJlbnRVc2VyfSdzIFN0YXRzPC9oMT5cbiAgICAgICAgICA8VXNlclN0YXRzLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFBvcHVwIHNob3c9e3RoaXMuc3RhdGUubW9kYWxTaG93fSBvbkhpZGU9e3RoaXMubW9kYWxDbG9zZS5iaW5kKHRoaXMpfSBjb250ZW50PXt0aGlzLnN0YXRlLmNvbnRlbnR9IHRpdGxlPXt0aGlzLnN0YXRlLnRpdGxlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvUHJvZmlsZVZJZXcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==