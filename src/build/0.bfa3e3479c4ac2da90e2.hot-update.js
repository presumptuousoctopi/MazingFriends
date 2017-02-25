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
	  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _LoginView2.default, onEnter: requireAuth }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/game', component: _GameView2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _HomeView2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/*', component: _LoginView2.default })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJyZXF1aXJlQXV0aCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXh0U3RhdGUiLCJyZXBsYWNlU3RhdGUiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLHVCQUNFO0FBQUE7QUFBQSxLQUFRLG9DQUFSO0FBQ0EsdURBQU8sTUFBSyxHQUFaLEVBQWdCLDhCQUFoQixFQUFrQyxTQUFTQSxXQUEzQyxHQURBO0FBRUUsdURBQU8sTUFBSyxPQUFaLEVBQW9CLDZCQUFwQixHQUZGO0FBR0EsdURBQU8sTUFBSyxPQUFaLEVBQW9CLDZCQUFwQixHQUhBO0FBSUUsdURBQU8sTUFBSyxJQUFaLEVBQWlCLDhCQUFqQjtBQUpGLEVBREYsRUFPSUMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQVBKOztBQVVBLFVBQVNGLFdBQVQsQ0FBcUJHLFNBQXJCLEVBQWdDQyxZQUFoQyxFQUE4QztBQUM1Q0MsV0FBUUMsR0FBUixDQUFZLHNCQUFaO0FBQ0EsT0FBSyxDQUFDLENBQUNDLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLENBQThCLE1BQTlCLENBQVAsRUFBK0M7QUFDN0NKLGFBQVFDLEdBQVIsQ0FBWSxvQ0FBWjtBQUNBRixrQkFBYTtBQUNYTSxpQkFBVTtBQURDLE1BQWI7QUFHRDtBQUNGLEciLCJmaWxlIjoiMC5iZmEzZTM0NzljNGFjMmRhOTBlMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBicm93c2VySGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmltcG9ydCBHYW1lIGZyb20gJy4vY29tcG9uZW50cy9HYW1lL0dhbWVWaWV3LmpzeCdcclxuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpblZpZXcuanN4J1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZS9Ib21lVmlldy5qc3gnXHJcbmltcG9ydCB7IEluZGV4UmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcblxyXG5yZW5kZXIoKFxyXG4gIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxyXG5cdFx0PFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtMb2dpbn0gb25FbnRlcj17cmVxdWlyZUF1dGh9IC8+XHJcbiAgICA8Um91dGUgcGF0aD1cIi9nYW1lXCIgY29tcG9uZW50PXtHYW1lfSAvPlxyXG5cdFx0PFJvdXRlIHBhdGg9XCIvaG9tZVwiIGNvbXBvbmVudD17SG9tZX0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPVwiLypcIiBjb21wb25lbnQ9e0xvZ2lufSAvPlxyXG5cdDwvUm91dGVyPlxyXG5cdCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gcmVxdWlyZUF1dGgobmV4dFN0YXRlLCByZXBsYWNlU3RhdGUpIHtcclxuICBjb25zb2xlLmxvZygnb3V0c2lkZSBpZiBzdGF0ZW1lbnQnKTtcclxuICBpZiAoICEhd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSApIHtcclxuICAgIGNvbnNvbGUubG9nKCdJbnNpZGUgaWYgc3RhdGVtZW50IGluIHJlcXVpcmVBdXRoJyk7XHJcbiAgICByZXBsYWNlU3RhdGUoe1xyXG4gICAgICBwYXRobmFtZTogJy9ob21lJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=