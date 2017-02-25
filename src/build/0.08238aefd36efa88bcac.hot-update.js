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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Chat = function (_React$Component) {
	  _inherits(Chat, _React$Component);
	
	  function Chat() {
	    _classCallCheck(this, Chat);
	
	    var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this));
	
	    _this.state = {
	      text: "video"
	    };
	    console.log(_this.state.text);
	    return _this;
	  }
	
	  _createClass(Chat, [{
	    key: 'switchChat',
	    value: function switchChat(value) {
	      this.setState({
	        text: value
	      });
	      if (value === 'video') {
	        socket.emit('changedToVideo', '');
	      }
	    }
	  }, {
	    key: 'stopGame',
	    value: function stopGame() {
	      location.reload();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
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
	            'waiting for second player'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'optionButtons' },
	            'Controls'
	          ),
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { to: '../' },
	            _react2.default.createElement(
	              'button',
	              { className: 'optionButtons', onClick: this.stopGame.bind(this) },
	              'Quit Game'
	            )
	          ),
	          _react2.default.createElement(
	            'form',
	            null,
	            _react2.default.createElement(
	              'h3',
	              null,
	              'Chat Options'
	            ),
	            _react2.default.createElement('input', { type: 'radio', name: 'chat', value: 'text', onChange: this.switchChat.bind(this, "text") }),
	            'Text',
	            _react2.default.createElement('input', { type: 'radio', name: 'chat', value: 'video', onChange: this.switchChat.bind(this, "video") }),
	            'Video'
	          )
	        ),
	        this.state.text === "video" ? _react2.default.createElement(_VideoChat2.default, null) : _react2.default.createElement(_TextChat2.default, null)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0NoYXRWaWV3LmpzeD85MzljIl0sIm5hbWVzIjpbIkNoYXQiLCJzdGF0ZSIsInRleHQiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJzZXRTdGF0ZSIsInNvY2tldCIsImVtaXQiLCJsb2NhdGlvbiIsInJlbG9hZCIsInByb3BzIiwidGltZXIiLCJzdG9wR2FtZSIsImJpbmQiLCJzd2l0Y2hDaGF0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRU1BLEk7OztBQUNKLG1CQUFjO0FBQUE7O0FBQUE7O0FBRVosV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU07QUFESyxNQUFiO0FBR0FDLGFBQVFDLEdBQVIsQ0FBWSxNQUFLSCxLQUFMLENBQVdDLElBQXZCO0FBTFk7QUFNYjs7OztnQ0FFVUcsSyxFQUFPO0FBQ2hCLFlBQUtDLFFBQUwsQ0FBYztBQUNaSixlQUFNRztBQURNLFFBQWQ7QUFHQSxXQUFJQSxVQUFVLE9BQWQsRUFBdUI7QUFDckJFLGdCQUFPQyxJQUFQLENBQVksZ0JBQVosRUFBOEIsRUFBOUI7QUFDRDtBQUNGOzs7Z0NBRVU7QUFDVEMsZ0JBQVNDLE1BQVQ7QUFDRDs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLE1BQWY7QUFDRTtBQUFBO0FBQUEsYUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFFRyxnQkFBS0MsS0FBTCxDQUFXQyxLQUFYLEdBQW1CO0FBQUE7QUFBQTtBQUFLLGtCQUFLRCxLQUFMLENBQVdDO0FBQWhCLFlBQW5CLEdBQWlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGcEQ7QUFHRTtBQUFBO0FBQUEsZUFBUSxXQUFVLGVBQWxCO0FBQUE7QUFBQSxZQUhGO0FBSUU7QUFBQTtBQUFBLGVBQU0sSUFBRyxLQUFUO0FBQWU7QUFBQTtBQUFBLGlCQUFRLFdBQVUsZUFBbEIsRUFBa0MsU0FBUyxLQUFLQyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBM0M7QUFBQTtBQUFBO0FBQWYsWUFKRjtBQUtFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQUVFLHNEQUFPLE1BQUssT0FBWixFQUFvQixNQUFLLE1BQXpCLEVBQWdDLE9BQU0sTUFBdEMsRUFBNkMsVUFBVSxLQUFLQyxVQUFMLENBQWdCRCxJQUFoQixDQUFxQixJQUFyQixFQUEyQixNQUEzQixDQUF2RCxHQUZGO0FBQUE7QUFHRSxzREFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxNQUF6QixFQUFnQyxPQUFNLE9BQXRDLEVBQThDLFVBQVUsS0FBS0MsVUFBTCxDQUFnQkQsSUFBaEIsQ0FBcUIsSUFBckIsRUFBMkIsT0FBM0IsQ0FBeEQsR0FIRjtBQUFBO0FBQUE7QUFMRixVQURGO0FBWUcsY0FBS2IsS0FBTCxDQUFXQyxJQUFYLEtBQW9CLE9BQXBCLEdBQThCLHdEQUE5QixHQUE2QztBQVpoRCxRQURGO0FBZ0JEOzs7O0dBdkNnQixnQkFBTWMsUzs7QUF3Q3hCOzttQkFHY2hCLEkiLCJmaWxlIjoiMC4wODIzOGFlZmQzNmVmYTg4YmNhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgVGV4dENoYXQgZnJvbSAnLi9UZXh0Q2hhdC5qc3gnXHJcbmltcG9ydCBWaWRlb0NoYXQgZnJvbSAnLi9WaWRlb0NoYXQuanN4JztcclxuXHJcbmNsYXNzIENoYXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHRleHQ6IFwidmlkZW9cIlxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS50ZXh0KVxyXG4gIH1cclxuXHJcbiAgc3dpdGNoQ2hhdCh2YWx1ZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHRleHQ6IHZhbHVlXHJcbiAgICB9KVxyXG4gICAgaWYgKHZhbHVlID09PSAndmlkZW8nKSB7XHJcbiAgICAgIHNvY2tldC5lbWl0KCdjaGFuZ2VkVG9WaWRlbycsICcnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3BHYW1lKCkge1xyXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk9wdGlvbnNcIj5cclxuICAgICAgICAgIDxoMT5NYXppbmcgRnJpZW5kczwvaDE+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy50aW1lciA/IDxoMj57dGhpcy5wcm9wcy50aW1lcn08L2gyPiA6IDxwPndhaXRpbmcgZm9yIHNlY29uZCBwbGF5ZXI8L3A+fVxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb25CdXR0b25zXCI+Q29udHJvbHM8L2J1dHRvbj5cclxuICAgICAgICAgIDxMaW5rIHRvPVwiLi4vXCI+PGJ1dHRvbiBjbGFzc05hbWU9XCJvcHRpb25CdXR0b25zXCIgb25DbGljaz17dGhpcy5zdG9wR2FtZS5iaW5kKHRoaXMpfT5RdWl0IEdhbWU8L2J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGgzPkNoYXQgT3B0aW9uczwvaDM+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2hhdFwiIHZhbHVlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnN3aXRjaENoYXQuYmluZCh0aGlzLCBcInRleHRcIil9Lz5UZXh0XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2hhdFwiIHZhbHVlPVwidmlkZW9cIiBvbkNoYW5nZT17dGhpcy5zd2l0Y2hDaGF0LmJpbmQodGhpcywgXCJ2aWRlb1wiKX0vPlZpZGVvXHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3RoaXMuc3RhdGUudGV4dCA9PT0gXCJ2aWRlb1wiID8gPFZpZGVvQ2hhdC8+IDogPFRleHRDaGF0Lz4gfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9DaGF0Vmlldy5qc3giXSwic291cmNlUm9vdCI6IiJ9