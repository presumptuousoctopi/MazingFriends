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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0pvaW5HYW1lLmpzeD9iZDIxIl0sIm5hbWVzIjpbIkxvYmJ5Iiwic3RhdGUiLCJyb29tcyIsInJvb21OYW1lcyIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwic29ja2V0Iiwib24iLCJkYXRhIiwia2V5IiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJPYmplY3QiLCJrZXlzIiwiZm9yY2VVcGRhdGUiLCJlbWl0IiwibWFwIiwiaW5kZXgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7S0FHTUEsSzs7O0FBQ0Ysc0JBQWM7QUFBQTs7QUFBQTs7QUFFVixlQUFLQyxLQUFMLEdBQWM7QUFDVkMsb0JBQU8sRUFERztBQUVWQyx3QkFBVztBQUZELFVBQWQ7QUFGVTtBQU1iOzs7OzZDQUVtQjtBQUNoQixpQkFBSUMsVUFBVSxJQUFkO0FBQ0FDLHFCQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDQSxpQkFBSUYsVUFBVSxJQUFkO0FBQ0FHLG9CQUFPQyxFQUFQLENBQVUsU0FBVixFQUFxQixVQUFTQyxJQUFULEVBQWU7QUFDaENKLHlCQUFRQyxHQUFSLENBQVksZUFBWixFQUE2QkcsSUFBN0I7QUFDQSxzQkFBSyxJQUFJQyxHQUFULElBQWdCRCxJQUFoQixFQUFzQjtBQUNsQix5QkFBSUEsS0FBS0MsR0FBTCxNQUFjLENBQWxCLEVBQXFCO0FBQ2pCLGdDQUFPRCxLQUFLQyxHQUFMLENBQVA7QUFDSDtBQUNEO0FBQ0EseUJBQUlELEtBQUtDLEdBQUwsTUFBYyxJQUFsQixFQUF3QjtBQUNwQixnQ0FBT0QsS0FBS0MsR0FBTCxDQUFQO0FBQ0g7QUFDSjtBQUNELHdCQUFPRCxLQUFLRSxTQUFMLENBQVA7QUFDQVAseUJBQVFRLFFBQVIsQ0FBaUI7QUFDYlYsNEJBQU9PLElBRE07QUFFYk4sZ0NBQVdVLE9BQU9DLElBQVAsQ0FBWUwsSUFBWjtBQUZFLGtCQUFqQixFQUdHLFVBQVVBLElBQVYsRUFBZ0IsQ0FFbEIsQ0FMRDtBQU1BTCx5QkFBUVcsV0FBUjtBQUNILGNBbkJEO0FBb0JBUixvQkFBT1MsSUFBUCxDQUFZLFVBQVo7QUFDSDs7O2tDQUVRO0FBQUE7O0FBQ0wsb0JBQ0k7QUFBQTtBQUFBLG1CQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUFBO0FBQUEsdUJBQU8sV0FBVSxZQUFqQjtBQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSixzQkFESjtBQU9LLDBCQUFLZixLQUFMLENBQVdFLFNBQVgsQ0FBcUJjLEdBQXJCLENBQXlCLFVBQUNQLEdBQUQsRUFBTVEsS0FBTixFQUFnQjtBQUN0Q2IsaUNBQVFDLEdBQVIsQ0FBWUksR0FBWjtBQUNKLGdDQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFLQTtBQUFMLDhCQURBO0FBRUE7QUFBQTtBQUFBO0FBQUssd0NBQUtULEtBQUwsQ0FBV0MsS0FBWCxDQUFpQlEsR0FBakIsQ0FBTDtBQUFBO0FBQUEsOEJBRkE7QUFHQTtBQUFBO0FBQUE7QUFBSyx3Q0FBS1QsS0FBTCxDQUFXQyxLQUFYLENBQWlCUSxHQUFqQixNQUEwQixDQUExQixHQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUE5QixHQUFpRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXREO0FBSEEsMEJBREE7QUFPSCxzQkFUSTtBQVBMO0FBREosY0FESjtBQXNCSDs7OztHQTNEZSxnQkFBTVMsUzs7bUJBNkRYbkIsSyIsImZpbGUiOiIwLjZlMDY0YTE0MjExYjA2NzM2MDE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIExvYmJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICB7XG4gICAgICAgICAgICByb29tczoge30sXG4gICAgICAgICAgICByb29tTmFtZXM6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudCBkaWQgbW91bnRcIik7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgc29ja2V0Lm9uKFwicmVjZWl2ZVwiLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNVUlJFTlQgREFUQTpcIiwgZGF0YSk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhW2tleV0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy90aGlzIG1pZ2h0IGJlIGhhY2t5LSBjaGVjayB3aHkgdGhlIHNlcnZlciBpcyBzdG9yaW5nIGEgbnVsbCB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmIChkYXRhW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWxldGUgZGF0YVt1bmRlZmluZWRdO1xuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcm9vbXM6IGRhdGEsXG4gICAgICAgICAgICAgICAgcm9vbU5hbWVzOiBPYmplY3Qua2V5cyhkYXRhKVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnRleHQuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgc29ja2V0LmVtaXQoXCJnZXRSb29tc1wiKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRhYmxlQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIkxvYmJ5VGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlJvb21uYW1lPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Vc2VyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5DYXBhY2l0eTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Sm9pbjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJvb21OYW1lcy5tYXAoKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntrZXl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLnJvb21zW2tleV19LzI8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUucm9vbXNba2V5XSA9PT0gMiA/IDxwPlJvb20gRnVsbDwvcD4gOiA8YnV0dG9uPkpvaW4gR2FtZTwvYnV0dG9uPn08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvYmJ5XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lL0pvaW5HYW1lLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=