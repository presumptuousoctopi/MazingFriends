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
	
	var _GameOver = __webpack_require__(276);
	
	var _GameOver2 = _interopRequireDefault(_GameOver);
	
	var _Controls = __webpack_require__(277);
	
	var _Controls2 = _interopRequireDefault(_Controls);
	
	var _ProgressBar = __webpack_require__(278);
	
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
						time: time
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
					_react2.default.createElement(_ChatView2.default, { timer: this.state.timer, controlsClickHandler: this.controlsClickHandler.bind(this) }),
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
	
	var _ProgressBar = __webpack_require__(278);
	
	var _ProgressBar2 = _interopRequireDefault(_ProgressBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Chat = function (_React$Component) {
	  _inherits(Chat, _React$Component);
	
	  function Chat() {
	    _classCallCheck(this, Chat);
	
	    var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this));
	
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
	      socket.emit("quit");
	    }
	  }, {
	    key: 'render',
	    value: function render() {
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
	            'p',
	            null,
	            'waiting for second player...'
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
	                socket.emit("quit", room);
	                _reactRouter.browserHistory.push({
	                    pathname: '/home'
	                });
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

/***/ },

/***/ 276:
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
	
	var GameOver = function (_React$Component) {
	  _inherits(GameOver, _React$Component);
	
	  function GameOver(props) {
	    _classCallCheck(this, GameOver);
	
	    return _possibleConstructorReturn(this, (GameOver.__proto__ || Object.getPrototypeOf(GameOver)).call(this, props));
	  }
	
	  _createClass(GameOver, [{
	    key: 'quitGame',
	    value: function quitGame() {
	      document.getElementById("canvas").remove();
	      location.reload();
	      socket.emit("quit");
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'GameOver' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Game Over!'
	        ),
	        ' ',
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          'h2',
	          null,
	          'Your time: ',
	          this.props.time
	        ),
	        ' ',
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          'button',
	          { className: 'homeButtons' },
	          'Keep Playing'
	        ),
	        ' ',
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: '/' },
	          _react2.default.createElement(
	            'button',
	            { className: 'homeButtons', onClick: this.quitGame.bind(this) },
	            'Quit'
	          )
	        )
	      );
	    }
	  }]);
	
	  return GameOver;
	}(_react2.default.Component);
	
	exports.default = GameOver;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "GameOver.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 278:
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
	
	var ProgressBar = function (_React$Component) {
	    _inherits(ProgressBar, _React$Component);
	
	    function ProgressBar() {
	        _classCallCheck(this, ProgressBar);
	
	        var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this));
	
	        _this.state = {
	            percentage: 0
	        };
	        return _this;
	    }
	
	    _createClass(ProgressBar, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var context = this;
	            socket.on('receiveDistancePercentage', function (percentage) {
	                // console.log('New percentage : ', percentage);
	                // window.distancePercentage = percentage;
	                context.setState({
	                    percentage: percentage
	                });
	            });
	
	            // setInterval( () => {
	            //     this.setState({
	            //         percentage: window.distancePercentage
	            //     });
	            // }, 1500);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'progress' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'progress-bar progress-bar-danger', role: 'progressbar', 'aria-valuenow': this.state.percentage,
	                        'aria-valuemin': '0', 'aria-valuemax': '100', style: { width: this.state.percentage + '%' } },
	                    _react2.default.createElement('span', { className: 'sr-only' })
	                )
	            );
	        }
	    }]);
	
	    return ProgressBar;
	}(_react2.default.Component);
	
	exports.default = ProgressBar;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ProgressBar.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 284:
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
	
	var Lobby = function (_React$Component) {
	    _inherits(Lobby, _React$Component);
	
	    function Lobby() {
	        _classCallCheck(this, Lobby);
	
	        var _this = _possibleConstructorReturn(this, (Lobby.__proto__ || Object.getPrototypeOf(Lobby)).call(this));
	
	        _this.state = {
	            rooms: {},
	            roomNames: []
	        };
	        return _this;
	    }
	
	    _createClass(Lobby, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var context = this;
	            console.log("component did mount");
	            var context = this;
	            socket.on("receive", function (data) {
	                console.log("CURRENT DATA:", data);
	                for (var key in data) {
	                    if (data[key] === 0) {
	                        delete data[key];
	                    }
	                    //this might be hacky- check why the server is storing a null value
	                    if (data[key] === null) {
	                        delete data[key];
	                    }
	                }
	                delete data[undefined];
	                context.setState({
	                    rooms: data,
	                    roomNames: Object.keys(data)
	                }, function (data) {});
	                context.forceUpdate();
	            });
	            socket.emit("getRooms");
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(
	                "table",
	                null,
	                _react2.default.createElement(
	                    "tr",
	                    null,
	                    _react2.default.createElement(
	                        "th",
	                        null,
	                        "Roomname"
	                    ),
	                    _react2.default.createElement(
	                        "th",
	                        null,
	                        "Number of Players"
	                    )
	                ),
	                this.state.roomNames.map(function (key, index) {
	                    console.log(key);
	                    return _react2.default.createElement(
	                        "tr",
	                        null,
	                        _react2.default.createElement(
	                            "td",
	                            null,
	                            key
	                        ),
	                        _react2.default.createElement(
	                            "td",
	                            null,
	                            _this2.state.rooms[key],
	                            "/2"
	                        )
	                    );
	                })
	            );
	        }
	    }]);
	
	    return Lobby;
	}(_react2.default.Component);
	
	exports.default = Lobby;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Lobby.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWVWaWV3LmpzeD9mYjdlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUvQ2hhdFZpZXcuanN4PzkzOWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR2FtZS9WaWRlb0NoYXQuanN4P2MyZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvR2FtZS9HYW1lT3Zlci5qc3g/Njk3YSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1Byb2dyZXNzQmFyLmpzeD9mYjM4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUvTG9iYnkuanN4P2NjYmEiXSwibmFtZXMiOlsiR2FtZSIsInN0YXRlIiwiZ2FtZW92ZXIiLCJ0aW1lIiwidGltZXIiLCJjb250cm9scyIsInNvY2tldCIsIndpbmRvdyIsImNvbnRleHQiLCJvbiIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbnRyb2xzQ2xpY2tIYW5kbGVyIiwiYmluZCIsIkNvbXBvbmVudCIsIkNoYXQiLCJ2aWRlbyIsInRleHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJlbWl0IiwicHJvcHMiLCJzdG9wR2FtZSIsInN3aXRjaENoYXQiLCJWaWRlb0NoYXQiLCJpc0NoYW5uZWxSZWFkeSIsImlzSW5pdGlhdG9yIiwiaXNTdGFydGVkIiwicGMiLCJsb2NhbFN0cmVhbSIsInJlbW90ZVN0cmVhbSIsInR1cm5SZWFkeSIsInJvb20iLCJwY0NvbmZpZyIsInNkcENvbnN0cmFpbnRzIiwibG9jYWxWaWRlbyIsInF1ZXJ5U2VsZWN0b3IiLCJzcmMiLCJyZW1vdGVWaWRlbyIsInJvb21OYW1lIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJ0aGVuIiwiZ290U3RyZWFtIiwiY2F0Y2giLCJlIiwiYWxlcnQiLCJuYW1lIiwiYXJyYXkiLCJhcHBseSIsInNlbmRNZXNzYWdlIiwibWVzc2FnZSIsInN0YXJ0IiwidHlwZSIsInNldFJlbW90ZURlc2NyaXB0aW9uIiwiUlRDU2Vzc2lvbkRlc2NyaXB0aW9uIiwiY3JlYXRlQW5zd2VyIiwiY2FuZGlkYXRlIiwiUlRDSWNlQ2FuZGlkYXRlIiwic2RwTUxpbmVJbmRleCIsImxhYmVsIiwiYWRkSWNlQ2FuZGlkYXRlIiwiaGFuZGxlUmVtb3RlSGFuZ3VwIiwic3RyZWFtIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY29uc3RyYWludHMiLCJjcmVhdGVQZWVyQ29ubmVjdGlvbiIsImFkZFN0cmVhbSIsImNhbGwiLCJvbmJlZm9yZXVubG9hZCIsIlJUQ1BlZXJDb25uZWN0aW9uIiwib25pY2VjYW5kaWRhdGUiLCJoYW5kbGVJY2VDYW5kaWRhdGUiLCJvbmFkZHN0cmVhbSIsImhhbmRsZVJlbW90ZVN0cmVhbUFkZGVkIiwib25yZW1vdmVzdHJlYW0iLCJoYW5kbGVSZW1vdGVTdHJlYW1SZW1vdmVkIiwiZXZlbnQiLCJpZCIsInNkcE1pZCIsImhhbmRsZUNyZWF0ZU9mZmVyRXJyb3IiLCJjcmVhdGVPZmZlciIsInNldExvY2FsQW5kU2VuZE1lc3NhZ2UiLCJvbkNyZWF0ZVNlc3Npb25EZXNjcmlwdGlvbkVycm9yIiwic2Vzc2lvbkRlc2NyaXB0aW9uIiwic2V0TG9jYWxEZXNjcmlwdGlvbiIsImVycm9yIiwidG9TdHJpbmciLCJoYW5ndXAiLCJzdG9wIiwiY2xvc2UiLCJwdXNoIiwicGF0aG5hbWUiLCJHYW1lT3ZlciIsInF1aXRHYW1lIiwiUHJvZ3Jlc3NCYXIiLCJwZXJjZW50YWdlIiwid2lkdGgiLCJMb2JieSIsInJvb21zIiwicm9vbU5hbWVzIiwiZGF0YSIsImtleSIsInVuZGVmaW5lZCIsIk9iamVjdCIsImtleXMiLCJmb3JjZVVwZGF0ZSIsIm1hcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FB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QUFLLG9DQUFLNUcsS0FBTCxDQUFXeUcsS0FBWCxDQUFpQkcsR0FBakIsQ0FBTDtBQUFBO0FBQUE7QUFGQSxzQkFEQTtBQU1ILGtCQVJJO0FBTEwsY0FESjtBQWlCSDs7OztHQXREZSxnQkFBTTlGLFM7O21CQXdEWDBGLEsiLCJmaWxlIjoiMC5jMWM5MjAwOThlNjMxOTE0OGEyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDaGF0IGZyb20gJy4vQ2hhdFZpZXcuanN4JztcbmltcG9ydCBHYW1lT3ZlciBmcm9tICcuL0dhbWVPdmVyLmpzeCdcbmltcG9ydCBDb250cm9scyBmcm9tICcuL0NvbnRyb2xzLmpzeCdcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuL1Byb2dyZXNzQmFyLmpzeCdcblxuY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKClcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Z2FtZW92ZXI6IGZhbHNlLFxuXHRcdFx0dGltZTogbnVsbCxcblx0XHRcdHRpbWVyOiBudWxsLFxuXHRcdFx0Y29udHJvbHM6IGZhbHNlXG5cdFx0fVxuXHR9IFxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHZhciBzb2NrZXQgPSB3aW5kb3cuc29ja2V0O1xuXHRcdHZhciBjb250ZXh0ID0gdGhpcztcblx0XHRcblx0XHRzb2NrZXQub24oJ2dhbWVvdmVybGlzdGVuJywgZnVuY3Rpb24odGltZSkge1xuXHRcdFx0XHRjb250ZXh0LnNldFN0YXRlKHtcblx0XHRcdFx0XHRnYW1lb3ZlcjogdHJ1ZSxcblx0XHRcdFx0XHR0aW1lOiB0aW1lXG5cdFx0XHRcdH0pXG5cdFx0Y29uc29sZS5sb2coJ2dhbWVvdmVyIScpXG5cdFx0XHR9KTtcblxuXHRcdHNvY2tldC5vbigndGltZXInLCBmdW5jdGlvbih0aW1lcikge1xuXHRcdFx0XHRjb250ZXh0LnNldFN0YXRlKHtcblx0XHRcdFx0XHR0aW1lcjogdGltZXJcblx0XHRcdFx0fSlcblx0XHRcdH0pO1xuICB9XG5cbiAgY29udHJvbHNDbGlja0hhbmRsZXIoKSB7XG4gIFx0dGhpcy5zZXRTdGF0ZSh7XG4gIFx0XHRjb250cm9sczogIXRoaXMuc3RhdGUuY29udHJvbHNcbiAgXHR9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdhbWVcIj5cblx0XHQgIDxQcm9ncmVzc0Jhci8+XG4gICAgICBcdDxDaGF0IHRpbWVyPXt0aGlzLnN0YXRlLnRpbWVyfSBjb250cm9sc0NsaWNrSGFuZGxlcj17dGhpcy5jb250cm9sc0NsaWNrSGFuZGxlci5iaW5kKHRoaXMpfSAvPlxuICAgICAgXHR7dGhpcy5zdGF0ZS5nYW1lb3ZlciA/IDxHYW1lT3ZlciB0aW1lPXt0aGlzLnN0YXRlLnRpbWV9Lz4gOiAnJ31cbiAgICAgIFx0e3RoaXMuc3RhdGUuY29udHJvbHMgPyA8Q29udHJvbHMgY29udHJvbHNDbGlja0hhbmRsZXI9e3RoaXMuY29udHJvbHNDbGlja0hhbmRsZXIuYmluZCh0aGlzKX0gLz4gOiAnJ31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWVWaWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFRleHRDaGF0IGZyb20gJy4vVGV4dENoYXQuanN4J1xuaW1wb3J0IFZpZGVvQ2hhdCBmcm9tICcuL1ZpZGVvQ2hhdC5qc3gnO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vUHJvZ3Jlc3NCYXIuanN4J1xuXG5jbGFzcyBDaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlkZW86IHRydWVcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS50ZXh0KVxuICB9XG5cbiAgc3dpdGNoQ2hhdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZGVvOiBmYWxzZVxuICAgIH0pXG4gICAgLy8gaWYgKHZhbHVlID09PSAndmlkZW8nKSB7XG4gICAgLy8gICBzb2NrZXQuZW1pdCgnY2hhbmdlZFRvVmlkZW8nLCAnJyk7XG4gICAgLy8gfVxuICB9XG5cbiAgc3RvcEdhbWUoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikucmVtb3ZlKCk7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgc29ja2V0LmVtaXQoXCJxdWl0XCIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYXRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJPcHRpb25zXCI+XG4gICAgICAgICAgPGgxPk1hemluZyBGcmllbmRzPC9oMT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy50aW1lciA/IDxoMj57dGhpcy5wcm9wcy50aW1lcn08L2gyPiA6IDxwPndhaXRpbmcgZm9yIHNlY29uZCBwbGF5ZXIuLi48L3A+fVxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uQnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY29udHJvbHNDbGlja0hhbmRsZXJ9PkNvbnRyb2xzPC9idXR0b24+XG4gICAgICAgICAgPExpbmsgdG89XCIvXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb25CdXR0b25zXCIgb25DbGljaz17dGhpcy5zdG9wR2FtZS5iaW5kKHRoaXMpfT5RdWl0IEdhbWU8L2J1dHRvbj48L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS52aWRlbyA/IDxWaWRlb0NoYXQvPiA6ICcnIH1cbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2hhdFwiIHZhbHVlPVwidmlkZW9cIiBvbkNoYW5nZT17dGhpcy5zd2l0Y2hDaGF0LmJpbmQodGhpcyl9Lz5WaWRlbyBPZmZcbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxUZXh0Q2hhdC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IENoYXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9DaGF0Vmlldy5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHticm93c2VySGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuY2xhc3MgVmlkZW9DaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIgKClcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzQ2hhbm5lbFJlYWR5OiBmYWxzZSxcbiAgICAgICAgICAgIGlzSW5pdGlhdG9yOiBmYWxzZSxcbiAgICAgICAgICAgIGlzU3RhcnRlZDogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgdmFyIHBjO1xuICAgICAgICB2YXIgbG9jYWxTdHJlYW07XG4gICAgICAgIHZhciByZW1vdGVTdHJlYW07XG4gICAgICAgIHZhciB0dXJuUmVhZHk7XG4gICAgICAgIHZhciByb29tO1xuICAgICAgICAvL3N0dW4gc2VydmVyIGZvciBuZXR3b3JrIGRhdGFcbiAgICAgICAgdmFyIHBjQ29uZmlnID0ge1xuICAgICAgICAgICAgJ2ljZVNlcnZlcnMnOiBbe1xuICAgICAgICAgICAgICAgICd1cmwnOiAnc3R1bjpzdHVuLmwuZ29vZ2xlLmNvbToxOTMwMidcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG4gICAgICAgIC8vIFNldCB1cCBhdWRpbyBhbmQgdmlkZW8gcmVnYXJkbGVzcyBvZiB3aGF0IGRldmljZXMgYXJlIHByZXNlbnQuXG4gICAgICAgIHZhciBzZHBDb25zdHJhaW50cyA9IHtcbiAgICAgICAgICAgICdtYW5kYXRvcnknOiB7XG4gICAgICAgICAgICAgICAgJ09mZmVyVG9SZWNlaXZlQXVkaW8nOiB0cnVlLFxuICAgICAgICAgICAgICAgICdPZmZlclRvUmVjZWl2ZVZpZGVvJzogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8veW91ciBzY3JlZW4gaXMgbG9jYWwgdmlkZW8tIG90aGVyIHBlcnNvbiBpcyByZW1vdGUgdmlkZW9cbiAgICAgICAgdmFyIGxvY2FsVmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYWxWaWRlbycpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvY2FsIHZpZGVvXCIsIGxvY2FsVmlkZW8uc3JjKTtcbiAgICAgICAgdmFyIHJlbW90ZVZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW90ZVZpZGVvJyk7XG4gICAgICAgIHNvY2tldC5vbigncm9vbU5hbWUnLCBmdW5jdGlvbihyb29tTmFtZSkge1xuICAgICAgICAgICAgcm9vbSA9IHJvb21OYW1lO1xuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NyZWF0ZSBvciBqb2luJywgcm9vbSk7XG4gICAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICAgICAgICAgICAgYXVkaW86IHRydWUsXG4gICAgICAgICAgICAgICAgdmlkZW86IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZ290U3RyZWFtKVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdnZXRVc2VyTWVkaWEoKSBlcnJvcjogJyArIGUubmFtZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUm9vbSBuYW1lIDogJywgcm9vbU5hbWUpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIHNvY2tldC5vbignY3JlYXRlZCcsIGZ1bmN0aW9uKHJvb20pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIHJvb20gJyArIHJvb20pO1xuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNJbml0aWF0b3I6IHRydWVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSk7XG5cbi8vb25jZSB0aGUgc2Vjb25kIHBlcnNvbiBqb2lucywgc2V0IGNoYW5uZWwgdG8gdHJ1ZVxuICAgICAgICBzb2NrZXQub24oJ2pvaW4nLCBmdW5jdGlvbiAocm9vbSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQW5vdGhlciBwZWVyIG1hZGUgYSByZXF1ZXN0IHRvIGpvaW4gcm9vbSAnICsgcm9vbSk7XG4gICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0NoYW5uZWxSZWFkeTogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9zb2NrZXQub24oJ2pvaW5lZCcsIGZ1bmN0aW9uKHJvb20pIHtcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2coJ2pvaW5lZDogJyArIHJvb20pO1xuICAgICAgICAvLyAgICBpc0NoYW5uZWxSZWFkeSA9IHRydWU7XG4gICAgICAgIC8vfSk7XG5cbiAgICAgICAgc29ja2V0Lm9uKCdsb2cnLCBmdW5jdGlvbihhcnJheSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJyYXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzb2NrZXQub24oJ2Z1bGwnLCBmdW5jdGlvbihyb29tKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiUm9vbSBpcyBmdWxsXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBzZW5kTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2xpZW50IHNlbmRpbmcgbWVzc2FnZTogJywgbWVzc2FnZSk7XG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgICAgICB9XG5cbi8vIFRoaXMgY2xpZW50IHJlY2VpdmVzIGEgbWVzc2FnZVxuICAgICAgICBzb2NrZXQub24oJ21lc3NhZ2UnLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2xpZW50IHJlY2VpdmVkIG1lc3NhZ2U6JywgbWVzc2FnZSk7XG4gICAgICAgICAgICAvL2lmIHBlcnNvbiBpbml0aWF0ZXMgY2FsbCwgaW52b2tlIHN0YXJ0XG4gICAgICAgICAgICAvLyBlbHNlIGlmIHBlcnNvbiByZWNlaXZlcyBhbiBvZmZlciwgc2Vjb25kIHBlcnNvbiBpbnZva2VzIHN0YXJ0XG4gICAgICAgICAgICAvL2Vsc2UgaWYgcGVyc29uIHJlY2VpdmVzIGFuIGFuc3dlciBmcm9tIHNlY29uZCBwZXJzb24sIHNldCByZW1vdGUgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIGlmIChtZXNzYWdlID09PSAnZ290IHVzZXIgbWVkaWEnKSB7XG4gICAgICAgICAgICAgICAgc3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnb2ZmZXInKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNQUtJTkcgQU4gT0ZGRVJcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFjb250ZXh0LnN0YXRlLmlzSW5pdGlhdG9yICYmICFjb250ZXh0LnN0YXRlLmlzU3RhcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwY0NvbmZpZy5zZXRSZW1vdGVEZXNjcmlwdGlvbihuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKG1lc3NhZ2UpLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVBbnN3ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnYW5zd2VyJyAmJiBjb250ZXh0LnN0YXRlLmlzU3RhcnRlZCkge1xuICAgICAgICAgICAgICAgIHBjQ29uZmlnLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24obWVzc2FnZSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjYW5kaWRhdGUnICYmIGNvbnRleHQuc3RhdGUuaXNTdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IG5ldyBSVENJY2VDYW5kaWRhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzZHBNTGluZUluZGV4OiBtZXNzYWdlLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGU6IG1lc3NhZ2UuY2FuZGlkYXRlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDQU5ESURBVEU6XCIsIGNhbmRpZGF0ZSk7XG4gICAgICAgICAgICAgICAgcGNDb25maWcuYWRkSWNlQ2FuZGlkYXRlKGNhbmRpZGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdieWUnICYmIGNvbnRleHQuc3RhdGUuaXNTdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlUmVtb3RlSGFuZ3VwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbi8vc2V0IHRoZSBsb2NhbCBzdHJlYW1cbiAgICAgICAgZnVuY3Rpb24gZ290U3RyZWFtKHN0cmVhbSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkZGluZyBsb2NhbCBzdHJlYW0uJyk7XG4gICAgICAgICAgICBsb2NhbFZpZGVvLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvY2FsIHZpZGVvIHNvdXJjZVwiLCBsb2NhbFZpZGVvLnNyYyk7XG4gICAgICAgICAgICBsb2NhbFN0cmVhbSA9IHN0cmVhbTtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKCdnb3QgdXNlciBtZWRpYScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpcyBpbml0aWF0b3JcIiwgY29udGV4dC5zdGF0ZS5pc0luaXRpYXRvcik7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5zdGF0ZS5pc0luaXRpYXRvcikge1xuICAgICAgICAgICAgICAgIHN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29uc3RyYWludHMgPSB7XG4gICAgICAgICAgICB2aWRlbzogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdHZXR0aW5nIHVzZXIgbWVkaWEgd2l0aCBjb25zdHJhaW50cycsIGNvbnN0cmFpbnRzKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy9pZiAobG9jYXRpb24uaG9zdG5hbWUgIT09ICdsb2NhbGhvc3QnKSB7XG4gICAgICAgIC8vICAgIChcbiAgICAgICAgLy8gICAgICAgICdodHRwczovL2NvbXB1dGVlbmdpbmVvbmRlbWFuZC5hcHBzcG90LmNvbS90dXJuP3VzZXJuYW1lPTQxNzg0NTc0JmtleT00MDgwMjE4OTEzJ1xuICAgICAgICAvLyAgICApO1xuICAgICAgICAvL31cblxuICAgICAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4+IHN0YXJ0ICcsIGNvbnRleHQuc3RhdGUuaXNTdGFydGVkLCBsb2NhbFN0cmVhbSwgY29udGV4dC5zdGF0ZS5pc0NoYW5uZWxSZWFkeSk7XG4gICAgICAgICAgICBpZiAoIWNvbnRleHQuc3RhdGUuaXNTdGFydGVkICYmIHR5cGVvZiBsb2NhbFN0cmVhbSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29udGV4dC5zdGF0ZS5pc0NoYW5uZWxSZWFkeSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4gY3JlYXRpbmcgcGVlciBjb25uZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGVlckNvbm5lY3Rpb24oKTtcbiAgICAgICAgICAgICAgICBwY0NvbmZpZy5hZGRTdHJlYW0obG9jYWxTdHJlYW0pO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBpc1N0YXJ0ZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaXNJbml0aWF0b3InLCBjb250ZXh0LnN0YXRlLmlzSW5pdGlhdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGV4dC5zdGF0ZS5pc0luaXRpYXRvcikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZW5kTWVzc2FnZSgnYnllJyk7XG4gICAgICAgIH07XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVBlZXJDb25uZWN0aW9uKCkge1xuICAgICAgICAgICAgLy9jcmVhdGUgYSBuZXcgcGVlciBjb25uZWN0aW9uXG4gICAgICAgICAgICAvL2FkZCB0aGUgaWNlIGhhbmRsZXJcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGNDb25maWcgPSBuZXcgUlRDUGVlckNvbm5lY3Rpb24obnVsbCk7XG4gICAgICAgICAgICAgICAgcGNDb25maWcub25pY2VjYW5kaWRhdGUgPSBoYW5kbGVJY2VDYW5kaWRhdGU7XG4gICAgICAgICAgICAgICAgcGNDb25maWcub25hZGRzdHJlYW0gPSBoYW5kbGVSZW1vdGVTdHJlYW1BZGRlZDtcbiAgICAgICAgICAgICAgICBwY0NvbmZpZy5vbnJlbW92ZXN0cmVhbSA9IGhhbmRsZVJlbW90ZVN0cmVhbVJlbW92ZWQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgUlRDUGVlckNvbm5uZWN0aW9uJyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBjcmVhdGUgUGVlckNvbm5lY3Rpb24sIGV4Y2VwdGlvbjogJyArIGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ0Nhbm5vdCBjcmVhdGUgUlRDUGVlckNvbm5lY3Rpb24gb2JqZWN0LicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUljZUNhbmRpZGF0ZShldmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ljZWNhbmRpZGF0ZSBldmVudDogJywgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNhbmRpZGF0ZSkge1xuICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NhbmRpZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBldmVudC5jYW5kaWRhdGUuc2RwTUxpbmVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNaWQsXG4gICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZTogZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRW5kIG9mIGNhbmRpZGF0ZXMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdGVTdHJlYW1BZGRlZChldmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlbW90ZSBzdHJlYW0gYWRkZWQuJyk7XG4gICAgICAgICAgICByZW1vdGVWaWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC5zdHJlYW0pO1xuICAgICAgICAgICAgcmVtb3RlU3RyZWFtID0gZXZlbnQuc3RyZWFtO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ3JlYXRlT2ZmZXJFcnJvcihldmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZU9mZmVyKCkgZXJyb3I6ICcsIGV2ZW50KTtcbiAgICAgICAgfVxuLy9pbml0aWF0ZSB0aGUgb2ZmZXIgYW5kIHNldCB0aGUgbG9jYWwgZGVzY3JpcHRpb24oeW91ciBwYylcbi8vb24gcmVzcG9uc2Ugc2V0IHRoZSByZW1vdGUgZGVzY3JpcHRpb24ob3RoZXIgcGVyc29ucyBwYylcbiAgICAgICAgZnVuY3Rpb24gY2FsbCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZW5kaW5nIG9mZmVyIHRvIHBlZXInKTtcbiAgICAgICAgICAgIHBjQ29uZmlnLmNyZWF0ZU9mZmVyKHNldExvY2FsQW5kU2VuZE1lc3NhZ2UsIGhhbmRsZUNyZWF0ZU9mZmVyRXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlQW5zd2VyKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlbmRpbmcgYW5zd2VyIHRvIHBlZXIuJyk7XG4gICAgICAgICAgICBwY0NvbmZpZy5jcmVhdGVBbnN3ZXIoKS50aGVuKFxuICAgICAgICAgICAgICAgIHNldExvY2FsQW5kU2VuZE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgb25DcmVhdGVTZXNzaW9uRGVzY3JpcHRpb25FcnJvclxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldExvY2FsQW5kU2VuZE1lc3NhZ2Uoc2Vzc2lvbkRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAvLyBTZXQgT3B1cyBhcyB0aGUgcHJlZmVycmVkIGNvZGVjIGluIFNEUCBpZiBPcHVzIGlzIHByZXNlbnQuXG4gICAgICAgICAgICAvLyAgc2Vzc2lvbkRlc2NyaXB0aW9uLnNkcCA9IHByZWZlck9wdXMoc2Vzc2lvbkRlc2NyaXB0aW9uLnNkcCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNFU1NJT05ERVNDUklQVElPTjpcIiwgc2Vzc2lvbkRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHBjQ29uZmlnLnNldExvY2FsRGVzY3JpcHRpb24oc2Vzc2lvbkRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXRMb2NhbEFuZFNlbmRNZXNzYWdlIHNlbmRpbmcgbWVzc2FnZScsIHNlc3Npb25EZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBzZW5kTWVzc2FnZShzZXNzaW9uRGVzY3JpcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25DcmVhdGVTZXNzaW9uRGVzY3JpcHRpb25FcnJvcihlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBjcmVhdGUgc2Vzc2lvbiBkZXNjcmlwdGlvbjogJyArIGVycm9yLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vTk9UIEJFSU5HIFVTRUQgUklHSFQgTk9XXG4vL1RVUk4gc2VydmVycy0gaWYgSUNFIGNhbnQgZmluZCB0aGUgZXh0ZXJuYWwgYWRkcmVzcywgdHJhZmZpYyB3aWxsIGJlIHJvdXRlZCB1c2luZyB0dXJuIHNlcnZlcnNcbi8vICAgICAgICBmdW5jdGlvbiByZXF1ZXN0VHVybih0dXJuVVJMKSB7XG4vLyAgICAgICAgICAgIHZhciB0dXJuRXhpc3RzID0gZmFsc2U7XG4vLyAgICAgICAgICAgIGZvciAodmFyIGkgaW4gcGNDb25maWcuaWNlU2VydmVycykge1xuLy8gICAgICAgICAgICAgICAgaWYgKHBjQ29uZmlnLmljZVNlcnZlcnNbaV0udXJsLnN1YnN0cigwLCA1KSA9PT0gJ3R1cm46Jykge1xuLy8gICAgICAgICAgICAgICAgICAgIHR1cm5FeGlzdHMgPSB0cnVlO1xuLy8gICAgICAgICAgICAgICAgICAgIHR1cm5SZWFkeSA9IHRydWU7XG4vLyAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgaWYgKCF0dXJuRXhpc3RzKSB7XG4vLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR2V0dGluZyBUVVJOIHNlcnZlciBmcm9tICcsIHR1cm5VUkwpO1xuLy8gICAgICAgICAgICAgICAgLy8gTm8gVFVSTiBzZXJ2ZXIuIEdldCBvbmUgZnJvbSBjb21wdXRlZW5naW5lb25kZW1hbmQuYXBwc3BvdC5jb206XG4vLyAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4vLyAgICAgICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHVyblNlcnZlciA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb3QgVFVSTiBzZXJ2ZXI6ICcsIHR1cm5TZXJ2ZXIpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICBwY0NvbmZpZy5pY2VTZXJ2ZXJzLnB1c2goe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VybCc6ICd0dXJuOicgKyB0dXJuU2VydmVyLnVzZXJuYW1lICsgJ0AnICsgdHVyblNlcnZlci50dXJuLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NyZWRlbnRpYWwnOiB0dXJuU2VydmVyLnBhc3N3b3JkXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB0dXJuUmVhZHkgPSB0cnVlO1xuLy8gICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgIH07XG4vLyAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgdHVyblVSTCwgdHJ1ZSk7XG4vLyAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuLy8gICAgICAgICAgICB9XG4vLyAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW90ZVN0cmVhbUFkZGVkKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3RlIHN0cmVhbSBhZGRlZC4nKTtcbiAgICAgICAgICAgIHJlbW90ZVZpZGVvLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50LnN0cmVhbSk7XG4gICAgICAgICAgICByZW1vdGVTdHJlYW0gPSBldmVudC5zdHJlYW07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdGVTdHJlYW1SZW1vdmVkKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3RlIHN0cmVhbSByZW1vdmVkLiBFdmVudDogJywgZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZ3VwKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hhbmdpbmcgdXAuJyk7XG4gICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgICAgICBzZW5kTWVzc2FnZSgnYnllJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdGVIYW5ndXAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2Vzc2lvbiB0ZXJtaW5hdGVkLicpO1xuICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNJbml0aWF0b3I6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc1N0YXJ0ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGlzQXVkaW9NdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gaXNWaWRlb011dGVkID0gZmFsc2U7XG4gICAgICAgICAgICBwY0NvbmZpZy5jbG9zZSgpO1xuICAgICAgICAgICAgcGNDb25maWcgPSBudWxsO1xuICAgICAgICAgICAgbG9jYWxWaWRlby5zcmMgPSBudWxsO1xuICAgICAgICAgICAgcmVtb3RlVmlkZW8uc3JjID0gbnVsbDtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgc29ja2V0LmVtaXQoXCJxdWl0XCIsIHJvb20pO1xuICAgICAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCh7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvaG9tZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vTk9UIEJFSU5HIFVTRUQgUklHSFQgTk9XXG4vLyBTZXQgT3B1cyBhcyB0aGUgZGVmYXVsdCBhdWRpbyBjb2RlYyBpZiBpdCdzIHByZXNlbnQuXG4vLyAgICAgICAgZnVuY3Rpb24gcHJlZmVyT3B1cyhzZHApIHtcbi8vICAgICAgICAgICAgdmFyIHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXHJcXG4nKTtcbi8vICAgICAgICAgICAgdmFyIG1MaW5lSW5kZXg7XG4vLyAgICAgICAgICAgIC8vIFNlYXJjaCBmb3IgbSBsaW5lLlxuLy8gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNkcExpbmVzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICAgICBpZiAoc2RwTGluZXNbaV0uc2VhcmNoKCdtPWF1ZGlvJykgIT09IC0xKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgbUxpbmVJbmRleCA9IGk7XG4vLyAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgaWYgKG1MaW5lSW5kZXggPT09IG51bGwpIHtcbi8vICAgICAgICAgICAgICAgIHJldHVybiBzZHA7XG4vLyAgICAgICAgICAgIH1cbi8vXG4vLyAgICAgICAgICAgIC8vIElmIE9wdXMgaXMgYXZhaWxhYmxlLCBzZXQgaXQgYXMgdGhlIGRlZmF1bHQgaW4gbSBsaW5lLlxuLy8gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2RwTGluZXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgICAgIGlmIChzZHBMaW5lc1tpXS5zZWFyY2goJ29wdXMvNDgwMDAnKSAhPT0gLTEpIHtcbi8vICAgICAgICAgICAgICAgICAgICB2YXIgb3B1c1BheWxvYWQgPSBleHRyYWN0U2RwKHNkcExpbmVzW2ldLCAvOihcXGQrKSBvcHVzXFwvNDgwMDAvaSk7XG4vLyAgICAgICAgICAgICAgICAgICAgaWYgKG9wdXNQYXlsb2FkKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHNkcExpbmVzW21MaW5lSW5kZXhdID0gc2V0RGVmYXVsdENvZGVjKHNkcExpbmVzW21MaW5lSW5kZXhdLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B1c1BheWxvYWQpO1xuLy8gICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgICAgLy8gUmVtb3ZlIENOIGluIG0gbGluZSBhbmQgc2RwLlxuLy8gICAgICAgICAgICBzZHBMaW5lcyA9IHJlbW92ZUNOKHNkcExpbmVzLCBtTGluZUluZGV4KTtcbi8vXG4vLyAgICAgICAgICAgIHNkcCA9IHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xuLy8gICAgICAgICAgICByZXR1cm4gc2RwO1xuLy8gICAgICAgIH1cblxuICAgICAgICAvL2Z1bmN0aW9uIGV4dHJhY3RTZHAoc2RwTGluZSwgcGF0dGVybikge1xuICAgICAgICAvLyAgICB2YXIgcmVzdWx0ID0gc2RwTGluZS5tYXRjaChwYXR0ZXJuKTtcbiAgICAgICAgLy8gICAgcmV0dXJuIHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoID09PSAyID8gcmVzdWx0WzFdIDogbnVsbDtcbiAgICAgICAgLy99XG5cbi8vIFNldCB0aGUgc2VsZWN0ZWQgY29kZWMgdG8gdGhlIGZpcnN0IGluIG0gbGluZS5cbi8vICAgICAgICBmdW5jdGlvbiBzZXREZWZhdWx0Q29kZWMobUxpbmUsIHBheWxvYWQpIHtcbi8vICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gbUxpbmUuc3BsaXQoJyAnKTtcbi8vICAgICAgICAgICAgdmFyIG5ld0xpbmUgPSBbXTtcbi8vICAgICAgICAgICAgdmFyIGluZGV4ID0gMDtcbi8vICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAzKSB7IC8vIEZvcm1hdCBvZiBtZWRpYSBzdGFydHMgZnJvbSB0aGUgZm91cnRoLlxuLy8gICAgICAgICAgICAgICAgICAgIG5ld0xpbmVbaW5kZXgrK10gPSBwYXlsb2FkOyAvLyBQdXQgdGFyZ2V0IHBheWxvYWQgdG8gdGhlIGZpcnN0LlxuLy8gICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzW2ldICE9PSBwYXlsb2FkKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgbmV3TGluZVtpbmRleCsrXSA9IGVsZW1lbnRzW2ldO1xuLy8gICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIHJldHVybiBuZXdMaW5lLmpvaW4oJyAnKTtcbi8vICAgICAgICB9XG5cbi8vIFN0cmlwIENOIGZyb20gc2RwIGJlZm9yZSBDTiBjb25zdHJhaW50cyBpcyByZWFkeS5cbi8vICAgICAgICBmdW5jdGlvbiByZW1vdmVDTihzZHBMaW5lcywgbUxpbmVJbmRleCkge1xuLy8gICAgICAgICAgICB2YXIgbUxpbmVFbGVtZW50cyA9IHNkcExpbmVzW21MaW5lSW5kZXhdLnNwbGl0KCcgJyk7XG4vLyAgICAgICAgICAgIC8vIFNjYW4gZnJvbSBlbmQgZm9yIHRoZSBjb252ZW5pZW5jZSBvZiByZW1vdmluZyBhbiBpdGVtLlxuLy8gICAgICAgICAgICBmb3IgKHZhciBpID0gc2RwTGluZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbi8vICAgICAgICAgICAgICAgIHZhciBwYXlsb2FkID0gZXh0cmFjdFNkcChzZHBMaW5lc1tpXSwgL2E9cnRwbWFwOihcXGQrKSBDTlxcL1xcZCsvaSk7XG4vLyAgICAgICAgICAgICAgICBpZiAocGF5bG9hZCkge1xuLy8gICAgICAgICAgICAgICAgICAgIHZhciBjblBvcyA9IG1MaW5lRWxlbWVudHMuaW5kZXhPZihwYXlsb2FkKTtcbi8vICAgICAgICAgICAgICAgICAgICBpZiAoY25Qb3MgIT09IC0xKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBDTiBwYXlsb2FkIGZyb20gbSBsaW5lLlxuLy8gICAgICAgICAgICAgICAgICAgICAgICBtTGluZUVsZW1lbnRzLnNwbGljZShjblBvcywgMSk7XG4vLyAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBDTiBsaW5lIGluIHNkcFxuLy8gICAgICAgICAgICAgICAgICAgIHNkcExpbmVzLnNwbGljZShpLCAxKTtcbi8vICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgICAgc2RwTGluZXNbbUxpbmVJbmRleF0gPSBtTGluZUVsZW1lbnRzLmpvaW4oJyAnKTtcbi8vICAgICAgICAgICAgcmV0dXJuIHNkcExpbmVzO1xuLy8gICAgICAgIH1cblxuICAgIH1cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cInZpZGVvc1wiPlxuICAgICAgICAgICAgICAgIDx2aWRlbyBpZD1cImxvY2FsVmlkZW9cIiBhdXRvUGxheSBtdXRlZD48L3ZpZGVvPlxuICAgICAgICAgICAgICAgIDx2aWRlbyBpZD1cInJlbW90ZVZpZGVvXCIgYXV0b1BsYXk+PC92aWRlbz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9DaGF0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbWUvVmlkZW9DaGF0LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jbGFzcyBHYW1lT3ZlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblxuICBxdWl0R2FtZSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKS5yZW1vdmUoKTtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICBzb2NrZXQuZW1pdChcInF1aXRcIik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR2FtZU92ZXJcIj5cbiAgICAgIFx0PGgxPkdhbWUgT3ZlciE8L2gxPiA8YnIvPlxuICAgICAgXHQ8aDI+WW91ciB0aW1lOiB7dGhpcy5wcm9wcy50aW1lfTwvaDI+IDxici8+XG4gICAgICBcdDxidXR0b24gY2xhc3NOYW1lPVwiaG9tZUJ1dHRvbnNcIj5LZWVwIFBsYXlpbmc8L2J1dHRvbj4gPGJyLz5cbiAgICAgIFx0PExpbmsgdG89Jy8nPjxidXR0b24gY2xhc3NOYW1lPVwiaG9tZUJ1dHRvbnNcIiBvbkNsaWNrPXt0aGlzLnF1aXRHYW1lLmJpbmQodGhpcyl9PlF1aXQ8L2J1dHRvbj48L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVPdmVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbWUvR2FtZU92ZXIuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBQcm9ncmVzc0JhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwZXJjZW50YWdlOiAwXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICAgIHNvY2tldC5vbigncmVjZWl2ZURpc3RhbmNlUGVyY2VudGFnZScsIGZ1bmN0aW9uKHBlcmNlbnRhZ2UpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTmV3IHBlcmNlbnRhZ2UgOiAnLCBwZXJjZW50YWdlKTtcbiAgICAgICAgICAvLyB3aW5kb3cuZGlzdGFuY2VQZXJjZW50YWdlID0gcGVyY2VudGFnZTtcbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IHBlcmNlbnRhZ2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzZXRJbnRlcnZhbCggKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIC8vICAgICAgICAgcGVyY2VudGFnZTogd2luZG93LmRpc3RhbmNlUGVyY2VudGFnZVxuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vIH0sIDE1MDApO1xuICAgIH1cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItZGFuZ2VyXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW5vdz17dGhpcy5zdGF0ZS5wZXJjZW50YWdlfVxuICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxMDBcIiBzdHlsZT17e3dpZHRoOnRoaXMuc3RhdGUucGVyY2VudGFnZSsnJSd9fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9Qcm9ncmVzc0Jhci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIExvYmJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICB7XG4gICAgICAgICAgICByb29tczoge30sXG4gICAgICAgICAgICByb29tTmFtZXM6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudCBkaWQgbW91bnRcIik7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgc29ja2V0Lm9uKFwicmVjZWl2ZVwiLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNVUlJFTlQgREFUQTpcIiwgZGF0YSk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhW2tleV0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy90aGlzIG1pZ2h0IGJlIGhhY2t5LSBjaGVjayB3aHkgdGhlIHNlcnZlciBpcyBzdG9yaW5nIGEgbnVsbCB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmIChkYXRhW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgZGF0YVt1bmRlZmluZWRdO1xuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcm9vbXM6IGRhdGEsXG4gICAgICAgICAgICAgICAgcm9vbU5hbWVzOiBPYmplY3Qua2V5cyhkYXRhKVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnRleHQuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0LmVtaXQoXCJnZXRSb29tc1wiKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+Um9vbW5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+TnVtYmVyIG9mIFBsYXllcnM8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucm9vbU5hbWVzLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD57a2V5fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLnJvb21zW2tleV19LzI8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvYmJ5XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9HYW1lL0xvYmJ5LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=