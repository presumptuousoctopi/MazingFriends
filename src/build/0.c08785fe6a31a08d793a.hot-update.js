webpackHotUpdate(0,{

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

/***/ 277:
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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0NoYXRWaWV3LmpzeD85MzljIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUvVmlkZW9DaGF0LmpzeD9jMmViIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUvR2FtZU92ZXIuanN4PzY5N2EiXSwibmFtZXMiOlsiQ2hhdCIsInN0YXRlIiwidmlkZW8iLCJjb25zb2xlIiwibG9nIiwidGV4dCIsInNldFN0YXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImxvY2F0aW9uIiwicmVsb2FkIiwicHJvcHMiLCJ0aW1lciIsImNvbnRyb2xzQ2xpY2tIYW5kbGVyIiwic3RvcEdhbWUiLCJiaW5kIiwic3dpdGNoQ2hhdCIsIkNvbXBvbmVudCIsIlZpZGVvQ2hhdCIsImlzQ2hhbm5lbFJlYWR5IiwiaXNJbml0aWF0b3IiLCJpc1N0YXJ0ZWQiLCJjb250ZXh0IiwicGMiLCJsb2NhbFN0cmVhbSIsInJlbW90ZVN0cmVhbSIsInR1cm5SZWFkeSIsInJvb20iLCJwY0NvbmZpZyIsInNkcENvbnN0cmFpbnRzIiwibG9jYWxWaWRlbyIsInF1ZXJ5U2VsZWN0b3IiLCJzcmMiLCJyZW1vdGVWaWRlbyIsInNvY2tldCIsIm9uIiwicm9vbU5hbWUiLCJlbWl0IiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiYXVkaW8iLCJ0aGVuIiwiZ290U3RyZWFtIiwiY2F0Y2giLCJlIiwiYWxlcnQiLCJuYW1lIiwiYXJyYXkiLCJhcHBseSIsInNlbmRNZXNzYWdlIiwibWVzc2FnZSIsInN0YXJ0IiwidHlwZSIsInNldFJlbW90ZURlc2NyaXB0aW9uIiwiUlRDU2Vzc2lvbkRlc2NyaXB0aW9uIiwiY3JlYXRlQW5zd2VyIiwiY2FuZGlkYXRlIiwiUlRDSWNlQ2FuZGlkYXRlIiwic2RwTUxpbmVJbmRleCIsImxhYmVsIiwiYWRkSWNlQ2FuZGlkYXRlIiwiaGFuZGxlUmVtb3RlSGFuZ3VwIiwic3RyZWFtIiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY29uc3RyYWludHMiLCJjcmVhdGVQZWVyQ29ubmVjdGlvbiIsImFkZFN0cmVhbSIsImNhbGwiLCJvbmJlZm9yZXVubG9hZCIsIlJUQ1BlZXJDb25uZWN0aW9uIiwib25pY2VjYW5kaWRhdGUiLCJoYW5kbGVJY2VDYW5kaWRhdGUiLCJvbmFkZHN0cmVhbSIsImhhbmRsZVJlbW90ZVN0cmVhbUFkZGVkIiwib25yZW1vdmVzdHJlYW0iLCJoYW5kbGVSZW1vdGVTdHJlYW1SZW1vdmVkIiwiZXZlbnQiLCJpZCIsInNkcE1pZCIsImhhbmRsZUNyZWF0ZU9mZmVyRXJyb3IiLCJjcmVhdGVPZmZlciIsInNldExvY2FsQW5kU2VuZE1lc3NhZ2UiLCJvbkNyZWF0ZVNlc3Npb25EZXNjcmlwdGlvbkVycm9yIiwic2Vzc2lvbkRlc2NyaXB0aW9uIiwic2V0TG9jYWxEZXNjcmlwdGlvbiIsImVycm9yIiwidG9TdHJpbmciLCJoYW5ndXAiLCJzdG9wIiwiY2xvc2UiLCJwdXNoIiwicGF0aG5hbWUiLCJHYW1lT3ZlciIsInRpbWUiLCJxdWl0R2FtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU1BLEk7OztBQUNKLG1CQUFjO0FBQUE7O0FBQUE7O0FBRVosV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQU87QUFESSxNQUFiO0FBR0FDLGFBQVFDLEdBQVIsQ0FBWSxNQUFLSCxLQUFMLENBQVdJLElBQXZCO0FBTFk7QUFNYjs7OztrQ0FFWTtBQUNYLFlBQUtDLFFBQUwsQ0FBYztBQUNaSixnQkFBTztBQURLLFFBQWQ7QUFHQTtBQUNBO0FBQ0E7QUFDRDs7O2dDQUVVO0FBQ1RLLGdCQUFTQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDQyxNQUFsQztBQUNBQyxnQkFBU0MsTUFBVDtBQUNEOzs7OEJBRVE7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QVosRUFBbUI7QUFBQTs7QUFBQSxnSEFDWkEsS0FEWTtBQUVsQjs7OztnQ0FFVztBQUNUTCxnQkFBU0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsTUFBbEM7QUFDQUMsZ0JBQVNDLE1BQVQ7QUFDRDs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFVBQWY7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFBQTtBQUNxQixrREFEckI7QUFFQztBQUFBO0FBQUE7QUFBQTtBQUFnQixnQkFBS0MsS0FBTCxDQUFXcUY7QUFBM0IsVUFGRDtBQUFBO0FBRXVDLGtEQUZ2QztBQUdDO0FBQUE7QUFBQSxhQUFRLFdBQVUsYUFBbEI7QUFBQTtBQUFBLFVBSEQ7QUFBQTtBQUd1RCxrREFIdkQ7QUFJQztBQUFBO0FBQUEsYUFBTSxJQUFHLEdBQVQ7QUFBYTtBQUFBO0FBQUEsZUFBUSxXQUFVLGFBQWxCLEVBQWdDLFNBQVMsS0FBS0MsUUFBTCxDQUFjbEYsSUFBZCxDQUFtQixJQUFuQixDQUF6QztBQUFBO0FBQUE7QUFBYjtBQUpELFFBREY7QUFRRDs7OztHQW5Cb0IsZ0JBQU1FLFM7O21CQXNCZDhFLFEiLCJmaWxlIjoiMC5jMDg3ODVmZTZhMzFhMDhkNzkzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgVGV4dENoYXQgZnJvbSAnLi9UZXh0Q2hhdC5qc3gnXHJcbmltcG9ydCBWaWRlb0NoYXQgZnJvbSAnLi9WaWRlb0NoYXQuanN4JztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vUHJvZ3Jlc3NCYXIuanN4J1xyXG5cclxuY2xhc3MgQ2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdmlkZW86IHRydWVcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudGV4dClcclxuICB9XHJcblxyXG4gIHN3aXRjaENoYXQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdmlkZW86IGZhbHNlXHJcbiAgICB9KVxyXG4gICAgLy8gaWYgKHZhbHVlID09PSAndmlkZW8nKSB7XHJcbiAgICAvLyAgIHNvY2tldC5lbWl0KCdjaGFuZ2VkVG9WaWRlbycsICcnKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIHN0b3BHYW1lKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikucmVtb3ZlKCk7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiT3B0aW9uc1wiPlxyXG4gICAgICAgICAgPGgxPk1hemluZyBGcmllbmRzPC9oMT5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnRpbWVyID8gPGgyPnt0aGlzLnByb3BzLnRpbWVyfTwvaDI+IDogPHA+d2FpdGluZyBmb3Igc2Vjb25kIHBsYXllci4uLjwvcD59XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbkJ1dHRvbnNcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNvbnRyb2xzQ2xpY2tIYW5kbGVyfT5Db250cm9sczwvYnV0dG9uPlxyXG4gICAgICAgICAgPExpbmsgdG89XCIvXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb25CdXR0b25zXCIgb25DbGljaz17dGhpcy5zdG9wR2FtZS5iaW5kKHRoaXMpfT5RdWl0IEdhbWU8L2J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3RoaXMuc3RhdGUudmlkZW8gPyA8VmlkZW9DaGF0Lz4gOiAnJyB9XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjaGF0XCIgdmFsdWU9XCJ2aWRlb1wiIG9uQ2hhbmdlPXt0aGlzLnN3aXRjaENoYXQuYmluZCh0aGlzKX0vPlZpZGVvIE9mZlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxUZXh0Q2hhdC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9HYW1lL0NoYXRWaWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7YnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG5jbGFzcyBWaWRlb0NoYXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIgKClcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc0NoYW5uZWxSZWFkeTogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzSW5pdGlhdG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNTdGFydGVkOiBmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHBjO1xyXG4gICAgICAgIHZhciBsb2NhbFN0cmVhbTtcclxuICAgICAgICB2YXIgcmVtb3RlU3RyZWFtO1xyXG4gICAgICAgIHZhciB0dXJuUmVhZHk7XHJcbiAgICAgICAgdmFyIHJvb207XHJcbiAgICAgICAgLy9zdHVuIHNlcnZlciBmb3IgbmV0d29yayBkYXRhXHJcbiAgICAgICAgdmFyIHBjQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAnaWNlU2VydmVycyc6IFt7XHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ3N0dW46c3R1bi5sLmdvb2dsZS5jb206MTkzMDInXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBTZXQgdXAgYXVkaW8gYW5kIHZpZGVvIHJlZ2FyZGxlc3Mgb2Ygd2hhdCBkZXZpY2VzIGFyZSBwcmVzZW50LlxyXG4gICAgICAgIHZhciBzZHBDb25zdHJhaW50cyA9IHtcclxuICAgICAgICAgICAgJ21hbmRhdG9yeSc6IHtcclxuICAgICAgICAgICAgICAgICdPZmZlclRvUmVjZWl2ZUF1ZGlvJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICdPZmZlclRvUmVjZWl2ZVZpZGVvJzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy95b3VyIHNjcmVlbiBpcyBsb2NhbCB2aWRlby0gb3RoZXIgcGVyc29uIGlzIHJlbW90ZSB2aWRlb1xyXG4gICAgICAgIHZhciBsb2NhbFZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2FsVmlkZW8nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvY2FsIHZpZGVvXCIsIGxvY2FsVmlkZW8uc3JjKTtcclxuICAgICAgICB2YXIgcmVtb3RlVmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3RlVmlkZW8nKTtcclxuICAgICAgICBzb2NrZXQub24oJ3Jvb21OYW1lJywgZnVuY3Rpb24ocm9vbU5hbWUpIHtcclxuICAgICAgICAgICAgcm9vbSA9IHJvb21OYW1lO1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnY3JlYXRlIG9yIGpvaW4nLCByb29tKTtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xyXG4gICAgICAgICAgICAgICAgYXVkaW86IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2aWRlbzogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZ290U3RyZWFtKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnZ2V0VXNlck1lZGlhKCkgZXJyb3I6ICcgKyBlLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSb29tIG5hbWUgOiAnLCByb29tTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBzb2NrZXQub24oJ2NyZWF0ZWQnLCBmdW5jdGlvbihyb29tKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIHJvb20gJyArIHJvb20pO1xyXG4gICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzSW5pdGlhdG9yOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuLy9vbmNlIHRoZSBzZWNvbmQgcGVyc29uIGpvaW5zLCBzZXQgY2hhbm5lbCB0byB0cnVlXHJcbiAgICAgICAgc29ja2V0Lm9uKCdqb2luJywgZnVuY3Rpb24gKHJvb20pe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQW5vdGhlciBwZWVyIG1hZGUgYSByZXF1ZXN0IHRvIGpvaW4gcm9vbSAnICsgcm9vbSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNDaGFubmVsUmVhZHk6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9zb2NrZXQub24oJ2pvaW5lZCcsIGZ1bmN0aW9uKHJvb20pIHtcclxuICAgICAgICAvLyAgICBjb25zb2xlLmxvZygnam9pbmVkOiAnICsgcm9vbSk7XHJcbiAgICAgICAgLy8gICAgaXNDaGFubmVsUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgIC8vfSk7XHJcblxyXG4gICAgICAgIHNvY2tldC5vbignbG9nJywgZnVuY3Rpb24oYXJyYXkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJyYXkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb2NrZXQub24oJ2Z1bGwnLCBmdW5jdGlvbihyb29tKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJSb29tIGlzIGZ1bGxcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsaWVudCBzZW5kaW5nIG1lc3NhZ2U6ICcsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbi8vIFRoaXMgY2xpZW50IHJlY2VpdmVzIGEgbWVzc2FnZVxyXG4gICAgICAgIHNvY2tldC5vbignbWVzc2FnZScsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsaWVudCByZWNlaXZlZCBtZXNzYWdlOicsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAvL2lmIHBlcnNvbiBpbml0aWF0ZXMgY2FsbCwgaW52b2tlIHN0YXJ0XHJcbiAgICAgICAgICAgIC8vIGVsc2UgaWYgcGVyc29uIHJlY2VpdmVzIGFuIG9mZmVyLCBzZWNvbmQgcGVyc29uIGludm9rZXMgc3RhcnRcclxuICAgICAgICAgICAgLy9lbHNlIGlmIHBlcnNvbiByZWNlaXZlcyBhbiBhbnN3ZXIgZnJvbSBzZWNvbmQgcGVyc29uLCBzZXQgcmVtb3RlIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlID09PSAnZ290IHVzZXIgbWVkaWEnKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ29mZmVyJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNQUtJTkcgQU4gT0ZGRVJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRleHQuc3RhdGUuaXNJbml0aWF0b3IgJiYgIWNvbnRleHQuc3RhdGUuaXNTdGFydGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBjQ29uZmlnLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24obWVzc2FnZSksIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQW5zd2VyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Fuc3dlcicgJiYgY29udGV4dC5zdGF0ZS5pc1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHBjQ29uZmlnLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24obWVzc2FnZSkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2NhbmRpZGF0ZScgJiYgY29udGV4dC5zdGF0ZS5pc1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjYW5kaWRhdGUgPSBuZXcgUlRDSWNlQ2FuZGlkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzZHBNTGluZUluZGV4OiBtZXNzYWdlLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZTogbWVzc2FnZS5jYW5kaWRhdGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDQU5ESURBVEU6XCIsIGNhbmRpZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBwY0NvbmZpZy5hZGRJY2VDYW5kaWRhdGUoY2FuZGlkYXRlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnYnllJyAmJiBjb250ZXh0LnN0YXRlLmlzU3RhcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlUmVtb3RlSGFuZ3VwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4vL3NldCB0aGUgbG9jYWwgc3RyZWFtXHJcbiAgICAgICAgZnVuY3Rpb24gZ290U3RyZWFtKHN0cmVhbSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkaW5nIGxvY2FsIHN0cmVhbS4nKTtcclxuICAgICAgICAgICAgbG9jYWxWaWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvY2FsIHZpZGVvIHNvdXJjZVwiLCBsb2NhbFZpZGVvLnNyYyk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RyZWFtID0gc3RyZWFtO1xyXG4gICAgICAgICAgICBzZW5kTWVzc2FnZSgnZ290IHVzZXIgbWVkaWEnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpcyBpbml0aWF0b3JcIiwgY29udGV4dC5zdGF0ZS5pc0luaXRpYXRvcik7XHJcbiAgICAgICAgICAgIGlmIChjb250ZXh0LnN0YXRlLmlzSW5pdGlhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY29uc3RyYWludHMgPSB7XHJcbiAgICAgICAgICAgIHZpZGVvOiB0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dldHRpbmcgdXNlciBtZWRpYSB3aXRoIGNvbnN0cmFpbnRzJywgY29uc3RyYWludHMpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy9pZiAobG9jYXRpb24uaG9zdG5hbWUgIT09ICdsb2NhbGhvc3QnKSB7XHJcbiAgICAgICAgLy8gICAgKFxyXG4gICAgICAgIC8vICAgICAgICAnaHR0cHM6Ly9jb21wdXRlZW5naW5lb25kZW1hbmQuYXBwc3BvdC5jb20vdHVybj91c2VybmFtZT00MTc4NDU3NCZrZXk9NDA4MDIxODkxMydcclxuICAgICAgICAvLyAgICApO1xyXG4gICAgICAgIC8vfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJz4+Pj4+Pj4gc3RhcnQgJywgY29udGV4dC5zdGF0ZS5pc1N0YXJ0ZWQsIGxvY2FsU3RyZWFtLCBjb250ZXh0LnN0YXRlLmlzQ2hhbm5lbFJlYWR5KTtcclxuICAgICAgICAgICAgaWYgKCFjb250ZXh0LnN0YXRlLmlzU3RhcnRlZCAmJiB0eXBlb2YgbG9jYWxTdHJlYW0gIT09ICd1bmRlZmluZWQnICYmIGNvbnRleHQuc3RhdGUuaXNDaGFubmVsUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4gY3JlYXRpbmcgcGVlciBjb25uZWN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVQZWVyQ29ubmVjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgcGNDb25maWcuYWRkU3RyZWFtKGxvY2FsU3RyZWFtKTtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU3RhcnRlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaXNJbml0aWF0b3InLCBjb250ZXh0LnN0YXRlLmlzSW5pdGlhdG9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb250ZXh0LnN0YXRlLmlzSW5pdGlhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoJ2J5ZScpO1xyXG4gICAgICAgIH07XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUGVlckNvbm5lY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vY3JlYXRlIGEgbmV3IHBlZXIgY29ubmVjdGlvblxyXG4gICAgICAgICAgICAvL2FkZCB0aGUgaWNlIGhhbmRsZXJcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHBjQ29uZmlnID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgcGNDb25maWcub25pY2VjYW5kaWRhdGUgPSBoYW5kbGVJY2VDYW5kaWRhdGU7XHJcbiAgICAgICAgICAgICAgICBwY0NvbmZpZy5vbmFkZHN0cmVhbSA9IGhhbmRsZVJlbW90ZVN0cmVhbUFkZGVkO1xyXG4gICAgICAgICAgICAgICAgcGNDb25maWcub25yZW1vdmVzdHJlYW0gPSBoYW5kbGVSZW1vdGVTdHJlYW1SZW1vdmVkO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgUlRDUGVlckNvbm5uZWN0aW9uJyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gY3JlYXRlIFBlZXJDb25uZWN0aW9uLCBleGNlcHRpb246ICcgKyBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0Nhbm5vdCBjcmVhdGUgUlRDUGVlckNvbm5lY3Rpb24gb2JqZWN0LicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVJY2VDYW5kaWRhdGUoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ljZWNhbmRpZGF0ZSBldmVudDogJywgZXZlbnQpO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NhbmRpZGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBldmVudC5jYW5kaWRhdGUuc2RwTWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZTogZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRW5kIG9mIGNhbmRpZGF0ZXMuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW90ZVN0cmVhbUFkZGVkKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdGUgc3RyZWFtIGFkZGVkLicpO1xyXG4gICAgICAgICAgICByZW1vdGVWaWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC5zdHJlYW0pO1xyXG4gICAgICAgICAgICByZW1vdGVTdHJlYW0gPSBldmVudC5zdHJlYW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVDcmVhdGVPZmZlckVycm9yKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGVPZmZlcigpIGVycm9yOiAnLCBldmVudCk7XHJcbiAgICAgICAgfVxyXG4vL2luaXRpYXRlIHRoZSBvZmZlciBhbmQgc2V0IHRoZSBsb2NhbCBkZXNjcmlwdGlvbih5b3VyIHBjKVxyXG4vL29uIHJlc3BvbnNlIHNldCB0aGUgcmVtb3RlIGRlc2NyaXB0aW9uKG90aGVyIHBlcnNvbnMgcGMpXHJcbiAgICAgICAgZnVuY3Rpb24gY2FsbCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlbmRpbmcgb2ZmZXIgdG8gcGVlcicpO1xyXG4gICAgICAgICAgICBwY0NvbmZpZy5jcmVhdGVPZmZlcihzZXRMb2NhbEFuZFNlbmRNZXNzYWdlLCBoYW5kbGVDcmVhdGVPZmZlckVycm9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUFuc3dlcigpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlbmRpbmcgYW5zd2VyIHRvIHBlZXIuJyk7XHJcbiAgICAgICAgICAgIHBjQ29uZmlnLmNyZWF0ZUFuc3dlcigpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBzZXRMb2NhbEFuZFNlbmRNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgb25DcmVhdGVTZXNzaW9uRGVzY3JpcHRpb25FcnJvclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0TG9jYWxBbmRTZW5kTWVzc2FnZShzZXNzaW9uRGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgLy8gU2V0IE9wdXMgYXMgdGhlIHByZWZlcnJlZCBjb2RlYyBpbiBTRFAgaWYgT3B1cyBpcyBwcmVzZW50LlxyXG4gICAgICAgICAgICAvLyAgc2Vzc2lvbkRlc2NyaXB0aW9uLnNkcCA9IHByZWZlck9wdXMoc2Vzc2lvbkRlc2NyaXB0aW9uLnNkcCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0VTU0lPTkRFU0NSSVBUSU9OOlwiLCBzZXNzaW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBwY0NvbmZpZy5zZXRMb2NhbERlc2NyaXB0aW9uKHNlc3Npb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXRMb2NhbEFuZFNlbmRNZXNzYWdlIHNlbmRpbmcgbWVzc2FnZScsIHNlc3Npb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKHNlc3Npb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvbkNyZWF0ZVNlc3Npb25EZXNjcmlwdGlvbkVycm9yKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gY3JlYXRlIHNlc3Npb24gZGVzY3JpcHRpb246ICcgKyBlcnJvci50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9OT1QgQkVJTkcgVVNFRCBSSUdIVCBOT1dcclxuLy9UVVJOIHNlcnZlcnMtIGlmIElDRSBjYW50IGZpbmQgdGhlIGV4dGVybmFsIGFkZHJlc3MsIHRyYWZmaWMgd2lsbCBiZSByb3V0ZWQgdXNpbmcgdHVybiBzZXJ2ZXJzXHJcbi8vICAgICAgICBmdW5jdGlvbiByZXF1ZXN0VHVybih0dXJuVVJMKSB7XHJcbi8vICAgICAgICAgICAgdmFyIHR1cm5FeGlzdHMgPSBmYWxzZTtcclxuLy8gICAgICAgICAgICBmb3IgKHZhciBpIGluIHBjQ29uZmlnLmljZVNlcnZlcnMpIHtcclxuLy8gICAgICAgICAgICAgICAgaWYgKHBjQ29uZmlnLmljZVNlcnZlcnNbaV0udXJsLnN1YnN0cigwLCA1KSA9PT0gJ3R1cm46Jykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgdHVybkV4aXN0cyA9IHRydWU7XHJcbi8vICAgICAgICAgICAgICAgICAgICB0dXJuUmVhZHkgPSB0cnVlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgaWYgKCF0dXJuRXhpc3RzKSB7XHJcbi8vICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHZXR0aW5nIFRVUk4gc2VydmVyIGZyb20gJywgdHVyblVSTCk7XHJcbi8vICAgICAgICAgICAgICAgIC8vIE5vIFRVUk4gc2VydmVyLiBHZXQgb25lIGZyb20gY29tcHV0ZWVuZ2luZW9uZGVtYW5kLmFwcHNwb3QuY29tOlxyXG4vLyAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbi8vICAgICAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHVyblNlcnZlciA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvdCBUVVJOIHNlcnZlcjogJywgdHVyblNlcnZlcik7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgcGNDb25maWcuaWNlU2VydmVycy5wdXNoKHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VybCc6ICd0dXJuOicgKyB0dXJuU2VydmVyLnVzZXJuYW1lICsgJ0AnICsgdHVyblNlcnZlci50dXJuLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY3JlZGVudGlhbCc6IHR1cm5TZXJ2ZXIucGFzc3dvcmRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB0dXJuUmVhZHkgPSB0cnVlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICB9O1xyXG4vLyAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgdHVyblVSTCwgdHJ1ZSk7XHJcbi8vICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdGVTdHJlYW1BZGRlZChldmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3RlIHN0cmVhbSBhZGRlZC4nKTtcclxuICAgICAgICAgICAgcmVtb3RlVmlkZW8uc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQuc3RyZWFtKTtcclxuICAgICAgICAgICAgcmVtb3RlU3RyZWFtID0gZXZlbnQuc3RyZWFtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVtb3RlU3RyZWFtUmVtb3ZlZChldmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3RlIHN0cmVhbSByZW1vdmVkLiBFdmVudDogJywgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZ3VwKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSGFuZ2luZyB1cC4nKTtcclxuICAgICAgICAgICAgc3RvcCgpO1xyXG4gICAgICAgICAgICBzZW5kTWVzc2FnZSgnYnllJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdGVIYW5ndXAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXNzaW9uIHRlcm1pbmF0ZWQuJyk7XHJcbiAgICAgICAgICAgIHN0b3AoKTtcclxuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc0luaXRpYXRvcjogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdG9wKCkge1xyXG4gICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzU3RhcnRlZDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGlzQXVkaW9NdXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBpc1ZpZGVvTXV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgcGNDb25maWcuY2xvc2UoKTtcclxuICAgICAgICAgICAgcGNDb25maWcgPSBudWxsO1xyXG4gICAgICAgICAgICBsb2NhbFZpZGVvLnNyYyA9IG51bGw7XHJcbiAgICAgICAgICAgIHJlbW90ZVZpZGVvLnNyYyA9IG51bGw7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2hvbWUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9OT1QgQkVJTkcgVVNFRCBSSUdIVCBOT1dcclxuLy8gU2V0IE9wdXMgYXMgdGhlIGRlZmF1bHQgYXVkaW8gY29kZWMgaWYgaXQncyBwcmVzZW50LlxyXG4vLyAgICAgICAgZnVuY3Rpb24gcHJlZmVyT3B1cyhzZHApIHtcclxuLy8gICAgICAgICAgICB2YXIgc2RwTGluZXMgPSBzZHAuc3BsaXQoJ1xcclxcbicpO1xyXG4vLyAgICAgICAgICAgIHZhciBtTGluZUluZGV4O1xyXG4vLyAgICAgICAgICAgIC8vIFNlYXJjaCBmb3IgbSBsaW5lLlxyXG4vLyAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2RwTGluZXMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgICAgaWYgKHNkcExpbmVzW2ldLnNlYXJjaCgnbT1hdWRpbycpICE9PSAtMSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgbUxpbmVJbmRleCA9IGk7XHJcbi8vICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICBpZiAobUxpbmVJbmRleCA9PT0gbnVsbCkge1xyXG4vLyAgICAgICAgICAgICAgICByZXR1cm4gc2RwO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAvLyBJZiBPcHVzIGlzIGF2YWlsYWJsZSwgc2V0IGl0IGFzIHRoZSBkZWZhdWx0IGluIG0gbGluZS5cclxuLy8gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2RwTGluZXMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgICAgaWYgKHNkcExpbmVzW2ldLnNlYXJjaCgnb3B1cy80ODAwMCcpICE9PSAtMSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgdmFyIG9wdXNQYXlsb2FkID0gZXh0cmFjdFNkcChzZHBMaW5lc1tpXSwgLzooXFxkKykgb3B1c1xcLzQ4MDAwL2kpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgaWYgKG9wdXNQYXlsb2FkKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgc2RwTGluZXNbbUxpbmVJbmRleF0gPSBzZXREZWZhdWx0Q29kZWMoc2RwTGluZXNbbUxpbmVJbmRleF0sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdXNQYXlsb2FkKTtcclxuLy8gICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgIC8vIFJlbW92ZSBDTiBpbiBtIGxpbmUgYW5kIHNkcC5cclxuLy8gICAgICAgICAgICBzZHBMaW5lcyA9IHJlbW92ZUNOKHNkcExpbmVzLCBtTGluZUluZGV4KTtcclxuLy9cclxuLy8gICAgICAgICAgICBzZHAgPSBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKTtcclxuLy8gICAgICAgICAgICByZXR1cm4gc2RwO1xyXG4vLyAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2Z1bmN0aW9uIGV4dHJhY3RTZHAoc2RwTGluZSwgcGF0dGVybikge1xyXG4gICAgICAgIC8vICAgIHZhciByZXN1bHQgPSBzZHBMaW5lLm1hdGNoKHBhdHRlcm4pO1xyXG4gICAgICAgIC8vICAgIHJldHVybiByZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCA9PT0gMiA/IHJlc3VsdFsxXSA6IG51bGw7XHJcbiAgICAgICAgLy99XHJcblxyXG4vLyBTZXQgdGhlIHNlbGVjdGVkIGNvZGVjIHRvIHRoZSBmaXJzdCBpbiBtIGxpbmUuXHJcbi8vICAgICAgICBmdW5jdGlvbiBzZXREZWZhdWx0Q29kZWMobUxpbmUsIHBheWxvYWQpIHtcclxuLy8gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBtTGluZS5zcGxpdCgnICcpO1xyXG4vLyAgICAgICAgICAgIHZhciBuZXdMaW5lID0gW107XHJcbi8vICAgICAgICAgICAgdmFyIGluZGV4ID0gMDtcclxuLy8gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMykgeyAvLyBGb3JtYXQgb2YgbWVkaWEgc3RhcnRzIGZyb20gdGhlIGZvdXJ0aC5cclxuLy8gICAgICAgICAgICAgICAgICAgIG5ld0xpbmVbaW5kZXgrK10gPSBwYXlsb2FkOyAvLyBQdXQgdGFyZ2V0IHBheWxvYWQgdG8gdGhlIGZpcnN0LlxyXG4vLyAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgIGlmIChlbGVtZW50c1tpXSAhPT0gcGF5bG9hZCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgbmV3TGluZVtpbmRleCsrXSA9IGVsZW1lbnRzW2ldO1xyXG4vLyAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIHJldHVybiBuZXdMaW5lLmpvaW4oJyAnKTtcclxuLy8gICAgICAgIH1cclxuXHJcbi8vIFN0cmlwIENOIGZyb20gc2RwIGJlZm9yZSBDTiBjb25zdHJhaW50cyBpcyByZWFkeS5cclxuLy8gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUNOKHNkcExpbmVzLCBtTGluZUluZGV4KSB7XHJcbi8vICAgICAgICAgICAgdmFyIG1MaW5lRWxlbWVudHMgPSBzZHBMaW5lc1ttTGluZUluZGV4XS5zcGxpdCgnICcpO1xyXG4vLyAgICAgICAgICAgIC8vIFNjYW4gZnJvbSBlbmQgZm9yIHRoZSBjb252ZW5pZW5jZSBvZiByZW1vdmluZyBhbiBpdGVtLlxyXG4vLyAgICAgICAgICAgIGZvciAodmFyIGkgPSBzZHBMaW5lcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4vLyAgICAgICAgICAgICAgICB2YXIgcGF5bG9hZCA9IGV4dHJhY3RTZHAoc2RwTGluZXNbaV0sIC9hPXJ0cG1hcDooXFxkKykgQ05cXC9cXGQrL2kpO1xyXG4vLyAgICAgICAgICAgICAgICBpZiAocGF5bG9hZCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgdmFyIGNuUG9zID0gbUxpbmVFbGVtZW50cy5pbmRleE9mKHBheWxvYWQpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgaWYgKGNuUG9zICE9PSAtMSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBDTiBwYXlsb2FkIGZyb20gbSBsaW5lLlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIG1MaW5lRWxlbWVudHMuc3BsaWNlKGNuUG9zLCAxKTtcclxuLy8gICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBDTiBsaW5lIGluIHNkcFxyXG4vLyAgICAgICAgICAgICAgICAgICAgc2RwTGluZXMuc3BsaWNlKGksIDEpO1xyXG4vLyAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgIHNkcExpbmVzW21MaW5lSW5kZXhdID0gbUxpbmVFbGVtZW50cy5qb2luKCcgJyk7XHJcbi8vICAgICAgICAgICAgcmV0dXJuIHNkcExpbmVzO1xyXG4vLyAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cInZpZGVvc1wiPlxyXG4gICAgICAgICAgICAgICAgPHZpZGVvIGlkPVwibG9jYWxWaWRlb1wiIGF1dG9QbGF5IG11dGVkPjwvdmlkZW8+XHJcbiAgICAgICAgICAgICAgICA8dmlkZW8gaWQ9XCJyZW1vdGVWaWRlb1wiIGF1dG9QbGF5PjwvdmlkZW8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZGVvQ2hhdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9HYW1lL1ZpZGVvQ2hhdC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5cclxuY2xhc3MgR2FtZU92ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHR9XHJcblxyXG4gIHF1aXRHYW1lKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikucmVtb3ZlKCk7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR2FtZU92ZXJcIj5cclxuICAgICAgXHQ8aDE+R2FtZSBPdmVyITwvaDE+IDxici8+XHJcbiAgICAgIFx0PGgyPllvdXIgdGltZToge3RoaXMucHJvcHMudGltZX08L2gyPiA8YnIvPlxyXG4gICAgICBcdDxidXR0b24gY2xhc3NOYW1lPVwiaG9tZUJ1dHRvbnNcIj5LZWVwIFBsYXlpbmc8L2J1dHRvbj4gPGJyLz5cclxuICAgICAgXHQ8TGluayB0bz0nLyc+PGJ1dHRvbiBjbGFzc05hbWU9XCJob21lQnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMucXVpdEdhbWUuYmluZCh0aGlzKX0+UXVpdDwvYnV0dG9uPjwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZU92ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9HYW1lT3Zlci5qc3giXSwic291cmNlUm9vdCI6IiJ9