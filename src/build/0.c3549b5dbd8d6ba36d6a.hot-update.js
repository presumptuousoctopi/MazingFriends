webpackHotUpdate(0,{

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(305);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Popup = function (_React$Component) {
	  _inherits(Popup, _React$Component);
	
	  function Popup() {
	    _classCallCheck(this, Popup);
	
	    return _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).apply(this, arguments));
	  }
	
	  _createClass(Popup, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _reactBootstrap.Modal,
	        _extends({}, this.props, { 'aria-labelledby': 'contained-modal-title-sm' }),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Header,
	          { closeButton: true },
	          _react2.default.createElement(
	            _reactBootstrap.Modal.Title,
	            { id: 'contained-modal-title-sm' },
	            this.props.title
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          this.props.content
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            'button',
	            { onClick: this.props.onHide },
	            this.props.Footer
	          )
	        )
	      );
	    }
	  }]);
	
	  return Popup;
	}(_react2.default.Component);
	
	;
	
	exports.default = Popup;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Modal.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaGFyZWQvTW9kYWwuanN4PzQzNjUiXSwibmFtZXMiOlsiUG9wdXAiLCJwcm9wcyIsInRpdGxlIiwiY29udGVudCIsIm9uSGlkZSIsIkZvb3RlciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0tBRU1BLEs7Ozs7Ozs7Ozs7OzhCQUNLO0FBQ1AsY0FDRTtBQUFBO0FBQUEsc0JBQVcsS0FBS0MsS0FBaEIsSUFBdUIsbUJBQWdCLDBCQUF2QztBQUNFO0FBQUEsaUNBQU8sTUFBUDtBQUFBLGFBQWMsaUJBQWQ7QUFDRTtBQUFBLG1DQUFPLEtBQVA7QUFBQSxlQUFhLElBQUcsMEJBQWhCO0FBQTRDLGtCQUFLQSxLQUFMLENBQVdDO0FBQXZEO0FBREYsVUFERjtBQUlFO0FBQUEsaUNBQU8sSUFBUDtBQUFBO0FBQ0csZ0JBQUtELEtBQUwsQ0FBV0U7QUFEZCxVQUpGO0FBT0U7QUFBQSxpQ0FBTyxNQUFQO0FBQUE7QUFDRTtBQUFBO0FBQUEsZUFBUSxTQUFTLEtBQUtGLEtBQUwsQ0FBV0csTUFBNUI7QUFBcUMsa0JBQUtILEtBQUwsQ0FBV0k7QUFBaEQ7QUFERjtBQVBGLFFBREY7QUFhRDs7OztHQWZpQixnQkFBTUMsUzs7QUFnQnpCOzttQkFFY04sSyIsImZpbGUiOiIwLmMzNTQ5YjVkYmQ4ZDZiYTM2ZDZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmNsYXNzIFBvcHVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWwgey4uLnRoaXMucHJvcHN9IGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS1zbVwiPlxuICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgIDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS1zbVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvTW9kYWwuVGl0bGU+XG4gICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jb250ZW50fVxuICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uSGlkZX0+e3RoaXMucHJvcHMuRm9vdGVyfTwvYnV0dG9uPlxuICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU2hhcmVkL01vZGFsLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=