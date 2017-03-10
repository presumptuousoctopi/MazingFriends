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
	        content: _react2.default.createElement(_ImageUpload2.default, { loadImage: this.imageStateChangeCallback })
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
	            _react2.default.createElement('div', { className: 'edit' }),
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
	            _react2.default.createElement('div', { className: 'addFriend' }),
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
	        _react2.default.createElement(_Modal2.default, { show: this.state.modalShow, onHide: this.modalClose.bind(this), content: this.state.content, title: 'Upload Profile Pic' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWSWV3LmpzeD9mZDExIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJwcm9wcyIsInN0YXRlIiwiaW1hZ2VVcmwiLCJtb2RhbFNob3ciLCJsb2dvdXQiLCJiaW5kIiwiaW1hZ2VTdGF0ZUNoYW5nZUNhbGxiYWNrIiwiY29udGV4dCIsInNvY2tldCIsIm9uIiwiZGF0YSIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsImN1cnJlbnRVc2VyIiwiY29udGVudCIsIm1vZGFsQ2xvc2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxPOzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNYQSxLQURXOztBQUdqQixXQUFLQyxLQUFMLEdBQWE7QUFDVEMsaUJBQVUsNkJBREQ7QUFFVEMsa0JBQVc7QUFGRixNQUFiOztBQUtBLFdBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUNBLFdBQUtDLHdCQUFMLEdBQWdDLE1BQUtBLHdCQUFMLENBQThCRCxJQUE5QixPQUFoQztBQVRpQjtBQVVuQjs7Ozt5Q0FFb0I7QUFDaEIsV0FBSUUsVUFBVSxJQUFkO0FBQ0FDLGNBQU9DLEVBQVAsQ0FBVSxpQkFBVixFQUE2QixVQUFTQyxJQUFULEVBQWM7QUFDdkNILGlCQUFRSSxRQUFSLENBQWlCO0FBQ2JULHFCQUFVUTtBQURHLFVBQWpCO0FBR0gsUUFKRDtBQUtIOzs7OENBRXdCQSxJLEVBQU07QUFDN0IsWUFBS0MsUUFBTCxDQUFjO0FBQ1pULG1CQUFVUTtBQURFLFFBQWQ7QUFHQUUsZUFBUUMsR0FBUixDQUFZLEtBQUtaLEtBQUwsQ0FBV0MsUUFBdkI7QUFDRDs7OzhCQUVRO0FBQ1BZLGNBQU9DLGNBQVAsQ0FBc0JDLFVBQXRCLENBQWlDLE1BQWpDLEVBQXlDLEtBQUtoQixLQUFMLENBQVdpQixXQUFwRDtBQUNBTCxlQUFRQyxHQUFSLENBQVksWUFBWjtBQUNEOzs7a0NBRVk7QUFDWCxZQUFLRixRQUFMLENBQWM7QUFDWlIsb0JBQVc7QUFEQyxRQUFkO0FBR0Q7OztzQ0FFZ0I7QUFDZixZQUFLUSxRQUFMLENBQWM7QUFDWlIsb0JBQVcsSUFEQztBQUVaZSxrQkFBUyx1REFBYSxXQUFXLEtBQUtaLHdCQUE3QjtBQUZHLFFBQWQ7QUFJRDs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFNBQWY7QUFDQztBQUFBO0FBQUEsYUFBSyxXQUFVLGVBQWY7QUFDRztBQUFBO0FBQUEsZUFBSyxXQUFVLGFBQWY7QUFDQSxxRUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFLLG9CQUFLTixLQUFMLENBQVdpQjtBQUFoQixjQUZBO0FBR0U7QUFBQTtBQUFBLGlCQUFNLFdBQVUsTUFBaEIsRUFBdUIsSUFBRyxHQUExQjtBQUE4QjtBQUFBO0FBQUEsbUJBQVEsU0FBUyxLQUFLYixNQUF0QixFQUE4QixXQUFVLGNBQXhDO0FBQUE7QUFBQTtBQUE5QjtBQUhGLFlBREg7QUFNRztBQUFBO0FBQUEsZUFBSyxXQUFVLGNBQWY7QUFDRSxvREFBSyxXQUFVLE1BQWYsR0FERjtBQUVFLDhEQUFPLFdBQVUsWUFBakIsRUFBOEIsVUFBVSxLQUFLSCxLQUFMLENBQVdDLFFBQW5ELEdBRkY7QUFBQTtBQUVpRTtBQUZqRTtBQU5ILFVBREQ7QUFZRTtBQUFBO0FBQUEsYUFBSyxXQUFVLGdCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUssa0JBQUtGLEtBQUwsQ0FBV2lCLFdBQWhCO0FBQUE7QUFBdUMsb0RBQUssV0FBVSxXQUFmLEdBQXZDO0FBQUE7QUFBQSxZQURGO0FBRUUsb0VBRkY7QUFHRTtBQUFBO0FBQUE7QUFBSyxrQkFBS2pCLEtBQUwsQ0FBV2lCLFdBQWhCO0FBQUE7QUFBQSxZQUhGO0FBSUU7QUFKRixVQVpGO0FBa0JFLDBEQUFPLE1BQU0sS0FBS2hCLEtBQUwsQ0FBV0UsU0FBeEIsRUFBbUMsUUFBUSxLQUFLZ0IsVUFBTCxDQUFnQmQsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBM0MsRUFBdUUsU0FBUyxLQUFLSixLQUFMLENBQVdpQixPQUEzRixFQUFvRyxPQUFNLG9CQUExRztBQWxCRixRQURGO0FBc0JEOzs7O0dBdEVtQixnQkFBTUUsUzs7bUJBeUVickIsTyIsImZpbGUiOiIwLmUzZjE3MTA2OTMxNTA2ODZhOTk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IFVzZXJTdGF0cyBmcm9tICcuL1VzZXJTdGF0cy5qc3gnO1xuaW1wb3J0IEZyaWVuZFNlYXJjaCBmcm9tICcuL0ZyaWVuZFNlYXJjaC5qc3gnO1xuaW1wb3J0IEZyaWVuZFZpZXcgZnJvbSAnLi9GcmllbmRWaWV3LmpzeCc7XG5pbXBvcnQgSW1hZ2VVcGxvYWQgZnJvbSAnLi9JbWFnZVVwbG9hZC5qc3gnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanN4J1xuaW1wb3J0IFBvcHVwIGZyb20gJy4vLi4vU2hhcmVkL01vZGFsLmpzeCdcbmltcG9ydCB7IEdseXBoaWNvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9UaXRsZVZpZXcuanN4J1xuXG5jbGFzcyBQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBpbWFnZVVybDogJy4vLi4vaW1hZ2VzL3BsYWNlaG9sZGVyLmpwZycsXG4gICAgICAgIG1vZGFsU2hvdzogZmFsc2VcbiAgICB9XG5cbiAgICB0aGlzLmxvZ291dCA9IHRoaXMubG9nb3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbWFnZVN0YXRlQ2hhbmdlQ2FsbGJhY2sgPSB0aGlzLmltYWdlU3RhdGVDaGFuZ2VDYWxsYmFjay5iaW5kKHRoaXMpO1xuXHR9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBsZXQgY29udGV4dCA9IHRoaXM7XG4gICAgICBzb2NrZXQub24oXCJzZXRQcm9maWxlSW1hZ2VcIiwgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGltYWdlVXJsOiBkYXRhXG4gICAgICAgICAgfSlcbiAgICAgIH0pO1xuICB9XG5cbiAgaW1hZ2VTdGF0ZUNoYW5nZUNhbGxiYWNrKGRhdGEpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGltYWdlVXJsOiBkYXRhXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pbWFnZVVybCk7XG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInLCB0aGlzLnByb3BzLmN1cnJlbnRVc2VyKTtcbiAgICBjb25zb2xlLmxvZygnTG9nZ2VkIG91dCcpO1xuICB9XG5cbiAgbW9kYWxDbG9zZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vZGFsU2hvdzogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIG1vZGFsQ2hhbmdlUGljKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9kYWxTaG93OiB0cnVlLFxuICAgICAgY29udGVudDogPEltYWdlVXBsb2FkIGxvYWRJbWFnZT17dGhpcy5pbWFnZVN0YXRlQ2hhbmdlQ2FsbGJhY2t9IC8+XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZmlsZVwiPlxuICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVIZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcnNMZWZ0XCI+XG4gIFx0ICAgICAgXHQ8VGl0bGUvPlxuICBcdCAgICAgIFx0PGgyPnt0aGlzLnByb3BzLmN1cnJlbnRVc2VyfTwvaDI+IFxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiTGlua1wiIHRvPVwiL1wiPjxidXR0b24gb25DbGljaz17dGhpcy5sb2dvdXR9IGNsYXNzTmFtZT1cImxvZ291dEJ1dHRvblwiPkxvZ291dDwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcnNSaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0XCI+PC9kaXY+XG4gICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwicHJvZmlsZVBpY1wiIGltYWdlVXJsPXt0aGlzLnN0YXRlLmltYWdlVXJsfS8+IDxici8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICBcdDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVDb250ZW50XCI+XG4gICAgICAgICAgPGgxPnt0aGlzLnByb3BzLmN1cnJlbnRVc2VyfSdzIEZyaWVuZHMgPGRpdiBjbGFzc05hbWU9XCJhZGRGcmllbmRcIj48L2Rpdj4gPC9oMT4gXG4gICAgICAgICAgPEZyaWVuZFZpZXcvPlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5jdXJyZW50VXNlcn0ncyBTdGF0czwvaDE+XG4gICAgICAgICAgPFVzZXJTdGF0cy8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxQb3B1cCBzaG93PXt0aGlzLnN0YXRlLm1vZGFsU2hvd30gb25IaWRlPXt0aGlzLm1vZGFsQ2xvc2UuYmluZCh0aGlzKX0gY29udGVudD17dGhpcy5zdGF0ZS5jb250ZW50fSB0aXRsZT1cIlVwbG9hZCBQcm9maWxlIFBpY1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9Qcm9maWxlVklldy5qc3giXSwic291cmNlUm9vdCI6IiJ9