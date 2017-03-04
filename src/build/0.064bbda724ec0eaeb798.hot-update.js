webpackHotUpdate(0,{

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _FriendSearch = __webpack_require__(286);
	
	var _FriendSearch2 = _interopRequireDefault(_FriendSearch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FriendView = function (_React$Component) {
	    _inherits(FriendView, _React$Component);
	
	    function FriendView() {
	        _classCallCheck(this, FriendView);
	
	        var _this = _possibleConstructorReturn(this, (FriendView.__proto__ || Object.getPrototypeOf(FriendView)).call(this));
	
	        _this.state = {
	            friends: ['savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy']
	        };
	        return _this;
	    }
	
	    _createClass(FriendView, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var context = this;
	            socket.emit("getFriends", sessionStorage.getItem('user'));
	            socket.on("friendData", function (data) {
	                console.log(data);
	                context.setState({
	                    friends: data
	                });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'FriendView' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'friendTable' },
	                    this.state.friends.map(function (data) {
	                        return _react2.default.createElement(
	                            'p',
	                            { className: 'friend' },
	                            data.friend
	                        );
	                    })
	                )
	            );
	        }
	    }]);
	
	    return FriendView;
	}(_react2.default.Component);
	
	exports.default = FriendView;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "FriendView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0ZyaWVuZFZpZXcuanN4PzdkMjQiXSwibmFtZXMiOlsiRnJpZW5kVmlldyIsInN0YXRlIiwiZnJpZW5kcyIsImNvbnRleHQiLCJzb2NrZXQiLCJlbWl0Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwib24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwibWFwIiwiZnJpZW5kIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsVTs7O0FBQ0YsMkJBQWM7QUFBQTs7QUFBQTs7QUFFVixlQUFLQyxLQUFMLEdBQWE7QUFDVEMsc0JBQVMsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixNQUF6QixFQUFpQyxNQUFqQyxFQUF5QyxNQUF6QyxFQUFpRCxNQUFqRCxFQUF5RCxNQUF6RCxFQUFpRSxNQUFqRSxFQUF5RSxNQUF6RSxFQUFpRixNQUFqRixFQUF5RixNQUF6RixFQUFpRyxNQUFqRyxFQUF5RyxNQUF6RyxFQUFpSCxNQUFqSCxFQUF5SCxNQUF6SCxFQUFpSSxNQUFqSSxFQUF5SSxNQUF6SSxFQUFpSixNQUFqSixFQUF5SixNQUF6SixFQUFpSyxNQUFqSyxFQUF5SyxNQUF6SyxFQUFpTCxNQUFqTCxFQUF5TCxNQUF6TCxFQUFpTSxNQUFqTSxFQUF5TSxNQUF6TSxFQUFpTixNQUFqTixFQUF5TixNQUF6TixFQUFnTyxNQUFoTyxFQUF3TyxNQUF4TyxFQUFnUCxNQUFoUCxFQUF3UCxNQUF4UCxFQUErUCxNQUEvUCxFQUF1USxNQUF2USxFQUE4USxNQUE5USxFQUFzUixNQUF0UixFQUE4UixNQUE5UixFQUFzUyxNQUF0UyxFQUE2UyxNQUE3UyxFQUFxVCxNQUFyVCxFQUE2VCxNQUE3VCxFQUFxVSxNQUFyVTtBQURBLFVBQWI7QUFGVTtBQUtiOzs7OzZDQUNtQjtBQUNoQixpQkFBSUMsVUFBVSxJQUFkO0FBQ0FDLG9CQUFPQyxJQUFQLENBQVksWUFBWixFQUEwQkMsZUFBZUMsT0FBZixDQUF1QixNQUF2QixDQUExQjtBQUNBSCxvQkFBT0ksRUFBUCxDQUFVLFlBQVYsRUFBd0IsVUFBU0MsSUFBVCxFQUFjO0FBQ2xDQyx5QkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0FOLHlCQUFRUyxRQUFSLENBQWlCO0FBQ2JWLDhCQUFTTztBQURJLGtCQUFqQjtBQUdILGNBTEQ7QUFNSDs7O2tDQUNTO0FBQ04sb0JBQ0k7QUFBQTtBQUFBLG1CQUFLLFdBQVUsWUFBZjtBQUNJO0FBQUE7QUFBQSx1QkFBSyxXQUFVLGFBQWY7QUFDSywwQkFBS1IsS0FBTCxDQUFXQyxPQUFYLENBQW1CVyxHQUFuQixDQUF1QixVQUFDSixJQUFELEVBQVU7QUFDOUIsZ0NBQ0k7QUFBQTtBQUFBLCtCQUFHLFdBQVUsUUFBYjtBQUF1QkEsa0NBQUtLO0FBQTVCLDBCQURKO0FBR0gsc0JBSkE7QUFETDtBQURKLGNBREo7QUFXSDs7OztHQTdCb0IsZ0JBQU1DLFM7O21CQStCaEJmLFUiLCJmaWxlIjoiMC4wNjRiYmRhNzI0ZWMwZWFlYjc5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGcmllbmRTZWFyY2ggZnJvbSAnLi9GcmllbmRTZWFyY2gnXG5cbmNsYXNzIEZyaWVuZFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZnJpZW5kczogWydzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5Jywnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsJ3NhdnknLCAnc2F2eScsJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5JyxdXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgc29ja2V0LmVtaXQoXCJnZXRGcmllbmRzXCIsIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgICAgIHNvY2tldC5vbihcImZyaWVuZERhdGFcIiwgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGZyaWVuZHM6IGRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIgKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZyaWVuZFZpZXdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyaWVuZFRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZyaWVuZHMubWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZyaWVuZFwiPntkYXRhLmZyaWVuZH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kVmlld1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9GcmllbmRWaWV3LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=