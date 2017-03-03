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
	
	var _NewGame = __webpack_require__(288);
	
	var _NewGame2 = _interopRequireDefault(_NewGame);
	
	var _JoinGame = __webpack_require__(289);
	
	var _JoinGame2 = _interopRequireDefault(_JoinGame);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Lobby = function (_React$Component) {
	  _inherits(Lobby, _React$Component);
	
	  function Lobby() {
	    _classCallCheck(this, Lobby);
	
	    return _possibleConstructorReturn(this, (Lobby.__proto__ || Object.getPrototypeOf(Lobby)).apply(this, arguments));
	  }
	
	  _createClass(Lobby, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'Lobby' },
	        _react2.default.createElement(_NewGame2.default, { currentUser: this.props.currentUser }),
	        _react2.default.createElement(_JoinGame2.default, null)
	      );
	    }
	  }]);
	
	  return Lobby;
	}(_react2.default.Component);
	
	exports.default = Lobby;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "LobbyView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lL0xvYmJ5Vmlldy5qc3g/MTExNiJdLCJuYW1lcyI6WyJMb2JieSIsInByb3BzIiwiY3VycmVudFVzZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU1BLEs7Ozs7Ozs7Ozs7OzhCQUNLO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLE9BQWY7QUFDQyw0REFBUyxhQUFhLEtBQUtDLEtBQUwsQ0FBV0MsV0FBakMsR0FERDtBQUVDO0FBRkQsUUFERjtBQU1EOzs7O0dBUmlCLGdCQUFNQyxTOzttQkFXWEgsSyIsImZpbGUiOiIwLmY2NDgzZGM2NWE2ODQzMDhkZmJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5ld0dhbWUgZnJvbSAnLi9OZXdHYW1lLmpzeCdcbmltcG9ydCBKb2luR2FtZSBmcm9tICcuL0pvaW5HYW1lLmpzeCdcblxuY2xhc3MgTG9iYnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTG9iYnlcIj5cbiAgICAgIFx0PE5ld0dhbWUgY3VycmVudFVzZXI9e3RoaXMucHJvcHMuY3VycmVudFVzZXJ9Lz5cbiAgICAgIFx0PEpvaW5HYW1lIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYmJ5O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUvTG9iYnlWaWV3LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=