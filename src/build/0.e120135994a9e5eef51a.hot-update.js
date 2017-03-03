webpackHotUpdate(0,{

/***/ 290:
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
	                                        { to: '/game/:rooomname', params: { roomname: _this2.state.createRoomName } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0pvaW5HYW1lLmpzeD9iZDIxIl0sIm5hbWVzIjpbIkxvYmJ5Iiwic3RhdGUiLCJyb29tcyIsInJvb21OYW1lcyIsImxldmVscyIsInVzZXJzIiwiam9pblJvb21CdXR0b24iLCJiaW5kIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJzb2NrZXQiLCJvbiIsImRhdGEiLCJrZXkiLCJ1bmRlZmluZWQiLCJzZXRTdGF0ZSIsIk9iamVjdCIsImtleXMiLCJlbWl0Iiwicm9vbSIsIndpbmRvdyIsIm1hcCIsInJvb21uYW1lIiwiY3JlYXRlUm9vbU5hbWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7S0FFTUEsSzs7O0FBQ0Ysc0JBQWM7QUFBQTs7QUFBQTs7QUFFVixlQUFLQyxLQUFMLEdBQWM7QUFDVkMsb0JBQU8sRUFERztBQUVWQyx3QkFBVyxFQUZEO0FBR1ZDLHFCQUFRLEVBSEU7QUFJVkMsb0JBQU87QUFKRyxVQUFkO0FBTUgsZUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQVJhO0FBU2I7Ozs7NkNBRW1CO0FBQ2hCLGlCQUFJQyxVQUFVLElBQWQ7QUFDQUMscUJBQVFDLEdBQVIsQ0FBWSxpQ0FBWjtBQUNDQyxvQkFBT0MsRUFBUCxDQUFVLGNBQVYsRUFBMEIsVUFBU0MsSUFBVCxFQUFlO0FBQ3BDSix5QkFBUUMsR0FBUixDQUFZLGVBQVosRUFBNkJHLElBQTdCO0FBQ0Ysc0JBQUssSUFBSUMsR0FBVCxJQUFnQkQsS0FBS1gsS0FBckIsRUFBNEI7QUFDeEIseUJBQUlXLEtBQUtYLEtBQUwsQ0FBV1ksR0FBWCxNQUFvQixDQUF4QixFQUEyQjtBQUN2QixnQ0FBT0QsS0FBS1gsS0FBTCxDQUFXWSxHQUFYLENBQVA7QUFDSDtBQUNEO0FBQ0EseUJBQUlELEtBQUtYLEtBQUwsQ0FBV1ksR0FBWCxNQUFvQixJQUF4QixFQUE4QjtBQUMxQixnQ0FBT0QsS0FBS1gsS0FBTCxDQUFXWSxHQUFYLENBQVA7QUFDSDtBQUNKO0FBQ0Qsd0JBQU9ELEtBQUtYLEtBQUwsQ0FBV2EsU0FBWCxDQUFQOztBQUVBLHNCQUFJLElBQUlELEdBQVIsSUFBZUQsS0FBS1QsTUFBcEIsRUFBNEI7QUFDeEIseUJBQUdTLEtBQUtULE1BQUwsQ0FBWVUsR0FBWixLQUFvQixDQUF2QixFQUEwQjtBQUN0QkQsOEJBQUtULE1BQUwsQ0FBWVUsR0FBWixJQUFtQixNQUFuQjtBQUNIO0FBQ0QseUJBQUdELEtBQUtULE1BQUwsQ0FBWVUsR0FBWixLQUFvQixDQUF2QixFQUEwQjtBQUN0QkQsOEJBQUtULE1BQUwsQ0FBWVUsR0FBWixJQUFtQixRQUFuQjtBQUNIO0FBQ0QseUJBQUdELEtBQUtULE1BQUwsQ0FBWVUsR0FBWixLQUFvQixDQUF2QixFQUEwQjtBQUN0QkQsOEJBQUtULE1BQUwsQ0FBWVUsR0FBWixJQUFtQixNQUFuQjtBQUNIO0FBQ0o7O0FBRUROLHlCQUFRUSxRQUFSLENBQWlCO0FBQ2JkLDRCQUFPVyxLQUFLWCxLQURDO0FBRWJDLGdDQUFXYyxPQUFPQyxJQUFQLENBQVlMLEtBQUtYLEtBQWpCLENBRkU7QUFHYkUsNkJBQVFTLEtBQUtULE1BSEE7QUFJYkMsNEJBQU9RLEtBQUtSO0FBSkMsa0JBQWpCO0FBTUYsY0EvQkQ7QUFnQ0RNLG9CQUFPUSxJQUFQLENBQVksYUFBWjtBQUNIOzs7d0NBR2NDLEksRUFBTTtBQUNoQkMsb0JBQU9WLE1BQVAsQ0FBY1EsSUFBZCxDQUFtQixVQUFuQixFQUErQkMsSUFBL0I7QUFDSjs7O2tDQUVRO0FBQUE7O0FBQ0wsb0JBQ0k7QUFBQTtBQUFBLG1CQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUFBO0FBQUEsdUJBQU8sV0FBVSxZQUFqQjtBQUNJO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSwrQkFBSSxXQUFVLGNBQWQ7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkosMEJBREE7QUFPQyw4QkFBS25CLEtBQUwsQ0FBV0UsU0FBWCxDQUFxQm1CLEdBQXJCLENBQXlCLFVBQUNSLEdBQUQsRUFBUztBQUMvQkwscUNBQVFDLEdBQVIsQ0FBWUksR0FBWjtBQUNKLG9DQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFLQTtBQUFMLGtDQURBO0FBRUE7QUFBQTtBQUFBO0FBQUssNENBQUtiLEtBQUwsQ0FBV0ksS0FBWCxDQUFpQlMsR0FBakI7QUFBTCxrQ0FGQTtBQUdBO0FBQUE7QUFBQTtBQUFLLDRDQUFLYixLQUFMLENBQVdHLE1BQVgsQ0FBa0JVLEdBQWxCO0FBQUwsa0NBSEE7QUFJQyx3Q0FBS2IsS0FBTCxDQUFXQyxLQUFYLENBQWlCWSxHQUFqQixNQUEwQixDQUExQixHQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUE5QixHQUFtRDtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsMkNBQU0sSUFBRyxrQkFBVCxFQUE0QixRQUFRLEVBQUNTLFVBQVUsT0FBS3RCLEtBQUwsQ0FBV3VCLGNBQXRCLEVBQXBDO0FBQTJFO0FBQUE7QUFBQSwrQ0FBUSxTQUFTLE9BQUtsQixjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixFQUErQk8sR0FBL0IsQ0FBakI7QUFBQTtBQUFBO0FBQTNFO0FBQUo7QUFKcEQsOEJBREE7QUFRSCwwQkFWSTtBQVBEO0FBREo7QUFESixjQURKO0FBeUJIOzs7O0dBakZlLGdCQUFNVyxTOzttQkFvRlh6QixLIiwiZmlsZSI6IjAuZTEyMDEzNTk5NGE5ZTVlZWY1MWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY2xhc3MgTG9iYnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0gIHtcbiAgICAgICAgICAgIHJvb21zOiB7fSxcbiAgICAgICAgICAgIHJvb21OYW1lczogW10sXG4gICAgICAgICAgICBsZXZlbHM6IHt9LFxuICAgICAgICAgICAgdXNlcnM6IHt9XG4gICAgICAgIH1cbiAgICAgdGhpcy5qb2luUm9vbUJ1dHRvbiA9IHRoaXMuam9pblJvb21CdXR0b24uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudCBkaWQgbW91bnQgaW4gam9pbkdhbWVcIik7XG4gICAgICAgICBzb2NrZXQub24oXCJyZWNlaXZlUm9vbXNcIiwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNVUlJFTlQgREFUQTpcIiwgZGF0YSk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YS5yb29tcykge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJvb21zW2tleV0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGEucm9vbXNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy90aGlzIG1pZ2h0IGJlIGhhY2t5LSBjaGVjayB3aHkgdGhlIHNlcnZlciBpcyBzdG9yaW5nIGEgbnVsbCB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJvb21zW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGEucm9vbXNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgZGF0YS5yb29tc1t1bmRlZmluZWRdXG5cbiAgICAgICAgICAgIGZvcih2YXIga2V5IGluIGRhdGEubGV2ZWxzKSB7XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5sZXZlbHNba2V5XSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEubGV2ZWxzW2tleV0gPSAnRWFzeSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGRhdGEubGV2ZWxzW2tleV0gPT0gMikge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmxldmVsc1trZXldID0gJ05vcm1hbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGRhdGEubGV2ZWxzW2tleV0gPT0gMykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmxldmVsc1trZXldID0gJ0hhcmQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcm9vbXM6IGRhdGEucm9vbXMsXG4gICAgICAgICAgICAgICAgcm9vbU5hbWVzOiBPYmplY3Qua2V5cyhkYXRhLnJvb21zKSxcbiAgICAgICAgICAgICAgICBsZXZlbHM6IGRhdGEubGV2ZWxzLFxuICAgICAgICAgICAgICAgIHVzZXJzOiBkYXRhLnVzZXJzXG4gICAgICAgICAgICAgfSlcbiAgICAgICAgIH0pO1xuICAgICAgICBzb2NrZXQuZW1pdChcImdldFJvb21JbmZvXCIpO1xuICAgIH1cblxuXG4gICAgam9pblJvb21CdXR0b24ocm9vbSkge1xuICAgICAgICAgd2luZG93LnNvY2tldC5lbWl0KCdqb2luUm9vbScsIHJvb20pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGFibGVDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiTG9iYnlUYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJMb2JieUhlYWRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Sb29tPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Vc2VyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5MZXZlbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Sm9pbjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJvb21OYW1lcy5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2tleX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUudXNlcnNba2V5XX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUubGV2ZWxzW2tleV19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucm9vbXNba2V5XSA9PT0gMiA/IDx0ZD5Sb29tIEZ1bGw8L3RkPiA6IDx0ZD48TGluayB0bz1cIi9nYW1lLzpyb29vbW5hbWVcIiBwYXJhbXM9e3tyb29tbmFtZTogdGhpcy5zdGF0ZS5jcmVhdGVSb29tTmFtZX19PjxidXR0b24gb25DbGljaz17dGhpcy5qb2luUm9vbUJ1dHRvbi5iaW5kKG51bGwsIGtleSl9PkpvaW4gUm9vbTwvYnV0dG9uPjwvTGluaz48L3RkPiB9XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2JieVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9Kb2luR2FtZS5qc3giXSwic291cmNlUm9vdCI6IiJ9