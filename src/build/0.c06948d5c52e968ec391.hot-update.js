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
	                    _react2.default.createElement(_FriendSearch2.default, null),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0ZyaWVuZFZpZXcuanN4PzdkMjQiXSwibmFtZXMiOlsiRnJpZW5kVmlldyIsInN0YXRlIiwiZnJpZW5kcyIsIm1hcCIsImRhdGEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxVOzs7QUFDRiwyQkFBYztBQUFBOztBQUFBOztBQUVWLGVBQUtDLEtBQUwsR0FBYTtBQUNUQyxzQkFBUyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLE1BQWpDLEVBQXlDLE1BQXpDLEVBQWlELE1BQWpELEVBQXlELE1BQXpELEVBQWlFLE1BQWpFLEVBQXlFLE1BQXpFLEVBQWlGLE1BQWpGLEVBQXlGLE1BQXpGLEVBQWlHLE1BQWpHLEVBQXlHLE1BQXpHLEVBQWlILE1BQWpILEVBQXlILE1BQXpILEVBQWlJLE1BQWpJLEVBQXlJLE1BQXpJLEVBQWlKLE1BQWpKLEVBQXlKLE1BQXpKLEVBQWlLLE1BQWpLLEVBQXlLLE1BQXpLLEVBQWlMLE1BQWpMLEVBQXlMLE1BQXpMLEVBQWlNLE1BQWpNLEVBQXlNLE1BQXpNLEVBQWlOLE1BQWpOLEVBQXlOLE1BQXpOLEVBQWdPLE1BQWhPLEVBQXdPLE1BQXhPLEVBQWdQLE1BQWhQLEVBQXdQLE1BQXhQLEVBQStQLE1BQS9QLEVBQXVRLE1BQXZRLEVBQThRLE1BQTlRLEVBQXNSLE1BQXRSLEVBQThSLE1BQTlSLEVBQXNTLE1BQXRTLEVBQTZTLE1BQTdTLEVBQXFULE1BQXJULEVBQTZULE1BQTdULEVBQXFVLE1BQXJVO0FBREEsVUFBYjtBQUZVO0FBS2I7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7a0NBQ1U7QUFDTixvQkFDSTtBQUFBO0FBQUEsbUJBQUssV0FBVSxZQUFmO0FBQ0k7QUFBQTtBQUFBLHVCQUFLLFdBQVUsYUFBZjtBQUNJLGdGQURKO0FBRUssMEJBQUtELEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCLGdDQUNJO0FBQUE7QUFBQSwrQkFBRyxXQUFVLFFBQWI7QUFBdUJBLGlDQUF2QixDQUEyQjtBQUEzQiwwQkFESjtBQUdILHNCQUpBO0FBRkw7QUFESixjQURKO0FBWUg7Ozs7R0E5Qm9CLGdCQUFNQyxTOzttQkFnQ2hCTCxVIiwiZmlsZSI6IjAuYzA2OTQ4ZDVjNTJlOTY4ZWMzOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRnJpZW5kU2VhcmNoIGZyb20gJy4vRnJpZW5kU2VhcmNoJ1xuXG5jbGFzcyBGcmllbmRWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZyaWVuZHM6IFsnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsJ3NhdnknLCAnc2F2eScsICdzYXZ5JywgJ3NhdnknLCdzYXZ5JywgJ3NhdnknLCdzYXZ5JywgJ3NhdnknLCAnc2F2eScsICdzYXZ5Jywnc2F2eScsICdzYXZ5JywgJ3NhdnknLCAnc2F2eScsXVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vICAgICBsZXQgY29udGV4dCA9IHRoaXM7XG4gICAgLy8gICAgIHNvY2tldC5lbWl0KFwiZ2V0RnJpZW5kc1wiLCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xuICAgIC8vICAgICBzb2NrZXQub24oXCJmcmllbmREYXRhXCIsIGZ1bmN0aW9uKGRhdGEpe1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgLy8gICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAvLyAgICAgICAgICAgICBmcmllbmRzOiBkYXRhXG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGcmllbmRWaWV3XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcmllbmRUYWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8RnJpZW5kU2VhcmNoLz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZnJpZW5kcy5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZnJpZW5kXCI+e2RhdGEvKi5mcmllbmQqL308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kVmlld1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS9GcmllbmRWaWV3LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=