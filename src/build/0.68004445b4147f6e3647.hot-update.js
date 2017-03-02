webpackHotUpdate(0,{

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(98);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(189);
	
	var _axios = __webpack_require__(246);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _TextChat = __webpack_require__(271);
	
	var _TextChat2 = _interopRequireDefault(_TextChat);
	
	var _VideoChat = __webpack_require__(275);
	
	var _VideoChat2 = _interopRequireDefault(_VideoChat);
	
	var _ProgressBar = __webpack_require__(276);
	
	var _ProgressBar2 = _interopRequireDefault(_ProgressBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Chat = function (_React$Component) {
	  _inherits(Chat, _React$Component);
	
	  function Chat(props) {
	    _classCallCheck(this, Chat);
	
	    var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, props));
	
	    _this.state = {
	      video: true
	    };
	    console.log(_this.state.text);
	    return _this;
	  }
	
	  _createClass(Chat, [{
	    key: 'switchChat',
	    value: function switchChat() {
	      this.setState({
	        video: false
	      });
	      // if (value === 'video') {
	      //   socket.emit('changedToVideo', '');
	      // }
	    }
	  }, {
	    key: 'stopGame',
	    value: function stopGame() {
	      document.getElementById("canvas").remove();
	      location.reload();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      console.log(this.props);
	      return _react2.default.createElement(
	        'div',
	        { className: 'Chat' },
	        _react2.default.createElement(
	          'div',
	          { className: 'Options' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Mazing Friends'
	          ),
	          this.props.timer ? _react2.default.createElement(
	            'h2',
	            null,
	            this.props.timer
	          ) : _react2.default.createElement(
	            'p',
	            null,
	            ' Waiting for second player... '
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'optionButtons', onClick: this.props.controlsClickHandler },
	            'Controls'
	          ),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '/' },
	            _react2.default.createElement(
	              'button',
	              { className: 'optionButtons', onClick: this.stopGame.bind(this) },
	              'Quit Game'
	            )
	          )
	        ),
	        this.state.video ? _react2.default.createElement(_VideoChat2.default, null) : '',
	        _react2.default.createElement(
	          'form',
	          null,
	          _react2.default.createElement('input', { type: 'radio', name: 'chat', value: 'video', onChange: this.switchChat.bind(this) }),
	          'Video Off'
	        ),
	        _react2.default.createElement(_TextChat2.default, null)
	      );
	    }
	  }]);
	
	  return Chat;
	}(_react2.default.Component);
	
	;
	
	exports.default = Chat;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ChatView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0NoYXRWaWV3LmpzeD85MzljIl0sIm5hbWVzIjpbIkNoYXQiLCJwcm9wcyIsInN0YXRlIiwidmlkZW8iLCJjb25zb2xlIiwibG9nIiwidGV4dCIsInNldFN0YXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImxvY2F0aW9uIiwicmVsb2FkIiwidGltZXIiLCJjb250cm9sc0NsaWNrSGFuZGxlciIsInN0b3BHYW1lIiwiYmluZCIsInN3aXRjaENoYXQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxJOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZHQUNYQSxLQURXOztBQUVqQixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBTztBQURJLE1BQWI7QUFHQUMsYUFBUUMsR0FBUixDQUFZLE1BQUtILEtBQUwsQ0FBV0ksSUFBdkI7QUFMaUI7QUFNbEI7Ozs7a0NBRVk7QUFDWCxZQUFLQyxRQUFMLENBQWM7QUFDWkosZ0JBQU87QUFESyxRQUFkO0FBR0E7QUFDQTtBQUNBO0FBQ0Q7OztnQ0FFVTtBQUNUSyxnQkFBU0MsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsTUFBbEM7QUFDQUMsZ0JBQVNDLE1BQVQ7QUFDRDs7OzhCQUVRO0FBQ1BSLGVBQVFDLEdBQVIsQ0FBWSxLQUFLSixLQUFqQjtBQUNBLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBLGFBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBRUcsZ0JBQUtBLEtBQUwsQ0FBV1ksS0FBWCxHQUFtQjtBQUFBO0FBQUE7QUFBSyxrQkFBS1osS0FBTCxDQUFXWTtBQUFoQixZQUFuQixHQUFpRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRnBEO0FBR0U7QUFBQTtBQUFBLGVBQVEsV0FBVSxlQUFsQixFQUFrQyxTQUFTLEtBQUtaLEtBQUwsQ0FBV2Esb0JBQXREO0FBQUE7QUFBQSxZQUhGO0FBSUU7QUFBQTtBQUFBLGVBQU0sSUFBRyxHQUFUO0FBQWE7QUFBQTtBQUFBLGlCQUFRLFdBQVUsZUFBbEIsRUFBa0MsU0FBUyxLQUFLQyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBM0M7QUFBQTtBQUFBO0FBQWI7QUFKRixVQURGO0FBT0csY0FBS2QsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLHdEQUFuQixHQUFrQyxFQVByQztBQVFJO0FBQUE7QUFBQTtBQUNFLG9EQUFPLE1BQUssT0FBWixFQUFvQixNQUFLLE1BQXpCLEVBQWdDLE9BQU0sT0FBdEMsRUFBOEMsVUFBVSxLQUFLYyxVQUFMLENBQWdCRCxJQUFoQixDQUFxQixJQUFyQixDQUF4RCxHQURGO0FBQUE7QUFBQSxVQVJKO0FBV0U7QUFYRixRQURGO0FBZUQ7Ozs7R0F4Q2dCLGdCQUFNRSxTOztBQXlDeEI7O21CQUdjbEIsSSIsImZpbGUiOiIwLjY4MDA0NDQ1YjQxNDdmNmUzNjQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBUZXh0Q2hhdCBmcm9tICcuL1RleHRDaGF0LmpzeCdcclxuaW1wb3J0IFZpZGVvQ2hhdCBmcm9tICcuL1ZpZGVvQ2hhdC5qc3gnO1xyXG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9Qcm9ncmVzc0Jhci5qc3gnXHJcblxyXG5jbGFzcyBDaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdmlkZW86IHRydWVcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudGV4dClcclxuICB9XHJcblxyXG4gIHN3aXRjaENoYXQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdmlkZW86IGZhbHNlXHJcbiAgICB9KVxyXG4gICAgLy8gaWYgKHZhbHVlID09PSAndmlkZW8nKSB7XHJcbiAgICAvLyAgIHNvY2tldC5lbWl0KCdjaGFuZ2VkVG9WaWRlbycsICcnKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIHN0b3BHYW1lKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikucmVtb3ZlKCk7XHJcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGF0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJPcHRpb25zXCI+XHJcbiAgICAgICAgICA8aDE+TWF6aW5nIEZyaWVuZHM8L2gxPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMudGltZXIgPyA8aDI+e3RoaXMucHJvcHMudGltZXJ9PC9oMj4gOiA8cD4gV2FpdGluZyBmb3Igc2Vjb25kIHBsYXllci4uLiA8L3A+fVxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb25CdXR0b25zXCIgb25DbGljaz17dGhpcy5wcm9wcy5jb250cm9sc0NsaWNrSGFuZGxlcn0+Q29udHJvbHM8L2J1dHRvbj5cclxuICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPjxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uQnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMuc3RvcEdhbWUuYmluZCh0aGlzKX0+UXVpdCBHYW1lPC9idXR0b24+PC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnZpZGVvID8gPFZpZGVvQ2hhdC8+IDogJycgfVxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2hhdFwiIHZhbHVlPVwidmlkZW9cIiBvbkNoYW5nZT17dGhpcy5zd2l0Y2hDaGF0LmJpbmQodGhpcyl9Lz5WaWRlbyBPZmZcclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8VGV4dENoYXQvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9DaGF0Vmlldy5qc3giXSwic291cmNlUm9vdCI6IiJ9