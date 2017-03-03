webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(99);
	
	var _reactRouter = __webpack_require__(189);
	
	var _GameView = __webpack_require__(244);
	
	var _GameView2 = _interopRequireDefault(_GameView);
	
	var _LoginView = __webpack_require__(279);
	
	var _LoginView2 = _interopRequireDefault(_LoginView);
	
	var _HomeView = __webpack_require__(283);
	
	var _HomeView2 = _interopRequireDefault(_HomeView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _LoginView2.default, onEnter: checkState }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/game/:roomname', component: _GameView2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _HomeView2.default, onEnter: requireAuth }),
	  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _LoginView2.default })
	), document.getElementById('app'));
	
	function requireAuth(nextState, replaceState) {
	  console.log(nextState);
	  if (!window.sessionStorage.getItem('user')) {
	    console.log('Inside if statement in requireAuth');
	    replaceState({
	      pathname: '/'
	    });
	  }
	};
	
	function checkState(nextState, replaceState) {
	
	  if (window.sessionStorage.getItem('user')) {
	    console.log('already authenticated');
	    replaceState({
	      pathname: '/home'
	    });
	  }
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }
])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJjaGVja1N0YXRlIiwicmVxdWlyZUF1dGgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibmV4dFN0YXRlIiwicmVwbGFjZVN0YXRlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSx1QkFDRTtBQUFBO0FBQUEsS0FBUSxvQ0FBUjtBQUNJLHVEQUFPLE1BQUssR0FBWixFQUFnQiw4QkFBaEIsRUFBa0MsU0FBU0EsVUFBM0MsR0FESjtBQUVJLHVEQUFPLE1BQUssaUJBQVosRUFBOEIsNkJBQTlCLEdBRko7QUFHQSx1REFBTyxNQUFLLE9BQVosRUFBb0IsNkJBQXBCLEVBQXFDLFNBQVNDLFdBQTlDLEdBSEE7QUFJRSx1REFBTyxNQUFLLEdBQVosRUFBZ0IsOEJBQWhCO0FBSkYsRUFERixFQU9JQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBUEo7O0FBVUEsVUFBU0YsV0FBVCxDQUFxQkcsU0FBckIsRUFBZ0NDLFlBQWhDLEVBQThDO0FBQzVDQyxXQUFRQyxHQUFSLENBQVlILFNBQVo7QUFDQSxPQUFLLENBQUNJLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLENBQThCLE1BQTlCLENBQU4sRUFBOEM7QUFDNUNKLGFBQVFDLEdBQVIsQ0FBWSxvQ0FBWjtBQUNBRixrQkFBYTtBQUNYTSxpQkFBVTtBQURDLE1BQWI7QUFHRDtBQUNGOztBQUVELFVBQVNYLFVBQVQsQ0FBb0JJLFNBQXBCLEVBQStCQyxZQUEvQixFQUE2Qzs7QUFFM0MsT0FBS0csT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsQ0FBOEIsTUFBOUIsQ0FBTCxFQUE2QztBQUMzQ0osYUFBUUMsR0FBUixDQUFZLHVCQUFaO0FBQ0FGLGtCQUFhO0FBQ1hNLGlCQUFVO0FBREMsTUFBYjtBQUdEO0FBQ0YsRSIsImZpbGUiOiIwLjM5N2JkNzlhYjM4YWZmNTBhMTczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7Um91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgYnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmltcG9ydCBHYW1lIGZyb20gJy4vY29tcG9uZW50cy9HYW1lL0dhbWVWaWV3LmpzeCdcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4vTG9naW5WaWV3LmpzeCdcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lL0hvbWVWaWV3LmpzeCdcbmltcG9ydCB7IEluZGV4UmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbnJlbmRlcigoXG4gIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxuICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtMb2dpbn0gb25FbnRlcj17Y2hlY2tTdGF0ZX0vPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvZ2FtZS86cm9vbW5hbWVcIiBjb21wb25lbnQ9e0dhbWV9IC8+XG5cdFx0PFJvdXRlIHBhdGg9XCIvaG9tZVwiIGNvbXBvbmVudD17SG9tZX0gb25FbnRlcj17cmVxdWlyZUF1dGh9Lz5cbiAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e0xvZ2lufSAvPlxuXHQ8L1JvdXRlcj5cblx0KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG5mdW5jdGlvbiByZXF1aXJlQXV0aChuZXh0U3RhdGUsIHJlcGxhY2VTdGF0ZSkge1xuICBjb25zb2xlLmxvZyhuZXh0U3RhdGUpO1xuICBpZiAoICF3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpICkge1xuICAgIGNvbnNvbGUubG9nKCdJbnNpZGUgaWYgc3RhdGVtZW50IGluIHJlcXVpcmVBdXRoJyk7XG4gICAgcmVwbGFjZVN0YXRlKHtcbiAgICAgIHBhdGhuYW1lOiAnLydcbiAgICB9KTtcbiAgfVxufTtcblxuZnVuY3Rpb24gY2hlY2tTdGF0ZShuZXh0U3RhdGUsIHJlcGxhY2VTdGF0ZSkge1xuXG4gIGlmICggd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSApIHtcbiAgICBjb25zb2xlLmxvZygnYWxyZWFkeSBhdXRoZW50aWNhdGVkJyk7XG4gICAgcmVwbGFjZVN0YXRlKHtcbiAgICAgIHBhdGhuYW1lOiAnL2hvbWUnXG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9