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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0pvaW5HYW1lLmpzeD9iZDIxIl0sIm5hbWVzIjpbIkxvYmJ5Iiwic3RhdGUiLCJyb29tcyIsInJvb21OYW1lcyIsImxldmVscyIsInVzZXJzIiwiam9pblJvb21CdXR0b24iLCJiaW5kIiwibnVtYmVyVG9MZXZlbCIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwic29ja2V0Iiwib24iLCJkYXRhIiwia2V5IiwidW5kZWZpbmVkIiwic2V0U3RhdGUiLCJPYmplY3QiLCJrZXlzIiwiZW1pdCIsInJvb20iLCJ3aW5kb3ciLCJtYXAiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7S0FFTUEsSzs7O0FBQ0Ysc0JBQWM7QUFBQTs7QUFBQTs7QUFFVixlQUFLQyxLQUFMLEdBQWM7QUFDVkMsb0JBQU8sRUFERztBQUVWQyx3QkFBVyxFQUZEO0FBR1ZDLHFCQUFRLEVBSEU7QUFJVkMsb0JBQU87QUFKRyxVQUFkO0FBTUgsZUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLGVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIsT0FBckI7QUFUYTtBQVViOzs7OzZDQUVtQjtBQUNoQixpQkFBSUUsVUFBVSxJQUFkO0FBQ0FDLHFCQUFRQyxHQUFSLENBQVksaUNBQVo7QUFDQ0Msb0JBQU9DLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFVBQVNDLElBQVQsRUFBZTtBQUNwQ0oseUJBQVFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCRyxJQUE3QjtBQUNGLHNCQUFLLElBQUlDLEdBQVQsSUFBZ0JELEtBQUtaLEtBQXJCLEVBQTRCO0FBQ3hCLHlCQUFJWSxLQUFLWixLQUFMLENBQVdhLEdBQVgsTUFBb0IsQ0FBeEIsRUFBMkI7QUFDdkIsZ0NBQU9ELEtBQUtaLEtBQUwsQ0FBV2EsR0FBWCxDQUFQO0FBQ0g7QUFDRDtBQUNBLHlCQUFJRCxLQUFLWixLQUFMLENBQVdhLEdBQVgsTUFBb0IsSUFBeEIsRUFBOEI7QUFDMUIsZ0NBQU9ELEtBQUtaLEtBQUwsQ0FBV2EsR0FBWCxDQUFQO0FBQ0g7QUFDSjtBQUNELHdCQUFPRCxLQUFLWixLQUFMLENBQVdjLFNBQVgsQ0FBUDtBQUNBUCx5QkFBUVEsUUFBUixDQUFpQjtBQUNiZiw0QkFBT1ksS0FBS1osS0FEQztBQUViQyxnQ0FBV2UsT0FBT0MsSUFBUCxDQUFZTCxLQUFLWixLQUFqQixDQUZFO0FBR2JHLDRCQUFPUyxLQUFLVDtBQUhDLGtCQUFqQjtBQUtGLGNBakJEO0FBa0JETyxvQkFBT1EsSUFBUCxDQUFZLGFBQVo7QUFDSDs7O3VDQUVhaEIsTSxFQUFRO0FBQ2xCLGtCQUFJLElBQUlXLEdBQVIsSUFBZVgsTUFBZixFQUF1QjtBQUNuQixxQkFBR0EsT0FBT1csR0FBUCxNQUFnQixDQUFuQixFQUFzQjtBQUNsQlgsNEJBQU9XLEdBQVAsTUFBZ0IsTUFBaEI7QUFDSDtBQUNELHFCQUFHWCxPQUFPVyxHQUFQLE1BQWdCLENBQW5CLEVBQXNCO0FBQ2xCWCw0QkFBT1csR0FBUCxNQUFnQixRQUFoQjtBQUNIO0FBQ0QscUJBQUdYLE9BQU9XLEdBQVAsTUFBZ0IsQ0FBbkIsRUFBc0I7QUFDbEJYLDRCQUFPVyxHQUFQLE1BQWdCLE1BQWhCO0FBQ0g7QUFDSjtBQUNELG9CQUFPWCxNQUFQO0FBQ0g7Ozt3Q0FFY2lCLEksRUFBTTtBQUNoQkMsb0JBQU9WLE1BQVAsQ0FBY1EsSUFBZCxDQUFtQixVQUFuQixFQUErQkMsSUFBL0I7QUFDSjs7O2tDQUVRO0FBQUE7O0FBQ0wsb0JBQ0k7QUFBQTtBQUFBLG1CQUFLLFdBQVUsZ0JBQWY7QUFDSTtBQUFBO0FBQUEsdUJBQU8sV0FBVSxZQUFqQjtBQUNJO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREo7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSiwwQkFEQTtBQU9DLDhCQUFLcEIsS0FBTCxDQUFXRSxTQUFYLENBQXFCb0IsR0FBckIsQ0FBeUIsVUFBQ1IsR0FBRCxFQUFTO0FBQy9CTCxxQ0FBUUMsR0FBUixDQUFZSSxHQUFaO0FBQ0osb0NBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUtBO0FBQUwsa0NBREE7QUFFQTtBQUFBO0FBQUE7QUFBSyw0Q0FBS2QsS0FBTCxDQUFXSSxLQUFYLENBQWlCVSxHQUFqQjtBQUFMLGtDQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUssNENBQUtkLEtBQUwsQ0FBV0csTUFBWCxDQUFrQlcsR0FBbEI7QUFBTCxrQ0FIQTtBQUlDLHdDQUFLZCxLQUFMLENBQVdDLEtBQVgsQ0FBaUJhLEdBQWpCLE1BQTBCLENBQTFCLEdBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQTlCLEdBQW1EO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSwyQ0FBTSxJQUFHLE9BQVQ7QUFBaUI7QUFBQTtBQUFBLCtDQUFRLFNBQVMsT0FBS1QsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsRUFBK0JRLEdBQS9CLENBQWpCO0FBQUE7QUFBQTtBQUFqQjtBQUFKO0FBSnBELDhCQURBO0FBUUgsMEJBVkk7QUFQRDtBQURKO0FBREosY0FESjtBQXlCSDs7OztHQWxGZSxnQkFBTVMsUzs7bUJBcUZYeEIsSyIsImZpbGUiOiIwLmVhNzA4OGE5OTc4YWRhZDFlODM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmNsYXNzIExvYmJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICB7XG4gICAgICAgICAgICByb29tczoge30sXG4gICAgICAgICAgICByb29tTmFtZXM6IFtdLFxuICAgICAgICAgICAgbGV2ZWxzOiB7fSxcbiAgICAgICAgICAgIHVzZXJzOiB7fVxuICAgICAgICB9XG4gICAgIHRoaXMuam9pblJvb21CdXR0b24gPSB0aGlzLmpvaW5Sb29tQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgIHRoaXMubnVtYmVyVG9MZXZlbCA9IHRoaXMubnVtYmVyVG9MZXZlbC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IGRpZCBtb3VudCBpbiBqb2luR2FtZVwiKTtcbiAgICAgICAgIHNvY2tldC5vbihcInJlY2VpdmVSb29tc1wiLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ1VSUkVOVCBEQVRBOlwiLCBkYXRhKTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhLnJvb21zKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucm9vbXNba2V5XSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGF0YS5yb29tc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3RoaXMgbWlnaHQgYmUgaGFja3ktIGNoZWNrIHdoeSB0aGUgc2VydmVyIGlzIHN0b3JpbmcgYSBudWxsIHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucm9vbXNba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZGF0YS5yb29tc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhLnJvb21zW3VuZGVmaW5lZF1cbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHJvb21zOiBkYXRhLnJvb21zLFxuICAgICAgICAgICAgICAgIHJvb21OYW1lczogT2JqZWN0LmtleXMoZGF0YS5yb29tcyksXG4gICAgICAgICAgICAgICAgdXNlcnM6IGRhdGEudXNlcnNcbiAgICAgICAgICAgICB9KVxuICAgICAgICAgfSk7XG4gICAgICAgIHNvY2tldC5lbWl0KFwiZ2V0Um9vbUluZm9cIik7XG4gICAgfVxuXG4gICAgbnVtYmVyVG9MZXZlbChsZXZlbHMpIHtcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gbGV2ZWxzKSB7XG4gICAgICAgICAgICBpZihsZXZlbHNba2V5XSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGxldmVsc1trZXldID09PSAnRWFzeSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihsZXZlbHNba2V5XSA9PT0gMikge1xuICAgICAgICAgICAgICAgIGxldmVsc1trZXldID09PSAnTm9ybWFsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGxldmVsc1trZXldID09PSAzKSB7XG4gICAgICAgICAgICAgICAgbGV2ZWxzW2tleV0gPT09ICdIYXJkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGV2ZWxzO1xuICAgIH1cblxuICAgIGpvaW5Sb29tQnV0dG9uKHJvb20pIHtcbiAgICAgICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnam9pblJvb20nLCByb29tKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRhYmxlQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIkxvYmJ5VGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Um9vbTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+VXNlcjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TGV2ZWw8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkpvaW48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yb29tTmFtZXMubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntrZXl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLnVzZXJzW2tleV19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLmxldmVsc1trZXldfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJvb21zW2tleV0gPT09IDIgPyA8dGQ+Um9vbSBGdWxsPC90ZD4gOiA8dGQ+PExpbmsgdG89XCIvZ2FtZVwiPjxidXR0b24gb25DbGljaz17dGhpcy5qb2luUm9vbUJ1dHRvbi5iaW5kKG51bGwsIGtleSl9PkpvaW4gUm9vbTwvYnV0dG9uPjwvTGluaz48L3RkPiB9XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2JieVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9Kb2luR2FtZS5qc3giXSwic291cmNlUm9vdCI6IiJ9