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
	
	var _LoginView = __webpack_require__(278);
	
	var _LoginView2 = _interopRequireDefault(_LoginView);
	
	var _HomeView = __webpack_require__(282);
	
	var _HomeView2 = _interopRequireDefault(_HomeView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRouter.Router,
	  { history: _reactRouter.browserHistory },
	  _react2.default.createElement(_reactRouter.IndexRedirect, { to: '/' }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _LoginView2.default, onEnter: requireAuth }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/game', component: _GameView2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _HomeView2.default })
	), document.getElementById('app'));
	
	function requireAuth(nextState, replaceState) {
	  console.log('outside if statement');
	  if (!!window.sessionStorage.getItem('user')) {
	    console.log('Inside if statement in requireAuth');
	    replaceState({
	      pathname: '/home'
	    });
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }
])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJyZXF1aXJlQXV0aCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXh0U3RhdGUiLCJyZXBsYWNlU3RhdGUiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLHVCQUNFO0FBQUE7QUFBQSxLQUFRLG9DQUFSO0FBQ0UsK0RBQWdCLElBQUcsR0FBbkIsR0FERjtBQUVBLHVEQUFPLE1BQUssR0FBWixFQUFnQiw4QkFBaEIsRUFBa0MsU0FBU0EsV0FBM0MsR0FGQTtBQUdFLHVEQUFPLE1BQUssT0FBWixFQUFvQiw2QkFBcEIsR0FIRjtBQUlBLHVEQUFPLE1BQUssT0FBWixFQUFvQiw2QkFBcEI7QUFKQSxFQURGLEVBT0lDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FQSjs7QUFVQSxVQUFTRixXQUFULENBQXFCRyxTQUFyQixFQUFnQ0MsWUFBaEMsRUFBOEM7QUFDNUNDLFdBQVFDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBLE9BQUssQ0FBQyxDQUFDQyxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixDQUE4QixNQUE5QixDQUFQLEVBQStDO0FBQzdDSixhQUFRQyxHQUFSLENBQVksb0NBQVo7QUFDQUYsa0JBQWE7QUFDWE0saUJBQVU7QUFEQyxNQUFiO0FBR0Q7QUFDRixHIiwiZmlsZSI6IjAuMWIzNTliZmY4MzUzOTNhNGZlOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7Um91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgYnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcblxyXG5pbXBvcnQgR2FtZSBmcm9tICcuL2NvbXBvbmVudHMvR2FtZS9HYW1lVmlldy5qc3gnXHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvTG9naW4vTG9naW5WaWV3LmpzeCdcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUvSG9tZVZpZXcuanN4J1xyXG5pbXBvcnQgeyBJbmRleFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5cclxucmVuZGVyKChcclxuICA8Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fT5cclxuICAgIDwgSW5kZXhSZWRpcmVjdCB0bz1cIi9cIi8+XHJcblx0XHQ8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0xvZ2lufSBvbkVudGVyPXtyZXF1aXJlQXV0aH0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPVwiL2dhbWVcIiBjb21wb25lbnQ9e0dhbWV9IC8+XHJcblx0XHQ8Um91dGUgcGF0aD1cIi9ob21lXCIgY29tcG9uZW50PXtIb21lfSAvPlxyXG5cdDwvUm91dGVyPlxyXG5cdCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gcmVxdWlyZUF1dGgobmV4dFN0YXRlLCByZXBsYWNlU3RhdGUpIHtcclxuICBjb25zb2xlLmxvZygnb3V0c2lkZSBpZiBzdGF0ZW1lbnQnKTtcclxuICBpZiAoICEhd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSApIHtcclxuICAgIGNvbnNvbGUubG9nKCdJbnNpZGUgaWYgc3RhdGVtZW50IGluIHJlcXVpcmVBdXRoJyk7XHJcbiAgICByZXBsYWNlU3RhdGUoe1xyXG4gICAgICBwYXRobmFtZTogJy9ob21lJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=