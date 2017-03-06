webpackHotUpdate(0,{

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
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
	
	var UserStats = function (_React$Component) {
	  _inherits(UserStats, _React$Component);
	
	  function UserStats() {
	    _classCallCheck(this, UserStats);
	
	    var _this = _possibleConstructorReturn(this, (UserStats.__proto__ || Object.getPrototypeOf(UserStats)).call(this));
	
	    _this.state = {
	      userStats: []
	    };
	    return _this;
	  }
	
	  _createClass(UserStats, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var context = this;
	      socket.emit("getUserStats", sessionStorage.getItem('user'));
	      socket.on("userStats", function (data) {
	        context.setState({
	          userStats: data
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'UserStats' },
	        _react2.default.createElement(
	          'table',
	          { className: 'statsTable' },
	          _react2.default.createElement(
	            'tr',
	            { className: 'statsHeaders' },
	            _react2.default.createElement(
	              'th',
	              null,
	              'Rank'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'Teammate'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'Level'
	            ),
	            _react2.default.createElement(
	              'th',
	              null,
	              'Time'
	            )
	          ),
	          this.state.userStats.map(function (userStatObj) {
	            return _react2.default.createElement(
	              'tr',
	              null,
	              _react2.default.createElement(
	                'td',
	                null,
	                userStatObj.id
	              ),
	              _react2.default.createElement(
	                'td',
	                null,
	                userStatObj.friend
	              ),
	              _react2.default.createElement(
	                'td',
	                null,
	                userStatObj.time
	              ),
	              _react2.default.createElement(
	                'td',
	                null,
	                userStatObj.level
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return UserStats;
	}(_react2.default.Component);
	
	exports.default = UserStats;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "UserStats.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL1VzZXJTdGF0cy5qc3g/NWY3MSJdLCJuYW1lcyI6WyJVc2VyU3RhdHMiLCJzdGF0ZSIsInVzZXJTdGF0cyIsImNvbnRleHQiLCJzb2NrZXQiLCJlbWl0Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwib24iLCJkYXRhIiwic2V0U3RhdGUiLCJtYXAiLCJ1c2VyU3RhdE9iaiIsImlkIiwiZnJpZW5kIiwidGltZSIsImxldmVsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0tBRU1BLFM7OztBQUNKLHdCQUFlO0FBQUE7O0FBQUE7O0FBRWIsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFXO0FBREEsTUFBYjtBQUZhO0FBS2Q7Ozs7eUNBQ21CO0FBQ2xCLFdBQUlDLFVBQVUsSUFBZDtBQUNBQyxjQUFPQyxJQUFQLENBQVksY0FBWixFQUE0QkMsZUFBZUMsT0FBZixDQUF1QixNQUF2QixDQUE1QjtBQUNBSCxjQUFPSSxFQUFQLENBQVUsV0FBVixFQUF1QixVQUFTQyxJQUFULEVBQWM7QUFDbkNOLGlCQUFRTyxRQUFSLENBQWlCO0FBQ2ZSLHNCQUFXTztBQURJLFVBQWpCO0FBR0QsUUFKRDtBQUtEOzs7OEJBQ1E7QUFDUCxjQUNFO0FBQUE7QUFBQSxXQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxhQUFPLFdBQVUsWUFBakI7QUFDRTtBQUFBO0FBQUEsZUFBSSxXQUFVLGNBQWQ7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkYsWUFERjtBQU9HLGdCQUFLUixLQUFMLENBQVdDLFNBQVgsQ0FBcUJTLEdBQXJCLENBQXlCLFVBQUNDLFdBQUQsRUFBaUI7QUFDekMsb0JBQ0k7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUtBLDZCQUFZQztBQUFqQixnQkFEQTtBQUVBO0FBQUE7QUFBQTtBQUFLRCw2QkFBWUU7QUFBakIsZ0JBRkE7QUFHQTtBQUFBO0FBQUE7QUFBS0YsNkJBQVlHO0FBQWpCLGdCQUhBO0FBSUE7QUFBQTtBQUFBO0FBQUtILDZCQUFZSTtBQUFqQjtBQUpBLGNBREo7QUFRRCxZQVRBO0FBUEg7QUFERixRQURGO0FBc0JEOzs7O0dBdkNxQixnQkFBTUMsUzs7bUJBMENmakIsUyIsImZpbGUiOiIwLjNjYTgzNjJhZWMwMmFmZTAxOGY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBVc2VyU3RhdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIgKClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlclN0YXRzOiBbXVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsZXQgY29udGV4dCA9IHRoaXM7XG4gICAgc29ja2V0LmVtaXQoXCJnZXRVc2VyU3RhdHNcIiwgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICBzb2NrZXQub24oXCJ1c2VyU3RhdHNcIiwgZnVuY3Rpb24oZGF0YSl7XG4gICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgdXNlclN0YXRzOiBkYXRhXG4gICAgICB9KVxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJVc2VyU3RhdHNcIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInN0YXRzVGFibGVcIj5cbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwic3RhdHNIZWFkZXJzXCI+XG4gICAgICAgICAgICA8dGg+UmFuazwvdGg+XG4gICAgICAgICAgICA8dGg+VGVhbW1hdGU8L3RoPlxuICAgICAgICAgICAgPHRoPkxldmVsPC90aD5cbiAgICAgICAgICAgIDx0aD5UaW1lPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnVzZXJTdGF0cy5tYXAoKHVzZXJTdGF0T2JqKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+e3VzZXJTdGF0T2JqLmlkfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt1c2VyU3RhdE9iai5mcmllbmR9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3VzZXJTdGF0T2JqLnRpbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3VzZXJTdGF0T2JqLmxldmVsfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclN0YXRzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvVXNlclN0YXRzLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=