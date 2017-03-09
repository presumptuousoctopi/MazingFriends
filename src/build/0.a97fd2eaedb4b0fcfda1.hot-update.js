webpackHotUpdate(0,{

/***/ 279:
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
	
	var _TitleView = __webpack_require__(280);
	
	var _TitleView2 = _interopRequireDefault(_TitleView);
	
	var _Login = __webpack_require__(281);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	var _Signup = __webpack_require__(282);
	
	var _Signup2 = _interopRequireDefault(_Signup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LoginView = function (_React$Component) {
	  _inherits(LoginView, _React$Component);
	
	  function LoginView() {
	    _classCallCheck(this, LoginView);
	
	    var _this = _possibleConstructorReturn(this, (LoginView.__proto__ || Object.getPrototypeOf(LoginView)).call(this));
	
	    _this.state = {
	      login: true
	    };
	    return _this;
	  }
	
	  _createClass(LoginView, [{
	    key: 'switchPage',
	    value: function switchPage() {
	      this.setState({
	        login: !this.state.login
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'Login' },
	        _react2.default.createElement(_TitleView2.default, null),
	        _react2.default.createElement(
	          'div',
	          { className: 'LoginBox' },
	          this.state.login ? _react2.default.createElement(_Login2.default, null) : _react2.default.createElement(_Signup2.default, null),
	          _react2.default.createElement(
	            'p',
	            null,
	            this.state.login ? 'New?' : "Already have an account?",
	            ' ',
	            _react2.default.createElement(
	              'a',
	              { className: 'Link', onClick: this.switchPage.bind(this) },
	              this.state.login ? "Sign up!" : "Log-in!"
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return LoginView;
	}(_react2.default.Component);
	
	exports.default = LoginView;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "LoginView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

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
	          ),
	          _react2.default.createElement(_Image2.default, { imageUrl: this.state.imageUrl })
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

/***/ },

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TitleView = __webpack_require__(280);
	
	var _TitleView2 = _interopRequireDefault(_TitleView);
	
	var _reactRouter = __webpack_require__(189);
	
	var _axios = __webpack_require__(246);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_React$Component) {
	  _inherits(Home, _React$Component);
	
	  function Home(props) {
	    _classCallCheck(this, Home);
	
	    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
	
	    _this.state = {
	      createRoomName: '',
	      joinRoomName: '',
	      controlsView: false,
	      gameLevel: 2,
	      email: ""
	    };
	    _this.createRoomButton = _this.createRoomButton.bind(_this);
	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.changeEmail = _this.changeEmail.bind(_this);
	    return _this;
	  }
	
	  _createClass(Home, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var context = this;
	      socket.on('roomJoinError', function (message) {
	        _reactRouter.browserHistory.push({
	          pathname: '/home'
	        });
	        alert(message);
	      });
	    }
	  }, {
	    key: 'createRoomButton',
	    value: function createRoomButton() {
	      console.log('currentuser in props: ', this.props.currentUser);
	
	      var roomInfo = {
	        roomname: this.state.createRoomName,
	        level: this.state.gameLevel,
	        user: this.props.currentUser
	      };
	
	      window.socket.emit('createRoom', roomInfo);
	      console.log('room created: ', this.state.createRoomName);
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.setState(_defineProperty({}, e.target.name, e.target.value));
	      console.log(this.state);
	    }
	  }, {
	    key: 'changeEmail',
	    value: function changeEmail(e) {
	      this.setState({
	        email: e.target.value
	      });
	    }
	  }, {
	    key: 'invite',
	    value: function invite(e) {
	      var context = this;
	      e.preventDefault();
	      socket.emit("invite", { user: sessionStorage.getItem('user'), email: context.state.email });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'NewGame' },
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Create New Game'
	        ),
	        _react2.default.createElement(
	          'form',
	          { className: 'NewGameForm' },
	          'Room Name:',
	          _react2.default.createElement('input', { onChange: this.handleChange, name: 'createRoomName' }),
	          ' ',
	          _react2.default.createElement('br', null),
	          'Level:',
	          _react2.default.createElement(
	            'div',
	            { 'class': 'btn-group', 'data-toggle': 'buttons' },
	            _react2.default.createElement(
	              'label',
	              { 'class': 'btn btn-primary active' },
	              _react2.default.createElement('input', { type: 'radio', name: 'options', id: 'option1', autocomplete: 'off' }),
	              ' Easy'
	            ),
	            _react2.default.createElement(
	              'label',
	              { 'class': 'btn btn-primary' },
	              _react2.default.createElement('input', { type: 'radio', name: 'options', id: 'option2', autocomplete: 'off' }),
	              ' Normal'
	            ),
	            _react2.default.createElement(
	              'label',
	              { 'class': 'btn btn-primary' },
	              _react2.default.createElement('input', { type: 'radio', name: 'options', id: 'option3', autocomplete: 'off' }),
	              ' Hard'
	            )
	          ),
	          _react2.default.createElement('br', null),
	          'Invite: ',
	          _react2.default.createElement('input', { type: 'text', onChange: this.changeEmail, placeholder: 'enter an email' }),
	          ' ',
	          _react2.default.createElement(
	            'button',
	            { type: 'submit', onClick: this.invite.bind(this) },
	            'Send'
	          ),
	          ' ',
	          _react2.default.createElement('br', null),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { className: 'Link', to: "/game/" + this.state.createRoomName },
	            _react2.default.createElement(
	              'button',
	              { className: 'newGameButton', onClick: this.createRoomButton },
	              'Create Game'
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Home;
	}(_react2.default.Component);
	
	exports.default = Home;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "NewGame.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
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
	            socket.emit("saveImage", this.state.imagePreviewUrl);
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
	
	"use strict";
	
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
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement("img", { className: "profilePic", src: this.props.imageUrl, alt: "Profile Image" });
	        }
	    }]);
	
	    return Image;
	}(_react2.default.Component);
	
	exports.default = Image;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Image.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpblZpZXcuanN4P2RmNzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9Qcm9maWxlVmlldy5qc3g/NWE4YiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL05ld0dhbWUuanN4P2U1NTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9JbWFnZVVwbG9hZC5qc3g/YzMzMiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0ltYWdlLmpzeD8xYTk4Il0sIm5hbWVzIjpbIkxvZ2luVmlldyIsInN0YXRlIiwibG9naW4iLCJzZXRTdGF0ZSIsInN3aXRjaFBhZ2UiLCJiaW5kIiwiQ29tcG9uZW50IiwiUHJvZmlsZSIsInByb3BzIiwiaW1hZ2VVcmwiLCJsb2dvdXQiLCJpbWFnZVN0YXRlQ2hhbmdlQ2FsbGJhY2siLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsImN1cnJlbnRVc2VyIiwiSG9tZSIsImNyZWF0ZVJvb21OYW1lIiwiam9pblJvb21OYW1lIiwiY29udHJvbHNWaWV3IiwiZ2FtZUxldmVsIiwiZW1haWwiLCJjcmVhdGVSb29tQnV0dG9uIiwiaGFuZGxlQ2hhbmdlIiwiY2hhbmdlRW1haWwiLCJjb250ZXh0Iiwic29ja2V0Iiwib24iLCJtZXNzYWdlIiwicHVzaCIsInBhdGhuYW1lIiwiYWxlcnQiLCJyb29tSW5mbyIsInJvb21uYW1lIiwibGV2ZWwiLCJ1c2VyIiwiZW1pdCIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImdldEl0ZW0iLCJpbnZpdGUiLCJJbWFnZVVwbG9hZCIsImZpbGUiLCJpbWFnZVByZXZpZXdVcmwiLCJsb2FkSW1hZ2UiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiZmlsZXMiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiJGltYWdlUHJldmlldyIsIl9oYW5kbGVTdWJtaXQiLCJfaGFuZGxlSW1hZ2VDaGFuZ2UiLCJJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxTOzs7QUFDSix3QkFBYztBQUFBOztBQUFBOztBQUVaLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFPO0FBREksTUFBYjtBQUZZO0FBS2I7Ozs7a0NBRVk7QUFDWCxZQUFLQyxRQUFMLENBQWM7QUFDWkQsZ0JBQU8sQ0FBQyxLQUFLRCxLQUFMLENBQVdDO0FBRFAsUUFBZDtBQUdEOzs7OEJBRVE7QUFDUCxjQUNFO0FBQUE7QUFBQSxXQUFLLFdBQVUsT0FBZjtBQUNFLGlFQURGO0FBRUU7QUFBQTtBQUFBLGFBQUssV0FBVSxVQUFmO0FBQ0csZ0JBQUtELEtBQUwsQ0FBV0MsS0FBWCxHQUFvQixvREFBcEIsR0FBaUMscURBRHBDO0FBRUU7QUFBQTtBQUFBO0FBQUksa0JBQUtELEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixNQUFuQixHQUE0QiwwQkFBaEM7QUFBQTtBQUE0RDtBQUFBO0FBQUEsaUJBQUcsV0FBVSxNQUFiLEVBQW9CLFNBQVMsS0FBS0UsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBN0I7QUFBMEQsb0JBQUtKLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixVQUFuQixHQUFnQztBQUExRjtBQUE1RDtBQUZGO0FBRkYsUUFERjtBQVNEOzs7O0dBeEJxQixnQkFBTUksUzs7bUJBMkJmTixTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDZjs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUdNTyxPOzs7QUFDTCxvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNaQSxLQURZOztBQUdoQixXQUFLUCxLQUFMLEdBQWE7QUFDVFEsaUJBQVU7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QUFBO0FBQUE7QUFKSixrQkFESjtBQVNJO0FBQUE7QUFBQSx1QkFBSyxXQUFVLFlBQWY7QUFDS2lCO0FBREw7QUFUSixjQURKO0FBZUg7Ozs7R0E1RHFCLGdCQUFNbkQsUzs7bUJBK0RqQnlDLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVmOzs7Ozs7Ozs7Ozs7S0FFTWEsSzs7O0FBQ0Ysb0JBQVlwRCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1RBLEtBRFM7QUFFbEI7Ozs7a0NBQ1M7QUFDTixvQkFDUSx1Q0FBSyxXQUFVLFlBQWYsRUFBNEIsS0FBSyxLQUFLQSxLQUFMLENBQVdDLFFBQTVDLEVBQXNELEtBQUksZUFBMUQsR0FEUjtBQUdIOzs7O0dBUmUsZ0JBQU1ILFM7O21CQVdYc0QsSyIsImZpbGUiOiIwLmE5N2ZkMmVhZWRiNGIwZmNmZGExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBUaXRsZSBmcm9tICcuLy4uL1RpdGxlVmlldy5qc3gnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbi5qc3gnXG5pbXBvcnQgU2lnbnVwIGZyb20gJy4vU2lnbnVwLmpzeCdcblxuY2xhc3MgTG9naW5WaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2dpbjogdHJ1ZSxcbiAgICB9XG4gIH1cblxuICBzd2l0Y2hQYWdlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9naW46ICF0aGlzLnN0YXRlLmxvZ2luLFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTG9naW5cIj5cbiAgICAgICAgPFRpdGxlLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMb2dpbkJveFwiPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmxvZ2luID8gKDxMb2dpbi8+KSA6ICg8U2lnbnVwLz4pfVxuICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmxvZ2luID8gJ05ldz8nIDogXCJBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cIn0gPGEgY2xhc3NOYW1lPVwiTGlua1wiIG9uQ2xpY2s9e3RoaXMuc3dpdGNoUGFnZS5iaW5kKHRoaXMpfT57dGhpcy5zdGF0ZS5sb2dpbiA/IFwiU2lnbiB1cCFcIiA6IFwiTG9nLWluIVwifTwvYT48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTG9naW4vTG9naW5WaWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgVXNlclN0YXRzIGZyb20gJy4vVXNlclN0YXRzLmpzeCc7XG5pbXBvcnQgRnJpZW5kU2VhcmNoIGZyb20gJy4vRnJpZW5kU2VhcmNoLmpzeCc7XG5pbXBvcnQgRnJpZW5kVmlldyBmcm9tICcuL0ZyaWVuZFZpZXcuanN4JztcbmltcG9ydCBJbWFnZVVwbG9hZCBmcm9tICcuL0ltYWdlVXBsb2FkLmpzeCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qc3gnXG5cblxuY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgaW1hZ2VVcmw6ICcnXG4gICAgfVxuXG4gICAgdGhpcy5sb2dvdXQgPSB0aGlzLmxvZ291dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW1hZ2VTdGF0ZUNoYW5nZUNhbGxiYWNrID0gdGhpcy5pbWFnZVN0YXRlQ2hhbmdlQ2FsbGJhY2suYmluZCh0aGlzKTtcblx0fVxuICAgIGltYWdlU3RhdGVDaGFuZ2VDYWxsYmFjayhkYXRhKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaW1hZ2VVcmw6IGRhdGFcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pbWFnZVVybCk7XG4gICAgfVxuICBsb2dvdXQoKSB7XG4gICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInLCB0aGlzLnByb3BzLmN1cnJlbnRVc2VyKTtcbiAgICBjb25zb2xlLmxvZygnTG9nZ2VkIG91dCcpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZmlsZVwiPlxuICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVIZWFkZXJcIj5cblx0ICAgICAgXHQ8aDE+TWF6aW5nIEZyaWVuZHMgPC9oMT5cblx0ICAgICAgXHQ8aDI+e3RoaXMucHJvcHMuY3VycmVudFVzZXJ9PC9oMj4gXG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiTGlua1wiIHRvPVwiL1wiPjxidXR0b24gb25DbGljaz17dGhpcy5sb2dvdXR9IGNsYXNzTmFtZT1cImxvZ291dEJ1dHRvblwiPkxvZ291dDwvYnV0dG9uPjwvTGluaz5cbiAgICAgICAgICA8SW1hZ2UgaW1hZ2VVcmw9e3RoaXMuc3RhdGUuaW1hZ2VVcmx9Lz5cbiAgICAgIFx0PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZUNvbnRlbnRcIj5cbiAgICAgICAgICA8aDE+e3RoaXMucHJvcHMuY3VycmVudFVzZXJ9J3MgRnJpZW5kczwvaDE+XG4gICAgICAgICAgPEZyaWVuZFNlYXJjaC8+XG4gICAgICAgICAgPEZyaWVuZFZpZXcvPlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5jdXJyZW50VXNlcn0ncyBTdGF0czwvaDE+XG4gICAgICAgIFx0PFVzZXJTdGF0cy8+XG4gICAgICAgIDxJbWFnZVVwbG9hZCBsb2FkSW1hZ2U9e3RoaXMuaW1hZ2VTdGF0ZUNoYW5nZUNhbGxiYWNrfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9Qcm9maWxlVmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRpdGxlIGZyb20gJy4vLi4vVGl0bGVWaWV3LmpzeCdcbmltcG9ydCB7IExpbmssIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuICAgICAgY3JlYXRlUm9vbU5hbWU6ICcnLFxuICAgICAgam9pblJvb21OYW1lOiAnJyxcbiAgICAgIGNvbnRyb2xzVmlldzogZmFsc2UsXG4gICAgICBnYW1lTGV2ZWw6IDIsXG4gICAgICBlbWFpbDogXCJcIlxuICAgICAgICB9XG4gICAgdGhpcy5jcmVhdGVSb29tQnV0dG9uID0gdGhpcy5jcmVhdGVSb29tQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlRW1haWwgPSB0aGlzLmNoYW5nZUVtYWlsLmJpbmQodGhpcyk7XG5cdH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgc29ja2V0Lm9uKCdyb29tSm9pbkVycm9yJywgZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiAnL2hvbWUnXG4gICAgICB9KTtcbiAgICAgIGFsZXJ0KG1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG5cblx0Y3JlYXRlUm9vbUJ1dHRvbigpIHtcbiAgICBjb25zb2xlLmxvZygnY3VycmVudHVzZXIgaW4gcHJvcHM6ICcsIHRoaXMucHJvcHMuY3VycmVudFVzZXIpXG5cbiAgICAgdmFyIHJvb21JbmZvID0ge1xuICAgICAgIHJvb21uYW1lOiB0aGlzLnN0YXRlLmNyZWF0ZVJvb21OYW1lLFxuICAgICAgIGxldmVsOiB0aGlzLnN0YXRlLmdhbWVMZXZlbCxcbiAgICAgICB1c2VyOiB0aGlzLnByb3BzLmN1cnJlbnRVc2VyXG4gICAgIH07XG4gXG4gICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnY3JlYXRlUm9vbScsIHJvb21JbmZvKTtcbiAgICBjb25zb2xlLmxvZygncm9vbSBjcmVhdGVkOiAnLCB0aGlzLnN0YXRlLmNyZWF0ZVJvb21OYW1lKVxuXHR9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgfVxuICBjaGFuZ2VFbWFpbChlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVtYWlsOiBlLnRhcmdldC52YWx1ZVxuICAgICAgfSk7XG4gIH1cbiAgaW52aXRlKGUpIHtcbiAgICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNvY2tldC5lbWl0KFwiaW52aXRlXCIsIHt1c2VyOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyksIGVtYWlsOiBjb250ZXh0LnN0YXRlLmVtYWlsfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIk5ld0dhbWVcIj5cbiAgICAgICAgPGgzPkNyZWF0ZSBOZXcgR2FtZTwvaDM+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIk5ld0dhbWVGb3JtXCI+XG4gICAgICAgICAgUm9vbSBOYW1lOjxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IG5hbWU9XCJjcmVhdGVSb29tTmFtZVwiPjwvaW5wdXQ+IDxici8+XG4gICAgICAgICAgTGV2ZWw6XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGFjdGl2ZVwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm9wdGlvbnNcIiBpZD1cIm9wdGlvbjFcIiBhdXRvY29tcGxldGU9XCJvZmZcIiAvPiBFYXN5XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0aW9uc1wiIGlkPVwib3B0aW9uMlwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiLz4gTm9ybWFsXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3B0aW9uc1wiIGlkPVwib3B0aW9uM1wiIGF1dG9jb21wbGV0ZT1cIm9mZlwiLz4gSGFyZFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxici8+XG4gICAgICAgICAgSW52aXRlOiA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5jaGFuZ2VFbWFpbH0gcGxhY2Vob2xkZXI9XCJlbnRlciBhbiBlbWFpbFwiIC8+IDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuaW52aXRlLmJpbmQodGhpcyl9PlNlbmQ8L2J1dHRvbj4gPGJyLz5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJMaW5rXCIgdG89e1wiL2dhbWUvXCIgKyB0aGlzLnN0YXRlLmNyZWF0ZVJvb21OYW1lfT48YnV0dG9uIGNsYXNzTmFtZT1cIm5ld0dhbWVCdXR0b25cIiBvbkNsaWNrPXt0aGlzLmNyZWF0ZVJvb21CdXR0b259PkNyZWF0ZSBHYW1lPC9idXR0b24+PC9MaW5rPlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvTmV3R2FtZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIEltYWdlVXBsb2FkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmaWxlOiAnJyxcbiAgICAgICAgICAgIGltYWdlUHJldmlld1VybDogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBfaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBUT0RPOiBkbyBzb21ldGhpbmcgd2l0aCAtPiB0aGlzLnN0YXRlLmZpbGVcbiAgICAgICAgLy9jb25zb2xlLmxvZygnaGFuZGxlIHVwbG9hZGluZy0nLCB0aGlzLnN0YXRlLmltYWdlUHJldmlld1VybCk7XG4gICAgICAgIHRoaXMucHJvcHMubG9hZEltYWdlKHRoaXMuc3RhdGUuaW1hZ2VQcmV2aWV3VXJsKTtcbiAgICAgICAgc29ja2V0LmVtaXQoXCJzYXZlSW1hZ2VcIiwgdGhpcy5zdGF0ZS5pbWFnZVByZXZpZXdVcmwpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGltYWdlUHJldmlld1VybDogJydcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2hhbmRsZUltYWdlQ2hhbmdlKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuXG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBmaWxlOiBmaWxlLFxuICAgICAgICAgICAgICAgIGltYWdlUHJldmlld1VybDogcmVhZGVyLnJlc3VsdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtpbWFnZVByZXZpZXdVcmx9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgbGV0ICRpbWFnZVByZXZpZXcgPSBudWxsO1xuICAgICAgICBpZiAoaW1hZ2VQcmV2aWV3VXJsKSB7XG4gICAgICAgICAgICAkaW1hZ2VQcmV2aWV3ID0gKDxpbWcgc3JjPXtpbWFnZVByZXZpZXdVcmx9IC8+KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRpbWFnZVByZXZpZXcgPSAoPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3VGV4dFwiPlBsZWFzZSBzZWxlY3QgYW4gSW1hZ2UgZm9yIFByZXZpZXc8L2Rpdj4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld0NvbXBvbmVudFwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSk9PnRoaXMuX2hhbmRsZVN1Ym1pdChlKX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmaWxlSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+dGhpcy5faGFuZGxlSW1hZ2VDaGFuZ2UoZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3VibWl0QnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PnRoaXMuX2hhbmRsZVN1Ym1pdChlKX0+VXBsb2FkIEltYWdlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nUHJldmlld1wiPlxuICAgICAgICAgICAgICAgICAgICB7JGltYWdlUHJldmlld31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVVwbG9hZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvSW1hZ2VVcGxvYWQuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2ZpbGVQaWNcIiBzcmM9e3RoaXMucHJvcHMuaW1hZ2VVcmx9IGFsdD1cIlByb2ZpbGUgSW1hZ2VcIj48L2ltZz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9JbWFnZS5qc3giXSwic291cmNlUm9vdCI6IiJ9