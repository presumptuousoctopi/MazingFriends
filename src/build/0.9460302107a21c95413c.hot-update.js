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
	
	exports.default = _reactBootstrap.Modal;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Modal.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaGFyZWQvTW9kYWwuanN4PzQzNjUiXSwibmFtZXMiOlsiUG9wdXAiLCJwcm9wcyIsIm9uSGlkZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0tBRU1BLEs7Ozs7Ozs7Ozs7OzhCQUNLO0FBQ1AsY0FDRTtBQUFBO0FBQUEsc0JBQVcsS0FBS0MsS0FBaEIsSUFBdUIsbUJBQWdCLDBCQUF2QztBQUNFO0FBQUEsaUNBQU8sTUFBUDtBQUFBLGFBQWMsaUJBQWQ7QUFDRTtBQUFBLG1DQUFPLEtBQVA7QUFBQSxlQUFhLElBQUcsMEJBQWhCO0FBQUE7QUFBQTtBQURGLFVBREY7QUFJRTtBQUFBLGlDQUFPLElBQVA7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRixVQUpGO0FBYUU7QUFBQSxpQ0FBTyxNQUFQO0FBQUE7QUFDRTtBQUFBO0FBQUEsZUFBUSxTQUFTLEtBQUtBLEtBQUwsQ0FBV0MsTUFBNUI7QUFBQTtBQUFBO0FBREY7QUFiRixRQURGO0FBbUJEOzs7O0dBckJpQixnQkFBTUMsUzs7QUFzQnpCIiwiZmlsZSI6IjAuOTQ2MDMwMjEwN2EyMWM5NTQxM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuY2xhc3MgUG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbCB7Li4udGhpcy5wcm9wc30gYXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXNtXCI+XG4gICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG4gICAgICAgICAgPE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXNtXCI+TW9kYWwgaGVhZGluZzwvTW9kYWwuVGl0bGU+XG4gICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICA8aDQ+V3JhcHBlZCBUZXh0PC9oND5cbiAgICAgICAgICA8cD5DcmFzIG1hdHRpcyBjb25zZWN0ZXR1ciBwdXJ1cyBzaXQgYW1ldCBmZXJtZW50dW0uIENyYXMganVzdG8gb2RpbywgZGFwaWJ1cyBhYyBmYWNpbGlzaXMgaW4sIGVnZXN0YXMgZWdldCBxdWFtLiBNb3JiaSBsZW8gcmlzdXMsIHBvcnRhIGFjIGNvbnNlY3RldHVyIGFjLCB2ZXN0aWJ1bHVtIGF0IGVyb3MuPC9wPlxuICAgICAgICAgIDxwPlByYWVzZW50IGNvbW1vZG8gY3Vyc3VzIG1hZ25hLCB2ZWwgc2NlbGVyaXNxdWUgbmlzbCBjb25zZWN0ZXR1ciBldC4gVml2YW11cyBzYWdpdHRpcyBsYWN1cyB2ZWwgYXVndWUgbGFvcmVldCBydXRydW0gZmF1Y2lidXMgZG9sb3IgYXVjdG9yLjwvcD5cbiAgICAgICAgICA8cD5BZW5lYW4gbGFjaW5pYSBiaWJlbmR1bSBudWxsYSBzZWQgY29uc2VjdGV0dXIuIFByYWVzZW50IGNvbW1vZG8gY3Vyc3VzIG1hZ25hLCB2ZWwgc2NlbGVyaXNxdWUgbmlzbCBjb25zZWN0ZXR1ciBldC4gRG9uZWMgc2VkIG9kaW8gZHVpLiBEb25lYyB1bGxhbWNvcnBlciBudWxsYSBub24gbWV0dXMgYXVjdG9yIGZyaW5naWxsYS48L3A+XG4gICAgICAgICAgPHA+Q3JhcyBtYXR0aXMgY29uc2VjdGV0dXIgcHVydXMgc2l0IGFtZXQgZmVybWVudHVtLiBDcmFzIGp1c3RvIG9kaW8sIGRhcGlidXMgYWMgZmFjaWxpc2lzIGluLCBlZ2VzdGFzIGVnZXQgcXVhbS4gTW9yYmkgbGVvIHJpc3VzLCBwb3J0YSBhYyBjb25zZWN0ZXR1ciBhYywgdmVzdGlidWx1bSBhdCBlcm9zLjwvcD5cbiAgICAgICAgICA8cD5QcmFlc2VudCBjb21tb2RvIGN1cnN1cyBtYWduYSwgdmVsIHNjZWxlcmlzcXVlIG5pc2wgY29uc2VjdGV0dXIgZXQuIFZpdmFtdXMgc2FnaXR0aXMgbGFjdXMgdmVsIGF1Z3VlIGxhb3JlZXQgcnV0cnVtIGZhdWNpYnVzIGRvbG9yIGF1Y3Rvci48L3A+XG4gICAgICAgICAgPHA+QWVuZWFuIGxhY2luaWEgYmliZW5kdW0gbnVsbGEgc2VkIGNvbnNlY3RldHVyLiBQcmFlc2VudCBjb21tb2RvIGN1cnN1cyBtYWduYSwgdmVsIHNjZWxlcmlzcXVlIG5pc2wgY29uc2VjdGV0dXIgZXQuIERvbmVjIHNlZCBvZGlvIGR1aS4gRG9uZWMgdWxsYW1jb3JwZXIgbnVsbGEgbm9uIG1ldHVzIGF1Y3RvciBmcmluZ2lsbGEuPC9wPlxuICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uSGlkZX0+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICA8L01vZGFsPlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1NoYXJlZC9Nb2RhbC5qc3giXSwic291cmNlUm9vdCI6IiJ9