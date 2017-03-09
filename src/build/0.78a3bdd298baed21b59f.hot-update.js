webpackHotUpdate(0,{

/***/ 573:
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
	
	var _reactBootstrap = __webpack_require__(307);
	
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
	            'Modal heading'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Body,
	          null,
	          _react2.default.createElement(
	            'h4',
	            null,
	            'Wrapped Text'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.'
	          )
	        ),
	        _react2.default.createElement(
	          _reactBootstrap.Modal.Footer,
	          null,
	          _react2.default.createElement(
	            'button',
	            { onClick: this.props.onHide },
	            'Close'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaGFyZWQvTW9kYWwuanN4PzQzNjUiXSwibmFtZXMiOlsiUG9wdXAiLCJwcm9wcyIsIm9uSGlkZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0tBRU1BLEs7Ozs7Ozs7Ozs7OzhCQUNLO0FBQ1AsY0FDRTtBQUFBO0FBQUEsc0JBQVcsS0FBS0MsS0FBaEIsSUFBdUIsbUJBQWdCLDBCQUF2QztBQUNFO0FBQUEsaUNBQU8sTUFBUDtBQUFBLGFBQWMsaUJBQWQ7QUFDRTtBQUFBLG1DQUFPLEtBQVA7QUFBQSxlQUFhLElBQUcsMEJBQWhCO0FBQUE7QUFBQTtBQURGLFVBREY7QUFJRTtBQUFBLGlDQUFPLElBQVA7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRixVQUpGO0FBYUU7QUFBQSxpQ0FBTyxNQUFQO0FBQUE7QUFDRTtBQUFBO0FBQUEsZUFBUSxTQUFTLEtBQUtBLEtBQUwsQ0FBV0MsTUFBNUI7QUFBQTtBQUFBO0FBREY7QUFiRixRQURGO0FBbUJEOzs7O0dBckJpQixnQkFBTUMsUzs7QUFzQnpCOzttQkFFY0gsSyIsImZpbGUiOiIwLjc4YTNiZGQyOThiYWVkMjFiNTlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmNsYXNzIFBvcHVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWwgey4uLnRoaXMucHJvcHN9IGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS1zbVwiPlxuICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgIDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS1zbVwiPk1vZGFsIGhlYWRpbmc8L01vZGFsLlRpdGxlPlxuICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgPGg0PldyYXBwZWQgVGV4dDwvaDQ+XG4gICAgICAgICAgPHA+Q3JhcyBtYXR0aXMgY29uc2VjdGV0dXIgcHVydXMgc2l0IGFtZXQgZmVybWVudHVtLiBDcmFzIGp1c3RvIG9kaW8sIGRhcGlidXMgYWMgZmFjaWxpc2lzIGluLCBlZ2VzdGFzIGVnZXQgcXVhbS4gTW9yYmkgbGVvIHJpc3VzLCBwb3J0YSBhYyBjb25zZWN0ZXR1ciBhYywgdmVzdGlidWx1bSBhdCBlcm9zLjwvcD5cbiAgICAgICAgICA8cD5QcmFlc2VudCBjb21tb2RvIGN1cnN1cyBtYWduYSwgdmVsIHNjZWxlcmlzcXVlIG5pc2wgY29uc2VjdGV0dXIgZXQuIFZpdmFtdXMgc2FnaXR0aXMgbGFjdXMgdmVsIGF1Z3VlIGxhb3JlZXQgcnV0cnVtIGZhdWNpYnVzIGRvbG9yIGF1Y3Rvci48L3A+XG4gICAgICAgICAgPHA+QWVuZWFuIGxhY2luaWEgYmliZW5kdW0gbnVsbGEgc2VkIGNvbnNlY3RldHVyLiBQcmFlc2VudCBjb21tb2RvIGN1cnN1cyBtYWduYSwgdmVsIHNjZWxlcmlzcXVlIG5pc2wgY29uc2VjdGV0dXIgZXQuIERvbmVjIHNlZCBvZGlvIGR1aS4gRG9uZWMgdWxsYW1jb3JwZXIgbnVsbGEgbm9uIG1ldHVzIGF1Y3RvciBmcmluZ2lsbGEuPC9wPlxuICAgICAgICAgIDxwPkNyYXMgbWF0dGlzIGNvbnNlY3RldHVyIHB1cnVzIHNpdCBhbWV0IGZlcm1lbnR1bS4gQ3JhcyBqdXN0byBvZGlvLCBkYXBpYnVzIGFjIGZhY2lsaXNpcyBpbiwgZWdlc3RhcyBlZ2V0IHF1YW0uIE1vcmJpIGxlbyByaXN1cywgcG9ydGEgYWMgY29uc2VjdGV0dXIgYWMsIHZlc3RpYnVsdW0gYXQgZXJvcy48L3A+XG4gICAgICAgICAgPHA+UHJhZXNlbnQgY29tbW9kbyBjdXJzdXMgbWFnbmEsIHZlbCBzY2VsZXJpc3F1ZSBuaXNsIGNvbnNlY3RldHVyIGV0LiBWaXZhbXVzIHNhZ2l0dGlzIGxhY3VzIHZlbCBhdWd1ZSBsYW9yZWV0IHJ1dHJ1bSBmYXVjaWJ1cyBkb2xvciBhdWN0b3IuPC9wPlxuICAgICAgICAgIDxwPkFlbmVhbiBsYWNpbmlhIGJpYmVuZHVtIG51bGxhIHNlZCBjb25zZWN0ZXR1ci4gUHJhZXNlbnQgY29tbW9kbyBjdXJzdXMgbWFnbmEsIHZlbCBzY2VsZXJpc3F1ZSBuaXNsIGNvbnNlY3RldHVyIGV0LiBEb25lYyBzZWQgb2RpbyBkdWkuIERvbmVjIHVsbGFtY29ycGVyIG51bGxhIG5vbiBtZXR1cyBhdWN0b3IgZnJpbmdpbGxhLjwvcD5cbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5vbkhpZGV9PkNsb3NlPC9idXR0b24+XG4gICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3B1cDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TaGFyZWQvTW9kYWwuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==