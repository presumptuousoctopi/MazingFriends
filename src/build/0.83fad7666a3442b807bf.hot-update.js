webpackHotUpdate(0,{

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProgressBar = function (_React$Component) {
	    _inherits(ProgressBar, _React$Component);
	
	    function ProgressBar() {
	        _classCallCheck(this, ProgressBar);
	
	        var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this));
	
	        _this.state = {
	            percentage: 0
	        };
	        return _this;
	    }
	
	    _createClass(ProgressBar, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            setInterval(function () {
	                _this2.setState({
	                    percentage: 100 - window.distancePercentage
	                });
	                console.log('Changing percentage : ', 100 - window.distancePercentage);
	            }, 3000);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'progress' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'progress-bar', role: 'progressbar', 'aria-valuenow': this.state.percentage,
	                        'aria-valuemin': '0', 'aria-valuemax': '100', style: { width: "70%" } },
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'sr-only' },
	                        'Almost There'
	                    )
	                )
	            );
	        }
	    }]);
	
	    return ProgressBar;
	}(_react2.default.Component);
	
	exports.default = ProgressBar;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ProgressBar.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1Byb2dyZXNzQmFyLmpzeD9mYjM4Il0sIm5hbWVzIjpbIlByb2dyZXNzQmFyIiwic3RhdGUiLCJwZXJjZW50YWdlIiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsIndpbmRvdyIsImRpc3RhbmNlUGVyY2VudGFnZSIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztLQUVNQSxXOzs7QUFDRiw0QkFBZTtBQUFBOztBQUFBOztBQUVYLGVBQUtDLEtBQUwsR0FBYTtBQUNUQyx5QkFBWTtBQURILFVBQWI7QUFGVztBQUtkOzs7OzZDQUNtQjtBQUFBOztBQUNoQkMseUJBQWEsWUFBTTtBQUNmLHdCQUFLQyxRQUFMLENBQWM7QUFDVkYsaUNBQVksTUFBTUcsT0FBT0M7QUFEZixrQkFBZDtBQUdBQyx5QkFBUUMsR0FBUixDQUFZLHdCQUFaLEVBQXNDLE1BQU1ILE9BQU9DLGtCQUFuRDtBQUNILGNBTEQsRUFLRyxJQUxIO0FBTUg7OztrQ0FDUztBQUNOLG9CQUNBO0FBQUE7QUFBQSxtQkFBSyxXQUFVLFVBQWY7QUFDSTtBQUFBO0FBQUEsdUJBQUssV0FBVSxjQUFmLEVBQThCLE1BQUssYUFBbkMsRUFBaUQsaUJBQWUsS0FBS0wsS0FBTCxDQUFXQyxVQUEzRTtBQUNLLDBDQUFjLEdBRG5CLEVBQ3VCLGlCQUFjLEtBRHJDLEVBQzJDLE9BQU8sRUFBQ08sT0FBTSxLQUFQLEVBRGxEO0FBRUk7QUFBQTtBQUFBLDJCQUFNLFdBQVUsU0FBaEI7QUFBQTtBQUFBO0FBRko7QUFESixjQURBO0FBUUg7Ozs7R0F4QnFCLGdCQUFNQyxTOzttQkEyQmpCVixXIiwiZmlsZSI6IjAuODNmYWQ3NjY2YTM0NDJiODA3YmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGVyY2VudGFnZTogMFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IDEwMCAtIHdpbmRvdy5kaXN0YW5jZVBlcmNlbnRhZ2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDaGFuZ2luZyBwZXJjZW50YWdlIDogJywgMTAwIC0gd2luZG93LmRpc3RhbmNlUGVyY2VudGFnZSk7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhclwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVub3c9e3RoaXMuc3RhdGUucGVyY2VudGFnZX1cclxuICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxMDBcIiBzdHlsZT17e3dpZHRoOlwiNzAlXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5BbG1vc3QgVGhlcmU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbWUvUHJvZ3Jlc3NCYXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==