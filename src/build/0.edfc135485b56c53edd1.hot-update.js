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
	    replaceState({
	      nextPathName: nextState.location.pathName
	    }, '/home');
	  }
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }
])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJyZXF1aXJlQXV0aCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXh0U3RhdGUiLCJyZXBsYWNlU3RhdGUiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwibmV4dFBhdGhOYW1lIiwibG9jYXRpb24iLCJwYXRoTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsdUJBQ0U7QUFBQTtBQUFBLEtBQVEsb0NBQVI7QUFDQSx1REFBTyxNQUFLLEdBQVosRUFBZ0IsOEJBQWhCLEVBQWtDLFNBQVNBLFdBQTNDLEdBREE7QUFFRSx1REFBTyxNQUFLLE9BQVosRUFBb0IsNkJBQXBCLEdBRkY7QUFHQSx1REFBTyxNQUFLLE9BQVosRUFBb0IsNkJBQXBCO0FBSEEsRUFERixFQU1JQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBTko7O0FBU0EsVUFBU0YsV0FBVCxDQUFxQkcsU0FBckIsRUFBZ0NDLFlBQWhDLEVBQThDO0FBQzVDQyxXQUFRQyxHQUFSLENBQVksc0JBQVo7QUFDQSxPQUFLLENBQUMsQ0FBQ0MsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsQ0FBOEIsTUFBOUIsQ0FBUCxFQUErQztBQUM3Q0osYUFBUUMsR0FBUixDQUFZLG9DQUFaO0FBQ0FGLGtCQUFhO0FBQ1hNLHFCQUFjUCxVQUFVUSxRQUFWLENBQW1CQztBQUR0QixNQUFiLEVBRUcsT0FGSDtBQUdEO0FBQ0YsRyIsImZpbGUiOiIwLmVkZmMxMzU0ODViNTZjNTNlZGQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQge1JvdXRlciwgUm91dGUsIEluZGV4Um91dGUsIGJyb3dzZXJIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5cclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9jb21wb25lbnRzL0dhbWUvR2FtZVZpZXcuanN4J1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL0xvZ2luL0xvZ2luVmlldy5qc3gnXHJcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lL0hvbWVWaWV3LmpzeCdcclxuXHJcbnJlbmRlcigoXHJcbiAgPFJvdXRlciBoaXN0b3J5PXticm93c2VySGlzdG9yeX0+XHJcblx0XHQ8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0xvZ2lufSBvbkVudGVyPXtyZXF1aXJlQXV0aH0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPVwiL2dhbWVcIiBjb21wb25lbnQ9e0dhbWV9IC8+XHJcblx0XHQ8Um91dGUgcGF0aD1cIi9ob21lXCIgY29tcG9uZW50PXtIb21lfSAvPlxyXG5cdDwvUm91dGVyPlxyXG5cdCksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gcmVxdWlyZUF1dGgobmV4dFN0YXRlLCByZXBsYWNlU3RhdGUpIHtcclxuICBjb25zb2xlLmxvZygnb3V0c2lkZSBpZiBzdGF0ZW1lbnQnKTtcclxuICBpZiAoICEhd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSApIHtcclxuICAgIGNvbnNvbGUubG9nKCdJbnNpZGUgaWYgc3RhdGVtZW50IGluIHJlcXVpcmVBdXRoJyk7XHJcbiAgICByZXBsYWNlU3RhdGUoe1xyXG4gICAgICBuZXh0UGF0aE5hbWU6IG5leHRTdGF0ZS5sb2NhdGlvbi5wYXRoTmFtZVxyXG4gICAgfSwgJy9ob21lJyk7XHJcbiAgfVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=