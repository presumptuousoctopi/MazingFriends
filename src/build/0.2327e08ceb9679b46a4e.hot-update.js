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

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _UserStats = __webpack_require__(289);
	
	var _UserStats2 = _interopRequireDefault(_UserStats);
	
	var _FriendSearch = __webpack_require__(290);
	
	var _FriendSearch2 = _interopRequireDefault(_FriendSearch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Profile = function (_React$Component) {
	  _inherits(Profile, _React$Component);
	
	  function Profile() {
	    _classCallCheck(this, Profile);
	
	    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
	  }
	
	  _createClass(Profile, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'Profile' },
	        _react2.default.createElement(_FriendSearch2.default, null),
	        _react2.default.createElement(_UserStats2.default, null)
	      );
	    }
	  }]);
	
	  return Profile;
	}(_react2.default.Component);
	
	exports.default = Profile;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ProfileView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FriendSearch = __webpack_require__(290);
	
	var _FriendSearch2 = _interopRequireDefault(_FriendSearch);
	
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
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var context = this;
	            console.log("component did mount");
	            var context = this;
	            socket.on("receiveRooms", function (data) {
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
	                //context.forceUpdate();
	            });
	            socket.emit("getRooms");
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'TableContainer' },
	                _react2.default.createElement(
	                    'table',
	                    { className: 'LobbyTable' },
	                    _react2.default.createElement(
	                        'tr',
	                        null,
	                        _react2.default.createElement(
	                            'td',
	                            null,
	                            'Roomname'
	                        ),
	                        _react2.default.createElement(
	                            'td',
	                            null,
	                            'User'
	                        ),
	                        _react2.default.createElement(
	                            'td',
	                            null,
	                            'Capacity'
	                        ),
	                        _react2.default.createElement(
	                            'td',
	                            null,
	                            'Join'
	                        )
	                    ),
	                    this.state.roomNames.map(function (key, index) {
	                        console.log(key);
	                        return _react2.default.createElement(
	                            'tr',
	                            null,
	                            _react2.default.createElement(
	                                'td',
	                                null,
	                                key
	                            ),
	                            _react2.default.createElement(
	                                'td',
	                                null,
	                                _this2.state.rooms[key],
	                                '/2'
	                            ),
	                            _react2.default.createElement(
	                                'td',
	                                null,
	                                _this2.state.rooms[key] === 2 ? _react2.default.createElement(
	                                    'p',
	                                    null,
	                                    'Room Full'
	                                ) : _react2.default.createElement(
	                                    'button',
	                                    null,
	                                    'Join Game'
	                                )
	                            )
	                        );
	                    })
	                )
	            );
	        }
	    }]);
	
	    return Lobby;
	}(_react2.default.Component);
	
	exports.default = Lobby;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "JoinGame.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "FriendSearch.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0NoYXRWaWV3LmpzeD85MzljIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUvVmlkZW9DaGF0LmpzeD9jMmViIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUvR2FtZU92ZXIuanN4PzY5N2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9Qcm9maWxlVmlldy5qc3g/NWE4YiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0pvaW5HYW1lLmpzeD9iZDIxIl0sIm5hbWVzIjpbIkNoYXQiLCJzdGF0ZSIsInZpZGVvIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJzZXRTdGF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJsb2NhdGlvbiIsInJlbG9hZCIsInByb3BzIiwidGltZXIiLCJjb250cm9sc0NsaWNrSGFuZGxlciIsInN0b3BHYW1lIiwiYmluZCIsInN3aXRjaENoYXQiLCJDb21wb25lbnQiLCJWaWRlb0NoYXQiLCJpc0NoYW5uZWxSZWFkeSIsImlzSW5pdGlhdG9yIiwiaXNTdGFydGVkIiwiY29udGV4dCIsInBjIiwibG9jYWxTdHJlYW0iLCJyZW1vdGVTdHJlYW0iLCJ0dXJuUmVhZHkiLCJyb29tIiwicGNDb25maWciLCJzZHBDb25zdHJhaW50cyIsImxvY2FsVmlkZW8iLCJxdWVyeVNlbGVjdG9yIiwic3JjIiwicmVtb3RlVmlkZW8iLCJzb2NrZXQiLCJvbiIsInJvb21OYW1lIiwiZW1pdCIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidGhlbiIsImdvdFN0cmVhbSIsImNhdGNoIiwiZSIsImFsZXJ0IiwibmFtZSIsImFycmF5IiwiYXBwbHkiLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJzdGFydCIsInR5cGUiLCJzZXRSZW1vdGVEZXNjcmlwdGlvbiIsIlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiIsImNyZWF0ZUFuc3dlciIsImNhbmRpZGF0ZSIsIlJUQ0ljZUNhbmRpZGF0ZSIsInNkcE1MaW5lSW5kZXgiLCJsYWJlbCIsImFkZEljZUNhbmRpZGF0ZSIsImhhbmRsZVJlbW90ZUhhbmd1cCIsInN0cmVhbSIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImNvbnN0cmFpbnRzIiwiY3JlYXRlUGVlckNvbm5lY3Rpb24iLCJhZGRTdHJlYW0iLCJjYWxsIiwib25iZWZvcmV1bmxvYWQiLCJSVENQZWVyQ29ubmVjdGlvbiIsIm9uaWNlY2FuZGlkYXRlIiwiaGFuZGxlSWNlQ2FuZGlkYXRlIiwib25hZGRzdHJlYW0iLCJoYW5kbGVSZW1vdGVTdHJlYW1BZGRlZCIsIm9ucmVtb3Zlc3RyZWFtIiwiaGFuZGxlUmVtb3RlU3RyZWFtUmVtb3ZlZCIsImV2ZW50IiwiaWQiLCJzZHBNaWQiLCJoYW5kbGVDcmVhdGVPZmZlckVycm9yIiwiY3JlYXRlT2ZmZXIiLCJzZXRMb2NhbEFuZFNlbmRNZXNzYWdlIiwib25DcmVhdGVTZXNzaW9uRGVzY3JpcHRpb25FcnJvciIsInNlc3Npb25EZXNjcmlwdGlvbiIsInNldExvY2FsRGVzY3JpcHRpb24iLCJlcnJvciIsInRvU3RyaW5nIiwiaGFuZ3VwIiwic3RvcCIsImNsb3NlIiwicHVzaCIsInBhdGhuYW1lIiwiR2FtZU92ZXIiLCJ0aW1lIiwicXVpdEdhbWUiLCJQcm9maWxlIiwiTG9iYnkiLCJyb29tcyIsInJvb21OYW1lcyIsImRhdGEiLCJrZXkiLCJ1bmRlZmluZWQiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxJOzs7QUFDSixtQkFBYztBQUFBOztBQUFBOztBQUVaLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFPO0FBREksTUFBYjtBQUdBQyxh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QTtBQUFBO0FBQUEsMEJBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkosc0JBREo7QUFPSywwQkFBS3JDLEtBQUwsQ0FBV3FHLFNBQVgsQ0FBcUJNLEdBQXJCLENBQXlCLFVBQUNKLEdBQUQsRUFBTUssS0FBTixFQUFnQjtBQUN0QzFHLGlDQUFRQyxHQUFSLENBQVlvRyxHQUFaO0FBQ0osZ0NBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUtBO0FBQUwsOEJBREE7QUFFQTtBQUFBO0FBQUE7QUFBSyx3Q0FBS3ZHLEtBQUwsQ0FBV29HLEtBQVgsQ0FBaUJHLEdBQWpCLENBQUw7QUFBQTtBQUFBLDhCQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUssd0NBQUt2RyxLQUFMLENBQVdvRyxLQUFYLENBQWlCRyxHQUFqQixNQUEwQixDQUExQixHQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUE5QixHQUFpRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXREO0FBSEEsMEJBREE7QUFPSCxzQkFUSTtBQVBMO0FBREosY0FESjtBQXNCSDs7OztHQTFEZSxnQkFBTXRGLFM7O21CQTREWGtGLEsiLCJmaWxlIjoiMC4yMzI3ZTA4Y2ViOTY3OWI0NmE0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgVGV4dENoYXQgZnJvbSAnLi9UZXh0Q2hhdC5qc3gnXG5pbXBvcnQgVmlkZW9DaGF0IGZyb20gJy4vVmlkZW9DaGF0LmpzeCc7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9Qcm9ncmVzc0Jhci5qc3gnXG5cbmNsYXNzIENoYXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aWRlbzogdHJ1ZVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRleHQpXG4gIH1cblxuICBzd2l0Y2hDaGF0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlkZW86IGZhbHNlXG4gICAgfSlcbiAgICAvLyBpZiAodmFsdWUgPT09ICd2aWRlbycpIHtcbiAgICAvLyAgIHNvY2tldC5lbWl0KCdjaGFuZ2VkVG9WaWRlbycsICcnKTtcbiAgICAvLyB9XG4gIH1cblxuICBzdG9wR2FtZSgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKS5yZW1vdmUoKTtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGF0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiT3B0aW9uc1wiPlxuICAgICAgICAgIDxoMT5NYXppbmcgRnJpZW5kczwvaDE+XG4gICAgICAgICAge3RoaXMucHJvcHMudGltZXIgPyA8aDI+e3RoaXMucHJvcHMudGltZXJ9PC9oMj4gOiA8cD53YWl0aW5nIGZvciBzZWNvbmQgcGxheWVyLi4uPC9wPn1cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbkJ1dHRvbnNcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNvbnRyb2xzQ2xpY2tIYW5kbGVyfT5Db250cm9sczwvYnV0dG9uPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPjxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uQnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMuc3RvcEdhbWUuYmluZCh0aGlzKX0+UXVpdCBHYW1lPC9idXR0b24+PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMuc3RhdGUudmlkZW8gPyA8VmlkZW9DaGF0Lz4gOiAnJyB9XG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNoYXRcIiB2YWx1ZT1cInZpZGVvXCIgb25DaGFuZ2U9e3RoaXMuc3dpdGNoQ2hhdC5iaW5kKHRoaXMpfS8+VmlkZW8gT2ZmXG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8VGV4dENoYXQvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbWUvQ2hhdFZpZXcuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7YnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmNsYXNzIFZpZGVvQ2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyICgpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc0NoYW5uZWxSZWFkeTogZmFsc2UsXG4gICAgICAgICAgICBpc0luaXRpYXRvcjogZmFsc2UsXG4gICAgICAgICAgICBpc1N0YXJ0ZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgdmFyIHBjO1xuICAgICAgICB2YXIgbG9jYWxTdHJlYW07XG4gICAgICAgIHZhciByZW1vdGVTdHJlYW07XG4gICAgICAgIHZhciB0dXJuUmVhZHk7XG4gICAgICAgIHZhciByb29tO1xuICAgICAgICAvL3N0dW4gc2VydmVyIGZvciBuZXR3b3JrIGRhdGFcbiAgICAgICAgdmFyIHBjQ29uZmlnID0ge1xuICAgICAgICAgICAgJ2ljZVNlcnZlcnMnOiBbe1xuICAgICAgICAgICAgICAgICd1cmwnOiAnc3R1bjpzdHVuLmwuZ29vZ2xlLmNvbToxOTMwMidcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH07XG4gICAgICAgIC8vIFNldCB1cCBhdWRpbyBhbmQgdmlkZW8gcmVnYXJkbGVzcyBvZiB3aGF0IGRldmljZXMgYXJlIHByZXNlbnQuXG4gICAgICAgIHZhciBzZHBDb25zdHJhaW50cyA9IHtcbiAgICAgICAgICAgICdtYW5kYXRvcnknOiB7XG4gICAgICAgICAgICAgICAgJ09mZmVyVG9SZWNlaXZlQXVkaW8nOiB0cnVlLFxuICAgICAgICAgICAgICAgICdPZmZlclRvUmVjZWl2ZVZpZGVvJzogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8veW91ciBzY3JlZW4gaXMgbG9jYWwgdmlkZW8tIG90aGVyIHBlcnNvbiBpcyByZW1vdGUgdmlkZW9cbiAgICAgICAgdmFyIGxvY2FsVmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYWxWaWRlbycpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvY2FsIHZpZGVvXCIsIGxvY2FsVmlkZW8uc3JjKTtcbiAgICAgICAgdmFyIHJlbW90ZVZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW90ZVZpZGVvJyk7XG4gICAgICAgIHNvY2tldC5vbigncm9vbU5hbWUnLCBmdW5jdGlvbihyb29tTmFtZSkge1xuICAgICAgICAgICAgcm9vbSA9IHJvb21OYW1lO1xuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NyZWF0ZSBvciBqb2luJywgcm9vbSk7XG4gICAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgICAgICAgICAgICAgYXVkaW86IHRydWUsXG4gICAgICAgICAgICAgICAgdmlkZW86IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oZ290U3RyZWFtKVxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdnZXRVc2VyTWVkaWEoKSBlcnJvcjogJyArIGUubmFtZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUm9vbSBuYW1lIDogJywgcm9vbU5hbWUpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIHNvY2tldC5vbignY3JlYXRlZCcsIGZ1bmN0aW9uKHJvb20pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIHJvb20gJyArIHJvb20pO1xuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaXNJbml0aWF0b3I6IHRydWVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSk7XG5cbi8vb25jZSB0aGUgc2Vjb25kIHBlcnNvbiBqb2lucywgc2V0IGNoYW5uZWwgdG8gdHJ1ZVxuICAgICAgICBzb2NrZXQub24oJ2pvaW4nLCBmdW5jdGlvbiAocm9vbSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQW5vdGhlciBwZWVyIG1hZGUgYSByZXF1ZXN0IHRvIGpvaW4gcm9vbSAnICsgcm9vbSk7XG4gICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0NoYW5uZWxSZWFkeTogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9zb2NrZXQub24oJ2pvaW5lZCcsIGZ1bmN0aW9uKHJvb20pIHtcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2coJ2pvaW5lZDogJyArIHJvb20pO1xuICAgICAgICAvLyAgICBpc0NoYW5uZWxSZWFkeSA9IHRydWU7XG4gICAgICAgIC8vfSk7XG5cbiAgICAgICAgc29ja2V0Lm9uKCdsb2cnLCBmdW5jdGlvbihhcnJheSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJyYXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzb2NrZXQub24oJ2Z1bGwnLCBmdW5jdGlvbihyb29tKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiUm9vbSBpcyBmdWxsXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBzZW5kTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2xpZW50IHNlbmRpbmcgbWVzc2FnZTogJywgbWVzc2FnZSk7XG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgICAgICB9XG5cbi8vIFRoaXMgY2xpZW50IHJlY2VpdmVzIGEgbWVzc2FnZVxuICAgICAgICBzb2NrZXQub24oJ21lc3NhZ2UnLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2xpZW50IHJlY2VpdmVkIG1lc3NhZ2U6JywgbWVzc2FnZSk7XG4gICAgICAgICAgICAvL2lmIHBlcnNvbiBpbml0aWF0ZXMgY2FsbCwgaW52b2tlIHN0YXJ0XG4gICAgICAgICAgICAvLyBlbHNlIGlmIHBlcnNvbiByZWNlaXZlcyBhbiBvZmZlciwgc2Vjb25kIHBlcnNvbiBpbnZva2VzIHN0YXJ0XG4gICAgICAgICAgICAvL2Vsc2UgaWYgcGVyc29uIHJlY2VpdmVzIGFuIGFuc3dlciBmcm9tIHNlY29uZCBwZXJzb24sIHNldCByZW1vdGUgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIGlmIChtZXNzYWdlID09PSAnZ290IHVzZXIgbWVkaWEnKSB7XG4gICAgICAgICAgICAgICAgc3RhcnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnb2ZmZXInKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNQUtJTkcgQU4gT0ZGRVJcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFjb250ZXh0LnN0YXRlLmlzSW5pdGlhdG9yICYmICFjb250ZXh0LnN0YXRlLmlzU3RhcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwY0NvbmZpZy5zZXRSZW1vdGVEZXNjcmlwdGlvbihuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKG1lc3NhZ2UpLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVBbnN3ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnYW5zd2VyJyAmJiBjb250ZXh0LnN0YXRlLmlzU3RhcnRlZCkge1xuICAgICAgICAgICAgICAgIHBjQ29uZmlnLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24obWVzc2FnZSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjYW5kaWRhdGUnICYmIGNvbnRleHQuc3RhdGUuaXNTdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IG5ldyBSVENJY2VDYW5kaWRhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzZHBNTGluZUluZGV4OiBtZXNzYWdlLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGU6IG1lc3NhZ2UuY2FuZGlkYXRlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDQU5ESURBVEU6XCIsIGNhbmRpZGF0ZSk7XG4gICAgICAgICAgICAgICAgcGNDb25maWcuYWRkSWNlQ2FuZGlkYXRlKGNhbmRpZGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UgPT09ICdieWUnICYmIGNvbnRleHQuc3RhdGUuaXNTdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlUmVtb3RlSGFuZ3VwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbi8vc2V0IHRoZSBsb2NhbCBzdHJlYW1cbiAgICAgICAgZnVuY3Rpb24gZ290U3RyZWFtKHN0cmVhbSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkZGluZyBsb2NhbCBzdHJlYW0uJyk7XG4gICAgICAgICAgICBsb2NhbFZpZGVvLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvY2FsIHZpZGVvIHNvdXJjZVwiLCBsb2NhbFZpZGVvLnNyYyk7XG4gICAgICAgICAgICBsb2NhbFN0cmVhbSA9IHN0cmVhbTtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKCdnb3QgdXNlciBtZWRpYScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpcyBpbml0aWF0b3JcIiwgY29udGV4dC5zdGF0ZS5pc0luaXRpYXRvcik7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5zdGF0ZS5pc0luaXRpYXRvcikge1xuICAgICAgICAgICAgICAgIHN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29uc3RyYWludHMgPSB7XG4gICAgICAgICAgICB2aWRlbzogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdHZXR0aW5nIHVzZXIgbWVkaWEgd2l0aCBjb25zdHJhaW50cycsIGNvbnN0cmFpbnRzKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy9pZiAobG9jYXRpb24uaG9zdG5hbWUgIT09ICdsb2NhbGhvc3QnKSB7XG4gICAgICAgIC8vICAgIChcbiAgICAgICAgLy8gICAgICAgICdodHRwczovL2NvbXB1dGVlbmdpbmVvbmRlbWFuZC5hcHBzcG90LmNvbS90dXJuP3VzZXJuYW1lPTQxNzg0NTc0JmtleT00MDgwMjE4OTEzJ1xuICAgICAgICAvLyAgICApO1xuICAgICAgICAvL31cblxuICAgICAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4+IHN0YXJ0ICcsIGNvbnRleHQuc3RhdGUuaXNTdGFydGVkLCBsb2NhbFN0cmVhbSwgY29udGV4dC5zdGF0ZS5pc0NoYW5uZWxSZWFkeSk7XG4gICAgICAgICAgICBpZiAoIWNvbnRleHQuc3RhdGUuaXNTdGFydGVkICYmIHR5cGVvZiBsb2NhbFN0cmVhbSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29udGV4dC5zdGF0ZS5pc0NoYW5uZWxSZWFkeSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4gY3JlYXRpbmcgcGVlciBjb25uZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGVlckNvbm5lY3Rpb24oKTtcbiAgICAgICAgICAgICAgICBwY0NvbmZpZy5hZGRTdHJlYW0obG9jYWxTdHJlYW0pO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBpc1N0YXJ0ZWQ6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaXNJbml0aWF0b3InLCBjb250ZXh0LnN0YXRlLmlzSW5pdGlhdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGV4dC5zdGF0ZS5pc0luaXRpYXRvcikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZW5kTWVzc2FnZSgnYnllJyk7XG4gICAgICAgIH07XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVBlZXJDb25uZWN0aW9uKCkge1xuICAgICAgICAgICAgLy9jcmVhdGUgYSBuZXcgcGVlciBjb25uZWN0aW9uXG4gICAgICAgICAgICAvL2FkZCB0aGUgaWNlIGhhbmRsZXJcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGNDb25maWcgPSBuZXcgUlRDUGVlckNvbm5lY3Rpb24obnVsbCk7XG4gICAgICAgICAgICAgICAgcGNDb25maWcub25pY2VjYW5kaWRhdGUgPSBoYW5kbGVJY2VDYW5kaWRhdGU7XG4gICAgICAgICAgICAgICAgcGNDb25maWcub25hZGRzdHJlYW0gPSBoYW5kbGVSZW1vdGVTdHJlYW1BZGRlZDtcbiAgICAgICAgICAgICAgICBwY0NvbmZpZy5vbnJlbW92ZXN0cmVhbSA9IGhhbmRsZVJlbW90ZVN0cmVhbVJlbW92ZWQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgUlRDUGVlckNvbm5uZWN0aW9uJyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBjcmVhdGUgUGVlckNvbm5lY3Rpb24sIGV4Y2VwdGlvbjogJyArIGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ0Nhbm5vdCBjcmVhdGUgUlRDUGVlckNvbm5lY3Rpb24gb2JqZWN0LicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUljZUNhbmRpZGF0ZShldmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ljZWNhbmRpZGF0ZSBldmVudDogJywgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNhbmRpZGF0ZSkge1xuICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NhbmRpZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBldmVudC5jYW5kaWRhdGUuc2RwTUxpbmVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNaWQsXG4gICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZTogZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRW5kIG9mIGNhbmRpZGF0ZXMuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdGVTdHJlYW1BZGRlZChldmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlbW90ZSBzdHJlYW0gYWRkZWQuJyk7XG4gICAgICAgICAgICByZW1vdGVWaWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC5zdHJlYW0pO1xuICAgICAgICAgICAgcmVtb3RlU3RyZWFtID0gZXZlbnQuc3RyZWFtO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ3JlYXRlT2ZmZXJFcnJvcihldmVudCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZU9mZmVyKCkgZXJyb3I6ICcsIGV2ZW50KTtcbiAgICAgICAgfVxuLy9pbml0aWF0ZSB0aGUgb2ZmZXIgYW5kIHNldCB0aGUgbG9jYWwgZGVzY3JpcHRpb24oeW91ciBwYylcbi8vb24gcmVzcG9uc2Ugc2V0IHRoZSByZW1vdGUgZGVzY3JpcHRpb24ob3RoZXIgcGVyc29ucyBwYylcbiAgICAgICAgZnVuY3Rpb24gY2FsbCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZW5kaW5nIG9mZmVyIHRvIHBlZXInKTtcbiAgICAgICAgICAgIHBjQ29uZmlnLmNyZWF0ZU9mZmVyKHNldExvY2FsQW5kU2VuZE1lc3NhZ2UsIGhhbmRsZUNyZWF0ZU9mZmVyRXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlQW5zd2VyKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlbmRpbmcgYW5zd2VyIHRvIHBlZXIuJyk7XG4gICAgICAgICAgICBwY0NvbmZpZy5jcmVhdGVBbnN3ZXIoKS50aGVuKFxuICAgICAgICAgICAgICAgIHNldExvY2FsQW5kU2VuZE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgb25DcmVhdGVTZXNzaW9uRGVzY3JpcHRpb25FcnJvclxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldExvY2FsQW5kU2VuZE1lc3NhZ2Uoc2Vzc2lvbkRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAvLyBTZXQgT3B1cyBhcyB0aGUgcHJlZmVycmVkIGNvZGVjIGluIFNEUCBpZiBPcHVzIGlzIHByZXNlbnQuXG4gICAgICAgICAgICAvLyAgc2Vzc2lvbkRlc2NyaXB0aW9uLnNkcCA9IHByZWZlck9wdXMoc2Vzc2lvbkRlc2NyaXB0aW9uLnNkcCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNFU1NJT05ERVNDUklQVElPTjpcIiwgc2Vzc2lvbkRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHBjQ29uZmlnLnNldExvY2FsRGVzY3JpcHRpb24oc2Vzc2lvbkRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXRMb2NhbEFuZFNlbmRNZXNzYWdlIHNlbmRpbmcgbWVzc2FnZScsIHNlc3Npb25EZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBzZW5kTWVzc2FnZShzZXNzaW9uRGVzY3JpcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25DcmVhdGVTZXNzaW9uRGVzY3JpcHRpb25FcnJvcihlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBjcmVhdGUgc2Vzc2lvbiBkZXNjcmlwdGlvbjogJyArIGVycm9yLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vTk9UIEJFSU5HIFVTRUQgUklHSFQgTk9XXG4vL1RVUk4gc2VydmVycy0gaWYgSUNFIGNhbnQgZmluZCB0aGUgZXh0ZXJuYWwgYWRkcmVzcywgdHJhZmZpYyB3aWxsIGJlIHJvdXRlZCB1c2luZyB0dXJuIHNlcnZlcnNcbi8vICAgICAgICBmdW5jdGlvbiByZXF1ZXN0VHVybih0dXJuVVJMKSB7XG4vLyAgICAgICAgICAgIHZhciB0dXJuRXhpc3RzID0gZmFsc2U7XG4vLyAgICAgICAgICAgIGZvciAodmFyIGkgaW4gcGNDb25maWcuaWNlU2VydmVycykge1xuLy8gICAgICAgICAgICAgICAgaWYgKHBjQ29uZmlnLmljZVNlcnZlcnNbaV0udXJsLnN1YnN0cigwLCA1KSA9PT0gJ3R1cm46Jykge1xuLy8gICAgICAgICAgICAgICAgICAgIHR1cm5FeGlzdHMgPSB0cnVlO1xuLy8gICAgICAgICAgICAgICAgICAgIHR1cm5SZWFkeSA9IHRydWU7XG4vLyAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgaWYgKCF0dXJuRXhpc3RzKSB7XG4vLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR2V0dGluZyBUVVJOIHNlcnZlciBmcm9tICcsIHR1cm5VUkwpO1xuLy8gICAgICAgICAgICAgICAgLy8gTm8gVFVSTiBzZXJ2ZXIuIEdldCBvbmUgZnJvbSBjb21wdXRlZW5naW5lb25kZW1hbmQuYXBwc3BvdC5jb206XG4vLyAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4vLyAgICAgICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHVyblNlcnZlciA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb3QgVFVSTiBzZXJ2ZXI6ICcsIHR1cm5TZXJ2ZXIpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICBwY0NvbmZpZy5pY2VTZXJ2ZXJzLnB1c2goe1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VybCc6ICd0dXJuOicgKyB0dXJuU2VydmVyLnVzZXJuYW1lICsgJ0AnICsgdHVyblNlcnZlci50dXJuLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NyZWRlbnRpYWwnOiB0dXJuU2VydmVyLnBhc3N3b3JkXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB0dXJuUmVhZHkgPSB0cnVlO1xuLy8gICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgIH07XG4vLyAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgdHVyblVSTCwgdHJ1ZSk7XG4vLyAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuLy8gICAgICAgICAgICB9XG4vLyAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW90ZVN0cmVhbUFkZGVkKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3RlIHN0cmVhbSBhZGRlZC4nKTtcbiAgICAgICAgICAgIHJlbW90ZVZpZGVvLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50LnN0cmVhbSk7XG5cbiAgICAgICAgICAgIHJlbW90ZVN0cmVhbSA9IGV2ZW50LnN0cmVhbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW90ZVN0cmVhbVJlbW92ZWQoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdGUgc3RyZWFtIHJlbW92ZWQuIEV2ZW50OiAnLCBldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYW5ndXAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSGFuZ2luZyB1cC4nKTtcbiAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKCdieWUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW90ZUhhbmd1cCgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXNzaW9uIHRlcm1pbmF0ZWQuJyk7XG4gICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBpc0luaXRpYXRvcjogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGlzU3RhcnRlZDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gaXNBdWRpb011dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBpc1ZpZGVvTXV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHBjQ29uZmlnLmNsb3NlKCk7XG4gICAgICAgICAgICBwY0NvbmZpZyA9IG51bGw7XG4gICAgICAgICAgICBsb2NhbFZpZGVvLnNyYyA9IG51bGw7XG4gICAgICAgICAgICByZW1vdGVWaWRlby5zcmMgPSBudWxsO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9ob21lJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9OT1QgQkVJTkcgVVNFRCBSSUdIVCBOT1dcbi8vIFNldCBPcHVzIGFzIHRoZSBkZWZhdWx0IGF1ZGlvIGNvZGVjIGlmIGl0J3MgcHJlc2VudC5cbi8vICAgICAgICBmdW5jdGlvbiBwcmVmZXJPcHVzKHNkcCkge1xuLy8gICAgICAgICAgICB2YXIgc2RwTGluZXMgPSBzZHAuc3BsaXQoJ1xcclxcbicpO1xuLy8gICAgICAgICAgICB2YXIgbUxpbmVJbmRleDtcbi8vICAgICAgICAgICAgLy8gU2VhcmNoIGZvciBtIGxpbmUuXG4vLyAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2RwTGluZXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgICAgIGlmIChzZHBMaW5lc1tpXS5zZWFyY2goJ209YXVkaW8nKSAhPT0gLTEpIHtcbi8vICAgICAgICAgICAgICAgICAgICBtTGluZUluZGV4ID0gaTtcbi8vICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICBpZiAobUxpbmVJbmRleCA9PT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgICAgcmV0dXJuIHNkcDtcbi8vICAgICAgICAgICAgfVxuLy9cbi8vICAgICAgICAgICAgLy8gSWYgT3B1cyBpcyBhdmFpbGFibGUsIHNldCBpdCBhcyB0aGUgZGVmYXVsdCBpbiBtIGxpbmUuXG4vLyAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzZHBMaW5lcy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgICAgaWYgKHNkcExpbmVzW2ldLnNlYXJjaCgnb3B1cy80ODAwMCcpICE9PSAtMSkge1xuLy8gICAgICAgICAgICAgICAgICAgIHZhciBvcHVzUGF5bG9hZCA9IGV4dHJhY3RTZHAoc2RwTGluZXNbaV0sIC86KFxcZCspIG9wdXNcXC80ODAwMC9pKTtcbi8vICAgICAgICAgICAgICAgICAgICBpZiAob3B1c1BheWxvYWQpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgc2RwTGluZXNbbUxpbmVJbmRleF0gPSBzZXREZWZhdWx0Q29kZWMoc2RwTGluZXNbbUxpbmVJbmRleF0sXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHVzUGF5bG9hZCk7XG4vLyAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICB9XG4vL1xuLy8gICAgICAgICAgICAvLyBSZW1vdmUgQ04gaW4gbSBsaW5lIGFuZCBzZHAuXG4vLyAgICAgICAgICAgIHNkcExpbmVzID0gcmVtb3ZlQ04oc2RwTGluZXMsIG1MaW5lSW5kZXgpO1xuLy9cbi8vICAgICAgICAgICAgc2RwID0gc2RwTGluZXMuam9pbignXFxyXFxuJyk7XG4vLyAgICAgICAgICAgIHJldHVybiBzZHA7XG4vLyAgICAgICAgfVxuXG4gICAgICAgIC8vZnVuY3Rpb24gZXh0cmFjdFNkcChzZHBMaW5lLCBwYXR0ZXJuKSB7XG4gICAgICAgIC8vICAgIHZhciByZXN1bHQgPSBzZHBMaW5lLm1hdGNoKHBhdHRlcm4pO1xuICAgICAgICAvLyAgICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC5sZW5ndGggPT09IDIgPyByZXN1bHRbMV0gOiBudWxsO1xuICAgICAgICAvL31cblxuLy8gU2V0IHRoZSBzZWxlY3RlZCBjb2RlYyB0byB0aGUgZmlyc3QgaW4gbSBsaW5lLlxuLy8gICAgICAgIGZ1bmN0aW9uIHNldERlZmF1bHRDb2RlYyhtTGluZSwgcGF5bG9hZCkge1xuLy8gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBtTGluZS5zcGxpdCgnICcpO1xuLy8gICAgICAgICAgICB2YXIgbmV3TGluZSA9IFtdO1xuLy8gICAgICAgICAgICB2YXIgaW5kZXggPSAwO1xuLy8gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDMpIHsgLy8gRm9ybWF0IG9mIG1lZGlhIHN0YXJ0cyBmcm9tIHRoZSBmb3VydGguXG4vLyAgICAgICAgICAgICAgICAgICAgbmV3TGluZVtpbmRleCsrXSA9IHBheWxvYWQ7IC8vIFB1dCB0YXJnZXQgcGF5bG9hZCB0byB0aGUgZmlyc3QuXG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHNbaV0gIT09IHBheWxvYWQpIHtcbi8vICAgICAgICAgICAgICAgICAgICBuZXdMaW5lW2luZGV4KytdID0gZWxlbWVudHNbaV07XG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgcmV0dXJuIG5ld0xpbmUuam9pbignICcpO1xuLy8gICAgICAgIH1cblxuLy8gU3RyaXAgQ04gZnJvbSBzZHAgYmVmb3JlIENOIGNvbnN0cmFpbnRzIGlzIHJlYWR5LlxuLy8gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUNOKHNkcExpbmVzLCBtTGluZUluZGV4KSB7XG4vLyAgICAgICAgICAgIHZhciBtTGluZUVsZW1lbnRzID0gc2RwTGluZXNbbUxpbmVJbmRleF0uc3BsaXQoJyAnKTtcbi8vICAgICAgICAgICAgLy8gU2NhbiBmcm9tIGVuZCBmb3IgdGhlIGNvbnZlbmllbmNlIG9mIHJlbW92aW5nIGFuIGl0ZW0uXG4vLyAgICAgICAgICAgIGZvciAodmFyIGkgPSBzZHBMaW5lcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuLy8gICAgICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBleHRyYWN0U2RwKHNkcExpbmVzW2ldLCAvYT1ydHBtYXA6KFxcZCspIENOXFwvXFxkKy9pKTtcbi8vICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgdmFyIGNuUG9zID0gbUxpbmVFbGVtZW50cy5pbmRleE9mKHBheWxvYWQpO1xuLy8gICAgICAgICAgICAgICAgICAgIGlmIChjblBvcyAhPT0gLTEpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIENOIHBheWxvYWQgZnJvbSBtIGxpbmUuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIG1MaW5lRWxlbWVudHMuc3BsaWNlKGNuUG9zLCAxKTtcbi8vICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIENOIGxpbmUgaW4gc2RwXG4vLyAgICAgICAgICAgICAgICAgICAgc2RwTGluZXMuc3BsaWNlKGksIDEpO1xuLy8gICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICB9XG4vL1xuLy8gICAgICAgICAgICBzZHBMaW5lc1ttTGluZUluZGV4XSA9IG1MaW5lRWxlbWVudHMuam9pbignICcpO1xuLy8gICAgICAgICAgICByZXR1cm4gc2RwTGluZXM7XG4vLyAgICAgICAgfVxuXG4gICAgfVxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwidmlkZW9zXCI+XG4gICAgICAgICAgICAgICAgPHZpZGVvIGlkPVwibG9jYWxWaWRlb1wiIGF1dG9QbGF5IG11dGVkPjwvdmlkZW8+XG4gICAgICAgICAgICAgICAgPHZpZGVvIGlkPVwicmVtb3RlVmlkZW9cIiBhdXRvUGxheT48L3ZpZGVvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWRlb0NoYXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9WaWRlb0NoYXQuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmNsYXNzIEdhbWVPdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXG4gIHF1aXRHYW1lKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpLnJlbW92ZSgpO1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdhbWVPdmVyXCI+XG4gICAgICBcdDxoMT5HYW1lIE92ZXIhPC9oMT4gPGJyLz5cbiAgICAgIFx0PGgyPllvdXIgdGltZToge3RoaXMucHJvcHMudGltZX08L2gyPiA8YnIvPlxuICAgICAgXHQ8YnV0dG9uIGNsYXNzTmFtZT1cImhvbWVCdXR0b25zXCI+S2VlcCBQbGF5aW5nPC9idXR0b24+IDxici8+XG4gICAgICBcdDxMaW5rIHRvPScvJz48YnV0dG9uIGNsYXNzTmFtZT1cImhvbWVCdXR0b25zXCIgb25DbGljaz17dGhpcy5xdWl0R2FtZS5iaW5kKHRoaXMpfT5RdWl0PC9idXR0b24+PC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lT3ZlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9HYW1lL0dhbWVPdmVyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXNlclN0YXRzIGZyb20gJy4vVXNlclN0YXRzLmpzeCdcbmltcG9ydCBGcmllbmRTZWFyY2ggZnJvbSAnLi9GcmllbmRTZWFyY2guanN4J1xuXG5cbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUHJvZmlsZVwiPlxuICAgICBcdCAgPEZyaWVuZFNlYXJjaC8+XG4gICAgICBcdDxVc2VyU3RhdHMgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lL1Byb2ZpbGVWaWV3LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRnJpZW5kU2VhcmNoIGZyb20gJy4vRnJpZW5kU2VhcmNoLmpzeCdcblxuY2xhc3MgTG9iYnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0gIHtcbiAgICAgICAgICAgIHJvb21zOiB7fSxcbiAgICAgICAgICAgIHJvb21OYW1lczogW11cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IGRpZCBtb3VudFwiKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgICBzb2NrZXQub24oXCJyZWNlaXZlUm9vbXNcIiwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDVVJSRU5UIERBVEE6XCIsIGRhdGEpO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVtrZXldID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vdGhpcyBtaWdodCBiZSBoYWNreS0gY2hlY2sgd2h5IHRoZSBzZXJ2ZXIgaXMgc3RvcmluZyBhIG51bGwgdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsZXRlIGRhdGFbdW5kZWZpbmVkXTtcbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHJvb21zOiBkYXRhLFxuICAgICAgICAgICAgICAgIHJvb21OYW1lczogT2JqZWN0LmtleXMoZGF0YSlcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL2NvbnRleHQuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0LmVtaXQoXCJnZXRSb29tc1wiKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUYWJsZUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJMb2JieVRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Sb29tbmFtZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VXNlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q2FwYWNpdHk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkpvaW48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yb29tTmFtZXMubWFwKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57a2V5fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5yb29tc1trZXldfS8yPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLnJvb21zW2tleV0gPT09IDIgPyA8cD5Sb29tIEZ1bGw8L3A+IDogPGJ1dHRvbj5Kb2luIEdhbWU8L2J1dHRvbj59PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBMb2JieVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9Kb2luR2FtZS5qc3giXSwic291cmNlUm9vdCI6IiJ9