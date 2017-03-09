webpackHotUpdate(0,{

/***/ 572:
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
	
	var Lobby = function (_React$Component) {
	    _inherits(Lobby, _React$Component);
	
	    function Lobby() {
	        _classCallCheck(this, Lobby);
	
	        var _this = _possibleConstructorReturn(this, (Lobby.__proto__ || Object.getPrototypeOf(Lobby)).call(this));
	
	        _this.state = {
	            rooms: {},
	            roomNames: [],
	            levels: {},
	            users: {}
	        };
	        _this.joinRoomButton = _this.joinRoomButton.bind(_this);
	        return _this;
	    }
	
	    _createClass(Lobby, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var context = this;
	            console.log("component did mount in joinGame");
	            socket.on("receiveRooms", function (data) {
	                console.log("CURRENT DATA:", data);
	                for (var key in data.rooms) {
	                    if (data.rooms[key] === 0) {
	                        delete data.rooms[key];
	                    }
	                    //this might be hacky- check why the server is storing a null value
	                    if (data.rooms[key] === null) {
	                        delete data.rooms[key];
	                    }
	                }
	                delete data.rooms[undefined];
	
	                for (var key in data.levels) {
	                    if (data.levels[key] == 1) {
	                        data.levels[key] = 'Easy';
	                    }
	                    if (data.levels[key] == 2) {
	                        data.levels[key] = 'Normal';
	                    }
	                    if (data.levels[key] == 3) {
	                        data.levels[key] = 'Hard';
	                    }
	                }
	
	                context.setState({
	                    rooms: data.rooms,
	                    roomNames: Object.keys(data.rooms),
	                    levels: data.levels,
	                    users: data.users
	                });
	            });
	            socket.emit("getRoomInfo");
	        }
	    }, {
	        key: 'joinRoomButton',
	        value: function joinRoomButton(room) {
	            window.socket.emit('joinRoom', room);
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
	                        'tbody',
	                        null,
	                        _react2.default.createElement(
	                            'tr',
	                            { className: 'LobbyHeaders' },
	                            _react2.default.createElement(
	                                'td',
	                                null,
	                                'Room'
	                            ),
	                            _react2.default.createElement(
	                                'td',
	                                null,
	                                'User'
	                            ),
	                            _react2.default.createElement(
	                                'td',
	                                null,
	                                'Level'
	                            ),
	                            _react2.default.createElement(
	                                'td',
	                                null,
	                                'Join'
	                            )
	                        ),
	                        this.state.roomNames.map(function (key) {
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
	                                    _this2.state.users[key]
	                                ),
	                                _react2.default.createElement(
	                                    'td',
	                                    null,
	                                    _this2.state.levels[key]
	                                ),
	                                _this2.state.rooms[key] === 2 ? _react2.default.createElement(
	                                    'td',
	                                    null,
	                                    'Room Full'
	                                ) : _react2.default.createElement(
	                                    'td',
	                                    null,
	                                    _react2.default.createElement(
	                                        _reactRouter.Link,
	                                        { className: 'Link', to: "/game/" + key },
	                                        _react2.default.createElement(
	                                            'button',
	                                            { className: 'joinButton', onClick: _this2.joinRoomButton.bind(null, key) },
	                                            'Join Room'
	                                        )
	                                    )
	                                )
	                            );
	                        })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Lobby;
	}(_react2.default.Component);
	
	exports.default = Lobby;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "JoinGame.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0pvaW5HYW1lLmpzeD9iZDIxIl0sIm5hbWVzIjpbIkxvYmJ5Iiwic3RhdGUiLCJyb29tcyIsInJvb21OYW1lcyIsImxldmVscyIsInVzZXJzIiwiam9pblJvb21CdXR0b24iLCJiaW5kIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJzb2NrZXQiLCJvbiIsImRhdGEiLCJrZXkiLCJ1bmRlZmluZWQiLCJzZXRTdGF0ZSIsIk9iamVjdCIsImtleXMiLCJlbWl0Iiwicm9vbSIsIndpbmRvdyIsIm1hcCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztLQUVNQSxLOzs7QUFDRixzQkFBYztBQUFBOztBQUFBOztBQUVWLGVBQUtDLEtBQUwsR0FBYztBQUNWQyxvQkFBTyxFQURHO0FBRVZDLHdCQUFXLEVBRkQ7QUFHVkMscUJBQVEsRUFIRTtBQUlWQyxvQkFBTztBQUpHLFVBQWQ7QUFNSCxlQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBUmE7QUFTYjs7Ozs2Q0FFbUI7QUFDaEIsaUJBQUlDLFVBQVUsSUFBZDtBQUNBQyxxQkFBUUMsR0FBUixDQUFZLGlDQUFaO0FBQ0NDLG9CQUFPQyxFQUFQLENBQVUsY0FBVixFQUEwQixVQUFTQyxJQUFULEVBQWU7QUFDcENKLHlCQUFRQyxHQUFSLENBQVksZUFBWixFQUE2QkcsSUFBN0I7QUFDRixzQkFBSyxJQUFJQyxHQUFULElBQWdCRCxLQUFLWCxLQUFyQixFQUE0QjtBQUN4Qix5QkFBSVcsS0FBS1gsS0FBTCxDQUFXWSxHQUFYLE1BQW9CLENBQXhCLEVBQTJCO0FBQ3ZCLGdDQUFPRCxLQUFLWCxLQUFMLENBQVdZLEdBQVgsQ0FBUDtBQUNIO0FBQ0Q7QUFDQSx5QkFBSUQsS0FBS1gsS0FBTCxDQUFXWSxHQUFYLE1BQW9CLElBQXhCLEVBQThCO0FBQzFCLGdDQUFPRCxLQUFLWCxLQUFMLENBQVdZLEdBQVgsQ0FBUDtBQUNIO0FBQ0o7QUFDRCx3QkFBT0QsS0FBS1gsS0FBTCxDQUFXYSxTQUFYLENBQVA7O0FBRUEsc0JBQUksSUFBSUQsR0FBUixJQUFlRCxLQUFLVCxNQUFwQixFQUE0QjtBQUN4Qix5QkFBR1MsS0FBS1QsTUFBTCxDQUFZVSxHQUFaLEtBQW9CLENBQXZCLEVBQTBCO0FBQ3RCRCw4QkFBS1QsTUFBTCxDQUFZVSxHQUFaLElBQW1CLE1BQW5CO0FBQ0g7QUFDRCx5QkFBR0QsS0FBS1QsTUFBTCxDQUFZVSxHQUFaLEtBQW9CLENBQXZCLEVBQTBCO0FBQ3RCRCw4QkFBS1QsTUFBTCxDQUFZVSxHQUFaLElBQW1CLFFBQW5CO0FBQ0g7QUFDRCx5QkFBR0QsS0FBS1QsTUFBTCxDQUFZVSxHQUFaLEtBQW9CLENBQXZCLEVBQTBCO0FBQ3RCRCw4QkFBS1QsTUFBTCxDQUFZVSxHQUFaLElBQW1CLE1BQW5CO0FBQ0g7QUFDSjs7QUFFRE4seUJBQVFRLFFBQVIsQ0FBaUI7QUFDYmQsNEJBQU9XLEtBQUtYLEtBREM7QUFFYkMsZ0NBQVdjLE9BQU9DLElBQVAsQ0FBWUwsS0FBS1gsS0FBakIsQ0FGRTtBQUdiRSw2QkFBUVMsS0FBS1QsTUFIQTtBQUliQyw0QkFBT1EsS0FBS1I7QUFKQyxrQkFBakI7QUFNRixjQS9CRDtBQWdDRE0sb0JBQU9RLElBQVAsQ0FBWSxhQUFaO0FBQ0g7Ozt3Q0FHY0MsSSxFQUFNO0FBQ2hCQyxvQkFBT1YsTUFBUCxDQUFjUSxJQUFkLENBQW1CLFVBQW5CLEVBQStCQyxJQUEvQjtBQUNKOzs7a0NBRVE7QUFBQTs7QUFDTCxvQkFDSTtBQUFBO0FBQUEsbUJBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQSx1QkFBTyxXQUFVLFlBQWpCO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLCtCQUFJLFdBQVUsY0FBZDtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSiwwQkFESjtBQU9LLDhCQUFLbkIsS0FBTCxDQUFXRSxTQUFYLENBQXFCbUIsR0FBckIsQ0FBeUIsVUFBQ1IsR0FBRCxFQUFTO0FBQy9CTCxxQ0FBUUMsR0FBUixDQUFZSSxHQUFaO0FBQ0osb0NBQ0E7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUtBO0FBQUwsa0NBREo7QUFFSTtBQUFBO0FBQUE7QUFBSyw0Q0FBS2IsS0FBTCxDQUFXSSxLQUFYLENBQWlCUyxHQUFqQjtBQUFMLGtDQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUssNENBQUtiLEtBQUwsQ0FBV0csTUFBWCxDQUFrQlUsR0FBbEI7QUFBTCxrQ0FISjtBQUlLLHdDQUFLYixLQUFMLENBQVdDLEtBQVgsQ0FBaUJZLEdBQWpCLE1BQTBCLENBQTFCLEdBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQTlCLEdBQ0Q7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLDJDQUFNLFdBQVUsTUFBaEIsRUFBdUIsSUFBSSxXQUFXQSxHQUF0QztBQUNKO0FBQUE7QUFBQSwrQ0FBUSxXQUFVLFlBQWxCLEVBQStCLFNBQVMsT0FBS1IsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsRUFBK0JPLEdBQS9CLENBQXhDO0FBQUE7QUFBQTtBQURJO0FBQUo7QUFMSiw4QkFEQTtBQVdDLDBCQWJBO0FBUEw7QUFESjtBQURKLGNBREo7QUE0Qkg7Ozs7R0FwRmUsZ0JBQU1TLFM7O21CQXVGWHZCLEsiLCJmaWxlIjoiMC5hOTE3ODNiMWUwMmQ1YTI1YmRmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jbGFzcyBMb2JieSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAge1xuICAgICAgICAgICAgcm9vbXM6IHt9LFxuICAgICAgICAgICAgcm9vbU5hbWVzOiBbXSxcbiAgICAgICAgICAgIGxldmVsczoge30sXG4gICAgICAgICAgICB1c2Vyczoge31cbiAgICAgICAgfVxuICAgICB0aGlzLmpvaW5Sb29tQnV0dG9uID0gdGhpcy5qb2luUm9vbUJ1dHRvbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IGRpZCBtb3VudCBpbiBqb2luR2FtZVwiKTtcbiAgICAgICAgIHNvY2tldC5vbihcInJlY2VpdmVSb29tc1wiLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1VSUkVOVCBEQVRBOlwiLCBkYXRhKTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhLnJvb21zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucm9vbXNba2V5XSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGF0YS5yb29tc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3RoaXMgbWlnaHQgYmUgaGFja3ktIGNoZWNrIHdoeSB0aGUgc2VydmVyIGlzIHN0b3JpbmcgYSBudWxsIHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucm9vbXNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGF0YS5yb29tc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhLnJvb21zW3VuZGVmaW5lZF1cblxuICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gZGF0YS5sZXZlbHMpIHtcbiAgICAgICAgICAgICAgICBpZihkYXRhLmxldmVsc1trZXldID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5sZXZlbHNba2V5XSA9ICdFYXN5JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5sZXZlbHNba2V5XSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEubGV2ZWxzW2tleV0gPSAnTm9ybWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5sZXZlbHNba2V5XSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEubGV2ZWxzW2tleV0gPSAnSGFyZCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICByb29tczogZGF0YS5yb29tcyxcbiAgICAgICAgICAgICAgICByb29tTmFtZXM6IE9iamVjdC5rZXlzKGRhdGEucm9vbXMpLFxuICAgICAgICAgICAgICAgIGxldmVsczogZGF0YS5sZXZlbHMsXG4gICAgICAgICAgICAgICAgdXNlcnM6IGRhdGEudXNlcnNcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgfSk7XG4gICAgICAgIHNvY2tldC5lbWl0KFwiZ2V0Um9vbUluZm9cIik7XG4gICAgfVxuXG5cbiAgICBqb2luUm9vbUJ1dHRvbihyb29tKSB7XG4gICAgICAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ2pvaW5Sb29tJywgcm9vbSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUYWJsZUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJMb2JieVRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJMb2JieUhlYWRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Um9vbTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlVzZXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5MZXZlbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkpvaW48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJvb21OYW1lcy5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57a2V5fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLnVzZXJzW2tleV19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUubGV2ZWxzW2tleV19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yb29tc1trZXldID09PSAyID8gPHRkPlJvb20gRnVsbDwvdGQ+IDogXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxMaW5rIGNsYXNzTmFtZT1cIkxpbmtcIiB0bz17XCIvZ2FtZS9cIiArIGtleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJqb2luQnV0dG9uXCIgb25DbGljaz17dGhpcy5qb2luUm9vbUJ1dHRvbi5iaW5kKG51bGwsIGtleSl9PkpvaW4gUm9vbTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz48L3RkPiB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9iYnlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvSm9pbkdhbWUuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==