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
	                                        { to: "/game/" + key },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0pvaW5HYW1lLmpzeD9iZDIxIl0sIm5hbWVzIjpbIkxvYmJ5Iiwic3RhdGUiLCJyb29tcyIsInJvb21OYW1lcyIsImxldmVscyIsInVzZXJzIiwiam9pblJvb21CdXR0b24iLCJiaW5kIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJzb2NrZXQiLCJvbiIsImRhdGEiLCJrZXkiLCJ1bmRlZmluZWQiLCJzZXRTdGF0ZSIsIk9iamVjdCIsImtleXMiLCJlbWl0Iiwicm9vbSIsIndpbmRvdyIsIm1hcCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztLQUVNQSxLOzs7QUFDRixzQkFBYztBQUFBOztBQUFBOztBQUVWLGVBQUtDLEtBQUwsR0FBYztBQUNWQyxvQkFBTyxFQURHO0FBRVZDLHdCQUFXLEVBRkQ7QUFHVkMscUJBQVEsRUFIRTtBQUlWQyxvQkFBTztBQUpHLFVBQWQ7QUFNSCxlQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JDLElBQXBCLE9BQXRCO0FBUmE7QUFTYjs7Ozs2Q0FFbUI7QUFDaEIsaUJBQUlDLFVBQVUsSUFBZDtBQUNBQyxxQkFBUUMsR0FBUixDQUFZLGlDQUFaO0FBQ0NDLG9CQUFPQyxFQUFQLENBQVUsY0FBVixFQUEwQixVQUFTQyxJQUFULEVBQWU7QUFDcENKLHlCQUFRQyxHQUFSLENBQVksZUFBWixFQUE2QkcsSUFBN0I7QUFDRixzQkFBSyxJQUFJQyxHQUFULElBQWdCRCxLQUFLWCxLQUFyQixFQUE0QjtBQUN4Qix5QkFBSVcsS0FBS1gsS0FBTCxDQUFXWSxHQUFYLE1BQW9CLENBQXhCLEVBQTJCO0FBQ3ZCLGdDQUFPRCxLQUFLWCxLQUFMLENBQVdZLEdBQVgsQ0FBUDtBQUNIO0FBQ0Q7QUFDQSx5QkFBSUQsS0FBS1gsS0FBTCxDQUFXWSxHQUFYLE1BQW9CLElBQXhCLEVBQThCO0FBQzFCLGdDQUFPRCxLQUFLWCxLQUFMLENBQVdZLEdBQVgsQ0FBUDtBQUNIO0FBQ0o7QUFDRCx3QkFBT0QsS0FBS1gsS0FBTCxDQUFXYSxTQUFYLENBQVA7O0FBRUEsc0JBQUksSUFBSUQsR0FBUixJQUFlRCxLQUFLVCxNQUFwQixFQUE0QjtBQUN4Qix5QkFBR1MsS0FBS1QsTUFBTCxDQUFZVSxHQUFaLEtBQW9CLENBQXZCLEVBQTBCO0FBQ3RCRCw4QkFBS1QsTUFBTCxDQUFZVSxHQUFaLElBQW1CLE1BQW5CO0FBQ0g7QUFDRCx5QkFBR0QsS0FBS1QsTUFBTCxDQUFZVSxHQUFaLEtBQW9CLENBQXZCLEVBQTBCO0FBQ3RCRCw4QkFBS1QsTUFBTCxDQUFZVSxHQUFaLElBQW1CLFFBQW5CO0FBQ0g7QUFDRCx5QkFBR0QsS0FBS1QsTUFBTCxDQUFZVSxHQUFaLEtBQW9CLENBQXZCLEVBQTBCO0FBQ3RCRCw4QkFBS1QsTUFBTCxDQUFZVSxHQUFaLElBQW1CLE1BQW5CO0FBQ0g7QUFDSjs7QUFFRE4seUJBQVFRLFFBQVIsQ0FBaUI7QUFDYmQsNEJBQU9XLEtBQUtYLEtBREM7QUFFYkMsZ0NBQVdjLE9BQU9DLElBQVAsQ0FBWUwsS0FBS1gsS0FBakIsQ0FGRTtBQUdiRSw2QkFBUVMsS0FBS1QsTUFIQTtBQUliQyw0QkFBT1EsS0FBS1I7QUFKQyxrQkFBakI7QUFNRixjQS9CRDtBQWdDRE0sb0JBQU9RLElBQVAsQ0FBWSxhQUFaO0FBQ0g7Ozt3Q0FHY0MsSSxFQUFNO0FBQ2hCQyxvQkFBT1YsTUFBUCxDQUFjUSxJQUFkLENBQW1CLFVBQW5CLEVBQStCQyxJQUEvQjtBQUNKOzs7a0NBRVE7QUFBQTs7QUFDTCxvQkFDSTtBQUFBO0FBQUEsbUJBQUssV0FBVSxnQkFBZjtBQUNJO0FBQUE7QUFBQSx1QkFBTyxXQUFVLFlBQWpCO0FBQ0k7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLCtCQUFJLFdBQVUsY0FBZDtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSiwwQkFEQTtBQU9DLDhCQUFLbkIsS0FBTCxDQUFXRSxTQUFYLENBQXFCbUIsR0FBckIsQ0FBeUIsVUFBQ1IsR0FBRCxFQUFTO0FBQy9CTCxxQ0FBUUMsR0FBUixDQUFZSSxHQUFaO0FBQ0osb0NBQ0E7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUtBO0FBQUwsa0NBREo7QUFFSTtBQUFBO0FBQUE7QUFBSyw0Q0FBS2IsS0FBTCxDQUFXSSxLQUFYLENBQWlCUyxHQUFqQjtBQUFMLGtDQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUssNENBQUtiLEtBQUwsQ0FBV0csTUFBWCxDQUFrQlUsR0FBbEI7QUFBTCxrQ0FISjtBQUlLLHdDQUFLYixLQUFMLENBQVdDLEtBQVgsQ0FBaUJZLEdBQWpCLE1BQTBCLENBQTFCLEdBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQTlCLEdBQ0Q7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLDJDQUFNLElBQUksV0FBV0EsR0FBckI7QUFDSjtBQUFBO0FBQUEsK0NBQVEsU0FBUyxPQUFLUixjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixFQUErQk8sR0FBL0IsQ0FBakI7QUFBQTtBQUFBO0FBREk7QUFBSjtBQUxKLDhCQURBO0FBV0gsMEJBYkk7QUFQRDtBQURKO0FBREosY0FESjtBQTRCSDs7OztHQXBGZSxnQkFBTVMsUzs7bUJBdUZYdkIsSyIsImZpbGUiOiIwLjk0NTNmNmRiYmE1YmYxNTlmNzQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmNsYXNzIExvYmJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICB7XG4gICAgICAgICAgICByb29tczoge30sXG4gICAgICAgICAgICByb29tTmFtZXM6IFtdLFxuICAgICAgICAgICAgbGV2ZWxzOiB7fSxcbiAgICAgICAgICAgIHVzZXJzOiB7fVxuICAgICAgICB9XG4gICAgIHRoaXMuam9pblJvb21CdXR0b24gPSB0aGlzLmpvaW5Sb29tQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnQgZGlkIG1vdW50IGluIGpvaW5HYW1lXCIpO1xuICAgICAgICAgc29ja2V0Lm9uKFwicmVjZWl2ZVJvb21zXCIsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDVVJSRU5UIERBVEE6XCIsIGRhdGEpO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEucm9vbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yb29tc1trZXldID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhLnJvb21zW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vdGhpcyBtaWdodCBiZSBoYWNreS0gY2hlY2sgd2h5IHRoZSBzZXJ2ZXIgaXMgc3RvcmluZyBhIG51bGwgdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yb29tc1trZXldID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhLnJvb21zW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVsZXRlIGRhdGEucm9vbXNbdW5kZWZpbmVkXVxuXG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiBkYXRhLmxldmVscykge1xuICAgICAgICAgICAgICAgIGlmKGRhdGEubGV2ZWxzW2tleV0gPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmxldmVsc1trZXldID0gJ0Vhc3knO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihkYXRhLmxldmVsc1trZXldID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5sZXZlbHNba2V5XSA9ICdOb3JtYWwnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihkYXRhLmxldmVsc1trZXldID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5sZXZlbHNba2V5XSA9ICdIYXJkJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHJvb21zOiBkYXRhLnJvb21zLFxuICAgICAgICAgICAgICAgIHJvb21OYW1lczogT2JqZWN0LmtleXMoZGF0YS5yb29tcyksXG4gICAgICAgICAgICAgICAgbGV2ZWxzOiBkYXRhLmxldmVscyxcbiAgICAgICAgICAgICAgICB1c2VyczogZGF0YS51c2Vyc1xuICAgICAgICAgICAgIH0pXG4gICAgICAgICB9KTtcbiAgICAgICAgc29ja2V0LmVtaXQoXCJnZXRSb29tSW5mb1wiKTtcbiAgICB9XG5cblxuICAgIGpvaW5Sb29tQnV0dG9uKHJvb20pIHtcbiAgICAgICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnam9pblJvb20nLCByb29tKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRhYmxlQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIkxvYmJ5VGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiTG9iYnlIZWFkZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Um9vbTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VXNlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TGV2ZWw8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkpvaW48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yb29tTmFtZXMubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57a2V5fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3RoaXMuc3RhdGUudXNlcnNba2V5XX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmxldmVsc1trZXldfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yb29tc1trZXldID09PSAyID8gPHRkPlJvb20gRnVsbDwvdGQ+IDogXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PExpbmsgdG89e1wiL2dhbWUvXCIgKyBrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmpvaW5Sb29tQnV0dG9uLmJpbmQobnVsbCwga2V5KX0+Sm9pbiBSb29tPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+PC90ZD4gfVxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9iYnlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvSm9pbkdhbWUuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==