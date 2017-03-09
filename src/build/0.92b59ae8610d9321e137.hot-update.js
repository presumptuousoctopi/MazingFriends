webpackHotUpdate(0,{

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ProfileVIew = __webpack_require__(572);
	
	var _ProfileVIew2 = _interopRequireDefault(_ProfileVIew);
	
	var _LobbyView = __webpack_require__(288);
	
	var _LobbyView2 = _interopRequireDefault(_LobbyView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_React$Component) {
		_inherits(Home, _React$Component);
	
		function Home() {
			_classCallCheck(this, Home);
	
			var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));
	
			_this.state = {
				currentUser: null
			};
			return _this;
		}
	
		_createClass(Home, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var context = this;
				context.setState({
					currentUser: window.sessionStorage.getItem('user')
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'Home' },
					_react2.default.createElement(_ProfileVIew2.default, { currentUser: this.state.currentUser }),
					_react2.default.createElement(_LobbyView2.default, { currentUser: this.state.currentUser })
				);
			}
		}]);
	
		return Home;
	}(_react2.default.Component);
	
	exports.default = Home;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "HomeView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ImageUpload = function (_React$Component) {
	    _inherits(ImageUpload, _React$Component);
	
	    function ImageUpload(props) {
	        _classCallCheck(this, ImageUpload);
	
	        var _this = _possibleConstructorReturn(this, (ImageUpload.__proto__ || Object.getPrototypeOf(ImageUpload)).call(this, props));
	
	        _this.state = {
	            file: '',
	            imagePreviewUrl: ''
	        };
	        return _this;
	    }
	
	    _createClass(ImageUpload, [{
	        key: '_handleSubmit',
	        value: function _handleSubmit(e) {
	            e.preventDefault();
	            // TODO: do something with -> this.state.file
	            //console.log('handle uploading-', this.state.imagePreviewUrl);
	            this.props.loadImage(this.state.imagePreviewUrl);
	            socket.emit("saveImage", { imageUrl: this.state.imagePreviewUrl, user: sessionStorage.getItem('user') });
	            this.setState({
	                imagePreviewUrl: ''
	            });
	        }
	    }, {
	        key: '_handleImageChange',
	        value: function _handleImageChange(e) {
	            var _this2 = this;
	
	            e.preventDefault();
	
	            var reader = new FileReader();
	            var file = e.target.files[0];
	
	            reader.onloadend = function () {
	                _this2.setState({
	                    file: file,
	                    imagePreviewUrl: reader.result
	                });
	            };
	            reader.readAsDataURL(file);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;
	
	            var imagePreviewUrl = this.state.imagePreviewUrl;
	
	            var $imagePreview = null;
	            if (imagePreviewUrl) {
	                $imagePreview = _react2.default.createElement('img', { src: imagePreviewUrl });
	            } else {
	                $imagePreview = _react2.default.createElement(
	                    'div',
	                    { className: 'previewText' },
	                    'Please select an Image for Preview'
	                );
	            }
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'previewComponent' },
	                _react2.default.createElement(
	                    'form',
	                    { onSubmit: function onSubmit(e) {
	                            return _this3._handleSubmit(e);
	                        } },
	                    _react2.default.createElement('input', { className: 'fileInput',
	                        type: 'file',
	                        onChange: function onChange(e) {
	                            return _this3._handleImageChange(e);
	                        } }),
	                    _react2.default.createElement(
	                        'button',
	                        { className: 'submitButton',
	                            type: 'submit',
	                            onClick: function onClick(e) {
	                                return _this3._handleSubmit(e);
	                            } },
	                        'Upload Image'
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'imgPreview' },
	                    $imagePreview
	                )
	            );
	        }
	    }]);
	
	    return ImageUpload;
	}(_react2.default.Component);
	
	exports.default = ImageUpload;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ImageUpload.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Image = function (_React$Component) {
	    _inherits(Image, _React$Component);
	
	    function Image(props) {
	        _classCallCheck(this, Image);
	
	        return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));
	    }
	
	    _createClass(Image, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            socket.emit("getProfileImage", { user: sessionStorage.getItem('user') });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('img', { className: 'profilePic', src: this.props.imageUrl, alt: 'Profile Image' });
	        }
	    }]);
	
	    return Image;
	}(_react2.default.Component);
	
	exports.default = Image;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Image.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

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
	      imageUrl: './../placeholder.jpg'
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
	        )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWVWaWV3LmpzeD81ZDliIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hvbWUvSW1hZ2VVcGxvYWQuanN4P2MzMzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9JbWFnZS5qc3g/MWE5OCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWSWV3LmpzeD9mZDExIl0sIm5hbWVzIjpbIkhvbWUiLCJzdGF0ZSIsImN1cnJlbnRVc2VyIiwiY29udGV4dCIsInNldFN0YXRlIiwid2luZG93Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiQ29tcG9uZW50IiwiSW1hZ2VVcGxvYWQiLCJwcm9wcyIsImZpbGUiLCJpbWFnZVByZXZpZXdVcmwiLCJlIiwicHJldmVudERlZmF1bHQiLCJsb2FkSW1hZ2UiLCJzb2NrZXQiLCJlbWl0IiwiaW1hZ2VVcmwiLCJ1c2VyIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInRhcmdldCIsImZpbGVzIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIiRpbWFnZVByZXZpZXciLCJfaGFuZGxlU3VibWl0IiwiX2hhbmRsZUltYWdlQ2hhbmdlIiwiSW1hZ2UiLCJQcm9maWxlIiwibG9nb3V0IiwiYmluZCIsImltYWdlU3RhdGVDaGFuZ2VDYWxsYmFjayIsIm9uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxJOzs7QUFDTCxrQkFBYztBQUFBOztBQUFBOztBQUViLFNBQUtDLEtBQUwsR0FBYTtBQUNaQyxpQkFBYTtBQURELElBQWI7QUFGYTtBQUtiOzs7O3VDQUVtQjtBQUNuQixRQUFJQyxVQUFVLElBQWQ7QUFDQ0EsWUFBUUMsUUFBUixDQUFpQjtBQUNoQkYs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O0FBQUEsYUFBSyxXQUFVLGVBQWY7QUFDRztBQUFBO0FBQUEsZUFBSyxXQUFVLGFBQWY7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREE7QUFFQTtBQUFBO0FBQUE7QUFBSyxvQkFBSzVCLEtBQUwsQ0FBV1I7QUFBaEIsY0FGQTtBQUdFO0FBQUE7QUFBQSxpQkFBTSxXQUFVLE1BQWhCLEVBQXVCLElBQUcsR0FBMUI7QUFBOEI7QUFBQTtBQUFBLG1CQUFRLFNBQVMsS0FBSzhCLE1BQXRCLEVBQThCLFdBQVUsY0FBeEM7QUFBQTtBQUFBO0FBQTlCO0FBSEYsWUFESDtBQU1HO0FBQUE7QUFBQSxlQUFLLFdBQVUsY0FBZjtBQUNFLDhEQUFPLFdBQVUsWUFBakIsRUFBOEIsVUFBVSxLQUFLL0IsS0FBTCxDQUFXaUIsUUFBbkQ7QUFERjtBQU5ILFVBREQ7QUFXRTtBQUFBO0FBQUEsYUFBSyxXQUFVLGdCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUssa0JBQUtSLEtBQUwsQ0FBV1IsV0FBaEI7QUFBQTtBQUFBLFlBREY7QUFFRSxzRUFGRjtBQUdFLG9FQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUssa0JBQUtRLEtBQUwsQ0FBV1IsV0FBaEI7QUFBQTtBQUFBLFlBSkY7QUFLRSxtRUFMRjtBQU1BLGtFQUFhLFdBQVcsS0FBS2dDLHdCQUE3QjtBQU5BO0FBWEYsUUFERjtBQXNCRDs7OztHQXJEbUIsZ0JBQU0xQixTOzttQkF3RGJ1QixPIiwiZmlsZSI6IjAuOTJiNTlhZTg2MTBkOTMyMWUxMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuL1Byb2ZpbGVWSWV3LmpzeCdcbmltcG9ydCBMb2JieSBmcm9tICcuL0xvYmJ5Vmlldy5qc3gnXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRjdXJyZW50VXNlcjogbnVsbFxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHZhciBjb250ZXh0ID0gdGhpcztcblx0XHRcdGNvbnRleHQuc2V0U3RhdGUoe1xuXHRcdFx0XHRjdXJyZW50VXNlcjogd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKVxuXHRcdFx0fSk7XG5cdH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSG9tZVwiPlxuICAgICAgXHQ8UHJvZmlsZSBjdXJyZW50VXNlcj17dGhpcy5zdGF0ZS5jdXJyZW50VXNlcn0vPlxuICAgICAgXHQ8TG9iYnkgY3VycmVudFVzZXI9e3RoaXMuc3RhdGUuY3VycmVudFVzZXJ9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWVWaWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgSW1hZ2VVcGxvYWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZpbGU6ICcnLFxuICAgICAgICAgICAgaW1hZ2VQcmV2aWV3VXJsOiAnJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9oYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIFRPRE86IGRvIHNvbWV0aGluZyB3aXRoIC0+IHRoaXMuc3RhdGUuZmlsZVxuICAgICAgICAvL2NvbnNvbGUubG9nKCdoYW5kbGUgdXBsb2FkaW5nLScsIHRoaXMuc3RhdGUuaW1hZ2VQcmV2aWV3VXJsKTtcbiAgICAgICAgdGhpcy5wcm9wcy5sb2FkSW1hZ2UodGhpcy5zdGF0ZS5pbWFnZVByZXZpZXdVcmwpO1xuICAgICAgICBzb2NrZXQuZW1pdChcInNhdmVJbWFnZVwiLCB7aW1hZ2VVcmw6IHRoaXMuc3RhdGUuaW1hZ2VQcmV2aWV3VXJsLCB1c2VyOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyl9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbWFnZVByZXZpZXdVcmw6ICcnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9oYW5kbGVJbWFnZUNoYW5nZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcblxuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgICAgICAgICBpbWFnZVByZXZpZXdVcmw6IHJlYWRlci5yZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2ltYWdlUHJldmlld1VybH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgJGltYWdlUHJldmlldyA9IG51bGw7XG4gICAgICAgIGlmIChpbWFnZVByZXZpZXdVcmwpIHtcbiAgICAgICAgICAgICRpbWFnZVByZXZpZXcgPSAoPGltZyBzcmM9e2ltYWdlUHJldmlld1VybH0gLz4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGltYWdlUHJldmlldyA9ICg8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXdUZXh0XCI+UGxlYXNlIHNlbGVjdCBhbiBJbWFnZSBmb3IgUHJldmlldzwvZGl2Pik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3Q29tcG9uZW50XCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+dGhpcy5faGFuZGxlU3VibWl0KGUpfT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZpbGVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT50aGlzLl9oYW5kbGVJbWFnZUNoYW5nZShlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRCdXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKT0+dGhpcy5faGFuZGxlU3VibWl0KGUpfT5VcGxvYWQgSW1hZ2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdQcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgIHskaW1hZ2VQcmV2aWV3fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlVXBsb2FkXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9JbWFnZVVwbG9hZC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgc29ja2V0LmVtaXQoXCJnZXRQcm9maWxlSW1hZ2VcIiwge3VzZXI6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKX0pO1xuICAgIH1cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZmlsZVBpY1wiIHNyYz17dGhpcy5wcm9wcy5pbWFnZVVybH0gYWx0PVwiUHJvZmlsZSBJbWFnZVwiPjwvaW1nPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lL0ltYWdlLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgVXNlclN0YXRzIGZyb20gJy4vVXNlclN0YXRzLmpzeCc7XG5pbXBvcnQgRnJpZW5kU2VhcmNoIGZyb20gJy4vRnJpZW5kU2VhcmNoLmpzeCc7XG5pbXBvcnQgRnJpZW5kVmlldyBmcm9tICcuL0ZyaWVuZFZpZXcuanN4JztcbmltcG9ydCBJbWFnZVVwbG9hZCBmcm9tICcuL0ltYWdlVXBsb2FkLmpzeCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qc3gnXG5cblxuY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgaW1hZ2VVcmw6ICcuLy4uL3BsYWNlaG9sZGVyLmpwZydcbiAgICB9XG5cbiAgICB0aGlzLmxvZ291dCA9IHRoaXMubG9nb3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5pbWFnZVN0YXRlQ2hhbmdlQ2FsbGJhY2sgPSB0aGlzLmltYWdlU3RhdGVDaGFuZ2VDYWxsYmFjay5iaW5kKHRoaXMpO1xuXHR9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgc29ja2V0Lm9uKFwic2V0UHJvZmlsZUltYWdlXCIsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IGRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbWFnZVN0YXRlQ2hhbmdlQ2FsbGJhY2soZGF0YSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGltYWdlVXJsOiBkYXRhXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaW1hZ2VVcmwpO1xuICAgIH1cbiAgbG9nb3V0KCkge1xuICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJywgdGhpcy5wcm9wcy5jdXJyZW50VXNlcik7XG4gICAgY29uc29sZS5sb2coJ0xvZ2dlZCBvdXQnKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlByb2ZpbGVcIj5cbiAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJwcm9maWxlSGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJzTGVmdFwiPlxuICBcdCAgICAgIFx0PGgxPk1hemluZyBGcmllbmRzIDwvaDE+XG4gIFx0ICAgICAgXHQ8aDI+e3RoaXMucHJvcHMuY3VycmVudFVzZXJ9PC9oMj4gXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJMaW5rXCIgdG89XCIvXCI+PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmxvZ291dH0gY2xhc3NOYW1lPVwibG9nb3V0QnV0dG9uXCI+TG9nb3V0PC9idXR0b24+PC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyc1JpZ2h0XCI+XG4gICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwicHJvZmlsZVBpY1wiIGltYWdlVXJsPXt0aGlzLnN0YXRlLmltYWdlVXJsfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICBcdDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVDb250ZW50XCI+XG4gICAgICAgICAgPGgxPnt0aGlzLnByb3BzLmN1cnJlbnRVc2VyfSdzIEZyaWVuZHM8L2gxPlxuICAgICAgICAgIDxGcmllbmRTZWFyY2gvPlxuICAgICAgICAgIDxGcmllbmRWaWV3Lz5cbiAgICAgICAgICA8aDE+e3RoaXMucHJvcHMuY3VycmVudFVzZXJ9J3MgU3RhdHM8L2gxPlxuICAgICAgICAgIDxVc2VyU3RhdHMvPlxuICAgICAgICA8SW1hZ2VVcGxvYWQgbG9hZEltYWdlPXt0aGlzLmltYWdlU3RhdGVDaGFuZ2VDYWxsYmFja30vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvUHJvZmlsZVZJZXcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==