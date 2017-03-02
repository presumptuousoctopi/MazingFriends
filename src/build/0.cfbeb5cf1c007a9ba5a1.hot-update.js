webpackHotUpdate(0,{

/***/ 289:
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
	        key: "componentDidMount",
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
	        key: "joinRoomButton",
	        value: function joinRoomButton() {
	            window.socket.emit('joinRoom', this.state.joinRoomName);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(
	                "div",
	                { className: "TableContainer" },
	                _react2.default.createElement(
	                    "table",
	                    { className: "LobbyTable" },
	                    _react2.default.createElement(
	                        "tr",
	                        null,
	                        _react2.default.createElement(
	                            "td",
	                            null,
	                            "Roomname"
	                        ),
	                        _react2.default.createElement(
	                            "td",
	                            null,
	                            "Capacity"
	                        ),
	                        _react2.default.createElement(
	                            "td",
	                            null,
	                            "Join"
	                        )
	                    ),
	                    this.state.roomNames.map(function (key, index) {
	                        console.log(key);
	                        return _react2.default.createElement(
	                            "tr",
	                            null,
	                            _react2.default.createElement(
	                                "td",
	                                null,
	                                key
	                            ),
	                            _react2.default.createElement(
	                                "td",
	                                null,
	                                _this2.state.rooms[key],
	                                "/2"
	                            ),
	                            _react2.default.createElement(
	                                "td",
	                                null,
	                                _this2.state.rooms[key] === 2 ? _react2.default.createElement(
	                                    "p",
	                                    null,
	                                    "Room Full"
	                                ) : _react2.default.createElement(
	                                    Link,
	                                    { to: "/game" },
	                                    _react2.default.createElement(
	                                        "button",
	                                        { className: "Play", onClick: _this2.joinRoomButton.bind(null, key) },
	                                        "Join Room"
	                                    )
	                                ),
	                                " "
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "JoinGame.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0pvaW5HYW1lLmpzeD9iZDIxIl0sIm5hbWVzIjpbIkxvYmJ5Iiwic3RhdGUiLCJyb29tcyIsInJvb21OYW1lcyIsImpvaW5Sb29tQnV0dG9uIiwiYmluZCIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwic29ja2V0Iiwib24iLCJkYXRhIiwia2V5IiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJPYmplY3QiLCJrZXlzIiwiZW1pdCIsIndpbmRvdyIsImpvaW5Sb29tTmFtZSIsIm1hcCIsImluZGV4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0tBRU1BLEs7OztBQUNGLHNCQUFjO0FBQUE7O0FBQUE7O0FBRVYsZUFBS0MsS0FBTCxHQUFjO0FBQ1ZDLG9CQUFPLEVBREc7QUFFVkMsd0JBQVc7QUFGRCxVQUFkO0FBSUgsZUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQU5hO0FBT2I7Ozs7NkNBRW1CO0FBQ2hCLGlCQUFJQyxVQUFVLElBQWQ7QUFDQUMscUJBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBLGlCQUFJRixVQUFVLElBQWQ7QUFDQUcsb0JBQU9DLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFVBQVNDLElBQVQsRUFBZTtBQUNyQ0oseUJBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCRyxJQUE3QjtBQUNBLHNCQUFLLElBQUlDLEdBQVQsSUFBZ0JELElBQWhCLEVBQXNCO0FBQ2xCLHlCQUFJQSxLQUFLQyxHQUFMLE1BQWMsQ0FBbEIsRUFBcUI7QUFDakIsZ0NBQU9ELEtBQUtDLEdBQUwsQ0FBUDtBQUNIO0FBQ0Q7QUFDQSx5QkFBSUQsS0FBS0MsR0FBTCxNQUFjLElBQWxCLEVBQXdCO0FBQ3BCLGdDQUFPRCxLQUFLQyxHQUFMLENBQVA7QUFDSDtBQUNKO0FBQ0Qsd0JBQU9ELEtBQUtFLFNBQUwsQ0FBUDtBQUNBUCx5QkFBUVEsUUFBUixDQUFpQjtBQUNiWiw0QkFBT1MsSUFETTtBQUViUixnQ0FBV1ksT0FBT0MsSUFBUCxDQUFZTCxJQUFaO0FBRkUsa0JBQWpCLEVBR0csVUFBVUEsSUFBVixFQUFnQixDQUVsQixDQUxEO0FBTUE7QUFDSCxjQW5CRDtBQW9CQUYsb0JBQU9RLElBQVAsQ0FBWSxVQUFaO0FBQ0g7OzswQ0FFZ0I7QUFDWkMsb0JBQU9ULE1BQVAsQ0FBY1EsSUFBZCxDQUFtQixVQUFuQixFQUErQixLQUFLaEIsS0FBTCxDQUFXa0IsWUFBMUM7QUFDSjs7O2tDQUVRO0FBQUE7O0FBQ0wsb0JBQ0k7QUFBQTtBQUFBLG1CQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUFBO0FBQUEsdUJBQU8sV0FBVSxZQUFqQjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKLHNCQURKO0FBTUssMEJBQUtsQixLQUFMLENBQVdFLFNBQVgsQ0FBcUJpQixHQUFyQixDQUF5QixVQUFDUixHQUFELEVBQU1TLEtBQU4sRUFBZ0I7QUFDdENkLGlDQUFRQyxHQUFSLENBQVlJLEdBQVo7QUFDSixnQ0FDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBS0E7QUFBTCw4QkFEQTtBQUVBO0FBQUE7QUFBQTtBQUFLLHdDQUFLWCxLQUFMLENBQVdDLEtBQVgsQ0FBaUJVLEdBQWpCLENBQUw7QUFBQTtBQUFBLDhCQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUssd0NBQUtYLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQlUsR0FBakIsTUFBMEIsQ0FBMUIsR0FBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBOUIsR0FBaUQ7QUFBQyx5Q0FBRDtBQUFBLHVDQUFNLElBQUcsT0FBVDtBQUFpQjtBQUFBO0FBQUEsMkNBQVEsV0FBVSxNQUFsQixFQUF5QixTQUFTLE9BQUtSLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLEVBQStCTyxHQUEvQixDQUFsQztBQUFBO0FBQUE7QUFBakIsa0NBQXREO0FBQUE7QUFBQTtBQUhBLDBCQURBO0FBT0gsc0JBVEk7QUFOTDtBQURKLGNBREo7QUFxQkg7Ozs7R0EvRGUsZ0JBQU1VLFM7O21CQWlFWHRCLEsiLCJmaWxlIjoiMC5jZmJlYjVjZjFjMDA3YTliYTVhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgTG9iYnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0gIHtcbiAgICAgICAgICAgIHJvb21zOiB7fSxcbiAgICAgICAgICAgIHJvb21OYW1lczogW11cbiAgICAgICAgfVxuICAgICB0aGlzLmpvaW5Sb29tQnV0dG9uID0gdGhpcy5qb2luUm9vbUJ1dHRvbi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IGRpZCBtb3VudFwiKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgICBzb2NrZXQub24oXCJyZWNlaXZlUm9vbXNcIiwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDVVJSRU5UIERBVEE6XCIsIGRhdGEpO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVtrZXldID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vdGhpcyBtaWdodCBiZSBoYWNreS0gY2hlY2sgd2h5IHRoZSBzZXJ2ZXIgaXMgc3RvcmluZyBhIG51bGwgdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsZXRlIGRhdGFbdW5kZWZpbmVkXTtcbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHJvb21zOiBkYXRhLFxuICAgICAgICAgICAgICAgIHJvb21OYW1lczogT2JqZWN0LmtleXMoZGF0YSlcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvL2NvbnRleHQuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0LmVtaXQoXCJnZXRSb29tc1wiKTtcbiAgICB9XG5cbiAgICBqb2luUm9vbUJ1dHRvbigpIHtcbiAgICAgICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnam9pblJvb20nLCB0aGlzLnN0YXRlLmpvaW5Sb29tTmFtZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUYWJsZUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJMb2JieVRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Sb29tbmFtZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Q2FwYWNpdHk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkpvaW48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yb29tTmFtZXMubWFwKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57a2V5fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5yb29tc1trZXldfS8yPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLnJvb21zW2tleV0gPT09IDIgPyA8cD5Sb29tIEZ1bGw8L3A+IDogPExpbmsgdG89XCIvZ2FtZVwiPjxidXR0b24gY2xhc3NOYW1lPVwiUGxheVwiIG9uQ2xpY2s9e3RoaXMuam9pblJvb21CdXR0b24uYmluZChudWxsLCBrZXkpfT5Kb2luIFJvb208L2J1dHRvbj48L0xpbms+IH0gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBMb2JieVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9Kb2luR2FtZS5qc3giXSwic291cmNlUm9vdCI6IiJ9