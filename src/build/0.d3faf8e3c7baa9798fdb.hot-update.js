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
	      window.socket.emit('sendMessage', {
	        message: this.state.message,
	        user: sessionStorage.getItem('user')
	      });
	      this.clearMessage();
	    }
	  }, {
	    key: 'updateInput',
	    value: function updateInput(e) {
	      e.preventDefault();
	      this.setState({ message: e.target.value });
	    }
	  }, {
	    key: 'clearMessage',
	    value: function clearMessage() {
	      this.setState({
	        message: ''
	      });
	    }
	  }, {
	    key: 'onFocus',
	    value: function onFocus() {
	      // disabling 'wasd' for game movement
	      window.camera.keysUp = [];
	      window.camera.keysDown = [];
	      window.camera.keysLeft = [];
	      window.camera.keysRight = [];
	      window.userOnChat = true;
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur() {
	      // enabling 'wasd' for game movement
	      camera.keysUp = [87];
	      camera.keysDown = [83];
	      camera.keysLeft = [65];
	      camera.keysRight = [68];
	      window.userOnChat = false;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'TextChat' },
	        _react2.default.createElement(
	          'div',
	          { className: 'ChatContainer' },
	          _react2.default.createElement(
	            'div',
	            { className: 'ChatBox' },
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
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'TextInput' },
	          _react2.default.createElement(
	            'form',
	            { onSubmit: this.sendMessage.bind(this) },
	            _react2.default.createElement('input', { type: 'text', className: 'chatBar', onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), value: this.state.message, onChange: this.updateInput.bind(this) }),
	            _react2.default.createElement('input', { type: 'submit', value: 'Submit', className: 'chatBtn' })
	          )
	        )
	      );
	    }
	  }]);
	
	  return TextChat;
	}(_react2.default.Component);
	
	exports.default = TextChat;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(272); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "TextChat.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1RleHRDaGF0LmpzeD8yYjc0Il0sIm5hbWVzIjpbIlRleHRDaGF0Iiwic3RhdGUiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJzb2NrZXQiLCJ3aW5kb3ciLCJjb250ZXh0Iiwib24iLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWl0IiwidXNlciIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImNsZWFyTWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwiY2FtZXJhIiwia2V5c1VwIiwia2V5c0Rvd24iLCJrZXlzTGVmdCIsImtleXNSaWdodCIsInVzZXJPbkNoYXQiLCJtYXAiLCJtZXNzYWdlT2JqIiwic2VuZE1lc3NhZ2UiLCJiaW5kIiwib25Gb2N1cyIsIm9uQmx1ciIsInVwZGF0ZUlucHV0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0tBRU1BLFE7OztBQUNKLHVCQUFjO0FBQUE7O0FBQUE7O0FBRVosV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFTLEVBREU7QUFFWEMsaUJBQVU7QUFGQyxNQUFiO0FBRlk7QUFNYjs7Ozt5Q0FFbUI7QUFDbEIsV0FBSUMsU0FBU0MsT0FBT0QsTUFBcEI7QUFDQSxXQUFJRSxVQUFVLElBQWQ7QUFDQUYsY0FBT0csRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFVBQVNMLE9BQVQsRUFBa0I7QUFDNUNJLGlCQUFRRSxRQUFSLENBQWlCO0FBQ2ZMLHFCQUFVRDtBQURLLFVBQWpCO0FBR0FPLGlCQUFRQyxHQUFSLENBQVksc0JBQVosRUFBb0NKLFFBQVFMLEtBQTVDO0FBQ0QsUUFMRDs7QUFPQSxZQUFLTyxRQUFMLENBQWM7QUFDWkosaUJBQVFBO0FBREksUUFBZDtBQUdEOzs7aUNBRVdPLEMsRUFBRztBQUNiQSxTQUFFQyxjQUFGO0FBQ0FQLGNBQU9ELE1BQVAsQ0FBY1MsSUFBZCxDQUFtQixhQUFuQixFQUFrQztBQUNoQ1gsa0JBQVMsS0FBS0QsS0FBTCxDQUFXQyxPQURZO0FBRWhDWSxlQUFNQyxlQUFlQyxPQUFmLENBQXVCLE1BQXZCO0FBRjBCLFFBQWxDO0FBSUEsWUFBS0MsWUFBTDtBQUNEOzs7aUNBRVdOLEMsRUFBRztBQUNiQSxTQUFFQyxjQUFGO0FBQ0EsWUFBS0osUUFBTCxDQUFjLEVBQUNOLFNBQVNTLEVBQUVPLE1BQUYsQ0FBU0MsS0FBbkIsRUFBZDtBQUNEOzs7b0NBRWM7QUFDYixZQUFLWCxRQUFMLENBQWM7QUFDWk4sa0JBQVM7QUFERyxRQUFkO0FBR0Q7OzsrQkFFUztBQUNSO0FBQ0FHLGNBQU9lLE1BQVAsQ0FBY0MsTUFBZCxHQUF1QixFQUF2QjtBQUNBaEIsY0FBT2UsTUFBUCxDQUFjRSxRQUFkLEdBQXlCLEVBQXpCO0FBQ0FqQixjQUFPZSxNQUFQLENBQWNHLFFBQWQsR0FBeUIsRUFBekI7QUFDQWxCLGNBQU9lLE1BQVAsQ0FBY0ksU0FBZCxHQUEwQixFQUExQjtBQUNBbkIsY0FBT29CLFVBQVAsR0FBb0IsSUFBcEI7QUFFRDs7OzhCQUVRO0FBQ1A7QUFDQUwsY0FBT0MsTUFBUCxHQUFnQixDQUFDLEVBQUQsQ0FBaEI7QUFDQUQsY0FBT0UsUUFBUCxHQUFrQixDQUFDLEVBQUQsQ0FBbEI7QUFDQUYsY0FBT0csUUFBUCxHQUFrQixDQUFDLEVBQUQsQ0FBbEI7QUFDQUgsY0FBT0ksU0FBUCxHQUFtQixDQUFDLEVBQUQsQ0FBbkI7QUFDQW5CLGNBQU9vQixVQUFQLEdBQW9CLEtBQXBCO0FBRUQ7Ozs4QkFFUTtBQUNQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLGFBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBLGVBQUssV0FBVSxTQUFmO0FBQ0csa0JBQUt4QixLQUFMLENBQVdFLFFBQVgsQ0FBb0J1QixHQUFwQixDQUF5QixVQUFDQyxVQUFEO0FBQUEsc0JBQ3hCO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFLQSw4QkFBVyxRQUFYO0FBQUwsa0JBREY7QUFFRTtBQUFBO0FBQUE7QUFBTUEsOEJBQVd6QjtBQUFqQjtBQUZGLGdCQUR3QjtBQUFBLGNBQXpCO0FBREg7QUFERixVQURGO0FBV0U7QUFBQTtBQUFBLGFBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGVBQU0sVUFBVSxLQUFLMEIsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBaEI7QUFDRSxzREFBTyxNQUFLLE1BQVosRUFBbUIsV0FBVSxTQUE3QixFQUF1QyxTQUFTLEtBQUtDLE9BQUwsQ0FBYUQsSUFBYixDQUFrQixJQUFsQixDQUFoRCxFQUF5RSxRQUFRLEtBQUtFLE1BQUwsQ0FBWUYsSUFBWixDQUFpQixJQUFqQixDQUFqRixFQUF5RyxPQUFPLEtBQUs1QixLQUFMLENBQVdDLE9BQTNILEVBQW9JLFVBQVUsS0FBSzhCLFdBQUwsQ0FBaUJILElBQWpCLENBQXNCLElBQXRCLENBQTlJLEdBREY7QUFFRSxzREFBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQixFQUFvQyxXQUFVLFNBQTlDO0FBRkY7QUFERjtBQVhGLFFBREY7QUFvQkQ7Ozs7R0FyRm9CLGdCQUFNSSxTOzttQkEwRmRqQyxRIiwiZmlsZSI6IjAuZDNmYWY4ZTNjN2JhYTk3OThmZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBUZXh0Q2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgIG1lc3NhZ2VzOiBbXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdmFyIHNvY2tldCA9IHdpbmRvdy5zb2NrZXQ7XHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XHJcbiAgICBzb2NrZXQub24oJ3JlY2VpdmVNZXNzYWdlJywgZnVuY3Rpb24obWVzc2FnZSkge1xyXG4gICAgICBjb250ZXh0LnNldFN0YXRlKHtcclxuICAgICAgICBtZXNzYWdlczogbWVzc2FnZVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ2luIHJlY2VpdmVNZXNzYWdlIDogJywgY29udGV4dC5zdGF0ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc29ja2V0OiBzb2NrZXRcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBzZW5kTWVzc2FnZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ3NlbmRNZXNzYWdlJywge1xyXG4gICAgICBtZXNzYWdlOiB0aGlzLnN0YXRlLm1lc3NhZ2UsXHJcbiAgICAgIHVzZXI6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXInKVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNsZWFyTWVzc2FnZSgpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbnB1dChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJNZXNzYWdlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1lc3NhZ2U6ICcnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25Gb2N1cygpIHtcclxuICAgIC8vIGRpc2FibGluZyAnd2FzZCcgZm9yIGdhbWUgbW92ZW1lbnRcclxuICAgIHdpbmRvdy5jYW1lcmEua2V5c1VwID0gW107XHJcbiAgICB3aW5kb3cuY2FtZXJhLmtleXNEb3duID0gW107IFxyXG4gICAgd2luZG93LmNhbWVyYS5rZXlzTGVmdCA9IFtdOyBcclxuICAgIHdpbmRvdy5jYW1lcmEua2V5c1JpZ2h0ID0gW107XHJcbiAgICB3aW5kb3cudXNlck9uQ2hhdCA9IHRydWU7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIG9uQmx1cigpIHtcclxuICAgIC8vIGVuYWJsaW5nICd3YXNkJyBmb3IgZ2FtZSBtb3ZlbWVudFxyXG4gICAgY2FtZXJhLmtleXNVcCA9IFs4N107XHJcbiAgICBjYW1lcmEua2V5c0Rvd24gPSBbODNdOyBcclxuICAgIGNhbWVyYS5rZXlzTGVmdCA9IFs2NV07IFxyXG4gICAgY2FtZXJhLmtleXNSaWdodCA9IFs2OF07XHJcbiAgICB3aW5kb3cudXNlck9uQ2hhdCA9IGZhbHNlO1xyXG5cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGV4dENoYXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYXRDb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhdEJveFwiPlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlcy5tYXAoIChtZXNzYWdlT2JqKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMz57bWVzc2FnZU9ialsndXNlcklkJ119PC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXY+e21lc3NhZ2VPYmoubWVzc2FnZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRJbnB1dFwiPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc2VuZE1lc3NhZ2UuYmluZCh0aGlzKX0+IFxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJjaGF0QmFyXCIgb25Gb2N1cz17dGhpcy5vbkZvY3VzLmJpbmQodGhpcyl9IG9uQmx1cj17dGhpcy5vbkJsdXIuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUubWVzc2FnZX0gb25DaGFuZ2U9e3RoaXMudXBkYXRlSW5wdXQuYmluZCh0aGlzKX0gLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIGNsYXNzTmFtZT1cImNoYXRCdG5cIiAvPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dENoYXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9UZXh0Q2hhdC5qc3giXSwic291cmNlUm9vdCI6IiJ9