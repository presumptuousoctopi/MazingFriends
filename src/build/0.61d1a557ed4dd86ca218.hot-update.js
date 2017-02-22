webpackHotUpdate(0,{

/***/ 232:
/*!*************************************!*\
  !*** ./src/components/ChatView.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-loader/~/react-hot-api/modules/index.js */ 2), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 12), React = __webpack_require__(/*! react */ 103); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 103);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _VideoChat = __webpack_require__(/*! ./VideoChat.js */ 233);
	
	var _VideoChat2 = _interopRequireDefault(_VideoChat);
	
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
	      message: '',
	      messages: []
	    };
	    return _this;
	  }
	
	  _createClass(Chat, [{
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
	      window.socket.emit('sendMessage', this.state.message);
	    }
	  }, {
	    key: 'updateInput',
	    value: function updateInput(e) {
	      this.setState({ message: e.target.value });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'Chat' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          ' Chat '
	        ),
	        _react2.default.createElement(
	          'form',
	          { onSubmit: this.sendMessage.bind(this) },
	          _react2.default.createElement('input', { type: 'text', value: this.state.message, onChange: this.updateInput.bind(this) }),
	          _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { id: 'chatBox' },
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
	        ),
	        _react2.default.createElement(_VideoChat2.default, null)
	      );
	    }
	  }]);
	
	  return Chat;
	}(_react2.default.Component);
	
	;
	
	exports.default = Chat;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 234); if (makeExportsHot(module, __webpack_require__(/*! react */ 103))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ChatView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 1)(module)))

/***/ },

/***/ 233:
/*!*************************************!*\
  !*** ./src/components/VideoChat.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-loader/~/react-hot-api/modules/index.js */ 2), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 10), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 12), React = __webpack_require__(/*! react */ 103); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 103);
	
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
	            console.log("abcd");
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
	            var remoteVideo = document.querySelector('#remoteVideo');
	            //get user media
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
	            ////////////////////////////////////////////////
	
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
	                console.log(localVideo);
	                localVideo.src = window.URL.createObjectURL(stream);
	                localStream = stream;
	                sendMessage('got user media');
	                if (isInitiator) {
	                    start();
	                }
	            }
	
	            var constraints = {
	                video: true
	            };
	
	            console.log('Getting user media with constraints', constraints);
	
	            if (location.hostname !== 'localhost') {
	                requestTurn('https://computeengineondemand.appspot.com/turn?username=41784574&key=4080218913');
	            }
	
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
	                _react2.default.createElement('video', { id: 'localVideo', autoplay: true, muted: true }),
	                _react2.default.createElement('video', { id: 'remoteVideo', autoplay: true })
	            );
	        }
	    }]);
	
	    return VideoChat;
	}(_react2.default.Component);
	
	exports.default = VideoChat;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 234); if (makeExportsHot(module, __webpack_require__(/*! react */ 103))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "VideoChat.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 1)(module)))

/***/ }

})
//# sourceMappingURL=0.61d1a557ed4dd86ca218.hot-update.js.map