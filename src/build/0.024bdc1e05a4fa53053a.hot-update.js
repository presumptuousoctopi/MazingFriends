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
	      messages: []
	
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
	    value: function onFocus(e) {
	      e.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'TextChat' },
	        _react2.default.createElement(
	          'form',
	          { onSubmit: this.sendMessage.bind(this) },
	          _react2.default.createElement('input', { type: 'text', value: this.state.message, onFocus: this.onFocus.bind(this), onChange: this.updateInput.bind(this) }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1RleHRDaGF0LmpzeD8yYjc0Il0sIm5hbWVzIjpbIlRleHRDaGF0Iiwic3RhdGUiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJzb2NrZXQiLCJ3aW5kb3ciLCJjb250ZXh0Iiwib24iLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWl0IiwidGFyZ2V0IiwidmFsdWUiLCJzZW5kTWVzc2FnZSIsImJpbmQiLCJvbkZvY3VzIiwidXBkYXRlSW5wdXQiLCJtYXAiLCJtZXNzYWdlT2JqIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0tBRU1BLFE7OztBQUNKLHVCQUFjO0FBQUE7O0FBQUE7O0FBRVosV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFTLEVBREU7QUFFWEMsaUJBQVU7O0FBRkMsTUFBYjtBQUZZO0FBT2I7Ozs7eUNBRW1CO0FBQ2xCLFdBQUlDLFNBQVNDLE9BQU9ELE1BQXBCO0FBQ0EsV0FBSUUsVUFBVSxJQUFkO0FBQ0FGLGNBQU9HLEVBQVAsQ0FBVSxnQkFBVixFQUE0QixVQUFTTCxPQUFULEVBQWtCO0FBQzVDSSxpQkFBUUUsUUFBUixDQUFpQjtBQUNmTCxxQkFBVUQ7QUFESyxVQUFqQjtBQUdBTyxpQkFBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9DSixRQUFRTCxLQUE1QztBQUNELFFBTEQ7O0FBT0EsWUFBS08sUUFBTCxDQUFjO0FBQ1pKLGlCQUFRQTtBQURJLFFBQWQ7QUFHRDs7O2lDQUVXTyxDLEVBQUc7QUFDYkEsU0FBRUMsY0FBRjtBQUNBUCxjQUFPRCxNQUFQLENBQWNTLElBQWQsQ0FBbUIsYUFBbkIsRUFBa0MsS0FBS1osS0FBTCxDQUFXQyxPQUE3QztBQUNEOzs7aUNBRVdTLEMsRUFBRztBQUNiQSxTQUFFQyxjQUFGO0FBQ0EsWUFBS0osUUFBTCxDQUFjLEVBQUNOLFNBQVNTLEVBQUVHLE1BQUYsQ0FBU0MsS0FBbkIsRUFBZDtBQUNEOzs7NkJBRU9KLEMsRUFBRztBQUNUQSxTQUFFQyxjQUFGO0FBQ0Q7Ozs4QkFFUTtBQUNQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLGFBQU0sVUFBVSxLQUFLSSxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFoQjtBQUNFLG9EQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUtoQixLQUFMLENBQVdDLE9BQXJDLEVBQThDLFNBQVMsS0FBS2dCLE9BQUwsQ0FBYUQsSUFBYixDQUFrQixJQUFsQixDQUF2RCxFQUFnRixVQUFVLEtBQUtFLFdBQUwsQ0FBaUJGLElBQWpCLENBQXNCLElBQXRCLENBQTFGLEdBREY7QUFFRSxvREFBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQjtBQUZGLFVBREY7QUFLRTtBQUFBO0FBQUEsYUFBSyxJQUFHLFNBQVI7QUFDRyxnQkFBS2hCLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQmlCLEdBQXBCLENBQXlCLFVBQUNDLFVBQUQ7QUFBQSxvQkFDeEI7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUtBLDRCQUFXLFFBQVg7QUFBTCxnQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFNQSw0QkFBV25CO0FBQWpCO0FBRkYsY0FEd0I7QUFBQSxZQUF6QjtBQURIO0FBTEYsUUFERjtBQWdCRDs7OztHQXhEb0IsZ0JBQU1vQixTOztBQXlENUI7O21CQUdjdEIsUSIsImZpbGUiOiIwLjAyNGJkYzFlMDVhNGZhNTMwNTNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgVGV4dENoYXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICBtZXNzYWdlczogW10sXHJcbiAgICAgIFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdmFyIHNvY2tldCA9IHdpbmRvdy5zb2NrZXQ7XHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XHJcbiAgICBzb2NrZXQub24oJ3JlY2VpdmVNZXNzYWdlJywgZnVuY3Rpb24obWVzc2FnZSkge1xyXG4gICAgICBjb250ZXh0LnNldFN0YXRlKHtcclxuICAgICAgICBtZXNzYWdlczogbWVzc2FnZVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ2luIHJlY2VpdmVNZXNzYWdlIDogJywgY29udGV4dC5zdGF0ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc29ja2V0OiBzb2NrZXRcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBzZW5kTWVzc2FnZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ3NlbmRNZXNzYWdlJywgdGhpcy5zdGF0ZS5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUlucHV0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGV4dENoYXRcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zZW5kTWVzc2FnZS5iaW5kKHRoaXMpfT4gXHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5tZXNzYWdlfSBvbkZvY3VzPXt0aGlzLm9uRm9jdXMuYmluZCh0aGlzKX0gb25DaGFuZ2U9e3RoaXMudXBkYXRlSW5wdXQuYmluZCh0aGlzKX0gLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8ZGl2IGlkPVwiY2hhdEJveFwiPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZXMubWFwKCAobWVzc2FnZU9iaikgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMz57bWVzc2FnZU9ialsndXNlcklkJ119PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2PnttZXNzYWdlT2JqLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dENoYXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9UZXh0Q2hhdC5qc3giXSwic291cmNlUm9vdCI6IiJ9