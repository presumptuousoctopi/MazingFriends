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
	            ' ',
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(
	              'a',
	              { onClick: this.modalOpen.bind(this), className: 'clickable' },
	              _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'pencil' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWSWV3LmpzeD9mZDExIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJwcm9wcyIsInN0YXRlIiwiaW1hZ2VVcmwiLCJtb2RhbFNob3ciLCJsb2dvdXQiLCJiaW5kIiwiaW1hZ2VTdGF0ZUNoYW5nZUNhbGxiYWNrIiwiY29udGV4dCIsInNvY2tldCIsIm9uIiwiZGF0YSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsImN1cnJlbnRVc2VyIiwibW9kYWxPcGVuIiwibW9kYWxDbG9zZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztLQUVNQSxPOzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNYQSxLQURXOztBQUdqQixXQUFLQyxLQUFMLEdBQWE7QUFDVEMsaUJBQVUsc0JBREQ7QUFFVEMsa0JBQVc7QUFGRixNQUFiOztBQUtBLFdBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUNBLFdBQUtDLHdCQUFMLEdBQWdDLE1BQUtBLHdCQUFMLENBQThCRCxJQUE5QixPQUFoQztBQVRpQjtBQVVuQjs7Ozt5Q0FFb0I7QUFDaEIsV0FBSUUsVUFBVSxJQUFkO0FBQ0FDLGNBQU9DLEVBQVAsQ0FBVSxpQkFBVixFQUE2QixVQUFTQyxJQUFULEVBQWM7QUFDdkNILGlCQUFRSSxRQUFSLENBQWlCO0FBQ2JULHFCQUFVUTtBQURHLFVBQWpCO0FBR0gsUUFKRDtBQUtIOzs7OENBRXdCQSxJLEVBQU07QUFDN0IsWUFBS0MsUUFBTCxDQUFjO0FBQ1pULG1CQUFVUTtBQURFLFFBQWQ7QUFHQUUsZUFBUUMsR0FBUixDQUFZLEtBQUtaLEtBQUwsQ0FBV0MsUUFBdkI7QUFDRDs7OzhCQUVRO0FBQ1BZLGNBQU9DLGNBQVAsQ0FBc0JDLFVBQXRCLENBQWlDLE1BQWpDLEVBQXlDLEtBQUtoQixLQUFMLENBQVdpQixXQUFwRDtBQUNBTCxlQUFRQyxHQUFSLENBQVksWUFBWjtBQUNEOzs7a0NBRVk7QUFDWCxZQUFLRixRQUFMLENBQWM7QUFDWlIsb0JBQVc7QUFEQyxRQUFkO0FBR0Q7OztpQ0FFVztBQUNWLFlBQUtRLFFBQUwsQ0FBYztBQUNaUixvQkFBVztBQURDLFFBQWQ7QUFHRDs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFNBQWY7QUFDQztBQUFBO0FBQUEsYUFBSyxXQUFVLGVBQWY7QUFDRztBQUFBO0FBQUEsZUFBSyxXQUFVLGFBQWY7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREE7QUFFQTtBQUFBO0FBQUE7QUFBSyxvQkFBS0gsS0FBTCxDQUFXaUI7QUFBaEIsY0FGQTtBQUdFO0FBQUE7QUFBQSxpQkFBTSxXQUFVLE1BQWhCLEVBQXVCLElBQUcsR0FBMUI7QUFBOEI7QUFBQTtBQUFBLG1CQUFRLFNBQVMsS0FBS2IsTUFBdEIsRUFBOEIsV0FBVSxjQUF4QztBQUFBO0FBQUE7QUFBOUI7QUFIRixZQURIO0FBTUc7QUFBQTtBQUFBLGVBQUssV0FBVSxjQUFmO0FBQ0UsOERBQU8sV0FBVSxZQUFqQixFQUE4QixVQUFVLEtBQUtILEtBQUwsQ0FBV0MsUUFBbkQsR0FERjtBQUFBO0FBQ2lFLHNEQURqRTtBQUVFO0FBQUE7QUFBQSxpQkFBRyxTQUFTLEtBQUtnQixTQUFMLENBQWViLElBQWYsQ0FBb0IsSUFBcEIsQ0FBWixFQUF1QyxXQUFVLFdBQWpEO0FBQTZELDBFQUFXLE9BQU0sUUFBakI7QUFBN0Q7QUFGRjtBQU5ILFVBREQ7QUFZRTtBQUFBO0FBQUEsYUFBSyxXQUFVLGdCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUssa0JBQUtMLEtBQUwsQ0FBV2lCLFdBQWhCO0FBQUE7QUFBQSxZQURGO0FBRUUsc0VBRkY7QUFHRSxvRUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFLLGtCQUFLakIsS0FBTCxDQUFXaUIsV0FBaEI7QUFBQTtBQUFBLFlBSkY7QUFLRTtBQUxGLFVBWkY7QUFtQkUsMERBQU8sTUFBTSxLQUFLaEIsS0FBTCxDQUFXRSxTQUF4QixFQUFtQyxRQUFRLEtBQUtnQixVQUFMLENBQWdCZCxJQUFoQixDQUFxQixJQUFyQixDQUEzQyxFQUF1RSxTQUFTLHVEQUFhLFdBQVcsS0FBS0Msd0JBQTdCLEdBQWhGLEVBQTJJLE9BQU0sb0JBQWpKO0FBbkJGLFFBREY7QUF1QkQ7Ozs7R0F0RW1CLGdCQUFNYyxTOzttQkF5RWJyQixPIiwiZmlsZSI6IjAuNTZlOTcxYjEzZTYxM2I5MzE2M2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgVXNlclN0YXRzIGZyb20gJy4vVXNlclN0YXRzLmpzeCc7XG5pbXBvcnQgRnJpZW5kU2VhcmNoIGZyb20gJy4vRnJpZW5kU2VhcmNoLmpzeCc7XG5pbXBvcnQgRnJpZW5kVmlldyBmcm9tICcuL0ZyaWVuZFZpZXcuanN4JztcbmltcG9ydCBJbWFnZVVwbG9hZCBmcm9tICcuL0ltYWdlVXBsb2FkLmpzeCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qc3gnXG5pbXBvcnQgUG9wdXAgZnJvbSAnLi8uLi9TaGFyZWQvTW9kYWwuanN4J1xuaW1wb3J0IHsgR2x5cGhpY29uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5jbGFzcyBQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBpbWFnZVVybDogJy4vLi4vcGxhY2Vob2xkZXIuanBnJyxcbiAgICAgICAgbW9kYWxTaG93OiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMubG9nb3V0ID0gdGhpcy5sb2dvdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmltYWdlU3RhdGVDaGFuZ2VDYWxsYmFjayA9IHRoaXMuaW1hZ2VTdGF0ZUNoYW5nZUNhbGxiYWNrLmJpbmQodGhpcyk7XG5cdH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICAgIHNvY2tldC5vbihcInNldFByb2ZpbGVJbWFnZVwiLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgaW1hZ2VVcmw6IGRhdGFcbiAgICAgICAgICB9KVxuICAgICAgfSk7XG4gIH1cblxuICBpbWFnZVN0YXRlQ2hhbmdlQ2FsbGJhY2soZGF0YSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW1hZ2VVcmw6IGRhdGFcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmltYWdlVXJsKTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicsIHRoaXMucHJvcHMuY3VycmVudFVzZXIpO1xuICAgIGNvbnNvbGUubG9nKCdMb2dnZWQgb3V0Jyk7XG4gIH1cblxuICBtb2RhbENsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9kYWxTaG93OiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgbW9kYWxPcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9kYWxTaG93OiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZmlsZVwiPlxuICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVIZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcnNMZWZ0XCI+XG4gIFx0ICAgICAgXHQ8aDE+TWF6aW5nIEZyaWVuZHMgPC9oMT5cbiAgXHQgICAgICBcdDxoMj57dGhpcy5wcm9wcy5jdXJyZW50VXNlcn08L2gyPiBcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIkxpbmtcIiB0bz1cIi9cIj48YnV0dG9uIG9uQ2xpY2s9e3RoaXMubG9nb3V0fSBjbGFzc05hbWU9XCJsb2dvdXRCdXR0b25cIj5Mb2dvdXQ8L2J1dHRvbj48L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJzUmlnaHRcIj5cbiAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJwcm9maWxlUGljXCIgaW1hZ2VVcmw9e3RoaXMuc3RhdGUuaW1hZ2VVcmx9Lz4gPGJyLz5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMubW9kYWxPcGVuLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiPjxHbHlwaGljb24gZ2x5cGg9XCJwZW5jaWxcIiAvPjwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIFx0PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZUNvbnRlbnRcIj5cbiAgICAgICAgICA8aDE+e3RoaXMucHJvcHMuY3VycmVudFVzZXJ9J3MgRnJpZW5kczwvaDE+XG4gICAgICAgICAgPEZyaWVuZFNlYXJjaC8+XG4gICAgICAgICAgPEZyaWVuZFZpZXcvPlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5jdXJyZW50VXNlcn0ncyBTdGF0czwvaDE+XG4gICAgICAgICAgPFVzZXJTdGF0cy8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxQb3B1cCBzaG93PXt0aGlzLnN0YXRlLm1vZGFsU2hvd30gb25IaWRlPXt0aGlzLm1vZGFsQ2xvc2UuYmluZCh0aGlzKX0gY29udGVudD17PEltYWdlVXBsb2FkIGxvYWRJbWFnZT17dGhpcy5pbWFnZVN0YXRlQ2hhbmdlQ2FsbGJhY2t9IC8+fSB0aXRsZT1cIlVwbG9hZCBQcm9maWxlIFBpY1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9Qcm9maWxlVklldy5qc3giXSwic291cmNlUm9vdCI6IiJ9