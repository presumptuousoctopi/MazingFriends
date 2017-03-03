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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0pvaW5HYW1lLmpzeD9iZDIxIl0sIm5hbWVzIjpbIkxvYmJ5Iiwic3RhdGUiLCJyb29tcyIsInJvb21OYW1lcyIsImxldmVscyIsInVzZXJzIiwiam9pblJvb21CdXR0b24iLCJiaW5kIiwibnVtYmVyVG9MZXZlbCIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwic29ja2V0Iiwib24iLCJkYXRhIiwia2V5IiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJPYmplY3QiLCJrZXlzIiwiZW1pdCIsInJvb20iLCJ3aW5kb3ciLCJtYXAiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7S0FFTUEsSzs7O0FBQ0Ysc0JBQWM7QUFBQTs7QUFBQTs7QUFFVixlQUFLQyxLQUFMLEdBQWM7QUFDVkMsb0JBQU8sRUFERztBQUVWQyx3QkFBVyxFQUZEO0FBR1ZDLHFCQUFRLEVBSEU7QUFJVkMsb0JBQU87QUFKRyxVQUFkO0FBTUgsZUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLGVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIsT0FBckI7QUFUYTtBQVViOzs7OzZDQUVtQjtBQUNoQixpQkFBSUUsVUFBVSxJQUFkO0FBQ0FDLHFCQUFRQyxHQUFSLENBQVksaUNBQVo7QUFDQ0Msb0JBQU9DLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFVBQVNDLElBQVQsRUFBZTtBQUNwQ0oseUJBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCRyxJQUE3QjtBQUNGLHNCQUFLLElBQUlDLEdBQVQsSUFBZ0JELEtBQUtaLEtBQXJCLEVBQTRCO0FBQ3hCLHlCQUFJWSxLQUFLWixLQUFMLENBQVdhLEdBQVgsTUFBb0IsQ0FBeEIsRUFBMkI7QUFDdkIsZ0NBQU9ELEtBQUtaLEtBQUwsQ0FBV2EsR0FBWCxDQUFQO0FBQ0g7QUFDRDtBQUNBLHlCQUFJRCxLQUFLWixLQUFMLENBQVdhLEdBQVgsTUFBb0IsSUFBeEIsRUFBOEI7QUFDMUIsZ0NBQU9ELEtBQUtaLEtBQUwsQ0FBV2EsR0FBWCxDQUFQO0FBQ0g7QUFDSjtBQUNELHdCQUFPRCxLQUFLWixLQUFMLENBQVdjLFNBQVgsQ0FBUDtBQUNBUCx5QkFBUVEsUUFBUixDQUFpQjtBQUNiZiw0QkFBT1ksS0FBS1osS0FEQztBQUViQyxnQ0FBV2UsT0FBT0MsSUFBUCxDQUFZTCxLQUFLWixLQUFqQixDQUZFO0FBR2JFLDZCQUFRLEtBQUtJLGFBQUwsQ0FBbUJNLEtBQUtWLE1BQXhCLENBSEs7QUFJYkMsNEJBQU9TLEtBQUtUO0FBSkMsa0JBQWpCO0FBTUYsY0FsQkQ7QUFtQkRPLG9CQUFPUSxJQUFQLENBQVksYUFBWjtBQUNIOzs7dUNBRWFoQixNLEVBQVE7QUFDbEIsa0JBQUksSUFBSVcsR0FBUixJQUFlWCxNQUFmLEVBQXVCO0FBQ25CLHFCQUFHQSxPQUFPVyxHQUFQLE1BQWdCLENBQW5CLEVBQXNCO0FBQ2xCWCw0QkFBT1csR0FBUCxNQUFnQixNQUFoQjtBQUNIO0FBQ0QscUJBQUdYLE9BQU9XLEdBQVAsTUFBZ0IsQ0FBbkIsRUFBc0I7QUFDbEJYLDRCQUFPVyxHQUFQLE1BQWdCLFFBQWhCO0FBQ0g7QUFDRCxxQkFBR1gsT0FBT1csR0FBUCxNQUFnQixDQUFuQixFQUFzQjtBQUNsQlgsNEJBQU9XLEdBQVAsTUFBZ0IsTUFBaEI7QUFDSDtBQUNKO0FBQ0Qsb0JBQU9YLE1BQVA7QUFDSDs7O3dDQUVjaUIsSSxFQUFNO0FBQ2hCQyxvQkFBT1YsTUFBUCxDQUFjUSxJQUFkLENBQW1CLFVBQW5CLEVBQStCQyxJQUEvQjtBQUNKOzs7a0NBRVE7QUFBQTs7QUFDTCxvQkFDSTtBQUFBO0FBQUEsbUJBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQSx1QkFBTyxXQUFVLFlBQWpCO0FBQ0k7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKLDBCQURBO0FBT0MsOEJBQUtwQixLQUFMLENBQVdFLFNBQVgsQ0FBcUJvQixHQUFyQixDQUF5QixVQUFDUixHQUFELEVBQVM7QUFDL0JMLHFDQUFRQyxHQUFSLENBQVlJLEdBQVo7QUFDSixvQ0FDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBS0E7QUFBTCxrQ0FEQTtBQUVBO0FBQUE7QUFBQTtBQUFLLDRDQUFLZCxLQUFMLENBQVdJLEtBQVgsQ0FBaUJVLEdBQWpCO0FBQUwsa0NBRkE7QUFHQTtBQUFBO0FBQUE7QUFBSyw0Q0FBS2QsS0FBTCxDQUFXRyxNQUFYLENBQWtCVyxHQUFsQjtBQUFMLGtDQUhBO0FBSUMsd0NBQUtkLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQmEsR0FBakIsTUFBMEIsQ0FBMUIsR0FBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBOUIsR0FBbUQ7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLDJDQUFNLElBQUcsT0FBVDtBQUFpQjtBQUFBO0FBQUEsK0NBQVEsU0FBUyxPQUFLVCxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixFQUErQlEsR0FBL0IsQ0FBakI7QUFBQTtBQUFBO0FBQWpCO0FBQUo7QUFKcEQsOEJBREE7QUFRSCwwQkFWSTtBQVBEO0FBREo7QUFESixjQURKO0FBeUJIOzs7O0dBbkZlLGdCQUFNUyxTOzttQkFzRlh4QixLIiwiZmlsZSI6IjAuNmY0ODU0NzIxMTc3ZjE5NWIzNjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY2xhc3MgTG9iYnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0gIHtcbiAgICAgICAgICAgIHJvb21zOiB7fSxcbiAgICAgICAgICAgIHJvb21OYW1lczogW10sXG4gICAgICAgICAgICBsZXZlbHM6IHt9LFxuICAgICAgICAgICAgdXNlcnM6IHt9XG4gICAgICAgIH1cbiAgICAgdGhpcy5qb2luUm9vbUJ1dHRvbiA9IHRoaXMuam9pblJvb21CdXR0b24uYmluZCh0aGlzKTtcbiAgICAgdGhpcy5udW1iZXJUb0xldmVsID0gdGhpcy5udW1iZXJUb0xldmVsLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnQgZGlkIG1vdW50IGluIGpvaW5HYW1lXCIpO1xuICAgICAgICAgc29ja2V0Lm9uKFwicmVjZWl2ZVJvb21zXCIsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDVVJSRU5UIERBVEE6XCIsIGRhdGEpO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEucm9vbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yb29tc1trZXldID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhLnJvb21zW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vdGhpcyBtaWdodCBiZSBoYWNreS0gY2hlY2sgd2h5IHRoZSBzZXJ2ZXIgaXMgc3RvcmluZyBhIG51bGwgdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yb29tc1trZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhLnJvb21zW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsZXRlIGRhdGEucm9vbXNbdW5kZWZpbmVkXVxuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcm9vbXM6IGRhdGEucm9vbXMsXG4gICAgICAgICAgICAgICAgcm9vbU5hbWVzOiBPYmplY3Qua2V5cyhkYXRhLnJvb21zKSxcbiAgICAgICAgICAgICAgICBsZXZlbHM6IHRoaXMubnVtYmVyVG9MZXZlbChkYXRhLmxldmVscyksXG4gICAgICAgICAgICAgICAgdXNlcnM6IGRhdGEudXNlcnNcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgfSk7XG4gICAgICAgIHNvY2tldC5lbWl0KFwiZ2V0Um9vbUluZm9cIik7XG4gICAgfVxuXG4gICAgbnVtYmVyVG9MZXZlbChsZXZlbHMpIHtcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gbGV2ZWxzKSB7XG4gICAgICAgICAgICBpZihsZXZlbHNba2V5XSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGxldmVsc1trZXldID09PSAnRWFzeSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGxldmVsc1trZXldID09PSAyKSB7XG4gICAgICAgICAgICAgICAgbGV2ZWxzW2tleV0gPT09ICdOb3JtYWwnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihsZXZlbHNba2V5XSA9PT0gMykge1xuICAgICAgICAgICAgICAgIGxldmVsc1trZXldID09PSAnSGFyZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGV2ZWxzXG4gICAgfVxuXG4gICAgam9pblJvb21CdXR0b24ocm9vbSkge1xuICAgICAgICAgd2luZG93LnNvY2tldC5lbWl0KCdqb2luUm9vbScsIHJvb20pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGFibGVDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiTG9iYnlUYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Sb29tPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Vc2VyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5MZXZlbDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Sm9pbjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJvb21OYW1lcy5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2tleX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUudXNlcnNba2V5XX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUubGV2ZWxzW2tleV19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucm9vbXNba2V5XSA9PT0gMiA/IDx0ZD5Sb29tIEZ1bGw8L3RkPiA6IDx0ZD48TGluayB0bz1cIi9nYW1lXCI+PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmpvaW5Sb29tQnV0dG9uLmJpbmQobnVsbCwga2V5KX0+Sm9pbiBSb29tPC9idXR0b24+PC9MaW5rPjwvdGQ+IH1cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYmJ5XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lL0pvaW5HYW1lLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=