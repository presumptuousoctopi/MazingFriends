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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1RleHRDaGF0LmpzeD8yYjc0Il0sIm5hbWVzIjpbIlRleHRDaGF0Iiwic3RhdGUiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJmb2N1cyIsInNvY2tldCIsIndpbmRvdyIsImNvbnRleHQiLCJvbiIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtaXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmRNZXNzYWdlIiwiYmluZCIsIm9uRm9jdXMiLCJ1cGRhdGVJbnB1dCIsIm9uQmx1ciIsIm1hcCIsIm1lc3NhZ2VPYmoiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7S0FFTUEsUTs7O0FBQ0osdUJBQWM7QUFBQTs7QUFBQTs7QUFFWixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVMsRUFERTtBQUVYQyxpQkFBVSxFQUZDO0FBR1hDLGNBQU87QUFISSxNQUFiO0FBRlk7QUFPYjs7Ozt5Q0FFbUI7QUFDbEIsV0FBSUMsU0FBU0MsT0FBT0QsTUFBcEI7QUFDQSxXQUFJRSxVQUFVLElBQWQ7QUFDQUYsY0FBT0csRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFVBQVNOLE9BQVQsRUFBa0I7QUFDNUNLLGlCQUFRRSxRQUFSLENBQWlCO0FBQ2ZOLHFCQUFVRDtBQURLLFVBQWpCO0FBR0FRLGlCQUFRQyxHQUFSLENBQVksc0JBQVosRUFBb0NKLFFBQVFOLEtBQTVDO0FBQ0QsUUFMRDs7QUFPQSxZQUFLUSxRQUFMLENBQWM7QUFDWkosaUJBQVFBO0FBREksUUFBZDtBQUdEOzs7aUNBRVdPLEMsRUFBRztBQUNiQSxTQUFFQyxjQUFGO0FBQ0FQLGNBQU9ELE1BQVAsQ0FBY1MsSUFBZCxDQUFtQixhQUFuQixFQUFrQyxLQUFLYixLQUFMLENBQVdDLE9BQTdDO0FBQ0Q7OztpQ0FFV1UsQyxFQUFHO0FBQ2JBLFNBQUVDLGNBQUY7QUFDQSxZQUFLSixRQUFMLENBQWMsRUFBQ1AsU0FBU1UsRUFBRUcsTUFBRixDQUFTQyxLQUFuQixFQUFkO0FBQ0Q7OzsrQkFFUztBQUNSLFlBQUtQLFFBQUwsQ0FBYztBQUNWTCxnQkFBTztBQURHLFFBQWQ7QUFJRDs7OzhCQUVRO0FBQ1AsWUFBS0ssUUFBTCxDQUFjO0FBQ1ZMLGdCQUFPO0FBREcsUUFBZDtBQUlEOzs7OEJBRVE7QUFDUCxjQUNFO0FBQUE7QUFBQSxXQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxhQUFNLFVBQVUsS0FBS2EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBaEI7QUFDRSxvREFBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLakIsS0FBTCxDQUFXQyxPQUFyQyxFQUE4QyxTQUFTLEtBQUtpQixPQUFMLENBQWFELElBQWIsQ0FBa0IsSUFBbEIsQ0FBdkQsRUFBZ0YsVUFBVSxLQUFLRSxXQUFMLENBQWlCRixJQUFqQixDQUFzQixJQUF0QixDQUExRixFQUF1SCxRQUFRLEtBQUtHLE1BQUwsQ0FBWUgsSUFBWixDQUFpQixJQUFqQixDQUEvSCxHQURGO0FBRUUsb0RBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sUUFBM0I7QUFGRixVQURGO0FBS0U7QUFBQTtBQUFBLGFBQUssSUFBRyxTQUFSO0FBQ0csZ0JBQUtqQixLQUFMLENBQVdFLFFBQVgsQ0FBb0JtQixHQUFwQixDQUF5QixVQUFDQyxVQUFEO0FBQUEsb0JBQ3hCO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFLQSw0QkFBVyxRQUFYO0FBQUwsZ0JBREY7QUFFRTtBQUFBO0FBQUE7QUFBTUEsNEJBQVdyQjtBQUFqQjtBQUZGLGNBRHdCO0FBQUEsWUFBekI7QUFESDtBQUxGLFFBREY7QUFnQkQ7Ozs7R0FsRW9CLGdCQUFNc0IsUzs7QUFtRTVCOzttQkFHY3hCLFEiLCJmaWxlIjoiMC5lMTJmNTFkYTA3NDQ4NmIwODI5NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFRleHRDaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgbWVzc2FnZXM6IFtdLFxyXG4gICAgICBmb2N1czogZmFsc2VcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHZhciBzb2NrZXQgPSB3aW5kb3cuc29ja2V0O1xyXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgc29ja2V0Lm9uKCdyZWNlaXZlTWVzc2FnZScsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcclxuICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdpbiByZWNlaXZlTWVzc2FnZSA6ICcsIGNvbnRleHQuc3RhdGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNvY2tldDogc29ja2V0XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgc2VuZE1lc3NhZ2UoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgd2luZG93LnNvY2tldC5lbWl0KCdzZW5kTWVzc2FnZScsIHRoaXMuc3RhdGUubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbnB1dChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgb25Gb2N1cygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGZvY3VzOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgb25CbHVyKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZm9jdXM6IHRydWVcclxuICAgIH0pO1xyXG4gXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDaGF0XCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc2VuZE1lc3NhZ2UuYmluZCh0aGlzKX0+IFxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubWVzc2FnZX0gb25Gb2N1cz17dGhpcy5vbkZvY3VzLmJpbmQodGhpcyl9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUlucHV0LmJpbmQodGhpcyl9IG9uQmx1cj17dGhpcy5vbkJsdXIuYmluZCh0aGlzKX0gLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8ZGl2IGlkPVwiY2hhdEJveFwiPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZXMubWFwKCAobWVzc2FnZU9iaikgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMz57bWVzc2FnZU9ialsndXNlcklkJ119PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2PnttZXNzYWdlT2JqLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dENoYXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9UZXh0Q2hhdC5qc3giXSwic291cmNlUm9vdCI6IiJ9