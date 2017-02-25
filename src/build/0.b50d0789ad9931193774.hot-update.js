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
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur() {
	      // enabling 'wasd' for game movement
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1RleHRDaGF0LmpzeD8yYjc0Il0sIm5hbWVzIjpbIlRleHRDaGF0Iiwic3RhdGUiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJzb2NrZXQiLCJ3aW5kb3ciLCJjb250ZXh0Iiwib24iLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWl0IiwidGFyZ2V0IiwidmFsdWUiLCJjYW1lcmEiLCJrZXlzVXAiLCJrZXlzRG93biIsImtleXNMZWZ0Iiwia2V5c1JpZ2h0Iiwic2VuZE1lc3NhZ2UiLCJiaW5kIiwib25Gb2N1cyIsInVwZGF0ZUlucHV0Iiwib25CbHVyIiwibWFwIiwibWVzc2FnZU9iaiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztLQUVNQSxROzs7QUFDSix1QkFBYztBQUFBOztBQUFBOztBQUVaLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBUyxFQURFO0FBRVhDLGlCQUFVO0FBRkMsTUFBYjtBQUZZO0FBTWI7Ozs7eUNBRW1CO0FBQ2xCLFdBQUlDLFNBQVNDLE9BQU9ELE1BQXBCO0FBQ0EsV0FBSUUsVUFBVSxJQUFkO0FBQ0FGLGNBQU9HLEVBQVAsQ0FBVSxnQkFBVixFQUE0QixVQUFTTCxPQUFULEVBQWtCO0FBQzVDSSxpQkFBUUUsUUFBUixDQUFpQjtBQUNmTCxxQkFBVUQ7QUFESyxVQUFqQjtBQUdBTyxpQkFBUUMsR0FBUixDQUFZLHNCQUFaLEVBQW9DSixRQUFRTCxLQUE1QztBQUNELFFBTEQ7O0FBT0EsWUFBS08sUUFBTCxDQUFjO0FBQ1pKLGlCQUFRQTtBQURJLFFBQWQ7QUFHRDs7O2lDQUVXTyxDLEVBQUc7QUFDYkEsU0FBRUMsY0FBRjtBQUNBUCxjQUFPRCxNQUFQLENBQWNTLElBQWQsQ0FBbUIsYUFBbkIsRUFBa0MsS0FBS1osS0FBTCxDQUFXQyxPQUE3QztBQUNEOzs7aUNBRVdTLEMsRUFBRztBQUNiQSxTQUFFQyxjQUFGO0FBQ0EsWUFBS0osUUFBTCxDQUFjLEVBQUNOLFNBQVNTLEVBQUVHLE1BQUYsQ0FBU0MsS0FBbkIsRUFBZDtBQUNEOzs7K0JBRVM7QUFDUjtBQUNBVixjQUFPVyxNQUFQLENBQWNDLE1BQWQsR0FBdUIsRUFBdkI7QUFDQVosY0FBT1csTUFBUCxDQUFjRSxRQUFkLEdBQXlCLEVBQXpCO0FBQ0FiLGNBQU9XLE1BQVAsQ0FBY0csUUFBZCxHQUF5QixFQUF6QjtBQUNBZCxjQUFPVyxNQUFQLENBQWNJLFNBQWQsR0FBMEIsRUFBMUI7QUFFRDs7OzhCQUVRO0FBQ1A7QUFDQUosY0FBT0MsTUFBUCxHQUFnQixDQUFDLEVBQUQsQ0FBaEI7QUFDQUQsY0FBT0UsUUFBUCxHQUFrQixDQUFDLEVBQUQsQ0FBbEI7QUFDQUYsY0FBT0csUUFBUCxHQUFrQixDQUFDLEVBQUQsQ0FBbEI7QUFDQUgsY0FBT0ksU0FBUCxHQUFtQixDQUFDLEVBQUQsQ0FBbkI7QUFFRDs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsYUFBTSxVQUFVLEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQWhCO0FBQ0Usb0RBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU8sS0FBS3JCLEtBQUwsQ0FBV0MsT0FBckMsRUFBOEMsU0FBUyxLQUFLcUIsT0FBTCxDQUFhRCxJQUFiLENBQWtCLElBQWxCLENBQXZELEVBQWdGLFVBQVUsS0FBS0UsV0FBTCxDQUFpQkYsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBMUYsRUFBdUgsUUFBUSxLQUFLRyxNQUFMLENBQVlILElBQVosQ0FBaUIsSUFBakIsQ0FBL0gsR0FERjtBQUVFLG9EQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLFFBQTNCO0FBRkYsVUFERjtBQUtFO0FBQUE7QUFBQSxhQUFLLElBQUcsU0FBUjtBQUNHLGdCQUFLckIsS0FBTCxDQUFXRSxRQUFYLENBQW9CdUIsR0FBcEIsQ0FBeUIsVUFBQ0MsVUFBRDtBQUFBLG9CQUN4QjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBS0EsNEJBQVcsUUFBWDtBQUFMLGdCQURGO0FBRUU7QUFBQTtBQUFBO0FBQU1BLDRCQUFXekI7QUFBakI7QUFGRixjQUR3QjtBQUFBLFlBQXpCO0FBREg7QUFMRixRQURGO0FBZ0JEOzs7O0dBckVvQixnQkFBTTBCLFM7O0FBc0U1Qjs7bUJBR2M1QixRIiwiZmlsZSI6IjAuYjUwZDA3ODlhZDk5MzExOTM3NzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBUZXh0Q2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgIG1lc3NhZ2VzOiBbXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdmFyIHNvY2tldCA9IHdpbmRvdy5zb2NrZXQ7XHJcbiAgICB2YXIgY29udGV4dCA9IHRoaXM7XHJcbiAgICBzb2NrZXQub24oJ3JlY2VpdmVNZXNzYWdlJywgZnVuY3Rpb24obWVzc2FnZSkge1xyXG4gICAgICBjb250ZXh0LnNldFN0YXRlKHtcclxuICAgICAgICBtZXNzYWdlczogbWVzc2FnZVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ2luIHJlY2VpdmVNZXNzYWdlIDogJywgY29udGV4dC5zdGF0ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc29ja2V0OiBzb2NrZXRcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBzZW5kTWVzc2FnZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ3NlbmRNZXNzYWdlJywgdGhpcy5zdGF0ZS5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUlucHV0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzKCkge1xyXG4gICAgLy8gZGlzYWJsaW5nICd3YXNkJyBmb3IgZ2FtZSBtb3ZlbWVudFxyXG4gICAgd2luZG93LmNhbWVyYS5rZXlzVXAgPSBbXTtcclxuICAgIHdpbmRvdy5jYW1lcmEua2V5c0Rvd24gPSBbXTsgXHJcbiAgICB3aW5kb3cuY2FtZXJhLmtleXNMZWZ0ID0gW107IFxyXG4gICAgd2luZG93LmNhbWVyYS5rZXlzUmlnaHQgPSBbXTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgb25CbHVyKCkge1xyXG4gICAgLy8gZW5hYmxpbmcgJ3dhc2QnIGZvciBnYW1lIG1vdmVtZW50XHJcbiAgICBjYW1lcmEua2V5c1VwID0gWzg3XTtcclxuICAgIGNhbWVyYS5rZXlzRG93biA9IFs4M107IFxyXG4gICAgY2FtZXJhLmtleXNMZWZ0ID0gWzY1XTsgXHJcbiAgICBjYW1lcmEua2V5c1JpZ2h0ID0gWzY4XTtcclxuIFxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZXh0Q2hhdFwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnNlbmRNZXNzYWdlLmJpbmQodGhpcyl9PiBcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm1lc3NhZ2V9IG9uRm9jdXM9e3RoaXMub25Gb2N1cy5iaW5kKHRoaXMpfSBvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dC5iaW5kKHRoaXMpfSBvbkJsdXI9e3RoaXMub25CbHVyLmJpbmQodGhpcyl9IC8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBpZD1cImNoYXRCb3hcIj5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2VzLm1hcCggKG1lc3NhZ2VPYmopID0+IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aDM+e21lc3NhZ2VPYmpbJ3VzZXJJZCddfTwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdj57bWVzc2FnZU9iai5tZXNzYWdlfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRDaGF0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0dhbWUvVGV4dENoYXQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==