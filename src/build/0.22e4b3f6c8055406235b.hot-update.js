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
	            friends: ['savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy', 'savy']
	        };
	        return _this;
	    }
	    // componentDidMount() {
	    //     let context = this;
	    //     socket.emit("getFriends", sessionStorage.getItem('user'));
	    //     socket.on("friendData", function(data){
	    //         console.log(data);
	    //         context.setState({
	    //             friends: data
	    //         })
	    //     });
	    // }
	
	
	    _createClass(FriendView, [{
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
	                            data /*.friend*/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0ZyaWVuZFZpZXcuanN4PzdkMjQiXSwibmFtZXMiOlsiRnJpZW5kVmlldyIsInN0YXRlIiwiZnJpZW5kcyIsIm1hcCIsImRhdGEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxVOzs7QUFDRiwyQkFBYztBQUFBOztBQUFBOztBQUVWLGVBQUtDLEtBQUwsR0FBYTtBQUNUQyxzQkFBUyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLE1BQWpDLEVBQXlDLE1BQXpDLEVBQWlELE1BQWpELEVBQXlELE1BQXpELEVBQWlFLE1BQWpFLEVBQXlFLE1BQXpFLEVBQWdGLE1BQWhGLEVBQXdGLE1BQXhGLEVBQWdHLE1BQWhHLEVBQXdHLE1BQXhHLEVBQStHLE1BQS9HLEVBQXVILE1BQXZILEVBQThILE1BQTlILEVBQXNJLE1BQXRJLEVBQThJLE1BQTlJLEVBQXNKLE1BQXRKLEVBQTZKLE1BQTdKLEVBQXFLLE1BQXJLLEVBQTZLLE1BQTdLLEVBQXFMLE1BQXJMO0FBREEsVUFBYjtBQUZVO0FBS2I7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7a0NBQ1U7QUFDTixvQkFDSTtBQUFBO0FBQUEsbUJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLHVCQUFLLFdBQVUsYUFBZjtBQUNLLDBCQUFLRCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQUNDLElBQUQsRUFBVTtBQUM5QixnQ0FDSTtBQUFBO0FBQUEsK0JBQUcsV0FBVSxRQUFiO0FBQXVCQSxpQ0FBdkIsQ0FBMkI7QUFBM0IsMEJBREo7QUFHSCxzQkFKQTtBQURMO0FBREosY0FESjtBQVdIOzs7O0dBN0JvQixnQkFBTUMsUzs7bUJBK0JoQkwsVSIsImZpbGUiOiIwLjIyZTRiM2Y2YzgwNTU0MDYyMzViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZyaWVuZFNlYXJjaCBmcm9tICcuL0ZyaWVuZFNlYXJjaCdcblxuY2xhc3MgRnJpZW5kVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmcmllbmRzOiBbJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5Jywnc2F2eScsICdzYXZ5Jywnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLF1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyAgICAgbGV0IGNvbnRleHQgPSB0aGlzO1xuICAgIC8vICAgICBzb2NrZXQuZW1pdChcImdldEZyaWVuZHNcIiwgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcbiAgICAvLyAgICAgc29ja2V0Lm9uKFwiZnJpZW5kRGF0YVwiLCBmdW5jdGlvbihkYXRhKXtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8vICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICAgICAgZnJpZW5kczogZGF0YVxuICAgIC8vICAgICAgICAgfSlcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRnJpZW5kVmlld1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnJpZW5kVGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZnJpZW5kcy5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnJpZW5kXCI+e2RhdGEvKi5mcmllbmQqL308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kVmlld1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9GcmllbmRWaWV3LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=