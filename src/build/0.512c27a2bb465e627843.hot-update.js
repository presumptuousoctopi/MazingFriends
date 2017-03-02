webpackHotUpdate(0,{

/***/ 284:
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
	                null,
	                _react2.default.createElement(
	                    "tr",
	                    null,
	                    _react2.default.createElement(
	                        "th",
	                        null,
	                        "Roomname"
	                    ),
	                    _react2.default.createElement(
	                        "th",
	                        null,
	                        "Number of Players"
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
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Lobby.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0xvYmJ5LmpzeD9jY2JhIl0sIm5hbWVzIjpbIkxvYmJ5Iiwic3RhdGUiLCJyb29tcyIsInJvb21OYW1lcyIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwic29ja2V0Iiwib24iLCJkYXRhIiwia2V5IiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJPYmplY3QiLCJrZXlzIiwiZm9yY2VVcGRhdGUiLCJlbWl0IiwibWFwIiwiaW5kZXgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7S0FHTUEsSzs7O0FBQ0Ysc0JBQWM7QUFBQTs7QUFBQTs7QUFFVixlQUFLQyxLQUFMLEdBQWM7QUFDVkMsb0JBQU8sRUFERztBQUVWQyx3QkFBVztBQUZELFVBQWQ7QUFGVTtBQU1iOzs7OzZDQUVtQjtBQUNoQixpQkFBSUMsVUFBVSxJQUFkO0FBQ0FDLHFCQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDQSxpQkFBSUYsVUFBVSxJQUFkO0FBQ0FHLG9CQUFPQyxFQUFQLENBQVUsU0FBVixFQUFxQixVQUFTQyxJQUFULEVBQWU7QUFDaENKLHlCQUFRQyxHQUFSLENBQVksZUFBWixFQUE2QkcsSUFBN0I7QUFDQSxzQkFBSyxJQUFJQyxHQUFULElBQWdCRCxJQUFoQixFQUFzQjtBQUNsQix5QkFBSUEsS0FBS0MsR0FBTCxNQUFjLENBQWxCLEVBQXFCO0FBQ2pCLGdDQUFPRCxLQUFLQyxHQUFMLENBQVA7QUFDSDtBQUNEO0FBQ0EseUJBQUlELEtBQUtDLEdBQUwsTUFBYyxJQUFsQixFQUF3QjtBQUNwQixnQ0FBT0QsS0FBS0MsR0FBTCxDQUFQO0FBQ0g7QUFDSjtBQUNELHdCQUFPRCxLQUFLRSxTQUFMLENBQVA7QUFDQVAseUJBQVFRLFFBQVIsQ0FBaUI7QUFDYlYsNEJBQU9PLElBRE07QUFFYk4sZ0NBQVdVLE9BQU9DLElBQVAsQ0FBWUwsSUFBWjtBQUZFLGtCQUFqQixFQUdHLFVBQVVBLElBQVYsRUFBZ0IsQ0FFbEIsQ0FMRDtBQU1BTCx5QkFBUVcsV0FBUjtBQUNILGNBbkJEO0FBb0JBUixvQkFBT1MsSUFBUCxDQUFZLFVBQVo7QUFDSDs7O2tDQUVRO0FBQUE7O0FBQ0wsb0JBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSixrQkFESjtBQUtLLHNCQUFLZixLQUFMLENBQVdFLFNBQVgsQ0FBcUJjLEdBQXJCLENBQXlCLFVBQUNQLEdBQUQsRUFBTVEsS0FBTixFQUFnQjtBQUN0Q2IsNkJBQVFDLEdBQVIsQ0FBWUksR0FBWjtBQUNKLDRCQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFLQTtBQUFMLDBCQURBO0FBRUE7QUFBQTtBQUFBO0FBQUssb0NBQUtULEtBQUwsQ0FBV0MsS0FBWCxDQUFpQlEsR0FBakIsQ0FBTDtBQUFBO0FBQUEsMEJBRkE7QUFHQTtBQUFBO0FBQUE7QUFBSyxvQ0FBS1QsS0FBTCxDQUFXQyxLQUFYLENBQWlCUSxHQUFqQixNQUEwQixDQUExQixHQUE4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUE5QixHQUFpRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXREO0FBSEEsc0JBREE7QUFPSCxrQkFUSTtBQUxMLGNBREo7QUFrQkg7Ozs7R0F2RGUsZ0JBQU1TLFM7O21CQXlEWG5CLEsiLCJmaWxlIjoiMC41MTJjMjdhMmJiNDY1ZTYyNzg0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBMb2JieSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAge1xuICAgICAgICAgICAgcm9vbXM6IHt9LFxuICAgICAgICAgICAgcm9vbU5hbWVzOiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnQgZGlkIG1vdW50XCIpO1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICAgIHNvY2tldC5vbihcInJlY2VpdmVcIiwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDVVJSRU5UIERBVEE6XCIsIGRhdGEpO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVtrZXldID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vdGhpcyBtaWdodCBiZSBoYWNreS0gY2hlY2sgd2h5IHRoZSBzZXJ2ZXIgaXMgc3RvcmluZyBhIG51bGwgdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVtrZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsZXRlIGRhdGFbdW5kZWZpbmVkXTtcbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHJvb21zOiBkYXRhLFxuICAgICAgICAgICAgICAgIHJvb21OYW1lczogT2JqZWN0LmtleXMoZGF0YSlcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb250ZXh0LmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIHNvY2tldC5lbWl0KFwiZ2V0Um9vbXNcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlJvb21uYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPk51bWJlciBvZiBQbGF5ZXJzPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJvb21OYW1lcy5tYXAoKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+e2tleX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5yb29tc1trZXldfS8yPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUucm9vbXNba2V5XSA9PT0gMiA/IDxwPlJvb20gRnVsbDwvcD4gOiA8YnV0dG9uPkpvaW4gR2FtZTwvYnV0dG9uPn08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvYmJ5XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9HYW1lL0xvYmJ5LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=