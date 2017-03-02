webpackHotUpdate(0,{

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ChatView = __webpack_require__(245);
	
	var _ChatView2 = _interopRequireDefault(_ChatView);
	
	var _GameOver = __webpack_require__(277);
	
	var _GameOver2 = _interopRequireDefault(_GameOver);
	
	var _Controls = __webpack_require__(278);
	
	var _Controls2 = _interopRequireDefault(_Controls);
	
	var _ProgressBar = __webpack_require__(276);
	
	var _ProgressBar2 = _interopRequireDefault(_ProgressBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Game = function (_React$Component) {
		_inherits(Game, _React$Component);
	
		function Game() {
			_classCallCheck(this, Game);
	
			var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));
	
			_this.state = {
				gameover: false,
				time: null,
				timer: null,
				controls: false
			};
			return _this;
		}
	
		_createClass(Game, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var socket = window.socket;
				var context = this;
	
				socket.on('gameoverlisten', function (time) {
					context.setState({
						gameover: true,
						time: time,
						timer: null
					});
					console.log('gameover!');
				});
	
				socket.on('timer', function (timer) {
					context.setState({
						timer: timer
					});
				});
			}
		}, {
			key: 'controlsClickHandler',
			value: function controlsClickHandler() {
				this.setState({
					controls: !this.state.controls
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'Game' },
					_react2.default.createElement(_ProgressBar2.default, null),
					_react2.default.createElement(_ChatView2.default, { timer: this.state.timer, time: this.state.time, controlsClickHandler: this.controlsClickHandler.bind(this) }),
					this.state.gameover ? _react2.default.createElement(_GameOver2.default, { time: this.state.time }) : '',
					this.state.controls ? _react2.default.createElement(_Controls2.default, { controlsClickHandler: this.controlsClickHandler.bind(this) }) : ''
				);
			}
		}]);
	
		return Game;
	}(_react2.default.Component);
	
	exports.default = Game;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "GameView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 245:
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
	
	var _axios = __webpack_require__(246);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _TextChat = __webpack_require__(271);
	
	var _TextChat2 = _interopRequireDefault(_TextChat);
	
	var _VideoChat = __webpack_require__(275);
	
	var _VideoChat2 = _interopRequireDefault(_VideoChat);
	
	var _ProgressBar = __webpack_require__(276);
	
	var _ProgressBar2 = _interopRequireDefault(_ProgressBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Chat = function (_React$Component) {
	  _inherits(Chat, _React$Component);
	
	  function Chat(props) {
	    _classCallCheck(this, Chat);
	
	    var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, props));
	
	    _this.state = {
	      video: true
	    };
	    console.log(_this.state.text);
	    return _this;
	  }
	
	  _createClass(Chat, [{
	    key: 'switchChat',
	    value: function switchChat() {
	      this.setState({
	        video: false
	      });
	      // if (value === 'video') {
	      //   socket.emit('changedToVideo', '');
	      // }
	    }
	  }, {
	    key: 'stopGame',
	    value: function stopGame() {
	      document.getElementById("canvas").remove();
	      location.reload();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log(this.props);
	      return _react2.default.createElement(
	        'div',
	        { className: 'Chat' },
	        _react2.default.createElement(
	          'div',
	          { className: 'Options' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Mazing Friends'
	          ),
	          this.props.timer ? _react2.default.createElement(
	            'h2',
	            null,
	            this.props.timer
	          ) : _react2.default.createElement(
	            'h2',
	            null,
	            this.props.time
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'optionButtons', onClick: this.props.controlsClickHandler },
	            'Controls'
	          ),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/' },
	            _react2.default.createElement(
	              'button',
	              { className: 'optionButtons', onClick: this.stopGame.bind(this) },
	              'Quit Game'
	            )
	          )
	        ),
	        this.state.video ? _react2.default.createElement(_VideoChat2.default, null) : '',
	        _react2.default.createElement(
	          'form',
	          null,
	          _react2.default.createElement('input', { type: 'radio', name: 'chat', value: 'video', onChange: this.switchChat.bind(this) }),
	          'Video Off'
	        ),
	        _react2.default.createElement(_TextChat2.default, null)
	      );
	    }
	  }]);
	
	  return Chat;
	}(_react2.default.Component);
	
	;
	
	exports.default = Chat;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ChatView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 271:
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
	
	var TextChat = function (_React$Component) {
	  _inherits(TextChat, _React$Component);
	
	  function TextChat() {
	    _classCallCheck(this, TextChat);
	
	    var _this = _possibleConstructorReturn(this, (TextChat.__proto__ || Object.getPrototypeOf(TextChat)).call(this));
	
	    _this.state = {
	      message: '',
	      messages: []
	    };
	    return _this;
	  }
	
	  _createClass(TextChat, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var socket = window.socket;
	      var context = this;
	      socket.on('receiveMessage', function (message) {
	        context.setState({
	          messages: message
	        });
	        console.log('in receiveMessage : ', context.state);
	      });
	
	      this.setState({
	        socket: socket
	      });
	    }
	  }, {
	    key: 'sendMessage',
	    value: function sendMessage(e) {
	      e.preventDefault();
	      window.socket.emit('sendMessage', {
	        message: this.state.message,
	        user: sessionStorage.getItem('user')
	      });
	      this.clearMessage();
	    }
	  }, {
	    key: 'updateInput',
	    value: function updateInput(e) {
	      e.preventDefault();
	      this.setState({ message: e.target.value });
	    }
	  }, {
	    key: 'clearMessage',
	    value: function clearMessage() {
	      this.setState({
	        message: ''
	      });
	    }
	  }, {
	    key: 'onFocus',
	    value: function onFocus() {
	      // disabling 'wasd' for game movement
	      window.camera.keysUp = [];
	      window.camera.keysDown = [];
	      window.camera.keysLeft = [];
	      window.camera.keysRight = [];
	      window.userOnChat = true;
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur() {
	      // enabling 'wasd' for game movement
	      camera.keysUp = [87];
	      camera.keysDown = [83];
	      camera.keysLeft = [65];
	      camera.keysRight = [68];
	      window.userOnChat = false;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'TextChat' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ChatContainer' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ChatBox' },
	            this.state.messages.map(function (messageObj) {
	              return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                  'h3',
	                  null,
	                  messageObj['userId']
	                ),
	                _react2.default.createElement(
	                  'div',
	                  null,
	                  messageObj.message
	                )
	              );
	            })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'TextInput' },
	          _react2.default.createElement(
	            'form',
	            { onSubmit: this.sendMessage.bind(this) },
	            _react2.default.createElement('input', { type: 'text', className: 'chatBar', onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), value: this.state.message, onChange: this.updateInput.bind(this) }),
	            _react2.default.createElement('input', { type: 'submit', value: 'Submit', className: 'chatBtn' })
	          )
	        )
	      );
	    }
	  }]);
	
	  return TextChat;
	}(_react2.default.Component);
	
	exports.default = TextChat;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "TextChat.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 275:
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var VideoChat = function (_React$Component) {
	    _inherits(VideoChat, _React$Component);
	
	    function VideoChat(props) {
	        _classCallCheck(this, VideoChat);
	
	        var _this = _possibleConstructorReturn(this, (VideoChat.__proto__ || Object.getPrototypeOf(VideoChat)).call(this));
	
	        _this.state = {
	            isChannelReady: false,
	            isInitiator: false,
	            isStarted: false
	        };
	        return _this;
	    }
	
	    _createClass(VideoChat, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var context = this;
	            var pc;
	            var localStream;
	            var remoteStream;
	            var turnReady;
	            var room;
	            //stun server for network data
	            var pcConfig = {
	                'iceServers': [{
	                    'url': 'stun:stun.l.google.com:19302'
	                }]
	            };
	            // Set up audio and video regardless of what devices are present.
	            var sdpConstraints = {
	                'mandatory': {
	                    'OfferToReceiveAudio': true,
	                    'OfferToReceiveVideo': true
	                }
	            };
	
	            //your screen is local video- other person is remote video
	            var localVideo = document.querySelector('#localVideo');
	            console.log("local video", localVideo.src);
	            var remoteVideo = document.querySelector('#remoteVideo');
	            socket.on('roomName', function (roomName) {
	                room = roomName;
	                socket.emit('create or join', room);
	                navigator.mediaDevices.getUserMedia({
	                    audio: true,
	                    video: true
	                }).then(gotStream).catch(function (e) {
	                    alert('getUserMedia() error: ' + e.name);
	                });
	                console.log('Room name : ', roomName);
	            });
	
	            socket.on('created', function (room) {
	                console.log('Created room ' + room);
	                context.setState({
	                    isInitiator: true
	                });
	            });
	
	            //once the second person joins, set channel to true
	            socket.on('join', function (room) {
	                console.log('Another peer made a request to join room ' + room);
	                context.setState({
	                    isChannelReady: true
	                });
	            });
	
	            //socket.on('joined', function(room) {
	            //    console.log('joined: ' + room);
	            //    isChannelReady = true;
	            //});
	
	            socket.on('log', function (array) {
	                console.log.apply(console, array);
	            });
	
	            socket.on('full', function (room) {
	                alert("Room is full");
	            });
	
	            function sendMessage(message) {
	                console.log('Client sending message: ', message);
	                socket.emit('message', message);
	            }
	
	            // This client receives a message
	            socket.on('message', function (message) {
	                console.log('Client received message:', message);
	                //if person initiates call, invoke start
	                // else if person receives an offer, second person invokes start
	                //else if person receives an answer from second person, set remote description
	                if (message === 'got user media') {
	                    start();
	                } else if (message.type === 'offer') {
	                    console.log("MAKING AN OFFER");
	                    if (!context.state.isInitiator && !context.state.isStarted) {
	                        start();
	                    }
	                    pcConfig.setRemoteDescription(new RTCSessionDescription(message), function () {
	                        createAnswer();
	                    });
	                } else if (message.type === 'answer' && context.state.isStarted) {
	                    pcConfig.setRemoteDescription(new RTCSessionDescription(message));
	                } else if (message.type === 'candidate' && context.state.isStarted) {
	                    var candidate = new RTCIceCandidate({
	                        sdpMLineIndex: message.label,
	                        candidate: message.candidate
	                    });
	                    console.log("CANDIDATE:", candidate);
	                    pcConfig.addIceCandidate(candidate);
	                } else if (message === 'bye' && context.state.isStarted) {
	                    handleRemoteHangup();
	                }
	            });
	
	            //set the local stream
	            function gotStream(stream) {
	                console.log('Adding local stream.');
	                localVideo.src = window.URL.createObjectURL(stream);
	                console.log("local video source", localVideo.src);
	                localStream = stream;
	                sendMessage('got user media');
	                console.log("is initiator", context.state.isInitiator);
	                if (context.state.isInitiator) {
	                    start();
	                }
	            }
	
	            var constraints = {
	                video: true
	            };
	
	            console.log('Getting user media with constraints', constraints);
	            //
	            //if (location.hostname !== 'localhost') {
	            //    (
	            //        'https://computeengineondemand.appspot.com/turn?username=41784574&key=4080218913'
	            //    );
	            //}
	
	            function start() {
	                console.log('>>>>>>> start ', context.state.isStarted, localStream, context.state.isChannelReady);
	                if (!context.state.isStarted && typeof localStream !== 'undefined' && context.state.isChannelReady) {
	                    console.log('>>>>>> creating peer connection');
	                    createPeerConnection();
	                    pcConfig.addStream(localStream);
	                    context.setState({
	                        isStarted: true
	                    });
	                    console.log('isInitiator', context.state.isInitiator);
	                    if (context.state.isInitiator) {
	                        call();
	                    }
	                }
	            }
	
	            window.onbeforeunload = function () {
	                sendMessage('bye');
	            };
	
	            /////////////////////////////////////////////////////////
	
	            function createPeerConnection() {
	                //create a new peer connection
	                //add the ice handler
	                try {
	                    pcConfig = new RTCPeerConnection(null);
	                    pcConfig.onicecandidate = handleIceCandidate;
	                    pcConfig.onaddstream = handleRemoteStreamAdded;
	                    pcConfig.onremovestream = handleRemoteStreamRemoved;
	                    console.log('Created RTCPeerConnnection');
	                } catch (e) {
	                    console.log('Failed to create PeerConnection, exception: ' + e.message);
	                    alert('Cannot create RTCPeerConnection object.');
	                    return;
	                }
	            }
	
	            function handleIceCandidate(event) {
	                console.log('icecandidate event: ', event);
	                if (event.candidate) {
	                    sendMessage({
	                        type: 'candidate',
	                        label: event.candidate.sdpMLineIndex,
	                        id: event.candidate.sdpMid,
	                        candidate: event.candidate.candidate
	                    });
	                } else {
	                    console.log('End of candidates.');
	                }
	            }
	
	            function handleRemoteStreamAdded(event) {
	                console.log('Remote stream added.');
	                remoteVideo.src = window.URL.createObjectURL(event.stream);
	                remoteStream = event.stream;
	            }
	
	            function handleCreateOfferError(event) {
	                console.log('createOffer() error: ', event);
	            }
	            //initiate the offer and set the local description(your pc)
	            //on response set the remote description(other persons pc)
	            function call() {
	                console.log('Sending offer to peer');
	                pcConfig.createOffer(setLocalAndSendMessage, handleCreateOfferError);
	            }
	
	            function createAnswer() {
	                console.log('Sending answer to peer.');
	                pcConfig.createAnswer().then(setLocalAndSendMessage, onCreateSessionDescriptionError);
	            }
	
	            function setLocalAndSendMessage(sessionDescription) {
	                // Set Opus as the preferred codec in SDP if Opus is present.
	                //  sessionDescription.sdp = preferOpus(sessionDescription.sdp);
	                console.log("SESSIONDESCRIPTION:", sessionDescription);
	                pcConfig.setLocalDescription(sessionDescription);
	                console.log('setLocalAndSendMessage sending message', sessionDescription);
	                sendMessage(sessionDescription);
	            }
	
	            function onCreateSessionDescriptionError(error) {
	                console.log('Failed to create session description: ' + error.toString());
	            }
	            //NOT BEING USED RIGHT NOW
	            //TURN servers- if ICE cant find the external address, traffic will be routed using turn servers
	            //        function requestTurn(turnURL) {
	            //            var turnExists = false;
	            //            for (var i in pcConfig.iceServers) {
	            //                if (pcConfig.iceServers[i].url.substr(0, 5) === 'turn:') {
	            //                    turnExists = true;
	            //                    turnReady = true;
	            //                    break;
	            //                }
	            //            }
	            //            if (!turnExists) {
	            //                console.log('Getting TURN server from ', turnURL);
	            //                // No TURN server. Get one from computeengineondemand.appspot.com:
	            //                var xhr = new XMLHttpRequest();
	            //                xhr.onreadystatechange = function() {
	            //                    if (xhr.readyState === 4 && xhr.status === 200) {
	            //                        var turnServer = JSON.parse(xhr.responseText);
	            //                        console.log('Got TURN server: ', turnServer);
	            //                        pcConfig.iceServers.push({
	            //                            'url': 'turn:' + turnServer.username + '@' + turnServer.turn,
	            //                            'credential': turnServer.password
	            //                        });
	            //                        turnReady = true;
	            //                    }
	            //                };
	            //                xhr.open('GET', turnURL, true);
	            //                xhr.send();
	            //            }
	            //        }
	
	            function handleRemoteStreamAdded(event) {
	                console.log('Remote stream added.');
	                remoteVideo.src = window.URL.createObjectURL(event.stream);
	
	                remoteStream = event.stream;
	            }
	
	            function handleRemoteStreamRemoved(event) {
	                console.log('Remote stream removed. Event: ', event);
	            }
	
	            function hangup() {
	                console.log('Hanging up.');
	                stop();
	                sendMessage('bye');
	            }
	
	            function handleRemoteHangup() {
	                console.log('Session terminated.');
	                stop();
	                context.setState({
	                    isInitiator: false
	                });
	            }
	
	            function stop() {
	                context.setState({
	                    isStarted: false
	                });
	                // isAudioMuted = false;
	                // isVideoMuted = false;
	                pcConfig.close();
	                pcConfig = null;
	                localVideo.src = null;
	                remoteVideo.src = null;
	                document.getElementById("canvas").remove();
	                _reactRouter.browserHistory.push({
	                    pathname: '/'
	                });
	                location.reload();
	            }
	
	            ///////////////////////////////////////////
	            //NOT BEING USED RIGHT NOW
	            // Set Opus as the default audio codec if it's present.
	            //        function preferOpus(sdp) {
	            //            var sdpLines = sdp.split('\r\n');
	            //            var mLineIndex;
	            //            // Search for m line.
	            //            for (var i = 0; i < sdpLines.length; i++) {
	            //                if (sdpLines[i].search('m=audio') !== -1) {
	            //                    mLineIndex = i;
	            //                    break;
	            //                }
	            //            }
	            //            if (mLineIndex === null) {
	            //                return sdp;
	            //            }
	            //
	            //            // If Opus is available, set it as the default in m line.
	            //            for (i = 0; i < sdpLines.length; i++) {
	            //                if (sdpLines[i].search('opus/48000') !== -1) {
	            //                    var opusPayload = extractSdp(sdpLines[i], /:(\d+) opus\/48000/i);
	            //                    if (opusPayload) {
	            //                        sdpLines[mLineIndex] = setDefaultCodec(sdpLines[mLineIndex],
	            //                            opusPayload);
	            //                    }
	            //                    break;
	            //                }
	            //            }
	            //
	            //            // Remove CN in m line and sdp.
	            //            sdpLines = removeCN(sdpLines, mLineIndex);
	            //
	            //            sdp = sdpLines.join('\r\n');
	            //            return sdp;
	            //        }
	
	            //function extractSdp(sdpLine, pattern) {
	            //    var result = sdpLine.match(pattern);
	            //    return result && result.length === 2 ? result[1] : null;
	            //}
	
	            // Set the selected codec to the first in m line.
	            //        function setDefaultCodec(mLine, payload) {
	            //            var elements = mLine.split(' ');
	            //            var newLine = [];
	            //            var index = 0;
	            //            for (var i = 0; i < elements.length; i++) {
	            //                if (index === 3) { // Format of media starts from the fourth.
	            //                    newLine[index++] = payload; // Put target payload to the first.
	            //                }
	            //                if (elements[i] !== payload) {
	            //                    newLine[index++] = elements[i];
	            //                }
	            //            }
	            //            return newLine.join(' ');
	            //        }
	
	            // Strip CN from sdp before CN constraints is ready.
	            //        function removeCN(sdpLines, mLineIndex) {
	            //            var mLineElements = sdpLines[mLineIndex].split(' ');
	            //            // Scan from end for the convenience of removing an item.
	            //            for (var i = sdpLines.length - 1; i >= 0; i--) {
	            //                var payload = extractSdp(sdpLines[i], /a=rtpmap:(\d+) CN\/\d+/i);
	            //                if (payload) {
	            //                    var cnPos = mLineElements.indexOf(payload);
	            //                    if (cnPos !== -1) {
	            //                        // Remove CN payload from m line.
	            //                        mLineElements.splice(cnPos, 1);
	            //                    }
	            //                    // Remove CN line in sdp
	            //                    sdpLines.splice(i, 1);
	            //                }
	            //            }
	            //
	            //            sdpLines[mLineIndex] = mLineElements.join(' ');
	            //            return sdpLines;
	            //        }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { id: 'videos' },
	                _react2.default.createElement('video', { id: 'localVideo', autoPlay: true, muted: true }),
	                _react2.default.createElement('video', { id: 'remoteVideo', autoPlay: true })
	            );
	        }
	    }]);
	
	    return VideoChat;
	}(_react2.default.Component);
	
	exports.default = VideoChat;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "VideoChat.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWVWaWV3LmpzeD9mYjdlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUvQ2hhdFZpZXcuanN4PzkzOWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR2FtZS9UZXh0Q2hhdC5qc3g/MmI3NCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1ZpZGVvQ2hhdC5qc3g/YzJlYiJdLCJuYW1lcyI6WyJHYW1lIiwic3RhdGUiLCJnYW1lb3ZlciIsInRpbWUiLCJ0aW1lciIsImNvbnRyb2xzIiwic29ja2V0Iiwid2luZG93IiwiY29udGV4dCIsIm9uIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29udHJvbHNDbGlja0hhbmRsZXIiLCJiaW5kIiwiQ29tcG9uZW50IiwiQ2hhdCIsInByb3BzIiwidmlkZW8iLCJ0ZXh0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImxvY2F0aW9uIiwicmVsb2FkIiwic3RvcEdhbWUiLCJzd2l0Y2hDaGF0IiwiVGV4dENoYXQiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWl0IiwidXNlciIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImNsZWFyTWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwiY2FtZXJhIiwia2V5c1VwIiwia2V5c0Rvd24iLCJrZXlzTGVmdCIsImtleXNSaWdodCIsInVzZXJPbkNoYXQiLCJtYXAiLCJtZXNzYWdlT2JqIiwic2VuZE1lc3NhZ2UiLCJvbkZvY3VzIiwib25CbHVyIiwidXBkYXRlSW5wdXQiLCJWaWRlb0NoYXQiLCJpc0NoYW5uZWxSZWFkeSIsImlzSW5pdGlhdG9yIiwiaXNTdGFydGVkIiwicGMiLCJsb2NhbFN0cmVhbSIsInJlbW90ZVN0cmVhbSIsInR1cm5SZWFkeSIsInJvb20iLCJwY0NvbmZpZyIsInNkcENvbnN0cmFpbnRzIiwibG9jYWxWaWRlbyIsInF1ZXJ5U2VsZWN0b3IiLCJzcmMiLCJyZW1vdGVWaWRlbyIsInJvb21OYW1lIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJ0aGVuIiwiZ290U3RyZWFtIiwiY2F0Y2giLCJhbGVydCIsIm5hbWUiLCJhcnJheSIsImFwcGx5Iiwic3RhcnQiLCJ0eXBlIiwic2V0UmVtb3RlRGVzY3JpcHRpb24iLCJSVENTZXNzaW9uRGVzY3JpcHRpb24iLCJjcmVhdGVBbnN3ZXIiLCJjYW5kaWRhdGUiLCJSVENJY2VDYW5kaWRhdGUiLCJzZHBNTGluZUluZGV4IiwibGFiZWwiLCJhZGRJY2VDYW5kaWRhdGUiLCJoYW5kbGVSZW1vdGVIYW5ndXAiLCJzdHJlYW0iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjb25zdHJhaW50cyIsImNyZWF0ZVBlZXJDb25uZWN0aW9uIiwiYWRkU3RyZWFtIiwiY2FsbCIsIm9uYmVmb3JldW5sb2FkIiwiUlRDUGVlckNvbm5lY3Rpb24iLCJvbmljZWNhbmRpZGF0ZSIsImhhbmRsZUljZUNhbmRpZGF0ZSIsIm9uYWRkc3RyZWFtIiwiaGFuZGxlUmVtb3RlU3RyZWFtQWRkZWQiLCJvbnJlbW92ZXN0cmVhbSIsImhhbmRsZVJlbW90ZVN0cmVhbVJlbW92ZWQiLCJldmVudCIsImlkIiwic2RwTWlkIiwiaGFuZGxlQ3JlYXRlT2ZmZXJFcnJvciIsImNyZWF0ZU9mZmVyIiwic2V0TG9jYWxBbmRTZW5kTWVzc2FnZSIsIm9uQ3JlYXRlU2Vzc2lvbkRlc2NyaXB0aW9uRXJyb3IiLCJzZXNzaW9uRGVzY3JpcHRpb24iLCJzZXRMb2NhbERlc2NyaXB0aW9uIiwiZXJyb3IiLCJ0b1N0cmluZyIsImhhbmd1cCIsInN0b3AiLCJjbG9zZSIsInB1c2giLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU1BLEk7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TUFBbEM7QUFDQSw2Q0FBZWdHLElBQWYsQ0FBb0I7QUFDaEJDLCtCQUFVO0FBRE0sa0JBQXBCO0FBR0FoRywwQkFBU0MsTUFBVDtBQUNIOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVE7QUFDQTtBQUNBO0FBQ0E7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSzs7O2tDQUNTO0FBQ04sb0JBQ0k7QUFBQTtBQUFBLG1CQUFLLElBQUcsUUFBUjtBQUNJLDBEQUFPLElBQUcsWUFBVixFQUF1QixjQUF2QixFQUFnQyxXQUFoQyxHQURKO0FBRUksMERBQU8sSUFBRyxhQUFWLEVBQXdCLGNBQXhCO0FBRkosY0FESjtBQU1IOzs7O0dBblltQixnQkFBTVQsUzs7bUJBc1lmb0MsUyIsImZpbGUiOiIwLjBiMDkzN2UxNDkzMTMyOWM0YzEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoYXQgZnJvbSAnLi9DaGF0Vmlldy5qc3gnO1xuaW1wb3J0IEdhbWVPdmVyIGZyb20gJy4vR2FtZU92ZXIuanN4J1xuaW1wb3J0IENvbnRyb2xzIGZyb20gJy4vQ29udHJvbHMuanN4J1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vUHJvZ3Jlc3NCYXIuanN4J1xuXG5jbGFzcyBHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRnYW1lb3ZlcjogZmFsc2UsXG5cdFx0XHR0aW1lOiBudWxsLFxuXHRcdFx0dGltZXI6IG51bGwsXG5cdFx0XHRjb250cm9sczogZmFsc2Vcblx0XHR9XG5cdH0gXG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dmFyIHNvY2tldCA9IHdpbmRvdy5zb2NrZXQ7XG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzO1xuXHRcdFxuXHRcdHNvY2tldC5vbignZ2FtZW92ZXJsaXN0ZW4nLCBmdW5jdGlvbih0aW1lKSB7XG5cdFx0XHRcdGNvbnRleHQuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGdhbWVvdmVyOiB0cnVlLFxuXHRcdFx0XHRcdHRpbWU6IHRpbWUsXG5cdFx0XHRcdFx0dGltZXI6IG51bGxcblx0XHRcdFx0fSlcblx0XHRjb25zb2xlLmxvZygnZ2FtZW92ZXIhJylcblx0XHRcdH0pO1xuXG5cdFx0c29ja2V0Lm9uKCd0aW1lcicsIGZ1bmN0aW9uKHRpbWVyKSB7XG5cdFx0XHRcdGNvbnRleHQuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHRpbWVyOiB0aW1lclxuXHRcdFx0XHR9KVxuXHRcdFx0fSk7XG4gIH1cblxuICBjb250cm9sc0NsaWNrSGFuZGxlcigpIHtcbiAgXHR0aGlzLnNldFN0YXRlKHtcbiAgXHRcdGNvbnRyb2xzOiAhdGhpcy5zdGF0ZS5jb250cm9sc1xuICBcdH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR2FtZVwiPlxuXHRcdCAgPFByb2dyZXNzQmFyLz5cbiAgICAgIFx0PENoYXQgdGltZXI9e3RoaXMuc3RhdGUudGltZXJ9IHRpbWU9e3RoaXMuc3RhdGUudGltZX0gY29udHJvbHNDbGlja0hhbmRsZXI9e3RoaXMuY29udHJvbHNDbGlja0hhbmRsZXIuYmluZCh0aGlzKX0gLz5cbiAgICAgIFx0e3RoaXMuc3RhdGUuZ2FtZW92ZXIgPyA8R2FtZU92ZXIgdGltZT17dGhpcy5zdGF0ZS50aW1lfS8+IDogJyd9XG4gICAgICBcdHt0aGlzLnN0YXRlLmNvbnRyb2xzID8gPENvbnRyb2xzIGNvbnRyb2xzQ2xpY2tIYW5kbGVyPXt0aGlzLmNvbnRyb2xzQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyl9IC8+IDogJyd9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9HYW1lVmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBUZXh0Q2hhdCBmcm9tICcuL1RleHRDaGF0LmpzeCdcbmltcG9ydCBWaWRlb0NoYXQgZnJvbSAnLi9WaWRlb0NoYXQuanN4JztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuL1Byb2dyZXNzQmFyLmpzeCdcblxuY2xhc3MgQ2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aWRlbzogdHJ1ZVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRleHQpXG4gIH1cblxuICBzd2l0Y2hDaGF0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlkZW86IGZhbHNlXG4gICAgfSlcbiAgICAvLyBpZiAodmFsdWUgPT09ICd2aWRlbycpIHtcbiAgICAvLyAgIHNvY2tldC5lbWl0KCdjaGFuZ2VkVG9WaWRlbycsICcnKTtcbiAgICAvLyB9XG4gIH1cblxuICBzdG9wR2FtZSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKS5yZW1vdmUoKTtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGF0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiT3B0aW9uc1wiPlxuICAgICAgICAgIDxoMT5NYXppbmcgRnJpZW5kczwvaDE+XG4gICAgICAgICAge3RoaXMucHJvcHMudGltZXIgPyA8aDI+e3RoaXMucHJvcHMudGltZXJ9PC9oMj4gOiA8aDI+e3RoaXMucHJvcHMudGltZX08L2gyPn1cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbkJ1dHRvbnNcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNvbnRyb2xzQ2xpY2tIYW5kbGVyfT5Db250cm9sczwvYnV0dG9uPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPjxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uQnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMuc3RvcEdhbWUuYmluZCh0aGlzKX0+UXVpdCBHYW1lPC9idXR0b24+PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMuc3RhdGUudmlkZW8gPyA8VmlkZW9DaGF0Lz4gOiAnJyB9XG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNoYXRcIiB2YWx1ZT1cInZpZGVvXCIgb25DaGFuZ2U9e3RoaXMuc3dpdGNoQ2hhdC5iaW5kKHRoaXMpfS8+VmlkZW8gT2ZmXG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8VGV4dENoYXQvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbWUvQ2hhdFZpZXcuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgVGV4dENoYXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZXNzYWdlOiAnJyxcbiAgICAgIG1lc3NhZ2VzOiBbXVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgc29ja2V0ID0gd2luZG93LnNvY2tldDtcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgc29ja2V0Lm9uKCdyZWNlaXZlTWVzc2FnZScsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICBtZXNzYWdlczogbWVzc2FnZVxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnaW4gcmVjZWl2ZU1lc3NhZ2UgOiAnLCBjb250ZXh0LnN0YXRlKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc29ja2V0OiBzb2NrZXRcbiAgICB9KTtcbiAgfVxuICBcbiAgc2VuZE1lc3NhZ2UoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ3NlbmRNZXNzYWdlJywge1xuICAgICAgbWVzc2FnZTogdGhpcy5zdGF0ZS5tZXNzYWdlLFxuICAgICAgdXNlcjogc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpXG4gICAgfSk7XG4gICAgdGhpcy5jbGVhck1lc3NhZ2UoKVxuICB9XG5cbiAgdXBkYXRlSW5wdXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiBlLnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgY2xlYXJNZXNzYWdlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWVzc2FnZTogJydcbiAgICB9KVxuICB9XG5cbiAgb25Gb2N1cygpIHtcbiAgICAvLyBkaXNhYmxpbmcgJ3dhc2QnIGZvciBnYW1lIG1vdmVtZW50XG4gICAgd2luZG93LmNhbWVyYS5rZXlzVXAgPSBbXTtcbiAgICB3aW5kb3cuY2FtZXJhLmtleXNEb3duID0gW107IFxuICAgIHdpbmRvdy5jYW1lcmEua2V5c0xlZnQgPSBbXTsgXG4gICAgd2luZG93LmNhbWVyYS5rZXlzUmlnaHQgPSBbXTtcbiAgICB3aW5kb3cudXNlck9uQ2hhdCA9IHRydWU7XG4gICAgXG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgLy8gZW5hYmxpbmcgJ3dhc2QnIGZvciBnYW1lIG1vdmVtZW50XG4gICAgY2FtZXJhLmtleXNVcCA9IFs4N107XG4gICAgY2FtZXJhLmtleXNEb3duID0gWzgzXTsgXG4gICAgY2FtZXJhLmtleXNMZWZ0ID0gWzY1XTsgXG4gICAgY2FtZXJhLmtleXNSaWdodCA9IFs2OF07XG4gICAgd2luZG93LnVzZXJPbkNoYXQgPSBmYWxzZTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDaGF0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhdENvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhdEJveFwiPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZXMubWFwKCAobWVzc2FnZU9iaikgPT4gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMz57bWVzc2FnZU9ialsndXNlcklkJ119PC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2PnttZXNzYWdlT2JqLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRJbnB1dFwiPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnNlbmRNZXNzYWdlLmJpbmQodGhpcyl9PiBcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImNoYXRCYXJcIiBvbkZvY3VzPXt0aGlzLm9uRm9jdXMuYmluZCh0aGlzKX0gb25CbHVyPXt0aGlzLm9uQmx1ci5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5tZXNzYWdlfSBvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIGNsYXNzTmFtZT1cImNoYXRCdG5cIiAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRleHRDaGF0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbWUvVGV4dENoYXQuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7YnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmNsYXNzIFZpZGVvQ2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyICgpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc0NoYW5uZWxSZWFkeTogZmFsc2UsXG4gICAgICAgICAgICBpc0luaXRpYXRvcjogZmFsc2UsXG4gICAgICAgICAgICBpc1N0YXJ0ZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgdmFyIHBjO1xuICAgICAgICB2YXIgbG9jYWxTdHJlYW07XG4gICAgICAgIHZhciByZW1vdGVTdHJlYW07XG4gICAgICAgIHZhciB0dXJuUmVhZHk7XG4gICAgICAgIHZhciByb29tO1xuICAgICAgICAvL3N0dW4gc2VydmVyIGZvciBuZXR3b3JrIGRhdGFcbiAgICAgICAgdmFyIHBjQ29uZmlnID0ge1xuICAgICAgICAgICAgJ2ljZVNlcnZlcnMnOiBbe1xuICAgICAgICAgICAgICAgICd1cmwnOiAnc3R1bjpzdHVuLmwuZ29vZ2xlLmNvbToxOTMwMidcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG4gICAgICAgIC8vIFNldCB1cCBhdWRpbyBhbmQgdmlkZW8gcmVnYXJkbGVzcyBvZiB3aGF0IGRldmljZXMgYXJlIHByZXNlbnQuXG4gICAgICAgIHZhciBzZHBDb25zdHJhaW50cyA9IHtcbiAgICAgICAgICAgICdtYW5kYXRvcnknOiB7XG4gICAgICAgICAgICAgICAgJ09mZmVyVG9SZWNlaXZlQXVkaW8nOiB0cnVlLFxuICAgICAgICAgICAgICAgICdPZmZlclRvUmVjZWl2ZVZpZGVvJzogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8veW91ciBzY3JlZW4gaXMgbG9jYWwgdmlkZW8tIG90aGVyIHBlcnNvbiBpcyByZW1vdGUgdmlkZW9cbiAgICAgICAgdmFyIGxvY2FsVmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYWxWaWRlbycpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvY2FsIHZpZGVvXCIsIGxvY2FsVmlkZW8uc3JjKTtcbiAgICAgICAgdmFyIHJlbW90ZVZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW90ZVZpZGVvJyk7XG4gICAgICAgIHNvY2tldC5vbigncm9vbU5hbWUnLCBmdW5jdGlvbihyb29tTmFtZSkge1xuICAgICAgICAgICAgcm9vbSA9IHJvb21OYW1lO1xuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NyZWF0ZSBvciBqb2luJywgcm9vbSk7XG4gICAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICAgICAgICAgICAgYXVkaW86IHRydWUsXG4gICAgICAgICAgICAgICAgdmlkZW86IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZ290U3RyZWFtKVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdnZXRVc2VyTWVkaWEoKSBlcnJvcjogJyArIGUubmFtZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUm9vbSBuYW1lIDogJywgcm9vbU5hbWUpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIHNvY2tldC5vbignY3JlYXRlZCcsIGZ1bmN0aW9uKHJvb20pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIHJvb20gJyArIHJvb20pO1xuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNJbml0aWF0b3I6IHRydWVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSk7XG5cbi8vb25jZSB0aGUgc2Vjb25kIHBlcnNvbiBqb2lucywgc2V0IGNoYW5uZWwgdG8gdHJ1ZVxuICAgICAgICBzb2NrZXQub24oJ2pvaW4nLCBmdW5jdGlvbiAocm9vbSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQW5vdGhlciBwZWVyIG1hZGUgYSByZXF1ZXN0IHRvIGpvaW4gcm9vbSAnICsgcm9vbSk7XG4gICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0NoYW5uZWxSZWFkeTogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9zb2NrZXQub24oJ2pvaW5lZCcsIGZ1bmN0aW9uKHJvb20pIHtcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2coJ2pvaW5lZDogJyArIHJvb20pO1xuICAgICAgICAvLyAgICBpc0NoYW5uZWxSZWFkeSA9IHRydWU7XG4gICAgICAgIC8vfSk7XG5cbiAgICAgICAgc29ja2V0Lm9uKCdsb2cnLCBmdW5jdGlvbihhcnJheSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJyYXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzb2NrZXQub24oJ2Z1bGwnLCBmdW5jdGlvbihyb29tKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiUm9vbSBpcyBmdWxsXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBzZW5kTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2xpZW50IHNlbmRpbmcgbWVzc2FnZTogJywgbWVzc2FnZSk7XG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgICAgICB9XG5cbi8vIFRoaXMgY2xpZW50IHJlY2VpdmVzIGEgbWVzc2FnZVxuICAgICAgICBzb2NrZXQub24oJ21lc3NhZ2UnLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2xpZW50IHJlY2VpdmVkIG1lc3NhZ2U6JywgbWVzc2FnZSk7XG4gICAgICAgICAgICAvL2lmIHBlcnNvbiBpbml0aWF0ZXMgY2FsbCwgaW52b2tlIHN0YXJ0XG4gICAgICAgICAgICAvLyBlbHNlIGlmIHBlcnNvbiByZWNlaXZlcyBhbiBvZmZlciwgc2Vjb25kIHBlcnNvbiBpbnZva2VzIHN0YXJ0XG4gICAgICAgICAgICAvL2Vsc2UgaWYgcGVyc29uIHJlY2VpdmVzIGFuIGFuc3dlciBmcm9tIHNlY29uZCBwZXJzb24sIHNldCByZW1vdGUgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIGlmIChtZXNzYWdlID09PSAnZ290IHVzZXIgbWVkaWEnKSB7XG4gICAgICAgICAgICAgICAgc3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnb2ZmZXInKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNQUtJTkcgQU4gT0ZGRVJcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFjb250ZXh0LnN0YXRlLmlzSW5pdGlhdG9yICYmICFjb250ZXh0LnN0YXRlLmlzU3RhcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwY0NvbmZpZy5zZXRSZW1vdGVEZXNjcmlwdGlvbihuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKG1lc3NhZ2UpLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVBbnN3ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnYW5zd2VyJyAmJiBjb250ZXh0LnN0YXRlLmlzU3RhcnRlZCkge1xuICAgICAgICAgICAgICAgIHBjQ29uZmlnLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24obWVzc2FnZSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjYW5kaWRhdGUnICYmIGNvbnRleHQuc3RhdGUuaXNTdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IG5ldyBSVENJY2VDYW5kaWRhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzZHBNTGluZUluZGV4OiBtZXNzYWdlLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGU6IG1lc3NhZ2UuY2FuZGlkYXRlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDQU5ESURBVEU6XCIsIGNhbmRpZGF0ZSk7XG4gICAgICAgICAgICAgICAgcGNDb25maWcuYWRkSWNlQ2FuZGlkYXRlKGNhbmRpZGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdieWUnICYmIGNvbnRleHQuc3RhdGUuaXNTdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlUmVtb3RlSGFuZ3VwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbi8vc2V0IHRoZSBsb2NhbCBzdHJlYW1cbiAgICAgICAgZnVuY3Rpb24gZ290U3RyZWFtKHN0cmVhbSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkZGluZyBsb2NhbCBzdHJlYW0uJyk7XG4gICAgICAgICAgICBsb2NhbFZpZGVvLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvY2FsIHZpZGVvIHNvdXJjZVwiLCBsb2NhbFZpZGVvLnNyYyk7XG4gICAgICAgICAgICBsb2NhbFN0cmVhbSA9IHN0cmVhbTtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKCdnb3QgdXNlciBtZWRpYScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpcyBpbml0aWF0b3JcIiwgY29udGV4dC5zdGF0ZS5pc0luaXRpYXRvcik7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5zdGF0ZS5pc0luaXRpYXRvcikge1xuICAgICAgICAgICAgICAgIHN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29uc3RyYWludHMgPSB7XG4gICAgICAgICAgICB2aWRlbzogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdHZXR0aW5nIHVzZXIgbWVkaWEgd2l0aCBjb25zdHJhaW50cycsIGNvbnN0cmFpbnRzKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy9pZiAobG9jYXRpb24uaG9zdG5hbWUgIT09ICdsb2NhbGhvc3QnKSB7XG4gICAgICAgIC8vICAgIChcbiAgICAgICAgLy8gICAgICAgICdodHRwczovL2NvbXB1dGVlbmdpbmVvbmRlbWFuZC5hcHBzcG90LmNvbS90dXJuP3VzZXJuYW1lPTQxNzg0NTc0JmtleT00MDgwMjE4OTEzJ1xuICAgICAgICAvLyAgICApO1xuICAgICAgICAvL31cblxuICAgICAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4+IHN0YXJ0ICcsIGNvbnRleHQuc3RhdGUuaXNTdGFydGVkLCBsb2NhbFN0cmVhbSwgY29udGV4dC5zdGF0ZS5pc0NoYW5uZWxSZWFkeSk7XG4gICAgICAgICAgICBpZiAoIWNvbnRleHQuc3RhdGUuaXNTdGFydGVkICYmIHR5cGVvZiBsb2NhbFN0cmVhbSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29udGV4dC5zdGF0ZS5pc0NoYW5uZWxSZWFkeSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4gY3JlYXRpbmcgcGVlciBjb25uZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGVlckNvbm5lY3Rpb24oKTtcbiAgICAgICAgICAgICAgICBwY0NvbmZpZy5hZGRTdHJlYW0obG9jYWxTdHJlYW0pO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBpc1N0YXJ0ZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaXNJbml0aWF0b3InLCBjb250ZXh0LnN0YXRlLmlzSW5pdGlhdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGV4dC5zdGF0ZS5pc0luaXRpYXRvcikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZW5kTWVzc2FnZSgnYnllJyk7XG4gICAgICAgIH07XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVBlZXJDb25uZWN0aW9uKCkge1xuICAgICAgICAgICAgLy9jcmVhdGUgYSBuZXcgcGVlciBjb25uZWN0aW9uXG4gICAgICAgICAgICAvL2FkZCB0aGUgaWNlIGhhbmRsZXJcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGNDb25maWcgPSBuZXcgUlRDUGVlckNvbm5lY3Rpb24obnVsbCk7XG4gICAgICAgICAgICAgICAgcGNDb25maWcub25pY2VjYW5kaWRhdGUgPSBoYW5kbGVJY2VDYW5kaWRhdGU7XG4gICAgICAgICAgICAgICAgcGNDb25maWcub25hZGRzdHJlYW0gPSBoYW5kbGVSZW1vdGVTdHJlYW1BZGRlZDtcbiAgICAgICAgICAgICAgICBwY0NvbmZpZy5vbnJlbW92ZXN0cmVhbSA9IGhhbmRsZVJlbW90ZVN0cmVhbVJlbW92ZWQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgUlRDUGVlckNvbm5uZWN0aW9uJyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBjcmVhdGUgUGVlckNvbm5lY3Rpb24sIGV4Y2VwdGlvbjogJyArIGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ0Nhbm5vdCBjcmVhdGUgUlRDUGVlckNvbm5lY3Rpb24gb2JqZWN0LicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUljZUNhbmRpZGF0ZShldmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ljZWNhbmRpZGF0ZSBldmVudDogJywgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNhbmRpZGF0ZSkge1xuICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NhbmRpZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBldmVudC5jYW5kaWRhdGUuc2RwTUxpbmVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNaWQsXG4gICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZTogZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRW5kIG9mIGNhbmRpZGF0ZXMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdGVTdHJlYW1BZGRlZChldmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlbW90ZSBzdHJlYW0gYWRkZWQuJyk7XG4gICAgICAgICAgICByZW1vdGVWaWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC5zdHJlYW0pO1xuICAgICAgICAgICAgcmVtb3RlU3RyZWFtID0gZXZlbnQuc3RyZWFtO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ3JlYXRlT2ZmZXJFcnJvcihldmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZU9mZmVyKCkgZXJyb3I6ICcsIGV2ZW50KTtcbiAgICAgICAgfVxuLy9pbml0aWF0ZSB0aGUgb2ZmZXIgYW5kIHNldCB0aGUgbG9jYWwgZGVzY3JpcHRpb24oeW91ciBwYylcbi8vb24gcmVzcG9uc2Ugc2V0IHRoZSByZW1vdGUgZGVzY3JpcHRpb24ob3RoZXIgcGVyc29ucyBwYylcbiAgICAgICAgZnVuY3Rpb24gY2FsbCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZW5kaW5nIG9mZmVyIHRvIHBlZXInKTtcbiAgICAgICAgICAgIHBjQ29uZmlnLmNyZWF0ZU9mZmVyKHNldExvY2FsQW5kU2VuZE1lc3NhZ2UsIGhhbmRsZUNyZWF0ZU9mZmVyRXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlQW5zd2VyKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlbmRpbmcgYW5zd2VyIHRvIHBlZXIuJyk7XG4gICAgICAgICAgICBwY0NvbmZpZy5jcmVhdGVBbnN3ZXIoKS50aGVuKFxuICAgICAgICAgICAgICAgIHNldExvY2FsQW5kU2VuZE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgb25DcmVhdGVTZXNzaW9uRGVzY3JpcHRpb25FcnJvclxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldExvY2FsQW5kU2VuZE1lc3NhZ2Uoc2Vzc2lvbkRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAvLyBTZXQgT3B1cyBhcyB0aGUgcHJlZmVycmVkIGNvZGVjIGluIFNEUCBpZiBPcHVzIGlzIHByZXNlbnQuXG4gICAgICAgICAgICAvLyAgc2Vzc2lvbkRlc2NyaXB0aW9uLnNkcCA9IHByZWZlck9wdXMoc2Vzc2lvbkRlc2NyaXB0aW9uLnNkcCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNFU1NJT05ERVNDUklQVElPTjpcIiwgc2Vzc2lvbkRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHBjQ29uZmlnLnNldExvY2FsRGVzY3JpcHRpb24oc2Vzc2lvbkRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXRMb2NhbEFuZFNlbmRNZXNzYWdlIHNlbmRpbmcgbWVzc2FnZScsIHNlc3Npb25EZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBzZW5kTWVzc2FnZShzZXNzaW9uRGVzY3JpcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25DcmVhdGVTZXNzaW9uRGVzY3JpcHRpb25FcnJvcihlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBjcmVhdGUgc2Vzc2lvbiBkZXNjcmlwdGlvbjogJyArIGVycm9yLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vTk9UIEJFSU5HIFVTRUQgUklHSFQgTk9XXG4vL1RVUk4gc2VydmVycy0gaWYgSUNFIGNhbnQgZmluZCB0aGUgZXh0ZXJuYWwgYWRkcmVzcywgdHJhZmZpYyB3aWxsIGJlIHJvdXRlZCB1c2luZyB0dXJuIHNlcnZlcnNcbi8vICAgICAgICBmdW5jdGlvbiByZXF1ZXN0VHVybih0dXJuVVJMKSB7XG4vLyAgICAgICAgICAgIHZhciB0dXJuRXhpc3RzID0gZmFsc2U7XG4vLyAgICAgICAgICAgIGZvciAodmFyIGkgaW4gcGNDb25maWcuaWNlU2VydmVycykge1xuLy8gICAgICAgICAgICAgICAgaWYgKHBjQ29uZmlnLmljZVNlcnZlcnNbaV0udXJsLnN1YnN0cigwLCA1KSA9PT0gJ3R1cm46Jykge1xuLy8gICAgICAgICAgICAgICAgICAgIHR1cm5FeGlzdHMgPSB0cnVlO1xuLy8gICAgICAgICAgICAgICAgICAgIHR1cm5SZWFkeSA9IHRydWU7XG4vLyAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgaWYgKCF0dXJuRXhpc3RzKSB7XG4vLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR2V0dGluZyBUVVJOIHNlcnZlciBmcm9tICcsIHR1cm5VUkwpO1xuLy8gICAgICAgICAgICAgICAgLy8gTm8gVFVSTiBzZXJ2ZXIuIEdldCBvbmUgZnJvbSBjb21wdXRlZW5naW5lb25kZW1hbmQuYXBwc3BvdC5jb206XG4vLyAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4vLyAgICAgICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHVyblNlcnZlciA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb3QgVFVSTiBzZXJ2ZXI6ICcsIHR1cm5TZXJ2ZXIpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICBwY0NvbmZpZy5pY2VTZXJ2ZXJzLnB1c2goe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VybCc6ICd0dXJuOicgKyB0dXJuU2VydmVyLnVzZXJuYW1lICsgJ0AnICsgdHVyblNlcnZlci50dXJuLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NyZWRlbnRpYWwnOiB0dXJuU2VydmVyLnBhc3N3b3JkXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB0dXJuUmVhZHkgPSB0cnVlO1xuLy8gICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgIH07XG4vLyAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgdHVyblVSTCwgdHJ1ZSk7XG4vLyAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuLy8gICAgICAgICAgICB9XG4vLyAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW90ZVN0cmVhbUFkZGVkKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3RlIHN0cmVhbSBhZGRlZC4nKTtcbiAgICAgICAgICAgIHJlbW90ZVZpZGVvLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50LnN0cmVhbSk7XG5cbiAgICAgICAgICAgIHJlbW90ZVN0cmVhbSA9IGV2ZW50LnN0cmVhbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW90ZVN0cmVhbVJlbW92ZWQoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdGUgc3RyZWFtIHJlbW92ZWQuIEV2ZW50OiAnLCBldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYW5ndXAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSGFuZ2luZyB1cC4nKTtcbiAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKCdieWUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW90ZUhhbmd1cCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXNzaW9uIHRlcm1pbmF0ZWQuJyk7XG4gICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0luaXRpYXRvcjogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGlzU3RhcnRlZDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gaXNBdWRpb011dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBpc1ZpZGVvTXV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHBjQ29uZmlnLmNsb3NlKCk7XG4gICAgICAgICAgICBwY0NvbmZpZyA9IG51bGw7XG4gICAgICAgICAgICBsb2NhbFZpZGVvLnNyYyA9IG51bGw7XG4gICAgICAgICAgICByZW1vdGVWaWRlby5zcmMgPSBudWxsO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJy8nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vTk9UIEJFSU5HIFVTRUQgUklHSFQgTk9XXG4vLyBTZXQgT3B1cyBhcyB0aGUgZGVmYXVsdCBhdWRpbyBjb2RlYyBpZiBpdCdzIHByZXNlbnQuXG4vLyAgICAgICAgZnVuY3Rpb24gcHJlZmVyT3B1cyhzZHApIHtcbi8vICAgICAgICAgICAgdmFyIHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXHJcXG4nKTtcbi8vICAgICAgICAgICAgdmFyIG1MaW5lSW5kZXg7XG4vLyAgICAgICAgICAgIC8vIFNlYXJjaCBmb3IgbSBsaW5lLlxuLy8gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNkcExpbmVzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICAgICBpZiAoc2RwTGluZXNbaV0uc2VhcmNoKCdtPWF1ZGlvJykgIT09IC0xKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgbUxpbmVJbmRleCA9IGk7XG4vLyAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgaWYgKG1MaW5lSW5kZXggPT09IG51bGwpIHtcbi8vICAgICAgICAgICAgICAgIHJldHVybiBzZHA7XG4vLyAgICAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgICAgIC8vIElmIE9wdXMgaXMgYXZhaWxhYmxlLCBzZXQgaXQgYXMgdGhlIGRlZmF1bHQgaW4gbSBsaW5lLlxuLy8gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2RwTGluZXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgICAgIGlmIChzZHBMaW5lc1tpXS5zZWFyY2goJ29wdXMvNDgwMDAnKSAhPT0gLTEpIHtcbi8vICAgICAgICAgICAgICAgICAgICB2YXIgb3B1c1BheWxvYWQgPSBleHRyYWN0U2RwKHNkcExpbmVzW2ldLCAvOihcXGQrKSBvcHVzXFwvNDgwMDAvaSk7XG4vLyAgICAgICAgICAgICAgICAgICAgaWYgKG9wdXNQYXlsb2FkKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHNkcExpbmVzW21MaW5lSW5kZXhdID0gc2V0RGVmYXVsdENvZGVjKHNkcExpbmVzW21MaW5lSW5kZXhdLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B1c1BheWxvYWQpO1xuLy8gICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgICAgLy8gUmVtb3ZlIENOIGluIG0gbGluZSBhbmQgc2RwLlxuLy8gICAgICAgICAgICBzZHBMaW5lcyA9IHJlbW92ZUNOKHNkcExpbmVzLCBtTGluZUluZGV4KTtcbi8vXG4vLyAgICAgICAgICAgIHNkcCA9IHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xuLy8gICAgICAgICAgICByZXR1cm4gc2RwO1xuLy8gICAgICAgIH1cblxuICAgICAgICAvL2Z1bmN0aW9uIGV4dHJhY3RTZHAoc2RwTGluZSwgcGF0dGVybikge1xuICAgICAgICAvLyAgICB2YXIgcmVzdWx0ID0gc2RwTGluZS5tYXRjaChwYXR0ZXJuKTtcbiAgICAgICAgLy8gICAgcmV0dXJuIHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoID09PSAyID8gcmVzdWx0WzFdIDogbnVsbDtcbiAgICAgICAgLy99XG5cbi8vIFNldCB0aGUgc2VsZWN0ZWQgY29kZWMgdG8gdGhlIGZpcnN0IGluIG0gbGluZS5cbi8vICAgICAgICBmdW5jdGlvbiBzZXREZWZhdWx0Q29kZWMobUxpbmUsIHBheWxvYWQpIHtcbi8vICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gbUxpbmUuc3BsaXQoJyAnKTtcbi8vICAgICAgICAgICAgdmFyIG5ld0xpbmUgPSBbXTtcbi8vICAgICAgICAgICAgdmFyIGluZGV4ID0gMDtcbi8vICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAzKSB7IC8vIEZvcm1hdCBvZiBtZWRpYSBzdGFydHMgZnJvbSB0aGUgZm91cnRoLlxuLy8gICAgICAgICAgICAgICAgICAgIG5ld0xpbmVbaW5kZXgrK10gPSBwYXlsb2FkOyAvLyBQdXQgdGFyZ2V0IHBheWxvYWQgdG8gdGhlIGZpcnN0LlxuLy8gICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzW2ldICE9PSBwYXlsb2FkKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgbmV3TGluZVtpbmRleCsrXSA9IGVsZW1lbnRzW2ldO1xuLy8gICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIHJldHVybiBuZXdMaW5lLmpvaW4oJyAnKTtcbi8vICAgICAgICB9XG5cbi8vIFN0cmlwIENOIGZyb20gc2RwIGJlZm9yZSBDTiBjb25zdHJhaW50cyBpcyByZWFkeS5cbi8vICAgICAgICBmdW5jdGlvbiByZW1vdmVDTihzZHBMaW5lcywgbUxpbmVJbmRleCkge1xuLy8gICAgICAgICAgICB2YXIgbUxpbmVFbGVtZW50cyA9IHNkcExpbmVzW21MaW5lSW5kZXhdLnNwbGl0KCcgJyk7XG4vLyAgICAgICAgICAgIC8vIFNjYW4gZnJvbSBlbmQgZm9yIHRoZSBjb252ZW5pZW5jZSBvZiByZW1vdmluZyBhbiBpdGVtLlxuLy8gICAgICAgICAgICBmb3IgKHZhciBpID0gc2RwTGluZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbi8vICAgICAgICAgICAgICAgIHZhciBwYXlsb2FkID0gZXh0cmFjdFNkcChzZHBMaW5lc1tpXSwgL2E9cnRwbWFwOihcXGQrKSBDTlxcL1xcZCsvaSk7XG4vLyAgICAgICAgICAgICAgICBpZiAocGF5bG9hZCkge1xuLy8gICAgICAgICAgICAgICAgICAgIHZhciBjblBvcyA9IG1MaW5lRWxlbWVudHMuaW5kZXhPZihwYXlsb2FkKTtcbi8vICAgICAgICAgICAgICAgICAgICBpZiAoY25Qb3MgIT09IC0xKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBDTiBwYXlsb2FkIGZyb20gbSBsaW5lLlxuLy8gICAgICAgICAgICAgICAgICAgICAgICBtTGluZUVsZW1lbnRzLnNwbGljZShjblBvcywgMSk7XG4vLyAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBDTiBsaW5lIGluIHNkcFxuLy8gICAgICAgICAgICAgICAgICAgIHNkcExpbmVzLnNwbGljZShpLCAxKTtcbi8vICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgICAgc2RwTGluZXNbbUxpbmVJbmRleF0gPSBtTGluZUVsZW1lbnRzLmpvaW4oJyAnKTtcbi8vICAgICAgICAgICAgcmV0dXJuIHNkcExpbmVzO1xuLy8gICAgICAgIH1cblxuICAgIH1cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cInZpZGVvc1wiPlxuICAgICAgICAgICAgICAgIDx2aWRlbyBpZD1cImxvY2FsVmlkZW9cIiBhdXRvUGxheSBtdXRlZD48L3ZpZGVvPlxuICAgICAgICAgICAgICAgIDx2aWRlbyBpZD1cInJlbW90ZVZpZGVvXCIgYXV0b1BsYXk+PC92aWRlbz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9DaGF0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbWUvVmlkZW9DaGF0LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=