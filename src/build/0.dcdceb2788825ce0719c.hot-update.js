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
	      browserHistory.push({ pathname: '/home' });
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
	          _react2.default.createElement(
	            'button',
	            { className: 'optionButtons' },
	            'Controls'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'optionButtons', onClick: this.stopGame.bind(this) },
	            'Quit Game'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL0NoYXRWaWV3LmpzeD85MzljIl0sIm5hbWVzIjpbIkNoYXQiLCJzdGF0ZSIsInRleHQiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJzZXRTdGF0ZSIsInNvY2tldCIsImVtaXQiLCJsb2NhdGlvbiIsInJlbG9hZCIsImJyb3dzZXJIaXN0b3J5IiwicHVzaCIsInBhdGhuYW1lIiwic3RvcEdhbWUiLCJiaW5kIiwic3dpdGNoQ2hhdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxJOzs7QUFDSixtQkFBYztBQUFBOztBQUFBOztBQUVaLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFNO0FBREssTUFBYjtBQUdBQyxhQUFRQyxHQUFSLENBQVksTUFBS0gsS0FBTCxDQUFXQyxJQUF2QjtBQUxZO0FBTWI7Ozs7Z0NBRVVHLEssRUFBTztBQUNoQixZQUFLQyxRQUFMLENBQWM7QUFDWkosZUFBTUc7QUFETSxRQUFkOztBQUlBLFdBQUlBLFVBQVUsT0FBZCxFQUF1QjtBQUNyQkUsZ0JBQU9DLElBQVAsQ0FBWSxnQkFBWixFQUE4QixFQUE5QjtBQUNEO0FBQ0Y7OztnQ0FFVTtBQUNUQyxnQkFBU0MsTUFBVDtBQUNBQyxzQkFBZUMsSUFBZixDQUFvQixFQUFFQyxVQUFVLE9BQVosRUFBcEI7QUFDRDs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLE1BQWY7QUFDRTtBQUFBO0FBQUEsYUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFFRTtBQUFBO0FBQUEsZUFBUSxXQUFVLGVBQWxCO0FBQUE7QUFBQSxZQUZGO0FBR0U7QUFBQTtBQUFBLGVBQVEsV0FBVSxlQUFsQixFQUFrQyxTQUFTLEtBQUtDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUEzQztBQUFBO0FBQUEsWUFIRjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQUVFLHNEQUFPLE1BQUssT0FBWixFQUFvQixNQUFLLE1BQXpCLEVBQWdDLE9BQU0sTUFBdEMsRUFBNkMsVUFBVSxLQUFLQyxVQUFMLENBQWdCRCxJQUFoQixDQUFxQixJQUFyQixFQUEyQixNQUEzQixDQUF2RCxHQUZGO0FBQUE7QUFHRSxzREFBTyxNQUFLLE9BQVosRUFBb0IsTUFBSyxNQUF6QixFQUFnQyxPQUFNLE9BQXRDLEVBQThDLFVBQVUsS0FBS0MsVUFBTCxDQUFnQkQsSUFBaEIsQ0FBcUIsSUFBckIsRUFBMkIsT0FBM0IsQ0FBeEQsR0FIRjtBQUFBO0FBQUE7QUFKRixVQURGO0FBV0csY0FBS2QsS0FBTCxDQUFXQyxJQUFYLEtBQW9CLE9BQXBCLEdBQThCLHdEQUE5QixHQUE2QztBQVhoRCxRQURGO0FBZUQ7Ozs7R0F4Q2dCLGdCQUFNZSxTOztBQXlDeEI7O21CQUdjakIsSSIsImZpbGUiOiIwLmRjZGNlYjI3ODg4MjVjZTA3MTljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBUZXh0Q2hhdCBmcm9tICcuL1RleHRDaGF0LmpzeCdcbmltcG9ydCBWaWRlb0NoYXQgZnJvbSAnLi9WaWRlb0NoYXQuanN4JztcblxuY2xhc3MgQ2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRleHQ6IFwidmlkZW9cIlxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRleHQpXG4gIH1cblxuICBzd2l0Y2hDaGF0KHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0ZXh0OiB2YWx1ZVxuICAgIH0pXG5cbiAgICBpZiAodmFsdWUgPT09ICd2aWRlbycpIHtcbiAgICAgIHNvY2tldC5lbWl0KCdjaGFuZ2VkVG9WaWRlbycsICcnKTtcbiAgICB9XG4gIH1cblxuICBzdG9wR2FtZSgpIHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICBicm93c2VySGlzdG9yeS5wdXNoKHsgcGF0aG5hbWU6ICcvaG9tZSd9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYXRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJPcHRpb25zXCI+XG4gICAgICAgICAgPGgxPk1hemluZyBGcmllbmRzPC9oMT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm9wdGlvbkJ1dHRvbnNcIj5Db250cm9sczwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3B0aW9uQnV0dG9uc1wiIG9uQ2xpY2s9e3RoaXMuc3RvcEdhbWUuYmluZCh0aGlzKX0+UXVpdCBHYW1lPC9idXR0b24+XG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8aDM+Q2hhdCBPcHRpb25zPC9oMz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY2hhdFwiIHZhbHVlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnN3aXRjaENoYXQuYmluZCh0aGlzLCBcInRleHRcIil9Lz5UZXh0XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNoYXRcIiB2YWx1ZT1cInZpZGVvXCIgb25DaGFuZ2U9e3RoaXMuc3dpdGNoQ2hhdC5iaW5kKHRoaXMsIFwidmlkZW9cIil9Lz5WaWRlb1xuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLnRleHQgPT09IFwidmlkZW9cIiA/IDxWaWRlb0NoYXQvPiA6IDxUZXh0Q2hhdC8+IH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgQ2hhdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9HYW1lL0NoYXRWaWV3LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=