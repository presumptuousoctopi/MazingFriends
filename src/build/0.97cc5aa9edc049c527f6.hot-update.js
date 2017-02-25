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
	  _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _HomeView2.default })
	), document.getElementById('app'));
	
	function requireAuth(nextState, replaceState) {
	  console.log('outside if statement');
	  if (!!window.sessionStorage.getItem('user')) {
	    console.log('Inside if statement in requireAuth');
	    // replaceState({
	    //   nextPathName: nextState.location.pathName
	    // }, '/game');
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }
])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJyZXF1aXJlQXV0aCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXh0U3RhdGUiLCJyZXBsYWNlU3RhdGUiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSx1QkFDRTtBQUFBO0FBQUEsS0FBUSxvQ0FBUjtBQUNBLHVEQUFPLE1BQUssR0FBWixFQUFnQiw4QkFBaEIsRUFBa0MsU0FBU0EsV0FBM0MsR0FEQTtBQUVFLHVEQUFPLE1BQUssT0FBWixFQUFvQiw2QkFBcEIsR0FGRjtBQUdBLHVEQUFPLE1BQUssT0FBWixFQUFvQiw2QkFBcEI7QUFIQSxFQURGLEVBTUlDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FOSjs7QUFTQSxVQUFTRixXQUFULENBQXFCRyxTQUFyQixFQUFnQ0MsWUFBaEMsRUFBOEM7QUFDNUNDLFdBQVFDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBLE9BQUssQ0FBQyxDQUFDQyxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixDQUE4QixNQUE5QixDQUFQLEVBQStDO0FBQzdDSixhQUFRQyxHQUFSLENBQVksb0NBQVo7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNGLEciLCJmaWxlIjoiMC45N2NjNWFhOWVkYzA0OWM1MjdmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBicm93c2VySGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmltcG9ydCBHYW1lIGZyb20gJy4vY29tcG9uZW50cy9HYW1lL0dhbWVWaWV3LmpzeCdcclxuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpblZpZXcuanN4J1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZS9Ib21lVmlldy5qc3gnXHJcblxyXG5yZW5kZXIoKFxyXG4gIDxSb3V0ZXIgaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxyXG5cdFx0PFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtMb2dpbn0gb25FbnRlcj17cmVxdWlyZUF1dGh9IC8+XHJcbiAgICA8Um91dGUgcGF0aD1cIi9nYW1lXCIgY29tcG9uZW50PXtHYW1lfSAvPlxyXG5cdFx0PFJvdXRlIHBhdGg9XCIvaG9tZVwiIGNvbXBvbmVudD17SG9tZX0gLz5cclxuXHQ8L1JvdXRlcj5cclxuXHQpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcclxuKTtcclxuXHJcbmZ1bmN0aW9uIHJlcXVpcmVBdXRoKG5leHRTdGF0ZSwgcmVwbGFjZVN0YXRlKSB7XHJcbiAgY29uc29sZS5sb2coJ291dHNpZGUgaWYgc3RhdGVtZW50Jyk7XHJcbiAgaWYgKCAhIXdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykgKSB7XHJcbiAgICBjb25zb2xlLmxvZygnSW5zaWRlIGlmIHN0YXRlbWVudCBpbiByZXF1aXJlQXV0aCcpO1xyXG4gICAgLy8gcmVwbGFjZVN0YXRlKHtcclxuICAgIC8vICAgbmV4dFBhdGhOYW1lOiBuZXh0U3RhdGUubG9jYXRpb24ucGF0aE5hbWVcclxuICAgIC8vIH0sICcvZ2FtZScpO1xyXG4gIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9