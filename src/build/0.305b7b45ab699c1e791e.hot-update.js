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
	            _react2.default.createElement(_Image2.default, { className: 'profilePic', imageUrl: this.state.imageUrl })
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
	        _react2.default.createElement(_Modal2.default, { show: this.state.modalShow, onHide: modalClose })
	      );
	    }
	  }]);
	
	  return Profile;
	}(_react2.default.Component);
	
	exports.default = Profile;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ProfileVIew.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 573:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Modal = function (_React$Component) {
	  _inherits(Modal, _React$Component);
	
	  function Modal() {
	    _classCallCheck(this, Modal);
	
	    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
	  }
	
	  _createClass(Modal, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        Modal,
	        _extends({}, this.props, { "aria-labelledby": "contained-modal-title-sm" }),
	        _react2.default.createElement(
	          Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            Modal.Title,
	            { id: "contained-modal-title-sm" },
	            "Modal heading"
	          )
	        ),
	        _react2.default.createElement(
	          Modal.Body,
	          null,
	          _react2.default.createElement(
	            "h4",
	            null,
	            "Wrapped Text"
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."
	          )
	        ),
	        _react2.default.createElement(
	          Modal.Footer,
	          null,
	          _react2.default.createElement(
	            Button,
	            { onClick: this.props.onHide },
	            "Close"
	          )
	        )
	      );
	    }
	  }]);
	
	  return Modal;
	}(_react2.default.Component);
	
	;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Modal.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWSWV3LmpzeD9mZDExIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NoYXJlZC9Nb2RhbC5qc3g/NDM2NSJdLCJuYW1lcyI6WyJQcm9maWxlIiwicHJvcHMiLCJzdGF0ZSIsImltYWdlVXJsIiwibW9kYWxTaG93IiwibG9nb3V0IiwiYmluZCIsImltYWdlU3RhdGVDaGFuZ2VDYWxsYmFjayIsImNvbnRleHQiLCJzb2NrZXQiLCJvbiIsImRhdGEiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJzZXNzaW9uU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJjdXJyZW50VXNlciIsIm1vZGFsQ2xvc2UiLCJDb21wb25lbnQiLCJNb2RhbCIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUdNQSxPOzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNYQSxLQURXOztBQUdqQixXQUFLQyxLQUFMLEdBQWE7QUFDVEMsaUJBQVUsc0JBREQ7QUFFVEMsa0JBQVc7QUFGRixNQUFiOztBQUtBLFdBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBZDtBQUNBLFdBQUtDLHdCQUFMLEdBQWdDLE1BQUtBLHdCQUFMLENBQThCRCxJQUE5QixPQUFoQztBQVRpQjtBQVVuQjs7Ozt5Q0FFb0I7QUFDaEIsV0FBSUUsVUFBVSxJQUFkO0FBQ0FDLGNBQU9DLEVBQVAsQ0FBVSxpQkFBVixFQUE2QixVQUFTQyxJQUFULEVBQWM7QUFDdkNILGlCQUFRSSxRQUFSLENBQWlCO0FBQ2JULHFCQUFVUTtBQURHLFVBQWpCO0FBR0gsUUFKRDtBQUtIOzs7OENBRXdCQSxJLEVBQU07QUFDN0IsWUFBS0MsUUFBTCxDQUFjO0FBQ1pULG1CQUFVUTtBQURFLFFBQWQ7QUFHQUUsZUFBUUMsR0FBUixDQUFZLEtBQUtaLEtBQUwsQ0FBV0MsUUFBdkI7QUFDRDs7OzhCQUVRO0FBQ1BZLGNBQU9DLGNBQVAsQ0FBc0JDLFVBQXRCLENBQWlDLE1BQWpDLEVBQXlDLEtBQUtoQixLQUFMLENBQVdpQixXQUFwRDtBQUNBTCxlQUFRQyxHQUFSLENBQVksWUFBWjtBQUNEOzs7a0NBRVk7QUFDWCxZQUFLRixRQUFMLENBQWM7QUFDWlIsb0JBQVc7QUFEQyxRQUFkO0FBR0Q7Ozs4QkFFUTtBQUNQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxTQUFmO0FBQ0M7QUFBQTtBQUFBLGFBQUssV0FBVSxlQUFmO0FBQ0c7QUFBQTtBQUFBLGVBQUssV0FBVSxhQUFmO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBO0FBRUE7QUFBQTtBQUFBO0FBQUssb0JBQUtILEtBQUwsQ0FBV2lCO0FBQWhCLGNBRkE7QUFHRTtBQUFBO0FBQUEsaUJBQU0sV0FBVSxNQUFoQixFQUF1QixJQUFHLEdBQTFCO0FBQThCO0FBQUE7QUFBQSxtQkFBUSxTQUFTLEtBQUtiLE1BQXRCLEVBQThCLFdBQVUsY0FBeEM7QUFBQTtBQUFBO0FBQTlCO0FBSEYsWUFESDtBQU1HO0FBQUE7QUFBQSxlQUFLLFdBQVUsY0FBZjtBQUNFLDhEQUFPLFdBQVUsWUFBakIsRUFBOEIsVUFBVSxLQUFLSCxLQUFMLENBQVdDLFFBQW5EO0FBREY7QUFOSCxVQUREO0FBV0U7QUFBQTtBQUFBLGFBQUssV0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLLGtCQUFLRixLQUFMLENBQVdpQixXQUFoQjtBQUFBO0FBQUEsWUFERjtBQUVFLHNFQUZGO0FBR0Usb0VBSEY7QUFJRTtBQUFBO0FBQUE7QUFBSyxrQkFBS2pCLEtBQUwsQ0FBV2lCLFdBQWhCO0FBQUE7QUFBQSxZQUpGO0FBS0UsbUVBTEY7QUFNRSxrRUFBYSxXQUFXLEtBQUtYLHdCQUE3QjtBQU5GLFVBWEY7QUFtQkUsMERBQU8sTUFBTSxLQUFLTCxLQUFMLENBQVdFLFNBQXhCLEVBQW1DLFFBQVFlLFVBQTNDO0FBbkJGLFFBREY7QUF1QkQ7Ozs7R0FoRW1CLGdCQUFNQyxTOzttQkFtRWJwQixPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RWY7Ozs7Ozs7Ozs7OztLQUVNcUIsSzs7Ozs7Ozs7Ozs7OEJBQ0s7QUFDUCxjQUNFO0FBQUMsY0FBRDtBQUFBLHNCQUFXLEtBQUtwQixLQUFoQixJQUF1QixtQkFBZ0IsMEJBQXZDO0FBQ0U7QUFBQyxnQkFBRCxDQUFPLE1BQVA7QUFBQSxhQUFjLGlCQUFkO0FBQ0U7QUFBQyxrQkFBRCxDQUFPLEtBQVA7QUFBQSxlQUFhLElBQUcsMEJBQWhCO0FBQUE7QUFBQTtBQURGLFVBREY7QUFJRTtBQUFDLGdCQUFELENBQU8sSUFBUDtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGLFVBSkY7QUFhRTtBQUFDLGdCQUFELENBQU8sTUFBUDtBQUFBO0FBQ0U7QUFBQyxtQkFBRDtBQUFBLGVBQVEsU0FBUyxLQUFLQSxLQUFMLENBQVdxQixNQUE1QjtBQUFBO0FBQUE7QUFERjtBQWJGLFFBREY7QUFtQkQ7Ozs7R0FyQmlCLGdCQUFNRixTOztBQXNCekIsRSIsImZpbGUiOiIwLjMwNWI3YjQ1YWI2OTljMWU3OTFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IFVzZXJTdGF0cyBmcm9tICcuL1VzZXJTdGF0cy5qc3gnO1xuaW1wb3J0IEZyaWVuZFNlYXJjaCBmcm9tICcuL0ZyaWVuZFNlYXJjaC5qc3gnO1xuaW1wb3J0IEZyaWVuZFZpZXcgZnJvbSAnLi9GcmllbmRWaWV3LmpzeCc7XG5pbXBvcnQgSW1hZ2VVcGxvYWQgZnJvbSAnLi9JbWFnZVVwbG9hZC5qc3gnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanN4J1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vLi4vU2hhcmVkL01vZGFsLmpzeCdcblxuXG5jbGFzcyBQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBpbWFnZVVybDogJy4vLi4vcGxhY2Vob2xkZXIuanBnJyxcbiAgICAgICAgbW9kYWxTaG93OiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMubG9nb3V0ID0gdGhpcy5sb2dvdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmltYWdlU3RhdGVDaGFuZ2VDYWxsYmFjayA9IHRoaXMuaW1hZ2VTdGF0ZUNoYW5nZUNhbGxiYWNrLmJpbmQodGhpcyk7XG5cdH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICAgIHNvY2tldC5vbihcInNldFByb2ZpbGVJbWFnZVwiLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgaW1hZ2VVcmw6IGRhdGFcbiAgICAgICAgICB9KVxuICAgICAgfSk7XG4gIH1cblxuICBpbWFnZVN0YXRlQ2hhbmdlQ2FsbGJhY2soZGF0YSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW1hZ2VVcmw6IGRhdGFcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmltYWdlVXJsKTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicsIHRoaXMucHJvcHMuY3VycmVudFVzZXIpO1xuICAgIGNvbnNvbGUubG9nKCdMb2dnZWQgb3V0JylcbiAgfVxuXG4gIG1vZGFsQ2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb2RhbFNob3c6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJQcm9maWxlXCI+XG4gICAgICBcdDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZUhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyc0xlZnRcIj5cbiAgXHQgICAgICBcdDxoMT5NYXppbmcgRnJpZW5kcyA8L2gxPlxuICBcdCAgICAgIFx0PGgyPnt0aGlzLnByb3BzLmN1cnJlbnRVc2VyfTwvaDI+IFxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiTGlua1wiIHRvPVwiL1wiPjxidXR0b24gb25DbGljaz17dGhpcy5sb2dvdXR9IGNsYXNzTmFtZT1cImxvZ291dEJ1dHRvblwiPkxvZ291dDwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcnNSaWdodFwiPlxuICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInByb2ZpbGVQaWNcIiBpbWFnZVVybD17dGhpcy5zdGF0ZS5pbWFnZVVybH0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlQ29udGVudFwiPlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5jdXJyZW50VXNlcn0ncyBGcmllbmRzPC9oMT5cbiAgICAgICAgICA8RnJpZW5kU2VhcmNoLz5cbiAgICAgICAgICA8RnJpZW5kVmlldy8+XG4gICAgICAgICAgPGgxPnt0aGlzLnByb3BzLmN1cnJlbnRVc2VyfSdzIFN0YXRzPC9oMT5cbiAgICAgICAgICA8VXNlclN0YXRzLz5cbiAgICAgICAgICA8SW1hZ2VVcGxvYWQgbG9hZEltYWdlPXt0aGlzLmltYWdlU3RhdGVDaGFuZ2VDYWxsYmFja30vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8TW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5tb2RhbFNob3d9IG9uSGlkZT17bW9kYWxDbG9zZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWSWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWwgey4uLnRoaXMucHJvcHN9IGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS1zbVwiPlxuICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgIDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS1zbVwiPk1vZGFsIGhlYWRpbmc8L01vZGFsLlRpdGxlPlxuICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgPGg0PldyYXBwZWQgVGV4dDwvaDQ+XG4gICAgICAgICAgPHA+Q3JhcyBtYXR0aXMgY29uc2VjdGV0dXIgcHVydXMgc2l0IGFtZXQgZmVybWVudHVtLiBDcmFzIGp1c3RvIG9kaW8sIGRhcGlidXMgYWMgZmFjaWxpc2lzIGluLCBlZ2VzdGFzIGVnZXQgcXVhbS4gTW9yYmkgbGVvIHJpc3VzLCBwb3J0YSBhYyBjb25zZWN0ZXR1ciBhYywgdmVzdGlidWx1bSBhdCBlcm9zLjwvcD5cbiAgICAgICAgICA8cD5QcmFlc2VudCBjb21tb2RvIGN1cnN1cyBtYWduYSwgdmVsIHNjZWxlcmlzcXVlIG5pc2wgY29uc2VjdGV0dXIgZXQuIFZpdmFtdXMgc2FnaXR0aXMgbGFjdXMgdmVsIGF1Z3VlIGxhb3JlZXQgcnV0cnVtIGZhdWNpYnVzIGRvbG9yIGF1Y3Rvci48L3A+XG4gICAgICAgICAgPHA+QWVuZWFuIGxhY2luaWEgYmliZW5kdW0gbnVsbGEgc2VkIGNvbnNlY3RldHVyLiBQcmFlc2VudCBjb21tb2RvIGN1cnN1cyBtYWduYSwgdmVsIHNjZWxlcmlzcXVlIG5pc2wgY29uc2VjdGV0dXIgZXQuIERvbmVjIHNlZCBvZGlvIGR1aS4gRG9uZWMgdWxsYW1jb3JwZXIgbnVsbGEgbm9uIG1ldHVzIGF1Y3RvciBmcmluZ2lsbGEuPC9wPlxuICAgICAgICAgIDxwPkNyYXMgbWF0dGlzIGNvbnNlY3RldHVyIHB1cnVzIHNpdCBhbWV0IGZlcm1lbnR1bS4gQ3JhcyBqdXN0byBvZGlvLCBkYXBpYnVzIGFjIGZhY2lsaXNpcyBpbiwgZWdlc3RhcyBlZ2V0IHF1YW0uIE1vcmJpIGxlbyByaXN1cywgcG9ydGEgYWMgY29uc2VjdGV0dXIgYWMsIHZlc3RpYnVsdW0gYXQgZXJvcy48L3A+XG4gICAgICAgICAgPHA+UHJhZXNlbnQgY29tbW9kbyBjdXJzdXMgbWFnbmEsIHZlbCBzY2VsZXJpc3F1ZSBuaXNsIGNvbnNlY3RldHVyIGV0LiBWaXZhbXVzIHNhZ2l0dGlzIGxhY3VzIHZlbCBhdWd1ZSBsYW9yZWV0IHJ1dHJ1bSBmYXVjaWJ1cyBkb2xvciBhdWN0b3IuPC9wPlxuICAgICAgICAgIDxwPkFlbmVhbiBsYWNpbmlhIGJpYmVuZHVtIG51bGxhIHNlZCBjb25zZWN0ZXR1ci4gUHJhZXNlbnQgY29tbW9kbyBjdXJzdXMgbWFnbmEsIHZlbCBzY2VsZXJpc3F1ZSBuaXNsIGNvbnNlY3RldHVyIGV0LiBEb25lYyBzZWQgb2RpbyBkdWkuIERvbmVjIHVsbGFtY29ycGVyIG51bGxhIG5vbiBtZXR1cyBhdWN0b3IgZnJpbmdpbGxhLjwvcD5cbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5vbkhpZGV9PkNsb3NlPC9CdXR0b24+XG4gICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1NoYXJlZC9Nb2RhbC5qc3giXSwic291cmNlUm9vdCI6IiJ9