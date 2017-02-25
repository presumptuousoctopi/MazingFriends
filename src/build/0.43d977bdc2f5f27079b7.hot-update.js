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
	      // disabling 'wasd' for game movement
	      window.camera.keysUp = [];
	      window.camera.keysDown = [];
	      window.camera.keysLeft = [];
	      window.camera.keysRight = [];
	      window.addEventListener("keydown", function () {});
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur() {
	      // enabling 'wasd' for game movement
	      camera.keysUp = [87];
	      camera.keysDown = [83];
	      camera.keysLeft = [65];
	      camera.keysRight = [68];
	      window.addEventListener("keydown", onKeyDown);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1RleHRDaGF0LmpzeD8yYjc0Il0sIm5hbWVzIjpbIlRleHRDaGF0Iiwic3RhdGUiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJzb2NrZXQiLCJ3aW5kb3ciLCJjb250ZXh0Iiwib24iLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWl0IiwidGFyZ2V0IiwidmFsdWUiLCJjYW1lcmEiLCJrZXlzVXAiLCJrZXlzRG93biIsImtleXNMZWZ0Iiwia2V5c1JpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uS2V5RG93biIsInNlbmRNZXNzYWdlIiwiYmluZCIsIm9uRm9jdXMiLCJ1cGRhdGVJbnB1dCIsIm9uQmx1ciIsIm1hcCIsIm1lc3NhZ2VPYmoiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7S0FFTUEsUTs7O0FBQ0osdUJBQWM7QUFBQTs7QUFBQTs7QUFFWixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVMsRUFERTtBQUVYQyxpQkFBVTtBQUZDLE1BQWI7QUFGWTtBQU1iOzs7O3lDQUVtQjtBQUNsQixXQUFJQyxTQUFTQyxPQUFPRCxNQUFwQjtBQUNBLFdBQUlFLFVBQVUsSUFBZDtBQUNBRixjQUFPRyxFQUFQLENBQVUsZ0JBQVYsRUFBNEIsVUFBU0wsT0FBVCxFQUFrQjtBQUM1Q0ksaUJBQVFFLFFBQVIsQ0FBaUI7QUFDZkwscUJBQVVEO0FBREssVUFBakI7QUFHQU8saUJBQVFDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ0osUUFBUUwsS0FBNUM7QUFDRCxRQUxEOztBQU9BLFlBQUtPLFFBQUwsQ0FBYztBQUNaSixpQkFBUUE7QUFESSxRQUFkO0FBR0Q7OztpQ0FFV08sQyxFQUFHO0FBQ2JBLFNBQUVDLGNBQUY7QUFDQVAsY0FBT0QsTUFBUCxDQUFjUyxJQUFkLENBQW1CLGFBQW5CLEVBQWtDLEtBQUtaLEtBQUwsQ0FBV0MsT0FBN0M7QUFDRDs7O2lDQUVXUyxDLEVBQUc7QUFDYkEsU0FBRUMsY0FBRjtBQUNBLFlBQUtKLFFBQUwsQ0FBYyxFQUFDTixTQUFTUyxFQUFFRyxNQUFGLENBQVNDLEtBQW5CLEVBQWQ7QUFDRDs7OytCQUVTO0FBQ1I7QUFDQVYsY0FBT1csTUFBUCxDQUFjQyxNQUFkLEdBQXVCLEVBQXZCO0FBQ0FaLGNBQU9XLE1BQVAsQ0FBY0UsUUFBZCxHQUF5QixFQUF6QjtBQUNBYixjQUFPVyxNQUFQLENBQWNHLFFBQWQsR0FBeUIsRUFBekI7QUFDQWQsY0FBT1csTUFBUCxDQUFjSSxTQUFkLEdBQTBCLEVBQTFCO0FBQ0FmLGNBQU9nQixnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxZQUFNLENBQUUsQ0FBM0M7QUFFRDs7OzhCQUVRO0FBQ1A7QUFDQUwsY0FBT0MsTUFBUCxHQUFnQixDQUFDLEVBQUQsQ0FBaEI7QUFDQUQsY0FBT0UsUUFBUCxHQUFrQixDQUFDLEVBQUQsQ0FBbEI7QUFDQUYsY0FBT0csUUFBUCxHQUFrQixDQUFDLEVBQUQsQ0FBbEI7QUFDQUgsY0FBT0ksU0FBUCxHQUFtQixDQUFDLEVBQUQsQ0FBbkI7QUFDQWYsY0FBT2dCLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DQyxTQUFuQztBQUVEOzs7OEJBRVE7QUFDUCxjQUNFO0FBQUE7QUFBQSxXQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxhQUFNLFVBQVUsS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBaEI7QUFDRSxvREFBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLdkIsS0FBTCxDQUFXQyxPQUFyQyxFQUE4QyxTQUFTLEtBQUt1QixPQUFMLENBQWFELElBQWIsQ0FBa0IsSUFBbEIsQ0FBdkQsRUFBZ0YsVUFBVSxLQUFLRSxXQUFMLENBQWlCRixJQUFqQixDQUFzQixJQUF0QixDQUExRixFQUF1SCxRQUFRLEtBQUtHLE1BQUwsQ0FBWUgsSUFBWixDQUFpQixJQUFqQixDQUEvSCxHQURGO0FBRUUsb0RBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sUUFBM0I7QUFGRixVQURGO0FBS0U7QUFBQTtBQUFBLGFBQUssSUFBRyxTQUFSO0FBQ0csZ0JBQUt2QixLQUFMLENBQVdFLFFBQVgsQ0FBb0J5QixHQUFwQixDQUF5QixVQUFDQyxVQUFEO0FBQUEsb0JBQ3hCO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFLQSw0QkFBVyxRQUFYO0FBQUwsZ0JBREY7QUFFRTtBQUFBO0FBQUE7QUFBTUEsNEJBQVczQjtBQUFqQjtBQUZGLGNBRHdCO0FBQUEsWUFBekI7QUFESDtBQUxGLFFBREY7QUFnQkQ7Ozs7R0F2RW9CLGdCQUFNNEIsUzs7QUF3RTVCOzttQkFHYzlCLFEiLCJmaWxlIjoiMC40M2Q5NzdiZGMyZjVmMjcwNzliNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFRleHRDaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgbWVzc2FnZXM6IFtdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB2YXIgc29ja2V0ID0gd2luZG93LnNvY2tldDtcclxuICAgIHZhciBjb250ZXh0ID0gdGhpcztcclxuICAgIHNvY2tldC5vbigncmVjZWl2ZU1lc3NhZ2UnLCBmdW5jdGlvbihtZXNzYWdlKSB7XHJcbiAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygnaW4gcmVjZWl2ZU1lc3NhZ2UgOiAnLCBjb250ZXh0LnN0YXRlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzb2NrZXQ6IHNvY2tldFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIHNlbmRNZXNzYWdlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnc2VuZE1lc3NhZ2UnLCB0aGlzLnN0YXRlLm1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSW5wdXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogZS50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXMoKSB7XHJcbiAgICAvLyBkaXNhYmxpbmcgJ3dhc2QnIGZvciBnYW1lIG1vdmVtZW50XHJcbiAgICB3aW5kb3cuY2FtZXJhLmtleXNVcCA9IFtdO1xyXG4gICAgd2luZG93LmNhbWVyYS5rZXlzRG93biA9IFtdOyBcclxuICAgIHdpbmRvdy5jYW1lcmEua2V5c0xlZnQgPSBbXTsgXHJcbiAgICB3aW5kb3cuY2FtZXJhLmtleXNSaWdodCA9IFtdO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsICgpID0+IHt9ICk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIG9uQmx1cigpIHtcclxuICAgIC8vIGVuYWJsaW5nICd3YXNkJyBmb3IgZ2FtZSBtb3ZlbWVudFxyXG4gICAgY2FtZXJhLmtleXNVcCA9IFs4N107XHJcbiAgICBjYW1lcmEua2V5c0Rvd24gPSBbODNdOyBcclxuICAgIGNhbWVyYS5rZXlzTGVmdCA9IFs2NV07IFxyXG4gICAgY2FtZXJhLmtleXNSaWdodCA9IFs2OF07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDaGF0XCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc2VuZE1lc3NhZ2UuYmluZCh0aGlzKX0+IFxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubWVzc2FnZX0gb25Gb2N1cz17dGhpcy5vbkZvY3VzLmJpbmQodGhpcyl9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUlucHV0LmJpbmQodGhpcyl9IG9uQmx1cj17dGhpcy5vbkJsdXIuYmluZCh0aGlzKX0gLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8ZGl2IGlkPVwiY2hhdEJveFwiPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZXMubWFwKCAobWVzc2FnZU9iaikgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMz57bWVzc2FnZU9ialsndXNlcklkJ119PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2PnttZXNzYWdlT2JqLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dENoYXQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvR2FtZS9UZXh0Q2hhdC5qc3giXSwic291cmNlUm9vdCI6IiJ9