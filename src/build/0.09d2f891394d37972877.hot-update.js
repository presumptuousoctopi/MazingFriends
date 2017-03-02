webpackHotUpdate(0,{

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
	            _react2.default.createElement('input', { type: 'text', className: 'chatBar', value: this.state.message, onChange: this.updateInput.bind(this) }),
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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1RleHRDaGF0LmpzeD8yYjc0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUvVmlkZW9DaGF0LmpzeD9jMmViIl0sIm5hbWVzIjpbIlRleHRDaGF0Iiwic3RhdGUiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJzb2NrZXQiLCJ3aW5kb3ciLCJjb250ZXh0Iiwib24iLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWl0IiwidXNlciIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImNsZWFyTWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwiY2FtZXJhIiwia2V5c1VwIiwia2V5c0Rvd24iLCJrZXlzTGVmdCIsImtleXNSaWdodCIsInVzZXJPbkNoYXQiLCJtYXAiLCJtZXNzYWdlT2JqIiwic2VuZE1lc3NhZ2UiLCJiaW5kIiwidXBkYXRlSW5wdXQiLCJDb21wb25lbnQiLCJWaWRlb0NoYXQiLCJwcm9wcyIsImlzQ2hhbm5lbFJlYWR5IiwiaXNJbml0aWF0b3IiLCJpc1N0YXJ0ZWQiLCJwYyIsImxvY2FsU3RyZWFtIiwicmVtb3RlU3RyZWFtIiwidHVyblJlYWR5Iiwicm9vbSIsInBjQ29uZmlnIiwic2RwQ29uc3RyYWludHMiLCJsb2NhbFZpZGVvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3JjIiwicmVtb3RlVmlkZW8iLCJyb29tTmFtZSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidmlkZW8iLCJ0aGVuIiwiZ290U3RyZWFtIiwiY2F0Y2giLCJhbGVydCIsIm5hbWUiLCJhcnJheSIsImFwcGx5Iiwic3RhcnQiLCJ0eXBlIiwic2V0UmVtb3RlRGVzY3JpcHRpb24iLCJSVENTZXNzaW9uRGVzY3JpcHRpb24iLCJjcmVhdGVBbnN3ZXIiLCJjYW5kaWRhdGUiLCJSVENJY2VDYW5kaWRhdGUiLCJzZHBNTGluZUluZGV4IiwibGFiZWwiLCJhZGRJY2VDYW5kaWRhdGUiLCJoYW5kbGVSZW1vdGVIYW5ndXAiLCJzdHJlYW0iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjb25zdHJhaW50cyIsImNyZWF0ZVBlZXJDb25uZWN0aW9uIiwiYWRkU3RyZWFtIiwiY2FsbCIsIm9uYmVmb3JldW5sb2FkIiwiUlRDUGVlckNvbm5lY3Rpb24iLCJvbmljZWNhbmRpZGF0ZSIsImhhbmRsZUljZUNhbmRpZGF0ZSIsIm9uYWRkc3RyZWFtIiwiaGFuZGxlUmVtb3RlU3RyZWFtQWRkZWQiLCJvbnJlbW92ZXN0cmVhbSIsImhhbmRsZVJlbW90ZVN0cmVhbVJlbW92ZWQiLCJldmVudCIsImlkIiwic2RwTWlkIiwiaGFuZGxlQ3JlYXRlT2ZmZXJFcnJvciIsImNyZWF0ZU9mZmVyIiwic2V0TG9jYWxBbmRTZW5kTWVzc2FnZSIsIm9uQ3JlYXRlU2Vzc2lvbkRlc2NyaXB0aW9uRXJyb3IiLCJzZXNzaW9uRGVzY3JpcHRpb24iLCJzZXRMb2NhbERlc2NyaXB0aW9uIiwiZXJyb3IiLCJ0b1N0cmluZyIsImhhbmd1cCIsInN0b3AiLCJjbG9zZSIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIiwicHVzaCIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0tBRU1BLFE7OztBQUNKLHVCQUFjO0FBQUE7O0FBQUE7O0FBRVosV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFTLEVBREU7QUFFWEMsaUJBQVU7QUFGQyxNQUFiO0FBRlk7QUFNYjs7Ozt5Q0FFbUI7QUFDbEIsV0FBSUMsU0FBU0MsT0FBT0QsTUFBcEI7QUFDQSxXQUFJRSxVQUFVLElBQWQ7QUFDQUYsY0FBT0csRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFVBQVNMLE9BQVQsRUFBa0I7QUFDNUNJLGlCQUFRRSxRQUFSLENBQWlCO0FBQ2ZMLHFCQUFVRDtBQURLLFVBQWpCO0FBR0FPLGlCQUFRQyxHQUFSLENBQVksc0JB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QTtBQUNBTSwwQkFBUzJELEtBQVQ7QUFDQTNELDRCQUFXLElBQVg7QUFDQUUsNEJBQVdHLEdBQVgsR0FBaUIsSUFBakI7QUFDQUMsNkJBQVlELEdBQVosR0FBa0IsSUFBbEI7QUFDQUYsMEJBQVN5RCxjQUFULENBQXdCLFFBQXhCLEVBQWtDQyxNQUFsQztBQUNBLDZDQUFlQyxJQUFmLENBQW9CO0FBQ2hCQywrQkFBVTtBQURNLGtCQUFwQjtBQUdIOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVE7QUFDQTtBQUNBO0FBQ0E7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSzs7O2tDQUNTO0FBQ04sb0JBQ0k7QUFBQTtBQUFBLG1CQUFLLElBQUcsUUFBUjtBQUNJLDBEQUFPLElBQUcsWUFBVixFQUF1QixjQUF2QixFQUFnQyxXQUFoQyxHQURKO0FBRUksMERBQU8sSUFBRyxhQUFWLEVBQXdCLGNBQXhCO0FBRkosY0FESjtBQU1IOzs7O0dBbFltQixnQkFBTTFFLFM7O21CQXFZZkMsUyIsImZpbGUiOiIwLjA5ZDJmODkxMzk0ZDM3OTcyODc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgVGV4dENoYXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICBtZXNzYWdlczogW11cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHZhciBzb2NrZXQgPSB3aW5kb3cuc29ja2V0O1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgc29ja2V0Lm9uKCdyZWNlaXZlTWVzc2FnZScsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcclxuICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdpbiByZWNlaXZlTWVzc2FnZSA6ICcsIGNvbnRleHQuc3RhdGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNvY2tldDogc29ja2V0XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgc2VuZE1lc3NhZ2UoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgd2luZG93LnNvY2tldC5lbWl0KCdzZW5kTWVzc2FnZScsIHtcclxuICAgICAgbWVzc2FnZTogdGhpcy5zdGF0ZS5tZXNzYWdlLFxyXG4gICAgICB1c2VyOiBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJylcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jbGVhck1lc3NhZ2UoKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlSW5wdXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogZS50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcblxyXG4gIGNsZWFyTWVzc2FnZSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtZXNzYWdlOiAnJ1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIG9uRm9jdXMoKSB7XHJcbiAgICAvLyBkaXNhYmxpbmcgJ3dhc2QnIGZvciBnYW1lIG1vdmVtZW50XHJcbiAgICB3aW5kb3cuY2FtZXJhLmtleXNVcCA9IFtdO1xyXG4gICAgd2luZG93LmNhbWVyYS5rZXlzRG93biA9IFtdOyBcclxuICAgIHdpbmRvdy5jYW1lcmEua2V5c0xlZnQgPSBbXTsgXHJcbiAgICB3aW5kb3cuY2FtZXJhLmtleXNSaWdodCA9IFtdO1xyXG4gICAgd2luZG93LnVzZXJPbkNoYXQgPSB0cnVlO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBvbkJsdXIoKSB7XHJcbiAgICAvLyBlbmFibGluZyAnd2FzZCcgZm9yIGdhbWUgbW92ZW1lbnRcclxuICAgIGNhbWVyYS5rZXlzVXAgPSBbODddO1xyXG4gICAgY2FtZXJhLmtleXNEb3duID0gWzgzXTsgXHJcbiAgICBjYW1lcmEua2V5c0xlZnQgPSBbNjVdOyBcclxuICAgIGNhbWVyYS5rZXlzUmlnaHQgPSBbNjhdO1xyXG4gICAgd2luZG93LnVzZXJPbkNoYXQgPSBmYWxzZTtcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDaGF0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGF0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYXRCb3hcIj5cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZXMubWFwKCAobWVzc2FnZU9iaikgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDM+e21lc3NhZ2VPYmpbJ3VzZXJJZCddfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PnttZXNzYWdlT2JqLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZXh0SW5wdXRcIj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnNlbmRNZXNzYWdlLmJpbmQodGhpcyl9PiBcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiY2hhdEJhclwiIHZhbHVlPXt0aGlzLnN0YXRlLm1lc3NhZ2V9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUlucHV0LmJpbmQodGhpcyl9IC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiBjbGFzc05hbWU9XCJjaGF0QnRuXCIgLz5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRDaGF0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbWUvVGV4dENoYXQuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHticm93c2VySGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmNsYXNzIFZpZGVvQ2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlciAoKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzQ2hhbm5lbFJlYWR5OiBmYWxzZSxcclxuICAgICAgICAgICAgaXNJbml0aWF0b3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1N0YXJ0ZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgIHZhciBwYztcclxuICAgICAgICB2YXIgbG9jYWxTdHJlYW07XHJcbiAgICAgICAgdmFyIHJlbW90ZVN0cmVhbTtcclxuICAgICAgICB2YXIgdHVyblJlYWR5O1xyXG4gICAgICAgIHZhciByb29tO1xyXG4gICAgICAgIC8vc3R1biBzZXJ2ZXIgZm9yIG5ldHdvcmsgZGF0YVxyXG4gICAgICAgIHZhciBwY0NvbmZpZyA9IHtcclxuICAgICAgICAgICAgJ2ljZVNlcnZlcnMnOiBbe1xyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdzdHVuOnN0dW4ubC5nb29nbGUuY29tOjE5MzAyJ1xyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gU2V0IHVwIGF1ZGlvIGFuZCB2aWRlbyByZWdhcmRsZXNzIG9mIHdoYXQgZGV2aWNlcyBhcmUgcHJlc2VudC5cclxuICAgICAgICB2YXIgc2RwQ29uc3RyYWludHMgPSB7XHJcbiAgICAgICAgICAgICdtYW5kYXRvcnknOiB7XHJcbiAgICAgICAgICAgICAgICAnT2ZmZXJUb1JlY2VpdmVBdWRpbyc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAnT2ZmZXJUb1JlY2VpdmVWaWRlbyc6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8veW91ciBzY3JlZW4gaXMgbG9jYWwgdmlkZW8tIG90aGVyIHBlcnNvbiBpcyByZW1vdGUgdmlkZW9cclxuICAgICAgICB2YXIgbG9jYWxWaWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhbFZpZGVvJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2NhbCB2aWRlb1wiLCBsb2NhbFZpZGVvLnNyYyk7XHJcbiAgICAgICAgdmFyIHJlbW90ZVZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW90ZVZpZGVvJyk7XHJcbiAgICAgICAgc29ja2V0Lm9uKCdyb29tTmFtZScsIGZ1bmN0aW9uKHJvb21OYW1lKSB7XHJcbiAgICAgICAgICAgIHJvb20gPSByb29tTmFtZTtcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NyZWF0ZSBvciBqb2luJywgcm9vbSk7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgICAgICAgICAgIGF1ZGlvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmlkZW86IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGdvdFN0cmVhbSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2dldFVzZXJNZWRpYSgpIGVycm9yOiAnICsgZS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUm9vbSBuYW1lIDogJywgcm9vbU5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKCdjcmVhdGVkJywgZnVuY3Rpb24ocm9vbSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRlZCByb29tICcgKyByb29tKTtcclxuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc0luaXRpYXRvcjogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbi8vb25jZSB0aGUgc2Vjb25kIHBlcnNvbiBqb2lucywgc2V0IGNoYW5uZWwgdG8gdHJ1ZVxyXG4gICAgICAgIHNvY2tldC5vbignam9pbicsIGZ1bmN0aW9uIChyb29tKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fub3RoZXIgcGVlciBtYWRlIGEgcmVxdWVzdCB0byBqb2luIHJvb20gJyArIHJvb20pO1xyXG4gICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzQ2hhbm5lbFJlYWR5OiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vc29ja2V0Lm9uKCdqb2luZWQnLCBmdW5jdGlvbihyb29tKSB7XHJcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2coJ2pvaW5lZDogJyArIHJvb20pO1xyXG4gICAgICAgIC8vICAgIGlzQ2hhbm5lbFJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAvL30pO1xyXG5cclxuICAgICAgICBzb2NrZXQub24oJ2xvZycsIGZ1bmN0aW9uKGFycmF5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFycmF5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKCdmdWxsJywgZnVuY3Rpb24ocm9vbSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiUm9vbSBpcyBmdWxsXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZW5kTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDbGllbnQgc2VuZGluZyBtZXNzYWdlOiAnLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ21lc3NhZ2UnLCBtZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4vLyBUaGlzIGNsaWVudCByZWNlaXZlcyBhIG1lc3NhZ2VcclxuICAgICAgICBzb2NrZXQub24oJ21lc3NhZ2UnLCBmdW5jdGlvbihtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDbGllbnQgcmVjZWl2ZWQgbWVzc2FnZTonLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgLy9pZiBwZXJzb24gaW5pdGlhdGVzIGNhbGwsIGludm9rZSBzdGFydFxyXG4gICAgICAgICAgICAvLyBlbHNlIGlmIHBlcnNvbiByZWNlaXZlcyBhbiBvZmZlciwgc2Vjb25kIHBlcnNvbiBpbnZva2VzIHN0YXJ0XHJcbiAgICAgICAgICAgIC8vZWxzZSBpZiBwZXJzb24gcmVjZWl2ZXMgYW4gYW5zd2VyIGZyb20gc2Vjb25kIHBlcnNvbiwgc2V0IHJlbW90ZSBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBpZiAobWVzc2FnZSA9PT0gJ2dvdCB1c2VyIG1lZGlhJykge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdvZmZlcicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTUFLSU5HIEFOIE9GRkVSXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb250ZXh0LnN0YXRlLmlzSW5pdGlhdG9yICYmICFjb250ZXh0LnN0YXRlLmlzU3RhcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwY0NvbmZpZy5zZXRSZW1vdGVEZXNjcmlwdGlvbihuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKG1lc3NhZ2UpLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUFuc3dlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdhbnN3ZXInICYmIGNvbnRleHQuc3RhdGUuaXNTdGFydGVkKSB7XHJcbiAgICAgICAgICAgICAgICBwY0NvbmZpZy5zZXRSZW1vdGVEZXNjcmlwdGlvbihuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjYW5kaWRhdGUnICYmIGNvbnRleHQuc3RhdGUuaXNTdGFydGVkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2FuZGlkYXRlID0gbmV3IFJUQ0ljZUNhbmRpZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2RwTUxpbmVJbmRleDogbWVzc2FnZS5sYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGU6IG1lc3NhZ2UuY2FuZGlkYXRlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ0FORElEQVRFOlwiLCBjYW5kaWRhdGUpO1xyXG4gICAgICAgICAgICAgICAgcGNDb25maWcuYWRkSWNlQ2FuZGlkYXRlKGNhbmRpZGF0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ2J5ZScgJiYgY29udGV4dC5zdGF0ZS5pc1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVJlbW90ZUhhbmd1cCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuLy9zZXQgdGhlIGxvY2FsIHN0cmVhbVxyXG4gICAgICAgIGZ1bmN0aW9uIGdvdFN0cmVhbShzdHJlYW0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkZGluZyBsb2NhbCBzdHJlYW0uJyk7XHJcbiAgICAgICAgICAgIGxvY2FsVmlkZW8uc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoc3RyZWFtKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2NhbCB2aWRlbyBzb3VyY2VcIiwgbG9jYWxWaWRlby5zcmMpO1xyXG4gICAgICAgICAgICBsb2NhbFN0cmVhbSA9IHN0cmVhbTtcclxuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoJ2dvdCB1c2VyIG1lZGlhJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXMgaW5pdGlhdG9yXCIsIGNvbnRleHQuc3RhdGUuaXNJbml0aWF0b3IpO1xyXG4gICAgICAgICAgICBpZiAoY29udGV4dC5zdGF0ZS5pc0luaXRpYXRvcikge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNvbnN0cmFpbnRzID0ge1xyXG4gICAgICAgICAgICB2aWRlbzogdHJ1ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHZXR0aW5nIHVzZXIgbWVkaWEgd2l0aCBjb25zdHJhaW50cycsIGNvbnN0cmFpbnRzKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vaWYgKGxvY2F0aW9uLmhvc3RuYW1lICE9PSAnbG9jYWxob3N0Jykge1xyXG4gICAgICAgIC8vICAgIChcclxuICAgICAgICAvLyAgICAgICAgJ2h0dHBzOi8vY29tcHV0ZWVuZ2luZW9uZGVtYW5kLmFwcHNwb3QuY29tL3R1cm4/dXNlcm5hbWU9NDE3ODQ1NzQma2V5PTQwODAyMTg5MTMnXHJcbiAgICAgICAgLy8gICAgKTtcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4+IHN0YXJ0ICcsIGNvbnRleHQuc3RhdGUuaXNTdGFydGVkLCBsb2NhbFN0cmVhbSwgY29udGV4dC5zdGF0ZS5pc0NoYW5uZWxSZWFkeSk7XHJcbiAgICAgICAgICAgIGlmICghY29udGV4dC5zdGF0ZS5pc1N0YXJ0ZWQgJiYgdHlwZW9mIGxvY2FsU3RyZWFtICE9PSAndW5kZWZpbmVkJyAmJiBjb250ZXh0LnN0YXRlLmlzQ2hhbm5lbFJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPj4+Pj4+IGNyZWF0aW5nIHBlZXIgY29ubmVjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlUGVlckNvbm5lY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIHBjQ29uZmlnLmFkZFN0cmVhbShsb2NhbFN0cmVhbSk7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc1N0YXJ0ZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2lzSW5pdGlhdG9yJywgY29udGV4dC5zdGF0ZS5pc0luaXRpYXRvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udGV4dC5zdGF0ZS5pc0luaXRpYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKCdieWUnKTtcclxuICAgICAgICB9O1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVBlZXJDb25uZWN0aW9uKCkge1xyXG4gICAgICAgICAgICAvL2NyZWF0ZSBhIG5ldyBwZWVyIGNvbm5lY3Rpb25cclxuICAgICAgICAgICAgLy9hZGQgdGhlIGljZSBoYW5kbGVyXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBwY0NvbmZpZyA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihudWxsKTtcclxuICAgICAgICAgICAgICAgIHBjQ29uZmlnLm9uaWNlY2FuZGlkYXRlID0gaGFuZGxlSWNlQ2FuZGlkYXRlO1xyXG4gICAgICAgICAgICAgICAgcGNDb25maWcub25hZGRzdHJlYW0gPSBoYW5kbGVSZW1vdGVTdHJlYW1BZGRlZDtcclxuICAgICAgICAgICAgICAgIHBjQ29uZmlnLm9ucmVtb3Zlc3RyZWFtID0gaGFuZGxlUmVtb3RlU3RyZWFtUmVtb3ZlZDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIFJUQ1BlZXJDb25ubmVjdGlvbicpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGNyZWF0ZSBQZWVyQ29ubmVjdGlvbiwgZXhjZXB0aW9uOiAnICsgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdDYW5ub3QgY3JlYXRlIFJUQ1BlZXJDb25uZWN0aW9uIG9iamVjdC4nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlSWNlQ2FuZGlkYXRlKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpY2VjYW5kaWRhdGUgZXZlbnQ6ICcsIGV2ZW50KTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmNhbmRpZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjYW5kaWRhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBldmVudC5jYW5kaWRhdGUuc2RwTUxpbmVJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBpZDogZXZlbnQuY2FuZGlkYXRlLnNkcE1pZCxcclxuICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGU6IGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VuZCBvZiBjYW5kaWRhdGVzLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdGVTdHJlYW1BZGRlZChldmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3RlIHN0cmVhbSBhZGRlZC4nKTtcclxuICAgICAgICAgICAgcmVtb3RlVmlkZW8uc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQuc3RyZWFtKTtcclxuICAgICAgICAgICAgcmVtb3RlU3RyZWFtID0gZXZlbnQuc3RyZWFtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ3JlYXRlT2ZmZXJFcnJvcihldmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRlT2ZmZXIoKSBlcnJvcjogJywgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuLy9pbml0aWF0ZSB0aGUgb2ZmZXIgYW5kIHNldCB0aGUgbG9jYWwgZGVzY3JpcHRpb24oeW91ciBwYylcclxuLy9vbiByZXNwb25zZSBzZXQgdGhlIHJlbW90ZSBkZXNjcmlwdGlvbihvdGhlciBwZXJzb25zIHBjKVxyXG4gICAgICAgIGZ1bmN0aW9uIGNhbGwoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZW5kaW5nIG9mZmVyIHRvIHBlZXInKTtcclxuICAgICAgICAgICAgcGNDb25maWcuY3JlYXRlT2ZmZXIoc2V0TG9jYWxBbmRTZW5kTWVzc2FnZSwgaGFuZGxlQ3JlYXRlT2ZmZXJFcnJvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVBbnN3ZXIoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZW5kaW5nIGFuc3dlciB0byBwZWVyLicpO1xyXG4gICAgICAgICAgICBwY0NvbmZpZy5jcmVhdGVBbnN3ZXIoKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgc2V0TG9jYWxBbmRTZW5kTWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIG9uQ3JlYXRlU2Vzc2lvbkRlc2NyaXB0aW9uRXJyb3JcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldExvY2FsQW5kU2VuZE1lc3NhZ2Uoc2Vzc2lvbkRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vIFNldCBPcHVzIGFzIHRoZSBwcmVmZXJyZWQgY29kZWMgaW4gU0RQIGlmIE9wdXMgaXMgcHJlc2VudC5cclxuICAgICAgICAgICAgLy8gIHNlc3Npb25EZXNjcmlwdGlvbi5zZHAgPSBwcmVmZXJPcHVzKHNlc3Npb25EZXNjcmlwdGlvbi5zZHApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNFU1NJT05ERVNDUklQVElPTjpcIiwgc2Vzc2lvbkRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgcGNDb25maWcuc2V0TG9jYWxEZXNjcmlwdGlvbihzZXNzaW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0TG9jYWxBbmRTZW5kTWVzc2FnZSBzZW5kaW5nIG1lc3NhZ2UnLCBzZXNzaW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBzZW5kTWVzc2FnZShzZXNzaW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25DcmVhdGVTZXNzaW9uRGVzY3JpcHRpb25FcnJvcihlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGNyZWF0ZSBzZXNzaW9uIGRlc2NyaXB0aW9uOiAnICsgZXJyb3IudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vTk9UIEJFSU5HIFVTRUQgUklHSFQgTk9XXHJcbi8vVFVSTiBzZXJ2ZXJzLSBpZiBJQ0UgY2FudCBmaW5kIHRoZSBleHRlcm5hbCBhZGRyZXNzLCB0cmFmZmljIHdpbGwgYmUgcm91dGVkIHVzaW5nIHR1cm4gc2VydmVyc1xyXG4vLyAgICAgICAgZnVuY3Rpb24gcmVxdWVzdFR1cm4odHVyblVSTCkge1xyXG4vLyAgICAgICAgICAgIHZhciB0dXJuRXhpc3RzID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBwY0NvbmZpZy5pY2VTZXJ2ZXJzKSB7XHJcbi8vICAgICAgICAgICAgICAgIGlmIChwY0NvbmZpZy5pY2VTZXJ2ZXJzW2ldLnVybC5zdWJzdHIoMCwgNSkgPT09ICd0dXJuOicpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgIHR1cm5FeGlzdHMgPSB0cnVlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgdHVyblJlYWR5ID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIGlmICghdHVybkV4aXN0cykge1xyXG4vLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR2V0dGluZyBUVVJOIHNlcnZlciBmcm9tICcsIHR1cm5VUkwpO1xyXG4vLyAgICAgICAgICAgICAgICAvLyBObyBUVVJOIHNlcnZlci4gR2V0IG9uZSBmcm9tIGNvbXB1dGVlbmdpbmVvbmRlbWFuZC5hcHBzcG90LmNvbTpcclxuLy8gICAgICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4vLyAgICAgICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR1cm5TZXJ2ZXIgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb3QgVFVSTiBzZXJ2ZXI6ICcsIHR1cm5TZXJ2ZXIpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHBjQ29uZmlnLmljZVNlcnZlcnMucHVzaCh7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1cmwnOiAndHVybjonICsgdHVyblNlcnZlci51c2VybmFtZSArICdAJyArIHR1cm5TZXJ2ZXIudHVybixcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NyZWRlbnRpYWwnOiB0dXJuU2VydmVyLnBhc3N3b3JkXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgdHVyblJlYWR5ID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgfTtcclxuLy8gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHR1cm5VUkwsIHRydWUpO1xyXG4vLyAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVtb3RlU3RyZWFtQWRkZWQoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlbW90ZSBzdHJlYW0gYWRkZWQuJyk7XHJcbiAgICAgICAgICAgIHJlbW90ZVZpZGVvLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50LnN0cmVhbSk7XHJcblxyXG4gICAgICAgICAgICByZW1vdGVTdHJlYW0gPSBldmVudC5zdHJlYW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdGVTdHJlYW1SZW1vdmVkKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdGUgc3RyZWFtIHJlbW92ZWQuIEV2ZW50OiAnLCBldmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5ndXAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIYW5naW5nIHVwLicpO1xyXG4gICAgICAgICAgICBzdG9wKCk7XHJcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKCdieWUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW90ZUhhbmd1cCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Nlc3Npb24gdGVybWluYXRlZC4nKTtcclxuICAgICAgICAgICAgc3RvcCgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzSW5pdGlhdG9yOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHN0b3AoKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNTdGFydGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gaXNBdWRpb011dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIGlzVmlkZW9NdXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwY0NvbmZpZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICBwY0NvbmZpZyA9IG51bGw7XHJcbiAgICAgICAgICAgIGxvY2FsVmlkZW8uc3JjID0gbnVsbDtcclxuICAgICAgICAgICAgcmVtb3RlVmlkZW8uc3JjID0gbnVsbDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvaG9tZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL05PVCBCRUlORyBVU0VEIFJJR0hUIE5PV1xyXG4vLyBTZXQgT3B1cyBhcyB0aGUgZGVmYXVsdCBhdWRpbyBjb2RlYyBpZiBpdCdzIHByZXNlbnQuXHJcbi8vICAgICAgICBmdW5jdGlvbiBwcmVmZXJPcHVzKHNkcCkge1xyXG4vLyAgICAgICAgICAgIHZhciBzZHBMaW5lcyA9IHNkcC5zcGxpdCgnXFxyXFxuJyk7XHJcbi8vICAgICAgICAgICAgdmFyIG1MaW5lSW5kZXg7XHJcbi8vICAgICAgICAgICAgLy8gU2VhcmNoIGZvciBtIGxpbmUuXHJcbi8vICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZHBMaW5lcy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICAgICAgICBpZiAoc2RwTGluZXNbaV0uc2VhcmNoKCdtPWF1ZGlvJykgIT09IC0xKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICBtTGluZUluZGV4ID0gaTtcclxuLy8gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIGlmIChtTGluZUluZGV4ID09PSBudWxsKSB7XHJcbi8vICAgICAgICAgICAgICAgIHJldHVybiBzZHA7XHJcbi8vICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgIC8vIElmIE9wdXMgaXMgYXZhaWxhYmxlLCBzZXQgaXQgYXMgdGhlIGRlZmF1bHQgaW4gbSBsaW5lLlxyXG4vLyAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzZHBMaW5lcy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICAgICAgICBpZiAoc2RwTGluZXNbaV0uc2VhcmNoKCdvcHVzLzQ4MDAwJykgIT09IC0xKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICB2YXIgb3B1c1BheWxvYWQgPSBleHRyYWN0U2RwKHNkcExpbmVzW2ldLCAvOihcXGQrKSBvcHVzXFwvNDgwMDAvaSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICBpZiAob3B1c1BheWxvYWQpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBzZHBMaW5lc1ttTGluZUluZGV4XSA9IHNldERlZmF1bHRDb2RlYyhzZHBMaW5lc1ttTGluZUluZGV4XSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B1c1BheWxvYWQpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgLy8gUmVtb3ZlIENOIGluIG0gbGluZSBhbmQgc2RwLlxyXG4vLyAgICAgICAgICAgIHNkcExpbmVzID0gcmVtb3ZlQ04oc2RwTGluZXMsIG1MaW5lSW5kZXgpO1xyXG4vL1xyXG4vLyAgICAgICAgICAgIHNkcCA9IHNkcExpbmVzLmpvaW4oJ1xcclxcbicpO1xyXG4vLyAgICAgICAgICAgIHJldHVybiBzZHA7XHJcbi8vICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vZnVuY3Rpb24gZXh0cmFjdFNkcChzZHBMaW5lLCBwYXR0ZXJuKSB7XHJcbiAgICAgICAgLy8gICAgdmFyIHJlc3VsdCA9IHNkcExpbmUubWF0Y2gocGF0dGVybik7XHJcbiAgICAgICAgLy8gICAgcmV0dXJuIHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoID09PSAyID8gcmVzdWx0WzFdIDogbnVsbDtcclxuICAgICAgICAvL31cclxuXHJcbi8vIFNldCB0aGUgc2VsZWN0ZWQgY29kZWMgdG8gdGhlIGZpcnN0IGluIG0gbGluZS5cclxuLy8gICAgICAgIGZ1bmN0aW9uIHNldERlZmF1bHRDb2RlYyhtTGluZSwgcGF5bG9hZCkge1xyXG4vLyAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IG1MaW5lLnNwbGl0KCcgJyk7XHJcbi8vICAgICAgICAgICAgdmFyIG5ld0xpbmUgPSBbXTtcclxuLy8gICAgICAgICAgICB2YXIgaW5kZXggPSAwO1xyXG4vLyAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAzKSB7IC8vIEZvcm1hdCBvZiBtZWRpYSBzdGFydHMgZnJvbSB0aGUgZm91cnRoLlxyXG4vLyAgICAgICAgICAgICAgICAgICAgbmV3TGluZVtpbmRleCsrXSA9IHBheWxvYWQ7IC8vIFB1dCB0YXJnZXQgcGF5bG9hZCB0byB0aGUgZmlyc3QuXHJcbi8vICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzW2ldICE9PSBwYXlsb2FkKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICBuZXdMaW5lW2luZGV4KytdID0gZWxlbWVudHNbaV07XHJcbi8vICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgcmV0dXJuIG5ld0xpbmUuam9pbignICcpO1xyXG4vLyAgICAgICAgfVxyXG5cclxuLy8gU3RyaXAgQ04gZnJvbSBzZHAgYmVmb3JlIENOIGNvbnN0cmFpbnRzIGlzIHJlYWR5LlxyXG4vLyAgICAgICAgZnVuY3Rpb24gcmVtb3ZlQ04oc2RwTGluZXMsIG1MaW5lSW5kZXgpIHtcclxuLy8gICAgICAgICAgICB2YXIgbUxpbmVFbGVtZW50cyA9IHNkcExpbmVzW21MaW5lSW5kZXhdLnNwbGl0KCcgJyk7XHJcbi8vICAgICAgICAgICAgLy8gU2NhbiBmcm9tIGVuZCBmb3IgdGhlIGNvbnZlbmllbmNlIG9mIHJlbW92aW5nIGFuIGl0ZW0uXHJcbi8vICAgICAgICAgICAgZm9yICh2YXIgaSA9IHNkcExpbmVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbi8vICAgICAgICAgICAgICAgIHZhciBwYXlsb2FkID0gZXh0cmFjdFNkcChzZHBMaW5lc1tpXSwgL2E9cnRwbWFwOihcXGQrKSBDTlxcL1xcZCsvaSk7XHJcbi8vICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICB2YXIgY25Qb3MgPSBtTGluZUVsZW1lbnRzLmluZGV4T2YocGF5bG9hZCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICBpZiAoY25Qb3MgIT09IC0xKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIENOIHBheWxvYWQgZnJvbSBtIGxpbmUuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgbUxpbmVFbGVtZW50cy5zcGxpY2UoY25Qb3MsIDEpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIENOIGxpbmUgaW4gc2RwXHJcbi8vICAgICAgICAgICAgICAgICAgICBzZHBMaW5lcy5zcGxpY2UoaSwgMSk7XHJcbi8vICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgc2RwTGluZXNbbUxpbmVJbmRleF0gPSBtTGluZUVsZW1lbnRzLmpvaW4oJyAnKTtcclxuLy8gICAgICAgICAgICByZXR1cm4gc2RwTGluZXM7XHJcbi8vICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwidmlkZW9zXCI+XHJcbiAgICAgICAgICAgICAgICA8dmlkZW8gaWQ9XCJsb2NhbFZpZGVvXCIgYXV0b1BsYXkgbXV0ZWQ+PC92aWRlbz5cclxuICAgICAgICAgICAgICAgIDx2aWRlbyBpZD1cInJlbW90ZVZpZGVvXCIgYXV0b1BsYXk+PC92aWRlbz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlkZW9DaGF0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbWUvVmlkZW9DaGF0LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=