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
	  _react2.default.createElement(_reactRouter.IndexRedirect, { to: true }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJyZXF1aXJlQXV0aCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXh0U3RhdGUiLCJyZXBsYWNlU3RhdGUiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLHVCQUNFO0FBQUE7QUFBQSxLQUFRLG9DQUFSO0FBQ0UsK0RBQWdCLFFBQWhCLEdBREY7QUFFQSx1REFBTyxNQUFLLEdBQVosRUFBZ0IsOEJBQWhCLEVBQWtDLFNBQVNBLFdBQTNDLEdBRkE7QUFHRSx1REFBTyxNQUFLLE9BQVosRUFBb0IsNkJBQXBCLEdBSEY7QUFJQSx1REFBTyxNQUFLLE9BQVosRUFBb0IsNkJBQXBCO0FBSkEsRUFERixFQU9JQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBUEo7O0FBVUEsVUFBU0YsV0FBVCxDQUFxQkcsU0FBckIsRUFBZ0NDLFlBQWhDLEVBQThDO0FBQzVDQyxXQUFRQyxHQUFSLENBQVksc0JBQVo7QUFDQSxPQUFLLENBQUMsQ0FBQ0MsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsQ0FBOEIsTUFBOUIsQ0FBUCxFQUErQztBQUM3Q0osYUFBUUMsR0FBUixDQUFZLG9DQUFaO0FBQ0FGLGtCQUFhO0FBQ1hNLGlCQUFVO0FBREMsTUFBYjtBQUdEO0FBQ0YsRyIsImZpbGUiOiIwLmQ3NTkwN2ZmYjUzMGJhMGFjZmE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQge1JvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGJyb3dzZXJIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9jb21wb25lbnRzL0dhbWUvR2FtZVZpZXcuanN4J1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luL0xvZ2luVmlldy5qc3gnXHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lL0hvbWVWaWV3LmpzeCdcclxuaW1wb3J0IHsgSW5kZXhSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuXHJcbnJlbmRlcigoXHJcbiAgPFJvdXRlciBoaXN0b3J5PXticm93c2VySGlzdG9yeX0+XHJcbiAgICA8IEluZGV4UmVkaXJlY3QgdG8gLz5cclxuXHRcdDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17TG9naW59IG9uRW50ZXI9e3JlcXVpcmVBdXRofSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9XCIvZ2FtZVwiIGNvbXBvbmVudD17R2FtZX0gLz5cclxuXHRcdDxSb3V0ZSBwYXRoPVwiL2hvbWVcIiBjb21wb25lbnQ9e0hvbWV9IC8+XHJcblx0PC9Sb3V0ZXI+XHJcblx0KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXHJcbik7XHJcblxyXG5mdW5jdGlvbiByZXF1aXJlQXV0aChuZXh0U3RhdGUsIHJlcGxhY2VTdGF0ZSkge1xyXG4gIGNvbnNvbGUubG9nKCdvdXRzaWRlIGlmIHN0YXRlbWVudCcpO1xyXG4gIGlmICggISF3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpICkge1xyXG4gICAgY29uc29sZS5sb2coJ0luc2lkZSBpZiBzdGF0ZW1lbnQgaW4gcmVxdWlyZUF1dGgnKTtcclxuICAgIHJlcGxhY2VTdGF0ZSh7XHJcbiAgICAgIHBhdGhuYW1lOiAnL2hvbWUnXHJcbiAgICB9KTtcclxuICB9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==