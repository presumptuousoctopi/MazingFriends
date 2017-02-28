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
	            var context = this;
	            socket.on('receiveDistancePercentage', function (percentage) {
	                context.setState({
	                    percentage: percentage
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1Byb2dyZXNzQmFyLmpzeD9mYjM4Il0sIm5hbWVzIjpbIlByb2dyZXNzQmFyIiwic3RhdGUiLCJwZXJjZW50YWdlIiwiY29udGV4dCIsInNvY2tldCIsIm9uIiwic2V0U3RhdGUiLCJ3aWR0aCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztLQUVNQSxXOzs7QUFDRiw0QkFBZTtBQUFBOztBQUFBOztBQUVYLGVBQUtDLEtBQUwsR0FBYTtBQUNUQyx5QkFBWTtBQURILFVBQWI7QUFGVztBQUtkOzs7OzZDQUNtQjtBQUNoQixpQkFBSUMsVUFBVSxJQUFkO0FBQ0FDLG9CQUFPQyxFQUFQLENBQVUsMkJBQVYsRUFBdUMsVUFBU0gsVUFBVCxFQUFxQjtBQUN4REMseUJBQVFHLFFBQVIsQ0FBaUI7QUFDYkosaUNBQVlBO0FBREMsa0JBQWpCO0FBR0gsY0FKRDs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7OztrQ0FDUztBQUNOLG9CQUNBO0FBQUE7QUFBQSxtQkFBSyxXQUFVLFVBQWY7QUFDSTtBQUFBO0FBQUEsdUJBQUssV0FBVSxrQ0FBZixFQUFrRCxNQUFLLGFBQXZELEVBQXFFLGlCQUFlLEtBQUtELEtBQUwsQ0FBV0MsVUFBL0Y7QUFDSywwQ0FBYyxHQURuQixFQUN1QixpQkFBYyxLQURyQyxFQUMyQyxPQUFPLEVBQUNLLE9BQU0sS0FBS04sS0FBTCxDQUFXQyxVQUFYLEdBQXNCLEdBQTdCLEVBRGxEO0FBRUksNkRBQU0sV0FBVSxTQUFoQjtBQUZKO0FBREosY0FEQTtBQVFIOzs7O0dBOUJxQixnQkFBTU0sUzs7bUJBaUNqQlIsVyIsImZpbGUiOiIwLjBjZWE2MDQ5ZGI0MjU0OTcxMmJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jbGFzcyBQcm9ncmVzc0JhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IDBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgIHNvY2tldC5vbigncmVjZWl2ZURpc3RhbmNlUGVyY2VudGFnZScsIGZ1bmN0aW9uKHBlcmNlbnRhZ2UpIHtcclxuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiBwZXJjZW50YWdlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBzZXRJbnRlcnZhbCggKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAvLyAgICAgICAgIHBlcmNlbnRhZ2U6IHdpbmRvdy5kaXN0YW5jZVBlcmNlbnRhZ2VcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfSwgMTUwMCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItZGFuZ2VyXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW5vdz17dGhpcy5zdGF0ZS5wZXJjZW50YWdlfVxyXG4gICAgICAgICAgICAgICAgIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiIHN0eWxlPXt7d2lkdGg6dGhpcy5zdGF0ZS5wZXJjZW50YWdlKyclJ319PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9Qcm9ncmVzc0Jhci5qc3giXSwic291cmNlUm9vdCI6IiJ9