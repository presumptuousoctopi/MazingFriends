webpackHotUpdate(0,{

/***/ 271:
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
	
	var TextChat = function (_React$Component) {
	  _inherits(TextChat, _React$Component);
	
	  function TextChat() {
	    _classCallCheck(this, TextChat);
	
	    var _this = _possibleConstructorReturn(this, (TextChat.__proto__ || Object.getPrototypeOf(TextChat)).call(this));
	
	    _this.state = {
	      message: '',
	      messages: [],
	      focus: false
	    };
	    return _this;
	  }
	
	  _createClass(TextChat, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var socket = window.socket;
	      var context = this;
	      socket.on('receiveMessage', function (message) {
	        context.setState({
	          messages: message
	        });
	        console.log('in receiveMessage : ', context.state);
	      });
	
	      this.setState({
	        socket: socket
	      });
	    }
	  }, {
	    key: 'sendMessage',
	    value: function sendMessage(e) {
	      e.preventDefault();
	      window.socket.emit('sendMessage', this.state.message);
	    }
	  }, {
	    key: 'updateInput',
	    value: function updateInput(e) {
	      e.preventDefault();
	      this.setState({ message: e.target.value });
	    }
	  }, {
	    key: 'onFocus',
	    value: function onFocus() {
	      this.setState({
	        focus: true
	      });
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'TextChat' },
	        _react2.default.createElement(
	          'form',
	          { onSubmit: this.sendMessage.bind(this) },
	          _react2.default.createElement('input', { type: 'text', value: this.state.message, onFocus: this.onFocus.bind(this), onChange: this.updateInput.bind(this), onBlur: this.onBlur.bind(this) }),
	          _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { id: 'chatBox' },
	          this.state.messages.map(function (messageObj) {
	            return _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'h3',
	                null,
	                messageObj['userId']
	              ),
	              _react2.default.createElement(
	                'div',
	                null,
	                messageObj.message
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);
	
	  return TextChat;
	}(_react2.default.Component);
	
	;
	
	exports.default = TextChat;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "TextChat.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1RleHRDaGF0LmpzeD8yYjc0Il0sIm5hbWVzIjpbIlRleHRDaGF0Iiwic3RhdGUiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJmb2N1cyIsInNvY2tldCIsIndpbmRvdyIsImNvbnRleHQiLCJvbiIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtaXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmRNZXNzYWdlIiwiYmluZCIsIm9uRm9jdXMiLCJ1cGRhdGVJbnB1dCIsIm9uQmx1ciIsIm1hcCIsIm1lc3NhZ2VPYmoiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7S0FFTUEsUTs7O0FBQ0osdUJBQWM7QUFBQTs7QUFBQTs7QUFFWixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVMsRUFERTtBQUVYQyxpQkFBVSxFQUZDO0FBR1hDLGNBQU87QUFISSxNQUFiO0FBRlk7QUFPYjs7Ozt5Q0FFbUI7QUFDbEIsV0FBSUMsU0FBU0MsT0FBT0QsTUFBcEI7QUFDQSxXQUFJRSxVQUFVLElBQWQ7QUFDQUYsY0FBT0csRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFVBQVNOLE9BQVQsRUFBa0I7QUFDNUNLLGlCQUFRRSxRQUFSLENBQWlCO0FBQ2ZOLHFCQUFVRDtBQURLLFVBQWpCO0FBR0FRLGlCQUFRQyxHQUFSLENBQVksc0JBQVosRUFBb0NKLFFBQVFOLEtBQTVDO0FBQ0QsUUFMRDs7QUFPQSxZQUFLUSxRQUFMLENBQWM7QUFDWkosaUJBQVFBO0FBREksUUFBZDtBQUdEOzs7aUNBRVdPLEMsRUFBRztBQUNiQSxTQUFFQyxjQUFGO0FBQ0FQLGNBQU9ELE1BQVAsQ0FBY1MsSUFBZCxDQUFtQixhQUFuQixFQUFrQyxLQUFLYixLQUFMLENBQVdDLE9BQTdDO0FBQ0Q7OztpQ0FFV1UsQyxFQUFHO0FBQ2JBLFNBQUVDLGNBQUY7QUFDQSxZQUFLSixRQUFMLENBQWMsRUFBQ1AsU0FBU1UsRUFBRUcsTUFBRixDQUFTQyxLQUFuQixFQUFkO0FBQ0Q7OzsrQkFFUztBQUNSLFlBQUtQLFFBQUwsQ0FBYztBQUNWTCxnQkFBTztBQURHLFFBQWQ7QUFJRDs7OzhCQUVRLENBRVI7Ozs4QkFFUTtBQUNQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLGFBQU0sVUFBVSxLQUFLYSxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFoQjtBQUNFLG9EQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUtqQixLQUFMLENBQVdDLE9BQXJDLEVBQThDLFNBQVMsS0FBS2lCLE9BQUwsQ0FBYUQsSUFBYixDQUFrQixJQUFsQixDQUF2RCxFQUFnRixVQUFVLEtBQUtFLFdBQUwsQ0FBaUJGLElBQWpCLENBQXNCLElBQXRCLENBQTFGLEVBQXVILFFBQVEsS0FBS0csTUFBTCxDQUFZSCxJQUFaLENBQWlCLElBQWpCLENBQS9ILEdBREY7QUFFRSxvREFBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQjtBQUZGLFVBREY7QUFLRTtBQUFBO0FBQUEsYUFBSyxJQUFHLFNBQVI7QUFDRyxnQkFBS2pCLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQm1CLEdBQXBCLENBQXlCLFVBQUNDLFVBQUQ7QUFBQSxvQkFDeEI7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUtBLDRCQUFXLFFBQVg7QUFBTCxnQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFNQSw0QkFBV3JCO0FBQWpCO0FBRkYsY0FEd0I7QUFBQSxZQUF6QjtBQURIO0FBTEYsUUFERjtBQWdCRDs7OztHQS9Eb0IsZ0JBQU1zQixTOztBQWdFNUI7O21CQUdjeEIsUSIsImZpbGUiOiIwLjQ1NDNmNmQ5MTc2ZTY2MjNlYWE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgVGV4dENoYXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICBtZXNzYWdlczogW10sXHJcbiAgICAgIGZvY3VzOiBmYWxzZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdmFyIHNvY2tldCA9IHdpbmRvdy5zb2NrZXQ7XHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XHJcbiAgICBzb2NrZXQub24oJ3JlY2VpdmVNZXNzYWdlJywgZnVuY3Rpb24obWVzc2FnZSkge1xyXG4gICAgICBjb250ZXh0LnNldFN0YXRlKHtcclxuICAgICAgICBtZXNzYWdlczogbWVzc2FnZVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ2luIHJlY2VpdmVNZXNzYWdlIDogJywgY29udGV4dC5zdGF0ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc29ja2V0OiBzb2NrZXRcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBzZW5kTWVzc2FnZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ3NlbmRNZXNzYWdlJywgdGhpcy5zdGF0ZS5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUlucHV0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZm9jdXM6IHRydWVcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBvbkJsdXIoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZXh0Q2hhdFwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnNlbmRNZXNzYWdlLmJpbmQodGhpcyl9PiBcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm1lc3NhZ2V9IG9uRm9jdXM9e3RoaXMub25Gb2N1cy5iaW5kKHRoaXMpfSBvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dC5iaW5kKHRoaXMpfSBvbkJsdXI9e3RoaXMub25CbHVyLmJpbmQodGhpcyl9IC8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBpZD1cImNoYXRCb3hcIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2VzLm1hcCggKG1lc3NhZ2VPYmopID0+IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDM+e21lc3NhZ2VPYmpbJ3VzZXJJZCddfTwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdj57bWVzc2FnZU9iai5tZXNzYWdlfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRDaGF0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbWUvVGV4dENoYXQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==