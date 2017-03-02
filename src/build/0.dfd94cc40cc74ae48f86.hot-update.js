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
	                location.reload();
	                // browserHistory.push({
	                //     pathname: '/'
	                // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1ZpZGVvQ2hhdC5qc3g/YzJlYiJdLCJuYW1lcyI6WyJWaWRlb0NoYXQiLCJwcm9wcyIsInN0YXRlIiwiaXNDaGFubmVsUmVhZHkiLCJpc0luaXRpYXRvciIsImlzU3RhcnRlZCIsImNvbnRleHQiLCJwYyIsImxvY2FsU3RyZWFtIiwicmVtb3RlU3RyZWFtIiwidHVyblJlYWR5Iiwicm9vbSIsInBjQ29uZmlnIiwic2RwQ29uc3RyYWludHMiLCJsb2NhbFZpZGVvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uc29sZSIsImxvZyIsInNyYyIsInJlbW90ZVZpZGVvIiwic29ja2V0Iiwib24iLCJyb29tTmFtZSIsImVtaXQiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInZpZGVvIiwidGhlbiIsImdvdFN0cmVhbSIsImNhdGNoIiwiZSIsImFsZXJ0IiwibmFtZSIsInNldFN0YXRlIiwiYXJyYXkiLCJhcHBseSIsInNlbmRNZXNzYWdlIiwibWVzc2FnZSIsInN0YXJ0IiwidHlwZSIsInNldFJlbW90ZURlc2NyaXB0aW9uIiwiUlRDU2Vzc2lvbkRlc2NyaXB0aW9uIiwiY3JlYXRlQW5zd2VyIiwiY2FuZGlkYXRlIiwiUlRDSWNlQ2FuZGlkYXRlIiwic2RwTUxpbmVJbmRleCIsImxhYmVsIiwiYWRkSWNlQ2FuZGlkYXRlIiwiaGFuZGxlUmVtb3RlSGFuZ3VwIiwic3RyZWFtIiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY29uc3RyYWludHMiLCJjcmVhdGVQZWVyQ29ubmVjdGlvbiIsImFkZFN0cmVhbSIsImNhbGwiLCJvbmJlZm9yZXVubG9hZCIsIlJUQ1BlZXJDb25uZWN0aW9uIiwib25pY2VjYW5kaWRhdGUiLCJoYW5kbGVJY2VDYW5kaWRhdGUiLCJvbmFkZHN0cmVhbSIsImhhbmRsZVJlbW90ZVN0cmVhbUFkZGVkIiwib25yZW1vdmVzdHJlYW0iLCJoYW5kbGVSZW1vdGVTdHJlYW1SZW1vdmVkIiwiZXZlbnQiLCJpZCIsInNkcE1pZCIsImhhbmRsZUNyZWF0ZU9mZmVyRXJyb3IiLCJjcmVhdGVPZmZlciIsInNldExvY2FsQW5kU2VuZE1lc3NhZ2UiLCJvbkNyZWF0ZVNlc3Npb25EZXNjcmlwdGlvbkVycm9yIiwic2Vzc2lvbkRlc2NyaXB0aW9uIiwic2V0TG9jYWxEZXNjcmlwdGlvbiIsImVycm9yIiwidG9TdHJpbmciLCJoYW5ndXAiLCJzdG9wIiwiY2xvc2UiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0tBRU1BLFM7OztBQUNGLHdCQUFhQyxLQUFiLEVBQW9CO0FBQUE7O0FBQUE7O0FBRWhCLGVBQUtDLEtBQUwsR0FBYTtBQUNUQyw2QkFBZ0IsS0FEUDtBQUVUQywwQkFBYSxLQUZKO0FBR1RDLHdCQUFXO0FBSEYsVUFBYjtBQUZnQjtBQU9uQjs7Ozs2Q0FDbUI7QUFDaEIsaUJBQUlDLFVBQVUsSUFBZDtBQUNBLGlCQUFJQyxFQUFKO0FBQ0EsaUJBQUlDLFdBQUo7QUFDQSxpQkFBSUMsWUFBSjtBQUNBLGlCQUFJQyxTQUFKO0FBQ0EsaUJBQUlDLElBQUo7QUFDQTtBQUNBLGlCQUFJQyxXQUFXO0FBQ1gsK0JBQWMsQ0FBQztBQUNYLDRCQUFPO0FBREksa0JBQUQ7QUFESCxjQUFmO0FBS0E7QUFDQSxpQkFBSUMsaUJBQWlCO0FBQ2pCLDhCQUFhO0FBQ1QsNENBQXVCLElBRGQ7QUFFVCw0Q0FBdUI7QUFGZDtBQURJLGNBQXJCOztBQU9BO0FBQ0EsaUJBQUlDLGFBQWFDLFNBQVNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBakI7QUFDQUMscUJBQVFDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCSixXQUFXSyxHQUF0QztBQUNBLGlCQUFJQyxjQUFjTCxTQUFTQyxhQUFULENBQXVCLGNBQXZC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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVE7QUFDQTtBQUNBO0FBQ0E7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSzs7O2tDQUNTO0FBQ04sb0JBQ0k7QUFBQTtBQUFBLG1CQUFLLElBQUcsUUFBUjtBQUNJLDBEQUFPLElBQUcsWUFBVixFQUF1QixjQUF2QixFQUFnQyxXQUFoQyxHQURKO0FBRUksMERBQU8sSUFBRyxhQUFWLEVBQXdCLGNBQXhCO0FBRkosY0FESjtBQU1IOzs7O0dBblltQixnQkFBTUMsUzs7bUJBc1lmdEYsUyIsImZpbGUiOiIwLmRmZDk0Y2M0MGNjNzRhZTQ4Zjg2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Jyb3dzZXJIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuY2xhc3MgVmlkZW9DaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyICgpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNDaGFubmVsUmVhZHk6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0luaXRpYXRvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzU3RhcnRlZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHBjO1xyXG4gICAgICAgIHZhciBsb2NhbFN0cmVhbTtcclxuICAgICAgICB2YXIgcmVtb3RlU3RyZWFtO1xyXG4gICAgICAgIHZhciB0dXJuUmVhZHk7XHJcbiAgICAgICAgdmFyIHJvb207XHJcbiAgICAgICAgLy9zdHVuIHNlcnZlciBmb3IgbmV0d29yayBkYXRhXHJcbiAgICAgICAgdmFyIHBjQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAnaWNlU2VydmVycyc6IFt7XHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ3N0dW46c3R1bi5sLmdvb2dsZS5jb206MTkzMDInXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBTZXQgdXAgYXVkaW8gYW5kIHZpZGVvIHJlZ2FyZGxlc3Mgb2Ygd2hhdCBkZXZpY2VzIGFyZSBwcmVzZW50LlxyXG4gICAgICAgIHZhciBzZHBDb25zdHJhaW50cyA9IHtcclxuICAgICAgICAgICAgJ21hbmRhdG9yeSc6IHtcclxuICAgICAgICAgICAgICAgICdPZmZlclRvUmVjZWl2ZUF1ZGlvJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICdPZmZlclRvUmVjZWl2ZVZpZGVvJzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy95b3VyIHNjcmVlbiBpcyBsb2NhbCB2aWRlby0gb3RoZXIgcGVyc29uIGlzIHJlbW90ZSB2aWRlb1xyXG4gICAgICAgIHZhciBsb2NhbFZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2FsVmlkZW8nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvY2FsIHZpZGVvXCIsIGxvY2FsVmlkZW8uc3JjKTtcclxuICAgICAgICB2YXIgcmVtb3RlVmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3RlVmlkZW8nKTtcclxuICAgICAgICBzb2NrZXQub24oJ3Jvb21OYW1lJywgZnVuY3Rpb24ocm9vbU5hbWUpIHtcclxuICAgICAgICAgICAgcm9vbSA9IHJvb21OYW1lO1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnY3JlYXRlIG9yIGpvaW4nLCByb29tKTtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xyXG4gICAgICAgICAgICAgICAgYXVkaW86IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2aWRlbzogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZ290U3RyZWFtKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnZ2V0VXNlck1lZGlhKCkgZXJyb3I6ICcgKyBlLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSb29tIG5hbWUgOiAnLCByb29tTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBzb2NrZXQub24oJ2NyZWF0ZWQnLCBmdW5jdGlvbihyb29tKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIHJvb20gJyArIHJvb20pO1xyXG4gICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzSW5pdGlhdG9yOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuLy9vbmNlIHRoZSBzZWNvbmQgcGVyc29uIGpvaW5zLCBzZXQgY2hhbm5lbCB0byB0cnVlXHJcbiAgICAgICAgc29ja2V0Lm9uKCdqb2luJywgZnVuY3Rpb24gKHJvb20pe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQW5vdGhlciBwZWVyIG1hZGUgYSByZXF1ZXN0IHRvIGpvaW4gcm9vbSAnICsgcm9vbSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNDaGFubmVsUmVhZHk6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9zb2NrZXQub24oJ2pvaW5lZCcsIGZ1bmN0aW9uKHJvb20pIHtcclxuICAgICAgICAvLyAgICBjb25zb2xlLmxvZygnam9pbmVkOiAnICsgcm9vbSk7XHJcbiAgICAgICAgLy8gICAgaXNDaGFubmVsUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgIC8vfSk7XHJcblxyXG4gICAgICAgIHNvY2tldC5vbignbG9nJywgZnVuY3Rpb24oYXJyYXkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJyYXkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb2NrZXQub24oJ2Z1bGwnLCBmdW5jdGlvbihyb29tKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJSb29tIGlzIGZ1bGxcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsaWVudCBzZW5kaW5nIG1lc3NhZ2U6ICcsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbi8vIFRoaXMgY2xpZW50IHJlY2VpdmVzIGEgbWVzc2FnZVxyXG4gICAgICAgIHNvY2tldC5vbignbWVzc2FnZScsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsaWVudCByZWNlaXZlZCBtZXNzYWdlOicsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAvL2lmIHBlcnNvbiBpbml0aWF0ZXMgY2FsbCwgaW52b2tlIHN0YXJ0XHJcbiAgICAgICAgICAgIC8vIGVsc2UgaWYgcGVyc29uIHJlY2VpdmVzIGFuIG9mZmVyLCBzZWNvbmQgcGVyc29uIGludm9rZXMgc3RhcnRcclxuICAgICAgICAgICAgLy9lbHNlIGlmIHBlcnNvbiByZWNlaXZlcyBhbiBhbnN3ZXIgZnJvbSBzZWNvbmQgcGVyc29uLCBzZXQgcmVtb3RlIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlID09PSAnZ290IHVzZXIgbWVkaWEnKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ29mZmVyJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNQUtJTkcgQU4gT0ZGRVJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRleHQuc3RhdGUuaXNJbml0aWF0b3IgJiYgIWNvbnRleHQuc3RhdGUuaXNTdGFydGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBjQ29uZmlnLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24obWVzc2FnZSksIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQW5zd2VyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Fuc3dlcicgJiYgY29udGV4dC5zdGF0ZS5pc1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHBjQ29uZmlnLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24obWVzc2FnZSkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2NhbmRpZGF0ZScgJiYgY29udGV4dC5zdGF0ZS5pc1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjYW5kaWRhdGUgPSBuZXcgUlRDSWNlQ2FuZGlkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzZHBNTGluZUluZGV4OiBtZXNzYWdlLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZTogbWVzc2FnZS5jYW5kaWRhdGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDQU5ESURBVEU6XCIsIGNhbmRpZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBwY0NvbmZpZy5hZGRJY2VDYW5kaWRhdGUoY2FuZGlkYXRlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnYnllJyAmJiBjb250ZXh0LnN0YXRlLmlzU3RhcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlUmVtb3RlSGFuZ3VwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4vL3NldCB0aGUgbG9jYWwgc3RyZWFtXHJcbiAgICAgICAgZnVuY3Rpb24gZ290U3RyZWFtKHN0cmVhbSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkaW5nIGxvY2FsIHN0cmVhbS4nKTtcclxuICAgICAgICAgICAgbG9jYWxWaWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvY2FsIHZpZGVvIHNvdXJjZVwiLCBsb2NhbFZpZGVvLnNyYyk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RyZWFtID0gc3RyZWFtO1xyXG4gICAgICAgICAgICBzZW5kTWVzc2FnZSgnZ290IHVzZXIgbWVkaWEnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpcyBpbml0aWF0b3JcIiwgY29udGV4dC5zdGF0ZS5pc0luaXRpYXRvcik7XHJcbiAgICAgICAgICAgIGlmIChjb250ZXh0LnN0YXRlLmlzSW5pdGlhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY29uc3RyYWludHMgPSB7XHJcbiAgICAgICAgICAgIHZpZGVvOiB0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dldHRpbmcgdXNlciBtZWRpYSB3aXRoIGNvbnN0cmFpbnRzJywgY29uc3RyYWludHMpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy9pZiAobG9jYXRpb24uaG9zdG5hbWUgIT09ICdsb2NhbGhvc3QnKSB7XHJcbiAgICAgICAgLy8gICAgKFxyXG4gICAgICAgIC8vICAgICAgICAnaHR0cHM6Ly9jb21wdXRlZW5naW5lb25kZW1hbmQuYXBwc3BvdC5jb20vdHVybj91c2VybmFtZT00MTc4NDU3NCZrZXk9NDA4MDIxODkxMydcclxuICAgICAgICAvLyAgICApO1xyXG4gICAgICAgIC8vfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJz4+Pj4+Pj4gc3RhcnQgJywgY29udGV4dC5zdGF0ZS5pc1N0YXJ0ZWQsIGxvY2FsU3RyZWFtLCBjb250ZXh0LnN0YXRlLmlzQ2hhbm5lbFJlYWR5KTtcclxuICAgICAgICAgICAgaWYgKCFjb250ZXh0LnN0YXRlLmlzU3RhcnRlZCAmJiB0eXBlb2YgbG9jYWxTdHJlYW0gIT09ICd1bmRlZmluZWQnICYmIGNvbnRleHQuc3RhdGUuaXNDaGFubmVsUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4gY3JlYXRpbmcgcGVlciBjb25uZWN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVQZWVyQ29ubmVjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgcGNDb25maWcuYWRkU3RyZWFtKGxvY2FsU3RyZWFtKTtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU3RhcnRlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaXNJbml0aWF0b3InLCBjb250ZXh0LnN0YXRlLmlzSW5pdGlhdG9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb250ZXh0LnN0YXRlLmlzSW5pdGlhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoJ2J5ZScpO1xyXG4gICAgICAgIH07XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUGVlckNvbm5lY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vY3JlYXRlIGEgbmV3IHBlZXIgY29ubmVjdGlvblxyXG4gICAgICAgICAgICAvL2FkZCB0aGUgaWNlIGhhbmRsZXJcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHBjQ29uZmlnID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgcGNDb25maWcub25pY2VjYW5kaWRhdGUgPSBoYW5kbGVJY2VDYW5kaWRhdGU7XHJcbiAgICAgICAgICAgICAgICBwY0NvbmZpZy5vbmFkZHN0cmVhbSA9IGhhbmRsZVJlbW90ZVN0cmVhbUFkZGVkO1xyXG4gICAgICAgICAgICAgICAgcGNDb25maWcub25yZW1vdmVzdHJlYW0gPSBoYW5kbGVSZW1vdGVTdHJlYW1SZW1vdmVkO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgUlRDUGVlckNvbm5uZWN0aW9uJyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gY3JlYXRlIFBlZXJDb25uZWN0aW9uLCBleGNlcHRpb246ICcgKyBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0Nhbm5vdCBjcmVhdGUgUlRDUGVlckNvbm5lY3Rpb24gb2JqZWN0LicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVJY2VDYW5kaWRhdGUoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ljZWNhbmRpZGF0ZSBldmVudDogJywgZXZlbnQpO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NhbmRpZGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBldmVudC5jYW5kaWRhdGUuc2RwTWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZTogZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRW5kIG9mIGNhbmRpZGF0ZXMuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW90ZVN0cmVhbUFkZGVkKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdGUgc3RyZWFtIGFkZGVkLicpO1xyXG4gICAgICAgICAgICByZW1vdGVWaWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC5zdHJlYW0pO1xyXG4gICAgICAgICAgICByZW1vdGVTdHJlYW0gPSBldmVudC5zdHJlYW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVDcmVhdGVPZmZlckVycm9yKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGVPZmZlcigpIGVycm9yOiAnLCBldmVudCk7XHJcbiAgICAgICAgfVxyXG4vL2luaXRpYXRlIHRoZSBvZmZlciBhbmQgc2V0IHRoZSBsb2NhbCBkZXNjcmlwdGlvbih5b3VyIHBjKVxyXG4vL29uIHJlc3BvbnNlIHNldCB0aGUgcmVtb3RlIGRlc2NyaXB0aW9uKG90aGVyIHBlcnNvbnMgcGMpXHJcbiAgICAgICAgZnVuY3Rpb24gY2FsbCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlbmRpbmcgb2ZmZXIgdG8gcGVlcicpO1xyXG4gICAgICAgICAgICBwY0NvbmZpZy5jcmVhdGVPZmZlcihzZXRMb2NhbEFuZFNlbmRNZXNzYWdlLCBoYW5kbGVDcmVhdGVPZmZlckVycm9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUFuc3dlcigpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlbmRpbmcgYW5zd2VyIHRvIHBlZXIuJyk7XHJcbiAgICAgICAgICAgIHBjQ29uZmlnLmNyZWF0ZUFuc3dlcigpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBzZXRMb2NhbEFuZFNlbmRNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgb25DcmVhdGVTZXNzaW9uRGVzY3JpcHRpb25FcnJvclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0TG9jYWxBbmRTZW5kTWVzc2FnZShzZXNzaW9uRGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgLy8gU2V0IE9wdXMgYXMgdGhlIHByZWZlcnJlZCBjb2RlYyBpbiBTRFAgaWYgT3B1cyBpcyBwcmVzZW50LlxyXG4gICAgICAgICAgICAvLyAgc2Vzc2lvbkRlc2NyaXB0aW9uLnNkcCA9IHByZWZlck9wdXMoc2Vzc2lvbkRlc2NyaXB0aW9uLnNkcCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0VTU0lPTkRFU0NSSVBUSU9OOlwiLCBzZXNzaW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBwY0NvbmZpZy5zZXRMb2NhbERlc2NyaXB0aW9uKHNlc3Npb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXRMb2NhbEFuZFNlbmRNZXNzYWdlIHNlbmRpbmcgbWVzc2FnZScsIHNlc3Npb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKHNlc3Npb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvbkNyZWF0ZVNlc3Npb25EZXNjcmlwdGlvbkVycm9yKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gY3JlYXRlIHNlc3Npb24gZGVzY3JpcHRpb246ICcgKyBlcnJvci50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9OT1QgQkVJTkcgVVNFRCBSSUdIVCBOT1dcclxuLy9UVVJOIHNlcnZlcnMtIGlmIElDRSBjYW50IGZpbmQgdGhlIGV4dGVybmFsIGFkZHJlc3MsIHRyYWZmaWMgd2lsbCBiZSByb3V0ZWQgdXNpbmcgdHVybiBzZXJ2ZXJzXHJcbi8vICAgICAgICBmdW5jdGlvbiByZXF1ZXN0VHVybih0dXJuVVJMKSB7XHJcbi8vICAgICAgICAgICAgdmFyIHR1cm5FeGlzdHMgPSBmYWxzZTtcclxuLy8gICAgICAgICAgICBmb3IgKHZhciBpIGluIHBjQ29uZmlnLmljZVNlcnZlcnMpIHtcclxuLy8gICAgICAgICAgICAgICAgaWYgKHBjQ29uZmlnLmljZVNlcnZlcnNbaV0udXJsLnN1YnN0cigwLCA1KSA9PT0gJ3R1cm46Jykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgdHVybkV4aXN0cyA9IHRydWU7XHJcbi8vICAgICAgICAgICAgICAgICAgICB0dXJuUmVhZHkgPSB0cnVlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgaWYgKCF0dXJuRXhpc3RzKSB7XHJcbi8vICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHZXR0aW5nIFRVUk4gc2VydmVyIGZyb20gJywgdHVyblVSTCk7XHJcbi8vICAgICAgICAgICAgICAgIC8vIE5vIFRVUk4gc2VydmVyLiBHZXQgb25lIGZyb20gY29tcHV0ZWVuZ2luZW9uZGVtYW5kLmFwcHNwb3QuY29tOlxyXG4vLyAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbi8vICAgICAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHVyblNlcnZlciA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvdCBUVVJOIHNlcnZlcjogJywgdHVyblNlcnZlcik7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgcGNDb25maWcuaWNlU2VydmVycy5wdXNoKHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VybCc6ICd0dXJuOicgKyB0dXJuU2VydmVyLnVzZXJuYW1lICsgJ0AnICsgdHVyblNlcnZlci50dXJuLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY3JlZGVudGlhbCc6IHR1cm5TZXJ2ZXIucGFzc3dvcmRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB0dXJuUmVhZHkgPSB0cnVlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICB9O1xyXG4vLyAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgdHVyblVSTCwgdHJ1ZSk7XHJcbi8vICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdGVTdHJlYW1BZGRlZChldmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3RlIHN0cmVhbSBhZGRlZC4nKTtcclxuICAgICAgICAgICAgcmVtb3RlVmlkZW8uc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQuc3RyZWFtKTtcclxuXHJcbiAgICAgICAgICAgIHJlbW90ZVN0cmVhbSA9IGV2ZW50LnN0cmVhbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW90ZVN0cmVhbVJlbW92ZWQoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlbW90ZSBzdHJlYW0gcmVtb3ZlZC4gRXZlbnQ6ICcsIGV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmd1cCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hhbmdpbmcgdXAuJyk7XHJcbiAgICAgICAgICAgIHN0b3AoKTtcclxuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoJ2J5ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVtb3RlSGFuZ3VwKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2Vzc2lvbiB0ZXJtaW5hdGVkLicpO1xyXG4gICAgICAgICAgICBzdG9wKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNJbml0aWF0b3I6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3RvcCgpIHtcclxuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc1N0YXJ0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBpc0F1ZGlvTXV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gaXNWaWRlb011dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHBjQ29uZmlnLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHBjQ29uZmlnID0gbnVsbDtcclxuICAgICAgICAgICAgbG9jYWxWaWRlby5zcmMgPSBudWxsO1xyXG4gICAgICAgICAgICByZW1vdGVWaWRlby5zcmMgPSBudWxsO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgIC8vIGJyb3dzZXJIaXN0b3J5LnB1c2goe1xyXG4gICAgICAgICAgICAvLyAgICAgcGF0aG5hbWU6ICcvJ1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICB9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vTk9UIEJFSU5HIFVTRUQgUklHSFQgTk9XXHJcbi8vIFNldCBPcHVzIGFzIHRoZSBkZWZhdWx0IGF1ZGlvIGNvZGVjIGlmIGl0J3MgcHJlc2VudC5cclxuLy8gICAgICAgIGZ1bmN0aW9uIHByZWZlck9wdXMoc2RwKSB7XHJcbi8vICAgICAgICAgICAgdmFyIHNkcExpbmVzID0gc2RwLnNwbGl0KCdcXHJcXG4nKTtcclxuLy8gICAgICAgICAgICB2YXIgbUxpbmVJbmRleDtcclxuLy8gICAgICAgICAgICAvLyBTZWFyY2ggZm9yIG0gbGluZS5cclxuLy8gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNkcExpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgICAgICAgIGlmIChzZHBMaW5lc1tpXS5zZWFyY2goJ209YXVkaW8nKSAhPT0gLTEpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgIG1MaW5lSW5kZXggPSBpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgaWYgKG1MaW5lSW5kZXggPT09IG51bGwpIHtcclxuLy8gICAgICAgICAgICAgICAgcmV0dXJuIHNkcDtcclxuLy8gICAgICAgICAgICB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgLy8gSWYgT3B1cyBpcyBhdmFpbGFibGUsIHNldCBpdCBhcyB0aGUgZGVmYXVsdCBpbiBtIGxpbmUuXHJcbi8vICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNkcExpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgICAgICAgIGlmIChzZHBMaW5lc1tpXS5zZWFyY2goJ29wdXMvNDgwMDAnKSAhPT0gLTEpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgIHZhciBvcHVzUGF5bG9hZCA9IGV4dHJhY3RTZHAoc2RwTGluZXNbaV0sIC86KFxcZCspIG9wdXNcXC80ODAwMC9pKTtcclxuLy8gICAgICAgICAgICAgICAgICAgIGlmIChvcHVzUGF5bG9hZCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHNkcExpbmVzW21MaW5lSW5kZXhdID0gc2V0RGVmYXVsdENvZGVjKHNkcExpbmVzW21MaW5lSW5kZXhdLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHVzUGF5bG9hZCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAvLyBSZW1vdmUgQ04gaW4gbSBsaW5lIGFuZCBzZHAuXHJcbi8vICAgICAgICAgICAgc2RwTGluZXMgPSByZW1vdmVDTihzZHBMaW5lcywgbUxpbmVJbmRleCk7XHJcbi8vXHJcbi8vICAgICAgICAgICAgc2RwID0gc2RwTGluZXMuam9pbignXFxyXFxuJyk7XHJcbi8vICAgICAgICAgICAgcmV0dXJuIHNkcDtcclxuLy8gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9mdW5jdGlvbiBleHRyYWN0U2RwKHNkcExpbmUsIHBhdHRlcm4pIHtcclxuICAgICAgICAvLyAgICB2YXIgcmVzdWx0ID0gc2RwTGluZS5tYXRjaChwYXR0ZXJuKTtcclxuICAgICAgICAvLyAgICByZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC5sZW5ndGggPT09IDIgPyByZXN1bHRbMV0gOiBudWxsO1xyXG4gICAgICAgIC8vfVxyXG5cclxuLy8gU2V0IHRoZSBzZWxlY3RlZCBjb2RlYyB0byB0aGUgZmlyc3QgaW4gbSBsaW5lLlxyXG4vLyAgICAgICAgZnVuY3Rpb24gc2V0RGVmYXVsdENvZGVjKG1MaW5lLCBwYXlsb2FkKSB7XHJcbi8vICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gbUxpbmUuc3BsaXQoJyAnKTtcclxuLy8gICAgICAgICAgICB2YXIgbmV3TGluZSA9IFtdO1xyXG4vLyAgICAgICAgICAgIHZhciBpbmRleCA9IDA7XHJcbi8vICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDMpIHsgLy8gRm9ybWF0IG9mIG1lZGlhIHN0YXJ0cyBmcm9tIHRoZSBmb3VydGguXHJcbi8vICAgICAgICAgICAgICAgICAgICBuZXdMaW5lW2luZGV4KytdID0gcGF5bG9hZDsgLy8gUHV0IHRhcmdldCBwYXlsb2FkIHRvIHRoZSBmaXJzdC5cclxuLy8gICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHNbaV0gIT09IHBheWxvYWQpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgIG5ld0xpbmVbaW5kZXgrK10gPSBlbGVtZW50c1tpXTtcclxuLy8gICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICByZXR1cm4gbmV3TGluZS5qb2luKCcgJyk7XHJcbi8vICAgICAgICB9XHJcblxyXG4vLyBTdHJpcCBDTiBmcm9tIHNkcCBiZWZvcmUgQ04gY29uc3RyYWludHMgaXMgcmVhZHkuXHJcbi8vICAgICAgICBmdW5jdGlvbiByZW1vdmVDTihzZHBMaW5lcywgbUxpbmVJbmRleCkge1xyXG4vLyAgICAgICAgICAgIHZhciBtTGluZUVsZW1lbnRzID0gc2RwTGluZXNbbUxpbmVJbmRleF0uc3BsaXQoJyAnKTtcclxuLy8gICAgICAgICAgICAvLyBTY2FuIGZyb20gZW5kIGZvciB0aGUgY29udmVuaWVuY2Ugb2YgcmVtb3ZpbmcgYW4gaXRlbS5cclxuLy8gICAgICAgICAgICBmb3IgKHZhciBpID0gc2RwTGluZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuLy8gICAgICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBleHRyYWN0U2RwKHNkcExpbmVzW2ldLCAvYT1ydHBtYXA6KFxcZCspIENOXFwvXFxkKy9pKTtcclxuLy8gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgIHZhciBjblBvcyA9IG1MaW5lRWxlbWVudHMuaW5kZXhPZihwYXlsb2FkKTtcclxuLy8gICAgICAgICAgICAgICAgICAgIGlmIChjblBvcyAhPT0gLTEpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgQ04gcGF5bG9hZCBmcm9tIG0gbGluZS5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBtTGluZUVsZW1lbnRzLnNwbGljZShjblBvcywgMSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgQ04gbGluZSBpbiBzZHBcclxuLy8gICAgICAgICAgICAgICAgICAgIHNkcExpbmVzLnNwbGljZShpLCAxKTtcclxuLy8gICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICBzZHBMaW5lc1ttTGluZUluZGV4XSA9IG1MaW5lRWxlbWVudHMuam9pbignICcpO1xyXG4vLyAgICAgICAgICAgIHJldHVybiBzZHBMaW5lcztcclxuLy8gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ2aWRlb3NcIj5cclxuICAgICAgICAgICAgICAgIDx2aWRlbyBpZD1cImxvY2FsVmlkZW9cIiBhdXRvUGxheSBtdXRlZD48L3ZpZGVvPlxyXG4gICAgICAgICAgICAgICAgPHZpZGVvIGlkPVwicmVtb3RlVmlkZW9cIiBhdXRvUGxheT48L3ZpZGVvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlb0NoYXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9WaWRlb0NoYXQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==