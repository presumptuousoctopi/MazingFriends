webpackHotUpdate(0,{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1ZpZGVvQ2hhdC5qc3g/YzJlYiJdLCJuYW1lcyI6WyJWaWRlb0NoYXQiLCJwcm9wcyIsInN0YXRlIiwiaXNDaGFubmVsUmVhZHkiLCJpc0luaXRpYXRvciIsImlzU3RhcnRlZCIsImNvbnRleHQiLCJwYyIsImxvY2FsU3RyZWFtIiwicmVtb3RlU3RyZWFtIiwidHVyblJlYWR5Iiwicm9vbSIsInBjQ29uZmlnIiwic2RwQ29uc3RyYWludHMiLCJsb2NhbFZpZGVvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uc29sZSIsImxvZyIsInNyYyIsInJlbW90ZVZpZGVvIiwic29ja2V0Iiwib24iLCJyb29tTmFtZSIsImVtaXQiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInZpZGVvIiwidGhlbiIsImdvdFN0cmVhbSIsImNhdGNoIiwiZSIsImFsZXJ0IiwibmFtZSIsInNldFN0YXRlIiwiYXJyYXkiLCJhcHBseSIsInNlbmRNZXNzYWdlIiwibWVzc2FnZSIsInN0YXJ0IiwidHlwZSIsInNldFJlbW90ZURlc2NyaXB0aW9uIiwiUlRDU2Vzc2lvbkRlc2NyaXB0aW9uIiwiY3JlYXRlQW5zd2VyIiwiY2FuZGlkYXRlIiwiUlRDSWNlQ2FuZGlkYXRlIiwic2RwTUxpbmVJbmRleCIsImxhYmVsIiwiYWRkSWNlQ2FuZGlkYXRlIiwiaGFuZGxlUmVtb3RlSGFuZ3VwIiwic3RyZWFtIiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY29uc3RyYWludHMiLCJjcmVhdGVQZWVyQ29ubmVjdGlvbiIsImFkZFN0cmVhbSIsImNhbGwiLCJvbmJlZm9yZXVubG9hZCIsIlJUQ1BlZXJDb25uZWN0aW9uIiwib25pY2VjYW5kaWRhdGUiLCJoYW5kbGVJY2VDYW5kaWRhdGUiLCJvbmFkZHN0cmVhbSIsImhhbmRsZVJlbW90ZVN0cmVhbUFkZGVkIiwib25yZW1vdmVzdHJlYW0iLCJoYW5kbGVSZW1vdGVTdHJlYW1SZW1vdmVkIiwiZXZlbnQiLCJpZCIsInNkcE1pZCIsImhhbmRsZUNyZWF0ZU9mZmVyRXJyb3IiLCJjcmVhdGVPZmZlciIsInNldExvY2FsQW5kU2VuZE1lc3NhZ2UiLCJvbkNyZWF0ZVNlc3Npb25EZXNjcmlwdGlvbkVycm9yIiwic2Vzc2lvbkRlc2NyaXB0aW9uIiwic2V0TG9jYWxEZXNjcmlwdGlvbiIsImVycm9yIiwidG9TdHJpbmciLCJoYW5ndXAiLCJzdG9wIiwiY2xvc2UiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsInB1c2giLCJwYXRobmFtZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztLQUVNQSxTOzs7QUFDRix3QkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBOztBQUVoQixlQUFLQyxLQUFMLEdBQWE7QUFDVEMsNkJBQWdCLEtBRFA7QUFFVEMsMEJBQWEsS0FGSjtBQUdUQyx3QkFBVztBQUhGLFVBQWI7QUFGZ0I7QUFPbkI7Ozs7NkNBQ21CO0FBQ2hCLGlCQUFJQyxVQUFVLElBQWQ7QUFDQSxpQkFBSUMsRUFBSjtBQUNBLGlCQUFJQyxXQUFKO0FBQ0EsaUJBQUlDLFlBQUo7QUFDQSxpQkFBSUMsU0FBSjtBQUNBLGlCQUFJQyxJQUFKO0FBQ0E7QUFDQSxpQkFBSUMsV0FBVztBQUNYLCtCQUFjLENBQUM7QUFDWCw0QkFBTztBQURJLGtCQUFEO0FBREgsY0FBZjtBQUtBO0FBQ0EsaUJBQUlDLGlCQUFpQjtBQUNqQiw4QkFBYTtBQUNULDRDQUF1QixJQURkO0FBRVQsNENBQXVCO0FBRmQ7QUFESSxjQUFyQjs7QUFPQTtBQUNBLGlCQUFJQyxhQUFhQyxTQUFTQyxhQUFULENBQXVCLGFBQXZCLENBQWpCO0FBQ0FDLHFCQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQkosV0FBV0ssR0FBdEM7QUFDQSxpQkFBSUMsY0FBY0wsU0FBU0MsYUFBVCxDQUF1QixjQUF2QixD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVRO0FBQ0E7QUFDQTtBQUNBOztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUs7OztrQ0FDUztBQUNOLG9CQUNJO0FBQUE7QUFBQSxtQkFBSyxJQUFHLFFBQVI7QUFDSSwwREFBTyxJQUFHLFlBQVYsRUFBdUIsY0FBdkIsRUFBZ0MsV0FBaEMsR0FESjtBQUVJLDBEQUFPLElBQUcsYUFBVixFQUF3QixjQUF4QjtBQUZKLGNBREo7QUFNSDs7OztHQWxZbUIsZ0JBQU1DLFM7O21CQXFZZnRGLFMiLCJmaWxlIjoiMC5hNDhmYjU0ODk4ZmZlYWQxNmVjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHticm93c2VySGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmNsYXNzIFZpZGVvQ2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgICAgICBzdXBlciAoKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzQ2hhbm5lbFJlYWR5OiBmYWxzZSxcclxuICAgICAgICAgICAgaXNJbml0aWF0b3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1N0YXJ0ZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgIHZhciBwYztcclxuICAgICAgICB2YXIgbG9jYWxTdHJlYW07XHJcbiAgICAgICAgdmFyIHJlbW90ZVN0cmVhbTtcclxuICAgICAgICB2YXIgdHVyblJlYWR5O1xyXG4gICAgICAgIHZhciByb29tO1xyXG4gICAgICAgIC8vc3R1biBzZXJ2ZXIgZm9yIG5ldHdvcmsgZGF0YVxyXG4gICAgICAgIHZhciBwY0NvbmZpZyA9IHtcclxuICAgICAgICAgICAgJ2ljZVNlcnZlcnMnOiBbe1xyXG4gICAgICAgICAgICAgICAgJ3VybCc6ICdzdHVuOnN0dW4ubC5nb29nbGUuY29tOjE5MzAyJ1xyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gU2V0IHVwIGF1ZGlvIGFuZCB2aWRlbyByZWdhcmRsZXNzIG9mIHdoYXQgZGV2aWNlcyBhcmUgcHJlc2VudC5cclxuICAgICAgICB2YXIgc2RwQ29uc3RyYWludHMgPSB7XHJcbiAgICAgICAgICAgICdtYW5kYXRvcnknOiB7XHJcbiAgICAgICAgICAgICAgICAnT2ZmZXJUb1JlY2VpdmVBdWRpbyc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAnT2ZmZXJUb1JlY2VpdmVWaWRlbyc6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8veW91ciBzY3JlZW4gaXMgbG9jYWwgdmlkZW8tIG90aGVyIHBlcnNvbiBpcyByZW1vdGUgdmlkZW9cclxuICAgICAgICB2YXIgbG9jYWxWaWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhbFZpZGVvJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2NhbCB2aWRlb1wiLCBsb2NhbFZpZGVvLnNyYyk7XHJcbiAgICAgICAgdmFyIHJlbW90ZVZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW90ZVZpZGVvJyk7XHJcbiAgICAgICAgc29ja2V0Lm9uKCdyb29tTmFtZScsIGZ1bmN0aW9uKHJvb21OYW1lKSB7XHJcbiAgICAgICAgICAgIHJvb20gPSByb29tTmFtZTtcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2NyZWF0ZSBvciBqb2luJywgcm9vbSk7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcclxuICAgICAgICAgICAgICAgIGF1ZGlvOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmlkZW86IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGdvdFN0cmVhbSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2dldFVzZXJNZWRpYSgpIGVycm9yOiAnICsgZS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUm9vbSBuYW1lIDogJywgcm9vbU5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKCdjcmVhdGVkJywgZnVuY3Rpb24ocm9vbSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRlZCByb29tICcgKyByb29tKTtcclxuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc0luaXRpYXRvcjogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbi8vb25jZSB0aGUgc2Vjb25kIHBlcnNvbiBqb2lucywgc2V0IGNoYW5uZWwgdG8gdHJ1ZVxyXG4gICAgICAgIHNvY2tldC5vbignam9pbicsIGZ1bmN0aW9uIChyb29tKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Fub3RoZXIgcGVlciBtYWRlIGEgcmVxdWVzdCB0byBqb2luIHJvb20gJyArIHJvb20pO1xyXG4gICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzQ2hhbm5lbFJlYWR5OiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vc29ja2V0Lm9uKCdqb2luZWQnLCBmdW5jdGlvbihyb29tKSB7XHJcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2coJ2pvaW5lZDogJyArIHJvb20pO1xyXG4gICAgICAgIC8vICAgIGlzQ2hhbm5lbFJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAvL30pO1xyXG5cclxuICAgICAgICBzb2NrZXQub24oJ2xvZycsIGZ1bmN0aW9uKGFycmF5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFycmF5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKCdmdWxsJywgZnVuY3Rpb24ocm9vbSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiUm9vbSBpcyBmdWxsXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZW5kTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDbGllbnQgc2VuZGluZyBtZXNzYWdlOiAnLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ21lc3NhZ2UnLCBtZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4vLyBUaGlzIGNsaWVudCByZWNlaXZlcyBhIG1lc3NhZ2VcclxuICAgICAgICBzb2NrZXQub24oJ21lc3NhZ2UnLCBmdW5jdGlvbihtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDbGllbnQgcmVjZWl2ZWQgbWVzc2FnZTonLCBtZXNzYWdlKTtcclxuICAgICAgICAgICAgLy9pZiBwZXJzb24gaW5pdGlhdGVzIGNhbGwsIGludm9rZSBzdGFydFxyXG4gICAgICAgICAgICAvLyBlbHNlIGlmIHBlcnNvbiByZWNlaXZlcyBhbiBvZmZlciwgc2Vjb25kIHBlcnNvbiBpbnZva2VzIHN0YXJ0XHJcbiAgICAgICAgICAgIC8vZWxzZSBpZiBwZXJzb24gcmVjZWl2ZXMgYW4gYW5zd2VyIGZyb20gc2Vjb25kIHBlcnNvbiwgc2V0IHJlbW90ZSBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBpZiAobWVzc2FnZSA9PT0gJ2dvdCB1c2VyIG1lZGlhJykge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdvZmZlcicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTUFLSU5HIEFOIE9GRkVSXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb250ZXh0LnN0YXRlLmlzSW5pdGlhdG9yICYmICFjb250ZXh0LnN0YXRlLmlzU3RhcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwY0NvbmZpZy5zZXRSZW1vdGVEZXNjcmlwdGlvbihuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKG1lc3NhZ2UpLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUFuc3dlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdhbnN3ZXInICYmIGNvbnRleHQuc3RhdGUuaXNTdGFydGVkKSB7XHJcbiAgICAgICAgICAgICAgICBwY0NvbmZpZy5zZXRSZW1vdGVEZXNjcmlwdGlvbihuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjYW5kaWRhdGUnICYmIGNvbnRleHQuc3RhdGUuaXNTdGFydGVkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2FuZGlkYXRlID0gbmV3IFJUQ0ljZUNhbmRpZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2RwTUxpbmVJbmRleDogbWVzc2FnZS5sYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGU6IG1lc3NhZ2UuY2FuZGlkYXRlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ0FORElEQVRFOlwiLCBjYW5kaWRhdGUpO1xyXG4gICAgICAgICAgICAgICAgcGNDb25maWcuYWRkSWNlQ2FuZGlkYXRlKGNhbmRpZGF0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gJ2J5ZScgJiYgY29udGV4dC5zdGF0ZS5pc1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVJlbW90ZUhhbmd1cCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuLy9zZXQgdGhlIGxvY2FsIHN0cmVhbVxyXG4gICAgICAgIGZ1bmN0aW9uIGdvdFN0cmVhbShzdHJlYW0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkZGluZyBsb2NhbCBzdHJlYW0uJyk7XHJcbiAgICAgICAgICAgIGxvY2FsVmlkZW8uc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoc3RyZWFtKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2NhbCB2aWRlbyBzb3VyY2VcIiwgbG9jYWxWaWRlby5zcmMpO1xyXG4gICAgICAgICAgICBsb2NhbFN0cmVhbSA9IHN0cmVhbTtcclxuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoJ2dvdCB1c2VyIG1lZGlhJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXMgaW5pdGlhdG9yXCIsIGNvbnRleHQuc3RhdGUuaXNJbml0aWF0b3IpO1xyXG4gICAgICAgICAgICBpZiAoY29udGV4dC5zdGF0ZS5pc0luaXRpYXRvcikge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNvbnN0cmFpbnRzID0ge1xyXG4gICAgICAgICAgICB2aWRlbzogdHJ1ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHZXR0aW5nIHVzZXIgbWVkaWEgd2l0aCBjb25zdHJhaW50cycsIGNvbnN0cmFpbnRzKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vaWYgKGxvY2F0aW9uLmhvc3RuYW1lICE9PSAnbG9jYWxob3N0Jykge1xyXG4gICAgICAgIC8vICAgIChcclxuICAgICAgICAvLyAgICAgICAgJ2h0dHBzOi8vY29tcHV0ZWVuZ2luZW9uZGVtYW5kLmFwcHNwb3QuY29tL3R1cm4/dXNlcm5hbWU9NDE3ODQ1NzQma2V5PTQwODAyMTg5MTMnXHJcbiAgICAgICAgLy8gICAgKTtcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4+IHN0YXJ0ICcsIGNvbnRleHQuc3RhdGUuaXNTdGFydGVkLCBsb2NhbFN0cmVhbSwgY29udGV4dC5zdGF0ZS5pc0NoYW5uZWxSZWFkeSk7XHJcbiAgICAgICAgICAgIGlmICghY29udGV4dC5zdGF0ZS5pc1N0YXJ0ZWQgJiYgdHlwZW9mIGxvY2FsU3RyZWFtICE9PSAndW5kZWZpbmVkJyAmJiBjb250ZXh0LnN0YXRlLmlzQ2hhbm5lbFJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPj4+Pj4+IGNyZWF0aW5nIHBlZXIgY29ubmVjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlUGVlckNvbm5lY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIHBjQ29uZmlnLmFkZFN0cmVhbShsb2NhbFN0cmVhbSk7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc1N0YXJ0ZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2lzSW5pdGlhdG9yJywgY29udGV4dC5zdGF0ZS5pc0luaXRpYXRvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udGV4dC5zdGF0ZS5pc0luaXRpYXRvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKCdieWUnKTtcclxuICAgICAgICB9O1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVBlZXJDb25uZWN0aW9uKCkge1xyXG4gICAgICAgICAgICAvL2NyZWF0ZSBhIG5ldyBwZWVyIGNvbm5lY3Rpb25cclxuICAgICAgICAgICAgLy9hZGQgdGhlIGljZSBoYW5kbGVyXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBwY0NvbmZpZyA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihudWxsKTtcclxuICAgICAgICAgICAgICAgIHBjQ29uZmlnLm9uaWNlY2FuZGlkYXRlID0gaGFuZGxlSWNlQ2FuZGlkYXRlO1xyXG4gICAgICAgICAgICAgICAgcGNDb25maWcub25hZGRzdHJlYW0gPSBoYW5kbGVSZW1vdGVTdHJlYW1BZGRlZDtcclxuICAgICAgICAgICAgICAgIHBjQ29uZmlnLm9ucmVtb3Zlc3RyZWFtID0gaGFuZGxlUmVtb3RlU3RyZWFtUmVtb3ZlZDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIFJUQ1BlZXJDb25ubmVjdGlvbicpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGNyZWF0ZSBQZWVyQ29ubmVjdGlvbiwgZXhjZXB0aW9uOiAnICsgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdDYW5ub3QgY3JlYXRlIFJUQ1BlZXJDb25uZWN0aW9uIG9iamVjdC4nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlSWNlQ2FuZGlkYXRlKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpY2VjYW5kaWRhdGUgZXZlbnQ6ICcsIGV2ZW50KTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmNhbmRpZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjYW5kaWRhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBldmVudC5jYW5kaWRhdGUuc2RwTUxpbmVJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBpZDogZXZlbnQuY2FuZGlkYXRlLnNkcE1pZCxcclxuICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGU6IGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VuZCBvZiBjYW5kaWRhdGVzLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdGVTdHJlYW1BZGRlZChldmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3RlIHN0cmVhbSBhZGRlZC4nKTtcclxuICAgICAgICAgICAgcmVtb3RlVmlkZW8uc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQuc3RyZWFtKTtcclxuICAgICAgICAgICAgcmVtb3RlU3RyZWFtID0gZXZlbnQuc3RyZWFtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ3JlYXRlT2ZmZXJFcnJvcihldmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRlT2ZmZXIoKSBlcnJvcjogJywgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuLy9pbml0aWF0ZSB0aGUgb2ZmZXIgYW5kIHNldCB0aGUgbG9jYWwgZGVzY3JpcHRpb24oeW91ciBwYylcclxuLy9vbiByZXNwb25zZSBzZXQgdGhlIHJlbW90ZSBkZXNjcmlwdGlvbihvdGhlciBwZXJzb25zIHBjKVxyXG4gICAgICAgIGZ1bmN0aW9uIGNhbGwoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZW5kaW5nIG9mZmVyIHRvIHBlZXInKTtcclxuICAgICAgICAgICAgcGNDb25maWcuY3JlYXRlT2ZmZXIoc2V0TG9jYWxBbmRTZW5kTWVzc2FnZSwgaGFuZGxlQ3JlYXRlT2ZmZXJFcnJvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVBbnN3ZXIoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZW5kaW5nIGFuc3dlciB0byBwZWVyLicpO1xyXG4gICAgICAgICAgICBwY0NvbmZpZy5jcmVhdGVBbnN3ZXIoKS50aGVuKFxyXG4gICAgICAgICAgICAgICAgc2V0TG9jYWxBbmRTZW5kTWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIG9uQ3JlYXRlU2Vzc2lvbkRlc2NyaXB0aW9uRXJyb3JcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldExvY2FsQW5kU2VuZE1lc3NhZ2Uoc2Vzc2lvbkRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vIFNldCBPcHVzIGFzIHRoZSBwcmVmZXJyZWQgY29kZWMgaW4gU0RQIGlmIE9wdXMgaXMgcHJlc2VudC5cclxuICAgICAgICAgICAgLy8gIHNlc3Npb25EZXNjcmlwdGlvbi5zZHAgPSBwcmVmZXJPcHVzKHNlc3Npb25EZXNjcmlwdGlvbi5zZHApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNFU1NJT05ERVNDUklQVElPTjpcIiwgc2Vzc2lvbkRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgcGNDb25maWcuc2V0TG9jYWxEZXNjcmlwdGlvbihzZXNzaW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0TG9jYWxBbmRTZW5kTWVzc2FnZSBzZW5kaW5nIG1lc3NhZ2UnLCBzZXNzaW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBzZW5kTWVzc2FnZShzZXNzaW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb25DcmVhdGVTZXNzaW9uRGVzY3JpcHRpb25FcnJvcihlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGNyZWF0ZSBzZXNzaW9uIGRlc2NyaXB0aW9uOiAnICsgZXJyb3IudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vTk9UIEJFSU5HIFVTRUQgUklHSFQgTk9XXHJcbi8vVFVSTiBzZXJ2ZXJzLSBpZiBJQ0UgY2FudCBmaW5kIHRoZSBleHRlcm5hbCBhZGRyZXNzLCB0cmFmZmljIHdpbGwgYmUgcm91dGVkIHVzaW5nIHR1cm4gc2VydmVyc1xyXG4vLyAgICAgICAgZnVuY3Rpb24gcmVxdWVzdFR1cm4odHVyblVSTCkge1xyXG4vLyAgICAgICAgICAgIHZhciB0dXJuRXhpc3RzID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBwY0NvbmZpZy5pY2VTZXJ2ZXJzKSB7XHJcbi8vICAgICAgICAgICAgICAgIGlmIChwY0NvbmZpZy5pY2VTZXJ2ZXJzW2ldLnVybC5zdWJzdHIoMCwgNSkgPT09ICd0dXJuOicpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgIHR1cm5FeGlzdHMgPSB0cnVlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgdHVyblJlYWR5ID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIGlmICghdHVybkV4aXN0cykge1xyXG4vLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR2V0dGluZyBUVVJOIHNlcnZlciBmcm9tICcsIHR1cm5VUkwpO1xyXG4vLyAgICAgICAgICAgICAgICAvLyBObyBUVVJOIHNlcnZlci4gR2V0IG9uZSBmcm9tIGNvbXB1dGVlbmdpbmVvbmRlbWFuZC5hcHBzcG90LmNvbTpcclxuLy8gICAgICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4vLyAgICAgICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR1cm5TZXJ2ZXIgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHb3QgVFVSTiBzZXJ2ZXI6ICcsIHR1cm5TZXJ2ZXIpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHBjQ29uZmlnLmljZVNlcnZlcnMucHVzaCh7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1cmwnOiAndHVybjonICsgdHVyblNlcnZlci51c2VybmFtZSArICdAJyArIHR1cm5TZXJ2ZXIudHVybixcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NyZWRlbnRpYWwnOiB0dXJuU2VydmVyLnBhc3N3b3JkXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgdHVyblJlYWR5ID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgfTtcclxuLy8gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHR1cm5VUkwsIHRydWUpO1xyXG4vLyAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVtb3RlU3RyZWFtQWRkZWQoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlbW90ZSBzdHJlYW0gYWRkZWQuJyk7XHJcbiAgICAgICAgICAgIHJlbW90ZVZpZGVvLnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGV2ZW50LnN0cmVhbSk7XHJcblxyXG4gICAgICAgICAgICByZW1vdGVTdHJlYW0gPSBldmVudC5zdHJlYW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdGVTdHJlYW1SZW1vdmVkKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdGUgc3RyZWFtIHJlbW92ZWQuIEV2ZW50OiAnLCBldmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5ndXAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIYW5naW5nIHVwLicpO1xyXG4gICAgICAgICAgICBzdG9wKCk7XHJcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKCdieWUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW90ZUhhbmd1cCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Nlc3Npb24gdGVybWluYXRlZC4nKTtcclxuICAgICAgICAgICAgc3RvcCgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzSW5pdGlhdG9yOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHN0b3AoKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNTdGFydGVkOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gaXNBdWRpb011dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIGlzVmlkZW9NdXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwY0NvbmZpZy5jbG9zZSgpO1xyXG4gICAgICAgICAgICBwY0NvbmZpZyA9IG51bGw7XHJcbiAgICAgICAgICAgIGxvY2FsVmlkZW8uc3JjID0gbnVsbDtcclxuICAgICAgICAgICAgcmVtb3RlVmlkZW8uc3JjID0gbnVsbDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vTk9UIEJFSU5HIFVTRUQgUklHSFQgTk9XXHJcbi8vIFNldCBPcHVzIGFzIHRoZSBkZWZhdWx0IGF1ZGlvIGNvZGVjIGlmIGl0J3MgcHJlc2VudC5cclxuLy8gICAgICAgIGZ1bmN0aW9uIHByZWZlck9wdXMoc2RwKSB7XHJcbi8vICAgICAgICAgICAgdmFyIHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXHJcXG4nKTtcclxuLy8gICAgICAgICAgICB2YXIgbUxpbmVJbmRleDtcclxuLy8gICAgICAgICAgICAvLyBTZWFyY2ggZm9yIG0gbGluZS5cclxuLy8gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNkcExpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgICAgICAgIGlmIChzZHBMaW5lc1tpXS5zZWFyY2goJ209YXVkaW8nKSAhPT0gLTEpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgIG1MaW5lSW5kZXggPSBpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgaWYgKG1MaW5lSW5kZXggPT09IG51bGwpIHtcclxuLy8gICAgICAgICAgICAgICAgcmV0dXJuIHNkcDtcclxuLy8gICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgLy8gSWYgT3B1cyBpcyBhdmFpbGFibGUsIHNldCBpdCBhcyB0aGUgZGVmYXVsdCBpbiBtIGxpbmUuXHJcbi8vICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNkcExpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgICAgICAgIGlmIChzZHBMaW5lc1tpXS5zZWFyY2goJ29wdXMvNDgwMDAnKSAhPT0gLTEpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgIHZhciBvcHVzUGF5bG9hZCA9IGV4dHJhY3RTZHAoc2RwTGluZXNbaV0sIC86KFxcZCspIG9wdXNcXC80ODAwMC9pKTtcclxuLy8gICAgICAgICAgICAgICAgICAgIGlmIChvcHVzUGF5bG9hZCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHNkcExpbmVzW21MaW5lSW5kZXhdID0gc2V0RGVmYXVsdENvZGVjKHNkcExpbmVzW21MaW5lSW5kZXhdLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHVzUGF5bG9hZCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAvLyBSZW1vdmUgQ04gaW4gbSBsaW5lIGFuZCBzZHAuXHJcbi8vICAgICAgICAgICAgc2RwTGluZXMgPSByZW1vdmVDTihzZHBMaW5lcywgbUxpbmVJbmRleCk7XHJcbi8vXHJcbi8vICAgICAgICAgICAgc2RwID0gc2RwTGluZXMuam9pbignXFxyXFxuJyk7XHJcbi8vICAgICAgICAgICAgcmV0dXJuIHNkcDtcclxuLy8gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9mdW5jdGlvbiBleHRyYWN0U2RwKHNkcExpbmUsIHBhdHRlcm4pIHtcclxuICAgICAgICAvLyAgICB2YXIgcmVzdWx0ID0gc2RwTGluZS5tYXRjaChwYXR0ZXJuKTtcclxuICAgICAgICAvLyAgICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC5sZW5ndGggPT09IDIgPyByZXN1bHRbMV0gOiBudWxsO1xyXG4gICAgICAgIC8vfVxyXG5cclxuLy8gU2V0IHRoZSBzZWxlY3RlZCBjb2RlYyB0byB0aGUgZmlyc3QgaW4gbSBsaW5lLlxyXG4vLyAgICAgICAgZnVuY3Rpb24gc2V0RGVmYXVsdENvZGVjKG1MaW5lLCBwYXlsb2FkKSB7XHJcbi8vICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gbUxpbmUuc3BsaXQoJyAnKTtcclxuLy8gICAgICAgICAgICB2YXIgbmV3TGluZSA9IFtdO1xyXG4vLyAgICAgICAgICAgIHZhciBpbmRleCA9IDA7XHJcbi8vICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDMpIHsgLy8gRm9ybWF0IG9mIG1lZGlhIHN0YXJ0cyBmcm9tIHRoZSBmb3VydGguXHJcbi8vICAgICAgICAgICAgICAgICAgICBuZXdMaW5lW2luZGV4KytdID0gcGF5bG9hZDsgLy8gUHV0IHRhcmdldCBwYXlsb2FkIHRvIHRoZSBmaXJzdC5cclxuLy8gICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHNbaV0gIT09IHBheWxvYWQpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgIG5ld0xpbmVbaW5kZXgrK10gPSBlbGVtZW50c1tpXTtcclxuLy8gICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICByZXR1cm4gbmV3TGluZS5qb2luKCcgJyk7XHJcbi8vICAgICAgICB9XHJcblxyXG4vLyBTdHJpcCBDTiBmcm9tIHNkcCBiZWZvcmUgQ04gY29uc3RyYWludHMgaXMgcmVhZHkuXHJcbi8vICAgICAgICBmdW5jdGlvbiByZW1vdmVDTihzZHBMaW5lcywgbUxpbmVJbmRleCkge1xyXG4vLyAgICAgICAgICAgIHZhciBtTGluZUVsZW1lbnRzID0gc2RwTGluZXNbbUxpbmVJbmRleF0uc3BsaXQoJyAnKTtcclxuLy8gICAgICAgICAgICAvLyBTY2FuIGZyb20gZW5kIGZvciB0aGUgY29udmVuaWVuY2Ugb2YgcmVtb3ZpbmcgYW4gaXRlbS5cclxuLy8gICAgICAgICAgICBmb3IgKHZhciBpID0gc2RwTGluZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuLy8gICAgICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBleHRyYWN0U2RwKHNkcExpbmVzW2ldLCAvYT1ydHBtYXA6KFxcZCspIENOXFwvXFxkKy9pKTtcclxuLy8gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgIHZhciBjblBvcyA9IG1MaW5lRWxlbWVudHMuaW5kZXhPZihwYXlsb2FkKTtcclxuLy8gICAgICAgICAgICAgICAgICAgIGlmIChjblBvcyAhPT0gLTEpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgQ04gcGF5bG9hZCBmcm9tIG0gbGluZS5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBtTGluZUVsZW1lbnRzLnNwbGljZShjblBvcywgMSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgQ04gbGluZSBpbiBzZHBcclxuLy8gICAgICAgICAgICAgICAgICAgIHNkcExpbmVzLnNwbGljZShpLCAxKTtcclxuLy8gICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICBzZHBMaW5lc1ttTGluZUluZGV4XSA9IG1MaW5lRWxlbWVudHMuam9pbignICcpO1xyXG4vLyAgICAgICAgICAgIHJldHVybiBzZHBMaW5lcztcclxuLy8gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ2aWRlb3NcIj5cclxuICAgICAgICAgICAgICAgIDx2aWRlbyBpZD1cImxvY2FsVmlkZW9cIiBhdXRvUGxheSBtdXRlZD48L3ZpZGVvPlxyXG4gICAgICAgICAgICAgICAgPHZpZGVvIGlkPVwicmVtb3RlVmlkZW9cIiBhdXRvUGxheT48L3ZpZGVvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlb0NoYXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9WaWRlb0NoYXQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==