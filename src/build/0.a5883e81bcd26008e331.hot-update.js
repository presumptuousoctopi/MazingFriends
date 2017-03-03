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
	            roomNames: []
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0pvaW5HYW1lLmpzeD9iZDIxIl0sIm5hbWVzIjpbIkxvYmJ5Iiwic3RhdGUiLCJyb29tcyIsInJvb21OYW1lcyIsImpvaW5Sb29tQnV0dG9uIiwiYmluZCIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwic29ja2V0Iiwib24iLCJkYXRhIiwia2V5IiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJPYmplY3QiLCJrZXlzIiwibGV2ZWxzIiwidXNlcnMiLCJlbWl0Iiwicm9vbSIsIndpbmRvdyIsIm1hcCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztLQUVNQSxLOzs7QUFDRixzQkFBYztBQUFBOztBQUFBOztBQUVWLGVBQUtDLEtBQUwsR0FBYztBQUNWQyxvQkFBTyxFQURHO0FBRVZDLHdCQUFXO0FBRkQsVUFBZDtBQUlILGVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFOYTtBQU9iOzs7OzZDQUVtQjtBQUNoQixpQkFBSUMsVUFBVSxJQUFkO0FBQ0FDLHFCQUFRQyxHQUFSLENBQVksaUNBQVo7QUFDQ0Msb0JBQU9DLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFVBQVNDLElBQVQsRUFBZTtBQUNwQ0oseUJBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCRyxJQUE3QjtBQUNGLHNCQUFLLElBQUlDLEdBQVQsSUFBZ0JELEtBQUtULEtBQXJCLEVBQTRCO0FBQ3hCLHlCQUFJUyxLQUFLVCxLQUFMLENBQVdVLEdBQVgsTUFBb0IsQ0FBeEIsRUFBMkI7QUFDdkIsZ0NBQU9ELEtBQUtULEtBQUwsQ0FBV1UsR0FBWCxDQUFQO0FBQ0g7QUFDRDtBQUNBLHlCQUFJRCxLQUFLVCxLQUFMLENBQVdVLEdBQVgsTUFBb0IsSUFBeEIsRUFBOEI7QUFDMUIsZ0NBQU9ELEtBQUtULEtBQUwsQ0FBV1UsR0FBWCxDQUFQO0FBQ0g7QUFDSjtBQUNELHdCQUFPRCxLQUFLVCxLQUFMLENBQVdXLFNBQVgsQ0FBUDtBQUNBUCx5QkFBUVEsUUFBUixDQUFpQjtBQUNiWiw0QkFBT1MsS0FBS1QsS0FEQztBQUViQyxnQ0FBV1ksT0FBT0MsSUFBUCxDQUFZTCxLQUFLVCxLQUFqQixDQUZFO0FBR2JlLDZCQUFRTixLQUFLTSxNQUhBO0FBSWJDLDRCQUFPUCxLQUFLTztBQUpDLGtCQUFqQjtBQU1GLGNBbEJEO0FBbUJEVCxvQkFBT1UsSUFBUCxDQUFZLGFBQVo7QUFDSDs7O3dDQUVjQyxJLEVBQU07QUFDaEJDLG9CQUFPWixNQUFQLENBQWNVLElBQWQsQ0FBbUIsVUFBbkIsRUFBK0JDLElBQS9CO0FBQ0o7OztrQ0FFUTtBQUFBOztBQUNMLG9CQUNJO0FBQUE7QUFBQSxtQkFBSyxXQUFVLGdCQUFmO0FBQ0k7QUFBQTtBQUFBLHVCQUFPLFdBQVUsWUFBakI7QUFDSTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkosMEJBREE7QUFPQyw4QkFBS25CLEtBQUwsQ0FBV0UsU0FBWCxDQUFxQm1CLEdBQXJCLENBQXlCLFVBQUNWLEdBQUQsRUFBUztBQUMvQkwscUNBQVFDLEdBQVIsQ0FBWUksR0FBWjtBQUNKLG9DQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFLQTtBQUFMLGtDQURBO0FBRUE7QUFBQTtBQUFBO0FBQUssNENBQUtYLEtBQUwsQ0FBV2lCLEtBQVgsQ0FBaUJOLEdBQWpCO0FBQUwsa0NBRkE7QUFHQTtBQUFBO0FBQUE7QUFBSyw0Q0FBS1gsS0FBTCxDQUFXZ0IsTUFBWCxDQUFrQkwsR0FBbEI7QUFBTCxrQ0FIQTtBQUlDLHdDQUFLWCxLQUFMLENBQVdDLEtBQVgsQ0FBaUJVLEdBQWpCLE1BQTBCLENBQTFCLEdBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQTlCLEdBQW1EO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSwyQ0FBTSxJQUFHLE9BQVQ7QUFBaUI7QUFBQTtBQUFBLCtDQUFRLFNBQVMsT0FBS1IsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsRUFBK0JPLEdBQS9CLENBQWpCO0FBQUE7QUFBQTtBQUFqQjtBQUFKO0FBSnBELDhCQURBO0FBUUgsMEJBVkk7QUFQRDtBQURKO0FBREosY0FESjtBQXlCSDs7OztHQWpFZSxnQkFBTVcsUzs7bUJBb0VYdkIsSyIsImZpbGUiOiIwLmE1ODgzZTgxYmNkMjYwMDhlMzMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmNsYXNzIExvYmJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICB7XG4gICAgICAgICAgICByb29tczoge30sXG4gICAgICAgICAgICByb29tTmFtZXM6IFtdXG4gICAgICAgIH1cbiAgICAgdGhpcy5qb2luUm9vbUJ1dHRvbiA9IHRoaXMuam9pblJvb21CdXR0b24uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudCBkaWQgbW91bnQgaW4gam9pbkdhbWVcIik7XG4gICAgICAgICBzb2NrZXQub24oXCJyZWNlaXZlUm9vbXNcIiwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNVUlJFTlQgREFUQTpcIiwgZGF0YSk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YS5yb29tcykge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJvb21zW2tleV0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGEucm9vbXNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy90aGlzIG1pZ2h0IGJlIGhhY2t5LSBjaGVjayB3aHkgdGhlIHNlcnZlciBpcyBzdG9yaW5nIGEgbnVsbCB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJvb21zW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGEucm9vbXNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgZGF0YS5yb29tc1t1bmRlZmluZWRdXG4gICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICByb29tczogZGF0YS5yb29tcyxcbiAgICAgICAgICAgICAgICByb29tTmFtZXM6IE9iamVjdC5rZXlzKGRhdGEucm9vbXMpLFxuICAgICAgICAgICAgICAgIGxldmVsczogZGF0YS5sZXZlbHMsXG4gICAgICAgICAgICAgICAgdXNlcnM6IGRhdGEudXNlcnNcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgfSk7XG4gICAgICAgIHNvY2tldC5lbWl0KFwiZ2V0Um9vbUluZm9cIiwgKTtcbiAgICB9XG5cbiAgICBqb2luUm9vbUJ1dHRvbihyb29tKSB7XG4gICAgICAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ2pvaW5Sb29tJywgcm9vbSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUYWJsZUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJMb2JieVRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlJvb208L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlVzZXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkxldmVsPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Kb2luPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucm9vbU5hbWVzLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57a2V5fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS51c2Vyc1trZXldfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5sZXZlbHNba2V5XX08L3RkPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yb29tc1trZXldID09PSAyID8gPHRkPlJvb20gRnVsbDwvdGQ+IDogPHRkPjxMaW5rIHRvPVwiL2dhbWVcIj48YnV0dG9uIG9uQ2xpY2s9e3RoaXMuam9pblJvb21CdXR0b24uYmluZChudWxsLCBrZXkpfT5Kb2luIFJvb208L2J1dHRvbj48L0xpbms+PC90ZD4gfVxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9iYnlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvSm9pbkdhbWUuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==