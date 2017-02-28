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
	            socket.on('receiveDistancePercentage', function (percentage) {
	                // console.log('New percentage : ', percentage);
	                // window.distancePercentage = percentage;
	                this.setState({
	                    percentage: window.distancePercentage
	                });
	            });
	
	            // setInterval( () => {
	            //     this.setState({
	            //         percentage: window.distancePercentage
	            //     });
	            // }, 1500);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'progress' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'progress-bar progress-bar-danger', role: 'progressbar', 'aria-valuenow': this.state.percentage,
	                        'aria-valuemin': '0', 'aria-valuemax': '100', style: { width: this.state.percentage + '%' } },
	                    _react2.default.createElement('span', { className: 'sr-only' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1Byb2dyZXNzQmFyLmpzeD9mYjM4Il0sIm5hbWVzIjpbIlByb2dyZXNzQmFyIiwic3RhdGUiLCJwZXJjZW50YWdlIiwic29ja2V0Iiwib24iLCJzZXRTdGF0ZSIsIndpbmRvdyIsImRpc3RhbmNlUGVyY2VudGFnZSIsIndpZHRoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0tBRU1BLFc7OztBQUNGLDRCQUFlO0FBQUE7O0FBQUE7O0FBRVgsZUFBS0MsS0FBTCxHQUFhO0FBQ1RDLHlCQUFZO0FBREgsVUFBYjtBQUZXO0FBS2Q7Ozs7NkNBQ21CO0FBQ2hCQyxvQkFBT0MsRUFBUCxDQUFVLDJCQUFWLEVBQXVDLFVBQVNGLFVBQVQsRUFBcUI7QUFDMUQ7QUFDQTtBQUNFLHNCQUFLRyxRQUFMLENBQWM7QUFDVkgsaUNBQVlJLE9BQU9DO0FBRFQsa0JBQWQ7QUFHSCxjQU5EOztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7O2tDQUNTO0FBQ04sb0JBQ0E7QUFBQTtBQUFBLG1CQUFLLFdBQVUsVUFBZjtBQUNJO0FBQUE7QUFBQSx1QkFBSyxXQUFVLGtDQUFmLEVBQWtELE1BQUssYUFBdkQsRUFBcUUsaUJBQWUsS0FBS04sS0FBTCxDQUFXQyxVQUEvRjtBQUNLLDBDQUFjLEdBRG5CLEVBQ3VCLGlCQUFjLEtBRHJDLEVBQzJDLE9BQU8sRUFBQ00sT0FBTSxLQUFLUCxLQUFMLENBQVdDLFVBQVgsR0FBc0IsR0FBN0IsRUFEbEQ7QUFFSSw2REFBTSxXQUFVLFNBQWhCO0FBRko7QUFESixjQURBO0FBUUg7Ozs7R0EvQnFCLGdCQUFNTyxTOzttQkFrQ2pCVCxXIiwiZmlsZSI6IjAuM2ZkYTMwN2I3NWVmOTQ4Mzg4NGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcGVyY2VudGFnZTogMFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBzb2NrZXQub24oJ3JlY2VpdmVEaXN0YW5jZVBlcmNlbnRhZ2UnLCBmdW5jdGlvbihwZXJjZW50YWdlKSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTmV3IHBlcmNlbnRhZ2UgOiAnLCBwZXJjZW50YWdlKTtcclxuICAgICAgICAgIC8vIHdpbmRvdy5kaXN0YW5jZVBlcmNlbnRhZ2UgPSBwZXJjZW50YWdlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IHdpbmRvdy5kaXN0YW5jZVBlcmNlbnRhZ2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHNldEludGVydmFsKCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgICAgICAgcGVyY2VudGFnZTogd2luZG93LmRpc3RhbmNlUGVyY2VudGFnZVxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9LCAxNTAwKTtcclxuICAgIH1cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1kYW5nZXJcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbm93PXt0aGlzLnN0YXRlLnBlcmNlbnRhZ2V9XHJcbiAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCIgc3R5bGU9e3t3aWR0aDp0aGlzLnN0YXRlLnBlcmNlbnRhZ2UrJyUnfX0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9HYW1lL1Byb2dyZXNzQmFyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=