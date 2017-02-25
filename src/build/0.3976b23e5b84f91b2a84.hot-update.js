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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HYW1lL1RleHRDaGF0LmpzeD8yYjc0Il0sIm5hbWVzIjpbIlRleHRDaGF0Iiwic3RhdGUiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJmb2N1cyIsInNvY2tldCIsIndpbmRvdyIsImNvbnRleHQiLCJvbiIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVtaXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmRNZXNzYWdlIiwiYmluZCIsIm9uRm9jdXMiLCJ1cGRhdGVJbnB1dCIsIm1hcCIsIm1lc3NhZ2VPYmoiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7S0FFTUEsUTs7O0FBQ0osdUJBQWM7QUFBQTs7QUFBQTs7QUFFWixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVMsRUFERTtBQUVYQyxpQkFBVSxFQUZDO0FBR1hDLGNBQU87QUFISSxNQUFiO0FBRlk7QUFPYjs7Ozt5Q0FFbUI7QUFDbEIsV0FBSUMsU0FBU0MsT0FBT0QsTUFBcEI7QUFDQSxXQUFJRSxVQUFVLElBQWQ7QUFDQUYsY0FBT0csRUFBUCxDQUFVLGdCQUFWLEVBQTRCLFVBQVNOLE9BQVQsRUFBa0I7QUFDNUNLLGlCQUFRRSxRQUFSLENBQWlCO0FBQ2ZOLHFCQUFVRDtBQURLLFVBQWpCO0FBR0FRLGlCQUFRQyxHQUFSLENBQVksc0JBQVosRUFBb0NKLFFBQVFOLEtBQTVDO0FBQ0QsUUFMRDs7QUFPQSxZQUFLUSxRQUFMLENBQWM7QUFDWkosaUJBQVFBO0FBREksUUFBZDtBQUdEOzs7aUNBRVdPLEMsRUFBRztBQUNiQSxTQUFFQyxjQUFGO0FBQ0FQLGNBQU9ELE1BQVAsQ0FBY1MsSUFBZCxDQUFtQixhQUFuQixFQUFrQyxLQUFLYixLQUFMLENBQVdDLE9BQTdDO0FBQ0Q7OztpQ0FFV1UsQyxFQUFHO0FBQ2JBLFNBQUVDLGNBQUY7QUFDQSxZQUFLSixRQUFMLENBQWMsRUFBQ1AsU0FBU1UsRUFBRUcsTUFBRixDQUFTQyxLQUFuQixFQUFkO0FBQ0Q7Ozs2QkFFT0osQyxFQUFHO0FBQ1RBLFNBQUVDLGNBQUY7QUFDRDs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsYUFBTSxVQUFVLEtBQUtJLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQWhCO0FBQ0Usb0RBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU8sS0FBS2pCLEtBQUwsQ0FBV0MsT0FBckMsRUFBOEMsU0FBUyxLQUFLaUIsT0FBTCxDQUFhRCxJQUFiLENBQWtCLElBQWxCLENBQXZELEVBQWdGLFVBQVUsS0FBS0UsV0FBTCxDQUFpQkYsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBMUYsR0FERjtBQUVFLG9EQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLFFBQTNCO0FBRkYsVUFERjtBQUtFO0FBQUE7QUFBQSxhQUFLLElBQUcsU0FBUjtBQUNHLGdCQUFLakIsS0FBTCxDQUFXRSxRQUFYLENBQW9Ca0IsR0FBcEIsQ0FBeUIsVUFBQ0MsVUFBRDtBQUFBLG9CQUN4QjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBS0EsNEJBQVcsUUFBWDtBQUFMLGdCQURGO0FBRUU7QUFBQTtBQUFBO0FBQU1BLDRCQUFXcEI7QUFBakI7QUFGRixjQUR3QjtBQUFBLFlBQXpCO0FBREg7QUFMRixRQURGO0FBZ0JEOzs7O0dBeERvQixnQkFBTXFCLFM7O0FBeUQ1Qjs7bUJBR2N2QixRIiwiZmlsZSI6IjAuMzk3NmIyM2U1Yjg0ZjkxYjJhODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBUZXh0Q2hhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgIG1lc3NhZ2VzOiBbXSxcclxuICAgICAgZm9jdXM6IGZhbHNlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB2YXIgc29ja2V0ID0gd2luZG93LnNvY2tldDtcclxuICAgIHZhciBjb250ZXh0ID0gdGhpcztcclxuICAgIHNvY2tldC5vbigncmVjZWl2ZU1lc3NhZ2UnLCBmdW5jdGlvbihtZXNzYWdlKSB7XHJcbiAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xyXG4gICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygnaW4gcmVjZWl2ZU1lc3NhZ2UgOiAnLCBjb250ZXh0LnN0YXRlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzb2NrZXQ6IHNvY2tldFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIHNlbmRNZXNzYWdlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnc2VuZE1lc3NhZ2UnLCB0aGlzLnN0YXRlLm1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSW5wdXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZTogZS50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXMoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZXh0Q2hhdFwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnNlbmRNZXNzYWdlLmJpbmQodGhpcyl9PiBcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm1lc3NhZ2V9IG9uRm9jdXM9e3RoaXMub25Gb2N1cy5iaW5kKHRoaXMpfSBvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dC5iaW5kKHRoaXMpfSAvPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjaGF0Qm94XCI+XHJcbiAgICAgICAgICB7dGhpcy5zdGF0ZS5tZXNzYWdlcy5tYXAoIChtZXNzYWdlT2JqKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGgzPnttZXNzYWdlT2JqWyd1c2VySWQnXX08L2gzPlxyXG4gICAgICAgICAgICAgIDxkaXY+e21lc3NhZ2VPYmoubWVzc2FnZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0Q2hhdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9HYW1lL1RleHRDaGF0LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=