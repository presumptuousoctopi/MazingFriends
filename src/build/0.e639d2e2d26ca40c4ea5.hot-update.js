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
	                //document.getElementById("canvas").remove();
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
	
	var _FriendSearch = __webpack_require__(285);
	
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
	                null,
	                _react2.default.createElement(_FriendSearch2.default, null),
	                _react2.default.createElement(
	                    'table',
	                    null,
	                    _react2.default.createElement(
	                        'tr',
	                        null,
	                        _react2.default.createElement(
	                            'th',
	                            null,
	                            'Roomname'
	                        ),
	                        _react2.default.createElement(
	                            'th',
	                            null,
	                            'Number of Players'
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Lobby.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 285:
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
	
	var FriendSearch = function (_React$Component) {
	    _inherits(FriendSearch, _React$Component);
	
	    function FriendSearch() {
	        _classCallCheck(this, FriendSearch);
	
	        var _this = _possibleConstructorReturn(this, (FriendSearch.__proto__ || Object.getPrototypeOf(FriendSearch)).call(this));
	
	        _this.state = {
	            friend: "",
	            searchResult: ""
	        };
	        _this.updateFriend = _this.updateFriend.bind(_this);
	        return _this;
	    }
	
	    _createClass(FriendSearch, [{
	        key: "searchForFriends",
	        value: function searchForFriends(event) {
	            var context = this;
	            event.preventDefault();
	            socket.emit("getUsers", this.state.friend);
	            socket.on("users", function (obj) {
	                if (obj.data.username) {
	                    context.setState({
	                        searchResult: obj.data.username
	                    });
	                } else {
	                    alert("no such user in the database");
	                }
	            });
	        }
	    }, {
	        key: "updateFriend",
	        value: function updateFriend(event) {
	            this.setState({
	                friend: event.target.value
	            });
	        }
	    }, {
	        key: "addFriend",
	        value: function addFriend() {}
	    }, {
	        key: "render",
	        value: function render() {
	            var button = null;
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    "form",
	                    null,
	                    _react2.default.createElement("input", { type: "text", value: this.state.friend, onChange: this.updateFriend, placeholder: "search for friends" }),
	                    _react2.default.createElement(
	                        "button",
	                        { type: "submit", onClick: this.searchForFriends.bind(this) },
	                        "Search"
	                    )
	                ),
	                _react2.default.createElement(
	                    "h4",
	                    null,
	                    this.state.searchResult
	                ),
	                this.state.searchResult !== "" && _react2.default.createElement(
	                    "button",
	                    { onClick: this.addFriend },
	                    "Add"
	                )
	            );
	        }
	    }]);
	
	    return FriendSearch;
	}(_react2.default.Component);
	
	exports.default = FriendSearch;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "FriendSearch.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1ZpZGVvQ2hhdC5qc3g/YzJlYiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0xvYmJ5LmpzeD9jY2JhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dhbWUvRnJpZW5kU2VhcmNoLmpzeD82ZWIyIl0sIm5hbWVzIjpbIlZpZGVvQ2hhdCIsInByb3BzIiwic3RhdGUiLCJpc0NoYW5uZWxSZWFkeSIsImlzSW5pdGlhdG9yIiwiaXNTdGFydGVkIiwiY29udGV4dCIsInBjIiwibG9jYWxTdHJlYW0iLCJyZW1vdGVTdHJlYW0iLCJ0dXJuUmVhZHkiLCJyb29tIiwicGNDb25maWciLCJzZHBDb25zdHJhaW50cyIsImxvY2FsVmlkZW8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25zb2xlIiwibG9nIiwic3JjIiwicmVtb3RlVmlkZW8iLCJzb2NrZXQiLCJvbiIsInJvb21OYW1lIiwiZW1pdCIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidmlkZW8iLCJ0aGVuIiwiZ290U3RyZWFtIiwiY2F0Y2giLCJlIiwiYWxlcnQiLCJuYW1lIiwic2V0U3RhdGUiLCJhcnJheSIsImFwcGx5Iiwic2VuZE1lc3NhZ2UiLCJtZXNzYWdlIiwic3RhcnQiLCJ0eXBlIiwic2V0UmVtb3RlRGVzY3JpcHRpb24iLCJSVENTZXNzaW9uRGVzY3JpcHRpb24iLCJjcmVhdGVBbnN3ZXIiLCJjYW5kaWRhdGUiLCJSVENJY2VDYW5kaWRhdGUiLCJzZHBNTGluZUluZGV4IiwibGFiZWwiLCJhZGRJY2VDYW5kaWRhdGUiLCJoYW5kbGVSZW1vdGVIYW5ndXAiLCJzdHJlYW0iLCJ3aW5kb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjb25zdHJhaW50cyIsImNyZWF0ZVBlZXJDb25uZWN0aW9uIiwiYWRkU3RyZWFtIiwiY2FsbCIsIm9uYmVmb3JldW5sb2FkIiwiUlRDUGVlckNvbm5lY3Rpb24iLCJvbmljZWNhbmRpZGF0ZSIsImhhbmRsZUljZUNhbmRpZGF0ZSIsIm9uYWRkc3RyZWFtIiwiaGFuZGxlUmVtb3RlU3RyZWFtQWRkZWQiLCJvbnJlbW92ZXN0cmVhbSIsImhhbmRsZVJlbW90ZVN0cmVhbVJlbW92ZWQiLCJldmVudCIsImlkIiwic2RwTWlkIiwiaGFuZGxlQ3JlYXRlT2ZmZXJFcnJvciIsImNyZWF0ZU9mZmVyIiwic2V0TG9jYWxBbmRTZW5kTWVzc2FnZSIsIm9uQ3JlYXRlU2Vzc2lvbkRlc2NyaXB0aW9uRXJyb3IiLCJzZXNzaW9uRGVzY3JpcHRpb24iLCJzZXRMb2NhbERlc2NyaXB0aW9uIiwiZXJyb3IiLCJ0b1N0cmluZyIsImhhbmd1cCIsInN0b3AiLCJjbG9zZSIsInB1c2giLCJwYXRobmFtZSIsIkNvbXBvbmVudCIsIkxvYmJ5Iiwicm9vbXMiLCJyb29tTmFtZXMiLCJkYXRhIiwia2V5IiwidW5kZWZpbmVkIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImluZGV4IiwiRnJpZW5kU2VhcmNoIiwiZnJpZW5kIiwic2VhcmNoUmVzdWx0IiwidXBkYXRlRnJpZW5kIiwiYmluZCIsInByZXZlbnREZWZhdWx0Iiwib2JqIiwidXNlcm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsInNlYXJjaEZvckZyaWVuZHMiLCJhZGRGcmllbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7S0FFTUEsUzs7O0FBQ0Ysd0JBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFFaEIsZUFBS0MsS0FBTCxHQUFhO0FBQ1RDLDZCQUFnQixLQURQO0FBRVRDLDBCQUFhLEtBRko7QUFHVEMsd0JBQVc7QUFIRixVQUFiO0FBRmdCO0FBT25COzs7OzZDQUNtQjtBQUNoQixpQkFBSUMsVUFBVSxJQUFkO0FBQ0EsaUJBQUlDLEVBQUo7QUFDQSxpQkFBSUMsV0FBSjtBQUNBLGlCQUFJQyxZQUFKO0FBQ0EsaUJBQUlD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QUFRLE1BQUssUUFBYixFQUFzQixTQUFTLEtBQUtRLGdCQUFMLENBQXNCUCxJQUF0QixDQUEyQixJQUEzQixDQUEvQjtBQUFBO0FBQUE7QUFGSixrQkFEQTtBQUtBO0FBQUE7QUFBQTtBQUFLLDBCQUFLakcsS0FBTCxDQUFXK0Y7QUFBaEIsa0JBTEE7QUFNSyxzQkFBSy9GLEtBQUwsQ0FBVytGLFlBQVgsS0FBNEIsRUFBNUIsSUFDRztBQUFBO0FBQUEsdUJBQVEsU0FBUyxLQUFLVSxTQUF0QjtBQUFBO0FBQUE7QUFQUixjQURKO0FBWUg7Ozs7R0E5Q3NCLGdCQUFNdkIsUzs7bUJBZ0RsQlcsWSIsImZpbGUiOiIwLmU2MzlkMmUyZDI2Y2E0MGM0ZWE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Jyb3dzZXJIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuY2xhc3MgVmlkZW9DaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xyXG4gICAgICAgIHN1cGVyICgpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNDaGFubmVsUmVhZHk6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0luaXRpYXRvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzU3RhcnRlZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHBjO1xyXG4gICAgICAgIHZhciBsb2NhbFN0cmVhbTtcclxuICAgICAgICB2YXIgcmVtb3RlU3RyZWFtO1xyXG4gICAgICAgIHZhciB0dXJuUmVhZHk7XHJcbiAgICAgICAgdmFyIHJvb207XHJcbiAgICAgICAgLy9zdHVuIHNlcnZlciBmb3IgbmV0d29yayBkYXRhXHJcbiAgICAgICAgdmFyIHBjQ29uZmlnID0ge1xyXG4gICAgICAgICAgICAnaWNlU2VydmVycyc6IFt7XHJcbiAgICAgICAgICAgICAgICAndXJsJzogJ3N0dW46c3R1bi5sLmdvb2dsZS5jb206MTkzMDInXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBTZXQgdXAgYXVkaW8gYW5kIHZpZGVvIHJlZ2FyZGxlc3Mgb2Ygd2hhdCBkZXZpY2VzIGFyZSBwcmVzZW50LlxyXG4gICAgICAgIHZhciBzZHBDb25zdHJhaW50cyA9IHtcclxuICAgICAgICAgICAgJ21hbmRhdG9yeSc6IHtcclxuICAgICAgICAgICAgICAgICdPZmZlclRvUmVjZWl2ZUF1ZGlvJzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICdPZmZlclRvUmVjZWl2ZVZpZGVvJzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy95b3VyIHNjcmVlbiBpcyBsb2NhbCB2aWRlby0gb3RoZXIgcGVyc29uIGlzIHJlbW90ZSB2aWRlb1xyXG4gICAgICAgIHZhciBsb2NhbFZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2FsVmlkZW8nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxvY2FsIHZpZGVvXCIsIGxvY2FsVmlkZW8uc3JjKTtcclxuICAgICAgICB2YXIgcmVtb3RlVmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3RlVmlkZW8nKTtcclxuICAgICAgICBzb2NrZXQub24oJ3Jvb21OYW1lJywgZnVuY3Rpb24ocm9vbU5hbWUpIHtcclxuICAgICAgICAgICAgcm9vbSA9IHJvb21OYW1lO1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnY3JlYXRlIG9yIGpvaW4nLCByb29tKTtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xyXG4gICAgICAgICAgICAgICAgYXVkaW86IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2aWRlbzogdHJ1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZ290U3RyZWFtKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnZ2V0VXNlck1lZGlhKCkgZXJyb3I6ICcgKyBlLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSb29tIG5hbWUgOiAnLCByb29tTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBzb2NrZXQub24oJ2NyZWF0ZWQnLCBmdW5jdGlvbihyb29tKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIHJvb20gJyArIHJvb20pO1xyXG4gICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzSW5pdGlhdG9yOiB0cnVlXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuLy9vbmNlIHRoZSBzZWNvbmQgcGVyc29uIGpvaW5zLCBzZXQgY2hhbm5lbCB0byB0cnVlXHJcbiAgICAgICAgc29ja2V0Lm9uKCdqb2luJywgZnVuY3Rpb24gKHJvb20pe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQW5vdGhlciBwZWVyIG1hZGUgYSByZXF1ZXN0IHRvIGpvaW4gcm9vbSAnICsgcm9vbSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNDaGFubmVsUmVhZHk6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9zb2NrZXQub24oJ2pvaW5lZCcsIGZ1bmN0aW9uKHJvb20pIHtcclxuICAgICAgICAvLyAgICBjb25zb2xlLmxvZygnam9pbmVkOiAnICsgcm9vbSk7XHJcbiAgICAgICAgLy8gICAgaXNDaGFubmVsUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgIC8vfSk7XHJcblxyXG4gICAgICAgIHNvY2tldC5vbignbG9nJywgZnVuY3Rpb24oYXJyYXkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJyYXkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzb2NrZXQub24oJ2Z1bGwnLCBmdW5jdGlvbihyb29tKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJSb29tIGlzIGZ1bGxcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsaWVudCBzZW5kaW5nIG1lc3NhZ2U6ICcsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbi8vIFRoaXMgY2xpZW50IHJlY2VpdmVzIGEgbWVzc2FnZVxyXG4gICAgICAgIHNvY2tldC5vbignbWVzc2FnZScsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NsaWVudCByZWNlaXZlZCBtZXNzYWdlOicsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAvL2lmIHBlcnNvbiBpbml0aWF0ZXMgY2FsbCwgaW52b2tlIHN0YXJ0XHJcbiAgICAgICAgICAgIC8vIGVsc2UgaWYgcGVyc29uIHJlY2VpdmVzIGFuIG9mZmVyLCBzZWNvbmQgcGVyc29uIGludm9rZXMgc3RhcnRcclxuICAgICAgICAgICAgLy9lbHNlIGlmIHBlcnNvbiByZWNlaXZlcyBhbiBhbnN3ZXIgZnJvbSBzZWNvbmQgcGVyc29uLCBzZXQgcmVtb3RlIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlID09PSAnZ290IHVzZXIgbWVkaWEnKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ29mZmVyJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNQUtJTkcgQU4gT0ZGRVJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRleHQuc3RhdGUuaXNJbml0aWF0b3IgJiYgIWNvbnRleHQuc3RhdGUuaXNTdGFydGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBjQ29uZmlnLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24obWVzc2FnZSksIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQW5zd2VyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2Fuc3dlcicgJiYgY29udGV4dC5zdGF0ZS5pc1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHBjQ29uZmlnLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24obWVzc2FnZSkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ2NhbmRpZGF0ZScgJiYgY29udGV4dC5zdGF0ZS5pc1N0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjYW5kaWRhdGUgPSBuZXcgUlRDSWNlQ2FuZGlkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzZHBNTGluZUluZGV4OiBtZXNzYWdlLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZTogbWVzc2FnZS5jYW5kaWRhdGVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDQU5ESURBVEU6XCIsIGNhbmRpZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBwY0NvbmZpZy5hZGRJY2VDYW5kaWRhdGUoY2FuZGlkYXRlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlID09PSAnYnllJyAmJiBjb250ZXh0LnN0YXRlLmlzU3RhcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlUmVtb3RlSGFuZ3VwKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4vL3NldCB0aGUgbG9jYWwgc3RyZWFtXHJcbiAgICAgICAgZnVuY3Rpb24gZ290U3RyZWFtKHN0cmVhbSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkaW5nIGxvY2FsIHN0cmVhbS4nKTtcclxuICAgICAgICAgICAgbG9jYWxWaWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvY2FsIHZpZGVvIHNvdXJjZVwiLCBsb2NhbFZpZGVvLnNyYyk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RyZWFtID0gc3RyZWFtO1xyXG4gICAgICAgICAgICBzZW5kTWVzc2FnZSgnZ290IHVzZXIgbWVkaWEnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpcyBpbml0aWF0b3JcIiwgY29udGV4dC5zdGF0ZS5pc0luaXRpYXRvcik7XHJcbiAgICAgICAgICAgIGlmIChjb250ZXh0LnN0YXRlLmlzSW5pdGlhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY29uc3RyYWludHMgPSB7XHJcbiAgICAgICAgICAgIHZpZGVvOiB0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dldHRpbmcgdXNlciBtZWRpYSB3aXRoIGNvbnN0cmFpbnRzJywgY29uc3RyYWludHMpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy9pZiAobG9jYXRpb24uaG9zdG5hbWUgIT09ICdsb2NhbGhvc3QnKSB7XHJcbiAgICAgICAgLy8gICAgKFxyXG4gICAgICAgIC8vICAgICAgICAnaHR0cHM6Ly9jb21wdXRlZW5naW5lb25kZW1hbmQuYXBwc3BvdC5jb20vdHVybj91c2VybmFtZT00MTc4NDU3NCZrZXk9NDA4MDIxODkxMydcclxuICAgICAgICAvLyAgICApO1xyXG4gICAgICAgIC8vfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJz4+Pj4+Pj4gc3RhcnQgJywgY29udGV4dC5zdGF0ZS5pc1N0YXJ0ZWQsIGxvY2FsU3RyZWFtLCBjb250ZXh0LnN0YXRlLmlzQ2hhbm5lbFJlYWR5KTtcclxuICAgICAgICAgICAgaWYgKCFjb250ZXh0LnN0YXRlLmlzU3RhcnRlZCAmJiB0eXBlb2YgbG9jYWxTdHJlYW0gIT09ICd1bmRlZmluZWQnICYmIGNvbnRleHQuc3RhdGUuaXNDaGFubmVsUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4gY3JlYXRpbmcgcGVlciBjb25uZWN0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVQZWVyQ29ubmVjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgcGNDb25maWcuYWRkU3RyZWFtKGxvY2FsU3RyZWFtKTtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU3RhcnRlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaXNJbml0aWF0b3InLCBjb250ZXh0LnN0YXRlLmlzSW5pdGlhdG9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb250ZXh0LnN0YXRlLmlzSW5pdGlhdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoJ2J5ZScpO1xyXG4gICAgICAgIH07XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUGVlckNvbm5lY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vY3JlYXRlIGEgbmV3IHBlZXIgY29ubmVjdGlvblxyXG4gICAgICAgICAgICAvL2FkZCB0aGUgaWNlIGhhbmRsZXJcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHBjQ29uZmlnID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgcGNDb25maWcub25pY2VjYW5kaWRhdGUgPSBoYW5kbGVJY2VDYW5kaWRhdGU7XHJcbiAgICAgICAgICAgICAgICBwY0NvbmZpZy5vbmFkZHN0cmVhbSA9IGhhbmRsZVJlbW90ZVN0cmVhbUFkZGVkO1xyXG4gICAgICAgICAgICAgICAgcGNDb25maWcub25yZW1vdmVzdHJlYW0gPSBoYW5kbGVSZW1vdGVTdHJlYW1SZW1vdmVkO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgUlRDUGVlckNvbm5uZWN0aW9uJyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gY3JlYXRlIFBlZXJDb25uZWN0aW9uLCBleGNlcHRpb246ICcgKyBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0Nhbm5vdCBjcmVhdGUgUlRDUGVlckNvbm5lY3Rpb24gb2JqZWN0LicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVJY2VDYW5kaWRhdGUoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ljZWNhbmRpZGF0ZSBldmVudDogJywgZXZlbnQpO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NhbmRpZGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBldmVudC5jYW5kaWRhdGUuc2RwTWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZTogZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRW5kIG9mIGNhbmRpZGF0ZXMuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW90ZVN0cmVhbUFkZGVkKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdGUgc3RyZWFtIGFkZGVkLicpO1xyXG4gICAgICAgICAgICByZW1vdGVWaWRlby5zcmMgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChldmVudC5zdHJlYW0pO1xyXG4gICAgICAgICAgICByZW1vdGVTdHJlYW0gPSBldmVudC5zdHJlYW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVDcmVhdGVPZmZlckVycm9yKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGVPZmZlcigpIGVycm9yOiAnLCBldmVudCk7XHJcbiAgICAgICAgfVxyXG4vL2luaXRpYXRlIHRoZSBvZmZlciBhbmQgc2V0IHRoZSBsb2NhbCBkZXNjcmlwdGlvbih5b3VyIHBjKVxyXG4vL29uIHJlc3BvbnNlIHNldCB0aGUgcmVtb3RlIGRlc2NyaXB0aW9uKG90aGVyIHBlcnNvbnMgcGMpXHJcbiAgICAgICAgZnVuY3Rpb24gY2FsbCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlbmRpbmcgb2ZmZXIgdG8gcGVlcicpO1xyXG4gICAgICAgICAgICBwY0NvbmZpZy5jcmVhdGVPZmZlcihzZXRMb2NhbEFuZFNlbmRNZXNzYWdlLCBoYW5kbGVDcmVhdGVPZmZlckVycm9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUFuc3dlcigpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlbmRpbmcgYW5zd2VyIHRvIHBlZXIuJyk7XHJcbiAgICAgICAgICAgIHBjQ29uZmlnLmNyZWF0ZUFuc3dlcigpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBzZXRMb2NhbEFuZFNlbmRNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgb25DcmVhdGVTZXNzaW9uRGVzY3JpcHRpb25FcnJvclxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0TG9jYWxBbmRTZW5kTWVzc2FnZShzZXNzaW9uRGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgLy8gU2V0IE9wdXMgYXMgdGhlIHByZWZlcnJlZCBjb2RlYyBpbiBTRFAgaWYgT3B1cyBpcyBwcmVzZW50LlxyXG4gICAgICAgICAgICAvLyAgc2Vzc2lvbkRlc2NyaXB0aW9uLnNkcCA9IHByZWZlck9wdXMoc2Vzc2lvbkRlc2NyaXB0aW9uLnNkcCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0VTU0lPTkRFU0NSSVBUSU9OOlwiLCBzZXNzaW9uRGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBwY0NvbmZpZy5zZXRMb2NhbERlc2NyaXB0aW9uKHNlc3Npb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXRMb2NhbEFuZFNlbmRNZXNzYWdlIHNlbmRpbmcgbWVzc2FnZScsIHNlc3Npb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKHNlc3Npb25EZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvbkNyZWF0ZVNlc3Npb25EZXNjcmlwdGlvbkVycm9yKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gY3JlYXRlIHNlc3Npb24gZGVzY3JpcHRpb246ICcgKyBlcnJvci50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9OT1QgQkVJTkcgVVNFRCBSSUdIVCBOT1dcclxuLy9UVVJOIHNlcnZlcnMtIGlmIElDRSBjYW50IGZpbmQgdGhlIGV4dGVybmFsIGFkZHJlc3MsIHRyYWZmaWMgd2lsbCBiZSByb3V0ZWQgdXNpbmcgdHVybiBzZXJ2ZXJzXHJcbi8vICAgICAgICBmdW5jdGlvbiByZXF1ZXN0VHVybih0dXJuVVJMKSB7XHJcbi8vICAgICAgICAgICAgdmFyIHR1cm5FeGlzdHMgPSBmYWxzZTtcclxuLy8gICAgICAgICAgICBmb3IgKHZhciBpIGluIHBjQ29uZmlnLmljZVNlcnZlcnMpIHtcclxuLy8gICAgICAgICAgICAgICAgaWYgKHBjQ29uZmlnLmljZVNlcnZlcnNbaV0udXJsLnN1YnN0cigwLCA1KSA9PT0gJ3R1cm46Jykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgdHVybkV4aXN0cyA9IHRydWU7XHJcbi8vICAgICAgICAgICAgICAgICAgICB0dXJuUmVhZHkgPSB0cnVlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgaWYgKCF0dXJuRXhpc3RzKSB7XHJcbi8vICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHZXR0aW5nIFRVUk4gc2VydmVyIGZyb20gJywgdHVyblVSTCk7XHJcbi8vICAgICAgICAgICAgICAgIC8vIE5vIFRVUk4gc2VydmVyLiBHZXQgb25lIGZyb20gY29tcHV0ZWVuZ2luZW9uZGVtYW5kLmFwcHNwb3QuY29tOlxyXG4vLyAgICAgICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbi8vICAgICAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHVyblNlcnZlciA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dvdCBUVVJOIHNlcnZlcjogJywgdHVyblNlcnZlcik7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgcGNDb25maWcuaWNlU2VydmVycy5wdXNoKHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VybCc6ICd0dXJuOicgKyB0dXJuU2VydmVyLnVzZXJuYW1lICsgJ0AnICsgdHVyblNlcnZlci50dXJuLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY3JlZGVudGlhbCc6IHR1cm5TZXJ2ZXIucGFzc3dvcmRcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICB0dXJuUmVhZHkgPSB0cnVlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICB9O1xyXG4vLyAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgdHVyblVSTCwgdHJ1ZSk7XHJcbi8vICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdGVTdHJlYW1BZGRlZChldmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3RlIHN0cmVhbSBhZGRlZC4nKTtcclxuICAgICAgICAgICAgcmVtb3RlVmlkZW8uc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZXZlbnQuc3RyZWFtKTtcclxuXHJcbiAgICAgICAgICAgIHJlbW90ZVN0cmVhbSA9IGV2ZW50LnN0cmVhbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlbW90ZVN0cmVhbVJlbW92ZWQoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlbW90ZSBzdHJlYW0gcmVtb3ZlZC4gRXZlbnQ6ICcsIGV2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmd1cCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hhbmdpbmcgdXAuJyk7XHJcbiAgICAgICAgICAgIHN0b3AoKTtcclxuICAgICAgICAgICAgc2VuZE1lc3NhZ2UoJ2J5ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVtb3RlSGFuZ3VwKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2Vzc2lvbiB0ZXJtaW5hdGVkLicpO1xyXG4gICAgICAgICAgICBzdG9wKCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNJbml0aWF0b3I6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3RvcCgpIHtcclxuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc1N0YXJ0ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBpc0F1ZGlvTXV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gaXNWaWRlb011dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHBjQ29uZmlnLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHBjQ29uZmlnID0gbnVsbDtcclxuICAgICAgICAgICAgbG9jYWxWaWRlby5zcmMgPSBudWxsO1xyXG4gICAgICAgICAgICByZW1vdGVWaWRlby5zcmMgPSBudWxsO1xyXG4gICAgICAgICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2hvbWUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9OT1QgQkVJTkcgVVNFRCBSSUdIVCBOT1dcclxuLy8gU2V0IE9wdXMgYXMgdGhlIGRlZmF1bHQgYXVkaW8gY29kZWMgaWYgaXQncyBwcmVzZW50LlxyXG4vLyAgICAgICAgZnVuY3Rpb24gcHJlZmVyT3B1cyhzZHApIHtcclxuLy8gICAgICAgICAgICB2YXIgc2RwTGluZXMgPSBzZHAuc3BsaXQoJ1xcclxcbicpO1xyXG4vLyAgICAgICAgICAgIHZhciBtTGluZUluZGV4O1xyXG4vLyAgICAgICAgICAgIC8vIFNlYXJjaCBmb3IgbSBsaW5lLlxyXG4vLyAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2RwTGluZXMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgICAgaWYgKHNkcExpbmVzW2ldLnNlYXJjaCgnbT1hdWRpbycpICE9PSAtMSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgbUxpbmVJbmRleCA9IGk7XHJcbi8vICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICBpZiAobUxpbmVJbmRleCA9PT0gbnVsbCkge1xyXG4vLyAgICAgICAgICAgICAgICByZXR1cm4gc2RwO1xyXG4vLyAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAvLyBJZiBPcHVzIGlzIGF2YWlsYWJsZSwgc2V0IGl0IGFzIHRoZSBkZWZhdWx0IGluIG0gbGluZS5cclxuLy8gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc2RwTGluZXMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgICAgaWYgKHNkcExpbmVzW2ldLnNlYXJjaCgnb3B1cy80ODAwMCcpICE9PSAtMSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgdmFyIG9wdXNQYXlsb2FkID0gZXh0cmFjdFNkcChzZHBMaW5lc1tpXSwgLzooXFxkKykgb3B1c1xcLzQ4MDAwL2kpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgaWYgKG9wdXNQYXlsb2FkKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgc2RwTGluZXNbbUxpbmVJbmRleF0gPSBzZXREZWZhdWx0Q29kZWMoc2RwTGluZXNbbUxpbmVJbmRleF0sXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdXNQYXlsb2FkKTtcclxuLy8gICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgIC8vIFJlbW92ZSBDTiBpbiBtIGxpbmUgYW5kIHNkcC5cclxuLy8gICAgICAgICAgICBzZHBMaW5lcyA9IHJlbW92ZUNOKHNkcExpbmVzLCBtTGluZUluZGV4KTtcclxuLy9cclxuLy8gICAgICAgICAgICBzZHAgPSBzZHBMaW5lcy5qb2luKCdcXHJcXG4nKTtcclxuLy8gICAgICAgICAgICByZXR1cm4gc2RwO1xyXG4vLyAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2Z1bmN0aW9uIGV4dHJhY3RTZHAoc2RwTGluZSwgcGF0dGVybikge1xyXG4gICAgICAgIC8vICAgIHZhciByZXN1bHQgPSBzZHBMaW5lLm1hdGNoKHBhdHRlcm4pO1xyXG4gICAgICAgIC8vICAgIHJldHVybiByZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCA9PT0gMiA/IHJlc3VsdFsxXSA6IG51bGw7XHJcbiAgICAgICAgLy99XHJcblxyXG4vLyBTZXQgdGhlIHNlbGVjdGVkIGNvZGVjIHRvIHRoZSBmaXJzdCBpbiBtIGxpbmUuXHJcbi8vICAgICAgICBmdW5jdGlvbiBzZXREZWZhdWx0Q29kZWMobUxpbmUsIHBheWxvYWQpIHtcclxuLy8gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBtTGluZS5zcGxpdCgnICcpO1xyXG4vLyAgICAgICAgICAgIHZhciBuZXdMaW5lID0gW107XHJcbi8vICAgICAgICAgICAgdmFyIGluZGV4ID0gMDtcclxuLy8gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMykgeyAvLyBGb3JtYXQgb2YgbWVkaWEgc3RhcnRzIGZyb20gdGhlIGZvdXJ0aC5cclxuLy8gICAgICAgICAgICAgICAgICAgIG5ld0xpbmVbaW5kZXgrK10gPSBwYXlsb2FkOyAvLyBQdXQgdGFyZ2V0IHBheWxvYWQgdG8gdGhlIGZpcnN0LlxyXG4vLyAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgIGlmIChlbGVtZW50c1tpXSAhPT0gcGF5bG9hZCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgbmV3TGluZVtpbmRleCsrXSA9IGVsZW1lbnRzW2ldO1xyXG4vLyAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgIHJldHVybiBuZXdMaW5lLmpvaW4oJyAnKTtcclxuLy8gICAgICAgIH1cclxuXHJcbi8vIFN0cmlwIENOIGZyb20gc2RwIGJlZm9yZSBDTiBjb25zdHJhaW50cyBpcyByZWFkeS5cclxuLy8gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUNOKHNkcExpbmVzLCBtTGluZUluZGV4KSB7XHJcbi8vICAgICAgICAgICAgdmFyIG1MaW5lRWxlbWVudHMgPSBzZHBMaW5lc1ttTGluZUluZGV4XS5zcGxpdCgnICcpO1xyXG4vLyAgICAgICAgICAgIC8vIFNjYW4gZnJvbSBlbmQgZm9yIHRoZSBjb252ZW5pZW5jZSBvZiByZW1vdmluZyBhbiBpdGVtLlxyXG4vLyAgICAgICAgICAgIGZvciAodmFyIGkgPSBzZHBMaW5lcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4vLyAgICAgICAgICAgICAgICB2YXIgcGF5bG9hZCA9IGV4dHJhY3RTZHAoc2RwTGluZXNbaV0sIC9hPXJ0cG1hcDooXFxkKykgQ05cXC9cXGQrL2kpO1xyXG4vLyAgICAgICAgICAgICAgICBpZiAocGF5bG9hZCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgdmFyIGNuUG9zID0gbUxpbmVFbGVtZW50cy5pbmRleE9mKHBheWxvYWQpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgaWYgKGNuUG9zICE9PSAtMSkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBDTiBwYXlsb2FkIGZyb20gbSBsaW5lLlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIG1MaW5lRWxlbWVudHMuc3BsaWNlKGNuUG9zLCAxKTtcclxuLy8gICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBDTiBsaW5lIGluIHNkcFxyXG4vLyAgICAgICAgICAgICAgICAgICAgc2RwTGluZXMuc3BsaWNlKGksIDEpO1xyXG4vLyAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgIHNkcExpbmVzW21MaW5lSW5kZXhdID0gbUxpbmVFbGVtZW50cy5qb2luKCcgJyk7XHJcbi8vICAgICAgICAgICAgcmV0dXJuIHNkcExpbmVzO1xyXG4vLyAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cInZpZGVvc1wiPlxyXG4gICAgICAgICAgICAgICAgPHZpZGVvIGlkPVwibG9jYWxWaWRlb1wiIGF1dG9QbGF5IG11dGVkPjwvdmlkZW8+XHJcbiAgICAgICAgICAgICAgICA8dmlkZW8gaWQ9XCJyZW1vdGVWaWRlb1wiIGF1dG9QbGF5PjwvdmlkZW8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZGVvQ2hhdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9HYW1lL1ZpZGVvQ2hhdC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRnJpZW5kU2VhcmNoIGZyb20gJy4vRnJpZW5kU2VhcmNoLmpzeCdcclxuXHJcbmNsYXNzIExvYmJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICB7XHJcbiAgICAgICAgICAgIHJvb21zOiB7fSxcclxuICAgICAgICAgICAgcm9vbU5hbWVzOiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnQgZGlkIG1vdW50XCIpO1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcclxuICAgICAgICBzb2NrZXQub24oXCJyZWNlaXZlUm9vbXNcIiwgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNVUlJFTlQgREFUQTpcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVtrZXldID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vdGhpcyBtaWdodCBiZSBoYWNreS0gY2hlY2sgd2h5IHRoZSBzZXJ2ZXIgaXMgc3RvcmluZyBhIG51bGwgdmFsdWVcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhW2tleV0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhW3VuZGVmaW5lZF07XHJcbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcm9vbXM6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICByb29tTmFtZXM6IE9iamVjdC5rZXlzKGRhdGEpXHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvL2NvbnRleHQuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNvY2tldC5lbWl0KFwiZ2V0Um9vbXNcIik7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGcmllbmRTZWFyY2gvPlxyXG4gICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlJvb21uYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TnVtYmVyIG9mIFBsYXllcnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJvb21OYW1lcy5tYXAoKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD57a2V5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUucm9vbXNba2V5XX0vMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMb2JieVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9HYW1lL0xvYmJ5LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY2xhc3MgRnJpZW5kU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZnJpZW5kOiBcIlwiLFxyXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHQ6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudXBkYXRlRnJpZW5kID0gdGhpcy51cGRhdGVGcmllbmQuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIHNlYXJjaEZvckZyaWVuZHMoZXZlbnQpIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzb2NrZXQuZW1pdChcImdldFVzZXJzXCIsIHRoaXMuc3RhdGUuZnJpZW5kKTtcclxuICAgICAgICBzb2NrZXQub24oXCJ1c2Vyc1wiLCBmdW5jdGlvbihvYmope1xyXG4gICAgICAgICAgICBpZiAob2JqLmRhdGEudXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdDogb2JqLmRhdGEudXNlcm5hbWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIm5vIHN1Y2ggdXNlciBpbiB0aGUgZGF0YWJhc2VcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUZyaWVuZChldmVudCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGZyaWVuZDogZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGFkZEZyaWVuZCAoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSBudWxsO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZnJpZW5kfSBvbkNoYW5nZT17dGhpcy51cGRhdGVGcmllbmR9IHBsYWNlaG9sZGVyPVwic2VhcmNoIGZvciBmcmllbmRzXCI+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuc2VhcmNoRm9yRnJpZW5kcy5iaW5kKHRoaXMpfT5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8aDQ+e3RoaXMuc3RhdGUuc2VhcmNoUmVzdWx0fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHQgIT09IFwiXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkRnJpZW5kfT5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBGcmllbmRTZWFyY2hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9HYW1lL0ZyaWVuZFNlYXJjaC5qc3giXSwic291cmNlUm9vdCI6IiJ9