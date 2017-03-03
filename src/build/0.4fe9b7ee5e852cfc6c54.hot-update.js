webpackHotUpdate(0,{

/***/ 289:
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
	                context.setState({
	                    rooms: data.rooms,
	                    roomNames: Object.keys(data.rooms),
	                    levels: this.numberToLevel(data.levels),
	                    users: data.users
	                });
	            });
	            socket.emit("getRoomInfo");
	        }
	    }, {
	        key: 'numberToLevel',
	        value: function numberToLevel(levels) {
	            for (var key in levels) {
	                if (levels[key] === 1) {
	                    levels[key] === 'Easy';
	                }
	                if (levels[key] === 2) {
	                    levels[key] === 'Normal';
	                }
	                if (levels[key] === 3) {
	                    levels[key] === 'Hard';
	                }
	            }
	            return levels;
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
	                            null,
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
	                                        { to: '/game' },
	                                        _react2.default.createElement(
	                                            'button',
	                                            { onClick: _this2.joinRoomButton.bind(null, key) },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0pvaW5HYW1lLmpzeD9iZDIxIl0sIm5hbWVzIjpbIkxvYmJ5Iiwic3RhdGUiLCJyb29tcyIsInJvb21OYW1lcyIsImxldmVscyIsInVzZXJzIiwiam9pblJvb21CdXR0b24iLCJiaW5kIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJzb2NrZXQiLCJvbiIsImRhdGEiLCJrZXkiLCJ1bmRlZmluZWQiLCJzZXRTdGF0ZSIsIk9iamVjdCIsImtleXMiLCJudW1iZXJUb0xldmVsIiwiZW1pdCIsInJvb20iLCJ3aW5kb3ciLCJtYXAiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7S0FFTUEsSzs7O0FBQ0Ysc0JBQWM7QUFBQTs7QUFBQTs7QUFFVixlQUFLQyxLQUFMLEdBQWM7QUFDVkMsb0JBQU8sRUFERztBQUVWQyx3QkFBVyxFQUZEO0FBR1ZDLHFCQUFRLEVBSEU7QUFJVkMsb0JBQU87QUFKRyxVQUFkO0FBTUgsZUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQVJhO0FBU2I7Ozs7NkNBRW1CO0FBQ2hCLGlCQUFJQyxVQUFVLElBQWQ7QUFDQUMscUJBQVFDLEdBQVIsQ0FBWSxpQ0FBWjtBQUNDQyxvQkFBT0MsRUFBUCxDQUFVLGNBQVYsRUFBMEIsVUFBU0MsSUFBVCxFQUFlO0FBQ3BDSix5QkFBUUMsR0FBUixDQUFZLGVBQVosRUFBNkJHLElBQTdCO0FBQ0Ysc0JBQUssSUFBSUMsR0FBVCxJQUFnQkQsS0FBS1gsS0FBckIsRUFBNEI7QUFDeEIseUJBQUlXLEtBQUtYLEtBQUwsQ0FBV1ksR0FBWCxNQUFvQixDQUF4QixFQUEyQjtBQUN2QixnQ0FBT0QsS0FBS1gsS0FBTCxDQUFXWSxHQUFYLENBQVA7QUFDSDtBQUNEO0FBQ0EseUJBQUlELEtBQUtYLEtBQUwsQ0FBV1ksR0FBWCxNQUFvQixJQUF4QixFQUE4QjtBQUMxQixnQ0FBT0QsS0FBS1gsS0FBTCxDQUFXWSxHQUFYLENBQVA7QUFDSDtBQUNKO0FBQ0Qsd0JBQU9ELEtBQUtYLEtBQUwsQ0FBV2EsU0FBWCxDQUFQO0FBQ0FQLHlCQUFRUSxRQUFSLENBQWlCO0FBQ2JkLDRCQUFPVyxLQUFLWCxLQURDO0FBRWJDLGdDQUFXYyxPQUFPQyxJQUFQLENBQVlMLEtBQUtYLEtBQWpCLENBRkU7QUFHYkUsNkJBQVEsS0FBS2UsYUFBTCxDQUFtQk4sS0FBS1QsTUFBeEIsQ0FISztBQUliQyw0QkFBT1EsS0FBS1I7QUFKQyxrQkFBakI7QUFNRixjQWxCRDtBQW1CRE0sb0JBQU9TLElBQVAsQ0FBWSxhQUFaO0FBQ0g7Ozt1Q0FFYWhCLE0sRUFBUTtBQUNsQixrQkFBSSxJQUFJVSxHQUFSLElBQWVWLE1BQWYsRUFBdUI7QUFDbkIscUJBQUdBLE9BQU9VLEdBQVAsTUFBZ0IsQ0FBbkIsRUFBc0I7QUFDbEJWLDRCQUFPVSxHQUFQLE1BQWdCLE1BQWhCO0FBQ0g7QUFDRCxxQkFBR1YsT0FBT1UsR0FBUCxNQUFnQixDQUFuQixFQUFzQjtBQUNsQlYsNEJBQU9VLEdBQVAsTUFBZ0IsUUFBaEI7QUFDSDtBQUNELHFCQUFHVixPQUFPVSxHQUFQLE1BQWdCLENBQW5CLEVBQXNCO0FBQ2xCViw0QkFBT1UsR0FBUCxNQUFnQixNQUFoQjtBQUNIO0FBQ0o7QUFDRCxvQkFBT1YsTUFBUDtBQUNIOzs7d0NBRWNpQixJLEVBQU07QUFDaEJDLG9CQUFPWCxNQUFQLENBQWNTLElBQWQsQ0FBbUIsVUFBbkIsRUFBK0JDLElBQS9CO0FBQ0o7OztrQ0FFUTtBQUFBOztBQUNMLG9CQUNJO0FBQUE7QUFBQSxtQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLHVCQUFPLFdBQVUsWUFBakI7QUFDSTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkosMEJBREE7QUFPQyw4QkFBS3BCLEtBQUwsQ0FBV0UsU0FBWCxDQUFxQm9CLEdBQXJCLENBQXlCLFVBQUNULEdBQUQsRUFBUztBQUMvQkwscUNBQVFDLEdBQVIsQ0FBWUksR0FBWjtBQUNKLG9DQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFLQTtBQUFMLGtDQURBO0FBRUE7QUFBQTtBQUFBO0FBQUssNENBQUtiLEtBQUwsQ0FBV0ksS0FBWCxDQUFpQlMsR0FBakI7QUFBTCxrQ0FGQTtBQUdBO0FBQUE7QUFBQTtBQUFLLDRDQUFLYixLQUFMLENBQVdHLE1BQVgsQ0FBa0JVLEdBQWxCO0FBQUwsa0NBSEE7QUFJQyx3Q0FBS2IsS0FBTCxDQUFXQyxLQUFYLENBQWlCWSxHQUFqQixNQUEwQixDQUExQixHQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUE5QixHQUFtRDtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsMkNBQU0sSUFBRyxPQUFUO0FBQWlCO0FBQUE7QUFBQSwrQ0FBUSxTQUFTLE9BQUtSLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLEVBQStCTyxHQUEvQixDQUFqQjtBQUFBO0FBQUE7QUFBakI7QUFBSjtBQUpwRCw4QkFEQTtBQVFILDBCQVZJO0FBUEQ7QUFESjtBQURKLGNBREo7QUF5Qkg7Ozs7R0FsRmUsZ0JBQU1VLFM7O21CQXFGWHhCLEsiLCJmaWxlIjoiMC40ZmU5YjdlZTVlODUyY2ZjNmM1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jbGFzcyBMb2JieSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAge1xuICAgICAgICAgICAgcm9vbXM6IHt9LFxuICAgICAgICAgICAgcm9vbU5hbWVzOiBbXSxcbiAgICAgICAgICAgIGxldmVsczoge30sXG4gICAgICAgICAgICB1c2Vyczoge31cbiAgICAgICAgfVxuICAgICB0aGlzLmpvaW5Sb29tQnV0dG9uID0gdGhpcy5qb2luUm9vbUJ1dHRvbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IGRpZCBtb3VudCBpbiBqb2luR2FtZVwiKTtcbiAgICAgICAgIHNvY2tldC5vbihcInJlY2VpdmVSb29tc1wiLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1VSUkVOVCBEQVRBOlwiLCBkYXRhKTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhLnJvb21zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucm9vbXNba2V5XSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGF0YS5yb29tc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3RoaXMgbWlnaHQgYmUgaGFja3ktIGNoZWNrIHdoeSB0aGUgc2VydmVyIGlzIHN0b3JpbmcgYSBudWxsIHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucm9vbXNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGF0YS5yb29tc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhLnJvb21zW3VuZGVmaW5lZF1cbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHJvb21zOiBkYXRhLnJvb21zLFxuICAgICAgICAgICAgICAgIHJvb21OYW1lczogT2JqZWN0LmtleXMoZGF0YS5yb29tcyksXG4gICAgICAgICAgICAgICAgbGV2ZWxzOiB0aGlzLm51bWJlclRvTGV2ZWwoZGF0YS5sZXZlbHMpLFxuICAgICAgICAgICAgICAgIHVzZXJzOiBkYXRhLnVzZXJzXG4gICAgICAgICAgICAgfSlcbiAgICAgICAgIH0pO1xuICAgICAgICBzb2NrZXQuZW1pdChcImdldFJvb21JbmZvXCIpO1xuICAgIH1cblxuICAgIG51bWJlclRvTGV2ZWwobGV2ZWxzKSB7XG4gICAgICAgIGZvcih2YXIga2V5IGluIGxldmVscykge1xuICAgICAgICAgICAgaWYobGV2ZWxzW2tleV0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICBsZXZlbHNba2V5XSA9PT0gJ0Vhc3knXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihsZXZlbHNba2V5XSA9PT0gMikge1xuICAgICAgICAgICAgICAgIGxldmVsc1trZXldID09PSAnTm9ybWFsJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYobGV2ZWxzW2tleV0gPT09IDMpIHtcbiAgICAgICAgICAgICAgICBsZXZlbHNba2V5XSA9PT0gJ0hhcmQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxldmVsc1xuICAgIH1cblxuICAgIGpvaW5Sb29tQnV0dG9uKHJvb20pIHtcbiAgICAgICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnam9pblJvb20nLCByb29tKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRhYmxlQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIkxvYmJ5VGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Um9vbTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VXNlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TGV2ZWw8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkpvaW48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yb29tTmFtZXMubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntrZXl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLnVzZXJzW2tleV19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmxldmVsc1trZXldfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJvb21zW2tleV0gPT09IDIgPyA8dGQ+Um9vbSBGdWxsPC90ZD4gOiA8dGQ+PExpbmsgdG89XCIvZ2FtZVwiPjxidXR0b24gb25DbGljaz17dGhpcy5qb2luUm9vbUJ1dHRvbi5iaW5kKG51bGwsIGtleSl9PkpvaW4gUm9vbTwvYnV0dG9uPjwvTGluaz48L3RkPiB9XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2JieVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9Kb2luR2FtZS5qc3giXSwic291cmNlUm9vdCI6IiJ9