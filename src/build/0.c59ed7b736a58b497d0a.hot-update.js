webpackHotUpdate(0,{

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(102); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(102);
	
	var _react2 = _interopRequireDefault(_react);
	
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
	      message: '',
	      messages: []
	    };
	    return _this;
	  }
	
	  _createClass(Chat, [{
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
	      this.setState({ message: e.target.value });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'Chat' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          ' Chat '
	        ),
	        _react2.default.createElement(
	          'form',
	          { onSubmit: this.sendMessage.bind(this) },
	          _react2.default.createElement('input', { type: 'text', value: this.state.message, onChange: this.updateInput.bind(this) }),
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
	
	  return Chat;
	}(_react2.default.Component);
	
	;
	
	exports.default = Chat;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(232); if (makeExportsHot(module, __webpack_require__(102))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ChatView.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DaGF0Vmlldy5qc3g/MmM2ZiJdLCJuYW1lcyI6WyJDaGF0Iiwic3RhdGUiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJzb2NrZXQiLCJ3aW5kb3ciLCJjb250ZXh0Iiwib24iLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWl0IiwidGFyZ2V0IiwidmFsdWUiLCJzZW5kTWVzc2FnZSIsImJpbmQiLCJ1cGRhdGVJbnB1dCIsIm1hcCIsIm1lc3NhZ2VPYmoiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7S0FFTUEsSTs7O0FBQ0osbUJBQWM7QUFBQTs7QUFBQTs7QUFFWixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVMsRUFERTtBQUVYQyxpQkFBVTtBQUZDLE1BQWI7QUFGWTtBQU1iOzs7O3lDQUVtQjtBQUNsQixXQUFJQyxTQUFTQyxPQUFPRCxNQUFwQjtBQUNBLFdBQUlFLFVBQVUsSUFBZDtBQUNBRixjQUFPRyxFQUFQLENBQVUsZ0JBQVYsRUFBNEIsVUFBU0wsT0FBVCxFQUFrQjtBQUM1Q0ksaUJBQVFFLFFBQVIsQ0FBaUI7QUFDZkwscUJBQVVEO0FBREssVUFBakI7QUFHQU8saUJBQVFDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ0osUUFBUUwsS0FBNUM7QUFDRCxRQUxEOztBQU9BLFlBQUtPLFFBQUwsQ0FBYztBQUNaSixpQkFBUUE7QUFESSxRQUFkO0FBR0Q7OztpQ0FDV08sQyxFQUFHO0FBQ2JBLFNBQUVDLGNBQUY7QUFDQVAsY0FBT0QsTUFBUCxDQUFjUyxJQUFkLENBQW1CLGFBQW5CLEVBQWtDLEtBQUtaLEtBQUwsQ0FBV0MsT0FBN0M7QUFDRDs7O2lDQUVXUyxDLEVBQUc7QUFDYixZQUFLSCxRQUFMLENBQWMsRUFBQ04sU0FBU1MsRUFBRUcsTUFBRixDQUFTQyxLQUFuQixFQUFkO0FBQ0Q7Ozs4QkFFUTtBQUNQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBRUU7QUFBQTtBQUFBLGFBQU0sVUFBVSxLQUFLQyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFoQjtBQUNFLG9EQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUtoQixLQUFMLENBQVdDLE9BQXJDLEVBQThDLFVBQVUsS0FBS2dCLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBQXhELEdBREY7QUFFRSxvREFBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQjtBQUZGLFVBRkY7QUFNRTtBQUFBO0FBQUEsYUFBSyxJQUFHLFNBQVI7QUFDRyxnQkFBS2hCLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQmdCLEdBQXBCLENBQXlCLFVBQUNDLFVBQUQ7QUFBQSxvQkFDeEI7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUtBLDRCQUFXLFFBQVg7QUFBTCxnQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFNQSw0QkFBV2xCO0FBQWpCO0FBRkYsY0FEd0I7QUFBQSxZQUF6QjtBQURIO0FBTkYsUUFERjtBQWlCRDs7OztHQWxEZ0IsZ0JBQU1tQixTOztBQW1EeEI7O21CQUdjckIsSSIsImZpbGUiOiIwLmM1OWVkN2I3MzZhNThiNDk3ZDBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQ2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgIG1lc3NhZ2VzOiBbXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdmFyIHNvY2tldCA9IHdpbmRvdy5zb2NrZXQ7XHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XHJcbiAgICBzb2NrZXQub24oJ3JlY2VpdmVNZXNzYWdlJywgZnVuY3Rpb24obWVzc2FnZSkge1xyXG4gICAgICBjb250ZXh0LnNldFN0YXRlKHtcclxuICAgICAgICBtZXNzYWdlczogbWVzc2FnZVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ2luIHJlY2VpdmVNZXNzYWdlIDogJywgY29udGV4dC5zdGF0ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc29ja2V0OiBzb2NrZXRcclxuICAgIH0pO1xyXG4gIH1cclxuICBzZW5kTWVzc2FnZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ3NlbmRNZXNzYWdlJywgdGhpcy5zdGF0ZS5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUlucHV0KGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYXRcIj5cclxuICAgICAgICA8aDE+IENoYXQgPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zZW5kTWVzc2FnZS5iaW5kKHRoaXMpfT4gXHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5tZXNzYWdlfSBvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dC5iaW5kKHRoaXMpfSAvPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjaGF0Qm94XCI+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlcy5tYXAoIChtZXNzYWdlT2JqKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgzPnttZXNzYWdlT2JqWyd1c2VySWQnXX08L2gzPlxyXG4gICAgICAgICAgICAgIDxkaXY+e21lc3NhZ2VPYmoubWVzc2FnZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0NoYXRWaWV3LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=