webpackHotUpdate(0,{

/***/ 288:
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
	        return _this;
	    }
	
	    _createClass(Lobby, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var context = this;
	            console.log("component did mount");
	            var context = this;
	            socket.on("receive", function (data) {
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
	                context.forceUpdate();
	            });
	            socket.emit("getRooms");
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(
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
	                        "User"
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
	                                "button",
	                                null,
	                                "Join Game"
	                            )
	                        )
	                    );
	                })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0pvaW5HYW1lLmpzeD9iZDIxIl0sIm5hbWVzIjpbIkxvYmJ5Iiwic3RhdGUiLCJyb29tcyIsInJvb21OYW1lcyIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwic29ja2V0Iiwib24iLCJkYXRhIiwia2V5IiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJPYmplY3QiLCJrZXlzIiwiZm9yY2VVcGRhdGUiLCJlbWl0IiwibWFwIiwiaW5kZXgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7S0FHTUEsSzs7O0FBQ0Ysc0JBQWM7QUFBQTs7QUFBQTs7QUFFVixlQUFLQyxLQUFMLEdBQWM7QUFDVkMsb0JBQU8sRUFERztBQUVWQyx3QkFBVztBQUZELFVBQWQ7QUFGVTtBQU1iOzs7OzZDQUVtQjtBQUNoQixpQkFBSUMsVUFBVSxJQUFkO0FBQ0FDLHFCQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDQSxpQkFBSUYsVUFBVSxJQUFkO0FBQ0FHLG9CQUFPQyxFQUFQLENBQVUsU0FBVixFQUFxQixVQUFTQyxJQUFULEVBQWU7QUFDaENKLHlCQUFRQyxHQUFSLENBQVksZUFBWixFQUE2QkcsSUFBN0I7QUFDQSxzQkFBSyxJQUFJQyxHQUFULElBQWdCRCxJQUFoQixFQUFzQjtBQUNsQix5QkFBSUEsS0FBS0MsR0FBTCxNQUFjLENBQWxCLEVBQXFCO0FBQ2pCLGdDQUFPRCxLQUFLQyxHQUFMLENBQVA7QUFDSDtBQUNEO0FBQ0EseUJBQUlELEtBQUtDLEdBQUwsTUFBYyxJQUFsQixFQUF3QjtBQUNwQixnQ0FBT0QsS0FBS0MsR0FBTCxDQUFQO0FBQ0g7QUFDSjtBQUNELHdCQUFPRCxLQUFLRSxTQUFMLENBQVA7QUFDQVAseUJBQVFRLFFBQVIsQ0FBaUI7QUFDYlYsNEJBQU9PLElBRE07QUFFYk4sZ0NBQVdVLE9BQU9DLElBQVAsQ0FBWUwsSUFBWjtBQUZFLGtCQUFqQixFQUdHLFVBQVVBLElBQVYsRUFBZ0IsQ0FFbEIsQ0FMRDtBQU1BTCx5QkFBUVcsV0FBUjtBQUNILGNBbkJEO0FBb0JBUixvQkFBT1MsSUFBUCxDQUFZLFVBQVo7QUFDSDs7O2tDQUVRO0FBQUE7O0FBQ0wsb0JBQ0k7QUFBQTtBQUFBLG1CQUFPLFdBQVUsWUFBakI7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSjtBQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkosa0JBREo7QUFPSyxzQkFBS2YsS0FBTCxDQUFXRSxTQUFYLENBQXFCYyxHQUFyQixDQUF5QixVQUFDUCxHQUFELEVBQU1RLEtBQU4sRUFBZ0I7QUFDdENiLDZCQUFRQyxHQUFSLENBQVlJLEdBQVo7QUFDSiw0QkFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBS0E7QUFBTCwwQkFEQTtBQUVBO0FBQUE7QUFBQTtBQUFLLG9DQUFLVCxLQUFMLENBQVdDLEtBQVgsQ0FBaUJRLEdBQWpCLENBQUw7QUFBQTtBQUFBLDBCQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUssb0NBQUtULEtBQUwsQ0FBV0MsS0FBWCxDQUFpQlEsR0FBakIsTUFBMEIsQ0FBMUIsR0FBOEI7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBOUIsR0FBaUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF0RDtBQUhBLHNCQURBO0FBT0gsa0JBVEk7QUFQTCxjQURKO0FBb0JIOzs7O0dBekRlLGdCQUFNUyxTOzttQkEyRFhuQixLIiwiZmlsZSI6IjAuZWNlZjc0MTI3YTliZDYzYzRlOWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuY2xhc3MgTG9iYnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0gIHtcbiAgICAgICAgICAgIHJvb21zOiB7fSxcbiAgICAgICAgICAgIHJvb21OYW1lczogW11cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IGRpZCBtb3VudFwiKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgICBzb2NrZXQub24oXCJyZWNlaXZlXCIsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1VSUkVOVCBEQVRBOlwiLCBkYXRhKTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFba2V5XSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3RoaXMgbWlnaHQgYmUgaGFja3ktIGNoZWNrIHdoeSB0aGUgc2VydmVyIGlzIHN0b3JpbmcgYSBudWxsIHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhW3VuZGVmaW5lZF07XG4gICAgICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICByb29tczogZGF0YSxcbiAgICAgICAgICAgICAgICByb29tTmFtZXM6IE9iamVjdC5rZXlzKGRhdGEpXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29udGV4dC5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9KVxuICAgICAgICBzb2NrZXQuZW1pdChcImdldFJvb21zXCIpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJMb2JieVRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+Um9vbW5hbWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+VXNlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5DYXBhY2l0eTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5Kb2luPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJvb21OYW1lcy5tYXAoKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+e2tleX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5yb29tc1trZXldfS8yPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUucm9vbXNba2V5XSA9PT0gMiA/IDxwPlJvb20gRnVsbDwvcD4gOiA8YnV0dG9uPkpvaW4gR2FtZTwvYnV0dG9uPn08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvYmJ5XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lL0pvaW5HYW1lLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=