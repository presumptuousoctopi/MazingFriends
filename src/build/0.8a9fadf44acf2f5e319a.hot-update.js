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
	    value: function onFocus() {
	      this.setState({
	        focus: true
	      });
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur() {
	      this.setState({
	        focus: true
	      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1RleHRDaGF0LmpzeD8yYjc0Il0sIm5hbWVzIjpbIlRleHRDaGF0Iiwic3RhdGUiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJzb2NrZXQiLCJ3aW5kb3ciLCJjb250ZXh0Iiwib24iLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWl0IiwidGFyZ2V0IiwidmFsdWUiLCJmb2N1cyIsInNlbmRNZXNzYWdlIiwiYmluZCIsIm9uRm9jdXMiLCJ1cGRhdGVJbnB1dCIsIm9uQmx1ciIsIm1hcCIsIm1lc3NhZ2VPYmoiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7S0FFTUEsUTs7O0FBQ0osdUJBQWM7QUFBQTs7QUFBQTs7QUFFWixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVMsRUFERTtBQUVYQyxpQkFBVTtBQUZDLE1BQWI7QUFGWTtBQU1iOzs7O3lDQUVtQjtBQUNsQixXQUFJQyxTQUFTQyxPQUFPRCxNQUFwQjtBQUNBLFdBQUlFLFVBQVUsSUFBZDtBQUNBRixjQUFPRyxFQUFQLENBQVUsZ0JBQVYsRUFBNEIsVUFBU0wsT0FBVCxFQUFrQjtBQUM1Q0ksaUJBQVFFLFFBQVIsQ0FBaUI7QUFDZkwscUJBQVVEO0FBREssVUFBakI7QUFHQU8saUJBQVFDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ0osUUFBUUwsS0FBNUM7QUFDRCxRQUxEOztBQU9BLFlBQUtPLFFBQUwsQ0FBYztBQUNaSixpQkFBUUE7QUFESSxRQUFkO0FBR0Q7OztpQ0FFV08sQyxFQUFHO0FBQ2JBLFNBQUVDLGNBQUY7QUFDQVAsY0FBT0QsTUFBUCxDQUFjUyxJQUFkLENBQW1CLGFBQW5CLEVBQWtDLEtBQUtaLEtBQUwsQ0FBV0MsT0FBN0M7QUFDRDs7O2lDQUVXUyxDLEVBQUc7QUFDYkEsU0FBRUMsY0FBRjtBQUNBLFlBQUtKLFFBQUwsQ0FBYyxFQUFDTixTQUFTUyxFQUFFRyxNQUFGLENBQVNDLEtBQW5CLEVBQWQ7QUFDRDs7OytCQUVTO0FBQ1IsWUFBS1AsUUFBTCxDQUFjO0FBQ1ZRLGdCQUFPO0FBREcsUUFBZDtBQUlEOzs7OEJBRVE7QUFDUCxZQUFLUixRQUFMLENBQWM7QUFDVlEsZ0JBQU87QUFERyxRQUFkO0FBSUQ7Ozs4QkFFUTtBQUNQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLGFBQU0sVUFBVSxLQUFLQyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFoQjtBQUNFLG9EQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUtqQixLQUFMLENBQVdDLE9BQXJDLEVBQThDLFNBQVMsS0FBS2lCLE9BQUwsQ0FBYUQsSUFBYixDQUFrQixJQUFsQixDQUF2RCxFQUFnRixVQUFVLEtBQUtFLFdBQUwsQ0FBaUJGLElBQWpCLENBQXNCLElBQXRCLENBQTFGLEVBQXVILFFBQVEsS0FBS0csTUFBTCxDQUFZSCxJQUFaLENBQWlCLElBQWpCLENBQS9ILEdBREY7QUFFRSxvREFBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQjtBQUZGLFVBREY7QUFLRTtBQUFBO0FBQUEsYUFBSyxJQUFHLFNBQVI7QUFDRyxnQkFBS2pCLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQm1CLEdBQXBCLENBQXlCLFVBQUNDLFVBQUQ7QUFBQSxvQkFDeEI7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUtBLDRCQUFXLFFBQVg7QUFBTCxnQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFNQSw0QkFBV3JCO0FBQWpCO0FBRkYsY0FEd0I7QUFBQSxZQUF6QjtBQURIO0FBTEYsUUFERjtBQWdCRDs7OztHQWpFb0IsZ0JBQU1zQixTOztBQWtFNUI7O21CQUdjeEIsUSIsImZpbGUiOiIwLjhhOWZhZGY0NGFjZjJmNWUzMTlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgVGV4dENoYXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICBtZXNzYWdlczogW11cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHZhciBzb2NrZXQgPSB3aW5kb3cuc29ja2V0O1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgc29ja2V0Lm9uKCdyZWNlaXZlTWVzc2FnZScsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcclxuICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdpbiByZWNlaXZlTWVzc2FnZSA6ICcsIGNvbnRleHQuc3RhdGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNvY2tldDogc29ja2V0XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgc2VuZE1lc3NhZ2UoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgd2luZG93LnNvY2tldC5lbWl0KCdzZW5kTWVzc2FnZScsIHRoaXMuc3RhdGUubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbnB1dChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgb25Gb2N1cygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGZvY3VzOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgb25CbHVyKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZm9jdXM6IHRydWVcclxuICAgIH0pO1xyXG4gXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDaGF0XCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc2VuZE1lc3NhZ2UuYmluZCh0aGlzKX0+IFxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubWVzc2FnZX0gb25Gb2N1cz17dGhpcy5vbkZvY3VzLmJpbmQodGhpcyl9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUlucHV0LmJpbmQodGhpcyl9IG9uQmx1cj17dGhpcy5vbkJsdXIuYmluZCh0aGlzKX0gLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8ZGl2IGlkPVwiY2hhdEJveFwiPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZXMubWFwKCAobWVzc2FnZU9iaikgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMz57bWVzc2FnZU9ialsndXNlcklkJ119PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2PnttZXNzYWdlT2JqLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dENoYXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9UZXh0Q2hhdC5qc3giXSwic291cmNlUm9vdCI6IiJ9