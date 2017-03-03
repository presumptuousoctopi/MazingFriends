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
	        _this.numberToLevel = _this.numberToLevel.bind(_this);
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
	                    return levels;
	                }
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0pvaW5HYW1lLmpzeD9iZDIxIl0sIm5hbWVzIjpbIkxvYmJ5Iiwic3RhdGUiLCJyb29tcyIsInJvb21OYW1lcyIsImxldmVscyIsInVzZXJzIiwiam9pblJvb21CdXR0b24iLCJiaW5kIiwibnVtYmVyVG9MZXZlbCIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwic29ja2V0Iiwib24iLCJkYXRhIiwia2V5IiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJPYmplY3QiLCJrZXlzIiwiZW1pdCIsInJvb20iLCJ3aW5kb3ciLCJtYXAiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7S0FFTUEsSzs7O0FBQ0Ysc0JBQWM7QUFBQTs7QUFBQTs7QUFFVixlQUFLQyxLQUFMLEdBQWM7QUFDVkMsb0JBQU8sRUFERztBQUVWQyx3QkFBVyxFQUZEO0FBR1ZDLHFCQUFRLEVBSEU7QUFJVkMsb0JBQU87QUFKRyxVQUFkO0FBTUgsZUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLGVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIsT0FBckI7QUFUYTtBQVViOzs7OzZDQUVtQjtBQUNoQixpQkFBSUUsVUFBVSxJQUFkO0FBQ0FDLHFCQUFRQyxHQUFSLENBQVksaUNBQVo7QUFDQ0Msb0JBQU9DLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFVBQVNDLElBQVQsRUFBZTtBQUNwQ0oseUJBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCRyxJQUE3QjtBQUNGLHNCQUFLLElBQUlDLEdBQVQsSUFBZ0JELEtBQUtaLEtBQXJCLEVBQTRCO0FBQ3hCLHlCQUFJWSxLQUFLWixLQUFMLENBQVdhLEdBQVgsTUFBb0IsQ0FBeEIsRUFBMkI7QUFDdkIsZ0NBQU9ELEtBQUtaLEtBQUwsQ0FBV2EsR0FBWCxDQUFQO0FBQ0g7QUFDRDtBQUNBLHlCQUFJRCxLQUFLWixLQUFMLENBQVdhLEdBQVgsTUFBb0IsSUFBeEIsRUFBOEI7QUFDMUIsZ0NBQU9ELEtBQUtaLEtBQUwsQ0FBV2EsR0FBWCxDQUFQO0FBQ0g7QUFDSjtBQUNELHdCQUFPRCxLQUFLWixLQUFMLENBQVdjLFNBQVgsQ0FBUDs7QUFFQSxzQkFBSSxJQUFJRCxHQUFSLElBQWVYLE1BQWYsRUFBdUI7QUFDbkIseUJBQUdBLE9BQU9XLEdBQVAsTUFBZ0IsQ0FBbkIsRUFBc0I7QUFDbEJYLGdDQUFPVyxHQUFQLE1BQWdCLE1BQWhCO0FBQ0g7QUFDRCx5QkFBR1gsT0FBT1csR0FBUCxNQUFnQixDQUFuQixFQUFzQjtBQUNsQlgsZ0NBQU9XLEdBQVAsTUFBZ0IsUUFBaEI7QUFDSDtBQUNELHlCQUFHWCxPQUFPVyxHQUFQLE1BQWdCLENBQW5CLEVBQXNCO0FBQ2xCWCxnQ0FBT1csR0FBUCxNQUFnQixNQUFoQjtBQUNIO0FBQ0QsNEJBQU9YLE1BQVA7QUFDSDs7QUFFREsseUJBQVFRLFFBQVIsQ0FBaUI7QUFDYmYsNEJBQU9ZLEtBQUtaLEtBREM7QUFFYkMsZ0NBQVdlLE9BQU9DLElBQVAsQ0FBWUwsS0FBS1osS0FBakIsQ0FGRTtBQUdiRSw2QkFBUSxLQUFLSSxhQUFMLENBQW1CTSxLQUFLVixNQUF4QixDQUhLO0FBSWJDLDRCQUFPUyxLQUFLVDtBQUpDLGtCQUFqQjtBQU1GLGNBaENEO0FBaUNETyxvQkFBT1EsSUFBUCxDQUFZLGFBQVo7QUFDSDs7O3dDQUdjQyxJLEVBQU07QUFDaEJDLG9CQUFPVixNQUFQLENBQWNRLElBQWQsQ0FBbUIsVUFBbkIsRUFBK0JDLElBQS9CO0FBQ0o7OztrQ0FFUTtBQUFBOztBQUNMLG9CQUNJO0FBQUE7QUFBQSxtQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLHVCQUFPLFdBQVUsWUFBakI7QUFDSTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkosMEJBREE7QUFPQyw4QkFBS3BCLEtBQUwsQ0FBV0UsU0FBWCxDQUFxQm9CLEdBQXJCLENBQXlCLFVBQUNSLEdBQUQsRUFBUztBQUMvQkwscUNBQVFDLEdBQVIsQ0FBWUksR0FBWjtBQUNKLG9DQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFLQTtBQUFMLGtDQURBO0FBRUE7QUFBQTtBQUFBO0FBQUssNENBQUtkLEtBQUwsQ0FBV0ksS0FBWCxDQUFpQlUsR0FBakI7QUFBTCxrQ0FGQTtBQUdBO0FBQUE7QUFBQTtBQUFLLDRDQUFLZCxLQUFMLENBQVdHLE1BQVgsQ0FBa0JXLEdBQWxCO0FBQUwsa0NBSEE7QUFJQyx3Q0FBS2QsS0FBTCxDQUFXQyxLQUFYLENBQWlCYSxHQUFqQixNQUEwQixDQUExQixHQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUE5QixHQUFtRDtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsMkNBQU0sSUFBRyxPQUFUO0FBQWlCO0FBQUE7QUFBQSwrQ0FBUSxTQUFTLE9BQUtULGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLEVBQStCUSxHQUEvQixDQUFqQjtBQUFBO0FBQUE7QUFBakI7QUFBSjtBQUpwRCw4QkFEQTtBQVFILDBCQVZJO0FBUEQ7QUFESjtBQURKLGNBREo7QUF5Qkg7Ozs7R0FuRmUsZ0JBQU1TLFM7O21CQXNGWHhCLEsiLCJmaWxlIjoiMC44MjRkZTFlMTA4ODEyMmY5ZmJiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jbGFzcyBMb2JieSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAge1xuICAgICAgICAgICAgcm9vbXM6IHt9LFxuICAgICAgICAgICAgcm9vbU5hbWVzOiBbXSxcbiAgICAgICAgICAgIGxldmVsczoge30sXG4gICAgICAgICAgICB1c2Vyczoge31cbiAgICAgICAgfVxuICAgICB0aGlzLmpvaW5Sb29tQnV0dG9uID0gdGhpcy5qb2luUm9vbUJ1dHRvbi5iaW5kKHRoaXMpO1xuICAgICB0aGlzLm51bWJlclRvTGV2ZWwgPSB0aGlzLm51bWJlclRvTGV2ZWwuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudCBkaWQgbW91bnQgaW4gam9pbkdhbWVcIik7XG4gICAgICAgICBzb2NrZXQub24oXCJyZWNlaXZlUm9vbXNcIiwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNVUlJFTlQgREFUQTpcIiwgZGF0YSk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YS5yb29tcykge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJvb21zW2tleV0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGEucm9vbXNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy90aGlzIG1pZ2h0IGJlIGhhY2t5LSBjaGVjayB3aHkgdGhlIHNlcnZlciBpcyBzdG9yaW5nIGEgbnVsbCB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJvb21zW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGEucm9vbXNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgZGF0YS5yb29tc1t1bmRlZmluZWRdXG5cbiAgICAgICAgICAgIGZvcih2YXIga2V5IGluIGxldmVscykge1xuICAgICAgICAgICAgICAgIGlmKGxldmVsc1trZXldID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsc1trZXldID09PSAnRWFzeSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGxldmVsc1trZXldID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldmVsc1trZXldID09PSAnTm9ybWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYobGV2ZWxzW2tleV0gPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWxzW2tleV0gPT09ICdIYXJkJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxldmVscztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcm9vbXM6IGRhdGEucm9vbXMsXG4gICAgICAgICAgICAgICAgcm9vbU5hbWVzOiBPYmplY3Qua2V5cyhkYXRhLnJvb21zKSxcbiAgICAgICAgICAgICAgICBsZXZlbHM6IHRoaXMubnVtYmVyVG9MZXZlbChkYXRhLmxldmVscyksXG4gICAgICAgICAgICAgICAgdXNlcnM6IGRhdGEudXNlcnNcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgfSk7XG4gICAgICAgIHNvY2tldC5lbWl0KFwiZ2V0Um9vbUluZm9cIik7XG4gICAgfVxuXG5cbiAgICBqb2luUm9vbUJ1dHRvbihyb29tKSB7XG4gICAgICAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ2pvaW5Sb29tJywgcm9vbSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUYWJsZUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJMb2JieVRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlJvb208L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlVzZXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkxldmVsPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Kb2luPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucm9vbU5hbWVzLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57a2V5fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS51c2Vyc1trZXldfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5sZXZlbHNba2V5XX08L3RkPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yb29tc1trZXldID09PSAyID8gPHRkPlJvb20gRnVsbDwvdGQ+IDogPHRkPjxMaW5rIHRvPVwiL2dhbWVcIj48YnV0dG9uIG9uQ2xpY2s9e3RoaXMuam9pblJvb21CdXR0b24uYmluZChudWxsLCBrZXkpfT5Kb2luIFJvb208L2J1dHRvbj48L0xpbms+PC90ZD4gfVxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9iYnlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvSm9pbkdhbWUuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==