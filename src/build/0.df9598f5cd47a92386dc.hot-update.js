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
	      userStats: [],
	      rank: 0
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
	            null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL1VzZXJTdGF0cy5qc3g/NWY3MSJdLCJuYW1lcyI6WyJVc2VyU3RhdHMiLCJzdGF0ZSIsInVzZXJTdGF0cyIsInJhbmsiLCJjb250ZXh0Iiwic29ja2V0IiwiZW1pdCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIm9uIiwiZGF0YSIsInNldFN0YXRlIiwibWFwIiwidXNlclN0YXRPYmoiLCJpZCIsImZyaWVuZCIsInRpbWUiLCJsZXZlbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztLQUVNQSxTOzs7QUFDSix3QkFBZTtBQUFBOztBQUFBOztBQUViLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxrQkFBVyxFQURBO0FBRVhDLGFBQU07QUFGSyxNQUFiO0FBRmE7QUFNZDs7Ozt5Q0FDbUI7QUFDbEIsV0FBSUMsVUFBVSxJQUFkO0FBQ0FDLGNBQU9DLElBQVAsQ0FBWSxjQUFaLEVBQTRCQyxlQUFlQyxPQUFmLENBQXVCLE1BQXZCLENBQTVCO0FBQ0FILGNBQU9JLEVBQVAsQ0FBVSxXQUFWLEVBQXVCLFVBQVNDLElBQVQsRUFBYztBQUNuQ04saUJBQVFPLFFBQVIsQ0FBaUI7QUFDZlQsc0JBQVdRO0FBREksVUFBakI7QUFHRCxRQUpEO0FBS0Q7Ozs4QkFDUTtBQUNQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGFBQU8sV0FBVSxZQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRixZQURGO0FBT0csZ0JBQUtULEtBQUwsQ0FBV0MsU0FBWCxDQUFxQlUsR0FBckIsQ0FBeUIsVUFBQ0MsV0FBRCxFQUFpQjtBQUN6QyxvQkFDSTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBS0EsNkJBQVlDO0FBQWpCLGdCQURBO0FBRUE7QUFBQTtBQUFBO0FBQUtELDZCQUFZRTtBQUFqQixnQkFGQTtBQUdBO0FBQUE7QUFBQTtBQUFLRiw2QkFBWUc7QUFBakIsZ0JBSEE7QUFJQTtBQUFBO0FBQUE7QUFBS0gsNkJBQVlJO0FBQWpCO0FBSkEsY0FESjtBQVFELFlBVEE7QUFQSDtBQURGLFFBREY7QUFzQkQ7Ozs7R0F4Q3FCLGdCQUFNQyxTOzttQkEyQ2ZsQixTIiwiZmlsZSI6IjAuZGY5NTk4ZjVjZDQ3YTkyMzg2ZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFVzZXJTdGF0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlciAoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyU3RhdHM6IFtdLFxuICAgICAgcmFuazogMFxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsZXQgY29udGV4dCA9IHRoaXM7XG4gICAgc29ja2V0LmVtaXQoXCJnZXRVc2VyU3RhdHNcIiwgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICBzb2NrZXQub24oXCJ1c2VyU3RhdHNcIiwgZnVuY3Rpb24oZGF0YSl7XG4gICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgdXNlclN0YXRzOiBkYXRhXG4gICAgICB9KVxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJVc2VyU3RhdHNcIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInN0YXRzVGFibGVcIj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UmFuazwvdGg+XG4gICAgICAgICAgICA8dGg+VGVhbW1hdGU8L3RoPlxuICAgICAgICAgICAgPHRoPkxldmVsPC90aD5cbiAgICAgICAgICAgIDx0aD5UaW1lPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnVzZXJTdGF0cy5tYXAoKHVzZXJTdGF0T2JqKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQ+e3VzZXJTdGF0T2JqLmlkfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt1c2VyU3RhdE9iai5mcmllbmR9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3VzZXJTdGF0T2JqLnRpbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e3VzZXJTdGF0T2JqLmxldmVsfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclN0YXRzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvVXNlclN0YXRzLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=