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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0pvaW5HYW1lLmpzeD9iZDIxIl0sIm5hbWVzIjpbIkxvYmJ5Iiwic3RhdGUiLCJyb29tcyIsInJvb21OYW1lcyIsImpvaW5Sb29tQnV0dG9uIiwiYmluZCIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwic29ja2V0Iiwib24iLCJkYXRhIiwia2V5IiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJPYmplY3QiLCJrZXlzIiwibGV2ZWxzIiwidXNlcnMiLCJlbWl0Iiwicm9vbSIsIndpbmRvdyIsIm1hcCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztLQUVNQSxLOzs7QUFDRixzQkFBYztBQUFBOztBQUFBOztBQUVWLGVBQUtDLEtBQUwsR0FBYztBQUNWQyxvQkFBTyxFQURHO0FBRVZDLHdCQUFXO0FBRkQsVUFBZDtBQUlILGVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFOYTtBQU9iOzs7OzZDQUVtQjtBQUNoQixpQkFBSUMsVUFBVSxJQUFkO0FBQ0FDLHFCQUFRQyxHQUFSLENBQVksaUNBQVo7QUFDQ0Msb0JBQU9DLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFVBQVNDLElBQVQsRUFBZTtBQUNwQ0oseUJBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCRyxJQUE3QjtBQUNGLHNCQUFLLElBQUlDLEdBQVQsSUFBZ0JELEtBQUtULEtBQXJCLEVBQTRCO0FBQ3hCLHlCQUFJUyxLQUFLVCxLQUFMLENBQVdVLEdBQVgsTUFBb0IsQ0FBeEIsRUFBMkI7QUFDdkIsZ0NBQU9ELEtBQUtULEtBQUwsQ0FBV1UsR0FBWCxDQUFQO0FBQ0g7QUFDRDtBQUNBLHlCQUFJRCxLQUFLVCxLQUFMLENBQVdVLEdBQVgsTUFBb0IsSUFBeEIsRUFBOEI7QUFDMUIsZ0NBQU9ELEtBQUtULEtBQUwsQ0FBV1UsR0FBWCxDQUFQO0FBQ0g7QUFDSjtBQUNELHdCQUFPRCxLQUFLVCxLQUFMLENBQVdXLFNBQVgsQ0FBUDtBQUNBUCx5QkFBUVEsUUFBUixDQUFpQjtBQUNiWiw0QkFBT1MsS0FBS1QsS0FEQztBQUViQyxnQ0FBV1ksT0FBT0MsSUFBUCxDQUFZTCxLQUFLVCxLQUFqQixDQUZFO0FBR2JlLDZCQUFRTixLQUFLTSxNQUhBO0FBSWJDLDRCQUFPUCxLQUFLTztBQUpDLGtCQUFqQjtBQU1GLGNBbEJEO0FBbUJEVCxvQkFBT1UsSUFBUCxDQUFZLGFBQVo7QUFDSDs7O3VDQUVhRixNLEVBQVE7QUFDbEIsa0JBQUksSUFBSUwsR0FBUixJQUFlSyxNQUFmLEVBQXVCO0FBQ25CLHFCQUFHQSxPQUFPTCxHQUFQLE1BQWdCLENBQW5CLEVBQXNCO0FBQ2xCSyw0QkFBT0wsR0FBUCxNQUFnQixNQUFoQjtBQUNIO0FBQ0QscUJBQUdLLE9BQU9MLEdBQVAsTUFBZ0IsQ0FBbkIsRUFBc0I7QUFDbEJLLDRCQUFPTCxHQUFQLE1BQWdCLFFBQWhCO0FBQ0g7QUFDRCxxQkFBR0ssT0FBT0wsR0FBUCxNQUFnQixDQUFuQixFQUFzQjtBQUNsQkssNEJBQU9MLEdBQVAsTUFBZ0IsTUFBaEI7QUFDSDtBQUNKO0FBQ0o7Ozt3Q0FFY1EsSSxFQUFNO0FBQ2hCQyxvQkFBT1osTUFBUCxDQUFjVSxJQUFkLENBQW1CLFVBQW5CLEVBQStCQyxJQUEvQjtBQUNKOzs7a0NBRVE7QUFBQTs7QUFDTCxvQkFDSTtBQUFBO0FBQUEsbUJBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQSx1QkFBTyxXQUFVLFlBQWpCO0FBQ0k7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUhKO0FBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKLDBCQURBO0FBT0MsOEJBQUtuQixLQUFMLENBQVdFLFNBQVgsQ0FBcUJtQixHQUFyQixDQUF5QixVQUFDVixHQUFELEVBQVM7QUFDL0JMLHFDQUFRQyxHQUFSLENBQVlJLEdBQVo7QUFDSixvQ0FDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBS0E7QUFBTCxrQ0FEQTtBQUVBO0FBQUE7QUFBQTtBQUFLLDRDQUFLWCxLQUFMLENBQVdpQixLQUFYLENBQWlCTixHQUFqQjtBQUFMLGtDQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUssNENBQUtYLEtBQUwsQ0FBV2dCLE1BQVgsQ0FBa0JMLEdBQWxCO0FBQUwsa0NBSEE7QUFJQyx3Q0FBS1gsS0FBTCxDQUFXQyxLQUFYLENBQWlCVSxHQUFqQixNQUEwQixDQUExQixHQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUE5QixHQUFtRDtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsMkNBQU0sSUFBRyxPQUFUO0FBQWlCO0FBQUE7QUFBQSwrQ0FBUSxTQUFTLE9BQUtSLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLEVBQStCTyxHQUEvQixDQUFqQjtBQUFBO0FBQUE7QUFBakI7QUFBSjtBQUpwRCw4QkFEQTtBQVFILDBCQVZJO0FBUEQ7QUFESjtBQURKLGNBREo7QUF5Qkg7Ozs7R0EvRWUsZ0JBQU1XLFM7O21CQWtGWHZCLEsiLCJmaWxlIjoiMC45YmNhNTc2NmEyNjViMmM5ZTA5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jbGFzcyBMb2JieSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAge1xuICAgICAgICAgICAgcm9vbXM6IHt9LFxuICAgICAgICAgICAgcm9vbU5hbWVzOiBbXVxuICAgICAgICB9XG4gICAgIHRoaXMuam9pblJvb21CdXR0b24gPSB0aGlzLmpvaW5Sb29tQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnQgZGlkIG1vdW50IGluIGpvaW5HYW1lXCIpO1xuICAgICAgICAgc29ja2V0Lm9uKFwicmVjZWl2ZVJvb21zXCIsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDVVJSRU5UIERBVEE6XCIsIGRhdGEpO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEucm9vbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yb29tc1trZXldID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhLnJvb21zW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vdGhpcyBtaWdodCBiZSBoYWNreS0gY2hlY2sgd2h5IHRoZSBzZXJ2ZXIgaXMgc3RvcmluZyBhIG51bGwgdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yb29tc1trZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhLnJvb21zW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsZXRlIGRhdGEucm9vbXNbdW5kZWZpbmVkXVxuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcm9vbXM6IGRhdGEucm9vbXMsXG4gICAgICAgICAgICAgICAgcm9vbU5hbWVzOiBPYmplY3Qua2V5cyhkYXRhLnJvb21zKSxcbiAgICAgICAgICAgICAgICBsZXZlbHM6IGRhdGEubGV2ZWxzLFxuICAgICAgICAgICAgICAgIHVzZXJzOiBkYXRhLnVzZXJzXG4gICAgICAgICAgICAgfSlcbiAgICAgICAgIH0pO1xuICAgICAgICBzb2NrZXQuZW1pdChcImdldFJvb21JbmZvXCIpO1xuICAgIH1cblxuICAgIG51bWJlclRvTGV2ZWwobGV2ZWxzKSB7XG4gICAgICAgIGZvcih2YXIga2V5IGluIGxldmVscykge1xuICAgICAgICAgICAgaWYobGV2ZWxzW2tleV0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICBsZXZlbHNba2V5XSA9PT0gJ0Vhc3knXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihsZXZlbHNba2V5XSA9PT0gMikge1xuICAgICAgICAgICAgICAgIGxldmVsc1trZXldID09PSAnTm9ybWFsJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYobGV2ZWxzW2tleV0gPT09IDMpIHtcbiAgICAgICAgICAgICAgICBsZXZlbHNba2V5XSA9PT0gJ0hhcmQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBqb2luUm9vbUJ1dHRvbihyb29tKSB7XG4gICAgICAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ2pvaW5Sb29tJywgcm9vbSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUYWJsZUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJMb2JieVRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlJvb208L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlVzZXI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkxldmVsPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Kb2luPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucm9vbU5hbWVzLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57a2V5fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS51c2Vyc1trZXldfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5sZXZlbHNba2V5XX08L3RkPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yb29tc1trZXldID09PSAyID8gPHRkPlJvb20gRnVsbDwvdGQ+IDogPHRkPjxMaW5rIHRvPVwiL2dhbWVcIj48YnV0dG9uIG9uQ2xpY2s9e3RoaXMuam9pblJvb21CdXR0b24uYmluZChudWxsLCBrZXkpfT5Kb2luIFJvb208L2J1dHRvbj48L0xpbms+PC90ZD4gfVxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9iYnlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvSm9pbkdhbWUuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==