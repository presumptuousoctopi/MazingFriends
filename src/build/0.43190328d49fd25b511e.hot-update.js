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
	            }, 1500);
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
	                        'aria-valuemin': '0', 'aria-valuemax': '100', style: { width: this.state.percentage + '%' } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1Byb2dyZXNzQmFyLmpzeD9mYjM4Il0sIm5hbWVzIjpbIlByb2dyZXNzQmFyIiwic3RhdGUiLCJwZXJjZW50YWdlIiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsIndpbmRvdyIsImRpc3RhbmNlUGVyY2VudGFnZSIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztLQUVNQSxXOzs7QUFDRiw0QkFBZTtBQUFBOztBQUFBOztBQUVYLGVBQUtDLEtBQUwsR0FBYTtBQUNUQyx5QkFBWTtBQURILFVBQWI7QUFGVztBQUtkOzs7OzZDQUNtQjtBQUFBOztBQUNoQkMseUJBQWEsWUFBTTtBQUNmLHdCQUFLQyxRQUFMLENBQWM7QUFDVkYsaUNBQVksTUFBTUcsT0FBT0M7QUFEZixrQkFBZDtBQUdBQyx5QkFBUUMsR0FBUixDQUFZLHdCQUFaLEVBQXNDLE1BQU1ILE9BQU9DLGtCQUFuRDtBQUNILGNBTEQsRUFLRyxJQUxIO0FBTUg7OztrQ0FDUztBQUNOLG9CQUNBO0FBQUE7QUFBQSxtQkFBSyxXQUFVLFVBQWY7QUFDSTtBQUFBO0FBQUEsdUJBQUssV0FBVSxjQUFmLEVBQThCLE1BQUssYUFBbkMsRUFBaUQsaUJBQWUsS0FBS0wsS0FBTCxDQUFXQyxVQUEzRTtBQUNLLDBDQUFjLEdBRG5CLEVBQ3VCLGlCQUFjLEtBRHJDLEVBQzJDLE9BQU8sRUFBQ08sT0FBTSxLQUFLUixLQUFMLENBQVdDLFVBQVgsR0FBc0IsR0FBN0IsRUFEbEQ7QUFFSTtBQUFBO0FBQUEsMkJBQU0sV0FBVSxTQUFoQjtBQUFBO0FBQUE7QUFGSjtBQURKLGNBREE7QUFRSDs7OztHQXhCcUIsZ0JBQU1RLFM7O21CQTJCakJWLFciLCJmaWxlIjoiMC40MzE5MDMyOGQ0OWZkMjViNTExZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY2xhc3MgUHJvZ3Jlc3NCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBwZXJjZW50YWdlOiAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHNldEludGVydmFsKCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZTogMTAwIC0gd2luZG93LmRpc3RhbmNlUGVyY2VudGFnZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NoYW5naW5nIHBlcmNlbnRhZ2UgOiAnLCAxMDAgLSB3aW5kb3cuZGlzdGFuY2VQZXJjZW50YWdlKTtcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgIH1cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW5vdz17dGhpcy5zdGF0ZS5wZXJjZW50YWdlfVxyXG4gICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiIHN0eWxlPXt7d2lkdGg6dGhpcy5zdGF0ZS5wZXJjZW50YWdlKyclJ319PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkFsbW9zdCBUaGVyZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9Qcm9ncmVzc0Jhci5qc3giXSwic291cmNlUm9vdCI6IiJ9