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
	                        "tbody",
	                        null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0pvaW5HYW1lLmpzeD9iZDIxIl0sIm5hbWVzIjpbIkxvYmJ5Iiwic3RhdGUiLCJyb29tcyIsInJvb21OYW1lcyIsImpvaW5Sb29tQnV0dG9uIiwiYmluZCIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwic29ja2V0Iiwib24iLCJkYXRhIiwia2V5IiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJPYmplY3QiLCJrZXlzIiwiZW1pdCIsIndpbmRvdyIsImpvaW5Sb29tTmFtZSIsIm1hcCIsImluZGV4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0tBRU1BLEs7OztBQUNGLHNCQUFjO0FBQUE7O0FBQUE7O0FBRVYsZUFBS0MsS0FBTCxHQUFjO0FBQ1ZDLG9CQUFPLEVBREc7QUFFVkMsd0JBQVc7QUFGRCxVQUFkO0FBSUgsZUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQU5hO0FBT2I7Ozs7NkNBRW1CO0FBQ2hCLGlCQUFJQyxVQUFVLElBQWQ7QUFDQUMscUJBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBLGlCQUFJRixVQUFVLElBQWQ7QUFDQUcsb0JBQU9DLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFVBQVNDLElBQVQsRUFBZTtBQUNyQ0oseUJBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCRyxJQUE3QjtBQUNBLHNCQUFLLElBQUlDLEdBQVQsSUFBZ0JELElBQWhCLEVBQXNCO0FBQ2xCLHlCQUFJQSxLQUFLQyxHQUFMLE1BQWMsQ0FBbEIsRUFBcUI7QUFDakIsZ0NBQU9ELEtBQUtDLEdBQUwsQ0FBUDtBQUNIO0FBQ0Q7QUFDQSx5QkFBSUQsS0FBS0MsR0FBTCxNQUFjLElBQWxCLEVBQXdCO0FBQ3BCLGdDQUFPRCxLQUFLQyxHQUFMLENBQVA7QUFDSDtBQUNKO0FBQ0Qsd0JBQU9ELEtBQUtFLFNBQUwsQ0FBUDtBQUNBUCx5QkFBUVEsUUFBUixDQUFpQjtBQUNiWiw0QkFBT1MsSUFETTtBQUViUixnQ0FBV1ksT0FBT0MsSUFBUCxDQUFZTCxJQUFaO0FBRkUsa0JBQWpCLEVBR0csVUFBVUEsSUFBVixFQUFnQixDQUVsQixDQUxEO0FBTUE7QUFDSCxjQW5CRDtBQW9CQUYsb0JBQU9RLElBQVAsQ0FBWSxVQUFaO0FBQ0g7OzswQ0FFZ0I7QUFDWkMsb0JBQU9ULE1BQVAsQ0FBY1EsSUFBZCxDQUFtQixVQUFuQixFQUErQixLQUFLaEIsS0FBTCxDQUFXa0IsWUFBMUM7QUFDSjs7O2tDQUVRO0FBQUE7O0FBQ0wsb0JBQ0k7QUFBQTtBQUFBLG1CQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUFBO0FBQUEsdUJBQU8sV0FBVSxZQUFqQjtBQUNJO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKLDBCQURBO0FBTUMsOEJBQUtsQixLQUFMLENBQVdFLFNBQVgsQ0FBcUJpQixHQUFyQixDQUF5QixVQUFDUixHQUFELEVBQU1TLEtBQU4sRUFBZ0I7QUFDdENkLHFDQUFRQyxHQUFSLENBQVlJLEdBQVo7QUFDSixvQ0FDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBS0E7QUFBTCxrQ0FEQTtBQUVBO0FBQUE7QUFBQTtBQUFLLDRDQUFLWCxLQUFMLENBQVdDLEtBQVgsQ0FBaUJVLEdBQWpCLENBQUw7QUFBQTtBQUFBLGtDQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUssNENBQUtYLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQlUsR0FBakIsTUFBMEIsQ0FBMUIsR0FBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FBOUIsR0FBaUQ7QUFBQyw2Q0FBRDtBQUFBLDJDQUFNLElBQUcsT0FBVDtBQUFpQjtBQUFBO0FBQUEsK0NBQVEsV0FBVSxNQUFsQixFQUF5QixTQUFTLE9BQUtSLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLEVBQStCTyxHQUEvQixDQUFsQztBQUFBO0FBQUE7QUFBakIsc0NBQXREO0FBQUE7QUFBQTtBQUhBLDhCQURBO0FBT0gsMEJBVEk7QUFORDtBQURKO0FBREosY0FESjtBQXVCSDs7OztHQWpFZSxnQkFBTVUsUzs7bUJBbUVYdEIsSyIsImZpbGUiOiIwLmMxOWEwNDExM2Q0NGM4OTcyOTZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBMb2JieSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAge1xuICAgICAgICAgICAgcm9vbXM6IHt9LFxuICAgICAgICAgICAgcm9vbU5hbWVzOiBbXVxuICAgICAgICB9XG4gICAgIHRoaXMuam9pblJvb21CdXR0b24gPSB0aGlzLmpvaW5Sb29tQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnQgZGlkIG1vdW50XCIpO1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICAgIHNvY2tldC5vbihcInJlY2VpdmVSb29tc1wiLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNVUlJFTlQgREFUQTpcIiwgZGF0YSk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhW2tleV0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy90aGlzIG1pZ2h0IGJlIGhhY2t5LSBjaGVjayB3aHkgdGhlIHNlcnZlciBpcyBzdG9yaW5nIGEgbnVsbCB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmIChkYXRhW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgZGF0YVt1bmRlZmluZWRdO1xuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcm9vbXM6IGRhdGEsXG4gICAgICAgICAgICAgICAgcm9vbU5hbWVzOiBPYmplY3Qua2V5cyhkYXRhKVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vY29udGV4dC5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICBzb2NrZXQuZW1pdChcImdldFJvb21zXCIpO1xuICAgIH1cblxuICAgIGpvaW5Sb29tQnV0dG9uKCkge1xuICAgICAgICAgd2luZG93LnNvY2tldC5lbWl0KCdqb2luUm9vbScsIHRoaXMuc3RhdGUuam9pblJvb21OYW1lKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRhYmxlQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIkxvYmJ5VGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Um9vbW5hbWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNhcGFjaXR5PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Kb2luPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucm9vbU5hbWVzLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2tleX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUucm9vbXNba2V5XX0vMjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5yb29tc1trZXldID09PSAyID8gPHA+Um9vbSBGdWxsPC9wPiA6IDxMaW5rIHRvPVwiL2dhbWVcIj48YnV0dG9uIGNsYXNzTmFtZT1cIlBsYXlcIiBvbkNsaWNrPXt0aGlzLmpvaW5Sb29tQnV0dG9uLmJpbmQobnVsbCwga2V5KX0+Sm9pbiBSb29tPC9idXR0b24+PC9MaW5rPiB9IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBMb2JieVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9Kb2luR2FtZS5qc3giXSwic291cmNlUm9vdCI6IiJ9