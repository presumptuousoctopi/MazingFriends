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
	      window.camera.keysUp = [];
	      window.camera.keysDown = [];
	      window.camera.keysLeft = [];
	      window.camera.keysRight = [];
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur() {
	      camera.keysUp = [87];
	      camera.keysDown = [83];
	      camera.keysLeft = [65];
	      camera.keysRight = [68];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1RleHRDaGF0LmpzeD8yYjc0Il0sIm5hbWVzIjpbIlRleHRDaGF0Iiwic3RhdGUiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJzb2NrZXQiLCJ3aW5kb3ciLCJjb250ZXh0Iiwib24iLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWl0IiwidGFyZ2V0IiwidmFsdWUiLCJjYW1lcmEiLCJrZXlzVXAiLCJrZXlzRG93biIsImtleXNMZWZ0Iiwia2V5c1JpZ2h0Iiwic2VuZE1lc3NhZ2UiLCJiaW5kIiwib25Gb2N1cyIsInVwZGF0ZUlucHV0Iiwib25CbHVyIiwibWFwIiwibWVzc2FnZU9iaiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztLQUVNQSxROzs7QUFDSix1QkFBYztBQUFBOztBQUFBOztBQUVaLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBUyxFQURFO0FBRVhDLGlCQUFVO0FBRkMsTUFBYjtBQUZZO0FBTWI7Ozs7eUNBRW1CO0FBQ2xCLFdBQUlDLFNBQVNDLE9BQU9ELE1BQXBCO0FBQ0EsV0FBSUUsVUFBVSxJQUFkO0FBQ0FGLGNBQU9HLEVBQVAsQ0FBVSxnQkFBVixFQUE0QixVQUFTTCxPQUFULEVBQWtCO0FBQzVDSSxpQkFBUUUsUUFBUixDQUFpQjtBQUNmTCxxQkFBVUQ7QUFESyxVQUFqQjtBQUdBTyxpQkFBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9DSixRQUFRTCxLQUE1QztBQUNELFFBTEQ7O0FBT0EsWUFBS08sUUFBTCxDQUFjO0FBQ1pKLGlCQUFRQTtBQURJLFFBQWQ7QUFHRDs7O2lDQUVXTyxDLEVBQUc7QUFDYkEsU0FBRUMsY0FBRjtBQUNBUCxjQUFPRCxNQUFQLENBQWNTLElBQWQsQ0FBbUIsYUFBbkIsRUFBa0MsS0FBS1osS0FBTCxDQUFXQyxPQUE3QztBQUNEOzs7aUNBRVdTLEMsRUFBRztBQUNiQSxTQUFFQyxjQUFGO0FBQ0EsWUFBS0osUUFBTCxDQUFjLEVBQUNOLFNBQVNTLEVBQUVHLE1BQUYsQ0FBU0MsS0FBbkIsRUFBZDtBQUNEOzs7K0JBRVM7QUFDUlYsY0FBT1csTUFBUCxDQUFjQyxNQUFkLEdBQXVCLEVBQXZCO0FBQ0FaLGNBQU9XLE1BQVAsQ0FBY0UsUUFBZCxHQUF5QixFQUF6QjtBQUNBYixjQUFPVyxNQUFQLENBQWNHLFFBQWQsR0FBeUIsRUFBekI7QUFDQWQsY0FBT1csTUFBUCxDQUFjSSxTQUFkLEdBQTBCLEVBQTFCO0FBRUQ7Ozs4QkFFUTtBQUNQSixjQUFPQyxNQUFQLEdBQWdCLENBQUMsRUFBRCxDQUFoQjtBQUNBRCxjQUFPRSxRQUFQLEdBQWtCLENBQUMsRUFBRCxDQUFsQjtBQUNBRixjQUFPRyxRQUFQLEdBQWtCLENBQUMsRUFBRCxDQUFsQjtBQUNBSCxjQUFPSSxTQUFQLEdBQW1CLENBQUMsRUFBRCxDQUFuQjtBQUVEOzs7OEJBRVE7QUFDUCxjQUNFO0FBQUE7QUFBQSxXQUFLLFdBQVUsVUFBZjtBQUNFO0FBQUE7QUFBQSxhQUFNLFVBQVUsS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBaEI7QUFDRSxvREFBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLckIsS0FBTCxDQUFXQyxPQUFyQyxFQUE4QyxTQUFTLEtBQUtxQixPQUFMLENBQWFELElBQWIsQ0FBa0IsSUFBbEIsQ0FBdkQsRUFBZ0YsVUFBVSxLQUFLRSxXQUFMLENBQWlCRixJQUFqQixDQUFzQixJQUF0QixDQUExRixFQUF1SCxRQUFRLEtBQUtHLE1BQUwsQ0FBWUgsSUFBWixDQUFpQixJQUFqQixDQUEvSCxHQURGO0FBRUUsb0RBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sUUFBM0I7QUFGRixVQURGO0FBS0U7QUFBQTtBQUFBLGFBQUssSUFBRyxTQUFSO0FBQ0csZ0JBQUtyQixLQUFMLENBQVdFLFFBQVgsQ0FBb0J1QixHQUFwQixDQUF5QixVQUFDQyxVQUFEO0FBQUEsb0JBQ3hCO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFLQSw0QkFBVyxRQUFYO0FBQUwsZ0JBREY7QUFFRTtBQUFBO0FBQUE7QUFBTUEsNEJBQVd6QjtBQUFqQjtBQUZGLGNBRHdCO0FBQUEsWUFBekI7QUFESDtBQUxGLFFBREY7QUFnQkQ7Ozs7R0FuRW9CLGdCQUFNMEIsUzs7QUFvRTVCOzttQkFHYzVCLFEiLCJmaWxlIjoiMC5iMGEwZjllZTYxNjA3OTVkZTAxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFRleHRDaGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtZXNzYWdlOiAnJyxcclxuICAgICAgbWVzc2FnZXM6IFtdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB2YXIgc29ja2V0ID0gd2luZG93LnNvY2tldDtcclxuICAgIHZhciBjb250ZXh0ID0gdGhpcztcclxuICAgIHNvY2tldC5vbigncmVjZWl2ZU1lc3NhZ2UnLCBmdW5jdGlvbihtZXNzYWdlKSB7XHJcbiAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygnaW4gcmVjZWl2ZU1lc3NhZ2UgOiAnLCBjb250ZXh0LnN0YXRlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzb2NrZXQ6IHNvY2tldFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIHNlbmRNZXNzYWdlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnc2VuZE1lc3NhZ2UnLCB0aGlzLnN0YXRlLm1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSW5wdXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogZS50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXMoKSB7XHJcbiAgICB3aW5kb3cuY2FtZXJhLmtleXNVcCA9IFtdO1xyXG4gICAgd2luZG93LmNhbWVyYS5rZXlzRG93biA9IFtdOyBcclxuICAgIHdpbmRvdy5jYW1lcmEua2V5c0xlZnQgPSBbXTsgXHJcbiAgICB3aW5kb3cuY2FtZXJhLmtleXNSaWdodCA9IFtdO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBvbkJsdXIoKSB7XHJcbiAgICBjYW1lcmEua2V5c1VwID0gWzg3XTtcclxuICAgIGNhbWVyYS5rZXlzRG93biA9IFs4M107IFxyXG4gICAgY2FtZXJhLmtleXNMZWZ0ID0gWzY1XTsgXHJcbiAgICBjYW1lcmEua2V5c1JpZ2h0ID0gWzY4XTtcclxuIFxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZXh0Q2hhdFwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnNlbmRNZXNzYWdlLmJpbmQodGhpcyl9PiBcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm1lc3NhZ2V9IG9uRm9jdXM9e3RoaXMub25Gb2N1cy5iaW5kKHRoaXMpfSBvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dC5iaW5kKHRoaXMpfSBvbkJsdXI9e3RoaXMub25CbHVyLmJpbmQodGhpcyl9IC8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBpZD1cImNoYXRCb3hcIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2VzLm1hcCggKG1lc3NhZ2VPYmopID0+IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDM+e21lc3NhZ2VPYmpbJ3VzZXJJZCddfTwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdj57bWVzc2FnZU9iai5tZXNzYWdlfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRDaGF0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbWUvVGV4dENoYXQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==