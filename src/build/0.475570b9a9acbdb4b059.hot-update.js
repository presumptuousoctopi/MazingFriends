webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(99);
	
	var _reactRouter = __webpack_require__(189);
	
	var _GameView = __webpack_require__(244);
	
	var _GameView2 = _interopRequireDefault(_GameView);
	
	var _LoginView = __webpack_require__(279);
	
	var _LoginView2 = _interopRequireDefault(_LoginView);
	
	var _HomeView = __webpack_require__(283);
	
	var _HomeView2 = _interopRequireDefault(_HomeView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _LoginView2.default, onEnter: requireAuth }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/game', component: _GameView2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _HomeView2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _LoginView2.default })
	), document.getElementById('app'));
	
	function requireAuth(nextState, replaceState) {
	  console.log('outside if statement');
	  if (!!window.sessionStorage.getItem('user')) {
	    console.log('Inside if statement in requireAuth');
	    replaceState({
	      pathname: '/home'
	    });
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var VideoChat = function (_React$Component) {
	    _inherits(VideoChat, _React$Component);
	
	    function VideoChat(props) {
	        _classCallCheck(this, VideoChat);
	
	        return _possibleConstructorReturn(this, (VideoChat.__proto__ || Object.getPrototypeOf(VideoChat)).call(this));
	    }
	
	    _createClass(VideoChat, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	
	            var isChannelReady = false;
	            var isInitiator = false;
	            var isStarted = false;
	            var localStream;
	            var pc;
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
	                isInitiator = true;
	            });
	
	            //once the second person joins, set channel to true
	            socket.on('join', function (room) {
	                console.log('Another peer made a request to join room ' + room);
	                isChannelReady = true;
	            });
	
	            socket.on('joined', function (room) {
	                console.log('joined: ' + room);
	                isChannelReady = true;
	            });
	
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
	                    if (!isInitiator && !isStarted) {
	                        start();
	                    }
	                    pc.setRemoteDescription(new RTCSessionDescription(message));
	                    createAnswer();
	                } else if (message.type === 'answer' && isStarted) {
	                    pc.setRemoteDescription(new RTCSessionDescription(message));
	                } else if (message.type === 'candidate' && isStarted) {
	                    var candidate = new RTCIceCandidate({
	                        sdpMLineIndex: message.label,
	                        candidate: message.candidate
	                    });
	                    pc.addIceCandidate(candidate);
	                } else if (message === 'bye' && isStarted) {
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
	                console.log("is initiator", isInitiator);
	                if (isInitiator) {
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
	                console.log('>>>>>>> start ', isStarted, localStream, isChannelReady);
	                if (!isStarted && typeof localStream !== 'undefined' && isChannelReady) {
	                    console.log('>>>>>> creating peer connection');
	                    createPeerConnection();
	                    pc.addStream(localStream);
	                    isStarted = true;
	                    console.log('isInitiator', isInitiator);
	                    if (isInitiator) {
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
	                    pc = new RTCPeerConnection(null);
	                    pc.onicecandidate = handleIceCandidate;
	                    pc.onaddstream = handleRemoteStreamAdded;
	                    pc.onremovestream = handleRemoteStreamRemoved;
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
	                pc.createOffer(setLocalAndSendMessage, handleCreateOfferError);
	            }
	
	            function createAnswer() {
	                console.log('Sending answer to peer.');
	                pc.createAnswer().then(setLocalAndSendMessage, onCreateSessionDescriptionError);
	            }
	
	            function setLocalAndSendMessage(sessionDescription) {
	                // Set Opus as the preferred codec in SDP if Opus is present.
	                //  sessionDescription.sdp = preferOpus(sessionDescription.sdp);
	                pc.setLocalDescription(sessionDescription);
	                console.log('setLocalAndSendMessage sending message', sessionDescription);
	                sendMessage(sessionDescription);
	            }
	
	            function onCreateSessionDescriptionError(error) {
	                console.log('Failed to create session description: ' + error.toString());
	            }
	            //TURN servers- if ICE cant find the external address, traffic will be routed using turn servers
	            function requestTurn(turnURL) {
	                var turnExists = false;
	                for (var i in pcConfig.iceServers) {
	                    if (pcConfig.iceServers[i].url.substr(0, 5) === 'turn:') {
	                        turnExists = true;
	                        turnReady = true;
	                        break;
	                    }
	                }
	                if (!turnExists) {
	                    console.log('Getting TURN server from ', turnURL);
	                    // No TURN server. Get one from computeengineondemand.appspot.com:
	                    var xhr = new XMLHttpRequest();
	                    xhr.onreadystatechange = function () {
	                        if (xhr.readyState === 4 && xhr.status === 200) {
	                            var turnServer = JSON.parse(xhr.responseText);
	                            console.log('Got TURN server: ', turnServer);
	                            pcConfig.iceServers.push({
	                                'url': 'turn:' + turnServer.username + '@' + turnServer.turn,
	                                'credential': turnServer.password
	                            });
	                            turnReady = true;
	                        }
	                    };
	                    xhr.open('GET', turnURL, true);
	                    xhr.send();
	                }
	            }
	
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
	                isInitiator = false;
	            }
	
	            function stop() {
	                isStarted = false;
	                // isAudioMuted = false;
	                // isVideoMuted = false;
	                pc.close();
	                pc = null;
	            }
	
	            ///////////////////////////////////////////
	
	            // Set Opus as the default audio codec if it's present.
	            function preferOpus(sdp) {
	                var sdpLines = sdp.split('\r\n');
	                var mLineIndex;
	                // Search for m line.
	                for (var i = 0; i < sdpLines.length; i++) {
	                    if (sdpLines[i].search('m=audio') !== -1) {
	                        mLineIndex = i;
	                        break;
	                    }
	                }
	                if (mLineIndex === null) {
	                    return sdp;
	                }
	
	                // If Opus is available, set it as the default in m line.
	                for (i = 0; i < sdpLines.length; i++) {
	                    if (sdpLines[i].search('opus/48000') !== -1) {
	                        var opusPayload = extractSdp(sdpLines[i], /:(\d+) opus\/48000/i);
	                        if (opusPayload) {
	                            sdpLines[mLineIndex] = setDefaultCodec(sdpLines[mLineIndex], opusPayload);
	                        }
	                        break;
	                    }
	                }
	
	                // Remove CN in m line and sdp.
	                sdpLines = removeCN(sdpLines, mLineIndex);
	
	                sdp = sdpLines.join('\r\n');
	                return sdp;
	            }
	
	            function extractSdp(sdpLine, pattern) {
	                var result = sdpLine.match(pattern);
	                return result && result.length === 2 ? result[1] : null;
	            }
	
	            // Set the selected codec to the first in m line.
	            function setDefaultCodec(mLine, payload) {
	                var elements = mLine.split(' ');
	                var newLine = [];
	                var index = 0;
	                for (var i = 0; i < elements.length; i++) {
	                    if (index === 3) {
	                        // Format of media starts from the fourth.
	                        newLine[index++] = payload; // Put target payload to the first.
	                    }
	                    if (elements[i] !== payload) {
	                        newLine[index++] = elements[i];
	                    }
	                }
	                return newLine.join(' ');
	            }
	
	            // Strip CN from sdp before CN constraints is ready.
	            function removeCN(sdpLines, mLineIndex) {
	                var mLineElements = sdpLines[mLineIndex].split(' ');
	                // Scan from end for the convenience of removing an item.
	                for (var i = sdpLines.length - 1; i >= 0; i--) {
	                    var payload = extractSdp(sdpLines[i], /a=rtpmap:(\d+) CN\/\d+/i);
	                    if (payload) {
	                        var cnPos = mLineElements.indexOf(payload);
	                        if (cnPos !== -1) {
	                            // Remove CN payload from m line.
	                            mLineElements.splice(cnPos, 1);
	                        }
	                        // Remove CN line in sdp
	                        sdpLines.splice(i, 1);
	                    }
	                }
	
	                sdpLines[mLineIndex] = mLineElements.join(' ');
	                return sdpLines;
	            }
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

/***/ 282:
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
	
	var Signup = function (_React$Component) {
	  _inherits(Signup, _React$Component);
	
	  function Signup() {
	    _classCallCheck(this, Signup);
	
	    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this));
	
	    _this.state = {
	      socket: socket
	    };
	    return _this;
	  }
	
	  _createClass(Signup, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var socket = window.socket;
	      var context = this;
	      socket.on('signupResponse', function (message) {
	        if (message) {
	          alert(message);
	        } else {
	          _reactRouter.browserHistory.push({ pathname: '/home' });
	        }
	      });
	
	      this.setState({
	        socket: socket
	      });
	    }
	  }, {
	    key: 'signUp',
	    value: function signUp(e) {
	      e.preventDefault();
	      var newUser = {
	        username: this.refs.username.value,
	        password: this.refs.password.value
	      };
	      console.log('in signup', newUser);
	      window.socket.emit('signup', newUser);
	      window.sessionStorage.setItem('user', this.refs.username.value);
	      var data = window.sessionStorage.getItem('user');
	      console.log(data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'form',
	        { onSubmit: this.signUp.bind(this) },
	        'Username:',
	        _react2.default.createElement('input', { ref: 'username', required: 'true' }),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement('br', null),
	        'Password:',
	        _react2.default.createElement('input', { type: 'password', ref: 'password', required: 'true' }),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement('br', null),
	        'Confirm Password:',
	        _react2.default.createElement('input', { type: 'password', required: 'true' }),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          'button',
	          { type: 'submit' },
	          'Sign up'
	        )
	      );
	    }
	  }]);
	
	  return Signup;
	}(_react2.default.Component);
	
	exports.default = Signup;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Signup.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1ZpZGVvQ2hhdC5qc3g/YzJlYiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9TaWdudXAuanN4PzZmNjUiXSwibmFtZXMiOlsicmVxdWlyZUF1dGgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibmV4dFN0YXRlIiwicmVwbGFjZVN0YXRlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInBhdGhuYW1lIiwiVmlkZW9DaGF0IiwicHJvcHMiLCJpc0NoYW5uZWxSZWFkeSIsImlzSW5pdGlhdG9yIiwiaXNTdGFydGVkIiwibG9jYWxTdHJlYW0iLCJwYyIsInJlbW90ZVN0cmVhbSIsInR1cm5SZWFkeSIsInJvb20iLCJwY0NvbmZpZyIsInNkcENvbnN0cmFpbnRzIiwibG9jYWxWaWRlbyIsInF1ZXJ5U2VsZWN0b3IiLCJzcmMiLCJyZW1vdGVWaWRlbyIsInNvY2tldCIsIm9uIiwicm9vbU5hbWUiLCJlbWl0IiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJ2aWRlbyIsInRoZW4iLCJnb3RTdHJlYW0iLCJjYXRjaCIsImUiLCJhbGVydCIsIm5hbWUiLCJhcnJheSIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJtZXNzYWdlIiwic3RhcnQiLCJ0eXBlIiwic2V0UmVtb3RlRGVzY3JpcHRpb24iLCJSVENTZXNzaW9uRGVzY3JpcHRpb24iLCJjcmVhdGVBbnN3ZXIiLCJjYW5kaWRhdGUiLCJSVENJY2VDYW5kaWRhdGUiLCJzZHBNTGluZUluZGV4IiwibGFiZWwiLCJhZGRJY2VDYW5kaWRhdGUiLCJoYW5kbGVSZW1vdGVIYW5ndXAiLCJzdHJlYW0iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjb25zdHJhaW50cyIsImNyZWF0ZVBlZXJDb25uZWN0aW9uIiwiYWRkU3RyZWFtIiwiY2FsbCIsIm9uYmVmb3JldW5sb2FkIiwiUlRDUGVlckNvbm5lY3Rpb24iLCJvbmljZWNhbmRpZGF0ZSIsImhhbmRsZUljZUNhbmRpZGF0ZSIsIm9uYWRkc3RyZWFtIiwiaGFuZGxlUmVtb3RlU3RyZWFtQWRkZWQiLCJvbnJlbW92ZXN0cmVhbSIsImhhbmRsZVJlbW90ZVN0cmVhbVJlbW92ZWQiLCJldmVudCIsImlkIiwic2RwTWlkIiwiaGFuZGxlQ3JlYXRlT2ZmZXJFcnJvciIsImNyZWF0ZU9mZmVyIiwic2V0TG9jYWxBbmRTZW5kTWVzc2FnZSIsIm9uQ3JlYXRlU2Vzc2lvbkRlc2NyaXB0aW9uRXJyb3IiLCJzZXNzaW9uRGVzY3JpcHRpb24iLCJzZXRMb2NhbERlc2NyaXB0aW9uIiwiZXJyb3IiLCJ0b1N0cmluZyIsInJlcXVlc3RUdXJuIiwidHVyblVSTCIsInR1cm5FeGlzdHMiLCJpIiwiaWNlU2VydmVycyIsInVybCIsInN1YnN0ciIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInR1cm5TZXJ2ZXIiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJwdXNoIiwidXNlcm5hbWUiLCJ0dXJuIiwicGFzc3dvcmQiLCJvcGVuIiwic2VuZCIsImhhbmd1cCIsInN0b3AiLCJjbG9zZSIsInByZWZlck9wdXMiLCJzZHAiLCJzZHBMaW5lcyIsInNwbGl0IiwibUxpbmVJbmRleCIsImxlbmd0aCIsInNlYXJjaCIsIm9wdXNQYXlsb2FkIiwiZXh0cmFjdFNkcCIsInNldERlZmF1bHRDb2RlYyIsInJlbW92ZUNOIiwiam9pbiIsInNkcExpbmUiLCJwYXR0ZXJuIiwicmVzdWx0IiwibWF0Y2giLCJtTGluZSIsInBheWxvYWQiLCJlbGVtZW50cyIsIm5ld0xpbmUiLCJpbmRleCIsIm1MaW5lRWxlbWVudHMiLCJjblBvcyIsImluZGV4T2YiLCJzcGxpY2UiLCJDb21wb25lbnQiLCJTaWdudXAiLCJzdGF0ZSIsImNvbnRleHQiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwibmV3VXNlciIsInJlZnMiLCJ2YWx1ZSIsInNldEl0ZW0iLCJkYXRhIiwic2lnblVwIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLHVCQUNFO0FBQUE7QUFBQSxLQUFRLG9DQUFSO0FBQ0EsdURBQU8sTUFBSyxHQUFaLEVBQWdCLDhCQUFoQixFQUFrQyxTQUFTQSxXQUEzQyxHQURBO0FBRUUsdURBQU8sTUFBSyxPQUFaLEVBQW9CLDZCQUFwQixHQUZGO0FBR0EsdURBQU8sTUFBSyxPQUFaLEVBQW9CLDZCQUFwQixHQUhBO0FBSUUsdURBQU8sTUFBSyxHQUFaLEVBQWdCLDhCQUFoQjtBQUpGLEVBREYsRUFPSUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQVBKOztBQVVBLFVBQVNGLFdBQVQsQ0FBcUJHLFNBQXJCLEVBQWdDQyxZQUFoQyxFQUE4QztBQUM1Q0MsV0FBUUMsR0FBUixDQUFZLHNCQUFaO0FBQ0EsT0FBSyxDQUFDLENBQUNDLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLENBQThCLE1BQTlCLENBQVAsRUFBK0M7QUFDN0NKLGFBQVFDLEdBQVIsQ0FBWSxvQ0FBWjtBQUNBRixrQkFBYTtBQUNYTSxpQkFBVTtBQURDLE1BQWI7QUFHRDtBQUNGLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JEOzs7Ozs7Ozs7Ozs7S0FFTUMsUzs7O0FBQ0Ysd0JBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTtBQUVuQjs7Ozs2Q0FDbUI7O0FBRWhCLGlCQUFJQyxpQkFBaUIsS0FBckI7QUFDQSxpQkFBSUMsY0FBYyxLQUFsQjtBQUNBLGlCQUFJQyxZQUFZLEtBQWhCO0FBQ0EsaUJBQUlDLFdBQUo7QUFDQSxpQkFBSUMsRUFBSjtBQUNBLGlCQUFJQyxZQUFKO0FBQ0EsaUJBQUlDLFNBQUo7QUFDQSxpQkFBSUMsSUFBSjtB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O0FBYkgsUUFERTtBQWlCRDs7OztHQXZEa0IsZ0JBQU1aLFM7O21CQTBEWkMsTSIsImZpbGUiOiIwLjQ3NTU3MGI5YTlhY2JkYjRiMDU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7Um91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgYnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBHYW1lIGZyb20gJy4vY29tcG9uZW50cy9HYW1lL0dhbWVWaWV3LmpzeCdcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4vTG9naW5WaWV3LmpzeCdcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lL0hvbWVWaWV3LmpzeCdcbmltcG9ydCB7IEluZGV4UmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbnJlbmRlcigoXG4gIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxuXHRcdDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17TG9naW59IG9uRW50ZXI9e3JlcXVpcmVBdXRofSAvPlxuICAgIDxSb3V0ZSBwYXRoPVwiL2dhbWVcIiBjb21wb25lbnQ9e0dhbWV9IC8+XG5cdFx0PFJvdXRlIHBhdGg9XCIvaG9tZVwiIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e0xvZ2lufSAvPlxuXHQ8L1JvdXRlcj5cblx0KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pO1xuXG5mdW5jdGlvbiByZXF1aXJlQXV0aChuZXh0U3RhdGUsIHJlcGxhY2VTdGF0ZSkge1xuICBjb25zb2xlLmxvZygnb3V0c2lkZSBpZiBzdGF0ZW1lbnQnKTtcbiAgaWYgKCAhIXdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykgKSB7XG4gICAgY29uc29sZS5sb2coJ0luc2lkZSBpZiBzdGF0ZW1lbnQgaW4gcmVxdWlyZUF1dGgnKTtcbiAgICByZXBsYWNlU3RhdGUoe1xuICAgICAgcGF0aG5hbWU6ICcvaG9tZSdcbiAgICB9KTtcbiAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBWaWRlb0NoYXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlciAoKVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgICAgICB2YXIgaXNDaGFubmVsUmVhZHkgPSBmYWxzZTtcbiAgICAgICAgdmFyIGlzSW5pdGlhdG9yID0gZmFsc2U7XG4gICAgICAgIHZhciBpc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGxvY2FsU3RyZWFtO1xuICAgICAgICB2YXIgcGM7XG4gICAgICAgIHZhciByZW1vdGVTdHJlYW07XG4gICAgICAgIHZhciB0dXJuUmVhZHk7XG4gICAgICAgIHZhciByb29tO1xuICAgICAgICAvL3N0dW4gc2VydmVyIGZvciBuZXR3b3JrIGRhdGFcbiAgICAgICAgdmFyIHBjQ29uZmlnID0ge1xuICAgICAgICAgICAgJ2ljZVNlcnZlcnMnOiBbe1xuICAgICAgICAgICAgICAgICd1cmwnOiAnc3R1bjpzdHVuLmwuZ29vZ2xlLmNvbToxOTMwMidcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG4gICAgICAgIC8vIFNldCB1cCBhdWRpbyBhbmQgdmlkZW8gcmVnYXJkbGVzcyBvZiB3aGF0IGRldmljZXMgYXJlIHByZXNlbnQuXG4gICAgICAgIHZhciBzZHBDb25zdHJhaW50cyA9IHtcbiAgICAgICAgICAgICdtYW5kYXRvcnknOiB7XG4gICAgICAgICAgICAgICAgJ09mZmVyVG9SZWNlaXZlQXVkaW8nOiB0cnVlLFxuICAgICAgICAgICAgICAgICdPZmZlclRvUmVjZWl2ZVZpZGVvJzogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8veW91ciBzY3JlZW4gaXMgbG9jYWwgdmlkZW8tIG90aGVyIHBlcnNvbiBpcyByZW1vdGUgdmlkZW9cbiAgICAgICAgdmFyIGxvY2FsVmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYWxWaWRlbycpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvY2FsIHZpZGVvXCIsIGxvY2FsVmlkZW8uc3JjKVxuICAgICAgICB2YXIgcmVtb3RlVmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3RlVmlkZW8nKTtcbiAgICAgICAgc29ja2V0Lm9uKCdyb29tTmFtZScsIGZ1bmN0aW9uKHJvb21OYW1lKSB7XG4gICAgICAgICAgICByb29tID0gcm9vbU5hbWU7XG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnY3JlYXRlIG9yIGpvaW4nLCByb29tKTtcbiAgICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcbiAgICAgICAgICAgICAgICBhdWRpbzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2aWRlbzogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihnb3RTdHJlYW0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2dldFVzZXJNZWRpYSgpIGVycm9yOiAnICsgZS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSb29tIG5hbWUgOiAnLCByb29tTmFtZSk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgc29ja2V0Lm9uKCdjcmVhdGVkJywgZnVuY3Rpb24ocm9vbSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgcm9vbSAnICsgcm9vbSk7XG4gICAgICAgICAgICBpc0luaXRpYXRvciA9IHRydWU7XG5cbiAgICAgICAgfSk7XG5cbi8vb25jZSB0aGUgc2Vjb25kIHBlcnNvbiBqb2lucywgc2V0IGNoYW5uZWwgdG8gdHJ1ZVxuICAgICAgICBzb2NrZXQub24oJ2pvaW4nLCBmdW5jdGlvbiAocm9vbSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQW5vdGhlciBwZWVyIG1hZGUgYSByZXF1ZXN0IHRvIGpvaW4gcm9vbSAnICsgcm9vbSk7XG4gICAgICAgICAgICBpc0NoYW5uZWxSZWFkeSA9IHRydWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNvY2tldC5vbignam9pbmVkJywgZnVuY3Rpb24ocm9vbSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2pvaW5lZDogJyArIHJvb20pO1xuICAgICAgICAgICAgaXNDaGFubmVsUmVhZHkgPSB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBzb2NrZXQub24oJ2xvZycsIGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcnJheSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNvY2tldC5vbignZnVsbCcsIGZ1bmN0aW9uKHJvb20pe1xuICAgICAgICAgICAgYWxlcnQoXCJSb29tIGlzIGZ1bGxcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDbGllbnQgc2VuZGluZyBtZXNzYWdlOiAnLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdtZXNzYWdlJywgbWVzc2FnZSk7XG4gICAgICAgIH1cblxuLy8gVGhpcyBjbGllbnQgcmVjZWl2ZXMgYSBtZXNzYWdlXG4gICAgICAgIHNvY2tldC5vbignbWVzc2FnZScsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDbGllbnQgcmVjZWl2ZWQgbWVzc2FnZTonLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIC8vaWYgcGVyc29uIGluaXRpYXRlcyBjYWxsLCBpbnZva2Ugc3RhcnRcbiAgICAgICAgICAgIC8vIGVsc2UgaWYgcGVyc29uIHJlY2VpdmVzIGFuIG9mZmVyLCBzZWNvbmQgcGVyc29uIGludm9rZXMgc3RhcnRcbiAgICAgICAgICAgIC8vZWxzZSBpZiBwZXJzb24gcmVjZWl2ZXMgYW4gYW5zd2VyIGZyb20gc2Vjb25kIHBlcnNvbiwgc2V0IHJlbW90ZSBkZXNjcmlwdGlvblxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UgPT09ICdnb3QgdXNlciBtZWRpYScpIHtcbiAgICAgICAgICAgICAgICBzdGFydCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdvZmZlcicpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzSW5pdGlhdG9yICYmICFpc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGMuc2V0UmVtb3RlRGVzY3JpcHRpb24obmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihtZXNzYWdlKSk7XG4gICAgICAgICAgICAgICAgY3JlYXRlQW5zd2VyKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Fuc3dlcicgJiYgaXNTdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgcGMuc2V0UmVtb3RlRGVzY3JpcHRpb24obmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihtZXNzYWdlKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2NhbmRpZGF0ZScgJiYgaXNTdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IG5ldyBSVENJY2VDYW5kaWRhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzZHBNTGluZUluZGV4OiBtZXNzYWdlLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGU6IG1lc3NhZ2UuY2FuZGlkYXRlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcGMuYWRkSWNlQ2FuZGlkYXRlKGNhbmRpZGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdieWUnICYmIGlzU3RhcnRlZCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZVJlbW90ZUhhbmd1cCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4vL3NldCB0aGUgbG9jYWwgc3RyZWFtXG4gICAgICAgIGZ1bmN0aW9uIGdvdFN0cmVhbShzdHJlYW0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgbG9jYWwgc3RyZWFtLicpO1xuICAgICAgICAgICAgbG9jYWxWaWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2NhbCB2aWRlbyBzb3VyY2VcIiwgbG9jYWxWaWRlby5zcmMpO1xuICAgICAgICAgICAgbG9jYWxTdHJlYW0gPSBzdHJlYW07XG4gICAgICAgICAgICBzZW5kTWVzc2FnZSgnZ290IHVzZXIgbWVkaWEnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXMgaW5pdGlhdG9yXCIsIGlzSW5pdGlhdG9yKTtcbiAgICAgICAgICAgIGlmIChpc0luaXRpYXRvcikge1xuICAgICAgICAgICAgICAgIHN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29uc3RyYWludHMgPSB7XG4gICAgICAgICAgICB2aWRlbzogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdHZXR0aW5nIHVzZXIgbWVkaWEgd2l0aCBjb25zdHJhaW50cycsIGNvbnN0cmFpbnRzKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy9pZiAobG9jYXRpb24uaG9zdG5hbWUgIT09ICdsb2NhbGhvc3QnKSB7XG4gICAgICAgIC8vICAgIChcbiAgICAgICAgLy8gICAgICAgICdodHRwczovL2NvbXB1dGVlbmdpbmVvbmRlbWFuZC5hcHBzcG90LmNvbS90dXJuP3VzZXJuYW1lPTQxNzg0NTc0JmtleT00MDgwMjE4OTEzJ1xuICAgICAgICAvLyAgICApO1xuICAgICAgICAvL31cblxuICAgICAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4+IHN0YXJ0ICcsIGlzU3RhcnRlZCwgbG9jYWxTdHJlYW0sIGlzQ2hhbm5lbFJlYWR5KTtcbiAgICAgICAgICAgIGlmICghaXNTdGFydGVkICYmIHR5cGVvZiBsb2NhbFN0cmVhbSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNDaGFubmVsUmVhZHkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPj4+Pj4+IGNyZWF0aW5nIHBlZXIgY29ubmVjdGlvbicpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBlZXJDb25uZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgcGMuYWRkU3RyZWFtKGxvY2FsU3RyZWFtKTtcbiAgICAgICAgICAgICAgICBpc1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpc0luaXRpYXRvcicsIGlzSW5pdGlhdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNJbml0aWF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoJ2J5ZScpO1xuICAgICAgICB9O1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQZWVyQ29ubmVjdGlvbigpIHtcbiAgICAgICAgICAgIC8vY3JlYXRlIGEgbmV3IHBlZXIgY29ubmVjdGlvblxuICAgICAgICAgICAgLy9hZGQgdGhlIGljZSBoYW5kbGVyXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBjID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKG51bGwpO1xuICAgICAgICAgICAgICAgIHBjLm9uaWNlY2FuZGlkYXRlID0gaGFuZGxlSWNlQ2FuZGlkYXRlO1xuICAgICAgICAgICAgICAgIHBjLm9uYWRkc3RyZWFtID0gaGFuZGxlUmVtb3RlU3RyZWFtQWRkZWQ7XG4gICAgICAgICAgICAgICAgcGMub25yZW1vdmVzdHJlYW0gPSBoYW5kbGVSZW1vdGVTdHJlYW1SZW1vdmVkO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIFJUQ1BlZXJDb25ubmVjdGlvbicpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gY3JlYXRlIFBlZXJDb25uZWN0aW9uLCBleGNlcHRpb246ICcgKyBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdDYW5ub3QgY3JlYXRlIFJUQ1BlZXJDb25uZWN0aW9uIG9iamVjdC4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVJY2VDYW5kaWRhdGUoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpY2VjYW5kaWRhdGUgZXZlbnQ6ICcsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudC5jYW5kaWRhdGUpIHtcbiAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjYW5kaWRhdGUnLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogZXZlbnQuY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBldmVudC5jYW5kaWRhdGUuc2RwTWlkLFxuICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGU6IGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VuZCBvZiBjYW5kaWRhdGVzLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVtb3RlU3RyZWFtQWRkZWQoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdGUgc3RyZWFtIGFkZGVkLicpO1xuICAgICAgICAgICAgcmVtb3RlVmlkZW8uc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQuc3RyZWFtKTtcbiAgICAgICAgICAgIHJlbW90ZVN0cmVhbSA9IGV2ZW50LnN0cmVhbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNyZWF0ZU9mZmVyRXJyb3IoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGVPZmZlcigpIGVycm9yOiAnLCBldmVudCk7XG4gICAgICAgIH1cbi8vaW5pdGlhdGUgdGhlIG9mZmVyIGFuZCBzZXQgdGhlIGxvY2FsIGRlc2NyaXB0aW9uKHlvdXIgcGMpXG4vL29uIHJlc3BvbnNlIHNldCB0aGUgcmVtb3RlIGRlc2NyaXB0aW9uKG90aGVyIHBlcnNvbnMgcGMpXG4gICAgICAgIGZ1bmN0aW9uIGNhbGwoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VuZGluZyBvZmZlciB0byBwZWVyJyk7XG4gICAgICAgICAgICBwYy5jcmVhdGVPZmZlcihzZXRMb2NhbEFuZFNlbmRNZXNzYWdlLCBoYW5kbGVDcmVhdGVPZmZlckVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUFuc3dlcigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZW5kaW5nIGFuc3dlciB0byBwZWVyLicpO1xuICAgICAgICAgICAgcGMuY3JlYXRlQW5zd2VyKCkudGhlbihcbiAgICAgICAgICAgICAgICBzZXRMb2NhbEFuZFNlbmRNZXNzYWdlLFxuICAgICAgICAgICAgICAgIG9uQ3JlYXRlU2Vzc2lvbkRlc2NyaXB0aW9uRXJyb3JcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRMb2NhbEFuZFNlbmRNZXNzYWdlKHNlc3Npb25EZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgLy8gU2V0IE9wdXMgYXMgdGhlIHByZWZlcnJlZCBjb2RlYyBpbiBTRFAgaWYgT3B1cyBpcyBwcmVzZW50LlxuICAgICAgICAgICAgLy8gIHNlc3Npb25EZXNjcmlwdGlvbi5zZHAgPSBwcmVmZXJPcHVzKHNlc3Npb25EZXNjcmlwdGlvbi5zZHApO1xuICAgICAgICAgICAgcGMuc2V0TG9jYWxEZXNjcmlwdGlvbihzZXNzaW9uRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldExvY2FsQW5kU2VuZE1lc3NhZ2Ugc2VuZGluZyBtZXNzYWdlJywgc2Vzc2lvbkRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKHNlc3Npb25EZXNjcmlwdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbkNyZWF0ZVNlc3Npb25EZXNjcmlwdGlvbkVycm9yKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGNyZWF0ZSBzZXNzaW9uIGRlc2NyaXB0aW9uOiAnICsgZXJyb3IudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbi8vVFVSTiBzZXJ2ZXJzLSBpZiBJQ0UgY2FudCBmaW5kIHRoZSBleHRlcm5hbCBhZGRyZXNzLCB0cmFmZmljIHdpbGwgYmUgcm91dGVkIHVzaW5nIHR1cm4gc2VydmVyc1xuICAgICAgICBmdW5jdGlvbiByZXF1ZXN0VHVybih0dXJuVVJMKSB7XG4gICAgICAgICAgICB2YXIgdHVybkV4aXN0cyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBwY0NvbmZpZy5pY2VTZXJ2ZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBjQ29uZmlnLmljZVNlcnZlcnNbaV0udXJsLnN1YnN0cigwLCA1KSA9PT0gJ3R1cm46Jykge1xuICAgICAgICAgICAgICAgICAgICB0dXJuRXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdHVyblJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0dXJuRXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dldHRpbmcgVFVSTiBzZXJ2ZXIgZnJvbSAnLCB0dXJuVVJMKTtcbiAgICAgICAgICAgICAgICAvLyBObyBUVVJOIHNlcnZlci4gR2V0IG9uZSBmcm9tIGNvbXB1dGVlbmdpbmVvbmRlbWFuZC5hcHBzcG90LmNvbTpcbiAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHVyblNlcnZlciA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR290IFRVUk4gc2VydmVyOiAnLCB0dXJuU2VydmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBjQ29uZmlnLmljZVNlcnZlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VybCc6ICd0dXJuOicgKyB0dXJuU2VydmVyLnVzZXJuYW1lICsgJ0AnICsgdHVyblNlcnZlci50dXJuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjcmVkZW50aWFsJzogdHVyblNlcnZlci5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0dXJuUmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgdHVyblVSTCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW90ZVN0cmVhbUFkZGVkKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3RlIHN0cmVhbSBhZGRlZC4nKTtcbiAgICAgICAgICAgIHJlbW90ZVZpZGVvLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50LnN0cmVhbSk7XG4gICAgICAgICAgICByZW1vdGVTdHJlYW0gPSBldmVudC5zdHJlYW07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdGVTdHJlYW1SZW1vdmVkKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3RlIHN0cmVhbSByZW1vdmVkLiBFdmVudDogJywgZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZ3VwKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hhbmdpbmcgdXAuJyk7XG4gICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgICAgICBzZW5kTWVzc2FnZSgnYnllJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdGVIYW5ndXAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2Vzc2lvbiB0ZXJtaW5hdGVkLicpO1xuICAgICAgICAgICAgc3RvcCgpO1xuICAgICAgICAgICAgaXNJbml0aWF0b3IgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgICBpc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIGlzQXVkaW9NdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gaXNWaWRlb011dGVkID0gZmFsc2U7XG4gICAgICAgICAgICBwYy5jbG9zZSgpO1xuICAgICAgICAgICAgcGMgPSBudWxsO1xuICAgICAgICB9XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gU2V0IE9wdXMgYXMgdGhlIGRlZmF1bHQgYXVkaW8gY29kZWMgaWYgaXQncyBwcmVzZW50LlxuICAgICAgICBmdW5jdGlvbiBwcmVmZXJPcHVzKHNkcCkge1xuICAgICAgICAgICAgdmFyIHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXHJcXG4nKTtcbiAgICAgICAgICAgIHZhciBtTGluZUluZGV4O1xuICAgICAgICAgICAgLy8gU2VhcmNoIGZvciBtIGxpbmUuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNkcExpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNkcExpbmVzW2ldLnNlYXJjaCgnbT1hdWRpbycpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBtTGluZUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1MaW5lSW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2RwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBPcHVzIGlzIGF2YWlsYWJsZSwgc2V0IGl0IGFzIHRoZSBkZWZhdWx0IGluIG0gbGluZS5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzZHBMaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzZHBMaW5lc1tpXS5zZWFyY2goJ29wdXMvNDgwMDAnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdXNQYXlsb2FkID0gZXh0cmFjdFNkcChzZHBMaW5lc1tpXSwgLzooXFxkKykgb3B1c1xcLzQ4MDAwL2kpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B1c1BheWxvYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNkcExpbmVzW21MaW5lSW5kZXhdID0gc2V0RGVmYXVsdENvZGVjKHNkcExpbmVzW21MaW5lSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdXNQYXlsb2FkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBDTiBpbiBtIGxpbmUgYW5kIHNkcC5cbiAgICAgICAgICAgIHNkcExpbmVzID0gcmVtb3ZlQ04oc2RwTGluZXMsIG1MaW5lSW5kZXgpO1xuXG4gICAgICAgICAgICBzZHAgPSBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKTtcbiAgICAgICAgICAgIHJldHVybiBzZHA7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBleHRyYWN0U2RwKHNkcExpbmUsIHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBzZHBMaW5lLm1hdGNoKHBhdHRlcm4pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoID09PSAyID8gcmVzdWx0WzFdIDogbnVsbDtcbiAgICAgICAgfVxuXG4vLyBTZXQgdGhlIHNlbGVjdGVkIGNvZGVjIHRvIHRoZSBmaXJzdCBpbiBtIGxpbmUuXG4gICAgICAgIGZ1bmN0aW9uIHNldERlZmF1bHRDb2RlYyhtTGluZSwgcGF5bG9hZCkge1xuICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gbUxpbmUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHZhciBuZXdMaW5lID0gW107XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMykgeyAvLyBGb3JtYXQgb2YgbWVkaWEgc3RhcnRzIGZyb20gdGhlIGZvdXJ0aC5cbiAgICAgICAgICAgICAgICAgICAgbmV3TGluZVtpbmRleCsrXSA9IHBheWxvYWQ7IC8vIFB1dCB0YXJnZXQgcGF5bG9hZCB0byB0aGUgZmlyc3QuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50c1tpXSAhPT0gcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdMaW5lW2luZGV4KytdID0gZWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld0xpbmUuam9pbignICcpO1xuICAgICAgICB9XG5cbi8vIFN0cmlwIENOIGZyb20gc2RwIGJlZm9yZSBDTiBjb25zdHJhaW50cyBpcyByZWFkeS5cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlQ04oc2RwTGluZXMsIG1MaW5lSW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBtTGluZUVsZW1lbnRzID0gc2RwTGluZXNbbUxpbmVJbmRleF0uc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIC8vIFNjYW4gZnJvbSBlbmQgZm9yIHRoZSBjb252ZW5pZW5jZSBvZiByZW1vdmluZyBhbiBpdGVtLlxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHNkcExpbmVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBleHRyYWN0U2RwKHNkcExpbmVzW2ldLCAvYT1ydHBtYXA6KFxcZCspIENOXFwvXFxkKy9pKTtcbiAgICAgICAgICAgICAgICBpZiAocGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY25Qb3MgPSBtTGluZUVsZW1lbnRzLmluZGV4T2YocGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjblBvcyAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBDTiBwYXlsb2FkIGZyb20gbSBsaW5lLlxuICAgICAgICAgICAgICAgICAgICAgICAgbUxpbmVFbGVtZW50cy5zcGxpY2UoY25Qb3MsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBDTiBsaW5lIGluIHNkcFxuICAgICAgICAgICAgICAgICAgICBzZHBMaW5lcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZHBMaW5lc1ttTGluZUluZGV4XSA9IG1MaW5lRWxlbWVudHMuam9pbignICcpO1xuICAgICAgICAgICAgcmV0dXJuIHNkcExpbmVzO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ2aWRlb3NcIj5cbiAgICAgICAgICAgICAgICA8dmlkZW8gaWQ9XCJsb2NhbFZpZGVvXCIgYXV0b1BsYXkgbXV0ZWQ+PC92aWRlbz5cbiAgICAgICAgICAgICAgICA8dmlkZW8gaWQ9XCJyZW1vdGVWaWRlb1wiIGF1dG9QbGF5PjwvdmlkZW8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvQ2hhdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9HYW1lL1ZpZGVvQ2hhdC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnOyBcbmltcG9ydCB7IExpbmssIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jbGFzcyBTaWdudXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzb2NrZXQ6IHNvY2tldFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgc29ja2V0ID0gd2luZG93LnNvY2tldDtcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgc29ja2V0Lm9uKCdzaWdudXBSZXNwb25zZScsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgIGlmICggbWVzc2FnZSApIHtcbiAgICAgICAgYWxlcnQobWVzc2FnZSk7ICAgICAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKHsgcGF0aG5hbWU6ICcvaG9tZSd9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc29ja2V0OiBzb2NrZXRcbiAgICB9KTtcbiAgfVxuXG4gIHNpZ25VcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBuZXdVc2VyID0ge1xuICAgICAgdXNlcm5hbWU6IHRoaXMucmVmcy51c2VybmFtZS52YWx1ZSxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnJlZnMucGFzc3dvcmQudmFsdWVcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCdpbiBzaWdudXAnLCBuZXdVc2VyKTtcbiAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ3NpZ251cCcsIG5ld1VzZXIpO1xuICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgdGhpcy5yZWZzLnVzZXJuYW1lLnZhbHVlKTtcbiAgICB2YXIgZGF0YSA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcblx0XHQ8Zm9ybSBvblN1Ym1pdD17dGhpcy5zaWduVXAuYmluZCh0aGlzKX0+XG4gICAgXHRVc2VybmFtZTpcbiAgICBcdDxpbnB1dCByZWY9XCJ1c2VybmFtZVwiIHJlcXVpcmVkPVwidHJ1ZVwiIC8+XG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cbiAgICBcdFBhc3N3b3JkOlxuICAgIFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHJlZj1cInBhc3N3b3JkXCIgcmVxdWlyZWQ9XCJ0cnVlXCIgLz5cbiAgICAgIDxici8+XG4gICAgICA8YnIvPlxuICAgICAgQ29uZmlybSBQYXNzd29yZDpcbiAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiByZXF1aXJlZD1cInRydWVcIi8+XG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cbiAgICBcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNpZ24gdXA8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWdudXBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Mb2dpbi9TaWdudXAuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==