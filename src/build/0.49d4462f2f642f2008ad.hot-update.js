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
	            friends: []
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
	                _react2.default.createElement(_FriendSearch2.default, null),
	                _react2.default.createElement(
	                    'table',
	                    { className: 'friendTable' },
	                    this.state.friends.map(function (data) {
	                        return _react2.default.createElement(
	                            'td',
	                            null,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0ZyaWVuZFZpZXcuanN4PzdkMjQiXSwibmFtZXMiOlsiRnJpZW5kVmlldyIsInN0YXRlIiwiZnJpZW5kcyIsImNvbnRleHQiLCJzb2NrZXQiLCJlbWl0Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwib24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwibWFwIiwiZnJpZW5kIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsVTs7O0FBQ0YsMkJBQWM7QUFBQTs7QUFBQTs7QUFFVixlQUFLQyxLQUFMLEdBQWE7QUFDVEMsc0JBQVM7QUFEQSxVQUFiO0FBRlU7QUFLYjs7Ozs2Q0FDbUI7QUFDaEIsaUJBQUlDLFVBQVUsSUFBZDtBQUNBQyxvQkFBT0MsSUFBUCxDQUFZLFlBQVosRUFBMEJDLGVBQWVDLE9BQWYsQ0FBdUIsTUFBdkIsQ0FBMUI7QUFDQUgsb0JBQU9JLEVBQVAsQ0FBVSxZQUFWLEVBQXdCLFVBQVNDLElBQVQsRUFBYztBQUNsQ0MseUJBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBTix5QkFBUVMsUUFBUixDQUFpQjtBQUNiViw4QkFBU087QUFESSxrQkFBakI7QUFHSCxjQUxEO0FBTUg7OztrQ0FDUTtBQUNMLG9CQUNJO0FBQUE7QUFBQSxtQkFBSyxXQUFVLFlBQWY7QUFDQSw0RUFEQTtBQUVJO0FBQUE7QUFBQSx1QkFBTyxXQUFVLGFBQWpCO0FBQ0ssMEJBQUtSLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQlcsR0FBbkIsQ0FBdUIsVUFBQ0osSUFBRCxFQUFVO0FBQzlCLGdDQUNJO0FBQUE7QUFBQTtBQUFLQSxrQ0FBS0s7QUFBViwwQkFESjtBQUdILHNCQUpBO0FBREw7QUFGSixjQURKO0FBWUg7Ozs7R0E5Qm9CLGdCQUFNQyxTOzttQkFnQ2hCZixVIiwiZmlsZSI6IjAuNDlkNDQ2MmYyZjY0MmYyMDA4YWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRnJpZW5kU2VhcmNoIGZyb20gJy4vRnJpZW5kU2VhcmNoJ1xuXG5jbGFzcyBGcmllbmRWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZyaWVuZHM6IFtdXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgc29ja2V0LmVtaXQoXCJnZXRGcmllbmRzXCIsIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgICAgIHNvY2tldC5vbihcImZyaWVuZERhdGFcIiwgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGZyaWVuZHM6IGRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIgKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRnJpZW5kVmlld1wiPlxuICAgICAgICAgICAgPEZyaWVuZFNlYXJjaC8+XG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZyaWVuZFRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZyaWVuZHMubWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZGF0YS5mcmllbmR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZyaWVuZFZpZXdcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvRnJpZW5kVmlldy5qc3giXSwic291cmNlUm9vdCI6IiJ9