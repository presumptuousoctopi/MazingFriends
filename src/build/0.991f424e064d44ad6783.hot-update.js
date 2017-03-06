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
	                null,
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    'My Friends'
	                ),
	                _react2.default.createElement(FriendSearch, null),
	                this.state.friends.map(function (data) {
	                    return _react2.default.createElement(
	                        'h2',
	                        null,
	                        data.friend
	                    );
	                })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0ZyaWVuZFZpZXcuanN4PzdkMjQiXSwibmFtZXMiOlsiRnJpZW5kVmlldyIsInN0YXRlIiwiZnJpZW5kcyIsImNvbnRleHQiLCJzb2NrZXQiLCJlbWl0Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwib24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwibWFwIiwiZnJpZW5kIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0tBR01BLFU7OztBQUNGLDJCQUFjO0FBQUE7O0FBQUE7O0FBRVYsZUFBS0MsS0FBTCxHQUFhO0FBQ1RDLHNCQUFTO0FBREEsVUFBYjtBQUZVO0FBS2I7Ozs7NkNBQ21CO0FBQ2hCLGlCQUFJQyxVQUFVLElBQWQ7QUFDQUMsb0JBQU9DLElBQVAsQ0FBWSxZQUFaLEVBQTBCQyxlQUFlQyxPQUFmLENBQXVCLE1BQXZCLENBQTFCO0FBQ0FILG9CQUFPSSxFQUFQLENBQVUsWUFBVixFQUF3QixVQUFTQyxJQUFULEVBQWM7QUFDbENDLHlCQUFRQyxHQUFSLENBQVlGLElBQVo7QUFDQU4seUJBQVFTLFFBQVIsQ0FBaUI7QUFDYlYsOEJBQVNPO0FBREksa0JBQWpCO0FBR0gsY0FMRDtBQU1IOzs7a0NBQ1E7QUFDTCxvQkFDSTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBO0FBRUEsK0NBQUMsWUFBRCxPQUZBO0FBR0Msc0JBQUtSLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQlcsR0FBbkIsQ0FBdUIsVUFBQ0osSUFBRCxFQUFVO0FBQzlCLDRCQUNJO0FBQUE7QUFBQTtBQUFLQSw4QkFBS0s7QUFBVixzQkFESjtBQUdILGtCQUpBO0FBSEQsY0FESjtBQVdIOzs7O0dBN0JvQixnQkFBTUMsUzs7bUJBK0JoQmYsVSIsImZpbGUiOiIwLjk5MWY0MjRlMDY0ZDQ0YWQ2NzgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIEZyaWVuZFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZnJpZW5kczogW11cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgICBzb2NrZXQuZW1pdChcImdldEZyaWVuZHNcIiwgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICAgICAgc29ja2V0Lm9uKFwiZnJpZW5kRGF0YVwiLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZnJpZW5kczogZGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlciAoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMj5NeSBGcmllbmRzPC9oMj5cbiAgICAgICAgICAgIDxGcmllbmRTZWFyY2gvPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZnJpZW5kcy5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8aDI+e2RhdGEuZnJpZW5kfTwvaDI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kVmlld1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9GcmllbmRWaWV3LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=